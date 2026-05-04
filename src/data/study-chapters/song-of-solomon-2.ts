import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 2 — The Rose and the Vineyard
 *
 * "I am the rose of Sharon, and the lily of the valleys." The Bride describes
 * herself with confidence. She is a flower, delicate and beautiful. "My beloved
 * is mine, and I am his: he feedeth among the lilies." The mutual possession
 * is central—she is his, he is hers. They belong to each other. And the Song
 * paints the bliss of their union: springtime has come, the birds sing, the
 * beloved knocks at the window, inviting her to join him in the beauty of the
 * awakening world.
 */
export const SONG_2: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /The Rest of the/i,
    caption: 'Song of Solomon 2',
  },
  intros: [
    'The Bride continues her self-description. She is a flower—not the rarest or most expensive flower, but a flower nonetheless. Sharon is a plain, ordinary; a lily of the valleys is simple, unpretentious. And she asserts her beauty in these simple terms. She does not need to be exotic to be lovely. And then the great affirmation: "My beloved is mine, and I am his." The relationship is mutual. She possesses him as he possesses her. There is equality, reciprocity, a belonging that goes both directions.',
    'The Song then moves into a section of spring beauty. The beloved invites the bride to arise and come away. The time of singing has come. The fig trees are budding. The flowers appear. The birds sing. It is a vision of paradise, of a world made new by the presence of love. But it is not merely romantic escape. The beloved calls her to arise, to move, to be active. And there is also a note of caution: "Take us the foxes, the little foxes, that spoil the vines: for our vines have tender grapes." Even in paradise, there are threats. Even in love, vigilance is required.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 2:1–9',
      title: 'The Rose and the Mutual Possession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'I am the rose of Sharon, and the lily of the valleys.'),
            plain(2, 'As the lily among thorns, so is my love among the daughters.'),
            plain(3, 'As the apple tree among the trees of the wood, so is my beloved among the sons. I sat down under his shadow with great delight, and his fruit was sweet to my taste.'),
            plain(4, 'He brought me to the banqueting house, and his banner over me was love.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-2-beloved-voice',
          html:
            'Hear him leaping on the mountains. His voice breaks through. Come away, my love. Winter is past. The flowers appear. The time of singing has come. Love calls. The world awakens. She rises to answer.[res:penn-museum-egyptian-love-poetry]',
        },
        {
          kind: 'hebrew',
          id: 'song2-dod-mi',
          title: 'Dod Mi — "My Beloved"',
          script: 'דּוֹדִי',
          translit: '<strong>Dodi</strong> · my beloved',
          description: 'The possessive form of dod emphasizes belonging and intimacy.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(5, 'Stay me with flagons, comfort me with apples: for I am sick of love.'),
            plain(6, 'His left hand is under my head, and his right hand doth embrace me.'),
            plain(7, 'I charge you, O ye daughters of Jerusalem, by the roes, and by the hinds of the field, that ye stir not up, nor awake my love, till he please.'),
            plain(8, 'The voice of my beloved! behold, he cometh leaping upon the mountains, skipping upon the hills.'),
            plain(9, 'My beloved is like a roe or a young hart: behold, he standeth behind our wall, he looketh forth at the windows, showing himself through the lattice.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song2-rose-lily',
          html:
            '"I am the rose of Sharon, and the lily of the valleys." The Bride speaks of herself with quiet confidence. She is not rare—Sharon was a plain, and lilies grew in the valleys. But she is a flower. She is beautiful. And then the Beloved speaks: "As the lily among thorns, so is my love among the daughters." In his eyes, she stands out. She is distinguished among all other women. She is his beloved, singular and unique.[res:sefaria-song-2]',
        },
        {
          kind: 'commentary',
          id: 'song2-apple-tree',
          html:
            '"As the apple tree among the trees of the wood, so is my beloved among the sons." The Bride reciprocates, describing her Beloved as an apple tree stands out among ordinary trees—offering shade and fruit. She sat under his shadow with delight. His fruit was sweet. The image combines protection, provision, and pleasure. To be with him is to be cared for and satisfied.[res:met-museum-egyptian-poetry]',
        },
        {
          kind: 'commentary',
          id: 'song2-banqueting-house',
          html:
            '"He brought me to the banqueting house, and his banner over me was love." The Beloved brings her to a place of celebration. He sets his banner—his mark of possession and protection—over her. His banner is love. She belongs to him, and his ownership is expressed as love, not domination.',
        },
        {
          kind: 'commentary',
          id: 'song2-sick-love',
          html:
            '"I am sick of love." The Bride speaks of her love as a sickness, an overwhelming condition. She is weak with desire, weak with longing. She asks to be sustained with raisins and apples—physical comforts to sustain the body while her emotional state overwhelms her.',
        },
        {
          kind: 'commentary',
          id: 'song2-leaping-hills',
          html:
            '"The voice of my beloved! behold, he cometh leaping upon the mountains, skipping upon the hills." The Bride hears her Beloved approaching. He comes with joy, with vigor, with exuberance. He is young, vital, eager. He comes leaping, not creeping. His joy in coming to her is evident in his movement.',
        },
        {
          kind: 'carry',
          html:
            'The Song affirms mutual desire. The Bride wants to be wanted. The Beloved wants to be sought. There is equality in their love. They belong to each other. And there is joy—not solemn duty, but delight, exuberance, the eagerness of a lover approaching the beloved.',
        },
        {
          kind: 'reflection',
          id: 'song2-sick-love-joy',
          prompt: 'Have you experienced a love that makes you "sick"—that overwhelms you with longing? Does such longing seem like weakness to you, or does the Song suggest it is a kind of strength? What does it mean to be so loved that the beloved comes leaping toward you?',
        },
      ],
    },

    {
      ref: 'Song of Solomon 2:10–17',
      title: 'Arise and Come Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'My beloved spake, and said unto me, Rise up, my love, my fair one, and come away.'),
            plain(11, 'For, lo, the winter is past, the rain is over and gone;'),
            plain(12, 'The flowers appear on the earth; the time of the singing of birds is come, and the voice of the turtle is heard in our land;'),
            plain(13, 'The fig tree putteth forth her green figs, and the vines with the tender grape give a good smell. Arise, my love, my fair one, and come away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-2-78mid-1',
          html:
            'The scene shifts from the garden to the city. She seeks him by night through the streets, and the watchmen find her searching. Love will not be quiet.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'O my dove, that art in the clefts of the rock, in the secret places of the stairs, let me see thy countenance, let me hear thy voice; for sweet is thy voice, and thy countenance is comely.'),
            plain(15, 'Take us the foxes, the little foxes, that spoil the vines: for our vines have tender grapes.'),
            plain(16, 'My beloved is mine, and I am his: he feedeth among the lilies.'),
            plain(17, 'Until the day break, and the shadows flee away, turn, my beloved, and be thou like a roe or a young hart upon the mountains of Bether.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song2-arise-come-away',
          html:
            '"Rise up, my love, my fair one, and come away." The Beloved invites, does not command. He calls her fair. He invites her to arise and come away. The Season has changed. Winter is past. The rains are over. The world is blooming. It is a call to newness, to beauty, to participation in the awakening of spring.',
        },
        {
          kind: 'commentary',
          id: 'song2-flowers-birds',
          html:
            'The enumeration of spring blooms is vivid: flowers appear, birds sing, the turtle dove is heard, fig trees put forth green figs, vines with tender grapes give a good smell. The world is alive, fertile, beautiful. And the Beloved calls her to be part of this beauty. "Arise, my love, my fair one, and come away."',
        },
        {
          kind: 'commentary',
          id: 'song2-little-foxes',
          html:
            '"Take us the foxes, the little foxes, that spoil the vines." A moment of realism: even in paradise, there are threats. Little foxes ruin the vines. The tender grapes are vulnerable. The call to arise and come away is not a call to ignore danger, but to face it together. Vigilance is required even in love.',
        },
        {
          kind: 'commentary',
          id: 'song2-mutual-possession',
          html:
            '"My beloved is mine, and I am his: he feedeth among the lilies." The great refrain of the Song. Mutual possession. Not possession as control, but as belonging. She is his; he is hers. And he feeds his flock among the lilies—he tends beauty and provides for those under his care.',
        },
        {
          kind: 'christ',
          id: 'song2-christ-rose',
          title: 'Christ Connection — Christ the Rose and Bridegroom',
          html:
            'The Bride calls herself the Rose of Sharon. In the New Testament, Christ is described as "the root and the offspring of David, and the bright and morning star." He is the Rose, the Lily, the Beauty that surpasses all others. And He calls His Church to "arise and come away" from the world—from winter, from cold, from the old order. He calls her to participate in the springtime of redemption, to bloom, to sing, to be part of the new creation. And He Himself is vigilant against the foxes that would spoil the vineyard—against the forces that would harm His people.',
        },
        {
          kind: 'reflection',
          id: 'song2-arise-come',
          prompt: 'To what is Christ calling you to "arise and come away"? What old patterns, what winter of the soul, are you being called to leave? And what beauty, what springtime, are you being invited to enter?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the rose of Sharon, and the lily of the valleys...My beloved is mine, and I am his...Arise, my love, my fair one, and come away.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 2 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-song-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Song of Solomon 2',
      url: 'https://www.sefaria.org/Song_of_Songs.2',
      description: 'Sefaria open-access source text and translations for Song of Solomon 2.',
    },
    {
      id: 'penn-museum-egyptian-love-poetry',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Egyptian Love Poetry Parallels',
      url: 'https://www.penn.museum/',
      description: 'Egyptian love songs showing literary and thematic parallels to biblical Song tradition.',
    },
    {
      id: 'met-museum-egyptian-poetry',
      kind: 'museum',
      source: 'Metropolitan Museum',
      label: 'Ancient Egypt: Love and Poetry',
      url: 'https://www.metmuseum.org/',
      description: 'Museum artifacts and literary texts illuminating Song of Solomon&apos;s erotic love poetry within ANE context.',
    },
  ],

  hasHebrew: false,
};
