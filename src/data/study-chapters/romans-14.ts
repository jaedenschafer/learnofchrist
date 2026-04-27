import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 14 — The Weak and the Strong in Faith
 *
 * "Let us not therefore judge one another any more." Dispute not over
 * disputable matters. The strong must bear the weak. "Whatsoever is not of
 * faith is sin."
 */
export const ROMANS_14: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 14,

  intros: [
    'Paul shifts from doctrinal disputes to disputes over practice. Some believers eat meat; others eat only vegetables. Some observe days; others do not. These are not essential matters. Yet they become sources of judgment and division. Paul insists: Let the strong not despise the weak. Let the weak not judge the strong. Each must be persuaded in their own mind and act in faith.',
    'Romans 14 is a lesson in Christian liberty and Christian love. Liberty means freedom from external rules. But that freedom is always exercised in the presence of others. What you have the right to do may not be what love requires you to do. If eating meat causes your brother to stumble, then do not eat meat. The law of love supersedes the law of freedom.',
  ],

  sections: [
    /* ─── Romans 14:1–12 — Receive Without Judgment ───────────────────────── */
    {
      ref: 'Romans 14:1–12',
      title: 'Receive One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Him that is weak in the faith receive ye, but not to doubtful disputations.'),
            plain(3, 'Let not him that eateth despise him that eateth not; and let not him which eateth not judge him that eateth: for God hath received him.'),
            plain(5, 'One man esteemeth one day above another: another esteemeth every day alike. Let every man be fully persuaded in his own mind.'),
            plain(10, 'But why dost thou judge thy brother? or why dost thou set at nought thy brother? for we shall all stand before the judgment seat of Christ.'),
            plain(12, 'So then every one of us shall give account of himself to God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom14-weak-faith',
          html:
            '"Him that is weak in the faith receive ye." Weakness in faith is not sin. It is the state of one who does not yet grasp the full range of Christian freedom. Receive such a person—not to sit in judgment of their scruples but to help them grow.',
        },
        {
          kind: 'greek',
          id: 'rom14-astheneia',
          title: 'Astheneia — Weakness',
          script: 'ἀσθένεια',
          translit: '<strong>Astheneia</strong> · weakness; frailty; lack of strength',
          description:
            'Weakness in faith is not moral failure. It is being in a state of learning, of not yet having the confidence to exercise freedom. It requires patience and gentle instruction, not contempt.',
        },
        {
          kind: 'commentary',
          id: 'rom14-not-judge',
          html:
            '"Let not him that eateth despise him that eateth not; and let not him which eateth not judge him that eateth." Neither superiority nor inferiority belongs in this matter. God has received both. Both can be faithful. The practices differ; the faith is the same.',
        },
        {
          kind: 'commentary',
          id: 'rom14-persuaded',
          html:
            '"Let every man be fully persuaded in his own mind." Conviction matters. You cannot do what you are not convinced is right. But neither can you impose your conviction on another. Each person must come to their own persuasion. This is the space of Christian liberty.',
        },
        {
          kind: 'christ',
          id: 'rom14-christ-judge',
          title: 'Christ Connection — Answerable to the Judge',
          html:
            'Christ is the final judge. Not you, not me, not any human authority. Before Him, all must give account. This removes the burden of judgment from our shoulders and places it where it belongs.',
        },
        {
          kind: 'carry',
          html:
            'Stop judging your brother for their choices in disputable matters. You do not know their conscience. You do not know their journey. God has received them. That should be enough. If you disagree on non-essentials, agree to disagree and move on.',
        },
        {
          kind: 'reflection',
          id: 'rom14-judge',
          prompt: 'Where are you judging a fellow Christian for exercising freedom you yourself enjoy? What would change if you extended to them the grace Christ has extended to you?',
        },
      ],
    },

    /* ─── Romans 14:13–23 — Do Not Cause Your Brother to Stumble ──────────── */
    {
      ref: 'Romans 14:13–23',
      title: 'Love Over Liberty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(13, 'Let us not therefore judge one another any more: but judge this rather, that no man put a stumblingblock or an occasion to fall in his brother&apos;s way.'),
            plain(15, 'But if thy brother be grieved with thy meat, now walkest thou not charitably. Destroy not him with thy meat for whom Christ died.'),
            plain(19, 'Let us therefore follow after the things which make for peace, and things wherewith one may edify one another.'),
            plain(20, 'For meat destroy not the work of God. All things indeed are pure; but it is evil for that man who eateth with offence.'),
            plain(23, 'And he that doubteth is damned if he eat, because he eateth not of faith: for whatsoever is not of faith is sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom14-stumbling-block',
          html:
            '"Judge this rather, that no man put a stumblingblock or an occasion to fall in his brother&apos;s way." Your freedom has limits. It ends where it endangers another&apos;s faith. If your exercise of freedom causes a weaker brother to stumble and fall, you have abused your freedom.',
        },
        {
          kind: 'greek',
          id: 'rom14-skandalon',
          title: 'Skandalon — Stumbling Block',
          script: 'σκάνδαλον',
          translit: '<strong>Skandalon</strong> · stumbling block; offense; trap',
          description:
            'A skandalon is not mere disagreement. It is something that causes another to fall, to act against their conscience, to compromise their integrity. To place a skandalon before a brother is a serious offense.',
        },
        {
          kind: 'commentary',
          id: 'rom14-destroy',
          html:
            '"Destroy not him with thy meat for whom Christ died." The language is shocking. Your exercise of freedom, carried to its extreme, can destroy someone&apos;s faith. Paul weighs that seriously. The brother for whom Christ died is more precious than your right to eat meat.',
        },
        {
          kind: 'commentary',
          id: 'rom14-faith-sin',
          html:
            '"Whatsoever is not of faith is sin." This is the final principle. If you act while doubting, if you act against your conscience, it is sin. Not the action itself, but the acting without faith. Faith is the moral condition that sanctifies any action.',
        },
        {
          kind: 'christ',
          id: 'rom14-christ-love',
          title: 'Christ Connection — Love Limiting Freedom',
          html:
            'Christ willingly limited His freedom to serve others. He came not to be served but to serve. In Christ, freedom and love are not opposed. True freedom is the freedom to lay down your rights for another.',
        },
        {
          kind: 'carry',
          html:
            'Do not hide behind the phrase "I have freedom in Christ" when you are about to do something you know will hurt another Christian. Yes, you have freedom. But love is a higher law. What would it mean to sacrifice your freedom for the sake of peace and the other person&apos;s conscience?',
        },
        {
          kind: 'reflection',
          id: 'rom14-freedom',
          prompt: 'Where are you exercising freedom in ways that might cause a weaker brother or sister to stumble? What would it look like to limit your freedom out of love?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let us not judge one another any more. Him that is weak in the faith receive ye. Do not destroy for meat the work of God. Whatsoever is not of faith is sin.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 14 · Study Guide',
  },

  hasHebrew: false,
};
