// /api/art/filters
// ────────────────────────────────────────────────────────────────────────────
// Returns the filter facets (books + artists with art) used by the iOS
// filter sheet. Mirrors the same shape used by ArtFilterBar on web.

import { NextResponse } from 'next/server';
import { getBooksWithArt, getArtistsWithArt } from '@/lib/supabase';

export const revalidate = 3600;

export async function GET() {
  const [books, artists] = await Promise.all([
    getBooksWithArt(),
    getArtistsWithArt(),
  ]);

  return NextResponse.json({
    books: books.map((b) => ({ slug: b.slug, name: b.name })),
    artists: artists.map((a) => ({
      slug: a.slug,
      name: a.name,
      count: a.count,
    })),
  });
}
