// ArtService.swift
// ────────────────────────────────────────────────────────────────────────────
// Read-only PostgREST client for the `artworks` table. Anon reads are
// allowed (the catalog is public on the web), so we don't need a user
// session — apikey + the anon JWT is enough.
//
// In v1 we expose three queries:
//   • listLatest(limit:)  — recent approved artworks, descending by created_at.
//   • listForBook(slug:limit:) — artworks tagged to a specific book.
//   • search(query:limit:) — `search_text` ILIKE for the search bar (later).
//
// All three return `[ArtworkPreview]` — a lightweight projection sized
// for the home / Art-tab grid. Detail screens later can re-fetch the
// full row via slug.

import Foundation

struct ArtworkPreview: Decodable, Hashable, Identifiable {
    let slug: String
    let title: String
    let year: Int?
    let thumbnail_256_url: String?
    let thumbnail_800_url: String?
    let artist_name_cached: String?

    var id: String { slug }

    /// Best preview URL: prefer the 256 thumbnail for grid tiles, fall
    /// back to the larger 800 if 256 is missing.
    var previewURL: URL? {
        if let s = thumbnail_256_url, let u = URL(string: s) { return u }
        if let s = thumbnail_800_url, let u = URL(string: s) { return u }
        return nil
    }
}

actor ArtService {
    static let shared = ArtService()

    private let session: URLSession
    private let decoder: JSONDecoder

    init(session: URLSession = .shared) {
        self.session = session
        self.decoder = JSONDecoder()
    }

    /// Fetch the most-recently-added approved artworks. `limit` capped
    /// server-side to keep payloads small for the home grid.
    func listLatest(limit: Int = 30) async throws -> [ArtworkPreview] {
        let url = SupabaseConfig.restURL("artworks").appending(queryItems: [
            URLQueryItem(name: "select", value: "slug,title,year,thumbnail_256_url,thumbnail_800_url,artist_name_cached"),
            URLQueryItem(name: "moderation_status", value: "eq.approved"),
            URLQueryItem(name: "order", value: "created_at.desc"),
            URLQueryItem(name: "limit", value: String(limit)),
        ])
        return try await fetch(url)
    }

    /// Fetch artworks tied to a specific book (joined via the
    /// `artwork_scripture_refs` table on web). v1.1 — falls back to
    /// the latest list until the join is exposed via PostgREST view.
    func listForBook(slug bookSlug: String, limit: Int = 30) async throws -> [ArtworkPreview] {
        // TODO: hit a real view / RPC once we ship one. For now reuse
        // the latest list so the UI has data.
        try await listLatest(limit: limit)
    }

    /// Server-side substring search over `search_text` (the denormalised
    /// title + artist + biblical theme column populated by a generated-
    /// column trigger on the artworks table). Case-insensitive ILIKE.
    /// PostgREST URL-encodes the pattern for us; we wrap with leading
    /// + trailing wildcards.
    ///
    /// Empty `query` falls through to `listLatest` so a search bar that
    /// debounces to nothing still shows the default grid.
    func search(query: String, limit: Int = 60) async throws -> [ArtworkPreview] {
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else {
            return try await listLatest(limit: limit)
        }
        // PostgREST `ilike` operator: prefix value with `*` wildcards.
        // The library URL-encodes `*` → `%2A` then PostgREST flips it
        // back to `%` server-side. We send the pattern directly with
        // `*` and let the URL builder escape it.
        let pattern = "*\(trimmed)*"
        let url = SupabaseConfig.restURL("artworks").appending(queryItems: [
            URLQueryItem(name: "select", value: "slug,title,year,thumbnail_256_url,thumbnail_800_url,artist_name_cached"),
            URLQueryItem(name: "moderation_status", value: "eq.approved"),
            URLQueryItem(name: "search_text", value: "ilike.\(pattern)"),
            URLQueryItem(name: "order", value: "created_at.desc"),
            URLQueryItem(name: "limit", value: String(limit)),
        ])
        return try await fetch(url)
    }

    // MARK: - Internals

    private func fetch(_ url: URL) async throws -> [ArtworkPreview] {
        var req = URLRequest(url: url)
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        req.setValue("Bearer \(SupabaseConfig.anonKey)", forHTTPHeaderField: "Authorization")
        let (data, resp) = try await session.data(for: req)
        guard let http = resp as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            let status = (resp as? HTTPURLResponse)?.statusCode ?? -1
            throw URLError(.badServerResponse, userInfo: [
                NSLocalizedDescriptionKey: "Art fetch failed: HTTP \(status)"
            ])
        }
        return try decoder.decode([ArtworkPreview].self, from: data)
    }
}
