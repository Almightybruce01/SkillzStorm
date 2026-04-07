import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  allGames,
  aaaGames,
  expandedLibraryGames,
  categories,
  gradeLevels,
  type GameCategory,
  type GradeLevel,
} from '../engine/gameData';
import { TopBannerAd, SidebarAd, MidPageBannerAd, InArticleAd, InlineExtraAd } from '../components/ads/AdBanner';

const catColorMap: Record<string, string> = {
  StormBattle: '#3b82f6',
  StormDash: '#10b981',
  StormPuzzle: '#f59e0b',
  StormQuick: '#ec4899',
  Storm3D: '#8b5cf6',
  StormVR: '#06b6d4',
  StormNeon: '#22d3ee',
  StormMario: '#f97316',
  StormRetro: '#a855f7',
  StormEduPlus: '#22c55e',
  StormElite: '#f43f5e',
};

export function GamesPage() {
  const { category } = useParams<{ category?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view');
  const catalogTab: 'all' | 'aaa' | 'library' =
    view === 'new' ? 'aaa' : view === 'library' ? 'library' : 'all';

  const setTab = (tab: 'all' | 'aaa' | 'library') => {
    const next = new URLSearchParams(searchParams);
    if (tab === 'aaa') next.set('view', 'new');
    else if (tab === 'library') next.set('view', 'library');
    else next.delete('view');
    setSearchParams(next, { replace: true });
  };

  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>(
    (category as GameCategory) || 'all'
  );
  const [search, setSearch] = useState('');

  const baseList = catalogTab === 'aaa' ? aaaGames : catalogTab === 'library' ? expandedLibraryGames : allGames;

  const filteredGames = baseList.filter((game) => {
    if (selectedCategory !== 'all' && game.category !== selectedCategory) return false;
    if (selectedGrade !== 'all' && !game.supportedGrades.includes(selectedGrade)) return false;
    if (search && !game.name.toLowerCase().includes(search.toLowerCase()) && !game.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-6 sm:pt-8 min-h-[100vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 page-enter text-slate-100">
      <TopBannerAd />
      {/* Header */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-5xl sm:text-6xl font-black text-slate-100 mb-3">
          {selectedCategory !== 'all'
            ? <span style={{ color: catColorMap[selectedCategory] || '#3b82f6' }}>{categories.find(c => c.value === selectedCategory)?.label || 'Games'}</span>
            : (
              <span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">ALL</span>
                {' '}
                <span className="text-slate-200">GAMES</span>
              </span>
            )}
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          <span className="font-black text-lg" style={{ color: catColorMap[selectedCategory] || '#3b82f6' }}>{filteredGames.length}</span>
          <span className="ml-1">
            games{' '}
            {catalogTab === 'aaa'
              ? 'in AAA / New'
              : catalogTab === 'library'
                ? 'in expanded library'
                : 'available'}{' '}
            — all free to play
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-2">
          <button
            type="button"
            onClick={() => setTab('all')}
            className={`font-display text-[11px] tracking-wider px-5 py-2.5 rounded-lg border transition-all ${
              catalogTab === 'all'
                ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                : 'border-slate-600/60 text-slate-400 hover:border-slate-500 hover:text-slate-300'
            }`}
          >
            ALL GAMES
          </button>
          <button
            type="button"
            onClick={() => setTab('aaa')}
            className={`font-display text-[11px] tracking-wider px-5 py-2.5 rounded-lg border transition-all ${
              catalogTab === 'aaa'
                ? 'border-fuchsia-500/60 bg-fuchsia-500/15 text-fuchsia-200 shadow-[0_0_20px_rgba(232,121,249,0.15)]'
                : 'border-slate-600/60 text-slate-400 hover:border-slate-500 hover:text-slate-300'
            }`}
          >
            NEW (AAA) ({aaaGames.length})
          </button>
          <button
            type="button"
            onClick={() => setTab('library')}
            className={`font-display text-[11px] tracking-wider px-5 py-2.5 rounded-lg border transition-all ${
              catalogTab === 'library'
                ? 'border-amber-500/60 bg-amber-500/15 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.12)]'
                : 'border-slate-600/60 text-slate-400 hover:border-slate-500 hover:text-slate-300'
            }`}
          >
            EXPANDED LIBRARY ({expandedLibraryGames.length})
          </button>
        </div>
        {catalogTab === 'aaa' && (
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            This tab lists <span className="text-fuchsia-300/90">AAA-flagship games only</span> (marked in catalog). No expanded-library or neon catalog filler — those live under Expanded Library.
          </p>
        )}
        {catalogTab === 'library' && (
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            Full seed catalog — broad library entries mapped to shared neon engines by style.
          </p>
        )}
      </div>

      {/* Search */}
      <div className="game-card border border-cyan-500/20 rounded-2xl flex items-center gap-3 p-4 mb-6 animate-slide-up delay-100 group focus-within:border-cyan-400/50 focus-within:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-all duration-300">
        <span className="text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-300 text-lg">🔍</span>
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-slate-100 w-full outline-none placeholder-slate-500 text-sm font-medium"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="text-slate-500 hover:text-cyan-200 hover:bg-white/5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 text-sm"
          >
            ✕
          </button>
        )}
      </div>

      {/* Grade filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 animate-slide-up delay-200 scrollbar-none">
        <FilterPill label="All Grades" active={selectedGrade === 'all'} onClick={() => setSelectedGrade('all')} color="#3b82f6" />
        {gradeLevels.map((g) => (
          <FilterPill key={g.value} label={g.label} active={selectedGrade === g.value} onClick={() => setSelectedGrade(g.value)} color={g.color} />
        ))}
      </div>

      {/* Category filters */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 animate-slide-up delay-300 scrollbar-none">
        <FilterPill label="All Modes" active={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')} color="#3b82f6" />
        {categories.map((c) => (
          <FilterPill key={c.value} label={c.label} active={selectedCategory === c.value} onClick={() => setSelectedCategory(c.value)} color={catColorMap[c.value]} />
        ))}
      </div>

      <MidPageBannerAd />
      <InArticleAd />

      <div className="flex gap-6">
        {/* Games Grid */}
        <div className="flex-1">
          {filteredGames.length === 0 ? (
            <div className="text-center py-24 animate-fade-in">
              <div className="text-7xl mb-4 animate-float">🔍</div>
              <p className="text-slate-300 text-xl font-black mb-2">No games found</p>
              <p className="text-slate-500 text-sm">Try a different filter or search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredGames.map((game, i) => {
                const color = catColorMap[game.category] || '#3b82f6';
                return (
                  <Link
                    key={game.id}
                    to={`/game/${game.id}`}
                    className="game-card group text-center animate-pop-in"
                    style={{ animationDelay: `${Math.min(i * 0.04, 0.8)}s` }}
                  >
                    {game.coverArt ? (
                      <div className="w-full aspect-[16/10] mb-3 rounded-xl overflow-hidden transition-all duration-400 group-hover:scale-105">
                        <img src={game.coverArt} alt={game.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/10] mb-3 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-400 group-hover:scale-105"
                        style={{ background: `linear-gradient(135deg, ${color}12, ${color}05)` }}
                      >
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{game.iconEmoji}</span>
                      </div>
                    )}

                    <h3 className="font-bold text-slate-100 text-sm mb-1 line-clamp-1 group-hover:text-cyan-300 transition-colors duration-300">{game.name}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mb-3 group-hover:text-slate-300 transition-colors">{game.description}</p>

                    <div className="flex justify-center gap-1.5 flex-wrap mb-2">
                      {!game.isAvailable && <Badge text="SOON" bg="#9ca3af" />}
                      {game.isPremium && <Badge text="PREMIUM" bg="linear-gradient(135deg, #f59e0b, #f97316)" />}
                      {game.isAAA && <Badge text="AAA" bg="linear-gradient(135deg, #a855f7, #f43f5e)" />}
                      {game.isFeatured && <Badge text="HOT" bg="linear-gradient(135deg, #ef4444, #ec4899)" />}
                      {game.isAvailable && !game.isPremium && <Badge text="FREE" bg={color} />}
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 mt-1">
                      <span className="text-[10px] font-black tracking-[0.15em]" style={{ color }}>▶ PLAY</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar Ad */}
        <div className="hidden lg:block w-[300px] flex-shrink-0">
          <div className="sticky top-20">
            <SidebarAd />
          </div>
        </div>
      </div>

      <InlineExtraAd />
    </div>
  );
}

function FilterPill({ label, active, onClick, color }: { label: string; active: boolean; onClick: () => void; color?: string }) {
  const c = color || '#3b82f6';
  return (
    <button
      onClick={onClick}
      className="whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 active:scale-90 border"
      style={active ? {
        borderColor: `${c}40`,
        color: c,
        backgroundColor: `${c}10`,
        boxShadow: `0 2px 8px ${c}15`,
      } : {
        borderColor: 'rgba(34, 211, 238, 0.15)',
        color: '#94a3b8',
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
      }}
    >
      {label}
    </button>
  );
}

function Badge({ text, bg, textColor }: { text: string; bg: string; textColor?: string }) {
  return (
    <span
      className="text-[9px] font-black px-2.5 py-0.5 rounded-md"
      style={{ background: bg, color: textColor || 'white' }}
    >
      {text}
    </span>
  );
}
