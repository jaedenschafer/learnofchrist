# Study-Guide Rollout Plan

How we get every chapter of the Bible to the same depth and structure as
Genesis 1.

The infrastructure is already in place: every chapter renders through
`RichStudyGuide`, sourced from a typed `RichChapterContent` data file.
Genesis 1 is hand-authored; everything else auto-ports the legacy data
into the same visual idiom. This document is the plan for upgrading the
rest from "auto-ported lite" to "hand-authored Genesis 1 quality."

---

## 1. The Genesis 1 template — everything that must appear in every chapter

This is the unit checklist for "this chapter is done." Sections in the
same order they appear on `/study/genesis/1`.

### Page chrome (already universal)

These already render on every chapter via the page route — no per-chapter
work needed.

- StudyTopBar (book, chapter, testament label, share dropdown)
- StudyFilters (translation switcher, comfort settings)
- HighlightController (selection-based highlighter + journal popup)
- ShareableMarks (per-paragraph share buttons)
- ReadingComfortEffects, BlockHideMenus
- ChapterProgress (read-tracker chip)
- StudyAudioPlayer (TTS)
- ChapterArtStrip (carousel below)
- ChapterNav (prev / next chapter)

### Page body (per-chapter authoring)

Each numbered item is a slot in `RichChapterContent`. A chapter is "done"
when every slot is hand-authored — not auto-ported.

1. **One or more intro paragraphs** (`intros: string[]`)
   - 1–3 paragraphs. Plain prose. Sets the chapter's stakes, names what
     ancient hearers would have heard, names what a modern reader sees.
   - Genesis 1 has 2: a structural overview and a polemical / Christ
     framing.

2. **Tap-hint** (`tapHint?`)
   - Default: "Tap any highlighted phrase to jump to the commentary that
     unpacks it." Override only when a chapter has no scripture-highlight
     marks.

3. **KJV note card** (`showKjvNote?`)
   - Dismissible. Appears the first time on the site, persists across
     pages. On by default.

4. **Opener artwork** (`opener`)
   - One feature image at the very top, before the first section. Matched
     against the chapter's artworks via title/artist regex. Falls back
     gracefully when no match.

5. **Sections** (`sections: RichSection[]`)
   - Each section is a span of verses in the chapter. The natural unit is
     a narrative beat (Genesis 1 uses Days 1–7 + the bookends; a parable
     chapter splits parable-by-parable; a sermon chapter splits by
     argument).
   - Each section needs:
     - **Reference line** (`ref`) e.g. "Genesis 1:1–2", "Creation Day 1 ·
       Genesis 1:3–5", or "Sermon on the Mount, Part 3 · Matthew 5:33–48".
     - **Title** (`title`) — short, evocative.
   - Inside each section, at least one of each:
     - **Scripture block** with KJV-anchored highlight marks in 3 tones
       (`hp`, `hy`, `hg`). Marks link to commentary anchors below.
     - **Commentary paragraph(s)** — at least one per scripture block,
       expanding what's marked. Each is anchored by `id` so marks can
       link to it.
     - **At least one of**: Hebrew/Greek callout (`hebrew` or `greek`),
       Christ Connection block (`christ`), Carry block (`carry`),
       Reflection prompt (`reflection`), or Inline artwork (`artwork`).
   - Genesis 1 averages: ~2 scripture blocks per section, 2–4 commentary
     paragraphs, 1 Hebrew callout per 3 sections, 1 Christ Connection per
     2 sections, 1 Carry per 2 sections, 1 Reflection per section, 1
     inline artwork per 3 sections.

6. **Bottom share card** (`bottomShare`)
   - One-sentence quote, snippet, ref. Renders the "Share Genesis 1" pill.

### Hard content rules (per `docs/study-guide-authoring-rules.md`)

These are non-negotiable on every chapter.

- **LDS + Baptist neutrality** — write so a faithful Latter-day Saint and
  a faithful Protestant find nothing to disagree with. Use vagueness over
  doctrinal commitment when needed.
- **Don't surface the rules** — never mention LDS, Protestant,
  denominations, or "different traditions read this differently."
- **No "the Trinity"** — reference Father, Son, and Spirit individually;
  don't name the relationship as Trinity in the study text. (Per memory.)
