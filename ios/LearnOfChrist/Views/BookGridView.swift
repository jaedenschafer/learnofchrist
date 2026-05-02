// BookGridView.swift
// ────────────────────────────────────────────────────────────────────────────
// First-tap browse experience. Shows the 66 canonical Bible books split
// into Old + New Testament sections. Tapping a book pushes
// ChapterListView. Searchable so the user can jump to a book by name.
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

    var body: some View {
        ScrollView {
            LazyVStack(alignment: .leading, spacing: Theme.metric.spaceXL, pinnedViews: []) {
                if !filteredOld.isEmpty {
                    section(title: "Old Testament", books: filteredOld)
                }
                if !filteredNew.isEmpty {
                    section(title: "New Testament", books: filteredNew)
                }
                if filteredOld.isEmpty && filteredNew.isEmpty {
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
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text(title.uppercased())
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)

            let columns = [GridItem(.adaptive(minimum: 140, maximum: 220), spacing: Theme.metric.spaceS)]
            LazyVGrid(columns: columns, alignment: .leading, spacing: Theme.metric.spaceS) {
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
        HStack(spacing: Theme.metric.spaceM) {
            Text(book.abbreviation)
                .font(Theme.font.eyebrow)
                .foregroundStyle(Theme.color.accent)
                .frame(width: 36, alignment: .leading)
            VStack(alignment: .leading, spacing: 2) {
                Text(book.name)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                    .lineLimit(1)
                Text("\(book.chapters) chapter\(book.chapters == 1 ? "" : "s")")
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.secondaryLabel)
            }
            Spacer(minLength: 0)
        }
        .padding(Theme.metric.spaceM)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface()
    }
}
