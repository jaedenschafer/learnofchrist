import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 39 — Pride and Its Consequences
 *
 * After his recovery, Hezekiah receives envoys from Babylon. "Hezekiah was
 * pleased, and shewed them the house of his precious things, the silver,
 * and the gold, and the spices, and the precious ointment, and all the house
 * of his armour, and all that was found in his treasures." Isaiah confronts
 * him: "Behold, the days come, that all that is in thine house, and that
 * which thy fathers have laid up in store until this day, shall be carried
 * into Babylon." Pride in possession becomes the occasion for prophecy of
 * loss. The exile is foretold.
 */
export const ISAIAH_39: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 39,

  intros: [
    'The chapter opens in a moment of peace and prosperity. Hezekiah has been healed. The Assyrians have been defeated. The kingdom is secure and rich. Envoys come from Babylon to visit and congratulate the king. In his joy, Hezekiah shows them his treasures—silver, gold, precious ointments, weapons, everything. But this moment of pride is interrupted by Isaiah the prophet. "Hear the word of the Lord of hosts." The treasures that Hezekiah has so proudly displayed will be carried away to Babylon. His descendants will be taken into exile. What seemed secure is revealed to be temporary. Pride in possession becomes the occasion for prophecy of loss.',
  ],

  sections: [
    {
      ref: 'Isaiah 39:1–8',
      title: 'Prosperity, Pride, and Prophecy of Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(1, 'At that time Merodachbaladan, the son of Baladan, king of Babylon, sent letters and a present to Hezekiah: for he had heard that he had been sick, and was recovered.'),
            plain(2, 'And Hezekiah was pleased, and shewed them the house of his precious things, the silver, and the gold, and the spices, and the precious ointment, and all the house of his armour, and all that was found in his treasures: there was nothing in his house, nor in all his dominion, that Hezekiah shewed them not.'),
            plain(3, 'Then came Isaiah the prophet unto king Hezekiah, and said unto him, What said these men? and from whence came they unto thee? And Hezekiah said, They are come from a far country, even from Babylon.'),
            plain(4, 'Then said he, What have they seen in thine house? And Hezekiah answered, All that is in mine house have they seen: there is nothing among my treasures that I have not shewed them.'),
            plain(5, 'Then said Isaiah to Hezekiah, Hear the word of the Lord of hosts:'),
            plain(6, 'Behold, the days come, that all that is in thine house, and that which thy fathers have laid up in store until this day, shall be carried into Babylon: nothing shall be left, saith the Lord.'),
            plain(7, 'And of thy sons that shall issue from thee, which thou shalt beget, shall they take away; and they shall be eunuchs in the palace of the king of Babylon.'),
            plain(8, 'Then said Hezekiah to Isaiah, Good is the word of the Lord which thou hast spoken. And he said, For there shall be peace and truth in my days.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah39-pride',
          html:
            'The danger is subtle. Hezekiah has been healed. The kingdom is safe. Peace reigns. The king is pleased to receive the envoys from Babylon. And in his pleasure and confidence, he shows them everything. "Hezekiah was pleased, and shewed them the house of his precious things...there was nothing in his house...that Hezekiah shewed them not." This is not malice. This is pride. The display of treasure is the display of the king&apos;s power and security. But Isaiah sees the spiritual danger.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah39-otzar',
          title: 'Otzar — "Treasure" (Store, Treasury)',
          script: 'אוֹצָר',
          translit: '<strong>Otzar</strong> · treasure, precious thing, store; that which is hoarded and valued',
          description:
            'The Hebrew otzar refers to treasure—not merely objects of value, but things that represent power, security, and self-sufficiency. When Hezekiah displays his otzar, he is displaying his sense of self-reliance. He has treasures. He has armor. He has wealth. But Isaiah&apos;s prophecy will strip all this away. What was hoarded will be carried into exile.',
        },
        {
          kind: 'commentary',
          id: 'isaiah39-exile',
          html:
            'The prophecy is specific and devastating: "Behold, the days come, that all that is in thine house...shall be carried into Babylon." Not just treasures, but sons. The descendants of Hezekiah will be taken into captivity and made eunuchs in the palace of the king of Babylon. The pride that displays treasure becomes the occasion for prophecy of loss. Everything that Hezekiah takes pride in will be taken away.',
        },
        {
          kind: 'christ',
          id: 'isaiah39-christ-wealth',
          title: 'Christ Connection — Treasures in Heaven',
          html:
            'Christ teaches: "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt...But lay up for yourselves treasures in heaven." The lesson of Hezekiah&apos;s pride is the lesson Christ teaches: earthly treasures are temporary. The things of this world—silver, gold, weapons, power—will be taken. The only secure treasure is the treasure laid up in heaven, the reward that moths and thieves cannot take. Christ&apos;s kingdom is not of this world, and His treasures do not fade.',
        },
        {
          kind: 'carry',
          html:
            'Every reader must ask: what treasures am I displaying? What am I trusting in for security? Am I building on silver and gold, on military might, on possessions that can be taken away? Or am I building on something that cannot be shaken—the faithfulness of God, the promises of His word, the security of His love? The downfall of Hezekiah is not that he had treasures. It is that he forgot the Source of those treasures and took pride in his own accumulation.',
        },
        {
          kind: 'reflection',
          id: 'isaiah39-treasures',
          prompt: 'What treasures are you displaying or relying on for security? What would change if you realized those treasures could be taken away tomorrow? Where does your deepest confidence lie?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All that is in thine house, and that which thy fathers have laid up in store until this day, shall be carried into Babylon: nothing shall be left.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 39 · Study Guide',
  },

  hasHebrew: true,
};
