# Artist pages — in-depth SEO audit

Snapshot taken **2026-04-27** against `/art/artist/[slug]` after the
hero redesign + portrait backfill ship. The site has 1,624 artist pages
post-dedupe; 215 carry portraits; 31-ish currently meet the 200-character
`bio_long` threshold that flips them out of `noindex`.

This document is opinionated. Findings are ordered by impact. Each one
ends with the concrete code or content change that ships it.

## Headline finding

The page architecture is fine. The **content** is what's holding rankings
back. Right now every artist page reads like a Wikipedia summary trimmed
to ~3 paragraphs. There's nothing here that can't be found in 30 seconds
on Wikipedia or Britannica, so Google has no reason to surface our page
above either of those.

The audience for `learnofchrist.com` is overwhelmingly Christians who
just saw a painting and want to know **why this person painted Christ**.
That's the angle no general-interest source covers, and it's the
opportunity the current bios are squandering.

The fix isn't a redesign — it's a **content lens shift**: every artist
page leads with the artist's faith story (conversion, vocation, the
reason they took up sacred subjects), then their bio is layered in only
where it informs that story. We need a `faith_story` column populated
across the catalog and a real curated FAQ list per artist.

---

## 1. Content problems (highest impact on ranking)

### 1.1 The bio is generic

Every bio reads like a paraphrased Britannica entry: birth, training,
patrons, style, death. None of these answers the question that brought
the user to the page in the first place — *what did this person believe?*

Google's "helpful content" guidance ranks pages by *whether they
genuinely help the searcher more than the next-best result on the SERP*.
Right now we lose that test against Wikipedia. We win it the moment
every page leads with a paragraph the user couldn't get anywhere else.

**Action:** add a `faith_story` text column (migration 054). Backfill
across the catalog from `bio_long` using the LLM, prompted to extract
or synthesize faith-focused content: conversion narrative, religious
order membership, the relationship between the artist's faith and their
choice of biblical subjects, faith-promoting anecdotes from contemporary
biographers (Vasari, Malvasia, etc.). Render it in a dedicated
"Their faith" section above the bio.

Examples of the kind of content we're after:

- *Fra Angelico*: a Dominican friar who insisted on praying before
  applying paint and reportedly wept while painting the Crucifixion.
- *Rembrandt*: lived among the Amsterdam Sephardic community, modeled
  his patriarchs on actual rabbis, and after losing his wife and his
  fortune painted the Return of the Prodigal Son as a self-portrait of
  the kneeling son.
- *Caravaggio*: his violent life made the conversion paintings —
  Saint Paul on the road, Saint Matthew at the tax booth, Mary
  Magdalen in penitence — autobiographical.
- *Carl Bloch*: a Lutheran from a small Danish kingdom whose Christ
  cycle became the face most LDS readers picture when they read
  the Gospels.

**Action:** the auto-generated FAQ "How many works by X are at Learn
of Christ?" gets deleted entirely. That answer is in the rail card
two columns to the right of the FAQ; Google's "People Also Ask"
panels confirm nobody is searching that.

### 1.2 The FAQs are useless

Today's auto-generated FAQs are: who was X, when did X live, what
Bible scenes did X paint, how many works by X are at Learn of Christ.
**None** of those match what Google's "People Also Ask" actually
surfaces for these artists. Spot-checking PAA for Caravaggio,
Rembrandt, Fra Angelico, and Michelangelo gives questions like:

- "Was Caravaggio really a murderer?"
- "Did Rembrandt believe in God?"
- "Why did Fra Angelico become a friar?"
- "What was Michelangelo's religious belief?"
- "What did Caravaggio say about painting?"
- "Was Carl Bloch a Mormon?"  *(common misconception worth correcting)*
- "Why did Doré illustrate the Bible?"

These are the exact questions a Christian researcher arrives with.
Answering them matter-of-factly, citing the artist's own words or
contemporary biographers, gives Google the kind of Q→A snippet it
ranks for and gives the user a reason to read.

