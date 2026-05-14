// ArtView.swift
// ────────────────────────────────────────────────────────────────────────────
// Browse the chapter-artwork library. Hits Supabase PostgREST for the
// approved subset of the `artworks` table (7,000+ works as of 2026-05),
// renders a 2-column masonry-ish grid with AsyncImage thumbnails, and
// hands each tile off to an artwork detail sheet on tap.
//
// Tile design matches the frosted home — ultraThinMaterial backdrop,
// large rounded corners, accent eyebrows on metadata.
//
// Network errors don't replace the grid; they surface as a small
// banner at the top so the user can still scroll the grid of cached
// or already-loaded thumbnails AsyncImage may have on disk.

import SwiftUI
import ImageIO
import UIKit

struct ArtView: View {
    @State private var artworks: [ArtworkPreview] = []
    @State private var error: String?
    @State private var isLoading = false
    @State private var selected: SelectedArtwork?
    @State private var query: String = ""

    private let columns: [GridItem] = [
        GridItem(.flexible(), spacing: Theme.metric.spaceM),
        GridItem(.flexible(), spacing: Theme.metric.spaceM),
    ]

    var body: some View {
        ZStack {
            ArtBackdrop()
                .ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                    header
                    searchField

                    if let error {
                        Text(error)
                            .font(Theme.font.callout)
                            .foregroundStyle(Theme.color.warning)
                            .padding(Theme.metric.spaceM)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .background(
                                RoundedRectangle(cornerRadius: 16)
                                    .fill(.ultraThinMaterial)
                            )
                    }

                    if artworks.isEmpty && isLoading {
                        skeletonGrid
                    } else if artworks.isEmpty {
                        emptyCard
                    } else {
                        LazyVGrid(columns: columns, spacing: Theme.metric.spaceM) {
                            ForEach(artworks) { artwork in
                                ArtworkTileButton(artwork: artwork) { preloaded in
                                    selected = SelectedArtwork(
                                        artwork: artwork,
                                        preloadedTile: preloaded
                                    )
                                }
                            }
                        }
                    }
                }
                .padding(.horizontal, Theme.metric.spaceL)
                .padding(.top, Theme.metric.spaceXL)
                .padding(.bottom, Theme.metric.spaceXXL)
            }
        }
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
        .task(id: debouncedQuery) { await load(for: debouncedQuery) }
        .refreshable { await load(for: query) }
        .sheet(item: $selected) { sel in
            ArtworkDetailSheet(
                artwork: sel.artwork,
                preloadedTile: sel.preloadedTile
            )
        }
    }

    // MARK: - Search field

    /// Debounced query — `task(id:)` only re-runs when this value
    /// changes, and we set it after a short delay so each keystroke
    /// doesn't fire a network request.
    @State private var debouncedQuery: String = ""

    private var searchField: some View {
        HStack(spacing: Theme.metric.spaceS) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.secondary)
            TextField("Search artwork, artist, theme…", text: $query)
                .textFieldStyle(.plain)
                .submitLabel(.search)
                .autocorrectionDisabled()
                .textInputAutocapitalization(.never)
                .foregroundStyle(.primary)
            if !query.isEmpty {
                Button {
                    query = ""
                    debouncedQuery = ""
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .font(.system(size: 16))
                        .foregroundStyle(.secondary)
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.horizontal, Theme.metric.spaceL)
        .padding(.vertical, Theme.metric.spaceM)
        .background(
            Capsule().fill(.ultraThinMaterial)
        )
        .overlay(
            Capsule().stroke(.primary.opacity(0.08), lineWidth: 1)
        )
        .task(id: query) {
            // Debounce: 350ms after last keystroke.
            try? await Task.sleep(nanoseconds: 350_000_000)
            if Task.isCancelled { return }
            debouncedQuery = query
        }
    }

    // MARK: - Header

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text("ART LIBRARY")
                .font(Theme.font.eyebrow)
                .tracking(3)
                .foregroundStyle(Theme.color.accent)
            Text("Scripture through\n2,000 years of art.")
                .font(.system(size: 34, weight: .semibold, design: .serif))
                .lineSpacing(-4)
                .foregroundStyle(.primary)
                .fixedSize(horizontal: false, vertical: true)
            Text("Curated from the Met, the Rijksmuseum, Wikimedia, and the Church History collection.")
                .font(Theme.font.callout)
                .foregroundStyle(.secondary)
        }
        .padding(.bottom, Theme.metric.spaceS)
    }

    // MARK: - Skeleton (loading state)

    private var skeletonGrid: some View {
        LazyVGrid(columns: columns, spacing: Theme.metric.spaceM) {
            ForEach(0..<8, id: \.self) { _ in
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
                    .frame(height: 220)
                    .overlay(
                        Image(systemName: "photo.artframe")
                            .font(.system(size: 28, weight: .light))
                            .foregroundStyle(.secondary)
                    )
            }
        }
    }

    // MARK: - Empty state

    private var emptyCard: some View {
        let searching = !debouncedQuery.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
        return VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text(searching ? "NO MATCHES" : "NOTHING TO SHOW")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(.secondary)
            Text(
                searching
                ? "Try a different artist name, biblical figure, or theme. The catalog has 7,000+ approved works tagged by name, period, and subject."
                : "The art catalog couldn't load. Pull down to refresh."
            )
            .font(Theme.font.body)
            .foregroundStyle(.primary)
            .fixedSize(horizontal: false, vertical: true)
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.ultraThinMaterial)
        )
    }

    // MARK: - Data

    private func load(for query: String) async {
        isLoading = true
        defer { isLoading = false }
        do {
            self.error = nil
            self.artworks = try await ArtService.shared.search(query: query, limit: 60)
        } catch {
            self.error = error.localizedDescription
        }
    }
}

