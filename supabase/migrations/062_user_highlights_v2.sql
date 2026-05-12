-- ============================================================
-- Migration 062 — user_highlights_v2 (sync-shaped)
-- ============================================================
-- The legacy 001-era `user_highlights` table keys by `book_id UUID`
-- and lacks every mobile-sync column (client_id, client_updated_at,
-- deleted_at, an `updated_at` cursor). Migration 056 explicitly leaves
-- it alone — too much risk of breaking unknown legacy callers.
--
-- This migration introduces `user_highlights_v2` as a fresh, sync-shaped
-- table that matches the iOS `StoredHighlight` model byte-for-byte
-- (see `ios/LearnOfChrist/Persistence/UserDataModels.swift`). All new
-- mobile + web writes target this table; the legacy `user_highlights`
-- can be retired in a future migration once we confirm nothing still
-- reads it.
--
-- Shape:
--   id                uuid PRIMARY KEY     -- client-generated; same value
--                                              flows from device to server
--                                              and back, so a re-claim
--                                              after a second sign-in is
--                                              an idempotent UPSERT.
--   user_id           uuid NOT NULL        -- references auth.users
--   book_slug         text NOT NULL        -- canonical lowercase slug
--                                              ('genesis', '1-corinthians', ...)
--   chapter           int  NOT NULL
--   verse_start       int  NOT NULL
--   verse_end         int  NOT NULL        -- inclusive; equals verse_start
--                                              for single-verse highlights
--   color             text NOT NULL        -- palette token (e.g. 'yellow',
--                                              'warm', 'accent'); kept loose
--                                              so we can rotate colors
--                                              without a schema migration
--   created_at        timestamptz NOT NULL DEFAULT now()
--   updated_at        timestamptz NOT NULL DEFAULT now()
--   client_id         uuid                 -- per-install UUID, NULL = web
--   client_updated_at timestamptz          -- device wall-clock for LWW
--   deleted_at        timestamptz          -- soft delete (sync-propagable)
--
-- RLS: owner_rw — `auth.uid() = user_id` on both USING and WITH CHECK.
-- Indexes: sync index (user_id, updated_at desc) WHERE deleted_at IS NULL,
--          ref index (user_id, book_slug, chapter).
-- View: v_user_highlights_v2 hides soft-deleted rows for non-sync reads.
-- ============================================================

create table if not exists public.user_highlights_v2 (
  id                uuid primary key,
  user_id           uuid not null references auth.users(id) on delete cascade,
  book_slug         text not null,
  chapter           int  not null,
  verse_start       int  not null,
  verse_end         int  not null,
  color             text not null default 'yellow',
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  client_id         uuid,
  client_updated_at timestamptz,
  deleted_at        timestamptz,
  check (verse_end >= verse_start),
  check (chapter >= 1)
);

alter table public.user_highlights_v2 enable row level security;

drop policy if exists "highlights_v2_owner_rw" on public.user_highlights_v2;
create policy "highlights_v2_owner_rw"
  on public.user_highlights_v2 for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Sync index — the v1_sync_user_data RPC scans by (user_id, updated_at)
-- and we always want the freshly-deleted rows present too, so the partial
-- index is split: a "live rows" index for ordinary reads, and a small
-- "all rows" index the sync RPC uses to pick up tombstones.
create index if not exists user_highlights_v2_live_idx
  on public.user_highlights_v2 (user_id, updated_at desc)
  where deleted_at is null;

create index if not exists user_highlights_v2_sync_idx
  on public.user_highlights_v2 (user_id, updated_at desc);

-- Reference index — open a chapter, hydrate this user's highlights for it.
create index if not exists user_highlights_v2_ref_idx
  on public.user_highlights_v2 (user_id, book_slug, chapter)
  where deleted_at is null;

-- Auto-bump updated_at on every UPDATE so the sync cursor advances even
-- if the device forgot to set client_updated_at on a delete.
drop trigger if exists highlights_v2_touch_updated_at on public.user_highlights_v2;
create trigger highlights_v2_touch_updated_at
  before update on public.user_highlights_v2
  for each row execute function public.touch_updated_at();

-- Non-sync clients (web "current highlights for this chapter") read the
-- view so they never have to remember the deleted_at filter.
create or replace view public.v_user_highlights_v2 as
  select * from public.user_highlights_v2 where deleted_at is null;

grant select on public.v_user_highlights_v2 to authenticated;

-- Column docs surface in the Supabase dashboard's column inspector;
-- worth a few lines so the next reader doesn't have to dig.
comment on table public.user_highlights_v2 is
  'Mobile-shaped highlights table. Replaces the legacy 001-era `user_highlights`. '
  'Client supplies the `id` UUID so re-claims after sign-in are idempotent.';
comment on column public.user_highlights_v2.client_id is
  'Per-install UUID for the device that wrote the row. NULL = web (legacy compat).';
comment on column public.user_highlights_v2.client_updated_at is
  'Device wall-clock at write time. Used for last-write-wins conflict resolution.';
comment on column public.user_highlights_v2.deleted_at is
  'Soft delete. Sync RPC returns these rows so peers propagate the delete.';
