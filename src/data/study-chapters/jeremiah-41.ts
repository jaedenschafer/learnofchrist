import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 41 — Chaos in the Remnant
 *
 * Just as hope begins to return to the remnant, Ishmael—a man of royal blood—
 * murders Gedaliah. The attempt at governance collapses. The remnant is again
 * thrown into chaos, fear, and confusion. Even the smallest restoration is
 * disrupted by human violence and power-seeking.
 */
export const JEREMIAH_41: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 41,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 2 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 41',
  },
  intros: [
    'The restoration of the remnant is fragile, vulnerable to human violence. Ishmael, a descendant of David, resents that a non-royal figure has been appointed governor. He sees an opportunity and acts. He murders Gedaliah, kills many of those gathered, and throws the fragile community into panic once again. The civil order collapses. The remnant is scattered.',
    'This is the reality of the fallen world: even when God preserves a people, even when restoration begins, human sin and power-seeking can disrupt it. The remnant must learn to live not with the stability they wish for, but with the trust they are called to place in God alone. Human governors fail. But God&apos;s purposes endure.',
  ],

  sections: [
    {
      ref: 'Jeremiah 41:1–18',
      title: 'The Murder and the Scattering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(1, 'Now it came to pass in the seventh month, that Ishmael the son of Nethaniah the son of Elishama, of the seed royal, and the ten men that were with him, came unto Gedaliah the son of Ahikam to Mizpah; and there they did eat bread together in Mizpah.'),
            plain(2, 'Then arose Ishmael the son of Nethaniah, and the ten men that were with him, and smote Gedaliah the son of Ahikam the son of Shaphan with the sword, and slew him, whom the king of Babylon had made governor over the land.'),
            plain(3, 'Ishmael also slew all the Jews that were with Gedaliah at Mizpah, and the Chaldeans&apos; soldiers that were found there.'),
            plain(10, 'Then Ishmael carried away captive all the residue of the people that were in Mizpah, even the king&apos;s daughters, and all the people that remained in Mizpah, whom Nebuzaradan the captain of the guard had committed to Gedaliah the son of Ahikam: and Ishmael the son of Nethaniah carried them away captive, and departed to go over to the Ammonites.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer41-murder',
          html: 'Ishmael kills Gedaliah while eating bread with him—a violation of the hospitality covenant, a betrayal of the meal shared. This is not a political dispute. It is treachery. The man of royal blood resents serving under a commoner, and he acts to reclaim power. The cost is the stability of the remnant and the lives of all Gedaliah&apos;s supporters[res:babylonian-chronicle][res:sefaria-jeremiah-41].',
        },
        {
          kind: 'commentary',
          id: 'jer41-scattering',
          html: 'The murder scatters the remnant again. Some are killed. Others are taken captive. Still others flee in fear. The fragile restoration that had begun—the gathering of the scattered, the return home, the resumption of harvest—is shattered. The remnant must once again navigate uncertainty, fear, and displacement[res:bibleodyssey-jeremiah].',
        },
        {
          kind: 'christ',
          id: 'jer41-christ-true-governor',
          title: 'Christ Connection — Christ the True Governor',
          html: 'Human governors fail. They seek power, betray trust, scatter those they rule. Jesus is the Governor who seeks not His own glory but the welfare of His people. He does not claim a throne through violence or betrayal. He offers Himself sacrificially. And His government is not one that can be overthrown by human treachery. It is rooted in truth and love that transcend human power-seeking.',
        },
        {
          kind: 'carry',
          html: 'Your trust cannot be ultimately placed in human leadership, human institutions, or human power. These fail. They betray. They scatter. Your trust must be in God alone, who preserves a remnant beyond all human disruption. Even when order collapses, even when leadership fails, God&apos;s purpose continues.',
        },
        {
          kind: 'reflection',
          id: 'jer41-trust-human-power',
          prompt: 'Where have you been disappointed by human leadership or power? How might you shift from seeking security in human institutions to trusting God as your ultimate Governor?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ishmael the son of Nethaniah...smote Gedaliah the son of Ahikam...and slew him, whom the king of Babylon had made governor over the land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 41 · Study Guide',
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
      id: 'sefaria-jeremiah-41',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 41 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.41',
      description: 'The Hebrew text of Jeremiah 41 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
