import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 8 — A Seal Upon Your Heart
 *
 * "Set me as a seal upon thine heart, as a seal upon thine arm: for love is
 * strong as death: jealousy is cruel as the grave: the coals thereof are coals
 * of fire which hath a most vehement flame. Many waters cannot quench love,
 * neither can the floods drown it." The Bride concludes the Song with a
 * meditation on the power of love. Love is irreversible, unquenchable, eternal.
 * And she calls her Beloved to mark her, to claim her, as a seal is impressed
 * upon wax. And Christ&apos;s love for His Church is exactly this—eternal,
 * unquenchable, a seal upon the heart.
 */
export const SONG_8: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 8,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  topicTags: ['love', 'family', 'faithfulness', 'humility'],
  opener: {
    topical: true,
    caption: 'Song of Solomon 8',
  },
  intros: [
    'The Song approaches its conclusion with the Bride&apos;s deepest affirmation of love. She speaks of love as strong as death, as immovable as the grave, as intense as a flame that cannot be extinguished. Love cannot be bought. Love cannot be reasoned away. Love is the most powerful force in the human experience. And she asks her Beloved to set himself as a seal upon her heart—to mark her, to claim her, to make it known that she belongs to him.',
    'The Bride then speaks of herself as a wall, complete and whole, but open to her Beloved. She has become strong enough to contain herself, to have boundaries. And within those boundaries, she gives herself fully to him. The Song concludes with mutual affirmation. The Beloved speaks of the Bride as a vineyard, precious and productive. And the Bride speaks of giving her fruit to him. There is a rest, a completion, a fullness at the end of the Song.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 8:1–7',
      title: 'Love Is Strong As Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'O that thou wert as my brother, that sucked the breasts of my mother! when I should find thee without, I would kiss thee; yea, I should not be despised.'),
            plain(2, 'I would lead thee, and bring thee into my mother&apos;s house, who would instruct me: I would cause thee to drink of spiced wine of the juice of my pomegranate.'),
            plain(3, 'His left hand should be under my head, and his right hand should embrace me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-8-78mid-1',
          html:
            'The Bride speaks of their love as stronger than death, as burning like a flame. She names what she has learned: Love cannot be bought, and a sister guarded is a sister kept safe.[res:penn-museum-egyptian-love-poetry]',
        },
        {
          kind: 'hebrew',
          id: 'song8-ahava',
          title: 'Ahava — "Love"',
          script: 'אַהֲבָה',
          translit: '<strong>Ahava</strong> · love; affection; commitment',
          description: 'Love is the overarching theme—powerful, exclusive, and worthy of all devotion.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(4, 'I charge you, O daughters of Jerusalem, that ye stir not up, nor awake my love, until he please.'),
            plain(5, 'Who is this that cometh up from the wilderness, leaning upon her beloved? I raised thee up under the apple tree: there thy mother brought thee forth: there she brought thee forth that bare thee.'),
            plain(6, 'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire which hath a most vehement flame.'),
            plain(7, 'Many waters cannot quench love, neither can the floods drown it: if a man would give all the substance of his house for love, it would utterly be contemned.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song8-seal-heart',
          html:
            '"Set me as a seal upon thine heart, as a seal upon thine arm." A seal marks ownership, authenticity, permanence. The Bride asks her Beloved to mark her in this way—to declare that she is his, to impress himself upon her heart and her arm. A heart speaks of the inner life. An arm speaks of power and action. She wants him to be present in her love and in her strength.[res:sefaria-song-8]',
        },
        {
          kind: 'commentary',
          id: 'song8-love-strong-death',
          html:
            '"For love is strong as death; jealousy is cruel as the grave." The Bride makes an audacious claim. Love is as strong as death itself. Death ends all things. It cannot be negotiated with or delayed. Love is like this. It is absolute, immovable, final. And jealousy—the desire to have and to keep the beloved—is as merciless as the grave. It will not let go.[res:met-museum-egyptian-poetry]',
        },
        {
          kind: 'commentary',
          id: 'song8-coals-vehement-flame',
          html:
            '"The coals thereof are coals of fire which hath a most vehement flame." Love is not a gentle thing. It burns. It consumes. "Many waters cannot quench love, neither can the floods drown it." No force in nature can extinguish this fire. No hardship, no obstacle, no flood of difficulty can quench true love.',
        },
        {
          kind: 'commentary',
          id: 'song8-substance-contemned',
          html:
            '"If a man would give all the substance of his house for love, it would utterly be contemned." If someone tried to buy love, offered all his wealth for it, the offer would be rejected with contempt. Love cannot be purchased. It cannot be earned. It is freely given or it is not love at all.',
        },
        {
          kind: 'carry',
          html:
            'The Song teaches that love is the most powerful force in human experience. It surpasses death, surpasses economics, surpasses reason. Love chooses. Love commits. Love cannot be bought or sold or compromised. And the Bride&apos;s final request is to be sealed with this love—marked, claimed, bound forever.',
        },
        {
          kind: 'reflection',
          id: 'song8-seal-love',
          prompt: 'Do you believe that love is stronger than death? That Christ&apos;s love for you is immovable, unquenchable? And can you say to Him: "Set me as a seal upon your heart"—ask to be marked, known, sealed by His love forever?',
        },
      ],
    },

    {
      ref: 'Song of Solomon 8:8–14',
      title: 'A Vineyard of Her Own; The Beloved&apos;s Affirmation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(8, 'We have a little sister, and she hath no breasts: what shall we do for our sister in the day when she shall be spoken for?'),
            plain(9, 'If she be a wall, we will build upon her a palace of silver: and if she be a door, we will inclose her with boards of cedar.'),
            plain(10, 'I am a wall, and my breasts like towers: then was I in his eyes as one that found favour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-8-78mid-2',
          html:
            'The Bride speaks of their love as stronger than death, as burning like a flame. She names what she has learned: Love cannot be bought, and a sister guarded is a sister kept safe.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(11, 'Solomon had a vineyard at Baalhamon: he let out the vineyard unto keepers; every one for the fruit thereof was to bring a thousand pieces of silver.'),
            plain(12, 'My vineyard, which is mine, is before me: thou, O Solomon, must have a thousand, and those that keep the fruit thereof two hundred.'),
            plain(13, 'Thou that dwellest in the gardens, the companions listen for thy voice: cause me to hear it.'),
            plain(14, 'Make haste, my beloved, and be thou like a roe or a young hart upon the mountains of spices.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song8-wall-towers',
          html:
            '"I am a wall, and my breasts like towers." The Bride speaks of her maturity. She has become whole, complete, fortified. She is not vulnerable to every wind. She has integrity. She is contained. And within that containment, she is fully present to her Beloved. Her towers suggest strength, protection, boundaries that are not walls against him, but walls that give her the strength to be fully his.',
        },
        {
          kind: 'commentary',
          id: 'song8-my-vineyard',
          html:
            '"My vineyard, which is mine, is before me." The Bride speaks of her vineyard—her productivity, her gifts, her fertility. And she asserts ownership: it is hers. She is not giving away herself. She is giving the fruit of who she is. "Thou, O Solomon, must have a thousand"—others might claim a share, but the Bride gives her Beloved the principal portion.',
        },
        {
          kind: 'commentary',
          id: 'song8-found-favour',
          html:
            '"Then was I in his eyes as one that found favour." The Bride recognizes that her wholeness, her strength, her boundaries—these make her precious to her Beloved. He does not want a dependent partner. He wants a woman who is whole, who knows herself, who can choose him.',
        },
        {
          kind: 'commentary',
          id: 'song8-mountains-spices',
          html:
            '"Make haste, my beloved, and be thou like a roe or a young hart upon the mountains of spices." The Song concludes with the Bride&apos;s final call. Come swiftly. Come like the young hart—with vigor, with eagerness. Come to the mountains of spices—to the sweet fragrance, to the beauty, to the abundance of love.',
        },
        {
          kind: 'christ',
          id: 'song8-christ-eternal-love',
          title: 'Christ Connection — Christ&apos;s Eternal, Unquenchable Love',
          html:
            'Paul writes, "I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God which is in Christ Jesus our Lord" (Romans 8:38-39). This is the love the Song celebrates. It is strong as death. It cannot be quenched by any flood. It is eternal. And Christ seals His Church with this love—not as a mark of ownership that diminishes, but as a mark that glorifies, that makes whole, that brings to fullness.',
        },
        {
          kind: 'reflection',
          id: 'song8-haste-beloved',
          prompt: 'Can you call to Christ with the eagerness of the Bride: "Make haste, my beloved"? Or are you slow, hesitant, uncertain? What would it mean to wait for Him with full expectation, as one who knows herself to be beloved?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Set me as a seal upon thine heart...Love is strong as death...Many waters cannot quench love...Make haste, my beloved, and be thou like a roe or a young hart upon the mountains of spices.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 8 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-song-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Song of Solomon 8',
      url: 'https://www.sefaria.org/Song_of_Songs.8',
      description: 'Sefaria open-access source text and translations for Song of Solomon 8.',
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
