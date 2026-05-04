import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 3 — Hosea Buys Gomer Back
 *
 * The Lord commands Hosea again: "Go yet, love a woman beloved of her friend,
 * yet an adulteress." Hosea buys her back for silver and barley. He takes her
 * home and says, "Thou shalt abide for me many days; thou shalt not play the
 * harlot, and thou shalt not be for another man." The metaphor is now complete:
 * as Hosea redeems Gomer, so Christ redeems His people.
 */
export const HOSEA_3: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  topicTags: ['faithfulness', 'mercy', 'sin', 'love'],
  opener: {
    topical: true,
    caption: 'Hosea 3',
  },
  intros: [
    'Hosea 3 returns to the narrative. Gomer has abandoned Hosea and gone back to her lovers. Hosea could reject her, divorce her, let her go. Instead, God commands him: "Go yet, love a woman beloved of her friend, yet an adulteress." Love her again. Buy her back. Take her home.',
    'This chapter contains some of the most stunning imagery in Scripture. Hosea purchases Gomer for fifteen shekels of silver and a homer and a half of barley. He buys her out of slavery — the slavery to her false lovers — and takes her home. The price is paid. The covenant is renewed. This is redemption made visible.',
  ],

  bottomShare: {
    label: 'Share Hosea 3',
    quote:
      'Hosea buys Gomer back from her lovers and takes her home. In his redemption of an unfaithful wife, we see Christ buying back His Bride with His own life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 3 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.3',
      description: 'Rabbinic and classical sources on Hosea&apos;s redemption of Gomer as a parable of God&apos;s redemptive love.',
    },
    {
      id: 'sefaria-hosea-3-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 3 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Hosea.3',
      description: 'The Hebrew text of Hosea 3 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    {
      ref: 'Hosea 3:1–3',
      title: 'The Redemption of Gomer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Then said the Lord unto me, '),
                hp('Go yet, love a woman beloved of her friend, yet an adulteress, according to the love of the Lord toward the children of Israel', 'hosea3-command'),
                t(', who look to other gods, and love flagons of wine.'),
              ],
            },
            plain(2, 'So I bought her to me for fifteen shekels of silver, and for an homer of barley, and an half homer of barley:'),
            {
              number: 3,
              spans: [
                t('And I said unto her, Thou shalt abide for me many days; thou shalt not play the harlot, and thou shalt not be for another man: so will I also be for thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea3-command',
          html:
            'God commands Hosea to love again — not just to forgive, but to love. And He explains the reason: "according to the love of the Lord toward the children of Israel, who look to other gods." This is the heart of redemption. The Lord loves Israel not because Israel deserves it, not because Israel will be faithful, but because love is the nature of God. Hosea is to enact that love. He is to be the sign of a God who loves the unfaithful[res:sefaria-hosea-3][res:bibleodyssey-hosea-redemption].',
        },
        {
          kind: 'hebrew',
          id: 'hosea3-qanah',
          title: 'Qanah — "To Buy" or "To Redeem"',
          script: 'קָנָה',
          translit: '<strong>Qanah</strong> · to buy; to acquire; to redeem',
          description:
            'Hosea "buys" Gomer — qanah. The word suggests both a simple purchase and a redemption, a bringing back into covenant. The price is paid: fifteen shekels of silver and barley. In the New Testament, Paul will use language of being "bought with a price" to describe redemption through Christ.',
        },
        {
          kind: 'carry',
          html:
            'Hosea is commanded to love not because Gomer deserves it but because loving her is an act of obedience to God. In your own life, is there someone whom God is asking you to love again? Someone unfaithful? Someone who has hurt you? What would it mean to love them "according to the love of the Lord"?',
        },
        {
          kind: 'reflection',
          id: 'hosea3-love-again',
          prompt: 'Hosea is commanded to love Gomer again after her infidelity. Who is God asking you to love again? What makes that love possible?',
        },
      ],
    },

    {
      ref: 'Hosea 3:4–5',
      title: 'The Long Waiting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(4, 'For the children of Israel shall abide many days without a king, and without a prince, and without a sacrifice, and without an image, and without an ephod, and without teraphim:'),
            {
              number: 5,
              spans: [
                t('Afterward shall the children of Israel return, and '),
                hp('seek the Lord their God, and David their king', 'hosea3-return'),
                t('; and shall fear the Lord and his goodness in the latter days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea3-return',
          html:
            'Israel will abide "many days" without a king, without a prince, without sacrifice, without image. This is the long exile — the centuries without temple, without sacrifice, without visible signs of God&apos;s presence. And yet the promise stands: afterward, they will return. They will seek the Lord and David their king. The waiting will end. The restoration will come. This is what it means to live in covenant love — to trust that even in the darkest season, God will bring you home[res:sefaria-hosea-3-v1].',
        },
        {
          kind: 'carry',
          html:
            'The chapter ends with a promise for "the latter days" — for a time of return and restoration. Hosea and Gomer&apos;s story points beyond itself to God&apos;s ultimate redemption of His people. In your own seasons of waiting, can you hold to the promise that restoration will come?',
        },
        {
          kind: 'reflection',
          id: 'hosea3-waiting',
          prompt: 'Israel must wait many days before the restoration comes. What are you waiting for? How does the promise of God&apos;s faithfulness sustain you in the waiting?',
        },
      ],
    },

    {
      ref: 'Hosea 3 · All',
      title: 'The Cost of Redemption',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea3-redemption-cost',
          html:
            'Hosea buys Gomer for fifteen shekels of silver and barley. The cost is specific. It is not paid in gold or in grand gesture. It is paid in the currency of life — silver and the grain that sustains. When redemption comes, it costs. Someone must pay the price. In Hosea&apos;s case, he pays for Gomer. In God&apos;s case, He will pay the price through His Son.',
        },
        {
          kind: 'christ',
          id: 'hosea3-christ-price',
          title: 'Christ Connection — The Price of Redemption',
          html:
            'Christ is revealed as the Redeemer who buys back His Bride — the church — not with silver or barley, but with His own blood. Peter writes, "Ye were not redeemed with corruptible things, as silver and gold...but with the precious blood of Christ, as of a lamb without blemish and without spot" (1 Peter 1:18–19). Hosea&apos;s redemption of Gomer foreshadows Christ&apos;s redemption of His people. The price is paid. The covenant is renewed. We are bought back.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
