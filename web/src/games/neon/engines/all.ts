import type { NeonEngineFactory } from '../types';
import { drawStarfield, drawVignette, fillNeonBg } from './canvasFx';
import { hueFromSlug, neonAccent, slug01, slugSeed } from './slugTheme';

const CYAN = '#00ffcc';
const MAG = '#ff00ff';
const AMBER = '#ffcc00';

function font(ctx: CanvasRenderingContext2D, size: number) {
  ctx.font = `${size}px "Press Start 2P", ui-monospace, monospace`;
}

function aliveCount(enemies: { alive: boolean }[]) {
  return enemies.filter((e) => e.alive).length;
}

export const createPlaceholderEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let t = 0;
  let over = false;
  const hue = hueFromSlug(meta.slug);
  const [accent, accent2] = neonAccent(meta.slug);
  return {
    init(width, height) {
      w = width;
      h = height;
    },
    update(dt, keys, prev) {
      t += dt;
      if (keys.has('Escape') && !prev.has('Escape')) over = true;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, t, slugSeed(meta.slug));
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(4, 4, w - 8, h - 8);
      font(ctx, Math.max(10, w / 42));
      ctx.fillStyle = accent2;
      ctx.textAlign = 'center';
      ctx.shadowColor = accent;
      ctx.shadowBlur = 14;
      ctx.fillText(meta.title.slice(0, 28), w / 2, h / 2 - 20);
      ctx.shadowBlur = 0;
      font(ctx, Math.max(8, w / 52));
      ctx.fillStyle = '#aab8cc';
      ctx.fillText('TAP SPACE — NEON ARCADE', w / 2, h / 2 + 20);
      ctx.fillText('ESC TO FINISH', w / 2, h / 2 + 44);
      drawVignette(ctx, w, h);
    },
    getScore: () => Math.floor(t * 10),
    isGameOver: () => over,
  };
};

