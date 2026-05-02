// AppearancePreferences.swift
// ────────────────────────────────────────────────────────────────────────────
// Typed wrapper around @AppStorage for visual preferences. Owned by
// the user via SettingsView; consumed by RootView to apply
// preferredColorScheme app-wide.
//
// Rule of thumb: any view that needs to *react* to a preference uses
// @AppStorage directly with the matching key constant. We don't try to
// re-invent SwiftUI's reactivity here.

import SwiftUI

enum AppearancePreferences {
    enum Key {
        static let colorScheme = "appearance.colorScheme"
        static let textSize    = "appearance.textSize"
    }

    /// User-selected color scheme. `.system` follows the OS setting.
    enum ColorSchemePreference: String, CaseIterable, Identifiable {
        case system, light, dark

        var id: String { rawValue }

        var label: String {
            switch self {
            case .system: return "System"
            case .light:  return "Light"
            case .dark:   return "Dark"
            }
        }

        var iconName: String {
            switch self {
            case .system: return "circle.lefthalf.filled"
            case .light:  return "sun.max"
            case .dark:   return "moon"
            }
        }

        /// Maps the user's preference to the `preferredColorScheme`
        /// modifier value. `.system` returns nil so SwiftUI defers
        /// to the platform.
        var resolved: ColorScheme? {
            switch self {
            case .system: return nil
            case .light:  return .light
            case .dark:   return .dark
            }
        }
    }

    /// User-selected reading text size. `.medium` matches the
    /// system Dynamic Type default.
    enum TextSizePreference: String, CaseIterable, Identifiable {
        case small, medium, large, xlarge

        var id: String { rawValue }

        var label: String {
            switch self {
            case .small:  return "Compact"
            case .medium: return "Default"
            case .large:  return "Comfortable"
            case .xlarge: return "Large"
            }
        }

        /// Multiplier applied to body text in the reader.
        var bodyScale: CGFloat {
            switch self {
            case .small:  return 0.94
            case .medium: return 1.0
            case .large:  return 1.10
            case .xlarge: return 1.22
            }
        }

        /// Maps the user's reading-text preference to a SwiftUI
        /// DynamicTypeSize. We deliberately stay inside the
        /// "non-accessibility" range — going larger than .xxxLarge
        /// breaks the reader's verse-row layout. Users who want
        /// accessibility-scale text can use the system Dynamic Type
        /// slider, which this picker does not override.
        var dynamicTypeSize: DynamicTypeSize {
            switch self {
            case .small:  return .small
            case .medium: return .large       // system default
            case .large:  return .xLarge
            case .xlarge: return .xxxLarge
            }
        }
    }
}
