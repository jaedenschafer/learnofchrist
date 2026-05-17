// ArtView.swift
// ────────────────────────────────────────────────────────────────────────────
// Editorial Art tab — mirrors the website's /art page structure.
//
// Top to bottom:
//   1. Featured hero card (16:9, gradient overlay, eyebrow, title, artist).
//   2. Featured artist section (eyebrow + name + bio + horizontal scroll).
//   3. Twelve+ showcase rows from the SHOWCASE_ROWS table on the website
//      (Renaissance, Devotional, Romantic, Icons, Illustrators, Museums,
//      Caravaggio, Rembrandt, Doré, Trecento, Madonnas — plus Tissot).
//   4. Filter button in the top-right opens a sheet (sort, artist, book,
//      era multi-select).
//
// Data: GET /api/art/showcase + /api/art/filters + /api/art/filtered.
// Manuscripts are intentionally excluded — the user wanted them gone from
// the iOS Art page. The web showcase still has them.
//
// Navigation: this view is itself the root of an Art NavigationStack (or
// a tab-pushed destination). It does NOT hide the nav bar, so any
// detail-view pushes get an automatic back chevron. Tapping an artwork
// presents a sheet (ArtworkDetailSheet) so taps work the same whether
// the user is on the showcase or the filtered grid.

import SwiftUI
import ImageIO
import UIKit

// MARK: - Serif font helper (local copy — the one in HomeView.swift is private)

private func artSerifFont(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
    .system(size: size, weight: weight, design: .serif)
}

// MARK: - Shared content models for the showcase

struct ArtShowcaseRow: Codable, Hashable, Identifiable {
    let id: String
    let title: String
    let subtitle: String
    let kicker: String
    let seeAllArtist: String?
    let artworks: [ArtworkPreview]
}

struct ArtShowcaseArtist: Codable, Hashable {
    let slug: String
    let name: String
    let bio: String?
    let years: String?
}

struct ArtFeaturedArtist: Codable, Hashable {
    let artist: ArtShowcaseArtist
    let artworks: [ArtworkPreview]
}

struct ArtShowcase: Codable, Hashable {
    let hero: ArtworkPreview?
    let featuredArtist: ArtFeaturedArtist?
    let rows: [ArtShowcaseRow]
}

struct ArtFilterFacets: Codable, Hashable {
    struct Book: Codable, Hashable {
        let slug: String
        let name: String
    }
    struct Artist: Codable, Hashable {
        let slug: String
        let name: String
        let count: Int
    }
    let books: [Book]
    let artists: [Artist]
}

struct ArtFilteredResult: Codable, Hashable {
    let artworks: [ArtworkPreview]
    let total: Int
    let nextCursor: String?
}

// MARK: - SharedContentService extension for art endpoints

extension SharedContentService {
    private static var sharedBase: URL {
        URL(string: "https://learnofchrist.com")!
    }

    func artShowcase() async throws -> ArtShowcase {
        let url = Self.sharedBase.appendingPathComponent("api/art/showcase")
        return try await fetchArtJSON(url)
    }

    func artFilters() async throws -> ArtFilterFacets {
        let url = Self.sharedBase.appendingPathComponent("api/art/filters")
        return try await fetchArtJSON(url)
    }

    func artFiltered(
        query: String = "",
        books: [String] = [],
        artists: [String] = [],
        eras: [String] = [],
        sort: String = "recent",
        cursor: String? = nil,
        limit: Int = 48
    ) async throws -> ArtFilteredResult {
        var comps = URLComponents(
            url: Self.sharedBase.appendingPathComponent("api/art/filtered"),
            resolvingAgainstBaseURL: false
        )!
        var items: [URLQueryItem] = [
            URLQueryItem(name: "sort", value: sort),
            URLQueryItem(name: "limit", value: String(limit)),
        ]
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        if !trimmed.isEmpty { items.append(URLQueryItem(name: "q", value: trimmed)) }
        for b in books { items.append(URLQueryItem(name: "book", value: b)) }
        for a in artists { items.append(URLQueryItem(name: "artist", value: a)) }
        for e in eras { items.append(URLQueryItem(name: "era", value: e)) }
        if let cursor, !cursor.isEmpty {
            items.append(URLQueryItem(name: "cursor", value: cursor))
        }
        comps.queryItems = items
        return try await fetchArtJSON(comps.url!)
    }

