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

/** Full artist row returned by the artist hub page query — extends the
 *  base Artist with the SEO content columns added in migration 025. */
export interface ArtistFull extends Artist {
  bio_long: string | null;
  bio_sources: ArtistSource[];
  notable_works: ArtistNotableWork[];
  wikidata_id: string | null;
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
      artist:artists ( id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url )
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

/** Cursor for keyset pagination. Stable across re-renders, URL-safe. */
export interface ArtCursor {
  ts: string; // ISO timestamp of the last seen row's created_at
  id: string; // uuid of the last seen row
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

/** Encode/decode cursor for URL safety. */
export function encodeCursor(c: ArtCursor | null): string {
  if (!c) return '';
  return Buffer.from(`${c.ts}|${c.id}`, 'utf8').toString('base64url');
}
export function decodeCursor(s: string | null | undefined): ArtCursor | null {
  if (!s) return null;
  try {
    const decoded = Buffer.from(s, 'base64url').toString('utf8');
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
    sort = 'recent',
    limit = 48,
    cursor,
    offset = 0,
  } = filters;

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
  const hasMore = artworks.length === args.page_size && total > artworks.length;
  const nextCursor: ArtCursor | null =
    hasMore && last && last.created_at ? { ts: String(last.created_at), id: last.id } : null;

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
    .select('id, slug, name, birth_year, death_year, nationality, bio, wikipedia_url, bio_long, bio_sources, notable_works, wikidata_id')
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
