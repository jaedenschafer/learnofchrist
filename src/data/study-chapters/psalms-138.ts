import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 138 — Praise Before the Gods
 *
 * "I will praise thee with my whole heart." The psalmist stands before enemies
 * and opposition, threatened by hostile powers. Yet he resolves to praise the
 * Lord. "Though I walk in the midst of trouble, thou wilt revive me." This is
 * not the praise of comfort and security. It is the praise of faith in the
 * midst of peril. The Lord will stretch forth His hand, will perfect the work
 * begun in the psalmist, will not forsake him. In this, we see Christ: the one
 * who praises the Father even in the shadow of death.
 */
export const PSALMS_138: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 138,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  intros: [
    'Psalm 138 is a psalm of David, offered in the midst of opposition and danger. It is not a lament. It is a declaration of confidence and praise before hostile powers. The psalmist will praise God with his whole heart, before the gods—perhaps the gods of surrounding nations, perhaps metaphorical powers of darkness. The point is this: no matter the opposition, the psalmist&apos;s commitment to praise God is absolute. And the ground of this commitment is God&apos;s faithfulness. When the psalmist cries out, God hears. When he is brought low, God revives him. The psalm is a song for the soul under siege.',
  ],

  sections: [
    {
      ref: 'Psalm 138:1–3',
      title: 'Praise Before Enemies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 138,
          lines: [
            plain(1, 'I will praise thee with my whole heart: before the gods will I sing praise unto thee.'),
            plain(2, 'I will worship toward thy holy temple, and praise thy name for thy lovingkindness and for thy truth: for thou hast magnified thy word above all thy name.'),
            plain(3, 'In the day when I cried thou answeredst me, and strengthenedst me with strength in my soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm138-whole-heart',
          html:
            '"I will praise thee with my whole heart." Not a partial praise, offered with reservation or doubt. But a total commitment—the whole soul devoted to the praise of God. And this praise is offered "before the gods"—before powers that oppose, before hostile forces, before a world that may not understand or approve. The psalmist is saying: I will not be silent. I will not hide my faith. Even in the midst of opposition, I will sing God&apos;s praise. [res:sefaria-psalm-138]',
        },
        {
          kind: 'hebrew',
          id: 'psalm138-chesed',
          title: 'Chesed — "Lovingkindness" (Mercy)',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · lovingkindness, mercy, covenant steadfast love',
          description:
            'The psalmist praises God for His chesed and His truth—for His covenant faithfulness and His reliability. These are not sentiments. They are characteristics proven over time, demonstrated in history, foundational to trust.',
        },
        {
          kind: 'commentary',
          id: 'psalm138-magnified',
          html:
            'Notice what is said: "Thou hast magnified thy word above all thy name." God&apos;s word—His promises, His revelation—stands higher than His name, higher than His reputation. In other words, when there is tension between what God has said and what circumstances suggest, the psalmist will trust the word. God has committed Himself to His word. He will not break it.',
        },
        {
          kind: 'commentary',
          id: 'psalm138-answered',
          html:
            '"In the day when I cried thou answeredst me, and strengthenedst me with strength in my soul." The psalmist has called out before. And God has answered. Not with ease or comfort necessarily, but with strength—a kind of strength that is internal, spiritual, unshakeable. This is the ground of confidence.',
        },
      ],
    },

    {
      ref: 'Psalm 138:4–8',
      title: 'The Lord Will Perfect His Work',
      blocks: [
        {
          kind: 'scripture',
          chapter: 138,
          lines: [
            plain(4, 'All the kings of the earth shall praise thee, O Lord, when they hear the words of thy mouth.'),
            plain(5, 'Yea, they shall sing in the ways of the Lord: for great is the glory of the Lord.'),
            plain(6, 'Though the Lord be high, yet hath he respect unto the lowly: but the proud he knoweth afar off.'),
            plain(7, 'Though I walk in the midst of trouble, thou wilt revive me: against the wrath of mine enemies thou wilt stretch forth thy hand, and thy right hand shall save me.'),
            plain(8, 'The Lord will perfect that which concerneth me: thy mercy, O Lord, endureth for ever: forsake not the works of thine own hands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm138-kings',
          html:
            'The vision expands: not just the psalmist, but all the kings of the earth shall praise God when they hear His words. They shall sing in the ways of the Lord. This is eschatological hope—a vision of the future when even earthly powers acknowledge God&apos;s glory. Yet this is not mere fantasy. It is built on the reality that the Lord is high, yet has respect unto the lowly. He cares for those the world despises. He knows the proud from afar off—He sees them, judges them, and distances Himself from them.',
        },
        {
          kind: 'commentary',
          id: 'psalm138-midst-trouble',
          html:
            '"Though I walk in the midst of trouble, thou wilt revive me." The psalmist faces real opposition. He is not wishfully denying danger. He is walking in the midst of it. Yet the promise stands: God will revive him. To revive means to restore to life, to refresh, to give new strength. Against the wrath of enemies, God will stretch forth His hand. His right hand shall save.',
        },
        {
          kind: 'commentary',
          id: 'psalm138-perfect',
          html:
            '"The Lord will perfect that which concerneth me." Perfect here means to complete, to finish, to bring to fulfillment. God has begun a work in the psalmist&apos;s life. He will not abandon it. He will see it through. And He will do this because His mercy endures forever—because His fundamental character is faithfulness to those He loves. "Forsake not the works of thine own hands"—do not abandon what You have created and begun in me.',
        },
        {
          kind: 'christ',
          id: 'psalm138-christ-revive',
          title: 'Christ Connection — Christ Revives',
          html:
            'In Ephesians 2:4–6, Paul writes: "God, being rich in mercy, because of His great love with which He loved us, even when we were dead in our transgressions, made us alive together with Christ—by grace you have been saved." Christ is the reviving hand of God. He takes those dead in sin and raises them to new life. He stands against all wrath and enmity. And He perfects the work begun in us, bringing us to completion in Him. [res:bible-odyssey-psalm-138]',
        },
        {
          kind: 'carry',
          html:
            'This week, be low. Let your shoulders drop. You don&apos;t have to be the one with the answer, the fix, the leadership. There is a place in your life—a moment, a space, maybe a relationship—where you are small, where you haven&apos;t figured it out, where you need help. That is not a failure. That is exactly where God draws near. Though the Lord be high, yet hath he respect unto the lowly. The carry is permission: stop performing. Stop climbing. Let yourself be small without shame.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will praise thee with my whole heart...Though I walk in the midst of trouble, thou wilt revive me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 138 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-138',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 138 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.138',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-138',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 138 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+138',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
