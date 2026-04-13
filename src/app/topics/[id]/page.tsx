import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllTopics, getTopicById } from '@/data/topics';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface TopicPageProps { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return getAllTopics().map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { id } = await params;
  const topic = getTopicById(id);
  if (!topic) {
    return { title: 'Topic Not Found - Learn of Christ' };
  }
  return {
    title: `${topic.name} - Biblical Topic | Learn of Christ`,
    description: topic.longDescription.slice(0, 160),
    openGraph: {
      title: `${topic.name} - Learn of Christ`,
      description: topic.description,
      type: 'article',
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { id } = await params;
  const topic = getTopicById(id);

  if (!topic) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Topic Not Found</h1>
          <Link href="/topics" className="btn-primary">Back to Topics</Link>
        </div>
      </div>
    );
  }

  const relatedTopics = topic.relatedTopics
    .map(id => getAllTopics().find(t => t.id === id))
    .filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: topic.name,
    description: topic.longDescription,
    about: {
      '@type': 'Thing',
      name: topic.name,
      description: topic.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Topics', href: '/topics' }, { label: topic.name, href: '#' }]} />

          {/* Header */}
          <div className="card mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-2">{topic.name}</h1>
            <p className="text-sm text-navy/55 leading-relaxed">{topic.description}</p>
          </div>

          <div className="space-y-3">
            {/* Long Description */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Overview</h2>
              <p className="text-sm text-navy/65 leading-relaxed">{topic.longDescription}</p>
            </div>

            {/* Key Verse */}
            <div className="card bg-gold/[0.04] border-l-[3px] border-gold/50">
              <p className="section-header !mb-3">Key Verse</p>
              <p className="scripture-quote text-base text-navy/80 leading-relaxed mb-3">&ldquo;{topic.keyVerse}&rdquo;</p>
              <p className="text-xs text-gold font-semibold">{topic.keyVerseReference}</p>
            </div>

            {/* Content Sections */}
            {topic.sections.map((section, i) => (
              <div key={i} className="card">
                <div className="flex gap-3 items-start">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <div>
                    <h2 className="font-sans text-base font-semibold text-navy mb-2">{section.title}</h2>
                    <p className="text-sm text-navy/60 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="section-divider" />

            {/* Key Verses */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Key Verses</h2>
              <div className="space-y-2">
                {topic.keyVerses.map((verse, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="pill pill-gold">{verse}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bible Reading */}
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Recommended Bible Reading</h2>
              <div className="card-grouped">
                {topic.bibleReading.map((reading, i) => (
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

            {/* Related Topics */}
            {relatedTopics.length > 0 && (
              <div className="card">
                <h2 className="font-sans text-base font-semibold text-navy mb-3">Related Topics</h2>
                <div className="card-grouped">
                  {relatedTopics.map((related) => (
                    <Link key={related!.id} href={`/topics/${related!.id}`} className="card-grouped-item flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors">{related!.name}</span>
                        <p className="text-xs text-navy/40 mt-0.5">{related!.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Banner */}
            <div className="cta-banner">
              <h2 className="font-serif text-lg font-bold text-navy mb-1">Continue Your Study</h2>
              <p className="text-xs text-navy/50 mb-3">Explore more topics and deepen your understanding of Scripture.</p>
              <div className="flex gap-2">
                <Link href="/topics" className="btn-secondary">All Topics</Link>
                <Link href="/bible" className="btn-primary">Study the Bible</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
