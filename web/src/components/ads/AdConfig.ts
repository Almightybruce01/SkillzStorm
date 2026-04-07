/**
 * Google AdSense — use real slot IDs from your AdSense dashboard.
 *
 * Production: set `VITE_ADSENSE_SLOT_DEFAULT` to one display ad unit ID and all
 * placements will use it until you add per-placement env vars (see below).
 * Optional: `VITE_ADSENSE_TEST=true` forces test ads (e.g. local QA).
 */
const PUB = 'ca-pub-9418265198529416';

const env = import.meta.env as Record<string, string | boolean | undefined>;

/** Placeholder until you set VITE_ADSENSE_SLOT_DEFAULT in Vercel / hosting env. */
const PLACEHOLDER_SLOT = '1234567890';

function slot(envKey: string, fallbackChain: string[]): string {
  const envVal = env[envKey];
  const s = typeof envVal === 'string' ? envVal : '';
  if (s && /^\d+$/.test(s)) return s;
  for (const f of fallbackChain) {
    if (f && /^\d+$/.test(f)) return f;
  }
  return PLACEHOLDER_SLOT;
}

const DEFAULT = (() => {
  const v = env.VITE_ADSENSE_SLOT_DEFAULT;
  return typeof v === 'string' && /^\d+$/.test(v) ? v : '';
})();

export const ADSENSE_CONFIG = {
  publisherId: PUB,

  slots: {
    topBanner: slot('VITE_ADSENSE_SLOT_TOP_BANNER', [DEFAULT]),
    sidebarRect: slot('VITE_ADSENSE_SLOT_SIDEBAR', [DEFAULT]),
    inArticle: slot('VITE_ADSENSE_SLOT_IN_ARTICLE', [DEFAULT]),
    bottomBanner: slot('VITE_ADSENSE_SLOT_BOTTOM', [DEFAULT]),
    betweenGames: slot('VITE_ADSENSE_SLOT_BETWEEN', [DEFAULT]),
    footer: slot('VITE_ADSENSE_SLOT_FOOTER', [DEFAULT]),
    navBelow: slot('VITE_ADSENSE_SLOT_NAV', [DEFAULT]),
    routePopup: slot('VITE_ADSENSE_SLOT_POPUP', [DEFAULT]),
    footerExtra: slot('VITE_ADSENSE_SLOT_FOOTER_EXTRA', [DEFAULT]),
    pageMid: slot('VITE_ADSENSE_SLOT_MID', [DEFAULT]),
    inlineExtra: slot('VITE_ADSENSE_SLOT_INLINE', [DEFAULT]),
  },

  autoAds: true,
  /** Production builds use live AdSense unless VITE_ADSENSE_TEST=true */
  testMode: import.meta.env.VITE_ADSENSE_TEST === 'true',
  childDirected: true,
};

export function isAdFree(): boolean {
  return localStorage.getItem('skillzstorm_ad_free') === 'true';
}

export function setAdFree(value: boolean): void {
  localStorage.setItem('skillzstorm_ad_free', value ? 'true' : 'false');
}
