/**
 * canonicalRef.test.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Driven by docs/scripture-ref-test-vectors.json. Every client (Swift,
 * Kotlin, TypeScript) parses these to the same fields and formats them
 * back to the same strings — that's what makes the format an
 * interchange contract instead of a per-platform suggestion.
 *
 * Run via `npm test`. node:test runs the assertions; tsx loads the TS
 * source directly so we don't need a build step.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  type CanonicalRef,
  canonical,
  isRange,
  isWholeChapter,
  makeRef,
  parseRef,
} from './canonicalRef';

const HERE = dirname(fileURLToPath(import.meta.url));
const VECTORS_PATH = join(HERE, '..', '..', 'docs', 'scripture-ref-test-vectors.json');

interface ValidVector {
  input: string;
  book: string;
  chapter: number;
  verseStart: number | null;
  verseEnd: number | null;
  isWholeChapter: boolean;
  isRange: boolean;
  format: string;
}

interface RoundTripVector {
  fields: { book: string; chapter: number; verseStart: number | null; verseEnd: number | null };
  expected: string;
}

interface Vectors {
  valid: ValidVector[];
  invalid: string[];
  format_round_trip: RoundTripVector[];
}

const vectors = JSON.parse(readFileSync(VECTORS_PATH, 'utf-8')) as Vectors;

describe('canonicalRef — valid vectors parse and format', () => {
  for (const v of vectors.valid) {
    it(v.input, () => {
      const ref = parseRef(v.input);
      assert.ok(ref, `expected to parse "${v.input}"`);
      assert.equal(ref!.book, v.book);
      assert.equal(ref!.chapter, v.chapter);
      assert.equal(ref!.verseStart, v.verseStart);
      assert.equal(ref!.verseEnd, v.verseEnd);
      assert.equal(isWholeChapter(ref!), v.isWholeChapter);
      assert.equal(isRange(ref!), v.isRange);
      assert.equal(canonical(ref!), v.format);
    });
  }
});

describe('canonicalRef — invalid vectors rejected', () => {
  for (const input of vectors.invalid) {
    it(input.length === 0 ? '<empty>' : `rejects "${input}"`, () => {
      assert.equal(parseRef(input), null);
    });
  }
});

describe('canonicalRef — field round trip', () => {
  for (const rt of vectors.format_round_trip) {
    it(`${rt.fields.book}.${rt.fields.chapter} → ${rt.expected}`, () => {
      const ref = makeRef(
        rt.fields.book,
        rt.fields.chapter,
        rt.fields.verseStart,
        rt.fields.verseEnd,
      );
      assert.equal(canonical(ref), rt.expected);
      const reparsed = parseRef(canonical(ref));
      assert.ok(reparsed);
      assertRefsEqual(reparsed!, ref);
    });
  }
});

describe('canonicalRef — JSON single-value round trip', () => {
  it('serializes through canonical() and reparses identically', () => {
    const original = makeRef('1-corinthians', 13, 4, 7);
    const json = JSON.stringify(canonical(original));
    assert.equal(json, '"1-corinthians.13.4-7"');
    const parsed = parseRef(JSON.parse(json));
    assert.ok(parsed);
    assertRefsEqual(parsed!, original);
  });
});

function assertRefsEqual(a: CanonicalRef, b: CanonicalRef): void {
  assert.equal(a.book, b.book);
  assert.equal(a.chapter, b.chapter);
  assert.equal(a.verseStart, b.verseStart);
  assert.equal(a.verseEnd, b.verseEnd);
}
