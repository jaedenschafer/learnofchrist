// ClientID.swift
// ────────────────────────────────────────────────────────────────────────────
// Stable per-install identifier. Stamped on every local row so when the
// user signs in and we claim the local data into Supabase, every synced
// row carries the device that wrote it. Matches the `client_id` column
// added in migration 056.
//
// We keep the value in UserDefaults rather than the keychain. If the
// user wipes the app, generating a new client_id is the right behavior
// — there's no value to persisting the same id across uninstalls.

import Foundation

enum ClientID {
    private static let key = "com.learnofchrist.clientId"

    /// Returns the device's client UUID, generating one on first read.
    static func current() -> UUID {
        let defaults = UserDefaults.standard
        if let raw = defaults.string(forKey: key), let uuid = UUID(uuidString: raw) {
            return uuid
        }
        let new = UUID()
        defaults.set(new.uuidString, forKey: key)
        return new
    }
}
