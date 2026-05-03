import { getAllQuestions } from '@/data/questions';
import QuestionsBrowser from '@/components/QuestionsBrowser';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Questions - Learn of Christ',
  description: 'Find answers to common questions about Jesus, the Bible, faith, and living as a Christian.',
};

const categoryColors: Record<string, string> = {
  Identity: 'frost-pill text-[color:var(--vesper-gold)]',
  Salvation: 'frost-pill text-[color:var(--vesper-peach)]',
  Discipleship: 'frost-pill text-[color:var(--vesper-gold)]',
  Theology: 'frost-pill text-[color:var(--vesper-gold)]',
  Practice: 'frost-pill text-[color:var(--vesper-peach)]',
  'End Times': 'frost-pill text-[color:var(--vesper-gold)]',
};

export default function QuestionsPage() {
  const questions = getAllQuestions().map(({ id, question, excerpt, category }) => ({
    id,
    question,
    excerpt,
    category,
  }));

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header">
          <h1>Questions About Jesus</h1>
          <div className="section-divider mt-3"></div>
          <p>Find biblical answers about Jesus Christ, faith, salvation, and following Him.</p>
        </div>

        <QuestionsBrowser questions={questions} categoryColors={categoryColors} />

        <div className="mt-10 text-center">
          <h2 className="font-serif text-xl font-bold text-navy mb-2">Didn&apos;t find your question?</h2>
          <p className="text-sm text-navy/45">We&apos;re constantly adding new resources. Check back soon.</p>
        </div>
      </div>
    </div>
  );
}
