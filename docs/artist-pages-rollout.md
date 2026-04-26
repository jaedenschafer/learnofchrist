# Artist pages — rollout

This file tracks the artist-hub strategy we shipped at the end of April 2026
and explains exactly how to take it live. The route and JSON-LD are already
on `main`; the bios live in five migration files that need to be applied
against Supabase in order.

## What landed in code (already on `main`)

| File | Purpose |
| --- | --- |
| `supabase/migrations/025_artist_bio_seo_columns.sql` | Adds `bio_long`, `bio_sources` (jsonb), `notable_works` (jsonb), `wikidata_id` to `public.artists`. Includes `CHECK (wikidata_id ~ '^Q[0-9]+$')` and an index on `(bio_long is not null)`. |
| `supabase/migrations/026_artist_bio_seed.sql` | Phase 2 bios for Caravaggio, Michelangelo, Rembrandt, Tissot, Doré, Rubens, Raphael, Schnorr, Fra Angelico, Bouguereau (10). |
| `supabase/migrations/027_artist_bio_seed_phase3.sql` | Phase 3 bios for Bloch, Hofmann, Plockhorst, Rublev, Theophanes (5). |
| `supabase/migrations/030_artist_bio_seed_phase6.sql` | Phase 6 bios for Bruegel, Bosch, Cranach, Dürer, El Greco, Poussin, Delacroix, Teichert (8). |
| `supabase/migrations/031_artist_bio_seed_phase7.sql` | Phase 7 bios for van Eyck, van der Weyden, Memling, van der Goes, Holbein, Patinir, Friberg, Anderson (8). |
| `src/app/art/artist/[slug]/page.tsx` | Server-rendered artist hub. Renders hero + facts + Life + Bible scenes + Notable works (when populated) + All works grid + FAQ + Further reading. Emits `Person`, `BreadcrumbList`, and `FAQPage` JSON-LD. `noindex` until `bio_long` clears 200 chars. |
| `src/app/art/artist/[slug]/artist.css` | Editorial styles for the hub. |
| `src/app/art/artists/page.tsx` | Hub-of-hubs directory of every artist with at least one approved work. `ItemList` + `BreadcrumbList` JSON-LD. |
| `src/app/art/artists/artists.css` | Directory styles. |
| `src/lib/supabase.ts` | Adds `ArtistFull`, `ArtistSource`, `ArtistNotableWork` types and `getArtistBySlug`, `getAllArtistSlugs`, `getArtworksByArtist`, `getArtistsDirectory` helpers. |
| `src/app/sitemap.ts` | New `art` shard. Async dispatcher emits `/art`, `/art/artists`, every Bible-book art index, every approved artist, every approved artwork. |
| `src/components/InlineArtwork.tsx` | Artist line links to `/art/artist/[slug]`. |
| `src/app/art/artwork/[slug]/page.tsx` | Hero kicker + About-the-artist card link to the new hub. |

## Apply the migrations

Order is mandatory — `026`, `027`, `030`, and `031` all depend on the four
columns added by `025`.

```
025  →  026  →  027  →  030  →  031
```

The Supabase SQL editor is the simplest path. Each migration is idempotent
in two ways: column-creation uses `add column if not exists`, and every
content `update … set bio_long = …` clause matches by `name ILIKE` patterns
that no-op silently when no row matches.

## Verify after applying

```sql
-- Count artists with bios long enough to flip the page out of noindex.
select count(*) from public.artists
 where length(coalesce(bio_long, '')) >= 200;

-- Spot-check that the prose landed where you'd expect.
select slug, name, length(bio_long) as bio_chars
  from public.artists
 where length(coalesce(bio_long, '')) >= 200
 order by name;
```

Expected after all five migrations apply: roughly **31 rows** with
`bio_chars` between ~1500 and ~3500 (anchor artists from phases 2/3/6/7).
The row count is "roughly" because the `name ILIKE` patterns may match
zero, one, or several rows depending on the exact slug formatting your
bulk-ingest commits used.

If any anchor artist you expect to see doesn't show up, run

```sql
select slug, name from public.artists order by name;
```

and tell me the canonical name we have for them — I'll write a corrective
`UPDATE` clause.

## Verify on the live site

After Vercel rebuilds (`/art/artist/[slug]` is ISR-cached for 24 hours; you
can force regen by hitting the URL once), confirm:

1. **`/art/artist/caravaggio` loads** — hero shows lifespan + nationality +
   work count, the bio reads as paragraphs, the FAQ is present at the
   bottom, the Bible-scenes section lists every chapter Caravaggio's
   approved work depicts.
2. **View source — `<meta name="robots">` is missing** (i.e. the page is
   indexable). It should NOT be `noindex`. If you see `noindex`, the bio
   in that row didn't make it past 200 chars.
3. **`/art/artists` lists every artist** sorted bio-ready first, with a
   blue "biography" flag next to the bio'd ones.
4. **Sitemap** at `/sitemap/art.xml` includes one URL per artist + every
   approved artwork. Submit it to Search Console under "Sitemaps."

## What's intentionally not yet done

- **`notable_works`** — per-artwork curated paragraphs. These need verified
  artwork slugs from the live DB, so I left them empty. Send me a slug list
  for one artist at a time and I'll draft 3–4 paragraphs per work.
- **`wikidata_id`** — left null. The `CHECK` rejects format errors silently
  and pointing `sameAs` at the wrong Wikidata entity is worse than a missing
  link. Best done from a verified list (a small admin script that hits
  Wikidata's `wbsearchentities` API and writes results out as SQL is the
  cleanest path; I can write it on request).
- **Phase 8+** — more bios for whichever artists you have in the DB that
  these five migrations missed. Run the verify-query above and paste me
  the names that come back empty.

## Search Console — one-time post-migration ops

After the deploy goes live and you've confirmed at least a few artist URLs
return 200 with no `noindex`:

1. Open Search Console → **URL Inspection** → paste in
   `https://learnofchrist.com/art/artist/caravaggio`.
2. Click **Request Indexing**. Repeat for two or three other anchor
   artists (Michelangelo, Rembrandt, Tissot are good first picks because
   they have the broadest English-language search demand).
3. Submit `/sitemap/art.xml` if it isn't already on the Sitemaps page.

The artist directory at `/art/artists` is the single best internal-link
seed — if you can include a link to it from the homepage hero or from the
top nav, every individual artist page benefits. The current `/art` root
already links to it via the "Browse by artist →" pill.
