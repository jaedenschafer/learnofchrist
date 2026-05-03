import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zephaniah 2 — A Call to Seek the Lord
 *
 * "Seek ye the Lord, all ye meek of the earth, which have wrought his judgment;
 * seek meekness." Before the Day comes, there is a call to repent and turn.
 * The meek shall inherit.
 */
export const ZEPHANIAH_2: RichChapterContent = {
  bookSlug: 'zephaniah',
  bookName: 'Zephaniah',
  chapter: 2,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'In the midst of the terrible words about the Day of the Lord, Zephaniah offers a call—not to despair, but to seek. "Seek ye the Lord, all ye meek of the earth." The word "meek" is key. It is not the strong who will survive, but the humble. Not those who trust in their own power, but those who have learned to depend on God.',
    'The call is urgent: "Seek the Lord...seek meekness, perhaps ye shall be hid in the day of the Lord&apos;s anger." Perhaps—there is no guarantee for those who refuse. But for those who turn, who seek, who become meek, there is hope. The meek shall inherit the earth.',
  ],

  sections: [
    {
      ref: 'Zephaniah 2:1–7',
      title: 'The Call to Seek and Be Hidden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Gather yourselves together, yea, gather together, O nation not desired;'),
            plain(2, 'Before the decree bring forth, before the day pass as the chaff: before the fierce anger of the Lord come upon you, before the day of the Lord&apos;s anger come upon you.'),
            plain(3, 'Seek ye the Lord, all ye meek of the earth, which have wrought his judgment; seek meekness: perhaps ye shall be hid in the day of the Lord&apos;s anger.'),
            plain(4, 'For Gaza shall be forsaken, and Ashkelon a desolation: they shall drive out Ashdod at the noon day, and Ekron shall be rooted up.'),
            plain(5, 'Woe unto the inhabitants of the sea coast, the nation of the Cherethites! the word of the Lord is against you; O Canaan, the land of the Philistines, I will even destroy thee, that there shall be no inhabitant.'),
            plain(6, 'And the sea coast shall be dwellings and cottages for shepherds, and folds for flocks.'),
            plain(7, 'And the coast shall be for the remnant of the house of Judah; they shall feed thereupon: in the houses of Ashkelon shall they lie down in the evening: for the Lord their God shall visit them, and turn away their captivity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zephaniah2-meek',
          html:
            '"Seek ye the Lord, all ye meek of the earth, which have wrought his judgment." The meek are described as those who have "wrought his judgment"—who have acted in justice, who have lived according to God&apos;s standard. They are not passive, but active in righteousness.',
        },
        {
          kind: 'hebrew',
          id: 'zephaniah2-anavim',
          title: 'Anavim — "Meek"',
          script: 'עֲנָוִים',
          translit: '<strong>Anavim</strong> · meek; humble; lowly',
          description:
            'The Hebrew word describes those who are humble before God—not weak in character, but strong in their dependence on God. They do not rely on their own strength but on God&apos;s.',
        },
        {
          kind: 'christ',
          id: 'zephaniah2-christ-meek',
          title: 'Christ Connection — The Meek Inherit the Earth',
          html:
            'In Matthew 5:5, Christ says, "Blessed are the meek: for they shall inherit the earth." Christ Himself is the ultimate expression of meekness—not weakness, but power held in restraint and placed at God&apos;s disposal.',
        },
        {
          kind: 'carry',
          html:
            'Meekness is not optional for the believer. It is the character through which we survive judgment and inherit blessing. To become meek is to lay down our own claim to power and authority.',
        },
        {
          kind: 'reflection',
          id: 'zephaniah2-meekness',
          prompt:
            'What does meekness mean to you? Where do you find it hardest to surrender your own will to God&apos;s?',
        },
      ],
    },

    {
      ref: 'Zephaniah 2:8–15',
      title: 'The Judgment of the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(8, 'I have heard the reproach of Moab, and the revilings of the children of Ammon, whereby they have reproached my people, and magnified themselves against their border.'),
            plain(9, 'Therefore as I live, saith the Lord of hosts, the God of Israel, Surely Moab shall be as Sodom, and the children of Ammon as Gomorrah, even the breeding of nettles, and salt pits, and a perpetual desolation: the residue of my people shall spoil them, and the remnant of my people shall possess them.'),
            plain(11, 'The Lord will be terrible unto them: for he will famish all the gods of the earth; and men shall worship him, every one from his place, even all the isles of the heathen.'),
            plain(12, 'Ye Ethiopians also, ye shall be slain by my sword.'),
            plain(13, 'And he will stretch out his hand against the north, and destroy Assyria; and will make Nineveh a desolation, and dry like a wilderness.'),
            plain(14, 'And flocks shall lie down in the midst of her, all the beasts of the nations: both the cormorant and the bittern shall lodge in the upper lintels of it; their voice shall sing in the windows; desolation shall be in the thresholds: for he shall uncover the cedar work.'),
            plain(15, 'This is the rejoicing city that dwelt carelessly, that said in her heart, I am, and there is none beside me: how is she become a desolation, a place for beasts to lie down in! every one that passeth by her shall hiss, and wag his hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zephaniah2-nations',
          html:
            'God&apos;s judgment extends to all nations that have reproached His people or exalted themselves against Him. Moab, Ammon, Ethiopia, Assyria, Nineveh—all will be brought low. The pattern is consistent: those who pride themselves on their strength will be humbled.',
        },
        {
          kind: 'commentary',
          id: 'zephaniah2-nineveh',
          html:
            'Nineveh is singled out: "This is the rejoicing city that dwelt carelessly, that said in her heart, I am, and there is none beside me." She exalted herself beyond measure. And she will become a desolation where beasts lodge. The mighty city will be reduced to wilderness.',
        },
        {
          kind: 'christ',
          id: 'zephaniah2-christ-worship',
          title: 'Christ Connection — All Nations Worship God',
          html:
            '"Men shall worship him, every one from his place, even all the isles of the heathen." In Philippians 2:10-11, Paul writes that "at the name of Jesus every knee should bow...and every tongue should confess that Jesus Christ is Lord." Christ&apos;s lordship is universal and final.',
        },
        {
          kind: 'carry',
          html:
            'The destruction of the proud nations and the exaltation of God is not cruelty. It is the establishment of truth. Those who have lived in the illusion of their own self-sufficiency will be brought to acknowledge the God they have denied.',
        },
        {
          kind: 'reflection',
          id: 'zephaniah2-pride',
          prompt:
            'Where do you find yourself saying, "I am, and there is none beside me"? What would humility look like?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Seek ye the Lord, all ye meek of the earth, which have wrought his judgment; seek meekness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zephaniah 2 · Study Guide',
  },

  hasHebrew: true,
};
