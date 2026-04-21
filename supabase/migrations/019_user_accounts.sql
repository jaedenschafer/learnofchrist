-- Migration 019: user accounts
--
-- Introduces:
--   - public.profiles                mirror of auth.users with display_name/avatar_url
--   - public.user_reading_progress   per-user scroll position / last verse per chapter
--   - public.user_verse_bookmarks    per-user saved verses
--   - public.user_artwork_saves      per-user saved artworks
--   - public.user_verse_notes        per-user private notes per verse
--
-- All feature tables are RLS-locked so a user can only read/write their own rows.
-- `profiles` is readable by anyone (future "public profile" feature) but only
-- writable by the owning user.
--
-- On auth.users insert, a trigger creates a matching profile row populated
-- from Google OAuth's raw_user_meta_data (name, avatar_url).

-- ───────── profiles ─────────
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_anyone" on public.profiles;
create policy "profiles_select_anyone"
  on public.profiles for select
  using (true);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Trigger: create a profile row whenever a new auth user is created.
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      split_part(new.email, '@', 1)
    ),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_auth_user();

-- touch updated_at on profile edits
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ───────── user_reading_progress ─────────
-- One row per (user, book_slug, chapter). Latest scroll position + last verse index.
create table if not exists public.user_reading_progress (
  user_id          uuid not null references auth.users(id) on delete cascade,
  book_slug        text not null,
  chapter          int  not null,
  scroll_pct       real not null default 0,          -- 0.0 – 1.0
  last_verse_index int,
  updated_at       timestamptz not null default now(),
  primary key (user_id, book_slug, chapter)
);

alter table public.user_reading_progress enable row level security;

drop policy if exists "urp_owner_rw" on public.user_reading_progress;
create policy "urp_owner_rw"
  on public.user_reading_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists user_reading_progress_user_updated_idx
  on public.user_reading_progress (user_id, updated_at desc);

drop trigger if exists urp_touch_updated_at on public.user_reading_progress;
create trigger urp_touch_updated_at
  before update on public.user_reading_progress
  for each row execute function public.touch_updated_at();

-- ───────── user_verse_bookmarks ─────────
create table if not exists public.user_verse_bookmarks (
  id          bigserial primary key,
  user_id     uuid not null references auth.users(id) on delete cascade,
  book_slug   text not null,
  chapter     int  not null,
  verse       int  not null,
  translation text,                -- e.g. 'kjv'; nullable = translation-agnostic
  note        text,                -- optional short label on the bookmark
  created_at  timestamptz not null default now()
);

-- Unique on (user, ref, translation) — use an expression index rather than
-- a table constraint because UNIQUE constraints don't allow COALESCE().
create unique index if not exists user_verse_bookmarks_unique_ref
  on public.user_verse_bookmarks (user_id, book_slug, chapter, verse, coalesce(translation, ''));

alter table public.user_verse_bookmarks enable row level security;

drop policy if exists "bookmarks_owner_rw" on public.user_verse_bookmarks;
create policy "bookmarks_owner_rw"
  on public.user_verse_bookmarks for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists user_verse_bookmarks_user_created_idx
  on public.user_verse_bookmarks (user_id, created_at desc);

create index if not exists user_verse_bookmarks_ref_idx
  on public.user_verse_bookmarks (user_id, book_slug, chapter);

-- ───────── user_artwork_saves ─────────
create table if not exists public.user_artwork_saves (
  user_id    uuid not null references auth.users(id) on delete cascade,
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, artwork_id)
);

alter table public.user_artwork_saves enable row level security;

drop policy if exists "art_saves_owner_rw" on public.user_artwork_saves;
create policy "art_saves_owner_rw"
  on public.user_artwork_saves for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists user_artwork_saves_user_created_idx
  on public.user_artwork_saves (user_id, created_at desc);

-- ───────── user_verse_notes ─────────
-- One private note per (user, book, chapter, verse). Update-in-place semantics.
create table if not exists public.user_verse_notes (
  id         bigserial primary key,
  user_id    uuid not null references auth.users(id) on delete cascade,
  book_slug  text not null,
  chapter    int  not null,
  verse      int  not null,
  body       text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, book_slug, chapter, verse)
);

alter table public.user_verse_notes enable row level security;

drop policy if exists "notes_owner_rw" on public.user_verse_notes;
create policy "notes_owner_rw"
  on public.user_verse_notes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists user_verse_notes_user_updated_idx
  on public.user_verse_notes (user_id, updated_at desc);

create index if not exists user_verse_notes_ref_idx
  on public.user_verse_notes (user_id, book_slug, chapter);

drop trigger if exists notes_touch_updated_at on public.user_verse_notes;
create trigger notes_touch_updated_at
  before update on public.user_verse_notes
  for each row execute function public.touch_updated_at();

-- ───────── Grants ─────────
-- The Supabase authenticated role needs SELECT/INSERT/UPDATE/DELETE. RLS
-- gates what they can actually touch.
grant select, insert, update, delete on public.profiles                 to authenticated;
grant select, insert, update, delete on public.user_reading_progress    to authenticated;
grant select, insert, update, delete on public.user_verse_bookmarks     to authenticated;
grant select, insert, update, delete on public.user_artwork_saves       to authenticated;
grant select, insert, update, delete on public.user_verse_notes         to authenticated;
grant usage, select on sequence public.user_verse_bookmarks_id_seq     to authenticated;
grant usage, select on sequence public.user_verse_notes_id_seq         to authenticated;

grant select on public.profiles to anon;