    private func fetchArtJSON<T: Decodable>(_ url: URL) async throws -> T {
        let (data, resp) = try await URLSession.shared.data(from: url)
        guard let http = resp as? HTTPURLResponse,
              (200..<300).contains(http.statusCode) else {
            let status = (resp as? HTTPURLResponse)?.statusCode ?? -1
            throw URLError(.badServerResponse, userInfo: [
                NSLocalizedDescriptionKey: "Art fetch failed (HTTP \(status))"
            ])
        }
        return try JSONDecoder().decode(T.self, from: data)
    }
}

// MARK: - Filter state

/// Active filter selection. When any field is non-empty, the showcase
/// rows are replaced with a single grid of filtered results.
struct ArtFilterState: Equatable {
    var sort: String = "recent"
    var artistSlugs: Set<String> = []
    var bookSlugs: Set<String> = []
    var eras: Set<String> = []

    var isActive: Bool {
        !artistSlugs.isEmpty || !bookSlugs.isEmpty || !eras.isEmpty
            || sort != "recent"
    }

    var summary: String {
        var parts: [String] = []
        if !artistSlugs.isEmpty {
            parts.append("\(artistSlugs.count) artist\(artistSlugs.count == 1 ? "" : "s")")
        }
        if !bookSlugs.isEmpty {
            parts.append("\(bookSlugs.count) book\(bookSlugs.count == 1 ? "" : "s")")
        }
        if !eras.isEmpty {
            parts.append("\(eras.count) era\(eras.count == 1 ? "" : "s")")
        }
        if sort != "recent" { parts.append(sortLabel(sort)) }
        return parts.isEmpty ? "" : parts.joined(separator: " · ")
    }
}

private func sortLabel(_ key: String) -> String {
    switch key {
    case "recent":    return "Recent"
    case "oldest":    return "Oldest"
    case "az":        return "A → Z"
    case "za":        return "Z → A"
    case "year_asc":  return "Year ↑"
    case "year_desc": return "Year ↓"
    case "popular":   return "Popular"
    default:          return key
    }
}

// MARK: - Top-level ArtView

struct ArtView: View {
    @State private var showcase: ArtShowcase?
    @State private var loadError: String?
    @State private var isLoadingShowcase = false

    @State private var facets: ArtFilterFacets?
    @State private var filter = ArtFilterState()
    @State private var showFilterSheet = false

    // Filtered grid state
    @State private var filtered: [ArtworkPreview] = []
    @State private var filteredTotal: Int = 0
    @State private var filteredCursor: String?
    @State private var filteredLoading = false
    @State private var filteredError: String?

    @State private var selectedArtwork: ArtworkPreview?

    private static let bg = Color.white