**Action:** new `faqs jsonb` column (migration 054), array of
`{question, answer}`. Backfilled per-artist by the LLM with explicit
instructions to pull the question phrasing from typical "People Also
Ask" patterns — never the auto-generated patterns we have today.
Render as accordion-style `<details>` with smooth open animation.
FAQPage JSON-LD switches to feed from the curated list.

### 1.3 Headline + meta description recycle the bio's first 155 chars

The page title format `{Name}, {lifespan} — Bible Paintings & Notable
Works | Learn of Christ` is fine. The meta description today just
slices the first 155 chars of `bio_long`, which usually starts with
"X was an Italian painter…" — a generic opening Google will drop in
favor of its own snippet.

**Action:** drive the meta description from `faith_story` when
present, falling back to bio_long. A description like "Why Fra Angelico
became a friar — the Dominican painter Pope John Paul II named the
Patron of Catholic Artists" is the kind of click-magnet line that
holds in the SERP.

### 1.4 Indexability gate is set too high

The `noindex` flag flips off when `bio_long` clears 200 chars. That's
about 31 of 1,624 pages. Every other artist page is invisible to
Google. Even minor printmakers can have a few faith-tied paragraphs
worth indexing once we backfill `faith_story`.

**Action:** lower the threshold to "any one of `bio_long >= 200` OR
`faith_story >= 120` OR `notable_works.length >= 1`". The hub pages
become indexable as soon as either narrative or curated artwork
content lands.

---

## 2. Performance (Core Web Vitals)

### 2.1 LCP — the hero portrait is loaded as a plain `<img>`

The hero portrait is rendered with `<img loading="eager">` from a
Wikimedia Commons URL. It's the LCP element on every artist page that
has one. A few problems:

- No `next/image` optimization — we serve the full-resolution image
  Wikimedia ships, no AVIF/WebP, no responsive `srcset`.
- No `width`/`height` so the browser can't reserve space, leading to
  CLS until layout completes.
- No `priority` hint — Next would auto-promote LCP candidates if we
  used `<Image>`.
- No `<link rel="preconnect">` to `commons.wikimedia.org` /
  `upload.wikimedia.org` in the document head.

**Action:** swap the portrait `<img>` for `<Image>` from `next/image`,
fixed `104x104` (`84x84` on mobile), `priority`. Same for the hero
artwork plate (which is also LCP-adjacent). Add preconnect hints to
the layout for `upload.wikimedia.org` and `commons.wikimedia.org`
so the connection is warm before the image request fires.

### 2.2 CLS — every `<img>` lacks intrinsic dimensions

The notable-works grid, all-works grid, and notable-work hero images
all use plain `<img>` without `width` or `height`. The `aspect-ratio`
CSS keeps the visual stable, but Lighthouse still flags it.

**Action:** convert every artwork `<img>` to `<Image fill>` inside an
`aspect-ratio`-locked wrapper, OR pass explicit `width`/`height`.

### 2.3 INP — the all-works grid is server-rendered fine but the
gallery cards each ship event handlers

Less of an issue for pure-HTML artist pages. Skipping for now.

### 2.4 Bytes shipped — the page is ~38 KB of HTML before content

Most of that is JSON-LD plus auto-generated FAQ markup. The rail card,
hero, and bio sections are tight. Once we move the bio text out into
its own narrow column the structural HTML drops a bit further.

**Action:** none required; this is fine.

---

## 3. Structured data

The page already emits `Person`, `BreadcrumbList`, and `FAQPage`
JSON-LD. The Person object includes `birthDate`, `deathDate`,
`nationality`, `image`, and `sameAs`. That's strong coverage.

Two improvements:

1. **Person → `knowsAbout`** with the Bible book names from the
   artworks → tells Google this artist's expertise overlaps with the
   biblical subject area, helps connect the artist node to chapter
   pages.
