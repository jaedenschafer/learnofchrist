-- ============================================================
-- Migration 056 — mobile sync metadata
-- ============================================================
-- Adds three columns to every user-data table so iOS/Android can do
-- offline-first sync with last-write-wins reconciliation:
--
--   client_id          UUID   — which device created/last-modified the row
--   client_updated_at  TS     — the device's wall clock at write time
--                                (server `updated_at` is monotonic by the
--                                 server's clock; this one preserves the
--                                 device's intent for conflict resolution)
--   deleted_at         TS     — soft delete so deletions propagate to other
--                                devices via sync. Hard delete is reserved
--                                for compliance/erasure flows only.
--
-- All three are nullable. Existing rows backfill as NULL — that's fine,
-- they predate the mobile clients and aren't in conflict with anything.
--
-- We DO NOT touch the legacy 001-era tables (user_highlights,
-- user_plan_progress, user_streaks) because they are unused by the app
-- code and may not even be populated. Future migration can normalize
-- once we decide whether to revive or retire them.
--
-- RLS: existing "*_owner_rw" policies are kept. We add a small wrapper
-- view per table that hides soft-deleted rows from regular reads — the
-- mobile sync RPC bypasses the view and queries the base table directly
-- so it can see deletions.
-- ============================================================

-- ─── helper: append the three columns to one table ───
-- (kept inline rather than a function so the migration is one transaction
-- and easy to read in the SQL editor)

-- user_reading_progress ─────────────────────────────────────
alter table public.user_reading_progress
  add column if not exists client_id uuid,
  add column if not exists client_updated_at timestamptz,
  add column if not exists deleted_at timestamptz;

create index if not exists user_reading_progress_sync_idx
  on public.user_reading_progress (user_id, updated_at desc)
  where deleted_at is null;

-- user_verse_bookmarks ─────────────────────────────────────
alter table public.user_verse_bookmarks
  add column if not exists client_id uuid,
  add column if not exists client_updated_at timestamptz,
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists deleted_at timestamptz;

-- bookmarks didn't have updated_at before; backfill from created_at so
-- existing rows have a sensible value for since-timestamp queries.
update public.user_verse_bookmarks
  set updated_at = created_at
  where updated_at is null or updated_at = '1970-01-01'::timestamptz;

drop trigger if exists bookmarks_touch_updated_at on public.user_verse_bookmarks;
create trigger bookmarks_touch_updated_at
  before update on public.user_verse_bookmarks
  for each row execute function public.touch_updated_at();

create index if not exists user_verse_bookmarks_sync_idx
  on public.user_verse_bookmarks (user_id, updated_at desc)
  where deleted_at is null;

-- user_artwork_saves ────────────────────────────────────────
alter table public.user_artwork_saves
  add column if not exists client_id uuid,
  add column if not exists client_updated_at timestamptz,
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists deleted_at timestamptz;

update public.user_artwork_saves
  set updated_at = created_at
  where updated_at is null or updated_at = '1970-01-01'::timestamptz;

drop trigger if exists art_saves_touch_updated_at on public.user_artwork_saves;
create trigger art_saves_touch_updated_at
  before update on public.user_artwork_saves
  for each row execute function public.touch_updated_at();

create index if not exists user_artwork_saves_sync_idx
  on public.user_artwork_saves (user_id, updated_at desc)
  where deleted_at is null;

-- user_verse_notes ──────────────────────────────────────────
alter table public.user_verse_notes
  add column if not exists client_id uuid,
  add column if not exists client_updated_at timestamptz,
  add column if not exists deleted_at timestamptz;

create index if not exists user_verse_notes_sync_idx
  on public.user_verse_notes (user_id, updated_at desc)
  where deleted_at is null;

-- ─── Soft-delete-aware views ───
-- Web code reading "current" rows can switch from `user_*` → `v_user_*`
-- without thinking about deleted_at. Mobile sync uses the base tables.

create or replace view public.v_user_reading_progress as
  select * from public.user_reading_progress where deleted_at is null;

create or replace view public.v_user_verse_bookmarks as
  select * from public.user_verse_bookmarks where deleted_at is null;

create or replace view public.v_user_artwork_saves as
  select * from public.user_artwork_saves where deleted_at is null;

create or replace view public.v_user_verse_notes as
  select * from public.user_verse_notes where deleted_at is null;

grant select on public.v_user_reading_progress to authenticated;
grant select on public.v_user_verse_bookmarks  to authenticated;
grant select on public.v_user_artwork_saves    to authenticated;
grant select on public.v_user_verse_notes      to authenticated;

-- ─── Sanity comment ───
comment on column public.user_reading_progress.client_id is
  'Mobile/desktop client UUID that wrote this row. NULL = web (legacy).';
comment on column public.user_reading_progress.client_updated_at is
  'Wall-clock at write time on the originating device. Use for conflict resolution; server updated_at is the canonical sync cursor.';
comment on column public.user_reading_progress.deleted_at is
  'Soft delete. Sync RPC returns rows with non-null deleted_at so other devices propagate the delete; views filter them out.';
