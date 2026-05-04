import Link from 'next/link';
import type { Metadata } from 'next';
import { bibleBooks } from '@/data/books';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import JsonLd from '@/components/JsonLd';

/**
 * Pillar page for the deuterocanonical books — a content niche the site
 * already shows in Google Search Console (queries like "tobit", "wisdom of
 * solomon kjv", "1 maccabees chapter 8 summary"). The page brings the 11
 * books into a single linked landing page so Google can understand them as
 * a coherent collection and so users have a hub for the niche.
 *
 * Voice rules: avoid denominational labels (Catholic / Orthodox / Protestant)
 * — describe the books by their history and content, not by the tradition
 * that includes or excludes them. Per project memory.
 */

const PAGE_URL = 'https://learnofchrist.com/study/deuterocanonical-books';

export const metadata: Metadata = {
  title: 'The Deuterocanonical Books — Tobit, Maccabees, Wisdom & More | Learn of Christ',
  description:
    'A complete guide to the deuterocanonical and apocryphal books — Tobit, Judith, Wisdom of Solomon, Sirach, Baruch, 1-2 Maccabees, 1-2 Esdras, Prayer of Manasseh, 3 Maccabees. Free chapter-by-chapter study guides for every book.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The Deuterocanonical Books — Free Study Guides',
    description:
      'Tobit, Wisdom of Solomon, the Maccabees, Sirach, Baruch, and more — chapter-by-chapter study guides for the books between the Testaments.',
    type: 'article',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Deuterocanonical Books',
    description:
      'Tobit, Wisdom of Solomon, the Maccabees, Sirach, Baruch — chapter-by-chapter study guides for the books between the Testaments.',
  },
};

interface DeuteroBook {
  slug: string;
  name: string;
  chapters: number;
  era: string;
  oneLine: string;
  why: string;
}

// Book ordering reflects roughly the chronology of composition (Tobit/Judith
// earliest, then the Maccabees/Wisdom corpus, then Esdras and Manasseh).
const DEUTERO_BOOKS: DeuteroBook[] = [
  {
    slug: 'tobit',
    name: 'Tobit',
    chapters: 14,
    era: 'c. 200 BCE',
    oneLine: 'A righteous family, an angel, a fish, and a long journey home.',
    why: 'A short, novella-shaped book about prayer, providence, and ordinary fidelity. The angel Raphael walks with Tobias unrecognized; readers used to think of the Genesis stranger at Mamre.',
  },
  {
    slug: 'judith',
    name: 'Judith',
    chapters: 16,
    era: 'c. 150 BCE',
    oneLine: 'A widow with a basket and a sword saves her city from an empire.',
    why: 'Judith stands in the line of Jael and Esther — women whose courage outlasts their generals. The book is loud, theatrical, and unafraid to stage God&apos;s deliverance through one set of hands.',
  },
  {
    slug: 'wisdom-of-solomon',
    name: 'Wisdom of Solomon',
    chapters: 19,
    era: 'c. 50 BCE',
    oneLine: 'Wisdom personified, calling out and reframing Israel&apos;s whole history.',
    why: 'Sometimes called the bridge between the Old Testament and the New — Wisdom is described in language the Gospel of John will later apply to Christ (the Word, the image, the radiance).',
  },
  {
    slug: 'sirach',
    name: 'Sirach',
    chapters: 51,
    era: 'c. 180 BCE',
    oneLine: 'Practical wisdom for daily life from a Jerusalem teacher.',
    why: 'Sometimes called Ecclesiasticus. Long, generous, full of lived advice on friendship, money, speech, family, work. Reads like a wise older friend writing letters to a young one.',
  },
  {
    slug: 'baruch',
    name: 'Baruch',
    chapters: 6,
    era: 'c. 100 BCE',
    oneLine: 'A confession from exile, with the Letter of Jeremiah as chapter 6.',
    why: 'Attributed to Jeremiah&apos;s scribe. The prayer in Baruch 3 reaches for divine Wisdom in language the New Testament will pick up; chapter 6 is a withering satire on idols.',
  },
  {
    slug: '1-maccabees',
    name: '1 Maccabees',
    chapters: 16,
    era: 'c. 100 BCE',
    oneLine: 'The Jewish revolt against Greek oppression and the rededication of the Temple.',
    why: 'The story behind Hanukkah. A clear, sober history of Judas Maccabeus and his brothers — and the only place in the Bible that tells you how the menorah came to burn again.',
  },
  {
    slug: '2-maccabees',
    name: '2 Maccabees',
    chapters: 15,
    era: 'c. 100 BCE',
    oneLine: 'The same revolt, retold theologically — martyrs, miracles, and the resurrection of the dead.',
    why: 'Chapter 7 contains the earliest clear Old-Testament-era articulation of bodily resurrection — the seven brothers refusing to deny their faith, each professing the hope of being raised.',
  },
  {
    slug: '1-esdras',
    name: '1 Esdras',
    chapters: 9,
    era: 'c. 150 BCE',
    oneLine: 'A retelling of the return from exile, with the famous contest of the three pages.',
    why: 'Overlaps with Ezra and Nehemiah but adds a story not found anywhere else: three young guards debate what is strongest in the world — wine, the king, women, or truth.',
  },
  {
    slug: '2-esdras',
    name: '2 Esdras',
    chapters: 16,
    era: 'c. 100 CE',
    oneLine: 'Apocalyptic visions of Ezra wrestling with God&apos;s justice and the world&apos;s end.',
    why: 'A late, anguished book. Ezra asks why the wicked prosper and why God permits evil; the angel&apos;s answers do not soothe — they reframe the question as God&apos;s.',
  },
  {
    slug: 'prayer-of-manasseh',
    name: 'Prayer of Manasseh',
    chapters: 1,
    era: 'c. 100 BCE',
    oneLine: 'The penitent prayer of Israel&apos;s worst king, restored.',
    why: 'A single chapter of broken-open repentance. Manasseh — the king who set idols in the temple — is taken in chains to Babylon, prays this prayer, and is restored. A model for prayer at rock bottom.',
  },
  {
    slug: '3-maccabees',
    name: '3 Maccabees',
    chapters: 7,
    era: 'c. 50 BCE',
    oneLine: 'God&apos;s deliverance of Egyptian Jews from Ptolemy IV.',
    why: 'A story of preservation, not revolt. The Egyptian Jews are nearly trampled by drunken elephants in a stadium; God turns the elephants on the soldiers instead. Strange, vivid, theologically pointed.',
  },
];

