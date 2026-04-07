import { useEffect, useState, useRef } from 'react';
import { ADSENSE_CONFIG, isAdFree } from './AdConfig';
import { AdBanner } from './AdBanner';

/** Shown when the player exits mid-run — monetized interstitial before returning to shell. */
export function ExitGameAd({
  show,
  score,
  gameTitle,
  onStay,
  onLeave,
}: {
  show: boolean;
  score: number;
  gameTitle: string;
  onStay: () => void;
  onLeave: () => void;
}) {
  const [seconds, setSeconds] = useState(2);
  const [canLeave, setCanLeave] = useState(false);
  const tracked = useRef(false);

  useEffect(() => {
    if (!show || isAdFree()) return;
    if (!tracked.current) {
      const n = parseInt(localStorage.getItem('sz_ad_impressions') || '0', 10);
      localStorage.setItem('sz_ad_impressions', String(n + 1));
      tracked.current = true;
    }
    setSeconds(2);
    setCanLeave(false);
    const t = setInterval(() => {
      setSeconds((p) => {
        if (p <= 1) {
          setCanLeave(true);
          clearInterval(t);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [show]);

  useEffect(() => {
    if (!show) tracked.current = false;
  }, [show]);

  if (!show || isAdFree()) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-950/95 p-6 shadow-[0_0_48px_rgba(0,255,204,0.12)]">
        <h2 className="text-center font-display text-xl font-black tracking-wide text-cyan-100">Leave {gameTitle}?</h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Current score: <span className="font-bold text-amber-300">{score}</span>
        </p>
        <p className="mt-1 text-center text-[11px] text-slate-500">Your run will end — progress is saved to your local best when you finish a round.</p>
        <p className="mb-2 mt-4 text-center text-[9px] font-display tracking-widest text-slate-500">Advertisement</p>
        <div className="min-h-[120px] flex items-center justify-center my-2">
          <AdBanner
            slot={ADSENSE_CONFIG.slots.inArticle}
            format="auto"
            className="w-full"
            refreshKey={`exit-${gameTitle}-${score}`}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={onStay}
            className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 py-3 font-display font-bold text-cyan-100 hover:bg-cyan-500/20 transition-colors"
          >
            Keep playing
          </button>
          <button
            type="button"
            onClick={canLeave ? onLeave : undefined}
            disabled={!canLeave}
            className={`w-full rounded-xl py-3 font-display font-bold transition-colors ${
              canLeave
                ? 'bg-fuchsia-600/90 text-white hover:bg-fuchsia-500'
                : 'cursor-not-allowed bg-slate-800 text-slate-500'
            }`}
          >
            {canLeave ? 'Exit game' : `Exit in ${seconds}s`}
          </button>
        </div>
      </div>
    </div>
  );
}
