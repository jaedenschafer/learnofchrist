#!/usr/bin/env node
/**
 * validate-rich-chapters.mjs
 *
 * Static validator for hand-authored RichChapterContent files in
 * src/data/study-chapters/<book>-<chapter>.ts.
 *
 * Catches the classes of error that have been most expensive in
 * batch-writing runs:
 *
 *   1. Syntax errors (unescaped apostrophes, broken brace structure) —
 *      we shell out to `tsc --noEmit` for the file in question.
 *   2. Mark anchors that don't resolve — every `hp(text, jumpTo)`,
 *      `hy(...)`, `hg(...)` must point at an `id` defined elsewhere in
 *      the same chapter file.
 *   3. Missing required slots — every chapter MUST have at least one of
 *      each: scripture block, commentary block, Hebrew/Greek callout,
 *      Christ Connection, Carry block, Reflection prompt, bottom share
 *      card.
 *
 * Usage:
 *   node scripts/validate-rich-chapters.mjs                # all chapters
 *   node scripts/validate-rich-chapters.mjs genesis-4      # one file
 *   node scripts/validate-rich-chapters.mjs genesis-4 genesis-5
 *
 * Exit code: non-zero if any chapter has any error. CI-safe.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { execSync } from 'node:child_process';

const PROJECT_ROOT = resolve(import.meta.dirname, '..');
const CHAPTERS_DIR = resolve(PROJECT_ROOT, 'src/data/study-chapters');

// ─── CLI ─────────────────────────────────────────────────────────────────

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const SKIP_TSC = process.argv.includes('--no-tsc');

function listChapterFiles() {
  return readdirSync(CHAPTERS_DIR)
    .filter((f) => /^[a-z0-9-]+-\d+\.ts$/.test(f))
    .sort();
}

const targets = args.length > 0
  ? args.map((a) => (a.endsWith('.ts') ? a : `${a}.ts`))
  : listChapterFiles();

// ─── Per-file checks ─────────────────────────────────────────────────────

let totalErrors = 0;

for (const file of targets) {
  const filePath = resolve(CHAPTERS_DIR, file);
  if (!existsSync(filePath)) {
    console.error(`[${file}] ERROR — file does not exist`);
    totalErrors++;
    continue;
  }

  const errors = validateFile(filePath);
  if (errors.length === 0) {
    console.log(`[${file}] ✓`);
  } else {
    totalErrors += errors.length;
    for (const err of errors) {
      console.error(`[${file}] ${err}`);
    }
  }
}

// ─── Optional batch tsc check (catches all syntax errors at once) ────────

if (!SKIP_TSC) {
  try {
    execSync(
      `npx tsc --noEmit -p tsconfig.json --pretty false`,
      { cwd: PROJECT_ROOT, stdio: 'pipe', encoding: 'utf8' },
    );
  } catch (e) {
    const out = (e.stdout || '') + (e.stderr || '');
    const lines = out.split('\n').filter((l) => l.includes('src/data/study-chapters/'));
    if (lines.length > 0) {
      console.error('\n--- TypeScript errors ---');
      for (const line of lines) console.error(line);
      totalErrors += lines.length;
    }
  }
}

console.log(`\n${totalErrors === 0 ? 'PASS' : 'FAIL'} — ${targets.length} file(s) checked, ${totalErrors} error(s)`);
process.exit(totalErrors === 0 ? 0 : 1);

// ─── Validators ──────────────────────────────────────────────────────────

function validateFile(filePath) {
  const src = readFileSync(filePath, 'utf8');
  const errors = [];

  // 1. Apostrophe sanity. Every `'<word>'<letter>` inside a string is
  //    suspect. We can't fully parse JS, so we use a heuristic: scan for
  //    `'\w` patterns followed by another `'` on the same line and see if
  //    the line looks like a string literal. False positives possible — if
  //    so, the tsc pass below catches the real error.
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    // Skip comment lines.
    if (/^\s*\/\//.test(line) || /^\s*\*/.test(line)) return;
    // Look for: opening single quote, then content, then a bare apostrophe
    // followed by a letter (a contraction or possessive), then more
    // content, then a closing quote.
    // Pattern: '...word's...'
    const m = line.match(/'[^'\n]*[A-Za-z]'[a-zA-Z][^'\n]*'/);
    if (m) {
      // Check that this isn't a properly escaped apostrophe
      const hit = m[0];
      if (!hit.includes("\\'") && !hit.includes('&apos;')) {
        errors.push(`line ${i + 1}: possible unescaped apostrophe in single-quoted string: ${truncate(hit, 80)}`);
      }
    }
  });

  // 2. Anchor resolution: every mark.jumpTo must match an id somewhere.
  const ids = new Set();
  for (const m of src.matchAll(/\bid:\s*'([^']+)'/g)) ids.add(m[1]);

  const jumpTargets = [];
  for (const m of src.matchAll(/\bh[pyg]\(\s*'[^']*'\s*,\s*'([^']+)'\s*\)/g)) {
    jumpTargets.push(m[1]);
  }
  const missing = jumpTargets.filter((t) => !ids.has(t));
  for (const t of missing) {
    errors.push(`mark.jumpTo '${t}' has no matching commentary id`);
  }

  // 2b. Resource integrity. Every `hr(text, id)` and every `[res:id]`
  //     placeholder must reference an id in `resources[]`. Every entry in
  //     `resources[]` must be referenced at least once (no orphans).
  const resourceIds = new Set();
  // Heuristic: match `id: 'foo'` lines that appear inside a `resources:` array.
  // We slice from `resources:` to the next top-level closing bracket.
  const resourcesMatch = src.match(/\bresources:\s*\[([\s\S]*?)\n\s{2}\]/);
  if (resourcesMatch) {
    const resBlock = resourcesMatch[1];
    for (const m of resBlock.matchAll(/\bid:\s*'([^']+)'/g)) resourceIds.add(m[1]);
  }

  // Collect all references to resources.
  const resourceRefs = new Set();
  for (const m of src.matchAll(/\bhr\(\s*'[^']*'\s*,\s*'([^']+)'\s*\)/g)) {
    resourceRefs.add(m[1]);
  }
  for (const m of src.matchAll(/\[res:([a-z0-9-]+)\]/gi)) {
    resourceRefs.add(m[1]);
  }

  // Broken refs.
  for (const ref of resourceRefs) {
    if (!resourceIds.has(ref)) {
      errors.push(`resource ref '[res:${ref}]' or hr('${ref}') has no matching resources[].id`);
    }
  }
  // Orphan resources.
  for (const id of resourceIds) {
    if (!resourceRefs.has(id)) {
      errors.push(`resource '${id}' is in resources[] but never referenced inline (orphan)`);
    }
  }

  // 3. Required slots: at least one of each must be present.
  const required = [
    { name: 'scripture block', re: /\bkind:\s*'scripture'/ },
    { name: 'commentary block', re: /\bkind:\s*'commentary'/ },
    { name: 'Hebrew or Greek callout', re: /\bkind:\s*'(hebrew|greek)'/ },
    { name: 'Christ Connection', re: /\bkind:\s*'christ'/ },
    { name: 'Carry block', re: /\bkind:\s*'carry'/ },
    { name: 'Reflection prompt', re: /\bkind:\s*'reflection'/ },
    { name: 'bottomShare', re: /\bbottomShare:\s*\{/ },
    { name: 'intros array', re: /\bintros:\s*\[/ },
    { name: 'sections array', re: /\bsections:\s*\[/ },
  ];
  for (const r of required) {
    if (!r.re.test(src)) {
      errors.push(`missing required: ${r.name}`);
    }
  }

  // 4. Forbidden vocabulary (per docs/study-guide-authoring-rules.md).
  const forbidden = [
    { word: 'Trinity', pattern: /\bthe\s+Trinity\b/i },
    { word: 'Mormon', pattern: /\bmormon\b/i },
    { word: 'Latter-day Saint', pattern: /\blatter[\-\s]?day\s+saint/i },
    { word: 'Protestant tradition', pattern: /\bprotestant\b/i },
    { word: 'Catholic tradition', pattern: /\bcatholic tradition\b/i },
    { word: 'rich tapestry', pattern: /\brich tapestry\b/i },
    { word: 'deep dive', pattern: /\bdeep dive\b/i },
    { word: 'journey of faith', pattern: /\bjourney of faith\b/i },
  ];
  for (const f of forbidden) {
    if (f.pattern.test(src)) {
      errors.push(`forbidden term '${f.word}' appears in chapter — see study-guide-authoring-rules.md`);
    }
  }

  return errors;
}

function truncate(s, n) {
  return s.length <= n ? s : s.slice(0, n) + '…';
}
