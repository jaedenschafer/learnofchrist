import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 9 — The Coming King
 */
export const ZECHARIAH_9: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 9,

  estimatedMinutes: { 5: 1, 10: 2, 15: 4 },
  intros: [
    'Zechariah 9 contains one of the most direct messianic prophecies in the Old Testament. After a vision of God&apos;s judgment on surrounding nations, the prophet announces: "Rejoice greatly, O daughter of Zion...thy King cometh unto thee...lowly, and riding upon an ass." This verse is quoted in Matthew 21:5 as Christ enters Jerusalem on Palm Sunday. The king is coming—not on a war horse but on a beast of burden, embodying humility and peace.',
  ],

  sections: [
    {
      ref: 'Zechariah 9:1–8',
      title: 'God&apos;s Judgment on the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'The burden of the word of the Lord in the land of Hadrach, and Damascus shall be the rest thereof: when the eyes of man, as of all the tribes of Israel, shall be toward the Lord.'),
            plain(7, 'And I will take away his blood out of his mouth, and his abominations from between his teeth: but he that remaineth, even he, shall be for our God, and he shall be as a governor in Judah, and Ekron as a Jebusite.'),
            plain(8, 'And I will encamp about mine house because of the army, because of him that passeth by, and because of him that returneth: and no oppressor shall pass through them any more: for now have I seen with mine eyes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech9-judgment',
          html: 'Zechariah begins with a series of prophecies against the nations surrounding Israel—Damascus, Tyre, Sidon, Ekron. God&apos;s eye is on them, and judgment will come. But beyond judgment is restoration. God will protect His house. He will not allow oppressors to pass through anymore. The point is not revenge but the clearing away of all that threatens God&apos;s people.',
        },
        {
          kind: 'hebrew',
          id: 'zech9-massa',
          title: 'Massa — "Burden" (Word)',
          script: 'משא',
          translit: '<strong>Massa</strong> · burden; utterance; weight of God&apos;s word',
          description: 'The word of the Lord is a burden—weighty and consequential. It brings judgment but also restoration. What seems like a burden of judgment becomes the foundation for hope.',
        },
        {
          kind: 'christ',
          id: 'zech9-christ-judge',
          title: 'Christ Connection — Judge of All Nations',
          html: 'Christ will judge all nations and will establish a kingdom in which oppression has no place. His judgment is not merely punitive but restorative—it clears the way for a kingdom of justice and peace.',
        },
        {
          kind: 'carry',
          html: 'When you see injustice and oppression in the world, trust that God sees it too. His judgment will come, and He will protect His people. The burden of God&apos;s word is a word of hope, not despair.',
        },
        {
          kind: 'reflection',
          id: 'zech9-reflect-judge',
          prompt: 'What oppression or injustice concerns you most? How does it change your response to know that God says, "I will encamp about mine house...no oppressor shall pass through"?',
        },
      ],
    },

    {
      ref: 'Zechariah 9:9–10',
      title: 'The King Comes Lowly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(9, 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.'),
            plain(10, 'And I will cut off the chariot from Ephraim, and the horse from Jerusalem, and the battle bow shall be cut off: and he shall speak peace unto the heathen: and his dominion shall be from sea even to sea, and from the river even to the ends of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech9-king-lowly',
          html: 'The king comes, but not on a war horse. He rides a donkey—an animal of peace and labor, not conquest. He is just and brings salvation. He rides into Jerusalem lowly, humbly, not as a military conqueror. This is the most astounding reversal: the king of Israel comes without weapons, without power, without force. He comes as a servant. Matthew records that this verse was fulfilled when Jesus rode into Jerusalem on Palm Sunday.',
        },
        {
          kind: 'hebrew',
          id: 'zech9-anav',
          title: 'Anav — "Lowly" (Humble; Meek)',
          script: 'ענו',
          translit: '<strong>Anav</strong> · lowly; humble; meek; afflicted',
          description: 'The king is anav—humble, meek, lowly. This is not the image of a king in the world&apos;s eyes, but it is the king who comes in God&apos;s eyes. The lowliness is the sign of His true nobility.',
        },
        {
          kind: 'christ',
          id: 'zech9-christ-triumphal',
          title: 'Christ Connection — The Triumphal Entry',
          html: 'This is the verse fulfilled on Palm Sunday. Christ rides into Jerusalem on a donkey, and the crowds cry "Hosanna to the Son of David!" Matthew quotes this verse explicitly as Christ enters the city. It is a triumph precisely because it is lowly—the king&apos;s power is in His humility, His willingness to serve, His sacrifice.',
        },
        {
          kind: 'carry',
          html: 'The vision of the king coming lowly teaches that true kingship, true power, true dominion comes through humility and service, not through force. As Christ entered as a servant king, so His followers are called to serve, not to dominate. The world will be conquered not by the sword but by love.',
        },
        {
          kind: 'reflection',
          id: 'zech9-reflect-king',
          prompt: 'How does the image of a king coming lowly on a donkey change your understanding of what strength and kingship mean? How does it challenge the way you seek power or influence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Rejoice greatly, O daughter of Zion...thy King cometh unto thee...lowly, and riding upon an ass.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 9 · Study Guide',
  },

  hasHebrew: true,
};
