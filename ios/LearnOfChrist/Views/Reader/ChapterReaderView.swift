// ChapterReaderView.swift
// ────────────────────────────────────────────────────────────────────────────
// Renders a RichChapterContent. Verse rows pick up live highlight + note
// state via SwiftData @Query (filtered to this book + chapter at init
// time) so toggling persistence anywhere in the view tree triggers a
// re-render here automatically.
//
// All visual references go through Theme. No hex literals, no system
// colors, no ad-hoc font sizes — when the redesign lands, it lands on
// Theme.swift, not here.

import SwiftUI
import SwiftData
import UIKit

struct ChapterReaderView: View {
    let chapter: RichChapterContent

    @Environment(UserDataStore.self) private var userData

    // Live SwiftData feeds — predicates capture (bookSlug, chapter) at
    // init time, then SwiftUI tracks changes for free.
    @Query private var highlights: [StoredHighlight]
    @Query private var notes: [StoredNote]

    @AppStorage(AppearancePreferences.Key.textSize)
    private var textSizeRaw: String = AppearancePreferences.TextSizePreference.medium.rawValue

    @State private var isBookmarked: Bool = false
    @State private var noteEditorVerse: Int?
    @State private var noteEditorBody: String = ""
    @State private var pendingShare: String?

    /// Set of verse numbers currently >= 50% on screen. The smallest
    /// is taken as the "user's place" and persisted on debounce.
    @State private var visibleVerses: Set<Int> = []
    /// Pinned target for one-time scroll restore on first appear; cleared
    /// after we resolve the proxy.scrollTo so we don't fight user scroll.
    @State private var pendingScrollTarget: Int?

    private var textSize: AppearancePreferences.TextSizePreference {
        AppearancePreferences.TextSizePreference(rawValue: textSizeRaw) ?? .medium
    }

    private var topVisibleVerse: Int? { visibleVerses.min() }

