import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 27 — Lament Over Tyre
 *
 * The prophet sings an elaborate dirge over Tyre—the great merchant ship of
 * the ancient world. The cargo list is exhaustive: silver, iron, tin, lead from
 * all nations. Cedar from Lebanon. Fine linen from Egypt. Precious stones,
 * purple, embroidered work. All these treasures were aboard when the ship was
 * wrecked in the waters. "All thy company in the midst of thee shall fall into
 * the midst of the seas in the day of thy ruin." The lamentation is not merely
 * for Tyre, but for the fragility of human prosperity. What can be gathered can
 * be lost. What sinks in the sea cannot be recovered. Behind the specificity of
 * the mourning lies a universal truth: worldly prosperity perishes.
 */
export const EZEKIEL_27: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 27,

  intros: [
    'Ezekiel 27 is the most extensive lamentation in the book. It focuses entirely on Tyre as a merchant vessel—beautiful, well-built, laden with treasures from every known nation. The prophet catalogs the exotic goods: purple fabrics, linen, emeralds, rubies, sapphires, coral, agate, silver, tin, iron. The specificity is overwhelming. This is not a generic attack on Tyre. It is a detailed, sorrowful farewell to a civilization built on commerce.',
    'The chapter ends with the image of the ship wrecked in the sea, sinking into the depths. Mariners will strip the wreckage. All who knew Tyre will weep, asking: who was like Tyre, trading across the seas? And the answer, implicit in the desolation, is: no one. And she is gone. The lamentation teaches a hard lesson: wealth is not security. Trade routes can be severed. Ships can sink. What is built will fall.',
  ],

  sections: [
    {
      ref: 'Ezekiel 27:1–11',
      title: 'The Ship of Tyre',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(4, 'Thy borders are in the midst of the seas: thy builders have perfected thy beauty.'),
            plain(5, 'They have made all thy ship boards of fir trees of Senir: they have taken cedars from Lebanon to make masts for thee.'),
            plain(6, 'Of the oaks of Bashan have they made thine oars; and thy benches of ivory, brought from the isles of Chittim.'),
            plain(7, 'Fine linen with broidered work from Egypt was that which thou spreadest forth to be thy sail; blue and purple from the isles of Elishah was that which covered thee.'),
            plain(10, 'They of Persia and of Lydia and of Phut were in thine army, thy men of war: they hanged the shield and helmet in thee; they set forth thy comeliness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek27-ship',
          html:
            'Tyre is not merely a city. She is a ship—perfectly built, laden with goods, moving across the seas bringing wealth and merchandise to all nations. The ship&apos;s construction speaks to beauty and craftsmanship: cedar from Lebanon for the masts, oak from Bashan for the oars, benches of ivory brought from distant lands. Even the sail is made of fine linen with embroidered work—beauty and function united.',
        },
        {
          kind: 'commentary',
          id: 'ezek27-army',
          html:
            'And the ship carries crew and soldiers from many lands—Persians, Lydians, those from Phut (Africa). They hang shields and helmets on her sides, "setting forth thy comeliness"—displaying her majesty to the world. This is not merely a vessel for trade. It is a symbol of human power, military strength, international prestige.',
        },
        {
          kind: 'hebrew',
          id: 'ezek27-ship-oniyah',
          title: 'Oniyah — "Ship" (Vessel, Craft)',
          script: 'אֳנִיָּה',
          translit: '<strong>Oniyah</strong> · ship, vessel, boat; used metaphorically for states and cities',
          description:
            'Oniyah can mean literally a boat or ship, or metaphorically a state or city. Tyre is called a ship because her identity is inseparable from maritime trade. She floats on the waters of commerce.',
        },
        {
          kind: 'reflection',
          id: 'ezek27-ship-building',
          prompt: 'What kind of "ship" are you building? What are you investing your time and resources in constructing?',
        },
      ],
    },

    {
      ref: 'Ezekiel 27:12–36',
      title: 'The Cargo and the Wreck',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(12, 'Tarshish was thy merchant by reason of the multitude of all kind of riches; with silver, iron, tin, and lead, they traded in thy fairs.'),
            plain(16, 'Syria was thy merchant by reason of the multitude of the wares of thy making: they occupied in thy fairs with emeralds, purple, and broidered work, and fine linen, and coral, and agate.'),
            plain(19, 'And Judah, and the land of Israel, they were thy merchants: they traded in thy market wheat of Minnith, and Pannag, and honey, and oil, and balm.'),
            plain(26, 'Thy rowers have brought thee into great waters: the east wind hath broken thee in the midst of the seas.'),
            plain(27, 'Thy riches, and thy fairs, thy merchandise, thy mariners, and thy pilots, thy calkers, and the occupiers of thy merchandise, and all thy men of war, that are in thee, and in all thy company which is in the midst of thee, shall fall into the midst of the sea in the day of thy ruin.'),
            plain(34, 'In the time when thou shalt be broken by the seas in the depths of the waters thy merchandise and all thy company in the midst of thee shall fall.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek27-cargo',
          html:
            'The catalog of Tyre&apos;s trade is overwhelming. Tarshish brings precious metals—silver, iron, tin, lead. Syria brings emeralds, purple, fine linen, coral. Judah and Israel bring wheat, honey, oil, balm—the good fruits of the land. Every nation contributes. Tyre is the center through which all the world&apos;s goods flow. She has become wealthy beyond measure because everyone needs to trade with her.',
        },
        {
          kind: 'commentary',
          id: 'ezek27-sink',
          html:
            'But then the reversal. "The east wind hath broken thee in the midst of the seas." In a moment, the tide turns. The ship that brought riches from all the earth will sink in the sea. And everything goes down with it: "Thy riches, and thy fairs, thy merchandise, thy mariners, and thy pilots...shall fall into the midst of the sea in the day of thy ruin." Not just the ship, but the crew, the merchants, the wealth—all lost to the depths.',
        },
        {
          kind: 'christ',
          id: 'ezek27-christ-perish',
          title: 'Christ Connection — What Does It Profit?',
          html:
            'Jesus asks: "What shall it profit a man if he shall gain the whole world, and lose his own soul?" (Mark 8:36). Tyre gained the whole world&apos;s trade and lost everything. Her wealth could not save her. Her extensive network of merchants and allies could not protect her. In Christ, we learn that true security is not found in accumulation of goods, but in relationship with the One who endures eternally.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world that celebrates Tyre&apos;s achievement—the gathering of goods, the building of networks, the accumulation of wealth. But Ezekiel reminds us of the fragility. The east wind can come at any moment. What is gathered can be lost. What is built can sink. The only stability is in God.',
        },
        {
          kind: 'reflection',
          id: 'ezek27-perish',
          prompt: 'What would it mean for you to lose everything you have worked to accumulate? How would your faith in God respond?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All thy company in the midst of thee shall fall into the midst of the seas in the day of thy ruin.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 27 · Study Guide',
  },

  hasHebrew: true,
};