// MARK: - Image cache + loader

/// Shared image cache. Single `URLSession` configured with a generous
/// disk+memory `URLCache`, plus an `NSCache` of decoded `UIImage`s keyed
/// by URL. The NSCache is the hot path on scroll — it skips both the
/// network and the ImageIO decode.
///
/// Final-class + immutable storage; safe to mark `Sendable` and use
/// from any actor.
final class ArtImageCache: @unchecked Sendable {
    static let shared = ArtImageCache()

    let session: URLSession
    private let memoryCache: NSCache<NSURL, UIImage>

    private init() {
        let cache = URLCache(
            memoryCapacity: 20 * 1024 * 1024,
            diskCapacity: 100 * 1024 * 1024
        )
        let config = URLSessionConfiguration.default
        config.urlCache = cache
        config.requestCachePolicy = .returnCacheDataElseLoad
        self.session = URLSession(configuration: config)
        let nsCache = NSCache<NSURL, UIImage>()
        nsCache.countLimit = 200
        self.memoryCache = nsCache
    }

    func image(forKey url: URL) -> UIImage? {
        memoryCache.object(forKey: url as NSURL)
    }

    func store(_ image: UIImage, forKey url: URL) {
        memoryCache.setObject(image, forKey: url as NSURL)
    }
}

/// Downloads the image bytes via the shared cache-aware session, then
/// downsamples through ImageIO to a target pixel size so the GPU
/// doesn't have to push a 2,000-px-wide texture for a 180-pt tile.
private func loadDownsampledImage(
    url: URL,
    maxPixelSize: CGFloat
) async -> UIImage? {
    if let cached = ArtImageCache.shared.image(forKey: url) {
        return cached
    }
    do {
        let (data, _) = try await ArtImageCache.shared.session.data(from: url)
        guard let source = CGImageSourceCreateWithData(
            data as CFData,
            [kCGImageSourceShouldCache: false] as CFDictionary
        ) else { return nil }
        let options: [CFString: Any] = [
            kCGImageSourceCreateThumbnailFromImageAlways: true,
            kCGImageSourceShouldCacheImmediately: true,
            kCGImageSourceCreateThumbnailWithTransform: true,
            kCGImageSourceThumbnailMaxPixelSize: maxPixelSize,
        ]
        guard let cg = CGImageSourceCreateThumbnailAtIndex(
            source, 0, options as CFDictionary
        ) else { return nil }
        let img = UIImage(cgImage: cg)
        ArtImageCache.shared.store(img, forKey: url)
        return img
    } catch {
        return nil
    }
}

