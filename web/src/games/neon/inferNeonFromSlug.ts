import type { NeonEngineKey } from './types';

/**
 * Map SKILLZSTORM_COMPLETE seed slugs → bundled neon engine (first match wins).
 */
export function inferNeonEngineFromSlug(slug: string): NeonEngineKey | undefined {
  const s = slug.toLowerCase();

  const rules: { re: RegExp; k: NeonEngineKey }[] = [
    { re: /neon-chess|^chess-storm$/, k: 'placeholder' },
    { re: /typing|typer|word-blitz|type-speed|spell-storm|vocab-blitz|grammar-quest|reading-rush/, k: 'typing' },
    { re: /word-wizard/, k: 'typing' },
    { re: /math-quest|number-ninja|number-storm|algebra-attack|algebra-dash|binary-blast|loop-storm/, k: 'math' },
    { re: /memory-matrix|memory-flash|sequence-storm|pattern-match/, k: 'memory' },
    { re: /word-scramble|anagram-storm|spelling-quest|word-storm$/, k: 'scramble' },
    { re: /snake|viper|python-pro/, k: 'snake' },
    { re: /breakout|brick|arkanoid|pong|neon-pong/, k: 'breakout' },
    {
      re: /space-invader|galaga|galaxian|space-raider|galaxy-storm|alien-blitz|defender-wave|centipede|missile-command|phoenix|scramble-x$|zaxxon|robotron|dual-storm|horde-rush|bullet-hell|tank-storm|star-assault/,
      k: 'space',
    },
    { re: /tetris|block-storm|stack-attack|grid-master|color-match/, k: 'tetris' },
    {
      re: /flappy|geometry-dash|cyber-sprint|mushroom-dash|neon-jump|platform-storm|sky-runner|super-skillz|castle-siege|coin-blitz|pipe-escape|star-power|shell-shock|world-8|princess-rescue|gravity-flip|neon-jumper|cyber-ninja|kart-storm|pixel-racer|turbo-track|neon-racer|neon-circuit|drift-king|space-racer|cyber-highway|desert-rally|donkey-run/,
      k: 'geometry',
    },
    { re: /asteroid|space-rock|cosmic-blast/, k: 'asteroids' },
    {
      re: /pac-maze|^maze|dungeon|labyrinth|dig-dug|qbert|vector-maze|maze-runner|maze-escape|neon-maze|dungeon-run|dungeon-crawl|dungeon-storm|neon-dungeon|crypt-runner|crystal-castle|mr-do|burger-time|frogger|moon-patrol|lunar-lander|tempest|joust-storm|tron-cycles/,
      k: 'maze',
    },
    { re: /tower-blitz|tower-defense|neon-fortress/, k: 'td' },
    { re: /rhythm-storm|beat-blitz|physics-pinball/, k: 'placeholder' },
    {
      re: /street-storm|neon-kombat|robot-rumble|shadow-duel|arena-legends|punch-arena|pixel-punch|storm-fighter$|joust-fighter|retro-soccer|slam-dunk|tennis-storm|ice-hockey|street-hoops|cyber-soccer|pixel-warfare|sky-assault|battle-ships/,
      k: 'placeholder',
    },
    {
      re: /geography-hero|capital-clash|map-master|flag-frenzy|science-lab|atom-smash|physics-blast|bio-burst|chemistry-quest|history-blitz|timeline-rush|ancient-quest|revolution-x|civics-storm|code-logic|algo-quest|debug-dash|geography-quest|world-explorer|science-quest|history-blast|vocab-blast|brain-blitz|code-quest|trivia-blitz|logic-blast|reflex-blitz|reaction-time|color-rush|pattern-storm/,
      k: 'quiz',
    },
    { re: /math-storm|number-battle|times-table|math-elite|fraction-fighter/, k: 'math' },
  ];

  for (const { re, k } of rules) {
    if (re.test(s)) return k;
  }

  return undefined;
}
