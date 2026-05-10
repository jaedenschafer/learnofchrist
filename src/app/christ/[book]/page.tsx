import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bibleBooks, getBookByName } from '@/data/books';
import {
  bookNameToSlug,
  getChristIndexForBook,
} from '@/lib/christIndex';
import '../christ.css';

export const revalidate = 86400;

interface BookChristPageProps {
  params: Promise<{ book: string }>;
}

function slugToBookName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateStaticParams() {
  return bibleBooks.map((b) => ({ book: bookNameToSlug(b.name) }));
}

export async function generateMetadata({ params }: BookChristPageProps): Promise<Metadata> {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const obj = getBookByName(bookName);
  if (!obj) return { title: 'Christ Index | Learn of Christ' };
  return {
    title: `How Christ Appears in ${obj.name} | The Christ Index | Learn of Christ`,
    description: `Chapter-by-chapter: how the Bible reveals Jesus Christ in the book of ${obj.name}. ${obj.description}`,
    alternates: { canonical: `https://learnofchrist.com/christ/${book}` },
    openGraph: {
      title: `How Christ Appears in ${obj.name}`,
      description: `Chapter-by-chapter: how the Bible reveals Jesus Christ in ${obj.name}.`,
      url: `https://learnofchrist.com/christ/${book}`,
      type: 'article',
    },
  };
}

export default async function BookChristPage({ params }: BookChristPageProps) {
  const { book } = await params;
  const bookName = slugToBookName(book);
  const obj = getBookByName(bookName);
  if (!obj) notFound();

  const { entries } = getChristIndexForBook(obj);

  return (
    <div className="page-container">
      <article className="christ-hub max-w-3xl mx-auto">
        <header className="christ-hub__header">
          <p className="christ-hub__eyebrow">
            <Link href="/christ" className="christ-hub__crumb">The Christ Index</Link>
          </p>
          <h1 className="christ-hub__title">Christ in {obj.name}</h1>
          <p className="christ-hub__lede">{obj.description}</p>
          <p className="christ-hub__meta">
            {entries.length} of {obj.chapters} chapters with a Christ summary.
          </p>
        </header>

        {entries.length === 0 ? (
          <p className="christ-hub__empty">
            No Christ summaries published yet for this book. The chapter pages
            still surface a Christ Connection in their own layout — visit{' '}
            <Link href={`/study/${book}`}>{obj.name} on the study site</Link>.
          </p>
        ) : (
          <ol className="christ-chapters">
            {entries.map((e) => (
              <li key={e.chapter} className="christ-chapter">
                <div className="christ-chapter__head">
                  <Link href={`/study/${book}/${e.chapter}`} className="christ-chapter__ref">
                    {obj.name} {e.chapter}
                  </Link>
                  {e.curated && (
                    <span className="christ-chapter__badge" title="Hand-curated chapter">
                      Curated
                    </span>
                  )}
                </div>
                {e.title && <p className="christ-chapter__title">{e.title}</p>}
                <p className="christ-chapter__summary">{e.summary}</p>
                <Link
                  href={`/study/${book}/${e.chapter}`}
                  className="christ-chapter__link"
                >
                  Open the chapter →
                </Link>
              </li>
            ))}
          </ol>
        )}

        <nav className="christ-hub__foot-nav" aria-label="Christ Index navigation">
          <Link href="/christ" className="christ-hub__back">← Back to all books</Link>
        </nav>
      </article>
    </div>
  );
}
