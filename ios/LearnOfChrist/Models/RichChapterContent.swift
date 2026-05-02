// RichChapterContent.swift
// ────────────────────────────────────────────────────────────────────────────
// Swift mirror of the TypeScript RichChapterContent shape produced by
// scripts/build-content-packs.ts. Decodes the per-book pack JSON.
//
// JSON shape (top level of a pack):
//   {
//     "book_slug": "genesis",
//     "book_name": "Genesis",
//     "pack_version": 1,
//     "generated_at": "...",
//     "chapters": {
//       "1": { ...RichChapterContent... },
//       "2": { ...RichChapterContent... },
//       ...
//     }
//   }

import Foundation

struct ContentPack: Codable, Sendable {
    let bookSlug: String
    let bookName: String
    let packVersion: Int
    let generatedAt: String
    /// JSON keys are stringified chapter numbers ("1", "2", ...).
    let chapters: [String: RichChapterContent]

    enum CodingKeys: String, CodingKey {
        case bookSlug = "book_slug"
        case bookName = "book_name"
        case packVersion = "pack_version"
        case generatedAt = "generated_at"
        case chapters
    }

    /// Convenience — sorted chapter numbers as Ints.
    var chapterNumbers: [Int] {
        chapters.keys.compactMap(Int.init).sorted()
    }

    func chapter(_ n: Int) -> RichChapterContent? {
        chapters[String(n)]
    }
}

// MARK: - Rich chapter shape (mirrors src/data/study-chapters/types.ts)

struct RichChapterContent: Codable, Sendable {
    let bookSlug: String
    let bookName: String
    let chapter: Int
    let intros: [String]
    let tapHint: String?
    let showKjvNote: Bool?
    let opener: Opener?
    let sections: [RichSection]
    let bottomShare: BottomShare?
    let hasHebrew: Bool?

    enum CodingKeys: String, CodingKey {
        case bookSlug, bookName, chapter
        case intros, tapHint, showKjvNote, opener, sections, bottomShare, hasHebrew
    }

    struct Opener: Codable, Sendable {
        let matchTitle: SerializedRegex?
        let matchArtist: SerializedRegex?
        let artworkSlug: String?
        let caption: String
    }

    struct BottomShare: Codable, Sendable {
        let quote: String
        let snippet: String
        let ref: String
        let label: String?
    }
}

struct RichSection: Codable, Sendable {
    let ref: String?
    let title: String?
    let blocks: [Block]
}

// MARK: - Block (sum type — decoded by the `kind` discriminator)

enum Block: Sendable {
    case scripture(chapter: Int, lines: [VerseLine])
    case commentary(id: String?, html: String)
    case hebrew(id: String, title: String, script: String, translit: String, description: String)
    case greek(id: String, title: String, script: String, translit: String, description: String)
    case christ(id: String, title: String, html: String)
    case carry(html: String)
    case reflection(id: String, prompt: String)
    case artwork(matchTitle: SerializedRegex?, matchArtist: SerializedRegex?, artworkSlug: String?, caption: String)
    case divider
    /// Forward-compat: any future block kind we haven't taught Swift about
    /// yet decodes as .unknown so the pack still renders.
    case unknown(kind: String)
}

