import Link from 'next/link';
import type { Metadata } from 'next';
import { getBookByName } from '@/data/books';
import { getVerseExplanation } from '@/data/verse-explanations';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import TranslationSwitcher from '@/components/TranslationSwitcher';
import JsonLd from '@/components/JsonLd';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

interface VersePageProps {
  params: Promise<{ book: string; chapter: string; verse: string }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Only pre-render verses we have rich explanations for
export { generateStaticParams } from './generateStaticParams';

export async function generateMetadata({ params }: VersePageProps): Promise<Metadata> {
  const { book, chapter: chapterStr, verse: verseStr } = await params;
  const chapter = parseInt(chapterStr, 10);
  const verse = parseInt(verseStr, 10);
  const bookName = slugToBookName(book);
  const explanation = getVerseExplanation(book, chapter, verse);

  if (!explanation) {
    return { title: `${bookName} ${chapter}:${verse} | Learn of Christ` };
  }

  return {
    title: `${explanation.reference} — Meaning, Commentary & Explanation | Learn of Christ`,
    description: `${explanation.kjvText} — Read the full meaning of ${explanation.reference} with commentary, cross-references, and original language insights.`,
    openGraph: {
      title: `${explanation.reference} — Bible Verse Explained`,
      description: explanation.kjvText,
      url: `https://learnofchrist.com/bible/${book}/${chapter}/${verse}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/bible/${book}/${chapter}/${verse}`,
    },
  };
}

export default async function VersePage({ params }: VersePageProps) {
  const { book, chapter: chapterStr, verse: verseStr } = await params;
  const chapter = parseInt(chapterStr, 10);
  const verse = parseInt(verseStr, 10);
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const explanation = getVerseExplanation(book, chapter, verse);

  if (!explanation || !book_obj) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Verse Not Found</h1>
          <p className="text-navy/50 mb-6">We don&apos;t have an explanation for this verse yet.</p>
          <Link href={`/bible/${book}/${chapter}`} className="btn-primary">Read {bookName} {chapter}</Link>
        </div>
      </div>
    );
  }

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${explanation.reference} — Meaning and Explanation`,
    description: explanation.kjvText,
    url: `https://learnofchrist.com/bible/${book}/${chapter}/${verse}`,
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Bible', item: 'https://learnofchrist.com/bible' },
        { '@type': 'ListItem', position: 2, name: book_obj.name, item: `https://learnofchrist.com/bible/${book}` },
        { '@type': 'ListItem', position: 3, name: `Chapter ${chapter}`, item: `https://learnofchrist.com/bible/${book}/${chapter}` },
        { '@type': 'ListItem', position: 4, name: `Verse ${verse}`, item: `https://learnofchrist.com/bible/${book}/${chapter}/${verse}` },
      ],
    },
  };

  return (
    <div className="page-container">
      <JsonLd data={jsonLd} />
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Bible', href: '/bible' },
          { label: book_obj.name, href: `/bible/${book}` },
          { label: `Chapter ${chapter}`, href: `/bible/${book}/${chapter}` },
          { label: `Verse ${verse}`, href: '#' },
        ]} />

        {/* Verse Header */}
        <div className="card mb-4">
          <span className="pill pill-gold mb-3 inline-block">{explanation.reference}</span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4 leading-tight">
            {explanation.reference}
          </h1>
          <blockquote className="font-serif text-lg sm:text-xl text-navy/85 leading-relaxed italic border-l-[3px] border-gold/40 pl-4">
            &ldquo;{explanation.kjvText}&rdquo;
          </blockquote>
          <p className="text-sm text-navy/40 mt-3">King James Version (KJV)</p>
        </div>

        {/* Translation Switcher note */}
        <div className="card mb-4 !py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-navy/50">
              Read this verse in context with translation switching:
            </p>
            <Link href={`/bible/${book}/${chapter}`} className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors">
              Read Full Chapter &rarr;
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {/* Context */}
          <div className="card">
            <h2 className="font-sans text-lg font-semibold text-navy mb-3">Context</h2>
            <p className="text-base text-navy/70 leading-[1.8]">{explanation.context}</p>
          </div>

          {/* Explanation */}
          <div className="card">
            <h2 className="font-sans text-lg font-semibold text-navy mb-4">What Does {explanation.reference} Mean?</h2>
            <div className="space-y-4">
              {explanation.explanation.map((paragraph, i) => (
                <p key={i} className="text-base text-navy/70 leading-[1.8]">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Original Language */}
          <div className="card">
            <h2 className="font-sans text-lg font-semibold text-navy mb-3">Original Language Insight</h2>
            <p className="text-base text-navy/70 leading-[1.8]">{explanation.originalLanguage}</p>
          </div>

          {/* Cross References */}
          {explanation.crossReferences.length > 0 && (
            <div className="card">
              <h2 className="font-sans text-lg font-semibold text-navy mb-4">Cross References</h2>
              <div className="space-y-3">
                {explanation.crossReferences.map((ref, i) => (
                  <Link key={i} href={ref.link} className="block group">
                    <div className="frost-card border-l-[3px] border-gold/30 rounded-r-xl p-4 group-hover:border-gold/50 transition-colors">
                      <p className="font-serif text-base text-navy/70 leading-relaxed italic mb-1">
                        &ldquo;{ref.text}&rdquo;
                      </p>
                      <p className="text-sm font-semibold text-gold/70 group-hover:text-gold transition-colors">&mdash; {ref.reference}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Application */}
          <div className="card">
            <h2 className="font-sans text-lg font-semibold text-navy mb-3">Application</h2>
            <p className="text-base text-navy/70 leading-[1.8]">{explanation.application}</p>
          </div>

          {/* Related Verse Explanations */}
          {explanation.relatedVerses.length > 0 && (
            <div className="card">
              <h2 className="font-sans text-lg font-semibold text-navy mb-3">Related Verse Explanations</h2>
              <div className="card-grouped">
                {explanation.relatedVerses.map((key) => {
                  const related = getVerseExplanation(
                    key.split('/')[0],
                    parseInt(key.split('/')[1]),
                    parseInt(key.split('/')[2])
                  );
                  if (!related) return null;
                  return (
                    <Link
                      key={key}
                      href={`/bible/${key}`}
                      className="card-grouped-item flex items-center gap-3 group"
                    >
                      <span className="pill pill-gold text-xs">{related.reference}</span>
                      <span className="text-sm text-navy/50 flex-1 truncate">{related.kjvText.slice(0, 60)}...</span>
                      <svg className="w-4 h-4 text-navy/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Read Full Chapter CTA */}
          <div className="cta-banner">
            <h2 className="font-serif text-xl sm:text-2xl font-bold mb-3">Read the Full Chapter</h2>
            <p className="text-base opacity-60 max-w-md mx-auto mb-5">
              Read {book_obj.name} {chapter} in KJV, ASV, or WEB with study guide and key themes.
            </p>
            <Link href={`/bible/${book}/${chapter}`} className="btn-primary">
              Read {book_obj.name} {chapter}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
