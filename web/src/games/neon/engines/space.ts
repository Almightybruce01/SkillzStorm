import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { AMBER, CYAN, MAG, aliveCount, font } from './shared';

export const createSpaceEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let px = 0;
  let bullets: { x: number; y: number }[] = [];
  let enemies: { x: number; y: number; alive: boolean }[] = [];
  let over = false;
  let score = 0;
  let fireCd = 0;
  let horizDir = 1;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      px = width / 2;
      bullets = [];
      enemies = [];
      horizDir = 1;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
          enemies.push({ x: 40 + c * 44, y: 50 + r * 28, alive: true });
        }
      }
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      const spd = 200 * meta.tuning.speedScale;
      if (keys.has('ArrowLeft')) px -= spd * dt;
      if (keys.has('ArrowRight')) px += spd * dt;
      px = Math.max(30, Math.min(w - 30, px));
      fireCd -= dt;
      if (keys.has(' ') && !prev.has(' ') && fireCd <= 0) {
        bullets.push({ x: px, y: h - 50 });
        fireCd = 0.25;
      }
      bullets.forEach((b) => {
        b.y -= 360 * dt * meta.tuning.speedScale;
      });
      bullets = bullets.filter((b) => b.y > 0);
      const step = 55 * horizDir * dt * meta.tuning.speedScale;
      enemies.forEach((e) => {
        if (!e.alive) return;
        e.x += step;
      });
      let out = false;
      enemies.forEach((e) => {
        if (!e.alive) return;
        if (e.x > w - 28 || e.x < 28) out = true;
      });
      if (aliveCount(enemies) > 0 && out) {
        horizDir *= -1;
        enemies.forEach((e) => {
          if (!e.alive) return;
          e.x -= step;
          e.y += 16;
        });
      }
      bullets.forEach((b) => {
        enemies.forEach((e) => {
          if (!e.alive) return;
          if (Math.hypot(b.x - e.x, b.y - e.y) < 22) {
            e.alive = false;
            b.y = -9;
            score += 25;
          }
        });
      });
      enemies.forEach((e) => {
        if (e.alive && e.y > h - 80) {
          e.alive = false;
          lives -= 1;
          score = Math.max(0, score - 15);
          if (lives <= 0) over = true;
        }
      });
      if (!enemies.some((e) => e.alive)) {
        score += 200;
        enemies = [];
        horizDir = 1;
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 7; c++) {
            enemies.push({ x: 40 + c * 44, y: 50 + r * 28, alive: true });
          }
        }
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 1.2, slugSeed(meta.slug));
      enemies.forEach((e) => {
        if (!e.alive) return;
        ctx.fillStyle = MAG;
        ctx.fillRect(e.x - 16, e.y - 10, 32, 20);
      });
      ctx.fillStyle = CYAN;
      ctx.fillRect(px - 22, h - 42, 44, 16);
      bullets.forEach((b) => {
        ctx.fillStyle = AMBER;
        ctx.fillRect(b.x - 2, b.y, 4, 12);
      });
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}`, 8, 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
