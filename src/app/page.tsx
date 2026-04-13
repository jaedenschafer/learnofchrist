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
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <div className="opacity-0 animate-fade-in mb-6" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2.5 text-gold/60 text-xs tracking-[0.2em] uppercase font-medium">
              <span className="w-6 h-px bg-gold/40"></span>
              Scripture Study
              <span className="w-6 h-px bg-gold/40"></span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="text-gradient-gold">Learn of Christ</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 text-cream/75 max-w-md mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
            Deepen your understanding of Jesus Christ through <span className="text-cream/95 font-normal">comprehensive scripture study</span>
          </p>

          <div className="max-w-md mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <SearchBar placeholder="Search books, topics, or questions..." />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}>
            <Link href="/bible" className="btn-primary">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Start Bible Study
            </Link>
            <Link href="/study-plans" className="btn-outline !border-cream/25 !text-cream hover:!bg-cream/10">
              View Study Plans
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-xs sm:max-w-sm mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <div className="stat-item">
              <div className="stat-number">66</div>
              <div className="stat-label">Books</div>
            </div>
            <div className="stat-item border-x border-cream/10">
              <div className="stat-number">1,189</div>
              <div className="stat-label">Chapters</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Translations</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f2f1ed] to-transparent"></div>
      </section>

      {/* ── Verse of the Day ── */}
      <section className="px-4 sm:px-6 -mt-4">
        <div className="max-w-2xl mx-auto">
          <div className="verse-card card p-6 sm:p-8 text-center">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-semibold mb-4">Verse of the Day</p>
            <blockquote className="scripture-quote text-lg sm:text-xl text-navy/85 mb-4 leading-relaxed">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-xs text-sage font-medium tracking-wide">&mdash; {verse.ref}</cite>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="page-header mb-8">
            <h2 className="!text-2xl sm:!text-3xl">Explore Scripture</h2>
            <div className="section-divider mt-3"></div>
            <p>Everything you need to grow in your understanding of Jesus Christ.</p>
          </div>

          <div className="space-y-3">
            <Link href="/bible" className="card flex items-start gap-4 group">
              <div className="feature-icon bg-amber-50 text-amber-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-base font-semibold text-navy mb-0.5 group-hover:text-gold transition-colors">Read the Bible Online</h3>
                <p className="text-sm text-navy/50 leading-relaxed">All 1,189 chapters with KJV, ASV, and WEB translations. Switch instantly.</p>
              </div>
              <svg className="w-5 h-5 text-navy/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>

            <Link href="/study-plans" className="card flex items-start gap-4 group">
              <div className="feature-icon bg-blue-50 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-base font-semibold text-navy mb-0.5 group-hover:text-gold transition-colors">Daily Study Plans</h3>
                <p className="text-sm text-navy/50 leading-relaxed">Structured plans for 10 minutes or an hour of study.</p>
              </div>
              <svg className="w-5 h-5 text-navy/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>

            <Link href="/topics" className="card flex items-start gap-4 group">
              <div className="feature-icon bg-emerald-50 text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-base font-semibold text-navy mb-0.5 group-hover:text-gold transition-colors">Popular Topics</h3>
                <p className="text-sm text-navy/50 leading-relaxed">Explore faith, grace, forgiveness, and purpose with key verses.</p>
              </div>
              <svg className="w-5 h-5 text-navy/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>

            <Link href="/questions" className="card flex items-start gap-4 group">
              <div className="feature-icon bg-purple-50 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-base font-semibold text-navy mb-0.5 group-hover:text-gold transition-colors">Questions About Jesus</h3>
                <p className="text-sm text-navy/50 leading-relaxed">Answers to common questions, grounded in scripture.</p>
              </div>
              <svg className="w-5 h-5 text-navy/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Popular Topics ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="page-header mb-8">
            <h2 className="!text-2xl sm:!text-3xl">Popular Topics</h2>
            <div className="section-divider mt-3"></div>
            <p>Dive into themes that matter for your spiritual growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/topics" className="btn-secondary">View All Topics</Link>
          </div>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="page-header mb-8">
            <h2 className="!text-2xl sm:!text-3xl">Questions About Jesus</h2>
            <div className="section-divider mt-3"></div>
            <p>Explore answers people ask most about Christ and faith.</p>
          </div>
          <div className="card-grouped">
            {questions.map((question) => (
              <Link key={question.id} href={`/questions/${question.id}`} className="card-grouped-item flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-sm font-semibold text-navy group-hover:text-gold transition-colors">{question.question}</h3>
                  <p className="text-xs text-navy/45 mt-0.5 truncate">{question.excerpt}</p>
                </div>
                <svg className="w-4 h-4 text-navy/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/questions" className="btn-secondary">View All Questions</Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="cta-banner">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Begin Your Journey<br /><span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-sm sm:text-base mb-8 text-cream/70 max-w-md mx-auto leading-relaxed">
              Start understanding Jesus Christ more deeply through free, comprehensive Bible study resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/bible" className="btn-primary">Begin Study Now</Link>
              <Link href="/questions" className="btn-outline !border-cream/25 !text-cream hover:!bg-cream/10">Explore Questions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
