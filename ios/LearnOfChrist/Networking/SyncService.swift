// SyncService.swift
// ────────────────────────────────────────────────────────────────────────────
// Pull + push of the four user-data tables (reading_progress,
// bookmarks, notes, highlights) between SwiftData and Supabase.
//
// Push reuses the existing `claim_local_data` RPC (migration 064):
// the RPC already does last-write-wins via client_updated_at and
// handles every row shape. So "push my local edits" and "claim my
// pre-sign-in rows" are the same call — the difference is just what
// the device has locally at the moment.
//
// Pull uses `v1_sync_user_data(p_since, p_limit)` (migration 059 + 063).
// Returns rows changed across all four tables since `p_since`, plus a
// monotonic server-clock cursor we advance for next pull. Soft-deleted
// rows (deleted_at IS NOT NULL) are included so peers reconcile
// deletes; we mirror those into SwiftData by setting `deletedAt` on
// the matching row (or inserting a tombstone if none exists locally).
//
// Cursor storage: two UserDefaults keys, namespaced per signed-in
// user_id so sign-out + sign-in-as-different-user doesn't leak
// timestamps.
//   loc.sync.lastPulledAt.<userId>   — server-time cursor (Date)
//   loc.sync.lastPushedAt.<userId>   — client-time cursor (Date)
//
// All SwiftData mutations run on the main actor (UserDataStore's
// context is main-isolated); the HTTP work happens on the
// SupabaseClient actor.

import Foundation
import SwiftData

@MainActor
@Observable
final class SyncService {
    private let auth: AuthService
    private let userData: UserDataStore
    private let client: SupabaseClient

    private(set) var isSyncing: Bool = false
    /// Surfaces in the Settings tab — "Last synced 3 minutes ago".
    private(set) var lastSyncedAt: Date?
    var lastError: String?

    init(
        auth: AuthService,
        userData: UserDataStore,
        client: SupabaseClient = .shared
    ) {
        self.auth = auth
        self.userData = userData
        self.client = client
    }

    // MARK: - Public entry point

    /// One round-trip: push first (so a new device's local edits land
    /// on the server before pull overwrites them), then pull. No-op
    /// when the user isn't signed in.
    ///
    /// Idempotent: safe to call on foreground, on pull-to-refresh, and
    /// in a debounced response to a local edit.
    func sync() async {
        guard !isSyncing else { return }
        guard let session = await auth.validSession() else { return }
        isSyncing = true
        defer { isSyncing = false }
        lastError = nil

        do {
            try await push(session: session)
            try await pull(session: session)
            lastSyncedAt = Date()
        } catch {
            lastError = error.localizedDescription
        }
    }

    // MARK: - Push (claim_local_data reused as the push RPC)

    private func push(session: SupabaseSession) async throws {
        let cursor = lastPushedAt(forUser: session.userId)
        let deviceID = ClientID.current()

        // Collect local rows owned by this device that have been
        // touched since the last push. claim_local_data is
        // idempotent + LWW, so re-sending an unchanged row is a
        // no-op on the server — we err on the side of including
        // borderline-recent rows by extending the cursor 1s back.
        let since = cursor.addingTimeInterval(-1)

        let progress = collectLocalProgress(forDevice: deviceID, after: since)
        let bookmarks = collectLocalBookmarks(forDevice: deviceID, after: since)
        let notes = collectLocalNotes(forDevice: deviceID, after: since)
        let highlights = collectLocalHighlights(forDevice: deviceID, after: since)

        // Nothing to send — skip the call entirely.
        if progress.isEmpty && bookmarks.isEmpty && notes.isEmpty && highlights.isEmpty {
            return
        }

        let payload = ClaimPayload(
            p_progress: progress,
            p_bookmarks: bookmarks,
            p_notes: notes,
            p_highlights: highlights
        )

        let _: ClaimResponse = try await client.rpc(
            "claim_local_data",
            body: payload,
            session: session
        )

        // Advance the push cursor to the most recent local
        // clientUpdatedAt we sent.
        let maxTime = [progress.map(\.client_updated_at),
                       bookmarks.map(\.client_updated_at),
                       notes.map(\.client_updated_at),
                       highlights.map(\.client_updated_at)]
            .flatMap { $0 }
            .compactMap { $0 }
            .max()
        if let newCursor = maxTime {
            setLastPushedAt(newCursor, forUser: session.userId)
        }
    }

