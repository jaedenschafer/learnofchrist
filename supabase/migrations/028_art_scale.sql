-- ============================================================
-- Migration 028 — Art library at scale
-- ============================================================
-- Prepares the artworks table for thousands of new images:
--   • Pre-generated thumbnail URLs (256px + 800px WebP)
--   • dominant_color for blurDataURL placeholders
--   • Faceted metadata: era, biblical_character[], biblical_theme[], tags[]
--   • Denormalized scripture_ref_count for fast popularity sort
--   • Generated tsvector search_text covering title + description + artist + medium
--   • Indexes for every new sort/filter/search dimension
--   • Trigger to keep scripture_ref_count current on artwork_scripture_refs change
--
-- Idempotent: every ADD/CREATE uses IF NOT EXISTS guards so re-running is safe.
-- ============================================================

-- pg_trgm powers the typeahead fuzzy-match in /api/art/search.
create extension if not exists pg_trgm;

-- ─── 1. New columns on artworks ─────────────────────────────────────────

alter table public.artworks
  add column if not exists thumbnail_256_url text,
  add column if not exists thumbnail_800_url text,
  add column if not exists dominant_color    text,         -- hex, e.g. '#3a2b1f'
  add column if not exists era               text,         -- 'early-christian' | 'byzantine' | 'medieval' | 'renaissance' | 'baroque' | 'modern' | 'contemporary'
  add column if not exists biblical_character text[] not null default '{}',
  add column if not exists biblical_theme    text[] not null default '{}',
  add column if not exists tags              text[] not null default '{}',
  add column if not exists scripture_ref_count int not null default 0;

-- artist_name is denormalized into artworks for FTS weighting.
alter table public.artworks
  add column if not exists artist_name_cached text;

-- Backfill artist_name_cached for existing rows.
update public.artworks a
   set artist_name_cached = ar.name
  from public.artists ar
 where a.artist_id = ar.id
   and (a.artist_name_cached is null or a.artist_name_cached <> ar.name);

-- search_text is a regular tsvector column maintained by a BEFORE trigger.
-- (Can't use a generated column: to_tsvector('english', ...) is STABLE
-- not IMMUTABLE — Postgres rejects it as a generation expression.)
alter table public.artworks
  add column if not exists search_text tsvector;

create or replace function public.artworks_set_search_text()
returns trigger language plpgsql as $$
begin
  new.search_text :=
    setweight(to_tsvector('english', coalesce(new.title,             '')), 'A') ||
    setweight(to_tsvector('english', coalesce(new.artist_name_cached,'')), 'B') ||
    setweight(to_tsvector('english', coalesce(new.description,       '')), 'C') ||
    setweight(to_tsvector('english', coalesce(new.medium,            '')), 'D') ||
    setweight(to_tsvector('english',
      coalesce(array_to_string(new.biblical_character, ' '), '') || ' ' ||
      coalesce(array_to_string(new.biblical_theme,     ' '), '') || ' ' ||
      coalesce(array_to_string(new.tags,               ' '), '')
    ), 'C');
  return new;
end;
$$;

drop trigger if exists trg_artworks_search_text on public.artworks;
create trigger trg_artworks_search_text
  before insert or update of title, artist_name_cached, description, medium,
                              biblical_character, biblical_theme, tags
  on public.artworks
  for each row execute function public.artworks_set_search_text();

-- Initial backfill of search_text for existing rows. Touch every row so the
-- trigger fires; the WHERE-clause prevents touching rows already populated
-- on a re-run.
update public.artworks
   set title = title
 where search_text is null;

-- ─── 2. Indexes for sort, filter, search, pagination ────────────────────

-- Cursor pagination: keyset on (created_at desc, id desc).
create index if not exists idx_artworks_created_at_id
  on public.artworks (created_at desc, id desc);

-- Sort by year (artwork year) — used for chronological browse.
create index if not exists idx_artworks_year
  on public.artworks (year);

-- Sort by title (A-Z / Z-A).
create index if not exists idx_artworks_title
  on public.artworks (title);

