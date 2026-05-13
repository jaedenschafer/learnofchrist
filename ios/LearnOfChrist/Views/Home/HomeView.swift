// HomeView.swift
// ────────────────────────────────────────────────────────────────────────────
// First-tab landing for the iOS app. Editorial home in the same idiom
// as learnofchrist.com — frosted-glass cards on a warm gradient,
// large serif display type, accent-numbered picks.
//
// Layout (top → bottom):
//
//   1. Curated picks card ("What should we study?") — a single
//      frosted card with a serif hero, four numbered pill rows
//      (John 1, Genesis 1, Psalm 23, Romans 8), and an "Open the
//      Bible" pill CTA at the bottom.
//
//   2. Today's chapter card — a frosted card with a date tile and a
//      deterministic chapter-of-the-day, computed from the current
//      calendar day so every user sees the same recommendation on
//      the same day. Open chapter CTA inline.
//
//   3. Continue reading card — surfaced ONLY when the user has at
//      least one StoredReadingProgress row.
//
//   4. Browse rows — three frosted pills: full Bible, art library
//      (stub), blog (stub). Each navigates via BrowseDestination.
//
// The entire screen sits on a warm gradient so the cards' .ultraThinMaterial
// reads as warm-frosted instead of system-cold. In dark mode the gradient
// flips automatically to deep warm tones; the material adapts.

import SwiftUI
import SwiftData

struct HomeView: View {
    @Environment(UserDataStore.self) private var userData

    @Query(
        filter: #Predicate<StoredReadingProgress> { $0.deletedAt == nil },
        sort: [SortDescriptor(\StoredReadingProgress.updatedAt, order: .reverse)]
    )
    private var recentProgress: [StoredReadingProgress]

    private var continueReading: StoredReadingProgress? {
        recentProgress.first
    }

    var body: some View {
        ZStack {
            HomeGradient()
                .ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                    CuratedPicksCard()
                    if let progress = continueReading,
                       let route = HomeRoutes.route(for: progress) {
                        ContinueReadingCard(progress: progress, route: route)
                    }
                    TodaysChapterCard()
                    BrowseRowsCard()
                }
                .padding(.horizontal, Theme.metric.spaceL)
                .padding(.top, Theme.metric.spaceXL)
                .padding(.bottom, Theme.metric.spaceXXL)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
    }
}

// MARK: - Warm gradient background
//
// Light mode: parchment → soft warm; Dark mode: deep ink → bronze.
// Material cards float on top with .ultraThinMaterial for the frosted
// look in both schemes.

private struct HomeGradient: View {
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        let top: Color
        let mid: Color
        let bottom: Color
        switch scheme {
        case .dark:
            top    = Color(red: 0.12, green: 0.10, blue: 0.08)
            mid    = Color(red: 0.30, green: 0.18, blue: 0.13)
            bottom = Color(red: 0.07, green: 0.05, blue: 0.04)
        default:
            top    = Color(red: 0.95, green: 0.91, blue: 0.85)
            mid    = Color(red: 0.86, green: 0.71, blue: 0.55)
            bottom = Color(red: 0.30, green: 0.20, blue: 0.15)
        }
        return LinearGradient(
            colors: [top, mid, bottom],
            startPoint: .top,
            endPoint: .bottom
        )
    }
}

// MARK: - Curated picks card ("What should we study?")

private struct CuratedPicksCard: View {

    /// The four canonical entry points. Matches the mockup exactly:
    /// John 1, Genesis 1, Psalm 23, Romans 8. These are picks chosen
    /// for new readers — each is a self-contained "core" chapter.
    private struct Pick: Identifiable {
        let bookSlug: String
        let chapter: Int
        let blurb: String
        var id: String { "\(bookSlug)/\(chapter)" }
        var display: String {
            (BibleBookCatalog.book(for: bookSlug)?.name ?? bookSlug.capitalized)
                + " \(chapter)"
        }
    }

    private static let picks: [Pick] = [
        .init(bookSlug: "john",    chapter: 1,  blurb: "The Word made flesh"),
        .init(bookSlug: "genesis", chapter: 1,  blurb: "Creation of the world"),
        .init(bookSlug: "psalms",  chapter: 23, blurb: "The Lord is my shepherd"),
        .init(bookSlug: "romans",  chapter: 8,  blurb: "No condemnation in Christ"),
    ]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            // Eyebrow + hero
            VStack(alignment: .center, spacing: Theme.metric.spaceS) {
                Text("BEGIN")
                    .font(Theme.font.eyebrow)
                    .tracking(3)
                    .foregroundStyle(Theme.color.accent)
                Text("What should\nwe study?")
                    .font(Theme.font.hero)
                    .multilineTextAlignment(.center)
                    .foregroundStyle(.primary)
                    .lineSpacing(-8)
            }
            .frame(maxWidth: .infinity)
            .padding(.top, Theme.metric.spaceL)

