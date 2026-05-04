import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBookByName } from '@/data/books';
import { getArtworksForChapter } from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtCard from '@/components/ArtCard';

export const revalidate = 86400;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string; chapter: string }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, chapter } = await params;
  const name = slugToBookName(slug);
  const book = getBookByName(name);
  if (!book) return { title: 'Chapter Not Found | Learn of Christ' };

  return {
    title: `${book.name} ${chapter} — Christian Art & Engravings | Learn of Christ`,
    description: `Historic Christian art for ${book.name} ${chapter}. Free, public-domain engravings, paintings, and illustrations of the passage.`,
    openGraph: {
      title: `${book.name} ${chapter} — Christian Art`,
      description: `Art for ${book.name} chapter ${chapter}.`,
      url: `https://learnofchrist.com/art/book/${slug}/${chapter}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/art/book/${slug}/${chapter}`,
    },
  };
}

export default async function ArtByChapterPage({ params }: PageProps) {
  const { slug, chapter: chapterStr } = await params;
  const name = slugToBookName(slug);
  const book = getBookByName(name);
  const chapter = parseInt(chapterStr, 10);

  if (!book || !Number.isFinite(chapter) || chapter < 1 || chapter > book.chapters) {
    return notFound();
  }

  const artworks = await getArtworksForChapter(slug, chapter);

  // Split painted artworks from manuscript-page folios so each gets its
  // own grid + heading on the chapter art browse page.
  const paintings = artworks.filter((a) => !(a.tags?.includes('manuscript-page') ?? false));
  const manuscripts = artworks.filter((a) => a.tags?.includes('manuscript-page') ?? false);

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Art', href: '/art' },
          { label: book.name, href: `/art/book/${slug}` },
          { label: `Chapter ${chapter}`, href: '#' },
        ]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            <span className="study-hero__kicker-book">{book.name} {chapter}</span>
            <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
            <span>{artworks.length} artwork{artworks.length === 1 ? '' : 's'}</span>
          </p>
          <h1 className="study-hero__title">{book.name} {chapter}</h1>
          <p className="study-hero__dek">
            Historic Christian art depicting this chapter, drawn from the public domain.
          </p>
          <div className="study-hero__meta">
            <Link href={`/study/${slug}/${chapter}`} className="study-hero__meta-link">
              Read the study guide
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        {artworks.length === 0 ? (
          <p className="text-[color:var(--color-secondary-label)] mt-10 px-1">
            No art indexed for this chapter yet.
          </p>
        ) : (
          <>
            {paintings.length > 0 && (
              <section className="mt-8">
                {manuscripts.length > 0 && (
                  <h2 className="text-xl font-semibold mb-3">Artwork</h2>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {paintings.map((art) => (
                    <ArtCard key={art.id} artwork={art} />
                  ))}
                </div>
              </section>
            )}
            {manuscripts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-semibold mb-1">Ancient manuscript</h2>
                <p className="text-sm text-[color:var(--color-secondary-label)] mb-3">
                  Folios from surviving Latin Vulgate manuscripts that contain this chapter.
                  Most pages are 8th–9th century parchment text; some are full-page
                  illuminations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {manuscripts.map((art) => (
                    <ArtCard key={art.id} artwork={art} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}
