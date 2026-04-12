import Link from 'next/link';
import { getAllBooks, getBookByName } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface BookPageProps {
  params: Promise<{
    book: string;
  }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') {
    return '';
  }
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export async function generateStaticParams() {
  const books = getAllBooks();
  // Only pre-render Genesis and John to keep build times reasonable
  return books
    .filter(book => book.name === 'Genesis' || book.name === 'John')
    .map((book) => ({
      book: bookNameToSlug(book.name),
    }));
}

export default async function BookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);

  if (!book_obj) {
    return (
      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-navy mb-4">Book Not Found</h1>
          <p className="text-lg text-navy/80 mb-8">The Bible book you're looking for couldn't be found.</p>
          <Link href="/bible" className="btn-primary">
            Back to Bible Study
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BreadcrumbNav items={[{ label: 'Bible', href: '/bible' }, { label: book_obj.name, href: '#' }]} />

        <div className="card mb-8">
          <div className="mb-4">
            <span className="text-xs font-semibold text-sage uppercase tracking-wide">
              {book_obj.testament === 'old' ? 'Old Testament' : 'New Testament'}
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">{book_obj.name}</h1>
          <p className="text-lg text-navy/80 mb-6">{book_obj.description}</p>
          <div className="flex gap-4 text-sm">
            <div className="bg-gold/20 text-navy px-4 py-2 rounded">
              <span className="font-semibold">{book_obj.chapters}</span> Chapters
            </div>
            <div className="bg-sage/20 text-navy px-4 py-2 rounded">
              <span className="font-semibold">{book_obj.abbreviation}</span> Abbreviation
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-navy mb-6">Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Array.from({ length: book_obj.chapters }, (_, i) => i + 1).map((chapter) => (
              <Link
                key={chapter}
                href={`/bible/${book}/${chapter}`}
                className="card text-center hover:scale-105 transition-transform duration-200 py-4"
              >
                <span className="font-serif text-xl font-bold text-navy">{chapter}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
