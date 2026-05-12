// AppleSignInCoordinator.swift
// ────────────────────────────────────────────────────────────────────────────
// Wraps Apple's `ASAuthorizationController` callback-and-delegate API
// in a single async function. Callers get back the raw identity token
// + the raw nonce — both are needed for the Supabase id_token grant
// (Supabase verifies the SHA-256 of the raw nonce matches the
// `nonce` claim inside Apple's signed JWT).
//
// Nonce scheme:
//   1. We generate `rawNonce` locally (32 random bytes, hex-encoded).
//   2. SHA-256(rawNonce) is what we hand to Apple's request.
//   3. Apple's id_token contains `nonce: sha256(rawNonce)`.
//   4. We send `id_token + rawNonce` to Supabase; Supabase re-hashes
//      and checks the match.
//
// This blocks replay attacks: a stolen id_token can't be re-used
// without the rawNonce, which never leaves the device until we
// post it to Supabase.

import AuthenticationServices
import CryptoKit
import Foundation
import UIKit

enum AppleSignInError: Error, LocalizedError {
    case canceled
    case noIdentityToken
    case authorization(Error)

    var errorDescription: String? {
        switch self {
        case .canceled:
            return "Sign in canceled."
        case .noIdentityToken:
            return "Apple did not return an identity token."
        case .authorization(let e):
            return "Sign in failed: \(e.localizedDescription)"
        }
    }
}

struct AppleSignInResult: Sendable {
    /// JWT signed by Apple. Send to Supabase as `id_token`.
    let identityToken: String
    /// Raw (un-hashed) nonce. Send to Supabase as `nonce`.
    let rawNonce: String
    /// Apple's user identifier. Stable across sign-ins for this
    /// (app, Apple ID) pair. Useful for client-side caching; not
    /// strictly needed by Supabase.
    let appleUserID: String
}

@MainActor
final class AppleSignInCoordinator: NSObject {

    // We retain ourselves for the duration of the request — Apple's
    // delegate model assumes the delegate stays alive between
    // `performRequests` and the callback. Continuation is captured
    // on init and resumed exactly once.
    private var continuation: CheckedContinuation<AppleSignInResult, Error>?
    private var rawNonce: String = ""

    /// Kick off the Sign in with Apple sheet and await its result.
    /// Must be called on the main actor — UIWindow lookup needs it.
    func signIn() async throws -> AppleSignInResult {
        let nonce = Self.randomNonce(length: 32)
        self.rawNonce = nonce

        let provider = ASAuthorizationAppleIDProvider()
        let request = provider.createRequest()
        request.requestedScopes = [.email, .fullName]
        request.nonce = Self.sha256(nonce)

        let controller = ASAuthorizationController(authorizationRequests: [request])
        controller.delegate = self
        controller.presentationContextProvider = self

        return try await withCheckedThrowingContinuation { cont in
            self.continuation = cont
            controller.performRequests()
        }
    }

    // MARK: - Nonce helpers

    /// Random alpha-numeric nonce of `length` chars. Conservative
    /// charset (URL-safe, no padding) so it never trips encoders.
    private static func randomNonce(length: Int) -> String {
        precondition(length > 0)
        let charset: Array<Character> = Array(
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._"
        )
        var result = ""
        var remaining = length
        while remaining > 0 {
            var randoms = [UInt8](repeating: 0, count: 16)
            let status = SecRandomCopyBytes(kSecRandomDefault, randoms.count, &randoms)
            if status != errSecSuccess {
                // Fall back to a less secure but never-failing source.
                // Realistically SecRandom never fails on iOS, but
                // failing closed is wrong for a sign-in flow.
                for _ in 0..<randoms.count {
                    randoms[Int.random(in: 0..<randoms.count)] = UInt8.random(in: 0...255)
                }
            }
            for r in randoms where remaining > 0 {
                if Int(r) < charset.count {
                    result.append(charset[Int(r)])
                    remaining -= 1
                }
            }
        }
        return result
    }

    private static func sha256(_ input: String) -> String {
        let hashed = SHA256.hash(data: Data(input.utf8))
        return hashed.map { String(format: "%02x", $0) }.joined()
    }
}

// MARK: - ASAuthorizationControllerDelegate

extension AppleSignInCoordinator: ASAuthorizationControllerDelegate {

    func authorizationController(
        controller: ASAuthorizationController,
        didCompleteWithAuthorization authorization: ASAuthorization
    ) {
        guard let cred = authorization.credential as? ASAuthorizationAppleIDCredential else {
            continuation?.resume(throwing: AppleSignInError.noIdentityToken)
            continuation = nil
            return
        }
        guard
            let tokenData = cred.identityToken,
            let tokenString = String(data: tokenData, encoding: .utf8)
        else {
            continuation?.resume(throwing: AppleSignInError.noIdentityToken)
            continuation = nil
            return
        }
        let result = AppleSignInResult(
            identityToken: tokenString,
            rawNonce: rawNonce,
            appleUserID: cred.user
        )
        continuation?.resume(returning: result)
        continuation = nil
    }

    func authorizationController(
        controller: ASAuthorizationController,
        didCompleteWithError error: Error
    ) {
        // ASAuthorizationError.Code.canceled is the user dismissing
        // the sheet. Treat as a "soft" cancel, not an error to bubble
        // up as a failure modal.
        if let asErr = error as? ASAuthorizationError, asErr.code == .canceled {
            continuation?.resume(throwing: AppleSignInError.canceled)
        } else {
            continuation?.resume(throwing: AppleSignInError.authorization(error))
        }
        continuation = nil
    }
}

// MARK: - ASAuthorizationControllerPresentationContextProviding

extension AppleSignInCoordinator: ASAuthorizationControllerPresentationContextProviding {
    func presentationAnchor(
        for controller: ASAuthorizationController
    ) -> ASPresentationAnchor {
        // First connected key window scene. iOS 16+ requires we walk
        // the connected scenes — there's no UIApplication.keyWindow
        // any more.
        let scenes = UIApplication.shared.connectedScenes
        let windowScene = scenes
            .compactMap { $0 as? UIWindowScene }
            .first(where: { $0.activationState == .foregroundActive })
            ?? scenes.compactMap { $0 as? UIWindowScene }.first
        let window = windowScene?.windows.first(where: \.isKeyWindow)
            ?? windowScene?.windows.first
        return window ?? ASPresentationAnchor()
    }
}
