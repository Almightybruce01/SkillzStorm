import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, font } from './shared';

export const createBreakoutEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let px = 0;
  let bx = 0;
  let by = 0;
  let bvx = 120;
  let bvy = -140;
  let bricks: boolean[] = [];
  let cols = 8;
  let rows = 4;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function resetBall() {
    bx = w / 2;
    by = h - 60;
    bvx = (Math.random() > 0.5 ? 1 : -1) * 140 * meta.tuning.speedScale;
    bvy = -160 * meta.tuning.speedScale;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      px = width / 2 - 50;
      bricks = Array(cols * rows).fill(true);
      resetBall();
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      const spd = 260 * meta.tuning.speedScale;
      if (keys.has('ArrowLeft')) px -= spd * dt;
      if (keys.has('ArrowRight')) px += spd * dt;
      px = Math.max(20, Math.min(w - 120, px));
      bx += bvx * dt;
      by += bvy * dt;
      if (bx < 8 || bx > w - 8) bvx *= -1;
      if (by < 8) bvy *= -1;
      if (by > h - 4) {
        lives -= 1;
        if (lives <= 0) over = true;
        else resetBall();
      }
      const pw = 100;
      if (by > h - 48 && by < h - 38 && bx > px && bx < px + pw) {
        bvy = -Math.abs(bvy);
        score += 2;
      }
      const bw = (w - 24) / cols;
      const bh = 16;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          if (!bricks[i]) continue;
          const bx0 = 12 + c * bw;
          const by0 = 40 + r * bh;
          if (bx > bx0 && bx < bx0 + bw - 4 && by > by0 && by < by0 + bh) {
            bricks[i] = false;
            bvy *= -1;
            score += 15;
          }
        }
      }
      if (!bricks.some(Boolean)) {
        score += 500;
        bricks = Array(cols * rows).fill(true);
        resetBall();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const bw = (w - 24) / cols;
      const bh = 16;
      const baseHue = hueFromSlug(meta.slug + '-brick');
      bricks.forEach((on, i) => {
        if (!on) return;
        const c = i % cols;
        const r = (i / cols) | 0;
        ctx.fillStyle = `hsl(${(baseHue + (c + r * 3) * 14) % 360}, 88%, 56%)`;
        ctx.fillRect(12 + c * bw, 40 + r * bh, bw - 4, bh - 2);
      });
      ctx.fillStyle = CYAN;
      ctx.fillRect(px, h - 44, 100, 10);
      ctx.beginPath();
      ctx.arc(bx, by, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}`, 8, 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
