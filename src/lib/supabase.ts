import { createClient } from '@supabase/supabase-js';

// Public anon credentials. Missing env vars don't crash module load — build
// runs without .env.local — but queries log + return empty arrays so static
// generation produces an empty Supabase-backed surface rather than failing.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Client for browser-side queries (respects RLS)
export const supabase = createClient(
  supabaseUrl || 'http://localhost',
  supabaseAnonKey || 'anon',
);

// Server client for build-time queries (also uses anon key since content is public)
export const supabaseServer = createClient(
  supabaseUrl || 'http://localhost',
  supabaseAnonKey || 'anon',
);

// ─── Query helpers ───

export interface Verse {
  id: string;
  book_slug: string;
  chapter: number;
  verse_number: number;
  text: string;
  translation_id: string;
}

export interface Translation {
  id: string;
  abbreviation: string;
  name: string;
  language: string;
  is_active: boolean;
  source_type: string;
}

export interface BookRecord {
  id: string;
  name: string;
  slug: string;
  testament: string;
  chapters: number;
  abbreviation: string;
  description: string;
  sort_order: number;
}

async function fetchVerses(
  client: typeof supabase,
  bookSlug: string,
  chapter: number,
  translationAbbr: string,
): Promise<Verse[]> {
  // Translation + book lookups are independent — run in parallel.
  const [{ data: translation }, { data: book }] = await Promise.all([
    client.from('translations').select('id').eq('abbreviation', translationAbbr).single(),
    client.from('books').select('id').eq('slug', bookSlug).single(),
  ]);

  if (!translation || !book) return [];

  const { data: verses, error } = await client
    .from('verses')
    .select('*')
    .eq('book_id', book.id)
    .eq('chapter', chapter)
    .eq('translation_id', translation.id)
    .order('verse_number');

  if (error) {
    console.error('Error fetching verses:', error);
    return [];
  }

  return (verses || []).map((v) => ({ ...v, book_slug: bookSlug }));
}

/** Fetch verses for a specific book + chapter + translation (server). */
export function getVerses(
  bookSlug: string,
  chapter: number,
  translationAbbr: string = 'kjv',
): Promise<Verse[]> {
  return fetchVerses(supabaseServer, bookSlug, chapter, translationAbbr);
}

/** Fetch verses for client-side translation switching. */
export function fetchVersesClient(
  bookSlug: string,
  chapter: number,
  translationAbbr: string,
): Promise<Verse[]> {
  return fetchVerses(supabase, bookSlug, chapter, translationAbbr);
}

/** Fetch all books from Supabase */
export async function getBooksFromDB(): Promise<BookRecord[]> {
  const { data, error } = await supabaseServer
    .from('books')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error('Error fetching books:', error);
    return [];
  }
  return data || [];
}

// ─── Art library ───

export interface Artist {
  id: string;
  slug: string;
  name: string;
  birth_year: number | null;
  death_year: number | null;
  nationality: string | null;
  bio: string | null;
  wikipedia_url: string | null;
  /** Wikipedia/Commons portrait URL — populated by
   *  scripts/backfill-artist-portraits.mjs (migration 053). Used as
   *  the featured image on artist hub pages and beside the artist's
   *  name in artwork-page bio blurbs. Null when no portrait is
   *  available (mostly anonymous workshop attributions). */
  portrait_url?: string | null;
}

/** Citation entry on an artist row — used in the Further Reading section. */
export interface ArtistSource {
  title: string;
  url: string;
  type: 'wikipedia' | 'britannica' | 'museum' | 'scholarly' | 'other';
}

/** Original-prose writeup of one of an artist's notable works. */
export interface ArtistNotableWork {
  artwork_slug: string;
  paragraph: string;
}

/** Curated FAQ entry — replaces the auto-generated prompts that
 *  previously fed FAQPage JSON-LD. Phrased to mirror Google "People
 *  Also Ask" patterns for the artist + Christianity/Bible queries. */
export interface ArtistFaq {
  question: string;
  answer: string;
}

/** Full artist row returned by the artist hub page query — extends the
 *  base Artist with the SEO content columns added in migration 025,
 *  the portrait column added in migration 053, and the faith_story +
 *  faqs columns added in migration 054. */
export interface ArtistFull extends Artist {
  bio_long: string | null;
  bio_sources: ArtistSource[];
  notable_works: ArtistNotableWork[];
  wikidata_id: string | null;
  portrait_url: string | null;
  faith_story: string | null;
  faqs: ArtistFaq[];
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  artist_id: string | null;
  year: number | null;
  medium: string | null;
  source: string;
  source_url: string | null;
  external_id: string;
  image_url: string;
  thumbnail_url: string | null;
  /** 256px WebP from Supabase Storage. Populated by scripts/backfill-thumbnails.mjs.
   *  Null on rows that haven't been backfilled yet — fall back to thumbnail_url. */
  thumbnail_256_url?: string | null;
  /** 800px WebP — used as the detail-page hero before original loads. */
  thumbnail_800_url?: string | null;
  /** Hex color (e.g. '#3a2b1f') for blurDataURL placeholder. */
  dominant_color?: string | null;
  width: number | null;
  height: number | null;
  license: string;
  license_note: string | null;
  description: string | null;
  status: string;
  /** 'early-christian' | 'byzantine' | 'medieval' | 'renaissance' | 'baroque' | 'modern' | 'contemporary' */
  era?: string | null;
  biblical_character?: string[] | null;
  biblical_theme?: string[] | null;
  tags?: string[] | null;
  scripture_ref_count?: number | null;
}

