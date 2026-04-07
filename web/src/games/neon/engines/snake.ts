import { sfxEat } from '../audio/sfx';
import { drawParticles, integrateParticles, spawnBurst, type NeonParticle } from '../fx/particles';
import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, neonAccent, slug01, slugSeed } from './slugTheme';

import { font } from './shared';

export const createSnakeEngine: NeonEngineFactory = (meta) => {
  const gs = 18;
  let w = 400;
  let h = 300;
  let snake: { x: number; y: number }[] = [{ x: 5, y: 5 }];
  let dir = { x: 1, y: 0 };
  let food = { x: 8, y: 5 };
  let acc = 0;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  let ghostRem = 0;
  let particles: NeonParticle[] = [];
  const hue = hueFromSlug(meta.slug);
  const baseStep = 0.1 + slug01(meta.slug, 2) * 0.05;
  const [snakeC, headC, foodC] = neonAccent(meta.slug);

  function step() {
    return baseStep / meta.tuning.speedScale;
  }

  function spawnFood() {
    const gw = Math.max(1, Math.floor(w / gs) - 1);
    const gh = Math.max(1, Math.floor(h / gs) - 1);
    let attempts = 0;
    do {
      food = {
        x: 1 + Math.floor(Math.random() * gw),
        y: 1 + Math.floor(Math.random() * gh),
      };
      attempts++;
    } while (snake.some((s) => s.x === food.x && s.y === food.y) && attempts < 120);
  }

  function loseLife() {
    lives -= 1;
    ghostRem = meta.tuning.snakeGhostPasses;
    if (lives <= 0) {
      over = true;
      return;
    }
    const gw = Math.floor(w / gs) - 1;
    const gh = Math.floor(h / gs) - 1;
    snake = [{ x: Math.max(1, Math.floor(gw / 2)), y: Math.max(1, Math.floor(gh / 2)) }];
    dir = { x: 1, y: 0 };
    spawnFood();
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      snake = [{ x: 4, y: 4 }];
      dir = { x: 1, y: 0 };
      spawnFood();
      over = false;
      score = 0;
      lives = meta.tuning.lives;
      time = 0;
      ghostRem = meta.tuning.snakeGhostPasses;
      particles = [];
    },
    update(dt, keys, _prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      integrateParticles(particles, dt, 180);
      if (keys.has('ArrowUp') && dir.y === 0) dir = { x: 0, y: -1 };
      else if (keys.has('ArrowDown') && dir.y === 0) dir = { x: 0, y: 1 };
      else if (keys.has('ArrowLeft') && dir.x === 0) dir = { x: -1, y: 0 };
      else if (keys.has('ArrowRight') && dir.x === 0) dir = { x: 1, y: 0 };
      acc += dt;
      const st = step();
      while (acc >= st && !over) {
        acc -= st;
        const head = snake[0];
        const nh = { x: head.x + dir.x, y: head.y + dir.y };
        const gw = Math.floor(w / gs) - 1;
        const gh = Math.floor(h / gs) - 1;
        if (nh.x < 0 || nh.y < 0 || nh.x > gw || nh.y > gh) {
          loseLife();
          break;
        }
        if (snake.some((s) => s.x === nh.x && s.y === nh.y)) {
          if (ghostRem > 0) {
            ghostRem -= 1;
            break;
          }
          loseLife();
          break;
        }
        snake.unshift(nh);
        if (nh.x === food.x && nh.y === food.y) {
          score += 10;
          sfxEat();
          spawnBurst(
            particles,
            food.x * gs + gs * 0.5,
            food.y * gs + gs * 0.5,
            14,
            foodC,
            { spread: 0.9 }
          );
          spawnFood();
        } else snake.pop();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      ctx.fillStyle = snakeC;
      ctx.shadowColor = snakeC;
      ctx.shadowBlur = 6;
      snake.forEach((s, i) => {
        ctx.fillRect(s.x * gs + 2, s.y * gs + 2, gs - 4, gs - 4);
        if (i === 0) {
          ctx.fillStyle = headC;
          ctx.fillRect(s.x * gs + 4, s.y * gs + 4, gs - 8, gs - 8);
          ctx.fillStyle = snakeC;
        }
      });
      ctx.shadowBlur = 0;
      ctx.fillStyle = foodC;
      ctx.fillRect(food.x * gs + 2, food.y * gs + 2, gs - 4, gs - 4);
      drawParticles(ctx, particles);
      font(ctx, 10);
      ctx.fillStyle = '#aabbcc';
      ctx.textAlign = 'left';
      const ghostTag = ghostRem > 0 ? `  👻${ghostRem}` : '';
      ctx.fillText(`SCORE ${score}  ♥${lives}${ghostTag}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
