import Link from 'next/link';
import { getAllBooks, getBookByName } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';

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
  return books
    .filter(book => book.name === 'Genesis' || book.name === 'John')
    .map((book) => ({ book: bookNameToSlug(book.name) }));
}

export default async function BookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);

  if (!book_obj) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Book Not Found</h1>
          <p className="text-navy/50 mb-6">The book you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/bible" className="btn-primary">Back to Bible Study</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Bible', href: '/bible' }, { label: book_obj.name, href: '#' }]} />

        <div className="card mb-6">
          <span className="pill pill-sage mb-3 inline-block">
            {book_obj.testament === 'old' ? 'Old Testament' : 'New Testament'}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">{book_obj.name}</h1>
          <p className="text-sm text-navy/55 leading-relaxed mb-5">{book_obj.description}</p>
          <div className="flex gap-2.5">
            <span className="pill pill-gold">{book_obj.chapters} Chapters</span>
            <span className="pill bg-navy/5 text-navy/60">{book_obj.abbreviation}</span>
          </div>
        </div>

        <div className="px-1 mb-3">
          <p className="section-header">Select a Chapter</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {Array.from({ length: book_obj.chapters }, (_, i) => i + 1).map((chapter) => (
            <Link
              key={chapter}
              href={`/bible/${book}/${chapter}`}
              className="card text-center !p-3 active:scale-95 transition-all group"
            >
              <span className="font-sans text-base font-semibold text-navy group-hover:text-gold transition-colors">{chapter}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
