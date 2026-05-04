import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 149 — A New Song of Joy
 *
 * "Sing unto the Lord a new song...Let the saints be joyful in glory: let them
 * sing aloud upon their beds." The penultimate psalm invites the people of God
 * to sing a new song—not a rehashing of old themes, but something fresh,
 * emerging from the heart of one who has been redeemed. "Let Israel rejoice in
 * him that made him: let the children of Zion be joyful in their king." The joy
 * is not private. It is joyful glory, aloud, public. And it is grounded in the
 * reality of redemption and kingship. The saints sing because they have been
 * made, shaped, redeemed by the hand of God.
 */
export const PSALMS_149: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 149,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  opener: {
    matchTitle: /Stuttgart Psalter folio v/i,
    caption: 'Psalms 149',
  },
  intros: [
    'Psalm 149 is the second to last psalm in the Psalter. It brings the voice of personal joy and celebration to the cosmic praise of Psalm 148. The saints—those called apart, made holy by God—are summoned to sing a new song. This is not a song of lament or complaint. This is a song of joy, of celebration, of gladness. The psalmist invites the redeemed to rejoice publicly, to celebrate aloud, to be joyful in their king. The final two psalms (149 and 150) form a crescendo of pure praise, in which the entire book moves toward its conclusion.',
  ],

  sections: [
    {
      ref: 'Psalm 149:1–5',
      title: 'Sing a New Song',
      blocks: [
        {
          kind: 'scripture',
          chapter: 149,
          lines: [
            plain(1, 'Praise ye the Lord. Sing unto the Lord a new song, and his praise in the congregation of the saints.'),
            plain(2, 'Let Israel rejoice in him that made him: let the children of Zion be joyful in their king.'),
            plain(3, 'Let them praise his name in the dance: let them sing praises unto him with the timbrel and harp.'),
            plain(4, 'For the Lord taketh pleasure in his people: he will beautify the meek with salvation.'),
            plain(5, 'Let the saints be joyful in glory: let them sing aloud upon their beds.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm149-new-song',
          html:
            '"Sing unto the Lord a new song." The demand for newness is striking. Not a repetition of old formulas, but something fresh—a song that arises from the current moment, from the heart that has recently experienced God&apos;s grace. The new song is always the song of the redeemed, offered for the first time, unique to the one who sings it. [res:sefaria-psalm-149]',
        },
        {
          kind: 'hebrew',
          id: 'psalm149-shir',
          title: 'Shir — "Song" (New Creation)',
          script: 'שִׁיר',
          translit: '<strong>Shir</strong> · song, song of praise (especially <em>shir hadash</em>, a new song)',
          description:
            'A new song arises when something new has happened—when God has acted, when redemption has occurred, when the soul has been transformed. The newness corresponds to the newness of God&apos;s saving work.',
        },
        {
          kind: 'commentary',
          id: 'psalm149-israel',
          html:
            '"Let Israel rejoice in him that made him: let the children of Zion be joyful in their king." The focus is on Israel—the people God has made and chosen. And the joy is grounded in relationship: He made them. He is their king. The joy is not abstract. It flows from the concrete reality of being God&apos;s people[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'commentary',
          id: 'psalm149-dance',
          html:
            '"Let them praise his name in the dance: let them sing praises unto him with the timbrel and harp." The praise is embodied and musical. Dancing, singing, playing instruments—the whole person is engaged in worship. Joy is not merely internal. It is expressed, danced, played, sung.',
        },
        {
          kind: 'commentary',
          id: 'psalm149-beds',
          html:
            '"Let the saints be joyful in glory: let them sing aloud upon their beds." The image is intimate: even on their beds—in the most private, vulnerable moments—the saints sing. Joy is not reserved for public worship alone. It becomes the underlying tone of life itself.',
        },
        {
          kind: 'carry',
          html:
            'Praise Him out loud when no one is listening. A song in the car, low and honest. A single sentence of gratitude over the kitchen sink while you&apos;re washing dishes. Not a performance, not a shout to impress—just you and God, acknowledging what He&apos;s done. The new song is always the one you sing for the first time after He&apos;s moved. Sing it. No one else needs to hear. He will.',
        },
      ],
    },

    {
      ref: 'Psalm 149:6–9',
      title: 'The Saints Vindicated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 149,
          lines: [
            plain(6, 'Let the high praises of God be in their mouth, and a twoedged sword in their hand;'),
            plain(7, 'To execute vengeance upon the heathen, and punishments upon the people;'),
            plain(8, 'To bind their kings with chains, and their nobles with fetters of iron;'),
            plain(9, 'To execute upon them the judgment written: this honour is to all his saints. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm149-sword',
          html:
            'The psalm then takes a surprising turn: "Let the high praises of God be in their mouth, and a twoedged sword in their hand." This is language of warfare and judgment. The saints—those who have been meek, afflicted, seemingly powerless—are given weapons. They are called to execute judgment on the nations, to bind kings with chains.',
        },
        {
          kind: 'commentary',
          id: 'psalm149-judgment',
          html:
            'This language has troubled many readers. Yet it should be understood not as a call to literal violence, but as an affirmation that God will vindicate His people. The judgment is "written"—it is already determined. The saints are participating in God&apos;s ultimate justice. The sword is the word of God; the judgment is divine, not human vengeance.',
        },
        {
          kind: 'commentary',
          id: 'psalm149-honour',
          html:
            '"This honour is to all his saints." The honor spoken of is vindication, justification, the reversal of all that was done to the oppressed. To be honored by God, to be given a place in His judgment, is the final affirmation that the saints belong to God and are valued by Him.',
        },
        {
          kind: 'christ',
          id: 'psalm149-christ-new-song',
          title: 'Christ Connection — New Song in Heaven',
          html:
            'In Revelation 5:9, John records a vision: "And they sang a new song, saying, Thou art worthy...for thou wast slain, and hast redeemed us to God by thy blood." The new song is sung in heaven, celebrating Christ&apos;s redemption. Every saint—every person who has been redeemed by Christ—is invited to sing this new song eternally. [res:bible-odyssey-psalm-149]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Sing unto the Lord a new song...Let the saints be joyful in glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 149 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-149',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 149 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.149',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-149',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 149 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+149',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-hymns-praise',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Hymns of Praise in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/hymns/',
      description: 'SBL essay on the hymn genre — communal, doxological psalms that frame the Psalter&apos;s arc.',
    },

  ],

  hasHebrew: true,
};
