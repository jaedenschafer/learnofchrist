// RichChapterContentFilter.swift
// ────────────────────────────────────────────────────────────────────────────
// Swift port of the level + audience filter functions defined in
// `src/data/study-chapters/types.ts → filterContent*`.
//
// These two filters decide which blocks survive given a reader's study
// level + audience choice, demote dangling highlight marks whose target
// commentary is no longer rendered, drop empty sections, and (at
// Beginner) trim intros + bottomShare.
//
// Acceptance: shared test vectors in
// `docs/rich-content-filter-test-vectors.json` must produce identical
// outputs in both the TypeScript and Swift filters. See
// `RichContentFilterTests.swift` for the Swift side and
// `src/data/study-chapters/__tests__/filter.spec.ts` for the TS side.
//
// Pure functions. No state. No I/O. Safe to call inside view-update.

import Foundation

// MARK: - Top-level entry point

/// Apply both the audience filter (first — so dangling-anchor stripping
/// happens once on the youth-trimmed set) and the level filter (second).
/// Mirrors `filterContent(content, level, audience)` in TS.
func filterContent(
    _ content: RichChapterContent,
    level: StudyLevel,
    audience: Audience
) -> RichChapterContent {
    let audienceFiltered = filterContentByAudience(content, audience: audience)
    return filterContentByLevel(audienceFiltered, level: level)
}

// MARK: - Level filter

/// Return a copy of the chapter with:
///  – blocks whose effectiveMinLevel exceeds the active level removed,
///  – sections that are empty (or only-dividers) dropped,
///  – verse `mark` spans whose `jumpTo` no longer exists demoted to
///    plain text spans so taps don't scroll to nothing,
///  – `intros` trimmed to the first paragraph at Beginner,
///  – `bottomShare` removed at Beginner.
///
/// Pure. Mirrors `filterContentByLevel` in TS.
func filterContentByLevel(
    _ content: RichChapterContent,
    level: StudyLevel
) -> RichChapterContent {
    let surviving = visibleBlockIDs(content, level: level)

    let filteredSections: [RichSection] = content.sections.compactMap { section in
        var blocks: [AnnotatedBlock] = section.blocks
            .filter { isVisible($0, atLevel: level) }
            .map { annotated -> AnnotatedBlock in
                guard case let .scripture(chapter, lines) = annotated.block else {
                    return annotated
                }
                let stripped = lines.map { stripDanglingMarks($0, surviving: surviving) }
                return AnnotatedBlock(
                    block: .scripture(chapter: chapter, lines: stripped),
                    meta: annotated.meta
                )
            }

        // Drop a section that has no real content left. A section is
        // "empty" if it has zero non-divider blocks.
        let meaningful = blocks.filter {
            if case .divider = $0.block { return false }
            return true
        }
        if meaningful.isEmpty { return nil }

        var copy = section
        copy.blocks = blocks
        return copy
    }

    let isBeginner = level == .beginner
    var copy = content
    copy.intros = isBeginner ? Array(content.intros.prefix(1)) : content.intros
    copy.bottomShare = isBeginner ? nil : content.bottomShare
    copy.sections = filteredSections
    return copy
}

// MARK: - Audience filter

