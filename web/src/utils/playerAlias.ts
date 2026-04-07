/**
 * Kids-safe display names: random curated combo, assigned once, not user-typed (reduces moderation risk).
 * Integrate in Profile / multiplayer lobby later; storage is local until accounts exist.
 */

const STORAGE_KEY = 'skillzstorm_player_alias_v1';
const LOCK_KEY = 'skillzstorm_player_alias_locked_v1';

const ADJ = [
  'Swift',
  'Bright',
  'Cosmic',
  'Neon',
  'Quick',
  'Happy',
  'Cool',
  'Super',
  'Mega',
  'Tiny',
  'Lucky',
  'Brave',
  'Clever',
  'Kind',
  'Bold',
  'Calm',
  'Sunny',
  'Gentle',
  'Noble',
  'Merry',
] as const;

const NOUN = [
  'Panda',
  'Comet',
  'Star',
  'Wave',
  'Pilot',
  'Runner',
  'Hero',
  'Scout',
  'Ranger',
  'Falcon',
  'Dolphin',
  'Tiger',
  'Fox',
  'Owl',
  'Koala',
  'Raven',
  'Turtle',
  'Badger',
  'Llama',
  'Otter',
] as const;

function rand<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randDigits(): string {
  return String(100 + Math.floor(Math.random() * 900));
}

/** e.g. SwiftPanda482 — alphanumeric, no spaces (easy to share). */
export function generatePlayerAlias(): string {
  return `${rand(ADJ)}${rand(NOUN)}${randDigits()}`;
}

export function getStoredPlayerAlias(): string | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function isPlayerAliasLocked(): boolean {
  if (typeof localStorage === 'undefined') return false;
  return localStorage.getItem(LOCK_KEY) === 'true';
}

/** First call assigns and locks; later calls return the same alias. */
export function ensurePlayerAlias(): string {
  if (typeof localStorage === 'undefined') return generatePlayerAlias();

  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) {
    localStorage.setItem(LOCK_KEY, 'true');
    return existing;
  }

  const next = generatePlayerAlias();
  localStorage.setItem(STORAGE_KEY, next);
  localStorage.setItem(LOCK_KEY, 'true');
  return next;
}

/** Dev / parental reset only — call from a hidden settings action if you add one. */
export function resetPlayerAliasForTesting(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LOCK_KEY);
}
