// AuthService.swift
// ────────────────────────────────────────────────────────────────────────────
// Top-level coordinator for sign-in / sign-out and the Supabase session
// lifecycle. Hydrates from Keychain on init, exposes the live session
// to views via @Observable, refreshes proactively before expiry, and
// orchestrates the first-sign-in claim handoff.
//
// Lifecycle:
//   • App launch — `loadPersistedSession()` reads the Keychain. If a
//     session is present and refresh-able, AuthService is "signed in"
//     immediately. Otherwise we boot anonymous.
//   • Sign-in tap — `signInWithApple()` runs the Apple flow, exchanges
//     the id_token at Supabase, persists the session, kicks off the
//     first-sign-in claim of local rows.
//   • Per-call refresh — `validSession()` returns a session whose
//     access token is good for at least the next minute, refreshing
//     if needed. Callers pass that into SupabaseClient.
//   • Sign-out — clears Keychain, posts to /auth/v1/logout
//     best-effort, optionally wipes local data.

import Foundation
import SwiftUI

@MainActor
@Observable
final class AuthService {
    /// The currently-signed-in session, or nil for anonymous.
    private(set) var session: SupabaseSession?

    /// Latest error to surface in the sign-in UI. Cleared on the next
    /// successful attempt or sign-out.
    var lastError: String?

    /// True while a sign-in is in flight — surfaces in the button
    /// state.
    private(set) var isSigningIn: Bool = false

    private let client: SupabaseClient

    init(client: SupabaseClient = .shared) {
        self.client = client
        // Hydrate on init — synchronous Keychain read, microseconds.
        self.session = SupabaseSession.loadFromKeychain()
    }

    var isSignedIn: Bool { session != nil }

    // MARK: - Sign-in

    func signInWithApple() async {
        isSigningIn = true
        defer { isSigningIn = false }
        lastError = nil

        let coordinator = AppleSignInCoordinator()
        let appleResult: AppleSignInResult
        do {
            appleResult = try await coordinator.signIn()
        } catch AppleSignInError.canceled {
            // User dismissed the sheet — silent.
            return
        } catch {
            lastError = error.localizedDescription
            return
        }

        do {
            let new = try await client.signInWithApple(
                idToken: appleResult.identityToken,
                rawNonce: appleResult.rawNonce
            )
            try new.saveToKeychain()
            self.session = new
        } catch {
            lastError = error.localizedDescription
        }
    }

    /// Google sign-in via Supabase's hosted OAuth endpoint. Opens an
    /// ASWebAuthenticationSession, waits for the redirect to
    /// `learnofchrist://auth-callback`, parses tokens out of the URL
    /// fragment, persists the session, and triggers a sync. No Google
    /// SDK — the Supabase implicit grant gives us everything we need.
    func signInWithGoogle() async {
        isSigningIn = true
        defer { isSigningIn = false }
        lastError = nil

        let coordinator = GoogleSignInCoordinator()
        let callbackURL: URL
        do {
            callbackURL = try await coordinator.signIn()
        } catch GoogleSignInError.canceled {
            return
        } catch {
            lastError = error.localizedDescription
            return
        }

        do {
            let new = try SupabaseSession.fromOAuthCallback(url: callbackURL)
            try new.saveToKeychain()
            self.session = new
        } catch {
            lastError = error.localizedDescription
        }
    }

    // MARK: - Sign-out

    func signOut() async {
        let current = session
        // Drop the in-memory + persisted session first so the UI
        // flips to anonymous immediately. Server-side revoke is
        // best-effort below.
        do { try SupabaseSession.deleteFromKeychain() } catch { /* ignore */ }
        self.session = nil
        if let s = current {
            try? await client.signOut(s, bestEffort: true)
        }
    }

    // MARK: - Refresh / valid session

    /// Returns a session whose access token is valid for at least the
    /// next minute. Refreshes on demand. Returns nil if the user
    /// isn't signed in.
    ///
    /// Callers should treat nil as "couldn't refresh — sign in again";
    /// AuthService clears `session` if the refresh response signals
    /// the refresh token is no longer valid (a 4xx with `invalid_grant`).
    func validSession() async -> SupabaseSession? {
        guard var current = session else { return nil }
        if !current.isExpiring() { return current }

        do {
            current = try await client.refresh(current)
            try current.saveToKeychain()
            self.session = current
            return current
        } catch SupabaseError.http(status: let s, body: _) where (400..<500).contains(s) {
            // Refresh token rejected — sign out locally so the next
            // sign-in attempt starts clean.
            await signOut()
            return nil
        } catch {
            // Transient failure (network, etc.) — keep the old session
            // around; caller can retry.
            lastError = error.localizedDescription
            return current
        }
    }
}
