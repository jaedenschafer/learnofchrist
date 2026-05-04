import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 103 — The Mercy of God
 *
 * "Bless the Lord, O my soul." The psalmist calls himself to worship, not because
 * his circumstances have changed but because he has remembered who God is. God is
 * merciful, healing, forgiving—"Like as a father pitieth his children, so the
 * Lord pitieth them that fear him." And the signature image: "As far as the east
 * is from the west, so far hath he removed our transgressions from us." God&apos;s
 * mercy is not temporary. It is as permanent and vast as the geography of heaven.
 */
export const PSALMS_103: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 103,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /David the Psalmist Praise/i,
    caption: 'Psalms 103',
  },
  intros: [
    'Psalm 103 is one of the great celebrations of God&apos;s character in the Psalter. It opens with a direct address to the soul: "Bless the Lord, O my soul." The psalmist is talking to himself, commanding his own heart to remember, to praise, to bless. This is not the prayer of someone whose circumstances are perfect. It is the prayer of someone who has chosen to focus not on his troubles but on God&apos;s nature. And what he remembers is breathtaking: God is merciful and gracious, slow to anger and plenteous in mercy. He does not deal with us according to our sins. Instead, He removes our transgressions from us as far as the east is from the west.',
    'This psalm has shaped Christian understanding of forgiveness. When we sing "as far as the east is from the west," we are invoking Psalm 103. We are claiming a biblical promise that God does not hold grudges, does not bring up past failures, does not treat us as our wickedness deserves. Instead, He loves us with a father&apos;s love. This is not soft sentimentality. It is the hardest, most costly love of all: the love that forgives.',
  ],

  sections: [
    {
      ref: 'Psalm 103:1–14',
      title: 'Bless the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 103,
          lines: [
            plain(1, 'Bless the Lord, O my soul: and all that is within me, bless his holy name.'),
            plain(2, 'Bless the Lord, O my soul, and forget not all his benefits:'),
            plain(3, 'Who forgiveth all thine iniquities; who healeth all thy diseases;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-103-78mid-1',
          html:
            'Call to bless the Lord for His benefits opens into account of His character. Gratitude becomes theology. [res:sefaria-psalm-103]',
        },
        {
          kind: 'scripture',
          chapter: 103,
          lines: [
            plain(4, 'Who redeemeth thy life from destruction; who crowneth thee with lovingkindness and tender mercies;'),
            plain(5, 'Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle&apos;s.'),
            plain(6, 'The Lord executeth righteousness and judgment for all that are oppressed.'),
            plain(8, 'The Lord is merciful and gracious, slow to anger, and plenteous in mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps103-mid',
          html:
            '&apos;Bless the Lord&apos; becomes &apos;forget not all his benefits.&apos; Praise shifts to memory. The benefits are listed—forgiveness, healing, redemption, mercy—and then the foundation of mercy is named. God is merciful because that is His character, not because we deserve it[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'scripture',
          chapter: 103,
          lines: [
            plain(10, 'He hath not dealt with us after our sins; nor rewarded us according to our iniquities.'),
            plain(11, 'For as the heaven is high above the earth, so great is his mercy toward them that fear him.'),
            plain(12, 'As far as the east is from the west, so far hath he removed our transgressions from us.'),
            plain(13, 'Like as a father pitieth his children, so the Lord pitieth them that fear him.'),
            plain(14, 'For he knoweth our frame; he remembereth that we are dust.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps103-bless-soul',
          html:
            'The psalmist begins with a command—not to God, but to himself. He blesses the Lord. He tells his own soul to praise. This is the posture of faith: to choose, deliberately, to speak blessing when you might otherwise speak complaint. And what has moved him to this choice? Not changed circumstances, but remembering. He tells himself: "Forget not all his benefits." And then he lists them. Forgiveness. Healing. Redemption from destruction. A crown of loving-kindness. Good things that satisfy. Renewal. Each benefit is named.',
        },
        {
          kind: 'commentary',
          id: 'ps103-merciful-gracious',
          html:
            'Then the psalmist makes a startling claim: "The Lord is merciful and gracious, slow to anger, and plenteous in mercy. He hath not dealt with us after our sins; nor rewarded us according to our iniquities." This is the gospel in the Old Testament. We deserve judgment. We deserve to be repaid according to what we have done. But God does not do what we deserve. Instead, He shows mercy. He is slow to anger with us. He is full of compassion. The distance between what we deserve and what He gives us is immeasurable.',
        },
        {
          kind: 'hebrew',
          id: 'ps103-rachamim',
          title: 'Rachamim — "Mercy" (Compassion)',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercy; compassion; the plural of "womb"; deep, maternal feeling',
          description:
            'The Hebrew word for mercy is rachamim, which comes from the word for womb, rechem. It suggests the deep, visceral, protective love a mother feels for her child. God&apos;s mercy is not a legal arrangement. It is maternal, protective, utterly committed to the welfare of the beloved.',
        },
        {
          kind: 'commentary',
          id: 'ps103-east-west',
          html:
            'And then comes the image that has comforted millions: "As far as the east is from the west, so far hath he removed our transgressions from us." Our sins are not merely forgiven—they are removed. Cast away. Put at a distance we cannot measure. The east and the west never meet. They are perpetually opposite directions. Our transgressions are given that kind of distance from us. When God forgives us, He does not file away our guilt for future reference. He removes it entirely.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 103 invites us into a practice: the practice of remembering. When we are discouraged, it calls us to bless the Lord anyway—not because our situation has changed, but because God&apos;s character has not. We are invited to remember, as the psalmist does, all the benefits: the times we have been forgiven when we deserved judgment, healed when we deserved illness, restored when we deserved ruin. And in that remembering, our souls begin to bless.',
        },
        {
          kind: 'reflection',
          id: 'ps103-remember-benefits',
          prompt: 'What are the benefits you have been given that you take for granted? Can you name one forgiveness, one healing, one moment of undeserved mercy?',
        },
      ],
    },

    {
      ref: 'Psalm 103:15–22',
      title: 'The Everlasting Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 103,
          lines: [
            plain(15, 'As for man, his days are as grass: as a flower of the field, so he flourisheth.'),
            plain(16, 'For the wind passeth over it, and it is gone; and the place thereof shall know it no more.'),
            plain(17, 'But the mercy of the Lord is from everlasting to everlasting upon them that fear him, and his righteousness unto children&apos;s children;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-103-78mid-2',
          html:
            'Call to bless the Lord for His benefits opens into account of His character. Gratitude becomes theology.',
        },
        {
          kind: 'scripture',
          chapter: 103,
          lines: [
            plain(19, 'The Lord hath prepared his throne in the heavens; and his kingdom ruleth over all.'),
            plain(20, 'Bless the Lord, ye his angels, that excel in strength, that do his commandments, hearkening unto the voice of his word.'),
            plain(21, 'Bless ye the Lord, all ye his hosts; ye ministers of his, that do his pleasure.'),
            plain(22, 'Bless the Lord, all his works in all places of his dominion: Bless the Lord, O my soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps103-grass-flower',
          html:
            'The psalmist returns to the theme of human frailty. Our days are like grass, like a flower. We flourish for a moment and then the wind passes and we are gone. From the perspective of eternity, human life is brief and delicate. But here is the astonishing thing: though we are like grass that withers, God&apos;s mercy toward us is not temporary. It is eternal. From everlasting to everlasting, His compassion rests on those who fear Him.',
        },
        {
          kind: 'commentary',
          id: 'ps103-righteousness-children',
          html:
            'And His righteousness extends to our children&apos;s children. God&apos;s covenant mercy does not expire at our death. It flows forward into the generations that follow us. Those who are born to faithful parents inherit a blessing. But even more: God&apos;s mercy can skip generations, working backward to redeem those whose parents did not know Him, forward to preserve those whose grandparents were faithful.',
        },
        {
          kind: 'christ',
          id: 'ps103-christ-mercy',
          title: 'Christ Connection — God&apos;s Everlasting Compassion',
          html:
            'God&apos;s mercy, which the psalmist describes as everlasting and vast, is ultimately revealed in Christ. Jesus, moved by compassion, healed the sick, forgave the sinner, raised the dead. He came not to judge but to forgive. And on the cross, He bore the full weight of judgment so that we could receive full measure of mercy. His incarnation and death are God saying to humanity: "My mercy toward you is so great that I will become like you and suffer your punishment so that you are freed from it." Every act of mercy in Jesus&apos; ministry is a preview of the ultimate mercy accomplished through His sacrifice. [res:bible-odyssey-psalm-103]',
        },
        {
          kind: 'carry',
          html:
            'The psalm ends by calling all creation to bless the Lord—the angels, the hosts of heaven, all of God&apos;s works. And it returns to the personal: "Bless the Lord, O my soul." Our praise is one small voice in a cosmic chorus. But it matters. The God whose kingdom rules over all has chosen to receive the worship of His creatures. And our blessing of Him is one way we echo the joy that fills heaven itself.',
        },
        {
          kind: 'reflection',
          id: 'ps103-everlasting-mercy',
          prompt: 'If God&apos;s mercy is everlasting and extends to generations, what does that mean for the fears and debts you carry? What if forgiveness is truly permanent?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is merciful and gracious, slow to anger, and plenteous in mercy. As far as the east is from the west, so far hath he removed our transgressions from us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 103 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-103',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 103 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.103',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-103',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 103 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+103',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-hymns-praise',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Hymns of Praise in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/hymns/',
      description: 'SBL essay on the hymn genre — communal, doxological psalms that frame the Psalter&apos;s arc.',
    },

  ],

  hasHebrew: true,
};
