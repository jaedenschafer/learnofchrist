// RootView.swift
// ────────────────────────────────────────────────────────────────────────────
// App-level shell with a custom floating liquid-glass tab bar (iOS 26 /
// 18 Liquid Glass aesthetic). The system TabView has been replaced with
// a ZStack + conditional view so the bar can float above the content
// with margins around it, matching the design reference.
//
// Five tabs: Home, Bible, Search, Library, Browse. Settings is no
// longer a bottom-bar destination — it's accessed via the avatar
// ellipsis on the Home screen (presented as a sheet).
//
// Each tab owns its own NavigationStack so back-stacks don't leak
// between tabs. All stacks attach `.bibleNavigationDestinations()` so
// a `ChapterRoute` resolves the same way regardless of entry origin.

import SwiftUI

struct RootView: View {
    @State private var homePath = NavigationPath()
    @State private var biblePath = NavigationPath()
    @State private var searchPath = NavigationPath()
    @State private var libraryPath = NavigationPath()
    @State private var browsePath = NavigationPath()
    @State private var selectedTab: Tab = .home

    @Environment(\.pendingDeepLink) private var pendingDeepLink: ChapterRoute?

    @AppStorage(AppearancePreferences.Key.colorScheme)
    private var colorSchemeRaw: String = AppearancePreferences.ColorSchemePreference.system.rawValue

    private var preferredScheme: ColorScheme? {
        AppearancePreferences.ColorSchemePreference(rawValue: colorSchemeRaw)?.resolved
    }

    enum Tab: Hashable, CaseIterable {
        case home, bible, search, library, browse

        var title: String {
            switch self {
            case .home: return "Home"
            case .bible: return "Bible"
            case .search: return "Search"
            case .library: return "Library"
            case .browse: return "Browse"
            }
        }

        /// SF Symbol used in the floating tab bar. F² icons (per
        /// `glass-bar.jsx`): house, books stack, magnifier, bookmark,
        /// stacked cards. Active is the same SF Symbol but in the
        /// darker ink — no fill swap, no circle background.
        var icon: String {
            switch self {
            case .home: return "house"
            case .bible: return "books.vertical"
            case .search: return "magnifyingglass"
            case .library: return "bookmark"
            case .browse: return "square.stack"
            }
        }

        var iconFilled: String {
            switch self {
            case .home: return "house.fill"
            case .bible: return "books.vertical.fill"
            case .search: return "magnifyingglass"
            case .library: return "bookmark.fill"
            case .browse: return "square.stack.fill"
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
                screen(.search)
                    .opacity(selectedTab == .search ? 1 : 0)
                screen(.library)
                    .opacity(selectedTab == .library ? 1 : 0)
                screen(.browse)
                    .opacity(selectedTab == .browse ? 1 : 0)
            }
            .ignoresSafeArea(.keyboard)

            FloatingTabBar(selected: $selectedTab)
                .padding(.horizontal, 16)
                .padding(.bottom, 24)
        }
        .preferredColorScheme(preferredScheme)
        .tint(Theme.color.accent)
        .onChange(of: pendingDeepLink) { _, route in
            guard let route else { return }
            switch selectedTab {
            case .home:     homePath.append(route)
            case .bible:    biblePath.append(route)
            case .library:  libraryPath.append(route)
            case .search, .browse:
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
                        case .bible:      BookGridView()
                        case .library:    LibraryView()
                        case .art:        ArtView()
                        case .blog:       BlogView()
                        case .studyPlans: StudyPlansListView()
                        case .topics:     TopicsListView()
                        case .questions:  QuestionsListView()
                        }
                    }
                    .navigationDestination(for: StudyPlanRoute.self) { r in
                        StudyPlanDetailView(planId: r.id)
                    }
                    .navigationDestination(for: TopicRoute.self) { r in
                        TopicDetailView(topicId: r.id)
                    }
                    .navigationDestination(for: QuestionRoute.self) { r in
                        QuestionDetailView(questionId: r.id)
                    }
            }
        case .bible:
            NavigationStack(path: $biblePath) {
                BookGridView().bibleNavigationDestinations()
            }
        case .search:
            NavigationStack(path: $searchPath) {
                SearchView().bibleNavigationDestinations()
            }
        case .library:
            NavigationStack(path: $libraryPath) {
                LibraryView().bibleNavigationDestinations()
            }
        case .browse:
            // The "browse" tab is intentionally a distinct destination
            // from the "bible" tab (which is the books grid). It opens
            // ArtView — a real Supabase-backed gallery — so the tab
            // isn't redundant with Bible. When a richer browse landing
            // exists (art + library + blog as a hub), swap this out.
            NavigationStack(path: $browsePath) {
                ArtView().bibleNavigationDestinations()
            }
        }
    }
}

