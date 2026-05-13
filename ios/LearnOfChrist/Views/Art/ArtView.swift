// ArtView.swift
// ────────────────────────────────────────────────────────────────────────────
// Browse the chapter-artwork library. v1 is intentionally a frosted
// "Coming soon" placeholder so the Home tab's "Explore the art library"
// row doesn't push to an empty screen. Real implementation will:
//
//   • Hit Supabase REST for the `artworks` table, filtered + paged.
//   • Render a masonry-ish grid with `AsyncImage` over the public
//     thumbnail URLs in the `art-thumbs` Supabase Storage bucket.
//   • Per-artwork detail sheet with artist + period + linked chapter.
//
// For now we ship the visual language (warm gradient + ultra-thin
// material card) so users see the design direction even when there's
// no data yet.

import SwiftUI

struct ArtView: View {
    var body: some View {
        ZStack {
            ArtBackdrop()
                .ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                    header
                    comingSoonCard
                    sampleGalleryCard
                }
                .padding(.horizontal, Theme.metric.spaceL)
                .padding(.top, Theme.metric.spaceXL)
                .padding(.bottom, Theme.metric.spaceXXL)
            }
        }
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text("ART LIBRARY")
                .font(Theme.font.eyebrow)
                .tracking(3)
                .foregroundStyle(Theme.color.accent)
            Text("Scripture through\n2,000 years of art.")
                .font(.system(size: 36, weight: .semibold, design: .serif))
                .lineSpacing(-4)
                .foregroundStyle(.primary)
        }
    }

    private var comingSoonCard: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("COMING SOON ON iOS")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.accent)
            Text("The full art library — 1,000+ works from the Met, the Rijksmuseum, Wikimedia, and the Church History collection — is wired on the web. The iOS browse experience is on the way; each chapter's plate already renders inline in the reader.")
                .font(Theme.font.body)
                .foregroundStyle(.primary)
                .lineSpacing(4)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(.ultraThinMaterial)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 24)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }

    /// Three placeholder tiles in a row — give the user a feel of the
    /// eventual layout without making promises about specific artworks.
    private var sampleGalleryCard: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("PREVIEW LAYOUT")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(.secondary)
            HStack(spacing: Theme.metric.spaceM) {
                ForEach(0..<3, id: \.self) { _ in
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                        .frame(height: 120)
                        .overlay(
                            Image(systemName: "photo.artframe")
                                .font(.system(size: 28, weight: .light))
                                .foregroundStyle(.secondary)
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(.primary.opacity(0.06), lineWidth: 1)
                        )
                }
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(.ultraThinMaterial)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 24)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

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
