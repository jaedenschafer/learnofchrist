import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 58 — The True Fast
 *
 * "Is not this the fast that I have chosen? to loose the bands of wickedness,
 * to undo the heavy burdens, and to let the oppressed go free, and that ye
 * break every yoke?" God contrasts religious ritual with true righteousness.
 * The people fast but quarrel with each other. They perform outward acts of
 * piety while ignoring the needy. True fasting means feeding the hungry,
 * clothing the naked, breaking the chains of injustice.
 */
export const ISAIAH_58: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 58,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  topicTags: ['hope', 'deliverance', 'messianic-prophecy', 'new-creation'],
  opener: {
    topical: true,
    caption: 'Isaiah 58',
  },
  intros: [
    'Isaiah 58 is a rebuke dressed in the clothing of a call to righteousness. The people come to God with their fasts, their prayers, their religious observance. They expect God to notice and reward them. But God sees something else: they are cruel to their servants, they quarrel among themselves, they oppress the poor. Their religion is hollow because it is not connected to justice and mercy. God calls them to a different kind of fasting—one that feeds the hungry, clothes the naked, breaks the chains of oppression. This is the test of true faith: not what you do in the temple, but what you do in the world.',
  ],

  sections: [
    {
      ref: 'Isaiah 58:1–9',
      title: 'False Fasting and True Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 58,
          lines: [
            plain(1, 'Cry aloud, spare not, lift up thy voice like a trumpet, and shew my people their transgression, and the house of Jacob their sins.'),
            plain(2, 'Yet they seek me daily, and delight to know my ways, as a nation that did righteousness, and forsook not the ordinance of their God: they ask of me the ordinances of justice; they take delight in approaching unto God.'),
            plain(3, 'Wherefore have we fasted, say they, and thou seest not? wherefore have we afflicted our soul, and thou takest no knowledge? Behold, in the day of your fast ye find pleasure, and exact all your labours.'),
            plain(4, 'Behold, ye fast for strife and debate, and to smite with the fist of wickedness: ye shall not fast as ye do this day, to make your voice to be heard on high.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa58-fasting-true',
          html:
            'The false fast is named; now comes the true fast—loosing bonds, feeding the hungry, clothing the naked.[res:sefaria-isaiah-58]',        },
        {
          kind: 'hebrew',
          id: 'isaiah58-tzom',
          title: 'Tzom — "Fasting"',
          script: 'צוֹם',
          translit: '<strong>Tzom</strong> · fasting; abstaining from food',
          description: 'True fasting is not mere abstinence but justice and mercy.',
        },
        {
          kind: 'scripture',
          chapter: 58,
          lines: [
            plain(5, 'Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke?'),
            plain(6, 'Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house? when thou seest the naked, that thou cover him; and that thou hide not thyself from thine own flesh?'),
            plain(7, 'Then shall thy light break forth as the morning, and thine health shall spring forth speedily: and thy righteousness shall go before thee; the glory of the Lord shall be thy rereward.'),
            plain(8, 'Then shalt thou call, and the Lord shall answer; thou shalt cry, and he shall say, Here I am. If thou take away from the midst of thee the yoke, the putting forth of the finger, and speaking vanity;'),
            plain(9, 'And if thou draw out thy soul to the hungry, and satisfy the afflicted soul; then shall thy light rise in obscurity, and thy darkness be as the noonday.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa58-cry',
          html:
            'God tells the prophet: Cry aloud. Do not spare. Lift up your voice like a trumpet. Show the people their transgression. The people come to God with their fasts, seeking knowledge of His ways, asking for the ordinances of justice. But they practice the opposite. They quarrel, they oppress their workers, they are unjust[res:sefaria-isaiah-58-v1][res:bibleodyssey-isaiah-overview-58].',        },
        {
          kind: 'commentary',
          id: 'isa58-fast',
          html:
            'God asks: Is this the fast I have chosen? No. The chosen fast is to loose the bands of wickedness, to free the oppressed, to break every yoke. It is to feed the hungry, house the homeless, clothe the naked. It is to stop hiding from your own flesh—your own poor and suffering.',        },
        {
          kind: 'hebrew',
          id: 'isa58-natzar',
          title: 'Natzar — "Hide" (Restrain)',
          script: 'נִצַּר',
          translit: '<strong>Nitzar</strong> · to hide; to conceal; to keep back',
          description:
            'The verb natzar implies a deliberate hiding, a choosing not to see. God is saying: Do not hide from the needs of your own people. Do not pretend not to see their suffering.',
        },
        {
          kind: 'christ',
          id: 'isa58-christ-gospel',
          title: 'Christ Connection — The Gospel Made Visible',
          html:
            'In Matthew 25, Jesus describes the final judgment. "Then shall the King say unto them on his right hand, Come, ye blessed of my Father...For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink...Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Matt. 25:34–40). Christ identifies Himself with the hungry, the poor, the oppressed. To feed them is to feed Him. Isaiah 58 and Matthew 25 speak the same gospel: true faith is known not by religious practice, but by love for the needy.',        },
        {
          kind: 'carry',
          html:
            'We live in a culture that separates religion from justice. We can be faithful in prayer and indifferent to poverty. We can fast and oppress. Isaiah will not allow this separation. True fasting is breaking the chains of injustice. True prayer is answered when we draw out our soul to the hungry. Our relationship with God is tested by our treatment of the poor.',        },
        {
          kind: 'reflection',
          id: 'isa58-justice',
          prompt: 'How does your practice of faith connect to acts of justice and mercy? What would it look like to fast from indifference to the poor?',
        },
      ],
    },

    {
      ref: 'Isaiah 58:9–14',
      title: 'The Promise of Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 58,
          lines: [
            plain(9, 'Then shalt thou call, and the Lord shall answer; thou shalt cry, and he shall say, Here I am. If thou take away from the midst of thee the yoke, the putting forth of the finger, and speaking vanity;'),
            plain(10, 'And if thou draw out thy soul to the hungry, and satisfy the afflicted soul; then shall thy light rise in obscurity, and thy darkness be as the noonday.'),
            plain(11, 'And the Lord shall guide thee continually, and satisfy thy soul in drought, and make fat thy bones: and thou shalt be like a watered garden, and like a spring of water, whose waters fail not.'),
            plain(12, 'And they that shall be of thee shall build the old waste places: thou shalt raise up the foundations of many generations; and thou shalt be called, The repairer of the breach, The restorer of paths to dwell in.'),
            plain(13, 'If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the Lord, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words:'),
            plain(14, 'Then shalt thou delight thyself in the Lord; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the Lord hath spoken it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa58-light',
          html:
            'When the people turn from injustice and turn toward mercy, their light shall rise in obscurity. Their darkness shall be as noonday. God will answer their call, saying "Here I am." The Lord will guide them continually, satisfy their soul, make them like a watered garden whose waters never fail.',        },
        {
          kind: 'commentary',
          id: 'isa58-breach',
          html:
            'Those who practice justice will rebuild the waste places. They will raise up the foundations of many generations. They will be called "the repairer of the breach, the restorer of paths to dwell in." This is a calling to restoration, to healing the damage sin has caused, to making the world habitable again.',        },
        {
          kind: 'commentary',
          id: 'isa58-sabbath',
          html:
            'The chapter ends with a call to honor the Sabbath—not as a burden, but as a delight. To keep the Sabbath is to rest from our own works and remember that God sustains all things. When we do this, when we practice justice and honor God\'s holy day, then we shall delight in the Lord and ride upon the high places of the earth.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 58 teaches that faithfulness is not about whether you fast, but about whether you feed the hungry. Not about how many hours you pray, but about whether you break the chains of oppression. The Christian life is measured by its fruit: Are you healing? Are you restoring? Are you making justice flow like waters and righteousness like an ever-flowing stream?',        },
        {
          kind: 'reflection',
          id: 'isa58-repairer',
          prompt: 'Where do you see "breaches" that need repairing—injustice, poverty, oppression? What would it look like for you to be a "repairer of the breach" in your community?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 58 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-58',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 58',
      url: 'https://www.sefaria.org/Isaiah.58',
      description: 'Sefaria open-access source text and translations for Isaiah 58.',
    },
    {
      id: 'sefaria-isaiah-58-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 58 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.58',
      description: 'The Hebrew text of Isaiah 58 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-isaiah-overview-58',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/isaiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Isaiah.',
    },

  ],

  hasHebrew: true,
};
