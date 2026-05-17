// /api/art/showcase
// ────────────────────────────────────────────────────────────────────────────
// Single JSON payload that powers the iOS Art tab. Mirrors the structure
// of /src/app/art/page.tsx so the iOS and web showcases stay in lockstep —
// SHOWCASE_ROWS here is a verbatim copy of the table in page.tsx. If we
// update one, update both.
//
// Returns:
//   {
//     hero: ArtworkWithArtist | null,
//     featuredArtist: { artist, artworks: ArtworkWithArtist[] } | null,
//     rows: [{ id, title, subtitle, kicker, seeAllArtist, artworks: [...] }]
//   }
//
// 18 artworks per row, cached for an hour via Next ISR.

import { NextResponse } from 'next/server';
import {
  getArtworksBySources,
  getFeaturedHeroArtwork,
  getFeaturedArtistShowcase,
} from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export const revalidate = 3600;

const SHOWCASE_ROWS = [
  {
    id: 'renaissance',
    title: 'Renaissance & Baroque masters',
    subtitle:
      'Caravaggio, Michelangelo, Raphael, Rembrandt, Rubens, Fra Angelico — the painters who shaped Western religious imagery.',
    kicker: 'Style',
    sources: ['caravaggio', 'michelangelo', 'raphael', 'rembrandt', 'rubens', 'fra-angelico', 'giotto', 'duccio'],
    seeAllArtist: null,
  },
  {
    id: 'devotional',
    title: 'Devotional realism',
    subtitle:
      'Nineteenth-century Northern European painters whose intimate images of Christ were copied into Bibles, prayer cards, and church windows worldwide.',
    kicker: 'Style',
    sources: ['bloch', 'hofmann', 'bouguereau', 'plockhorst'],
    seeAllArtist: null,
  },
  {
    id: 'romantic',
    title: 'Romantic & visionary',
    subtitle:
      "William Blake's apocalyptic visions, Edward Hicks's Peaceable Kingdoms, Holman Hunt's Pre-Raphaelite light.",
    kicker: 'Style',
    sources: ['blake', 'gap_fill'],
    seeAllArtist: null,
  },
  {
    id: 'icons',
    title: 'Russian & Byzantine icons',
    subtitle:
      'Andrei Rublev and Theophanes the Greek, plus the marginal psalters that survived the Iconoclast Controversy.',
    kicker: 'Style',
    sources: ['rublev', 'theophanes'],
    seeAllArtist: null,
  },
  {
    id: 'illustrators',
    title: '19th-century Bible illustrators',
    subtitle:
      "Gustave Doré's 241 wood engravings, Schnorr von Carolsfeld's German Picture Bible — the popular illustrated Bibles that shaped modern visual imagination.",
    kicker: 'Style',
    sources: ['dore', 'schnorr'],
    seeAllArtist: null,
  },
  {
    id: 'museums',
    title: 'From the great museums',
    subtitle:
      'Public-domain works from the Metropolitan Museum and Rijksmuseum, including Renaissance Madonnas, Dutch genre scenes, and devotional prints.',
    kicker: 'Source',
    sources: ['met_openaccess', 'rijksmuseum'],
    seeAllArtist: null,
  },
  {
    id: 'caravaggio',
    title: "Caravaggio's chiaroscuro",
    subtitle:
      'Tenebrist drama from the painter who taught the Baroque how to use light. The Calling of Saint Matthew, the Conversion of Saul, the Supper at Emmaus.',
    kicker: 'Artist',
    sources: ['caravaggio'],
    seeAllArtist: 'caravaggio',
  },
  {
    id: 'rembrandt',
    title: "Rembrandt's gospel scenes",
    subtitle:
      "The Return of the Prodigal Son, Christ in the Storm on the Sea of Galilee, Belshazzar's Feast — Rembrandt's tender, light-soaked biblical paintings.",
    kicker: 'Artist',
    sources: ['rembrandt'],
    seeAllArtist: 'rembrandt-van-rijn',
  },
  {
    id: 'dore',
    title: "Doré's Bible engravings",
    subtitle:
      'Two hundred and forty-one wood engravings published in 1866, the most widely reproduced visual Bible of the modern era.',
    kicker: 'Artist',
    sources: ['dore'],
    seeAllArtist: 'gustave-dore',
  },
  {
    id: 'trecento',
    title: 'The Italian Trecento',
    subtitle:
      'Giotto and Duccio at the dawn of Renaissance painting — gold-ground panels that taught Europe how to render sacred figures with weight, gesture, and inner life.',
    kicker: 'Era',
    sources: ['giotto', 'duccio'],
    seeAllArtist: null,
  },
  {
    id: 'madonnas',
    title: 'Madonnas of the Renaissance',
    subtitle:
      'Raphael, Fra Angelico, Bellini, Botticelli — the painters who gave Western Christianity its enduring image of the Virgin and Child.',
    kicker: 'Theme',
    sources: ['raphael', 'fra-angelico', 'bellini', 'botticelli', 'lippi'],
    seeAllArtist: null,
  },
] as const;

