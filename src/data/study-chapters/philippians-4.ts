import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 4 — Rejoice in the Lord; Be Careful for Nothing; All Things
 *
 * "Rejoice in the Lord alway: and again I say, Rejoice." Philippians 4 brings
 * the letter to a practical conclusion. Rejoicing is not circumstantial; it is
 * a command. Be careful for nothing; instead, bring all your anxieties to God
 * in prayer. And the result? "The peace of God, which passeth all understanding,
 * shall keep your hearts and your minds through Christ Jesus."
 */
export const PHILIPPIANS_4: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 4,

  intros: [
    'Paul has spoken of joy and loss, of sacrifice and resurrection, of pressing toward the goal. Now he turns to the daily life of believers: conflicts that need resolving, rejoicing that needs practicing, anxieties that need releasing to God.',
    'The promise of Philippians 4 is not that all problems disappear. Rather, it is that the peace of God guards the heart and mind. This peace is not the absence of difficulty. It is the presence of God—steadying, sustaining, transforming difficulty into purpose.',
  ],

  bottomShare: {
    label: 'Share Philippians 4',
    quote:
      'Rejoice in the Lord alway. Be careful for nothing; but in every thing bring your requests to God. The peace of God shall keep your heart and mind in Christ Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 4 · Study Guide',
  },

  sections: [
    /* ─── Philippians 4:1–7 — Rejoice; Be Anxious for Nothing ────────────────── */
    {
      ref: 'Philippians 4:1–7',
      title: 'Joy, Steadfastness, and the Peace of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Rejoice in the Lord alway: and again I say, '),
                hp('Rejoice', 'p4-rejoice'),
                t('.'),
              ],
            },
            plain(5, 'Let your moderation be known unto all men. The Lord is at hand.'),
            {
              number: 6,
              spans: [
                t('Be '),
                hg('careful for nothing', 'p4-anxious'),
                t('; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the '),
                hp('peace of God, which passeth all understanding, shall keep your hearts and your minds through Christ Jesus', 'p4-peace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-rejoice',
          html:
            '"Rejoice in the Lord alway: and again I say, Rejoice." This is not optional happiness. It is a command. And it is anchored: rejoice in the Lord—not in your circumstances, but in Christ. Not because everything is going well, but because Christ is Lord. This is the deepest joy.',
        },
        {
          kind: 'commentary',
          id: 'p4-anxious',
          html:
            '"Be careful for nothing." Do not be anxious. Anxiety is the opposite of trust. It is a declaration that you are responsible for solving your own problems, securing your own future. Instead, Paul calls believers to release anxiety and bring their requests to God in prayer.',
        },
        {
          kind: 'commentary',
          id: 'p4-peace',
          html:
            '"The peace of God, which passeth all understanding, shall keep your hearts and your minds." This peace is extraordinary. It operates even when circumstances would justify anxiety. It guards—like a sentinel, standing watch over—the heart and mind. It protects the inner life from being destroyed by external pressure.',
        },
        {
          kind: 'greek',
          id: 'p4-eirene',
          title: 'Eirene — "Peace"',
          script: 'εἰρήνη',
          translit: '<strong>Eirene</strong> · peace; wholeness; harmony; reconciliation',
          description:
            'The peace of God is not mere absence of conflict. It is wholeness, integration, harmony with God. It is the restoration of what sin had fractured. When you are at peace with God, you can be at peace in any circumstance.',
        },
        {
          kind: 'christ',
          id: 'p4-christ-peace',
          title: 'Christ Connection — Christ the Source of Peace',
          html:
            'Jesus said, "Peace I leave with you, my peace I give unto you" (John 14:27). The peace of God that passeth understanding is Christ&apos;s peace, given to believers. It is not earned by perfect circumstances or perfect faith. It is a gift, available always, if sought in prayer.',
        },
        {
          kind: 'carry',
          html:
            'Today, you will face opportunities for anxiety. Circumstances will invite worry. And then comes this word: be careful for nothing. Instead, bring your requests to God. And in response, a peace—a wholeness, a steadiness—will keep your heart and mind. This peace is real. It is available. It is deeper than your circumstances.',
        },
        {
          kind: 'reflection',
          id: 'p4-peace-reflect',
          prompt: 'What anxiety are you carrying right now? What if you brought it to God in prayer and trusted Him for the result? What would that peace feel like?',
        },
      ],
    },

    /* ─── Philippians 4:8–13 — Think on These Things; I Can Do All Things ────── */
    {
      ref: 'Philippians 4:8–13',
      title: 'Think on Whatsoever Things Are Pure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are '),
                hy('of good report', 'p4-think'),
                t('; if there be any virtue, and if there be any praise, think on these things.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be '),
                hg('content', 'p4-content'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('I know both how to be abased, and I know how to abound: every where and in all things I am instructed both to be full and to be hungry, both to abound and to suffer need.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('I '),
                hp('can do all things through Christ which strengtheneth me', 'p4-strength'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-think',
          html:
            'Paul lists what believers should fix their minds upon: true, honest, just, pure, lovely, and of good report things. This is not naive positivity. It is the recognition that what you think about shapes who you are. Your mind is a gate; you control what enters.',
        },
        {
          kind: 'commentary',
          id: 'p4-content',
          html:
            '"Therewith to be content." Contentment is not resignation or passivity. It is the freedom from envy, from grasping, from anxiety about status. Paul describes learning this—it is a discipline, a cultivation. He has "learned" in every state to be content.',
        },
        {
          kind: 'commentary',
          id: 'p4-strength',
          html:
            '"I can do all things through Christ which strengtheneth me." This is not blanket permission to attempt anything. The context makes clear: strength to endure hardship, to be abased or to abound, to hunger or to have plenty. The strength is relational—through Christ, drawing on His power.',
        },
        {
          kind: 'greek',
          id: 'p4-karteria',
          title: 'Karteria — "Strength" or "Endurance"',
          script: 'κάρτερος',
          translit: '<strong>Kartereo</strong> · to persevere; to stand firm; to endure',
          description:
            'The strength Paul speaks of is not muscular strength but fortitude—the capacity to persevere through hardship. It is the strength of a soldier who holds the line, not the strength of conquest but of endurance.',
        },
        {
          kind: 'carry',
          html:
            'Guard what you allow into your mind. Think on things that are true, just, pure, lovely. This is not escapism; it is discipline. And know that whatever circumstances come—abundance or want, honor or shame—you can endure them through Christ. The strength is real. It is available. It is enough.',
        },
        {
          kind: 'reflection',
          id: 'p4-strength-reflect',
          prompt: 'What circumstance do you need strength to endure? Can you release it to Christ and trust that He will strengthen you through it?',
        },
      ],
    },
  ],
};
