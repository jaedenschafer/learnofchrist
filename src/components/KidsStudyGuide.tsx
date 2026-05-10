'use client';

import InlineArtwork from './InlineArtwork';
import ChapterProgress from './ChapterProgress';
import ShareButton from './ShareButton';
import type { ArtworkWithArtist } from '@/lib/supabase';
import type {
  KidsChapterContent,
  KidsBlock,
  KidsSection,
} from '@/data/kids-chapters/types';
import './KidsStudyGuide.css';

/**
 * Kids audience renderer.
 *
 * Different shape than RichStudyGuide because kids content is a different
 * document — story → big idea → key word → memory verse → talk → activity
 * → prayer. No depth filter (kids guides are depth-uniform), no Hebrew /
 * Greek, no manuscript callouts.
 *
 * The page route picks between this and RichStudyGuide based on the
 * AudienceContext. When `audience === 'kids'` and a kids chapter exists,
 * this renders. When no kids chapter exists yet, the page shows a
 * "Kids version coming soon" banner and falls back to the adult guide.
 */

interface KidsStudyGuideProps {
  content: KidsChapterContent;
  /** Artworks fetched server-side. Same pool the adult guide uses; the
   *  kids guide just picks one or two illustrations from it. */
  artworks?: ArtworkWithArtist[];
}

function findArtwork(
  artworks: ArtworkWithArtist[],
  matchTitle?: RegExp,
  matchArtist?: RegExp,
  artworkSlug?: string,
): ArtworkWithArtist | null {
  if (artworkSlug) {
    return artworks.find((a) => a.slug === artworkSlug) ?? null;
  }
  if (!matchTitle && !matchArtist) return null;
  return (
    artworks.find((a) => {
      if (matchTitle && !matchTitle.test(a.title)) return false;
      if (matchArtist && !matchArtist.test(a.artist?.name ?? '')) return false;
      return true;
    }) ?? null
  );
}

