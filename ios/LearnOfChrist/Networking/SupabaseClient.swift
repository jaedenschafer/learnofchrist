// SupabaseClient.swift
// ────────────────────────────────────────────────────────────────────────────
// Thin HTTPS client for the three Supabase surfaces we use on iOS:
//
//   • /auth/v1/*   — sign-in with Apple id_token, refresh, sign-out.
//   • /rest/v1/*   — PostgREST. Read / insert / upsert / patch on
//                     user-data tables.
//   • /rest/v1/rpc/* — RPC functions (v1_sync_user_data, claim_local_data).
//
// Every request carries `apikey: <anonKey>`. Authenticated requests
// add `Authorization: Bearer <accessToken>`. The token comes from a
// caller-supplied `SupabaseSession` so this layer stays auth-agnostic
// — AuthService owns the session lifecycle, this client just consumes.
//
// Why not the official supabase-swift SDK? It's not installed, it
// would pull in a dependency tree we don't otherwise need, and the
// surface we actually touch is small enough to spell out clearly.
// If/when the SDK gets richer features we want (realtime, GoTrue
// helpers, schema-codegen), revisit.

import Foundation

enum SupabaseError: Error, LocalizedError {
    case http(status: Int, body: String?)
    case decoding(Error)
    case encoding(Error)
    case missingSession
    case transport(Error)

    var errorDescription: String? {
        switch self {
        case .http(let status, let body):
            return "Supabase HTTP \(status)\(body.map { ": \($0)" } ?? "")"
        case .decoding(let e):
            return "Supabase decoding error: \(e)"
        case .encoding(let e):
            return "Supabase encoding error: \(e)"
        case .missingSession:
            return "Supabase request required a session but none was present"
        case .transport(let e):
            return "Supabase transport error: \(e)"
        }
    }
}

actor SupabaseClient {
    static let shared = SupabaseClient()

    private let session: URLSession
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    init(session: URLSession = .shared) {
        self.session = session
        let enc = JSONEncoder()
        enc.dateEncodingStrategy = .iso8601
        self.encoder = enc
        let dec = JSONDecoder()
        dec.dateDecodingStrategy = .iso8601
        self.decoder = dec
    }

    // MARK: - Auth endpoints

    /// Sign in (or up — Supabase auto-provisions on first use) by
    /// exchanging an Apple identity token for a Supabase session.
    /// `rawNonce` is the un-hashed nonce we generated locally and
    /// passed to Apple's request as a SHA-256 hash; Supabase verifies
    /// the match against the `nonce` claim in the id_token.
    func signInWithApple(idToken: String, rawNonce: String) async throws -> SupabaseSession {
        let url = SupabaseConfig.authURL("token").appending(queryItems: [
            URLQueryItem(name: "grant_type", value: "id_token"),
        ])
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")

        let body = AppleSignInBody(
            provider: "apple",
            id_token: idToken,
            nonce: rawNonce
        )
        do {
            req.httpBody = try encoder.encode(body)
        } catch {
            throw SupabaseError.encoding(error)
        }

        let data = try await sendExpectingOK(req)
        do {
            return try SupabaseSession.decode(from: data)
        } catch {
            throw SupabaseError.decoding(error)
        }
    }

    /// Exchange a refresh token for a fresh access token. Caller is
    /// responsible for persisting the merged session via
    /// `SupabaseSession.merged(withRefreshResponse:)`.
    func refresh(_ existing: SupabaseSession) async throws -> SupabaseSession {
        let url = SupabaseConfig.authURL("token").appending(queryItems: [
            URLQueryItem(name: "grant_type", value: "refresh_token"),
        ])
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")

        let body = ["refresh_token": existing.refreshToken]
        do {
            req.httpBody = try encoder.encode(body)
        } catch {
            throw SupabaseError.encoding(error)
        }

        let data = try await sendExpectingOK(req)
        do {
            return try existing.merged(withRefreshResponse: data)
        } catch {
            throw SupabaseError.decoding(error)
        }
    }

    /// Revoke server-side. Even if this fails we should drop the local
    /// session — caller passes `bestEffort: true` for sign-out flows
    /// so a network error never traps the user in a half-signed state.
    func signOut(_ session: SupabaseSession, bestEffort: Bool = true) async throws {
        let url = SupabaseConfig.authURL("logout")
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        req.setValue("Bearer \(session.accessToken)", forHTTPHeaderField: "Authorization")
        do {
            _ = try await sendExpectingOK(req)
        } catch {
            if !bestEffort { throw error }
        }
    }

    // MARK: - PostgREST endpoints

    /// Upsert one or more rows into `<schema>.<table>` using the named
    /// `onConflict` columns. Returns the server-merged rows decoded as `T`.
    func upsert<Row: Encodable, T: Decodable>(
        table: String,
        rows: [Row],
        onConflict: String,
        session sess: SupabaseSession,
        as type: T.Type = T.self
    ) async throws -> [T] {
        let url = SupabaseConfig.restURL(table).appending(queryItems: [
            URLQueryItem(name: "on_conflict", value: onConflict),
        ])
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        req.setValue("Bearer \(sess.accessToken)", forHTTPHeaderField: "Authorization")
        req.setValue("resolution=merge-duplicates,return=representation", forHTTPHeaderField: "Prefer")
        do {
            req.httpBody = try encoder.encode(rows)
        } catch {
            throw SupabaseError.encoding(error)
        }

        let data = try await sendExpectingOK(req)
        do {
            return try decoder.decode([T].self, from: data)
        } catch {
            throw SupabaseError.decoding(error)
        }
    }

    /// Call a PostgREST RPC function. The body is the function's
    /// named-argument map.
    func rpc<Body: Encodable, T: Decodable>(
        _ functionName: String,
        body: Body,
        session sess: SupabaseSession? = nil,
        as type: T.Type = T.self
    ) async throws -> T {
        let url = SupabaseConfig.rpcURL(functionName)
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.setValue(SupabaseConfig.anonKey, forHTTPHeaderField: "apikey")
        if let s = sess {
            req.setValue("Bearer \(s.accessToken)", forHTTPHeaderField: "Authorization")
        }
        do {
            req.httpBody = try encoder.encode(body)
        } catch {
            throw SupabaseError.encoding(error)
        }

        let data = try await sendExpectingOK(req)
        do {
            return try decoder.decode(T.self, from: data)
        } catch {
            throw SupabaseError.decoding(error)
        }
    }

    // MARK: - Internals

    private func sendExpectingOK(_ req: URLRequest) async throws -> Data {
        do {
            let (data, resp) = try await session.data(for: req)
            guard let http = resp as? HTTPURLResponse else { return data }
            guard (200..<300).contains(http.statusCode) else {
                let bodyString = String(data: data, encoding: .utf8)
                throw SupabaseError.http(status: http.statusCode, body: bodyString)
            }
            return data
        } catch let e as SupabaseError {
            throw e
        } catch {
            throw SupabaseError.transport(error)
        }
    }

    // MARK: - Wire shapes

    private struct AppleSignInBody: Encodable {
        let provider: String
        let id_token: String
        let nonce: String
    }
}
