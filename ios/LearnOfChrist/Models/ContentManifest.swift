// ContentManifest.swift
// ────────────────────────────────────────────────────────────────────────────
// Mirrors the JSON written by scripts/build-content-packs.ts and uploaded
// to Supabase Storage at /content/v1/manifest.json.
//
// On cold launch the app fetches the manifest, compares each entry's hash
// to its locally cached pack, and downloads only the ones that changed.

import Foundation

struct ContentManifest: Codable, Sendable {
    let packVersion: Int
    let generatedAt: String
    let generator: String
    let entries: [Entry]

    struct Entry: Codable, Sendable, Identifiable, Hashable {
        let path: String       // "chapters/genesis.json"
        let hash: String       // sha256 hex
        let size: Int          // bytes
        let book: String       // "genesis"
        let bookName: String   // "Genesis"
        let chapters: Int      // count of chapters in this pack

        var id: String { book }

        enum CodingKeys: String, CodingKey {
            case path, hash, size, book, chapters
            case bookName = "book_name"
        }
    }

    enum CodingKeys: String, CodingKey {
        case generatedAt = "generated_at"
        case packVersion = "pack_version"
        case entries, generator
    }
}
