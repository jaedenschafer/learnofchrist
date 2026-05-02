// SettingsView.swift
// ────────────────────────────────────────────────────────────────────────────
// The third tab. Three sections in priority order:
//
//   1. Profile        — sign-in prompt ("Save your library"). Anonymous
//                       users see the call-to-action; signed-in users see
//                       account info. v1 has no real auth yet — the
//                       button is a placeholder for the eventual Sign in
//                       with Apple flow described in the strategy doc.
//   2. Appearance     — color scheme picker, text size.
//   3. About          — app version, privacy policy + terms links,
//                       acknowledgements.
//
// Every visual reference goes through Theme.

import SwiftUI

struct SettingsView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                SignInPromptCard()
                AppearanceSection()
                AboutSection()
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.vertical, Theme.metric.spaceL)
        }
        .background(Theme.color.background)
        .navigationTitle("Settings")
    }
}

// MARK: - Section header

private struct SectionHeader: View {
    let title: String
    var body: some View {
        Text(title.uppercased())
            .font(Theme.font.eyebrow)
            .tracking(2)
            .foregroundStyle(Theme.color.secondaryLabel)
    }
}

// MARK: - Sign-in prompt
// Anonymous-by-default — see docs/MOBILE-PLATFORM-STRATEGY.md. This
// card explains what sign-in unlocks and stages the eventual handoff.
// No real auth is wired yet; the button surfaces a sheet with copy
// only, so we can review the messaging now without dependencies.

private struct SignInPromptCard: View {
    @State private var showingPlaceholder = false

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            HStack(spacing: Theme.metric.spaceM) {
                Image(systemName: "icloud.and.arrow.up")
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 32, alignment: .leading)
                VStack(alignment: .leading, spacing: 4) {
                    Text("Save your library")
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(Theme.color.label)
                    Text("Sign in to back up your highlights, notes, and bookmarks across your devices.")
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                }
                Spacer(minLength: 0)
            }
            Button {
                showingPlaceholder = true
            } label: {
                Text("Sign in with Apple")
                    .font(Theme.font.cardTitle)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Theme.metric.spaceM)
                    .foregroundStyle(.white)
                    .background(Theme.color.label, in: RoundedRectangle(cornerRadius: Theme.metric.radiusSM))
            }
            .buttonStyle(.plain)
            Text("You can keep using Learn of Christ without an account. Your data stays on this device until you sign in.")
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.tertiaryLabel)
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.warmSubtle, radius: Theme.metric.radiusMD)
        .sheet(isPresented: $showingPlaceholder) {
            SignInPlaceholderSheet()
        }
    }
}

private struct SignInPlaceholderSheet: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            VStack(alignment: .leading, spacing: Theme.metric.spaceL) {
                Image(systemName: "wrench.and.screwdriver")
                    .font(.system(size: 38, weight: .light))
                    .foregroundStyle(Theme.color.accent)
                    .padding(.bottom, Theme.metric.spaceS)

                Text("Sign-in is coming soon.")
                    .font(Theme.font.title)
                    .foregroundStyle(Theme.color.label)

                Text("We're still wiring this up. When it ships, signing in with your Apple ID will sync your highlights, notes, bookmarks, and reading progress across every device you read on.")
                    .font(Theme.font.body)
                    .foregroundStyle(Theme.color.secondaryLabel)

                Text("Until then, everything you save stays on this device.")
                    .font(Theme.font.callout)
                    .foregroundStyle(Theme.color.tertiaryLabel)

                Spacer()
            }
            .padding(Theme.metric.readerHorizontalPadding)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Theme.color.background)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                }
            }
            .navigationTitle("Sign in")
            .navigationBarTitleDisplayMode(.inline)
        }
        .presentationDetents([.medium])
    }
}

// MARK: - Appearance

private struct AppearanceSection: View {
    @AppStorage(AppearancePreferences.Key.colorScheme)
    private var colorSchemeRaw: String = AppearancePreferences.ColorSchemePreference.system.rawValue

    @AppStorage(AppearancePreferences.Key.textSize)
    private var textSizeRaw: String = AppearancePreferences.TextSizePreference.medium.rawValue

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            SectionHeader(title: "Appearance")
            VStack(spacing: Theme.metric.spaceS) {
                colorSchemeRow
                textSizeRow
            }
        }
    }

    // ─── Color scheme ───
    private var colorSchemeRow: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Image(systemName: "moonphase.first.quarter")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 22)
                Text("Theme")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Spacer()
            }
            Picker("Theme", selection: $colorSchemeRaw) {
                ForEach(AppearancePreferences.ColorSchemePreference.allCases) { option in
                    Text(option.label).tag(option.rawValue)
                }
            }
            .pickerStyle(.segmented)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }

    // ─── Text size ───
    private var textSizeRow: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Image(systemName: "textformat.size")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 22)
                Text("Reading text size")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Spacer()
            }
            Picker("Reading text size", selection: $textSizeRaw) {
                ForEach(AppearancePreferences.TextSizePreference.allCases) { option in
                    Text(option.label).tag(option.rawValue)
                }
            }
            .pickerStyle(.segmented)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }
}

// MARK: - About

private struct AboutSection: View {
    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            SectionHeader(title: "About")
            VStack(spacing: 0) {
                AboutRow(label: "Version", value: appVersion, icon: "app.badge")
                Divider().padding(.leading, 50)
                AboutLink(label: "Privacy Policy", icon: "hand.raised", url: "https://learnofchrist.com/privacy")
                Divider().padding(.leading, 50)
                AboutLink(label: "Terms of Service", icon: "doc.text", url: "https://learnofchrist.com/terms")
                Divider().padding(.leading, 50)
                AboutLink(label: "Visit learnofchrist.com", icon: "safari", url: "https://learnofchrist.com")
            }
            .themeSurface(radius: Theme.metric.radiusMD)
        }
    }

    private var appVersion: String {
        let dict = Bundle.main.infoDictionary
        let version = dict?["CFBundleShortVersionString"] as? String ?? "—"
        let build = dict?["CFBundleVersion"] as? String ?? "—"
        return "\(version) (\(build))"
    }
}

private struct AboutRow: View {
    let label: String
    let value: String
    let icon: String

    var body: some View {
        HStack {
            Image(systemName: icon)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(Theme.color.accent)
                .frame(width: 22)
            Text(label)
                .font(Theme.font.body)
                .foregroundStyle(Theme.color.label)
            Spacer()
            Text(value)
                .font(Theme.font.callout)
                .foregroundStyle(Theme.color.secondaryLabel)
        }
        .padding(Theme.metric.spaceL - 2)
    }
}

private struct AboutLink: View {
    let label: String
    let icon: String
    let url: String

    var body: some View {
        if let resolved = URL(string: url) {
            Link(destination: resolved) {
                HStack {
                    Image(systemName: icon)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(Theme.color.accent)
                        .frame(width: 22)
                    Text(label)
                        .font(Theme.font.body)
                        .foregroundStyle(Theme.color.label)
                    Spacer()
                    Image(systemName: "arrow.up.right")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(Theme.color.tertiaryLabel)
                }
                .padding(Theme.metric.spaceL - 2)
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
        }
    }
}
