import { pickBankIndex, scramblePoolFor } from '../content';
import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { AMBER, CYAN, font } from './shared';

export const createScrambleEngine: NeonEngineFactory = (meta) => {
  const pool = scramblePoolFor(meta.slug, meta.grade);
  let word = pool[0] ?? 'FUN';
  let pickN = 0;
  let scrambled = 'FUN';
  let buf = '';
  let w = 400;
  let h = 300;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function pick() {
    const i = pickBankIndex(meta.slug, 'scr', pickN++, pool.length);
    word = pool[i] ?? word;
    scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    buf = '';
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      pickN = 0;
      pick();
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt * meta.tuning.starfieldParallax;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((L) => {
        if (keys.has(L) && !prev.has(L)) {
          buf += L;
          if (buf.length > 8) buf = buf.slice(-8);
          if (buf.endsWith(word)) {
            score += 120;
            pick();
          }
        }
      });
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug + 'scr'));
      font(ctx, 11);
      ctx.fillStyle = AMBER;
      ctx.textAlign = 'center';
      ctx.fillText(scrambled, w / 2, h / 2 - 20);
      font(ctx, 9);
      ctx.fillStyle = CYAN;
      ctx.fillText(`UNSCRAMBLE → ${word.length} LETTERS`, w / 2, h / 2 + 16);
      ctx.fillStyle = '#aab';
      ctx.fillText(buf.slice(-12), w / 2, h / 2 + 44);
      ctx.fillText(`SCORE ${score}`, w / 2, h - 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
