// ChapterListView.swift
// ────────────────────────────────────────────────────────────────────────────
// Chapter picker. Renders 1...book.chapters as a numbered grid; tapping
// a number pushes the reader. Designed so a 150-chapter book (Psalms)
// reads naturally on a phone.

import SwiftUI

struct ChapterListView: View {
    let book: BibleBook

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                header

                let columns = Array(
                    repeating: GridItem(.flexible(), spacing: Theme.metric.spaceS),
                    count: 5
                )
                LazyVGrid(columns: columns, spacing: Theme.metric.spaceS) {
                    ForEach(1...book.chapters, id: \.self) { chapter in
                        NavigationLink(value: ChapterRoute(book: book, chapter: chapter)) {
                            ChapterTile(number: chapter)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.vertical, Theme.metric.spaceL)
        }
        .background(Theme.color.background)
        // Show an empty inline title — the page renders the book name as a
        // big serif H1 in the header below, so showing it twice (once next
        // to the back-arrow, once in the body) looked broken. Keep the bar
        // itself visible so the back button still works.
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS) {
            Text(book.testament == .old ? "OLD TESTAMENT" : "NEW TESTAMENT")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)
            Text(book.name)
                .font(Theme.font.display)
                .foregroundStyle(Theme.color.label)
            Text("\(book.chapters) chapter\(book.chapters == 1 ? "" : "s")")
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.secondaryLabel)
        }
        .padding(.bottom, Theme.metric.spaceS)
    }
}

private struct ChapterTile: View {
    let number: Int

    var body: some View {
        Text("\(number)")
            .font(Theme.font.cardTitle)
            .foregroundStyle(Theme.color.label)
            .frame(maxWidth: .infinity)
            .padding(.vertical, Theme.metric.spaceM)
            .themeSurface()
    }
}

/// Route value pushed for the reader screen — both fields are
/// Hashable so SwiftUI's NavigationStack can use it as a destination.
struct ChapterRoute: Hashable {
    let book: BibleBook
    let chapter: Int

    /// Parses a widget / Lock-Screen deep link of the form
    /// `learnofchrist://study/<bookSlug>/<chapter>` into a route.
    /// Returns nil if the URL doesn't match the schema or the book slug
    /// isn't in BibleBookCatalog.
    static func parse(deepLink url: URL) -> ChapterRoute? {
        guard url.scheme == "learnofchrist" else { return nil }
        guard url.host == "study" else { return nil }
        // path is "/<bookSlug>/<chapter>" — split on "/" and drop the
        // empty leading segment.
        let parts = url.path.split(separator: "/").map(String.init)
        guard parts.count == 2,
              let chapter = Int(parts[1]),
              let book = BibleBookCatalog.book(for: parts[0])
        else { return nil }
        return ChapterRoute(book: book, chapter: chapter)
    }
}

// MARK: - Environment plumbing for deep links

private struct PendingDeepLinkKey: EnvironmentKey {
    static let defaultValue: ChapterRoute? = nil
}

extension EnvironmentValues {
    /// Set by LearnOfChristApp when a `learnofchrist://study/...` deep
    /// link arrives. RootView observes it and pushes onto the visible
    /// tab's NavigationStack.
    var pendingDeepLink: ChapterRoute? {
        get { self[PendingDeepLinkKey.self] }
        set { self[PendingDeepLinkKey.self] = newValue }
    }
}
