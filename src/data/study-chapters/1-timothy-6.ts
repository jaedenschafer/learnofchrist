import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 6 — Godliness with Contentment
 *
 * Paul closes his letter to Timothy with urgent final charges about servants,
 * teachers, and the dangers of the love of money. Yet the chapter pivots to
 * promise: "Godliness with contentment is great gain." Timothy is called to
 * fight the good fight of faith, to lay hold on eternal life, to stand before
 * the King of kings. The closing grace echoes the opening—God&apos;s faithfulness
 * persists even when we are faithless.
 */
export const FIRST_TIMOTHY_6: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 6,

  estimatedMinutes: { beginner: 8, intermediate: 17, deep: 24 },
  intros: [
    'Paul&apos;s final words to Timothy are both tender and fierce. He loves the young man. But he also sees the snares set for the church. False teachers will arise, claiming piety as a cover for greed. The pursuit of riches will destroy many believers&apos; faith. Timothy must stand. He must guard the deposit of truth. He must run the race with endurance.',
    'Yet the tone is not fearful. Paul promises that godliness with contentment is "great gain." This is not the world&apos;s calculus. Wealth brings anxiety. Status brings enmity. But contentment with Christ brings peace that passes understanding. Timothy is invited into this rest—not as escape from labor, but as the fruit of right-ordered affections.',
  ],

  sections: [
    /* ─── 1 Timothy 6:1–2 — Servants Count Their Masters Worthy ──────────── */
    {
      ref: '1 Timothy 6:1–2',
      title: 'Servants Count Their Masters Worthy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(1, t('Let as many servants as are '), hy('under the yoke', 'yoke-service'), t(' count their own masters '), hp('worthy of all honour', 'honour-masters'), t(', that the name of God and his doctrine be not blasphemed.')),
            verse(2, t('And they that have believing masters, let them not despise them, because they are brethren; but rather do them service, because they are faithful and beloved, partakers of the benefit.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'yoke-service',
          html:
            'The yoke was a symbol of servitude. In Paul&apos;s time, slavery was woven into the fabric of society. He does not call for abolition here—that was not his immediate strategy—but for something more radical: he calls masters and servants to honor each other as brothers in Christ. The gospel transforms relationships from within. [res:sefaria-1tim-6]',
        },
        {
          kind: 'commentary',
          id: 'honour-masters',
          html:
            'Servants are to count their masters "worthy of all honour." This is not flattery. It is a posture of respect that recognizes the dignity of the other person&apos;s station. When a believer serves faithfully, the gospel itself is on display. Unbelievers watching will see whether Christ makes a person more trustworthy, more diligent, more honest. The stakes are high: "that the name of God and his doctrine be not blasphemed." [res:bibleodyssey-wealth]',
        },
        {
          kind: 'carry',
          html:
            'Whether your station is high or low, visible or hidden, your work carries the name of God with it. What would change if you truly served, not for the eye of man, but as unto the Lord? How might your faithfulness in small things open doors for the gospel?',
        },
        {
          kind: 'reflection',
          id: 'tim6-1-2',
          prompt: 'Who do you serve—in work, in family, in your community? How does your service reflect Christ?',
        },
      ],
    },

    /* ─── 1 Timothy 6:3–5 — If Any Man Teach Otherwise ─────────────────── */
    {
      ref: '1 Timothy 6:3–5',
      title: 'If Any Man Teach Otherwise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(3, t('If any man teach '), hp('otherwise', 'teach-otherwise'), t(', and consent not to wholesome words, even the words of our Lord Jesus Christ, and to the doctrine which is according to godliness;')),
            verse(4, t('He is '), t('proud'), t(', knowing nothing, but doting about questions and strifes of words, whereof cometh envy, strife, railings, evil surmisings,')),
            verse(5, t('Perverse disputings of men of '), hy('corrupt minds', 'corrupt-minds'), t(', and destitute of the truth, supposing that gain is godliness: from such withdraw thyself.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'teach-otherwise',
          html:
            'Paul has been warning Timothy about false teachers throughout this letter. They teach "otherwise"—a Greek word (hetero-didaskalia) meaning teaching that is foreign, other, not from apostolic tradition. The mark of their teaching is not rigor but mere words: "questions and strifes of words." They love the fight for its own sake.',
        },
        {
          kind: 'greek',
          id: 'doxopathos',
          title: 'Doxopathos — Pride; Glory-sickness',
          script: 'δοξοπάθεια',
          translit: '<strong>Doxopathos</strong> · pride; vain glory; sickness for honor',
          description:
            'The false teacher is driven not by truth but by the desire for admiration. He loves being heard, being praised, being seen as wise. This sickness makes him "knowing nothing"—paradoxically, his pride blinds him to what he does not know.',
        },
        {
          kind: 'commentary',
          id: 'corrupt-minds',
          html:
            'These teachers have "corrupt minds." The Greek word (diatheuo) suggests minds that have been stripped, emptied of truth. They are "destitute of the truth"—bankrupt of what matters. And yet they believe they are gaining: "supposing that gain is godliness." They have inverted the whole calculus. They think power and wealth are signs of godliness. Paul says the opposite: godliness with little is gain.',
        },
        {
          kind: 'carry',
          html:
            'Paul tells Timothy: "from such withdraw thyself." This is not cruel. It is protective. Some false teachers are beyond reach; Timothy must guard his own heart. Where are you being drawn toward empty disputation instead of truth? Where are you tempted to prove yourself right rather than pursue what is true?',
        },
        {
          kind: 'reflection',
          id: 'tim6-3-5',
          prompt: 'What teaching about godliness or the Christian life is most seductive to you? Does it lead to love, or to strife?',
        },
      ],
    },

    /* ─── 1 Timothy 6:6 — Godliness with Contentment is Great Gain ──────── */
    {
      ref: '1 Timothy 6:6',
      title: 'Godliness with Contentment is Great Gain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(6, t('But godliness with '), hy('contentment', 'tim6-autarkeia'), t(' is '), hp('great gain', 'great-gain'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'great-gain',
          html:
            'This verse is the hinge of the chapter. Everything before it is warning about the corruption of greed; everything after it is the call to fight for something real. "Godliness with contentment is great gain." The world hears this as nonsense. How can you gain by wanting less? Paul&apos;s answer: because the gain is not material. It is peace, rest, freedom from fear, the smile of God.',
        },
        {
          kind: 'greek',
          id: 'tim6-autarkeia',
          title: 'Autarkeia — Contentment, Sufficiency',
          script: 'αὐτάρκεια',
          translit: '<strong>Autarkeia</strong> · contentment; self-sufficiency; having enough',
          description:
            'Not indifference to need, but freedom from the tyranny of desire. Autarkeia means your happiness is not held hostage to circumstances. When your peace comes from God, not from goods, you are truly rich. The Stoics prized this virtue; Paul reclaims it and roots it in Christ.',
        },
        {
          kind: 'artwork',
          matchTitle: /contentment|treasure/i,
          caption: '1 Timothy 6:6 · Godliness with Contentment',
        },
        {
          kind: 'carry',
          html:
            'If you woke tomorrow and everything you own was taken except food, clothing, and shelter, would you still have godliness? Would you still have Christ? If yes, then you have great gain already. Use this as your measure of what truly matters.',
        },
        {
          kind: 'reflection',
          id: 'tim6-6',
          prompt: 'What would "great gain" look like in your life if it has nothing to do with more money, more status, or more comfort?',
        },
      ],
    },

    /* ─── 1 Timothy 6:7–8 — We Brought Nothing Into This World ───────────── */
    {
      ref: '1 Timothy 6:7–8',
      title: 'We Brought Nothing Into This World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(7, t('For we brought '), hy('nothing into this world', 'naked-born'), t(', and it is certain we can '), hy('carry nothing out', 'naked-dying'), t('.')),
            verse(8, t('And having '), hp('food and raiment', 'basic-sustenance'), t(' let us be therewith '), t('content'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'naked-born',
          html:
            'We arrive in this world with nothing. No bank account, no title, no portfolio. We arrive naked and helpless, utterly dependent on God&apos;s provision and another&apos;s care. Yet this fundamental fact is forgotten in the pursuit of accumulation.',
        },
        {
          kind: 'commentary',
          id: 'naked-dying',
          html:
            'And we leave with nothing. This is not pessimism. It is realism. Job himself, confronted with loss, said: "Naked came I out of my mother&apos;s womb, and naked shall I return... the Lord gave, and the Lord hath taken away" (Job 1:21). The only thing we truly keep is what we have given away, what has shaped our character, what has made us more like Christ.',
        },
        {
          kind: 'commentary',
          id: 'basic-sustenance',
          html:
            'Paul does not say we will live in poverty or that we should despise provision. He says: "Having food and raiment, let us be therewith content." These are the basics—enough to live, enough to be clothed. This is not luxury. But it is abundance compared to absolute want. And with it comes rest.',
        },
        {
          kind: 'greek',
          id: 'arkeō',
          title: 'Arkeo — To be Sufficient, to Content',
          script: 'ἀρκέω',
          translit: '<strong>Arkeo</strong> · to be enough; to suffice; to content',
          description:
            'The root of autarkeia. To "be content" is to say: this is enough. Not: I want no more. But: this suffices. This meets the need. My heart is at rest in this. The question is not whether you have more than others, but whether you have enough to live and enough to be grateful.',
        },
        {
          kind: 'carry',
          html:
            'Spend a moment tracing your own trajectory. You came into the world with nothing. You will leave with nothing. What in between do you truly own? And what, if taken away, would shake your faith in God? That last thing is what you need to surrender.',
        },
        {
          kind: 'reflection',
          id: 'tim6-7-8',
          prompt: 'What are the "food and raiment" you have right now? Are you genuinely content with them, or are you always reaching for more?',
        },
      ],
    },

    /* ─── 1 Timothy 6:9–10 — The Love of Money is the Root of All Evil ─── */
    {
      ref: '1 Timothy 6:9–10',
      title: 'The Love of Money is the Root of All Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(9, t('But they that '), hg('will be rich', 'will-be-rich'), t(' fall into '), hy('temptation', 'temptation-snare'), t(' and a '), hy('snare', 'temptation-snare'), t(', and into many foolish and hurtful '), hp('lusts', 'lusts-drown'), t(', which drown men in destruction and perdition.')),
            verse(10, t('For the love of money is the '), hp('root of all evil', 'root-evil'), t(': which while some '), hy('coveted after', 'philarguria'), t(', they have erred from the faith, and pierced themselves through with many sorrows.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'will-be-rich',
          html:
            'The desire to be rich is not neutral. It is a will, an intention, a force. Those "that will be rich" are not simply hoping for prosperity as a side effect of honest work. They are making riches the goal itself. This is the orientation Paul warns against.',
        },
        {
          kind: 'commentary',
          id: 'temptation-snare',
          html:
            'A temptation is a test; a snare is a trap. The pursuit of riches tests your faith, lures you into hidden compromises, and before you know it, you are ensnared. You cannot step back out. The logic of gaining more has consumed you. You lie for it. You betray friends for it. You neglect your family for it.',
        },
        {
          kind: 'commentary',
          id: 'lusts-drown',
          html:
            'The pursuit of money opens the door to "many foolish and hurtful lusts." Not just the lust for money itself, but for all the things money promises to buy: comfort, respect, security, pleasure. And these lusts, Paul says, "drown men in destruction and perdition." The image is of a sinking ship. You go down with it.',
        },
        {
          kind: 'greek',
          id: 'philarguria',
          title: 'Philarguria — Love of Money',
          script: 'φιλαργυρία',
          translit: '<strong>Philarguria</strong> · love of money; avarice; covetousness',
          description:
            'Not money itself, but the love of it—the affection, the devotion. Paul is precise here. He does not condemn wealth; he condemns the worship of wealth. Money becomes a god that demands everything and promises everything.',
        },
        {
          kind: 'commentary',
          id: 'root-evil',
          html:
            'This phrase is often misquoted as "money is the root of all evil." Paul says the love of money is the root. Money is neutral—a medium of exchange, a tool. But when you love it, it reshapes you. You begin to measure people by their net worth. You justify cruelty in its service. You abandon your convictions. The root of all evil is not the thing; it is the misplaced devotion.',
        },
        {
          kind: 'christ',
          id: 'tim6-christ-riches',
          title: 'Christ Connection — Riches and the Kingdom',
          html:
            'Jesus taught more about money than almost any other single topic. "No one can serve two masters... Ye cannot serve God and mammon" (Matthew 6:24). When the rich young ruler asked how to enter the kingdom, Jesus did not say his riches were evil—He said: "Go and sell that thou hast, and give to the poor... and come and follow me" (Matthew 19:21). The question is not whether you have money, but whether you have made money a master. Christ calls you to be rich in Him, not in account balances.',
        },
        {
          kind: 'carry',
          html:
            'Examine your own heart. If you lost half your income tomorrow, would your faith survive? If you could not afford certain luxuries, would you still trust God? These are not abstract questions. They reveal where your treasure is. "Where your treasure is, there will your heart be also" (Matthew 6:21). Are you content to let your treasure be in heaven?',
        },
        {
          kind: 'reflection',
          id: 'tim6-9-10',
          prompt: 'What "lusts" does the pursuit of money open the door to in your life? What would you need to surrender to close that door?',
        },
      ],
    },

    /* ─── 1 Timothy 6:11 — O Man of God, Flee These Things ──────────────── */
    {
      ref: '1 Timothy 6:11',
      title: 'O Man of God, Flee These Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(11, t('But thou, O '), hp('man of God', 'man-of-god'), t(', flee these things; and follow after '), hy('righteousness, godliness, faith, love, patience, meekness', 'virtues'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'man-of-god',
          html:
            '"O man of God." This is how the great prophets of the Old Testament were addressed—Elijah, Elisha, Samuel. Timothy stands in that line. He is not a manager or administrator. He is not building a career or climbing a ladder. He is set apart for God&apos;s purposes. This is his primary identity. And his calling is clear: flee the corruption of greed and follow after something else entirely.',
        },
        {
          kind: 'commentary',
          id: 'virtues',
          html:
            'The virtues Paul lists are not impressive to the world: righteousness (right-living), godliness (reverence for God), faith (trust), love (agape—the love that serves), patience (long-suffering, forbearance), meekness (strength under control). These are not the virtues of power. They are the virtues of a prophet, a shepherd, a servant.',
        },
        {
          kind: 'carry',
          html:
            'If you follow Christ, you too are a "man of God" or a "woman of God"—set apart, called to something beyond yourself. What are you fleeing from? What are you running toward? What small compromises have you made that need to be abandoned?',
        },
        {
          kind: 'reflection',
          id: 'tim6-11',
          prompt: 'Which of these virtues is most foreign to your natural temperament? How might pursuing it change your life?',
        },
      ],
    },

    /* ─── 1 Timothy 6:12 — Fight the Good Fight of Faith ─────────────────── */
    {
      ref: '1 Timothy 6:12',
      title: 'Fight the Good Fight of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(12, t('Fight the good fight of '), hp('faith', 'good-fight'), t(', lay hold on eternal life, whereunto thou art also '), hy('called', 'called-eternal'), t(', and hast professed a good profession before many witnesses.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'good-fight',
          html:
            'The image is athletic, from the Greek games. A fighter enters the arena knowing the cost—sweat, pain, possible defeat. But he enters because the prize is worth it. This is how Paul sees the Christian life: not as ease, but as noble struggle. Yet note: it is a "good" fight—a fight worth having, a fight that matters, a fight that Christ Himself is fighting.',
        },
        {
          kind: 'greek',
          id: 'agonizomai',
          title: 'Agonizomai — To Fight, to Struggle, to Agonize',
          script: 'ἀγωνίζομαι',
          translit: '<strong>Agonizomai</strong> · to compete; to struggle; to fight; to agonize',
          description:
            'The good fight is not passive waiting. It requires effort, training, sacrifice, endurance. Yet Paul uses this word throughout his letters to describe not a fight against flesh and blood, but against deception, the world&apos;s lies, your own doubts, the spiritual forces arrayed against faith.',
        },
        {
          kind: 'commentary',
          id: 'called-eternal',
          html:
            'Timothy is called to "lay hold on eternal life." This is both present and future—he lays hold on it now by faith, trusting God in the present; and he will fully possess it when Christ returns. The calling is not to success or comfort. It is to eternal life—real life, true life, life rooted in God Himself.',
        },
        {
          kind: 'commentary',
          html:
            'And Timothy has "professed a good profession before many witnesses." His commitment is public. Pastors, elders, the whole congregation has heard him pledge his faith. This is a strength, not a burden. He is not alone. The church will hold him accountable and help sustain him when the fight grows hard.',
        },
        {
          kind: 'carry',
          html:
            'You too have made a profession of faith, even if not in front of thousands—before God, at least, and probably before believers who know you. This is your armor and your accountability. When you are tempted to quit, remember: others are watching, praying, and will come alongside you. What are you fighting for? Is it truly worth the struggle?',
        },
        {
          kind: 'reflection',
          id: 'tim6-12',
          prompt: 'What is your "good fight of faith" right now? Where are you tempted to abandon the field?',
        },
        {
          kind: 'artwork',
          matchTitle: /fight|warrior|battle|armor|victory/i,
          caption: '1 Timothy 6:12 · Fight the Good Fight of Faith',
        },
      ],
    },

    /* ─── 1 Timothy 6:13–14 — Christ&apos;s Confession Before Pilate ──────── */
    {
      ref: '1 Timothy 6:13–14',
      title: 'Christ&apos;s Good Confession Before Pontius Pilate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(13, t('I give thee charge in the sight of God, who quickeneth all things, and before '), hp('Christ Jesus, who before Pontius Pilate witnessed a good confession', 'christ-confession'), t(';')),
            verse(14, t('That thou keep this commandment without spot, unrebukeable, until the '), hp('appearing of our Lord Jesus Christ', 'appearing-christ'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-confession',
          html:
            'Paul invokes a profound image: Christ standing before Pontius Pilate. What is a "good confession" in that context? Not a public relations victory. Christ was condemned to death. Yet He maintained His witness. He spoke truth to power. He did not recant. He did not compromise. He remained faithful unto death. This is the model Timothy must follow.',
        },
        {
          kind: 'greek',
          id: 'homologia',
          title: 'Homologia — Confession, Witness, Acknowledgment',
          script: 'ὁμολογία',
          translit: '<strong>Homologia</strong> · confession; acknowledgment; public declaration',
          description:
            'The word means speaking the same—saying the same thing as another, or saying aloud what you truly believe. Christ&apos;s confession before Pilate was the costly testimony of a man who would not deny truth even facing death.',
        },
        {
          kind: 'christ',
          id: 'tim6-pilate',
          title: 'Christ Connection — "King of the Jews" at the Cross',
          html:
            'When Pilate asked Jesus, "Art thou the King of the Jews?" Jesus answered, "Thou sayest" (Matthew 27:11)—a direct affirmation. When later asked if He was the Son of God, Jesus said, "I am" (Mark 14:62). He knew His confession would lead to the cross. He spoke it anyway. Timothy is called to witness with the same fearlessness. Read Matthew 27:11; John 18:36–37.',
        },
        {
          kind: 'commentary',
          id: 'appearing-christ',
          html:
            'Paul fixes Timothy&apos;s eyes on the future: the "appearing of our Lord Jesus Christ." When Christ returns, all hidden things will be revealed. Faithfulness that looked like failure will be vindicated. Compromises that seemed prudent will be exposed. The appearing puts everything in its true light. Timothy must keep the commandment "without spot, unrebukeable"—not for human approval, but because the coming of Christ will make all things known.',
        },
        {
          kind: 'carry',
          html:
            'You are called to the same kind of confession—not necessarily public, not necessarily dramatic, but truthful. Where are you tempted to dilute your witness to avoid conflict? What would it cost to follow Christ&apos;s example of speaking truth even when silence would be safer? Remember: the appearing of Christ is coming. Everything hidden will be revealed.',
        },
        {
          kind: 'reflection',
          id: 'tim6-13-14',
          prompt: 'What "good confession" is Christ asking of you right now? What truth do you need to speak, even at a cost?',
        },
      ],
    },

    /* ─── 1 Timothy 6:15–16 — King of Kings and Lord of Lords ────────────── */
    {
      ref: '1 Timothy 6:15–16',
      title: 'King of Kings and Lord of Lords',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(15, t('Which in his times he shall shew, who is the '), hp('blessed and only Potentate', 'potentate'), t(', the '), hp('King of kings, and Lord of lords', 'king-of-kings'), t(';')),
            verse(16, t('Who only hath immortality, dwelling in the '), hy('light which no man can approach unto', 'light-unapproachable'), t('; whom no man hath seen, nor can see: to whom be '), t('honour and power everlasting'), t('. Amen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'potentate',
          html:
            'A "potentate" is one who has absolute power. Jesus, in His appearing, will be revealed as the One who holds all authority in heaven and on earth. Every earthly king, every human ruler, every force that seems powerful now will bow before Him. This is not mythology; this is the climax of history.',
        },
        {
          kind: 'greek',
          id: 'monos-dynastēs',
          title: 'Monos — Alone, Only; Dynastēs — Potentate, Ruler',
          script: 'μόνος · δυνάστης',
          translit: '<strong>Monos</strong> · alone; only | <strong>Dynastēs</strong> · potentate; ruler; one with power',
          description:
            'Paul uses "only" (monos) to emphasize the absolute uniqueness of Christ&apos;s rule. In a world full of claims to authority, only one figure holds true power. Only one deserves worship. Only one is immortal and unchanging.',
        },
        {
          kind: 'commentary',
          id: 'king-of-kings',
          html:
            'This title appears elsewhere in Scripture—in Revelation 19:16, describing the returning Christ. It means Christ reigns over all earthly kings. Their kingdoms are derivative; His is ultimate. When you bow to an earthly authority, you do so as a subject of Christ, who reigns above all.',
        },
        {
          kind: 'commentary',
          id: 'light-unapproachable',
          html:
            'God "dwelleth in the light which no man can approach unto." This echoes the Old Testament picture of God&apos;s holiness—a purity so intense, a beauty so overwhelming, that mortal eyes cannot bear it (see Exodus 33:20; Isaiah 6:5). Yet John tells us: "No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him" (John 1:18). In Christ, the unapproachable became accessible.',
        },
        {
          kind: 'christ',
          id: 'tim6-christ-immortality',
          title: 'Christ Connection — The Life Eternal',
          html:
            'Only Christ "hath immortality" in His own right. He is "the way, the truth, and the life" (John 14:6). Where verse 16 describes the Father "only" having immortality, we know from the Gospel accounts that Christ too possesses life eternally. Believers do not possess immortality naturally—it is given to them through Christ. His resurrection guarantees theirs. "Because I live, ye shall live also" (John 14:19). When Timothy "lays hold on eternal life," he lays hold on Christ Himself. Read Titus 2:13; 1 John 1:2.',
        },
        {
          kind: 'carry',
          html:
            'When you feel small, overwhelmed by the powers of this world, remember: there is One who reigns above them all. He is not distant or indifferent. He is working all things according to His purposes. Your faithfulness, though invisible to the world, is seen by Him. Honor and power eternal belong to Him. Everything else is temporary.',
        },
        {
          kind: 'reflection',
          id: 'tim6-15-16',
          prompt: 'How does the vision of Christ as "King of kings" change the way you see your current struggles or assignments?',
        },
        {
          kind: 'artwork',
          matchTitle: /king|throne|crown|majesty/i,
          caption: '1 Timothy 6:15–16 · King of Kings and Lord of Lords',
        },
      ],
    },

    /* ─── 1 Timothy 6:17–19 — Charge Them That Are Rich ──────────────────── */
    {
      ref: '1 Timothy 6:17–19',
      title: 'Charge Them That Are Rich',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(17, t('Charge them that are rich in this world, that they be not '), hy('highminded', 'highminded-rich'), t(', nor trust in '), hy('uncertain riches', 'uncertain-riches'), t(', but in the living God, who giveth us richly all things to enjoy;')),
            verse(18, t('That they do good, that they be rich in good works, ready to distribute, willing to communicate;')),
            verse(19, t('Laying up in store for themselves a '), hp('good foundation against the time to come', 'foundation-eternal'), t(', that they may lay hold on eternal life.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'highminded-rich',
          html:
            'Wealth easily produces arrogance. The rich begin to believe they earned what they have, that they deserve their station, that others are simply inferior. Paul says: do not be highminded. Remember that all you have is given. You are steward, not owner.',
        },
        {
          kind: 'commentary',
          id: 'uncertain-riches',
          html:
            '"Uncertain riches"—this is the heart of the warning. Riches are uncertain. They rise and fall. Markets crash. Economies shift. What you possess today may be gone tomorrow. Yet some people build their entire identity and security on these unstable foundations. Paul calls them to trust instead in the "living God," who alone is stable and sure.',
        },
        {
          kind: 'commentary',
          html:
            'But God "giveth us richly all things to enjoy." This is not asceticism. Paul is not saying the rich should hate food or pleasure or beauty. He is saying: enjoy what God gives, but hold it lightly. Give it away generously. Do not let it possess you.',
        },
        {
          kind: 'commentary',
          id: 'foundation-eternal',
          html:
            'The metaphor is brilliant. Money laid up in banks or businesses is unstable—subject to theft, loss, inflation, decay. But "good works" create a real, lasting foundation. Generosity, kindness, integrity—these build a character that endures. And they "lay hold on eternal life"—they align you with the kingdom that will never end.',
        },
        {
          kind: 'carry',
          html:
            'If you have more than you need, Paul&apos;s charge applies to you. Do good. Be rich in good works. Distribute willingly. This is not about guilt; it is about joy. The rich are invited to discover what real wealth is: the freedom that comes from giving. What would it look like for you to be "rich in good works"?',
        },
        {
          kind: 'reflection',
          id: 'tim6-17-19',
          prompt: 'What good works could you be laying up as a foundation? How could you redistribute what God has given you?',
        },
      ],
    },

    /* ─── 1 Timothy 6:20–21 — Keep That Which Is Committed to Thy Trust ──── */
    {
      ref: '1 Timothy 6:20–21',
      title: 'Keep That Which Is Committed to Thy Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(20, t('O Timothy, '), hp('keep that which is committed to thy trust', 'keep-deposit'), t(', avoiding profane and vain babblings, and oppositions of science falsely so called;')),
            verse(21, t('Which some professing have erred from the faith. '), hp('Grace be with thee', 'grace-closing'), t('. Amen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'keep-deposit',
          html:
            'Paul returns to his main charge. Timothy has been given a "deposit"—the faith once delivered to the saints, the apostolic tradition, the gospel itself. His task is not to innovate or improve it. It is to keep it. To guard it. To pass it on intact to the next generation.',
        },
        {
          kind: 'commentary',
          html:
            'He is to avoid "profane and vain babblings"—empty chatter that sounds sophisticated but leads nowhere. And "oppositions of science falsely so called"—false knowledge, pseudo-wisdom, the kind of learning that puffs up but does not build up. Some, professing to have such knowledge, "have erred from the faith."',
        },
        {
          kind: 'carry',
          html:
            'You too have been entrusted with something—whether the faith itself, or a calling, or a responsibility to others. The question is: will you keep it? Will you guard it against the seductions of false wisdom and empty chatter? Will you remain faithful to what has been committed to you, or will you drift?',
        },
        {
          kind: 'reflection',
          id: 'tim6-20-21',
          prompt: 'What has God committed to your trust? Are you keeping it, or drifting from it?',
        },
      ],
    },

    /* ─── Closing Grace ────────────────────────────────────────────────── */
    {
      ref: '1 Timothy 6:21b',
      title: 'Grace Be With Thee',
      blocks: [
        {
          kind: 'commentary',
          id: 'grace-closing',
          html:
            '"Grace be with thee." Paul ends where he began—with grace. Not with a command, though he has issued many. Not with a threat, though he has warned of the love of money. But with grace. Grace to stand. Grace to fight. Grace to keep the faith. This is the final word: you do not stand alone. God&apos;s grace goes with you. Amen. [res:intertextual-psalm24-1tim6]',
        },
        {
          kind: 'carry',
          html:
            'As you close this chapter, what is the weight you are carrying? What is the temptation you face? What is the calling you need to remember? Hold it up before God. Ask for grace. And trust that the same grace that sustained Timothy, that sustained the apostles, that sustained the saints throughout the ages, is with you too. Amen.',
        },
        {
          kind: 'reflection',
          id: 'tim6-closing',
          prompt: 'What grace do you most need in this season of your life?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Timothy 6',
    quote:
      'Godliness with contentment is great gain. Fight the good fight of faith, lay hold on eternal life. The King of kings and Lord of lords reigns over all. Grace be with you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 6 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-psalm24-1tim6',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 24:10 ↔ 1 Timothy 6:15',
      url: 'https://intertextual.bible/search?q=Psalm+24+10+1+Timothy+6+15',
      description: 'Paul&apos;s doxology echoes the psalmist&apos;s vision of the King of glory—demonstrating Christ&apos;s eternal kingship.',
    },
  ],

  hasHebrew: false,
};
