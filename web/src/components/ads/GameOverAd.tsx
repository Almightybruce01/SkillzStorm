import { useEffect, useState, useRef } from 'react';
import { ADSENSE_CONFIG, isAdFree } from './AdConfig';
import { AdBanner } from './AdBanner';

export function GameOverAd({
  show,
  score,
  personalBest = 0,
  isNewRecord = false,
  onRetry,
  onClose,
  onRewardedAd,
}: {
  show: boolean;
  score: number;
  /** Local best for this game (device), after merging this run. */
  personalBest?: number;
  isNewRecord?: boolean;
  onRetry: () => void;
  onClose: () => void;
  onRewardedAd?: () => void;
}) {
  const [seconds, setSeconds] = useState(3);
  const [canRetry, setCanRetry] = useState(false);
  const tracked = useRef(false);

  useEffect(() => {
    if (!show || isAdFree()) return;
    if (!tracked.current) {
      const n = parseInt(localStorage.getItem('sz_ad_impressions') || '0', 10);
      localStorage.setItem('sz_ad_impressions', String(n + 1));
      tracked.current = true;
    }
    setSeconds(3);
    setCanRetry(false);
    const t = setInterval(() => {
      setSeconds((p) => {
        if (p <= 1) {
          setCanRetry(true);
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-fuchsia-500/25 bg-slate-950/95 p-6 shadow-[0_0_48px_rgba(255,0,102,0.12)]">
        <h2 className="text-center font-display text-2xl font-black tracking-wide text-fuchsia-100">Game over</h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Score: <span className="font-bold text-amber-300">{score}</span>
        </p>
        {personalBest > 0 && (
          <p className="mt-2 text-center text-sm text-amber-500/95">
            Personal best: <span className="font-bold text-amber-300">{personalBest}</span>
            {isNewRecord && <span className="ml-2 font-semibold text-emerald-400">New record!</span>}
          </p>
        )}
        <p className="mb-2 mt-4 text-center text-[9px] font-display tracking-widest text-slate-500">Advertisement</p>
        <div className="min-h-[120px] flex items-center justify-center my-2">
          <AdBanner slot={ADSENSE_CONFIG.slots.inArticle} format="auto" className="w-full" refreshKey={`go-${score}-${personalBest}`} />
        </div>
        {onRewardedAd && (
          <button
            type="button"
            onClick={onRewardedAd}
            className="mb-3 w-full rounded-xl border border-amber-500/40 bg-amber-500/10 py-3 font-display font-bold text-amber-200 hover:bg-amber-500/20 transition-colors"
          >
            Watch ad for extra life
          </button>
        )}
        <button
          type="button"
          onClick={canRetry ? onRetry : undefined}
          disabled={!canRetry}
          className={`w-full rounded-xl py-3 font-display font-bold transition-colors ${
            canRetry ? 'bg-slate-100 text-slate-900 hover:bg-white' : 'cursor-not-allowed bg-slate-800 text-slate-500'
          }`}
        >
          {canRetry ? 'Try again' : `Try again in ${seconds}s`}
        </button>
        {canRetry && (
          <button type="button" onClick={onClose} className="mt-2 w-full py-2 text-sm text-slate-500 hover:text-slate-300">
            Close
          </button>
        )}
      </div>
    </div>
  );
}
