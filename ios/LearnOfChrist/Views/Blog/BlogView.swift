// BlogView.swift
// ────────────────────────────────────────────────────────────────────────────
// Browse the blog posts. v1 is a frosted placeholder — same design
// idiom as Art / Home, "coming soon" copy that explains what will
// land here. Real fetch will pull from Supabase `blog_posts` and
// render with MDX-aware text.

import SwiftUI

struct BlogView: View {
    var body: some View {
        ZStack {
            BlogBackdrop()
                .ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                    header
                    placeholderCard
                    samplePostList
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

    private var placeholderCard: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("COMING SOON ON iOS")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.accent)
            Text("Long-form essays, study breakdowns, and behind-the-scenes notes from the editor — currently live on learnofchrist.com/blog. iOS reader coming next.")
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

    private var samplePostList: some View {
        VStack(spacing: Theme.metric.spaceM) {
            ForEach(0..<3, id: \.self) { _ in
                HStack(alignment: .top, spacing: Theme.metric.spaceM) {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(.ultraThinMaterial)
                        .frame(width: 72, height: 72)
                        .overlay(
                            Image(systemName: "doc.text")
                                .font(.system(size: 20, weight: .light))
                                .foregroundStyle(.secondary)
                        )
                    VStack(alignment: .leading, spacing: 4) {
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.18))
                            .frame(height: 14)
                            .frame(maxWidth: 220)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.12))
                            .frame(height: 10)
                            .frame(maxWidth: .infinity)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(.primary.opacity(0.10))
                            .frame(height: 10)
                            .frame(maxWidth: 280)
                    }
                    Spacer(minLength: 0)
                }
                .padding(Theme.metric.spaceM)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(
                    RoundedRectangle(cornerRadius: 20)
                        .fill(.ultraThinMaterial)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(.primary.opacity(0.05), lineWidth: 1)
                )
            }
        }
    }
}

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
