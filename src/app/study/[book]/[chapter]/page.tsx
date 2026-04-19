import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ChapterNav from '@/components/ChapterNav';
import StudyFilters from '@/components/StudyFilters';
import VerseDisplay from '@/components/VerseDisplay';
import StudyGuide from '@/components/StudyGuide';
import GenesisOneStudy from '@/components/GenesisOneStudy';
import { getVerses } from '@/lib/supabase';
import { verseExplanations } from '@/data/verse-explanations';

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
          <h1 className="text-3xl font-bold text-[#1D1D1F] mb-3">Chapter Not Found</h1>
          <p className="text-[#86868B] mb-6">The chapter you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/study" className="btn-primary">Back to Study Guides</Link>
        </div>
      </div>
    );
  }

  const defaultTranslation = book_obj.testament === 'apocrypha' ? 'dra' : 'kjv';
  const initialVerses = await getVerses(book, chapter, defaultTranslation);
  const hasVerses = initialVerses.length > 0;

  const content = getChapterContent(book, chapter);
  const isGenesisOne = book === 'genesis' && chapter === 1;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Study', href: '/study' },
          { label: book_obj.name, href: `/study/${book}` },
          { label: `Chapter ${chapter}`, href: '#' },
        ]} />

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF]">{book_obj.name}</span>
            <span className="pill bg-[#5856D6]/[0.08] text-[#5856D6]">Study Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-2">Chapter {chapter}</h1>
          <p className="text-base text-[#86868B]">
            Themes, discussion questions, Christ connections, and denomination lenses.
          </p>
          <Link
            href={`/bible/${book}/${chapter}`}
            className="inline-flex items-center gap-1 mt-3 text-[0.8125rem] font-medium text-[#007AFF] hover:underline"
          >
            Just read this chapter →
          </Link>
        </div>

        {!isGenesisOne && <StudyFilters />}

        <div className="space-y-4 mt-4">
          {isGenesisOne ? (
            <GenesisOneStudy />
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
