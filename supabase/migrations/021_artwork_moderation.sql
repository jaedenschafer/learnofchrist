-- Artwork moderation layer
-- Run this in the Supabase SQL editor once.

-- Each artwork gets a moderation_status independent of its publication
-- status. Only moderation_status = 'approved' artworks are shown in the
-- reader-facing feed.
--
-- Workflow:
--   pending  → freshly ingested / awaiting automated scan
--   flagged  → auto-scan found something concerning; needs human eyes
--   rejected → reviewer said no; never renders
--   approved → reviewer said yes; renders

alter table public.artworks
  add column if not exists moderation_status text
    not null default 'pending'
    check (moderation_status in ('pending', 'flagged', 'rejected', 'approved')),
  add column if not exists moderation_scores jsonb,
  add column if not exists moderation_reviewed_at timestamptz,
  add column if not exists moderation_reviewed_by text,
  add column if not exists moderation_notes text;

create index if not exists idx_artworks_moderation_status
  on public.artworks (moderation_status);

-- Any existing rows: mark them pending so they go through the pipeline
-- on the next bulk scan. (If you trust the current library, you can
-- flip them to 'approved' manually after review.)
update public.artworks
  set moderation_status = 'pending'
  where moderation_status is null;

-- User-facing reports. A reader clicks "Report this image" and we log it
-- with optional context. The admin page surfaces anything with
-- report_count > 0 regardless of its current moderation_status.
create table if not exists public.artwork_reports (
  id uuid primary key default gen_random_uuid(),
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  reason text,
  page_url text,
  reporter_ip text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists idx_artwork_reports_artwork_id
  on public.artwork_reports (artwork_id);

-- RLS: public can insert a report (to drive the Report button) but cannot
-- read the reports table. Only the service role sees them.
alter table public.artwork_reports enable row level security;

drop policy if exists "public_insert_reports" on public.artwork_reports;
create policy "public_insert_reports"
  on public.artwork_reports for insert
  to anon, authenticated
  with check (true);

-- Convenience: a view that shows artworks with their report counts, used
-- by the admin queue.
create or replace view public.artwork_moderation_queue as
  select
    a.*,
    coalesce(r.report_count, 0) as report_count,
    r.latest_report_at
  from public.artworks a
  left join (
    select artwork_id,
           count(*) as report_count,
           max(created_at) as latest_report_at
    from public.artwork_reports
    group by artwork_id
  ) r on r.artwork_id = a.id;

grant select on public.artwork_moderation_queue to service_role;
