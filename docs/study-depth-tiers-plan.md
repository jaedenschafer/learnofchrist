# Study Depth Tiers — 5 / 10 / 15-Minute Versions

A planning doc for Learn of Christ. Goal: every chapter offers three lengths
(Quick / Standard / Deep) the reader can switch between with a single tap, with
the new tier rendering instantly. Single source of truth in the data files; no
duplicated chapter content; no rewrites except for a small set of outlier
chapters.

---

## 1 — Audit results (real numbers)

Ran a word-count pass over all `src/data/study-chapters/*.ts` rich files.

- **1,247 rich-authored chapters** in the registry today.
- Per-block-kind median word count (chapters that include the kind):
  - intros 171 · scripture 581 · commentary 543 · christ 150 · carry 242
  - hebrew 115 · greek 235 · reflection 98 · artwork caption 13
- Reading-time math at 180 wpm prose / 200 wpm scripture / 60 wpm reflection
  (reflection prompts are think-time, not read-time):
  - **FULL chapter:** median 11.7 min · p25 5.1 · p75 17.3 · max 39.6
  - The "average" chapter is about 12 minutes. Genuine 30+ min chapters exist
    in long Old-Testament narratives and Matthew/Luke; some half-page chapters
    (Psalm fragments, genealogies) come in under 3 min even at full depth.

**Implication for tier labels.** The right framing is *approximate ranges*, not
exact times: "Quick (≈5 min)", "Standard (≈10 min)", "Deep (everything)". For
the median chapter, the proposed default rule lands at 4.1 / 8.6 / 11.7
minutes — close enough that we can call them 5 / 10 / 15. The UI shows the
*estimated* time per chapter at each tier rather than a fixed promise.

---

## 2 — The default tagging rule

Every block gets a `minTier: 5 | 10 | 15` derived from its `kind`. One pass of
a script writes these defaults into every existing chapter file. Anything that
needs a different tier than its default gets hand-edited per chapter.

| Block kind   | Default `minTier` | Why                                                                  |
|--------------|-------------------|----------------------------------------------------------------------|
| `scripture`  | **5**             | The spine. Every verse, every tier — a confirmed product rule.        |
| `christ`     | **5**             | The point. Christ Connections are the throughline of the whole site.  |
| `carry`      | **5**             | The application. Five-minute readers still get the "what now."        |
| `commentary` | **10**            | The teaching. Adds context without new vocabulary.                    |
| `hebrew`     | **15**            | Word-study callout. Optional depth, not the core arc.                 |
| `greek`      | **15**            | Same.                                                                 |
| `reflection` | **15**            | Think-time prompts; great for slow study, omit for skim.              |
| `artwork`    | **15**            | Visual side-trip; pretty, but not load-bearing.                       |
| `divider`    | follows neighbor  | Resolved at render time (drop a divider if it would orphan).          |

`intros[]` (top-of-chapter paragraphs) and `bottomShare` follow a parallel rule
in the chapter shell:

- Tier 5 shows the **first intro paragraph only** and hides `bottomShare`.
- Tier 10 shows **all intros** and `bottomShare`.
- Tier 15 same as 10 (no extra intros to add).

### Per-chapter overrides

A small number of chapters genuinely need different defaults — for example,
Genesis 22 (the binding of Isaac) needs its `christ` block at tier 10 instead
of 5 because the Christ Connection there sits inside a longer commentary
sequence and reads strangely on its own. The schema supports overrides per
block (just set `minTier` explicitly on the block in the `.ts` file). The bulk
script writes defaults; the override lives next to the prose.

### Why default-rule beats per-block manual

- **Speed:** one script run tags 1,247 files in seconds; per-block manual is
  weeks of judgment calls.
- **Consistency:** readers learn what the tier control does. "Quick = the
  scripture and the takeaway" stays true everywhere.
- **Token cost:** zero rewrites for ≈90 % of chapters. We rewrite only when a
  default produces a chapter that reads broken — and even then we usually just
  bump one block's `minTier`, not regenerate prose.

---

## 3 — Schema change

