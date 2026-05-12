/**
 * filter.test.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Driven by docs/rich-content-filter-test-vectors.json. The same vectors
 * drive `ios/LearnOfChristTests/RichContentFilterTests.swift`. Both
 * implementations of filterContent(level, audience) MUST produce
 * byte-identical outputs — that's what keeps the iOS reader from
 * silently diverging from the web at depth/audience boundaries.
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
  filterContent,
  type Audience,
  type RichChapterContent,
  type StudyLevel,
} from '../types';

const HERE = dirname(fileURLToPath(import.meta.url));
const VECTORS_PATH = join(
  HERE,
  '..',
  '..',
  '..',
  '..',
  'docs',
  'rich-content-filter-test-vectors.json',
);

interface FilterCase {
  name: string;
  description: string;
  level: StudyLevel;
  audience: Audience;
  input: RichChapterContent;
  expected: RichChapterContent;
}

interface FilterVectors {
  cases: FilterCase[];
}

const raw = readFileSync(VECTORS_PATH, 'utf8');
const vectors = JSON.parse(raw) as FilterVectors;

describe('filterContent(level, audience) — shared vectors', () => {
  for (const tc of vectors.cases) {
    it(tc.name, () => {
      const got = filterContent(tc.input, tc.level, tc.audience);
      // Deep-equal via stringify to normalize undefined-vs-missing key
      // shape: the TS filter sets `bottomShare = undefined` when it
      // wants to drop the field, which `JSON.stringify` omits. The
      // JSON fixture omits the same field. After round-tripping
      // through JSON, both sides agree.
      assert.deepEqual(
        JSON.parse(JSON.stringify(got)),
        JSON.parse(JSON.stringify(tc.expected)),
        `mismatch in case "${tc.name}" — ${tc.description}`,
      );
    });
  }
});