export const createSnakeEngine: NeonEngineFactory = (meta) => {
  const gs = 18;
  let w = 400;
  let h = 300;
  let snake: { x: number; y: number }[] = [{ x: 5, y: 5 }];
  let dir = { x: 1, y: 0 };
  let food = { x: 8, y: 5 };
  let acc = 0;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const step = 0.1 + slug01(meta.slug, 2) * 0.05;
  const [snakeC, headC, foodC] = neonAccent(meta.slug);

  function spawnFood() {
    const gw = Math.max(1, Math.floor(w / gs) - 1);
    const gh = Math.max(1, Math.floor(h / gs) - 1);
    let attempts = 0;
    do {
      food = {
        x: 1 + Math.floor(Math.random() * gw),
        y: 1 + Math.floor(Math.random() * gh),
      };
      attempts++;
    } while (snake.some((s) => s.x === food.x && s.y === food.y) && attempts < 120);
  }

  function loseLife() {
    lives -= 1;
    if (lives <= 0) {
      over = true;
      return;
    }
    const gw = Math.floor(w / gs) - 1;
    const gh = Math.floor(h / gs) - 1;
    snake = [{ x: Math.max(1, Math.floor(gw / 2)), y: Math.max(1, Math.floor(gh / 2)) }];
    dir = { x: 1, y: 0 };
    spawnFood();
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      snake = [{ x: 4, y: 4 }];
      dir = { x: 1, y: 0 };
      spawnFood();
      over = false;
      score = 0;
      lives = 3;
      time = 0;
    },
    update(dt, keys, _prev) {
      if (over) return;
      time += dt;
      if (keys.has('ArrowUp') && dir.y === 0) dir = { x: 0, y: -1 };
      else if (keys.has('ArrowDown') && dir.y === 0) dir = { x: 0, y: 1 };
      else if (keys.has('ArrowLeft') && dir.x === 0) dir = { x: -1, y: 0 };
      else if (keys.has('ArrowRight') && dir.x === 0) dir = { x: 1, y: 0 };
      acc += dt;
      while (acc >= step && !over) {
        acc -= step;
        const head = snake[0];
        const nh = { x: head.x + dir.x, y: head.y + dir.y };
        const gw = Math.floor(w / gs) - 1;
        const gh = Math.floor(h / gs) - 1;
        if (nh.x < 0 || nh.y < 0 || nh.x > gw || nh.y > gh) {
          loseLife();
          break;
        }
        if (snake.some((s) => s.x === nh.x && s.y === nh.y)) {
          loseLife();
          break;
        }
        snake.unshift(nh);
        if (nh.x === food.x && nh.y === food.y) {
          score += 10;
          spawnFood();
        } else snake.pop();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      ctx.fillStyle = snakeC;
      ctx.shadowColor = snakeC;
      ctx.shadowBlur = 6;
      snake.forEach((s, i) => {
        ctx.fillRect(s.x * gs + 2, s.y * gs + 2, gs - 4, gs - 4);
        if (i === 0) {
          ctx.fillStyle = headC;
          ctx.fillRect(s.x * gs + 4, s.y * gs + 4, gs - 8, gs - 8);
          ctx.fillStyle = snakeC;
        }
      });
      ctx.shadowBlur = 0;
      ctx.fillStyle = foodC;
      ctx.fillRect(food.x * gs + 2, food.y * gs + 2, gs - 4, gs - 4);
      font(ctx, 10);
      ctx.fillStyle = '#aabbcc';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createBreakoutEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let px = 0;
  let bx = 0;
  let by = 0;
  let bvx = 120;
  let bvy = -140;
  let bricks: boolean[] = [];
  let cols = 8;
  let rows = 4;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function resetBall() {
    bx = w / 2;
    by = h - 60;
    bvx = (Math.random() > 0.5 ? 1 : -1) * 140;
    bvy = -160;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      px = width / 2 - 50;
      bricks = Array(cols * rows).fill(true);
      resetBall();
      over = false;
      score = 0;
      lives = 3;
      time = 0;
    },
    update(dt, keys) {
      if (over) return;
      time += dt;
      const spd = 260;
      if (keys.has('ArrowLeft')) px -= spd * dt;
      if (keys.has('ArrowRight')) px += spd * dt;
      px = Math.max(20, Math.min(w - 120, px));
      bx += bvx * dt;
      by += bvy * dt;
      if (bx < 8 || bx > w - 8) bvx *= -1;
      if (by < 8) bvy *= -1;
      if (by > h - 4) {
        lives -= 1;
        if (lives <= 0) over = true;
        else resetBall();
      }
      const pw = 100;
      if (by > h - 48 && by < h - 38 && bx > px && bx < px + pw) {
        bvy = -Math.abs(bvy);
        score += 2;
      }
      const bw = (w - 24) / cols;
      const bh = 16;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          if (!bricks[i]) continue;
          const bx0 = 12 + c * bw;
          const by0 = 40 + r * bh;
          if (bx > bx0 && bx < bx0 + bw - 4 && by > by0 && by < by0 + bh) {
            bricks[i] = false;
            bvy *= -1;
            score += 15;
          }
        }
      }
      if (!bricks.some(Boolean)) {
        score += 500;
        bricks = Array(cols * rows).fill(true);
        resetBall();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const bw = (w - 24) / cols;
      const bh = 16;
      const baseHue = hueFromSlug(meta.slug + '-brick');
      bricks.forEach((on, i) => {
        if (!on) return;
        const c = i % cols;
        const r = (i / cols) | 0;
        ctx.fillStyle = `hsl(${(baseHue + (c + r * 3) * 14) % 360}, 88%, 56%)`;
        ctx.fillRect(12 + c * bw, 40 + r * bh, bw - 4, bh - 2);
      });
      ctx.fillStyle = CYAN;
      ctx.fillRect(px, h - 44, 100, 10);
      ctx.beginPath();
      ctx.arc(bx, by, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}`, 8, 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createTetrisEngine: NeonEngineFactory = (meta) => {
  let w = 300;
  let h = 400;
  const cols = 8;
  const rows = 12;
  let grid: (string | null)[][] = [];
  let over = false;
  let score = 0;
  let fall = 0;
  let piece = { x: 3, y: 0, c: CYAN };
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function newPiece() {
    piece = { x: 3, y: 0, c: [CYAN, MAG, AMBER, '#0ff'][Math.floor(Math.random() * 4)] };
    if (grid[0].some((c) => c)) over = true;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      grid = Array.from({ length: rows }, () => Array(cols).fill(null));
      over = false;
      score = 0;
      fall = 0;
      time = 0;
      newPiece();
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      if (keys.has('ArrowLeft') && !prev.has('ArrowLeft')) piece.x = Math.max(0, piece.x - 1);
      if (keys.has('ArrowRight') && !prev.has('ArrowRight')) piece.x = Math.min(cols - 1, piece.x + 1);
      if (keys.has('ArrowDown')) fall += dt * 3;
      fall += dt;
      const step = 0.52;
      while (fall >= step && !over) {
        fall -= step;
        if (piece.y + 1 >= rows || grid[piece.y + 1][piece.x]) {
          grid[piece.y][piece.x] = piece.c;
          for (let r = rows - 1; r >= 0; r--) {
            if (grid[r].every((c) => c)) {
              grid.splice(r, 1);
              grid.unshift(Array(cols).fill(null));
              score += 100;
            }
          }
          newPiece();
        } else piece.y++;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const cw = Math.min(w / (cols + 1), 28);
      const ch = cw;
      const ox = (w - cols * cw) / 2;
      const oy = 36;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const g = grid[r][c];
          if (g) {
            ctx.fillStyle = g;
            ctx.fillRect(ox + c * cw, oy + r * ch, cw - 2, ch - 2);
          }
        }
      }
      ctx.fillStyle = piece.c;
      ctx.fillRect(ox + piece.x * cw, oy + piece.y * ch, cw - 2, ch - 2);
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}`, 8, 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createSpaceEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let px = 0;
  let bullets: { x: number; y: number }[] = [];
  let enemies: { x: number; y: number; alive: boolean }[] = [];
  let over = false;
  let score = 0;
  let fireCd = 0;
  let horizDir = 1;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      px = width / 2;
      bullets = [];
      enemies = [];
      horizDir = 1;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
          enemies.push({ x: 40 + c * 44, y: 50 + r * 28, alive: true });
        }
      }
      over = false;
      score = 0;
      lives = 3;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      const spd = 200;
      if (keys.has('ArrowLeft')) px -= spd * dt;
      if (keys.has('ArrowRight')) px += spd * dt;
      px = Math.max(30, Math.min(w - 30, px));
      fireCd -= dt;
      if (keys.has(' ') && !prev.has(' ') && fireCd <= 0) {
        bullets.push({ x: px, y: h - 50 });
        fireCd = 0.25;
      }
      bullets.forEach((b) => {
        b.y -= 360 * dt;
      });
      bullets = bullets.filter((b) => b.y > 0);
      const step = 55 * horizDir * dt;
      enemies.forEach((e) => {
        if (!e.alive) return;
        e.x += step;
      });
      let out = false;
      enemies.forEach((e) => {
        if (!e.alive) return;
        if (e.x > w - 28 || e.x < 28) out = true;
      });
      if (aliveCount(enemies) > 0 && out) {
        horizDir *= -1;
        enemies.forEach((e) => {
          if (!e.alive) return;
          e.x -= step;
          e.y += 16;
        });
      }
      bullets.forEach((b) => {
        enemies.forEach((e) => {
          if (!e.alive) return;
          if (Math.hypot(b.x - e.x, b.y - e.y) < 22) {
            e.alive = false;
            b.y = -9;
            score += 25;
          }
        });
      });
      enemies.forEach((e) => {
        if (e.alive && e.y > h - 80) {
          e.alive = false;
          lives -= 1;
          score = Math.max(0, score - 15);
          if (lives <= 0) over = true;
        }
      });
      if (!enemies.some((e) => e.alive)) {
        score += 200;
        enemies = [];
        horizDir = 1;
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 7; c++) {
            enemies.push({ x: 40 + c * 44, y: 50 + r * 28, alive: true });
          }
        }
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 1.2, slugSeed(meta.slug));
      enemies.forEach((e) => {
        if (!e.alive) return;
        ctx.fillStyle = MAG;
        ctx.fillRect(e.x - 16, e.y - 10, 32, 20);
      });
      ctx.fillStyle = CYAN;
      ctx.fillRect(px - 22, h - 42, 44, 16);
      bullets.forEach((b) => {
        ctx.fillStyle = AMBER;
        ctx.fillRect(b.x - 2, b.y, 4, 12);
      });
      font(ctx, 10);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}`, 8, 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

const WORDS = ['SKILL', 'STORM', 'MATH', 'READ', 'LEARN', 'PLAY', 'QUIZ', 'CODE', 'STAR'];

export const createTypingEngine: NeonEngineFactory = (meta) => {
  const pool = WORDS;
  let word = pool[0];
  let idx = 0;
  let w = 400;
  let h = 300;
  let y = 80;
  const speed = 42 + slug01(meta.slug, 9) * 18;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const [tw, glow] = neonAccent(meta.slug);

  function nextWord() {
    const pick = pool[(slugSeed(meta.slug) + score) % pool.length];
    word = pool[Math.floor(Math.random() * pool.length)] || pick;
    idx = 0;
    y = 48 + (slugSeed(meta.slug + word) % 24);
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      nextWord();
      over = false;
      score = 0;
      lives = 3;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      y += speed * dt;
      const expect = word[idx]?.toUpperCase();
      if (expect && keys.has(expect) && !prev.has(expect)) {
        idx++;
        score += 5;
        if (idx >= word.length) {
          score += 40;
          nextWord();
        }
      }
      if (y > h - 50) {
        lives -= 1;
        if (lives <= 0) over = true;
        else nextWord();
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 13);
      ctx.fillStyle = tw;
      ctx.textAlign = 'center';
      ctx.shadowColor = glow;
      ctx.shadowBlur = 10;
      ctx.fillText(word, w / 2, y);
      ctx.shadowBlur = 0;
      font(ctx, 9);
      ctx.fillStyle = '#8899aa';
      ctx.fillText(`TYPED ${idx}/${word.length}  ♥${lives}`, w / 2, h - 36);
      ctx.fillText(`SCORE ${score}`, w / 2, h - 18);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createMathEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let a = 3;
  let b = 5;
  let ans = 8;
  let choices: number[] = [];
  let over = false;
  let score = 0;
  let t = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const limit = 18 + Math.floor(slug01(meta.slug, 11) * 8);

  function gen() {
    a = 2 + Math.floor(Math.random() * 10);
    b = 2 + Math.floor(Math.random() * 10);
    ans = a + b;
    const set = new Set([ans]);
    while (set.size < 4) set.add(ans + Math.floor(Math.random() * 7) - 3);
    choices = [...set].sort(() => Math.random() - 0.5);
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      gen();
      over = false;
      score = 0;
      t = 0;
      lives = 3;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      t += dt;
      if (t > limit) {
        lives -= 1;
        t = 0;
        gen();
        if (lives <= 0) over = true;
      }
      ;[1, 2, 3, 4].forEach((n) => {
        const k = String(n);
        if (keys.has(k) && !prev.has(k)) {
          if (choices[n - 1] === ans) {
            score += 50;
            gen();
            t = 0;
          } else {
            lives -= 1;
            if (lives <= 0) over = true;
          }
        }
      });
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      font(ctx, 12);
      ctx.fillStyle = CYAN;
      ctx.textAlign = 'center';
      ctx.fillText(`${a} + ${b} = ?`, w / 2, h / 2 - 30);
      font(ctx, 10);
      choices.forEach((c, i) => {
        ctx.fillStyle = AMBER;
        ctx.fillText(`${i + 1}) ${c}`, w / 2, h / 2 + i * 18);
      });
      font(ctx, 8);
      ctx.fillStyle = '#778899';
      ctx.fillText(`KEYS 1-4  ♥${lives}  ${Math.max(0, limit - t).toFixed(1)}s  SCORE ${score}`, w / 2, h - 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createQuizEngine: NeonEngineFactory = (meta) => {
  const qs = [
    { q: '2 + 2 = ?', a: 0, o: ['4', '3', '5', '22'] },
    { q: 'Capital of France?', a: 0, o: ['Paris', 'London', 'Berlin', 'Madrid'] },
    { q: 'H2O is?', a: 0, o: ['Water', 'Salt', 'Oxygen', 'Gold'] },
  ];
  let wi = 0;
  let w = 400;
  let h = 300;
  let over = false;
  let score = 0;
  let lives = 3;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      wi = 0;
      over = false;
      score = 0;
      lives = 3;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt;
      ;[1, 2, 3, 4].forEach((n) => {
        const k = String(n);
        if (keys.has(k) && !prev.has(k)) {
          const q = qs[wi];
          if (n - 1 === q.a) {
            score += 100;
            wi++;
            if (wi >= qs.length) wi = 0;
          } else {
            lives -= 1;
            if (lives <= 0) over = true;
          }
        }
      });
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug));
      const q = qs[wi];
      font(ctx, 9);
      ctx.fillStyle = CYAN;
      ctx.textAlign = 'center';
      ctx.fillText(q.q, w / 2, h / 2 - 40);
      q.o.forEach((t, i) => {
        ctx.fillStyle = '#ddeeff';
        ctx.fillText(`${i + 1}) ${t}`, w / 2, h / 2 - 8 + i * 20);
      });
      ctx.fillStyle = '#778899';
      font(ctx, 8);
      ctx.fillText(`SCORE ${score}  ♥${lives}`, w / 2, h - 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createMemoryEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  const pairs = 6;
  let cards: { id: number; flip: boolean; done: boolean }[] = [];
  let first: number | null = null;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);
  const [c1, c2] = neonAccent(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      const ids = [...Array(pairs).keys(), ...Array(pairs).keys()].sort(() => Math.random() - 0.5);
      cards = ids.map((id) => ({ id, flip: false, done: false }));
      first = null;
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt;
      for (let i = 0; i < 12; i++) {
        const k = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY'][i];
        if (keys.has(k) && !prev.has(k)) {
          if (cards[i].done) continue;
          cards[i].flip = true;
          if (first === null) first = i;
          else {
            if (cards[first].id === cards[i].id && first !== i) {
              cards[first].done = cards[i].done = true;
              score += 80;
              if (cards.every((c) => c.done)) score += 500;
            } else {
              cards[first].flip = cards[i].flip = false;
            }
            first = null;
          }
        }
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.6, slugSeed(meta.slug));
      const cols = 4;
      const cell = Math.min(w / 5, 56);
      const ox = (w - cols * cell) / 2;
      const oy = 50;
      cards.forEach((c, i) => {
        const r = (i / cols) | 0;
        const col = i % cols;
        const x = ox + col * cell;
        const y = oy + r * (cell * 0.85);
        ctx.fillStyle = c.done ? '#1a3322' : c.flip ? c2 : '#223344';
        ctx.fillRect(x, y, cell - 6, cell - 10);
        if (c.flip || c.done) {
          font(ctx, 12);
          ctx.fillStyle = c1;
          ctx.textAlign = 'center';
          ctx.fillText(String(c.id), x + cell / 2 - 3, y + cell / 2);
        }
      });
      font(ctx, 8);
      ctx.fillStyle = '#8899aa';
      ctx.textAlign = 'center';
      ctx.fillText(`1-6 Q-Y keys  SCORE ${score}`, w / 2, h - 12);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => cards.length > 0 && cards.every((c) => c.done),
  };
};

export const createScrambleEngine: NeonEngineFactory = (meta) => {
  const pool = ['LEARN', 'STORM', 'BRAIN', 'MATH', 'READ'];
  let word = 'LEARN';
  let scrambled = 'NRAEL';
  let buf = '';
  let w = 400;
  let h = 300;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  function pick() {
    word = pool[Math.floor(Math.random() * pool.length)];
    scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    buf = '';
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      pick();
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((L) => {
        if (keys.has(L) && !prev.has(L)) {
          buf += L;
          if (buf.length > 8) buf = buf.slice(-8);
          if (buf.endsWith(word)) {
            score += 120;
            pick();
          }
        }
      });
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time, slugSeed(meta.slug + 'scr'));
      font(ctx, 11);
      ctx.fillStyle = AMBER;
      ctx.textAlign = 'center';
      ctx.fillText(scrambled, w / 2, h / 2 - 20);
      font(ctx, 9);
      ctx.fillStyle = CYAN;
      ctx.fillText(`UNSCRAMBLE → ${word.length} LETTERS`, w / 2, h / 2 + 16);
      ctx.fillStyle = '#aab';
      ctx.fillText(buf.slice(-12), w / 2, h / 2 + 44);
      ctx.fillText(`SCORE ${score}`, w / 2, h - 20);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createAsteroidsEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let x = 0;
  let y = 0;
  let ang = 0;
  let vx = 0;
  let vy = 0;
  let rocks: { x: number; y: number; s: number }[] = [];
  let shots: { x: number; y: number; a: number }[] = [];
  let over = false;
  let score = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      x = w / 2;
      y = h / 2;
      ang = 0;
      vx = vy = 0;
      rocks = Array.from({ length: 6 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 18 + Math.random() * 20,
      }));
      over = false;
      score = 0;
      lives = 3;
      invuln = 2;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      invuln = Math.max(0, invuln - dt);
      if (keys.has('ArrowLeft')) ang -= 2.5 * dt;
      if (keys.has('ArrowRight')) ang += 2.5 * dt;
      if (keys.has('ArrowUp')) {
        vx += Math.cos(ang - Math.PI / 2) * 180 * dt;
        vy += Math.sin(ang - Math.PI / 2) * 180 * dt;
      }
      vx *= 0.99;
      vy *= 0.99;
      x += vx * dt;
      y += vy * dt;
      x = (x + w) % w;
      y = (y + h) % h;
      if (keys.has(' ') && !prev.has(' ')) {
        shots.push({ x, y, a: ang });
      }
      shots.forEach((s) => {
        s.x += Math.cos(s.a - Math.PI / 2) * 400 * dt;
        s.y += Math.sin(s.a - Math.PI / 2) * 400 * dt;
      });
      shots = shots.filter((s) => s.x > 0 && s.x < w && s.y > 0 && s.y < h);
      rocks.forEach((r) => {
        shots.forEach((s) => {
          if (Math.hypot(s.x - r.x, s.y - r.y) < r.s / 2) {
            r.s = 0;
            score += 40;
          }
        });
      });
      rocks = rocks.filter((r) => r.s > 4);
      rocks.forEach((r) => {
        if (Math.hypot(x - r.x, y - r.y) < r.s / 2 + 8 && invuln <= 0) {
          lives -= 1;
          invuln = 2.2;
          vx = vy = 0;
          x = w / 2;
          y = h / 2;
          if (lives <= 0) over = true;
        }
      });
      if (rocks.length === 0) {
        rocks = Array.from({ length: 8 }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          s: 20 + Math.random() * 24,
        }));
        score += 300;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.4, slugSeed(meta.slug));
      rocks.forEach((r) => {
        if (r.s <= 0) return;
        ctx.strokeStyle = CYAN;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.s / 2, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.save();
      ctx.globalAlpha = invuln > 0 ? 0.4 + 0.5 * Math.sin(time * 20) : 1;
      ctx.translate(x, y);
      ctx.rotate(ang);
      ctx.strokeStyle = AMBER;
      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(-8, 10);
      ctx.lineTo(8, 10);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      ctx.globalAlpha = 1;
      shots.forEach((s) => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(s.x, s.y, 3, 3);
      });
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE ${score}  ♥${lives}  ARROWS+SPACE`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createFlappyEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let y = 150;
  let vy = 0;
  let x = 0;
  let pipes: { x: number; gap: number }[] = [];
  let over = false;
  let score = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug);

  return {
    init(width, height) {
      w = width;
      h = height;
      y = h / 2;
      vy = 0;
      x = 0;
      pipes = [
        { x: w * 0.6, gap: 120 + Math.random() * 40 },
        { x: w * 0.6 + 200, gap: 110 + Math.random() * 50 },
      ];
      over = false;
      score = 0;
      lives = 3;
      invuln = 1.2;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      invuln = Math.max(0, invuln - dt);
      vy += 520 * dt;
      if (keys.has(' ') && !prev.has(' ')) vy = -240;
      y += vy * dt;
      x += 90 * dt;
      pipes.forEach((p) => {
        p.x -= 130 * dt;
        if (p.x < -40) {
          p.x = w + 40;
          p.gap = 100 + Math.random() * 80;
          score += 1;
        }
      });
      const px = 80;
      pipes.forEach((p) => {
        const gh = p.gap;
        const gy = h / 2 + (p.gap % 80) - 40;
        const hit =
          Math.abs(p.x - px) < 20 && (y < gy - gh / 2 || y > gy + gh / 2);
        if (hit && invuln <= 0) {
          lives -= 1;
          invuln = 1.4;
          y = h / 2;
          vy = 0;
          if (lives <= 0) over = true;
        }
      });
      if ((y > h - 20 || y < 0) && invuln <= 0) {
        lives -= 1;
        invuln = 1.4;
        y = h / 2;
        vy = 0;
        if (lives <= 0) over = true;
      }
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.8, slugSeed(meta.slug));
      pipes.forEach((p) => {
        const gy = h / 2 + (p.gap % 80) - 40;
        const gh = p.gap;
        ctx.fillStyle = MAG;
        ctx.fillRect(p.x, 0, 24, gy - gh / 2);
        ctx.fillRect(p.x, gy + gh / 2, 24, h);
      });
      ctx.globalAlpha = invuln > 0 ? 0.45 + 0.45 * Math.sin(time * 18) : 1;
      ctx.fillStyle = CYAN;
      ctx.fillRect(68, y - 8, 24, 16);
      ctx.globalAlpha = 1;
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE  SCORE ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createGeometryEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let py = 0;
  let vy = 0;
  let obs: { x: number; h: number }[] = [];
  let over = false;
  let score = 0;
  let lives = 3;
  let invuln = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-geo');

  return {
    init(width, height) {
      w = width;
      h = height;
      py = h * 0.55;
      vy = 0;
      obs = [
        { x: w * 0.85, h: 50 },
        { x: w * 0.85 + 220, h: 70 },
      ];
      over = false;
      score = 0;
      lives = 3;
      invuln = 1;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      invuln = Math.max(0, invuln - dt);
      vy += 900 * dt;
      if (keys.has(' ') && !prev.has(' ')) vy = -420;
      py += vy * dt;
      obs.forEach((o) => (o.x -= 200 * dt));
      obs.forEach((o) => {
        if (o.x < -30) {
          o.x = w + 80 + Math.random() * 60;
          o.h = 40 + Math.random() * 70;
          score += 5;
        }
        const ground = h - 50;
        const gapTop = ground - o.h;
        const crush = o.x > 60 && o.x < 100 && (py < gapTop - 20 || py > ground - 18);
        if (crush && invuln <= 0) {
          lives -= 1;
          invuln = 1.2;
          py = h * 0.45;
          vy = 0;
          if (lives <= 0) over = true;
        }
      });
      if (py > h - 40 && invuln <= 0) {
        lives -= 1;
        invuln = 1.2;
        py = h * 0.5;
        vy = 0;
        if (lives <= 0) over = true;
      }
      if (py < 0) py = 0;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.5, slugSeed(meta.slug));
      ctx.strokeStyle = '#223344';
      ctx.beginPath();
      ctx.moveTo(0, h - 40);
      ctx.lineTo(w, h - 40);
      ctx.stroke();
      obs.forEach((o) => {
        ctx.fillStyle = AMBER;
        ctx.fillRect(o.x, 0, 22, o.h);
        ctx.fillRect(o.x, h - 40, 22, 40);
      });
      ctx.globalAlpha = invuln > 0 ? 0.5 + 0.45 * Math.sin(time * 16) : 1;
      ctx.fillStyle = CYAN;
      ctx.fillRect(56, py - 10, 28, 20);
      ctx.globalAlpha = 1;
      font(ctx, 9);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE JUMP  ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createMazeEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  const cols = 11;
  const rows = 9;
  let grid: number[][] = [];
  let px = 1;
  let py = 1;
  let over = false;
  let score = 0;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-maze');

  function gen() {
    grid = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (r % 2 === 0 || c % 2 === 0 ? 1 : 0))
    );
    grid[rows - 2][cols - 2] = 2;
  }

  return {
    init(width, height) {
      w = width;
      h = height;
      gen();
      px = 1;
      py = 1;
      over = false;
      score = 0;
      time = 0;
    },
    update(_dt, keys, prev) {
      if (over) return;
      time += _dt;
      const tryMove = (dx: number, dy: number) => {
        const nx = px + dx;
        const ny = py + dy;
        if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) return;
        if (grid[ny][nx] === 1) return;
        px = nx;
        py = ny;
        if (grid[ny][nx] === 2) {
          score += 500;
          over = true;
        }
      };
      if (keys.has('ArrowUp') && !prev.has('ArrowUp')) tryMove(0, -1);
      if (keys.has('ArrowDown') && !prev.has('ArrowDown')) tryMove(0, 1);
      if (keys.has('ArrowLeft') && !prev.has('ArrowLeft')) tryMove(-1, 0);
      if (keys.has('ArrowRight') && !prev.has('ArrowRight')) tryMove(1, 0);
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.3, slugSeed(meta.slug));
      const cw = Math.min(w / (cols + 2), h / (rows + 3));
      const ox = (w - cols * cw) / 2;
      const oy = 36;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const g = grid[r][c];
          if (g === 1) {
            ctx.fillStyle = '#334455';
            ctx.fillRect(ox + c * cw, oy + r * cw, cw - 1, cw - 1);
          }
          if (g === 2) {
            ctx.fillStyle = MAG;
            ctx.fillRect(ox + c * cw, oy + r * cw, cw - 1, cw - 1);
          }
        }
      }
      ctx.fillStyle = CYAN;
      ctx.fillRect(ox + px * cw + 2, oy + py * cw + 2, cw - 5, cw - 5);
      font(ctx, 8);
      ctx.fillStyle = '#aab';
      ctx.fillText('ARROWS TO EXIT', 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};

