import Link from 'next/link';
import { BibleBook } from '@/data/books';

interface BookGridProps {
  books: BibleBook[];
  basePath?: string;
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export default function BookGrid({ books, basePath = '/bible' }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {books.map((book) => {
        const slug = bookNameToSlug(book.name);
        return (
          <Link
            key={book.id}
            href={`${basePath}/${slug}`}
            className="group flex items-center justify-between bg-white border border-black/[0.04] rounded-2xl px-4 py-3.5 hover:border-[#007AFF]/30 hover:bg-[#007AFF]/[0.02] active:scale-[0.98] transition-all"
          >
            <div className="min-w-0 flex-1">
              <h3 className="text-[0.9375rem] font-semibold text-[#1D1D1F] truncate group-hover:text-[#007AFF] transition-colors">
                {book.name}
              </h3>
              <p className="text-[0.6875rem] text-[#AEAEB2] mt-0.5">
                {book.chapters} {book.chapters === 1 ? 'chapter' : 'chapters'}
              </p>
            </div>
            <svg className="w-4 h-4 text-[#D1D1D6] group-hover:text-[#007AFF] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        );
      })}
    </div>
  );
}
