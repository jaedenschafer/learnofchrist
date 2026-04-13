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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {books.map((book) => {
        const slug = bookNameToSlug(book.name);
        return (
          <Link
            key={book.id}
            href={`/bible/${slug}`}
            className="bg-white rounded-2xl text-center py-4 px-3 group active:scale-[0.97] transition-all hover:shadow-md"
          >
            <h3 className="text-[0.875rem] font-semibold text-[#1D1D1F] mb-0.5 group-hover:text-[#007AFF] transition-colors">{book.name}</h3>
            <p className="text-[0.75rem] text-[#AEAEB2]">{book.chapters} ch</p>
          </Link>
        );
      })}
    </div>
  );
}
