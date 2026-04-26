-- Phase 7 cleanup — undo the false-positive bio attributions caused by
-- loose `name ILIKE '%X%'` patterns in 026/027/030/031.
--
-- Concrete cases this fixes:
--   * "Antonio Bosch" and "Fabrizio Boschi" picked up Hieronymus Bosch's bio
--     because the seed used `ILIKE '%bosch%'`.
--   * "Theodore of Caesarea" picked up Théodore Géricault's bio because the
--     seed used `ILIKE '%theodore%'`.
--   * "Frederick Moladore Spiegle" picked up Gustave Doré's bio because the
--     seed matched on a substring of his middle name.
--   * "Raffaellino da Reggio (Raffaello Motta)", "Raffaello Guidi", and
--     "Raffaello Schiaminossi" picked up Raphael Sanzio's bio because the
--     seed matched on `Raffaello`. These are distinct artists.
--
-- The fix nulls `bio_long` and clears `bio_sources` on the wrong rows so
-- the artist hub page falls back to noindex and shows no biography until
-- a correctly-attributed one is written. `notable_works` was already empty
-- on these rows, so no change there.

update public.artists
   set bio_long    = null,
       bio_sources = '[]'::jsonb
 where slug in (
   'antonio-bosch',
   'fabrizio-boschi',
   'theodore-of-caesarea',
   'frederick-moladore-spiegle',
   'raffaellino-da-reggio-raffaello-motta',
   'raffaello-guidi',
   'raffaello-schiaminossi'
 );
