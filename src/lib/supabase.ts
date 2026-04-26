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
  width: number | null;
  height: number | null;
  license: string;
  license_note: string | null;
  description: string | null;
  status: string;
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
 * Fetch all published artworks for a book + chapter, ordered with primary
 * references first so "the main art for this passage" surfaces at the top.
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
        external_id, image_url, thumbnail_url, width, height,
        license, license_note, description, status,
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
  return out;
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
        external_id, image_url, thumbnail_url, width, height,
        license, license_note, description, status,
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

export type ArtSort = 'recent' | 'oldest' | 'az' | 'za' | 'year_asc' | 'year_desc';

export interface ArtFilterParams {
  q?: string;
  book?: string;   // book slug
  artist?: string; // artist slug
  source?: string; // source enum value
  sort?: ArtSort;
  limit?: number;
  offset?: number;
}

export interface ArtBrowseResult {
  artworks: ArtworkWithArtist[];
  total: number;
}

/**
 * Filtered list of approved, published artworks with total count.
 * Used by /art (filters + search bar).
 */
export async function getFilteredArtworks(
  filters: ArtFilterParams = {},
): Promise<ArtBrowseResult> {
  const { q, book, artist, source, sort = 'recent', limit = 48, offset = 0 } = filters;

  // Resolve book slug → artwork_ids that reference this book.
  let artworkIdsFromBook: string[] | null = null;
  if (book) {
    const { data: bookRow } = await supabaseServer
      .from('books')
      .select('id')
      .eq('slug', book)
      .maybeSingle();
    if (!bookRow) return { artworks: [], total: 0 };

    const { data: refs } = await supabaseServer
      .from('artwork_scripture_refs')
      .select('artwork_id')
      .eq('book_id', bookRow.id);
    artworkIdsFromBook = Array.from(new Set((refs || []).map((r: { artwork_id: string }) => r.artwork_id)));
    if (artworkIdsFromBook.length === 0) return { artworks: [], total: 0 };
  }

  // Resolve artist slug → artist_id.
  let artistId: string | null = null;
  if (artist) {
    const { data: artistRow } = await supabaseServer
      .from('artists')
      .select('id')
      .eq('slug', artist)
      .maybeSingle();
    if (!artistRow) return { artworks: [], total: 0 };
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
  if (source) query = query.eq('source', source);
  if (q && q.trim()) {
    // ilike on title (case-insensitive contains). Cheap and good-enough for ~1k rows.
    const pattern = `%${q.trim().replace(/[%_]/g, (m) => '\\' + m)}%`;
    query = query.ilike('title', pattern);
  }

  switch (sort) {
    case 'oldest':
      query = query.order('created_at', { ascending: true });
      break;
    case 'az':
      query = query.order('title', { ascending: true });
      break;
    case 'za':
      query = query.order('title', { ascending: false });
      break;
    case 'year_asc':
      query = query.order('year', { ascending: true, nullsFirst: false });
      break;
    case 'year_desc':
      query = query.order('year', { ascending: false, nullsFirst: false });
      break;
    case 'recent':
    default:
      query = query.order('created_at', { ascending: false });
      break;
  }

  query = query.range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) {
    console.error('Error fetching filtered artworks:', error);
    return { artworks: [], total: 0 };
  }

  type RawArtwork = Artwork & { artist: Artist | Artist[] | null };
  const artworks = ((data ?? []) as RawArtwork[]).map((a) => ({
    ...a,
    artist: unwrap(a.artist),
  }));
  return { artworks, total: count ?? artworks.length };
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