    var body: some View {
        ZStack {
            Self.bg.ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: 28) {
                    if let err = loadError {
                        errorBanner(err)
                    }

                    if filter.isActive {
                        filteredHeader
                        filteredGrid
                    } else {
                        if let hero = showcase?.hero {
                            HeroCard(artwork: hero) { selectedArtwork = hero }
                        } else if isLoadingShowcase {
                            heroSkeleton
                        }

                        if let featured = showcase?.featuredArtist {
                            FeaturedArtistSection(featured: featured) { artwork in
                                selectedArtwork = artwork
                            }
                        }

                        if let rows = showcase?.rows {
                            ForEach(rows) { row in
                                ArtRowSection(row: row) { artwork in
                                    selectedArtwork = artwork
                                }
                            }
                        } else if isLoadingShowcase {
                            rowSkeletons
                        }
                    }

                    Color.clear.frame(height: 120)
                }
                .padding(.top, 8)
                .padding(.bottom, 16)
            }
        }
        .navigationTitle("Art")
        .navigationBarTitleDisplayMode(.large)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    showFilterSheet = true
                } label: {
                    HStack(spacing: 4) {
                        Image(systemName: filter.isActive
                              ? "line.3.horizontal.decrease.circle.fill"
                              : "line.3.horizontal.decrease.circle")
                        if filter.isActive {
                            Text("Filters")
                                .font(.system(size: 14, weight: .semibold))
                        }
                    }
                    .foregroundStyle(F2.accent)
                }
                .accessibilityLabel("Filter art")
            }
        }
        .task { await loadShowcaseIfNeeded() }
        .task { await loadFacetsIfNeeded() }
        .onChange(of: filter) { _, newValue in
            // Reset and reload whenever the active filter changes.
            filtered = []
            filteredCursor = nil
            filteredTotal = 0
            filteredError = nil
            if newValue.isActive {
                Task { await loadFiltered(reset: true) }
            }
        }
        .sheet(isPresented: $showFilterSheet) {
            ArtFilterSheet(
                facets: facets ?? ArtFilterFacets(books: [], artists: []),
                filter: $filter
            )
        }
        .sheet(item: $selectedArtwork) { artwork in
            ArtworkDetailSheet(artwork: artwork)
        }
    }

    // MARK: Sub-views

    private var filteredHeader: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("FILTERED")
                .font(.system(size: 11, weight: .bold))
                .tracking(1.6)
                .foregroundStyle(F2.accent)
            Text("\(filteredTotal.formatted()) \(filteredTotal == 1 ? "result" : "results")")
                .font(artSerifFont(28, weight: .medium))
                .foregroundStyle(F2.ink)
            if !filter.summary.isEmpty {
                Text(filter.summary)
                    .font(.system(size: 13))
                    .foregroundStyle(F2.ink3)
            }
            HStack(spacing: 8) {
                Button {
                    filter = ArtFilterState()
                } label: {
                    HStack(spacing: 4) {
                        Image(systemName: "xmark.circle.fill")
                            .font(.system(size: 13))
                        Text("Clear all").font(.system(size: 13, weight: .semibold))
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(F2.ink.opacity(0.07))
                    .clipShape(Capsule())
                    .foregroundStyle(F2.ink)
                }
                .buttonStyle(.plain)

                Button {
                    showFilterSheet = true
                } label: {
                    HStack(spacing: 4) {
                        Image(systemName: "slider.horizontal.3")
                            .font(.system(size: 13))
                        Text("Adjust").font(.system(size: 13, weight: .semibold))
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(F2.accent.opacity(0.10))
                    .clipShape(Capsule())
                    .foregroundStyle(F2.accent)
                }
                .buttonStyle(.plain)
            }
            .padding(.top, 4)
        }
        .padding(.horizontal, 20)
    }

    private var filteredGrid: some View {
        let columns: [GridItem] = [
            GridItem(.flexible(), spacing: 10),
            GridItem(.flexible(), spacing: 10),
        ]
        return VStack(spacing: 14) {
            if let err = filteredError {
                errorBanner(err)
            }

            LazyVGrid(columns: columns, spacing: 16) {
                ForEach(filtered) { art in
                    Button {
                        selectedArtwork = art
                    } label: {
                        ArtGridCard(artwork: art)
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(.horizontal, 16)

            if filteredLoading {
                ProgressView().padding(.vertical, 16)
            } else if let cursor = filteredCursor, !cursor.isEmpty {
                Button {
                    Task { await loadFiltered(reset: false) }
                } label: {
                    Text("Show more")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 28)
                        .padding(.vertical, 12)
                        .background(F2.accent)
                        .clipShape(Capsule())
                }
                .buttonStyle(.plain)
                .padding(.top, 8)
            } else if filtered.isEmpty && !filteredLoading {
                VStack(spacing: 6) {
                    Image(systemName: "magnifyingglass")
                        .font(.system(size: 28, weight: .light))
                        .foregroundStyle(F2.ink3)
                    Text("No matches")
                        .font(artSerifFont(18, weight: .semibold))
                        .foregroundStyle(F2.ink)
                    Text("Try adjusting or clearing the filters.")
                        .font(.system(size: 13))
                        .foregroundStyle(F2.ink3)
                }
                .padding(.vertical, 48)
            }
        }
    }

    private var heroSkeleton: some View {
        RoundedRectangle(cornerRadius: 22, style: .continuous)
            .fill(F2.ink.opacity(0.06))
            .aspectRatio(16.0/9.0, contentMode: .fit)
            .padding(.horizontal, 16)
            .overlay(ProgressView())
    }

    private var rowSkeletons: some View {
        VStack(spacing: 28) {
            ForEach(0..<3, id: \.self) { _ in
                VStack(alignment: .leading, spacing: 10) {
                    RoundedRectangle(cornerRadius: 4)
                        .fill(F2.ink.opacity(0.08))
                        .frame(width: 80, height: 12)
                    RoundedRectangle(cornerRadius: 4)
                        .fill(F2.ink.opacity(0.08))
                        .frame(width: 220, height: 22)
                    HStack(spacing: 12) {
                        ForEach(0..<3, id: \.self) { _ in
                            RoundedRectangle(cornerRadius: 14)
                                .fill(F2.ink.opacity(0.06))
                                .frame(width: 150, height: 190)
                        }
                    }
                }
                .padding(.horizontal, 20)
            }
        }
    }

    private func errorBanner(_ text: String) -> some View {
        Text(text)
            .font(.system(size: 13))
            .foregroundStyle(.orange)
            .padding(12)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(Color.orange.opacity(0.10))
            )
            .padding(.horizontal, 16)
    }

    // MARK: Data

    private func loadShowcaseIfNeeded() async {
        if showcase != nil || isLoadingShowcase { return }
        isLoadingShowcase = true
        defer { isLoadingShowcase = false }
        do {
            self.showcase = try await SharedContentService.shared.artShowcase()
            self.loadError = nil
        } catch {
            self.loadError = "Couldn't load the art showcase. Pull to refresh."
        }
    }

    private func loadFacetsIfNeeded() async {
        if facets != nil { return }
        do {
            self.facets = try await SharedContentService.shared.artFilters()
        } catch {
            // Non-fatal: the filter sheet still renders, just without
            // facet lists (sort + eras still work).
        }
    }

    private func loadFiltered(reset: Bool) async {
        if filteredLoading { return }
        filteredLoading = true
        defer { filteredLoading = false }
        do {
            let cursor = reset ? nil : filteredCursor
            let result = try await SharedContentService.shared.artFiltered(
                books: Array(filter.bookSlugs),
                artists: Array(filter.artistSlugs),
                eras: Array(filter.eras),
                sort: filter.sort,
                cursor: cursor
            )
            if reset {
                self.filtered = result.artworks
            } else {
                self.filtered.append(contentsOf: result.artworks)
            }
            self.filteredCursor = result.nextCursor
            self.filteredTotal = result.total
            self.filteredError = nil
        } catch {
            self.filteredError = "Couldn't load results. Tap Adjust to try again."
        }
    }
}