export const createTdEngine: NeonEngineFactory = (meta) => {
  let w = 400;
  let h = 300;
  let enemies: { x: number; lane: number }[] = [];
  let turrets = [80, 200, 320];
  let cd = 0;
  let over = false;
  let score = 0;
  let lives = 12;
  let time = 0;
  const hue = hueFromSlug(meta.slug + '-td');

  return {
    init(width, height) {
      w = width;
      h = height;
      enemies = [];
      cd = 0;
      over = false;
      score = 0;
      lives = 12;
      time = 0;
    },
    update(dt, keys, prev) {
      if (over) return;
      time += dt;
      cd -= dt;
      if (Math.random() < 0.45 * dt) enemies.push({ x: w + 20, lane: Math.floor(Math.random() * 3) });
      enemies.forEach((e) => (e.x -= 70 * dt));
      enemies = enemies.filter((e) => e.x > -20);
      if (keys.has(' ') && !prev.has(' ') && cd <= 0) {
        const targets = enemies.filter((e) => e.x < w * 0.5);
        if (targets.length) {
          targets.sort((a, b) => a.x - b.x);
          enemies = enemies.filter((e) => e !== targets[0]);
          score += 30;
        }
        cd = 0.2;
      }
      const kept: typeof enemies = [];
      for (const e of enemies) {
        const tx = turrets[e.lane];
        if (e.x < tx + 20 && e.x > tx - 20) {
          lives -= 1;
          if (lives <= 0) over = true;
        } else kept.push(e);
      }
      enemies = kept;
    },
    draw(ctx, width, height) {
      w = width;
      h = height;
      fillNeonBg(ctx, w, h, hue);
      drawStarfield(ctx, w, h, time * 0.7, slugSeed(meta.slug));
      turrets.forEach((tx) => {
        ctx.fillStyle = CYAN;
        ctx.fillRect(tx - 15, h - 50, 30, 24);
      });
      enemies.forEach((e) => {
        const y = 80 + e.lane * 60;
        ctx.fillStyle = MAG;
        ctx.fillRect(e.x, y, 22, 18);
      });
      font(ctx, 8);
      ctx.fillStyle = '#aab';
      ctx.fillText(`SPACE FIRE  SCORE ${score}  ♥${lives}`, 8, 16);
      drawVignette(ctx, w, h);
    },
    getScore: () => score,
    isGameOver: () => over,
  };
};