2. **`VisualArtwork` schema** for each entry in `notable_works` and
   the artworks grid. Today only the cards link to artwork pages; the
   artist hub itself doesn't emit `VisualArtwork` LD for those works.
   Adding it means rich-result eligibility for the artwork thumbnails
   right from the artist hub.

**Action:** extend the JSON-LD generator to emit a `knowsAbout` array
and a sibling `ItemList` of `VisualArtwork` objects for the notable
works.

---

## 4. Internal linking

Today the artist page links out to artwork pages and chapter pages
(via the "Bible scenes" list). What's missing is **lateral artist
linking**.

When a reader is on `/art/artist/caravaggio`, they probably also want
to see his contemporary Caravaggisti — Artemisia Gentileschi, Orazio
Gentileschi, ter Brugghen, Valentin de Boulogne. A "Painters in this
tradition" rail at the bottom of each page, fed by a small
`related_artists` jsonb on each row (or auto-derived from
shared-chapter overlap), tightens the topical cluster and keeps users
on-site.

**Action:** add a `related_artists slug[]` column or a runtime query
that finds the 4 artists with the highest overlap of Bible chapters
painted, render at the bottom of the page above Further Reading.

---

## 5. Title tags and H1

Both fine. `<h1>` matches the artist name. Title tag has the lifespan.
No keyword stuffing. Move along.

---

## 6. Duplicate / thin content

Already handled in the dedupe pass — 21 dupe rows merged. Going
forward, ingestion needs to dedupe by `wikidata_id` BEFORE inserting
to prevent the next round of `botticelli` vs `sandro-botticelli` vs
`botticelli-(...)` from re-appearing.

**Action:** add a uniqueness constraint on `wikidata_id WHERE
wikidata_id IS NOT NULL` so future ingest scripts can't insert a
duplicate row. Already strongly implied by the data; the constraint
just makes it enforced.

---

## 7. Mobile UX

The hero portrait + name flexbox row works at 380 px because of the
`flex-wrap: wrap` rule. The metabar chips wrap cleanly. The two-column
body collapses to single-column at 960 px breakpoint, which is
correct.

One nit: the rail card is full-width below the bio on mobile, which
visually competes with the Further Reading chips. A `<details>` on
mobile would reduce that.

**Action:** Optional. Skip in this pass.

---

## 8. Image accessibility

Every `<img>` has an `alt`. Every link has an `aria-label` where
needed. WCAG-AA contrast on the meta chips, drop-cap, source
chips — all pass.

**Action:** none.

---

## 9. Sitemap + crawl

Confirm `/art/artist/[slug]` URLs are in the dynamic sitemap and that
they emit only after `noindex` flips off. Today the sitemap reads from
`getAllArtistSlugs()` which returns artists with at least one approved
artwork, regardless of bio status. After we lower the indexability
threshold (1.4), every entry in that list should be indexable.

**Action:** double-check the sitemap loop doesn't over-include
noindex'd slugs.

---

# Prioritized action list (what we ship in this pass)

1. **Schema migration 054** — `faith_story text`, `faqs jsonb` columns.
2. **Page template** — render "Their faith" section above the bio,
   accordion FAQ component, FAQPage JSON-LD swapped to curated.
3. **Image perf** — `next/image` for hero portrait and hero artwork
   with `priority`; preconnect hints in `<head>`; `next/image fill`
   for notable-works thumbnails.
4. **Indexability threshold lowered** so bio_long > 200 OR
   faith_story > 120 OR notable_works > 0 all flip the page in.
5. **Backfill script** that calls OpenAI per artist with the existing
   bio_long + Wikipedia URL and asks for:
   - a 250-400 word faith-focused narrative
   - 4 curated FAQs phrased exactly like Google "People Also Ask"
6. **Constraint** on `wikidata_id` uniqueness to prevent regression of
   the dedupe work.
7. **Knowledge-graph bumps** — `knowsAbout` array + `VisualArtwork`
   ItemList in JSON-LD.

The rewrites of the bios themselves to faith-lens prose come later as
content edits — the schema and UI ship first so editors and the LLM
backfill can pour content in over time.
