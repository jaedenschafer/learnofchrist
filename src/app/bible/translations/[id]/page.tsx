import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTranslations, getTranslationById } from '@/data/translations';
import BreadcrumbNav from '@/components/BreadcrumbNav';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

interface Params {
  id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return getAllTranslations().map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const t = getTranslationById(id);
  if (!t) return { title: 'Translation Not Found | Learn of Christ' };

  return {
    title: `${t.fullName} — History, Features & Study Guide | Learn of Christ`,
    description: t.description,
    openGraph: {
      title: `${t.fullName} | Learn of Christ`,
      description: t.description,
      type: 'article',
    },
  };
}

export default async function TranslationPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const t = getTranslationById(id);
  if (!t) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Breadcrumb + Hero */}
      <div className="bg-[color:var(--color-surface)] border-b border-[color:var(--color-separator)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BreadcrumbNav items={[
            { label: 'Home', href: '/' },
            { label: 'Bible', href: '/bible' },
            { label: 'Translations', href: '/bible/translations' },
            { label: t.name },
          ]} />

          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-base font-bold px-3 py-1 rounded-full text-white bg-[#007AFF]">{t.abbreviation}</span>
              <span className="text-[0.8125rem] text-[color:var(--color-secondary-label)]">{t.year}</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-bold text-[color:var(--color-label)]">{t.fullName}</h1>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] text-[#424245]">{t.tradition}</span>
              <span className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] text-[#424245]">{t.type}</span>
              <span className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] text-[#424245]">{t.language}</span>
            </div>

            <Link href={t.readLink} className="inline-block mt-6 px-6 py-2.5 rounded-lg bg-[#007AFF] text-white font-medium hover:bg-[#0056D6] transition-colors">
              Start Reading in {t.abbreviation}
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Description */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8">
          <p className="text-base text-[#424245] leading-relaxed">{t.description}</p>
        </div>

        {/* Sample Verse */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8">
          <h2 className="font-sans text-xl font-bold text-[color:var(--color-label)] mb-6">Sample Verse</h2>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border-l-4 border-[#007AFF]">
            <p className="text-[0.8125rem] font-medium text-[color:var(--color-primary)] mb-2">{t.sampleVerse.reference}</p>
            <p className="text-base text-[color:var(--color-label)] leading-relaxed italic">&ldquo;{t.sampleVerse.text}&rdquo;</p>
          </div>
        </div>

        {/* History */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8">
          <h2 className="font-sans text-xl font-bold text-[color:var(--color-label)] mb-6">History</h2>
          <div className="space-y-4">
            {t.history.map((paragraph, i) => (
              <p key={i} className="text-[0.9375rem] text-[#424245] leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8">
          <h2 className="font-sans text-xl font-bold text-[color:var(--color-label)] mb-6">Key Features</h2>
          <ul className="space-y-3">
            {t.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[color:var(--color-primary)] font-bold text-lg mt-0.5">•</span>
                <span className="text-[0.9375rem] text-[#424245]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best For */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8">
          <h2 className="font-sans text-xl font-bold text-[color:var(--color-label)] mb-6">Best For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.bestFor.map((use, i) => (
              <div key={i} className="bg-[var(--color-bg)] rounded-lg p-4 border border-[color:var(--color-separator)]">
                <p className="text-[0.9375rem] font-medium text-[color:var(--color-label)]">{use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[color:var(--color-surface)] rounded-2xl shadow-sm p-8 text-center">
          <h2 className="font-sans text-xl font-bold text-[color:var(--color-label)] mb-3">Ready to explore Scripture?</h2>
          <p className="text-[0.9375rem] text-[color:var(--color-secondary-label)] mb-6 max-w-xl mx-auto">
            Start reading the {t.fullName} and discover how this translation can deepen your biblical study and spiritual growth.
          </p>
          <Link href={t.readLink} className="inline-block px-6 py-2.5 rounded-lg bg-[#007AFF] text-white font-medium hover:bg-[#0056D6] transition-colors">
            Start Reading in {t.abbreviation}
          </Link>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: t.fullName,
            description: t.description,
            mainEntity: {
              '@type': 'Book',
              name: t.fullName,
              alternateName: t.abbreviation,
              datePublished: t.year.toString(),
              inLanguage: t.language,
              description: t.description,
            },
          }),
        }}
      />
    </main>
  );
}
