import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 8 — Meat Sacrificed to Idols
 *
 * The Corinthians face a practical question: can they eat meat that has been
 * sacrificed to idols? Some are convinced it is permissible; others, with weaker
 * consciences, are troubled. Paul teaches that knowledge puffs up, but love builds
 * up. The right to eat is less important than the brother for whom Christ died.
 */
export const FIRST_CORINTHIANS_8: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 8,

  intros: [
    'In Corinth, as in most pagan cities, the meat sold in the market had often been sacrificed to idols before being offered for sale. This created a tension for Christian converts from paganism. Can they eat such meat? Does eating it constitute participation in idolatry? Paul addresses not just the question itself, but the deeper issue it reveals: how Christians relate to one another when they disagree about matters of conscience.',
    'The answer Paul gives is surprising. He does not settle the question on principle. Instead, he establishes a hierarchy of values: knowledge is inferior to love. Your right to exercise your liberty is less important than your brother&apos;s spiritual welfare. This chapter teaches a radical generosity—the willingness to limit your freedom for the sake of another&apos;s conscience.',
  ],

  sections: [
    {
      ref: '1 Corinthians 8:1–6',
      title: 'Knowledge and Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Now as touching things offered unto idols: We know that we all have knowledge. Knowledge puffeth up, but charity edifieth.'),
            plain(2, 'And if any man think that he knoweth any thing, he knoweth nothing yet as he ought to know it.'),
            plain(3, 'But if any man love God, the same is known of God.'),
            plain(4, 'As concerning therefore the eating of those things that are offered in sacrifice unto idols, we know that an idol is nothing in the world, and that there is none other God but one.'),
            plain(5, 'For though there be that are called gods, whether in heaven or in earth, (as there be gods many, and lords many,)'),
            plain(6, 'But to us there is but one God, the Father, of whom are all things, and we in him; and one Lord Jesus Christ, by whom are all things, and we by him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-1-knowledge',
          html:
            'Paul begins with a paradox: &quot;Knowledge puffeth up, but charity edifieth.&quot; Knowledge of the truth is good, but it can make a person proud, dismissive of those with weaker understanding. Love, by contrast, builds others up. The Corinthians have been proud of their knowledge; Paul calls them to love.',
        },
        {
          kind: 'greek',
          id: 'cor8-1-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; self-giving love; covenant love',
          description:
            'Agape is not mere sentiment. It is the willingness to subordinate your own interests to another&apos;s good. This is the love that Paul sets above knowledge and liberty.',
        },
        {
          kind: 'commentary',
          id: 'cor8-1-known',
          html:
            'The contrast is striking: the person who thinks he knows something &quot;knoweth nothing yet as he ought to know it.&quot; But &quot;if any man love God, the same is known of God.&quot; It is not your knowledge of God that matters most. It is God&apos;s knowledge of you—His choice, His love, His acceptance.',
        },
        {
          kind: 'christ',
          id: 'cor8-1-christ-one-lord',
          title: 'Christ Connection — One Lord Jesus Christ',
          html:
            'Paul affirms the exclusivity of Christ: &quot;one Lord Jesus Christ, by whom are all things.&quot; Whatever knowledge we have, whatever freedom we exercise, must be in submission to Christ&apos;s lordship.',
        },
        {
          kind: 'carry',
          html:
            'You may have correct theological knowledge. You may know your rights in Christ. But knowledge must be tempered by love. Before you insist on your rights, ask: how will this affect my brother? How will it affect their faith?',
        },
        {
          kind: 'reflection',
          id: 'cor8-1-knowledge-love',
          prompt: 'Where are you tempted to insist on your right because you have knowledge that others lack? What would it mean to choose love instead?',
        },
      ],
    },

    {
      ref: '1 Corinthians 8:7–13',
      title: 'The Weak Conscience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(7, 'Howbeit there is not in every man that knowledge: for some with conscience of the idol unto this hour eat it as a thing offered unto an idol; and their conscience being weak is defiled.'),
            plain(10, 'For if any man see thee which hast knowledge sit at meat in the idol&apos;s temple, shall not the conscience of him which is weak be emboldened to eat those things which are offered to idols;'),
            plain(11, 'And through thy knowledge shall the weak brother perish, for whom Christ died?'),
            plain(12, 'But when ye sin so against the brethren, and wound their weak conscience, ye sin against Christ.'),
            plain(13, 'Wherefore, if meat make my brother to offend, I will eat no flesh while the world standeth, that I make not my brother to offend.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-2-weak',
          html:
            'Paul speaks with compassion for the &quot;weak brother&quot;—one whose conscience is still tender, still bound by the old habits and fears of paganism. His conscience is not weak because he lacks knowledge, but because his faith is still young. To pressure him to eat when he has doubt is to &quot;wound their weak conscience.&quot;',
        },
        {
          kind: 'greek',
          id: 'cor8-2-asthenes',
          title: 'Asthenes — Weak',
          script: 'ἀσθενής',
          translit: '<strong>Asthenes</strong> · weak; without strength; tender',
          description:
            'The asthenes brother is not deficient morally. He is simply new to the faith, still learning to walk. The strong have a responsibility to help him, not to mock him or pressure him.',
        },
        {
          kind: 'commentary',
          id: 'cor8-2-perish',
          html:
            'Paul uses startling language: &quot;through thy knowledge shall the weak brother perish, for whom Christ died.&quot; This is no light matter. By parading your liberty, you can actually cause spiritual harm to a brother whom Christ has redeemed.',
        },
        {
          kind: 'christ',
          id: 'cor8-2-christ-died',
          title: 'Christ Connection — Christ Died for the Weak Brother',
          html:
            'The clincher: &quot;for whom Christ died.&quot; The weak brother is not a burden or a nuisance. He is a person for whom Christ poured out His life. His conscience matters because he matters to Christ.',
        },
        {
          kind: 'carry',
          html:
            'Paul concludes with a stunning commitment: &quot;If meat make my brother to offend, I will eat no flesh while the world standeth.&quot; He is willing to forgo his liberty permanently if it will protect his brother&apos;s faith. This is the cost of love. What liberties are you willing to give up for the sake of another?',
        },
        {
          kind: 'reflection',
          id: 'cor8-2-offend',
          prompt: 'What &quot;meats&quot; in your life—what freedoms or rights—might you need to limit for the sake of someone weaker in faith? What is Paul asking of you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And through thy knowledge shall the weak brother perish, for whom Christ died.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 8 · Study Guide',
  },

  hasHebrew: false,
};
