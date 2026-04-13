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
  const questions = getAllQuestions().slice(0, 6);
  const verse = getDailyVerse();

  return (
    <>
      {/* ═══════════════════ HERO (sky gradient) ═══════════════════ */}
      <section className="b44-hero">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h1 className="b44-hero-title">
            Turn your quiet time into<br className="hidden sm:block" /> real understanding
          </h1>
          <p className="b44-hero-sub">
            Learn of Christ gives you free study guides, multiple translations,
            and Christ-centered commentary for every chapter of the Bible.
            No account needed.
          </p>

          {/* Prompt-style card */}
          <div className="b44-prompt-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#F5F4F1] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <p className="text-[0.9375rem] text-black/40 text-left">Where would you like to start studying?</p>
            </div>
            <div className="flex items-center gap-2 border-t border-black/[0.06] pt-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F4F1] flex items-center justify-center">
                <svg className="w-4 h-4 text-black/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <div className="flex-1" />
              <Link href="/bible" className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </Link>
            </div>
          </div>

          {/* Suggestion chips */}
          <p className="b44-suggest-label mt-8 mb-3">NOT SURE WHERE TO START? TRY ONE OF THESE:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/bible/genesis/1" className="b44-chip">Genesis 1</Link>
            <Link href="/bible/john/1" className="b44-chip">Gospel of John</Link>
            <Link href="/bible/psalms/1" className="b44-chip">Psalms</Link>
            <Link href="/bible/romans/1" className="b44-chip">Romans</Link>
            <Link href="/bible/proverbs/1" className="b44-chip">Proverbs</Link>
            <Link href="/bible/matthew/1" className="b44-chip">Matthew</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VERSE OF THE DAY ═══════════════════ */}
      <section className="px-5 -mt-6 relative z-10 mb-4">
        <div className="max-w-2xl mx-auto">
          <div className="b44-card px-6 py-7 text-center">
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#ADE900] font-medium mb-3">Verse of the Day</p>
            <blockquote className="font-[Georgia,serif] italic text-lg sm:text-xl text-black/70 leading-relaxed mb-2">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-sm text-black/40 font-medium">{verse.ref}</cite>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONSIDER YOURSELF LIMITLESS ═══════════════════ */}
      <section className="b44-section bg-warm-gray">
        <div className="max-w-5xl mx-auto px-5 text-center mb-12">
          <h2 className="b44-section-title">Consider yourself limitless</h2>
        </div>

        {/* Numbered Feature Sections (01/04, 02/04…) */}
        <div className="max-w-5xl mx-auto px-5 space-y-5">

          {/* 01/04 */}
          <div className="b44-feature-row">
            <div className="b44-feature-content">
              <span className="b44-feature-num">01 <span className="text-black/15">/</span> 04</span>
              <h3 className="b44-feature-heading">Read the full Bible, your way</h3>
              <p className="b44-feature-desc">
                All 66 books in three translations — KJV, ASV, and WEB. Switch between them instantly on every chapter. Each verse is formatted for comfortable reading with a clean, distraction-free layout.
              </p>
              <div><Link href="/bible" className="b44-feature-link">Start reading</Link></div>
            </div>
            <div className="b44-feature-visual bg-[#FFF8ED]">
              <div className="space-y-3 p-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 rounded-full bg-black text-white text-xs font-medium">KJV</div>
                  <div className="px-3 py-1 rounded-full bg-white text-black/40 text-xs border border-black/10">ASV</div>
                  <div className="px-3 py-1 rounded-full bg-white text-black/40 text-xs border border-black/10">WEB</div>
                </div>
                <p className="font-[Georgia,serif] text-black/60 text-[0.9375rem] leading-relaxed"><span className="text-[0.65rem] font-bold text-[#ADE900] align-super mr-1">1</span>In the beginning was the Word, and the Word was with God, and the Word was God.</p>
                <p className="font-[Georgia,serif] text-black/60 text-[0.9375rem] leading-relaxed"><span className="text-[0.65rem] font-bold text-[#ADE900] align-super mr-1">2</span>The same was in the beginning with God.</p>
                <p className="font-[Georgia,serif] text-black/60 text-[0.9375rem] leading-relaxed"><span className="text-[0.65rem] font-bold text-[#ADE900] align-super mr-1">3</span>All things were made by him; and without him was not any thing made that was made.</p>
              </div>
            </div>
          </div>

          {/* 02/04 */}
          <div className="b44-feature-row">
            <div className="b44-feature-content">
              <span className="b44-feature-num">02 <span className="text-black/15">/</span> 04</span>
              <h3 className="b44-feature-heading">Study guides for every chapter</h3>
              <p className="b44-feature-desc">
                Every chapter comes with an overview, key themes, study questions, cross references, and a connection to Christ. Dive deeper with verse-by-verse explanations and original language insights.
              </p>
              <div><Link href="/bible/john/1" className="b44-feature-link">Try John 1</Link></div>
            </div>
            <div className="b44-feature-visual bg-[#EDF4FF]">
              <div className="space-y-2.5 p-2">
                <div className="bg-white rounded-xl p-4 border border-black/[0.04]">
                  <span className="text-xs font-medium text-[#ADE900]">Key Verse</span>
                  <p className="font-[Georgia,serif] italic text-black/60 text-sm mt-1 leading-relaxed">&ldquo;And the Word was made flesh, and dwelt among us&hellip;&rdquo;</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/[0.04]">
                  <span className="text-xs font-medium text-black/50">Overview</span>
                  <p className="text-sm text-black/40 mt-1 leading-relaxed">John opens with a majestic declaration of Christ&apos;s deity&hellip;</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/[0.04]">
                  <span className="text-xs font-medium text-black/50">Study Questions</span>
                  <p className="text-sm text-black/40 mt-1 leading-relaxed">What does it mean that Jesus is &ldquo;the Word&rdquo;?</p>
                </div>
              </div>
            </div>
          </div>

          {/* 03/04 */}
          <div className="b44-feature-row">
            <div className="b44-feature-content">
              <span className="b44-feature-num">03 <span className="text-black/15">/</span> 04</span>
              <h3 className="b44-feature-heading">Explore topics and answers</h3>
              <p className="b44-feature-desc">
                What does the Bible say about forgiveness? Grace? Anxiety? Browse organized topical studies with key verses and practical applications, plus scripture-grounded answers to common faith questions.
              </p>
              <div><Link href="/topics" className="b44-feature-link">Browse topics</Link></div>
            </div>
            <div className="b44-feature-visual bg-[#EDFBF0]">
              <div className="grid grid-cols-2 gap-2 p-2">
                {['Faith', 'Grace', 'Forgiveness', 'Hope', 'Prayer', 'Love'].map((t) => (
                  <div key={t} className="bg-white rounded-xl px-4 py-3 border border-black/[0.04] text-center">
                    <p className="text-sm font-medium text-black/80">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 04/04 */}
          <div className="b44-feature-row">
            <div className="b44-feature-content">
              <span className="b44-feature-num">04 <span className="text-black/15">/</span> 04</span>
              <h3 className="b44-feature-heading">100% free. No sign-up. No ads.</h3>
              <p className="b44-feature-desc">
                Learn of Christ is built as a ministry, not a business. There are no paywalls, no account walls, and no advertisements. Just the Word of God, freely given to anyone who wants to learn.
              </p>
              <div><Link href="/bible/genesis/1" className="b44-feature-link">Start with Genesis</Link></div>
            </div>
            <div className="b44-feature-visual bg-[#FFF0F5]">
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.04] flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-[#ADE900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <p className="text-base font-medium text-black/80 mb-1">Free forever</p>
                <p className="text-sm text-black/40">66 books &middot; 1,189 chapters &middot; 31,102 verses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BROWSE THE BIBLE ═══════════════════ */}
      <section className="b44-section">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="b44-section-title">Browse the Bible</h2>
            <p className="text-base text-black/40 max-w-xl mx-auto mt-3">Choose a book to start reading and studying.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Old Testament */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="btn-testament bg-black text-white">Old Testament</span>
                <span className="text-sm text-black/30">39 books</span>
              </div>
              <div className="space-y-5">
                {otGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-[0.65rem] font-medium uppercase tracking-widest text-black/25 mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
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
              <div className="flex items-center gap-3 mb-6">
                <span className="btn-testament bg-[#ADE900] text-black">New Testament</span>
                <span className="text-sm text-black/30">27 books</span>
              </div>
              <div className="space-y-5">
                {ntGroups.map(group => (
                  <div key={group.label}>
                    <p className="text-[0.65rem] font-medium uppercase tracking-widest text-black/25 mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
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

      {/* ═══════════════════ TOPICS ═══════════════════ */}
      <section className="b44-section bg-warm-gray">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="b44-section-title text-left">Explore by Topic</h2>
              <p className="text-base text-black/40 mt-3">What the Bible says about the things that matter most.</p>
            </div>
            <Link href="/topics" className="text-sm font-medium text-black/60 hover:text-black transition-colors whitespace-nowrap">
              View all topics &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="b44-card group p-5 hover:shadow-lg transition-all duration-200">
                <h3 className="font-sans text-[0.9375rem] font-medium text-black/80 group-hover:text-black transition-colors mb-1">{topic.name}</h3>
                <p className="text-sm text-black/35 leading-relaxed line-clamp-2">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ / COMMON QUESTIONS ═══════════════════ */}
      <section className="b44-section">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="b44-section-title">Frequently asked questions</h2>
            <p className="text-base text-black/40 mt-3">Clear answers grounded in scripture.</p>
          </div>

          <div className="space-y-3">
            {questions.map((q) => (
              <Link key={q.id} href={`/questions/${q.id}`} className="b44-faq-row group">
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-[0.9375rem] font-medium text-black/80 group-hover:text-black transition-colors">{q.question}</h3>
                  <p className="text-sm text-black/30 mt-0.5 truncate">{q.excerpt}</p>
                </div>
                <svg className="w-5 h-5 text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/questions" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
              See all questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA (gradient bar) ═══════════════════ */}
      <section className="b44-section">
        <div className="max-w-3xl mx-auto px-5">
          <div className="b44-cta">
            <h2 className="font-[Outfit,sans-serif] text-3xl sm:text-4xl lg:text-[3.25rem] font-normal text-white leading-tight mb-4">
              So, what are we studying?
            </h2>
            <p className="text-base text-white/50 max-w-md mx-auto mb-8 leading-relaxed">
              Everything is free. Pick a book, read a chapter, and let the Word speak.
            </p>
            <Link href="/bible" className="btn-lime text-base px-8 py-3">
              Get started
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
