// SupabaseConfig.swift
// ────────────────────────────────────────────────────────────────────────────
// Single source of truth for the Learn of Christ Supabase project URL +
// anon key. Both the Networking layer (ContentService, SupabaseClient)
// and the Auth layer read from here so we have one spot to swap
// projects when we mint v2.
//
// The anon key is safe to ship in the binary by design — it's a public
// JWT that PostgREST gates with RLS. The matching web client embeds it
// in the JS bundle via NEXT_PUBLIC_SUPABASE_ANON_KEY for the same
// reason. Never put the service-role key here.

import Foundation

enum SupabaseConfig {
    /// Project ref (e.g. `uqcgieillyvefzmohzpn`).
    static let projectRef = "uqcgieillyvefzmohzpn"

    /// Project base URL — used by every Supabase request.
    static let projectURL: URL = URL(string: "https://\(projectRef).supabase.co")!

    /// Public anon JWT. RLS-gated; safe to embed.
    static let anonKey: String =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxY2dpZWlsbHl2ZWZ6bW9oenBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNDMzNzYsImV4cCI6MjA5MTYxOTM3Nn0.zoIExWWQ_1YDHSAtPzRM9OjbCdsVoPQ1piBibwGZb4E"

    /// iOS-type OAuth Client ID from Google Cloud Console. Used by
    /// GoogleSignIn-iOS so Google's consent screen displays the iOS
    /// app's identity ("Learn of Christ") rather than the Supabase
    /// project URL. Must also be added to Supabase → Auth → Providers
    /// → Google → "Authorized Client IDs" so Supabase trusts id_tokens
    /// minted by this client.
    ///
    /// Empty string until the iOS OAuth client is created. The native
    /// Google flow throws `.notConfigured` when empty so the button
    /// can fall back gracefully.
    static let googleIosClientID: String = ""

    /// Convenience subpath builders.
    static func authURL(_ path: String) -> URL {
        projectURL.appendingPathComponent("auth/v1").appendingPathComponent(path)
    }

    static func restURL(_ path: String) -> URL {
        projectURL.appendingPathComponent("rest/v1").appendingPathComponent(path)
    }

    static func rpcURL(_ functionName: String) -> URL {
        projectURL.appendingPathComponent("rest/v1/rpc").appendingPathComponent(functionName)
    }

    static func storageURL(bucket: String, _ path: String) -> URL {
        projectURL
            .appendingPathComponent("storage/v1/object/public")
            .appendingPathComponent(bucket)
            .appendingPathComponent(path)
    }
}
