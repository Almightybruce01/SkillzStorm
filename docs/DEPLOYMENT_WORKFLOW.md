# Deployment workflow — ship when *you* say so

This stops “every push scares players” and separates **work in progress** from **what kids see in production**.

## Recommended model (Vercel + GitHub)

| Branch | Purpose | Auto-deploy? |
|--------|---------|----------------|
| **`develop`** (or `staging`) | Daily work, experiments, big refactors | Optional: deploy to a **Preview** URL only |
| **`main`** | What you consider **ready for players** | **Production** (`skillzstorm.com`) — only when you merge here |

### How you avoid interrupting gameplay

1. Do **not** merge to `main` until you’ve tested on **Preview** (or local `npm run build && npm run preview`).
2. Merge to `main` only when you’re ready — that’s your “deploy the latest update” moment.
3. In **Vercel → Project → Git**: set **Production Branch** = `main`. Previews can track all branches or only PRs.

### Manual “Deploy” button (GitHub Actions)

Workflow **Deploy production (manual)** runs only when you click **Actions → Run workflow**. It builds the web app as a **gate** (must pass before you promote). It does **not** replace Vercel’s deploy unless you add `VERCEL_TOKEN` secrets (optional).

### One-command local check (before merge)

```bash
cd web && npm ci && npm run build
```

---

## If you need “deploy latest now” in chat

Say: **merge `develop` → `main` after CI green** or **Run workflow “Deploy production (manual)”** then confirm Vercel picked up `main`.

---

_Update this doc if you add staging domains or release tags (`v1.2.0`)._
