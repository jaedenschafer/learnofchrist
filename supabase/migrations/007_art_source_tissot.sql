-- Add 'tissot' (James Tissot biblical cycles) to the art_source enum so we
-- can categorize his ~70 watercolors as a distinct source.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'art_source' AND e.enumlabel = 'tissot'
  ) THEN
    ALTER TYPE art_source ADD VALUE 'tissot';
  END IF;
END
$$;

-- Reclassify Tissot plates that were ingested as 'other_public_domain'
-- while this enum value did not exist. Match by artist_id since Tissot
-- Wikimedia filenames have no uniform prefix.
UPDATE artworks
SET source = 'tissot'
WHERE source = 'other_public_domain'
  AND artist_id = (
    SELECT id FROM artists WHERE slug = 'james-tissot'
  );
