import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { GamesPage } from './pages/GamesPage'
import { GameDetailPage } from './pages/GameDetailPage'
import { StorePage } from './pages/StorePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { VRPage } from './pages/VRPage'
import { PremiumPage } from './pages/PremiumPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { SchoolsPage } from './pages/SchoolsPage'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { ArcadePage } from './pages/ArcadePage'
import { DashboardPage } from './pages/DashboardPage'
import { LearningHubPage } from './pages/LearningHubPage'
import { LearningTopicPage } from './pages/LearningTopicPage'
import { EditorialPolicyPage } from './pages/EditorialPolicyPage'
import { KidsAdsSafetyPage } from './pages/KidsAdsSafetyPage'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BottomStickyAd, NavBelowAd } from './components/ads/AdBanner'
import { RouteInterstitialHost } from './components/ads/RouteInterstitialHost'

function AppRoutes() {
  const loc = useLocation();
  const gameRoute = loc.pathname.startsWith('/game/');
  const mainPad = gameRoute ? 'pb-36 sm:pb-40' : 'pb-28 sm:pb-32';

  return (
    <div className="skillzstorm-neon min-h-screen w-full bg-slate-950 flex flex-col relative">
      <div className="bg-aurora-global" />
      <div className="bg-grid-overlay" />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 top-[20%] left-[15%] animate-float opacity-40" style={{ animationDuration: '5s' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-fuchsia-400 top-[40%] left-[75%] animate-float opacity-35" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-amber-300 top-[60%] left-[35%] animate-float opacity-35" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-emerald-400 top-[75%] left-[10%] animate-float opacity-30" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }} />
      </div>

      <Navbar />
      <NavBelowAd refreshKey={loc.pathname} />
      <RouteInterstitialHost />
      <main className={`flex-1 w-full relative z-10 ${mainPad}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:category" element={<GamesPage />} />
            <Route path="/game/:gameId" element={<GameDetailPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/vr" element={<VRPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/arcade" element={<ArcadePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/learn" element={<LearningHubPage />} />
            <Route path="/learn/:slug" element={<LearningTopicPage />} />
            <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
            <Route path="/kids-ad-safety" element={<KidsAdsSafetyPage />} />
          </Routes>
      </main>
      <Footer />
      <BottomStickyAd refreshKey={loc.pathname} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App
