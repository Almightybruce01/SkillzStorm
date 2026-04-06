import type { GameInfo, GameCategory } from './gameData';
import seedRows from './completeSeed.raw.json';

type SeedRow = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  featured: boolean;
  thumbnailUrl?: string;
};

const EMOJI_CYCLE = ['🎮', '🕹️', '⭐', '🎯', '🔥', '💎', '🚀', '🌟', '🏆', '⚡', '🎲', '🧩'];

function mapSeedCategory(c: string): GameCategory {
  if (c === 'Mario & Kart') return 'StormMario';
  if (c === 'Educational') return 'StormEduPlus';
  if (
    ['Racing', 'Fighting', 'Shooters', 'Sports', 'Strategy', 'RPG', 'Rhythm', 'Platformer'].includes(c) ||
    c === 'Action'
  ) {
    return 'StormElite';
  }
  return 'StormRetro';
}

/**
 * 178 games from SKILLZSTORM_COMPLETE.md api-server seed (deduped by slug).
 * Merged into `allGames` with ids equal to `slug` (hyphenated routes).
 */
export function getCompleteSeedGames(): GameInfo[] {
  const rows = seedRows as SeedRow[];
  return rows.map((r, i) => ({
    id: r.slug,
    name: r.title,
    description: r.description,
    category: mapSeedCategory(r.category),
    iconEmoji: EMOJI_CYCLE[i % EMOJI_CYCLE.length],
    coverArt: r.thumbnailUrl?.startsWith('/images')
      ? r.thumbnailUrl
      : r.thumbnailUrl?.startsWith('/covers/')
        ? `/images${r.thumbnailUrl}`
        : undefined,
    supportedGrades: ['K-2', '3-5', '6-8', '9-12'],
    isAvailable: true,
    isFeatured: Boolean(r.featured),
    isPremium: false,
  }));
}
