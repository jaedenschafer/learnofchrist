import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ChapterNav from '@/components/ChapterNav';
import TranslationSwitcher from '@/components/TranslationSwitcher';
import VerseDisplay from '@/components/VerseDisplay';
import { getVerses } from '@/lib/supabase';

interface ChapterPageProps {
  params: Promise<{ book: string; chapter: string }>;
}

function slugToBookName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export async function generateStaticParams() {
  const books = getAllBooks();
  const params = [];

  // Pre-render every chapter of every book (we have all 31,102 KJV verses)
  for (const book of books) {
    const slug = bookNameToSlug(book.name);
    for (let i = 1; i <= book.chapters; i++) {
      params.push({ book: slug, chapter: i.toString() });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { book, chapter: chapterStr } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj) {
    return { title: 'Chapter Not Found | Learn of Christ' };
  }

  const content = getChapterContent(book, chapter);
  const title = `${book_obj.name} ${chapter} - Bible Study & Commentary | Learn of Christ`;
  const description = content
    ? `${content.overview.slice(0, 155)}... Compare KJV, ASV, and WEB translations.`
    : `Read ${book_obj.name} Chapter ${chapter} with study guide, key themes, and connection to Christ. Compare KJV, ASV, and WEB translations side by side.`;

  return {
    title,
    description,
    keywords: `${book_obj.name} ${chapter}, ${book_obj.name} chapter ${chapter}, Bible study, ${book_obj.name} commentary, scripture study, Jesus Christ`,
    openGraph: {
      title: `${book_obj.name} ${chapter} — Study Guide`,
      description,
      url: `https://learnofchrist.com/bible/${book}/${chapter}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/bible/${book}/${chapter}`,
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { book, chapter: chapterStr } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj || chapter < 1 || chapter > book_obj.chapters) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Chapter Not Found</h1>
          <p className="text-navy/50 mb-6">The chapter you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/bible" className="btn-primary">Back to Bible Study</Link>
        </div>
      </div>
    );
  }

  // Fetch real KJV verses from Supabase at build/request time
  const initialVerses = await getVerses(book, chapter, 'kjv');
  const hasVerses = initialVerses.length > 0;

  // Get chapter-specific study content (or fall back to generic)
  const content = getChapterContent(book, chapter);

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;

  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${book_obj.name} Chapter ${chapter} — Bible Study Guide`,
    description: `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, and connection to Christ.`,
    url: `https://learnofchrist.com/bible/${book}/${chapter}`,
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
    isPartOf: {
      '@type': 'Book',
      name: 'The Holy Bible',
      author: { '@type': 'Organization', name: 'Various Authors' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Bible', item: 'https://learnofchrist.com/bible' },
        { '@type': 'ListItem', position: 2, name: book_obj.name, item: `https://learnofchrist.com/bible/${book}` },
        { '@type': 'ListItem', position: 3, name: `Chapter ${chapter}`, item: `https://learnofchrist.com/bible/${book}/${chapter}` },
      ],
    },
  };

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Bible', href: '/bible' },
          { label: book_obj.name, href: `/bible/${book}` },
          { label: `Chapter ${chapter}`, href: '#' },
        ]} />

        {/* Header */}
        <div className="card mb-4">
          <span className="pill pill-sage mb-2 inline-block">{book_obj.name}</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-2">Chapter {chapter}</h1>
          <p className="text-sm text-navy/50">
            {hasVerses
              ? `${initialVerses.length} verses — switch translations with the toolbar below.`
              : 'A study guide to understand this chapter and its connection to Christ.'}
          </p>
        </div>

        {/* Translation Switcher - sticky toolbar */}
        {hasVerses && <TranslationSwitcher />}

        {/* Content Sections */}
        <div className="space-y-3 mt-4">

          {/* Real Bible Text */}
          {hasVerses && (
            <VerseDisplay
              bookSlug={book}
              chapter={chapter}
              initialVerses={initialVerses}
            />
          )}

          {/* Key Verse highlight (if chapter-specific content exists) */}
          {content && (
            <div className="card bg-gold/[0.04] border-gold/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="pill pill-gold text-xs">Key Verse</span>
                <span className="text-xs font-medium text-navy/40">{content.keyVerse.reference}</span>
              </div>
              <p className="font-serif text-base text-navy/80 leading-relaxed italic">
                &ldquo;{content.keyVerse.text}&rdquo;
              </p>
            </div>
          )}

          {/* Overview */}
          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Overview</h2>
            <p className="text-sm text-navy/60 leading-relaxed">
              {content
                ? content.overview
                : `${book_obj.name} Chapter ${chapter} continues the biblical narrative and provides important insights into God's character and His plan for redemption. As you study this chapter, discover themes of faith, obedience, grace, and God's unfailing love.`}
            </p>
          </div>

          {/* Key Themes */}
          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Key Themes</h2>
            <div className="space-y-3">
              {(content
                ? content.themes
                : [
                    { title: "God's Faithfulness", desc: "God's consistent character and His commitment to covenant promises." },
                    { title: "Human Response", desc: "Various responses to God's word — showing consequences of belief and doubt." },
                    { title: "Spiritual Truth", desc: "Spiritual principles applicable to our faith journey today." },
                  ]
              ).map((theme, i) => (
                <div key={i} className="flex gap-3">
                  <div className="step-number">{i + 1}</div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-navy">{theme.title}</h3>
                    <p className="text-xs text-navy/50 mt-0.5 leading-relaxed">{theme.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Questions */}
          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Study Questions</h2>
            <div className="space-y-2.5">
              {(content
                ? content.questions
                : [
                    'What are the main events or teachings described in this chapter?',
                    'How do the characters respond to God in this passage?',
                    'What challenges are presented, and how are they resolved?',
                    'What does this chapter reveal about God\'s character?',
                    'What spiritual lessons can you apply to your own life?',
                  ]
              ).map((q, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-xs font-bold text-gold mt-0.5">{i + 1}.</span>
                  <p className="text-sm text-navy/60 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connection to Christ */}
          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Connection to Christ</h2>
            <p className="text-sm text-navy/60 leading-relaxed mb-3">
              {content
                ? content.christConnection
                : 'Every passage ultimately points to Jesus through prophecy, typology, or thematic connection.'}
            </p>
            {!content && (
              <div className="bg-gold/[0.06] border-l-[3px] border-gold/40 rounded-r-xl p-4">
                <p className="scripture-quote text-sm text-navy/70 leading-relaxed">
                  Jesus is the true source of faithfulness, the perfect response to God&apos;s word, and the embodiment of all spiritual truths presented throughout Scripture.
                </p>
              </div>
            )}
          </div>

          {/* Personal Reflection */}
          <div className="card bg-sage/[0.06]">
            <h2 className="font-sans text-base font-semibold text-navy mb-2">Personal Reflection</h2>
            <p className="text-sm text-navy/55 leading-relaxed">
              Take time to journal or meditate on what God is teaching you through {book_obj.name} {chapter}. How can these truths transform your thinking and actions today?
            </p>
          </div>
        </div>

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
