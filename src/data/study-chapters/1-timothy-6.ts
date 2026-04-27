import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 6 — Godliness with Contentment
 *
 * Paul closes his letter to Timothy with urgent final charges. Servants must
 * honor their masters. Teachers must guard against the love of money, which is
 * the root of all evil. Rather, pursue righteousness, faith, love, patience, and
 * meekness. "Godliness with contentment is great gain." Timothy is called to fight
 * the good fight of faith, to lay hold on eternal life, to keep the faith pure.
 */
export const FIRST_TIMOTHY_6: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 6,

  intros: [
    'Paul&apos;s final words to Timothy are both tender and fierce. He loves the young man. But he also sees the snares set for the church. False teachers will arise, claiming piety as a cover for greed. The pursuit of riches will destroy many believers&apos; faith. Timothy must stand. He must guard the deposit of truth. He must run the race with endurance.',
    'Yet the tone is not fearful. Paul promises that godliness with contentment is "great gain." This is not the world&apos;s calculus. Wealth brings anxiety. Status brings enmity. But contentment with Christ brings peace that passes understanding. Timothy is invited into this rest—not as escape from labor, but as the fruit of right-ordered affections.',
  ],

  sections: [
    /* ─── 1 Timothy 6:1–10 — Money and Godliness ───────────────────────── */
    {
      ref: '1 Timothy 6:1–10',
      title: 'The Love of Money and True Gain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(6, 'But godliness with contentment is great gain.'),
            plain(7, 'For we brought nothing into this world, and it is certain we can carry nothing out.'),
            plain(8, 'And having food and raiment let us be therewith content.'),
            plain(9, 'But they that will be rich fall into temptation and a snare, and into many foolish and hurtful lusts, which drown men in destruction and perdition.'),
            plain(10, 'For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim6-contentment',
          html:
            '"Godliness with contentment is great gain." This statement cuts against the grain of every culture&apos;s whisper. The world says contentment is surrender, failure, lack of ambition. Paul says it is the summation of wealth. To be rich in faith, at peace with what you have, satisfied in God—this is to have gained all things.',
        },
        {
          kind: 'greek',
          id: 'tim6-autarkeia',
          title: 'Autarkeia — Contentment, Self-sufficiency',
          script: 'αὐτάρκεια',
          translit: '<strong>Autarkeia</strong> · contentment; self-sufficiency; having enough',
          description:
            'The root idea is self-sufficiency, but not in the sense of needing nothing. Rather, being content with little because your life is anchored in something beyond material circumstance. When your identity rests in Christ, external goods lose their power to define you.',
        },
        {
          kind: 'commentary',
          id: 'tim6-root-of-evil',
          html:
            'Paul does not say money is evil. He says "the love of money is the root of all evil." Money is morally neutral—a tool. But when you make it an end in itself, it becomes a god that demands everything and promises everything. It promises peace and delivers fear. It promises security and delivers slavery. Those who covet after riches have pierced themselves with sorrows.',
        },
        {
          kind: 'christ',
          id: 'tim6-christ-riches',
          title: 'Christ Connection — Rich Beyond Measure',
          html:
            'Jesus owned nothing. He had no place to lay His head. Yet He is described as rich (2 Corinthians 8:9). His wealth is His Father&apos;s love, His kingdom, His purpose. When He calls disciples to leave all and follow Him, He is not impoverishing them. He is inviting them into a wealth that cannot be lost, stored, or stolen.',
        },
        {
          kind: 'carry',
          html:
            'What would change if you truly believed that godliness with contentment is great gain? Would you pursue different things? Would you rest differently? Would your relationships transform? Start with gratitude. Name three things you have without which you would suffer—food, shelter, relationships. Then consider: am I content with what sustains life, or do I crave what destroys it?',
        },
        {
          kind: 'reflection',
          id: 'tim6-contentment-test',
          prompt: 'Where in your life are you tempted by the love of money? What would it look like to replace that love with contentment?',
        },
      ],
    },

    /* ─── 1 Timothy 6:11–21 — Fight the Good Fight ────────────────────── */
    {
      ref: '1 Timothy 6:11–21',
      title: 'Hold Fast to Eternal Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(11, 'But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness.'),
            plain(12, 'Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses.'),
            plain(14, 'That thou keep this commandment without spot, unrebukeable, until the appearing of our Lord Jesus Christ:'),
            plain(15, 'Which in his times he shall shew, who is the blessed and only Potentate, the King of kings, and Lord of lords;'),
            plain(17, 'Charge them that are rich in this world, that they be not highminded, nor trust in uncertain riches, but in the living God, who giveth us richly all things to enjoy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim6-man-of-god',
          html:
            '"O man of God"—this is how the prophets were addressed in the Old Testament. Timothy stands in that line. He is not an administrator. He is not a career professional. He is a man set apart for God&apos;s purposes. And his calling is clear: "Flee these things. Follow after righteousness, godliness, faith, love, patience, meekness." His energy is not to be spent on acquisition but on transformation.',
        },
        {
          kind: 'greek',
          id: 'tim6-agonizomai',
          title: 'Agonizomai — Fight, Struggle, Contend',
          script: 'ἀγωνίζομαι',
          translit: '<strong>Agonizomai</strong> · to fight; to struggle; to contend; to agonize',
          description:
            'The word comes from the image of athletic contests. The good fight of faith is not passive. It requires effort, endurance, willingness to suffer. Yet it is not a fight against flesh and blood but against deception, against the world&apos;s lies, against your own doubts.',
        },
        {
          kind: 'commentary',
          id: 'tim6-witness',
          html:
            'Timothy has already "professed a good profession before many witnesses." His commitment to Christ is public. He cannot hide. His life is visible to the congregation. This is accountability, yes, but also assurance. He is not walking alone. The church has seen his faith. The church will help sustain it.',
        },
        {
          kind: 'christ',
          id: 'tim6-christ-returning',
          title: 'Christ Connection — King of Kings',
          html:
            'Paul reminds Timothy of the appearing of Christ—the consummation of all history. In that moment, earthly status means nothing. Only faithfulness matters. The "King of kings" will reveal what was hidden. Timothy&apos;s labor in an obscure city, his faithful teaching, his quiet resistance to false doctrine—all will be vindicated.',
        },
        {
          kind: 'carry',
          html:
            'You are called to "keep this commandment without spot, unrebukeable." This does not mean perfection. It means integrity—single-hearted devotion to what matters most. What small compromises are you making that erode your witness? What would it look like to flee them? The rich are told not to trust in uncertain riches but in the living God. This applies to all. Where do you trust in the wrong thing?',
        },
        {
          kind: 'reflection',
          id: 'tim6-fight',
          prompt: 'What is your "good fight of faith" right now? Where are you tempted to quit? What would it mean to "lay hold on eternal life" in the midst of that struggle?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called. Godliness with contentment is great gain.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 6 · Study Guide',
  },

  hasHebrew: false,
};
