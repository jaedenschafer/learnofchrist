-- ============================================================
-- Migration 064 — claim_local_data RPC
-- ============================================================
-- The "sign-in handoff" function. The mobile apps boot anonymous: the
-- user can read, highlight, journal, and bookmark for days before ever
-- creating an account. When they do tap a sync-triggering action and
-- sign in with Apple / Google, every locally-stored row needs to land
-- in their cloud account in one atomic call. That's what this is.
--
-- Inputs are four JSONB arrays — one per syncable table. Each element
-- shape mirrors the corresponding `user_*` table column-for-column,
-- minus the `user_id` (which the function fills in from auth.uid()).
-- The client is expected to send any local row that hasn't yet been
-- synced; safe to re-send already-claimed rows because every UPSERT
-- key dedupes idempotently and the LWW timestamp check skips stale
-- copies.
--
-- Conflict resolution: every UPSERT uses ON CONFLICT DO UPDATE with
-- a WHERE clause `excluded.client_updated_at > <table>.client_updated_at`,
-- i.e. **last-write-wins on the device's wall clock**. Two devices that
-- modified the same row before signing in will resolve to the device
-- with the later local timestamp.
--
-- Security: SECURITY INVOKER. RLS is enforced — the function can only
-- insert rows the calling user is permitted to write under
-- `auth.uid() = user_id`. The function explicitly sets user_id from
-- auth.uid() to prevent the client from spoofing other users' rows.
--
-- Returns a small `claim_summary` JSONB so the iOS app can show
-- "Claimed 42 highlights, 3 notes, 1 bookmark" in the sign-in UI.
-- ============================================================

create or replace function public.claim_local_data(
  p_progress    jsonb default '[]'::jsonb,
  p_bookmarks   jsonb default '[]'::jsonb,
  p_notes       jsonb default '[]'::jsonb,
  p_highlights  jsonb default '[]'::jsonb
)
returns jsonb
language plpgsql
security invoker
as $$
declare
  v_uid uuid := auth.uid();
  v_progress_count   int := 0;
  v_bookmarks_count  int := 0;
  v_notes_count      int := 0;
  v_highlights_count int := 0;
