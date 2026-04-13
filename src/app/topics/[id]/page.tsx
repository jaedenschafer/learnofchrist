import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllTopics, getTopicById } from '@/data/topics';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface TopicPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllTopics().map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { id } = await params;
  const topic = getTopicById(id);

  if (!topic) {
    return { title: 'Topic Not Found | Learn of Christ' };
  }

  return {
    title: `${topic.name} — What the Bible Says | Learn of Christ`,
    description: topic.longDescription || topic.description,
    openGraph: {
      title: `${topic.name} — Biblical Study`,
      description: topic.description,
      url: `https://learnofchrist.com/topics/${id}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/topics/${id}`,
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

  const allTopics = getAllTopics();
  const relatedTopics = (topic.relatedTopics || [])
    .map((rid) => allTopics.find((t) => t.id === rid))
    .filter(Boolean);

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Topics', href: '/topics' }, { label: topic.name, href: '#' }]} />

        {/* Header */}
        <div className="card mb-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">{topic.name}</h1>
          <p className="text-sm text-navy/55 leading-relaxed">{topic.longDescription || topic.description}</p>
        </div>

        <div className="space-y-3">
          {/* Key Verse */}
          <div className="card bg-gold/[0.04] border-l-[3px] border-gold/50">
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-semibold mb-3">Key Verse</p>
            <p className="font-serif text-base text-navy/80 leading-relaxed italic mb-2">&ldquo;{topic.keyVerse}&rdquo;</p>
            <p className="text-xs text-gold font-semibold">&mdash; {topic.keyVerseReference}</p>
          </div>

          {/* Content Sections */}
          {topic.sections && topic.sections.map((section, i) => (
            <div key={i} className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">{section.title}</h2>
              <p className="text-sm text-navy/60 leading-[1.8]">{section.content}</p>
            </div>
          ))}

          {/* Bible Reading */}
          {topic.bibleReading && topic.bibleReading.length > 0 && (
            <div className="card">
              <h2 className="font-sans text-base font-semibold text-navy mb-3">Read in the Bible</h2>
              <div className="card-grouped">
                {topic.bibleReading.map((reading, i) => (
                  <Link key={i} href={reading.link} className="card-grouped-item flex items-center gap-3 group">
                    <div className="step-number">{i + 1}</div>
                    <span className="text-sm text-navy/70 group-hover:text-gold transition-colors flex-1">{reading.reference}</span>
                    <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Topics */}
          {relatedTopics.length > 0 && (
            <div className="mt-6">
              <h2 className="font-sans text-lg font-semibold text-navy mb-4 px-1">Related Topics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedTopics.map((related) => related && (
                  <Link key={related.id} href={`/topics/${related.id}`} className="card group !p-4 text-center">
                    <h3 className="font-sans text-sm font-semibold text-navy group-hover:text-gold transition-colors">{related.name}</h3>
                    <p className="text-xs text-navy/40 mt-1">{related.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
