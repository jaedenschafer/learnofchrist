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
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Bible Study Hub</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Navigate all 66 books of the Bible with detailed study guides, key themes, and insights on how each passage points to Christ.
          </p>
        </div>

        {/* Old Testament */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-navy">Old Testament</h2>
            <div className="text-sm bg-gold text-navy px-3 py-1 rounded-full font-medium">{oldTestament.length} books</div>
          </div>
          <BookGrid books={oldTestament} />
        </section>

        {/* New Testament */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-navy">New Testament</h2>
            <div className="text-sm bg-sage text-white px-3 py-1 rounded-full font-medium">{newTestament.length} books</div>
          </div>
          <BookGrid books={newTestament} />
        </section>
      </div>
    </div>
  );
}
