import Link from 'next/link';

export const metadata = {
  title: 'Study Plans - Learn of Christ',
  description: 'Choose from structured Bible study plans designed for consistent, meaningful engagement with scripture.',
};

const plans = [
  { id: 'bible-in-year', name: 'Bible in a Year', description: 'Read through the entire Bible in one year with a structured daily reading plan.', duration: '365 days', color: 'bg-amber-50 text-amber-600' },
  { id: 'old-testament', name: 'Old Testament Journey', description: 'Dive deep into the Old Testament with detailed commentary and reflections.', duration: '6-9 months', color: 'bg-blue-50 text-blue-600' },
  { id: 'new-testament', name: 'New Testament Essentials', description: 'Focus on the life, teachings, and redemptive work of Jesus Christ.', duration: '3-4 months', color: 'bg-emerald-50 text-emerald-600' },
  { id: 'come-follow-me', name: 'Come Follow Me', description: 'A year-long study to develop a deeper relationship with Jesus Christ.', duration: '52 weeks', color: 'bg-rose-50 text-rose-600' },
  { id: 'topical', name: 'Topical Studies', description: 'Explore specific themes: faith, grace, forgiveness, and discipleship.', duration: 'Flexible', color: 'bg-violet-50 text-violet-600' },
  { id: 'gospels', name: 'Gospel Deep Dive', description: 'Study all four Gospels side-by-side for different perspectives on Jesus.', duration: '8-10 weeks', color: 'bg-cyan-50 text-cyan-600' },
];

export default function StudyPlansPage() {
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
                <div className={`feature-icon ${plan.color}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-base font-semibold text-navy mb-0.5">{plan.name}</h3>
                  <span className="text-[0.65rem] font-semibold text-gold uppercase tracking-wide">{plan.duration}</span>
                  <p className="text-sm text-navy/50 mt-2 leading-relaxed">{plan.description}</p>
                  <button className="btn-primary text-sm mt-4 !py-2 !px-5">Start Plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner mt-10">
          <h2 className="font-serif text-2xl font-bold mb-3">Not sure which plan?</h2>
          <p className="text-sm text-cream/55 max-w-sm mx-auto mb-6">
            You can customize any plan to fit your schedule. Start with whatever appeals to you most!
          </p>
          <Link href="/bible" className="btn-primary">Start with the Bible</Link>
        </div>
      </div>
    </div>
  );
}
