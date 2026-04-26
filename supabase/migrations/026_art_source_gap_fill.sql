-- Add 'gap_fill' to the art_source enum. This source is a deliberately
-- heterogeneous bucket — each row carries its own artist, but they're
-- all curated together to fill chapter-coverage gaps (Khludov Psalter,
-- Utrecht Psalter, Sistine prophet panels, Florence Baptistery, Russian
-- prophet icons, plus one-offs like Holman Hunt's Scapegoat).

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'gap_fill';
