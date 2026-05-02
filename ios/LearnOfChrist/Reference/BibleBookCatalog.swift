// BibleBookCatalog.swift
// ────────────────────────────────────────────────────────────────────────────
// Static, hard-coded list of canonical Bible books. Mirrors the web's
// src/data/books.ts and is the source of truth for the iOS book grid.
//
// Why static instead of fetching from `v1_book_index`:
//   1. Works offline (and the app is account-optional, so cold launch
//      should not require any network for the browse hierarchy).
//   2. Lets SwiftUI render the grid synchronously, no skeleton flash.
//   3. The 66 canonical books haven't changed in ~1700 years; we don't
//      need a database round-trip every time the user opens the app.
//
// The chapter counts here authoritatively shape the chapter picker.
// Per-book content packs may have *fewer* chapters with hand-authored
// study material; that's a render concern, not a navigation concern.

import Foundation

struct BibleBook: Identifiable, Hashable, Sendable {
    let slug: String          // "genesis", "1-corinthians", "song-of-solomon"
    let name: String          // "Genesis", "1 Corinthians", "Song of Solomon"
    let abbreviation: String  // "Gen", "1Co", "Son"
    let testament: Testament  // .old / .new (apocrypha excluded for v1 navigation)
    let chapters: Int         // total chapter count
    let canonicalOrder: Int   // 1...66

    enum Testament: String, Sendable {
        case old, new
    }

    var id: String { slug }
}

enum BibleBookCatalog {
    // MARK: - Public API

    static let all: [BibleBook] = oldTestament + newTestament