    // MARK: - Pull (v1_sync_user_data)

    private func pull(session: SupabaseSession) async throws {
        let cursor = lastPulledAt(forUser: session.userId)
        let body = SyncRequest(p_since: cursor, p_limit: 500)

        let result: SyncResponse = try await client.rpc(
            "v1_sync_user_data",
            body: body,
            session: session
        )

        // Apply each section to SwiftData. Order doesn't matter — the
        // four tables don't reference each other.
        applyProgress(result.reading_progress ?? [])
        applyBookmarks(result.bookmarks ?? [])
        applyNotes(result.notes ?? [])
        applyHighlights(result.highlights ?? [])

        setLastPulledAt(result.cursor, forUser: session.userId)
    }

    // MARK: - Local → wire row builders

    private func collectLocalProgress(
        forDevice deviceID: UUID,
        after cursor: Date
    ) -> [ProgressRow] {
        let descriptor = FetchDescriptor<StoredReadingProgress>(
            predicate: #Predicate { $0.clientId == deviceID }
        )
        let rows = (try? userData.context.fetch(descriptor)) ?? []
        return rows
            .filter { ($0.clientUpdatedAt) > cursor }
            .map {
                ProgressRow(
                    book_slug: $0.bookSlug,
                    chapter: $0.chapter,
                    scroll_pct: Double($0.scrollPct),
                    last_verse_index: $0.lastVerseIndex,
                    updated_at: $0.updatedAt,
                    client_id: $0.clientId,
                    client_updated_at: $0.clientUpdatedAt,
                    deleted_at: $0.deletedAt
                )
            }
    }

    private func collectLocalBookmarks(
        forDevice deviceID: UUID,
        after cursor: Date
    ) -> [BookmarkRow] {
        let descriptor = FetchDescriptor<StoredBookmark>(
            predicate: #Predicate { $0.clientId == deviceID }
        )
        let rows = (try? userData.context.fetch(descriptor)) ?? []
        return rows
            .filter { $0.clientUpdatedAt > cursor }
            .map {
                BookmarkRow(
                    book_slug: $0.bookSlug,
                    chapter: $0.chapter,
                    verse: $0.verse ?? 0,
                    translation: $0.translation,
                    note: $0.note,
                    created_at: $0.createdAt,
                    updated_at: $0.updatedAt,
                    client_id: $0.clientId,
                    client_uuid: $0.id,
                    client_updated_at: $0.clientUpdatedAt,
                    deleted_at: $0.deletedAt
                )
            }
    }

    private func collectLocalNotes(
        forDevice deviceID: UUID,
        after cursor: Date
    ) -> [NoteRow] {
        let descriptor = FetchDescriptor<StoredNote>(
            predicate: #Predicate { $0.clientId == deviceID }
        )
        let rows = (try? userData.context.fetch(descriptor)) ?? []
        return rows
            .filter { $0.clientUpdatedAt > cursor }
            .map {
                NoteRow(
                    book_slug: $0.bookSlug,
                    chapter: $0.chapter,
                    verse: $0.verse,
                    body: $0.body,
                    created_at: $0.createdAt,
                    updated_at: $0.updatedAt,
                    client_id: $0.clientId,
                    client_uuid: $0.id,
                    client_updated_at: $0.clientUpdatedAt,
                    deleted_at: $0.deletedAt
                )
            }
    }

    private func collectLocalHighlights(
        forDevice deviceID: UUID,
        after cursor: Date
    ) -> [HighlightRow] {
        let descriptor = FetchDescriptor<StoredHighlight>(
            predicate: #Predicate { $0.clientId == deviceID }
        )
        let rows = (try? userData.context.fetch(descriptor)) ?? []
        return rows
            .filter { $0.clientUpdatedAt > cursor }
            .map {
                HighlightRow(
                    id: $0.id,
                    book_slug: $0.bookSlug,
                    chapter: $0.chapter,
                    verse_start: $0.verseStart,
                    verse_end: $0.verseEnd,
                    color: $0.color,
                    created_at: $0.createdAt,
                    updated_at: $0.updatedAt,
                    client_id: $0.clientId,
                    client_updated_at: $0.clientUpdatedAt,
                    deleted_at: $0.deletedAt
                )
            }
    }

