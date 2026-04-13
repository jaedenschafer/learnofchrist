import Link from 'next/link';
import { getAllTopics } from '@/data/topics';
import { getAllQuestions } from '@/data/questions';

export const metadata = {
  title: 'Learn of Christ - Understand the Bible Like Never Before',
  description: 'Free Bible study guides, multiple translations, and Christ-centered commentary to help you understand every chapter of the Bible.',
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

// Old Testament book groups for the browse section
const otGroups = [
  { label: 'Law', books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'] },
  { label: 'History', books: ['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther'] },
  { label: 'Poetry', books: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'] },
  { label: 'Prophets', books: ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'] },
];

const ntGroups = [
  { label: 'Gospels', books: ['Matthew', 'Mark', 'Luke', 'John'] },
  { label: 'History', books: ['Acts'] },
  { label: 'Letters', books: ['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude'] },
  { label: 'Prophecy', books: ['Revelation'] },
];

function bookSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function Home() {
  const topics = getAllTopics().slice(0, 8);
  const questions = getAllQuestions().slice(0, 5);
  const verse = getDailyVerse();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-home">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-medium mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            100% Free — No Account Required
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-bold text-navy leading-[1.12] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '80ms', animationFillMode: 'forwards' }}>
            We help you understand<br className="hidden sm:block" /> the Bible.
          </h1>

          <p className="text-lg sm:text-xl text-navy/55 max-w-xl mx-auto mb-10 leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Study guides, multiple translations, and Christ-centered commentary for every chapter of scripture.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}>
            <Link href="/bible" className="btn-dark">
              Start Reading
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/bible/genesis/1" className="btn-outline-soft">
              Genesis Chapter 1
            </Link>
          </div>
        </div>
      </section>

      {/* ── Verse of the Day ── */}
      <section className="px-5 sm:px-6 -mt-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card border border-black/[0.04] px-6 py-7 sm:px-8 sm:py-8 text-center">
            <p className="text-xs tracking-widest uppercase text-gold-dark font-semibold mb-4">Verse of the Day</p>
            <blockquote className="font-serif italic text-lg sm:text-xl text-navy/80 leading-relaxed mb-3">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-sm text-sage font-medium">{verse.ref}</cite>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="section-block">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">Everything you need to study the Bible</h2>
            <p className="text-base sm:text-lg text-navy/50 max-w-2xl mx-auto">All resources are free. No sign-up walls. No paywalls. Just scripture.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/bible" className="feature-card group">
              <div className="feature-card-icon bg-amber-50">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Read the Bible</h3>
              <p className="text-sm text-navy/45 leading-relaxed">All 66 books with KJV, ASV, and WEB translations. Switch between them instantly.</p>
            </Link>

            <Link href="/bible" className="feature-card group">
              <div className="feature-card-icon bg-blue-50">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Study Guides</h3>
              <p className="text-sm text-navy/45 leading-relaxed">Chapter-by-chapter commentary with context, key themes, and practical insights.</p>
            </Link>

            <Link href="/topics" className="feature-card group">
              <div className="feature-card-icon bg-emerald-50">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Topical Studies</h3>
              <p className="text-sm text-navy/45 leading-relaxed">Explore faith, grace, forgiveness, hope, and more — organized by theme with key verses.</p>
            </Link>

            <Link href="/questions" className="feature-card group">
              <div className="feature-card-icon bg-purple-50">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Bible Questions</h3>
              <p className="text-sm text-navy/45 leading-relaxed">Clear, scripture-grounded answers to common questions about faith and the Bible.</p>
            </Link>

            <Link href="/study-plans" className="feature-card group">
              <div className="feature-card-icon bg-rose-50">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Study Plans</h3>
              <p className="text-sm text-navy/45 leading-relaxed">Structured daily reading plans from 10 minutes to deep study sessions.</p>
            </Link>

            <Link href="/blog" className="feature-card group">
              <div className="feature-card-icon bg-sky-50">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              </div>
              <h3 className="font-sans text-base font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">Blog & Articles</h3>
              <p className="text-sm text-navy/45 leading-relaxed">Weekly devotionals, book overviews, and practical articles on Christian living.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Browse the Bible ── */}
      <section className="section-block bg-warm-gray">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">Browse the Bible</h2>
            <p className="text-base text-navy/50">Choose a book to start reading and studying.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old Testament */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="btn-testament bg-navy text-white">Old Testament</span>
                <span className="text-sm text-navy/40">39 books</span>
              </div>
              <div className="space-y-5">
                {otGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy/35 mb-2.5">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.books.map(book => (
                        <Link key={book} href={`/bible/${bookSlug(book)}`} className="book-pill">{book}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Testament */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="btn-testament bg-gold-dark text-white">New Testament</span>
                <span className="text-sm text-navy/40">27 books</span>
              </div>
              <div className="space-y-5">
                {ntGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy/35 mb-2.5">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.books.map(book => (
                        <Link key={book} href={`/bible/${bookSlug(book)}`} className="book-pill">{book}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Topics ── */}
      <section className="section-block">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-2">Explore by Topic</h2>
              <p className="text-base text-navy/50">What the Bible says about the things that matter most.</p>
            </div>
            <Link href="/topics" className="text-sm font-semibold text-gold-dark hover:text-gold transition-colors whitespace-nowrap">
              View all topics &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="topic-card group">
                <h3 className="font-sans text-sm font-semibold text-navy group-hover:text-gold-dark transition-colors mb-1">{topic.name}</h3>
                <p className="text-xs text-navy/40 leading-relaxed line-clamp-2">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="section-block bg-warm-gray">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-3">Common Questions</h2>
            <p className="text-base text-navy/50">Clear answers grounded in scripture.</p>
          </div>

          <div className="space-y-2.5">
            {questions.map((q) => (
              <Link key={q.id} href={`/questions/${q.id}`} className="question-row group">
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-[0.95rem] font-semibold text-navy group-hover:text-gold-dark transition-colors">{q.question}</h3>
                  <p className="text-sm text-navy/40 mt-0.5 truncate">{q.excerpt}</p>
                </div>
                <svg className="w-5 h-5 text-navy/20 group-hover:text-gold-dark transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/questions" className="text-sm font-semibold text-gold-dark hover:text-gold transition-colors">
              See all questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-block">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="cta-banner-new">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight">
              Start understanding<br />the Bible today.
            </h2>
            <p className="text-base text-white/65 max-w-md mx-auto mb-8 leading-relaxed">
              Everything is free. Pick a book, read a chapter, and let the Word speak for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/bible" className="btn-white">
                Open the Bible
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/study-plans" className="btn-outline-white">
                View Study Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
