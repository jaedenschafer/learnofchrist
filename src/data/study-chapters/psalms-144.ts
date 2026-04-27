import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 144 — Blessed Be the Lord, My Strength
 *
 * "Blessed be the Lord my strength, which teacheth my hands to war, and my
 * fingers to fight." The psalm opens with unexpected language—God as a teacher
 * of warfare. Yet this is not celebration of violence. This is David recognizing
 * that his strength, his ability to defend, his capacity to stand against enemies,
 * comes from God. And the psalm builds to a more universal question: "What is
 * man, that thou takest knowledge of him?" In the face of hostile forces, David
 * finds his identity: he is a creature God notices, teaches, empowers, and loves.
 */
export const PSALMS_144: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 144,

  intros: [
    'Psalm 144 is titled "of David." It begins as a praise of God for strength in battle and moves into meditation on human dignity and the brevity of human life. David praises God for training his hands and fingers for combat. He speaks of God as his tower, his refuge, his strength. But the prayer is not merely for victory. It is for the vindication of righteousness and the blessing of his people—that their sons might be like plants, their daughters like pillars, that their barns might be full, their flocks might multiply. The prayer balances military vigilance with hope for flourishing.',
  ],

  sections: [
    {
      ref: 'Psalm 144:1–8',
      title: 'Lord, My Teacher in Battle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 144,
          lines: [
            plain(1, 'Blessed be the Lord my strength, which teacheth my hands to war, and my fingers to fight:'),
            plain(2, 'My goodness, and my fortress; my high tower, and my deliverer; my shield, and he in whom I trust; who subdueth my people under me.'),
            plain(3, 'Lord, what is man, that thou takest knowledge of him! or the son of man, that thou makest account of him!'),
            plain(4, 'Man is like to vanity: his days are as a shadow that passeth away.'),
            plain(5, 'Bow thy heavens, O Lord, and come down: touch the mountains, and they shall smoke.'),
            plain(6, 'Cast forth lightning, and scatter them: shoot out thine arrows, and destroy them.'),
            plain(7, 'Send thine hand from above; rid me, and deliver me out of great waters, from the hand of strange children;'),
            plain(8, 'Whose mouths speak vanity, and their right hand is a right hand of falsehood.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm144-blessed',
          html:
            '"Blessed be the Lord my strength, which teacheth my hands to war, and my fingers to fight." The opening assertion is striking. God is David&apos;s strength, but more: God teaches. He instructs the hands and fingers in the art of combat. This is not a celebration of violence. It is recognition that all capacity—including the capacity for defense and protection—comes from God. God is not only a refuge, but a trainer, a teacher, a source of skill.',
        },
        {
          kind: 'hebrew',
          id: 'psalm144-milhama',
          title: 'Milhama — "War" (Warfare)',
          script: 'מִלְחָמָה',
          translit: '<strong>Milhama</strong> · war, battle, conflict, strife',
          description:
            'The word milhama refers to warfare, battle, and conflict. It is not framed as inherently evil in Scripture, but as sometimes necessary to defend the innocent and maintain justice.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-goodness',
          html:
            '"My goodness, and my fortress; my high tower, and my deliverer; my shield, and he in whom I trust." The names and titles cascade. God is David&apos;s goodness—the source of all virtue. His fortress, his tower, his shield—all images of refuge and protection. And David&apos;s trust rests entirely on God.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-what-is-man',
          html:
            '"Lord, what is man, that thou takest knowledge of him! or the son of man, that thou makest account of him!" The psalm suddenly shifts to universal wonder. In the face of God&apos;s might and majesty, who is man? Why does God notice us at all? The question echoes from Psalm 8: we are small, insignificant, yet God knows us, accounts for us, cares for us. This is not self-deprecation. It is awe at being seen and valued by God.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-vanity-shadow',
          html:
            '"Man is like to vanity: his days are as a shadow that passeth away." Human existence is brief. Our days pass like shadows. We are here and then gone. Yet in this brevity, God notices us, teaches us, equips us. The contrast between human fragility and God&apos;s attention is the source of the psalm&apos;s wonder.',
        },
      ],
    },

    {
      ref: 'Psalm 144:9–15',
      title: 'A New Song of Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 144,
          lines: [
            plain(9, 'I will sing a new song unto thee, O God: upon a psaltery and an instrument of ten strings will I sing praises unto thee.'),
            plain(10, 'It is he that giveth salvation unto kings: who delivereth David his servant from the hurtful sword.'),
            plain(11, 'Rid me, and deliver me from the hand of strange children, whose mouths speak vanity, and their right hand is a right hand of falsehood:'),
            plain(12, 'That our sons may be as plants grown up in their youth; and that our daughters may be as corner stones, polished after the similitude of a palace:'),
            plain(13, 'That our garners may be full, affording all manner of store: that our sheep may bring forth thousands and ten thousands in our streets;'),
            plain(14, 'That our oxen may be strong to labour; that there be no breaking in, nor going out; that there be no complaining in our streets.'),
            plain(15, 'Happy is that people, whose God is the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm144-new-song',
          html:
            '"I will sing a new song unto thee, O God: upon a psaltery and an instrument of ten strings will I sing praises unto thee." Victory—or even the hope of it—inspires a new song. The instruments are named: the psaltery and the ten-stringed instrument. The music is specific, tangible, joyful.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-salvation',
          html:
            '"It is he that giveth salvation unto kings: who delivereth David his servant from the hurtful sword." God gives salvation not just to the righteous, but to kings. He delivers David from the hurtful sword. This is David speaking of himself in the third person, almost as if in wonder at his own preservation.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-flourishing',
          html:
            'The prayer then moves from defense to flourishing. "That our sons may be as plants grown up in their youth; and that our daughters may be as corner stones, polished after the similitude of a palace." The vision is of a people thriving, growing, strong. Sons are plants, nourished, growing tall. Daughters are corner stones—foundational, beautiful, integral to the structure of society.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-fullness',
          html:
            '"That our garners may be full, affording all manner of store: that our sheep may bring forth thousands and ten thousands in our streets." Abundance is the prayer. Full storehouses, multiplying flocks. Not a few sheep, but thousands and ten thousands. The vision is not of bare survival but of prosperity and peace.',
        },
        {
          kind: 'commentary',
          id: 'psalm144-happy',
          html:
            '"Happy is that people, whose God is the Lord." The psalm concludes with the definition of true happiness, true blessing. It is not in weapons or fortifications, though these have their place. It is in being a people whose God is the Lord. Whose strength, whose teacher, whose refuge, whose hope is in Him.',
        },
        {
          kind: 'christ',
          id: 'psalm144-christ-strength',
          title: 'Christ Connection — Christ Teaches Us to Overcome',
          html:
            'In 2 Timothy 2:3–4, Paul writes: "Endure hardship as a good soldier of Christ Jesus. No one serving as a soldier gets entangled in civilian affairs, but rather tries to please his commanding officer." Christ teaches His followers—teaches us to fight the good fight, to endure, to overcome. The spiritual battles we face are real, and Christ equips us for them.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Blessed be the Lord my strength...Lord, what is man, that thou takest knowledge of him!',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 144 · Study Guide',
  },

  hasHebrew: true,
};
