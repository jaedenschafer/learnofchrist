-- ============================================================
-- Seed: Bible Translations + All 66 Books
-- ============================================================

-- ==================
-- TRANSLATIONS
-- ==================

INSERT INTO translations (abbreviation, name, source_type, language, is_active, sort_order) VALUES
  ('kjv',  'King James Version',           'public_domain', 'en', true, 1),
  ('asv',  'American Standard Version',    'public_domain', 'en', true, 2),
  ('web',  'World English Bible',          'public_domain', 'en', true, 3),
  ('jst',  'Joseph Smith Translation',     'public_domain', 'en', true, 4),
  ('niv',  'New International Version',    'api',           'en', false, 5),
  ('esv',  'English Standard Version',     'api',           'en', false, 6),
  ('nlt',  'New Living Translation',       'api',           'en', false, 7),
  ('nasb', 'New American Standard Bible',  'api',           'en', false, 8);

-- ==================
-- OLD TESTAMENT BOOKS (39)
-- ==================

INSERT INTO books (name, slug, abbreviation, testament, total_chapters, sort_order, description) VALUES
  ('Genesis',        'genesis',        'Gen',   'old', 50, 1,  'The book of beginnings — creation, the fall, the flood, and the patriarchs Abraham, Isaac, Jacob, and Joseph.'),
  ('Exodus',         'exodus',         'Exod',  'old', 40, 2,  'God delivers Israel from Egypt through Moses, gives the Law at Sinai, and establishes the tabernacle.'),
  ('Leviticus',      'leviticus',      'Lev',   'old', 27, 3,  'Laws for worship, sacrifice, and holiness — God''s instructions for a people set apart.'),
  ('Numbers',        'numbers',        'Num',   'old', 36, 4,  'Israel''s wilderness journey — census, rebellion, and God''s faithfulness through 40 years of wandering.'),
  ('Deuteronomy',    'deuteronomy',    'Deut',  'old', 34, 5,  'Moses'' farewell speeches — a retelling of the Law and a call to covenant faithfulness before entering the promised land.'),
  ('Joshua',         'joshua',         'Josh',  'old', 24, 6,  'Israel conquers and settles the promised land under Joshua''s leadership.'),
  ('Judges',         'judges',         'Judg',  'old', 21, 7,  'A cycle of sin, oppression, and deliverance through judges raised up by God.'),
  ('Ruth',           'ruth',           'Ruth',  'old', 4,  8,  'A story of loyalty and redemption — Ruth''s faithfulness and her place in the lineage of Christ.'),
  ('1 Samuel',       '1-samuel',       '1 Sam', 'old', 31, 9,  'The transition from judges to kings — Samuel, Saul, and the rise of David.'),
  ('2 Samuel',       '2-samuel',       '2 Sam', 'old', 24, 10, 'David''s reign as king — his triumphs, sins, and the consequences that follow.'),
  ('1 Kings',        '1-kings',        '1 Kgs', 'old', 22, 11, 'Solomon''s glory and the divided kingdom — the rise and fall of Israel''s monarchs.'),
  ('2 Kings',        '2-kings',        '2 Kgs', 'old', 25, 12, 'The decline of both kingdoms and the exile — prophets warn but the nations fall.'),
  ('1 Chronicles',   '1-chronicles',   '1 Chr', 'old', 29, 13, 'Israel''s history retold from a priestly perspective — genealogies through David''s reign.'),
  ('2 Chronicles',   '2-chronicles',   '2 Chr', 'old', 36, 14, 'The temple, the kings of Judah, and the exile — told through the lens of worship and faithfulness.'),
  ('Ezra',           'ezra',           'Ezra',  'old', 10, 15, 'The return from exile and the rebuilding of the temple — restoration begins.'),
  ('Nehemiah',       'nehemiah',       'Neh',   'old', 13, 16, 'Nehemiah rebuilds Jerusalem''s walls and the people renew their covenant with God.'),
  ('Esther',         'esther',         'Esth',  'old', 10, 17, 'A Jewish queen saves her people from destruction — God''s providence behind the scenes.'),
  ('Job',            'job',            'Job',   'old', 42, 18, 'The problem of suffering — a righteous man''s dialogue with God through profound loss.'),
  ('Psalms',         'psalms',         'Ps',    'old', 150, 19, 'Israel''s songbook — prayers, praises, and laments that express every human emotion before God.'),
  ('Proverbs',       'proverbs',       'Prov',  'old', 31, 20, 'Practical wisdom for daily life — how to live skillfully in God''s world.'),
  ('Ecclesiastes',   'ecclesiastes',   'Eccl',  'old', 12, 21, 'The search for meaning — "vanity of vanities" and the conclusion to fear God.'),
  ('Song of Solomon','song-of-solomon','Song',  'old', 8,  22, 'A love poem celebrating the beauty of romantic love — often read as an allegory of God''s love.'),
  ('Isaiah',         'isaiah',         'Isa',   'old', 66, 23, 'The prophet of redemption — judgment, comfort, and the most detailed messianic prophecies in scripture.'),
  ('Jeremiah',       'jeremiah',       'Jer',   'old', 52, 24, 'The weeping prophet calls Judah to repentance before the Babylonian exile.'),
  ('Lamentations',   'lamentations',   'Lam',   'old', 5,  25, 'Poems of grief over Jerusalem''s destruction — yet God''s mercies are new every morning.'),
  ('Ezekiel',        'ezekiel',        'Ezek',  'old', 48, 26, 'Visions of God''s glory, judgment on Israel, and the promise of restoration and a new temple.'),
  ('Daniel',         'daniel',         'Dan',   'old', 12, 27, 'Faithfulness in exile — Daniel''s courage and apocalyptic visions of God''s kingdom.'),
  ('Hosea',          'hosea',          'Hos',   'old', 14, 28, 'God''s unfailing love portrayed through a prophet''s marriage to an unfaithful wife.'),
  ('Joel',           'joel',           'Joel',  'old', 3,  29, 'A locust plague prompts a call to repentance and a promise of the Spirit''s outpouring.'),
  ('Amos',           'amos',           'Amos',  'old', 9,  30, 'A shepherd-prophet confronts social injustice and calls Israel to true worship.'),
  ('Obadiah',        'obadiah',        'Obad',  'old', 1,  31, 'The shortest Old Testament book — judgment on Edom for betraying Israel.'),
  ('Jonah',          'jonah',          'Jonah', 'old', 4,  32, 'A reluctant prophet, a great fish, and God''s mercy extending even to Israel''s enemies.'),
  ('Micah',          'micah',          'Mic',   'old', 7,  33, 'Justice, mercy, and humility — Micah prophesies the Messiah''s birth in Bethlehem.'),
  ('Nahum',          'nahum',          'Nah',   'old', 3,  34, 'God''s judgment on Nineveh — a century after Jonah, the city falls.'),
  ('Habakkuk',       'habakkuk',       'Hab',   'old', 3,  35, 'A prophet questions God''s justice and learns to live by faith.'),
  ('Zephaniah',      'zephaniah',      'Zeph',  'old', 3,  36, 'The Day of the Lord — judgment followed by restoration and joy.'),
  ('Haggai',         'haggai',         'Hag',   'old', 2,  37, 'A call to rebuild the temple after the exile — priorities matter.'),
  ('Zechariah',      'zechariah',      'Zech',  'old', 14, 38, 'Apocalyptic visions and messianic prophecies — pointing to Christ''s coming.'),
  ('Malachi',        'malachi',        'Mal',   'old', 4,  39, 'The last Old Testament prophet challenges Israel''s complacency and promises Elijah''s return.'),

