import type { NeonEngineFactory } from '../types';
import { sfxFlap, sfxFlappyGameOver, sfxFlappyHurt, sfxFlappyPoint } from '../audio/sfx';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, slugSeed } from './slugTheme';

import { CYAN, MAG, font } from './shared';

type Particle = { x: number; y: number; vx: number; vy: number; life: number; hue: number };

export const createFlappyEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let y = 150;
  let vy = 0;
  let groundScroll = 0;
  let pipes: { x: number; gap: number }[] = [];
  let over = false;
  let score = 0;
  let prevScore = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  let wingPhase = 0;
  const particles: Particle[] = [];
  const hue = hueFromSlug(meta.slug);
  const seed = slugSeed(meta.slug);

  function spawnBurst(px: number, py: number, n: number, spreadHue: number) {
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const sp = 40 + Math.random() * 120;
      particles.push({
        x: px,
        y: py,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        life: 0.35 + Math.random() * 0.2,
        hue: spreadHue + i * 12,
      });
    }
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      y = h / 2;
      vy = 0;
      groundScroll = 0;
      pipes = [
        { x: w * 0.65, gap: 120 + Math.random() * 40 },
        { x: w * 0.65 + 220, gap: 110 + Math.random() * 50 },
      ];
      over = false;
      score = 0;
      prevScore = 0;
      lives = meta.tuning.lives;
      invuln = meta.tuning.invulnSeconds;
      time = 0;
      wingPhase = 0;
      particles.length = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt * meta.tuning.starfieldParallax;
      invuln = Math.max(0, invuln - dt);
      wingPhase += dt * 14;

      const g = 520 * meta.tuning.speedScale;
      vy += g * dt;
      const flap = (keys.has(' ') && !prev.has(' ')) || (keys.has('ArrowUp') && !prev.has('ArrowUp'));
      if (flap) {
        vy = -255 * meta.tuning.speedScale;
        sfxFlap();
      }
      y += vy * dt;

      const pipeSpd = 132 * meta.tuning.speedScale;
      groundScroll += pipeSpd * dt * 0.35;

      pipes.forEach((p) => {
        p.x -= pipeSpd * dt;
        if (p.x < -56) {
          p.x = w + 48 + Math.random() * 40;
          p.gap = 96 + Math.random() * 72;
          score += 1;
        }
      });

      if (score > prevScore) {
        sfxFlappyPoint();
        spawnBurst(78, y, 10, hue);
        prevScore = score;
      }

      const px = 78;
      const birdR = 11;
      pipes.forEach((p) => {
        const gh = p.gap;
        const gy = h / 2 + (p.gap % 80) - 40;
        const gapTop = gy - gh / 2;
        const gapBot = gy + gh / 2;
        const pipeW = 34;
        const near = Math.abs(p.x - px) < pipeW / 2 + birdR;
        if (near && invuln <= 0 && (y < gapTop - birdR || y > gapBot + birdR)) {
          lives -= 1;
          invuln = meta.tuning.invulnSeconds;
          sfxFlappyHurt();
          spawnBurst(px, y, 14, 320);
          y = h / 2;
          vy = 0;
          if (lives <= 0) {
            over = true;
            sfxFlappyGameOver();
          }
        }
      });

      if ((y > h - 36 || y < 28) && invuln <= 0) {
        lives -= 1;
        invuln = meta.tuning.invulnSeconds;
        sfxFlappyHurt();
        y = h / 2;
        vy = 0;
        if (lives <= 0) {
          over = true;
          sfxFlappyGameOver();
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const q = particles[i];
        q.life -= dt;
        q.x += q.vx * dt;
        q.y += q.vy * dt;
        q.vy += 180 * dt;
        if (q.life <= 0) particles.splice(i, 1);
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.75, seed);

      // Distant aurora band
      const aur = ctx.createLinearGradient(0, h * 0.15, w, h * 0.55);
      aur.addColorStop(0, `hsla(${(hue + 40) % 360}, 70%, 45%, 0.12)`);
      aur.addColorStop(0.5, `hsla(${(hue + 120) % 360}, 60%, 40%, 0.08)`);
      aur.addColorStop(1, 'transparent');
      ctx.fillStyle = aur;
      ctx.fillRect(0, 0, w, h * 0.55);

      // Parallax hills
      ctx.save();
      ctx.globalAlpha = 0.35;
      const hillOff = (groundScroll * 0.15) % (w + 120);
      ctx.fillStyle = `hsla(${(hue + 200) % 360}, 25%, 18%, 0.9)`;
      for (let i = -1; i < 4; i++) {
        const bx = i * 180 - hillOff;
        ctx.beginPath();
        ctx.moveTo(bx, h * 0.72);
        ctx.quadraticCurveTo(bx + 90, h * 0.58, bx + 180, h * 0.72);
        ctx.lineTo(bx + 220, h);
        ctx.lineTo(bx - 40, h);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // Soft clouds
      ctx.save();
      ctx.globalAlpha = 0.2;
      for (let c = 0; c < 5; c++) {
        const cx = ((seed + c * 131) % 200) / 200;
        const cy = 0.12 + ((seed + c * 89) % 80) / 400;
        const x0 = (cx * w + time * 18 * (0.5 + c * 0.1)) % (w + 160) - 80;
        const y0 = cy * h;
        ctx.fillStyle = 'rgba(220,240,255,0.5)';
        ctx.beginPath();
        ctx.ellipse(x0, y0, 36, 14, 0, 0, Math.PI * 2);
        ctx.ellipse(x0 + 28, y0 + 4, 28, 12, 0, 0, Math.PI * 2);
        ctx.ellipse(x0 - 22, y0 + 2, 22, 11, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Pipes
      pipes.forEach((p) => {
        const gy = h / 2 + (p.gap % 80) - 40;
        const gh = p.gap;
        const topH = gy - gh / 2;
        const botY = gy + gh / 2;
        const pipeW = 34;
        const cap = 18;
        const glow = ctx.createLinearGradient(p.x, 0, p.x + pipeW, 0);
        glow.addColorStop(0, `hsla(${(hue + 280) % 360}, 85%, 42%, 1)`);
        glow.addColorStop(0.45, MAG);
        glow.addColorStop(1, `hsla(${(hue + 320) % 360}, 90%, 28%, 1)`);

        const drawPipeCol = (y0: number, pipeH: number) => {
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.roundRect(p.x, y0, pipeW, pipeH, 6);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,0.25)';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.fillStyle = 'rgba(0,0,0,0.2)';
          ctx.fillRect(p.x + 4, y0 + 6, 8, pipeH - 12);
        };

        drawPipeCol(0, topH);
        drawPipeCol(botY, h - botY);

        // Caps
        ctx.fillStyle = `hsla(${(hue + 300) % 360}, 90%, 48%, 1)`;
        ctx.fillRect(p.x - 4, Math.max(0, topH - cap), pipeW + 8, cap);
        ctx.fillRect(p.x - 4, botY, pipeW + 8, cap);
      });

      // Ground strip
      const gH = 32;
      const gy0 = h - gH;
      const gGrad = ctx.createLinearGradient(0, gy0, 0, h);
      gGrad.addColorStop(0, `hsla(${(hue + 140) % 360}, 35%, 22%, 1)`);
      gGrad.addColorStop(1, `hsla(${(hue + 180) % 360}, 40%, 8%, 1)`);
      ctx.fillStyle = gGrad;
      ctx.fillRect(0, gy0, w, gH);
      ctx.strokeStyle = 'rgba(0,255,200,0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, gy0 + 0.5);
      ctx.lineTo(w, gy0 + 0.5);
      ctx.stroke();
      const stripe = groundScroll % 40;
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      for (let s = -1; s < w / 40 + 2; s++) {
        ctx.fillRect(s * 40 - stripe, gy0 + 8, 18, gH - 8);
      }

      // Particles
      particles.forEach((q) => {
        const a = Math.max(0, q.life * 3);
        ctx.fillStyle = `hsla(${q.hue % 360}, 90%, 60%, ${a})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Bird
      const bx = 78;
      const wing = 0.35 + 0.25 * Math.sin(wingPhase);
      ctx.save();
      ctx.globalAlpha = invuln > 0 ? 0.4 + 0.45 * Math.sin(time * 20) : 1;
      ctx.translate(bx, y);
      ctx.rotate(Math.min(0.85, Math.max(-0.55, vy * 0.002)));

      const bodyGrad = ctx.createRadialGradient(-4, -2, 2, 0, 0, 14);
      bodyGrad.addColorStop(0, '#e8ffff');
      bodyGrad.addColorStop(0.45, CYAN);
      bodyGrad.addColorStop(1, `hsla(${(hue + 190) % 360}, 90%, 35%, 1)`);
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 13, 11, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffcc66';
      ctx.beginPath();
      ctx.moveTo(10, -2);
      ctx.lineTo(22, 0);
      ctx.lineTo(10, 4);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = `rgba(0,0,0,0.55)`;
      ctx.beginPath();
      ctx.arc(6, -4, 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255,255,255,0.9)`;
      ctx.beginPath();
      ctx.arc(7, -4.5, 0.9, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `hsla(${(hue + 330) % 360}, 90%, 55%, 1)`;
      ctx.beginPath();
      ctx.ellipse(-8, 3 - wing * 10, 9, 5 + wing * 6, -0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowColor = CYAN;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 13, 11, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.globalAlpha = 1;

      font(ctx, 10);
      ctx.fillStyle = '#c8e8ff';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 4;
      ctx.fillText(`SPACE / ↑   SCORE ${score}`, 10, 20);
      ctx.shadowBlur = 0;
      ctx.fillStyle = lives > 1 ? '#ff6b9d' : '#ff3355';
      for (let i = 0; i < lives; i++) {
        ctx.fillText('♥', w - 22 - i * 16, 20);
      }
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
