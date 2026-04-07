import { pickBankIndex, typingWordsFor } from '../content';
import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, neonAccent, slug01, slugSeed } from './slugTheme';

import { font } from './shared';

export const createTypingEngine: NeonEngineFactory = (meta) => {
  const pool = typingWordsFor(meta.slug, meta.grade);
  let word = pool[0] ?? 'PLAY';
  let wordPick = 0;
  let idx = 0;
  let w = 400;
  let h = 300;
  let y = 80;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const [tw, glow] = neonAccent(meta.slug);

  function speed() {
    return (42 + slug01(meta.slug, 9) * 18) * meta.tuning.speedScale;
  }

  function nextWord() {
    const i = pickBankIndex(meta.slug, 'type', wordPick++, pool.length);
    word = pool[i] ?? word;
    idx = 0;
    y = 48 + (slugSeed(meta.slug + word) % 24);
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      wordPick = 0;
      nextWord();
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      y += speed() * dt;
      const expect = word[idx]?.toUpperCase();
      if (expect && keys.has(expect) && !prev.has(expect)) {
        idx++;
        score += 5;
        if (idx >= word.length) {
          score += 40;
          nextWord();
        }
      }
      if (y > h - 50) {
        lives -= 1;
        if (lives <= 0) over = true;
        else nextWord();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 13);
      ctx.fillStyle = tw;
      ctx.textAlign = 'center';
      ctx.shadowColor = glow;
      ctx.shadowBlur = 10;
      ctx.fillText(word, w / 2, y);
      ctx.shadowBlur = 0;
      font(ctx, 9);
      ctx.fillStyle = '#8899aa';
      ctx.fillText(`TYPED ${idx}/${word.length}  ♥${lives}`, w / 2, h - 36);
      ctx.fillText(`SCORE ${score}`, w / 2, h - 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
