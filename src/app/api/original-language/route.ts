/**
 * GET /api/original-language
 *   → full list of every Hebrew/Greek callout block extracted from the
 *     hand-authored rich study chapters. Same shape the iOS
 *     `RemoteHebrewWord` decoder expects.
 *
 * GET /api/original-language?day=N
 *   → just `ORIGINAL_LANGUAGE_WORDS[(N-1) % length]` so a daily client
 *     (the iOS home screen) doesn't have to download ~4k entries on
 *     every launch.  `N` defaults to the current day-of-year in UTC.
 *
 * The HTML in `title` and `translit` is left INTACT — iOS decodes
 * entities client-side via its existing `plainText(from:)` helper, and
 * the website wants the rich markup (italics, <strong>, &mdash;) when
 * rendering the same word inline. Pre-stripping would break both.
 *
 * Cache strategy mirrors the other recently-added shared routes
 * (study-plans, topics, questions): `force-dynamic` so Vercel doesn't
 * accidentally pin a stale build, with a short revalidate window so the
 * CDN still does most of the heavy lifting.
 */
import { NextResponse } from 'next/server';
import { ORIGINAL_LANGUAGE_WORDS } from '@/data/derived/original-language';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

/** UTC day-of-year (1–366). Used as the default when `?day=N` is absent. */
function dayOfYearUTC(now: Date = new Date()): number {
  const start = Date.UTC(now.getUTCFullYear(), 0, 1);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((today - start) / (24 * 60 * 60 * 1000)) + 1;
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dayParam = searchParams.get('day');

  if (dayParam !== null) {
    const parsed = parseInt(dayParam, 10);
    const day = Number.isFinite(parsed) && parsed > 0 ? parsed : dayOfYearUTC();
    const entry = ORIGINAL_LANGUAGE_WORDS[(day - 1) % ORIGINAL_LANGUAGE_WORDS.length];
    return NextResponse.json(entry);
  }

  return NextResponse.json(ORIGINAL_LANGUAGE_WORDS);
}
