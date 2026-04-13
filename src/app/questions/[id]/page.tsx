import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllQuestions, getQuestionById } from '@/data/questions';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface QuestionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllQuestions().map((q) => ({ id: q.id }));
}

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const { id } = await params;
  const question = getQuestionById(id);

  if (!question) {
    return { title: 'Question Not Found | Learn of Christ' };
  }

  return {
    title: `${question.question} | Learn of Christ`,
    description: `${question.excerpt} Biblical answer with key verses from Scripture.`,
    openGraph: {
      title: question.question,
      description: question.excerpt,
      url: `https://learnofchrist.com/questions/${id}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/questions/${id}`,
    },
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id } = await params;
  const question = getQuestionById(id);

  if (!question) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Question Not Found</h1>
          <p className="text-navy/50 mb-6">The question you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/questions" className="btn-primary">Back to Questions</Link>
        </div>
      </div>
    );
  }

  const allQuestions = getAllQuestions();
  const relatedQuestions = question.relatedQuestions
    .map((rid) => allQuestions.find((q) => q.id === rid))
    .filter(Boolean);

  // FAQ Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer.join(' '),
      },
    }],
  };

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Questions', href: '/questions' },
          { label: question.question, href: '#' },
        ]} />

        {/* Header */}
        <div className="card mb-4">
          <span className="pill pill-gold text-xs mb-3 inline-block">{question.category}</span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-2 leading-tight">{question.question}</h1>
          <p className="text-sm text-navy/55 leading-relaxed">{question.excerpt}</p>
        </div>

        {/* Answer */}
        <div className="card mb-4">
          <h2 className="font-sans text-base font-semibold text-navy mb-4">Biblical Answer</h2>
          <div className="space-y-4">
            {question.answer.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-[0.9375rem] text-navy/70 leading-[1.8]">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Key Verses */}
        <div className="card mb-4">
          <h2 className="font-sans text-base font-semibold text-navy mb-4">Key Verses</h2>
          <div className="space-y-3">
            {question.keyVerses.map((verse, i) => (
              <div key={i} className="bg-gold/[0.04] border-l-[3px] border-gold/40 rounded-r-xl p-4">
                <p className="font-serif text-sm text-navy/75 leading-relaxed italic mb-1">
                  &ldquo;{verse.text}&rdquo;
                </p>
                <p className="text-xs font-medium text-gold/70">&mdash; {verse.reference}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bible Reading */}
        {question.bibleReading.length > 0 && (
          <div className="card mb-4">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Continue Reading</h2>
            <div className="card-grouped">
              {question.bibleReading.map((reading, i) => (
                <Link key={i} href={reading.link} className="card-grouped-item flex items-center gap-3 group">
                  <div className="step-number">{i + 1}</div>
                  <span className="text-sm text-navy/70 group-hover:text-gold transition-colors flex-1">{reading.reference}</span>
                  <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Questions */}
        {relatedQuestions.length > 0 && (
          <div className="mt-8">
            <h2 className="font-sans text-lg font-semibold text-navy mb-4 px-1">Related Questions</h2>
            <div className="card-grouped">
              {relatedQuestions.map((related) => related && (
                <Link key={related.id} href={`/questions/${related.id}`} className="card-grouped-item flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm text-navy/70 group-hover:text-gold transition-colors flex-1">{related.question}</span>
                  <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
