-- Add 'fra-angelico' (Fra Angelico, Guido di Pietro, Beato Angelico) to
-- the art_source enum so we can categorize his biblical works: the three
-- Annunciations (Prado, Cortona, San Marco corridor), the San Marco
-- dormitory cell frescoes (c.1438–1445), the Santa Trinita Deposition,
-- the Linaioli Tabernacle, the Armadio degli Argenti panels (c.1452),
-- and the Chapel of Nicholas V frescoes (1447–1449).

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'fra-angelico';
