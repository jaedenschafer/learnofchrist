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

// The full faceted-search experience used to be at /art. The /art landing
// page is now an editorial showcase (carousels by style/artist) — readers
// who want the multi-dimensional filter grid land here via the
// "All filters" pill or the per-row "See all →" links.

export const revalidate = 300;

const PAGE_SIZE = 48;
const PRIORITY_COUNT = 8;
const VALID_SORTS: ArtSort[] = [
  'recent', 'oldest', 'az', 'za', 'year_asc', 'year_desc', 'popular', 'relevance',
];

export const metadata: Metadata = {
  title: 'Browse Christian Art — Filters & Search | Learn of Christ',
  description:
    'Filter the full library of public-domain Christian art by book, artist, era, character, scene, and scripture reference.',
  openGraph: {
    title: 'Browse Christian Art — Filters & Search',
    description:
      'Filter the full library of public-domain Christian art by book, artist, era, character, scene, and scripture reference.',
    url: 'https://learnofchrist.com/art/browse',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/art/browse',
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
    /** 'old' | 'new' — Old/New Testament toggle. */
    testament?: string;
    sort?: string;
    cursor?: string;
  }>;
}

function asStringArray(v: string | string[] | undefined): string[] {
  if (v == null) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  return v.split(',').map((s) => s.trim()).filter(Boolean);
}

export default async function ArtBrowsePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = (params.q || '').trim();
  const books = asStringArray(params.book);
  const artists = asStringArray(params.artist);
  const eras = asStringArray(params.era);
  const characters = asStringArray(params.character);
  const themes = asStringArray(params.theme);
  const testament =
    params.testament === 'old' || params.testament === 'new'
      ? params.testament
      : null;

  const sortRaw = (params.sort || 'recent').trim() as ArtSort;
  let sort: ArtSort = VALID_SORTS.includes(sortRaw) ? sortRaw : 'recent';
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
      testament,
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
    testament ||
    (sort && sort !== 'recent' && sort !== 'relevance')
  );
  const shown = artworks.length;
  const remaining = Math.max(0, total - shown);

  const nextParams = new URLSearchParams();
  if (q) nextParams.set('q', q);
  for (const b of books) nextParams.append('book', b);
  for (const a of artists) nextParams.append('artist', a);
  for (const e of eras) nextParams.append('era', e);
  for (const c of characters) nextParams.append('character', c);
  for (const t of themes) nextParams.append('theme', t);
  if (testament) nextParams.set('testament', testament);
  if (sort !== 'recent' && !(q && sort === 'relevance')) nextParams.set('sort', sort);
  if (nextCursor) nextParams.set('cursor', encodeCursor(nextCursor));
  const loadMoreHref = nextCursor ? `/art/browse?${nextParams.toString()}` : null;

  /** Helpers for the testament toggle UI — preserve every other
   *  filter, drop the cursor (user is changing their query). */
  function buildTestamentHref(next: 'old' | 'new' | null): string {
    const u = new URLSearchParams();
    if (q) u.set('q', q);
    for (const b of books) u.append('book', b);
    for (const a of artists) u.append('artist', a);
    for (const e of eras) u.append('era', e);
    for (const c of characters) u.append('character', c);
    for (const t of themes) u.append('theme', t);
    if (next) u.set('testament', next);
    if (sort !== 'recent' && !(q && sort === 'relevance')) u.set('sort', sort);
    const qs = u.toString();
    return qs ? `/art/browse?${qs}` : '/art/browse';
  }

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Art', href: '/art' },
          { label: 'Browse', href: '#' },
        ]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            <span className="study-hero__kicker-book">Christian Art Library</span>
            <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
            <span>Search &amp; filter</span>
          </p>
          <h1 className="study-hero__title">Find an artwork.</h1>
          <p className="study-hero__dek">
            Filter by book, artist, era, character, or scene. Or jump back to the{' '}
            <Link href="/art" className="underline">
              showcase
            </Link>{' '}
            to browse by style.
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

        {/* Old / New Testament segmented toggle. Sits just under the
            main filter bar and rewrites the URL on click — no JS
            required, works in webviews and with reduced JS. */}
        <div
          className="flex flex-wrap items-center gap-2 mb-6 px-1"
          role="group"
          aria-label="Filter by Testament"
        >
          <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-[color:var(--color-tertiary-label)] mr-1">
            Testament
          </span>
          {([
            { v: null, label: 'All' },
            { v: 'old' as const, label: 'Old Testament' },
            { v: 'new' as const, label: 'New Testament' },
          ]).map((opt) => {
            const active = testament === opt.v;
            return (
              <Link
                key={opt.label}
                href={buildTestamentHref(opt.v)}
                scroll={false}
                aria-pressed={active}
                className={
                  'inline-flex items-center h-10 px-4 rounded-full text-[0.875rem] font-medium transition-colors ' +
                  (active
                    ? 'bg-[color:var(--color-label)] text-[color:var(--color-surface)]'
                    : 'bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[color:var(--color-label)] hover:border-[color:var(--color-label)]')
                }
              >
                {opt.label}
              </Link>
            );
          })}
        </div>

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
                <Link href="/art/browse" className="text-[color:var(--color-primary)] hover:underline">
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
