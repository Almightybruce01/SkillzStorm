export const ADSENSE_CONFIG = {
  publisherId: 'ca-pub-9418265198529416',

  // With Auto Ads enabled in AdSense dashboard, Google places ads
  // automatically in optimal positions. No manual slot IDs needed.
  // If you later create manual ad units, replace these with real slot IDs.
  /** Replace each with a real ad unit ID from your AdSense dashboard (Ads → By ad unit). */
  slots: {
    topBanner: '1234567890',
    sidebarRect: '2345678901',
    inArticle: '3456789012',
    bottomBanner: '4567890123',
    betweenGames: '5678901234',
    footer: '6789012345',
    /** Full-width strip directly under the navbar (site-wide) */
    navBelow: '7890123456',
    /** Route-change modal / interstitial-style overlay */
    routePopup: '8901234567',
    /** Second leaderboard row in the site footer */
    footerExtra: '9012345678',
    /** Mid-page horizontal (between content sections) */
    pageMid: '0123456789',
    /** Extra rectangle / multiplex */
    inlineExtra: '1029384756',
  },

  autoAds: true,
  testMode: import.meta.env.DEV,
  childDirected: true,
};

export function isAdFree(): boolean {
  return localStorage.getItem('skillzstorm_ad_free') === 'true';
}

export function setAdFree(value: boolean): void {
  localStorage.setItem('skillzstorm_ad_free', value ? 'true' : 'false');
}
