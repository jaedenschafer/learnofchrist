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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
      {books.map((book) => {
        const slug = bookNameToSlug(book.name);
        return (
          <Link
            key={book.id}
            href={`/bible/${slug}`}
            className="card text-center py-4 px-3 group active:scale-[0.97] transition-all"
          >
            <h3 className="font-sans text-sm font-semibold text-navy mb-1 group-hover:text-gold transition-colors">{book.name}</h3>
            <p className="text-xs text-navy/40">{book.chapters} chapters</p>
          </Link>
        );
      })}
    </div>
  );
}
