// ScriptureRef.swift
// ────────────────────────────────────────────────────────────────────────────
// The canonical scripture-reference type used everywhere a scripture
// pointer needs to cross a boundary — deep links, push payloads, widget
// configuration, journal anchors, sync row identifiers, share sheets.
//
// Format:
//
//     <book-slug>.<chapter>[.<verse>][-<verse_end>]
//
//     john.3.16              single verse
//     genesis.1.1-3          verse range
//     psalms.23              whole chapter
//
// Test vectors live at /docs/scripture-ref-test-vectors.json. Every
// client (Swift, Kotlin, TypeScript) must round-trip them byte-for-byte.
// See docs/MOBILE-PLATFORM-STRATEGY.md for the rationale.

import Foundation

struct ScriptureRef: Hashable, Sendable {
    /// Book slug, e.g. "genesis", "1-corinthians", "song-of-solomon".
    let book: String
    /// Chapter number, 1-indexed.
    let chapter: Int
    /// First verse in the range. `nil` means the whole chapter is referenced.
    let verseStart: Int?
    /// Inclusive last verse. Always equals `verseStart` for a single verse.
    let verseEnd: Int?

    init(book: String, chapter: Int, verseStart: Int? = nil, verseEnd: Int? = nil) {
        self.book = book
        self.chapter = chapter
        self.verseStart = verseStart
        // Normalize: a missing verseEnd implies the same verse as verseStart.
        self.verseEnd = verseStart != nil ? (verseEnd ?? verseStart) : nil
    }

    var isWholeChapter: Bool { verseStart == nil }
    var isRange: Bool {
        guard let s = verseStart, let e = verseEnd else { return false }
        return e > s
    }

    /// Canonical string form. Round-trips exactly through `parse`.
    var canonical: String {
        guard let start = verseStart, let end = verseEnd else {
            return "\(book).\(chapter)"
        }
        if end > start {
            return "\(book).\(chapter).\(start)-\(end)"
        }
        return "\(book).\(chapter).\(start)"
    }
}

extension ScriptureRef: CustomStringConvertible {
    var description: String { canonical }
}

extension ScriptureRef: Codable {
    init(from decoder: Decoder) throws {
        let raw = try decoder.singleValueContainer().decode(String.self)
        guard let parsed = ScriptureRef.parse(raw) else {
            throw DecodingError.dataCorruptedError(
                in: try decoder.singleValueContainer(),
                debugDescription: "Invalid canonical scripture ref: \(raw)"
            )
        }
        self = parsed
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(canonical)
    }
}

// MARK: - Parser

extension ScriptureRef {
    /// Parses the canonical form. Returns nil for any deviation — case,
    /// whitespace, en-dashes, missing parts. The strict reading is
    /// intentional: this is an interchange format, not a search input.
    static func parse(_ s: String) -> ScriptureRef? {
        // No leading / trailing whitespace; no internal whitespace.
        guard !s.isEmpty,
              s == s.trimmingCharacters(in: .whitespacesAndNewlines),
              !s.contains(where: \.isWhitespace) else {
            return nil
        }

        // Split into segments on the dot. Book slugs may contain hyphens
        // but never dots, so the parts are well-delimited.
        let parts = s.split(separator: ".", omittingEmptySubsequences: false)
        guard parts.count == 2 || parts.count == 3 else { return nil }

        // Book slug must match the canonical pattern: lowercase letters,
        // digits, and hyphens. No leading/trailing hyphen.
        let book = String(parts[0])
        guard isValidBookSlug(book) else { return nil }

        guard let chapter = Int(parts[1]), chapter >= 1, parts[1].allSatisfy(\.isASCIIDigit) else {
            return nil
        }

        // Whole-chapter form: `book.chapter` — no third segment.
        guard parts.count == 3 else {
            return ScriptureRef(book: book, chapter: chapter)
        }

        // Verse segment: either "<n>" or "<n>-<m>" with m > n.
        let verseSegment = parts[2]
        guard !verseSegment.isEmpty else { return nil }

        let verseParts = verseSegment.split(separator: "-", omittingEmptySubsequences: false)
        switch verseParts.count {
        case 1:
            guard let v = Int(verseParts[0]),
                  v >= 1,
                  verseParts[0].allSatisfy(\.isASCIIDigit) else { return nil }
            return ScriptureRef(book: book, chapter: chapter, verseStart: v, verseEnd: v)
        case 2:
            guard let start = Int(verseParts[0]),
                  let end = Int(verseParts[1]),
                  start >= 1, end > start,
                  verseParts[0].allSatisfy(\.isASCIIDigit),
                  verseParts[1].allSatisfy(\.isASCIIDigit) else { return nil }
            return ScriptureRef(book: book, chapter: chapter, verseStart: start, verseEnd: end)
        default:
            return nil
        }
    }

    private static func isValidBookSlug(_ s: String) -> Bool {
        guard !s.isEmpty,
              !s.hasPrefix("-"),
              !s.hasSuffix("-") else { return false }
        for c in s {
            // Lowercase letters, digits, hyphen only. No "1corinthians",
            // no uppercase, no underscores.
            if c.isLowercase && c.isLetter { continue }
            if c.isASCIIDigit { continue }
            if c == "-" { continue }
            return false
        }
        return true
    }
}

private extension Character {
    var isASCIIDigit: Bool {
        guard let s = unicodeScalars.first else { return false }
        return s.isASCII && (0x30...0x39).contains(s.value)
    }
}
