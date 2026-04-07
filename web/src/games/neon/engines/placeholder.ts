import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, neonAccent, slugSeed } from './slugTheme';

import { font } from './shared';

export const createPlaceholderEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let t = 0;
  let over = false;
  const hue = hueFromSlug(meta.slug);
  const [accent, accent2] = neonAccent(meta.slug);
  const parallax = meta.tuning.starfieldParallax;
  return {
    init(width, height) {
      w = width;
      h = height;
    },
    update(dt, keys, prev) {
      t += dt * parallax;
      if (keys.has('Escape') && !prev.has('Escape')) over = true;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, t, slugSeed(meta.slug));
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(4, 4, w - 8, h - 8);
      font(ctx, Math.max(10, w / 42));
      ctx.fillStyle = accent2;
      ctx.textAlign = 'center';
      ctx.shadowColor = accent;
      ctx.shadowBlur = 14;
      ctx.fillText(meta.title.slice(0, 28), w / 2, h / 2 - 20);
      ctx.shadowBlur = 0;
      font(ctx, Math.max(8, w / 52));
      ctx.fillStyle = '#aab8cc';
      ctx.fillText('TAP SPACE — NEON ARCADE', w / 2, h / 2 + 20);
      ctx.fillText('ESC TO FINISH', w / 2, h / 2 + 44);
      drawVignette(ctx, w, h);
    },
    getScore: () => Math.floor(t * 10),
    isGameOver: () => over,
  };
};
