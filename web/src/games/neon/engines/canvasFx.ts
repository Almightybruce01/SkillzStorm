/** Shared canvas polish for neon micro-engines (2D, no external assets). */

export function fillNeonBg(ctx: CanvasRenderingContext2D, w: number, h: number, hue: number) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, `hsla(${hue}, 42%, 9%, 1)`);
  g.addColorStop(0.45, `hsla(${(hue + 45) % 360}, 32%, 7%, 1)`);
  g.addColorStop(1, `hsla(${(hue + 140) % 360}, 38%, 5%, 1)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

export function drawStarfield(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  seed: number
) {
  ctx.save();
  ctx.globalAlpha = 0.55;
  const n = 56;
  for (let i = 0; i < n; i++) {
    const rx = ((seed + i * 977) % 997) / 997;
    const ry = ((seed + i * 541) % 991) / 991;
    const x = rx * w;
    const y = ry * h;
    const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2.2 + i * 0.7));
    const s = 1 + (i % 3);
    ctx.fillStyle = `rgba(180, 220, 255, ${pulse * 0.45})`;
    ctx.fillRect(x, y, s * 0.6, s * 0.6);
  }
  ctx.restore();
}

export function drawVignette(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.15, w / 2, h / 2, Math.max(w, h) * 0.75);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(0,0,0,0.45)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}
