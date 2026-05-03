import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 111 — The Wisdom and Work of God
 *
 * An acrostic psalm: each line of the original Hebrew begins with the successive
 * letters of the alphabet. "I will praise the Lord with my whole heart...His work
 * is honourable and glorious...The fear of the Lord is the beginning of wisdom."
 * This is a meditation on God&apos;s works and character. Those who do them have
 * good understanding. Praise God. Remember His deeds.
 */
export const PSALMS_111: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 111,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 111 is an acrostic—the original Hebrew has each line beginning with successive letters of the Hebrew alphabet. This poetic form was used to help people remember the psalm, but it also suggests completeness: from aleph to tav, from beginning to end, the alphabet contains all human expression. And what fills all that speech? Praise of God. The psalm celebrates God&apos;s works, His glory, His righteousness, His power. And then comes the central declaration: "The fear of the Lord is the beginning of wisdom." This is the foundation of all true understanding: the recognition that God is God and we are not, that His works are wonderful, that He is worthy of our reverence and obedience.',
    'The acrostic form invites us into a kind of meditation. As we move through the alphabet, we move through different aspects of God&apos;s character and work. By the end, we have traced the shape of wisdom itself.',
  ],

  sections: [
    {
      ref: 'Psalm 111:1–10',
      title: 'The Completeness of Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 111,
          lines: [
            plain(1, 'Praise ye the Lord. I will praise the Lord with my whole heart, in the assembly of the upright, and in the congregation.'),
            plain(2, 'The works of the Lord are great, sought out of all them that have pleasure therein.'),
            plain(3, 'His work is honourable and glorious: and his righteousness endureth for ever.'),
            plain(4, 'He hath made his wonderful works to be remembered: the Lord is gracious and full of compassion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-111-78mid-1',
          html:
            'Praise for God&apos;s works and majesty opens into praise for His covenant and compassion. Works become character.',
        },
        {
          kind: 'scripture',
          chapter: 111,
          lines: [
            plain(5, 'He hath given meat unto them that fear him: he will ever be mindful of his covenant.'),
            plain(7, 'The works of his hands are verity and judgment; all his commandments are sure.'),
            plain(9, 'He sent redemption unto his people: he hath commanded his covenant for ever: holy and reverend is his name.'),
            plain(10, 'The fear of the Lord is the beginning of wisdom: a good understanding have all they that do his commandments: his praise endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps111-whole-heart',
          html:
            '"I will praise the Lord with my whole heart." Not partial praise, not reserved praise, but whole-hearted praise. And it is public: in the assembly, in the congregation. Praise is not merely private devotion but communal testimony. When we praise God in the presence of others, we reinforce each other&apos;s faith and witness to those who do not yet believe.',
        },
        {
          kind: 'commentary',
          id: 'ps111-works-great',
          html:
            '"The works of the Lord are great, sought out of all them that have pleasure therein." God&apos;s works are not hidden. They are available for examination. Those who delight in understanding can study them and discover their depth. The wonders of creation, the acts of God in history, the workings of providence—all are open to those who seek them out.',
        },
        {
          kind: 'hebrew',
          id: 'ps111-yirah',
          title: 'Yirah — "Fear" (Awe and Reverence)',
          script: 'יִרְאָה',
          translit: '<strong>Yirah</strong> · fear; awe; reverence; the beginning of wisdom',
          description:
            'The Hebrew word yirah carries a dual meaning: it can mean fear in the sense of terror, but in the context of God it means something closer to awe and reverence. It is not the fear that comes from punishment but the reverence that comes from recognizing holiness. To fear God is to stand in awe before His majesty.',
        },
        {
          kind: 'commentary',
          id: 'ps111-beginning-wisdom',
          html:
            '"The fear of the Lord is the beginning of wisdom." This phrase appears throughout the wisdom literature of the Bible (Proverbs, Job). It is not the end of wisdom but the beginning. All genuine understanding starts with reverence for God. The person who does not stand in awe of God, who does not recognize His authority and holiness, has missed the foundation upon which all true knowledge rests.',
        },
        {
          kind: 'christ',
          id: 'ps111-christ',
          title: 'Christ Connection — Redemption and Covenant',
          html:
            'Verse 9 says: "He sent redemption unto his people: he hath commanded his covenant for ever." Redemption came fully through Christ—purchased at the cross, offered to all nations. Paul writes that Christ is "the image of the invisible God" and "by him all things consist" (Col. 1:15, 17). Every work of God&apos;s hands—described throughout this acrostic psalm—was made by Him and finds its meaning in Him. The covenant itself, remembered at the altar, points to His blood: "This cup is the new testament in my blood" (1 Cor. 11:25).',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites us to practice a kind of spiritual literacy: learning to read God&apos;s works as a text that reveals His character. When you see evidence of God&apos;s power, His mercy, His faithfulness—pause and praise. Make it a practice to notice, to study, to meditate on what God has done. This is how fear of the Lord—reverence, awe—becomes the beginning of our wisdom.',
        },
        {
          kind: 'reflection',
          id: 'ps111-beginning-wisdom-prompt',
          prompt: 'What work of God have you observed recently that moved you to awe? How is that reverence becoming wisdom in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will praise the Lord with my whole heart. The fear of the Lord is the beginning of wisdom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 111 · Study Guide',
  },

  hasHebrew: true,
};
