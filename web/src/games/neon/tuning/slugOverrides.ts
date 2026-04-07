import type { NeonTuningPartial } from './types';

/**
 * Optional per-catalog-id overrides. Keys are `game.id` from game data.
 * Add entries here to tune difficulty without forking engine code.
 */
export const SLUG_TUNING_OVERRIDES: Record<string, NeonTuningPartial> = {
  'math-elite': { mathTimeLimitSeconds: 14, speedScale: 1.06 },
  'times-table-titan': { mathTimeLimitSeconds: 18, speedScale: 1.04 },
  'neon-viper-xl': { lives: 5, speedScale: 1.1 },
  'storm_defenders': { lives: 14 },
  sentence_sprint: { speedScale: 1.05, invulnSeconds: 1.6 },
  vr_math_dojo: { lives: 4, speedScale: 0.95 },
};
