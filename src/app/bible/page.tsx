import { getOldTestamentBooks, getNewTestamentBooks } from '@/data/books';
import BookGrid from '@/components/BookGrid';

export const metadata = {
  title: 'Bible Study Hub - Learn of Christ',
  description: 'Explore all 66 books of the Bible with chapter-by-chapter study guides, commentary, and reflections on Christ.',
};

export default function BiblePage() {
  const oldTestament = getOldTestamentBooks();
  const newTestament = getNewTestamentBooks();

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="page-header">
          <h1>Bible Study Hub</h1>
          <div className="section-divider mt-3"></div>
          <p>Navigate all 66 books with study guides, key themes, and insights pointing to Christ.</p>
        </div>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-semibold text-navy">Old Testament</h2>
            <span className="pill pill-gold">{oldTestament.length} books</span>
          </div>
          <BookGrid books={oldTestament} />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 px-1">
            <h2 className="font-sans text-lg font-semibold text-navy">New Testament</h2>
            <span className="pill pill-sage">{newTestament.length} books</span>
          </div>
          <BookGrid books={newTestament} />
        </section>
      </div>
    </div>
  );
}
