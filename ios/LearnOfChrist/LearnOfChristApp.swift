// LearnOfChristApp.swift
// ────────────────────────────────────────────────────────────────────────────
// App entry. SwiftUI App + a single window scene rooted at RootView.
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

    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(userData)
        }
        .modelContainer(userData.container)
    }
}