// MARK: - Search
//
// Live filter across:
//   • Bible books (BibleBookCatalog.all — match name case-insensitively)
//   • Direct chapter references — "John 3", "psalm 23", "1 cor 13"
//   • Verse-of-the-day rotation (VerseOfDay.rotation in HomeView.swift)
//
// All three result kinds resolve to a ChapterRoute push so the same
// `.bibleNavigationDestinations()` modifier handles them.

private struct SearchView: View {
    @State private var query: String = ""

    var body: some View {
        ZStack {
            F2.background.ignoresSafeArea()

            if trimmedQuery.isEmpty {
                emptyState
            } else if hasResults {
                resultsList
            } else {
                noResultsState
            }
        }
        .navigationTitle("Search")
        .navigationBarTitleDisplayMode(.inline)
        .searchable(
            text: $query,
            placement: .navigationBarDrawer(displayMode: .always),
            prompt: "Verses, chapters, books"
        )
        .autocorrectionDisabled()
        .textInputAutocapitalization(.never)
    }

    // MARK: - States

    private var emptyState: some View {
        VStack(spacing: 12) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 36, weight: .light))
                .foregroundStyle(F2.ink3)
            Text("Search the Bible")
                .font(.system(size: 26, weight: .medium, design: .serif))
                .foregroundStyle(F2.ink)
            Text("Try \u{201C}John 3\u{201D}, \u{201C}love is patient\u{201D}, or \u{201C}Psalms\u{201D}.")
                .font(.system(size: 13))
                .foregroundStyle(F2.ink3)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private var noResultsState: some View {
        VStack(spacing: 10) {
            Image(systemName: "questionmark.circle")
                .font(.system(size: 28, weight: .light))
                .foregroundStyle(F2.ink3)
            Text("No matches")
                .font(.system(size: 18, weight: .semibold, design: .serif))
                .foregroundStyle(F2.ink)
            Text("Nothing matches \u{201C}\(trimmedQuery)\u{201D}. Try a book name or chapter reference.")
                .font(.system(size: 13))
                .foregroundStyle(F2.ink3)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private var resultsList: some View {
        ScrollView {
            LazyVStack(alignment: .leading, spacing: 0) {
                if !directRoutes.isEmpty {
                    sectionHeader("Jump to")
                    ForEach(Array(directRoutes.enumerated()), id: \.offset) { _, route in
                        NavigationLink(value: route) {
                            chapterRow(route: route, sub: "Open chapter")
                        }
                        .buttonStyle(.plain)
                    }
                }

                if !bookMatches.isEmpty {
                    sectionHeader("Books")
                    ForEach(bookMatches, id: \.slug) { book in
                        NavigationLink(value: ChapterRoute(book: book, chapter: 1)) {
                            bookRow(book)
                        }
                        .buttonStyle(.plain)
                    }
                }

                if !verseMatches.isEmpty {
                    sectionHeader("Verses")
                    ForEach(Array(verseMatches.enumerated()), id: \.offset) { _, match in
                        if let route = route(forReference: match.entry.reference) {
                            NavigationLink(value: route) {
                                verseRow(entry: match.entry)
                            }
                            .buttonStyle(.plain)
                        } else {
                            verseRow(entry: match.entry)
                        }
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
    }

    // MARK: - Row builders

    private func sectionHeader(_ text: String) -> some View {
        Text(text.uppercased())
            .font(.system(size: 10, weight: .bold))
            .tracking(1.4)
            .foregroundStyle(F2.ink3)
            .padding(.top, 18)
            .padding(.bottom, 8)
            .padding(.horizontal, 6)
    }

    private func chapterRow(route: ChapterRoute, sub: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "book.closed")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.accent)
                .frame(width: 24)
            VStack(alignment: .leading, spacing: 2) {
                Text("\(route.book.name) \(route.chapter)")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Text(sub)
                    .font(.system(size: 11))
                    .foregroundStyle(F2.ink3)
            }
            Spacer(minLength: 0)
            Image(systemName: "chevron.right")
                .font(.system(size: 12, weight: .semibold))
                .foregroundStyle(F2.ink4)
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(rowBackground)
        .padding(.bottom, 8)
    }

    private func bookRow(_ book: BibleBook) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "books.vertical")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.accent)
                .frame(width: 24)
            VStack(alignment: .leading, spacing: 2) {
                Text(book.name)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Text("\(book.chapters) chapter\(book.chapters == 1 ? "" : "s")")
                    .font(.system(size: 11))
                    .foregroundStyle(F2.ink3)
            }
            Spacer(minLength: 0)
            Image(systemName: "chevron.right")
                .font(.system(size: 12, weight: .semibold))
                .foregroundStyle(F2.ink4)
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(rowBackground)
        .padding(.bottom, 8)
    }

    private func verseRow(entry: VerseEntry) -> some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "text.quote")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.accent)
                .frame(width: 24)
                .padding(.top, 2)
            VStack(alignment: .leading, spacing: 4) {
                Text(entry.reference)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Text(entry.text)
                    .font(.system(size: 13, design: .serif))
                    .foregroundStyle(F2.ink2)
                    .lineLimit(3)
                    .multilineTextAlignment(.leading)
            }
            Spacer(minLength: 0)
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(rowBackground)
        .padding(.bottom, 8)
    }

    private var rowBackground: some View {
        RoundedRectangle(cornerRadius: 14, style: .continuous)
            .fill(Color.white)
            .overlay(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .stroke(Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.08), lineWidth: 0.5)
            )
            .shadow(
                color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.06),
                radius: 10, x: 0, y: 3
            )
    }

    // MARK: - Filtering

    private var trimmedQuery: String {
        query.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    /// True when any of the three result kinds returns at least one hit.
    /// Used as the gate between `resultsList` and `noResultsState`.
    private var hasResults: Bool {
        !directRoutes.isEmpty || !bookMatches.isEmpty || !verseMatches.isEmpty
    }

    /// Books whose names contain the query (case-insensitive). Caps at 8
    /// to keep the list scannable.
    private var bookMatches: [BibleBook] {
        let q = trimmedQuery.lowercased()
        guard !q.isEmpty else { return [] }
        return BibleBookCatalog.all
            .filter { $0.name.lowercased().contains(q) }
            .prefix(8)
            .map { $0 }
    }

    /// Parsed "book chapter" references. The query "John 3" produces a
    /// route to John 3; "1 Cor 13" to 1 Corinthians 13. Multiple matches
    /// can come back when the query is ambiguous (e.g. "ps 23" matches
    /// both "Psalms 23" and "Psalm 23" wording).
    private var directRoutes: [ChapterRoute] {
        let q = trimmedQuery
        guard !q.isEmpty else { return [] }
        return Self.parseChapterReferences(query: q)
    }

    private struct VerseMatch {
        let entry: VerseEntry
        let score: Int
    }

    /// Verse-of-day rotation entries that match the query by reference or
    /// body text. Ordered by a small relevance score so reference-prefix
    /// hits float above mid-sentence text hits. Caps at 6.
    private var verseMatches: [VerseMatch] {
        let q = trimmedQuery.lowercased()
        guard !q.isEmpty else { return [] }
        var out: [VerseMatch] = []
        for entry in VerseOfDay.rotation {
            let ref = entry.reference.lowercased()
            let text = entry.text.lowercased()
            var score = 0
            if ref.hasPrefix(q) { score += 4 }
            else if ref.contains(q) { score += 2 }
            if text.contains(q) { score += 1 }
            if score > 0 {
                out.append(VerseMatch(entry: entry, score: score))
            }
        }
        return out.sorted { $0.score > $1.score }.prefix(6).map { $0 }
    }

    /// Resolve a verse reference like "1 Peter 5:7" or "Psalm 23:1" back to
    /// a ChapterRoute. The verse number after the colon is dropped — we
    /// only navigate to chapter granularity today.
    private func route(forReference ref: String) -> ChapterRoute? {
        // Strip ":N" verse suffix if present.
        let bookAndChapter: String = {
            if let colon = ref.firstIndex(of: ":") {
                return String(ref[..<colon])
            }
            return ref
        }()
        return Self.parseChapterReferences(query: bookAndChapter).first
    }

    /// Tries to parse `<book name> <chapter>` from a free-form query.
    /// Handles common abbreviations ("ps" → Psalms, "jn" → John,
    /// "1 cor" → 1 Corinthians) by matching the prefix of the catalog
    /// book name.
    static func parseChapterReferences(query: String) -> [ChapterRoute] {
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return [] }

        // Split on whitespace. The last token is the candidate chapter
        // number if it parses; everything before is the book candidate.
        let parts = trimmed.split(separator: " ").map(String.init)
        guard parts.count >= 2 else { return [] }
        guard let chapter = Int(parts.last!) else { return [] }
        let bookText = parts.dropLast().joined(separator: " ").lowercased()
        guard !bookText.isEmpty else { return [] }

        // Match: prefer exact-name match, then prefix match, then contains.
        let books = BibleBookCatalog.all
        let exact = books.first { $0.name.lowercased() == bookText }
        if let book = exact, (1...book.chapters).contains(chapter) {
            return [ChapterRoute(book: book, chapter: chapter)]
        }
        let prefix = books.filter { $0.name.lowercased().hasPrefix(bookText) }
        let contains = books.filter { $0.name.lowercased().contains(bookText) }
        let candidates = prefix.isEmpty ? contains : prefix
        return candidates
            .filter { (1...$0.chapters).contains(chapter) }
            .prefix(4)
            .map { ChapterRoute(book: $0, chapter: chapter) }
    }
}

