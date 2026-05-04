import Link from 'next/link';
import { getAllQuestions } from '@/data/questions';
import QuestionsBrowser from '@/components/QuestionsBrowser';
import '@/styles/page-shell.css';

// ─── ISR ───
export const revalidate = 86400;

export const metadata = {
  title: 'Questions · Learn of Christ',
  description:
    'Biblical answers to common questions about Jesus, Scripture, salvation, and following Him.',
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
    <main className="lop">
      {/* ═══════════ Hero ═══════════ */}
      <section className="lop-hero">
        <div className="lop-hero__sun" aria-hidden="true">
          <span className="lop-hero__sun-ring lop-hero__sun-ring--4" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--3" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--2" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--1" />
          <span className="lop-hero__sun-core" />
        </div>
        <div className="lop-wrap lop-hero__inner">
          <div className="lop-hero__pane">
            <p className="lop-eyebrow">Questions</p>
            <h1 className="lop-hero__title">
              The questions<br />honest faith asks.
            </h1>
            <p className="lop-hero__sub">
              Biblical answers to the questions most people quietly carry
              about Jesus, Scripture, salvation, and what it means to
              follow Him.
            </p>
            <div className="lop-hero__chips">
              <span>{questions.length} questions</span>
              <span className="lop-hero__chip-sep" aria-hidden="true">·</span>
              <span>Filter by category</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Question browser (filter + list) ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          <div className="lop-section__head">
            <p className="lop-eyebrow">All questions</p>
            <h2 className="lop-section__title">Find an answer.</h2>
          </div>
          <QuestionsBrowser questions={questions} categoryColors={categoryColors} />
        </div>
      </section>

      {/* ═══════════ Closer ═══════════ */}
      <section className="lop-closer">
        <div className="lop-wrap lop-closer__inner">
          <div className="lop-closer__pane">
            <p className="lop-eyebrow lop-closer__eyebrow">Keep going</p>
            <h2 className="lop-closer__title">
              Didn&rsquo;t find your question?
            </h2>
            <p className="lop-closer__sub">
              We&rsquo;re constantly adding new resources. In the meantime
              the Bible is open &mdash; pick a topic or chapter to dig
              into.
            </p>
            <div className="lop-closer__ctas">
              <Link href="/topics" className="btn-primary">Browse topics</Link>
              <Link href="/bible" className="btn-outline">Open the Bible</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
