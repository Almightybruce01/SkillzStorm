/**
 * One-shot: parse cursor-guide/SKILLZSTORM_COMPLETE.md seed arrays into JSON.
 * Run: node scripts/extract-seed-from-complete-md.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', '..', 'cursor-guide', 'SKILLZSTORM_COMPLETE.md');
const md = fs.readFileSync(root, 'utf8');

const lines = md.split('\n');
const gameLines = lines.filter((l) => /^\s*\{ id:/.test(l));

const rows = [];
for (const line of gameLines) {
  let s = line.trim();
  if (s.endsWith(',')) s = s.slice(0, -1);
  try {
    const obj = new Function(`return ${s}`)();
    if (obj.slug && obj.title) rows.push(obj);
  } catch {
    console.warn('skip line', line.slice(0, 80));
  }
}

// Dedupe by slug (keep first)
const seen = new Set();
const unique = [];
for (const r of rows) {
  if (seen.has(r.slug)) continue;
  seen.add(r.slug);
  unique.push(r);
}

const out = path.join(__dirname, '..', 'src', 'engine', 'completeSeed.raw.json');
fs.writeFileSync(out, JSON.stringify(unique, null, 2));
console.log('Wrote', unique.length, 'games to', out);
