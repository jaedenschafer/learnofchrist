import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_8: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 8,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  topicTags: ['justice', 'judgment', 'righteousness', 'wrath'],
  opener: {
    topical: true,
    caption: 'Amos 8',
  },
  intros: [
    'Amos 8 opens with a vision of a basket of summer fruit. Summer fruit signals the end of the harvest, the closing of the season. "The end is come upon my people of Israel." The time for judgment is full. There is no more time for repentance.',
    'The chapter contains a startling prophecy: "Behold, the days come, saith the Lord, that I will send a famine in the land, not a famine of bread, nor a thirst for water, but of hearing the words of the Lord." Judgment is not primarily external but spiritual — the absence of God\'s word.',
  ],

  bottomShare: {
    label: 'Share Amos 8',
    quote:
      '"I will send a famine in the land...of hearing the words of the Lord." The deepest judgment is spiritual deprivation — the absence of God\'s Word.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-amos-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Amos 8 · Texts & Translations',
      url: 'https://www.sefaria.org/Amos.8',
      description: 'Primary sources on the judgment of famine for God&apos;s word as the deepest spiritual deprivation.',
    },
    {
      id: 'bibleodyssey-famine-word',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Famine of God&apos;s Word — Amos 8:11-12',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-amos/',
      description: 'Study of spiritual famine as the consequence of rejecting God&apos;s prophetic word.',
    },
    {
      id: 'sefaria-amos-8-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Amos 8 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Amos.8',
      description: 'The Hebrew text of Amos 8 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    {
      ref: 'Amos 8:1–10',
      title: 'The Basket of Summer Fruit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Thus hath the Lord God shewed unto me: and behold a basket of summer fruit.'),
            plain(2, 'And he said, Amos, what seest thou? And I said, A basket of summer fruit. Then said the Lord unto me, The end is come upon my people of Israel; I will not again pass by them any more.'),
            plain(3, 'And the songs of the temple shall be howlings in that day, saith the Lord God: there shall be many dead bodies in every place; they shall cast them forth with silence.'),
            plain(4, 'Hear this, O ye that swallow up the needy, even to make the poor of the land to fail;'),
            plain(5, 'Saying, When will the new moon be gone, that we may sell corn? and the sabbath, that we may set forth wheat, making the ephah small, and the shekel great, and falsifying the balances by deceit?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos8-merchants-greedy',
          html:
            'The merchants are watching the new moon end so they can cheat with smaller measures. Their fast is not religion; it is impatience to get back to fraud[res:sefaria-amos-8][res:bibleodyssey-famine-word].',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(6, 'That we may buy the poor for silver, and the needy for a pair of shoes; yea, and sell the refuse of the wheat?'),
            plain(7, 'The Lord hath sworn by the excellency of Jacob, Surely I will never forget any of their works.'),
            plain(8, 'Shall not the land tremble for this, and every one mourn that dwelleth therein? and it shall rise up wholly as a flood; and it shall be cast out and drowned, as by the flood of Egypt.'),
            plain(9, 'And it shall come to pass in that day, saith the Lord God, that I will cause the sun to go down at noon, and I will darken the earth in the clear day:'),
            plain(10, 'And I will turn your feasts into mourning, and all your songs into lamentation; and I will bring up sackcloth upon all loins, and baldness upon every head; and I will make it as the mourning of an only son, and the end thereof as a bitter day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos8-end',
          html:
            'The summer fruit signals the end of the season, the end of time for repentance. The songs of the temple will become howlings. The feasts will become mourning. Yet Israel has been cheating the poor, falsifying scales, selling the needy for a pair of shoes. The judgment fits the crime[res:sefaria-amos-8-v1].',
        },
        {
          kind: 'carry',
          html:
            'How we treat the poor is how we treat God. Israel\'s oppression of the needy is a direct affront to God. The judgment comes not just because Israel has sinned, but because she has sinned against the vulnerable. Where are you tempted to exploit or ignore the poor? How will you change?',
        },
        {
          kind: 'reflection',
          id: 'amos8-poor',
          prompt: 'Israel was judged for swallowing up the needy and cheating the poor. How do you treat the vulnerable? Where does God call you to greater compassion?',
        },
      ],
    },

    {
      ref: 'Amos 8:11–14',
      title: 'The Famine of God\'s Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('Behold, the days come, saith the Lord God, that I will send a '),
                hp('famine in the land, not a famine of bread, nor a thirst for water, but of hearing the words of the Lord', 'amos8-famine'),
                t(':'),
              ],
            },
            plain(12, 'And they shall wander from sea to sea, and from the north even to the east, they shall run to and fro to seek the word of the Lord, and shall not find it.'),
            plain(13, 'In that day shall the fair virgins and young men faint for thirst.'),
            plain(14, 'They that swear by the sin of Samaria, and say, Thy god, O Dan, liveth; and, The manner of Beer-sheba liveth; even they shall fall, and never rise up again.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos8-famine',
          html:
            'The deepest famine is the absence of God\'s word. Israel will hunger and thirst for the word of God and will not find it. She has rejected the prophets. Now God will withdraw His word. They will wander seeking and finding nothing. This is the judgment of spiritual deprivation.',
        },
        {
          kind: 'carry',
          html:
            'To be without God\'s word is to be lost. We live by every word that comes from God\'s mouth. When that word is absent, we are empty. How do you respond to God\'s word when it comes? Are you listening? Are you preserving it?',
        },
        {
          kind: 'christ',
          id: 'amos8-christ',
          title: 'Christ Connection — The Bread of Life',
          html:
            'Amos prophecies a famine of God\'s word — people will hunger for it and find nothing. The judgment is spiritual deprivation. Yet Christ steps into this hunger and names Himself the solution: "I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst" (John 6:35). Where there is famine, He is sustenance. Where there is silence, His voice speaks. The word of God that Israel rejected is made flesh in Jesus — not to condemn but to nourish, to fill the deepest hunger of the human heart.',
        },
        {
          kind: 'reflection',
          id: 'amos8-word',
          prompt: 'The deepest famine is the absence of God\'s Word. How dependent are you on God\'s Word for your spiritual survival? What would you do if His Word were taken from you?',
        },
      ],
    },

    {
      ref: 'Amos 8 · All',
      title: 'The Word of God',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos8-theme',
          html:
            'Amos 8 teaches that the deepest judgment is not external famine but the withdrawal of God\'s word. Without God\'s voice, we are lost. This is why the gift of God\'s word — the Bible, the revelation of Christ — is so precious. It is life itself.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
