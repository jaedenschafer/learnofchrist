-- Artist SEO + content columns.
-- Adds the fields the new /art/artist/[slug] hub pages will read from:
--   - bio_long       : the long, original-prose biography body. Plain text
--                      paragraphs separated by blank lines. Empty until a
--                      bio is written; the page renders with noindex when
--                      this is empty.
--   - bio_sources    : citation list — JSONB array of { title, url, type }.
--                      type ∈ ("wikipedia" | "britannica" | "museum" |
--                      "scholarly" | "other"). Used to build the Further
--                      Reading section AND to emit `sameAs` URIs on the
--                      Person JSON-LD.
--   - notable_works  : JSONB array of { artwork_slug, paragraph } for the
--                      "Notable works in detail" section. paragraph is
--                      original prose written by us.
--   - wikidata_id    : the Q-number (e.g. "Q5598" for Caravaggio). Drives
--                      sameAs links on the Person schema and lets us pull
--                      structured facts from Wikidata later.
--
-- All columns are nullable + JSON defaults so existing rows continue to
-- read fine. No backfill in this migration — content is added per artist
-- via /admin tooling and bio writeups.

alter table public.artists
  add column if not exists bio_long      text                  null,
  add column if not exists bio_sources   jsonb        not null default '[]'::jsonb,
  add column if not exists notable_works jsonb        not null default '[]'::jsonb,
  add column if not exists wikidata_id   text                  null;

-- Tiny check to keep the slug case sane when admins type wikidata IDs by
-- hand. Q-numbers are uppercase Q + digits.
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'artists_wikidata_id_format'
  ) then
    alter table public.artists
      add constraint artists_wikidata_id_format
      check (wikidata_id is null or wikidata_id ~ '^Q[0-9]+$');
  end if;
end $$;

-- Helpful index for the "list every artist who has at least one published
-- artwork AND has a bio long enough to be worth indexing" sitemap query.
create index if not exists artists_bio_long_idx
  on public.artists ((bio_long is not null));
