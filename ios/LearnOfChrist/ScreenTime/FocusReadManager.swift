// FocusReadManager.swift
// ────────────────────────────────────────────────────────────────────────────
// "Read to unlock" — the Screen Time lock-out feature.
//
// Idea: the user picks a set of distracting apps (TikTok, Instagram, etc).
// Those apps stay blocked at the system level via ManagedSettings. When the
// user finishes reading a chapter in Learn of Christ, we unlock the selected
// apps for `unlockDuration` (default: 5 minutes).
//
// Required entitlement: com.apple.developer.family-controls
//   → must be requested from Apple via
//     https://developer.apple.com/contact/request/family-controls-distribution
//   The TestFlight build can run this code on a device that has been granted
//   FamilyControls.authorize() permission, but distribution to non-developer
//   testers requires the entitlement.
//
// This file is the single, self-contained surface the UI calls into. The
// rest of the codebase only sees `FocusReadManager.shared`.
//
// All Family Controls APIs are gated behind `#if canImport(FamilyControls)`
// so the project still builds on the iOS Simulator (which has stubs but no
// real selection picker).

import Foundation
import SwiftUI

#if canImport(FamilyControls) && canImport(ManagedSettings) && canImport(DeviceActivity)
import FamilyControls
import ManagedSettings
import DeviceActivity

@available(iOS 16.0, *)
@MainActor
public final class FocusReadManager: ObservableObject {
    public static let shared = FocusReadManager()

    /// User-configurable: how long to unlock the blocked apps after a
    /// chapter is finished. Default 5 minutes.
    @AppStorage("loc.focusRead.unlockSeconds")
    public var unlockSeconds: Int = 300

    /// The current set of restricted apps/categories chosen by the user.
    /// FamilyActivitySelection is opaque — we never see the bundle IDs,
    /// only Apple-issued ApplicationToken/CategoryToken handles. We persist
    /// the JSON encoding in UserDefaults so the choice survives relaunch.
    @Published public private(set) var selection = FamilyActivitySelection()

    /// Whether the user has currently authorized FamilyControls.
    /// authorize() must be called explicitly from the UI on first use.
    @Published public private(set) var authorized = false

    /// Whether a focus block is currently active (apps shielded).
    @Published public private(set) var isBlocking = false

    private let store = ManagedSettingsStore(named: .focusRead)
    private let defaults = UserDefaults.standard
    private let selectionKey = "loc.focusRead.selection.v1"

    private init() {
        loadSelection()
        authorized = (AuthorizationCenter.shared.authorizationStatus == .approved)
    }

    // MARK: - Authorization

    public func requestAuthorization() async throws {
        try await AuthorizationCenter.shared.requestAuthorization(for: .individual)
        authorized = (AuthorizationCenter.shared.authorizationStatus == .approved)
    }

    // MARK: - Selection persistence

    public func update(selection: FamilyActivitySelection) {
        self.selection = selection
        if let data = try? JSONEncoder().encode(selection) {
            defaults.set(data, forKey: selectionKey)
        }
    }

    private func loadSelection() {
        guard
            let data = defaults.data(forKey: selectionKey),
            let decoded = try? JSONDecoder().decode(FamilyActivitySelection.self, from: data)
        else { return }
        selection = decoded
    }

    // MARK: - Blocking lifecycle

    /// Start blocking the user's selected apps. Called when the user opts in.
    public func startBlocking() {
        store.shield.applications = selection.applicationTokens.isEmpty ? nil : selection.applicationTokens
        store.shield.applicationCategories = selection.categoryTokens.isEmpty
            ? nil
            : ShieldSettings.ActivityCategoryPolicy.specific(selection.categoryTokens, except: Set())
        isBlocking = true
    }

    /// Tear down all shields. Called from Settings → "Stop blocking".
    public func stopBlocking() {
        store.clearAllSettings()
        isBlocking = false
    }

    /// Called by the reader after a chapter is finished. Lifts the shield
    /// for `unlockSeconds`, then re-applies it.
    public func grantUnlock() async {
        guard authorized, isBlocking else { return }
        stopBlocking()
        try? await Task.sleep(for: .seconds(unlockSeconds))
        startBlocking()
    }
}

private extension ManagedSettingsStore.Name {
    static let focusRead = Self("loc.focusRead")
}

#else
// MARK: - Stub for Simulator / pre-iOS16

/// Compile-time fallback when FamilyControls isn't available.
public final class FocusReadManager: ObservableObject {
    public static let shared = FocusReadManager()
    @Published public private(set) var authorized = false
    @Published public private(set) var isBlocking = false
    public var unlockSeconds: Int = 300

    private init() {}

    public func requestAuthorization() async throws {}
    public func startBlocking() {}
    public func stopBlocking() {}
    public func grantUnlock() async {}
}

#endif
