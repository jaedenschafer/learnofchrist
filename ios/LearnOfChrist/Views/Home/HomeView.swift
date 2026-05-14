// HomeView.swift
// ────────────────────────────────────────────────────────────────────────────
// Editorial home screen for the Learn of Christ iOS app.
//
// Patterned after the Calm / Headspace / YouVersion stack: a single
// vertical scroll of rounded "card" sections, with two horizontal
// swipeable carousels and a 2×2 quick-actions grid. Every card is
// .ultraThinMaterial on a warm parchment gradient, with EB-Garamond
// serif display type for verse copy and Inter (via Theme.font) for UI.
//
// Section order (top → bottom):
//
//   1.  GreetingHeader        — "Good morning, friend." + streak chip
//   2.  VerseOfDayCard        — large daily verse hero
//   3.  ContinueReadingCard   — only when there's reading progress
//   4.  TodaysStudyCard       — featured daily devotional with artwork
//   5.  ForYouCarousel        — horizontal scroll of curated chapters
//   6.  BrowseByThemePills    — horizontal pill row (Gospels, Wisdom, …)
//   7.  ReadingStreakCard     — 14-day grid + streak count
//   8.  SacredArtCarousel     — horizontal scroll of artwork tiles
//   9.  QuickActionsGrid      — 2×2 (Bible · Library · Art · Blog)
//   10. ReflectionPromptCard  — daily journaling question
//   11. BlogStrip             — top 2 latest posts
//   12. ChristConnectionCard  — v1.2 AI chat preview
//
// All horizontal carousels use ScrollView(.horizontal) + LazyHStack
// for cheap recycling. Image fetches use AsyncImage with a parchment
// placeholder so a slow network still feels intentional.

import SwiftUI
import SwiftData

// MARK: - Top-level view

struct HomeView: View {
    @Environment(UserDataStore.self) private var userData
    @Environment(\.colorScheme) private var scheme

    @Query(
        filter: #Predicate<StoredReadingProgress> { $0.deletedAt == nil },
        sort: [SortDescriptor(\StoredReadingProgress.updatedAt, order: .reverse)]
    )
    private var recentProgress: [StoredReadingProgress]

    @State private var artworks: [ArtworkPreview] = []
    @State private var blogPosts: [BlogPostPreview] = []

    private var continueReading: StoredReadingProgress? { recentProgress.first }

    /// Number of distinct calendar days in `recentProgress`. Counted backwards
    /// from today; gap of >1 day breaks the streak. Used by ReadingStreakCard
    /// and the greeting chip.
    private var streakDays: Int {
        let cal = Calendar.current
        let today = cal.startOfDay(for: Date())
        var streak = 0
        var cursor = today
        let dates = Set(recentProgress.map { cal.startOfDay(for: $0.updatedAt) })
        while dates.contains(cursor) {
            streak += 1
            guard let prev = cal.date(byAdding: .day, value: -1, to: cursor) else { break }
            cursor = prev
        }
        return streak
    }

    /// Distinct dates in the last 14 days that have at least one read entry —
    /// used to fill the ReadingStreakCard heatmap.
    private var streakHistory: Set<Date> {
        let cal = Calendar.current
        return Set(recentProgress.map { cal.startOfDay(for: $0.updatedAt) })
    }

