import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, neonAccent, slugSeed } from './slugTheme';

import { font } from './shared';

export const createMemoryEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  const pairs = 6;
  let cards: { id: number; flip: boolean; done: boolean }[] = [];
  let first: number | null = null;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const [c1, c2] = neonAccent(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      const ids = [...Array(pairs).keys(), ...Array(pairs).keys()].sort(() => Math.random() - 0.5);
      cards = ids.map((id) => ({ id, flip: false, done: false }));
      first = null;
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt * meta.tuning.starfieldParallax;
      for (let i = 0; i < 12; i++) {
        const k = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY'][i];
        if (keys.has(k) && !prev.has(k)) {
          if (cards[i].done) continue;
          cards[i].flip = true;
          if (first === null) first = i;
          else {
            if (cards[first].id === cards[i].id && first !== i) {
              cards[first].done = cards[i].done = true;
              score += 80;
              if (cards.every((c) => c.done)) score += 500;
            } else {
              cards[first].flip = cards[i].flip = false;
            }
            first = null;
          }
        }
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.6, slugSeed(meta.slug));
      const cols = 4;
      const cell = Math.min(w / 5, 56);
      const ox = (w - cols * cell) / 2;
      const oy = 50;
      cards.forEach((c, i) => {
        const r = (i / cols) | 0;
        const col = i % cols;
        const x = ox + col * cell;
        const y = oy + r * (cell * 0.85);
        ctx.fillStyle = c.done ? '#1a3322' : c.flip ? c2 : '#223344';
        ctx.fillRect(x, y, cell - 6, cell - 10);
        if (c.flip || c.done) {
          font(ctx, 12);
          ctx.fillStyle = c1;
          ctx.textAlign = 'center';
          ctx.fillText(String(c.id), x + cell / 2 - 3, y + cell / 2);
        }
      });
      font(ctx, 8);
      ctx.fillStyle = '#8899aa';
      ctx.textAlign = 'center';
      ctx.fillText(`1-6 Q-Y keys  SCORE ${score}`, w / 2, h - 12);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => cards.length > 0 && cards.every((c) => c.done),
  };
};
