import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBookByName } from '@/data/books';
import { getArtworksForBook } from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtCard from '@/components/ArtCard';

export const revalidate = 86400;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = slugToBookName(slug);
  const book = getBookByName(name);
  if (!book) return { title: 'Book Not Found | Learn of Christ' };

  return {
    title: `${book.name} — Public Domain Christian Art | Learn of Christ`,
    description: `Historic Christian art depicting scenes from ${book.name}. Free, public-domain engravings and paintings indexed chapter-by-chapter.`,
    openGraph: {
      title: `${book.name} — Christian Art`,
      description: `Historic Christian art for ${book.name}.`,
      url: `https://learnofchrist.com/art/book/${slug}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/art/book/${slug}`,
    },
  };
}

export default async function ArtByBookPage({ params }: PageProps) {
  const { slug } = await params;
  const name = slugToBookName(slug);
  const book = getBookByName(name);
  if (!book) return notFound();

  const grouped = await getArtworksForBook(slug);
  const total = grouped.reduce((sum, g) => sum + g.artworks.length, 0);

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Art', href: '/art' },
          { label: book.name, href: '#' },
        ]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            <span className="study-hero__kicker-book">{book.name}</span>
            <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
            <span>{total} artwork{total === 1 ? '' : 's'}</span>
          </p>
          <h1 className="study-hero__title">Art for {book.name}</h1>
          <p className="study-hero__dek">
            Historic Christian art depicting scenes from {book.name}, grouped chapter-by-chapter.
          </p>
          <div className="study-hero__meta">
            <Link href={`/study/${slug}`} className="study-hero__meta-link">
              Read the study guide
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        {grouped.length === 0 ? (
          <p className="text-[color:var(--color-secondary-label)] mt-10 px-1">
            No art indexed for this book yet.
          </p>
        ) : (
          <div className="space-y-10 mt-8">
            {grouped.map((group) => (
              <section key={group.chapter}>
                <div className="flex items-baseline justify-between mb-4 px-1">
                  <h2 className="text-[1.25rem] font-semibold text-[color:var(--color-label)]">
                    Chapter {group.chapter}
                  </h2>
                  <Link
                    href={`/art/book/${slug}/${group.chapter}`}
                    className="text-[0.8125rem] font-medium text-[color:var(--color-primary)] hover:underline"
                  >
                    View chapter →
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.artworks.map((art) => (
                    <ArtCard key={art.id} artwork={art} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