            // Numbered picks
            VStack(spacing: Theme.metric.spaceS) {
                ForEach(Array(Self.picks.enumerated()), id: \.element.id) { idx, pick in
                    if let book = BibleBookCatalog.book(for: pick.bookSlug) {
                        NavigationLink(value: ChapterRoute(book: book, chapter: pick.chapter)) {
                            PickRow(index: idx + 1, title: pick.display, blurb: pick.blurb)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Open the Bible CTA
            NavigationLink(value: BrowseDestination.bible) {
                Text("Open the Bible")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(.primary)
                    .padding(.horizontal, Theme.metric.spaceXL)
                    .padding(.vertical, Theme.metric.spaceM)
                    .background(
                        Capsule().fill(.ultraThinMaterial)
                    )
                    .overlay(
                        Capsule().stroke(.primary.opacity(0.08), lineWidth: 1)
                    )
            }
            .buttonStyle(.plain)
            .frame(maxWidth: .infinity)
            .padding(.top, Theme.metric.spaceS)
            .padding(.bottom, Theme.metric.spaceL)
        }
        .padding(.horizontal, Theme.metric.spaceL)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 28)
                .fill(.ultraThinMaterial)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 28)
                .stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

/// One row inside the curated picks card. Frosted pill with an
/// accent-colored "01" / "02" / etc. on the left, serif title in the
/// center, blurb right-aligned.
private struct PickRow: View {
    let index: Int
    let title: String
    let blurb: String

    var body: some View {
        HStack(spacing: Theme.metric.spaceM) {
            Text(String(format: "%02d", index))
                .font(.system(.subheadline, design: .serif).weight(.semibold))
                .foregroundStyle(Theme.color.accent)
                .frame(width: 28, alignment: .leading)
            Text(title)
                .font(.system(.title3, design: .serif))
                .foregroundStyle(.primary)
            Spacer(minLength: Theme.metric.spaceM)
            Text(blurb)
                .font(Theme.font.callout)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.trailing)
                .lineLimit(1)
                .minimumScaleFactor(0.85)
        }
        .padding(.horizontal, Theme.metric.spaceL)
        .padding(.vertical, Theme.metric.spaceM)
        .background(
            Capsule().fill(.ultraThinMaterial)
        )
        .overlay(
            Capsule().stroke(.primary.opacity(0.05), lineWidth: 1)
        )
    }
}

// MARK: - Today's chapter card

private struct TodaysChapterCard: View {

    /// Deterministic rotation. Index = dayOfYear mod count. So every
    /// user sees the same recommendation on the same day, and the list
    /// repeats once a year — long enough to feel fresh, simple enough
    /// to ship without a server roundtrip.
    private static let rotation: [(slug: String, chapter: Int, blurb: String)] = [
        ("genesis", 1,    "Creation. The very first chapter."),
        ("psalms", 23,    "The Lord is my shepherd."),
        ("john", 1,       "The Word made flesh."),
        ("john", 3,       "Born again — Nicodemus and the wind."),
        ("matthew", 5,    "The Sermon on the Mount begins."),
        ("matthew", 6,    "The Lord's Prayer; lilies of the field."),
        ("romans", 8,     "No condemnation. The Spirit groans with us."),
        ("romans", 12,    "Living sacrifices and new minds."),
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
        ("psalms", 1,     "Blessed is the man who walks not."),
        ("psalms", 51,    "Create in me a clean heart, O God."),
        ("psalms", 119,   "Thy word is a lamp unto my feet."),
        ("genesis", 22,   "Abraham, Isaac, and the binding."),
        ("exodus", 14,    "Crossing the Red Sea on dry ground."),
        ("acts", 2,       "Pentecost. The Spirit poured out."),
        ("galatians", 5,  "The fruit of the Spirit."),
        ("colossians", 3, "Set your affection on things above."),
        ("matthew", 27,   "The crucifixion. The veil torn."),
        ("matthew", 28,   "He is risen, as he said."),
        ("john", 20,      "Resurrection; doubting Thomas."),
        ("john", 21,      "Breakfast on the beach; feed my sheep."),
    ]

    private var pick: (slug: String, chapter: Int, blurb: String) {
        let day = Calendar.current.ordinality(of: .day, in: .year, for: Date()) ?? 1
        return Self.rotation[(day - 1) % Self.rotation.count]
    }

    private var book: BibleBook? { BibleBookCatalog.book(for: pick.slug) }
    private var route: ChapterRoute? {
        guard let book else { return nil }
        return ChapterRoute(book: book, chapter: pick.chapter)
    }

