# Agent Instructions

Project: **Learn of Christ** — free Bible study site at learnofchrist.com.
Next.js 16 App Router, Tailwind v4, Supabase.

## Before writing or editing any study guide content

**Read `docs/study-guide-authoring-rules.md` first.** Every chapter-by-
chapter study guide (Genesis 1 deep-dive in `src/components/GenesisOneStudy.tsx`,
all chapter entries under `src/data/chapters/*.ts`, any new rich commentary
component) must follow those rules.

The short version:

1. **Audience includes Latter-day Saints.** Write so an LDS theologian
   finds nothing to disagree with, and a Baptist pastor finds nothing to
   disagree with. When Protestant defaults conflict with LDS doctrine,
   stay with the biblical text and let the reader conclude. Vagueness is
   allowed when needed.
2. **Never surface the rules themselves in the study guide.** No mention
   of LDS, Protestant, denominations, neutrality, or "different traditions
   read this differently." Achieve neutrality through what you write,
   not by narrating the choice.

The full rule set and specific doctrinal flashpoints (Trinity, ex nihilo,
the Fall, theosis, continuing revelation, ministry to the dead, etc.) are
in `docs/study-guide-authoring-rules.md`.

## Development

- `npm run dev` — dev server on port 3000
- `npx next build` — production build
- Always commit and push. The user tests in prod.
- Bible verse data lives in Supabase; chapter study content lives in
  `src/data/chapters/*.ts` (aggregated by `src/data/chapter-content.ts`).
- The Denomination Lens (`src/lib/DenominationContext.tsx`) is where
  tradition-specific framing belongs — NOT the base commentary.
- Environment variables live in `.env.local`; see `.env.local.example`
  for the required + optional keys.

## Artwork moderation pipeline

All chapter artworks go through a moderation gate before they surface
to readers. Only `moderation_status = 'approved'` artworks render.

- Migration: `supabase/migrations/001_artwork_moderation.sql`
- Library: `src/lib/moderation/*` (OpenAI + AWS Rekognition providers,
  rules engine with high-risk-chapter overrides)
- Admin UI: `/admin/artwork-moderation` (paste `ADMIN_API_KEY` to act)
- Admin API: `/api/admin/moderate-artwork`, `/api/admin/artwork-review`
- User report: `/api/report-artwork` + `ReportArtworkButton`
- Bulk runner: `node scripts/moderate-all-artworks.mjs`

**Auto-approval is impossible by design.** The rules engine can only
move images to `pending`, `flagged`, or `rejected`. A human must click
Approve in the admin UI before anything reaches the feed.
