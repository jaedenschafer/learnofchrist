-- Add 'blake' (William Blake) to the art_source enum so we can categorize
-- his Book of Job engraving cycle plus standalone biblical paintings.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'art_source' AND e.enumlabel = 'blake'
  ) THEN
    ALTER TYPE art_source ADD VALUE 'blake';
  END IF;
END
$$;
