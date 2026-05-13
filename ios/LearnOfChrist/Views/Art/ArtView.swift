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

struct ArtView: View {
    @State private var artworks: [ArtworkPreview] = []
    @State private var error: String?
    @State private var isLoading = false
    @State private var selected: ArtworkPreview?
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
                                Button {
                                    selected = artwork
                                } label: {
                                    ArtworkTile(artwork: artwork)
                                }
                                .buttonStyle(.plain)
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
        .sheet(item: $selected) { art in
            ArtworkDetailSheet(artwork: art)
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

// MARK: - Tile

private struct ArtworkTile: View {
    let artwork: ArtworkPreview

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            AsyncImage(url: artwork.previewURL) { phase in
                switch phase {
                case .empty:
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                        .overlay(ProgressView())
                case .success(let image):
                    image.resizable().scaledToFill()
                case .failure:
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                        .overlay(
                            Image(systemName: "photo")
                                .font(.system(size: 24, weight: .light))
                                .foregroundStyle(.secondary)
                        )
                @unknown default:
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                }
            }
            .frame(height: 200)
            .frame(maxWidth: .infinity)
            .clipShape(RoundedRectangle(cornerRadius: 16))

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
                .fill(.ultraThinMaterial)
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
    @Environment(\.dismiss) private var dismiss

    private var fullURL: URL? {
        if let s = artwork.thumbnail_800_url, let u = URL(string: s) { return u }
        return artwork.previewURL
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                    AsyncImage(url: fullURL) { phase in
                        switch phase {
                        case .empty:
                            Rectangle()
                                .fill(Theme.color.fillSubtle)
                                .frame(height: 360)
                                .overlay(ProgressView())
                        case .success(let image):
                            image.resizable().scaledToFit()
                        case .failure:
                            Rectangle()
                                .fill(Theme.color.fillSubtle)
                                .frame(height: 360)
                                .overlay(
                                    Image(systemName: "photo")
                                        .font(.largeTitle)
                                        .foregroundStyle(.secondary)
                                )
                        @unknown default:
                            Rectangle().fill(Theme.color.fillSubtle).frame(height: 360)
                        }
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 20))

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