// MARK: - Hero card

private struct HeroCard: View {
    let artwork: ArtworkPreview
    let onTap: () -> Void

    var body: some View {
        Button(action: onTap) {
            ZStack(alignment: .bottomLeading) {
                CachedArtImage(url: heroURL, contentMode: .fill)
                    .aspectRatio(16.0/9.0, contentMode: .fill)
                    .frame(maxWidth: .infinity)
                    .clipped()

                // Dark navy → transparent gradient overlay so eyebrow / title legible.
                LinearGradient(
                    colors: [
                        Color.black.opacity(0.0),
                        Color(red: 15/255, green: 40/255, blue: 69/255).opacity(0.85),
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )

                VStack(alignment: .leading, spacing: 6) {
                    Text("FEATURED ARTWORK")
                        .font(.system(size: 11, weight: .bold))
                        .tracking(1.8)
                        .foregroundStyle(Color.white.opacity(0.85))
                    Text(artwork.title)
                        .font(artSerifFont(28, weight: .medium))
                        .foregroundStyle(.white)
                        .lineLimit(3)
                        .multilineTextAlignment(.leading)
                    if let name = artwork.artist_name_cached, !name.isEmpty {
                        Text(name)
                            .font(.system(size: 14, weight: .regular, design: .serif))
                            .italic()
                            .foregroundStyle(Color.white.opacity(0.90))
                    }
                }
                .padding(20)
            }
            .clipShape(RoundedRectangle(cornerRadius: 22, style: .continuous))
            .shadow(color: Color.black.opacity(0.18), radius: 18, x: 0, y: 8)
            .padding(.horizontal, 16)
        }
        .buttonStyle(.plain)
    }

    private var heroURL: URL? {
        if let s = artwork.thumbnail_800_url, let u = URL(string: s) { return u }
        return artwork.previewURL
    }
}

// MARK: - Featured artist section

private struct FeaturedArtistSection: View {
    let featured: ArtFeaturedArtist
    let onTap: (ArtworkPreview) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            VStack(alignment: .leading, spacing: 4) {
                Text("FEATURED ARTIST")
                    .font(.system(size: 11, weight: .bold))
                    .tracking(1.8)
                    .foregroundStyle(F2.accent)
                Text(featured.artist.name)
                    .font(artSerifFont(28, weight: .medium))
                    .foregroundStyle(F2.ink)
                if let years = featured.artist.years, !years.isEmpty {
                    Text(years)
                        .font(.system(size: 13))
                        .foregroundStyle(F2.ink3)
                }
                if let bio = featured.artist.bio, !bio.isEmpty {
                    Text(bio)
                        .font(.system(size: 14, design: .serif))
                        .foregroundStyle(F2.ink2)
                        .lineLimit(4)
                        .multilineTextAlignment(.leading)
                        .padding(.top, 4)
                }
            }
            .padding(.horizontal, 20)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    ForEach(featured.artworks) { art in
                        Button {
                            onTap(art)
                        } label: {
                            ArtTile(artwork: art, width: 150)
                        }
                        .buttonStyle(.plain)
                    }
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 4)
            }
        }
    }
}

