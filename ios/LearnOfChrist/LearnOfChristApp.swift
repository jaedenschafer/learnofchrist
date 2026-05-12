// LearnOfChristApp.swift
// ────────────────────────────────────────────────────────────────────────────
// App entry. SwiftUI App + a single window scene that gates between
// the first-run onboarding screen and the main TabView, depending on
// @AppStorage("onboarding.completed").
//
// We deliberately do not show a sign-in screen on launch. The app is
// free, account-optional; sign-in is prompted only when the user opts
// into a sync action (see docs/MOBILE-PLATFORM-STRATEGY.md).
//
// Three Observable singletons are wired into the environment at boot:
//   • UserDataStore — SwiftData container + mutation helpers.
//   • AuthService   — owns the Supabase session lifecycle.
//   • SyncService   — pull + push of user-data rows. Triggered on
//                      foreground and after sign-in.

import SwiftUI

@main
struct LearnOfChristApp: App {
    @State private var userData: UserDataStore
    @State private var auth: AuthService
    @State private var sync: SyncService

    @AppStorage(AppearancePreferences.Key.onboardingDone)
    private var onboardingDone: Bool = false

    @Environment(\.scenePhase) private var scenePhase

    init() {
        let data = UserDataStore()
        let authService = AuthService()
        let syncService = SyncService(auth: authService, userData: data)
        _userData = State(wrappedValue: data)
        _auth = State(wrappedValue: authService)
        _sync = State(wrappedValue: syncService)
    }

    var body: some Scene {
        WindowGroup {
            ZStack {
                if onboardingDone {
                    RootView()
                        .transition(.opacity)
                } else {
                    OnboardingView(completed: $onboardingDone)
                        .transition(.opacity)
                }
            }
            .animation(.easeInOut(duration: 0.35), value: onboardingDone)
            .environment(userData)
            .environment(auth)
            .environment(sync)
            .task {
                // On first launch (cold), if we already have a
                // persisted session, kick a sync immediately so the
                // user sees their cloud data quickly.
                if auth.isSignedIn { await sync.sync() }
            }
            .onChange(of: scenePhase) { _, phase in
                guard phase == .active else { return }
                // Foregrounded — pull anything that landed while we
                // were backgrounded.
                Task { if auth.isSignedIn { await sync.sync() } }
            }
            .onChange(of: auth.isSignedIn) { wasSignedIn, nowSignedIn in
                // Sign-in transition — first sync includes the
                // claim handoff (claim_local_data dedupes
                // pre-sign-in rows into the new user_id).
                if !wasSignedIn && nowSignedIn {
                    Task { await sync.sync() }
                }
            }
        }
        .modelContainer(userData.container)
    }
}
