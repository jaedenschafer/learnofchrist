// RootView.swift
// ────────────────────────────────────────────────────────────────────────────
// App-level shell. Two tabs:
//
//   1. Read    — book grid → chapter picker → reader
//   2. Library — your activity (continue reading, notes, highlights, bookmarks)
//
// Each tab owns its own NavigationStack so back-stacks don't leak
// between tabs. Both stacks attach the same .bibleNavigationDestinations()
// modifier — anything that links to a BibleBook or a ChapterRoute
// resolves the same way regardless of where in the app it was tapped.

import SwiftUI

struct RootView: View {
    @State private var readPath = NavigationPath()
    @State private var libraryPath = NavigationPath()

    var body: some View {
        TabView {
            NavigationStack(path: $readPath) {
                BookGridView()
                    .bibleNavigationDestinations()
            }
            .tabItem { Label("Read", systemImage: "book.closed") }

            NavigationStack(path: $libraryPath) {
                LibraryView()
                    .bibleNavigationDestinations()
            }
            .tabItem { Label("Library", systemImage: "bookmark") }
        }
        .tint(Theme.color.accent)
    }
}

// MARK: - Chapter loader (shared by both tabs)

/// Resolves a ChapterRoute into a rendered ChapterReaderView by
/// fetching the manifest, finding the entry for this book, downloading
/// the pack, and pulling out the requested chapter.
struct ChapterLoaderView: View {
    let route: ChapterRoute

    @State private var loadState: LoadState = .idle
    @State private var chapter: RichChapterContent?

    enum LoadState: Equatable {
        case idle
        case loading
        case ready
        case failed(String)
    }

    var body: some View {
        Group {
            switch loadState {
            case .idle, .loading:
                loadingView
            case .ready:
                if let chapter {
                    ChapterReaderView(chapter: chapter)
                } else {
                    missingChapterView
                }
            case .failed(let message):
                failureView(message: message)
            }
        }
        .background(Theme.color.background)
        .task(id: route) { await load() }
    }

    private var loadingView: some View {
        VStack(spacing: Theme.metric.spaceL) {
            ProgressView()
            Text("Fetching \(route.book.name) \(route.chapter)…")
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.secondaryLabel)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private var missingChapterView: some View {
        VStack(spacing: Theme.metric.spaceM) {
            Image(systemName: "doc.text.magnifyingglass")
                .font(.system(size: 32))
                .foregroundStyle(Theme.color.secondaryLabel)
            Text("\(route.book.name) \(route.chapter) isn't in the study library yet.")
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.secondaryLabel)
                .multilineTextAlignment(.center)
                .padding(.horizontal, Theme.metric.spaceXL)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func failureView(message: String) -> some View {
        VStack(spacing: Theme.metric.spaceM) {
            Image(systemName: "exclamationmark.triangle")
                .font(.largeTitle)
                .foregroundStyle(.orange)
            Text("Couldn't load \(route.book.name) \(route.chapter)")
                .font(Theme.font.cardTitle)
                .foregroundStyle(Theme.color.label)
            Text(message)
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.secondaryLabel)
                .multilineTextAlignment(.center)
                .padding(.horizontal, Theme.metric.spaceXXL)
            Button("Try again") {
                Task { await load() }
            }
            .buttonStyle(.borderedProminent)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func load() async {
        loadState = .loading
        do {
            let manifest = try await ContentService.shared.fetchManifest()
            guard let entry = manifest.entries.first(where: { $0.book == route.book.slug }) else {
                self.chapter = nil
                self.loadState = .ready
                return
            }
            let pack = try await ContentService.shared.loadPack(entry)
            self.chapter = pack.chapter(route.chapter)
            self.loadState = .ready
        } catch {
            self.loadState = .failed(error.localizedDescription)
        }
    }
}

#Preview {
    RootView()
}
