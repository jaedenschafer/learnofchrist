// WidgetSyncService.swift
// ────────────────────────────────────────────────────────────────────────────
// Main-app side of the widget data pipeline.
//
// The widget extension only reads from a UserDefaults suite backed by the
// App Group "group.com.learnofchrist.app.shared". This file is responsible
// for KEEPING THAT SUITE FRESH from the app side:
//
//   • On cold launch / foreground, update with the user's current rotation.
//   • Whenever the user opens a new chapter, write the new entry so the
//     home- and lock-screen widgets reflect what they last touched.
//   • Trigger WidgetCenter.reloadAllTimelines() so the next render is fresh.
//
// The mirror struct (SharedReadingState) lives in the widget extension
// folder and is added to the app target as a shared source, so both targets
// agree on the encoding.

import Foundation
import WidgetKit

@MainActor
public enum WidgetSyncService {
    /// Called by the app whenever the "current chapter" rotates — at cold
    /// launch, when the user opens a chapter, or when they tap the
    /// "Continue reading" card.
    public static func publish(bookSlug: String,
                               bookName: String,
                               chapter: Int,
                               verseHook: String? = nil) {
        let state = SharedReadingState(
            bookSlug: bookSlug,
            bookName: bookName,
            chapter: chapter,
            verseHook: verseHook
        )
        SharedReadingStore.save(state)
        WidgetCenter.shared.reloadAllTimelines()
    }
}