// MARK: - Showcase row section

private struct ArtRowSection: View {
    let row: ArtShowcaseRow
    let onTap: (ArtworkPreview) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            VStack(alignment: .leading, spacing: 4) {
                Text(row.kicker.uppercased())
                    .font(.system(size: 11, weight: .bold))
                    .tracking(1.6)
                    .foregroundStyle(F2.accent)
                Text(row.title)
                    .font(artSerifFont(22, weight: .medium))
                    .foregroundStyle(F2.ink)
                    .fixedSize(horizontal: false, vertical: true)
                Text(row.subtitle)
                    .font(.system(size: 13))
                    .foregroundStyle(F2.ink3)
                    .lineLimit(3)
                    .multilineTextAlignment(.leading)
            }
            .padding(.horizontal, 20)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    ForEach(row.artworks) { art in
                        Button {
                            onTap(art)
                        } label: {
                            ArtTile(artwork: art, width: 150)
                        }
                        .buttonStyle(.plain)
                    }
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 4)
            }
        }
    }
}

// MARK: - Tile (horizontal scroll)

private struct ArtTile: View {
    let artwork: ArtworkPreview
    let width: CGFloat

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            CachedArtImage(url: artwork.previewURL, contentMode: .fill)
                .frame(width: width, height: width * 1.25) // 4:5
                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .stroke(F2.ink.opacity(0.06), lineWidth: 0.5)
                )

            VStack(alignment: .leading, spacing: 2) {
                Text(artwork.title)
                    .font(.system(size: 13, weight: .semibold, design: .serif))
                    .foregroundStyle(F2.ink)
                    .lineLimit(2)
                    .multilineTextAlignment(.leading)
                if let name = artwork.artist_name_cached, !name.isEmpty {
                    Text(name)
                        .font(.system(size: 11))
                        .foregroundStyle(F2.ink3)
                        .lineLimit(1)
                }
            }
            .frame(width: width, alignment: .leading)
        }
    }
}