function KidsBlockRenderer({
  block,
  artworks,
}: {
  block: KidsBlock;
  artworks: ArtworkWithArtist[];
}) {
  switch (block.kind) {
    case 'bigIdea':
      return (
        <aside
          className="kids-big-idea"
          aria-label="The big idea of this chapter"
        >
          <p
            className="kids-big-idea__label"
            aria-hidden="true"
          >
            The Big Idea
          </p>
          <div
            className="kids-big-idea__body"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </aside>
      );

    case 'story':
      return (
        <div
          className="kids-story"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case 'scripture':
      return (
        <blockquote className="kids-scripture">
          <p
            className="kids-scripture__text"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
          <cite className="kids-scripture__ref">{block.ref}</cite>
        </blockquote>
      );

    case 'keyWord':
      return (
        <aside className="kids-key-word">
          <p className="kids-key-word__label" aria-hidden="true">
            New Word
          </p>
          <p className="kids-key-word__word">{block.word}</p>
          <p className="kids-key-word__meaning">{block.meaning}</p>
        </aside>
      );

    case 'memoryVerse':
      return (
        <aside className="kids-memory-verse">
          <p className="kids-memory-verse__label" aria-hidden="true">
            Memory Verse
          </p>
          <p
            className="kids-memory-verse__text"
            dangerouslySetInnerHTML={{ __html: block.verse.text }}
          />
          <p className="kids-memory-verse__ref">
            {block.verse.ref}
            {block.verse.translation && (
              <span className="kids-memory-verse__translation">
                {' '}
                · {block.verse.translation.toUpperCase()}
              </span>
            )}
          </p>
        </aside>
      );

    case 'talkTogether':
      return (
        <ol className="kids-talk-together">
          {block.questions.map((q, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={{ __html: q }}
            />
          ))}
        </ol>
      );

    case 'tryThis':
      return (
        <aside className="kids-try-this">
          <p className="kids-try-this__label" aria-hidden="true">
            Try This
          </p>
          <h4 className="kids-try-this__title">{block.title}</h4>
          {block.supplies && block.supplies.length > 0 && (
            <p className="kids-try-this__supplies">
              <span className="kids-try-this__supplies-label">
                You&apos;ll need:
              </span>{' '}
              {block.supplies.join(', ')}
            </p>
          )}
          <div
            className="kids-try-this__body"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </aside>
      );

    case 'prayTogether':
      return (
        <aside className="kids-pray-together">
          <p className="kids-pray-together__label" aria-hidden="true">
            Pray Together
          </p>
          <div
            className="kids-pray-together__body"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </aside>
      );

    case 'parentNote':
      return (
        <aside className="kids-parent-note" role="note">
          <p className="kids-parent-note__label" aria-hidden="true">
            For Parents
          </p>
          <div
            className="kids-parent-note__body"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </aside>
      );

    case 'illustration': {
      const artwork = findArtwork(
        artworks,
        block.matchTitle,
        block.matchArtist,
        block.artworkSlug,
      );
      if (!artwork) return null;
      return (
        <InlineArtwork artwork={artwork} caption={block.caption} />
      );
    }

    case 'divider':
      return <hr className="kids-divider" aria-hidden="true" />;
  }
}

function KidsSectionRenderer({
  section,
  artworks,
}: {
  section: KidsSection;
  artworks: ArtworkWithArtist[];
}) {
  return (
    <section className="kids-section">
      {section.ref && (
        <p className="kids-section__ref" aria-hidden="true">
          {section.ref}
        </p>
      )}
      {section.title && (
        <h2 className="kids-section__title">{section.title}</h2>
      )}
      <div className="kids-section__body">
        {section.blocks.map((block, i) => (
          <KidsBlockRenderer
            key={i}
            block={block}
            artworks={artworks}
          />
        ))}
      </div>
    </section>
  );
}

export default function KidsStudyGuide({
  content,
  artworks = [],
}: KidsStudyGuideProps) {
  const opener = content.opener
    ? findArtwork(
        artworks,
        content.opener.matchTitle,
        content.opener.matchArtist,
        content.opener.artworkSlug,
      )
    : null;

  return (
    <article className="kids-study">
      <ChapterProgress
        chapterKey={`${content.bookSlug}/${content.chapter}`}
        chapterName={`${content.bookName} ${content.chapter}`}
        bookSlug={content.bookSlug}
        chapter={content.chapter}
      />

      {/* Audience badge so kids/parents know what they're reading. */}
      <p className="kids-study__audience-badge" aria-label="Reading for kids">
        For Kids
        {content.estimatedMinutes !== undefined && (
          <span className="kids-study__minutes">
            {' '}
            · {content.estimatedMinutes} min with a grown-up
          </span>
        )}
      </p>

      {content.intros && content.intros.length > 0 && (
        <div className="kids-study__intros">
          {content.intros.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      )}

      {opener && (
        <InlineArtwork
          artwork={opener}
          caption={content.opener?.caption}
          priority
        />
      )}

      {content.isParentDeferral && (
        <aside className="kids-deferral-banner" role="note">
          <p className="kids-deferral-banner__label">A note for parents</p>
          <p className="kids-deferral-banner__body">
            This chapter has parts of the story that are better discussed when
            your child is older. Below is the one truth from this chapter you
            can share now.
          </p>
        </aside>
      )}

      {content.sections.map((section, i) => (
        <KidsSectionRenderer
          key={i}
          section={section}
          artworks={artworks}
        />
      ))}

      {content.bottomShare && (
        <div className="kids-study__share">
          <ShareButton
            label={
              content.bottomShare.label ??
              `Share ${content.bookName} ${content.chapter}`
            }
            content={{
              quote: content.bottomShare.quote,
              snippet: content.bottomShare.snippet,
              ref: content.bottomShare.ref,
              sourceUrl: `/study/${content.bookSlug}/${content.chapter}`,
              variant: 'insight',
            }}
          />
        </div>
      )}
    </article>
  );
}
