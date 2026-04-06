import { useCallback, useEffect, useRef } from 'react';
import { getGameEngine } from './getGameEngine';
import type { NeonEngineInstance } from './types';

interface Props {
  engineKey: string;
  gameTitle: string;
  onClose: (finalScore: number) => void;
}

/**
 * Full-width neon canvas player: rAF loop, keyboard set + prevKeys, resize-aware.
 */
export function NeonCanvasGame({ engineKey, gameTitle, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<NeonEngineInstance | null>(null);
  const keysRef = useRef(new Set<string>());
  const prevKeysRef = useRef(new Set<string>());
  const rafRef = useRef(0);
  const lastRef = useRef(performance.now());
  const endedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const sizeRef = useRef({ w: 400, h: 360 });
  const dprRef = useRef(1);
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const factory = getGameEngine(engineKey);
    const engine = factory(gameTitle);
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
  }, [engineKey, gameTitle, resize]);

  const exit = () => {
    if (endedRef.current) return;
    endedRef.current = true;
    const s = engineRef.current?.getScore() ?? 0;
    onCloseRef.current(s);
  };

  return (
    <div className="neon-canvas-shell w-full rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_32px_rgba(0,255,204,0.12)] bg-[#050810]">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-cyan-500/25 bg-black/40">
        <span className="text-[10px] sm:text-xs text-cyan-300/90 truncate tracking-wide font-semibold">
          {gameTitle}
        </span>
        <button
          type="button"
          onClick={exit}
          className="text-[10px] sm:text-xs px-3 py-1 rounded-lg border border-fuchsia-500/50 text-fuchsia-200 hover:bg-fuchsia-500/10 transition-colors"
        >
          Exit
        </button>
      </div>
      <div className="relative w-full min-h-[280px] max-h-[480px]">
        <canvas ref={canvasRef} className="block w-full h-full touch-none" />
      </div>
      <p className="text-[9px] text-slate-500 px-3 py-2 border-t border-cyan-500/15">
        Arrows / Space · 1–4 for quizzes · letter keys for typing
      </p>
    </div>
  );
}
