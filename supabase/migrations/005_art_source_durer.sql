-- Add 'durer' (Albrecht Dürer biblical cycles) to the art_source enum so we
-- can categorize his 85 woodcuts/engravings as a distinct source.
--
-- Wrapped in a DO block so re-running the migration is safe — PostgreSQL does
-- not support IF NOT EXISTS on ALTER TYPE ... ADD VALUE.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'art_source' AND e.enumlabel = 'durer'
  ) THEN
    ALTER TYPE art_source ADD VALUE 'durer';
  END IF;
END
$$;

-- Reclassify Dürer plates that were ingested as 'other_public_domain'
-- while this enum value did not exist. Match by artist_id — Dürer
-- filenames on Wikimedia are not uniformly prefixed (e.g. the Small
-- Passion title page starts with "Title page of the Small Passion..."),
-- so a LIKE on external_id misses stragglers.
UPDATE artworks
SET source = 'durer'
WHERE source = 'other_public_domain'
  AND artist_id = (
    SELECT id FROM artists WHERE slug = 'albrecht-durer'
  );
