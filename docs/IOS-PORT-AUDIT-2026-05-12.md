# iOS Port Audit — 2026-05-12

## TL;DR

The iOS app is much further along than a "starting from zero" assessment would suggest — 21 production Swift files and 2 test files implement onboarding, a tabbed shell (Read/Library/Settings), book grid → chapter list → reader, the full RichChapterContent decoder, a SwiftData-backed local store for highlights / bookmarks / notes / reading progress, and the canonical `ScriptureRef` parser with shared test vectors. What is **not** wired is everything past the offline read loop: real auth, sync, `claim_local_data`, the `v1_app_config`/`v1_home_feed`/`v1_sync_user_data` HTTP layer, content-pack updating logic (it always re-fetches the manifest), translation/lens/depth toggles, and any decoder support for the rich content fields the web is shipping today (`crossRefs`, `resources`, `characters`, `map`, `youth` overrides, `resource` verse spans). On the backend side the `v1_*` RPC surface exists in migration 059, but `claim_local_data()`, a sync-shaped `user_highlights` table, and a `narration` storage bucket do not exist at all.

**Biggest gaps**

- No `claim_local_data()` RPC anywhere in `supabase/migrations/`, despite the strategy doc treating it as a load-bearing primitive (`docs/MOBILE-PLATFORM-STRATEGY.md:40`).
- iOS persists `StoredHighlight` rows that have no Supabase table to sync to. The legacy `user_highlights` (migration 001, line 286) keys by `book_id UUID` and lacks `client_id`/`client_updated_at`/`deleted_at`/`updated_at`/`note`, so iOS data is structurally incompatible. Migration 056 explicitly leaves this table alone.
- `RichChapterContent.swift` decodes a subset of the actual schema. The web type (`src/data/study-chapters/types.ts:285`) has `crossRefs` per-section, `resources`, `estimatedMinutes`, `topicTags`, `christIndexSummary`, `youth`, `characters`, `map`, and a `resource` VerseSpan kind — none of which the Swift decoder knows about. They will silently drop on JSON decode today (commentary blocks decode fine; the section-level `crossRefs` is just missing from `RichSection`).
- `ContentService` has no manifest-cache / If-None-Match. Every cold launch re-downloads `manifest.json` and depends on per-pack sha256 hashes to short-circuit pack downloads. This is the design, but there is no Etag/Last-Modified handling on the manifest itself.
- No translation/lens/depth UI — iOS Settings has color scheme + text size only. The strategy doc says the apps must support these (`MOBILE-PLATFORM-STRATEGY.md:48`) and the web `v1_chapter_overrides` already accepts `p_lens`/`p_depth`.
- Sign in with Apple is **stubbed**: `SettingsView.SignInPlaceholderSheet` shows "coming soon" copy. The web only does Google OAuth. There is no shared Supabase client wired into the iOS app — `ContentService` is the only HTTP code, and it talks to the public Storage bucket.
- The web `dist/content/v1/` build manifest contains every hand-authored chapter (≈1247 entries by the import count in `src/data/study-chapters/index.ts`) plus auto-ported chapters for the rest. The shipped bundle will be tens of MB. No per-chapter or lazy-pack-fragment story is in place; iOS downloads the whole book pack on first chapter open.

The right next move is a 2–3 day backend pass to make sync real (claim function + a v2 highlights table) and a 1–2 day iOS pass to extend the decoder & wire the manifest cache header. Everything user-visible past that — translation switcher, depth picker, search, daily verse on home — is content-and-RPC work, not engine work.

---

## Current State

### Web (Next.js)

#### Routes & features summary

Legend: ✅ iOS needs equivalent (in-app), 🟡 iOS needs read access (deep link / share target), 🔴 web-only (admin, marketing).

| Route | What it does | iOS need | How iOS gets it |
|---|---|---|---|
| `src/app/page.tsx` | Marketing home | 🟡 | Native Home tab (not built); home-feed RPC exists at `v1_home_feed` |
| `src/app/about/page.tsx` | About page (static MDX-ish) | 🟡 | Settings → web link OR static text in iOS About |
| `src/app/account/page.tsx` | User profile/account | ✅ | Native Settings → Account screen once auth ships |
| `src/app/admin/artwork-moderation/page.tsx` | Admin tool | 🔴 | Web only |
| `src/app/admin/artwork-review/page.tsx` | Admin tool | 🔴 | Web only |
| `src/app/api/admin/*` | Admin endpoints | 🔴 | Web only |
| `src/app/api/art/search/route.ts` | Art typeahead (Supabase RPC) | ✅ when Art tab ships | Call same RPC directly from Swift |
| `src/app/api/og/...` | OG image generation | 🔴 | Server-side only |
| `src/app/api/report-artwork/route.ts` | User reports an artwork | ✅ when Art tab ships | New small `v1_report_artwork` RPC OR call `/api/report-artwork` from Swift |
| `src/app/api/search/route.ts` | Site-wide typeahead | ✅ later | Reusable HTTP endpoint (already public) |
| `src/app/art/*` (artists / artwork / book/chapter) | Art browse | ✅ later | Art tab in iOS (post-v1); data via existing RPCs |
| `src/app/auth/callback/route.ts` | OAuth (Google) callback | ➖ | iOS uses Apple Sign-In SDK, hits Supabase auth directly |
| `src/app/auth/sign-in/page.tsx` | Web sign-in page | ➖ | Native flow on iOS |
| `src/app/auth/sign-out/route.ts` | Sign-out | ➖ | Native flow on iOS |
| `src/app/bible/[book]/[chapter]/page.tsx` | Plain Bible reader | ✅ | Already covered by `ChapterReaderView`, but iOS shows the rich guide, not a plain-Bible-only mode |
| `src/app/bible/[book]/[chapter]/[verse]/page.tsx` | Single-verse landing | ✅ | Deep link target — needs URL scheme handler |
| `src/app/bible/[book]/page.tsx` | Book overview | ✅ | iOS uses `ChapterListView` — equivalent |
| `src/app/bible/translations/page.tsx` | Translation list | ✅ later | Driven by `translations` table; new RPC `v1_translations_list` |
| `src/app/bible/translations/[id]/page.tsx` | Translation detail | 🟡 | Web link |
| `src/app/blog/*` | Blog | 🟡 | Marketing on web; not in v1 iOS |
| `src/app/christ/*` | Christ Index | ✅ later | Uses `christIndexSummary` from rich chapters — currently NOT in the Swift decoder OR the content pack |
| `src/app/family/page.tsx` | Marketing | 🔴 | Web-only |
| `src/app/privacy/page.tsx` | Privacy policy | 🟡 | Linked from iOS Settings → About (already wired in `SettingsView.AboutSection`) |
| `src/app/progress/page.tsx` | Reading progress dashboard | ✅ | iOS LibraryView is the equivalent (different shape) |
| `src/app/questions/*` | Theology Q&A | ✅ later | New `v1_questions_*` RPC OR PostgREST `questions` table |
| `src/app/study-plans/*` | Devotional plans | ✅ later | New `v1_study_plans_*` RPCs |
| `src/app/study/[book]/[chapter]/page.tsx` | Rich study guide | ✅ | iOS = `ChapterReaderView` — same `RichChapterContent` shape |
| `src/app/study/[book]/page.tsx` | Book index page | ✅ | iOS = `ChapterListView` |
| `src/app/study/deuterocanonical-books/page.tsx` | Apocrypha landing | 🟡 | Marketing; deuterocanon books exist in `RICH_CHAPTERS` |
| `src/app/study/page.tsx` | Study index | ✅ | iOS = `BookGridView` |
| `src/app/terms/page.tsx` | Terms of service | 🟡 | Linked from iOS Settings |
| `src/app/topics/*` | Topic pages | ✅ later | New `v1_topics_*` RPCs |

