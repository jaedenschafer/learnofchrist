import Link from 'next/link';
import { getAllTopics, getTopicById } from '@/data/topics';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata = {
  title: 'Topic - Learn of Christ',
  description: 'Explore a biblical topic with key verses and study resources.',
};

interface TopicPageProps { params: { id: string } }

export async function generateStaticParams() {
  return getAllTopics().map((t) => ({ id: t.id }));
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicById(params.id);

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

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Topics', href: '/topics' }, { label: topic.name, href: '#' }]} />

        <div className="card mb-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-2">{topic.name}</h1>
          <p className="text-sm text-navy/55 leading-relaxed">{topic.description}</p>
        </div>

        <div className="space-y-3">
          <div className="card bg-gold/[0.04] border-l-[3px] border-gold/50">
            <p className="section-header !mb-3">Key Verse</p>
            <p className="scripture-quote text-base text-navy/80 leading-relaxed mb-3">&ldquo;{topic.keyVerse}&rdquo;</p>
            <p className="text-xs text-gold font-semibold">{topic.keyVerseReference}</p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Understanding {topic.name}</h2>
            <p className="text-sm text-navy/55 leading-relaxed mb-3">
              {topic.name} is a foundational concept that appears throughout Scripture. Understanding this theme helps us grow closer to God.
            </p>
            <p className="text-sm text-navy/55 leading-relaxed">
              As you explore this topic, you&apos;ll discover how it reveals God&apos;s character and guides us toward becoming more like Christ.
            </p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Biblical Foundation</h2>
            <div className="space-y-3">
              <div className="border-l-[3px] border-gold/40 pl-3.5 py-1">
                <p className="font-sans text-sm font-semibold text-navy mb-1">Old Testament</p>
                <p className="text-xs text-navy/50 leading-relaxed">
                  Foundational principles through narratives, poetry, and prophecy about {topic.name.toLowerCase()}.
                </p>
              </div>
              <div className="border-l-[3px] border-gold/40 pl-3.5 py-1">
                <p className="font-sans text-sm font-semibold text-navy mb-1">New Testament</p>
                <p className="text-xs text-navy/50 leading-relaxed">
                  Jesus embodied and taught about {topic.name.toLowerCase()} in transformative ways through His life and work.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Key Aspects</h2>
            <div className="space-y-3">
              {[
                { title: "God's Perspective", desc: `How God views ${topic.name.toLowerCase()} according to Scripture.` },
                { title: "Personal Application", desc: "Integrating this truth into daily life and relationships." },
                { title: "Spiritual Growth", desc: "How understanding this contributes to maturity in Christ." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="step-number">{i + 1}</div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="text-xs text-navy/50 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-sage/[0.06]">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Reflection Questions</h2>
            <div className="space-y-2">
              {[
                `How does the Bible define ${topic.name.toLowerCase()}, and what does it mean to you?`,
                `What are practical ways to strengthen ${topic.name.toLowerCase()} in your life?`,
                `How has Jesus demonstrated this through His life and teachings?`,
                `What challenges do you face in living out this principle?`,
              ].map((q, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-xs font-bold text-gold mt-0.5">{i + 1}.</span>
                  <p className="text-xs text-navy/55 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Continue Studying</h2>
            <div className="card-grouped">
              <Link href="/bible" className="card-grouped-item flex items-center gap-3 group">
                <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">Explore Bible Study</span>
                <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/topics" className="card-grouped-item flex items-center gap-3 group">
                <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">View All Topics</span>
                <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
