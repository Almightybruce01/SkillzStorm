import type { RivalBrain } from '../engine/RaceSimulation';

export type NamedRival = { name: string; brain: RivalBrain; hue: number };

/** Curated rivals — distinct pacing lines for future voice / livery hooks */
export const DEFAULT_RIVAL_ROSTER: NamedRival[] = [
  { name: 'Apex Vega', brain: { aggression: 0.62, lineNoise: 0.31, throttleBias: 0.12 }, hue: 188 },
  { name: 'Nova Drift', brain: { aggression: 0.45, lineNoise: 0.52, throttleBias: -0.08 }, hue: 312 },
  { name: 'Ion Quill', brain: { aggression: 0.38, lineNoise: 0.22, throttleBias: 0.2 }, hue: 142 },
  { name: 'Rift Kairo', brain: { aggression: 0.71, lineNoise: 0.41, throttleBias: 0.05 }, hue: 24 },
  { name: 'Echo Mako', brain: { aggression: 0.55, lineNoise: 0.18, throttleBias: -0.12 }, hue: 210 },
];

export function pickRivals(count: number): NamedRival[] {
  return DEFAULT_RIVAL_ROSTER.slice(0, Math.min(count, DEFAULT_RIVAL_ROSTER.length));
}
