// SharedReadingState.swift
// ────────────────────────────────────────────────────────────────────────────
// The single source of truth shared between the main app and the widget
// extension. Read by widgets, written by the app whenever the rotation
// changes (cold launch, foreground, after a chapter is read).
//
// Storage: UserDefaults backed by the App Group container
// "group.com.learnofchrist.app.shared". This avoids the widget needing
// network access — every widget refresh is a fast local read.
//
// Schema (versioned via the "v" key so older widgets can fall back
// gracefully when the app upgrades the format):
//
//   v               Int      — schema version (current: 1)
//   bookSlug        String   — e.g. "genesis"
//   bookName        String   — e.g. "Genesis"
//   chapter         Int      — e.g. 1
//   verseHook       String?  — short pull-quote, optional (≤ 80 chars)
//   updatedAt       Date     — when the app last wrote this entry
//
// If no entry exists yet (first launch), the widget falls back to a
// hard-coded "Genesis 1" placeholder rather than going blank.

import Foundation

public struct SharedReadingState: Codable, Equatable {
    public let bookSlug: String
    public let bookName: String
    public let chapter: Int
    public let verseHook: String?
    public let updatedAt: Date

    public init(bookSlug: String, bookName: String, chapter: Int,
                verseHook: String?, updatedAt: Date = Date()) {
        self.bookSlug = bookSlug
        self.bookName = bookName
        self.chapter = chapter
        self.verseHook = verseHook
        self.updatedAt = updatedAt
    }

    public var reference: String { "\(bookName) \(chapter)" }

    /// Hard-coded fallback for first-launch / missing data.
    public static let placeholder = SharedReadingState(
        bookSlug: "genesis",
        bookName: "Genesis",
        chapter: 1,
        verseHook: "In the beginning God created the heaven and the earth.",
        updatedAt: Date(timeIntervalSince1970: 0)
    )
}

public enum SharedReadingStore {
    public static let appGroupID = "group.com.learnofchrist.app.shared"
    private static let storageKey = "loc.shared.todaysChapter.v1"

    private static var defaults: UserDefaults? {
        UserDefaults(suiteName: appGroupID)
    }

    /// Reads the current rotation entry, or returns `.placeholder`
    /// when the app has not written one yet.
    public static func load() -> SharedReadingState {
        guard
            let defaults,
            let data = defaults.data(forKey: storageKey),
            let decoded = try? JSONDecoder().decode(SharedReadingState.self, from: data)
        else {
            return .placeholder
        }
        return decoded
    }

    /// Writes a new entry and asks WidgetKit to reload all timelines so
    /// the user sees the change without waiting for the next refresh window.
    public static func save(_ state: SharedReadingState) {
        guard let defaults else { return }
        if let data = try? JSONEncoder().encode(state) {
            defaults.set(data, forKey: storageKey)
        }
        // WidgetCenter import lives in the widget extension; the main app
        // calls reloadAllTimelines() directly after this returns.
    }
}
