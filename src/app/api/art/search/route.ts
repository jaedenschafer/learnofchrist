import { NextResponse } from 'next/server';
import { getArtTypeahead } from '@/lib/supabase';

/**
 * Typeahead suggestions for the /art search box.
 *
 * GET /api/art/search?q=<query>&limit=8
 *
 * Returns up to `limit` results split between artworks and artists.
 * Cached at the CDN edge for 60s with stale-while-revalidate so a popular
 * query (e.g. "jesus") doesn't hit Supabase on every keystroke from every
 * user — but a freshly-added artwork still appears within a minute.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get('q') || '').slice(0, 200);
  const limitRaw = parseInt(url.searchParams.get('limit') || '8', 10);
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 20) : 8;

  if (q.trim().length < 2) {
    return NextResponse.json({ results: [] }, {
      headers: cacheHeaders(),
    });
  }

  const results = await getArtTypeahead(q, limit);
  return NextResponse.json({ q, results }, {
    headers: cacheHeaders(),
  });
}

function cacheHeaders(): HeadersInit {
  return {
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    'Content-Type': 'application/json; charset=utf-8',
  };
}
