import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllTopics } from '@/data/topics';
import { getAllQuestions } from '@/data/questions';
import TopicCard from '@/components/TopicCard';

export const metadata = {
  title: 'Home - Learn of Christ',
  description: 'Begin your journey to understand Jesus Christ through daily Bible study, guided chapters, and spiritual insights.',
};

export default function Home() {
  const topics = getAllTopics().slice(0, 6);
  const questions = getAllQuestions().slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gold">Learn of Christ</h1>
          <p className="text-xl md:text-2xl mb-8 text-cream/90">
            Deepen your understanding of Jesus Christ through comprehensive scripture study
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar placeholder="Search books, topics, or questions..." />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bible" className="btn-primary">
              Start Bible Study
            </Link>
            <Link href="/study-plans" className="btn-outline">
              View Study Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Chapter-by-Chapter Study Guides */}
            <div className="card">
              <div className="mb-4 text-gold text-4xl">📖</div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">Chapter-by-Chapter Study Guides</h3>
              <p className="text-navy/80 mb-6">
                Navigate every chapter of the Bible with detailed overviews, key themes, verse highlights, and reflections on how each chapter points to Christ.
              </p>
              <Link href="/bible" className="btn-primary inline-block">
                Explore Now
              </Link>
            </div>

            {/* Daily Study Plans */}
            <div className="card">
              <div className="mb-4 text-gold text-4xl">📅</div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">Daily Study Plans</h3>
              <p className="text-navy/80 mb-6">
                Choose from structured reading plans designed to help you engage with scripture consistently, whether you have 10 minutes or an hour.
              </p>
              <Link href="/study-plans" className="btn-primary inline-block">
                Explore Now
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Popular Topics */}
            <div className="card">
              <div className="mb-4 text-gold text-4xl">🎯</div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">Popular Topics</h3>
              <p className="text-navy/80 mb-6">
                Explore topics like faith, grace, forgiveness, and purpose. Each topic includes key verses and connections to scripture.
              </p>
              <Link href="/topics" className="btn-primary inline-block">
                Explore Now
              </Link>
            </div>

            {/* Questions About Jesus */}
            <div className="card">
              <div className="mb-4 text-gold text-4xl">❓</div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">Questions About Jesus</h3>
              <p className="text-navy/80 mb-6">
                Get answers to common questions about Jesus, salvation, faith, and living as a Christian based on scripture.
              </p>
              <Link href="/questions" className="btn-primary inline-block">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center text-navy mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/topics" className="btn-secondary">
              View All Topics
            </Link>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center text-navy mb-12">Questions About Jesus</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {questions.map((question) => (
              <Link
                key={question.id}
                href={`/questions/${question.id}`}
                className="card hover:shadow-xl transition-shadow"
              >
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{question.question}</h3>
                <p className="text-navy/80 text-sm">{question.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/questions" className="btn-secondary">
              View All Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-navy to-brown text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-lg mb-8 text-cream/90">
            Begin understanding Jesus Christ more deeply through our comprehensive Bible study resources.
          </p>
          <Link href="/bible" className="btn-primary">
            Begin Study Now
          </Link>
        </div>
      </section>
    </>
  );
}
