export const CYAN = '#00ffcc';
export const MAG = '#ff00ff';
export const AMBER = '#ffcc00';

export function font(ctx: CanvasRenderingContext2D, size: number) {
  ctx.font = `${size}px "Press Start 2P", ui-monospace, monospace`;
}

export function aliveCount(enemies: { alive: boolean }[]) {
  return enemies.filter((e) => e.alive).length;
}
