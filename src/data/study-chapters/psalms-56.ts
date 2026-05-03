import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_56: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 56,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'David came to Gath, the capital city of the Philistines, seeking refuge from Saul&apos;s wrath. But Gath was where he had slain Goliath years before. The moment he arrived, the servants of King Achish recognized him: "Is not this David the king of the land?" And David was seized with fear. Captured by enemies, facing execution, he had nowhere to turn. It was in this moment—utterly powerless, utterly vulnerable—that David cried out to God.',
    'Psalm 56 is his prayer in captivity, and it is one of the most intimate prayers in the Psalter. David does not pray with raw honesty about his fear, his tears, his wanderings. And God&apos;s response, as David understands it, is not immediate deliverance, but something deeper: God&apos;s knowledge of him, God&apos;s collection of his tears, God&apos;s tender accounting of his very existence. "Thou tellest my wanderings: put thou my tears into thy bottle: are they not in thy book?" God misses nothing. God forgets nothing. God cares.',
  ],

  sections: [
    {
      ref: 'Psalm 56:1–7',
      title: 'Afraid, Yet Trusting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 56,
          lines: [
            plain(1, 'Be merciful unto me, O God: for man would swallow me up; he fighting daily oppresseth me.'),
            plain(2, 'Mine enemies would daily swallow me up: for they be many that fight against me, O thou most High.'),
            plain(3, 'What time I am afraid, I will trust in thee.'),
            plain(4, 'In God I will praise his word: in God I have put my trust; I will not be afraid what flesh can do unto me.'),
            plain(5, 'Every day they wrest my words: all their thoughts are against me for evil.'),
            plain(6, 'They gather themselves together, they hide themselves, they mark my footsteps, when they wait for my soul.'),
            plain(7, 'Shall they escape by iniquity? in thine anger cast down the people, O God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms56-swallow-up',
          html: '"Man would swallow me up; he fighting daily oppresseth me." David&apos;s enemies are not merely hostile—they are ravenous. "He fighting daily oppresseth me"—the oppression is relentless, unceasing.',
        },
        {
          kind: 'hebrew',
          id: 'psalms56-yare',
          title: 'Yare — "Afraid"',
          script: 'יָרֵא',
          translit: '<strong>Yare</strong> · to fear; to be afraid; to reverence',
          description: 'The Hebrew yare can mean both to fear (be afraid) and to fear (reverence). David&apos;s fear of his enemies drives him to fear God—to reverence Him, to trust Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms56-trust-in-thee',
          html: '"What time I am afraid, I will trust in thee." This is not the absence of fear, but faith that meets fear head-on. David acknowledges his fear—he does not deny it. But he chooses, in the moment of fear, to trust God.',
        },
        {
          kind: 'commentary',
          id: 'psalms56-not-be-afraid',
          html: '"I will not be afraid what flesh can do unto me." His enemies are flesh and blood—mortal, limited, ultimately powerless. David will not grant them the power to dominate his trust.',
        },
        {
          kind: 'christ',
          id: 'psalms56-christ-tears',
          title: 'Christ Connection — God Counts Our Tears',
          html: 'Christ wept. At Lazarus&apos;s tomb, Jesus wept (John 11:35)—a deep tears of sorrow, of compassion, of grief. He was moved by human suffering. When He was betrayed, arrested, crucified, His tears were real. He is not distant from our sorrow. He is moved by it. He collects it.',
        },
        {
          kind: 'carry',
          html: 'Psalm 56 invites us to bring our fear to God, not as a confession of weakness, but as an honest prayer. We do not need to pretend to be fearless. We can name our fear, and in naming it, we can choose to trust God despite it.',
        },
        {
          kind: 'reflection',
          id: 'psalms56-afraid-trust',
          prompt: 'What fear do you most struggle with? Can you, like David, say in the moment of fear, "I will trust in thee"?',
        },
      ],
    },

    {
      ref: 'Psalm 56:8–13',
      title: 'God Counts Every Tear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 56,
          lines: [
            plain(8, 'Thou tellest my wanderings: put thou my tears into thy bottle: are they not in thy book?'),
            plain(9, 'When I cry unto thee, then shall mine enemies turn back: this I know; for God is for me.'),
            plain(10, 'In God will I praise his word: in the Lord will I praise his word.'),
            plain(11, 'In God have I put my trust: I will not be afraid what man can do unto me.'),
            plain(12, 'Thy vows are upon me, O God: I will render praises unto thee.'),
            plain(13, 'For thou hast delivered my soul from death: wilt not thou deliver my feet from falling, that I may walk before God in the light of the living?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms56-wanderings-tears',
          html: '"Thou tellest my wanderings." God knows not merely the great events of David&apos;s life, but his wanderings—his steps, his movements, his fleeing. Nothing escapes God&apos;s notice. "Put thou my tears into thy bottle: are they not in thy book?" The image is profoundly tender. God collects David&apos;s tears as if they were precious.',
        },
        {
          kind: 'commentary',
          id: 'psalms56-cry-enemies-turn',
          html: '"When I cry unto thee, then shall mine enemies turn back: this I know; for God is for me." David has learned through prayer and experience that when he calls upon God, God answers. His enemies are turned back. Not because David is strong, but because God is for him.',
        },
        {
          kind: 'commentary',
          id: 'psalms56-rendered-delivered',
          html: '"For thou hast delivered my soul from death." Looking back, David sees how God has preserved him. "Wilt not thou deliver my feet from falling, that I may walk before God in the light of the living?" The deliverance from the past becomes the basis for faith in the future.',
        },
        {
          kind: 'carry',
          html: 'Psalm 56 teaches an intimate truth: God is not merely the God of great events. He is the God of our wanderings, our tears, our smallest steps. He notices. He remembers. He cares.',
        },
        {
          kind: 'reflection',
          id: 'psalms56-bottle-tears',
          prompt: 'What does it change to know that God collects your tears, that He records your sorrows, that He notices every step you take?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou tellest my wanderings: put thou my tears into thy bottle: are they not in thy book?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 56 · Study Guide',
  },

  hasHebrew: true,
};