// MARK: - Grid card (filtered view)

private struct ArtGridCard: View {
    let artwork: ArtworkPreview

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            GeometryReader { geo in
                CachedArtImage(url: artwork.previewURL, contentMode: .fill)
                    .frame(width: geo.size.width, height: geo.size.width * 1.25)
                    .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            }
            .aspectRatio(0.8, contentMode: .fit)

            Text(artwork.title)
                .font(.system(size: 12, weight: .semibold, design: .serif))
                .foregroundStyle(F2.ink)
                .lineLimit(2)
                .multilineTextAlignment(.leading)
            if let name = artwork.artist_name_cached, !name.isEmpty {
                Text(name)
                    .font(.system(size: 10))
                    .foregroundStyle(F2.ink3)
                    .lineLimit(1)
            }
        }
    }
}

// MARK: - Cached image (downsampled via ImageIO, NSCache memoization)

private final class ArtImageMemoryCache: @unchecked Sendable {
    static let shared = ArtImageMemoryCache()
    let session: URLSession
    private let memory: NSCache<NSURL, UIImage>

    private init() {
        let cache = URLCache(memoryCapacity: 20 * 1024 * 1024, diskCapacity: 100 * 1024 * 1024)
        let cfg = URLSessionConfiguration.default
        cfg.urlCache = cache
        cfg.requestCachePolicy = .returnCacheDataElseLoad
        self.session = URLSession(configuration: cfg)
        let nc = NSCache<NSURL, UIImage>()
        nc.countLimit = 300
        self.memory = nc
    }

    func image(for url: URL) -> UIImage? { memory.object(forKey: url as NSURL) }
    func store(_ img: UIImage, for url: URL) { memory.setObject(img, forKey: url as NSURL) }
}

private func downsampleArtImage(url: URL, maxPixelSize: CGFloat) async -> UIImage? {
    if let cached = ArtImageMemoryCache.shared.image(for: url) { return cached }
    do {
        let (data, _) = try await ArtImageMemoryCache.shared.session.data(from: url)
        guard let src = CGImageSourceCreateWithData(
            data as CFData,
            [kCGImageSourceShouldCache: false] as CFDictionary
        ) else { return nil }
        let opts: [CFString: Any] = [
            kCGImageSourceCreateThumbnailFromImageAlways: true,
            kCGImageSourceShouldCacheImmediately: true,
            kCGImageSourceCreateThumbnailWithTransform: true,
            kCGImageSourceThumbnailMaxPixelSize: maxPixelSize,
        ]
        guard let cg = CGImageSourceCreateThumbnailAtIndex(src, 0, opts as CFDictionary)
        else { return nil }
        let img = UIImage(cgImage: cg)
        ArtImageMemoryCache.shared.store(img, for: url)
        return img
    } catch {
        return nil
    }
}

private struct CachedArtImage: View {
    let url: URL?
    var contentMode: ContentMode = .fill

    @State private var image: UIImage?
    @State private var didFail = false

    var body: some View {
        GeometryReader { geo in
            ZStack {
                if let image {
                    Image(uiImage: image)
                        .resizable()
                        .aspectRatio(contentMode: contentMode)
                        .frame(width: geo.size.width, height: geo.size.height)
                        .clipped()
                } else if didFail {
                    Rectangle()
                        .fill(F2.ink.opacity(0.05))
                        .overlay(
                            Image(systemName: "photo")
                                .font(.system(size: 18, weight: .light))
                                .foregroundStyle(F2.ink3)
                        )
                } else {
                    Rectangle()
                        .fill(F2.ink.opacity(0.05))
                        .overlay(ProgressView())
                }
            }
            .task(id: url) {
                guard let url else {
                    self.didFail = true
                    return
                }
                if let hit = ArtImageMemoryCache.shared.image(for: url) {
                    self.image = hit
                    return
                }
                let scale = await MainActor.run { UIScreen.main.scale }
                let maxPx = max(geo.size.width, geo.size.height) * scale * 1.2
                if let loaded = await downsampleArtImage(url: url, maxPixelSize: maxPx) {
                    if Task.isCancelled { return }
                    self.image = loaded
                } else if !Task.isCancelled {
                    self.didFail = true
                }
            }
        }
    }
}

