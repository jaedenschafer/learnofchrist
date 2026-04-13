import Link from 'next/link';

interface ChapterNavProps {
  bookName: string;
  currentChapter: number;
  totalChapters: number;
  previousUrl?: string;
  nextUrl?: string;
}

export default function ChapterNav({ bookName, currentChapter, totalChapters, previousUrl, nextUrl }: ChapterNavProps) {
  return (
    <div className="mt-8 card flex flex-col sm:flex-row items-center justify-between gap-4 !p-4">
      <div className="flex-1 w-full sm:w-auto">
        {previousUrl ? (
          <Link href={previousUrl} className="btn-outline w-full sm:w-auto text-sm !py-2.5 !px-4 !rounded-xl">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Previous
          </Link>
        ) : (
          <button disabled className="btn-outline w-full sm:w-auto text-sm !py-2.5 !px-4 !rounded-xl opacity-30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Previous
          </button>
        )}
      </div>

      <div className="text-center order-first sm:order-none">
        <p className="font-sans text-sm font-semibold text-navy">{bookName}</p>
        <p className="text-xs text-navy/40">{currentChapter} of {totalChapters}</p>
      </div>

      <div className="flex-1 w-full sm:w-auto flex justify-end">
        {nextUrl ? (
          <Link href={nextUrl} className="btn-outline w-full sm:w-auto text-sm !py-2.5 !px-4 !rounded-xl">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ) : (
          <button disabled className="btn-outline w-full sm:w-auto text-sm !py-2.5 !px-4 !rounded-xl opacity-30">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}
