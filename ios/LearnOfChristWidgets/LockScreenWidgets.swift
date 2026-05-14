// LockScreenWidgets.swift
// ────────────────────────────────────────────────────────────────────────────
// Lock-screen accessory widgets (iOS 16+).
//
//   LockScreenInlineWidget    — the thin one-line status text above the
//                                 clock. Shows "📖 Genesis 1" at a glance.
//   LockScreenCircularWidget  — small circle next to the clock. Renders
//                                 the chapter number large, with a tiny
//                                 book glyph above. Stylistically matches
//                                 the in-app monogram.

import WidgetKit
import SwiftUI

// MARK: - Shared timeline (we can reuse TodaysChapterProvider).

private struct LockEntry: TimelineEntry {
    let date: Date
    let state: SharedReadingState
}

private struct LockProvider: TimelineProvider {
    func placeholder(in context: Context) -> LockEntry {
        LockEntry(date: Date(), state: .placeholder)
    }
    func getSnapshot(in context: Context, completion: @escaping (LockEntry) -> Void) {
        completion(LockEntry(date: Date(), state: SharedReadingStore.load()))
    }
    func getTimeline(in context: Context, completion: @escaping (Timeline<LockEntry>) -> Void) {
        let now = Date()
        let entry = LockEntry(date: now, state: SharedReadingStore.load())
        let next = Calendar.current.date(byAdding: .minute, value: 30, to: now)!
        completion(Timeline(entries: [entry], policy: .after(next)))
    }
}

// MARK: - Inline (above the clock).

struct LockScreenInlineWidget: Widget {
    let kind = "LockScreenInlineWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: LockProvider()) { entry in
            Text("📖 \(entry.state.reference)")
                .widgetURL(URL(string: "learnofchrist://study/\(entry.state.bookSlug)/\(entry.state.chapter)"))
        }
        .configurationDisplayName("Today's chapter")
        .description("Shows the next chapter in your study rotation on the Lock Screen.")
        .supportedFamilies([.accessoryInline])
    }
}

// MARK: - Circular.

struct LockScreenCircularWidget: Widget {
    let kind = "LockScreenCircularWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: LockProvider()) { entry in
            ZStack {
                AccessoryWidgetBackground()
                VStack(spacing: 1) {
                    Image(systemName: "book.closed.fill")
                        .font(.system(size: 11, weight: .semibold))
                    Text("\(entry.state.chapter)")
                        .font(.system(size: 22, weight: .bold, design: .serif))
                        .minimumScaleFactor(0.6)
                }
            }
            .widgetURL(URL(string: "learnofchrist://study/\(entry.state.bookSlug)/\(entry.state.chapter)"))
        }
        .configurationDisplayName("Chapter number")
        .description("Circular Lock Screen complication for your current chapter.")
        .supportedFamilies([.accessoryCircular])
    }
}
