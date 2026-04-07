import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slug01, slugSeed } from './slugTheme';

import { AMBER, CYAN, font } from './shared';

export const createMathEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let a = 3;
  let b = 5;
  let ans = 8;
  let choices: number[] = [];
  let over = false;
  let score = 0;
  let t = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function timeLimit() {
    const base = meta.tuning.mathTimeLimitSeconds;
    const jitter = Math.floor(slug01(meta.slug, 11) * 6) - 3;
    return Math.max(8, base + jitter);
  }

  function gen() {
    a = 2 + Math.floor(Math.random() * 10);
    b = 2 + Math.floor(Math.random() * 10);
    ans = a + b;
    const set = new Set([ans]);
    while (set.size < 4) set.add(ans + Math.floor(Math.random() * 7) - 3);
    choices = [...set].sort(() => Math.random() - 0.5);
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      gen();
      over = false;
      score = 0;
      t = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      t += dt;
      const limit = timeLimit();
      if (t > limit) {
        lives -= 1;
        t = 0;
        gen();
        if (lives <= 0) over = true;
      }
      ;[1, 2, 3, 4].forEach((n) => {
        const k = String(n);
        if (keys.has(k) && !prev.has(k)) {
          if (choices[n - 1] === ans) {
            score += 50;
            gen();
            t = 0;
          } else {
            lives -= 1;
            if (lives <= 0) over = true;
          }
        }
      });
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      const limit = timeLimit();
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 12);
      ctx.fillStyle = CYAN;
      ctx.textAlign = 'center';
      ctx.fillText(`${a} + ${b} = ?`, w / 2, h / 2 - 30);
      font(ctx, 10);
      choices.forEach((c, i) => {
        ctx.fillStyle = AMBER;
        ctx.fillText(`${i + 1}) ${c}`, w / 2, h / 2 + i * 18);
      });
      font(ctx, 8);
      ctx.fillStyle = '#778899';
      ctx.fillText(`KEYS 1-4  ♥${lives}  ${Math.max(0, limit - t).toFixed(1)}s  SCORE ${score}`, w / 2, h - 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
