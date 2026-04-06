import { Link } from 'react-router-dom';

export function KidsAdsSafetyPage() {
  return (
    <div className="pt-20 sm:pt-24 page-enter min-h-[100vh] w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Link to="/" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors duration-300 mb-6 inline-flex items-center gap-1 group">
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to Home
      </Link>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
        <span className="text-[#10b981] text-[11px] font-black tracking-wider">KIDS AD SAFETY DISCLOSURE</span>
      </div>

      <h1 className="text-3xl font-black text-gray-800 mb-2">Kids Ad Safety Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <Section title="Scope">
          <p>
            This page documents how advertising is configured in SkillzStorm for Kids Category compliance.
            It applies to our iOS app experience and related public policy documentation.
          </p>
        </Section>

        <Section title="Ad Service Used">
          <ul className="list-disc list-inside space-y-1">
            <li>Ad network used in iOS app: <strong className="text-gray-800">Google AdMob</strong></li>
            <li>No user-generated ad marketplace inside SkillzStorm</li>
            <li>No social feed, chat, or profile-based ad personalization</li>
          </ul>
        </Section>

        <Section title="Technical Configuration in App">
          <ul className="list-disc list-inside space-y-1">
            <li>Child-directed treatment enabled in ad request configuration</li>
            <li>Maximum ad content rating set to <strong className="text-gray-800">General (G)</strong></li>
            <li>No behavioral targeting in app settings for child users</li>
            <li>No collection of personal identifiers by SkillzStorm for ad targeting</li>
          </ul>
        </Section>

        <Section title="Publicly Documented Ad Policies (Google)">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://support.google.com/admob/answer/6219315" className="text-[#3b82f6] underline" target="_blank" rel="noopener noreferrer">
                AdMob child-directed treatment (COPPA)
              </a>
            </li>
            <li>
              <a href="https://support.google.com/admob/answer/6223431" className="text-[#3b82f6] underline" target="_blank" rel="noopener noreferrer">
                AdMob Families policy compliance
              </a>
            </li>
            <li>
              <a href="https://support.google.com/adspolicy/answer/13584894" className="text-[#3b82f6] underline" target="_blank" rel="noopener noreferrer">
                Google ad moderation process (automated systems + trained human operators/analysts)
              </a>
            </li>
            <li>
              <a href="https://support.google.com/adspolicy/answer/1722120" className="text-[#3b82f6] underline" target="_blank" rel="noopener noreferrer">
                About Google ad review process
              </a>
            </li>
          </ul>
        </Section>

        <Section title="Human Review Requirement Reference">
          <p>
            Google publicly documents that ad moderation includes both automated systems and human reviewers
            (trained operators and analysts). See the policy links above for the documented process details.
          </p>
        </Section>

        <Section title="Data Use Statement">
          <ul className="list-disc list-inside space-y-1">
            <li>SkillzStorm does not require account creation for gameplay</li>
            <li>Progress/settings are stored locally on-device</li>
            <li>SkillzStorm does not sell child data</li>
            <li>No personalized profile building by SkillzStorm for ad decisions</li>
          </ul>
        </Section>

        <Section title="Related Pages">
          <ul className="list-disc list-inside space-y-1">
            <li><Link to="/privacy" className="text-[#3b82f6] underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-[#3b82f6] underline">Terms of Service</Link></li>
            <li><Link to="/editorial-policy" className="text-[#3b82f6] underline">Editorial Policy</Link></li>
            <li><Link to="/contact" className="text-[#3b82f6] underline">Contact</Link></li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-3">{title}</h2>
      {children}
    </section>
  );
}
