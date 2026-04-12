import Link from 'next/link';
import { BibleBook } from '@/data/books';

interface BookGridProps {
  books: BibleBook[];
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => {
        const slug = bookNameToSlug(book.name);
        return (
          <Link
            key={book.id}
            href={`/bible/${slug}`}
            className="card hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <div className="text-center">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">{book.name}</h3>
              <p className="text-sm text-sage mb-3">{book.chapters} chapters</p>
              <p className="text-xs text-cream/60 bg-sage/20 rounded px-2 py-1 inline-block">{book.testament === 'old' ? 'Old Testament' : 'New Testament'}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