    static let oldTestament: [BibleBook] = [
        .init(slug: "genesis",        name: "Genesis",        abbreviation: "Gen", testament: .old, chapters: 50, canonicalOrder: 1),
        .init(slug: "exodus",         name: "Exodus",         abbreviation: "Exo", testament: .old, chapters: 40, canonicalOrder: 2),
        .init(slug: "leviticus",      name: "Leviticus",      abbreviation: "Lev", testament: .old, chapters: 27, canonicalOrder: 3),
        .init(slug: "numbers",        name: "Numbers",        abbreviation: "Num", testament: .old, chapters: 36, canonicalOrder: 4),
        .init(slug: "deuteronomy",    name: "Deuteronomy",    abbreviation: "Deu", testament: .old, chapters: 34, canonicalOrder: 5),
        .init(slug: "joshua",         name: "Joshua",         abbreviation: "Jos", testament: .old, chapters: 24, canonicalOrder: 6),
        .init(slug: "judges",         name: "Judges",         abbreviation: "Jdg", testament: .old, chapters: 21, canonicalOrder: 7),
        .init(slug: "ruth",           name: "Ruth",           abbreviation: "Rut", testament: .old, chapters: 4,  canonicalOrder: 8),
        .init(slug: "1-samuel",       name: "1 Samuel",       abbreviation: "1Sa", testament: .old, chapters: 31, canonicalOrder: 9),
        .init(slug: "2-samuel",       name: "2 Samuel",       abbreviation: "2Sa", testament: .old, chapters: 24, canonicalOrder: 10),
        .init(slug: "1-kings",        name: "1 Kings",        abbreviation: "1Ki", testament: .old, chapters: 22, canonicalOrder: 11),
        .init(slug: "2-kings",        name: "2 Kings",        abbreviation: "2Ki", testament: .old, chapters: 25, canonicalOrder: 12),
        .init(slug: "1-chronicles",   name: "1 Chronicles",   abbreviation: "1Ch", testament: .old, chapters: 29, canonicalOrder: 13),
        .init(slug: "2-chronicles",   name: "2 Chronicles",   abbreviation: "2Ch", testament: .old, chapters: 36, canonicalOrder: 14),
        .init(slug: "ezra",           name: "Ezra",           abbreviation: "Ezr", testament: .old, chapters: 10, canonicalOrder: 15),
        .init(slug: "nehemiah",       name: "Nehemiah",       abbreviation: "Neh", testament: .old, chapters: 13, canonicalOrder: 16),
        .init(slug: "esther",         name: "Esther",         abbreviation: "Est", testament: .old, chapters: 10, canonicalOrder: 17),
        .init(slug: "job",            name: "Job",            abbreviation: "Job", testament: .old, chapters: 42, canonicalOrder: 18),
        .init(slug: "psalms",         name: "Psalms",         abbreviation: "Psa", testament: .old, chapters: 150, canonicalOrder: 19),
        .init(slug: "proverbs",       name: "Proverbs",       abbreviation: "Pro", testament: .old, chapters: 31, canonicalOrder: 20),
        .init(slug: "ecclesiastes",   name: "Ecclesiastes",   abbreviation: "Ecc", testament: .old, chapters: 12, canonicalOrder: 21),
        .init(slug: "song-of-solomon", name: "Song of Solomon", abbreviation: "Son", testament: .old, chapters: 8, canonicalOrder: 22),
        .init(slug: "isaiah",         name: "Isaiah",         abbreviation: "Isa", testament: .old, chapters: 66, canonicalOrder: 23),
        .init(slug: "jeremiah",       name: "Jeremiah",       abbreviation: "Jer", testament: .old, chapters: 52, canonicalOrder: 24),
        .init(slug: "lamentations",   name: "Lamentations",   abbreviation: "Lam", testament: .old, chapters: 5,  canonicalOrder: 25),
        .init(slug: "ezekiel",        name: "Ezekiel",        abbreviation: "Eze", testament: .old, chapters: 48, canonicalOrder: 26),
        .init(slug: "daniel",         name: "Daniel",         abbreviation: "Dan", testament: .old, chapters: 12, canonicalOrder: 27),
        .init(slug: "hosea",          name: "Hosea",          abbreviation: "Hos", testament: .old, chapters: 14, canonicalOrder: 28),
        .init(slug: "joel",           name: "Joel",           abbreviation: "Joe", testament: .old, chapters: 3,  canonicalOrder: 29),
        .init(slug: "amos",           name: "Amos",           abbreviation: "Amo", testament: .old, chapters: 9,  canonicalOrder: 30),
        .init(slug: "obadiah",        name: "Obadiah",        abbreviation: "Oba", testament: .old, chapters: 1,  canonicalOrder: 31),
        .init(slug: "jonah",          name: "Jonah",          abbreviation: "Jon", testament: .old, chapters: 4,  canonicalOrder: 32),
        .init(slug: "micah",          name: "Micah",          abbreviation: "Mic", testament: .old, chapters: 7,  canonicalOrder: 33),
        .init(slug: "nahum",          name: "Nahum",          abbreviation: "Nah", testament: .old, chapters: 3,  canonicalOrder: 34),
        .init(slug: "habakkuk",       name: "Habakkuk",       abbreviation: "Hab", testament: .old, chapters: 3,  canonicalOrder: 35),
        .init(slug: "zephaniah",      name: "Zephaniah",      abbreviation: "Zep", testament: .old, chapters: 3,  canonicalOrder: 36),
        .init(slug: "haggai",         name: "Haggai",         abbreviation: "Hag", testament: .old, chapters: 2,  canonicalOrder: 37),
        .init(slug: "zechariah",      name: "Zechariah",      abbreviation: "Zec", testament: .old, chapters: 14, canonicalOrder: 38),
        .init(slug: "malachi",        name: "Malachi",        abbreviation: "Mal", testament: .old, chapters: 4,  canonicalOrder: 39),
    ]

