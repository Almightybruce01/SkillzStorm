import { hashStringToSeed } from '../rng';

/** Deterministic index for slug + counter (no allocation). */
export function pickBankIndex(slug: string, salt: string, counter: number, length: number): number {
  if (length <= 0) return 0;
  const h = hashStringToSeed(`${slug}:${salt}:${counter}`);
  return h % length;
}
