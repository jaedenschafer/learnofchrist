-- ============================================================
-- Migration 057 — unified subscriptions + is_premium()
-- ============================================================
-- Single subscriptions table covering every revenue source:
--   • iOS / StoreKit 2          (platform = 'ios')
--   • Android / Google Play     (platform = 'android')
--   • Web / Stripe              (platform = 'web_stripe')
--
-- The receipt-validation Edge Function (subscription-receipt-validate)
-- is the only writer; clients never touch this table directly. RLS
-- gives the user read access to their own rows so the app can render
-- "Member since…" / "Renews on…" without a round trip through an RPC.
--
-- Premium gating goes through public.is_premium(uuid) which a feature
-- check can call from anywhere — RLS policies, RPCs, the web app, or
-- a trigger on a new feature table down the road.
-- ============================================================

create type subscription_platform as enum ('ios', 'android', 'web_stripe');
create type subscription_status as enum (
  'active',     -- paid through expires_at, auto-renew expected
  'in_grace',   -- payment failed, retry window per-platform
  'on_hold',    -- payment failed past grace, content blocked but resumable
  'paused',     -- Play Store voluntary pause
  'expired',    -- past expires_at with no renewal
  'canceled',   -- user-canceled, may still be active until expires_at
  'refunded'    -- platform-refunded; treat as never paid
);
create type subscription_environment as enum ('production', 'sandbox');

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,

  platform subscription_platform not null,
  product_id text not null,
  -- Apple: original_transaction_id ; Google: purchase_token ;
  -- Stripe: subscription_id. One per (platform, transaction).
  platform_transaction_id text not null,

  status subscription_status not null default 'active',
  environment subscription_environment not null default 'production',

  -- Time bounds. expires_at is the authoritative gate; renewed_at is
  -- bookkeeping for analytics.
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  auto_renew boolean not null default true,
  renewed_at timestamptz,
  canceled_at timestamptz,

  -- Last time the platform was queried (App Store / Play Developer API
  -- / Stripe). Use this to throttle re-validation in the Edge Function.
  last_verified_at timestamptz not null default now(),

  -- Full receipt payload from the platform. Audit trail for refunds and
  -- store-side reversals. Never sent to the client.
  raw jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (platform, platform_transaction_id)
);

create index subscriptions_user_active_idx
  on public.subscriptions (user_id, expires_at desc)
  where status in ('active', 'in_grace');

create index subscriptions_expiring_soon_idx
  on public.subscriptions (expires_at)
  where status = 'active' and auto_renew = true;

drop trigger if exists subscriptions_touch_updated_at on public.subscriptions;
create trigger subscriptions_touch_updated_at
  before update on public.subscriptions
  for each row execute function public.touch_updated_at();

-- ─── RLS ───
-- Owner read-only. Writes happen via the service role from the
-- receipt-validation Edge Function — service role bypasses RLS entirely
-- so we don't need explicit insert/update policies for it.
alter table public.subscriptions enable row level security;

drop policy if exists "subs_owner_read" on public.subscriptions;
create policy "subs_owner_read"
  on public.subscriptions for select
  using (auth.uid() = user_id);

grant select on public.subscriptions to authenticated;

-- ─── is_premium(user_id) ───
-- Returns true if the user has any subscription that is currently
-- entitled to premium content. Counts:
--   • status = 'active'   AND expires_at > now()   (or expires_at NULL)
--   • status = 'in_grace' AND expires_at > now() - interval '16 days'
-- Adjust the grace window per-platform here as we learn what each store
-- actually does.
create or replace function public.is_premium(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(
    select 1 from public.subscriptions s
    where s.user_id = p_user_id
      and (
        (s.status = 'active' and (s.expires_at is null or s.expires_at > now()))
        or (s.status = 'in_grace' and s.expires_at > now() - interval '16 days')
      )
  );
$$;

grant execute on function public.is_premium(uuid) to authenticated, anon;

comment on function public.is_premium(uuid) is
  'Returns true if the user has any subscription currently entitled to premium content. Used by RLS, RPCs, and feature flags.';

-- ─── Convenience: my_subscription() ───
-- Lets the app render "Renews June 1" without writing a where clause.
create or replace function public.my_subscription()
returns table (
  platform subscription_platform,
  product_id text,
  status subscription_status,
  expires_at timestamptz,
  auto_renew boolean
)
language sql
stable
security invoker
as $$
  select platform, product_id, status, expires_at, auto_renew
  from public.subscriptions
  where user_id = auth.uid()
    and status in ('active', 'in_grace', 'canceled')
  order by expires_at desc nulls last
  limit 1;
$$;

grant execute on function public.my_subscription() to authenticated;
