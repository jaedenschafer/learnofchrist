/**
 * readerPrefs.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Single source of truth for the reader's per-device preferences:
 * study level, audience, translation. This module owns:
 *
 *   • the localStorage key names every client persists under
 *   • the default values for first-time visitors
 *   • the set of valid values (and their type-guard predicates)
 *   • the public-domain translation catalog
 *
 * Every web React context (StudyLevelContext, AudienceContext,
 * TranslationContext) reads from this module. The iOS app mirrors these
 * keys + defaults in `ios/LearnOfChrist/Models/ReaderPrefs.swift` (to
 * be added — see `docs/IOS-PORT-AUDIT-2026-05-12.md` punch-list item
 * #10) so a future `user_reading_prefs` sync row is byte-compatible
 * across web and native.
 *
 * IMPORTANT — DO NOT rename a `STORAGE_KEY` once it's shipped. Users
 * have values persisted under these strings; renaming would silently
 * reset their preferences. Add a new key + migration path if the schema
 * needs to evolve.
 */

import type { StudyLevel as RichStudyLevel } from '@/data/study-chapters/types';

/* ─── Study level ────────────────────────────────────────────────────── */

/** Re-exported so consumers can import the type and storage contract from
 *  one place. The canonical type definition lives in
 *  `src/data/study-chapters/types.ts` (and `lib/StudyLevelContext.tsx`).
 */
export type StudyLevel = RichStudyLevel;

export const STUDY_LEVEL_STORAGE_KEY = 'loc-study-level';

/** Default for new readers. Beginner risks training people that the site
 *  is shallow; Deep Dive risks a wall-of-text first impression. */
export const DEFAULT_STUDY_LEVEL: StudyLevel = 'intermediate';

export const STUDY_LEVEL_VALUES: readonly StudyLevel[] = [
  'beginner',
  'intermediate',
  'deep',
] as const;

export function isStudyLevel(v: unknown): v is StudyLevel {
  return v === 'beginner' || v === 'intermediate' || v === 'deep';
}

/* ─── Audience ───────────────────────────────────────────────────────── */

import type { Audience as RichAudience } from '@/data/study-chapters/types';

export type Audience = RichAudience;

export const AUDIENCE_STORAGE_KEY = 'loc-audience';

/** Set to '1' when the active user's account flag forces audience to
 *  'kids' (e.g. a parent-configured child account). When this key is '1',
 *  the picker hides itself and audience is locked to 'kids'. */
export const AUDIENCE_LOCK_STORAGE_KEY = 'loc-audience-lock';

/** Default for new readers. Most visitors are adults; teens and
 *  parents-with-kids will pick their audience explicitly. */
export const DEFAULT_AUDIENCE: Audience = 'adults';

export const AUDIENCE_VALUES: readonly Audience[] = [
  'adults',
  'youth',
  'kids',
] as const;

export function isAudience(v: unknown): v is Audience {
  return v === 'adults' || v === 'youth' || v === 'kids';
}

/* ─── Translation ────────────────────────────────────────────────────── */

/** Bible translation chosen for verse rendering. Stored as the
 *  translation's `abbreviation` (lowercase). */
export type TranslationAbbr = string;

export const TRANSLATION_STORAGE_KEY = 'loc-translation';

export const DEFAULT_TRANSLATION: TranslationAbbr = 'kjv';

/** Public-domain translation catalog. KJV stays at the top as the
 *  default; the rest are alphabetised by full name so the dropdown is
 *  easy to scan.
 *
 *  Licensed translations (NIV/ESV/CSB/etc.) are NOT in v1 — see
 *  `docs/MOBILE-PLATFORM-STRATEGY.md → "Out of scope for v1"`. When
 *  they arrive, they'll be served by the `bible-translation-proxy`
 *  Edge Function and slotted in here (kept separate from the
 *  public-domain list so offline clients can render
 *  ahead-of-license-check).
 */
const KJV = { abbreviation: 'kjv', name: 'King James Version' };
const PUBLIC_DOMAIN_REST = [
  { abbreviation: 'asv', name: 'American Standard Version' },
  { abbreviation: 'bsb', name: 'Berean Standard Bible' },
  { abbreviation: 'dra', name: 'Douay-Rheims American' },
  { abbreviation: 'jst', name: 'Joseph Smith Translation' },
  { abbreviation: 'lsv', name: 'Literal Standard Version' },
  { abbreviation: 'nwt', name: 'New World Translation' },
  { abbreviation: 'web', name: 'World English Bible' },
].sort((a, b) => a.name.localeCompare(b.name));

export const PUBLIC_DOMAIN_TRANSLATIONS: readonly {
  abbreviation: string;
  name: string;
}[] = [KJV, ...PUBLIC_DOMAIN_REST];

export function isKnownTranslation(abbr: unknown): abbr is TranslationAbbr {
  if (typeof abbr !== 'string') return false;
  return PUBLIC_DOMAIN_TRANSLATIONS.some((t) => t.abbreviation === abbr);
}

/* ─── Cross-platform sync row ────────────────────────────────────────── */

/** Shape the `user_reading_prefs` row uses (and the future
 *  `v1_sync_user_data` payload). Keep additive — clients on older
 *  versions must tolerate unknown keys.
 *
 *  Mirrored byte-for-byte by `ReaderPrefs` on iOS / Android so the same
 *  serialized JSON round-trips through every client.
 */
export interface ReaderPrefsSyncRow {
  study_level: StudyLevel;
  audience: Audience;
  /** True iff the user's account is locked to the kids audience. */
  audience_lock: boolean;
  translation: TranslationAbbr;
}

/** Build a sync row from the in-memory values. Mostly here so tests
 *  (and future RPC callers) have a single function to call. */
export function makeReaderPrefsSyncRow(input: {
  studyLevel: StudyLevel;
  audience: Audience;
  audienceLock: boolean;
  translation: TranslationAbbr;
}): ReaderPrefsSyncRow {
  return {
    study_level: input.studyLevel,
    audience: input.audience,
    audience_lock: input.audienceLock,
    translation: input.translation,
  };
}
