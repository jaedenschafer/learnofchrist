// HomeView.swift
// ────────────────────────────────────────────────────────────────────────────
// F² "Year Plan" home — exact port of `learn-of-christ-app/project/
// variation-f2.jsx`. Cool navy + sky-blue palette; no lavender, no peach,
// no rose. Every dimension, color, gradient, and shadow here maps back
// to a node in that JSX file.
//
// Section order (top → bottom, matching the JSX):
//   1. Top row             (avatar / streak / more)
//   2. Year hero           (dark navy "Day 134 of 365")
//   3. Today's reading     (light glass, VOTD, Begin study)
//   4. Library header + Continue reading hero (dark navy w/ white bible)
//   5. Keep reading        (6 horizontal glass tiles)
//   6. From the original language  (cream + gold Hebrew card)
//   7. Today's plan        (light glass row)
//   8. Topics for today    (4 navy-blue gradient tiles)
//   9. Lock-screen widgets pitch
//
// The tab bar lives in RootView. The cloud-blob glows sit behind the
// scroll content but above the gradient.

import SwiftUI
import SwiftData

// MARK: - F² Design tokens (light theme — variation-f2.jsx `light`)

/// Non-private so SearchView (in RootView.swift) and any future cool-palette
/// screens can read the same ink / accent / background tokens without
/// duplicating the values.
enum F2 {
    // Sky-blue → near-white vertical gradient background.
    static let bgStops: [Color] = [
        Color(red: 0.784, green: 0.859, blue: 0.925),   // #C8DBEC 0%
        Color(red: 0.824, green: 0.886, blue: 0.937),   // #D2E2EF 12%
        Color(red: 0.871, green: 0.914, blue: 0.945),   // #DEE9F1 28%
        Color(red: 0.906, green: 0.937, blue: 0.957),   // #E7EFF4 48%
        Color(red: 0.933, green: 0.953, blue: 0.961),   // #EEF3F5 68%
        Color(red: 0.949, green: 0.961, blue: 0.961),   // #F2F5F5 82%
        Color(red: 0.961, green: 0.965, blue: 0.961),   // #F5F6F5 92%
        Color(red: 0.969, green: 0.969, blue: 0.965),   // #F7F7F6 100%
    ]
    static let bgLocs: [CGFloat] = [0, 0.12, 0.28, 0.48, 0.68, 0.82, 0.92, 1.0]

    static let ink   = Color(red: 0.059, green: 0.157, blue: 0.271)   // #0F2845
    static let ink2  = Color(red: 0.227, green: 0.306, blue: 0.400)   // #3A4E66
    static let ink3  = Color(red: 0.420, green: 0.482, blue: 0.584)   // #6B7B95
    static let ink4  = Color(red: 0.596, green: 0.643, blue: 0.714)   // #98A4B6
    static let accent = Color(red: 0.165, green: 0.353, blue: 0.573)  // #2A5A92

    static let cardBg = Color.white.opacity(0.55)
    static let cardBgStrong = Color.white.opacity(0.70)
    static let cardBorder = Color.white.opacity(0.70)

    // Hero dark navy diagonal (135°)
    static let heroStart = Color(red: 0.059, green: 0.157, blue: 0.271)   // #0F2845 0%
    static let heroMid   = Color(red: 0.122, green: 0.275, blue: 0.439)   // #1F4670 60%
    static let heroEnd   = Color(red: 0.290, green: 0.482, blue: 0.690)   // #4A7BB0 100%

    static let onPaceGreen = Color(red: 0.608, green: 0.910, blue: 0.710) // #9BE8B5

    // "From the original language" gold/cream
    static let goldEyebrow = Color(red: 0.659, green: 0.459, blue: 0.157) // #A87528
    static let goldText    = Color(red: 0.239, green: 0.184, blue: 0.094) // #3D2F18
    static let goldBgStart = Color(red: 0.961, green: 0.910, blue: 0.773) // #F5E8C5
    static let goldBgEnd   = Color(red: 0.922, green: 0.851, blue: 0.659) // #EBD9A8
    static let goldBorder  = Color(red: 0.706, green: 0.549, blue: 0.235).opacity(0.18)

    // Topic gradients (light theme — 135°, top-left → bottom-right)
    static let topicAnxiety  : [Color] = [
        Color(red: 0.749, green: 0.816, blue: 0.941),   // #BFD0F0
        Color(red: 0.608, green: 0.714, blue: 0.886),   // #9BB6E2
    ]
    static let topicGratitude: [Color] = [
        Color(red: 0.663, green: 0.773, blue: 0.871),   // #A9C5DE
        Color(red: 0.353, green: 0.541, blue: 0.769),   // #5A8AC4
    ]
    static let topicPatience : [Color] = [
        Color(red: 0.541, green: 0.714, blue: 0.855),   // #8AB6DA
        Color(red: 0.247, green: 0.435, blue: 0.659),   // #3F6FA8
    ]
    static let topicFaith    : [Color] = [
        Color(red: 0.412, green: 0.627, blue: 0.812),   // #69A0CF
        Color(red: 0.165, green: 0.353, blue: 0.573),   // #2A5A92
    ]

    /// App background. Returned as a `LinearGradient` (a single-color
    /// "gradient" from white to white) so every existing callsite that
    /// uses `F2.background.ignoresSafeArea()` continues to work without
    /// changing — but the rendered result is flat pure white per the
    /// design direction.
    static var background: LinearGradient {
        LinearGradient(
            colors: [.white, .white],
            startPoint: .top,
            endPoint: .bottom
        )
    }

    /// 135° gradient (top-left → bottom-right) helper.
    static func diag(_ colors: [Color]) -> LinearGradient {
        LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
    }
}

// MARK: - Serif font helper — falls back to system serif when the
// custom Instrument Serif face isn't bundled.
//
// Note: a few legacy callsites elsewhere in the app may try
// `Font.custom("InstrumentSerif-Regular", size:)`; that custom face
// isn't bundled, so SwiftUI silently falls back to the system serif —
// the same thing `serifFont(_:weight:)` produces explicitly here.

private func serifFont(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
    .system(size: size, weight: weight, design: .serif)
}

// MARK: - Day-of-year + Bible-in-a-Year helpers
//
// These are the audit-defensible source of truth for "what day is it /
// what is today's reading?". The YearHero card and the Today's Reading
// card both read from here so they stay in sync.
//
// Assumption (documented): we don't yet have a curated 365-day reading
// plan. To avoid showing fake plan content, today's chapter pair is
// derived deterministically from `dayOfYear`:
//   - OT side: cycles through Psalms 1–150
//   - NT side: cycles through Matthew 1–28
// Both are devotional, complete books that don't strand the reader at
// awkward chapter splits. When a real plan ships, swap
// `BibleReadingPlan.pair(forDay:)` for the curated table; nothing else
// in HomeView needs to change.

private enum HomeDay {
    static func dayOfYear(_ date: Date = Date()) -> Int {
        Calendar.current.ordinality(of: .day, in: .year, for: date) ?? 1
    }

    static func daysInYear(_ date: Date = Date()) -> Int {
        let cal = Calendar.current
        let range = cal.range(of: .day, in: .year, for: date) ?? 1..<366
        return range.count
    }

    static var currentYear: Int {
        Calendar.current.component(.year, from: Date())
    }
}

private enum BibleReadingPlan {
    /// Two-chapter pair for a given day-of-year. Deterministic but
    /// rotation-based — see assumption note at top of file.
    static func pair(forDay day: Int) -> (otSlug: String, otChapter: Int, ntSlug: String, ntChapter: Int) {
        // Psalms (150 chapters, OT) and Matthew (28 chapters, NT) — one
        // book from each testament gives an honest "OT + NT" pairing
        // without inventing curated plan content.
        let psalmsIdx = ((day - 1) % 150) + 1
        let matthewIdx = ((day - 1) % 28) + 1
        return (otSlug: "psalms", otChapter: psalmsIdx,
                ntSlug: "matthew", ntChapter: matthewIdx)
    }
}

// MARK: - Verse of the Day rotation
//
// 30-entry rotation; `day-of-year mod 30` picks the entry. Pure scripture
// references from public-domain KJV — no fabricated content. Add to or
// curate this list freely; nothing else depends on its length except the
// modulus in `VerseOfDay.today`.

/// Non-private — also consumed by SearchView (in RootView.swift) so users
/// can search the verse rotation by reference or body text.
struct VerseEntry {
    let reference: String     // e.g. "1 Peter 5:7"
    let text: String          // KJV body, quoted as a single string
}

