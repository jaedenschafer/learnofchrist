# Art Scaling Rollout — Phase 1

This is the apply-and-verify checklist for the Phase-1 changes that ship in
this branch. Everything is backwards-compatible: if you only deploy the code
without applying the SQL, the site keeps working via the legacy offset
fallback in `getFilteredArtworks`.

## What's in this phase

| Concern | New file(s) |
|---|---|
| Schema | `supabase/migrations/028_art_scale.sql` |
| Search/cursor RPC | `supabase/migrations/029_art_search_rpc.sql` |
| Per-source image loaders | `src/lib/imageLoaders.ts` |
| Faceted tag taxonomy | `src/lib/biblicalTags.ts` |
| Refactored data layer | `src/lib/supabase.ts` (RPC + cursor + typeahead) |
| ArtCard with `next/image` | `src/components/ArtCard.tsx` |
| Multi-select facet UI | `src/components/ArtFilters.tsx` |
| Cursor-based /art page | `src/app/art/page.tsx` |
| Typeahead API | `src/app/api/art/search/route.ts` |
| Thumbnail backfill | `scripts/backfill-thumbnails.mjs` |
| Metadata backfill | `scripts/backfill-metadata.mjs` |
| Generalized ingester | `scripts/lib/artwork-ingester.mjs` |
| Bulk Wikimedia ingester | `scripts/ingest-wikimedia-category.mjs` |

`next.config.ts` was extended with `images.remotePatterns` so the new
`next/image` calls accept Wikimedia, Met, micr.io, and Supabase Storage hosts.

## Rollout order (one sitting)

### 1. Apply SQL migrations

In the Supabase SQL editor, paste and run in order:

1. `supabase/migrations/028_art_scale.sql`
2. `supabase/migrations/029_art_search_rpc.sql`

028 is idempotent (`add column if not exists`, `create index if not exists`, etc.).
029 drops and re-creates its two functions, also idempotent.

Spot-check after running 028:

```sql
select count(*) from artworks where scripture_ref_count > 0;       -- > 0 expected
select count(*) from artworks where artist_name_cached is not null; -- ~ all rows with an artist
\d+ artworks                                                        -- new columns visible
```

### 2. Create the Storage bucket

In Supabase Dashboard → Storage → New bucket:

- Name: `art-thumbs`
- Public: yes (read access)

Leave row-level security off — these are public-domain thumbnails the site needs to read anonymously.

### 3. Deploy the code

Push the branch. The /art page will continue to render via the legacy
fallback inside `getFilteredArtworks` until the RPC is available, but once
029 is applied it switches to the RPC automatically with no further action.

The first /art request will paint without thumbnails — you'll see the
neutral fallback color (the dominant-color SVG placeholder is still applied,
just from the fallback gray, not per-image). That's expected until step 4.

### 4. Backfill thumbnails

```bash
cd learnofchrist-project
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-thumbnails.mjs --dry-run
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-thumbnails.mjs
```

For ~500 existing approved rows this runs in ~5–10 minutes. The script:

- Skips rows that already have `thumbnail_256_url` (use `--force` to reprocess)
- Logs failures to `scripts/.failures/thumbs-<run-id>.jsonl`
- Uploads to `art-thumbs/<artwork_slug>/256.webp` and `…/800.webp`
- Sets `dominant_color` from the 256 thumb's average pixel
- Sets `width` / `height` from Sharp metadata

Re-run the script with the failure log if anything failed.

### 5. Backfill metadata (era / character / theme)

```bash
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-metadata.mjs --dry-run
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-metadata.mjs
```

Conservative — only tags rows where the title (or description) hits an
explicit alias from `biblicalTags.ts` / the script's mirror list. Misses are
fine; you can re-run after curating the alias list.

### 6. Verify

Visit `/art`:

- Thumbnails visibly load (smaller than before — should drop ~70% in payload)
- Era + Scene chip rows appear under the existing dropdowns
- Picking a chip narrows the grid; URL gains `?era=…` / `?theme=…`
- "Show more" works without scrolling jank
- A search like "crucifixion" returns relevance-ordered results

Endpoint smoke test:

```bash
curl -s 'http://localhost:3000/api/art/search?q=resurrection&limit=8' | jq
```

### 7. Bulk-import the new images

For each big batch you're loading:

```bash
SUPABASE_SERVICE_ROLE_KEY=… node scripts/ingest-wikimedia-category.mjs \
  --category "Paintings of the Crucifixion of Jesus Christ" \
  --artist-slug unknown --artist-name "Unknown" \
  --refs-from john:19 \
  --batch 50 --limit 200 --dry-run

SUPABASE_SERVICE_ROLE_KEY=… node scripts/ingest-wikimedia-category.mjs \
  --category "Paintings of the Crucifixion of Jesus Christ" \
  --artist-slug unknown --artist-name "Unknown" \
  --refs-from john:19 \
  --batch 50
```

The new rows land at `moderation_status='pending'`. Approve them in
`/admin/artwork-moderation`. After approval, run thumbnail + metadata
backfills again to fill in their thumbs and tags:

```bash
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-thumbnails.mjs
SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-metadata.mjs
```

## Rollback plan

The schema and code are decoupled enough that you can roll back either side:

- **Code rollback**: previous `/art` page worked off a flat offset query and
  `<img>` tags — the new schema columns just sit unused.
- **Schema rollback**: run `drop function if exists search_artworks(...)` and
  `drop function if exists art_typeahead(...)` to disable the RPC. The
  `getFilteredArtworks` fallback path will take over automatically.
- The new columns can be left in place indefinitely — they cost nothing
  while NULL.

## Known follow-ups (Phase 2+)

These are deferred from the original plan and don't block the Phase-1 ship:

- Detail page hero swap (800 → original on `requestIdleCallback`)
- "Related artworks" rail on the detail page
- Scripture-ref pagination on the detail page when 50+ refs
- Migrate existing per-artist ingesters (`ingest-blake.mjs` etc.) to the
  `ArtworkIngester` base class — they all still work as-is
- Disable trigger during very large bulk-loads (>10k refs) and replace with
  a one-shot `update artworks set scripture_ref_count = …` — only needed
  for unusually big batches