```ts
// types.ts
export type DepthTier = 5 | 10 | 15;

export type Block =
  | { kind: 'scripture'; chapter: number; lines: VerseLine[]; minTier?: DepthTier }
  | { kind: 'commentary'; id?: string; html: string; minTier?: DepthTier }
  | { kind: 'hebrew';  id: string; title: string; script: string; translit: string; description: string; minTier?: DepthTier }
  | { kind: 'greek';   id: string; title: string; script: string; translit: string; description: string; minTier?: DepthTier }
  | { kind: 'christ';  id: string; title: string; html: string; minTier?: DepthTier }
  | { kind: 'carry';   html: string; minTier?: DepthTier }
  | { kind: 'reflection'; id: string; prompt: string; minTier?: DepthTier }
  | { kind: 'artwork'; matchTitle?: RegExp; matchArtist?: RegExp; artworkSlug?: string; caption: string; minTier?: DepthTier }
  | { kind: 'divider'; minTier?: DepthTier };

// New helper for the renderer.
export function defaultMinTier(kind: Block['kind']): DepthTier {
  switch (kind) {
    case 'scripture':
    case 'christ':
    case 'carry':       return 5;
    case 'commentary':  return 10;
    case 'hebrew':
    case 'greek':
    case 'reflection':
    case 'artwork':     return 15;
    case 'divider':     return 5;  // dividers are cheap; keep at the lowest tier
  }
}

export function effectiveMinTier(block: Block): DepthTier {
  return block.minTier ?? defaultMinTier(block.kind);
}

export function isVisibleAtTier(block: Block, tier: DepthTier): boolean {
  return effectiveMinTier(block) <= tier;
}
```

Optional but recommended chapter-level metadata:

```ts
export interface RichChapterContent {
  // …existing fields…

  /** Estimated minutes at each tier, computed at build time. The renderer
   *  shows this in the depth control so users see "Quick · 4 min" not just
   *  "Quick". Generated by the same audit script that bulk-tags blocks. */
  estimatedMinutes?: { 5: number; 10: number; 15: number };
}
```

Note we are **not** moving chapters into Supabase — confirmed. The `.ts`
authoring workflow (and the `rich-study-chapter` skill) stays as-is. Only the
*reader's chosen tier* needs Supabase storage, which it gets through the
existing `user_preferences` pattern (see §6).

---

## 4 — Renderer change

`RichStudyGuide.tsx` already filters and groups blocks. Two surgical changes:

1. **Filter blocks by active tier** before grouping:

   ```ts
   const visibleBlocks = sectionBlocks.filter((b) => isVisibleAtTier(b, tier));
   ```

2. **Drop empty sections** so a section that loses all its non-scripture blocks
   doesn't render an orphaned heading. Practically: if after filtering a
   section contains *only* a scripture block (no surrounding teaching) at the
   5-min tier, that's still fine — it renders as bare scripture. But if a
   section contains zero blocks (e.g., a dividers-only section), skip it.

3. **Resolve dangling highlight anchors.** Today, scripture verse marks
   (`hp/hy/hg`) jump to commentary block ids. If the target commentary is
   tier-15 and the user is on tier 5, the click would scroll to nothing.
   Two-line fix: when filtering, build a `Set<string>` of surviving block ids,
   then strip `mark` spans whose `jumpTo` is no longer present (replace with
   plain `text` spans). This is a render-time transform — no data change.

4. **Audio re-stitching.** Hebrew audio mounts only when the chapter has at
   least one `hebrew` block. The existing `hasHebrew` derive already works
   off the data; in tier-5 mode (where Hebrew is hidden), pass the
   *post-filter* derive so Hebrew audio doesn't mount uselessly.

The CSS-class approach used today by `BlockHideMenus` (apply
`hide-reflection` / `hide-carry` / `hide-hebrew` / `hide-images` to
`.rich-study`) is great for *user-toggled* hides but *not* great for tiers
because it leaves the DOM in place — break-anchors and audio still mount,
the page stays heavy. The proper fix is the JS filter above. We can keep the
existing CSS toggles as-is for the "I want to hide reflections always but
otherwise read the full chapter" power-user path; depth tiers are a separate
control that filters at render time.

### "Updates immediately on your page"

The tier value lives in React context (next section). When the user taps a new
tier, context updates → `RichStudyGuide` re-renders → filtered blocks change.
No fetch, no navigation, no Supabase round-trip in the critical path.
Sub-100 ms perceived latency.

---

## 5 — The depth-tier UI control

A three-button segmented control. Lives at the top of every chapter page,
directly under the title and alongside the existing tools row (translation,
font, theme).

```
   ┌──────────────────────────────────┐
   │  Quick · 4m   Standard · 9m   Deep · 12m │
   └──────────────────────────────────┘
```

Behavior:

- Renders with the chapter's `estimatedMinutes` so the user knows what they're
  picking. Without that field, falls back to the labels alone.
- Tap → instant re-render of the chapter at the new depth. No page reload, no
  scroll jump (preserve scroll position with `useLayoutEffect` + sentinel
  block id, or just fix focus to the nearest section heading).