export interface ArtworkWithArtist extends Artwork {
  artist: Artist | null;
}

export interface ArtworkWithRefs extends ArtworkWithArtist {
  scripture_refs: Array<{
    book_id: string;
    book_slug: string;
    book_name: string;
    chapter: number;
    verse_start: number | null;
    verse_end: number | null;
    is_primary: boolean;
  }>;
}

/**
 * Supabase nested selects return the related row as either an object or a
 * single-element array depending on the relationship shape. Normalize.
 */
function unwrap<T>(value: T | T[] | null | undefined): T | null {
  if (value == null) return null;
  if (Array.isArray(value)) return (value[0] as T) ?? null;
  return value;
}

/**
 * Fetch all published artworks for a book + chapter, ordered:
 *   1. Painted artworks (no 'manuscript-page' tag) before manuscript folios
 *   2. Within each group, primary refs (is_primary = true) before secondary
 *
 * The painted-vs-manuscript split is the most important rule: study guides
 * and the LCP-preload path consume `result[0]`, and we never want a Vivian
 * Bible / Codex Amiatinus parchment scan to outrank an Edward Hicks or
 * Caravaggio. Manuscript folios are valuable as ancient context, but not
 * as the headline image of a chapter.
 */
export async function getArtworksForChapter(
  bookSlug: string,
  chapter: number,
): Promise<ArtworkWithArtist[]> {
  const { data: book } = await supabaseServer
    .from('books')
    .select('id')
    .eq('slug', bookSlug)
    .single();

  if (!book) return [];

  const { data, error } = await supabaseServer
    .from('artwork_scripture_refs')
    .select(`
      is_primary,
      chapter,
      verse_start,
      verse_end,
      artwork:artworks!inner (
        id, slug, title, artist_id, year, medium, source, source_url,
        external_id, image_url, thumbnail_url,
        thumbnail_256_url, thumbnail_800_url, dominant_color,
        width, height,
        license, license_note, description, status, tags,
        artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
      )
    `)
    .eq('book_id', book.id)
    .eq('chapter', chapter)
    .eq('artwork.status', 'published')
    .eq('artwork.moderation_status', 'approved')
    .order('is_primary', { ascending: false });

  if (error) {
    console.error('Error fetching artworks for chapter:', error);
    return [];
  }

  // Flatten + dedupe by artwork id (an artwork may have multiple refs).
  type RawRow = { artwork: unknown };
  const seen = new Set<string>();
  const out: ArtworkWithArtist[] = [];
  for (const row of (data ?? []) as RawRow[]) {
    const raw = unwrap(row.artwork as Artwork & { artist: Artist | Artist[] | null } | Array<Artwork & { artist: Artist | Artist[] | null }>);
    if (!raw || seen.has(raw.id)) continue;
    seen.add(raw.id);
    out.push({ ...raw, artist: unwrap(raw.artist) });
  }

  // Push manuscript folios to the back of the list, preserving the prior
  // is_primary ordering within each group. Stable partition.
  const paintings: ArtworkWithArtist[] = [];
  const manuscripts: ArtworkWithArtist[] = [];
  for (const a of out) {
    if (a.tags?.includes('manuscript-page')) {
      manuscripts.push(a);
    } else {
      paintings.push(a);
    }
  }
  return [...paintings, ...manuscripts];
}

/**
 * Fetch all published artworks associated with any chapter of a book.
 * Grouped by chapter so /art/book/[slug] can render chapter-by-chapter.
 */
export async function getArtworksForBook(
  bookSlug: string,
): Promise<Array<{ chapter: number; artworks: ArtworkWithArtist[] }>> {
  const { data: book } = await supabaseServer
    .from('books')
    .select('id')
    .eq('slug', bookSlug)
    .single();

  if (!book) return [];

  const { data, error } = await supabaseServer
    .from('artwork_scripture_refs')
    .select(`
      chapter,
      is_primary,
      artwork:artworks!inner (
        id, slug, title, artist_id, year, medium, source, source_url,
        external_id, image_url, thumbnail_url,
        thumbnail_256_url, thumbnail_800_url, dominant_color,
        width, height,
        license, license_note, description, status, tags,
        artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
      )
    `)
    .eq('book_id', book.id)
    .eq('artwork.status', 'published')
    .eq('artwork.moderation_status', 'approved')
    .order('chapter', { ascending: true })
    .order('is_primary', { ascending: false });

  if (error) {
    console.error('Error fetching artworks for book:', error);
    return [];
  }

  type RawRow = { chapter: number; artwork: unknown };
  const byChapter = new Map<number, ArtworkWithArtist[]>();
  const seenPerChapter = new Map<number, Set<string>>();
  for (const row of (data ?? []) as RawRow[]) {
    const raw = unwrap(row.artwork as Artwork & { artist: Artist | Artist[] | null } | Array<Artwork & { artist: Artist | Artist[] | null }>);
    if (!raw) continue;
    const ch = row.chapter;
    if (!byChapter.has(ch)) {
      byChapter.set(ch, []);
      seenPerChapter.set(ch, new Set());
    }
    const seen = seenPerChapter.get(ch)!;
    if (seen.has(raw.id)) continue;
    seen.add(raw.id);
    byChapter.get(ch)!.push({ ...raw, artist: unwrap(raw.artist) });
  }

  // Within each chapter, push manuscript folios to the back so painted
  // artworks render first in the per-chapter strips on /art/book/[slug].
  // Stable partition preserves the is_primary ordering within each group.
  for (const [ch, list] of byChapter.entries()) {
    const paintings: ArtworkWithArtist[] = [];
    const manuscripts: ArtworkWithArtist[] = [];
    for (const a of list) {
      if (a.tags?.includes('manuscript-page')) manuscripts.push(a);
      else paintings.push(a);
    }
    byChapter.set(ch, [...paintings, ...manuscripts]);
  }

  return Array.from(byChapter.entries())
    .map(([chapter, artworks]) => ({ chapter, artworks }))
    .sort((a, b) => a.chapter - b.chapter);
}

