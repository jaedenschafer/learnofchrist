import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import ChapterNav from '@/components/ChapterNav';
import VerseDisplay from '@/components/VerseDisplay';
import StudyGuide from '@/components/StudyGuide';
import { getVerses, getArtworksForChapter } from '@/lib/supabase';
import { verseExplanations } from '@/data/verse-explanations';
import ChapterArtStrip from '@/components/ChapterArtStrip';
import JsonLd from '@/components/JsonLd';
import StudyTopBar from '@/components/StudyTopBar';
import StudyChapterShareLaunch from '@/components/StudyChapterShareLaunch';

// Code-split client-only UI: the filters bar renders below the hero, and the
// heavy Genesis 1 deep-dive isn't needed on any other chapter.
const StudyFilters = dynamic(() => import('@/components/StudyFilters'), {
  loading: () => <div className="h-12" aria-hidden="true" />,
});
const GenesisOneStudy = dynamic(() => import('@/components/GenesisOneStudy'), {
  loading: () => (
    <div className="py-16 text-center text-[color:var(--color-tertiary-label)]">
      Loading study guide…
    </div>
  ),
});

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

interface ChapterPageProps {
  params: Promise<{ book: string; chapter: string }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export async function generateStaticParams() {
  const books = getAllBooks();
  const params = [];
  for (const book of books) {
    const slug = bookNameToSlug(book.name);
    for (let i = 1; i <= book.chapters; i++) {
      params.push({ book: slug, chapter: i.toString() });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { book, chapter: chapterStr } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj) {
    return { title: 'Chapter Not Found | Learn of Christ' };
  }

  const content = getChapterContent(book, chapter);
  const title = `${book_obj.name} ${chapter} Study Guide — Themes, Questions, Christ Connection | Learn of Christ`;
  const description = content
    ? `${content.overview.slice(0, 155)}... Study ${book_obj.name} ${chapter} with key themes, discussion questions, and Christ connections.`
    : `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, discussion questions, and connection to Christ.`;

  return {
    title,
    description,
    keywords: `${book_obj.name} ${chapter} study guide, ${book_obj.name} chapter ${chapter} commentary, Bible study, scripture commentary`,
    openGraph: {
      title: `${book_obj.name} ${chapter} — Study Guide`,
      description,
      url: `https://learnofchrist.com/study/${book}/${chapter}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/study/${book}/${chapter}`,
    },
  };
}

export default async function StudyChapterPage({ params }: ChapterPageProps) {
  const { book, chapter: chapterStr } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj || chapter < 1 || chapter > book_obj.chapters) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-[color:var(--color-label)] mb-3">Chapter Not Found</h1>
          <p className="text-[color:var(--color-secondary-label)] mb-6">The chapter you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/study" className="btn-primary">Back to Study Guides</Link>
        </div>
      </div>
    );
  }

  const defaultTranslation = book_obj.testament === 'apocrypha' ? 'dra' : 'kjv';
  const [initialVerses, chapterArtworks] = await Promise.all([
    getVerses(book, chapter, defaultTranslation),
    getArtworksForChapter(book, chapter),
  ]);
  const hasVerses = initialVerses.length > 0;

  const content = getChapterContent(book, chapter);
  const isGenesisOne = book === 'genesis' && chapter === 1;

  // For the Genesis 1 deep-dive we promote a few curated artworks inline
  // through the chapter (matched by title/artist inside GenesisOneStudy).
  // The remaining artworks fall through to the carousel at the end of the
  // page so we never show the same image twice.
  const inlineArtSlugs = new Set<string>();
  if (isGenesisOne) {
    for (const a of chapterArtworks) {
      const artistName = a.artist?.name ?? '';
      if (
        (/tissot/i.test(artistName) && /creation/i.test(a.title)) ||
        /separation of light/i.test(a.title) ||
        /separation of the earth/i.test(a.title) ||
        (/bennett/i.test(artistName) && /adam/i.test(a.title))
      ) {
        inlineArtSlugs.add(a.id);
      }
    }
  }
  const stripArtworks = isGenesisOne
    ? chapterArtworks.filter((a) => !inlineArtSlugs.has(a.id))
    : chapterArtworks;

  const explainedVerses = Object.keys(verseExplanations)
    .filter((key) => key.startsWith(`${book}/${chapter}/`))
    .map((key) => parseInt(key.split('/')[2]));

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${book_obj.name} Chapter ${chapter} — Bible Study Guide`,
    description: `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, and connection to Christ.`,
    url: `https://learnofchrist.com/study/${book}/${chapter}`,
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
    isPartOf: {
      '@type': 'Book',
      name: 'The Holy Bible',
      author: { '@type': 'Organization', name: 'Various Authors' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Study', item: 'https://learnofchrist.com/study' },
        { '@type': 'ListItem', position: 2, name: book_obj.name, item: `https://learnofchrist.com/study/${book}` },
        { '@type': 'ListItem', position: 3, name: `Chapter ${chapter}`, item: `https://learnofchrist.com/study/${book}/${chapter}` },
      ],
    },
  };

  return (
    <div className="page-container">
      <JsonLd data={jsonLd} />
      <div className="max-w-3xl mx-auto">
        <StudyTopBar
          bookSlug={book}
          bookName={book_obj.name}
          chapter={chapter}
          testamentLabel={
            book_obj.testament === 'apocrypha'
              ? 'Apocrypha'
              : book_obj.testament === 'new'
                ? 'New Testament'
                : 'Old Testament'
          }
          moreActions={
            <>
              <Link
                href={`/bible/${book}/${chapter}`}
                className="study-topbar__menu-row"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read the chapter
              </Link>
              <StudyChapterShareLaunch
                bookName={book_obj.name}
                chapter={chapter}
                bookSlug={book}
                isGenesisOne={isGenesisOne}
              />
            </>
          }
        />

        {/* Optional summary dek (kept short — most chapters get none). */}
        {isGenesisOne && (
          <p className="study-dek">
            God created the world, light, sky, land, seas, plants, the sun,
            moon, stars, animals, and every living thing. He created men and
            women in His image, blessed them, and gave them responsibility to
            care for the earth and its creatures.
          </p>
        )}

        <div id="study-filters">
          <StudyFilters />
        </div>

        <div className="space-y-4 mt-4">
          {isGenesisOne ? (
            <GenesisOneStudy artworks={chapterArtworks} />
          ) : (
            <>
              {hasVerses && (
                <VerseDisplay
                  bookSlug={book}
                  chapter={chapter}
                  initialVerses={initialVerses}
                  explainedVerses={explainedVerses}
                  defaultTranslation={defaultTranslation}
                />
              )}

              <StudyGuide
                bookName={book_obj.name}
                chapter={chapter}
                content={content ? {
                  overview: content.overview,
                  themes: [...content.themes],
                  questions: [...content.questions],
                  christConnection: content.christConnection,
                  keyVerse: content.keyVerse,
                } : null}
              />
            </>
          )}
        </div>

        <ChapterArtStrip
          bookSlug={book}
          chapter={chapter}
          bookName={book_obj.name}
          artworks={stripArtworks}
        />

        <ChapterNav
          bookName={book_obj.name}
          currentChapter={chapter}
          totalChapters={book_obj.chapters}
          previousUrl={previousChapter ? `/study/${book}/${previousChapter}` : undefined}
          nextUrl={nextChapter ? `/study/${book}/${nextChapter}` : undefined}
        />
      </div>
    </div>
  );
}
