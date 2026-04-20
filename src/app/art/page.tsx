import Link from 'next/link';
import type { Metadata } from 'next';
import { getArtworksBrowse, getBooksWithArt } from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtCard from '@/components/ArtCard';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Christian Art — Public Domain Bible Illustrations | Learn of Christ',
  description:
    'A free, searchable library of public-domain Christian art, indexed to scripture. Browse Gustave Doré and more — find an engraving for any passage.',
  openGraph: {
    title: 'Christian Art — Public Domain Bible Illustrations',
    description: 'Free, searchable library of historic Christian art indexed to scripture.',
    url: 'https://learnofchrist.com/art',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/art',
  },
};

export default async function ArtIndexPage() {
  const [recent, booksWithArt] = await Promise.all([
    getArtworksBrowse(48),
    getBooksWithArt(),
  ]);

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
            <span>{recent.length === 48 ? '48+' : recent.length} artworks · {booksWithArt.length} books covered</span>
          </div>
        </header>

        {booksWithArt.length > 0 && (
          <section className="mt-10">
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

        <section className="mt-10">
          <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-4 px-1">
            Recently added
          </h2>
          {recent.length === 0 ? (
            <p className="text-[color:var(--color-secondary-label)] px-1">
              The library is being seeded. Check back shortly.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {recent.map((art) => (
                <ArtCard key={art.id} artwork={art} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