- The control itself stays sticky to the top of the chapter as the user
  scrolls — so deep readers can dial down without scrolling all the way back
  up.
- If the user has the existing per-section hides on (e.g., "always hide
  reflection"), tier-15 still respects them. Tier and per-section hides are
  composable: a block is visible iff *both* `isVisibleAtTier(b, tier)` AND
  `not in hiddenSections`.

Visual placement (mockup, in words):

> Below the chapter title and intro, above the first scripture block. Three
> pills sized for thumbs on iOS, with the active tier filled and the inactive
> tiers as outlines. Estimated minutes in small text inside each pill.

---

## 6 — Persistence

Three layers, mirroring the pattern already used by `ReadingPrefsContext`,
`TranslationContext`, and `DenominationContext`:

1. **React context (`ReadingPrefsContext`):** add `depthTier: DepthTier` and
   `setDepthTier`. Default `10` (Standard) for new sessions.
2. **localStorage:** key `loc-depth-tier`, value `'5' | '10' | '15'`. Loaded in
   the existing `useEffect` that hydrates other prefs. Persists across page
   reloads and chapter navigation on the same device.
3. **Supabase user-preferences row:** when the user is signed in, a tiny write
   to a `user_preferences` table keyed by user id. Read on session start; write
   debounced (e.g., 500 ms) on change so rapid taps don't flood the API.

Schema for the Supabase row (one row per user):

```sql
create table user_reading_prefs (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  depth_tier     smallint not null default 10 check (depth_tier in (5, 10, 15)),
  font_size      text     not null default 'medium',
  reading_mode   text     not null default 'verse',
  theme          text     not null default 'light',
  hidden_sections text[]  not null default '{}',
  updated_at     timestamptz not null default now()
);
```

(Most of those columns already correspond to existing prefs in the React
context — this might just be one new column on a table that already exists.
Worth verifying against the live schema before writing the migration.)

**Sync strategy.** When a signed-in user changes the tier on web, the
debounced write hits Supabase. When the iOS app launches, it reads the
preference at session start so the same depth is in effect there. If the user
isn't signed in, localStorage alone is fine; if they later sign in, the local
value becomes the seed for the server row (last-write-wins is acceptable for
this kind of pref).

**iOS implications.** The same single source of truth (the chapter `.ts`
files, compiled to a JSON payload the iOS app downloads) ships to web and to
the iOS app. iOS implements the same `isVisibleAtTier` filter at render time.
The Supabase preference table is the cross-device sync mechanism. No fork in
the data pipeline.

---

## 7 — Edge cases and rules

- **Long-chapter outliers (max ≈40 min full).** Examples: 1 Kings 8 dedication
  prayer, Matthew 5–7 sermon on the mount as one chapter is fine because each
  of those *is* a chapter, but Numbers genealogies and the long Levitical
  legal sections blow past the 5-min budget *just from scripture alone* (max
  scripture word count is 2080 words = ~10 min just to read the verses).
  Acceptable answer: 5-min mode on those chapters honestly displays
  "≈10 min" — the verses are the spine and we agreed to keep them all. The
  control still labels itself "Quick" but the per-chapter time estimate tells
  the truth. Users aren't lied to.
- **Tiny chapters (under 3 min full).** All three tiers may collapse to the
  same thing. The depth control should still render; it's just informational.
  Or the renderer could detect this and hide the control on those chapters.
  Recommend: render it always, for consistency.
- **Dangling highlight marks.** Handled by the render-time anchor-stripping
  pass (§4.3).
- **Empty sections.** Drop at render time (§4.2).
- **`bottomShare` and intros.** Handled at the chapter shell, not the block
  filter.
- **Hebrew/Greek audio.** Don't mount when the surviving blocks have no
  Hebrew/Greek (§4.4).
- **Scroll position when switching tiers.** Use the nearest section heading as
  the anchor so the reader doesn't lose their place when blocks above them
  vanish.
- **SEO / search-engine view.** Render the **15-min (deep)** version
  server-side by default for crawlers — they should index the full content,
  not the trimmed one.
- **Print stylesheet.** Print = always tier 15. Forcing print to a single tier
  avoids the "I printed Quick by accident and now have a half-page chapter"
  trap.
- **Estimated minutes drift.** When a chapter is edited, regenerate
  `estimatedMinutes` via the same audit script. Wire it into a pre-commit hook
  or a CI step.

---

## 8 — Phased rollout

A four-phase plan, each phase is shippable on its own and reversible.

**Phase 1 — Schema, defaults, audit (no UI yet).**
- Add `minTier` to the `Block` type with `?` so existing chapters compile
  unchanged.
- Add `defaultMinTier`, `effectiveMinTier`, `isVisibleAtTier` helpers.
- Write the audit/tag script that walks every chapter file, computes
  `estimatedMinutes`, and writes the result into the chapter's
  `RichChapterContent`.
- Run `tsc` to make sure everything still compiles.
- No user-visible change yet.

**Phase 2 — Renderer + temporary URL-param control.**
- Wire `RichStudyGuide` to filter by tier.
- Implement anchor-stripping and empty-section dropping.
- Add a `?depth=5|10|15` query-param override so the team can preview each
  tier on every chapter without building UI yet. Spot-check 30–50 random
  chapters at each tier; flag the broken ones for per-block overrides.
- Fix the broken ones by editing `minTier` on individual blocks. (Expectation:
  fewer than 5 % of chapters need any override.)

**Phase 3 — UI control + localStorage persistence.**
- Add `depthTier` to `ReadingPrefsContext` with localStorage hydration.
- Build the segmented control component, place it under the chapter title.
- Make the existing `BlockHideMenus` and depth tier compose (both filters
  applied).
- Add the print stylesheet override (always tier 15).
- Confirm SSR renders tier 15 by default for unauth'd / first-load.

**Phase 4 — Account sync + iOS parity.**
- Add `depth_tier` to the user-preferences table in Supabase.
- Read at session start, debounced write on change.
- Implement the same filter logic in the iOS chapter renderer; read the same
  preference on launch.

---

## 9 — Open questions / things to decide later

- **Default tier for new readers.** Recommend **Standard (10)** — it's the
  middle path, lands closest to a "real Bible study session," and lets the
  user explicitly trade up or down. (Quick risks training people that the site
  is shallow; Deep risks a wall-of-text first impression.)
- **Should the depth control nudge?** First-time visitors might benefit from a
  one-line tooltip ("Tap to read in 5 minutes") on first chapter view. Worth
  A/B testing later.
- **Per-book defaults.** Some books (Psalms, Proverbs) might want a different
  default tier than narrative books. Defer until we have usage data.
- **Quick mode and the `intros`.** The doc proposes "first intro paragraph
  only" for tier 5. If even that feels long on some chapters, consider a
  separate `introMinTier` per intro paragraph (mirroring the block model).
- **Daily-plan integration.** If the platform later ships daily reading
  plans, the plan can choose its tier — "10-minute daily plan" forces tier 10
  for all chapters in the plan regardless of user preference.

---

## 10 — What gets touched

Concrete file list for the implementation:

- `src/data/study-chapters/types.ts` — add `DepthTier`, `minTier?`, helpers.
- `src/data/study-chapters/*.ts` (×1247) — script-written `minTier` overrides
  on a small number of blocks; `estimatedMinutes` on the chapter root.
- `scripts/audit-and-tag-depth.ts` (new) — the bulk-tagging + estimate script.
- `src/components/RichStudyGuide.tsx` — filter, anchor-strip, empty-section
  drop, scroll-anchor on tier change.
- `src/components/DepthTierControl.tsx` (new) — the segmented control.
- `src/lib/ReadingPrefsContext.tsx` — `depthTier` state + localStorage.
- `src/lib/supabase/user-prefs.ts` (new or extend existing) — read/write the
  `depth_tier` column.
- `supabase/migrations/NNN_user_reading_prefs_depth_tier.sql` — the column
  add.
- `src/app/study/.../page.tsx` — render the control; pass tier into context;
  default-15 for SSR.
- `src/components/print.css` — force tier 15 in print.
- iOS app (separate repo) — mirror filter logic + read pref at launch.

---

## TL;DR

1. **Tag, don't rewrite.** A one-shot script puts `minTier` defaults on every
   block. Hand-edit only the ≈5 % of chapters where the default reads wrong.
2. **Scripture is the spine.** All verses appear at every tier; only the
   surrounding teaching is what gets trimmed.
3. **Filter at render time.** No build-time pre-generation, no separate files,
   no DB migration of chapters. One source of truth in `.ts`.
4. **Tier control + localStorage + Supabase user prefs.** The same triple
   pattern already used for translation, denomination, font size, and theme.
   Web and iOS both read the same preference.
5. **The labels are approximate.** Show *estimated minutes* for the active
   chapter inside the control so the user sees the truth on chapters that
   blow past the budget.
