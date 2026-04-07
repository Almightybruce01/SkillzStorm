import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, MAG, font } from './shared';

export const createTdEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let enemies: { x: number; lane: number }[] = [];
  let turrets = [80, 200, 320];
  let cd = 0;
  let over = false;
  let score = 0;
  let lives = 12;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-td');

  return {
    init(width, height) {
      w = width;
      h = height;
      enemies = [];
      cd = 0;
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      cd -= dt;
      const spawnRate = 0.45 * meta.tuning.speedScale;
      if (Math.random() < spawnRate * dt) enemies.push({ x: w + 20, lane: Math.floor(Math.random() * 3) });
      const move = 70 * meta.tuning.speedScale;
      enemies.forEach((e) => (e.x -= move * dt));
      enemies = enemies.filter((e) => e.x > -20);
      if (keys.has(' ') && !prev.has(' ') && cd <= 0) {
        const targets = enemies.filter((e) => e.x < w * 0.5);
        if (targets.length) {
          targets.sort((a, b) => a.x - b.x);
          enemies = enemies.filter((e) => e !== targets[0]);
          score += 30;
        }
        cd = 0.2;
      }
      const kept: typeof enemies = [];
      for (const e of enemies) {
        const tx = turrets[e.lane];
        if (e.x < tx + 20 && e.x > tx - 20) {
          lives -= 1;
          if (lives <= 0) over = true;
        } else kept.push(e);
      }
      enemies = kept;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.7, slugSeed(meta.slug));
      turrets.forEach((tx) => {
        ctx.fillStyle = CYAN;
        ctx.fillRect(tx - 15, h - 50, 30, 24);
      });
      enemies.forEach((e) => {
        const y = 80 + e.lane * 60;
        ctx.fillStyle = MAG;
        ctx.fillRect(e.x, y, 22, 18);
      });
      font(ctx, 8);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE FIRE  SCORE ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