enum VerseOfDay {
    static let rotation: [VerseEntry] = [
        VerseEntry(reference: "1 Peter 5:7",   text: "Casting all your care upon him; for he careth for you."),
        VerseEntry(reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me."),
        VerseEntry(reference: "Psalm 23:1",    text: "The Lord is my shepherd; I shall not want."),
        VerseEntry(reference: "John 3:16",     text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."),
        VerseEntry(reference: "Romans 8:28",   text: "And we know that all things work together for good to them that love God."),
        VerseEntry(reference: "Proverbs 3:5",  text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding."),
        VerseEntry(reference: "Isaiah 41:10",  text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God."),
        VerseEntry(reference: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil."),
        VerseEntry(reference: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest."),
        VerseEntry(reference: "Joshua 1:9",    text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee."),
        VerseEntry(reference: "Psalm 46:1",    text: "God is our refuge and strength, a very present help in trouble."),
        VerseEntry(reference: "Romans 12:2",   text: "And be not conformed to this world: but be ye transformed by the renewing of your mind."),
        VerseEntry(reference: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new."),
        VerseEntry(reference: "Galatians 5:22", text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith."),
        VerseEntry(reference: "Ephesians 2:8", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."),
        VerseEntry(reference: "Hebrews 11:1",  text: "Now faith is the substance of things hoped for, the evidence of things not seen."),
        VerseEntry(reference: "James 1:5",     text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."),
        VerseEntry(reference: "1 John 4:19",   text: "We love him, because he first loved us."),
        VerseEntry(reference: "Psalm 27:1",    text: "The Lord is my light and my salvation; whom shall I fear?"),
        VerseEntry(reference: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path."),
        VerseEntry(reference: "Matthew 6:33",  text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."),
        VerseEntry(reference: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost."),
        VerseEntry(reference: "John 14:6",     text: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."),
        VerseEntry(reference: "John 14:27",    text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you."),
        VerseEntry(reference: "Romans 5:8",    text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."),
        VerseEntry(reference: "Psalm 51:10",   text: "Create in me a clean heart, O God; and renew a right spirit within me."),
        VerseEntry(reference: "Psalm 139:14",  text: "I will praise thee; for I am fearfully and wonderfully made."),
        VerseEntry(reference: "Isaiah 40:31",  text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles."),
        VerseEntry(reference: "Lamentations 3:22", text: "It is of the Lord's mercies that we are not consumed, because his compassions fail not."),
        VerseEntry(reference: "Revelation 21:4", text: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying."),
    ]

    static var today: VerseEntry {
        rotation[(HomeDay.dayOfYear() - 1) % rotation.count]
    }
}

// MARK: - Glass surface modifiers

/// Solid-white surface for the new pure-white background. The original
/// glass recipe leaned on `.ultraThinMaterial`, which had nothing to
/// blur on a flat-white canvas — the white veil over it was invisible,
/// so cards read as floating ghosts. The new recipe is:
///   • solid white fill
///   • 0.5pt hairline stroke (navy @ 8% opacity)
///   • soft drop shadow (navy @ 6% opacity, 14pt radius, 4pt y)
/// `strong` is retained for API compatibility but is now a no-op (both
/// states render the same fill — there's no longer a translucent
/// vs. opaque distinction to make).
private struct F2GlassCard: ViewModifier {
    var radius: CGFloat
    var strong: Bool = false

    func body(content: Content) -> some View {
        content
            .background(
                RoundedRectangle(cornerRadius: radius, style: .continuous)
                    .fill(Color.white)
            )
            .overlay(
                RoundedRectangle(cornerRadius: radius, style: .continuous)
                    .stroke(Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.08), lineWidth: 0.5)
            )
            .shadow(
                color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.06),
                radius: 14, x: 0, y: 4
            )
    }
}

private extension View {
    func f2Glass(_ radius: CGFloat, strong: Bool = false) -> some View {
        modifier(F2GlassCard(radius: radius, strong: strong))
    }
}

// MARK: - Top-level view

struct HomeView: View {
    @Environment(UserDataStore.self) private var userData

    @Query(
        filter: #Predicate<StoredReadingProgress> { $0.deletedAt == nil },
        sort: [SortDescriptor(\StoredReadingProgress.updatedAt, order: .reverse)]
    )
    private var recentProgress: [StoredReadingProgress]

    @State private var artworks: [ArtworkPreview] = []
    @State private var blogPosts: [BlogPostPreview] = []
    @State private var showSettings = false
    @State private var showStreak = false
    @State private var showEditHome = false
    @State private var showEditGoal = false
    @State private var comingSoonMessage: String? = nil
    @State private var showNotificationsTODO = false
    @State private var showWidgetsHelp = false

    /// User's reading goal — duration, start date, computed pace. Backed by
    /// `@AppStorage` so it persists across launches. Edited via EditGoalView.
    /// In the future this will be set during onboarding.
    @AppStorage(BibleGoalPrefs.storageKey)
    private var goalRaw: String = BibleGoalPrefs.encode(BibleReadingGoal.defaultGoal())

    private var goal: BibleReadingGoal {
        BibleGoalPrefs.decode(goalRaw)
    }

    /// User's saved section order + visibility from EditHomepageView.
    @AppStorage(HomeSectionPrefs.storageKey)
    private var sectionOrderRaw: String = HomeSectionPrefs.encode(HomeSectionPrefs.defaults)

    private var sections: [HomeSection] {
        HomeSectionPrefs.decode(sectionOrderRaw)
    }

    private func isVisible(_ id: String) -> Bool {
        sections.first { $0.id == id }?.visible ?? true
    }

    private var continueReading: StoredReadingProgress? { recentProgress.first }

    /// Real day-of-year, kept here so children can be passed pre-computed
    /// values (and so a unit test can swap in a fixed date if we ever
    /// wire one).
    private var dayOfYear: Int { HomeDay.dayOfYear() }
    private var daysInYear: Int { HomeDay.daysInYear() }

    /// Chapters logged in the last 14 days. Used to estimate the user's
    /// real reading pace (`ch / day` on the year hero).
    private var chaptersPerDay: Double {
        let cal = Calendar.current
        let cutoff = cal.date(byAdding: .day, value: -14, to: Date()) ?? Date()
        let recentCount = recentProgress.filter { $0.updatedAt >= cutoff }.count
        guard recentCount > 0 else { return 0.0 }
        return (Double(recentCount) / 14.0 * 10).rounded() / 10
    }

    /// Distinct calendar days the user has read on — used by the streak
    /// sheet's weekly dot row and 12-month heatmap.
    private var streakHistory: Set<Date> {
        let cal = Calendar.current
        return Set(recentProgress.map { cal.startOfDay(for: $0.updatedAt) })
    }

    /// Number of distinct calendar days seen in `recentProgress` (counting
    /// back from today). One-day gap breaks the streak.
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

    var body: some View {
        ZStack {
            // 1. Gradient background.
            F2.background.ignoresSafeArea()

            // 2. Cloud-blob glows behind the scroll.
            // Cloud glows were the soft pastel blobs that gave the
            // sky-blue gradient depth. On the pure-white background they
            // muddy the surface, so they're disabled. Re-enable if the
            // designer brings back the tinted background.
            // CloudGlows().allowsHitTesting(false)

            // 3. The scrolling content.
            //
            // Section order + visibility come from
            // `@AppStorage(HomeSectionPrefs.storageKey)` so dragging /
            // toggling in EditHomepageView is reflected here. Mapping:
            //   verse    → Today's reading + Year hero (verse/year live in a pair)
            //   explore  → Library header + Continue reading + Keep reading row
            //   plan     → Today's plan header + card
            //   original → From the original language
            //   topics   → Topics for today
            //   gallery / notes are not rendered on this design yet, but
            //   we still respect their presence in the saved order.
            ScrollView {
                VStack(alignment: .leading, spacing: 0) {
                    TopRow(
                        onAvatar: { showSettings = true },
                        onStreak: { showStreak = true },
                        streak: max(streakDays, 1),
                        onEditHome: { showEditHome = true },
                        onNotifications: { showNotificationsTODO = true }
                    )

                    if isVisible("verse") {
                        YearHero(
                            streak: max(streakDays, 1),
                            goal: goal,
                            dayOfPlan: goal.currentDay(),
                            totalDays: goal.targetDays,
                            chaptersPerDay: goal.chaptersPerDay,
                            onStreakTap: { showStreak = true },
                            onEditGoal: { showEditGoal = true }
                        )
                        .padding(.horizontal, 22)
                        .padding(.top, 24)

                        TodaysReadingSection(
                            dayOfYear: dayOfYear
                        )
                            .padding(.horizontal, 22)
                            .padding(.top, 20)
                    }

                    if isVisible("explore") {
                        LibrarySectionHeader()
                            .padding(.horizontal, 22)
                            .padding(.top, 28)

                        ContinueReadingHero(progress: continueReading)
                            .padding(.horizontal, 22)
                            .padding(.top, 14)

                        KeepReadingHeader()
                            .padding(.horizontal, 22)
                            .padding(.top, 20)

                        KeepReadingRow(
                            comingSoon: $comingSoonMessage
                        )
                            .padding(.top, 8)
                    }

                    if isVisible("original") {
                        OriginalLanguageSection()
                            .padding(.horizontal, 22)
                            .padding(.top, 28)
                    }

                    if isVisible("plan") {
                        TodaysPlanHeader()
                            .padding(.horizontal, 22)
                            .padding(.top, 28)

                        TodaysPlanCard()
                            .padding(.horizontal, 22)
                            .padding(.top, 12)
                    }

                    // Topics-for-today is intentionally not rendered.
                    // Until a real Topics destination exists every tile
                    // is a coming-soon stub; removing the whole section
                    // is more honest than four placeholder tiles. The
                    // `topics` section toggle in EditHomepageView still
                    // round-trips so when Topics ships the section will
                    // re-appear without users having to re-enable it.

                    LockScreenPromoCard(onTap: { showWidgetsHelp = true })
                        .padding(.horizontal, 22)
                        .padding(.top, 26)

                    Color.clear.frame(height: 18)
                }
                .padding(.top, 14)
                .padding(.bottom, 140)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
        .navigationTitle("")
        .toolbar(.hidden, for: .navigationBar)
        .sheet(isPresented: $showSettings) {
            NavigationStack { SettingsView() }
        }
        .sheet(isPresented: $showStreak) {
            StreakSheet(
                streak: max(streakDays, 1),
                goal: goal,
                chaptersRead: recentProgress.count,
                history: streakHistory,
                onEditGoal: {
                    showStreak = false
                    // Slight delay so the streak sheet finishes dismissing
                    // before the edit-goal sheet rises — SwiftUI doesn't
                    // play well with two sheets transitioning at once.
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
                        showEditGoal = true
                    }
                }
            )
        }
        .sheet(isPresented: $showEditHome) {
            NavigationStack { EditHomepageView() }
        }
        .sheet(isPresented: $showEditGoal) {
            NavigationStack { EditGoalView() }
        }
        .sheet(isPresented: Binding(
            get: { comingSoonMessage != nil },
            set: { if !$0 { comingSoonMessage = nil } }
        )) {
            ComingSoonSheet(message: comingSoonMessage ?? "")
                .presentationDetents([.fraction(0.32), .medium])
        }
        .sheet(isPresented: $showNotificationsTODO) {
            ComingSoonSheet(message: "Notifications — coming soon. We'll let you opt in to a daily reading nudge once the toggle ships.")
                .presentationDetents([.fraction(0.32), .medium])
        }
        .sheet(isPresented: $showWidgetsHelp) {
            WidgetsHelpSheet()
                .presentationDetents([.fraction(0.45), .medium])
        }
        // Note: the in-app SafariSheet wiring used to live here for the
        // Study Plans / Topics / Audio Bible / Questions tiles, but those
        // now push native screens (see `KeepReadingRow.tiles`). The
        // `SafariSheet` + `IdentifiedURL` types are still defined at the
        // bottom of this file in case a future tile needs a web fallback.
        .task { await loadCarousels() }
    }

    private func loadCarousels() async {
        async let art: [ArtworkPreview] = (try? await ArtService.shared.listLatest(limit: 12)) ?? []
        async let blog: [BlogPostPreview] = (try? await BlogService.shared.listLatest(limit: 2)) ?? []
        let (a, b) = await (art, blog)
        self.artworks = a
        self.blogPosts = b
    }
}

// MARK: - Cloud-blob glows (decorative, behind the scroll)

private struct CloudGlows: View {
    var body: some View {
        GeometryReader { proxy in
            let w = proxy.size.width
            ZStack(alignment: .topLeading) {
                glow(size: CGSize(width: 240, height: 200))
                    .offset(x: w - 180, y: 80)
                glow(size: CGSize(width: 280, height: 220))
                    .offset(x: -80, y: 900)
                    .opacity(0.9)   // cloudGlow2 = 0.5 vs cloudGlow = 0.55
                glow(size: CGSize(width: 280, height: 220))
                    .offset(x: w - 220, y: 1700)
            }
        }
        .ignoresSafeArea()
    }

    private func glow(size: CGSize) -> some View {
        Circle()
            .fill(
                RadialGradient(
                    colors: [Color.white.opacity(0.55), Color.white.opacity(0)],
                    center: .center,
                    startRadius: 0,
                    endRadius: min(size.width, size.height) * 0.55
                )
            )
            .frame(width: size.width, height: size.height)
            .blur(radius: 24)
    }
}

// MARK: - 1. Top row

private struct TopRow: View {
    /// Auth — read so the avatar can render the signed-in user's
    /// initial. The current Supabase session model doesn't cache the
    /// user's display name (`SupabaseSession.User` keeps only `id`), so
    /// the avatar falls back to a `person.fill` glyph when we have no
    /// name to derive an initial from.
    @Environment(AuthService.self) private var auth

    let onAvatar: () -> Void
    let onStreak: () -> Void
    let streak: Int
    let onEditHome: () -> Void
    let onNotifications: () -> Void

    var body: some View {
        HStack(spacing: 12) {
            // Avatar — opens Settings sheet (verified wired).
            // Initial is derived from the auth session when available;
            // otherwise we fall back to a person SF Symbol so we never
            // hardcode someone else's letter onto a stranger's device.
            Button(action: onAvatar) {
                Group {
                    if let initial = avatarInitial {
                        Text(initial)
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundStyle(F2.ink)
                    } else {
                        Image(systemName: "person.fill")
                            .font(.system(size: 16, weight: .regular))
                            .foregroundStyle(F2.ink2)
                    }
                }
                .frame(width: 38, height: 38)
                .background(Circle().fill(Color.white))
                .overlay(Circle().stroke(F2GlassRecipe.stroke, lineWidth: 0.5))
                .shadow(color: F2GlassRecipe.shadow, radius: 14, y: 4)
            }
            .buttonStyle(.plain)

            Spacer()

            HStack(spacing: 8) {
                // Streak pill — real streak value, opens StreakSheet.
                Button(action: onStreak) {
                    HStack(spacing: 6) {
                        Image("flame")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 16, height: 16)
                        Text("\(streak)")
                            .font(.system(size: 13, weight: .semibold))
                            .foregroundStyle(F2.ink)
                    }
                    .padding(.leading, 11)
                    .padding(.trailing, 14)
                    .frame(height: 38)
                    .background(Capsule().fill(Color.white))
                    .overlay(Capsule().stroke(F2GlassRecipe.stroke, lineWidth: 0.5))
                    .shadow(color: F2GlassRecipe.shadow, radius: 14, y: 4)
                }
                .buttonStyle(.plain)

                // More button (three dots) — opens a native iOS popover
                // menu with the same four entries as the F² Year Plan
                // design: Edit homepage / Notifications / Share app / Help.
                Menu {
                    Button {
                        onEditHome()
                    } label: {
                        Label("Edit homepage", systemImage: "square.and.pencil")
                    }
                    Button {
                        onNotifications()
                    } label: {
                        Label("Notifications", systemImage: "bell")
                    }
                    ShareLink(
                        item: URL(string: "https://learnofchrist.com")!,
                        subject: Text("Learn of Christ"),
                        message: Text("A free Bible study app.")
                    ) {
                        Label("Share app", systemImage: "square.and.arrow.up")
                    }
                    // Help is a direct mailto — there's no in-app help
                    // content to navigate to, so anything other than
                    // opening the user's mail client is a coming-soon lie.
                    Link(destination: URL(string: "mailto:hello@learnofchrist.com?subject=Help%20with%20Learn%20of%20Christ")!) {
                        Label("Help", systemImage: "questionmark.circle")
                    }
                } label: {
                    HStack(spacing: 3) {
                        Circle().fill(F2.ink2).frame(width: 3.6, height: 3.6)
                        Circle().fill(F2.ink2).frame(width: 3.6, height: 3.6)
                        Circle().fill(F2.ink2).frame(width: 3.6, height: 3.6)
                    }
                    .frame(width: 38, height: 38)
                    .background(Circle().fill(Color.white))
                    .overlay(Circle().stroke(F2GlassRecipe.stroke, lineWidth: 0.5))
                    .shadow(color: F2GlassRecipe.shadow, radius: 14, y: 4)
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.horizontal, 22)
    }

    /// First letter of the signed-in user's display name, or nil if we
    /// have no name to surface. Today the session only carries a UUID,
    /// so this always returns nil in practice — the fallback `person.fill`
    /// renders. Wired through so when we start caching display name on
    /// SIWA the avatar picks it up without further changes.
    private var avatarInitial: String? {
        guard auth.isSignedIn else { return nil }
        // No display-name field on SupabaseSession today. When we add
        // one, return its first letter here.
        return nil
    }
}

/// Shared values for the white-card recipe used by TopRow pills and the
/// F2GlassCard modifier. Keeping them here avoids the literal RGB tuples
/// drifting between callsites.
private enum F2GlassRecipe {
    static let stroke = Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.08)
    static let shadow = Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.06)
}

// MARK: - 2. Year hero — dark navy diagonal card

private struct YearHero: View {
    let streak: Int
    /// User's reading goal — drives every number in this card.
    let goal: BibleReadingGoal
    /// 1-based "day of the plan" — how many days since the start.
    let dayOfPlan: Int
    /// Total days in the plan (e.g. 90 for 3 months, 365 for 1 year).
    let totalDays: Int
    /// Goal's daily target rate (totalChapters / totalDays).
    let chaptersPerDay: Double
    var onStreakTap: () -> Void = {}
    var onEditGoal: () -> Void = {}

    /// Fill = how far the user has gone (streakDays / totalDays). Until
    /// there's per-chapter completion tracking, the streak count is the
    /// most defensible "progress" proxy: a streak of N means they have
    /// read on N days. Biases conservatively — always trails or matches
    /// the tick.
    private var fillFraction: Double {
        min(1.0, Double(streak) / Double(totalDays))
    }

    /// Tick at "where today should be on the plan bar".
    private var tickFraction: Double {
        min(1.0, Double(dayOfPlan) / Double(totalDays))
    }

    /// Rough proxy: ahead = streakDays - dayOfPlan (clamped at 0).
    private var aheadDays: Int { max(0, streak - dayOfPlan) }
    private var behindDays: Int { max(0, dayOfPlan - streak) }

    /// Three pace states for the badge pill.
    private enum Pace { case ahead, onPace, catchUp }

    private var pace: Pace {
        if streak >= dayOfPlan { return .ahead }
        if Double(streak) < Double(dayOfPlan) * 0.9 { return .catchUp }
        return .onPace
    }

    private var paceColor: Color {
        switch pace {
        case .ahead, .onPace: return F2.onPaceGreen
        case .catchUp:        return Color(red: 0.878, green: 0.659, blue: 0.392) // #E0A864
        }
    }

    private var paceLabel: String {
        switch pace {
        case .ahead, .onPace: return "ON PACE"
        case .catchUp:        return "CATCH UP"
        }
    }

    /// Trailing fragment of the "Finish by …" line — concatenable with
    /// other `Text` values via `+`, so the whole row reads as a single
    /// piece of styled text.
    private var paceFooter: Text {
        switch pace {
        case .ahead:
            return Text("+\(aheadDays) ahead")
                .foregroundStyle(F2.onPaceGreen)
                .fontWeight(.semibold)
        case .onPace:
            return Text("on pace")
                .foregroundStyle(F2.onPaceGreen)
                .fontWeight(.semibold)
        case .catchUp:
            return Text("\(behindDays) day\(behindDays == 1 ? "" : "s") behind")
                .foregroundStyle(paceColor)
                .fontWeight(.semibold)
        }
    }

    var body: some View {
        ZStack(alignment: .topLeading) {
            // Background gradient (135°)
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .fill(F2.diag([F2.heroStart, F2.heroMid, F2.heroEnd]))

            // Top-right soft white glow
            Circle()
                .fill(
                    RadialGradient(
                        colors: [Color(red: 200/255, green: 220/255, blue: 255/255).opacity(0.32), .clear],
                        center: .center,
                        startRadius: 0, endRadius: 110
                    )
                )
                .frame(width: 200, height: 200)
                .offset(x: 220, y: -40)
                .blur(radius: 12)
                .allowsHitTesting(false)

            VStack(alignment: .leading, spacing: 0) {
                // Eyebrow row — goal name on the left, pace pill on the right.
                HStack(alignment: .firstTextBaseline) {
                    HStack(spacing: 6) {
                        Text(goal.eyebrowLabel.uppercased())
                            .font(.system(size: 10, weight: .semibold))
                            .tracking(1.4)
                            .foregroundStyle(Color.white.opacity(0.7))
                        Button(action: onEditGoal) {
                            Image(systemName: "pencil")
                                .font(.system(size: 9, weight: .semibold))
                                .foregroundStyle(Color.white.opacity(0.55))
                        }
                        .buttonStyle(.plain)
                    }
                    Spacer()
                    HStack(spacing: 4) {
                        Circle().fill(paceColor).frame(width: 5, height: 5)
                        Text(paceLabel)
                            .font(.system(size: 9, weight: .bold))
                            .tracking(0.6)
                            .foregroundStyle(paceColor)
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(
                        Capsule().fill(paceColor.opacity(0.18))
                    )
                }

                // Big day count — driven by the goal's start date.
                HStack(alignment: .firstTextBaseline, spacing: 8) {
                    Text("Day \(dayOfPlan)")
                        .font(serifFont(44, weight: .medium))
                        .foregroundStyle(.white)
                    Text("of \(totalDays)")
                        .font(.system(size: 14))
                        .foregroundStyle(Color.white.opacity(0.6))
                }
                .padding(.top, 14)

                // Finish-by row — real target end date, dynamic pace footer.
                (Text("Finish by ")
                    .foregroundStyle(Color.white.opacity(0.75))
                + Text(goal.targetEndDate, format: .dateTime.month(.abbreviated).day().year())
                    .foregroundStyle(Color.white.opacity(0.85))
                    .fontWeight(.semibold)
                + Text(" · ")
                    .foregroundStyle(Color.white.opacity(0.55))
                + paceFooter)
                    .font(.system(size: 12))
                    .padding(.top, 4)

                // Progress bar + target tick — both derive from real
                // values (see fillFraction / tickFraction).
                GeometryReader { geo in
                    ZStack(alignment: .leading) {
                        // Track
                        RoundedRectangle(cornerRadius: 3, style: .continuous)
                            .fill(Color.white.opacity(0.16))
                            .frame(height: 6)
                        // Fill
                        RoundedRectangle(cornerRadius: 3, style: .continuous)
                            .fill(Color.white)
                            .frame(width: geo.size.width * CGFloat(fillFraction), height: 6)
                            .shadow(color: Color.white.opacity(0.4), radius: 8)
                        // Tick at today's day-of-year fraction
                        RoundedRectangle(cornerRadius: 1, style: .continuous)
                            .fill(Color.white.opacity(0.55))
                            .frame(width: 2, height: 12)
                            .offset(x: geo.size.width * CGFloat(tickFraction) - 1, y: -3)
                    }
                }
                .frame(height: 12)
                .padding(.top, 14)

                // Stats divider row — JSX: marginTop 16, paddingTop 14,
                // borderTop 0.5px rgba(255,255,255,0.15)
                VStack(spacing: 0) {
                    Rectangle()
                        .fill(Color.white.opacity(0.15))
                        .frame(height: 0.5)
                    StatsDividerRow(
                        streak: streak,
                        // Show the target daily rate the goal demands;
                        // user's measured pace is on the streak sheet.
                        chaptersPerDay: chaptersPerDay,
                        daysLeft: max(0, totalDays - dayOfPlan),
                        onStreakTap: onStreakTap
                    )
                        .padding(.top, 14)
                }
                .padding(.top, 16)
            }
            .padding(.top, 20)
            .padding(.horizontal, 22)
            .padding(.bottom, 22)
        }
        .clipShape(RoundedRectangle(cornerRadius: 24, style: .continuous))
        .shadow(
            color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.18),
            radius: 28, x: 0, y: 12
        )
        // Long-press anywhere on the hero card to edit the goal — keeps
        // the streak column's tap-to-open-sheet behavior intact while
        // giving a discoverable affordance for editing.
        .contextMenu {
            Button {
                onEditGoal()
            } label: {
                Label("Edit reading goal", systemImage: "pencil")
            }
        }
    }
}

private struct StatsDividerRow: View {
    let streak: Int
    let chaptersPerDay: Double
    let daysLeft: Int
    var onStreakTap: () -> Void = {}

    private var chPerDayLabel: String {
        // One decimal place. Falls back to "0.0" when there's no
        // recent reading activity (see HomeView.chaptersPerDay).
        String(format: "%.1f", chaptersPerDay)
    }

    var body: some View {
        HStack(spacing: 0) {
            // Streak column is tappable — opens the streak sheet, matching
            // the JSX where the streak number `onClick` calls setStreakOpen.
            Button(action: onStreakTap) {
                statColumn {
                    HStack(spacing: 4) {
                        Image("flame")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 16, height: 16)
                        Text("\(streak)")
                            .font(.system(size: 18, weight: .bold))
                            .tracking(-0.3)
                            .foregroundStyle(.white)
                    }
                } label: {
                    Text("day streak")
                }
            }
            .buttonStyle(.plain)
            divider
            statColumn {
                Text(chPerDayLabel)
                    .font(.system(size: 18, weight: .bold))
                    .tracking(-0.3)
                    .foregroundStyle(.white)
            } label: {
                Text("ch / day")
            }
            divider
            statColumn {
                Text("\(daysLeft)")
                    .font(.system(size: 18, weight: .bold))
                    .tracking(-0.3)
                    .foregroundStyle(.white)
            } label: {
                Text("days left")
            }
        }
    }

    private var divider: some View {
        Rectangle()
            .fill(Color.white.opacity(0.15))
            .frame(width: 0.5, height: 32)
    }

    private func statColumn<Big: View, Label: View>(
        @ViewBuilder _ big: () -> Big,
        @ViewBuilder label: () -> Label
    ) -> some View {
        VStack(spacing: 2) {
            big()
            label()
                .font(.system(size: 10))
                .tracking(0.2)
                .foregroundStyle(Color.white.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
    }
}

// MARK: - 3. Today's reading

private struct TodaysReadingSection: View {
    let dayOfYear: Int

    /// Chapters in today's reading pair. Hardcoded to 2 because
    /// BibleReadingPlan.pair always emits two chapters (OT + NT). When
    /// a curated plan ships, lift this from the plan entry.
    static let chaptersToday: Int = 2

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(alignment: .firstTextBaseline) {
                Text("Today's reading")
                    .font(.system(size: 16, weight: .semibold))
                    .tracking(-0.2)
                    .foregroundStyle(F2.ink)
                Spacer()
                // Today's reading is always 2 chapters (OT + NT) per
                // BibleReadingPlan.pair. We estimate ~9 minutes per
                // chapter — order-of-magnitude correct for an average
                // adult reader. Computed inline so the value can't drift
                // out of sync with the chapter count.
                Text("\(Self.chaptersToday * 9) min")
                    .font(.system(size: 12))
                    .foregroundStyle(F2.ink3)
            }

            TodaysReadingCard(dayOfYear: dayOfYear)
        }
    }
}

private struct TodaysReadingCard: View {
    let dayOfYear: Int

    private var plan: (otSlug: String, otChapter: Int, ntSlug: String, ntChapter: Int) {
        BibleReadingPlan.pair(forDay: dayOfYear)
    }

    /// Pretty book name from the catalog (e.g. "Psalms" / "Proverbs").
    /// Falls back to capitalising the slug if the lookup fails.
    private func name(forSlug slug: String) -> String {
        BibleBookCatalog.book(for: slug)?.name ?? slug.capitalized
    }

    /// First chapter of today's pair — the chapter the "Begin study" CTA
    /// pushes into.
    private var primaryRoute: ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: plan.otSlug) else { return nil }
        return ChapterRoute(book: book, chapter: plan.otChapter)
    }

    private var verse: VerseEntry { VerseOfDay.today }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Small caps row — DAY N · 2 CHAPTERS
            HStack(spacing: 10) {
                Text("DAY \(dayOfYear)")
                    .font(.system(size: 10, weight: .bold))
                    .tracking(0.6)
                    .foregroundStyle(F2.accent)
                Circle().fill(F2.ink4).frame(width: 3, height: 3)
                // "2 CHAPTERS" stays literal — our plan emits two
                // chapters per day by construction.
                Text("2 CHAPTERS")
                    .font(.system(size: 10, weight: .semibold))
                    .tracking(0.2)
                    .foregroundStyle(F2.ink3)
            }

            // Big title (serif) — derived from the deterministic plan.
            (Text("\(name(forSlug: plan.otSlug)) \(plan.otChapter) ")
                .foregroundStyle(F2.ink)
            + Text("·")
                .foregroundStyle(F2.ink3)
            + Text(" \(name(forSlug: plan.ntSlug)) \(plan.ntChapter)")
                .foregroundStyle(F2.ink))
                .font(serifFont(24, weight: .medium))
                .lineSpacing(2)
                .padding(.top, 8)

            // Verse pull-quote — real rotation, day-of-year mod 30.
            VStack(alignment: .leading, spacing: 4) {
                Text("VERSE OF THE DAY · \(verse.reference.uppercased())")
                    .font(.system(size: 9, weight: .bold))
                    .tracking(0.8)
                    .foregroundStyle(F2.accent)
                Text("\u{201C}\(verse.text)\u{201D}")
                    .font(serifFont(14))
                    .foregroundStyle(F2.ink)
                    .lineSpacing(2)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.horizontal, 14)
            .padding(.vertical, 12)
            .background(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .fill(Color.white.opacity(0.5))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .stroke(Color.white.opacity(0.7), lineWidth: 0.5)
            )
            .padding(.top, 14)

            // Action row — Begin study deep-links into the first chapter
            // of today's pair. The audio (`play.fill`) button is removed
            // until Audio Bible ships; a button with no functional target
            // is worse than no button at all. "Begin study" takes the
            // full width so the row reads as a single primary action.
            if let route = primaryRoute {
                NavigationLink(value: route) {
                    beginStudyButtonLabel
                }
                .buttonStyle(.plain)
                .padding(.top, 14)
            } else {
                // Fallback when the slug doesn't resolve — extremely
                // unlikely given the static catalog, but keeps the UI alive.
                beginStudyButtonLabel
                    .padding(.top, 14)
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 18)
        .frame(maxWidth: .infinity, alignment: .leading)
        .f2Glass(22, strong: true)
    }

    private var beginStudyButtonLabel: some View {
        HStack(spacing: 6) {
            Text("Begin study")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(.white)
            Image(systemName: "arrow.right")
                .font(.system(size: 12, weight: .semibold))
                .foregroundStyle(.white)
        }
        .frame(maxWidth: .infinity)
        .frame(height: 38)
        .background(Capsule().fill(F2.ink))
        .shadow(
            color: Color(red: 15/255, green: 40/255, blue: 70/255).opacity(0.18),
            radius: 10, y: 4
        )
    }
}

// MARK: - 4. Library section header + Continue Reading hero

private struct LibrarySectionHeader: View {
    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text("Library")
                .font(.system(size: 16, weight: .semibold))
                .tracking(-0.2)
                .foregroundStyle(F2.ink)
            Spacer()
            NavigationLink(value: BrowseDestination.library) {
                HStack(spacing: 2) {
                    Text("See all")
                        .font(.system(size: 12))
                        .foregroundStyle(F2.ink3)
                    Text("→")
                        .font(.system(size: 12))
                        .foregroundStyle(F2.ink3)
                }
            }
            .buttonStyle(.plain)
        }
    }
}

private struct ContinueReadingHero: View {
    let progress: StoredReadingProgress?

    private var bookName: String {
        if let progress {
            return BibleBookCatalog.book(for: progress.bookSlug)?.name
                ?? progress.bookSlug.capitalized
        }
        return "Psalms"
    }
    private var chapterNumber: Int { progress?.chapter ?? 23 }

    /// Real progress fraction, when we have one. We don't carry per-chapter
    /// verse counts on the client today, so we only show a meaningful
    /// fill when `scrollPct` is non-zero or `lastVerseIndex` is set.
    /// Returns nil when we can't honestly compute a percentage — the UI
    /// then hides the % label rather than fabricating "64%".
    private var fraction: Double? {
        guard let progress else { return nil }
        if progress.scrollPct > 0 {
            return min(1.0, progress.scrollPct)
        }
        if let v = progress.lastVerseIndex, v > 0 {
            // Without per-chapter verse counts on the client, treat 30
            // as an approximation of "average chapter length"; better
            // than fabricating a percent, still honest about its
            // limits. Caps at 1.0 so it can't run past the bar.
            return min(1.0, Double(v) / 30.0)
        }
        return nil
    }

    private var route: ChapterRoute? {
        if let progress { return HomeRoutes.route(for: progress) }
        if let book = BibleBookCatalog.book(for: "psalms") {
            return ChapterRoute(book: book, chapter: 23)
        }
        return nil
    }

    var body: some View {
        Group {
            if let route {
                NavigationLink(value: route) { card }
                    .buttonStyle(.plain)
            } else {
                card
            }
        }
    }

    private var card: some View {
        ZStack(alignment: .topLeading) {
            RoundedRectangle(cornerRadius: 26, style: .continuous)
                .fill(F2.diag([F2.heroStart, F2.heroMid, F2.heroEnd]))

            // Glow top-right
            Circle()
                .fill(
                    RadialGradient(
                        colors: [Color(red: 200/255, green: 220/255, blue: 255/255).opacity(0.4), .clear],
                        center: .center,
                        startRadius: 0, endRadius: 100
                    )
                )
                .frame(width: 180, height: 180)
                .offset(x: 220, y: -30)
                .blur(radius: 8)
                .allowsHitTesting(false)

            // White bible image (rotated, anchored bottom-right)
            Image("white-bible")
                .resizable()
                .scaledToFit()
                .frame(width: 224)
                .rotationEffect(.degrees(-8))
                .shadow(color: Color.black.opacity(0.5), radius: 26, y: 18)
                .offset(x: 180, y: 30)
                .allowsHitTesting(false)

            // Left content
            VStack(alignment: .leading, spacing: 0) {
                Text("CONTINUE READING")
                    .font(.system(size: 10, weight: .medium))
                    .tracking(1.4)
                    .foregroundStyle(Color.white.opacity(0.7))

                VStack(alignment: .leading, spacing: 0) {
                    Text(bookName)
                        .foregroundStyle(.white)
                    Text("Chapter \(chapterNumber)")
                        .foregroundStyle(Color.white.opacity(0.7))
                }
                .font(serifFont(26))
                .lineSpacing(0)
                .padding(.top, 8)

                DepthTogglePills()
                    .padding(.top, 12)

                // Progress row — only renders when we have a real
                // fraction. No fabricated "%". When there's nothing to
                // honestly show, we surface the action-oriented label
                // "Continue reading" instead.
                if let fraction {
                    HStack(spacing: 8) {
                        ProgressView(value: fraction)
                            .progressViewStyle(BlueTrackProgressStyle())
                            .frame(maxWidth: 90)
                        Text("\(Int(fraction * 100))%")
                            .font(.system(size: 11))
                            .foregroundStyle(Color.white.opacity(0.7))
                    }
                    .padding(.top, 12)
                } else {
                    Text("Continue reading")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(Color.white.opacity(0.7))
                        .padding(.top, 12)
                }
            }
            .frame(maxWidth: 170, alignment: .leading)
            .padding(.horizontal, 22)
            .padding(.vertical, 20)
        }
        .frame(maxWidth: .infinity, minHeight: 130, alignment: .leading)
        .clipShape(RoundedRectangle(cornerRadius: 26, style: .continuous))
        .shadow(
            color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.18),
            radius: 28, x: 0, y: 12
        )
    }
}

/// White-on-translucent progress track for the Continue Reading hero.
private struct BlueTrackProgressStyle: ProgressViewStyle {
    func makeBody(configuration: Configuration) -> some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                RoundedRectangle(cornerRadius: 2, style: .continuous)
                    .fill(Color.white.opacity(0.18))
                    .frame(height: 3)
                RoundedRectangle(cornerRadius: 2, style: .continuous)
                    .fill(.white)
                    .frame(
                        width: geo.size.width * CGFloat(configuration.fractionCompleted ?? 0),
                        height: 3
                    )
            }
        }
        .frame(height: 3)
    }
}

/// Depth segmented pills (Quick / Standard / Deep) — bound to the real
/// `loc-study-level` @AppStorage key (ReaderPrefs.Key.studyLevel), the
/// same one SettingsView and ChapterReaderView read. Keys are the
/// StudyLevel raw values: `beginner` / `intermediate` / `deep`.
///
/// Sits inside the dark hero, so unselected pills are transparent on
/// white text and the selected pill is solid white on dark ink.
private struct DepthTogglePills: View {
    @AppStorage(ReaderPrefs.Key.studyLevel)
    private var depth: String = ReaderPrefs.defaultStudyLevel.rawValue

    private let options: [(key: String, label: String)] = [
        (StudyLevel.beginner.rawValue,     "Quick"),
        (StudyLevel.intermediate.rawValue, "Standard"),
        (StudyLevel.deep.rawValue,         "Deep"),
    ]

    var body: some View {
        HStack(spacing: 4) {
            ForEach(options, id: \.key) { opt in
                Button {
                    depth = opt.key
                } label: {
                    Text(opt.label)
                        .font(.system(size: 10, weight: .semibold))
                        .tracking(0.2)
                        // Without `.lineLimit(1) + .fixedSize`, the
                        // hero card's narrow content column was wrapping
                        // "Standard" to "Standar / d" mid-word. We force
                        // each pill to its intrinsic single-line width.
                        .lineLimit(1)
                        .fixedSize(horizontal: true, vertical: false)
                        .foregroundStyle(depth == opt.key ? F2.ink : Color.white.opacity(0.85))
                        // 7pt horizontal padding (was 9) — keeps the
                        // three pills inside the hero's 170pt content
                        // column. 4pt vertical, up from 3, so the pill
                        // has visual height proportional to its width.
                        .padding(.horizontal, 7)
                        .padding(.vertical, 4)
                        .background(
                            Capsule().fill(depth == opt.key ? Color.white : Color.clear)
                        )
                }
                .buttonStyle(.plain)
            }
        }
        .padding(3)
        .background(
            Capsule().fill(Color.white.opacity(0.08))
        )
        .overlay(
            Capsule().stroke(Color.white.opacity(0.15), lineWidth: 0.5)
        )
    }
}

// MARK: - 5. Keep reading — horizontal carousel

private struct KeepReadingHeader: View {
    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text("Keep reading")
                .font(.system(size: 16, weight: .semibold))
                .tracking(-0.2)
                .foregroundStyle(F2.ink)
            Spacer()
            // "See all" pushes into Library — there isn't a dedicated
            // "keep reading" landing, and Library is the closest real
            // surface (bookmarks + continue-reading + notes + highlights).
            NavigationLink(value: BrowseDestination.library) {
                HStack(spacing: 2) {
                    Text("See all")
                        .font(.system(size: 12))
                        .foregroundStyle(F2.ink3)
                    Text("→")
                        .font(.system(size: 12))
                        .foregroundStyle(F2.ink3)
                }
            }
            .buttonStyle(.plain)
        }
    }
}

/// Behaviour for a Keep-Reading tile when the user taps it.
///   - `.push(dest)`     — pushes a real `BrowseDestination` (e.g. Art,
///                         StudyPlans, Topics, Questions).
///   - `.translation`    — surfaces a Menu of public-domain translations
///                         (bound to `loc-translation` @AppStorage).
///   - `.comingSoon(msg)`— sets the parent's `comingSoonMessage` binding,
///                         which triggers a small sheet.
///
/// Note: the old `.web(URL)` case (which presented an in-app
/// SFSafariViewController for tiles that pointed at learnofchrist.com)
/// has been removed now that Study Plans / Topics / Questions render
/// natively from the shared content API. `SafariSheet` and
/// `IdentifiedURL` are kept at the bottom of this file in case a future
/// tile wants to fall back to a web page.
private enum KeepReadingAction {
    case push(BrowseDestination)
    case translation
    case comingSoon(String)
}

private struct KeepReadingRow: View {
    @Binding var comingSoon: String?

    private struct Tile: Identifiable {
        let title: String
        let sub: String
        let image: String
        let action: KeepReadingAction
        var id: String { title }
    }

    /// All six tiles. Four of them now push native SwiftUI screens
    /// (`StudyPlansListView`, `TopicsListView`, `QuestionsListView`,
    /// `BookGridView` via `.bible`) that render the same content the
    /// website does. The content itself comes from a shared backend
    /// (Next.js Route Handlers under /api/*), so a content edit on the
    /// site is reflected here on next deploy — no App Store release
    /// needed.
    private static let tiles: [Tile] = [
        Tile(
            title: "Study Plans", sub: "Day-by-day", image: "tile-studyplans",
            action: .push(.studyPlans)
        ),
        Tile(
            title: "Topics", sub: "By theme", image: "tile-topics",
            action: .push(.topics)
        ),
        Tile(
            title: "Artwork", sub: "Browse", image: "tile-artwork",
            action: .push(.art)
        ),
        Tile(
            title: "Translations", sub: "Pick one", image: "tile-books",
            action: .translation
        ),
        Tile(
            title: "Audio Bible", sub: "Listen aloud", image: "tile-headphones",
            action: .push(.bible)
        ),
        Tile(
            title: "Questions", sub: "Common asks", image: "tile-questions",
            action: .push(.questions)
        ),
    ]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 12) {
                ForEach(Self.tiles) { tile in
                    tileView(tile)
                }
            }
            .padding(.horizontal, 22)
            .padding(.vertical, 4)
        }
        .scrollClipDisabled()
    }

    @ViewBuilder
    private func tileView(_ tile: Tile) -> some View {
        switch tile.action {
        case .push(let dest):
            NavigationLink(value: dest) {
                FTileF2(title: tile.title, sub: tile.sub, image: tile.image)
            }
            .buttonStyle(.plain)
        case .translation:
            TranslationPickerTile(title: tile.title, sub: tile.sub, image: tile.image)
        case .comingSoon(let message):
            Button {
                comingSoon = message
            } label: {
                FTileF2(title: tile.title, sub: tile.sub, image: tile.image)
            }
            .buttonStyle(.plain)
        }
    }
}

/// Translations tile — its tap shows a Menu with the public-domain
/// translation list. Binds to `ReaderPrefs.Key.translation` so the
/// choice round-trips with SettingsView / ChapterReaderView.
private struct TranslationPickerTile: View {
    let title: String
    let sub: String
    let image: String

    @AppStorage(ReaderPrefs.Key.translation)
    private var translation: String = ReaderPrefs.defaultTranslation

    var body: some View {
        Menu {
            ForEach(ReaderPrefs.publicDomainTranslations) { t in
                Button {
                    translation = t.abbreviation
                } label: {
                    HStack {
                        Text(t.name)
                        if t.abbreviation == translation {
                            Image(systemName: "checkmark")
                        }
                    }
                }
            }
        } label: {
            FTileF2(title: title, sub: sub, image: image)
        }
        .buttonStyle(.plain)
    }
}

private struct FTileF2: View {
    let title: String
    /// Retained for source-compatibility with old callsites but no longer
    /// rendered — per design, tiles now show a single title line with the
    /// illustration sitting cleanly below it (no second-line caption).
    var sub: String = ""
    let image: String

    /// Tile dimensions. The art now sits BELOW the title (inside the
    /// tile, no overflow, no behind-text overlap). 100pt is small enough
    /// to feel like an icon-illustration but big enough that the
    /// hand-drawn detail still reads.
    private static let tileWidth: CGFloat  = 130
    private static let tileHeight: CGFloat = 150
    private static let artSize: CGFloat    = 100

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Single-line title — no second descriptor line.
            Text(title)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink)
                .lineLimit(1)
                .padding(.horizontal, 14)
                .padding(.top, 12)

            Spacer(minLength: 0)

            // Centered illustration sitting in the lower half. Stays
            // inside the tile bounds — no overflow, no overlap with the
            // title text.
            Image(image)
                .resizable()
                .scaledToFit()
                .frame(width: Self.artSize, height: Self.artSize)
                .frame(maxWidth: .infinity, alignment: .center)
                .shadow(
                    color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.18),
                    radius: 6, y: 4
                )
                .padding(.bottom, 6)
                .allowsHitTesting(false)
        }
        .frame(width: Self.tileWidth, height: Self.tileHeight, alignment: .topLeading)
        .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
        .f2Glass(20)
    }
}

