import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_11: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 11,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'Hosea 11 may be the most tender passage in the book. "When Israel was a child, then I loved him, and called my son out of Egypt." The opening words speak of love — not conditional love, but the love of a father for a child. Yet Israel grew and turned away from the One who loved him.',
    'The chapter contains words quoted in Matthew 2:15 as a prophecy of Christ: "I called my son out of Egypt." What began as the historical redemption of Israel becomes the story of Christ — the Son of God called out of Egypt, bearing Israel&apos;s story within His own. The tenderness and the rejection of a father — these become Christ&apos;s story too.',
  ],

  bottomShare: {
    label: 'Share Hosea 11',
    quote:
      '"When Israel was a child, then I loved him, and called my son out of Egypt." God&apos;s love is not based on Israel&apos;s faithfulness but on His own fatherly heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 11 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 11 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.11',
      description: 'Primary sources on God&apos;s fatherly love for Israel from infancy through rejection and threatened judgment.',
    },
    {
      id: 'intertextual-hosea-11-matthew-2',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hosea 11:1 ↔ Matthew 2:15 — Son Called Out of Egypt',
      url: 'https://intertextual.bible/text/hosea-11.1/matthew-2.15',
      description: 'Intertextual connection showing how Matthew applies Hosea&apos;s prophecy of Israel to Jesus as God&apos;s Son.',
    },
  ],

  sections: [
    {
      ref: 'Hosea 11:1–4',
      title: 'A Father&apos;s Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('When Israel was a child, then I '),
                hp('loved him, and called my son out of Egypt', 'hosea11-love'),
                t('.'),
              ],
            },
            plain(2, 'As they called them, so they went from them: they sacrificed unto Baalim, and burned incense to graven images.'),
            plain(3, 'I taught Ephraim also to go, taking them by their arms; but they knew not that I healed them.'),
            {
              number: 4,
              spans: [
                t('I drew them with cords of a man, with bands of love: and I was to them as they that take off the yoke on their jaws, and I laid meat unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea11-love',
          html:
            'God loves Israel not because she deserves it, not based on her response, but because He chose to love her as a father loves a child. He called her out of Egypt — redeemed her, made her His own. The word "love" here is the deepest love — the covenant love of a father for his son. And this love is called "my son," making Israel God&apos;s own child[res:sefaria-hosea-11][res:intertextual-hosea-11-matthew-2].',
        },
        {
          kind: 'hebrew',
          id: 'hosea11-ahav',
          title: 'Ahav — "To Love"',
          script: 'אָהַב',
          translit: '<strong>Ahav</strong> · to love; to hold dear; to be devoted to',
          description:
            'The word "ahav" is the verb of love — the deep affection God bears toward His people. It is used of the love between spouses, between parents and children, between friends. When God says He loves Israel, He uses the word of deepest personal devotion.',
        },
        {
          kind: 'carry',
          html:
            'God taught Ephraim to go, took her by the arms, healed her. He drew her with cords of love. What a picture of a father teaching his child to walk! And yet that child turns away. What love — what patient, tender love — does God bear toward you? And how are you responding?',
        },
        {
          kind: 'reflection',
          id: 'hosea11-father',
          prompt: 'God drew Israel with cords of love. How has God drawn you toward Himself? How are you responding to that fatherly love?',
        },
      ],
    },

    {
      ref: 'Hosea 11:5–11',
      title: 'How Shall I Give Thee Up?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(5, 'He shall not return into the land of Egypt, but the Assyrian shall be his king, because they refused to return.'),
            plain(6, 'And the sword shall abide on his cities, and shall consume his branches, and devour them, because of their own counsels.'),
            plain(7, 'And my people are bent to backsliding from me: though they called them to the most High, none at all would exalt him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-11-78mid-1',
          html:
            '&quot;When Israel was a child, then I loved him.&quot; The prophet pivots from indictment to a Father&apos;s memory — and the memory is what stays the LORD&apos;s hand.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 8,
              spans: [
                t('How shall I give thee up, Ephraim? how shall I deliver thee, Israel? how shall I make thee as Admah? how shall I set thee as Zeboim? mine heart is turned within me, my repentings are kindled together.'),
              ],
            },
            plain(9, 'I will not execute the fierceness of mine anger, I will not return to destroy Ephraim: for I am God, and not man; the Holy One in the midst of thee: and I will not enter into the city.'),
            plain(10, 'They shall walk after the Lord: he shall roar like a lion: when he shall roar, then the children shall tremble from the west.'),
            plain(11, 'They shall tremble as a bird out of Egypt, and as a doves out of the land of Assyria: and I will place them in their houses, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea11-giveup',
          html:
            'The heart of God is revealed in these words: "How shall I give thee up, Ephraim? how shall I deliver thee, Israel?" God faces the choice that every parent of a wayward child faces. Should He destroy? Should He let them go? Yet He cannot. His heart "is turned within me, my repentings are kindled together." His compassion overcomes His judgment. He will not destroy. He will not abandon. He is God, not man.',
        },
        {
          kind: 'carry',
          html:
            'Israel has bent to backsliding, but God will not execute the fierceness of His anger. He will roar like a lion — a sound that will shake the nations. But His roar is not to destroy but to call His people home. When God calls, they will come trembling back from exile — from Egypt, from Assyria. They will return home.',
        },
        {
          kind: 'reflection',
          id: 'hosea11-giveup-reflection',
          prompt: 'God says, "How shall I give thee up, Ephraim?" What is God unwilling to give up in your life? How does His refusal to abandon you change your understanding of His love?',
        },
      ],
    },

    {
      ref: 'Hosea 11 · All',
      title: 'The Tenderness of God',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea11-theme',
          html:
            'Hosea 11 reveals God as a father whose love is not diminished by the rejection of His child. God does not love Israel because she is faithful. He loves her because she is His. His compassion is not earned. It is freely given. And even when judgment comes, it does not come from anger but from a heart struggling with itself: "How shall I give thee up?"',
        },
        {
          kind: 'christ',
          id: 'hosea11-christ-son',
          title: 'Christ Connection — The Son Called Out of Egypt',
          html:
            'Matthew quotes Hosea 11:1 as fulfilled in Christ: "I called my son out of Egypt." Jesus is the true Israel, the true Son of God. He carries within His own story the story of Israel — called, loved, betrayed, rejected, yet ultimately redeemed. The Father&apos;s love for His people becomes the Father&apos;s love for His Son, and Christ bears both the pain and the redemption.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
