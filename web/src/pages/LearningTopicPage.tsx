import { Link, Navigate, useParams } from 'react-router-dom';
import { findTopicBySlug, learningTopics } from '../content/learningTopics';
import { InArticleAd, TopBannerAd, MidPageBannerAd, InlineExtraAd } from '../components/ads/AdBanner';

export function LearningTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/learn" replace />;

  const topic = findTopicBySlug(slug);
  if (!topic) return <Navigate to="/learn" replace />;

  const related = learningTopics.filter((t) => t.slug !== topic.slug).slice(0, 3);

  return (
    <div className="pt-6 sm:pt-8 w-full min-h-[100vh] page-enter">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopBannerAd />
        <MidPageBannerAd />
        <section className="pt-10 pb-8">
          <Link to="/learn" className="text-sm font-bold text-blue-600 hover:text-blue-700">
            ← Back to Learning Hub
          </Link>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-[0.12em] text-blue-600 mb-2">GRADE BAND: {topic.gradeBand}</p>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-800 leading-tight">{topic.title}</h1>
              <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">{topic.summary}</p>
            </div>
            <div className="text-4xl">{topic.emoji}</div>
          </div>
        </section>

        <section className="mb-6 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-black text-gray-800 mb-3">Why This Matters</h2>
          <p className="text-gray-600 leading-relaxed">{topic.whyItMatters}</p>
        </section>

        <section className="mb-10 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-black text-gray-800 mb-4">Lesson Objectives</h2>
          <ul className="space-y-2">
            {topic.lessonObjectives.map((objective) => (
              <li key={objective} className="text-gray-700 text-sm">
                - {objective}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-black text-gray-800 mb-3">Recommended Readings</h3>
            <ul className="space-y-3">
              {topic.readings.map((reading) => (
                <li key={reading.url}>
                  <a
                    href={reading.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
                  >
                    {reading.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-black text-gray-800 mb-3">YouTube Learning Videos</h3>
            <ul className="space-y-3">
              {topic.videos.map((video) => (
                <li key={video.url}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-red-600 hover:text-red-700 underline"
                  >
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <InArticleAd />
        <InlineExtraAd />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-black text-gray-800 mb-3">Practice Activities</h3>
            <ul className="space-y-2">
              {topic.activities.map((activity) => (
                <li key={activity} className="text-sm text-gray-700">
                  - {activity}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-black text-gray-800 mb-3">Parent/Teacher Tips</h3>
            <ul className="space-y-2">
              {topic.parentTips.map((tip) => (
                <li key={tip} className="text-sm text-gray-700">
                  - {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-black text-gray-800 mb-3">Individual Assignments</h3>
            <ul className="space-y-2">
              {topic.assignments.map((assignment) => (
                <li key={assignment} className="text-sm text-gray-700">
                  - {assignment}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-heading text-lg font-black tracking-[0.15em] text-gray-700">
            <span className="text-xl">🔁</span> RELATED TOPICS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link key={item.slug} to={`/learn/${item.slug}`} className="game-card">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-black text-gray-800 text-sm">{item.title}</h3>
                  <span>{item.emoji}</span>
                </div>
                <p className="text-xs text-gray-500">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
