import { createClient } from '@supabase/supabase-js';
const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);
const filename = "Brooklyn Museum - The Return of the Prodigal Son (Le retour de l'enfant prodigue) - James Tissot.jpg";
const image_url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
const thumbnail_url = `${image_url}?width=800`;
const source_url = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
const { error } = await sb.from('artworks').update({ image_url, thumbnail_url, source_url }).eq('slug', 'tissot-prodigal');
console.log(error?.message || 'updated tissot-prodigal');
console.log('image_url:', image_url);
