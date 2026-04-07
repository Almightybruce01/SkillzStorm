/**
 * StormGrid Prix — tuning matrices, car classes, and season metadata.
 * Adjust here before changing physics core.
 */

export type CarClassId = 'storm-s' | 'storm-gt' | 'grid-pro' | 'proximity-x';

export type CarClass = {
  id: CarClassId;
  label: string;
  accelMul: number;
  gripMul: number;
  topSpeedMul: number;
  driftAssist: number;
};

export const CAR_CLASSES: CarClass[] = [
  { id: 'storm-s', label: 'Storm S', accelMul: 1.08, gripMul: 1.05, topSpeedMul: 0.98, driftAssist: 0.12 },
  { id: 'storm-gt', label: 'Storm GT', accelMul: 0.96, gripMul: 1.12, topSpeedMul: 1.06, driftAssist: 0.08 },
  { id: 'grid-pro', label: 'Grid Pro', accelMul: 1.02, gripMul: 1.08, topSpeedMul: 1.02, driftAssist: 0.1 },
  { id: 'proximity-x', label: 'Proximity X', accelMul: 1.12, gripMul: 0.98, topSpeedMul: 1.04, driftAssist: 0.18 },
];

/** Elite engine bay — same stats as CAR_CLASSES, marketing labels */
export const ENGINE_PRESETS: { id: CarClassId; label: string; blurb: string }[] = [
  { id: 'storm-s', label: 'Apex Twin Turbo', blurb: 'Snap off corners — riot control AI.' },
  { id: 'storm-gt', label: 'GT Horizon V12', blurb: 'Long legs for coastal sweepers.' },
  { id: 'grid-pro', label: 'Grid Pro Hybrid', blurb: 'Balanced for rainforest rhythm.' },
  { id: 'proximity-x', label: 'Overdrive X', blurb: 'Raw thrust — shortest boost cooldown feel.' },
];

export type BodyStyleId = 'silhouette' | 'wedge' | 'canopy' | 'wraith';

export type BodyStyle = { id: BodyStyleId; label: string; primaryHue: number; accentHue: number };

export const BODY_STYLES: BodyStyle[] = [
  { id: 'silhouette', label: 'Silhouette GT', primaryHue: 200, accentHue: 320 },
  { id: 'wedge', label: 'Obsidian Wedge', primaryHue: 265, accentHue: 190 },
  { id: 'canopy', label: 'Canopy Aero', primaryHue: 145, accentHue: 85 },
  { id: 'wraith', label: 'Plasma Wraith', primaryHue: 330, accentHue: 25 },
];

export const SEASON_THEMES = [
  'Neon Circuit Zero',
  'Aurora Rift',
  'Magma Belt',
  'Chrome Wastes',
  'Orbital Deck',
  'Jungle Grid',
  'Abyssal Run',
  'Crystal Veins',
  'Dust Storm',
  'StormGrid Prime',
] as const;

export const NETWORK_MODES = ['solo', 'split-2', 'lan-room'] as const;
export type NetworkMode = (typeof NETWORK_MODES)[number];

/** Future: WebRTC signaling endpoints — placeholder keys for product wiring */
export const NET_PLACEHOLDER = {
  signalPath: '/api/stormgrid/signal',
  roomPrefix: 'sgp-',
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
} as const;

/** Lap / scoring */
export const SCORE_LAP_BONUS = 5000;
export const SCORE_POSITION = [2000, 1600, 1200, 900, 700, 500, 400, 300, 200, 100];

/** Particle budgets (canvas) */
export const FX_MAX_SPARKS = 120;
export const FX_MAX_SKID = 40;

/** AI difficulty ladder */
export const AI_TIERS = [
  { id: 'rookie', speedMul: 0.82, lineError: 0.14 },
  { id: 'pro', speedMul: 0.94, lineError: 0.08 },
  { id: 'elite', speedMul: 1.02, lineError: 0.05 },
  { id: 'storm', speedMul: 1.08, lineError: 0.035 },
] as const;
