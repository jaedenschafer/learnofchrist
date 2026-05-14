// LiquidGlassCard.swift
// ────────────────────────────────────────────────────────────────────────────
// True frosted-glass card surface — built for pastel gradient
// backgrounds where the card needs to read as a piece of clear glass
// lit from behind. Recipe:
//
//   1. .ultraThinMaterial base — the actual blur.
//   2. White-tinted veil at low opacity — softens what's behind so text
//      is readable without losing the "glass" feel.
//   3. Inset white highlight along the top edge — catches the light.
//   4. Hairline white border — defines the rim of the glass.
//   5. Soft cool drop shadow — lifts the card off the page.
//
// Pass `selected: true` for the elevated state used on the active
// option in a picker / list / filter row.

import SwiftUI

extension View {
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
            .background {
                ZStack {
                    // 1. Frosted blur.
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(.ultraThinMaterial)

                    // 2. White-tinted veil — softens the gradient behind
                    //    just enough that text reads cleanly.
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(Color.white.opacity(veilOpacity))
                        .blendMode(.plusLighter)
                }
            }
            // 3. Inset white highlight along the upper rim — the iOS
            //    Liquid Glass "catch of light" cue.
            .overlay(alignment: .top) {
                Capsule()
                    .fill(Color.white.opacity(scheme == .dark ? 0.22 : 0.65))
                    .frame(height: 1)
                    .padding(.horizontal, cornerRadius * 0.85)
                    .padding(.top, 1)
                    .allowsHitTesting(false)
            }
            // 4. Hairline glass border.
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .stroke(borderColor, lineWidth: 1)
            )
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
            // 5. Soft cool-toned drop shadow.
            .shadow(
                color: ambientShadow,
                radius: selected ? 30 : 22,
                x: 0,
                y: selected ? 16 : 10
            )
            .shadow(
                color: keyShadow,
                radius: selected ? 6 : 3,
                x: 0,
                y: selected ? 4 : 2
            )
    }

    /// How much white veil sits on top of the frost. Selected gets a
    /// brighter veil so the active option visibly stands above the rest.
    private var veilOpacity: Double {
        if scheme == .dark {
            return selected ? 0.10 : 0.04
        }
        return selected ? 0.55 : 0.32
    }

    private var borderColor: Color {
        scheme == .dark
            ? Color.white.opacity(selected ? 0.20 : 0.10)
            : Color.white.opacity(selected ? 0.85 : 0.55)
    }

    private var ambientShadow: Color {
        scheme == .dark
            ? Color.black.opacity(selected ? 0.55 : 0.40)
            : Color(red: 0.32, green: 0.32, blue: 0.45).opacity(selected ? 0.22 : 0.14)
    }

    private var keyShadow: Color {
        scheme == .dark
            ? Color.black.opacity(0.28)
            : Color(red: 0.30, green: 0.30, blue: 0.42).opacity(0.08)
    }
}
