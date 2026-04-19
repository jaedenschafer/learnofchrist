import Link from 'next/link';
import { getOldTestamentBooks, getNewTestamentBooks, getApocryphaBooks } from '@/data/books';
import BookGrid from '@/components/BookGrid';

export const metadata = {
  title: 'Bible Study Guides — Chapter-by-Chapter Commentary | Learn of Christ',
  description: 'Deep study guides for every chapter of the Bible. Overview, themes, questions, Christ connections, and 10 denominational lenses.',
  openGraph: {
    title: 'Bible Study Guides — Learn of Christ',
    description: 'Chapter-by-chapter study guides for the entire Bible with themes, questions, and Christ connections.',
    url: 'https://learnofchrist.com/study',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/study',
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

export default function StudyIndexPage() {
  const oldTestament = getOldTestamentBooks();
  const newTestament = getNewTestamentBooks();
  const apocrypha = getApocryphaBooks();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="page-header">
          <h1>Study Guides</h1>
          <p>Chapter-by-chapter study guides for every chapter of the Bible. Themes, discussion questions, Christ connections, and denominational lenses.</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">72</p>
            <p className="text-xs text-[#86868B] mt-0.5">Books</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">1,320</p>
            <p className="text-xs text-[#86868B] mt-0.5">Study Guides</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-[#007AFF]">10</p>
            <p className="text-xs text-[#86868B] mt-0.5">Lenses</p>
          </div>
        </div>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Featured Studies</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF] text-xs">In-Depth Content</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {FEATURED_STUDIES.map((study) => (
              <Link
                key={`${study.book}/${study.chapter}`}
                href={`/study/${study.book}/${study.chapter}`}
                className="bg-white rounded-2xl p-4 group hover:shadow-md transition-all"
              >
                <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF] text-[10px] mb-2 inline-block">{study.badge}</span>
                <h3 className="text-base font-bold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors">{study.title}</h3>
                <p className="text-xs text-[#86868B] mt-0.5">{study.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Old Testament</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF]">{oldTestament.length} books</span>
          </div>
          <BookGrid books={oldTestament} basePath="/study" />
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">New Testament</h2>
            <span className="pill bg-[#007AFF]/[0.08] text-[#007AFF]">{newTestament.length} books</span>
          </div>
          <BookGrid books={newTestament} basePath="/study" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-bold text-[#1D1D1F]">Deuterocanonical Books</h2>
            <span className="pill bg-[#AF52DE]/[0.08] text-[#AF52DE]">{apocrypha.length} books</span>
          </div>
          <p className="text-[0.8125rem] text-[#86868B] mb-4 px-1">Included in Catholic Bibles. Available in the Douay-Rheims American (DRA) translation.</p>
          <BookGrid books={apocrypha} basePath="/study" />
        </section>
      </div>
    </div>
  );
}
