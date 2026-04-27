export interface BibleBook {
  id: string;
  name: string;
  testament: 'old' | 'new' | 'apocrypha' | 'orthodox';
  chapters: number;
  description: string;
  abbreviation: string;
}

export const bibleBooks: BibleBook[] = [
  // Old Testament - Law
  { id: '1', name: 'Genesis', testament: 'old', chapters: 50, abbreviation: 'Gen', description: 'The beginning of creation and God\'s covenant with Abraham.' },
  { id: '2', name: 'Exodus', testament: 'old', chapters: 40, abbreviation: 'Exo', description: 'The liberation of Israel from Egypt and the giving of the Law.' },
  { id: '3', name: 'Leviticus', testament: 'old', chapters: 27, abbreviation: 'Lev', description: 'The laws of sacrifice, cleanliness, and holiness for the Israelites.' },
  { id: '4', name: 'Numbers', testament: 'old', chapters: 36, abbreviation: 'Num', description: 'The wandering of Israel in the wilderness for 40 years.' },
  { id: '5', name: 'Deuteronomy', testament: 'old', chapters: 34, abbreviation: 'Deu', description: 'Moses\' final addresses reviewing the law and covenant.' },

  // Old Testament - History
  { id: '6', name: 'Joshua', testament: 'old', chapters: 24, abbreviation: 'Jos', description: 'The conquest of Canaan and division of the land.' },
  { id: '7', name: 'Judges', testament: 'old', chapters: 21, abbreviation: 'Jdg', description: 'The period of judges and cycles of faithfulness and apostasy.' },
  { id: '8', name: 'Ruth', testament: 'old', chapters: 4, abbreviation: 'Rut', description: 'A story of loyalty and redemption in the line of David.' },
  { id: '9', name: '1 Samuel', testament: 'old', chapters: 31, abbreviation: '1Sa', description: 'The life of Samuel and the rise of King David.' },
  { id: '10', name: '2 Samuel', testament: 'old', chapters: 24, abbreviation: '2Sa', description: 'David\'s reign as king and his victories and struggles.' },
  { id: '11', name: '1 Kings', testament: 'old', chapters: 22, abbreviation: '1Ki', description: 'The kingdom of Solomon and the division of the monarchy.' },
  { id: '12', name: '2 Kings', testament: 'old', chapters: 25, abbreviation: '2Ki', description: 'The history of the divided kingdoms and their fall.' },
  { id: '13', name: '1 Chronicles', testament: 'old', chapters: 29, abbreviation: '1Ch', description: 'A genealogical and historical account from Adam to David.' },
  { id: '14', name: '2 Chronicles', testament: 'old', chapters: 36, abbreviation: '2Ch', description: 'The history of Judah\'s kingdom and restoration.' },
  { id: '15', name: 'Ezra', testament: 'old', chapters: 10, abbreviation: 'Ezr', description: 'The return of the exiles and rebuilding of the temple.' },
  { id: '16', name: 'Nehemiah', testament: 'old', chapters: 13, abbreviation: 'Neh', description: 'The rebuilding of Jerusalem\'s walls and spiritual renewal.' },
  { id: '17', name: 'Esther', testament: 'old', chapters: 10, abbreviation: 'Est', description: 'God\'s providential protection of the Jews in Persia.' },

  // Old Testament - Poetry
  { id: '18', name: 'Job', testament: 'old', chapters: 42, abbreviation: 'Job', description: 'A meditation on suffering and the nature of God\'s justice.' },
  { id: '19', name: 'Psalms', testament: 'old', chapters: 150, abbreviation: 'Psa', description: 'Songs and prayers expressing trust, praise, and lament.' },
  { id: '20', name: 'Proverbs', testament: 'old', chapters: 31, abbreviation: 'Pro', description: 'Wise sayings for living a righteous and prudent life.' },
  { id: '21', name: 'Ecclesiastes', testament: 'old', chapters: 12, abbreviation: 'Ecc', description: 'A meditation on the meaninglessness of life without God.' },
  { id: '22', name: 'Song of Solomon', testament: 'old', chapters: 8, abbreviation: 'Son', description: 'A poetic celebration of love and desire.' },

  // Old Testament - Prophecy
  { id: '23', name: 'Isaiah', testament: 'old', chapters: 66, abbreviation: 'Isa', description: 'Prophecies of judgment and restoration, pointing to the Messiah.' },
  { id: '24', name: 'Jeremiah', testament: 'old', chapters: 52, abbreviation: 'Jer', description: 'Prophecies of destruction and hope amid Israel\'s exile.' },
  { id: '25', name: 'Lamentations', testament: 'old', chapters: 5, abbreviation: 'Lam', description: 'Laments over Jerusalem\'s destruction and hope for restoration.' },
  { id: '26', name: 'Ezekiel', testament: 'old', chapters: 48, abbreviation: 'Eze', description: 'Visions and prophecies of judgment and restoration.' },
  { id: '27', name: 'Daniel', testament: 'old', chapters: 12, abbreviation: 'Dan', description: 'Stories and prophecies during the Babylonian exile.' },
  { id: '28', name: 'Hosea', testament: 'old', chapters: 14, abbreviation: 'Hos', description: 'God\'s love through Hosea\'s marriage to Gomer.' },
  { id: '29', name: 'Joel', testament: 'old', chapters: 3, abbreviation: 'Joe', description: 'The Day of the Lord and the outpouring of the Spirit.' },
  { id: '30', name: 'Amos', testament: 'old', chapters: 9, abbreviation: 'Amo', description: 'Judgment against Israel for injustice and idolatry.' },
  { id: '31', name: 'Obadiah', testament: 'old', chapters: 1, abbreviation: 'Oba', description: 'Judgment against Edom and Israel\'s vindication.' },
  { id: '32', name: 'Jonah', testament: 'old', chapters: 4, abbreviation: 'Jon', description: 'God\'s mercy extended to the repentant people of Nineveh.' },
  { id: '33', name: 'Micah', testament: 'old', chapters: 7, abbreviation: 'Mic', description: 'Judgment and restoration, with prophecy of the Messiah.' },
  { id: '34', name: 'Nahum', testament: 'old', chapters: 3, abbreviation: 'Nah', description: 'The judgment of God against Nineveh.' },
  { id: '35', name: 'Habakkuk', testament: 'old', chapters: 3, abbreviation: 'Hab', description: 'Questions about injustice and faith in God\'s justice.' },
  { id: '36', name: 'Zephaniah', testament: 'old', chapters: 3, abbreviation: 'Zep', description: 'The Day of the Lord and God\'s judgment and mercy.' },
  { id: '37', name: 'Haggai', testament: 'old', chapters: 2, abbreviation: 'Hag', description: 'Encouragement to rebuild the temple.' },
  { id: '38', name: 'Zechariah', testament: 'old', chapters: 14, abbreviation: 'Zec', description: 'Visions of restoration and the future Messiah.' },
  { id: '39', name: 'Malachi', testament: 'old', chapters: 4, abbreviation: 'Mal', description: 'God\'s love and call to faithfulness before the Messiah.' },

  // New Testament - Gospels
  { id: '40', name: 'Matthew', testament: 'new', chapters: 28, abbreviation: 'Mat', description: 'Jesus as the King and fulfillment of Old Testament prophecy.' },
  { id: '41', name: 'Mark', testament: 'new', chapters: 16, abbreviation: 'Mar', description: 'Jesus as the servant, emphasizing His actions and sufferings.' },
  { id: '42', name: 'Luke', testament: 'new', chapters: 24, abbreviation: 'Luk', description: 'Jesus as the Son of Man with compassion for all people.' },
  { id: '43', name: 'John', testament: 'new', chapters: 21, abbreviation: 'Joh', description: 'Jesus as the Word of God and the path to eternal life.' },

  // New Testament - Acts
  { id: '44', name: 'Acts', testament: 'new', chapters: 28, abbreviation: 'Act', description: 'The early church\'s spread of the Gospel after Pentecost.' },

  // New Testament - Paul's Epistles
  { id: '45', name: 'Romans', testament: 'new', chapters: 16, abbreviation: 'Rom', description: 'The Gospel and salvation through faith in Jesus Christ.' },
  { id: '46', name: '1 Corinthians', testament: 'new', chapters: 16, abbreviation: '1Co', description: 'Addressing divisions and living as the body of Christ.' },
  { id: '47', name: '2 Corinthians', testament: 'new', chapters: 13, abbreviation: '2Co', description: 'Paul\'s defense of his apostleship and ministry.' },
  { id: '48', name: 'Galatians', testament: 'new', chapters: 6, abbreviation: 'Gal', description: 'Freedom in Christ through grace, not the law.' },
  { id: '49', name: 'Ephesians', testament: 'new', chapters: 6, abbreviation: 'Eph', description: 'The church as the body of Christ and God\'s plan.' },
  { id: '50', name: 'Philippians', testament: 'new', chapters: 4, abbreviation: 'Phi', description: 'Joy and unity in Christ amid suffering.' },
  { id: '51', name: 'Colossians', testament: 'new', chapters: 4, abbreviation: 'Col', description: 'The supremacy of Christ and complete redemption in Him.' },
  { id: '52', name: '1 Thessalonians', testament: 'new', chapters: 5, abbreviation: '1Th', description: 'Living holy lives and hope in Christ\'s return.' },
  { id: '53', name: '2 Thessalonians', testament: 'new', chapters: 3, abbreviation: '2Th', description: 'Encouragement during persecution and clarity about the end times.' },
  { id: '54', name: '1 Timothy', testament: 'new', chapters: 6, abbreviation: '1Ti', description: 'Instructions for church leadership and sound doctrine.' },
  { id: '55', name: '2 Timothy', testament: 'new', chapters: 4, abbreviation: '2Ti', description: 'Encouragement to persevere in faith and ministry.' },
  { id: '56', name: 'Titus', testament: 'new', chapters: 3, abbreviation: 'Tit', description: 'Instructions for pastoral ministry and godly living.' },
  { id: '57', name: 'Philemon', testament: 'new', chapters: 1, abbreviation: 'Phm', description: 'Paul\'s plea for mercy toward a runaway slave.' },

  // New Testament - Hebrews
  { id: '58', name: 'Hebrews', testament: 'new', chapters: 13, abbreviation: 'Heb', description: 'Jesus as the superior High Priest and fulfillment of the old covenant.' },

  // New Testament - James
  { id: '59', name: 'James', testament: 'new', chapters: 5, abbreviation: 'Jas', description: 'Faith must be shown through practical works and wisdom.' },

  // New Testament - Peter
  { id: '60', name: '1 Peter', testament: 'new', chapters: 5, abbreviation: '1Pe', description: 'Hope and suffering as Christians living as exiles.' },
  { id: '61', name: '2 Peter', testament: 'new', chapters: 3, abbreviation: '2Pe', description: 'Growing in faith and warning against false teachers.' },

  // New Testament - John's Epistles
  { id: '62', name: '1 John', testament: 'new', chapters: 5, abbreviation: '1Jo', description: 'Assurance of salvation and love as the essence of faith.' },
  { id: '63', name: '2 John', testament: 'new', chapters: 1, abbreviation: '2Jo', description: 'Truth and love in the church community.' },
  { id: '64', name: '3 John', testament: 'new', chapters: 1, abbreviation: '3Jo', description: 'Encouragement to show hospitality and truth.' },

  // New Testament - Jude
  { id: '65', name: 'Jude', testament: 'new', chapters: 1, abbreviation: 'Jud', description: 'Warning against false teachers and encouragement to stand firm.' },

  // New Testament - Revelation
  { id: '66', name: 'Revelation', testament: 'new', chapters: 22, abbreviation: 'Rev', description: 'Visions of the end times and Jesus\' ultimate triumph.' },

  // Apocrypha / Deuterocanonical (DRA only)
  { id: '67', name: 'Tobit', testament: 'apocrypha', chapters: 14, abbreviation: 'Tob', description: 'A story of faith, prayer, and God\'s providence in the life of a righteous family.' },
  { id: '68', name: 'Judith', testament: 'apocrypha', chapters: 16, abbreviation: 'Jdt', description: 'A courageous woman delivers Israel from the Assyrian army.' },
  { id: '69', name: 'Wisdom of Solomon', testament: 'apocrypha', chapters: 19, abbreviation: 'Wis', description: 'A meditation on divine wisdom and its role in salvation history.' },
  { id: '70', name: 'Sirach', testament: 'apocrypha', chapters: 51, abbreviation: 'Sir', description: 'Practical wisdom for living a faithful and moral life.' },
  { id: '71', name: '1 Maccabees', testament: 'apocrypha', chapters: 16, abbreviation: '1Ma', description: 'The Jewish revolt against Seleucid oppression and the rededication of the Temple.' },
  { id: '72', name: '2 Maccabees', testament: 'apocrypha', chapters: 15, abbreviation: '2Ma', description: 'A theological reflection on the Maccabean revolt and God\'s faithfulness.' },
  { id: '73', name: 'Baruch', testament: 'apocrypha', chapters: 6, abbreviation: 'Bar', description: 'A prayer of confession from exile, with the Letter of Jeremiah included as chapter 6.' },

  // Wider Orthodox / Eastern canon
  { id: '74', name: '1 Esdras', testament: 'orthodox', chapters: 9, abbreviation: '1Es', description: 'A retelling of the return from exile, with the famous contest of the three pages.' },
  { id: '75', name: '2 Esdras', testament: 'orthodox', chapters: 16, abbreviation: '2Es', description: 'Apocalyptic visions of Ezra wrestling with God\'s justice and the world\'s end.' },
  { id: '76', name: 'Prayer of Manasseh', testament: 'orthodox', chapters: 1, abbreviation: 'PrM', description: 'The penitent prayer of King Manasseh — a model of repentance from the depths.' },
  { id: '77', name: '3 Maccabees', testament: 'orthodox', chapters: 7, abbreviation: '3Ma', description: 'God\'s deliverance of Egyptian Jews from Ptolemy IV Philopator.' },
  { id: '78', name: '4 Maccabees', testament: 'orthodox', chapters: 18, abbreviation: '4Ma', description: 'A philosophical meditation on devout reason mastering the passions through martyrdom.' },
  { id: '79', name: 'Psalm 151', testament: 'orthodox', chapters: 1, abbreviation: 'Ps151', description: 'A short autobiographical psalm attributed to David — the shepherd-king\'s testimony.' },
];

export function getBookById(id: string): BibleBook | undefined {
  return bibleBooks.find(book => book.id === id);
}

export function getBookByName(name: string): BibleBook | undefined {
  return bibleBooks.find(book => book.name.toLowerCase() === name.toLowerCase());
}

export function getAllBooks(): BibleBook[] {
  return bibleBooks;
}

export function getOldTestamentBooks(): BibleBook[] {
  return bibleBooks.filter(book => book.testament === 'old');
}

export function getNewTestamentBooks(): BibleBook[] {
  return bibleBooks.filter(book => book.testament === 'new');
}

export function getApocryphaBooks(): BibleBook[] {
  return bibleBooks.filter(book => book.testament === 'apocrypha');
}

export function getOrthodoxBooks(): BibleBook[] {
  return bibleBooks.filter(book => book.testament === 'orthodox');
}
