-- ============================================================
-- Learn of Christ — Initial Database Schema
-- Layered Content Architecture: Verse + Commentary + Depth
-- ============================================================

-- ==================
-- ENUMS
-- ==================

CREATE TYPE translation_source AS ENUM ('public_domain', 'api', 'licensed');
CREATE TYPE testament AS ENUM ('old', 'new');
CREATE TYPE section_type AS ENUM ('universal', 'verse_block', 'commentary');
CREATE TYPE theological_lens AS ENUM ('universal', 'lds', 'reformed', 'catholic', 'messianic', 'historical', 'orthodox');
CREATE TYPE study_depth AS ENUM ('basic', 'standard', 'deep');
CREATE TYPE content_status AS ENUM ('draft', 'review', 'published');

-- ==================
-- BIBLE STRUCTURE
-- ==================

-- Bible translations available in the system
CREATE TABLE translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  abbreviation TEXT NOT NULL UNIQUE,       -- 'kjv', 'niv', 'esv', 'jst', etc.
  name TEXT NOT NULL,                       -- 'King James Version'
  source_type translation_source NOT NULL DEFAULT 'public_domain',
  api_id TEXT,                              -- external API identifier (for API.Bible etc.)
  language TEXT NOT NULL DEFAULT 'en',
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- All 66 Bible books
CREATE TABLE books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,                -- 'Genesis', 'Exodus', etc.
  slug TEXT NOT NULL UNIQUE,                -- 'genesis', 'exodus', etc.
  abbreviation TEXT NOT NULL,               -- 'Gen', 'Exod', etc.
  testament testament NOT NULL,
  total_chapters INT NOT NULL,
  sort_order INT NOT NULL,                  -- canonical order (1-66)
  description TEXT,                         -- brief book description
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bible verses — one row per verse per translation
CREATE TABLE verses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  translation_id UUID NOT NULL REFERENCES translations(id) ON DELETE CASCADE,
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  chapter INT NOT NULL,
  verse_number INT NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (translation_id, book_id, chapter, verse_number)
);

-- Index for fast verse lookups by reference + translation
CREATE INDEX idx_verses_lookup ON verses (book_id, chapter, verse_number, translation_id);
CREATE INDEX idx_verses_chapter ON verses (book_id, chapter, translation_id);

-- ==================
-- STUDY GUIDES (Layered Content)
-- ==================

-- One study guide per chapter
CREATE TABLE study_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  chapter INT NOT NULL,
  status content_status NOT NULL DEFAULT 'draft',
  seo_title TEXT,                           -- custom SEO title override
  seo_description TEXT,                     -- custom meta description
  key_verse_ref TEXT,                       -- e.g. 'Gen 1:1' — rendered via translation switcher
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  published_at TIMESTAMPTZ,
  UNIQUE (book_id, chapter)
);

CREATE INDEX idx_study_guides_book ON study_guides (book_id, chapter);

-- Sections within a study guide (ordered)
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_id UUID NOT NULL REFERENCES study_guides(id) ON DELETE CASCADE,
  sort_order INT NOT NULL,
  section_type section_type NOT NULL,       -- 'universal', 'verse_block', 'commentary'
  title TEXT,                               -- section heading
  slug TEXT,                                -- e.g. 'overview', 'key-themes', 'verses-1-5'
  verse_ref_start TEXT,                     -- for verse_block: e.g. 'Gen 1:1'
  verse_ref_end TEXT,                       -- for verse_block: e.g. 'Gen 1:5'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sections_guide ON sections (guide_id, sort_order);

-- Commentary blocks — the swappable content by lens + depth
-- For 'universal' sections, there's one block with lens='universal'
-- For 'commentary' sections, there's one block per lens per depth
CREATE TABLE commentary_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  lens theological_lens NOT NULL DEFAULT 'universal',
  depth study_depth NOT NULL DEFAULT 'standard',
  content TEXT NOT NULL,                    -- markdown with {{verse:Gen 1:1}} template tags
  sources JSONB DEFAULT '[]',              -- array of citation objects [{title, author, url}]
  status content_status NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (section_id, lens, depth)
);

CREATE INDEX idx_commentary_lookup ON commentary_blocks (section_id, lens, depth);

