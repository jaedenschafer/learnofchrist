import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 7 — The Beauty of the Bride and His Desire
 *
 * The Beloved describes his bride with sensuous detail. "How fair and how
 * pleasant art thou, O love, for delights!" He celebrates every part of her
 * body—her feet, her thighs, her navel, her belly, her breasts, her neck, her
 * eyes. And then: "I am my beloved&apos;s, and his desire is toward me." The
 * Song affirms that desire is good, that to be desired is affirming, that the
 * beloved wants his bride not out of duty, but out of genuine attraction and
 * love. And the Bride concludes: "Let us go forth into the field...and there
 * will I give thee my loves." She offers herself freely.
 */
export const SONG_7: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 7,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  intros: [
    'The Beloved moves through his bride&apos;s body with lingering attention. Each part is beautiful to him. Her feet are beautiful in her sandals. Her thighs are like jewels. Her navel is like a goblet. Her belly is like wheat surrounded by lilies. Her breasts are like twin fawns. Her neck is like an ivory tower. Her eyes are like pools. The enumeration is detailed, sensuous, affirming. He is not embarrassed by her body. He celebrates it. He desires her.',
    'And the Bride responds: "I am my beloved&apos;s, and his desire is toward me." She does not feel objectified by his desire. She feels chosen, wanted, affirmed. His desire for her is an expression of his love. And she responds by offering herself to him. "Let us go forth into the field...and there will I give thee my loves." She is not passive. She is active, willing, eager to give herself to him.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 7:1–13',
      title: 'His Desire Is Toward Her',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'How fair and how pleasant art thou, O love, for delights!'),
            plain(2, 'This thy stature is like to a palm tree, and thy breasts to clusters of grapes.'),
            plain(3, 'I said, I will go up to the palm tree, I will take hold of the boughs thereof: now also thy breasts shall be as clusters of the vine, and the smell of thy nose like apples;'),
            plain(4, 'And the roof of thy mouth like the best wine for my beloved, that goeth down sweetly, causing the lips of those that are asleep to speak.'),
            plain(5, 'I am my beloved&apos;s, and his desire is toward me.'),
            plain(6, 'Come, my beloved, let us go forth into the field; let us lodge in the villages.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song7-response',
          html: 'After the Beloved&apos;s lengthy celebration of her beauty, the Bride responds not with words of thanks but with an invitation and an offering. She wants to go forth with him into the field. She wants to lodge in the villages—to be alone with him. And most importantly: "there will I give thee my loves." She offers herself, not out of obligation, but as a willing gift.[res:penn-museum-egyptian-love-poetry]',
        },
        {
          kind: 'hebrew',
          id: 'song7-tzemer',
          title: 'Tzemer — "Form" or "Body"',
          script: 'צוּמַר',
          translit: '<strong>Tzemer</strong> · form; body; physical beauty',
          description: 'The Song celebrates the physical beauty of the beloved without shame.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(7, 'Let us get up early to the vineyards; let us see if the vine flourish, whether the tender grape appear, and the pomegranates bud forth: there will I give thee my loves.'),
            plain(8, 'The mandrakes give a smell, and at our gates are all manner of pleasant fruits, new and old, which I have laid up for thee, O my beloved.'),
            plain(9, 'O that thou wert as my brother, that sucked the breasts of my mother! when I should find thee without, I would kiss thee; yea, I should not be despised.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-7-78mid-1',
          html:
            'The lovers speak of each other with mounting intensity. He praises her body; she offers hers to him. The Song moves toward union, the wholeness two bodies and hearts can make together.[res:sefaria-song-7]',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(10, 'I would lead thee, and bring thee into my mother&apos;s house, who would instruct me: I would cause thee to drink of spiced wine of the juice of my pomegranate.'),
            plain(11, 'His left hand should be under my head, and his right hand should embrace me.'),
            plain(12, 'I charge you, O daughters of Jerusalem, that ye stir not up, nor awake my love, until he please.'),
            plain(13, 'Who is this that cometh up from the wilderness, leaning upon her beloved? I raised thee up under the apple tree: there thy mother brought thee forth: there she brought thee forth that bare thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song7-palm-tree',
          html:
            '"This thy stature is like to a palm tree, and thy breasts to clusters of grapes." The Beloved uses nature to celebrate the Bride&apos;s form. She is tall and graceful like a palm tree. Her breasts are abundant like grape clusters. Every description is celebratory. He is not criticizing or demanding change. He is praising what she is.[res:met-museum-egyptian-poetry]',
        },
        {
          kind: 'commentary',
          id: 'song7-desire-toward-me',
          html:
            '"I am my beloved&apos;s, and his desire is toward me." The Bride speaks her belonging and adds a crucial element: his desire. She does not feel like a possession or an object. She feels desired. His desire affirms her. It says: you are beautiful to me, you matter to me, I want you. And this desire is not separate from his love. It is an expression of it.',
        },
        {
          kind: 'commentary',
          id: 'song7-prepared',
          html:
            '"The mandrakes give a smell, and at our gates are all manner of pleasant fruits, new and old, which I have laid up for thee, O my beloved." The Bride has prepared good things for her Beloved. She has thought of him in advance. She has stored up fruits, pleasures, delights. She is not just responding to his desire. She is creating beauty and abundance for him.',
        },
        {
          kind: 'commentary',
          id: 'song7-brother',
          html:
            '"O that thou wert as my brother, that sucked the breasts of my mother! when I should find thee without, I would kiss thee; yea, I should not be despised." The Bride wishes she could kiss her Beloved publicly without shame. She wishes there were no barrier between them. She wants to claim him openly.',
        },
        {
          kind: 'carry',
          html:
            'The Song teaches that desire is not shameful. That to be desired is affirming. That offering yourself to the beloved, in the context of covenant love, is beautiful. The Song affirms the goodness of the body, the goodness of desire, the goodness of sexual union between husband and wife. There is no shame here.',
        },
        {
          kind: 'christ',
          id: 'song7-christ',
          title: 'Christ Connection — His Longing for You',
          html:
            'The Bride says, "I am my beloved\'s, and his desire is toward me." Jesus echoed this longing the night before His cross: "with desire I have desired to eat this passover with you" (Luke 22:15). His desire is not generic. It is particular. It is for you. And it culminates at the marriage supper of the Lamb, when the Bridegroom stands before His bride and the feast begins: "Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready" (Rev. 19:7). The Bridegroom\'s longing is answered. The Bride\'s offering of herself is received.',
        },
        {
          kind: 'reflection',
          id: 'song7-desire-good',
          prompt: 'Do you experience desire as something good? Or have you learned to be ashamed of it? And in the context of your relationship with Christ, do you experience yourself as desirable to Him—not merely functional, but truly loved and wanted?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am my beloved&apos;s, and his desire is toward me...There will I give thee my loves...His left hand should be under my head, and his right hand should embrace me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 7 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-song-7',
      kind: 'study',
      source: 'Sefaria',
      label: 'Song of Solomon 7',
      url: 'https://www.sefaria.org/Song_of_Songs.7',
      description: 'Sefaria open-access source text and translations for Song of Solomon 7.',
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
