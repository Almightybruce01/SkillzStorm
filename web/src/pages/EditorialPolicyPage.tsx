import { StandardPageAds } from '../components/ads/StandardPageAds';

export function EditorialPolicyPage() {
  return (
    <div className="pt-20 sm:pt-24 w-full min-h-[100vh] page-enter">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <StandardPageAds />
        <h1 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4">Editorial Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: February 2026
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-800 mb-2">Our Educational Standard</h2>
            <p>
              SkillzStorm content is written to be practical, age-appropriate, and aligned with common classroom
              expectations for K-12 learners. Every topic page includes clear objectives, guided activities,
              independent assignments, and family support ideas. We prioritize actionable instruction over keyword-only
              content and update pages when standards, best practices, or tools change.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-800 mb-2">How We Select Sources</h2>
            <p>
              We link to established educational resources and publicly available learning materials from reputable
              organizations. External references are reviewed for relevance, student safety, and classroom usefulness.
              We avoid low-quality link farms, misleading health claims, and manipulative content patterns.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-800 mb-2">Content Review Process</h2>
            <p>
              New content is reviewed before publication for clarity, age fit, and instructional value. Existing pages
              are periodically checked for outdated links, broken references, and mismatched grade-level wording. When
              updates are made, we prioritize correctness and parent readability over marketing language.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-800 mb-2">Kids Safety and Advertising</h2>
            <p>
              SkillzStorm is designed for students and families. On iOS, ad requests are configured for child-directed
              treatment and general audience safety constraints. We do not publish child profiles, public chat features,
              or user-generated feeds. For app-specific compliance details, see our Privacy Policy and Terms pages.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-800 mb-2">Corrections and Contact</h2>
            <p>
              If you find an error, broken link, or outdated recommendation, email
              {' '}
              <a className="text-blue-600 underline" href="mailto:support@skillzstorm.com">
                support@skillzstorm.com
              </a>
              {' '}
              and include the page URL. We review correction requests promptly and update pages as needed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
