/**
 * Canvas micro-engines for the neon arcade shell. Each factory builds a self-contained game loop
 * compatible with NeonCanvasGame (keyboard + score + game over).
 */
import type { ResolvedNeonTuning } from './tuning/types';

export type NeonEngineKey =
  | 'snake'
  | 'breakout'
  | 'tetris'
  | 'space'
  | 'typing'
  | 'math'
  | 'quiz'
  | 'memory'
  | 'scramble'
  | 'asteroids'
  | 'flappy'
  | 'geometry'
  | 'maze'
  | 'td'
  | 'placeholder';

/** What the shell passes before tuning is merged (see getGameEngine). */
export type NeonGameMetaInput = { title: string; slug: string };

/** Full meta passed into engine factories after tuning injection. */
export type NeonGameMeta = NeonGameMetaInput & { tuning: ResolvedNeonTuning };

export interface NeonEngineInstance {
  /** Called when canvas size or DPR changes */
  init(width: number, height: number, dpr: number): void;
  update(dt: number, keys: Set<string>, prevKeys: Set<string>): void;
  draw(ctx: CanvasRenderingContext2D, width: number, height: number): void;
  getScore(): number;
  isGameOver(): boolean;
}

export type NeonEngineFactory = (meta: NeonGameMeta) => NeonEngineInstance;

export type { ResolvedNeonTuning } from './tuning/types';
