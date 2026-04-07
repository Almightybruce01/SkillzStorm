import type { NeonEngineKey } from '../types';
import type { NeonTuningPartial, ResolvedNeonTuning } from './types';

type EngineTuningDefaults = Record<NeonEngineKey, NeonTuningPartial>;

export const NEON_TUNING_BASE: ResolvedNeonTuning = {
  lives: 3,
  speedScale: 1,
  invulnSeconds: 2,
  mathTimeLimitSeconds: 22,
  tetrisFallStep: 0.52,
  starfieldParallax: 1,
};

/** Per–engine-key tweaks (e.g. TD uses more base “base” hits). */
export const ENGINE_TUNING_DEFAULTS: EngineTuningDefaults = {
  placeholder: {},
  snake: { speedScale: 1 },
  breakout: {},
  tetris: { tetrisFallStep: 0.52 },
  space: {},
  typing: { speedScale: 1 },
  math: { mathTimeLimitSeconds: 22 },
  quiz: {},
  memory: {},
  scramble: {},
  asteroids: { invulnSeconds: 2.2 },
  flappy: { invulnSeconds: 1.4 },
  geometry: { invulnSeconds: 1.2 },
  maze: {},
  td: { lives: 12 },
};

export function isNeonEngineKey(k: string): k is NeonEngineKey {
  return k in ENGINE_TUNING_DEFAULTS;
}
