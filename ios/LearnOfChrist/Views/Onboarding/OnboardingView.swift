// OnboardingView.swift
// ────────────────────────────────────────────────────────────────────────────
// First-run welcome screen. One screen — no carousel, no swipes — just
// the three things a new user actually needs to know:
//
//   1. The whole Bible with study guides is here
//   2. Highlights / notes / bookmarks stay on the device by default
//   3. Sign-in (later) backs them up across devices
//
// "Get started" sets onboarding.completed and the App swaps in the
// main TabView. Every visual reference goes through Theme.

import SwiftUI

struct OnboardingView: View {
    /// App-level @AppStorage flag. Setting it to true causes the App
    /// entry to switch from this view to the main TabView with a
    /// cross-fade.
    @Binding var completed: Bool

    var body: some View {
        ZStack {
            Theme.color.background.ignoresSafeArea()
            VStack(spacing: 0) {
                Spacer(minLength: 0)
                hero
                    .padding(.top, Theme.metric.spaceXXL)
                pillars
                    .padding(.top, Theme.metric.spaceXXL)
                Spacer(minLength: Theme.metric.spaceXL)
                callToAction
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.bottom, Theme.metric.spaceXL)
        }
    }

    // MARK: - Hero

    private var hero: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            Image(systemName: "book.closed.fill")
                .font(.system(size: 44, weight: .light))
                .foregroundStyle(Theme.color.accent)
                .padding(.bottom, Theme.metric.spaceS)
            Text("LEARN OF CHRIST")
                .font(Theme.font.eyebrow)
                .tracking(2.5)
                .foregroundStyle(Theme.color.secondaryLabel)
            Text("Read the Bible deeply,\non your own terms.")
                .font(Theme.font.display)
                .foregroundStyle(Theme.color.label)
                .lineSpacing(2)
            Text("All 66 books with study guides for every chapter. Free. No account required.")
                .font(Theme.font.body)
                .foregroundStyle(Theme.color.secondaryLabel)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Pillars

    private var pillars: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            PillarRow(
                icon: "books.vertical",
                title: "The whole library, offline",
                copy: "Every chapter is downloaded the first time you open it. Read on a flight, in a tunnel, anywhere."
            )
            PillarRow(
                icon: "highlighter",
                title: "Your annotations stay yours",
                copy: "Highlights, notes, and bookmarks live on this device until you choose to share them."
            )
            PillarRow(
                icon: "icloud.and.arrow.up",
                title: "Sign in later to back it up",
                copy: "When you're ready, sign in with Apple to sync your library across devices."
            )
        }
    }

    // MARK: - Call to action

    private var callToAction: some View {
        Button {
            withAnimation(.easeOut(duration: 0.35)) {
                completed = true
            }
        } label: {
            Text("Get started")
                .font(Theme.font.cardTitle)
                .frame(maxWidth: .infinity)
                .padding(.vertical, Theme.metric.spaceM + 2)
                .foregroundStyle(.white)
                .background(Theme.color.accent, in: RoundedRectangle(cornerRadius: Theme.metric.radiusSM))
        }
        .buttonStyle(.plain)
        .accessibilityHint("Closes the welcome screen and opens the Bible reader.")
    }
}

// MARK: - Pillar row

private struct PillarRow: View {
    let icon: String
    let title: String
    let copy: String

    var body: some View {
        HStack(alignment: .top, spacing: Theme.metric.spaceM) {
            Image(systemName: icon)
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(Theme.color.accent)
                .frame(width: 28, alignment: .leading)
                .padding(.top, 2)
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Text(copy)
                    .font(Theme.font.callout)
                    .foregroundStyle(Theme.color.secondaryLabel)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: 0)
        }
    }
}
