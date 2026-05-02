import { NextResponse } from 'next/server';
import { bibleBooks } from '@/data/books';
import { getAllTopics } from '@/data/topics';
import { getAllBlogPosts } from '@/data/blog-posts';
import { getArtTypeahead } from '@/lib/supabase';

/**
 * Unified site-wide typeahead.
 *
 * GET /api/search?q=<query>&limit=12
 *
 * Buckets results into Bible chapters, study guides, art, topics, and
 * blog posts. The Bible bucket also parses freeform refs like
 * "Genesis 1", "Gen 1", "John 3:16", "1 Cor 13" so a user can type a
 * passage and jump straight to it.
 *
 * Edge-cached for 30s so a popular query doesn't bombard Supabase but
 * a freshly approved artwork still surfaces within a minute.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SearchResult {
  kind: 'bible' | 'study' | 'art' | 'artist' | 'topic' | 'blog';
  title: string;
  subtitle: string | null;
  href: string;
  thumbnail_url?: string | null;
}

interface SearchPayload {
  q: string;
  groups: Array<{ label: string; results: SearchResult[] }>;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get('q') || '').slice(0, 200).trim();
  const limitRaw = parseInt(url.searchParams.get('limit') || '12', 10);
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 30) : 12;

  if (q.length < 2) {
    return NextResponse.json({ q, groups: [] } satisfies SearchPayload, {
      headers: cacheHeaders(),
    });
  }

  const lower = q.toLowerCase();

  // ── Bible: parse a free-form reference, then fall back to book-name match ──
  const bibleHits = matchBibleReference(q);
  // Fill out with name-prefix matches if we still have room.
  if (bibleHits.length < 4) {
    for (const book of bibleBooks) {
      if (bibleHits.length >= 4) break;
      const name = book.name.toLowerCase();
      const abbr = book.abbreviation.toLowerCase();
      if (name.startsWith(lower) || abbr.startsWith(lower)) {
        const slug = bookSlug(book.name);
        // Skip if we already have a hit pointing to this book.
        if (bibleHits.some((r) => r.href.startsWith(`/bible/${slug}`))) continue;
        bibleHits.push({
          kind: 'bible',
          title: book.name,
          subtitle: `${book.chapters} chapters`,
          href: `/bible/${slug}`,
        });
      }
    }
  }

  // ── Study guides: same chapter parsing, point to /study instead of /bible ──
  const studyHits: SearchResult[] = bibleHits
    .filter((r) => /\/bible\/[^/]+\/\d+$/.test(r.href))
    .slice(0, 3)
    .map((r) => ({
      ...r,
      kind: 'study',
      href: r.href.replace('/bible/', '/study/'),
      subtitle: 'Study guide',
    }));

  // ── Art: server typeahead (artworks + artists) ──
  let artHits: SearchResult[] = [];
  try {
    const rows = await getArtTypeahead(q, 6);
    artHits = rows.map((row) => ({
      kind: row.kind === 'artist' ? 'artist' : 'art',
      title: row.title,
      subtitle: row.subtitle,
      thumbnail_url: row.thumbnail_url,
      href:
        row.kind === 'artist'
          ? `/art/artist/${row.slug}`
          : `/art/artwork/${row.slug}`,
    }));
  } catch (err) {
    // Supabase down? Don't break the rest of the search.
    console.error('Art typeahead failed:', err);
  }

  // ── Topics ──
  const topicHits: SearchResult[] = getAllTopics()
    .filter((t) => t.name.toLowerCase().includes(lower))
    .slice(0, 4)
    .map((t) => ({
      kind: 'topic',
      title: t.name,
      subtitle: 'Topic',
      href: `/topics/${t.id}`,
    }));

  // ── Blog ──
  const blogHits: SearchResult[] = getAllBlogPosts()
    .filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.excerpt.toLowerCase().includes(lower),
    )
    .slice(0, 3)
    .map((p) => ({
      kind: 'blog',
      title: p.title,
      subtitle: p.category,
      href: `/blog/${p.id}`,
    }));

  const groups = [
    { label: 'Bible', results: bibleHits },
    { label: 'Study guides', results: studyHits },
    { label: 'Art', results: artHits },
    { label: 'Topics', results: topicHits },
    { label: 'Blog', results: blogHits },
  ]
    .map((g) => ({ ...g, results: g.results.slice(0, 6) }))
    .filter((g) => g.results.length > 0);

  // Cap total payload to `limit` while preserving group order.
  let remaining = limit;
  for (const g of groups) {
    if (remaining <= 0) {
      g.results = [];
    } else if (g.results.length > remaining) {
      g.results = g.results.slice(0, remaining);
    }
    remaining -= g.results.length;
  }

  return NextResponse.json(
    { q, groups: groups.filter((g) => g.results.length > 0) } satisfies SearchPayload,
    { headers: cacheHeaders() },
  );
}

function cacheHeaders(): HeadersInit {
  return {
    'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=300',
    'Content-Type': 'application/json; charset=utf-8',
  };
}

// ─── Bible reference parsing ────────────────────────────────────────────
// Matches:
//   "Genesis"            → /bible/genesis
//   "Genesis 1"          → /bible/genesis/1
//   "Genesis 1:5"        → /bible/genesis/1/5
//   "1 Cor 13"           → /bible/1-corinthians/13
//   "John 3:16"          → /bible/john/3/16
// Returns up to 3 matches in case the leading word is ambiguous.
function matchBibleReference(input: string): SearchResult[] {
  const m = input.match(
    /^(\d?\s*[A-Za-z][A-Za-z'-]*)\s*(\d+)?\s*(?::\s*(\d+))?\s*$/,
  );
  if (!m) return [];
  const bookPart = m[1].trim().toLowerCase();
  const chapter = m[2] ? parseInt(m[2], 10) : null;
  const verse = m[3] ? parseInt(m[3], 10) : null;

  // Score each book by name/abbr proximity.
  const candidates = bibleBooks
    .map((b) => {
      const name = b.name.toLowerCase();
      const abbr = b.abbreviation.toLowerCase();
      let score = 0;
      if (name === bookPart) score = 100;
      else if (name.startsWith(bookPart)) score = 80;
      else if (name.replace(/\s+/g, '').startsWith(bookPart.replace(/\s+/g, '')))
        score = 70;
      else if (abbr === bookPart) score = 60;
      else if (abbr.startsWith(bookPart)) score = 50;
      return { book: b, score };
    })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return candidates.map(({ book }) => {
    const slug = bookSlug(book.name);
    if (chapter && chapter >= 1 && chapter <= book.chapters) {
      if (verse && verse >= 1) {
        return {
          kind: 'bible',
          title: `${book.name} ${chapter}:${verse}`,
          subtitle: 'Verse',
          href: `/bible/${slug}/${chapter}/${verse}`,
        };
      }
      return {
        kind: 'bible',
        title: `${book.name} ${chapter}`,
        subtitle: `${book.testament === 'old' ? 'Old' : 'New'} Testament · chapter`,
        href: `/bible/${slug}/${chapter}`,
      };
    }
    return {
      kind: 'bible',
      title: book.name,
      subtitle: `${book.chapters} chapters`,
      href: `/bible/${slug}`,
    };
  });
}

function bookSlug(name: string): string {
  // Match the slug format used by /bible — kebab-case lowercase, with
  // numbered books like "1 Corinthians" → "1-corinthians".
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