// MARK: - Artwork detail sheet (kept as a sheet — tap from row → modal,
// matches the website's full-bleed artwork hub behavior without needing
// a separate pushable detail view inside the Art NavigationStack).

private struct ArtworkDetailSheet: View {
    let artwork: ArtworkPreview
    @Environment(\.dismiss) private var dismiss

    @State private var fullImage: UIImage?
    @State private var didFail = false

    private var fullURL: URL? {
        if let s = artwork.thumbnail_800_url, let u = URL(string: s) { return u }
        return artwork.previewURL
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Group {
                        if let img = fullImage {
                            Image(uiImage: img)
                                .resizable()
                                .scaledToFit()
                        } else if didFail {
                            Rectangle()
                                .fill(F2.ink.opacity(0.05))
                                .frame(height: 360)
                                .overlay(
                                    Image(systemName: "photo")
                                        .font(.largeTitle)
                                        .foregroundStyle(F2.ink3)
                                )
                        } else {
                            Rectangle()
                                .fill(F2.ink.opacity(0.05))
                                .frame(height: 360)
                                .overlay(ProgressView())
                        }
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
                    .task(id: fullURL) {
                        guard let url = fullURL else { return }
                        if let cached = ArtImageMemoryCache.shared.image(for: url) {
                            self.fullImage = cached
                            return
                        }
                        let scale = await MainActor.run { UIScreen.main.scale }
                        let target = await MainActor.run { UIScreen.main.bounds.width } * scale
                        if let loaded = await downsampleArtImage(url: url, maxPixelSize: target) {
                            if Task.isCancelled { return }
                            self.fullImage = loaded
                        } else if !Task.isCancelled {
                            self.didFail = true
                        }
                    }

                    VStack(alignment: .leading, spacing: 6) {
                        Text(artwork.title)
                            .font(artSerifFont(24, weight: .semibold))
                            .foregroundStyle(F2.ink)
                            .fixedSize(horizontal: false, vertical: true)
                        if let name = artwork.artist_name_cached, !name.isEmpty {
                            Text(name)
                                .font(.system(size: 15, design: .serif))
                                .italic()
                                .foregroundStyle(F2.ink2)
                        }
                        if let year = artwork.year, year != 0 {
                            Text(String(year))
                                .font(.system(size: 13))
                                .foregroundStyle(F2.ink3)
                                .padding(.top, 2)
                        }
                    }
                }
                .padding(18)
            }
            .background(Color.white)
            .navigationTitle("")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                        .foregroundStyle(F2.accent)
                }
            }
        }
    }
}

// MARK: - Filter sheet

private struct ArtFilterSheet: View {
    let facets: ArtFilterFacets
    @Binding var filter: ArtFilterState
    @Environment(\.dismiss) private var dismiss

    // Working copy — applied on "Apply" so the user can cancel.
    @State private var draft: ArtFilterState = ArtFilterState()
    @State private var didSeed = false

    private let sortOptions: [(key: String, label: String)] = [
        ("recent",    "Most recently added"),
        ("oldest",    "Oldest first"),
        ("az",        "Title A → Z"),
        ("za",        "Title Z → A"),
        ("year_asc",  "Year ↑"),
        ("year_desc", "Year ↓"),
        ("popular",   "Most popular"),
    ]

    private let eraOptions: [(key: String, label: String)] = [
        ("early-christian", "Early Christian"),
        ("byzantine",       "Byzantine"),
        ("medieval",        "Medieval"),
        ("renaissance",     "Renaissance"),
        ("baroque",         "Baroque"),
        ("modern",          "Modern"),
        ("contemporary",    "Contemporary"),
    ]

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    section("Sort") {
                        Picker("Sort", selection: $draft.sort) {
                            ForEach(sortOptions, id: \.key) { opt in
                                Text(opt.label).tag(opt.key)
                            }
                        }
                        .pickerStyle(.menu)
                        .tint(F2.accent)
                    }

