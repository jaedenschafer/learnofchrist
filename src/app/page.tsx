import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllTopics } from '@/data/topics';
import { getAllQuestions } from '@/data/questions';
import TopicCard from '@/components/TopicCard';

export const metadata = {
  title: 'Learn of Christ - Bible Study for Understanding Jesus',
  description: 'Deepen your understanding of Jesus Christ through comprehensive scripture study guides, daily study plans, and spiritual insights.',
};

const dailyVerses = [
  { text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', ref: 'Matthew 11:28' },
  { text: 'I am the way, the truth, and the life: no man cometh unto the Father, but by me.', ref: 'John 14:6' },
  { text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', ref: 'John 3:16' },
  { text: 'The Lord is my shepherd; I shall not want.', ref: 'Psalm 23:1' },
  { text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.', ref: 'Proverbs 3:5' },
  { text: 'Be still, and know that I am God.', ref: 'Psalm 46:10' },
  { text: 'And we know that all things work together for good to them that love God.', ref: 'Romans 8:28' },
];

function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return dailyVerses[dayOfYear % dailyVerses.length];
}

export default function Home() {
  const topics = getAllTopics().slice(0, 6);
  const questions = getAllQuestions().slice(0, 4);
  const verse = getDailyVerse();

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Small cross accent */}
          <div className="opacity-0 animate-fade-in mb-8" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-3 text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
              <span className="w-8 h-px bg-gold/40"></span>
              Scripture Study
              <span className="w-8 h-px bg-gold/40"></span>
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <span className="text-gradient-gold">Learn of Christ</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-10 text-cream/80 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
          >
            Deepen your understanding of Jesus Christ through
            <span className="text-cream font-normal"> comprehensive scripture study</span>
          </p>

          <div
            className="max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <SearchBar placeholder="Search books, topics, or questions..." />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
          >
            <Link href="/bible" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Start Bible Study
            </Link>
            <Link href="/study-plans" className="btn-outline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              View Study Plans
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="mt-16 grid grid-cols-3 max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <div className="stat-item">
              <div className="stat-number">66</div>
              <div className="stat-label">Books</div>
            </div>
            <div className="stat-item border-x border-cream/10">
              <div className="stat-number">1,189</div>
              <div className="stat-label">Chapters</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Topics</div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent"></div>
      </section>

      {/* ── Verse of the Day ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="verse-card card bg-white p-8 md:p-12 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-6">Verse of the Day</p>
            <blockquote className="scripture-quote text-xl md:text-2xl text-navy/90 mb-6 leading-relaxed">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-sm text-sage font-medium tracking-wide">&mdash; {verse.ref}</cite>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Explore Scripture</h2>
            <div className="section-divider"></div>
            <p className="text-navy/60 max-w-2xl mx-auto text-lg">Everything you need to grow in your understanding of Jesus Christ and His teachings.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Chapter-by-Chapter */}
            <div className="card group">
              <div className="feature-icon bg-amber-50 text-amber-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Chapter-by-Chapter Study Guides</h3>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Navigate every chapter of the Bible with detailed overviews, key themes, verse highlights, and reflections on how each chapter points to Christ.
              </p>
              <Link href="/bible" className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                Explore Bible
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Study Plans */}
            <div className="card group">
              <div className="feature-icon bg-blue-50 text-blue-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Daily Study Plans</h3>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Choose from structured reading plans designed to help you engage with scripture consistently, whether you have 10 minutes or an hour.
              </p>
              <Link href="/study-plans" className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                View Plans
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Topics */}
            <div className="card group">
              <div className="feature-icon bg-emerald-50 text-emerald-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Popular Topics</h3>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Explore topics like faith, grace, forgiveness, and purpose. Each topic includes key verses and deep connections to scripture.
              </p>
              <Link href="/topics" className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                Browse Topics
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Questions */}
            <div className="card group">
              <div className="feature-icon bg-purple-50 text-purple-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Questions About Jesus</h3>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Get answers to common questions about Jesus, salvation, faith, and living as a Christian, all grounded in scripture.
              </p>
              <Link href="/questions" className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                Find Answers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Topics ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Popular Topics</h2>
            <div className="section-divider"></div>
            <p className="text-navy/60 max-w-xl mx-auto">Dive into the themes that matter most for your spiritual growth.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/topics" className="btn-secondary">
              View All Topics
              <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Questions Section ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Questions About Jesus</h2>
            <div className="section-divider"></div>
            <p className="text-navy/60 max-w-xl mx-auto">Explore answers to the questions people ask most about Christ and faith.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {questions.map((question) => (
              <Link
                key={question.id}
                href={`/questions/${question.id}`}
                className="card group flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1 group-hover:text-gold transition-colors">{question.question}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{question.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/questions" className="btn-secondary">
              View All Questions
              <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <NewsletterSignup />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-brown"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-cream">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Begin Your Journey<br />
            <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-lg mb-10 text-cream/80 max-w-xl mx-auto leading-relaxed">
            Start understanding Jesus Christ more deeply through our comprehensive, free Bible study resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bible" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Begin Study Now
            </Link>
            <Link href="/questions" className="btn-outline">
              Explore Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
