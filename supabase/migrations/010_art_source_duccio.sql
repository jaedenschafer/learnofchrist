-- Add 'duccio' (Duccio di Buoninsegna) to the art_source enum so we can
-- categorize his Maestà altarpiece (Siena Cathedral, 1308–1311): ~57
-- narrative panels across the Madonna's central panel, predella, and
-- front/back narrative registers.

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'duccio';
