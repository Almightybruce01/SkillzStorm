import type { NeonEngineInstance, NeonEngineFactory, NeonEngineKey, NeonGameMetaInput } from './types';
import { resolveNeonTuning } from './tuning/resolveNeonTuning';
import {
  createAsteroidsEngine,
  createBreakoutEngine,
  createFlappyEngine,
  createGeometryEngine,
  createMazeEngine,
  createMathEngine,
  createMemoryEngine,
  createPlaceholderEngine,
  createQuizEngine,
  createScrambleEngine,
  createSnakeEngine,
  createSpaceEngine,
  createTdEngine,
  createTetrisEngine,
  createTypingEngine,
} from './engines';

const registry: Record<NeonEngineKey, NeonEngineFactory> = {
  snake: createSnakeEngine,
  breakout: createBreakoutEngine,
  tetris: createTetrisEngine,
  space: createSpaceEngine,
  typing: createTypingEngine,
  math: createMathEngine,
  quiz: createQuizEngine,
  memory: createMemoryEngine,
  scramble: createScrambleEngine,
  asteroids: createAsteroidsEngine,
  flappy: createFlappyEngine,
  geometry: createGeometryEngine,
  maze: createMazeEngine,
  td: createTdEngine,
  placeholder: createPlaceholderEngine,
};

/** Returns a launcher that merges `resolveNeonTuning(engineKey, slug)` into meta. */
export function getGameEngine(key: string): (input: NeonGameMetaInput) => NeonEngineInstance {
  const k = key as NeonEngineKey;
  const factory = registry[k] ?? createPlaceholderEngine;
  return (input: NeonGameMetaInput) => factory({ ...input, tuning: resolveNeonTuning(k, input.slug) });
}
