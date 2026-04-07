/**
 * Lightweight Web Audio “chiptune-style” blips. Call `unlockAudio()` after a user gesture
 * (e.g. PRESS START) so the AudioContext can resume on mobile Safari.
 */

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (ctx) return ctx;
  const Any = window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext };
  const C = Any.AudioContext ?? Any.webkitAudioContext;
  if (!C) return null;
  ctx = new C();
  return ctx;
}

export function unlockAudio(): void {
  const c = getCtx();
  if (c && c.state === 'suspended') void c.resume();
}

function tone(
  freq: number,
  dur: number,
  opts?: { type?: OscillatorType; gain?: number; when?: number; freqEnd?: number }
) {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = opts?.when ?? c.currentTime;
  const g = opts?.gain ?? 0.045;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = opts?.type ?? 'square';
  osc.frequency.setValueAtTime(freq, t0);
  if (opts?.freqEnd != null) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.freqEnd), t0 + dur);
  }
  gain.gain.setValueAtTime(g, t0);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
  osc.connect(gain);
  gain.connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

/** Brick destroyed */
export function sfxBrick(): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  tone(920, 0.06, { type: 'square', gain: 0.035, when: t0 });
  tone(620, 0.05, { type: 'square', gain: 0.02, when: t0 + 0.02 });
}

/** Paddle hit (moving downward into paddle) */
export function sfxPaddle(): void {
  tone(180, 0.07, { type: 'triangle', gain: 0.055, freqEnd: 260 });
}

/** Extra ball spawned */
export function sfxMultiball(): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  tone(660, 0.05, { type: 'square', gain: 0.04, when: t0 });
  tone(880, 0.05, { type: 'square', gain: 0.03, when: t0 + 0.04 });
}

/** Last ball(s) fell off bottom */
export function sfxLoseBall(): void {
  tone(140, 0.12, { type: 'sawtooth', gain: 0.04, freqEnd: 80 });
}

/** Wave / level clear */
export function sfxLevelClear(): void {
  const c = getCtx();
  if (!c) return;
  const t = c.currentTime;
  [523, 659, 784, 1046].forEach((f, i) => {
    tone(f, 0.08, { type: 'square', gain: 0.035, when: t + i * 0.06 });
  });
}

/** Snake food pickup */
export function sfxEat(): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  tone(440, 0.05, { type: 'square', gain: 0.04, when: t0 });
  tone(660, 0.06, { type: 'square', gain: 0.03, when: t0 + 0.03 });
}

/** Flappy / runner — wing flap */
export function sfxFlap(): void {
  tone(320, 0.045, { type: 'triangle', gain: 0.06, freqEnd: 480 });
}

/** Pipe cleared — point */
export function sfxFlappyPoint(): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  tone(523, 0.055, { type: 'square', gain: 0.042, when: t0 });
  tone(784, 0.05, { type: 'square', gain: 0.032, when: t0 + 0.05 });
}

/** Hit obstacle but still alive */
export function sfxFlappyHurt(): void {
  tone(120, 0.11, { type: 'sawtooth', gain: 0.05, freqEnd: 55 });
}

/** Final game over sting */
export function sfxFlappyGameOver(): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t = c.currentTime;
  [392, 349, 330, 262].forEach((f, i) => {
    tone(f, 0.1, { type: 'square', gain: 0.034, when: t + i * 0.09, freqEnd: Math.max(30, f * 0.45) });
  });
}
