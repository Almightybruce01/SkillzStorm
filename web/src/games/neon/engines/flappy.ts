import type { NeonEngineFactory } from '../types';
import { sfxFlap, sfxFlappyGameOver, sfxFlappyHurt, sfxFlappyPoint } from '../audio/sfx';
import { drawVignette } from './canvasFx';
import { slugSeed } from './slugTheme';

type Particle = { x: number; y: number; vx: number; vy: number; life: number; hue: number };

const GRASS_H = 56;

export const createFlappyEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let y = 150;
  let vy = 0;
  let groundScroll = 0;
  let cloudT = 0;
  let pipes: { x: number; gap: number }[] = [];
  let over = false;
  let score = 0;
  let prevScore = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  let wingPhase = 0;
  const particles: Particle[] = [];
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

  /** Cartoon bird: side view — body, belly, wing, tail, beak, eye, feet */
  function drawBird(
    ctx: CanvasRenderingContext2D,
    bx: number,
    by: number,
    vyLocal: number,
    wPhase: number,
    inv: number,
    t: number
  ) {
    const wing = 0.4 + 0.35 * Math.sin(wPhase);
    ctx.save();
    ctx.globalAlpha = inv > 0 ? 0.45 + 0.45 * Math.sin(t * 22) : 1;
    ctx.translate(bx, by);
    ctx.rotate(Math.min(0.65, Math.max(-0.5, vyLocal * 0.0022)));

    // Feet (behind body)
    ctx.strokeStyle = '#e85d04';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-4, 12);
    ctx.lineTo(-8, 20);
    ctx.moveTo(4, 12);
    ctx.lineTo(8, 20);
    ctx.stroke();

    // Tail feathers
    ctx.fillStyle = '#7c6f64';
    ctx.beginPath();
    ctx.moveTo(-14, 2);
    ctx.lineTo(-26, -2);
    ctx.lineTo(-14, -6);
    ctx.closePath();
    ctx.fill();

    // Body (feather blue)
    const bodyGrad = ctx.createRadialGradient(-2, -4, 2, 2, 2, 18);
    bodyGrad.addColorStop(0, '#93c5fd');
    bodyGrad.addColorStop(0.55, '#3b82f6');
    bodyGrad.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(2, 0, 15, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // White belly patch
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.beginPath();
    ctx.ellipse(4, 5, 9, 7, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Wing
    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.ellipse(-6, 2 - wing * 12, 11, 7 + wing * 5, -0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.stroke();

    // Head (slightly forward)
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(12, -6, 11, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(22, -6);
    ctx.lineTo(34, -4);
    ctx.lineTo(22, 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Eye
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(16, -9, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(17.5, -9, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(18.5, -10, 0.9, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    ctx.globalAlpha = 1;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      y = h / 2;
      vy = 0;
      groundScroll = 0;
      cloudT = 0;
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
      cloudT += dt * 12;
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
      groundScroll += pipeSpd * dt * 0.4;

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
        spawnBurst(78, y, 12, 45);
        prevScore = score;
      }

      const px = 78;
      const birdR = 14;
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

      const groundLine = h - GRASS_H;
      if ((y > groundLine - 10 || y < 26) && invuln <= 0) {
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
        q.vy += 200 * dt;
        if (q.life <= 0) particles.splice(i, 1);
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      const horizon = h - GRASS_H;

      // —— Sky gradient (morning blue → horizon) ——
      const sky = ctx.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, '#38bdf8');
      sky.addColorStop(0.35, '#7dd3fc');
      sky.addColorStop(0.72, '#bae6fd');
      sky.addColorStop(1, '#e0f2fe');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, horizon);

      // Sun + glow
      const sunX = w * 0.82;
      const sunY = h * 0.14;
      const sunR = Math.min(w, h) * 0.09;
      ctx.save();
      for (let r = 4; r >= 1; r--) {
        const grd = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * r * 0.85);
        grd.addColorStop(0, `rgba(255, 250, 200, ${0.14 / r})`);
        grd.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunR * r, 0, Math.PI * 2);
        ctx.fill();
      }
      const sunCore = ctx.createRadialGradient(sunX - 4, sunY - 4, 2, sunX, sunY, sunR);
      sunCore.addColorStop(0, '#fffef0');
      sunCore.addColorStop(0.7, '#fde047');
      sunCore.addColorStop(1, '#facc15');
      ctx.fillStyle = sunCore;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Distant mountains (silhouette)
      ctx.fillStyle = '#94a3b8';
      ctx.globalAlpha = 0.45;
      const mOff = (groundScroll * 0.08) % 300;
      for (let i = -1; i < 5; i++) {
        const mx = i * 160 - mOff;
        ctx.beginPath();
        ctx.moveTo(mx, horizon);
        ctx.lineTo(mx + 50, horizon - 45);
        ctx.lineTo(mx + 100, horizon - 25);
        ctx.lineTo(mx + 160, horizon - 55);
        ctx.lineTo(mx + 220, horizon);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Clouds (puffy, white)
      ctx.save();
      for (let c = 0; c < 7; c++) {
        const base = ((seed + c * 97) % 180) / 180;
        const row = ((seed + c * 53) % 100) / 100;
        const cx = (base * w + cloudT * (14 + c * 2) + c * 70) % (w + 200) - 60;
        const cy = 28 + row * (horizon * 0.35);
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.shadowColor = 'rgba(148, 163, 184, 0.35)';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 32, 14, 0, 0, Math.PI * 2);
        ctx.ellipse(cx + 28, cy + 3, 26, 13, 0, 0, Math.PI * 2);
        ctx.ellipse(cx - 24, cy + 2, 22, 11, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.restore();

      // Green rolling hills (mid)
      ctx.fillStyle = '#4ade80';
      ctx.globalAlpha = 0.55;
      const hillOff = (groundScroll * 0.2) % 280;
      for (let i = -1; i < 5; i++) {
        const hx = i * 200 - hillOff;
        ctx.beginPath();
        ctx.moveTo(hx, horizon + 5);
        ctx.quadraticCurveTo(hx + 100, horizon - 35, hx + 200, horizon + 5);
        ctx.lineTo(hx + 240, horizon + 40);
        ctx.lineTo(hx - 20, horizon + 40);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Pipes (classic green)
      pipes.forEach((p) => {
        const gy = h / 2 + (p.gap % 80) - 40;
        const gh = p.gap;
        const topH = gy - gh / 2;
        const botY = gy + gh / 2;
        const pipeW = 34;
        const cap = 16;
        const light = ctx.createLinearGradient(p.x, 0, p.x + pipeW, 0);
        light.addColorStop(0, '#166534');
        light.addColorStop(0.5, '#22c55e');
        light.addColorStop(1, '#14532d');

        const drawCol = (y0: number, ph: number) => {
          ctx.fillStyle = light;
          ctx.beginPath();
          ctx.roundRect(p.x, y0, pipeW, ph, 5);
          ctx.fill();
          ctx.strokeStyle = 'rgba(0,0,0,0.2)';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,0.2)';
          ctx.fillRect(p.x + 5, y0 + 4, 7, ph - 8);
        };
        drawCol(0, topH);
        drawCol(botY, h - botY);
        ctx.fillStyle = '#15803d';
        ctx.fillRect(p.x - 3, Math.max(0, topH - cap), pipeW + 6, cap);
        ctx.fillRect(p.x - 3, botY, pipeW + 6, cap);
      });

      // —— Grass + soil ——
      const stripe = groundScroll % 36;
      const soilGrad = ctx.createLinearGradient(0, horizon - 4, 0, h);
      soilGrad.addColorStop(0, '#86efac');
      soilGrad.addColorStop(0.15, '#22c55e');
      soilGrad.addColorStop(0.55, '#15803d');
      soilGrad.addColorStop(1, '#14532d');
      ctx.fillStyle = soilGrad;
      ctx.fillRect(0, horizon - 3, w, GRASS_H + 3);

      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(w, horizon);
      ctx.stroke();

      // Grass blades
      ctx.strokeStyle = 'rgba(21, 128, 61, 0.85)';
      ctx.lineWidth = 1.5;
      for (let g = -1; g < w / 10 + 2; g++) {
        const gx = g * 10 - stripe;
        const gh = 6 + (g * 7 + seed) % 9;
        ctx.beginPath();
        ctx.moveTo(gx, horizon + 2);
        ctx.quadraticCurveTo(gx + 3, horizon - gh, gx + 6, horizon + 1);
        ctx.stroke();
      }

      // Particles
      particles.forEach((q) => {
        const a = Math.max(0, q.life * 3);
        ctx.fillStyle = `hsla(${q.hue % 360}, 90%, 55%, ${a})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      drawBird(ctx, 78, y, vy, wingPhase, invuln, time);

      ctx.fillStyle = '#0c4a6e';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.shadowColor = 'rgba(255,255,255,0.9)';
      ctx.shadowBlur = 3;
      ctx.fillText(`SPACE / ↑     SCORE  ${score}`, 12, 24);
      ctx.shadowBlur = 0;
      ctx.fillStyle = lives > 1 ? '#e11d48' : '#be123c';
      for (let i = 0; i < lives; i++) {
        ctx.fillText('♥', w - 26 - i * 18, 24);
      }

      ctx.save();
      ctx.globalAlpha = 0.18;
      drawVignette(ctx, w, h);
      ctx.restore();
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