// MARK: - 6. From the original language
//
// Rotating Hebrew/Greek word-of-the-month: 12 entries, one per
// (dayOfYear - 1) % rotation.count. Each entry resolves to a real
// chapter the user can tap into. The pool below intentionally only
// includes high-confidence words — Genesis 1:1, John 1:1, etc. —
// to avoid surfacing a transliteration we'd want to revisit later.

struct HebrewWord {
    /// Word as it appears in the source language. May contain Hebrew
    /// niqqud or Greek breathing marks.
    let original: String
    /// Romanised transliteration with macrons / haceks where useful.
    let transliteration: String
    /// One- or two-word gloss that pairs with the eyebrow.
    let gloss: String
    /// Eyebrow line printed above the word ("BERESHIT – \"IN THE
    /// BEGINNING\""). Stored verbatim because casing/accents matter
    /// more than English-readability for the eyebrow's purpose.
    let eyebrow: String
    /// "Genesis 1:1 · \"In the beginning\"" — printed at the footer.
    let footer: String
    /// Italic in-line note used in the transliteration row.
    let inlineNote: String
    /// Long-form paragraph body. Single sentence preferred.
    let body: String
    /// Book slug the footer's chevron taps into.
    let bookSlug: String
    /// Chapter number for the tap target.
    let chapter: Int
    /// Whether to flip the text run for RTL rendering (Hebrew yes,
    /// Greek no — Greek lays out LTR like English).
    let isRTL: Bool
}

