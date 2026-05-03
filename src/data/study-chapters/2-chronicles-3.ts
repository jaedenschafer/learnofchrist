import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 3 — Solomon's Temple on Mount Moriah
 *
 * Solomon begins to build the house of the Lord at Jerusalem on Mount Moriah —
 * the same mountain where Abraham offered Isaac, where David saw the angel of
 * the Lord, where God chose to place His name forever. The temple rises with
 * architectural precision: a foundation 60 cubits long, 20 broad; a porch 120
 * cubits high; rooms and chambers overlaid with pure gold. Within the Most Holy
 * Place stand two cherubim with wings spread 20 cubits. A vail of blue, purple,
 * and crimson hangs before the holy of holies. Before the temple stand the two
 * pillars Jachin and Boaz — "He establishes" and "In him is strength." Every
 * detail points to Christ: the temple as His body, the vail as His flesh,
 * Moriah itself as the place where heaven and earth meet.
 */
export const CHRONICLES_2_3: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 3,

  estimatedMinutes: { beginner: 4, intermediate: 8, deep: 12 },
  intros: [
    'The temple was not a sudden creation. It was built on a foundation prepared by centuries of covenant — by Abraham&apos;s faith on Mount Moriah, by David&apos;s purchase of the threshing floor, by Solomon&apos;s wisdom and wealth. The Lord had appeared to David in that place and told him: "This shall be the house of the Lord God" (1 Chronicles 28:2). Now Solomon, in the fourth year of his reign, lays its foundation.',
    'Every measurement, every material, every architectural choice speaks of something deeper than stone and gold. The temple is the house of God — the place where heaven enters the world, where the glory of the Lord dwells among His people. And the very mountain on which it stands carries the weight of history: this is Moriah, where God tested Abraham and declared, "The Lord will provide."',
  ],

  sections: [
    /* ─── 2 Chronicles 3:1 — Mount Moriah, the Chosen Place ────────────────── */
    {
      ref: '2 Chronicles 3:1',
      title: 'Mount Moriah: The Place of Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Solomon began to build the house of the Lord at Jerusalem in '),
                hp('mount Moriah', 'moriah-covenant'),
                t(', where the Lord appeared unto David his father, in the place that David had prepared in the threshingfloor of Ornan the Jebusite. And he began to build in the second day of the second month, in the fourth year of his reign.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'moriah-covenant',
          html:
            'Mount Moriah is not chosen at random. This is the mountain where God tested Abraham — where he raised his hand to sacrifice his only son, and the Lord said, "Now I know that thou fearest God" (Genesis 22:12). This is the mountain David saw the angel of the Lord standing with a drawn sword (1 Chronicles 21:16), the place where David bought Ornan&apos;s threshing floor and built an altar. Now Solomon builds the temple on this very mountain. The lineage of faith — from Abraham to David to Solomon — converges on this single point. Moriah becomes the axis mundi, the place where the earthly and divine meet.',
        },
        {
          kind: 'hebrew',
          id: 'moriyyah',
          title: 'מוֹרִיָּה — Moriyyah',
          script: 'מוֹרִיָּה',
          translit: '<strong>Moriyyah</strong> · Moriah; "the Lord provides" or "the Lord will be seen"',
          description:
            'The name Moriah echoes Abraham&apos;s words to Isaac: "God will provide himself a lamb" (Genesis 22:8). The Hebrew carries the sense of seeing and providing — the Lord is the one who sees our need and provides the way. It is fitting that the temple, the place where God&apos;s presence dwells and where offerings are made, stands on the mountain whose very name proclaims this truth.',
        },
        {
          kind: 'carry',
          html:
            'God does not choose His dwelling place randomly. He builds His house where covenant has been made, where faith has been tested, where His people have sought Him. What place in your own life has been a mount Moriah — a place where you encountered God&apos;s presence, where your faith was tested, where you learned to trust?',
        },
        {
          kind: 'reflection',
          id: 'moriah-reflection',
          prompt: 'Mount Moriah is where God provided for Abraham, where David encountered the divine. Where have you experienced God&apos;s provision in your own mount Moriah?',
        },
      ],
    },

    /* ─── 2 Chronicles 3:3–9 — The Holy Place: Gold, Palm Trees, and Glory ─── */
    {
      ref: '2 Chronicles 3:3–9',
      title: 'The Holy Place: Overlaid with Gold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(3, 'Now these are the things wherein Solomon was instructed for the building of the house of God. The length by cubits after the first measure was threescore cubits, and the breadth was twenty cubits.'),
            plain(4, 'And the porch that was in the front of the house, the length of it was according to the breadth of the house, twenty cubits, and the height was an hundred and twenty: and he overlaid it within with pure gold.'),
            plain(5, 'And the greater house he cieled with fir tree, which he overlaid with fine gold, and set thereon palm trees and chains.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-3-mid-5',
          html:
            '<p>A turning point shifts focus from building to sustaining what was built.</p>',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('And he garnished the house with precious stones for beauty: and the '),
                hg('gold', 'gold-parvaim'),
                t(' was gold of Parvaim.'),
              ],
            },
            plain(7, 'He overlaid also the house, the beams, the posts, and the walls thereof, and the doors thereof, with gold; and graved cherubims on the walls.'),
            plain(8, 'And he made the most holy house, the length whereof was according to the breadth of the house, twenty cubits, and the breadth thereof twenty cubits: and he overlaid it with fine gold, amounting to six hundred talents.'),
            plain(9, 'And the weight of the nails was fifty shekels of gold. And he overlaid the upper chambers with gold.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'holy-place-dimensions',
          html:
            'The proportions are precise: 60 cubits long, 20 wide. The porch rises 120 cubits — twice the length of the building itself. This is not mere construction; it is a declaration of the infinite reaching down. The high porch symbolizes the bridging of heaven and earth.',
        },
        {
          kind: 'commentary',
          id: 'gold-parvaim',
          html:
            'Every beam, every post, every door is overlaid with fine gold — the gold of Parvaim, a distant region known for its precious metal. Gold represents the purity, the incorruptibility, the divine nature. Nothing in the temple is left ordinary. Everything speaks of the transcendent nature of the God whose house this is.',
        },
        {
          kind: 'commentary',
          id: 'palm-trees-chains',
          html:
            'The palm trees graven on the walls are symbols of victory and peace. The chains suggest the binding together of heaven and earth. Even the ornamental details carry theological weight. A reader moving through the temple would see symbolism in every corner.',
        },
        {
          kind: 'carry',
          html:
            'The temple does not spare expense. Six hundred talents of gold in the Most Holy Place alone. Nails that weigh fifty shekels of pure gold. This lavishness is not wasteful; it is an overflow of gratitude. We honor God by giving Him the best we have. What we build with our time, our talent, our resources — do we build it with the assumption that God deserves the finest, or the cheapest?',
        },
        {
          kind: 'reflection',
          id: 'gold-reflection',
          prompt: 'The temple was built with extravagant materials — pure gold, precious stones, the finest woods. What does it mean to honor God with the best you have, not the least?',
        },
      ],
    },

    /* ─── 2 Chronicles 3:10–13 — The Cherubim in the Most Holy Place ───────── */
    {
      ref: '2 Chronicles 3:10–13',
      title: 'The Cherubim: Guardians of the Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('And in the most holy house he made two '),
                hy('cherubims', 'cherubim-wings'),
                t(' of image work, and overlaid them with gold.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Also the wings of the cherubims were twenty cubits long: one wing of the one cherub was five cubits, reaching to the wall of the house: and the other wing was likewise five cubits, reaching to the wing of the other cherub.'),
              ],
            },
            plain(12, 'And one wing of the other cherub was five cubits, reaching to the wall of the house: and the other wing was five cubits also, joining to the wing of the other cherub.'),
            {
              number: 13,
              spans: [
                t('The wings of these cherubims spread themselves forth twenty cubits: and they stood on their feet, and their faces were '),
                hg('inward', 'cherubim-faces'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cherubim-wings',
          html:
            'Two golden cherubim stand in the Most Holy Place, their wings spread 20 cubits. Cherubim are not cute little angels; they are mighty beings, guardians of God&apos;s throne. They appear at the gates of Eden, on the Ark of the Covenant, in Isaiah&apos;s vision of the throne room. Here they stand above the mercy seat where the high priest enters once a year on the Day of Atonement. They frame the space where heaven touches earth.',
        },
        {
          kind: 'commentary',
          id: 'cherubim-faces',
          html:
            'The faces of the cherubim turn inward, toward one another. They gaze upon the mercy seat, the place of God&apos;s presence. They do not look outward to the world; they look toward the divine. This is the posture of worship: the inward gaze, the attention fixed on God&apos;s presence.',
        },
        {
          kind: 'hebrew',
          id: 'keruvim',
          title: 'כְּרוּבִים — Keruvim (Cherubim)',
          script: 'כְּרוּבִים',
          translit: '<strong>Keruvim</strong> · cherubim; mighty celestial beings',
          description:
            'Cherubim are attendants of God&apos;s throne, associated with majesty, holiness, and the divine presence. In the temple, they overshadow the mercy seat, marking the boundary between the human and the divine. They are not intermediaries, but guardians of the sacred space.',
        },
        {
          kind: 'carry',
          html:
            'The cherubim turn their faces inward toward God&apos;s presence. In worship, we too are called to turn our faces inward — to fix our attention on God, not on the distractions of the world. The cherubim model for us what it means to keep our gaze on the Lord.',
        },
        {
          kind: 'reflection',
          id: 'cherubim-reflection',
          prompt: 'The cherubim stand with their faces turned inward, gazing at God&apos;s presence. Where do you turn your gaze in moments of worship or crisis?',
        },
      ],
    },

    /* ─── 2 Chronicles 3:14 — The Vail: Heaven&apos;s Curtain ──────────────────── */
    {
      ref: '2 Chronicles 3:14',
      title: 'The Vail: Between the Holy and the Most Holy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('And he made the vail of blue, and purple, and crimson, and fine linen, and wrought '),
                hy('cherubims', 'vail-cherubims'),
                t(' thereon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vail-cherubims',
          html:
            'The vail is not a simple curtain. It is woven with blue, purple, and crimson — royal colors signifying heaven, the divine, and blood. Cherubim are embroidered into its fabric, continuing the pattern of the Most Holy Place. This vail separates the visible from the invisible, the human from the divine, the outer sanctuary from the place where God&apos;s presence dwells. Only the high priest may pass beyond it, and only once a year on the Day of Atonement.',
        },
        {
          kind: 'hebrew',
          id: 'paroket',
          title: 'פָּרֹ֫כֶת — Paroket',
          script: 'פָּרֹ֫כֶת',
          translit: '<strong>Paroket</strong> · vail; the curtain separating the holy from the most holy',
          description:
            'The paroket is more than a curtain; it is a boundary, a threshold between realms. It represents the mystery of God&apos;s hiddenness and the exclusiveness of the place where He dwells. Yet in the New Testament, when Christ dies, the vail is torn in two — heaven opens, access is granted to all.',
        },
        {
          kind: 'christ',
          id: 'vail-torn',
          title: 'Christ Connection — The Vail Torn',
          html:
            'At the moment of Christ&apos;s death, Matthew tells us, "the vail of the temple was rent in twain from the top to the bottom" (Matthew 27:51). The vail that separated human from divine, outer from inner, earthly from heavenly — is torn open. In Matthew and Mark, the high priest&apos;s veil is torn; in Hebrews, we read of "a new and living way" through "the vail, that is to say, his flesh" (Hebrews 10:19–20). Christ becomes both the vail and the one who tears it open. The separation is ended. Access is restored.',
        },
        {
          kind: 'carry',
          html:
            'For centuries, the vail hung between God and His people. One man alone could pass it, once a year. Then Christ came and His body became the vail — the place where heaven and earth meet, where human and divine are joined. And when He died, the vail was torn, opening access to all who come through Him.',
        },
        {
          kind: 'reflection',
          id: 'vail-reflection',
          prompt: 'The vail separated people from God&apos;s presence. Christ removed that separation. What barriers have you felt between yourself and God&apos;s presence, and how has Christ made a way through?',
        },
      ],
    },

    /* ─── 2 Chronicles 3:15–17 — The Two Pillars: Jachin and Boaz ──────────── */
    {
      ref: '2 Chronicles 3:15–17',
      title: 'The Pillars: Establishment and Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(15, 'Also he made before the house two pillars of thirty and five cubits high, and the chapiter that was on the top of each of them was five cubits.'),
            {
              number: 16,
              spans: [
                t('And he made chains, as in the oracle, and put them on the heads of the pillars; and made an hundred pomegranates, and put them on the chains.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he reared up the pillars before the temple, one on the right hand, and the other on the left; and called the name of that on the right hand '),
                hp('Jachin', 'jachin-meaning'),
                t(': and the name of that on the left '),
                hp('Boaz', 'boaz-meaning'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jachin-meaning',
          html:
            'Jachin — "He establishes." The right pillar bears a name that speaks of God&apos;s work in human history. God establishes the throne, the covenant, the kingdom. God establishes us in His truth. The name is a promise: the house of God stands on a foundation that cannot be shaken.',
        },
        {
          kind: 'commentary',
          id: 'boaz-meaning',
          html:
            'Boaz — "In him is strength." The left pillar bears a name that speaks of God&apos;s power. Boaz is also the name of Ruth&apos;s kinsman-redeemer, the man who shows strength and faithfulness in redeeming the widow. The pillar proclaims the strength of God, the security of His people.',
        },
        {
          kind: 'hebrew',
          id: 'jachin-script',
          title: 'יָכִין — Yachin',
          script: 'יָכִין',
          translit: '<strong>Yachin</strong> · "he will establish"',
          description:
            'From the root meaning "to establish" or "to stand." God establishes the heavens and the earth. He establishes His covenant. He establishes the house of David. Yachin speaks of permanent foundation, of something solid and sure.',
        },
        {
          kind: 'hebrew',
          id: 'boaz-script',
          title: 'בֹּעַז — Boaz',
          script: 'בֹּעַז',
          translit: '<strong>Boaz</strong> · "in him is strength"',
          description:
            'The etymology is debated, but the sense is clear: strength, swiftness, might. Boaz embodies the strength that accomplishes redemption, that delivers the vulnerable, that stands firm. The pillar proclaims the sufficiency of God&apos;s power.',
        },
        {
          kind: 'christ',
          id: 'jachin-boaz-christ',
          title: 'Christ Connection — The Foundation and the Strength',
          html:
            'Christ is both Jachin and Boaz. He is the one who establishes — "by him were all things created" (Colossians 1:16); He upholds all things by the word of His power (Hebrews 1:3). And He is the strength by which we stand — "I can do all things through Christ which strengtheneth me" (Philippians 4:13). The two pillars stand at the entrance to the temple, proclaiming to all who enter: establishment and strength belong to God alone. We are founded on His permanence; we are girded with His might.',
        },
        {
          kind: 'carry',
          html:
            'We live in uncertain times. Pillars fall. Foundations crack. But these two names call us to something deeper: there is a foundation that cannot be shaken, a strength that never fails. We are established in Christ, and our strength is not our own but His. What fears do you carry about the stability of your life? Christ invites you to rest on a foundation that cannot be moved.',
        },
        {
          kind: 'reflection',
          id: 'pillars-reflection',
          prompt: 'Jachin (establishment) and Boaz (strength) stand at the entrance to the temple. In what areas of your life do you most need to trust in God&apos;s establishment and strength?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 3',
    quote:
      'On Mount Moriah, where Abraham was tested and David encountered the angel, Solomon builds the temple. Every detail — gold, cherubim, vail, and pillars — points to the meeting place of heaven and earth, and ultimately to Christ, who tears open the vail.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 3 · Study Guide',
  },

  hasHebrew: true,
};
