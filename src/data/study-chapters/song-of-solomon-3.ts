import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 3 — Seeking and Finding
 *
 * The Bride dreams. She lies in her bed at night and seeks her Beloved, but
 * cannot find him. "I sought him, but I found him not." She rises and goes
 * through the streets and in the squares, seeking him earnestly. And when she
 * finally finds him, she holds him fast: "I held him, and would not let him go."
 * Then the scene shifts to a bridal procession—a vision of Solomon in his
 * carriage, surrounded by warriors, crowned on his wedding day. The Bride comes
 * to her Beloved. The Bridegroom comes to His Bride.
 */
export const SONG_3: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 3,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'The Song moves into a new mode: seeking. The Bride lies at night and seeks her Beloved in bed, but he is not there. She rises and goes out into the city, through the streets and in the squares, seeking him earnestly. It is a dream-like sequence—an interior drama of longing and pursuit. She questions the watchmen. Has anyone seen him? And finally, she finds him and holds him fast, unwilling to let him go. This is the anxious love that fears separation, that pursues, that cannot be at rest without the beloved.',
    'Then the Song shifts to a vision of a bridal procession. Solomon comes in his carriage, surrounded by warriors, crowned on his wedding day. The entire scene is regal, formal, public. The private seeking transforms into public celebration. The bride is being brought to the bridegroom in glory. There is both the personal seeking in the night and the public recognition of union. Both matter. Both are part of the fullness of love.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 3:1–11',
      title: 'Seeking and Finding; The Bridal Procession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'By night on my bed I sought him whom my soul loveth: I sought him, but I found him not.'),
            plain(2, 'I will rise now, and go about the city in the streets, and in the broad ways I will seek him whom my soul loveth: I sought him, but I found him not.'),
            plain(3, 'The watchmen that go about the city found me: I said, Saw ye him whom my soul loveth?'),
            plain(4, 'It was but a little that I passed from them, but I found him whom my soul loveth: I held him, and would not let him go, until I had brought him into my mother&apos;s house, and into the chamber of her that conceived me.'),
            plain(5, 'I charge you, O ye daughters of Jerusalem, by the roes, and by the hinds of the field, that ye stir not up, nor awake my love, till he please.'),
            plain(6, 'Who is this that cometh out of the wilderness like pillars of smoke, perfumed with myrrh and frankincense, with all powders of the merchant?'),
            plain(7, 'Behold his bed, which is Solomon&apos;s; threescore valiant men are about it, of the valiant of Israel.'),
            plain(8, 'They all hold swords, being expert in war: every man hath his sword upon his thigh because of fear in the night.'),
            plain(9, 'King Solomon made himself a chariot of the wood of Lebanon.'),
            plain(10, 'He made the pillars thereof of silver, the bottom thereof of gold, the covering of it of purple, and the midst thereof being paved with love, of the daughters of Jerusalem.'),
            plain(11, 'Go forth, O ye daughters of Zion, and behold king Solomon with the crown wherewith his mother crowned him in the day of his espousals, and in the day of the gladness of his heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song3-sought-not-found',
          html:
            '"By night on my bed I sought him whom my soul loveth: I sought him, but I found him not." The Bride is restless at night. She seeks her Beloved, wants him present. He is absent, and his absence troubles her. She does not remain passive in bed. She rises and goes out into the city, through the streets and squares, earnestly seeking. This is the activity of love—it does not wait to be found, but pursues.',
        },
        {
          kind: 'commentary',
          id: 'song3-held-not-let-go',
          html:
            '"It was but a little that I passed from them, but I found him whom my soul loveth: I held him, and would not let him go." When she finds him, she seizes him. She does not allow him to slip away. She brings him into her mother&apos;s house, into the chamber where she was conceived—into the most intimate, protected space. The seeking ends in finding and in a kind of claiming, of holding fast.',
        },
        {
          kind: 'commentary',
          id: 'song3-procession',
          html:
            'The scene shifts. A question is asked: "Who is this that cometh out of the wilderness like pillars of smoke, perfumed with myrrh and frankincense?" It is the Bridegroom in procession. Solomon comes in his carriage, made of wood of Lebanon. It is grand, ornate, covered with purple. Sixty valiant men surround his bed, bearing swords. The entire image is of power, protection, royalty.',
        },
        {
          kind: 'commentary',
          id: 'song3-crown-espousals',
          html:
            'The vision concludes with a command to the daughters of Jerusalem: "Go forth...and behold king Solomon with the crown wherewith his mother crowned him in the day of his espousals, and in the day of the gladness of his heart." The Bridegroom is crowned on his wedding day. The day is a day of gladness. Public and private, formal and intimate, are woven together.',
        },
        {
          kind: 'carry',
          html:
            'The Song teaches that seeking is part of love. Love does not passively wait. It pursues, it asks, it goes out into the night, it will not rest until the beloved is found. And when found, it holds fast. Then there is the public dimension—the procession, the crown, the formal recognition of union. Both the private seeking and the public celebration are needed.',
        },
        {
          kind: 'reflection',
          id: 'song3-seek-find',
          prompt: 'Do you seek Christ with the earnestness the Bride shows? Or do you wait passively for Him to reveal Himself? And have you experienced both the private intimacy and the public recognition of belonging to Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I sought him, but I found him not...I held him, and would not let him go...Behold king Solomon with the crown wherewith his mother crowned him in the day of his espousals.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 3 · Study Guide',
  },

  hasHebrew: false,
};
