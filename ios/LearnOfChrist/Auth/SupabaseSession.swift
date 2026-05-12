// SupabaseSession.swift
// ────────────────────────────────────────────────────────────────────────────
// In-memory + on-disk model of a Supabase auth session. Stored in the
// Keychain (see Keychain.swift) so the user stays signed in across
// launches. Refreshed on demand by AuthService when the access token
// nears expiry.
//
// Field shape mirrors what `POST /auth/v1/token?grant_type=*` returns,
// which is what we get back from Apple sign-in and refresh calls. Time
// is normalised to an absolute `expiresAt` instead of the `expires_in`
// seconds the API returns, so the on-disk copy doesn't lie about
// validity after a long background gap.

import Foundation

struct SupabaseSession: Codable, Sendable, Hashable {
    let accessToken: String
    let refreshToken: String
    /// Absolute time when the access token will stop being accepted.
    /// Computed from `expires_in` at the time we received it.
    let expiresAt: Date
    /// Authenticated user's Supabase id (UUID, matches auth.users.id).
    let userId: String
    /// Token type — usually "bearer". Kept verbatim from the server
    /// response so we never have to guess what to send back.
    let tokenType: String

    /// Decode from the raw `/auth/v1/token` response shape. The server
    /// returns `expires_in` in seconds; we stamp the absolute expiry
    /// once on construction so the rest of the app doesn't have to
    /// re-derive it.
    static func decode(from data: Data) throws -> SupabaseSession {
        let raw = try JSONDecoder().decode(TokenResponse.self, from: data)
        return SupabaseSession(
            accessToken: raw.access_token,
            refreshToken: raw.refresh_token,
            expiresAt: Date().addingTimeInterval(TimeInterval(raw.expires_in)),
            userId: raw.user.id,
            tokenType: raw.token_type
        )
    }

    /// Refreshing the access token gives a new access + (potentially)
    /// new refresh + new expires_in but no fresh user payload.
    func merged(withRefreshResponse data: Data) throws -> SupabaseSession {
        let raw = try JSONDecoder().decode(RefreshResponse.self, from: data)
        return SupabaseSession(
            accessToken: raw.access_token,
            refreshToken: raw.refresh_token ?? refreshToken,
            expiresAt: Date().addingTimeInterval(TimeInterval(raw.expires_in)),
            userId: userId,
            tokenType: raw.token_type
        )
    }

    /// True when the access token is within `leeway` of expiry. Used
    /// by SupabaseClient to refresh proactively before issuing a call.
    func isExpiring(within leeway: TimeInterval = 60) -> Bool {
        Date().addingTimeInterval(leeway) >= expiresAt
    }

    // MARK: - Wire shapes

    /// Sign-in response from `POST /auth/v1/token?grant_type=id_token`.
    /// The `user` block is much bigger than `User` below — we only
    /// keep `id` for now. If we ever need email / metadata we extend
    /// this struct rather than re-fetching.
    private struct TokenResponse: Decodable {
        let access_token: String
        let refresh_token: String
        let expires_in: Int
        let token_type: String
        let user: User
    }

    private struct RefreshResponse: Decodable {
        let access_token: String
        let refresh_token: String?
        let expires_in: Int
        let token_type: String
    }

    private struct User: Decodable {
        let id: String
    }

    // MARK: - Keychain persistence

    /// Keychain account key — matches no UserDefaults key intentionally
    /// so a stray Defaults wipe doesn't sign us out.
    static let keychainAccount = "supabase.session.v1"

    static func loadFromKeychain() -> SupabaseSession? {
        do {
            return try Keychain.get(SupabaseSession.self, forKey: keychainAccount)
        } catch {
            // Treat any decode/keychain error as "no session". Worst case
            // the user signs in again.
            return nil
        }
    }

    func saveToKeychain() throws {
        try Keychain.set(self, forKey: SupabaseSession.keychainAccount)
    }

    static func deleteFromKeychain() throws {
        try Keychain.delete(forKey: keychainAccount)
    }
}
