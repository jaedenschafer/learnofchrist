import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 47 — The River of Life
 *
 * From the threshold of the temple flows a river—growing from a trickle to a
 * mighty stream. Where it flows, the Dead Sea comes alive. Swamps become sweet
 * water. Trees grow on the banks, and their leaves are for healing. This is a
 * vision of life flowing from God&apos;s dwelling place, bringing wholeness and
 * restoration to all it touches.
 */
export const EZEKIEL_47: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 47,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'In one of the most powerful images in all of Scripture, Ezekiel sees water flowing from the threshold of God&apos;s temple. At first it is a mere trickle, ankle-deep. But as the river flows eastward, it grows. At one point it is knee-deep. Then waist-deep. Finally, it is so deep he cannot ford it—it is a river to swim in. And everywhere this water flows, it brings life. The salt marshes become fresh. The Dead Sea teems with fish. Trees flourish, bearing new fruit monthly, their leaves never withering.',
    'This is the vision of God&apos;s kingdom spreading outward from its source, bringing healing and life to all it touches. It is the image John returns to at the end of Revelation: the river of the water of life, flowing from the throne of God, with the tree of life on either bank. Christ is that river, bringing eternal life to a world that is dying.',
  ],

  sections: [
    {
      ref: 'Ezekiel 47:1–12',
      title: 'The River Flows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(1, 'Afterward he brought me again unto the door of the house; and, behold, waters issued out from under the threshold of the house eastward: for the forefront of the house stood toward the east, and the waters came down from under from the right side of the house, at the south side of the altar.'),
            plain(3, 'And when the man that had the line in his hand went forth eastward, he measured a thousand cubits, and he brought me through the waters; the waters were to the ankles.'),
            plain(4, 'Again he measured a thousand, and brought me through the waters; the waters were to the knees. Again he measured a thousand, and brought me through; the waters were to the loins.'),
            plain(5, 'Afterward he measured a thousand; and it was a river that I could not pass over: for the waters were risen, waters to swim in, a river that could not be forded.'),
            plain(9, 'And it shall come to pass, that every thing that liveth, which moveth, whithersoever the rivers shall come, shall live: and there shall be a very great multitude of fish, because these waters shall come thither: for they shall be healed; and every thing shall live whither the river cometh.'),
            plain(12, 'And by the river upon the bank thereof, on this side and on that side, shall grow all trees for meat, whose leaf shall not fade, neither shall the fruit thereof be consumed: it shall bring forth new fruit according to his months, because their waters they issued out of the sanctuary: and the fruit thereof shall be for meat, and the leaf thereof for medicine.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel47-growing-river',
          html:
            'The river grows by stages. Each thousand cubits, it deepens. This is not instantaneous flooding but measured growth. The kingdom of God grows gradually, flowing outward, gathering power, until it becomes unstoppable. By the end, it cannot be forded. It must be swum in.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel47-dead-sea',
          html:
            'The most barren place in Israel is the Dead Sea—so salt that nothing can live. And yet Ezekiel sees it transformed. Fish swim in it. The salt is healed. This is transformation, not destruction. What was dead is made alive. What was bitter is made sweet.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel47-nachal',
          title: 'Nachal — "River/Stream" ',
          script: 'נַחַל',
          translit: '<strong>Nachal</strong> · river; stream; a channel of flowing water; also a valley or wadi',
          description:
            'The nachal is not a static pond but a flowing stream, life-giving, dynamic, moving always toward the sea.',
        },
        {
          kind: 'christ',
          id: 'ezekiel47-christ-river',
          title: 'Christ Connection — The River of Life',
          html:
            'In Revelation 22:1–2, John writes: "He shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life...and the leaves of the tree were for the healing of the nations." Christ is that river. His Spirit flows from His presence, bringing life and healing to all creation. In Him, what was dead is made alive. What was broken is healed.',
        },
        {
          kind: 'carry',
          html:
            'The river begins small but grows unstoppable. This is the pattern of God&apos;s kingdom. It does not conquer through force but through life. It does not destroy what is dry—it makes it green. It does not leave the barren barren—it makes it flourish.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel47-life-flow',
          prompt: 'Where in your life do you need the river of God to flow? What dead places, what barren seasons, what bitter waters are waiting for healing?',
        },
      ],
    },

    {
      ref: 'Ezekiel 47:13–23',
      title: 'The Land Allotted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(13, 'Thus saith the Lord God; This shall be the border whereby ye shall divide the land for an inheritance according to the twelve tribes of Israel: Joseph shall have two portions.'),
            plain(15, 'And this shall be the border of the land toward the north side: from the great sea, the way of Hethlon, as men go into Hamath; Hazarenan, the border of Damascus northward, to the coast of Hamath; for these are his sides east and west; a portion for Dan.'),
            plain(22, 'And it shall come to pass, that ye shall divide it by lot for an inheritance unto you, and to the strangers that sojourn among you, which shall beget children among you: and they shall be unto you as born in the country among the children of Israel; they shall have inheritance with you among the tribes of Israel.'),
            plain(23, 'And it shall come to pass, that in what tribe the stranger sojourneth, there shall ye give him his inheritance, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel47-borders',
          html:
            'The borders of the land are redrawn, and the distribution is made according to the twelve tribes. Joseph receives two portions, honoring him. The boundaries are clear and accessible to all twelve tribes.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel47-stranger',
          html:
            'The strangers who sojourn in Israel, who have become part of the community, are given equal inheritance. This is remarkable. There is no second-class status in the renewed Israel. The foreigner who has made a home among God&apos;s people is treated as native-born.',
        },
        {
          kind: 'carry',
          html:
            'The vision of God&apos;s kingdom is remarkably inclusive. The river brings life to all it touches. The inheritance is shared. The stranger is not exploited but embraced. This is the shape of God&apos;s justice.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel47-stranger-welcome',
          prompt: 'How does your community treat the stranger? Are they genuinely included, or are they marginalized? What would it mean to give them true inheritance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Waters issued out from under the threshold...Every thing that liveth...shall live.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 47 · Study Guide',
  },

  hasHebrew: true,
};