-- Sort by popularity / most-referenced.
create index if not exists idx_artworks_ref_count
  on public.artworks (scripture_ref_count desc);

-- Filter by era.
create index if not exists idx_artworks_era
  on public.artworks (era);

-- Array contains — biblical_character, biblical_theme, tags.
create index if not exists idx_artworks_character_gin
  on public.artworks using gin (biblical_character);
create index if not exists idx_artworks_theme_gin
  on public.artworks using gin (biblical_theme);
create index if not exists idx_artworks_tags_gin
  on public.artworks using gin (tags);

-- Full-text search.
create index if not exists idx_artworks_search_text_gin
  on public.artworks using gin (search_text);

-- Trigram fuzzy match on title for typeahead.
create index if not exists idx_artworks_title_trgm
  on public.artworks using gin (title gin_trgm_ops);

-- Trigram fuzzy match on artist names for typeahead.
create index if not exists idx_artists_name_trgm
  on public.artists using gin (name gin_trgm_ops);

-- ─── 3. Triggers ────────────────────────────────────────────────────────

-- Keep scripture_ref_count denormalized & current.
create or replace function public.update_artwork_ref_count()
returns trigger language plpgsql as $$
declare
  target_id uuid;
begin
  target_id := coalesce(new.artwork_id, old.artwork_id);
  update public.artworks
     set scripture_ref_count = (
       select count(*) from public.artwork_scripture_refs
        where artwork_id = target_id
     )
   where id = target_id;
  return null;
end;
$$;

drop trigger if exists trg_artwork_ref_count on public.artwork_scripture_refs;
create trigger trg_artwork_ref_count
  after insert or delete on public.artwork_scripture_refs
  for each row execute function public.update_artwork_ref_count();

-- Initial backfill of scripture_ref_count for existing artworks.
update public.artworks a
   set scripture_ref_count = sub.cnt
  from (
    select artwork_id, count(*) as cnt
      from public.artwork_scripture_refs
     group by artwork_id
  ) sub
 where a.id = sub.artwork_id
   and a.scripture_ref_count is distinct from sub.cnt;

-- Keep artist_name_cached in sync when an artist row is renamed.
create or replace function public.sync_artwork_artist_name()
returns trigger language plpgsql as $$
begin
  if (tg_op = 'UPDATE' and new.name is distinct from old.name) then
    update public.artworks
       set artist_name_cached = new.name
     where artist_id = new.id;
  end if;
  return null;
end;
$$;

drop trigger if exists trg_artist_name_sync on public.artists;
create trigger trg_artist_name_sync
  after update on public.artists
  for each row execute function public.sync_artwork_artist_name();

-- And keep artist_name_cached fresh when an artwork's artist_id changes.
create or replace function public.set_artwork_artist_name_cached()
returns trigger language plpgsql as $$
begin
  if new.artist_id is null then
    new.artist_name_cached := null;
  else
    select name into new.artist_name_cached
      from public.artists where id = new.artist_id;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_artwork_artist_name_cached on public.artworks;
create trigger trg_artwork_artist_name_cached
  before insert or update of artist_id on public.artworks
  for each row execute function public.set_artwork_artist_name_cached();

-- ─── 4. Era helper view (for backfill scripts) ──────────────────────────

-- Note: era values are populated by scripts/backfill-metadata.mjs based on
-- artwork.year. The convention used by the UI:
--   year < 500       → 'early-christian'
--   500 ≤ year < 1300 → 'byzantine' (also covers Romanesque)
--   1300 ≤ year < 1500 → 'medieval'   (Gothic / late medieval)
--   1500 ≤ year < 1600 → 'renaissance'
--   1600 ≤ year < 1750 → 'baroque'
--   1750 ≤ year < 1900 → 'modern'
--   year ≥ 1900       → 'contemporary'

-- ─── 5. Storage bucket reminder ─────────────────────────────────────────

-- The thumbnail URLs above point at a Supabase Storage bucket named
-- 'art-thumbs'. Create it once with public read:
--   • Storage → New bucket → name "art-thumbs", public.
--   • Backfill script will populate it.