/// When audience is `.youth`, strip blocks marked `hideForYouth: true`
/// and swap in the per-block `youthOverride` content where present.
/// Replace chapter-level intros / bottomShare from `content.youth` when
/// the author provided overrides.
///
/// When audience is `.adults`, return content unchanged.
///
/// When audience is `.kids`, this filter is a no-op — the route layer
/// dispatches to the kids registry instead, and `RichChapterContent`
/// is never used for kids. We still accept the value here for symmetry.
///
/// Pure. Mirrors `filterContentByAudience` in TS.
func filterContentByAudience(
    _ content: RichChapterContent,
    audience: Audience
) -> RichChapterContent {
    guard audience == .youth else { return content }

    // Collect every block id that survives — used to demote dangling
    // highlight marks below.
    var surviving = Set<String>()
    for section in content.sections {
        for annotated in section.blocks {
            if annotated.meta.hideForYouth == true { continue }
            if let id = blockID(annotated.block) {
                surviving.insert(id)
            }
        }
    }

    let filteredSections: [RichSection] = content.sections.compactMap { section in
        let blocks: [AnnotatedBlock] = section.blocks
            .filter { $0.meta.hideForYouth != true }
            .map(applyYouthOverride)
            .map { annotated -> AnnotatedBlock in
                guard case let .scripture(chapter, lines) = annotated.block else {
                    return annotated
                }
                let stripped = lines.map { stripDanglingMarks($0, surviving: surviving) }
                return AnnotatedBlock(
                    block: .scripture(chapter: chapter, lines: stripped),
                    meta: annotated.meta
                )
            }

        let meaningful = blocks.filter {
            if case .divider = $0.block { return false }
            return true
        }
        if meaningful.isEmpty { return nil }

        var copy = section
        copy.blocks = blocks
        return copy
    }

    var copy = content
    copy.intros = content.youth?.intros ?? content.intros
    copy.bottomShare = content.youth?.bottomShare ?? content.bottomShare
    copy.sections = filteredSections
    return copy
}

// MARK: - Internal helpers

/// Collect every block id that's visible at the given level. Used by
/// `filterContentByLevel` to demote dangling highlight marks.
private func visibleBlockIDs(
    _ content: RichChapterContent,
    level: StudyLevel
) -> Set<String> {
    var ids = Set<String>()
    for section in content.sections {
        for annotated in section.blocks {
            if !isVisible(annotated, atLevel: level) { continue }
            if let id = blockID(annotated.block) {
                ids.insert(id)
            }
        }
    }
    return ids
}

/// Replace any `.mark` span whose `jumpTo` is not in `surviving` with a
/// plain-text span carrying the same display text. Preserves all other
/// spans unchanged.
private func stripDanglingMarks(
    _ line: VerseLine,
    surviving: Set<String>
) -> VerseLine {
    let newSpans: [VerseSpan] = line.spans.map { span in
        if case let .mark(_, text, jumpTo) = span, !surviving.contains(jumpTo) {
            return .text(text)
        }
        return span
    }
    return VerseLine(number: line.number, spans: newSpans)
}

/// Apply per-block youthOverride when the block supports it. The TS
/// version only honors overrides on commentary / christ / carry /
/// reflection — same here.
private func applyYouthOverride(_ annotated: AnnotatedBlock) -> AnnotatedBlock {
    guard let override = annotated.meta.youthOverride else { return annotated }

    switch annotated.block {
    case .commentary(let id, let html):
        return AnnotatedBlock(
            block: .commentary(id: id, html: override.html ?? html),
            meta: annotated.meta
        )

    case .christ(let id, let title, let html):
        return AnnotatedBlock(
            block: .christ(
                id: id,
                title: override.title ?? title,
                html: override.html ?? html
            ),
            meta: annotated.meta
        )

    case .carry(let html):
        return AnnotatedBlock(
            block: .carry(html: override.html ?? html),
            meta: annotated.meta
        )

    case .reflection(let id, let prompt):
        return AnnotatedBlock(
            block: .reflection(id: id, prompt: override.prompt ?? prompt),
            meta: annotated.meta
        )

    default:
        // Scripture / hebrew / greek / artwork / divider / unknown
        // don't carry youthOverride content.
        return annotated
    }
}

/// Return the `id` field for blocks that have one. Mirrors the TS
/// `'id' in block && typeof block.id === 'string'` check.
private func blockID(_ block: Block) -> String? {
    switch block {
    case .commentary(let id, _):
        return id // optional in the schema
    case .hebrew(let id, _, _, _, _),
         .greek(let id, _, _, _, _),
         .christ(let id, _, _),
         .reflection(let id, _):
        return id
    case .scripture, .carry, .artwork, .divider, .unknown:
        return nil
    }
}
