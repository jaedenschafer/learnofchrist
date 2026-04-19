import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTranslations } from '@/data/translations';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Bible Translations | Learn of Christ',
  description: 'Explore 8 major English Bible translations from different Christian traditions. Compare translations, learn their history, and choose the one that works best for your study.',
  openGraph: {
    title: 'Bible Translations | Learn of Christ',
    description: 'Explore 8 major English Bible translations from different Christian traditions.',
    type: 'website',
  },
};

export default function TranslationsPage() {
  const translations = getAllTranslations();

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Section */}
      <div className="bg-[color:var(--color-surface)] border-b border-[color:var(--color-separator)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BreadcrumbNav items={[
            { label: 'Home', href: '/' },
            { label: 'Bible', href: '/bible' },
            { label: 'Translations' },
          ]} />

          <div className="mt-8">
            <h1 className="font-sans text-3xl sm:text-4xl font-bold text-[color:var(--color-label)]">Bible Translations</h1>
            <p className="mt-4 text-base text-[color:var(--color-secondary-label)] max-w-2xl">
              Explore 8 major English Bible translations representing different Christian traditions, translation philosophies, and scholarly approaches. Each translation offers unique strengths for study, devotion, and contemplation.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="inline-block text-[0.75rem] font-medium px-3 py-1 rounded-full text-[color:var(--color-primary)] bg-[#007AFF]/[0.08]">
                {translations.length} translations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Translations Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translations.map((t) => (
            <div key={t.id} className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block text-[0.8125rem] font-bold px-3 py-1 rounded-full text-[color:var(--color-primary)] bg-[#007AFF]/[0.08]">
                  {t.abbreviation}
                </span>
                <span className="text-[0.8125rem] text-[color:var(--color-secondary-label)]">{t.year}</span>
              </div>

              <h2 className="font-sans text-lg font-semibold text-[color:var(--color-label)] mb-1">{t.name}</h2>
              <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mb-3">{t.fullName}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] text-[#424245]">{t.tradition}</span>
                <span className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] text-[#424245]">{t.type}</span>
              </div>

              {/* Description */}
              <p className="text-[0.8125rem] text-[#424245] leading-relaxed mb-6 line-clamp-3">{t.description}</p>

              {/* Actions */}
              <div className="flex gap-3">
                <Link href={t.readLink} className="flex-1 text-center text-[0.8125rem] font-medium px-4 py-2 rounded-lg bg-[#007AFF] text-white hover:bg-[#0056D6] transition-colors">
                  Read Now
                </Link>
                <Link href={`/bible/translations/${t.id}`} className="flex-1 text-center text-[0.8125rem] font-medium px-4 py-2 rounded-lg border border-[#D5D5D9] text-[color:var(--color-primary)] hover:bg-[var(--color-bg)] transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Bible Translations',
            description: 'A collection of 8 major English Bible translations from different Christian traditions.',
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
          }),
        }}
      />
    </main>
  );
}
