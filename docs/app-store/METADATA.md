# App Store Metadata — Learn of Christ

> Working draft for App Store Connect. Every field is checked
> against Apple's character limits. Replace anything in [BRACKETS]
> before submission.

## App name (30 character limit)

```
Learn of Christ
```

`Learn of Christ` — 15 chars. Fits.

## Subtitle (30 character limit)

Three options, ranked by what reads cleanest at iPhone search size:

1. `Read the Bible deeply` — 21 chars. Calm, confident, accurate.
2. `The whole Bible, with study` — 27 chars. More descriptive.
3. `Bible study, made for reading` — 30 chars. Audience-explicit.

**Recommended:** option 1.

## Promotional text (170 character limit, editable without resubmission)

```
The whole Bible with study guides for every chapter. Free, no account
required. Highlights, notes, and bookmarks live on your device until
you choose to sync.
```

Counts to 169 characters. Sits on top of the description and can be
swapped without a new build — good place for launch announcements,
seasonal updates, etc.

## Description (4000 character limit)

```
Learn of Christ is a Bible reading and study app built for people who
want to read deeply without being rushed.

WHAT YOU GET, FREE

• The whole Bible — Old and New Testament, every chapter.
• Study guides for every chapter, written for the long form.
• Highlights, notes, and bookmarks at the verse level.
• Per-verse share, copy, and reflection prompts.
• Light and dark themes, with a reading text size that respects you.
• A Library tab that surfaces what you've read, where you left off,
  and what you've saved.

NO ACCOUNT REQUIRED

You can use Learn of Christ for years without signing in. Read,
highlight, take notes, save chapters — all of it stays on your
device. We don't show ads. We don't sell your data. We don't have
chatbots reading your scripture.

When you're ready, sign in with Apple to back up your library and
sync across iPhone, iPad, and (soon) Mac. Your data is yours; we
treat it that way.

DESIGNED FOR DEEP READING

The reader is built around the way you actually study scripture:
short scripture blocks interleaved with commentary, Hebrew and Greek
word callouts where they matter, "Christ Connection" reflections
when relevant, and "Carry into your day" prompts to take with you.
Long-press any verse to highlight it, leave a note, share it, or
bookmark it.

EVERY CHAPTER, OFFLINE

The first time you open a book, the chapter content is downloaded
and cached. After that, you can read in airplane mode, on a walk in
a tunnel, on a flight — wherever. New study material is delivered as
it ships; the app checks for updates on launch.

PRIVACY, IN PLAIN ENGLISH

We don't track you. We don't include any AI features in the current
release. We don't show ads. The only data that ever leaves your
device is what you explicitly opt into syncing after you sign in.
Read the full privacy policy at learnofchrist.com/privacy.

WHO MADE THIS

Learn of Christ is a small project by a team of readers who wanted
the Bible app they couldn't find. Email us at [SUPPORT EMAIL] —
we read everything.
```

Counts to ~1900 characters. Plenty of room to expand later.

## Keywords (100 character limit, comma-separated, no spaces around commas)

```
bible,study,scripture,kjv,asv,christian,jesus,gospel,old,new,testament,reading,verse,prayer,faith
```

Counts to 99 chars. 15 keywords. Order matters in App Store search;
high-intent terms first.

> Tuning notes:
> - "bible" is the most-searched term in the category by ~10x.
> - Including specific translations ("kjv", "asv") catches users
>   searching for them.
> - "christian" / "jesus" / "gospel" are broad-intent.
> - "study" is the differentiator we lean on.
> - Avoid stuffing brand names ("youversion") — Apple rejects.

## What's New (4000 character limit, per release)

```
First release of Learn of Christ.

• Read every chapter of the Old and New Testament with built-in
  study guides.
• Highlight, take notes, and bookmark verses — all stored on your
  device by default.
• Continue Reading and Library tab surface where you left off and
  what you've saved.
• Light and dark themes, with a four-step reading text size.
• Sign-in is coming soon — for now your library lives privately on
  your device.

We read every email at [SUPPORT EMAIL]. Tell us what to build next.
```

## Support URL

```
https://learnofchrist.com/support
```

If `/support` doesn't exist yet, add a simple page before submission
or point to a contact email mailto: link.

## Marketing URL

```
https://learnofchrist.com
```

## Privacy Policy URL

```
https://learnofchrist.com/privacy
```

Required. Must be live before submission.

## Categories

- **Primary:** Reference
- **Secondary:** Lifestyle

> Reference is the right primary — that's where Bible apps cluster.
> Lifestyle as secondary catches the devotional-reading audience.
> Books was considered as primary but most Bible apps live under
> Reference and the discovery there is better.

## Age Rating

- **Apple Age Rating:** 4+
- **Content descriptors:** None
- **Reasoning:** No mature content, no in-app browsing, no UGC
  visible to other users, no ads. The Bible itself contains mature
  themes by some readings — Apple's category guidance for Bible apps
  is consistently 4+, and we mirror that.

## App icon

- 1024×1024 PNG, sRGB, no transparency, no rounded corners
  (Apple rounds at render time)
- Source file goes at `ios/branding/AppIcon-1024.png` once a
  designer or asset pack is chosen
- Asset catalog generates the rest of the sizes

## App preview videos / screenshots

- iPhone 6.7" (1290×2796): ≥3 screenshots required
- iPhone 6.5" (1242×2688): optional but recommended
- iPad 12.9" (2048×2732): required if shipping on iPad

Suggested screenshot lineup:

1. Reader showing Genesis 1 with a highlight + note dot
2. Library tab with Continue Reading + a few notes
3. Book grid (testament-grouped)
4. Settings with "Save your library" sign-in prompt
5. Long-press verse menu open

App preview video (15–30s): chapter open → highlight → note → share
flow, no narration, just the UI doing its thing.

## Pricing & availability

- **Price:** Free
- **Availability:** All countries / regions, except those required
  by export restrictions
- **In-app purchases:** None (in v1)

## Sign in with Apple

Required: yes. We use Sign in with Apple as a third-party login
option. Apple requires it whenever any other third-party login
(Google, Facebook, etc.) is offered. v1 only offers Apple, but
adding Google later is planned.

## Export compliance

- Uses standard HTTPS encryption (URLSession + TLS): YES
- Uses encryption beyond Apple's defaults: NO
- Eligible for self-classification under ATS / standard exemption.

## Submission checklist

Before pressing Submit:

- [ ] Privacy Policy live at the URL above
- [ ] Terms of Service live at the URL above
- [ ] Support page live (or mailto: link working)
- [ ] App icon at 1024×1024 in asset catalog
- [ ] At least 3 iPhone 6.7" screenshots uploaded
- [ ] iPad screenshots uploaded if iPad enabled
- [ ] Demo account NOT required (the app is open without sign-in)
- [ ] Test the app on TestFlight one full pass
- [ ] Privacy nutrition label completed (see PRIVACY_NUTRITION_LABEL.md)
- [ ] What's New text written for this version
- [ ] Build version + marketing version match what's in project.yml
