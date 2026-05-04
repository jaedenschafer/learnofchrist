import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

interface BookPageProps {
  params: Promise<{ book: string }>;
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
  return books.map((book) => ({ book: bookNameToSlug(book.name) }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);

  if (!book_obj) {
    return { title: 'Book Not Found | Learn of Christ' };
  }

  const testament = book_obj.testament === 'old' ? 'Old Testament' : book_obj.testament === 'apocrypha' ? 'Deuterocanonical' : 'New Testament';
  return {
    title: `${book_obj.name} Study Guide - ${testament} | Learn of Christ`,
    description: `${book_obj.description} Study all ${book_obj.chapters} chapters of ${book_obj.name} with commentary, key themes, and connections to Christ.`,
    openGraph: {
      title: `${book_obj.name} — Bible Study Guide`,
      description: book_obj.description,
      url: `https://learnofchrist.com/study/${book}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/study/${book}`,
    },
  };
}

export default async function StudyBookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);

  if (!book_obj) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-[color:var(--color-label)] mb-3">Book Not Found</h1>
          <p className="text-[color:var(--color-secondary-label)] mb-6">The book you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/study" className="btn-primary">Back to Study Guides</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Study', href: '/study' }, { label: book_obj.name, href: '#' }]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            <span className={book_obj.testament === 'apocrypha' ? 'study-hero__kicker-apoc' : 'study-hero__kicker-book'}>
              {book_obj.testament === 'old' ? 'Old Testament' : book_obj.testament === 'apocrypha' ? 'Deuterocanonical' : 'New Testament'}
            </span>
            <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
            <span>{book_obj.chapters} Chapters</span>
          </p>
          <h1 className="study-hero__title">{book_obj.name}</h1>
          <p className="study-hero__dek">{book_obj.description}</p>
          <div className="study-hero__meta">
            <Link href={`/bible/${book}`} className="study-hero__meta-link">
              Read {book_obj.name}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <div className="px-1 mb-2">
          <p className="text-[0.8125rem] font-semibold text-[color:var(--color-secondary-label)]">Select a Chapter to Study</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {Array.from({ length: book_obj.chapters }, (_, i) => i + 1).map((chapter) => (
            <Link
              key={chapter}
              href={`/study/${book}/${chapter}`}
              className="bg-[color:var(--color-surface)] rounded-2xl text-center py-3 active:scale-95 transition-all group hover:shadow-md"
            >
              <span className="text-base font-semibold text-[color:var(--color-label)] group-hover:text-[color:var(--color-primary)] transition-colors">{chapter}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