    var body: some View {
        ZStack {
            HomeGradient().ignoresSafeArea()

            ScrollView {
                LazyVStack(alignment: .leading, spacing: Theme.metric.spaceXL) {

                    GreetingHeader(streak: streakDays)

                    VerseOfDayCard()

                    if let progress = continueReading,
                       let route = HomeRoutes.route(for: progress) {
                        ContinueReadingCard(progress: progress, route: route)
                    }

                    TodaysStudyCard()

                    HomeSectionHeader(
                        title: "For you",
                        subtitle: "Chapters curated to your depth"
                    )
                    ForYouCarousel()

                    HomeSectionHeader(title: "Browse by theme")
                    BrowseByThemePills()

                    ReadingStreakCard(streak: streakDays, history: streakHistory)

                    HomeSectionHeader(
                        title: "Sacred art",
                        subtitle: "Over 7,000 curated artworks"
                    )
                    SacredArtCarousel(artworks: artworks)

                    QuickActionsGrid()

                    ReflectionPromptCard()

                    if !blogPosts.isEmpty {
                        HomeSectionHeader(title: "From the blog")
                        BlogStrip(posts: blogPosts)
                    }

                    ChristConnectionCard()
                }
                .padding(.horizontal, Theme.metric.spaceL)
                .padding(.top, Theme.metric.spaceL)
                .padding(.bottom, Theme.metric.spaceXXL)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
        .task {
            await loadCarousels()
        }
    }

    private func loadCarousels() async {
        async let art: [ArtworkPreview] = (try? await ArtService.shared.listLatest(limit: 12)) ?? []
        async let blog: [BlogPostPreview] = (try? await BlogService.shared.listLatest(limit: 2)) ?? []
        let (a, b) = await (art, blog)
        self.artworks = a
        self.blogPosts = b
    }
}

// MARK: - Background (light = white, dark = near-black)

private struct HomeGradient: View {
    @Environment(\.colorScheme) private var scheme
    var body: some View {
        Group {
            if scheme == .dark {
                Color(white: 0.06)
            } else {
                Color.white
            }
        }
    }
}

// MARK: - Section header (reused across cards)

private struct HomeSectionHeader: View {
    let title: String
    var subtitle: String? = nil
    var trailing: AnyView? = nil

    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.system(.title2, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                if let subtitle {
                    Text(subtitle)
                        .font(Theme.font.callout)
                        .foregroundStyle(.secondary)
                }
            }
            Spacer()
            trailing
        }
        .padding(.horizontal, 4)
        .padding(.top, Theme.metric.spaceS)
    }
}

// MARK: - 1. Greeting header

private struct GreetingHeader: View {
    let streak: Int

