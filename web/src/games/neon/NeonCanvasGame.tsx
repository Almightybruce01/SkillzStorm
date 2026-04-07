import { useCallback, useEffect, useRef, useState } from 'react';
import type { Grade } from '../questionBank';
import { unlockAudio } from './audio/sfx';
import { getGameEngine } from './getGameEngine';
import type { NeonEngineInstance } from './types';
import { CompactHorizontalAd } from '../../components/ads/AdBanner';

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

interface Props {
  engineKey: string;
  gameTitle: string;
  /** Catalog id — drives per-title theme / tuning in shared neon engines */
  gameSlug: string;
  /** Optional grade band for math/quiz/typing content banks */
  grade?: Grade;
  onClose: (finalScore: number) => void;
  /** Shown on the idle / insert-coin screen */
  description?: string;
  rating?: number;
  /** e.g. "1–4 players" */
  playersLabel?: string;
}

/**
 * Full-width neon canvas player: rAF loop, keyboard set + prevKeys, resize-aware.
 * Replit-style idle overlay (INSERT COIN / PRESS START) with logo + ad before the run loop starts.
 */
export function NeonCanvasGame({
  engineKey,
  gameTitle,
  gameSlug,
  grade,
  onClose,
  description,
  rating,
  playersLabel,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<NeonEngineInstance | null>(null);
  const keysRef = useRef(new Set<string>());
  const prevKeysRef = useRef(new Set<string>());
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const endedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const sizeRef = useRef({ w: 400, h: 360 });
  const dprRef = useRef(1);
  const [gameStarted, setGameStarted] = useState(false);
  onCloseRef.current = onClose;

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;
    const w = Math.max(280, Math.floor(rect.width));
    const h = Math.min(480, Math.max(280, Math.floor(rect.height)));
    sizeRef.current = { w, h };
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    engine.init(w, h, dpr);
  }, []);

  useEffect(() => {
    if (!gameStarted) return;
    unlockAudio();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const factory = getGameEngine(engineKey);
    const engine = factory({ title: gameTitle, slug: gameSlug || 'game', grade });
    engineRef.current = engine;
    endedRef.current = false;
    resize();

    const addKey = (e: KeyboardEvent) => {
      e.preventDefault();
      keysRef.current.add(e.key);
      keysRef.current.add(e.code);
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        keysRef.current.add(e.key.toUpperCase());
      }
    };
    const remKey = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key);
      keysRef.current.delete(e.code);
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        keysRef.current.delete(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', addKey, { passive: false });
    window.addEventListener('keyup', remKey);

    const ro = new ResizeObserver(() => resize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    lastRef.current = performance.now();

    const loop = (now: number) => {
      if (endedRef.current) return;
      const eng = engineRef.current;
      if (!eng) return;
      const dt = Math.min(0.05, (now - lastRef.current) / 1000);
      lastRef.current = now;
      const keys = keysRef.current;
      const prev = prevKeysRef.current;
      eng.update(dt, keys, prev);
      prevKeysRef.current = new Set(keys);

      const { w, h } = sizeRef.current;
      const dpr = dprRef.current;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      eng.draw(ctx, w, h);

      if (eng.isGameOver() && !endedRef.current) {
        endedRef.current = true;
        onCloseRef.current(eng.getScore());
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', addKey);
      window.removeEventListener('keyup', remKey);
      ro.disconnect();
      engineRef.current = null;
    };
  }, [engineKey, gameTitle, gameSlug, grade, resize, gameStarted]);

  const exit = () => {
    if (endedRef.current) return;
    endedRef.current = true;
    const s = engineRef.current?.getScore() ?? 0;
    onCloseRef.current(s);
  };

  const startGame = () => {
    unlockAudio();
    setGameStarted(true);
  };

  const idle = !gameStarted;

  return (
    <div className="neon-canvas-shell w-full rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_32px_rgba(0,255,204,0.12)] bg-[#050810]">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-cyan-500/25 bg-black/40">
        <span className="text-[10px] sm:text-xs text-cyan-300/90 truncate tracking-wide font-semibold font-display">
          {gameTitle}
        </span>
        <button
          type="button"
          onClick={exit}
          className="text-[10px] sm:text-xs px-3 py-1 rounded-lg border border-fuchsia-500/50 text-fuchsia-200 hover:bg-fuchsia-500/10 transition-colors font-display"
        >
          Exit
        </button>
      </div>
      <div className="relative w-full min-h-[280px] max-h-[480px] bg-[#010008]">
        <canvas
          ref={canvasRef}
          className={`block w-full h-full touch-none ${idle ? 'opacity-0 pointer-events-none absolute inset-0' : ''}`}
          aria-hidden={idle}
        />

        {idle && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/85 z-10"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <div
              className="flex flex-col items-center gap-4 p-8 sm:p-10 border-2 border-[#ff0066]/50 bg-slate-900/90 max-w-lg w-full mx-4 relative text-slate-100"
              style={{
                boxShadow: '0 0 40px rgba(255,0,102,0.2), inset 0 0 40px rgba(255,0,102,0.02)',
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
              }}
            >
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff0066]/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff0066]/50" />

              <img
                src="/images/logo.png"
                alt="SkillzStorm"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,102,0.35)]"
              />

              <h2 className="text-xl md:text-3xl font-display text-white text-center leading-tight neon-text-arcade-primary">
                {gameTitle.toUpperCase() || 'LOADING...'}
              </h2>

              <div className="font-display text-[9px] text-[#ff0066]/80 flex items-center gap-2">
                <PlayIcon className="w-3 h-3" /> INSERT COIN
              </div>

              {description && (
                <p className="text-slate-400 text-xs text-center leading-relaxed max-w-xs">{description}</p>
              )}

              <div className="grid grid-cols-2 gap-2 w-full text-[8px] font-display text-slate-500 border-t border-b border-slate-700/80 py-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">MOVE</span> ARROWS / WASD
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">ACTION</span> SPACE / Z
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">SELECT</span> 1 / 2 / 3 / 4
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">PAUSE</span> P / ESC
                </div>
              </div>

              <button
                type="button"
                onClick={startGame}
                className="relative z-20 arcade-btn arcade-btn-primary text-sm px-12 py-4 w-full justify-center flex items-center cursor-pointer"
              >
                <PlayIcon className="w-5 h-5 mr-2 shrink-0" /> PRESS START
              </button>

              {/* Ad below the start button so AdSense layers cannot sit on top of the primary CTA */}
              <div className="relative z-10 w-full max-w-[320px] max-h-[100px] overflow-hidden opacity-90 [&_.ad-container]:max-h-[90px]">
                <CompactHorizontalAd />
              </div>

              {(typeof rating === 'number' || playersLabel) && (
                <div className="font-display text-[8px] text-slate-500 flex items-center gap-2 flex-wrap justify-center">
                  {typeof rating === 'number' && (
                    <>
                      <span className="text-amber-400">★</span> {rating.toFixed(1)} RATING
                    </>
                  )}
                  {typeof rating === 'number' && playersLabel && <span className="mx-2 opacity-30">·</span>}
                  {playersLabel && <span>{playersLabel}</span>}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!idle && (
        <p className="text-[9px] text-slate-500 px-3 py-2 border-t border-cyan-500/15 font-display">
          Arrows / Space · 1–4 for quizzes · letter keys for typing
        </p>
      )}
    </div>
  );
}
