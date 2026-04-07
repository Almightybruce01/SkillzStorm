import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { AMBER, CYAN, font } from './shared';

export const createAsteroidsEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let x = 0;
  let y = 0;
  let ang = 0;
  let vx = 0;
  let vy = 0;
  let rocks: { x: number; y: number; s: number }[] = [];
  let shots: { x: number; y: number; a: number }[] = [];
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
      x = w / 2;
      y = h / 2;
      ang = 0;
      vx = vy = 0;
      rocks = Array.from({ length: 6 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 18 + Math.random() * 20,
      }));
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
      const rot = 2.5 * meta.tuning.speedScale;
      if (keys.has('ArrowLeft')) ang -= rot * dt;
      if (keys.has('ArrowRight')) ang += rot * dt;
      if (keys.has('ArrowUp')) {
        const thrust = 180 * meta.tuning.speedScale;
        vx += Math.cos(ang - Math.PI / 2) * thrust * dt;
        vy += Math.sin(ang - Math.PI / 2) * thrust * dt;
      }
      vx *= 0.99;
      vy *= 0.99;
      x += vx * dt;
      y += vy * dt;
      x = (x + w) % w;
      y = (y + h) % h;
      if (keys.has(' ') && !prev.has(' ')) {
        shots.push({ x, y, a: ang });
      }
      const shotSpd = 400 * meta.tuning.speedScale;
      shots.forEach((s) => {
        s.x += Math.cos(s.a - Math.PI / 2) * shotSpd * dt;
        s.y += Math.sin(s.a - Math.PI / 2) * shotSpd * dt;
      });
      shots = shots.filter((s) => s.x > 0 && s.x < w && s.y > 0 && s.y < h);
      rocks.forEach((r) => {
        shots.forEach((s) => {
          if (Math.hypot(s.x - r.x, s.y - r.y) < r.s / 2) {
            r.s = 0;
            score += 40;
          }
        });
      });
      rocks = rocks.filter((r) => r.s > 4);
      rocks.forEach((r) => {
        if (Math.hypot(x - r.x, y - r.y) < r.s / 2 + 8 && invuln <= 0) {
          lives -= 1;
          invuln = meta.tuning.invulnSeconds;
          vx = vy = 0;
          x = w / 2;
          y = h / 2;
          if (lives <= 0) over = true;
        }
      });
      if (rocks.length === 0) {
        rocks = Array.from({ length: 8 }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          s: 20 + Math.random() * 24,
        }));
        score += 300;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.4, slugSeed(meta.slug));
      rocks.forEach((r) => {
        if (r.s <= 0) return;
        ctx.strokeStyle = CYAN;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.s / 2, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.save();
      ctx.globalAlpha = invuln > 0 ? 0.4 + 0.5 * Math.sin(time * 20) : 1;
      ctx.translate(x, y);
      ctx.rotate(ang);
      ctx.strokeStyle = AMBER;
      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(-8, 10);
      ctx.lineTo(8, 10);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      ctx.globalAlpha = 1;
      shots.forEach((s) => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(s.x, s.y, 3, 3);
      });
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}  ARROWS+SPACE`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
