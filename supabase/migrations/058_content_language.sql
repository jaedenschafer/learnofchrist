-- ============================================================
-- Migration 058 — language column on content tables
-- ============================================================
-- Adds language (BCP-47-ish, lowercase) to every content table that
-- doesn't already carry one. Defaulted to 'en' so existing rows are
-- correct. Indexes are partial — only en gets one for now since that's
-- the only language we serve. When a new language arrives we add an
-- index per language.
--
-- The verses table already has `language` from migration 001, so this
-- is purely additive on the secondary content tables.
-- ============================================================

alter table public.commentary_blocks
  add column if not exists language text not null default 'en';

alter table public.study_guides
  add column if not exists language text not null default 'en';

alter table public.topics
  add column if not exists language text not null default 'en';

alter table public.questions
  add column if not exists language text not null default 'en';

alter table public.blog_posts
  add column if not exists language text not null default 'en';

alter table public.study_plans
  add column if not exists language text not null default 'en';

alter table public.study_plan_days
  add column if not exists language text not null default 'en';

alter table public.chapter_overrides
  add column if not exists language text not null default 'en';

-- ─── Indexes ───
-- Most content lookups join through the parent table (study_guide ->
-- sections -> commentary_blocks). The language filter is applied at the
-- top, so we index by language at the entry points only.

create index if not exists idx_study_guides_lang_published
  on public.study_guides (language, status)
  where status = 'published';

create index if not exists idx_topics_lang_published
  on public.topics (language, status)
  where status = 'published';

create index if not exists idx_questions_lang_published
  on public.questions (language, status)
  where status = 'published';

create index if not exists idx_blog_posts_lang_published
  on public.blog_posts (language, status)
  where status = 'published';

create index if not exists idx_chapter_overrides_lang
  on public.chapter_overrides (book_slug, chapter, language);

-- ─── Comments ───
comment on column public.commentary_blocks.language is
  'BCP-47-ish lowercase tag. Chapter render filters by user.preferred_language ?? ''en''.';
comment on column public.study_guides.language is
  'Each (book, chapter, language) is a separate study_guide row.';
