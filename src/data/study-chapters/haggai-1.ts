import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Haggai 1 — "Consider Your Ways"
 *
 * The people have returned from captivity but have not rebuilt the temple.
 * Haggai calls them to consider their ways and rebuild God&apos;s house.
 */
export const HAGGAI_1: RichChapterContent = {
  bookSlug: 'haggai',
  bookName: 'Haggai',
  chapter: 1,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  opener: {
    matchTitle: /The Prophet Haggai/i,
    caption: 'Haggai 1',
  },
  intros: [
    'Haggai speaks to the remnant that has returned from Babylon. They have been back in their land, yet the temple remains unbuilt. The altar is standing, but the house of God itself is still in ruins. Meanwhile, the people have built their own homes, paneled them, invested time and resources in their own comfort. Haggai calls them to "Consider your ways."',
    'The message is simple but penetrating: you have sown much but reaped little. You earn wages only to put them in a bag with a hole in it. Your harvests are incomplete. Why? Because the house of God lies waste while you dwell in your own houses. The response is equally simple: rebuild the house of God, and He will take pleasure in it.',
  ],

  sections: [
    {
      ref: 'Haggai 1:1–11',
      title: 'Consider Your Ways',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'In the second year of Darius the king, in the sixth month, in the first day of the month, came the word of the Lord by Haggai the prophet unto Zerubbabel the son of Shealtiel, governor of Judah, and to Joshua the son of Josedech, the high priest, saying,'),
            plain(2, 'Thus speaketh the Lord of hosts, saying, This people say, The time is not come, the time that the Lord&apos;s house should be built.'),
            plain(3, 'Then came the word of the Lord by Haggai the prophet, saying,'),
            plain(4, 'Is it time for you, O ye, to dwell in your ceiled houses, and this house lie waste?'),
            plain(5, 'Now therefore thus saith the Lord of hosts; Consider your ways.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haggai1-question',
          html: 'The question confronts the people&apos;s choice. They have chosen comfort for themselves while the house of God lies waste. Haggai does not ask if they have the right to build their own homes, but whether it is right to do so while neglecting God&apos;s house. The call to "consider your ways" invites them to examine the priority they have given to their own shelter[res:intertextual-haggai-1-matthew-6][res:sefaria-haggai-1].',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(6, 'Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are not filled with drink; ye clothe you, but there is none warm; and he that earneth wages earneth wages to put it into a bag with holes.'),
            plain(7, 'Thus saith the Lord of hosts; Consider your ways.'),
            plain(8, 'Go up to the mountain, and bring wood, and build the house; and I will take pleasure in it, and I will be glorified, saith the Lord.'),
            plain(9, 'Ye looked for much, and, lo, it came to little; and when ye brought it home, I did blow upon it. Why? saith the Lord of hosts. Because of mine house that is waste, and ye run every man unto his own house.'),
            plain(10, 'Therefore the heaven over you is stayed from dew, and the earth is stayed from her fruit.'),
            plain(11, 'And I called for a drought upon the land, and upon the mountains, and upon the corn, and upon the new wine, and upon the oil, and upon that which the ground bringeth forth, and upon men, and upon cattle, and upon all the labour of your hands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haggai1-consequences',
          html:
            'The consequences are tangible and detailed. They have sown much but bring in little. They eat but are never filled. They earn wages only to see them slip through holes in the bag. These are not arbitrary punishments but the natural result of misaligned priorities. Labor that ignores God yields diminishing returns[res:bibleodyssey-haggai-priorities].',
        },
        {
          kind: 'hebrew',
          id: 'haggai1-sumu',
          title: 'Sumu — "Consider"',
          script: 'שׂוּם',
          translit: '<strong>Sumu</strong> · to set; to consider; to place',
          description:
            'The Hebrew word means to set your mind on something, to give it your attention. Haggai is calling the people to think carefully about the consequences of their choices.',
        },
        {
          kind: 'christ',
          id: 'haggai1-christ-temple',
          title: 'Christ Connection — Christ the True Temple',
          html:
            'In John 2:19-21, Christ says, "Destroy this temple, and in three days I will raise it up." He is speaking of His own body, which is the true temple. In Christ, God&apos;s presence dwells—not in a building, but in a person.',
        },
        {
          kind: 'carry',
          html:
            'The question Haggai raises applies to us: What have we made our priority? What are we building? Is God&apos;s house—His kingdom, His purposes—taking a back seat to our own comfort and security?',
        },
        {
          kind: 'reflection',
          id: 'haggai1-priority',
          prompt: 'What are you building? Is it your own house, or are you working on God&apos;s?',
        },
      ],
    },

    {
      ref: 'Haggai 1:12–15',
      title: 'The Response and the Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'Then Zerubbabel the son of Shealtiel, and Joshua the son of Josedech, the high priest, with all the remnant of the people, obeyed the voice of the Lord their God, and the words of Haggai the prophet, as the Lord their God had sent him, and the people did fear before the Lord.'),
            plain(13, 'Then spake Haggai the Lord&apos;s messenger in the Lord&apos;s message unto the people, saying, I am with you, saith the Lord.'),
            plain(14, 'And the Lord stirred up the spirit of Zerubbabel the son of Shealtiel, governor of Judah, and the spirit of Joshua the son of Josedech, the high priest, and the spirit of all the remnant of the people; and they came and did work in the house of the Lord of hosts, their God,'),
            plain(15, 'In the twenty and fourth day of the sixth month, in the second year of Darius the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haggai1-obey',
          html:
            'The response is immediate and comprehensive. Zerubbabel, Joshua, and all the remnant obey the voice of the Lord. And the Lord responds: "I am with you." This is the promise that transforms reluctance into hope. When we turn toward God&apos;s work, He promises His presence.',
        },
        {
          kind: 'commentary',
          id: 'haggai1-stirred',
          html:
            'The Lord stirs up the spirit of the leaders and all the people. This is not human motivation alone. It is the Spirit of God moving hearts to action. Within twenty-four days of Haggai&apos;s word, they begin work on the house of God.',
        },
        {
          kind: 'christ',
          id: 'haggai1-christ-with',
          title: 'Christ Connection — "I Am With You"',
          html:
            'In Matthew 28:20, the risen Christ promises His disciples, "Lo, I am with you alway, even unto the end of the world." This is the promise Haggai proclaims: God&apos;s presence with His people when they commit to His work.',
        },
        {
          kind: 'carry',
          html:
            'The turning point comes not through guilt alone, but through the promise of God&apos;s presence. When we know that God is with us in His work, our hesitation gives way to hope and energy.',
        },
        {
          kind: 'reflection',
          id: 'haggai1-with-me',
          prompt:
            'Do you believe that God is with you in the work He calls you to? How does that belief change your willingness to act?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Consider your ways...Go up to the mountain, and bring wood, and build the house; and I will take pleasure in it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Haggai 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-haggai-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Haggai 1 · Texts & Translations',
      url: 'https://www.sefaria.org/Haggai.1',
      description: 'Primary sources on the call to rebuild the temple and reconsider priorities.',
    },
    {
      id: 'intertextual-haggai-1-matthew-6',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Haggai 1:4 → Matthew 6:33 — Seek First God&apos;s Kingdom',
      url: 'https://intertextual.bible/search?query=haggai+matthew',
      description: 'The connection between Haggai&apos;s call to prioritize God&apos;s house and Christ&apos;s teaching to seek first God&apos;s kingdom.',
    },
  ],

  hasHebrew: true,
};
