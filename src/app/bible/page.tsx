import Link from 'next/link';
import { getOldTestamentBooks, getNewTestamentBooks, getApocryphaBooks } from '@/data/books';
import BookGrid from '@/components/BookGrid';

export const metadata = {
  title: 'Bible Study Hub — Read & Study All 72 Books | Learn of Christ',
  description: 'Read every chapter of the Bible with 7 translations including KJV, JST, BSB, ASV, WEB, LSV, and DRA. Study guides, key themes, and connections to Christ.',
  openGraph: {
    title: 'Bible Study Hub — Learn of Christ',
    description: 'Read every chapter of the Bible with study guides and real-time translation switching.',
    url: 'https://learnofchrist.com/bible',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/bible',
  },
};

const FEATURED_STUDIES = [
  { book: 'john', chapter: 1, title: 'John 1', subtitle: 'The Word Made Flesh', badge: 'Start Here' },
  { book: 'genesis', chapter: 1, title: 'Genesis 1', subtitle: 'Creation of the World', badge: 'Beginning' },
  { book: 'john', chapter: 3, title: 'John 3', subtitle: 'For God So Loved the World', badge: 'Gospel' },
  { book: 'psalms', chapter: 23, title: 'Psalm 23', subtitle: 'The Lord Is My Shepherd', badge: 'Beloved' },
  { book: 'genesis', chapter: 3, title: 'Genesis 3', subtitle: 'The Fall & First Promise', badge: 'Key' },
  { book: 'john', chapter: 14, title: 'John 14', subtitle: 'The Way, Truth & Life', badge: 'Essential' },
];

export default function BiblePage() {
  const oldTestament = getOldTestamentBooks();
  const newTestament = getNewTestamentBooks();
  const apocrypha = getApocryphaBooks();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="page-header">
          <h1>Bible Study Hub</h1>
          <p>All 66 books plus 6 Deuterocanonical books, with real-time translation switching between 7 translations including KJV, JST, BSB, and DRA.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">72</p>
            <p className="text-xs text-[#86868B] mt-0.5">Books</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">1,320</p>
            <p className="text-xs text-[#86868B] mt-0.5">Chapters</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">7</p>
            <p className="text-xs text-[#86868B] mt-0.5">Translations</p>
          </div>
        </div>

        {/* Featured Studies */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Featured Studies</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF] text-xs">In-Depth Content</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {FEATURED_STUDIES.map((study) => (
              <Link
                key={`${study.book}/${study.chapter}`}
                href={`/bible/${study.book}/${study.chapter}`}
                className="bg-white rounded-2xl p-4 group hover:shadow-md transition-all"
              >
                <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF] text-[10px] mb-2 inline-block">{study.badge}</span>
                <h3 className="text-base font-bold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors">{study.title}</h3>
                <p className="text-xs text-[#86868B] mt-0.5">{study.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Old Testament */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Old Testament</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF]">{oldTestament.length} books</span>
          </div>
          <BookGrid books={oldTestament} />
        </section>

        {/* New Testament */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">New Testament</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF]">{newTestament.length} books</span>
          </div>
          <BookGrid books={newTestament} />
        </section>

        {/* Apocrypha / Deuterocanonical */}
        <section>
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Deuterocanonical Books</h2>
            <span className="pill bg-[#AF52DE]/[0.08] text-[#AF52DE]">{apocrypha.length} books</span>
          </div>
          <p className="text-[0.8125rem] text-[#86868B] mb-4 px-1">Included in Catholic Bibles. Available in the Douay-Rheims American (DRA) translation.</p>
          <BookGrid books={apocrypha} />
        </section>
      </div>
    </div>
  );
}
