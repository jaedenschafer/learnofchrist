import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 106 — The Pattern of Sin and Mercy
 *
 * "Praise ye the Lord." But then the psalm confesses: "We have sinned with our
 * fathers." The psalmist traces a pattern through Israel&apos;s history: rebellion,
 * God&apos;s judgment, confession, God&apos;s forgiveness. Again and again. The people
 * complain, they make idols, they forget the deliverance, they commit wickedness.
 * And again and again, God saves them "for his mercy&apos;s sake." This is a psalm
 * about the rhythm of covenant: our failure and God&apos;s forgiveness.
 */
export const PSALMS_106: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 106,

  intros: [
    'Psalm 106 is paired with Psalm 105. Where Psalm 105 recounts God&apos;s faithfulness, Psalm 106 recounts Israel&apos;s unfaithfulness. It is the darker side of the covenant history. The psalmist walks through the same events—the plagues, the Exodus, the wilderness—but frames them around the people&apos;s complaints, idolatry, and rebellion. And yet the psalms tells the same story: over and over, God forgives. Over and over, He saves them not because they deserve it, but "for his mercy&apos;s sake." This is the pattern that defines the covenant relationship: human sin and divine mercy, repeated across generations.',
    'The psalm speaks to something deep in all of us. We know the pattern of failure and forgiveness from our own hearts. We fall into sin, we repent, we are forgiven, and then we find ourselves in the same struggle again. Psalm 106 says: this pattern is not merely personal. It has shaped the entire history of God&apos;s people. And yet God has not abandoned us. His mercy is the only thing constant enough to hold us.',
  ],

  sections: [
    {
      ref: 'Psalm 106:1–27',
      title: 'The Pattern of Rebellion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 106,
          lines: [
            plain(1, 'Praise ye the Lord. O give thanks unto the Lord; for he is good: for his mercy endureth for ever.'),
            plain(6, 'We have sinned with our fathers, we have committed iniquity, we have done wickedly.'),
            plain(7, 'Our fathers understood not thy wonders in Egypt; they remembered not the multitude of thy mercies; but provoked him at the sea, even at the Red sea.'),
            plain(12, 'They made a calf in Horeb, and worshipped the molten image.'),
            plain(14, 'Forgat they the Lord their God, which had delivered them by his mighty hand.'),
            plain(17, 'The earth opened and swallowed up Dathan, and covered the company of Abiram.'),
            plain(19, 'They made a calf in Horeb: they worshipped the molten image.'),
            plain(24, 'Yea, they despised the pleasant land, they believed not his word:'),
            plain(26, 'Therefore he lifted up his hand against them, to overthrow them in the wilderness:'),
            plain(27, 'To overthrow their seed also among the nations, and to scatter them in the lands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps106-sinned-fathers',
          html:
            'The psalm opens with a strange move: it praises God for His goodness and mercy, then immediately confesses: "We have sinned with our fathers, we have committed iniquity, we have done wickedly." The confession is not personal alone but communal and inherited. The psalmist identifies himself with the failures of his ancestors. He is part of a people with a pattern of rebellion.',
        },
        {
          kind: 'commentary',
          id: 'ps106-forgot-wonders',
          html:
            'The litany of failures begins: the people saw God&apos;s wonders in Egypt but provoked Him. They made a golden calf while Moses was receiving the law on the mountain. They forgot that God had delivered them with a mighty hand. At each moment where gratitude and faith were called for, they chose idolatry and rebellion.',
        },
        {
          kind: 'hebrew',
          id: 'ps106-sagar',
          title: 'Sagar — "Forgot" (Ceased to Remember)',
          script: 'שָׁכַח',
          translit: '<strong>Sagar</strong> · forgot; failed to remember; abandoned the memory of',
          description:
            'The Hebrew word shakach means to forget—to let something slip from your mind. But in the context of covenant, it means more: it means to abandon the memory, to cease to hold in mind something you once knew. To forget God&apos;s works is not mere amnesia. It is willful turning away from what He has done.',
        },
        {
          kind: 'carry',
          html:
            'The psalm names our own temptation: to forget. We have been delivered. We have seen God&apos;s work. We have been given promises. Yet we forget. We turn to our own idols—our pride, our plans, our appetites—and act as though God had never saved us. The call is to remember. Deliberately, repeatedly, to hold in mind what God has done so that we might remain faithful.',
        },
        {
          kind: 'reflection',
          id: 'ps106-pattern-sin',
          prompt: 'Where do you see a pattern of sin in your own life? What would it take to break the cycle through confession and genuine repentance?',
        },
      ],
    },

    {
      ref: 'Psalm 106:43–48',
      title: 'Mercy Enduring Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 106,
          lines: [
            plain(43, 'Many times did he deliver them; but they provoked him with their counsel, and were brought low for their iniquity.'),
            plain(44, 'Nevertheless he regarded their affliction, when he heard their cry:'),
            plain(45, 'And he remembered for them his covenant, and repented according to the multitude of his mercies.'),
            plain(46, 'He made them also to be pitied of all those that carried them captives.'),
            plain(47, 'Save us, O Lord our God, and gather us from among the heathen, to give thanks unto thy holy name, and to triumph in thy praise.'),
            plain(48, 'Blessed be the Lord God of Israel from everlasting even to everlasting: and let all the people say, Amen. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps106-many-times',
          html:
            'The refrain echoes across the psalm: "Many times did he deliver them." It is a cycle. They sin, they suffer the consequence, they cry out, He hears and saves them. And then they sin again. Yet God&apos;s response does not change. Each time they call out, He responds. This is not because they deserve it, but because "he remembered for them his covenant, and repented according to the multitude of his mercies."',
        },
        {
          kind: 'commentary',
          id: 'ps106-regarded-affliction',
          html:
            '"He regarded their affliction" means He saw their suffering and was moved. He did not say, "You got what you deserved." He saw His people in pain and was moved by compassion. And He did not merely feel sympathy. He acted. He delivered them again. This is the pattern: we fail, we suffer, we call, He saves—not because we are good, but because His mercy is infinite.',
        },
        {
          kind: 'christ',
          id: 'ps106-christ-mercies',
          title: 'Christ Connection — Compassion and Deliverance',
          html:
            'Jesus embodies the character the psalmist describes: a God who sees our affliction and is moved with compassion. Again and again in the Gospels, Jesus sees people suffering and moves toward them to heal them. And in His final act, He takes on our sin and suffering, delivering us from the judgment we deserve through an act of infinite mercy. The pattern of Psalm 106—God&apos;s repeated mercy overcoming human repeated failure—reaches its climax in Christ&apos;s work on the cross.',
        },
        {
          kind: 'carry',
          html:
            'We live in that same cycle. We fail, we are forgiven. We stumble again, we are loved again. Not because we are good enough, but because God&apos;s mercy is inexhaustible. The psalm ends with a call to praise and blessing: "Blessed be the Lord God of Israel from everlasting even to everlasting." Our response to the repeated mercy we receive is repeated praise.',
        },
        {
          kind: 'reflection',
          id: 'ps106-mercy-cycle',
          prompt: 'In your own life, how have you experienced the cycle of failure and forgiveness? How does knowing it will happen again change the way you move forward?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We have sinned with our fathers. Nevertheless he regarded their affliction, when he heard their cry.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 106 · Study Guide',
  },

  hasHebrew: true,
};
