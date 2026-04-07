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

## Pass 3 — Gameplay depth per engine

- [ ] Feature flags in tuning (e.g. `powerUpsEnabled`) per slug
- [ ] One pilot: breakout multiball OR snake power-ups

## Pass 4 — Presentation

- [ ] Shared particle helper built on Canvas 2D
- [ ] Web Audio SFX layer (optional music stinger)

## Pass 5 — Meta-game

- [ ] Local stats persistence (per slug high score)
- [ ] Hook quests to existing monetization surfaces (if desired)

## Pass 6 — Quality

- [ ] Unit tests: `resolveNeonTuning`, collision helpers, score rules
- [ ] Playwright: load game session, start, exit, no console errors

## Pass 7 — Ops

- [ ] CI: `tsc -b`, `vite build`, lint
- [ ] Bundle size budget / chunk strategy for large content imports

---

_Update this file as passes complete._
