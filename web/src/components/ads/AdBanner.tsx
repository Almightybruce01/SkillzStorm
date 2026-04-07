import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ADSENSE_CONFIG, isAdFree } from './AdConfig';

// ═══════════════════════════════════════════════════════════════
// AD BANNER — Google AdSense Display Ad
//
// Places a real Google AdSense ad unit on the page.
// Revenue goes directly to your AdSense account.
// Respects ad-free purchases.
// ═══════════════════════════════════════════════════════════════

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
  responsive?: boolean;
  /** Extra key so ads remount when switching games or contexts (e.g. game id). */
  refreshKey?: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdBanner({ slot, format = 'auto', className = '', responsive = true, refreshKey }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  /** `location.key` changes on every navigation so banners remount and AdSense can serve a new fill per page/game. */
  const mountKey = `${slot}-${location.pathname}-${location.search}-${location.key}-${refreshKey ?? ''}`;

  useEffect(() => {
    if (isAdFree()) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('[AdBanner] Ad push error:', e);
    }
  }, [mountKey, slot]);

  if (isAdFree()) {
    return (
      <div
        className={`ad-container ad-placeholder flex min-h-[50px] items-center justify-center rounded-lg border border-dashed border-slate-600/50 bg-slate-900/60 ${className}`}
      >
        <span className="px-2 text-center text-[10px] font-display text-slate-500">Ad-free access · thanks for your support</span>
      </div>
    );
  }

  return (
    <div
      key={mountKey}
      ref={adRef}
      className={`ad-container min-h-[50px] rounded-lg border border-cyan-500/10 bg-slate-900/30 ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        data-tag-for-child-directed-treatment="1"
        {...(ADSENSE_CONFIG.testMode ? { 'data-adtest': 'on' } : {})}
      />
    </div>
  );
}

// ── Preset Ad Components ────────────────────────────────────

/** Leaderboard banner (top/bottom of page) */
export function TopBannerAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.topBanner}
      format="horizontal"
      className="w-full max-w-[728px] mx-auto my-4"
      refreshKey={refreshKey}
    />
  );
}

/** Medium rectangle (sidebar, between content) */
export function SidebarAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.sidebarRect}
      format="rectangle"
      className="w-[300px] mx-auto my-4"
      refreshKey={refreshKey}
    />
  );
}

/** In-article native ad (blends with content) */
export function InArticleAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.inArticle}
      format="auto"
      className="w-full my-6"
      refreshKey={refreshKey}
    />
  );
}

/** Bottom sticky banner (matches dark neon shell) */
export function BottomStickyAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/25 py-2 shadow-[0_-12px_40px_rgba(0,0,0,0.45)]">
      <p className="text-[9px] text-slate-500 font-display tracking-widest mb-1">
        {isAdFree() ? 'Ad-free mode' : 'Advertisement'}
      </p>
      <AdBanner
        slot={ADSENSE_CONFIG.slots.bottomBanner}
        format="horizontal"
        className="max-w-[728px] w-full px-2"
        refreshKey={refreshKey}
      />
    </div>
  );
}

/** Leaderboard directly under the global navbar (site-wide) */
export function NavBelowAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <div className="relative z-20 mt-14 w-full border-b border-cyan-500/15 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <p className="text-[9px] text-slate-500 text-center font-display tracking-wider mb-1">
          {isAdFree() ? 'Sponsor area' : 'Advertisement'}
        </p>
        <AdBanner
          slot={ADSENSE_CONFIG.slots.navBelow}
          format="horizontal"
          className="w-full max-w-[728px] mx-auto min-h-[50px]"
          refreshKey={refreshKey}
        />
      </div>
    </div>
  );
}

/** Between major sections (home, long pages) */
export function MidPageBannerAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.pageMid}
      format="horizontal"
      className="w-full max-w-[728px] mx-auto my-8 min-h-[60px]"
      refreshKey={refreshKey}
    />
  );
}

/** Extra responsive block (multiplex-style placement) */
export function InlineExtraAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.inlineExtra}
      format="auto"
      className="w-full max-w-[728px] mx-auto my-6"
      refreshKey={refreshKey}
    />
  );
}

/** Footer banner */
export function FooterAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.footer}
      format="auto"
      className="w-full max-w-[728px] mx-auto my-6"
      refreshKey={refreshKey}
    />
  );
}

/** Compact horizontal strip (e.g. arcade idle overlay) */
export function CompactHorizontalAd({ refreshKey }: { refreshKey?: string } = {}) {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.betweenGames}
      format="horizontal"
      className="w-full max-w-[320px] mx-auto min-h-[50px] my-1"
      refreshKey={refreshKey}
    />
  );
}

/** Full footer promo strip: leaderboard + two units (above main footer links) */
export function SiteFooterAdStrip() {
  const { pathname, search, key } = useLocation();
  const routeRefresh = `${pathname}-${search}-${key}`;
  return (
    <section className="w-full border-t border-cyan-500/20 bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[10px] text-slate-500 text-center font-display tracking-widest mb-3">
          {isAdFree() ? 'Sponsor placements' : 'Advertisements'}
        </p>
        <FooterAd refreshKey={routeRefresh} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AdBanner
            slot={ADSENSE_CONFIG.slots.footerExtra}
            format="horizontal"
            className="w-full min-h-[90px]"
            refreshKey={routeRefresh}
          />
          <AdBanner
            slot={ADSENSE_CONFIG.slots.sidebarRect}
            format="rectangle"
            className="w-full max-w-[300px] mx-auto min-h-[250px]"
            refreshKey={`${routeRefresh}-sb`}
          />
        </div>
        <div className="mt-6">
          <AdBanner
            slot={ADSENSE_CONFIG.slots.inArticle}
            format="auto"
            className="w-full min-h-[100px]"
            refreshKey={`${routeRefresh}-ia`}
          />
        </div>
      </div>
    </section>
  );
}
