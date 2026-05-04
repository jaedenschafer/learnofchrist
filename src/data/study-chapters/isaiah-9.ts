import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 9 — The Child Born, the Son Given
 *
 * "Unto us a child is born, unto us a son is given: and the government shall be upon his
 * shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting
 * Father, The Prince of Peace." This is one of the most exalted prophecies of the Messiah
 * in all of Scripture. The birth of a child and the establishment of His government herald
 * the end of darkness, the multiplication of peace, and the eternal reign of the offspring of David.
 */
export const ISAIAH_9: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 9,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /The Mystical Nativity/i,
    caption: 'Isaiah 9',
  },
  intros: [
    'Isaiah begins with the image of darkness and light. "The people that walked in darkness have seen a great light: they that dwell in the land of the shadow of death, upon them hath the light shined." A people oppressed, a people living in the shadow of death and despair, suddenly sees a great light. And the source of that light is a child. Not a military deliverer, not a political strategist, but a child born. This child will bear the government upon His shoulder. His names are given—names that declare His nature and His purpose: Wonderful, Counsellor, Mighty God, Everlasting Father, Prince of Peace.',
    'The vision stretches forward to the establishment of His kingdom. "Of the increase of his government and peace there shall be no end, upon the throne of David, and upon his kingdom, to order it, and to establish it with judgment and with justice from henceforth even for ever. The zeal of the Lord of hosts will perform this." This is the promise that sustains all of Isaiah&apos;s prophecy: the Messiah will come, will establish His kingdom, and will reign in righteousness forever.',
  ],

  sections: [
    {
      ref: 'Isaiah 9:1–7',
      title: 'The Birth of the Messiah: Darkness to Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(2, 'The people that walked in darkness have seen a great light: they that dwell in the land of the shadow of death, upon them hath the light shined.'),
            plain(3, 'Thou hast multiplied the nation, and not increased the joy: they joy before thee according to the joy in harvest, and as men rejoice when they divide the spoil.'),
            plain(5, 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.'),
            plain(6, 'Of the increase of his government and peace there shall be no end, upon the throne of David, and upon his kingdom, to order it, and to establish it with judgment and with justice from henceforth even for ever. The zeal of the Lord of hosts will perform this.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah9-darkness-light',
          html:
            'The opening image is stark. People walking in darkness. People dwelling in the land of the shadow of death. But suddenly, "they have seen a great light." The shift is abrupt, miraculous. And the source of this light is described in terms of joy and increase—the joy of harvest, the joy of those dividing spoil after a victory. This is deliverance. This is restoration. This is what it means when the light breaks through the darkness.[res:sefaria-isaiah-9]',
        },
        {
          kind: 'commentary',
          id: 'isaiah9-child-born',
          html:
            'The announcement is wonderful: "Unto us a child is born, unto us a son is given." The coming of the Messiah is described with the most intimate language possible—a child born, a son given. This is not distant theology. This is the breaking in of God&apos;s family into human history. And this child will bear the government upon His shoulder—not through military conquest, but through the weight of authority that God Himself will place upon Him.[res:intertextual-isaiah-9-matthew]',
        },
        {
          kind: 'hebrew',
          id: 'isaiah9-pele',
          title: 'Pele — "Wonderful" or "Miraculous"',
          script: 'פֶּלֶא',
          translit: '<strong>Pele</strong> · wonder, miracle, a thing beyond human comprehension',
          description:
            'The first name Isaiah gives the coming King is "Wonderful"—not merely pleasant or admirable, but miraculous, beyond human understanding. He is Pele Yoetz—a Wonderful Counsellor—whose wisdom transcends human knowledge.',
        },
        {
          kind: 'commentary',
          id: 'isaiah9-names',
          html:
            'The names Isaiah gives the child are progressive revelations of His nature. Wonderful Counsellor—His wisdom is beyond human measure. Mighty God—He possesses divine power. Everlasting Father—He will endure forever and will care for His people as a father cares for his children. Prince of Peace—He will establish peace not merely as the absence of conflict, but as the restoration of right relationship between God and creation. Each name is a promise.[res:intertextual-isaiah-9-nt]',
        },
        {
          kind: 'christ',
          id: 'isaiah9-christ-messiah',
          title: 'Christ Connection — The Messiah King',
          html:
            'In the New Testament, this passage is the gold standard for messianic prophecy. Every detail points toward Jesus. He is born as a child. He is given as the Son of God. The government of all things is placed upon His shoulders (Ephesians 1:22; Hebrews 1:3). His wisdom as Counsellor guides believers. His power as Mighty God sustains all creation. His care as Everlasting Father protects His people. His peace as Prince of Peace reconciles humanity to God and to one another. And His kingdom knows no end. He sits on the throne of David in a reign that will last forever.',
        },
        {
          kind: 'carry',
          html:
            'What would it mean to live under the government of this King—the Wonderful Counsellor who offers wisdom, the Mighty God who offers strength, the Everlasting Father who offers care, the Prince of Peace who offers reconciliation? The promise of Isaiah 9 is that we do not have to walk in darkness. The light has come. We have been given a King. We can walk in the light of His presence and the security of His rule.',
        },
        {
          kind: 'reflection',
          id: 'isaiah9-king-reflect',
          prompt: 'Which of the names of the coming King—Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace—do you most need in your life right now? How can you place yourself more fully under His government and rule?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 9:5–6 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 9',
      url: 'https://www.sefaria.org/Isaiah.9',
      description: 'Sefaria open-access source text and translations for Isaiah 9.',
    },
    {
      id: 'intertextual-isaiah-9-matthew',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 9 ↔ Matthew Intertextual Links',
      url: 'https://intertextual.bible/',
      description: 'Connections between Isaiah 9 and New Testament fulfillment, especially Matt 1–12.',
    },
    {
      id: 'intertextual-isaiah-9-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 9 → NT (Child Born)',
      url: 'https://intertextual.bible/',
      description: 'The child born prophecy and its New Testament resonances to Christ.',
    },
  ],

  hasHebrew: true,
};
