import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 2 — Sweet Savour of Christ
 *
 * Paul addresses the aftermath of his severe letter, calling the Corinthians to
 * forgive and comfort a repentant man. He then reveals the staggering work of
 * apostolic ministry: believers are the fragrance of Christ released into every
 * place. That fragrance divides the world—life to some, death to others. Paul
 * closes with a warning: do not corrupt the word of God. Speak it as Christ
 * would speak it, in sincerity and divine power.
 */
export const SECOND_CORINTHIANS_2: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 2,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 15 },
  topicTags: ['suffering', 'compassion', 'witness', 'hope'],
  opener: {
    topical: true,
    caption: '2 Corinthians 2',
  },
  intros: [
    'Paul has written the Corinthians a severe letter about a man in discipline. The discipline has worked—the man has repented. Now Paul pivots from judgment to mercy. He does not want to pile on more sorrow. Instead, he calls the church to forgive, to comfort, to restore the man to fellowship. This is the heart of pastoral power: the ability to inflict pain when needed, and the greater ability to heal when the time has come.',
    'But 2 Corinthians 2 moves beyond one man&apos;s restoration. Paul turns to his own apostolic life and reveals something staggering: he and his team are the fragrance of Christ. Wherever they go, they release the scent of His knowledge. Yet that fragrance works differently in different hearts. To those who are being saved, it smells like life. To those who are perishing, it smells like death. The gospel is never neutral. And the weight of that responsibility drives Paul to a final charge: speak the word of God with integrity, not as many corrupt it for profit, but as one who stands before God Himself.',
  ],

  sections: [
    /* ─── 2 Corinthians 2:1 — Heaviness Deferred ───────────────────────── */
    {
      ref: '2 Corinthians 2:1',
      title: 'Heaviness Deferred',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1, t('But I determined this with myself, that I would not come again to you in '), hy('heaviness', 'greek-lype'), t('.'))
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-heaviness-1',
          html:
            'Paul had sent a letter written in tears and affliction. That letter brought grief. Now, as he contemplates returning to Corinth, he makes a deliberate choice: not to come in the same heaviness. His power as a leader is not the perpetual wielding of judgment. It is the wisdom to know when to lay the rod down and when to pick it up.',
        },
        {
          kind: 'greek',
          id: 'greek-lype',
          title: 'Lype — Grief; Heaviness',
          script: 'λύπη',
          translit: '<strong>lype</strong> · grief, sorrow, sadness',
          description:
            'Lype is not anger; it is the ache of sorrow. Paul had written in lype—sorrow at their sin, not hostility toward them. Now he refuses to come back inflicting that same grief. Discipline has a season; so does encouragement.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever had to correct someone—a child, a friend, a team—you know the weight of it. You carry the sorrow of their misstep, the ache of loving them enough to tell them the truth. But pastoral power also knows when to set that weight down. If the person has repented, overmuch grief becomes cruelty. Your challenge this week: notice where you might be holding onto justified sorrow longer than mercy requires.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-heaviness',
          prompt: 'Is there someone in your life from whom you&apos;ve withheld comfort because they once caused you pain? What might change if you came to them in encouragement rather than heaviness?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:2–4 — Tears in Writing ──────────────────────── */
    {
      ref: '2 Corinthians 2:2–4',
      title: 'Tears in Writing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(2, t('For if I make you sorry, who then is he that maketh me glad, but the same which is made sorry by me?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-sorrow-logic',
          html:
            'Paul&apos;s logic is disarmingly simple: if he comes to make them grieve, who will comfort him? The leader&apos;s joy depends on the flock&apos;s joy. This is not manipulation. It is the deep reality of pastoral love—the shepherd&apos;s heart rises and falls with the sheep.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(3, t('And I wrote this same unto you, lest, when I came, I should have sorrow from them of whom I ought to rejoice; having confidence in you all, that my joy is the joy of you all.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-confidence',
          html:
            'Paul had written that severe letter not to inflict sorrow, but to produce change before he arrived. He trusted them. He believed that word would bear fruit and that when he came, he could come in joy instead of correction.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(4, t('For out of much '), hg('affliction and anguish of heart', 'cor2-affliction'), t(' I wrote unto you with many tears; not that ye should be made sorry, but that ye might know the love which I have more abundantly unto you.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-affliction',
          html:
            'This is the heart laid bare. Paul writes in affliction and anguish—not because he enjoys wielding authority or punishing sin, but because he loves them so much that he cannot stay silent when they stray. The tears are real. The love is the reason.',
        },
        {
          kind: 'carry',
          html:
            'True pastoral care is costly. It asks you to grieve when others grieve, to weep over their wandering, to say hard things because you love them too much to let them walk unwarned. Whether you lead a small group, a team, or a household, the measure of your care is whether you are willing to suffer for those in your charge.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-tears',
          prompt: 'Think of someone who has spoken a hard truth to you out of love. How did you feel then, and how do you feel about it now?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:5–11 — Forgive and Comfort ──────────────────── */
    {
      ref: '2 Corinthians 2:5–11',
      title: 'Forgive and Comfort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(5, t('But if any have caused grief, he hath not grieved me alone, but in part all of you.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-one-grieves-all',
          html:
            'The man who sinned hurt not just Paul, but the whole body. Sin in a community is never private; it affects everyone. Yet that truth, rightly understood, should soften the heart toward repentance. The man is not an outcast to be crushed but a limb to be healed.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(7, t('So that contrariwise ye ought rather to '), hg('forgive him', 'cor2-forgive-now'), t(', and '), hg('comfort him', 'cor2-comfort'), t(', lest perhaps such a one should be swallowed up with overmuch sorrow.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-forgive-now',
          html:
            'The season of discipline is past. The man has repented. Now comes forgiveness—swift, public, and unconditional. Discipline without a clear path to restoration becomes cruelty.',
        },
        {
          kind: 'commentary',
          id: 'cor2-comfort',
          html:
            'After forgiveness comes comfort. The Greek word here, <em>parakaleo</em>, means to draw near, to encourage, to stand beside. The man needs to know he is not abandoned, not permanently stained, not cast out of the family.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(10, t('To whom ye forgive any thing, I forgive also: for if I forgave any thing, to whom I forgave it, for your sakes forgave I it in '), hp('the person of Christ', 'christ-person-of-christ'), t(';')),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-person-of-christ',
          title: 'Christ Connection — Forgiveness in the Person of Christ',
          html:
            'Paul forgives &quot;in the person of Christ.&quot; This is not his personal magnanimity. This is his role as Christ&apos;s representative. When Paul extends forgiveness, he is extending Christ&apos;s own forgiveness. The man is not forgiven by Paul; he is forgiven by Christ through Paul. This is why the forgiveness carries weight and why it must be genuine. &quot;As Christ forgave you, so also do ye&quot; (Colossians 3:13).',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(11, t('Lest Satan should get an advantage of us: for we are not ignorant of '), hy('his devices', 'greek-nema'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-satan-door',
          html:
            'Unforgiveness opens a door. Satan&apos;s strategy[res:intertextual-exodus-34] is to splinter the body, to keep the church divided and suspicious and nursing old wounds. Forgiveness slams that door shut. It denies Satan a foothold.',
        },
        {
          kind: 'greek',
          id: 'greek-nema',
          title: 'Noëma — Device; Scheme; Plot',
          script: 'νόημα',
          translit: '<strong>noëma</strong> · thought, device, scheme, design',
          description:
            'Satan does not operate by raw force alone; he operates by devices—deceptions, strategies, schemes designed to destroy from within. Paul says we are not ignorant of them. Believers who know Scripture and know Christ can see through Satan&apos;s tricks.',
        },
        {
          kind: 'carry',
          html:
            'Bitterness is a foothold. The moment you decide to withhold forgiveness, to keep score, to make someone pay for what they did—that moment, Satan smiles. He no longer has to do anything. You are doing his work for him. Forgiveness is not weakness. It is power. It is the closing of a door that Satan cannot force open.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-devices',
          prompt: 'What situation in your life is Satan using to drive division or bitterness? How might forgiveness be the power that breaks his grip?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:12–13 — Restlessness for Titus ───────────────── */
    {
      ref: '2 Corinthians 2:12–13',
      title: 'Restlessness for Titus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(12, t('Furthermore, when I came to Troas to preach Christ&apos;s gospel, and a door was opened unto me of the Lord,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-door-opened',
          html:
            'Paul has traveled to Troas, a port city in northwest Asia Minor. The door to preach is open. Opportunity knocks. But Paul will do something unexpected: he will walk away from an open door.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(13, t('I had no rest in my spirit, because I found not Titus my brother: but taking my leave of them, I went into Macedonia.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-no-rest',
          html:
            'Paul is waiting for Titus to bring news from Corinth. That news matters more to him than the open door to preach. His spirit has no rest. The absence of a beloved friend and trusted coworker creates an ache that paralyzes him. Love for the people of Corinth—and love for Titus—overrides ministry opportunity.',
        },
        {
          kind: 'carry',
          html:
            'This is a permission. You do not have to say yes to every open door. Some doors stay closed because someone you love is calling you elsewhere. Some opportunities are set aside because your heart is restless and you need to be with your people. That is not failure of faith. That is the right ordering of love.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-titus',
          prompt: 'Is there an open door in front of you right now that you should walk away from because your heart is elsewhere? Where is love calling you to be?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:14 — Triumphing in Christ ──────────────────── */
    {
      ref: '2 Corinthians 2:14',
      title: 'Triumphing in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(14, t('Now thanks be unto God, which always '), hp('causeth us to triumph in Christ', 'christ-triumph'), t(', and maketh manifest the savour of his knowledge by us in every place.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-triumph-image',
          html:
            'Paul is picturing a Roman military triumph—a parade through the city after a great victory[res:bibleodyssey-triumphal-procession]. The conquering general leads the parade. Behind him march the soldiers and captives, displayed before all the city as proof of the victory. Paul says: God always makes us triumph in Christ. We are marching in Christ&apos;s victory parade.',
        },
        {
          kind: 'greek',
          id: 'greek-thriambeueo',
          title: 'Thriambeuo — To Lead in Triumph; To Triumph',
          script: 'θριαμβεύω',
          translit: '<strong>thriambeuo</strong> · to lead in triumph, to celebrate a military victory',
          description:
            'The word refers to a triumphal procession in Rome. What Paul is saying is: your apostolic life is a procession of Christ&apos;s victory. You are not struggling; you are being led in a parade. The victory is already won.',
        },
        {
          kind: 'christ',
          id: 'christ-triumph',
          title: 'Christ Connection — Captives Turned Heralds',
          html:
            'In a Roman triumph, the prisoners were led in chains—trophies of the general&apos;s conquest. But Paul says something extraordinary: we march in Christ&apos;s triumph, yet we are not captives in defeat. We are captives in a victory so complete that our very captivity becomes a proclamation. &quot;And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it&quot; (Colossians 2:15). The enemies that held us are the ones defeated, not us. We march free, bearing the news of His conquest.',
        },
        {
          kind: 'carry',
          html:
            'You are part of a victory parade. The Lord is not barely getting you through. He is leading you in triumph. Your struggles are real, but they are happening inside a war that has already been won. You carry news of that victory everywhere you go. Live like it.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-triumph',
          prompt: 'What does it change in your day to know you are marching in Christ&apos;s victory, not in your own struggle?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:15–16 — The Savour of Christ ──────────────────── */
    {
      ref: '2 Corinthians 2:15–16',
      title: 'The Savour of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(15, t('For we are unto God a sweet savour of Christ, in them that are saved, and in them that perish.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-savour-meaning',
          html:
            'A shift from sight to smell. The gospel is not just seen; it is perceived as a fragrance. When believers live and speak the truth of Christ, they release His scent into the world. It fills the air. It reaches people&apos;s hearts before their minds. That scent is an offering to God—a sweet savour, a sacrifice that pleases Him[res:sefaria-sweet-savour], echoing the old covenant&apos;s imagery of fragrant offerings.',
        },
        {
          kind: 'greek',
          id: 'greek-osme',
          title: 'Osmë — Fragrance; Scent; Smell',
          script: 'ὀσμή',
          translit: '<strong>osmë</strong> · scent, smell, fragrance, aroma',
          description:
            'The smell of sacrifice in the Old Testament. Leviticus repeatedly speaks of the &quot;sweet savour&quot; that rises from the altar to God. Paul says: you are that fragrance. Your lives are a living sacrifice.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(16, t('To the one we are the savour of death unto death; and to the other the savour of life unto life. And who is sufficient for these things?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-dividing-fragrance',
          html:
            'The same fragrance divides the world. To the one being saved, it is the scent of life—fresh, alive, drawing them toward Christ. To the one perishing, it is the scent of death—a reminder of judgment, of truth they have rejected, of the end they are walking toward. The gospel is never neutral.',
        },
        {
          kind: 'commentary',
          id: 'cor2-who-sufficient',
          html:
            'Paul pauses in wonder and asks: &quot;Who is sufficient for these things?&quot; The responsibility is staggering. Your words, your conduct, your presence in the world—these have consequences that echo into eternity. You are not a mere talker. You are a herald of life or death.',
        },
        {
          kind: 'christ',
          id: 'christ-fragrance',
          title: 'Christ Connection — Bearers of His Fragrance',
          html:
            'The fragrance you carry is Christ&apos;s fragrance. When others encounter you, they encounter the scent of His sacrifice, His love, His holiness. Paul writes to the Ephesians: &quot;Walk in love, as Christ also hath loved us, and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour&quot; (Ephesians 5:2). You are living out that sacrifice. Your life is the aroma of His death and resurrection, released into every place you go.',
        },
        {
          kind: 'carry',
          html:
            'You are a scent-bearer. When you walk into a room, you bring the fragrance of Christ with you. When you speak truth in love, the aroma rises. When you forgive, you smell of His mercy. When you serve, you smell of His humility. The question is not whether you are releasing a fragrance. You are. The only question is: which one? Life or death?',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-savour',
          prompt: 'What fragrance are you releasing into your world right now? How do you want to smell of Christ differently in the week ahead?',
        },
      ],
    },

    /* ─── 2 Corinthians 2:17 — Sincere Speech ────────────────────────────── */
    {
      ref: '2 Corinthians 2:17',
      title: 'Sincere Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(17, t('For we are not as many, which '), hg('corrupt the word of God', 'cor2-corrupt'), t(': but as of sincerity, but as of God, in the sight of God speak we in Christ.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-corrupt',
          html:
            'Some teachers water down the gospel, dilute it, twist it for profit or to make it palatable. They are merchants of the word, selling it like a commodity in the marketplace. Paul says: that is not us. We do not soften the message to please. We do not peddle the word. We speak it straight, in its sincerity, as God would speak it.',
        },
        {
          kind: 'greek',
          id: 'greek-kapeleueo',
          title: 'Kapeleueo — To Peddle; To Corrupt; To Huckster',
          script: 'καπηλεύω',
          translit: '<strong>kapeleueo</strong> · to peddle, to sell, to deal in, to corrupt by mixing',
          description:
            'Originally used for innkeepers who watered down wine to increase profit. By extension, it means to corrupt, to dilute, to adulterate the truth to make it more sellable. Paul refuses the label.',
        },
        {
          kind: 'commentary',
          id: 'cor2-in-sight-of-god',
          html:
            'Paul speaks &quot;in the sight of God.&quot; This is his ultimate accountability. Not the crowd&apos;s approval, not the paying customer&apos;s satisfaction, but God&apos;s watchful eye. That changes everything about how you speak.',
        },
        {
          kind: 'carry',
          html:
            'You have a message to speak—whether it is to a child, a friend, a colleague, or a congregation. The temptation is constant: soften it to avoid offense, edit it to please, shrink it to fit the moment. Paul says no. Speak as before God. Speak as Christ would speak. Sincerity is not cruelty; it is truth told in love, told as if God is listening. Because He is.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-sincerity',
          prompt: 'Is there a truth you have been afraid to speak because you fear how it will land? What would change if you spoke it &quot;in the sight of God&quot; rather than in fear of people?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For we are unto God a sweet savour of Christ, in them that are saved, and in them that perish.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-sweet-savour',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Leviticus 1–3: Sweet Savour Offerings',
      url: 'https://www.sefaria.org/Leviticus.1?lang=bi',
      description: 'Hebrew text + English side-by-side showing the old covenant&apos;s imagery of fragrant offerings that foreshadow believers as a sweet savour to God.',
    },
    {
      id: 'bibleodyssey-triumphal-procession',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Roman Triumphal Processions',
      url: 'https://www.bibleodyssey.org/dictionary/triumph/',
      description: 'Open-access entry explaining the Roman military triumph and Paul&apos;s metaphor of being led in Christ&apos;s victory parade.',
    },
    {
      id: 'intertextual-exodus-34',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Satan&apos;s Devices (Greek noëma)',
      url: 'https://intertextual.bible/text/1-peter-3.9/2-corinthians-2.11/',
      description: 'Cross-reference showing how early believers understood Satan&apos;s schemes and strategies across epistles.',
    },
  ],

  hasHebrew: false,
};
