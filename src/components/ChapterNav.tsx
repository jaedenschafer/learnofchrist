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
    <div className="mt-6 bg-white rounded-2xl p-4 flex items-center justify-between gap-3">
      <div className="flex-1">
        {previousUrl ? (
          <Link href={previousUrl} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.8125rem] font-medium text-[#007AFF] bg-[#007AFF]/[0.08] hover:bg-[#007AFF]/[0.12] transition-colors active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            Prev
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.8125rem] font-medium text-[#AEAEB2]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            Prev
          </span>
        )}
      </div>

      <div className="text-center">
        <p className="text-[0.8125rem] font-semibold text-[#1D1D1F]">{bookName}</p>
        <p className="text-[0.6875rem] text-[#AEAEB2]">{currentChapter} of {totalChapters}</p>
      </div>

      <div className="flex-1 flex justify-end">
        {nextUrl ? (
          <Link href={nextUrl} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.8125rem] font-medium text-[#007AFF] bg-[#007AFF]/[0.08] hover:bg-[#007AFF]/[0.12] transition-colors active:scale-95">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.8125rem] font-medium text-[#AEAEB2]">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </span>
        )}
      </div>
    </div>
  );
}
