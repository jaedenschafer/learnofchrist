// PackCache.swift
// ────────────────────────────────────────────────────────────────────────────
// File-based cache for content packs in Application Support. Each pack
// is stored verbatim as the bytes downloaded from Supabase Storage so we
// can rehash and validate on read.
//
// Layout on disk:
//   <Application Support>/learnofchrist/content/v1/manifest.json
//   <Application Support>/learnofchrist/content/v1/chapters/<book>.json
//
// We don't need a database for this; the file system is the cache.

import Foundation
import CryptoKit

struct PackCache {
    let baseURL: URL

    init(fileManager: FileManager = .default) {
        let appSupport = (try? fileManager.url(
            for: .applicationSupportDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: true
        )) ?? URL(fileURLWithPath: NSTemporaryDirectory())
        self.baseURL = appSupport
            .appendingPathComponent("learnofchrist", isDirectory: true)
            .appendingPathComponent("content", isDirectory: true)
            .appendingPathComponent("v1", isDirectory: true)
        try? fileManager.createDirectory(
            at: self.baseURL,
            withIntermediateDirectories: true
        )
    }

    /// Reads the cached body for a manifest path (e.g. "chapters/genesis.json").
    /// Throws if the file doesn't exist; callers should treat that as a
    /// cache miss and download.
    func read(path: String) throws -> Data {
        let url = baseURL.appendingPathComponent(path)
        return try Data(contentsOf: url)
    }

    /// Writes the body atomically into the cache, creating intermediate
    /// directories as needed.
    func write(path: String, data: Data) throws {
        let url = baseURL.appendingPathComponent(path)
        try FileManager.default.createDirectory(
            at: url.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try data.write(to: url, options: .atomic)
    }

    /// SHA-256 hex digest, matching the format the build script writes
    /// into the manifest (lowercase hex of the raw bytes).
    func sha256(_ data: Data) -> String {
        let digest = SHA256.hash(data: data)
        return digest.map { String(format: "%02x", $0) }.joined()
    }
}
