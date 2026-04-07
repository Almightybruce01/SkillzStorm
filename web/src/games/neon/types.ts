/**
 * Canvas micro-engines for the neon arcade shell. Each factory builds a self-contained game loop
 * compatible with NeonCanvasGame (keyboard + score + game over).
 */
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

/** Passed into every factory so visuals / tuning can vary by game id (slug). */
export type NeonGameMeta = { title: string; slug: string };

export interface NeonEngineInstance {
  /** Called when canvas size or DPR changes */
  init(width: number, height: number, dpr: number): void;
  update(dt: number, keys: Set<string>, prevKeys: Set<string>): void;
  draw(ctx: CanvasRenderingContext2D, width: number, height: number): void;
  getScore(): number;
  isGameOver(): boolean;
}

export type NeonEngineFactory = (meta: NeonGameMeta) => NeonEngineInstance;
