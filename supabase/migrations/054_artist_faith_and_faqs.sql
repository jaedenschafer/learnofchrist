-- Artist hub — faith-focused narrative + curated FAQs.
--
-- The previous bios on /art/artist/[slug] read like Wikipedia summaries:
-- training, patrons, style, death. Useful, but Google has no reason to
-- rank our page over Wikipedia or Britannica when the content overlaps.
--
-- The audience is overwhelmingly Christians who saw a painting and want
-- to know *why* the artist painted Christ. This migration adds two
-- columns that capture that lens, both populated in a one-time backfill
-- by scripts/backfill-artist-faith.mjs (LLM, gpt-4o-mini).
--
--   faith_story   — A 250-400 word narrative answering "what was their
--                   relationship with Christ and why did they paint
--                   Christian art?" Rendered in a "Their faith" section
--                   above the bio. Drives meta description when present.
--
--   faqs          — Curated FAQ list as a jsonb array of
--                   { question, answer } objects. Replaces the
--                   auto-generated "How many works..." prompts that
--                   matched no real "People Also Ask" patterns. Phrased
--                   to mirror what Google surfaces in PAA panels for
--                   the artist's name + Christianity / Bible queries.
--
-- Plus a uniqueness constraint on wikidata_id so future ingestion can't
-- regenerate the duplicate-artist clusters we just dedup'd in 052/053.

alter table public.artists
  add column if not exists faith_story text null,
  add column if not exists faqs        jsonb not null default '[]'::jsonb;

comment on column public.artists.faith_story is
  'Faith-focused narrative — what was the artist''s relationship with Christ and why did they paint Christian art? Rendered in the "Their faith" section above the bio. Backfilled by scripts/backfill-artist-faith.mjs.';

comment on column public.artists.faqs is
  'Curated FAQ list — array of { question, answer } objects. Phrased to mirror Google "People Also Ask" patterns for the artist + Christianity searches. Replaces the auto-generated prompts that previously fed the FAQPage JSON-LD.';

-- A unique index on wikidata_id was attempted here but rejected:
-- attribution variants like "Lucas Cranach the Elder and Workshop"
-- legitimately share Q-IDs with the principal artist. Re-running
-- scripts/dedupe-artists.mjs periodically is a safer guardrail than
-- a constraint that breaks legitimate workshop attribution.
