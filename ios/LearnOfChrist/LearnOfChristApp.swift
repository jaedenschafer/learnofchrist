// LearnOfChristApp.swift
// ────────────────────────────────────────────────────────────────────────────
// App entry. SwiftUI App + a single window scene rooted at RootView.
//
// We deliberately do not show a sign-in screen on launch. The app is
// free, account-optional; sign-in is prompted only when the user opts
// into a sync action (see docs/MOBILE-PLATFORM-STRATEGY.md).

import SwiftUI

@main
struct LearnOfChristApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
        }
    }
}
