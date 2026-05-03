import Link from 'next/link';

export default function StudyBanner({
  bookSlug,
  bookName,
  chapter,
}: {
  bookSlug: string;
  bookName: string;
  chapter: number;
}) {
  return (
    <Link
      href={`/study/${bookSlug}/${chapter}`}
      className="block mt-6 bg-gradient-to-br from-[color:var(--vesper-gold)] to-[color:var(--vesper-gold)] rounded-3xl p-6 group active:scale-[0.99] transition-transform"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[0.6875rem] font-semibold text-white/70 uppercase tracking-wider mb-0.5">Go Deeper</p>
          <p className="text-[1.0625rem] font-semibold text-white leading-tight">
            Read the study guide for {bookName} {chapter}
          </p>
          <p className="text-[0.8125rem] text-white/80 mt-0.5">
            Themes, questions, Christ connections, and denomination lenses
          </p>
        </div>
        <svg className="w-6 h-6 text-white/70 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
