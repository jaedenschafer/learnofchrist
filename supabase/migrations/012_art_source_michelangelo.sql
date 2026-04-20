-- Add 'michelangelo' (Michelangelo Buonarroti) to the art_source enum so
-- we can categorize the Sistine Chapel ceiling (Genesis cycle, prophets,
-- sibyls, corner pendentives, 1508–1512), the Last Judgment (1536–1541),
-- and the Pauline Chapel frescoes (1542–1550).

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'michelangelo';
