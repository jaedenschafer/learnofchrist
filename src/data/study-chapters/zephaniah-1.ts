import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zephaniah 1 — The Day of the Lord Approaches
 *
 * Zephaniah announces the Day of the Lord. God will sweep away everything
 * from the face of the earth. The wicked will be judged, and only a remnant
 * will remain.
 */
export const ZEPHANIAH_1: RichChapterContent = {
  bookSlug: 'zephaniah',
  bookName: 'Zephaniah',
  chapter: 1,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['judgment', 'hope', 'humility', 'mercy'],
  opener: {
    topical: true,
    caption: 'Zephaniah 1',
  },
  intros: [
    'Zephaniah speaks of a day appointed by God—the Day of the Lord. It is a day of terrible judgment, when God will sweep away everything from the face of the earth. He will consume beasts and birds, fish and the stumbling blocks—all will be removed. From the people of Judah, He will cut off those who serve idols, those who swear by false gods, those who have turned away.',
    'But the Day of the Lord is not presented as abstract or distant. It is near. It is imminent. And it is described with vivid detail and a sense of urgency. Those who are far off will hear the sound of the trumpet. Those who are complacent will be shaken from their indifference.',
  ],

  sections: [
    {
      ref: 'Zephaniah 1:1–6',
      title: 'The Day of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The word of the Lord which came unto Zephaniah the son of Cushi, the son of Gedaliah, the son of Amariah, the son of Hezekiah, in the days of Josiah the son of Amon, king of Judah.'),
            plain(2, 'I will utterly consume all things from off the land, saith the Lord.'),
            plain(3, 'I will consume man and beast; I will consume the fowls of the heaven, and the fishes of the sea, and the stumblingblocks with the wicked; and I will cut off man from off the land, saith the Lord.'),
            plain(4, 'I will also stretch out mine hand upon Judah, and upon all the inhabitants of Jerusalem; and I will cut off the remnant of Baal from this place, and the name of the Chemarims with the priests;'),
            plain(5, 'And them that worship the host of heaven upon the housetops; and them that worship and that swear by the Lord, and that swear by Malcham;'),
            plain(6, 'And them that are turned back from the Lord; and those that have not sought the Lord, nor enquired for him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zephaniah1-consume',
          html:
            'The language is absolute: "I will utterly consume." Nothing will remain. Beasts, birds, fish—all will be consumed. Even the stumbling blocks—the things that cause people to stumble into sin—will be removed. This is not mere judgment but a complete restoration, a clearing of the earth of all that defiles it[res:sefaria-zephaniah-1][res:intertextual-zephaniah-1-2peter-3].',
        },
        {
          kind: 'hebrew',
          id: 'zephaniah1-asaf',
          title: 'Asaf — "Consume"',
          script: 'אָסַף',
          translit: '<strong>Asaf</strong> · to consume; to gather; to remove',
          description:
            'The Hebrew word means both to consume and to gather—it is an active removal. God will not leave the wicked in place. He will actively strip them away.',
        },
        {
          kind: 'christ',
          id: 'zephaniah1-christ-appointed-day',
          title: 'Christ Connection — God&apos;s Appointed Day',
          html:
            'In 2 Peter 3:10, Peter speaks of the Day of the Lord: "the heavens shall pass away with a great noise, and the elements shall melt with fervent heat...the earth also and the works that are therein shall be burned up." Christ returns as the Judge on the Day of the Lord[res:bibleodyssey-zephaniah-day-lord].',
        },
        {
          kind: 'carry',
          html:
            'The Day of the Lord is meant to inspire not terror alone, but also a turning away from idolatry and toward genuine worship. It is a call to abandon false gods and seek the true God.',
        },
        {
          kind: 'reflection',
          id: 'zephaniah1-day',
          prompt:
            'What false gods or stumbling blocks in your life need to be consumed? What would it mean to fully turn to God?',
        },
      ],
    },

    {
      ref: 'Zephaniah 1:7–18',
      title: 'The Day of Wrath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(7, 'Hold thy peace at the presence of the Lord God: for the day of the Lord is at hand: for the Lord hath prepared a sacrifice, he hath bid his guests.'),
            plain(8, 'And it shall come to pass in the day of the Lord&apos;s sacrifice, that I will punish the princes, and the king&apos;s children, and all such as are clothed with strange apparel.'),
            plain(9, 'In the same day also will I punish all those that leap on the threshold, which fill their masters&apos; houses with violence and deceit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zephaniah-1-78mid-1',
          html:
            'The prophet turns from the day of the LORD&apos;s sweep across Judah to the gold and silver that will not deliver them. Wealth is no shield in this book.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'And it shall come to pass in that day, saith the Lord, that there shall be the noise of a cry from the fish gate, and an howling from the second, and a great crashing from the hills.'),
            plain(14, 'The great day of the Lord is near, it is near, and hasteth greatly, even the voice of the day of the Lord: the mighty man shall cry there bitterly.'),
            plain(15, 'That day is a day of wrath, a day of trouble and distress, a day of wasteness and desolation, a day of darkness and gloominess, a day of clouds and thick darkness.'),
            plain(18, 'Neither their silver nor their gold shall be able to deliver them in the day of the Lord&apos;s wrath; but the whole land shall be devoured by the fire of his jealousy: for he shall make even a speedy riddance of all them that dwell in the land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zephaniah1-silence',
          html:
            '"Hold thy peace at the presence of the Lord God." The Day of the Lord is so terrible that silence is the only fitting response. All voices cease. All pretense ends. All the noise of human society falls mute before God&apos;s judgment.',
        },
        {
          kind: 'commentary',
          id: 'zephaniah1-wrath',
          html:
            'The day is described with accumulating intensity: wrath, trouble, distress, wasteness, desolation, darkness, gloominess, clouds, thick darkness. There is no escaping it. The mighty man cries bitterly. Silver and gold cannot deliver.',
        },
        {
          kind: 'christ',
          id: 'zephaniah1-christ-wrath',
          title: 'Christ Connection — Christ Bears the Wrath',
          html:
            'In Romans 3:25-26, Paul writes of Christ "whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness...that he might be just, and the justifier of him which believeth in Jesus." Christ absorbs God&apos;s wrath so that believers may be spared.',
        },
        {
          kind: 'carry',
          html:
            'The Day of the Lord is terrible for those who stand on their own merit or who trust in wealth and power. But for those who have turned to God, the Day is transformed. It is the day when God vindicates His people and brings them into their inheritance.',
        },
        {
          kind: 'reflection',
          id: 'zephaniah1-deliver',
          prompt:
            'What do you trust in for security or deliverance? Is it something that will endure the Day of the Lord?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The great day of the Lord is near...That day is a day of wrath, a day of trouble and distress.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zephaniah 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zephaniah-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zephaniah 1 · Texts & Translations',
      url: 'https://www.sefaria.org/Zephaniah.1',
      description: 'Primary sources on the announcement of the Day of the Lord and the call to judgment and repentance.',
    },
    {
      id: 'intertextual-zephaniah-1-2peter-3',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zephaniah 1 → 2 Peter 3 — The Coming Judgment',
      url: 'https://intertextual.bible/search?query=zephaniah+peter',
      description: 'Parallel between Zephaniah&apos;s prophecy of the Day of the Lord and Peter&apos;s eschatological vision.',
    },
  ],

  hasHebrew: true,
};
