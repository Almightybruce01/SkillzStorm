import { useCallback, useEffect, useRef, useState } from 'react';
import { STORM_GRID_TRACKS } from './data/tracks/bundle';
import { buildPolyline } from './engine/trackGeometry';
import type { Polyline } from './engine/trackGeometry';
import {
  createPlayerState,
  createRival,
  DEFAULT_RACE_CONFIG,
  getWorldPose,
  stepCar,
  stepRival,
  type CarState,
} from './engine/RaceSimulation';
import type { RivalBrain } from './engine/RaceSimulation';
import { pickRivals } from './ai/rivalPersonalities';
import { sfxBoost, sfxCountdown, sfxFinish, sfxLap, sfxEngineHum, unlockRacingAudio } from './audio/racingAudio';
import { BODY_STYLES, CAR_CLASSES, ENGINE_PRESETS } from './constants/eliteTuning';

type Phase = 'garage' | 'pick' | 'countdown' | 'race' | 'finish';

const TOTAL_LAPS = 3;
const LS_ENG = 'sgp_elite_engine';
const LS_BOD = 'sgp_elite_body';

type RivalRun = CarState & { hue: number; brain: RivalBrain };

export function StormGridSoloView({
  gameTitle,
  onFinish,
}: {
  gameTitle: string;
  onFinish: (finalScore: number) => void;
}) {
  const [phase, setPhase] = useState<Phase>('garage');
  const [engineIdx, setEngineIdx] = useState(0);
  const [bodyIdx, setBodyIdx] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);
  const [count, setCount] = useState(3);
  const [hudTime, setHudTime] = useState(0);
  const [finishScore, setFinishScore] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const polyRef = useRef<Polyline | null>(null);
  const playerRef = useRef(createPlayerState());
  const rivalsRef = useRef<RivalRun[]>([]);
  const keysRef = useRef(new Set<string>());
  const boostHeldRef = useRef(false);
  const boostCdRef = useRef(0);
  const boostTimerRef = useRef(0);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const timeRef = useRef(0);
  const finishedRef = useRef(false);

  const track = STORM_GRID_TRACKS[trackIdx];
  const carClass = CAR_CLASSES[engineIdx];
  const bodyStyle = BODY_STYLES[bodyIdx];

  useEffect(() => {
    try {
      const e = localStorage.getItem(LS_ENG);
      const b = localStorage.getItem(LS_BOD);
      if (e != null) {
        const n = parseInt(e, 10);
        if (!Number.isNaN(n)) setEngineIdx(Math.min(CAR_CLASSES.length - 1, Math.max(0, n)));
      }
      if (b != null) {
        const n = parseInt(b, 10);
        if (!Number.isNaN(n)) setBodyIdx(Math.min(BODY_STYLES.length - 1, Math.max(0, n)));
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_ENG, String(engineIdx));
      localStorage.setItem(LS_BOD, String(bodyIdx));
    } catch {
      /* ignore */
    }
  }, [engineIdx, bodyIdx]);

  useEffect(() => {
    polyRef.current = buildPolyline(track.points);
  }, [track]);

  const bootRace = useCallback(() => {
    unlockRacingAudio();
    const poly = polyRef.current;
    if (!poly) return;
    finishedRef.current = false;
    boostCdRef.current = 0;
    boostTimerRef.current = 0;
    playerRef.current = createPlayerState();
    const roster = pickRivals(3);
    rivalsRef.current = roster.map((r, i) => {
      const st = createRival(0.12 + i * 0.07, r.brain);
      return { ...st, hue: r.hue, brain: r.brain };
    });
    timeRef.current = 0;
    setHudTime(0);
    setFinishScore(null);
    setPhase('race');
  }, []);

  useEffect(() => {
    if (phase !== 'countdown') return;
    setCount(3);
    const id = window.setInterval(() => {
      setCount((c) => {
        sfxCountdown(c);
        if (c <= 1) {
          window.clearInterval(id);
          sfxCountdown(0);
          bootRace();
          return 0;
        }
        return c - 1;
      });
    }, 700);
    return () => window.clearInterval(id);
  }, [phase, bootRace]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' && phase === 'race') e.preventDefault();
      keysRef.current.add(e.code);
      if (e.code === 'Escape' && !finishedRef.current) {
        finishedRef.current = true;
        onFinish(Math.floor(timeRef.current));
      }
    };
    const offKey = (e: KeyboardEvent) => keysRef.current.delete(e.code);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', offKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', offKey);
    };
  }, [onFinish, phase]);

  useEffect(() => {
    if (phase !== 'race') return;

    const cfg = {
      ...DEFAULT_RACE_CONFIG,
      accel: DEFAULT_RACE_CONFIG.accel * carClass.accelMul,
      maxSpeed: DEFAULT_RACE_CONFIG.maxSpeed * carClass.topSpeedMul,
    };

    lastRef.current = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastRef.current) / 1000);
      lastRef.current = now;
      const poly = polyRef.current;
      if (!poly || finishedRef.current) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      const k = keysRef.current;
      let throttle = 0;
      if (k.has('ArrowUp') || k.has('KeyW')) throttle += 1;
      if (k.has('ArrowDown') || k.has('KeyS')) throttle -= 0.55;
      let steer = 0;
      if (k.has('ArrowLeft') || k.has('KeyA')) steer -= 1;
      if (k.has('ArrowRight') || k.has('KeyD')) steer += 1;

      boostCdRef.current = Math.max(0, boostCdRef.current - dt);
      boostTimerRef.current = Math.max(0, boostTimerRef.current - dt);
      const wantBoost = k.has('Space') || boostHeldRef.current;
      if (wantBoost && boostCdRef.current <= 0 && !finishedRef.current) {
        boostCdRef.current = carClass.id === 'proximity-x' ? 2 : 2.35;
        boostTimerRef.current = 0.42;
        sfxBoost();
      }

      const prevLap = playerRef.current.lap;
      stepCar(playerRef.current, poly, throttle, steer, dt, cfg);
      if (boostTimerRef.current > 0) {
        playerRef.current.speed = Math.min(playerRef.current.speed + 4.2 * dt, cfg.maxSpeed * 1.42);
      }
      timeRef.current += dt * 1000;
      setHudTime(timeRef.current);

      if (playerRef.current.lap > prevLap) {
        sfxLap();
      }

      rivalsRef.current.forEach((rival) => {
        stepRival(rival, poly, dt, cfg, timeRef.current / 1000);
      });

      sfxEngineHum(playerRef.current.speed / cfg.maxSpeed);

      if (playerRef.current.lap > TOTAL_LAPS && !finishedRef.current) {
        finishedRef.current = true;
        const score = Math.floor(500000 / (1 + timeRef.current / 30000) + TOTAL_LAPS * 5000);
        sfxFinish();
        setFinishScore(score);
        setPhase('finish');
        onFinish(score);
      }

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        const w = canvas.width;
        const h = canvas.height;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, w, h);
        ctx.scale(dpr, dpr);
        const cw = w / dpr;
        const ch = h / dpr;
        const poseP = getWorldPose(poly, playerRef.current, 1);
        ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(-poseP.angle);
        ctx.translate(-poseP.x, -poseP.y);
        const pts = poly.points;
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          ctx.strokeStyle = track.theme;
          ctx.globalAlpha = 0.22;
          ctx.lineWidth = (a.w + b.w) * 0.45;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.globalAlpha = 0.95;
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        ctx.restore();
        ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(-poseP.angle);
        ctx.translate(-poseP.x, -poseP.y);

        const drawCar = (x: number, y: number, ang: number, hue: number, lead: boolean) => {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(ang);
          ctx.fillStyle = lead ? `hsl(${hue} 78% 58%)` : `hsl(${hue} 85% 52%)`;
          ctx.strokeStyle = lead ? `hsl(${bodyStyle.accentHue} 90% 45%)` : 'transparent';
          ctx.lineWidth = lead ? 1.5 : 0;
          ctx.shadowColor = track.theme;
          ctx.shadowBlur = lead ? 18 : 10;
          ctx.beginPath();
          ctx.moveTo(-14 + 3, -8);
          ctx.lineTo(14 - 3, -8);
          ctx.quadraticCurveTo(14, -8, 14, -8 + 3);
          ctx.lineTo(14, 8 - 3);
          ctx.quadraticCurveTo(14, 8, 14 - 3, 8);
          ctx.lineTo(-14 + 3, 8);
          ctx.quadraticCurveTo(-14, 8, -14, 8 - 3);
          ctx.lineTo(-14, -8 + 3);
          ctx.quadraticCurveTo(-14, -8, -14 + 3, -8);
          ctx.closePath();
          ctx.fill();
          if (lead) ctx.stroke();
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(10, -5, 4, 3);
          ctx.restore();
        };

        rivalsRef.current.forEach((rv) => {
          const p = getWorldPose(poly, rv, 1);
          drawCar(p.x, p.y, p.angle, rv.hue, false);
        });
        drawCar(poseP.x, poseP.y, poseP.angle, bodyStyle.primaryHue, true);

        if (boostTimerRef.current > 0) {
          ctx.save();
          ctx.translate(poseP.x, poseP.y);
          ctx.rotate(poseP.angle);
          const g = ctx.createLinearGradient(-52, 0, -10, 0);
          g.addColorStop(0, 'rgba(251, 191, 36, 0)');
          g.addColorStop(0.38, 'rgba(249, 115, 22, 0.88)');
          g.addColorStop(1, 'rgba(220, 38, 38, 0.95)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.moveTo(-16, -7);
          ctx.lineTo(-54, -4);
          ctx.lineTo(-62, 0);
          ctx.lineTo(-54, 4);
          ctx.lineTo(-16, 7);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '600 13px system-ui,sans-serif';
        ctx.fillText(`${gameTitle} · ${ENGINE_PRESETS[engineIdx].label} · ${track.name}`, 14, 22);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px system-ui,sans-serif';
        ctx.fillText(
          `Lap ${Math.min(playerRef.current.lap, TOTAL_LAPS)}/${TOTAL_LAPS} · ${(timeRef.current / 1000).toFixed(1)}s · Boost CD ${boostCdRef.current > 0 ? boostCdRef.current.toFixed(1) : 'READY'}s`,
          14,
          40
        );
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('WASD · Space / BOOST button · Esc exit', 14, ch / dpr - 14);
      }

      if (!finishedRef.current) rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [
    phase,
    gameTitle,
    onFinish,
    track,
    carClass.accelMul,
    carClass.topSpeedMul,
    carClass.id,
    engineIdx,
    bodyStyle.accentHue,
    bodyStyle.primaryHue,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const ro = new ResizeObserver(() => {
      const r = canvas.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(r.width * dpr);
      canvas.height = Math.floor(Math.min(520, Math.max(300, r.width * 0.56)) * dpr);
    });
    ro.observe(canvas.parentElement);
    return () => ro.disconnect();
  }, []);

  const shell =
    'rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 shadow-[0_0_60px_rgba(139,92,246,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]';

  if (phase === 'garage') {
    return (
      <div className={`${shell} p-5 text-slate-100`}>
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-violet-500/20 pb-4">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.25em] text-violet-300/90">Elite garage</p>
            <h2 className="font-display text-xl font-black bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              {gameTitle}
            </h2>
          </div>
          <span className="rounded-lg border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-200">AAA · Solo</span>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Pick engine and body before choosing a circuit. Loadout is saved on this device for multiplayer ghost colors too.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Engine</p>
            <div className="grid gap-2">
              {ENGINE_PRESETS.map((eng, i) => (
                <button
                  key={eng.id}
                  type="button"
                  onClick={() => setEngineIdx(i)}
                  className={`rounded-xl border px-3 py-2.5 text-left transition-all ${
                    engineIdx === i
                      ? 'border-cyan-400/60 bg-cyan-500/15 shadow-[0_0_24px_rgba(34,211,238,0.12)]'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <span className="block text-sm font-bold text-slate-100">{eng.label}</span>
                  <span className="text-[10px] text-slate-500">{eng.blurb}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Body style</p>
            <div className="grid grid-cols-2 gap-2">
              {BODY_STYLES.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBodyIdx(i)}
                  className={`rounded-xl border px-2 py-2 text-center transition-all ${
                    bodyIdx === i ? 'border-fuchsia-400/55 bg-fuchsia-500/10' : 'border-slate-600'
                  }`}
                >
                  <span
                    className="mx-auto mb-1 block h-3 w-8 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, hsl(${b.primaryHue} 85% 50%), hsl(${b.accentHue} 90% 55%))`,
                    }}
                  />
                  <span className="text-[10px] font-bold text-slate-200">{b.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-xl border border-slate-700/80 bg-slate-900/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/90">Instructions</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[11px] text-slate-400">
            <li>Throttle / brake: W S or ↑ ↓</li>
            <li>Steer: A D or ← →</li>
            <li>
              <strong className="text-orange-300">Boost</strong>: hold Space or press the on-screen BOOST — short fire burst, ~2.4s recharge (faster on Overdrive X).
            </li>
            <li>Twelve circuits including Mystic Rainforest Apex and Coastal Velocity Run.</li>
            <li>Esc leaves the session (scores to profile flow).</li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setPhase('pick')}
          className="mt-5 w-full rounded-xl border border-violet-500/40 bg-gradient-to-r from-violet-600/35 to-fuchsia-600/25 py-3 font-display text-sm font-black text-white shadow-[0_0_28px_rgba(139,92,246,0.2)]"
        >
          Choose circuit →
        </button>
      </div>
    );
  }

  if (phase === 'pick') {
    return (
      <div className={`${shell} p-5 text-slate-100`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/15 pb-3">
          <h2 className="font-display text-lg font-black text-cyan-200">Circuit select</h2>
          <button type="button" onClick={() => setPhase('garage')} className="text-[11px] text-slate-500 underline">
            ← Garage
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-400">
          {STORM_GRID_TRACKS.length} worlds · {ENGINE_PRESETS[engineIdx].label} · {BODY_STYLES[bodyIdx].label}
        </p>
        <div className="mt-4 grid max-h-[340px] gap-2 overflow-y-auto sm:grid-cols-2">
          {STORM_GRID_TRACKS.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => {
                setTrackIdx(i);
                setPhase('countdown');
              }}
              className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                trackIdx === i ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-600 hover:border-cyan-500/40'
              }`}
            >
              <span className="block font-bold text-slate-100">{t.name}</span>
              <span className="text-[10px] text-slate-500">{t.theme}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === 'countdown') {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-fuchsia-500/35 bg-slate-950/95 p-8 shadow-[0_0_40px_rgba(232,121,249,0.15)]">
        <p className="font-display text-6xl font-black text-fuchsia-300">{count}</p>
        <p className="mt-2 text-sm text-slate-400">Get ready — {track.name}</p>
      </div>
    );
  }

  if (phase === 'finish') {
    return (
      <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-slate-950/95 p-6 text-center shadow-[0_0_32px_rgba(16,185,129,0.12)]">
        <p className="font-display text-xl font-black text-emerald-300">Race complete</p>
        {finishScore != null && <p className="text-2xl font-black text-amber-300">{finishScore}</p>}
        <p className="text-xs text-slate-500">Time {(hudTime / 1000).toFixed(2)}s</p>
        <button
          type="button"
          onClick={() => onFinish(finishScore ?? 0)}
          className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 py-2 text-sm text-cyan-100"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-black shadow-[0_0_40px_rgba(34,211,238,0.1)]">
        <canvas ref={canvasRef} className="block w-full touch-none" />
        <button
          type="button"
          className="absolute bottom-16 right-3 flex h-14 w-20 touch-manipulation select-none flex-col items-center justify-center rounded-xl border border-orange-500/50 bg-gradient-to-b from-orange-500/30 to-red-600/40 font-display text-[10px] font-black text-orange-100 shadow-[0_0_24px_rgba(249,115,22,0.35)] active:scale-95"
          onPointerDown={(e) => {
            e.preventDefault();
            boostHeldRef.current = true;
          }}
          onPointerUp={() => {
            boostHeldRef.current = false;
          }}
          onPointerLeave={() => {
            boostHeldRef.current = false;
          }}
        >
          BOOST
          <span className="text-[8px] font-normal text-orange-200/80">fire</span>
        </button>
      </div>
    </div>
  );
}