enum OriginalLanguageRotation {
    static let all: [HebrewWord] = [
        HebrewWord(
            original: "בְּרֵאשִׁית",
            transliteration: "bərê·šît",
            gloss: "In the beginning",
            eyebrow: "BERESHIT – \u{201C}IN THE BEGINNING\u{201D}",
            footer: "Genesis 1:1 · \u{201C}In the beginning\u{201D}",
            inlineNote: "· the first word of scripture",
            body: "A single noun opens the Bible — not a verb, but a moment. Hebrew makes time itself the first created thing, and the whole story of God flows from this beginning.",
            bookSlug: "genesis", chapter: 1, isRTL: true
        ),
        HebrewWord(
            original: "רוּחַ",
            transliteration: "rûaḥ",
            gloss: "Spirit, breath, wind",
            eyebrow: "RUACH – \u{201C}SPIRIT\u{201D}",
            footer: "Genesis 1:2 · \u{201C}The Spirit of God moved\u{201D}",
            inlineNote: "· breath and spirit are one word",
            body: "Hebrew uses one word for wind, breath, and the Spirit of God — the same ruach hovers over the waters of creation and fills a newborn's lungs. The God who speaks is the God who breathes.",
            bookSlug: "genesis", chapter: 1, isRTL: true
        ),
        HebrewWord(
            original: "חֶסֶד",
            transliteration: "ḥesed",
            gloss: "Steadfast love",
            eyebrow: "CHESED – \u{201C}STEADFAST LOVE\u{201D}",
            footer: "Psalm 23:6 · \u{201C}Goodness and mercy\u{201D}",
            inlineNote: "· loyal, covenant love",
            body: "Translators reach for \u{201C}lovingkindness,\u{201D} \u{201C}mercy,\u{201D} \u{201C}steadfast love\u{201D} — no single English word holds it. Ḥesed is love that keeps showing up: covenantal, durable, undeserved, and unwilling to walk away.",
            bookSlug: "psalms", chapter: 23, isRTL: true
        ),
        HebrewWord(
            original: "שָׁלוֹם",
            transliteration: "šālôm",
            gloss: "Peace, wholeness",
            eyebrow: "SHALOM – \u{201C}PEACE\u{201D}",
            footer: "Psalm 4:8 · \u{201C}I will both lay me down in peace\u{201D}",
            inlineNote: "· wholeness, not just calm",
            body: "Shalom is more than the absence of conflict — it's wholeness, integrity, things being knit together as they should be. A peace that includes the body, the home, the city, and the soul.",
            bookSlug: "psalms", chapter: 4, isRTL: true
        ),
        HebrewWord(
            original: "אֱמוּנָה",
            transliteration: "ʾĕmûnāh",
            gloss: "Faithfulness",
            eyebrow: "EMUNAH – \u{201C}FAITHFULNESS\u{201D}",
            footer: "Lamentations 3:23 · \u{201C}Great is thy faithfulness\u{201D}",
            inlineNote: "· steady, dependable",
            body: "Emunah is the kind of faith that shows up every morning — God's faithfulness new each day, and the answering trust of a heart that has learned He keeps coming back.",
            bookSlug: "lamentations", chapter: 3, isRTL: true
        ),
        HebrewWord(
            original: "תּוֹרָה",
            transliteration: "tôrāh",
            gloss: "Instruction, law",
            eyebrow: "TORAH – \u{201C}INSTRUCTION\u{201D}",
            footer: "Psalm 119:1 · \u{201C}Blessed are the undefiled\u{201D}",
            inlineNote: "· teaching, not just rules",
            body: "Torah is usually translated \u{201C}law,\u{201D} but the root is closer to \u{201C}teaching\u{201D} or \u{201C}instruction\u{201D} — the kind a parent gives a child. The shape of a good life, not a list of restrictions.",
            bookSlug: "psalms", chapter: 119, isRTL: true
        ),
        HebrewWord(
            original: "בָּרוּךְ",
            transliteration: "bārûḵ",
            gloss: "Blessed",
            eyebrow: "BARUCH – \u{201C}BLESSED\u{201D}",
            footer: "Numbers 6:24 · \u{201C}The Lord bless thee\u{201D}",
            inlineNote: "· to kneel, to bless",
            body: "From a root meaning \u{201C}to kneel,\u{201D} baruch opens a thousand Hebrew prayers. To bless God is to bow before Him; to be blessed by God is to be lifted up.",
            bookSlug: "numbers", chapter: 6, isRTL: true
        ),
        HebrewWord(
            original: "אֲדֹנָי",
            transliteration: "ʾadōnāy",
            gloss: "Lord",
            eyebrow: "ADONAI – \u{201C}LORD\u{201D}",
            footer: "Psalm 8:1 · \u{201C}O Lord our Lord\u{201D}",
            inlineNote: "· spoken in place of the divine name",
            body: "Where the Hebrew text shows the four letters of the divine name, readers say Adonai — \u{201C}my Lord.\u{201D} A reverence built into the language itself: even pronouncing the name is held with care.",
            bookSlug: "psalms", chapter: 8, isRTL: true
        ),
        // — Greek (NT) —
        HebrewWord(
            original: "λόγος",
            transliteration: "lógos",
            gloss: "Word",
            eyebrow: "LOGOS – \u{201C}WORD\u{201D}",
            footer: "John 1:1 · \u{201C}In the beginning was the Word\u{201D}",
            inlineNote: "· word, reason, the speech that creates",
            body: "John opens his gospel with the same three syllables that opened Genesis — \u{201C}in the beginning.\u{201D} The Word who spoke creation into being is the Word who became flesh and walked among us.",
            bookSlug: "john", chapter: 1, isRTL: false
        ),
        HebrewWord(
            original: "ἀγάπη",
            transliteration: "agápē",
            gloss: "Love",
            eyebrow: "AGAPE – \u{201C}LOVE\u{201D}",
            footer: "1 Corinthians 13:4 · \u{201C}Charity suffereth long\u{201D}",
            inlineNote: "· chosen, sacrificial love",
            body: "Greek has several words for love; agape is the one that doesn't depend on how you feel. It's love as a decision and a posture — patient, kind, unbothered by being right.",
            bookSlug: "1-corinthians", chapter: 13, isRTL: false
        ),
        HebrewWord(
            original: "χάρις",
            transliteration: "cháris",
            gloss: "Grace",
            eyebrow: "CHARIS – \u{201C}GRACE\u{201D}",
            footer: "Ephesians 2:8 · \u{201C}By grace are ye saved\u{201D}",
            inlineNote: "· gift, favor, joy",
            body: "Charis carries the warmth of a gift freely given — not earned, not owed, not measured. The same root sits inside \u{201C}charity\u{201D} and \u{201C}eucharist.\u{201D} Grace is what makes Christian life possible.",
            bookSlug: "ephesians", chapter: 2, isRTL: false
        ),
        HebrewWord(
            original: "εἰρήνη",
            transliteration: "eirḗnē",
            gloss: "Peace",
            eyebrow: "EIRENE – \u{201C}PEACE\u{201D}",
            footer: "John 14:27 · \u{201C}Peace I leave with you\u{201D}",
            inlineNote: "· peace that does not match the world's",
            body: "Eirene is the Greek shadow of Hebrew shalom — peace that holds even when nothing outside has changed. The peace Jesus leaves is not the world's calm; it's the steadiness of being held.",
            bookSlug: "john", chapter: 14, isRTL: false
        ),
    ]

    /// Word for today, rotating monthly-ish. Length is 12 so the cycle
    /// covers a year if the user opens the home screen daily — but the
    /// formula degrades gracefully if the array grows or shrinks.
    static func today(dayOfYear: Int) -> HebrewWord {
        all[(dayOfYear - 1) % all.count]
    }
}

private struct OriginalLanguageSection: View {
    /// Tapping the section header opens a sheet listing every rotation
    /// entry, so curious readers don't have to wait 12 days to see what
    /// else we cover.
    @State private var showAll: Bool = false

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(alignment: .firstTextBaseline) {
                Text("From the original language")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Spacer()
                Button {
                    showAll = true
                } label: {
                    HStack(spacing: 2) {
                        Text("All")
                            .font(.system(size: 12))
                            .foregroundStyle(F2.ink3)
                        Text("→")
                            .font(.system(size: 12))
                            .foregroundStyle(F2.ink3)
                    }
                }
                .buttonStyle(.plain)
            }

            OriginalLanguageCard()
        }
        .sheet(isPresented: $showAll) {
            OriginalLanguageRotationSheet()
        }
    }
}

private struct OriginalLanguageCard: View {
    /// Pick the same word the home renders today.
    private var word: HebrewWord {
        OriginalLanguageRotation.today(dayOfYear: HomeDay.dayOfYear())
    }

    var body: some View {
        Group {
            if let route = chapterRoute {
                NavigationLink(value: route) { card }
                    .buttonStyle(.plain)
            } else {
                card
            }
        }
    }

    private var chapterRoute: ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: word.bookSlug) else { return nil }
        return ChapterRoute(book: book, chapter: word.chapter)
    }

    private var card: some View {
        VStack(spacing: 0) {
            // Eyebrow
            Text(word.eyebrow)
                .font(.system(size: 10, weight: .bold))
                .tracking(2.4)
                .foregroundStyle(F2.goldEyebrow)
                .multilineTextAlignment(.center)

            // Hebrew/Greek word. The speaker affordance was removed —
            // we don't have pronunciation audio shipped, so a "play
            // button" with no audio attached is worse than no button.
            Text(word.original)
                .font(serifFont(38, weight: .medium))
                .foregroundStyle(F2.goldText)
                .environment(\.layoutDirection, word.isRTL ? .rightToLeft : .leftToRight)
                .padding(.top, 16)

            // Transliteration row
            HStack(spacing: 6) {
                Text(word.transliteration)
                    .font(.system(size: 13, weight: .bold))
                    .foregroundStyle(F2.goldText)
                Text(word.inlineNote)
                    .font(.system(size: 13))
                    .italic()
                    .foregroundStyle(F2.goldText.opacity(0.65))
            }
            .padding(.top, 12)

            // Body paragraph
            Text(word.body)
                .font(.system(size: 13))
                .foregroundStyle(F2.goldText)
                .lineSpacing(4)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.top, 14)

            // Citation footer — links to the chapter for *this* word,
            // not always Genesis 1.
            HStack {
                Text(word.footer)
                    .font(.system(size: 11, weight: .semibold))
                    .tracking(0.4)
                    .foregroundStyle(F2.goldEyebrow)
                Spacer()
                Image(systemName: "chevron.right")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(F2.goldEyebrow)
            }
            .padding(.top, 14)
            .overlay(alignment: .top) {
                Rectangle()
                    .fill(Color(red: 168/255, green: 117/255, blue: 40/255).opacity(0.18))
                    .frame(height: 0.5)
            }
            .padding(.top, 16)
        }
        .padding(.horizontal, 22)
        .padding(.top, 20)
        .padding(.bottom, 22)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: [F2.goldBgStart, F2.goldBgEnd],
                        startPoint: UnitPoint(x: 0.1, y: 0.0),
                        endPoint: UnitPoint(x: 0.9, y: 1.0)
                    )
                )
        )
        .overlay(
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .stroke(F2.goldBorder, lineWidth: 0.5)
        )
        .shadow(
            color: Color(red: 140/255, green: 100/255, blue: 40/255).opacity(0.12),
            radius: 18, y: 6
        )
    }
}

/// All 12 rotation entries in a list. The sheet is a read-only
/// reference view — taps don't navigate to chapters because the sheet's
/// own navigation stack isn't wired to `.bibleNavigationDestinations()`
/// and double-pushing into the host stack from a sheet is a fragile
/// pattern. The user can close the sheet and tap today's footer card
/// to read this word's chapter; the catalog of words is the value here.
private struct OriginalLanguageRotationSheet: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVStack(alignment: .leading, spacing: 12) {
                    ForEach(Array(OriginalLanguageRotation.all.enumerated()), id: \.offset) { _, word in
                        row(word)
                    }
                }
                .padding(.horizontal, 18)
                .padding(.vertical, 14)
            }
            .background(F2.background.ignoresSafeArea())
            .navigationTitle("Original-language words")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                        .foregroundStyle(F2.accent)
                }
            }
        }
    }

    @ViewBuilder
    private func row(_ word: HebrewWord) -> some View {
        content(word)
    }

    private func content(_ word: HebrewWord) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(word.eyebrow)
                .font(.system(size: 9, weight: .bold))
                .tracking(2)
                .foregroundStyle(F2.goldEyebrow)
            HStack(alignment: .firstTextBaseline, spacing: 10) {
                Text(word.original)
                    .font(serifFont(24, weight: .medium))
                    .foregroundStyle(F2.goldText)
                    .environment(\.layoutDirection, word.isRTL ? .rightToLeft : .leftToRight)
                Text(word.transliteration)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(F2.goldText.opacity(0.8))
                Spacer()
            }
            Text(word.gloss)
                .font(.system(size: 13))
                .italic()
                .foregroundStyle(F2.goldText.opacity(0.7))
            Text(word.footer)
                .font(.system(size: 11))
                .foregroundStyle(F2.ink3)
                .padding(.top, 2)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: [F2.goldBgStart, F2.goldBgEnd],
                        startPoint: UnitPoint(x: 0.1, y: 0.0),
                        endPoint: UnitPoint(x: 0.9, y: 1.0)
                    )
                )
        )
        .overlay(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .stroke(F2.goldBorder, lineWidth: 0.5)
        )
    }
}

// MARK: - 7. Today's plan

private struct TodaysPlanHeader: View {
    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            // No plan engine exists yet, so the section title is
            // intentionally a Featured-psalm framing rather than
            // promising a curated plan. When a real plan ships, this
            // becomes "Today's plan" again and the eyebrow + day count
            // come back with it.
            Text("Featured psalm")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(F2.ink)
            Spacer()
        }
    }
}

/// Today's plan card. We don't have a real plan engine yet, so the
/// hand-written "shepherd's promise" reference points at Psalm 23 — a
/// tap on the card navigates there so the gesture does something real.
/// When a curated plan ships, swap `psalmsRoute` for the actual lookup.
private struct TodaysPlanCard: View {
    private var psalmsRoute: ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: "psalms") else { return nil }
        return ChapterRoute(book: book, chapter: 23)
    }

    var body: some View {
        Group {
            if let route = psalmsRoute {
                NavigationLink(value: route) { card }
                    .buttonStyle(.plain)
            } else {
                card
            }
        }
    }

    private var card: some View {
        HStack(spacing: 14) {
            // Scripture frame placeholder — soft pastel diagonal
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: [
                            Color(red: 0.906, green: 0.843, blue: 0.910),   // #E7D7E8
                            Color(red: 0.776, green: 0.714, blue: 0.875),   // #C6B6DF
                        ],
                        startPoint: .topLeading, endPoint: .bottomTrailing
                    )
                )
                .frame(width: 58, height: 58)

            VStack(alignment: .leading, spacing: 4) {
                // Plan eyebrow removed — there's no plan engine to
                // anchor it to. The card still points at Psalm 23 (the
                // shepherd's promise) because it's a real, beloved
                // chapter the user is likely to want to read.
                Text("The shepherd's promise")
                    .font(serifFont(18))
                    .foregroundStyle(F2.ink)
                    .lineSpacing(2)
                // Audio claim dropped — Audio Bible isn't implemented,
                // so "Audio · 7 min" was fabricated. Only the read
                // estimate stays.
                Text("5 min read")
                    .font(.system(size: 11))
                    .foregroundStyle(F2.ink3)
            }

            Spacer(minLength: 0)

            // Chevron — purely decorative; the outer NavigationLink
            // already makes the whole card tappable.
            Image(systemName: "arrow.right")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.white)
                .frame(width: 36, height: 36)
                .background(Circle().fill(F2.ink))
                .shadow(
                    color: Color(red: 15/255, green: 40/255, blue: 70/255).opacity(0.18),
                    radius: 10, y: 4
                )
        }
        .padding(16)
        .frame(maxWidth: .infinity)
        .f2Glass(22)
    }
}

// MARK: - 8. Topics for today

private struct TopicsForTodaySection: View {
    @Binding var comingSoon: String?

    fileprivate struct Topic: Identifiable {
        let name: String
        /// Static descriptor — Topics isn't a real destination yet, so
        /// we don't fabricate verse counts. Kept short for tile fit.
        let descriptor: String
        let gradient: [Color]
        var id: String { name }
    }

    /// Four topic tiles. The descriptors below are intentionally generic
    /// ("verses on …") rather than fake counts ("12 verses") — when the
    /// Topics destination ships we can swap these to real counts pulled
    /// from the index.
    private static let topics: [Topic] = [
        Topic(name: "Anxiety",   descriptor: "Verses on calm",     gradient: F2.topicAnxiety),
        Topic(name: "Gratitude", descriptor: "Verses on praise",   gradient: F2.topicGratitude),
        Topic(name: "Patience",  descriptor: "Verses on waiting",  gradient: F2.topicPatience),
        Topic(name: "Faith",     descriptor: "Verses on trust",    gradient: F2.topicFaith),
    ]

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .firstTextBaseline) {
                Text("Topics for today")
                    .font(.system(size: 16, weight: .semibold))
                    .tracking(-0.2)
                    .foregroundStyle(F2.ink)
                Spacer()
                Text("All →")
                    .font(.system(size: 12))
                    .foregroundStyle(F2.ink3)
            }
            .padding(.horizontal, 22)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    ForEach(Self.topics) { topic in
                        Button {
                            comingSoon = "Topics — coming soon. Browse verses by theme (\(topic.name.lowercased()), and more)."
                        } label: {
                            TopicTile(topic: topic)
                        }
                        .buttonStyle(.plain)
                    }
                }
                .padding(.horizontal, 22)
            }
            .scrollClipDisabled()
        }
    }

    fileprivate struct TopicTile: View {
        let topic: Topic

        var body: some View {
            ZStack(alignment: .topLeading) {
                RoundedRectangle(cornerRadius: 20, style: .continuous)
                    .fill(F2.diag(topic.gradient))

                // Decorative circle (offset top:-16 right:-16, size 80)
                Circle()
                    .fill(Color.white.opacity(0.22))
                    .frame(width: 80, height: 80)
                    .offset(x: 130 - 80 + 16, y: -16)
                    .allowsHitTesting(false)

                VStack(alignment: .leading, spacing: 0) {
                    Text("TOPIC")
                        .font(.system(size: 10, weight: .semibold))
                        .tracking(1.0)
                        .foregroundStyle(Color.white.opacity(0.85))
                    Spacer()
                    Text(topic.name)
                        .font(serifFont(22))
                        .foregroundStyle(.white)
                    Text(topic.descriptor)
                        .font(.system(size: 10))
                        .foregroundStyle(Color.white.opacity(0.85))
                        .padding(.top, 4)
                }
                .padding(14)
                .frame(width: 130, height: 150, alignment: .topLeading)
            }
            .frame(width: 130, height: 150)
            .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
            .shadow(
                color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.18),
                radius: 22, y: 10
            )
        }
    }
}

