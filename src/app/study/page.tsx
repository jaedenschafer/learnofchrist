import Link from 'next/link';
import { getOldTestamentBooks, getNewTestamentBooks, getApocryphaBooks } from '@/data/books';
import BookGrid from '@/components/BookGrid';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Bible Study Guides — Chapter-by-Chapter Commentary | Learn of Christ',
  description: 'Deep study guides for every chapter of the Bible. Overview, themes, questions, Christ connections, and 10 denominational lenses.',
  openGraph: {
    title: 'Bible Study Guides — Learn of Christ',
    description: 'Chapter-by-chapter study guides with themes, questions, and Christ connections.',
    url: 'https://learnofchrist.com/study',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/study',
  },
};

const FEATURED_STUDIES = [
  { book: 'john', chapter: 1, title: 'John 1', subtitle: 'The Word Made Flesh', tint: 'blue' },
  { book: 'genesis', chapter: 1, title: 'Genesis 1', subtitle: 'Creation of the World', tint: 'amber' },
  { book: 'psalms', chapter: 23, title: 'Psalm 23', subtitle: 'The Lord Is My Shepherd', tint: 'green' },
  { book: 'john', chapter: 3, title: 'John 3', subtitle: 'For God So Loved the World', tint: 'blue' },
  { book: 'genesis', chapter: 3, title: 'Genesis 3', subtitle: 'The Fall & First Promise', tint: 'purple' },
  { book: 'john', chapter: 14, title: 'John 14', subtitle: 'The Way, Truth & Life', tint: 'rose' },
];

const TINTS: Record<string, { bg: string; pill: string; accent: string }> = {
  blue: { bg: 'from-[#007AFF]/[0.08] to-[#007AFF]/[0.02]', pill: 'bg-[#007AFF]/[0.1] text-[color:var(--color-primary)]', accent: 'text-[color:var(--color-primary)]' },
  amber: { bg: 'from-[#FF9500]/[0.08] to-[#FF9500]/[0.02]', pill: 'bg-[#FF9500]/[0.1] text-[#C77700]', accent: 'text-[#C77700]' },
  green: { bg: 'from-[#34C759]/[0.08] to-[#34C759]/[0.02]', pill: 'bg-[#34C759]/[0.1] text-[#248A3D]', accent: 'text-[#248A3D]' },
  purple: { bg: 'from-[#5856D6]/[0.08] to-[#5856D6]/[0.02]', pill: 'bg-[#5856D6]/[0.1] text-[#5856D6]', accent: 'text-[#5856D6]' },
  rose: { bg: 'from-[#FF2D55]/[0.08] to-[#FF2D55]/[0.02]', pill: 'bg-[#FF2D55]/[0.1] text-[#D70040]', accent: 'text-[#D70040]' },
};

function SectionHeading({ eyebrow, title, accent = 'blue' }: { eyebrow?: string; title: string; accent?: 'blue' | 'purple' }) {
  return (
    <div className="flex items-baseline justify-between mb-5 px-1">
      <div>
        {eyebrow && (
          <p className={`text-[0.6875rem] font-semibold uppercase tracking-[0.08em] mb-1 ${accent === 'purple' ? 'text-[#5856D6]' : 'text-[color:var(--color-secondary-label)]'}`}>
            {eyebrow}
          </p>
        )}
        <h2 className="text-[1.375rem] sm:text-2xl font-bold tracking-tight text-[color:var(--color-label)]">{title}</h2>
      </div>
    </div>
  );
}

export default function StudyIndexPage() {
  const oldTestament = getOldTestamentBooks();
  const newTestament = getNewTestamentBooks();
  const apocrypha = getApocryphaBooks();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">

        {/* ── Hero ── */}
        <section className="hero-surface relative mb-10 overflow-hidden rounded-[32px]">
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#5856D6]/[0.08] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#007AFF]/[0.06] blur-3xl pointer-events-none" />

          <div className="relative px-6 sm:px-10 py-10 sm:py-14 text-center">
            <span className="hero-pill inline-block text-[0.6875rem] font-semibold text-[#5856D6] backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-[0.1em] mb-5">
              Study · Reflect · Grow
            </span>
            <h1 className="text-[2.25rem] sm:text-5xl font-bold tracking-tight text-[color:var(--color-label)] mb-3 leading-[1.05]">
              Study Guides
            </h1>
            <p className="text-[0.9375rem] sm:text-[1.0625rem] text-[color:var(--color-label)] max-w-xl mx-auto leading-relaxed mb-7">
              Chapter-by-chapter commentary with themes, questions,
              Christ connections, and ten denominational lenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center mb-8">
              <Link
                href="/study/john/1"
                className="inline-flex items-center justify-center gap-1.5 px-5 h-11 rounded-full bg-[#5856D6] text-white text-[0.9375rem] font-semibold hover:bg-[#3634A3] active:scale-[0.98] transition-all shadow-[0_1px_2px_rgba(88,86,214,0.2),0_4px_12px_rgba(88,86,214,0.2)]"
              >
                Start with John 1
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/bible"
                className="inline-flex items-center justify-center gap-1.5 px-5 h-11 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[color:var(--color-label)] text-[0.9375rem] font-semibold hover:border-black/[0.15] hover:bg-[color:var(--color-surface)] active:scale-[0.98] transition-all"
              >
                Just read the Bible
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-[color:var(--color-label)]">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">1,320</span>
                <span className="text-[color:var(--color-secondary-label)]">study guides</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[color:var(--color-tertiary-label)]" />
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">10</span>
                <span className="text-[color:var(--color-secondary-label)]">denominational lenses</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[color:var(--color-tertiary-label)]" />
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[color:var(--color-label)]">3</span>
                <span className="text-[color:var(--color-secondary-label)]">depth levels</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured ── */}
        <section className="mb-12">
          <SectionHeading eyebrow="Most popular" title="Featured Studies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURED_STUDIES.map((item) => {
              const tint = TINTS[item.tint];
              return (
                <Link
                  key={`${item.book}/${item.chapter}`}
                  href={`/study/${item.book}/${item.chapter}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tint.bg} bg-[color:var(--color-surface)] p-5 border border-[color:var(--color-separator)] hover:border-[color:var(--color-separator)] hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-[0.625rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tint.pill}`}>
                      Study
                    </span>
                    <svg className={`w-4 h-4 ${tint.accent} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[color:var(--color-label)] mb-0.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] leading-snug">{item.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading eyebrow="39 Books" title="Old Testament" />
          <BookGrid books={oldTestament} basePath="/study" />
        </section>

        <section className="mb-12">
          <SectionHeading eyebrow="27 Books" title="New Testament" />
          <BookGrid books={newTestament} basePath="/study" />
        </section>

        <section>
          <SectionHeading eyebrow={`${apocrypha.length} Books`} title="Deuterocanonical" accent="purple" />
          <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mb-4 px-1 leading-relaxed">
            Included in Catholic and Orthodox Bibles. Available in the Douay-Rheims American (DRA) translation.
          </p>
          <BookGrid books={apocrypha} basePath="/study" />
        </section>

      </div>
    </div>
  );
}
