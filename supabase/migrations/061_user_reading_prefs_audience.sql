-- Migration 061: audience preference for user_reading_prefs
--
-- Adds the second reader-preference axis: which AUDIENCE the chapter renders
-- for. Three values:
--   - adults  (default; the canonical chapter)
--   - youth   (same chapter, with hideForYouth blocks stripped and
--              youthOverride content swapped in for Carry/Reflection)
--   - kids    (totally different document — see src/data/kids-chapters/)
--
-- Plus an `audience_lock` boolean. When true, the client picker hides itself
-- and audience is forced to 'kids'. Used for child-account profiles a parent
-- has set up — flip this once during account setup and the kid never sees
-- the adult/youth views. Default false; can only be set by the user
-- themselves under existing RLS, which means the parent flips it from
-- their own session before handing the device over (or via a future
-- /account/setup-child-profile flow).
--
-- Backwards-compatible: existing rows get audience='adults', audience_lock=false.
-- The client tolerates the columns missing too (catches and ignores), so this
-- migration can be applied before or after the audience-filter PR ships.

alter table public.user_reading_prefs
  add column if not exists audience text not null default 'adults'
    check (audience in ('adults', 'youth', 'kids'));

alter table public.user_reading_prefs
  add column if not exists audience_lock boolean not null default false;

-- The existing select / insert / update policies already cover these columns
-- because they gate the row on auth.uid() = user_id, not column-level. No
-- policy changes needed.

-- The touch_user_reading_prefs_updated_at trigger already updates updated_at
-- on any column change, so audience writes will bump the timestamp.
