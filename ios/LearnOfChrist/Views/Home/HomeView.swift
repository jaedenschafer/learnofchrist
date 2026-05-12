// HomeView.swift
// ────────────────────────────────────────────────────────────────────────────
// The new first-tab landing. Replaces the previous "open straight into
// the book grid" flow with an editorial entry point that mirrors
// learnofchrist.com's homepage:
//
//   • Eyebrow + huge serif hero ("Find God in the story.") to set tone.
//   • Continue Reading card — present when the user has any
//     `StoredReadingProgress` rows. Latest-updated chapter wins.
//   • "Start with Genesis 1" CTA — always-on quickstart.
//   • Today's verse card — placeholder for now; will pull from
//     `v1_home_feed.daily_verse_ref` once the home feed RPC is wired.
//   • Browse the Bible link — bridge to the existing BookGridView.
//
// Visual idiom: warm parchment surface, terracotta accent, deep serif
// type. No system blue, no SF chrome where it can be avoided.

import SwiftUI
import SwiftData

struct HomeView: View {
    @Environment(UserDataStore.self) private var userData
    @Environment(\.scenePhase) private var scenePhase

    /// Latest reading-progress row, surfaced as Continue Reading.
    @Query(
        filter: #Predicate<StoredReadingProgress> { $0.deletedAt == nil },
        sort: [SortDescriptor(\StoredReadingProgress.updatedAt, order: .reverse)]
    )
    private var recentProgress: [StoredReadingProgress]

    private var continueReading: StoredReadingProgress? {
        recentProgress.first
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Theme.metric.spaceXXL) {
                heroBlock
                if let progress = continueReading {
                    ContinueReadingCard(progress: progress)
                }
                quickstartBlock
                browseBlock
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.top, Theme.metric.spaceXL)
            .padding(.bottom, Theme.metric.spaceXXL)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .background(Theme.color.background.ignoresSafeArea())
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
    }

    // MARK: - Hero

    private var heroBlock: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            Text("A FREE BIBLE STUDY, BEAUTIFULLY MADE.")
                .font(Theme.font.eyebrow)
                .tracking(2.5)
                .foregroundStyle(Theme.color.accent)

            Text("Find God\nin the story.")
                .font(Theme.font.hero)
                .lineSpacing(-6) // tighten the leading on the display
                .foregroundStyle(Theme.color.label)
                .fixedSize(horizontal: false, vertical: true)

            Text("One narrative runs from Genesis to Revelation. Read every chapter, study the original languages, and see scripture through two thousand years of sacred art.")
                .font(Theme.font.body)
                .foregroundStyle(Theme.color.secondaryLabel)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(.top, Theme.metric.spaceM)
    }

    // MARK: - Quickstart

    private var quickstartBlock: some View {
        NavigationLink(value: ChapterRoute(bookSlug: "genesis", chapter: 1)) {
            HStack(spacing: Theme.metric.spaceM) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("START HERE")
                        .font(Theme.font.eyebrow)
                        .tracking(2)
                        .foregroundStyle(Theme.color.accent)
                    Text("Genesis 1")
                        .font(Theme.font.title)
                        .foregroundStyle(Theme.color.label)
                    Text("In the beginning, God created the heaven and the earth.")
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                        .lineLimit(2)
                        .multilineTextAlignment(.leading)
                }
                Spacer(minLength: Theme.metric.spaceM)
                Image(systemName: "arrow.right")
                    .font(.system(size: 18, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
            }
            .padding(Theme.metric.spaceL)
            .frame(maxWidth: .infinity, alignment: .leading)
            .themeFill(.warmSubtle, radius: Theme.metric.radiusLG)
        }
        .buttonStyle(.plain)
    }

    // MARK: - Browse the Bible

    private var browseBlock: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("OR BROWSE")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)

            HStack(spacing: Theme.metric.spaceM) {
                NavigationLink(value: BrowseDestination.bible) {
                    BrowseTile(
                        title: "Bible",
                        subtitle: "All 66 books + deuterocanon",
                        icon: "book.closed"
                    )
                }
                .buttonStyle(.plain)

                NavigationLink(value: BrowseDestination.library) {
                    BrowseTile(
                        title: "Library",
                        subtitle: "Your notes + highlights",
                        icon: "bookmark"
                    )
                }
                .buttonStyle(.plain)
            }
        }
    }
}

// MARK: - Continue Reading

private struct ContinueReadingCard: View {
    let progress: StoredReadingProgress

    private var bookName: String {
        BibleBookCatalog.book(for: progress.bookSlug)?.name
            ?? progress.bookSlug.capitalized
    }

    var body: some View {
        NavigationLink(
            value: ChapterRoute(bookSlug: progress.bookSlug, chapter: progress.chapter)
        ) {
            VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
                Text("CONTINUE READING")
                    .font(Theme.font.eyebrow)
                    .tracking(2)
                    .foregroundStyle(Theme.color.secondaryLabel)

                HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceS) {
                    Text(bookName)
                        .font(Theme.font.title)
                        .foregroundStyle(Theme.color.label)
                    Text("\(progress.chapter)")
                        .font(Theme.font.title)
                        .foregroundStyle(Theme.color.accent)
                }

                if let verse = progress.lastVerseIndex, verse > 0 {
                    Text("Resume at verse \(verse)")
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                } else {
                    Text("Pick up where you left off")
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                }

                HStack(spacing: Theme.metric.spaceXS) {
                    Text("Open chapter")
                        .font(Theme.font.cardTitle)
                    Image(systemName: "arrow.right")
                        .font(.system(size: 13, weight: .semibold))
                }
                .foregroundStyle(Theme.color.accent)
                .padding(.top, Theme.metric.spaceXS)
            }
            .padding(Theme.metric.spaceL)
            .frame(maxWidth: .infinity, alignment: .leading)
            .themeFill(.warm, radius: Theme.metric.radiusLG)
        }
        .buttonStyle(.plain)
    }
}

// MARK: - BrowseTile

private struct BrowseTile: View {
    let title: String
    let subtitle: String
    let icon: String

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Image(systemName: icon)
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(Theme.color.accent)
            Text(title)
                .font(Theme.font.cardTitle)
                .foregroundStyle(Theme.color.label)
            Text(subtitle)
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.secondaryLabel)
                .lineLimit(2)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }
}

// MARK: - Browse navigation destinations

/// Routing values for the home-screen browse tiles. Resolved by the
/// home NavigationStack's destination modifier in RootView.
enum BrowseDestination: Hashable {
    case bible
    case library
}