// MARK: - 9. Lock-screen widgets pitch

private struct LockScreenPromoCard: View {
    let onTap: () -> Void

    var body: some View {
        Button(action: onTap) { content }
            .buttonStyle(.plain)
    }

    private var content: some View {
        HStack(spacing: 12) {
            // Icon block (40×40, 10 corner, faint blue gradient + border)
            ZStack {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(red: 123/255, green: 176/255, blue: 229/255).opacity(0.25),
                                Color(red: 42/255, green: 90/255, blue: 146/255).opacity(0.18),
                            ],
                            startPoint: .topLeading, endPoint: .bottomTrailing
                        )
                    )
                Image(systemName: "square.grid.2x2")
                    .font(.system(size: 18, weight: .regular))
                    .foregroundStyle(F2.accent)
            }
            .frame(width: 40, height: 40)
            .overlay(
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke(Color(red: 123/255, green: 176/255, blue: 229/255).opacity(0.35), lineWidth: 0.5)
            )

            VStack(alignment: .leading, spacing: 2) {
                Text("Add to your lock screen")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Text("Verse, progress, and streak widgets")
                    .font(.system(size: 11))
                    .foregroundStyle(F2.ink3)
            }

            Spacer(minLength: 0)

            Image(systemName: "chevron.right")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink3)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .frame(maxWidth: .infinity)
        .f2Glass(18)
    }
}

// MARK: - "Coming soon" + Widgets-help sheets
//
// Reusable bottom sheets surfaced by KeepReadingRow (study plans, topics,
// audio bible, questions), TopicsForTodaySection, and the more-menu's
// notifications/help items. We intentionally do NOT silently no-op a
// tile tap — the audit calls that out as the wrong move.

private struct ComingSoonSheet: View {
    let message: String
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            F2.background.ignoresSafeArea()

            VStack(spacing: 18) {
                Capsule()
                    .fill(F2.ink.opacity(0.18))
                    .frame(width: 42, height: 5)
                    .padding(.top, 10)

                Image(systemName: "sparkles")
                    .font(.system(size: 28, weight: .light))
                    .foregroundStyle(F2.accent)
                    .padding(.top, 12)

                Text("Coming soon")
                    .font(.system(size: 20, weight: .semibold))
                    .foregroundStyle(F2.ink)

                Text(message)
                    .font(.system(size: 14))
                    .foregroundStyle(F2.ink2)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 26)
                    .lineSpacing(2)

                Spacer()

                Button {
                    dismiss()
                } label: {
                    Text("Got it")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Capsule().fill(F2.ink))
                }
                .buttonStyle(.plain)
                .padding(.horizontal, 22)
                .padding(.bottom, 22)
            }
        }
    }
}

private struct WidgetsHelpSheet: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            F2.background.ignoresSafeArea()

            VStack(alignment: .leading, spacing: 0) {
                Capsule()
                    .fill(F2.ink.opacity(0.18))
                    .frame(width: 42, height: 5)
                    .frame(maxWidth: .infinity)
                    .padding(.top, 10)

                Text("Add to your lock screen")
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundStyle(F2.ink)
                    .padding(.top, 18)
                    .padding(.horizontal, 22)

                Text("Get the verse of the day, your reading progress, and your streak right on the lock screen.")
                    .font(.system(size: 13))
                    .foregroundStyle(F2.ink2)
                    .padding(.top, 8)
                    .padding(.horizontal, 22)
                    .lineSpacing(2)

                VStack(alignment: .leading, spacing: 14) {
                    instructionRow(num: 1, text: "Long-press the lock screen and tap Customize.")
                    instructionRow(num: 2, text: "Choose the Lock Screen layout, then tap a widget slot.")
                    instructionRow(num: 3, text: "Search \"Learn of Christ\" and pick the widget you want.")
                    instructionRow(num: 4, text: "Tap Done to save.")
                }
                .padding(.top, 22)
                .padding(.horizontal, 22)

                Spacer()

                Button { dismiss() } label: {
                    Text("Got it")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Capsule().fill(F2.ink))
                }
                .buttonStyle(.plain)
                .padding(.horizontal, 22)
                .padding(.bottom, 22)
            }
        }
    }

    private func instructionRow(num: Int, text: String) -> some View {
        HStack(alignment: .top, spacing: 12) {
            Text("\(num)")
                .font(.system(size: 12, weight: .bold))
                .foregroundStyle(.white)
                .frame(width: 22, height: 22)
                .background(Circle().fill(F2.accent))
            Text(text)
                .font(.system(size: 13))
                .foregroundStyle(F2.ink2)
                .fixedSize(horizontal: false, vertical: true)
                .lineSpacing(2)
        }
    }
}

// MARK: - Sacred Art carousel + Blog strip
//
// These are exported because other places in the app reference them
// (per the agent instructions). They aren't shown on the new F² home
// screen but the types must remain compilable.

struct SacredArtCarousel: View {
    let artworks: [ArtworkPreview]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 14) {
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
            .padding(.horizontal, 22)
        }
        .scrollClipDisabled()
    }
}

struct SacredArtTile: View {
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
                    .font(serifFont(13, weight: .medium))
                    .foregroundStyle(.primary)
                    .lineLimit(1)
                    .padding(.horizontal, 4)
                if let artist = art.artist_name_cached {
                    Text(artist)
                        .font(.system(size: 11))
                        .foregroundStyle(.secondary)
                        .lineLimit(1)
                        .padding(.horizontal, 4)
                }
            }
        }
        .frame(width: 180)
    }
}

struct BlogStrip: View {
    let posts: [BlogPostPreview]

    var body: some View {
        VStack(spacing: 14) {
            ForEach(posts.prefix(2)) { post in
                NavigationLink(value: BrowseDestination.blog) {
                    BlogPostRow(post: post)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

struct BlogPostRow: View {
    let post: BlogPostPreview
    var body: some View {
        HStack(spacing: 14) {
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
                    .font(serifFont(17, weight: .semibold))
                    .foregroundStyle(.primary)
                    .lineLimit(2)
                if let excerpt = post.excerpt {
                    Text(excerpt)
                        .font(.system(size: 13))
                        .foregroundStyle(.secondary)
                        .lineLimit(2)
                }
            }
            Spacer(minLength: 0)
        }
        .padding(14)
        .f2Glass(24)
    }
}

// MARK: - Route helpers + Browse destinations
//
// `BrowseDestination` is the value pushed for the top-level browse
// cards (Bible grid, Library, Art, Blog). RootView wires this up via
// `.navigationDestination(for: BrowseDestination.self)`.

enum BrowseDestination: Hashable {
    case bible
    case library
    case art
    case blog
    // New native shared-content destinations — see SharedContentService /
    // StudyPlansListView / TopicsListView / QuestionsListView below.
    // These replaced the in-app Safari views for Study Plans, Topics,
    // Audio Bible, and Questions tiles. The screens fetch the same JSON
    // the web pages render from (/api/study-plans, /api/topics,
    // /api/questions), so a content edit on the site shows up in both
    // surfaces on next deploy.
    case studyPlans
    case topics
    case questions
}

// MARK: - Shared-content route values
//
// Detail screens for Study Plans / Topics / Questions take a small
// Hashable wrapper around the id so SwiftUI's NavigationStack can use
// them as distinct destination types from BrowseDestination.

struct StudyPlanRoute: Hashable {
    let id: String
}

struct TopicRoute: Hashable {
    let id: String
}

struct QuestionRoute: Hashable {
    let id: String
}

/// Tiny helper that converts a StoredReadingProgress row into a
/// ChapterRoute, returning nil when the row's bookSlug doesn't resolve.
enum HomeRoutes {
    static func route(for progress: StoredReadingProgress) -> ChapterRoute? {
        guard let book = BibleBookCatalog.book(for: progress.bookSlug) else { return nil }
        return ChapterRoute(book: book, chapter: progress.chapter)
    }
}
import SwiftUI

// MARK: – Persisted preferences

struct HomeSection: Identifiable, Codable, Equatable {
    let id: String
    let name: String
    var visible: Bool
}

enum HomeSectionPrefs {
    static let storageKey = "home.sectionOrder"

    static let defaults: [HomeSection] = [
        .init(id: "verse",    name: "Verse of the day",         visible: true),
        .init(id: "explore",  name: "Library / Continue reading", visible: true),
        .init(id: "plan",     name: "Today's plan",             visible: true),
        .init(id: "original", name: "From the original language", visible: true),
        .init(id: "topics",   name: "Topics for today",         visible: true),
        .init(id: "gallery",  name: "From the gallery",         visible: true),
        .init(id: "notes",    name: "Recent notes",             visible: true),
    ]

    static func decode(_ raw: String) -> [HomeSection] {
        guard let data = raw.data(using: .utf8),
              let decoded = try? JSONDecoder().decode([HomeSection].self, from: data),
              !decoded.isEmpty
        else { return defaults }
        // Merge in any newly added section ids that weren't in the user's saved order
        let known = Set(decoded.map { $0.id })
        let missing = defaults.filter { !known.contains($0.id) }
        return decoded + missing
    }

    static func encode(_ sections: [HomeSection]) -> String {
        guard let data = try? JSONEncoder().encode(sections),
              let str = String(data: data, encoding: .utf8)
        else { return "" }
        return str
    }
}

// MARK: – View

struct EditHomepageView: View {
    @Environment(\.dismiss) private var dismiss

    @AppStorage(HomeSectionPrefs.storageKey)
    private var raw: String = HomeSectionPrefs.encode(HomeSectionPrefs.defaults)

    @State private var sections: [HomeSection] = HomeSectionPrefs.defaults

    var body: some View {
        ZStack {
            F2.background.ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: 12) {
                    Text("Tap a section to hide it. Use the arrows to reorder — the order here is how they'll appear on your home screen.")
                        .font(.system(size: 12))
                        .foregroundStyle(F2.ink3)
                        .lineSpacing(2)
                        .padding(.horizontal, 4)

                    VStack(spacing: 0) {
                        ForEach(Array(sections.enumerated()), id: \.element.id) { idx, section in
                            row(idx: idx, section: section)
                            if idx < sections.count - 1 {
                                Rectangle()
                                    .fill(F2.ink.opacity(0.08))
                                    .frame(height: 0.5)
                                    .padding(.leading, 50)
                            }
                        }
                    }
                    .background(
                        RoundedRectangle(cornerRadius: 16, style: .continuous)
                            .fill(Color.white.opacity(0.55))
                    )
                    .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 16, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16, style: .continuous)
                            .stroke(Color.white.opacity(0.70), lineWidth: 0.5)
                    )
                    .shadow(
                        color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.08),
                        radius: 18, x: 0, y: 6
                    )

                    Text("Changes save automatically.")
                        .font(.system(size: 11))
                        .foregroundStyle(F2.ink4)
                        .frame(maxWidth: .infinity)
                        .padding(.top, 18)
                }
                .padding(.horizontal, 18)
                .padding(.top, 16)
                .padding(.bottom, 32)
            }
        }
        .navigationTitle("Edit homepage")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarLeading) {
                Button("Done") { dismiss() }
                    .foregroundStyle(F2.accent)
            }
        }
        .onAppear { sections = HomeSectionPrefs.decode(raw) }
        .onChange(of: sections) { _, newValue in
            raw = HomeSectionPrefs.encode(newValue)
        }
    }

    @ViewBuilder
    private func row(idx: Int, section: HomeSection) -> some View {
        HStack(spacing: 8) {
            VStack(spacing: 2) {
                Button { move(idx, by: -1) } label: {
                    Image(systemName: "chevron.up")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundStyle(F2.ink2)
                        .frame(width: 22, height: 18)
                }
                .buttonStyle(.plain)
                .opacity(idx == 0 ? 0.25 : 1)
                .disabled(idx == 0)

                Button { move(idx, by: 1) } label: {
                    Image(systemName: "chevron.down")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundStyle(F2.ink2)
                        .frame(width: 22, height: 18)
                }
                .buttonStyle(.plain)
                .opacity(idx == sections.count - 1 ? 0.25 : 1)
                .disabled(idx == sections.count - 1)
            }
            .padding(.trailing, 4)

            RoundedRectangle(cornerRadius: 2)
                .fill(section.visible ? F2.accent : F2.ink.opacity(0.12))
                .frame(width: 4, height: 30)
                .animation(.easeInOut(duration: 0.2), value: section.visible)

            VStack(alignment: .leading, spacing: 2) {
                Text(section.name)
                    .font(.system(size: 14, weight: .medium))
                    .strikethrough(!section.visible, color: F2.ink4)
                    .foregroundStyle(section.visible ? F2.ink : F2.ink3)
                Text(section.visible ? "Visible on homepage" : "Hidden")
                    .font(.system(size: 10))
                    .foregroundStyle(F2.ink3)
            }

            Spacer()

            Toggle("", isOn: Binding(
                get: { section.visible },
                set: { _ in toggle(idx) }
            ))
            .labelsHidden()
            .tint(F2.accent)
        }
        .padding(.vertical, 12)
        .padding(.leading, 14)
        .padding(.trailing, 12)
    }

    private func toggle(_ idx: Int) {
        guard sections.indices.contains(idx) else { return }
        sections[idx].visible.toggle()
    }

    private func move(_ idx: Int, by dir: Int) {
        let next = idx + dir
        guard sections.indices.contains(idx), sections.indices.contains(next) else { return }
        sections.swapAt(idx, next)
    }
}

#Preview {
    NavigationStack { EditHomepageView() }
}

// `import SwiftUI` is already at the top of the file — don't re-import here.

struct StreakSheet: View {
    let streak: Int
    /// Active reading goal — drives % complete, finish-by date, daily
    /// target, days-left, etc. throughout this sheet.
    let goal: BibleReadingGoal
    let chaptersRead: Int
    let history: Set<Date>       // distinct calendar days the user has read
    /// Tapping "Edit goal" calls this — the host dismisses the streak sheet
    /// and then presents EditGoalView.
    var onEditGoal: () -> Void = {}

    @Environment(\.dismiss) private var dismiss

    init(
        streak: Int = 1,
        goal: BibleReadingGoal = BibleReadingGoal.defaultGoal(),
        chaptersRead: Int = 0,
        history: Set<Date> = [],
        onEditGoal: @escaping () -> Void = {}
    ) {
        self.streak = streak
        self.goal = goal
        self.chaptersRead = chaptersRead
        self.history = history
        self.onEditGoal = onEditGoal
    }

    /// Derived: fraction of goal completed, 0…1.
    private var progress: Double {
        min(1.0, Double(streak) / Double(goal.targetDays))
    }
    /// Derived: how many days ahead of pace (clamped at 0).
    private var aheadDays: Int {
        max(0, streak - goal.currentDay())
    }
    /// Derived: total Bible chapters the goal will cover (constant for now).
    private var totalChapters: Int { goal.totalChapters }

    /// Standard streak milestones — the points worth celebrating between
    /// "you started" and "this is now part of your life".
    private static let milestones: [Int] = [5, 7, 14, 30, 60, 100, 200, 365]

    /// "X days until your N-day milestone" copy — only meaningful when
    /// the user is below the highest milestone we know about. Past that,
    /// we stop counting up and just affirm.
    fileprivate var milestoneCopy: String {
        if let next = Self.milestones.first(where: { $0 > streak }) {
            let delta = next - streak
            let dayWord = delta == 1 ? "day" : "days"
            return "\(delta) \(dayWord) until your \(next)-day milestone"
        }
        return "You're past 100 days — incredible."
    }

    /// Subtitle under "Daily Streak". Branches off the streak so a new
    /// reader gets welcomed and a long-time reader gets affirmed without
    /// the same line being shown to both.
    fileprivate var subtitleCopy: String {
        switch streak {
        case 0:        return "Today's a fresh start."
        case 1:        return "First step. Welcome."
        case 2..<7:    return "Keep showing up."
        case 7..<30:   return "Strong week. Strong month coming."
        case 30..<100: return "You've made this a habit."
        default:       return "Faithfulness compounds."
        }
    }

    /// Body copy under the milestone line. Slightly different cadence by
    /// streak — the through-line is "read one chapter today" but the
    /// flavor scales with how settled the habit feels.
    fileprivate var encouragementBody: String {
        switch streak {
        case 0:        return "Open any chapter — even one verse counts as starting."
        case 1:        return "Read one chapter today to make it two in a row."
        case 2..<7:    return "Read 1 chapter today to keep your streak going. Be still and steady."
        case 7..<30:   return "Keep the rhythm. One chapter today is enough."
        case 30..<100: return "You've built this. One chapter today, same as always."
        default:       return "One chapter today. You already know the rhythm."
        }
    }

    // F² blue streak gradient — reused throughout the sheet.
    private let streakGradient = LinearGradient(
        colors: [
            Color(red: 0.420, green: 0.608, blue: 0.847),   // #6B9BD8
            Color(red: 0.165, green: 0.353, blue: 0.573),   // #2A5A92
        ],
        startPoint: .topLeading, endPoint: .bottomTrailing
    )

