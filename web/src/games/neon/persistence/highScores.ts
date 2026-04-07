const PREFIX = 'skillzstorm_neon_hi_v1:';

function key(slug: string): string {
  return PREFIX + encodeURIComponent(slug);
}

export function getNeonHighScore(slug: string): number {
  if (typeof window === 'undefined' || !slug) return 0;
  try {
    const raw = localStorage.getItem(key(slug));
    if (raw == null) return 0;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** Persists max(previous, floor(score)) and reports whether this run set a new high. */
export function mergeNeonHighScore(
  slug: string,
  score: number
): { previous: number; best: number; isNew: boolean } {
  const previous = getNeonHighScore(slug);
  const s = Math.max(0, Math.floor(score));
  const best = Math.max(previous, s);
  const isNew = s > previous;
  if (slug && best > previous && typeof window !== 'undefined') {
    try {
      localStorage.setItem(key(slug), String(best));
    } catch {
      /* quota / private mode */
    }
  }
  return { previous, best, isNew };
}
