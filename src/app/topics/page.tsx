import { getAllTopics } from '@/data/topics';
import TopicCard from '@/components/TopicCard';

export const metadata = {
  title: 'Topics - Learn of Christ',
  description: 'Explore biblical topics including faith, grace, love, forgiveness, peace, and more with key verses and study guides.',
};

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Biblical Topics</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Explore key biblical themes and concepts that help us understand God's character and His plan for our lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-navy to-brown text-cream rounded-lg p-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Deepen Your Understanding</h2>
          <p className="text-cream/90 mb-6 max-w-2xl mx-auto">
            Each topic includes key verses, cross-references, and study questions to help you explore these themes throughout Scripture.
          </p>
        </div>
      </div>
    </div>
  );
}
