-- Add six new per-artist art_source enum values for the next batch of
-- public-domain Wikimedia ingests:
--   - bloch       Carl Heinrich Bloch (Danish, 1834–1890)
--   - hofmann     Heinrich Hofmann (German, 1824–1911)
--   - bouguereau  William-Adolphe Bouguereau (French, 1825–1905)
--   - plockhorst  Bernhard Plockhorst (German, 1825–1907)
--   - rublev      Andrei Rublev (Russian, c. 1360s–1430)
--   - theophanes  Theophanes the Greek (Byzantine/Russian, c. 1340 – c. 1410)

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'bloch';
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'hofmann';
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'bouguereau';
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'plockhorst';
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'rublev';
ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'theophanes';
