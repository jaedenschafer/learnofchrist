/**
 * Auto-seeded cross-reference fallback pool.
 *
 * The canonical place for cross-refs is the per-section `crossRefs` field on
 * each chapter's data file (see types.ts → RichSection.crossRefs). When a
 * chapter author hasn't curated refs for a section, the renderer falls back
 * to this file, keyed by `${bookSlug}/${chapter}`.
 *
 * Refs are seeded from the public-domain Treasury of Scripture Knowledge
 * tradition — connections that scholars have surfaced for centuries. The
 * goal is breadth: every chapter gets at least three echoes the reader can
 * follow. Authors override with curated refs whenever a sharper connection
 * is available.
 *
 * Each entry is a small array of `CrossRef` objects (3–5 per chapter).
 * Adding a new chapter: drop in `'<book>/<chapter>': [ ... ]`. The renderer
 * picks them up automatically — no other wiring required.
 */

import type { CrossRef } from './types';

export const FALLBACK_CROSS_REFS: Record<string, CrossRef[]> = {
  /* ─── Genesis ──────────────────────────────────────────────────────── */
  'genesis/1': [
    {
      ref: 'John 1:1–3',
      snippet: 'In the beginning was the Word… all things were made by him; and without him was not any thing made that was made.',
      href: '/study/john/1',
      note: 'John deliberately echoes Genesis 1:1 — the Word who speaks creation into being is Christ.',
    },
    {
      ref: 'Hebrews 11:3',
      snippet: 'Through faith we understand that the worlds were framed by the word of God.',
      href: '/study/hebrews/11',
      note: 'Creation by speech, received by faith.',
    },
    {
      ref: 'Colossians 1:16',
      snippet: 'For by him were all things created, that are in heaven, and that are in earth.',
      href: '/study/colossians/1',
      note: 'Paul names the Christ behind every "and God said."',
    },
    {
      ref: 'Psalm 33:6, 9',
      snippet: 'By the word of the Lord were the heavens made… he spake, and it was done.',
      href: '/study/psalms/33',
      note: 'The Psalmist celebrates the same pattern — divine speech, instant creation.',
    },
    {
      ref: 'Revelation 21:1',
      snippet: 'I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.',
      href: '/study/revelation/21',
      note: 'The Bible bookends — first creation; new creation.',
    },
  ],

  'genesis/3': [
    {
      ref: 'Romans 5:12, 19',
      snippet: 'By one man sin entered into the world, and death by sin… so death passed upon all men.',
      href: '/study/romans/5',
      note: 'Paul reads Genesis 3 as the entry of death into every human story.',
    },
    {
      ref: '1 Corinthians 15:21–22',
      snippet: 'For as in Adam all die, even so in Christ shall all be made alive.',
      href: '/study/1-corinthians/15',
      note: 'Adam’s fall undone in Christ’s rising.',
    },
    {
      ref: 'Revelation 12:9',
      snippet: 'That old serpent, called the Devil, and Satan, which deceiveth the whole world.',
      href: '/study/revelation/12',
      note: 'The serpent of the garden named at the canon’s end.',
    },
    {
      ref: 'Galatians 4:4',
      snippet: 'When the fulness of the time was come, God sent forth his Son, made of a woman.',
      href: '/study/galatians/4',
      note: 'The seed of the woman promised in Genesis 3:15 arrives.',
    },
  ],

  /* ─── Exodus ───────────────────────────────────────────────────────── */
  'exodus/12': [
    {
      ref: 'John 1:29',
      snippet: 'Behold the Lamb of God, which taketh away the sin of the world.',
      href: '/study/john/1',
      note: 'John the Baptist names Jesus the true Passover lamb.',
    },
    {
      ref: '1 Corinthians 5:7',
      snippet: 'Christ our passover is sacrificed for us.',
      href: '/study/1-corinthians/5',
      note: 'Paul makes the connection direct — the cross is the new Passover.',
    },
    {
      ref: '1 Peter 1:18–19',
      snippet: 'Ye were redeemed… with the precious blood of Christ, as of a lamb without blemish.',
      href: '/study/1-peter/1',
      note: 'Peter recasts the unblemished lamb of Exodus 12 as Christ.',
    },
    {
      ref: 'Revelation 5:6, 12',
      snippet: 'A Lamb as it had been slain… Worthy is the Lamb that was slain.',
      href: '/study/revelation/5',
      note: 'The slain lamb takes the throne.',
    },
  ],

  'exodus/14': [
    {
      ref: '1 Corinthians 10:1–2',
      snippet: 'Our fathers… were all baptized unto Moses in the cloud and in the sea.',
      href: '/study/1-corinthians/10',
      note: 'The Red Sea crossing read as a foreshadow of baptism into Christ.',
    },
    {
      ref: 'Hebrews 11:29',
      snippet: 'By faith they passed through the Red sea as by dry land.',
      href: '/study/hebrews/11',
      note: 'Israel’s deliverance counted as an act of faith.',
    },
    {
      ref: 'Isaiah 43:16',
      snippet: 'Thus saith the Lord, which maketh a way in the sea, and a path in the mighty waters.',
      href: '/study/isaiah/43',
      note: 'Isaiah remembers the parted sea as God’s signature.',
    },
  ],

  /* ─── 1 Samuel ─────────────────────────────────────────────────────── */
  '1-samuel/16': [
    {
      ref: '1 Corinthians 1:27–28',
      snippet: 'God hath chosen the foolish things of the world to confound the wise… and base things of the world.',
      href: '/study/1-corinthians/1',
      note: 'Paul’s rule: God still picks the youngest, the overlooked, the un-tall.',
    },
    {
      ref: 'Acts 13:22',
      snippet: 'I have found David… a man after mine own heart, which shall fulfil all my will.',
      href: '/study/acts/13',
      note: 'Paul preaches the same line in Antioch a thousand years later.',
    },
    {
      ref: '2 Corinthians 4:7',
      snippet: 'We have this treasure in earthen vessels, that the excellency of the power may be of God.',
      href: '/study/2-corinthians/4',
      note: 'The shepherd boy is the canon’s clearest "earthen vessel."',
    },
    {
      ref: 'John 7:42',
      snippet: 'That Christ cometh of the seed of David, and out of the town of Bethlehem, where David was?',
      href: '/study/john/7',
      note: 'Bethlehem appears here for the first time as the city of the king.',
    },
  ],

  '1-samuel/17': [
    {
      ref: 'Psalm 20:7',
      snippet: 'Some trust in chariots, and some in horses: but we will remember the name of the Lord our God.',
      href: '/study/psalms/20',
      note: 'David’s armor refusal becomes Israel’s confession.',
    },
    {
      ref: '2 Corinthians 10:3–4',
      snippet: 'The weapons of our warfare are not carnal, but mighty through God.',
      href: '/study/2-corinthians/10',
      note: 'Paul’s "weapons of our warfare" line is the brook-and-stone principle.',
    },
    {
      ref: 'Ephesians 6:10–17',
      snippet: 'Be strong in the Lord… put on the whole armour of God.',
      href: '/study/ephesians/6',
      note: 'The armor David refuses, Paul retells as something Christ supplies from inside.',
    },
    {
      ref: 'Hebrews 11:32–34',
      snippet: 'David… who through faith… waxed valiant in fight, turned to flight the armies of the aliens.',
      href: '/study/hebrews/11',
      note: 'The brook-and-stone victory canonized as faith.',
    },
  ],

  /* ─── Psalms ──────────────────────────────────────────────────────── */
  'psalms/23': [
    {
      ref: 'John 10:11',
      snippet: 'I am the good shepherd: the good shepherd giveth his life for the sheep.',
      href: '/study/john/10',
      note: 'Jesus claims Psalm 23 by name.',
    },
    {
      ref: 'Hebrews 13:20',
      snippet: 'Our Lord Jesus, that great shepherd of the sheep.',
      href: '/study/hebrews/13',
      note: 'The shepherd of the psalm is the risen Christ.',
    },
    {
      ref: 'Revelation 7:17',
      snippet: 'The Lamb… shall feed them, and shall lead them unto living fountains of waters; and God shall wipe away all tears.',
      href: '/study/revelation/7',
      note: 'Psalm 23 in its final form — the green pastures of the new creation.',
    },
  ],

  /* ─── Acts ─────────────────────────────────────────────────────────── */
  'acts/9': [
    {
      ref: '1 Timothy 1:13–16',
      snippet: 'I was before a blasphemer, and a persecutor… that in me first Jesus Christ might shew forth all longsuffering.',
      href: '/study/1-timothy/1',
      note: 'Paul tells his Damascus story as the showcase of mercy.',
    },
    {
      ref: 'Galatians 1:13–16',
      snippet: 'It pleased God… to reveal his Son in me.',
      href: '/study/galatians/1',
      note: 'Paul’s own account of the Damascus road, decades later.',
    },
    {
      ref: 'Philippians 3:6–9',
      snippet: 'Touching the righteousness which is in the law, blameless. But what things were gain to me, those I counted loss for Christ.',
      href: '/study/philippians/3',
      note: 'The career he abandoned on the road.',
    },
  ],

  'acts/16': [
    {
      ref: 'Philippians 1:3–6',
      snippet: 'I thank my God upon every remembrance of you… being confident… that he which hath begun a good work in you will perform it.',
      href: '/study/philippians/1',
      note: 'Paul’s letter back to the Philippian church planted in this very chapter.',
    },
    {
      ref: 'Philippians 4:11–13',
      snippet: 'I have learned, in whatsoever state I am, therewith to be content… I can do all things through Christ.',
      href: '/study/philippians/4',
      note: 'The midnight-hymn theology, written from another prison years later.',
    },
    {
      ref: 'Romans 1:16',
      snippet: 'I am not ashamed of the gospel of Christ: for it is the power of God unto salvation.',
      href: '/study/romans/1',
      note: 'The gospel Paul preached at the riverside, named.',
    },
    {
      ref: 'Galatians 3:28',
      snippet: 'There is neither Jew nor Greek… bond nor free… male nor female: for ye are all one in Christ Jesus.',
      href: '/study/galatians/3',
      note: 'Lydia, the slave girl, the jailer — all three converted in one chapter.',
    },
  ],

  /* ─── John ─────────────────────────────────────────────────────────── */
  'john/1': [
    {
      ref: 'Genesis 1:1, 3',
      snippet: 'In the beginning God created… And God said, Let there be light.',
      href: '/study/genesis/1',
      note: 'The opening John is rewriting.',
    },
    {
      ref: 'Colossians 1:15–17',
      snippet: 'Who is the image of the invisible God… by him were all things created.',
      href: '/study/colossians/1',
      note: 'Paul’s parallel hymn to the Word.',
    },
    {
      ref: 'Hebrews 1:1–3',
      snippet: 'God… hath in these last days spoken unto us by his Son… by whom also he made the worlds.',
      href: '/study/hebrews/1',
      note: 'Same theology, opening of Hebrews.',
    },
    {
      ref: '1 John 1:1–3',
      snippet: 'That which was from the beginning, which we have heard, which we have seen with our eyes… of the Word of life.',
      href: '/study/1-john/1',
      note: 'John’s own letter opens by echoing his own gospel.',
    },
  ],

  /* ─── Romans ───────────────────────────────────────────────────────── */
  'romans/8': [
    {
      ref: 'Galatians 4:6',
      snippet: 'God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.',
      href: '/study/galatians/4',
      note: 'The Abba prayer of Romans 8 echoed in Galatians.',
    },
    {
      ref: '2 Corinthians 4:17–18',
      snippet: 'Our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.',
      href: '/study/2-corinthians/4',
      note: 'The "sufferings of this present time" calculus, restated.',
    },
    {
      ref: 'John 10:28–29',
      snippet: 'Neither shall any man pluck them out of my hand.',
      href: '/study/john/10',
      note: 'The "nothing shall separate us" promise, in Jesus’ own words.',
    },
  ],

  /* ─── Revelation ───────────────────────────────────────────────────── */
  'revelation/21': [
    {
      ref: 'Isaiah 65:17',
      snippet: 'Behold, I create new heavens and a new earth: and the former shall not be remembered.',
      href: '/study/isaiah/65',
      note: 'Isaiah’s promise that John watches arrive.',
    },
    {
      ref: '2 Peter 3:13',
      snippet: 'We, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.',
      href: '/study/2-peter/3',
      note: 'Peter’s anchor for the same hope.',
    },
    {
      ref: 'Romans 8:21',
      snippet: 'The creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.',
      href: '/study/romans/8',
      note: 'Creation’s groaning answered.',
    },
  ],
};

/** Look up a chapter's fallback cross-refs. Returns an empty array (not
 *  null) so callers can spread without checking. */
export function getFallbackCrossRefs(bookSlug: string, chapter: number): CrossRef[] {
  return FALLBACK_CROSS_REFS[`${bookSlug}/${chapter}`] ?? [];
}
