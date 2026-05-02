// Theme.swift
// ────────────────────────────────────────────────────────────────────────────
// Single source of truth for the iOS app's visual language. Views must
// only reference colors/typography/spacing/radii through `Theme` —
// hex literals, system colors, and ad-hoc font sizes are not allowed in
// view code.
//
// Why: when the brand redesign lands, the redesign is a diff against
// THIS file (and the named asset catalog colors it points at), not a
// hunt across every screen.
//
// Naming convention:
//   Theme.color.<role>          semantic role (background, label, accent…)
//   Theme.font.<style>          typographic role (display, title, body…)
//   Theme.metric.<token>        spacing, radii, hairline widths
//
// Tokens are *roles*, not values. "label" rather than "darkGray";
// "surface" rather than "white". When dark mode is on, the asset
// catalog already swaps the underlying RGB.

import SwiftUI

enum Theme {

    // MARK: - Colors

    enum color {
        // Brand & UI ─────────────────────────────────────────────
        /// Primary accent. Buttons, active states, links.
        static let accent       = Color("LCAccent")
        /// Page background — the canvas the content sits on.
        static let background   = Color("LCBackground")
        /// Card / cell surface that floats above background.
        static let surface      = Color("LCSurface")
        /// Subtle fill for grouped lists, segmented controls.
        static let fillSubtle   = Color("LCFillSubtle")
        /// Stronger fill for hover/pressed states and badges.
        static let fillMuted    = Color("LCFillMuted")
        /// Warm fill — used for callouts (Christ, Carry, Reflect).
        static let warm         = Color("LCWarm")
        /// Tinted-paper warm — used as soft container backgrounds.
        static let warmSubtle   = Color("LCWarmSubtle")
        /// Highlight tone — the underline / wash behind anchor phrases.
        static let highlight    = Color("LCHighlight")

        // Text ───────────────────────────────────────────────────
        /// Primary text. Use for body, headings, the bulk of reading.
        static let label            = Color.primary
        /// Secondary text — supporting copy, captions.
        static let secondaryLabel   = Color.secondary
        /// Tertiary text — incidental metadata.
        static let tertiaryLabel    = Color.secondary.opacity(0.55)

        // Hairlines ─────────────────────────────────────────────
        static let separator        = Color.primary.opacity(0.08)
    }

    // MARK: - Typography

    enum font {
        /// Largest editorial display — chapter title hero, hero card.
        static let display    = Font.system(.largeTitle, design: .serif).weight(.semibold)
        /// Section heading inside a chapter — "Light", "The Beginning".
        static let title      = Font.system(.title2, design: .serif).weight(.semibold)
        /// Card / row title.
        static let cardTitle  = Font.system(.headline)
        /// Default reading body text.
        static let body       = Font.system(.body)
        /// Slightly tighter body — used inside callouts and metadata.
        static let callout    = Font.system(.callout)
        /// Caption — verse numbers, refs, chips.
        static let caption    = Font.system(.caption)
        /// Tiny tracking-spaced caption — for SECTION HEADERS / BADGES.
        static let eyebrow    = Font.system(.caption2).weight(.bold)
        /// Mono — used by anything code-shaped (debugging, raw refs).
        static let mono       = Font.system(.body, design: .monospaced)
    }

    // MARK: - Metrics (spacing, radii, etc.)

    enum metric {
        // Spacing scale — multiply / divide as needed but stay on the scale.
        static let spaceXS: CGFloat   = 4
        static let spaceS: CGFloat    = 8
        static let spaceM: CGFloat    = 12
        static let spaceL: CGFloat    = 16
        static let spaceXL: CGFloat   = 24
        static let spaceXXL: CGFloat  = 32

        // Corner radii — match web's --radius-* tokens.
        static let radiusSM: CGFloat  = 12
        static let radiusMD: CGFloat  = 16
        static let radiusLG: CGFloat  = 20
        static let radiusXL: CGFloat  = 24
        static let radiusXXL: CGFloat = 28

        // Reader-specific.
        static let readerHorizontalPadding: CGFloat = 20
        static let readerSectionSpacing: CGFloat    = 24
        static let verseNumberMinWidth: CGFloat     = 18
    }
}

// MARK: - View modifier helpers
// Sugar so views read like prose. `.themeSurface()` over
// `.background(Theme.color.surface)` reads better at the call site
// and gives us one place to add a stroke/shadow if the redesign wants
// surfaces to ship with one.

extension View {
    /// Surface card — the shape behind a callout or grouped row.
    func themeSurface(radius: CGFloat = Theme.metric.radiusSM) -> some View {
        self.background(Theme.color.surface, in: RoundedRectangle(cornerRadius: radius))
    }

    /// Subtle filled tile — segmented controls, grouped backgrounds.
    func themeFill(_ tone: ThemeFillTone = .subtle, radius: CGFloat = Theme.metric.radiusSM) -> some View {
        self.background(tone.color, in: RoundedRectangle(cornerRadius: radius))
    }
}

enum ThemeFillTone {
    case subtle
    case muted
    case warm
    case warmSubtle
    case highlight

    var color: Color {
        switch self {
        case .subtle:     return Theme.color.fillSubtle
        case .muted:      return Theme.color.fillMuted
        case .warm:       return Theme.color.warm
        case .warmSubtle: return Theme.color.warmSubtle
        case .highlight:  return Theme.color.highlight
        }
    }
}
