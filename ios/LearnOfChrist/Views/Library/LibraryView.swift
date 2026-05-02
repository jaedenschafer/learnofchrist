// LibraryView.swift
// ────────────────────────────────────────────────────────────────────────────
// "Your Library" — surface every piece of personal data the user has
// generated locally. Four sections in priority order:
//
//   1. Continue Reading   — most recently opened chapter (top 1)
//   2. Bookmarks          — chapter and verse bookmarks, newest first
//   3. Notes              — verse-level notes, newest first
//   4. Highlights         — verse-level highlights, newest first
//
// Each section is backed by SwiftData @Query, so the screen updates
// live as the user reads + interacts with verses. Tapping any row
// routes to ChapterRoute → ChapterLoaderView → reader.

import SwiftUI
import SwiftData

struct LibraryView: View {
    @Query(
        filter: #Predicate<StoredReadingProgress> { $0.deletedAt == nil },
        sort: \StoredReadingProgress.updatedAt, order: .reverse
    ) private var reading: [StoredReadingProgress]

    @Query(
        filter: #Predicate<StoredBookmark> { $0.deletedAt == nil },
        sort: \StoredBookmark.updatedAt, order: .reverse
    ) private var bookmarks: [StoredBookmark]

    @Query(
        filter: #Predicate<StoredNote> { $0.deletedAt == nil },
        sort: \StoredNote.updatedAt, order: .reverse
    ) private var notes: [StoredNote]

    @Query(
        filter: #Predicate<StoredHighlight> { $0.deletedAt == nil },
        sort: \StoredHighlight.updatedAt, order: .reverse
    ) private var highlights: [StoredHighlight]

    var body: some View {
        Group {
            if isEmpty {
                LibraryEmptyState()
            } else {
                ScrollView {
                    LazyVStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                        if let resume = reading.first, let route = makeRoute(slug: resume.bookSlug, chapter: resume.chapter) {
                            ContinueReadingSection(route: route, progress: resume)
                        }
                        if !bookmarks.isEmpty {
                            BookmarksSection(bookmarks: bookmarks)
                        }
                        if !notes.isEmpty {
                            NotesSection(notes: notes)
                        }
                        if !highlights.isEmpty {
                            HighlightsSection(highlights: highlights)
                        }
                    }
                    .padding(.horizontal, Theme.metric.readerHorizontalPadding)
                    .padding(.vertical, Theme.metric.spaceL)
                }
            }
        }
        .background(Theme.color.background)
        .navigationTitle("Library")
    }

    private var isEmpty: Bool {
        reading.isEmpty && bookmarks.isEmpty && notes.isEmpty && highlights.isEmpty
    }
}

// MARK: - Empty state

private struct LibraryEmptyState: View {
    var body: some View {
        ContentUnavailableView {
            Label("Your library is empty", systemImage: "books.vertical")
        } description: {
            Text("As you read, highlight, take notes, and bookmark verses, they'll show up here.")
        }
    }
}

// MARK: - Sections

private struct LibrarySectionHeader: View {
    let title: String
    var body: some View {
        Text(title.uppercased())
            .font(Theme.font.eyebrow)
            .tracking(2)
            .foregroundStyle(Theme.color.secondaryLabel)
    }
}

private struct ContinueReadingSection: View {
    let route: ChapterRoute
    let progress: StoredReadingProgress

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            LibrarySectionHeader(title: "Continue Reading")
            NavigationLink(value: route) {
                HStack(spacing: Theme.metric.spaceL) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text(route.book.name.uppercased())
                            .font(Theme.font.eyebrow)
                            .tracking(1.5)
                            .foregroundStyle(Theme.color.accent)
                        Text("Chapter \(route.chapter)")
                            .font(Theme.font.title)
                            .foregroundStyle(Theme.color.label)
                        Text("Last read \(progress.updatedAt.formatted(.relative(presentation: .named)))")
                            .font(Theme.font.caption)
                            .foregroundStyle(Theme.color.secondaryLabel)
                    }
                    Spacer(minLength: 0)
                    Image(systemName: "chevron.right")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(Theme.color.tertiaryLabel)
                }
                .padding(Theme.metric.spaceL)
                .frame(maxWidth: .infinity, alignment: .leading)
                .themeFill(.warmSubtle, radius: Theme.metric.radiusMD)
            }
            .buttonStyle(.plain)
        }
    }
}

