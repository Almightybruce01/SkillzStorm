import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, font } from './shared';

type Ball = { x: number; y: number; vx: number; vy: number };

const MAX_BALLS = 4;
const SPLIT_CHANCE = 0.24;

export const createBreakoutEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let px = 0;
  let balls: Ball[] = [];
  let bricks: boolean[] = [];
  let cols = 8;
  let rows = 4;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const multiball = meta.tuning.breakoutMultiball;

  function resetBalls() {
    const s = meta.tuning.speedScale;
    balls = [
      {
        x: w / 2,
        y: h - 60,
        vx: (Math.random() > 0.5 ? 1 : -1) * 140 * s,
        vy: -160 * s,
      },
    ];
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      px = width / 2 - 50;
      bricks = Array(cols * rows).fill(true);
      resetBalls();
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
    },
    update(dt, keys) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      const spd = 260 * meta.tuning.speedScale;
      if (keys.has('ArrowLeft')) px -= spd * dt;
      if (keys.has('ArrowRight')) px += spd * dt;
      px = Math.max(20, Math.min(w - 120, px));

      for (const b of balls) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }
      for (const b of balls) {
        if (b.x < 8 || b.x > w - 8) b.vx *= -1;
        if (b.y < 8) b.vy *= -1;
      }

      balls = balls.filter((b) => b.y <= h - 4);
      if (balls.length === 0) {
        lives -= 1;
        if (lives <= 0) over = true;
        else resetBalls();
        return;
      }

      const pw = 100;
      for (const b of balls) {
        if (b.y > h - 48 && b.y < h - 38 && b.x > px && b.x < px + pw) {
          b.vy = -Math.abs(b.vy);
          score += 2;
        }
      }

      const bw = (w - 24) / cols;
      const bh = 16;
      const spawn: Ball[] = [];
      for (const b of balls) {
        let hitAny = false;
        for (let r = 0; r < rows && !hitAny; r++) {
          for (let c = 0; c < cols && !hitAny; c++) {
            const i = r * cols + c;
            if (!bricks[i]) continue;
            const bx0 = 12 + c * bw;
            const by0 = 40 + r * bh;
            if (b.x > bx0 && b.x < bx0 + bw - 4 && b.y > by0 && b.y < by0 + bh) {
              bricks[i] = false;
              b.vy *= -1;
              score += 15;
              hitAny = true;
              if (
                multiball &&
                balls.length + spawn.length < MAX_BALLS &&
                Math.random() < SPLIT_CHANCE
              ) {
                spawn.push({
                  x: b.x,
                  y: Math.min(b.y, by0 + bh + 2),
                  vx: -b.vx * 0.85 + (Math.random() - 0.5) * 100 * meta.tuning.speedScale,
                  vy: -Math.abs(b.vy) * 0.92,
                });
              }
            }
          }
        }
      }
      if (spawn.length) balls = balls.concat(spawn);

      if (!bricks.some(Boolean)) {
        score += 500;
        bricks = Array(cols * rows).fill(true);
        resetBalls();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const bw = (w - 24) / cols;
      const bh = 16;
      const baseHue = hueFromSlug(meta.slug + '-brick');
      bricks.forEach((on, i) => {
        if (!on) return;
        const c = i % cols;
        const r = (i / cols) | 0;
        ctx.fillStyle = `hsl(${(baseHue + (c + r * 3) * 14) % 360}, 88%, 56%)`;
        ctx.fillRect(12 + c * bw, 40 + r * bh, bw - 4, bh - 2);
      });
      ctx.fillStyle = CYAN;
      ctx.fillRect(px, h - 44, 100, 10);
      for (const b of balls) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      const mb = multiball ? `  ×${balls.length}` : '';
      ctx.fillText(`SCORE ${score}  ♥${lives}${mb}`, 8, 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