// MARK: - Cached image view

/// Drop-in replacement for `AsyncImage` that uses the shared cache and
/// downsamples to the tile's display size. Reports the loaded image
/// back to the parent via `onLoaded` so taps can pass the already-
/// decoded `UIImage` straight to the detail sheet.
private struct CachedTileImage: View {
    let url: URL?
    let targetSize: CGSize
    var onLoaded: (@MainActor (UIImage) -> Void)? = nil

    @State private var image: UIImage?
    @State private var didFail = false

    var body: some View {
        ZStack {
            if let image {
                Image(uiImage: image)
                    .resizable()
                    .scaledToFill()
            } else if didFail {
                RoundedRectangle(cornerRadius: 16)
                    .fill(Theme.color.fillSubtle)
                    .overlay(
                        Image(systemName: "photo")
                            .font(.system(size: 24, weight: .light))
                            .foregroundStyle(.secondary)
                    )
            } else {
                RoundedRectangle(cornerRadius: 16)
                    .fill(Theme.color.fillSubtle)
                    .overlay(ProgressView())
            }
        }
        .task(id: url) {
            guard let url else {
                didFail = true
                return
            }
            // Synchronous cache hit — avoid the async hop entirely.
            if let cached = ArtImageCache.shared.image(forKey: url) {
                self.image = cached
                onLoaded?(cached)
                return
            }
            let scale = await MainActor.run { UIScreen.main.scale }
            let maxPixel = max(targetSize.width, targetSize.height) * scale
            if let loaded = await loadDownsampledImage(url: url, maxPixelSize: maxPixel) {
                if Task.isCancelled { return }
                self.image = loaded
                onLoaded?(loaded)
            } else if !Task.isCancelled {
                self.didFail = true
            }
        }
    }
}

// MARK: - Selection wrapper

/// Pairs a tappable artwork with whatever tile-sized image we've already
/// decoded for it, so the detail sheet doesn't have to re-fetch the
/// 800px URL just to render a placeholder.
private struct SelectedArtwork: Identifiable {
    let artwork: ArtworkPreview
    let preloadedTile: UIImage?
    var id: ArtworkPreview.ID { artwork.id }
}

// MARK: - Tile

/// Wraps the tile in a Button and threads the most recent decoded image
/// back to the caller so a tap can pass it to the detail sheet.
private struct ArtworkTileButton: View {
    let artwork: ArtworkPreview
    let onTap: (UIImage?) -> Void

    @State private var preloaded: UIImage?

    var body: some View {
        Button {
            onTap(preloaded)
        } label: {
            ArtworkTile(artwork: artwork) { img in
                preloaded = img
            }
        }
        .buttonStyle(.plain)
    }
}

private struct ArtworkTile: View {
    let artwork: ArtworkPreview
    let onImageLoaded: (UIImage) -> Void

    /// Display height of the tile image. Used to size the downsampled
    /// thumbnail so the decoded `UIImage` is roughly the displayed size
    /// times the screen scale.
    private static let tileImageHeight: CGFloat = 200

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            GeometryReader { geo in
                CachedTileImage(
                    url: artwork.previewURL,
                    targetSize: CGSize(width: geo.size.width, height: Self.tileImageHeight),
                    onLoaded: onImageLoaded
                )
                .frame(width: geo.size.width, height: Self.tileImageHeight)
                .clipShape(RoundedRectangle(cornerRadius: 16))
            }
            .frame(height: Self.tileImageHeight)
            .frame(maxWidth: .infinity)