    static let newTestament: [BibleBook] = [
        .init(slug: "matthew",         name: "Matthew",         abbreviation: "Mat", testament: .new, chapters: 28, canonicalOrder: 40),
        .init(slug: "mark",            name: "Mark",            abbreviation: "Mar", testament: .new, chapters: 16, canonicalOrder: 41),
        .init(slug: "luke",            name: "Luke",            abbreviation: "Luk", testament: .new, chapters: 24, canonicalOrder: 42),
        .init(slug: "john",            name: "John",            abbreviation: "Joh", testament: .new, chapters: 21, canonicalOrder: 43),
        .init(slug: "acts",            name: "Acts",            abbreviation: "Act", testament: .new, chapters: 28, canonicalOrder: 44),
        .init(slug: "romans",          name: "Romans",          abbreviation: "Rom", testament: .new, chapters: 16, canonicalOrder: 45),
        .init(slug: "1-corinthians",   name: "1 Corinthians",   abbreviation: "1Co", testament: .new, chapters: 16, canonicalOrder: 46),
        .init(slug: "2-corinthians",   name: "2 Corinthians",   abbreviation: "2Co", testament: .new, chapters: 13, canonicalOrder: 47),
        .init(slug: "galatians",       name: "Galatians",       abbreviation: "Gal", testament: .new, chapters: 6,  canonicalOrder: 48),
        .init(slug: "ephesians",       name: "Ephesians",       abbreviation: "Eph", testament: .new, chapters: 6,  canonicalOrder: 49),
        .init(slug: "philippians",     name: "Philippians",     abbreviation: "Phi", testament: .new, chapters: 4,  canonicalOrder: 50),
        .init(slug: "colossians",      name: "Colossians",      abbreviation: "Col", testament: .new, chapters: 4,  canonicalOrder: 51),
        .init(slug: "1-thessalonians", name: "1 Thessalonians", abbreviation: "1Th", testament: .new, chapters: 5,  canonicalOrder: 52),
        .init(slug: "2-thessalonians", name: "2 Thessalonians", abbreviation: "2Th", testament: .new, chapters: 3,  canonicalOrder: 53),
        .init(slug: "1-timothy",       name: "1 Timothy",       abbreviation: "1Ti", testament: .new, chapters: 6,  canonicalOrder: 54),
        .init(slug: "2-timothy",       name: "2 Timothy",       abbreviation: "2Ti", testament: .new, chapters: 4,  canonicalOrder: 55),
        .init(slug: "titus",           name: "Titus",           abbreviation: "Tit", testament: .new, chapters: 3,  canonicalOrder: 56),
        .init(slug: "philemon",        name: "Philemon",        abbreviation: "Phm", testament: .new, chapters: 1,  canonicalOrder: 57),
        .init(slug: "hebrews",         name: "Hebrews",         abbreviation: "Heb", testament: .new, chapters: 13, canonicalOrder: 58),
        .init(slug: "james",           name: "James",           abbreviation: "Jas", testament: .new, chapters: 5,  canonicalOrder: 59),
        .init(slug: "1-peter",         name: "1 Peter",         abbreviation: "1Pe", testament: .new, chapters: 5,  canonicalOrder: 60),
        .init(slug: "2-peter",         name: "2 Peter",         abbreviation: "2Pe", testament: .new, chapters: 3,  canonicalOrder: 61),
        .init(slug: "1-john",          name: "1 John",          abbreviation: "1Jo", testament: .new, chapters: 5,  canonicalOrder: 62),
        .init(slug: "2-john",          name: "2 John",          abbreviation: "2Jo", testament: .new, chapters: 1,  canonicalOrder: 63),
        .init(slug: "3-john",          name: "3 John",          abbreviation: "3Jo", testament: .new, chapters: 1,  canonicalOrder: 64),
        .init(slug: "jude",            name: "Jude",            abbreviation: "Jud", testament: .new, chapters: 1,  canonicalOrder: 65),
        .init(slug: "revelation",      name: "Revelation",      abbreviation: "Rev", testament: .new, chapters: 22, canonicalOrder: 66),
    ]

    /// O(1)-ish lookup by slug. The static dictionary is built once.
    static func book(for slug: String) -> BibleBook? {
        bySlug[slug]
    }

    private static let bySlug: [String: BibleBook] = {
        var d = [String: BibleBook]()
        d.reserveCapacity(all.count)
        for book in all { d[book.slug] = book }
        return d
    }()
}
