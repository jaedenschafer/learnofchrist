import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Haggai 2 — The Glory of This Latter House
 *
 * "The desire of all nations shall come...I will fill this house with glory.
 * The glory of this latter house shall be greater than of the former."
 */
export const HAGGAI_2: RichChapterContent = {
  bookSlug: 'haggai',
  bookName: 'Haggai',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'As the people rebuild the temple, some of the older ones weep, remembering the greater glory of Solomon&apos;s temple. This new temple will not be as magnificent. It will be smaller, poorer, less ornate. Yet Haggai speaks a word of encouragement: the glory of this latter house shall be greater than the former, because the Desire of All Nations—the Messiah—will come to it.',
    'The promise shifts focus from external splendor to spiritual significance. What matters is not the grandeur of the building, but the presence of God in it and through it. And the ultimate fulfillment is in Christ, who is Himself the true temple, the true Glory.',
  ],

  sections: [
    {
      ref: 'Haggai 2:1–9',
      title: 'The Latter Glory Greater Than the Former',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'In the seventh month, in the one and twentieth day of the month, came the word of the Lord by the prophet Haggai, saying,'),
            plain(2, 'Speak now to Zerubbabel the son of Shealtiel, governor of Judah, and to Joshua the son of Josedech, the high priest, and to the residue of the people, saying,'),
            plain(3, 'Who is left among you that saw this house in her first glory? and how do ye see it now? is it not in your eyes in comparison of it as nothing?'),
            plain(4, 'Yet now be strong, O Zerubbabel, saith the Lord; and be strong, O Joshua, son of Josedech, the high priest; and be strong, all ye people of the land, saith the Lord, and work: for I am with you, saith the Lord of hosts:'),
            plain(5, 'According to the word that I covenanted with you when ye came out of Egypt, so my spirit remaineth among you: fear ye not.'),
            plain(6, 'For thus saith the Lord of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth, and the sea, and the dry land;'),
            plain(7, 'And I will shake all nations, and the desire of all nations shall come: and I will fill this house with glory, saith the Lord of hosts.'),
            plain(8, 'The silver is mine, and the gold is mine, saith the Lord of hosts.'),
            plain(9, 'The glory of this latter house shall be greater than of the former, saith the Lord of hosts: and in this place will I give peace, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haggai2-desire',
          html:
            '"The desire of all nations shall come." This is a prophecy of the Messiah. The phrase points to Christ, in whom all the longings of humanity find their fulfillment. He is the true treasure, the one greater than any building or possession.',
        },
        {
          kind: 'hebrew',
          id: 'haggai2-chamudot',
          title: 'Chamudot — "Desire"',
          script: 'חֲמוּדוֹת',
          translit: '<strong>Chamudot</strong> · precious things; desires; treasures',
          description:
            'The Hebrew word can mean both the objects of desire and the desires themselves. The Desire of All Nations is what every people and person ultimately seeks—fulfillment, meaning, salvation.',
        },
        {
          kind: 'christ',
          id: 'haggai2-christ-glory',
          title: 'Christ Connection — Christ the True Glory',
          html:
            'In John 1:14, John writes of Christ: "The Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." Christ is the glory that fills the temple—He Himself is the true temple.',
        },
        {
          kind: 'carry',
          html:
            'We do not build God&apos;s kingdom through grandeur or external magnificence. We build it through faithfulness, and God Himself provides the glory. The promise of peace—the ultimate gift—flows not from our efforts but from God&apos;s presence.',
        },
        {
          kind: 'reflection',
          id: 'haggai2-greater-glory',
          prompt:
            'What does the "greater glory" of God&apos;s latter-day work look like to you? Where do you see it?',
        },
      ],
    },

    {
      ref: 'Haggai 2:10–23',
      title: 'Cleansing and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'In the four and twentieth day of the ninth month, in the second year of Darius, came the word of the Lord by Haggai the prophet, saying,'),
            plain(11, 'Thus saith the Lord of hosts; Ask now the priests concerning the law, saying,'),
            plain(12, 'If one bear holy flesh in the skirt of his garment, and with his skirt do touch bread, or pottage, or wine, or oil, or any meat, shall it be holy? And the priests answered and said, No.'),
            plain(13, 'Then said Haggai, If one that is unclean by a dead body touch any of these, shall it be unclean? And the priests answered and said, It shall be unclean.'),
            plain(14, 'Then answered Haggai, and said, So is this people, and so is this nation before me, saith the Lord; and so is every work of their hands; and that which they offer there is unclean.'),
            plain(15, 'And now, I pray you, consider from this day and upward, from before a stone was laid upon a stone in the temple of the Lord:'),
            plain(16, 'Since those days were, when one came to an heap of twenty measures, there were but ten: when one came to the pressfat for to draw out fifty vessels out of the press, there were but twenty.'),
            plain(17, 'I smote you with blasting and with mildew and with hail in all the labours of your hands; yet ye turned not to me, saith the Lord.'),
            plain(18, 'Consider now from this day and upward, from the four and twentieth day of the ninth month, even from the day that the foundation of the Lord&apos;s temple was laid, consider it.'),
            plain(19, 'Is the seed yet in the barn? yea, as yet the vine, and the fig tree, and the pomegranate, and the olive tree, hath not brought forth: from this day will I bless you.'),
            plain(20, 'And again the word of the Lord came unto Haggai in the four and twentieth day of the month, saying,'),
            plain(21, 'Speak to Zerubbabel, governor of Judah, saying, I will shake the heavens and the earth;'),
            plain(22, 'And I will overthrow the throne of kingdoms, and I will destroy the strength of the kingdoms of the heathen; and I will overthrow the chariots, and those that ride in them; and the horses and their riders shall come down, every one by the sword of his brother.'),
            plain(23, 'In that day, saith the Lord of hosts, will I take thee, O Zerubbabel, my servant, the son of Shealtiel, saith the Lord, and will make thee as a signet: for I have chosen thee, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haggai2-unclean',
          html:
            'The priests are asked about cleansing. One lesson emerges: holiness cannot be transmitted by contact with holy things. But uncleanness can be transmitted. The people, though unclean, have now begun to work on the temple. And God promises: from this day forward, I will bless you. The new beginning marks a turning point.',
        },
        {
          kind: 'commentary',
          id: 'haggai2-signet',
          html:
            'Zerubbabel is promised a place of honor: "I will make thee as a signet." A signet ring bears the seal of authority and is precious to its owner. Zerubbabel, a humble governor, is chosen by God. This is a promise of lasting significance and divine favor.',
        },
        {
          kind: 'christ',
          id: 'haggai2-christ-chosen',
          title: 'Christ Connection — Christ the Chosen One',
          html:
            'In Isaiah 42:1, God says of the Servant-Messiah: "Behold my servant, whom I uphold; mine elect, in whom my soul delighteth." Christ is the ultimate fulfillment of God&apos;s choice and favor.',
        },
        {
          kind: 'carry',
          html:
            'The blessing comes not because of our merit but because of God&apos;s covenant and His choice. When we turn toward God&apos;s work, He promises to bless. The signet promise reminds us that God values those whom He has chosen.',
        },
        {
          kind: 'reflection',
          id: 'haggai2-seal',
          prompt:
            'If God made you His signet—a sign of His favor and authority—how would that change how you see yourself?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The desire of all nations shall come...The glory of this latter house shall be greater than of the former...and in this place will I give peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Haggai 2 · Study Guide',
  },

  hasHebrew: true,
};
