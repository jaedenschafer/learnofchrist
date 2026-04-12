import Link from 'next/link';

export const metadata = {
  title: 'About - Learn of Christ',
  description: 'Learn about our mission to help people deepen their understanding of Jesus Christ through scripture study.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">About Learn of Christ</h1>
          <p className="text-xl text-navy/80">
            Our mission is to help you develop a deeper, more meaningful relationship with Jesus Christ through Scripture.
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-8">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Mission</h2>
          <p className="text-navy/90 leading-relaxed mb-4">
            At Learn of Christ, we believe that understanding Jesus Christ is the foundation of a vibrant spiritual life. Our mission is to provide accessible, biblically-grounded resources that help individuals and families grow in their knowledge of Christ and apply His teachings to their daily lives.
          </p>
          <p className="text-navy/90 leading-relaxed">
            We are committed to presenting Scripture with clarity, reverence, and depth—helping people see how every passage of the Bible points to Jesus Christ and reveals God's redemptive plan for humanity.
          </p>
        </div>

        {/* Core Values */}
        <section className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-navy mb-6 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Biblical Fidelity</h3>
              <p className="text-navy/80">
                We are committed to presenting Scripture accurately and faithfully, allowing God's Word to speak for itself.
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Accessibility</h3>
              <p className="text-navy/80">
                We create resources that are easy to understand and applicable to people of all backgrounds and ages.
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Christ-Centered</h3>
              <p className="text-navy/80">
                Every resource points to Jesus Christ as the center of Scripture and the hope of the Gospel.
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Transformative</h3>
              <p className="text-navy/80">
                We aim to help people apply Biblical truths that lead to genuine spiritual transformation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-navy mb-6 text-center">What We Offer</h2>
          <div className="space-y-4">
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">📖</div>
              <div>
                <h3 className="font-bold text-navy mb-2">Chapter-by-Chapter Study Guides</h3>
                <p className="text-navy/80 text-sm">
                  Detailed explorations of every chapter in the Bible with key themes, verse highlights, study questions, and connections to Christ.
                </p>
              </div>
            </div>
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">📚</div>
              <div>
                <h3 className="font-bold text-navy mb-2">Structured Study Plans</h3>
                <p className="text-navy/80 text-sm">
                  Designed reading plans and study programs to help you engage with Scripture consistently and meaningfully.
                </p>
              </div>
            </div>
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-navy mb-2">Topical Resources</h3>
                <p className="text-navy/80 text-sm">
                  Explore biblical themes like faith, grace, forgiveness, and peace with key verses and cross-references.
                </p>
              </div>
            </div>
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">❓</div>
              <div>
                <h3 className="font-bold text-navy mb-2">Questions and Answers</h3>
                <p className="text-navy/80 text-sm">
                  Thoughtful biblical answers to common questions about Jesus, faith, salvation, and Christian living.
                </p>
              </div>
            </div>
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="font-bold text-navy mb-2">Family Resources</h3>
                <p className="text-navy/80 text-sm">
                  Tools for families to study Scripture together, including guides, lesson plans, and activities for all ages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <div className="card bg-gold/10">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Our Commitment to You</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-navy/80">All resources are free and available to anyone who wants to study the Bible.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-navy/80">We respect all Christian traditions while remaining faithful to core Biblical truths.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-navy/80">We continuously add new resources and improve existing ones based on your feedback.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-navy/80">Your privacy is important to us—we never share personal information.</p>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Begin?</h2>
          <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
            Start your journey to a deeper understanding of Jesus Christ today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bible" className="btn-primary">
              Explore the Bible
            </Link>
            <Link href="/study-plans" className="btn-secondary">
              View Study Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
