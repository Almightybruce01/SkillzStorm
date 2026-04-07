let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (ctx) return ctx;
  const A = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!A) return null;
  ctx = new A();
  return ctx;
}

export function unlockRacingAudio(): void {
  const c = getCtx();
  if (c?.state === 'suspended') void c.resume();
}

function beep(freq: number, dur: number, gain = 0.04, type: OscillatorType = 'square') {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export function sfxEngineHum(speed01: number): void {
  const c = getCtx();
  if (!c || c.state !== 'running') return;
  const t0 = c.currentTime;
  const base = 80 + speed01 * 160;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(base, t0);
  g.gain.setValueAtTime(0.012 + speed01 * 0.02, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.04);
  o.connect(g);
  g.connect(c.destination);
  o.start(t0);
  o.stop(t0 + 0.05);
}

export function sfxCountdown(n: number): void {
  if (n > 0) beep(440, 0.08, 0.045);
  else {
    beep(880, 0.12, 0.06);
    beep(1320, 0.1, 0.06);
  }
}

export function sfxLap(): void {
  beep(523, 0.06, 0.035);
  beep(659, 0.07, 0.03, 'triangle');
}

export function sfxBoost(): void {
  beep(185, 0.05, 0.055, 'sawtooth');
  beep(240, 0.06, 0.04, 'square');
}

export function sfxFinish(): void {
  [523, 659, 784, 1046].forEach((f, i) => {
    const c = getCtx();
    if (!c || c.state !== 'running') return;
    const t0 = c.currentTime + i * 0.07;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(f, t0);
    g.gain.setValueAtTime(0.035, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    o.connect(g);
    g.connect(c.destination);
    o.start(t0);
    o.stop(t0 + 0.12);
  });
}
