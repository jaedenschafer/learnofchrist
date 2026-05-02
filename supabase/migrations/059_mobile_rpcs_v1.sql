-- ============================================================
-- Migration 059 — v1 mobile RPC surface
-- ============================================================
-- Composed read endpoints for iOS / Android. Naming convention:
--
--   v1_<noun>_<verb>(...)
--
-- The v1 prefix is intentional — when shape changes, mint v2 and let
-- old client builds keep using v1 until they roll over. Never alter a
-- v1 function's return shape after launch.
--
-- All functions are SECURITY INVOKER so RLS still applies — these are
-- read helpers, not privilege escalators. Where a function returns user
-- data, it filters on auth.uid(); the matching RLS policy enforces it.
--
-- Returning JSONB instead of typed records gives the client a stable
-- shape we can extend without breaking PostgREST function signatures
-- (which are encoded into the OpenAPI schema and would force a regen
-- on every change).
-- ============================================================

-- ─── v1_app_config ────────────────────────────────────────────────
-- Minimum supported app version per platform, kill switches, simple
-- experiments. Hits this on cold launch. Edit the body of this function
-- (or, later, drop in a `app_config` row table) without a migration.
create or replace function public.v1_app_config()
returns jsonb
language sql
stable
security invoker
as $$
  select jsonb_build_object(
    'min_supported_version', jsonb_build_object(
      'ios',     '0.0.0',
      'android', '0.0.0',
      'web',     '0.0.0'
    ),
    'kill_switches', jsonb_build_object(
      'passage_qa',         false,
      'audio_narration',    false,
      'multi_lens_compare', false
    ),
    'feature_flags', jsonb_build_object(
      'multi_lens',         true,
      'depth_toggle',       true,
      'translation_picker', true,
      'study_journal',      true
    ),
    'content_manifest_url',
      'https://content.learnofchrist.com/v1/manifest.json',
    'server_time', now()
  );
$$;

grant execute on function public.v1_app_config() to anon, authenticated;

-- ─── v1_chapter_overrides ─────────────────────────────────────────
-- Returns the chapter_overrides row (if any) plus published commentary
-- blocks for the requested lens/depth/language. Mobile merges this with
-- the locally-cached content pack at render time. NULL fields = "fall
-- back to pack".
create or replace function public.v1_chapter_overrides(
  p_book_slug text,
  p_chapter int,
  p_lens text default 'universal',
  p_depth text default 'standard',
  p_language text default 'en'
)
returns jsonb
language plpgsql
stable
security invoker
as $$
declare
  v_override jsonb;
  v_blocks jsonb;
begin
  -- chapter_overrides row (the legacy/rich edited content)
  select to_jsonb(c.*)
    into v_override
  from public.chapter_overrides c
  where c.book_slug = p_book_slug
    and c.chapter = p_chapter
    and c.language = p_language
  limit 1;

  -- commentary_blocks for this chapter, lens + depth, with universal
  -- fallback. We don't filter by status because RLS already restricts
  -- to published rows for non-admins.
  select coalesce(jsonb_agg(b.* order by b.section_id), '[]'::jsonb)
    into v_blocks
  from (
    select cb.id,
           cb.section_id,
           cb.lens,
           cb.depth,
           cb.content,
           cb.sources,
           cb.language,
           s.sort_order,
           s.section_type,
           s.title as section_title,
           s.slug  as section_slug,
           s.verse_ref_start,
           s.verse_ref_end
    from public.commentary_blocks cb
    join public.sections s on s.id = cb.section_id
    join public.study_guides g on g.id = s.guide_id
    join public.books bk on bk.id = g.book_id
    where bk.slug = p_book_slug
      and g.chapter = p_chapter
      and cb.language = p_language
      and (cb.lens::text = p_lens or cb.lens = 'universal')
      and (cb.depth::text = p_depth or cb.depth = 'standard')
  ) b;

  return jsonb_build_object(
    'book_slug', p_book_slug,
    'chapter',   p_chapter,
    'lens',      p_lens,
    'depth',     p_depth,
    'language',  p_language,
    'override',  v_override,
    'commentary_blocks', v_blocks
  );
end;
$$;

grant execute on function public.v1_chapter_overrides(text, int, text, text, text)
  to anon, authenticated;

-- ─── v1_home_feed ─────────────────────────────────────────────────
-- One round trip for the iOS/Android Home tab. Returns the latest
-- reading position, recent bookmarks/notes, daily verse anchor.
create or replace function public.v1_home_feed()
returns jsonb
language plpgsql
stable
security invoker
as $$
declare
  v_uid uuid := auth.uid();
  v_continue jsonb;
  v_recent_bookmarks jsonb;
  v_recent_notes jsonb;
  v_daily_verse_ref text;
