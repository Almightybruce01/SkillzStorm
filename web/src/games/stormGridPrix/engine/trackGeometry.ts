import type { LanePoint } from '../data/tracks/bundle';

export type Polyline = {
  points: LanePoint[];
  cumulative: number[];
  totalLength: number;
};

export function buildPolyline(points: LanePoint[]): Polyline {
  const cum: number[] = [0];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const seg = Math.hypot(dx, dy);
    total += seg;
    cum.push(total);
  }
  return { points, cumulative: cum, totalLength: total };
}

export function sampleAtLength(poly: Polyline, distAlong: number): { x: number; y: number; angle: number; width: number } {
  const { points, cumulative, totalLength } = poly;
  const len = totalLength <= 0 ? 1 : totalLength;
  let d = ((distAlong % len) + len) % len;
  let seg = 0;
  while (seg < cumulative.length - 1 && cumulative[seg + 1] < d) seg++;
  const i0 = seg;
  const i1 = Math.min(seg + 1, points.length - 1);
  const a = points[i0];
  const b = points[i1];
  const segStart = cumulative[i0];
  const segEnd = cumulative[i1];
  const t = segEnd > segStart ? (d - segStart) / (segEnd - segStart) : 0;
  const x = a.x + (b.x - a.x) * t;
  const y = a.y + (b.y - a.y) * t;
  const w = a.w + (b.w - a.w) * t;
  const angle = Math.atan2(b.y - a.y, b.x - a.x);
  return { x, y, angle, width: w };
}
