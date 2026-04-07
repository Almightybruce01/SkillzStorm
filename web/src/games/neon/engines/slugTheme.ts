/** Deterministic visuals / tuning from game id (slug) so pooled engines feel distinct per title. */

export function hashSlug(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function hueFromSlug(slug: string): number {
  return hashSlug(slug) % 360;
}

export function slugSeed(slug: string): number {
  return hashSlug(slug) % 233280;
}

/** 0..1 */
export function slug01(slug: string, salt: number): number {
  return ((hashSlug(slug + String(salt)) % 10000) / 10000);
}

export function neonAccent(slug: string): [string, string, string] {
  const h = hueFromSlug(slug);
  return [`hsl(${h}, 88%, 58%)`, `hsl(${(h + 55) % 360}, 82%, 55%)`, `hsl(${(h + 130) % 360}, 75%, 52%)`];
}
