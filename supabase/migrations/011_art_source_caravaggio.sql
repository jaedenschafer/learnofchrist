-- Add 'caravaggio' (Michelangelo Merisi da Caravaggio) to the art_source
-- enum so we can categorize his biblical canvases painted between c.1594
-- and 1610 — roughly 30 canonical works spanning the Gospels, Acts, the
-- David/Goliath cycle, and the Judith apocrypha.

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'caravaggio';
