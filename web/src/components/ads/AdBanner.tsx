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

/** Bottom sticky banner */
export function BottomStickyAd() {
  if (isAdFree()) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-white/90 backdrop-blur-sm border-t border-gray-200 py-1 shadow-lg">
      <AdBanner
        slot={ADSENSE_CONFIG.slots.bottomBanner}
        format="horizontal"
        className="max-w-[728px]"
      />
    </div>
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
