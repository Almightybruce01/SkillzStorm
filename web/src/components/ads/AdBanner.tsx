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
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdBanner({ slot, format = 'auto', className = '', responsive = true }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adPushed = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show ads if user is ad-free
    if (isAdFree()) return;

    // On route or slot change, ask AdSense for a fresh fill.
    // This keeps ads rotating as users move around the app
    // without requiring manual timers or reload hacks.
    adPushed.current = false;

    // Push the ad unit once per mount / route change
    if (!adPushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adPushed.current = true;
      } catch (e) {
        console.log('[AdBanner] Ad push error:', e);
      }
    }
  }, [slot, location.pathname]);

  // Don't render for ad-free users
  if (isAdFree()) return null;

  return (
    <div ref={adRef} className={`ad-container ${className}`}>
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
export function TopBannerAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.topBanner}
      format="horizontal"
      className="w-full max-w-[728px] mx-auto my-4"
    />
  );
}

/** Medium rectangle (sidebar, between content) */
export function SidebarAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.sidebarRect}
      format="rectangle"
      className="w-[300px] mx-auto my-4"
    />
  );
}

/** In-article native ad (blends with content) */
export function InArticleAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.inArticle}
      format="auto"
      className="w-full my-6"
    />
  );
}

/** Bottom sticky banner (matches dark neon shell) */
export function BottomStickyAd() {
  if (isAdFree()) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/25 py-2 shadow-[0_-12px_40px_rgba(0,0,0,0.45)]">
      <p className="text-[9px] text-slate-500 font-display tracking-widest mb-1">Advertisement</p>
      <AdBanner
        slot={ADSENSE_CONFIG.slots.bottomBanner}
        format="horizontal"
        className="max-w-[728px] w-full px-2"
      />
    </div>
  );
}

/** Leaderboard directly under the global navbar (site-wide) */
export function NavBelowAd() {
  if (isAdFree()) return null;
  return (
    <div className="relative z-20 w-full border-b border-cyan-500/15 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <p className="text-[9px] text-slate-500 text-center font-display tracking-wider mb-1">Advertisement</p>
        <AdBanner
          slot={ADSENSE_CONFIG.slots.navBelow}
          format="horizontal"
          className="w-full max-w-[728px] mx-auto min-h-[50px]"
        />
      </div>
    </div>
  );
}

/** Between major sections (home, long pages) */
export function MidPageBannerAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.pageMid}
      format="horizontal"
      className="w-full max-w-[728px] mx-auto my-8 min-h-[60px]"
    />
  );
}

/** Extra responsive block (multiplex-style placement) */
export function InlineExtraAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.inlineExtra}
      format="auto"
      className="w-full max-w-[728px] mx-auto my-6"
    />
  );
}

/** Footer banner */
export function FooterAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.footer}
      format="auto"
      className="w-full max-w-[728px] mx-auto my-6"
    />
  );
}

/** Compact horizontal strip (e.g. arcade idle overlay) */
export function CompactHorizontalAd() {
  return (
    <AdBanner
      slot={ADSENSE_CONFIG.slots.betweenGames}
      format="horizontal"
      className="w-full max-w-[320px] mx-auto min-h-[50px] my-1"
    />
  );
}

/** Full footer promo strip: leaderboard + two units (above main footer links) */
export function SiteFooterAdStrip() {
  if (isAdFree()) return null;
  return (
    <section className="w-full border-t border-cyan-500/20 bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[10px] text-slate-500 text-center font-display tracking-widest mb-3">Advertisements</p>
        <FooterAd />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AdBanner
            slot={ADSENSE_CONFIG.slots.footerExtra}
            format="horizontal"
            className="w-full min-h-[90px]"
          />
          <AdBanner
            slot={ADSENSE_CONFIG.slots.sidebarRect}
            format="rectangle"
            className="w-full max-w-[300px] mx-auto min-h-[250px]"
          />
        </div>
        <div className="mt-6">
          <AdBanner slot={ADSENSE_CONFIG.slots.inArticle} format="auto" className="w-full min-h-[100px]" />
        </div>
      </div>
    </section>
  );
}
