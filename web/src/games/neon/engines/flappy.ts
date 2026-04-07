import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, MAG, font } from './shared';

export const createFlappyEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let y = 150;
  let vy = 0;
  let x = 0;
  let pipes: { x: number; gap: number }[] = [];
  let over = false;
  let score = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      y = h / 2;
      vy = 0;
      x = 0;
      pipes = [
        { x: w * 0.6, gap: 120 + Math.random() * 40 },
        { x: w * 0.6 + 200, gap: 110 + Math.random() * 50 },
      ];
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      invuln = meta.tuning.invulnSeconds;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      invuln = Math.max(0, invuln - dt);
      const g = 520 * meta.tuning.speedScale;
      vy += g * dt;
      if (keys.has(' ') && !prev.has(' ')) vy = -240 * meta.tuning.speedScale;
      y += vy * dt;
      x += 90 * dt * meta.tuning.speedScale;
      const pipeSpd = 130 * meta.tuning.speedScale;
      pipes.forEach((p) => {
        p.x -= pipeSpd * dt;
        if (p.x < -40) {
          p.x = w + 40;
          p.gap = 100 + Math.random() * 80;
          score += 1;
        }
      });
      const px = 80;
      pipes.forEach((p) => {
        const gh = p.gap;
        const gy = h / 2 + (p.gap % 80) - 40;
        const hit = Math.abs(p.x - px) < 20 && (y < gy - gh / 2 || y > gy + gh / 2);
        if (hit && invuln <= 0) {
          lives -= 1;
          invuln = meta.tuning.invulnSeconds;
          y = h / 2;
          vy = 0;
          if (lives <= 0) over = true;
        }
      });
      if ((y > h - 20 || y < 0) && invuln <= 0) {
        lives -= 1;
        invuln = meta.tuning.invulnSeconds;
        y = h / 2;
        vy = 0;
        if (lives <= 0) over = true;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.8, slugSeed(meta.slug));
      pipes.forEach((p) => {
        const gy = h / 2 + (p.gap % 80) - 40;
        const gh = p.gap;
        ctx.fillStyle = MAG;
        ctx.fillRect(p.x, 0, 24, gy - gh / 2);
        ctx.fillRect(p.x, gy + gh / 2, 24, h);
      });
      ctx.globalAlpha = invuln > 0 ? 0.45 + 0.45 * Math.sin(time * 18) : 1;
      ctx.fillStyle = CYAN;
      ctx.fillRect(68, y - 8, 24, 16);
      ctx.globalAlpha = 1;
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE  SCORE ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
