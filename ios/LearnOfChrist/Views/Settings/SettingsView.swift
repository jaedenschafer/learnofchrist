// SettingsView.swift
// ────────────────────────────────────────────────────────────────────────────
// The third tab. Four sections in priority order:
//
//   1. Profile        — sign-in prompt ("Save your library"). Anonymous
//                       users see the call-to-action; signed-in users see
//                       account info. v1 has no real auth yet — the
//                       button is a placeholder for the eventual Sign in
//                       with Apple flow described in the strategy doc.
//   2. Reading        — study level, audience, translation. Persisted
//                       via @AppStorage with the loc-* keys so values
//                       round-trip with web. Drives `filterContent` in
//                       `ChapterReaderView`.
//   3. Appearance     — color scheme picker, text size.
//   4. About          — app version, privacy policy + terms links,
//                       acknowledgements.
//
// Every visual reference goes through Theme.

import SwiftUI

struct SettingsView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Theme.metric.spaceXL) {
                SignInPromptCard()
                ReadingSection()
                FocusReadCard()
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

// MARK: - Focus & Reading card

/// Editorial card that links to FocusReadView. Mirrors the same shape
/// as SignInPromptCard so the settings stack reads as a coherent list
/// of "things you can opt into."
private struct FocusReadCard: View {
    var body: some View {
        NavigationLink(value: SettingsDestination.focusRead) {
            HStack(spacing: Theme.metric.spaceM) {
                Image(systemName: "moon.zzz.fill")
                    .font(.title2)
                    .foregroundStyle(Theme.color.accent)
                VStack(alignment: .leading, spacing: 4) {
                    Text("Read to unlock")
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(Theme.color.label)
                    Text("Block distracting apps. A finished chapter buys you back a few minutes.")
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                        .multilineTextAlignment(.leading)
                }
                Spacer(minLength: 0)
                Image(systemName: "chevron.right")
                    .font(.footnote.weight(.semibold))
                    .foregroundStyle(Theme.color.secondaryLabel)
            }
            .padding(Theme.metric.spaceL)
            .background(
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(.ultraThinMaterial)
            )
        }
        .buttonStyle(.plain)
        .navigationDestination(for: SettingsDestination.self) { dest in
            switch dest {
            case .focusRead: FocusReadView()
            }
        }
    }
}

/// Route values pushed from inside SettingsView. Kept tiny on purpose —
/// SettingsView is intentionally flat, only Focus & Reading dives deeper.
enum SettingsDestination: Hashable {
    case focusRead
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
// card surfaces either the sign-in call-to-action (when no Supabase
// session is present) or an account summary + sign-out button (when
// the user has a live session).

private struct SignInPromptCard: View {
    @Environment(AuthService.self) private var auth
    @Environment(SyncService.self) private var sync

    var body: some View {
        if auth.isSignedIn {
            SignedInCard()
        } else {
            SignInCallToAction()
        }
    }
}

private struct SignInCallToAction: View {
    @Environment(AuthService.self) private var auth

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
                Task { await auth.signInWithApple() }
            } label: {
                HStack(spacing: 8) {
                    if auth.isSigningIn {
                        ProgressView().tint(.white)
                    } else {
                        Image(systemName: "apple.logo")
                            .font(.system(size: 18, weight: .semibold))
                    }
                    Text(auth.isSigningIn ? "Signing in…" : "Sign in with Apple")
                        .font(Theme.font.cardTitle)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, Theme.metric.spaceM)
                .foregroundStyle(.white)
                .background(Theme.color.label, in: RoundedRectangle(cornerRadius: Theme.metric.radiusSM))
            }
            .buttonStyle(.plain)
            .disabled(auth.isSigningIn)

            Button {
                Task { await auth.signInWithGoogle() }
            } label: {
                HStack(spacing: 10) {
                    if auth.isSigningIn {
                        ProgressView()
                    } else {
                        // Google "G" mark — drawn from the four-color
                        // wordmark since we don't bundle the official
                        // SVG. Multi-color via stacked Text glyphs.
                        Text("G")
                            .font(.system(size: 18, weight: .bold, design: .rounded))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [
                                        Color(red: 66/255,  green: 133/255, blue: 244/255), // blue
                                        Color(red: 219/255, green:  68/255, blue:  55/255), // red
                                        Color(red: 244/255, green: 180/255, blue:   0/255), // yellow
                                        Color(red:  15/255, green: 157/255, blue:  88/255), // green
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }
                    Text("Continue with Google")
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(Theme.color.label)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, Theme.metric.spaceM)
                .background(
                    RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                        .fill(Color.white)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                        .stroke(Theme.color.tertiaryLabel.opacity(0.35), lineWidth: 1)
                )
            }
            .buttonStyle(.plain)
            .disabled(auth.isSigningIn)

            if let err = auth.lastError {
                Text(err)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.warning)
            } else {
                Text("You can keep using Learn of Christ without an account. Your data stays on this device until you sign in.")
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.warmSubtle, radius: Theme.metric.radiusMD)
    }
}

