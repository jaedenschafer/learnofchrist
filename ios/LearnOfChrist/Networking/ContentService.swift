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

    /// In-memory cached manifest. Once populated (either from disk or
    /// network), subsequent `fetchManifest()` calls return this value
    /// immediately and a background revalidation task refreshes it
    /// silently. This eliminates ~50–200 ms of JSON decode + UserDefaults
    /// reads on every chapter open.
    private var cachedManifest: ContentManifest?

    /// Tracks an in-flight background revalidation so we don't pile up
    /// duplicate refreshes when several views ask for the manifest at once.
    private var revalidationTask: Task<Void, Never>?

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

    // MARK: - Cached manifest accessor

    /// Returns the in-memory manifest if we have one. Pure accessor —
    /// callers that want a refresh should use `fetchManifest()`.
    func currentManifest() -> ContentManifest? {
        cachedManifest
    }

    /// Returns the manifest entry for a given book slug from the
    /// in-memory cache, without touching disk or network.
    func cachedEntry(forBook slug: String) -> ContentManifest.Entry? {
        cachedManifest?.entries.first(where: { $0.book == slug })
    }

    // MARK: - Manifest

    /// Returns the manifest. If we have an in-memory copy, it comes back
    /// immediately and a background revalidation task runs silently to
    /// refresh it. Otherwise we synchronously hydrate from disk (if a
    /// previous launch cached it) or fetch from the network.
    ///
    /// The manifest is small (~19 KB), but the packs the manifest points at
    /// are content-hash cached separately by `loadPack(_:)` — so on a quiet
    /// launch (no content has changed) we issue exactly one conditional GET
    /// and read every pack from disk.
    func fetchManifest() async throws -> ContentManifest {
        // Fast path: in-memory hit. Kick off a silent revalidation and return.
        if let cached = cachedManifest {
            scheduleBackgroundRevalidation()
            return cached
        }

        // Cold path: try the on-disk copy first to avoid blocking on the network.
        if let diskData = try? cache.read(path: manifestCachePath),
           let decoded = try? decoder.decode(ContentManifest.self, from: diskData) {
            cachedManifest = decoded
            scheduleBackgroundRevalidation()
            return decoded
        }

        // No cache anywhere — must fetch.
        let fresh = try await performManifestFetch()
        cachedManifest = fresh
        return fresh
    }

    /// Schedules a fire-and-forget refresh of the manifest in the
    /// background. Coalesces concurrent callers onto a single task.
    private func scheduleBackgroundRevalidation() {
        if revalidationTask != nil { return }
        revalidationTask = Task { [weak self] in
            guard let self else { return }
            await self.runRevalidation()
        }
    }

    private func runRevalidation() async {
        defer { revalidationTask = nil }
        do {
            let fresh = try await performManifestFetch()
            cachedManifest = fresh
        } catch {
            // Silent failure — we still have the cached copy.
        }
    }

    /// The actual network call. Issues a conditional GET; on 304 falls
    /// back to the on-disk copy. Always returns a decoded manifest (or
    /// throws).
    private func performManifestFetch() async throws -> ContentManifest {
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
            if let cachedData = try? cache.read(path: manifestCachePath) {
                do {
                    return try decoder.decode(ContentManifest.self, from: cachedData)
                } catch {
                    // Local cache corrupt — discard, force redownload.
                    defaults.removeObject(forKey: etagDefaultsKey)
                    defaults.removeObject(forKey: lastModifiedDefaultsKey)
                    return try await performManifestFetch()
                }
            }
            // No local copy despite a 304 — clear the validators and retry.
            defaults.removeObject(forKey: etagDefaultsKey)
            defaults.removeObject(forKey: lastModifiedDefaultsKey)
            return try await performManifestFetch()
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
    ///
    /// When the in-memory manifest already agrees with the caller's entry
    /// (same book + same hash), we skip rehashing the on-disk bytes — the
    /// manifest is our source of truth for "is this pack current", and the
    /// SHA-256 of a ~500 KB pack on a cold-start of a chapter open was
    /// ~30 ms on iPhone 12-class hardware. We still hash on cache miss
    /// since the bytes there are unverified.
    func loadPack(_ entry: ContentManifest.Entry) async throws -> ContentPack {
        let manifestAgrees = cachedManifest?.entries.contains(where: {
            $0.book == entry.book && $0.hash == entry.hash
        }) ?? false

        // Cache hit — when the manifest agrees, trust the file; otherwise
        // verify the hash before decoding.
        if let cachedData = try? cache.read(path: entry.path) {
            let trusted = manifestAgrees || cache.sha256(cachedData) == entry.hash
            if trusted {
                do {
                    return try decoder.decode(ContentPack.self, from: cachedData)
                } catch {
                    // Cache file is corrupt; fall through to redownload.
                }
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