    init(chapter: RichChapterContent) {
        self.chapter = chapter
        let slug = chapter.bookSlug
        let chap = chapter.chapter
        _highlights = Query(
            filter: #Predicate<StoredHighlight> {
                $0.bookSlug == slug && $0.chapter == chap && $0.deletedAt == nil
            }
        )
        _notes = Query(
            filter: #Predicate<StoredNote> {
                $0.bookSlug == slug && $0.chapter == chap && $0.deletedAt == nil
            }
        )
    }

    var body: some View {
        ScrollViewReader { proxy in
            ScrollView {
                VStack(alignment: .leading, spacing: Theme.metric.readerSectionSpacing) {
                    header
                    ForEach(Array(chapter.intros.enumerated()), id: \.offset) { _, p in
                        Text(p)
                            .font(Theme.font.body)
                            .foregroundStyle(Theme.color.secondaryLabel)
                    }

                    ForEach(Array(chapter.sections.enumerated()), id: \.offset) { _, section in
                        SectionView(
                            section: section,
                            chapter: chapter,
                            highlightedVerses: highlightedVerseSet,
                            notedVerses: notedVerseSet,
                            onVerseAction: handle,
                            onVerseVisibilityChange: handleVerseVisibility
                        )
                    }
                }
                .padding(.horizontal, Theme.metric.readerHorizontalPadding)
                .padding(.vertical, Theme.metric.spaceL)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
            .background(Theme.color.background)
            .dynamicTypeSize(textSize.dynamicTypeSize)
            .navigationTitle("\(chapter.bookName) \(chapter.chapter)")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        isBookmarked = userData.toggleChapterBookmark(
                            bookSlug: chapter.bookSlug,
                            chapter: chapter.chapter
                        )
                    } label: {
                        Image(systemName: isBookmarked ? "bookmark.fill" : "bookmark")
                    }
                    .accessibilityLabel(isBookmarked ? "Remove bookmark" : "Bookmark this chapter")
                }
            }
            .onAppear {
                isBookmarked = userData.isChapterBookmarked(
                    bookSlug: chapter.bookSlug,
                    chapter: chapter.chapter
                )
                // Bump the timestamp so the Library tab surfaces this
                // chapter in Continue Reading. Preserves any existing
                // scroll resume position — we'll restore it below.
                userData.touchReadingProgress(
                    bookSlug: chapter.bookSlug,
                    chapter: chapter.chapter
                )
                // If the user has a saved resume verse, queue it for one
                // scroll-to as soon as the layout settles.
                if let saved = userData.readingProgress(
                    bookSlug: chapter.bookSlug,
                    chapter: chapter.chapter
                )?.lastVerseIndex,
                   saved > 0
                {
                    pendingScrollTarget = saved
                }
            }
            .task(id: pendingScrollTarget) {
                // ScrollViewReader needs a moment after appear before
                // it'll resolve scrollTo. A small delay also lets the
                // layout pass complete on slower devices.
                guard let target = pendingScrollTarget else { return }
                try? await Task.sleep(for: .milliseconds(150))
                if Task.isCancelled { return }
                withAnimation(.easeOut(duration: 0.25)) {
                    proxy.scrollTo(target, anchor: .top)
                }
                pendingScrollTarget = nil
            }
            .task(id: topVisibleVerse) {
                // Debounce visibility changes — saving on every scroll
                // tick would hammer SwiftData. 600ms of stability is
                // enough that the user has actually settled.
                guard let v = topVisibleVerse else { return }
                try? await Task.sleep(for: .milliseconds(600))
                if Task.isCancelled { return }
                userData.setReadingPosition(
                    bookSlug: chapter.bookSlug,
                    chapter: chapter.chapter,
                    verseNumber: v
                )
            }
            .sheet(item: noteEditorBinding) { verse in
                NoteEditorSheet(
                    bookSlug: chapter.bookSlug,
                    bookName: chapter.bookName,
                    chapter: chapter.chapter,
                    verse: verse.value,
                    initialBody: $noteEditorBody
                )
            }
            .sheet(item: shareBinding) { share in
                ActivityShareSheet(items: [share.value])
            }
        }
    }

    // MARK: - Visibility tracker

    private func handleVerseVisibility(verse: Int, isVisible: Bool) {
        if isVisible {
            visibleVerses.insert(verse)
        } else {
            visibleVerses.remove(verse)
        }
    }

    // MARK: - Header

    private var header: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS) {
            Text(chapter.bookName.uppercased())
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)
            Text("Chapter \(chapter.chapter)")
                .font(Theme.font.display)
                .foregroundStyle(Theme.color.label)
        }
    }

    // MARK: - State derived from @Query

    private var highlightedVerseSet: Set<Int> {
        var set = Set<Int>()
        for h in highlights where h.verseEnd >= h.verseStart {
            for v in h.verseStart...h.verseEnd { set.insert(v) }
        }
        return set
    }

    private var notedVerseSet: Set<Int> {
        Set(notes.map(\.verse))
    }

    // MARK: - Actions

    private func handle(_ action: VerseAction, line: VerseLine) {
        switch action {
        case .highlight:
            userData.addHighlight(
                bookSlug: chapter.bookSlug,
                chapter: chapter.chapter,
                verseStart: line.number
            )
        case .unhighlight:
            userData.removeHighlightsCovering(
                bookSlug: chapter.bookSlug,
                chapter: chapter.chapter,
                verse: line.number
            )
        case .openNote:
            let existing = notes.first(where: { $0.verse == line.number })
            noteEditorBody = existing?.body ?? ""
            noteEditorVerse = line.number
        case .bookmark:
            _ = userData.toggleVerseBookmark(
                bookSlug: chapter.bookSlug,
                chapter: chapter.chapter,
                verse: line.number
            )
        case .share:
            pendingShare = shareString(for: line)
        case .copy:
            UIPasteboard.general.string = shareString(for: line)
        }
    }

    private func shareString(for line: VerseLine) -> String {
        let body = line.spans.map(\.text).joined()
        return "\(body)\n\n— \(chapter.bookName) \(chapter.chapter):\(line.number)"
    }

    // MARK: - Sheet bindings (Identifiable wrappers)

    private var noteEditorBinding: Binding<IntID?> {
        Binding(
            get: { noteEditorVerse.map(IntID.init) },
            set: { noteEditorVerse = $0?.value }
        )
    }

    private var shareBinding: Binding<StringID?> {
        Binding(
            get: { pendingShare.map(StringID.init) },
            set: { pendingShare = $0?.value }
        )
    }
}

// MARK: - Section + Block dispatch

private struct SectionView: View {
    let section: RichSection
    let chapter: RichChapterContent
    let highlightedVerses: Set<Int>
    let notedVerses: Set<Int>
    let onVerseAction: (VerseAction, VerseLine) -> Void
    let onVerseVisibilityChange: (Int, Bool) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
            if let ref = section.ref {
                Text(ref)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
            if let title = section.title {
                Text(title)
                    .font(Theme.font.title)
                    .foregroundStyle(Theme.color.label)
            }
            ForEach(Array(section.blocks.enumerated()), id: \.offset) { _, block in
                BlockView(
                    block: block,
                    highlightedVerses: highlightedVerses,
                    notedVerses: notedVerses,
                    onVerseAction: onVerseAction,
                    onVerseVisibilityChange: onVerseVisibilityChange
                )
            }
        }
        .padding(.vertical, Theme.metric.spaceS)
    }
}

private struct BlockView: View {
    let block: Block
    let highlightedVerses: Set<Int>
    let notedVerses: Set<Int>
    let onVerseAction: (VerseAction, VerseLine) -> Void
    let onVerseVisibilityChange: (Int, Bool) -> Void