extension Block: Codable {
    private enum Keys: String, CodingKey {
        case kind, id, html, chapter, lines
        case title, script, translit, description
        case prompt
        case matchTitle, matchArtist, artworkSlug, caption
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: Keys.self)
        let kind = try c.decode(String.self, forKey: .kind)
        switch kind {
        case "scripture":
            let chap = try c.decode(Int.self, forKey: .chapter)
            let lines = try c.decode([VerseLine].self, forKey: .lines)
            self = .scripture(chapter: chap, lines: lines)
        case "commentary":
            let id = try c.decodeIfPresent(String.self, forKey: .id)
            let html = try c.decode(String.self, forKey: .html)
            self = .commentary(id: id, html: html)
        case "hebrew":
            self = .hebrew(
                id: try c.decode(String.self, forKey: .id),
                title: try c.decode(String.self, forKey: .title),
                script: try c.decode(String.self, forKey: .script),
                translit: try c.decode(String.self, forKey: .translit),
                description: try c.decode(String.self, forKey: .description)
            )
        case "greek":
            self = .greek(
                id: try c.decode(String.self, forKey: .id),
                title: try c.decode(String.self, forKey: .title),
                script: try c.decode(String.self, forKey: .script),
                translit: try c.decode(String.self, forKey: .translit),
                description: try c.decode(String.self, forKey: .description)
            )
        case "christ":
            self = .christ(
                id: try c.decode(String.self, forKey: .id),
                title: try c.decode(String.self, forKey: .title),
                html: try c.decode(String.self, forKey: .html)
            )
        case "carry":
            self = .carry(html: try c.decode(String.self, forKey: .html))
        case "reflection":
            self = .reflection(
                id: try c.decode(String.self, forKey: .id),
                prompt: try c.decode(String.self, forKey: .prompt)
            )
        case "artwork":
            self = .artwork(
                matchTitle: try c.decodeIfPresent(SerializedRegex.self, forKey: .matchTitle),
                matchArtist: try c.decodeIfPresent(SerializedRegex.self, forKey: .matchArtist),
                artworkSlug: try c.decodeIfPresent(String.self, forKey: .artworkSlug),
                caption: try c.decode(String.self, forKey: .caption)
            )
        case "divider":
            self = .divider
        default:
            self = .unknown(kind: kind)
        }
    }

    func encode(to encoder: Encoder) throws {
        var c = encoder.container(keyedBy: Keys.self)
        switch self {
        case .scripture(let chapter, let lines):
            try c.encode("scripture", forKey: .kind)
            try c.encode(chapter, forKey: .chapter)
            try c.encode(lines, forKey: .lines)
        case .commentary(let id, let html):
            try c.encode("commentary", forKey: .kind)
            try c.encodeIfPresent(id, forKey: .id)
            try c.encode(html, forKey: .html)
        case .hebrew(let id, let title, let script, let translit, let description):
            try c.encode("hebrew", forKey: .kind)
            try c.encode(id, forKey: .id)
            try c.encode(title, forKey: .title)
            try c.encode(script, forKey: .script)
            try c.encode(translit, forKey: .translit)
            try c.encode(description, forKey: .description)
        case .greek(let id, let title, let script, let translit, let description):
            try c.encode("greek", forKey: .kind)
            try c.encode(id, forKey: .id)
            try c.encode(title, forKey: .title)
            try c.encode(script, forKey: .script)
            try c.encode(translit, forKey: .translit)
            try c.encode(description, forKey: .description)
        case .christ(let id, let title, let html):
            try c.encode("christ", forKey: .kind)
            try c.encode(id, forKey: .id)
            try c.encode(title, forKey: .title)
            try c.encode(html, forKey: .html)
        case .carry(let html):
            try c.encode("carry", forKey: .kind)
            try c.encode(html, forKey: .html)
        case .reflection(let id, let prompt):
            try c.encode("reflection", forKey: .kind)
            try c.encode(id, forKey: .id)
            try c.encode(prompt, forKey: .prompt)
        case .artwork(let matchTitle, let matchArtist, let artworkSlug, let caption):
            try c.encode("artwork", forKey: .kind)
            try c.encodeIfPresent(matchTitle, forKey: .matchTitle)
            try c.encodeIfPresent(matchArtist, forKey: .matchArtist)
            try c.encodeIfPresent(artworkSlug, forKey: .artworkSlug)
            try c.encode(caption, forKey: .caption)
        case .divider:
            try c.encode("divider", forKey: .kind)
        case .unknown(let kind):
            try c.encode(kind, forKey: .kind)
        }
    }
}

// MARK: - Verse spans

struct VerseLine: Codable, Sendable, Identifiable {
    let number: Int
    let spans: [VerseSpan]
    var id: Int { number }
}

enum VerseSpan: Sendable {
    case text(String)
    case mark(tone: String, text: String, jumpTo: String)
}

extension VerseSpan: Codable {
    private enum Keys: String, CodingKey { case kind, text, tone, jumpTo }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: Keys.self)
        let kind = try c.decode(String.self, forKey: .kind)
        switch kind {
        case "text":
            self = .text(try c.decode(String.self, forKey: .text))
        case "mark":
            self = .mark(
                tone: try c.decode(String.self, forKey: .tone),
                text: try c.decode(String.self, forKey: .text),
                jumpTo: try c.decode(String.self, forKey: .jumpTo)
            )
        default:
            // Unknown span kind — render as plain text.
            let text = (try? c.decode(String.self, forKey: .text)) ?? ""
            self = .text(text)
        }
    }

    func encode(to encoder: Encoder) throws {
        var c = encoder.container(keyedBy: Keys.self)
        switch self {
        case .text(let s):
            try c.encode("text", forKey: .kind)
            try c.encode(s, forKey: .text)
        case .mark(let tone, let text, let jumpTo):
            try c.encode("mark", forKey: .kind)
            try c.encode(tone, forKey: .tone)
            try c.encode(text, forKey: .text)
            try c.encode(jumpTo, forKey: .jumpTo)
        }
    }

    /// Plain text content of the span (loses highlight styling).
    var text: String {
        switch self {
        case .text(let s): return s
        case .mark(_, let text, _): return text
        }
    }
}

// MARK: - SerializedRegex
// The pack builder marshals JS RegExp as { pattern, flags }. We don't need
// to actually run these on the device for v1 — they're metadata for the
// artwork-matching logic on the web. Decode + keep as opaque structs.

struct SerializedRegex: Codable, Sendable {
    let pattern: String
    let flags: String?
}
