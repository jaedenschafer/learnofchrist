import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTranslations } from '@/data/translations';
import JsonLd from '@/components/JsonLd';
import './translations.css';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Bible Translations | Learn of Christ',
  description:
    'Explore eight English Bible translations from different Christian traditions. Compare wording, history, and choose the one that fits your study.',
  openGraph: {
    title: 'Bible Translations | Learn of Christ',
    description: 'Explore eight English Bible translations from different Christian traditions.',
    type: 'website',
  },
};

export default function TranslationsPage() {
  const translations = [...getAllTranslations()].sort((a, b) =>
    a.abbreviation.localeCompare(b.abbreviation),
  );

  return (
    <main className="loct">
      {/* ═══════════ Hero — closer-pane recipe over a sunset bloom ═══════════ */}
      <section className="loct-hero">
        {/* Sun circles, lifted from the home page closer. Warm peach +
            gold radial blooms behind a heavy frosted pane. */}
        <div className="loct-hero__sun" aria-hidden="true">
          <span className="loct-hero__sun-ring loct-hero__sun-ring--4" />
          <span className="loct-hero__sun-ring loct-hero__sun-ring--3" />
          <span className="loct-hero__sun-ring loct-hero__sun-ring--2" />
          <span className="loct-hero__sun-ring loct-hero__sun-ring--1" />
          <span className="loct-hero__sun-core" />
        </div>

        <div className="loct-wrap loct-hero__inner">
          <div className="loct-hero__pane">
            <p className="loct-eyebrow">Translations</p>
            <h1 className="loct-hero__title">
              Read the Bible<br />in your voice.
            </h1>
            <p className="loct-hero__sub">
              Eight English translations from across Christian tradition —
              the King James, the Berean Standard, the Douay-Rheims, the
              World English. Pick one to read; pick another to compare.
            </p>
            <div className="loct-hero__chips">
              <span className="loct-hero__chip">{translations.length} translations</span>
              <span className="loct-hero__chip-sep" aria-hidden="true">·</span>
              <span className="loct-hero__chip">All free, all online</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Grid — frost cards in alphabetical order ═══════════ */}
      <section className="loct-grid-section">
        <div className="loct-wrap">
          <p className="loct-eyebrow loct-grid__eyebrow">All translations · A → Z</p>
          <h2 className="loct-grid__title">Choose how you&rsquo;ll read.</h2>

          <div className="loct-grid">
            {translations.map((t) => (
              <article key={t.id} className="loct-card">
                <div className="loct-card__head">
                  <span className="loct-card__abbr">{t.abbreviation}</span>
                  <span className="loct-card__year">{t.year}</span>
                </div>
                <h3 className="loct-card__title">{t.name}</h3>
                <p className="loct-card__sub">{t.fullName}</p>

                <div className="loct-card__meta">
                  <span className="frost-chip">{t.tradition}</span>
                  <span className="frost-chip">{t.type}</span>
                </div>

                <p className="loct-card__copy">{t.description}</p>

                {/* Sample verse — pull quote in italic serif. */}
                {t.sampleVerse && (
                  <blockquote className="loct-card__quote">
                    <p className="loct-card__quote-text">
                      &ldquo;{t.sampleVerse.text}&rdquo;
                    </p>
                    <footer className="loct-card__quote-cite">
                      &mdash; {t.sampleVerse.reference}
                    </footer>
                  </blockquote>
                )}

                <div className="loct-card__actions">
                  <Link href={t.readLink} className="btn-primary loct-card__cta">
                    Read it
                  </Link>
                  <Link
                    href={`/bible/translations/${t.id}`}
                    className="btn-outline loct-card__cta"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Closer — quiet CTA back to the Bible ═══════════ */}
      <section className="loct-closer">
        <div className="loct-wrap loct-closer__inner">
          <div className="loct-closer__pane">
            <p className="loct-eyebrow loct-closer__eyebrow">Begin</p>
            <h2 className="loct-closer__title">
              Open the Bible in any of them.
            </h2>
            <p className="loct-closer__sub">
              Switch translations at the top of every chapter. Your study
              guide stays the same; the words change.
            </p>
            <Link href="/bible" className="btn-primary loct-closer__cta">
              Open the Bible
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Bible Translations',
          description:
            'Eight major English Bible translations from different Christian traditions.',
          url: 'https://learnofchrist.com/bible/translations',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: translations.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Book',
                name: t.fullName,
                alternateName: t.abbreviation,
                datePublished: t.year.toString(),
                description: t.description,
                url: `https://learnofchrist.com/bible/translations/${t.id}`,
              },
            })),
          },
        }}
      />
    </main>
  );
}
