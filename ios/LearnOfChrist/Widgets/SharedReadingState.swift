// SharedReadingState.swift  — main-app mirror
// ────────────────────────────────────────────────────────────────────────────
// EXACT mirror of ios/LearnOfChristWidgets/SharedReadingState.swift so the
// main app target can read/write the App Group store without depending on
// the widget extension target.
//
// If you edit one, edit BOTH. The schema version `v1` is enforced via the
// storage key suffix.

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

    public static func save(_ state: SharedReadingState) {
        guard let defaults else { return }
        if let data = try? JSONEncoder().encode(state) {
            defaults.set(data, forKey: storageKey)
        }
    }
}
