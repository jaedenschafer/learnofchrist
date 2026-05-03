import Link from 'next/link';
import { bibleBooks } from '@/data/books';

/**
 * App-style "Today" dashboard band.
 *
 * Same visual recipe as before (sunset photo + glass cards on a dark
 * veil), but every element does real work:
 *
 *   1. Greeting + today's date — orients the visitor in time.
 *   2. Verse of the day — a real KJV line in serif type.
 *   3. Today's chapter — the rotation pick wired to /study/[book]/[ch].
 *   4. Three quick links — Bible, Art, Blog — all with destinations
 *      that actually exist on the site.
 *
 * Replaces the previous "How is your soul today? / Reflect" rows that
 * pointed at non-existent flows. The verse text is paired with the
 * chosen chapter so the section reads as one coherent moment.
 *
 * Server component. Date and the daily pick are computed at request
 * time and cached via the page's ISR window.
 */

// One coherent daily moment: chapter pick + a verse from that chapter
// + a one-line preview of what the study covers. Picks rotate by day.
const DAILY_PICKS: Array<{
  book: string;
  chapter: number;
  verse: string;
  verseRef: string;
  copy: string;
}> = [
  {
    book: 'genesis',
    chapter: 1,
    verse: 'In the beginning God created the heaven and the earth.',
    verseRef: 'Genesis 1:1',
    copy: 'The seven days, the Hebrew behind the words, and how the chapter sets up the whole story of scripture.',
  },
  {
    book: 'psalms',
    chapter: 23,
    verse: 'The Lord is my shepherd; I shall not want.',
    verseRef: 'Psalm 23:1',
    copy: 'A short psalm of comfort. The shepherd, the valley, the table prepared in the presence of enemies.',
  },
  {
    book: 'john',
    chapter: 1,
    verse: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    verseRef: 'John 1:1',
    copy: 'John&rsquo;s prologue answers Genesis 1 — light, life, and the Word made flesh.',
  },
  {
    book: 'romans',
    chapter: 8,
    verse: 'There is therefore now no condemnation to them which are in Christ Jesus.',
    verseRef: 'Romans 8:1',
    copy: 'Paul&rsquo;s great chapter on the Spirit, suffering, and the love that nothing can separate us from.',
  },
  {
    book: 'matthew',
    chapter: 5,
    verse: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.',
    verseRef: 'Matthew 5:3',
    copy: 'The Sermon on the Mount begins. The Beatitudes — blessing on the meek, the merciful, the persecuted.',
  },
  {
    book: 'isaiah',
    chapter: 53,
    verse: 'He is despised and rejected of men; a man of sorrows, and acquainted with grief.',
    verseRef: 'Isaiah 53:3',
    copy: 'The clearest Old Testament portrait of the suffering Messiah, written seven centuries before the cross.',
  },
  {
    book: 'philippians',
    chapter: 4,
    verse: 'And the peace of God, which passeth all understanding, shall keep your hearts and minds.',
    verseRef: 'Philippians 4:7',
    copy: 'Paul&rsquo;s closing chapter on prayer, contentment, and the peace that passes understanding.',
  },
];

function pickByDay<T>(arr: T[]): T {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return arr[day % arr.length];
}

function greetingFor(hour: number): string {
  if (hour < 5) return 'Good evening';
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  if (hour < 21) return 'Good evening';
  return 'Good evening';
}

export default function AppDashboard() {
  const now = new Date();
  const pick = pickByDay(DAILY_PICKS);
  const book = bibleBooks.find((b) => b.name.toLowerCase() === pick.book);
  const bookLabel = book ? book.name : pick.book;
  const day = now.getDate();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const greeting = greetingFor(now.getHours());
  const dateLabel = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="loc-dash" aria-label="Today">
      {/* Sunrise mountain ridge — light enough that the cards' white
          frost stays translucent, dim enough that white text reads. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85"
        alt=""
        className="loc-dash__bg"
        loading="lazy"
        decoding="async"
      />
      <div className="loc-dash__veil" aria-hidden="true" />

      <div className="loc-wrap loc-dash__inner">
        {/* ── Greeting + date ─────────────────────────── */}
        <header className="loc-dash__greet">
          <div className="loc-dash__avatar" aria-hidden="true">
            {/* Open book — replaces the generic person silhouette */}
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.5a1.5 1.5 0 0 1 1.5-1.5H11v15H4.5A1.5 1.5 0 0 1 3 17.5v-12zM21 5.5A1.5 1.5 0 0 0 19.5 4H13v15h6.5a1.5 1.5 0 0 0 1.5-1.5v-12zM12 19V4"
              />
            </svg>
          </div>
          <div className="loc-dash__greet-body">
            <p className="loc-dash__hello">
              <span className="loc-dash__sun" aria-hidden="true">&#9728;</span>
              {greeting}, friend
            </p>
            <p className="loc-dash__hello-sub">{dateLabel}</p>
          </div>
        </header>

        {/* ── Verse of the day ────────────────────────── */}
        <p className="loc-dash__eyebrow">Verse of the day</p>
        <h2
          className="loc-dash__title"
          dangerouslySetInnerHTML={{ __html: `&ldquo;${pick.verse}&rdquo;` }}
        />
        <p className="loc-dash__attribution">— {pick.verseRef} · KJV</p>

        {/* ── Today's chapter card ────────────────────── */}
        <article className="loc-dash__card">
          <div className="loc-dash__card-head">
            <p className="loc-dash__card-eyebrow">Today&rsquo;s chapter</p>
            <p className="loc-dash__card-meta">~10 min read</p>
          </div>
          <div className="loc-dash__card-body">
            <div className="loc-dash__date" aria-hidden="true">
              <strong>{day}</strong>
              <span>{month}</span>
            </div>
            <div className="loc-dash__card-copy">
              <p className="loc-dash__card-ref">
                {bookLabel} {pick.chapter}
              </p>
              <p
                className="loc-dash__card-text"
                dangerouslySetInnerHTML={{ __html: pick.copy }}
              />
            </div>
          </div>
          <Link
            href={`/study/${pick.book}/${pick.chapter}`}
            className="loc-dash__card-cta"
          >
            Open chapter
          </Link>
        </article>

        {/* ── Real quick links ────────────────────────── */}
        <Link href="/bible" className="loc-dash__row">
          <span className="loc-dash__row-label">Browse the full Bible</span>
          <span className="loc-dash__row-meta">66 books</span>
        </Link>

        <Link href="/art" className="loc-dash__row">
          <span className="loc-dash__row-label">Explore the art library</span>
          <span className="loc-dash__row-meta">1,000+ works</span>
        </Link>

        <Link href="/blog" className="loc-dash__row">
          <span className="loc-dash__row-label">Read from the blog</span>
          <span className="loc-dash__row-add" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