- All KJV citations use straight English; ancient-language callouts spell
  the script in Hebrew/Greek with English transliteration + meaning.

---

## 2. Scope and prioritization

### Total surface

- Protestant canon: **1,189 chapters** (929 OT + 260 NT)
- Apocrypha: **+186 chapters** (Tobit, Judith, 1–2 Macc, Wisdom, Sirach,
  Baruch, additions, 1–2 Esdras, Prayer of Manasseh)
- Realistic surface for the first pass: **the protestant canon, 1,189
  chapters**. Apocrypha is a follow-on phase if traffic warrants.

### Priority tiers (write in this order)

The plan is to write chapters in the order readers actually arrive at
them, weighted by both Bible-reading-plan popularity and the SEO
content-gap analysis already in `LearnOfChrist-Content-SEO-Plan.md`.

**Tier 0 — already done**
- Genesis 1.

**Tier 1 — flagship chapters (≈40 chapters, ~6 weeks)**
The pages people land on first. Doing these well is what turns "the site
has commentary on Genesis 1" into "the site has commentary on every
landmark passage."
- Genesis 1, 2, 3, 12, 22 · Exodus 3, 14, 20 · Joshua 1 · Psalms 1, 23,
  51, 91, 100, 119 · Proverbs 3, 31 · Isaiah 6, 9, 40, 53, 55 · Jeremiah
  29 · Ezekiel 37 · Daniel 3
- Matthew 5, 6, 7 · John 1, 3, 14 · Romans 8, 12 · 1 Corinthians 13 ·
  Ephesians 6 · Philippians 4 · Hebrews 11 · James 1 · 1 John 4 ·
  Revelation 21–22

**Tier 2 — full Pentateuch + Gospels + Epistles (≈420 chapters,
4–6 months)**
Genesis 4–50, Exodus 1–40, all four Gospels, Acts, Romans–Hebrews. This
is what most reading plans cycle through. After Tier 2 ships, the site
has hand-authored coverage of the chapters >70% of weekly Bible readers
touch.

**Tier 3 — historical books + Psalms + wisdom (≈400 chapters,
6–9 months)**
Joshua–Esther + all 150 Psalms + Job, Proverbs, Ecclesiastes, Song.

**Tier 4 — prophets and the rest (≈330 chapters, 6–9 months)**
Isaiah–Malachi + the few NT chapters not in Tier 2 (the smaller epistles,
Revelation 1–20).

**Tier 5 — apocrypha** (optional, audience-driven).

### Sequencing inside a tier

Within a tier, do **whole books at a time** rather than picking landmark
chapters from many books. Reason: voice, recurring metaphors, and
cross-references are easier to keep coherent when you're inside one
book's world for a few days.

---

## 3. Per-chapter authoring workflow

Roughly 4–8 hours per chapter when AI-assisted; 8–16 hours when fully
hand-written.

### Step 1 — Source pass (~30 min)
Read the chapter cold in KJV + one modern translation (ESV or NIV).
Note structure (where the natural section breaks fall), recurring words,
proper nouns, ancient-language interest points.

### Step 2 — Sectioning (~15 min)
Decide the 4–10 sections this chapter splits into. Capture as a bulleted
outline:
- Section ref + title (e.g. "Genesis 22:1–8 · Take thy son").
- Verses covered.
- One-sentence answer to "what does this section want a reader to feel?"

### Step 3 — Highlight planning (~30 min)
For each section, mark the 2–6 phrases worth highlighting. Decide which
get a `hp` (Christ Connection anchor), `hy` (Hebrew/Greek callout
anchor), or `hg` (thematic commentary anchor).

