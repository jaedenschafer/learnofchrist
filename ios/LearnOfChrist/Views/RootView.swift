// RootView.swift
// ────────────────────────────────────────────────────────────────────────────
// App-level shell. Four tabs:
//
//   1. Home    — editorial landing: hero, Continue Reading, quickstart.
//   2. Bible   — book grid → chapter picker → reader
//   3. Library — your activity (continue reading, notes, highlights, bookmarks)
//   4. Settings — appearance, reading prefs, account.
//
// Each tab owns its own NavigationStack so back-stacks don't leak
// between tabs. All stacks attach `.bibleNavigationDestinations()`
// so a `ChapterRoute(bookSlug:chapter:)` resolves the same way from
// any tap origin (Home Continue card, Bible book grid, Library
// bookmark, deep link, etc).

import SwiftUI

struct RootView: View {
    @State private var homePath = NavigationPath()
    @State private var biblePath = NavigationPath()
    @State private var libraryPath = NavigationPath()

    @AppStorage(AppearancePreferences.Key.colorScheme)
    private var colorSchemeRaw: String = AppearancePreferences.ColorSchemePreference.system.rawValue

    private var preferredScheme: ColorScheme? {
        AppearancePreferences.ColorSchemePreference(rawValue: colorSchemeRaw)?.resolved
    }

    var body: some View {
        TabView {
            NavigationStack(path: $homePath) {
                HomeView()
                    .bibleNavigationDestinations()
                    .navigationDestination(for: BrowseDestination.self) { dest in
                        switch dest {
                        case .bible:   BookGridView()
                        case .library: LibraryView()
                        case .art:     ArtView()
                        case .blog:    BlogView()
                        }
                    }
            }
            .tabItem { Label("Home", systemImage: "house") }

            NavigationStack(path: $biblePath) {
                BookGridView()
                    .bibleNavigationDestinations()
            }
            .tabItem { Label("Bible", systemImage: "book.closed") }

            NavigationStack(path: $libraryPath) {
                LibraryView()
                    .bibleNavigationDestinations()
            }
            .tabItem { Label("Library", systemImage: "bookmark") }

            NavigationStack {
                SettingsView()
            }
            .tabItem { Label("Settings", systemImage: "gearshape") }
        }
        .tint(Theme.color.accent)
        .preferredColorScheme(preferredScheme)
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
