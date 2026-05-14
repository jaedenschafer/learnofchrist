// FocusReadView.swift
// ────────────────────────────────────────────────────────────────────────────
// Settings → "Focus & Reading" pane.
//
// Lets the user opt in to the Read-To-Unlock flow:
//   1. Tap "Enable Family Controls"  → requestAuthorization()
//   2. Tap "Choose apps to block"    → FamilyActivityPicker
//   3. Toggle "Block apps now"       → ManagedSettingsStore shield ON/OFF
//   4. Adjust "Unlock for N minutes" → unlockSeconds
//
// When the user finishes reading a chapter, ChapterReaderView calls
// FocusReadManager.shared.grantUnlock(), which lifts the shield for
// the configured duration and re-applies it.
//
// All FamilyControls bits are gated behind a runtime / SDK check so the
// pane still renders on the Simulator and on iOS 15.

import SwiftUI

#if canImport(FamilyControls)
import FamilyControls
import ManagedSettings
#endif

struct FocusReadView: View {
    #if canImport(FamilyControls)
    @StateObject private var manager = FocusReadManager.shared
    @State private var pickerOpen = false
    #endif

    var body: some View {
        List {
            Section {
                Text("Read a Bible chapter, unlock your distracting apps for a few minutes. Choose which apps stay blocked the rest of the time.")
                    .font(.callout)
                    .foregroundStyle(.secondary)
            } header: {
                Text("How it works")
            }

            #if canImport(FamilyControls)
            authorizationSection
            selectionSection
            blockingSection
            timingSection
            #else
            Section {
                Text("Family Controls aren't available on this device. Run on iOS 16+ to use Read-To-Unlock.")
                    .font(.callout)
                    .foregroundStyle(.secondary)
            }
            #endif
        }
        .navigationTitle("Focus & Reading")
        .navigationBarTitleDisplayMode(.inline)
    }

    #if canImport(FamilyControls)

    private var authorizationSection: some View {
        Section {
            HStack {
                Image(systemName: manager.authorized ? "checkmark.seal.fill" : "exclamationmark.shield")
                    .foregroundStyle(manager.authorized ? Color.green : Color.orange)
                Text(manager.authorized ? "Family Controls enabled" : "Family Controls not enabled")
                Spacer()
                if !manager.authorized {
                    Button("Enable") {
                        Task { try? await manager.requestAuthorization() }
                    }
                    .buttonStyle(.borderedProminent)
                }
            }
        } header: {
            Text("Permission")
        }
    }

    private var selectionSection: some View {
        Section {
            Button {
                pickerOpen = true
            } label: {
                HStack {
                    Image(systemName: "apps.iphone")
                    Text("Choose apps to block")
                    Spacer()
                    Text(selectionCountLabel)
                        .foregroundStyle(.secondary)
                }
            }
            .disabled(!manager.authorized)
        } header: {
            Text("Apps")
        } footer: {
            Text("Apple decides which apps you see in the picker — it isn't possible to pre-populate a list. The choices stay private on your device.")
        }
        .familyActivityPicker(isPresented: $pickerOpen, selection: Binding(
            get: { manager.selection },
            set: { manager.update(selection: $0) }
        ))
    }

    private var blockingSection: some View {
        Section {
            Toggle(isOn: Binding(
                get: { manager.isBlocking },
                set: { newValue in
                    if newValue { manager.startBlocking() } else { manager.stopBlocking() }
                }
            )) {
                Text("Block selected apps")
            }
            .disabled(!manager.authorized)
        } header: {
            Text("Status")
        }
    }

    private var timingSection: some View {
        Section {
            Stepper(value: Binding(
                get: { manager.unlockSeconds / 60 },
                set: { manager.unlockSeconds = $0 * 60 }
            ), in: 1...30, step: 1) {
                HStack {
                    Text("Unlock for")
                    Spacer()
                    Text("\(manager.unlockSeconds / 60) min")
                        .foregroundStyle(.secondary)
                }
            }
        } header: {
            Text("Reward")
        } footer: {
            Text("Each completed chapter unlocks the blocked apps for this duration.")
        }
    }

    private var selectionCountLabel: String {
        let n = manager.selection.applicationTokens.count
              + manager.selection.categoryTokens.count
        if n == 0 { return "None" }
        return n == 1 ? "1 item" : "\(n) items"
    }

    #endif
}
