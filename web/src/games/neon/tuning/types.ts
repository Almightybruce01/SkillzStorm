/** Runtime tuning merged from defaults, per-engine defaults, and optional slug overrides. */
export type ResolvedNeonTuning = {
  lives: number;
  /** Multiplier for movement / simulation speed (1 = baseline). */
  speedScale: number;
  /** Brief invulnerability after damage (seconds), where applicable. */
  invulnSeconds: number;
  /** Math mode: seconds before timer costs a life. */
  mathTimeLimitSeconds: number;
  /** Tetris-like fall cadence (seconds per grid step). */
  tetrisFallStep: number;
  /** Visual: multiplier on starfield animation speed. */
  starfieldParallax: number;
};

export type NeonTuningPartial = Partial<ResolvedNeonTuning>;
