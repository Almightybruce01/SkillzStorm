import { Link } from 'react-router-dom';
import { categories, getFeaturedGames, allGames, seedCatalogGames } from '../engine/gameData';
import { arcadeGames } from '../games/arcade/arcadeData';
import { InArticleAd, InlineExtraAd, MidPageBannerAd, TopBannerAd } from '../components/ads/AdBanner';
import type { GameCategory } from '../engine/gameData';

const TICKER_ITEMS = [
  '👾 Live rooms — play with friends',
  '🔥 178+ games in the library',
  '🥊 Fighting · Racing · Puzzle · Strategy',
  '🎓 K–12 learning gates in every title',
  '⚡ New games tab — fresh catalog entries',
];

const CATEGORY_HIGHLIGHTS: { icon: string; name: string; desc: string; category: GameCategory; borderHover: string }[] = [
  { icon: '🏎️', name: 'Racing', desc: 'Speed & dash', category: 'StormDash', borderHover: 'hover:border-orange-500/50' },
  { icon: '🥊', name: 'Battle', desc: 'Skills & gates', category: 'StormBattle', borderHover: 'hover:border-red-500/50' },
  { icon: '🚀', name: 'Neon', desc: 'Signature arcade', category: 'StormNeon', borderHover: 'hover:border-cyan-500/50' },
  { icon: '🎓', name: 'Edu+', desc: 'Extra learning', category: 'StormEduPlus', borderHover: 'hover:border-emerald-500/50' },
  { icon: '🍄', name: 'Mario-style', desc: 'Platform vibes', category: 'StormMario', borderHover: 'hover:border-rose-500/50' },
  { icon: '♟️', name: 'Retro', desc: 'Classics', category: 'StormRetro', borderHover: 'hover:border-indigo-500/50' },
  { icon: '🧩', name: 'Puzzle', desc: 'Logic & strategy', category: 'StormPuzzle', borderHover: 'hover:border-amber-500/50' },
  { icon: '💎', name: 'Elite', desc: 'Flagship picks', category: 'StormElite', borderHover: 'hover:border-pink-500/50' },
];

