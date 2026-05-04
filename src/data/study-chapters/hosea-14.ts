import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_14: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 14,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  topicTags: ['faithfulness', 'mercy', 'sin', 'love'],
  opener: {
    topical: true,
    caption: 'Hosea 14',
  },
  intros: [
    'Hosea 14 is the closing chapter, and it rings with hope. "O Israel, return unto the Lord thy God; for thou hast fallen by thine iniquity." The book ends not with destruction but with a call to return. Hosea invites Israel to bring words, to turn to the Lord, to ask for forgiveness.',
    '"I will heal their backsliding, I will love them freely: for mine anger is turned away from him." This is the final word of Hosea. Not judgment alone, but restoration. Not punishment alone, but the free love of God. The book that began with a harlot being purchased now ends with a promise of healing and free love.',
  ],

  bottomShare: {
    label: 'Share Hosea 14',
    quote:
      '"O Israel, return unto the Lord thy God...I will heal their backsliding, I will love them freely." The book of Hosea ends with restoration and God&apos;s free love.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 14 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 14 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.14',
      description: 'Primary sources on Israel&apos;s call to return and God&apos;s promise of healing and free, covenant love.',
    },
    {
      id: 'sefaria-hosea-14-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 14 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Hosea.14',
      description: 'The Hebrew text of Hosea 14 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    {
      ref: 'Hosea 14:1–3',
      title: 'The Call to Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('O Israel, return unto the Lord thy God; for thou hast fallen by thine iniquity.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Take with you words, and turn to the Lord: say unto him, '),
                hp('Take away all iniquity, and receive us graciously', 'hosea14-return'),
                t(': so will we render the calves of our lips.'),
              ],
            },
            plain(3, 'Asshur shall not save us; we will not ride upon horses: neither will we say any more to the work of our hands, Ye are our gods: for in thee the fatherless findeth mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea14-return',
          html:
            'The call to return begins with words. "Take with you words, and turn to the Lord." Israel is not to come silent or with sacrifices alone but with confession, with words that acknowledge her need. She is to say, "Take away all iniquity, and receive us graciously." This is the prayer of the returning prodigal — not claiming innocence, but asking for mercy[res:bibleodyssey-hosea-restoration][res:sefaria-hosea-14].',
        },
        {
          kind: 'hebrew',
          id: 'hosea14-shub',
          title: 'Shub — "To Return"',
          script: 'שׁוּב',
          translit: '<strong>Shub</strong> · to return; to turn back; to repent',
          description:
            'The word "shub" means to return, to turn back, to repent. It carries the sense not just of saying sorry but of turning around completely, of going back to where you belong, of returning to relationship.',
        },
        {
          kind: 'carry',
          html:
            'Israel will no longer trust in Assyria or in horses — in the strength of nations or in her own power. She will no longer worship the work of her hands. Instead, she confesses: "In thee the fatherless findeth mercy." She acknowledges that God alone is her source of strength, her protector, her mercy. What words of repentance do you need to speak?',
        },
        {
          kind: 'reflection',
          id: 'hosea14-words',
          prompt: 'What words do you need to take to the Lord? What needs to be confessed? What mercy do you need to ask for?',
        },
      ],
    },

    {
      ref: 'Hosea 14:4–9',
      title: 'The Healing and Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 4,
              spans: [
                t('I will heal their backsliding, '),
                hp('I will love them freely', 'hosea14-freely'),
                t(': for mine anger is turned away from him.'),
              ],
            },
            plain(5, 'I will be as the dew unto Israel: he shall grow as the lily, and cast forth his roots as Lebanon.'),
            plain(6, 'His branches shall spread, and his beauty shall be as the olive tree, and his smell as Lebanon.'),
            plain(7, 'They that dwell under his shadow shall return; they shall revive as the corn, and grow as the vine: the scent thereof shall be as the wine of Lebanon.'),
            plain(8, 'Ephraim shall say, What have I to do any more with idols? I have heard him, and observed him: I am like a green fir tree. From me is thy fruit found.'),
            plain(9, 'Who is wise? let him understand these things? prudent? and he shall know them: for the ways of the Lord are right, and the just shall walk in them: but the transgressors shall fall therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea14-freely',
          html:
            'God will love Israel freely — not because she deserves it, not because she has earned it, but freely, as an act of grace. His anger is turned away. His healing comes. Israel will grow like a lily, her branches will spread like an olive tree. The language shifts from judgment to blessing, from destruction to growth[res:sefaria-hosea-14-v1].',
        },
        {
          kind: 'carry',
          html:
            'The restored Israel declares, "What have I to do any more with idols? I have heard him, and observed him." She has returned from her idols and is listening to God. She is becoming like a green fir tree — alive, growing, fruitful. She has found her purpose: from her, fruit is found for the One who loves her.',
        },
        {
          kind: 'reflection',
          id: 'hosea14-fruit',
          prompt: 'When you are restored to God, you become fruitful. What fruit will your life bear when you have turned from idols and learned to listen to God?',
        },
      ],
    },

    {
      ref: 'Hosea 14 · All',
      title: 'The Love of God',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea14-theme',
          html:
            'Hosea closes with the deepest truth: God will love His people freely. Not because they have deserved it. Not because they have proven themselves faithful. But because that is who God is — a God who loves freely, who heals backsliding, who turns His anger away, who restores and makes fruitful. This is the heart revealed throughout the book in Hosea&apos;s own marriage — a man who loves a harlot, who buys her back, who takes her home. This love is a sign of the love of God for His people.',
        },
        {
          kind: 'christ',
          id: 'hosea14-christ-love',
          title: 'Christ Connection — The Free Love of God',
          html:
            'Christ is the embodiment of God&apos;s free love. He loves us not because we deserve it, but freely. He comes to those of us who are lost, who have wandered into idolatry, who have fallen by our own iniquity. He takes us back, heals our backsliding, and loves us with a love that has no condition. This is the gospel: "While we were yet sinners, Christ died for us" (Romans 5:8). This is the love Hosea points to through the entire book.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
