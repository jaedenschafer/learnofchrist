// BlogService.swift
// ────────────────────────────────────────────────────────────────────────────
// Read-only PostgREST client for the `blog_posts` table. Same idiom as
// ArtService — anon JWT only, no user session needed. Filters to
// status='published' so drafts never leak to iOS.

import Foundation

struct BlogPostPreview: Decodable, Hashable, Identifiable {
    let slug: String
    let title: String
    let excerpt: String?
    let featured_image_url: String?
    let published_at: String?

    var id: String { slug }

    var heroURL: URL? {
        guard let s = featured_image_url else { return nil }
        return URL(string: s)
    }

    /// Best-effort parse of the ISO 8601 timestamp from the server.
    /// Supabase columns with fractional-second precision serialise
    /// with `.SSSSSS+00:00`; columns without precision come back
    /// without the fractional segment. Try both and accept whichever
    /// works.
    var publishedDate: Date? {
        guard let s = published_at else { return nil }
        let f = ISO8601DateFormatter()
        f.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        if let d = f.date(from: s) { return d }
        f.formatOptions = [.withInternetDateTime]
        return f.date(from: s)
    }
}

actor BlogService {
    static let shared = BlogService()

    private let session: URLSession
    private let decoder: JSONDecoder

    init(session: URLSession = .shared) {
        self.session = session
        self.decoder = JSONDecoder()
    }

    /// Most-recent published posts, descending by `published_at`.
    func listLatest(limit: Int = 30) async throws -> [BlogPostPreview] {
        let url = SupabaseConfig.restURL("blog_posts").appending(queryItems: [
            URLQueryItem(name: "select", value: "slug,title,excerpt,featured_image_url,published_at"),
            URLQueryItem(name: "status", value: "eq.published"),
            URLQueryItem(name: "order", value: "published_at.desc"),
            URLQueryItem(name: "limit", value: String(limit)),
        ])
        var req = URLRequest(url: url)
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        req.setValue("Bearer \(SupabaseConfig.anonKey)", forHTTPHeaderField: "Authorization")
        let (data, resp) = try await session.data(for: req)
        guard let http = resp as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            let status = (resp as? HTTPURLResponse)?.statusCode ?? -1
            throw URLError(.badServerResponse, userInfo: [
                NSLocalizedDescriptionKey: "Blog fetch failed: HTTP \(status)"
            ])
        }
        return try decoder.decode([BlogPostPreview].self, from: data)
    }
}
