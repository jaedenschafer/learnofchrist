// ScriptureService.swift
// ────────────────────────────────────────────────────────────────────────────
// Read-only PostgREST client for the public-domain Bible translations
// hosted in Supabase. Powers the iOS reader's "Bible" (plain scripture)
// mode and translation switcher.
//
// Tables it touches (read-only, anon JWT):
//   - translations   (id, abbreviation, name)
//   - books          (id, slug)
//   - verses         (book_id, chapter, verse_number, text, translation_id)
//
// Each fetch is two requests in parallel (translation + book lookup),
// followed by one verses query. Small payloads — a typical chapter is
// 10–40 verses, mostly under 4 KB — so we don't bother with disk caching.
// We DO cache resolved translation/book IDs in memory for the session
// since they never change.

import Foundation

/// One line of scripture as it comes back from PostgREST.
public struct ScriptureVerse: Decodable, Identifiable, Hashable {
    public let verse_number: Int
    public let text: String
    public var id: Int { verse_number }
}

/// Available Bible translation. Mirrors `PUBLIC_DOMAIN_TRANSLATIONS` in
/// `src/lib/readerPrefs.ts` on the web.
public struct BibleTranslation: Identifiable, Hashable {
    public let abbreviation: String
    public let name: String
    public var id: String { abbreviation }

    public static let publicDomain: [BibleTranslation] = [
        .init(abbreviation: "kjv", name: "King James Version"),
        .init(abbreviation: "asv", name: "American Standard Version"),
        .init(abbreviation: "bsb", name: "Berean Standard Bible"),
        .init(abbreviation: "dra", name: "Douay-Rheims American"),
        .init(abbreviation: "jst", name: "Joseph Smith Translation"),
        .init(abbreviation: "lsv", name: "Literal Standard Version"),
        .init(abbreviation: "nwt", name: "New World Translation"),
        .init(abbreviation: "web", name: "World English Bible"),
    ]

    public static let `default` = publicDomain[0]   // KJV
}

actor ScriptureService {
    public static let shared = ScriptureService()

    private let session: URLSession
    private let decoder = JSONDecoder()

    // Process-lifetime caches — translation and book IDs never change.
    private var translationIdCache: [String: String] = [:]   // abbr → UUID
    private var bookIdCache: [String: String] = [:]          // slug  → UUID

    init(session: URLSession = .shared) {
        self.session = session
    }

    /// Returns verses for the given chapter in the given translation,
    /// ordered by verse_number. Returns an empty array if the
    /// translation has no coverage for this chapter (e.g., NT-only
    /// translations queried against Genesis).
    public func verses(
        bookSlug: String,
        chapter: Int,
        translation: String
    ) async throws -> [ScriptureVerse] {
        async let translationID = resolveTranslationID(translation)
        async let bookID        = resolveBookID(bookSlug)
        guard let tID = try await translationID,
              let bID = try await bookID
        else { return [] }

        let url = SupabaseConfig.restURL("verses").appending(queryItems: [
            URLQueryItem(name: "select", value: "verse_number,text"),
            URLQueryItem(name: "book_id", value: "eq.\(bID)"),
            URLQueryItem(name: "chapter", value: "eq.\(chapter)"),
            URLQueryItem(name: "translation_id", value: "eq.\(tID)"),
            URLQueryItem(name: "order", value: "verse_number.asc"),
        ])
        let data = try await get(url)
        return try decoder.decode([ScriptureVerse].self, from: data)
    }

    // MARK: - ID resolvers

    private func resolveTranslationID(_ abbr: String) async throws -> String? {
        if let cached = translationIdCache[abbr] { return cached }
        struct Row: Decodable { let id: String }
        let url = SupabaseConfig.restURL("translations").appending(queryItems: [
            URLQueryItem(name: "select", value: "id"),
            URLQueryItem(name: "abbreviation", value: "eq.\(abbr)"),
            URLQueryItem(name: "limit", value: "1"),
        ])
        let data = try await get(url)
        guard let row = try decoder.decode([Row].self, from: data).first else { return nil }
        translationIdCache[abbr] = row.id
        return row.id
    }

    private func resolveBookID(_ slug: String) async throws -> String? {
        if let cached = bookIdCache[slug] { return cached }
        struct Row: Decodable { let id: String }
        let url = SupabaseConfig.restURL("books").appending(queryItems: [
            URLQueryItem(name: "select", value: "id"),
            URLQueryItem(name: "slug", value: "eq.\(slug)"),
            URLQueryItem(name: "limit", value: "1"),
        ])
        let data = try await get(url)
        guard let row = try decoder.decode([Row].self, from: data).first else { return nil }
        bookIdCache[slug] = row.id
        return row.id
    }

    // MARK: - HTTP

    private func get(_ url: URL) async throws -> Data {
        var req = URLRequest(url: url)
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        req.setValue("Bearer \(SupabaseConfig.anonKey)", forHTTPHeaderField: "Authorization")
        let (data, resp) = try await session.data(for: req)
        guard let http = resp as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            let status = (resp as? HTTPURLResponse)?.statusCode ?? -1
            throw URLError(.badServerResponse, userInfo: [
                NSLocalizedDescriptionKey: "Scripture fetch failed: HTTP \(status)"
            ])
        }
        return data
    }
}
