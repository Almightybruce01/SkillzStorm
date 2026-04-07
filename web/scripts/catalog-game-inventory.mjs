#!/usr/bin/env node
/**
 * Generates a markdown + JSON inventory of every catalog title:
 * id, name, category, source (core vs seed), inferred neon engine (must match inferNeonFromSlug.ts rules — update both if rules change).
 *
 * Run from repo root:  node web/scripts/catalog-game-inventory.mjs
 * Or:                  npm run catalog:inventory --prefix web
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, '..');
const gameDataPath = path.join(webRoot, 'src/engine/gameData.ts');
const seedPath = path.join(webRoot, 'src/engine/completeSeed.raw.json');
const outMd = path.join(webRoot, '..', 'docs', 'generated', 'GAME_INVENTORY.md');
const outJson = path.join(webRoot, '..', 'docs', 'generated', 'catalog-inventory.json');

/** Mirrors web/src/games/neon/inferNeonFromSlug.ts — keep in sync. */
function inferNeonEngineFromSlug(slug) {
  const s = slug.toLowerCase();
  const rules = [
    [/neon-chess|^chess-storm$/, 'placeholder'],
    [/typing|typer|word-blitz|type-speed|spell-storm|vocab-blitz|grammar-quest|reading-rush/, 'typing'],
    [/word-wizard/, 'typing'],
    [/math-quest|number-ninja|number-storm|algebra-attack|algebra-dash|binary-blast|loop-storm/, 'math'],
    [/memory-matrix|memory-flash|sequence-storm|pattern-match/, 'memory'],
    [/word-scramble|anagram-storm|spelling-quest|word-storm$/, 'scramble'],
    [/snake|viper|python-pro/, 'snake'],
    [/breakout|brick|arkanoid|pong|neon-pong/, 'breakout'],
    [
      /space-invader|galaga|galaxian|space-raider|galaxy-storm|alien-blitz|defender-wave|centipede|missile-command|phoenix|scramble-x$|zaxxon|robotron|dual-storm|horde-rush|bullet-hell|tank-storm|star-assault/,
      'space',
    ],
    [/tetris|block-storm|stack-attack|grid-master|color-match/, 'tetris'],
    [
      /flappy|geometry-dash|cyber-sprint|mushroom-dash|neon-jump|platform-storm|sky-runner|super-skillz|castle-siege|coin-blitz|pipe-escape|star-power|shell-shock|world-8|princess-rescue|gravity-flip|neon-jumper|cyber-ninja|kart-storm|pixel-racer|turbo-track|neon-racer|neon-circuit|drift-king|space-racer|cyber-highway|desert-rally|donkey-run/,
      'geometry',
    ],
    [/asteroid|space-rock|cosmic-blast/, 'asteroids'],
    [
      /pac-maze|^maze|dungeon|labyrinth|dig-dug|qbert|vector-maze|maze-runner|maze-escape|neon-maze|dungeon-run|dungeon-crawl|dungeon-storm|neon-dungeon|crypt-runner|crystal-castle|mr-do|burger-time|frogger|moon-patrol|lunar-lander|tempest|joust-storm|tron-cycles/,
      'maze',
    ],
    [/tower-blitz|tower-defense|neon-fortress/, 'td'],
    [/rhythm-storm|beat-blitz|physics-pinball/, 'placeholder'],
    [
      /street-storm|neon-kombat|robot-rumble|shadow-duel|arena-legends|punch-arena|pixel-punch|storm-fighter$|joust-fighter|retro-soccer|slam-dunk|tennis-storm|ice-hockey|street-hoops|cyber-soccer|pixel-warfare|sky-assault|battle-ships/,
      'placeholder',
    ],
    [
      /geography-hero|capital-clash|map-master|flag-frenzy|science-lab|atom-smash|physics-blast|bio-burst|chemistry-quest|history-blitz|timeline-rush|ancient-quest|revolution-x|civics-storm|code-logic|algo-quest|debug-dash|geography-quest|world-explorer|science-quest|history-blast|vocab-blast|brain-blitz|code-quest|trivia-blitz|logic-blast|reflex-blitz|reaction-time|color-rush|pattern-storm/,
      'quiz',
    ],
    [/math-storm|number-battle|times-table|math-elite|fraction-fighter/, 'math'],
  ];
  for (const [re, k] of rules) {
    if (re.test(s)) return k;
  }
  if (/(quiz|trivia|exam|spelling|vocab|grammar|science|history|geo|capital|learn|edu|school)/.test(s)) return 'quiz';
  if (/(math|number|algebra|fraction|count|calc)/.test(s)) return 'math';
  if (/(type|word|letter|spell|read)/.test(s)) return 'typing';
  if (/(snake|worm|slither)/.test(s)) return 'snake';
  if (/(break|brick|pong|paddle)/.test(s)) return 'breakout';
  if (/(tetris|block|stack)/.test(s)) return 'tetris';
  if (/(space|invader|galaga|shooter|blast|raid)/.test(s)) return 'space';
  if (/(asteroid|cosmic)/.test(s)) return 'asteroids';
  if (/(maze|dungeon|labyrinth|pac)/.test(s)) return 'maze';
  if (/(tower|defense|td)/.test(s)) return 'td';
  if (/(memory|match|card|flip)/.test(s)) return 'memory';
  if (/(scramble|anagram|jumble)/.test(s)) return 'scramble';
  if (/(race|kart|track|drift|car|drive|highway|rally|circuit)/.test(s)) return 'geometry';
  return 'geometry';
}

