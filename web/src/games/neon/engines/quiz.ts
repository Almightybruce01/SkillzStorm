import { pickBankIndex, quizItemsForGrade, type NeonQuizItem } from '../content';
import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, font } from './shared';

export const createQuizEngine: NeonEngineFactory = (meta) => {
  const bank = quizItemsForGrade(meta.grade);
  let wi = 0;
  let w = 400;
  let h = 300;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function currentQ(): NeonQuizItem {
    const idx = pickBankIndex(meta.slug, 'quiz', wi, bank.length);
    return bank[idx]!;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      wi = 0;
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt * meta.tuning.starfieldParallax;
      const q = currentQ();
      ;[1, 2, 3, 4].forEach((n) => {
        const k = String(n);
        if (keys.has(k) && !prev.has(k)) {
          if (n - 1 === q.correctIndex) {
            score += 100;
            wi++;
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
      const q = currentQ();
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 9);
      ctx.fillStyle = CYAN;
      ctx.textAlign = 'center';
      ctx.fillText(q.prompt, w / 2, h / 2 - 40);
      q.choices.forEach((t, i) => {
        ctx.fillStyle = '#ddeeff';
        ctx.fillText(`${i + 1}) ${t}`, w / 2, h / 2 - 8 + i * 20);
      });
      ctx.fillStyle = '#778899';
      font(ctx, 8);
      ctx.fillText(`SCORE ${score}  ♥${lives}`, w / 2, h - 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
