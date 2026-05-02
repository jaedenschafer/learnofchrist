// ChapterReaderView.swift
// ────────────────────────────────────────────────────────────────────────────
// Renders a RichChapterContent. v1 covers the block kinds Genesis 1 uses
// (scripture, commentary, christ, hebrew, carry, divider) plus a generic
// fallback so unknown / future block kinds never crash the reader.
//
// This is intentionally NOT a faithful port of the web's typography — it's
// the simplest credible iOS read so we can prove the pipeline. We'll
// invest in pixel parity once the UX direction is locked in.

import SwiftUI

struct ChapterReaderView: View {
    let chapter: RichChapterContent

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                header
                ForEach(Array(chapter.intros.enumerated()), id: \.offset) { _, p in
                    Text(p)
                        .font(.body)
                        .foregroundStyle(.secondary)
                }

                ForEach(Array(chapter.sections.enumerated()), id: \.offset) { _, section in
                    SectionView(section: section)
                }
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 16)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .navigationTitle("\(chapter.bookName) \(chapter.chapter)")
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(chapter.bookName.uppercased())
                .font(.caption)
                .tracking(2)
                .foregroundStyle(.secondary)
            Text("Chapter \(chapter.chapter)")
                .font(.largeTitle.weight(.semibold))
        }
    }
}

private struct SectionView: View {
    let section: RichSection

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            if let ref = section.ref {
                Text(ref)
                    .font(.caption)
                    .foregroundStyle(.tertiary)
            }
            if let title = section.title {
                Text(title)
                    .font(.title2.weight(.semibold))
            }
            ForEach(Array(section.blocks.enumerated()), id: \.offset) { _, block in
                BlockView(block: block)
            }
        }
        .padding(.vertical, 8)
    }
}

// MARK: - Block dispatch

private struct BlockView: View {
    let block: Block

    var body: some View {
        switch block {
        case .scripture(_, let lines):
            ScriptureBlock(lines: lines)
        case .commentary(_, let html):
            ProseBlock(html: html, tint: nil)
        case .christ(_, let title, let html):
            CalloutBlock(title: title, html: html, tint: .accentColor.opacity(0.12))
        case .carry(let html):
            CalloutBlock(title: "Carry into your day", html: html, tint: .yellow.opacity(0.18))
        case .hebrew(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Hebrew", title: title, script: script, translit: translit, description: description)
        case .greek(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Greek", title: title, script: script, translit: translit, description: description)
        case .reflection(_, let prompt):
            CalloutBlock(title: "Reflect", html: prompt, tint: .indigo.opacity(0.12))
        case .artwork(_, _, _, let caption):
            ArtworkPlaceholder(caption: caption)
        case .divider:
            Divider().padding(.vertical, 4)
        case .unknown:
            EmptyView()
        }
    }
}

// MARK: - Block subviews

private struct ScriptureBlock: View {
    let lines: [VerseLine]

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            ForEach(lines) { line in
                HStack(alignment: .firstTextBaseline, spacing: 6) {
                    Text("\(line.number)")
                        .font(.caption2.weight(.bold))
                        .foregroundStyle(.secondary)
                        .frame(minWidth: 18, alignment: .trailing)
                    Text(line.spans.map(\.text).joined())
                        .font(.body)
                }
            }
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.secondary.opacity(0.08), in: RoundedRectangle(cornerRadius: 12))
    }
}

private struct ProseBlock: View {
    let html: String
    let tint: Color?

    var body: some View {
        Text(plainText(from: html))
            .font(.body)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.vertical, 4)
    }
}

private struct CalloutBlock: View {
    let title: String
    let html: String
    let tint: Color

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.subheadline.weight(.semibold))
            Text(plainText(from: html))
                .font(.callout)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(tint, in: RoundedRectangle(cornerRadius: 12))
    }
}

private struct LanguageCallout: View {
    let badge: String
    let title: String
    let script: String
    let translit: String
    let description: String

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack {
                Text(badge.uppercased())
                    .font(.caption2.weight(.bold))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 2)
                    .background(Color.accentColor.opacity(0.18), in: Capsule())
                Text(title)
                    .font(.subheadline.weight(.semibold))
            }
            HStack(alignment: .firstTextBaseline, spacing: 8) {
                Text(script)
                    .font(.title3)
                Text(translit)
                    .font(.subheadline.italic())
                    .foregroundStyle(.secondary)
            }
            Text(plainText(from: description))
                .font(.callout)
                .padding(.top, 2)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.secondary.opacity(0.05), in: RoundedRectangle(cornerRadius: 12))
    }
}

private struct ArtworkPlaceholder: View {
    let caption: String

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            RoundedRectangle(cornerRadius: 12)
                .fill(Color.gray.opacity(0.18))
                .aspectRatio(3.0 / 2.0, contentMode: .fit)
                .overlay {
                    Image(systemName: "photo.on.rectangle.angled")
                        .font(.system(size: 32))
                        .foregroundStyle(.secondary)
                }
            Text(caption)
                .font(.caption)
                .foregroundStyle(.secondary)
        }
    }
}

// MARK: - Helpers

/// Strip HTML tags from a commentary string. Web renders these with rich
/// markup; iOS v1 just shows the plain text. Replace with NSAttributedString
/// once we want to render <em>/<strong>/<a> styled.
private func plainText(from html: String) -> String {
    let stripped = html.replacingOccurrences(
        of: "<[^>]+>",
        with: "",
        options: .regularExpression
    )
    return stripped
        .replacingOccurrences(of: "&nbsp;", with: " ")
        .replacingOccurrences(of: "&amp;", with: "&")
        .replacingOccurrences(of: "&lt;", with: "<")
        .replacingOccurrences(of: "&gt;", with: ">")
        .replacingOccurrences(of: "&#39;", with: "'")
        .replacingOccurrences(of: "&quot;", with: "\"")
        .replacingOccurrences(of: "&mdash;", with: "—")
        .replacingOccurrences(of: "&ndash;", with: "–")
        .trimmingCharacters(in: .whitespacesAndNewlines)
}
