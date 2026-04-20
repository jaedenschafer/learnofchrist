-- Add 'raphael' (Raffaello Sanzio da Urbino) to the art_source enum so we
-- can categorize his biblical works: the Stanze frescoes (Vatican Palace,
-- 1509–1514), the Sistine tapestry cartoons (1515–1516), the Transfiguration
-- (1520), and roughly a dozen Madonnas and altarpieces.

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'raphael';
