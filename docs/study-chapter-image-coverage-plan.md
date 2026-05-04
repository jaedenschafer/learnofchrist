# Study Chapter Image Coverage — Audit + Plan

Goal: every chapter study guide on learnofchrist.com surfaces **2–3 images**, with chapter-specific artwork preferred and topically related artwork as a controlled fallback when no scene-specific plate exists.

## 1. What we have today

The renderer (`RichStudyGuide.tsx`) already supports inline images in two places:

- a single `opener` art block at the top of the chapter (resolved by `matchTitle` / `matchArtist` / `artworkSlug`)
- any number of inline `kind: 'artwork'` blocks placed inside sections

Each match is resolved at render time against the chapter's artwork pool (`getArtworksForChapter(book, chapter)` → Supabase `artwork_scripture_refs`).

Source-of-truth plate catalogs live in `src/data/art/*.ts` (23 collections, ~24,000 lines): tissot, dore, gospel-art-book, schnorr, met, rijksmuseum, durer, caravaggio, rembrandt, michelangelo, raphael, blake, bloch, bouguereau, duccio, fra-angelico, giotto, hofmann, plockhorst, rubens, rublev, theophanes, gap-fill. Every plate carries `bookSlug`, `chapter`, `verseStart/End`, and a `sceneSlug` (creation, nativity, passion, prophets, wisdom, ministry, miracles, deliverance, judgment, apocalypse, david, moses, abraham, exodus, conquest, parables, etc.).

## 2. The audit (1,247 study-chapter files)

| State | Chapters | % |
|-------|----------|---|
| ≥ 3 images already | 61 | 5% |
| 2 images | 88 | 7% |
| 1 image | 168 | 13% |
| 0 images, **chapter-specific plates already cataloged** (just unreferenced) | 291 | 23% |
| 0 images, no chapter-specific plates (topical fallback needed) | 639 | 51% |

Two takeaways:

1. **The biggest win is plumbing, not sourcing.** 401 chapters are short of the goal but already have at least one chapter-specific plate sitting in the catalog — they just don't have an `artwork` block declared in the `.ts` file pointing at it. That's a mechanical pass.
2. **The hard half is the topical 740.** Heavy concentrations: psalms (98), isaiah (57), jeremiah (48), ezekiel (44), 2-chronicles (35), job (32), proverbs (30), 1-chronicles (28), deuteronomy (26), numbers (24). Several wisdom/poetry/genealogy books simply don't have scene-by-scene art history and never will.

## 3. The strategy

### Tier A — Chapter-specific (always the first choice)

Resolve the 401 "supply exists but unused" chapters first.

- Author script: for every chapter file that has `< 3` images, query the catalog for plates with matching `bookSlug` + `chapter`, pick the top 2–3 ranked by (a) painting before manuscript, (b) `is_primary` true first, (c) collection priority order (tissot, gospel-art-book, schnorr, dore, then the museum collections). Emit suggested `kind: 'artwork'` blocks the author can drop in.
- Placement rules: opener gets the most chapter-defining piece; remaining 1–2 inline blocks go between scripture sections (never inside a scripture-block — same pacing rule we use for commentary).
- Caption format already established: `Genesis 1:3-5 · Day One` (book chapter:verse · scene name).

### Tier B — Topical fallback (the 740)

When no chapter-specific plate exists, fall back to **scene-similar artwork from the same book or theme**, chosen via `sceneSlug`. The catalog already has a 40-bucket scene taxonomy that maps cleanly to chapter content:

```
creation, fall, flood, abraham, patriarchs, joseph, exodus, moses, wilderness,
covenant, conquest, judges, david, solomon, monarchy, prophets, wisdom,
suffering, providence, redemption, sacrifice, visions, judgment, apocalypse,
nativity, baptism, ministry, teaching, parables, miracles, passion,
crucifixion, resurrection, ascension, apostles, deliverance, family,
annunciation, babel
```

Each chapter gets a primary scene assigned (a one-line `sceneSlug` field added to the chapter file or computed from its dominant theme). The fallback resolver then picks two plates with matching `sceneSlug` from the same book first, the same testament second, the whole catalog third — biasing toward the same artist/series so the chapter feels visually consistent.

Hard rules for fallbacks:

