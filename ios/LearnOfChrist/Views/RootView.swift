// RootView.swift
// ────────────────────────────────────────────────────────────────────────────
// App-level shell with a custom floating liquid-glass tab bar (iOS 26 / 18
// Liquid Glass aesthetic). The system TabView has been replaced with a
// ZStack + conditional view so the bar can float above the content with
// margins around it, matching the design reference.
//
// Each tab owns its own NavigationStack so back-stacks don't leak
// between tabs. All stacks attach `.bibleNavigationDestinations()` so
// a `ChapterRoute` resolves the same way regardless of entry origin.

import SwiftUI

struct RootView: View {
    @State private var homePath = NavigationPath()
    @State private var biblePath = NavigationPath()
    @State private var libraryPath = NavigationPath()
    @State private var settingsPath = NavigationPath()
    @State private var selectedTab: Tab = .home

    @Environment(\.pendingDeepLink) private var pendingDeepLink: ChapterRoute?

    @AppStorage(AppearancePreferences.Key.colorScheme)
    private var colorSchemeRaw: String = AppearancePreferences.ColorSchemePreference.system.rawValue

    private var preferredScheme: ColorScheme? {
        AppearancePreferences.ColorSchemePreference(rawValue: colorSchemeRaw)?.resolved
    }

    enum Tab: Hashable, CaseIterable {
        case home, bible, library, settings

        var title: String {
            switch self {
            case .home: return "Home"
            case .bible: return "Bible"
            case .library: return "Library"
            case .settings: return "Settings"
            }
        }

        /// SF Symbol used in the floating tab bar. We use `filled` for the
        /// active state and the regular variant for inactive — pattern
        /// borrowed from native iOS apps (Mail, Music, Maps).
        var icon: String {
            switch self {
            case .home: return "house"
            case .bible: return "book.closed"
            case .library: return "bookmark"
            case .settings: return "gearshape"
            }
        }

        var iconFilled: String {
            switch self {
            case .home: return "house.fill"
            case .bible: return "book.closed.fill"
            case .library: return "bookmark.fill"
            case .settings: return "gearshape.fill"
            }
        }
    }

    var body: some View {
        ZStack(alignment: .bottom) {
            // Each tab is its own NavigationStack so back-stacks stay
            // tab-scoped. We swap the visible one on `selectedTab` change
            // and let SwiftUI keep the off-screen ones in memory (no
            // re-render thrash when the user switches tabs).
            ZStack {
                screen(.home)
                    .opacity(selectedTab == .home ? 1 : 0)
                screen(.bible)
                    .opacity(selectedTab == .bible ? 1 : 0)
                screen(.library)
                    .opacity(selectedTab == .library ? 1 : 0)
                screen(.settings)
                    .opacity(selectedTab == .settings ? 1 : 0)
            }
            .ignoresSafeArea(.keyboard)

            FloatingTabBar(selected: $selectedTab)
                .padding(.horizontal, 22)
                .padding(.bottom, 8)
        }
        .preferredColorScheme(preferredScheme)
        .tint(Theme.color.accent)
        .onChange(of: pendingDeepLink) { _, route in
            guard let route else { return }
            switch selectedTab {
            case .home:     homePath.append(route)
            case .bible:    biblePath.append(route)
            case .library:  libraryPath.append(route)
            case .settings:
                selectedTab = .home
                homePath.append(route)
            }
        }
    }

    @ViewBuilder
    private func screen(_ tab: Tab) -> some View {
        switch tab {
        case .home:
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
        case .bible:
            NavigationStack(path: $biblePath) {
                BookGridView().bibleNavigationDestinations()
            }
        case .library:
            NavigationStack(path: $libraryPath) {
                LibraryView().bibleNavigationDestinations()
            }
        case .settings:
            NavigationStack(path: $settingsPath) {
                SettingsView()
            }
        }
    }
}

// MARK: - Floating Liquid Glass Tab Bar

/// Floating pill at the bottom of the screen. Frosted .ultraThinMaterial
/// background, soft drop shadow, rounded 32pt corners. The active tab's
/// icon swaps to its filled variant and tints with the accent color.
private struct FloatingTabBar: View {
    @Binding var selected: RootView.Tab
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        HStack(spacing: 0) {
            ForEach(RootView.Tab.allCases, id: \.self) { tab in
                Button {
                    withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
                        selected = tab
                    }
                } label: {
                    TabBarIcon(tab: tab, isActive: selected == tab)
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background {
            ZStack {
                // Frosted base.
                RoundedRectangle(cornerRadius: 32, style: .continuous)
                    .fill(.ultraThinMaterial)

                // Top inner highlight — the "catch of light" along the
                // upper rim, the iOS Liquid Glass tell.
                RoundedRectangle(cornerRadius: 32, style: .continuous)
                    .fill(
                        RadialGradient(
                            colors: [
                                Color.white.opacity(scheme == .dark ? 0.18 : 0.45),
                                .clear,
                            ],
                            center: .top,
                            startRadius: 0,
                            endRadius: 160
                        )
                    )
                    .blendMode(.plusLighter)
            }
        }
        .overlay(
            RoundedRectangle(cornerRadius: 32, style: .continuous)
                .stroke(
                    Color.white.opacity(scheme == .dark ? 0.14 : 0.40),
                    lineWidth: 1
                )
        )
        .overlay(alignment: .top) {
            // 1-pixel inset white highlight along the top rim.
            Capsule()
                .fill(Color.white.opacity(scheme == .dark ? 0.22 : 0.55))
                .frame(height: 1)
                .padding(.horizontal, 28)
                .padding(.top, 1)
        }
        .clipShape(RoundedRectangle(cornerRadius: 32, style: .continuous))
        .shadow(
            color: scheme == .dark
                ? Color.black.opacity(0.55)
                : Color(red: 0.20, green: 0.16, blue: 0.12).opacity(0.20),
            radius: 22,
            x: 0,
            y: 14
        )
    }
}

private struct TabBarIcon: View {
    let tab: RootView.Tab
    let isActive: Bool

    var body: some View {
        VStack(spacing: 3) {
            Image(systemName: isActive ? tab.iconFilled : tab.icon)
                .font(.system(size: 21, weight: .semibold))
                .symbolRenderingMode(.hierarchical)
                .foregroundStyle(isActive ? Theme.color.accent : Color.primary.opacity(0.68))
                .frame(height: 24)
            Text(tab.title)
                .font(.system(size: 10, weight: .semibold))
                .foregroundStyle(isActive ? Theme.color.accent : Color.primary.opacity(0.65))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 4)
        .contentShape(Rectangle())
    }
}

// MARK: - Chapter loader (unchanged from before — kept here as the only
//         shared resolver for ChapterRoute pushes from any tab).

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
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func load() async {
        loadState = .loading

        if let cachedEntry = await ContentService.shared.cachedEntry(forBook: route.book.slug) {
            do {
                let pack = try await ContentService.shared.loadPack(cachedEntry)
                self.chapter = pack.chapter(route.chapter)
                self.loadState = .ready
                _ = try? await ContentService.shared.fetchManifest()
                return
            } catch {
                // Fall through.
            }
        }

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
