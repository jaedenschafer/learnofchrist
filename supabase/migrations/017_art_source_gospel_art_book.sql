-- Add gospel_art_book to art_source enum.
-- Sources plates from churchofjesuschrist.org Gospel Art Book (Old + New
-- Testament collections), filtered to only items whose licensing line
-- permits reuse (creditLine '© 2026 ipCode0' or Public Domain).
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'gospel_art_book';