    // MARK: - Server → SwiftData appliers

    private func applyProgress(_ rows: [ProgressRow]) {
        let ctx = userData.context
        for r in rows {
            let key = "\(r.book_slug)/\(r.chapter)"
            let existing = try? ctx.fetch(
                FetchDescriptor<StoredReadingProgress>(
                    predicate: #Predicate { $0.key == key }
                )
            ).first
            let row = existing ?? StoredReadingProgress(
                bookSlug: r.book_slug, chapter: r.chapter
            )
            // Server is authoritative for these fields on pull.
            row.scrollPct = r.scroll_pct
            row.lastVerseIndex = r.last_verse_index
            row.updatedAt = r.updated_at
            row.clientId = r.client_id ?? row.clientId
            row.clientUpdatedAt = r.client_updated_at ?? row.clientUpdatedAt
            row.deletedAt = r.deleted_at
            if existing == nil { ctx.insert(row) }
        }
        try? ctx.save()
    }

    private func applyBookmarks(_ rows: [BookmarkRow]) {
        let ctx = userData.context
        for r in rows {
            // Try to match an existing local row by client_uuid first
            // (set on devices that created the row); fall back to the
            // natural key for legacy rows missing the client_uuid.
            let existing: StoredBookmark?
            if let uuid = r.client_uuid {
                existing = try? ctx.fetch(
                    FetchDescriptor<StoredBookmark>(
                        predicate: #Predicate { $0.id == uuid }
                    )
                ).first
            } else {
                let book = r.book_slug
                let chapter = r.chapter
                let verse = r.verse
                existing = try? ctx.fetch(
                    FetchDescriptor<StoredBookmark>(
                        predicate: #Predicate {
                            $0.bookSlug == book
                            && $0.chapter == chapter
                            && $0.verse == verse
                        }
                    )
                ).first
            }
            let row = existing ?? StoredBookmark(
                bookSlug: r.book_slug, chapter: r.chapter, verse: r.verse
            )
            if let uuid = r.client_uuid { row.id = uuid }
            row.translation = r.translation
            row.note = r.note
            row.updatedAt = r.updated_at
            row.clientId = r.client_id ?? row.clientId
            row.clientUpdatedAt = r.client_updated_at ?? row.clientUpdatedAt
            row.deletedAt = r.deleted_at
            if existing == nil { ctx.insert(row) }
        }
        try? ctx.save()
    }

    private func applyNotes(_ rows: [NoteRow]) {
        let ctx = userData.context
        for r in rows {
            let existing: StoredNote?
            if let uuid = r.client_uuid {
                existing = try? ctx.fetch(
                    FetchDescriptor<StoredNote>(
                        predicate: #Predicate { $0.id == uuid }
                    )
                ).first
            } else {
                let book = r.book_slug
                let chapter = r.chapter
                let verse = r.verse
                existing = try? ctx.fetch(
                    FetchDescriptor<StoredNote>(
                        predicate: #Predicate {
                            $0.bookSlug == book
                            && $0.chapter == chapter
                            && $0.verse == verse
                        }
                    )
                ).first
            }
            let row = existing ?? StoredNote(
                bookSlug: r.book_slug,
                chapter: r.chapter,
                verse: r.verse,
                body: r.body
            )
            if let uuid = r.client_uuid { row.id = uuid }
            row.body = r.body
            row.updatedAt = r.updated_at
            row.clientId = r.client_id ?? row.clientId
            row.clientUpdatedAt = r.client_updated_at ?? row.clientUpdatedAt
            row.deletedAt = r.deleted_at
            if existing == nil { ctx.insert(row) }
        }
        try? ctx.save()
    }

    private func applyHighlights(_ rows: [HighlightRow]) {
        let ctx = userData.context
        for r in rows {
            let uuid = r.id
            let existing = try? ctx.fetch(
                FetchDescriptor<StoredHighlight>(
                    predicate: #Predicate { $0.id == uuid }
                )
            ).first
            let row = existing ?? StoredHighlight(
                bookSlug: r.book_slug,
                chapter: r.chapter,
                verseStart: r.verse_start,
                verseEnd: r.verse_end,
                color: r.color
            )
            row.id = r.id
            row.verseStart = r.verse_start
            row.verseEnd = r.verse_end
            row.color = r.color
            row.updatedAt = r.updated_at
            row.clientId = r.client_id ?? row.clientId
            row.clientUpdatedAt = r.client_updated_at ?? row.clientUpdatedAt
            row.deletedAt = r.deleted_at
            if existing == nil { ctx.insert(row) }
        }
        try? ctx.save()
    }

    // MARK: - Cursor storage

    private func lastPulledAtKey(_ userId: String) -> String {
        "loc.sync.lastPulledAt.\(userId)"
    }
    private func lastPushedAtKey(_ userId: String) -> String {
        "loc.sync.lastPushedAt.\(userId)"
    }

    private func lastPulledAt(forUser userId: String) -> Date {
        let raw = UserDefaults.standard.double(forKey: lastPulledAtKey(userId))
        return raw == 0 ? Date(timeIntervalSince1970: 0) : Date(timeIntervalSince1970: raw)
    }
    private func setLastPulledAt(_ date: Date, forUser userId: String) {
        UserDefaults.standard.set(date.timeIntervalSince1970, forKey: lastPulledAtKey(userId))
    }

    private func lastPushedAt(forUser userId: String) -> Date {
        let raw = UserDefaults.standard.double(forKey: lastPushedAtKey(userId))
        return raw == 0 ? Date(timeIntervalSince1970: 0) : Date(timeIntervalSince1970: raw)
    }
    private func setLastPushedAt(_ date: Date, forUser userId: String) {
        UserDefaults.standard.set(date.timeIntervalSince1970, forKey: lastPushedAtKey(userId))
    }

    // MARK: - Wire shapes

    private struct SyncRequest: Encodable {
        let p_since: Date
        let p_limit: Int
    }

    private struct SyncResponse: Decodable {
        let reading_progress: [ProgressRow]?
        let bookmarks: [BookmarkRow]?
        let notes: [NoteRow]?
        let highlights: [HighlightRow]?
        // artwork_saves is returned by the RPC but we don't model it
        // on iOS yet — accept it as raw JSON and ignore.
        let artwork_saves: [JSONValue]?
        let cursor: Date
        let server_time: Date
    }

    private struct ClaimPayload: Encodable {
        let p_progress: [ProgressRow]
        let p_bookmarks: [BookmarkRow]
        let p_notes: [NoteRow]
        let p_highlights: [HighlightRow]
    }

    private struct ClaimResponse: Decodable {
        let reading_progress: Int?
        let bookmarks: Int?
        let notes: Int?
        let highlights: Int?
        let server_time: Date?
    }

    private struct ProgressRow: Codable {
        let book_slug: String
        let chapter: Int
        let scroll_pct: Double
        let last_verse_index: Int?
        let updated_at: Date
        let client_id: UUID?
        let client_updated_at: Date?
        let deleted_at: Date?
    }

    private struct BookmarkRow: Codable {
        let book_slug: String
        let chapter: Int
        let verse: Int
        let translation: String?
        let note: String?
        let created_at: Date
        let updated_at: Date
        let client_id: UUID?
        let client_uuid: UUID?
        let client_updated_at: Date?
        let deleted_at: Date?
    }

    private struct NoteRow: Codable {
        let book_slug: String
        let chapter: Int
        let verse: Int
        let body: String
        let created_at: Date
        let updated_at: Date
        let client_id: UUID?
        let client_uuid: UUID?
        let client_updated_at: Date?
        let deleted_at: Date?
    }

    private struct HighlightRow: Codable {
        let id: UUID
        let book_slug: String
        let chapter: Int
        let verse_start: Int
        let verse_end: Int
        let color: String
        let created_at: Date
        let updated_at: Date
        let client_id: UUID?
        let client_updated_at: Date?
        let deleted_at: Date?
    }

    /// Minimal pass-through for fields we receive but don't model.
    /// Kept private and intentionally featureless.
    private struct JSONValue: Codable {
        init(from decoder: Decoder) throws { _ = try decoder.singleValueContainer() }
        func encode(to encoder: Encoder) throws {}
    }
}
