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
// We provision a UserDataStore at launch and inject it (and its model
// container) into the environment so any descendant view can read /
// write local user data.

import SwiftUI

@main
struct LearnOfChristApp: App {
    @State private var userData = UserDataStore()

    @AppStorage(AppearancePreferences.Key.onboardingDone)
    private var onboardingDone: Bool = false

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
        }
        .modelContainer(userData.container)
    }
}
