import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 5 — The First Martyrdom Begins
 *
 * Antiochus IV Epiphanes brings the aged priest Eleazar before him and offers
 * a choice: eat swine's flesh and live, or be tortured to death. The king appeals
 * to him philosophically—calling Jewish law absurd and irrational—urging him to
 * "be reasonable." But Eleazar answers with a magnificent speech of his own:
 * pious reason is the truest reason; the law is divine; he will not transgress;
 * even the smallest compromise is a betrayal of everything he is.
 *
 * This chapter marks the hinge point of 4 Maccabees: the moment philosophy
 * becomes flesh, and faith becomes defiance. Here we see the cost of fidelity,
 * the terror of choice, and the quiet dignity of the old man who refuses to
 * bend—no matter what is offered, no matter what is threatened.
 *
 * For Christian readers, the resonance is deep: here is a prefigurement of
 * another choice, another king's temptation, another refusal that changes
 * the world.
 */

export const FOURTH_MACCABEES_5: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 5,

  estimatedMinutes: { beginner: 10, intermediate: 20, deep: 24 },
  intros: [
    'Eleazar is brought before King Antiochus—ninety years old, a teacher of the Law, honored among his people for his wisdom and piety. The king has already killed many Jews for refusing to eat unclean meat. Now he brings the priest before him, offering what seems like mercy: conform, and be spared. Refuse, and be tortured to death.',
    'To the crowd watching, the choice seems obvious. What is a dietary rule compared to your life? But Eleazar understands something deeper: that once you compromise the truth you have lived for, you have already lost the thing the king is offering to spare. You are no longer yourself. The body may survive, but the soul has been handed over.',
    'What unfolds is a conversation between reason and Reason—between the king\'s appeal to rational self-interest and Eleazar\'s call to divine wisdom. One argues from survival; one argues from Truth. One has all the power in the room except the one that matters most.',
  ],

  sections: [
    /* ─── 4 Maccabees 5:1–3 — Antiochus Brings Eleazar Forward ────────────── */
    {
      ref: '4 Maccabees 5:1–3',
      title: 'The King\'s Mercy Offered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('And when the king saw '),
              hg('Eleazar brought forth', 'mac5-aged-priest'),
              t(', '),
              hg('hoary-headed and of great age', 'mac5-hoary-headed'),
              t(', he said unto him with courtesy, "Old man, "')
            ),
            verse(
              2,
              t('why dost thou hold so firmly to what is but a law of men? Why not show '),
              hp('the wisdom to live', 'mac5-wisdom-live'),
              t('? Eat of this sacrifice, ')
            ),
            verse(
              3,
              t('and thou shalt be set free. I offer thee '),
              hg('life and honor', 'mac5-life-honor'),
              t('. Is not a man more precious than the mere customs of his nation?"')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-aged-priest',
          html:
            'Eleazar is led forward not in chains but in dignity. He is ancient—ninety years old—a living embodiment of faithfulness through decades. The king sees him and speaks with courtesy: Antiochus is not crude in his temptation. He appeals to reason, to mercy, to the apparent lightness of the thing he asks.',
        },
        {
          kind: 'commentary',
          id: 'mac5-wisdom-live',
          html:
            'The king calls it wisdom—the pragmatic choice to survive. But Eleazar will answer that there is a deeper wisdom: the wisdom that knows what is worth living for, and what—if surrendered—would make life not worth living.',
        },
        {
          kind: 'commentary',
          id: 'mac5-life-honor',
          html:
            'Life and honor: the two things every power offers. But Eleazar understands that offering them from the lips of a tyrant is a trap. The offer of life means nothing if it comes at the cost of losing yourself.',
        },
        {
          kind: 'greek',
          id: 'mac5-logismos',
          title: 'Logismós — "Reason; Thought; Deliberation"',
          script: 'λογισμός',
          translit: '<strong>logismós</strong> · rational thought; deliberation; the faculty of reasoning',
          description:
            'The king uses this word: be reasonable. For him, reason means calculating the value of your life against the cost of a rule. But Eleazar will show that true logismós is not mere calculation—it is reasoning illuminated by reverence for God.',
        },
        {
          kind: 'commentary',
          id: 'mac5-hoary-headed',
          html:
            'The white head is a crown in Scripture (Proverbs 16:31). Eleazar\'s great age signals that he has lived through decades of faithfulness. The king\'s offer is not merely to compromise once, but to overturn a lifetime of fidelity in a single moment. That is what makes the temptation so acute.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-tempter',
          title: 'Christ Connection — The Wilderness Temptation',
          html:
            'The devil brings Jesus to a high mountain and shows him "all the kingdoms of the world, and the glory of them." The offer is simple: "All these things will I give thee, if thou wilt fall down and worship me" (Mt 4:8–9). Jesus refuses. Antiochus here offers Eleazar something similar: life, honor, freedom from pain—if only he will bend once. Both refusals say the same thing: <em>There is something worth more than what you are offering.</em>',
        },
        {
          kind: 'carry',
          html:
            'The king speaks with courtesy because he does not yet understand that he is asking the impossible. He offers life, not seeing that Eleazar believes life without Truth is not truly life. When the world offers you what it has—comfort, safety, belonging—what does it cost you to accept? The real question is not "Can I afford this?" but "Who will I be if I take it?"',
        },
        {
          kind: 'reflection',
          id: 'mac5-offer-ref',
          prompt:
            'What offer is the world making you right now—some small compromise that would make your life easier, safer, more comfortable? What would you have to surrender to take it?',
        },
      ],
    },

    /* ─── 4 Maccabees 5:4–9 — "Be Reasonable, Old Man" ────────────────────── */
    {
      ref: '4 Maccabees 5:4–9',
      title: 'The King\'s Philosophy: Reason as Survival',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              4,
              t('Behold, thy nation\'s laws are '),
              hg('absurd', 'mac5-absurd-nomos'),
              t('. They forbid thee meat fit for eating. They cut thee off from wine and from every '),
              hg('natural pleasure', 'mac5-natural-pleasure'),
              t('. ')
            ),
            verse(
              5,
              t('Art thou a slave to these ordinances? Art thou bound by the fear of thy fathers\' God to refuse what will preserve thy life?"')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-absurd-nomos',
          html:
            'Antiochus calls the law <em>absurd</em>—irrational, unreasonable, unworthy of a thinking man. He does not ask Eleazar to stop worshiping; he asks him to stop being <em>controlled</em> by a rule he sees as arbitrary. The appeal is to intellectual independence.',
        },
        {
          kind: 'greek',
          id: 'mac5-peitharchia',
          title: 'Peitharchía — "Obedience; Submission to Authority"',
          script: 'πειθαρχία',
          translit: '<strong>peitharchía</strong> · obedience; compliance; submission to rule',
          description:
            'The king associates Eleazar\'s faithfulness with <em>slavery</em> to the law. But Eleazar will distinguish between slavish obedience and obedience born of love—willing submission to what is true and good.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              6,
              t('Think upon it, old man. ')
            ),
            verse(
              7,
              t('If there be gods of thy fathers, surely they will '),
              hp('forgive thee', 'mac5-forgive-gods'),
              t(' if thou dost this one small thing to preserve thy life. ')
            ),
            verse(
              8,
              t('Nature itself teacheth us to eat what is needful for the body. What '),
              hg('folly to die for a law', 'mac5-folly-die'),
              t('—a mere custom of men?"')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-natural-pleasure',
          html:
            'The king speaks the language of nature and reason: the body hungers; therefore, eat. It is the oldest argument—and Eleazar will answer it by showing that reason, when enlightened by reverence for God, judges differently. Not everything the body desires is good; not everything necessary for survival is good for the soul.',
        },
        {
          kind: 'commentary',
          id: 'mac5-folly-die',
          html:
            'The king calls it folly to die for a law. But Eleazar will show that it is a far greater folly to live for oneself alone, abandoning the truth that has shaped your entire existence.',
        },
        {
          kind: 'commentary',
          id: 'mac5-see-reason',
          html:
            'The king equates reasonableness with compliance. A "reasonable" man, in his eyes, is one who bends to the stronger will. But reason itself will prove him wrong.',
        },
        {
          kind: 'commentary',
          id: 'mac5-forgive-gods',
          html:
            'The king suggests that Eleazar\'s God—if He exists—will surely forgive one small compromise. It is the language of mercy turned to the service of compromise. But Eleazar understands something the king does not: that the law is not a burden imposed arbitrarily by a stern deity, but an expression of God\'s love and the path of true flourishing.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-bread',
          title: 'Christ Connection — "Man Shall Not Live by Bread Alone"',
          html:
            'In the wilderness, hungry after forty days, Jesus is tempted by the devil: "If thou be the Son of God, command that these stones be made bread" (Mt 4:3). Jesus answers: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God" (Mt 4:4). He refuses what the body needs because He knows what the soul requires. Eleazar stands in that same conviction: there is a hunger deeper than the body\'s hunger, and feeding only the flesh starves the spirit.',
        },
        {
          kind: 'carry',
          html:
            'The world uses reason against you: "What does it matter? No one will know. Everyone else does it. Your God will understand." But the invitation to compromise always comes dressed in reason. Before you accept it, ask: Am I reasoning, or am I rationalizing? Am I following true wisdom, or am I following my appetite with an intellectual excuse?',
        },
      ],
    },

    /* ─── 4 Maccabees 5:10–13 — "Even a Pretense" ────────────────────────── */
    {
      ref: '4 Maccabees 5:10–13',
      title: 'The Threshold of Betrayal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              10,
              t('And Antiochus said further, "Surely I am merciful. I will not compel thee utterly. Even if thou canst not eat in truth, '),
              hg('pretend', 'mac5-pretend'),
              t(' to eat. ')
            ),
            verse(
              11,
              t('Take the meat, touch it to thy lips, '),
              hp('and I shall see thee as a man of reason', 'mac5-see-reason'),
              t('. Is not this a small thing, to save thy life by '),
              hg('a gesture', 'mac5-gesture'),
              t('?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-pretend',
          html:
            'The king\'s offer softens: not true transgression, merely the <em>appearance</em> of it. Surely Eleazar can do <em>this</em>. This is where the temptation grows most subtle. The old man is being offered a way to comply that seems to require almost nothing—a gesture, a pretense, a performance. The law would be technically unbroken; only the appearance would change.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              12,
              t('Then Eleazar stood '),
              hp('unmoved', 'mac5-eleazar-unmoved'),
              t(' and answered the king with steadiness: "I will not eat, neither in truth nor in '),
              hg('pretense', 'mac5-pretense-answer'),
              t('."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-gesture',
          html:
            'The word is <em>gesture</em>—something external, performative, without meaning. But Eleazar knows: a gesture is not nothing. A gesture is the beginning of belief. Once you perform compliance, you have begun to become compliant. The mask becomes the face.',
        },
        {
          kind: 'greek',
          id: 'mac5-skeue',
          title: 'Skeuḗ — "Vessel; Instrument; Pretense"',
          script: 'σκευή',
          translit: '<strong>skeuḗ</strong> · a vessel; an instrument; that which serves a function',
          description:
            'In the king\'s mouth, the word suggests that the body is merely a vessel, a tool to be used for survival. But Eleazar\'s answer reclaims the body as sacred, as bound to the soul in inseparable unity. You cannot sin with the body alone while the spirit stands apart.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-yea-nay',
          title: 'Christ Connection — "Let Your Yea Be Yea"',
          html:
            'Jesus teaches: "Let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil" (Mt 5:37). He is speaking of integrity—the refusal to speak one thing and mean another, to perform belief while harboring doubt. Eleazar embodies this: he will not pretend, will not gesture, will not split his outer life from his inner conviction. His yea is yea; his nay is nay. There is no pretense.',
        },
        {
          kind: 'carry',
          html:
            'Where in your life are you being tempted to pretend—to perform compliance while keeping your true self hidden? A marriage where you go silent instead of honest? A faith kept private while your public choices deny it? A compromise framed as pragmatism? Eleazar says: even a gesture splits you. Even a small pretense weakens the whole. There is a cost to integrity, but the cost of losing it is far greater.',
        },
        {
          kind: 'reflection',
          id: 'mac5-gesture-ref',
          prompt:
            'Is there a place in your life where you\'re being asked to "just pretend"? What would it cost you to refuse that gesture?',
        },
      ],
    },

    /* ─── 4 Maccabees 5:14–20 — Eleazar Speaks: The Law Is Divine ──────────── */
    {
      ref: '4 Maccabees 5:14–20',
      title: 'The Answer: Pious Reason',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              14,
              t('And Eleazar said unto the king: "Thou callest this law absurd. But I tell thee, '),
              hp('the law is divine', 'mac5-law-divine'),
              t('. It comes not from the caprice of men, but from '),
              hg('the mind of God', 'mac5-mind-god'),
              t('."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-eleazar-unmoved',
          html:
            'Notice the verb: Eleazar stood. He does not waver. The offer has grown more merciful, more reasonable, more lenient—and yet his refusal is not softened. He understands that there is no threshold of acceptability for betrayal. Once the principle yields, everything yields.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              15,
              t('"And I, who am old, will not '),
              hg('transgress the statutes of my fathers', 'mac5-fathers-statutes'),
              t('. For I was taught from childhood that '),
              hp('pious reason rules the passions', 'mac5-pious-reason-rules'),
              t(' of the flesh.')
            ),
            verse(
              16,
              t('Thou speakest of reason? But what is thy reason? It is the reason that teaches a man to love his own flesh more than his God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-pretense-answer',
          html:
            'Eleazar answers the king\'s offer of pretense with a refusal that includes both word and deed. Not eating, neither truly nor in performance. He closes every door, every loophole, every escape hatch. There is no negotiation possible.',
        },
        {
          kind: 'commentary',
          id: 'mac5-not-pretense-final',
          html:
            'This repetition—neither in truth nor in pretense—is not for the king\'s benefit. It is for Eleazar\'s own soul. He is drawing a line he will not cross, and he is saying it aloud to make it real, to bind himself to it before witnesses.',
        },
        {
          kind: 'commentary',
          id: 'mac5-law-divine',
          html:
            'The priest now speaks—not as a political prisoner, but as a theologian. The law, he insists, is not arbitrary. It is not a custom to be adjusted by a more enlightened view. It is <em>divine</em>—it flows from God\'s own mind. To dismiss it as absurd is to dismiss God Himself.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              17,
              t('"Pious reason is the truest reason. It is not blind obedience, but '),
              hg('obedience illuminated by reverence', 'mac5-reverence-illuminated'),
              t('. "')
            ),
            verse(
              18,
              t('And I have kept the law all my days; I have not wavered; and I will not begin now, when I am old.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac5-eulabeia',
          title: 'Eulábeía — "Reverence; Pious Care; Caution"',
          script: 'εὐλάβεία',
          translit: '<strong>eulábeía</strong> · reverent fear; the pious caution that guards what is holy',
          description:
            'This is the key word—not merely fear of punishment, but a tender, reverent care for what is holy. It is the opposite of carelessness. Eleazar\'s obedience is not servile; it is the reverent care of one who loves what God has given and guards it fiercely.',
        },
        {
          kind: 'commentary',
          id: 'mac5-mind-god',
          html:
            'Eleazar distinguishes between the law of the land (Antiochus\'s laws) and the law of heaven (God\'s Torah). One is written on parchment by human decree; the other is written on the human heart by God Himself. To break it is not merely to disobey a rule; it is to turn away from the deepest truth of existence.',
        },
        {
          kind: 'commentary',
          id: 'mac5-reverence-illuminated',
          html:
            'This is the crucial distinction: not blind obedience, but obedience that flows from understanding and reverence. When you see clearly that God is good and His way is true, obedience becomes not a burden but a joy—the natural response of a free person who has seen the truth.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-law-love',
          title: 'Christ Connection — "If You Love Me, Keep My Commandments"',
          html:
            'Jesus tells His disciples: "If ye love me, keep my commandments" (Jn 14:15). The law is not a burden imposed on those who displeased God; it is the expression of love from One who knows what is good for us. Eleazar understands this: the law is not a prison but a path. To keep it is not slavery; it is the way of love. To break it—even to pretend to break it—is to answer love with betrayal.',
        },
        {
          kind: 'carry',
          html:
            'Eleazar calls his refusal "pious reason"—not blind obedience, but a reasoning illuminated by reverence for God. What would it mean for your reasoning to be illuminated this way? Not rationalizing what you want to do, not using your mind to justify your appetites, but asking: What does love require? What does God ask? What is truly good for my soul, not merely what my body desires?',
        },
      ],
    },

    /* ─── 4 Maccabees 5:21–29 — "I Will Not Transgress" ─────────────────── */
    {
      ref: '4 Maccabees 5:21–29',
      title: 'The Immovable Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              21,
              t('"Dost thou think me weak because I am old? Because my frame is bent and my strength fades? Nay. '),
              hp('My soul is young', 'mac5-soul-young'),
              t('. "')
            ),
            verse(
              22,
              t('"And thou askest me to choose life? But what life is it that is bought at the price of '),
              hg('my righteousness', 'mac5-righteousness'),
              t('? ')
            ),
            verse(
              23,
              t('To live as a '),
              hg('man without honor', 'mac5-without-honor'),
              t(', who has '),
              hg('betrayed the truth he kept his whole life', 'mac5-betrayed-truth'),
              t(', is not life. It is a living death."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-fathers-statutes',
          html:
            'To transgress the statutes of his fathers is not merely to break a rule; it is to sever himself from the lineage of faithfulness stretching back generations. Eleazar is not an isolated individual; he is a link in a chain. To break one link is to betray all those who came before and all who will come after.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              24,
              t('"Even a small transgression—even the smallest compromise—teaches me that '),
              hg('the whole edifice can fall', 'mac5-edifice-falls'),
              t('. ')
            ),
            verse(
              25,
              t('If I eat but once, what will I say the next time I am tempted? That I have already fallen? That the line has been crossed?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-pious-reason-rules',
          html:
            'Eleazar claims that pious reason—not blind impulse, not appetite, not fear—rules the passions of the flesh. This is the central claim of 4 Maccabees as a whole: that a human being, rightly ordered by reverence for God, is stronger than fire, stronger than hunger, stronger than the fear of death. The body can be broken, but the will can remain intact.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              26,
              t('"Therefore I say to thee, king: I will not eat. '),
              hp('Not in truth, and not in pretense', 'mac5-not-pretense-final'),
              t('. "')
            ),
            verse(
              27,
              t('"Thou canst take my life, but thou canst not take '),
              hp('my soul', 'mac5-soul-cannot-take'),
              t('. Thou canst '),
              hp('burn this body', 'mac5-burn-body'),
              t(', but thou canst not burn the truth that dwells within it."')
            ),
            verse(
              28,
              t('"I was born under the law; I have lived by it; and I will die for it. There is no bargaining. There is no threshold of acceptability for betrayal.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-obedience-illuminated',
          html:
            'This phrase—obedience illuminated by reverence—captures the whole philosophy of 4 Maccabees. It is not dark, servile obedience, but an obedience that flows from understanding, from love, from a clear-eyed recognition that God\'s way is the true way. The obedience of a free person who has chosen the good.',
        },
        {
          kind: 'commentary',
          id: 'mac5-soul-cannot-take',
          html:
            'The soul: the seat of conscience, the inner sanctuary where you meet God. It cannot be reached by any instrument the king possesses. It can only be surrendered—and Eleazar will not do that.',
        },
        {
          kind: 'commentary',
          id: 'mac5-burn-body',
          html:
            'Eleazar calmly acknowledges what will happen. The body will burn. He is not denying the reality of his suffering; he is saying that the suffering cannot touch the truth he carries. His flesh can be broken, but his faith cannot.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-faithful',
          title: 'Christ Connection — "Be Faithful unto Death"',
          html:
            'The risen Christ speaks to the church: "Fear none of those things which thou shalt suffer… be thou faithful unto death, and I will give thee a crown of life" (Rev 2:10). Eleazar here embodies that faithfulness: he will not negotiate with death, will not bargain with it, will not let the fear of it reshape his conscience. Like Christ on the cross, he will not come down from the cross to save himself. The faithfulness itself is the victory.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment in every person\'s journey where the price of faithfulness becomes visible. Where you see exactly what it will cost to say no. Eleazar stands at that threshold and does not flinch. He does not calculate whether the cost is acceptable. He does not ask, "Can I live with this?" He asks, "Can I live <em>without</em> this?" And the answer is: not truly. Once you cross that line, you are not saving your life; you are trading it for a living death.',
        },
        {
          kind: 'reflection',
          id: 'mac5-faithfulness-ref',
          prompt:
            'What is the line you will not cross, no matter what the cost? What conviction is non-negotiable for you? Who or what has taught you to draw that line?',
        },
      ],
    },

    /* ─── 4 Maccabees 5:30–35 — The Legacy ────────────────────────────── */
    {
      ref: '4 Maccabees 5:30–35',
      title: 'A Teacher Till the End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              30,
              t('"Consider also '),
              hg('the young who watch', 'mac5-young-watch'),
              t('. What do they see in me? If I eat, they learn that '),
              hg('one\'s word can be broken', 'mac5-word-broken'),
              t(' for survival."')
            ),
            verse(
              31,
              t('If I yield, they learn that '),
              hp('righteousness is provisional', 'mac5-righteousness-provisional'),
              t(', '),
              hg('subject to the strongest pressure', 'mac5-strongest-pressure'),
              t('."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-soul-young',
          html:
            'Though Eleazar\'s body is old, his spirit remains vital. He does not plead infirmity as an excuse. Rather, he claims the strength of one whose will is young and undivided. The soul, if it is rightly ordered, does not age.',
        },
        {
          kind: 'commentary',
          id: 'mac5-young-watch',
          html:
            'Eleazar does not stand alone in that room. There are witnesses—young people watching to see if faithfulness is real or merely a pose for easy times. His refusal will shape them.',
        },
        {
          kind: 'commentary',
          id: 'mac5-word-broken',
          html:
            'A word broken once can be broken again. The whole architecture of trust—in yourself, in God, in the principles that have held you—collapses if you let go.',
        },
        {
          kind: 'commentary',
          id: 'mac5-righteousness-provisional',
          html:
            'If righteousness is provisional—good when convenient but flexible when pressure comes—then it is not righteousness at all. It is merely prudence, and it offers no true strength.',
        },
        {
          kind: 'commentary',
          id: 'mac5-strongest-pressure',
          html:
            'The strongest pressure: torture, death, the loss of everything. If righteousness bends before such pressure, it means nothing in ordinary life either.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              32,
              t('"But if I stand '),
              hp('unmoved', 'mac5-stand-unmoved-final'),
              t(', they learn something true. They learn that '),
              hg('the law', 'mac5-law-eternal'),
              t(' is not a burden imposed on the weak, but '),
              hg('a truth held by the strong', 'mac5-truth-strong'),
              t('."')
            ),
            verse(
              33,
              t('And Eleazar ceased speaking, and the king was silent, '),
              hg('enraged', 'mac5-enraged'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-stand-unmoved-final',
          html:
            'To stand unmoved—the same posture as in chapter 6, the same refusal to flinch. But the context is different. Here he speaks of the young learning a truth. His faithfulness is not for his own sake alone; it is a testimony.',
        },
        {
          kind: 'commentary',
          id: 'mac5-law-eternal',
          html:
            'The law is eternal—not because it is arbitrarily imposed by God, but because it expresses something true about how human life flourishes. To obey it is not to obey a tyrant but to align oneself with reality.',
        },
        {
          kind: 'commentary',
          id: 'mac5-truth-strong',
          html:
            'The law is held by the strong—not by the fearful, not by the compromised, but by those whose will is fixed on God. Strength does not mean coercion; it means integrity.',
        },
        {
          kind: 'commentary',
          id: 'mac5-enraged',
          html:
            'The king\'s silence is more eloquent than a shout. Antiochus is silenced because Eleazar has answered him at the level that matters. Not with clever words but with the clarity of a man who has already chosen, already decided, and cannot be moved.',
        },
        {
          kind: 'commentary',
          id: 'mac5-righteousness',
          html:
            'Eleazar speaks the word—righteousness. It is not a matter of rules or regulations, but of being right with God, being true to the deepest convictions of the soul. It cannot be taken by force; it can only be surrendered. And to surrender it is to lose the thing most worth keeping.',
        },
        {
          kind: 'greek',
          id: 'mac5-paranomos',
          title: 'Paránomós — "Lawless; Against Law"',
          script: 'παράνομος',
          translit: '<strong>paránomós</strong> · acting against law; transgressive; unlawful',
          description:
            'Eleazar will not become paranomos—a person without law, untethered from truth. For the author of 4 Maccabees, to live without the law is not to live freely but to live as an exile from reality itself. The law is not a cage but a home.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              34,
              t('"Now bring thy instruments," said the king. "Let us see if this old man\'s reason will master his flesh."')
            ),
            verse(
              35,
              t('And the guards '),
              hg('laid hands upon Eleazar', 'mac5-hands-upon-eleazar'),
              t(' to bring him to '),
              hg('the wheel', 'mac5-torture-wheel'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-hands-upon-eleazar',
          html:
            'The guards lay hands on him not because they are cruel, but because the king has commanded. Eleazar does not resist. He has already given his answer; the time for words is past. Now comes the witness of the body.',
        },
        {
          kind: 'commentary',
          id: 'mac5-torture-wheel',
          html:
            'The wheel: one of the instruments designed to break a human body into submission. But Eleazar has already chosen what matters more than his body. The wheel cannot turn back his choice.',
        },
        {
          kind: 'commentary',
          id: 'mac5-without-honor',
          html:
            'To live without honor in your own eyes is a worse death than physical death. Eleazar knows this. He refuses to end his days as a man broken, compromised, untrue to himself. Better to die whole than to live shattered.',
        },
        {
          kind: 'carry',
          html:
            'You teach by standing firm. The young around you are learning from your choices whether convictions matter or whether everything bends to pressure. You teach whether truth is worth dying for or merely something to be adjusted when the cost rises. Eleazar\'s refusal is not just his own; it is a gift to all who witness it. What are you teaching by the lines you hold or the lines you erase?',
        },
        {
          kind: 'reflection',
          id: 'mac5-teacher-ref',
          prompt:
            'Who is watching your choices? What convictions are you teaching them are worth more than comfort, safety, or ease? Are those the convictions you actually hold?',
        },
        {
          kind: 'artwork',
          matchTitle: /eleazar|martyr|torture|antiochus/i,
          caption: '4 Maccabees 5 · The Choice',
        },
      ],
    },

    /* ─── 4 Maccabees 5:36–38 — Taken to the Flames ───────────────────── */
    {
      ref: '4 Maccabees 5:36–38',
      title: 'Bound for the Furnace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              36,
              t('And they '),
              hg('stripped him', 'mac5-stripped-eleazar'),
              t(' and '),
              hg('bound him', 'mac5-bound-eleazar'),
              t(' to the instruments of torture. ')
            ),
            verse(
              37,
              t('But Eleazar did not cry out. He did not turn his face. He stood '),
              hp('as one who had already made his peace', 'mac5-peace-made'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-stripped-eleazar',
          html:
            'Stripped again, as in chapter 6. The vulnerability is total. Every defense removed. The body laid bare before the machine of torture. Yet Eleazar does not flinch.',
        },
        {
          kind: 'commentary',
          id: 'mac5-bound-eleazar',
          html:
            'Bound to the instruments. The body is now fixed, immobilized, at the mercy of the machine. But the will remains free. The spirit cannot be bound.',
        },
        {
          kind: 'commentary',
          id: 'mac5-peace-made',
          html:
            'He stands as one who has already made his peace—with God, with himself, with what awaits. There is a calm in him that confuses the guards. They expect fear; they find silence. They expect desperation; they find a man who has already chosen.',
        },
        {
          kind: 'commentary',
          id: 'mac5-betrayed-truth',
          html:
            'To betray the truth you have lived for is to betray yourself. There is no way to do this lightly, no way to compartmentalize it, no way to tell yourself that you are still the person you were. Once the truth is abandoned, the whole edifice of identity begins to crumble.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              38,
              t('For he knew '),
              hp('what awaited him', 'mac5-knew-awaits'),
              t('. He had '),
              hg('spoken his truth', 'mac5-truth-spoken'),
              t(', and now there was nothing left but to '),
              hg('bear witness with his body', 'mac5-bear-witness'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac5-knew-awaits',
          html:
            'He knew. There were no illusions, no false hope that the king might relent. Eleazar went into that room knowing what awaited him. And he chose it anyway.',
        },
        {
          kind: 'commentary',
          id: 'mac5-truth-spoken',
          html:
            'He had spoken his truth. The words are complete. The testimony has been given. Now the body will speak what the voice has declared.',
        },
        {
          kind: 'commentary',
          id: 'mac5-bear-witness',
          html:
            'Bear witness with his body: a vivid phrase. The torture that follows is not meaningless suffering but a kind of speech—the eloquence of the flesh saying what the voice has already said. His pain becomes a sermon.',
        },
        {
          kind: 'commentary',
          id: 'mac5-edifice-falls',
          html:
            'One small compromise leads to another. The first betrayal weakens the resolve for the second. The armor of conviction, once cracked, cannot hold. Eleazar understands this and refuses to give ground, not even an inch.',
        },
        {
          kind: 'christ',
          id: 'mac5-christ-bound',
          title: 'Christ Connection — "I Lay Down My Life"',
          html:
            'Jesus says: "No man taketh [my life] from me, but I lay it down of myself" (Jn 10:18). He walks toward the cross not because He is compelled but because He chooses it. Eleazar, similarly, walks toward the torture not as a victim of the king\'s cruelty but as one who has already chosen—and will not choose differently, no matter what the cost. His death, like Christ\'s, is not something that happens to him; it is something he offers.',
        },
        {
          kind: 'carry',
          html:
            'When you have drawn your line and spoken your truth, there is a peace that comes—not the world\'s peace, but a deep, quiet certainty. You know what will happen. You know it will hurt. But you also know that you will not break. That knowledge itself is a kind of freedom. The path from here is clear. The only thing left is to walk it.',
        },
        {
          kind: 'reflection',
          id: 'mac5-final-ref',
          prompt:
            'What truth would you bear witness with your body? What conviction is worth not just saying, but embodying through suffering?',
        },
        {
          kind: 'artwork',
          matchTitle: /furnace|flame|fire|bound/i,
          caption: '4 Maccabees 5:36–38 · The Path to Faithfulness',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Eleazar said: "Thou mayest take my life, but thou canst not take my righteousness from me. Even a small transgression teaches me that the whole edifice can fall. I will not eat, neither in truth nor in pretense."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 5 · Study Guide',
  },
};