// MARK: - Floating Liquid Glass Tab Bar (F² — port of glass-bar.jsx)
//
// Very transparent glass: rgba(255,255,255,0.12) over a dialed-back
// .ultraThinMaterial blur. Active state is just a darker icon color —
// no fill, no circle background, no label. Height 66, corner 36.
// Multi-direction inset highlights simulate where light catches the
// curved glass surface (top-edge shine, side glints, bottom reflection).

private struct FloatingTabBar: View {
    @Binding var selected: RootView.Tab
    @Environment(\.colorScheme) private var scheme

    private let cornerRadius: CGFloat = 36
    private let barHeight: CGFloat = 66

    var body: some View {
        ZStack {
            // Base glass.
            RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                .fill(.ultraThinMaterial)
                .opacity(0.55)

            RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                .fill(Color.white.opacity(scheme == .dark ? 0.04 : 0.12))

            // Inner depth glow.
            RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                .stroke(Color.white.opacity(scheme == .dark ? 0.04 : 0.15), lineWidth: 30)
                .blur(radius: 12)
                .mask(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))

            // Bright outer rim border.
            RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                .stroke(
                    Color.white.opacity(scheme == .dark ? 0.28 : 0.55),
                    lineWidth: 1
                )

            // Top capsule shine — like a wet meniscus catching light.
            Capsule()
                .fill(
                    LinearGradient(
                        colors: [
                            Color.white.opacity(0.55),
                            Color.white.opacity(0.15),
                            Color.white.opacity(0),
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(height: 18)
                .padding(.horizontal, 16)
                .padding(.top, 1)
                .frame(maxHeight: .infinity, alignment: .top)
                .blendMode(.plusLighter)
                .opacity(0.7)

            // Tiny center specular glint.
            Ellipse()
                .fill(
                    RadialGradient(
                        colors: [Color.white.opacity(0.6), .clear],
                        center: .center,
                        startRadius: 0,
                        endRadius: 90
                    )
                )
                .frame(width: 180, height: 12)
                .blur(radius: 2)
                .offset(y: -barHeight / 2 + 2)

            // Bottom reflection.
            Capsule()
                .fill(
                    LinearGradient(
                        colors: [Color.white.opacity(0), Color.white.opacity(0.25)],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(height: 4)
                .padding(.horizontal, 24)
                .padding(.bottom, 1)
                .frame(maxHeight: .infinity, alignment: .bottom)
                .blendMode(.plusLighter)
                .opacity(0.6)

            // Icons row.
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
                    .frame(maxWidth: .infinity)
                }
            }
            .padding(.horizontal, 8)
        }
        .frame(height: barHeight)
        .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
        .shadow(color: Color.black.opacity(0.12), radius: 24, x: 0, y: 8)
        .shadow(color: Color.black.opacity(0.08), radius: 6, x: 0, y: 2)
    }
}

/// Icon-only tab item. Active = darker ink; inactive = same ink at
/// 0.85. No fill, no circle background — fidelity-first per the JSX.
private struct TabBarIcon: View {
    let tab: RootView.Tab
    let isActive: Bool
    @Environment(\.colorScheme) private var scheme

    private var inactiveColor: Color {
        scheme == .dark
            ? Color.white
            : Color(red: 20/255, green: 18/255, blue: 38/255).opacity(0.85)
    }

    private var activeColor: Color {
        scheme == .dark
            ? Color.white
            : Color(red: 15/255, green: 13/255, blue: 36/255)   // #0F0D24
    }

    var body: some View {
        Image(systemName: tab.icon)
            .font(.system(size: 22, weight: .regular))
            .foregroundStyle(isActive ? activeColor : inactiveColor)
            .frame(width: 48, height: 48)
            .shadow(
                color: scheme == .dark
                    ? Color.black.opacity(0.4)
                    : Color.white.opacity(0.4),
                radius: 1
            )
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
