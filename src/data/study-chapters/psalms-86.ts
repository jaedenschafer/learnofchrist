import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 86 — "Bow down thine ear, O Lord"
 *
 * A prayer of David. The psalmist is in trouble, beset by enemies, poor, and
 * needy. His only recourse is to call upon the Lord. "Bow down thine ear, O
 * Lord, and hear me." The language is urgent but never frantic. There is a
 * clarity here, a simplicity. David knows where to turn. And he asks the Lord
 * to teach him His way. For in the deepest crisis, what matters most is not
 * rescue itself but knowing the way of God. Christ is that way.
 */
export const PSALMS_86: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 86,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Psalm 86 is a prayer of David, and it is marked by urgent simplicity. The psalmist is poor, needy, troubled, persecuted. He has nowhere else to turn. And so he turns to the one place that matters: he calls out to God. But this is not a desperate flailing. It is a confident plea. David knows God. He has experienced God&apos;s goodness. And he asks not primarily for rescue but for knowledge—"Teach me thy way, O Lord."',
  ],

  sections: [
    {
      ref: 'Psalm 86:1–10',
      title: 'The Cry of the Needy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 86,
          lines: [
            plain(1, 'Bow down thine ear, O Lord, hear me: for I am poor and needy.'),
            plain(2, 'Preserve my soul; for I am holy: O thou my God, save thy servant that trusteth in thee.'),
            plain(3, 'Be merciful unto me, O Lord: for I cry unto thee daily.'),
            plain(4, 'Rejoice the soul of thy servant: for unto thee, O Lord, do I lift up my soul.'),
            plain(5, 'For thou, Lord, art good, and ready to forgive; and plenteous in mercy unto all them that call upon thee.'),
            plain(6, 'Give ear, O Lord, unto my prayer; and attend to the voice of my supplications.'),
            plain(7, 'In the day of my trouble I will call upon thee: for thou wilt answer me.'),
            plain(8, 'Among the gods there is none like unto thee, O Lord; neither are there any works like unto thy works.'),
            plain(9, 'All nations whom thou hast made shall come and worship before thee, O Lord; and shall glorify thy name.'),
            plain(10, 'For thou art great, and doest wondrous things: thou art God alone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps86-poor',
          html:
            'The psalmist opens by declaring his condition: poor and needy. This is not shame. This is clarity. When you are poor and needy, you understand that you are dependent. You cannot save yourself. You cannot rescue yourself. You can only call. And the psalmist calls to the One who is good and ready to forgive.',
        },
        {
          kind: 'commentary',
          id: 'ps86-holy',
          html:
            'David says, "I am holy." This is not arrogance. In context, it means he is set apart, consecrated, a servant of the Lord. He trusts in God. Therefore God ought to save him. The logic is simple: if you belong to God, God will save you.',
        },
        {
          kind: 'hebrew',
          id: 'ps86-tob',
          title: 'Tob — "Good" (Lovingkindness)',
          script: 'טוֹב',
          translit: '<strong>Tob</strong> · good; well; lovely; beneficial',
          description:
            'The psalmist affirms that the Lord is good. Not harsh, not distant, not waiting to punish. Good. Ready to forgive. Full of mercy. This goodness is not a mood. It is the fundamental character of God.',
        },
        {
          kind: 'reflection',
          id: 'ps86-poverty',
          prompt: 'What does it mean to be spiritually poor and needy? In what ways are you dependent upon God?',
        },
      ],
    },

    {
      ref: 'Psalm 86:11–17',
      title: 'Teach Me Thy Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 86,
          lines: [
            plain(11, 'Teach me thy way, O Lord; I will walk in thy truth: unite my heart to fear thy name.'),
            plain(12, 'I will praise thee, O Lord my God, with all my heart: and I will glorify thy name for evermore.'),
            plain(13, 'For great is thy mercy toward me: and thou hast delivered my soul from the lowest hell.'),
            plain(14, 'O God, the proud are risen against me, and the assemblies of violent men have sought my life; and have not set thee before them.'),
            plain(15, 'But thou, O Lord, art a God full of compassion, and gracious, longsuffering, and plenteous in mercy and truth.'),
            plain(16, 'O turn unto me, and have mercy upon me; give thy strength unto thy servant, and save the son of thine handmaid.'),
            plain(17, 'Shew me a token for good; that they which hate me may see it, and be ashamed: because thou, Lord, hast holpen me, and comforted me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps86-teach',
          html:
            'In the midst of trouble, the psalmist&apos;s deepest request is not for vindication but for knowledge: "Teach me thy way, O Lord; I will walk in thy truth." This is the heart of genuine faith. Not "save me from my enemies," but "teach me who you are and how to walk with you." David knows that if he learns God&apos;s way, he will be able to walk through anything.',
        },
        {
          kind: 'commentary',
          id: 'ps86-unite',
          html:
            '"Unite my heart to fear thy name." The heart that is divided is unstable. David asks for a united heart—a heart fixed on fearing God, on reverence, on obedience. A united heart is a strong heart.',
        },
        {
          kind: 'christ',
          id: 'ps86-christ-way',
          title: 'Christ Connection — The Way',
          html:
            'In John 14:6, Jesus says, "I am the way, the truth, and the life." When the psalmist asks God to teach him His way, he is asking for what Christ embodies. Jesus is the way. To follow Christ is to walk in God&apos;s truth, to live by the deepest truth about reality, about God, about ourselves.',
        },
        {
          kind: 'carry',
          html:
            'This psalm calls each reader to examine what is most important to them when they are in trouble. Is it comfort? Rescue? Vindication? Or is it to know God better, to walk in His truth, to have a heart united in fearing His name? The psalmist&apos;s prayer suggests that when you seek God Himself, everything else follows.',
        },
        {
          kind: 'reflection',
          id: 'ps86-token',
          prompt: 'What would it look like for God to show you a token for good—some sign that He cares for you and will comfort you? How would that change your fear or doubts?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Teach me thy way, O Lord; I will walk in thy truth: unite my heart to fear thy name.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 86 · Study Guide',
  },

  hasHebrew: true,
};
