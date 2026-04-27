-- Migration 055 — Fix Show More on relevance/title/year sorts +
-- add Old/New Testament filter to search_artworks.
--
-- Two bugs in the existing search_artworks RPC (migration 029):
--
--   1. The cursor `(cursor_ts, cursor_id)` is only honored when
--      sort_by is 'recent' or 'oldest'. For 'relevance', 'az', 'za',
--      'year_asc', 'year_desc', 'popular' it's `else true`, which
--      means clicking Show More on a search-results page returns
--      the SAME first 48 rows. Visible bug on every search.
--
--   2. No way to filter by testament. Adding a `filter_testament`
--      argument that maps to books.testament for the existing
--      book join logic.
--
-- Fix: add a `cursor_offset int` parameter that's the canonical
-- pagination handle for every non-time sort. The page layer now
-- stuffs the offset into the encoded cursor when sort != recent
-- and != oldest, and the SQL applies OFFSET at the end of the
-- ordered result. For recent/oldest the existing (ts, id) keyset
-- pagination keeps working unchanged (more stable than offset for
-- the default sort).

drop function if exists public.search_artworks(
  text, text[], text[], text[], text[], text[],
  timestamptz, uuid, int, text
);

create or replace function public.search_artworks(
  q                text       default null,
  filter_era       text[]     default null,
  filter_books     text[]     default null,
  filter_artists   text[]     default null,
  filter_chars     text[]     default null,
  filter_themes    text[]     default null,
  cursor_ts        timestamptz default null,
  cursor_id        uuid        default null,
  page_size        int         default 48,
  sort_by          text        default 'recent',
  cursor_offset    int         default 0,
  filter_testament text        default null
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
  effective_offset   int := greatest(coalesce(cursor_offset, 0), 0);
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

  -- Testament filter — resolves to artwork_ids whose primary book is
  -- in the requested testament. Intersected with book_artwork_ids
  -- when both filters apply.
  if filter_testament is not null
     and (filter_testament = 'old' or filter_testament = 'new') then
    declare
      testament_artwork_ids uuid[];
    begin
      select array_agg(distinct r.artwork_id) into testament_artwork_ids
        from public.artwork_scripture_refs r
        join public.books b on b.id = r.book_id
       where b.testament::text = filter_testament;
      if testament_artwork_ids is null then
        testament_artwork_ids := array[]::uuid[];
      end if;
      if book_artwork_ids is null then
        book_artwork_ids := testament_artwork_ids;
      else
        select array_agg(distinct id) into book_artwork_ids
          from unnest(book_artwork_ids) t1(id)
         where t1.id = any (testament_artwork_ids);
        if book_artwork_ids is null then
          book_artwork_ids := array[]::uuid[];
        end if;
      end if;
    end;
  end if;

  -- Translate artist slugs → artist_ids.
  if filter_artists is not null and array_length(filter_artists, 1) > 0 then
    select array_agg(id) into artist_ids
      from public.artists where slug = any (filter_artists);
    if artist_ids is null then
      artist_ids := array[]::uuid[];
    end if;
  end if;

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
     -- Keyset pagination is only safe on monotonic ordering keys
     -- (created_at). For every other sort we fall through to OFFSET
     -- below, which is correct even when the same row would appear
     -- in two adjacent pages under heavy concurrent inserts.
     case sort_by
       when 'recent' then cursor_ts is null or (c.created_at, c.id) < (cursor_ts, cursor_id)
       when 'oldest' then cursor_ts is null or (c.created_at, c.id) > (cursor_ts, cursor_id)
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
     c.id desc
   offset case when sort_by in ('recent','oldest') then 0 else effective_offset end
   limit greatest(1, least(page_size, 200));
end;
$$;

grant execute on function public.search_artworks(
  text, text[], text[], text[], text[], text[],
  timestamptz, uuid, int, text, int, text
) to anon, authenticated;