-- ==================
-- NEW TESTAMENT BOOKS (27)
-- ==================

  ('Matthew',        'matthew',        'Matt',  'new', 28, 40, 'Jesus as the promised Messiah-King — written for a Jewish audience with abundant Old Testament connections.'),
  ('Mark',           'mark',           'Mark',  'new', 16, 41, 'The action-packed Gospel — Jesus as the suffering servant, told with urgency and power.'),
  ('Luke',           'luke',           'Luke',  'new', 24, 42, 'The most detailed Gospel — Jesus as the compassionate Savior of all people.'),
  ('John',           'john',           'John',  'new', 21, 43, 'The theological Gospel — Jesus as the divine Word made flesh, full of "I Am" statements and signs.'),
  ('Acts',           'acts',           'Acts',  'new', 28, 44, 'The birth and spread of the early church — from Jerusalem to Rome, empowered by the Holy Spirit.'),
  ('Romans',         'romans',         'Rom',   'new', 16, 45, 'Paul''s masterwork on salvation — justification by faith, life in the Spirit, and God''s plan for all.'),
  ('1 Corinthians',  '1-corinthians',  '1 Cor', 'new', 16, 46, 'Paul addresses divisions, immorality, and spiritual gifts in the church at Corinth.'),
  ('2 Corinthians',  '2-corinthians',  '2 Cor', 'new', 13, 47, 'Paul defends his ministry and teaches about weakness, generosity, and new creation.'),
  ('Galatians',      'galatians',      'Gal',   'new', 6,  48, 'Freedom in Christ — Paul confronts legalism and proclaims justification by faith alone.'),
  ('Ephesians',      'ephesians',      'Eph',   'new', 6,  49, 'God''s eternal purpose — the church as Christ''s body, unity, and spiritual warfare.'),
  ('Philippians',    'philippians',    'Phil',  'new', 4,  50, 'Joy in all circumstances — Paul writes from prison about contentment and Christ''s humility.'),
  ('Colossians',     'colossians',     'Col',   'new', 4,  51, 'The supremacy of Christ over all things — fullness found in Him alone.'),
  ('1 Thessalonians','1-thessalonians','1 Thess','new', 5, 52, 'Encouragement for a young church — faith, love, and hope in Christ''s return.'),
  ('2 Thessalonians','2-thessalonians','2 Thess','new', 3, 53, 'Clarifying the Day of the Lord and the call to stand firm.'),
  ('1 Timothy',      '1-timothy',      '1 Tim', 'new', 6,  54, 'Paul mentors Timothy on church leadership, sound doctrine, and godly living.'),
  ('2 Timothy',      '2-timothy',      '2 Tim', 'new', 4,  55, 'Paul''s final letter — a charge to endure, preach the Word, and finish well.'),
  ('Titus',          'titus',          'Titus', 'new', 3,  56, 'Instructions for church order in Crete — sound doctrine and good works.'),
  ('Philemon',       'philemon',       'Phlm',  'new', 1,  57, 'A personal letter about forgiveness — Paul appeals for a runaway slave.'),
  ('Hebrews',        'hebrews',        'Heb',   'new', 13, 58, 'Christ is greater — better than angels, Moses, and the old covenant. A call to persevering faith.'),
  ('James',          'james',          'Jas',   'new', 5,  59, 'Faith in action — practical wisdom on trials, speech, wealth, and prayer.'),
  ('1 Peter',        '1-peter',        '1 Pet', 'new', 5,  60, 'Hope through suffering — living as strangers in a hostile world.'),
  ('2 Peter',        '2-peter',        '2 Pet', 'new', 3,  61, 'Guarding against false teachers and growing in knowledge of Christ.'),
  ('1 John',         '1-john',         '1 John','new', 5,  62, 'Walking in the light — love, truth, and assurance of salvation.'),
  ('2 John',         '2-john',         '2 John','new', 1,  63, 'A brief letter on truth and love — beware of deceivers.'),
  ('3 John',         '3-john',         '3 John','new', 1,  64, 'A commendation of hospitality and a warning against prideful leadership.'),
  ('Jude',           'jude',           'Jude',  'new', 1,  65, 'Contending for the faith against false teachers who distort God''s grace.'),
  ('Revelation',     'revelation',     'Rev',   'new', 22, 66, 'The apocalyptic vision — the Lamb conquers, Babylon falls, and God makes all things new.');
