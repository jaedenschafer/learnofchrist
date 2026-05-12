// ReaderPrefs.swift
// ────────────────────────────────────────────────────────────────────────────
// Swift twin of `src/lib/readerPrefs.ts`. Same storage keys, same default
// values, same valid value sets — that's what makes the depth + audience
// + translation preferences round-trip across web and iOS without losing
// fidelity.
//
// Persistence: stored in UserDefaults via @AppStorage with the keys in
// `ReaderPrefs.Key`. When a user signs in for the first time, the apps
// (and web) will push these into the `user_reading_prefs` Supabase row
// (migration 060/061) using the column shape captured in
// `ReaderPrefsSyncRow` below. Until then, prefs are per-device.
//
// IMPORTANT — DO NOT rename the Key string values once they're shipped.
// Users have values persisted under these strings; renaming would
// silently reset their preferences. Match the TypeScript module
// byte-for-byte.

import Foundation

enum ReaderPrefs {

    // MARK: - Storage keys

    /// @AppStorage keys for the reader-prefs trio. Match
    /// `src/lib/readerPrefs.ts` exactly.
    enum Key {
        /// Bible study depth. Values: `beginner` | `intermediate` | `deep`.
        static let studyLevel    = "loc-study-level"
        /// Reader audience. Values: `adults` | `youth` | `kids`. iOS v1
        /// picker only exposes adults + youth; kids is web-only until
        /// the kids decoder + registry exist on iOS (audit punch-list
        /// open item, ~3-day add).
        static let audience      = "loc-audience"
        /// `"1"` when the active account is locked to kids audience
        /// (child-account profile). Picker hides itself when set.
        static let audienceLock  = "loc-audience-lock"
        /// Translation abbreviation (lowercase). One of the
        /// `publicDomainTranslations` below in v1.
        static let translation   = "loc-translation"
    }

    // MARK: - Defaults

    /// Default for new readers. Beginner risks training people that the
    /// site is shallow; Deep risks a wall-of-text first impression.
    static let defaultStudyLevel: StudyLevel = .intermediate

    /// Most visitors are adults; teens and parents-with-kids pick
    /// explicitly.
    static let defaultAudience: Audience = .adults

    /// KJV by default. Public domain, broadly recognised, doesn't tie
    /// us to a licensed translation.
    static let defaultTranslation: TranslationAbbr = "kjv"

    // MARK: - Translation catalog

    typealias TranslationAbbr = String

    /// One translation entry. Matches the web shape
    /// `{ abbreviation, name }`.
    struct Translation: Sendable, Hashable, Identifiable {
        let abbreviation: String
        let name: String
        var id: String { abbreviation }
    }

    /// Public-domain translations only. KJV at the top as the default;
    /// the rest alphabetised by full name so the picker is easy to scan.
    /// Mirrors `PUBLIC_DOMAIN_TRANSLATIONS` in `src/lib/readerPrefs.ts`.
    ///
    /// Licensed translations (NIV / ESV / CSB / etc.) are explicitly
    /// out of scope for v1 — see
    /// `docs/MOBILE-PLATFORM-STRATEGY.md → "Out of scope for v1"`.
    static let publicDomainTranslations: [Translation] = {
        let kjv = Translation(abbreviation: "kjv", name: "King James Version")
        let rest: [Translation] = [
            Translation(abbreviation: "asv", name: "American Standard Version"),
            Translation(abbreviation: "bsb", name: "Berean Standard Bible"),
            Translation(abbreviation: "dra", name: "Douay-Rheims American"),
            Translation(abbreviation: "jst", name: "Joseph Smith Translation"),
            Translation(abbreviation: "lsv", name: "Literal Standard Version"),
            Translation(abbreviation: "nwt", name: "New World Translation"),
            Translation(abbreviation: "web", name: "World English Bible"),
        ].sorted { $0.name < $1.name }
        return [kjv] + rest
    }()

    /// Look up a translation by its abbreviation, falling back to the
    /// default when the stored value is unknown (e.g. a user signed in
    /// on web with a translation we removed).
    static func translation(forAbbreviation abbr: String) -> Translation {
        publicDomainTranslations.first { $0.abbreviation == abbr }
            ?? publicDomainTranslations.first { $0.abbreviation == defaultTranslation }!
    }

    static func isKnownTranslation(_ abbr: String) -> Bool {
        publicDomainTranslations.contains { $0.abbreviation == abbr }
    }

    // MARK: - Sync row (future user_reading_prefs payload)

    /// Shape of the `user_reading_prefs` row (migrations 060 + 061) and
    /// the `claim_local_data` payload key. Additive going forward — older
    /// clients must tolerate unknown keys, never alter existing keys.
    ///
    /// Mirrors `ReaderPrefsSyncRow` in `src/lib/readerPrefs.ts`.
    struct SyncRow: Codable, Sendable, Hashable {
        let study_level: String
        let audience: String
        let audience_lock: Bool
        let translation: String
    }

    /// Build a sync row from the in-memory values. Mostly here so the
    /// future SyncService and any tests have a single function to call.
    static func makeSyncRow(
        studyLevel: StudyLevel,
        audience: Audience,
        audienceLock: Bool,
        translation: TranslationAbbr
    ) -> SyncRow {
        SyncRow(
            study_level: studyLevel.rawValue,
            audience: audience.rawValue,
            audience_lock: audienceLock,
            translation: translation
        )
    }
}

// MARK: - UI metadata extensions

extension StudyLevel {
    /// Display name in the picker. Mirrors web `STUDY_LEVELS[*].label`.
    /// Names describe content scope, not the reader's skill.
    var label: String {
        switch self {
        case .beginner:     return "Quick"
        case .intermediate: return "Standard"
        case .deep:         return "Deep"
        }
    }

    /// Short description shown under the row in the full picker.
    var blurb: String {
        switch self {
        case .beginner:
            return "Scripture, big idea, and one takeaway."
        case .intermediate:
            return "Adds commentary, themes, and connections."
        case .deep:
            return "Full study with original languages and cross-references."
        }
    }

    /// SF Symbol for the picker chip.
    var symbol: String {
        switch self {
        case .beginner:     return "1.circle"
        case .intermediate: return "2.circle"
        case .deep:         return "3.circle"
        }
    }
}

extension Audience {
    var label: String {
        switch self {
        case .adults: return "Adults"
        case .youth:  return "Youth"
        case .kids:   return "Kids"
        }
    }

    var blurb: String {
        switch self {
        case .adults:
            return "Full study, all topics."
        case .youth:
            return "Same study, retuned for teens."
        case .kids:
            return "Story, big idea, family talk-together."
        }
    }

    var symbol: String {
        switch self {
        case .adults: return "person"
        case .youth:  return "figure.stand"
        case .kids:   return "figure.and.child.holdinghands"
        }
    }

    /// Audiences the iOS v1 reader actually supports. Kids is web-only
    /// for now — the iOS kids decoder + registry aren't built (see audit
    /// punch-list open item). When kids ships, return all three.
    static var iOSSupported: [Audience] { [.adults, .youth] }
}
