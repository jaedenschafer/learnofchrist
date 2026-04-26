-- ============================================================
-- Migration 029 — Art search RPC + typeahead RPC
-- ============================================================
-- Two server-side functions that the /art page and /api/art/search use:
--
--   search_artworks(...)    cursor-paginated, faceted, FTS-aware list
--                           of approved+published artworks. Single round
--                           trip; predictable plan via EXPLAIN ANALYZE.
--
--   art_typeahead(q, limit) top fuzzy-matched artworks AND artists for
--                           a query string — drives the search-box dropdown.
--
-- Both use the indexes added in migration 028.
-- ============================================================

-- ─── Cursor-paginated faceted search ────────────────────────────────────

drop function if exists public.search_artworks(
  text, text[], text[], text[], text[], text[],
  timestamptz, uuid, int, text
);

create or replace function public.search_artworks(
  q              text       default null,
  filter_era     text[]     default null,   -- match if era = any
  filter_books   text[]     default null,   -- book slugs
  filter_artists text[]     default null,   -- artist slugs
  filter_chars   text[]     default null,   -- biblical_character overlap
  filter_themes  text[]     default null,   -- biblical_theme overlap
  cursor_ts      timestamptz default null,
  cursor_id      uuid        default null,
  page_size      int         default 48,
  sort_by        text        default 'recent'
)
returns table (
  id              uuid,
  slug            text,
  title           text,
  artist_id       uuid,
  artist_slug     text,
  artist_name     text,
  year            int,
  medium          text,
  source          text,
  source_url      text,
  external_id     text,
  image_url       text,
  thumbnail_url   text,
  thumbnail_256_url text,
  thumbnail_800_url text,
  dominant_color  text,
  width           int,
  height          int,
  license         text,
  license_note    text,
  description     text,
  era             text,
  scripture_ref_count int,
  created_at      timestamptz,
  total_count     bigint,
  rank            real
)
language plpgsql
stable
as $$
declare
  book_artwork_ids   uuid[];
  artist_ids         uuid[];
  ts_query           tsquery;
begin
  -- Translate book slugs → artwork_ids that reference them.
  if filter_books is not null and array_length(filter_books, 1) > 0 then
    select array_agg(distinct r.artwork_id) into book_artwork_ids
      from public.artwork_scripture_refs r
      join public.books b on b.id = r.book_id
     where b.slug = any (filter_books);
    if book_artwork_ids is null then
      book_artwork_ids := array[]::uuid[];
    end if;
  end if;

  -- Translate artist slugs → artist_ids.
  if filter_artists is not null and array_length(filter_artists, 1) > 0 then
    select array_agg(id) into artist_ids
      from public.artists where slug = any (filter_artists);
    if artist_ids is null then
      artist_ids := array[]::uuid[];
    end if;
  end if;

  -- Build the FTS query. websearch_to_tsquery handles "phrase" and -negation.
  if q is not null and length(trim(q)) > 0 then
    ts_query := websearch_to_tsquery('english', q);
  else
    ts_query := null;
  end if;

  return query
  with base as (
    select
      a.*,
      ar.slug as artist_slug,
      ar.name as artist_name,
      case when ts_query is null then 0::real
           else ts_rank(a.search_text, ts_query) end as rank
    from public.artworks a
    left join public.artists ar on ar.id = a.artist_id
   where a.status = 'published'
     and a.moderation_status = 'approved'
     and (ts_query is null or a.search_text @@ ts_query)
     and (filter_era    is null or a.era = any (filter_era))
     and (book_artwork_ids is null or a.id = any (book_artwork_ids))
     and (artist_ids    is null or a.artist_id = any (artist_ids))
     and (filter_chars  is null or a.biblical_character && filter_chars)
     and (filter_themes is null or a.biblical_theme    && filter_themes)
  ),
  counted as (
    select count(*) over () as total_count, b.* from base b
  )
  select
    c.id, c.slug, c.title, c.artist_id, c.artist_slug, c.artist_name,
    c.year, c.medium, c.source::text, c.source_url, c.external_id,
    c.image_url, c.thumbnail_url, c.thumbnail_256_url, c.thumbnail_800_url,
    c.dominant_color, c.width, c.height, c.license::text, c.license_note,
    c.description, c.era, c.scripture_ref_count, c.created_at,
    c.total_count, c.rank
    from counted c
   where
     -- Cursor: only kicks in when cursor_ts is provided.
     case sort_by
       when 'recent'   then cursor_ts is null or (c.created_at, c.id) < (cursor_ts, cursor_id)
       when 'oldest'   then cursor_ts is null or (c.created_at, c.id) > (cursor_ts, cursor_id)
       else true
     end
   order by
     case when sort_by = 'relevance' and ts_query is not null then c.rank end desc nulls last,
     case when sort_by = 'recent'    then c.created_at end desc nulls last,
     case when sort_by = 'oldest'    then c.created_at end asc  nulls last,
     case when sort_by = 'az'        then c.title      end asc  nulls last,
     case when sort_by = 'za'        then c.title      end desc nulls last,
     case when sort_by = 'year_asc'  then c.year       end asc  nulls last,
     case when sort_by = 'year_desc' then c.year       end desc nulls last,
     case when sort_by = 'popular'   then c.scripture_ref_count end desc nulls last,
     -- Always tiebreak on id for deterministic ordering / stable cursors.
     c.id desc
   limit greatest(1, least(page_size, 200));
end;
$$;

grant execute on function public.search_artworks(
  text, text[], text[], text[], text[], text[],
  timestamptz, uuid, int, text
) to anon, authenticated;

-- ─── Typeahead for the /api/art/search dropdown ─────────────────────────

drop function if exists public.art_typeahead(text, int);

create or replace function public.art_typeahead(
  q          text,
  page_size  int default 8
)
returns table (
  kind          text,        -- 'artwork' | 'artist'
  id            uuid,
  slug          text,
  title         text,        -- artwork title or artist name
  subtitle      text,        -- artist name (for artworks) or artwork count (for artists)
  thumbnail_url text,
  rank          real
)
language plpgsql
stable
as $$
declare
  trimmed text := trim(coalesce(q, ''));
  ts_query tsquery;
begin
  if length(trimmed) = 0 then
    return;
  end if;

  ts_query := websearch_to_tsquery('english', trimmed);

  return query
  -- Top artworks: blend FTS rank + trigram similarity on title.
  (select
     'artwork'::text as kind,
     a.id,
     a.slug,
     a.title,
     coalesce(a.artist_name_cached, 'Unknown')::text as subtitle,
     coalesce(a.thumbnail_256_url, a.thumbnail_url, a.image_url) as thumbnail_url,
     greatest(
       case when ts_query is not null and a.search_text @@ ts_query
            then ts_rank(a.search_text, ts_query) else 0 end,
       similarity(a.title, trimmed)
     ) as rank
     from public.artworks a
    where a.status = 'published'
      and a.moderation_status = 'approved'
      and (
        (ts_query is not null and a.search_text @@ ts_query)
        or a.title % trimmed
      )
    order by rank desc
    limit greatest(1, least(page_size, 20)))

  union all

  -- Top artists: trigram on name.
  (select
     'artist'::text,
     ar.id,
     ar.slug,
     ar.name as title,
     null::text as subtitle,
     null::text as thumbnail_url,
     similarity(ar.name, trimmed) as rank
     from public.artists ar
    where ar.name % trimmed
    order by rank desc
    limit greatest(1, least(page_size / 2, 10)));
end;
$$;

grant execute on function public.art_typeahead(text, int) to anon, authenticated;
