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
    primary = [...POOL_CORE, ...POOL_HISTORY];
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
  if (/math|number|algebra/.test(slugHints(slug))) {
    return [...base, 'GRAPH', 'PROOF', 'SUM'];
  }
  return base;
}
