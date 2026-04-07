import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { AMBER, CYAN, font } from './shared';

export const createGeometryEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let py = 0;
  let vy = 0;
  let obs: { x: number; h: number }[] = [];
  let over = false;
  let score = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-geo');

  return {
    init(width, height) {
      w = width;
      h = height;
      py = h * 0.55;
      vy = 0;
      obs = [
        { x: w * 0.85, h: 50 },
        { x: w * 0.85 + 220, h: 70 },
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
      vy += 900 * dt * meta.tuning.speedScale;
      if (keys.has(' ') && !prev.has(' ')) vy = -420 * meta.tuning.speedScale;
      py += vy * dt;
      const scroll = 200 * meta.tuning.speedScale;
      obs.forEach((o) => (o.x -= scroll * dt));
      obs.forEach((o) => {
        if (o.x < -30) {
          o.x = w + 80 + Math.random() * 60;
          o.h = 40 + Math.random() * 70;
          score += 5;
        }
        const ground = h - 50;
        const gapTop = ground - o.h;
        const crush = o.x > 60 && o.x < 100 && (py < gapTop - 20 || py > ground - 18);
        if (crush && invuln <= 0) {
          lives -= 1;
          invuln = meta.tuning.invulnSeconds;
          py = h * 0.45;
          vy = 0;
          if (lives <= 0) over = true;
        }
      });
      if (py > h - 40 && invuln <= 0) {
        lives -= 1;
        invuln = meta.tuning.invulnSeconds;
        py = h * 0.5;
        vy = 0;
        if (lives <= 0) over = true;
      }
      if (py < 0) py = 0;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.5, slugSeed(meta.slug));
      ctx.strokeStyle = '#223344';
      ctx.beginPath();
      ctx.moveTo(0, h - 40);
      ctx.lineTo(w, h - 40);
      ctx.stroke();
      obs.forEach((o) => {
        ctx.fillStyle = AMBER;
        ctx.fillRect(o.x, 0, 22, o.h);
        ctx.fillRect(o.x, h - 40, 22, 40);
      });
      ctx.globalAlpha = invuln > 0 ? 0.5 + 0.45 * Math.sin(time * 16) : 1;
      ctx.fillStyle = CYAN;
      ctx.fillRect(56, py - 10, 28, 20);
      ctx.globalAlpha = 1;
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE JUMP  ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
