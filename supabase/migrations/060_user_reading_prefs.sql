-- Migration 060: user_reading_prefs
--
-- One row per user holding the device-syncable reading preferences. Currently:
--   - depth_tier   : 5 / 10 / 15 (Quick / Standard / Deep study guide depth)
--
-- localStorage remains the source of truth on a single device. This row is the
-- cross-device sync mechanism — when the user lands on a new device (or the
-- iOS app), the saved preferences are read at session start and seed the
-- in-memory state. Writes from the client are debounced (~500ms) so rapid taps
-- on the depth control don't spam the API.
--
-- Designed to grow: when we want to also sync font_size / theme / reading_mode
-- across devices, add columns here rather than a separate table.

create table if not exists public.user_reading_prefs (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  depth_tier   smallint not null default 10 check (depth_tier in (5, 10, 15)),
  updated_at   timestamptz not null default now()
);

alter table public.user_reading_prefs enable row level security;

drop policy if exists "user_reading_prefs_select_own" on public.user_reading_prefs;
create policy "user_reading_prefs_select_own"
  on public.user_reading_prefs for select
  using (auth.uid() = user_id);

drop policy if exists "user_reading_prefs_insert_own" on public.user_reading_prefs;
create policy "user_reading_prefs_insert_own"
  on public.user_reading_prefs for insert
  with check (auth.uid() = user_id);

drop policy if exists "user_reading_prefs_update_own" on public.user_reading_prefs;
create policy "user_reading_prefs_update_own"
  on public.user_reading_prefs for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Auto-update updated_at on every UPDATE.
create or replace function public.touch_user_reading_prefs_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_user_reading_prefs_touch on public.user_reading_prefs;
create trigger trg_user_reading_prefs_touch
  before update on public.user_reading_prefs
  for each row execute function public.touch_user_reading_prefs_updated_at();
