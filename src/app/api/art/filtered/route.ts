// /api/art/filtered
// ────────────────────────────────────────────────────────────────────────────
// Filtered artwork results for the iOS filter sheet. Mirrors what
// getFilteredArtworks() accepts: q, book, artist, era, character, theme,
// testament, sort, cursor. Multi-value params can be repeated
// (?artist=a&artist=b) or comma-separated (?artist=a,b).
//
// Returns:
//   { artworks: ArtworkPreview[], total: number, nextCursor: string | null }

import { NextRequest, NextResponse } from 'next/server';
import {
  getFilteredArtworks,
  decodeCursor,
  encodeCursor,
  type ArtSort,
} from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const VALID_SORTS: ArtSort[] = [
  'recent', 'oldest', 'az', 'za', 'year_asc', 'year_desc', 'popular', 'relevance',
];

function multi(req: NextRequest, key: string): string[] {
  const all = req.nextUrl.searchParams.getAll(key);
  const flat: string[] = [];
  for (const v of all) {
    for (const piece of v.split(',')) {
      const trimmed = piece.trim();
      if (trimmed) flat.push(trimmed);
    }
  }
  return flat;
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = (sp.get('q') || '').trim();
  const book = multi(req, 'book');
  const artist = multi(req, 'artist');
  const era = multi(req, 'era');
  const character = multi(req, 'character');
  const theme = multi(req, 'theme');
  const testamentRaw = sp.get('testament');
  const testament =
    testamentRaw === 'old' || testamentRaw === 'new' ? testamentRaw : null;
  const sortRaw = (sp.get('sort') || 'recent') as ArtSort;
  let sort: ArtSort = VALID_SORTS.includes(sortRaw) ? sortRaw : 'recent';
  if (q && !sp.get('sort')) sort = 'relevance';

  const limit = Math.min(
    Math.max(parseInt(sp.get('limit') || '48', 10) || 48, 1),
    100,
  );
  const cursor = decodeCursor(sp.get('cursor'));

  const result = await getFilteredArtworks({
    q,
    book,
    artist,
    era,
    character,
    theme,
    testament,
    sort,
    limit,
    cursor,
  });

  return NextResponse.json({
    artworks: result.artworks.map((a) => ({
      slug: a.slug,
      title: a.title,
      year: a.year,
      thumbnail_256_url: a.thumbnail_256_url ?? null,
      thumbnail_800_url: a.thumbnail_800_url ?? null,
      artist_name_cached: a.artist?.name ?? null,
      artist_slug: a.artist?.slug ?? null,
    })),
    total: result.total,
    nextCursor: result.nextCursor ? encodeCursor(result.nextCursor) : null,
  });
}