export default function DeuterocanonicalBooksPage() {
  const totalChapters = DEUTERO_BOOKS.reduce((sum, b) => sum + b.chapters, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Deuterocanonical Books',
    description:
      'Free chapter-by-chapter study guides for the deuterocanonical and apocryphal books of the Bible.',
    url: PAGE_URL,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: DEUTERO_BOOKS.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://learnofchrist.com/study/${b.slug}`,
        name: b.name,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://learnofchrist.com' },
        { '@type': 'ListItem', position: 2, name: 'Study', item: 'https://learnofchrist.com/study' },
        { '@type': 'ListItem', position: 3, name: 'Deuterocanonical Books', item: PAGE_URL },
      ],
    },
  };

  return (
    <div className="page-container">
      <JsonLd data={jsonLd} />

      <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <BreadcrumbNav
          items={[
            { label: 'Study', href: '/study' },
            { label: 'Deuterocanonical Books' },
          ]}
        />

        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-[color:var(--color-tertiary-label)] mb-3">
            A complete guide
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--color-label)] leading-tight tracking-tight mb-4">
            The Deuterocanonical Books
          </h1>
          <p className="text-xl text-[color:var(--color-secondary-label)] leading-relaxed">
            Eleven books written in the centuries between the Old and New Testaments.
            Free, chapter-by-chapter study guides for each — {totalChapters} chapters in
            all, every one with KJV scripture, original-language callouts, and Christ-centered
            commentary.
          </p>
        </header>

        <section className="prose-section mb-10">
          <h2 className="text-2xl font-bold text-[color:var(--color-label)] mb-4">
            What are the deuterocanonical books?
          </h2>
          <div className="text-[color:var(--color-secondary-label)] leading-relaxed space-y-4">
            <p>
              The deuterocanonical books — sometimes also called the apocrypha — are a
              collection of writings produced roughly between 200 BCE and 100 CE, in the
              long quiet between the last Old Testament prophets and the arrival of the
              gospels. They were written in Greek and Hebrew, preserved in the Septuagint
              (the Greek translation of the Old Testament that the early church read), and
              quoted by the early Christian writers as scripture.
            </p>
            <p>
              Different Christian communities read them differently — some include them
              fully, some treat them as historical and edifying without ranking them with
              the rest of scripture, some set them aside. This site does not take a side
              on that question. We provide the same chapter-by-chapter study format you&apos;ll
              find for Genesis or Romans, so you can read them yourself and see what God
              has been doing in the long silence.
            </p>
            <p>
              The contents are extraordinary. The story of Hanukkah and the Maccabean
              revolt. A young man led by an angel he doesn&apos;t recognize until the end.
              The clearest pre-Christian articulation of bodily resurrection. A meditation
              on Wisdom that the Gospel of John will pick up and apply to Jesus. A widow
              with a sword. A king restored from his worst hour by a single prayer.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[color:var(--color-label)] mb-6">
            The eleven books
          </h2>
          <div className="grid gap-4">
            {DEUTERO_BOOKS.map((book) => (
              <Link
                key={book.slug}
                href={`/study/${book.slug}`}
                className="frost-card block hover:shadow-md transition-shadow no-underline"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[color:var(--color-label)]">
                    {book.name}
                  </h3>
                  <span className="text-sm text-[color:var(--color-tertiary-label)]">
                    {book.chapters} chapter{book.chapters === 1 ? '' : 's'} · {book.era}
                  </span>
                </div>
                <p className="text-base text-[color:var(--color-label)]/85 mb-2 italic">
                  {book.oneLine}
                </p>
                <p className="text-sm text-[color:var(--color-secondary-label)] leading-relaxed">
                  {book.why}
                </p>
                <span className="inline-block mt-3 text-sm font-medium text-[color:var(--color-primary)]">
                  Read the study guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="prose-section mb-10">
          <h2 className="text-2xl font-bold text-[color:var(--color-label)] mb-4">
            Why study them?
          </h2>
          <div className="text-[color:var(--color-secondary-label)] leading-relaxed space-y-4">
            <p>
              These books bridge a gap in the biblical story. Without them, the historical
              window between Malachi&apos;s last word and Matthew&apos;s opening line
              looks empty — but it isn&apos;t. The Maccabees fought a war that made it
              possible for there to even <em>be</em> a Jewish people for Jesus to be born
              into. Wisdom of Solomon developed the vocabulary the gospel writers would
              use to describe Christ. Tobit shaped the Jewish imagination about angels in
              ways that show up in Luke and Hebrews.
            </p>
            <p>
              Even readers whose tradition does not include these books in the canon often
              find them illuminating. They are short. They are vivid. They are full of
              prayer, courage, satire, longing, and unexpected grace.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[color:var(--color-label)] mb-4">
            Where to start
          </h2>
          <div className="text-[color:var(--color-secondary-label)] leading-relaxed space-y-3 mb-6">
            <p>
              <strong className="text-[color:var(--color-label)]">If you have one evening:</strong>{' '}
              read <Link href="/study/tobit/1" className="text-[color:var(--color-primary)] hover:underline">Tobit chapter 1</Link>.
              Self-contained novella; you&apos;ll know by the second chapter whether you
              want the rest.
            </p>
            <p>
              <strong className="text-[color:var(--color-label)]">If you want to understand Hanukkah:</strong>{' '}
              start with <Link href="/study/1-maccabees/4" className="text-[color:var(--color-primary)] hover:underline">1 Maccabees 4</Link> —
              the rededication of the temple.
            </p>
            <p>
              <strong className="text-[color:var(--color-label)]">If you want to know the resurrection roots:</strong>{' '}
              <Link href="/study/2-maccabees/7" className="text-[color:var(--color-primary)] hover:underline">2 Maccabees 7</Link>,
              the seven brothers and their mother, dying with the hope of being raised.
            </p>
            <p>
              <strong className="text-[color:var(--color-label)]">If you want the bridge to John:</strong>{' '}
              <Link href="/study/wisdom-of-solomon/7" className="text-[color:var(--color-primary)] hover:underline">Wisdom of Solomon 7</Link> —
              wisdom as the radiance of God, the image of His goodness.
            </p>
            <p>
              <strong className="text-[color:var(--color-label)]">If you want a single prayer for a hard day:</strong>{' '}
              <Link href="/study/prayer-of-manasseh/1" className="text-[color:var(--color-primary)] hover:underline">Prayer of Manasseh</Link> —
              the whole book is one chapter, one prayer.
            </p>
          </div>
        </section>

        <section className="frost-card mb-10">
          <h2 className="text-xl font-bold text-[color:var(--color-label)] mb-3">
            About the study guides
          </h2>
          <p className="text-[color:var(--color-secondary-label)] leading-relaxed mb-3">
            Every chapter on this site uses the same format: the King James scripture
            interleaved with short commentary, Hebrew or Greek word callouts, a Christ
            Connection, and a &ldquo;Carry into your day&rdquo; application. You can switch
            translations at the top of each page, or pick a Quick / Standard / Deep depth
            for the commentary.
          </p>
          <Link
            href="/study"
            className="inline-flex items-center gap-2 text-[color:var(--color-primary)] hover:underline font-medium"
          >
            Browse all study guides →
          </Link>
        </section>
      </div>
    </div>
  );
}
