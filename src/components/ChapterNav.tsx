import Link from 'next/link';

interface ChapterNavProps {
  bookName: string;
  currentChapter: number;
  totalChapters: number;
  previousUrl?: string;
  nextUrl?: string;
}

export default function ChapterNav({
  bookName,
  currentChapter,
  totalChapters,
  previousUrl,
  nextUrl,
}: ChapterNavProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 border-t border-cream">
      <div className="flex-1 text-center sm:text-left">
        {previousUrl ? (
          <Link href={previousUrl} className="btn-outline inline-block">
            Previous Chapter
          </Link>
        ) : (
          <button disabled className="btn-outline inline-block opacity-50 cursor-not-allowed">
            Previous Chapter
          </button>
        )}
      </div>

      <div className="text-center text-sm text-sage">
        <p className="font-medium text-navy">{bookName}</p>
        <p>Chapter {currentChapter} of {totalChapters}</p>
      </div>

      <div className="flex-1 text-center sm:text-right">
        {nextUrl ? (
          <Link href={nextUrl} className="btn-outline inline-block">
            Next Chapter
          </Link>
        ) : (
          <button disabled className="btn-outline inline-block opacity-50 cursor-not-allowed">
            Next Chapter
          </button>
        )}
      </div>
    </div>
  );
}