function parseCoreGames(ts) {
  const out = [];
  const section = ts.split('const coreGames')[1]?.split('];')[0] ?? '';
  const chunks = section.split(/\n\s*\{/);
  for (const raw of chunks) {
    const chunk = raw.trim();
    if (!chunk.startsWith("id:")) continue;
    const id = /id:\s*'([^']+)'/.exec(chunk)?.[1];
    const name = /name:\s*'((?:\\.|[^'\\])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'") ?? '';
    const category = /category:\s*'([^']+)'/.exec(chunk)?.[1] ?? 'unknown';
    if (id) out.push({ id, name, category, source: 'core' });
  }
  return out;
}

function mapSeedCategory(c) {
  if (c === 'Mario & Kart') return 'StormMario';
  if (c === 'Educational') return 'StormEduPlus';
  if (
    ['Racing', 'Fighting', 'Shooters', 'Sports', 'Strategy', 'RPG', 'Rhythm', 'Platformer'].includes(c) ||
    c === 'Action'
  ) {
    return 'StormElite';
  }
  return 'StormRetro';
}

function main() {
  const gameData = fs.readFileSync(gameDataPath, 'utf8');
  const core = parseCoreGames(gameData);
  const seedRows = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
  const seed = seedRows.map((r) => ({
    id: r.slug,
    name: r.title,
    description: r.description,
    category: mapSeedCategory(r.category),
    source: 'seed',
    seedCategory: r.category,
  }));

  const coreIds = new Set(core.map((c) => c.id));
  const seedOnly = seed.filter((s) => !coreIds.has(s.id));

  const rows = [];
  for (const c of core) {
    rows.push({
      id: c.id,
      name: c.name,
      category: c.category,
      source: 'core',
      inferredEngine: inferNeonEngineFromSlug(c.id),
      purpose: `Playable route /game/${c.id} — core catalog title.`,
    });
  }
  for (const s of seedOnly) {
    rows.push({
      id: s.id,
      name: s.name,
      category: s.category,
      source: 'seed',
      seedCategory: s.seedCategory,
      inferredEngine: inferNeonEngineFromSlug(s.id),
      purpose: s.description?.slice(0, 200) || 'Seed catalog entry.',
    });
  }

  rows.sort((a, b) => a.id.localeCompare(b.id));

  fs.mkdirSync(path.dirname(outMd), { recursive: true });

  const md = [`# Game inventory (generated)`, ``, `> **Total titles:** ${rows.length}`, `> Generated by \`web/scripts/catalog-game-inventory.mjs\`. Do not hand-edit; regenerate after catalog changes.`, ``, `## Summary`, ``, `- **Core:** ${core.length}`, `- **Seed-only:** ${seedOnly.length}`, ``, `## Per-title registry`, ``, `| # | id | name | category | source | inferred engine |`, `|---|-----|------|----------|--------|-----------------|`, ...rows.map((r, i) => `| ${i + 1} | \`${r.id}\` | ${escapeMd(r.name)} | ${r.category} | ${r.source} | \`${r.inferredEngine}\` |`), ``, `## Purpose stubs (for sprint assignment)`, ``, ...rows.map((r) => `### ${r.id}\n- **Purpose:** ${r.purpose}\n- **Engine contract:** \`init/update/draw/getScore/isGameOver\` via \`NeonEngineInstance\` (see \`web/src/games/neon/types.ts\`).\n- **Distinct UX:** Theming via \`slugTheme\` + \`resolveNeonTuning\`; per-title HUD/overlays TBD in sprint.\n`), ``, `---`, ``, `_Regenerate: \`npm run catalog:inventory --prefix web\`_`, ``].join('\n');

  fs.writeFileSync(outMd, md, 'utf8');
  fs.writeFileSync(outJson, JSON.stringify({ generatedAt: new Date().toISOString(), count: rows.length, games: rows }, null, 2), 'utf8');

  console.log(`Wrote ${rows.length} games → ${path.relative(process.cwd(), outMd)}`);
}

function escapeMd(s) {
  return String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

main();
