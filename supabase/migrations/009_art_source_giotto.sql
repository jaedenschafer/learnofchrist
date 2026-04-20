-- Add 'giotto' (Giotto di Bondone) to the art_source enum so we can
-- categorize his Scrovegni / Arena Chapel fresco cycle (Padua, 1303–1305):
-- 39 narrative panels + Last Judgment on the west wall.

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'giotto';
