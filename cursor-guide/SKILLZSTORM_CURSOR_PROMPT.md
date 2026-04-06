# SkillzStorm — Cursor / AI reference (Replit + local)

Use this file instead of pasting long prompts. It describes the **elite browser arcade** architecture from Replit and how it relates to **this repository**.

---

## This repo vs Replit monorepo

| Replit (pnpm monorepo) | This SkillzStorm repo (current) |
|------------------------|----------------------------------|
| `artifacts/skillzstorm/` (React + Vite) | `web/` — React + Vite |
| `artifacts/api-server/` (Hono + Drizzle) | Not present in-tree; games/catalog may be static or external |
| `lib/db/` (shared Drizzle schema) | N/A unless you add a backend package |
| `artifacts/skillzstorm/src/pages/play.tsx` (~4900 lines, all engines) | `web/src/games/GameLauncher.tsx` + `web/src/games/arcade/*.tsx` + `web/src/engine/gameData.ts` |

When porting ideas from this doc, implement in the **existing** `web/` structure unless you explicitly migrate to the monorepo layout.

---

## Game engine contract (canvas)

Each engine should expose a **`GameEngine`**-style surface (names may vary per file):

```ts
interface GameEngine {
  init(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
  update(dt: number, keys: Set<string>): void;
  draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
  getScore(): number;
  getLives(): number;
  getLevel(): number;
  isOver(): boolean;
  cleanup?(): void;
}
```

- **`dt`**: seconds per frame (~0.016 at 60fps).
- **`keys`**: `Set<string>` of `KeyboardEvent.key` values currently held.
- **Canvas**: target **800×560** for parity with the reference implementation.

### Key detection (no raw `onKeyDown` in game logic)

```ts
let prevKeys = new Set<string>();

// Inside update(dt, keys):
const pressed = (k: string) => keys.has(k) && !prevKeys.has(k);
// Letters: for (const ch of "abcdefghijklmnopqrstuvwxyz") { if (pressed(ch)) ... }
// Numbers: for (const ch of "1234") { if (pressed(ch)) ... }
// End of update:
prevKeys = new Set(keys);
```

---

## 40 signature games — slugs → factory

### Educational (20)

| Slug | Engine factory |
|------|----------------|
| `typing-storm`, `speed-typer`, `word-blitz` | `createTypingRacerGame()` |
| `math-storm`, `number-battle`, `times-table-titan`, `math-elite`, `fraction-fighter` | `createMathBattleGame()` |
| `geography-quest`, `world-explorer` | `createQuizGame("geography")` |
| `science-quest` | `createQuizGame("science")` |
| `history-blast` | `createQuizGame("history")` |
| `vocab-blast` | `createQuizGame("vocab")` |
| `brain-blitz` | `createQuizGame("mixed")` |
| `code-quest` | `createQuizGame("coding")` |
| `memory-matrix`, `pattern-storm` | `createMemoryGame()` |
| `word-scramble-x`, `anagram-storm`, `spelling-quest` | `createWordScrambleGame()` |

### Fun / addictive (20)

| Slug | Engine factory |
|------|----------------|
| `snake-neon`, `python-pro`, `neon-viper`, `neon-viper-xl` | `createSnakeGame()` |
| `neon-breakout`, `brick-crusher`, `arkanoid-x` | `createBreakoutGame()` |
| `space-raiders`, `galaxy-storm`, `alien-blitz` | `createSpaceInvadersGame()` |
| `tetris-neon`, `block-storm`, `stack-attack`, `grid-master` | `createTetrisGame()` |
| `neon-jump`, `platform-storm`, `sky-runner` | `createPlatformerGame()` |
| `asteroid-storm`, `space-rock`, `cosmic-blast` | `createAsteroidsGame()` |

### Existing engine catalogue (do not duplicate factories)

`createSnakeGame`, `createBreakoutGame`, `createSpaceInvadersGame`, `createTetrisGame`, `createPlatformerGame`, `createAsteroidsGame`, `createPacManGame`, `createFlappyGame`, `createGeometryDashGame`, `createRacingGame`, `createFightingGame`, `createTwinStickGame`, `createBulletHellGame`, `createTankGame`, `createRhythmGame`, `createPinballGame`, `createTowerDefenseGame`, `createGravityPlatformerGame`, `createTennisGame`, `createHockeyGame`, `createBasketballGame`, `createBattleshipGame`, `createMazeGame`, `createDungeonCrawlerGame`, `createChessGame`, `createTypingRacerGame`, `createMathBattleGame`, `createQuizGame`, `createMemoryGame`, `createWordScrambleGame`, `createMathQuestGame`.

New games: add **`createMyGame(): GameEngine`** then wire **`getGameEngine(slug)`** (or local equivalent: `GameLauncher` + `gameData`).

---

## Neon palette

| Hex | Role |
|-----|------|
| `#ff0066` | Pink — player, primary |
| `#00ffff` | Cyan — UI borders, secondary |
| `#ffdd00` | Yellow — score, gold |
| `#aa00ff` | Purple — magic, specials |
| `#00ff88` | Green — HP, XP |
| `#ff2244` | Red — damage |
| `#ff8800` | Orange — fire, combos |

**Glow rule:** set `shadowBlur` / `shadowColor`, draw, then **`ctx.shadowBlur = 0`**.

---

## Level scaling (100-level style)

- **1–10**: tutorial  
- **11–25**: moderate  
- **26–50**: hard  
- **51–75**: expert  
- **76–100**: elite  

---

## Controls (standard)

- **Move**: arrows / WASD  
- **Action**: Space / Z  
- **Secondary**: X  
- **Choices**: 1–4  
- **Tab**: special (e.g. reshuffle)  
- **Enter**: confirm  
- **Backspace**: delete  

---

## Backend endpoints (Replit API reference)

- `GET /api/games` — list games  
- `GET /api/games/:slug` — one game  
- `POST /api/scores` — submit score  
- `GET /api/leaderboards`, `GET /api/leaderboards/:gameSlug`  

This repo may use static data or a different API; align routes if you add a server.

---

## Workflows (Replit)

```bash
pnpm --filter @workspace/skillzstorm run dev
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/api-server run build   # after seed / schema changes
```

## Workflows (this repo `web/`)

```bash
cd web && npm install && npm run dev
cd web && npm run build
```

---

## Seed pattern (when using Drizzle `seed.ts`)

```ts
{
  id: "my-1",
  title: "My Game",
  slug: "my-game",
  description: "...",
  category: "Arcade",
  players: "1 player",
  tags: ["arcade", "neon", "100-levels"],
  featured: true,
  rating: 4.9,
  playCount: 0,
  releaseYear: 2025,
  thumbnailUrl: "",
}
```

---

## Master prompt (short — paste at session start if needed)

You are building **SkillzStorm**, an elite browser arcade. Prefer the **`GameEngine`** loop: `init` → per-frame `update(dt, keys)` + `draw`, with **`pressed = keys.has(k) && !prevKeys.has(k)`** and **`prevKeys = new Set(keys)`** at end of `update`. Canvas **800×560**. Map new slugs in **`getGameEngine`** (or `GameLauncher` / `gameData`). Use neon colors and reset `shadowBlur` after glow. Do not duplicate existing `create*Game` factories; extend with new slugs or new factories. For full slug tables and workflows, read **`cursor-guide/SKILLZSTORM_CURSOR_PROMPT.md`**.

---

*Derived from Replit “all source in one document” spec; trimmed to reference-only — no embedded multi-thousand-line source files.*