private struct SignedInCard: View {
    @Environment(AuthService.self) private var auth
    @Environment(SyncService.self) private var sync

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            HStack(spacing: Theme.metric.spaceM) {
                Image(systemName: "checkmark.icloud")
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 32, alignment: .leading)
                VStack(alignment: .leading, spacing: 4) {
                    Text("Signed in")
                        .font(Theme.font.cardTitle)
                        .foregroundStyle(Theme.color.label)
                    Text(syncStatusText)
                        .font(Theme.font.callout)
                        .foregroundStyle(Theme.color.secondaryLabel)
                }
                Spacer(minLength: 0)
            }
            HStack(spacing: Theme.metric.spaceS) {
                Button {
                    Task { await sync.sync() }
                } label: {
                    HStack(spacing: 6) {
                        if sync.isSyncing {
                            ProgressView().controlSize(.small)
                        } else {
                            Image(systemName: "arrow.triangle.2.circlepath")
                        }
                        Text(sync.isSyncing ? "Syncing…" : "Sync now")
                            .font(Theme.font.callout)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Theme.metric.spaceS)
                    .foregroundStyle(Theme.color.label)
                    .background(
                        RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                            .stroke(Theme.color.tertiaryLabel.opacity(0.4))
                    )
                }
                .buttonStyle(.plain)
                .disabled(sync.isSyncing)

                Button {
                    Task { await auth.signOut() }
                } label: {
                    Text("Sign out")
                        .font(Theme.font.callout)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, Theme.metric.spaceS)
                        .foregroundStyle(Theme.color.warning)
                        .background(
                            RoundedRectangle(cornerRadius: Theme.metric.radiusSM)
                                .stroke(Theme.color.warning.opacity(0.4))
                        )
                }
                .buttonStyle(.plain)
            }
            if let err = sync.lastError {
                Text(err)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.warning)
            }
        }
        .padding(Theme.metric.spaceL)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeFill(.warmSubtle, radius: Theme.metric.radiusMD)
    }

    private var syncStatusText: String {
        if sync.isSyncing { return "Syncing your library…" }
        guard let when = sync.lastSyncedAt else {
            return "Highlights, notes, and bookmarks back up to your account."
        }
        let rel = RelativeDateTimeFormatter()
        rel.unitsStyle = .full
        return "Last synced \(rel.localizedString(for: when, relativeTo: Date()))."
    }
}

// MARK: - Reading preferences
//
// The shared depth + audience + translation contract is in
// `ReaderPrefs.swift`; the storage keys are the same strings web uses
// (`loc-study-level`, `loc-audience`, `loc-translation`) so values
// round-trip cleanly once cloud sync is wired up.
//
// Kids audience is intentionally absent from the iOS picker for v1 —
// the kids decoder + registry aren't built on Swift yet. A user who
// picked kids on web and switched to iOS keeps the value in storage
// but the picker shows it as Adults; the filter is a no-op for kids
// either way (see `filterContentByAudience`), so no rendering bug.

private struct ReadingSection: View {
    @AppStorage(ReaderPrefs.Key.studyLevel)
    private var studyLevelRaw: String = ReaderPrefs.defaultStudyLevel.rawValue

    @AppStorage(ReaderPrefs.Key.audience)
    private var audienceRaw: String = ReaderPrefs.defaultAudience.rawValue

    @AppStorage(ReaderPrefs.Key.audienceLock)
    private var audienceLock: String = ""

    @AppStorage(ReaderPrefs.Key.translation)
    private var translation: String = ReaderPrefs.defaultTranslation

    private var isAudienceLocked: Bool { audienceLock == "1" }

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceM) {
            SectionHeader(title: "Reading")
            VStack(spacing: Theme.metric.spaceS) {
                studyLevelRow
                if !isAudienceLocked {
                    audienceRow
                }
                translationRow
            }
        }
    }

    // ─── Study level ───
    private var studyLevelRow: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Image(systemName: "slider.horizontal.3")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 22)
                Text("Study depth")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Spacer()
            }
            Picker("Study depth", selection: $studyLevelRaw) {
                ForEach(StudyLevel.allCases, id: \.rawValue) { level in
                    Text(level.label).tag(level.rawValue)
                }
            }
            .pickerStyle(.segmented)
            if let current = StudyLevel(rawValue: studyLevelRaw) {
                Text(current.blurb)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }

    // ─── Audience ───
    private var audienceRow: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Image(systemName: "person.2")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 22)
                Text("Audience")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Spacer()
            }
            Picker("Audience", selection: $audienceRaw) {
                ForEach(Audience.iOSSupported, id: \.rawValue) { aud in
                    Text(aud.label).tag(aud.rawValue)
                }
            }
            .pickerStyle(.segmented)
            if let current = Audience(rawValue: audienceRaw),
               Audience.iOSSupported.contains(current) {
                Text(current.blurb)
                    .font(Theme.font.caption)
                    .foregroundStyle(Theme.color.tertiaryLabel)
            }
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
    }

    // ─── Translation ───
    private var translationRow: some View {
        VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
            HStack {
                Image(systemName: "book.closed")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(Theme.color.accent)
                    .frame(width: 22)
                Text("Translation")
                    .font(Theme.font.cardTitle)
                    .foregroundStyle(Theme.color.label)
                Spacer()
                Menu {
                    Picker("Translation", selection: $translation) {
                        ForEach(ReaderPrefs.publicDomainTranslations) { t in
                            Text(t.name).tag(t.abbreviation)
                        }
                    }
                } label: {
                    HStack(spacing: 6) {
                        Text(ReaderPrefs.translation(forAbbreviation: translation).name)
                            .font(Theme.font.callout)
                            .foregroundStyle(Theme.color.label)
                        Image(systemName: "chevron.up.chevron.down")
                            .font(.system(size: 11, weight: .semibold))
                            .foregroundStyle(Theme.color.tertiaryLabel)
                    }
                }
            }
            Text("Public-domain translations only — licensed ones (NIV/ESV/CSB) are not in v1.")
                .font(Theme.font.caption)
                .foregroundStyle(Theme.color.tertiaryLabel)
        }
        .padding(Theme.metric.spaceL - 2)
        .frame(maxWidth: .infinity, alignment: .leading)
        .themeSurface(radius: Theme.metric.radiusMD)
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
