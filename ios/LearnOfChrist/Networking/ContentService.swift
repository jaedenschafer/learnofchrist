// ContentService.swift
// ────────────────────────────────────────────────────────────────────────────
// Fetches the manifest and individual content packs from the public
// Supabase Storage bucket. Read-only; no auth required (the bucket is
// public). Caches packs to disk via PackCache.
//
// In v1 this is the entire networking layer for chapter content.

import Foundation

enum ContentServiceError: Error {
    case badResponse(status: Int)
    case decoding(Error)
    case hashMismatch(expected: String, actual: String)
}

actor ContentService {
    static let shared = ContentService()

    /// Public CDN-fronted base URL for the v1 content bucket.
    /// Matches what scripts/build-content-packs.ts uploads.
    private let baseURL = URL(string:
        "https://uqcgieillyvefzmohzpn.supabase.co/storage/v1/object/public/content/v1"
    )!

    private let session: URLSession
    private let cache: PackCache
    private let decoder: JSONDecoder

    init(session: URLSession = .shared, cache: PackCache = PackCache()) {
        self.session = session
        self.cache = cache
        self.decoder = JSONDecoder()
    }

    // MARK: - Manifest

    /// Always re-fetches the manifest. Tiny (~19 KB) and we want freshness
    /// on every cold launch. The packs themselves are content-hash cached.
    func fetchManifest() async throws -> ContentManifest {
        let url = baseURL.appendingPathComponent("manifest.json")
        let (data, resp) = try await session.data(from: url)
        try Self.expectOK(resp)
        do {
            return try decoder.decode(ContentManifest.self, from: data)
        } catch {
            throw ContentServiceError.decoding(error)
        }
    }

    // MARK: - Packs

    /// Returns the per-book pack, using the local cache if its sha256
    /// matches the manifest entry's hash. Otherwise downloads and replaces.
    func loadPack(_ entry: ContentManifest.Entry) async throws -> ContentPack {
        // Cache hit — verify hash before trusting it.
        if let cachedData = try? cache.read(path: entry.path),
           cache.sha256(cachedData) == entry.hash {
            do {
                return try decoder.decode(ContentPack.self, from: cachedData)
            } catch {
                // Cache file is corrupt; fall through to redownload.
            }
        }

        let url = baseURL.appendingPathComponent(entry.path)
        let (data, resp) = try await session.data(from: url)
        try Self.expectOK(resp)

        let actualHash = cache.sha256(data)
        guard actualHash == entry.hash else {
            throw ContentServiceError.hashMismatch(
                expected: entry.hash,
                actual: actualHash
            )
        }
        try cache.write(path: entry.path, data: data)

        do {
            return try decoder.decode(ContentPack.self, from: data)
        } catch {
            throw ContentServiceError.decoding(error)
        }
    }

    private static func expectOK(_ resp: URLResponse) throws {
        guard let http = resp as? HTTPURLResponse else { return }
        guard (200..<300).contains(http.statusCode) else {
            throw ContentServiceError.badResponse(status: http.statusCode)
        }
    }
}
