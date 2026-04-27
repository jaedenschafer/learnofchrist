import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 52 — The Fall of Jerusalem
 *
 * The book of Jeremiah ends with a historical narrative: the fall of Jerusalem,
 * the destruction of the temple, the exile of the people. It is Jeremiah's word
 * made flesh. Yet it ends not in total darkness. Jehoiachin, the king in exile,
 * is freed by the king of Babylon and given a place of honor. This small light at
 * the end of exile prefigures the ultimate restoration and the coming of Christ.
 */
export const JEREMIAH_52: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 52,

  intros: [
    'Jeremiah 52 is the final chapter of the book, and it reads like an epilogue to everything that has come before. It narrates the fall of Jerusalem in historical detail—the siege, the breach of the walls, the burning of the temple, the carrying away of the people into exile. Every word of judgment that Jeremiah spoke now finds its fulfillment. The prophet&apos;s vindication is complete.',
    'Yet the chapter does not end in total darkness. In the final verses, we read that Jehoiachin, the exiled king, is released from prison and given a place of honor in the court of the king of Babylon. He is allowed to wear clothes other than prison garb. He is given an allowance. He eats regularly at the king&apos;s table. It is a small light—not restoration to the throne, not freedom to return home, but a sign that hope does not die even in exile. God remembers His king and His people.',
  ],

  sections: [
    /* ─── Jeremiah 52:1–27 — The Fall Narrated ──────────────────────── */
    {
      ref: 'Jeremiah 52:1–27',
      title: 'Judgment Fulfilled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 52,
          lines: [
            plain(4, 'And it came to pass in the ninth year of his reign, in the tenth month, in the tenth day of the month, that Nebuchadrezzar king of Babylon came, he and all his army, against Jerusalem, and pitched against it, and built forts against it round about.'),
            plain(11, 'Now Nebuchadrezzar king of Babylon in the nineteenth year of his reign came up to Jerusalem, and burnt it with fire:'),
            plain(15, 'Then Nebuzaradan the captain of the guard carried away captive certain of the poor of the land, and the residue of the people that remained in the city, and those that fell away, that fell to the king of Babylon, and the rest of the multitude.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer52-fall',
          html:
            'The narrative is relentless in its detail. The siege lasts two years—from the tenth day of the tenth month until the ninth day of the fourth month of the nineteenth year of Nebuchadrezzar&apos;s reign. The city is breached. The temple is burned. The walls are broken down. The people are carried away. Every detail confirms that Jeremiah&apos;s prophecy has come to pass.',
        },
        {
          kind: 'commentary',
          id: 'jer52-poor-carried',
          html:
            'The captain of the guard carries away "certain of the poor of the land." The word "poor" here may refer to those left behind as laborers, or it may be poignant commentary: those of least means remain, while the influential and wealthy are taken into exile. Either way, the result is that Jerusalem is emptied, depopulated, left in ruins.',
        },
        {
          kind: 'carry',
          html:
            'The fulfillment of Jeremiah&apos;s prophecy invites reflection. Every word he spoke came to pass. Nothing he prophesied failed. Yet he was mocked and rejected during his lifetime. The lesson is that God&apos;s word is sure, whether or not it is believed. And God&apos;s judgment is certain, whether or not it is heeded. Do we listen to God&apos;s word only when it is convenient or only after judgment has come?',
        },
        {
          kind: 'reflection',
          id: 'jer52-prophet-vindicated',
          prompt: 'Jeremiah was vindicated only after the terrible judgment he prophesied came to pass. In what areas of your life are you resisting God&apos;s word because the consequences seem too costly? What would it take to trust Him before judgment comes?',
        },
      ],
    },

    /* ─── Jeremiah 52:28–34 — Light in Exile ────────────────────────── */
    {
      ref: 'Jeremiah 52:28–34',
      title: 'Hope in the Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 52,
          lines: [
            plain(31, 'And it came to pass in the seven and thirtieth year of the captivity of Jehoiachin king of Judah, in the twelfth month, in the five and twentieth day of the month, that Evil-merodach king of Babylon in the first year of his reign lifted up the head of Jehoiachin king of Judah out of prison;'),
            plain(32, 'And spake kindly unto him, and set his throne above the throne of the kings that were with him in Babylon;'),
            plain(33, 'And changed his prison garments: and he did eat bread continually before him all the days of his life.'),
            plain(34, 'And for his diet, a continual diet was given him of the king of Babylon, until the day of his death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer52-jehoiachin-freed',
          html:
            'After thirty-seven years in captivity, Jehoiachin is lifted out of prison. The phrase "lifted up the head" means to restore honor and dignity. The new king of Babylon, Evil-merodach, speaks kindly to Jehoiachin and sets his throne above the thrones of other exiled kings. Jehoiachin is given dignity. He is allowed to wear clothes other than prison garments. He eats regularly at the king&apos;s table. His needs are provided for.',
        },
        {
          kind: 'commentary',
          id: 'jer52-continual',
          html:
            'The repetition of "continual" and "all the days of his life" emphasizes permanence. This is not a temporary reprieve. This is a lasting change in Jehoiachin&apos;s condition. From the depths of captivity and imprisonment, he is raised to a position of honor. It is a small thing compared to restoration to the throne, but it is a light in the darkness.',
        },
        {
          kind: 'hebrew',
          id: 'jer52-nasa-rosh',
          title: 'Nasa Rosh — "Lifted Up the Head" (Nasa Rosh)',
          script: 'נָשָׂא רֹאשׁ',
          translit: '<strong>Nasa Rosh</strong> · lifted up the head; restored honor; granted favor',
          description:
            'In Hebrew, to "lift up the head" means to restore dignity, to grant favor, to acknowledge worth. Jehoiachin&apos;s head is lifted up—he is recognized as worthy of honor despite his fallen status as exiled king. This is a gesture of grace, of undeserved favor.',
        },
        {
          kind: 'christ',
          id: 'jer52-christ-light',
          title: 'Christ Connection — Light at the End of Exile',
          html:
            'The release of Jehoiachin, small though it is, prefigures the ultimate restoration that will come through Christ. The people are in exile, the temple is burned, the walls are broken. But light breaks through. A king is honored in captivity. It is not homecoming—not yet. But it is a sign that God has not abandoned His people. Christ fulfills this promise completely. He takes up the cause of the exiled and the imprisoned. He lifts up the head of all who have been brought low by sin. He restores them to a place of honor at the Father&apos;s table. He provides for them abundantly all the days of their lives.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself in exile—separated from home, imprisoned by circumstances, broken and humiliated—Jeremiah 52 offers hope. God does not forget His people in captivity. Even in exile, even in the deepest darkness, God works to restore and honor those who are His. The light may seem small at first. But it is real. And it leads toward the greater restoration that awaits.',
        },
        {
          kind: 'reflection',
          id: 'jer52-lifted-head',
          prompt: 'In what way does your "head" need to be lifted up? What would it look like for God to restore your dignity and honor despite your current circumstances? How does the promise of provision "all the days of your life" comfort you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Evil-merodach king of Babylon lifted up the head of Jehoiachin king of Judah out of prison...and set his throne above the throne of the kings that were with him in Babylon.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 52 · Study Guide',
  },
};
