import { useEffect, useState, useRef } from 'react';
import { ADSENSE_CONFIG, isAdFree } from './AdConfig';
import { AdBanner } from './AdBanner';

export function BetweenRoundsAd({
  show,
  level,
  score,
  title,
  subtitle,
  onContinue,
}: {
  show: boolean;
  level: number;
  score: number;
  /** Overrides default “Level N complete” heading */
  title?: string;
  subtitle?: string;
  onContinue: () => void;
}) {
  const [seconds, setSeconds] = useState(2);
  const [canContinue, setCanContinue] = useState(false);
  const tracked = useRef(false);

  useEffect(() => {
    if (!show || isAdFree()) return;
    if (!tracked.current) {
      const n = parseInt(localStorage.getItem('sz_ad_impressions') || '0', 10);
      localStorage.setItem('sz_ad_impressions', String(n + 1));
      tracked.current = true;
    }
    setCanContinue(false);
    setSeconds(2);
    const t = setInterval(() => {
      setSeconds((p) => {
        if (p <= 1) {
          setCanContinue(true);
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

  const heading = title ?? `Level ${level} complete!`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-950/95 p-6 shadow-[0_0_48px_rgba(0,255,204,0.1)]">
        <h2 className="text-center font-display text-xl font-black tracking-wide text-cyan-100">{heading}</h2>
        {subtitle && <p className="mt-1 text-center text-xs text-slate-500">{subtitle}</p>}
        <p className="mt-3 text-center text-sm text-slate-400">
          Score: <span className="font-bold text-amber-300">{score}</span>
        </p>
        <p className="mb-2 mt-4 text-center text-[9px] font-display tracking-widest text-slate-500">Advertisement</p>
        <div className="min-h-[120px] flex items-center justify-center my-2">
          <AdBanner
            slot={ADSENSE_CONFIG.slots.inArticle}
            format="auto"
            className="w-full"
            refreshKey={`round-${level}-${score}`}
          />
        </div>
        <button
          type="button"
          onClick={canContinue ? onContinue : undefined}
          disabled={!canContinue}
          className={`w-full rounded-xl py-3 font-display font-bold transition-colors ${
            canContinue
              ? 'bg-cyan-500/90 text-slate-950 hover:bg-cyan-400'
              : 'cursor-not-allowed bg-slate-800 text-slate-500'
          }`}
        >
          {canContinue ? 'Continue' : `Continue in ${seconds}s`}
        </button>
      </div>
    </div>
  );
}
