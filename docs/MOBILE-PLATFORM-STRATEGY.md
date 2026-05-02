# Mobile Platform Strategy

This document is the source of truth for how Learn of Christ's content
and user data are stored and delivered as we move from a static web app
to a multi-client platform (web today, native iOS next, native Android
after that).

It exists to keep us from making decisions twice. When in doubt, this
file wins.

## Clients

| Client | Status | Built with |
|---|---|---|
| Web | live | Next.js 16, React, Tailwind |
| iOS | scaffolded — see `ios/` | Swift 6, SwiftUI, iOS 17 minimum |
| Android | planned (after iOS) | Kotlin, Jetpack Compose |

The iOS project lives at `ios/` inside this repo, with bundle id
`com.learnofchrist.app`. The Xcode project is generated from
`ios/project.yml` via xcodegen — edit the YAML, regenerate, never hand-
edit the `.xcodeproj`. See `ios/README.md` for setup steps.

The iOS pivot is intentional: the original platform memory called for
React Native; we are choosing native instead because text rendering,
widgets, audio backgrounding, and Watch/CarPlay paths are materially
better. The Android client will follow the same RPC + content-pack
contracts so it inherits everything except the UI layer.

## Account model: free, sign-in optional

The mobile apps are **free** and **usable without an account**. Reading
the Bible, opening study guides, switching translation/lens/depth, and
local highlighting/journaling all work signed-out.

Sign-in is a *save trigger*, not a gate. The first time the user opts
into a sync action ("Save to my account", "Sync across devices",
"Backup my journal"), the app prompts Sign in with Apple (iOS) or Google
(Android). On success, locally-stored rows are uploaded against the new
`user_id` via a `claim_local_data()` write — same `client_id` is used
going forward so subsequent syncs reconcile cleanly.

Implications:

- The `subscriptions` table and `is_premium()` helper are built but not
  used by any v1 feature. We are not gating launch features on premium.
- Anonymous reads must keep working — no JWT required for
  `v1_app_config`, `v1_book_index`, `v1_chapter_overrides`, the
  signed-out branch of `v1_home_feed`, or the content-pack URLs.
- `v1_sync_user_data` and any user-scoped writes require a JWT (and are
  reached only after the sign-in handoff).
- API.Bible / paid translations are not in v1.
- AI features (Q&A, "Ask About This Passage", AI-surfaced journal
  connections) are not in v1.
- No rate limiting is needed for v1 — every request reads static study
  guides, Bible text, or images. We can revisit if abuse appears.
- The local-storage shape on each device must be byte-compatible with
  the Supabase row shape so the claim payload is a straight upload.

## Content storage strategy

Per-content-type rule of thumb:

