import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 11 — The Kings of North and South
 *
 * The angel reveals a detailed prophecy of the rise and fall of kingdoms—the kings
 * of the south and north, their wars, their alliances, their intrigues. Much of the
 * chapter describes the Seleucid and Ptolemaic kingdoms that would arise after
 * Alexander the Great. The prophecy demonstrates God&apos;s complete foreknowledge of
 * history. He knows and ordains all things. His kingdom stands above all earthly power.
 */
export const DANIEL_11: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 11,

  intros: [
    'The angel continues to reveal to Daniel what is written in the scripture of truth. "Also I in the first year of Darius the Mede, even I, stood to confirm and to strengthen him." The angel speaks of the kingdoms that will arise: "Behold, there shall stand up yet three kings in Persia; and the fourth shall be far richer than they all." Then a mighty king of Greece shall arise and rule with great dominion, but his kingdom shall be broken and divided toward the four winds of heaven.',
    'What follows is an extraordinarily detailed prophecy of historical events—the wars between the Seleucid dynasty (the king of the north) and the Ptolemaic dynasty (the king of the south) that would dominate the ancient world after Alexander&apos;s death. Through 35 verses, the angel describes specific campaigns, alliances, treacheries, and the fate of nations. The prophecy testifies to God&apos;s complete foreknowledge. He does not merely guess at the future. He knows it with absolute certainty. All of history unfolds according to His purposes.',
  ],

  sections: [
    {
      ref: 'Daniel 11:1–39',
      title: 'The Kingdoms Foretold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Also I in the first year of Darius the Mede, even I, stood to confirm and to strengthen him.'),
            plain(2, 'And now will I shew thee the truth. Behold, there shall stand up yet three kings in Persia; and the fourth shall be far richer than they all: and by his strength through his riches he shall stir up all against the realm of Grecia.'),
            plain(3, 'And a mighty king shall stand up, that shall rule with great dominion, and do according to his will.'),
            plain(4, 'And when he shall stand up, his kingdom shall be broken, and shall be divided toward the four winds of heaven; and not to his posterity, nor according to his dominion which he ruled: for his kingdom shall be plucked up, even for others beside those.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel11-kingdoms',
          html:
            'The prophecy unfolds with remarkable specificity. Three kings of Persia will stand. Then a fourth, far richer, will come. Then the mighty king of Greece—Alexander—will arise and rule with great dominion. But when he stands up, his kingdom will be broken and divided toward the four winds. This speaks to Alexander&apos;s death at the height of his power, at only thirty-two years old, and the subsequent division of his empire among his generals. None of this was predetermined by human plan. All of it was known to God and revealed to Daniel 200 years before it occurred.',
        },
        {
          kind: 'hebrew',
          id: 'daniel11-emes',
          title: 'Emes — "Truth" (Reality/Steadfastness)',
          script: 'אֱמֶת',
          translit: '<strong>Emes</strong> · truth; reality; that which is steadfast and reliable',
          description:
            'When the angel says "the scripture of truth," he means a record written in heaven itself—a book that contains not merely the appearance of things, but their ultimate reality. In God&apos;s knowledge, all that will happen is as certain as if it had already occurred. There is no shadow of uncertainty in His foreknowledge. All history is written in His book, and it unfolds as He has ordained.',
        },
        {
          kind: 'commentary',
          id: 'daniel11-divided',
          html:
            'The great kingdom is broken not to his posterity—Alexander left an infant son, who was eventually murdered—nor according to his dominion. His generals fought for control, and his empire was divided among them. Egypt fell to the Ptolemies, Syria to the Seleucids. The prophecy continues with details of their wars, their intermarriage, their betrayals. Each detail points to a God who knows not only the broad strokes of history, but the small details that seem to lie outside His purview.',
        },
      ],
    },

    {
      ref: 'Daniel 11:36–45',
      title: 'The King in His Might',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(36, 'And the king shall do according to his will; and he shall exalt himself, and magnify himself above every god, and shall speak marvellous things against the God of gods, and shall prosper till the indignation be accomplished: for that that is determined shall be done.'),
            plain(37, 'Neither shall he regard the God of his fathers, nor the desire of women, nor regard any god: for he shall magnify himself above all.'),
            plain(40, 'And at the time of the end shall the king of the south push at him: and the king of the north shall come against him like a whirlwind, with chariots, and with horsemen, and with many ships; and he shall enter into the countries, and shall overflow and pass over.'),
            plain(44, 'But tidings out of the east and out of the north shall trouble him: therefore he shall go forth with great fury to destroy, and utterly to make away many.'),
            plain(45, 'And he shall plant the tabernacles of his palace between the seas in the glorious holy mountain; yet he shall come to his end, and none shall help him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel11-exalt',
          html:
            'The prophecy arrives at a figure—sometimes identified as Antiochus Epiphanes, the Seleucid king who persecuted the Jews and desecrated the temple—who shall exalt himself above every god, speak marvelous things against the God of gods, and prosper until the indignation be accomplished. This king imagines himself supreme. He acknowledges no authority above his own will. Yet his prosperity is limited. "Till the indignation be accomplished." There is a date set. There is a limit. When God&apos;s purposes are fulfilled, this king too will come to his end, and none shall help him.',
        },
        {
          kind: 'commentary',
          id: 'daniel11-end',
          html:
            'The prophecy reveals a pattern that repeats throughout history: powers rise that exalt themselves above God. They prosper for a time. They seem invincible. But their reign is limited. "That which is determined shall be done"—not according to the will of the king, but according to the will of God. And when the appointed time arrives, the king comes to his end.',
        },
        {
          kind: 'christ',
          id: 'daniel11-christ-reign',
          title: 'Christ Connection — The Eternal Kingdom',
          html:
            'The detailed prophecy of Daniel 11, for all its precision about earthly kingdoms, serves a larger purpose: to demonstrate that God knows the end from the beginning. He is not surprised by the kings who arise. He is not overtaken by their power. All history is gathered up in His hand. And when Christ comes, He will establish a kingdom that cannot be shaken, that will outlast all the kingdoms of earth. The kingdoms described in Daniel 11 all fell away. But the kingdom of Christ—which is not of this world, not built by human hands, not subject to the rulers of darkness—stands forever.',
        },
        {
          kind: 'carry',
          html:
            'When we see powerful leaders who exalt themselves above God, who deny His existence or His authority, who command the resources and loyalty of nations—it is tempting to despair. But Daniel 11 teaches us a hidden truth: God sees all of this. He has already written it down. The king who exalts himself "shall come to his end, and none shall help him." There is a limit to every human power. There is an appointed time when God&apos;s indignation is accomplished, and the proud are brought low. We do not need to fear. We need to trust in the One who knows the end from the beginning.',
        },
        {
          kind: 'reflection',
          id: 'daniel11-foreknowledge',
          prompt: 'What news or world events make you anxious, as if powerful forces are beyond God&apos;s control? What would it mean to truly believe that God has written all of this down, knows how it ends, and that His kingdom will ultimately prevail?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And at the time of the end shall the king of the south push at him: and the king of the north shall come against him...Yet he shall come to his end, and none shall help him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 11 · Study Guide',
  },

  hasHebrew: true,
};
