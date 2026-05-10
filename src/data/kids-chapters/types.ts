/**
 * Kids study-guide schema.
 *
 * The kids audience renders a totally different document from the adult/youth
 * RichChapterContent. The shape: short retelling → big idea → key word →
 * memory verse → talk-together questions → optional activity → simple prayer.
 * Designed to be read WITH a child (parent or Sunday-school teacher), not by
 * a child alone.
 *
 * Hebrew/Greek, museum links, manuscript callouts, and study-level depth do
 * NOT exist here — they don't fit the kids format. The Audience picker
 * therefore hides the depth control when audience='kids'.
 *
 * For adult-themed chapters (Genesis 19, 38; Judges 19; 2 Samuel 11; Song
 * of Songs; Hosea 1–3; etc.), set `isParentDeferral: true` and use a single
 * `parentNote` block instead of a story. The renderer surfaces the deferral
 * notice prominently so parents can decide whether to discuss the chapter
 * now or later — but the chapter still EXISTS in the kids track, which is
 * essential for the "every chapter, every audience" promise.
 */

/* ─── Memory verse ──────────────────────────────────────────────────── */

export interface KidsMemoryVerse {
  /** Display reference, e.g. "Genesis 1:1". */
  ref: string;
  /** The verse itself. Use a kid-readable translation (NIrV is the standard
   *  for ages 4–10; ICB also fine). KJV is OK for older kids 8+. */
  text: string;
  /** Translation abbreviation, lowercase. Renders as a small tag on the
   *  verse card, e.g. "NIrV". */
  translation?: string;
}

/* ─── Block kinds ───────────────────────────────────────────────────── */

/** Supplies needed for a hands-on activity. Keep it to things parents
 *  already have at home — paper, pen, blocks, kitchen ingredients. The
 *  moment it requires a craft store run, parents skip it. */
export type KidsSupply = string;

export type KidsBlock =
  /** One sentence that summarizes the chapter for a child. e.g. "God made
   *  the world, and everything He made was good." */
  | { kind: 'bigIdea'; html: string }
  /** A 100–250 word retelling of the chapter in plain language for a child
   *  to follow. Replaces the verse-by-verse scripture spine of the adult
   *  guide. Use simple sentences, sensory detail, and present tense where
   *  natural. Avoid theological jargon. */
  | { kind: 'story'; html: string }
  /** A scripture excerpt, usually one verse or two, rendered plainly.
   *  Most kids guides only use a single memoryVerse block instead. Pull
   *  this in only when the verse text is itself the point (e.g. "Jesus
   *  wept" — John 11:35). */
  | { kind: 'scripture'; ref: string; text: string }
  /** Single key word from the chapter with a kid-friendly definition.
   *  e.g. word: 'Create', meaning: 'To make something brand new — like
   *  drawing a picture nobody has ever drawn before.' */
  | { kind: 'keyWord'; word: string; meaning: string }
  /** The memory verse, prominently displayed. Use a kid-friendly
   *  translation. Kids guides typically have one memory verse per chapter. */
  | { kind: 'memoryVerse'; verse: KidsMemoryVerse }
  /** 2–3 open-ended discussion questions for the parent or teacher to ask
   *  the child. Open-ended ("What would you do if...?"), never yes/no. */
  | { kind: 'talkTogether'; questions: string[] }
  /** A simple, doable activity. 5 minutes max. Supplies should be
   *  household items only. e.g. "Build a tower of blocks taller than you,
   *  then knock it over — like the Tower of Babel." */
  | { kind: 'tryThis'; title: string; html: string; supplies?: KidsSupply[] }
  /** A scripted prayer the parent and child can pray together. 2–4 short
   *  sentences. Kids should be able to repeat the lines after the parent. */
  | { kind: 'prayTogether'; html: string }
  /** A note specifically for the parent, not the child. Use for adult-
   *  themed chapters where the kid version is just a deferral, OR for
   *  guidance about how to discuss something difficult with the child. */
  | { kind: 'parentNote'; html: string }
  /** An illustration. Resolves the same way as the adult `kind: 'artwork'`
   *  block — by slug after server-side resolution, or by RegExp before. */
  | {
      kind: 'illustration';
      matchTitle?: RegExp;
      matchArtist?: RegExp;
      artworkSlug?: string;
      caption?: string;
      topical?: boolean;
      topicMatch?: string | string[];
      themed?: boolean;
    }
  | { kind: 'divider' };

/* ─── Section ───────────────────────────────────────────────────────── */

export interface KidsSection {
  /** Optional reference label, e.g. "Day 1: Light". */
  ref?: string;
  /** Section heading, e.g. "Today's Story", "Talk About It". */
  title?: string;
  blocks: KidsBlock[];
}

/* ─── A complete kids chapter ───────────────────────────────────────── */

/** Age band the chapter is tuned for. Most chapters target 8–10 and remain
 *  accessible to younger kids when read aloud by a parent. */
export type KidsAgeBand = '4-7' | '8-10' | 'all';

export interface KidsChapterContent {
  bookSlug: string;
  bookName: string;
  chapter: number;

  /** Tuned age band. Renders as a small tag in the header. Defaults to 'all'. */
  ageBand?: KidsAgeBand;

  /** Total expected reading time, in whole minutes. Kids guides are
   *  intentionally short (target 3–5m) and depth-uniform — there is no
   *  Quick/Standard/Deep equivalent here. */
  estimatedMinutes?: number;

  /** Optional short paragraphs above the first section. Usually one or
   *  two sentences. */
  intros?: string[];

  /** When true, the chapter is a parent-deferral for adult-themed content.
   *  Renderer shows a banner like "This chapter has hard parts. Here's the
   *  one truth you can share now." Sections should be a single parentNote
   *  block plus (optionally) a kid-safe summary and memory verse. */
  isParentDeferral?: boolean;

  /** Optional opener illustration above the first section. */
  opener?: {
    matchTitle?: RegExp;
    matchArtist?: RegExp;
    artworkSlug?: string;
    caption?: string;
    topical?: boolean;
    topicMatch?: string | string[];
    themed?: boolean;
  };

  /** Body sections. */
  sections: KidsSection[];

  /** Optional thematic topics for the artwork resolver to use when no
   *  chapter-specific illustration is available. Matches the adult
   *  `topicTags` mechanism. */
  topicTags?: string[];

  /** Optional shareable text. Kids share something like "I'm reading the
   *  Bible with my family! Today: Genesis 1." */
  bottomShare?: {
    quote: string;
    snippet: string;
    ref: string;
    label?: string;
  };
}
