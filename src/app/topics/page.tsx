import { getAllTopics } from '@/data/topics';
import TopicCard from '@/components/TopicCard';

export const metadata = {
  title: 'Topics - Learn of Christ',
  description: 'Explore biblical topics including faith, grace, love, forgiveness, peace, and more.',
};

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="page-header">
          <h1>Biblical Topics</h1>
          <div className="section-divider mt-3"></div>
          <p>Explore key biblical themes that help us understand God&apos;s character and His plan for our lives.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>

        <div className="cta-banner mt-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Deepen Your Understanding</h2>
          <p className="text-sm text-cream/60 max-w-md mx-auto">
            Each topic includes key verses, cross-references, and study questions to explore throughout Scripture.
          </p>
        </div>
      </div>
    </div>
  );
}
