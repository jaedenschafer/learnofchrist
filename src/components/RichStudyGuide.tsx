'use client';

import {
  useEffect,
  useState,
  createContext,
  useContext,
  type ReactNode,
} from 'react';
import dynamic from 'next/dynamic';
import ReflectionBlock from './ReflectionBlock';
import ScriptureRefs from './ScriptureRefs';
import ShareableMarks from './ShareableMarks';
import ShareButton from './ShareButton';
import HebrewAudio from './HebrewAudio';
import ReadingComfortEffects from './ReadingComfortEffects';
import ChapterProgress from './ChapterProgress';
import InlineArtwork from './InlineArtwork';
import HighlightController from './HighlightController';
import BlockHideMenus from './BlockHideMenus';
import { useTranslation } from '@/lib/TranslationContext';
import { fetchVersesClient, type Verse, type ArtworkWithArtist } from '@/lib/supabase';
import type {
  RichChapterContent,
  RichSection,
  Block,
  VerseLine,
  VerseSpan,
} from '@/data/study-chapters/types';
import './GenesisOneStudy.css';
import './InlineArtwork.css';

/**
 * Generic rich-study-guide renderer.
 *
 * Built from the Genesis 1 deep-dive component. Reuses every CSS class,
 * every visual idiom, and the same scroll-driven highlight reveal so the
 * page feels identical regardless of which chapter you're on.
 *
 * Data lives in src/data/study-chapters/<book>-<chapter>.ts. The chapter
 * page passes it in here.
 *
 * Heavy dynamic-imported audio player matches the pattern in GenesisOneStudy.
 */

const StudyAudioPlayer = dynamic(() => import('./StudyAudioPlayer'), {
  ssr: false,
  loading: () => <div className="h-11 w-11" aria-hidden="true" />,
});

/* ─── Translation-aware scripture context ─────────────────────────────── */
// Genesis 1's commentary is anchored to the KJV. When the user picks another
// translation, we replace the verse text inside each scripture block with that
// translation's verses, but leave the commentary alone. The highlight marks
// only appear in KJV; in other translations the scripture renders as plain
// text so the page never goes blank.

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

interface ScriptureCtxValue {
  isKjv: boolean;
  translationAbbr: string;
  versesByChapter: Record<number, Verse[]>;
}

const ScriptureCtx = createContext<ScriptureCtxValue>({
  isKjv: true,
  translationAbbr: 'kjv',
  versesByChapter: {},
});

function ScriptureBlock({
  chapter,
  lines,
}: {
  chapter: number;
  lines: VerseLine[];
}) {
  const { isKjv, versesByChapter } = useContext(ScriptureCtx);

  if (isKjv) {
    return (
      <p className="scripture" data-chapter={chapter}>
        {lines.map((line, i) => (
          <RenderVerseLine key={`${line.number}-${i}`} line={line} />
        ))}
      </p>
    );
  }

  // Alt-translation path: pull the verse text from the DB and render flat.
  const chapterVerses = versesByChapter[chapter] ?? [];
  const matched = lines
    .map((l) => chapterVerses.find((v) => v.verse_number === l.number))
    .filter((v): v is Verse => Boolean(v));

  if (matched.length === 0) {
    // Verses not loaded yet — keep the KJV original so the page doesn't blank.
    return (
      <p className="scripture" data-chapter={chapter}>
        {lines.map((line, i) => (
          <RenderVerseLine key={`${line.number}-${i}`} line={line} />
        ))}
      </p>
    );
  }

  return (
    <p className="scripture" data-chapter={chapter}>
      {matched.map((v) => (
        <span key={v.verse_number} className="verse-line">
          <span className="v">{v.verse_number}</span>
          {cleanVerseText(v.text)}{' '}
        </span>
      ))}
    </p>
  );
}

function RenderVerseLine({ line }: { line: VerseLine }) {
  return (
    <>
      <span className="v">{line.number}</span>
      {line.spans.map((span, i) => (
        <RenderSpan key={i} span={span} />
      ))}{' '}
    </>
  );
}

function RenderSpan({ span }: { span: VerseSpan }) {
  if (span.kind === 'text') {
    // Allow author-provided HTML (entities like &apos;, italics, etc.).
    return <span dangerouslySetInnerHTML={{ __html: span.text }} />;
  }
  // mark
  return (
    <a className="mark-link" href={`#${span.jumpTo}`}>
      <mark className={span.tone} dangerouslySetInnerHTML={{ __html: span.text }} />
    </a>
  );
}

