import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { learningTopics } from '../content/learningTopics';
import { InArticleAd, TopBannerAd, MidPageBannerAd, InlineExtraAd } from '../components/ads/AdBanner';

const gradeLevels = ['K-2', '3-5', '6-8', '9-12'] as const;

export function LearningHubPage() {
  const [grade, setGrade] = useState<(typeof gradeLevels)[number]>('3-5');
  const [focusArea, setFocusArea] = useState('adjectives');
  const [minutesPerDay, setMinutesPerDay] = useState(25);

  const personalizedPlan = useMemo(() => {
    const focus = focusArea.trim() || 'reading comprehension';
    return [
      `Day 1: Baseline check (${minutesPerDay} min). Ask 8 short questions on ${focus} to find gaps.`,
      `Day 2: Direct instruction (${minutesPerDay} min). Teach one skill chunk with two examples.`,
      `Day 3: Guided practice (${minutesPerDay} min). Complete 12 mixed problems with hints.`,
      `Day 4: Skill transfer (${minutesPerDay} min). Use ${focus} in a game, short writing, or discussion.`,
      `Day 5: Independent assignment (${minutesPerDay} min). Complete a standards-aligned task with rubric.`,
      `Day 6: Error correction (${minutesPerDay} min). Review missed work and re-teach two weak patterns.`,
      `Day 7: Mastery check (${minutesPerDay} min). Reassess and set the next weekly goal.`
    ];
  }, [focusArea, minutesPerDay]);

  return (
    <div className="pt-6 sm:pt-8 w-full min-h-[100vh] page-enter">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopBannerAd />
        <MidPageBannerAd />
        <section className="text-center pt-10 pb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4">Learning Hub</h1>
          <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
            10 curriculum-aligned topics with trusted readings, YouTube learning links, in-app practice ideas,
            and ready-to-use assignments for families, tutors, and classrooms.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {gradeLevels.map((level) => (
              <button
                key={level}
                onClick={() => setGrade(level)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                  grade === level
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading text-lg font-black tracking-[0.15em] text-gray-700">
            <span className="text-xl">📘</span> TOPIC PAGES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/learn/${topic.slug}`}
                className="game-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-black text-gray-800 leading-tight">{topic.title}</h3>
                  <span className="text-2xl">{topic.emoji}</span>
                </div>
                <p className="text-xs font-bold text-blue-600 mb-2">Grade Band: {topic.gradeBand}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{topic.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <InArticleAd />
        <InlineExtraAd />

        <section className="mb-16">
          <h2 className="section-heading text-lg font-black tracking-[0.15em] text-gray-700">
            <span className="text-xl">🤖</span> AI LESSON PLAN BUILDER
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-gray-600 text-sm mb-6">
              Parent prompt example: "My son struggles with adjectives." Enter a focus skill and get a structured
              7-day plan you can use in SkillzStorm and at home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-600">Grade Level</span>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value as (typeof gradeLevels)[number])}
                  className="h-11 rounded-xl border border-gray-300 px-3 text-sm"
                >
                  {gradeLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-600">Focus Skill</span>
                <input
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  placeholder="ex: adjectives, fractions, inference"
                  className="h-11 rounded-xl border border-gray-300 px-3 text-sm"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-600">Minutes Per Day</span>
                <input
                  type="number"
                  min={10}
                  max={60}
                  value={minutesPerDay}
                  onChange={(e) => setMinutesPerDay(Math.max(10, Math.min(60, Number(e.target.value) || 10)))}
                  className="h-11 rounded-xl border border-gray-300 px-3 text-sm"
                />
              </label>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="text-base font-black text-blue-700 mb-3">
                7-Day Plan for Grade {grade}: {focusArea || 'Reading Skills'}
              </h3>
              <ul className="space-y-2">
                {personalizedPlan.map((line) => (
                  <li key={line} className="text-sm text-gray-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
