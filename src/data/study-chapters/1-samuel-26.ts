import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 26 — David Spares Saul Again
 *
 * For the second time, David has opportunity to kill the king who hunts him.
 * For the second time, David refuses. This chapter is not about restraint as
 * a one-time virtue—it is David&apos;s character made flesh. A deep sleep from
 * the Lord sets the stage. Abishai&apos;s eagerness to strike contrasts sharply
 * with David&apos;s conviction that God&apos;s anointed shall not die by a
 * vassal&apos;s hand. In the valley between them, David mocks his own reduced
 * stature: the king of Israel hunts him as one hunts a flea. Saul confesses
 * his folly. David trusts in vindication that only God can give.
 */
export const SAMUEL_1_26: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 26,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 18 },
  intros: [
    'Once before, David had Saul in his power. Saul was sleeping, unarmed, at David&apos;s mercy. And David refused to raise his hand. He said then: "The Lord forbid that I should stretch forth mine hand against the Lord&apos;s anointed." Now, for the second time, the same scene repeats. The Ziphites have betrayed David&apos;s hiding place. Saul has come with 3,000 men. David and Abishai slip into the camp at night. Saul lies sleeping. The spear is within reach.',
    'This time, the test will be sharper. Abishai stands at David&apos;s side, eager to kill, saying: "God hath delivered thine enemy into thine hand this day." The offer is direct. The opportunity is real. What David does now will define not who he is in a moment of virtue, but who he is—his actual character. And the chapter will show us that restraint is not weakness. It is the mark of a man who believes in vindication by God alone.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 26',
    quote:
      'David had Saul asleep in his camp, the spear within reach. Abishai urged: strike him down. But David refused: "The Lord forbid that I should stretch forth mine hand against the Lord&apos;s anointed." His restraint was not fear. It was faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 26 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 26:1–5 — Saul Pursues David Again ───────────────────── */
    {
      ref: '1 Samuel 26:1–5',
      title: 'Saul Pursues David Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Ziphites came unto Saul to Gibeah, saying, Doth not David hide himself in the '),
                hy('hill of Hachilah', 'c-hachilah'),
                t(', which is before Jeshimon?'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then Saul arose, and went down to the wilderness of Ziph, having three thousand chosen men of Israel with him, to seek David in the wilderness of Ziph.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Saul pitched in the hill of Hachilah, which is before Jeshimon, by the way. But David abode in the wilderness, and he perceived that Saul came after him into the wilderness.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('David therefore sent out '),
                hg('spies', 'c-spies'),
                t(', and understood that Saul was come in very deed.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And David arose, and came to the place where Saul had pitched: and David beheld the place where Saul lay, and Abner the son of Ner, the captain of his host: and Saul lay in the trench, and the people pitched round about him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hachilah',
          html:
            'The Ziphites have betrayed David twice now. Hachilah means "the dark" or "the smooth"—a hill on the borderlands of Jeshimon, the wilderness. David is always fleeing toward the margins, the high places, the lands that belong to no kingdom yet. This is where hunted men hide.',
        },
        {
          kind: 'commentary',
          id: 'c-spies',
          html:
            'David does not simply wait. He sends out spies to confirm what the Ziphites have told Saul. David is shrewd. He does not rely on rumor. He verifies. And when the spies return with proof, David moves toward the danger rather than away from it. Not to flee, but to act.',
        },

        {
          kind: 'carry',
          html:
            'There are times when we learn that someone is hunting us—whether literally or in the court of reputation, in the sphere of work, in the realm of social judgment. When that happens, the first instinct is often to run further, to hide deeper. David&apos;s instinct is different. He sends out spies. He confirms the threat. And then he goes toward it, not in panic, but in clarity. Sometimes the way through fear is through knowledge—understanding exactly where the threat is, how large it is, and what the real terrain is.',
        },
      ],
    },

    /* ─── 1 Samuel 26:6–12 — The Spear and the Cruse ────────────────────── */
    {
      ref: '1 Samuel 26:6–12',
      title: 'The Spear and the Cruse Taken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 6,
              spans: [
                t('Then answered David and said to '),
                hy('Ahimelech the Hittite', 'c-ahimelech'),
                t(', and to '),
                hg('Abishai', 'c-abishai'),
                t(' the son of Zeruiah, brother to Joab: Who will go down with me to Saul to the camp? And Abishai said, I will go down with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ahimelech',
          html:
            'Ahimelech the Hittite is a foreigner, a non-Israelite, yet he is in David&apos;s camp. Later he is mentioned only this once. His presence shows David&apos;s force was a mixed band—refugees, exiles, the desperate and the brave, drawn to a man they believed in.',
        },
        {
          kind: 'commentary',
          id: 'c-abishai',
          html:
            'Abishai is the son of Zeruiah, brother to Joab—the same Joab who will later be David&apos;s fierce and sometimes merciless commander. Abishai responds at once: "I will go down with thee." He is loyal. He is eager. He will prove to be eager in ways that test David&apos;s restraint.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 7,
              spans: [
                t('So David and Abishai came to the people by night: and, behold, Saul lay sleeping within the trench, and his spear stuck in the ground at his bolster: but Abner and the people lay round about him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then said Abishai to David, '),
                hp('God hath delivered thine enemy', 'c-deliverance'),
                t(' into thine hand this day: now therefore let me '),
                hy('smite him', 'c-smite'),
                t(', I pray thee, with the spear even to the earth at once, and I will not smite him the second time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-deliverance',
          html:
            '"God hath delivered thine enemy into thine hand this day." It is a reasonable inference from the circumstance. The man who hunts David is asleep. His army sleeps around him. A deep sleep has fallen—and Abishai reads it as divine gift. The opportunity looks like providence. Sometimes the most dangerous moment is when circumstances seem to align perfectly with our desires.',
        },
        {
          kind: 'commentary',
          id: 'c-smite',
          html:
            'Abishai does not hesitate. "Let me smite him…with the spear even to the earth at once, and I will not smite him the second time." He is offering to end this. One stroke. One certainty. No second blow necessary. The logic is compelling. Why not?',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 9,
              spans: [
                t('And David said to Abishai, '),
                hp('Destroy him not', 'c-forbid'),
                t(': for '),
                hg('who can stretch forth', 'c-hand-anointed'),
                t(' his hand against the Lord&apos;s anointed, and be guiltless?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('David said furthermore, As the Lord liveth, '),
                hy('the Lord shall smite him', 'c-lord-smite'),
                t('; or '),
                hy('his day shall come to die', 'c-day-die'),
                t('; or he shall descend into battle, and '),
                hy('perish', 'c-perish'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The Lord forbid that I should stretch forth mine hand against the Lord&apos;s anointed: but, I pray thee, take thou now the spear that is at his bolster, and the cruse of water, and let us go.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-hand-anointed',
          title: 'Mashiach — "The Lord&apos;s Anointed"',
          script: 'מָשִׁיחַ',
          translit: '<strong>Mashiach</strong> · Anointed; the Messiah; one set apart by God',
          description:
            'The same word used for every anointed king of Israel. In David&apos;s mouth, it is both a statement of fact—Saul was anointed by Samuel—and a theological claim. Saul is God&apos;s appointed, even now. To strike him would be to strike against God&apos;s choice. David will not do it.',
        },
        {
          kind: 'hebrew',
          id: 'c-lord-smite',
          title: 'Tardemah — "A Deep Sleep"',
          script: 'תַּרְדֵּמָה',
          translit: '<strong>Tardemah</strong> · A deep sleep; a supernatural slumber; divine sleep',
          description:
            'The word used earlier to describe how God sent a deep sleep on Saul and his men. It is not natural sleep—it is the Lord&apos;s doing. The text is clear: this is divine providence making way for David&apos;s actions, not for violence, but for David&apos;s vindication through restraint.',
        },
        {
          kind: 'commentary',
          id: 'c-forbid',
          html:
            'David refuses. Not with anger. With firmness. "Destroy him not." He speaks as if he has the authority—which he does, in this moment. But he uses it to forbid violence, not permit it. And his reason is theological, not political: to strike the anointed is to strike against God.',
        },
        {
          kind: 'commentary',
          id: 'c-day-die',
          html:
            'David trusts in God&apos;s judgment. Saul will die—all men do. But not by David&apos;s hand. Either the Lord will smite him, or his day will come, or he will fall in battle. The ways are God&apos;s to choose. David&apos;s part is to refuse to be judge and executioner.',
        },
        {
          kind: 'commentary',
          id: 'c-perish',
          html:
            'Notice what David does not take: the spear, the cruse. Wait—he does take them, but not to use. He takes them as proof. He will need them later to show Saul, and all Israel, that he had the power to kill but chose not to. The proof is not in the blood spilled, but in the blood not spilled.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 12,
              spans: [
                t('So David took the spear and the cruse of water from Saul&apos;s bolster; and they gat them away, and no man saw it, nor knew it, neither awaked: for they were all asleep; because a deep sleep from the Lord was fallen upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-deep-sleep',
          html:
            'The text repeats: "a deep sleep from the Lord was fallen upon them." This is the hand of God in the narrative. Not chance. Not luck. The Lord makes possible what would otherwise be impossible. He provides the moment. And David, having the moment, uses it not to kill but to take proof of his restraint.',
        },

        {
          kind: 'carry',
          html:
            'There are moments in our lives when we see an opportunity to destroy someone—or at least to ensure they cannot hurt us further. We have the means. We have the moment. We even have companions who would help us, who would say: "This is the only way to be safe." But restraint is the harder road. It requires trusting that God will judge, that a day will come, that vindication is possible even when we refuse to take it ourselves. When you have the power to destroy and you choose not to, that choice speaks louder than any blood spilled.',
        },

        {
          kind: 'reflection',
          id: 'spear-taken',
          prompt:
            'Have you ever had the opportunity and the power to harm or destroy someone, and chosen restraint instead? What made that possible? What did you trust in?',
        },
      ],
    },

    /* ─── 1 Samuel 26:13–16 — David Calls Across the Valley ───────────── */
    {
      ref: '1 Samuel 26:13–16',
      title: 'David Calls Across the Valley',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 13,
              spans: [
                t('Then David went over to the other side, and stood on the top of an hill afar off; a great space being between them:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And David cried to the people, and to Abner the son of Ner, saying, Answerest thou not, Abner? Then Abner answered and said, Who art thou that criest to the king?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-far-off',
          html:
            'David moves to a place of safety—a great space between him and the camp. He is no longer a man who infiltrated the camp. He is a man calling from the hills. He is declaring his actions to the world, not hiding them.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 15,
              spans: [
                t('And David said to Abner, Art not thou a valiant man? and who is like to thee in Israel? wherefore then hast thou not kept thy lord the king? for there came one of the people in to destroy the king thy lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('This thing is not good that thou hast done. As the Lord liveth, ye are worthy to die, because ye have not kept your master, the Lord&apos;s anointed. And now see where the king&apos;s spear is, and the cruse of water that was at his bolster.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abner-shame',
          html:
            'David shames Abner across the valley. He calls him valiant, then asks: why did you not keep the king safe? Someone came into the camp to destroy him, and you did not wake. "Ye are worthy to die," David says. And then he shows the evidence: here is the spear. Here is the cruse. I was in your camp. I stood over your king. I could have killed him. And I did not. This display is not pride. It is a public declaration of David&apos;s character and Saul&apos;s danger.',
        },

        {
          kind: 'carry',
          html:
            'Abner was Saul&apos;s best general, his closest advisor. Yet he had failed in his most basic duty—to protect the king. David points this out, not in whispers, but across a valley where all can hear. Sometimes the point of restraint is not to hide it. It is to make it visible. David could have killed Saul in secret. But by taking the spear and the cruse and calling out to all the camp, he ensures that what he chose not to do is witnessed by everyone. He is building a reputation not as a merciful enemy, but as a man bound by conviction.',
        },
      ],
    },

    /* ─── 1 Samuel 26:17–20 — Saul Hears David's Voice ────────────────── */
    {
      ref: '1 Samuel 26:17–20',
      title: 'Saul Recognizes David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 17,
              spans: [
                t('And Saul knew David&apos;s voice: and said, Is this thy voice, my son David? And David said, It is my voice, my lord, O king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-voice',
          html:
            'Saul recognizes David&apos;s voice. There is something intimate in this—a man knows his enemy&apos;s voice as he knows few other things. And he calls David "my son." The title is ambiguous. It could be affection. It could be condescension. In Saul&apos;s mouth, these days, it might be both.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 18,
              spans: [
                t('And he said, Wherefore doth my lord thus pursue after his servant? for what have I done? or what evil is in mine hand?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Now therefore, I pray thee, let my lord the king hear the words of his servant. '),
                hy('If the Lord have stirred thee up', 'c-lord-stirred'),
                t(' against me, let him accept an offering: but if they be the children of men, cursed be they before the Lord; for they have '),
                hg('driven me out this day from abiding in the inheritance of the Lord', 'c-inheritance'),
                t(', saying, Go, serve other gods.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Now therefore, let not my blood fall to the earth before the face of the Lord: for the king of Israel is come out to seek a flea, as when one doth '),
                hy('hunt a partridge in the mountains', 'c-flea-partridge'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-stirred',
          html:
            'David makes an extraordinary offer. If God Himself has stirred Saul up against him, then let him make an offering—let him turn back to the Lord. But if it is men, human jealousy and fear, then "cursed be they before the Lord." David is saying: I accept God&apos;s judgment. I do not accept man&apos;s hatred.',
        },
        {
          kind: 'commentary',
          id: 'c-inheritance',
          html:
            'David appeals to the inheritance—the land given to Israel by the Lord. Saul is pursuing David "from abiding in the inheritance of the Lord." To be hunted from the promised land is, for David, a form of exile. It is a theological wound, not merely a physical one.',
        },
        {
          kind: 'commentary',
          id: 'c-flea-partridge',
          html:
            'And then: the most devastating line. "The king of Israel is come out to seek a flea, as when one doth hunt a partridge in the mountains." David is calling himself a flea. A partridge hunted in the mountains—a game so small that hunting it makes no sense except as sport or spite. David is saying: I am nothing. The effort you spend pursuing me is utterly disproportionate. It is ridiculous. And yet you come with 3,000 men. This is not justice. This is obsession.',
        },

        {
          kind: 'carry',
          html:
            'David has reduced his own stature in the eyes of the king and all the camp. He is saying: I am small. I am nothing. I am not worth the treasure of your rage. Sometimes when we are hunted by forces larger than us, the most powerful thing we can say is: this effort is absurd. This hatred is too large for what I have done. And I will not match it with hatred of my own. I will remain small, and I will let you see how large your pursuit is becoming.',
        },

        {
          kind: 'reflection',
          id: 'flea-partridge',
          prompt:
            'David called himself a flea being hunted as a partridge—mocking the disproportionate effort spent against him. Have you ever been pursued or hated out of proportion to what you had actually done? What would it feel like to name that disproportion, as David did?',
        },
      ],
    },

    /* ─── 1 Samuel 26:21–25 — Saul's Confession and Blessing ─────────── */
    {
      ref: '1 Samuel 26:21–25',
      title: 'Saul Confesses His Folly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 21,
              spans: [
                t('Then said Saul, '),
                hp('I have sinned', 'c-saul-sinned'),
                t(': return, my son David: for I will no more do thee harm, because my soul was precious in thine eyes this day: behold, I have played the fool, and have erred exceedingly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-sinned',
          html:
            'Saul confesses. "I have sinned. I have played the fool. I have erred exceedingly." These are the words of a man seeing himself clearly, if only for a moment. He recognizes that David has spared him when he could have killed him. And in that moment of clarity, Saul knows: he has been wrong. The rage, the pursuit, the obsession—all of it folly.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 22,
              spans: [
                t('And David answered and said, Behold the king&apos;s spear! and let one of the young men come over and fetch it.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('The Lord render to every man his righteousness and his faithfulness: for the Lord delivered thee into my hand today, but I would not stretch forth mine hand against the Lord&apos;s anointed.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And, behold, as thy life was much set by in mine eyes this day, so let my life be much set by in the eyes of the Lord, and let him deliver me out of all tribulation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-blessing',
          html:
            'David does not gloat. He does not demand anything. He simply returns the spear. And he speaks a blessing: "The Lord render to every man his righteousness and his faithfulness." He is calling down God&apos;s judgment on all. He is saying: what each of us has done, the Lord will see. He delivered Saul into my hand, but I refused to strike. Let the Lord see that. Let Him render righteousness on the basis of what we have actually done, not on the basis of power or position.',
        },
        {
          kind: 'commentary',
          id: 'c-my-life-set-by',
          html:
            'And then: "As thy life was much set by in mine eyes this day, so let my life be much set by in the eyes of the Lord." David is appealing to God with the same currency he has just spent on Saul. I valued your life. I valued your anointed status. Value me, then, in your eyes. Deliver me from tribulation. David has not asked Saul for anything. His plea is entirely to God.',
        },

        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 25,
              spans: [
                t('Then said Saul, Blessed be thou, my son David: thou shalt both do great things, and also shalt still prevail. So David went on his way, and Saul returned to his place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing-fulfilled',
          html:
            'Saul blesses David: "Thou shalt both do great things, and also shalt still prevail." It is a real blessing. A king&apos;s blessing, even if the king is broken and failing. And David does not stay. The chapter ends as it must: "David went on his way, and Saul returned to his place." They separate. The hunt is over—for now. But both men know the blessing is true. David will prevail.',
        },

        {
          kind: 'christ',
          id: 'christ-refusal',
          title: 'Christ Connection — Entrusting Judgment to the Father',
          html:
            'Jesus, at His arrest, was offered many ways to defend Himself. Peter drew a sword and struck the servant of the high priest. But Jesus said: "Put up again thy sword into his place: for all they that take the sword shall perish with the sword… Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?" (Matthew 26:52–53). He could have called down the very armies of heaven. Instead, He said to Peter: "The cup which my Father hath given me, shall I not drink it?" (John 18:11). Like David, Jesus did not strike the anointed—Himself is the Anointed One. But He entrusted His vindication entirely to the Father. He did not seek to save Himself; He believed His Father would save Him, or justify His death. And He prayed: "Father, into thy hands I commend my spirit" (Luke 23:46). Peter 1:23 says of Christ: "Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously." This is David&apos;s faith made perfect: the refusal to be your own avenger, the trust that God will judge.',
        },

        {
          kind: 'carry',
          html:
            'There are people in your life who have wronged you, who hunt you, who deserve justice. And there may be moments when you have the power to strike back, to ensure they cannot hurt you again. David had that power. Jesus had that power. Both refused. Both entrusted themselves to God. What David learned at Hachilah, and what Jesus embodied on the cross, is that vindication belongs to God alone. Your part is to refuse the sword, to speak truth across the valley, and to let your life bear witness to your restraint. The Lord will render righteousness. Let Him.',
        },

        {
          kind: 'reflection',
          id: 'entrust-vindication',
          prompt:
            'Who in your life have you needed to forgive, to let go of, to stop pursuing in your heart? What would it look like to entrust your vindication entirely to God, as David did?',
        },
      ],
    },
  ],
};
