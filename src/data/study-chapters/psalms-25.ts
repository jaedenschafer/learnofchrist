import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 25 — The Way of the Lord
 *
 * An acrostic psalm in which each verse begins with a successive letter of the
 * Hebrew alphabet. "Unto thee, O Lord, do I lift up my soul." The psalmist
 * prays for guidance, for deliverance from enemies, for teaching in God&apos;s
 * ways. "Show me thy ways, O Lord; teach me thy paths." The very structure of
 * the psalm—moving methodically through the alphabet—suggests the journey of
 * learning, of being formed by God&apos;s instruction. Christ is the Way, the
 * embodiment of all God&apos;s paths.
 */
export const PSALMS_25: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 25,

  intros: [
    'Psalm 25 is an acrostic, with each verse beginning with successive letters of the Hebrew alphabet. This structure is not merely literary device. It symbolizes completeness, a journey from beginning to end, a path walked step by step. The content matches this form. The psalmist is on a journey of learning, seeking to know God&apos;s ways, asking to be taught His paths. The psalm is a prayer of someone in formation, asking God to shape him according to God&apos;s design.',
  ],

  sections: [
    {
      ref: 'Psalm 25:1–10',
      title: 'Teaching in the Ways of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'Unto thee, O Lord, do I lift up my soul.'),
            plain(2, 'O my God, I trust in thee: let me not be ashamed; let not mine enemies triumph over me.'),
            plain(4, 'Show me thy ways, O Lord; teach me thy paths.'),
            plain(5, 'Lead me in thy truth, and teach me: for thou art the God of my salvation; on thee do I wait all the day.'),
            plain(8, 'Good and upright is the Lord: therefore will he teach sinners in the way.'),
            plain(9, 'The meek will he guide in judgment: and the meek will he teach his way.'),
            plain(10, 'All the paths of the Lord are mercy and truth unto such as keep his covenant and his testimonies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms25-lift-soul',
          html: 'The psalm opens with an upward gesture: "Unto thee, O Lord, do I lift up my soul." Not merely hands, but soul. The deepest part of the self is lifted toward God. This is not the prayer of someone who holds back, who reserves something for himself. It is total offering, total trust. And the immediate prayer is simple: "let me not be ashamed."',
        },
        {
          kind: 'hebrew',
          id: 'psalms25-derekh',
          title: 'Derekh — "Way" (Path; Journey)',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derekh</strong> · way; path; journey; manner of life',
          description: 'The Hebrew word derekh refers not merely to a physical path, but to a manner of life, a direction, a journey. When the psalmist asks God to "show me thy ways," he is asking to learn how to live, how to move through the world, how to direct his life according to God&apos;s design. Derekh encompasses both the specific guidance God gives and the whole orientation of life toward Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms25-show-teach',
          html: 'The central petition appears twice with slight variation: "Show me thy ways...teach me thy paths" and "Lead me in thy truth, and teach me." The psalmist is not asking for abstract knowledge. He is asking for practical guidance, for teaching that shapes conduct. He wants not merely to understand God&apos;s ways intellectually, but to be formed by them.',
        },
        {
          kind: 'christ',
          id: 'psalms25-christ-way',
          title: 'Christ Connection — The Way',
          html: 'John 14:6 records Jesus declaring, "I am the way, the truth, and the life: no man cometh unto the Father, but by me." When the psalmist asks God to show him His ways and teach him His paths, he is asking to know Christ. Christ is not merely a guide along the path. He is the path itself. He is the embodiment of all God&apos;s ways, the perfect expression of how to live in alignment with God&apos;s truth.',
        },
        {
          kind: 'carry',
          html: 'To follow God&apos;s paths is to allow ourselves to be taught. It is to remain open to correction, to be willing to have our assumptions challenged, to trust that God&apos;s way, though it may differ from our own understanding, leads to life. The psalmist promises that "all the paths of the Lord are mercy and truth"—not harshness, not punishment, but mercy intertwined with truth. This is the God who teaches.',
        },
        {
          kind: 'reflection',
          id: 'psalms25-teach-me',
          prompt: 'Where in your life are you most resistant to being taught by God? Where do you cling to your own way rather than asking to be shown His? What would it take to genuinely lift your soul and ask Him to teach you?',
        },
      ],
    },

    {
      ref: 'Psalm 25:11–22',
      title: 'Forgiveness and Protection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(11, 'For thy name&apos;s sake, O Lord, pardon mine iniquity; for it is great.'),
            plain(14, 'The secret of the Lord is with them that fear him; and he will show them his covenant.'),
            plain(15, 'Mine eyes are ever toward the Lord; for he shall pluck my feet out of the net.'),
            plain(16, 'Turn thee unto me, and have mercy upon me; for I am desolate and afflicted.'),
            plain(17, 'The troubles of my heart are enlarged: O bring thou me out of my distresses.'),
            plain(18, 'Look upon mine affliction and my pain; and forgive all my sins.'),
            plain(20, 'O keep my soul, and deliver me: let me not be ashamed; for I put my trust in thee.'),
            plain(22, 'Redeem Israel, O God, out of all his troubles.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms25-name-sake',
          html: 'A bold prayer follows: "For thy name&apos;s sake, O Lord, pardon mine iniquity; for it is great." The psalmist does not minimize his sin. It is great. Yet he does not base his plea for forgiveness on his own worth or his own efforts at righteousness. He bases it on God&apos;s name, on God&apos;s character, on the reputation God will uphold by forgiving those who turn to Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms25-secret-fear',
          html: 'A promise of intimacy follows: "The secret of the Lord is with them that fear him." Those who revere God, who stand in awe before Him, are brought into His confidence. They learn His covenant. They understand His purposes. This is not knowledge earned but intimacy granted, a friendship offered to those who approach Him with reverence.',
        },
        {
          kind: 'commentary',
          id: 'psalms25-troubled-heart',
          html: 'The psalm acknowledges affliction honestly. "The troubles of my heart are enlarged...I am desolate and afflicted." These are not the words of someone maintaining composure. These are words of genuine pain. Yet even in this pain, the psalmist does not turn away from God. He turns toward Him, asking Him to look, to see, to remember, to forgive.',
        },
        {
          kind: 'carry',
          html: 'Psalm 25 teaches that to follow God&apos;s ways requires both the willingness to be taught and the humility to ask forgiveness. The way is not a path of self-improvement, but a path of learning from God and returning to Him when we stumble. And He, in His mercy, keeps our souls and delivers us.',
        },
        {
          kind: 'reflection',
          id: 'psalms25-trust-path',
          prompt: 'As the psalmist trusts God with his whole soul, what would it mean for you to trust Him not just with your decisions, but with your whole self—your fears, your sins, your aspirations, your secrets?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Unto thee, O Lord, do I lift up my soul. Show me thy ways, O Lord; teach me thy paths.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 25 · Study Guide',
  },

  hasHebrew: true,
};
