// LiquidGlassCard.swift
// ────────────────────────────────────────────────────────────────────────────
// White-on-white "liquid glass" card surface. The reference design uses
// pure white (or near-white) cards floating on a very light gray
// background with a soft drop shadow for separation — no harsh borders,
// no frost, no warm tint. Selected/active cards just get a stronger
// shadow to lift them further off the page.
//
// Apply with `.liquidGlassCard()` on any view that should look like a
// floating UI element. Pass `selected: true` for the brighter, more
// elevated state (used for the active tab in a picker, the selected
// row in a list, etc).

import SwiftUI

extension View {
    /// Wraps the receiver in the white-on-white "liquid glass" card
    /// surface — pure white fill, soft drop shadow, generous rounded
    /// corners. Use `selected` for a more elevated state.
    func liquidGlassCard(
        cornerRadius: CGFloat = 22,
        selected: Bool = false
    ) -> some View {
        modifier(LiquidGlassCardModifier(
            cornerRadius: cornerRadius,
            selected: selected
        ))
    }
}

private struct LiquidGlassCardModifier: ViewModifier {
    let cornerRadius: CGFloat
    let selected: Bool
    @Environment(\.colorScheme) private var scheme

    func body(content: Content) -> some View {
        content
            .background(
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .fill(surface)
            )
            // Inset white highlight along the top rim — keeps the "liquid
            // glass" cue without darkening the whole card with a border.
            .overlay(alignment: .top) {
                Capsule()
                    .fill(Color.white.opacity(scheme == .dark ? 0.10 : 0.85))
                    .frame(height: 1)
                    .padding(.horizontal, cornerRadius * 0.85)
                    .padding(.top, 1)
                    .allowsHitTesting(false)
            }
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
            // Outer hairline so the card has a defined edge against very
            // light backgrounds (only visible when the bg is identical
            // to the card surface).
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .stroke(borderColor, lineWidth: 0.5)
            )
            // Soft drop shadow — primary depth cue. Two-layer for a
            // softer "ambient + key light" feel.
            .shadow(
                color: ambientShadow,
                radius: selected ? 28 : 18,
                x: 0,
                y: selected ? 14 : 8
            )
            .shadow(
                color: keyShadow,
                radius: selected ? 6 : 3,
                x: 0,
                y: selected ? 3 : 1
            )
    }

    private var surface: Color {
        if scheme == .dark {
            return selected
                ? Color(white: 0.16)
                : Color(white: 0.11)
        }
        return Color.white
    }

    private var borderColor: Color {
        scheme == .dark
            ? Color.white.opacity(0.06)
            : Color.black.opacity(0.04)
    }

    /// Soft, wide ambient shadow.
    private var ambientShadow: Color {
        scheme == .dark
            ? Color.black.opacity(selected ? 0.65 : 0.55)
            : Color.black.opacity(selected ? 0.13 : 0.08)
    }

    /// Tight key shadow that crisps the edge.
    private var keyShadow: Color {
        scheme == .dark
            ? Color.black.opacity(0.35)
            : Color.black.opacity(0.06)
    }
}