                    section("Era") {
                        chipGrid(items: eraOptions.map { ($0.key, $0.label) },
                                 selected: draft.eras) { key in
                            toggle(&draft.eras, key)
                        }
                    }

                    if !facets.artists.isEmpty {
                        section("Artist") {
                            let topArtists = Array(
                                facets.artists.sorted { $0.count > $1.count }.prefix(20)
                            )
                            chipGrid(
                                items: topArtists.map { ($0.slug, "\($0.name) · \($0.count)") },
                                selected: draft.artistSlugs
                            ) { slug in
                                toggle(&draft.artistSlugs, slug)
                            }
                        }
                    }

                    if !facets.books.isEmpty {
                        section("Book") {
                            let topBooks = Array(facets.books.prefix(20))
                            chipGrid(
                                items: topBooks.map { ($0.slug, $0.name) },
                                selected: draft.bookSlugs
                            ) { slug in
                                toggle(&draft.bookSlugs, slug)
                            }
                        }
                    }

                    Color.clear.frame(height: 60)
                }
                .padding(20)
            }
            .background(Color.white)
            .navigationTitle("Filters")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    Button("Clear") {
                        draft = ArtFilterState()
                    }
                    .foregroundStyle(F2.ink2)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Apply") {
                        filter = draft
                        dismiss()
                    }
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(F2.accent)
                }
            }
            .onAppear {
                if !didSeed {
                    draft = filter
                    didSeed = true
                }
            }
        }
    }

    @ViewBuilder
    private func section<Content: View>(
        _ title: String,
        @ViewBuilder content: () -> Content
    ) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(title.uppercased())
                .font(.system(size: 11, weight: .bold))
                .tracking(1.4)
                .foregroundStyle(F2.accent)
            content()
        }
    }

    private func chipGrid(
        items: [(String, String)],
        selected: Set<String>,
        toggle: @escaping (String) -> Void
    ) -> some View {
        // Wrap chips with a FlexibleStack-like behavior.
        FlexibleChips(items: items, selected: selected, onTap: toggle)
    }

    private func toggle(_ set: inout Set<String>, _ key: String) {
        if set.contains(key) { set.remove(key) } else { set.insert(key) }
    }
}

/// A simple wrap-around chip layout — uses iOS 16's Layout API would be
/// nicer but to stay deploymentTarget 17 + cheap, we hand-roll a width-
/// based wrap with `Group` + a state-driven `chunked` array. Keeps the
/// implementation file local and doesn't add a third-party dependency.
private struct FlexibleChips: View {
    let items: [(String, String)]
    let selected: Set<String>
    let onTap: (String) -> Void

    var body: some View {
        // Render as wrapping HStacks. Splitting into "rows" naively by
        // count gives a stable look without measuring text. We chunk by 3
        // for short labels (era) and trust SwiftUI's natural flex.
        // Better still: a single VStack of HStacks where each HStack
        // wraps via `.fixedSize` + spacers — but simplest: use
        // LazyVGrid with adaptive columns.
        LazyVGrid(
            columns: [GridItem(.adaptive(minimum: 100), spacing: 8)],
            alignment: .leading,
            spacing: 8
        ) {
            ForEach(items, id: \.0) { item in
                let isOn = selected.contains(item.0)
                Button {
                    onTap(item.0)
                } label: {
                    Text(item.1)
                        .font(.system(size: 12, weight: .semibold))
                        .lineLimit(1)
                        .padding(.horizontal, 12)
                        .padding(.vertical, 8)
                        .frame(maxWidth: .infinity)
                        .background(
                            Capsule()
                                .fill(isOn ? F2.accent : F2.ink.opacity(0.06))
                        )
                        .foregroundStyle(isOn ? .white : F2.ink)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

// MARK: - ArtworkPreview Identifiable conformance for sheet(item:)

// ArtworkPreview already conforms to Hashable + Identifiable via its
// `slug` (declared in ArtService.swift). The new sheet(item:) consumer
// just needs sheet item identity, which comes from Identifiable.