/* ─── Inline artwork picker ───────────────────────────────────────────── */

function pickArtwork(
  artworks: ArtworkWithArtist[],
  match: (a: ArtworkWithArtist) => boolean,
): ArtworkWithArtist | null {
  return artworks.find(match) ?? null;
}

/** Find an artwork either by a server-resolved `artworkSlug`
 *  (preferred — the page sanitizes RegExp-based matches into slugs
 *  before reaching this client component) or by the legacy
 *  matchTitle/matchArtist RegExp pair. The slug path is what the
 *  /study/[book]/[chapter] route actually feeds in; the RegExp
 *  fallback exists for any callers that bypass the page sanitizer. */
function matchArtwork(
  artworks: ArtworkWithArtist[],
  matchTitle?: RegExp,
  matchArtist?: RegExp,
  artworkSlug?: string,
): ArtworkWithArtist | null {
  if (artworkSlug) {
    return pickArtwork(artworks, (a) => a.slug === artworkSlug);
  }
  if (!matchTitle && !matchArtist) return null;
  return pickArtwork(artworks, (a) => {
    if (matchTitle && !matchTitle.test(a.title)) return false;
    if (matchArtist && !matchArtist.test(a.artist?.name ?? '')) return false;
    return true;
  });
}

/* ─── The renderer ────────────────────────────────────────────────────── */

interface RichStudyGuideProps {
  content: RichChapterContent;
  artworks?: ArtworkWithArtist[];
}

