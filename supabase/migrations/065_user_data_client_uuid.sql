-- ============================================================
-- Migration 065 — client_uuid on user_verse_bookmarks + user_verse_notes
-- ============================================================
-- The iOS app generates a UUID locally for each bookmark and note (see
-- `StoredBookmark.id` / `StoredNote.id` in
-- `ios/LearnOfChrist/Persistence/UserDataModels.swift`). The matching
-- server tables, however, use `bigserial` integer primary keys assigned
-- by Postgres — so the client's UUID has no place to live.
--
-- That gap shows up two places:
--   1. The client can't PATCH a row it just inserted, because it doesn't
--      know the server's bigserial id without a round-trip read.
--   2. A re-claim after sign-out → sign-in can't dedupe on a client-side
--      handle, only on the natural key (book_slug, chapter, verse, ...) —
--      which works for now but is brittle if we ever allow multiple
--      bookmarks on the same verse.
--
-- Migration 064's `claim_local_data` handles #2 with the existing natural
-- keys, so we're shipping that without blocking. This migration is the
-- forward-looking fix: an additive `client_uuid` column on each table,
-- nullable for backwards compat with web (which doesn't generate one),
-- but unique-per-user where present so the client can PATCH by uuid.
--
-- Reading_progress isn't touched — it already has a stable natural key
-- of (user_id, book_slug, chapter), one row per chapter.
-- Highlights aren't touched — the v2 table's PK *is* the client-supplied
-- uuid.
--
-- Additive and idempotent: safe to apply on a populated database.
-- ============================================================

-- ─── user_verse_bookmarks ────────────────────────────────────
alter table public.user_verse_bookmarks
  add column if not exists client_uuid uuid;

-- Unique-per-user (and only when present, so existing web rows with NULL
-- don't collide). This index doubles as the lookup index iOS uses to
-- PATCH a bookmark by its locally-generated id.
create unique index if not exists user_verse_bookmarks_client_uuid_idx
  on public.user_verse_bookmarks (user_id, client_uuid)
  where client_uuid is not null;

-- ─── user_verse_notes ───────────────────────────────────────
alter table public.user_verse_notes
  add column if not exists client_uuid uuid;

create unique index if not exists user_verse_notes_client_uuid_idx
  on public.user_verse_notes (user_id, client_uuid)
  where client_uuid is not null;

-- ─── Comments ───────────────────────────────────────────────
comment on column public.user_verse_bookmarks.client_uuid is
  'Optional client-side identity. iOS/Android generate a UUID locally so '
  'the device can PATCH the row by uuid without round-tripping for the '
  'server bigserial id. Web inserts leave this NULL.';

comment on column public.user_verse_notes.client_uuid is
  'Optional client-side identity. iOS/Android generate a UUID locally so '
  'the device can PATCH the row by uuid without round-tripping for the '
  'server bigserial id. Web inserts leave this NULL.';