    var body: some View {
        ZStack(alignment: .top) {
            // Light dotted-paper sheet background (#EAEFF1 with subtle dots).
            Color(red: 0.918, green: 0.937, blue: 0.945).ignoresSafeArea()

            ScrollView {
                VStack(spacing: 0) {
                    // Drag handle
                    Capsule()
                        .fill(F2.ink.opacity(0.18))
                        .frame(width: 42, height: 5)
                        .padding(.top, 8)
                        .padding(.bottom, 4)

                    // Flame circle
                    flameCircle
                        .padding(.top, 4)

                    // Big glassy number
                    bigStreakNumber

                    Text("Daily Streak")
                        .font(.system(size: 24, weight: .bold))
                        .tracking(-0.4)
                        .foregroundStyle(F2.ink)
                        .padding(.top, -8)

                    Text(subtitleCopy)
                        .font(.system(size: 13))
                        .foregroundStyle(F2.ink3)
                        .padding(.top, 4)

                    weekDots
                        .padding(.horizontal, 22)
                        .padding(.top, 24)

                    statsCard
                        .padding(.horizontal, 18)
                        .padding(.top, 28)

                    goalTrackerCard
                        .padding(.horizontal, 18)
                        .padding(.top, 20)

                    encouragementCard
                        .padding(.horizontal, 18)
                        .padding(.top, 14)

                    primaryCTA
                        .padding(.horizontal, 18)
                        .padding(.top, 18)
                        .padding(.bottom, 28)
                }
                .frame(maxWidth: .infinity)
            }
        }
        .presentationDetents([.large])
        .presentationDragIndicator(.hidden)
    }

    // MARK: – Header

    private var flameCircle: some View {
        ZStack {
            Circle()
                .fill(Color.white)
                .frame(width: 108, height: 108)
                .overlay(
                    Circle().stroke(F2.ink.opacity(0.06), lineWidth: 0.5)
                )
                .shadow(
                    color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.10),
                    radius: 22, x: 0, y: 10
                )
            Image("flame")
                .resizable()
                .scaledToFit()
                .frame(width: 60, height: 60)
                .offset(y: -10)
        }
    }

    private var bigStreakNumber: some View {
        ZStack {
            // White glow behind the number
            Ellipse()
                .fill(
                    RadialGradient(
                        colors: [
                            Color.white.opacity(0.95),
                            Color.white.opacity(0.7),
                            Color.white.opacity(0),
                        ],
                        center: .center, startRadius: 0, endRadius: 70
                    )
                )
                .frame(width: 160, height: 100)
                .blur(radius: 4)
                .offset(y: -10)

            Text("\(streak)")
                .font(.system(size: 78, weight: .heavy))
                .tracking(-3)
                .foregroundStyle(
                    LinearGradient(
                        colors: [
                            Color(red: 0.165, green: 0.208, blue: 0.282), // #2A3548
                            Color(red: 0.059, green: 0.102, blue: 0.180), // #0F1A2E
                        ],
                        startPoint: .top, endPoint: .bottom
                    )
                )
        }
        .frame(height: 80)
        .offset(y: -34)
    }

    // MARK: – Week dots

    private var weekDots: some View {
        let weekdays = ["M", "T", "W", "T", "F", "S", "S"]
        let cal = Calendar(identifier: .gregorian)
        let now = Date()
        // ISO week: Monday-based. Find Monday this week.
        var startOfWeek = cal.startOfDay(for: now)
        let weekdayNumber = cal.component(.weekday, from: startOfWeek)
        // weekday 1 = Sunday in Gregorian. We want Monday = 1.
        let daysSinceMonday = (weekdayNumber + 5) % 7
        startOfWeek = cal.date(byAdding: .day, value: -daysSinceMonday, to: startOfWeek) ?? startOfWeek

        let days: [(label: String, date: Date, isToday: Bool, done: Bool)] = (0..<7).map { i in
            let date = cal.date(byAdding: .day, value: i, to: startOfWeek) ?? startOfWeek
            let label = weekdays[i]
            let isToday = cal.isDate(date, inSameDayAs: now)
            let done = history.contains(cal.startOfDay(for: date)) && !isToday
            return (label, date, isToday, done)
        }

        return HStack(spacing: 8) {
            ForEach(Array(days.enumerated()), id: \.offset) { idx, day in
                VStack(spacing: 8) {
                    Text(day.label)
                        .font(.system(size: 13, weight: day.isToday ? .bold : .medium))
                        .foregroundStyle(day.done || day.isToday ? F2.ink : F2.ink4)
                    if day.done {
                        ZStack {
                            Circle().fill(streakGradient)
                                .frame(width: 34, height: 34)
                                .shadow(
                                    color: Color(red: 70/255, green: 110/255, blue: 170/255).opacity(0.32),
                                    radius: 4, x: 0, y: 4
                                )
                            Image(systemName: "checkmark")
                                .font(.system(size: 13, weight: .bold))
                                .foregroundStyle(.white)
                        }
                    } else {
                        Text("\(Calendar.current.component(.day, from: day.date))")
                            .font(.system(size: 16, weight: day.isToday ? .bold : .medium))
                            .foregroundStyle(day.isToday ? F2.ink : F2.ink4)
                            .frame(width: 34, height: 34)
                    }
                }
                .frame(maxWidth: .infinity)
            }
        }
    }

    // MARK: – Stats card

    private var statsCard: some View {
        let monthCount = Calendar.current.dateComponents([.day],
            from: Calendar.current.date(from: Calendar.current.dateComponents([.year, .month], from: Date())) ?? Date(),
            to: Date()
        ).day ?? 0

        // Minutes is an order-of-magnitude estimate: ~5 minutes per
        // chapter read. We don't track real reading time yet — flagged
        // here so it's easy to swap for a tracked value later.
        let entries: [(label: String, value: Int)] = [
            ("Days", max(streak, history.count)),
            ("Chapters", chaptersRead),
            ("Minutes", chaptersRead * 5),
        ]
        _ = monthCount

        return VStack(spacing: 0) {
            Text("Your Stats")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink)
                .frame(maxWidth: .infinity)
                .padding(.top, 14)
                .padding(.bottom, 12)
                .overlay(
                    Rectangle()
                        .fill(F2.ink.opacity(0.08))
                        .frame(height: 0.5),
                    alignment: .bottom
                )

            HStack(spacing: 0) {
                ForEach(Array(entries.enumerated()), id: \.offset) { idx, e in
                    VStack(spacing: 6) {
                        Text(e.label)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(F2.ink3)
                        Text("\(e.value)")
                            .font(.system(size: 24, weight: .heavy))
                            .tracking(-0.5)
                            .foregroundStyle(F2.ink)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 4)

                    if idx < entries.count - 1 {
                        Rectangle()
                            .fill(F2.ink.opacity(0.08))
                            .frame(width: 0.5)
                            .padding(.vertical, 6)
                    }
                }
            }
            .padding(.horizontal, 18)
            .padding(.vertical, 14)
        }
        .background(
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .fill(Color.white)
                .shadow(
                    color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.06),
                    radius: 14, x: 0, y: 4
                )
        )
        .overlay(
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .stroke(F2.ink.opacity(0.07), lineWidth: 0.5)
        )
    }

    // MARK: – Goal tracker

    private var goalTrackerCard: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Heading row — "Edit goal" is now an actual button that
            // opens EditGoalView via the onEditGoal callback.
            HStack {
                Text("My goal tracker")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(F2.ink)
                Spacer()
                Button(action: onEditGoal) {
                    HStack(spacing: 3) {
                        Image(systemName: "pencil")
                            .font(.system(size: 10, weight: .semibold))
                        Text("Edit goal")
                            .font(.system(size: 11, weight: .medium))
                    }
                    .foregroundStyle(F2.accent)
                }
                .buttonStyle(.plain)
            }
            .padding(.horizontal, 4)
            .padding(.bottom, 10)

            VStack(alignment: .leading, spacing: 0) {
                HStack(alignment: .top, spacing: 12) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(goal.fullLabel)
                            .font(.system(size: 15, weight: .bold))
                            .foregroundStyle(F2.ink)
                        // Dynamic target end date — driven by the goal,
                        // not the calendar year.
                        (Text("Finish by ")
                         + Text(goal.targetEndDate, format: .dateTime.month(.abbreviated).day().year()))
                            .font(.system(size: 11))
                            .foregroundStyle(F2.ink3)
                    }
                    Spacer()
                    HStack(spacing: 5) {
                        Circle()
                            .fill(F2.accent)
                            .frame(width: 6, height: 6)
                        Text(streak >= goal.currentDay() ? "ON TRACK" : "CATCH UP")
                            .font(.system(size: 10, weight: .bold))
                            .tracking(0.4)
                            .foregroundStyle(F2.accent)
                    }
                    .padding(.horizontal, 10)
                    .padding(.vertical, 4)
                    .background(Capsule().fill(F2.accent.opacity(0.12)))
                }

                // Day X of N — both numbers come from the goal.
                HStack(alignment: .firstTextBaseline, spacing: 8) {
                    Text("Day \(goal.currentDay()) of \(goal.targetDays)")
                        .font(.system(size: 28, weight: .heavy))
                        .tracking(-0.8)
                        .foregroundStyle(F2.ink)
                    if chaptersRead > 0 {
                        Text("· \(chaptersRead) chapter\(chaptersRead == 1 ? "" : "s") read")
                            .font(.system(size: 12))
                            .foregroundStyle(F2.ink3)
                    }
                }
                .padding(.top, 18)

                // Progress bar with tick mark — both fractions come from
                // the goal so the bar represents reading the Bible at the
                // user's chosen pace, not the calendar year.
                GeometryReader { geo in
                    ZStack(alignment: .leading) {
                        Capsule()
                            .fill(F2.ink.opacity(0.08))
                            .frame(height: 8)
                        Capsule()
                            .fill(streakGradient)
                            .frame(width: max(8, geo.size.width * CGFloat(progress)), height: 8)
                            .shadow(
                                color: Color(red: 70/255, green: 110/255, blue: 170/255).opacity(0.3),
                                radius: 3, x: 0, y: 1
                            )
                        // Tick at today's expected position in the plan.
                        let dayFraction: CGFloat = min(1.0,
                            CGFloat(goal.currentDay()) / CGFloat(goal.targetDays))
                        RoundedRectangle(cornerRadius: 1)
                            .fill(F2.ink3)
                            .frame(width: 2, height: 14)
                            .offset(x: geo.size.width * dayFraction - 1, y: -3)
                    }
                }
                .frame(height: 14)
                .padding(.top, 12)

                // Three pace cells. Daily target = chapters / goalDays.
                HStack(spacing: 0) {
                    paceCell(value: "+\(aheadDays)", label: "ahead", accent: true)
                    Rectangle()
                        .fill(F2.ink.opacity(0.08))
                        .frame(width: 0.5)
                    paceCell(value: dailyTargetLabel, label: "daily target", accent: false)
                    Rectangle()
                        .fill(F2.ink.opacity(0.08))
                        .frame(width: 0.5)
                    paceCell(value: "\(daysLeft)", label: "days left", accent: false)
                }
                .padding(.top, 14)
                .overlay(
                    Rectangle()
                        .fill(F2.ink.opacity(0.08))
                        .frame(height: 0.5),
                    alignment: .top
                )

                CalendarHeatmap(history: history, gradient: streakGradient)
                    .padding(.top, 18)

                HStack(spacing: 14) {
                    legendDot(streakGradient, label: "Read")
                    legendDotRing(label: "Today")
                    legendDotPlain(F2.ink.opacity(0.06), label: "Upcoming")
                }
                .font(.system(size: 10))
                .foregroundStyle(F2.ink3)
                .padding(.top, 14)
                .frame(maxWidth: .infinity)
            }
            .padding(18)
            .background(
                RoundedRectangle(cornerRadius: 22, style: .continuous)
                    .fill(Color.white)
                    .shadow(
                        color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.06),
                        radius: 14, x: 0, y: 4
                    )
            )
            .overlay(
                RoundedRectangle(cornerRadius: 22, style: .continuous)
                    .stroke(F2.ink.opacity(0.07), lineWidth: 0.5)
            )
        }
    }

    private var daysLeft: Int {
        max(0, goal.targetDays - goal.currentDay())
    }

    /// Arithmetic: total chapters / goal days. Formatted to one decimal
    /// place so common values like "3.3" or "13.2" read naturally.
    private var dailyTargetLabel: String {
        String(format: "%.1f", goal.chaptersPerDay)
    }

    private func paceCell(value: String, label: String, accent: Bool) -> some View {
        VStack(spacing: 3) {
            Text(value)
                .font(.system(size: 18, weight: .heavy))
                .tracking(-0.4)
                .foregroundStyle(accent ? F2.accent : F2.ink)
            Text(label)
                .font(.system(size: 10))
                .tracking(0.2)
                .foregroundStyle(F2.ink3)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 2)
    }

    private func legendDot(_ fill: LinearGradient, label: String) -> some View {
        HStack(spacing: 4) {
            RoundedRectangle(cornerRadius: 2)
                .fill(fill)
                .frame(width: 8, height: 8)
            Text(label)
        }
    }

    private func legendDotRing(label: String) -> some View {
        HStack(spacing: 4) {
            RoundedRectangle(cornerRadius: 2)
                .stroke(F2.ink3, lineWidth: 1.5)
                .frame(width: 8, height: 8)
            Text(label)
        }
    }

    private func legendDotPlain(_ fill: Color, label: String) -> some View {
        HStack(spacing: 4) {
            RoundedRectangle(cornerRadius: 2)
                .fill(fill)
                .frame(width: 8, height: 8)
            Text(label)
        }
    }

    // MARK: – Encouragement

    private var encouragementCard: some View {
        HStack(alignment: .top, spacing: 12) {
            ZStack {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(streakGradient)
                    .frame(width: 32, height: 32)
                    .shadow(
                        color: Color(red: 70/255, green: 110/255, blue: 170/255).opacity(0.32),
                        radius: 4, x: 0, y: 4
                    )
                Image("flame")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 20, height: 20)
                    .colorMultiply(.white)
            }
            VStack(alignment: .leading, spacing: 3) {
                Text(milestoneCopy)
                    .font(.system(size: 13, weight: .bold))
                    .foregroundStyle(F2.ink)
                Text(encouragementBody)
                    .font(.system(size: 12))
                    .foregroundStyle(F2.ink2)
                    .lineSpacing(2)
            }
            Spacer(minLength: 0)
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(Color(red: 0.482, green: 0.627, blue: 0.824).opacity(0.15))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .stroke(F2.accent.opacity(0.18), lineWidth: 0.5)
        )
    }

    // MARK: – CTA

    private var primaryCTA: some View {
        Button { dismiss() } label: {
            Text("Keep the flame")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(
                    Capsule().fill(F2.ink)
                )
                .shadow(
                    color: Color(red: 15/255, green: 40/255, blue: 70/255).opacity(0.22),
                    radius: 14, x: 0, y: 6
                )
        }
        .buttonStyle(.plain)
    }
}

// MARK: – 12-month calendar heatmap

private struct CalendarHeatmap: View {
    let history: Set<Date>
    let gradient: LinearGradient

    private let monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"]

    var body: some View {
        let cal = Calendar(identifier: .gregorian)
        let year = cal.component(.year, from: Date())
        let today = cal.startOfDay(for: Date())

        VStack(spacing: 4) {
            ForEach(0..<12, id: \.self) { month in
                HStack(spacing: 6) {
                    Text(monthLabels[month])
                        .font(.system(size: 9, weight: .semibold))
                        .tracking(0.2)
                        .foregroundStyle(F2.ink3)
                        .frame(width: 14, alignment: .center)

                    let daysInMonth: Int = {
                        let comps = DateComponents(year: year, month: month + 1)
                        let firstOfMonth = cal.date(from: comps) ?? Date()
                        return cal.range(of: .day, in: .month, for: firstOfMonth)?.count ?? 31
                    }()

                    HStack(spacing: 2) {
                        ForEach(0..<31, id: \.self) { day in
                            if day < daysInMonth {
                                let date = cal.date(from: DateComponents(year: year, month: month + 1, day: day + 1)) ?? Date()
                                let isToday = cal.isDate(date, inSameDayAs: today)
                                let isPast = date < today
                                let read = history.contains(cal.startOfDay(for: date))

                                cell(isToday: isToday, isPast: isPast, read: read)
                            } else {
                                Color.clear.frame(maxWidth: .infinity)
                            }
                        }
                    }
                }
            }
        }
    }

    @ViewBuilder
    private func cell(isToday: Bool, isPast: Bool, read: Bool) -> some View {
        let baseShape = RoundedRectangle(cornerRadius: 2, style: .continuous)
        Group {
            if isToday {
                baseShape
                    .stroke(F2.accent, lineWidth: 1.5)
            } else if read {
                baseShape.fill(gradient)
            } else if isPast {
                baseShape.fill(F2.ink.opacity(0.14))
            } else {
                baseShape.fill(F2.ink.opacity(0.06))
            }
        }
        .aspectRatio(1, contentMode: .fit)
        .frame(maxWidth: .infinity)
    }
}

#Preview {
    StreakSheet(streak: 1)
}

// ============================================================================
// MARK: - Bible Reading Goal
// ============================================================================
//
// The user picks a duration (3 months / 6 months / 9 months / 1 year / 2 years
// / custom). The model computes a daily chapters-per-day target from the
// goal's total chapters (default: 1189 — full Protestant canon).
//
// Persistence: `@AppStorage("bible.goal")` holds JSON encoded by
// `BibleGoalPrefs.encode(_:)`. Decode with `BibleGoalPrefs.decode(_:)`.
//
// In v1.x onboarding will set this on first launch.

struct BibleReadingGoal: Codable, Equatable {
    /// Date the user committed to the plan. Day 1 of the plan is `startDate`.
    var startDate: Date
    /// Total number of days the user has chosen to finish the Bible in.
    var targetDays: Int
    /// Total chapters in the chosen canon. 1189 for the Protestant Bible —
    /// sensible default; can change later for canon options.
    var totalChapters: Int

    static let defaultTotalChapters: Int = 1189

    /// Reasonable starter goal — 1 year from the moment of first launch.
    static func defaultGoal() -> BibleReadingGoal {
        BibleReadingGoal(
            startDate: Calendar.current.startOfDay(for: Date()),
            targetDays: 365,
            totalChapters: defaultTotalChapters
        )
    }

    /// 1-based "day of the plan". Day 1 is the start date. Caps at
    /// `targetDays`; the consumer should display a different end state.
    func currentDay(now: Date = Date()) -> Int {
        let cal = Calendar.current
        let start = cal.startOfDay(for: startDate)
        let today = cal.startOfDay(for: now)
        let delta = cal.dateComponents([.day], from: start, to: today).day ?? 0
        return max(1, min(targetDays, delta + 1))
    }

    /// Target end date, derived from start + targetDays - 1 (inclusive of
    /// day 1). Used for "Finish by …" labels.
    var targetEndDate: Date {
        Calendar.current.date(byAdding: .day, value: targetDays - 1, to: startDate) ?? startDate
    }

