import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { getAllBooks, getBookByName } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import { getRichChapter, isHandAuthoredChapter } from '@/data/study-chapters';
import { resolveChapterOverride, dehydrateRich } from '@/lib/chapterContent';
import { isAdminSession } from '@/lib/isAdmin';
import ChapterNav from '@/components/ChapterNav';
import EditableStudyGuide from '@/components/EditableStudyGuide';
import {
  getVerses,
  getArtworksForChapter,
  getTopicalArtworksForChapter,
} from '@/lib/supabase';
import ChapterArtStrip from '@/components/ChapterArtStrip';
import JsonLd from '@/components/JsonLd';
import StudyTopBar from '@/components/StudyTopBar';
import StudyChapterShareLaunch from '@/components/StudyChapterShareLaunch';

// Code-split: filters bar renders below the hero. The rich-study renderer is
// dynamic-imported so the heavy effects/audio bundle only loads on this route.
const StudyFilters = dynamic(() => import('@/components/StudyFilters'), {
  loading: () => <div className="h-12" aria-hidden="true" />,
});
const RichStudyGuide = dynamic(() => import('@/components/RichStudyGuide'), {
  loading: () => (
    <div className="py-16 text-center text-[color:var(--color-tertiary-label)]">
      Loading study guide…
    </div>
  ),
});

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

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
  const title = `${book_obj.name} ${chapter} Study Guide — Themes, Questions, Christ Connection | Learn of Christ`;
  const description = content
    ? `${content.overview.slice(0, 155)}... Study ${book_obj.name} ${chapter} with key themes, discussion questions, and Christ connections.`
    : `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, discussion questions, and connection to Christ.`;

  return {
    title,
    description,
    keywords: `${book_obj.name} ${chapter} study guide, ${book_obj.name} chapter ${chapter} commentary, Bible study, scripture commentary`,
    openGraph: {
      title: `${book_obj.name} ${chapter} — Study Guide`,
      description,
      url: `https://learnofchrist.com/study/${book}/${chapter}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/study/${book}/${chapter}`,
    },
  };
}