-- ==================
-- CROSS-REFERENCES & WORD STUDIES
-- ==================

-- Cross-references between verses (Treasury of Scripture Knowledge + tradition-specific)
CREATE TABLE cross_references (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_book_id UUID NOT NULL REFERENCES books(id),
  source_chapter INT NOT NULL,
  source_verse INT NOT NULL,
  target_book_id UUID NOT NULL REFERENCES books(id),
  target_chapter INT NOT NULL,
  target_verse_start INT NOT NULL,
  target_verse_end INT,                     -- null if single verse
  relationship_type TEXT DEFAULT 'reference', -- 'reference', 'quote', 'allusion', 'parallel', 'prophecy_fulfillment'
  tradition theological_lens,               -- null = universal, or lens-specific cross-ref
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_crossref_source ON cross_references (source_book_id, source_chapter, source_verse);
CREATE INDEX idx_crossref_target ON cross_references (target_book_id, target_chapter, target_verse_start);

-- Word studies (Strong's Concordance data)
CREATE TABLE word_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  strongs_number TEXT NOT NULL UNIQUE,      -- e.g. 'H430' (Hebrew) or 'G2316' (Greek)
  language TEXT NOT NULL,                   -- 'hebrew' or 'greek'
  original_word TEXT NOT NULL,              -- the word in original language
  transliteration TEXT,                     -- romanized form
  root TEXT,                                -- root word
  definition TEXT NOT NULL,                 -- full definition
  short_definition TEXT,                    -- one-line definition
  usage_count INT DEFAULT 0,               -- how many times in Bible
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- How a word is translated differently across translations
CREATE TABLE word_translation_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  word_study_id UUID NOT NULL REFERENCES word_studies(id) ON DELETE CASCADE,
  translation_id UUID NOT NULL REFERENCES translations(id) ON DELETE CASCADE,
  rendered_word TEXT NOT NULL,              -- e.g. 'firmament' (KJV) or 'vault' (NIV)
  book_id UUID REFERENCES books(id),
  chapter INT,
  verse_number INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_word_variants ON word_translation_variants (word_study_id, translation_id);

-- ==================
-- TOPICS, QUESTIONS, BLOG
-- ==================

-- Topical scripture pages (e.g., /topics/faith)
CREATE TABLE topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,                      -- 'Faith'
  slug TEXT NOT NULL UNIQUE,                -- 'faith'
  description TEXT,
  key_verse_ref TEXT,                       -- template tag verse reference
  content TEXT,                             -- markdown body
  seo_title TEXT,
  seo_description TEXT,
  status content_status NOT NULL DEFAULT 'draft',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Questions / FAQ pages (e.g., /questions/who-is-jesus-christ)
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,                   -- 'Who is Jesus Christ?'
  slug TEXT NOT NULL UNIQUE,                -- 'who-is-jesus-christ'
  short_answer TEXT,                        -- 2-3 sentence featured snippet answer
  full_answer TEXT,                         -- full markdown body
  seo_title TEXT,
  seo_description TEXT,
  status content_status NOT NULL DEFAULT 'draft',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,                             -- preview text
  content TEXT NOT NULL,                    -- full markdown body
  featured_image_url TEXT,
  seo_title TEXT,
  seo_description TEXT,
  status content_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Study plans
CREATE TABLE study_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,                      -- 'Read the Bible in a Year'
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  duration_days INT,                        -- e.g. 365
  difficulty TEXT DEFAULT 'beginner',       -- 'beginner', 'intermediate', 'advanced'
  status content_status NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Individual days/steps within a study plan
CREATE TABLE study_plan_days (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL REFERENCES study_plans(id) ON DELETE CASCADE,
  day_number INT NOT NULL,
  title TEXT,
  reading_refs TEXT[],                      -- array of verse references: ['Gen 1', 'Gen 2', 'Ps 1']
  description TEXT,
  UNIQUE (plan_id, day_number)
);

-- ==================
-- CONTENT RELATIONSHIPS (many-to-many)
-- ==================

-- Link topics to study guides
CREATE TABLE guide_topics (
  guide_id UUID NOT NULL REFERENCES study_guides(id) ON DELETE CASCADE,
  topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  PRIMARY KEY (guide_id, topic_id)
);

-- Link questions to study guides
CREATE TABLE guide_questions (
  guide_id UUID NOT NULL REFERENCES study_guides(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  PRIMARY KEY (guide_id, question_id)
);

-- Link topics to blog posts
CREATE TABLE blog_topics (
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, topic_id)
);

-- ==================
-- USER ACCOUNTS & PERSONALIZATION
-- ==================

-- User profiles (linked to auth provider like Clerk)
CREATE TABLE profiles (
  id UUID PRIMARY KEY,                      -- matches auth provider user ID
  display_name TEXT,
  email TEXT,
  preferred_translation TEXT DEFAULT 'kjv', -- abbreviation from translations table
  preferred_lens theological_lens DEFAULT 'universal',
  preferred_depth study_depth DEFAULT 'standard',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- User highlights on verses
CREATE TABLE user_highlights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  book_id UUID NOT NULL REFERENCES books(id),
  chapter INT NOT NULL,
  verse_start INT NOT NULL,
  verse_end INT,                            -- null if single verse
  color TEXT DEFAULT 'yellow',              -- highlight color
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_highlights_user ON user_highlights (user_id, book_id, chapter);

-- User notes / journal entries
CREATE TABLE user_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  book_id UUID REFERENCES books(id),        -- optional: attached to a specific passage
  chapter INT,
  verse_start INT,
  verse_end INT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_notes_user ON user_notes (user_id, book_id, chapter);

-- User bookmarks
CREATE TABLE user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  page_type TEXT NOT NULL,                  -- 'study_guide', 'topic', 'question', 'blog', 'verse'
  page_id UUID NOT NULL,                    -- reference to the bookmarked item
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, page_type, page_id)
);

-- User study plan progress
CREATE TABLE user_plan_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES study_plans(id) ON DELETE CASCADE,
  current_day INT NOT NULL DEFAULT 1,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_completed_at TIMESTAMPTZ,
  UNIQUE (user_id, plan_id)
);

