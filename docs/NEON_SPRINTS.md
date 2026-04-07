# Neon web arcade — sprint roadmap

Track progress toward depth (content, engines, polish, ops). Line-count targets are **budgets**, not goals.

## Pass 1 — Architecture & tuning (current)

- [x] Split monolithic `engines/all.ts` into per-engine modules + `engines/index.ts`
- [x] `ResolvedNeonTuning` + `resolveNeonTuning(engineKey, slug)` with engine defaults + `slugOverrides`
- [x] `getGameEngine` injects tuning into `NeonGameMeta` at launch
- [x] Engines read `meta.tuning` (lives, speedScale, invuln, math limit, tetris step, starfield parallax)
- [x] Deterministic RNG helpers (`rng.ts` mulberry32 + string seed) for future daily/replay modes

## Pass 2 — Content at scale

- [x] Typed question bank (TS) for math / quiz by grade (`web/src/games/neon/content/`)
- [x] Expanded typing + scramble pools / per-subject heuristics from `game.id`
- [x] `public/neon/content-manifest.json` placeholder for future JSON hot-load

## Pass 2 — Status

Banks expanded: more **math** rounds per grade, **quiz** items, **typing** pool words + geo/sports heuristics; `web/public/neon/content-manifest.json` documents the hook for future JSON loads.

## Pass 3 — Gameplay depth per engine

- [x] Feature flags in `ResolvedNeonTuning`: `breakoutMultiball`, `snakeGhostPasses` (+ slug overrides)
- [x] Breakout multiball pilot (split on brick break, max 4 balls; HUD shows `×n`)
- [x] Snake pilot: ghost passes forgive self-collision (lose the tick, not a life); refills on respawn

## Pass 4 — Presentation

- [x] Shared particle helper (`fx/particles.ts`) — bursts + integrate + draw
- [x] Web Audio SFX (`audio/sfx.ts`) — unlock on PRESS START + rAF; breakout + snake wired
- [ ] Optional short music stinger / ambient loop (deferred)

## Pass 5 — Meta-game

- [x] Local high scores: `persistence/highScores.ts` (`localStorage`, key per `game.id`)
- [x] Idle + footer “best on device”; Game Over shows personal best + “New record!”
- [ ] Quest hooks / battle pass wiring (optional product follow-up)

## Pass 6 — Quality

- [ ] Unit tests: `resolveNeonTuning`, collision helpers, score rules
- [ ] Playwright: load game session, start, exit, no console errors

## Pass 7 — Ops

- [ ] CI: `tsc -b`, `vite build`, lint
- [ ] Bundle size budget / chunk strategy for large content imports

---

_Update this file as passes complete._