    /// Chapters-per-day required to hit the goal on time. The arithmetic
    /// is intentionally exposed so the UI can show "13.2 ch/day" honestly.
    var chaptersPerDay: Double {
        guard targetDays > 0 else { return 0 }
        return Double(totalChapters) / Double(targetDays)
    }

    /// Short eyebrow label — what the dark-navy hero shows. Examples:
    /// "BIBLE IN 3 MONTHS", "BIBLE IN A YEAR", "BIBLE IN 18 MONTHS".
    var eyebrowLabel: String {
        "Bible in \(naturalDurationLabel)"
    }

    /// Longer card label — e.g. "Bible in a year", "Bible in 6 months".
    var fullLabel: String { eyebrowLabel }

    /// "3 months" / "a year" / "18 months" / "2 years" / "120 days" —
    /// picks the most natural reading for `targetDays`.
    var naturalDurationLabel: String {
        switch targetDays {
        case 365:  return "a year"
        case 730:  return "2 years"
        case 1095: return "3 years"
        default:
            if targetDays % 30 == 0 && targetDays >= 60 {
                let months = targetDays / 30
                return months == 12 ? "a year" : "\(months) months"
            }
            return "\(targetDays) days"
        }
    }
}

/// AppStorage glue.
enum BibleGoalPrefs {
    static let storageKey = "bible.goal"

    static func decode(_ raw: String) -> BibleReadingGoal {
        guard let data = raw.data(using: .utf8),
              let decoded = try? JSONDecoder().decode(BibleReadingGoal.self, from: data)
        else { return BibleReadingGoal.defaultGoal() }
        return decoded
    }

    static func encode(_ goal: BibleReadingGoal) -> String {
        guard let data = try? JSONEncoder().encode(goal),
              let str = String(data: data, encoding: .utf8)
        else { return "" }
        return str
    }
}

// ============================================================================
// MARK: - Edit Reading Goal screen
// ============================================================================

/// Lets the user pick a duration (or a custom end date) and shows the
/// computed daily reading target. Saves to `@AppStorage("bible.goal")` so
/// the home page reflects the change immediately.
struct EditGoalView: View {
    @Environment(\.dismiss) private var dismiss

    @AppStorage(BibleGoalPrefs.storageKey)
    private var raw: String = BibleGoalPrefs.encode(BibleReadingGoal.defaultGoal())

    /// Local working copy of the goal — committed to `raw` on save.
    @State private var working: BibleReadingGoal = BibleReadingGoal.defaultGoal()

    /// When true, the user is editing the end date directly (custom mode).
    @State private var customMode: Bool = false
    @State private var customDate: Date = Date()

    /// Preset durations the user can pick with one tap.
    private static let presets: [(label: String, days: Int)] = [
        ("90 days",  90),
        ("3 months", 91),
        ("6 months", 182),
        ("9 months", 273),
        ("1 year",   365),
        ("2 years",  730),
    ]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                header
                presetChips
                customDateBlock
                summaryCard
                saveButton
            }
            .padding(.horizontal, 20)
            .padding(.top, 12)
            .padding(.bottom, 40)
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("Reading goal")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarLeading) {
                Button("Cancel") { dismiss() }
                    .foregroundStyle(F2.ink2)
            }
        }
        .onAppear {
            working = BibleGoalPrefs.decode(raw)
            customDate = working.targetEndDate
            // Switch to custom mode if the persisted goal doesn't match a preset.
            customMode = !Self.presets.contains { $0.days == working.targetDays }
        }
    }

    // MARK: – Sections

    private var header: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("Read the whole Bible")
                .font(serifFont(28, weight: .medium))
                .foregroundStyle(F2.ink)
            Text("Pick a pace. We'll show you exactly how much to read each day to finish on time.")
                .font(.system(size: 13))
                .foregroundStyle(F2.ink3)
                .lineSpacing(2)
        }
    }

    private var presetChips: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("PRESETS")
                .font(.system(size: 10, weight: .bold))
                .tracking(1.2)
                .foregroundStyle(F2.ink3)

            LazyVGrid(columns: [GridItem(.flexible(), spacing: 10), GridItem(.flexible(), spacing: 10)], spacing: 10) {
                ForEach(Array(Self.presets.enumerated()), id: \.offset) { _, preset in
                    presetChip(label: preset.label, days: preset.days)
                }
            }
        }
    }

    private func presetChip(label: String, days: Int) -> some View {
        let isSelected = (!customMode && working.targetDays == days)
        return Button {
            customMode = false
            working.targetDays = days
            working.startDate = Calendar.current.startOfDay(for: Date())
        } label: {
            VStack(alignment: .leading, spacing: 4) {
                Text(label)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isSelected ? .white : F2.ink)
                Text(perDayLabel(forDays: days))
                    .font(.system(size: 11))
                    .foregroundStyle(isSelected ? Color.white.opacity(0.8) : F2.ink3)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(14)
            .background(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .fill(isSelected
                          ? AnyShapeStyle(F2.diag([F2.heroStart, F2.heroMid]))
                          : AnyShapeStyle(Color.white.opacity(0.55)))
            )
            .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 14, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .stroke(isSelected ? Color.clear : Color.white.opacity(0.7), lineWidth: 0.5)
            )
            .shadow(
                color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(isSelected ? 0.18 : 0.06),
                radius: isSelected ? 12 : 6, x: 0, y: 4
            )
        }
        .buttonStyle(.plain)
    }

    private var customDateBlock: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Text("CUSTOM END DATE")
                    .font(.system(size: 10, weight: .bold))
                    .tracking(1.2)
                    .foregroundStyle(F2.ink3)
                Spacer()
                Toggle("", isOn: $customMode)
                    .labelsHidden()
                    .tint(F2.accent)
            }
            if customMode {
                DatePicker(
                    "Finish by",
                    selection: $customDate,
                    in: minCustomEnd...maxCustomEnd,
                    displayedComponents: .date
                )
                .datePickerStyle(.graphical)
                .tint(F2.accent)
                .padding(12)
                .background(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .fill(Color.white.opacity(0.6))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .stroke(Color.white.opacity(0.7), lineWidth: 0.5)
                )
                .onChange(of: customDate) { _, newDate in
                    let start = Calendar.current.startOfDay(for: Date())
                    let days = max(1, Calendar.current.dateComponents([.day], from: start, to: newDate).day ?? 1) + 1
                    working.startDate = start
                    working.targetDays = days
                }
            }
        }
    }

    private var minCustomEnd: Date {
        Calendar.current.date(byAdding: .day, value: 7, to: Date()) ?? Date()
    }
    private var maxCustomEnd: Date {
        Calendar.current.date(byAdding: .year, value: 5, to: Date()) ?? Date()
    }

    private var summaryCard: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text("YOUR DAILY TARGET")
                .font(.system(size: 10, weight: .bold))
                .tracking(1.2)
                .foregroundStyle(Color.white.opacity(0.65))

            HStack(alignment: .firstTextBaseline, spacing: 6) {
                Text(String(format: "%.1f", working.chaptersPerDay))
                    .font(serifFont(40, weight: .medium))
                    .foregroundStyle(.white)
                Text("chapters / day")
                    .font(.system(size: 13))
                    .foregroundStyle(Color.white.opacity(0.7))
            }

            Divider().overlay(Color.white.opacity(0.15))

            HStack {
                summaryStat(value: "\(working.targetDays)", label: "days total")
                Spacer()
                summaryStat(value: timeReadableFor(working), label: "duration", align: .center)
                Spacer()
                summaryStat(value: "\(working.totalChapters)", label: "chapters", align: .trailing)
            }
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .fill(F2.diag([F2.heroStart, F2.heroMid, F2.heroEnd]))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .stroke(Color.white.opacity(0.08), lineWidth: 1)
        )
        .shadow(
            color: Color(red: 30/255, green: 60/255, blue: 110/255).opacity(0.20),
            radius: 22, x: 0, y: 10
        )
    }

    private func summaryStat(value: String, label: String, align: HorizontalAlignment = .leading) -> some View {
        VStack(alignment: align, spacing: 2) {
            Text(value)
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(.white)
            Text(label)
                .font(.system(size: 10))
                .foregroundStyle(Color.white.opacity(0.6))
        }
    }

    private var saveButton: some View {
        Button {
            // Snap start date to "today" so the plan starts now.
            working.startDate = Calendar.current.startOfDay(for: Date())
            raw = BibleGoalPrefs.encode(working)
            dismiss()
        } label: {
            HStack(spacing: 6) {
                Text("Save goal")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(.white)
                Image(systemName: "checkmark")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(.white)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(Capsule().fill(F2.ink))
            .shadow(
                color: Color(red: 15/255, green: 40/255, blue: 70/255).opacity(0.22),
                radius: 14, x: 0, y: 6
            )
        }
        .buttonStyle(.plain)
        .padding(.top, 6)
    }

    // MARK: – Helpers

    private func perDayLabel(forDays days: Int) -> String {
        let chPerDay = Double(BibleReadingGoal.defaultTotalChapters) / Double(days)
        return String(format: "%.1f ch / day", chPerDay)
    }

    private func timeReadableFor(_ goal: BibleReadingGoal) -> String {
        let d = goal.targetDays
        if d % 365 == 0 { return d == 365 ? "1 yr" : "\(d / 365) yrs" }
        if d % 30 == 0 && d >= 60 { return "\(d / 30) mo" }
        return "\(d) d"
    }
}

#Preview("Edit goal") {
    NavigationStack { EditGoalView() }
}

// ============================================================================
// MARK: - In-app web view (SFSafariViewController wrapper)
// ============================================================================
//
// `SafariSheet(url:)` presents an SFSafariViewController styled to match
// the app — pure-white chrome, navy tint, reader mode available. Used
// by Keep-Reading tiles that point at live pages on learnofchrist.com
// (Study Plans, Topics, Audio Bible, Questions). Loading live content
// means anything the team publishes on the site shows up in the app
// immediately — no app-store release needed.

import SafariServices

/// Lightweight `Identifiable` wrapper so we can use `.sheet(item:)`
/// with a plain `URL` (URLs don't conform to Identifiable on their own).
private struct IdentifiedURL: Identifiable {
    let url: URL
    var id: URL { url }
}

private struct SafariSheet: UIViewControllerRepresentable {
    let url: URL

    func makeUIViewController(context: Context) -> SFSafariViewController {
        let config = SFSafariViewController.Configuration()
        // Reader mode is per-site and per-page; turning it on by default
        // makes article pages (Topics body, Study Plan descriptions, etc.)
        // legible without the surrounding page chrome.
        config.entersReaderIfAvailable = false
        config.barCollapsingEnabled = true

        let controller = SFSafariViewController(url: url, configuration: config)
        controller.preferredControlTintColor = UIColor(named: "LCAccent")
            ?? UIColor(red: 42/255, green: 90/255, blue: 146/255, alpha: 1)
        controller.preferredBarTintColor = .white
        controller.dismissButtonStyle = .close
        return controller
    }

    func updateUIViewController(_ uiViewController: SFSafariViewController, context: Context) {}
}

// ============================================================================
// MARK: - Shared content models + service
// ============================================================================
//
// These types mirror the TypeScript constants under `src/data/study-plans.ts`,
// `src/data/topics.ts`, and `src/data/questions.ts`. The Next.js Route
// Handlers at /api/study-plans, /api/topics, /api/questions return them as
// JSON, and the iOS app decodes them here.
//
// Single source of truth lives in the .ts files. Edit there, redeploy,
// and both web + iOS reflect the change without an App Store update.
//
// Inlined in this file (rather than a separate Models/SharedContent.swift)
// to avoid xcodegen / pbxproj source-discovery churn — adding files to
// the project has been a paper cut in the past.

// MARK: Study Plans

struct StudyDay: Codable, Identifiable, Hashable {
    let day: Int
    let title: String
    let reading: String
    let readingLink: String   // e.g. "/bible/john/1"
    let focus: String
    var id: Int { day }
}

struct StudyPlan: Codable, Identifiable, Hashable {
    let id: String
    let name: String
    let description: String
    let duration: String          // e.g. "21 days"
    let difficulty: String        // "beginner" | "intermediate" | "advanced"
    let category: String
    let icon: String              // emoji
    let color: String             // Tailwind class — ignored on iOS
    let days: [StudyDay]
}

// MARK: Topics

struct TopicSection: Codable, Hashable {
    let title: String
    let content: String
}

struct TopicReading: Codable, Hashable {
    let reference: String
    let link: String
}

struct Topic: Codable, Identifiable, Hashable {
    let id: String
    let name: String
    let description: String
    let keyVerse: String
    let keyVerseReference: String
    let longDescription: String
    let sections: [TopicSection]
    let relatedTopics: [String]
    let keyVerses: [String]
    let bibleReading: [TopicReading]
}

// MARK: Questions

struct QuestionVerse: Codable, Hashable {
    let reference: String
    let text: String
}

struct QuestionReading: Codable, Hashable {
    let reference: String
    let link: String
}

struct Question: Codable, Identifiable, Hashable {
    let id: String
    let question: String
    let excerpt: String
    let category: String
    let answer: String
    let keyVerses: [QuestionVerse]
    let relatedQuestions: [String]
    let bibleReading: [QuestionReading]
}

// MARK: SharedContentService
//
// One actor that owns three in-memory caches (one per content set). The
// caches are populated on first list fetch and never invalidated — the
// content rarely changes and the app process is short-lived. If a detail
// fetch comes in before the list has been loaded we hit /api/<set>/<id>
// directly. No ETags / disk cache in this pass; live data flows through
// Vercel's CDN cache (the routes are `force-static`).
//
// Base URL is hardcoded to learnofchrist.com production. There is no dev
// override today — when one is needed, swap the base for a value read
// from Info.plist.

actor SharedContentService {
    static let shared = SharedContentService()

    private let base = URL(string: "https://learnofchrist.com")!

    private var studyPlansCache: [StudyPlan]?
    private var topicsCache: [Topic]?
    private var questionsCache: [Question]?

    // MARK: Study Plans

    func listStudyPlans() async throws -> [StudyPlan] {
        if let cached = studyPlansCache { return cached }
        let url = base.appendingPathComponent("api/study-plans")
        let decoded: [StudyPlan] = try await fetchJSON(url)
        studyPlansCache = decoded
        return decoded
    }

    func studyPlan(id: String) async throws -> StudyPlan {
        if let cached = studyPlansCache?.first(where: { $0.id == id }) { return cached }
        let url = base.appendingPathComponent("api/study-plans/\(id)")
        return try await fetchJSON(url)
    }

    // MARK: Topics

    func listTopics() async throws -> [Topic] {
        if let cached = topicsCache { return cached }
        let url = base.appendingPathComponent("api/topics")
        let decoded: [Topic] = try await fetchJSON(url)
        topicsCache = decoded
        return decoded
    }

    func topic(id: String) async throws -> Topic {
        if let cached = topicsCache?.first(where: { $0.id == id }) { return cached }
        let url = base.appendingPathComponent("api/topics/\(id)")
        return try await fetchJSON(url)
    }

    // MARK: Questions

    func listQuestions() async throws -> [Question] {
        if let cached = questionsCache { return cached }
        let url = base.appendingPathComponent("api/questions")
        let decoded: [Question] = try await fetchJSON(url)
        questionsCache = decoded
        return decoded
    }

    func question(id: String) async throws -> Question {
        if let cached = questionsCache?.first(where: { $0.id == id }) { return cached }
        let url = base.appendingPathComponent("api/questions/\(id)")
        return try await fetchJSON(url)
    }

    // MARK: Internals

    private func fetchJSON<T: Decodable>(_ url: URL) async throws -> T {
        let (data, resp) = try await URLSession.shared.data(from: url)
        guard let http = resp as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            let status = (resp as? HTTPURLResponse)?.statusCode ?? -1
            throw URLError(.badServerResponse, userInfo: [
                NSLocalizedDescriptionKey: "Shared content fetch failed (HTTP \(status))"
            ])
        }
        return try JSONDecoder().decode(T.self, from: data)
    }
}

// ============================================================================
// MARK: - Shared chapter-link helper
// ============================================================================
//
// Many of the shared-content payloads carry a `link` string of the form
// "/bible/john/1" — a path on the website. Both topic readings and
// question readings use this, and study plan day rows carry one as
// `readingLink`. This helper parses it back into a ChapterRoute so the
// tap target stays inside the app (and the reader can resolve the right
// pack).

private func chapterRoute(fromLink link: String) -> ChapterRoute? {
    // Expected shape: "/bible/<book-slug>/<chapter>"
    let parts = link.split(separator: "/").map(String.init)
    guard parts.count >= 3, parts[0] == "bible",
          let chapter = Int(parts[2]),
          let book = BibleBookCatalog.book(for: parts[1])
    else { return nil }
    return ChapterRoute(book: book, chapter: chapter)
}

// ============================================================================
// MARK: - Study Plans list + detail
// ============================================================================

struct StudyPlansListView: View {
    @State private var plans: [StudyPlan] = []
    @State private var loadFailed = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                Text("Study plans")
                    .font(serifFont(36, weight: .medium))
                    .foregroundStyle(F2.ink)
                    .padding(.horizontal, 22)
                    .padding(.top, 16)

                Text("Walk through Scripture day by day.")
                    .font(.system(size: 14))
                    .foregroundStyle(F2.ink3)
                    .padding(.horizontal, 22)
                    .padding(.top, 6)
                    .padding(.bottom, 18)

                if plans.isEmpty && !loadFailed {
                    placeholderRows
                } else if loadFailed {
                    errorState
                } else {
                    LazyVStack(spacing: 12) {
                        ForEach(plans) { plan in
                            NavigationLink(value: StudyPlanRoute(id: plan.id)) {
                                planCard(plan)
                            }
                            .buttonStyle(.plain)
                        }
                    }
                    .padding(.horizontal, 22)
                }

                Color.clear.frame(height: 40)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    private var placeholderRows: some View {
        VStack(spacing: 12) {
            ForEach(0..<3, id: \.self) { _ in
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(F2.ink.opacity(0.05))
                    .frame(height: 130)
            }
        }
        .padding(.horizontal, 22)
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load study plans")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Text("Check your connection and try again.")
                .font(.system(size: 13))
                .foregroundStyle(F2.ink3)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 32)
        .padding(.horizontal, 22)
    }

    private func planCard(_ plan: StudyPlan) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("\(plan.duration) \u{00B7} \(plan.category)")
                .font(.system(size: 11, weight: .semibold))
                .tracking(1.1)
                .foregroundStyle(F2.accent)

            Text(plan.name)
                .font(serifFont(22, weight: .medium))
                .foregroundStyle(F2.ink)
                .lineLimit(2)
                .multilineTextAlignment(.leading)

            Text(plan.description)
                .font(.system(size: 13))
                .foregroundStyle(F2.ink2)
                .lineLimit(3)
                .multilineTextAlignment(.leading)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(18)
        .f2Glass(18)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.listStudyPlans()
            await MainActor.run {
                self.plans = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}