-- Study streak tracking
CREATE TABLE user_streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  minutes_studied INT DEFAULT 0,
  chapters_read INT DEFAULT 0,
  UNIQUE (user_id, date)
);

CREATE INDEX idx_streaks_user ON user_streaks (user_id, date DESC);

-- ==================
-- HELPER FUNCTIONS
-- ==================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER trg_translations_updated BEFORE UPDATE ON translations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_study_guides_updated BEFORE UPDATE ON study_guides FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_sections_updated BEFORE UPDATE ON sections FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_commentary_updated BEFORE UPDATE ON commentary_blocks FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_topics_updated BEFORE UPDATE ON topics FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_questions_updated BEFORE UPDATE ON questions FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_blog_posts_updated BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_study_plans_updated BEFORE UPDATE ON study_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_user_notes_updated BEFORE UPDATE ON user_notes FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ==================
-- ROW LEVEL SECURITY
-- ==================

-- Enable RLS on user tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_plan_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;

-- Public read access for content tables
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE commentary_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE cross_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE word_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plan_days ENABLE ROW LEVEL SECURITY;

-- Content tables: anyone can read published content
CREATE POLICY "Public read" ON translations FOR SELECT USING (true);
CREATE POLICY "Public read" ON books FOR SELECT USING (true);
CREATE POLICY "Public read" ON verses FOR SELECT USING (true);
CREATE POLICY "Public read" ON study_guides FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON sections FOR SELECT USING (true);
CREATE POLICY "Public read" ON commentary_blocks FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON cross_references FOR SELECT USING (true);
CREATE POLICY "Public read" ON word_studies FOR SELECT USING (true);
CREATE POLICY "Public read" ON topics FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON questions FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON study_plans FOR SELECT USING (status = 'published');
CREATE POLICY "Public read" ON study_plan_days FOR SELECT USING (true);

-- User tables: users can only access their own data
CREATE POLICY "Users own data" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users own data" ON user_highlights FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users own data" ON user_notes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users own data" ON user_bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users own data" ON user_plan_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users own data" ON user_streaks FOR ALL USING (auth.uid() = user_id);
