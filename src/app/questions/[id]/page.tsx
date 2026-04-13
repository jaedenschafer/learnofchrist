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
    return { title: 'Question Not Found - Learn of Christ' };
  }
  return {
    title: `${question.question} | Learn of Christ`,
    description: question.excerpt,
    openGraph: {
      title: question.question,
      description: question.excerpt,
      type: 'article',
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
          <Link href="/questions" className="btn-primary">Back to Questions</Link>
        </div>
      </div>
    );
  }

  const relatedQuestions = question.relatedQuestions
    .map(id => getAllQuestions().find(q => q.id === id))
    .filter(Boolean);

  const answerParagraphs = question.answer.split('\n\n').filter(p => p.trim());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: question.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.answer,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Questions', href: '/questions' }, { label: question.question, href: '#' }]} />

          {/* Header */}
          <div className="card mb-4">
            <span className="pill pill-sage mb-2 inline-block">{question.category}</span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy">{question.question}</h1>
          </div>

          <div className="space-y-3">
            {/* Answer */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">The Biblical Answer</h2>
              <div className="space-y-3">
                {answerParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm text-navy/65 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="section-divider" />

            {/* Key Verses */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Key Verses</h2>
              <div className="space-y-3">
                {question.keyVerses.map((verse, i) => (
                  <div key={i} className="bg-gold/[0.04] border-l-[3px] border-gold/40 rounded-r-xl p-4">
                    <p className="scripture-quote text-sm text-navy/75 leading-relaxed mb-2">&ldquo;{verse.text}&rdquo;</p>
                    <p className="text-[0.65rem] text-gold font-semibold">{verse.reference}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bible Reading */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Recommended Bible Reading</h2>
              <div className="card-grouped">
                {question.bibleReading.map((reading, i) => (
                  <Link key={i} href={reading.link} className="card-grouped-item flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">{reading.reference}</span>
                    <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="section-divider" />

            {/* Related Questions */}
            {relatedQuestions.length > 0 && (
              <div className="card">
                <h2 className="font-sans text-base font-semibold text-navy mb-3">Related Questions</h2>
                <div className="card-grouped">
                  {relatedQuestions.map((related) => (
                    <Link key={related!.id} href={`/questions/${related!.id}`} className="card-grouped-item flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors">{related!.question}</span>
                        <p className="text-xs text-navy/40 mt-0.5 line-clamp-1">{related!.excerpt}</p>
                      </div>
                      <svg className="w-4 h-4 text-navy/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Banner */}
            <div className="cta-banner">
              <h2 className="font-serif text-lg font-bold text-navy mb-1">Have More Questions?</h2>
              <p className="text-xs text-navy/50 mb-3">Explore more answers to common questions about Jesus and the Christian faith.</p>
              <div className="flex gap-2">
                <Link href="/questions" className="btn-secondary">All Questions</Link>
                <Link href="/bible" className="btn-primary">Study the Bible</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
