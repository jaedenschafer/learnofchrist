import Link from 'next/link';
import { getAllQuestions, getQuestionById } from '@/data/questions';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata = {
  title: 'Question - Learn of Christ',
  description: 'A biblical answer to your question about Jesus and faith.',
};

interface QuestionPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const questions = getAllQuestions();
  return questions.map((q) => ({
    id: q.id,
  }));
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const question = getQuestionById(params.id);

  if (!question) {
    return (
      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-navy mb-4">Question Not Found</h1>
          <Link href="/questions" className="btn-primary">
            Back to Questions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BreadcrumbNav items={[{ label: 'Questions', href: '/questions' }, { label: question.question, href: '#' }]} />

        <div className="card mb-8">
          <span className="text-xs font-semibold text-sage uppercase tracking-wide">{question.category}</span>
          <h1 className="font-serif text-4xl font-bold text-navy mt-2 mb-6">{question.question}</h1>
        </div>

        <div className="space-y-8">
          <div className="card bg-gold/10">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">The Answer</h2>
            <div className="prose prose-sm max-w-none">
              <p className="text-navy/90 leading-relaxed mb-4">
                {question.excerpt}
              </p>
              <p className="text-navy/90 leading-relaxed">
                This question gets to the heart of what it means to follow Jesus and live as a Christian. Let's explore this topic in depth by looking at what Scripture teaches us.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">What the Bible Says</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="scripture-quote text-navy leading-relaxed mb-1">
                  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
                </p>
                <p className="text-sm text-sage font-medium">John 3:16</p>
              </div>
              <p className="text-navy/80 leading-relaxed">
                This foundational verse reveals God's love and the central truth of the Gospel. Jesus came not to condemn, but to save those who believe in Him.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Key Points to Remember</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">1.</span>
                <div>
                  <h3 className="font-bold text-navy">God's Initiative</h3>
                  <p className="text-sm text-navy/80">God takes the first step in reaching out to us through Christ.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">2.</span>
                <div>
                  <h3 className="font-bold text-navy">Our Response</h3>
                  <p className="text-sm text-navy/80">We are called to respond with faith, trust, and commitment to follow Jesus.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">3.</span>
                <div>
                  <h3 className="font-bold text-navy">Transformation</h3>
                  <p className="text-sm text-navy/80">When we follow Jesus, we are transformed from the inside out by God's Holy Spirit.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card bg-sage/10">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">How Does This Apply to Your Life?</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Consider how this truth about Jesus shapes your daily decisions and relationships. How can you live out this understanding in your relationships with others?
            </p>
            <div className="bg-white rounded p-4 mt-4">
              <p className="font-semibold text-navy text-sm mb-2">Reflection Questions:</p>
              <ul className="space-y-2 text-sm text-navy/80">
                <li>How does this answer change your perspective?</li>
                <li>What is one way you can apply this truth today?</li>
                <li>Who in your life needs to hear this message?</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Next Steps</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              To deepen your understanding of this topic, consider exploring related passages and study guides:
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/bible" className="text-gold font-medium hover:text-navy transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Study the Bible
              </Link>
            </div>
          </div>
        </div>

        {/* Related Questions */}
        <div className="mt-12 pt-12 border-t border-cream">
          <h2 className="font-serif text-2xl font-bold text-navy mb-6">Other Questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/questions" className="card hover:shadow-lg transition-shadow">
              <p className="font-serif font-bold text-navy">Browse all questions</p>
            </Link>
            <Link href="/topics" className="card hover:shadow-lg transition-shadow">
              <p className="font-serif font-bold text-navy">Explore topics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
