import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 48 — Against Moab
 *
 * The longest of the oracles against the nations concerns Moab. The condemnation
 * is sharp: "Cursed be he that doeth the work of the Lord deceitfully, and cursed
 * be he that keepeth back his sword from blood." God demands wholehearted devotion
 * or nothing at all. Moab is neither for God nor fully against Him—and this
 * fence-sitting is itself a form of disobedience.
 */
export const JEREMIAH_48: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 48,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 48',
  },
  intros: [
    'Moab was a neighbor of Israel, descended from Lot and sharing cultural and economic ties. Yet Moab often stood as an opponent. Now God speaks against Moab with words of judgment. Cities will be destroyed. The people will be put to shame. And the reason, in part, is expressed in verse 10: "Cursed be he that doeth the work of the Lord deceitfully, and cursed be he that keepeth back his sword from blood."',
    'This statement has troubled many readers. It seems to celebrate violence and bloodshed. But understood rightly, it speaks to a deeper principle: God demands wholehearted commitment. To do God&apos;s work deceitfully—half-heartedly, with reservations, with one eye on personal comfort—is to invite curse. To refrain from God&apos;s work out of fear or selfishness is likewise cursed. God calls for undivided hearts.',
  ],

  sections: [
    /* ─── Jeremiah 48:1–20 — The Fall of Moab ─────────────────────────── */
    {
      ref: 'Jeremiah 48:1–20',
      title: 'Desolation Comes to Moab',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(1, 'Against Moab thus saith the Lord of hosts, the God of Israel; Woe unto Nebo! for it is spoiled: Kirjaim is confounded and taken: Misgab is confounded and dismayed.'),
            plain(8, 'And the spoiler shall come upon every city, and no city shall escape: the valley also shall perish, and the plain shall be destroyed, as the Lord hath spoken.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer48-cities',
          html: 'God names specific Moabite cities: Nebo, Kirjaim, Misgab. Each is "spoiled," "confounded," "dismayed." The word is not abstract or distant. It touches real places where real people live. The effect is to make the judgment concrete and inescapable. No city will escape. The valley will perish. The plain will be destroyed. This is comprehensive devastation[res:babylonian-chronicle][res:sefaria-jeremiah-48].',
        },
        {
          kind: 'carry',
          html: 'The scope and inevitability of judgment in this passage is striking. No city escapes. No valley is spared. No plain remains. There is a totality to God&apos;s judgment on those who resist His purposes. Yet the point extends beyond the historical judgment on Moab. What areas of your life are you defending against God&apos;s claim? Where are you trying to escape judgment?',
        },
        {
          kind: 'reflection',
          id: 'jer48-escape',
          prompt: 'Is there a "city" or "valley" in your life—a domain or relationship you are trying to keep separate from God&apos;s lordship? What would it mean to surrender it completely?',
        },
      ],
    },

    /* ─── Jeremiah 48:10 — Wholehearted Devotion ────────────────────── */
    {
      ref: 'Jeremiah 48:10',
      title: 'The Curse of Divided Hearts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(10, 'Cursed be he that doeth the work of the Lord deceitfully, and cursed be he that keepeth back his sword from blood.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer48-deceitfully',
          html: 'This verse is often misunderstood. To "do the work of the Lord deceitfully" means to serve God with reservations, with half-measures, with an eye toward personal advantage. It means to say "yes" with your mouth while your heart holds back. It means to commit superficially while remaining uncommitted at the core. God curses such divided service. He will have wholehearted devotion or nothing at all[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'commentary',
          id: 'jer48-sword',
          html: 'To "keep back his sword from blood" means to refrain from the full commitment that God&apos;s service demands. It means to draw back in fear, to be cautious, to reserve one&apos;s strength. In the context of warfare and judgment, the sword represents the full force of one&apos;s commitment. To keep it back is to be half-hearted. And God says such half-heartedness is itself cursed.',
        },
        {
          kind: 'hebrew',
          id: 'jer48-arar',
          title: 'Arar — "Cursed" (Arur)',
          script: 'אָרוּר',
          translit: '<strong>Arur</strong> · cursed; damned; turned away from blessing',
          description:
            'The Hebrew word arur means "cursed"—separated from blessing, turned away from God&apos;s favor, doomed. It is the opposite of blessed (blessed = in right relationship with God; cursed = severed from that relationship). To be cursed is to be fundamentally disconnected from the source of life and flourishing.',
        },
        {
          kind: 'christ',
          id: 'jer48-christ-whole',
          title: 'Christ Connection — Wholehearted Surrender',
          html:
            'Jesus teaches that no one can serve two masters. "No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other." Christ demands wholehearted devotion. And He offers something Jeremiah&apos;s hearers did not fully understand: that such devotion, when given to Christ, leads not to curse but to blessing. In Christ, the curse is lifted. The divided heart is made whole. The one who surrenders fully to Christ&apos;s lordship finds not judgment but redemption.',
        },
        {
          kind: 'carry',
          html:
            'The call to Moab—and to us—is stark: either serve God wholeheartedly, or do not serve at all. To serve Him deceitfully, half-heartedly, with reservations, is to invite curse. Where in your life are you serving God with divided loyalty? Where is your sword held back?',
        },
        {
          kind: 'reflection',
          id: 'jer48-whole-heart',
          prompt: 'What would wholehearted devotion to Christ look like in your life? What would you have to release or surrender? What keeps you from offering your whole self?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cursed be he that doeth the work of the Lord deceitfully, and cursed be he that keepeth back his sword from blood.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 48 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'sefaria-jeremiah-48',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 48 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.48',
      description: 'The Hebrew text of Jeremiah 48 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
