import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 39 — Judgment and Mercy
 *
 * Jerusalem falls. The walls are broken. Zedekiah&apos;s sons are slain before his
 * eyes; his own eyes are put out. The city is burned. But Jeremiah is taken
 * out by Nebuchadnezzar&apos;s guard and given the choice to go where he will.
 * Judgment falls on the city, but mercy is given to the prophet.
 */
export const JEREMIAH_39: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 39,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Jeremiah 39 narrates the fall of Jerusalem—the moment when prophecy becomes history. The city, which has resisted God&apos;s word through Jeremiah for four decades, finally experiences the judgment he has announced. Zedekiah flees, is captured, watches his sons die, and loses his eyes. The Temple is burned. The walls are broken. Nothing remains.',
    'Yet in the middle of this catastrophe is Jeremiah—preserved, protected, given the choice to flee or to stay. The man who has been imprisoned, beaten, and threatened is now treated with honor by the conqueror. Judgment does not spare the prophet. It vindicates him. His word—which seemed weak and foolish—proves true. And his faithfulness—which seemed to achieve nothing—saves his life.',
  ],

  sections: [
    {
      ref: 'Jeremiah 39:1–18',
      title: 'Fall and Preservation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(1, 'In the ninth year of Zedekiah king of Judah, in the tenth month, came Nebuchadrezzar king of Babylon and all his army against Jerusalem, and they besieged it.'),
            plain(2, 'And in the eleventh year of Zedekiah, in the fourth month, the ninth day of the month, the city was broken up.'),
            plain(5, 'But the Chaldeans&apos; army pursued after them, and overtook Zedekiah in the plains of Jericho: and when they had taken him, they brought him up to Nebuchadrezzar king of Babylon to Riblah in the land of Hamath; and he gave judgment upon him.'),
            plain(6, 'Then the king of Babylon slew the sons of Zedekiah in Riblah before his eyes: also the king of Babylon slew all the nobles of Judah.'),
            plain(11, 'Now Nebuchadrezzar king of Babylon gave charge concerning Jeremiah to Nebuzaradan the captain of the guard, saying,'),
            plain(12, 'Take him, and look well to him, and do him no harm; but do unto him even as he shall say unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer39-fall',
          html:
            'The fall is complete and total. The nine-month siege ends. The city is broken. Zedekiah is captured, brought to Babylon&apos;s king, and forced to watch his sons die before his own eyes are put out. The irony is stark: the king who would not listen to the prophet is made blind. The city that rejected God&apos;s word is burned. Judgment arrives exactly as promised.',
        },
        {
          kind: 'commentary',
          id: 'jer39-jeremiah-honor',
          html:
            'But Jeremiah is given special protection. Nebuchadrezzar—the pagan king—orders that the prophet be treated well, that he be given whatever he needs. The man whose own king imprisoned him is honored by the foreign conqueror. This is vindication. The prophet who seemed to have lost everything is revealed to have stood alone with truth.',
        },
        {
          kind: 'commentary',
          id: 'jer39-choice',
          html:
            'Jeremiah is given a choice: go to Babylon with Nebuchadrezzar, where he will be honored; or stay in the land with the remnant. He chooses to stay. He does not flee to safety. He remains with the broken people, continuing his ministry of consolation and hope. The prophet&apos;s calling transcends circumstance.',
        },
        {
          kind: 'christ',
          id: 'jer39-christ-judgment',
          title: 'Christ Connection — Judgment and Redemption',
          html:
            'When Jesus spoke judgment on Jerusalem—"not one stone shall be left upon another"—it came to pass. When He predicted His own suffering, it occurred. But also, like Jeremiah, Christ was vindicated. His crucifixion, which seemed like defeat, became the means of redemption. And those who feared His name—who sought to silence Him—found that His death released a word that could not be contained. Judgment fell, but redemption came to those who received it.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where judgment and mercy are intertwined. Judgment falls on what resists God&apos;s word. But mercy is given to those who receive it. The prophet is preserved not because he deserves safety, but because he has been faithful. Your faithfulness may not preserve you from hardship. But it will preserve you in hardship, and reveal itself as the true path.',
        },
        {
          kind: 'reflection',
          id: 'jer39-judgment-mercy',
          prompt: 'Where do you see judgment and mercy working together in your life or in the world? How does Jeremiah&apos;s preservation in the midst of the city&apos;s fall change how you understand judgment and mercy?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In the ninth year of Zedekiah...came Nebuchadrezzar king of Babylon...and they besieged it. But Nebuchadrezzar king of Babylon gave charge concerning Jeremiah...Take him, and look well to him, and do him no harm.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 39 · Study Guide',
  },

  hasHebrew: false,
};
