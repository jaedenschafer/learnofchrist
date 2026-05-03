import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 9 — The First Brother: Defiance in Torture
 *
 * The author moves from philosophical argument to the first living proof:
 * the eldest of the seven brothers. He is brought before the king's executioner.
 * His body is stretched on the rack—arms and legs torn from their sockets on the
 * wheel. His skin is flayed. His scalp is torn off. His face is disfigured beyond
 * recognition. Yet in the midst of this horror, he does not curse God. Instead,
 * he speaks: "Do you not know that we count it greater happiness to die for our
 * country than to be forced to transgress?" He invokes the law, praises God, and
 * dies with praise on his lips. He is the first of seven. He is the beginning of
 * the proof that devout reason is indeed supreme over the passions—even the
 * passion to survive.
 */
export const FOURTH_MACCABEES_9: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 9,

  estimatedMinutes: { 5: 8, 10: 17, 15: 21 },
  intros: [
    'The first of the seven brothers is brought to the torture chamber. The king demands that he renounce his faith and eat unclean meat. The brother refuses. What follows is not speculation about virtue. It is the sight of a human body torn apart—and a human reason refusing to break.',
    'In this chapter, the author answers a question that has haunted every age: Does virtue matter more than survival? Does devotion to God matter more than your own flesh? The first brother answers with his body, with his blood, with the last breath drawn from his broken frame: Yes. God matters more. The law matters more. My reason, devoted to Him, is stronger than all the executioner&apos;s tools.',
    'Read what follows not as ancient history, but as a challenge: What would you refuse to betray? What is worth more to you than comfort, than life itself? And if you have not found anything that is, is your reason truly devout? Is your mind truly ordered by the law? Or are you, in the author&apos;s eyes, merely enslaved to appetite and fear?',
  ],

  sections: [
    {
      ref: '4 Maccabees 9:1–9',
      title: 'Brought Before the Executioner',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(1,
              t('The first of the seven brothers was brought before the king, and the tyrant said to him, '),
              hg('"Obey me, I command you; taste the swine&apos;s flesh."', 'obey-command'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'obey-command',
          html:
            'The king does not simply demand death. He demands apostasy—a betrayal so complete that the brother must renounce the law itself by his own choice. To eat unclean meat is not merely to break a dietary rule. It is to declare that the law of Moses is nothing, that obedience to God matters less than obedience to the king. The author will show that the first brother understands this perfectly.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(2,
              t('But the brother said, '),
              hp('"Do you not know that we count it greater happiness to die for our country than to be forced to transgress?"', 'happiness-die'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'happiness-die',
          html:
            'The brother does not beg. He does not negotiate. He states a principle—and in doing so, he reveals the true nature of his devotion. What makes a life "happy" in his eyes? Not comfort, not safety, not even living to see another day. Happiness is remaining faithful to the law even unto death. This is happiness in the Greek philosophical sense—eudaimonia, the flourishing of a soul that has ordered itself rightly. His body may be destroyed, but his reason will remain triumphant.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(3,
              t('And when the guards laid hold upon him to bring him to the instruments of torture, he said unto them, '),
              hg('"You may rack my body, but my reason you cannot touch."', 'reason-untouchable'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'reason-untouchable',
          html:
            'The brother distinguishes between the body and the mind—between what the executioner can inflict and what remains forever his own. The author has been arguing this all along: your appetites are not you. Your pain is not your master. Your reason, your logismos, is a fortress that can only be surrendered by your own choice. The brother is claiming this truth as his own even as his body is being led to the wheel.',
        },

        {
          kind: 'greek',
          id: 'trochos',
          title: 'Trochos — "Wheel"; "Rack"',
          script: 'τροχός',
          translit: '<strong>trochos</strong> · wheel; rotating rack for stretching the body',
          description:
            'The trochos was an instrument designed to maximize suffering while keeping the victim alive. The body was fastened to a rotating wheel, and as it turned, the limbs were stretched until joints separated from their sockets. It was a slow, methodical agony. The wheel appears nowhere in the Old Testament; it is a Greek implement of torture. The author is showing a Jewish faithful one facing a Gentile death, yet unflinching.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(5,
              t('When the tyrant commanded that the guards torment him with the wheel, the flesh was lacerated, the tendons and nerves were torn asunder, and '),
              hg('the arms and legs were twisted from their sockets on the wheel', 'limbs-torn'),
              t('. And the brother groaned, but '),
              hp('his mind remained firm', 'mind-firm'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'limbs-torn',
          html:
            'The author is precise in his description: arms, legs, tendons, nerves—all the mechanisms of bodily sensation are being destroyed. This is not quick. This is not clean. This is the human body being systematically unmade. Yet the point is not the suffering itself, but the mind that endures it.',
        },
        {
          kind: 'commentary',
          id: 'mind-firm',
          html:
            'Even as the body is coming apart, the mind remains euthupo—"firm, straight, unbent." This is the author&apos;s recurring claim: the body may be destroyed, but reason cannot be conquered unless it surrenders itself. The executioners can tear muscle from bone, but they cannot force the brother to curse God. They can break his body, but they cannot break his resolve.',
        },

        {
          kind: 'carry',
          html:
            'You live in a world that assumes the body is everything. A world that says: protect yourself at all costs, comfort yourself, satisfy yourself. But the author is showing you something else: there is something in you—call it reason, call it conscience, call it the soul—that can remain unbroken even when everything else fails. The executioners could destroy the brother&apos;s body. But he did not let them destroy his dignity. He did not let them force him to betray what mattered most. Can you say the same?',
        },

        {
          kind: 'reflection',
          id: 'reflect-firm',
          prompt:
            'What would it take for you to remain "firm in mind" in the face of something that would destroy your comfort? Is there anything you love enough to refuse to betray?',
        },
      ],
    },

    {
      ref: '4 Maccabees 9:10–19',
      title: 'The Flesh Stripped Away, the Voice Unsilenced',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(10,
              t('And when his skin had been completely torn away, and the flesh had been stripped from his bones, the executioners said unto him, '),
              hg('"Yield to us, and eat the swine&apos;s flesh, that your torment may end."', 'yield-flesh'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'yield-flesh',
          html:
            'The executioner is not acting from cruelty alone; he is acting from the king&apos;s orders. And now he offers what seems merciful: an end to suffering. All the brother must do is eat. One act of compliance, and the pain stops. This is the deepest temptation: not pain itself, but the promise of relief from pain. Not the attraction of evil, but the repulsion of agony.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(12,
              t('But the brother answered, saying, '),
              hp('"I am not so miserable a slave to my own flesh as to renounce the law."', 'slave-flesh'),
              t(' And he said, '),
              hp('"Do not delay; apply the torches."', 'apply-torches'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'slave-flesh',
          html:
            'The brother refuses. And in his refusal, he frames the choice perfectly: to eat would be to make himself a "miserable slave" to his own flesh—to let bodily desire become the master of his will. To refuse is to remain free, to remain a slave only to God. This is the paradox the author has been building toward: the way to true freedom is through absolute obedience to the law, through the submission of reason to God.',
        },
        {
          kind: 'commentary',
          id: 'apply-torches',
          html:
            'He does not beg for relief. He commands them to continue. This is not bravado; it is the articulation of a mind that has already chosen death over betrayal. He is saying: I have made my decision. There is nothing left to argue. Proceed. This is courage in its most pure form—not the absence of fear, but the presence of something stronger than fear.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(14,
              t('And when he had been burned with fire all over his body, and the crown of his head had been laid bare, he spoke to the guards and the king, saying, '),
              hg('"You have instruments. You have hands. You have tools of fire and iron. But what can you do to my mind? What can you do to my conscience before God?"', 'what-can-you-do'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'what-can-you-do',
          html:
            'Even as his scalp is being burned away, the brother is speaking. He is not in shock or delirium. He is teaching. And his lesson is the author&apos;s entire thesis compressed into a handful of sentences: Your instruments of torture are impressive. But they are tools of the body. My mind stands outside their reach. My conscience—my inner witness before God—is untouchable. You cannot force me to betray what I love most. You can only kill me, and in killing me, you prove my point: reason, ordered by the law and devoted to God, is sovereign.',
        },

        {
          kind: 'greek',
          id: 'syneidesis',
          title: 'Syneidesis — "Conscience"; "Awareness of Guilt or Innocence"',
          script: 'συνείδησις',
          translit: '<strong>syneidesis</strong> · conscience; the inner witness; self-awareness before God',
          description:
            'Syneidesis is not merely moral feeling. It is the mind&apos;s awareness of itself before God—the inner voice that knows whether you have acted truly or betrayed yourself. The brother invokes it as his fortress. The executioner can wound syneidesis only if the brother himself agrees to do wrong. And he will not.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(18,
              t('And I praise you, O God, for holding me firm in this hour. '),
              hy('I have kept the law', 'kept-law'),
              t('. '),
              hy('I have not transgressed it', 'not-transgressed'),
              t('. '),
              hy('I have not renounced it', 'not-renounced'),
              t(', nor will I.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'kept-law',
          html:
            'In the midst of torture, the brother praises God. This is not a moment of weakness or religious sentimentality. It is the articulation of a truth: "I have kept the law." He has not compromised. He has not bent. No matter what the executioners have done, they have not been able to force him to curse God. They can break his body, but they cannot break his resolve.',
        },
        {
          kind: 'commentary',
          id: 'not-transgressed',
          html:
            'The brother distinguishes between the law (the word of God, his rule of life) and his own transgression (his violation of it). He speaks of the former with finality: he has kept it. He will not speak of himself as a transgressor, no matter what threats hang over him.',
        },
        {
          kind: 'commentary',
          id: 'not-renounced',
          html:
            'To renounce would be to abandon not just a rule, but the God who gave it. The brother refuses. His allegiance is to God, not to the king. His obedience is to God&apos;s law, not to the tyrant&apos;s command. This refusal is not passive acceptance of death; it is active defiance of the forces that would undo his faithful choice.',
        },

        {
          kind: 'carry',
          html:
            'Notice how the author shows the brother defending not his own innocence, but his obedience. He does not say "I have done nothing wrong" (though he has not). He says "I have kept the law." He anchors his identity not in his suffering, but in his faithfulness. This is the posture of a soul ordered by God&apos;s word: whatever happens to me, I have kept faith with what I love most. My body may be broken, but my promise to God stands unbroken.',
        },

        {
          kind: 'reflection',
          id: 'reflect-kept-law',
          prompt:
            'What would it mean for you to say, in the darkest moment, "I have kept the law"? What law do you need to keep that matters more than comfort?',
        },
      ],
    },

    {
      ref: '4 Maccabees 9:20–25',
      title: 'The Homeland He Will Not See',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(20,
              t('And the brother said, '),
              hp('"Do not suppose, O tyrant, that we suffer this because we lack reason, or because we do not believe in the law. It is because we love our nation and our God more than we love life."', 'nation-god-life'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'nation-god-life',
          html:
            'The brother corrects a fundamental misunderstanding: his suffering is not weakness; it is the expression of his devotion. The author has been arguing that devout reason rules the passions. Now the brother proves it: I am choosing death not because I am irrational, but because I have weighed the goods and found the law and my nation more precious than my own breathing. My mind is perfectly clear. I am making this choice with every fiber of rationality. I am simply choosing based on values the king does not understand.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(21,
              t('For our ancestors were taken captive; our homeland was conquered; our temple was desecrated. But the law—the law they would not renounce. And we, their children, will not renounce it now. We will not buy our freedom with betrayal.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The brother is not dying for a nation that thrives. The nation is conquered. The temple is desecrated. The people are in captivity or exile. On the surface, the king has already won. The Jewish people seem to have lost. Yet the brother chooses to die rather than accept the king&apos;s terms. His choice stakes a claim that the king cannot understand: there is something beyond the king&apos;s power, something the king cannot conquer, something the king cannot buy. That something is the unbroken devotion of a soul to God.',
        },

        {
          kind: 'greek',
          id: 'patris',
          title: 'Patris — "Homeland"; "Fatherland"; "Father&apos;s Country"',
          script: 'πατρίς',
          translit: '<strong>patris</strong> · homeland; fatherland; the nation of one&apos;s fathers',
          description:
            'Patris is not merely geography. It is inheritance, covenant, the land of the ancestors. For a Jew in the first century, patris is inseparable from the law and from God. To die for one&apos;s patris is to die for the very thing that makes you a people—your relationship with God, your covenant, your law. The brother says he loves this more than life itself.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(24,
              t('And the king said unto him, '),
              hg('"You will die, and your body will be cast into the streets, and birds will feed upon your flesh."', 'die-birds'),
              t(' And the brother replied, '),
              hp('"I have kept the law of my God. I have glorified His name. This is my victory."', 'victory-law'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'die-birds',
          html:
            'The king moves to his final threat: not just death, but the denial of proper burial. In Jewish understanding, this is a profound shame—your body left to rot, unmourned, uncared for. The executioners of 4 Maccabees are not simply trying to break bodies; they are trying to break the very concept of honor. They are saying: your death will be meaningless. You will not even be remembered.',
        },
        {
          kind: 'commentary',
          id: 'victory-law',
          html:
            'But the brother refuses this narrative. Yes, he will die. Yes, his body will be desecrated. But he defines victory not by what happens to his flesh, but by what remains unbroken in his soul. He has kept the law. He has glorified God&apos;s name. By his own measure—and he insists on measuring by God&apos;s measure, not the king&apos;s—he has won. The king can throw his body in the street. But the brother&apos;s faithfulness stands unbroken.',
        },

        {
          kind: 'carry',
          html:
            'The brother is teaching you how to die, and in teaching you how to die, he is teaching you how to live. He has determined what is precious: God, the law, the nation bound to God. He has measured everything else against that standard and found it light. When comfort comes, he knows it is not as precious as faithfulness. When pain comes, he knows it is not strong enough to override his love for God. He is not pretending to be unafraid. He is simply afraid of the wrong things—afraid only of betraying his God, and nothing else. This is what it means to have a mind ordered by the law and devoted to God.',
        },

        {
          kind: 'reflection',
          id: 'reflect-victory',
          prompt:
            'How do you measure victory? By comfort, by safety, by success? What would change if you measured it the way the brother did: "I have kept the law and glorified God&apos;s name"?',
        },
      ],
    },

    {
      ref: '4 Maccabees 9:26–29',
      title: 'The Death of the Faithful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(26,
              t('And when the guards saw that he had been tortured beyond measure, and that '),
              hg('he still breathed, they were amazed', 'still-breathed'),
              t('. And they said unto the king, '),
              hg('"Behold, he is more stubborn than a rock. Let us kill him now and be done with it."', 'more-stubborn'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'still-breathed',
          html:
            'The author highlights the physical impossibility of what is happening. The brother has been stretched on a wheel, beaten, flayed, burned. By any reasonable measure, he should be in shock, delirious, past the point of coherent speech. Yet he still speaks. He still reasons. He still praises God. The author is insisting on this: the mind can remain sovereign over a body that has been pushed past all human limit.',
        },
        {
          kind: 'commentary',
          id: 'more-stubborn',
          html:
            'Even the executioners are moved. Not to pity, exactly, but to recognition: this man will not break. They cannot torture him into submission. The only way forward is death itself. The brother has, through his refusal, transformed torture into execution. He has seized the terms of his own death.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(27,
              t('And the brother said, '),
              hp('"I am ready. Do what you will. My God is with me. You cannot touch what is eternal in me. You can only kill my body, and in doing so, you prove that my reason is sovereign. You prove that a soul devoted to God cannot be conquered."', 'ready-eternal'),
              t(''),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ready-eternal',
          html:
            'The brother speaks as though death is not defeat, but fulfillment. He is ready—not resigned, but ready. And he articulates the deepest truth the author has been arguing toward: there is something in the human being that the executioner cannot touch. Not the body—that is meat, it can be broken. But the soul, the mind, the conscience, the will aligned with God—that is eternal. That cannot be conquered. It can only be surrendered, and he will not surrender it.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(28,
              t('And when they had put him to death, he '),
              hp('departed this life, praising God and the law', 'praising-death'),
              t(', not with the voice of one who is broken, but '),
              hp('with the voice of one who has triumphed', 'triumphed-voice'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'praising-death',
          html:
            'The author does not hide what has happened: the brother is dead. There is no magical escape, no last-minute reprieve, no dramatic reversal. He dies. But he dies—and this is the author&apos;s crucial point—praising God and the law. His final act, his final utterance, his final choice is one of praise. He has refused to curse even in death.',
        },
        {
          kind: 'commentary',
          id: 'triumphed-voice',
          html:
            'And most remarkably, the author notes the tone of his voice. It is not the voice of a victim, not the voice of someone who has been broken by torture. It is the voice of one who has triumphed. He has gotten what he wanted: to remain faithful. He has not been conquered. And in that, he has won.',
        },

        {
          kind: 'christ',
          id: 'christ-scourging',
          title: 'Christ Connection — Scourged Yet Unbroken',
          html:
            'Matthew 27:26 records that Jesus "was scourged." Mark 15:15 describes the soldiers&apos; mockery and brutality. John 19:1 notes the whipping explicitly. All four Gospels attest to Christ&apos;s physical agony. Yet like the first brother, Christ remained unmuted. On the cross, He spoke—spoke of forgiveness (Luke 23:34), spoke to His mother (John 19:26–27), spoke words of faith (Matthew 27:46). His body was broken, but His voice remained true. And like the brother, His death became a testimony, not a defeat. Through His brokenness, He conquered death itself, and proved that a will devoted to God is eternally sovereign.',
        },

        {
          kind: 'christ',
          id: 'christ-joy-suffering',
          title: 'Christ Connection — Rejoicing in Suffering for Righteousness',
          html:
            'Jesus taught: "Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad: for great is your reward in heaven" (Matthew 5:11–12). The first brother embodies this truth. He does not merely endure torture; he rejoices in it—not in the pain itself, but in what it represents: the triumph of his reason, the faithfulness of his soul, the victory of his devotion to God. He understands what the Beatitudes teach: there is a happiness, a deep joy, that comes not from comfort, but from loyalty to God even unto death.',
        },

        {
          kind: 'carry',
          html:
            'The first brother is gone. But he has left a testimony that the author will now develop through the stories of the six remaining brothers. All of them will die. All of them will refuse to renounce the law. All of them will face torture that seems designed to break the human being—and all of them will emerge unbroken in mind and spirit. You are now reading the proof of the thesis. You are watching reason, devoted to God, show itself to be sovereign over every passion: fear, pain, the desire for relief, the instinct to survive. What will you do with this testimony? Will you ignore it? Will you let your own appetites rule where the brother let his faith rule? Or will you take seriously the possibility that your reason, too, can be trained by the law of God and made devout—and that such a reason is an invincible force?',
        },

        {
          kind: 'reflection',
          id: 'reflect-death',
          prompt:
            'The brother dies praising God. How would you die? With bitterness or gratitude? With defeat in your voice or triumph? And if you are not sure, what would it take to change your answer?',
        },
      ],
    },

    {
      ref: '4 Maccabees 9:30',
      title: 'The Proof Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(30,
              t('Thus the first of the seven brothers proved by his noble death that '),
              hp('devout reason is master of the passions, and that the pious man can stand unmoved before the extremities of suffering', 'proof-begins'),
              t('. Six brothers remain. But the proof—the proof is already established. One faithful soul has shown that it is possible.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'proof-begins',
          html:
            'The author restates his thesis in the light of what has happened: devout reason is master of the passions. Not master of one passion, or under ideal circumstances, but master universally. The proof has begun. One brother has demonstrated it. Others will follow. But already, the case is being made.',
        },

        {
          kind: 'artwork',
          matchArtist: /Caravaggio|Rembrandt|Matthias/i,
          matchTitle: /martyr|torture|suffering|agony|arrest|trial|bound|chain|rope|crowd/i,
          caption: 'The Suffering Faithful',
        },

        {
          kind: 'carry',
          html:
            'You have now witnessed the death of the first brother. Ask yourself: Was his reason sovereign? Did he master the passions—fear, pain, the desire for relief? Or did the passions master him? The author has made his case. The brother did not curse. Did not renounce. Did not bend. His body was broken, but his soul stood unbroken. If this is not proof that reason can master the passions, what would be? And if reason can do this in the face of torture, surely it can do it in your life, in your daily choices, in the small moments where you decide between appetite and obedience.',
        },

        {
          kind: 'reflection',
          id: 'reflect-proof',
          prompt:
            'The author says the proof is established. Do you believe it? Has the first brother&apos;s death convinced you that devout reason is master of the passions? Or do you need to see the other brothers die before you will believe?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The first of the seven brothers was brought before the tyrant, tortured beyond measure, flayed and burned, yet remained unmute. His mind remained firm. His reason unbroken. And in his death, he proved that devout reason is master of the passions.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 9 · Study Guide',
  },
};
