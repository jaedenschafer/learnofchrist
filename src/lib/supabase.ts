import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client for browser-side queries (respects RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client for build-time queries (also uses anon key since content is public)
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey);

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

/** Fetch all active translations */
export async function getTranslations(): Promise<Translation[]> {
  const { data, error } = await supabaseServer
    .from('translations')
    .select('*')
    .eq('is_active', true)
    .order('abbreviation');

  if (error) {
    console.error('Error fetching translations:', error);
    return [];
  }
  return data || [];
}

/** Fetch verses for a specific book + chapter + translation */
export async function getVerses(
  bookSlug: string,
  chapter: number,
  translationAbbr: string = 'kjv'
): Promise<Verse[]> {
  // First get translation ID
  const { data: translation } = await supabaseServer
    .from('translations')
    .select('id')
    .eq('abbreviation', translationAbbr)
    .single();

  if (!translation) return [];

  // Then get the book ID from slug
  const { data: book } = await supabaseServer
    .from('books')
    .select('id')
    .eq('slug', bookSlug)
    .single();

  if (!book) return [];

  const { data: verses, error } = await supabaseServer
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

  return (verses || []).map(v => ({
    ...v,
    book_slug: bookSlug,
  }));
}

/** Fetch verses for client-side translation switching (by translation abbreviation) */
export async function fetchVersesClient(
  bookSlug: string,
  chapter: number,
  translationAbbr: string
): Promise<Verse[]> {
  // Get translation ID
  const { data: translation } = await supabase
    .from('translations')
    .select('id')
    .eq('abbreviation', translationAbbr)
    .single();

  if (!translation) return [];

  // Get book ID
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('slug', bookSlug)
    .single();

  if (!book) return [];

  const { data: verses, error } = await supabase
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

  return (verses || []).map(v => ({
    ...v,
    book_slug: bookSlug,
  }));
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