#### Components inventory (iOS-relevance flagged)

| File | Purpose | iOS-relevant? | Notes |
|---|---|---|---|
| `src/components/AppDashboard.tsx` | Logged-in dashboard | ✅ later | Becomes the iOS Home tab. v1_home_feed already exists. |
| `src/components/AuthButton.tsx` | Sign-in UI | ➖ | iOS uses native AuthenticationServices |
| `src/components/BlockHideMenus.tsx` | Per-block hide controls | 🟡 | Maybe Phase 2 |
| `src/components/BookGrid.tsx` | Web book grid | ✅ — mirror | iOS already has `BookGridView` |
| `src/components/BreadcrumbNav.tsx` | Web nav | ➖ | iOS uses NavigationStack |
| `src/components/ChapterArtStrip.tsx` | Inline art row | ✅ later | Needs CDN-served artworks list |
| `src/components/ChapterMap.tsx` | SVG map of places | ✅ later | `map` field is in `RichChapterContent` web type but NOT in Swift `RichChapterContent` |
| `src/components/ChapterNav.tsx` | Prev/Next chapter | ✅ | Reader needs Prev/Next — not implemented in Swift yet |
| `src/components/ChapterProgress.tsx` | Scroll progress | 🟡 | Could be added in Phase 2 |
| `src/components/ContinueReading.tsx` | Resume card | ✅ — mirrored | iOS `LibraryView.ContinueReadingSection` mirrors it |
| `src/components/CrossRefCard.tsx` | "Where this echoes" card | ✅ | `crossRefs` field present in web `RichSection`, missing from Swift `RichSection` |
| `src/components/EditableStudyGuide.tsx` | Admin in-page edit | 🔴 | Admin only |
| `src/components/Footer.tsx` | Web footer | ➖ | n/a |
| `src/components/GenesisOneStudy.tsx` | Bespoke Genesis 1 page | ✅ already | Replaced by RichStudyGuide for non-Genesis; iOS reads same RichChapterContent |
| `src/components/HebrewAudio.tsx` | Speak Hebrew translit | ✅ later | iOS would use AVSpeechSynthesizer; non-trivial |
| `src/components/HeroVideoBackground.tsx` | Marketing | 🔴 | Web only |
| `src/components/HighlightController.tsx` | KJV-anchored highlight observer | ✅ later | iOS already renders highlight marks via VerseSpan `.mark` |
| `src/components/InlineArtwork.tsx` | Inline art block | ✅ later | iOS shows `ArtworkPlaceholder`; needs CDN URL resolution |
| `src/components/JsonLd.tsx` | SEO | 🔴 | Web only |
| `src/components/KidsStudyGuide.tsx` | Kids audience renderer | 🟡 | Separate kids schema; not in v1 iOS |
| `src/components/LopCloserReveal.tsx` | Marketing animation | 🔴 | n/a |
| `src/components/Navbar.tsx` | Web nav | ➖ | n/a |
| `src/components/PeopleInChapter.tsx` | Character ribbon | ✅ later | `characters` field present in web type, missing from Swift |
| `src/components/ProgressDashboard.tsx` | Long-form progress page | ✅ later | iOS Library is the lightweight version |
| `src/components/QuestionsBrowser.tsx` | Q&A list | ✅ later | Phase 3 |
| `src/components/ReadingComfortEffects.tsx` | Type-size + theme | ✅ — mirrored | iOS `AppearancePreferences` does this natively |
| `src/components/ReadingFilters.tsx` | Filters bar | ✅ later | Becomes part of iOS reader toolbar |
| `src/components/ReadingPrefsSync.tsx` | Cross-device pref sync | ✅ later | Talks to `user_reading_prefs` (migration 060) |
| `src/components/ReflectionBlock.tsx` | Reflection card | ✅ — mirrored | iOS renders `case .reflection` |
| `src/components/ReportArtworkButton.tsx` | Per-art report flow | ✅ later | Calls `/api/report-artwork` |
| `src/components/RichChapterEditor.tsx` | Admin authoring | 🔴 | Admin only |
| `src/components/RichStudyGuide.tsx` | The renderer | ✅ — equivalent in Swift | `ChapterReaderView` is the iOS twin |
| `src/components/ScriptureRefs.tsx` | Inline scripture-ref → link rewriter | ✅ later | Uses `src/lib/scriptureRefs.ts` (loose-form). iOS has only canonical-form parser. |
| `src/components/SearchBar.tsx` | Global search trigger | ✅ later | Phase 2 |
| `src/components/SettingsMenu.tsx` | Web settings dropdown | ✅ — mirrored | iOS SettingsView |
| `src/components/ShareButton.tsx` | Share to social | ✅ — mirrored | iOS uses `ActivityShareSheet` already |
| `src/components/ShareMenu.tsx` | Share menu | ✅ — mirrored | Same |
| `src/components/ShareableMarks.tsx` | Long-press → share marks | 🟡 | Future |
| `src/components/SiteSearch.tsx` | Site-wide search box | ✅ later | Phase 2 |
| `src/components/StudyAudioPlayer.tsx` | Per-chapter narration | ✅ later | Needs `narration` bucket — open question in strategy doc |
| `src/components/StudyBanner.tsx` | Banner above guide | ✅ later | Cosmetic |
| `src/components/StudyChapterShareLaunch.tsx` | Share entry point | ✅ later | Same as ShareButton |
| `src/components/StudyFilters.tsx` | Translation/depth picker | ✅ — missing from iOS | The biggest UI gap |
| `src/components/StudyGuide.tsx` | Legacy guide renderer | 🟡 | Not used for new content |
| `src/components/StudyGuideShell.tsx` | Wraps RichStudyGuide | ✅ — mirrored | iOS handles via SwiftUI |
| `src/components/StudyJournal.tsx` | Notes/journal sidebar | ✅ — mirrored | iOS Library shows notes |
| `src/components/StudyLevelControl.tsx` | beginner/intermediate/deep | ✅ — missing from iOS | Needs to be added to iOS Settings & reader toolbar |
| `src/components/StudyShowcase.tsx` | Marketing | 🔴 | n/a |
| `src/components/StudyTopBar.tsx` | Reader toolbar | ✅ — mirrored | iOS toolbar |
| `src/components/TopicCard.tsx` | Topic chip | ✅ later | Phase 3 |
| `src/components/TranslationSwitcher.tsx` | Translation menu | ✅ — missing from iOS | iOS pack only ships KJV today |
| `src/components/VerseDisplay.tsx` | Plain Bible view | ✅ — mirrored | iOS reader handles |
| `src/components/VerseTranslationOverlay.tsx` | Hover/long-press multi-translation | ✅ later | Phase 3 |

#### Data sources inventory

- **Web TS data files**
  - `src/data/books.ts` — canonical book list, also mirrored in `ios/LearnOfChrist/Reference/BibleBookCatalog.swift`. ✅ already.
  - `src/data/chapter-content.ts` + `src/data/chapters/<book>.ts` — legacy ChapterContent shape. Used as input to auto-port path; shipped as part of every rich pack via `build-content-packs.ts`.
  - `src/data/study-chapters/types.ts` — RichChapterContent schema (THE contract).
  - `src/data/study-chapters/index.ts` — registry of ~1247 hand-authored chapter modules.
  - `src/data/study-chapters/cross-refs.ts` — fallback cross-references.
  - `src/data/study-chapters/characters.ts` — shared character library.
  - `src/data/art/topics.ts` — TopicSlug union and art topic vocab.
  - `src/data/topics.ts`, `src/data/blog-posts.ts`, `src/data/verse-explanations.ts` — content currently in TS, would need its own RPC pipeline for iOS.
