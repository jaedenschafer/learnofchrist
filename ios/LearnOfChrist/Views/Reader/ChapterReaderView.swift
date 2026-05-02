// ChapterReaderView.swift
// ────────────────────────────────────────────────────────────────────────────
// Renders a RichChapterContent. Every visual reference goes through
// Theme — no hex literals, no system colors at the view level.
// When the redesign lands, edits live in Theme.swift and the named
// asset colors, not here.

import SwiftUI

struct ChapterReaderView: View {
    let chapter: RichChapterContent

    @Environment(UserDataStore.self) private var userData
    @State private var isBookmarked: Bool = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Theme.metric.readerSectionSpacing) {
                header
                ForEach(Array(chapter.intros.enumerated()), id: \.offset) { _, p in
                    Text(p)
                        .font(Theme.font.body)
                        .foregroundStyle(Theme.color.secondaryLabel)
                }

                ForEach(Array(chapter.sections.enumerated()), id: \.offset) { _, section in
                    SectionView(section: section)
                }
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.vertical, Theme.metric.spaceL)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .background(Theme.color.background)
        .navigationTitle("\(chapter.bookName) \(chapter.chapter)")
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    isBookmarked = userData.toggleChapterBookmark(
                        bookSlug: chapter.bookSlug,
                        chapter: chapter.chapter
                    )
                } label: {
                    Image(systemName: isBookmarked ? "bookmark.fill" : "bookmark")
                }
                .accessibilityLabel(isBookmarked ? "Remove bookmark" : "Bookmark this chapter")
            }
        }
        .onAppear {
            isBookmarked = userData.isChapterBookmarked(
                bookSlug: chapter.bookSlug,
                chapter: chapter.chapter
            )
        }
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS) {
            Text(chapter.bookName.uppercased())
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)
            Text("Chapter \(chapter.chapter)")
                .font(Theme.font.display)
                .foregroundStyle(Theme.color.label)
        }
    }
}

private struct SectionView: View {
    let section: RichSection

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            if let ref = section.ref {
                Text(ref)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
            if let title = section.title {
                Text(title)
                    .font(Theme.font.title)
                    .foregroundStyle(Theme.color.label)
            }
            ForEach(Array(section.blocks.enumerated()), id: \.offset) { _, block in
                BlockView(block: block)
            }
        }
        .padding(.vertical, Theme.metric.spaceS)
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
            ProseBlock(html: html)
        case .christ(_, let title, let html):
            CalloutBlock(title: title, html: html, tone: .warmSubtle)
        case .carry(let html):
            CalloutBlock(title: "Carry into your day", html: html, tone: .warm)
        case .hebrew(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Hebrew", title: title, script: script, translit: translit, description: description)
        case .greek(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Greek", title: title, script: script, translit: translit, description: description)
        case .reflection(_, let prompt):
            CalloutBlock(title: "Reflect", html: prompt, tone: .subtle)
        case .artwork(_, _, _, let caption):
            ArtworkPlaceholder(caption: caption)
        case .divider:
            Divider().padding(.vertical, Theme.metric.spaceXS)
        case .unknown:
            EmptyView()
        }
    }
}

// MARK: - Block subviews

private struct ScriptureBlock: View {
    let lines: [VerseLine]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            ForEach(lines) { line in
                HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceXS + 2) {
                    Text("\(line.number)")
                        .font(Theme.font.eyebrow)
                        .foregroundStyle(Theme.color.secondaryLabel)
                        .frame(minWidth: Theme.metric.verseNumberMinWidth, alignment: .trailing)
                    Text(line.spans.map(\.text).joined())
                        .font(Theme.font.body)
                        .foregroundStyle(Theme.color.label)
                }
            }
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.subtle)
    }
}

private struct ProseBlock: View {
    let html: String

    var body: some View {
        Text(plainText(from: html))
            .font(Theme.font.body)
            .foregroundStyle(Theme.color.label)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.vertical, Theme.metric.spaceXS)
    }
}

private struct CalloutBlock: View {
    let title: String
    let html: String
    let tone: ThemeFillTone

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text(title)
                .font(Theme.font.cardTitle)
                .foregroundStyle(Theme.color.label)
            Text(plainText(from: html))
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.label)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(tone)
    }
}

private struct LanguageCallout: View {
    let badge: String
    let title: String
    let script: String
    let translit: String
    let description: String

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS + 2) {
            HStack {
                Text(badge.uppercased())
                    .font(Theme.font.eyebrow)
                    .padding(.horizontal, Theme.metric.spaceS)
                    .padding(.vertical, 2)
                    .background(Theme.color.accent.opacity(0.18), in: Capsule())
                    .foregroundStyle(Theme.color.accent)
                Text(title)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
            }
            HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceS) {
                Text(script)
                    .font(.system(.title3, design: .serif))
                    .foregroundStyle(Theme.color.label)
                Text(translit)
                    .font(.system(.subheadline, design: .serif).italic())
                    .foregroundStyle(Theme.color.secondaryLabel)
            }
            Text(plainText(from: description))
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.label)
                .padding(.top, 2)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.warmSubtle)
    }
}

private struct ArtworkPlaceholder: View {
    let caption: String

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS + 2) {
            RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                .fill(Theme.color.fillMuted)
                .aspectRatio(3.0 / 2.0, contentMode: .fit)
                .overlay {
                    Image(systemName: "photo.on.rectangle.angled")
                        .font(.system(size: 32))
                        .foregroundStyle(Theme.color.secondaryLabel)
                }
            Text(caption)
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.secondaryLabel)
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
