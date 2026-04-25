-- artists_with_art()
--
-- Aggregates approved + published artworks by artist so the /art directory
-- can render the artist filter without streaming every artwork row to the
-- Next.js process. Replaces the prior client-side group-by-and-count.

create or replace function public.artists_with_art()
returns table (
  id uuid,
  slug text,
  name text,
  count bigint
)
language sql
stable
as $$
  select a.id, a.slug, a.name, count(art.id) as count
  from public.artists a
  join public.artworks art on art.artist_id = a.id
  where art.status = 'published'
    and art.moderation_status = 'approved'
  group by a.id, a.slug, a.name
  order by a.name asc;
$$;

grant execute on function public.artists_with_art() to anon, authenticated, service_role;
