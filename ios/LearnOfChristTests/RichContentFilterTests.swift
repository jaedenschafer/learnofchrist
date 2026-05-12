// RichContentFilterTests.swift
// ────────────────────────────────────────────────────────────────────────────
// Drives the Swift filterContent(level, audience) port through the shared
// test vectors at /docs/rich-content-filter-test-vectors.json. The JSON is
// bundled into the test target as a resource (see project.yml).
//
// The TypeScript twin lives at
// src/data/study-chapters/__tests__/filter.test.ts. Both sides MUST pass
// the same set of vectors — that's what keeps the iOS reader from
// silently diverging from the web at depth/audience boundaries.

import XCTest
@testable import LearnOfChrist

final class RichContentFilterTests: XCTestCase {

    // MARK: - Vector loader

    private struct Vectors: Decodable {
        let cases: [Case]

        struct Case: Decodable {
            let name: String
            let description: String
            let level: StudyLevel
            let audience: Audience
            let input: RichChapterContent
            let expected: RichChapterContent
        }
    }

    private func loadVectors() throws -> Vectors {
        let bundle = Bundle(for: Self.self)
        guard let url = bundle.url(
            forResource: "rich-content-filter-test-vectors",
            withExtension: "json"
        ) else {
            XCTFail("rich-content-filter-test-vectors.json not in test bundle")
            throw NSError(domain: "test", code: 1)
        }
        let data = try Data(contentsOf: url)
        return try JSONDecoder().decode(Vectors.self, from: data)
    }

    // MARK: - Equality via JSON round-trip
    //
    // RichChapterContent isn't Equatable (it contains AnnotatedBlock which
    // wraps Block — an enum with arbitrary associated values), and adding
    // Equatable to every value type is more boilerplate than this test is
    // worth. Round-trip both sides through Codable and compare the
    // canonical JSON strings instead. That also matches the TS side, which
    // normalises via JSON.stringify before assert.deepEqual.

    private func encodeCanonical(_ value: RichChapterContent) throws -> String {
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.sortedKeys]
        let data = try encoder.encode(value)
        guard let s = String(data: data, encoding: .utf8) else {
            throw NSError(domain: "test", code: 2)
        }
        return s
    }

    // MARK: - Tests

    func testEveryCase() throws {
        let vectors = try loadVectors()
        XCTAssertFalse(vectors.cases.isEmpty, "No cases in fixture")

        for tc in vectors.cases {
            let got = filterContent(tc.input, level: tc.level, audience: tc.audience)
            do {
                let gotJSON = try encodeCanonical(got)
                let wantJSON = try encodeCanonical(tc.expected)
                XCTAssertEqual(
                    gotJSON,
                    wantJSON,
                    "mismatch in case \"\(tc.name)\" — \(tc.description)"
                )
            } catch {
                XCTFail("encoding failed for case \"\(tc.name)\": \(error)")
            }
        }
    }
}
