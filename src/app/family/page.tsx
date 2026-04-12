import Link from 'next/link';

export const metadata = {
  title: 'Family Resources - Learn of Christ',
  description: 'Resources for families to study the Bible together, including Come Follow Me guides and kids lessons.',
};

export default function FamilyPage() {
  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Family Resources</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Bring your family closer to Christ with study guides, lesson plans, and devotionals designed for every age.
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Come Follow Me */}
          <div className="card hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-3">Come Follow Me</h3>
            <p className="text-navy/80 mb-4">
              A comprehensive year-long study designed to help families grow together in their understanding of Jesus Christ. This program includes weekly lessons, discussion questions, and family activities.
            </p>
            <p className="text-sm text-sage font-medium mb-6">52 weeks of guided learning</p>
            <button className="btn-primary w-full">
              Explore Study Guides
            </button>
          </div>

          {/* Kids Lessons */}
          <div className="card hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-3">Kids Lessons</h3>
            <p className="text-navy/80 mb-4">
              Age-appropriate Bible lessons and activities that help children understand Jesus and develop their own relationship with God. Includes coloring pages, games, and memory verses.
            </p>
            <p className="text-sm text-sage font-medium mb-6">Resources for ages 3-12</p>
            <button className="btn-primary w-full">
              View Lessons
            </button>
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">Popular Family Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Family Devotional Guide',
                description: '15-minute daily devotionals for families to study together',
                icon: '📚',
              },
              {
                title: 'Scripture Memory for Kids',
                description: 'Fun activities and rewards system for memorizing Bible verses',
                icon: '🧠',
              },
              {
                title: 'Bible Story Coloring Book',
                description: 'Interactive coloring pages with Bible stories and lessons',
                icon: '🎨',
              },
              {
                title: 'Discussion Question Cards',
                description: 'Conversation starters to deepen family Bible study discussions',
                icon: '💬',
              },
              {
                title: 'Character Lessons',
                description: 'Study biblical characters and their lessons for modern life',
                icon: '🌟',
              },
              {
                title: 'Holiday Bible Studies',
                description: 'Special studies for Christmas, Easter, and other holidays',
                icon: '🎉',
              },
            ].map((resource, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="font-serif font-bold text-navy mb-2">{resource.title}</h3>
                <p className="text-sm text-navy/80 mb-4">{resource.description}</p>
                <button className="btn-outline text-sm w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <div className="card bg-gold/10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">Tips for Family Bible Study</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Set a Regular Time</h3>
                  <p className="text-navy/80 text-sm">Establish a consistent time for family Bible study, whether daily or weekly, to build the habit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Make It Interactive</h3>
                  <p className="text-navy/80 text-sm">Use activities, games, and discussions to keep everyone engaged, regardless of age.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Ask Good Questions</h3>
                  <p className="text-navy/80 text-sm">Help your family think deeply about Scripture with thoughtful, open-ended questions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Connect to Life</h3>
                  <p className="text-navy/80 text-sm">Help family members see how Bible truths apply to their daily lives and challenges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Pray Together</h3>
                  <p className="text-navy/80 text-sm">Begin and end your study time with prayer to invite God's Holy Spirit into your study.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-navy to-brown text-cream rounded-lg p-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Start Your Family's Journey</h2>
          <p className="text-cream/90 mb-6 max-w-2xl mx-auto">
            Strengthen your family's bond and spiritual foundation by studying the Bible together.
          </p>
          <Link href="/study-plans" className="btn-primary">
            Explore Study Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