- **Supabase tables**
  - `translations`, `books`, `verses` (migration 001) — for the plain Bible reader and the translation switcher.
  - `study_guides`, `sections`, `commentary_blocks` (001) — backs `v1_chapter_overrides`.
  - `chapter_overrides` (033) — admin edits, merged client-side on top of pack.
  - `topics`, `questions`, `blog_posts`, `study_plans`, `study_plan_days` (001) — editorial.
  - `artworks`, `artists` (003), with moderation columns (021).
  - `profiles`, `user_reading_progress`, `user_verse_bookmarks`, `user_artwork_saves`, `user_verse_notes` (019).
  - Legacy `user_highlights`, `user_notes`, `user_plan_progress`, `user_streaks` (001) — explicitly stale, not on the mobile sync surface.
  - `subscriptions` (057), `is_premium()` helper.
  - Mobile sync metadata columns: `client_id`, `client_updated_at`, `deleted_at` added (056).
  - `user_reading_prefs` (060), audience column (061).
- **Supabase RPCs**
  - `v1_app_config()` (059) — kill switches, feature flags, content manifest URL, server time.
  - `v1_book_index()` (059) — 66 books.
  - `v1_chapter_overrides(book, chapter, lens, depth, language)` (059) — merges admin edits + commentary blocks.
  - `v1_home_feed()` (059) — Continue Reading + recent bookmarks/notes + daily verse ref.
  - `v1_sync_user_data(since, limit)` (059) — last-write-wins delta.
  - `get_artists_with_art()` (022), `art_search()` (029) — art browse.
  - `is_premium(uuid)` (057).
  - `current_user_is_admin()` (023).
- **Supabase Storage**
  - `content` bucket — public; receives `v1/manifest.json` + `v1/chapters/<book>.json`. Already wired by `scripts/build-content-packs.ts --upload`.
  - No `narration` bucket yet.

#### "Hard to port" cluster

- **SSR-coupled** — every `src/app/**/page.tsx` uses Next 16 server components with `revalidate = 86400` ISR. None of those pages can run inside the iOS app; iOS hits Supabase directly (Storage + RPC) and renders natively. So they don't need to port — they need to be made redundant for the cases iOS cares about.
- **Browser APIs in components**
  - `HebrewAudio.tsx` uses `useSpeech` (Web Speech API). Native equivalent on iOS would be `AVSpeechSynthesizer`. Not trivial — different voice catalog, different prosody.
  - `HighlightController.tsx` uses IntersectionObserver and DOM selectors against rendered HTML. iOS already has the structured `VerseSpan.mark` data, so it doesn't need DOM-scraping.
  - `InlineArtwork.tsx`, `ChapterArtStrip.tsx`, `ArtFeaturedArtist.tsx` etc. — needs an iOS image fetching path. SDWebImage / Nuke / native AsyncImage.
  - `HeroVideoBackground.tsx`, marketing-only.
  - `useSpeech.ts` (`src/lib/useSpeech.ts`) — Web-only.
- **Editor / admin**
  - `RichChapterEditor.tsx`, `EditableStudyGuide.tsx`, `BlockHideMenus.tsx`, `/admin/*`, `/api/admin/*` — never on iOS.
- **OG image / SEO** — `JsonLd.tsx`, `src/app/api/og/...`. Server-only.
- **Next-cookies-bound Supabase client** — `src/lib/supabase/server.ts`, `middleware.ts`. The web reads sessions from cookies; iOS will use Supabase's GoTrue JWT in memory + Keychain.
- **`src/lib/scriptureRefs.ts`** — this is **client-only** (`'use client'` directive) and uses a loose regex over book name variants for in-prose detection ("John 3:16", "1 Cor. 10:1-2"). Not the canonical parser. The iOS twin would be a separate "prose ref highlighter" if/when we want inline link rewriting in callouts — but the canonical parser lives in `canonicalRef.ts` (TS) ↔ `ScriptureRef.swift` (Swift), which are in sync.

### iOS (Swift)

#### What's scaffolded

- **App shell** — `LearnOfChristApp.swift` provisions a `UserDataStore`, gates onboarding via `@AppStorage("onboarding.completed")`, swaps to `RootView` after first run.
- **Onboarding** — `OnboardingView.swift`. Single-screen, three-pillar; nothing dynamic, no remote config.
- **Tabbed shell** — `RootView.swift` has three tabs: Read (BookGridView → ChapterListView → ChapterLoaderView → ChapterReaderView), Library (LibraryView), Settings (SettingsView).
- **Navigation routing** — `BibleNavigationDestinations.swift` registers `BibleBook` and `ChapterRoute` as nav values for both Read and Library stacks.
- **Book grid** — `BookGridView.swift` renders the static `BibleBookCatalog` (66 canonical books, OT + NT). Searchable.
- **Chapter list** — `ChapterListView.swift`. 5-column number grid, supports up to Psalms' 150.
- **Reader** — `ChapterReaderView.swift`. Decodes every block kind currently supported in the Swift `Block` enum (scripture, commentary, hebrew, greek, christ, carry, reflection, artwork, divider, unknown). Handles highlights / bookmarks / notes / share / copy via context menu and accessibility actions. Scroll-position resume per chapter. SwiftData @Query for live highlight/note state.
- **Note editor** — `NoteEditorSheet.swift`. Save/Cancel/Delete; soft-delete on empty.
- **Verse row** — `VerseRow.swift`. Renders highlight wash + note badge dot; contextMenu + accessibilityActions hooks.
- **Library** — `LibraryView.swift`. Four sections: Continue Reading (top 1), Bookmarks, Notes, Highlights. Tap → reader.
- **Settings** — `SettingsView.swift`. Sign-in prompt card (placeholder sheet only), Appearance (color scheme + text size), About (version + 3 web links).
- **Theme + appearance** — `Theme.swift` defines colors/typography/metric; `AppearancePreferences.swift` is a typed `@AppStorage` wrapper. 8 named color assets in `Assets.xcassets`.
- **Persistence**
  - `UserDataStore.swift` — `@Observable` ModelContainer wrapper. All mutations stamp `updatedAt` + `clientUpdatedAt` + `clientId` + (on delete) `deletedAt`.
  - `UserDataModels.swift` — four `@Model` classes: `StoredReadingProgress`, `StoredBookmark`, `StoredNote`, `StoredHighlight`.
  - `PackCache.swift` — Application Support file cache; sha256 over raw bytes.
  - `ClientID.swift` — per-install UUID in UserDefaults.
- **Networking** — `ContentService.swift`, an actor. Hits `https://uqcgieillyvefzmohzpn.supabase.co/storage/v1/object/public/content/v1`. Hash-validates packs against the manifest. No If-None-Match / Etag.
- **Models** — `ContentManifest.swift` (mirrors build script output), `RichChapterContent.swift` (decodes the per-book pack as `ContentPack { chapters: [String: RichChapterContent] }`).
- **Reference** — `ScriptureRef.swift` (strict canonical parser), `BibleBookCatalog.swift` (66 books, hard-coded).
- **Tests** — `ScriptureRefTests.swift` runs `docs/scripture-ref-test-vectors.json` through `parse`, `format`, `canonical`, `Codable`. The test target's `project.yml` already bundles the JSON.

#### What's stubbed but not wired

