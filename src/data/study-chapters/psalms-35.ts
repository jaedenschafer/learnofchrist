import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 35 — My Advocate and Defender
 *
 * "Plead my cause, O Lord, with them that strive with me." David cries out for
 * God to take up his defense, to fight his battles as an advocate in his behalf.
 * The psalm is a prayer for vindication—not in the sense of acquiring
 * validation, but of being shown to be in the right. Ultimately, this role of
 * Advocate belongs supremely to Christ. 1 John 2:1 declares that Christ Jesus is
 * "an advocate with the Father for us." He pleads our cause before the throne of
 * God.
 */
export const PSALMS_35: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 35,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 35 is a psalm of conflict and vindication. The psalmist faces enemies who have wronged him, who mock him, who heap false accusations upon him. He prays not that God destroy them, but that God arise as his defender, that God plead his cause, that his innocence be established. This prayer finds its deepest resonance in Christ, the Innocent One who faced false accusation and who now stands as Advocate for all who trust in Him.',
  ],

  sections: [
    {
      ref: 'Psalm 35:1–28',
      title: 'Plea for Vindication',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(1, 'Plead my cause, O Lord, with them that strive with me: fight against them that fight against me.'),
            plain(2, 'Take hold of shield and buckler, and stand up for mine help.'),
            plain(3, 'Draw out also the spear, and stop the way against them that persecute me: say unto my soul, I am thy salvation.'),
            plain(11, 'False witnesses did rise up; they laid to my charge things that I knew not.'),
            plain(12, 'They rewarded me evil for good: to the spoiling of my soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps35-betrayal-pivot',
          html:
            'The psalmist&apos;s complaint shifts — these were the friends he prayed for in their sickness. The wound is not from enemies but from those he had carried first.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(17, 'Lord, how long wilt thou look on? rescue my soul from their destructions, my darling from the lions.'),
            plain(22, 'This thou hast seen, O Lord: keep not silence: O Lord, be not far from me.'),
            plain(24, 'Judge me, O Lord my God, according to thy righteousness; and let them not rejoice over me.'),
            plain(27, 'Let them shout for joy, and be glad, that favour my righteous cause: yea, let them say continually, Let the Lord be magnified, which hath pleasure in the prosperity of his servant.'),
            plain(28, 'And my tongue shall speak of thy righteousness and of thy praise all the day long.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms35-plead-cause',
          html: '"Plead my cause, O Lord, with them that strive with me." David is not asking God to destroy his enemies. He is asking God to take his part, to argue his case, to be his advocate. There is a legal dimension to this prayer—a plea before the throne of a just judge. David wants his innocence established.',
        },
        {
          kind: 'hebrew',
          id: 'psalms35-rib-risb',
          title: 'Rib — "Plead" (Contend; Argue)',
          script: 'רִיב',
          translit: '<strong>Rib</strong> · to contend; to plead; to argue one&apos;s case; to judge',
          description: 'The Hebrew word rib carries the sense of bringing a legal action, of standing before a judge and presenting one&apos;s case. When David asks God to "rib" his cause, he is asking God to take up the role of advocate, to present his case before the bar of divine justice.',
        },
        {
          kind: 'commentary',
          id: 'psalms35-false-witnesses',
          html: '"False witnesses did rise up; they laid to my charge things that I knew not. They rewarded me evil for good: to the spoiling of my soul." The pain here is not merely physical threat but betrayal and false accusation. David&apos;s enemies have twisted the truth. They have repaid kindness with evil. In the face of this injustice, David cries out for God&apos;s vindication.',
        },
        {
          kind: 'commentary',
          id: 'psalms35-how-long',
          html: '"Lord, how long wilt thou look on?" There is an anguish in this question. How long will God remain silent? How long will He permit injustice to continue? Yet the question itself is an appeal to faith—it assumes that God will eventually act, but asks why the delay.',
        },
        {
          kind: 'christ',
          id: 'psalms35-christ-advocate',
          title: 'Christ Connection — Our Advocate',
          html: '1 John 2:1 declares: "And if any man sin, we have an advocate with the Father, Jesus Christ the righteous." Christ is our Advocate. He stands before the Father and pleads our cause. He does not plead our innocence—we are guilty. He pleads His own sacrifice, His own righteousness, His own payment for our sin. And by pleading His cause on our behalf, He establishes our acquittal.',
        },
        {
          kind: 'carry',
          html: 'To pray Psalm 35 is to acknowledge that we cannot defend ourselves against accusation. We need an Advocate. We need someone to stand for us before a just judge. In Christ, we have such an Advocate. He knows our cause not because we are innocent, but because He is righteous. He pleads our case not because we deserve it, but because He loves us.',
        },
        {
          kind: 'reflection',
          id: 'psalms35-advocate',
          prompt: 'When you are accused, when you feel misunderstood or treated unfairly, do you bring your cause to God and ask Him to vindicate you? How might it change your response to injustice to remember that Christ is your Advocate, pleading your case before the Father?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Plead my cause, O Lord, with them that strive with me: fight against them that fight against me. ...And my tongue shall speak of thy righteousness and of thy praise all the day long.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 35 · Study Guide',
  },

  hasHebrew: true,
};
