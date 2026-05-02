// ScriptureRefTests.swift
// ────────────────────────────────────────────────────────────────────────────
// Drives the canonical scripture-ref parser through the shared test
// vectors at /docs/scripture-ref-test-vectors.json. The JSON is bundled
// into the test target as a resource (see project.yml).

import XCTest
@testable import LearnOfChrist

final class ScriptureRefTests: XCTestCase {

    // MARK: - Vector loader

    private struct Vectors: Decodable {
        let valid: [Valid]
        let invalid: [String]
        let format_round_trip: [RoundTrip]

        struct Valid: Decodable {
            let input: String
            let book: String
            let chapter: Int
            let verseStart: Int?
            let verseEnd: Int?
            let isWholeChapter: Bool
            let isRange: Bool
            let format: String
        }

        struct RoundTrip: Decodable {
            let fields: Fields
            let expected: String
            struct Fields: Decodable {
                let book: String
                let chapter: Int
                let verseStart: Int?
                let verseEnd: Int?
            }
        }
    }

    private func loadVectors() throws -> Vectors {
        let bundle = Bundle(for: Self.self)
        guard let url = bundle.url(
            forResource: "scripture-ref-test-vectors",
            withExtension: "json"
        ) else {
            XCTFail("scripture-ref-test-vectors.json not in test bundle")
            throw NSError(domain: "test", code: 1)
        }
        let data = try Data(contentsOf: url)
        return try JSONDecoder().decode(Vectors.self, from: data)
    }

    // MARK: - Tests

    func testValidVectorsParseAndFormatBackToCanonical() throws {
        let vectors = try loadVectors()
        for v in vectors.valid {
            guard let ref = ScriptureRef.parse(v.input) else {
                XCTFail("Failed to parse known-valid input: \(v.input)")
                continue
            }
            XCTAssertEqual(ref.book, v.book, v.input)
            XCTAssertEqual(ref.chapter, v.chapter, v.input)
            XCTAssertEqual(ref.verseStart, v.verseStart, v.input)
            XCTAssertEqual(ref.verseEnd, v.verseEnd, v.input)
            XCTAssertEqual(ref.isWholeChapter, v.isWholeChapter, v.input)
            XCTAssertEqual(ref.isRange, v.isRange, v.input)
            XCTAssertEqual(ref.canonical, v.format, v.input)
        }
    }

    func testInvalidVectorsRejected() throws {
        let vectors = try loadVectors()
        for input in vectors.invalid {
            XCTAssertNil(
                ScriptureRef.parse(input),
                "Expected '\(input)' to be rejected, but it parsed."
            )
        }
    }

    func testFieldRoundTripMatchesExpectedString() throws {
        let vectors = try loadVectors()
        for v in vectors.format_round_trip {
            let ref = ScriptureRef(
                book: v.fields.book,
                chapter: v.fields.chapter,
                verseStart: v.fields.verseStart,
                verseEnd: v.fields.verseEnd
            )
            XCTAssertEqual(ref.canonical, v.expected)
            // And re-parse to confirm the canonical string round-trips.
            XCTAssertEqual(ScriptureRef.parse(ref.canonical), ref)
        }
    }

    func testCodableSingleValueRoundTrip() throws {
        let original = ScriptureRef(book: "1-corinthians", chapter: 13, verseStart: 4, verseEnd: 7)
        let data = try JSONEncoder().encode(original)
        XCTAssertEqual(String(data: data, encoding: .utf8), "\"1-corinthians.13.4-7\"")
        let decoded = try JSONDecoder().decode(ScriptureRef.self, from: data)
        XCTAssertEqual(decoded, original)
    }
}
