import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 5 — Call and New Order
 *
 * Jesus stands by the Lake of Gennesaret. Fishermen wash their nets. He
 * enters Simon&apos;s boat and teaches. When He finishes, He tells Simon to
 * let down the nets. Simon protests—they have fished all night and taken
 * nothing. But they obey. Their nets are so full of fish they begin to break.
 * Simon falls at Jesus&apos; feet: "Depart from me; for I am a sinful man, O
 * Lord." Jesus calls him: "From henceforth thou shalt catch men." Later,
 * Jesus calls Levi, a tax collector. He eats with publicans and sinners.
 * The Pharisees question it. Jesus says: "New wine is poured into new
 * bottles." The kingdom requires transformation.
 */
export const LUKE_5: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Healing of the Lepers/i,
    caption: 'Luke 5',
  },
  intros: [
    'Jesus stands by the Lake of Gennesaret, surrounded by multitudes pressing upon Him. He sees two boats. The fishermen have left them to wash their nets. Jesus enters Simon&apos;s boat and asks him to launch out into the deep. Jesus sits and teaches the multitude from the boat. When He finishes, He turns to Simon: "Let down your nets for a draught." Simon hesitates. They have fished all night and caught nothing. But at Jesus&apos; word, he obeys. The nets are filled with so many fish they begin to break.',
    'Simon&apos;s partners, James and John, come to help. All are amazed. Simon falls at Jesus&apos; feet: "Depart from me; for I am a sinful man, O Lord." But Jesus says to him: "Fear not; from henceforth thou shalt catch men." He calls them to become fishers of men. They forsake all and follow Jesus.',
  ],

  sections: [
    {
      ref: 'Luke 5:1–26',
      title: 'Calling and Cleansing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'Now when he had left speaking, he said unto Simon, Launch out into the deep, and let down your nets for a draught.'),
            plain(5, 'And Simon answering said unto him, Master, we have toiled all the night, and have taken nothing: nevertheless at thy word I will let down the net.'),
            plain(8, 'When Simon Peter saw it, he fell down at Jesus&apos; knees, saying, Depart from me; for I am a sinful man, O Lord.'),
            plain(10, 'And so was also James, and John, the sons of Zebedee, which were partners with Simon. And Jesus said unto Simon, Fear not; from henceforth thou shalt catch men.'),
            plain(11, 'And when they had brought their ships to land, they forsook all, and followed him.'),
            plain(13, 'And he put forth his hand, and touched him, saying, I will: be thou clean. And immediately the leprosy departed from him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke5-obedience',
          html:
            'Simon has fished all night and caught nothing. His nets are clean but empty. Jesus asks him to launch into the deep and let down the nets. Simon protests—he knows fishing. He has worked all night. But he adds: "Nevertheless at thy word I will let down the net."[res:bible-odyssey-faith] This is obedience. This is faith. He acts against reason, against his own experience, at the word of Jesus.',
        },
        {
          kind: 'greek',
          id: 'luke5-halieus',
          title: 'Halieus — Fisher; One Who Fishes',
          script: 'ἁλιεύς',
          translit: '<strong>Halieus</strong> · fisherman; one who fishes',
          description:
            'Simon is a halieus—a skilled fisherman. Yet Jesus tells him: "From henceforth thou shalt catch men." Jesus takes Simon&apos;s skill, his knowledge, his labor, and transforms it. Simon will still "fish," but he will draw people into the kingdom, not into boats.',
        },
        {
          kind: 'commentary',
          id: 'luke5-sinful',
          html:
            'When Simon sees the miracle—the nets so full they nearly break—he recognizes the divine presence. His response is confession: "I am a sinful man, O Lord." The awareness of holiness brings awareness of sin. But Jesus does not condemn him. Jesus reassures him: "Fear not." And then calls him: "From henceforth thou shalt catch men." The call comes after the confession, not before it.',
        },
        {
          kind: 'commentary',
          id: 'luke5-forsake',
          html:
            'When the disciples bring their ships to land, they forsake all and follow Jesus. Not reluctantly. Not after making conditions. They "forsook all." This is complete surrender. This is the cost of discipleship—the nets, the boats, the partnership, the livelihood. All left behind to follow the one who called them.',
        },
        {
          kind: 'christ',
          id: 'luke5-christ-call',
          title: 'Christ Connection — Calling the Fishermen',
          html:
            'The calling of the fishermen reveals Jesus&apos; authority. He commands nature. He reads the heart of Simon. He transforms a failed night of labor into a miracle. He calls rough, practical men to become apostles. The kingdom gathers its first followers not from the elite, but from the fishermen.',
        },
        {
          kind: 'carry',
          html:
            'Jesus also heals a leper who begs Him: "Lord, if thou wilt, thou canst make me clean." Jesus touches him—breaking every law of cleanliness—and says: "I will; be thou clean." The leper is healed. But Jesus instructs him to tell no one, to go show himself to the priest. Even in healing, there is order, there is obedience to the law.',
        },
        {
          kind: 'reflection',
          id: 'luke5-nets-reflect',
          prompt: 'What nets have you let down at Jesus&apos; word, against your own experience? What did you find?',
        },
      ],
    },

    {
      ref: 'Luke 5:27–39',
      title: 'Levi and the New Order',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(27, 'And after these things he went forth, and saw a publican named Levi, sitting at the receipt of custom: and he said unto him, Follow me.'),
            plain(28, 'And he left all, rose up, and followed him.'),
            plain(29, 'And Levi made him a great feast in his own house: and there was a great company of publicans and others that sat down with them.'),
            plain(30, 'But their scribes and Pharisees murmured against his disciples, saying, Why do ye eat and drink with publicans and sinners?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke-5-78mid-1',
          html:
            'Jesus calls Simon Peter from his nets; the disciple leaves everything. From trade comes trust; from the sea comes a fisher of men.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(31, 'And Jesus answering said unto them, They that are whole need not a physician; but they that are sick.'),
            plain(36, 'And he spake also a parable unto them; No man putteth a piece of new cloth upon an old garment; for then both the new maketh a rent, and the piece that was taken out of the new agreeth not with the old.'),
            plain(37, 'And no man putteth new wine into old bottles; else the new wine will burst the bottles, and be spilled, and the bottles shall be marred.'),
            plain(38, 'But new wine must be poured into new bottles; and both are preserved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke5-levi',
          html:
            'Jesus calls Levi, a tax collector. Levi sits at the receipt of custom—he works for the Roman authorities, collecting taxes from his own people. He is a collaborator, despised. Yet Jesus says to him simply: "Follow me." And Levi leaves all and follows. The completeness of Levi&apos;s response parallels Simon&apos;s. Both "forsake all" to follow Jesus.',
        },
        {
          kind: 'commentary',
          id: 'luke5-feast',
          html:
            'Levi celebrates his new life. He makes a great feast in his house and invites his friends—publicans, sinners, people of disrepute. Jesus reclines at the table with them. The Pharisees and scribes are scandalized. Jesus eats with sinners[res:intertextual-table-fellowship]. This violates their understanding of holiness. But Jesus says: "They that are whole need not a physician; but they that are sick." Jesus has come for the lost, the broken, the despised.',
        },
        {
          kind: 'greek',
          id: 'luke5-therapeuō',
          title: 'Therapeuō — Heal; Serve; Attend',
          script: 'θεραπεύω',
          translit: '<strong>Therapeuō</strong> · heal; cure; serve; attend to',
          description:
            'Jesus is the physician. A therapeuō is a healer. Those who recognize their sickness come to Jesus. He heals. Those who believe themselves whole—who think they need no healing—do not come to Him.',
        },
        {
          kind: 'commentary',
          id: 'luke5-newwine',
          html:
            'Jesus speaks in parables. New wine cannot be poured into old bottles[res:sefaria-covenant-renewal]. Old bottles are brittle, hardened. New wine is living, fermenting, expanding. The pressure will burst the old bottles. The kingdom of God is new wine. The old forms of righteousness—the law as practiced by the Pharisees, the boundaries they draw, their understanding of holiness—are old bottles. They cannot contain what God is doing. God is doing a new thing.',
        },
        {
          kind: 'christ',
          id: 'luke5-christ-neworder',
          title: 'Christ Connection — The Kingdom Transformation',
          html:
            'The calling of Levi and the new-wine parable both point to the same truth: Jesus brings a new order. The boundaries that separated holy from unholy, righteous from sinner, are being redrawn. Jesus draws near to those the law and tradition had excluded. This is not the end of righteousness. It is the transformation of what righteousness means.',
        },
        {
          kind: 'reflection',
          id: 'luke5-newwine-reflect',
          prompt: 'What old forms and practices have you held onto, even though new wine is coming? Where do you need to become new bottles?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am a sinful man, O Lord. From henceforth thou shalt catch men. New wine must be poured into new bottles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 5 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-faith',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Faith & Trust in Jesus',
      url: 'https://www.bibleodyssey.org/dictionary/faith/',
      description: 'Open-access entry on biblical faith as trust and obedience to Jesus&apos; word, seen in Simon&apos;s willingness to let down nets at His command.',
    },
    {
      id: 'intertextual-table-fellowship',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Table Fellowship & Covenant (OT ↔ NT)',
      url: 'https://intertextual.bible/search?q=Psalms+23+Luke+5+29',
      description: 'Intertextual links showing how Jesus&apos; eating with sinners fulfills Old Testament images of God&apos;s hospitable covenant and restoration.',
    },
    {
      id: 'sefaria-covenant-renewal',
      kind: 'study',
      source: 'Sefaria',
      label: 'New Covenant & Renewal (Jeremiah 31)',
      url: 'https://www.sefaria.org/Jeremiah.31.31-34?lang=bi',
      description: 'Torah foundation for Jesus&apos; teaching on new wine, showing how God promises a new covenant that transforms hearts and practice.',
    },
  ],

  hasHebrew: false,
};
