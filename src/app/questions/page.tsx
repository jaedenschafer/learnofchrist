import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { getAllQuestions } from '@/data/questions';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Questions - Learn of Christ',
  description: 'Find answers to common questions about Jesus, the Bible, faith, and living as a Christian.',
};

const categoryColors: Record<string, string> = {
  Identity: 'bg-blue-50 text-blue-700',
  Salvation: 'bg-emerald-50 text-emerald-700',
  Discipleship: 'bg-amber-50 text-amber-700',
  Theology: 'bg-violet-50 text-violet-700',
  Practice: 'bg-rose-50 text-rose-700',
  'End Times': 'bg-indigo-50 text-indigo-700',
};

export default function QuestionsPage() {
  const questions = getAllQuestions();
  const categories = [...new Set(questions.map((q) => q.category))];

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header">
          <h1>Questions About Jesus</h1>
          <div className="section-divider mt-3"></div>
          <p>Find biblical answers about Jesus Christ, faith, salvation, and following Him.</p>
        </div>

        <div className="max-w-md mx-auto mb-6">
          <SearchBar placeholder="Search questions..." />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button key={category} className={`pill ${categoryColors[category] || 'bg-gray-50 text-gray-600'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="card-grouped">
          {questions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="card-grouped-item flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-sm font-semibold text-navy group-hover:text-gold transition-colors">{question.question}</h3>
                <p className="text-xs text-navy/40 mt-0.5 truncate">{question.excerpt}</p>
              </div>
              <svg className="w-4 h-4 text-navy/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="font-serif text-xl font-bold text-navy mb-2">Didn&apos;t find your question?</h2>
          <p className="text-sm text-navy/45">We&apos;re constantly adding new resources. Check back soon.</p>
        </div>
      </div>
    </div>
  );
}
