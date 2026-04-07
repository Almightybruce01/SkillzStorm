import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, MAG, AMBER, font } from './shared';

export const createTetrisEngine: NeonEngineFactory = (meta) => {
  let w = 300;
  let h = 400;
  const cols = 8;
  const rows = 12;
  let grid: (string | null)[][] = [];
  let over = false;
  let score = 0;
  let fall = 0;
  let piece = { x: 3, y: 0, c: CYAN };
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function newPiece() {
    piece = { x: 3, y: 0, c: [CYAN, MAG, AMBER, '#0ff'][Math.floor(Math.random() * 4)] };
    if (grid[0].some((c) => c)) over = true;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      grid = Array.from({ length: rows }, () => Array(cols).fill(null));
      over = false;
      score = 0;
      fall = 0;
      time = 0;
      newPiece();
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      if (keys.has('ArrowLeft') && !prev.has('ArrowLeft')) piece.x = Math.max(0, piece.x - 1);
      if (keys.has('ArrowRight') && !prev.has('ArrowRight')) piece.x = Math.min(cols - 1, piece.x + 1);
      if (keys.has('ArrowDown')) fall += dt * 3 * meta.tuning.speedScale;
      fall += dt * meta.tuning.speedScale;
      const step = meta.tuning.tetrisFallStep;
      while (fall >= step && !over) {
        fall -= step;
        if (piece.y + 1 >= rows || grid[piece.y + 1][piece.x]) {
          grid[piece.y][piece.x] = piece.c;
          for (let r = rows - 1; r >= 0; r--) {
            if (grid[r].every((c) => c)) {
              grid.splice(r, 1);
              grid.unshift(Array(cols).fill(null));
              score += 100;
            }
          }
          newPiece();
        } else piece.y++;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const cw = Math.min(w / (cols + 1), 28);
      const ch = cw;
      const ox = (w - cols * cw) / 2;
      const oy = 36;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const g = grid[r][c];
          if (g) {
            ctx.fillStyle = g;
            ctx.fillRect(ox + c * cw, oy + r * ch, cw - 2, ch - 2);
          }
        }
      }
      ctx.fillStyle = piece.c;
      ctx.fillRect(ox + piece.x * cw, oy + piece.y * ch, cw - 2, ch - 2);
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}`, 8, 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
