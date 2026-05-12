-- ============================================================
-- Migration 063 — v1_sync_user_data: include user_highlights_v2
-- ============================================================
-- Adds the `highlights` key to the v1_sync_user_data() return payload
-- so iOS pull-to-refresh sees highlight changes alongside reading
-- progress / bookmarks / notes / artwork saves.
--
-- Compatibility:
-- This is a CREATE OR REPLACE on the existing function. The argument
-- list is unchanged (timestamptz, int), so old clients keep working —
-- they'll receive an extra `highlights` key and ignore it. New clients
-- (iOS, future Android) read the key. This obeys the strategy doc's
-- rule that `v1_*` return shapes must be *additive* — never alter or
-- remove a key, only add new ones.
--
-- Mirror of the pattern in migration 059 for the other four tables.
-- ============================================================

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
  v_highlights jsonb;
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

  -- New in 063: highlights. Same pattern as the four above. Reads from
  -- the base table (not the v_ view) so soft-deletes propagate to peers.
  select coalesce(jsonb_agg(h.* order by h.updated_at), '[]'::jsonb),
         greatest(coalesce(v_max_updated_at, '1970-01-01'::timestamptz),
                  coalesce(max(h.updated_at), '1970-01-01'::timestamptz))
    into v_highlights, v_max_updated_at
  from (
    select * from public.user_highlights_v2
    where user_id = v_uid
      and updated_at > v_since
    order by updated_at
    limit v_limit
  ) h;

  return jsonb_build_object(
    'reading_progress', v_progress,
    'bookmarks',        v_bookmarks,
    'notes',            v_notes,
    'artwork_saves',    v_artwork,
    'highlights',       v_highlights,
    'cursor',           coalesce(v_max_updated_at, v_since),
    'server_time',      now()
  );
end;
$$;

-- Grant unchanged — same signature, same caller set.
grant execute on function public.v1_sync_user_data(timestamptz, int) to authenticated;

comment on function public.v1_sync_user_data(timestamptz, int) is
  'Mobile sync pull. Returns rows changed since p_since (default 1970) '
  'across reading_progress, bookmarks, notes, artwork_saves, highlights. '
  'Soft-deleted rows are included so peers propagate the delete. '
  'Cursor advances monotonically by server clock.';
