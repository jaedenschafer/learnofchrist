// UserDataStore.swift
// ────────────────────────────────────────────────────────────────────────────
// Thin wrapper around the SwiftData ModelContainer for the four local
// user-data models. Views use `@Query` directly for reads; this store
// owns mutations and the toggle helpers (which need to consult-then-
// modify in a single transaction).
//
// All mutations stamp `updatedAt` and `clientUpdatedAt`, and use
// `deletedAt` for soft delete (so when sync ships, the deletion
// propagates to other devices instead of resurrecting on next pull).

import Foundation
import SwiftData

@Observable
final class UserDataStore {
    let container: ModelContainer

    init() {
        let schema = Schema([
            StoredReadingProgress.self,
            StoredBookmark.self,
            StoredNote.self,
            StoredHighlight.self,
        ])
        let config = ModelConfiguration(schema: schema, isStoredInMemoryOnly: false)
        do {
            self.container = try ModelContainer(for: schema, configurations: [config])
        } catch {
            // SwiftData can't open the on-disk store (corrupt file,
            // migration mismatch, etc.). Fall back to an in-memory
            // store so the app still runs and the user can re-create
            // their data; the disk one will be replaced on next launch.
            print("⚠️ UserDataStore: falling back to in-memory store: \(error)")
            let inMem = ModelConfiguration(schema: schema, isStoredInMemoryOnly: true)
            // swiftlint:disable:next force_try
            self.container = try! ModelContainer(for: schema, configurations: [inMem])
        }
    }

    @MainActor
    var context: ModelContext { container.mainContext }

    // MARK: - Reading progress

    /// Upsert the reading progress for a chapter.
    @MainActor
    func recordReadingProgress(
        bookSlug: String,
        chapter: Int,
        scrollPct: Double,
        lastVerseIndex: Int? = nil
    ) {
        let key = "\(bookSlug)/\(chapter)"
        let descriptor = FetchDescriptor<StoredReadingProgress>(
            predicate: #Predicate { $0.key == key }
        )
        let existing = (try? context.fetch(descriptor))?.first
        let now = Date()
        if let row = existing {
            row.scrollPct = scrollPct
            row.lastVerseIndex = lastVerseIndex
            row.updatedAt = now
            row.clientUpdatedAt = now
            row.clientId = ClientID.current()
            row.deletedAt = nil
        } else {
            context.insert(
                StoredReadingProgress(
                    bookSlug: bookSlug,
                    chapter: chapter,
                    scrollPct: scrollPct,
                    lastVerseIndex: lastVerseIndex
                )
            )
        }
        try? context.save()
    }

    // MARK: - Bookmarks

    /// Toggle a chapter-level bookmark on/off. Returns the new state
    /// (true = bookmarked).
    @MainActor
    @discardableResult
    func toggleChapterBookmark(bookSlug: String, chapter: Int) -> Bool {
        let descriptor = FetchDescriptor<StoredBookmark>(
            predicate: #Predicate {
                $0.bookSlug == bookSlug
                && $0.chapter == chapter
                && $0.verse == nil
                && $0.deletedAt == nil
            }
        )
        let existing = (try? context.fetch(descriptor))?.first
        let now = Date()
        if let row = existing {
            row.deletedAt = now
            row.updatedAt = now
            row.clientUpdatedAt = now
            row.clientId = ClientID.current()
            try? context.save()
            return false
        } else {
            context.insert(StoredBookmark(bookSlug: bookSlug, chapter: chapter))
            try? context.save()
            return true
        }
    }

    @MainActor
    func isChapterBookmarked(bookSlug: String, chapter: Int) -> Bool {
        let descriptor = FetchDescriptor<StoredBookmark>(
            predicate: #Predicate {
                $0.bookSlug == bookSlug
                && $0.chapter == chapter
                && $0.verse == nil
                && $0.deletedAt == nil
            }
        )
        return ((try? context.fetch(descriptor))?.isEmpty == false)
    }

    // MARK: - Highlights

    @MainActor
    func addHighlight(
        bookSlug: String,
        chapter: Int,
        verseStart: Int,
        verseEnd: Int? = nil,
        color: String = "yellow"
    ) {
        context.insert(
            StoredHighlight(
                bookSlug: bookSlug,
                chapter: chapter,
                verseStart: verseStart,
                verseEnd: verseEnd,
                color: color
            )
        )
        try? context.save()
    }

    @MainActor
    func removeHighlight(_ highlight: StoredHighlight) {
        let now = Date()
        highlight.deletedAt = now
        highlight.updatedAt = now
        highlight.clientUpdatedAt = now
        highlight.clientId = ClientID.current()
        try? context.save()
    }

    // MARK: - Notes

    @MainActor
    func upsertNote(bookSlug: String, chapter: Int, verse: Int, body: String) {
        let descriptor = FetchDescriptor<StoredNote>(
            predicate: #Predicate {
                $0.bookSlug == bookSlug
                && $0.chapter == chapter
                && $0.verse == verse
                && $0.deletedAt == nil
            }
        )
        let existing = (try? context.fetch(descriptor))?.first
        let now = Date()
        if let row = existing {
            row.body = body
            row.updatedAt = now
            row.clientUpdatedAt = now
            row.clientId = ClientID.current()
        } else if !body.isEmpty {
            context.insert(StoredNote(bookSlug: bookSlug, chapter: chapter, verse: verse, body: body))
        }
        try? context.save()
    }
}
