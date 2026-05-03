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
    title: `${book_obj.name} - ${testament} Bible Study | Learn of Christ`,
    description: `${book_obj.description} Study all ${book_obj.chapters} chapters of ${book_obj.name} with commentary, key themes, and connections to Christ.`,
    openGraph: {
      title: `${book_obj.name} — Bible Study Guide`,
      description: book_obj.description,
      url: `https://learnofchrist.com/bible/${book}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/bible/${book}`,
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);

  if (!book_obj) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-[color:var(--color-label)] mb-3">Book Not Found</h1>
          <p className="text-[color:var(--color-secondary-label)] mb-6">The book you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/bible" className="btn-primary">Back to Bible Study</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Bible', href: '/bible' }, { label: book_obj.name, href: '#' }]} />

        <div className="bg-[color:var(--color-surface)] rounded-3xl p-6 mb-6">
          <span className={`inline-block text-[0.75rem] font-medium px-3 py-1 rounded-full mb-3 ${
            book_obj.testament === 'apocrypha'
              ? 'text-[#AF52DE] bg-[#AF52DE]/[0.08]'
              : 'text-[color:var(--color-primary)] bg-[color:var(--vesper-gold)]/[0.08]'
          }`}>
            {book_obj.testament === 'old' ? 'Old Testament' : book_obj.testament === 'apocrypha' ? 'Deuterocanonical' : 'New Testament'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-label)] tracking-tight mb-3">{book_obj.name}</h1>
          <p className="text-[0.9375rem] text-[color:var(--color-secondary-label)] leading-relaxed mb-4">{book_obj.description}</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[0.8125rem] font-medium text-[color:var(--color-primary)] bg-[color:var(--vesper-gold)]/[0.08] px-3 py-1 rounded-full">{book_obj.chapters} Chapters</span>
            <span className="text-[0.8125rem] font-medium text-[color:var(--color-secondary-label)] bg-[var(--color-bg)] px-3 py-1 rounded-full">{book_obj.abbreviation}</span>
            <Link href={`/study/${book}`} className="text-[0.8125rem] font-medium text-[color:var(--vesper-gold)] bg-[color:var(--vesper-gold)]/[0.08] px-3 py-1 rounded-full hover:bg-[color:var(--vesper-gold)]/[0.15] transition-colors">
              Study guides →
            </Link>
          </div>
        </div>

        <div className="px-1 mb-2">
          <p className="text-[0.8125rem] font-semibold text-[color:var(--color-secondary-label)]">Select a Chapter to Read</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {Array.from({ length: book_obj.chapters }, (_, i) => i + 1).map((chapter) => (
            <Link
              key={chapter}
              href={`/bible/${book}/${chapter}`}
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
