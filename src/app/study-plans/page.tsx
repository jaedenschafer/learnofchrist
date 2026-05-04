import Link from 'next/link';
import { getAllStudyPlans } from '@/data/study-plans';
import '@/styles/page-shell.css';

// ─── ISR ───
export const revalidate = 86400;

export const metadata = {
  title: 'Study Plans · Learn of Christ',
  description:
    'Pick a guided journey through Scripture. Day by day, one short reading, one focus, one passage — no streak shaming, no signup wall.',
  openGraph: {
    title: 'Study Plans · Learn of Christ',
    description:
      'Guided Bible reading plans — Gospel of John, Genesis, Psalms, and more.',
  },
};

export default function StudyPlansPage() {
  const plans = getAllStudyPlans();

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
            <p className="lop-eyebrow">Study Plans</p>
            <h1 className="lop-hero__title">
              Walk through it,<br />day by day.
            </h1>
            <p className="lop-hero__sub">
              Pick a guided journey. One short reading, one focus, one
              passage of scripture each day &mdash; with no streak shaming
              and no signup wall.
            </p>
            <div className="lop-hero__chips">
              <span>{plans.length} plans</span>
              <span className="lop-hero__chip-sep" aria-hidden="true">·</span>
              <span>All free</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Plan grid ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          <div className="lop-section__head">
            <p className="lop-eyebrow">Choose a path</p>
            <h2 className="lop-section__title">Guided journeys.</h2>
          </div>

          <div className="lop-grid lop-grid--2">
            {plans.map((plan) => (
              <Link
                key={plan.id}
                href={`/study-plans/${plan.id}`}
                className="lop-card"
              >
                <span className="lop-card__icon" aria-hidden="true">
                  {plan.icon}
                </span>
                <span className="lop-card__meta">
                  <span className="lop-card__meta-key">{plan.duration}</span>
                  <span className="lop-card__meta-sep" aria-hidden="true">·</span>
                  <span className="lop-card__meta-extra">{plan.category}</span>
                </span>
                <h3 className="lop-card__title">{plan.name}</h3>
                <p className="lop-card__copy">{plan.description}</p>
                <span className="lop-card__cta">Start day 1</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Closer ═══════════ */}
      <section className="lop-closer">
        <div className="lop-wrap lop-closer__inner">
          <div className="lop-closer__pane">
            <p className="lop-eyebrow lop-closer__eyebrow">Begin</p>
            <h2 className="lop-closer__title">Not sure where to start?</h2>
            <p className="lop-closer__sub">
              Try Who Is Jesus? for a focused 7-day intro, or the Gospel of
              John deep-dive for a 21-day journey through every chapter.
            </p>
            <Link href="/bible" className="btn-primary lop-closer__cta">
              Open the Bible
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