- **Caption must signal "thematic"**: e.g. `Job 14 · The hope of resurrection (themed)` rather than implying the painting depicts the chapter directly. This avoids misleading readers into thinking a Doré plate is depicting that exact verse.
- **No fallback misattribution**: a Tissot crucifixion image cannot be the opener for an Old Testament chapter just because it's a famous piece. The scene must actually fit the chapter's content.
- **Genealogy / census chapters get architectural or contextual imagery** (manuscript folios, place-of-event paintings) rather than narrative scenes that don't belong.
- **Psalms get one of three modes** depending on mode of the psalm: lament → suffering, praise → wisdom/creation, royal → david/monarchy, messianic → christological scene. A Psalms-specific mapping table will cover all 150.

### Tier C — Manuscript & contextual (last resort)

For chapters where neither chapter-specific nor topical scene art is honest (most of 1–2 Chronicles, 4 Maccabees, 1 Esdras genealogies), fall to:

- manuscript folios from the same book (already in `met.ts` / `rijksmuseum.ts` with `manuscript-page` tag)
- archaeological / place imagery (temple, Jerusalem, Babylon)
- one decorative book-cover plate per chapter

These render with a clearly different caption style (`From the Codex Amiatinus · 8th c.`) so users understand they're looking at context, not illustration.

## 4. Closing the gap on books with thin catalogs

Books where Tier A + Tier B still falls short, ordered by remaining gap:

- **Psalms** (150 chapters, 69 plates): build a psalm-mode mapping table, share Doré + Schnorr catalog more aggressively across Psalms, and add a Psalms-specific opener bank (David scenes, Christ-as-Shepherd, illuminated Beatus initials).
- **Jeremiah / Ezekiel / Isaiah / minor prophets**: ingest the Doré "Bible Illustrations" plates that we already partially have, plus Schnorr's prophet woodcuts. There's untapped public-domain supply.
- **Proverbs / Ecclesiastes**: Bruegel's "Netherlandish Proverbs" and Caravaggio/Rembrandt vanitas pieces map cleanly to wisdom themes — add a `wisdom-pack.ts` catalog file.
- **1–2 Chronicles, Esther, Nehemiah, Ezra**: pull from rijksmuseum and met collections for Persian-court, temple-rebuilding, and Babylonian-exile imagery.
- **Pauline epistles**: a small `pauline-context.ts` catalog of Caravaggio's "Conversion of St Paul," Rembrandt's "Apostle Paul," map of Paul's missionary cities, and church-mosaic plates would cover all 13.

These are the only chapters where new ingestion (rather than re-wiring existing supply) is necessary. Estimated ~120 new plates total.

## 5. Phased rollout

**Phase 1 — Plumbing (one-pass automation, biggest win)**
For all 401 chapters that already have catalog supply, run a code-mod that emits suggested `kind: 'artwork'` blocks (opener + up to 2 inline) at structurally sensible insertion points (after the first scripture block; before the closing `carry` block). Author reviews + commits in batches of ~50 chapters. Ship as-is.

**Phase 2 — Topical mapping (semi-automated)**
Add a `sceneSlug` field to the chapter file format (alongside `estimatedMinutes`), defaulting to a computed value from chapter content. Build a fallback resolver in `getArtworksForChapter` that, when chapter-specific results are < 2, supplements with scene-matched plates from the same book → same testament → catalog. Caption appends `(themed)` so the user never thinks it's depicting the verse.

**Phase 3 — Catalog gap-fill**
Ingest the ~120 new plates identified above (psalms-pack, prophets-pack, wisdom-pack, pauline-context) into `src/data/art/`. Re-run Phase 1 + Phase 2 against the now-bigger catalog. Run a final audit; expect < 50 chapters still under 2 images, all in genealogy/legal stretches where Tier-C manuscript imagery is appropriate.

**Phase 4 — Verification**
Build a CI check that fails if any chapter resolves to fewer than 2 images at the Beginner level. This locks in coverage and surfaces regressions when artwork gets removed or reslugged.

## 6. Open questions for you

- **Caption convention for Tier B fallbacks** — is `(themed)` the wording you want, or something softer like `art for [scene]`?
- **Aggressiveness on Tier B** — do you want to allow cross-testament fallbacks (e.g., a Christ-as-Shepherd painting on a Psalms chapter), or keep fallbacks within the same testament?
- **Manuscript opener policy** — currently we push manuscripts behind paintings. For genealogy chapters with no narrative imagery, do you want manuscripts to be promotable to opener?
- **Generated art** — comfortable commissioning AI art (or hand-illustrated commissions) for the long tail of psalms / prophet chapters where public-domain supply is thinnest? That would close the gap permanently but is a separate budget line.

If those answers are settled, I can start Phase 1 immediately — the script to emit chapter-specific suggestions for the 401 already-supplied chapters is straightforward.
