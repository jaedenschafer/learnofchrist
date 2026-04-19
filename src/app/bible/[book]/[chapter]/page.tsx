import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ChapterNav from '@/components/ChapterNav';
import ReadingFilters from '@/components/ReadingFilters';
import VerseDisplay from '@/components/VerseDisplay';
import StudyBanner from '@/components/StudyBanner';
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

  const title = `${book_obj.name} ${chapter} — Read Online in KJV, ASV, WEB & More | Learn of Christ`;
  const description = `Read ${book_obj.name} Chapter ${chapter} online. Switch between 8 translations including KJV, JST, BSB, NWT, ASV, WEB, LSV, and DRA.`;

  return {
    title,
    description,
    keywords: `${book_obj.name} ${chapter}, ${book_obj.name} chapter ${chapter}, read Bible online, KJV, Bible translations`,
    openGraph: {
      title: `${book_obj.name} ${chapter}`,
      description,
      url: `https://learnofchrist.com/bible/${book}/${chapter}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/bible/${book}/${chapter}`,
    },
  };
}

export default async function ChapterReadingPage({ params }: ChapterPageProps) {
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
          <Link href="/bible" className="btn-primary">Back to Bible</Link>
        </div>
      </div>
    );
  }

  const defaultTranslation = book_obj.testament === 'apocrypha' ? 'dra' : 'kjv';
  const initialVerses = await getVerses(book, chapter, defaultTranslation);
  const hasVerses = initialVerses.length > 0;

  const explainedVerses = Object.keys(verseExplanations)
    .filter((key) => key.startsWith(`${book}/${chapter}/`))
    .map((key) => parseInt(key.split('/')[2]));

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${book_obj.name} ${chapter}`,
    description: `Read ${book_obj.name} Chapter ${chapter} online in multiple translations.`,
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

        <div className="bg-white rounded-3xl p-6 mb-4">
          <span className="pill bg-[#007AFF]/[0.08] text-[color:var(--color-primary)] mb-2 inline-block">{book_obj.name}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-label)] mb-2">Chapter {chapter}</h1>
          <p className="text-base text-[color:var(--color-secondary-label)]">
            {hasVerses
              ? `${initialVerses.length} verses — switch translations with the toolbar below.`
              : 'Read this chapter in multiple translations.'}
          </p>
        </div>

        <ReadingFilters />

        <div className="space-y-4 mt-4">
          {hasVerses && (
            <VerseDisplay
              bookSlug={book}
              chapter={chapter}
              initialVerses={initialVerses}
              explainedVerses={explainedVerses}
              defaultTranslation={defaultTranslation}
            />
          )}
        </div>

        <StudyBanner bookSlug={book} bookName={book_obj.name} chapter={chapter} />

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
