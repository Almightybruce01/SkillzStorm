import type { Grade } from '../../questionBank';

/** Core arcade vocabulary (all modes). */
export const POOL_CORE = [
  'SKILL',
  'STORM',
  'MATH',
  'READ',
  'LEARN',
  'PLAY',
  'QUIZ',
  'CODE',
  'STAR',
  'FOCUS',
  'LEVEL',
  'SPEED',
  'BRAIN',
  'QUEST',
  'ARENA',
  'BLITZ',
  'COMBO',
  'STREAK',
  'RALLY',
  'BOOST',
  'PRIME',
  'ELITE',
  'ARCADE',
  'NEON',
  'RAPID',
  'SHARP',
];

export const POOL_STEM = [
  'ATOM',
  'FORGE',
  'LOGIC',
  'PIXEL',
  'VECTOR',
  'GRAPH',
  'PROBE',
  'LASER',
  'ORBIT',
  'CIRCUIT',
  'BINARY',
  'MATRIX',
  'PHASE',
  'QUARK',
  'PHOTON',
  'SIGNAL',
  'FILTER',
  'SAMPLE',
  'MODEL',
  'SOLVE',
];

export const POOL_READING = [
  'NOVEL',
  'VERSE',
  'PROSE',
  'THEME',
  'PLOT',
  'STANZA',
  'CONTEXT',
  'SUMMARY',
  'ESSAY',
  'THESIS',
];

export const POOL_HISTORY = [
  'EMPIRE',
  'TREATY',
  'REVOLT',
  'DYNASTY',
  'COLONY',
  'ALLIANCE',
  'ARTIFACT',
  'CHRONICLE',
  'REFORM',
  'MONARCH',
  'SENATE',
  'REPUBLIC',
];

export const POOL_GEO = [
  'EQUATOR',
  'MERIDIAN',
  'LATITUDE',
  'LONGITUDE',
  'TUNDRA',
  'SAVANNA',
  'DELTA',
  'FIORD',
  'ISTHMUS',
  'PLATEAU',
];

export const POOL_SPORTS = [
  'SPRINT',
  'RALLY',
  'RELAY',
  'JUMPS',
  'SERVE',
  'PITCH',
  'GOALS',
  'MEDAL',
];

/** Short words for scramble / younger bands. */
export const POOL_SHORT = ['CAT', 'SUN', 'MAP', 'RUN', 'FUN', 'WIN', 'ONE', 'TWO', 'RED', 'BIG'];

function slugHints(slug: string): string {
  return slug.toLowerCase();
}

/** Pick a typing word list from catalog id heuristics + grade. */
export function typingWordsFor(slug: string, grade: Grade | undefined): string[] {
  const g = grade ?? '6-8';
  const s = slugHints(slug);
  let primary: string[] = POOL_CORE;
  if (/math|number|fraction|algebra|stat|data|ratio|probability|coordinate|chem|physics|science|code|stem|astro|meteor/.test(s)) {
    primary = [...POOL_CORE, ...POOL_STEM];
  } else if (/read|essay|vocab|grammar|word|sentence|literacy|context|spelling|sat/.test(s)) {
    primary = [...POOL_CORE, ...POOL_READING];
  } else if (/history|timeline|debate|geography|world|civil/.test(s)) {
    primary = [...POOL_CORE, ...POOL_HISTORY, ...POOL_GEO];
  } else if (/geometry|glide|dash|runner|sport|arena|ball|team|medal|sprint/.test(s)) {
    primary = [...POOL_CORE, ...POOL_STEM, ...POOL_SPORTS];
  }
  if (g === 'K-2') {
    return [...new Set([...POOL_SHORT, ...primary.slice(0, 8)])];
  }
  return [...new Set([...primary])];
}

export function scramblePoolFor(slug: string, grade: Grade | undefined): string[] {
  const base = ['LEARN', 'STORM', 'BRAIN', 'MATH', 'READ', 'LOGIC', 'QUEST', 'SKILL'];
  if ((grade ?? '6-8') === 'K-2') {
    return [...POOL_SHORT, 'FUN', 'WIN'];
  }
  const s = slugHints(slug);
  if (/math|number|algebra/.test(s)) {
    return [...base, 'GRAPH', 'PROOF', 'SUM'];
  }
  if (/geo|map|world|history|timeline/.test(s)) {
    return [...base, 'MAP', 'ERA', 'AGE'];
  }
  return base;
}
