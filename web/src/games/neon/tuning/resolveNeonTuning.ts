import type { NeonEngineKey } from '../types';
import { ENGINE_TUNING_DEFAULTS, NEON_TUNING_BASE } from './defaults';
import { SLUG_TUNING_OVERRIDES } from './slugOverrides';
import type { ResolvedNeonTuning } from './types';

function mergeTuning(...parts: Partial<ResolvedNeonTuning>[]): ResolvedNeonTuning {
  return Object.assign({}, NEON_TUNING_BASE, ...parts) as ResolvedNeonTuning;
}

export function resolveNeonTuning(engineKey: NeonEngineKey, slug: string): ResolvedNeonTuning {
  const engine = ENGINE_TUNING_DEFAULTS[engineKey] ?? {};
  const slugPart = SLUG_TUNING_OVERRIDES[slug] ?? {};
  return mergeTuning(engine, slugPart);
}