struct StudyPlanDetailView: View {
    let planId: String

    @State private var plan: StudyPlan?
    @State private var loadFailed = false

    var body: some View {
        ScrollView {
            if let plan {
                VStack(alignment: .leading, spacing: 0) {
                    Text(plan.name)
                        .font(serifFont(32, weight: .medium))
                        .foregroundStyle(F2.ink)
                        .padding(.horizontal, 22)
                        .padding(.top, 14)

                    Text("\(plan.duration) \u{00B7} \(plan.category)")
                        .font(.system(size: 11, weight: .semibold))
                        .tracking(1.1)
                        .foregroundStyle(F2.accent)
                        .padding(.horizontal, 22)
                        .padding(.top, 8)

                    Text(plan.description)
                        .font(.system(size: 14))
                        .foregroundStyle(F2.ink2)
                        .lineSpacing(3)
                        .padding(.horizontal, 22)
                        .padding(.top, 14)

                    Text("Daily readings".uppercased())
                        .font(.system(size: 10, weight: .bold))
                        .tracking(1.4)
                        .foregroundStyle(F2.ink3)
                        .padding(.horizontal, 22)
                        .padding(.top, 28)
                        .padding(.bottom, 10)

                    LazyVStack(spacing: 10) {
                        ForEach(plan.days) { day in
                            dayRow(day)
                        }
                    }
                    .padding(.horizontal, 22)

                    Color.clear.frame(height: 40)
                }
            } else if loadFailed {
                errorState
            } else {
                ProgressView()
                    .frame(maxWidth: .infinity)
                    .padding(.top, 80)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    @ViewBuilder
    private func dayRow(_ day: StudyDay) -> some View {
        let route = chapterRoute(fromLink: day.readingLink)

        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 8) {
                Text("Day \(day.day)")
                    .font(.system(size: 11, weight: .semibold))
                    .tracking(1.1)
                    .foregroundStyle(F2.accent)
                Circle().fill(F2.ink4).frame(width: 3, height: 3)
                Text(day.reading)
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(F2.ink2)
                Spacer(minLength: 0)
            }

            Text(day.title)
                .font(serifFont(18, weight: .medium))
                .foregroundStyle(F2.ink)
                .multilineTextAlignment(.leading)

            Text(day.focus)
                .font(.system(size: 13))
                .foregroundStyle(F2.ink2)
                .lineSpacing(3)
                .multilineTextAlignment(.leading)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(16)
        .f2Glass(16)
        .overlay(alignment: .topTrailing) {
            if route != nil {
                Image(systemName: "chevron.right")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(F2.ink4)
                    .padding(16)
            }
        }
        .contentShape(Rectangle())
        .modifier(OptionalChapterLink(route: route))
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load this plan")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 80)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.studyPlan(id: planId)
            await MainActor.run {
                self.plan = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}

/// Wraps a tappable card in a NavigationLink iff the link resolves to a
/// ChapterRoute. When the link can't be parsed (unknown book slug, bad
/// shape) the card is rendered plain — better than a dead button.
private struct OptionalChapterLink: ViewModifier {
    let route: ChapterRoute?

    func body(content: Content) -> some View {
        if let route {
            NavigationLink(value: route) { content }
                .buttonStyle(.plain)
        } else {
            content
        }
    }
}

// ============================================================================
// MARK: - Topics list + detail
// ============================================================================

struct TopicsListView: View {
    @State private var topics: [Topic] = []
    @State private var loadFailed = false

    private let columns = [
        GridItem(.flexible(), spacing: 12),
        GridItem(.flexible(), spacing: 12),
    ]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                Text("Topics")
                    .font(serifFont(36, weight: .medium))
                    .foregroundStyle(F2.ink)
                    .padding(.horizontal, 22)
                    .padding(.top, 16)

                Text("Verses by theme.")
                    .font(.system(size: 14))
                    .foregroundStyle(F2.ink3)
                    .padding(.horizontal, 22)
                    .padding(.top, 6)
                    .padding(.bottom, 18)

                if topics.isEmpty && !loadFailed {
                    placeholderGrid
                } else if loadFailed {
                    errorState
                } else {
                    LazyVGrid(columns: columns, spacing: 12) {
                        ForEach(topics) { topic in
                            NavigationLink(value: TopicRoute(id: topic.id)) {
                                topicCard(topic)
                            }
                            .buttonStyle(.plain)
                        }
                    }
                    .padding(.horizontal, 22)
                }

                Color.clear.frame(height: 40)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    private var placeholderGrid: some View {
        LazyVGrid(columns: columns, spacing: 12) {
            ForEach(0..<6, id: \.self) { _ in
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(F2.ink.opacity(0.05))
                    .frame(height: 120)
            }
        }
        .padding(.horizontal, 22)
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load topics")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 32)
        .padding(.horizontal, 22)
    }

    private func topicCard(_ topic: Topic) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(topic.name)
                .font(serifFont(20, weight: .medium))
                .foregroundStyle(F2.ink)
                .lineLimit(2)
                .multilineTextAlignment(.leading)

            Text(topic.description)
                .font(.system(size: 12))
                .foregroundStyle(F2.ink3)
                .lineLimit(3)
                .multilineTextAlignment(.leading)

            Spacer(minLength: 0)
        }
        .frame(maxWidth: .infinity, minHeight: 120, alignment: .topLeading)
        .padding(16)
        .f2Glass(18)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.listTopics()
            await MainActor.run {
                self.topics = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}

struct TopicDetailView: View {
    let topicId: String

    @State private var topic: Topic?
    @State private var loadFailed = false

    var body: some View {
        ScrollView {
            if let topic {
                VStack(alignment: .leading, spacing: 0) {
                    Text(topic.name)
                        .font(serifFont(32, weight: .medium))
                        .foregroundStyle(F2.ink)
                        .padding(.horizontal, 22)
                        .padding(.top, 14)

                    // Key-verse pull quote
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Key verse".uppercased())
                            .font(.system(size: 10, weight: .bold))
                            .tracking(1.4)
                            .foregroundStyle(F2.accent)
                        Text("\u{201C}\(topic.keyVerse)\u{201D}")
                            .font(serifFont(18, weight: .regular))
                            .foregroundStyle(F2.ink)
                            .lineSpacing(4)
                            .multilineTextAlignment(.leading)
                        Text(topic.keyVerseReference)
                            .font(.system(size: 12, weight: .semibold))
                            .foregroundStyle(F2.ink3)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(18)
                    .f2Glass(18)
                    .padding(.horizontal, 22)
                    .padding(.top, 18)

                    Text(topic.longDescription)
                        .font(.system(size: 14))
                        .foregroundStyle(F2.ink2)
                        .lineSpacing(4)
                        .padding(.horizontal, 22)
                        .padding(.top, 22)

                    ForEach(Array(topic.sections.enumerated()), id: \.offset) { _, sec in
                        VStack(alignment: .leading, spacing: 8) {
                            Text(sec.title)
                                .font(serifFont(20, weight: .medium))
                                .foregroundStyle(F2.ink)
                            Text(sec.content)
                                .font(.system(size: 14))
                                .foregroundStyle(F2.ink2)
                                .lineSpacing(4)
                        }
                        .padding(.horizontal, 22)
                        .padding(.top, 24)
                    }

                    if !topic.keyVerses.isEmpty {
                        sectionHeader("Key verses")
                        VStack(spacing: 8) {
                            ForEach(topic.keyVerses, id: \.self) { ref in
                                referenceRow(ref)
                            }
                        }
                        .padding(.horizontal, 22)
                    }

                    if !topic.bibleReading.isEmpty {
                        sectionHeader("Bible reading")
                        VStack(spacing: 8) {
                            ForEach(topic.bibleReading, id: \.reference) { reading in
                                bibleReadingRow(reading)
                            }
                        }
                        .padding(.horizontal, 22)
                    }

                    if !topic.relatedTopics.isEmpty {
                        sectionHeader("Related topics")
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 8) {
                                ForEach(topic.relatedTopics, id: \.self) { related in
                                    NavigationLink(value: TopicRoute(id: related)) {
                                        Text(related.capitalized)
                                            .font(.system(size: 13, weight: .semibold))
                                            .foregroundStyle(F2.accent)
                                            .padding(.horizontal, 14)
                                            .padding(.vertical, 8)
                                            .background(Capsule().fill(F2.accent.opacity(0.12)))
                                    }
                                    .buttonStyle(.plain)
                                }
                            }
                            .padding(.horizontal, 22)
                        }
                    }

                    Color.clear.frame(height: 40)
                }
            } else if loadFailed {
                errorState
            } else {
                ProgressView()
                    .frame(maxWidth: .infinity)
                    .padding(.top, 80)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    private func sectionHeader(_ text: String) -> some View {
        Text(text.uppercased())
            .font(.system(size: 10, weight: .bold))
            .tracking(1.4)
            .foregroundStyle(F2.ink3)
            .padding(.horizontal, 22)
            .padding(.top, 28)
            .padding(.bottom, 10)
            .frame(maxWidth: .infinity, alignment: .leading)
    }

    /// Bare scripture-reference row. The string is rendered as-is — no
    /// chapter route resolution because the references include verse
    /// numbers (e.g. "Hebrews 11:6") that we don't navigate to yet.
    private func referenceRow(_ ref: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "text.quote")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(F2.accent)
            Text(ref)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink)
            Spacer(minLength: 0)
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .f2Glass(14)
    }

    @ViewBuilder
    private func bibleReadingRow(_ reading: TopicReading) -> some View {
        let route = chapterRoute(fromLink: reading.link)
        let content = HStack(spacing: 12) {
            Image(systemName: "book.closed")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(F2.accent)
            Text(reading.reference)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink)
                .multilineTextAlignment(.leading)
            Spacer(minLength: 0)
            if route != nil {
                Image(systemName: "chevron.right")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(F2.ink4)
            }
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .f2Glass(14)

        if let route {
            NavigationLink(value: route) { content }
                .buttonStyle(.plain)
        } else {
            content
        }
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load this topic")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 80)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.topic(id: topicId)
            await MainActor.run {
                self.topic = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}

// ============================================================================
// MARK: - Questions list + detail
// ============================================================================

struct QuestionsListView: View {
    @State private var questions: [Question] = []
    @State private var loadFailed = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                Text("Questions")
                    .font(serifFont(36, weight: .medium))
                    .foregroundStyle(F2.ink)
                    .padding(.horizontal, 22)
                    .padding(.top, 16)

                Text("Real answers from Scripture.")
                    .font(.system(size: 14))
                    .foregroundStyle(F2.ink3)
                    .padding(.horizontal, 22)
                    .padding(.top, 6)
                    .padding(.bottom, 18)

                if questions.isEmpty && !loadFailed {
                    placeholderRows
                } else if loadFailed {
                    errorState
                } else {
                    LazyVStack(spacing: 0, pinnedViews: []) {
                        ForEach(groupedQuestions, id: \.category) { group in
                            sectionHeader(group.category)
                            VStack(spacing: 10) {
                                ForEach(group.items) { q in
                                    NavigationLink(value: QuestionRoute(id: q.id)) {
                                        questionRow(q)
                                    }
                                    .buttonStyle(.plain)
                                }
                            }
                            .padding(.horizontal, 22)
                            .padding(.bottom, 6)
                        }
                    }
                }

                Color.clear.frame(height: 40)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    private struct CategoryGroup {
        let category: String
        let items: [Question]
    }

    /// Group by category preserving the order each category first
    /// appears in the source list. Stable group order matches the web.
    private var groupedQuestions: [CategoryGroup] {
        var order: [String] = []
        var buckets: [String: [Question]] = [:]
        for q in questions {
            if buckets[q.category] == nil {
                order.append(q.category)
                buckets[q.category] = []
            }
            buckets[q.category]?.append(q)
        }
        return order.map { CategoryGroup(category: $0, items: buckets[$0] ?? []) }
    }

    private func sectionHeader(_ text: String) -> some View {
        Text(text.uppercased())
            .font(.system(size: 10, weight: .bold))
            .tracking(1.4)
            .foregroundStyle(F2.ink3)
            .padding(.horizontal, 22)
            .padding(.top, 20)
            .padding(.bottom, 10)
            .frame(maxWidth: .infinity, alignment: .leading)
    }

    private func questionRow(_ q: Question) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(q.question)
                .font(serifFont(17, weight: .medium))
                .foregroundStyle(F2.ink)
                .multilineTextAlignment(.leading)
            Text(q.excerpt)
                .font(.system(size: 13))
                .foregroundStyle(F2.ink2)
                .lineLimit(2)
                .multilineTextAlignment(.leading)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .f2Glass(14)
    }

    private var placeholderRows: some View {
        VStack(spacing: 10) {
            ForEach(0..<4, id: \.self) { _ in
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .fill(F2.ink.opacity(0.05))
                    .frame(height: 80)
            }
        }
        .padding(.horizontal, 22)
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load questions")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 32)
        .padding(.horizontal, 22)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.listQuestions()
            await MainActor.run {
                self.questions = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}

struct QuestionDetailView: View {
    let questionId: String

    @State private var question: Question?
    @State private var loadFailed = false

    var body: some View {
        ScrollView {
            if let q = question {
                VStack(alignment: .leading, spacing: 0) {
                    Text(q.category.uppercased())
                        .font(.system(size: 10, weight: .bold))
                        .tracking(1.4)
                        .foregroundStyle(F2.accent)
                        .padding(.horizontal, 22)
                        .padding(.top, 16)

                    Text(q.question)
                        .font(serifFont(28, weight: .medium))
                        .foregroundStyle(F2.ink)
                        .padding(.horizontal, 22)
                        .padding(.top, 8)
                        .multilineTextAlignment(.leading)

                    // Render answer paragraphs split on blank lines.
                    let paragraphs = q.answer
                        .components(separatedBy: "\n\n")
                        .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
                        .filter { !$0.isEmpty }

                    VStack(alignment: .leading, spacing: 14) {
                        ForEach(Array(paragraphs.enumerated()), id: \.offset) { _, p in
                            Text(p)
                                .font(.system(size: 14))
                                .foregroundStyle(F2.ink2)
                                .lineSpacing(4)
                                .multilineTextAlignment(.leading)
                        }
                    }
                    .padding(.horizontal, 22)
                    .padding(.top, 16)

                    if !q.keyVerses.isEmpty {
                        sectionHeader("Key verses")
                        VStack(spacing: 10) {
                            ForEach(q.keyVerses, id: \.reference) { v in
                                keyVerseCard(v)
                            }
                        }
                        .padding(.horizontal, 22)
                    }

                    if !q.bibleReading.isEmpty {
                        sectionHeader("Bible reading")
                        VStack(spacing: 8) {
                            ForEach(q.bibleReading, id: \.reference) { r in
                                bibleReadingRow(r)
                            }
                        }
                        .padding(.horizontal, 22)
                    }

                    if !q.relatedQuestions.isEmpty {
                        sectionHeader("Related questions")
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 8) {
                                ForEach(q.relatedQuestions, id: \.self) { rid in
                                    NavigationLink(value: QuestionRoute(id: rid)) {
                                        Text(rid.replacingOccurrences(of: "-", with: " ").capitalized)
                                            .font(.system(size: 13, weight: .semibold))
                                            .foregroundStyle(F2.accent)
                                            .padding(.horizontal, 14)
                                            .padding(.vertical, 8)
                                            .background(Capsule().fill(F2.accent.opacity(0.12)))
                                    }
                                    .buttonStyle(.plain)
                                }
                            }
                            .padding(.horizontal, 22)
                        }
                    }

                    Color.clear.frame(height: 40)
                }
            } else if loadFailed {
                errorState
            } else {
                ProgressView()
                    .frame(maxWidth: .infinity)
                    .padding(.top, 80)
            }
        }
        .background(F2.background.ignoresSafeArea())
        .navigationTitle("")
        .navigationBarTitleDisplayMode(.inline)
        .task { await load() }
    }

    private func sectionHeader(_ text: String) -> some View {
        Text(text.uppercased())
            .font(.system(size: 10, weight: .bold))
            .tracking(1.4)
            .foregroundStyle(F2.ink3)
            .padding(.horizontal, 22)
            .padding(.top, 28)
            .padding(.bottom, 10)
            .frame(maxWidth: .infinity, alignment: .leading)
    }

    private func keyVerseCard(_ v: QuestionVerse) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(v.reference)
                .font(.system(size: 12, weight: .semibold))
                .tracking(0.6)
                .foregroundStyle(F2.accent)
            Text("\u{201C}\(v.text)\u{201D}")
                .font(serifFont(15, weight: .regular))
                .foregroundStyle(F2.ink)
                .lineSpacing(3)
                .multilineTextAlignment(.leading)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .f2Glass(14)
    }

    @ViewBuilder
    private func bibleReadingRow(_ reading: QuestionReading) -> some View {
        let route = chapterRoute(fromLink: reading.link)
        let content = HStack(spacing: 12) {
            Image(systemName: "book.closed")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(F2.accent)
            Text(reading.reference)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(F2.ink)
                .multilineTextAlignment(.leading)
            Spacer(minLength: 0)
            if route != nil {
                Image(systemName: "chevron.right")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(F2.ink4)
            }
        }
        .padding(.vertical, 12)
        .padding(.horizontal, 14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .f2Glass(14)

        if let route {
            NavigationLink(value: route) { content }
                .buttonStyle(.plain)
        } else {
            content
        }
    }

    private var errorState: some View {
        VStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 28))
                .foregroundStyle(F2.ink3)
            Text("Couldn't load this question")
                .font(serifFont(18, weight: .semibold))
                .foregroundStyle(F2.ink)
            Button("Try again") { Task { await load() } }
                .buttonStyle(.borderedProminent)
                .padding(.top, 4)
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 80)
    }

    private func load() async {
        do {
            let result = try await SharedContentService.shared.question(id: questionId)
            await MainActor.run {
                self.question = result
                self.loadFailed = false
            }
        } catch {
            await MainActor.run { self.loadFailed = true }
        }
    }
}