private struct BookmarksSection: View {
    let bookmarks: [StoredBookmark]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            LibrarySectionHeader(title: "Bookmarks")
            VStack(spacing: Theme.metric.spaceS) {
                ForEach(bookmarks.prefix(20)) { bm in
                    if let route = makeRoute(slug: bm.bookSlug, chapter: bm.chapter) {
                        NavigationLink(value: route) {
                            LibraryRow(
                                title: titleFor(route: route, verse: bm.verse),
                                subtitle: bm.note?.isEmpty == false ? bm.note : nil,
                                icon: bm.verse == nil ? "bookmark" : "bookmark.fill",
                                timestamp: bm.updatedAt
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
        }
    }

    private func titleFor(route: ChapterRoute, verse: Int?) -> String {
        if let v = verse {
            return "\(route.book.name) \(route.chapter):\(v)"
        }
        return "\(route.book.name) \(route.chapter)"
    }
}

private struct NotesSection: View {
    let notes: [StoredNote]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            LibrarySectionHeader(title: "Notes")
            VStack(spacing: Theme.metric.spaceS) {
                ForEach(notes.prefix(20)) { note in
                    if let route = makeRoute(slug: note.bookSlug, chapter: note.chapter) {
                        NavigationLink(value: route) {
                            LibraryRow(
                                title: "\(route.book.name) \(route.chapter):\(note.verse)",
                                subtitle: note.body,
                                icon: "note.text",
                                timestamp: note.updatedAt
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
        }
    }
}

private struct HighlightsSection: View {
    let highlights: [StoredHighlight]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            LibrarySectionHeader(title: "Highlights")
            VStack(spacing: Theme.metric.spaceS) {
                ForEach(highlights.prefix(20)) { h in
                    if let route = makeRoute(slug: h.bookSlug, chapter: h.chapter) {
                        NavigationLink(value: route) {
                            LibraryRow(
                                title: titleFor(route: route, h: h),
                                subtitle: nil,
                                icon: "highlighter",
                                timestamp: h.updatedAt
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
        }
    }

    private func titleFor(route: ChapterRoute, h: StoredHighlight) -> String {
        if h.verseEnd > h.verseStart {
            return "\(route.book.name) \(route.chapter):\(h.verseStart)–\(h.verseEnd)"
        }
        return "\(route.book.name) \(route.chapter):\(h.verseStart)"
    }
}

// MARK: - Reusable row

private struct LibraryRow: View {
    let title: String
    let subtitle: String?
    let icon: String
    let timestamp: Date

    var body: some View {
        HStack(alignment: .top, spacing: Theme.metric.spaceM) {
            Image(systemName: icon)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(Theme.color.accent)
                .frame(width: 22)
                .padding(.top, 2)
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                if let subtitle, !subtitle.isEmpty {
                    Text(subtitle)
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                        .lineLimit(2)
                }
                Text(timestamp.formatted(.relative(presentation: .named)))
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
            Spacer(minLength: 0)
            Image(systemName: "chevron.right")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(Theme.color.tertiaryLabel)
                .padding(.top, 4)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }
}

// MARK: - Helpers

/// Resolves a stored row's bookSlug to a ChapterRoute. Returns nil if
/// the slug doesn't match a canonical book — defensively skips orphan
/// data that would otherwise crash the navigator.
private func makeRoute(slug: String, chapter: Int) -> ChapterRoute? {
    guard let book = BibleBookCatalog.book(for: slug) else { return nil }
    return ChapterRoute(book: book, chapter: chapter)
}
