import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_1: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 1,
  intros: [
    'Ptolemy IV, king of Egypt, wins a great victory against Antiochus III. His power seems limitless. He decides to enter the holiest place of the Jerusalem temple—a violation no pious king would dare.',
    'But as he approaches, God acts. Ptolemy is struck dumb, paralyzed, unable to move. The invincible king meets the one who cannot be conquered.',
  ],
  sections: [
    {
      ref: '3 Maccabees 1:1–9',
      title: 'The Triumph and the Ambition',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(1, 'Now Ptolemy, having been victorious in his wars, did boast greatly in his heart, saying, I have overcome many nations.'),
          plain(8, 'Wherefore he spake unto those that were about him, saying, I will even go into the holy of holies of the God of the Jews, that I may know what mysteries are hidden within.'),
        ] },
        { kind: 'commentary', id: 'mac3-1-ambition', html: 'Victory feeds pride. Ptolemy, drunk on conquest, believes no boundary applies to him. He will enter the holiest place—a place forbidden even to most priests. His ambition is not knowledge but dominion.' },
        { kind: 'hebrew', id: 'mac3-1-kodesh', title: 'Kodesh Kodashim — The Holy of Holies', script: 'קֹדֶשׁ הַקָּדָשִׁים', translit: '<strong>Kodesh Kodashim</strong> · the holy of holies; the inner sanctuary', description: 'The holy of holies is where God dwells with His people. No human may enter except the high priest once yearly. It is the boundary between divine and human.' },
        { kind: 'christ', id: 'mac3-1-christ', title: 'Christ Connection — The Veil Torn', html: 'Jesus tears the veil between human and divine. He enters the holy of holies once for all, offering access to God not through human ambition, but through His sacrifice.' },
        { kind: 'carry', html: 'What boundaries have you crossed? What sacred spaces have you tried to claim by force? What would change if you waited for the door to be opened?' },
        { kind: 'reflection', id: 'mac3-1-mysteries', prompt: 'Ptolemy wanted to "know what mysteries are hidden." What hidden things are you trying to seize? What if you were invited instead?' },
      ],
    },
    {
      ref: '3 Maccabees 1:10–29',
      title: 'God\'s Judgment on Pride',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(16, 'But as he was about to enter, the Lord struck him with a great fear, so that he could not move forward.'),
          plain(24, 'And all the people that were gathered said, Great is the God of Israel, who hath protected His sanctuary from the unclean and the proud.'),
          plain(25, 'And Ptolemy, sore amazed at that which had befallen him, acknowledged the power of the Most High.'),
        ] },
        { kind: 'commentary', id: 'mac3-1-struck', html: 'The invincible king is stopped by invisible power. He cannot move, cannot speak. God\'s judgment is not violence but paralysis—the silencing of arrogance.' },
        { kind: 'greek', id: 'mac3-1-phobos', title: 'Phobos — Fear; Holy Reverence', script: 'φόβος', translit: '<strong>Phobos</strong> · fear; awe; reverence before God', description: 'Phobos before God is not terror but the trembling recognition of His reality. It is the beginning of wisdom.' },
        { kind: 'christ', id: 'mac3-1-christ2', title: 'Christ Connection — The Lord Whom All Fear', html: 'Even demons recognize Jesus and cry out. There is a fear that comes from truth—the acknowledgment of a reality greater than ourselves.' },
        { kind: 'carry', html: 'What would it mean for you to be "sore amazed" at God\'s power? Not as punishment, but as awakening to what is real?' },
        { kind: 'reflection', id: 'mac3-1-acknowledge', prompt: 'Ptolemy acknowledged God\'s power only after judgment fell. Why do we wait so long to recognize what we have known all along?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Great is the God of Israel, who hath protected His sanctuary from the unclean and the proud. When the king tried to enter the holy place, the Lord struck him, and Ptolemy acknowledged the power of the Most High.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 1 · Study Guide',
  },
};
