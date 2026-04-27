import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_13: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 13,

  intros: [
    'The epistle concludes not with grand theology alone, but with practical exhortation. Let brotherly love continue. Be hospitable. Remember the prisoners. Honor marriage. Be content. Flee idolatry. And remember Jesus—the same yesterday, today, and forever. The theology must bear fruit in conduct. The contemplation of Christ must translate into love.',
    'The final words emphasize Christ&apos;s unchangeability. In a world of flux, He is constant. This grounds hope, inspires faithfulness, and calls believers to build their lives on the solid rock of Jesus.',
  ],

  sections: [
    {
      ref: 'Hebrews 13:1–9',
      title: 'Love and Fidelity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Let brotherly love continue.'),
            plain(2, 'Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.'),
            plain(4, 'Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.'),
            plain(5, 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.'),
            plain(8, 'Jesus Christ the same yesterday, and to day, and for ever.'),
            plain(9, 'Be not carried about with divers and strange doctrines. For it is a good thing that the heart be established with grace; not with meats, which have not profited them that have been occupied therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-love-continue',
          html:
            'The epistle began with profound theology. It ends with tender exhortation. "Let brotherly love continue." Not just at the beginning. Continuously. This is the test of whether doctrine has taken root.',
        },
        {
          kind: 'greek',
          id: 'heb13-xenodocheo',
          title: 'Xenodocheo — Entertain Strangers',
          script: 'ξενοδοχέω',
          translit: '<strong>Xenodocheo</strong> · to host strangers; to show hospitality',
          description:
            'Hospitality is not a cultural nicety. It is a spiritual practice. You never know whom you are entertaining. An angel of God may knock on your door. Generosity opens the heart to God.',
        },
        {
          kind: 'commentary',
          id: 'heb13-never-forsake',
          html:
            'In a passage on contentment, the author recalls God&apos;s promise: "I will never leave thee, nor forsake thee." Contentment rests on this assurance. You lack nothing that His presence cannot supply.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-same',
          title: 'Christ Connection — Unchanging Certainty',
          html:
            'Jesus is "the same yesterday, and to day, and for ever." When everything else shifts, He is constant. When your faith wavers, He remains. This is your anchor in an uncertain world.',
        },
        {
          kind: 'carry',
          html:
            'Practice what you believe. Love your brothers. Welcome strangers. Honor marriage. Be content. Refuse false doctrines. But above all, remember that Jesus is constant. He will never leave you. Build your life on this truth.',
        },
        {
          kind: 'reflection',
          id: 'heb13-today',
          prompt: 'How does Jesus being "the same yesterday, and to day, and for ever" change your confidence? Where do you need His constancy today?',
        },
      ],
    },

    {
      ref: 'Hebrews 13:20–25',
      title: 'The God of Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(20, 'Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep, through the blood of the everlasting covenant,'),
            plain(21, 'Make you perfect in every good work to do his will, working in you that which is wellpleasing in his sight, through Jesus Christ; to whom be glory for ever and ever. Amen.'),
            plain(24, 'Salute all them that have the rule over you, and all the saints. They of Italy salute you.'),
            plain(25, 'Grace be with you all. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-god-peace',
          html:
            'The epistle ends with the benediction: "The God of peace." The God who brought Jesus from the dead is the God of peace. Not peace from struggle, but peace within it. Stability within chaos.',
        },
        {
          kind: 'greek',
          id: 'heb13-poimen',
          title: 'Poimen — Shepherd',
          script: 'ποιμήν',
          translit: '<strong>Poimen</strong> · shepherd; pastor; tender of flocks',
          description:
            'Jesus is "that great shepherd of the sheep." He tends, protects, guides, feeds. You are among His flock. You are known by name. You are safe in His care.',
        },
        {
          kind: 'commentary',
          id: 'heb13-everlasting-covenant',
          html:
            '"Through the blood of the everlasting covenant." The covenant cannot be broken. It rests on Christ&apos;s blood. It endures forever. You are secure within it.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-shepherd-peace',
          title: 'Christ Connection — Shepherd and Peace',
          html:
            'Jesus is your shepherd. The God of peace brought Him from the dead. He raised your Shepherd to care for you. Whatever you face, you are not alone. The Shepherd is with you. The God of peace sustains all.',
        },
        {
          kind: 'carry',
          html:
            'This is the message of Hebrews: Christ is supreme. He is your High Priest, your Shepherd, your way to God. Trust Him. Follow Him. Build everything on Him. Grace be with you.',
        },
        {
          kind: 'reflection',
          id: 'heb13-shepherd',
          prompt: 'How have you experienced Jesus as your shepherd? What brings you peace knowing the God of peace brought Him from the dead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Jesus Christ the same yesterday, and to day, and for ever. Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep, through the blood of the everlasting covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 13 · Study Guide',
  },

  hasHebrew: false,
};
