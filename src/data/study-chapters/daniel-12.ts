import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 12 — The Time of the End
 *
 * Michael stands up. "And there shall be a time of trouble, such as never was since
 * there was a nation even to that same time." But in that time, the wise shall shine
 * as the brightness of the firmament. "And many of them that sleep in the dust of the
 * earth shall awake, some to everlasting life, and some to shame and everlasting
 * contempt." Daniel is told, "Go thy way till the end be: for thou shalt rest, and
 * stand in thy lot at the end of the days." Resurrection. Judgment. Final redemption.
 */
export const DANIEL_12: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 12,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Michael stands up—the great prince which standeth for the children of thy people. And there shall be a time of trouble, such as never was since there was a nation even to that same time. It is a prophecy that speaks across the ages. Persecution will come. Trials will come. The righteous will suffer. But in that very time, "thy people shall be delivered, every one that shall be found written in the book."',
    'And then comes the promise of resurrection—not merely survival, but a transformation. "And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt." The righteous shall shine as the stars forever and ever. And Daniel himself is told: "Go thy way till the end be: for thou shalt rest, and stand in thy lot at the end of the days." The story of Daniel does not end with him. It extends into a future he will not see, when the dead shall rise, when judgment comes, when the righteous inherit the kingdom prepared for them.',
  ],

  sections: [
    {
      ref: 'Daniel 12:1–4',
      title: 'The Time of Trouble and Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And at that time shall Michael stand up, the great prince which standeth for the children of thy people: and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book.'),
            plain(2, 'And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.'),
            plain(3, 'And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever.'),
            plain(4, 'But thou, O Daniel, shut up the words, and seal the book, even to the time of the end: many shall run to and fro, and knowledge shall be increased.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel12-michael',
          html: 'Michael stands up. This is not a beginning, but a rising to final action. He has been standing throughout Daniel&apos;s visions, warring against spiritual powers, guarding the people of God. Now, "at that time," he stands to defend them in the final conflict. The time of trouble is coming—a trial such as never was. But it is not unguarded. Michael stands for the people of God. And those who are written in the book—those whose names are recorded in God&apos;s register—shall be delivered[res:bibleodyssey-apocalyptic][res:sefaria-daniel-12].',
        },
        {
          kind: 'hebrew',
          id: 'daniel12-yadaat',
          title: 'Yadaat — "Sleep" (Sleep of Death)',
          script: 'יְדָעַת',
          translit: '<strong>Yadaat</strong> · sleep; the sleep of death; to rest',
          description:
            'The dead are described as sleeping in the dust of the earth. This is a common biblical metaphor for death. But the metaphor carries hope: sleep implies a waking. The dead do not sleep forever. There is a resurrection coming. "Many of them that sleep...shall awake." This is not the universal resurrection of all people, but a resurrection unto judgment—some to everlasting life, some to everlasting contempt.',
        },
        {
          kind: 'commentary',
          id: 'daniel12-wise',
          html: 'The wise shall shine as the brightness of the firmament. This is not merely victory, but transformation. The wise ones—those who understood the visions, who kept faith in the times of trouble, who turned many to righteousness—will shine like stars. Their light will be visible forever. They will endure eternally, their faithfulness vindicated, their suffering transformed into glory[res:cyrus-cylinder].',
        },
        {
          kind: 'commentary',
          id: 'daniel12-sealed',
          html: 'Daniel is told to seal up the words and the book until the time of the end. The prophecies are written. They are preserved. Even though they will not be fully understood until the end times arrive, they stand as a permanent record. "Knowledge shall be increased"—in the time of the end, these sealed words will be unsealed, and their meaning will be revealed. Until then, they remain as a testimony and a sign that God knows the future.',
        },
      ],
    },

    {
      ref: 'Daniel 12:5–13',
      title: 'The End and the Lot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'Then I Daniel looked, and, behold, there stood other two, the one on this side of the bank of the river, and the other on that side of the bank of the river.'),
            plain(6, 'And one said to the man clothed in linen, which was upon the waters of the river, How long shall it be to the end of these wonders?'),
            plain(7, 'And I heard the man clothed in linen, which was upon the waters of the river, when he held up his right hand and his left hand unto heaven, and sware by him that liveth for ever that it shall be for a time, times, and an half; and when he shall have accomplished to scatter the power of the holy people, all these things shall be finished.'),
            plain(8, 'And I heard, but I understood not: then said I, O my Lord, what shall be the end of these things?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel-12-sealed-time',
          html: 'Daniel saw visions; now he asks when. Three and a half times. The end draws close. Time itself bends toward restoration. Seal the scroll; let the faithful endure. The outcome is sure.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'And he said, Go thy way, Daniel: for the words are closed up and sealed till the time of the end.'),
            plain(10, 'Many shall be purified, and made white, and tried; but the wicked shall do wickedly: and none of the wicked shall understand; but the wise shall understand.'),
            plain(11, 'And from the time that the daily sacrifice shall be taken away, and the abomination that maketh desolate set up, there shall be a thousand two hundred and ninety days.'),
            plain(12, 'Blessed is he that waiteth, and cometh to the thousand three hundred and five and thirty days.'),
            plain(13, 'But go thou thy way till the end be: for thou shalt rest, and stand in thy lot at the end of the days.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel12-times',
          html:
            'The question is asked: How long until the end? The answer is given in coded language—a time, times, and an half. Three and a half years. A year. Two years. Half a year. The number speaks of a period of trial, of testing, of the scattering of the power of the holy people. And when that time is accomplished, all these things shall be finished. History is not endless. It has boundaries. It will come to an end. And at that end, God&apos;s purposes will be consummated.',
        },
        {
          kind: 'hebrew',
          id: 'daniel12-seelot',
          title: 'Seelot — "Stand in thy Lot" (Inheritance)',
          script: 'סִלּוֹת',
          translit: '<strong>Seelot</strong> · lot; portion; inheritance; position',
          description:
            'Daniel is told to "stand in thy lot at the end of the days." His lot is his place, his portion, his inheritance. He will not stand to lead the final victory—he will rest before that time comes. But he will "stand in his lot"—he will receive his portion in the resurrection, his inheritance in the kingdom of God. Every believer has a lot assigned to them in God&apos;s redemptive plan.',
        },
        {
          kind: 'commentary',
          id: 'daniel12-rest',
          html:
            'Daniel is told: "Go thy way till the end be: for thou shalt rest." These are gentle words spoken to an old man who has served God faithfully through decades of exile. He can rest. His work is done. He has been faithful. He has seen visions. He has interpreted dreams. He has stood in the furnace, in the den of lions, in the courts of kings—always faithful, always true. Now he can rest. And at the end of the days, when the dead awake, Daniel will stand in his lot, his inheritance secure, his faithfulness vindicated.',
        },
        {
          kind: 'christ',
          id: 'daniel12-christ-end',
          title: 'Christ Connection — The Resurrection and the End',
          html:
            'Christ is the fulfillment of all that Daniel prophesies. He is the resurrection and the life. In Him, the dead are awakened. He has overcome death. And He is the judge of all people. At His coming, the wise shall shine as the stars forever. The wicked shall be judged with shame and contempt. Christ is "the time of the end"—He is both its beginning (in His first coming and resurrection) and its consummation (in His return). Every prophecy in Daniel ultimately points to Him. He is the stone cut without hands. He is the Son of Man enthroned. He is the one who destroys all earthly powers and establishes a kingdom that shall never be destroyed.',
        },
        {
          kind: 'carry',
          html:
            'The book of Daniel ends not with triumph in the visible world, but with the promise of a triumph yet to come. Daniel himself is told simply to rest. His work is done. But those who come after are given a promise: at the end of the days, the wise shall shine as the stars. The righteous shall be raised to everlasting life. And those who belong to God shall receive their lot, their inheritance, their place in the kingdom that cannot be shaken. In the meantime, we are called to faithfulness—to be wise, to turn many to righteousness, to refuse to compromise, to trust in God even when all earthly powers seem arrayed against us.',
        },
        {
          kind: 'reflection',
          id: 'daniel12-lot',
          prompt: 'Daniel was told to "rest" and "stand in thy lot at the end of the days." What does it mean for you to find your rest and your lot in God&apos;s plan, rather than seeking validation or vindication in the kingdoms of this world?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And many of them that sleep in the dust of the earth shall awake, some to everlasting life...And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 12 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-apocalyptic',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apocalyptic Literature',
      url: 'https://www.bibleodyssey.org/dictionary/apocalypse/',
      description: 'SBL entry on the apocalyptic genre exemplified by Daniel.',
    },
    {
      id: 'cyrus-cylinder',
      kind: 'museum',
      source: 'British Museum',
      label: 'Cyrus Cylinder',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA90920',
      description: 'Persian edict of Cyrus authorizing return of exiled peoples (ca. 539 BCE), fulfilling Daniel&apos;s prophecy.',
    }
    {
      id: 'sefaria-daniel-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Daniel.12',
      description: 'The Hebrew text of Daniel 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