- `SignInPromptCard` shows a "Sign-in is coming soon." sheet (`SettingsView.swift:107`). No `AuthenticationServices` import anywhere in the project.
- `Block.unknown(kind:)` is an explicit fallthrough that renders `EmptyView()`. Used today for any block kind the decoder doesn't recognize. As of this audit there's no `case .resource` (verse-span) handler in `VerseSpan` — unknown spans get demoted to `.text`. Same defensive design but the loss is real: web `kind: 'resource'` superscript markers will silently vanish on iOS.
- `ChapterReaderView.plainText(from:)` uses regex tag-stripping. The comment promises NSAttributedString later for rich `<em>`/`<strong>`/`<a>`.

#### What's missing entirely vs. the strategy doc

| Strategy commitment | iOS status | Evidence |
|---|---|---|
| Sign in with Apple optional sign-in trigger | 🔴 missing — placeholder sheet only | `SettingsView.swift:96-134` |
| `claim_local_data()` write on sign-in | 🔴 missing — no auth, no claim call | n/a in Swift; missing migration |
| Last-write-wins sync against `v1_sync_user_data` | 🔴 missing — no sync code path | n/a; only local SwiftData |
| Manifest cache + only-download-on-hash-change | 🟡 partial — packs are hash-cached but the manifest is fetched every cold start | `ContentService.swift:39` ("Always re-fetches the manifest. Tiny (~19 KB) and we want freshness on every cold launch.") |
| Translation switcher | 🔴 missing — pack only carries the KJV-anchored text the author wrote | no translation UI |
| Lens picker (universal / lds / reformed / catholic / messianic / historical / orthodox) | 🔴 missing | n/a |
| Depth picker (beginner / intermediate / deep) | 🔴 missing | iOS reader renders every block regardless of `minLevel`; `filterContentByLevel` exists only in TS (`src/data/study-chapters/types.ts:483`) |
| Audience picker (adults / youth / kids) | 🔴 missing | iOS doesn't honor `hideForYouth`, doesn't apply `youthOverride`, doesn't know about the kids schema |
| Cross-references card per section | 🔴 missing decoder + view | `RichSection` in Swift has no `crossRefs` field |
| Inline resources / superscript footnotes | 🔴 missing | No `case .resource` in `VerseSpan` |
| Chapter map | 🔴 missing | No `map` field in Swift |
| People-in-chapter ribbon | 🔴 missing | No `characters` field in Swift |
| Estimated minutes per depth | 🔴 missing | No `estimatedMinutes` field |
| Christ Index summary | 🔴 missing | No `christIndexSummary` field |
| Topical tags | 🔴 missing | No `topicTags` field |
| Inline artwork (resolved from Supabase) | 🟡 placeholder | iOS renders `ArtworkPlaceholder` only — no image fetch |
| Hebrew/Greek audio | 🔴 missing | No AVSpeechSynthesizer hookup |
| Daily verse on home tab | 🔴 missing (no Home tab) | strategy plans a Home tab; iOS has Read / Library / Settings |
| Universal Links / deep links (book.chapter.verse) | 🔴 missing | No URL scheme in `project.yml`; no `onOpenURL` handler |
| Widget / Lock Screen / CarPlay / Watch | 🔴 missing | No extension targets in `project.yml` |
| Search (in-app, FTS) | 🔴 missing | No search UI |
| Reading prefs sync (cross-device study_level) | 🔴 missing | iOS has TextSize/ColorScheme local only |
| Subscription gating | n/a in v1 | strategy says free, so this is fine |

### Backend (Supabase)

#### Tables that exist and their iOS relevance

| Table | iOS reads? | iOS writes? | Notes |
|---|---|---|---|
| `translations` (001) | ✅ later | no | Needed for translation switcher |
| `books` (001) | 🟡 via `v1_book_index` | no | iOS uses static `BibleBookCatalog` instead — by design |
| `verses` (001) | ✅ later | no | Needed once translation switcher ships; today the pack inlines KJV text |
| `study_guides` (001) | via `v1_chapter_overrides` | no | |
| `sections`, `commentary_blocks` (001) | via `v1_chapter_overrides` | no | Lens/depth filtering applied server-side |
| `chapter_overrides` (033) | via `v1_chapter_overrides` | no | Admin merges live on top of pack |
| `topics` (001), `questions` (001), `blog_posts` (001) | ✅ later | no | Phase 3 |
| `study_plans`, `study_plan_days` (001) | ✅ later | no | Phase 3 |
| `artworks`, `artists` (003) | ✅ later | no | Phase 2 — art tab |
| `profiles` (019) | ✅ later | own row | After sign-in |
| `user_reading_progress` (019 + 056) | ✅ | ✅ | Schema column-compatible with `StoredReadingProgress`, MINUS the `key` derived field |
| `user_verse_bookmarks` (019 + 056) | ✅ | ✅ | Compatible with `StoredBookmark`; `bigserial id` vs Swift `UUID` is the mismatch — see below |
| `user_verse_notes` (019 + 056) | ✅ | ✅ | Same `bigserial id` mismatch |
| `user_artwork_saves` (019 + 056) | ✅ later | ✅ later | iOS has no artwork save UI yet |
| `user_highlights` (001) | 🔴 incompatible | 🔴 | Uses `book_id UUID`, has no mobile sync columns; iOS `StoredHighlight` uses `bookSlug` text. There is NO target table iOS can write to. |
| `subscriptions` (057) | own rows readable | no (Edge Function only) | Free in v1; irrelevant |
| `user_reading_prefs` (060–061) | ✅ later | ✅ later | study_level + audience cross-device sync — not wired in iOS yet |

The two `bigserial` id mismatches are real: iOS generates `UUID()` on insert, but `user_verse_bookmarks` and `user_verse_notes` use `bigserial primary key`. The strategy doc says "id is a UUID we generate locally and reuse server-side so the claim path can dedupe re-claims" — that promise is broken today by the migration 019 schema. Either iOS needs to NOT set its own UUID and instead use a server-assigned id, or the tables need a `client_uuid` column (or to migrate to UUID PK). This conflict needs explicit resolution.

#### RPCs / Edge Functions: strategy promises vs. reality

| Strategy promises (`MOBILE-PLATFORM-STRATEGY.md`) | Reality | File |
|---|---|---|
| `v1_app_config` | ✅ exists | `migrations/059_mobile_rpcs_v1.sql` |
| `v1_book_index` | ✅ exists | `059` |
| `v1_chapter_overrides` | ✅ exists | `059` |
| `v1_home_feed` (signed-in & signed-out branches) | ✅ exists | `059` |
| `v1_sync_user_data` | ✅ exists (reading_progress + bookmarks + notes + artwork_saves; NO highlights) | `059:215-296` |
| `claim_local_data()` | 🔴 missing — only mentioned in strategy doc; no migration | grep over `supabase/migrations` finds it only in `056` as a comment |
| `is_premium(uuid)` | ✅ exists | `057` |
| `chapter_overrides` table | ✅ exists | `033` |
| `subscription-receipt-validate` Edge Function | ✅ stubbed | `supabase/functions/subscription-receipt-validate/index.ts` |
| `bible-translation-proxy` Edge Function | ✅ stubbed | `supabase/functions/bible-translation-proxy/index.ts` |
| `narration` storage bucket (open question, defer to v1.1) | 🔴 not created | n/a |
| `content` storage bucket | ✅ live (URL in `ContentService.swift:22`) | populated by `scripts/build-content-packs.ts --upload` |

#### Storage buckets + content-pack pipeline status

- `content` bucket — public, anon-readable. Layout = `v1/manifest.json` + `v1/chapters/<book>.json`. URL pattern is what iOS expects (`ContentService.swift:22-25`).
- Build script (`scripts/build-content-packs.ts`):
  - Iterates `bibleBooks` from `src/data/books.ts`.
  - For each chapter, calls `getRichChapter(...)` (hand-authored ⊕ auto-port).
  - Skips empty shells.
  - Serializes RegExp via `{ pattern, flags }`.
  - Computes sha256 over the JSON body.
  - Writes `dist/content/v1/chapters/<slug>.json` + `dist/content/v1/manifest.json`.
  - With `--upload`, PUTs to Supabase Storage with `Cache-Control: public, max-age=3600`.
