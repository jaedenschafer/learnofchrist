import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 6 — Be Ye Not Unequally Yoked
 *
 * Paul calls the Corinthians to receive the grace of God they have been given and
 * to live accordingly. He warns against being &quot;unequally yoked with unbelievers.&quot;
 * This is not mere social segregation. It is a call to guard the sanctity of the
 * church and the believer&apos;s own spiritual walk.
 */
export const SECOND_CORINTHIANS_6: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 6,

  intros: [
    'Paul has proclaimed reconciliation. Now he calls the Corinthians to live as reconciled people. Grace has been given. Now grace must be received—not in vain, but transformatively. Paul then addresses partnerships with unbelievers. This is not snobbery. It is spiritual wisdom. Some unions compromise what God has called you to be.',
    'The phrase &quot;unequally yoked&quot; applies not just to marriage, but to any partnership that would bind a believer to an unbeliever in a way that corrupts the believer&apos;s walk or the church&apos;s witness.',
  ],

  sections: [
    {
      ref: '2 Corinthians 6:1–10',
      title: 'Receiving Grace; Commending Ourselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'We then, as workers together with him, beseech you also that ye receive not the grace of God in vain.'),
            plain(4, 'But in all things approving ourselves as the ministers of God, in much patience, in afflictions, in necessities, in distresses,'),
            plain(5, 'In stripes, in imprisonments, in tumults, in labours, in watchings, in fastings;'),
            plain(6, 'By pureness, in knowledge, in longsuffering, in kindness, by the Holy Ghost, by love unfeigned,'),
            plain(7, 'By the word of truth, by the power of God, by the armour of righteousness on the right hand and on the left,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-6-grace-vain',
          html:
            'Paul beseeches the Corinthians to receive God&apos;s grace &quot;not in vain.&quot; Grace is a gift—free, unearned. But it can be wasted. It is wasted when received but not lived out, when confessed but not embodied.',
        },
        {
          kind: 'greek',
          id: 'cor2-6-charis',
          title: 'Charis — Grace',
          script: 'χάρις',
          translit: '<strong>Charis</strong> · grace; unmerited favor; the kindness of God',
          description:
            'Grace is God&apos;s gift of unmerited favor. Receiving it includes allowing it to transform you. Not to live out grace is to render it ineffectual.',
        },
        {
          kind: 'commentary',
          id: 'cor2-6-commend',
          html:
            'Paul catalogues the marks of authentic ministry: patience in affliction, knowledge, kindness, truthfulness. Yet all flows from one source: &quot;by the Holy Ghost, by love unfeigned.&quot; These are not earned but gifted.',
        },
        {
          kind: 'christ',
          id: 'cor2-6-christ-worker',
          title: 'Christ Connection — Workers Together with Christ',
          html:
            'Paul calls himself and the Corinthians &quot;workers together with him&quot;—with Christ. Believers are not passive recipients. They are active partners in God&apos;s redemptive work.',
        },
        {
          kind: 'carry',
          html:
            'Grace has been lavished upon you. Do not treat it lightly. Do not receive it and then live as though nothing has changed. Let grace transform every area of your life—how you speak, how you love, how you serve.',
        },
        {
          kind: 'reflection',
          id: 'cor2-6-receive-grace',
          prompt: 'How have you received God&apos;s grace? Is there an area where you are not living it out? What would it mean to receive grace not in vain?',
        },
      ],
    },

    {
      ref: '2 Corinthians 6:14–18',
      title: 'Unequally Yoked; Separation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(14, 'Be ye not unequally yoked together with unbelievers: for what fellowship hath righteousness with unrighteousness? and what communion hath light with darkness?'),
            plain(15, 'And what concord hath Christ with Belial? or what part hath he that believeth with an infidel?'),
            plain(16, 'And what agreement hath the temple of God with idols? for ye are the temple of the living God; as God hath said, I will dwell in them, and walk in them; and I will be their God, and they shall be my people.'),
            plain(17, 'Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing; and I will receive you,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-6-yoked',
          html:
            '&quot;Be ye not unequally yoked together with unbelievers.&quot; An ox and a donkey yoked together pull in different directions. A believer and unbeliever pursuing different masters, different values, different destinies, will tear each other apart.',
        },
        {
          kind: 'greek',
          id: 'cor2-6-heterozygeo',
          title: 'Heterozygeo — To Be Unequally Yoked',
          script: 'ἑτεροζυγέω',
          translit: '<strong>Heterozygeo</strong> · to be yoked with a different kind; to be bound in partnership with the unlike',
          description:
            'The image is of agriculture: animals mismatched in strength or gait cannot work a field. So believers paired with unbelievers in close partnership cannot move together toward Christ.',
        },
        {
          kind: 'commentary',
          id: 'cor2-6-separation',
          html:
            '&quot;Come out from among them, and be ye separate.&quot; This is not social arrogance. It is spiritual protection. The believer must guard against being pulled away from Christ by intimate partnerships with those who do not share faith in Him.',
        },
        {
          kind: 'christ',
          id: 'cor2-6-christ-temple',
          title: 'Christ Connection — You Are the Temple of Christ',
          html:
            'The Corinthians are &quot;the temple of the living God.&quot; Their sanctity is not private. It belongs to Christ. To compromise that sanctity through unequal partnerships is to desecrate His temple.',
        },
        {
          kind: 'carry',
          html:
            'Before you bind yourself in covenant to another—in marriage, business partnership, or close community—ask: does this person share my foundation in Christ? Are we yoked to the same master? If not, the marriage of souls will be perpetually strained.',
        },
        {
          kind: 'reflection',
          id: 'cor2-6-separate',
          prompt: 'Are there areas where you are &quot;unequally yoked&quot; with those who do not share your faith? What would it mean to &quot;come out and be separate&quot;?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Be ye not unequally yoked together with unbelievers: for what fellowship hath righteousness with unrighteousness?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 6 · Study Guide',
  },

  hasHebrew: false,
};
