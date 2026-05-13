// BookGridView.swift
// ────────────────────────────────────────────────────────────────────────────
// First-tap browse experience. Shows every Bible book split into
// testament sections (Old, New, Deuterocanon, Orthodox). Tapping a
// book pushes ChapterListView. Searchable so the user can jump to a
// book by name.
//
// Driven by BibleBookCatalog (static), so this view renders synchronously
// and works fully offline.

import SwiftUI

struct BookGridView: View {
    @State private var query: String = ""

    private var filteredOld: [BibleBook] {
        filter(BibleBookCatalog.oldTestament)
    }
    private var filteredNew: [BibleBook] {
        filter(BibleBookCatalog.newTestament)
    }
    private var filteredApocrypha: [BibleBook] {
        filter(BibleBookCatalog.apocrypha)
    }
    private var filteredOrthodox: [BibleBook] {
        filter(BibleBookCatalog.orthodox)
    }

    private var hasAnyResults: Bool {
        !filteredOld.isEmpty
        || !filteredNew.isEmpty
        || !filteredApocrypha.isEmpty
        || !filteredOrthodox.isEmpty
    }

    var body: some View {
        ScrollView {
            LazyVStack(alignment: .leading, spacing: Theme.metric.spaceXL, pinnedViews: []) {
                if !filteredOld.isEmpty {
                    section(title: "Old Testament", books: filteredOld)
                }
                if !filteredNew.isEmpty {
                    section(title: "New Testament", books: filteredNew)
                }
                if !filteredApocrypha.isEmpty {
                    section(title: "Deuterocanon", books: filteredApocrypha)
                }
                if !filteredOrthodox.isEmpty {
                    section(title: "Orthodox", books: filteredOrthodox)
                }
                if !hasAnyResults {
                    ContentUnavailableView.search(text: query)
                        .padding(.top, Theme.metric.spaceXXL)
                }
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.vertical, Theme.metric.spaceL)
        }
        .background(Theme.color.background)
        .searchable(text: $query, prompt: "Search books")
        .navigationTitle("Bible")
    }

    private func section(title: String, books: [BibleBook]) -> some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            VStack(alignment: .leading, spacing: 6) {
                Text(title.uppercased())
                    .font(Theme.font.eyebrow)
                    .tracking(2.5)
                    .foregroundStyle(Theme.color.accent)
                Rectangle()
                    .fill(Theme.color.accent.opacity(0.3))
                    .frame(width: 40, height: 1)
            }

            let columns = [GridItem(.adaptive(minimum: 150, maximum: 220), spacing: Theme.metric.spaceM)]
            LazyVGrid(columns: columns, alignment: .leading, spacing: Theme.metric.spaceM) {
                ForEach(books) { book in
                    NavigationLink(value: book) {
                        BookTile(book: book)
                    }
                    .buttonStyle(.plain)
                }
            }
        }
    }

    private func filter(_ books: [BibleBook]) -> [BibleBook] {
        let q = query.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        guard !q.isEmpty else { return books }
        return books.filter { book in
            book.name.lowercased().contains(q) ||
            book.abbreviation.lowercased().contains(q) ||
            book.slug.contains(q)
        }
    }
}

private struct BookTile: View {
    let book: BibleBook

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS) {
            Text(book.abbreviation.uppercased())
                .font(Theme.font.eyebrow)
                .tracking(1.5)
                .foregroundStyle(Theme.color.accent)
            Text(book.name)
                .font(Theme.font.calloutTitle)
                .foregroundStyle(Theme.color.label)
                .lineLimit(1)
                .minimumScaleFactor(0.85)
            Text("\(book.chapters) ch")
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.tertiaryLabel)
                .padding(.top, 2)
        }
        .padding(Theme.metric.spaceM)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }
}
