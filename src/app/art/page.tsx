import Link from 'next/link';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getFilteredArtworks,
  getBooksWithArt,
  getArtistsWithArt,
  type ArtSort,
} from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtCard from '@/components/ArtCard';
import ArtFilters from '@/components/ArtFilters';

// Shorter window so new approvals show up quickly. Per-URL ISR is still cheap
// because URLs with filters cache independently.
export const revalidate = 300;

const PAGE_SIZE = 48;
const VALID_SORTS: ArtSort[] = ['recent', 'oldest', 'az', 'za', 'year_asc', 'year_desc'];

export const metadata: Metadata = {
  title: 'Christian Art — Public Domain Bible Illustrations | Learn of Christ',
  description:
    'A free, searchable library of public-domain Christian art, indexed to scripture. Browse by book, artist, or keyword — find an engraving or painting for any passage.',
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
    book?: string;
    artist?: string;
    sort?: string;
    limit?: string;
  }>;
}

export default async function ArtIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = (params.q || '').trim();
  const book = (params.book || '').trim();
  const artist = (params.artist || '').trim();
  const sortRaw = (params.sort || 'recent').trim() as ArtSort;
  const sort: ArtSort = VALID_SORTS.includes(sortRaw) ? sortRaw : 'recent';

  // Parse ?limit= for "Load more". Defaults to PAGE_SIZE, caps at 480.
  const limitRaw = parseInt(params.limit || '', 10);
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 480) : PAGE_SIZE;

  const [result, booksWithArt, artistsWithArt] = await Promise.all([
    getFilteredArtworks({ q, book, artist, sort, limit, offset: 0 }),
    getBooksWithArt(),
    getArtistsWithArt(),
  ]);

  const { artworks, total } = result;
  const hasFilters = !!(q || book || artist || (sort && sort !== 'recent'));
  const shown = artworks.length;
  const hasMore = shown < total;
  const nextLimit = Math.min(limit + PAGE_SIZE, 480);

  // Build "load more" URL that preserves current filters.
  const nextParams = new URLSearchParams();
  if (q) nextParams.set('q', q);
  if (book) nextParams.set('book', book);
  if (artist) nextParams.set('artist', artist);
  if (sort && sort !== 'recent') nextParams.set('sort', sort);
  nextParams.set('limit', String(nextLimit));
  const loadMoreHref = `/art?${nextParams.toString()}`;

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
          </div>
        </header>

        <Suspense fallback={<div className="h-28" />}>
          <ArtFilters
            books={booksWithArt.map((b) => ({ slug: b.slug, name: b.name }))}
            artists={artistsWithArt.map((a) => ({ slug: a.slug, name: a.name, count: a.count }))}
            initialQuery={q}
            initialBook={book}
            initialArtist={artist}
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
              <p className="text-[color:var(--color-label)] font-medium mb-1">No artworks found.</p>
              <p className="text-[color:var(--color-secondary-label)] text-[0.9375rem]">
                Try a different search term or{' '}
                <Link href="/art" className="text-[color:var(--color-primary)] hover:underline">
                  clear all filters
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {artworks.map((art) => (
                  <ArtCard key={art.id} artwork={art} />
                ))}
              </div>
              {hasMore && (
                <div className="mt-8 flex justify-center">
                  <Link
                    href={loadMoreHref}
                    scroll={false}
                    className="inline-flex items-center h-11 px-6 rounded-full bg-[color:var(--color-primary)] text-white text-[0.9375rem] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Show more ({(total - shown).toLocaleString()} remaining)
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
