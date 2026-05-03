import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Romans 5 — Peace with God and the Love of Christ
 *
 * Therefore being justified by faith, we have peace with God through Jesus
 * Christ. Suffering becomes testimony. God&apos;s love is commended toward us in
 * that while we were yet sinners, Christ died for us. Through Adam came sin
 * and death; through Christ comes righteousness and life. Where sin abounded,
 * grace abounds much more.
 */
export const ROMANS_5: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 5,

  estimatedMinutes: { 5: 8, 10: 14, 15: 20 },
  intros: [
    'Romans 5 is the turn from doctrine to joy. Paul has spent four chapters proving one thing: we are justified by faith, not by works. Now he stands at the threshold and says: therefore, we have peace. Not someday. Not if we try harder. Now. The enmity between God and humanity, which Genesis 3 opened with a serpent&apos;s whisper, is ended. We are at peace with the source of all being.',
    'This peace is not quiet. Paul floods the chapter with active love — God commending His love toward us while we were yet sinners. Christ dying. The Holy Ghost shedding love into our hearts. And then Paul takes the reader back to where sin started — back to Adam — and shows us where it ends: in a Christ whose obedience and grace exceed, by infinite measure, the damage Adam&apos;s disobedience caused. Romans 5 is the gospel sung.',
  ],

  sections: [
    /* ─── Romans 5:1–2 — Peace with God ────────────────────────────── */
    {
      ref: 'Romans 5:1–2',
      title: 'Peace with God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('Therefore being '),
              hy('justified by faith', 'rom5-justified'),
              t(', we have '),
              hp('peace with God', 'rom5-peace'),
              t(' through Jesus Christ our Lord:')
            ),
            verse(
              2,
              t('By whom also we have '),
              hg('access by faith', 'rom5-access'),
              t(' into this grace wherein we stand, and rejoice in hope of the glory of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-justified',
          html:
            'The word <em>therefore</em> ties this chapter to everything Paul has argued before. Because we are justified by faith alone — not by the works of the law, not by our own earning — we stand in a new relationship with God. Justification is not a feeling; it is a declaration. You are right with God. The trial is over. The verdict is rendered.',
        },
        {
          kind: 'greek',
          id: 'rom5-eirene',
          title: 'Eirēnē — &ldquo;peace&rdquo;',
          script: 'εἰρήνη',
          translit: '<strong>eirēnē</strong> · peace; wholeness; right relationship; the absence of hostility',
          description:
            'Eirēnē is not mere quiet. It is the end of alienation. In Hebrew, <em>shalom</em>. For centuries, the law—the very thing designed to show us sin—has been the boundary between us and God. Now that boundary is crossed. The war is over.',
        },
        {
          kind: 'commentary',
          id: 'rom5-peace',
          html:
            'Notice: peace <em>with God.</em> Not with yourself. Not with others. Those peaces will come in time. But the primal peace—the one that makes every other peace possible—is with the God who made you and before whom you have stood as a rebel. That enmity is ended.',
        },
        {
          kind: 'commentary',
          id: 'rom5-access',
          html:
            'We have <em>access by faith</em> into grace. The Greek word for access is <em>prosagōgē</em> — it meant, in the ancient world, a formal introduction, an audience granted to a king. You would not walk into a throne room unbidden. You needed an intermediary. Christ is that access. Through Him, the door is open.',
        },
        {
          kind: 'greek',
          id: 'rom5-charis',
          title: 'Charis — &ldquo;grace&rdquo;',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; the unearned gift of God',
          description:
            'Charis is what we have absolutely no claim on. You cannot argue your way to grace. You cannot earn it. You can only receive it. Paul says we <em>stand</em> in grace — our feet are planted there. This is not a temporary reprieve. It is our native ground now.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-peace',
          title: 'Christ Connection — Our Peace Made Flesh',
          html:
            'Ephesians 2:14 makes explicit what Romans 5:1 declares: Christ Himself <em>is</em> our peace. &ldquo;For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us&rdquo; (Eph. 2:14). He is not the bringer of peace; He is the peace. The alienation is over because He has walked straight into the middle of it.',
        },
        {
          kind: 'carry',
          html:
            'If you are in Christ, you are not on trial before God. Not anymore. The verdict has been rendered, and it is not &ldquo;guilty but forgiven.&rdquo; It is <em>justified.</em> Right. Standing clean. Let that land. Your access into grace is not a thin thread you have to walk carefully. It is solid ground. You stand in it.',
        },
        {
          kind: 'reflection',
          id: 'rom5-peace-reflection',
          prompt:
            'Where in your life do you still live as if you were on trial before God — earning, performing, uncertain of your standing? What would change if you truly believed the verdict?',
        },
      ],
    },

    /* ─── Romans 5:3–4 — Glorying in Tribulation ────────────────────── */
    {
      ref: 'Romans 5:3–4',
      title: 'Glorying in Tribulation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              3,
              t('And not only so, but we '),
              hg('glory in tribulations also', 'rom5-glory'),
              t(': knowing that tribulation worketh patience;')
            ),
            verse(
              4,
              t('And patience, experience; and '),
              hy('experience, hope', 'rom5-dokime'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-glory',
          html:
            'Paul does not say tribulation is good. He says we <em>glory in</em> it — we boast in it, we take pride in it. This is not masochism. It is the confidence that God wastes nothing. Every trial becomes a tool in His hand to shape us.',
        },
        {
          kind: 'greek',
          id: 'rom5-kauchaomai',
          title: 'Kaucháomai — &ldquo;to boast, glory&rdquo;',
          script: 'καυχάομαι',
          translit: '<strong>kauchaomai</strong> · to boast; to take pride in; to glory in',
          description:
            'The same word appears elsewhere in Paul: &ldquo;We glory in Jesus Christ&rdquo; (Phil. 3:3). It is the gladness of one who has seen what God can do. Tribulation becomes a text to read God&apos;s character in.',
        },
        {
          kind: 'commentary',
          id: 'rom5-hupomone',
          html:
            'Tribulation works patience. The Greek is <em>hupomone</em> — not resignation, but steadfast endurance, the capacity to remain under pressure without breaking. Patience is not passive. It is the muscled strength to keep going, to trust even when deliverance is not yet visible.',
        },
        {
          kind: 'greek',
          id: 'rom5-dokime',
          title: 'Dokimē — &ldquo;proof, tested character&rdquo;',
          script: 'δοκιμή',
          translit: '<strong>dokimē</strong> · proof, tested character, evidence of authenticity',
          description:
            'When precious metals are heated and tested, what remains is proven genuine. Patience produces <em>dokimē</em> — evidence of the real. Your faithfulness under pressure becomes a proof, to yourself and others, that your faith is more than sentiment.',
        },
        {
          kind: 'carry',
          html:
            'This is why Paul can say suffering is not a detour from God&apos;s plan for you. It is the means by which the plan is being executed. The trial you are in right now is not happening despite God&apos;s love for you. It is happening because He loves you enough to shape you into someone He can trust with deeper things.',
        },
        {
          kind: 'reflection',
          id: 'rom5-tribulation-reflection',
          prompt:
            'Look back at a difficult season you walked through. How did it prove something real in your faith that comfort might never have revealed?',
        },
      ],
    },

    /* ─── Romans 5:5 — Love Poured Out ────────────────────────────── */
    {
      ref: 'Romans 5:5',
      title: 'Love Poured Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              5,
              t('And hope maketh not ashamed; because the '),
              hg('love of God', 'rom5-agape'),
              t(' is '),
              hy('shed abroad in our hearts', 'rom5-shed'),
              t(' by the Holy Ghost which is given unto us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-hope-ashamed',
          html:
            'Hope can deceive. You can hope and be disappointed. But Paul says hope in God does not make us ashamed. Why? Because what we hope for is anchored in something we have already experienced in the heart — the love of God actively poured into us.',
        },
        {
          kind: 'greek',
          id: 'rom5-agape',
          title: 'Agapē — &ldquo;love&rdquo;',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · self-giving love; covenant love; God&apos;s love for those unworthy',
          description:
            'Agapē is not sentimentality. It is love that acts. It spends itself. The God who speaks in Genesis 1 — who gives and gives and calls it good — is the God whose agapē is now actively poured into your heart, through the gift of the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'rom5-shed',
          html:
            'The Greek word is <em>ekcheō</em> — to pour out, to pour over, as if from a pitcher. Love is not trickling. It is not conditional on your performance. It is <em>shed</em> — poured, spilled, given abundantly. And this is not a private mystical experience: the Holy Ghost is <em>given unto us.</em> This is the gift of God, not something you have to manufacture.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-shed',
          title: 'Christ Connection — Blood Poured Out',
          html:
            'The same verb, <em>ekcheō</em>, will appear in the Last Supper narratives: &ldquo;this is my blood of the new testament, which is shed for many&rdquo; (Matt. 26:28). The love of God poured into the believer&apos;s heart comes from the blood of Christ poured out. The internal flow (love in your heart) traces back to the external sacrifice (Christ on the cross). Both are <em>poured out.</em> Both are for you.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to work yourself up into a feeling of God&apos;s love. You do not have to achieve a certain level of spirituality to qualify for it. The Holy Ghost has already given you the gift. The love is already there, poured out, waiting to be recognized and received. Your job is not to create it. It is to stop blocking it and let it do its work in you.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'rom5-love-reflection',
          prompt:
            'When have you most clearly felt the love of God shed into your heart? What was happening in your life that made you aware of it?',
        },
      ],
    },

    /* ─── Romans 5:6–8 — While We Were Yet Sinners ──────────────────── */
    {
      ref: 'Romans 5:6–8',
      title: 'While We Were Yet Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              6,
              t('For when we were yet without strength, in due time '),
              hg('Christ died for the ungodly', 'rom5-ungodly'),
              t('.')
            ),
            verse(
              7,
              t('For scarcely for a righteous man will one die: yet peradventure for a good man some would even dare to die.')
            ),
            verse(
              8,
              t('But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-ungodly',
          html:
            'The word is <em>asebēs</em> — ungodly, impious, without power or claim on God. Paul starts with the worst possible condition: we were not even respectable sinners. We were weak. We were outside the law. We had no standing in the eyes of any reasonable god. And that is exactly when Christ died.',
        },
        {
          kind: 'commentary',
          id: 'rom5-death-timeline',
          html:
            'Paul pauses and notes something remarkable: a decent person might find one person willing to die for them. Someone good might inspire sacrifice. But who dies for the weak? For the wicked? For the people who have turned away? No one. Except Christ.',
        },
        {
          kind: 'commentary',
          id: 'rom5-commendeth',
          html:
            'The Greek word is <em>sunistēmi</em> — to stand together with, to prove, to demonstrate. God does not ask us to believe in His love in theory. He proves it. He shows it. He lays it out in time and space and blood. A man dies. God walks that out in front of you.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-while',
          title: 'Christ Connection — Love in Time',
          html:
            'This is the heart of the gospel. It is not Christ&apos;s example (John 13:34 does that better). It is not Christ&apos;s teaching. It is this: <em>while we were yet sinners, Christ died for us.</em> Love that comes after we repent is conditional. Love that comes because we are good is earned. But this love comes while we are still wicked, still running, still saying no. This is the love that proves itself in time. 1 John 4:10 quotes this passage directly: &ldquo;Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.&rdquo;',
        },
        {
          kind: 'carry',
          html:
            'If you are still waiting to be better before you believe God loves you, you are missing the whole point. He proved it when you were at your worst. That proof does not change now that you are trying. You do not earn it by becoming respectable. You walk in it by receiving what He has already demonstrated.',
        },
        {
          kind: 'reflection',
          id: 'rom5-sinners-reflection',
          prompt:
            'What sin or failure have you been most ashamed of? Can you receive the fact that Christ died while you were in the middle of it, not waiting for you to clean up first?',
        },
      ],
    },

    /* ─── Romans 5:9–11 — Justified by Blood, Reconciled by Death ────── */
    {
      ref: 'Romans 5:9–11',
      title: 'Saved from Wrath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              9,
              t('Much more then, being now '),
              hy('justified by his blood', 'rom5-blood'),
              t(', shall we be saved from wrath through him.')
            ),
            verse(
              10,
              t('For if, when we were '),
              hg('enemies', 'rom5-enemies'),
              t(', we were '),
              hg('reconciled to God', 'rom5-reconciled'),
              t(' by the death of his Son, much more, being reconciled, we shall be saved by his life.')
            ),
            verse(
              11,
              t('And not only so, but we also joy in God through our Lord Jesus Christ, by whom we have now received the atonement.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-blood',
          html:
            'Blood means death. It means the animal has given its life. Paul insists that we are justified not by a theory of forgiveness but by <em>blood</em> — by the real, physical, irreversible death of Christ. This is not metaphorical. The wrath of God is not abstract. It is the consequence of sin made real. And it is met by a real death, a real payment, a real substitution.',
        },
        {
          kind: 'greek',
          id: 'rom5-katallage',
          title: 'Katallágē — &ldquo;reconciliation&rdquo;',
          script: 'καταλλαγή',
          translit: '<strong>katallage</strong> · reconciliation; exchange; restoration of broken relationship',
          description:
            'The Greek suggests an exchange, a reversal of relationship. We were enemies — at odds with God, rebels. Now, through Christ&apos;s death, we are friends. The war is over. This is not God becoming nice. It is relationship restored through payment made.',
        },
        {
          kind: 'commentary',
          id: 'rom5-enemies',
          html:
            'Paul is blunt about the baseline: we were enemies to God. Not merely sinners — enemies. We were not just breaking rules; we were in rebellion against the Maker. That is the starting point. And from that point, reconciliation happens.',
        },
        {
          kind: 'commentary',
          id: 'rom5-reconciled',
          html:
            'The reconciliation is complete. We are not partially reconciled, on probation, waiting to see if we can make it work. We are reconciled. The relationship is restored. The broken thing is mended. And if that happened by His <em>death,</em> how much more is happening by His <em>life</em> — His resurrection, His intercession, His ongoing presence?',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-reconcile',
          title: 'Christ Connection — Reconciler and Advocate',
          html:
            '2 Corinthians 5:18–19 echoes this: &ldquo;God hath given to us the ministry of reconciliation… to wit, that God was in Christ, reconciling the world unto himself&rdquo; (2 Cor. 5:18–19). But here is what makes Romans 5 so staggering: the One who reconciled you is now alive. He is at the right hand of God. Hebrews 7:25 says: &ldquo;Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.&rdquo; Christ is not a past event. He is a present intercessor.',
        },
        {
          kind: 'carry',
          html:
            'Your reconciliation is not contingent on your behavior. You are not one bad day away from God reverting to enemy status. You are reconciled. The death has been paid. The relationship is restored. What Jesus does now, through His life, is not to keep you on thin ice but to develop you, to shape you into His likeness, to give you the grace to become what He has declared you to be.',
        },
        {
          kind: 'reflection',
          id: 'rom5-reconcile-reflection',
          prompt:
            'In what ways do you still relate to God as though you were an enemy, waiting for Him to prove Himself trustworthy? What would shift if you truly owned that you are reconciled?',
        },
      ],
    },

    /* ─── Romans 5:12–19 — Adam and Christ ────────────────────────── */
    {
      ref: 'Romans 5:12–19',
      title: 'The Adam and the Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              12,
              t('Wherefore, as by one man '),
              hg('sin entered into the world', 'rom5-adam-sin'),
              t(', and death by sin; and so death passed upon all men, for that all have sinned:')
            ),
            verse(
              15,
              t('But not as the offence, so also is the free gift. For if through the offence of one many be dead, much more the '),
              hg('grace of God', 'rom5-grace-abundantly'),
              t(', and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many.')
            ),
            verse(
              17,
              t('For if by one man&apos;s offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall '),
              hy('reign in life', 'rom5-reign'),
              t(' by one, Jesus Christ;)')
            ),
            verse(
              19,
              t('For as by one man&apos;s disobedience many were made sinners, so by the obedience of one shall many be made righteous.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-adam-sin',
          html:
            'Paul traces sin and death back to one source: Adam. Not to circumstances, not to culture, not to confusion — to Adam&apos;s choice. By one man&apos;s disobedience, the pattern was set. Death entered. And that pattern has touched every human who came after. This is not about blame; it is about inheritance. You were born into a world where sin and death are the ruling reality.',
        },
        {
          kind: 'greek',
          id: 'rom5-paraptoma',
          title: 'Paraptṓma — &ldquo;trespass&rdquo;',
          script: 'παράπτωμα',
          translit: '<strong>paraptōma</strong> · trespass; transgression; a stumble into wrongdoing',
          description:
            'The word suggests not merely rebellion but a step in the wrong direction — as if one foot slipped. Yet that single slip set in motion a fall that touched all of humanity. One man. One wrong step. And the whole of creation changed.',
        },
        {
          kind: 'commentary',
          id: 'rom5-grace-abundantly',
          html:
            'Here is where Paul breaks the symmetry. He could have said: as sin brought death through Adam, so righteousness brings life through Christ. Straight trade. But he does not. He says: <em>much more</em> the grace of God abounds. The gift is not equal to the offense. It exceeds it. It is superabundant.',
        },
        {
          kind: 'commentary',
          id: 'rom5-reign',
          html:
            'Adam put you under a reign — the reign of sin and death. Now, through Christ, those who receive the gift of grace <em>reign in life.</em> You are not merely rescued. You are not merely forgiven. You are lifted up to reign. You go from subject to sin, to participant in Christ&apos;s victory.',
        },
        {
          kind: 'greek',
          id: 'rom5-hyperperisseuo',
          title: 'Hyperperisseuō — &ldquo;abound much more&rdquo;',
          script: 'ὑπερπερισσεύω',
          translit: '<strong>hyperperisseuo</strong> · to exceed abundantly; to overflow with excess',
          description:
            'This is not a small word. It is <em>super</em>-exceed. <em>Over</em>-abound. The grace that comes through Christ is not a close call or a near-equal balance. It is an avalanche. It is impossibly generous. It is more than you could ask or think.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-obedience',
          title: 'Christ Connection — The Second Adam',
          html:
            'Paul does not call Jesus the &ldquo;second Adam&rdquo; explicitly here, but the type is unmistakable. Adam was given one command and disobeyed. Christ was given one command — &ldquo;thy will be done&rdquo; — and obeyed to death. Where Adam said no, Christ said yes. And that yes reverses the no. 1 Corinthians 15:22 makes the paralleling explicit: &ldquo;For as in Adam all die, even so in Christ shall all be made alive.&rdquo; But here is the asymmetry again: Adam&apos;s obedience only applied to him (he could not save anyone else by obedience). Christ&apos;s obedience covers <em>many</em> — it is offered to all who will receive it.',
        },
        {
          kind: 'carry',
          html:
            'Do not underestimate what it means to be born into Adam&apos;s condition. You inherited sin and death the way you inherited a language or a name. It is not a personal accusation; it is a personal reality. But here is the other inheritance now available: if you will receive it, you inherit Christ&apos;s obedience, His righteousness, His victory. You trade one reign for another.',
        },
        {
          kind: 'reflection',
          id: 'rom5-adam-reflection',
          prompt:
            'Where do you still see the reign of sin and death working in you — in your thoughts, your reflexes, your deepest fears? What would it mean to truly let Christ&apos;s obedience reign there instead?',
        },
      ],
    },

    /* ─── Romans 5:20–21 — Where Sin Abounded ────────────────────────── */
    {
      ref: 'Romans 5:20–21',
      title: 'Where Sin Abounded, Grace Abounded Much More',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              20,
              t('Moreover the law entered, that the offence might abound. But '),
              hg('where sin abounded, grace did much more abound', 'rom5-final'),
              t(':')
            ),
            verse(
              21,
              t('That as sin hath '),
              hy('reigned unto death', 'rom5-reign-death'),
              t(', even so might '),
              hp('grace reign through righteousness unto eternal life', 'rom5-grace-reign'),
              t(' by Jesus Christ our Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-final',
          html:
            'This is the punchline of Romans 5. Paul says the law entered to make sin visible — not to save, but to show us the full weight of what we have done. And where that weight is greatest, where sin seems to have won most completely, grace comes in and says: not so. Mine is bigger. Mine reaches farther. I exceed you by infinite measure. This is not a close call. It is not a tie. Grace wins.',
        },
        {
          kind: 'commentary',
          id: 'rom5-reign-death',
          html:
            'Sin reigned from Adam to Christ, from the Garden to the cross. It was the ruling power. Death was the wage. That is the regime you were born into. But Paul insists: that reign is over.',
        },
        {
          kind: 'commentary',
          id: 'rom5-grace-reign',
          html:
            'Now, <em>grace reigns.</em> Not in a corner. Not in theory. <em>Reigns.</em> Through righteousness. Through the restored relationship that Christ&apos;s blood bought. And it reigns <em>unto eternal life</em> — not just for a season, not just for this life, but for the age that comes after, and the age after that. Forever. This is the final word of the chapter: not judgment, not wage, not separation. <em>Life.</em>',
        },
        {
          kind: 'carry',
          html:
            'You live in an age where you have a choice: you can live under the reign of sin and death (and it is still trying to sell itself, still whispering offers). Or you can yield to the reign of grace. The first feels familiar; it is what you inherited. The second is what Christ bought. One is a lie that has been in the world since the serpent first asked, &ldquo;Hath God said?&rdquo; The other is the truth of a death paid, a life raised, a relationship restored. Which throne will rule you?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'rom5-reign-reflection',
          prompt:
            'Practically, what does it look like for grace to reign in one area of your life today? How is grace asking you to step into freedom from the reign you inherited?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Romans 5',
    quote:
      'Being justified by faith, we have peace with God through Jesus Christ. While we were yet sinners, Christ died for us. Where sin abounded, grace did much more abound.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 5 · Study Guide',
  },

  hasHebrew: false,
};
