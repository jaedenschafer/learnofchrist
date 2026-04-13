import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ChapterNav from '@/components/ChapterNav';
import StudyFilters from '@/components/StudyFilters';
import VerseDisplay from '@/components/VerseDisplay';
import StudyGuide from '@/components/StudyGuide';
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

  // Pre-render every chapter of every book (we have all 31,102 KJV verses)
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
  const title = `${book_obj.name} ${chapter} - Bible Study & Commentary | Learn of Christ`;
  const description = content
    ? `${content.overview.slice(0, 155)}... Compare KJV, ASV, and WEB translations.`
    : `Read ${book_obj.name} Chapter ${chapter} with study guide, key themes, and connection to Christ. Compare KJV, ASV, and WEB translations side by side.`;

  return {
    title,
    description,
    keywords: `${book_obj.name} ${chapter}, ${book_obj.name} chapter ${chapter}, Bible study, ${book_obj.name} commentary, scripture study, Jesus Christ`,
    openGraph: {
      title: `${book_obj.name} ${chapter} — Study Guide`,
      description,
      url: `https://learnofchrist.com/bible/${book}/${chapter}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/bible/${book}/${chapter}`,
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
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
          <Link href="/bible" className="btn-primary">Back to Bible Study</Link>
        </div>
      </div>
    );
  }

  // Fetch real KJV verses from Supabase at build/request time
  const initialVerses = await getVerses(book, chapter, 'kjv');
  const hasVerses = initialVerses.length > 0;

  // Get chapter-specific study content (or fall back to generic)
  const content = getChapterContent(book, chapter);

  // Find which verses in this chapter have explanation pages
  const explainedVerses = Object.keys(verseExplanations)
    .filter((key) => key.startsWith(`${book}/${chapter}/`))
    .map((key) => parseInt(key.split('/')[2]));

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;

  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${book_obj.name} Chapter ${chapter} — Bible Study Guide`,
    description: `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, and connection to Christ.`,
    url: `https://learnofchrist.com/bible/${book}/${chapter}`,
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
        { '@type': 'ListItem', position: 1, name: 'Bible', item: 'https://learnofchrist.com/bible' },
        { '@type': 'ListItem', position: 2, name: book_obj.name, item: `https://learnofchrist.com/bible/${book}` },
        { '@type': 'ListItem', position: 3, name: `Chapter ${chapter}`, item: `https://learnofchrist.com/bible/${book}/${chapter}` },
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
          { label: 'Bible', href: '/bible' },
          { label: book_obj.name, href: `/bible/${book}` },
          { label: `Chapter ${chapter}`, href: '#' },
        ]} />

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 mb-4">
          <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF] mb-2 inline-block">{book_obj.name}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-2">Chapter {chapter}</h1>
          <p className="text-base text-[#86868B]">
            {hasVerses
              ? `${initialVerses.length} verses — switch translations with the toolbar below.`
              : 'A study guide to understand this chapter and its connection to Christ.'}
          </p>
        </div>

        {/* Study Filters — sticky toolbar with translation, level, denomination */}
        <StudyFilters />

        {/* Content Sections */}
        <div className="space-y-4 mt-4">

          {/* Real Bible Text */}
          {hasVerses && (
            <VerseDisplay
              bookSlug={book}
              chapter={chapter}
              initialVerses={initialVerses}
              explainedVerses={explainedVerses}
            />
          )}

          {/* Study Guide — level-aware client component */}
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
        </div>

        <ChapterNav
          bookName={book_obj.name}
          currentChapter={chapter}
          totalChapters={book_obj.chapters}
          previousUrl={previousChapter ? `/bible/${book}/${previousChapter}` : undefined}
          nextUrl={nextChapter ? `/bible/${book}/${nextChapter}` : undefined}
        />
      </div>
    </div>
  );
}
