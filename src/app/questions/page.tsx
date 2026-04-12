import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { getAllQuestions } from '@/data/questions';

export const metadata = {
  title: 'Questions - Learn of Christ',
  description: 'Find answers to common questions about Jesus, the Bible, faith, and living as a Christian.',
};

export default function QuestionsPage() {
  const questions = getAllQuestions();
  const categories = [...new Set(questions.map((q) => q.category))];

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Questions About Jesus</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto mb-8">
            Find biblical answers to questions about Jesus Christ, faith, salvation, and what it means to follow Him.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar placeholder="Search questions..." />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gold text-navy font-medium hover:bg-opacity-90 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-4">
          {questions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                    {question.question}
                  </h3>
                  <p className="text-navy/80 text-sm mb-3">{question.excerpt}</p>
                  <span className="inline-block px-3 py-1 bg-sage/20 text-sage text-xs font-medium rounded">
                    {question.category}
                  </span>
                </div>
                <div className="flex-shrink-0 text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Didn't find your question?</h2>
          <p className="text-navy/80 mb-6">We're constantly adding new resources. Check back soon for more questions and answers.</p>
        </div>
      </div>
    </div>
  );
}
