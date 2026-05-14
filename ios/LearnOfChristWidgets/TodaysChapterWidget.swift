// TodaysChapterWidget.swift
// ────────────────────────────────────────────────────────────────────────────
// Home screen widget — small + medium families.
//
//   Small:   "Today's chapter" label  →  bold ref  →  cross monogram.
//   Medium:  small layout + verse hook on the right.
//
// Tapping the widget deep-links into the app at
//   learnofchrist://study/<bookSlug>/<chapter>
// which the SwiftUI app handles via onOpenURL in LearnOfChristApp.swift.

import WidgetKit
import SwiftUI

// MARK: - Timeline

struct TodaysChapterEntry: TimelineEntry {
    let date: Date
    let state: SharedReadingState
}

struct TodaysChapterProvider: TimelineProvider {
    func placeholder(in context: Context) -> TodaysChapterEntry {
        TodaysChapterEntry(date: Date(), state: .placeholder)
    }

    func getSnapshot(in context: Context,
                     completion: @escaping (TodaysChapterEntry) -> Void) {
        completion(TodaysChapterEntry(date: Date(), state: SharedReadingStore.load()))
    }

    func getTimeline(in context: Context,
                     completion: @escaping (Timeline<TodaysChapterEntry>) -> Void) {
        let now = Date()
        let entry = TodaysChapterEntry(date: now, state: SharedReadingStore.load())
        // Re-evaluate every 30 minutes — the rotation only changes when the
        // user reads a chapter or wakes the app, so a slow cadence is fine.
        let next = Calendar.current.date(byAdding: .minute, value: 30, to: now)!
        completion(Timeline(entries: [entry], policy: .after(next)))
    }
}

// MARK: - View

struct TodaysChapterWidgetView: View {
    @Environment(\.widgetFamily) private var family
    let entry: TodaysChapterEntry

    var body: some View {
        switch family {
        case .systemMedium:
            mediumLayout
        default:
            smallLayout
        }
    }

    private var smallLayout: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("Today's chapter")
                .font(.caption2.weight(.semibold))
                .foregroundStyle(.secondary)
                .textCase(.uppercase)
            Text(entry.state.reference)
                .font(.system(.title2, design: .serif).weight(.semibold))
                .foregroundStyle(.primary)
                .lineLimit(2)
                .minimumScaleFactor(0.7)
            Spacer(minLength: 0)
            HStack {
                Spacer()
                Image(systemName: "book.closed.fill")
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundStyle(Color(red: 0.69, green: 0.31, blue: 0.20))
            }
        }
        .padding(14)
        .containerBackground(for: .widget) {
            LinearGradient(
                colors: [Color(red: 0.96, green: 0.93, blue: 0.85),
                         Color(red: 0.91, green: 0.83, blue: 0.70)],
                startPoint: .topLeading, endPoint: .bottomTrailing
            )
        }
        .widgetURL(URL(string: "learnofchrist://study/\(entry.state.bookSlug)/\(entry.state.chapter)"))
    }

    private var mediumLayout: some View {
        HStack(alignment: .top, spacing: 14) {
            VStack(alignment: .leading, spacing: 6) {
                Text("Today's chapter")
                    .font(.caption2.weight(.semibold))
                    .foregroundStyle(.secondary)
                    .textCase(.uppercase)
                Text(entry.state.reference)
                    .font(.system(.title2, design: .serif).weight(.semibold))
                    .foregroundStyle(.primary)
                    .lineLimit(2)
                Spacer(minLength: 0)
                Image(systemName: "book.closed.fill")
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundStyle(Color(red: 0.69, green: 0.31, blue: 0.20))
            }
            .frame(maxWidth: 130, alignment: .leading)

            Divider().opacity(0.35)

            VStack(alignment: .leading, spacing: 6) {
                if let hook = entry.state.verseHook, !hook.isEmpty {
                    Text(hook)
                        .font(.system(.footnote, design: .serif))
                        .italic()
                        .foregroundStyle(.primary.opacity(0.85))
                        .lineLimit(5)
                        .minimumScaleFactor(0.85)
                } else {
                    Text("Open to begin reading.")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
                Spacer(minLength: 0)
                Text("Tap to read →")
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(Color(red: 0.69, green: 0.31, blue: 0.20))
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding(16)
        .containerBackground(for: .widget) {
            LinearGradient(
                colors: [Color(red: 0.96, green: 0.93, blue: 0.85),
                         Color(red: 0.91, green: 0.83, blue: 0.70)],
                startPoint: .topLeading, endPoint: .bottomTrailing
            )
        }
        .widgetURL(URL(string: "learnofchrist://study/\(entry.state.bookSlug)/\(entry.state.chapter)"))
    }
}

// MARK: - Widget config

struct TodaysChapterWidget: Widget {
    let kind = "TodaysChapterWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TodaysChapterProvider()) { entry in
            TodaysChapterWidgetView(entry: entry)
        }
        .configurationDisplayName("Today's chapter")
        .description("Tap to open the next chapter in your study rotation.")
        .supportedFamilies([.systemSmall, .systemMedium])
    }
}
