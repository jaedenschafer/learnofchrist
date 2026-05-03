import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 6 — I Am My Beloved's
 *
 * "I am my beloved&apos;s, and my beloved is mine." The refrain returns, central to
 * the Song. Mutual possession. Belonging. The Bride knows who she is because she
 * knows to whom she belongs. And the Beloved continues to celebrate her beauty.
 * He calls her his dove, his perfect one, unique among women. There is a rest
 * that comes from being known fully and accepted wholly. The Bride does not have
 * to earn or prove her worth. She is his, and that belonging is enough.
 */
export const SONG_6: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 6,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The Song returns to its central theme: mutual possession and belonging. After the seeking, after the wounding, after the vulnerability, the Bride comes to a place of rest. She knows her identity. "I am my beloved&apos;s, and my beloved is mine: he feedeth among the lilies." She belongs to him. He belongs to her. This knowing gives her stability, her sense of self. She is not defined by what she lacks or what she fears, but by to whom she belongs.',
    'The Beloved continues to celebrate his bride. He calls her beautiful, unique, worthy of praise. He does not need to convince her anymore. She has chosen him, opened to him, sought him. Now there is a resting in each other. There is peace. The Bride does not question whether she is loved. She knows. And in knowing that she is loved, she finds her truest self.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 6:1–13',
      title: 'Belonging and Beauty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Whither is thy beloved gone, O thou fairest among women? whither is thy beloved turned aside? that we may seek him with thee.'),
            plain(2, 'My beloved is gone down into his garden, to the beds of spices, to feed in the gardens, and to gather lilies.'),
            plain(3, 'I am my beloved&apos;s, and my beloved is mine: he feedeth among the lilies.'),
            plain(4, 'Thou art beautiful, O my love, as Tirzah, comely as Jerusalem, terrible as an army with banners.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-6-78mid-1',
          html:
            'He finds her again and affirms her again: You are beautiful, my love. The refrain repeats, but it does not grow thin. To be chosen, again and again, is the gift of love.[res:penn-museum-egyptian-love-poetry]',
        },
        {
          kind: 'hebrew',
          id: 'song6-shulamit',
          title: 'Shulamit — "The Shulamite"',
          script: 'שׁוּלַמִּית',
          translit: '<strong>Shulamit</strong> · the Shulamite; bride',
          description: 'The bride is named—she is particular, real, beloved by name.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(5, 'Turn away thine eyes from me: for they have overcome me: thy hair is as a flock of goats that appear from Gilead.'),
            plain(6, 'Thy teeth are as a flock of sheep which go up from the washing, whereof every one beareth twins, and there is not one barren among them.'),
            plain(7, 'As a piece of pomegranate are thy temples within thy locks.'),
            plain(8, 'There are threescore queens, and fourscore concubines, and virgins without number.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song6-many-women',
          html: 'The inventory of the Beloved&apos;s devotion to the Bride continues through detailed physical description. Her temples, her locks — all are praised. Yet then the Beloved acknowledges the wider context: there are sixty queens, eighty concubines, virgins without number. All beautiful, all in the palace. Yet none of them compare to his one dove.[res:sefaria-song-6]',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(9, 'My dove, my undefiled is but one; she is the only one of her mother, she is the choice one of her that bare her. The daughters saw her, and blessed her; yea, the queens and the concubines, and they praised her.'),
            plain(10, 'Who is she that looketh forth as the morning, fair as the moon, clear as the sun, and terrible as an army with banners?'),
            plain(11, 'I went down into the garden of nuts to see the fruits of the valley, and to see whether the vine flourished, and the pomegranates budded.'),
            plain(12, 'Or ever I was aware, my soul made me as the chariots of Amminadib.'),
            plain(13, 'Return, return, O Shulamite; return, return, that we may look upon thee: What will ye see in the Shulamite? As it were the company of two armies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song6-i-am-his',
          html:
            '"I am my beloved&apos;s, and my beloved is mine: he feedeth among the lilies." The great refrain returns. The Bride speaks her identity in relation to her Beloved. She does not say "I am a queen" or "I am wise" or any other self-defining statement. She defines herself by her belonging. She is his. He is hers. And he feeds among the lilies—he tends beauty, he is present.[res:met-museum-egyptian-poetry]',
        },
        {
          kind: 'commentary',
          id: 'song6-terrible-army',
          html:
            '"Thou art beautiful, O my love, as Tirzah, comely as Jerusalem, terrible as an army with banners." The Beloved uses three comparisons. Tirzah and Jerusalem are beautiful cities—places of power and beauty. "Terrible as an army with banners"—she is not soft or weak. She is strong, formidable, worthy of respect. Her beauty includes power.',
        },
        {
          kind: 'commentary',
          id: 'song6-unique',
          html:
            'Among all the women in the palace, she is the one who stands out. She is undefiled, unique, the choice of her mother. The other women see her and bless her. The queens and concubines praise her. She has earned their recognition not through competition but through the genuine worth the Beloved has seen and proclaimed. She is not one among many. She is the one.',
        },
        {
          kind: 'commentary',
          id: 'song6-only-one',
          html:
            '"My dove, my undefiled is but one; she is the only one of her mother, she is the choice one of her that bare her." Among all the queens and concubines, there is one who stands out. One who is undefiled, unique, chosen. The Bride is not one among many. She is the one.',
        },
        {
          kind: 'commentary',
          id: 'song6-daughters-blessed',
          html:
            '"The daughters saw her, and blessed her; yea, the queens and the concubines, and they praised her." Even the other women recognize her worth. They bless her. They praise her. She is not in competition with other women. She receives recognition from them.',
        },
        {
          kind: 'carry',
          html:
            'The Song teaches that belonging gives identity. The Bride knows who she is because she is beloved. She does not need to prove her worth. She does not need to compete with others. She is his, and in that, she is complete. This is the peace of the Song—the resting in love, the knowing that you are chosen.',
        },
        {
          kind: 'christ',
          id: 'song6-christ',
          title: 'Christ Connection — Beloved and Chosen',
          html:
            'The Bride\'s refrain—"I am my beloved\'s, and my beloved is mine"—finds its fullest echo in Christ\'s love for the Church. Paul writes that "Christ also loved the church, and gave himself for it; that he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish" (Eph. 5:25–27). Christ does not love the Church reluctantly or distantly. He chooses her, claims her, celebrates her. You are not one among many. You are the one He desired to redeem, the one He called by name, the one He will present as His own glory.',
        },
        {
          kind: 'reflection',
          id: 'song6-belong',
          prompt: 'Do you know yourself as belonging to Christ? Does that belonging give you security, or are you still trying to prove your worth? What would it mean to rest in the knowledge that you are His, and cease striving?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am my beloved&apos;s, and my beloved is mine...My dove, my undefiled is but one; she is the only one of her mother.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 6 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-song-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Song of Solomon 6',
      url: 'https://www.sefaria.org/Song_of_Songs.6',
      description: 'Sefaria open-access source text and translations for Song of Solomon 6.',
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