/**
 * Fetch up to `limit` approved, painted (non-manuscript) artworks from any
 * of the given source slugs. Powers the curated showcase rows on /art —
 * each row is "give me the best from this group of artists/sources" and
 * we want a clean spread, so we order by recently-added (which roughly
 * means "the most recent ingest of that style").
 *
 * Manuscript-page tagged artworks (Vivian Bible, Codex Amiatinus,
 * Stuttgart Psalter parchment scans) are excluded by default — those have
 * their own dedicated row. Pass `includeManuscripts: true` to get them.
 */
export async function getArtworksBySources(
  sources: string[],
  limit: number,
  opts: { includeManuscripts?: boolean } = {},
): Promise<ArtworkWithArtist[]> {
  if (sources.length === 0) return [];
  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url,
      thumbnail_256_url, thumbnail_800_url, dominant_color,
      width, height,
      license, license_note, description, status, tags,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .in('source', sources)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('created_at', { ascending: false })
    .limit(limit * 4); // overfetch so the manuscript-filter step still has enough

  if (error) {
    console.error('Error fetching artworks by sources:', error);
    return [];
  }

  type Raw = Artwork & { artist: Artist | Artist[] | null };
  const out: ArtworkWithArtist[] = [];
  for (const row of (data ?? []) as Raw[]) {
    const isManuscript = row.tags?.includes('manuscript-page') ?? false;
    if (isManuscript && !opts.includeManuscripts) continue;
    if (!isManuscript && opts.includeManuscripts === false) continue;
    out.push({ ...row, artist: unwrap(row.artist) });
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Fetch artworks where `tags` contains 'manuscript-page' — used by the
 * Ancient Manuscripts row on the showcase. These are the Vivian Bible,
 * Codex Amiatinus, and Stuttgart Psalter folios.
 */
export async function getManuscriptArtworks(limit: number): Promise<ArtworkWithArtist[]> {
  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url,
      thumbnail_256_url, thumbnail_800_url, dominant_color,
      width, height,
      license, license_note, description, status, tags,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .contains('tags', ['manuscript-page'])
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('year', { ascending: true })
    .limit(limit);

  if (error) {
    console.error('Error fetching manuscript artworks:', error);
    return [];
  }
  type Raw = Artwork & { artist: Artist | Artist[] | null };
  return (data ?? []).map((row) => {
    const r = row as Raw;
    return { ...r, artist: unwrap(r.artist) };
  });
}

/**
 * Pick one "hero-worthy" artwork for the cinematic hero on /art.
 *
 * Curated pool of ~40 striking paintings. Daily deterministic rotation:
 * same artwork all day, different the next. Aggressive exclusions on
 * manuscript folios, marginal psalter art, and icons — the user wants
 * famous paintings, not text-heavy parchment.
 */
export async function getFeaturedHeroArtwork(): Promise<ArtworkWithArtist | null> {
  // Source allowlist — only sources known to ship full-painting works.
  // Dropped `theophanes`, `gap_fill`, and museum/manuscript catch-alls
  // because they leak marginal psalter art and codex pages into the pool.
  const HERO_SOURCES = [
    'caravaggio', 'rembrandt', 'michelangelo', 'raphael', 'rubens',
    'fra-angelico', 'tissot', 'bloch', 'bouguereau', 'blake', 'dore',
  ];

  // Tag exclusions — anything that looks like a manuscript, icon, folio,
  // marginal illustration, or codex page is out.
  const EXCLUDE_TAGS = ['manuscript-page', 'folio', 'icon', 'marginal', 'psalter', 'codex'];

  // Title-substring exclusions — last-line defense against artworks that
  // didn't get tagged correctly (e.g. "Khludov Psalter, fol. 67r").
  const EXCLUDE_TITLE_PATTERNS = /\b(?:psalter|folio|fol\.|codex|miniature|illuminated|marginalia|page \d+|f\.\s*\d+r?)\b/i;

  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url,
      thumbnail_256_url, thumbnail_800_url, dominant_color,
      width, height,
      license, license_note, description, status, tags,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .in('source', HERO_SOURCES)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .not('thumbnail_800_url', 'is', null)
    .not('description', 'is', null)
    .order('scripture_ref_count', { ascending: false })
    .limit(120);

  if (error || !data || data.length === 0) {
    console.error('Error fetching hero artwork:', error);
    return null;
  }

  type Raw = Artwork & { artist: Artist | Artist[] | null };

  // Apply tag + title filters client-side, then cap at the 40 most
  // scripture-referenced survivors. That gives a stable, well-known pool
  // that rotates daily.
  const pool = (data as Raw[])
    .filter((a) => {
      const tags = a.tags ?? [];
      if (EXCLUDE_TAGS.some((t) => tags.includes(t))) return false;
      if (EXCLUDE_TITLE_PATTERNS.test(a.title)) return false;
      return true;
    })
    .slice(0, 40);

  if (pool.length === 0) return null;

  // Deterministic daily rotation — same hero all day, refresh next day.
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const pick = pool[day % pool.length];
  return { ...pick, artist: unwrap(pick.artist) };
}

/**
 * Featured artist for the editorial mosaic block. Weekly rotation across
 * the well-stocked artists in the library. Returns the artist record + a
 * curated handful of their works, lead first.
 */
export async function getFeaturedArtistShowcase(): Promise<{
  artist: Artist;
  works: ArtworkWithArtist[];
} | null> {
  const FEATURED_SLUGS = [
    'james-tissot', 'gustave-dore', 'rembrandt-van-rijn', 'carl-bloch',
    'michelangelo-buonarroti', 'caravaggio', 'william-blake',
    'william-adolphe-bouguereau', 'peter-paul-rubens', 'raphael-sanzio',
    'fra-angelico', 'andrei-rublev', 'heinrich-hofmann', 'edward-hicks',
    'william-holman-hunt', 'thomas-cole',
  ];
  const week = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  const slug = FEATURED_SLUGS[week % FEATURED_SLUGS.length];

  const { data: artistRow, error: aErr } = await supabaseServer
    .from('artists')
    .select('id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url')
    .eq('slug', slug)
    .single();
  if (aErr || !artistRow) {
    // Fall back to the next slug in the list — keeps the section alive
    // even if a featured artist gets renamed.
    return null;
  }

  const { data: works, error: wErr } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url,
      thumbnail_256_url, thumbnail_800_url, dominant_color,
      width, height,
      license, license_note, description, status, tags,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .eq('artist_id', artistRow.id)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('scripture_ref_count', { ascending: false })
    .limit(8);
  if (wErr || !works || works.length === 0) return null;

  type Raw = Artwork & { artist: Artist | Artist[] | null };
  const pool = (works as Raw[])
    .filter((a) => !(a.tags?.includes('manuscript-page') ?? false))
    .map((row) => ({ ...row, artist: unwrap(row.artist) }));
  if (pool.length === 0) return null;

  return { artist: artistRow, works: pool };
}

/** List all books that have at least one artwork — drives the /art directory. */
export async function getBooksWithArt(): Promise<BookRecord[]> {
  const { data: refs, error } = await supabaseServer
    .from('artwork_scripture_refs')
    .select('book_id');

  if (error) {
    console.error('Error fetching books with art:', error);
    return [];
  }

  const bookIds = Array.from(new Set((refs ?? []).map((r: { book_id: string }) => r.book_id)));
  if (bookIds.length === 0) return [];

  const { data: books } = await supabaseServer
    .from('books')
    .select('*')
    .in('id', bookIds)
    .order('sort_order');

  return books ?? [];
}

/** Fetch a single artwork by slug, with artist + all scripture references. */
export async function getArtworkBySlug(slug: string): Promise<ArtworkWithRefs | null> {
  const { data: artwork, error } = await supabaseServer
    .from('artworks')
    .select(`
      *,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url, portrait_url )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .maybeSingle();

  if (error || !artwork) {
    if (error) console.error('Error fetching artwork:', error);
    return null;
  }

  const { data: refs } = await supabaseServer
    .from('artwork_scripture_refs')
    .select(`
      is_primary, chapter, verse_start, verse_end,
      book:books ( id, slug, name )
    `)
    .eq('artwork_id', artwork.id)
    .order('is_primary', { ascending: false });

  type RawRef = {
    is_primary: boolean;
    chapter: number;
    verse_start: number | null;
    verse_end: number | null;
    book: unknown;
  };
  const scripture_refs = ((refs ?? []) as RawRef[])
    .map((r) => {
      const book = unwrap(r.book as { id: string; slug: string; name: string } | Array<{ id: string; slug: string; name: string }>);
      if (!book) return null;
      return {
        book_id: book.id,
        book_slug: book.slug,
        book_name: book.name,
        chapter: r.chapter,
        verse_start: r.verse_start,
        verse_end: r.verse_end,
        is_primary: r.is_primary,
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);

  const normalized = artwork as Artwork & { artist: Artist | Artist[] | null };
  return {
    ...normalized,
    artist: unwrap(normalized.artist),
    scripture_refs,
  };
}

/** List every published artwork — used by /art browse + sitemap. */
export async function getAllArtworkSlugs(): Promise<Array<{ slug: string }>> {
  const { data, error } = await supabaseServer
    .from('artworks')
    .select('slug')
    .eq('status', 'published')
    .eq('moderation_status', 'approved');

  if (error) {
    console.error('Error fetching artwork slugs:', error);
    return [];
  }
  return data ?? [];
}

/** Paginated list of all published artworks for the /art index page. */
export async function getArtworksBrowse(limit = 60): Promise<ArtworkWithArtist[]> {
  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      *,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching artworks browse:', error);
    return [];
  }
  type RawArtwork = Artwork & { artist: Artist | Artist[] | null };
  return ((data ?? []) as RawArtwork[]).map((a) => ({
    ...a,
    artist: unwrap(a.artist),
  }));
}

/**
 * "Highlight reel" — curated painted artworks for the home page arches.
 * Excludes manuscript folios and weights toward the Western canon (the
 * famous artists list below) so the band reads as a museum strip rather
 * than a chronological crawl.
 *
 * Implementation: order by scripture_ref_count desc to surface the most
 * referenced pieces, then re-rank in app code with a famous-artist
 * allow-list. Manuscripts are filtered after the SQL fetch (Postgres
 * `not contains` on a tag array is awkward and overfetching is cheap).
 */
export async function getCuratedHighlights(limit = 24): Promise<ArtworkWithArtist[]> {
  const overfetch = Math.max(limit * 4, 80);
  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url,
      thumbnail_256_url, thumbnail_800_url, dominant_color,
      width, height,
      license, license_note, description, status, tags,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
    `)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('scripture_ref_count', { ascending: false, nullsFirst: false })
    .limit(overfetch);

  if (error) {
    console.error('Error fetching curated highlights:', error);
    return [];
  }

  type Raw = Artwork & { artist: Artist | Artist[] | null };
  const rows = ((data ?? []) as Raw[])
    .filter((a) => !isManuscriptish(a))
    .map((a) => ({ ...a, artist: unwrap(a.artist) } as ArtworkWithArtist));

  return curateByArtist(rows).slice(0, limit);
}

/** Belt-and-suspenders manuscript filter. The `manuscript-page` tag
 *  catches most folios, but a handful of medieval codices were imported
 *  before the tag rule landed; their slugs/titles still give them away
 *  ("codex-amiatinus", "stuttgart-psalter", etc.). */
function isManuscriptish(a: { tags?: string[] | null; slug: string; title: string; medium?: string | null }): boolean {
  if (a.tags?.includes('manuscript-page')) return true;
  const haystack = `${a.slug} ${a.title} ${a.medium ?? ''}`.toLowerCase();
  return /\b(codex|psalter|illuminated|manuscript|folio|breviary|book of hours)\b/.test(haystack);
}

// Famous-painter allow-list. Lower index = higher rank. Lowercase so the
// substring match is case-insensitive and accent-insensitive enough for
// our needs (the Supabase rows store names in their canonical form).
const FAMOUS_PAINTERS: ReadonlyArray<string> = [
  'caravaggio', 'rembrandt', 'tissot', 'doré', 'dore',
  'michelangelo', 'raphael', 'leonardo', 'da vinci',
  'el greco', 'botticelli', 'velázquez', 'velazquez',
  'rubens', 'titian', 'vermeer', 'van dyck', 'van eyck',
  'fra angelico', 'giotto', 'duccio', 'masaccio',
  'bosch', 'cranach', 'memling', 'mantegna',
  'tintoretto', 'veronese', 'pontormo',
  'guido reni', 'guercino', 'zurbarán', 'zurbaran',
  'ribera', 'la tour', 'poussin', 'lorrain',
  'murillo', 'bouguereau', 'william blake',
  'hicks', 'turner', 'delacroix', 'overbeck',
  'goya', 'david', 'ingres', 'corot',
  'millais', 'hunt', 'rossetti', 'burne-jones',
];

function fameRank(name: string | null | undefined): number {
  if (!name) return 9999;
  const n = name.toLowerCase();
  for (let i = 0; i < FAMOUS_PAINTERS.length; i++) {
    if (n.includes(FAMOUS_PAINTERS[i])) return i;
  }
  return 1000;
}

/** Sort by fame rank, then interleave so consecutive tiles aren't all by
 *  the same artist (looks repetitive in the marquee). */
function curateByArtist(rows: ArtworkWithArtist[]): ArtworkWithArtist[] {
  const ranked = rows
    .slice()
    .sort((a, b) => fameRank(a.artist?.name) - fameRank(b.artist?.name));

  // Group consecutive same-artist rows so we can interleave them.
  const byArtist = new Map<string, ArtworkWithArtist[]>();
  for (const r of ranked) {
    const key = r.artist?.id ?? r.id;
    if (!byArtist.has(key)) byArtist.set(key, []);
    byArtist.get(key)!.push(r);
  }

  // Round-robin pick one from each group until exhausted — keeps the
  // famous-first ordering while spreading any single artist's pieces out.
  const queues = Array.from(byArtist.values());
  const out: ArtworkWithArtist[] = [];
  let pickedThisPass = true;
  while (pickedThisPass) {
    pickedThisPass = false;
    for (const q of queues) {
      const next = q.shift();
      if (next) {
        out.push(next);
        pickedThisPass = true;
      }
    }
  }
  return out;
}

/* ─── Filtered browse (search bar + dropdowns on /art) ─────────────────── */

export type ArtSort =
  | 'recent'
  | 'oldest'
  | 'az'
  | 'za'
  | 'year_asc'
  | 'year_desc'
  | 'popular'
  | 'relevance';

/** Cursor for paging through search_artworks. For sort=recent/oldest
 *  we use keyset pagination with (ts, id). For every other sort
 *  (relevance, az, za, year_*, popular) we use a numeric offset
 *  because those orderings aren't strictly monotonic on (ts, id)
 *  and the SQL applied no cursor at all before migration 055. */
export interface ArtCursor {
  ts?: string;     // ISO timestamp — keyset path
  id?: string;     // uuid — keyset path
  offset?: number; // numeric offset — non-time sorts
}

export interface ArtFilterParams {
  q?: string;
  /** Multi-select. Single string accepted for backwards compat. */
  book?: string | string[];
  artist?: string | string[];
  source?: string;
  era?: string | string[];
  /** Biblical character keys (e.g. 'jesus', 'john_the_baptist'). */
  character?: string | string[];
  /** Biblical theme keys (e.g. 'crucifixion', 'creation'). */
  theme?: string | string[];
  /** 'old' | 'new' — Old / New Testament filter. */
  testament?: string | null;
  sort?: ArtSort;
  limit?: number;
  /** Use cursor for keyset pagination. */
  cursor?: ArtCursor | null;
  /** Legacy offset path — only used when cursor is undefined and offset > 0. */
  offset?: number;
}

export interface ArtBrowseResult {
  artworks: ArtworkWithArtist[];
  total: number;
  /** Cursor to pass to the next call to load the following page. Null when
   *  there are no more rows. */
  nextCursor: ArtCursor | null;
}

/** Encode/decode cursor for URL safety.
 *  Two formats, distinguished by leading byte:
 *    - "o:<n>"     numeric offset (used for non-time sorts)
 *    - "<ts>|<id>" keyset (used for recent/oldest)
 *  Both are base64url-wrapped. */
export function encodeCursor(c: ArtCursor | null): string {
  if (!c) return '';
  if (c.offset != null && c.offset > 0) {
    return Buffer.from(`o:${c.offset}`, 'utf8').toString('base64url');
  }
  if (c.ts && c.id) {
    return Buffer.from(`${c.ts}|${c.id}`, 'utf8').toString('base64url');
  }
  return '';
}
export function decodeCursor(s: string | null | undefined): ArtCursor | null {
  if (!s) return null;
  try {
    const decoded = Buffer.from(s, 'base64url').toString('utf8');
    if (decoded.startsWith('o:')) {
      const n = parseInt(decoded.slice(2), 10);
      if (!Number.isFinite(n) || n <= 0) return null;
      return { offset: n };
    }
    const [ts, id] = decoded.split('|');
    if (!ts || !id) return null;
    return { ts, id };
  } catch {
    return null;
  }
}

function toArray(v: string | string[] | undefined): string[] | null {
  if (!v) return null;
  const arr = Array.isArray(v) ? v : [v];
  const filtered = arr.map((s) => s.trim()).filter(Boolean);
  return filtered.length ? filtered : null;
}

/**
 * Filtered list of approved, published artworks. Backed by the
 * `search_artworks` RPC (migration 029) for FTS + faceted filtering +
 * cursor pagination in one query.
 *
 * Pass `cursor` to fetch the next page. The first call passes none; the
 * RPC returns rows + a `total_count` projected onto each row, which we
 * pull off the first row.
 */
export async function getFilteredArtworks(
  filters: ArtFilterParams = {},
): Promise<ArtBrowseResult> {
  const {
    q,
    book,
    artist,
    era,
    character,
    theme,
    testament,
    sort = 'recent',
    limit = 48,
    cursor,
    offset = 0,
  } = filters;

  const cursorOffset = cursor?.offset ?? 0;

  const args = {
    q: q?.trim() || null,
    filter_era: toArray(era),
    filter_books: toArray(book),
    filter_artists: toArray(artist),
    filter_chars: toArray(character),
    filter_themes: toArray(theme),
    cursor_ts: cursor?.ts ?? null,
    cursor_id: cursor?.id ?? null,
    page_size: Math.min(Math.max(limit, 1), 200),
    sort_by: sort,
    cursor_offset: cursorOffset,
    filter_testament:
      testament === 'old' || testament === 'new' ? testament : null,
  };

  const { data, error } = await supabaseServer.rpc('search_artworks', args);
  if (error) {
    console.error('Error fetching filtered artworks (RPC):', error);
    // Fall back to the legacy offset path so the page still renders during
    // the migration window before 028/029 are applied.
    return legacyOffsetFallback({ q, book, artist, sort, limit, offset });
  }

  type RpcRow = Artwork & {
    artist_id: string | null;
    artist_slug: string | null;
    artist_name: string | null;
    /** RPC selects created_at for cursor stability — not part of the
     *  Artwork interface (which is the public-facing shape) but is on
     *  every row coming back from search_artworks. */
    created_at: string;
    total_count: number | string;
    rank: number;
  };

  const rows = (data ?? []) as RpcRow[];
  const total = rows.length > 0 ? Number(rows[0].total_count) : 0;
  const artworks: ArtworkWithArtist[] = rows.map((r) => {
    const { artist_slug, artist_name, total_count: _t, rank: _r, ...rest } = r;
    void _t;
    void _r;
    const artistRow: Artist | null = r.artist_id
      ? {
          id: r.artist_id,
          slug: artist_slug ?? '',
          name: artist_name ?? 'Unknown',
          birth_year: null,
          death_year: null,
          nationality: null,
          bio: null,
          wikipedia_url: null,
        }
      : null;
    return { ...(rest as Artwork), artist: artistRow };
  });

  const last = rows[rows.length - 1];
  const reachedEnd =
    cursorOffset + artworks.length >= total ||
    artworks.length < args.page_size;
  let nextCursor: ArtCursor | null = null;
  if (!reachedEnd && last) {
    if (sort === 'recent' || sort === 'oldest') {
      // Keyset pagination via (created_at, id) — stable under inserts.
      nextCursor = last.created_at
        ? { ts: String(last.created_at), id: last.id }
        : null;
    } else {
      // Offset cursor for relevance / az / za / year_* / popular.
      nextCursor = { offset: cursorOffset + artworks.length };
    }
  }

  return { artworks, total, nextCursor };
}

/** Backwards-compatible offset path used as a fallback when the RPC fails
 *  (e.g. before migrations 028/029 run). Mirrors the pre-refactor query. */
async function legacyOffsetFallback(filters: {
  q?: string;
  book?: string | string[];
  artist?: string | string[];
  sort?: ArtSort;
  limit: number;
  offset: number;
}): Promise<ArtBrowseResult> {
  const { q, book, artist, sort = 'recent', limit, offset } = filters;
  const bookSlug = Array.isArray(book) ? book[0] : book;
  const artistSlug = Array.isArray(artist) ? artist[0] : artist;

  let artworkIdsFromBook: string[] | null = null;
  if (bookSlug) {
    const { data: bookRow } = await supabaseServer
      .from('books').select('id').eq('slug', bookSlug).maybeSingle();
    if (!bookRow) return { artworks: [], total: 0, nextCursor: null };
    const { data: refs } = await supabaseServer
      .from('artwork_scripture_refs').select('artwork_id').eq('book_id', bookRow.id);
    artworkIdsFromBook = Array.from(new Set((refs || []).map((r: { artwork_id: string }) => r.artwork_id)));
    if (artworkIdsFromBook.length === 0) return { artworks: [], total: 0, nextCursor: null };
  }
  let artistId: string | null = null;
  if (artistSlug) {
    const { data: artistRow } = await supabaseServer
      .from('artists').select('id').eq('slug', artistSlug).maybeSingle();
    if (!artistRow) return { artworks: [], total: 0, nextCursor: null };
    artistId = artistRow.id;
  }

  let query = supabaseServer
    .from('artworks')
    .select(
      `*, artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )`,
      { count: 'exact' },
    )
    .eq('status', 'published')
    .eq('moderation_status', 'approved');

  if (artworkIdsFromBook) query = query.in('id', artworkIdsFromBook);
  if (artistId) query = query.eq('artist_id', artistId);
  if (q && q.trim()) {
    const pattern = `%${q.trim().replace(/[%_]/g, (m) => '\\' + m)}%`;
    query = query.ilike('title', pattern);
  }

  switch (sort) {
    case 'oldest': query = query.order('created_at', { ascending: true }); break;
    case 'az':     query = query.order('title', { ascending: true }); break;
    case 'za':     query = query.order('title', { ascending: false }); break;
    case 'year_asc':  query = query.order('year', { ascending: true, nullsFirst: false }); break;
    case 'year_desc': query = query.order('year', { ascending: false, nullsFirst: false }); break;
    case 'recent':
    default:       query = query.order('created_at', { ascending: false });
  }

  query = query.range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) {
    console.error('Legacy fallback also failed:', error);
    return { artworks: [], total: 0, nextCursor: null };
  }
  type RawArtwork = Artwork & { artist: Artist | Artist[] | null };
  const artworks = ((data ?? []) as RawArtwork[]).map((a) => ({ ...a, artist: unwrap(a.artist) }));
  return { artworks, total: count ?? artworks.length, nextCursor: null };
}

/* ─── Typeahead for the search-box dropdown ───────────────────────────── */

export interface TypeaheadResult {
  kind: 'artwork' | 'artist';
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  thumbnail_url: string | null;
}

/** Top fuzzy matches for a query — used by /api/art/search. */
export async function getArtTypeahead(q: string, limit = 8): Promise<TypeaheadResult[]> {
  const trimmed = q.trim();
  if (trimmed.length === 0) return [];
  const { data, error } = await supabaseServer.rpc('art_typeahead', {
    q: trimmed,
    page_size: Math.min(Math.max(limit, 1), 20),
  });
  if (error) {
    console.error('Typeahead RPC failed:', error);
    return [];
  }
  type Row = TypeaheadResult & { rank: number };
  return ((data ?? []) as Row[]).map(({ rank: _r, ...rest }) => {
    void _r;
    return rest;
  });
}

/** Fetch one artist by slug, including the SEO content columns from
 *  migration 025. Returns null when no artist matches. */
export async function getArtistBySlug(slug: string): Promise<ArtistFull | null> {
  const { data, error } = await supabaseServer
    .from('artists')
    .select('id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url, bio_long, bio_sources, notable_works, wikidata_id, portrait_url, faith_story, faqs')
    .eq('slug', slug)
    .maybeSingle();
  if (error) {
    console.error('Error fetching artist:', error);
    return null;
  }
  if (!data) return null;
  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
    birth_year: data.birth_year,
    death_year: data.death_year,
    nationality: data.nationality,
    bio: data.bio,
    wikipedia_url: data.wikipedia_url,
    bio_long: data.bio_long ?? null,
    bio_sources: Array.isArray(data.bio_sources) ? (data.bio_sources as ArtistSource[]) : [],
    notable_works: Array.isArray(data.notable_works) ? (data.notable_works as ArtistNotableWork[]) : [],
    wikidata_id: data.wikidata_id ?? null,
    portrait_url: data.portrait_url ?? null,
    faith_story: data.faith_story ?? null,
    faqs: Array.isArray(data.faqs) ? (data.faqs as ArtistFaq[]) : [],
  };
}

