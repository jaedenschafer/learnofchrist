import Link from 'next/link';
import { getAllQuestions, getQuestionById } from '@/data/questions';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata = {
  title: 'Question - Learn of Christ',
  description: 'A biblical answer to your question about Jesus and faith.',
};

interface QuestionPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return getAllQuestions().map((q) => ({ id: q.id }));
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const question = getQuestionById(params.id);

  if (!question) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Question Not Found</h1>
          <Link href="/questions" className="btn-primary">Back to Questions</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Questions', href: '/questions' }, { label: question.question, href: '#' }]} />

        <div className="card mb-4">
          <span className="pill pill-sage mb-2 inline-block">{question.category}</span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy">{question.question}</h1>
        </div>

        <div className="space-y-3">
          <div className="card bg-gold/[0.04]">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">The Answer</h2>
            <p className="text-sm text-navy/65 leading-relaxed mb-3">{question.excerpt}</p>
            <p className="text-sm text-navy/65 leading-relaxed">
              This question gets to the heart of what it means to follow Jesus. Let&apos;s explore what Scripture teaches us.
            </p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">What the Bible Says</h2>
            <div className="bg-gold/[0.06] border-l-[3px] border-gold/40 rounded-r-xl p-4 mb-3">
              <p className="scripture-quote text-sm text-navy/75 leading-relaxed mb-1">
                &ldquo;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&rdquo;
              </p>
              <p className="text-[0.65rem] text-gold font-semibold">John 3:16</p>
            </div>
            <p className="text-sm text-navy/55 leading-relaxed">
              This foundational verse reveals God&apos;s love and the central truth of the Gospel.
            </p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Key Points</h2>
            <div className="space-y-3">
              {[
                { title: "God's Initiative", desc: "God takes the first step in reaching out to us through Christ." },
                { title: "Our Response", desc: "We are called to respond with faith, trust, and commitment." },
                { title: "Transformation", desc: "When we follow Jesus, we are transformed by God's Holy Spirit." },
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="step-number">{i + 1}</div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-navy">{point.title}</h3>
                    <p className="text-xs text-navy/50 mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-sage/[0.06]">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Apply to Your Life</h2>
            <p className="text-sm text-navy/55 leading-relaxed mb-3">Consider how this truth shapes your daily decisions and relationships.</p>
            <div className="bg-white rounded-xl p-3.5">
              <p className="font-sans text-xs font-semibold text-navy mb-2">Reflection Questions</p>
              <ul className="space-y-1.5 text-xs text-navy/50">
                <li>How does this answer change your perspective?</li>
                <li>What is one way you can apply this truth today?</li>
                <li>Who in your life needs to hear this message?</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Next Steps</h2>
            <div className="card-grouped">
              <Link href="/bible" className="card-grouped-item flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center"><svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div>
                <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">Study the Bible</span>
                <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/questions" className="card-grouped-item flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center"><svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">Browse All Questions</span>
                <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/topics" className="card-grouped-item flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg></div>
                <span className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors flex-1">Explore Topics</span>
                <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
