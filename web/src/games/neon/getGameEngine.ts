import type { NeonEngineFactory, NeonEngineKey } from './types';
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
} from './engines/all';

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

export function getGameEngine(key: string): NeonEngineFactory {
  const k = key as NeonEngineKey;
  return registry[k] ?? createPlaceholderEngine;
}
