-- ============================================================
-- Migration 033 — chapter_overrides table
-- ============================================================
-- Stores admin-edited overrides for the per-chapter study guide content
-- that lives in src/data/chapters/*.ts. The render path checks for an
-- override row and falls back to the file content when none exists, so
-- the file content remains the canonical default.
--
-- Shape:
--   (book_slug, chapter) is the unique key. content is the merged shape
--   that StudyGuide expects:
--     {
--       overview?: string,
--       themes?: { title: string, desc: string }[],
--       questions?: string[],
--       christConnection?: string,
--       keyVerse?: { reference: string, text: string }
--     }
--   Any subset is allowed — fields not present in the override fall back
--   to the file-based content. This keeps edits surgical: an admin can
--   tweak just the overview without copying the rest of the chapter.
-- ============================================================

create table if not exists public.chapter_overrides (
  id uuid primary key default gen_random_uuid(),
  book_slug text not null,
  chapter int not null check (chapter > 0),
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by text,
  unique (book_slug, chapter)
);

create index if not exists idx_chapter_overrides_lookup
  on public.chapter_overrides (book_slug, chapter);

-- Keep updated_at fresh whenever the row changes.
drop trigger if exists trg_chapter_overrides_updated on public.chapter_overrides;
create trigger trg_chapter_overrides_updated
  before update on public.chapter_overrides
  for each row execute function public.update_updated_at();

-- ─── RLS ───
-- Public read (so the render path can use the anon client; rows aren't
-- secret — they're literally the visible page content). Writes restricted
-- to admin sessions via current_user_is_admin() from migration 023.
alter table public.chapter_overrides enable row level security;

drop policy if exists "public_read_chapter_overrides" on public.chapter_overrides;
create policy "public_read_chapter_overrides"
  on public.chapter_overrides for select
  to anon, authenticated
  using (true);

drop policy if exists "admin_insert_chapter_overrides" on public.chapter_overrides;
create policy "admin_insert_chapter_overrides"
  on public.chapter_overrides for insert
  to authenticated
  with check (public.current_user_is_admin());

drop policy if exists "admin_update_chapter_overrides" on public.chapter_overrides;
create policy "admin_update_chapter_overrides"
  on public.chapter_overrides for update
  to authenticated
  using (public.current_user_is_admin())
  with check (public.current_user_is_admin());

drop policy if exists "admin_delete_chapter_overrides" on public.chapter_overrides;
create policy "admin_delete_chapter_overrides"
  on public.chapter_overrides for delete
  to authenticated
  using (public.current_user_is_admin());
