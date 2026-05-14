// BibleReaderView.swift
// ────────────────────────────────────────────────────────────────────────────
// "Plain Bible" mode for a chapter. Lists every verse from the
// currently-selected public-domain translation, no study guide, no
// commentary, no callouts. Uses the same liquid-glass card surface as
// the study mode so the two feel like the same app.
//
// Hosted inside ChapterReaderView via a Study/Bible segmented picker
// at the top of the chapter. The translation chip ALSO shows here and
// switching translations re-fetches in place without leaving the
// chapter.

import SwiftUI

struct BibleReaderView: View {
    let bookSlug: String
    let bookName: String
    let chapter: Int
    @Binding var translation: BibleTranslation

    @State private var verses: [ScriptureVerse] = []
    @State private var loadState: LoadState = .idle
    @State private var lastError: String?

    enum LoadState: Equatable { case idle, loading, ready, empty, failed }

    var body: some View {
        ScrollView {
            LazyVStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                header
                content
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.top, Theme.metric.spaceL)
            .padding(.bottom, Theme.metric.spaceXXL)
        }
        .background(Theme.color.background)
        .task(id: TranslationKey(bookSlug: bookSlug, chapter: chapter, abbr: translation.abbreviation)) {
            await load()
        }
    }

    // MARK: - Header

    private var header: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(translation.name.uppercased())
                .font(Theme.font.eyebrow)
                .tracking(3)
                .foregroundStyle(Theme.color.accent)
            Text("\(bookName) \(chapter)")
                .font(.system(.largeTitle, design: .serif).weight(.semibold))
                .foregroundStyle(Theme.color.label)
        }
        .padding(.horizontal, 4)
    }

    // MARK: - Content

    @ViewBuilder
    private var content: some View {
        switch loadState {
        case .idle, .loading:
            ProgressView()
                .frame(maxWidth: .infinity)
                .padding(.vertical, Theme.metric.spaceXXL)
        case .empty:
            VStack(alignment: .center, spacing: 8) {
                Image(systemName: "book.closed")
                    .font(.title)
                    .foregroundStyle(Theme.color.secondaryLabel)
                Text("\(translation.name) doesn't cover this chapter yet.")
                    .font(Theme.font.callout)
                    .foregroundStyle(Theme.color.secondaryLabel)
                    .multilineTextAlignment(.center)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, Theme.metric.spaceXXL)
        case .failed:
            VStack(alignment: .center, spacing: 8) {
                Image(systemName: "exclamationmark.triangle")
                    .font(.title)
                    .foregroundStyle(.orange)
                Text(lastError ?? "Couldn't load this chapter.")
                    .font(Theme.font.callout)
                    .foregroundStyle(Theme.color.secondaryLabel)
                    .multilineTextAlignment(.center)
                Button("Retry") { Task { await load() } }
                    .buttonStyle(.bordered)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, Theme.metric.spaceXXL)
        case .ready:
            versesCard
        }
    }

    private var versesCard: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            ForEach(verses) { v in
                HStack(alignment: .firstTextBaseline, spacing: 12) {
                    Text("\(v.verse_number)")
                        .font(.system(.footnote, design: .serif).weight(.semibold))
                        .foregroundStyle(Theme.color.accent)
                        .frame(width: 24, alignment: .trailing)
                    Text(v.text)
                        .font(.system(.body, design: .serif))
                        .foregroundStyle(Theme.color.label)
                        .lineSpacing(4)
                        .fixedSize(horizontal: false, vertical: true)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .id(v.verse_number)
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .liquidGlassCard(cornerRadius: 24)
    }

    // MARK: - Load

    private struct TranslationKey: Hashable {
        let bookSlug: String
        let chapter: Int
        let abbr: String
    }

    private func load() async {
        loadState = .loading
        lastError = nil
        do {
            let v = try await ScriptureService.shared.verses(
                bookSlug: bookSlug,
                chapter: chapter,
                translation: translation.abbreviation
            )
            self.verses = v
            self.loadState = v.isEmpty ? .empty : .ready
        } catch {
            self.lastError = error.localizedDescription
            self.loadState = .failed
        }
    }
}