| Content | Canonical store | Why |
|---|---|---|
| Bible verses (KJV/ASV/WEB/JST) | content packs (JSON shipped from build) | offline, public-domain, immutable per translation version |
| Bible verses (NIV/ESV/CSB/etc.) | API.Bible via `bible-translation-proxy` | licensed; key must stay server-side |
| Per-chapter study guides (legacy + rich) | content packs | authored as TS, compiled to JSON; small, offlineable, content varies rarely |
| Chapter overrides (admin edits) | DB (`chapter_overrides`) | edited from the live web admin; merged client-side on top of pack |
| Topical pages, questions, blog | DB (`topics`, `questions`, `blog_posts`) | editorially live; SEO-driven; not needed offline-first |
| Artwork library | DB (`artworks`, `artists`) | searchable, moderated, large set of rows |
| Study plans | DB (`study_plans`, `study_plan_days`) | scheduled, possibly user-personalized |
| Cross-references (TSK) | content packs | static, large, read-only |
| Word studies (Strong's) | content packs | static, read-only |
| User data | DB (`user_*` tables) | per-user, syncable, RLS-gated |
| Subscription state | DB (`subscriptions`) | gated by Edge Function writes |

The pack format is versioned: `content/v1/`, `content/v2/`, etc. Packs
sit in a public Supabase Storage bucket (`content`). The mobile app
checks `manifest.json` on launch and pulls only what's changed.

## Scripture reference format

We use a **lowercase USFM-ish** canonical reference everywhere a single
string is needed: `<book-slug>.<chapter>[.<verse>][-<verse>]`.

Examples:

- `john.3.16` — single verse
- `genesis.1.1-3` — verse range
- `psalms.23` — whole chapter

Rules:

- Lowercase always. Hyphens for compound book slugs (`1-corinthians`).
- The book token matches `books.slug`.
- Use this in: `key_verse_ref`, deep links, push notifications, widget
  configuration, journal anchors, AI Q&A `reference` field, sync row
  identifiers.
- `(book_id, chapter, verse_number)` triples are still used for storage
  joins inside Postgres; the canonical string is the *interchange*
  format between clients and APIs.

A parser/serializer ships in three places:

- TypeScript: `src/lib/scriptureRefs.ts` (already exists)
- Swift: `LearnOfChrist/Reference/ScriptureRef.swift` (to be added)
- Kotlin: `com.learnofchrist.reference.ScriptureRef` (to be added)

All three implementations must round-trip the same set of refs;
shared test vectors live in `docs/scripture-ref-test-vectors.json`
(to be added when the iOS package is set up).

## Sync model

Last-write-wins per record, with the server's `updated_at` as the
canonical sync cursor.

- Mobile keeps a `last_synced_at` per user, persisted locally.
- On foreground / pull-to-refresh, the app calls
  `v1_sync_user_data(p_since => last_synced_at)`. The RPC returns rows
  changed since, including soft-deleted ones (`deleted_at IS NOT NULL`).
- Writes go through standard PostgREST POST/PATCH on the user tables
  with `client_id` and `client_updated_at` populated from the device.
- Soft delete = `update set deleted_at = now()`. The device that
  triggered the delete clears the row from local storage; other devices
  see the deleted row on next sync and clear their copies.
- Hard delete is reserved for compliance / right-to-erasure flows.

We do **not** use realtime subscriptions in v1. The latency benefit
isn't worth the complexity given study sessions are slow.

## Account linking

A user can sign in on iOS with Apple, on Android with Google, on web
with either. We rely on Supabase's built-in `auth.identities` table to
link providers — same email = same account. No Apple-specific or
Google-specific columns exist on `profiles`.

Open question to revisit before launch: do we **auto-merge** identities
on email match, or require an explicit "Link your Google account" step?
Default is auto-merge for v1 (matches user expectation; reduces support
load). If we ever support email/password we revisit the threat model.

## Subscriptions and gating (post-v1 infrastructure)

The apps are free in v1, but the schema is ready when we want to layer
in paid features. Single `subscriptions` table covering iOS / Android /
web. Writes flow through the `subscription-receipt-validate` Edge
Function. The function verifies the platform-side receipt with the
appropriate API and writes a row keyed by `(platform, platform_transaction_id)`.

Premium gating uses one function: `public.is_premium(user_id)`. RLS
policies, Edge Functions, and the apps all call it. Don't roll your
own check. In v1 it returns `false` for everyone, which is correct.

## Versioning

The mobile RPC surface is prefixed with `v1_` (`v1_app_config`,
`v1_home_feed`, `v1_sync_user_data`, etc.). When we need a breaking
change to a function's return shape, we mint `v2_<noun>_<verb>` and
keep `v1_` running until adoption rolls. Never alter a `v1_` function's
shape after it's in a shipped client.

Content packs are likewise versioned: `content/v1/`. A new pack version
is a new path; the manifest at `content/v1/manifest.json` only ever
points to v1 content. Mobile clients pin to a major version.

## Out of scope for v1

The following are intentionally not in v1 and the scaffolding for them
should not block launch:

- AI features of any kind — no "Ask About This Passage", no AI-surfaced
  journal connections, no chat. The Anthropic Edge Function has been
  removed; if/when we add an AI feature back, it gets its own design pass.
- Paid translations (NIV/ESV/CSB). Public-domain translations only.
- In-app purchases / subscriptions. Apps are free.
- Rate limiting on any endpoint. v1 traffic is reads of static study
  guides, Bible text, and images.

## Open questions

- Pre-rendered narration audio: generate via ElevenLabs and stash in a
  `narration` storage bucket? Format = AAC/.m4a. Defer to v1.1.
- Search across journal + bookmarks: SQLite FTS on the device for v1.
  Postgres FTS server-side when we want cross-device search.
- Family sharing: StoreKit Family Sharing is supported by the
  subscription model already; Google Play has an equivalent. Validate
  both flows when subscriptions ship post-v1.

## What lives where, in one screenshot

```
                ┌─────────────────────────────────────────┐
                │           Supabase Storage              │
                │  content/v1/manifest.json               │
                │  content/v1/chapters/<book>.json        │
                │  content/v1/study/<book>-<ch>.json      │
                └─────────────────────────────────────────┘
                       ▲                    ▲
                       │ packs              │ packs
                       │                    │
   ┌──────────────┐    │    ┌──────────────────────────┐
   │   iOS App    │ ◀──┘    │   Android App   (later)  │
   │ SwiftUI      │         │   Compose                │
   └──────────────┘         └──────────────────────────┘
          │                           │
          │  v1_* RPCs                │
          │  Edge Functions           │
          │  PostgREST CRUD           │
          ▼                           ▼
   ┌─────────────────────────────────────────────────┐
   │             Supabase Postgres                    │
   │  ─ verses (per translation, public domain)       │
   │  ─ books, study_guides, sections, commentary_*   │
   │  ─ chapter_overrides (admin edits)               │
   │  ─ topics, questions, blog_posts, study_plans    │
   │  ─ artworks, artists                             │
   │  ─ user_reading_progress, user_verse_*           │
   │  ─ user_artwork_saves                            │
   │  ─ subscriptions                                 │
   │  RLS on every user_* table                       │
   └─────────────────────────────────────────────────┘
                       ▲
                       │
                ┌──────┴──────┐
                │ Web (Next)  │
                └─────────────┘
```
