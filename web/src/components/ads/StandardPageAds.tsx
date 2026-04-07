import { InlineExtraAd, InArticleAd, TopBannerAd } from './AdBanner';

/** Leaderboard + in-article (use at top of text-heavy pages). */
export function StandardPageAds() {
  return (
    <>
      <TopBannerAd />
      <InArticleAd />
    </>
  );
}

/** Extra multiplex block for high-intent pages. */
export function DensePageAds() {
  return (
    <>
      <TopBannerAd />
      <InArticleAd />
      <InlineExtraAd />
    </>
  );
}
