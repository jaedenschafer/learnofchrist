import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 108 — Praise Among the Nations
 *
 * "I will praise thee, O Lord, among the people." This psalm is a combination of
 * Psalm 57 and Psalm 60, bringing together a call to praise and a prayer for
 * deliverance in battle. The psalmist declares his readiness to sing God&apos;s
 * praises publicly, to declare His glory among the nations. Yet he also prays for
 * victory and guidance, recognizing that God alone can accomplish what humans
 * cannot.
 */
export const PSALMS_108: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 108,

  intros: [
    'Psalm 108 weaves together praise and petition. The psalmist begins with a vow of praise: his heart is fixed, his soul is awake, and he will sing God&apos;s praises openly, among the people and nations. But this is not praise disconnected from struggle. Immediately, he moves to prayer: "Give us help from trouble." He acknowledges that victory comes not from human strength but from God&apos;s power. The psalm presents a balance: we praise God for who He is, and we cry out to Him for what we need. Both are essential to the life of faith.',
    'This psalm echoes throughout the early Church. Paul quotes it in Romans 15:9 as evidence that God&apos;s salvation was always intended for all nations, not just Israel. The psalmist&apos;s vision—to praise God among all peoples—becomes the template for Christian mission.',
  ],

  sections: [
    {
      ref: 'Psalm 108:1–13',
      title: 'Praise and Petition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 108,
          lines: [
            plain(1, 'O God, my heart is fixed; I will sing and give praise, even with my glory.'),
            plain(2, 'Awake, psaltery and harp: I myself will awake early.'),
            plain(3, 'I will praise thee, O Lord, among the people: and I will sing praises unto thee among the nations.'),
            plain(4, 'For thy mercy is great above the heavens: and thy truth reacheth unto the clouds.'),
            plain(5, 'Be thou exalted, O God, above the heavens: and thy glory above all the earth;'),
            plain(6, 'That thy beloved may be delivered: save with thy right hand, and answer me.'),
            plain(7, 'God hath spoken in his holiness; I will rejoice, I will divide Shechem, and mete out the valley of Succoth.'),
            plain(11, 'Give us help from trouble: for vain is the help of man.'),
            plain(12, 'Through God we shall do valiantly: for he it is that shall tread down our enemies.'),
            plain(13, 'Through God we shall do valiantly: for he it is that shall tread down our enemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps108-heart-fixed',
          html:
            '"My heart is fixed." The psalmist is not uncertain about his commitment to praise. His resolve is settled. He will sing, he will wake early, he will give his glory to God. And this praise is not private. It is public. He will praise God "among the people" and "among the nations." This is a vision of testimony that crosses boundaries of tribe and nation.',
        },
        {
          kind: 'commentary',
          id: 'ps108-mercy-truth',
          html:
            '"Thy mercy is great above the heavens: and thy truth reacheth unto the clouds." The psalmist bases his praise on God&apos;s character. His mercy is so vast it exceeds the sky itself. His truth is so stable it reaches even to the clouds. These are not small virtues. They are cosmic in scale.',
        },
        {
          kind: 'hebrew',
          id: 'ps108-chazaq',
          title: 'Chazaq — "Fixed" (Firmly Established)',
          script: 'חָזַק',
          translit: '<strong>Chazaq</strong> · fixed; strengthened; steadfast; firmly established',
          description:
            'The Hebrew word chazaq means to be strong, to be fixed, to be firmly established. When the psalmist says his heart is chazaq, he means it is anchored. It will not waver. It is established in resolve.',
        },
        {
          kind: 'commentary',
          id: 'ps108-deliver-beloved',
          html:
            'But then the psalmist moves from praise to prayer: "That thy beloved may be delivered: save with thy right hand, and answer me." He recognizes that while God is great and His mercy vast, his people are still in danger. He asks God to use His mighty hand—His "right hand"—to save them. This is not doubt. It is realism. We need God&apos;s power.',
        },
        {
          kind: 'commentary',
          id: 'ps108-vain-help-man',
          html:
            '"Give us help from trouble: for vain is the help of man." The psalmist makes clear: human strength, human alliance, human strategy—all are insufficient. We may gain temporary advantage through human effort, but lasting victory comes only through God. "Through God we shall do valiantly: for he it is that shall tread down our enemies."',
        },
        {
          kind: 'christ',
          id: 'ps108-christ-nations',
          title: 'Christ Connection — Praise Among All Nations',
          html:
            'Paul quotes Psalm 108:3 in Romans 15:9 as a proof that Christ&apos;s salvation was always intended for all nations. Christ is the one through whom God&apos;s name is praised among the Gentiles. His work on the cross and His resurrection constitute the ultimate victory that the psalmist celebrates. Through Christ, God&apos;s glory reaches beyond Israel to all peoples.',
        },
        {
          kind: 'carry',
          html:
            'The psalm calls us to live with both elements: a heart fixed in praise and a realistic awareness that we face opposition. We do not praise because everything is easy. We praise despite difficulty, and we cry out to God for help. The Christian life is not split between praise and petition. It is the integration of both.',
        },
        {
          kind: 'reflection',
          id: 'ps108-fixed-heart',
          prompt: 'What would it mean for your heart to be "fixed" in praise? What would change about your struggle if you truly believed that victory comes through God alone?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O God, my heart is fixed; I will sing and give praise. I will praise thee, O Lord, among the people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 108 · Study Guide',
  },

  hasHebrew: true,
};
