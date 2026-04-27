import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 4 — Refuse Fables, Exercise Unto Godliness
 *
 * False teachers spread lies about the body and creation. Some forbid marriage,
 * some demand abstinence from foods—as if the flesh were inherently evil. Paul
 * cuts through this gnosticism. God created all things good. The created order
 * is blessed and hallowed through God&apos;s word and prayer. Timothy is called
 * to refuse such fables and instead exercise himself unto godliness.
 */
export const FIRST_TIMOTHY_4: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 4,

  intros: [
    'Asceticism creeps into the church. False teachers, speaking with confidence born of deception, forbid marriage and demand abstinence from certain foods. Their theology is inverted: the body is not enemy territory to be starved but God&apos;s creation to be received with gratitude. Paul speaks with pastoral firmness. These teachings do not lead to holiness but to pride and delusion.',
    'Yet Paul does not dismiss all discipline. He calls Timothy to "exercise thyself unto godliness." The Greek word is gumnaze—to train as an athlete trains. Discipline is necessary. But it aims not at self-punishment but at becoming conformed to Christ. The training is for the life of the Spirit, not in opposition to the body but in proper alignment of the whole person.',
  ],

  sections: [
    /* ─── 1 Timothy 4:1–5 — False Doctrines and Truth ────────────────── */
    {
      ref: '1 Timothy 4:1–5',
      title: 'Beware of Seducing Spirits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Now the Spirit speaketh expressly, that in the latter times some shall depart from the faith, giving heed to seducing spirits, and doctrines of devils;'),
            plain(2, 'Speaking lies in hypocrisy; having their conscience seared with a hot iron;'),
            plain(3, 'Forbidding to marry, and commanding to abstain from meats, which God hath created to be received with thanksgiving of them which believe and know the truth.'),
            plain(4, 'For every creature of God is good, and nothing to be refused, if it be received with thanksgiving:'),
            plain(5, 'For it is sanctified by the word of God and prayer.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-seducing-spirits',
          html:
            'Paul uses blunt language: "seducing spirits, and doctrines of devils." This is not mere disagreement about theology. False teaching has spiritual origins—it entices believers away from truth and toward deception. The false teachers themselves are often unaware of their captivity. They speak with conviction because "their conscience [is] seared"—so damaged by repeated sin that they no longer feel the warning voice of God.',
        },
        {
          kind: 'greek',
          id: 'tim4-planao',
          title: 'Planao — Seduce, Deceive',
          script: 'πλανάω',
          translit: '<strong>Planao</strong> · to deceive; to seduce; to wander from truth',
          description:
            'Planao means to lead astray, to cause someone to wander from the true path. Deception is not always crude. Often it wears the mask of piety, severity, and concern for holiness. The only defense is vigilance and knowledge of the truth.',
        },
        {
          kind: 'commentary',
          id: 'tim4-creation-good',
          html:
            'Paul affirms the goodness of creation. Marriage is good. Food is good. The body is not evil. This is bedrock theology. In Genesis 1, God surveys His creation and declares it "very good." To forbid what God has created is to disagree with God Himself. Asceticism that despises the body contradicts the gospel and the goodness of the Incarnation.',
        },
        {
          kind: 'christ',
          id: 'tim4-christ-incarnate',
          title: 'Christ Connection — God in the Flesh',
          html:
            'The incarnation is the ultimate vindication of the body. God did not descend as a ghost or idea. He became flesh. He ate bread. He slept. He wept. He touched lepers. To despise the body is to despise the God who took a body. True piety honors the physical creation as the arena where God&apos;s redemptive work unfolds.',
        },
        {
          kind: 'carry',
          html:
            'When you eat a meal, receive it with thanksgiving. This simple practice reminds you that the good things of creation come from God&apos;s hand. It sanctifies the ordinary. You need not fast from life to be holy. You sanctify your eating, your marriage, your work through gratitude and alignment with God&apos;s truth. Where do you practice false spirituality instead of true?',
        },
        {
          kind: 'reflection',
          id: 'tim4-thanksgiving',
          prompt: 'What is one simple practice (a meal, a relationship, a physical activity) that you could receive with more gratitude? How might doing so reshape your understanding of holiness?',
        },
      ],
    },

    /* ─── 1 Timothy 4:6–16 — Timothy&apos;s Charge ────────────────────────── */
    {
      ref: '1 Timothy 4:6–16',
      title: 'Exercise Thyself Unto Godliness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(6, 'If thou put the brethren in remembrance of these things, thou shalt be a good minister of Jesus Christ, nourished up in the words of faith and of good doctrine, whereunto thou hast attained.'),
            plain(7, 'But refuse profane and old wives&apos; fables, and exercise thyself rather unto godliness.'),
            plain(8, 'For bodily exercise profiteth a little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come.'),
            plain(12, 'Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.'),
            plain(15, 'Meditate upon these things; give thyself wholly to them; that thy profiting may appear to all.'),
            plain(16, 'Take heed unto thyself, and unto the doctrine; continue in them: for in doing this thou shalt both save thyself, and them that hear thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-good-minister',
          html:
            'Timothy&apos;s task is not to invent new doctrine but to remind the church of what it has already received. He is a steward of truth, not its creator. "Nourished up in the words of faith"—fed and sustained by sound doctrine—he is equipped to nourish others. The flow is always from Christ through apostolic tradition to the present assembly.',
        },
        {
          kind: 'greek',
          id: 'tim4-gumnaze',
          title: 'Gumnaze — Exercise, Train',
          script: 'γυμνάζω',
          translit: '<strong>Gumnaze</strong> · to exercise; to train; to strip down (athletic imagery)',
          description:
            'The root image is the gymnasium—athletes training naked to perfect their bodies. Paul uses this image spiritually. Godliness requires training, repetition, discipline. It is not passive reception but active cultivation. You become holy through practice, through intention, through refusing compromise.',
        },
        {
          kind: 'commentary',
          id: 'tim4-bodily-vs-godliness',
          html:
            'Physical exercise has value, but its profit is limited. It serves the body in this life only. Godliness—the cultivation of a Christlike character—is profitable for all things, now and eternally. This is not a call to neglect health but to order rightly what matters most. The inner life determines the outer reality.',
        },
        {
          kind: 'christ',
          id: 'tim4-christ-example',
          title: 'Christ Connection — Pattern of Holiness',
          html:
            'When Paul says Timothy should "be thou an example of the believers," he has in mind the example of Jesus Himself. Jesus&apos; word is authoritative, His conversation is gracious, His charity is sacrificial. Timothy is not asked to be extraordinary. He is asked to reflect the extraordinary One who called him.',
        },
        {
          kind: 'carry',
          html:
            'Your profiting—your growth in grace—should be visible. Not to draw attention to yourself, but so that those around you see that the gospel works. That faith produces peace. That discipline produces freedom. That dying to self leads to life. What do your daily practices say about what you believe?',
        },
        {
          kind: 'reflection',
          id: 'tim4-example',
          prompt: 'In what area of life do you most want to grow toward godliness? What discipline or practice would move you in that direction?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Refuse profane and old wives&apos; fables, and exercise thyself rather unto godliness. For bodily exercise profiteth a little: but godliness is profitable unto all things.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 4 · Study Guide',
  },

  hasHebrew: false,
};
