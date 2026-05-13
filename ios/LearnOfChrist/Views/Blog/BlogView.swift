// BlogView.swift
// ────────────────────────────────────────────────────────────────────────────
// Blog feed. Fetches `blog_posts` via PostgREST anon read, filters to
// status='published'. Same frosted-card design idiom as Home + Art.
// When the server has no posts yet, falls through to a graceful
// "nothing published yet" empty state so the screen doesn't look
// broken on a fresh project.

import SwiftUI

struct BlogView: View {
    @State private var posts: [BlogPostPreview] = []
    @State private var error: String?
    @State private var isLoading = false

    var body: some View {
        ZStack {
            BlogBackdrop()
                .ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                    header

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

                    if posts.isEmpty && isLoading {
                        skeletonList
                    } else if posts.isEmpty {
                        emptyCard
                    } else {
                        VStack(spacing: Theme.metric.spaceM) {
                            ForEach(posts) { post in
                                BlogPostCard(post: post)
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
        .task { await load() }
        .refreshable { await load() }
    }

    // MARK: - Header

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text("THE BLOG")
                .font(Theme.font.eyebrow)
                .tracking(3)
                .foregroundStyle(Theme.color.accent)
            Text("Stories from\nthe study.")
                .font(.system(size: 36, weight: .semibold, design: .serif))
                .lineSpacing(-4)
                .foregroundStyle(.primary)
        }
    }

    // MARK: - Loading skeleton

    private var skeletonList: some View {
        VStack(spacing: Theme.metric.spaceM) {
            ForEach(0..<3, id: \.self) { _ in
                HStack(alignment: .top, spacing: Theme.metric.spaceM) {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(.ultraThinMaterial)
                        .frame(width: 96, height: 96)
                    VStack(alignment: .leading, spacing: 6) {
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.18))
                            .frame(height: 16)
                            .frame(maxWidth: 220)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.10))
                            .frame(height: 10)
                            .frame(maxWidth: .infinity)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.10))
                            .frame(height: 10)
                            .frame(maxWidth: 240)
                    }
                    Spacer(minLength: 0)
                }
                .padding(Theme.metric.spaceM)
                .background(
                    RoundedRectangle(cornerRadius: 20)
                        .fill(.ultraThinMaterial)
                )
            }
        }
    }

    // MARK: - Empty state

    private var emptyCard: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("NOTHING PUBLISHED YET")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.accent)
            Text("The blog will land here once the first essay is published. We'll surface long-form study breakdowns, behind-the-scenes notes, and reader letters as they go up.")
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

    // MARK: - Data

    private func load() async {
        isLoading = true
        defer { isLoading = false }
        do {
            self.error = nil
            self.posts = try await BlogService.shared.listLatest(limit: 40)
        } catch {
            self.error = error.localizedDescription
        }
    }
}

// MARK: - Post card

private struct BlogPostCard: View {
    let post: BlogPostPreview

    private static let shortDate: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "MMM d"
        return f
    }()

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            if let url = post.heroURL {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .empty:
                        Rectangle()
                            .fill(.ultraThinMaterial)
                            .overlay(ProgressView())
                    case .success(let image):
                        image.resizable().scaledToFill()
                    case .failure:
                        Rectangle()
                            .fill(.ultraThinMaterial)
                            .overlay(
                                Image(systemName: "photo")
                                    .foregroundStyle(.secondary)
                            )
                    @unknown default:
                        Rectangle().fill(.ultraThinMaterial)
                    }
                }
                .frame(height: 180)
                .frame(maxWidth: .infinity)
                .clipShape(
                    UnevenRoundedRectangle(
                        topLeadingRadius: 20,
                        bottomLeadingRadius: 0,
                        bottomTrailingRadius: 0,
                        topTrailingRadius: 20
                    )
                )
            }

            VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
                if let date = post.publishedDate {
                    Text(Self.shortDate.string(from: date).uppercased())
                        .font(Theme.font.eyebrow)
                        .tracking(2)
                        .foregroundStyle(Theme.color.accent)
                }
                Text(post.title)
                    .font(.system(.title3, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                    .fixedSize(horizontal: false, vertical: true)
                    .multilineTextAlignment(.leading)
                if let excerpt = post.excerpt, !excerpt.isEmpty {
                    Text(excerpt)
                        .font(Theme.font.body)
                        .foregroundStyle(.secondary)
                        .lineLimit(3)
                        .multilineTextAlignment(.leading)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
            .padding(Theme.metric.spaceL)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
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

// MARK: - Backdrop

private struct BlogBackdrop: View {
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        let top: Color
        let mid: Color
        let bottom: Color
        switch scheme {
        case .dark:
            top    = Color(red: 0.09, green: 0.08, blue: 0.06)
            mid    = Color(red: 0.18, green: 0.13, blue: 0.10)
            bottom = Color(red: 0.05, green: 0.04, blue: 0.03)
        default:
            top    = Color(red: 0.93, green: 0.89, blue: 0.81)
            mid    = Color(red: 0.74, green: 0.63, blue: 0.51)
            bottom = Color(red: 0.26, green: 0.20, blue: 0.16)
        }
        return LinearGradient(
            colors: [top, mid, bottom],
            startPoint: .top,
            endPoint: .bottom
        )
    }
}
