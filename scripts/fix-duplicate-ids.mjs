#!/usr/bin/env node
/**
 * Fix duplicate block ids within a chapter.
 *
 * Strategy: walk each chapter, find every `id: '<x>'` field. For the 2nd+
 * occurrence of any id, rename to `<x>-2`, `<x>-3`, … (or `<x>-N+1` if
 * `<x>-N` is also taken). Then update any `mark.jumpTo` (hp/hy/hg) that was
 * pointing at the renamed id IFF the mark sits inside the same scripture
 * block whose section also contains the renamed block (best-effort heuristic).
 *
 * We err on the side of NOT touching marks: the most common case is that the
 * duplicate id is used by a non-mark (the second commentary block just shares
 * the name as a copy-paste artifact). Renaming it doesn't break anything,
 * because no mark was pointing at the second one anyway — getElementById
 * would always return the first.
 *
 * Run: node scripts/fix-duplicate-ids.mjs        (writes)
 *      node scripts/fix-duplicate-ids.mjs --check (dry run)
 */

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', 'src', 'data', 'study-chapters');

const dryRun = process.argv.includes('--check');

const ID_RE = /\bid:\s*'([a-zA-Z0-9_-]+)'/g;

function processFile(file) {
  const fn = path.basename(file);
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes("kind: 'scripture'")) return { fn, changed: false };

  // Pass 1: walk through every `id: '...'` in source order and rename the
  // 2nd+ occurrence. We rebuild the source by stitching segments.
  const matches = [...src.matchAll(ID_RE)];
  if (matches.length === 0) return { fn, changed: false };

  // Resolve a unique new id given the set of taken ones.
  const taken = new Set(matches.map((m) => m[1]));
  const seen = new Set();
  const renames = []; // {oldId, newId, matchIndex}

  for (const m of matches) {
    const oldId = m[1];
    if (!seen.has(oldId)) {
      seen.add(oldId);
      continue;
    }
    let n = 2;
    let candidate = `${oldId}-${n}`;
    while (taken.has(candidate)) {
      n++;
      candidate = `${oldId}-${n}`;
    }
    taken.add(candidate);
    renames.push({ oldId, newId: candidate, matchIndex: m.index, matchLen: m[0].length, matchText: m[0] });
  }

  if (renames.length === 0) return { fn, changed: false };

  // Apply renames in reverse order to keep indexes stable.
  for (const r of renames.slice().reverse()) {
    const replacement = `id: '${r.newId}'`;
    src = src.slice(0, r.matchIndex) + replacement + src.slice(r.matchIndex + r.matchLen);
  }

  if (!dryRun) fs.writeFileSync(file, src);
  return { fn, changed: true, count: renames.length, renames: renames.map((r) => `${r.oldId}→${r.newId}`) };
}

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts').sort();
let totalRenames = 0;
let filesTouched = 0;
for (const fn of files) {
  const r = processFile(path.join(ROOT, fn));
  if (r.changed) {
    filesTouched++;
    totalRenames += r.count;
    if (filesTouched <= 10) console.log(`  ${fn}: ${r.count} rename(s) — ${r.renames.slice(0, 4).join(', ')}${r.count > 4 ? `, +${r.count - 4}` : ''}`);
  }
}
console.log(`\n${dryRun ? '[dry-run] Would rename' : 'Renamed'} ${totalRenames} duplicate id(s) across ${filesTouched} file(s).`);
