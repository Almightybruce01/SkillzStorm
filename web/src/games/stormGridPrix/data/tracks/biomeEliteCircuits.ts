import type { LanePoint, StormTrackDef } from './types';

function ringPoints(seed: number, n: number, scale: number, widthBase: number): LanePoint[] {
  const pts: LanePoint[] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const r =
      scale * (0.82 + 0.14 * Math.sin(seed * 3 + t * 4) + 0.09 * Math.cos(seed + t * 6));
    const x = Math.cos(t * 1.05 + seed * 0.15) * r * 1.12;
    const y = Math.sin(t * 0.98 + seed * 0.08) * r * 0.94;
    const w = widthBase + Math.sin(seed * 2 + i * 0.12) * 5;
    pts.push({ x: +x.toFixed(4), y: +y.toFixed(4), w: +w.toFixed(2) });
  }
  return pts;
}

/** Mystic rainforest — emerald canopy, tighter organic line */
export const MYSTIC_RAINFOREST_TRACK: StormTrackDef = {
  slug: 'mystic-rainforest-apex',
  name: 'Mystic Rainforest Apex',
  theme: '#22c55e',
  points: ringPoints(11, 520, 410, 38),
};

/** Coastal velocity — sun, salt, long sweepers */
export const COASTAL_VELOCITY_TRACK: StormTrackDef = {
  slug: 'coastal-velocity-run',
  name: 'Coastal Velocity Run',
  theme: '#38bdf8',
  points: ringPoints(17, 520, 440, 40),
};

export const ELITE_BIOME_TRACKS: StormTrackDef[] = [MYSTIC_RAINFOREST_TRACK, COASTAL_VELOCITY_TRACK];