export default async function StudyChapterPage({ params }: ChapterPageProps) {
  const { book, chapter: chapterStr } = await params;
  const bookName = slugToBookName(book);
  const book_obj = getBookByName(bookName);
  const chapter = parseInt(chapterStr, 10);

  if (!book_obj || chapter < 1 || chapter > book_obj.chapters) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-[color:var(--color-label)] mb-3">Chapter Not Found</h1>
          <p className="text-[color:var(--color-secondary-label)] mb-6">The chapter you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/study" className="btn-primary">Back to Study Guides</Link>
        </div>
      </div>
    );
  }

  const defaultTranslation = book_obj.testament === 'apocrypha' ? 'dra' : 'kjv';
  const [initialVerses, chapterArtworks] = await Promise.all([
    getVerses(book, chapter, defaultTranslation),
    getArtworksForChapter(book, chapter),
  ]);

  // Resolve the chapter_overrides row (if any) and route accordingly:
  //   - kind: 'rich' wins over both the hand-authored RICH_CHAPTERS entry
  //           and the auto-port pipeline (used for hand-authored edits).
  //   - kind: 'legacy' is merged onto the file-based ChapterContent and
  //           passed through getRichChapter so the auto-port still runs.
  const override = await resolveChapterOverride(book, chapter);
  const content = override.kind === 'legacy' ? override.legacy : getChapterContent(book, chapter);
  const richContent =
    override.kind === 'rich'
      ? override.rich
      : getRichChapter(book, book_obj.name, chapter, override.legacy, initialVerses);
  const handAuthored = isHandAuthoredChapter(book, chapter);
  const sessionIsAdmin = await isAdminSession();
  // Dehydrate the rendered RichChapterContent so the editor can edit it.
  // The editor only mounts when admin clicks Edit, so the cost is negligible
  // for non-admin requests.
  const richSerialized = sessionIsAdmin && richContent ? dehydrateRich(richContent) : null;

  // Rich study guides reference inline artworks by title/artist matchers
  // (RegExp) in their data files. Two jobs to do here, both server-side:
  //
  //   1. Track which artworks are claimed by inline `kind: 'artwork'`
  //      blocks (or the chapter `opener`) so we strip them from the
  //      carousel below.
  //   2. SANITIZE the rich content before passing it to RichStudyGuide.
  //      RichStudyGuide is a 'use client' component; Next.js can't
  //      serialize RegExp across the RSC boundary, so any chapter that
  //      ships a RegExp in its data crashes the route with a 500.
  //      We resolve the match here, write back `artworkSlug` and drop
  //      the RegExp, leaving the client to look up the artwork from
  //      its `artworks` prop by slug.
  // Topical fallback pool. Fetched lazily when a chapter has any block
  // (or opener) marked `topical: true`, OR when the chapter has fewer
  // resolved chapter-specific images than the soft minimum and topicTags
  // are declared. Empty pool means the chapter doesn't use topic tagging.
  let topicalPool: typeof chapterArtworks | null = null;
  async function ensureTopicalPool(): Promise<typeof chapterArtworks> {
    if (topicalPool) return topicalPool;
    const tags = richContent?.topicTags ?? [];
    if (!tags.length) {
      topicalPool = [];
      return topicalPool;
    }
    const exclude = new Set(chapterArtworks.map((a) => a.id));
    topicalPool = await getTopicalArtworksForChapter(tags, {
      excludeIds: exclude,
      limit: 8,
    });
    return topicalPool;
  }

  const inlineArtSlugs = new Set<string>();
  /** Picks a plate from the topical pool. Skips slugs already used by
   *  earlier topical blocks in the same chapter so we don't render the
   *  same painting twice. */
  function pickFromTopicalPool(
    pool: typeof chapterArtworks,
    blockTopicMatch: string | string[] | undefined,
  ): typeof chapterArtworks[number] | undefined {
    const wanted =
      blockTopicMatch == null
        ? null
        : Array.isArray(blockTopicMatch)
          ? blockTopicMatch
          : [blockTopicMatch];
    for (const a of pool) {
      if (inlineArtSlugs.has(a.id)) continue;
      // If the block specifies a topicMatch, require the plate to carry
      // at least one matching `topic:<slug>` tag.
      if (wanted) {
        const ok = wanted.some((t) => a.tags?.includes(`topic:${t}`));
        if (!ok) continue;
      }
      return a;
    }
    return undefined;
  }

  function resolveChapterSpecific(
    matchTitle: RegExp | undefined,
    matchArtist: RegExp | undefined,
    artworkSlug: string | undefined,
  ): typeof chapterArtworks[number] | undefined {
    if (artworkSlug) {
      return chapterArtworks.find((a) => a.slug === artworkSlug);
    }
    if (!matchTitle && !matchArtist) return undefined;
    return chapterArtworks.find((a) => {
      const matchesTitle = !matchTitle || matchTitle.test(a.title);
      const matchesArtist = !matchArtist || matchArtist.test(a.artist?.name ?? '');
      return matchesTitle && matchesArtist;
    });
  }

  let safeRichContent = richContent;
  if (richContent) {
    const sanitizedSections = await Promise.all(
      richContent.sections.map(async (section) => ({
        ...section,
        blocks: await Promise.all(
          section.blocks.map(async (block) => {
            if (block.kind !== 'artwork') return block;

            // Tier B: explicit topical slot — pull from topic pool.
            if (block.topical) {
              const pool = await ensureTopicalPool();
              const a = pickFromTopicalPool(pool, block.topicMatch);
              if (a) inlineArtSlugs.add(a.id);
              return {
                kind: 'artwork' as const,
                caption: block.caption,
                artworkSlug: a?.slug,
                themed: !!a,
              };
            }

            // Tier A: chapter-specific match.
            const a = resolveChapterSpecific(
              block.matchTitle,
              block.matchArtist,
              block.artworkSlug,
            );
            if (a) {
              inlineArtSlugs.add(a.id);
              return {
                kind: 'artwork' as const,
                caption: block.caption,
                artworkSlug: a.slug,
                themed: false,
              };
            }

            // Tier A miss → silent fall-through to topical pool when
            // the chapter has topicTags declared. Caption gets "(themed)".
            if (richContent.topicTags?.length) {
              const pool = await ensureTopicalPool();
              const fb = pickFromTopicalPool(pool, block.topicMatch);
              if (fb) {
                inlineArtSlugs.add(fb.id);
                return {
                  kind: 'artwork' as const,
                  caption: block.caption,
                  artworkSlug: fb.slug,
                  themed: true,
                };
              }
            }

            // Nothing resolved — emit a placeholder block the renderer
            // will skip.
            return {
              kind: 'artwork' as const,
              caption: block.caption,
              artworkSlug: undefined,
              themed: false,
            };
          }),
        ),
      })),
    );

    let sanitizedOpener = richContent.opener;
    if (sanitizedOpener) {
      if (sanitizedOpener.topical) {
        const pool = await ensureTopicalPool();
        const a = pickFromTopicalPool(pool, sanitizedOpener.topicMatch);
        if (a) inlineArtSlugs.add(a.id);
        sanitizedOpener = {
          caption: sanitizedOpener.caption,
          artworkSlug: a?.slug,
          themed: !!a,
        };
      } else {
        const a = resolveChapterSpecific(
          sanitizedOpener.matchTitle,
          sanitizedOpener.matchArtist,
          sanitizedOpener.artworkSlug,
        );
        if (a) {
          inlineArtSlugs.add(a.id);
          sanitizedOpener = {
            caption: sanitizedOpener.caption,
            artworkSlug: a.slug,
            themed: false,
          };
        } else if (richContent.topicTags?.length) {
          const pool = await ensureTopicalPool();
          const fb = pickFromTopicalPool(pool, sanitizedOpener.topicMatch);
          if (fb) inlineArtSlugs.add(fb.id);
          sanitizedOpener = {
            caption: sanitizedOpener.caption,
            artworkSlug: fb?.slug,
            themed: !!fb,
          };
        } else {
          sanitizedOpener = {
            caption: sanitizedOpener.caption,
            artworkSlug: undefined,
            themed: false,
          };
        }
      }
    }
    safeRichContent = {
      ...richContent,
      sections: sanitizedSections,
      opener: sanitizedOpener,
    };
  }

  // The renderer looks up `artworkSlug` against the `artworks` prop. When
  // a block resolved to a topical-pool plate, that plate is NOT in
  // chapterArtworks, so we merge the topical pool in before passing to
  // RichStudyGuide. Topical plates only appear in the rich-content slots
  // they were resolved into; they're filtered out of the art carousel
  // strip below since they aren't chapter-specific.
  const richArtworks = topicalPool
    ? [...chapterArtworks, ...topicalPool]
    : chapterArtworks;

  const stripArtworks =
    inlineArtSlugs.size > 0
      ? chapterArtworks.filter((a) => !inlineArtSlugs.has(a.id))
      : chapterArtworks;

  const previousChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < book_obj.chapters ? chapter + 1 : null;
  const isGenesisOne = book === 'genesis' && chapter === 1;

  // Related-content navigation. Surfaces 4 nearby chapters from the same book
  // (the prev/next pair plus two more, skipping out-of-range ones) plus the
  // deuterocanonical pillar when relevant. Both helps the reader and gives
  // Google additional internal-link signals for ranking.
  const isDeuterocanonical = book_obj.testament === 'apocrypha' || book_obj.testament === 'orthodox';
  const nearbyChapters: Array<{ ch: number; label: string }> = [];
  for (const offset of [-2, -1, 1, 2]) {
    const ch = chapter + offset;
    if (ch < 1 || ch > book_obj.chapters || ch === chapter) continue;
    nearbyChapters.push({ ch, label: `${book_obj.name} ${ch}` });
  }

  // Article-level dates: the site shipped chapter content in waves through
  // March/April 2026; we use a stable launch date as datePublished and the
  // current date as dateModified (chapter data files are edited regularly
  // — Phase 1-4 long-scripture splits, Christ Connection authoring, etc.).
  // Both dates make the page eligible for "Last updated" SERP indicators
  // and Article rich results.
  const PUBLISH_ISO = '2026-03-01T00:00:00Z';
  const MODIFIED_ISO = new Date().toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${book_obj.name} Chapter ${chapter} — Bible Study Guide`,
    description: `Study ${book_obj.name} Chapter ${chapter} with commentary, key themes, and connection to Christ.`,
    url: `https://learnofchrist.com/study/${book}/${chapter}`,
    datePublished: PUBLISH_ISO,
    dateModified: MODIFIED_ISO,
    inLanguage: 'en',
    image: 'https://learnofchrist.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://learnofchrist.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://learnofchrist.com/study/${book}/${chapter}`,
    },
    isPartOf: {
      '@type': 'Book',
      name: 'The Holy Bible',
      author: { '@type': 'Organization', name: 'Various Authors' },
    },
    about: [
      { '@type': 'Thing', name: book_obj.name },
      { '@type': 'Thing', name: 'Bible' },
      { '@type': 'Thing', name: 'Christianity' },
      { '@type': 'Thing', name: 'Bible study' },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Study', item: 'https://learnofchrist.com/study' },
        { '@type': 'ListItem', position: 2, name: book_obj.name, item: `https://learnofchrist.com/study/${book}` },
        { '@type': 'ListItem', position: 3, name: `Chapter ${chapter}`, item: `https://learnofchrist.com/study/${book}/${chapter}` },
      ],
    },
  };

  // LCP candidate: the first inline artwork on Genesis 1 (an opener), or the
  // first ChapterArtStrip card on other chapters. Emitting <link rel=preload>
  // here lets the browser fire the request alongside HTML parse instead of
  // waiting for the <img> to mount.
  //
  // Skip manuscript-page folios for the LCP preload — those are 2-8 MB
  // parchment scans served from third-party origins (Gallica, OCLC ContentDM)
  // and we don't want them to monopolize the preload slot when a smaller
  // painted artwork exists. Painted art always sorts first in
  // chapterArtworks (see getArtworksForChapter), so the find() below picks
  // the first painting if one exists; if a chapter is manuscripts-only,
  // skip the preload entirely.
  const isManuscript = (a: typeof chapterArtworks[number]) =>
    a.tags?.includes('manuscript-page') ?? false;
  const lcpArtwork =
    chapterArtworks.find((a) =>
      !isManuscript(a) && (isGenesisOne ? inlineArtSlugs.has(a.id) : true),
    )
    ?? chapterArtworks.find((a) => !isManuscript(a))
    ?? null;
  const lcpHref = lcpArtwork
    ? (isGenesisOne
        ? lcpArtwork.thumbnail_800_url || lcpArtwork.image_url
        : lcpArtwork.thumbnail_256_url || lcpArtwork.thumbnail_url || lcpArtwork.image_url)
    : null;

  return (
    <div className="page-container">
      {/* Hoisted to <head> by Next.js. Saves ~200-400ms on slow networks
          when the LCP image is on a different origin than the HTML. */}
      {lcpHref && (
        <link
          rel="preload"
          as="image"
          href={lcpHref}
          fetchPriority="high"
        />
      )}
      <JsonLd data={jsonLd} />
      <div className="max-w-3xl mx-auto">
        <StudyTopBar
          bookSlug={book}
          bookName={book_obj.name}
          chapter={chapter}
          testamentLabel={
            book_obj.testament === 'apocrypha'
              ? 'Apocrypha'
              : book_obj.testament === 'new'
                ? 'New Testament'
                : 'Old Testament'
          }
          inlineFilters={
            // Translation + depth pills, rendered next to the headphones/⋯
            // icons so the entire toolbar lives on one row.
            <StudyFilters
              inline
              estimatedMinutes={richContent?.estimatedMinutes}
            />
          }
          moreActions={
            // "Read the chapter" used to live here. The View → Study/Chapter
            // tile in the dropdown already covers that jump, so the explicit
            // row is redundant. Share stays.
            <StudyChapterShareLaunch
              bookName={book_obj.name}
              chapter={chapter}
              bookSlug={book}
              isGenesisOne={isGenesisOne}
            />
          }
        />

        {/* Optional summary dek (kept short — most chapters get none). */}
        {isGenesisOne && (
          <p className="study-dek">
            God created the world, light, sky, land, seas, plants, the sun,
            moon, stars, animals, and every living thing. He created men and
            women in His image, blessed them, and gave them responsibility to
            care for the earth and its creatures.
          </p>
        )}

        <div className="space-y-4 mt-4">
          {richContent && (
            <EditableStudyGuide
              bookName={book_obj.name}
              bookSlug={book}
              chapter={chapter}
              legacy={content}
              rich={richSerialized}
              sessionIsAdmin={sessionIsAdmin}
              isHandAuthored={handAuthored}
            >
              {safeRichContent && (
                <RichStudyGuide content={safeRichContent} artworks={richArtworks} />
              )}
            </EditableStudyGuide>
          )}
        </div>

        <ChapterArtStrip
          bookSlug={book}
          chapter={chapter}
          bookName={book_obj.name}
          artworks={stripArtworks}
        />

        <ChapterNav
          bookName={book_obj.name}
          currentChapter={chapter}
          totalChapters={book_obj.chapters}
          previousUrl={previousChapter ? `/study/${book}/${previousChapter}` : undefined}
          nextUrl={nextChapter ? `/study/${book}/${nextChapter}` : undefined}
        />

        {/* Related study guides — gives every chapter page a constellation
            of internal links beyond just prev/next. Helps both users
            (more discoverable) and Google (richer link graph for ranking).
            Renders as a discrete <nav> with descriptive anchor text. */}
        <nav
          aria-label="More study guides"
          className="related-nav mt-12 pt-8 border-t border-[color:var(--color-separator)]"
        >
          <h2 className="text-[0.875rem] uppercase tracking-wider font-semibold text-[color:var(--color-tertiary-label)] mb-4">
            More to study
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href={`/study/${book}`}
              className="frost-card block hover:shadow-md transition-shadow no-underline"
            >
              <p className="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-tertiary-label)] mb-1">
                Browse the book
              </p>
              <p className="text-base font-semibold text-[color:var(--color-label)]">
                All of {book_obj.name} ({book_obj.chapters} chapters)
              </p>
            </Link>
            {nearbyChapters.length > 0 && (
              <div className="frost-card">
                <p className="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-tertiary-label)] mb-2">
                  Nearby chapters
                </p>
                <ul className="flex flex-wrap gap-2">
                  {nearbyChapters.map((c) => (
                    <li key={c.ch}>
                      <Link
                        href={`/study/${book}/${c.ch}`}
                        className="inline-block px-3 h-8 leading-8 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[0.8125rem] font-medium text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors no-underline"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {isDeuterocanonical && (
              <Link
                href="/study/deuterocanonical-books"
                className="frost-card block hover:shadow-md transition-shadow no-underline sm:col-span-2"
              >
                <p className="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-tertiary-label)] mb-1">
                  Part of a collection
                </p>
                <p className="text-base font-semibold text-[color:var(--color-label)]">
                  The Deuterocanonical Books — Tobit, Maccabees, Wisdom & more
                </p>
                <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mt-1">
                  All eleven books between the Testaments, with chapter-by-chapter study guides.
                </p>
              </Link>
            )}
            <Link
              href="/study"
              className="frost-card block hover:shadow-md transition-shadow no-underline"
            >
              <p className="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-tertiary-label)] mb-1">
                Every book
              </p>
              <p className="text-base font-semibold text-[color:var(--color-label)]">
                Browse all study guides
              </p>
            </Link>
            <Link
              href={`/bible/${book}/${chapter}`}
              className="frost-card block hover:shadow-md transition-shadow no-underline"
            >
              <p className="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-tertiary-label)] mb-1">
                Read the chapter
              </p>
              <p className="text-base font-semibold text-[color:var(--color-label)]">
                {book_obj.name} {chapter} — full text
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
