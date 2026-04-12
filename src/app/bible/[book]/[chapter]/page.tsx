import Link from 'next/link';
import { getAllBooks, getBookByName } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ChapterNav from '@/components/ChapterNav';

interface ChapterPageProps {
  params: Promise<{
    book: string;
    chapter: string;
  }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') {
    return '';
  }
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export async function generateStaticParams() {
  const books = getAllBooks();
  const params = [];

  // Pre-render Genesis 1-3 and John 1-3 as examples
  const genesisBook = books.find(b => b.name === 'Genesis');
  if (genesisBook) {
    for (let i = 1; i <= 3; i++) {
      params.push({ book: bookNameToSlug(genesisBook.name), chapter: i.toString() });
    }
  }

  const johnBook = books.find(b => b.name === 'John');
  if (johnBook) {
    for (let i = 1; i <= 3; i++) {
      params.push({ book: bookNameToSlug(johnBook.name), chapter: i.toString() });
    }
  }

  return params;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { book, chapter: chapterStr } = await params;
  
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj || chapter < 1 || chapter > book_obj.chapters) {
    return (
      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-navy mb-4">Chapter Not Found</h1>
          <p className="text-lg text-navy/80 mb-8">The chapter you're looking for couldn't be found.</p>
          <Link href="/bible" className="btn-primary">
            Back to Bible Study
          </Link>
        </div>
      </div>
    );
  }

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BreadcrumbNav
          items={[
            { label: 'Bible', href: '/bible' },
            { label: book_obj.name, href: `/bible/${book}` },
            { label: `Chapter ${chapter}`, href: '#' },
          ]}
        />

        {/* Header */}
        <div className="card mb-8">
          <div className="mb-2">
            <span className="text-xs font-semibold text-sage uppercase tracking-wide">{book_obj.name}</span>
          </div>
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Chapter {chapter}</h1>
          <p className="text-navy/80">A detailed study guide to help you understand this chapter and its connection to Christ.</p>
        </div>

        {/* Study Content */}
        <div className="space-y-8">
          {/* Overview */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Overview</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              {book_obj.name} Chapter {chapter} continues the biblical narrative and provides important insights into God's character and His plan for redemption. This chapter builds upon the foundation laid in previous chapters and sets the stage for what comes next.
            </p>
            <p className="text-navy/80 leading-relaxed">
              As you study this chapter, you'll discover themes of faith, obedience, grace, and God's unfailing love. Pay attention to how the events and teachings in this passage foreshadow or illuminate the person and work of Jesus Christ.
            </p>
          </div>

          {/* Key Themes */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Key Themes</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">1.</span>
                <div>
                  <h3 className="font-bold text-navy">God's Faithfulness</h3>
                  <p className="text-sm text-navy/80">Throughout this chapter, we see God's consistent character and His commitment to His covenant promises.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">2.</span>
                <div>
                  <h3 className="font-bold text-navy">Human Response</h3>
                  <p className="text-sm text-navy/80">The characters in this chapter demonstrate various responses to God's word—some faithful, some wavering—showing us the consequences of belief and doubt.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">3.</span>
                <div>
                  <h3 className="font-bold text-navy">Spiritual Truth</h3>
                  <p className="text-sm text-navy/80">This passage reveals spiritual principles applicable to our faith journey today.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Verse-by-Verse Highlights */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Verse-by-Verse Highlights</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="font-semibold text-navy text-sm">Verses 1-5</p>
                <p className="text-navy/80 text-sm mt-1">The opening verses establish the context and introduce the main characters or events of this chapter. Pay close attention to the setting and circumstance, as these provide crucial context for understanding what follows.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="font-semibold text-navy text-sm">Verses 6-10</p>
                <p className="text-navy/80 text-sm mt-1">These verses contain the central action or teaching of the chapter. Notice the turning point and how it relates to the main theme.</p>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="font-semibold text-navy text-sm">Verses 11-End</p>
                <p className="text-navy/80 text-sm mt-1">The conclusion of the chapter often provides resolution or raises questions that point toward the next chapter. Consider how this ending sets up what comes next.</p>
              </div>
            </div>
          </div>

          {/* Study Questions */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Study Questions</h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">1.</span>
                <p className="text-navy/80">What are the main events or teachings described in this chapter?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">2.</span>
                <p className="text-navy/80">How do the characters respond to God in this passage? What can we learn from their example?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">3.</span>
                <p className="text-navy/80">What challenges or struggles are presented in this chapter, and how are they resolved?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">4.</span>
                <p className="text-navy/80">How does this chapter reveal God's character, and what does it teach us about His nature?</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold flex-shrink-0">5.</span>
                <p className="text-navy/80">What spiritual principles or lessons can you apply to your own faith journey?</p>
              </li>
            </ol>
          </div>

          {/* How This Points to Christ */}
          <div className="card">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">How This Points to Christ</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Every passage of Scripture ultimately points to Jesus Christ, either through direct prophecy, typology, or thematic connection. In this chapter:
            </p>
            <div style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)', borderLeft: '4px solid #d4a574', paddingLeft: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', borderRadius: '0.25rem' }}>
              <p className="scripture-quote text-navy leading-relaxed mb-3">
                Throughout the Old Testament narrative, we see patterns and predictions that find their fulfillment in Jesus. In the New Testament, Jesus is revealed as the one who embodies God's promises and provides the ultimate redemption.
              </p>
              <p className="text-sm text-sage font-medium">Reflect on the connections between this chapter and the person and work of Jesus Christ</p>
            </div>
            <p className="text-navy/80 leading-relaxed mt-4">
              Jesus is the true source of faithfulness, the perfect response to God's word, and the embodiment of all the spiritual truths presented throughout Scripture. Understanding how this chapter connects to Christ deepens our appreciation of His redemptive work.
            </p>
          </div>

          {/* Reflection */}
          <div className="card" style={{ backgroundColor: 'rgba(139, 158, 139, 0.1)' }}>
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Personal Reflection</h2>
            <p className="text-navy/80 leading-relaxed">
              Take time to journal or meditate on what God is teaching you through this chapter. How can these truths transform your thinking and actions? What will you do differently as a result of this study?
            </p>
          </div>
        </div>

        {/* Chapter Navigation */}
        <ChapterNav
          bookName={book_obj.name}
          currentChapter={chapter}
          totalChapters={book_obj.chapters}
          previousUrl={previousChapter ? `/bible/${book}/${previousChapter}` : undefined}
          nextUrl={nextChapter ? `/bible/${book}/${nextChapter}` : undefined}
        />
      </div>
    </div>
  );
}
