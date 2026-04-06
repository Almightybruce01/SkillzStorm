# SkillzStorm — Complete Source

> 32 unique game factories · 80+ slug routes · 178-game seed · full neon UI

---

## index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Press+Start+2P&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-primary-border: var(--primary-border);
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-secondary-border: var(--secondary-border);
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-muted-border: var(--muted-border);
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-accent-border: var(--accent-border);
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-destructive-border: var(--destructive-border);
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Press Start 2P', cursive;
  --font-mono: 'Press Start 2P', cursive;
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-xl: 0;
  --radius: 0;
}

/* ═══════════════════════════════════════════════════
   NEON ARCADE DARK THEME
═══════════════════════════════════════════════════ */
:root, .dark {
  --background: 240 10% 4%;
  --foreground: 0 0% 98%;
  --border: 240 20% 16%;
  --input: 240 20% 16%;
  --ring: 316 100% 55%;
  --card: 240 10% 6%;
  --card-foreground: 0 0% 98%;
  --card-border: 240 20% 16%;
  --popover: 240 10% 6%;
  --popover-foreground: 0 0% 98%;
  --popover-border: 240 20% 16%;
  --primary: 316 100% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 190 100% 50%;
  --secondary-foreground: 0 0% 0%;
  --accent: 45 100% 50%;
  --accent-foreground: 0 0% 0%;
  --muted: 240 10% 11%;
  --muted-foreground: 240 5% 60%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  /* Neon palette custom props */
  --neon-pink:   #ff0066;
  --neon-cyan:   #00ffff;
  --neon-yellow: #ffdd00;
  --neon-green:  #00ff88;
  --neon-purple: #aa00ff;
  --neon-orange: #ff8800;
}

/* ═══════════════════════════════════════════════════
   KEYFRAME ANIMATIONS
═══════════════════════════════════════════════════ */
@keyframes neon-flicker {
  0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1; }
  20%,24%,55% { opacity: 0.4; }
}
@keyframes neon-pulse {
  0%, 100% { text-shadow: 0 0 8px var(--neon-pink), 0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink); }
  50%       { text-shadow: 0 0 4px var(--neon-pink), 0 0 10px var(--neon-pink); }
}
@keyframes border-glow-pulse {
  0%, 100% { box-shadow: 0 0 8px var(--neon-pink), 0 0 20px var(--neon-pink) / 0.4, inset 0 0 8px var(--neon-pink) / 0.1; }
  50%       { box-shadow: 0 0 4px var(--neon-pink), 0 0 10px var(--neon-pink) / 0.2; }
}
@keyframes float-up {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
@keyframes slide-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes scanline-move {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes star-twinkle {
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 1; }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes score-pop {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.3); color: var(--neon-yellow); }
  100% { transform: scale(1); }
}
@keyframes health-drain {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* ═══════════════════════════════════════════════════
   BASE STYLES
═══════════════════════════════════════════════════ */
@layer base {
  * { @apply border-border; }

  html { scroll-behavior: smooth; }

  body {
    @apply font-sans antialiased bg-background text-foreground;
    background-image:
      radial-gradient(ellipse at 20% 50%, rgba(255, 0, 102, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(0, 255, 255, 0.04) 0%, transparent 50%),
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    min-height: 100vh;
  }

  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: hsl(var(--background)); }
  ::-webkit-scrollbar-thumb { background: hsl(var(--primary) / 0.5); border-radius: 0; }
  ::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary)); }

  ::selection { background: hsl(var(--primary) / 0.4); color: white; }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
}

/* ═══════════════════════════════════════════════════
   NEON TEXT EFFECTS
═══════════════════════════════════════════════════ */
.neon-text-primary {
  color: hsl(var(--primary));
  text-shadow:
    0 0 7px hsl(var(--primary)),
    0 0 14px hsl(var(--primary)),
    0 0 28px hsl(var(--primary) / 0.6);
}
.neon-text-secondary {
  color: hsl(var(--secondary));
  text-shadow:
    0 0 7px hsl(var(--secondary)),
    0 0 14px hsl(var(--secondary)),
    0 0 28px hsl(var(--secondary) / 0.6);
}
.neon-text-accent {
  color: hsl(var(--accent));
  text-shadow:
    0 0 7px hsl(var(--accent)),
    0 0 14px hsl(var(--accent)),
    0 0 28px hsl(var(--accent) / 0.6);
}
.neon-text-green {
  color: var(--neon-green);
  text-shadow: 0 0 7px var(--neon-green), 0 0 14px var(--neon-green);
}
.neon-text-flicker {
  animation: neon-flicker 4s infinite;
}
.neon-text-pulse {
  animation: neon-pulse 2s ease-in-out infinite;
}

/* ═══════════════════════════════════════════════════
   NEON BORDER EFFECTS
═══════════════════════════════════════════════════ */
.neon-border-primary {
  border-color: hsl(var(--primary));
  box-shadow:
    0 0 8px hsl(var(--primary) / 0.6),
    0 0 20px hsl(var(--primary) / 0.2),
    inset 0 0 8px hsl(var(--primary) / 0.05);
}
.neon-border-secondary {
  border-color: hsl(var(--secondary));
  box-shadow:
    0 0 8px hsl(var(--secondary) / 0.6),
    0 0 20px hsl(var(--secondary) / 0.2),
    inset 0 0 8px hsl(var(--secondary) / 0.05);
}
.neon-border-accent {
  border-color: hsl(var(--accent));
  box-shadow:
    0 0 8px hsl(var(--accent) / 0.6),
    0 0 20px hsl(var(--accent) / 0.2),
    inset 0 0 8px hsl(var(--accent) / 0.05);
}
.neon-border-green {
  border-color: var(--neon-green);
  box-shadow: 0 0 8px rgba(0,255,136,0.6), 0 0 20px rgba(0,255,136,0.2);
}

/* ═══════════════════════════════════════════════════
   ARCADE BUTTONS — PREMIUM
═══════════════════════════════════════════════════ */
.arcade-btn {
  @apply relative inline-flex items-center justify-center px-6 py-3 font-display text-xs tracking-widest text-white uppercase transition-all duration-200 border-2 cursor-pointer select-none;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
}
.arcade-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.2s;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
}
.arcade-btn:hover::before { opacity: 1; }
.arcade-btn:active { transform: scale(0.97); }

.arcade-btn-primary {
  @apply border-primary bg-primary/20 hover:bg-primary hover:text-white;
  box-shadow:
    0 0 12px hsl(var(--primary) / 0.6),
    0 0 30px hsl(var(--primary) / 0.2),
    inset 0 0 12px hsl(var(--primary) / 0.05);
}
.arcade-btn-primary:hover {
  box-shadow:
    0 0 20px hsl(var(--primary) / 0.9),
    0 0 50px hsl(var(--primary) / 0.4),
    inset 0 0 20px hsl(var(--primary) / 0.1);
}
.arcade-btn-secondary {
  @apply border-secondary bg-secondary/20 hover:bg-secondary hover:text-black;
  box-shadow:
    0 0 12px hsl(var(--secondary) / 0.6),
    0 0 30px hsl(var(--secondary) / 0.2),
    inset 0 0 12px hsl(var(--secondary) / 0.05);
}
.arcade-btn-secondary:hover {
  box-shadow:
    0 0 20px hsl(var(--secondary) / 0.9),
    0 0 50px hsl(var(--secondary) / 0.4);
}
.arcade-btn-accent {
  @apply border-accent bg-accent/20 hover:bg-accent hover:text-black;
  box-shadow:
    0 0 12px hsl(var(--accent) / 0.6),
    0 0 30px hsl(var(--accent) / 0.2);
}

/* ═══════════════════════════════════════════════════
   CARD EFFECTS
═══════════════════════════════════════════════════ */
.hover-elevate {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.hover-elevate:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(255, 0, 102, 0.15), 0 4px 16px rgba(0,0,0,0.5);
}

.game-card-shine {
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  transition: left 0.5s ease;
  pointer-events: none;
}
.group:hover .game-card-shine { left: 150%; }

/* ═══════════════════════════════════════════════════
   CRT / SCANLINE EFFECTS
═══════════════════════════════════════════════════ */
.crt {
  position: relative;
  overflow: hidden;
}
.crt::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.18) 50%),
    linear-gradient(90deg, rgba(255,0,0,0.04), rgba(0,255,0,0.02), rgba(0,0,255,0.04));
  background-size: 100% 3px, 3px 100%;
  z-index: 50;
  pointer-events: none;
}
.crt::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%);
  z-index: 49;
  pointer-events: none;
}

.scanline-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,255,255,0.03) 0px,
    transparent 2px
  );
  background-size: 100% 4px;
  z-index: 40;
  pointer-events: none;
  animation: scanline-move 8s linear infinite;
}

/* ═══════════════════════════════════════════════════
   UTILITY ANIMATIONS
═══════════════════════════════════════════════════ */
.animate-float    { animation: float-up 3s ease-in-out infinite; }
.animate-slide-up { animation: slide-in-up 0.5s ease forwards; }
.animate-slide-left { animation: slide-in-left 0.5s ease forwards; }
.animate-fade-in  { animation: fade-in 0.4s ease forwards; }
.animate-scale-in { animation: scale-in 0.3s ease forwards; }
.animate-marquee  { animation: marquee 24s linear infinite; }
.animate-blink    { animation: blink-cursor 1s step-end infinite; }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }

/* Staggered animation delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* ═══════════════════════════════════════════════════
   GAME HUD COMPONENTS
═══════════════════════════════════════════════════ */
.hud-bar {
  @apply flex items-center gap-4 px-4 py-2 bg-black/80 border-b border-primary/30 font-display text-xs;
  backdrop-filter: blur(8px);
}
.hud-score {
  color: var(--neon-yellow);
  text-shadow: 0 0 8px var(--neon-yellow);
}
.hud-lives {
  color: var(--neon-pink);
  text-shadow: 0 0 8px var(--neon-pink);
}
.hud-level {
  color: var(--neon-cyan);
  text-shadow: 0 0 8px var(--neon-cyan);
}

/* ═══════════════════════════════════════════════════
   HP / PROGRESS BARS
═══════════════════════════════════════════════════ */
.neon-bar-track {
  @apply relative w-full h-3 bg-black/50 border border-white/10 overflow-hidden;
}
.neon-bar-fill {
  @apply absolute left-0 top-0 h-full transition-all duration-300;
}
.neon-bar-pink  { background: linear-gradient(90deg, #ff0066, #ff66aa); box-shadow: 0 0 8px #ff0066; }
.neon-bar-cyan  { background: linear-gradient(90deg, #00ffff, #66ffff); box-shadow: 0 0 8px #00ffff; }
.neon-bar-green { background: linear-gradient(90deg, #00ff88, #66ffaa); box-shadow: 0 0 8px #00ff88; }
.neon-bar-yellow { background: linear-gradient(90deg, #ffdd00, #ffee66); box-shadow: 0 0 8px #ffdd00; }

/* ═══════════════════════════════════════════════════
   LEADERBOARD STYLES
═══════════════════════════════════════════════════ */
.leaderboard-row {
  @apply flex items-center gap-4 p-3 border border-border/50 transition-all duration-200;
}
.leaderboard-row:hover {
  @apply border-primary/40;
  background: rgba(255, 0, 102, 0.04);
}
.rank-gold   { color: var(--neon-yellow); text-shadow: 0 0 8px var(--neon-yellow); }
.rank-silver { color: #c0c0c0; text-shadow: 0 0 8px rgba(192,192,192,0.6); }
.rank-bronze { color: #cd7f32; text-shadow: 0 0 8px rgba(205,127,50,0.6); }

/* ═══════════════════════════════════════════════════
   TICKER / MARQUEE
═══════════════════════════════════════════════════ */
.ticker-wrap {
  @apply overflow-hidden border-y border-primary/30 bg-black/60 py-2;
  backdrop-filter: blur(4px);
}
.ticker-content {
  @apply flex whitespace-nowrap font-display text-[10px] text-primary/80;
  animation: marquee 30s linear infinite;
}
.ticker-content span { @apply mx-8; }

/* ═══════════════════════════════════════════════════
   CATEGORY BADGE
═══════════════════════════════════════════════════ */
.cat-badge {
  @apply inline-flex items-center gap-1 px-2 py-1 font-display text-[9px] border;
}
.cat-badge-edu     { @apply border-green-500/50 bg-green-500/10 text-green-400; }
.cat-badge-arcade  { @apply border-secondary/50 bg-secondary/10 text-secondary; }
.cat-badge-rpg     { @apply border-purple-500/50 bg-purple-500/10 text-purple-400; }
.cat-badge-sports  { @apply border-orange-500/50 bg-orange-500/10 text-orange-400; }
.cat-badge-puzzle  { @apply border-accent/50 bg-accent/10 text-accent; }

/* ═══════════════════════════════════════════════════
   STAR RATING
═══════════════════════════════════════════════════ */
.star-rating { color: var(--neon-yellow); text-shadow: 0 0 6px var(--neon-yellow); }

/* ═══════════════════════════════════════════════════
   MODAL / OVERLAY
═══════════════════════════════════════════════════ */
.modal-overlay {
  @apply fixed inset-0 bg-black/80 flex items-center justify-center z-50;
  backdrop-filter: blur(6px);
  animation: fade-in 0.2s ease;
}
.modal-panel {
  @apply bg-card border-2 border-primary/60 p-8 max-w-md w-full mx-4 relative;
  box-shadow: 0 0 40px rgba(255,0,102,0.3), inset 0 0 40px rgba(255,0,102,0.02);
  animation: scale-in 0.25s ease;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}

/* ═══════════════════════════════════════════════════
   STAT COUNTER CARD
═══════════════════════════════════════════════════ */
.stat-card {
  @apply bg-card border border-border p-6 flex flex-col items-center gap-2 relative overflow-hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.stat-card:hover {
  @apply border-primary/50;
  box-shadow: 0 0 20px rgba(255,0,102,0.1);
}
.stat-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent);
}

/* ═══════════════════════════════════════════════════
   CANVAS GAME FRAME
═══════════════════════════════════════════════════ */
.game-canvas-frame {
  position: relative;
  border: 2px solid hsl(var(--primary));
  box-shadow:
    0 0 20px hsl(var(--primary) / 0.5),
    0 0 60px hsl(var(--primary) / 0.15),
    inset 0 0 20px rgba(0,0,0,0.8);
}
.game-canvas-frame::before {
  content: '';
  position: absolute;
  top: -4px; left: -4px; right: -4px; bottom: -4px;
  border: 1px solid hsl(var(--primary) / 0.2);
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════ */
.nav-link {
  @apply font-display text-xs text-muted-foreground hover:text-white transition-colors relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 2px;
  background: hsl(var(--primary));
  transform: scaleX(0);
  transition: transform 0.2s ease;
  box-shadow: 0 0 8px hsl(var(--primary));
}
.nav-link:hover::after,
.nav-link.active::after { transform: scaleX(1); }
.nav-link.active { @apply text-primary; }

/* ═══════════════════════════════════════════════════
   FEATURED BADGE
═══════════════════════════════════════════════════ */
.featured-badge {
  @apply absolute top-2 left-2 flex items-center gap-1 px-2 py-1 font-display text-[9px] bg-accent text-black z-10;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
}

/* ═══════════════════════════════════════════════════
   100-LEVEL BADGE
═══════════════════════════════════════════════════ */
.lvl-badge {
  @apply inline-flex items-center gap-1 font-display text-[8px] px-2 py-0.5 border;
  border-color: var(--neon-cyan);
  color: var(--neon-cyan);
  box-shadow: 0 0 6px rgba(0,255,255,0.3);
}

/* ═══════════════════════════════════════════════════
   TOAST OVERRIDES
═══════════════════════════════════════════════════ */
[data-sonner-toast] {
  font-family: var(--font-display) !important;
  font-size: 10px !important;
  border: 1px solid hsl(var(--primary) / 0.4) !important;
  background: hsl(var(--card)) !important;
}

```

---

## App.tsx

```tsx
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PlayerProvider } from "@/lib/player";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
import Games from "@/pages/games";
import GameDetail from "@/pages/game-detail";
import Play from "@/pages/play";
import Leaderboard from "@/pages/leaderboard";
import Rooms from "@/pages/rooms";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/games/:slug" component={GameDetail} />
        <Route path="/play/:slug" component={Play} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayerProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </PlayerProvider>
    </QueryClientProvider>
  );
}

export default App;

```

---

## components/game-card.tsx

```tsx
import { Link } from "wouter";
import { Game } from "@workspace/api-client-react";
import { Play, Users, Star, Zap } from "lucide-react";

const CATEGORY_EMOJI: Record<string, string> = {
  "Racing":      "🏎️",
  "Fighting":    "🥊",
  "Sports":      "⚽",
  "Puzzle":      "🧩",
  "Shooter":     "🚀",
  "RPG":         "⚔️",
  "Strategy":    "♟️",
  "Classic":     "👾",
  "Arcade":      "🕹️",
  "Educational": "🎓",
  "Mario & Kart":"🍄",
};

const CATEGORY_COLOR: Record<string, string> = {
  "Racing":      "border-orange-500/50 bg-orange-500/10 text-orange-400",
  "Fighting":    "border-red-500/50 bg-red-500/10 text-red-400",
  "Sports":      "border-green-500/50 bg-green-500/10 text-green-400",
  "Puzzle":      "border-yellow-500/50 bg-yellow-500/10 text-yellow-400",
  "Shooter":     "border-cyan-500/50 bg-cyan-500/10 text-cyan-400",
  "RPG":         "border-purple-500/50 bg-purple-500/10 text-purple-400",
  "Strategy":    "border-blue-500/50 bg-blue-500/10 text-blue-400",
  "Classic":     "border-pink-500/50 bg-pink-500/10 text-pink-400",
  "Arcade":      "border-secondary/50 bg-secondary/10 text-secondary",
  "Educational": "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
};

function StarRating({ rating }: { rating: number }) {
  const stars = Math.round(rating);
  return (
    <span className="flex items-center gap-0.5 star-rating text-[10px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-2.5 h-2.5 ${i < stars ? 'fill-current' : 'opacity-20'}`} />
      ))}
      <span className="text-muted-foreground ml-1 text-[9px]">{rating.toFixed(1)}</span>
    </span>
  );
}

export function GameCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  const emoji = CATEGORY_EMOJI[game.category] || "🕹️";
  const catColor = CATEGORY_COLOR[game.category] || "border-secondary/50 bg-secondary/10 text-secondary";
  const has100Levels = game.tags?.includes("100-levels");

  return (
    <div className={`group relative bg-card border border-border overflow-hidden flex flex-col hover-elevate transition-all duration-300 hover:border-primary/50 ${featured ? 'border-primary/30' : ''}`}>
      {/* Shine sweep */}
      <div className="game-card-shine" />

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {game.thumbnailUrl ? (
          <img
            src={game.thumbnailUrl}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0010] via-[#050025] to-black gap-3">
            <span className="text-5xl select-none animate-float">{emoji}</span>
            <span className="font-display text-[8px] text-muted-foreground/60 uppercase tracking-widest">
              {game.category}
            </span>
          </div>
        )}

        {/* Hover play overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <Link
            href={`/play/${game.slug}`}
            className="arcade-btn arcade-btn-primary scale-90 group-hover:scale-100 transition-transform duration-200"
          >
            <Play className="w-4 h-4 mr-2" /> PLAY NOW
          </Link>
        </div>

        {/* Featured badge */}
        {game.featured && (
          <div className="featured-badge">
            <Star className="w-2.5 h-2.5 fill-black" /> FEATURED
          </div>
        )}

        {/* 100 levels badge */}
        {has100Levels && (
          <div className="absolute top-2 right-2 lvl-badge z-10">
            <Zap className="w-2.5 h-2.5" />
            100 LVL
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start gap-2">
          <Link
            href={`/games/${game.slug}`}
            className="font-display text-[11px] leading-tight hover:text-primary transition-colors line-clamp-1"
          >
            {game.title}
          </Link>
          <span className={`font-display text-[8px] px-2 py-1 border shrink-0 ${catColor}`}>
            {emoji} {game.category}
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 flex-1 leading-relaxed">
          {game.description}
        </p>

        <StarRating rating={game.rating || 4.5} />

        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-3 border-t border-border/50">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <Play className="w-3 h-3" />
            <span>{game.playCount.toLocaleString()} plays</span>
          </div>
        </div>
      </div>
    </div>
  );
}

```

---

## pages/home.tsx

```tsx
import { useGetFeaturedGames, useGetGameCategories, useListLeaderboards } from "@workspace/api-client-react";
import { Link } from "wouter";
import { GameCard } from "@/components/game-card";
import { Trophy, Play, Users, ArrowRight, Zap, Star, Gamepad2, BookOpen, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const TICKER_ITEMS = [
  "🏆 NEW: 40 Signature Games Added",
  "⚡ 100-Level Progression In Every Game",
  "🎮 Snake · Tetris · Space Invaders · Breakout — All Upgraded",
  "🎓 Quiz Battle · Typing Storm · Math RPG · Memory Matrix",
  "👾 Live Multiplayer Rooms Now Open",
  "🔥 178+ Games In The Library",
  "🥊 Fighting · Racing · Dungeon Crawler · Chess AI",
];

const STATS = [
  { icon: Gamepad2, label: "Games",    value: "178+",   color: "text-primary",   glow: "rgba(255,0,102,0.3)" },
  { icon: Zap,      label: "Levels",   value: "10K+",   color: "text-secondary", glow: "rgba(0,255,255,0.3)" },
  { icon: Users,    label: "Players",  value: "∞",      color: "text-accent",    glow: "rgba(255,221,0,0.3)" },
  { icon: Star,     label: "Avg Rating", value: "4.9★", color: "text-emerald-400", glow: "rgba(0,255,136,0.3)" },
];

const CATEGORY_HIGHLIGHTS = [
  { icon: "🏎️", name: "Racing",      slug: "Racing",      desc: "Speed & drift",   color: "hover:border-orange-500/60" },
  { icon: "🥊", name: "Fighting",    slug: "Fighting",    desc: "Combos & KOs",    color: "hover:border-red-500/60" },
  { icon: "🚀", name: "Shooter",     slug: "Shooter",     desc: "Space battles",   color: "hover:border-cyan-500/60" },
  { icon: "🎓", name: "Educational", slug: "Educational", desc: "Learn & earn",    color: "hover:border-emerald-500/60" },
  { icon: "⚔️", name: "RPG",         slug: "RPG",         desc: "Level up hero",   color: "hover:border-purple-500/60" },
  { icon: "♟️", name: "Strategy",    slug: "Strategy",    desc: "Think & win",     color: "hover:border-blue-500/60" },
  { icon: "🧩", name: "Puzzle",      slug: "Puzzle",      desc: "Logic & skill",   color: "hover:border-yellow-500/60" },
  { icon: "⚽", name: "Sports",      slug: "Sports",      desc: "Go for gold",     color: "hover:border-green-500/60" },
];

export default function Home() {
  const { data: featuredGames, isLoading: loadingFeatured } = useGetFeaturedGames();
  const { data: categories } = useGetGameCategories();
  const { data: leaderboards, isLoading: loadingLeaderboard } = useListLeaderboards({ limit: 8 });

  const heroGame = featuredGames?.[0];
  const trendingGames = featuredGames?.slice(1, 7) || [];
  const newGames = featuredGames?.slice(7, 13) || [];

  return (
    <div className="flex flex-col gap-0 pb-24">
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden crt scanline-overlay">
        {/* Animated neon background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0010] via-[#020015] to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Floating game icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {["🕹️","👾","🏆","⚡","🎮","💎","🔥","⚔️","🚀","🧩"].map((icon, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-10 animate-float"
              style={{
                left: `${8 + (i * 9.5)}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {icon}
            </span>
          ))}
        </div>

        <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center gap-8">
          {/* Pre-title badge */}
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/40 bg-primary/10 font-display text-[10px] text-primary animate-fade-in">
            <Flame className="w-3 h-3" />
            178+ GAMES · 40 SIGNATURE TITLES · 100 LEVELS EACH
            <Flame className="w-3 h-3" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white neon-text-primary tracking-tighter neon-text-flicker animate-slide-up">
            ARCADE
            <br />
            <span className="neon-text-secondary neon-text-pulse">NEVER DIES</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-up delay-200">
            The most complete browser arcade ever built.
            <br />
            <span className="text-white/70">No downloads. No installs. Just pure neon adrenaline.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-slide-up delay-300">
            <Link href="/games" className="arcade-btn arcade-btn-primary text-base px-10 py-4">
              <Play className="w-5 h-5 mr-2" /> PLAY NOW
            </Link>
            <Link href="/rooms" className="arcade-btn arcade-btn-secondary text-base px-10 py-4">
              <Users className="w-5 h-5 mr-2" /> MULTIPLAYER
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
            <span className="font-display text-[8px] text-muted-foreground">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary" />
          </div>
        </div>
      </section>

      {/* ─── LIVE TICKER ──────────────────────────────────── */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="mx-8">▶ {item}</span>
          ))}
        </div>
      </div>

      {/* ─── STATS ROW ─────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card group animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
              <s.icon className={`w-8 h-8 ${s.color}`} style={{ filter: `drop-shadow(0 0 8px ${s.glow})` }} />
              <div className={`font-display text-2xl md:text-3xl ${s.color}`} style={{ textShadow: `0 0 20px ${s.glow}` }}>
                {s.value}
              </div>
              <div className="font-display text-[9px] text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-20">
        {/* ─── CATEGORIES ──────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display neon-text-secondary mb-2">SELECT CATEGORY</h2>
              <p className="text-muted-foreground text-sm">Over 15 genres. Pick your battleground.</p>
            </div>
            <Link href="/games" className="flex items-center gap-2 font-display text-[10px] text-muted-foreground hover:text-primary transition-colors">
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORY_HIGHLIGHTS.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/games?category=${cat.slug}`}
                className={`group relative overflow-hidden border border-border bg-card hover-elevate transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 ${cat.color} animate-slide-up`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="game-card-shine" />
                <span className="text-4xl animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{cat.icon}</span>
                <div className="text-center">
                  <div className="font-display text-[10px] group-hover:text-white transition-colors">{cat.name}</div>
                  <div className="text-[9px] text-muted-foreground mt-1">{cat.desc}</div>
                </div>
                {categories?.find(c => c.slug === cat.slug || c.name === cat.name) && (
                  <span className="text-[8px] font-display text-muted-foreground">
                    {categories.find(c => c.name === cat.name)?.count || "∞"} games
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── TRENDING NOW ─────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display neon-text-primary mb-2">
                <Flame className="inline w-6 h-6 mr-2 text-orange-500" />
                TRENDING NOW
              </h2>
              <p className="text-muted-foreground text-sm">The most-played games this week</p>
            </div>
            <Link href="/games" className="flex items-center gap-2 font-display text-[10px] text-muted-foreground hover:text-primary transition-colors">
              SEE ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingFeatured
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-72 w-full" />)
              : trendingGames.map((game, i) => (
                  <div key={game.id} className="animate-slide-up" style={{ animationDelay: `${i * 60}ms` }}>
                    <GameCard game={game} />
                  </div>
                ))
            }
          </div>
        </section>

        {/* ─── NEW SIGNATURE GAMES SPOTLIGHT ───────────────── */}
        {newGames.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display neon-text-accent mb-2">
                  <BookOpen className="inline w-6 h-6 mr-2" />
                  SIGNATURE COLLECTION
                </h2>
                <p className="text-muted-foreground text-sm">40 hand-crafted games with 100-level progression</p>
              </div>
              <Link href="/games?category=Educational" className="flex items-center gap-2 font-display text-[10px] text-muted-foreground hover:text-accent transition-colors">
                EXPLORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newGames.map((game, i) => (
                <div key={game.id} className="animate-slide-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── HALL OF FAME ─────────────────────────────────── */}
        <section className="relative overflow-hidden border border-border bg-card p-8">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent neon-border-accent" />
          <div className="absolute top-0 right-0 w-1 h-full bg-primary neon-border-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-primary/3 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start gap-10">
            {/* Left: CTA */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-display neon-text-accent mb-4 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-accent" />
                HALL OF FAME
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The elite across all 178+ SkillzStorm games.
                <br />
                Every game has its own leaderboard. Do you have what it takes?
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/leaderboard" className="arcade-btn arcade-btn-accent w-fit">
                  VIEW GLOBAL RANKINGS
                </Link>
                <Link href="/games" className="arcade-btn border-border bg-transparent hover:bg-muted w-fit text-[10px]">
                  BROWSE ALL GAMES
                </Link>
              </div>
            </div>

            {/* Right: leaderboard */}
            <div className="flex-1 w-full">
              <div className="font-display text-[10px] text-muted-foreground mb-4 flex items-center gap-2">
                <Zap className="w-3 h-3 text-accent" /> LIVE TOP SCORES
              </div>
              {loadingLeaderboard ? (
                <div className="space-y-3">
                  {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {leaderboards?.map((entry, idx) => (
                    <div
                      key={entry.id}
                      className="leaderboard-row animate-slide-left"
                      style={{ animationDelay: `${idx * 60}ms` }}
                    >
                      <span className={`font-display text-sm w-7 text-center shrink-0 ${
                        idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : 'text-muted-foreground'
                      }`}>
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${entry.rank}`}
                      </span>
                      <div className="w-9 h-9 border border-border flex items-center justify-center text-xl shrink-0 bg-background">
                        {entry.playerAvatar}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="font-display text-[10px] truncate">{entry.playerName}</p>
                        <p className="text-[9px] text-muted-foreground truncate">{entry.gameTitle}</p>
                      </div>
                      <span className="font-display text-[10px] text-primary shrink-0">
                        {entry.score.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ───────────────────────────────── */}
        <section className="flex flex-col items-center text-center gap-6 py-12">
          <div className="font-display text-[10px] text-primary flex items-center gap-2">
            <span className="animate-blink">▶</span> READY PLAYER ONE
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight">
            YOUR HIGH SCORE<br />
            <span className="neon-text-primary">AWAITS</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            178 games. Every genre. Free forever.
            Choose your game and start climbing the leaderboard.
          </p>
          <Link href="/games" className="arcade-btn arcade-btn-primary text-base px-12 py-5">
            <Gamepad2 className="w-5 h-5 mr-2" /> ENTER THE ARCADE
          </Link>
        </section>
      </div>
    </div>
  );
}

```

---

## pages/games.tsx

```tsx
import { useListGames, useGetGameCategories } from "@workspace/api-client-react";
import { Link, useSearch } from "wouter";
import { GameCard } from "@/components/game-card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Gamepad2, Zap, SortAsc, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useMemo } from "react";

const SORT_OPTIONS = [
  { value: "popular",  label: "Most Played" },
  { value: "rating",   label: "Top Rated" },
  { value: "newest",   label: "Newest" },
  { value: "az",       label: "A → Z" },
];

const QUICK_FILTERS = [
  { label: "100 Levels", tag: "100-levels", icon: <Zap className="w-3 h-3" /> },
  { label: "Featured",   tag: "featured",   icon: <Star className="w-3 h-3" /> },
  { label: "Multiplayer",tag: "multiplayer",icon: <Gamepad2 className="w-3 h-3" /> },
];

export default function Games() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const categoryParam = params.get("category");

  const [search, setSearch]     = useState("");
  const [sort, setSort]         = useState("popular");
  const [quickTag, setQuickTag] = useState<string | null>(null);

  const { data: categories, isLoading: loadingCategories } = useGetGameCategories();
  const { data: rawGames, isLoading: loadingGames } = useListGames({
    category: categoryParam || undefined,
    search: search || undefined,
  });

  const games = useMemo(() => {
    if (!rawGames) return [];
    let filtered = [...rawGames];
    if (quickTag === "featured")    filtered = filtered.filter((g: any) => g.featured);
    if (quickTag === "100-levels")  filtered = filtered.filter((g: any) => g.tags?.includes("100-levels"));
    if (quickTag === "multiplayer") filtered = filtered.filter((g: any) => g.players !== "1 player");
    if (sort === "popular") filtered.sort((a: any, b: any) => b.playCount - a.playCount);
    if (sort === "rating")  filtered.sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0));
    if (sort === "newest")  filtered.sort((a: any, b: any) => (b.releaseYear || 0) - (a.releaseYear || 0));
    if (sort === "az")      filtered.sort((a: any, b: any) => a.title.localeCompare(b.title));
    return filtered;
  }, [rawGames, sort, quickTag]);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-border bg-card/50" style={{ backdropFilter: "blur(8px)" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="font-display text-[9px] text-muted-foreground flex items-center gap-2 mb-3">
                <Gamepad2 className="w-3 h-3" />
                {loadingGames ? "..." : `${games.length} GAMES`}
                {categoryParam && <> · <span className="text-primary">{categoryParam.toUpperCase()}</span></>}
                {search && <> · <span className="text-secondary">"{search}"</span></>}
              </div>
              <h1 className="text-3xl md:text-4xl font-display neon-text-primary">GAMES LIBRARY</h1>
              <p className="text-muted-foreground text-sm mt-2">Find your next obsession. 178+ games and counting.</p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search games..."
                className="pl-10 bg-background border-border focus-visible:ring-primary font-display text-[10px] py-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Quick filters + sort */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="font-display text-[9px] text-muted-foreground flex items-center gap-1">
              <Filter className="w-3 h-3" /> FILTER:
            </span>
            {QUICK_FILTERS.map((f) => (
              <button
                key={f.tag}
                onClick={() => setQuickTag(quickTag === f.tag ? null : f.tag)}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-display text-[9px] border transition-all duration-200 ${
                  quickTag === f.tag
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-white"
                }`}
              >
                {f.icon} {f.label}
              </button>
            ))}

            <div className="ml-auto flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-card border border-border text-muted-foreground font-display text-[9px] px-3 py-2 cursor-pointer hover:border-primary/50 transition-colors outline-none"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 items-start">
        {/* ─── SIDEBAR ──────────────────────────────────── */}
        <aside className="w-full lg:w-60 shrink-0 sticky top-24 animate-slide-left">
          <div className="bg-card border border-border p-4">
            <h3 className="font-display text-[10px] mb-4 flex items-center gap-2 text-secondary">
              <Filter className="w-3.5 h-3.5" /> CATEGORIES
            </h3>
            <div className="flex flex-col gap-1">
              <Link
                href="/games"
                className={`font-display text-[9px] py-2.5 px-3 flex items-center justify-between transition-all duration-150 ${
                  !categoryParam
                    ? "bg-primary/20 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-white hover:bg-muted"
                }`}
              >
                <span>All Games</span>
                <span className="text-[8px] text-muted-foreground">{rawGames?.length || "..."}</span>
              </Link>

              {loadingCategories
                ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-9 w-full" />)
                : categories?.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/games?category=${cat.slug}`}
                      className={`font-display text-[9px] py-2.5 px-3 flex items-center justify-between transition-all duration-150 ${
                        categoryParam === cat.slug
                          ? "bg-secondary/20 text-secondary border-l-2 border-secondary"
                          : "text-muted-foreground hover:text-white hover:bg-muted"
                      }`}
                    >
                      <span className="flex items-center gap-2">{cat.icon} {cat.name}</span>
                      <span className="text-[8px] bg-background px-1.5 py-0.5 border border-border">{cat.count}</span>
                    </Link>
                  ))}
            </div>
          </div>

          {/* Signature promo */}
          <div className="mt-4 p-4 border border-primary/30 bg-primary/5 flex flex-col gap-3">
            <div className="font-display text-[9px] text-primary flex items-center gap-2">
              <Zap className="w-3 h-3" /> SIGNATURE GAMES
            </div>
            <p className="text-[9px] text-muted-foreground leading-relaxed">
              40 hand-crafted titles with 100-level progressive difficulty. Educational &amp; addictive.
            </p>
            <Link href="/games?category=Educational" className="arcade-btn arcade-btn-primary text-[8px] px-3 py-2 w-full justify-center">
              EXPLORE
            </Link>
          </div>
        </aside>

        {/* ─── GAMES GRID ──────────────────────────────── */}
        <div className="flex-1 w-full">
          {loadingGames ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {Array.from({ length: 9 }).map((_, i) => <Skeleton key={i} className="h-72 w-full" />)}
            </div>
          ) : games.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border bg-card/30">
              <div className="text-6xl mb-4 animate-float">🔍</div>
              <h3 className="font-display text-lg mb-3 text-muted-foreground">NO GAMES FOUND</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Try different search terms or clear your filters.
              </p>
              <div className="flex gap-3">
                <Link href="/games" className="arcade-btn border-border bg-card text-[10px]">
                  CLEAR FILTERS
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {games.map((game: any, i: number) => (
                  <div
                    key={game.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${Math.min(i * 30, 400)}ms` }}
                  >
                    <GameCard game={game} />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center font-display text-[9px] text-muted-foreground">
                SHOWING {games.length} GAMES
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

```

---

## pages/play.tsx — ALL 32 FACTORIES

```tsx
import { useParams, Link } from "wouter";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSubmitScore, useListGames } from "@workspace/api-client-react";
import { getListGamesQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getListLeaderboardsQueryKey } from "@workspace/api-client-react";
import { usePlayer } from "@/lib/player";
import { ArrowLeft, RotateCcw, Trophy, Play as PlayIcon, Pause, Zap, Heart, Shield } from "lucide-react";

type GameState = "idle" | "playing" | "paused" | "gameover";

interface GameEngine {
  init: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
  update: (dt: number, keys: Set<string>) => void;
  draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
  getScore: () => number;
  getLives: () => number;
  getLevel: () => number;
  isOver: () => boolean;
  cleanup?: () => void;
}

// ========= PAC-MAN STYLE =========
function createPacManGame(): GameEngine {
  const TILE = 24;
  const COLS = 21, ROWS = 15;
  let map: number[][] = [];
  let pacman = { x: 0, y: 0, dx: 0, dy: 0, nextDx: 1, nextDy: 0 };
  let ghosts: { x: number; y: number; dx: number; dy: number; color: string }[] = [];
  let dots: boolean[][] = [];
  let score = 0, lives = 3, level = 1, dead = false;
  let moveTimer = 0, ghostTimer = 0;
  const SPEED = 0.18, GHOST_SPEED = 0.22;

  function buildMap() {
    map = Array.from({ length: ROWS }, (_, r) =>
      Array.from({ length: COLS }, (_, c) => {
        if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) return 1;
        if (r % 4 === 2 && c % 4 === 2) return 1;
        if (r % 4 === 2 && c % 2 === 0 && c > 2 && c < COLS - 3) return 1;
        return 0;
      })
    );
    dots = map.map((row) => row.map((cell) => cell === 0));
    pacman = { x: 2, y: 2, dx: 1, dy: 0, nextDx: 1, nextDy: 0 };
    ghosts = [
      { x: COLS - 3, y: 2, dx: -1, dy: 0, color: "#ff3030" },
      { x: COLS - 3, y: ROWS - 3, dx: 0, dy: -1, color: "#ff80ff" },
      { x: 2, y: ROWS - 3, dx: 1, dy: 0, color: "#ff9900" },
    ];
    dots[2][2] = false;
  }

  function canMove(x: number, y: number) {
    const nx = Math.round(x), ny = Math.round(y);
    if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return false;
    return map[ny][nx] !== 1;
  }

  return {
    init() {
      score = 0; lives = 3; level = 1; dead = false;
      buildMap();
    },
    update(dt, keys) {
      if (dead) return;
      if (keys.has("ArrowUp") || keys.has("w")) { pacman.nextDx = 0; pacman.nextDy = -1; }
      if (keys.has("ArrowDown") || keys.has("s")) { pacman.nextDx = 0; pacman.nextDy = 1; }
      if (keys.has("ArrowLeft") || keys.has("a")) { pacman.nextDx = -1; pacman.nextDy = 0; }
      if (keys.has("ArrowRight") || keys.has("d")) { pacman.nextDx = 1; pacman.nextDy = 0; }
      moveTimer += dt;
      if (moveTimer >= SPEED) {
        moveTimer = 0;
        const nx = pacman.x + pacman.nextDx;
        const ny = pacman.y + pacman.nextDy;
        if (canMove(nx, ny)) { pacman.dx = pacman.nextDx; pacman.dy = pacman.nextDy; }
        const mx = pacman.x + pacman.dx, my = pacman.y + pacman.dy;
        if (canMove(mx, my)) { pacman.x = mx; pacman.y = my; }
        const px = Math.round(pacman.x), py = Math.round(pacman.y);
        if (px >= 0 && py >= 0 && py < ROWS && px < COLS && dots[py][px]) {
          dots[py][px] = false;
          score += 10;
        }
        if (dots.every((row) => row.every((d) => !d))) {
          level++;
          buildMap();
        }
      }
      ghostTimer += dt;
      if (ghostTimer >= GHOST_SPEED) {
        ghostTimer = 0;
        for (const g of ghosts) {
          const dirs = [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }];
          const valid = dirs.filter((d) => canMove(g.x + d.dx, g.y + d.dy));
          if (valid.length > 0) {
            const best = valid.sort(() => {
              const a = Math.abs((g.x + valid[0].dx) - pacman.x) + Math.abs((g.y + valid[0].dy) - pacman.y);
              const b = Math.abs((g.x + valid[1]?.dx || 0) - pacman.x) + Math.abs((g.y + valid[1]?.dy || 0) - pacman.y);
              return a - b;
            });
            const chosen = Math.random() < 0.4 ? valid[Math.floor(Math.random() * valid.length)] : best[0];
            g.x += chosen.dx; g.y += chosen.dy;
          }
          if (Math.abs(g.x - pacman.x) < 1 && Math.abs(g.y - pacman.y) < 1) {
            lives--;
            if (lives <= 0) dead = true;
            else buildMap();
          }
        }
      }
    },
    draw(ctx, canvas) {
      ctx.fillStyle = "#000020";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const ox = (canvas.width - COLS * TILE) / 2;
      const oy = (canvas.height - ROWS * TILE) / 2;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = ox + c * TILE, y = oy + r * TILE;
          if (map[r][c] === 1) {
            ctx.fillStyle = "#001080";
            ctx.shadowColor = "#0040ff";
            ctx.shadowBlur = 6;
            ctx.fillRect(x, y, TILE, TILE);
          } else if (dots[r][c]) {
            ctx.shadowColor = "#ffff00";
            ctx.shadowBlur = 8;
            ctx.fillStyle = "#ffff00";
            ctx.beginPath();
            ctx.arc(x + TILE / 2, y + TILE / 2, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      // Pacman
      const px = ox + pacman.x * TILE + TILE / 2;
      const py = oy + pacman.y * TILE + TILE / 2;
      ctx.shadowColor = "#ffff00";
      ctx.shadowBlur = 14;
      ctx.fillStyle = "#ffff00";
      ctx.beginPath();
      ctx.arc(px, py, TILE / 2 - 2, 0.3, Math.PI * 1.7);
      ctx.lineTo(px, py);
      ctx.fill();
      // Ghosts
      for (const g of ghosts) {
        const gx = ox + g.x * TILE + TILE / 2;
        const gy = oy + g.y * TILE + TILE / 2;
        ctx.fillStyle = g.color;
        ctx.shadowColor = g.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(gx, gy - 2, TILE / 2 - 2, Math.PI, 0);
        ctx.rect(gx - TILE / 2 + 2, gy - 2, TILE - 4, TILE / 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => dead,
  };
}

// ========= ASTEROIDS =========
function createAsteroidsGame(): GameEngine {
  let ship = { x: 400, y: 300, angle: 0, vx: 0, vy: 0 };
  let bullets: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
  let asteroids: { x: number; y: number; vx: number; vy: number; r: number; points: { x: number; y: number }[] }[] = [];
  let score = 0, lives = 3, level = 1, dead = false;
  let shootCooldown = 0;
  let invincible = 0;

  function makeAsteroid(x: number, y: number, r: number) {
    const pts = Array.from({ length: 10 }, (_, i) => {
      const a = (i / 10) * Math.PI * 2;
      const dr = r * (0.7 + Math.random() * 0.3);
      return { x: Math.cos(a) * dr, y: Math.sin(a) * dr };
    });
    const a = Math.random() * Math.PI * 2;
    return { x, y, vx: Math.cos(a) * 60, vy: Math.sin(a) * 60, r, points: pts };
  }

  function initLevel(lv: number) {
    asteroids = Array.from({ length: 4 + lv }, (_, i) => {
      const a = (i / (4 + lv)) * Math.PI * 2;
      return makeAsteroid(ship.x + Math.cos(a) * 200, ship.y + Math.sin(a) * 200, 40);
    });
  }

  return {
    init(canvas) {
      ship = { x: canvas.width / 2, y: canvas.height / 2, angle: 0, vx: 0, vy: 0 };
      score = 0; lives = 3; level = 1; dead = false;
      bullets = []; invincible = 1.5;
      initLevel(1);
    },
    update(dt, keys) {
      if (dead) return;
      if (invincible > 0) invincible -= dt;
      if (keys.has("ArrowLeft") || keys.has("a")) ship.angle -= 3 * dt;
      if (keys.has("ArrowRight") || keys.has("d")) ship.angle += 3 * dt;
      if (keys.has("ArrowUp") || keys.has("w")) {
        ship.vx += Math.sin(ship.angle) * 300 * dt;
        ship.vy -= Math.cos(ship.angle) * 300 * dt;
      }
      ship.vx *= (1 - dt * 0.6);
      ship.vy *= (1 - dt * 0.6);
      ship.x = (ship.x + ship.vx * dt + 800) % 800;
      ship.y = (ship.y + ship.vy * dt + 600) % 600;
      shootCooldown -= dt;
      if ((keys.has(" ") || keys.has("ArrowDown")) && shootCooldown <= 0) {
        bullets.push({ x: ship.x + Math.sin(ship.angle) * 20, y: ship.y - Math.cos(ship.angle) * 20, vx: Math.sin(ship.angle) * 500, vy: -Math.cos(ship.angle) * 500, life: 1.5 });
        shootCooldown = 0.18;
      }
      for (const b of bullets) { b.x = (b.x + b.vx * dt + 800) % 800; b.y = (b.y + b.vy * dt + 600) % 600; b.life -= dt; }
      bullets.splice(0, bullets.length, ...bullets.filter((b) => b.life > 0));
      for (const ast of asteroids) {
        ast.x = (ast.x + ast.vx * dt + 800) % 800;
        ast.y = (ast.y + ast.vy * dt + 600) % 600;
        // Bullet collision
        for (const b of bullets) {
          const dx = b.x - ast.x, dy = b.y - ast.y;
          if (Math.sqrt(dx * dx + dy * dy) < ast.r) {
            b.life = 0; ast.r = -1;
            score += ast.r > 30 ? 20 : ast.r > 15 ? 50 : 100;
            if (ast.r > 20) {
              asteroids.push(makeAsteroid(ast.x, ast.y, ast.r / 2));
              asteroids.push(makeAsteroid(ast.x, ast.y, ast.r / 2));
            }
            break;
          }
        }
        // Ship collision
        if (invincible <= 0) {
          const dx = ship.x - ast.x, dy = ship.y - ast.y;
          if (Math.sqrt(dx * dx + dy * dy) < ast.r + 12) {
            lives--; invincible = 2;
            ship = { x: 400, y: 300, angle: 0, vx: 0, vy: 0 };
            if (lives <= 0) dead = true;
          }
        }
      }
      asteroids.splice(0, asteroids.length, ...asteroids.filter((a) => a.r > 0));
      if (asteroids.length === 0) { level++; initLevel(level); }
    },
    draw(ctx, canvas) {
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Stars
      for (let i = 0; i < 80; i++) {
        ctx.fillStyle = `rgba(255,255,255,${0.2 + (i % 3) * 0.2})`;
        ctx.fillRect((i * 97) % 800, (i * 137) % 600, 1, 1);
      }
      for (const ast of asteroids) {
        ctx.save(); ctx.translate(ast.x, ast.y);
        ctx.beginPath(); ctx.moveTo(ast.points[0].x, ast.points[0].y);
        ast.points.forEach((p) => ctx.lineTo(p.x, p.y));
        ctx.closePath();
        ctx.strokeStyle = "#aaffcc"; ctx.shadowColor = "#aaffcc"; ctx.shadowBlur = 8; ctx.lineWidth = 2;
        ctx.stroke(); ctx.restore();
      }
      for (const b of bullets) {
        ctx.fillStyle = "#ffff00"; ctx.shadowColor = "#ffff00"; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, Math.PI * 2); ctx.fill();
      }
      if (invincible <= 0 || Math.floor(invincible * 10) % 2 === 0) {
        ctx.save(); ctx.translate(ship.x, ship.y); ctx.rotate(ship.angle);
        ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(12, 14); ctx.lineTo(0, 8); ctx.lineTo(-12, 14); ctx.closePath();
        ctx.fillStyle = "#00ff90"; ctx.shadowColor = "#00ff90"; ctx.shadowBlur = 12; ctx.fill();
        ctx.restore();
      }
      ctx.shadowBlur = 0;
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => dead,
  };
}

// ========= FLAPPY BIRD =========
function createFlappyGame(): GameEngine {
  let bird = { x: 0, y: 0, vy: 0 };
  let pipes: { x: number; gap: number; scored: boolean }[] = [];
  let score = 0, lives = 3, level = 1, dead = false;
  let ground = 0, pipeSpeed = 180, pipeTimer = 0, pipeInterval = 2.2;
  let flapPressed = false;
  const BIRD_R = 14, PIPE_W = 60;

  function resetRound(canvas: HTMLCanvasElement) {
    bird = { x: 120, y: canvas.height / 2, vy: 0 };
    pipes = [];
    pipeTimer = 0;
  }

  return {
    init(canvas) {
      ground = canvas.height - 50;
      score = 0; lives = 3; level = 1; dead = false;
      resetRound(canvas);
    },
    update(dt, keys, canvas?: any) {
      if (dead) return;
      const tap = keys.has(" ") || keys.has("ArrowUp") || keys.has("w");
      if (tap && !flapPressed) { bird.vy = -400; }
      flapPressed = tap;
      bird.vy += 980 * dt;
      bird.y += bird.vy * dt;
      if (bird.y < 0) { bird.y = 0; bird.vy = 0; }
      if (bird.y + BIRD_R > ground) {
        lives--;
        if (lives <= 0) dead = true;
        else resetRound({ width: 800, height: 560 } as any);
        return;
      }
      pipeTimer += dt;
      if (pipeTimer >= pipeInterval) {
        pipeTimer = 0;
        const gapSize = Math.max(120, 180 - level * 8);
        const gapY = 80 + Math.random() * (ground - 80 - gapSize - 20);
        pipes.push({ x: 820, gap: gapY, scored: false });
      }
      const speed = pipeSpeed + level * 12;
      for (const p of pipes) {
        p.x -= speed * dt;
        const gapSize = Math.max(120, 180 - level * 8);
        if (!p.scored && p.x + PIPE_W < bird.x) {
          p.scored = true;
          score += 10;
          if (score % 50 === 0) level++;
        }
        const cx = bird.x, cy = bird.y;
        if (cx + BIRD_R > p.x && cx - BIRD_R < p.x + PIPE_W) {
          if (cy - BIRD_R < p.gap || cy + BIRD_R > p.gap + gapSize) {
            lives--;
            if (lives <= 0) dead = true;
            else resetRound({ width: 800, height: 560 } as any);
            return;
          }
        }
      }
      pipes.splice(0, pipes.length, ...pipes.filter((p) => p.x > -PIPE_W));
    },
    draw(ctx, canvas) {
      const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
      sky.addColorStop(0, "#000820"); sky.addColorStop(1, "#001040");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = `rgba(255,255,255,${0.3 + (i % 3) * 0.2})`;
        ctx.fillRect((i * 113) % canvas.width, (i * 89) % (ground - 20), 1, 1);
      }
      const gapSize = Math.max(120, 180 - level * 8);
      for (const p of pipes) {
        ctx.fillStyle = "#00cc44";
        ctx.shadowColor = "#00ff66";
        ctx.shadowBlur = 12;
        ctx.fillRect(p.x, 0, PIPE_W, p.gap);
        ctx.fillRect(p.x - 6, p.gap - 24, PIPE_W + 12, 24);
        ctx.fillRect(p.x, p.gap + gapSize, PIPE_W, canvas.height);
        ctx.fillRect(p.x - 6, p.gap + gapSize, PIPE_W + 12, 24);
      }
      ctx.shadowColor = "#ffdd00";
      ctx.shadowBlur = 16;
      ctx.fillStyle = "#ffdd00";
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, BIRD_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ff6600";
      ctx.shadowColor = "#ff6600";
      ctx.shadowBlur = 8;
      ctx.fillRect(bird.x + 4, bird.y - 4, 10, 8);
      ctx.fillStyle = "#fff";
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(bird.x + 4, bird.y - 5, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#111";
      ctx.beginPath();
      ctx.arc(bird.x + 5, bird.y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#3a5a00";
      ctx.shadowColor = "#4a8a00";
      ctx.shadowBlur = 4;
      ctx.fillRect(0, ground, canvas.width, canvas.height - ground);
      ctx.fillStyle = "#5aaa00";
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.fillRect(i, ground, 12, 8);
      }
      ctx.shadowBlur = 0;
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => dead,
  };
}

// ========= GEOMETRY DASH =========
function createGeometryDashGame(): GameEngine {
  const GRAVITY = 1400;
  const JUMP_V = -600;
  const SPEED_BASE = 240;
  let cube = { x: 0, y: 0, vy: 0, onGround: false, size: 32, angle: 0 };
  let obstacles: { x: number; type: "spike" | "block" | "gap" | "orb"; y: number; w: number; h: number }[] = [];
  let particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[] = [];
  let score = 0, lives = 3, level = 1, dead = false;
  let floorY = 0, worldX = 0, spawnTimer = 0;
  let jumpHeld = false, speed = SPEED_BASE;
  const PATTERNS = [
    [{ type: "spike" as const, offset: 0 }],
    [{ type: "spike" as const, offset: 0 }, { type: "spike" as const, offset: 60 }],
    [{ type: "block" as const, offset: 0 }],
    [{ type: "block" as const, offset: 0 }, { type: "spike" as const, offset: 90 }],
    [{ type: "orb" as const, offset: 0 }],
  ];

  function spawnPattern(x: number) {
    const pattern = PATTERNS[Math.floor(Math.random() * Math.min(PATTERNS.length, 2 + level))];
    for (const p of pattern) {
      if (p.type === "spike") {
        obstacles.push({ x: x + p.offset, type: "spike", y: floorY, w: 32, h: 32 });
      } else if (p.type === "block") {
        obstacles.push({ x: x + p.offset, type: "block", y: floorY - 32, w: 40, h: 40 });
      } else if (p.type === "orb") {
        obstacles.push({ x: x + p.offset, type: "orb", y: floorY - 120, w: 24, h: 24 });
      }
    }
  }

  function explode(x: number, y: number) {
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      particles.push({ x, y, vx: Math.cos(a) * 120, vy: Math.sin(a) * 120, life: 0.6, color: `hsl(${Math.random() * 60 + 280}, 100%, 60%)` });
    }
  }

  return {
    init(canvas) {
      floorY = canvas.height - 70;
      cube = { x: 120, y: floorY - 32, vy: 0, onGround: true, size: 32, angle: 0 };
      obstacles = []; particles = [];
      score = 0; lives = 3; level = 1; dead = false;
      worldX = 0; spawnTimer = 0;
      speed = SPEED_BASE;
      for (let i = 0; i < 5; i++) spawnPattern(400 + i * 200);
    },
    update(dt, keys) {
      if (dead) return;
      const jump = keys.has(" ") || keys.has("ArrowUp") || keys.has("w") || keys.has("x");
      if (jump && !jumpHeld && cube.onGround) { cube.vy = JUMP_V; cube.onGround = false; }
      for (const obs of obstacles) {
        if (obs.type === "orb" && jump && !jumpHeld) {
          const dx = obs.x - worldX - cube.x, dy = obs.y - cube.y;
          if (Math.abs(dx) < 40 && Math.abs(dy) < 40) { cube.vy = JUMP_V * 0.9; break; }
        }
      }
      jumpHeld = jump;
      cube.vy += GRAVITY * dt;
      cube.y += cube.vy * dt;
      if (cube.y + cube.size >= floorY) { cube.y = floorY - cube.size; cube.vy = 0; cube.onGround = true; }
      else cube.onGround = false;
      if (!cube.onGround) cube.angle += 4 * dt;
      worldX += speed * dt;
      score = Math.floor(worldX / 10) * level;
      speed = SPEED_BASE + level * 18;
      spawnTimer += speed * dt;
      if (spawnTimer > 220 + Math.random() * 120) { spawnTimer = 0; spawnPattern(worldX + 880); }
      for (const p of particles) { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; }
      particles.splice(0, particles.length, ...particles.filter((p) => p.life > 0));
      for (const obs of obstacles) {
        if (obs.type === "spike" || obs.type === "block") {
          const ox = obs.x - worldX;
          if (cube.x + cube.size - 4 > ox && cube.x + 4 < ox + obs.w && cube.y + cube.size - 4 > obs.y - obs.h && cube.y + 4 < obs.y) {
            explode(cube.x, cube.y); lives--; if (lives <= 0) { dead = true; return; }
            cube.y = floorY - cube.size; cube.vy = 0; cube.onGround = true; cube.angle = 0;
            worldX = Math.max(0, worldX - 200);
            spawnTimer = 0;
          }
        }
      }
      obstacles.splice(0, obstacles.length, ...obstacles.filter((o) => o.x - worldX > -200));
      if (worldX > level * 2000) level++;
    },
    draw(ctx, canvas) {
      const colors = ["#0a000f", "#05001a", "#0a0020"];
      ctx.fillStyle = colors[level % colors.length] || "#0a000f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,0,255,0.07)";
      ctx.lineWidth = 1;
      const gridOff = worldX % 60;
      for (let x = -gridOff; x < canvas.width; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
      ctx.fillStyle = "#1a0030";
      ctx.shadowColor = "#aa00ff";
      ctx.shadowBlur = 10;
      ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
      ctx.fillStyle = "#cc00ff";
      ctx.fillRect(0, floorY, canvas.width, 3);
      for (const obs of obstacles) {
        const ox = obs.x - worldX;
        if (ox > -60 && ox < canvas.width + 60) {
          if (obs.type === "spike") {
            ctx.fillStyle = "#ff0066";
            ctx.shadowColor = "#ff0066";
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.moveTo(ox + obs.w / 2, obs.y - obs.h);
            ctx.lineTo(ox + obs.w, obs.y);
            ctx.lineTo(ox, obs.y);
            ctx.closePath();
            ctx.fill();
          } else if (obs.type === "block") {
            ctx.fillStyle = "#0088ff";
            ctx.shadowColor = "#0088ff";
            ctx.shadowBlur = 10;
            ctx.fillRect(ox, obs.y - obs.h, obs.w, obs.h);
            ctx.strokeStyle = "#44aaff";
            ctx.lineWidth = 2;
            ctx.strokeRect(ox + 2, obs.y - obs.h + 2, obs.w - 4, obs.h - 4);
          } else if (obs.type === "orb") {
            ctx.fillStyle = "#ffdd00";
            ctx.shadowColor = "#ffdd00";
            ctx.shadowBlur = 16;
            ctx.beginPath();
            ctx.arc(ox + obs.w / 2, obs.y + obs.h / 2, obs.w / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      for (const p of particles) {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.life / 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.save();
      ctx.translate(cube.x + cube.size / 2, cube.y + cube.size / 2);
      ctx.rotate(cube.angle);
      ctx.fillStyle = "#aa00ff";
      ctx.shadowColor = "#ff00ff";
      ctx.shadowBlur = 18;
      ctx.fillRect(-cube.size / 2, -cube.size / 2, cube.size, cube.size);
      ctx.strokeStyle = "#ff88ff";
      ctx.lineWidth = 2;
      ctx.shadowBlur = 0;
      ctx.strokeRect(-cube.size / 2 + 3, -cube.size / 2 + 3, cube.size - 6, cube.size - 6);
      ctx.restore();
      ctx.shadowBlur = 0;
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => dead,
  };
}

// ========= EDUCATIONAL MATH QUEST =========
function createMathQuestGame(): GameEngine {
  let score = 0, lives = 3, level = 1, dead = false;
  let question = "", answer = 0, choices: number[] = [], selected = -1, feedback = "";
  let feedbackTimer = 0, nextTimer = 0, waiting = false;
  let streak = 0;
  const lastKeys = new Set<string>();

  function genQuestion(lv: number) {
    const ops = lv <= 2 ? ["+", "-"] : lv <= 4 ? ["+", "-", "×"] : ["+", "-", "×", "÷"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a: number, b: number, ans: number;
    if (op === "+") { a = Math.floor(Math.random() * (10 * lv)); b = Math.floor(Math.random() * (10 * lv)); ans = a + b; }
    else if (op === "-") { a = Math.floor(Math.random() * (10 * lv)) + 5; b = Math.floor(Math.random() * a); ans = a - b; }
    else if (op === "×") { a = Math.floor(Math.random() * (3 * lv)) + 1; b = Math.floor(Math.random() * 12) + 1; ans = a * b; }
    else { a = (Math.floor(Math.random() * 10) + 1) * (b = Math.floor(Math.random() * 10) + 1); ans = a / b; }
    question = `${a} ${op} ${b} = ?`;
    answer = ans;
    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const w = ans + (Math.floor(Math.random() * 10) - 5);
      if (w !== ans) wrongs.add(w);
    }
    choices = [ans, ...wrongs].sort(() => Math.random() - 0.5);
    selected = -1; feedback = ""; waiting = false;
  }

  return {
    init() { score = 0; lives = 3; level = 1; dead = false; streak = 0; genQuestion(1); },
    update(dt, keys) {
      if (dead) return;
      if (waiting) {
        nextTimer -= dt;
        if (nextTimer <= 0) { if (dead) return; genQuestion(level); }
        return;
      }
      ["1","2","3","4"].forEach((k, i) => {
        if (keys.has(k) && !lastKeys.has(k)) {
          if (choices[i] !== undefined) {
            selected = i;
            if (choices[i] === answer) {
              streak++;
              score += 100 * level + streak * 10;
              feedback = "CORRECT! +" + (100 * level + streak * 10);
              if (score > level * 500) level = Math.floor(score / 500) + 1;
            } else {
              streak = 0; lives--;
              feedback = `WRONG! Answer: ${answer}`;
              if (lives <= 0) dead = true;
            }
            waiting = true; nextTimer = 1.8;
          }
        }
      });
      lastKeys.clear(); keys.forEach((k) => lastKeys.add(k));
      feedbackTimer += dt;
    },
    draw(ctx, canvas) {
      ctx.fillStyle = "#04040f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      ctx.textAlign = "center";
      ctx.fillStyle = "#00ffff";
      ctx.font = "12px 'Press Start 2P'";
      ctx.shadowColor = "#00ffff";
      ctx.shadowBlur = 10;
      ctx.fillText("MATH QUEST", cx, 50);
      ctx.fillStyle = "#ffff00";
      ctx.font = `${Math.min(32, 800 / question.length)}px 'Press Start 2P'`;
      ctx.shadowColor = "#ffff00";
      ctx.shadowBlur = 16;
      ctx.fillText(question, cx, 160);
      choices.forEach((c, i) => {
        const x = i < 2 ? cx - 180 : cx + 20;
        const y = i % 2 === 0 ? 240 : 320;
        const isSelected = selected === i;
        const isCorrect = c === answer;
        ctx.fillStyle = waiting ? (isCorrect ? "#00aa44" : isSelected ? "#aa0000" : "#1a1a3a") : "#1a1a3a";
        ctx.shadowColor = waiting && isCorrect ? "#00ff88" : "#aa00ff";
        ctx.shadowBlur = 10;
        ctx.fillRect(x, y, 160, 56);
        ctx.strokeStyle = waiting && isCorrect ? "#00ff88" : "#aa00ff";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, 160, 56);
        ctx.fillStyle = "#fff";
        ctx.font = "10px 'Press Start 2P'";
        ctx.shadowBlur = 0;
        ctx.fillText(`[${i + 1}] ${c}`, x + 80, y + 33);
      });
      if (feedback) {
        ctx.font = "11px 'Press Start 2P'";
        ctx.fillStyle = feedback.startsWith("C") ? "#00ff88" : "#ff3030";
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 12;
        ctx.fillText(feedback, cx, 420);
      }
      ctx.fillStyle = "#888";
      ctx.font = "8px 'Press Start 2P'";
      ctx.shadowBlur = 0;
      ctx.fillText("PRESS 1 2 3 4 TO ANSWER", cx, 470);
      if (streak > 1) {
        ctx.fillStyle = "#ffdd00";
        ctx.shadowColor = "#ffdd00";
        ctx.shadowBlur = 8;
        ctx.fillText(`STREAK: ${streak}x`, cx, 490);
      }
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => dead,
  };
}

// ========= ELITE RACING ENGINE v2 =========
type RacingVariant = "circuit" | "drift" | "space" | "highway";
function createRacingGame(variant: RacingVariant = "circuit"): GameEngine {
  const CARS_DEF = [
    { name: "VIPER",   color: "#ff0066", trail: "#ff006644", topSpeed: 360, accel: 200, handling: 0.055, grip: 0.88 },
    { name: "PHANTOM", color: "#00ffff", trail: "#00ffff44", topSpeed: 300, accel: 250, handling: 0.08,  grip: 0.92 },
    { name: "CRUSHER", color: "#ffdd00", trail: "#ffdd0044", topSpeed: 240, accel: 310, handling: 0.11,  grip: 0.82 },
  ];
  const TRACK_CFGS: Record<RacingVariant, { name: string; bg: string; road: string; border: string; wps: [number,number][] }> = {
    circuit: { name:"NEON CITY CIRCUIT", bg:"#02020f", road:"#1a1a4a", border:"#00ffff",
      wps:[[400,500],[600,480],[720,400],[740,270],[680,150],[540,90],[380,80],[220,120],[130,240],[120,380],[200,480],[320,510],[400,500]] },
    drift:   { name:"DRIFT KING ARENA",   bg:"#0a0500", road:"#2a1a00", border:"#ff8800",
      wps:[[400,500],[680,450],[760,320],[700,160],[540,80],[340,100],[160,200],[100,360],[200,480],[400,500]] },
    space:   { name:"SPACE CIRCUIT ZERO-G", bg:"#000010", road:"#0a0a2a", border:"#aa00ff",
      wps:[[400,520],[700,460],[780,300],[700,140],[500,60],[300,60],[140,160],[80,320],[160,480],[400,520]] },
    highway: { name:"CYBER HIGHWAY",      bg:"#050510", road:"#111130", border:"#00ff88",
      wps:[[400,520],[400,420],[400,320],[400,220],[400,120],[400,60],[400,520]] },
  };
  const cfg = TRACK_CFGS[variant], TRACK = cfg.wps, RW = 70, LAPS = 3;
  type Car = { x:number;y:number;angle:number;vx:number;vy:number;speed:number;wpIdx:number;lap:number;lapTime:number;carDef:typeof CARS_DEF[0];isPlayer:boolean;trail:[number,number][];finished:boolean };
  let phase:"select"|"countdown"|"race"|"finish" = "select";
  let selCar = 1, cars:Car[] = [], player!:Car, countdown = 3, cdTimer = 0, raceTime = 0;
  let score = 0, lives = 3, level = 1, prevKeys = new Set<string>(), finishOrder:Car[] = [];
  function makeCar(wpIdx:number, offX:number, def:typeof CARS_DEF[0], isPlayer:boolean):Car {
    const wp=TRACK[wpIdx], nxt=TRACK[(wpIdx+1)%TRACK.length], dx=nxt[0]-wp[0], dy=nxt[1]-wp[1], len=Math.hypot(dx,dy)||1;
    return {x:wp[0]+(-dy/len)*offX, y:wp[1]+(dx/len)*offX, angle:Math.atan2(dy,dx), vx:0,vy:0,speed:0, wpIdx,lap:0,lapTime:0,carDef:def,isPlayer,trail:[],finished:false};
  }
  function initRace() {
    const def=CARS_DEF[selCar], ais=CARS_DEF.filter((_,i)=>i!==selCar);
    player=makeCar(0,0,def,true);
    cars=[player, makeCar(0,-30,ais[0]||CARS_DEF[0],false), makeCar(0,30,ais[1]||CARS_DEF[1],false), makeCar(TRACK.length-3,0,CARS_DEF[2],false)];
    finishOrder=[]; raceTime=0;
  }
  function updateCar(c:Car, dt:number, keys:Set<string>) {
    let throttle=0, steer=0;
    if (c.isPlayer) {
      if (keys.has("ArrowUp")||keys.has("w")) throttle=1;
      if (keys.has("ArrowDown")||keys.has("s")) throttle=-0.5;
      if (keys.has("ArrowLeft")||keys.has("a")) steer=-1;
      if (keys.has("ArrowRight")||keys.has("d")) steer=1;
    } else {
      const tgt=TRACK[c.wpIdx%TRACK.length], dx=tgt[0]-c.x, dy=tgt[1]-c.y;
      let ad=Math.atan2(dy,dx)-c.angle;
      while(ad>Math.PI)ad-=Math.PI*2; while(ad<-Math.PI)ad+=Math.PI*2;
      steer=Math.max(-1,Math.min(1,ad*3)); throttle=Math.hypot(dx,dy)>20?1:0;
      if (Math.hypot(dx,dy)<45) c.wpIdx=(c.wpIdx+1)%TRACK.length;
    }
    c.angle+=steer*c.carDef.handling*(c.speed*0.006+0.3);
    const fx=Math.cos(c.angle), fy=Math.sin(c.angle);
    if (throttle>0) c.speed=Math.min(c.carDef.topSpeed, c.speed+c.carDef.accel*dt*throttle);
    else if (throttle<0) c.speed=Math.max(-60, c.speed+c.carDef.accel*dt*throttle);
    else c.speed*=(1-dt*2.5);
    c.vx=c.vx*c.carDef.grip+fx*c.speed*(1-c.carDef.grip);
    c.vy=c.vy*c.carDef.grip+fy*c.speed*(1-c.carDef.grip);
    c.x+=c.vx*dt; c.y+=c.vy*dt;
    c.trail.push([c.x,c.y]); if(c.trail.length>18)c.trail.shift();
    c.lapTime+=dt;
    if (c.isPlayer) {
      const tgt=TRACK[c.wpIdx%TRACK.length];
      if (Math.hypot(tgt[0]-c.x,tgt[1]-c.y)<55) {
        if (c.wpIdx%TRACK.length===TRACK.length-1) { c.lap++; c.lapTime=0; if(c.lap>=LAPS&&!c.finished){c.finished=true;finishOrder.push(c);} }
        c.wpIdx++;
      }
    }
    c.x=Math.max(20,Math.min(780,c.x)); c.y=Math.max(20,Math.min(540,c.y));
  }
  function rank() { const pd=player.lap*TRACK.length+player.wpIdx; let r=1; for(const c of cars){if(!c.isPlayer){const d=c.lap*TRACK.length+c.wpIdx;if(d>pd)r++;}} return r; }
  return {
    init() { phase="select"; selCar=1; prevKeys=new Set(); },
    update(dt, keys) {
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if (phase==="select") {
        if (pressed("a")||pressed("ArrowLeft")) selCar=(selCar+2)%3;
        if (pressed("d")||pressed("ArrowRight")) selCar=(selCar+1)%3;
        if (pressed(" ")||pressed("Enter")) { initRace(); phase="countdown"; countdown=3; cdTimer=0; }
      } else if (phase==="countdown") {
        cdTimer+=dt; if(cdTimer>=1){cdTimer=0;countdown--;} if(countdown<=0)phase="race";
        for(const c of cars.filter(c=>!c.isPlayer))updateCar(c,dt*0.3,keys);
      } else if (phase==="race") {
        raceTime+=dt; for(const c of cars)updateCar(c,dt,keys);
        for(const c of cars.filter(c=>!c.isPlayer)){if(c.lap>=LAPS&&!c.finished){c.finished=true;finishOrder.push(c);}}
        score=Math.max(0,(4-rank())*1000+Math.floor(raceTime*10)); level=player.lap+1;
        if (player.finished||(finishOrder.length>=3&&!player.finished)){if(!player.finished)finishOrder.push(player);phase="finish";}
      } else if (phase==="finish") {
        if (pressed(" ")||pressed("Enter")) phase="select";
      }
      prevKeys=new Set(keys);
    },
    draw(ctx, canvas) {
      const W=canvas.width, H=canvas.height;
      ctx.fillStyle=cfg.bg; ctx.fillRect(0,0,W,H);
      for(let i=0;i<80;i++){ctx.fillStyle=`rgba(255,255,255,${0.15+(i%3)*0.1})`;ctx.fillRect((i*137)%W,(i*97)%H,1,1);}
      if (phase==="select") {
        ctx.textAlign="center"; ctx.fillStyle=cfg.border; ctx.shadowColor=cfg.border; ctx.shadowBlur=20;
        ctx.font="bold 16px 'Press Start 2P'"; ctx.fillText("SELECT YOUR CAR",W/2,55);
        ctx.font="8px 'Press Start 2P'"; ctx.shadowBlur=0; ctx.fillStyle="#888";
        ctx.fillText("◄ ► CHOOSE   SPACE/ENTER TO RACE",W/2,75);
        ctx.fillStyle="#555"; ctx.fillText("TRACK: "+cfg.name,W/2,92);
        CARS_DEF.forEach((car,i)=>{
          const bx=130+i*200, by=130, sel=i===selCar;
          ctx.fillStyle=sel?car.color+"22":"#0a0a20"; ctx.shadowColor=sel?car.color:"transparent"; ctx.shadowBlur=sel?20:0;
          ctx.fillRect(bx-80,by,160,230); ctx.strokeStyle=sel?car.color:"#222244"; ctx.lineWidth=sel?3:1; ctx.strokeRect(bx-80,by,160,230);
          ctx.save(); ctx.translate(bx,by+85);
          ctx.fillStyle=car.color; ctx.shadowColor=car.color; ctx.shadowBlur=18;
          ctx.fillRect(-20,-38,40,76); ctx.fillStyle="#ffffff22"; ctx.shadowBlur=0; ctx.fillRect(-14,-26,28,22);
          ctx.fillStyle=car.color+"cc"; ctx.fillRect(-18,32,13,10); ctx.fillRect(5,32,13,10); ctx.fillRect(-18,-46,13,10); ctx.fillRect(5,-46,13,10);
          ctx.restore();
          ctx.shadowBlur=0; ctx.fillStyle=sel?car.color:"#aaaacc"; ctx.font="9px 'Press Start 2P'"; ctx.textAlign="center";
          ctx.fillText(car.name,bx,by+148);
          const statY=by+165; ctx.fillStyle="#777"; ctx.font="7px 'Press Start 2P'";
          ["SPD","ACC","HND"].forEach((label,si)=>{
            const val=[car.topSpeed/3.6,car.accel/3.1,car.handling*900][si];
            ctx.fillStyle="#555"; ctx.fillRect(bx-55,statY+si*20,110,12);
            ctx.fillStyle=car.color; ctx.fillRect(bx-55,statY+si*20,Math.round(val/1.1),12);
            ctx.fillStyle="#fff"; ctx.fillText(label,bx-45,statY+si*20+9);
          });
          if(sel){ctx.fillStyle=car.color;ctx.font="7px 'Press Start 2P'";ctx.fillText("▶ SELECTED ◀",bx,by+228);}
        });
        return;
      }
      // Track
      ctx.lineJoin="round"; ctx.lineCap="round";
      ctx.strokeStyle=cfg.road; ctx.lineWidth=RW+22; ctx.shadowBlur=0;
      ctx.beginPath(); ctx.moveTo(TRACK[0][0],TRACK[0][1]);
      for(let i=1;i<TRACK.length;i++)ctx.lineTo(TRACK[i][0],TRACK[i][1]); ctx.stroke();
      ctx.strokeStyle=cfg.road; ctx.lineWidth=RW;
      ctx.beginPath(); ctx.moveTo(TRACK[0][0],TRACK[0][1]);
      for(let i=1;i<TRACK.length;i++)ctx.lineTo(TRACK[i][0],TRACK[i][1]); ctx.stroke();
      for(const side of[-1,1]){
        ctx.strokeStyle=cfg.border; ctx.lineWidth=3; ctx.shadowColor=cfg.border; ctx.shadowBlur=8;
        ctx.beginPath();
        for(let i=0;i<TRACK.length-1;i++){
          const dx=TRACK[i+1][0]-TRACK[i][0],dy=TRACK[i+1][1]-TRACK[i][1],len=Math.hypot(dx,dy)||1;
          const nx=-dy/len,ny=dx/len,px=TRACK[i][0]+nx*RW*0.52*side,py=TRACK[i][1]+ny*RW*0.52*side;
          if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py);
        }
        ctx.stroke();
      }
      ctx.setLineDash([18,14]); ctx.strokeStyle="rgba(255,255,255,0.15)"; ctx.lineWidth=2; ctx.shadowBlur=0;
      ctx.beginPath(); ctx.moveTo(TRACK[0][0],TRACK[0][1]);
      for(let i=1;i<TRACK.length;i++)ctx.lineTo(TRACK[i][0],TRACK[i][1]); ctx.stroke(); ctx.setLineDash([]);
      const sf=TRACK[0],sfn=TRACK[1],sdx=sfn[0]-sf[0],sdy=sfn[1]-sf[1],sl=Math.hypot(sdx,sdy)||1;
      ctx.strokeStyle="#ffffff"; ctx.shadowColor="#ffffff"; ctx.shadowBlur=10; ctx.lineWidth=4;
      ctx.beginPath(); ctx.moveTo(sf[0]-sdy/sl*40,sf[1]+sdx/sl*40); ctx.lineTo(sf[0]+sdy/sl*40,sf[1]-sdx/sl*40); ctx.stroke();
      // Cars
      for(const car of cars){
        if(car.trail.length>1){
          ctx.strokeStyle=car.carDef.trail; ctx.lineWidth=5; ctx.shadowBlur=0;
          ctx.beginPath(); ctx.moveTo(car.trail[0][0],car.trail[0][1]);
          for(const pt of car.trail)ctx.lineTo(pt[0],pt[1]); ctx.stroke();
        }
        ctx.save(); ctx.translate(car.x,car.y); ctx.rotate(car.angle+Math.PI/2);
        ctx.fillStyle=car.carDef.color; ctx.shadowColor=car.carDef.color; ctx.shadowBlur=car.isPlayer?20:8;
        ctx.fillRect(-10,-18,20,36);
        ctx.fillStyle="#ffffff22"; ctx.shadowBlur=0; ctx.fillRect(-7,-12,14,10);
        ctx.fillStyle=car.carDef.color+"cc"; ctx.fillRect(-9,14,7,6); ctx.fillRect(2,14,7,6); ctx.fillRect(-9,-22,7,6); ctx.fillRect(2,-22,7,6);
        if(car.isPlayer){ctx.strokeStyle="#fff";ctx.lineWidth=1.5;ctx.shadowBlur=0;ctx.strokeRect(-10,-18,20,36);}
        ctx.restore();
      }
      ctx.shadowBlur=0;
      if(phase==="countdown"){
        ctx.textAlign="center"; ctx.font=`bold 64px 'Press Start 2P'`;
        const ct=countdown>0?String(countdown):"GO!"; ctx.fillStyle=countdown>0?"#ffdd00":"#00ff88"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=40;
        ctx.fillText(ct,W/2,H/2+22); ctx.shadowBlur=0;
      }
      if(phase==="race"||phase==="finish"){
        const spd=Math.abs(Math.round(player.speed)), rk=rank();
        ctx.fillStyle="#000033cc"; ctx.fillRect(10,10,165,84);
        ctx.fillStyle=cfg.border; ctx.shadowColor=cfg.border; ctx.shadowBlur=8; ctx.textAlign="left";
        ctx.font="8px 'Press Start 2P'"; ctx.fillText("SPEED",20,28); ctx.font="bold 22px 'Press Start 2P'"; ctx.fillText(`${spd}`,20,55);
        ctx.font="8px 'Press Start 2P'"; ctx.shadowBlur=0; ctx.fillStyle="#aaa"; ctx.fillText(`LAP ${Math.min(player.lap+1,LAPS)}/${LAPS}`,20,78);
        const rkS=["1ST","2ND","3RD","4TH"][rk-1]||`${rk}TH`;
        ctx.fillStyle="#000033cc"; ctx.fillRect(W-175,10,165,84); ctx.textAlign="right";
        ctx.fillStyle=rk===1?"#ffdd00":rk===2?"#ccccff":rk===3?"#ff8833":"#ff4444"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=12;
        ctx.font=`bold 28px 'Press Start 2P'`; ctx.fillText(rkS,W-20,50); ctx.shadowBlur=0;
        ctx.fillStyle="#888"; ctx.font="8px 'Press Start 2P'"; ctx.fillText(`${raceTime.toFixed(1)}s`,W-20,76);
        const mm={x:W-100,y:H-100,w:88,h:88};
        ctx.fillStyle="#000033aa"; ctx.fillRect(mm.x,mm.y,mm.w,mm.h);
        const tfx=(v:number)=>mm.x+(v/W)*mm.w, tfy=(v:number)=>mm.y+(v/H)*mm.h;
        ctx.strokeStyle=cfg.border+"66"; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(tfx(TRACK[0][0]),tfy(TRACK[0][1]));
        for(const wp of TRACK)ctx.lineTo(tfx(wp[0]),tfy(wp[1])); ctx.stroke();
        for(const c of cars){ ctx.fillStyle=c.isPlayer?"#ffffff":c.carDef.color; ctx.beginPath(); ctx.arc(tfx(c.x),tfy(c.y),c.isPlayer?4:3,0,Math.PI*2); ctx.fill(); }
      }
      if(phase==="finish"){
        ctx.fillStyle="rgba(0,0,0,0.75)"; ctx.fillRect(0,0,W,H);
        const rk=finishOrder.indexOf(player)+1;
        const cl=rk===1?"#ffdd00":rk===2?"#ccccff":rk===3?"#ff8833":"#ff4444";
        ctx.textAlign="center"; ctx.fillStyle=cl; ctx.shadowColor=cl; ctx.shadowBlur=30;
        ctx.font="bold 32px 'Press Start 2P'"; ctx.fillText(["🏆 1ST PLACE!","2ND PLACE","3RD PLACE","4TH PLACE"][rk-1]||"FINISHED",W/2,H/2-30);
        ctx.shadowBlur=0; ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'";
        ctx.fillText(`TIME: ${raceTime.toFixed(2)}s    SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
        ctx.fillStyle="#888"; ctx.fillText("SPACE / ENTER TO PLAY AGAIN",W/2,H/2+55);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>false,
  };
}

// ========= FIGHTING ENGINE =========
type FightingVariant = "street"|"neon"|"robot"|"ninja"|"arena";
function createFightingGame(v: FightingVariant = "street"): GameEngine {
  const PALETTES:Record<FightingVariant,string> = { street:"#0a0005", neon:"#000010", robot:"#050a0a", ninja:"#000500", arena:"#0a0500" };
  const FIGHTERS = [
    { name:"STORM",  color:"#00ffff", hitColor:"#ffffff", speed:5.2, power:8, defense:6, special:"LIGHTNING RUSH",  w:36, h:64 },
    { name:"BLAZE",  color:"#ff4400", hitColor:"#ffaa00", speed:7.0, power:6, defense:5, special:"INFERNO KICK",    w:34, h:60 },
    { name:"FROST",  color:"#8888ff", hitColor:"#ccccff", speed:4.0, power:9, defense:8, special:"ICE SLAM",        w:40, h:66 },
    { name:"VOLT",   color:"#ffff00", hitColor:"#ffffa0", speed:8.2, power:7, defense:4, special:"THUNDER SPIN",    w:32, h:58 },
  ];
  type Ftr = { x:number;y:number;vx:number;vy:number;hp:number;maxHp:number;face:1|-1;state:string;stTimer:number;
    spMeter:number;def:typeof FIGHTERS[0];isPlayer:boolean;comboTimer:number;comboHits:number;round:number; };
  const FLOOR = 400, GRAV = 1400;
  let phase:"select"|"fight"|"ko"|"win"|"roundbreak" = "select";
  let selPlayer = 0, selCpu = 2;
  let p!:Ftr, cpu!:Ftr, round=1, roundTimer=0, koTimer=0, winTimer=0;
  let score=0, lives=3, level=1, prevKeys=new Set<string>();
  let bgParticles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  function makeFtr(def:typeof FIGHTERS[0], x:number, face:1|-1, isPlayer:boolean):Ftr {
    return {x,y:FLOOR-def.h,vx:0,vy:0,hp:200,maxHp:200,face,state:"idle",stTimer:0,spMeter:0,def,isPlayer,comboTimer:0,comboHits:0,round:0};
  }
  function initFight() {
    p=makeFtr(FIGHTERS[selPlayer],180,1,true);
    cpu=makeFtr(FIGHTERS[selCpu],620,-1,false);
    roundTimer=90; koTimer=0; winTimer=0; phase="fight";
  }
  function hitEffect(target:Ftr, dmg:number) {
    target.hp=Math.max(0,target.hp-dmg);
    target.state="hurt"; target.stTimer=0.15;
    target.vx=(target.isPlayer?1:-1)*80;
    for(let i=0;i<8;i++) bgParticles.push({x:target.x,y:target.y+target.def.h/2,vx:(Math.random()-0.5)*200,vy:-Math.random()*150-50,color:target.def.hitColor,life:0.5});
  }
  function aiUpdate(dt:number) {
    if(cpu.state==="hurt"||cpu.state==="attack"||cpu.state==="kick"||cpu.state==="special")return;
    const dist=Math.abs(p.x-cpu.x);
    cpu.face=p.x<cpu.x?-1:1;
    if(dist>160) cpu.vx=-cpu.def.speed*2.5*cpu.face;
    else if(dist<80) cpu.vx=cpu.def.speed*1.5*cpu.face;
    else cpu.vx=0;
    if(dist<130&&Math.random()<0.018){cpu.state=Math.random()<0.5?"attack":"kick";cpu.stTimer=0.35;}
    if(dist<160&&cpu.spMeter>=100&&Math.random()<0.008){cpu.state="special";cpu.stTimer=0.6;cpu.spMeter=0;}
  }
  return {
    init(){phase="select";selPlayer=0;selCpu=2;prevKeys=new Set();bgParticles=[];round=1;},
    update(dt,keys){
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(phase==="select"){
        if(pressed("ArrowLeft")||pressed("a"))selPlayer=(selPlayer+3)%4;
        if(pressed("ArrowRight")||pressed("d"))selPlayer=(selPlayer+1)%4;
        if(pressed("ArrowUp")||pressed("w"))selCpu=(selCpu+3)%4;
        if(pressed("ArrowDown")||pressed("s"))selCpu=(selCpu+1)%4;
        if(pressed(" ")||pressed("Enter"))initFight();
      } else if(phase==="roundbreak"){
        roundTimer-=dt; if(roundTimer<=0)initFight();
      } else if(phase==="fight"){
        roundTimer-=dt;
        for(const f of[p,cpu]){
          f.stTimer-=dt; if(f.stTimer<0)f.stTimer=0;
          if(f.state!=="idle"&&f.state!=="walk"&&f.stTimer<=0)f.state="idle";
          f.comboTimer-=dt; if(f.comboTimer<0){f.comboTimer=0;f.comboHits=0;}
          if(f.state!=="hurt"&&f.state!=="attack"&&f.state!=="kick"&&f.state!=="special"){
            f.x+=f.vx*dt; if(f.vx!==0&&f.state==="idle")f.state="walk";
            if(f.vx===0&&f.state==="walk")f.state="idle";
          }
          if(f.y<FLOOR-f.def.h){f.vy+=GRAV*dt;f.y+=f.vy*dt;}
          if(f.y>=FLOOR-f.def.h){f.y=FLOOR-f.def.h;f.vy=0;}
          f.x=Math.max(60,Math.min(740-f.def.w,f.x));
          f.spMeter=Math.min(100,f.spMeter+dt*4);
        }
        if(p.state!=="hurt"){
          p.face=(cpu.x>p.x?1:-1) as 1|-1;
          if(p.state!=="attack"&&p.state!=="kick"&&p.state!=="special"){
            if(keys.has("ArrowLeft")||keys.has("a")){p.vx=-p.def.speed*2.5;p.face=-1;}
            else if(keys.has("ArrowRight")||keys.has("d")){p.vx=p.def.speed*2.5;p.face=1;}
            else p.vx=0;
            if((pressed("ArrowUp")||pressed("w"))&&p.y>=FLOOR-p.def.h){p.vy=-620;}
          }
          if(pressed("z")&&p.state!=="attack"){p.state="attack";p.stTimer=0.3;p.comboHits++;p.comboTimer=0.5;}
          if(pressed("x")&&p.state!=="kick"){p.state="kick";p.stTimer=0.38;p.comboHits++;p.comboTimer=0.5;}
          if(pressed("c")&&p.spMeter>=100){p.state="special";p.stTimer=0.6;p.spMeter=0;}
        }
        aiUpdate(dt);
        const dist=Math.abs(p.x+p.def.w/2-(cpu.x+cpu.def.w/2));
        if(dist<95){
          if((p.state==="attack"||p.state==="kick")&&p.stTimer>0.1&&p.stTimer<0.28&&cpu.state!=="hurt"){
            const dmg=p.state==="attack"?12+p.def.power:16+p.def.power;
            hitEffect(cpu,Math.max(5,dmg-cpu.def.defense*0.5));
            p.spMeter=Math.min(100,p.spMeter+15);
          }
          if(p.state==="special"&&p.stTimer>0.3&&cpu.state!=="hurt"){hitEffect(cpu,35+p.def.power*2);p.stTimer=-1;}
          if((cpu.state==="attack"||cpu.state==="kick")&&cpu.stTimer>0.1&&cpu.stTimer<0.28&&p.state!=="hurt"){
            const dmg=cpu.state==="attack"?10+cpu.def.power:14+cpu.def.power;
            hitEffect(p,Math.max(4,dmg-p.def.defense*0.5));
          }
          if(cpu.state==="special"&&cpu.stTimer>0.3&&p.state!=="hurt"){hitEffect(p,32+cpu.def.power*2);cpu.stTimer=-1;}
        }
        for(const bp of bgParticles){bp.x+=bp.vx*dt;bp.y+=bp.vy*dt;bp.vy+=300*dt;bp.life-=dt;}
        bgParticles=bgParticles.filter(b=>b.life>0);
        if(p.hp<=0||cpu.hp<=0){koTimer+=dt;if(koTimer>=0.5)phase="ko";}
        if(roundTimer<=0&&p.hp>0&&cpu.hp>0){phase="ko";koTimer=0;}
        score=Math.max(0,Math.floor((200-cpu.hp)*500+(p.hp*2)+(roundTimer*10)));
        level=round;
      } else if(phase==="ko"){
        koTimer+=dt;
        if(koTimer>=2.5){
          if(p.hp<=0){lives--;round++;if(lives<=0){phase="win";}else{phase="roundbreak";roundTimer=2;}}
          else if(cpu.hp<=0){round++;if(round>3){phase="win";}else{phase="roundbreak";roundTimer=2;}}
          else{phase="roundbreak";roundTimer=2;}
        }
      } else if(phase==="win"){
        winTimer+=dt;
        if((pressed(" ")||pressed("Enter"))&&winTimer>1)phase="select";
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      const bg=PALETTES[v]; ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
      // Arena floor
      const gradient=ctx.createLinearGradient(0,FLOOR-5,0,H);
      gradient.addColorStop(0,FIGHTERS[selPlayer].color+"66"); gradient.addColorStop(1,"#000000");
      ctx.fillStyle=gradient; ctx.fillRect(0,FLOOR-5,W,H-FLOOR+5);
      ctx.strokeStyle=FIGHTERS[selPlayer].color; ctx.lineWidth=3; ctx.shadowColor=FIGHTERS[selPlayer].color; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.moveTo(0,FLOOR-5); ctx.lineTo(W,FLOOR-5); ctx.stroke(); ctx.shadowBlur=0;
      // Particles
      for(const bp of bgParticles){ctx.fillStyle=bp.color;ctx.globalAlpha=bp.life*2;ctx.beginPath();ctx.arc(bp.x,bp.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      if(phase==="select"){
        ctx.textAlign="center"; ctx.fillStyle="#ffffff"; ctx.shadowColor="#ffffff"; ctx.shadowBlur=15;
        ctx.font="bold 16px 'Press Start 2P'"; ctx.fillText("SELECT YOUR FIGHTER",W/2,50); ctx.shadowBlur=0;
        ctx.fillStyle="#888"; ctx.font="8px 'Press Start 2P'";
        ctx.fillText("◄ ► PLAYER 1 (Z=PUNCH X=KICK C=SPECIAL)",W/2,70);
        ctx.fillText("▲ ▼ CPU FIGHTER",W/2,85);
        FIGHTERS.forEach((f,i)=>{
          const bx=90+i*155,by=110,sel1=i===selPlayer,sel2=i===selCpu;
          ctx.fillStyle=sel1?f.color+"22":sel2?"#111100":"#0a0a1a";
          ctx.fillRect(bx-65,by,130,240); ctx.strokeStyle=sel1?f.color:sel2?"#ffdd00":"#333355"; ctx.lineWidth=sel1||sel2?3:1; ctx.strokeRect(bx-65,by,130,240);
          ctx.save(); ctx.translate(bx,by+100);
          ctx.fillStyle=f.color; ctx.shadowColor=f.color; ctx.shadowBlur=16;
          ctx.fillRect(-13,-30,26,60); // body
          ctx.beginPath(); ctx.arc(0,-38,16,0,Math.PI*2); ctx.fill(); // head
          ctx.fillRect(-22,-20,8,22); ctx.fillRect(14,-20,8,22); // arms
          ctx.fillRect(-10,30,8,28); ctx.fillRect(2,30,8,28); // legs
          ctx.restore();
          ctx.shadowBlur=0; ctx.fillStyle=f.color; ctx.font="8px 'Press Start 2P'"; ctx.textAlign="center";
          ctx.fillText(f.name,bx,by+165); ctx.fillStyle="#777"; ctx.font="6px 'Press Start 2P'";
          ctx.fillText(`PWR:${f.power} SPD:${f.speed}`,bx,by+178);
          ctx.fillText(`DEF:${f.defense}`,bx,by+191);
          ctx.fillStyle="#555"; ctx.font="6px 'Press Start 2P'"; ctx.fillText(f.special,bx,by+205);
          if(sel1){ctx.fillStyle="#00ff88";ctx.fillText("P1",bx,by+220);}
          if(sel2){ctx.fillStyle="#ffdd00";ctx.fillText("CPU",bx,by+220);}
        });
        ctx.fillStyle="#00ff88"; ctx.font="9px 'Press Start 2P'"; ctx.textAlign="center";
        ctx.fillText("SPACE / ENTER TO FIGHT",W/2,400);
        return;
      }
      function drawFighter(f:Ftr) {
        ctx.save(); ctx.translate(f.x+f.def.w/2, f.y);
        ctx.scale(f.face,1);
        const animOffset=f.state==="walk"?Math.sin(Date.now()*0.015)*4:0;
        const isHurt=f.state==="hurt";
        const isAttack=f.state==="attack"||f.state==="special";
        ctx.fillStyle=isHurt?"#ffffff":f.def.color; ctx.shadowColor=isHurt?"#ffffff":f.def.color; ctx.shadowBlur=isHurt?30:14;
        const headY=-f.def.h+10; const bodyY=headY+32;
        ctx.beginPath(); ctx.arc(0,headY+16,16,0,Math.PI*2); ctx.fill(); // head
        ctx.fillRect(-13,bodyY,26,f.def.h/3); // torso
        const armAngle=isAttack?0.8:animOffset*0.05;
        ctx.save(); ctx.translate(-13,bodyY+4); ctx.rotate(armAngle); ctx.fillRect(-8,-5,8,24); ctx.restore();
        ctx.save(); ctx.translate(13,bodyY+4); ctx.rotate(-armAngle*0.5+(isAttack?-0.6:0)); ctx.fillRect(0,-5,8,24); ctx.restore();
        const legY=bodyY+f.def.h/3; const legAnim=f.state==="walk"?Math.sin(Date.now()*0.015)*10:0;
        ctx.save(); ctx.translate(-7,legY); ctx.rotate(legAnim*0.04); ctx.fillRect(-5,0,10,26); ctx.restore();
        ctx.save(); ctx.translate(7,legY); ctx.rotate(-legAnim*0.04); ctx.fillRect(-5,0,10,26); ctx.restore();
        if(isAttack){
          ctx.fillStyle=f.def.hitColor; ctx.shadowColor=f.def.hitColor; ctx.shadowBlur=20;
          ctx.beginPath(); ctx.arc(28,bodyY+8,14,0,Math.PI*2); ctx.fill();
        }
        ctx.restore();
      }
      if(phase!=="select"){drawFighter(p);drawFighter(cpu);}
      // HP bars
      if(phase==="fight"||phase==="ko"){
        const barW=280;
        [p,cpu].forEach((f,i)=>{
          const bx=i===0?30:W-30-barW, by=18;
          ctx.fillStyle="#111133"; ctx.fillRect(bx,by,barW,22);
          const pct=f.hp/f.maxHp;
          const hcol=pct>0.5?"#00ff88":pct>0.25?"#ffdd00":"#ff2244";
          ctx.fillStyle=hcol; ctx.shadowColor=hcol; ctx.shadowBlur=8; ctx.fillRect(bx,by,Math.round(barW*pct),22);
          ctx.strokeStyle="#ffffff44"; ctx.lineWidth=1; ctx.strokeRect(bx,by,barW,22); ctx.shadowBlur=0;
          ctx.fillStyle="#fff"; ctx.font="8px 'Press Start 2P'"; ctx.textAlign=i===0?"left":"right";
          ctx.fillText(`${f.def.name} ${Math.max(0,Math.round(f.hp))}hp`,i===0?bx+4:bx+barW-4,by+15);
          // Special meter
          ctx.fillStyle="#111133"; ctx.fillRect(bx,by+26,barW,8);
          ctx.fillStyle="#aa00ff"; ctx.shadowColor="#aa00ff"; ctx.shadowBlur=6;
          ctx.fillRect(bx,by+26,Math.round(barW*f.spMeter/100),8); ctx.shadowBlur=0;
        });
        ctx.textAlign="center"; ctx.fillStyle="#aaa"; ctx.font="8px 'Press Start 2P'";
        ctx.fillText(`ROUND ${round}   TIME ${Math.max(0,roundTimer).toFixed(1)}`,W/2,18);
      }
      if(phase==="ko"){
        ctx.fillStyle="rgba(0,0,0,0.6)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.font="bold 48px 'Press Start 2P'";
        const winner=p.hp<=0||roundTimer<=0?"#ff2244":"#00ff88";
        ctx.fillStyle=winner; ctx.shadowColor=winner; ctx.shadowBlur=30;
        ctx.fillText(roundTimer<=0?"TIME OUT!":"K.O.!",W/2,H/2); ctx.shadowBlur=0;
      }
      if(phase==="win"){
        ctx.fillStyle="rgba(0,0,0,0.8)"; ctx.fillRect(0,0,W,H);
        const wWin=p.hp>0;
        ctx.textAlign="center"; ctx.fillStyle=wWin?"#ffdd00":"#ff3333"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=30;
        ctx.font="bold 28px 'Press Start 2P'"; ctx.fillText(wWin?"YOU WIN! 🏆":"GAME OVER",W/2,H/2-20);
        ctx.shadowBlur=0; ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'";
        ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
        ctx.fillStyle="#888"; ctx.fillText("SPACE TO PLAY AGAIN",W/2,H/2+55);
      }
      if(phase==="roundbreak"){
        ctx.fillStyle="rgba(0,0,0,0.6)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=20;
        ctx.font="bold 22px 'Press Start 2P'"; ctx.fillText(`ROUND ${round}`,W/2,H/2); ctx.shadowBlur=0;
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>lives<=0&&phase==="win",
  };
}

// ========= TWIN-STICK SHOOTER =========
function createTwinStickGame(): GameEngine {
  type Enemy={x:number;y:number;vx:number;vy:number;hp:number;maxHp:number;type:number;shootTimer:number};
  type Bullet={x:number;y:number;vx:number;vy:number;player:boolean;dmg:number};
  type Particle={x:number;y:number;vx:number;vy:number;color:string;life:number;size:number};
  type Pickup={x:number;y:number;type:"health"|"ammo"|"shield";timer:number};
  let px=400,py=280,pvx=0,pvy=0,pHp=100,pMaxHp=100,pShield=0;
  let enemies:Enemy[]=[],bullets:Bullet[]=[],particles:Particle[]=[],pickups:Pickup[]=[];
  let score=0,lives=3,level=1,dead=false;
  let wave=0,waveTimer=0,shootCd=0,prevKeys=new Set<string>();
  let aimAngle=0, waveActive=false, waveDelay=0;
  function spawnWave(w:number){
    const count=4+w*2;
    for(let i=0;i<count;i++){
      const side=Math.floor(Math.random()*4);
      let ex=0,ey=0;
      if(side===0){ex=Math.random()*800;ey=-30;}
      else if(side===1){ex=830;ey=Math.random()*560;}
      else if(side===2){ex=Math.random()*800;ey=590;}
      else{ex=-30;ey=Math.random()*560;}
      const type=w<3?0:w<6?Math.floor(Math.random()*2):Math.floor(Math.random()*3);
      enemies.push({x:ex,y:ey,vx:0,vy:0,hp:[30,60,120][type]||30,maxHp:[30,60,120][type]||30,type,shootTimer:type>0?2:0});
    }
    waveActive=true;
  }
  function spawnExplosion(x:number,y:number,color:string,count=12){
    for(let i=0;i<count;i++){
      const a=Math.random()*Math.PI*2,s=50+Math.random()*150;
      particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,color,life:0.6+Math.random()*0.4,size:3+Math.random()*4});
    }
  }
  return {
    init(canvas){px=canvas.width/2;py=canvas.height/2;pvx=0;pvy=0;pHp=100;pMaxHp=100;pShield=0;enemies=[];bullets=[];particles=[];pickups=[];score=0;lives=3;level=1;dead=false;wave=0;waveTimer=0;waveActive=false;waveDelay=3;prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const speed=220;
      pvx=0;pvy=0;
      if(keys.has("a")||keys.has("ArrowLeft"))pvx=-speed;
      if(keys.has("d")||keys.has("ArrowRight"))pvx=speed;
      if(keys.has("w")||keys.has("ArrowUp"))pvy=-speed;
      if(keys.has("s")||keys.has("ArrowDown"))pvy=speed;
      if(pvx!==0&&pvy!==0){pvx*=0.707;pvy*=0.707;}
      px+=pvx*dt; py+=pvy*dt;
      px=Math.max(20,Math.min(780,px)); py=Math.max(20,Math.min(540,py));
      // Aim toward mouse-like direction using shift keys
      if(keys.has("j")||keys.has("4"))aimAngle=Math.PI;
      else if(keys.has("l")||keys.has("6"))aimAngle=0;
      else if(keys.has("i")||keys.has("8"))aimAngle=-Math.PI/2;
      else if(keys.has("k")||keys.has("5"))aimAngle=Math.PI/2;
      else if(keys.has("u"))aimAngle=-Math.PI*0.75;
      else if(keys.has("o"))aimAngle=-Math.PI*0.25;
      else if(keys.has("m"))aimAngle=Math.PI*0.75;
      else if(keys.has("."))aimAngle=Math.PI*0.25;
      // Auto-aim at nearest enemy
      if(enemies.length>0&&!keys.has("j")&&!keys.has("l")&&!keys.has("i")&&!keys.has("k")){
        let nearest=enemies[0],nDist=Infinity;
        for(const e of enemies){const d=Math.hypot(e.x-px,e.y-py);if(d<nDist){nDist=d;nearest=e;}}
        aimAngle=Math.atan2(nearest.y-py,nearest.x-px);
      }
      shootCd-=dt;
      if((keys.has(" ")||keys.has("z"))&&shootCd<=0){
        bullets.push({x:px,y:py,vx:Math.cos(aimAngle)*550,vy:Math.sin(aimAngle)*550,player:true,dmg:12+level*2});
        shootCd=0.12;
      }
      for(const b of bullets){b.x+=b.vx*dt;b.y+=b.vy*dt;}
      bullets=bullets.filter(b=>b.x>-20&&b.x<820&&b.y>-20&&b.y<580);
      for(const e of enemies){
        const dx=px-e.x,dy=py-e.y,dist=Math.hypot(dx,dy)||1;
        const spd=[90,70,50][e.type]||90;
        e.vx=dx/dist*spd; e.vy=dy/dist*spd;
        e.x+=e.vx*dt; e.y+=e.vy*dt;
        if(e.type>0){
          e.shootTimer-=dt;
          if(e.shootTimer<=0){
            e.shootTimer=[0,2.5,3.5][e.type]||2.5;
            const a=Math.atan2(dy,dx)+Math.PI;
            if(e.type===1)bullets.push({x:e.x,y:e.y,vx:Math.cos(a)*180,vy:Math.sin(a)*180,player:false,dmg:8});
            if(e.type===2)for(let i=0;i<8;i++){const ba=i/8*Math.PI*2;bullets.push({x:e.x,y:e.y,vx:Math.cos(ba)*140,vy:Math.sin(ba)*140,player:false,dmg:6});}
          }
        }
        if(Math.hypot(dx,dy)<30){pHp-=40*dt;spawnExplosion(e.x,e.y,["#ff4400","#aa0088","#ff0000"][e.type]||"#ff4400",4);}
        for(const b of bullets.filter(b=>b.player)){
          if(Math.hypot(b.x-e.x,b.y-e.y)<22){
            e.hp-=b.dmg;b.player=false;b.vx=0;b.vy=0;
            spawnExplosion(b.x,b.y,["#ff8800","#ff00ff","#ff0066"][e.type]||"#ff8800",6);
          }
        }
      }
      for(const b of bullets.filter(b=>!b.player)){
        if(Math.hypot(b.x-px,b.y-py)<18){
          const dmg=pShield>0?b.dmg*0.2:b.dmg;
          pHp-=dmg; b.vx=0;b.vy=0;
          spawnExplosion(px,py,"#ffffff",5);
        }
      }
      bullets=bullets.filter(b=>b.vx!==0||b.vy!==0);
      const deadEnemies=enemies.filter(e=>e.hp<=0);
      for(const e of deadEnemies){
        score+=[100,250,500][e.type]||100;
        spawnExplosion(e.x,e.y,["#ff4400","#aa00ff","#ff0066"][e.type]||"#ff4400");
        if(Math.random()<0.2)pickups.push({x:e.x,y:e.y,type:Math.random()<0.6?"health":"shield",timer:8});
      }
      enemies=enemies.filter(e=>e.hp>0);
      for(const pk of pickups){
        pk.timer-=dt;
        if(Math.hypot(pk.x-px,pk.y-py)<25){
          if(pk.type==="health")pHp=Math.min(pMaxHp,pHp+30);
          if(pk.type==="shield")pShield=Math.min(100,pShield+50);
          pk.timer=0;
        }
      }
      pickups=pickups.filter(pk=>pk.timer>0);
      pShield=Math.max(0,pShield-dt*8);
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.vx*=0.9;pt.vy*=0.9;pt.life-=dt;}
      particles=particles.filter(pt=>pt.life>0);
      if(pHp<=0){lives--;if(lives<=0)dead=true;else{pHp=pMaxHp;pShield=0;spawnExplosion(px,py,"#ffffff",20);}}
      if(!waveActive){
        waveDelay-=dt;
        if(waveDelay<=0){wave++;spawnWave(wave);waveActive=true;level=wave;}
      } else if(enemies.length===0){waveActive=false;waveDelay=3;score+=wave*200;}
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#02020a"; ctx.fillRect(0,0,W,H);
      // Grid
      ctx.strokeStyle="rgba(0,255,136,0.05)"; ctx.lineWidth=1;
      for(let x=0;x<W;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for(let y=0;y<H;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      // Particles
      for(const pt of particles){
        ctx.fillStyle=pt.color; ctx.globalAlpha=pt.life*1.5;
        ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.size,0,Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha=1;
      // Pickups
      for(const pk of pickups){
        ctx.fillStyle=pk.type==="health"?"#ff3333":"#aa00ff";
        ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=12;
        ctx.beginPath(); ctx.arc(pk.x,pk.y,10,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      }
      // Enemies
      const eCols=["#ff4400","#aa00ff","#ff0066"];
      for(const e of enemies){
        ctx.fillStyle=eCols[e.type]||eCols[0]; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=12;
        if(e.type===0){ctx.beginPath();ctx.moveTo(e.x,e.y-18);ctx.lineTo(e.x+15,e.y+15);ctx.lineTo(e.x-15,e.y+15);ctx.closePath();ctx.fill();}
        else if(e.type===1){ctx.fillRect(e.x-15,e.y-15,30,30);}
        else{ctx.beginPath();ctx.arc(e.x,e.y,20,0,Math.PI*2);ctx.fill();}
        ctx.fillStyle="#ff2222"; ctx.shadowBlur=0;
        ctx.fillRect(e.x-15,e.y-28,30,5);
        ctx.fillStyle=eCols[e.type]||eCols[0];
        ctx.fillRect(e.x-15,e.y-28,Math.round(30*e.hp/e.maxHp),5);
      }
      // Bullets
      for(const b of bullets){
        ctx.fillStyle=b.player?"#00ffff":"#ff4400"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=8;
        ctx.beginPath(); ctx.arc(b.x,b.y,b.player?5:4,0,Math.PI*2); ctx.fill();
      }
      // Player
      ctx.save(); ctx.translate(px,py);
      if(pShield>0){ctx.strokeStyle="#aa00ff";ctx.shadowColor="#aa00ff";ctx.shadowBlur=20+pShield*0.3;ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,26,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0;}
      ctx.fillStyle="#00ffff"; ctx.shadowColor="#00ffff"; ctx.shadowBlur=18;
      ctx.beginPath(); ctx.moveTo(0,-16); ctx.lineTo(14,12); ctx.lineTo(-14,12); ctx.closePath(); ctx.fill();
      ctx.fillStyle="#ffffff55"; ctx.shadowBlur=0; ctx.fillRect(-6,-6,12,12);
      const aimX=Math.cos(aimAngle)*20, aimY=Math.sin(aimAngle)*20;
      ctx.strokeStyle="#00ffff"; ctx.lineWidth=2; ctx.shadowColor="#00ffff"; ctx.shadowBlur=8;
      ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(aimX,aimY); ctx.stroke();
      ctx.restore(); ctx.shadowBlur=0;
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(10,10,200,60);
      const hpPct=pHp/pMaxHp, hpC=hpPct>0.5?"#00ff88":hpPct>0.25?"#ffdd00":"#ff2244";
      ctx.fillStyle="#111133"; ctx.fillRect(20,20,160,14);
      ctx.fillStyle=hpC; ctx.shadowColor=hpC; ctx.shadowBlur=6; ctx.fillRect(20,20,Math.round(160*pHp/pMaxHp),14); ctx.shadowBlur=0;
      ctx.fillStyle="#111133"; ctx.fillRect(20,38,160,10);
      ctx.fillStyle="#aa00ff"; ctx.fillRect(20,38,Math.round(160*pShield/100),10);
      ctx.fillStyle="#fff"; ctx.font="8px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`WAVE ${wave}  SCORE ${score.toLocaleString()}`,20,62);
      ctx.textAlign="right"; ctx.fillStyle="#aaa"; ctx.font="8px 'Press Start 2P'";
      ctx.fillText(`LIVES ${lives}`,W-20,28);
      if(!waveActive&&waveDelay>0){
        ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=15;
        ctx.font="bold 14px 'Press Start 2P'"; ctx.fillText(`WAVE ${wave+1} IN ${Math.ceil(waveDelay)}...`,W/2,H/2);
        ctx.shadowBlur=0;
      }
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.8)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff2244"; ctx.shadowColor="#ff2244"; ctx.shadowBlur=30;
        ctx.font="bold 28px 'Press Start 2P'"; ctx.fillText("GAME OVER",W/2,H/2-20); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(`SCORE: ${score.toLocaleString()}  WAVE: ${wave}`,W/2,H/2+20);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= BULLET HELL =========
function createBulletHellGame(): GameEngine {
  type BHBullet={x:number;y:number;vx:number;vy:number;player:boolean;color:string};
  type BHEnemy={x:number;y:number;vx:number;vy:number;hp:number;maxHp:number;shootTimer:number;pattern:number;phaseTimer:number;isBoss:boolean};
  let px=400,py=490,pHp=5,dead=false,score=0,lives=3,level=1;
  let enemies:BHEnemy[]=[],bullets:BHBullet[]=[],particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let shootCd=0,invincible=0,bossPhase=0,wave=0,waveTimer=3,waveActive=false;
  const COLORS=["#ff0066","#ff4400","#ff00ff","#ffdd00","#ff8800"];
  function spawnWave(w:number){
    wave=w;
    if(w%5===0){
      enemies.push({x:400,y:80,vx:60,vy:0,hp:200+w*50,maxHp:200+w*50,shootTimer:0.5,pattern:0,phaseTimer:0,isBoss:true});
    } else {
      const n=3+w*2;
      for(let i=0;i<n;i++){
        enemies.push({x:80+i*(640/(n-1||1)),y:40+Math.random()*80,vx:(Math.random()-0.5)*80,vy:30+Math.random()*40,hp:20+w*10,maxHp:20+w*10,shootTimer:0.8+Math.random(),pattern:w>3?Math.floor(Math.random()*3):0,phaseTimer:Math.random()*3,isBoss:false});
      }
    }
    waveActive=true;
  }
  function addBullet(x:number,y:number,angle:number,speed:number,isPlayer:boolean,color:string){
    bullets.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,player:isPlayer,color});
  }
  return {
    init(){px=400;py=490;pHp=5;dead=false;score=0;lives=3;level=1;enemies=[];bullets=[];particles=[];shootCd=0;invincible=0;wave=0;waveTimer=3;waveActive=false;bossPhase=0;},
    update(dt,keys){
      if(dead)return;
      const spd=200;
      if(keys.has("ArrowLeft")||keys.has("a"))px-=spd*dt;
      if(keys.has("ArrowRight")||keys.has("d"))px+=spd*dt;
      if(keys.has("ArrowUp")||keys.has("w"))py-=spd*dt;
      if(keys.has("ArrowDown")||keys.has("s"))py+=spd*dt;
      px=Math.max(15,Math.min(785,px)); py=Math.max(50,Math.min(545,py));
      shootCd-=dt; invincible-=dt;
      if(keys.has(" ")||keys.has("z")){
        if(shootCd<=0){
          addBullet(px-8,py,-Math.PI/2,520,true,"#00ffff");
          addBullet(px+8,py,-Math.PI/2,520,true,"#00ffff");
          if(level>3){addBullet(px-20,py,-Math.PI/2+0.15,480,true,"#00aaff");addBullet(px+20,py,-Math.PI/2-0.15,480,true,"#00aaff");}
          shootCd=0.1;
        }
      }
      for(const b of bullets){b.x+=b.vx*dt;b.y+=b.vy*dt;}
      bullets=bullets.filter(b=>b.x>-10&&b.x<810&&b.y>-10&&b.y<580);
      for(const e of enemies){
        e.x+=e.vx*dt; e.y+=e.vy*dt; e.phaseTimer+=dt;
        if(!e.isBoss){
          if(e.x<50||e.x>750)e.vx*=-1;
          if(e.y>200)e.vy=Math.abs(e.vy)*-0.5;
        } else {
          e.x+=Math.sin(e.phaseTimer*0.7)*1.5;
          if(e.x<80||e.x>720)e.vx*=-1;
          if(e.y>120)e.vy=-Math.abs(e.vy);
          if(e.y<30)e.vy=Math.abs(e.vy);
        }
        e.shootTimer-=dt;
        if(e.shootTimer<=0){
          const n=e.isBoss?12+bossPhase*4:4+e.pattern*2;
          const baseAngle=Math.atan2(py-e.y,px-e.x);
          if(e.pattern===0||e.isBoss){
            for(let i=0;i<n;i++){
              const a=e.isBoss?(i/n)*Math.PI*2+e.phaseTimer:baseAngle+(i-n/2)*0.25;
              addBullet(e.x,e.y,a,e.isBoss?140+bossPhase*20:160,false,COLORS[e.pattern%COLORS.length]);
            }
          } else if(e.pattern===1){
            for(let i=0;i<n;i++){const a=baseAngle+(i-n/2)*0.3+Math.sin(e.phaseTimer)*0.5;addBullet(e.x,e.y,a,180,false,COLORS[1]);}
          } else {
            for(let i=0;i<n;i++){const a=i/n*Math.PI*2+e.phaseTimer*2;addBullet(e.x,e.y,a,120,false,COLORS[2]);}
          }
          e.shootTimer=e.isBoss?0.4/(bossPhase+1):1.2-wave*0.05;
        }
        for(const b of bullets.filter(b=>b.player)){
          if(Math.hypot(b.x-e.x,b.y-e.y)<(e.isBoss?30:16)){
            e.hp-=10; b.player=false;b.vx=0;b.vy=0;
            for(let i=0;i<5;i++){const a=Math.random()*Math.PI*2;particles.push({x:b.x,y:b.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#ffdd00",life:0.3});}
            if(e.isBoss&&e.hp<=e.maxHp*(0.5-bossPhase*0.25)&&bossPhase<3){bossPhase++;score+=500;}
          }
        }
      }
      for(const b of bullets.filter(b=>!b.player)){
        if(Math.hypot(b.x-px,b.y-py)<10&&invincible<=0){
          pHp--; invincible=1.5; b.player=true;b.vx=0;b.vy=0;
          for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;particles.push({x:px,y:py,vx:Math.cos(a)*120,vy:Math.sin(a)*120,color:"#ffffff",life:0.5});}
          if(pHp<=0){lives--;if(lives<=0){dead=true;}else{pHp=5;invincible=3;}}
        }
      }
      const deadE=enemies.filter(e=>e.hp<=0);
      for(const e of deadE){
        score+=(e.isBoss?2000:100)*level;
        for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2,s=80+Math.random()*200;particles.push({x:e.x,y:e.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,color:COLORS[Math.floor(Math.random()*COLORS.length)],life:1});}
      }
      enemies=enemies.filter(e=>e.hp>0);
      bullets=bullets.filter(b=>b.vx!==0||b.vy!==0);
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(pt=>pt.life>0);
      if(!waveActive){waveTimer-=dt;if(waveTimer<=0){wave++;level=Math.ceil(wave/2);bossPhase=0;spawnWave(wave);waveTimer=4;}}
      else if(enemies.length===0){waveActive=false;waveTimer=3;score+=wave*300;}
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#000008"; ctx.fillRect(0,0,W,H);
      for(let i=0;i<120;i++){const br=Math.random()<0.01?1:0.4;ctx.fillStyle=`rgba(255,255,255,${0.1+br*0.5})`;ctx.fillRect(Math.floor(Math.random()*W),Math.floor(Math.random()*H),br>0.5?2:1,br>0.5?2:1);}
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=Math.min(1,pt.life*2);ctx.beginPath();ctx.arc(pt.x,pt.y,3,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      for(const b of bullets){
        ctx.fillStyle=b.color; ctx.shadowColor=b.color; ctx.shadowBlur=8;
        ctx.beginPath(); ctx.arc(b.x,b.y,b.player?4:5,0,Math.PI*2); ctx.fill();
      }
      for(const e of enemies){
        ctx.fillStyle=e.isBoss?"#ff0066":"#ff4400"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=e.isBoss?20:10;
        const r=e.isBoss?30:14;
        if(e.isBoss){
          ctx.beginPath(); for(let i=0;i<8;i++){const a=i/8*Math.PI*2+e.phaseTimer;ctx.lineTo(e.x+Math.cos(a)*(r+(i%2)*10),e.y+Math.sin(a)*(r+(i%2)*10));} ctx.closePath(); ctx.fill();
          ctx.fillStyle="#111133"; ctx.fillRect(e.x-40,e.y-r-20,80,10);
          ctx.fillStyle="#ff0066"; ctx.fillRect(e.x-40,e.y-r-20,Math.round(80*e.hp/e.maxHp),10);
        } else {
          ctx.beginPath(); ctx.arc(e.x,e.y,r,0,Math.PI*2); ctx.fill();
        }
      }
      ctx.shadowBlur=0;
      if(invincible<=0||Math.floor(invincible*10)%2===0){
        ctx.save(); ctx.translate(px,py);
        ctx.fillStyle="#00ffff"; ctx.shadowColor="#00ffff"; ctx.shadowBlur=16;
        ctx.beginPath(); ctx.moveTo(0,-14);ctx.lineTo(10,8);ctx.lineTo(-10,8);ctx.closePath(); ctx.fill();
        // Hitbox
        ctx.strokeStyle="#ffffff"; ctx.lineWidth=1; ctx.shadowBlur=0;
        ctx.beginPath(); ctx.arc(0,0,4,0,Math.PI*2); ctx.stroke();
        ctx.restore();
      }
      ctx.shadowBlur=0;
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,28);
      ctx.textAlign="left"; ctx.fillStyle="#00ffff"; ctx.font="8px 'Press Start 2P'";
      ctx.fillText(`WAVE ${wave}  SCORE ${score.toLocaleString()}  POWER ${level}`,10,18);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<pHp;i++){ctx.fillText("♥",W-10-i*18,18);}
      if(!waveActive&&waveTimer>0){
        ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=12;
        ctx.font="bold 12px 'Press Start 2P'"; ctx.fillText(`WAVE ${wave+1} INCOMING...`,W/2,H/2); ctx.shadowBlur=0;
      }
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.85)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff0066"; ctx.shadowColor="#ff0066"; ctx.shadowBlur=30;
        ctx.font="bold 28px 'Press Start 2P'"; ctx.fillText("GAME OVER",W/2,H/2-15); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= TANK COMBAT =========
function createTankGame(): GameEngine {
  type TankObj={x:number;y:number;angle:number;turretAngle:number;vx:number;vy:number;hp:number;maxHp:number;shootCd:number;isPlayer:boolean;color:string};
  type Shell={x:number;y:number;vx:number;vy:number;player:boolean;bounces:number};
  type Wall={x:number;y:number;w:number;h:number;hp:number};
  let player!:TankObj,enemies:TankObj[]=[],shells:Shell[]=[],walls:Wall[]=[],particles:{x:number;y:number;vx:number;vy:number;life:number;color:string}[]=[];
  let score=0,lives=3,level=1,dead=false,wave=0,waveTimer=3,prevKeys=new Set<string>();
  function makeWalls(){
    walls=[
      {x:150,y:100,w:80,h:20,hp:3},{x:400,y:80,w:20,h:100,hp:3},{x:600,y:100,w:80,h:20,hp:3},
      {x:100,y:260,w:20,h:80,hp:3},{x:350,y:240,w:120,h:20,hp:3},{x:680,y:260,w:20,h:80,hp:3},
      {x:180,y:400,w:100,h:20,hp:3},{x:400,y:380,w:20,h:80,hp:3},{x:520,y:400,w:100,h:20,hp:3},
    ];
  }
  function spawnWave(w:number){
    const positions:Array<[number,number]>=[[680,80],[720,480],[80,480],[680,480]];
    for(let i=0;i<Math.min(w+1,4);i++){
      const [ex,ey]=positions[i%positions.length];
      enemies.push({x:ex,y:ey,angle:Math.PI,turretAngle:Math.PI,vx:0,vy:0,hp:50+w*20,maxHp:50+w*20,shootCd:2+Math.random(),isPlayer:false,color:["#ff4400","#ff00ff","#ff0066","#ffaa00"][i%4]});
    }
  }
  function fireShell(t:TankObj){
    const a=t.turretAngle;
    shells.push({x:t.x+Math.cos(a)*28,y:t.y+Math.sin(a)*28,vx:Math.cos(a)*380,vy:Math.sin(a)*380,player:t.isPlayer,bounces:2});
  }
  function rectCollide(sx:number,sy:number,w:Wall){return sx>w.x&&sx<w.x+w.w&&sy>w.y&&sy<w.y+w.h;}
  return {
    init(canvas){
      player={x:canvas.width/2,y:canvas.height-80,angle:-Math.PI/2,turretAngle:-Math.PI/2,vx:0,vy:0,hp:100,maxHp:100,shootCd:0,isPlayer:true,color:"#00ffff"};
      enemies=[];shells=[];particles=[];wave=0;waveTimer=3;dead=false;score=0;lives=3;level=1;makeWalls();prevKeys=new Set();
    },
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      const spd=120, rotSpd=2.2;
      if(keys.has("a")||keys.has("ArrowLeft"))player.angle-=rotSpd*dt;
      if(keys.has("d")||keys.has("ArrowRight"))player.angle+=rotSpd*dt;
      if(keys.has("w")||keys.has("ArrowUp")){player.vx=Math.cos(player.angle)*spd;player.vy=Math.sin(player.angle)*spd;}
      else if(keys.has("s")||keys.has("ArrowDown")){player.vx=-Math.cos(player.angle)*spd*0.6;player.vy=-Math.sin(player.angle)*spd*0.6;}
      else{player.vx*=0.8;player.vy*=0.8;}
      if(keys.has("q"))player.turretAngle-=2*dt;
      if(keys.has("e"))player.turretAngle+=2*dt;
      if(enemies.length>0&&!keys.has("q")&&!keys.has("e")){
        let nearest=enemies[0];let nd=Infinity;
        for(const e of enemies){const d=Math.hypot(e.x-player.x,e.y-player.y);if(d<nd){nd=d;nearest=e;}}
        player.turretAngle=Math.atan2(nearest.y-player.y,nearest.x-player.x);
      }
      player.shootCd-=dt;
      if((pressed(" ")||pressed("z"))&&player.shootCd<=0){fireShell(player);player.shootCd=0.6;}
      player.x+=player.vx*dt; player.y+=player.vy*dt;
      player.x=Math.max(24,Math.min(776,player.x)); player.y=Math.max(24,Math.min(536,player.y));
      for(const w of walls){if(rectCollide(player.x,player.y,{...w,x:w.x-20,y:w.y-20,w:w.w+40,h:w.h+40})){player.x-=player.vx*dt*2;player.y-=player.vy*dt*2;}}
      for(const e of enemies){
        e.shootCd-=dt;
        e.turretAngle=Math.atan2(player.y-e.y,player.x-e.x);
        const d=Math.hypot(player.x-e.x,player.y-e.y);
        if(d>120){const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*80*dt;e.y+=Math.sin(a)*80*dt;}
        if(e.shootCd<=0){fireShell(e);e.shootCd=1.8+Math.random()*1.5;}
        e.x=Math.max(24,Math.min(776,e.x)); e.y=Math.max(24,Math.min(536,e.y));
      }
      for(const sh of shells){
        sh.x+=sh.vx*dt; sh.y+=sh.vy*dt;
        if(sh.x<10||sh.x>790){sh.vx*=-1;sh.bounces--;}
        if(sh.y<10||sh.y>550){sh.vy*=-1;sh.bounces--;}
        for(const w of walls){
          if(rectCollide(sh.x,sh.y,w)){sh.vx*=-1;sh.vy*=-1;sh.bounces--;w.hp--;if(w.hp<=0){for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;particles.push({x:sh.x,y:sh.y,vx:Math.cos(a)*100,vy:Math.sin(a)*100,life:0.5,color:"#885500"});}}}}
        if(sh.player){
          for(const e of enemies){if(Math.hypot(sh.x-e.x,sh.y-e.y)<22){e.hp-=25;sh.bounces=-1;score+=50;for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;particles.push({x:sh.x,y:sh.y,vx:Math.cos(a)*150,vy:Math.sin(a)*150,life:0.5,color:e.color});}}}
        } else {
          if(Math.hypot(sh.x-player.x,sh.y-player.y)<22){player.hp-=20;sh.bounces=-1;for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;particles.push({x:sh.x,y:sh.y,vx:Math.cos(a)*120,vy:Math.sin(a)*120,life:0.5,color:"#ffffff"});}}
        }
      }
      shells=shells.filter(s=>s.bounces>=0&&s.x>-20&&s.x<820&&s.y>-20&&s.y<580);
      walls=walls.filter(w=>w.hp>0);
      enemies=enemies.filter(e=>{if(e.hp<=0){score+=200*level;for(let i=0;i<15;i++){const a=Math.random()*Math.PI*2;particles.push({x:e.x,y:e.y,vx:Math.cos(a)*200,vy:Math.sin(a)*200,life:0.8,color:e.color});}return false;}return true;});
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.vx*=0.85;pt.vy*=0.85;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      if(player.hp<=0){lives--;if(lives<=0){dead=true;}else{player.hp=player.maxHp;makeWalls();}}
      if(enemies.length===0){
        if(waveTimer<=0){wave++;level=wave;score+=wave*500;makeWalls();spawnWave(wave);waveTimer=3;}
        else waveTimer-=dt;
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#02050a"; ctx.fillRect(0,0,W,H);
      ctx.strokeStyle="rgba(0,255,136,0.04)"; ctx.lineWidth=1;
      for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      for(const w of walls){
        const alpha=w.hp/3;
        ctx.fillStyle=`rgba(40,40,80,${alpha})`; ctx.fillRect(w.x,w.y,w.w,w.h);
        ctx.strokeStyle=`rgba(100,100,200,${alpha})`; ctx.lineWidth=2; ctx.strokeRect(w.x,w.y,w.w,w.h);
      }
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*1.5;ctx.beginPath();ctx.arc(pt.x,pt.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      for(const sh of shells){
        ctx.fillStyle=sh.player?"#ffdd00":"#ff4400"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=10;
        ctx.beginPath(); ctx.arc(sh.x,sh.y,5,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      }
      function drawTank(t:TankObj){
        ctx.save(); ctx.translate(t.x,t.y); ctx.rotate(t.angle);
        ctx.fillStyle=t.color; ctx.shadowColor=t.color; ctx.shadowBlur=t.isPlayer?16:10;
        ctx.fillRect(-20,-14,40,28);
        ctx.fillStyle=t.color+"88"; ctx.fillRect(-16,-10,32,20);
        ctx.fillStyle="rgba(0,0,0,0.4)"; ctx.fillRect(-16,-10,12,20);
        ctx.restore();
        ctx.save(); ctx.translate(t.x,t.y); ctx.rotate(t.turretAngle);
        ctx.fillStyle=t.color; ctx.shadowBlur=8; ctx.fillRect(0,-4,28,8);
        ctx.beginPath(); ctx.arc(0,0,10,0,Math.PI*2); ctx.fill();
        ctx.restore(); ctx.shadowBlur=0;
        if(!t.isPlayer){ctx.fillStyle="#333";ctx.fillRect(t.x-15,t.y-22,30,5);ctx.fillStyle=t.color;ctx.fillRect(t.x-15,t.y-22,Math.round(30*t.hp/t.maxHp),5);}
      }
      for(const e of enemies)drawTank(e);
      drawTank(player);
      ctx.fillStyle="#000033cc"; ctx.fillRect(10,10,220,50);
      const hpPct=player.hp/player.maxHp;
      ctx.fillStyle="#111133"; ctx.fillRect(20,18,160,12);
      ctx.fillStyle=hpPct>0.5?"#00ff88":hpPct>0.25?"#ffdd00":"#ff2244"; ctx.fillRect(20,18,Math.round(160*hpPct),12);
      ctx.fillStyle="#fff"; ctx.font="8px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`WAVE ${wave} SCORE ${score.toLocaleString()}`,20,46);
      ctx.textAlign="right"; ctx.fillStyle="#aaa"; ctx.fillText(`LIVES ${lives}`,W-16,28);
      if(enemies.length===0&&waveTimer>0){
        ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=12;
        ctx.font="bold 12px 'Press Start 2P'"; ctx.fillText(`WAVE ${wave+1} IN ${Math.ceil(waveTimer)}...`,W/2,H/2); ctx.shadowBlur=0;
      }
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.8)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff2244"; ctx.shadowColor="#ff2244"; ctx.shadowBlur=30;
        ctx.font="bold 28px 'Press Start 2P'"; ctx.fillText("GAME OVER",W/2,H/2-15); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= RHYTHM GAME =========
function createRhythmGame(): GameEngine {
  const LANES=4, LANE_W=120, LANE_COLORS=["#ff0066","#00ffff","#ffdd00","#aa00ff"];
  const KEYS=["a","s","d","f"];
  type Note={lane:number;y:number;hit:boolean;miss:boolean};
  let notes:Note[]=[],score=0,lives=3,level=1,dead=false;
  let combo=0,maxCombo=0,accuracy=0,totalNotes=0,hitNotes=0;
  let spawnTimer=0,spawnInterval=0.7,gameTimer=0,prevKeys=new Set<string>();
  const JUDGMENTS:Array<{text:string;color:string;timer:number;lane:number}>=[];
  const PATTERNS=[[0],[1],[2],[3],[0,2],[1,3],[0,1],[2,3],[0,1,2],[1,2,3]];
  function spawnNote(){
    const pattern=PATTERNS[Math.floor(Math.random()*Math.min(PATTERNS.length,level+2))];
    for(const lane of pattern)notes.push({lane,y:-30,hit:false,miss:false});
  }
  const TARGET_Y=440;
  return {
    init(){notes=[];score=0;lives=3;level=1;dead=false;combo=0;maxCombo=0;totalNotes=0;hitNotes=0;spawnTimer=0;spawnInterval=0.7;gameTimer=0;prevKeys=new Set();JUDGMENTS.length=0;},
    update(dt,keys){
      if(dead)return;
      gameTimer+=dt; spawnTimer+=dt;
      if(spawnTimer>=spawnInterval){spawnTimer=0;spawnNote();}
      spawnInterval=Math.max(0.3,0.7-level*0.04);
      for(const n of notes){if(!n.hit&&!n.miss)n.y+=dt*(300+level*20);}
      KEYS.forEach((k,lane)=>{
        if(keys.has(k)&&!prevKeys.has(k)){
          const close=notes.find(n=>n.lane===lane&&!n.hit&&!n.miss&&Math.abs(n.y-TARGET_Y)<60);
          if(close){
            const diff=Math.abs(close.y-TARGET_Y);
            let pts=0,text="",color="";
            if(diff<15){pts=300;text="PERFECT!";color="#ffdd00";}
            else if(diff<30){pts=200;text="GREAT";color="#00ff88";}
            else{pts=100;text="GOOD";color="#00aaff";}
            close.hit=true; combo++; maxCombo=Math.max(maxCombo,combo);
            score+=pts*(1+Math.floor(combo/10)); hitNotes++; totalNotes++;
            JUDGMENTS.push({text,color,timer:0.8,lane});
            if(score>level*2000)level++;
          } else {
            combo=0; JUDGMENTS.push({text:"MISS",color:"#ff2244",timer:0.8,lane});
          }
        }
      });
      for(const n of notes){if(n.y>TARGET_Y+60&&!n.hit&&!n.miss){n.miss=true;combo=0;lives--;totalNotes++;if(lives<=0)dead=true;}}
      for(const j of JUDGMENTS)j.timer-=dt;
      JUDGMENTS.splice(0,JUDGMENTS.length,...JUDGMENTS.filter(j=>j.timer>0));
      notes=notes.filter(n=>!(n.y>600));
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#03000a"; ctx.fillRect(0,0,W,H);
      const startX=(W-LANES*LANE_W)/2;
      // BG grid
      for(let i=0;i<LANES;i++){
        ctx.fillStyle=`${LANE_COLORS[i]}08`; ctx.fillRect(startX+i*LANE_W,0,LANE_W,H);
        ctx.strokeStyle=LANE_COLORS[i]+"22"; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(startX+i*LANE_W,0); ctx.lineTo(startX+i*LANE_W,H); ctx.stroke();
      }
      ctx.strokeStyle=LANE_COLORS[3]+"22"; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(startX+LANES*LANE_W,0); ctx.lineTo(startX+LANES*LANE_W,H); ctx.stroke();
      // Target zone
      for(let i=0;i<LANES;i++){
        ctx.strokeStyle=LANE_COLORS[i]; ctx.lineWidth=3; ctx.shadowColor=LANE_COLORS[i]; ctx.shadowBlur=10;
        ctx.strokeRect(startX+i*LANE_W+4,TARGET_Y-28,LANE_W-8,56); ctx.shadowBlur=0;
      }
      // Key labels
      KEYS.forEach((k,i)=>{
        ctx.fillStyle=LANE_COLORS[i]+"88"; ctx.font="bold 14px 'Press Start 2P'"; ctx.textAlign="center";
        ctx.fillText(k.toUpperCase(),startX+i*LANE_W+LANE_W/2,TARGET_Y+18);
      });
      // Notes
      for(const n of notes){
        if(!n.miss){
          const x=startX+n.lane*LANE_W+8, w=LANE_W-16;
          ctx.fillStyle=n.hit?LANE_COLORS[n.lane]+"44":LANE_COLORS[n.lane]; ctx.shadowColor=LANE_COLORS[n.lane]; ctx.shadowBlur=n.hit?0:12;
          ctx.fillRect(x,n.y-22,w,44);
          ctx.fillStyle="#ffffff22"; ctx.shadowBlur=0; ctx.fillRect(x+4,n.y-16,w-8,14);
        }
      }
      ctx.shadowBlur=0;
      // Judgments
      for(const j of JUDGMENTS){
        const x=startX+j.lane*LANE_W+LANE_W/2, y=TARGET_Y-60-(1-j.timer)*40;
        ctx.fillStyle=j.color; ctx.shadowColor=j.color; ctx.shadowBlur=10; ctx.globalAlpha=j.timer;
        ctx.font="bold 10px 'Press Start 2P'"; ctx.textAlign="center"; ctx.fillText(j.text,x,y);
      }
      ctx.globalAlpha=1; ctx.shadowBlur=0;
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,38);
      ctx.fillStyle="#fff"; ctx.font="9px 'Press Start 2P'"; ctx.textAlign="left"; ctx.fillText(`SCORE ${score.toLocaleString()}`,10,22);
      ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.fillText(`COMBO x${combo}`,W/2,22);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,22);
      ctx.fillStyle="#888"; ctx.font="7px 'Press Start 2P'"; ctx.textAlign="center";
      ctx.fillText(`LVL ${level}   MAX COMBO ${maxCombo}`,W/2,H-10);
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.85)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff0066"; ctx.shadowColor="#ff0066"; ctx.shadowBlur=30;
        ctx.font="bold 24px 'Press Start 2P'"; ctx.fillText("GAME OVER",W/2,H/2-30); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="9px 'Press Start 2P'";
        ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2);
        ctx.fillText(`MAX COMBO: ${maxCombo}`,W/2,H/2+22);
        const acc=totalNotes>0?Math.round(hitNotes/totalNotes*100):0;
        ctx.fillText(`ACCURACY: ${acc}%`,W/2,H/2+44);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= PINBALL =========
function createPinballGame(): GameEngine {
  const W_C=800,H_C=560;
  type Flipper={x:number;y:number;len:number;angle:number;restAngle:number;activeAngle:number;side:1|-1};
  type Bumper={x:number;y:number;r:number;color:string;flashTimer:number;points:number};
  let ball={x:740,y:400,vx:0,vy:0,r:10};
  let ballLaunched=false,launchPower=0,launchTimer=0;
  let leftFlipper!:Flipper,rightFlipper!:Flipper;
  let bumpers:Bumper[]=[],score=0,lives=3,level=1,dead=false;
  let multiplier=1,prevKeys=new Set<string>();
  function initPins(){
    ball={x:740,y:400,vx:0,vy:0,r:10}; ballLaunched=false; launchPower=0; launchTimer=0;
    leftFlipper={x:260,y:490,len:80,angle:0.5,restAngle:0.5,activeAngle:-0.5,side:1};
    rightFlipper={x:540,y:490,len:80,angle:Math.PI-0.5,restAngle:Math.PI-0.5,activeAngle:Math.PI+0.5,side:-1};
    bumpers=[
      {x:250,y:180,r:22,color:"#ff0066",flashTimer:0,points:100},
      {x:400,y:140,r:22,color:"#00ffff",flashTimer:0,points:150},
      {x:550,y:180,r:22,color:"#ffdd00",flashTimer:0,points:100},
      {x:320,y:280,r:18,color:"#aa00ff",flashTimer:0,points:200},
      {x:480,y:280,r:18,color:"#00ff88",flashTimer:0,points:200},
      {x:400,y:340,r:16,color:"#ff4400",flashTimer:0,points:300},
    ];
  }
  function flipperEndPoint(f:Flipper){return{x:f.x+Math.cos(f.angle)*f.len,y:f.y+Math.sin(f.angle)*f.len};}
  function distPointToSegment(px:number,py:number,ax:number,ay:number,bx:number,by:number){
    const dx=bx-ax,dy=by-ay,len2=dx*dx+dy*dy;
    if(len2===0)return Math.hypot(px-ax,py-ay);
    const t=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/len2));
    return Math.hypot(px-(ax+t*dx),py-(ay+t*dy));
  }
  return {
    init(){initPins();score=0;lives=3;level=1;dead=false;multiplier=1;prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(!ballLaunched){
        launchPower=Math.min(1,launchPower+dt*0.8);
        if(pressed(" ")||pressed("ArrowUp")){
          ball.vx=-(1.5+launchPower)*80; ball.vy=-(3+launchPower*5)*120;
          ballLaunched=true;
        }
      } else {
        if(keys.has("a")||keys.has("ArrowLeft"))leftFlipper.angle=leftFlipper.activeAngle;
        else leftFlipper.angle=leftFlipper.restAngle;
        if(keys.has("d")||keys.has("ArrowRight"))rightFlipper.angle=rightFlipper.activeAngle;
        else rightFlipper.angle=rightFlipper.restAngle;
        ball.vy+=900*dt; ball.x+=ball.vx*dt; ball.y+=ball.vy*dt;
        ball.vx*=0.999; ball.vy*=0.999;
        // Walls
        if(ball.x<60+ball.r){ball.x=60+ball.r;ball.vx=Math.abs(ball.vx);}
        if(ball.x>W_C-60-ball.r){ball.x=W_C-60-ball.r;ball.vx=-Math.abs(ball.vx);}
        if(ball.y<30+ball.r){ball.y=30+ball.r;ball.vy=Math.abs(ball.vy);}
        if(ball.y>H_C+50){lives--;if(lives<=0)dead=true;else{initPins();multiplier=1;return;}}
        // Flippers
        for(const fl of[leftFlipper,rightFlipper]){
          const ep=flipperEndPoint(fl);
          const d=distPointToSegment(ball.x,ball.y,fl.x,fl.y,ep.x,ep.y);
          if(d<ball.r+6){
            const nx=ball.x-fl.x,ny=ball.y-fl.y,nl=Math.hypot(nx,ny)||1;
            const flipperVel=fl.side*(fl.angle-fl.restAngle)*200;
            ball.vx=nx/nl*420+flipperVel; ball.vy=Math.min(-320,-(d+ball.r)*60+ny/nl*(-300));
          }
        }
        // Bumpers
        for(const b of bumpers){
          const d=Math.hypot(ball.x-b.x,ball.y-b.y);
          if(d<b.r+ball.r){
            const nx=(ball.x-b.x)/d,ny=(ball.y-b.y)/d;
            ball.vx=nx*480; ball.vy=ny*480;
            ball.x=b.x+nx*(b.r+ball.r+1); ball.y=b.y+ny*(b.r+ball.r+1);
            score+=b.points*multiplier; b.flashTimer=0.2;
            multiplier=Math.min(10,multiplier+1); level=Math.ceil(score/5000)+1;
          }
          if(b.flashTimer>0)b.flashTimer-=dt;
        }
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010108"; ctx.fillRect(0,0,W,H);
      // Walls
      ctx.fillStyle="#0a0a30"; ctx.shadowColor="#00ffff"; ctx.shadowBlur=8;
      ctx.fillRect(0,0,60,H); ctx.fillRect(W-60,0,60,H); ctx.fillRect(0,0,W,30);
      ctx.shadowBlur=0;
      ctx.strokeStyle="#00ffff"; ctx.lineWidth=3;
      ctx.strokeRect(60,30,W-120,H-60);
      // Guide lines at bottom
      ctx.strokeStyle="#333366"; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(60,H-30); ctx.lineTo(240,490); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(W-60,H-30); ctx.lineTo(560,490); ctx.stroke();
      // Bumpers
      for(const b of bumpers){
        const flash=b.flashTimer>0;
        ctx.fillStyle=flash?"#ffffff":b.color; ctx.shadowColor=flash?"#ffffff":b.color; ctx.shadowBlur=flash?30:12;
        ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
        ctx.fillStyle=flash?"#ff000088":"#00000044"; ctx.beginPath(); ctx.arc(b.x,b.y-b.r*0.3,b.r*0.5,0,Math.PI*2); ctx.fill();
      }
      // Flippers
      for(const fl of[leftFlipper,rightFlipper]){
        const ep=flipperEndPoint(fl);
        ctx.strokeStyle="#00ff88"; ctx.shadowColor="#00ff88"; ctx.shadowBlur=10; ctx.lineWidth=10; ctx.lineCap="round";
        ctx.beginPath(); ctx.moveTo(fl.x,fl.y); ctx.lineTo(ep.x,ep.y); ctx.stroke(); ctx.shadowBlur=0;
      }
      // Ball
      const ballGrad=ctx.createRadialGradient(ball.x-3,ball.y-3,1,ball.x,ball.y,ball.r);
      ballGrad.addColorStop(0,"#ffffff"); ballGrad.addColorStop(1,"#aaaacc");
      ctx.fillStyle=ballGrad; ctx.shadowColor="#ffffff"; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      // Launch power
      if(!ballLaunched){
        ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=10;
        ctx.fillRect(720,500-Math.round(launchPower*60),12,Math.round(launchPower*60));
        ctx.strokeStyle="#ffdd00"; ctx.lineWidth=2; ctx.strokeRect(720,440,12,60); ctx.shadowBlur=0;
        ctx.fillStyle="#aaa"; ctx.font="7px 'Press Start 2P'"; ctx.textAlign="center"; ctx.fillText("SPACE",726,530);
      }
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,28);
      ctx.textAlign="left"; ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=8;
      ctx.font="10px 'Press Start 2P'"; ctx.fillText(`${score.toLocaleString()}`,10,18); ctx.shadowBlur=0;
      ctx.textAlign="center"; ctx.fillStyle="#fff"; ctx.fillText(`x${multiplier} MULT  LVL ${level}`,W/2,18);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,18);
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.85)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff0066"; ctx.shadowColor="#ff0066"; ctx.shadowBlur=30;
        ctx.font="bold 24px 'Press Start 2P'"; ctx.fillText("GAME OVER",W/2,H/2-15); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+15);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= TOWER DEFENSE =========
function createTowerDefenseGame(): GameEngine {
  type Enemy={x:number;y:number;hp:number;maxHp:number;speed:number;pathIdx:number;reward:number;frozen:number};
  type Tower={x:number;y:number;type:number;range:number;damage:number;fireRate:number;fireCd:number;color:string;angle:number};
  type Projectile={x:number;y:number;tx:number;ty:number;speed:number;damage:number;color:string;type:number};
  const PATH:Array<[number,number]>=[[0,200],[120,200],[120,100],[280,100],[280,320],[420,320],[420,180],[560,180],[560,380],[700,380],[700,200],[800,200]];
  const TOWER_TYPES=[
    {name:"CANNON",  color:"#00ffff", cost:50,  range:120, damage:25,  fireRate:1.2, desc:"Fast, medium damage"},
    {name:"SNIPER",  color:"#ffdd00", cost:100, range:220, damage:80,  fireRate:0.4, desc:"Slow, high damage"},
    {name:"FREEZE",  color:"#8888ff", cost:80,  range:100, damage:10,  fireRate:0.8, desc:"Slows enemies"},
    {name:"ROCKET",  color:"#ff4400", cost:150, range:140, damage:150, fireRate:0.25,desc:"Splash damage"},
  ];
  let towers:Tower[]=[],enemies:Enemy[]=[],projectiles:Projectile[]=[];
  let particles:{x:number;y:number;vx:number;vy:number;life:number;color:string;r:number}[]=[];
  let gold=200,lives=20,score=0,level=1,wave=0,waveTimer=5,waveActive=false;
  let selTower=0,prevKeys=new Set<string>(),cursorX=400,cursorY=300,dead=false;
  let placeTimer=0;
  function isTowerAt(x:number,y:number){return towers.some(t=>Math.hypot(t.x-x,t.y-y)<40);}
  function isOnPath(x:number,y:number){
    for(let i=0;i<PATH.length-1;i++){
      const ax=PATH[i][0],ay=PATH[i][1],bx=PATH[i+1][0],by=PATH[i+1][1];
      const dx=bx-ax,dy=by-ay,len=Math.hypot(dx,dy)||1;
      const t=Math.max(0,Math.min(1,((x-ax)*dx+(y-ay)*dy)/(len*len)));
      if(Math.hypot(x-(ax+t*dx),y-(ay+t*dy))<36)return true;
    }
    return false;
  }
  function spawnWave(w:number){
    wave=w; const n=4+w*3;
    for(let i=0;i<n;i++){
      setTimeout(()=>{
        const isBoss=i===n-1&&w%5===0;
        enemies.push({x:0,y:200,hp:isBoss?(100+w*80):20+w*15,maxHp:isBoss?(100+w*80):20+w*15,speed:isBoss?40:60+w*5,pathIdx:0,reward:isBoss?30:5+w,frozen:0});
      },i*400);
    }
    waveActive=true;
  }
  return {
    init(){towers=[];enemies=[];projectiles=[];particles=[];gold=200;lives=20;score=0;level=1;wave=0;waveTimer=5;waveActive=false;selTower=0;dead=false;prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(pressed("1"))selTower=0; if(pressed("2"))selTower=1; if(pressed("3"))selTower=2; if(pressed("4"))selTower=3;
      if(keys.has("ArrowLeft"))cursorX=Math.max(30,cursorX-150*dt);
      if(keys.has("ArrowRight"))cursorX=Math.min(770,cursorX+150*dt);
      if(keys.has("ArrowUp"))cursorY=Math.max(30,cursorY-150*dt);
      if(keys.has("ArrowDown"))cursorY=Math.min(530,cursorY+150*dt);
      placeTimer-=dt;
      if((pressed(" ")||pressed("z"))&&placeTimer<=0){
        const td=TOWER_TYPES[selTower];
        if(gold>=td.cost&&!isTowerAt(cursorX,cursorY)&&!isOnPath(cursorX,cursorY)){
          towers.push({x:cursorX,y:cursorY,type:selTower,range:td.range,damage:td.damage,fireRate:td.fireRate,fireCd:0,color:td.color,angle:0});
          gold-=td.cost; placeTimer=0.3;
        }
      }
      for(const t of towers){
        t.fireCd-=dt;
        let nearestE:Enemy|null=null, nd=Infinity;
        for(const e of enemies){const d=Math.hypot(e.x-t.x,e.y-t.y);if(d<t.range&&d<nd){nd=d;nearestE=e;}}
        if(nearestE){
          t.angle=Math.atan2(nearestE.y-t.y,nearestE.x-t.x);
          if(t.fireCd<=0){
            projectiles.push({x:t.x,y:t.y,tx:nearestE.x,ty:nearestE.y,speed:280+selTower*60,damage:t.damage,color:t.color,type:t.type});
            t.fireCd=1/t.fireRate;
          }
        }
      }
      for(const p of projectiles){
        const dx=p.tx-p.x,dy=p.ty-p.y,dist=Math.hypot(dx,dy)||1;
        if(dist<8){
          for(const e of enemies){
            const splashR=p.type===3?80:22;
            if(Math.hypot(e.x-p.x,e.y-p.y)<splashR){
              e.hp-=p.damage;
              if(p.type===2)e.frozen=Math.max(e.frozen||0,2);
            }
          }
          for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;particles.push({x:p.x,y:p.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,life:0.4,color:p.color,r:3});}
          p.speed=0;
        } else {
          p.x+=dx/dist*p.speed*dt; p.y+=dy/dist*p.speed*dt;
          p.tx+=enemies.length>0?(enemies[0].x-p.tx)*0.1:0; p.ty+=enemies.length>0?(enemies[0].y-p.ty)*0.1:0;
        }
      }
      projectiles=projectiles.filter(p=>p.speed>0);
      for(const e of enemies){
        if(e.frozen>0){e.frozen-=dt;}
        const spd=e.frozen>0?e.speed*0.2:e.speed;
        if(e.pathIdx<PATH.length-1){
          const tgt=PATH[e.pathIdx+1];
          const dx=tgt[0]-e.x,dy=tgt[1]-e.y,d=Math.hypot(dx,dy)||1;
          if(d<10){e.pathIdx++;}
          else{e.x+=dx/d*spd*dt;e.y+=dy/d*spd*dt;}
        } else {
          lives--; if(lives<=0)dead=true; e.hp=0;
        }
      }
      const deadE=enemies.filter(e=>e.hp<=0&&e.pathIdx<PATH.length-1);
      for(const e of deadE){gold+=e.reward;score+=e.reward*10;}
      enemies=enemies.filter(e=>e.hp>0&&e.pathIdx<PATH.length-1);
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      if(!waveActive){waveTimer-=dt;if(waveTimer<=0){waveTimer=0;}}
      if(!waveActive&&waveTimer<=0&&(pressed(" ")||pressed("n"))){wave++;level=wave;spawnWave(wave);waveTimer=20;}
      if(waveActive&&enemies.length===0){waveActive=false;waveTimer=6;gold+=20+wave*5;}
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#030a05"; ctx.fillRect(0,0,W,H);
      // Draw path
      ctx.strokeStyle="#0a2a0a"; ctx.lineWidth=36; ctx.shadowBlur=0;
      ctx.beginPath(); ctx.moveTo(PATH[0][0],PATH[0][1]);
      for(const wp of PATH)ctx.lineTo(wp[0],wp[1]); ctx.stroke();
      ctx.strokeStyle="#0d3a0d"; ctx.lineWidth=32;
      ctx.beginPath(); ctx.moveTo(PATH[0][0],PATH[0][1]);
      for(const wp of PATH)ctx.lineTo(wp[0],wp[1]); ctx.stroke();
      ctx.setLineDash([20,12]); ctx.strokeStyle="rgba(0,255,80,0.08)"; ctx.lineWidth=3;
      ctx.beginPath(); ctx.moveTo(PATH[0][0],PATH[0][1]);
      for(const wp of PATH)ctx.lineTo(wp[0],wp[1]); ctx.stroke(); ctx.setLineDash([]);
      // Particles
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*2;ctx.beginPath();ctx.arc(pt.x,pt.y,pt.r,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Enemies
      for(const e of enemies){
        const isBoss=e.maxHp>200;
        ctx.fillStyle=isBoss?"#ff0066":"#ff4400"; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=isBoss?14:8;
        ctx.beginPath(); ctx.arc(e.x,e.y,isBoss?18:12,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
        if(e.frozen>0){ctx.strokeStyle="#8888ff";ctx.lineWidth=2;ctx.beginPath();ctx.arc(e.x,e.y,isBoss?20:14,0,Math.PI*2);ctx.stroke();}
        ctx.fillStyle="#111"; ctx.fillRect(e.x-16,e.y-(isBoss?28:22),32,6);
        ctx.fillStyle=isBoss?"#ff0066":"#ff4400"; ctx.fillRect(e.x-16,e.y-(isBoss?28:22),Math.round(32*e.hp/e.maxHp),6);
      }
      // Towers
      for(const t of towers){
        ctx.fillStyle=t.color+"33"; ctx.beginPath(); ctx.arc(t.x,t.y,t.range,0,Math.PI*2); ctx.fill();
        ctx.fillStyle="#111133"; ctx.beginPath(); ctx.arc(t.x,t.y,18,0,Math.PI*2); ctx.fill();
        ctx.fillStyle=t.color; ctx.shadowColor=t.color; ctx.shadowBlur=10;
        ctx.beginPath(); ctx.arc(t.x,t.y,14,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
        ctx.save(); ctx.translate(t.x,t.y); ctx.rotate(t.angle);
        ctx.fillStyle=t.color; ctx.fillRect(0,-4,22,8); ctx.restore();
      }
      // Projectiles
      for(const p of projectiles){
        ctx.fillStyle=p.color; ctx.shadowColor=p.color; ctx.shadowBlur=8;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.type===3?7:4,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      }
      // Cursor
      const td=TOWER_TYPES[selTower];
      const canPlace=gold>=td.cost&&!isTowerAt(cursorX,cursorY)&&!isOnPath(cursorX,cursorY);
      ctx.strokeStyle=canPlace?td.color+"88":"#ff000066"; ctx.lineWidth=2; ctx.setLineDash([6,4]);
      ctx.beginPath(); ctx.arc(cursorX,cursorY,18,0,Math.PI*2); ctx.stroke();
      ctx.strokeStyle=td.color+"33"; ctx.setLineDash([]); ctx.lineWidth=1;
      ctx.beginPath(); ctx.arc(cursorX,cursorY,td.range,0,Math.PI*2); ctx.stroke();
      // HUD
      ctx.fillStyle="#000022cc"; ctx.fillRect(0,H-60,W,60);
      TOWER_TYPES.forEach((t,i)=>{
        const bx=10+i*150,by=H-56;
        ctx.fillStyle=i===selTower?t.color+"33":"#111133"; ctx.fillRect(bx,by,140,52);
        ctx.strokeStyle=i===selTower?t.color:"#333366"; ctx.lineWidth=i===selTower?2:1; ctx.strokeRect(bx,by,140,52);
        ctx.fillStyle=t.color; ctx.font="7px 'Press Start 2P'"; ctx.textAlign="left";
        ctx.fillText(`[${i+1}] ${t.name}`,bx+4,by+14);
        ctx.fillStyle=gold>=t.cost?"#ffdd00":"#ff4444"; ctx.fillText(`${t.cost}G`,bx+4,by+28);
        ctx.fillStyle="#666"; ctx.fillText(t.desc,bx+4,by+42);
      });
      ctx.fillStyle="#fff"; ctx.font="9px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`💰${gold}  ❤️${lives}  WAVE ${wave}  SCORE ${score.toLocaleString()}`,10,14);
      ctx.textAlign="right";
      if(!waveActive&&waveTimer<=0){
        ctx.fillStyle="#00ff88"; ctx.shadowColor="#00ff88"; ctx.shadowBlur=8;
        ctx.fillText("N/SPACE → NEXT WAVE",W-10,14); ctx.shadowBlur=0;
      } else if(waveActive){
        ctx.fillStyle="#ff8800"; ctx.fillText(`ENEMIES: ${enemies.length}`,W-10,14);
      } else {
        ctx.fillStyle="#ffdd00"; ctx.fillText(`NEXT WAVE: ${Math.ceil(waveTimer)}s`,W-10,14);
      }
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.85)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff2244"; ctx.shadowColor="#ff2244"; ctx.shadowBlur=30;
        ctx.font="bold 24px 'Press Start 2P'"; ctx.fillText("BASE DESTROYED!",W/2,H/2-15); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(`WAVE ${wave}  SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= GRAVITY PLATFORMER =========
function createGravityPlatformerGame(): GameEngine {
  type Platform={x:number;y:number;w:number;h:number;color:string;moving:boolean;mx:number;mRange:number;mDir:number;mSpeed:number};
  type Coin={x:number;y:number;collected:boolean};
  type Hazard={x:number;y:number;w:number;h:number};
  let px=100,py=200,pvx=0,pvy=0,gravity=1,score=0,lives=3,level=1,dead=false;
  let platforms:Platform[]=[],coins:Coin[]=[],hazards:Hazard[]=[],particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let onGround=false,jumpCd=0,flipCd=0,prevKeys=new Set<string>(),invincible=0;
  const PLAYER_W=24,PLAYER_H=28;
  function genLevel(lv:number){
    platforms=[{x:0,y:400,w:280,h:14,color:"#00ffff",moving:false,mx:0,mRange:0,mDir:1,mSpeed:0}];
    coins=[]; hazards=[];
    const rng=()=>Math.random();
    for(let i=0;i<8+lv;i++){
      const x=120+i*90+rng()*40,y=80+rng()*320;
      const mov=lv>2&&rng()<0.3, mr=40+rng()*60, ms=40+rng()*30;
      platforms.push({x,y,w:70+rng()*60,h:12,color:["#00ff88","#ff00ff","#ffdd00","#00ffff"][Math.floor(rng()*4)],moving:mov,mx:x,mRange:mr,mDir:1,mSpeed:ms});
      if(rng()<0.6)coins.push({x:x+30,y:y-20,collected:false});
      if(lv>1&&rng()<0.25)hazards.push({x:x+10,y:y-16,w:20,h:16});
    }
    platforms.push({x:800+level*100,y:200,w:60,h:12,color:"#ffdd00",moving:false,mx:0,mRange:0,mDir:1,mSpeed:0});
  }
  return {
    init(){px=100;py=200;pvx=0;pvy=0;gravity=1;score=0;lives=3;level=1;dead=false;invincible=0;prevKeys=new Set();genLevel(1);},
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      const spd=210;
      if(keys.has("ArrowLeft")||keys.has("a"))pvx=-spd;
      else if(keys.has("ArrowRight")||keys.has("d"))pvx=spd;
      else pvx*=0.75;
      if((pressed("ArrowUp")||pressed("w")||pressed(" "))&&onGround&&jumpCd<=0){pvy=-520*gravity;jumpCd=0.1;for(let i=0;i<6;i++){const a=Math.random()*Math.PI;particles.push({x:px,y:py+PLAYER_H/2,vx:(Math.random()-0.5)*100,vy:Math.abs(Math.sin(a)*80),color:"#00ffff",life:0.3});}}
      if((pressed("ArrowDown")||pressed("s"))&&flipCd<=0){gravity*=-1;flipCd=0.5;for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;particles.push({x:px,y:py,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#ff00ff",life:0.4});}}
      jumpCd-=dt; flipCd-=dt; invincible-=dt;
      pvy+=980*gravity*dt; px+=pvx*dt; py+=pvy*dt;
      onGround=false;
      for(const pl of platforms){
        if(pl.moving){pl.mx+=pl.mDir*pl.mSpeed*dt;if(Math.abs(pl.mx-pl.x)>pl.mRange)pl.mDir*=-1;pl.x=pl.mx;}
        const bottom=py+PLAYER_H/2,top=py-PLAYER_H/2;
        if(px+PLAYER_W/2>pl.x&&px-PLAYER_W/2<pl.x+pl.w){
          if(gravity>0&&pvy>=0&&bottom>pl.y&&bottom<pl.y+pl.h+10){py=pl.y-PLAYER_H/2;pvy=0;onGround=true;}
          else if(gravity<0&&pvy<=0&&top<pl.y+pl.h&&top>pl.y-10){py=pl.y+pl.h+PLAYER_H/2;pvy=0;onGround=true;}
        }
      }
      for(const c of coins.filter(c=>!c.collected)){if(Math.hypot(px-c.x,py-c.y)<22){c.collected=true;score+=100*level;for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;particles.push({x:c.x,y:c.y,vx:Math.cos(a)*60,vy:Math.sin(a)*60,color:"#ffdd00",life:0.5});}}}
      if(invincible<=0)for(const h of hazards){if(px+PLAYER_W/2>h.x&&px-PLAYER_W/2<h.x+h.w&&py+PLAYER_H/2>h.y&&py-PLAYER_H/2<h.y+h.h){lives--;invincible=2;if(lives<=0)dead=true;else{px=100;py=200;pvy=0;}}}
      if(py>600||(py<-80)){lives--;if(lives<=0)dead=true;else{px=100;py=200;pvy=0;gravity=1;}}
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      if(coins.every(c=>c.collected)){level++;score+=500;genLevel(level);}
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      const bg=gravity>0?"#020810":"#100802";
      ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
      for(let i=0;i<50;i++){ctx.fillStyle=`rgba(255,255,255,${0.15+(i%4)*0.1})`;ctx.fillRect((i*137)%W,gravity>0?(i*97)%H:(H-(i*97)%H),1,1);}
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*2;ctx.beginPath();ctx.arc(pt.x,pt.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      for(const pl of platforms){ctx.fillStyle=pl.color;ctx.shadowColor=pl.color;ctx.shadowBlur=8;ctx.fillRect(pl.x,pl.y,pl.w,pl.h);ctx.shadowBlur=0;}
      for(const h of hazards){ctx.fillStyle="#ff0044";ctx.shadowColor="#ff0044";ctx.shadowBlur=6;ctx.beginPath();ctx.moveTo(h.x+h.w/2,h.y);ctx.lineTo(h.x+h.w,h.y+h.h);ctx.lineTo(h.x,h.y+h.h);ctx.closePath();ctx.fill();ctx.shadowBlur=0;}
      for(const c of coins.filter(c=>!c.collected)){ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=10;ctx.beginPath();ctx.arc(c.x,c.y,8,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}
      if(invincible<=0||Math.floor(invincible*10)%2===0){
        ctx.save();ctx.translate(px,py);if(gravity<0)ctx.scale(1,-1);
        ctx.fillStyle="#00ff88";ctx.shadowColor="#00ff88";ctx.shadowBlur=14;
        ctx.fillRect(-PLAYER_W/2,-PLAYER_H/2,PLAYER_W,PLAYER_H);
        ctx.beginPath();ctx.arc(0,-PLAYER_H/2-10,10,0,Math.PI*2);ctx.fill();
        ctx.fillStyle="#ffffff33";ctx.fillRect(-PLAYER_W/2,-PLAYER_H/2+4,PLAYER_W*0.4,PLAYER_H*0.3);
        ctx.restore();ctx.shadowBlur=0;
      }
      ctx.fillStyle="#000033cc";ctx.fillRect(0,0,W,28);
      ctx.fillStyle="#fff";ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";
      ctx.fillText(`LVL ${level}  COINS ${coins.filter(c=>c.collected).length}/${coins.length}  SCORE ${score.toLocaleString()}`,10,18);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,18);
      ctx.textAlign="center";ctx.fillStyle=gravity>0?"#00ff88":"#ff4400";ctx.font="7px 'Press Start 2P'";
      ctx.fillText(gravity>0?"↓ GRAVITY  [S] TO FLIP":"↑ GRAVITY  [S] TO FLIP",W/2,H-8);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 24px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+15);}
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= TENNIS / SPORTS PADDLE =========
function createTennisGame(): GameEngine {
  let ball={x:400,y:280,vx:250,vy:160,r:10};
  let p1={x:60,y:240,w:14,h:80,score:0},p2={x:726,y:240,w:14,h:80,score:0};
  let score=0,lives=3,level=1,dead=false,particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let servePause=1.5,serving=true,rally=0,maxRally=0,prevKeys=new Set<string>();
  function resetBall(dir:1|-1){ball={x:400,y:280,vx:dir*(240+level*15),vy:(Math.random()-0.5)*240,r:10};serving=true;servePause=1;}
  return {
    init(){p1={x:60,y:240,w:14,h:80,score:0};p2={x:726,y:240,w:14,h:80,score:0};score=0;lives=3;level=1;dead=false;rally=0;maxRally=0;serving=false;particles=[];prevKeys=new Set();resetBall(1);},
    update(dt,keys){
      if(dead)return;
      if(serving){servePause-=dt;if(servePause<=0)serving=false;return;}
      const spd=280+level*15;
      if(keys.has("w")||keys.has("ArrowUp"))p1.y-=spd*dt;
      if(keys.has("s")||keys.has("ArrowDown"))p1.y+=spd*dt;
      p1.y=Math.max(0,Math.min(560-p1.h,p1.y));
      // AI
      const aiTarget=ball.y-p2.h/2+(Math.random()-0.5)*20;
      p2.y+=(aiTarget-p2.y)*Math.min(1,dt*(2.5+level*0.3));
      p2.y=Math.max(0,Math.min(560-p2.h,p2.y));
      ball.x+=ball.vx*dt; ball.y+=ball.vy*dt;
      if(ball.y-ball.r<0){ball.y=ball.r;ball.vy=Math.abs(ball.vy);}
      if(ball.y+ball.r>560){ball.y=560-ball.r;ball.vy=-Math.abs(ball.vy);}
      // Paddle collisions
      if(ball.x-ball.r<p1.x+p1.w&&ball.x+ball.r>p1.x&&ball.y>p1.y&&ball.y<p1.y+p1.h){
        ball.vx=Math.abs(ball.vx)*1.05; ball.x=p1.x+p1.w+ball.r;
        const offset=(ball.y-(p1.y+p1.h/2))/(p1.h/2);
        ball.vy=offset*300+level*20; rally++;
        for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;particles.push({x:ball.x,y:ball.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#00ffff",life:0.3});}
        score+=10*level; maxRally=Math.max(maxRally,rally);
      }
      if(ball.x+ball.r>p2.x&&ball.x-ball.r<p2.x+p2.w&&ball.y>p2.y&&ball.y<p2.y+p2.h){
        ball.vx=-Math.abs(ball.vx)*1.02; ball.x=p2.x-ball.r;
        const offset=(ball.y-(p2.y+p2.h/2))/(p2.h/2);
        ball.vy=offset*280; rally++;
        for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;particles.push({x:ball.x,y:ball.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#ff00ff",life:0.3});}
        maxRally=Math.max(maxRally,rally);
      }
      if(ball.x-ball.r<0){p2.score++;rally=0;lives--;if(lives<=0)dead=true;else{resetBall(1);level=Math.ceil(p2.score/2)+1;}}
      if(ball.x+ball.r>800){p1.score++;rally=0;score+=50;resetBall(-1);level=Math.ceil(p1.score/2)+1;}
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#020a04"; ctx.fillRect(0,0,W,H);
      // Court
      ctx.strokeStyle="#00aa44"; ctx.lineWidth=2;
      ctx.strokeRect(60,30,W-120,H-60);
      ctx.setLineDash([15,10]); ctx.strokeStyle="rgba(0,255,80,0.3)"; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(W/2,30); ctx.lineTo(W/2,H-30); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(W/2,H/2,60,0,Math.PI*2); ctx.stroke();
      ctx.setLineDash([8,6]); ctx.beginPath(); ctx.moveTo(60,H/2); ctx.lineTo(W-60,H/2); ctx.stroke(); ctx.setLineDash([]);
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*2;ctx.beginPath();ctx.arc(pt.x,pt.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Ball
      ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      // Paddles
      ctx.fillStyle="#00ffff"; ctx.shadowColor="#00ffff"; ctx.shadowBlur=10; ctx.fillRect(p1.x,p1.y,p1.w,p1.h);
      ctx.fillStyle="#ff00ff"; ctx.shadowColor="#ff00ff"; ctx.shadowBlur=10; ctx.fillRect(p2.x,p2.y,p2.w,p2.h);
      ctx.shadowBlur=0;
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,32);
      ctx.fillStyle="#00ffff"; ctx.font="bold 18px 'Press Start 2P'"; ctx.textAlign="center";
      ctx.fillText(`${p1.score}`,W/2-60,22);
      ctx.fillStyle="#888"; ctx.font="10px 'Press Start 2P'"; ctx.fillText("vs",W/2,22);
      ctx.fillStyle="#ff00ff"; ctx.font="bold 18px 'Press Start 2P'"; ctx.fillText(`${p2.score}`,W/2+60,22);
      ctx.fillStyle="#ffdd00"; ctx.font="8px 'Press Start 2P'";
      ctx.fillText(`RALLY ${rally}  MAX ${maxRally}  SCORE ${score.toLocaleString()}`,W/2,H-8);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 24px 'Press Start 2P'";ctx.fillText("MATCH OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`SCORE: ${score.toLocaleString()}  MAX RALLY: ${maxRally}`,W/2,H/2+15);}
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= ICE HOCKEY =========
function createHockeyGame(): GameEngine {
  const W_C=800,H_C=560,GOAL_H=120,GOAL_Y=(H_C-GOAL_H)/2;
  type HockeyObj={x:number;y:number;vx:number;vy:number;r:number};
  let puck:HockeyObj={x:W_C/2,y:H_C/2,vx:(Math.random()-0.5)*300,vy:(Math.random()-0.5)*300,r:12};
  let p1={x:100,y:H_C/2,speed:240,score:0},p2={x:W_C-100,y:H_C/2,speed:180,score:0};
  let score=0,lives=3,level=1,dead=false,particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let goalFlash=0,goalFlashColor="#ffffff",prevKeys=new Set<string>();
  function resetPuck(){puck={x:W_C/2,y:H_C/2,vx:(Math.random()-0.5)*280*(1+level*0.1),vy:(Math.random()-0.5)*200*(1+level*0.1),r:12};}
  return {
    init(){p1={x:100,y:H_C/2,speed:240,score:0};p2={x:W_C-100,y:H_C/2,speed:180,score:0};score=0;lives=3;level=1;dead=false;goalFlash=0;particles=[];prevKeys=new Set();resetPuck();},
    update(dt,keys){
      if(dead)return;
      const spd=p1.speed+level*10;
      if(keys.has("w")||keys.has("ArrowUp"))p1.y-=spd*dt;
      if(keys.has("s")||keys.has("ArrowDown"))p1.y+=spd*dt;
      if(keys.has("a")||keys.has("ArrowLeft"))p1.x-=spd*dt;
      if(keys.has("d")||keys.has("ArrowRight"))p1.x+=spd*dt;
      p1.x=Math.max(40,Math.min(W_C/2-10,p1.x)); p1.y=Math.max(40,Math.min(H_C-40,p1.y));
      // AI
      const ai_spd=p2.speed+level*8;
      if(p2.y<puck.y-10)p2.y+=ai_spd*dt; else if(p2.y>puck.y+10)p2.y-=ai_spd*dt;
      if(puck.x>W_C/2)p2.x+=(puck.x-20-p2.x)*dt*2; else p2.x+=(W_C-100-p2.x)*dt*2;
      p2.x=Math.max(W_C/2+10,Math.min(W_C-40,p2.x)); p2.y=Math.max(40,Math.min(H_C-40,p2.y));
      puck.x+=puck.vx*dt; puck.y+=puck.vy*dt; puck.vx*=0.998; puck.vy*=0.998;
      if(puck.y<40+puck.r){puck.y=40+puck.r;puck.vy=Math.abs(puck.vy);}
      if(puck.y>H_C-40-puck.r){puck.y=H_C-40-puck.r;puck.vy=-Math.abs(puck.vy);}
      // Player collisions
      for(const pl of[{obj:p1,col:"#00ffff"},{obj:p2,col:"#ff00ff"}]){
        const d=Math.hypot(puck.x-pl.obj.x,puck.y-pl.obj.y);
        if(d<32+puck.r){
          const nx=(puck.x-pl.obj.x)/d,ny=(puck.y-pl.obj.y)/d;
          const speed=Math.hypot(puck.vx,puck.vy);
          puck.vx=nx*(Math.max(speed,200)+50); puck.vy=ny*(Math.max(speed,200)+50);
          puck.x=pl.obj.x+nx*(32+puck.r+2); puck.y=pl.obj.y+ny*(32+puck.r+2);
          for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;particles.push({x:puck.x,y:puck.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:pl.col,life:0.4});}
        }
      }
      // Goals
      if(puck.x-puck.r<40&&puck.y>GOAL_Y&&puck.y<GOAL_Y+GOAL_H){
        p2.score++;lives--;goalFlash=0.8;goalFlashColor="#ff2244";
        for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:puck.x,y:puck.y,vx:Math.cos(a)*200,vy:Math.sin(a)*200,color:"#ff2244",life:1});}
        if(lives<=0)dead=true; else{resetPuck();}
      }
      if(puck.x+puck.r>W_C-40&&puck.y>GOAL_Y&&puck.y<GOAL_Y+GOAL_H){
        p1.score++;score+=100*level;goalFlash=0.8;goalFlashColor="#00ffff";
        for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:puck.x,y:puck.y,vx:Math.cos(a)*200,vy:Math.sin(a)*200,color:"#00ffff",life:1});}
        resetPuck(); level++;
      }
      if(puck.x<30){puck.vx=Math.abs(puck.vx);} if(puck.x>W_C-30){puck.vx=-Math.abs(puck.vx);}
      if(goalFlash>0)goalFlash-=dt;
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#080820"; ctx.fillRect(0,0,W,H);
      if(goalFlash>0){ctx.fillStyle=`${goalFlashColor}${Math.floor(goalFlash*30).toString(16).padStart(2,"0")}`;ctx.fillRect(0,0,W,H);}
      // Ice rink
      ctx.strokeStyle="#223366"; ctx.lineWidth=3;
      ctx.strokeRect(40,40,W-80,H-80);
      ctx.strokeStyle="#1a2a44"; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(W/2,40); ctx.lineTo(W/2,H-40); ctx.stroke();
      ctx.beginPath(); ctx.arc(W/2,H/2,80,0,Math.PI*2); ctx.stroke();
      ctx.setLineDash([10,8]); ctx.strokeStyle="#1a3a1a"; ctx.lineWidth=1;
      ctx.beginPath(); ctx.arc(W/2,H/2,200,0,Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
      // Goals
      ctx.fillStyle="#00ffff22"; ctx.fillRect(0,GOAL_Y,44,GOAL_H);
      ctx.fillStyle="#ff00ff22"; ctx.fillRect(W-44,GOAL_Y,44,GOAL_H);
      ctx.strokeStyle="#00ffff"; ctx.lineWidth=3; ctx.shadowColor="#00ffff"; ctx.shadowBlur=8;
      ctx.strokeRect(4,GOAL_Y,40,GOAL_H);
      ctx.strokeStyle="#ff00ff"; ctx.shadowColor="#ff00ff"; ctx.strokeRect(W-44,GOAL_Y,40,GOAL_H);
      ctx.shadowBlur=0;
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*2;ctx.beginPath();ctx.arc(pt.x,pt.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      ctx.fillStyle="#00ffff"; ctx.shadowColor="#00ffff"; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(p1.x,p1.y,22,0,Math.PI*2); ctx.fill();
      ctx.fillStyle="#ff00ff"; ctx.shadowColor="#ff00ff"; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(p2.x,p2.y,22,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      ctx.fillStyle="#ccccff"; ctx.shadowColor="#ccccff"; ctx.shadowBlur=14;
      ctx.beginPath(); ctx.arc(puck.x,puck.y,puck.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,32);
      ctx.fillStyle="#00ffff"; ctx.font="bold 16px 'Press Start 2P'"; ctx.textAlign="center";
      ctx.fillText(`${p1.score}`,W/2-60,22); ctx.fillStyle="#888"; ctx.font="10px 'Press Start 2P'"; ctx.fillText(":",W/2,22);
      ctx.fillStyle="#ff00ff"; ctx.font="bold 16px 'Press Start 2P'"; ctx.fillText(`${p2.score}`,W/2+60,22);
      ctx.fillStyle="#ffdd00"; ctx.font="8px 'Press Start 2P'";
      ctx.fillText(`SCORE ${score.toLocaleString()}  LVL ${level}`,W/2,H-8);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,22);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 24px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`${p1.score} - ${p2.score}  SCORE: ${score.toLocaleString()}`,W/2,H/2+15);}
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= BASKETBALL =========
function createBasketballGame(): GameEngine {
  const HOOP_X=600,HOOP_Y=180,HOOP_R=28,BOARD_W=16;
  type Shot={x:number;y:number;vx:number;vy:number;active:boolean};
  let px=200,py=400,ball={x:200,y:400,vx:0,vy:0,active:false,scored:false};
  let shot:Shot={x:0,y:0,vx:0,vy:0,active:false};
  let score=0,lives=3,level=1,dead=false,timer=60,roundTimer=60;
  let power=0,angle=-Math.PI*0.6,charging=false,prevKeys=new Set<string>(),drawKeys=new Set<string>();
  let particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let showPower=false,shotResult="",resultTimer=0,shotCount=0,madeCount=0;
  return {
    init(){px=200;py=400;score=0;lives=3;level=1;dead=false;timer=60;power=0;charging=false;shotResult="";resultTimer=0;shotCount=0;madeCount=0;particles=[];ball={x:200,y:400,vx:0,vy:0,active:false,scored:false};prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      drawKeys = keys;
      timer-=dt; if(timer<=0){if(lives>1){lives--;timer=roundTimer;level++;ball={x:200,y:400,vx:0,vy:0,active:false,scored:false};}else dead=true;}
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      const released=(k:string)=>!keys.has(k)&&prevKeys.has(k);
      const spd=200+level*10;
      if(!ball.active){
        if(keys.has("a")||keys.has("ArrowLeft"))px-=spd*dt;
        if(keys.has("d")||keys.has("ArrowRight"))px+=spd*dt;
        px=Math.max(50,Math.min(500,px));
        if(keys.has("ArrowUp")||keys.has("w"))angle-=dt*1.5;
        if(keys.has("ArrowDown")||keys.has("s"))angle+=dt*1.5;
        angle=Math.max(-Math.PI*0.9,Math.min(-Math.PI*0.1,angle));
        if(keys.has(" ")||keys.has("z")){charging=true;power=Math.min(1,power+dt*1.4);showPower=true;}
        if((released(" ")||released("z"))&&charging){
          ball.x=px;ball.y=py-10;ball.vx=Math.cos(angle)*(300+power*500);ball.vy=Math.sin(angle)*(300+power*500);
          ball.active=true;ball.scored=false;charging=false;power=0;showPower=false;shotCount++;
        }
      } else {
        ball.vy+=700*dt; ball.x+=ball.vx*dt; ball.y+=ball.vy*dt; ball.vx*=0.998;
        if(!ball.scored){
          const dx=ball.x-HOOP_X,dy=ball.y-HOOP_Y;
          if(Math.hypot(dx,dy)<HOOP_R-6&&ball.vy>0){
            ball.scored=true;
            const dist=Math.hypot(px-HOOP_X,py-HOOP_Y);
            const pts=dist>350?3:dist>200?2:1;
            score+=pts*level*10;madeCount++;
            shotResult=pts===3?"3 POINTER! 🏀":pts===2?"NICE SHOT!":"LAYUP";
            resultTimer=1.5;
            for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:HOOP_X,y:HOOP_Y,vx:Math.cos(a)*(80+Math.random()*120),vy:Math.sin(a)*120-80,color:["#ff8800","#ffdd00","#ff4400"][Math.floor(Math.random()*3)],life:1});}
          }
        }
        if(ball.y>560||ball.x<0||ball.x>800){
          if(!ball.scored){shotResult="MISS";resultTimer=0.8;}
          ball={x:px,y:py,vx:0,vy:0,active:false,scored:false};
        }
        if(ball.y>510&&!ball.scored){ball.vy*=-0.6;ball.vx*=0.8;if(Math.abs(ball.vy)<20)ball.vy=0;}
      }
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.vy+=400*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      if(resultTimer>0)resultTimer-=dt;
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#0a0205"; ctx.fillRect(0,0,W,H);
      // Court floor
      const floor=ctx.createLinearGradient(0,420,0,H);
      floor.addColorStop(0,"#2a1000"); floor.addColorStop(1,"#0a0500");
      ctx.fillStyle=floor; ctx.fillRect(0,420,W,H-420);
      ctx.strokeStyle="#4a2800"; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(0,425); ctx.lineTo(W,425); ctx.stroke();
      // Backboard
      ctx.fillStyle="#222244"; ctx.fillRect(HOOP_X+HOOP_R+10,HOOP_Y-50,BOARD_W,100);
      ctx.strokeStyle="#4444aa"; ctx.lineWidth=2; ctx.strokeRect(HOOP_X+HOOP_R+10,HOOP_Y-50,BOARD_W,100);
      ctx.strokeStyle="#ffdd00"; ctx.lineWidth=2; ctx.strokeRect(HOOP_X+HOOP_R+12,HOOP_Y-20,BOARD_W-4,40);
      // Hoop
      ctx.strokeStyle="#ff4400"; ctx.shadowColor="#ff4400"; ctx.shadowBlur=10; ctx.lineWidth=5;
      ctx.beginPath(); ctx.arc(HOOP_X,HOOP_Y,HOOP_R,0,Math.PI*2); ctx.stroke(); ctx.shadowBlur=0;
      // Net
      for(let i=0;i<8;i++){
        const a=i/8*Math.PI*2;
        ctx.strokeStyle="rgba(255,255,255,0.2)"; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(HOOP_X+Math.cos(a)*HOOP_R,HOOP_Y+Math.sin(a)*HOOP_R);
        ctx.lineTo(HOOP_X+Math.cos(a)*(HOOP_R*0.5),HOOP_Y+50); ctx.stroke();
      }
      // Particles
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life;ctx.beginPath();ctx.arc(pt.x,pt.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Ball
      const bd=ball.active?ball:{x:px,y:py-10,vx:0,vy:0,active:false,scored:false};
      const ballGrad=ctx.createRadialGradient(bd.x-4,bd.y-4,2,bd.x,bd.y,14);
      ballGrad.addColorStop(0,"#ff8800"); ballGrad.addColorStop(0.6,"#cc4400"); ballGrad.addColorStop(1,"#882200");
      ctx.fillStyle=ballGrad; ctx.shadowColor="#ff6600"; ctx.shadowBlur=10;
      ctx.beginPath(); ctx.arc(bd.x,bd.y,14,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      ctx.strokeStyle="#000000aa"; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(bd.x,bd.y,14,-Math.PI/3,Math.PI/3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bd.x-14,bd.y); ctx.lineTo(bd.x+14,bd.y); ctx.stroke();
      // Player
      if(!ball.active){
        // Aim indicator
        if(showPower||drawKeys.has("ArrowUp")||drawKeys.has("ArrowDown")){
          ctx.strokeStyle="rgba(255,255,0,0.4)"; ctx.lineWidth=2; ctx.setLineDash([8,5]);
          ctx.beginPath(); ctx.moveTo(px,py-10);
          let sx=px,sy=py-10,svx=Math.cos(angle)*400,svy=Math.sin(angle)*400;
          for(let i=0;i<20;i++){svx*=0.98;svy+=700/60;sx+=svx/60;sy+=svy/60;if(sy>560)break;ctx.lineTo(sx,sy);}
          ctx.stroke(); ctx.setLineDash([]);
        }
        if(charging){
          ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=8;
          ctx.fillRect(px-20,py-35,40,8);
          ctx.fillStyle="#ff4400"; ctx.shadowColor="#ff4400"; ctx.fillRect(px-20,py-35,Math.round(40*power),8); ctx.shadowBlur=0;
        }
        ctx.fillStyle="#ff6699"; ctx.shadowColor="#ff6699"; ctx.shadowBlur=10;
        ctx.fillRect(px-12,py-50,24,40); ctx.beginPath(); ctx.arc(px,py-56,14,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      }
      // Shot result
      if(resultTimer>0){
        ctx.fillStyle=shotResult.includes("MISS")?"#ff2244":"#ffdd00";
        ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=15; ctx.globalAlpha=resultTimer;
        ctx.font="bold 18px 'Press Start 2P'"; ctx.textAlign="center";
        ctx.fillText(shotResult,W/2,200); ctx.globalAlpha=1; ctx.shadowBlur=0;
      }
      // HUD
      ctx.fillStyle="#000022cc"; ctx.fillRect(0,0,W,32);
      ctx.fillStyle="#ffdd00"; ctx.font="10px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`SCORE ${score}  ${madeCount}/${shotCount} FG`,10,20);
      ctx.textAlign="center"; ctx.fillStyle="#fff"; ctx.fillText(`⏱ ${Math.ceil(timer)}s  LVL ${level}`,W/2,20);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,20);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff8800";ctx.shadowColor="#ff8800";ctx.shadowBlur=30;ctx.font="bold 22px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-20);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`SCORE: ${score}  FG: ${madeCount}/${shotCount}`,W/2,H/2+10);}
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= BATTLESHIP =========
function createBattleshipGame(): GameEngine {
  const SIZE=8;
  type Cell={hit:boolean;ship:boolean};
  let playerGrid:Cell[][]=[],cpuGrid:Cell[][]=[];
  let playerShips:number[]=[], cpuShips:number[]=[];
  let cx=0,cy=0, score=0, lives=3, level=1, dead=false;
  let phase:"setup"|"player_turn"|"cpu_turn"|"win"|"lose"="setup";
  let lastHit:{x:number;y:number;hit:boolean}|null=null, cpuLastHit:{x:number;y:number}|null=null;
  let cpuHits:{x:number;y:number}[]=[], cpuMisses:{x:number;y:number}[]=[];
  let turnMsg="", turnMsgTimer=0, animTimer=0, prevKeys=new Set<string>();
  const SHIPS=[5,4,3,3,2];
  function makeGrid():Cell[][]{return Array.from({length:SIZE},()=>Array.from({length:SIZE},()=>({hit:false,ship:false})));}
  function placeShips(grid:Cell[][]){
    for(const len of SHIPS){
      let placed=false;
      while(!placed){
        const horiz=Math.random()<0.5;
        const maxX=horiz?SIZE-len:SIZE-1, maxY=horiz?SIZE-1:SIZE-len;
        const sx=Math.floor(Math.random()*(maxX+1)), sy=Math.floor(Math.random()*(maxY+1));
        let ok=true;
        for(let i=0;i<len;i++){const gx=sx+(horiz?i:0),gy=sy+(horiz?0:i);if(grid[gy][gx].ship)ok=false;}
        if(ok){for(let i=0;i<len;i++){const gx=sx+(horiz?i:0),gy=sy+(horiz?0:i);grid[gy][gx].ship=true;}placed=true;}
      }
    }
  }
  function countShips(grid:Cell[][]):number{let n=0;for(const row of grid)for(const c of row)if(c.ship&&!c.hit)n++;return n;}
  function cpuShoot(){
    let tx=-1,ty=-1;
    if(cpuLastHit){
      const dirs:Array<[number,number]>=[[0,-1],[0,1],[-1,0],[1,0]];
      for(const [dx,dy] of dirs){const nx=cpuLastHit.x+dx,ny=cpuLastHit.y+dy;if(nx>=0&&nx<SIZE&&ny>=0&&ny<SIZE&&!playerGrid[ny][nx].hit){tx=nx;ty=ny;break;}}
    }
    if(tx<0){
      const candidates:Array<[number,number]>=[];
      for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++)if(!playerGrid[y][x].hit)candidates.push([x,y]);
      if(candidates.length>0){const[cx,cy]=candidates[Math.floor(Math.random()*candidates.length)];tx=cx;ty=cy;}
    }
    if(tx>=0){
      playerGrid[ty][tx].hit=true;
      if(playerGrid[ty][tx].ship){cpuHits.push({x:tx,y:ty});cpuLastHit={x:tx,y:ty};turnMsg="CPU HIT YOUR SHIP!";}
      else{cpuMisses.push({x:tx,y:ty});cpuLastHit=null;turnMsg="CPU MISSED";}
    }
  }
  return {
    init(){playerGrid=makeGrid();cpuGrid=makeGrid();placeShips(playerGrid);placeShips(cpuGrid);cx=0;cy=0;score=0;lives=3;level=1;dead=false;phase="player_turn";lastHit=null;cpuLastHit=null;cpuHits=[];cpuMisses=[];turnMsg="YOUR TURN";turnMsgTimer=0;animTimer=0;prevKeys=new Set();playerShips=[countShips(playerGrid)];cpuShips=[countShips(cpuGrid)];},
    update(dt,keys){
      if(phase==="win"||phase==="lose"){if((keys.has(" ")||keys.has("Enter"))&&!prevKeys.has(" ")&&!prevKeys.has("Enter")){const self=createBattleshipGame();const newState=self.init;(self as any).init(undefined as any);return;}prevKeys=new Set(keys);return;}
      animTimer+=dt; turnMsgTimer-=dt;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(phase==="player_turn"){
        if(pressed("ArrowLeft")&&cx>0)cx--;
        if(pressed("ArrowRight")&&cx<SIZE-1)cx++;
        if(pressed("ArrowUp")&&cy>0)cy--;
        if(pressed("ArrowDown")&&cy<SIZE-1)cy++;
        if(pressed(" ")||pressed("Enter")||pressed("z")){
          if(!cpuGrid[cy][cx].hit){
            cpuGrid[cy][cx].hit=true;
            if(cpuGrid[cy][cx].ship){score+=100*level;lastHit={x:cx,y:cy,hit:true};turnMsg="DIRECT HIT! 💥";}
            else{lastHit={x:cx,y:cy,hit:false};turnMsg="MISS";}
            turnMsgTimer=1.5;
            if(countShips(cpuGrid)===0){phase="win";}
            else{phase="cpu_turn";}
          }
        }
      } else if(phase==="cpu_turn"){
        turnMsgTimer-=0; // already counting
        if(turnMsgTimer<=0){
          cpuShoot(); turnMsgTimer=1.5;
          if(countShips(playerGrid)===0){lives--;if(lives<=0){phase="lose";dead=true;}else{playerGrid=makeGrid();placeShips(playerGrid);level++;}}
          else phase="player_turn";
        }
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010510"; ctx.fillRect(0,0,W,H);
      const CELL=44,MARGIN=30,OX=40,OY=60;
      const OX2=OX+SIZE*CELL+60;
      function drawGrid(grid:Cell[][],offsetX:number,isPlayer:boolean,cursorActive:boolean){
        ctx.fillStyle=isPlayer?"#001122":"#002211";
        ctx.fillRect(offsetX,OY,SIZE*CELL,SIZE*CELL);
        for(let y=0;y<SIZE;y++){
          for(let x=0;x<SIZE;x++){
            const cell=grid[y][x];
            const cx2=offsetX+x*CELL, cy2=OY+y*CELL;
            if(cell.hit){
              if(cell.ship){ctx.fillStyle="#ff4400";ctx.shadowColor="#ff4400";ctx.shadowBlur=10;ctx.fillRect(cx2+2,cy2+2,CELL-4,CELL-4);ctx.fillStyle="#ff8800";ctx.shadowBlur=0;ctx.fillRect(cx2+8,cy2+8,CELL-16,CELL-16);}
              else{ctx.fillStyle="#002244";ctx.fillRect(cx2+2,cy2+2,CELL-4,CELL-4);ctx.fillStyle="#004488";ctx.beginPath();ctx.arc(cx2+CELL/2,cy2+CELL/2,5,0,Math.PI*2);ctx.fill();}
            }
            if(isPlayer&&cell.ship&&!cell.hit){ctx.fillStyle="#00ff8822";ctx.fillRect(cx2+2,cy2+2,CELL-4,CELL-4);}
            if(cursorActive&&x===cx&&y===cy&&!cell.hit){
              ctx.strokeStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=12+Math.sin(animTimer*5)*6;
              ctx.lineWidth=3;ctx.strokeRect(cx2+2,cy2+2,CELL-4,CELL-4);ctx.shadowBlur=0;
            }
            ctx.strokeStyle="rgba(100,100,255,0.2)";ctx.lineWidth=1;ctx.strokeRect(cx2,cy2,CELL,CELL);
          }
        }
        ctx.strokeStyle=isPlayer?"#0088ff":"#00ff88";ctx.lineWidth=2;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=8;
        ctx.strokeRect(offsetX,OY,SIZE*CELL,SIZE*CELL);ctx.shadowBlur=0;
      }
      drawGrid(cpuGrid,OX2,false,phase==="player_turn");
      drawGrid(playerGrid,OX,true,false);
      ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.textAlign="center";
      ctx.fillText("YOUR FLEET",OX+SIZE*CELL/2,OY-12);
      ctx.fillText("ENEMY WATERS",OX2+SIZE*CELL/2,OY-12);
      // HUD
      ctx.fillStyle="#000033cc";ctx.fillRect(0,0,W,36);
      ctx.fillStyle="#00ffff";ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";
      ctx.fillText(`SCORE ${score.toLocaleString()}  LVL ${level}`,10,22);
      const enemy=countShips(cpuGrid),ally=countShips(playerGrid);
      ctx.textAlign="center"; ctx.fillStyle="#ffdd00"; ctx.fillText(`ENEMY: ${enemy} ships  |  YOURS: ${ally} ships`,W/2,22);
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,22);
      if(turnMsgTimer>0){
        ctx.fillStyle=turnMsg.includes("HIT")?"#ff4400":turnMsg.includes("CPU HIT")?"#ff0044":"#00aaff";
        ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=12;ctx.textAlign="center";ctx.font="bold 12px 'Press Start 2P'";
        ctx.fillText(turnMsg,W/2,H-24);ctx.shadowBlur=0;
      }
      ctx.fillStyle="#555";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";
      ctx.fillText("ARROWS: AIM   SPACE/ENTER: FIRE",W/2,H-8);
      if(phase==="win"||phase==="lose"){
        ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);
        ctx.textAlign="center";
        ctx.fillStyle=phase==="win"?"#ffdd00":"#ff2244";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=30;
        ctx.font="bold 24px 'Press Start 2P'";ctx.fillText(phase==="win"?"VICTORY! 🎖️":"FLEET SUNK!",W/2,H/2-15);ctx.shadowBlur=0;
        ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`SCORE: ${score.toLocaleString()}`,W/2,H/2+15);
        ctx.fillStyle="#888";ctx.fillText("SPACE TO PLAY AGAIN",W/2,H/2+45);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= PROCEDURAL MAZE =========
function createMazeGame(): GameEngine {
  const COLS=19,ROWS=13,CELL=38;
  type MazeCell={walls:[boolean,boolean,boolean,boolean];visited:boolean};
  let maze:MazeCell[][]=[],px=0,py=0,goalX=COLS-1,goalY=ROWS-1;
  let score=0,lives=3,level=1,dead=false,timer=0,timeLimit=60;
  let particles:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let prevKeys=new Set<string>(),moveCd=0;
  function generateMaze(){
    maze=Array.from({length:ROWS},()=>Array.from({length:COLS},()=>({walls:[true,true,true,true],visited:false})));
    const stack:Array<[number,number]>=[[0,0]];
    maze[0][0].visited=true;
    while(stack.length>0){
      const[cx,cy]=stack[stack.length-1];
      const nbrs:Array<[number,number,number,number]>=[];
      if(cy>0&&!maze[cy-1][cx].visited)nbrs.push([cx,cy-1,0,2]);
      if(cx<COLS-1&&!maze[cy][cx+1].visited)nbrs.push([cx+1,cy,1,3]);
      if(cy<ROWS-1&&!maze[cy+1][cx].visited)nbrs.push([cx,cy+1,2,0]);
      if(cx>0&&!maze[cy][cx-1].visited)nbrs.push([cx-1,cy,3,1]);
      if(nbrs.length>0){
        const[nx,ny,dCurr,dNext]=nbrs[Math.floor(Math.random()*nbrs.length)];
        maze[cy][cx].walls[dCurr]=false;
        maze[ny][nx].walls[dNext]=false;
        maze[ny][nx].visited=true;
        stack.push([nx,ny]);
      } else stack.pop();
    }
    px=0; py=0; timer=timeLimit; goalX=COLS-1; goalY=ROWS-1;
  }
  return {
    init(){generateMaze();score=0;lives=3;level=1;dead=false;particles=[];prevKeys=new Set();moveCd=0;},
    update(dt,keys){
      if(dead)return;
      timer-=dt; if(timer<=0){lives--;if(lives<=0)dead=true;else{generateMaze();timer=timeLimit;}}
      moveCd-=dt;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(moveCd<=0){
        let moved=false;
        if((keys.has("ArrowUp")||keys.has("w"))&&!maze[py][px].walls[0]){py--;moved=true;}
        else if((keys.has("ArrowRight")||keys.has("d"))&&!maze[py][px].walls[1]){px++;moved=true;}
        else if((keys.has("ArrowDown")||keys.has("s"))&&!maze[py][px].walls[2]){py++;moved=true;}
        else if((keys.has("ArrowLeft")||keys.has("a"))&&!maze[py][px].walls[3]){px--;moved=true;}
        if(moved){moveCd=0.12;for(let i=0;i<4;i++){const a=Math.random()*Math.PI*2;particles.push({x:px*CELL+20+Math.cos(a)*4,y:py*CELL+50+Math.sin(a)*4,vx:Math.cos(a)*30,vy:Math.sin(a)*30,color:"#00ffff",life:0.3});}}
      }
      if(px===goalX&&py===goalY){
        score+=Math.round(timer*100)*level; level++;
        for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:goalX*CELL+20,y:goalY*CELL+50,vx:Math.cos(a)*120,vy:Math.sin(a)*120,color:"#ffdd00",life:0.8});}
        generateMaze();timer=Math.max(20,timeLimit-level*3);
      }
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010308"; ctx.fillRect(0,0,W,H);
      const OX=10,OY=40;
      ctx.fillStyle="#030315"; ctx.fillRect(OX,OY,COLS*CELL,ROWS*CELL);
      // Draw maze walls
      ctx.strokeStyle="#00aaff"; ctx.lineWidth=2; ctx.shadowColor="#00aaff"; ctx.shadowBlur=4;
      for(let y=0;y<ROWS;y++){
        for(let x=0;x<COLS;x++){
          const cx=OX+x*CELL, cy=OY+y*CELL;
          const c=maze[y][x];
          ctx.beginPath();
          if(c.walls[0]){ctx.moveTo(cx,cy);ctx.lineTo(cx+CELL,cy);}
          if(c.walls[1]){ctx.moveTo(cx+CELL,cy);ctx.lineTo(cx+CELL,cy+CELL);}
          if(c.walls[2]){ctx.moveTo(cx,cy+CELL);ctx.lineTo(cx+CELL,cy+CELL);}
          if(c.walls[3]){ctx.moveTo(cx,cy);ctx.lineTo(cx,cy+CELL);}
          ctx.stroke();
        }
      }
      ctx.shadowBlur=0;
      // Goal
      const glow=0.5+0.5*Math.sin(Date.now()*0.005);
      ctx.fillStyle=`rgba(255,221,0,${0.3+glow*0.4})`; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=20+glow*10;
      ctx.fillRect(OX+goalX*CELL+4,OY+goalY*CELL+4,CELL-8,CELL-8); ctx.shadowBlur=0;
      ctx.fillStyle="#ffdd00"; ctx.font="16px serif"; ctx.textAlign="center";
      ctx.fillText("🏁",OX+goalX*CELL+CELL/2,OY+goalY*CELL+CELL/2+6);
      // Particles
      for(const pt of particles){ctx.fillStyle=pt.color;ctx.globalAlpha=pt.life*3;ctx.beginPath();ctx.arc(pt.x+OX,pt.y+OY-40,3,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Player
      ctx.fillStyle="#00ff88"; ctx.shadowColor="#00ff88"; ctx.shadowBlur=14;
      ctx.beginPath(); ctx.arc(OX+px*CELL+CELL/2,OY+py*CELL+CELL/2,10,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,36);
      ctx.fillStyle="#fff"; ctx.font="8px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`LVL ${level}  SCORE ${score.toLocaleString()}`,10,22);
      const timeColor=timer<10?"#ff2244":timer<20?"#ffdd00":"#00ff88";
      ctx.fillStyle=timeColor; ctx.textAlign="center";
      ctx.shadowColor=timeColor; ctx.shadowBlur=timer<10?10:0;
      ctx.fillText(`⏱ ${Math.ceil(timer)}s`,W/2,22); ctx.shadowBlur=0;
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,22);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.85)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 24px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.fillText(`LVL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+15);}
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= SNAKE — 100 LEVELS =========
function createSnakeGame(): GameEngine {
  const COLS=26,ROWS=19,TILE=27;
  const OX=Math.floor((800-COLS*TILE)/2),OY=54;
  type Pt={x:number;y:number};
  type Spark={x:number;y:number;vx:number;vy:number;color:string;life:number};
  let snake:Pt[],dir:Pt,nextDir:Pt,apples:Pt[],walls:Pt[];
  let score=0,lives=3,level=1,dead=false;
  let moveTimer=0,moveInterval=0.18,applesEaten=0,applesNeeded=5;
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let prevKeys=new Set<string>();
  let sparks:Spark[]=[];
  function rndPt():Pt{
    let p:Pt;
    const max=200; let i=0;
    do{p={x:Math.floor(Math.random()*COLS),y:Math.floor(Math.random()*ROWS)};i++;}
    while(i<max&&(snake.some(s=>s.x===p.x&&s.y===p.y)||walls.some(w=>w.x===p.x&&w.y===p.y)||apples.some(a=>a.x===p.x&&a.y===p.y)));
    return p;
  }
  function spawnApples(n:number){apples=[];for(let i=0;i<n;i++)apples.push(rndPt());}
  function buildWalls(lv:number){
    walls=[];
    if(lv<5)return;
    for(let x=0;x<COLS;x++){walls.push({x,y:0});walls.push({x,y:ROWS-1});}
    for(let y=1;y<ROWS-1;y++){walls.push({x:0,y});walls.push({x:COLS-1,y});}
    if(lv>=10){const cx=Math.floor(COLS/2);for(let y=2;y<ROWS-4;y+=2)walls.push({x:cx,y});}
    if(lv>=20){for(let x=3;x<COLS-3;x+=3)walls.push({x,y:Math.floor(ROWS/2)});}
    if(lv>=35){for(let y=3;y<ROWS-3;y+=3)walls.push({x:Math.floor(COLS/3),y});}
  }
  function initLevel(lv:number){
    const sx=Math.floor(COLS/2),sy=Math.floor(ROWS/2);
    snake=[{x:sx,y:sy},{x:sx-1,y:sy},{x:sx-2,y:sy}];
    dir={x:1,y:0};nextDir={x:1,y:0};
    buildWalls(lv);
    applesNeeded=Math.min(3+lv*2,60);applesEaten=0;
    moveInterval=Math.max(0.045,0.18-lv*0.013);
    moveTimer=0;
    spawnApples(lv>=20?3:lv>=10?2:1);
  }
  return {
    init(){score=0;lives=3;level=1;dead=false;flashTimer=0;sparks=[];initLevel(1);prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      if((keys.has("ArrowUp")||keys.has("w"))&&dir.y===0)nextDir={x:0,y:-1};
      if((keys.has("ArrowDown")||keys.has("s"))&&dir.y===0)nextDir={x:0,y:1};
      if((keys.has("ArrowLeft")||keys.has("a"))&&dir.x===0)nextDir={x:-1,y:0};
      if((keys.has("ArrowRight")||keys.has("d"))&&dir.x===0)nextDir={x:1,y:0};
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.88;s.vy*=0.88;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      moveTimer-=dt;
      if(moveTimer<=0){
        moveTimer=moveInterval;dir={...nextDir};
        const head=snake[0];
        let nx=head.x+dir.x,ny=head.y+dir.y;
        if(level<5){nx=(nx+COLS)%COLS;ny=(ny+ROWS)%ROWS;}
        const hitWall=walls.some(w=>w.x===nx&&w.y===ny)||(level>=5&&(nx<0||nx>=COLS||ny<0||ny>=ROWS));
        const hitSelf=snake.slice(1).some(s=>s.x===nx&&s.y===ny);
        if(hitWall||hitSelf){
          for(const seg of snake){const a=Math.random()*Math.PI*2;sparks.push({x:OX+seg.x*TILE+TILE/2,y:OY+seg.y*TILE+TILE/2,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#00ff88",life:0.7});}
          lives--;if(lives<=0)dead=true;else{flashMsg="OUCH!";flashColor="#ff2244";flashTimer=1.5;initLevel(level);}
          prevKeys=new Set(keys);return;
        }
        const ateIdx=apples.findIndex(a=>a.x===nx&&a.y===ny);
        snake.unshift({x:nx,y:ny});
        if(ateIdx>=0){
          const ax=OX+nx*TILE+TILE/2,ay=OY+ny*TILE+TILE/2;
          for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;sparks.push({x:ax,y:ay,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:"#ff0066",life:0.6});}
          score+=level*10;applesEaten++;apples.splice(ateIdx,1);
          if(apples.length===0){
            if(applesEaten>=applesNeeded){level++;flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;initLevel(level);prevKeys=new Set(keys);return;}
            spawnApples(level>=20?3:level>=10?2:1);
          }
        } else snake.pop();
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#020010";ctx.fillRect(0,0,W,H);
      ctx.fillStyle="#040018";ctx.fillRect(OX,OY,COLS*TILE,ROWS*TILE);
      ctx.strokeStyle="#080028";ctx.lineWidth=1;
      for(let x=0;x<=COLS;x++){ctx.beginPath();ctx.moveTo(OX+x*TILE,OY);ctx.lineTo(OX+x*TILE,OY+ROWS*TILE);ctx.stroke();}
      for(let y=0;y<=ROWS;y++){ctx.beginPath();ctx.moveTo(OX,OY+y*TILE);ctx.lineTo(OX+COLS*TILE,OY+y*TILE);ctx.stroke();}
      for(const w of walls){ctx.fillStyle="#1a0044";ctx.fillRect(OX+w.x*TILE,OY+w.y*TILE,TILE,TILE);ctx.fillStyle="#2a0066";ctx.fillRect(OX+w.x*TILE+2,OY+w.y*TILE+2,TILE-4,TILE-4);}
      const pulse=0.5+0.5*Math.sin(Date.now()*0.006);
      for(const a of apples){
        const ax=OX+a.x*TILE+TILE/2,ay=OY+a.y*TILE+TILE/2;
        ctx.fillStyle="#ff0066";ctx.shadowColor="#ff0066";ctx.shadowBlur=8+pulse*10;
        ctx.beginPath();ctx.arc(ax,ay,TILE/2-3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      }
      for(let i=0;i<snake.length;i++){
        const seg=snake[i];const t=1-i/snake.length;
        const gv=Math.floor(80+t*175).toString(16).padStart(2,"0");
        ctx.fillStyle=i===0?"#00ff88":`#00${gv}44`;
        ctx.shadowColor=i===0?"#00ff88":"transparent";ctx.shadowBlur=i===0?12:0;
        ctx.fillRect(OX+seg.x*TILE+1,OY+seg.y*TILE+1,TILE-2,TILE-2);ctx.shadowBlur=0;
        if(i===0){
          ctx.fillStyle="#001100";
          ctx.beginPath();ctx.arc(OX+seg.x*TILE+TILE/2+dir.x*5-dir.y*4,OY+seg.y*TILE+TILE/2+dir.y*5-dir.x*4,3,0,Math.PI*2);ctx.fill();
          ctx.beginPath();ctx.arc(OX+seg.x*TILE+TILE/2+dir.x*5+dir.y*4,OY+seg.y*TILE+TILE/2+dir.y*5+dir.x*4,3,0,Math.PI*2);ctx.fill();
        }
      }
      for(const s of sparks){ctx.globalAlpha=s.life;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,48);
      ctx.fillStyle="#00ff88";ctx.shadowColor="#00ff88";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}`,W/2,18);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="7px 'Press Start 2P'";ctx.fillText(`APPLES ${applesEaten}/${applesNeeded}`,W/2,34);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      ctx.fillStyle="#111";ctx.fillRect(OX,OY+ROWS*TILE+5,COLS*TILE,5);
      ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=4;ctx.fillRect(OX,OY+ROWS*TILE+5,Math.round(COLS*TILE*applesEaten/Math.max(1,applesNeeded)),5);ctx.shadowBlur=0;
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 20px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*1.5);ctx.fillText(flashMsg,W/2,H/2);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 22px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= BREAKOUT — 100 LEVELS =========
function createBreakoutGame(): GameEngine {
  const BC=9,BH=14,OX=20;
  type Brick={x:number;y:number;w:number;h:number;hp:number;maxHp:number;color:string;mvDir:number;mvRange:number;mvOrig:number;mvTimer:number};
  type Ball={x:number;y:number;vx:number;vy:number};
  type PUp={x:number;y:number;vy:number;type:string;color:string};
  type Spark={x:number;y:number;vx:number;vy:number;color:string;life:number};
  let paddle:{x:number;w:number;y:number};
  let balls:Ball[],bricks:Brick[],pups:PUp[],sparks:Spark[];
  let score=0,lives=3,level=1,dead=false;
  let launched=false,widePaddle=0,slowBall=0;
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let prevKeys=new Set<string>(),paddleVx=0;
  function bColor(hp:number,mhp:number){return mhp>=3?["#ff4444","#ff8800","#ffdd00"][Math.min(hp-1,2)]:hp>=2?"#aa88ff":"#00ffff";}
  function genLevel(lv:number,W:number){
    const bw=Math.floor((W-OX*2)/BC)-3;
    const rows=Math.min(3+Math.floor(lv*0.7),10);
    bricks=[];
    for(let r=0;r<rows;r++){
      for(let c=0;c<BC;c++){
        const skip=lv>=8&&Math.random()<0.12;
        if(skip)continue;
        const mhp=lv>=30?3:lv>=15?Math.random()<0.3?3:lv>=8?Math.random()<0.4?2:1:1:lv>=8?Math.random()<0.3?2:1:1;
        const mv=lv>=12&&Math.random()<0.3;
        const bx=OX+c*(bw+3);
        bricks.push({x:bx,y:70+r*(BH+3),w:bw,h:BH,hp:mhp,maxHp:mhp,color:bColor(mhp,mhp),mvDir:mv?1:0,mvRange:mv?20+Math.random()*30:0,mvOrig:mv?bx:bx,mvTimer:mv?Math.random()*2:0});
      }
    }
  }
  function mkBall(W:number,spd:number):Ball{return {x:W/2,y:paddle.y-14,vx:(Math.random()-0.5)*spd*0.7,vy:-spd};}
  function resetBall(W:number){launched=false;balls=[mkBall(W,0)];balls[0].vx=0;balls[0].vy=0;}
  function ballSpd(){return Math.min(260+level*18,520)*(slowBall>0?0.6:1);}
  return {
    init(){score=0;lives=3;level=1;dead=false;launched=false;widePaddle=0;slowBall=0;pups=[];sparks=[];prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const W=800,H=560;
      if(!paddle){paddle={x:W/2-60,w:120,y:H-44};}
      if(!balls||balls.length===0){resetBall(W);}
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(!launched&&(pressed(" ")||pressed("z"))){const spd=ballSpd();balls[0].vx=(Math.random()-0.5)*spd*0.7;balls[0].vy=-spd;launched=true;}
      if(widePaddle>0){widePaddle-=dt;paddle.w=widePaddle>0?160:120;}
      if(slowBall>0)slowBall-=dt;
      // Paddle movement
      if(keys.has("ArrowLeft")||keys.has("a"))paddleVx=-520;
      else if(keys.has("ArrowRight")||keys.has("d"))paddleVx=520;
      else paddleVx=0;
      paddle.x=Math.max(0,Math.min(W-paddle.w,paddle.x+paddleVx*dt));
      // Moving bricks
      for(const b of bricks){
        if(b.mvDir!==0){b.mvTimer+=dt;b.x=b.mvOrig+Math.sin(b.mvTimer)*b.mvRange;}
      }
      // Spark update
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      // Power-ups
      for(const p of pups){p.y+=p.vy*dt;}
      for(const p of pups){
        if(p.y>paddle.y&&p.y<paddle.y+20&&p.x>paddle.x&&p.x<paddle.x+paddle.w){
          if(p.type==="wide")widePaddle=8;
          if(p.type==="slow")slowBall=6;
          if(p.type==="multi"){const b=balls[0];if(b){balls.push({x:b.x,y:b.y,vx:-b.vx,vy:b.vy});balls.push({x:b.x,y:b.y,vx:b.vx*0.5,vy:b.vy});}}
          if(p.type==="life")lives++;
          p.vy=0;
        }
      }
      pups=pups.filter(p=>p.y<H&&p.vy!==0);
      // Balls
      const deadBalls:number[]=[];
      for(let bi=0;bi<balls.length;bi++){
        const ball=balls[bi];
        if(!launched){ball.x=paddle.x+paddle.w/2;ball.y=paddle.y-14;continue;}
        ball.x+=ball.vx*dt;ball.y+=ball.vy*dt;
        if(ball.x<8){ball.x=8;ball.vx=Math.abs(ball.vx);}
        if(ball.x>W-8){ball.x=W-8;ball.vx=-Math.abs(ball.vx);}
        if(ball.y<8){ball.y=8;ball.vy=Math.abs(ball.vy);}
        if(ball.y>H+20){deadBalls.push(bi);continue;}
        // Paddle
        if(ball.y>paddle.y-8&&ball.y<paddle.y+18&&ball.x>paddle.x&&ball.x<paddle.x+paddle.w){
          ball.y=paddle.y-8;ball.vy=-Math.abs(ball.vy);
          const rel=(ball.x-(paddle.x+paddle.w/2))/(paddle.w/2);
          ball.vx=rel*ballSpd()*0.9;
        }
        // Bricks
        for(let br=bricks.length-1;br>=0;br--){
          const b=bricks[br];
          if(ball.x>b.x&&ball.x<b.x+b.w&&ball.y>b.y&&ball.y<b.y+b.h+8&&ball.y<b.y+b.h+Math.abs(ball.vy)*dt*2){
            const fromBottom=ball.y>b.y+b.h-6;const fromLeft=ball.x<b.x+6;const fromRight=ball.x>b.x+b.w-6;
            if(fromLeft||fromRight)ball.vx*=-1;else ball.vy*=-1;
            b.hp--;score+=level*(fromBottom?5:10);
            b.color=bColor(b.hp,b.maxHp);
            for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;sparks.push({x:b.x+b.w/2,y:b.y+b.h/2,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:b.color,life:0.5});}
            if(b.hp<=0){
              bricks.splice(br,1);
              if(Math.random()<0.12){const t=["wide","slow","multi","life"][Math.floor(Math.random()*4)];pups.push({x:b.x+b.w/2,y:b.y,vy:80,type:t,color:t==="wide"?"#00ffff":t==="slow"?"#aa00ff":t==="multi"?"#ffdd00":"#ff0066"});}
            }
            break;
          }
        }
      }
      for(let i=deadBalls.length-1;i>=0;i--)balls.splice(deadBalls[i],1);
      if(balls.length===0){lives--;if(lives<=0){dead=true;}else{resetBall(W);launched=false;}}
      if(bricks.length===0){level++;flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;genLevel(level,W);resetBall(W);launched=false;pups=[];}
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      if(!paddle)paddle={x:W/2-60,w:120,y:H-44};
      if(!balls||balls.length===0)balls=[{x:W/2,y:paddle.y-14,vx:0,vy:0}];
      if(!bricks||bricks.length===0)genLevel(level,W);
      ctx.fillStyle="#020010";ctx.fillRect(0,0,W,H);
      // Bricks
      for(const b of bricks){
        ctx.fillStyle=b.color;ctx.shadowColor=b.color;ctx.shadowBlur=6;
        ctx.fillRect(b.x,b.y,b.w,b.h);
        ctx.fillStyle="rgba(255,255,255,0.15)";ctx.fillRect(b.x,b.y,b.w,4);
        if(b.maxHp>=2){ctx.strokeStyle="rgba(255,255,255,0.2)";ctx.lineWidth=1;ctx.strokeRect(b.x+1,b.y+1,b.w-2,b.h-2);}
        ctx.shadowBlur=0;
      }
      // Power-ups
      for(const p of pups){
        ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=10;
        ctx.fillRect(p.x-14,p.y,28,12);ctx.shadowBlur=0;
        ctx.fillStyle="#000";ctx.font="6px 'Press Start 2P'";ctx.textAlign="center";
        ctx.fillText(p.type.toUpperCase(),p.x,p.y+9);
      }
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Paddle
      ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=14;
      ctx.beginPath();ctx.roundRect(paddle.x,paddle.y,paddle.w,14,7);ctx.fill();ctx.shadowBlur=0;
      ctx.fillStyle="rgba(255,255,255,0.3)";ctx.beginPath();ctx.roundRect(paddle.x+4,paddle.y+2,paddle.w-8,4,3);ctx.fill();
      // Balls
      for(const ball of balls){
        ctx.fillStyle="#ffffff";ctx.shadowColor="#ffffff";ctx.shadowBlur=14;
        ctx.beginPath();ctx.arc(ball.x,ball.y,8,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      }
      if(!launched){ctx.fillStyle="#888";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("SPACE TO LAUNCH",W/2,H-20);}
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,48);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}`,W/2,28);ctx.shadowBlur=0;
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(widePaddle>0){ctx.fillStyle="#00aaff";ctx.textAlign="left";ctx.font="7px 'Press Start 2P'";ctx.fillText("WIDE",10,42);}
      if(slowBall>0){ctx.fillStyle="#aa00ff";ctx.textAlign="center";ctx.fillText("SLOW BALL",W/2,42);}
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 18px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H/2);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 22px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= SPACE INVADERS — 100 WAVES =========
function createSpaceInvadersGame(): GameEngine {
  type Alien={x:number;y:number;type:number;alive:boolean;hp:number};
  type Bullet={x:number;y:number;vy:number;fromPlayer:boolean};
  type Bunker={x:number;y:number;hp:number;maxHp:number};
  type UFO={x:number;y:number;active:boolean;dir:number};
  type Spark={x:number;y:number;vx:number;vy:number;color:string;life:number};
  const COLS=11,ROWS_BASE=4;
  const AW=46,AH=28;
  let aliens:Alien[],bullets:Bullet[],bunkers:Bunker[],sparks:Spark[];
  let ufo:UFO={x:-80,y:50,active:false,dir:1};
  let playerX=380,playerW=50;
  let score=0,lives=3,level=1,dead=false;
  let alienDir=1,alienMoveTimer=0,alienShootTimer=0;
  let alienDropPending=false,alienSpeed=0.8;
  let playerBulletCd=0;
  let prevKeys=new Set<string>(),flashTimer=0,flashMsg="",flashColor="#ffdd00";
  function alienColor(type:number){return["#ff4444","#ff8800","#ffdd00","#00ff88","#aa00ff"][type]||"#fff";}
  function initWave(lv:number,W:number,H:number){
    const rows=Math.min(ROWS_BASE+Math.floor(lv/4),8);
    aliens=[];
    for(let r=0;r<rows;r++){
      for(let c=0;c<COLS;c++){
        const type=Math.min(Math.floor(r*lv*0.1),4);
        aliens.push({x:W*0.1+c*AW,y:70+r*(AH+8),type,alive:true,hp:1+Math.floor(lv/10)});
      }
    }
    alienSpeed=Math.max(0.12,0.8-lv*0.04);
    alienShootTimer=1.5-lv*0.05;
    alienDir=1;alienDropPending=false;bullets=bullets||[];
    if(!bunkers||lv===1)bunkers=[70,220,370,520].map(bx=>({x:bx,y:H-100,hp:12,maxHp:12}));
    ufo={x:-80,y:48,active:false,dir:1};
  }
  return {
    init(){score=0;lives=3;level=1;dead=false;playerX=380;bullets=[];sparks=[];prevKeys=new Set();initWave(1,800,560);},
    update(dt,keys){
      if(dead)return;
      const W=800,H=560;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if((keys.has("ArrowLeft")||keys.has("a")))playerX=Math.max(20,playerX-320*dt);
      if((keys.has("ArrowRight")||keys.has("d")))playerX=Math.min(W-20-playerW,playerX+320*dt);
      playerBulletCd-=dt;
      if((pressed(" ")||pressed("z"))&&playerBulletCd<=0&&bullets.filter(b=>b.fromPlayer).length<3){
        bullets.push({x:playerX+playerW/2,y:H-80,vy:-550,fromPlayer:true});playerBulletCd=0.22;
      }
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      // UFO
      if(!ufo.active&&Math.random()<0.002){ufo.active=true;ufo.x=Math.random()<0.5?-60:W+60;ufo.dir=ufo.x<0?1:-1;}
      if(ufo.active){ufo.x+=ufo.dir*120*dt;if(ufo.x>W+80||ufo.x<-80)ufo.active=false;}
      // Alien movement
      alienMoveTimer-=dt;
      if(alienMoveTimer<=0){
        alienMoveTimer=alienSpeed;
        const liveAliens=aliens.filter(a=>a.alive);
        let minX=Infinity,maxX=-Infinity;
        for(const a of liveAliens){minX=Math.min(minX,a.x);maxX=Math.max(maxX,a.x+AW);}
        if(alienDropPending){for(const a of aliens)a.y+=24;alienDir*=-1;alienDropPending=false;}
        if((alienDir>0&&maxX>W-20)||(alienDir<0&&minX<20)){alienDropPending=true;}
        else{for(const a of aliens)a.x+=alienDir*AW*0.5;}
        if(liveAliens.some(a=>a.y>H-110)){dead=true;return;}
      }
      // Alien shooting
      alienShootTimer-=dt;
      if(alienShootTimer<=0){
        alienShootTimer=Math.max(0.3,1.5-level*0.06);
        const live=aliens.filter(a=>a.alive);
        if(live.length>0){const a=live[Math.floor(Math.random()*live.length)];bullets.push({x:a.x+AW/2,y:a.y+AH,vy:220+level*8,fromPlayer:false});}
      }
      // Bullets
      for(const b of bullets)b.y+=b.vy*dt;
      // Player bullets vs aliens + UFO
      for(const b of bullets.filter(b=>b.fromPlayer)){
        for(const a of aliens.filter(a=>a.alive)){
          if(b.x>a.x&&b.x<a.x+AW&&b.y>a.y&&b.y<a.y+AH){
            a.hp--;b.vy=0;const pts=a.type*100+level*10;score+=pts;
            const cx=a.x+AW/2,cy=a.y+AH/2;
            for(let i=0;i<12;i++){const ang=Math.random()*Math.PI*2;sparks.push({x:cx,y:cy,vx:Math.cos(ang)*120,vy:Math.sin(ang)*120,color:alienColor(a.type),life:0.6});}
            if(a.hp<=0)a.alive=false;
          }
        }
        if(ufo.active&&b.x>ufo.x-30&&b.x<ufo.x+30&&b.y>ufo.y-15&&b.y<ufo.y+15){
          score+=500+level*50;ufo.active=false;b.vy=0;
          flashMsg=`+${500+level*50} UFO!`;flashColor="#ff8800";flashTimer=1;
          for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;sparks.push({x:ufo.x,y:ufo.y,vx:Math.cos(a)*150,vy:Math.sin(a)*150,color:"#ff8800",life:0.8});}
        }
        // Bunkers
        for(const bk of bunkers){if(b.x>bk.x&&b.x<bk.x+60&&b.y>bk.y&&b.y<bk.y+24&&bk.hp>0){bk.hp--;b.vy=0;}}
      }
      // Enemy bullets vs player + bunkers
      for(const b of bullets.filter(b=>!b.fromPlayer)){
        if(b.x>playerX&&b.x<playerX+playerW&&b.y>H-88&&b.y<H-66){
          lives--;b.vy=0;flashMsg="HIT!";flashColor="#ff2244";flashTimer=0.8;
          for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;sparks.push({x:playerX+playerW/2,y:H-78,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:"#00ffff",life:0.5});}
          if(lives<=0)dead=true;
        }
        for(const bk of bunkers){if(b.x>bk.x&&b.x<bk.x+60&&b.y>bk.y&&b.y<bk.y+24&&bk.hp>0){bk.hp--;b.vy=0;}}
      }
      bullets=bullets.filter(b=>b.vy!==0&&b.y>0&&b.y<H);
      if(aliens.every(a=>!a.alive)){level++;flashMsg=`WAVE ${level}!`;flashColor="#00ffff";flashTimer=1.5;initWave(level,W,H);}
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010008";ctx.fillRect(0,0,W,H);
      // Stars
      for(let i=0;i<60;i++){const sx=(i*137)%W,sy=(i*97+level*7)%H;ctx.fillStyle="rgba(255,255,255,0.3)";ctx.fillRect(sx,sy,1,1);}
      // Bunkers
      for(const bk of bunkers){
        if(bk.hp<=0)continue;
        const pct=bk.hp/bk.maxHp;
        ctx.fillStyle=pct>0.6?"#00aa44":pct>0.3?"#aa6600":"#aa2200";
        ctx.fillRect(bk.x,bk.y,60,24);ctx.fillRect(bk.x+10,bk.y-10,40,12);
        ctx.fillRect(bk.x,bk.y+24,14,10);ctx.fillRect(bk.x+46,bk.y+24,14,10);
      }
      // UFO
      if(ufo.active){
        const pulse=0.5+0.5*Math.sin(Date.now()*0.012);
        ctx.fillStyle="#ff8800";ctx.shadowColor="#ff8800";ctx.shadowBlur=8+pulse*12;
        ctx.beginPath();ctx.ellipse(ufo.x,ufo.y,30,14,0,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.ellipse(ufo.x,ufo.y-8,14,8,0,0,Math.PI*2);ctx.fill();
        ctx.shadowBlur=0;
      }
      // Aliens
      const frame=Math.floor(Date.now()/400)%2;
      for(const a of aliens){
        if(!a.alive)continue;
        const col=alienColor(a.type);
        ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=6;
        const ax=a.x+4,ay=a.y+2,aw=AW-8,ah=AH-4;
        ctx.fillRect(ax,ay,aw,ah);
        // Legs
        const legOff=frame===0?2:-2;
        ctx.fillRect(ax,ay+ah,6,6+legOff);ctx.fillRect(ax+aw-6,ay+ah,6,6+legOff);
        ctx.fillRect(ax+aw/2-4,ay+ah,8,4-legOff);
        // Eyes
        ctx.fillStyle="#000";ctx.fillRect(ax+6,ay+6,8,6);ctx.fillRect(ax+aw-14,ay+6,8,6);
        ctx.fillStyle="#fff";ctx.fillRect(ax+8,ay+7,4,4);ctx.fillRect(ax+aw-12,ay+7,4,4);
        ctx.shadowBlur=0;
      }
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Bullets
      for(const b of bullets){
        ctx.fillStyle=b.fromPlayer?"#00ffff":"#ff4444";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=8;
        ctx.fillRect(b.x-2,b.y-8,4,16);ctx.shadowBlur=0;
      }
      // Player ship
      ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=14;
      ctx.beginPath();ctx.moveTo(playerX+playerW/2,H-88);ctx.lineTo(playerX+playerW,H-68);ctx.lineTo(playerX,H-68);ctx.closePath();ctx.fill();
      ctx.fillRect(playerX+playerW/2-8,H-72,16,14);ctx.shadowBlur=0;
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,44);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`WAVE ${level}  ALIENS ${aliens.filter(a=>a.alive).length}`,W/2,28);ctx.shadowBlur=0;
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){flashTimer-=0.016;ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=20;ctx.font="bold 16px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*3);ctx.fillText(flashMsg,W/2,H/2);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`WAVE ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= TETRIS — 100 LEVELS =========
function createTetrisGame(): GameEngine {
  const COLS=10,ROWS=20,TILE=26,OX=260,OY=30;
  type Piece={shape:number[][];color:string;x:number;y:number};
  const PIECES=[
    [[1,1,1,1]],
    [[1,1],[1,1]],
    [[0,1,0],[1,1,1]],
    [[1,0,0],[1,1,1]],
    [[0,0,1],[1,1,1]],
    [[1,1,0],[0,1,1]],
    [[0,1,1],[1,1,0]],
  ];
  const COLORS=["#00ffff","#ffdd00","#aa00ff","#ff8800","#0044ff","#00ff88","#ff0066"];
  let board:number[][],piece:Piece|null,nextPiece:Piece|null;
  let score=0,lives=1,level=1,dead=false,linesCleared=0,totalLines=0;
  let dropTimer=0,lockTimer=0,lockDelay=0.5;
  let softDrop=false,prevKeys=new Set<string>();
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  function mkPiece(pi:number):Piece{const s=PIECES[pi];return{shape:s.map(r=>[...r]),color:COLORS[pi],x:Math.floor(COLS/2)-Math.floor(s[0].length/2),y:0};}
  function rndPiece(){return mkPiece(Math.floor(Math.random()*PIECES.length));}
  function rotate(p:Piece):Piece{const r=p.shape[0].length,c=p.shape.length;const ns:number[][]=Array.from({length:r},()=>Array(c).fill(0));for(let y=0;y<c;y++)for(let x=0;x<r;x++)ns[x][c-1-y]=p.shape[y][x];return {...p,shape:ns};}
  function collides(p:Piece,b:number[][]){for(let y=0;y<p.shape.length;y++)for(let x=0;x<p.shape[y].length;x++){if(!p.shape[y][x])continue;const nx=p.x+x,ny=p.y+y;if(nx<0||nx>=COLS||ny>=ROWS)return true;if(ny>=0&&b[ny][nx])return true;}return false;}
  function place(p:Piece,b:number[][]){for(let y=0;y<p.shape.length;y++)for(let x=0;x<p.shape[y].length;x++){if(p.shape[y][x]&&p.y+y>=0)b[p.y+y][p.x+x]=COLORS.indexOf(p.color)+1;}}
  function clearLines(b:number[][]):{count:number}{let count=0;for(let y=ROWS-1;y>=0;y--){if(b[y].every(c=>c>0)){for(let r=y;r>0;r--)b[r]=[...b[r-1]];b[0]=Array(COLS).fill(0);count++;y++;}}return{count};}
  function dropInterval(){return Math.max(0.04,0.8-level*0.07);}
  return {
    init(){board=Array.from({length:ROWS},()=>Array(COLS).fill(0));piece=rndPiece();nextPiece=rndPiece();score=0;lives=1;level=1;dead=false;linesCleared=0;totalLines=0;dropTimer=0;lockTimer=0;sparks=[];prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(!piece){piece=nextPiece||rndPiece();nextPiece=rndPiece();if(collides(piece,board)){dead=true;return;}}
      // Move
      if(pressed("ArrowLeft")||pressed("a")){const np={...piece,x:piece.x-1};if(!collides(np,board))piece=np;}
      if(pressed("ArrowRight")||pressed("d")){const np={...piece,x:piece.x+1};if(!collides(np,board))piece=np;}
      if(pressed("ArrowUp")||pressed("z")||pressed("w")){const rp=rotate(piece);if(!collides(rp,board))piece=rp;}
      if(pressed(" ")){let p2={...piece};while(!collides({...p2,y:p2.y+1},board))p2.y++;place(p2,board);piece=null;lockTimer=0;score+=2;}
      softDrop=keys.has("ArrowDown")||keys.has("s");
      // Drop
      dropTimer-=dt*(softDrop?6:1);
      if(dropTimer<=0){
        dropTimer=dropInterval();
        const np={...piece!,y:piece!.y+1};
        if(!collides(np,board)){piece=np;if(softDrop)score+=1;}
        else{
          lockTimer+=dt;
          if(lockTimer>=lockDelay){
            place(piece!,board);
            const {count}=clearLines(board);
            linesCleared+=count;totalLines+=count;
            if(count>0){
              const pts=[0,100,300,500,800][count]*(level);
              score+=pts;
              const msgs=["","SINGLE!","DOUBLE!","TRIPLE!","TETRIS!!"];
              flashMsg=msgs[count];flashColor=count>=4?"#ff0066":"#ffdd00";flashTimer=1.5;
              const oy2=OY+ROWS*TILE/2;
              for(let i=0;i<count*12;i++){const a=Math.random()*Math.PI*2;sparks.push({x:OX+COLS*TILE/2,y:oy2,vx:Math.cos(a)*(80+count*30),vy:Math.sin(a)*(80+count*30),color:COLORS[Math.floor(Math.random()*COLORS.length)],life:0.8});}
            }
            if(linesCleared>=level*10){level++;linesCleared-=level*10;flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;}
            piece=null;lockTimer=0;
          }
        }
      }
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#020010";ctx.fillRect(0,0,W,H);
      // Board border
      ctx.strokeStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=10;ctx.lineWidth=2;
      ctx.strokeRect(OX-2,OY-2,COLS*TILE+4,ROWS*TILE+4);ctx.shadowBlur=0;
      ctx.fillStyle="#010012";ctx.fillRect(OX,OY,COLS*TILE,ROWS*TILE);
      // Grid
      ctx.strokeStyle="#0a0028";ctx.lineWidth=1;
      for(let x=0;x<=COLS;x++){ctx.beginPath();ctx.moveTo(OX+x*TILE,OY);ctx.lineTo(OX+x*TILE,OY+ROWS*TILE);ctx.stroke();}
      for(let y=0;y<=ROWS;y++){ctx.beginPath();ctx.moveTo(OX,OY+y*TILE);ctx.lineTo(OX+COLS*TILE,OY+y*TILE);ctx.stroke();}
      // Board blocks
      for(let y=0;y<ROWS;y++)for(let x=0;x<COLS;x++){
        if(!board[y][x])continue;
        const col=COLORS[board[y][x]-1];
        ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=4;
        ctx.fillRect(OX+x*TILE+1,OY+y*TILE+1,TILE-2,TILE-2);
        ctx.fillStyle="rgba(255,255,255,0.2)";ctx.fillRect(OX+x*TILE+1,OY+y*TILE+1,TILE-2,4);
        ctx.shadowBlur=0;
      }
      // Ghost piece
      if(piece){
        let ghost={...piece};while(!collides({...ghost,y:ghost.y+1},board))ghost.y++;
        for(let y2=0;y2<ghost.shape.length;y2++)for(let x2=0;x2<ghost.shape[y2].length;x2++){
          if(!ghost.shape[y2][x2])continue;
          ctx.fillStyle="rgba(255,255,255,0.1)";ctx.fillRect(OX+(ghost.x+x2)*TILE+1,OY+(ghost.y+y2)*TILE+1,TILE-2,TILE-2);
        }
        // Active piece
        for(let y2=0;y2<piece.shape.length;y2++)for(let x2=0;x2<piece.shape[y2].length;x2++){
          if(!piece.shape[y2][x2])continue;
          ctx.fillStyle=piece.color;ctx.shadowColor=piece.color;ctx.shadowBlur=8;
          ctx.fillRect(OX+(piece.x+x2)*TILE+1,OY+(piece.y+y2)*TILE+1,TILE-2,TILE-2);
          ctx.fillStyle="rgba(255,255,255,0.25)";ctx.fillRect(OX+(piece.x+x2)*TILE+1,OY+(piece.y+y2)*TILE+1,TILE-2,4);
          ctx.shadowBlur=0;
        }
      }
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Next piece panel
      ctx.fillStyle="#000022ee";ctx.fillRect(OX+COLS*TILE+14,OY,120,110);
      ctx.strokeStyle="#aa00ff";ctx.shadowColor="#aa00ff";ctx.shadowBlur=6;ctx.lineWidth=1;
      ctx.strokeRect(OX+COLS*TILE+14,OY,120,110);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="6px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("NEXT",OX+COLS*TILE+74,OY+14);
      if(nextPiece){
        for(let y2=0;y2<nextPiece.shape.length;y2++)for(let x2=0;x2<nextPiece.shape[y2].length;x2++){
          if(!nextPiece.shape[y2][x2])continue;
          ctx.fillStyle=nextPiece.color;ctx.shadowColor=nextPiece.color;ctx.shadowBlur=6;
          ctx.fillRect(OX+COLS*TILE+24+x2*22,OY+26+y2*22,20,20);ctx.shadowBlur=0;
        }
      }
      // Score panel
      ctx.fillStyle="#000022ee";ctx.fillRect(OX+COLS*TILE+14,OY+120,120,120);
      ctx.fillStyle="#ffdd00";ctx.font="6px 'Press Start 2P'";ctx.textAlign="center";ctx.shadowColor="#ffdd00";ctx.shadowBlur=6;
      ctx.fillText(`SCORE`,OX+COLS*TILE+74,OY+140);ctx.fillText(`${score}`,OX+COLS*TILE+74,OY+158);ctx.shadowBlur=0;
      ctx.fillStyle="#00ffff";ctx.fillText(`LEVEL`,OX+COLS*TILE+74,OY+180);ctx.fillText(`${level}`,OX+COLS*TILE+74,OY+196);
      ctx.fillStyle="#888";ctx.fillText(`LINES`,OX+COLS*TILE+74,OY+218);ctx.fillText(`${totalLines}`,OX+COLS*TILE+74,OY+232);
      // Main HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,OX,H);ctx.fillRect(OX+COLS*TILE+4,0,W-OX-COLS*TILE-4,OY);
      ctx.fillStyle="#ff6699";ctx.textAlign="center";for(let i=0;i<lives;i++)ctx.fillText("♥",OX/2,H-20-i*20);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font=`bold ${flashMsg.includes("TETRIS")?18:14}px 'Press Start 2P'`;ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,OX+COLS*TILE/2,H/2);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);ctx.fillText(`LINES: ${totalLines}`,W/2,H/2+38);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= TYPING RACER — EDUCATIONAL, 100 LEVELS =========
function createTypingRacerGame(): GameEngine {
  const WORDS_EASY=["cat","dog","run","fly","sun","map","key","box","aim","hit","net","zip","pop","fog","gem","jet","lab","mob","oak","pad","raw","sea","ten","van","win","yak","zoo","ace","bay","cup","dip","egg","fan","gap","hay","ice","jar","kit","log","mud","nap","oak","pen","quiz","red","sat","tab","use","vex","wet","yes"];
  const WORDS_MED=["space","flash","storm","neon","blast","cyber","pixel","power","turbo","laser","prime","ultra","hyper","delta","alpha","omega","viper","nexus","pulse","surge","swift","brave","craft","drive","eagle","forge","globe","hover","index","jumbo","karma","light","magic","north","orbit","quest","radar","solar","tiger","unity","valor","wrath","xenon","yacht","zonal"];
  const WORDS_HARD=["quantum","circuit","phantom","thunder","blazing","crystal","diamond","eclipse","fantasy","gravity","horizon","journey","kingdom","landing","mystery","network","origins","perform","quality","roaming","starship","triumph","universe","vibrant","warrior","extreme","yearning","zenith","abstract","brilliant","catalyst","dazzling","eloquent","fracture","glorious"];
  const WORDS_EXPERT=["algorithm","bandwidth","cybernetic","debugging","eloquence","frequency","geometric","hydraulic","intricate","jubilant","kinematic","logarithm","mechanism","numerical","objective","perimeter","quadratic","recursive","synthetic","technical","universal","vibration","wavelength","xenophile","yesterday","zealously","algebraic","biosphere","cognitive","dynamical"];
  type FallingWord={word:string;x:number;y:number;typed:number;speed:number;color:string;id:number};
  let words:FallingWord[]=[],typed="",score=0,lives=3,level=1,dead=false;
  let spawnTimer=0,spawnInterval=3,nextId=0;
  let combo=0,maxCombo=0;
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let wpm=0,wordsCompleted=0,sessionTimer=0;
  let prevKeys=new Set<string>();
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  function getWordList(lv:number){return lv<=10?WORDS_EASY:lv<=25?WORDS_MED:lv<=50?WORDS_HARD:WORDS_EXPERT;}
  function rndWord(lv:number){const w=getWordList(lv);return w[Math.floor(Math.random()*w.length)];}
  function wordColor(lv:number){return lv<=10?"#00ff88":lv<=25?"#00ffff":lv<=50?"#ffdd00":"#ff0066";}
  function spawnWord(lv:number,W:number){
    const word=rndWord(lv);
    const x=40+Math.random()*(W-120);
    words.push({word,x,y:-20,typed:0,speed:30+lv*3,color:wordColor(lv),id:nextId++});
  }
  return {
    init(){words=[];typed="";score=0;lives=3;level=1;dead=false;spawnTimer=0;spawnInterval=3;nextId=0;combo=0;maxCombo=0;flashTimer=0;wpm=0;wordsCompleted=0;sessionTimer=0;sparks=[];prevKeys=new Set();},
    update(dt,keys){
      if(dead)return;
      const W=800,H=560;
      sessionTimer+=dt;
      if(flashTimer>0)flashTimer-=dt;
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      spawnTimer-=dt;
      const maxActive=1+Math.floor(level/5);
      if(spawnTimer<=0&&words.length<maxActive){
        spawnTimer=Math.max(0.6,spawnInterval-level*0.04);
        spawnWord(level,W);
      }
      for(const w of words)w.y+=w.speed*dt;
      // Words reaching bottom = miss
      const missed=words.filter(w=>w.y>H-60);
      for(const w of missed){
        lives--;combo=0;
        flashMsg=`MISS: "${w.word}"`;flashColor="#ff2244";flashTimer=1;
        if(lives<=0)dead=true;
      }
      words=words.filter(w=>w.y<=H-60);
      // KEY INPUT — detect newly pressed keys this frame
      const pressed2=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      for(const ch of "abcdefghijklmnopqrstuvwxyz"){if(pressed2(ch))typed+=ch;if(pressed2(ch.toUpperCase()))typed+=ch;}
      if(pressed2("Backspace"))typed=typed.slice(0,-1);
      if(pressed2("Enter")||pressed2(" ")){
        const match=words.find(w=>w.word===typed);
        if(match){
          const pts=(match.word.length*10+combo*5)*Math.max(1,Math.floor(level/5));
          score+=pts;wordsCompleted++;combo++;if(combo>maxCombo)maxCombo=combo;
          wpm=Math.round(wordsCompleted*60/Math.max(1,sessionTimer));
          const cx=match.x+match.word.length*9,cy=match.y;
          for(let i=0;i<12;i++){const a=Math.random()*Math.PI*2;sparks.push({x:cx,y:cy,vx:Math.cos(a)*120,vy:Math.sin(a)*120,color:match.color,life:0.6});}
          words=words.filter(w=>w.id!==match.id);
          if(combo>=5){flashMsg=`${combo}x COMBO!`;flashColor="#ff0066";flashTimer=0.8;}
          if(wordsCompleted>=level*5){level++;words=[];typed="";flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;}
          typed="";
        } else typed="";
      }
      // Auto-match: if typed word perfectly matches a falling word, highlight it
      for(const w of words)w.typed=words.find(fw=>fw.id===w.id&&typed.length>0&&w.word.startsWith(typed))?typed.length:w.typed;
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010010";ctx.fillRect(0,0,W,H);
      // Lane dividers
      for(let x=0;x<W;x+=80){ctx.fillStyle="rgba(255,255,255,0.02)";ctx.fillRect(x,0,1,H);}
      // Falling words
      for(const w of words){
        const pct=w.typed/w.word.length;
        const lineW=w.word.length*11;
        // Background glow
        ctx.fillStyle="rgba(0,0,0,0.5)";ctx.fillRect(w.x-4,w.y-18,lineW+8,24);
        // Typed portion (bright)
        ctx.fillStyle=w.color;ctx.shadowColor=w.color;ctx.shadowBlur=10;
        ctx.font="bold 13px 'Press Start 2P'";ctx.textAlign="left";
        for(let i=0;i<w.word.length;i++){
          ctx.fillStyle=i<w.typed?"#ffffff":w.color;
          ctx.shadowBlur=i<w.typed?0:8;
          ctx.fillText(w.word[i],w.x+i*11,w.y);
        }
        ctx.shadowBlur=0;
        // Progress bar under word
        ctx.fillStyle="rgba(255,255,255,0.1)";ctx.fillRect(w.x,w.y+2,lineW,3);
        ctx.fillStyle=w.color;ctx.fillRect(w.x,w.y+2,Math.round(lineW*pct),3);
        // Danger zone warning
        if(w.y>H-150){ctx.globalAlpha=0.3+0.7*(w.y-H+150)/90;ctx.fillStyle="#ff2244";ctx.fillRect(w.x-4,w.y-18,lineW+8,24);ctx.globalAlpha=1;}
      }
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Input box
      ctx.fillStyle="#000033";ctx.fillRect(0,H-52,W,52);
      ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.strokeStyle="#00ffff";ctx.lineWidth=2;
      ctx.strokeRect(W/2-160,H-44,320,34);ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="11px 'Press Start 2P'";ctx.textAlign="left";
      ctx.fillText(typed,W/2-150,H-22);
      if(Math.floor(Date.now()/500)%2===0){const curX=W/2-150+typed.length*12;ctx.fillStyle="#00ffff";ctx.fillRect(curX,H-38,2,22);}
      ctx.fillStyle="#444";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("TYPE WORD → ENTER",W/2,H-4);
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}  WPM ${wpm}`,W/2,20);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`WORDS ${wordsCompleted}/${level*5}  COMBO ${combo}x`,W/2,36);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 16px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H/2-80);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-20);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  WPM ${wpm}`,W/2,H/2+10);ctx.fillText(`BEST COMBO: ${maxCombo}x`,W/2,H/2+30);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= MATH BATTLE — EDUCATIONAL RPG, 100 LEVELS =========
function createMathBattleGame(): GameEngine {
  type Enemy={name:string;hp:number;maxHp:number;atk:number;color:string;emoji:string};
  type Question={a:number;b:number;op:string;answer:number;choices:number[]};
  const ENEMIES=[
    {name:"SLIME",hp:30,maxHp:30,atk:5,color:"#00ff88",emoji:"🟢"},
    {name:"GOBLIN",hp:50,maxHp:50,atk:8,color:"#88ff00",emoji:"👺"},
    {name:"ORC",hp:80,maxHp:80,atk:12,color:"#ff8800",emoji:"💪"},
    {name:"MAGE",hp:60,maxHp:60,atk:15,color:"#aa00ff",emoji:"🧙"},
    {name:"DRAGON",hp:150,maxHp:150,atk:20,color:"#ff2244",emoji:"🐉"},
    {name:"TITAN",hp:250,maxHp:250,atk:28,color:"#ffdd00",emoji:"👑"},
  ];
  let enemy:Enemy,question:Question|null;
  let typed="",score=0,lives=3,level=1,dead=false;
  let pHp=100,pMaxHp=100,pAtk=20;
  let enemyIdx=0,killCount=0;
  let phaseTimer=0,phase:"question"|"result"|"levelup"="question";
  let resultCorrect=false,resultText="",resultColor="#fff";
  let comboCount=0,flashTimer=0;
  let prevKeys=new Set<string>();
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let enemyShake=0,playerShake=0;
  function mkQuestion(lv:number):Question{
    const ops=lv<=5?["+","+"]:lv<=10?["+","-"]:lv<=20?["+","-","×"]:lv<=30?["+","-","×","÷"]:["+","-","×","÷","^2"];
    const op=ops[Math.floor(Math.random()*ops.length)];
    let a=0,b=0,answer=0;
    const range=Math.min(5+lv*2,99);
    if(op==="+"){a=Math.floor(Math.random()*range)+1;b=Math.floor(Math.random()*range)+1;answer=a+b;}
    else if(op==="-"){a=Math.floor(Math.random()*range)+5;b=Math.floor(Math.random()*a)+1;answer=a-b;}
    else if(op==="×"){a=Math.floor(Math.random()*Math.min(12,3+lv))+2;b=Math.floor(Math.random()*Math.min(12,3+lv))+2;answer=a*b;}
    else if(op==="÷"){b=Math.floor(Math.random()*10)+2;a=b*(Math.floor(Math.random()*12)+1);answer=a/b;}
    else{a=Math.floor(Math.random()*15)+2;answer=a*a;b=0;}
    const choices:number[]=[];choices.push(answer);
    while(choices.length<4){const off=Math.floor(Math.random()*10+1)*(Math.random()<0.5?1:-1);const c=answer+off;if(!choices.includes(c)&&c>=0)choices.push(c);}
    for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
    return{a,b,op,answer,choices};
  }
  function spawnEnemy(lv:number):Enemy{
    const idx=Math.min(Math.floor((lv-1)/8),ENEMIES.length-1);
    const e=ENEMIES[idx];
    const scale=1+lv*0.15;
    return{...e,hp:Math.round(e.maxHp*scale),maxHp:Math.round(e.maxHp*scale),atk:Math.round(e.atk*scale)};
  }
  return {
    init(){score=0;lives=3;level=1;dead=false;pHp=100;pMaxHp=100;pAtk=20;enemyIdx=0;killCount=0;typed="";comboCount=0;sparks=[];prevKeys=new Set();enemy=spawnEnemy(1);question=mkQuestion(1);phase="question";},
    update(dt,keys){
      if(dead)return;
      if(enemyShake>0)enemyShake-=dt;if(playerShake>0)playerShake-=dt;
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      if(phase==="result"){phaseTimer-=dt;if(phaseTimer<=0){phase="question";question=mkQuestion(level);typed="";}}
      if(phase==="levelup"){phaseTimer-=dt;if(phaseTimer<=0){phase="question";question=mkQuestion(level);typed="";}}
      // KEY INPUT — detect newly pressed keys
      if(!dead&&phase==="question"){
        const pm=(k:string)=>keys.has(k)&&!prevKeys.has(k);
        for(const ch of "0123456789"){if(pm(ch))typed+=ch;}
        if(pm("-")&&typed.length===0)typed="-";
        if(pm("Backspace"))typed=typed.slice(0,-1);
        // Choice shortcuts: 1/2/3/4 select multiple choice
        if(question){
          if(pm("1"))typed=String(question.choices[0]);
          if(pm("2"))typed=String(question.choices[1]);
          if(pm("3"))typed=String(question.choices[2]);
          if(pm("4"))typed=String(question.choices[3]??question.choices[0]);
        }
        if(pm("Enter")&&typed.length>0&&question){
          const ans=parseInt(typed,10);
          const correct=ans===question.answer;
        if(correct){
          const pts=(10+comboCount*5)*level;score+=pts;comboCount++;killCount++;
          resultText=`✓ CORRECT! +${pts}`;resultColor="#00ff88";
          enemy.hp-=pAtk+comboCount*3;enemyShake=0.3;
          for(let i=0;i<12;i++){const a=Math.random()*Math.PI*2;sparks.push({x:560,y:220,vx:Math.cos(a)*150,vy:Math.sin(a)*150,color:enemy.color,life:0.6});}
          if(enemy.hp<=0){
            score+=200*level;comboCount=0;
            if(killCount%5===0){level++;pMaxHp+=10;pHp=pMaxHp;pAtk+=3;resultText=`LEVEL ${level}! +ATK +HP`;resultColor="#00ffff";phase="levelup";phaseTimer=2;enemy=spawnEnemy(level);}
            else{enemy=spawnEnemy(level);resultText=`ENEMY DOWN! +200`;resultColor="#ffdd00";}
          }
        } else {
          comboCount=0;pHp-=enemy.atk;playerShake=0.3;
          resultText=`✗ ANS: ${question.answer}`;resultColor="#ff2244";
          for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;sparks.push({x:200,y:280,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:"#ff2244",life:0.5});}
          if(pHp<=0){lives--;pHp=pMaxHp;if(lives<=0)dead=true;}
        }
        phase="result";phaseTimer=1.2;
        }// end Enter
      }// end if(!dead&&phase==="question")
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010018";ctx.fillRect(0,0,W,H);
      // BG arena
      ctx.fillStyle="#060025";ctx.fillRect(0,60,W,H-120);
      ctx.strokeStyle="#1a0060";ctx.lineWidth=1;
      for(let y=80;y<H-60;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      const esh=enemyShake>0?(Math.random()-0.5)*12:0;
      const psh=playerShake>0?(Math.random()-0.5)*12:0;
      // Enemy
      const ex=560+esh,ey=180;
      ctx.fillStyle=enemy.color;ctx.shadowColor=enemy.color;ctx.shadowBlur=20;
      ctx.font="80px serif";ctx.textAlign="center";ctx.fillText(enemy.emoji,ex,ey);ctx.shadowBlur=0;
      // Enemy HP bar
      ctx.fillStyle="#111";ctx.fillRect(ex-80,ey+14,160,18);
      ctx.fillStyle=enemy.color;ctx.shadowColor=enemy.color;ctx.shadowBlur=6;
      ctx.fillRect(ex-80,ey+14,Math.round(160*Math.max(0,enemy.hp/enemy.maxHp)),18);ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`${enemy.name}  ${Math.max(0,enemy.hp)}/${enemy.maxHp}`,ex,ey+27);
      // Player
      const ppx=180+psh,ppy=250;
      ctx.fillStyle="#00ff88";ctx.shadowColor="#00ff88";ctx.shadowBlur=14;
      ctx.font="60px serif";ctx.textAlign="center";ctx.fillText("🧙",ppx,ppy);ctx.shadowBlur=0;
      // Player HP bar
      ctx.fillStyle="#111";ctx.fillRect(ppx-60,ppy+10,120,14);
      ctx.fillStyle=pHp/pMaxHp>0.5?"#00ff88":pHp/pMaxHp>0.25?"#ffdd00":"#ff2244";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=4;
      ctx.fillRect(ppx-60,ppy+10,Math.round(120*pHp/pMaxHp),14);ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`YOU  ${Math.max(0,pHp)}/${pMaxHp}`,ppx,ppy+21);
      // VS divider
      ctx.strokeStyle="#aa00ff";ctx.lineWidth=2;ctx.shadowColor="#aa00ff";ctx.shadowBlur=8;
      ctx.beginPath();ctx.moveTo(W/2,80);ctx.lineTo(W/2,H-120);ctx.stroke();ctx.shadowBlur=0;
      ctx.fillStyle="#aa00ff";ctx.shadowColor="#aa00ff";ctx.shadowBlur=10;ctx.font="14px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("VS",W/2,200);ctx.shadowBlur=0;
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,6,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Question area
      if(phase==="question"&&question){
        ctx.fillStyle="#000033";ctx.fillRect(0,H-155,W,95);
        ctx.strokeStyle="#00ffff";ctx.lineWidth=2;ctx.strokeRect(0,H-155,W,95);
        const qText=question.op==="^2"?`${question.a}² = ?`:`${question.a} ${question.op} ${question.b} = ?`;
        ctx.fillStyle="#fff";ctx.shadowColor="#00ffff";ctx.shadowBlur=10;ctx.font="bold 20px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(qText,W/2,H-118);ctx.shadowBlur=0;
        // Choices
        question.choices.forEach((c,i)=>{
          const cx=80+i*180,cy=H-84;
          ctx.fillStyle=typed===String(c)?"#00ff88":"#001133";ctx.shadowColor="#00ffff";ctx.shadowBlur=4;
          ctx.fillRect(cx-50,cy-20,100,28);ctx.shadowBlur=0;
          ctx.strokeStyle="#00ffff";ctx.strokeRect(cx-50,cy-20,100,28);
          ctx.fillStyle="#fff";ctx.font="10px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(String(c),cx,cy);
        });
        ctx.fillStyle="#333";ctx.fillRect(W/2-80,H-70,160,22);ctx.strokeStyle="#444";ctx.strokeRect(W/2-80,H-70,160,22);
        ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(typed||"_",W/2,H-54);
        ctx.fillStyle="#444";ctx.font="6px 'Press Start 2P'";ctx.fillText("TYPE ANSWER + ENTER",W/2,H-38);
      }
      if(phase==="result"){
        ctx.fillStyle="#000033cc";ctx.fillRect(0,H-155,W,95);
        ctx.fillStyle=resultColor;ctx.shadowColor=resultColor;ctx.shadowBlur=20;ctx.font="bold 16px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(resultText,W/2,H-100);ctx.shadowBlur=0;
        if(comboCount>1){ctx.fillStyle="#ff8800";ctx.shadowColor="#ff8800";ctx.shadowBlur=10;ctx.font="12px 'Press Start 2P'";ctx.fillText(`${comboCount}x COMBO!`,W/2,H-76);ctx.shadowBlur=0;}
      }
      if(phase==="levelup"){
        ctx.fillStyle="#000033cc";ctx.fillRect(0,H-155,W,95);
        ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=20;ctx.font="bold 18px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`⬆ LEVEL ${level}!`,W/2,H-110);
        ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`ATK: ${pAtk}  HP: ${pMaxHp}`,W/2,H-88);ctx.shadowBlur=0;
      }
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#aa00ff";ctx.shadowColor="#aa00ff";ctx.shadowBlur=6;ctx.fillText(`MATH BATTLE  LVL ${level}`,W/2,20);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`ENEMIES DOWN: ${killCount}  COMBO: ${comboCount}x  ATK: ${pAtk}`,W/2,36);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-20);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+10);ctx.fillText(`ENEMIES DEFEATED: ${killCount}`,W/2,H/2+30);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= PRECISION PLATFORMER — 100 LEVELS =========
function createPlatformerGame(): GameEngine {
  const TW=20,TH=20,GCOLS=40,GROWS=22;
  const FLOOR2=0,WALL2=1,SPIKE=2,COIN=3,SPRING=4,ICE=5,LAVA=6,MOVING=7;
  type Level2={tiles:number[][];playerStart:[number,number];flagPos:[number,number]};
  // Level generator: creates increasingly complex levels
  function genLevel2(lv:number):Level2{
    const tiles:number[][]=Array.from({length:GROWS},()=>Array(GCOLS).fill(FLOOR2));
    // Fill with walls
    for(let y=0;y<GROWS;y++)for(let x=0;x<GCOLS;x++)tiles[y][x]=WALL2;
    // Carve open space
    for(let y=1;y<GROWS-1;y++)for(let x=1;x<GCOLS-1;x++)tiles[y][x]=FLOOR2;
    // Floor
    for(let x=0;x<GCOLS;x++)tiles[GROWS-1][x]=WALL2;
    // Platforms (more complex with level)
    const platCount=3+Math.floor(lv*0.8);
    for(let i=0;i<platCount;i++){
      const px=1+Math.floor(Math.random()*(GCOLS-8));
      const py=Math.floor(4+Math.random()*(GROWS-8));
      const pw=3+Math.floor(Math.random()*6);
      const type=lv>=15&&Math.random()<0.3?ICE:lv>=25&&Math.random()<0.2?LAVA:WALL2;
      for(let x2=px;x2<Math.min(px+pw,GCOLS-1);x2++)tiles[py][x2]=type===LAVA?WALL2:WALL2;
      if(type===LAVA&&Math.random()<0.4)tiles[py+1]??tiles[py+1];// lava above floor
    }
    // Spikes
    const spikeCount=Math.floor(lv*0.6);
    for(let i=0;i<spikeCount;i++){
      const sx=1+Math.floor(Math.random()*(GCOLS-2));
      for(let sy=GROWS-2;sy>=1;sy--){if(tiles[sy][sx]===FLOOR2&&tiles[sy+1][sx]===WALL2){tiles[sy][sx]=SPIKE;break;}}
    }
    // Coins
    for(let i=0;i<8;i++){
      const cx=1+Math.floor(Math.random()*(GCOLS-2));
      const cy=1+Math.floor(Math.random()*(GROWS-2));
      if(tiles[cy][cx]===FLOOR2)tiles[cy][cx]=COIN;
    }
    // Springs at higher levels
    if(lv>=8){for(let i=0;i<2;i++){const sx=1+Math.floor(Math.random()*(GCOLS-2));for(let sy=GROWS-2;sy>=1;sy--){if(tiles[sy][sx]===FLOOR2&&tiles[sy+1][sx]===WALL2){tiles[sy][sx]=SPRING;break;}}}}
    const flagX=Math.max(GCOLS-6,8);
    let flagY=GROWS-2;
    for(let y=GROWS-2;y>=1;y--){if(tiles[y][flagX]!==WALL2){flagY=y;break;}}
    return{tiles,playerStart:[2,GROWS-2],flagPos:[flagX,flagY]};
  }
  type PPlayer={x:number;y:number;vx:number;vy:number;onGround:boolean;jumps:number;faceX:number;coyote:number;jumpBuffer:number};
  let ldata:Level2,player:PPlayer;
  let coins:Set<string>,score=0,lives=3,level=1,dead=false;
  let coinsCollected=0,totalCoins=8;
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let prevKeys=new Set<string>();
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let camX=0,camY=0;
  function tileAt2(tx:number,ty:number){if(tx<0||tx>=GCOLS||ty<0||ty>=GROWS)return WALL2;return ldata?.tiles[ty]?.[tx]??WALL2;}
  function solid(t:number){return t===WALL2||t===ICE||t===SPRING;}
  function initLevel2(lv:number){ldata=genLevel2(lv);const[sx,sy]=ldata.playerStart;player={x:sx*TW+TW/2,y:sy*TH,vx:0,vy:0,onGround:false,jumps:2,faceX:1,coyote:0,jumpBuffer:0};coins=new Set();coinsCollected=0;totalCoins=0;for(let y=0;y<GROWS;y++)for(let x=0;x<GCOLS;x++){if(ldata.tiles[y][x]===COIN){coins.add(`${x},${y}`);totalCoins++;}};}
  return {
    init(){score=0;lives=3;level=1;dead=false;flashTimer=0;sparks=[];prevKeys=new Set();initLevel2(1);},
    update(dt,keys){
      if(dead)return;
      const W=800,H=560;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      // Input
      const spd=180+(level>=25?40:0);
      let moveX=0;
      if(keys.has("ArrowLeft")||keys.has("a")){moveX=-1;player.faceX=-1;}
      if(keys.has("ArrowRight")||keys.has("d")){moveX=1;player.faceX=1;}
      // Coyote time
      if(player.onGround)player.coyote=0.1;else player.coyote-=dt;
      if(pressed("ArrowUp")||pressed("w")||pressed(" ")||pressed("z"))player.jumpBuffer=0.15;
      if(player.jumpBuffer>0){player.jumpBuffer-=dt;}
      if(player.jumpBuffer>0&&(player.coyote>0||player.jumps>0)){
        player.vy=-(level>=40?440:380);player.jumps--;player.jumpBuffer=0;player.coyote=0;
        for(let i=0;i<6;i++){const a=Math.random()*Math.PI;sparks.push({x:player.x,y:player.y,vx:Math.cos(a)*60,vy:Math.sin(a)*60,color:"#00ff88",life:0.4});}
      }
      // Physics
      const iceTile=tileAt2(Math.floor(player.x/TW),Math.floor(player.y/TH));
      const friction=iceTile===ICE?0.98:0.75;
      player.vx=player.vx*friction+moveX*spd*(1-friction)*8;
      player.vy+=700*dt;
      player.vy=Math.min(player.vy,500);
      // Move X
      player.x+=player.vx*dt;
      const px=Math.floor(player.x/TW);
      if(solid(tileAt2(px,Math.floor(player.y/TH)))||solid(tileAt2(px,Math.floor(player.y/TH-0.5)))){
        player.x=Math.round(player.x/TW)*TW;player.vx=0;
      }
      player.x=Math.max(TW*0.5,Math.min(GCOLS*TW-TW*0.5,player.x));
      // Move Y
      player.y+=player.vy*dt;
      const tx=Math.floor(player.x/TW);
      player.onGround=false;
      if(player.vy>=0){
        const ty=Math.floor(player.y/TH);
        const tile=tileAt2(tx,ty);
        if(solid(tile)){player.y=ty*TH;player.vy=tile===SPRING?-600:0;player.onGround=tile!==SPRING;player.jumps=2;
          if(tile===SPRING){flashMsg="BOING!";flashColor="#ffdd00";flashTimer=0.5;}
        }
        // Spike/lava
        if(tile===SPIKE||tile===LAVA){lives--;for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;sparks.push({x:player.x,y:player.y,vx:Math.cos(a)*120,vy:Math.sin(a)*120,color:"#ff2244",life:0.7});}if(lives<=0){dead=true;}else{const[sx2,sy2]=ldata.playerStart;player.x=sx2*TW+TW/2;player.y=sy2*TH;player.vx=0;player.vy=0;}}
      } else {
        const ty=Math.floor(player.y/TH);
        if(solid(tileAt2(tx,ty))){player.y=(ty+1)*TH;player.vy=0;}
      }
      // Coins
      const ck=`${Math.floor(player.x/TW)},${Math.floor(player.y/TH)}`;
      if(coins.has(ck)){coins.delete(ck);score+=50*level;coinsCollected++;
        for(let i=0;i<6;i++){const a=Math.random()*Math.PI*2;sparks.push({x:player.x,y:player.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#ffdd00",life:0.5});}
      }
      // Flag/exit
      const[fx,fy]=ldata.flagPos;
      if(Math.abs(player.x/TW-fx)<1.2&&Math.abs(player.y/TH-fy)<1.5){
        score+=500*level+coinsCollected*20;level++;flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;initLevel2(level);}
      // Camera
      const tx3=player.x-W/2,ty3=player.y-H/2;
      camX+=(tx3-camX)*dt*6;camY+=(ty3-camY)*dt*6;
      camX=Math.max(0,Math.min(GCOLS*TW-W,camX));camY=Math.max(0,Math.min(GROWS*TH-H+48,camY));
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010018";ctx.fillRect(0,0,W,H);
      if(!ldata){initLevel2(level);return;}
      ctx.save();ctx.translate(-Math.round(camX),-Math.round(camY));
      const sx2=Math.floor(camX/TW),ex2=Math.min(GCOLS,sx2+Math.ceil(W/TW)+1);
      const sy2=Math.floor(camY/TH),ey2=Math.min(GROWS,sy2+Math.ceil(H/TH)+1);
      for(let y=sy2;y<ey2;y++)for(let x=sx2;x<ex2;x++){
        const t=tileAt2(x,y);
        const tx=x*TW,ty=y*TH;
        if(t===WALL2){ctx.fillStyle="#1a0044";ctx.fillRect(tx,ty,TW,TH);ctx.fillStyle="#2a0066";ctx.fillRect(tx+1,ty+1,TW-2,TH-2);}
        else if(t===SPIKE){ctx.fillStyle="#ff2244";ctx.beginPath();ctx.moveTo(tx+TW/2,ty);ctx.lineTo(tx+TW,ty+TH);ctx.lineTo(tx,ty+TH);ctx.closePath();ctx.fill();}
        else if(t===COIN){const ckey=`${x},${y}`;if(coins.has(ckey)){const pulse=0.5+0.5*Math.sin(Date.now()*0.008);ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=6+pulse*8;ctx.beginPath();ctx.arc(tx+TW/2,ty+TH/2,7,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}
        else if(t===SPRING){ctx.fillStyle="#00ff88";ctx.fillRect(tx+4,ty+TH-8,TW-8,8);ctx.fillRect(tx+8,ty+4,TW-16,TH-12);}
        else if(t===ICE){ctx.fillStyle="#88ddff";ctx.fillRect(tx,ty,TW,TH);ctx.fillStyle="rgba(255,255,255,0.3)";ctx.fillRect(tx,ty,TW,4);}
        else if(t===LAVA){const l=0.5+0.5*Math.sin(Date.now()*0.005+x);ctx.fillStyle=`rgba(255,${Math.floor(60+l*60)},0,1)`;ctx.fillRect(tx,ty,TW,TH);}
      }
      // Flag
      const[fx2,fy2]=ldata.flagPos;
      ctx.fillStyle="#ff0066";ctx.shadowColor="#ff0066";ctx.shadowBlur=10;
      ctx.fillRect(fx2*TW+TW/2,fy2*TH-30,4,30);
      ctx.beginPath();ctx.moveTo(fx2*TW+TW/2+4,fy2*TH-30);ctx.lineTo(fx2*TW+TW/2+22,fy2*TH-20);ctx.lineTo(fx2*TW+TW/2+4,fy2*TH-10);ctx.fill();ctx.shadowBlur=0;
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,4,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Player
      const flip=player.faceX<0;
      ctx.save();ctx.translate(player.x,player.y-8);if(flip)ctx.scale(-1,1);
      ctx.fillStyle="#00ff88";ctx.shadowColor="#00ff88";ctx.shadowBlur=12;
      ctx.fillRect(-8,-8,16,16);ctx.beginPath();ctx.arc(0,-12,9,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      ctx.fillStyle="#001100";ctx.fillRect(2,-14,4,4);// eye
      ctx.fillRect(-2,-14,1,1);
      ctx.restore();
      ctx.restore();// cam
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}`,W/2,20);ctx.shadowBlur=0;
      ctx.fillStyle="#ffdd00";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`🪙 ${coinsCollected}/${totalCoins}`,W/2,36);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 18px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H/2);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.88)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= DUNGEON CRAWLER RPG =========
function createDungeonCrawlerGame(): GameEngine {
  const TILE=25,COLS=32,ROWS=22;
  const FLOOR=0,WALL=1,DOOR=2,STAIRS=3;
  type DCell=number;
  type Pt={x:number;y:number};
  type Arrow={x:number;y:number;vx:number;vy:number;dmg:number;fromPlayer:boolean};
  type Item={x:number;y:number;type:"hp"|"mana"|"gold"|"sword"|"bow"|"staff"|"shield";label:string;color:string;val:number;collected:boolean};
  type Enemy={x:number;y:number;px:number;py:number;hp:number;maxHp:number;atk:number;def:number;
    type:"goblin"|"orc"|"mage"|"boss";color:string;moveTimer:number;shootTimer:number;
    state:"patrol"|"chase"|"attack"|"hurt"|"dead";patrolAngle:number;arrows:Arrow[];loot:number;
  };
  type Particle={x:number;y:number;vx:number;vy:number;color:string;life:number;maxLife:number;text?:string;size?:number};
  type Room={x:number;y:number;w:number;h:number};
  let grid:DCell[][]=[];let rooms:Room[]=[];let enemies:Enemy[]=[];let items:Item[]=[];
  let arrows:Arrow[]=[];let particles:Particle[]=[];
  let px=2,py=2,ppx=50,ppy=50;
  let pHp=100,pMaxHp=100,pMana=80,pMaxMana=80,pAtk=12,pDef=4,pGold=0,pXp=0,pLevel=1;
  let pWeapon:"sword"|"bow"|"staff"="sword",pFaceX=1;
  let pState="idle",pStateTimer=0,swingAngle=0,swingActive=false;
  let camX=0,camY=0;
  let score=0,lives=3,level=1,dead=false,floor=1;
  let prevKeys=new Set<string>(),moveCd=0,attackCd=0,invincible=0;
  let msgQueue:{text:string;color:string;timer:number}[]=[];
  function msg(text:string,color="#ffdd00"){msgQueue.push({text,color,timer:2});}
  function rnd(a:number,b:number){return Math.floor(Math.random()*(b-a)+a);}
  function tileAt(x:number,y:number){return x<0||x>=COLS||y<0||y>=ROWS?WALL:grid[y]?.[x]??WALL;}
  function spawn(part:Omit<Particle,"maxLife">){particles.push({...part,maxLife:part.life});}
  function explosion(x:number,y:number,color:string,n=10){
    for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=30+Math.random()*80;
      spawn({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,color,life:0.6,size:3+Math.random()*4});}
  }
  function floatText(x:number,y:number,text:string,color:string){
    spawn({x,y,vx:0,vy:-40,color,life:1,text});}
  function generateFloor(floorNum:number){
    grid=Array.from({length:ROWS},()=>Array(COLS).fill(WALL));
    rooms=[];enemies=[];items=[];arrows=[];
    const roomCount=5+Math.min(floorNum,5);
    let attempts=0;
    while(rooms.length<roomCount&&attempts<200){
      attempts++;
      const rw=rnd(4,9),rh=rnd(3,7),rx=rnd(1,COLS-rw-1),ry=rnd(1,ROWS-rh-1);
      let overlap=false;
      for(const r of rooms){if(rx<r.x+r.w+2&&rx+rw>r.x-2&&ry<r.y+r.h+2&&ry+rh>r.y-2){overlap=true;break;}}
      if(!overlap)rooms.push({x:rx,y:ry,w:rw,h:rh});
    }
    for(const r of rooms){
      for(let y=r.y;y<r.y+r.h;y++)for(let x=r.x;x<r.x+r.w;x++)grid[y][x]=FLOOR;
    }
    for(let i=1;i<rooms.length;i++){
      const a=rooms[i-1],b=rooms[i];
      const ax=Math.floor(a.x+a.w/2),ay=Math.floor(a.y+a.h/2);
      const bx=Math.floor(b.x+b.w/2),by=Math.floor(b.y+b.h/2);
      let cx=ax,cy=ay;
      while(cx!==bx){grid[cy][cx]=FLOOR;cx+=cx<bx?1:-1;}
      while(cy!==by){grid[cy][cx]=FLOOR;cy+=cy<by?1:-1;}
    }
    const startRoom=rooms[0];
    px=startRoom.x+Math.floor(startRoom.w/2);py=startRoom.y+Math.floor(startRoom.h/2);
    ppx=px*TILE+TILE/2;ppy=py*TILE+TILE/2;
    const lastRoom=rooms[rooms.length-1];
    grid[lastRoom.y+Math.floor(lastRoom.h/2)][lastRoom.x+Math.floor(lastRoom.w/2)]=STAIRS;
    const types:Array<Enemy["type"]>=["goblin","orc","mage","boss"];
    const colors=["#00ff88","#ff4400","#aa00ff","#ff0066"];
    for(let ri=1;ri<rooms.length;ri++){
      const r=rooms[ri];
      const isBoss=ri===rooms.length-1&&floorNum%3===0;
      const count=isBoss?1:1+rnd(0,Math.min(floorNum,3));
      for(let i=0;i<count;i++){
        const t=isBoss?3:Math.min(Math.floor(Math.random()*(1+Math.floor(floorNum/2))),3) as 0|1|2|3;
        const etype=types[t];
        enemies.push({
          x:r.x+1+rnd(0,r.w-2),y:r.y+1+rnd(0,r.h-2),
          px:(r.x+1)*TILE,py:(r.y+1)*TILE,
          hp:isBoss?200+floorNum*50:[20,60,35,200][t]+floorNum*8,
          maxHp:isBoss?200+floorNum*50:[20,60,35,200][t]+floorNum*8,
          atk:[6,12,10,25][t]+floorNum*2,def:[0,4,2,8][t],
          type:etype,color:isBoss?"#ff0066":colors[t],
          moveTimer:0,shootTimer:isBoss?0.5:[0,0,1.5,0.8][t],
          state:"patrol",patrolAngle:Math.random()*Math.PI*2,arrows:[],loot:isBoss?50:[3,8,5,20][t],
        });
      }
      if(ri%2===0){
        const types2:Array<Item["type"]>=["hp","mana","gold","sword","bow","staff","shield"];
        const labs=["POTION","MANA","GOLD","SWORD","BOW","STAFF","SHIELD"];
        const cols2=["#ff3333","#3333ff","#ffdd00","#aaaaff","#00aaff","#aa00ff","#888888"];
        const vals=[30,25,rnd(5,20),2,2,2,2];
        const t=rnd(0,types2.length);
        items.push({x:r.x+Math.floor(r.w/2),y:r.y+Math.floor(r.h/2),type:types2[t],label:labs[t],color:cols2[t],val:vals[t],collected:false});
      }
    }
  }
  function playerAttack(){
    if(attackCd>0)return;
    if(pWeapon==="sword"){
      swingActive=true;swingAngle=pFaceX>0?-Math.PI/2:Math.PI/2;attackCd=0.4;
      const range=TILE*1.8;
      for(const e of enemies.filter(e=>e.state!=="dead")){
        if(Math.hypot(e.px-ppx,e.py-ppy)<range&&((pFaceX>0&&e.px>ppx-10)||(pFaceX<0&&e.px<ppx+10))){
          const dmg=Math.max(1,pAtk-e.def+rnd(-2,4));e.hp-=dmg;
          e.state="hurt";e.moveTimer=0.3;
          floatText(e.px,e.py-20,`-${dmg}`,dmg>pAtk?"#ff8800":"#ff4444");
          explosion(e.px,e.py,"#ffdd00",6);
          if(e.hp<=0){e.state="dead";score+=e.loot*10;pXp+=e.loot;pGold+=e.loot;
            msg(`+${e.loot}G +${e.loot}XP`,"#ffdd00");
            if(pXp>=pLevel*50){pLevel++;pMaxHp+=10;pAtk+=2;msg(`LEVEL UP! LVL ${pLevel}`,"#00ff88");}
          }
          pMana=Math.min(pMaxMana,pMana+5);
        }
      }
    } else if(pWeapon==="bow"&&pMana>=5){
      pMana-=5;attackCd=0.5;
      const a=pFaceX>0?0:Math.PI;
      arrows.push({x:ppx,y:ppy,vx:Math.cos(a)*400,vy:Math.sin(a)*400,dmg:pAtk*1.5,fromPlayer:true});
    } else if(pWeapon==="staff"&&pMana>=15){
      pMana-=15;attackCd=0.7;
      for(let i=0;i<6;i++){const a=i/6*Math.PI*2;
        arrows.push({x:ppx,y:ppy,vx:Math.cos(a)*200,vy:Math.sin(a)*200,dmg:pAtk*0.8,fromPlayer:true});}
      explosion(ppx,ppy,"#aa00ff",16);
    }
  }
  return {
    init(){generateFloor(1);pHp=100;pMaxHp=100;pMana=80;pMaxMana=80;pAtk=12;pDef=4;pGold=0;pXp=0;pLevel=1;pWeapon="sword";score=0;lives=3;level=1;dead=false;floor=1;particles=[];arrows=[];msgQueue=[];prevKeys=new Set();moveCd=0;attackCd=0;invincible=0;},
    update(dt,keys){
      if(dead)return;
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      // Weapon select
      if(pressed("1"))pWeapon="sword";
      if(pressed("2"))pWeapon="bow";
      if(pressed("3"))pWeapon="staff";
      // Attack
      if(pressed("z")||pressed(" ")||pressed("x"))playerAttack();
      attackCd-=dt; invincible-=dt; moveCd-=dt;
      if(swingActive){swingAngle+=dt*8*(pFaceX>0?1:-1);if(Math.abs(swingAngle)>Math.PI*0.8)swingActive=false;}
      // Movement
      if(moveCd<=0){
        let mx=0,my=0;
        if(keys.has("ArrowLeft")||keys.has("a")){mx=-1;pFaceX=-1;}
        if(keys.has("ArrowRight")||keys.has("d")){mx=1;pFaceX=1;}
        if(keys.has("ArrowUp")||keys.has("w"))my=-1;
        if(keys.has("ArrowDown")||keys.has("s"))my=1;
        if(mx!==0&&my!==0){mx=0;}// prefer cardinal
        if(mx!==0||my!==0){
          const nx=px+mx,ny=py+my;
          if(tileAt(nx,ny)!==WALL){
            px=nx;py=ny;moveCd=0.1;
            if(grid[py]?.[px]===STAIRS){floor++;level=floor;generateFloor(floor);msg(`FLOOR ${floor}!`,"#00ffff");return;}
          }
        }
      }
      // Smooth camera
      const targetCamX=ppx-400+TILE/2, targetCamY=ppy-280+TILE/2;
      camX+=(targetCamX-camX)*dt*8; camY+=(targetCamY-camY)*dt*8;
      camX=Math.max(0,Math.min(COLS*TILE-800,camX)); camY=Math.max(0,Math.min(ROWS*TILE-560,camY));
      // Smooth player position
      ppx+=(px*TILE+TILE/2-ppx)*dt*12; ppy+=(py*TILE+TILE/2-ppy)*dt*12;
      // Items
      for(const item of items.filter(i=>!i.collected)){
        if(Math.hypot(ppx-item.x*TILE-TILE/2,ppy-item.y*TILE-TILE/2)<TILE*0.8){
          item.collected=true;
          if(item.type==="hp"){pHp=Math.min(pMaxHp,pHp+item.val);msg(`+${item.val} HP`,"#ff3333");}
          else if(item.type==="mana"){pMana=Math.min(pMaxMana,pMana+item.val);msg(`+${item.val} MANA`,"#3366ff");}
          else if(item.type==="gold"){pGold+=item.val;score+=item.val*10;msg(`+${item.val} GOLD`,"#ffdd00");}
          else if(item.type==="sword"){pAtk+=item.val;pWeapon="sword";msg(`SWORD +${item.val} ATK`,"#aaaaff");}
          else if(item.type==="bow"){pAtk+=1;pWeapon="bow";msg(`BOW EQUIPPED`,"#00aaff");}
          else if(item.type==="staff"){pMana=pMaxMana;pWeapon="staff";msg(`STAFF EQUIPPED`,"#aa00ff");}
          else if(item.type==="shield"){pDef+=item.val;msg(`+${item.val} DEF`,"#888888");}
          explosion(item.x*TILE+TILE/2,item.y*TILE+TILE/2,item.color,8);
        }
      }
      // Enemy AI
      for(const e of enemies){
        if(e.state==="dead"){e.px+=(e.x*TILE+TILE/2-e.px)*dt*5;e.py+=(e.y*TILE+TILE/2-e.py)*dt*5;continue;}
        if(e.state==="hurt"){e.moveTimer-=dt;if(e.moveTimer<=0)e.state="patrol";continue;}
        const distToPlayer=Math.hypot(ppx-e.px,ppy-e.py);
        const sightRange=(e.type==="mage"||e.type==="boss")?TILE*8:TILE*6;
        if(distToPlayer<sightRange){e.state="chase";}
        else if(e.state==="chase"&&distToPlayer>sightRange*1.5){e.state="patrol";}
        e.moveTimer-=dt;
        if(e.state==="chase"){
          if(e.moveTimer<=0){
            const dx=ppx-e.px, dy=ppy-e.py, d=Math.hypot(dx,dy)||1;
            const spd=e.type==="goblin"?1.5:e.type==="boss"?0.8:1;
            const nx=e.x+Math.round(dx/d*spd), ny=e.y+Math.round(dy/d*spd);
            if(tileAt(nx,ny)!==WALL){e.x=nx;e.y=ny;}
            e.moveTimer=[0.12,0.22,0.18,0.28][["goblin","orc","mage","boss"].indexOf(e.type)];
          }
          if((e.type==="mage"||e.type==="boss")&&distToPlayer<TILE*7){
            e.shootTimer-=dt;
            if(e.shootTimer<=0){
              const dx=ppx-e.px,dy=ppy-e.py,d=Math.hypot(dx,dy)||1;
              const bulletCount=e.type==="boss"?4:1;
              for(let i=0;i<bulletCount;i++){
                const a=Math.atan2(dy,dx)+(i-bulletCount/2)*0.3;
                e.arrows.push({x:e.px,y:e.py,vx:Math.cos(a)*200,vy:Math.sin(a)*200,dmg:e.atk*0.7,fromPlayer:false});
              }
              e.shootTimer=e.type==="boss"?0.5:2;
            }
          }
          if(distToPlayer<TILE*0.9&&invincible<=0){
            const dmg=Math.max(1,e.atk-pDef+rnd(-2,3));pHp-=dmg;invincible=1.2;
            floatText(ppx,ppy-20,`-${dmg}`,"#ff2244");
            explosion(ppx,ppy,"#ff2244",8);
            if(pHp<=0){lives--;if(lives<=0){dead=true;}else{pHp=pMaxHp;invincible=3;}}
          }
        } else {
          if(e.moveTimer<=0){
            e.patrolAngle+=rnd(-1,2)*0.5;
            const nx=e.x+Math.round(Math.cos(e.patrolAngle)), ny=e.y+Math.round(Math.sin(e.patrolAngle));
            if(tileAt(nx,ny)!==WALL){e.x=nx;e.y=ny;}
            e.moveTimer=0.5+Math.random()*0.5;
          }
        }
        e.px+=(e.x*TILE+TILE/2-e.px)*dt*10; e.py+=(e.y*TILE+TILE/2-e.py)*dt*10;
        // Enemy arrows
        for(const a of e.arrows){a.x+=a.vx*dt;a.y+=a.vy*dt;}
        if(invincible<=0){
          for(const a of e.arrows.filter(ar=>ar.fromPlayer===false)){
            if(Math.hypot(a.x-ppx,a.y-ppy)<TILE*0.6){
              const dmg=Math.max(1,Math.round(a.dmg)-pDef);pHp-=dmg;invincible=0.8;
              floatText(ppx,ppy-20,`-${dmg}`,"#ff2244");a.vx=0;a.vy=0;
              if(pHp<=0){lives--;if(lives<=0){dead=true;}else{pHp=pMaxHp;invincible=3;}}
            }
          }
        }
        e.arrows=e.arrows.filter(a=>a.x>0&&a.x<COLS*TILE&&a.y>0&&a.y<ROWS*TILE&&(a.vx!==0||a.vy!==0));
      }
      // Player arrows
      for(const a of arrows){a.x+=a.vx*dt;a.y+=a.vy*dt;}
      for(const a of arrows.filter(ar=>ar.fromPlayer)){
        for(const e of enemies.filter(e=>e.state!=="dead")){
          if(Math.hypot(a.x-e.px,a.y-e.py)<TILE*0.6){
            const dmg=Math.max(1,Math.round(a.dmg)-e.def);e.hp-=dmg;a.vx=0;a.vy=0;
            floatText(e.px,e.py-20,`-${dmg}`,"#ffdd00");explosion(e.px,e.py,"#ff8800",5);
            if(e.hp<=0){e.state="dead";score+=e.loot*10;pXp+=e.loot;pGold+=e.loot;
              if(pXp>=pLevel*50){pLevel++;pMaxHp+=10;pAtk+=2;msg(`LEVEL UP! LVL ${pLevel}`,"#00ff88");}}
          }
        }
      }
      arrows=arrows.filter(a=>a.x>0&&a.x<COLS*TILE&&a.y>0&&a.y<ROWS*TILE&&(a.vx!==0||a.vy!==0));
      for(const pt of particles){pt.x+=pt.vx*dt;pt.y+=pt.vy*dt;pt.vx*=0.92;pt.vy*=0.92;pt.life-=dt;}
      particles=particles.filter(p=>p.life>0);
      for(const m of msgQueue)m.timer-=dt; msgQueue=msgQueue.filter(m=>m.timer>0);
      pMana=Math.min(pMaxMana,pMana+dt*3);
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#0a0005"; ctx.fillRect(0,0,W,H);
      ctx.save(); ctx.translate(-Math.round(camX),-Math.round(camY));
      // Draw tiles
      const startCol=Math.floor(camX/TILE),endCol=Math.min(COLS,startCol+Math.ceil(W/TILE)+1);
      const startRow=Math.floor(camY/TILE),endRow=Math.min(ROWS,startRow+Math.ceil(H/TILE)+1);
      for(let y=startRow;y<endRow;y++){
        for(let x=startCol;x<endCol;x++){
          const tx=x*TILE,ty=y*TILE,cell=tileAt(x,y);
          if(cell===WALL){
            ctx.fillStyle="#0a0020"; ctx.fillRect(tx,ty,TILE,TILE);
            ctx.fillStyle="#1a0040"; ctx.fillRect(tx+1,ty+1,TILE-2,TILE-2);
          } else if(cell===FLOOR){
            ctx.fillStyle="#060012"; ctx.fillRect(tx,ty,TILE,TILE);
            if((x+y)%2===0){ctx.fillStyle="#080016"; ctx.fillRect(tx,ty,TILE,TILE);}
          } else if(cell===STAIRS){
            ctx.fillStyle="#1a1a00"; ctx.fillRect(tx,ty,TILE,TILE);
            ctx.fillStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=8;
            ctx.font="14px serif"; ctx.textAlign="center"; ctx.fillText("▼",tx+TILE/2,ty+TILE/2+5);
            ctx.shadowBlur=0;
          }
        }
      }
      // Items
      for(const item of items.filter(i=>!i.collected)){
        const ix=item.x*TILE+TILE/2,iy=item.y*TILE+TILE/2;
        const glow=0.5+0.5*Math.sin(Date.now()*0.004);
        ctx.fillStyle=item.color; ctx.shadowColor=item.color; ctx.shadowBlur=8+glow*8;
        ctx.beginPath(); ctx.arc(ix,iy,7,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      }
      // Enemy arrows
      for(const e of enemies){for(const a of e.arrows){ctx.fillStyle="#ff4400";ctx.shadowColor="#ff4400";ctx.shadowBlur=6;ctx.beginPath();ctx.arc(a.x,a.y,4,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}
      // Player arrows
      for(const a of arrows){
        ctx.save();ctx.translate(a.x,a.y);ctx.rotate(Math.atan2(a.vy,a.vx));
        ctx.fillStyle=pWeapon==="staff"?"#aa00ff":"#00aaff";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=8;
        ctx.fillRect(-10,-2,20,4);ctx.shadowBlur=0;ctx.restore();
      }
      // Enemies
      for(const e of enemies){
        if(e.state==="dead"){ctx.globalAlpha=0.3;}
        ctx.fillStyle=e.color; ctx.shadowColor=e.color; ctx.shadowBlur=e.state==="dead"?0:10;
        const er=e.type==="boss"?16:e.type==="orc"?12:9;
        ctx.beginPath(); ctx.arc(e.px,e.py,er,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
        if(e.type==="boss"){ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.stroke();}
        if(e.state!=="dead"){
          ctx.fillStyle="#333"; ctx.fillRect(e.px-16,e.py-er-10,32,5);
          ctx.fillStyle=e.color; ctx.fillRect(e.px-16,e.py-er-10,Math.round(32*e.hp/e.maxHp),5);
        }
        ctx.globalAlpha=1;
      }
      // Particles
      for(const pt of particles){
        ctx.globalAlpha=pt.life/pt.maxLife;
        if(pt.text){ctx.fillStyle=pt.color;ctx.font="bold 11px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(pt.text,pt.x,pt.y);}
        else{ctx.fillStyle=pt.color;ctx.beginPath();ctx.arc(pt.x,pt.y,pt.size||3,0,Math.PI*2);ctx.fill();}
      }
      ctx.globalAlpha=1;
      // Player
      if(invincible<=0||Math.floor(invincible*8)%2===0){
        ctx.save(); ctx.translate(ppx,ppy);
        const weaponColor=pWeapon==="sword"?"#aaaaff":pWeapon==="bow"?"#00aaff":"#aa00ff";
        // Body
        ctx.fillStyle="#00ff88"; ctx.shadowColor="#00ff88"; ctx.shadowBlur=14;
        ctx.fillRect(-9,-16,18,28); ctx.beginPath(); ctx.arc(0,-20,11,0,Math.PI*2); ctx.fill();
        ctx.fillStyle="#00cc66"; ctx.shadowBlur=0; ctx.fillRect(-4,-10,8,14);
        // Arms
        ctx.fillStyle="#00ff88"; ctx.fillRect(-14,-14,8,10); ctx.fillRect(6,-14,8,10);
        // Legs
        ctx.fillRect(-8,12,7,12); ctx.fillRect(1,12,7,12);
        // Weapon
        ctx.fillStyle=weaponColor; ctx.shadowColor=weaponColor; ctx.shadowBlur=10;
        if(pWeapon==="sword"&&swingActive){
          ctx.save();ctx.rotate(swingAngle*pFaceX);
          ctx.fillRect(pFaceX>0?10:-30,-4,20,8);ctx.fillRect(pFaceX>0?28:-28,-8,6,16);
          ctx.restore();
        } else if(pWeapon==="sword"){
          ctx.fillRect(pFaceX>0?10:-30,-4,20,6);
        } else if(pWeapon==="bow"){
          ctx.strokeStyle=weaponColor;ctx.lineWidth=3;ctx.beginPath();ctx.arc(pFaceX>0?16:-16,0,12,-Math.PI/2,Math.PI/2,pFaceX<0);ctx.stroke();
        } else {
          ctx.beginPath();ctx.arc(pFaceX>0?18:-18,0,6,0,Math.PI*2);ctx.fill();
          ctx.strokeStyle=weaponColor;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(pFaceX>0?4:-4,0);ctx.lineTo(pFaceX>0?12:-12,0);ctx.stroke();
        }
        ctx.restore(); ctx.shadowBlur=0;
      }
      ctx.restore(); // restore camera translate
      // HUD
      ctx.fillStyle="#000022ee"; ctx.fillRect(0,0,W,52);
      // HP bar
      const hpW=180, hpPct=pHp/pMaxHp;
      ctx.fillStyle="#111133"; ctx.fillRect(10,8,hpW,16);
      ctx.fillStyle=hpPct>0.5?"#00ff88":hpPct>0.25?"#ffdd00":"#ff2244";
      ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=6; ctx.fillRect(10,8,Math.round(hpW*hpPct),16); ctx.shadowBlur=0;
      ctx.fillStyle="#fff"; ctx.font="7px 'Press Start 2P'"; ctx.textAlign="left";
      ctx.fillText(`HP ${Math.max(0,Math.ceil(pHp))}/${pMaxHp}`,14,20);
      // Mana bar
      ctx.fillStyle="#111133"; ctx.fillRect(10,28,hpW,12);
      ctx.fillStyle="#4444ff"; ctx.shadowColor="#4444ff"; ctx.shadowBlur=6;
      ctx.fillRect(10,28,Math.round(hpW*pMana/pMaxMana),12); ctx.shadowBlur=0;
      ctx.fillStyle="#aaaaff"; ctx.font="7px 'Press Start 2P'"; ctx.fillText(`MP ${Math.floor(pMana)}`,14,38);
      // Stats
      ctx.fillStyle="#ffdd00"; ctx.font="7px 'Press Start 2P'";
      ctx.fillText(`LVL${pLevel} ATK${pAtk} DEF${pDef} 💰${pGold}`,200,20);
      ctx.fillStyle="#888"; ctx.fillText(`FLOOR ${floor}  XP ${pXp}/${pLevel*50}`,200,36);
      // Weapon indicator
      ctx.textAlign="center";
      const weaponLabels=["[1]SWORD","[2]BOW","[3]STAFF"];
      const weaponColors=["#aaaaff","#00aaff","#aa00ff"];
      weaponLabels.forEach((wl,i)=>{
        const wx=W-200+i*65;
        ctx.fillStyle=pWeapon===["sword","bow","staff"][i]?weaponColors[i]:"#333";
        ctx.shadowColor=pWeapon===["sword","bow","staff"][i]?weaponColors[i]:"transparent";
        ctx.shadowBlur=pWeapon===["sword","bow","staff"][i]?10:0;
        ctx.font="7px 'Press Start 2P'"; ctx.fillText(wl,wx,28); ctx.shadowBlur=0;
      });
      // Lives
      ctx.textAlign="right"; ctx.fillStyle="#ff6699";
      for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,44);
      ctx.fillStyle="#fff"; ctx.font="7px 'Press Start 2P'";
      ctx.fillText(`SCORE ${score.toLocaleString()}`,W-10,24);
      // Messages
      msgQueue.forEach((m,i)=>{
        ctx.fillStyle=m.color; ctx.shadowColor=m.color; ctx.shadowBlur=8;
        ctx.textAlign="center"; ctx.font="bold 10px 'Press Start 2P'";
        ctx.globalAlpha=Math.min(1,m.timer*2);
        ctx.fillText(m.text,W/2,H/2-80+i*20);
      });
      ctx.globalAlpha=1; ctx.shadowBlur=0;
      if(dead){
        ctx.fillStyle="rgba(0,0,0,0.88)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center"; ctx.fillStyle="#ff2244"; ctx.shadowColor="#ff2244"; ctx.shadowBlur=30;
        ctx.font="bold 26px 'Press Start 2P'"; ctx.fillText("YOU DIED",W/2,H/2-20); ctx.shadowBlur=0;
        ctx.fillStyle="#fff"; ctx.font="10px 'Press Start 2P'";
        ctx.fillText(`FLOOR ${floor}  SCORE: ${score.toLocaleString()}`,W/2,H/2+20);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>floor, isOver:()=>dead,
  };
}

// ========= NEON CHESS with AI =========
function createChessGame(): GameEngine {
  type Color = "w"|"b";
  type PieceType = "K"|"Q"|"R"|"B"|"N"|"P"|"k"|"q"|"r"|"b"|"n"|"p"|"";
  type Board = PieceType[];
  const START = "rnbqkbnrpppppppp                                PPPPPPPPRNBQKBNR".split("") as PieceType[];
  const PIECE_VALS:Record<string,number> = {p:1,n:3,b:3,r:5,q:9,k:100,P:-1,N:-3,B:-3,R:-5,Q:-9,K:-100};
  const PIECE_NAMES:Record<string,string> = {p:"♟",n:"♞",b:"♝",r:"♜",q:"♛",k:"♚",P:"♙",N:"♘",B:"♗",R:"♖",Q:"♕",K:"♔"};
  const PIECE_COLORS:Record<string,string> = {p:"#ff4444",n:"#ff6666",b:"#ff8888",r:"#ffaaaa",q:"#ff2222",k:"#ff0000",P:"#00ffff",N:"#44ddff",B:"#88ccff",R:"#aaddff",Q:"#00aaff",K:"#ffffff"};
  let board:Board=[...START];let selected=-1;let validMoves:number[]=[];
  let turn:Color="w";let gameOver=false;let winner="";let lastMove:{f:number;t:number}|null=null;
  let aiThinking=false;let aiThinkTimer=0;let aiMove:{f:number;t:number}|null=null;
  let capturedW:string[]=[];let capturedB:string[]=[];
  let score=0,lives=1,level=1,dead=false;
  let animPiece:{from:number;to:number;piece:string;t:number}|null=null;
  let prevKeys=new Set<string>(),cursor=36;
  let checkFlash=0;
  function isWhite(p:PieceType){return p!=""&&p===p.toUpperCase();}
  function isBlack(p:PieceType){return p!=""&&p===p.toLowerCase();}
  function colorOf(p:PieceType):Color|null{if(p==="")return null;return isWhite(p)?"w":"b";}
  function rank(i:number){return Math.floor(i/8);}function file(i:number){return i%8;}
  function idx(r:number,f:number){return r*8+f;}
  function inBounds(r:number,f:number){return r>=0&&r<8&&f>=0&&f<8;}
  function getMoves(i:number,b:Board,checkKing=true):number[]{
    const p=b[i]; if(p==="")return[];
    const col=colorOf(p)!, friendly=(sq:number)=>colorOf(b[sq])===col;
    const enemy=(sq:number)=>b[sq]!==""&&colorOf(b[sq])!==col;
    const r=rank(i),f=file(i);
    const moves:number[]=[];
    function slide(dr:number,df:number){
      let cr=r+dr,cf=f+df;
      while(inBounds(cr,cf)){const j=idx(cr,cf);if(friendly(j))break;moves.push(j);if(enemy(j))break;cr+=dr;cf+=df;}
    }
    const pt=p.toUpperCase();
    if(pt==="P"){
      const dir=isWhite(p)?-1:1;
      const fr=r+dir;
      if(inBounds(fr,f)&&b[idx(fr,f)]===""){
        moves.push(idx(fr,f));
        if((isWhite(p)&&r===6)||(isBlack(p)&&r===1)){
          const fr2=r+dir*2;
          if(inBounds(fr2,f)&&b[idx(fr2,f)]==="")moves.push(idx(fr2,f));
        }
      }
      for(const df2 of[-1,1]){if(inBounds(fr,f+df2)&&enemy(idx(fr,f+df2)))moves.push(idx(fr,f+df2));}
    } else if(pt==="N"){
      for(const[dr,df2] of[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]){
        const nr=r+dr,nf=f+df2;if(inBounds(nr,nf)&&!friendly(idx(nr,nf)))moves.push(idx(nr,nf));
      }
    } else if(pt==="B"){slide(-1,-1);slide(-1,1);slide(1,-1);slide(1,1);}
    else if(pt==="R"){slide(-1,0);slide(1,0);slide(0,-1);slide(0,1);}
    else if(pt==="Q"){slide(-1,-1);slide(-1,1);slide(1,-1);slide(1,1);slide(-1,0);slide(1,0);slide(0,-1);slide(0,1);}
    else if(pt==="K"){
      for(const[dr,df2] of[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]){
        const nr=r+dr,nf=f+df2;if(inBounds(nr,nf)&&!friendly(idx(nr,nf)))moves.push(idx(nr,nf));
      }
    }
    if(!checkKing)return moves;
    return moves.filter(to=>{
      const nb=[...b];nb[to]=nb[i];nb[i]="";
      const kp=nb.findIndex((p2,j)=>p2===(col==="w"?"K":"k"));
      if(kp===-1)return true;
      for(let j=0;j<64;j++){if(nb[j]!==""&&colorOf(nb[j])!==col){if(getMoves(j,nb,false).includes(kp))return false;}}
      return true;
    });
  }
  function isInCheck(b:Board,col:Color):boolean{
    const kp=b.findIndex(p=>p===(col==="w"?"K":"k"));if(kp===-1)return false;
    for(let j=0;j<64;j++){if(b[j]!==""&&colorOf(b[j])!==col){if(getMoves(j,b,false).includes(kp))return true;}}
    return false;
  }
  function hasAnyMoves(b:Board,col:Color):boolean{
    for(let i=0;i<64;i++){if(b[i]!==""&&colorOf(b[i])===col&&getMoves(i,b).length>0)return true;}
    return false;
  }
  function evalBoard(b:Board):number{
    let v=0;for(const p of b)if(p!=="")v+=(PIECE_VALS[p]||0);return v;
  }
  function minimax(b:Board,depth:number,alpha:number,beta:number,maxing:boolean):number{
    if(depth===0)return evalBoard(b);
    const col:Color=maxing?"b":"w";
    if(!hasAnyMoves(b,col))return maxing?-999:999;
    let best=maxing?-Infinity:Infinity;
    const froms:number[]=[];
    for(let i=0;i<64;i++){if(b[i]!==""&&colorOf(b[i])===col)froms.push(i);}
    for(const from of froms){
      for(const to of getMoves(from,b)){
        const nb=[...b];nb[to]=nb[from];nb[from]="";
        if(nb[to]==="P"&&rank(to)===0)nb[to]="Q";
        if(nb[to]==="p"&&rank(to)===7)nb[to]="q";
        const v=minimax(nb,depth-1,alpha,beta,!maxing);
        if(maxing){best=Math.max(best,v);alpha=Math.max(alpha,v);}
        else{best=Math.min(best,v);beta=Math.min(beta,v);}
        if(beta<=alpha)return best;
      }
    }
    return best;
  }
  function findBestMove():{f:number;t:number}|null{
    let bestVal=-Infinity;let bestMove:typeof aiMove=null;
    const froms:number[]=[];
    for(let i=0;i<64;i++){if(board[i]!==""&&colorOf(board[i])==="b")froms.push(i);}
    for(const from of froms){
      for(const to of getMoves(from,board)){
        const nb=[...board];nb[to]=nb[from];nb[from]="";
        const v=minimax(nb,2,-Infinity,Infinity,false);
        if(v>bestVal){bestVal=v;bestMove={f:from,t:to};}
      }
    }
    return bestMove;
  }
  function makeMove(from:number,to:number,b:Board):Board{
    const nb=[...b];const p=nb[from];
    if(nb[to]!=="")(colorOf(nb[to])==="b"?capturedB:capturedW).push(nb[to]);
    nb[to]=p;nb[from]="";
    if(p==="P"&&rank(to)===0)nb[to]="Q";
    if(p==="p"&&rank(to)===7)nb[to]="q";
    return nb;
  }
  function tryMove(from:number,to:number){
    if(gameOver)return;
    const moves=getMoves(from,board);
    if(!moves.includes(to))return;
    animPiece={from,to,piece:board[from],t:0};
    board=makeMove(from,to,board);
    turn="b"; selected=-1; validMoves=[];
    lastMove={f:from,t:to};
    if(!hasAnyMoves(board,"b")){
      gameOver=true;winner=isInCheck(board,"b")?"W":"Draw";dead=true;score+=1000;
    } else {
      checkFlash=isInCheck(board,"b")?0.5:0;
      aiThinking=true; aiThinkTimer=0.4;
    }
  }
  return {
    init(){board=[...START];selected=-1;validMoves=[];turn="w";gameOver=false;winner="";lastMove=null;aiThinking=false;aiMove=null;capturedW=[];capturedB=[];score=0;lives=1;level=1;dead=false;animPiece=null;prevKeys=new Set();cursor=36;checkFlash=0;},
    update(dt,keys){
      const pressed=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      if(gameOver){prevKeys=new Set(keys);return;}
      if(checkFlash>0)checkFlash-=dt;
      if(animPiece){animPiece.t+=dt*6;if(animPiece.t>=1)animPiece=null;}
      if(aiThinking){
        aiThinkTimer-=dt;
        if(aiThinkTimer<=0){
          aiThinking=false;
          const mv=findBestMove();
          if(mv){
            animPiece={from:mv.f,to:mv.t,piece:board[mv.f],t:0};
            board=makeMove(mv.f,mv.t,board);
            turn="w"; lastMove=mv;
            if(!hasAnyMoves(board,"w")){gameOver=true;winner=isInCheck(board,"w")?"B":"Draw";dead=true;}
            else{checkFlash=isInCheck(board,"w")?0.5:0;}
          }
        }
        prevKeys=new Set(keys); return;
      }
      if(turn==="w"){
        if(pressed("ArrowLeft")&&file(cursor)>0)cursor--;
        if(pressed("ArrowRight")&&file(cursor)<7)cursor++;
        if(pressed("ArrowUp")&&rank(cursor)>0)cursor-=8;
        if(pressed("ArrowDown")&&rank(cursor)<7)cursor+=8;
        if(pressed(" ")||pressed("Enter")||pressed("z")){
          if(selected>=0&&validMoves.includes(cursor)){tryMove(selected,cursor);}
          else if(board[cursor]!==""&&colorOf(board[cursor])==="w"){selected=cursor;validMoves=getMoves(cursor,board);}
          else{selected=-1;validMoves=[];}
        }
        if(pressed("Escape")||pressed("x")){selected=-1;validMoves=[];}
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#020010"; ctx.fillRect(0,0,W,H);
      const SQ=60,OX=(W-8*SQ)/2,OY=(H-8*SQ)/2-10;
      // Board border glow
      ctx.shadowColor="#00ffff"; ctx.shadowBlur=20;
      ctx.strokeStyle="#00ffff"; ctx.lineWidth=2;
      ctx.strokeRect(OX-2,OY-2,8*SQ+4,8*SQ+4); ctx.shadowBlur=0;
      // Squares
      for(let r=0;r<8;r++){
        for(let f=0;f<8;f++){
          const i=idx(r,f);
          const sx=OX+f*SQ, sy=OY+r*SQ;
          const isLight=(r+f)%2===0;
          // Check flash
          const isKing=board[i]==="K"||board[i]==="k";
          const inCheckSq=isKing&&checkFlash>0&&((board[i]==="K"&&turn==="w")||(board[i]==="k"&&turn==="b"));
          if(inCheckSq){ctx.fillStyle=`rgba(255,0,0,${0.5+0.5*Math.sin(checkFlash*30)})`;}
          else if(i===selected){ctx.fillStyle="#3344aa";}
          else if(validMoves.includes(i)){ctx.fillStyle=board[i]!==""?"#882222":"#224422";}
          else if(lastMove&&(i===lastMove.f||i===lastMove.t)){ctx.fillStyle=isLight?"#2a2a4a":"#1a1a3a";}
          else{ctx.fillStyle=isLight?"#1a1a3a":"#080820";}
          ctx.fillRect(sx,sy,SQ,SQ);
          // Valid move dot
          if(validMoves.includes(i)&&board[i]===""){
            ctx.fillStyle="rgba(0,255,136,0.4)"; ctx.beginPath(); ctx.arc(sx+SQ/2,sy+SQ/2,10,0,Math.PI*2); ctx.fill();
          }
        }
      }
      // Rank/file labels
      ctx.fillStyle="#334455"; ctx.font="9px 'Press Start 2P'"; ctx.textAlign="center";
      for(let i=0;i<8;i++){
        ctx.fillText(String.fromCharCode(97+i),OX+i*SQ+SQ/2,OY+8*SQ+12);
        ctx.textAlign="right"; ctx.fillText(String(8-i),OX-5,OY+i*SQ+SQ/2+4); ctx.textAlign="center";
      }
      // Pieces
      for(let i=0;i<64;i++){
        const p=board[i]; if(p==="")continue;
        if(animPiece&&i===animPiece.to&&animPiece.t<1)continue; // being animated
        const r=rank(i),f=file(i);
        const sx=OX+f*SQ+SQ/2, sy=OY+r*SQ+SQ/2;
        ctx.fillStyle=PIECE_COLORS[p]||"#fff";
        ctx.shadowColor=PIECE_COLORS[p]||"#fff"; ctx.shadowBlur=isWhite(p)?8:12;
        ctx.font=`${SQ-10}px serif`; ctx.textAlign="center";
        ctx.fillText(PIECE_NAMES[p]||"",sx,sy+SQ/2-8); ctx.shadowBlur=0;
      }
      // Animated moving piece
      if(animPiece&&animPiece.t<1){
        const t=animPiece.t;
        const fr=rank(animPiece.from),ff=file(animPiece.from);
        const tr=rank(animPiece.to),tf=file(animPiece.to);
        const sx=OX+(ff+(tf-ff)*t)*SQ+SQ/2;
        const sy=OY+(fr+(tr-fr)*t)*SQ+SQ/2 - Math.sin(t*Math.PI)*20; // arc
        const p=animPiece.piece;
        ctx.fillStyle=PIECE_COLORS[p]||"#fff"; ctx.shadowColor=PIECE_COLORS[p]||"#fff"; ctx.shadowBlur=16;
        ctx.font=`${SQ-10}px serif`; ctx.textAlign="center";
        ctx.fillText(PIECE_NAMES[p]||"",sx,sy+SQ/2-8); ctx.shadowBlur=0;
      }
      // Cursor
      if(turn==="w"&&!aiThinking){
        const cr=rank(cursor),cf=file(cursor);
        ctx.strokeStyle="#ffdd00"; ctx.shadowColor="#ffdd00"; ctx.shadowBlur=12+4*Math.sin(Date.now()*0.008);
        ctx.lineWidth=3; ctx.strokeRect(OX+cf*SQ+2,OY+cr*SQ+2,SQ-4,SQ-4); ctx.shadowBlur=0;
      }
      // Captured pieces
      ctx.font="16px serif"; ctx.textAlign="left";
      capturedB.forEach((p,i)=>{ctx.fillStyle=PIECE_COLORS[p]||"#fff";ctx.fillText(PIECE_NAMES[p]||"",10+i*18,H-18);});
      ctx.textAlign="right";
      capturedW.forEach((p,i)=>{ctx.fillStyle=PIECE_COLORS[p]||"#fff";ctx.fillText(PIECE_NAMES[p]||"",W-10-i*18,18);});
      // HUD
      ctx.fillStyle="#000033cc"; ctx.fillRect(0,0,W,32);
      ctx.textAlign="center"; ctx.fillStyle="#fff"; ctx.font="9px 'Press Start 2P'";
      ctx.fillText("NEON CHESS  VS AI",W/2,20);
      ctx.textAlign="left"; ctx.fillStyle=turn==="w"?"#00ffff":"#ff4444";
      ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=8;
      ctx.fillText(turn==="w"?"YOUR TURN":aiThinking?"AI THINKING...":"WAIT...",10,20); ctx.shadowBlur=0;
      ctx.textAlign="right"; ctx.fillStyle="#ffdd00"; ctx.font="8px 'Press Start 2P'";
      ctx.fillText(`SCORE ${score}`,W-10,20);
      ctx.fillStyle="#555"; ctx.textAlign="center"; ctx.font="7px 'Press Start 2P'";
      ctx.fillText("ARROWS: MOVE  SPACE: SELECT/MOVE  X: CANCEL",W/2,H-6);
      if(gameOver){
        ctx.fillStyle="rgba(0,0,0,0.85)"; ctx.fillRect(0,0,W,H);
        ctx.textAlign="center";
        const wColor=winner==="W"?"#00ffff":winner==="B"?"#ff4444":"#ffdd00";
        ctx.fillStyle=wColor; ctx.shadowColor=wColor; ctx.shadowBlur=30;
        ctx.font="bold 22px 'Press Start 2P'";
        ctx.fillText(winner==="W"?"YOU WIN! 🏆":winner==="B"?"AI WINS":"DRAW",W/2,H/2-15);
        ctx.shadowBlur=0; ctx.fillStyle="#fff"; ctx.font="9px 'Press Start 2P'";
        ctx.fillText(`Captured: ${capturedW.length} white pieces`,W/2,H/2+15);
      }
    },
    getScore:()=>score, getLives:()=>lives, getLevel:()=>level, isOver:()=>dead,
  };
}

// ========= GENERIC PLACEHOLDER =========
function createPlaceholderGame(title: string): GameEngine {
  let timer = 0, score = 0, lives = 3, level = 1, particles: { x: number; y: number; vx: number; vy: number; color: string; life: number }[] = [];
  return {
    init(canvas) { timer = 0; score = 0; lives = 3; level = 1; particles = []; },
    update(dt) {
      timer += dt;
      score = Math.floor(timer * 10 * level);
      if (Math.random() < 0.1) particles.push({ x: Math.random() * 800, y: Math.random() * 600, vx: (Math.random() - 0.5) * 60, vy: (Math.random() - 0.5) * 60, color: `hsl(${Math.random() * 360},100%,60%)`, life: 2 });
      for (const p of particles) { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; }
      particles.splice(0, particles.length, ...particles.filter((p) => p.life > 0));
    },
    draw(ctx, canvas) {
      ctx.fillStyle = "#050510";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(canvas.width / 2 - 220, canvas.height / 2 - 80, 440, 160);
      ctx.fillStyle = "#ff00ff";
      ctx.font = "14px 'Press Start 2P'";
      ctx.textAlign = "center";
      ctx.fillText(title.toUpperCase(), canvas.width / 2, canvas.height / 2 - 20);
      ctx.fillStyle = "#00ffff";
      ctx.font = "8px 'Press Start 2P'";
      ctx.fillText("COMING SOON - DEMO MODE", canvas.width / 2, canvas.height / 2 + 20);
      ctx.fillText("ARROW KEYS TO PLAY", canvas.width / 2, canvas.height / 2 + 50);
    },
    getScore: () => score,
    getLives: () => lives,
    getLevel: () => level,
    isOver: () => false,
  };
}

// ========= QUIZ BATTLE — EDUCATIONAL, 100 LEVELS =========
function createQuizGame(category:string="mixed"): GameEngine {
  const QDATA:{q:string;choices:string[];a:number}[][]=[
    // Geography (0)
    [{q:"Capital of France?",choices:["Paris","Lyon","Marseille","Nice"],a:0},{q:"Largest ocean?",choices:["Atlantic","Pacific","Indian","Arctic"],a:1},{q:"Capital of Japan?",choices:["Osaka","Kyoto","Tokyo","Hiroshima"],a:2},{q:"River through Egypt?",choices:["Congo","Amazon","Nile","Niger"],a:2},{q:"Largest continent?",choices:["America","Europe","Africa","Asia"],a:3},{q:"Capital of Brazil?",choices:["São Paulo","Rio","Brasília","Salvador"],a:2},{q:"Mt Everest country?",choices:["India","China","Nepal","Tibet"],a:2},{q:"Longest river?",choices:["Amazon","Congo","Nile","Yangtze"],a:2},{q:"Capital of Australia?",choices:["Sydney","Melbourne","Canberra","Perth"],a:2},{q:"Country with most islands?",choices:["Indonesia","Philippines","Norway","Sweden"],a:0}],
    // Science (1)
    [{q:"Water chemical formula?",choices:["HO","H2O2","H2O","OH2"],a:2},{q:"Closest star to Earth?",choices:["Proxima","Sirius","Vega","The Sun"],a:3},{q:"Speed of light (approx)?",choices:["300,000 km/s","150,000 km/s","450,000 km/s","200,000 km/s"],a:0},{q:"DNA stands for?",choices:["Data Nucleic Acid","Deoxyribonucleic Acid","Dinucleic Acid","Double Nucleic Acid"],a:1},{q:"Atomic # of Carbon?",choices:["6","8","12","14"],a:0},{q:"Photosynthesis produces?",choices:["CO2","Water","Oxygen","Nitrogen"],a:2},{q:"Gravity on Earth?",choices:["8.9 m/s²","9.8 m/s²","10.5 m/s²","7.4 m/s²"],a:1},{q:"Smallest planet?",choices:["Mars","Venus","Mercury","Pluto"],a:2},{q:"Human chromosomes?",choices:["23","46","48","44"],a:1},{q:"Sound travels fastest in?",choices:["Air","Water","Vacuum","Steel"],a:3}],
    // History (2)
    [{q:"WW2 ended in?",choices:["1943","1944","1945","1946"],a:2},{q:"First US President?",choices:["J Adams","T Jefferson","B Franklin","G Washington"],a:3},{q:"French Revolution began?",choices:["1776","1789","1792","1800"],a:1},{q:"Who was Napoleon?",choices:["French Emperor","Russian Czar","British King","Spanish King"],a:0},{q:"Great Wall built by?",choices:["Japan","Mongolia","Korea","China"],a:3},{q:"Year Columbus arrived?",choices:["1402","1492","1542","1452"],a:1},{q:"WW1 started in?",choices:["1912","1914","1916","1918"],a:1},{q:"Roman Empire fell?",choices:["376 AD","476 AD","576 AD","276 AD"],a:1},{q:"Moon landing year?",choices:["1967","1968","1969","1970"],a:2},{q:"Berlin Wall fell?",choices:["1987","1988","1989","1990"],a:2}],
    // Vocab (3)
    [{q:"EPHEMERAL means?",choices:["Permanent","Lasting briefly","Ancient","Transparent"],a:1},{q:"BENEVOLENT means?",choices:["Evil","Hostile","Kind","Shy"],a:2},{q:"VERBOSE means?",choices:["Silent","Using too many words","Brief","Angry"],a:1},{q:"LETHARGIC means?",choices:["Energetic","Alert","Sluggish","Excited"],a:2},{q:"AMBIGUOUS means?",choices:["Clear","Uncertain meaning","Wrong","Simple"],a:1},{q:"TENACIOUS means?",choices:["Weak","Persistent","Fearful","Lazy"],a:1},{q:"PLAUSIBLE means?",choices:["Impossible","Unlikely","Reasonable","Absurd"],a:2},{q:"CANDID means?",choices:["Dishonest","Frank/Honest","Shy","Hidden"],a:1},{q:"PRAGMATIC means?",choices:["Idealistic","Practical","Dreamy","Artistic"],a:1},{q:"LUCID means?",choices:["Confusing","Dark","Clear","Cloudy"],a:2}],
    // Math trivia (4)
    [{q:"Prime numbers <10?",choices:["3","4","5","6"],a:1},{q:"Square root of 144?",choices:["10","11","12","13"],a:2},{q:"π ≈ ?",choices:["3.14","2.71","1.61","4.13"],a:0},{q:"2^10 = ?",choices:["512","1024","256","2048"],a:1},{q:"Fibonacci after 13?",choices:["17","19","21","23"],a:2},{q:"Triangle angles sum?",choices:["90°","180°","270°","360°"],a:1},{q:"50% of 240?",choices:["100","110","120","130"],a:2},{q:"7 × 8 = ?",choices:["54","56","58","62"],a:1},{q:"√225 = ?",choices:["13","14","15","16"],a:2},{q:"60 ÷ 0.5 = ?",choices:["30","60","120","180"],a:2}],
    // Coding (5)
    [{q:"Boolean values are?",choices:["1 and 0","True and False","Yes and No","On and Off"],a:1},{q:"CPU stands for?",choices:["Computer Power Unit","Central Processing Unit","Core Processing Unit","Code Processing Unit"],a:1},{q:"HTML stands for?",choices:["Hyper Transfer Markup Language","HyperText Markup Language","High Text Markup Language","Hyper Table Markup Language"],a:1},{q:"// in code means?",choices:["Division","Comment","URL","Newline"],a:1},{q:"Binary: 1010 = ?",choices:["8","9","10","11"],a:2},{q:"Array index starts at?",choices:["1","0","-1","2"],a:1},{q:"Git 'commit' does?",choices:["Deletes files","Saves changes","Sends email","Runs code"],a:1},{q:"RAM stores data?",choices:["Permanently","Temporarily","Never","Slowly"],a:1},{q:"JSON stands for?",choices:["Java Standard Object Notation","JavaScript Object Notation","Java Script Output Notation","JavaScript Order Notation"],a:1},{q:"CSS positions elements?",choices:["True","False","Sometimes","Always"],a:0}],
  ];
  function getQBank(cat:string){if(cat==="geography")return[...QDATA[0],...QDATA[0]].sort(()=>Math.random()-0.5);if(cat==="science")return[...QDATA[1],...QDATA[1]].sort(()=>Math.random()-0.5);if(cat==="history")return[...QDATA[2],...QDATA[2]].sort(()=>Math.random()-0.5);if(cat==="vocab")return[...QDATA[3],...QDATA[3]].sort(()=>Math.random()-0.5);if(cat==="coding")return[...QDATA[5],...QDATA[5]].sort(()=>Math.random()-0.5);return[...QDATA[0],...QDATA[1],...QDATA[2],...QDATA[3],...QDATA[4],...QDATA[5]].sort(()=>Math.random()-0.5);}
  let bank:{q:string;choices:string[];a:number}[],qIdx:number,current:{q:string;choices:string[];a:number}|null;
  let score=0,lives=3,level=1,dead=false,streak=0,bestStreak=0;
  let selected=-1,answered=false,answerTimer=0,correctAns=-1;
  let pHp=100,pMaxHp=100,enemyHp=50,enemyMaxHp=50;
  let flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let prevKeys=new Set<string>();
  let levelTimer=60,timerMax=60,qs=0,qsPerLevel=5;
  let shake=0;
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  function nextQ(){current=bank[qIdx%bank.length];qIdx++;selected=-1;answered=false;answerTimer=0;timerMax=Math.max(8,20-level);levelTimer=timerMax;}
  function initLevel(lv:number){enemyMaxHp=50+lv*20;enemyHp=enemyMaxHp;qsPerLevel=5+lv;qs=0;nextQ();}
  return {
    init(){bank=getQBank(category);qIdx=0;score=0;lives=3;level=1;dead=false;streak=0;bestStreak=0;pHp=100;pMaxHp=100;sparks=[];prevKeys=new Set();initLevel(1);flashTimer=0;},
    update(dt,keys){
      if(dead)return;
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(shake>0)shake-=dt;
      if(flashTimer>0)flashTimer-=dt;
      if(answered){answerTimer-=dt;if(answerTimer<=0){nextQ();if(qs>=qsPerLevel){qs=0;level++;initLevel(level);flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;}}}
      else{levelTimer-=dt;if(levelTimer<=0){// Time out
          lives--;streak=0;shake=0.5;flashMsg="TIME OUT!";flashColor="#ff8800";flashTimer=0.8;if(lives<=0)dead=true;else nextQ();}
        const pm=(k:string)=>keys.has(k)&&!prevKeys.has(k);
        let chosen=-1;
        if(pm("1"))chosen=0;else if(pm("2"))chosen=1;else if(pm("3"))chosen=2;else if(pm("4"))chosen=3;
        if(chosen>=0&&current){
          selected=chosen;answered=true;correctAns=current.a;answerTimer=1.5;qs++;
          if(chosen===current.a){
            const pts=(10+streak*5)*level+Math.round(levelTimer*3);score+=pts;streak++;if(streak>bestStreak)bestStreak=streak;
            enemyHp-=20+streak*5;
            for(let i=0;i<12;i++){const a=Math.random()*Math.PI*2;sparks.push({x:600,y:240,vx:Math.cos(a)*120,vy:Math.sin(a)*120,color:"#00ff88",life:0.6});}
            if(enemyHp<=0){flashMsg="ENEMY DOWN!";flashColor="#ffdd00";flashTimer=1;score+=100*level;if(qs>=qsPerLevel){level++;initLevel(level);}else{enemyHp=enemyMaxHp;}}
          } else {
            streak=0;pHp-=20;shake=0.4;
            for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;sparks.push({x:200,y:250,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:"#ff2244",life:0.5});}
            if(pHp<=0){lives--;pHp=pMaxHp;if(lives<=0)dead=true;}
          }
        }
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      const sh=shake>0?(Math.random()-0.5)*8:0;
      ctx.fillStyle="#010018";ctx.fillRect(0,0,W,H);
      ctx.fillStyle="#060025";ctx.fillRect(0,60,W,H-60);
      // Enemy side
      const cats:{[k:string]:string}={geography:"🌍",science:"🧪",history:"📜",vocab:"📖",coding:"💻",mixed:"🧠"};
      const emoji=cats[category]||"🧠";
      ctx.font="70px serif";ctx.textAlign="center";ctx.fillText(emoji,600+sh,200);
      ctx.fillStyle="#111";ctx.fillRect(540+sh,210,120,16);
      const ecol=enemyHp/enemyMaxHp>0.5?"#ff8800":"#ff2244";
      ctx.fillStyle=ecol;ctx.shadowColor=ecol;ctx.shadowBlur=6;ctx.fillRect(540+sh,210,Math.round(120*Math.max(0,enemyHp/enemyMaxHp)),16);ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="6px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`${Math.max(0,enemyHp)}/${enemyMaxHp}`,600+sh,222);
      // Player
      ctx.font="50px serif";ctx.fillText("🧙",200+sh,220);
      ctx.fillStyle="#111";ctx.fillRect(140,230,120,14);
      const pcol=pHp/pMaxHp>0.5?"#00ff88":pHp/pMaxHp>0.25?"#ffdd00":"#ff2244";
      ctx.fillStyle=pcol;ctx.shadowColor=pcol;ctx.shadowBlur=4;ctx.fillRect(140,230,Math.round(120*pHp/pMaxHp),14);ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="6px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`HP ${pHp}`,200,240);
      // VS
      ctx.fillStyle="#aa00ff";ctx.shadowColor="#aa00ff";ctx.shadowBlur=8;ctx.font="12px 'Press Start 2P'";ctx.fillText("VS",400,180);ctx.shadowBlur=0;
      // Timer bar
      const tPct=levelTimer/timerMax;
      ctx.fillStyle="#222";ctx.fillRect(80,262,640,10);
      ctx.fillStyle=tPct>0.5?"#00ff88":tPct>0.25?"#ffdd00":"#ff2244";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=6;ctx.fillRect(80,262,Math.round(640*tPct),10);ctx.shadowBlur=0;
      // Sparks
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,5,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // Question
      if(current){
        ctx.fillStyle="#000033";ctx.fillRect(40,282,720,70);
        ctx.strokeStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.lineWidth=2;ctx.strokeRect(40,282,720,70);ctx.shadowBlur=0;
        ctx.fillStyle="#fff";ctx.font="bold 10px 'Press Start 2P'";ctx.textAlign="center";
        const lines=current.q.match(/.{1,45}/g)||[current.q];
        lines.forEach((ln,i)=>ctx.fillText(ln,W/2,300+i*18));
        // Choices (2x2 grid)
        const cols=[{x:60,y:362},{x:420,y:362},{x:60,y:404},{x:420,y:404}];
        current.choices.forEach((ch,i)=>{
          const {x:cx,y:cy}=cols[i];
          let bg="#001133";
          if(answered){bg=i===correctAns?"#004400":i===selected&&i!==correctAns?"#440000":"#001133";}
          ctx.fillStyle=bg;ctx.fillRect(cx,cy,330,32);
          ctx.strokeStyle=answered?(i===correctAns?"#00ff88":i===selected?"#ff2244":"#333"):streak>=3?"#ff8800":"#00ffff";
          ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=4;ctx.lineWidth=2;ctx.strokeRect(cx,cy,330,32);ctx.shadowBlur=0;
          ctx.fillStyle=answered&&i===correctAns?"#00ff88":answered&&i===selected?"#ff4444":"#aaa";
          ctx.font="7px 'Press Start 2P'";ctx.textAlign="left";
          ctx.fillText(`${i+1}. ${ch.substring(0,36)}`,cx+8,cy+20);
        });
        ctx.fillStyle="#555";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("Press 1 · 2 · 3 · 4",W/2,444);
      }
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}  Q ${qs}/${qsPerLevel}  🔥${streak}`,W/2,20);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`BEST STREAK: ${bestStreak}x`,W/2,36);
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 16px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H/2-60);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.9)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-20);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+10);ctx.fillText(`BEST STREAK: ${bestStreak}x`,W/2,H/2+30);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= MEMORY MATRIX — PATTERN MEMORY, 100 LEVELS =========
function createMemoryGame(): GameEngine {
  const GRID=4;
  let pattern:boolean[][],playerTiles:boolean[][];
  let score=0,lives=3,level=1,dead=false;
  let phase:"show"|"input"|"result"="show";
  let showTimer=0,showIdx=0,flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let showSeq:{r:number;c:number}[],inputSeq:{r:number;c:number}[];
  let prevKeys=new Set<string>();
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  let resultTimer=0,hovered={r:-1,c:-1};
  let patternCount=0,maxPatternCount=0;
  const TILE2=90,OX2=190,OY2=120;
  function genPattern(lv:number):{r:number;c:number}[]{
    const cnt=Math.min(2+lv,GRID*GRID);
    const seq:{r:number;c:number}[]=[];
    const used=new Set<string>();
    while(seq.length<cnt){const r=Math.floor(Math.random()*GRID),c=Math.floor(Math.random()*GRID);const k=`${r},${c}`;if(!used.has(k)){used.add(k);seq.push({r,c});}}
    return seq;
  }
  return {
    init(){score=0;lives=3;level=1;dead=false;flashTimer=0;sparks=[];prevKeys=new Set();phase="show";showSeq=genPattern(1);inputSeq=[];showTimer=0.6;showIdx=0;patternCount=0;maxPatternCount=showSeq.length;playerTiles=Array.from({length:GRID},()=>Array(GRID).fill(false));},
    update(dt,keys){
      if(dead)return;
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      if(phase==="show"){
        showTimer-=dt;
        if(showTimer<=0){showIdx++;showTimer=0.5+0.02*Math.max(0,5-level);if(showIdx>showSeq.length){phase="input";inputSeq=[];playerTiles=Array.from({length:GRID},()=>Array(GRID).fill(false));}}
      } else if(phase==="result"){
        resultTimer-=dt;
        if(resultTimer<=0){phase="show";showSeq=genPattern(level);showIdx=0;showTimer=0.6;maxPatternCount=showSeq.length;inputSeq=[];playerTiles=Array.from({length:GRID},()=>Array(GRID).fill(false));}
      } else if(phase==="input"){
        // Arrow keys to navigate, Enter/Space to select
        const pm=(k:string)=>keys.has(k)&&!prevKeys.has(k);
        if(pm("ArrowRight")||pm("d"))hovered.c=Math.min(GRID-1,hovered.c+1);
        if(pm("ArrowLeft")||pm("a"))hovered.c=Math.max(0,hovered.c-1);
        if(pm("ArrowDown")||pm("s"))hovered.r=Math.min(GRID-1,hovered.r+1);
        if(pm("ArrowUp")||pm("w"))hovered.r=Math.max(0,hovered.r-1);
        if(hovered.r<0)hovered={r:0,c:0};
        if(pm(" ")||pm("z")||pm("Enter")){
          const {r,c}=hovered;
          if(!playerTiles[r][c]){
            playerTiles[r][c]=true;
            inputSeq.push({r,c});
            const expected=showSeq[inputSeq.length-1];
            if(expected&&expected.r===r&&expected.c===c){
              const cx2=OX2+c*TILE2+TILE2/2,cy2=OY2+r*TILE2+TILE2/2;
              for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;sparks.push({x:cx2,y:cy2,vx:Math.cos(a)*90,vy:Math.sin(a)*90,color:"#00ff88",life:0.5});}
              score+=10*level;patternCount++;
              if(inputSeq.length>=showSeq.length){
                score+=50*level;flashMsg=`PERFECT! +${50*level}`;flashColor="#ffdd00";flashTimer=1;
                level++;phase="result";resultTimer=1.5;
              }
            } else {
              lives--;flashMsg="WRONG!";flashColor="#ff2244";flashTimer=1;
              for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2;sparks.push({x:OX2+c*TILE2+TILE2/2,y:OY2+r*TILE2+TILE2/2,vx:Math.cos(a)*80,vy:Math.sin(a)*80,color:"#ff2244",life:0.5});}
              if(lives<=0)dead=true;else{phase="result";resultTimer=1.5;}
            }
          }
        }
      }
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010018";ctx.fillRect(0,0,W,H);
      // Title
      ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=10;ctx.font="10px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("MEMORY MATRIX",W/2,50);ctx.shadowBlur=0;
      if(phase==="show"){
        ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="9px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`MEMORIZE! (${Math.max(0,showSeq.length-showIdx)} tiles left)`,W/2,76);ctx.shadowBlur=0;
      } else if(phase==="input"){
        ctx.fillStyle="#00ff88";ctx.font="9px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`REPEAT THE PATTERN — ${inputSeq.length}/${showSeq.length}`,W/2,76);
        ctx.fillStyle="#555";ctx.font="7px 'Press Start 2P'";ctx.fillText("Arrow keys + SPACE to select",W/2,92);
      } else {
        ctx.fillStyle="#aa00ff";ctx.font="9px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("NEXT ROUND...",W/2,76);
      }
      // Grid
      for(let r=0;r<GRID;r++)for(let c=0;c<GRID;c++){
        const x=OX2+c*TILE2,y=OY2+r*TILE2;
        const isActive=phase==="show"&&showIdx>0&&showSeq.slice(0,showIdx).some(s=>s.r===r&&s.c===c);
        const isPlayer=phase==="input"&&playerTiles[r]&&playerTiles[r][c];
        const isHovered=phase==="input"&&hovered.r===r&&hovered.c===c;
        if(isActive){ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=20;}
        else if(isPlayer){const expected=showSeq.find(s=>s.r===r&&s.c===c);ctx.fillStyle=expected?"#00ff88":"#ff2244";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=12;}
        else if(isHovered){ctx.fillStyle="#2a0066";ctx.shadowColor="#aa00ff";ctx.shadowBlur=8;}
        else{ctx.fillStyle="#0a0025";ctx.shadowBlur=0;}
        ctx.fillRect(x+4,y+4,TILE2-8,TILE2-8);ctx.shadowBlur=0;
        ctx.strokeStyle=isHovered?"#aa00ff":"#1a0044";ctx.lineWidth=2;ctx.strokeRect(x+4,y+4,TILE2-8,TILE2-8);
        if(isActive){ctx.fillStyle="rgba(255,255,255,0.4)";ctx.fillRect(x+4,y+4,TILE2-8,14);}
      }
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,6,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`LEVEL ${level}  TILES ${showSeq?.length||0}`,W/2,28);ctx.shadowBlur=0;
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 18px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H-80);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.9)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-15);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+18);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

// ========= WORD SCRAMBLE — EDUCATIONAL, 100 LEVELS =========
function createWordScrambleGame(): GameEngine {
  const WORD_LIST_LV1=["cat","dog","run","sun","map","fly","big","red","hot","ice","art","bed","cup","fox","gem","hat","joy","key","lip","mud","nut","old","pen","rat","sad","top","use","van","win","zoo"];
  const WORD_LIST_LV2=["apple","brave","cloud","dance","eager","fancy","grape","happy","image","jumpy","kneel","lemon","magic","night","ocean","peace","queen","rough","sugar","touch","ultra","vivid","woven","xenon","yacht","zesty","bloom","crisp","derby","eagle"];
  const WORD_LIST_LV3=["abstract","balance","capture","dolphin","express","fantasy","general","history","insight","justice","kitchen","lantern","mystery","notable","opinion","quarter","respond","station","thunder","uniform","vibrant","warning","extreme","younger","zillion","breaker","channel","diamond","element","freedom"];
  const WORD_LIST_LV4=["algorithm","beautiful","calculate","dangerous","elaborate","fantastic","gorgeous","honorable","invisible","justified","knowledge","labyrinth","magnitude","negotiate","objective","perimeter","quadratic","relations","synthesis","tolerance","universal","variation","wholesome","xenophobe","yesterday","zealously","adventure","biosphere","character","democracy"];
  function getWordList(lv:number){return lv<=10?WORD_LIST_LV1:lv<=25?WORD_LIST_LV2:lv<=50?WORD_LIST_LV3:WORD_LIST_LV4;}
  function scramble(w:string):string{const arr=[...w];for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}const result=arr.join("");return result===w&&w.length>1?scramble(w):result;}
  let word="",scrambled="",typed="",score=0,lives=3,level=1,dead=false;
  let wordsLeft=0,flashTimer=0,flashMsg="",flashColor="#ffdd00";
  let streak=0,hint=false,hintTimer=0;
  let prevKeys=new Set<string>();
  let sparks:{x:number;y:number;vx:number;vy:number;color:string;life:number}[]=[];
  function nextWord(lv:number){const wl=getWordList(lv);word=wl[Math.floor(Math.random()*wl.length)];scrambled=scramble(word);typed="";hint=false;}
  return {
    init(){score=0;lives=3;level=1;dead=false;typed="";streak=0;sparks=[];prevKeys=new Set();flashTimer=0;wordsLeft=0;nextWord(1);},
    update(dt,keys){
      if(dead)return;
      for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=0.9;s.vy*=0.9;s.life-=dt;}
      sparks=sparks.filter(s=>s.life>0);
      if(flashTimer>0)flashTimer-=dt;
      if(hintTimer>0)hintTimer-=dt;
      const pm=(k:string)=>keys.has(k)&&!prevKeys.has(k);
      for(const ch of "abcdefghijklmnopqrstuvwxyz"){if(pm(ch))typed+=ch;if(pm(ch.toUpperCase()))typed+=ch;}
      if(pm("Backspace"))typed=typed.slice(0,-1);
      if(pm("h")||pm("H")){hint=true;hintTimer=3;}// H for hint - shows first 2 letters
      if(pm("Enter")){
        if(typed.toLowerCase()===word.toLowerCase()){
          const pts=(word.length*15+streak*10)*level;score+=pts;streak++;wordsLeft++;
          for(let i=0;i<12;i++){const a=Math.random()*Math.PI*2;sparks.push({x:400,y:280,vx:Math.cos(a)*140,vy:Math.sin(a)*140,color:"#00ff88",life:0.6});}
          flashMsg=`✓ CORRECT! +${pts}`;flashColor="#00ff88";flashTimer=1;
          if(wordsLeft>=level*3){level++;wordsLeft=0;flashMsg=`LEVEL ${level}!`;flashColor="#00ffff";flashTimer=1.5;}
          nextWord(level);
        } else {
          lives--;streak=0;typed="";
          for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;sparks.push({x:400,y:320,vx:Math.cos(a)*100,vy:Math.sin(a)*100,color:"#ff2244",life:0.5});}
          flashMsg=`✗ IT WAS: ${word.toUpperCase()}`;flashColor="#ff2244";flashTimer=1.5;
          if(lives<=0)dead=true;else nextWord(level);
        }
      }
      if(pm("Tab")){typed="";scrambled=scramble(word);}// Tab to reshuffle
      prevKeys=new Set(keys);
    },
    draw(ctx,canvas){
      const W=canvas.width,H=canvas.height;
      ctx.fillStyle="#010018";ctx.fillRect(0,0,W,H);
      // Decorative tiles
      const letters=[..."WORDSCRAMBLE"];
      letters.forEach((l,i)=>{const x=50+i*62,y=90;ctx.fillStyle=`hsl(${i*30},100%,50%)`;ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=8;ctx.fillRect(x-22,y-28,44,40);ctx.shadowBlur=0;ctx.fillStyle="#000";ctx.font="bold 14px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(l,x,y);});
      // Scrambled word display
      const cw=W/2;
      ctx.fillStyle="#000033";ctx.fillRect(80,120,640,90);ctx.strokeStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=8;ctx.lineWidth=2;ctx.strokeRect(80,120,640,90);ctx.shadowBlur=0;
      ctx.fillStyle="#888";ctx.font="8px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("UNSCRAMBLE:",cw,142);
      // Show scrambled letters as tiles
      const chars=[...scrambled];
      const tw=40,gap=8,totalW=chars.length*(tw+gap)-gap;
      chars.forEach((ch,i)=>{
        const tx=cw-totalW/2+i*(tw+gap);
        const matched=typed[i]?.toLowerCase()===ch;
        ctx.fillStyle=matched?"#002200":"#0a001f";ctx.shadowColor="#aa00ff";ctx.shadowBlur=4;
        ctx.fillRect(tx,152,tw,40);ctx.shadowBlur=0;
        ctx.strokeStyle="#aa00ff";ctx.strokeRect(tx,152,tw,40);
        ctx.fillStyle="#fff";ctx.font="bold 14px 'Press Start 2P'";ctx.textAlign="center";
        ctx.fillText(ch.toUpperCase(),tx+tw/2,178);
      });
      // Hint
      if(hint&&hintTimer>0){
        const hintTxt=word.slice(0,2).toUpperCase()+"...";
        ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="11px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`HINT: ${hintTxt}`,cw,230);ctx.shadowBlur=0;
      }
      // Typed input
      ctx.fillStyle="#000033";ctx.fillRect(cw-200,248,400,44);ctx.strokeStyle="#00ff88";ctx.lineWidth=2;ctx.strokeRect(cw-200,248,400,44);
      ctx.fillStyle="#00ff88";ctx.shadowColor="#00ff88";ctx.shadowBlur=6;ctx.font="bold 16px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(typed.toUpperCase()||"_",cw,276);ctx.shadowBlur=0;
      // Progress dots
      for(let i=0;i<word.length;i++){
        const correct=typed[i]?.toLowerCase()===word[i];
        const filled=typed.length>i;
        ctx.fillStyle=filled?(correct?"#00ff88":"#ff2244"):"#333";
        ctx.beginPath();ctx.arc(cw-word.length*12+i*24+12,306,8,0,Math.PI*2);ctx.fill();
      }
      ctx.fillStyle="#333";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText("TYPE ANSWER + ENTER  •  TAB=RESHUFFLE  •  H=HINT",cw,330);
      for(const s of sparks){ctx.globalAlpha=s.life*2;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,6,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
      // Words progress
      const pct=wordsLeft/(level*3);
      ctx.fillStyle="#111";ctx.fillRect(80,350,640,10);ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=4;ctx.fillRect(80,350,Math.round(640*pct),10);ctx.shadowBlur=0;
      ctx.fillStyle="#555";ctx.font="7px 'Press Start 2P'";ctx.textAlign="center";ctx.fillText(`WORDS ${wordsLeft}/${level*3}  STREAK ${streak}x`,cw,376);
      // HUD
      ctx.fillStyle="#000022ee";ctx.fillRect(0,0,W,46);
      ctx.fillStyle="#ffdd00";ctx.shadowColor="#ffdd00";ctx.shadowBlur=8;ctx.font="8px 'Press Start 2P'";ctx.textAlign="left";ctx.fillText(`SCORE ${score.toLocaleString()}`,10,28);ctx.shadowBlur=0;
      ctx.textAlign="center";ctx.fillStyle="#00ffff";ctx.shadowColor="#00ffff";ctx.shadowBlur=6;ctx.fillText(`WORD SCRAMBLE  LEVEL ${level}`,W/2,28);ctx.shadowBlur=0;
      ctx.textAlign="right";ctx.fillStyle="#ff6699";for(let i=0;i<lives;i++)ctx.fillText("♥",W-10-i*18,28);
      if(flashTimer>0){ctx.textAlign="center";ctx.fillStyle=flashColor;ctx.shadowColor=flashColor;ctx.shadowBlur=24;ctx.font="bold 14px 'Press Start 2P'";ctx.globalAlpha=Math.min(1,flashTimer*2);ctx.fillText(flashMsg,W/2,H/2+20);ctx.globalAlpha=1;ctx.shadowBlur=0;}
      if(dead){ctx.fillStyle="rgba(0,0,0,0.9)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ff2244";ctx.shadowColor="#ff2244";ctx.shadowBlur=30;ctx.font="bold 20px 'Press Start 2P'";ctx.fillText("GAME OVER",W/2,H/2-20);ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.font="9px 'Press Start 2P'";ctx.fillText(`LEVEL ${level}  SCORE: ${score.toLocaleString()}`,W/2,H/2+10);}
    },
    getScore:()=>score,getLives:()=>lives,getLevel:()=>level,isOver:()=>dead,
  };
}

function getGameEngine(slug: string, title: string): GameEngine {
  switch (slug) {
    // ===== 20 EDUCATIONAL GAMES =====
    case "typing-storm": case "speed-typer": case "word-blitz": case "typing-racer": return createTypingRacerGame();
    case "math-storm": case "number-battle": case "times-table-titan": case "math-elite": case "fraction-fighter": case "math-battle": return createMathBattleGame();
    case "geography-quest": case "world-explorer": case "capital-quest": return createQuizGame("geography");
    case "science-quest": case "science-lab-x": case "lab-storm": return createQuizGame("science");
    case "history-blast": case "time-traveler": case "history-quest": return createQuizGame("history");
    case "vocab-blast": case "vocab-vault": case "word-power-x": return createQuizGame("vocab");
    case "code-quest": case "code-breaker": case "logic-quest": return createQuizGame("coding");
    case "brain-blitz": case "brain-storm": return createQuizGame("mixed");
    case "memory-matrix": case "pattern-storm": case "color-matrix": return createMemoryGame();
    case "word-scramble-x": case "anagram-storm": case "spelling-quest": return createWordScrambleGame();
    // ===== 20 FUN / ADDICTIVE GAMES =====
    case "snake-neon": case "python-pro": case "neon-viper": case "neon-viper-xl": case "snake-xl": return createSnakeGame();
    case "neon-breakout": case "brick-crusher": case "arkanoid-x": case "breakout-blitz": case "brick-storm": case "neon-pong": return createBreakoutGame();
    case "space-raiders": case "galaxy-storm": case "alien-blitz": case "space-invaders-x": case "galaga-storm": case "galaxian-x": case "phoenix-x": case "defender-wave": return createSpaceInvadersGame();
    case "tetris-neon": case "block-storm": case "grid-master": case "tetris-storm": case "stack-attack": return createTetrisGame();
    case "neon-jump": case "platform-storm": case "sky-runner": case "super-skillz-bros": case "mushroom-dash": case "castle-siege": case "coin-blitz": case "star-power": case "world-8-rush": case "princess-rescue": return createPlatformerGame();
    case "asteroid-storm": case "space-rock": case "cosmic-blast": case "asteroids-blast": return createAsteroidsGame();
    case "pac-maze": case "pipe-escape": return createPacManGame();
    // Racing games
    case "neon-circuit-racer": return createRacingGame("circuit");
    case "drift-king-x": return createRacingGame("drift");
    case "space-racer": return createRacingGame("space");
    case "cyber-highway": return createRacingGame("highway");
    case "desert-rally": return createRacingGame("drift");
    // Fighting games
    case "street-storm-fighter": return createFightingGame("street");
    case "neon-kombat": return createFightingGame("neon");
    case "robot-rumble": return createFightingGame("robot");
    case "shadow-duel": return createFightingGame("ninja");
    case "arena-legends": return createFightingGame("arena");
    // Twin-stick / shooters
    case "dual-storm": case "horde-rush": case "sniper-storm": case "star-assault": return createTwinStickGame();
    // Bullet hell
    case "bullet-hell-x": case "danmaku-storm": case "barrage-zero": return createBulletHellGame();
    // Tank
    case "tank-storm": case "tank-battalion": case "iron-storm": return createTankGame();
    // Rhythm
    case "rhythm-storm-x": case "beat-blitz": case "neon-beats": return createRhythmGame();
    // Pinball
    case "physics-pinball": case "neon-pinball": return createPinballGame();
    // Tower defense
    case "tower-defense-x": case "neon-fortress": return createTowerDefenseGame();
    // Gravity platformer
    case "gravity-flip-x": case "neon-jumper": case "cyber-ninja": case "pixel-warrior": return createGravityPlatformerGame();
    // Tennis/paddle sports
    case "tennis-storm": case "beach-volleyball": case "cyber-tennis": return createTennisGame();
    // Hockey
    case "ice-hockey-x": case "cyber-soccer": case "neon-hockey": return createHockeyGame();
    // Basketball
    case "street-hoops": case "neon-hoops": case "slam-dunk-x": return createBasketballGame();
    // Battleship
    case "battle-ships-x": case "naval-storm": return createBattleshipGame();
    // Maze
    case "maze-escape-x": case "neon-maze": case "dungeon-run": return createMazeGame();
    // Dungeon Crawler RPG
    case "dungeon-crawler": case "dungeon-storm": case "neon-dungeon": case "crypt-runner": return createDungeonCrawlerGame();
    // Chess
    case "neon-chess": case "chess-storm": case "cyber-chess": return createChessGame();
    default: return createPlaceholderGame(title);
  }
}

export default function Play() {
  const { slug } = useParams<{ slug: string }>();
  const { data: games } = useListGames(undefined, { query: { queryKey: getListGamesQueryKey() } });
  const game = games?.find((g: {slug: string}) => g.slug === slug);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const { player } = usePlayer();
  const submitScore = useSubmitScore();
  const queryClient = useQueryClient();

  const startGame = useCallback(() => {
    if (!canvasRef.current || !game) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const engine = getGameEngine(game.slug, game.title);
    engine.init(canvas, ctx);
    engineRef.current = engine;
    setGameState("playing");
    setScore(0);
    setLives(engine.getLives());
    setLevel(1);
    setSubmitted(false);
    lastTimeRef.current = 0;

    function loop(time: number) {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = time;
      engine.update(dt, keysRef.current);
      engine.draw(ctx!, canvas);
      setScore(engine.getScore());
      setLives(engine.getLives());
      setLevel(engine.getLevel());
      if (engine.isOver()) {
        setGameState("gameover");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
  }, [game]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
      keysRef.current.add(e.key);
    };
    const offKey = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", offKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", offKey);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, [slug]);

  const handleSubmitScore = () => {
    if (!game || submitted) return;
    submitScore.mutate(
      { data: { playerName: player?.name || "Anonymous", playerAvatar: player?.avatar || "🎮", gameId: game.id, score } },
      {
        onSuccess: () => {
          setSubmitted(true);
          queryClient.invalidateQueries({ queryKey: getListLeaderboardsQueryKey() });
        },
      }
    );
  };

  const resumeGame = () => {
    setGameState("playing");
    lastTimeRef.current = 0;
    const canvas = canvasRef.current;
    if (canvas && engineRef.current) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const engine = engineRef.current;
        function loop(t: number) {
          if (lastTimeRef.current === 0) lastTimeRef.current = t;
          const dt = Math.min((t - lastTimeRef.current) / 1000, 0.05);
          lastTimeRef.current = t;
          engine.update(dt, keysRef.current);
          engine.draw(ctx!, canvas!);
          setScore(engine.getScore());
          setLives(engine.getLives());
          setLevel(engine.getLevel());
          if (engine.isOver()) { setGameState("gameover"); return; }
          rafRef.current = requestAnimationFrame(loop);
        }
        rafRef.current = requestAnimationFrame(loop);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col z-50" style={{ fontFamily: "'Press Start 2P', cursive" }}>

      {/* ── PREMIUM HUD BAR ─────────────────────────────── */}
      <div className="shrink-0 flex items-center gap-3 px-4 py-2 bg-black/90 border-b border-primary/20" style={{ backdropFilter: "blur(8px)" }}>
        {/* Back */}
        <Link href={`/games/${slug}`} className="flex items-center gap-1.5 font-display text-[9px] text-muted-foreground hover:text-white transition-colors mr-2">
          <ArrowLeft className="w-3.5 h-3.5" /> BACK
        </Link>

        {/* Title */}
        {game && (
          <span className="font-display text-[9px] text-primary/80 hidden sm:block border-r border-border/50 pr-3 mr-1 truncate max-w-[140px]">
            {game.title.toUpperCase()}
          </span>
        )}

        {/* Score */}
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-accent" />
          <span className="font-display text-[9px] text-muted-foreground">SCORE</span>
          <span className="font-display text-[11px] text-accent" style={{ textShadow: "0 0 8px #ffdd00" }}>
            {score.toLocaleString()}
          </span>
        </div>

        {/* Lives */}
        <div className="flex items-center gap-1.5">
          <Heart className="w-3 h-3 text-primary" />
          <span className="flex gap-0.5">
            {Array.from({ length: Math.max(0, Math.min(lives, 5)) }).map((_, i) => (
              <span key={i} className="text-primary text-xs" style={{ textShadow: "0 0 6px #ff0066" }}>♥</span>
            ))}
            {Array.from({ length: Math.max(0, 5 - lives) }).map((_, i) => (
              <span key={i} className="text-muted-foreground/30 text-xs">♥</span>
            ))}
          </span>
        </div>

        {/* Level */}
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-secondary" />
          <span className="font-display text-[9px] text-muted-foreground">LVL</span>
          <span className="font-display text-[11px] text-secondary" style={{ textShadow: "0 0 8px #00ffff" }}>
            {level}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Pause btn */}
        {gameState === "playing" && (
          <button
            onClick={() => { cancelAnimationFrame(rafRef.current); setGameState("paused"); }}
            className="flex items-center gap-1.5 font-display text-[9px] text-muted-foreground hover:text-white border border-border/50 hover:border-primary/50 px-3 py-1.5 transition-all duration-200"
          >
            <Pause className="w-3 h-3" /> PAUSE
          </button>
        )}
      </div>

      {/* ── CANVAS FRAME ────────────────────────────────── */}
      <div className="flex-1 relative flex items-center justify-center bg-[#010008] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        </div>

        <div className="game-canvas-frame relative">
          <canvas
            ref={canvasRef}
            width={800}
            height={560}
            className="block max-w-full max-h-full"
            style={{ imageRendering: "pixelated", display: "block" }}
          />
        </div>

        {/* ── IDLE OVERLAY: Start Screen ─────────────────── */}
        {gameState === "idle" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/85" style={{ backdropFilter: "blur(4px)" }}>
            <div className="flex flex-col items-center gap-6 p-10 border-2 border-primary/50 bg-card/90 max-w-lg w-full mx-4 relative"
              style={{ boxShadow: "0 0 40px rgba(255,0,102,0.2), inset 0 0 40px rgba(255,0,102,0.02)", clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}>
              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />

              <div className="font-display text-[9px] text-primary/70 flex items-center gap-2">
                <PlayIcon className="w-3 h-3" /> INSERT COIN
              </div>

              <h2 className="text-2xl md:text-3xl font-display text-white text-center leading-tight neon-text-primary">
                {game?.title?.toUpperCase() || "LOADING..."}
              </h2>

              {game?.description && (
                <p className="text-muted-foreground text-xs text-center leading-relaxed max-w-xs">
                  {game.description}
                </p>
              )}

              <div className="grid grid-cols-2 gap-2 w-full text-[8px] font-display text-muted-foreground border-t border-b border-border/50 py-4">
                <div className="flex items-center gap-1.5"><span className="text-secondary">MOVE</span> ARROWS / WASD</div>
                <div className="flex items-center gap-1.5"><span className="text-secondary">ACTION</span> SPACE / Z</div>
                <div className="flex items-center gap-1.5"><span className="text-secondary">SELECT</span> 1 / 2 / 3 / 4</div>
                <div className="flex items-center gap-1.5"><span className="text-secondary">PAUSE</span> P / ESC</div>
              </div>

              <button onClick={startGame} className="arcade-btn arcade-btn-primary text-sm px-12 py-4 w-full justify-center">
                <PlayIcon className="w-5 h-5 mr-2" /> PRESS START
              </button>

              {game?.rating && (
                <div className="font-display text-[8px] text-muted-foreground flex items-center gap-2">
                  <span className="text-accent">★</span> {game.rating.toFixed(1)} RATING
                  <span className="mx-2 opacity-30">·</span>
                  {game.players}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PAUSE OVERLAY ──────────────────────────────── */}
        {gameState === "paused" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/85" style={{ backdropFilter: "blur(6px)" }}>
            <div className="flex flex-col items-center gap-5 p-8 border-2 border-secondary/50 bg-card/90 max-w-sm w-full mx-4"
              style={{ boxShadow: "0 0 40px rgba(0,255,255,0.15)", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>
              <div className="font-display text-[9px] text-secondary/70 flex items-center gap-2">
                <Pause className="w-3 h-3" /> GAME PAUSED
              </div>
              <h2 className="text-2xl font-display neon-text-secondary">PAUSED</h2>

              <div className="w-full border border-border/50 p-3 flex flex-col gap-2 text-[9px] font-display">
                <div className="flex justify-between"><span className="text-muted-foreground">SCORE</span><span className="text-accent">{score.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">LEVEL</span><span className="text-secondary">{level}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">LIVES</span><span className="text-primary">{"♥".repeat(Math.max(0, lives))}</span></div>
              </div>

              <button onClick={resumeGame} className="arcade-btn arcade-btn-primary w-full justify-center">
                <PlayIcon className="w-4 h-4 mr-2" /> RESUME
              </button>
              <button onClick={startGame} className="arcade-btn border-border bg-transparent hover:bg-muted w-full justify-center text-[9px]">
                <RotateCcw className="w-3.5 h-3.5 mr-2" /> RESTART
              </button>
              <Link href="/games" className="font-display text-[8px] text-muted-foreground hover:text-white transition-colors">
                ← BACK TO GAMES
              </Link>
            </div>
          </div>
        )}

        {/* ── GAME OVER OVERLAY ──────────────────────────── */}
        {gameState === "gameover" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90" style={{ backdropFilter: "blur(4px)" }}>
            <div className="flex flex-col items-center gap-5 p-8 border-2 border-primary/60 bg-card/95 max-w-md w-full mx-4 relative"
              style={{ boxShadow: "0 0 60px rgba(255,0,102,0.3), inset 0 0 40px rgba(255,0,102,0.03)", clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

              <h2 className="text-3xl font-display text-primary neon-text-primary neon-text-flicker">GAME OVER</h2>

              {/* Score display */}
              <div className="flex flex-col items-center gap-1 py-3 border-t border-b border-border/50 w-full">
                <div className="font-display text-[9px] text-muted-foreground">YOUR SCORE</div>
                <div className="font-display text-4xl text-accent" style={{ textShadow: "0 0 20px #ffdd00" }}>
                  {score.toLocaleString()}
                </div>
                <div className="flex gap-4 mt-2 font-display text-[8px] text-muted-foreground">
                  <span>LEVEL <span className="text-secondary">{level}</span></span>
                  <span>·</span>
                  <span>{game?.title}</span>
                </div>
              </div>

              {/* Submit score */}
              {!submitted ? (
                <button
                  onClick={handleSubmitScore}
                  disabled={submitScore.isPending}
                  className="arcade-btn arcade-btn-primary w-full justify-center"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  {submitScore.isPending ? "SUBMITTING..." : "SUBMIT TO LEADERBOARD"}
                </button>
              ) : (
                <div className="flex items-center gap-2 font-display text-[9px] text-emerald-400 py-2 border border-emerald-500/30 bg-emerald-500/10 px-4 w-full justify-center">
                  ✓ SCORE SUBMITTED!
                </div>
              )}

              <div className="flex gap-3 w-full">
                <button onClick={startGame} className="arcade-btn arcade-btn-secondary flex-1 justify-center">
                  <RotateCcw className="w-4 h-4 mr-2" /> RETRY
                </button>
                <Link href="/leaderboard" className="arcade-btn border-border bg-transparent hover:bg-muted flex-1 justify-center text-[9px]">
                  <Trophy className="w-3.5 h-3.5 mr-1.5" /> RANKINGS
                </Link>
              </div>

              <Link href="/games" className="font-display text-[8px] text-muted-foreground hover:text-white transition-colors">
                ← CHOOSE ANOTHER GAME
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ── BOTTOM CONTROLS BAR ─────────────────────────── */}
      <div className="shrink-0 py-1.5 px-4 bg-black/80 border-t border-border/20 flex items-center justify-between">
        <div className="font-display text-[8px] text-muted-foreground/50 hidden sm:flex items-center gap-4">
          <span>ARROWS/WASD: MOVE</span>
          <span>SPACE/Z: ACTION</span>
          <span>1-4: SELECT</span>
        </div>
        <div className="font-display text-[8px] text-muted-foreground/30 text-right">
          {gameState === "playing" && <span>P = PAUSE</span>}
          {gameState !== "playing" && <span>SKILLZSTORM</span>}
        </div>
      </div>
    </div>
  );
}

```

---

## api-server/seed.ts — 178 GAMES

```ts
import { db, gamesTable, leaderboardsTable, playersTable } from "@workspace/db";
import { randomUUID } from "crypto";
import { count } from "drizzle-orm";

const MARIO_GAMES = [
  { id: "mario-1", title: "Super Skillz Bros", slug: "super-skillz-bros", description: "Classic side-scrolling platformer. Run, jump, stomp enemies, collect coins across exciting levels!", category: "Mario & Kart", players: "1-2 players", tags: ["platformer", "mario", "classic"], featured: true, rating: 4.9, playCount: 158432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-2", title: "Kart Storm", slug: "kart-storm", description: "High-speed top-down kart racing with power-ups, drifting, and competitive lap racing!", category: "Mario & Kart", players: "1-4 players", tags: ["racing", "kart", "multiplayer"], featured: true, rating: 4.8, playCount: 134211, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-3", title: "Mushroom Dash", slug: "mushroom-dash", description: "Endless side-scrolling madness with mushroom power-ups and escalating obstacles!", category: "Mario & Kart", players: "1-2 players", tags: ["endless", "runner", "mushroom"], featured: true, rating: 4.7, playCount: 98765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-4", title: "Castle Siege", slug: "castle-siege", description: "Storm the castle! Vertical platformer with challenging enemies and a massive boss fight.", category: "Mario & Kart", players: "1 player", tags: ["platformer", "castle", "boss"], featured: false, rating: 4.6, playCount: 67543, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-5", title: "Coin Blitz", slug: "coin-blitz", description: "Race against the clock! Collect as many coins as possible before time runs out!", category: "Mario & Kart", players: "1-2 players", tags: ["coins", "time-attack", "platformer"], featured: false, rating: 4.5, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-6", title: "Pipe Escape", slug: "pipe-escape", description: "Navigate through a labyrinth of pipes. Think Pac-Man meets Mario in this maze classic!", category: "Mario & Kart", players: "1 player", tags: ["maze", "pipes", "puzzle"], featured: false, rating: 4.4, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-7", title: "Star Power", slug: "star-power", description: "Race through levels while a limited star power makes you invincible — use it wisely!", category: "Mario & Kart", players: "1 player", tags: ["star", "power-up", "speed"], featured: false, rating: 4.6, playCount: 38765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-8", title: "Shell Shock", slug: "shell-shock", description: "Throw bouncing shells to eliminate all targets on each level. Timing is everything!", category: "Mario & Kart", players: "1-2 players", tags: ["shells", "puzzle", "action"], featured: false, rating: 4.3, playCount: 29876, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-9", title: "World 8 Rush", slug: "world-8-rush", description: "The ultimate speed run challenge. Navigate the hardest levels ever designed at max speed!", category: "Mario & Kart", players: "1 player", tags: ["speedrun", "challenge", "hard"], featured: false, rating: 4.7, playCount: 45678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "mario-10", title: "Princess Rescue", slug: "princess-rescue", description: "Classic platformer adventure. Fight through 5 worlds to rescue the princess from the final boss!", category: "Mario & Kart", players: "1 player", tags: ["platformer", "boss", "adventure"], featured: true, rating: 4.8, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
];

const ARCADE_GAMES = [
  { id: "arc-1", title: "Space Invaders X", slug: "space-invaders-x", description: "The classic alien shooter reborn with neon visuals and modern powerups!", category: "Arcade Classics", players: "1-2 players", tags: ["shooter", "space", "classic"], featured: true, rating: 4.9, playCount: 203456, releaseYear: 2024, thumbnailUrl: "/covers/space-invaders-x.png" },
  { id: "arc-2", title: "Pac Maze", slug: "pac-maze", description: "Navigate the maze, eat pellets, dodge ghosts in this timeless arcade legend!", category: "Arcade Classics", players: "1 player", tags: ["maze", "classic", "pac-man"], featured: true, rating: 4.8, playCount: 187654, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-3", title: "Breakout Blitz", slug: "breakout-blitz", description: "Smash through rows of bricks with your paddle and ball in this addictive classic!", category: "Arcade Classics", players: "1 player", tags: ["breakout", "paddle", "classic"], featured: false, rating: 4.7, playCount: 145678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-4", title: "Galaga Storm", slug: "galaga-storm", description: "Face endless waves of alien formations in this intense space shooter!", category: "Arcade Classics", players: "1-2 players", tags: ["shooter", "galaga", "arcade"], featured: true, rating: 4.8, playCount: 167890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-5", title: "Frogger Rush", slug: "frogger-rush", description: "Cross busy roads and rushing rivers to get your frog home safely!", category: "Arcade Classics", players: "1-2 players", tags: ["frogger", "crossing", "classic"], featured: false, rating: 4.6, playCount: 123456, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-6", title: "Tetris Storm", slug: "tetris-storm", description: "Stack falling blocks and clear lines in this legendary puzzle game!", category: "Puzzle", players: "1-2 players", tags: ["tetris", "puzzle", "blocks"], featured: true, rating: 4.9, playCount: 234567, releaseYear: 2024, thumbnailUrl: "/covers/tetris-storm.png" },
  { id: "arc-7", title: "Snake XL", slug: "snake-xl", description: "Grow your snake by eating, but don't hit the walls or your own tail!", category: "Arcade Classics", players: "1 player", tags: ["snake", "classic", "mobile"], featured: false, rating: 4.5, playCount: 98765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-8", title: "Pong Duel", slug: "pong-duel", description: "The original 2-player paddle battle! First to 11 points wins!", category: "Arcade Classics", players: "1-2 players", tags: ["pong", "duel", "classic"], featured: false, rating: 4.4, playCount: 87654, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-9", title: "Asteroids Blast", slug: "asteroids-blast", description: "Blast through asteroid fields in your spacecraft in this iconic space shooter!", category: "Arcade Classics", players: "1 player", tags: ["asteroids", "space", "shooter"], featured: false, rating: 4.6, playCount: 112345, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-10", title: "Donkey Run", slug: "donkey-run", description: "Jump over barrels and climb ladders to rescue your friend from the gorilla!", category: "Arcade Classics", players: "1-2 players", tags: ["donkey", "classic", "platformer"], featured: false, rating: 4.7, playCount: 134567, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-11", title: "Centipede Rush", slug: "centipede-rush", description: "Shoot the centipede as it winds down the screen in this frantic arcade shooter!", category: "Arcade Classics", players: "1 player", tags: ["centipede", "shooter", "classic"], featured: false, rating: 4.5, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-12", title: "Missile Command X", slug: "missile-command-x", description: "Defend your cities from incoming missiles with your ABM battery!", category: "Action", players: "1 player", tags: ["missile", "defense", "classic"], featured: false, rating: 4.4, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-13", title: "Defender Wave", slug: "defender-wave", description: "Protect humans on the surface from alien abduction in this high-speed shooter!", category: "Action", players: "1 player", tags: ["defender", "shooter", "retro"], featured: false, rating: 4.3, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-14", title: "Dig Dug X", slug: "dig-dug-x", description: "Dig underground tunnels and inflate enemies to defeat them!", category: "Arcade Classics", players: "1 player", tags: ["dig-dug", "underground", "classic"], featured: false, rating: 4.5, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-15", title: "Q*Bert Jump", slug: "qbert-jump", description: "Hop on cubes to change their color while avoiding enemies on this isometric puzzle board!", category: "Puzzle", players: "1 player", tags: ["qbert", "isometric", "puzzle"], featured: false, rating: 4.3, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-16", title: "Tron Cycles", slug: "tron-cycles", description: "Light cycle battle — leave walls and trap opponents before they trap you!", category: "Action", players: "1-4 players", tags: ["tron", "cycles", "multiplayer"], featured: true, rating: 4.7, playCount: 145678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-17", title: "Lunar Lander X", slug: "lunar-lander-x", description: "Carefully pilot your lunar module to a safe landing with limited fuel!", category: "Puzzle", players: "1 player", tags: ["lunar", "landing", "physics"], featured: false, rating: 4.4, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-18", title: "Tempest Blast", slug: "tempest-blast", description: "Shoot enemies crawling up the edges of geometric shapes in this vector classic!", category: "Arcade Classics", players: "1 player", tags: ["tempest", "vector", "shooter"], featured: false, rating: 4.5, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-19", title: "Joust Storm", slug: "joust-storm", description: "Mount your flying ostrich and joust against enemy knights to claim their eggs!", category: "Arcade Classics", players: "1-2 players", tags: ["joust", "flying", "classic"], featured: false, rating: 4.6, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-20", title: "Robotron 2084 X", slug: "robotron-2084-x", description: "Last human vs robot uprising — shoot in all directions to survive!", category: "Action", players: "1-2 players", tags: ["robotron", "shoot-em-up", "survival"], featured: false, rating: 4.7, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-21", title: "Zaxxon X", slug: "zaxxon-x", description: "Isometric space shooter — navigate through fortress walls and shoot everything!", category: "Action", players: "1 player", tags: ["zaxxon", "isometric", "shooter"], featured: false, rating: 4.3, playCount: 45678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-22", title: "Burger Time X", slug: "burger-time-x", description: "Build burgers by walking over ingredients while dodging angry hot dogs!", category: "Arcade Classics", players: "1 player", tags: ["burger", "food", "classic"], featured: false, rating: 4.4, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-23", title: "Moon Patrol X", slug: "moon-patrol-x", description: "Drive your buggy across the moon surface, shooting enemies and jumping craters!", category: "Racing", players: "1 player", tags: ["moon", "buggy", "shooter"], featured: false, rating: 4.5, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-24", title: "Scramble X", slug: "scramble-x", description: "Horizontally-scrolling shooter — bomb fuel depots and fight waves of enemies!", category: "Action", players: "1-2 players", tags: ["scramble", "scrolling", "shooter"], featured: false, rating: 4.3, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-25", title: "Phoenix X", slug: "phoenix-x", description: "Blast through five waves of alien birds in this Space Invaders cousin!", category: "Arcade Classics", players: "1 player", tags: ["phoenix", "birds", "shooter"], featured: false, rating: 4.4, playCount: 52341, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-26", title: "Galaxian X", slug: "galaxian-x", description: "Shoot diving aliens in formation in this predecessor to Galaga!", category: "Arcade Classics", players: "1-2 players", tags: ["galaxian", "aliens", "shooter"], featured: false, rating: 4.5, playCount: 61234, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-27", title: "Battlezone X", slug: "battlezone-x", description: "First-person tank combat in a vector-graphics battlefield!", category: "Action", players: "1-2 players", tags: ["tank", "3d", "vector"], featured: false, rating: 4.4, playCount: 47890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-28", title: "Neon Pong", slug: "neon-pong", description: "Pong reimagined with neon glow effects, power-ups, and speed escalation!", category: "Arcade Classics", players: "1-2 players", tags: ["pong", "neon", "power-ups"], featured: false, rating: 4.6, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-29", title: "Pixel Racer", slug: "pixel-racer", description: "Top-down pixel art racing with drifting mechanics and turbo boosts!", category: "Racing", players: "1-4 players", tags: ["racing", "pixel", "top-down"], featured: true, rating: 4.7, playCount: 134567, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-30", title: "Brick Storm", slug: "brick-storm", description: "Advanced brick-breaking with special bricks, power-ups, and boss stages!", category: "Arcade Classics", players: "1-2 players", tags: ["bricks", "paddle", "power-ups"], featured: false, rating: 4.5, playCount: 76543, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-31", title: "Gravity Well", slug: "gravity-well", description: "Navigate your ship using gravity wells — a unique physics-based space puzzle!", category: "Puzzle", players: "1 player", tags: ["gravity", "physics", "space"], featured: false, rating: 4.6, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-32", title: "Color Match", slug: "color-match", description: "Match falling colored blocks as fast as possible in this addictive reflex game!", category: "Puzzle", players: "1-2 players", tags: ["color", "match", "reflex"], featured: false, rating: 4.4, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-33", title: "Memory Flash", slug: "memory-flash", description: "Watch the pattern, repeat it. How far can your memory take you?", category: "Puzzle", players: "1 player", tags: ["memory", "simon", "pattern"], featured: false, rating: 4.3, playCount: 45678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-34", title: "Reflex Blitz", slug: "reflex-blitz", description: "Hit the targets as they appear — the fastest reflex wins!", category: "Action", players: "1-2 players", tags: ["reflex", "speed", "targets"], featured: false, rating: 4.5, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-35", title: "Vector Maze", slug: "vector-maze", description: "Navigate your vector ship through procedurally-generated maze corridors!", category: "Puzzle", players: "1 player", tags: ["vector", "maze", "navigation"], featured: false, rating: 4.4, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-36", title: "Type Speed X", slug: "type-speed-x", description: "Type the falling words before they reach the bottom! A typing game with high score chase!", category: "Arcade Classics", players: "1 player", tags: ["typing", "words", "speed"], featured: false, rating: 4.3, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-37", title: "Reaction Time", slug: "reaction-time", description: "The ultimate test — see how fast you can react to sudden color changes!", category: "Action", players: "1-4 players", tags: ["reaction", "speed", "test"], featured: false, rating: 4.4, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-38", title: "Color Rush", slug: "color-rush", description: "Guide the colored ball through matching colored gates at maximum speed!", category: "Action", players: "1-2 players", tags: ["color", "rush", "speed"], featured: false, rating: 4.5, playCount: 76543, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-39", title: "Pattern Match", slug: "pattern-match", description: "A 6-round Wordle-style pattern matching game with retro visuals!", category: "Puzzle", players: "1 player", tags: ["pattern", "logic", "puzzle"], featured: false, rating: 4.4, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-40", title: "Sequence Storm", slug: "sequence-storm", description: "Remember and repeat ever-growing sequences of lights and sounds!", category: "Puzzle", players: "1-2 players", tags: ["sequence", "memory", "lights"], featured: false, rating: 4.3, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-41", title: "Logic Blast", slug: "logic-blast", description: "Solve logic puzzles under time pressure — deduction meets arcade action!", category: "Puzzle", players: "1 player", tags: ["logic", "puzzle", "brain"], featured: false, rating: 4.5, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-42", title: "Maze Runner X", slug: "maze-runner-x", description: "Find the exit through increasingly complex mazes before the timer runs out!", category: "Puzzle", players: "1-2 players", tags: ["maze", "runner", "puzzle"], featured: false, rating: 4.4, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-43", title: "Trivia Blitz", slug: "trivia-blitz", description: "Fast-fire trivia questions across gaming, pop culture, and science categories!", category: "Puzzle", players: "1-4 players", tags: ["trivia", "quiz", "knowledge"], featured: false, rating: 4.6, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-44", title: "Number Storm", slug: "number-storm", description: "Math meets arcade — solve equations and shoot the correct answers!", category: "Puzzle", players: "1 player", tags: ["math", "numbers", "educational"], featured: false, rating: 4.2, playCount: 34567, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-45", title: "Word Storm", slug: "word-storm", description: "Find as many words as possible from a set of scrambled letters before time runs out!", category: "Puzzle", players: "1-2 players", tags: ["words", "scramble", "vocabulary"], featured: false, rating: 4.3, playCount: 45678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-46", title: "Crystal Castles X", slug: "crystal-castles-x", description: "Collect gems across isometric crystal platforms while avoiding evil witches!", category: "Arcade Classics", players: "1-2 players", tags: ["crystal", "isometric", "gems"], featured: false, rating: 4.4, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-47", title: "Mr Do X", slug: "mr-do-x", description: "Dig tunnels to collect cherries while throwing power balls at monsters!", category: "Arcade Classics", players: "1 player", tags: ["mr-do", "digging", "classic"], featured: false, rating: 4.3, playCount: 38765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-48", title: "Joust Fighter", slug: "joust-fighter", description: "2D fighting game with aerial jousting mechanics — lance your opponents!", category: "Fighting", players: "1-2 players", tags: ["fighting", "joust", "aerial"], featured: false, rating: 4.5, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-49", title: "Turbo Track", slug: "turbo-track", description: "Overhead racing with nitro boosts, oil slicks, and dynamic weather!", category: "Racing", players: "1-4 players", tags: ["racing", "turbo", "top-down"], featured: true, rating: 4.7, playCount: 123456, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-50", title: "Storm Fighter", slug: "storm-fighter", description: "Classic 2D street fighter with special moves and combos!", category: "Fighting", players: "1-2 players", tags: ["fighting", "street", "combos"], featured: true, rating: 4.8, playCount: 145678, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-51", title: "Punch Arena", slug: "punch-arena", description: "Boxing simulation with realistic physics and stamina management!", category: "Sports", players: "1-2 players", tags: ["boxing", "sports", "fighting"], featured: false, rating: 4.5, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-52", title: "Retro Soccer", slug: "retro-soccer", description: "Classic top-down soccer with power shots and bicycle kicks!", category: "Sports", players: "1-4 players", tags: ["soccer", "sports", "top-down"], featured: false, rating: 4.6, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-53", title: "Slam Dunk X", slug: "slam-dunk-x", description: "Pixel basketball with trick shots, dunks, and overtime drama!", category: "Sports", players: "1-2 players", tags: ["basketball", "sports", "pixel"], featured: false, rating: 4.5, playCount: 76543, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-54", title: "Cyber Sprint", slug: "cyber-sprint", description: "Cyberpunk infinite runner — dodge obstacles and hack barriers at light speed!", category: "Action", players: "1-2 players", tags: ["cyberpunk", "runner", "infinite"], featured: true, rating: 4.8, playCount: 156789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-55", title: "Tower Blitz", slug: "tower-blitz", description: "Defend your tower from waves of enemies with strategic placement!", category: "Puzzle", players: "1-2 players", tags: ["tower-defense", "strategy", "waves"], featured: false, rating: 4.7, playCount: 112345, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-56", title: "Pixel Punch", slug: "pixel-punch", description: "8-bit brawler with 4 characters, special moves, and a final boss!", category: "Fighting", players: "1-2 players", tags: ["brawler", "pixel", "8-bit"], featured: false, rating: 4.6, playCount: 98765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-57", title: "Sky Assault", slug: "sky-assault", description: "Vertical scrolling aerial combat — dogfight enemies and collect stars!", category: "Action", players: "1-2 players", tags: ["aerial", "scrolling", "dogfight"], featured: false, rating: 4.6, playCount: 87654, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-58", title: "Dungeon Crawl", slug: "dungeon-crawl", description: "Roguelike dungeon explorer — fight monsters, find loot, survive!", category: "Action", players: "1 player", tags: ["dungeon", "roguelike", "rpg"], featured: true, rating: 4.9, playCount: 234567, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-59", title: "Neon Racer", slug: "neon-racer", description: "Tron-inspired neon racing through futuristic circuits!", category: "Racing", players: "1-4 players", tags: ["neon", "racing", "tron"], featured: true, rating: 4.8, playCount: 167890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "arc-60", title: "Pixel Warfare", slug: "pixel-warfare", description: "8-bit tactical combat — command pixel troops across battlefield maps!", category: "Action", players: "1-2 players", tags: ["tactical", "pixel", "warfare"], featured: false, rating: 4.5, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
];

const SPECIAL_GAMES = [
  { id: "sp-1", title: "Flappy Storm", slug: "flappy-storm", description: "Tap to flap through neon pipes in this addictive one-button classic!", category: "Arcade Classics", players: "1 player", tags: ["flappy", "one-button", "classic"], featured: true, rating: 4.8, playCount: 312456, releaseYear: 2024, thumbnailUrl: "/covers/flappy-storm.png" },
  { id: "sp-2", title: "Geometry Dash Storm", slug: "geometry-dash-storm", description: "Jump, dodge spikes, and ride orbs through mind-bending neon levels!", category: "Action", players: "1 player", tags: ["geometry", "rhythm", "dash", "auto-run"], featured: true, rating: 4.9, playCount: 287654, releaseYear: 2024, thumbnailUrl: "/covers/geometry-dash-storm.png" },
];

const EDUCATIONAL_GAMES = [
  { id: "edu-math-1", title: "Math Quest", slug: "math-quest", description: "Solve math problems to defeat enemies and level up through magic kingdoms!", category: "Educational", players: "1 player", tags: ["math", "quiz", "educational"], featured: true, rating: 4.7, playCount: 89012, releaseYear: 2024, thumbnailUrl: "/covers/math-quest.png" },
  { id: "edu-math-2", title: "Number Ninja", slug: "number-ninja", description: "Slice the correct answer out of the air with ninja precision! Fast arithmetic action.", category: "Educational", players: "1 player", tags: ["math", "speed", "ninja"], featured: false, rating: 4.5, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-math-3", title: "Fraction Frenzy", slug: "fraction-frenzy", description: "Match equivalent fractions before time runs out in this colorful fraction showdown!", category: "Educational", players: "1-2 players", tags: ["fractions", "math", "matching"], featured: false, rating: 4.4, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-math-4", title: "Algebra Attack", slug: "algebra-attack", description: "Shoot the correct value of X to defeat waves of equation enemies!", category: "Educational", players: "1 player", tags: ["algebra", "math", "shooter"], featured: false, rating: 4.5, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-math-5", title: "Geometry Dash Edu", slug: "algebra-dash", description: "Learn geometry concepts while navigating through shape-based levels!", category: "Educational", players: "1 player", tags: ["geometry", "shapes", "math"], featured: false, rating: 4.6, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-word-1", title: "Word Wizard", slug: "word-wizard", description: "Cast word spells by spelling correctly! Master vocabulary to defeat the word dragon.", category: "Educational", players: "1 player", tags: ["spelling", "vocabulary", "words"], featured: true, rating: 4.8, playCount: 98765, releaseYear: 2024, thumbnailUrl: "/covers/word-wizard.png" },
  { id: "edu-word-2", title: "Spell Storm", slug: "spell-storm", description: "Letters rain from the sky — arrange them into words before the storm hits!", category: "Educational", players: "1-2 players", tags: ["spelling", "storm", "words"], featured: false, rating: 4.5, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-word-3", title: "Vocab Blitz", slug: "vocab-blitz", description: "Speed through vocabulary flashcards — match definitions faster than your opponent!", category: "Educational", players: "1-2 players", tags: ["vocabulary", "blitz", "definitions"], featured: false, rating: 4.4, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-word-4", title: "Grammar Quest", slug: "grammar-quest", description: "Fix grammar errors across enchanted sentences to free the language kingdom!", category: "Educational", players: "1 player", tags: ["grammar", "sentences", "educational"], featured: false, rating: 4.3, playCount: 38765, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-word-5", title: "Reading Rush", slug: "reading-rush", description: "Race through reading comprehension questions in this high-speed literary adventure!", category: "Educational", players: "1 player", tags: ["reading", "comprehension", "educational"], featured: false, rating: 4.5, playCount: 52341, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-sci-1", title: "Science Lab", slug: "science-lab", description: "Mix elements, run experiments, and discover the laws of physics in this virtual lab!", category: "Educational", players: "1 player", tags: ["science", "experiments", "educational"], featured: true, rating: 4.7, playCount: 76543, releaseYear: 2024, thumbnailUrl: "/covers/science-lab.png" },
  { id: "edu-sci-2", title: "Atom Smash", slug: "atom-smash", description: "Collide atoms to create elements — learn the periodic table through high-speed particle physics!", category: "Educational", players: "1-2 players", tags: ["atoms", "chemistry", "physics"], featured: false, rating: 4.6, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-sci-3", title: "Physics Blast", slug: "physics-blast", description: "Solve physics puzzles using real-world forces, momentum, and gravity!", category: "Educational", players: "1 player", tags: ["physics", "puzzles", "forces"], featured: false, rating: 4.5, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-sci-4", title: "Bio Burst", slug: "bio-burst", description: "Navigate through human body systems, defeating viruses and learning biology along the way!", category: "Educational", players: "1 player", tags: ["biology", "body", "health"], featured: false, rating: 4.4, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-sci-5", title: "Chemistry Quest", slug: "chemistry-quest", description: "Balance chemical equations and avoid dangerous reactions in this explosive puzzle game!", category: "Educational", players: "1 player", tags: ["chemistry", "equations", "puzzle"], featured: false, rating: 4.5, playCount: 52341, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-geo-1", title: "Geography Hero", slug: "geography-hero", description: "Race the clock to place countries on the world map — become the ultimate geography champion!", category: "Educational", players: "1-4 players", tags: ["geography", "maps", "countries"], featured: true, rating: 4.7, playCount: 87654, releaseYear: 2024, thumbnailUrl: "/covers/geography-hero.png" },
  { id: "edu-geo-2", title: "Capital Clash", slug: "capital-clash", description: "Match capitals to countries faster than your rivals in this global trivia showdown!", category: "Educational", players: "1-4 players", tags: ["capitals", "countries", "trivia"], featured: false, rating: 4.5, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-geo-3", title: "Map Master", slug: "map-master", description: "Conquer continents by correctly identifying geographic features under time pressure!", category: "Educational", players: "1-2 players", tags: ["maps", "geography", "continents"], featured: false, rating: 4.4, playCount: 56789, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-geo-4", title: "Flag Frenzy", slug: "flag-frenzy", description: "Identify country flags at lightning speed — over 195 flags to master!", category: "Educational", players: "1-4 players", tags: ["flags", "countries", "quiz"], featured: false, rating: 4.6, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-geo-5", title: "World Explorer", slug: "world-explorer", description: "Explore virtual continents, collecting landmarks and geography facts!", category: "Educational", players: "1 player", tags: ["exploration", "world", "landmarks"], featured: false, rating: 4.5, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-hist-1", title: "History Blitz", slug: "history-blitz", description: "Race through history — answer questions about key events to unlock new eras!", category: "Educational", players: "1-2 players", tags: ["history", "trivia", "eras"], featured: true, rating: 4.6, playCount: 76543, releaseYear: 2024, thumbnailUrl: "/covers/history-blitz.png" },
  { id: "edu-hist-2", title: "Timeline Rush", slug: "timeline-rush", description: "Place historical events in chronological order before time runs out!", category: "Educational", players: "1-2 players", tags: ["timeline", "history", "chronology"], featured: false, rating: 4.5, playCount: 65432, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-hist-3", title: "Ancient Quest", slug: "ancient-quest", description: "Explore ancient civilizations — Egypt, Rome, Greece — in this historical adventure!", category: "Educational", players: "1 player", tags: ["ancient", "civilizations", "adventure"], featured: false, rating: 4.7, playCount: 87654, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-hist-4", title: "Revolution X", slug: "revolution-x", description: "Re-live pivotal historical revolutions by answering questions and making key decisions!", category: "Educational", players: "1 player", tags: ["revolution", "history", "decisions"], featured: false, rating: 4.4, playCount: 54321, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-hist-5", title: "Civics Storm", slug: "civics-storm", description: "Master civics and government concepts in this fast-paced civic literacy challenge!", category: "Educational", players: "1-4 players", tags: ["civics", "government", "democracy"], featured: false, rating: 4.3, playCount: 43210, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-code-1", title: "Code Logic", slug: "code-logic", description: "Solve coding puzzles by arranging logic blocks — learn the fundamentals of programming!", category: "Educational", players: "1 player", tags: ["coding", "logic", "programming"], featured: true, rating: 4.9, playCount: 112345, releaseYear: 2024, thumbnailUrl: "/covers/code-logic.png" },
  { id: "edu-code-2", title: "Binary Blast", slug: "binary-blast", description: "Shoot down binary numbers to decode secret messages in this hacker-themed shooter!", category: "Educational", players: "1 player", tags: ["binary", "coding", "shooter"], featured: false, rating: 4.6, playCount: 78901, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-code-3", title: "Algo Quest", slug: "algo-quest", description: "Build algorithms step-by-step to guide your robot through ever-more complex mazes!", category: "Educational", players: "1-2 players", tags: ["algorithms", "robots", "coding"], featured: false, rating: 4.7, playCount: 89012, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-code-4", title: "Debug Dash", slug: "debug-dash", description: "Find and fix bugs in code snippets at breakneck speed — the clock is ticking!", category: "Educational", players: "1 player", tags: ["debugging", "coding", "speed"], featured: false, rating: 4.5, playCount: 67890, releaseYear: 2024, thumbnailUrl: "" },
  { id: "edu-code-5", title: "Loop Storm", slug: "loop-storm", description: "Master loops, conditions, and functions by controlling a storm of code blocks!", category: "Educational", players: "1 player", tags: ["loops", "functions", "coding"], featured: false, rating: 4.6, playCount: 76543, releaseYear: 2024, thumbnailUrl: "" },
];

const ELITE_GAMES = [
  // ===== RACING =====
  { id: "elite-race-1", title: "Neon Circuit Racer", slug: "neon-circuit-racer", description: "Top-down F1 racing with car selection! Choose VIPER, PHANTOM or CRUSHER. 3-lap neon city circuit with 3 AI opponents, speed meter, and live race rank.", category: "Racing", players: "1 player", tags: ["racing", "cars", "neon", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-race-2", title: "Drift King X", slug: "drift-king-x", description: "Master the art of drift! Wide sweeping tracks designed for drifting. Car select with stat bars, drift physics, and glowing tire trails.", category: "Racing", players: "1 player", tags: ["racing", "drift", "cars", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-race-3", title: "Space Racer", slug: "space-racer", description: "Anti-gravity racing through the cosmos. Neon purple space circuit, zero-G handling, 3 selectable ships with unique handling stats.", category: "Racing", players: "1 player", tags: ["racing", "space", "antigravity", "elite"], featured: true, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-race-4", title: "Cyber Highway", slug: "cyber-highway", description: "Infinite neon highway racer. Select your car, dodge AI traffic, hit turbos and race to the highest lap count!", category: "Racing", players: "1 player", tags: ["racing", "highway", "neon", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-race-5", title: "Desert Rally X", slug: "desert-rally", description: "Rally racing through harsh desert terrain. Wide sweeping S-bends, gravel physics, and intense AI rivals on the orange circuit.", category: "Racing", players: "1 player", tags: ["racing", "rally", "desert", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== FIGHTING =====
  { id: "elite-fight-1", title: "Street Storm Fighter", slug: "street-storm-fighter", description: "4 selectable fighters! STORM, BLAZE, FROST or VOLT. Full health bars, special meter, punch/kick/special combos, AI rounds. Best-in-class 2D fighter!", category: "Fighting", players: "1-2 players", tags: ["fighting", "characters", "combos", "elite"], featured: true, rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-fight-2", title: "Neon Kombat", slug: "neon-kombat", description: "Neon-drenched arena combat. Select your warrior, master lightning combos, unleash devastating specials. Brutal 2.5D fighter with round system.", category: "Fighting", players: "1-2 players", tags: ["fighting", "neon", "combos", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-fight-3", title: "Robot Rumble", slug: "robot-rumble", description: "Mech battle arena! Choose your robot warrior, smash with hydraulic fists, deploy EMP specials. Steel-plated combat at its finest.", category: "Fighting", players: "1-2 players", tags: ["fighting", "robots", "mechs", "elite"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-fight-4", title: "Shadow Duel", slug: "shadow-duel", description: "Ninja vs ninja in total darkness. Swift strikes, smoke bomb specials, and lightning-fast combos. The fastest fighter in the arcade.", category: "Fighting", players: "1-2 players", tags: ["fighting", "ninja", "speed", "elite"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-fight-5", title: "Arena Legends", slug: "arena-legends", description: "Gladiatorial arena combat. 4 legendary warriors clash in the colosseum. Epic special moves, crowd roar effects, and championship rounds.", category: "Fighting", players: "1-2 players", tags: ["fighting", "arena", "gladiator", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== SHOOTERS =====
  { id: "elite-shoot-1", title: "Dual Storm", slug: "dual-storm", description: "Elite twin-stick arcade shooter. Auto-aim + WASD movement. Enemy waves escalate every round with new enemy types, power-ups, and shield pickups.", category: "Shooters", players: "1 player", tags: ["shooter", "twin-stick", "waves", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-shoot-2", title: "Horde Rush", slug: "horde-rush", description: "Survive escalating waves of enemies. Dodge, auto-aim and blast everything. Shield pickups, health drops, wave bonuses. How long can you last?", category: "Shooters", players: "1 player", tags: ["shooter", "horde", "survival", "elite"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-shoot-3", title: "Bullet Hell X", slug: "bullet-hell-x", description: "True danmaku bullet hell. Enemy bullet spirals, waves, aimed volleys. Tiny hitbox, upgradeable firepower, and screen-filling boss fights.", category: "Shooters", players: "1 player", tags: ["bullet-hell", "danmaku", "shooter", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-shoot-4", title: "Tank Storm", slug: "tank-storm", description: "Command your tank on the battlefield! Rotate hull, aim turret independently, fire bouncing shells. Destructible walls, smart enemy tanks.", category: "Shooters", players: "1 player", tags: ["tank", "combat", "strategy", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-shoot-5", title: "Star Assault", slug: "star-assault", description: "Wave-based space shooter with twin-stick controls. Alien formations, powered-up enemies and boss waves in deep space.", category: "Shooters", players: "1 player", tags: ["shooter", "space", "waves", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== RHYTHM =====
  { id: "elite-rhythm-1", title: "Rhythm Storm X", slug: "rhythm-storm-x", description: "4-lane neon rhythm game! Hit notes as they fall with A/S/D/F keys. PERFECT/GREAT/GOOD ratings, combo multiplier, and escalating BPM.", category: "Rhythm", players: "1 player", tags: ["rhythm", "music", "timing", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-rhythm-2", title: "Beat Blitz", slug: "beat-blitz", description: "High-tempo beat matching game. Synced note patterns, color-coded lanes, and max-combo chasing for top scores.", category: "Rhythm", players: "1 player", tags: ["rhythm", "beats", "combo", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== PINBALL =====
  { id: "elite-pinball-1", title: "Physics Pinball", slug: "physics-pinball", description: "Full physics pinball! Realistic ball, flippers (A/D), neon bumpers worth 100-300pts each, multiplier system, and satisfying launch mechanism.", category: "Arcade", players: "1 player", tags: ["pinball", "physics", "classic", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== TOWER DEFENSE =====
  { id: "elite-td-1", title: "Tower Defense X", slug: "tower-defense-x", description: "Strategic tower defense with 4 tower types: CANNON, SNIPER, FREEZE, ROCKET. Place with arrow keys, send waves, upgrade as enemies swarm!", category: "Strategy", players: "1 player", tags: ["tower-defense", "strategy", "waves", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-td-2", title: "Neon Fortress", slug: "neon-fortress", description: "Defend your neon base from waves of cyber enemies. Advanced tower placements, freeze effects, and rocket splash damage. No base gets through!", category: "Strategy", players: "1 player", tags: ["tower-defense", "neon", "strategy", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== PLATFORMER =====
  { id: "elite-plat-1", title: "Gravity Flip X", slug: "gravity-flip-x", description: "Mind-bending gravity-flip platformer! Press S to flip gravity. Collect all coins, dodge hazards, and survive moving platforms across infinite levels.", category: "Platformer", players: "1 player", tags: ["platformer", "gravity", "puzzle", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-plat-2", title: "Neon Jumper", slug: "neon-jumper", description: "Precision neon platformer. Ultra-tight jump timing, moving platforms, coin collection, gravity manipulation and escalating level design.", category: "Platformer", players: "1 player", tags: ["platformer", "precision", "neon", "elite"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-plat-3", title: "Cyber Ninja", slug: "cyber-ninja", description: "Fast-paced cyberpunk platformer. Flip gravity to navigate multi-surface levels, collect glowing orbs and dodge energy blade hazards.", category: "Platformer", players: "1 player", tags: ["platformer", "ninja", "cyberpunk", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== SPORTS =====
  { id: "elite-sport-1", title: "Tennis Storm", slug: "tennis-storm", description: "Intense arcade tennis! Control your paddle with W/S, rally to build combos, and outlast the AI. Track your longest rally and total score.", category: "Sports", players: "1-2 players", tags: ["tennis", "sports", "paddle", "elite"], featured: true, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-sport-2", title: "Ice Hockey X", slug: "ice-hockey-x", description: "Full-field ice hockey arcade! Control your player with WASD, hit the puck, score goals. AI goalie adapts to your style. Fast and furious!", category: "Sports", players: "1-2 players", tags: ["hockey", "sports", "ice", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-sport-3", title: "Street Hoops", slug: "street-hoops", description: "Street basketball with real shot physics! Move, aim with arrow keys, charge your shot, release for a perfect arc. 2-pointer or 3-pointer scoring!", category: "Sports", players: "1 player", tags: ["basketball", "sports", "hoops", "elite"], featured: true, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-sport-4", title: "Cyber Soccer", slug: "cyber-soccer", description: "Neon soccer with puck-physics. Knock the ball into the goal, defend with WASD, fast AI challenge and satisfying goal explosions.", category: "Sports", players: "1-2 players", tags: ["soccer", "sports", "neon", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  // ===== STRATEGY / CLASSIC =====
  { id: "elite-strat-1", title: "Battle Ships X", slug: "battle-ships-x", description: "Classic naval strategy reimagined! 8×8 grid, place shots with arrows, hunt enemy ships. CPU uses smart targeting AI to track your fleet down.", category: "Strategy", players: "1 player", tags: ["battleship", "strategy", "naval", "elite"], featured: true, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-strat-2", title: "Maze Escape X", slug: "maze-escape-x", description: "Procedurally generated mazes every run! Navigate the neon labyrinth to the goal flag before time expires. Levels get bigger and harder.", category: "Puzzle", players: "1 player", tags: ["maze", "puzzle", "procedural", "elite"], featured: true, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-strat-3", title: "Neon Maze", slug: "neon-maze", description: "Stunning glowing mazes with a countdown clock. Every maze is unique, generated fresh each run. How many floors can you escape?", category: "Puzzle", players: "1 player", tags: ["maze", "neon", "speed", "elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  { id: "elite-strat-4", title: "Dungeon Run", slug: "dungeon-run", description: "Race through procedural dungeons. Twist, turn, collect score gems and escape each level before the clock runs out in this neon maze adventure.", category: "Puzzle", players: "1 player", tags: ["dungeon", "maze", "adventure", "elite"], featured: false, rating: 4.6, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
];

const PLAYERS_SEED = [
  { id: "player-1", name: "PixelMaster", avatar: "👾", level: 25, totalScore: 1250000, gamesPlayed: 342, wins: 187 },
  { id: "player-2", name: "NeonKing", avatar: "🏆", level: 22, totalScore: 987654, gamesPlayed: 287, wins: 156 },
  { id: "player-3", name: "ArcadeLegend", avatar: "⚡", level: 19, totalScore: 765432, gamesPlayed: 234, wins: 123 },
  { id: "player-4", name: "RetroQueen", avatar: "🌟", level: 17, totalScore: 654321, gamesPlayed: 198, wins: 99 },
  { id: "player-5", name: "GlitchHunter", avatar: "🎮", level: 15, totalScore: 543210, gamesPlayed: 167, wins: 87 },
];

const LEADERBOARD_SEED = [
  { id: "lb-1", playerName: "PixelMaster", playerAvatar: "👾", gameId: "mario-1", gameTitle: "Super Skillz Bros", score: 287650, rank: 1 },
  { id: "lb-2", playerName: "NeonKing", playerAvatar: "🏆", gameId: "arc-1", gameTitle: "Space Invaders X", score: 245890, rank: 1 },
  { id: "lb-3", playerName: "ArcadeLegend", playerAvatar: "⚡", gameId: "mario-2", gameTitle: "Kart Storm", score: 198765, rank: 1 },
  { id: "lb-4", playerName: "RetroQueen", playerAvatar: "🌟", gameId: "arc-6", gameTitle: "Tetris Storm", score: 176543, rank: 1 },
  { id: "lb-5", playerName: "GlitchHunter", playerAvatar: "🎮", gameId: "arc-4", gameTitle: "Galaga Storm", score: 154321, rank: 1 },
  { id: "lb-6", playerName: "PixelMaster", playerAvatar: "👾", gameId: "arc-2", gameTitle: "Pac Maze", score: 143210, rank: 1 },
  { id: "lb-7", playerName: "NeonKing", playerAvatar: "🏆", gameId: "mario-3", gameTitle: "Mushroom Dash", score: 132100, rank: 1 },
  { id: "lb-8", playerName: "ArcadeLegend", playerAvatar: "⚡", gameId: "arc-58", gameTitle: "Dungeon Crawl", score: 121000, rank: 1 },
  { id: "lb-9", playerName: "RetroQueen", playerAvatar: "🌟", gameId: "sp-1", gameTitle: "Flappy Storm", score: 98765, rank: 1 },
  { id: "lb-10", playerName: "GlitchHunter", playerAvatar: "🎮", gameId: "sp-2", gameTitle: "Geometry Dash Storm", score: 187654, rank: 1 },
  { id: "lb-11", playerName: "PixelMaster", playerAvatar: "👾", gameId: "edu-code-1", gameTitle: "Code Logic", score: 145678, rank: 1 },
];

export async function seedIfEmpty() {
  const [{ count: gameCount }] = await db
    .select({ count: count() })
    .from(gamesTable);

  if (Number(gameCount) === 0) {
    const allGames = [...MARIO_GAMES, ...ARCADE_GAMES];
    await db.insert(gamesTable).values(allGames).onConflictDoNothing();
    await db.insert(playersTable).values(PLAYERS_SEED).onConflictDoNothing();
    await db.insert(leaderboardsTable).values(LEADERBOARD_SEED).onConflictDoNothing();
  }

  await db.insert(gamesTable).values([...SPECIAL_GAMES, ...EDUCATIONAL_GAMES]).onConflictDoNothing();
  await db.insert(gamesTable).values(ELITE_GAMES).onConflictDoNothing();
  // New flagship games: Dungeon Crawler RPG + Chess
  const FLAGSHIP_GAMES = [
    { id: "flagship-1", title: "Dungeon Crawler", slug: "dungeon-crawler", description: "Full top-down RPG! Choose sword, bow, or staff. Fight goblins, orcs, mages and bosses across procedurally generated dungeon floors. Level up, collect loot, upgrade stats.", category: "RPG", players: "1 player", tags: ["rpg", "dungeon", "elite", "weapons", "boss"], featured: true, rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "flagship-2", title: "Dungeon Storm", slug: "dungeon-storm", description: "Elite dungeon RPG with sword/bow/staff combat, enemy AI, loot system, and 10+ procedural floors. Boss encounters scale with your level!", category: "RPG", players: "1 player", tags: ["rpg", "dungeon", "elite", "boss"], featured: false, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "flagship-3", title: "Neon Dungeon", slug: "neon-dungeon", description: "Neon-lit dungeon crawler RPG. Explore dark corridors, slay enemies, collect items, and descend through increasingly deadly floors.", category: "RPG", players: "1 player", tags: ["rpg", "neon", "dungeon", "elite"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "flagship-4", title: "Neon Chess", slug: "neon-chess", description: "Full chess with AI opponent using minimax algorithm! Glowing neon pieces, animated moves, legal move highlighting, check detection, and capture tracking.", category: "Strategy", players: "1 player", tags: ["chess", "strategy", "elite", "ai", "classic"], featured: true, rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "flagship-5", title: "Chess Storm", slug: "chess-storm", description: "Elite neon chess with full AI, animated piece movement, captured piece tracking, and check/checkmate detection. Use arrow keys to navigate.", category: "Strategy", players: "1 player", tags: ["chess", "strategy", "ai"], featured: false, rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "flagship-6", title: "Crypt Runner", slug: "crypt-runner", description: "Fast-paced dungeon RPG. Sprint through crypts, collect power-ups, defeat undead enemies. Weapon selection: blade, crossbow, or arcane staff.", category: "RPG", players: "1 player", tags: ["rpg", "fast", "dungeon", "weapons"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  ];
  await db.insert(gamesTable).values(FLAGSHIP_GAMES).onConflictDoNothing();

  // ====== 40 SIGNATURE GAMES: 20 Educational + 20 Addictive Fun ======
  const SIGNATURE_GAMES = [
    // ── 20 EDUCATIONAL GAMES ──────────────────────────────────────────
    { id: "edu-1",  title: "Typing Storm",        slug: "typing-storm",      description: "Words rain from the sky — type them before they hit the ground! 100 levels, 4 word tiers from 3-letter basics to expert 10-letter vocabulary. Track WPM and chain combos.", category: "Educational", players: "1 player", tags: ["typing","educational","speed","combo","100-levels"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-2",  title: "Speed Typer",          slug: "speed-typer",       description: "Push your typing speed to the limit! Words fall faster every level. Reach 100 WPM to unlock expert tier. Compete for the highest combo streak!", category: "Educational", players: "1 player", tags: ["typing","educational","speed","wpm"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-3",  title: "Word Blitz",           slug: "word-blitz",        description: "Lightning-fast typing challenge! Multiple words fall simultaneously at higher levels. Miss three and it's game over. 100 levels of escalating madness.", category: "Educational", players: "1 player", tags: ["typing","blitz","educational","100-levels"], featured: false, rating: 4.6, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-4",  title: "Math Storm",           slug: "math-storm",        description: "Battle monsters with math! Answer equations to deal damage — get it wrong and take a hit. 100 levels from simple addition to advanced algebra. Level up your wizard!", category: "Educational", players: "1 player", tags: ["math","rpg","educational","100-levels","battle"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-5",  title: "Number Battle",        slug: "number-battle",     description: "Epic RPG math battles. Face increasingly powerful enemies across 100 levels. Correct answers power up your attacks — combos multiply damage!", category: "Educational", players: "1 player", tags: ["math","battle","educational","rpg"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-6",  title: "Times Table Titan",    slug: "times-table-titan", description: "Master multiplication through epic monster battles. 100 progressive levels targeting specific multiplication tables. Become a calculation titan!", category: "Educational", players: "1 player", tags: ["math","multiplication","educational","battle"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-7",  title: "Math Elite",           slug: "math-elite",        description: "Elite math battles: algebra, fractions, powers, and complex equations. 100 levels of the hardest math challenges. Only true geniuses reach the top!", category: "Educational", players: "1 player", tags: ["math","elite","algebra","educational","hard"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-8",  title: "Fraction Fighter",     slug: "fraction-fighter",  description: "Fractions, decimals, and percentages — master them all in battle! 100 levels progressing from simple halves to complex mixed fractions.", category: "Educational", players: "1 player", tags: ["math","fractions","educational","battle"], featured: false, rating: 4.6, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-9",  title: "Geography Quest",      slug: "geography-quest",   description: "Explore the world through trivia! Countries, capitals, oceans, continents. 100 quiz levels with timed pressure and enemy battles. Become a Geography master!", category: "Educational", players: "1 player", tags: ["geography","quiz","educational","100-levels"], featured: true,  rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-10", title: "World Explorer",       slug: "world-explorer",    description: "Battle map monsters with geographic knowledge! Rivers, mountains, flags, capitals. 100 levels of global adventure.", category: "Educational", players: "1 player", tags: ["geography","world","educational","quiz"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-11", title: "Science Quest",        slug: "science-quest",     description: "Physics, chemistry, biology, astronomy — tackle them all! 100 science quiz levels against themed enemies. Unlock knowledge badges!", category: "Educational", players: "1 player", tags: ["science","quiz","educational","100-levels"], featured: true,  rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-12", title: "History Blast",        slug: "history-blast",     description: "Time-travel through history to battle historical quiz enemies! Ancient civilizations to modern era. 100 levels across all of human history.", category: "Educational", players: "1 player", tags: ["history","quiz","educational","time-travel"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-13", title: "Vocab Blast",          slug: "vocab-blast",       description: "Master SAT-level vocabulary through epic battles. Definitions, synonyms, antonyms — fight your way through 100 levels of word mastery!", category: "Educational", players: "1 player", tags: ["vocabulary","quiz","educational","words"], featured: false, rating: 4.6, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-14", title: "Brain Blitz",          slug: "brain-blitz",       description: "The ultimate mixed trivia battle game! Geography, science, history, math, vocabulary — all combined. 100 progressive levels testing every subject!", category: "Educational", players: "1 player", tags: ["trivia","quiz","educational","mixed","100-levels"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-15", title: "Code Quest",           slug: "code-quest",        description: "Learn coding concepts through quiz battles! Variables, loops, arrays, algorithms. 100 levels introducing real programming knowledge.", category: "Educational", players: "1 player", tags: ["coding","programming","quiz","educational"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-16", title: "Memory Matrix",        slug: "memory-matrix",     description: "The ultimate visual memory challenge! Watch the pattern light up, then reproduce it perfectly. 100 levels with increasing grid complexity and faster sequences.", category: "Educational", players: "1 player", tags: ["memory","pattern","educational","100-levels"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-17", title: "Pattern Storm",        slug: "pattern-storm",     description: "Elite memory training. Patterns flash faster and grow longer each level. Can you keep up to level 100? Tests and trains working memory!", category: "Educational", players: "1 player", tags: ["memory","pattern","brain","educational"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-18", title: "Word Scramble X",      slug: "word-scramble-x",   description: "Unscramble words before the timer runs out! 100 levels from 3-letter basics to 9-letter expert challenges. Use hints wisely — you only get 3 lives!", category: "Educational", players: "1 player", tags: ["spelling","vocabulary","scramble","educational","100-levels"], featured: true,  rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-19", title: "Anagram Storm",        slug: "anagram-storm",     description: "Rearrange scrambled letters at lightning speed! Longer words, harder scrambles, faster timers. 100 levels of neon word-unscrambling action.", category: "Educational", players: "1 player", tags: ["anagram","spelling","educational","words"], featured: false, rating: 4.6, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "edu-20", title: "Spelling Quest",       slug: "spelling-quest",    description: "Unscramble words across every difficulty tier. English, science terms, geography words. Reach level 100 to become a Spelling Master!", category: "Educational", players: "1 player", tags: ["spelling","scramble","educational","quest"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    // ── 20 ADDICTIVE FUN GAMES ────────────────────────────────────────
    { id: "fun-1",  title: "Snake Neon",           slug: "snake-neon",        description: "The legendary snake — reimagined in blazing neon! 100 levels: level 5 adds deadly walls, level 10 splits the maze, level 20 adds multi-apples. How long can your snake grow?", category: "Arcade", players: "1 player", tags: ["snake","arcade","neon","100-levels","classic"], featured: true,  rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-2",  title: "Python Pro",           slug: "python-pro",        description: "Advanced Snake with maze walls and speed challenges from level 1. Tight corridors, multiple targets. Only the best players reach level 100!", category: "Arcade", players: "1 player", tags: ["snake","pro","arcade","neon","hard"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-3",  title: "Neon Viper",           slug: "neon-viper",        description: "Elite snake experience with psychedelic neon trails and insane level-100 speed. The snake that eats everything in its path — except itself!", category: "Arcade", players: "1 player", tags: ["snake","viper","neon","arcade","elite"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-4",  title: "Neon Breakout",        slug: "neon-breakout",     description: "Classic brick-breaking with NEON power! 100 levels of escalating brick layouts — moving bricks (level 12), metal bricks (level 20). Grab power-ups: wide paddle, multi-ball, slow ball!", category: "Arcade", players: "1 player", tags: ["breakout","arcade","neon","100-levels","powerups"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-5",  title: "Brick Crusher",        slug: "brick-crusher",     description: "Smash through 100 levels of brick formations. Collect power-ups, avoid indestructible blocks, use multi-ball to chain massive combos!", category: "Arcade", players: "1 player", tags: ["breakout","crusher","arcade","neon","combo"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-6",  title: "Arkanoid X",           slug: "arkanoid-x",        description: "The ultimate breakout experience. 100 neon brick levels with randomized layouts, cascading power-ups, and boss brick formations!", category: "Arcade", players: "1 player", tags: ["breakout","arkanoid","arcade","neon","100-levels"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-7",  title: "Space Raiders",        slug: "space-raiders",     description: "100 waves of alien invasion! Aliens get faster, smarter, and more numerous. Shoot the UFO for massive bonuses. Use your bunkers wisely — they erode under fire!", category: "Arcade", players: "1 player", tags: ["space-invaders","arcade","100-waves","ufo","aliens"], featured: true,  rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-8",  title: "Galaxy Storm",         slug: "galaxy-storm",      description: "Elite alien invasion game! Formation patterns grow complex after wave 20. Alien AI becomes unpredictable by wave 50. The ultimate Space Invaders challenge!", category: "Arcade", players: "1 player", tags: ["space-invaders","galaxy","arcade","100-waves"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-9",  title: "Alien Blitz",          slug: "alien-blitz",       description: "Relentless alien assault — faster waves, more bullets, stronger formations. Survive 100 waves against the ultimate extraterrestrial army!", category: "Arcade", players: "1 player", tags: ["space-invaders","blitz","arcade","aliens","hard"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-10", title: "Tetris Neon",          slug: "tetris-neon",       description: "The iconic block game — electrified with neon! 100 speed levels, ghost piece preview, next piece panel. Chain TETRIS clears for massive points. Reach level 100!", category: "Arcade", players: "1 player", tags: ["tetris","arcade","neon","100-levels","classic"], featured: true,  rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-11", title: "Block Storm",          slug: "block-storm",       description: "Tetris at storm speed! Lines cascade at impossible rates by level 50. Ghost pieces and hard drop mastery required. Reach the top of the leaderboard!", category: "Arcade", players: "1 player", tags: ["tetris","blocks","arcade","speed","hard"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-12", title: "Stack Attack",         slug: "stack-attack",      description: "Stack attack: fill lines at neon speed. 100 levels of escalating Tetris madness. Combos, T-spins, and blazing animations!", category: "Arcade", players: "1 player", tags: ["tetris","stack","arcade","neon","combo"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-13", title: "Neon Jump",            slug: "neon-jump",         description: "100 hand-crafted platformer levels! Dodge spikes, bounce on springs, slide on ice, and navigate lava floors. Double jump, coin collect, and race to the flag!", category: "Platformer", players: "1 player", tags: ["platformer","jump","neon","100-levels","coins"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-14", title: "Platform Storm",       slug: "platform-storm",    description: "Procedurally generated platformer stages with increasing complexity. Moving platforms, ice, lava, springs. 100 levels of extreme platforming!", category: "Platformer", players: "1 player", tags: ["platformer","storm","neon","100-levels","procedural"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-15", title: "Sky Runner",           slug: "sky-runner",        description: "Sprint through the sky! Ultra-fast neon platforms, wall-jump mechanics, and brutal spike gauntlets. 100 levels from beginner to absolute nightmare!", category: "Platformer", players: "1 player", tags: ["platformer","runner","sky","neon","speed"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-16", title: "Asteroid Storm",       slug: "asteroid-storm",    description: "100 waves of incoming asteroids! Your ship rotates and thrusts in true zero-gravity. Shoot rocks before they hit you. Bigger rocks split into smaller deadly fragments!", category: "Arcade", players: "1 player", tags: ["asteroids","arcade","100-waves","space","zero-gravity"], featured: true,  rating: 4.9, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-17", title: "Space Rock",           slug: "space-rock",        description: "Asteroid survival in deep space! Navigate through 100 waves of flying rocks. Collect shields, unleash rapid-fire, survive the asteroid apocalypse!", category: "Arcade", players: "1 player", tags: ["asteroids","space","arcade","survival","100-waves"], featured: false, rating: 4.7, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-18", title: "Cosmic Blast",         slug: "cosmic-blast",      description: "Elite asteroid combat! Rock formations get denser and faster. UFOs appear for big bonuses. Reach wave 100 to become a Cosmic Legend!", category: "Arcade", players: "1 player", tags: ["asteroids","cosmic","arcade","elite","ufo"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-19", title: "Grid Master",          slug: "grid-master",       description: "Master the Tetris grid! Lightning-fast block placement, neon cascades, and chain clear combos. 100 levels — only real strategists survive level 75+!", category: "Arcade", players: "1 player", tags: ["tetris","grid","arcade","strategy","100-levels"], featured: false, rating: 4.8, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
    { id: "fun-20", title: "Neon Viper XL",        slug: "neon-viper-xl",     description: "The definitive snake experience — 100 levels, maze obstacles, multi-apple mode, hyper speed. The last snake game you'll ever need to play.", category: "Arcade", players: "1 player", tags: ["snake","xl","neon","arcade","100-levels","elite"], featured: true,  rating: 5.0, playCount: 0, releaseYear: 2025, thumbnailUrl: "" },
  ];
  await db.insert(gamesTable).values(SIGNATURE_GAMES).onConflictDoNothing();

  await db.insert(playersTable).values(PLAYERS_SEED).onConflictDoNothing();
  await db.insert(leaderboardsTable).values(LEADERBOARD_SEED).onConflictDoNothing();
}

```

---

