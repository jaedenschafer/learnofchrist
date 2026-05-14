// LearnOfChristWidgets.swift
// ────────────────────────────────────────────────────────────────────────────
// Widget bundle entry point. Registers every widget the extension ships.
//
// We ship three widget kinds, all driven from a single rotating-chapter
// data source (see SharedReadingState.swift):
//
//   1. TodaysChapterWidget       — home screen, small + medium families.
//                                  Title + verse one-liner + tap → opens the
//                                  reader via deep link learnofchrist://study.
//   2. LockScreenInlineWidget    — Lock Screen "inline" accessory; shows the
//                                  reference (e.g. "Genesis 1") in the small
//                                  status text strip above the clock.
//   3. LockScreenCircularWidget  — Lock Screen circular accessory; renders the
//                                  app's monogram with the chapter number.
//
// All three pull from a single TimelineProvider so the OS only does one work
// pass per refresh window.

import WidgetKit
import SwiftUI

@main
struct LearnOfChristWidgetsBundle: WidgetBundle {
    var body: some Widget {
        TodaysChapterWidget()
        LockScreenInlineWidget()
        LockScreenCircularWidget()
    }
}
