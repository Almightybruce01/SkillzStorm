/** Tiny Canvas 2D sparks — no textures, arcade-friendly. */

export type NeonParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  timeLeft: number;
  color: string;
};

export function spawnBurst(
  out: NeonParticle[],
  x: number,
  y: number,
  count: number,
  color: string,
  opts?: { spread?: number; gravity?: number }
) {
  const spread = opts?.spread ?? 1;
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = (90 + Math.random() * 170) * spread;
    out.push({
      x,
      y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      timeLeft: 0.28 + Math.random() * 0.22,
      color,
    });
  }
}

export function integrateParticles(parts: NeonParticle[], dt: number, gravity = 260) {
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += gravity * dt;
    p.vx *= 0.985;
    p.timeLeft -= dt;
    if (p.timeLeft <= 0) parts.splice(i, 1);
  }
}

export function drawParticles(ctx: CanvasRenderingContext2D, parts: NeonParticle[]) {
  for (const p of parts) {
    const a = Math.min(1, p.timeLeft * 4);
    ctx.globalAlpha = a;
    ctx.fillStyle = p.color;
    const s = 2 + (1 - a) * 2;
    ctx.fillRect(p.x - s * 0.5, p.y - s * 0.5, s, s);
  }
  ctx.globalAlpha = 1;
}
