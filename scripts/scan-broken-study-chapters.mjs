#!/usr/bin/env node
/**
 * Scan every study-chapter URL for non-200 responses.
 *
 * Reads the study-chapters registry on disk, derives /study/<book>/<n>
 * URLs, and pings each one against prod. Reports any that 4xx or 5xx
 * to JSONL on stdout.
 *
 * Usage:
 *   node scripts/scan-broken-study-chapters.mjs
 *   node scripts/scan-broken-study-chapters.mjs --limit 50
 */
import fs from 'node:fs';
import path from 'node:path';

const limitIdx = process.argv.indexOf('--limit');
const LIMIT = limitIdx >= 0 ? parseInt(process.argv[limitIdx + 1], 10) : Infinity;
const offsetIdx = process.argv.indexOf('--offset');
const OFFSET = offsetIdx >= 0 ? parseInt(process.argv[offsetIdx + 1], 10) : 0;

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, 'src/data/study-chapters/index.ts');

const txt = fs.readFileSync(REGISTRY, 'utf8');
// Match lines like: 'exodus/40': EXODUS_40,
const slugs = [...txt.matchAll(/'([a-z0-9-]+)\/(\d+)'\s*:/g)].map((m) => ({
  book: m[1],
  ch: parseInt(m[2], 10),
}));

console.error(`registry has ${slugs.length} chapters; checking…`);

async function check(book, ch) {
  const url = `https://learnofchrist.com/study/${book}/${ch}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 10000);
  try {
    const r = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: ac.signal,
      headers: { 'User-Agent': 'learnofchrist study-page-scan' },
    });
    try { r.body?.cancel?.(); } catch {}
    return r.status;
  } catch (e) {
    return e.name === 'AbortError' ? 'TIMEOUT' : `ERR ${e.message || e.code}`;
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const work = slugs.slice(OFFSET, OFFSET + (LIMIT < Infinity ? LIMIT : slugs.length));
  const CONCURRENCY = 6;
  let cursor = 0;
  let scanned = 0;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= work.length) return;
      const { book, ch } = work[i];
      const status = await check(book, ch);
      scanned++;
      if (scanned % 100 === 0) {
        console.error(`  scanned ${scanned}/${work.length}`);
      }
      if (status !== 200) {
        process.stdout.write(JSON.stringify({ book, ch, status }) + '\n');
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.error(`done. scanned ${scanned}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