    var body: some View {
        switch block {
        case .scripture(_, let lines):
            ScriptureBlock(
                lines: lines,
                highlightedVerses: highlightedVerses,
                notedVerses: notedVerses,
                onVerseAction: onVerseAction,
                onVerseVisibilityChange: onVerseVisibilityChange
            )
        case .commentary(_, let html):
            ProseBlock(html: html)
        case .christ(_, let title, let html):
            CalloutBlock(title: title, html: html, tone: .warmSubtle)
        case .carry(let html):
            CalloutBlock(title: "Carry into your day", html: html, tone: .warm)
        case .hebrew(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Hebrew", title: title, script: script, translit: translit, description: description)
        case .greek(_, let title, let script, let translit, let description):
            LanguageCallout(badge: "Greek", title: title, script: script, translit: translit, description: description)
        case .reflection(_, let prompt):
            CalloutBlock(title: "Reflect", html: prompt, tone: .subtle)
        case .artwork(_, _, _, let caption):
            ArtworkPlaceholder(caption: caption)
        case .divider:
            Divider().padding(.vertical, Theme.metric.spaceXS)
        case .unknown:
            EmptyView()
        }
    }
}

// MARK: - Block subviews

private struct ScriptureBlock: View {
    let lines: [VerseLine]
    let highlightedVerses: Set<Int>
    let notedVerses: Set<Int>
    let onVerseAction: (VerseAction, VerseLine) -> Void
    let onVerseVisibilityChange: (Int, Bool) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            ForEach(lines) { line in
                VerseRow(
                    line: line,
                    isHighlighted: highlightedVerses.contains(line.number),
                    hasNote: notedVerses.contains(line.number),
                    onAction: { action in onVerseAction(action, line) }
                )
                // ScrollViewReader anchor for resume-to-verse.
                .id(line.number)
                // Threshold 0.5 = at least half the row visible. Tune
                // if "current verse" feels jumpy in long passages.
                .onScrollVisibilityChange(threshold: 0.5) { isVisible in
                    onVerseVisibilityChange(line.number, isVisible)
                }
            }
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.subtle)
    }
}

private struct ProseBlock: View {
    let html: String

    var body: some View {
        Text(plainText(from: html))
            .font(Theme.font.body)
            .foregroundStyle(Theme.color.label)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.vertical, Theme.metric.spaceXS)
    }
}

private struct CalloutBlock: View {
    let title: String
    let html: String
    let tone: ThemeFillTone

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text(title)
                .font(Theme.font.cardTitle)
                .foregroundStyle(Theme.color.label)
            Text(plainText(from: html))
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.label)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(tone)
    }
}

private struct LanguageCallout: View {
    let badge: String
    let title: String
    let script: String
    let translit: String
    let description: String

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS + 2) {
            HStack {
                Text(badge.uppercased())
                    .font(Theme.font.eyebrow)
                    .padding(.horizontal, Theme.metric.spaceS)
                    .padding(.vertical, 2)
                    .background(Theme.color.accent.opacity(0.18), in: Capsule())
                    .foregroundStyle(Theme.color.accent)
                Text(title)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
            }
            HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceS) {
                Text(script)
                    .font(.system(.title3, design: .serif))
                    .foregroundStyle(Theme.color.label)
                Text(translit)
                    .font(.system(.subheadline, design: .serif).italic())
                    .foregroundStyle(Theme.color.secondaryLabel)
            }
            Text(plainText(from: description))
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.label)
                .padding(.top, 2)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.warmSubtle)
    }
}

private struct ArtworkPlaceholder: View {
    let caption: String

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceXS + 2) {
            RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                .fill(Theme.color.fillMuted)
                .aspectRatio(3.0 / 2.0, contentMode: .fit)
                .overlay {
                    Image(systemName: "photo.on.rectangle.angled")
                        .font(.system(size: 32))
                        .foregroundStyle(Theme.color.secondaryLabel)
                }
            Text(caption)
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.secondaryLabel)
        }
    }
}

// MARK: - Helpers

/// Strip HTML tags from a commentary string. Web renders these with rich
/// markup; iOS v1 just shows the plain text. Replace with NSAttributedString
/// once we want to render <em>/<strong>/<a> styled.
private func plainText(from html: String) -> String {
    let stripped = html.replacingOccurrences(
        of: "<[^>]+>",
        with: "",
        options: .regularExpression
    )
    return stripped
        .replacingOccurrences(of: "&nbsp;", with: " ")
        .replacingOccurrences(of: "&amp;", with: "&")
        .replacingOccurrences(of: "&lt;", with: "<")
        .replacingOccurrences(of: "&gt;", with: ">")
        .replacingOccurrences(of: "&#39;", with: "'")
        .replacingOccurrences(of: "&quot;", with: "\"")
        .replacingOccurrences(of: "&mdash;", with: "—")
        .replacingOccurrences(of: "&ndash;", with: "–")
        .trimmingCharacters(in: .whitespacesAndNewlines)
}

// MARK: - Identifiable wrappers for sheet(item:)
// SwiftUI's `.sheet(item:)` requires Identifiable; Int and String aren't
// Identifiable on their own, so we wrap them.

private struct IntID: Identifiable {
    let value: Int
    init(_ value: Int) { self.value = value }
    var id: Int { value }
}

private struct StringID: Identifiable {
    let value: String
    init(_ value: String) { self.value = value }
    var id: String { value }
}

// MARK: - Activity share sheet bridge

private struct ActivityShareSheet: UIViewControllerRepresentable {
    let items: [Any]

    func makeUIViewController(context: Context) -> UIActivityViewController {
        UIActivityViewController(activityItems: items, applicationActivities: nil)
    }

    func updateUIViewController(_ controller: UIActivityViewController, context: Context) {}
}
