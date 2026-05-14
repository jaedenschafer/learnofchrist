// LiquidGlassCard.swift
// ────────────────────────────────────────────────────────────────────────────
// SwiftUI port of the website's signature `.glass-card` recipe (see
// src/app/globals.css → "Vesper liquid glass"). The visual cues that
// make the card read as iOS-style Liquid Glass are:
//
//   • Frosted backdrop blur (we use .ultraThinMaterial).
//   • An inner-bottom peach radial bloom — the "lit from within" tell.
//   • A subtle white radial highlight at the top, plus a 1-px inset
//     white stroke along the top edge that catches the light.
//   • A warm parchment-tinted border (peach in light, gold in dark).
//   • A soft warm drop shadow so it floats off whatever's behind it.
//
// Apply with `.liquidGlassCard()` after .padding(). The radius is
// 24pt by default (matches the web .glass-card), override per-call.

import SwiftUI

extension View {
    /// Wraps the receiver in the signature liquid-glass card surface.
    /// Pass a smaller `cornerRadius` for compact rows / pills.
    func liquidGlassCard(cornerRadius: CGFloat = 24) -> some View {
        modifier(LiquidGlassCardModifier(cornerRadius: cornerRadius))
    }
}

private struct LiquidGlassCardModifier: ViewModifier {
    let cornerRadius: CGFloat
    @Environment(\.colorScheme) private var scheme

    func body(content: Content) -> some View {
        content
            .background {
                ZStack {
                    // 1. Frosted material — the actual blur.
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(.ultraThinMaterial)

                    // 2. Inner-bottom peach bloom (the iOS Liquid Glass tell).
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(
                            RadialGradient(
                                colors: [peachBloom, .clear],
                                center: .bottom,
                                startRadius: 0,
                                endRadius: 260
                            )
                        )
                        .blendMode(.plusLighter)
                        .opacity(scheme == .dark ? 0.55 : 0.85)

                    // 3. Top white highlight — the catch-of-light.
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(
                            RadialGradient(
                                colors: [
                                    Color.white.opacity(scheme == .dark ? 0.10 : 0.30),
                                    .clear,
                                ],
                                center: .top,
                                startRadius: 0,
                                endRadius: 220
                            )
                        )
                        .blendMode(.plusLighter)
                }
            }
            .overlay {
                // 4. Border + 1px inset top highlight (single overlay for both).
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .stroke(borderColor, lineWidth: 1)
            }
            .overlay(alignment: .top) {
                // Crisp inset highlight along the very top edge — gives the
                // card the impression that light is hitting its upper lip.
                Capsule()
                    .fill(Color.white.opacity(scheme == .dark ? 0.18 : 0.55))
                    .frame(height: 1)
                    .padding(.horizontal, cornerRadius * 0.85)
                    .padding(.top, 1)
            }
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
            // 5. Warm drop shadow — lifts the card off the page.
            .shadow(
                color: shadowColor,
                radius: scheme == .dark ? 24 : 18,
                x: 0,
                y: scheme == .dark ? 14 : 12
            )
    }

    private var peachBloom: Color {
        scheme == .dark
            ? Color(red: 0.84, green: 0.64, blue: 0.34).opacity(0.22)   // vesper gold
            : Color(red: 0.91, green: 0.72, blue: 0.58).opacity(0.32)   // vesper peach
    }

    private var borderColor: Color {
        scheme == .dark
            ? Color.white.opacity(0.14)
            : Color.white.opacity(0.40)
    }

    private var shadowColor: Color {
        scheme == .dark
            ? Color.black.opacity(0.55)
            : Color(red: 0.20, green: 0.16, blue: 0.12).opacity(0.18)
    }
}
