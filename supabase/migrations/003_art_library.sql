-- ============================================================
-- Learn of Christ — Art Library
-- Public-domain Christian art indexed to scripture.
-- Seeded from Doré's 241 Bible engravings; extensible to Wikimedia,
-- the Met, Rijksmuseum, Web Gallery of Art, etc.
-- ============================================================

-- ==================
-- ENUMS
-- ==================

CREATE TYPE art_source AS ENUM (
  'wikimedia',
  'met_openaccess',
  'rijksmuseum',
  'web_gallery_of_art',
  'dore',
  'other_public_domain'
);

CREATE TYPE art_license AS ENUM (
  'public_domain',
  'cc0',
  'cc_by',
  'cc_by_sa'
);

-- ==================
-- ARTISTS
-- ==================

CREATE TABLE artists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,                    -- 'gustave-dore', 'rembrandt', 'caravaggio'
  name TEXT NOT NULL,                           -- 'Gustave Doré'
  birth_year INT,
  death_year INT,
  nationality TEXT,                             -- 'French', 'Dutch', etc.
  bio TEXT,                                     -- short bio for artist pages
  wikipedia_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_artists_slug ON artists (slug);

-- ==================
-- SCENES (conceptual tags: "Creation", "Nativity", "Crucifixion")
-- ==================

CREATE TABLE scenes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,                    -- 'creation', 'nativity', 'crucifixion'
  name TEXT NOT NULL,                           -- display name
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_scenes_slug ON scenes (slug);

-- ==================
-- ARTWORKS
-- ==================

CREATE TABLE artworks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,                    -- 'dore-creation-of-light', 'rembrandt-prodigal-son'
  title TEXT NOT NULL,                          -- 'The Creation of Light'
  artist_id UUID REFERENCES artists(id) ON DELETE SET NULL,
  year INT,                                     -- approximate creation year
  medium TEXT,                                  -- 'Wood engraving', 'Oil on canvas'
  source art_source NOT NULL,
  source_url TEXT,                              -- canonical source page
  external_id TEXT NOT NULL,                    -- e.g. Wikimedia filename, Met object ID — unique per source
  image_url TEXT NOT NULL,                      -- full-res image URL
  thumbnail_url TEXT,                           -- optional: pre-sized thumb
  width INT,                                    -- pixel width if known
  height INT,                                   -- pixel height if known
  license art_license NOT NULL DEFAULT 'public_domain',
  license_note TEXT,                            -- free-form credit line
  description TEXT,                             -- short caption / curator note
  status content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source, external_id)                  -- idempotent upsert key
);

CREATE INDEX idx_artworks_slug ON artworks (slug);
CREATE INDEX idx_artworks_artist ON artworks (artist_id);
CREATE INDEX idx_artworks_source ON artworks (source);

-- Full-text search on title + description for /art search box.
CREATE INDEX idx_artworks_fts ON artworks
  USING gin (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '')));

-- ==================
-- ARTWORK <-> SCRIPTURE (many-to-many)
-- One artwork can depict multiple passages; a passage has many artworks.
-- ==================

CREATE TABLE artwork_scripture_refs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id UUID NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  chapter INT NOT NULL,
  verse_start INT,                              -- NULL = whole chapter
  verse_end INT,                                -- NULL = single verse or whole chapter
  is_primary BOOLEAN NOT NULL DEFAULT false,    -- primary reference for this artwork
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (artwork_id, book_id, chapter, verse_start, verse_end)
);

-- Fast lookup: "give me all artworks for Genesis 1" — the core query path
-- behind the study-guide art slot and /art/book/[slug]/[chapter].
CREATE INDEX idx_artwork_refs_chapter ON artwork_scripture_refs (book_id, chapter, is_primary DESC);
CREATE INDEX idx_artwork_refs_artwork ON artwork_scripture_refs (artwork_id);

-- ==================
-- ARTWORK <-> SCENE (many-to-many)
-- ==================

CREATE TABLE artwork_scenes (
  artwork_id UUID NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  scene_id UUID NOT NULL REFERENCES scenes(id) ON DELETE CASCADE,
  PRIMARY KEY (artwork_id, scene_id)
);

CREATE INDEX idx_artwork_scenes_scene ON artwork_scenes (scene_id);

-- ==================
-- TRIGGERS
-- ==================

CREATE TRIGGER trg_artists_updated BEFORE UPDATE ON artists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_artworks_updated BEFORE UPDATE ON artworks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ==================
-- ROW LEVEL SECURITY
-- ==================

ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE scenes ENABLE ROW LEVEL SECURITY;
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_scripture_refs ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_scenes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON artists FOR SELECT USING (true);
CREATE POLICY "Public read" ON scenes FOR SELECT USING (true);
CREATE POLICY "Public read" ON artworks FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON artwork_scripture_refs FOR SELECT USING (true);
CREATE POLICY "Public read" ON artwork_scenes FOR SELECT USING (true);
