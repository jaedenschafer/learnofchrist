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

    /// Construct from the URL-fragment payload Supabase hands back on an
    /// OAuth implicit-grant callback (Google, GitHub, etc.). The URL
    /// looks like:
    ///   learnofchrist://auth-callback#access_token=…&refresh_token=…
    ///     &expires_in=3600&token_type=bearer&provider_token=…
    /// We pull out the four fields we need; userId is decoded from the
    /// JWT `sub` claim since OAuth implicit grants don't include a
    /// nested user payload.
    static func fromOAuthCallback(url: URL) throws -> SupabaseSession {
        // Fragment is everything after the "#". URLComponents gives us
        // a query-encoded string we can re-parse with URLQueryItem.
        guard let fragment = url.fragment, !fragment.isEmpty else {
            throw OAuthCallbackError.noFragment
        }
        var comps = URLComponents()
        comps.percentEncodedQuery = fragment
        let items = comps.queryItems ?? []

        func pick(_ key: String) -> String? {
            items.first(where: { $0.name == key })?.value
        }

        guard
            let access = pick("access_token"),
            let refresh = pick("refresh_token")
        else {
            // Supabase sometimes returns an error in the fragment when
            // the user denies consent — surface that to the UI.
            if let err = pick("error_description") ?? pick("error") {
                throw OAuthCallbackError.providerError(err)
            }
            throw OAuthCallbackError.missingTokens
        }

        let expiresIn = Int(pick("expires_in") ?? "") ?? 3600
        let tokenType = pick("token_type") ?? "bearer"
        let userId = Self.subClaim(fromJWT: access) ?? ""

        return SupabaseSession(
            accessToken: access,
            refreshToken: refresh,
            expiresAt: Date().addingTimeInterval(TimeInterval(expiresIn)),
            userId: userId,
            tokenType: tokenType
        )
    }

    enum OAuthCallbackError: Error, LocalizedError {
        case noFragment
        case missingTokens
        case providerError(String)

        var errorDescription: String? {
            switch self {
            case .noFragment:
                return "Sign in did not return a callback payload."
            case .missingTokens:
                return "Sign in callback was missing tokens."
            case .providerError(let s):
                return "Sign in failed: \(s)"
            }
        }
    }

    /// Decode the `sub` claim out of a JWT. We don't verify the
    /// signature here — Supabase's PostgREST does that on every request
    /// — we just need the user id for client-side bookkeeping.
    private static func subClaim(fromJWT token: String) -> String? {
        let parts = token.split(separator: ".")
        guard parts.count >= 2 else { return nil }
        var payload = String(parts[1])
        // base64url → base64 padding
        payload = payload
            .replacingOccurrences(of: "-", with: "+")
            .replacingOccurrences(of: "_", with: "/")
        while payload.count % 4 != 0 { payload.append("=") }
        guard let data = Data(base64Encoded: payload) else { return nil }
        guard let obj = try? JSONSerialization.jsonObject(with: data) as? [String: Any] else {
            return nil
        }
        return obj["sub"] as? String
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
