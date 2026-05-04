import Link from 'next/link';
import './ChapterNav.css';

interface ChapterNavProps {
  bookName: string;
  currentChapter: number;
  totalChapters: number;
  previousUrl?: string;
  nextUrl?: string;
}

/**
 * Chapter pager rendered at the bottom of every study chapter (and bible
 * reader). Closes the page with an ornament + prev/next/center signature
 * so the page reads like a printed book section break, not a stranded
 * column of text.
 */
export default function ChapterNav({
  bookName,
  currentChapter,
  totalChapters,
  previousUrl,
  nextUrl,
}: ChapterNavProps) {
  return (
    <nav className="chapter-pager" aria-label="Chapter navigation">
      <div className="chapter-pager__row">
        {previousUrl ? (
          <Link href={previousUrl} className="chapter-pager__btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </Link>
        ) : (
          <span className="chapter-pager__btn chapter-pager__btn--disabled" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </span>
        )}

        <div className="chapter-pager__center">
          <p className="chapter-pager__book">{bookName}</p>
          <p className="chapter-pager__count">
            Chapter {currentChapter} of {totalChapters}
          </p>
        </div>

        {nextUrl ? (
          <Link href={nextUrl} className="chapter-pager__btn chapter-pager__btn--next">
            <span>Next</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span className="chapter-pager__btn chapter-pager__btn--next chapter-pager__btn--disabled" aria-hidden="true">
            <span>Next</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </nav>
  );
}