export function HomePage() {
  const featured = getFeaturedGames();
  const trending = featured.slice(0, 6);
  const newSpotlight = seedCatalogGames.slice(0, 8);

  return (
    <div className="pt-6 sm:pt-8 w-full min-h-[100vh] page-enter">
      <TopBannerAd />

      {/* ─── HERO (Replit-style) ─── */}
      <section className="home-arcade-hero home-arcade-scanlines relative -mx-4 sm:mx-0 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0010] via-[#020617] to-black" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.12]">
          {['🕹️', '👾', '🏆', '⚡', '🎮', '💎', '🔥', '⚔️', '🚀', '🧩'].map((icon, i) => (
            <span
              key={i}
              className="absolute text-2xl animate-float"
              style={{
                left: `${8 + i * 9.5}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {icon}
            </span>
          ))}
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 py-16 sm:py-24">
          <div className="flex items-center gap-2 px-4 py-2 border border-[#ff0066]/40 bg-[#ff0066]/10 font-display text-[10px] text-[#ff6699] animate-fade-in">
            <span aria-hidden>🔥</span>
            {allGames.filter((g) => g.isAvailable).length}+ GAMES · NEW TAB FOR SEED CATALOG · K–12 GATES
            <span aria-hidden>🔥</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white tracking-tighter leading-[0.95] animate-slide-up">
            ARCADE
            <br />
            <span className="neon-text-secondary-arcade neon-text-flicker-arcade">NEVER DIES</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed animate-slide-up delay-100">
            The learning arcade built for the browser — fast, neon, and free.
            <br />
            <span className="text-slate-300">No downloads. Pick a game, pass the gates, level up your skills.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 animate-slide-up delay-200">
            <Link to="/games" className="arcade-btn arcade-btn-primary text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4">
              ▶ PLAY NOW
            </Link>
            <Link to="/games?view=new" className="arcade-btn arcade-btn-secondary text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4">
              ✨ NEW GAMES
            </Link>
            <Link to="/arcade" className="arcade-btn arcade-btn-secondary text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4">
              🕹️ ARCADE
            </Link>
          </div>

          <img
            src="/images/logo.png"
            alt="SkillzStorm"
            className="h-16 sm:h-20 w-auto mt-4 opacity-95 drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
            <span className="font-display text-[8px] text-slate-500">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#ff0066]/80" />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="mx-8">
              ▶ {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12">
          <div className="stat-card-arcade animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="text-2xl mb-2">🎮</div>
            <div className="font-display text-2xl md:text-3xl text-cyan-300" style={{ textShadow: '0 0 20px rgba(34,211,238,0.35)' }}>
              {allGames.length}+
            </div>
            <div className="font-display text-[9px] text-slate-500 uppercase tracking-widest mt-1">Games</div>
          </div>
          <div className="stat-card-arcade animate-slide-up" style={{ animationDelay: '60ms' }}>
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-display text-2xl md:text-3xl text-fuchsia-300" style={{ textShadow: '0 0 20px rgba(232,121,249,0.35)' }}>
              10K+
            </div>
            <div className="font-display text-[9px] text-slate-500 uppercase tracking-widest mt-1">Challenges</div>
          </div>
          <div className="stat-card-arcade animate-slide-up" style={{ animationDelay: '120ms' }}>
            <div className="text-2xl mb-2">👥</div>
            <div className="font-display text-2xl md:text-3xl text-amber-300" style={{ textShadow: '0 0 20px rgba(251,191,36,0.25)' }}>
              ∞
            </div>
            <div className="font-display text-[9px] text-slate-500 uppercase tracking-widest mt-1">Players</div>
          </div>
          <div className="stat-card-arcade animate-slide-up" style={{ animationDelay: '180ms' }}>
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-display text-2xl md:text-3xl text-emerald-300" style={{ textShadow: '0 0 20px rgba(52,211,153,0.3)' }}>
              4.9★
            </div>
            <div className="font-display text-[9px] text-slate-500 uppercase tracking-widest mt-1">Avg vibe</div>
          </div>
        </div>

        <MidPageBannerAd />
        <InlineExtraAd />

        {/* Categories */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display neon-text-arcade-primary mb-2">SELECT CATEGORY</h2>
              <p className="text-slate-500 text-sm">Jump into a mode — every game stays free.</p>
            </div>
            <Link to="/games" className="font-display text-[10px] text-slate-500 hover:text-cyan-300 transition-colors flex items-center gap-2">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORY_HIGHLIGHTS.map((cat, i) => (
              <Link
                key={cat.category}
                to={`/games/${cat.category}`}
                className={`category-tile-arcade animate-slide-up border-slate-700/60 ${cat.borderHover}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-4xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  {cat.icon}
                </span>
                <div className="text-center">
                  <div className="font-display text-[10px] text-slate-200">{cat.name}</div>
                  <div className="text-[9px] text-slate-500 mt-1">{cat.desc}</div>
                </div>
                <span className="text-[8px] font-display text-slate-600">
                  {allGames.filter((g) => g.category === cat.category).length} games
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display neon-text-arcade-primary mb-2">
                <span className="text-orange-500 mr-2">🔥</span>
                TRENDING NOW
              </h2>
              <p className="text-slate-500 text-sm">Featured picks — start here.</p>
            </div>
            <Link to="/games" className="font-display text-[10px] text-slate-500 hover:text-cyan-300 transition-colors">
              SEE ALL →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {trending.map((game, i) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className="game-card group animate-pop-in text-center"
                data-color="blue"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {game.coverArt ? (
                  <div className="w-full aspect-[16/10] mb-3 rounded-xl overflow-hidden transition-all duration-400 group-hover:scale-105">
                    <img src={game.coverArt} alt={game.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="w-full aspect-[16/10] mb-3 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-400 group-hover:scale-105">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{game.iconEmoji}</span>
                  </div>
                )}
                <h3 className="font-bold text-slate-100 text-sm mb-1 group-hover:text-cyan-300 transition-colors duration-300">{game.name}</h3>
                <p className="text-slate-500 text-xs line-clamp-2">{game.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* New games spotlight */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-2 text-fuchsia-300" style={{ textShadow: '0 0 24px rgba(232,121,249,0.35)' }}>
                <span className="mr-2">✨</span>
                NEW CATALOG GAMES
              </h2>
              <p className="text-slate-500 text-sm">
                Fresh entries from the expanded library — browse the full list in the New Games tab.
              </p>
            </div>
            <Link
              to="/games?view=new"
              className="arcade-btn arcade-btn-secondary text-xs px-6 py-3 whitespace-nowrap"
            >
              OPEN NEW TAB →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {newSpotlight.map((game, i) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className="game-card group text-center animate-pop-in p-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-full aspect-[16/10] mb-2 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-fuchsia-950/50 to-slate-900">
                  <span className="text-4xl">{game.iconEmoji}</span>
                </div>
                <h3 className="font-display text-[11px] text-slate-200 line-clamp-2 leading-tight">{game.name}</h3>
                <span className="text-[9px] text-slate-500 mt-1 block">{game.category}</span>
              </Link>
            ))}
          </div>
        </section>

        <InArticleAd />

        {/* Learning hub CTA */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-cyan-500/25 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-6xl">📘</div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-black text-slate-100 mb-2">Learning Hub</h2>
                <p className="text-slate-400 text-sm max-w-2xl">
                  Topic pages, videos, and practice for parents and teachers — plus lesson-plan ideas.
                </p>
              </div>
              <Link to="/learn" className="btn-elite btn-elite-primary text-sm flex-shrink-0">
                Open Learning Hub →
              </Link>
            </div>
          </div>
        </section>

        {/* Arcade strip */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-heading text-lg font-black tracking-[0.15em] text-slate-400 mb-0">
              <span className="text-xl">🕹️</span> QUICK ARCADE
            </h2>
            <Link to="/arcade" className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">
              All {arcadeGames.length} →
            </Link>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
            {arcadeGames.slice(0, 8).map((game, i) => (
              <Link
                key={game.id}
                to={`/arcade?play=${game.id}`}
                className="arcade-tile animate-pop-in"
                style={{ backgroundColor: game.color, animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <span className="text-3xl sm:text-4xl mb-1">{game.emoji}</span>
                </div>
                <div className="tile-name">{game.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Game modes (original categories grid) */}
        <section className="mb-20">
          <h2 className="section-heading text-lg font-black tracking-[0.15em] text-slate-400">
            <span className="text-xl">🎯</span> ALL MODES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {categories.map((cat, i) => {
              const gameCount = allGames.filter((g) => g.category === cat.value).length;
              return (
                <Link
                  key={cat.value}
                  to={`/games/${cat.value}`}
                  className="game-card group text-center animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl transition-all duration-400 group-hover:scale-[1.15] shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${cat.colors[0]}, ${cat.colors[1]})`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors duration-300">{cat.label}</h3>
                  <p className="text-slate-500 text-xs mb-3">{cat.subtitle}</p>
                  <span className="text-xs font-black" style={{ color: cat.colors[0] }}>
                    {gameCount} games
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-20">
          <h2 className="section-heading text-lg font-black tracking-[0.15em] text-slate-400">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <Step num="01" title="Choose Your Grade" desc="K–2 through 9–12 — difficulty scales with you." color="#3b82f6" icon="📚" delay="0s" />
            <Step num="02" title="Pick a Game" desc="Neon arcade, battles, puzzles — all free in the browser." color="#8b5cf6" icon="🎮" delay="0.15s" />
            <Step num="03" title="Play & Learn" desc="Knowledge gates keep the challenge honest." color="#f97316" icon="🧠" delay="0.3s" />
          </div>
        </section>

        <section className="mb-12 text-center animate-fade-in">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            <TrustBadge icon="🛡️" text="COPPA Compliant" />
            <TrustBadge icon="👶" text="Child-Safe Ads" />
            <TrustBadge icon="🚫" text="No login required" />
            <TrustBadge icon="🏫" text="Classroom friendly" />
          </div>
        </section>
      </div>
    </div>
  );
}

function Step({ num, title, desc, color, icon, delay }: { num: string; title: string; desc: string; color: string; icon: string; delay: string }) {
  return (
    <div className="game-card text-center group animate-slide-up" style={{ animationDelay: delay }}>
      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{icon}</div>
      <div
        className="text-5xl font-black bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundImage: `linear-gradient(135deg, ${color}, ${color}80)` }}
      >
        {num}
      </div>
      <h3 className="font-black text-slate-100 mb-2 text-lg">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-400 transition-colors duration-300 cursor-default">
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