export default function RichStudyGuide({
  content,
  artworks = [],
}: RichStudyGuideProps) {
  const { currentTranslation } = useTranslation();
  const isKjv = currentTranslation === 'kjv';

  const opener = content.opener
    ? matchArtwork(
        artworks,
        content.opener.matchTitle,
        content.opener.matchArtist,
        content.opener.artworkSlug,
      )
    : null;

  const [versesByChapter, setVersesByChapter] = useState<Record<number, Verse[]>>({});

  // Dismissible "A note on translations" intro card. Hidden initially to avoid
  // a flash for users who already dismissed it; flipped to visible after we
  // read localStorage on mount.
  const showKjvNoteByDefault = content.showKjvNote !== false;
  const [kjvNoteVisible, setKjvNoteVisible] = useState(false);
  useEffect(() => {
    if (!showKjvNoteByDefault) return;
    try {
      if (localStorage.getItem('loc-kjv-note-dismissed') !== '1') {
        setKjvNoteVisible(true);
      }
    } catch {
      setKjvNoteVisible(true);
    }
  }, [showKjvNoteByDefault]);
  const dismissKjvNote = () => {
    setKjvNoteVisible(false);
    try {
      localStorage.setItem('loc-kjv-note-dismissed', '1');
    } catch {
      /* user just won't have persistence */
    }
  };

  // Determine which chapters this content references (for translation swap).
  // Most chapters are single-chapter; a few (like Genesis 1 with Day 7 in
  // chapter 2) cross over.
  const chaptersReferenced = Array.from(
    new Set(
      content.sections.flatMap((section) =>
        section.blocks
          .filter((b): b is Extract<Block, { kind: 'scripture' }> => b.kind === 'scripture')
          .map((b) => b.chapter),
      ),
    ),
  );

  useEffect(() => {
    if (isKjv) return;
    let cancelled = false;
    Promise.all(
      chaptersReferenced.map((c) => fetchVersesClient(content.bookSlug, c, currentTranslation)),
    ).then((results) => {
      if (cancelled) return;
      const next: Record<number, Verse[]> = {};
      chaptersReferenced.forEach((c, i) => {
        next[c] = results[i];
      });
      setVersesByChapter(next);
    });
    return () => {
      cancelled = true;
    };
    // chaptersReferenced is derived from `content` — re-derive only when content changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTranslation, isKjv, content.bookSlug]);

  // Highlight reveal scroll-watcher (lifted from GenesisOneStudy).
  useEffect(() => {
    document.documentElement.classList.add('js');

    const scriptures = Array.from(
      document.querySelectorAll<HTMLElement>('.rich-study .scripture'),
    );

    scriptures.forEach((scripture) => {
      scripture.querySelectorAll<HTMLElement>('mark').forEach((mark, i) => {
        mark.style.setProperty('--hl-delay', `${i * 160}ms`);
      });
    });

    const HIGHLIGHT_TRIGGER_FRACTION = 0.5;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.rich-study .verse-section'),
    );

    const checkSections = () => {
      const vh = window.innerHeight;
      const highlightTrigger = vh * HIGHLIGHT_TRIGGER_FRACTION;
      sections.forEach((section) => {
        const scripture = section.querySelector<HTMLElement>('.scripture');
        if (!scripture) return;
        const rect = section.getBoundingClientRect();
        if (!scripture.classList.contains('visible')) {
          if (rect.top <= highlightTrigger && rect.bottom > 0) {
            scripture.classList.add('visible');
          } else if (rect.bottom <= 0) {
            scripture.classList.add('visible');
          }
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkSections();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    checkSections();

    const handleMarkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.(
        'a.mark-link[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const navEl = document.querySelector<HTMLElement>('nav, header');
      const navH = navEl ? navEl.getBoundingClientRect().height : 0;
      const offset = navH + 24;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.setTimeout(checkSections, 500);
      target.classList.remove('target-flash');
      void target.offsetWidth;
      target.classList.add('target-flash');
      window.setTimeout(() => target.classList.remove('target-flash'), 1700);
    };

    document.addEventListener('click', handleMarkClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('click', handleMarkClick);
      document.documentElement.classList.remove('js');
    };
  }, []);

  const studyId = `${content.bookSlug}-${content.chapter}`;
  const tapHint =
    content.tapHint === undefined
      ? 'Tap any highlighted phrase to jump to the commentary that unpacks it.'
      : content.tapHint;
  const hasHebrew =
    content.hasHebrew ??
    content.sections.some((s) => s.blocks.some((b) => b.kind === 'hebrew'));

  return (
    <ScriptureCtx.Provider
      value={{
        isKjv,
        translationAbbr: currentTranslation,
        versesByChapter,
      }}
    >
      <article className="rich-study">
        <HighlightController
          bookSlug={content.bookSlug}
          chapter={content.chapter}
          containerSelector=".rich-study"
        />
        <ScriptureRefs />
        <ShareableMarks
          studyId={studyId}
          chapterRef={`${content.bookName} ${content.chapter}`}
          pageUrl={`/study/${content.bookSlug}/${content.chapter}`}
        />

        {hasHebrew && <HebrewAudio />}
        <ReadingComfortEffects />
        <BlockHideMenus />

        <ChapterProgress
          chapterKey={`${content.bookSlug}/${content.chapter}`}
          chapterName={`${content.bookName} ${content.chapter}`}
          bookSlug={content.bookSlug}
          chapter={content.chapter}
        />

        <div id="study-audio" className="study-top-actions">
          <StudyAudioPlayer />
        </div>

        {content.intros.map((intro, i) => (
          <p key={i} className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
        ))}

        {tapHint && <p className="tap-hint">{tapHint}</p>}

        {kjvNoteVisible && (
          <p className="kjv-note" role="note">
            <button
              type="button"
              className="kjv-note-close"
              aria-label="Dismiss this note"
              title="Dismiss"
              onClick={dismissKjvNote}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <strong>A note on translations.</strong>{' '}
            The commentary, highlights, and original-language callouts below
            are anchored to the King James Version&apos;s wording. Use the
            translation switcher anytime — the scripture blocks will swap to
            your chosen translation, while the commentary stays anchored to
            KJV phrasing.
          </p>
        )}

        {opener && (
          <InlineArtwork artwork={opener} caption={content.opener?.caption ?? ''} />
        )}

        {opener && <div className="divider">· · ·</div>}

        {content.sections.map((section, i) => (
          <RenderSection
            key={i}
            section={section}
            studyId={studyId}
            artworks={artworks}
          />
        ))}

        {content.bottomShare && (
          <div className="study-bottom-share">
            <p className="study-bottom-share-lead">Thought this guide would help someone?</p>
            <ShareButton
              variant="pill"
              label={content.bottomShare.label ?? `Share ${content.bookName} ${content.chapter}`}
              content={{
                quote: content.bottomShare.quote,
                snippet: content.bottomShare.snippet,
                ref: content.bottomShare.ref,
                variant: 'insight',
                sourceUrl:
                  (typeof window !== 'undefined' ? window.location.origin : 'https://learnofchrist.com') +
                  `/study/${content.bookSlug}/${content.chapter}`,
              }}
            />
          </div>
        )}
      </article>
    </ScriptureCtx.Provider>
  );
}

function RenderSection({
  section,
  studyId,
  artworks,
}: {
  section: RichSection;
  studyId: string;
  artworks: ArtworkWithArtist[];
}) {
  // A "verse-section" wraps every consecutive block until the next section/divider.
  // Genesis 1's pattern: <section className="verse-section"> contains a scripture
  // block + commentary + Hebrew/Christ/carry blocks belonging to those verses.
  // We mirror that by grouping blocks: each scripture block opens a new
  // verse-section, and subsequent non-scripture blocks belong to it until the
  // next scripture block (or end of the section).
  const groups: Block[][] = [];
  let current: Block[] = [];
  for (const block of section.blocks) {
    if (block.kind === 'scripture') {
      if (current.length > 0) groups.push(current);
      current = [block];
    } else {
      current.push(block);
    }
  }
  if (current.length > 0) groups.push(current);

  return (
    <>
      {(section.ref || section.title) && (
        <h2 className="section">
          {section.ref && <span className="ref">{section.ref}</span>}
          {section.title && <span dangerouslySetInnerHTML={{ __html: section.title }} />}
        </h2>
      )}
      {groups.map((group, i) => {
        // A "loose group" is one with no scripture block — render the blocks
        // inline without the verse-section wrapper (used for trailing reflection
        // prompts, dividers, artwork that follows verses).
        const hasScripture = group.some((b) => b.kind === 'scripture');
        if (!hasScripture) {
          return (
            <div key={i}>
              {group.map((block, j) => (
                <RenderBlock key={j} block={block} studyId={studyId} artworks={artworks} />
              ))}
            </div>
          );
        }
        return (
          <section key={i} className="verse-section">
            {group.map((block, j) => (
              <RenderBlock key={j} block={block} studyId={studyId} artworks={artworks} />
            ))}
          </section>
        );
      })}
    </>
  );
}

function RenderBlock({
  block,
  studyId,
  artworks,
}: {
  block: Block;
  studyId: string;
  artworks: ArtworkWithArtist[];
}) {
  switch (block.kind) {
    case 'scripture':
      return <ScriptureBlock chapter={block.chapter} lines={block.lines} />;

    case 'commentary':
      return <p {...(block.id ? { id: block.id } : {})} dangerouslySetInnerHTML={{ __html: block.html }} />;

    case 'hebrew':
      return (
        <div className="hebrew" id={block.id}>
          <span className="title" dangerouslySetInnerHTML={{ __html: block.title }} />
          <span className="script">{block.script}</span>
          <span className="translit" dangerouslySetInnerHTML={{ __html: block.translit }} />
          <p className="desc" dangerouslySetInnerHTML={{ __html: block.description }} />
        </div>
      );

    case 'greek':
      return (
        <div className="hebrew greek" id={block.id}>
          <span className="title" dangerouslySetInnerHTML={{ __html: block.title }} />
          <span className="script">{block.script}</span>
          <span className="translit" dangerouslySetInnerHTML={{ __html: block.translit }} />
          <p className="desc" dangerouslySetInnerHTML={{ __html: block.description }} />
        </div>
      );

    case 'christ':
      return (
        <div className="christ" id={block.id}>
          <span className="title" dangerouslySetInnerHTML={{ __html: block.title }} />
          <span dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      );

    case 'carry':
      return <div className="carry" dangerouslySetInnerHTML={{ __html: block.html }} />;

    case 'reflection':
      return <ReflectionBlock studyId={studyId} id={block.id} prompt={block.prompt} />;

    case 'artwork': {
      const a = matchArtwork(
        artworks,
        block.matchTitle,
        block.matchArtist,
        block.artworkSlug,
      );
      if (!a) return null;
      return <InlineArtwork artwork={a} caption={block.caption} />;
    }

    case 'divider':
      return <div className="divider">· · ·</div>;
  }
}

/** Render a chunk of inline content. Currently a thin pass-through; exists
 *  to give chapter authors a typed hook if we add inline behaviour later. */
export function Inline({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