/** Slug list used by generateStaticParams + sitemap. Only artists who have
 *  at least one approved, published artwork — anyone else has nothing to
 *  show on their hub page yet. */
export async function getAllArtistSlugs(): Promise<Array<{ slug: string }>> {
  const list = await getArtistsWithArt();
  return list.map((a) => ({ slug: a.slug }));
}

/** Directory listing for /art/artists. Joins artists_with_art (id + count)
 *  with lifespan / nationality / bio readiness from the artists table so
 *  the directory cards can render without a per-row roundtrip. */
export async function getArtistsDirectory(): Promise<Array<{
  id: string;
  slug: string;
  name: string;
  count: number;
  birth_year: number | null;
  death_year: number | null;
  nationality: string | null;
  has_bio: boolean;
}>> {
  const list = await getArtistsWithArt();
  if (list.length === 0) return [];

  const { data, error } = await supabaseServer
    .from('artists')
    .select('id, birth_year, death_year, nationality, bio_long')
    .in('id', list.map((a) => a.id));

  if (error) {
    console.error('Error fetching artist details for directory:', error);
    return list.map((a) => ({
      ...a,
      birth_year: null,
      death_year: null,
      nationality: null,
      has_bio: false,
    }));
  }

  type Row = {
    id: string;
    birth_year: number | null;
    death_year: number | null;
    nationality: string | null;
    bio_long: string | null;
  };
  const byId = new Map((data ?? []).map((d) => [(d as Row).id, d as Row]));
  return list.map((a) => {
    const d = byId.get(a.id);
    const bio = (d?.bio_long ?? '').trim();
    return {
      ...a,
      birth_year: d?.birth_year ?? null,
      death_year: d?.death_year ?? null,
      nationality: d?.nationality ?? null,
      // Same threshold the artist page uses to flip out of noindex.
      has_bio: bio.length >= 200,
    };
  });
}

