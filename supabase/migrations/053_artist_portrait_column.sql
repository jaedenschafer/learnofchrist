-- Artist hub portraits — schema upgrade path.
--
-- During the initial rollout, portraits were stored in `bio_sources` as
-- jsonb entries with `type = 'portrait'`. That works without ALTER TABLE
-- (writeable through PostgREST + service role) but mixes presentation
-- assets with citations. This migration promotes the portrait URL to a
-- first-class column and migrates existing JSON rows over.
--
-- Apply once via Supabase SQL editor; the script
-- (scripts/backfill-artist-portraits.mjs) then prefers `portrait_url`
-- when writing.

alter table public.artists
  add column if not exists portrait_url text null;

comment on column public.artists.portrait_url is
  'Lead image URL pulled from the artist''s Wikipedia summary. Backfilled by scripts/backfill-artist-portraits.mjs. Null when no portrait is available.';

-- Migrate any existing JSON-side portrait entries into the new column.
update public.artists a
   set portrait_url = coalesce(a.portrait_url, sub.url)
  from (
    select id, (jsonb_path_query_first(bio_sources, '$[*] ? (@.type == "portrait")')->>'url') as url
      from public.artists
     where bio_sources @> '[{"type":"portrait"}]'::jsonb
  ) sub
 where a.id = sub.id
   and sub.url is not null
   and a.portrait_url is null;

-- Strip the now-redundant portrait entry out of bio_sources so the
-- Further reading list doesn't try to render it.
update public.artists
   set bio_sources = (
     select coalesce(jsonb_agg(elem), '[]'::jsonb)
       from jsonb_array_elements(bio_sources) elem
      where (elem->>'type') is distinct from 'portrait'
   )
 where bio_sources @> '[{"type":"portrait"}]'::jsonb;