- What it does NOT cover (yet):
  - Cross-references — `RichSection.crossRefs` is included in the rich-content type. But the Swift decoder doesn't read it, so the iOS app drops it on the floor.
  - Resources / footnotes — `ResourceLink[]` is serialized into the JSON via `...rich` spread (it isn't explicitly serialized but `JSON.stringify` will include it), but `RichChapterContent.swift` has no field for it.
  - Strong's lexicon, TSK cross-reference data, audio narration — none in scope of current build.
  - Per-translation packs — only the author's KJV-anchored text ships. Switching translations requires a separate `verses` query (post-v1).

---

## Gap Analysis (Strategy vs. Reality)

For each commitment in `docs/MOBILE-PLATFORM-STRATEGY.md`, status:

| Strategy commitment | Status | Evidence |
|---|---|---|
| Web + iOS + Android clients exist | 🟡 partial — iOS scaffolded, Android not started | `ios/` exists; no `android/` |
| iOS = Swift 6, SwiftUI, iOS 17 | ✅ | `ios/project.yml` |
| Bundle id `com.learnofchrist.app` | ✅ | `ios/project.yml:46` |
| xcodegen from `project.yml` | ✅ | `ios/project.yml` |
| App is free, sign-in optional | ✅ design | `OnboardingView` doesn't gate; `LearnOfChristApp` doesn't gate on auth |
| Anonymous reads | ✅ | `ContentService` doesn't send a JWT |
| First-time sync triggers Sign in with Apple | 🔴 | `SignInPromptCard` sheet is a placeholder; no actual AuthenticationServices code |
| `claim_local_data()` write on sign-in | 🔴 | RPC doesn't exist; no Swift caller exists |
| `v1_sync_user_data` for pull-to-refresh | 🟡 partial backend; 🔴 no iOS caller | RPC exists in `059`; no Swift networking for sync |
| Mobile-only writes use PostgREST POST/PATCH on user tables | 🔴 | No Swift caller |
| `client_id` + `client_updated_at` on every local row | ✅ | `UserDataModels.swift` all four models carry both |
| `deleted_at` soft-delete locally | ✅ | All `@Model` classes have `deletedAt` |
| Last-write-wins per record | n/a no sync yet | n/a |
| Lowercase USFM-ish canonical ref | ✅ | `ScriptureRef.swift` + `canonicalRef.ts` round-trip the same test vectors |
| TS parser at `src/lib/scriptureRefs.ts` | 🟡 the **canonical** parser is at `src/lib/canonicalRef.ts`, not `scriptureRefs.ts` (which is the loose-form prose parser) | Strategy doc says `src/lib/scriptureRefs.ts` — that's incorrect/aliased; the actual canonical lives in `canonicalRef.ts`. The strategy doc should be updated. |
| Swift parser at `LearnOfChrist/Reference/ScriptureRef.swift` | ✅ | exists |
| Kotlin parser | 🔴 — Android not started | n/a |
| Shared test vectors `docs/scripture-ref-test-vectors.json` | ✅ | exists |
| Bible verses (KJV/ASV/WEB/JST) in content packs | 🟡 only KJV ships — the rich-chapter scripture blocks are KJV-anchored; ASV/WEB/JST live in the `verses` table | check `build-content-packs.ts` |
| Bible verses (NIV/ESV/CSB) via `bible-translation-proxy` | 🟡 Edge Function is stubbed | `supabase/functions/bible-translation-proxy/index.ts` |
| Per-chapter study guides in content packs | ✅ | `build-content-packs.ts` |
| `chapter_overrides` (admin edits) in DB, merged client-side | 🟡 RPC exists, no Swift merger | `v1_chapter_overrides` (059) |
| Topics / questions / blog → DB | ✅ | tables exist |
| Artwork library → DB | ✅ | `artworks`/`artists` tables |
| Study plans → DB | ✅ | tables exist |
| Cross-references (TSK) → content packs | 🔴 — TSK not packaged anywhere; only per-section `crossRefs` lives in author-authored TS files | n/a |
| Word studies (Strong's) → content packs | 🔴 — not packaged | n/a |
| User data → DB | ✅ | `user_*` tables |
| Subscription state → DB (gated by Edge Function writes) | ✅ scaffolded | `subscriptions` (057) + Edge Function |
| Pack versioned `content/v1/` | ✅ | `PACK_VERSION = 1` in build script; URL in iOS hardcodes `/v1` |
| Manifest checked on launch, pull only changed | 🟡 packs are hash-validated, but manifest itself is re-fetched every launch | `ContentService.swift:39` |
| `manifest.json` published after content files (no partial deploy) | ✅ | `build-content-packs.ts:235` ("manifest.json last so clients never see a partial deploy") |
| `subscriptions` table built but not used in v1 | ✅ | `057` |
| No rate limiting in v1 | ✅ | only `/api/report-artwork` rate-limits, by design |
| No AI features in v1 | ✅ | no AI code surfaces in iOS |
| Web `v1_*` non-breaking forever | n/a — no v2 yet | |
| Family Sharing path | n/a — out of scope | |
| Realtime subs not used in v1 | ✅ | iOS uses SwiftData only |
| Pre-rendered narration audio (defer to v1.1) | 🔴 open | no bucket, no iOS audio component |
| Search via SQLite FTS on device | 🔴 | not started |
| Account linking via `auth.identities` | n/a — depends on Apple flow shipping | |

---

## Refactor Targets in the Web Codebase

Specific files that need reshaping so iOS coexists cleanly.

1. **`src/components/RichStudyGuide.tsx`** — currently the only consumer of the rich-content shape on web. It depends on `useTranslation`, `useStudyLevel`, `useAudience` contexts, and inline imports that pull `next/dynamic`, CSS files, browser-only effects. The data-pipeline pieces (filter by level/audience, dehydrate RegExp, resolve artwork slugs) should keep moving out of this component and into pure helpers in `src/lib/`. Acceptance: when iOS needs to know "given a RichChapterContent + level + audience, what blocks survive?", the answer must be importable as a pure function — today it is (`filterContent` in `types.ts:617`), but the artwork resolution still partially lives in the component. Move `resolveOpenerSlug` / artwork-pool selection logic into `src/lib/artworkResolve.ts` so the build script (and a future v1_chapter_artwork RPC) can call it.

2. **`src/lib/scriptureRefs.ts`** — the strategy doc points at this file as the "canonical TS parser", but it's actually the loose-form in-prose parser. The canonical strict parser is in `src/lib/canonicalRef.ts`. Update the strategy doc OR add a re-export from `scriptureRefs.ts` so the strategy doc's pointer is honored. Acceptance: a developer following the strategy doc lands on the right file.

3. **`scripts/build-content-packs.ts`** — does not emit `resources`, `crossRefs`, `characters`, `map`, `estimatedMinutes`, `topicTags`, `christIndexSummary`, or `youth` explicitly. It serializes via spread so the data IS in the JSON, but it gets dropped silently on the iOS side because the Swift decoder lacks the keys. The build script doesn't need code changes — the iOS decoder does — but the build script should fail loudly when it sees an unknown `block.kind` so we don't ship blocks Swift can't render. Acceptance: building a pack that contains a block whose kind isn't in a Swift-known set logs a warning.

4. **`src/lib/supabase/server.ts` + `src/lib/supabase/browser.ts`** — these are Next-cookies-bound. The iOS app will use a pure JWT-bearing Supabase client. Factor any **pure data queries** (e.g. `getVerses`, `getArtworksForChapter`, `getArtTypeahead`, `fetchVersesClient`) into a `src/lib/data/` module that takes a `SupabaseClient` as parameter. Then iOS-side equivalents can be added in Swift, and `/api/*` routes shrink to thin RPC wrappers. Acceptance: `getVerses(supabase, bookId, chapter, translationId)` is a pure function with no `'use client'` directive or cookie dependency.

5. **`src/components/StudyFilters.tsx` / `src/components/StudyLevelControl.tsx` / `src/components/TranslationSwitcher.tsx`** — these encapsulate level / audience / translation state. Their **state schema** (which values are persisted, where, with what defaults) should be lifted into a `src/lib/readerPrefs.ts` with: `study_level: StudyLevel`, `audience: Audience`, `translation: TranslationAbbr`, plus serialization. iOS can mirror that schema exactly and read from `user_reading_prefs` (migration 060) for the cross-device fields. Acceptance: a renamed `readerPrefs.ts` is the single source of truth for the keys persisted to `localStorage` (web) and `@AppStorage` / `user_reading_prefs` (iOS).

6. **`src/data/study-chapters/types.ts:483` (`filterContentByLevel`) and `:541` (`filterContentByAudience`)** — these are already pure functions. The Swift port should mirror them byte-compatibly so depth & audience picks render the same set of blocks. Acceptance: a shared test vector at `docs/rich-content-filter-test-vectors.json` (to be added) drives both `filterContent` (TS) and `RichChapterContent.filter(level:audience:)` (Swift).

7. **`src/data/study-chapters/cross-refs.ts`** — the cross-ref fallback table. Today shipped as TypeScript, used only via `RichStudyGuide` → `getFallbackCrossRefs`. Either:
   - Bake fallback cross-refs into each section's `crossRefs` at build time and ship in the pack; OR
   - Expose a new `v1_cross_refs(book_slug, chapter, section_idx)` RPC.
   The strategy doc commits cross-references to content packs ("Cross-references (TSK) | content packs") so the build-bake path is on-strategy. Acceptance: after the build, each section in `dist/content/v1/chapters/*.json` has its `crossRefs` populated.

8. **`src/components/HebrewAudio.tsx` / `src/lib/useSpeech.ts`** — Web Speech API only. Factor the "what transliteration to speak per Hebrew/Greek block" mapping into a pure helper (`src/lib/transliterationSpeech.ts`) so iOS can wire `AVSpeechSynthesizer` to the same word list. Acceptance: a pure function `wordsForBlock(block: HebrewBlock | GreekBlock): string[]` exists and is the contract.

9. **`src/lib/canonicalRefURLs.ts`** — should ship a deterministic URL builder for the iOS app's Universal Links. Today it converts canonical refs to web URLs (e.g. `genesis.1.1` → `/study/genesis/1`); iOS Universal Links need to map the same canonical refs to `learnofchrist://` or `https://learnofchrist.com/...` paths the iOS app handles. Acceptance: `urlFromRef(ref: CanonicalRef, target: 'web' | 'ios-app'): string` is a single function used by both clients.

---

## New Server Endpoints Needed

| Endpoint | Why | Auth | Strategy doc reference |
|---|---|---|---|
| `claim_local_data(p_rows jsonb)` RPC | Sign-in handoff: upload locally-stored rows under the new `user_id`. Strategy doc treats it as a contract (`MOBILE-PLATFORM-STRATEGY.md:40`). | authenticated | YES (line 40) |
| New `user_highlights_v2` table OR migration of `user_highlights` to mobile-sync shape | iOS persists highlights; nowhere to sync to. Today's `user_highlights` is incompatible (no slug, no client_id, no soft-delete). | RLS owner_rw | implied by "user_* tables synced via `v1_sync_user_data`" (line 38) |
| `v1_sync_user_data` extension to include `user_highlights_v2` | Once highlights table exists, sync must include them. | authenticated | YES |
| `v1_app_config().content_manifest_url` points to a real CDN | Today `059` returns `'https://content.learnofchrist.com/v1/manifest.json'` but iOS hardcodes the Supabase Storage URL. Either route iOS through `v1_app_config` first (so the URL is dynamic and overridable per build) OR remove the field from `v1_app_config`. | anon | line 49 |
| `v1_translations_list()` RPC | Translation switcher needs the active translations and their `abbreviation`/`name`/`language`/`is_active`. Today the web hits the `translations` table directly. | anon | inferred from translation switcher commitment |
| `v1_topics_index()`, `v1_topic(p_id)` | iOS Topics feature (Phase 3) | anon | "Topical pages, questions, blog → DB" |
| `v1_questions_index(p_book_slug, p_chapter)`, `v1_question(p_id)` | iOS Questions feature (Phase 3) | anon | |
| `v1_study_plans_index()`, `v1_study_plan(p_id)` | iOS Study Plans feature (Phase 3) | anon | |
| `v1_artwork_search(p_q, p_limit)` (Postgres function) OR keep `/api/art/search` | iOS Art tab. If the iOS client can call PostgREST directly, no /api/ proxy is needed. | anon | "Artwork library → DB" |
| `v1_report_artwork(p_artwork_id, p_reason)` | iOS users report bad artwork. Reuse the existing `report_artwork` table the `/api/report-artwork` route uses. | anon | inferred |
| `v1_sync_user_prefs(p_prefs jsonb)` (or use base table) | Cross-device sync of study_level + audience + translation. | authenticated | implicit |
| Universal Link host config (`apple-app-site-association`) at `learnofchrist.com/.well-known/apple-app-site-association` | iOS deep links from web → app | n/a | inferred from "deep links" mention (line 96) |

### iOS app needs but might not need a new endpoint

- **Daily verse text** — `v1_home_feed` returns only `daily_verse_ref` (a canonical string). iOS already has every pack's KJV verse text locally. So iOS resolves the daily verse text from the pack, no new endpoint needed. Strategy doc explicitly designs it that way (`MOBILE-PLATFORM-STRATEGY.md:188-192`).

---

## New Content Packs Needed

Beyond what `scripts/build-content-packs.ts` currently produces:

1. **Cross-references baked per section** — `RichSection.crossRefs` is in the TS type but the build does not call `getFallbackCrossRefs` to backfill unset sections. Bake at build so packs ship "complete." Touch points: `scripts/build-content-packs.ts`, `src/data/study-chapters/cross-refs.ts`.

2. **Resources / footnotes** — `RichChapterContent.resources` is included in the JSON via `...rich` spread (untested but most likely present), but Swift discards them. Either add to the Swift decoder OR explicitly drop them in the build to slim the pack. Decision pending.

3. **Strong's lexicon pack** (`content/v1/strongs.json` or per-letter pack) — strategy commits to it ("Word studies (Strong's) | content packs"). Not started.

4. **TSK cross-reference pack** (`content/v1/tsk/<book>.json`) — strategy commits to it. Not started. Decision: per-book TSK packs analogous to chapter packs, hash-indexed in manifest.

5. **Translation packs for KJV/ASV/WEB/JST** (`content/v1/bible/<translation>/<book>.json`) — strategy says "content packs" for public-domain translations. Today only the author's chosen text (embedded in the rich chapter) ships. Without per-translation packs, the iOS translation switcher cannot work offline.

6. **Topic taxonomy & color tokens for marks** — `art/topics.ts` `TopicSlug` union is referenced by `topicTags` on each chapter. If iOS surfaces topical chips or topic-based discovery, the topic catalog needs to ship as a pack or RPC.

7. **Audio narration pack** (`content/v1/narration/<book>-<chapter>.m4a`) — strategy: open question, defer to v1.1. Not in current build.

8. **People / characters library** — `src/data/study-chapters/characters.ts` is currently TS only. Either inline each character bio into the per-chapter `characters[].bio` at build time, or ship a separate `content/v1/people.json`.

9. **Map presets** — `src/components/ChapterMap.tsx` ships the SVG silhouettes. If iOS renders maps natively, the silhouettes need a parallel SwiftUI implementation OR each preset's SVG needs to be in the pack.

---

## Prioritized Punch List

Each item is ≤1 day of focused work. Items reference exact paths.

1. **Extend `RichChapterContent.swift` decoder to include all the rich fields shipped in the pack JSON.**
   - File: `ios/LearnOfChrist/Models/RichChapterContent.swift`.
   - Add: `resources: [ResourceLink]?`, `topicTags: [String]?`, `estimatedMinutes: EstimatedMinutes?`, `christIndexSummary: String?`, `characters: [ChapterCharacter]?`, `map: ChapterMap?`, `youth: YouthOverrides?` on `RichChapterContent`; add `crossRefs: [CrossRef]?` on `RichSection`; add `case resource(text: String, resourceId: String)` on `VerseSpan`.
   - Acceptance: a pack JSON containing those fields decodes without error, the new fields are non-nil where the source TS sets them, and `ChapterReaderView` continues to render correctly (no required UI change yet — gated behind future block subviews).

2. **Add `Accept-Encoding: gzip` + `If-None-Match` to `ContentService.fetchManifest`.**
   - File: `ios/LearnOfChrist/Networking/ContentService.swift`.
   - Persist the manifest's ETag (or sha256 of body) in `UserDefaults`; send `If-None-Match` on the next launch; on 304 return the cached `ContentManifest` straight from `PackCache`.
   - Acceptance: second launch with unchanged manifest does not download manifest bytes; verified via Charles or `URLSession` metrics.

3. **Author migration `062_user_highlights_v2.sql` to give iOS a sync-shaped highlights table.**
   - File: `supabase/migrations/062_user_highlights_v2.sql`.
   - Columns: `id uuid PK`, `user_id uuid`, `book_slug text`, `chapter int`, `verse_start int`, `verse_end int`, `color text`, `created_at`, `updated_at`, `client_id uuid`, `client_updated_at timestamptz`, `deleted_at timestamptz`. RLS owner_rw. Index for sync.
   - Acceptance: PostgREST POST/PATCH on the table works for an authenticated user; column shape is byte-compatible with iOS `StoredHighlight`.

4. **Extend `v1_sync_user_data` to include `user_highlights_v2`.**
   - File: `supabase/migrations/063_sync_user_data_highlights.sql` (CREATE OR REPLACE FUNCTION).
   - Mirror the pattern at `059:215-296` — add a `v_highlights jsonb` block.
   - Acceptance: an authenticated client calling the RPC after a fresh highlight insert sees it in the response.

5. **Author migration `064_claim_local_data.sql` with the `claim_local_data(p_rows jsonb)` RPC.**
   - File: `supabase/migrations/064_claim_local_data.sql`.
   - Signature: `(p_progress jsonb, p_bookmarks jsonb, p_notes jsonb, p_highlights jsonb)` — each is an array of rows that the function inserts under `auth.uid()` with conflict resolution (ON CONFLICT DO UPDATE WHERE excluded.client_updated_at > existing.client_updated_at, last-write-wins on client clock).
   - Acceptance: SQL test — insert local rows on two clients with different `client_id`, claim both, sync, all rows survive with correct attribution.

6. **Resolve the `bigserial id` vs Swift `UUID` mismatch on `user_verse_bookmarks` and `user_verse_notes`.**
   - File: `supabase/migrations/065_user_data_uuid.sql`.
   - Option A: add `client_uuid uuid not null default gen_random_uuid() unique` column, use it as the natural key the client supplies. Option B: change PK to UUID. A is less risky; B is cleaner. Pick one.
   - Acceptance: iOS can POST a bookmark with a `client_uuid` it generated locally and PATCH it later using the same id.

7. **Wire Sign in with Apple in `SettingsView.SignInPromptCard`.**
   - Files: new `ios/LearnOfChrist/Auth/SignInWithApple.swift`, edit `ios/LearnOfChrist/Views/Settings/SettingsView.swift`, edit `ios/project.yml` to add `Sign In with Apple` capability.
   - Use `AuthenticationServices.ASAuthorizationAppleIDProvider`, exchange the identity token at Supabase `auth.signInWithIdToken({ provider: 'apple', token })`.
   - Acceptance: tapping "Sign in with Apple" completes the iOS prompt and stores a session JWT; `SettingsView` then shows account info instead of the call-to-action.

8. **Implement `SyncService.swift` and call it on app foreground.**
   - File: new `ios/LearnOfChrist/Networking/SyncService.swift`.
   - On foreground, if signed in, call `v1_sync_user_data(p_since: lastSyncedAt)`, upsert returned rows into SwiftData (respecting `deleted_at`), update `lastSyncedAt` in UserDefaults. Also push local changes via PostgREST POST/PATCH.
   - Acceptance: two devices, same user, sign-in → bookmark on A → pull-to-refresh on B → bookmark appears.

9. **Implement `claim_local_data` call on first successful sign-in.**
   - Files: `ios/LearnOfChrist/Networking/SyncService.swift`, `ios/LearnOfChrist/Persistence/UserDataStore.swift` (add `localOnlyRows()` helper).
   - After sign-in handoff, gather every local row not yet uploaded (track via a new `syncedAt: Date?` column OR by `client_id == this device & user_id == NULL` semantics that don't apply in SwiftData — use a flag), POST to `claim_local_data`, mark synced.
   - Acceptance: signed-out user creates 3 bookmarks → signs in → bookmarks appear in `user_verse_bookmarks` under their `user_id`.

10. **Add Translation switcher and Depth picker to iOS Settings + Reader toolbar.**
    - Files: new `ios/LearnOfChrist/Views/Reader/ReaderPrefsToolbar.swift`, edit `ChapterReaderView.swift`, edit `SettingsView.swift`.
    - Persist via `@AppStorage("reader.translation")` + `@AppStorage("reader.studyLevel")` + `@AppStorage("reader.audience")`.
    - Apply level/audience filter via a Swift port of `filterContentByLevel` / `filterContentByAudience` from `types.ts:483/:541`.
    - Acceptance: switching depth removes commentary blocks at "beginner" exactly like the web; switching audience hides `hideForYouth` blocks.

11. **Port `filterContent(level, audience)` to Swift and add shared test vectors.**
    - Files: new `ios/LearnOfChrist/Models/RichChapterContentFilter.swift`, new `docs/rich-content-filter-test-vectors.json`, new `ios/LearnOfChristTests/RichContentFilterTests.swift`, new `src/data/study-chapters/__tests__/filter.spec.ts`.
    - Acceptance: same vectors pass in both Swift and TS.

12. **Bake per-section `crossRefs` fallback into packs.**
    - File: `scripts/build-content-packs.ts`.
    - For each `section` with no `crossRefs`, call `getFallbackCrossRefs(bookSlug, chapter, sectionIdx)` and write the array into the section JSON.
    - Acceptance: a sample built pack (e.g. `dist/content/v1/chapters/john.json`) has `crossRefs` on every section.

13. **Render `crossRefs` in `ChapterReaderView`.**
    - File: `ios/LearnOfChrist/Views/Reader/ChapterReaderView.swift`.
    - After each section's last block, render a horizontal-scrolling card with `CrossRef.ref / .snippet / .note`. Tap → parse `ref` via the loose-form parser (which iOS doesn't have yet — see item 14) and push the target chapter.
    - Acceptance: chapter with `crossRefs` shows the card; tap navigates.

14. **Port `src/lib/scriptureRefs.ts` (loose-form prose parser) to Swift.**
    - File: new `ios/LearnOfChrist/Reference/ProseRef.swift`.
    - Mirror `BOOK_PATTERNS`, `parseRef`. This is the parser for in-prose strings like "John 3:16"; the existing `ScriptureRef.swift` only handles the canonical `john.3.16` form.
    - Acceptance: same loose-form vectors parse identically in both TS and Swift.

15. **Add a Home tab to the iOS shell that consumes `v1_home_feed`.**
    - Files: new `ios/LearnOfChrist/Views/Home/HomeView.swift`, edit `RootView.swift` to add a fourth tab.
    - For signed-out users, render daily verse (resolved against local pack via canonical ref) and "Open the Bible" CTA. For signed-in, render Continue Reading + recent bookmarks/notes.
    - Acceptance: cold-launch shows Home tab with deterministic daily verse; bookmark + notes carousel populates after sign-in + sync.

16. **Hook Universal Links for `https://learnofchrist.com/study/<book>/<chapter>` and `/study/<book>/<chapter>#v<verse>`.**
    - Files: new `ios/LearnOfChrist/AppLinks/UniversalLinkRouter.swift`, edit `LearnOfChristApp.swift` to add `.onOpenURL`, edit `project.yml` to add `com.apple.developer.associated-domains`.
    - Also: web-side, publish `apple-app-site-association` at `/.well-known/apple-app-site-association`.
    - Acceptance: tapping a Learn of Christ web link in Safari while iOS app is installed opens the corresponding chapter in the app.

17. **Add `narration` Supabase Storage bucket and a stub player in iOS Settings (gated, defaults off).**
    - Files: new `supabase/migrations/066_narration_bucket.sql`, new `ios/LearnOfChrist/Audio/NarrationService.swift`, new `ios/LearnOfChrist/Views/Reader/NarrationButton.swift` (hidden behind `v1_app_config.feature_flags.audio_narration`).
    - Strategy doc says defer to v1.1 — so the iOS-side stub is fine, but the bucket needs to exist for content to start landing.
    - Acceptance: bucket exists; iOS reads feature flag from `v1_app_config` and shows / hides the button accordingly.

18. **Fail the content-pack build when an unknown block kind is encountered.**
    - File: `scripts/build-content-packs.ts`.
    - Maintain an explicit allowlist mirroring the Swift `Block` enum. Emit a non-zero exit on mismatch with a clear message ("Block kind 'X' is in the TS schema but the Swift decoder doesn't know about it; bump the Swift schema first").
    - Acceptance: introducing a new TS block kind without updating Swift breaks CI.

19. **Add a Swift `Block` for `.resource(text, resourceId)` and render the superscript footnote.**
    - Files: `ios/LearnOfChrist/Models/RichChapterContent.swift`, `ios/LearnOfChrist/Views/Reader/VerseRow.swift`.
    - Number assigned in document order (mirror `RichStudyGuide`'s `hr` rendering).
    - Acceptance: a chapter using `hr('text', 'res-1')` shows the superscript number on iOS in the right place.

20. **Update `docs/MOBILE-PLATFORM-STRATEGY.md` to reference `canonicalRef.ts` (not `scriptureRefs.ts`) as the TS canonical parser.**
    - File: `docs/MOBILE-PLATFORM-STRATEGY.md:106`.
    - Acceptance: one-line edit.

---

## Risks / Open Questions

- **Pack size at scale.** Once every book in `RICH_CHAPTERS` is hand-authored, a per-book pack for Psalms (150 chapters) is going to be multi-MB. The strategy doc commits to "Per-book pack, downloaded on first chapter open." That works for skinny books but Psalms / Isaiah / Genesis hand-authored are going to feel slow on cellular. Open: do we shard packs into per-chapter files (`v1/chapters/<book>/<chapter>.json`) once a book crosses a size threshold? The current manifest format supports it (one Entry per file).

- **Apple ↔ Google account auto-merge.** Strategy says "auto-merge on email match" but the actual merge logic isn't in any migration; it relies on Supabase Auth's default `auth.identities` behavior. We should confirm this is what we want for users who signed in on web with Google → install iOS → tap Sign in with Apple with the same Apple-private-relay email. The relay-email case in particular probably defeats auto-merge.

- **`user_highlights_v2` vs migrating `user_highlights`.** Option A (new table) is risk-free but leaves the legacy table dangling forever. Option B (migrate) means writing a backfill that fabricates `book_slug` from `book_id` via `books.slug` and decides what to do with rows that have no `verse_end`. Option B is cleaner long-term. The strategy doc doesn't take a side.

- **`bigserial` vs UUID PK on bookmarks/notes.** Same dilemma — strategy promises UUID, schema has bigserial. The web today doesn't care, the iOS sync future does. We need a migration soon; in the meantime, iOS shouldn't be able to POST a row with a client-generated UUID into a bigserial column. **Currently the iOS code path doesn't sync at all, so this is latent.**

- **`v1_app_config.content_manifest_url` mismatch.** Strategy expects iOS to call `v1_app_config` first and use its returned URL. Today iOS hardcodes the public Supabase Storage URL. If we ever move content to a Cloudflare CDN at `content.learnofchrist.com` (which the `v1_app_config` body already announces), iOS won't follow until the hardcoded URL is removed. Either bring the iOS code in line (Phase 1) or correct `v1_app_config` to return the Supabase URL.

- **Loose-form prose parser duplication.** `scriptureRefs.ts` (web) is 250+ lines of regex + alias tables. Porting it to Swift is straightforward but it's the kind of code where the two implementations will drift. Consider whether iOS even needs in-prose ref parsing — if all cross-refs already arrive as structured `CrossRef.ref` strings, the loose parser is only needed for free-text commentary. Open question: are commentary `html` strings on iOS rendered as plain text (current behavior) and so don't need ref-linking?

- **Hebrew/Greek audio voice availability.** Web uses Web Speech API with English transliteration. iOS `AVSpeechSynthesizer` voices vary by locale install — speaking "tehom" with the user's default voice will sound different per device. Possibly acceptable.

- **Kids audience.** Strategy section says kids is a different schema (`src/data/kids-chapters/types-kids.ts`). The iOS app has NO kids decoder, NO kids registry, NO audience picker. Kids on iOS is its own ~3-day add. Out of v1 scope is fine.

- **Apocrypha / deuterocanon books.** `RICH_CHAPTERS` contains entries like `4-maccabees/9`. The static `BibleBookCatalog` in Swift contains only the 66 canonical books. If a content pack ships for `4-maccabees`, iOS's `BookGridView` will not list it → unreachable. Decision: extend `BibleBookCatalog` with an `apocrypha` testament OR keep apocrypha web-only.

- **Where does `v1_app_config().content_manifest_url` host live?** Returns `https://content.learnofchrist.com/v1/manifest.json` today (in the SQL body), but no DNS record points there. Probably a planned CDN.

---

### Critical Files for Implementation

- `/Users/jaeden/Documents/Claude/Projects/Learn of Christ/ios/LearnOfChrist/Models/RichChapterContent.swift`
- `/Users/jaeden/Documents/Claude/Projects/Learn of Christ/supabase/migrations/059_mobile_rpcs_v1.sql`
- `/Users/jaeden/Documents/Claude/Projects/Learn of Christ/supabase/migrations/019_user_accounts.sql`
- `/Users/jaeden/Documents/Claude/Projects/Learn of Christ/src/data/study-chapters/types.ts`
- `/Users/jaeden/Documents/Claude/Projects/Learn of Christ/scripts/build-content-packs.ts`