    private var greeting: String {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 4..<12:  return "Good morning"
        case 12..<17: return "Good afternoon"
        case 17..<22: return "Good evening"
        default:      return "Good night"
        }
    }

    var body: some View {
        HStack(alignment: .center) {
            VStack(alignment: .leading, spacing: 2) {
                Text(greeting + ".")
                    .font(.system(.title, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                Text("Let's pick up where you left off.")
                    .font(Theme.font.callout)
                    .foregroundStyle(.secondary)
            }
            Spacer()
            if streak > 0 {
                StreakChip(days: streak)
            }
        }
        .padding(.top, 4)
    }
}

private struct StreakChip: View {
    let days: Int
    var body: some View {
        HStack(spacing: 6) {
            Image(systemName: "flame.fill")
                .font(.footnote.weight(.semibold))
                .foregroundStyle(Theme.color.accent)
            Text("\(days)d")
                .font(.system(.subheadline, design: .rounded).weight(.semibold))
                .foregroundStyle(.primary)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 6)
        .background(Capsule().fill(Color(.secondarySystemBackground)))
        .overlay(Capsule().stroke(.primary.opacity(0.06), lineWidth: 1))
    }
}

// MARK: - 2. Verse of the Day

/// Deterministic verse-of-the-day. Day-of-year indexes a curated list of
/// 30 verses that cover the major themes (creation, redemption, comfort,
/// purpose, love). Each verse links into the chapter it lives in.
private struct VerseOfDayCard: View {
    private struct Verse {
        let text: String
        let reference: String
        let bookSlug: String
        let chapter: Int
    }

    private static let rotation: [Verse] = [
        .init(text: "In the beginning God created the heaven and the earth.",
              reference: "Genesis 1:1", bookSlug: "genesis", chapter: 1),
        .init(text: "The Lord is my shepherd; I shall not want.",
              reference: "Psalm 23:1", bookSlug: "psalms", chapter: 23),
        .init(text: "For God so loved the world, that he gave his only begotten Son.",
              reference: "John 3:16", bookSlug: "john", chapter: 3),
        .init(text: "Be still, and know that I am God.",
              reference: "Psalm 46:10", bookSlug: "psalms", chapter: 46),
        .init(text: "The Word was made flesh, and dwelt among us.",
              reference: "John 1:14", bookSlug: "john", chapter: 1),
        .init(text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
              reference: "Proverbs 3:5", bookSlug: "proverbs", chapter: 3),
        .init(text: "I can do all things through Christ which strengtheneth me.",
              reference: "Philippians 4:13", bookSlug: "philippians", chapter: 4),
        .init(text: "And we know that all things work together for good to them that love God.",
              reference: "Romans 8:28", bookSlug: "romans", chapter: 8),
        .init(text: "Blessed are the meek: for they shall inherit the earth.",
              reference: "Matthew 5:5", bookSlug: "matthew", chapter: 5),
        .init(text: "Thy word is a lamp unto my feet, and a light unto my path.",
              reference: "Psalm 119:105", bookSlug: "psalms", chapter: 119),
        .init(text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
              reference: "Matthew 11:28", bookSlug: "matthew", chapter: 11),
        .init(text: "Charity suffereth long, and is kind.",
              reference: "1 Corinthians 13:4", bookSlug: "1-corinthians", chapter: 13),
        .init(text: "Greater love hath no man than this, that a man lay down his life for his friends.",
              reference: "John 15:13", bookSlug: "john", chapter: 15),
        .init(text: "He giveth power to the faint; and to them that have no might he increaseth strength.",
              reference: "Isaiah 40:29", bookSlug: "isaiah", chapter: 40),
        .init(text: "Cast thy burden upon the Lord, and he shall sustain thee.",
              reference: "Psalm 55:22", bookSlug: "psalms", chapter: 55),
        .init(text: "The Lord is my light and my salvation; whom shall I fear?",
              reference: "Psalm 27:1", bookSlug: "psalms", chapter: 27),
        .init(text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil.",
              reference: "Psalm 23:4", bookSlug: "psalms", chapter: 23),
        .init(text: "Therefore if any man be in Christ, he is a new creature.",
              reference: "2 Corinthians 5:17", bookSlug: "2-corinthians", chapter: 5),
        .init(text: "Casting all your care upon him; for he careth for you.",
              reference: "1 Peter 5:7", bookSlug: "1-peter", chapter: 5),
        .init(text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
              reference: "Hebrews 11:1", bookSlug: "hebrews", chapter: 11),
        .init(text: "But seek ye first the kingdom of God, and his righteousness.",
              reference: "Matthew 6:33", bookSlug: "matthew", chapter: 6),
        .init(text: "He must increase, but I must decrease.",
              reference: "John 3:30", bookSlug: "john", chapter: 3),
        .init(text: "The Lord bless thee, and keep thee.",
              reference: "Numbers 6:24", bookSlug: "numbers", chapter: 6),
        .init(text: "Delight thyself also in the Lord; and he shall give thee the desires of thine heart.",
              reference: "Psalm 37:4", bookSlug: "psalms", chapter: 37),
        .init(text: "If God be for us, who can be against us?",
              reference: "Romans 8:31", bookSlug: "romans", chapter: 8),
        .init(text: "Let all things be done decently and in order.",
              reference: "1 Corinthians 14:40", bookSlug: "1-corinthians", chapter: 14),
        .init(text: "Be ye therefore perfect, even as your Father which is in heaven is perfect.",
              reference: "Matthew 5:48", bookSlug: "matthew", chapter: 5),
        .init(text: "I am the way, the truth, and the life.",
              reference: "John 14:6", bookSlug: "john", chapter: 14),
        .init(text: "Pray without ceasing.",
              reference: "1 Thessalonians 5:17", bookSlug: "1-thessalonians", chapter: 5),
        .init(text: "Be strong and of a good courage; be not afraid.",
              reference: "Joshua 1:9", bookSlug: "joshua", chapter: 1),
    ]

    private var verse: Verse {
        let day = Calendar.current.ordinality(of: .day, in: .year, for: Date()) ?? 1
        return Self.rotation[(day - 1) % Self.rotation.count]
    }

    var body: some View {
        let v = verse
        Group {
            if let book = BibleBookCatalog.book(for: v.bookSlug) {
                NavigationLink(value: ChapterRoute(book: book, chapter: v.chapter)) {
                    content(verse: v)
                }
                .buttonStyle(.plain)
            } else {
                content(verse: v)
            }
        }
    }

    private func content(verse v: Verse) -> some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            HStack {
                Text("VERSE OF THE DAY")
                    .font(Theme.font.eyebrow)
                    .tracking(3)
                    .foregroundStyle(Theme.color.accent)
                Spacer()
                Image(systemName: "quote.opening")
                    .font(.title3)
                    .foregroundStyle(Theme.color.accent.opacity(0.5))
            }
            Text(v.text)
                .font(.system(.title2, design: .serif).weight(.medium))
                .foregroundStyle(.primary)
                .lineSpacing(4)
                .multilineTextAlignment(.leading)
            HStack {
                Text(v.reference)
                    .font(.system(.subheadline, design: .serif).weight(.semibold))
                    .foregroundStyle(Theme.color.accent)
                Spacer()
                Text("Read in context →")
                    .font(Theme.font.callout.weight(.semibold))
                    .foregroundStyle(.primary.opacity(0.7))
            }
        }
        .padding(Theme.metric.spaceXL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - 4. Today's Study Guide

private struct TodaysStudyCard: View {
    private static let rotation: [(slug: String, chapter: Int, hook: String)] = [
        ("genesis", 1,    "Creation. The very first chapter."),
        ("psalms", 23,    "The Lord is my shepherd."),
        ("john", 1,       "The Word made flesh."),
        ("john", 3,       "Born again — Nicodemus and the wind."),
        ("matthew", 5,    "The Sermon on the Mount begins."),
        ("matthew", 6,    "The Lord's Prayer; lilies of the field."),
        ("romans", 8,     "No condemnation. The Spirit groans with us."),
        ("philippians", 4, "Prayer, contentment, the peace that passes."),
        ("1-corinthians", 13, "Love is patient, love is kind."),
        ("isaiah", 53,    "He was wounded for our transgressions."),
        ("revelation", 21, "A new heaven and a new earth."),
        ("ephesians", 2,  "By grace are ye saved through faith."),
        ("hebrews", 11,   "By faith — the great cloud of witnesses."),
        ("james", 1,      "Trials, wisdom, slow to speak."),
        ("1-john", 4,     "God is love. Love casts out fear."),
        ("luke", 15,      "The lost sheep, the lost coin, the prodigal son."),
        ("john", 14,      "Many mansions; the way, the truth, the life."),
        ("psalms", 51,    "Create in me a clean heart, O God."),
        ("acts", 2,       "Pentecost. The Spirit poured out."),
        ("galatians", 5,  "The fruit of the Spirit."),
    ]

    private var pick: (slug: String, chapter: Int, hook: String) {
        let day = Calendar.current.ordinality(of: .day, in: .year, for: Date()) ?? 1
        return Self.rotation[(day - 1) % Self.rotation.count]
    }

    private var book: BibleBook? { BibleBookCatalog.book(for: pick.slug) }
    private var route: ChapterRoute? {
        guard let book else { return nil }
        return ChapterRoute(book: book, chapter: pick.chapter)
    }

    var body: some View {
        Group {
            if let route {
                NavigationLink(value: route) { content }.buttonStyle(.plain)
            } else {
                content
            }
        }
    }

    @ViewBuilder
    private var content: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Visual hero — gradient panel with a serif chapter title
            ZStack(alignment: .bottomLeading) {
                LinearGradient(
                    colors: [
                        Theme.color.accent.opacity(0.85),
                        Theme.color.accent.opacity(0.55),
                        Color.black.opacity(0.25),
                    ],
                    startPoint: .topTrailing, endPoint: .bottomLeading
                )
                .frame(height: 180)
                .clipShape(
                    UnevenRoundedRectangle(topLeadingRadius: 28, topTrailingRadius: 28)
                )
                VStack(alignment: .leading, spacing: 6) {
                    Text("TODAY'S STUDY")
                        .font(Theme.font.eyebrow)
                        .tracking(3)
                        .foregroundStyle(.white.opacity(0.85))
                    Text("\(book?.name ?? pick.slug.capitalized) \(pick.chapter)")
                        .font(.system(.largeTitle, design: .serif).weight(.semibold))
                        .foregroundStyle(.white)
                }
                .padding(Theme.metric.spaceL)
            }

            // Hook + CTA
            VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
                Text(pick.hook)
                    .font(.system(.body, design: .serif))
                    .foregroundStyle(.primary)
                HStack {
                    Spacer()
                    Text("Begin study →")
                        .font(Theme.font.callout.weight(.semibold))
                        .foregroundStyle(Theme.color.accent)
                }
            }
            .padding(Theme.metric.spaceL)
        }
        .background(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - 5. For You — horizontal carousel of curated chapter cards

private struct ForYouCarousel: View {
    fileprivate struct Pick: Identifiable {
        let slug: String
        let chapter: Int
        let title: String
        let blurb: String
        var id: String { "\(slug)/\(chapter)" }
    }

    private static let picks: [Pick] = [
        .init(slug: "genesis", chapter: 1, title: "Genesis 1",
              blurb: "In the beginning"),
        .init(slug: "psalms", chapter: 23, title: "Psalm 23",
              blurb: "The Lord is my shepherd"),
        .init(slug: "john", chapter: 1, title: "John 1",
              blurb: "The Word made flesh"),
        .init(slug: "matthew", chapter: 5, title: "Matthew 5",
              blurb: "The Beatitudes"),
        .init(slug: "romans", chapter: 8, title: "Romans 8",
              blurb: "No condemnation"),
        .init(slug: "1-corinthians", chapter: 13, title: "1 Corinthians 13",
              blurb: "Love is patient"),
        .init(slug: "philippians", chapter: 4, title: "Philippians 4",
              blurb: "The peace that passes"),
        .init(slug: "revelation", chapter: 21, title: "Revelation 21",
              blurb: "A new heaven"),
    ]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: Theme.metric.spaceM) {
                ForEach(Self.picks) { pick in
                    if let book = BibleBookCatalog.book(for: pick.slug) {
                        NavigationLink(value: ChapterRoute(book: book, chapter: pick.chapter)) {
                            ForYouTile(pick: pick)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
            .padding(.horizontal, 4)
        }
        .scrollClipDisabled()
    }
}

private struct ForYouTile: View {
    let pick: ForYouCarouselPickShim

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            // Color block "cover"
            ZStack(alignment: .bottomLeading) {
                LinearGradient(
                    colors: tileColors(for: pick.slug),
                    startPoint: .topLeading, endPoint: .bottomTrailing
                )
                .frame(width: 200, height: 240)
                .clipShape(RoundedRectangle(cornerRadius: 24, style: .continuous))

                Text(pick.title)
                    .font(.system(.title3, design: .serif).weight(.semibold))
                    .foregroundStyle(.white)
                    .padding(12)
            }
            Text(pick.blurb)
                .font(Theme.font.callout)
                .foregroundStyle(.primary.opacity(0.75))
                .lineLimit(1)
                .padding(.horizontal, 4)
        }
        .frame(width: 200)
    }

    private func tileColors(for slug: String) -> [Color] {
        // Deterministic palette by hash so each chapter gets a stable color.
        let h = abs(slug.hashValue)
        let palettes: [[Color]] = [
            [Color(red: 0.69, green: 0.31, blue: 0.20),
             Color(red: 0.43, green: 0.18, blue: 0.12)],
            [Color(red: 0.83, green: 0.55, blue: 0.32),
             Color(red: 0.58, green: 0.36, blue: 0.18)],
            [Color(red: 0.31, green: 0.40, blue: 0.36),
             Color(red: 0.18, green: 0.25, blue: 0.22)],
            [Color(red: 0.63, green: 0.51, blue: 0.32),
             Color(red: 0.40, green: 0.30, blue: 0.18)],
            [Color(red: 0.55, green: 0.36, blue: 0.28),
             Color(red: 0.30, green: 0.20, blue: 0.16)],
        ]
        return palettes[h % palettes.count]
    }
}

/// Type-bridge so ForYouTile can stay agnostic to ForYouCarousel's
/// private nested struct (Swift won't let us reference a fileprivate
/// nested type from another fileprivate type's API). The carousel
/// constructs this from its Pick on the fly.
private typealias ForYouCarouselPickShim = ForYouCarousel.Pick

// MARK: - 6. Browse by theme — horizontal pill row

private struct BrowseByThemePills: View {
    private struct ThemePill: Identifiable {
        let title: String
        let bookSlugs: [String]
        let icon: String
        var id: String { title }
    }

    private static let themes: [ThemePill] = [
        .init(title: "Gospels", bookSlugs: ["matthew","mark","luke","john"], icon: "cross.fill"),
        .init(title: "Letters of Paul", bookSlugs: ["romans","1-corinthians","2-corinthians","galatians","ephesians","philippians","colossians","1-thessalonians","2-thessalonians","1-timothy","2-timothy","titus","philemon"], icon: "envelope.fill"),
        .init(title: "Wisdom", bookSlugs: ["job","proverbs","ecclesiastes","song-of-solomon"], icon: "leaf.fill"),
        .init(title: "Psalms", bookSlugs: ["psalms"], icon: "music.note"),
        .init(title: "Prophets", bookSlugs: ["isaiah","jeremiah","ezekiel","daniel","hosea","joel","amos","obadiah","jonah","micah","nahum","habakkuk","zephaniah","haggai","zechariah","malachi"], icon: "flame.fill"),
        .init(title: "Old Testament", bookSlugs: [], icon: "book.closed"),
        .init(title: "New Testament", bookSlugs: [], icon: "book.closed.fill"),
    ]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 10) {
                ForEach(Self.themes) { themePill in
                    NavigationLink(value: BrowseDestination.bible) {
                        HStack(spacing: 8) {
                            Image(systemName: themePill.icon)
                                .font(.footnote.weight(.semibold))
                                .foregroundStyle(Theme.color.accent)
                            Text(themePill.title)
                                .font(.system(.subheadline, design: .serif).weight(.semibold))
                                .foregroundStyle(.primary)
                        }
                        .padding(.horizontal, 16)
                        .padding(.vertical, 10)
                        .background(Capsule().fill(Color(.secondarySystemBackground)))
                        .overlay(Capsule().stroke(.primary.opacity(0.06), lineWidth: 1))
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(.horizontal, 4)
        }
        .scrollClipDisabled()
    }
}

// MARK: - 7. Reading Streak card — 14-day grid

private struct ReadingStreakCard: View {
    let streak: Int
    let history: Set<Date>

    private var days: [(date: Date, read: Bool)] {
        let cal = Calendar.current
        let today = cal.startOfDay(for: Date())
        return (0..<14).reversed().map { offset in
            let d = cal.date(byAdding: .day, value: -offset, to: today) ?? today
            return (d, history.contains(d))
        }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            HStack {
                VStack(alignment: .leading, spacing: 2) {
                    Text("READING STREAK")
                        .font(Theme.font.eyebrow)
                        .tracking(3)
                        .foregroundStyle(Theme.color.accent)
                    Text(streakHeadline)
                        .font(.system(.title2, design: .serif).weight(.semibold))
                        .foregroundStyle(.primary)
                }
                Spacer()
                if streak > 0 {
                    HStack(spacing: 4) {
                        Image(systemName: "flame.fill")
                            .foregroundStyle(Theme.color.accent)
                        Text("\(streak)")
                            .font(.system(.largeTitle, design: .serif).weight(.bold))
                            .foregroundStyle(.primary)
                    }
                }
            }
            HStack(spacing: 6) {
                ForEach(Array(days.enumerated()), id: \.offset) { _, d in
                    Circle()
                        .fill(d.read ? Theme.color.accent : Color.primary.opacity(0.08))
                        .frame(width: 18, height: 18)
                }
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }

    private var streakHeadline: String {
        switch streak {
        case 0: return "Start your streak today."
        case 1: return "1 day. Keep going."
        case 2..<7: return "\(streak) days in a row."
        case 7..<30: return "\(streak) days. Look at you."
        default: return "\(streak) days. Faithful."
        }
    }
}

// MARK: - 8. Sacred Art carousel

private struct SacredArtCarousel: View {
    let artworks: [ArtworkPreview]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: Theme.metric.spaceM) {
                if artworks.isEmpty {
                    ForEach(0..<5, id: \.self) { _ in
                        SacredArtTile.placeholder
                    }
                } else {
                    ForEach(artworks) { art in
                        NavigationLink(value: BrowseDestination.art) {
                            SacredArtTile(art: art)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
            .padding(.horizontal, 4)
        }
        .scrollClipDisabled()
    }
}

private struct SacredArtTile: View {
    let art: ArtworkPreview?
    static var placeholder: some View {
        SacredArtTile(art: nil)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            ZStack {
                RoundedRectangle(cornerRadius: 22, style: .continuous)
                    .fill(Color.primary.opacity(0.08))
                if let url = art?.thumbnail_800_url ?? art?.thumbnail_256_url,
                   let parsed = URL(string: url) {
                    AsyncImage(url: parsed) { phase in
                        switch phase {
                        case .success(let img):
                            img.resizable().scaledToFill()
                        default:
                            Color.primary.opacity(0.06)
                        }
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 22, style: .continuous))
                }
            }
            .frame(width: 180, height: 230)
            if let art {
                Text(art.title)
                    .font(.system(.footnote, design: .serif).weight(.medium))
                    .foregroundStyle(.primary)
                    .lineLimit(1)
                    .padding(.horizontal, 4)
                if let artist = art.artist_name_cached {
                    Text(artist)
                        .font(.caption2)
                        .foregroundStyle(.secondary)
                        .lineLimit(1)
                        .padding(.horizontal, 4)
                }
            }
        }
        .frame(width: 180)
    }
}

// MARK: - 9. Quick Actions — 2×2 grid

private struct QuickActionsGrid: View {
    fileprivate struct Action: Identifiable {
        let title: String
        let icon: String
        let destination: BrowseDestination
        var id: String { title }
    }

    private static let actions: [Action] = [
        .init(title: "Bible", icon: "book.closed", destination: .bible),
        .init(title: "Library", icon: "bookmark", destination: .library),
        .init(title: "Art", icon: "paintpalette", destination: .art),
        .init(title: "Blog", icon: "newspaper", destination: .blog),
    ]

    private let columns: [GridItem] = [
        GridItem(.flexible(), spacing: Theme.metric.spaceM),
        GridItem(.flexible(), spacing: Theme.metric.spaceM),
    ]

    var body: some View {
        LazyVGrid(columns: columns, spacing: Theme.metric.spaceM) {
            ForEach(Self.actions) { action in
                NavigationLink(value: action.destination) {
                    QuickActionTile(action: action)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

private struct QuickActionTile: View {
    let action: QuickActionsGrid.Action

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            Image(systemName: action.icon)
                .font(.system(size: 28, weight: .semibold))
                .foregroundStyle(Theme.color.accent)
            Text(action.title)
                .font(.system(.title3, design: .serif).weight(.semibold))
                .foregroundStyle(.primary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(Theme.metric.spaceL)
        .frame(height: 130)
        .background(
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - 10. Reflection Prompt

private struct ReflectionPromptCard: View {
    private static let prompts: [String] = [
        "What in your life feels \"without form and void\" right now?",
        "Where in this week did you see grace you didn't earn?",
        "What is one fear you'd give to God today?",
        "Who needs a word from you this week?",
        "What thing have you been carrying that you could lay down?",
        "Where have you been trying to do God's work in your own strength?",
        "What scripture has been quiet in your life lately?",
        "Where are you being asked to wait?",
        "Whose life would change if you forgave them today?",
        "What is the truest thing you know about God right now?",
    ]

    private var prompt: String {
        let day = Calendar.current.ordinality(of: .day, in: .year, for: Date()) ?? 1
        return Self.prompts[(day - 1) % Self.prompts.count]
    }

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("REFLECTION")
                .font(Theme.font.eyebrow)
                .tracking(3)
                .foregroundStyle(Theme.color.accent)
            Text(prompt)
                .font(.system(.title3, design: .serif).weight(.medium))
                .foregroundStyle(.primary)
                .lineSpacing(4)
            HStack {
                Spacer()
                Text("Reflect →")
                    .font(Theme.font.callout.weight(.semibold))
                    .foregroundStyle(Theme.color.accent)
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - 11. From the Blog

private struct BlogStrip: View {
    let posts: [BlogPostPreview]

    var body: some View {
        VStack(spacing: Theme.metric.spaceM) {
            ForEach(posts.prefix(2)) { post in
                NavigationLink(value: BrowseDestination.blog) {
                    BlogPostRow(post: post)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

private struct BlogPostRow: View {
    let post: BlogPostPreview
    var body: some View {
        HStack(spacing: Theme.metric.spaceM) {
            if let url = post.featured_image_url, let parsed = URL(string: url) {
                AsyncImage(url: parsed) { phase in
                    switch phase {
                    case .success(let img):
                        img.resizable().scaledToFill()
                    default:
                        Color.primary.opacity(0.08)
                    }
                }
                .frame(width: 96, height: 96)
                .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            } else {
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(Color.primary.opacity(0.08))
                    .frame(width: 96, height: 96)
            }
            VStack(alignment: .leading, spacing: 4) {
                Text(post.title)
                    .font(.system(.headline, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                    .lineLimit(2)
                if let excerpt = post.excerpt {
                    Text(excerpt)
                        .font(Theme.font.callout)
                        .foregroundStyle(.secondary)
                        .lineLimit(2)
                }
            }
            Spacer(minLength: 0)
        }
        .padding(Theme.metric.spaceM)
        .background(
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .fill(Color(.secondarySystemBackground))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - 3. Continue Reading

private struct ContinueReadingCard: View {
    let progress: StoredReadingProgress
    let route: ChapterRoute

    private var bookName: String {
        BibleBookCatalog.book(for: progress.bookSlug)?.name ?? progress.bookSlug.capitalized
    }

    var body: some View {
        NavigationLink(value: route) {
            HStack(spacing: Theme.metric.spaceM) {
                ZStack {
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .fill(Theme.color.accent.opacity(0.15))
                    Image(systemName: "book.fill")
                        .font(.title2)
                        .foregroundStyle(Theme.color.accent)
                }
                .frame(width: 64, height: 64)
                VStack(alignment: .leading, spacing: 4) {
                    Text("CONTINUE READING")
                        .font(Theme.font.eyebrow)
                        .tracking(2)
                        .foregroundStyle(.secondary)
                    Text("\(bookName) \(progress.chapter)")
                        .font(.system(.title3, design: .serif).weight(.semibold))
                        .foregroundStyle(.primary)
                    if let v = progress.lastVerseIndex, v > 0 {
                        Text("Verse \(v)")
                            .font(Theme.font.callout)
                            .foregroundStyle(.secondary)
                    }
                }
                Spacer(minLength: 0)
                Image(systemName: "arrow.forward.circle.fill")
                    .font(.title2)
                    .foregroundStyle(Theme.color.accent)
            }
            .padding(Theme.metric.spaceL)
            .background(
                RoundedRectangle(cornerRadius: 24, style: .continuous)
                    .fill(Color(.secondarySystemBackground))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 24, style: .continuous)
                    .stroke(Theme.color.accent.opacity(0.25), lineWidth: 1.5)
            )
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Route helpers + Browse destinations
//
// `BrowseDestination` is the value pushed for the top-level browse cards
// (Bible grid, Library, Art, Blog). RootView wires this up via
// .navigationDestination(for: BrowseDestination.self).

enum BrowseDestination: Hashable {
    case bible
    case library
    case art
    case blog
}

/// Tiny helper that converts a StoredReadingProgress row into a
/// ChapterRoute, returning nil when the row's bookSlug doesn't resolve
/// (e.g., a slug from a future content pack the iOS catalog doesn't
/// know yet — better to skip the card than crash).
enum HomeRoutes {
    static func route(for progress: StoredReadingProgress) -> ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: progress.bookSlug) else { return nil }
        return ChapterRoute(book: book, chapter: progress.chapter)
    }
}

// MARK: - 12. Christ Connection (v1.2 preview)

private struct ChristConnectionCard: View {
    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Text("CHRIST CONNECTION")
                    .font(Theme.font.eyebrow)
                    .tracking(3)
                    .foregroundStyle(.white.opacity(0.9))
                Spacer()
                Text("Coming soon")
                    .font(.caption2.weight(.semibold))
                    .foregroundStyle(.white.opacity(0.8))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Capsule().fill(.white.opacity(0.18)))
            }
            Text("Ask anything about scripture.")
                .font(.system(.title2, design: .serif).weight(.semibold))
                .foregroundStyle(.white)
            Text("A Bible-study coach that explains, cross-references, and connects every chapter back to Christ.")
                .font(Theme.font.callout)
                .foregroundStyle(.white.opacity(0.9))
                .lineSpacing(2)
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            LinearGradient(
                colors: [Theme.color.accent, Theme.color.accent.opacity(0.65)],
                startPoint: .topLeading, endPoint: .bottomTrailing
            )
        )
        .clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(.white.opacity(0.18), lineWidth: 1)
        )
    }
}
