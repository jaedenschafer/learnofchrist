import Link from 'next/link';

export const metadata = {
  title: 'Family Resources - Learn of Christ',
  description: 'Resources for families to study the Bible together.',
};

export default function FamilyPage() {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header">
          <h1>Family Resources</h1>
          <div className="section-divider mt-3"></div>
          <p>Bring your family closer to Christ with study guides, lesson plans, and devotionals for every age.</p>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="card">
            <div className="feature-icon bg-rose-50 text-rose-600 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="font-sans text-base font-semibold text-navy mb-1">Come Follow Me</h3>
            <span className="text-[0.65rem] font-semibold text-gold uppercase tracking-wide">52 weeks</span>
            <p className="text-sm text-navy/50 mt-2 leading-relaxed mb-4">
              A year-long study to help families grow together in understanding Jesus Christ.
            </p>
            <button className="btn-primary text-sm w-full !py-2.5">Explore Study Guides</button>
          </div>

          <div className="card">
            <div className="feature-icon bg-cyan-50 text-cyan-600 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="font-sans text-base font-semibold text-navy mb-1">Kids Lessons</h3>
            <span className="text-[0.65rem] font-semibold text-gold uppercase tracking-wide">Ages 3-12</span>
            <p className="text-sm text-navy/50 mt-2 leading-relaxed mb-4">
              Age-appropriate Bible lessons with activities, coloring pages, and memory verses.
            </p>
            <button className="btn-primary text-sm w-full !py-2.5">View Lessons</button>
          </div>
        </div>

        {/* Popular Resources */}
        <div className="px-1 mb-2">
          <p className="section-header">Popular Resources</p>
        </div>
        <div className="card-grouped mb-8">
          {[
            { title: 'Family Devotional Guide', desc: '15-minute daily devotionals', color: 'bg-amber-50 text-amber-600' },
            { title: 'Scripture Memory for Kids', desc: 'Fun activities for memorizing verses', color: 'bg-green-50 text-green-600' },
            { title: 'Bible Story Coloring Book', desc: 'Interactive coloring with lessons', color: 'bg-pink-50 text-pink-600' },
            { title: 'Discussion Question Cards', desc: 'Conversation starters for study', color: 'bg-blue-50 text-blue-600' },
            { title: 'Character Lessons', desc: 'Study biblical characters', color: 'bg-violet-50 text-violet-600' },
            { title: 'Holiday Bible Studies', desc: 'Christmas, Easter, and more', color: 'bg-orange-50 text-orange-600' },
          ].map((resource) => (
            <div key={resource.title} className="card-grouped-item flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl ${resource.color} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-sm font-semibold text-navy">{resource.title}</h3>
                <p className="text-xs text-navy/40 mt-0.5">{resource.desc}</p>
              </div>
              <svg className="w-4 h-4 text-navy/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="card bg-gold/[0.04] mb-6">
          <h2 className="font-sans text-base font-semibold text-navy mb-4">Tips for Family Bible Study</h2>
          <div className="space-y-3">
            {[
              { title: 'Set a Regular Time', desc: 'Build a consistent habit, whether daily or weekly.' },
              { title: 'Make It Interactive', desc: 'Use activities, games, and discussions for all ages.' },
              { title: 'Ask Good Questions', desc: 'Open-ended questions help everyone think deeply.' },
              { title: 'Connect to Life', desc: 'Show how Bible truths apply to daily challenges.' },
              { title: 'Pray Together', desc: 'Begin and end with prayer to invite the Holy Spirit.' },
            ].map((tip, i) => (
              <div key={i} className="flex gap-3">
                <div className="step-number">{i + 1}</div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-navy">{tip.title}</h3>
                  <p className="text-xs text-navy/50 mt-0.5">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-banner">
          <h2 className="font-serif text-2xl font-bold mb-3">Start Your Family&apos;s Journey</h2>
          <p className="text-sm text-cream/55 max-w-sm mx-auto mb-6">
            Strengthen your family&apos;s bond and spiritual foundation together.
          </p>
          <Link href="/study-plans" className="btn-primary">Explore Study Plans</Link>
        </div>
      </div>
    </div>
  );
}
