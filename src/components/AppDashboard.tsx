import Link from 'next/link';
import { bibleBooks } from '@/data/books';

/**
 * App-style dashboard band — modeled on the Mental Health reference.
 *
 * Vertical stack of liquid-glass surfaces over an atmospheric sunset
 * backdrop. Mirrors the iOS dashboard pattern: greeting + avatar at
 * top, a big serif "Today's Reflection" headline, a primary glass card
 * with Today/Yesterday tabs and a date chip, then two prompt rows
 * ("How is your soul today?" / "Continue your study plan").
 *
 * Server component. The date and the daily chapter pick are computed
 * at request time (cached via the page's ISR revalidate window). No
 * client JS — taps go through plain Link navigation.
 */

const REFLECTIONS = [
  { title: 'Healing isn’t linear.', sub: 'Honor your pace.' },
  { title: 'The Word is a lamp.', sub: 'Walk by it today.' },
  { title: 'Be still,', sub: 'and know that He is God.' },
  { title: 'Mercy is new', sub: 'every morning.' },
  { title: 'You are seen.', sub: 'You are loved.' },
  { title: 'Slow your breath,', sub: 'open the page.' },
  { title: 'Faith comes', sub: 'by hearing the Word.' },
];

// A small, hand-picked rotation of starter chapters — short enough to
// finish in one sitting, varied across Old and New Testaments.
const DAILY_PICKS: Array<{ book: string; chapter: number; copy: string }> = [
  { book: 'genesis',     chapter: 1,  copy: 'In the beginning. Walk through the seven days, the Hebrew behind the words, and how the chapter points to Christ.' },
  { book: 'psalms',      chapter: 23, copy: 'The Lord is my shepherd. A short psalm of comfort with deep roots in the wilderness wandering.' },
  { book: 'john',        chapter: 1,  copy: 'In the beginning was the Word. John’s prologue answers Genesis 1 — light, life, and the Word made flesh.' },
  { book: 'romans',      chapter: 8,  copy: 'No condemnation. Paul’s great chapter on the Spirit, suffering, and the love that nothing can separate us from.' },
  { book: 'matthew',     chapter: 5,  copy: 'The Sermon on the Mount begins. The Beatitudes — blessing on the meek, the merciful, the persecuted.' },
  { book: 'isaiah',      chapter: 53, copy: 'A man of sorrows, acquainted with grief. The clearest Old Testament portrait of the suffering Messiah.' },
  { book: 'philippians', chapter: 4,  copy: 'Rejoice in the Lord always. Paul’s closing chapter on prayer, contentment, and the peace that passes understanding.' },
];

function pickByDay<T>(arr: T[]): T {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return arr[day % arr.length];
}

function greetingFor(hour: number): string {
  if (hour < 5) return 'Peace to you tonight';
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  if (hour < 21) return 'Good evening';
  return 'Peace to you tonight';
}

export default function AppDashboard() {
  const now = new Date();
  const reflection = pickByDay(REFLECTIONS);
  const pick = pickByDay(DAILY_PICKS);
  const book = bibleBooks.find((b) => b.name.toLowerCase() === pick.book);
  const bookLabel = book ? book.name : pick.book;
  const day = now.getDate();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const greeting = greetingFor(now.getHours());

  return (
    <section className="loc-dash" aria-label="Today">
      {/* Sunrise mountain ridge — the kind of light you wake up to for
          morning prayer. Light enough that the cards' white frost stays
          translucent, dim enough that white text reads cleanly. */}
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
        {/* ── Greeting ─────────────────────────────────── */}
        <header className="loc-dash__greet">
          <div className="loc-dash__avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
              />
            </svg>
          </div>
          <div className="loc-dash__greet-body">
            <p className="loc-dash__hello">
              <span className="loc-dash__sun" aria-hidden="true">&#9728;</span>
              {greeting}, friend
            </p>
            <p className="loc-dash__hello-sub">How is your soul today?</p>
          </div>
          <button
            type="button"
            className="loc-dash__more"
            aria-label="More"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="6" cy="12" r="1.6" fill="currentColor" />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              <circle cx="18" cy="12" r="1.6" fill="currentColor" />
            </svg>
          </button>
        </header>

        {/* ── Reflection headline ──────────────────────── */}
        <p className="loc-dash__eyebrow">Today&rsquo;s reflection</p>
        <h2 className="loc-dash__title">
          {reflection.title}
          <br />
          {reflection.sub}
        </h2>

        {/* ── Reading card ─────────────────────────────── */}
        <article className="loc-dash__card">
          <div className="loc-dash__card-head">
            <p className="loc-dash__card-eyebrow">Your reading</p>
            <div className="loc-dash__tabs" role="tablist">
              <span className="loc-dash__tab is-active" role="tab" aria-selected="true">Today</span>
              <span className="loc-dash__tab" role="tab" aria-selected="false">Yesterday</span>
            </div>
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
              <p className="loc-dash__card-text">{pick.copy}</p>
            </div>
          </div>
          <Link
            href={`/study/${pick.book}/${pick.chapter}`}
            className="loc-dash__card-cta"
          >
            Open chapter
          </Link>
        </article>

        {/* ── Prompt rows ──────────────────────────────── */}
        <Link href="/study" className="loc-dash__row">
          <span className="loc-dash__row-label">How is your soul today?</span>
          <span className="loc-dash__row-pill">Reflect</span>
        </Link>

        <Link href="/study-plans" className="loc-dash__row">
          <span className="loc-dash__row-label">Continue your study plan</span>
          <span className="loc-dash__row-add" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                d="M12 6v12M6 12h12"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
