-- Adds an admin flag to profiles so the admin moderation UI can authorize
-- by signed-in user instead of a pasted ADMIN_API_KEY.
--
-- Granting admin happens manually in SQL editor:
--   update public.profiles set is_admin = true where id = '<uuid>';

alter table public.profiles
  add column if not exists is_admin boolean not null default false;

-- Helper that returns whether the *currently authenticated* user is an admin.
-- Used by RLS policies and by Next.js server code via supabase.rpc('is_current_user_admin').
create or replace function public.is_current_user_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select is_admin from public.profiles where id = auth.uid()),
    false
  );
$$;

grant execute on function public.is_current_user_admin() to anon, authenticated, service_role;
