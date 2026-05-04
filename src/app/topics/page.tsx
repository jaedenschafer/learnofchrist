import Link from 'next/link';
import { getAllTopics } from '@/data/topics';
import '@/styles/page-shell.css';

// ─── ISR ───
export const revalidate = 86400;

export const metadata = {
  title: 'Topics · Learn of Christ',
  description:
    'Explore biblical themes — faith, grace, love, forgiveness, peace — with key verses and cross-references.',
};

export default function TopicsPage() {
  const topics = getAllTopics();

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
            <p className="lop-eyebrow">Topics</p>
            <h1 className="lop-hero__title">
              Themes that run<br />through the story.
            </h1>
            <p className="lop-hero__sub">
              Each topic ties together the verses, characters, and chapters
              where it appears &mdash; so a single thread of the Bible is
              easier to follow.
            </p>
            <div className="lop-hero__chips">
              <span>{topics.length} topics</span>
              <span className="lop-hero__chip-sep" aria-hidden="true">·</span>
              <span>Cross-referenced to Scripture</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Topic grid ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          <div className="lop-section__head">
            <p className="lop-eyebrow">All topics</p>
            <h2 className="lop-section__title">Pick a thread to follow.</h2>
          </div>

          <div className="lop-grid lop-grid--2 lop-grid--3">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="lop-card"
              >
                <h3 className="lop-card__title">{topic.name}</h3>
                <p className="lop-card__copy">{topic.description}</p>
                <span className="lop-card__cta">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Closer ═══════════ */}
      <section className="lop-closer">
        <div className="lop-wrap lop-closer__inner">
          <div className="lop-closer__pane">
            <p className="lop-eyebrow lop-closer__eyebrow">Go further</p>
            <h2 className="lop-closer__title">
              Themes are doorways. Walk through one.
            </h2>
            <p className="lop-closer__sub">
              Every topic includes key verses, cross-references, and study
              questions to explore through the rest of Scripture.
            </p>
            <div className="lop-closer__ctas">
              <Link href="/bible" className="btn-primary">Open the Bible</Link>
              <Link href="/study-plans" className="btn-outline">Pick a study plan</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
