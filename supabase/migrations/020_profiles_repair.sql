-- Migration 020: repair profiles schema
--
-- Migration 019 used `create table if not exists public.profiles`, but a
-- profiles table already existed from a prior partial run with different
-- columns, so the column DDL inside the CREATE was never applied. The
-- Google sign-in trigger then failed with:
--   "column \"avatar_url\" of relation \"profiles\" does not exist"
--
-- This migration backfills the missing columns. Safe to re-run.

alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists avatar_url  text;
alter table public.profiles add column if not exists created_at  timestamptz not null default now();
alter table public.profiles add column if not exists updated_at  timestamptz not null default now();

-- Re-attach the updated_at touch trigger in case it was missed the first time.
drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- Re-grant in case the earlier grants didn't stick on the existing table.
grant select, insert, update, delete on public.profiles to authenticated;
grant select on public.profiles to anon;
