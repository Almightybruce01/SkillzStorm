import type { Polyline } from './trackGeometry';
import { sampleAtLength } from './trackGeometry';

export type CarState = {
  /** 0..1 lap fraction along closed loop */
  progress: number;
  speed: number;
  /** -1..1 across lane */
  lateral: number;
  lap: number;
};

export type RivalBrain = {
  aggression: number;
  lineNoise: number;
  throttleBias: number;
};


export function createPlayerState(): CarState {
  return { progress: 0, speed: 0, lateral: 0, lap: 1 };
}

export function createRival(offset: number, brain: RivalBrain): CarState & { brain: RivalBrain } {
  return {
    progress: (offset % 1 + 1) % 1,
    speed: 0,
    lateral: 0,
    lap: 1,
    brain,
  };
}

export type RaceConfig = {
  accel: number;
  drag: number;
  maxSpeed: number;
  steer: number;
  lateralDamp: number;
  offroadPenalty: number;
};

export const DEFAULT_RACE_CONFIG: RaceConfig = {
  accel: 2.4,
  drag: 0.88,
  maxSpeed: 0.42,
  steer: 1.85,
  lateralDamp: 0.91,
  offroadPenalty: 0.65,
};

export function stepCar(
  car: CarState,
  poly: Polyline,
  throttle: number,
  steer: number,
  dt: number,
  cfg: RaceConfig
): void {
  const spd = car.speed + throttle * cfg.accel * dt;
  car.speed = Math.max(0, Math.min(cfg.maxSpeed, spd * Math.pow(cfg.drag, dt * 60 * 0.02)));
  car.lateral += steer * cfg.steer * dt * (0.35 + car.speed * 1.2);
  car.lateral *= Math.pow(cfg.lateralDamp, dt * 60 * 0.03);
  if (Math.abs(car.lateral) > 0.92) {
    car.speed *= cfg.offroadPenalty;
    car.lateral = Math.sign(car.lateral) * 0.92;
  }
  const advance = (car.speed * dt) / (poly.totalLength || 1);
  car.progress += advance;
  while (car.progress >= 1) {
    car.progress -= 1;
    car.lap += 1;
  }
}

export function stepRival(
  rival: CarState & { brain: RivalBrain },
  poly: Polyline,
  dt: number,
  cfg: RaceConfig,
  time: number
): void {
  const b = rival.brain;
  const noise = Math.sin(time * 2.1 + b.lineNoise * 12) * 0.08;
  const targetThrottle = 0.55 + b.throttleBias * 0.25 + b.aggression * 0.15 * Math.sin(time * 0.7);
  const steer = noise + (rival.lateral * -0.4) / (0.5 + rival.speed);
  stepCar(rival, poly, targetThrottle, steer, dt, cfg);
}

export function getWorldPose(poly: Polyline, car: CarState, lateralOffsetScale: number) {
  const d = car.progress * poly.totalLength;
  const base = sampleAtLength(poly, d);
  const nx = -Math.sin(base.angle);
  const ny = Math.cos(base.angle);
  const lat = car.lateral * (base.width * 0.35 * lateralOffsetScale);
  return {
    x: base.x + nx * lat,
    y: base.y + ny * lat,
    angle: base.angle,
    width: base.width,
  };
}
