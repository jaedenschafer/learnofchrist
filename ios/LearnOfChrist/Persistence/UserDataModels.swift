// UserDataModels.swift
// ────────────────────────────────────────────────────────────────────────────
// SwiftData @Model classes for everything the user generates locally —
// highlights, bookmarks, notes, reading progress.
//
// Shape rule: column-for-column compatible with the Supabase row shapes
// in migrations 019 + 056 (book_slug, chapter, verse, etc.). When the
// user signs in we want claim_local_data() to be a straight upload, no
// transformation. The only field we OMIT on the local rows is user_id;
// it's synthesized server-side from auth.uid() at claim time.
//
// All four models carry: createdAt, updatedAt, clientUpdatedAt (wall
// clock at write), clientId (per-install UUID), deletedAt (soft delete).
// `id` is a UUID we generate locally and reuse server-side so the
// claim path can dedupe re-claims after multiple sign-ins.

import Foundation
import SwiftData

@Model
final class StoredReadingProgress {
    /// (bookSlug, chapter) is unique — we keep one row per chapter.
    @Attribute(.unique) var key: String
    var bookSlug: String
    var chapter: Int
    var scrollPct: Double
    var lastVerseIndex: Int?
    var createdAt: Date
    var updatedAt: Date
    var clientUpdatedAt: Date
    var clientId: UUID
    var deletedAt: Date?

    init(bookSlug: String, chapter: Int, scrollPct: Double = 0, lastVerseIndex: Int? = nil) {
        self.key = "\(bookSlug)/\(chapter)"
        self.bookSlug = bookSlug
        self.chapter = chapter
        self.scrollPct = scrollPct
        self.lastVerseIndex = lastVerseIndex
        let now = Date()
        self.createdAt = now
        self.updatedAt = now
        self.clientUpdatedAt = now
        self.clientId = ClientID.current()
        self.deletedAt = nil
    }
}

@Model
final class StoredBookmark {
    @Attribute(.unique) var id: UUID
    var bookSlug: String
    var chapter: Int
    /// Verse number for verse-level bookmarks; nil for a chapter-level one.
    var verse: Int?
    /// Translation abbreviation the bookmark anchors to. Nullable means
    /// translation-agnostic (matches the partial unique index in migration 019).
    var translation: String?
    /// Optional short label.
    var note: String?
    var createdAt: Date
    var updatedAt: Date
    var clientUpdatedAt: Date
    var clientId: UUID
    var deletedAt: Date?

    init(bookSlug: String, chapter: Int, verse: Int? = nil, translation: String? = nil, note: String? = nil) {
        self.id = UUID()
        self.bookSlug = bookSlug
        self.chapter = chapter
        self.verse = verse
        self.translation = translation
        self.note = note
        let now = Date()
        self.createdAt = now
        self.updatedAt = now
        self.clientUpdatedAt = now
        self.clientId = ClientID.current()
        self.deletedAt = nil
    }
}

@Model
final class StoredNote {
    @Attribute(.unique) var id: UUID
    var bookSlug: String
    var chapter: Int
    var verse: Int
    var body: String
    var createdAt: Date
    var updatedAt: Date
    var clientUpdatedAt: Date
    var clientId: UUID
    var deletedAt: Date?

    init(bookSlug: String, chapter: Int, verse: Int, body: String) {
        self.id = UUID()
        self.bookSlug = bookSlug
        self.chapter = chapter
        self.verse = verse
        self.body = body
        let now = Date()
        self.createdAt = now
        self.updatedAt = now
        self.clientUpdatedAt = now
        self.clientId = ClientID.current()
        self.deletedAt = nil
    }
}

@Model
final class StoredHighlight {
    @Attribute(.unique) var id: UUID
    var bookSlug: String
    var chapter: Int
    var verseStart: Int
    /// Inclusive end verse; equals verseStart for single-verse highlights.
    var verseEnd: Int
    /// Color token name — matches a key in Theme palette (e.g. "yellow",
    /// "warm", "accent"). Stored as a string so we can rotate colors
    /// without a schema migration.
    var color: String
    var createdAt: Date
    var updatedAt: Date
    var clientUpdatedAt: Date
    var clientId: UUID
    var deletedAt: Date?

    init(bookSlug: String, chapter: Int, verseStart: Int, verseEnd: Int? = nil, color: String = "yellow") {
        self.id = UUID()
        self.bookSlug = bookSlug
        self.chapter = chapter
        self.verseStart = verseStart
        self.verseEnd = verseEnd ?? verseStart
        self.color = color
        let now = Date()
        self.createdAt = now
        self.updatedAt = now
        self.clientUpdatedAt = now
        self.clientId = ClientID.current()
        self.deletedAt = nil
    }
}
