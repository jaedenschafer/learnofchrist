-- Audit cleanup — phase 13 spot-check found one residual false-positive
-- attribution that 032 hadn't fully addressed.
--
-- Antonio Bosch was nulled-out in migration 032 (he had been mis-attributed
-- Hieronymus Bosch's bio in the early ILIKE phase). But notable_works
-- migration 037 used `where slug in ('hieronymus-bosch', 'antonio-bosch')`
-- to assign the same notable_works array to both slugs, so Antonio Bosch
-- received three Bosch-school notable_works essays that don't apply to him.
--
-- This migration nulls his notable_works back to an empty array.

update public.artists
   set notable_works = '[]'::jsonb
 where slug = 'antonio-bosch';