### Step 4 — Original-language pass (~30 min)
For each `hy` mark, write the Hebrew/Greek callout: title (English gloss
+ "—" + the word's translation in scare quotes), Hebrew/Greek script,
transliteration with bold root, 1–2-sentence meaning.
Use BibleHub / Strong's / Mounce as quick references; verify the script
in a known-good source.

### Step 5 — Commentary writing (~2–4 hours)
Write the prose. Style guide:
- Voice: warm, intelligent, never preachy. Like a friend who has
  obviously studied this their whole life and is happy you asked.
- Sentence length: vary. Short sentences for emphasis ("God is light.").
  Longer ones for connecting tissue.
- Scripture quotations always in straight quotes with verse refs in
  parens.
- Commentary blocks usually 1–3 sentences each, never more than 5.

### Step 6 — Christ Connection writing (~30 min)
For each `hp` mark, write the Christ Connection block. Format: "Christ
Connection — [4–6 word title]." Then 3–5 sentences naming the
foreshadow / type / fulfillment / NT echo. Cite the NT verse in parens.

### Step 7 — Carry blocks (~30 min)
Genesis 1 has roughly one Carry block per section. Format: 2–4
sentences, second-person voice, lands the section's truth in the
reader's actual day. Specific over abstract.

### Step 8 — Reflection prompts (~15 min)
One short prompt per major section. 1–2 sentences, ends with a question.
Always actionable — the reader can do something about it before they
close the tab.

### Step 9 — Inline artwork hooks (~15 min)
2–4 placements. Match by title regex + artist regex. Caption is the verse
range + section title. (Run the artwork query against the chapter's
existing artworks first to confirm matches exist.)

### Step 10 — Bottom share copy (~10 min)
One-sentence quote of the chapter's punchline. Snippet. Ref string.

### Step 11 — Save + register (~5 min)
- Write `src/data/study-chapters/<book-slug>-<chapter>.ts`.
- Add an entry to `RICH_CHAPTERS` in
  `src/data/study-chapters/index.ts`.
- Spot-check `/study/<book>/<chapter>` locally.

### Step 12 — Self-review (~30 min)
Run through the quality checklist (§ 4) before committing.

---

## 4. Quality checklist (run before each commit)

### Structure
- [ ] At least 1 intro paragraph.
- [ ] Sections cover every verse in the chapter (no gaps).
- [ ] Every scripture block has at least one commentary paragraph.
- [ ] Every commentary paragraph that's an anchor target has a stable
      `id`.
- [ ] Every highlight mark resolves to an existing `id`.
- [ ] At least one Christ Connection block per chapter.
- [ ] At least one Hebrew or Greek callout per chapter.
- [ ] At least one Carry block per chapter.
- [ ] At least one Reflection prompt per chapter.
- [ ] Bottom share card present.

### Voice
- [ ] No mention of "Trinity," "Protestant," "Catholic," "LDS,"
      "Mormon," or "different traditions."
- [ ] No formal-sounding "we" or "let us."
- [ ] No clichés ("rich tapestry," "deep dive," "journey of faith").
- [ ] Reads aloud well — try the first paragraph aloud.

### Accuracy
- [ ] Every Hebrew/Greek script verified in a second source.
- [ ] Every NT verse citation verified in KJV.
- [ ] Every claim about ancient context can be backed by a standard
      reference (Bauckham, Wright, Walton, Heiser, BibleHub for quick
      etymology).

### Tech
- [ ] `npx tsc --noEmit` clean.
- [ ] Page renders without React warnings.
- [ ] All inline artwork matches resolve to a real artwork in the
      chapter's `chapterArtworks`.

---

## 5. Authoring approach: AI-assisted, human-reviewed

Doing this fully by hand is ~7,000 hours of focused writing. With AI
assistance + a tight human review pass, ~2,000 hours. Plan:

### Drafting
For each chapter, an authoring run through Claude:
- Input: the chapter text (KJV), the existing legacy `ChapterContent`
  for context, the authoring rules, the Genesis 1 file as a style
  reference, this template doc.
- Output: a complete `<book-slug>-<chapter>.ts` file.

A skill at `/.claude/skills/rich-study-chapter` captures this — slot for
slot, the same prompt, every chapter.

### Review pass
Every chapter goes through human review before commit:
- Sentence-level edit (15–30 min per chapter).
- Doctrinal sanity check against the rules doc.
- Verify Hebrew/Greek script + translit.

### Audit
Every 50 chapters, run a self-audit pass: pick 3 random committed
chapters, re-run the review pass, calibrate the drafting prompt if
quality is drifting.

---

## 6. Phasing and timeline (realistic)

Assumes one author + AI-assisted drafting, ~6 hours/day, 5 days/week.

| Phase | Work | Chapters | Calendar |
|---|---|---|---|
| 0 | Tooling: authoring skill, review checklist, batch QA script | — | 1 week |
| 1 | Tier 1 flagship chapters | ~40 | 5 weeks |
| 2 | Tier 2 — Pentateuch + Gospels + Epistles | ~420 | 5 months |
| 3 | Tier 3 — historical books + Psalms + wisdom | ~400 | 5 months |
| 4 | Tier 4 — prophets + remaining NT | ~330 | 4 months |
| 5 | Apocrypha (optional) | ~186 | 2 months |

**Realistic earliest "every protocanon chapter is hand-authored"
date: ~14 months.** Earlier if more authors are on it.

---

## 7. Tooling work that will pay back the time

Build these once before tier 1, save weeks across the rollout.

### A. The authoring skill
`.claude/skills/rich-study-chapter` — single-shot prompt that takes
`book/chapter` and produces a complete `<book>-<chapter>.ts` file in the
template, ready for human review. Includes:
- The Genesis 1 file inline as a style reference.
- The authoring rules inline.
- The chapter text fetched from Supabase + a known modern translation.
- The legacy `ChapterContent` (if any) as a starting outline.
- A pinned voice sample ("here is the prose register we are matching").

### B. A batch validator
`scripts/validate-rich-chapters.mjs` — for every registered rich
chapter, check:
- Every `mark.jumpTo` resolves to an `id` in the same chapter.
- Every `artwork.matchTitle` regex matches at least one approved artwork
  for that chapter (warn if not).
- All required slots are populated (intros, ≥1 Christ, ≥1 Hebrew/Greek,
  ≥1 Carry, ≥1 Reflection, bottomShare).
- Hebrew/Greek script renders correctly (UTF-8 sanity check).

Run in CI; fail the build on any miss.

### C. A diff-against-Genesis-1 checker
`scripts/style-check-chapter.mjs <book> <chapter>` — pulls a draft
chapter and runs lightweight heuristics:
- Avg sentence length within ±20% of Genesis 1.
- Forbidden-word list check (Trinity, Protestant, etc.).
- Cliché list check.
- Quote density (commentary should not be > 30% scripture quotes).

### D. A nightly preview build
After every commit that touches a study chapter, post a Vercel preview
URL into Slack so every reviewer can read the page on a real device
before merging.

---

## 8. Decisions to make before tier 1 starts

These three answers shape the entire 14 months — decide them up front.

**Q1. Voice consistency: one author, or many?**
- One author is the safest path to a coherent voice across 1,189
  chapters but caps throughput at ~3 chapters/week.
- Many authors lets us parallelize, but requires a tight style guide
  and a single editor doing voice harmonization on every commit.

**Q2. AI-drafting: yes, no, or how much?**
- Pure AI drafts (with human edit pass) → ~14 months.
- Pure hand-written → ~3–4 years.
- Hybrid (AI drafts the easier sections, humans write the flagship
  ones) → middle ground.

**Q3. Rollout cadence: ship tier-by-tier, or chapter-by-chapter?**
- Tier-by-tier (write Tier 1 entirely, then announce, then Tier 2):
  bigger marketing moments, riskier (long stretches with auto-port
  fallbacks visible).
- Chapter-by-chapter (commit and ship as written): always-improving
  site, no big launch moments.

---

## 9. Definition of "we are done"

The site is "fully on the new template" when:
- Every protocanon chapter (1,189) has a hand-authored
  `RichChapterContent` registered in `RICH_CHAPTERS`.
- Every registered chapter passes the §4 quality checklist.
- The CI validator (§7B) passes for every chapter.
- The auto-port fallback in `index.ts` is removed (the empty-state
  fallback stays for apocrypha).
- `GenesisOneStudy.tsx` and `StudyGuide.tsx` are deleted.

Until then the auto-port keeps the visual idiom consistent on every
chapter, even when the depth isn't there yet.

---

## 10. The very next steps

1. Decide §8 questions (voice / AI / cadence).
2. Build the authoring skill (§7A).
3. Build the validator (§7B).
4. Pick the Tier-1 batch order. Start with Genesis 2 (so the first two
   chapters of the Bible are both authored) and Psalm 23 (the most-read
   single chapter on the internet) to validate the skill on two very
   different genres.
5. Author Genesis 2. Review. Calibrate the skill if needed. Author
   Psalm 23. Review. Calibrate again. Then proceed.
