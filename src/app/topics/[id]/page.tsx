import Link from 'next/link';
import { getAllTopics, getTopicById } from '@/data/topics';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata = {
  title: 'Topic - Learn of Christ',
  description: 'Explore a biblical topic with key verses and study resources.',
};

interface TopicPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const topics = getAllTopics();
  return topics.map((topic) => ({
    id: topic.id,
  }));
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicById(params.id);

  if (!topic) {
    return (
      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-navy mb-4">Topic Not Found</h1>
          <Link href="/topics" className="btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BreadcrumbNav items={[{ label: 'Topics', href: '/topics' }, { label: topic.name, href: '#' }]} />

        <div className="card mb-8">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">{topic.name}</h1>
          <p className="text-lg text-navy/80">{topic.description}</p>
        </div>

        <div className="space-y-8">
          {/* Key Verse */}
          <div className="card bg-gold/10 border-l-4 border-gold">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Key Verse</h2>
            <p className="scripture-quote text-lg text-navy leading-relaxed mb-4">
              {topic.keyVerse}
            </p>
            <p className="text-sm text-sage font-medium">{topic.keyVerseReference}</p>
          </div>

          {/* Overview */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Understanding This Topic</h2>
            <p className="text-navy/90 leading-relaxed mb-4">
              {topic.name} is a foundational concept in Scripture that appears throughout the Bible. Understanding this theme helps us grow in our relationship with God and apply His truth to our daily lives.
            </p>
            <p className="text-navy/90 leading-relaxed">
              As you explore this topic, you'll discover how it reveals God's character and guides us toward becoming more like Christ. The Bible addresses this theme from multiple angles, providing us with comprehensive guidance.
            </p>
          </div>

          {/* Biblical Foundation */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Biblical Foundation</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="font-semibold text-navy mb-2">In the Old Testament</p>
                <p className="text-navy/80 text-sm">
                  The Old Testament establishes foundational principles about {topic.name.toLowerCase()}. Through narratives, poetry, and prophecy, we see how this theme is woven throughout God's interaction with His people.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="font-semibold text-navy mb-2">In the New Testament</p>
                <p className="text-navy/80 text-sm">
                  Jesus embodied and taught about {topic.name.toLowerCase()} in transformative ways. His life, death, and resurrection provide the ultimate example and fulfillment of this biblical truth.
                </p>
              </div>
            </div>
          </div>

          {/* Key Aspects */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Key Aspects of {topic.name}</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">1.</span>
                <div>
                  <h3 className="font-bold text-navy">God's Perspective</h3>
                  <p className="text-sm text-navy/80">Understanding how God views this topic according to Scripture.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">2.</span>
                <div>
                  <h3 className="font-bold text-navy">Personal Application</h3>
                  <p className="text-sm text-navy/80">How we can integrate this truth into our daily lives and relationships.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">3.</span>
                <div>
                  <h3 className="font-bold text-navy">Spiritual Growth</h3>
                  <p className="text-sm text-navy/80">How understanding this topic contributes to our spiritual development and maturity in Christ.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Reflection Questions */}
          <div className="card bg-sage/10">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Reflection Questions</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">1.</span>
                <p className="text-navy/80 text-sm">How does the Bible define {topic.name.toLowerCase()}, and what does it mean to you personally?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">2.</span>
                <p className="text-navy/80 text-sm">What are practical ways you can develop or strengthen {topic.name.toLowerCase()} in your life?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">3.</span>
                <p className="text-navy/80 text-sm">How has Jesus demonstrated this topic through His life and teachings?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">4.</span>
                <p className="text-navy/80 text-sm">What challenges do you face in living out this biblical principle?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">5.</span>
                <p className="text-navy/80 text-sm">Who in your life models {topic.name.toLowerCase()} well, and what can you learn from them?</p>
              </li>
            </ol>
          </div>

          {/* Related Study */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Deepen Your Study</h2>
            <p className="text-navy/80 mb-6">
              To explore this topic further, consider studying these related passages and resources:
            </p>
            <div className="space-y-2">
              <Link href="/bible" className="text-gold font-medium hover:text-navy transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Explore Bible Study
              </Link>
              <Link href="/study-plans" className="text-gold font-medium hover:text-navy transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                View Study Plans
              </Link>
              <Link href="/blog" className="text-gold font-medium hover:text-navy transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Read Related Blog Posts
              </Link>
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-12 pt-12 border-t border-cream">
          <h2 className="font-serif text-2xl font-bold text-navy mb-6">Explore More Topics</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/topics" className="card hover:shadow-lg transition-shadow">
              <p className="font-serif font-bold text-navy">View All Topics</p>
            </Link>
            <Link href="/bible" className="card hover:shadow-lg transition-shadow">
              <p className="font-serif font-bold text-navy">Study the Bible</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
