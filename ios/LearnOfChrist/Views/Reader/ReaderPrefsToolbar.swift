// ReaderPrefsToolbar.swift
// ────────────────────────────────────────────────────────────────────────────
// Compact in-reader toggle for the two filter-affecting preferences —
// study depth and audience. Translation is omitted from this menu (it
// lives in the full Settings tab) because changing translation is a
// less-frequent decision and shouldn't crowd the reader chrome.
//
// Rendered as a single SF Symbol button in the trailing toolbar of
// `ChapterReaderView`. Tapping it opens a Menu with two segmented
// pickers stacked vertically. Selection writes through to the same
// @AppStorage keys the Settings tab does (`loc-study-level`,
// `loc-audience`), so the two surfaces stay in sync automatically —
// no notification plumbing, no manual reconciliation.
//
// This view is the audit punch-list item #10's reader-side
// counterpart; the full picker lives in
// `Views/Settings/SettingsView.swift → ReadingSection`.

import SwiftUI

struct ReaderPrefsToolbar: View {
    @Binding var studyLevelRaw: String
    @Binding var audienceRaw: String

    var body: some View {
        Menu {
            // Study depth picker — segmented-style inline in the Menu
            // surface. SwiftUI renders Pickers nested in Menus as a
            // submenu on phone and an inline section on iPad.
            Picker("Study depth", selection: $studyLevelRaw) {
                ForEach(StudyLevel.allCases, id: \.rawValue) { level in
                    Label(level.label, systemImage: level.symbol)
                        .tag(level.rawValue)
                }
            }
            .pickerStyle(.inline)

            Picker("Audience", selection: $audienceRaw) {
                ForEach(Audience.iOSSupported, id: \.rawValue) { aud in
                    Label(aud.label, systemImage: aud.symbol)
                        .tag(aud.rawValue)
                }
            }
            .pickerStyle(.inline)
        } label: {
            Image(systemName: "slider.horizontal.3")
                .accessibilityLabel("Reading depth and audience")
        }
    }
}
