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

    /// On-disk cache key for the manifest payload (bytes; we decode each launch
    /// for forward-compat with optional fields).
    private let manifestCachePath = "manifest.json"

    /// UserDefaults keys for the conditional-GET cache. ETag lets us send
    /// `If-None-Match` on subsequent launches so an unchanged manifest comes
    /// back as a 304 with an empty body — saves ~19 KB of bandwidth per
    /// launch and lets the CDN serve a near-free response.
    private let etagDefaultsKey = "loc.contentService.manifestETag"
    private let lastModifiedDefaultsKey = "loc.contentService.manifestLastModified"

    private let defaults: UserDefaults

    init(
        session: URLSession = .shared,
        cache: PackCache = PackCache(),
        defaults: UserDefaults = .standard
    ) {
        self.session = session
        self.cache = cache
        self.defaults = defaults
        self.decoder = JSONDecoder()
    }

    // MARK: - Manifest

    /// Fetches the manifest using a conditional GET. If the server returns
    /// 304 Not Modified (and we have a cached copy on disk), we decode the
    /// cached bytes and skip the network payload entirely. Otherwise we
    /// download, persist the ETag/Last-Modified headers, and write the body
    /// to disk so the next launch can short-circuit.
    ///
    /// The manifest is small (~19 KB), but the packs the manifest points at
    /// are content-hash cached separately by `loadPack(_:)` — so on a quiet
    /// launch (no content has changed) we issue exactly one conditional GET
    /// and read every pack from disk.
    func fetchManifest() async throws -> ContentManifest {
        let url = baseURL.appendingPathComponent("manifest.json")
        var req = URLRequest(url: url)
        if let etag = defaults.string(forKey: etagDefaultsKey) {
            req.setValue(etag, forHTTPHeaderField: "If-None-Match")
        }
        if let lastModified = defaults.string(forKey: lastModifiedDefaultsKey) {
            req.setValue(lastModified, forHTTPHeaderField: "If-Modified-Since")
        }

        let (data, resp) = try await session.data(for: req)
        let http = resp as? HTTPURLResponse

        // 304 Not Modified — manifest unchanged. Decode from the on-disk
        // copy if we have one; if the cache is missing/corrupt (e.g. user
        // cleared app data), fall through to an unconditional refetch.
        if http?.statusCode == 304 {
            if let cached = try? cache.read(path: manifestCachePath) {
                do {
                    return try decoder.decode(ContentManifest.self, from: cached)
                } catch {
                    // Local cache corrupt — discard, force redownload.
                    defaults.removeObject(forKey: etagDefaultsKey)
                    defaults.removeObject(forKey: lastModifiedDefaultsKey)
                    return try await fetchManifest()
                }
            }
            // No local copy despite a 304 — clear the validators and retry.
            defaults.removeObject(forKey: etagDefaultsKey)
            defaults.removeObject(forKey: lastModifiedDefaultsKey)
            return try await fetchManifest()
        }

        try Self.expectOK(resp)

        // 200 OK — persist the new validators for next launch.
        if let etag = http?.value(forHTTPHeaderField: "Etag") {
            defaults.set(etag, forKey: etagDefaultsKey)
        }
        if let lastModified = http?.value(forHTTPHeaderField: "Last-Modified") {
            defaults.set(lastModified, forKey: lastModifiedDefaultsKey)
        }
        // Stash the body so the next 304 has something to read.
        try? cache.write(path: manifestCachePath, data: data)

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
