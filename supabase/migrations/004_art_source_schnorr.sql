-- Add 'schnorr' (Julius Schnorr von Carolsfeld, Die Bibel in Bildern, 1860) to
-- the art_source enum so we can ingest his 235 woodcuts as a distinct source.
--
-- Wrapped in a DO block so re-running the migration is safe — PostgreSQL does
-- not support IF NOT EXISTS on ALTER TYPE ... ADD VALUE.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'art_source' AND e.enumlabel = 'schnorr'
  ) THEN
    ALTER TYPE art_source ADD VALUE 'schnorr';
  END IF;
END
$$;

-- Reclassify Schnorr von Carolsfeld plates that were ingested as
-- 'other_public_domain' while this enum value did not exist.
-- Safe no-op after the first run — the WHERE clause only matches rows
-- whose external_id starts with the Commons filename prefix used in
-- scripts/ingest-schnorr.mjs.
UPDATE artworks
SET source = 'schnorr'
WHERE source = 'other_public_domain'
  AND external_id LIKE 'Schnorr von Carolsfeld Bibel in Bildern 1860 %';
