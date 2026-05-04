import Link from 'next/link';
import { getOldTestamentBooks, getNewTestamentBooks, getApocryphaBooks } from '@/data/books';
import BookGrid from '@/components/BookGrid';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Read the Bible Online — All 72 Books, 8 Translations | Learn of Christ',
  description: 'Read every chapter of the Bible online. Switch between 8 translations including KJV, JST, NWT, BSB, ASV, WEB, LSV, and DRA. Each chapter links to a deep study guide.',
  openGraph: {
    title: 'Read the Bible — Learn of Christ',
    description: 'Read every chapter of the Bible with real-time translation switching.',
    url: 'https://learnofchrist.com/bible',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/bible',
  },
};

const POPULAR_CHAPTERS = [
  { book: 'john', chapter: 1, title: 'John 1', subtitle: 'The Word Made Flesh' },
  { book: 'genesis', chapter: 1, title: 'Genesis 1', subtitle: 'Creation of the World' },
  { book: 'psalms', chapter: 23, title: 'Psalm 23', subtitle: 'The Lord Is My Shepherd' },
  { book: 'john', chapter: 3, title: 'John 3', subtitle: 'For God So Loved the World' },
  { book: 'romans', chapter: 8, title: 'Romans 8', subtitle: 'No Condemnation in Christ' },
  { book: '1-corinthians', chapter: 13, title: '1 Corinthians 13', subtitle: 'The Love Chapter' },
];

function SectionHeading({ eyebrow, title, count }: { eyebrow?: string; title: string; count?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-5 px-1">
      <div>
        {eyebrow && (
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] mb-1" style={{ color: 'var(--vesper-gold)' }}>
            {eyebrow}
          </p>
        )}
        <h2 className="text-[1.375rem] sm:text-2xl font-bold tracking-tight text-[color:var(--color-label)]">{title}</h2>
      </div>
      {count && (
        <span className="pill pill-gold">{count}</span>
      )}
    </div>
  );
}

export default function BiblePage() {
  const oldTestament = getOldTestamentBooks();
  const newTestament = getNewTestamentBooks();
  const apocrypha = getApocryphaBooks();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">

        {/* ── Hero ── */}
        <section className="hero-surface relative mb-10 overflow-hidden rounded-[32px]">
          {/* Decorative warm blobs — Vesper peach + gold */}
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full pointer-events-none blur-3xl"
               style={{ background: 'radial-gradient(circle, rgba(232,184,148,0.32), transparent 70%)' }} />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full pointer-events-none blur-3xl"
               style={{ background: 'radial-gradient(circle, rgba(200,150,74,0.22), transparent 70%)' }} />

          <div className="relative px-6 sm:px-10 py-10 sm:py-14 text-center">
            <span className="hero-pill inline-block text-[0.6875rem] font-semibold backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-[0.18em] mb-5"
                  style={{ color: 'var(--vesper-gold)' }}>
              Read Online · Free Forever
            </span>
            <h1 className="text-[2.25rem] sm:text-5xl font-bold tracking-tight text-[color:var(--color-label)] mb-3 leading-[1.05]">
              Read the Bible
            </h1>
            <p className="text-[0.9375rem] sm:text-[1.0625rem] text-[color:var(--color-label)] max-w-xl mx-auto leading-relaxed mb-7">
              All 66 books plus 6 Deuterocanonical books.
              Switch between eight translations in real time as you read.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center mb-8">
              <Link href="/bible/john/1" className="btn-primary">
                Start reading
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/study" className="btn-secondary">
                Study guides
              </Link>
            </div>

            {/* Inline stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-[color:var(--color-label)]">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">72</span>
                <span className="text-[color:var(--color-secondary-label)]">books</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[color:var(--color-tertiary-label)] opacity-40" />
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">1,320</span>
                <span className="text-[color:var(--color-secondary-label)]">chapters</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[color:var(--color-tertiary-label)] opacity-40" />
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">8</span>
                <span className="text-[color:var(--color-secondary-label)]">translations</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Popular Chapters ── */}
        <section className="mb-12">
          <SectionHeading eyebrow="Start here" title="Popular Chapters" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {POPULAR_CHAPTERS.map((item) => (
              <Link
                key={`${item.book}/${item.chapter}`}
                href={`/bible/${item.book}/${item.chapter}`}
                className="card group relative overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="pill pill-gold text-[0.625rem] uppercase tracking-wider">Read</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                       style={{ color: 'var(--vesper-gold)' }}
                       fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-[1.125rem] font-bold text-[color:var(--color-label)] mb-0.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] leading-snug">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Old Testament ── */}
        <section className="mb-12">
          <SectionHeading eyebrow="39 Books" title="Old Testament" />
          <BookGrid books={oldTestament} />
        </section>

        {/* ── New Testament ── */}
        <section className="mb-12">
          <SectionHeading eyebrow="27 Books" title="New Testament" />
          <BookGrid books={newTestament} />
        </section>

        {/* ── Deuterocanonical ── */}
        <section>
          <SectionHeading eyebrow={`${apocrypha.length} Books`} title="Deuterocanonical" />
          <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mb-4 px-1 leading-relaxed">
            Included in Catholic and Orthodox Bibles. Available in the Douay-Rheims American (DRA) translation.
          </p>
          <BookGrid books={apocrypha} />
        </section>

      </div>
    </div>
  );
}