    private var dayText: String {
        let day = Calendar.current.component(.day, from: Date())
        return "\(day)"
    }
    private var monthText: String {
        let f = DateFormatter()
        f.dateFormat = "MMM"
        return f.string(from: Date()).uppercased()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            HStack(alignment: .firstTextBaseline) {
                Text("Today's chapter")
                    .font(.system(.title3, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                Spacer()
                Text("~10 min read")
                    .font(Theme.font.callout)
                    .foregroundStyle(.secondary)
            }

            HStack(alignment: .top, spacing: Theme.metric.spaceM) {
                // Date tile
                VStack(spacing: 0) {
                    Text(dayText)
                        .font(.system(.title, design: .serif).weight(.semibold))
                        .foregroundStyle(.primary)
                    Text(monthText)
                        .font(Theme.font.eyebrow)
                        .tracking(1.5)
                        .foregroundStyle(.secondary)
                        .padding(.top, 2)
                }
                .padding(Theme.metric.spaceM)
                .frame(width: 72, height: 72)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(.primary.opacity(0.06), lineWidth: 1)
                )

                VStack(alignment: .leading, spacing: 4) {
                    if let book {
                        Text("\(book.name) \(pick.chapter)")
                            .font(.system(.title3, design: .serif).weight(.semibold))
                            .foregroundStyle(.primary)
                    }
                    Text(pick.blurb)
                        .font(Theme.font.callout)
                        .foregroundStyle(.secondary)
                        .fixedSize(horizontal: false, vertical: true)
                }
                Spacer(minLength: 0)
            }

            if let route {
                NavigationLink(value: route) {
                    Text("Open chapter")
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(.primary)
                        .padding(.vertical, Theme.metric.spaceM)
                        .frame(maxWidth: .infinity)
                        .background(
                            Capsule().fill(.ultraThinMaterial)
                        )
                        .overlay(
                            Capsule().stroke(.primary.opacity(0.08), lineWidth: 1)
                        )
                }
                .buttonStyle(.plain)
            }
        }
        .padding(Theme.metric.spaceL)
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

// MARK: - Continue Reading

private struct ContinueReadingCard: View {
    let progress: StoredReadingProgress
    let route: ChapterRoute

    private var bookName: String {
        BibleBookCatalog.book(for: progress.bookSlug)?.name
            ?? progress.bookSlug.capitalized
    }

    var body: some View {
        NavigationLink(value: route) {
            VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
                Text("CONTINUE READING")
                    .font(Theme.font.eyebrow)
                    .tracking(2)
                    .foregroundStyle(.secondary)
                HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceS) {
                    Text(bookName)
                        .font(.system(.title2, design: .serif).weight(.semibold))
                        .foregroundStyle(.primary)
                    Text("\(progress.chapter)")
                        .font(.system(.title2, design: .serif).weight(.semibold))
                        .foregroundStyle(Theme.color.accent)
                }
                if let verse = progress.lastVerseIndex, verse > 0 {
                    Text("Resume at verse \(verse)")
                        .font(Theme.font.callout)
                        .foregroundStyle(.secondary)
                } else {
                    Text("Pick up where you left off")
                        .font(Theme.font.callout)
                        .foregroundStyle(.secondary)
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
        .buttonStyle(.plain)
    }
}

// MARK: - Browse rows

private struct BrowseRowsCard: View {
    var body: some View {
        VStack(spacing: Theme.metric.spaceM) {
            NavigationLink(value: BrowseDestination.bible) {
                BrowseRow(
                    title: "Browse the full Bible",
                    meta: "66 books"
                )
            }
            .buttonStyle(.plain)

            NavigationLink(value: BrowseDestination.art) {
                BrowseRow(
                    title: "Explore the art library",
                    meta: "1,000+ works"
                )
            }
            .buttonStyle(.plain)

            NavigationLink(value: BrowseDestination.blog) {
                BrowseRow(
                    title: "Read from the blog",
                    meta: ""
                )
            }
            .buttonStyle(.plain)
        }
    }
}

private struct BrowseRow: View {
    let title: String
    let meta: String

    var body: some View {
        HStack(spacing: Theme.metric.spaceM) {
            Text(title)
                .font(.system(.headline, design: .serif).weight(.semibold))
                .foregroundStyle(.primary)
            Spacer(minLength: Theme.metric.spaceM)
            if meta.isEmpty {
                Image(systemName: "arrow.right")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(.primary.opacity(0.7))
                    .frame(width: 32, height: 32)
                    .background(
                        Circle().fill(.ultraThinMaterial)
                    )
            } else {
                Text(meta)
                    .font(Theme.font.callout)
                    .foregroundStyle(.secondary)
            }
        }
        .padding(.horizontal, Theme.metric.spaceL)
        .padding(.vertical, Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            Capsule().fill(.ultraThinMaterial)
        )
        .overlay(
            Capsule().stroke(.primary.opacity(0.06), lineWidth: 1)
        )
    }
}

// MARK: - Navigation destinations

/// Routing values for the home-screen rows.
enum BrowseDestination: Hashable {
    case bible
    case library
    case art
    case blog
}

/// Small helper to map a progress row to a navigable route. Hoisted out
/// of the card so the parent view can decide whether to even render
/// the card based on availability.
enum HomeRoutes {
    static func route(for progress: StoredReadingProgress) -> ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: progress.bookSlug) else { return nil }
        return ChapterRoute(book: book, chapter: progress.chapter)
    }
}
