import Link from 'next/link';
import { getAllStudyPlans } from '@/data/study-plans';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Study Plans - Learn of Christ',
  description: 'Choose from structured Bible study plans designed for consistent, meaningful engagement with scripture. Plans for beginners through advanced students.',
  openGraph: {
    title: 'Study Plans - Learn of Christ',
    description: 'Choose from structured Bible study plans designed for consistent, meaningful engagement with scripture.',
  },
};

// Difficulty pills (Beginner / Intermediate / Advanced) were removed —
// they implied a judgment about the reader. Duration is enough.

export default function StudyPlansPage() {
  const plans = getAllStudyPlans();

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header">
          <h1>Study Plans</h1>
          <div className="section-divider mt-3"></div>
          <p>Choose a plan that fits your schedule and spiritual goals.</p>
        </div>

        <div className="space-y-3">
          {plans.map((plan) => (
            <div key={plan.id} className="card">
              <div className="flex items-start gap-4">
                <div className={`feature-icon ${plan.color} text-2xl flex items-center justify-center`}>
                  {plan.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-base font-semibold text-navy mb-1">{plan.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[0.65rem] font-semibold text-gold uppercase tracking-wide">{plan.duration}</span>
                    <span className="text-navy/20">|</span>
                    <span className="text-[0.65rem] font-semibold text-navy/40 uppercase tracking-wide">{plan.category}</span>
                  </div>
                  <p className="text-sm text-navy/50 leading-relaxed mb-1">{plan.description}</p>
                  <p className="text-xs text-navy/35 mb-4">{plan.days.length} daily readings</p>
                  <Link href={`/study-plans/${plan.id}`} className="btn-primary text-sm !py-2 !px-5">
                    Start Plan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner mt-10">
          <h2 className="font-serif text-2xl font-bold mb-3">Not sure which plan?</h2>
          <p className="text-sm opacity-55 max-w-sm mx-auto mb-6">
            Start with the &ldquo;Who Is Jesus?&rdquo; plan for a focused 7-day introduction, or dive into the Gospel of John for a deeper 21-day journey.
          </p>
          <Link href="/bible" className="btn-primary">Explore the Bible</Link>
        </div>
      </div>
    </div>
  );
}
