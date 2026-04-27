import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_7: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 7,
  intros: [
    'From the brink of destruction, the Jews are saved. Ptolemy reverses his decree. The enslaved are freed, their goods restored. The oppressor becomes the deliverer of the message.',
    'The Jews return to Jerusalem with songs and praises. They establish a feast of remembrance—so that the next generation will know what God has done.',
  ],
  sections: [
    {
      ref: '3 Maccabees 7:1–15',
      title: 'The Reversal of the Decree',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [
          plain(1, 'And Ptolemy made a proclamation throughout all Egypt, saying, Let all the Jews go free, and restore unto them their goods and their lands.'),
          plain(7, 'And Ptolemy himself did send letters unto all his officers, saying, Treat the Jews well, for the God of heaven has shown His power in their behalf.'),
          plain(10, 'And the Jews were released from their bondage, and they prepared for their return to Jerusalem.'),
        ] },
        { kind: 'commentary', id: 'mac3-7-reversal', html: 'The oppressor becomes the herald of deliverance. Ptolemy not only frees the Jews; he commands respect for them. His decree of death becomes a decree of honor. God\'s power is complete.' },
        { kind: 'hebrew', id: 'mac3-7-shofar', title: 'Shofar — Trumpet; Proclamation', script: 'שׁוֹפָר', translit: '<strong>Shofar</strong> · trumpet; call of proclamation', description: 'The shofar announces God\'s acts. Here, even through Ptolemy\'s mouth, the shofar sounds—proclaiming deliverance.' },
        { kind: 'christ', id: 'mac3-7-christ', title: 'Christ Connection — The Jubilee', html: 'Jesus opens His ministry in the synagogue and proclaims the Year of Jubilee—when debts are forgiven, slaves are freed, and God\'s restoration is announced.' },
        { kind: 'carry', html: 'From what bondage have you been freed? How will you celebrate and remember? What proclamation will you make?' },
        { kind: 'reflection', id: 'mac3-7-restore', prompt: 'The Jews\' goods were restored. What has God restored to you? What restoration are you still waiting for?' },
      ],
    },
    {
      ref: '3 Maccabees 7:16–42',
      title: 'The Feast of Remembrance',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [
          plain(16, 'And when they came to Jerusalem, they offered sacrifices unto the Lord, and they kept a feast of deliverance and praise.'),
          plain(26, 'And Judas the Maccabee said unto the people, Let this day be remembered forever, that our children may know what the Lord has done.'),
          plain(33, 'And they established a feast unto the Lord, saying, This is the day when the Lord delivered us from death, and turned our mourning into joy.'),
        ] },
        { kind: 'commentary', id: 'mac3-7-feast', html: 'Memory is sacred. The Jews institutionalize the festival so that their children—and their children\'s children—will know what God has done. The feast is an act of testimony.' },
        { kind: 'greek', id: 'mac3-7-mnemosynon', title: 'Mnemosynon — Memorial; Remembrance', script: 'μνημόσυνον', translit: '<strong>Mnemosynon</strong> · memorial; something to remember', description: 'A mnemosynon is more than memory; it is a living act of witness. Each observance re-presents the deliverance as if it happened now.' },
        { kind: 'christ', id: 'mac3-7-christ2', title: 'Christ Connection — Do This in Remembrance', html: 'Jesus institutes the Eucharist: "Do this in remembrance of me." The feast becomes the place where salvation is made present again.' },
        { kind: 'carry', html: 'What deliverance do you need to remember? How will you pass on the story to the next generation? What feast will mark God\'s faithfulness?' },
        { kind: 'reflection', id: 'mac3-7-joy', prompt: 'Mourning turned to joy. In your own life, where has sorrow given way to celebration? How do you hold both at once?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Ptolemy made proclamation: "Let all the Jews go free." The people kept a feast of deliverance, saying: "This is the day the Lord delivered us. Our children shall know His works forever."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 7 · Study Guide',
  },
};
