-- Add 'rubens' (Peter Paul Rubens) to the art_source enum so we can
-- categorize his biblical works: the Antwerp Cathedral triptychs
-- (Raising of the Cross 1611, Descent from the Cross 1614, Assumption),
-- the Massacre of the Innocents, Samson and Delilah, the Chiesa Nuova
-- altarpiece, Daniel in the Lions' Den, and roughly three dozen other
-- Old and New Testament canvases.

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'rubens';
