import Link from 'next/link';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getFilteredArtworks,
  getBooksWithArt,
  getArtistsWithArt,
  decodeCursor,
  encodeCursor,
  type ArtSort,
} from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtCard from '@/components/ArtCard';
import ArtFilters from '@/components/ArtFilters';

// Shorter window so new approvals show up quickly. Per-URL ISR is still cheap
// because URLs with filters cache independently.
export const revalidate = 300;

const PAGE_SIZE = 48;
/** Above-the-fold cards get fetchpriority="high" via next/image priority. */
const PRIORITY_COUNT = 8;
const VALID_SORTS: ArtSort[] = [
  'recent', 'oldest', 'az', 'za', 'year_asc', 'year_desc', 'popular', 'relevance',
];

export const metadata: Metadata = {
  title: 'Christian Art — Public Domain Bible Illustrations | Learn of Christ',
  description:
    'A free, searchable library of public-domain Christian art, indexed to scripture. Browse by book, artist, era, character, or scene.',
  openGraph: {
    title: 'Christian Art — Public Domain Bible Illustrations',
    description:
      'Free, searchable library of historic Christian art indexed to scripture.',
    url: 'https://learnofchrist.com/art',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/art',
  },
};

interface PageProps {
  searchParams: Promise<{
    q?: string;
    book?: string | string[];
    artist?: string | string[];
    era?: string | string[];
    character?: string | string[];
    theme?: string | string[];
    sort?: string;
    cursor?: string;
  }>;
}

/** Normalize a query-string value that can be string | string[] | undefined
 *  into a string[]. searchParams gives us arrays when the user picked
 *  ?era=baroque&era=renaissance. */
function asStringArray(v: string | string[] | undefined): string[] {
  if (v == null) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  return v.split(',').map((s) => s.trim()).filter(Boolean);
}

export default async function ArtIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = (params.q || '').trim();
  const books = asStringArray(params.book);
  const artists = asStringArray(params.artist);
  const eras = asStringArray(params.era);
  const characters = asStringArray(params.character);
  const themes = asStringArray(params.theme);

  const sortRaw = (params.sort || 'recent').trim() as ArtSort;
  let sort: ArtSort = VALID_SORTS.includes(sortRaw) ? sortRaw : 'recent';
  // When the user types a query, default to relevance unless they picked
  // an explicit sort.
  if (q && !params.sort) sort = 'relevance';

  const cursor = decodeCursor(params.cursor);

  const [result, booksWithArt, artistsWithArt] = await Promise.all([
    getFilteredArtworks({
      q,
      book: books,
      artist: artists,
      era: eras,
      character: characters,
      theme: themes,
      sort,
      limit: PAGE_SIZE,
      cursor,
    }),
    getBooksWithArt(),
    getArtistsWithArt(),
  ]);

  const { artworks, total, nextCursor } = result;
  const hasFilters = !!(
    q ||
    books.length || artists.length || eras.length || characters.length || themes.length ||
    (sort && sort !== 'recent' && sort !== 'relevance')
  );
  const shown = artworks.length;
  // Server-side cursor pagination doesn't know "remaining" without total —
  // we have total from the RPC, so subtract.
  const remaining = Math.max(0, total - shown);

  // Build "load more" URL that preserves current filters + sets cursor.
  const nextParams = new URLSearchParams();
  if (q) nextParams.set('q', q);
  for (const b of books) nextParams.append('book', b);
  for (const a of artists) nextParams.append('artist', a);
  for (const e of eras) nextParams.append('era', e);
  for (const c of characters) nextParams.append('character', c);
  for (const t of themes) nextParams.append('theme', t);
  if (sort !== 'recent' && !(q && sort === 'relevance')) nextParams.set('sort', sort);
  if (nextCursor) nextParams.set('cursor', encodeCursor(nextCursor));
  const loadMoreHref = nextCursor ? `/art?${nextParams.toString()}` : null;

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Art', href: '#' }]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            <span className="study-hero__kicker-book">Christian Art Library</span>
            <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
            <span>Public Domain</span>
          </p>
          <h1 className="study-hero__title">Images for every verse.</h1>
          <p className="study-hero__dek">
            A free, growing index of historic Christian art — engravings, paintings, and
            illuminations — indexed to the exact scripture they depict.
          </p>
          <div className="study-hero__meta">
            <span>
              {total.toLocaleString()} artworks · {booksWithArt.length} books covered
            </span>
            <Link
              href="/art/artists"
              className="study-hero__meta-link"
              style={{ marginLeft: '0.75rem' }}
            >
              Browse by artist
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <Suspense fallback={<div className="h-28" />}>
          <ArtFilters
            books={booksWithArt.map((b) => ({ slug: b.slug, name: b.name }))}
            artists={artistsWithArt.map((a) => ({ slug: a.slug, name: a.name, count: a.count }))}
            initialQuery={q}
            initialBooks={books}
            initialArtists={artists}
            initialEras={eras}
            initialCharacters={characters}
            initialThemes={themes}
            initialSort={sort}
            totalCount={total}
          />
        </Suspense>

        {!hasFilters && booksWithArt.length > 0 && (
          <section className="mb-8">
            <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-3 px-1">
              Browse by book
            </h2>
            <div className="flex flex-wrap gap-2">
              {booksWithArt.map((b) => (
                <Link
                  key={b.slug}
                  href={`/art/book/${b.slug}`}
                  className="inline-flex items-center gap-1 px-3 h-9 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[0.8125rem] font-medium text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-4 px-1">
            {hasFilters ? 'Results' : 'Recently added'}
          </h2>
          {artworks.length === 0 ? (
            <div className="text-center py-16 px-4">
              <p className="text-[color:var(--color-label)] font-medium mb-1">No artworks match these filters.</p>
              <p className="text-[color:var(--color-secondary-label)] text-[0.9375rem]">
                Try removing a filter or{' '}
                <Link href="/art" className="text-[color:var(--color-primary)] hover:underline">
                  clear all
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {artworks.map((art, i) => (
                  <ArtCard key={art.id} artwork={art} priority={i < PRIORITY_COUNT} />
                ))}
              </div>
              {loadMoreHref && (
                <div className="mt-8 flex justify-center">
                  <Link
                    href={loadMoreHref}
                    scroll={false}
                    className="inline-flex items-center h-11 px-6 rounded-full bg-[color:var(--color-primary)] text-white text-[0.9375rem] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Show more ({remaining.toLocaleString()} remaining)
                  </Link>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
