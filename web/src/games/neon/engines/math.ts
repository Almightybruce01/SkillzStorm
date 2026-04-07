import { mathRoundsForGrade, pickBankIndex, type NeonMathRound } from '../content';
import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slug01, slugSeed } from './slugTheme';

import { AMBER, CYAN, font } from './shared';

export const createMathEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let round: NeonMathRound | null = null;
  let roundCounter = 0;
  let over = false;
  let score = 0;
  let t = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const bank = mathRoundsForGrade(meta.grade);

  function timeLimit() {
    const base = meta.tuning.mathTimeLimitSeconds;
    const jitter = Math.floor(slug01(meta.slug, 11) * 6) - 3;
    return Math.max(8, base + jitter);
  }

  function gen() {
    const i = pickBankIndex(meta.slug, 'math', roundCounter++, bank.length);
    round = bank[i]!;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      roundCounter = 0;
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
      const cur = round;
      if (!cur) return;
      ;[1, 2, 3, 4].forEach((n) => {
        const k = String(n);
        if (keys.has(k) && !prev.has(k)) {
          if (n - 1 === cur.correctIndex) {
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
      if (!round) return;
      const limit = timeLimit();
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 11);
      ctx.fillStyle = CYAN;
      ctx.textAlign = 'center';
      ctx.fillText(round.prompt, w / 2, h / 2 - 30);
      font(ctx, 10);
      round.choices.forEach((c, i) => {
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
