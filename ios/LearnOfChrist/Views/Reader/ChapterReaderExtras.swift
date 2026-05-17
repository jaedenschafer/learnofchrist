// ChapterReaderExtras.swift
// ────────────────────────────────────────────────────────────────────────────
// The three "extra" rendering blocks that hang off the rich chapter
// schema and surfaced into the Swift decoder in commits b570979 /
// 38c04d0 but didn't yet have a UI on iOS:
//
//   • PeopleInChapterRibbon — characters ribbon rendered between the
//     chapter intros and the first section. Mirrors the web
//     <PeopleInChapter> component.
//   • SectionCrossRefsCard  — horizontally-scrolling cards of "where
//     this echoes elsewhere in Scripture", rendered after each
//     section's blocks. Mirrors the web `crossRefs` swiper.
//   • FurtherStudyBlock     — vertical list of external research
//     resources rendered at the very bottom of the chapter, anchored
//     from inline `VerseSpan.resource(_:resourceId:)` superscripts.
//
// Kept in one file because they're conceptually one feature ("the
// rest of the rich schema, rendered") and each individual block is
// small. If any grows past ~100 lines, split into its own file.

import SwiftUI

// MARK: - PeopleInChapterRibbon

/// "People in this chapter" — a horizontally-scrolling row of small
/// person chips. iOS v1 has no character library yet, so the chip
/// just shows the slug (humanised) + the per-chapter role override
/// when the author set one. Web has bios that deepen with study
/// level; iOS picks that up when the library lands.
struct PeopleInChapterRibbon: View {
    let characters: [ChapterCharacter]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text("PEOPLE IN THIS CHAPTER")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: Theme.metric.spaceS) {
                    ForEach(characters, id: \.slug) { character in
                        PersonChip(character: character)
                    }
                }
                .padding(.vertical, 2)
            }
        }
    }

    private struct PersonChip: View {
        let character: ChapterCharacter

        var body: some View {
            VStack(alignment: .leading, spacing: 2) {
                Text(displayName)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                if let role = character.role, !role.isEmpty {
                    Text(role)
                        .font(Theme.font.caption)
                        .foregroundStyle(Theme.color.secondaryLabel)
                }
            }
            .padding(.horizontal, Theme.metric.spaceM)
            .padding(.vertical, Theme.metric.spaceS)
            .themeFill(.warmSubtle, radius: Theme.metric.radiusSM)
        }

        /// Humanise the slug — `"john-the-baptist"` → `"John the Baptist"`.
        /// Web has the character library to consult; iOS falls back to
        /// this until the library ships.
        private var displayName: String {
            character.slug
                .split(separator: "-")
                .map { word -> String in
                    let s = String(word)
                    // Preserve the lowercase "the" / "of" / etc. in the
                    // middle, capitalise everything else.
                    if ["the", "of", "and"].contains(s.lowercased()) {
                        return s.lowercased()
                    }
                    return s.prefix(1).uppercased() + s.dropFirst()
                }
                .joined(separator: " ")
        }
    }
}

// MARK: - SectionCrossRefsCard

/// Horizontally-scrolling cards showing 3–5 references where this
/// section's theme echoes elsewhere in Scripture. Curated per-section
/// by authors; falls back to the chapter-level pool (already baked
/// into the pack JSON by `scripts/build-content-packs.ts`).
///
/// Tapping a card opens the URL in the system browser when `href`
/// is set; otherwise the card is non-interactive (still readable).
struct SectionCrossRefsCard: View {
    let crossRefs: [CrossRef]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            Text("WHERE THIS ECHOES")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: Theme.metric.spaceM) {
                    ForEach(Array(crossRefs.enumerated()), id: \.offset) { _, ref in
                        CrossRefCardView(ref: ref)
                    }
                }
                .padding(.vertical, 2)
            }
        }
        .padding(.top, Theme.metric.spaceM)
    }

    private struct CrossRefCardView: View {
        let ref: CrossRef

        var body: some View {
            let card = VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
                Text(ref.ref)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Text("\u{201C}\(ref.snippet)\u{201D}")
                    .font(Theme.font.callout)
                    .foregroundStyle(Theme.color.secondaryLabel)
                    .lineLimit(4)
                if let note = ref.note, !note.isEmpty {
                    Text(note)
                        .font(Theme.font.caption)
                        .foregroundStyle(Theme.color.tertiaryLabel)
                        .lineLimit(3)
                }
            }
            .padding(Theme.metric.spaceM)
            .frame(width: 280, alignment: .leading)
            .themeFill(.warmSubtle, radius: Theme.metric.radiusMD)

            if let href = ref.href, let url = URL(string: href) {
                Link(destination: url) { card }
                    .buttonStyle(.plain)
            } else {
                card
            }
        }
    }
}

// MARK: - FurtherStudyBlock

/// External research resources rendered at the bottom of a chapter.
/// Each card pairs the source (small-caps eyebrow), short label,
/// one-sentence description, and a tappable Visit link. Auto-numbered
/// in document order so the superscript marks in the prose
/// (`VerseSpan.resource`) can anchor down to the matching card.
struct FurtherStudyBlock: View {
    let resources: [ResourceLink]

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Text("FURTHER STUDY")
                .font(Theme.font.eyebrow)
                .tracking(2)
                .foregroundStyle(Theme.color.secondaryLabel)

            VStack(spacing: Theme.metric.spaceS) {
                ForEach(Array(resources.enumerated()), id: \.offset) { idx, resource in
                    ResourceRow(number: idx + 1, resource: resource)
                }
            }
        }
        .padding(.top, Theme.metric.spaceXL)
    }

    private struct ResourceRow: View {
        let number: Int
        let resource: ResourceLink

        var body: some View {
            HStack(alignment: .top, spacing: Theme.metric.spaceM) {
                Text("\(number)")
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 20, alignment: .trailing)
                VStack(alignment: .leading, spacing: 4) {
                    Text(resource.source.uppercased())
                        .font(Theme.font.eyebrow)
                        .tracking(1.5)
                        .foregroundStyle(Theme.color.tertiaryLabel)
                    Text(plainText(from: resource.label))
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(Theme.color.label)
                    Text(plainText(from: resource.description))
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                    if let url = URL(string: resource.url) {
                        Link(destination: url) {
                            HStack(spacing: 4) {
                                Text("Visit")
                                Image(systemName: "arrow.up.right")
                                    .font(.system(size: 11, weight: .semibold))
                            }
                            .font(Theme.font.caption)
                            .foregroundStyle(Theme.color.accent)
                        }
                        .buttonStyle(.plain)
                        .padding(.top, 2)
                    }
                }
                Spacer(minLength: 0)
            }
            .padding(Theme.metric.spaceM)
            .frame(maxWidth: .infinity, alignment: .leading)
            .themeSurface(radius: Theme.metric.radiusSM)
        }
    }
}