// Tissot row is special — `artist=james-tissot` slug + larger pool.
const TISSOT_ROW = {
  id: 'tissot',
  title: 'James Tissot · The Life of Christ',
  subtitle:
    "Three hundred and sixty-five gouache-on-board paintings completed between 1886 and 1894 — Tissot's pilgrimage to the Holy Land turned into a visual gospel.",
  kicker: 'Featured',
  sources: ['tissot'] as string[],
  seeAllArtist: 'james-tissot',
};

function previewFromArtwork(
  a: Awaited<ReturnType<typeof getArtworksBySources>>[number],
) {
  return {
    slug: a.slug,
    title: a.title,
    year: a.year,
    thumbnail_256_url: a.thumbnail_256_url ?? null,
    thumbnail_800_url: a.thumbnail_800_url ?? null,
    artist_name_cached: a.artist?.name ?? null,
    artist_slug: a.artist?.slug ?? null,
  };
}

export async function GET() {
  // Parallelise the lot — each helper is its own Supabase round-trip.
  const [
    hero,
    featuredArtist,
    tissot,
    ...rowData
  ] = await Promise.all([
    getFeaturedHeroArtwork(),
    getFeaturedArtistShowcase(),
    getArtworksBySources(TISSOT_ROW.sources, 18),
    ...SHOWCASE_ROWS.map((r) =>
      getArtworksBySources(r.sources as unknown as string[], 18),
    ),
  ]);

  const tissotPayload = tissot.length > 0
    ? {
        id: TISSOT_ROW.id,
        title: TISSOT_ROW.title,
        subtitle: TISSOT_ROW.subtitle,
        kicker: TISSOT_ROW.kicker,
        seeAllArtist: TISSOT_ROW.seeAllArtist,
        artworks: tissot.map(previewFromArtwork),
      }
    : null;

  const rows = SHOWCASE_ROWS.map((r, i) => ({
    id: r.id,
    title: r.title,
    subtitle: r.subtitle,
    kicker: r.kicker,
    seeAllArtist: r.seeAllArtist,
    artworks: (rowData[i] ?? []).map(previewFromArtwork),
  })).filter((r) => r.artworks.length > 0);

  const allRows = tissotPayload ? [tissotPayload, ...rows] : rows;

  return NextResponse.json({
    hero: hero ? previewFromArtwork(hero) : null,
    featuredArtist: featuredArtist
      ? {
          artist: {
            slug: featuredArtist.artist.slug,
            name: featuredArtist.artist.name,
            bio: featuredArtist.artist.bio,
            years: [
              featuredArtist.artist.birth_year,
              featuredArtist.artist.death_year,
            ]
              .filter((y) => y != null)
              .join('–') || null,
          },
          artworks: featuredArtist.works.map(previewFromArtwork),
        }
      : null,
    rows: allRows,
  });
}