/** Every approved, published artwork by a given artist, with primary
 *  scripture refs flattened in for the chapter-link list on the artist hub. */
export async function getArtworksByArtist(artistId: string): Promise<
  Array<ArtworkWithArtist & { primary_ref: { book_slug: string; book_name: string; chapter: number } | null }>
> {
  const { data, error } = await supabaseServer
    .from('artworks')
    .select(`
      id, slug, title, artist_id, year, medium, source, source_url,
      external_id, image_url, thumbnail_url, width, height,
      license, license_note, description, status,
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url ),
      refs:artwork_scripture_refs (
        is_primary, chapter,
        book:books ( slug, name )
      )
    `)
    .eq('artist_id', artistId)
    .eq('status', 'published')
    .eq('moderation_status', 'approved')
    .order('year', { ascending: true, nullsFirst: false });

  if (error) {
    console.error('Error fetching artworks by artist:', error);
    return [];
  }

  type RawRef = { is_primary: boolean; chapter: number; book: unknown };
  type Row = Artwork & {
    artist: Artist | Artist[] | null;
    refs: RawRef[] | null;
  };

  return ((data ?? []) as Row[]).map((row) => {
    const refs = (row.refs ?? []) as RawRef[];
    const primary = refs.find((r) => r.is_primary) ?? refs[0] ?? null;
    let primary_ref: { book_slug: string; book_name: string; chapter: number } | null = null;
    if (primary) {
      const book = unwrap(primary.book as { slug: string; name: string } | Array<{ slug: string; name: string }>);
      if (book) {
        primary_ref = { book_slug: book.slug, book_name: book.name, chapter: primary.chapter };
      }
    }
    return {
      ...row,
      artist: unwrap(row.artist),
      primary_ref,
    };
  });
}

/** List all artists who have at least one approved, published artwork. */
export async function getArtistsWithArt(): Promise<
  Array<{ id: string; slug: string; name: string; count: number }>
> {
  const { data, error } = await supabaseServer.rpc('artists_with_art');
  if (error) {
    console.error('Error fetching artists with art:', error);
    return [];
  }
  return ((data ?? []) as Array<{ id: string; slug: string; name: string; count: number | string }>).map((a) => ({
    id: a.id,
    slug: a.slug,
    name: a.name,
    count: typeof a.count === 'string' ? Number(a.count) : a.count,
  }));
}