begin
  -- Continue Reading: most recently touched chapter
  if v_uid is not null then
    select to_jsonb(p.*)
      into v_continue
    from public.user_reading_progress p
    where p.user_id = v_uid
      and p.deleted_at is null
    order by p.updated_at desc
    limit 1;

    select coalesce(jsonb_agg(b.* order by b.created_at desc), '[]'::jsonb)
      into v_recent_bookmarks
    from (
      select id, book_slug, chapter, verse, translation, note, created_at
      from public.user_verse_bookmarks
      where user_id = v_uid
        and deleted_at is null
      order by created_at desc
      limit 5
    ) b;

    select coalesce(jsonb_agg(n.* order by n.updated_at desc), '[]'::jsonb)
      into v_recent_notes
    from (
      select id, book_slug, chapter, verse, body, updated_at
      from public.user_verse_notes
      where user_id = v_uid
        and deleted_at is null
      order by updated_at desc
      limit 5
    ) n;
  else
    v_continue := null;
    v_recent_bookmarks := '[]'::jsonb;
    v_recent_notes := '[]'::jsonb;
  end if;

  -- Deterministic daily verse — same for everyone on a given UTC day.
  -- Mobile renders by looking up the verse text from its local pack so
  -- this RPC stays free of translation entanglement.
  v_daily_verse_ref := (array[
    'john.3.16', 'psalms.23.1', 'romans.8.28', 'philippians.4.13',
    'jeremiah.29.11', 'proverbs.3.5', 'isaiah.41.10', 'matthew.11.28',
    'romans.12.2', '1.corinthians.13.4', 'psalms.46.10', 'joshua.1.9'
  ])[((extract(doy from now() at time zone 'UTC')::int - 1) % 12) + 1];

  return jsonb_build_object(
    'continue_reading',  v_continue,
    'recent_bookmarks',  v_recent_bookmarks,
    'recent_notes',      v_recent_notes,
    'daily_verse_ref',   v_daily_verse_ref,
    'is_premium',        coalesce(public.is_premium(v_uid), false),
    'server_time',       now()
  );
end;
$$;

grant execute on function public.v1_home_feed() to authenticated, anon;

-- ─── v1_sync_user_data ────────────────────────────────────────────
-- Pull every change since the client's last sync cursor. Returns
-- soft-deleted rows so the device can reconcile deletions. The client
-- writes back via standard PostgREST POST/PATCH on the base tables.
--
-- p_since: client's last_synced_at (server-time). NULL = full sync.
-- p_limit: cap per-table to keep response size bounded; client pages
--          by passing back the largest updated_at it received.
create or replace function public.v1_sync_user_data(
  p_since timestamptz default null,
  p_limit int default 500
)
returns jsonb
language plpgsql
stable
security invoker
as $$
declare
  v_uid uuid := auth.uid();
  v_since timestamptz := coalesce(p_since, '1970-01-01'::timestamptz);
  v_limit int := least(greatest(coalesce(p_limit, 500), 1), 2000);
  v_progress jsonb;
  v_bookmarks jsonb;
  v_notes jsonb;
  v_artwork jsonb;
  v_max_updated_at timestamptz;
begin
  if v_uid is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(r.* order by r.updated_at), '[]'::jsonb),
         max(r.updated_at)
    into v_progress, v_max_updated_at
  from (
    select * from public.user_reading_progress
    where user_id = v_uid
      and updated_at > v_since
    order by updated_at
    limit v_limit
  ) r;

  select coalesce(jsonb_agg(b.* order by b.updated_at), '[]'::jsonb),
         greatest(coalesce(v_max_updated_at, '1970-01-01'::timestamptz),
                  coalesce(max(b.updated_at), '1970-01-01'::timestamptz))
    into v_bookmarks, v_max_updated_at
  from (
    select * from public.user_verse_bookmarks
    where user_id = v_uid
      and updated_at > v_since
    order by updated_at
    limit v_limit
  ) b;

  select coalesce(jsonb_agg(n.* order by n.updated_at), '[]'::jsonb),
         greatest(coalesce(v_max_updated_at, '1970-01-01'::timestamptz),
                  coalesce(max(n.updated_at), '1970-01-01'::timestamptz))
    into v_notes, v_max_updated_at
  from (
    select * from public.user_verse_notes
    where user_id = v_uid
      and updated_at > v_since
    order by updated_at
    limit v_limit
  ) n;

  select coalesce(jsonb_agg(a.* order by a.updated_at), '[]'::jsonb),
         greatest(coalesce(v_max_updated_at, '1970-01-01'::timestamptz),
                  coalesce(max(a.updated_at), '1970-01-01'::timestamptz))
    into v_artwork, v_max_updated_at
  from (
    select * from public.user_artwork_saves
    where user_id = v_uid
      and updated_at > v_since
    order by updated_at
    limit v_limit
  ) a;

  return jsonb_build_object(
    'reading_progress', v_progress,
    'bookmarks',        v_bookmarks,
    'notes',            v_notes,
    'artwork_saves',    v_artwork,
    'cursor',           coalesce(v_max_updated_at, v_since),
    'server_time',      now()
  );
end;
$$;

grant execute on function public.v1_sync_user_data(timestamptz, int) to authenticated;

-- ─── v1_book_index ────────────────────────────────────────────────
-- Compact list of all 66 books (or whichever languages are enabled),
-- so the iOS Bible tab can render the book grid without 66 separate
-- queries or hard-coding the list.
create or replace function public.v1_book_index()
returns jsonb
language sql
stable
security invoker
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'slug',           b.slug,
        'name',           b.name,
        'abbreviation',   b.abbreviation,
        'testament',      b.testament,
        'total_chapters', b.total_chapters,
        'sort_order',     b.sort_order
      )
      order by b.sort_order
    ),
    '[]'::jsonb
  )
  from public.books b;
$$;

grant execute on function public.v1_book_index() to anon, authenticated;