            VStack(alignment: .leading, spacing: 2) {
                Text(artwork.title)
                    .font(.system(.subheadline, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                    .lineLimit(2)
                    .multilineTextAlignment(.leading)
                if let artist = artwork.artist_name_cached, !artist.isEmpty {
                    Text(artist)
                        .font(Theme.font.caption)
                        .foregroundStyle(.secondary)
                        .lineLimit(1)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding(Theme.metric.spaceS)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(Theme.color.fillSubtle)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - Detail sheet

private struct ArtworkDetailSheet: View {
    let artwork: ArtworkPreview
    let preloadedTile: UIImage?
    @Environment(\.dismiss) private var dismiss

    @State private var fullImage: UIImage?
    @State private var didFail = false

    private var fullURL: URL? {
        if let s = artwork.thumbnail_800_url, let u = URL(string: s) { return u }
        return artwork.previewURL
    }

    /// What to show in the hero image slot. Order of preference:
    /// 1. The full-size image once it's loaded.
    /// 2. The pre-loaded tile passed in from the grid (so the sheet has
    ///    something to render immediately, no flash of empty material,
    ///    no re-fetch of the smaller URL just to make a placeholder).
    private var heroImage: UIImage? {
        fullImage ?? preloadedTile
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                    Group {
                        if let heroImage {
                            Image(uiImage: heroImage)
                                .resizable()
                                .scaledToFit()
                        } else if didFail {
                            Rectangle()
                                .fill(Theme.color.fillSubtle)
                                .frame(height: 360)
                                .overlay(
                                    Image(systemName: "photo")
                                        .font(.largeTitle)
                                        .foregroundStyle(.secondary)
                                )
                        } else {
                            Rectangle()
                                .fill(Theme.color.fillSubtle)
                                .frame(height: 360)
                                .overlay(ProgressView())
                        }
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 20))
                    .task(id: fullURL) {
                        guard let url = fullURL else { return }
                        if let cached = ArtImageCache.shared.image(forKey: url) {
                            self.fullImage = cached
                            return
                        }
                        // Aim for ~screen-width pixels; the 800px URL
                        // already caps us short of that on most devices.
                        let scale = await MainActor.run { UIScreen.main.scale }
                        let target = await MainActor.run { UIScreen.main.bounds.width } * scale
                        if let loaded = await loadDownsampledImage(
                            url: url,
                            maxPixelSize: target
                        ) {
                            if Task.isCancelled { return }
                            self.fullImage = loaded
                        } else if !Task.isCancelled {
                            self.didFail = true
                        }
                    }

                    VStack(alignment: .leading, spacing: Theme.metric.spaceXS) {
                        Text(artwork.title)
                            .font(.system(.title2, design: .serif).weight(.semibold))
                            .foregroundStyle(Theme.color.label)
                            .fixedSize(horizontal: false, vertical: true)
                        if let artist = artwork.artist_name_cached, !artist.isEmpty {
                            Text(artist)
                                .font(Theme.font.body)
                                .foregroundStyle(Theme.color.secondaryLabel)
                        }
                        if let year = artwork.year, year != 0 {
                            Text(String(year))
                                .font(Theme.font.callout)
                                .foregroundStyle(Theme.color.tertiaryLabel)
                                .padding(.top, Theme.metric.spaceXS)
                        }
                    }
                }
                .padding(Theme.metric.spaceL)
            }
            .background(Theme.color.background)
            .navigationTitle("")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                }
            }
        }
    }
}

// MARK: - Backdrop

private struct ArtBackdrop: View {
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        let top: Color
        let mid: Color
        let bottom: Color
        switch scheme {
        case .dark:
            top    = Color(red: 0.10, green: 0.09, blue: 0.08)
            mid    = Color(red: 0.22, green: 0.14, blue: 0.11)
            bottom = Color(red: 0.06, green: 0.05, blue: 0.04)
        default:
            top    = Color(red: 0.94, green: 0.88, blue: 0.78)
            mid    = Color(red: 0.78, green: 0.62, blue: 0.46)
            bottom = Color(red: 0.30, green: 0.22, blue: 0.17)
        }
        return LinearGradient(
            colors: [top, mid, bottom],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
    }
}
