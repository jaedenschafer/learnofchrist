-- Add 'rembrandt' (Rembrandt van Rijn biblical paintings and etchings) to the
-- art_source enum so we can categorize his ~52 works as a distinct source.
--
-- Wrapped in a DO block so re-running the migration is safe — PostgreSQL does
-- not support IF NOT EXISTS on ALTER TYPE ... ADD VALUE.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'art_source' AND e.enumlabel = 'rembrandt'
  ) THEN
    ALTER TYPE art_source ADD VALUE 'rembrandt';
  END IF;
END
$$;

-- Reclassify Rembrandt plates that were ingested as 'other_public_domain'
-- while this enum value did not exist. Rembrandt wikimedia filenames are not
-- uniformly prefixed (unlike Schnorr/Dürer), so match by artist_id instead.
UPDATE artworks
SET source = 'rembrandt'
WHERE source = 'other_public_domain'
  AND artist_id = (
    SELECT id FROM artists WHERE slug = 'rembrandt-van-rijn'
  );
