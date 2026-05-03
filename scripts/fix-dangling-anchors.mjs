#!/usr/bin/env node
/**
 * Fix dangling highlight anchors.
 *
 * A "dangling anchor" is a `hp(text, jumpTo)` / `hy(...)` / `hg(...)` call
 * whose `jumpTo` id doesn't exist as an `id` on any block in the same
 * chapter file. Clicking the highlight at runtime scrolls to nothing.
 *
 * Repair: demote the call to a plain `t(text)` span. We keep the visible
 * text exactly the same; we just remove the no-op highlight + click handler.
 * The renderer's filterContentByLevel does this same demotion at render time
 * for filtered tiers, but at the Deep level the broken anchor still ships.
 * This makes the data canonical.
 *
 * Run: node scripts/fix-dangling-anchors.mjs        (writes)
 *      node scripts/fix-dangling-anchors.mjs --check (dry run)
 */

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', 'src', 'data', 'study-chapters');

const dryRun = process.argv.includes('--check');

const ID_RE = /\bid:\s*'([a-zA-Z0-9_-]+)'/g;
// Capture the whole call so we can rewrite to t(...) — preserves the inner text.
const MARK_RE = /\bh([pyg])\(\s*('(?:\\'|[^'])*'|"(?:\\"|[^"])*")\s*,\s*'([a-zA-Z0-9_-]+)'\s*\)/g;

function processFile(file) {
  const fn = path.basename(file);
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes("kind: 'scripture'")) return { fn, changed: false };

  const declaredIds = new Set([...src.matchAll(ID_RE)].map((m) => m[1]));
  let demoted = 0;
  const seenAnchors = new Set();

  src = src.replace(MARK_RE, (whole, _tone, textLiteral, target) => {
    if (declaredIds.has(target)) return whole;
    seenAnchors.add(target);
    demoted++;
    return `t(${textLiteral})`;
  });

  if (demoted === 0) return { fn, changed: false };
  if (!dryRun) fs.writeFileSync(file, src);
  return { fn, changed: true, demoted, anchors: [...seenAnchors] };
}

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts').sort();
let totalDemoted = 0;
let filesTouched = 0;
for (const fn of files) {
  const r = processFile(path.join(ROOT, fn));
  if (r.changed) {
    filesTouched++;
    totalDemoted += r.demoted;
    if (filesTouched <= 10) console.log(`  ${fn}: ${r.demoted} demoted (${r.anchors.slice(0, 3).join(', ')}${r.anchors.length > 3 ? `, +${r.anchors.length - 3}` : ''})`);
  }
}
console.log(`\n${dryRun ? '[dry-run] Would demote' : 'Demoted'} ${totalDemoted} dangling mark(s) across ${filesTouched} file(s).`);
