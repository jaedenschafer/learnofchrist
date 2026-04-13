import Link from 'next/link';
import { getAllTopics } from '@/data/topics';
import { getAllQuestions } from '@/data/questions';

export const metadata = {
  title: 'Learn of Christ — Free Bible Study for Everyone',
  description: 'Study every chapter of the Bible with free guides, multiple translations, and Christ-centered commentary. No account required.',
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
      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-14 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-[2.5rem] sm:text-[3.25rem] font-bold tracking-tight leading-[1.05] text-[#1D1D1F] mb-4">
            Study the Bible,<br />understand Jesus.
          </h1>
          <p className="text-[1.0625rem] sm:text-lg text-[#86868B] leading-relaxed max-w-lg mx-auto mb-8">
            Free study guides, three translations, and Christ-centered commentary for every chapter. No account needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/bible" className="btn-primary text-base px-6 py-3">
              Start Reading
            </Link>
            <Link href="/bible/john/1" className="btn-secondary text-base px-6 py-3">
              Try John 1
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ VERSE OF THE DAY ═══════════ */}
      <section className="px-5 pb-10">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#007AFF] mb-4">Verse of the Day</p>
            <blockquote className="font-serif italic text-[1.125rem] sm:text-xl text-[#1D1D1F]/80 leading-relaxed mb-3">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-[0.875rem] text-[#86868B] font-medium">{verse.ref}</cite>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="py-12 sm:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight text-[#1D1D1F]">Everything you need to study</h2>
            <p className="text-[#86868B] mt-2 text-base">Simple tools for deeper understanding.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7">
              <div className="w-11 h-11 rounded-2xl bg-[#007AFF]/[0.08] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#007AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#1D1D1F] mb-1.5">Three Translations</h3>
              <p className="text-[0.9375rem] text-[#86868B] leading-relaxed">
                Read in KJV, ASV, or WEB. Switch instantly on any chapter.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7">
              <div className="w-11 h-11 rounded-2xl bg-[#34C759]/[0.08] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#1D1D1F] mb-1.5">Study Guides</h3>
              <p className="text-[0.9375rem] text-[#86868B] leading-relaxed">
                Key themes, study questions, and connections to Christ for every chapter.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7">
              <div className="w-11 h-11 rounded-2xl bg-[#FF9500]/[0.08] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FF9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#1D1D1F] mb-1.5">Topics & Answers</h3>
              <p className="text-[0.9375rem] text-[#86868B] leading-relaxed">
                What does the Bible say about faith, grace, forgiveness, and more?
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7">
              <div className="w-11 h-11 rounded-2xl bg-[#AF52DE]/[0.08] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#AF52DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#1D1D1F] mb-1.5">Free Forever</h3>
              <p className="text-[0.9375rem] text-[#86868B] leading-relaxed">
                No ads, no paywalls, no account needed. Just the Word of God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK START ═══════════ */}
      <section className="py-10 px-5">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight text-[#1D1D1F]">Start here</h2>
          <p className="text-[#86868B] mt-2">Pick a book that interests you.</p>
        </div>
        <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-2">
          {['Genesis', 'Psalms', 'Proverbs', 'Matthew', 'John', 'Romans', 'Hebrews', 'Revelation'].map((name) => (
            <Link
              key={name}
              href={`/bible/${bookSlug(name)}`}
              className="px-4 py-2 rounded-full bg-white text-[0.875rem] font-medium text-[#1D1D1F] hover:bg-[#007AFF] hover:text-white transition-all active:scale-95"
            >
              {name}
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════ BROWSE THE BIBLE ═══════════ */}
      <section className="py-12 sm:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight text-[#1D1D1F]">Browse the Bible</h2>
            <p className="text-[#86868B] mt-2">All 72 books across 7 translations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old Testament */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[0.8125rem] font-semibold text-[#1D1D1F] bg-white px-4 py-1.5 rounded-full">Old Testament</span>
                <span className="text-[0.75rem] text-[#AEAEB2]">39 books</span>
              </div>
              <div className="space-y-5">
                {otGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#AEAEB2] mb-2.5 px-1">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.books.map(book => (
                        <Link
                          key={book}
                          href={`/bible/${bookSlug(book)}`}
                          className="px-3 py-1.5 rounded-xl bg-white text-[0.8125rem] font-medium text-[#1D1D1F]/80 hover:text-[#007AFF] hover:bg-[#007AFF]/[0.06] transition-all active:scale-95"
                        >
                          {book}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Testament */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[0.8125rem] font-semibold text-white bg-[#007AFF] px-4 py-1.5 rounded-full">New Testament</span>
                <span className="text-[0.75rem] text-[#AEAEB2]">27 books</span>
              </div>
              <div className="space-y-5">
                {ntGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#AEAEB2] mb-2.5 px-1">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.books.map(book => (
                        <Link
                          key={book}
                          href={`/bible/${bookSlug(book)}`}
                          className="px-3 py-1.5 rounded-xl bg-white text-[0.8125rem] font-medium text-[#1D1D1F]/80 hover:text-[#007AFF] hover:bg-[#007AFF]/[0.06] transition-all active:scale-95"
                        >
                          {book}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TOPICS ═══════════ */}
      <section className="py-12 sm:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight text-[#1D1D1F]">Topics</h2>
              <p className="text-[#86868B] mt-1">What the Bible says about what matters most.</p>
            </div>
            <Link href="/topics" className="text-[0.875rem] font-medium text-[#007AFF] hover:underline whitespace-nowrap hidden sm:block">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="bg-white rounded-2xl p-4 group hover:shadow-md transition-all active:scale-[0.98]"
              >
                <h3 className="text-[0.9375rem] font-semibold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors mb-1">{topic.name}</h3>
                <p className="text-[0.8125rem] text-[#AEAEB2] leading-relaxed line-clamp-2">{topic.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 sm:hidden">
            <Link href="/topics" className="text-[0.875rem] font-medium text-[#007AFF]">See all topics</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ QUESTIONS ═══════════ */}
      <section className="py-12 sm:py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight text-[#1D1D1F]">Common Questions</h2>
            <p className="text-[#86868B] mt-2">Clear answers grounded in scripture.</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            {questions.map((q, i) => (
              <Link
                key={q.id}
                href={`/questions/${q.id}`}
                className={`flex items-center gap-3 px-5 py-4 group hover:bg-black/[0.015] transition-colors active:bg-black/[0.03] ${
                  i < questions.length - 1 ? 'border-b border-[#F5F5F7]' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-[0.9375rem] font-medium text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors">{q.question}</h3>
                  <p className="text-[0.8125rem] text-[#AEAEB2] mt-0.5 truncate">{q.excerpt}</p>
                </div>
                <svg className="w-4 h-4 text-[#AEAEB2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/questions" className="text-[0.875rem] font-medium text-[#007AFF] hover:underline">
              See all questions
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="cta-banner">
            <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold text-white tracking-tight leading-tight mb-3">
              Ready to study?
            </h2>
            <p className="text-[0.9375rem] text-white/50 max-w-sm mx-auto mb-6 leading-relaxed">
              Pick a book, read a chapter, and let the Word speak. Everything is free.
            </p>
            <Link href="/bible" className="inline-flex items-center gap-2 bg-white text-[#1D1D1F] px-6 py-3 rounded-full text-[0.9375rem] font-semibold hover:bg-white/90 transition-all active:scale-95">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
