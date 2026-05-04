import Link from 'next/link';

/**
 * "Go deeper / Read the study guide for {book} {chapter}" banner that
 * sits at the bottom of every plain-reader chapter page. Used to be a
 * solid gold pane with white text; now uses the closer-pane frost recipe
 * so it matches the rest of the site — translucent cream plate, gold
 * eyebrow, dark body text.
 */
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
      className="card-elevated block mt-6 group active:scale-[0.99]"
    >
      <div className="flex items-center gap-4">
        <div className="feature-icon">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[0.6875rem] font-semibold text-[color:var(--vesper-gold)] uppercase tracking-wider mb-0.5">
            Go deeper
          </p>
          <p className="text-[1.0625rem] font-semibold text-[color:var(--color-label)] leading-tight">
            Read the study guide for {bookName} {chapter}
          </p>
          <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mt-0.5">
            Themes, questions, Christ connections, and denomination lenses
          </p>
        </div>
        <svg
          className="w-6 h-6 text-[color:var(--color-tertiary-label)] flex-shrink-0 group-hover:translate-x-0.5 group-hover:text-[color:var(--vesper-gold)] transition-all"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
