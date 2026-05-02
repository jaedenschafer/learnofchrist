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
        .navigationTitle(book.name)
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
}
