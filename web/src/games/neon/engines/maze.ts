import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, MAG, font } from './shared';

export const createMazeEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  const cols = 11;
  const rows = 9;
  let grid: number[][] = [];
  let px = 1;
  let py = 1;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-maze');

  function gen() {
    grid = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (r % 2 === 0 || c % 2 === 0 ? 1 : 0))
    );
    grid[rows - 2][cols - 2] = 2;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      gen();
      px = 1;
      py = 1;
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt * meta.tuning.starfieldParallax;
      const tryMove = (dx: number, dy: number) => {
        const nx = px + dx;
        const ny = py + dy;
        if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) return;
        if (grid[ny][nx] === 1) return;
        px = nx;
        py = ny;
        if (grid[ny][nx] === 2) {
          score += 500;
          over = true;
        }
      };
      if (keys.has('ArrowUp') && !prev.has('ArrowUp')) tryMove(0, -1);
      if (keys.has('ArrowDown') && !prev.has('ArrowDown')) tryMove(0, 1);
      if (keys.has('ArrowLeft') && !prev.has('ArrowLeft')) tryMove(-1, 0);
      if (keys.has('ArrowRight') && !prev.has('ArrowRight')) tryMove(1, 0);
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.3, slugSeed(meta.slug));
      const cw = Math.min(w / (cols + 2), h / (rows + 3));
      const ox = (w - cols * cw) / 2;
      const oy = 36;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const g = grid[r][c];
          if (g === 1) {
            ctx.fillStyle = '#334455';
            ctx.fillRect(ox + c * cw, oy + r * cw, cw - 1, cw - 1);
          }
          if (g === 2) {
            ctx.fillStyle = MAG;
            ctx.fillRect(ox + c * cw, oy + r * cw, cw - 1, cw - 1);
          }
        }
      }
      ctx.fillStyle = CYAN;
      ctx.fillRect(ox + px * cw + 2, oy + py * cw + 2, cw - 5, cw - 5);
      font(ctx, 8);
      ctx.fillStyle = '#aab';
      ctx.fillText('ARROWS TO EXIT', 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