begin
  if v_uid is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  -- ─── Reading progress ─────────────────────────────────────────
  -- Natural key: (user_id, book_slug, chapter). One row per chapter.
  with claimed as (
    insert into public.user_reading_progress (
      user_id, book_slug, chapter,
      scroll_pct, last_verse_index,
      updated_at, client_id, client_updated_at, deleted_at
    )
    select
      v_uid,
      (r->>'book_slug')::text,
      (r->>'chapter')::int,
      coalesce((r->>'scroll_pct')::real, 0),
      nullif(r->>'last_verse_index', '')::int,
      coalesce((r->>'updated_at')::timestamptz, now()),
      nullif(r->>'client_id', '')::uuid,
      nullif(r->>'client_updated_at', '')::timestamptz,
      nullif(r->>'deleted_at', '')::timestamptz
    from jsonb_array_elements(p_progress) as r
    on conflict (user_id, book_slug, chapter) do update set
      scroll_pct        = excluded.scroll_pct,
      last_verse_index  = excluded.last_verse_index,
      client_id         = excluded.client_id,
      client_updated_at = excluded.client_updated_at,
      deleted_at        = excluded.deleted_at
    where coalesce(excluded.client_updated_at, excluded.updated_at) >
          coalesce(user_reading_progress.client_updated_at,
                   user_reading_progress.updated_at)
    returning 1
  )
  select count(*) into v_progress_count from claimed;

  -- ─── Bookmarks ───────────────────────────────────────────────
  -- Natural key: unique index on (user_id, book_slug, chapter, verse,
  -- coalesce(translation, '')) — set up by migration 019.
  with claimed as (
    insert into public.user_verse_bookmarks (
      user_id, book_slug, chapter, verse, translation, note,
      created_at, updated_at, client_id, client_updated_at, deleted_at
    )
    select
      v_uid,
      (b->>'book_slug')::text,
      (b->>'chapter')::int,
      (b->>'verse')::int,
      nullif(b->>'translation', '')::text,
      nullif(b->>'note', '')::text,
      coalesce((b->>'created_at')::timestamptz, now()),
      coalesce((b->>'updated_at')::timestamptz, now()),
      nullif(b->>'client_id', '')::uuid,
      nullif(b->>'client_updated_at', '')::timestamptz,
      nullif(b->>'deleted_at', '')::timestamptz
    from jsonb_array_elements(p_bookmarks) as b
    on conflict (user_id, book_slug, chapter, verse, coalesce(translation, ''))
    do update set
      note              = excluded.note,
      client_id         = excluded.client_id,
      client_updated_at = excluded.client_updated_at,
      deleted_at        = excluded.deleted_at
    where coalesce(excluded.client_updated_at, excluded.updated_at) >
          coalesce(user_verse_bookmarks.client_updated_at,
                   user_verse_bookmarks.updated_at)
    returning 1
  )
  select count(*) into v_bookmarks_count from claimed;

  -- ─── Notes ───────────────────────────────────────────────────
  -- Natural key: unique constraint on (user_id, book_slug, chapter, verse)
  -- — set up by migration 019.
  with claimed as (
    insert into public.user_verse_notes (
      user_id, book_slug, chapter, verse, body,
      created_at, updated_at, client_id, client_updated_at, deleted_at
    )
    select
      v_uid,
      (n->>'book_slug')::text,
      (n->>'chapter')::int,
      (n->>'verse')::int,
      (n->>'body')::text,
      coalesce((n->>'created_at')::timestamptz, now()),
      coalesce((n->>'updated_at')::timestamptz, now()),
      nullif(n->>'client_id', '')::uuid,
      nullif(n->>'client_updated_at', '')::timestamptz,
      nullif(n->>'deleted_at', '')::timestamptz
    from jsonb_array_elements(p_notes) as n
    on conflict (user_id, book_slug, chapter, verse)
    do update set
      body              = excluded.body,
      client_id         = excluded.client_id,
      client_updated_at = excluded.client_updated_at,
      deleted_at        = excluded.deleted_at
    where coalesce(excluded.client_updated_at, excluded.updated_at) >
          coalesce(user_verse_notes.client_updated_at,
                   user_verse_notes.updated_at)
    returning 1
  )
  select count(*) into v_notes_count from claimed;

  -- ─── Highlights ──────────────────────────────────────────────
  -- Natural key: PK is the client-supplied `id` uuid. iOS' StoredHighlight
  -- already carries it. Re-claim is a clean no-op or LWW patch.
  with claimed as (
    insert into public.user_highlights_v2 (
      id, user_id, book_slug, chapter,
      verse_start, verse_end, color,
      created_at, updated_at, client_id, client_updated_at, deleted_at
    )
    select
      (h->>'id')::uuid,
      v_uid,
      (h->>'book_slug')::text,
      (h->>'chapter')::int,
      (h->>'verse_start')::int,
      (h->>'verse_end')::int,
      coalesce(nullif(h->>'color', ''), 'yellow'),
      coalesce((h->>'created_at')::timestamptz, now()),
      coalesce((h->>'updated_at')::timestamptz, now()),
      nullif(h->>'client_id', '')::uuid,
      nullif(h->>'client_updated_at', '')::timestamptz,
      nullif(h->>'deleted_at', '')::timestamptz
    from jsonb_array_elements(p_highlights) as h
    on conflict (id) do update set
      verse_start       = excluded.verse_start,
      verse_end         = excluded.verse_end,
      color             = excluded.color,
      client_id         = excluded.client_id,
      client_updated_at = excluded.client_updated_at,
      deleted_at        = excluded.deleted_at
    where coalesce(excluded.client_updated_at, excluded.updated_at) >
          coalesce(user_highlights_v2.client_updated_at,
                   user_highlights_v2.updated_at)
      -- Refuse to overwrite a row whose existing user_id doesn't match
      -- the caller — prevents an attacker from "claiming" a known-id
      -- highlight from a different account (id is client-supplied and
      -- therefore guessable in principle).
      and user_highlights_v2.user_id = v_uid
    returning 1
  )
  select count(*) into v_highlights_count from claimed;

  return jsonb_build_object(
    'reading_progress', v_progress_count,
    'bookmarks',        v_bookmarks_count,
    'notes',            v_notes_count,
    'highlights',       v_highlights_count,
    'server_time',      now()
  );
end;
$$;

grant execute on function public.claim_local_data(jsonb, jsonb, jsonb, jsonb) to authenticated;

comment on function public.claim_local_data(jsonb, jsonb, jsonb, jsonb) is
  'Sign-in handoff: upload locally-stored rows under auth.uid(). Idempotent — '
  'safe to call multiple times. Conflict resolution: last-write-wins on '
  'client_updated_at (falls back to updated_at). Returns per-table claim counts.';
