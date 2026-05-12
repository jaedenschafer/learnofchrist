// Keychain.swift
// ────────────────────────────────────────────────────────────────────────────
// Minimal Keychain helper for storing the Supabase session blob. We
// keep the surface tiny — set / get / delete on a single keyspace
// (kSecClassGenericPassword, service = our app bundle id). The session
// blob is Codable JSON.
//
// Rationale for Keychain over UserDefaults: the access_token + refresh
// token together let anyone act as the user. iOS-class apps with
// trivial cloud-backup of UserDefaults could leak them.
// kSecAttrAccessibleAfterFirstUnlock keeps the tokens available during
// background sync but excludes them from device-to-device migration
// (iCloud backup) without explicit user opt-in.

import Foundation
import Security

enum Keychain {

    enum KeychainError: Error {
        case unexpectedStatus(OSStatus)
        case decodeFailure
    }

    /// Service identifier — appears in the Keychain access list. Match
    /// the app bundle id so it's obvious which app owns these entries.
    private static let service = "com.learnofchrist.app"

    // MARK: - Generic Data API

    static func set(_ data: Data, forKey key: String) throws {
        var query: [CFString: Any] = [
            kSecClass: kSecClassGenericPassword,
            kSecAttrService: service,
            kSecAttrAccount: key,
        ]
        SecItemDelete(query as CFDictionary)

        query[kSecValueData] = data
        query[kSecAttrAccessible] = kSecAttrAccessibleAfterFirstUnlock

        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else {
            throw KeychainError.unexpectedStatus(status)
        }
    }

    static func get(forKey key: String) throws -> Data? {
        let query: [CFString: Any] = [
            kSecClass: kSecClassGenericPassword,
            kSecAttrService: service,
            kSecAttrAccount: key,
            kSecReturnData: true,
            kSecMatchLimit: kSecMatchLimitOne,
        ]
        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        switch status {
        case errSecSuccess:
            return result as? Data
        case errSecItemNotFound:
            return nil
        default:
            throw KeychainError.unexpectedStatus(status)
        }
    }

    static func delete(forKey key: String) throws {
        let query: [CFString: Any] = [
            kSecClass: kSecClassGenericPassword,
            kSecAttrService: service,
            kSecAttrAccount: key,
        ]
        let status = SecItemDelete(query as CFDictionary)
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw KeychainError.unexpectedStatus(status)
        }
    }

    // MARK: - Codable helpers

    static func set<T: Encodable>(_ value: T, forKey key: String) throws {
        let data = try JSONEncoder().encode(value)
        try set(data, forKey: key)
    }

    static func get<T: Decodable>(_ type: T.Type, forKey key: String) throws -> T? {
        guard let data = try get(forKey: key) else { return nil }
        return try JSONDecoder().decode(type, from: data)
    }
}
