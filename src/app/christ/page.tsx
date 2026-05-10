import Link from 'next/link';
import type { Metadata } from 'next';
import { getChristIndexHub } from '@/lib/christIndex';
import './christ.css';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'How Christ Appears in Every Book of the Bible | Learn of Christ',
  description:
    'A chapter-by-chapter index of how the Bible reveals Jesus Christ — from creation in Genesis to the new creation in Revelation. Every book, every chapter where Christ is foreshadowed, fulfilled, or revealed.',
  alternates: { canonical: 'https://learnofchrist.com/christ' },
  openGraph: {
    title: 'How Christ Appears in Every Book of the Bible',
    description:
      'A chapter-by-chapter index of how the Bible reveals Jesus Christ — from creation in Genesis to the new creation in Revelation.',
    url: 'https://learnofchrist.com/christ',
    type: 'article',
  },
};

export default function ChristIndexHub() {
  const summaries = getChristIndexHub();

  const oldTestament = summaries.filter((s) => s.book.testament === 'old');
  const newTestament = summaries.filter((s) => s.book.testament === 'new');
  const apocrypha = summaries.filter(
    (s) => s.book.testament === 'apocrypha' || s.book.testament === 'orthodox',
  );

  return (
    <div className="page-container">
      <article className="christ-hub max-w-4xl mx-auto">
        <header className="christ-hub__header">
          <p className="christ-hub__eyebrow">The Christ Index</p>
          <h1 className="christ-hub__title">How Christ Appears in Every Chapter of the Bible</h1>
          <p className="christ-hub__lede">
            From the first verse of Genesis to the last verse of Revelation, the
            whole Bible is one long story about one Person. This index walks
            chapter by chapter through every book, surfacing where Christ is
            foreshadowed, named, fulfilled, or seen — so the unity of Scripture
            stops being a doctrine you affirm and starts being something you
            can see for yourself.
          </p>
          <p className="christ-hub__lede">
            Pick a book to begin. Each chapter card on the next page shows in
            one paragraph how Christ appears there, and links to the full study
            guide for the chapter.
          </p>
        </header>

        <Section title="The Old Testament" items={oldTestament} />
        <Section title="The New Testament" items={newTestament} />
        {apocrypha.length > 0 && (
          <Section title="Deuterocanonical Books" items={apocrypha} />
        )}

        <footer className="christ-hub__foot">
          <p>
            <strong>How this index is built.</strong> Every chapter on Learn of
            Christ has a Christ Connection — a short paragraph that names how
            the chapter points to Jesus. This page aggregates all of them, so
            you can see the whole shape of Scripture pointing one direction.
            Hand-curated chapters are marked with a small dot.
          </p>
        </footer>
      </article>
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: ReturnType<typeof getChristIndexHub>;
}) {
  if (items.length === 0) return null;
  return (
    <section className="christ-hub__section">
      <h2 className="christ-hub__h2">{title}</h2>
      <ul className="christ-hub__grid">
        {items.map((s) => (
          <li key={s.slug}>
            <Link href={`/christ/${s.slug}`} className="christ-hub__card">
              <span className="christ-hub__card-name">{s.book.name}</span>
              <span className="christ-hub__card-meta">
                {s.totalSummaries} of {s.book.chapters} chapters
                {s.curatedCount > 0 && (
                  <span className="christ-hub__dot" title={`${s.curatedCount} hand-curated`} aria-label={`${s.curatedCount} hand-curated`}>
                    ●
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
