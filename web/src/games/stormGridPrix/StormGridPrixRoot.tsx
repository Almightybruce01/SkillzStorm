import { useState } from 'react';
import { StormGridSoloView } from './StormGridSoloView';
import { StormGridMultiplayerView } from './StormGridMultiplayerView';

export function StormGridPrixRoot({
  gameTitle,
  onFinish,
}: {
  gameTitle: string;
  onFinish: (finalScore: number) => void;
}) {
  const [mode, setMode] = useState<'solo' | 'elite'>('solo');

  return (
    <div className="relative space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900/98 to-slate-950 p-4 shadow-[0_0_80px_rgba(59,130,246,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.14),_transparent_55%)]" />
      <div className="relative flex flex-wrap gap-1 rounded-xl border border-slate-700/80 bg-slate-950/80 p-1">
        <button
          type="button"
          onClick={() => setMode('solo')}
          className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:flex-none ${
            mode === 'solo'
              ? 'bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.12)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Solo Grand Prix
        </button>
        <button
          type="button"
          onClick={() => setMode('elite')}
          className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:flex-none ${
            mode === 'elite'
              ? 'bg-violet-500/25 text-violet-100 ring-1 ring-violet-400/45 shadow-[0_0_22px_rgba(139,92,246,0.18)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Multiplayer Elite
        </button>
      </div>

      {mode === 'solo' ? (
        <StormGridSoloView gameTitle={gameTitle} onFinish={onFinish} />
      ) : (
        <StormGridMultiplayerView gameTitle={gameTitle} onFinish={onFinish} />
      )}
    </div>
  );
}
