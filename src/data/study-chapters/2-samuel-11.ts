import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 11 — David, Bathsheba, and Uriah
 *
 * This chapter tells of a king who abandons his calling at the moment he
 * should have been leading his people. In the space of a few days, lust
 * becomes adultery, adultery becomes conspiracy, and conspiracy becomes
 * murder. The chapter is told with biblical restraint — no condemnation, only
 * fact, and a single line at the end that carries the weight of heaven: "But
 * the thing that David had done displeased the Lord."
 *
 * This is a chapter about how even the most faithful can fall, and how sin
 * compounds. It is also a chapter about the powerlessness of a woman in a
 * king's presence, and the integrity of a foreign convert who puts covenant
 * above his king's wishes.
 */
export const SAMUEL_2_11: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 11,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 17 },
  intros: [
    'The eleventh chapter of 2 Samuel tells a story that has echoed through two thousand years of Scripture commentary and spiritual reckoning. It begins with a sentence that seems innocent — "It came to pass, after the year was expired, at the time when kings go forth to battle, that David sent Joab, and his servants with him, and all Israel... But David tarried still at Jerusalem." A king, at the moment he should have been leading his armies, remained at home.',
    'What follows is one of Scripture&apos;s starkest accounts of moral deterioration. In just a few days, a moment&apos;s lustful glance becomes adultery, adultery becomes conspiracy to deceive, and conspiracy becomes premeditated murder. The text does not judge — it simply tells. And at the chapter&apos;s end, with the king remarried and satisfied, the Lord pronounces His verdict: "But the thing that David had done displeased the Lord." A kingdom built on faith has, for a moment, been built on lies. The chapter tests every reader: Can you see yourself in David? Can you see the woman Bathsheba, trapped in a power that took from her what was not the king&apos;s to take?',
  ],

  opener: {
    matchArtist: /rembrandt|caravaggio|tissot/i,
    matchTitle: /david|bathsheba|roof|uriah/i,
    caption: 'A King Falls — The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 11',
    quote:
      'A king who abandoned his calling fell into the pattern of all temptation: a look, a taking, a covering, a deeper sin to hide the first. In the end, the Lord&apos;s judgment was quiet: "But the thing that David had done displeased the Lord."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 11 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 11:1 — When Kings Go to Battle, David Tarried ─────────── */
    {
      ref: '2 Samuel 11:1',
      title: 'When Kings Go to Battle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, after the year was expired, at the time when '),
                hg('kings go forth to battle', 's11-kings-battle'),
                t(', that David sent Joab, and his servants with him, and all Israel; and they destroyed the children of Ammon, and besieged Rabbah. But '),
                hg('David tarried still at Jerusalem', 's11-tarried'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-kings-battle',
          html:
            'The refrain is clear: "at the time when kings go forth to battle." This is the hour for a king to lead. The Ammonites are under siege at Rabbah. The armies of Israel are in the field, under Joab&apos;s command. This is the moment David&apos;s presence is most needed.',
        },
        {
          kind: 'commentary',
          id: 's11-tarried',
          html:
            'But David stayed in Jerusalem. The word "tarried" (yashab) carries a sense of lingering, remaining, sitting still. He stayed behind. And in that moment of abandonment — the moment he was not where his calling demanded he be — the door to temptation opened.',
        },
        {
          kind: 'hebrew',
          id: 's11-yashab',
          title: 'Yashab — To Sit, Remain, Linger',
          script: 'יָשַׁב',
          translit: '<strong>Yashab</strong> · to sit down; to remain; to dwell',
          description:
            'The verb yashab suggests not just being absent, but settling in. David did not accidentally stay behind. He remained. He lingered. He made a place for himself away from his duty. This is the first step toward all that follows — not a sudden temptation, but an abandonment of calling.',
        },
        {
          kind: 'carry',
          html:
            'Sin does not often arrive as a thunderbolt. It arrives as an absence — the moment we step away from what we are called to do and settle into what is comfortable. A marriage falters not always because of a dramatic betrayal, but because someone stopped showing up. A faith weakens not always because of a crisis, but because someone lingered in a place they were never meant to be. Where have you abandoned your post?',
        },
        {
          kind: 'reflection',
          id: 's11-tarried',
          prompt:
            'When have you been called to something difficult, and chosen instead to linger in comfort? What opened the door to that choice?',
        },
      ],
    },

    /* ─── 2 Samuel 11:2–4 — I-Saw, I-TOOK ────────────────────────────────── */
    {
      ref: '2 Samuel 11:2–4',
      title: 'From the Roof: The Look, the Taking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('And it came to pass in an eveningide, that David arose from off his bed, and walked upon the roof of the king&apos;s house: and from the roof he '),
                hg('saw a woman washing herself', 's11-saw-woman'),
                t('; the woman was very beautiful to look upon.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And David sent and inquired after the woman. And one said, Is not this Bathsheba, the daughter of Eliam, the '),
                hg('wife of Uriah the Hittite', 's11-uriah'),
                t('?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And David sent messengers, and took her; and she came in unto him, and '),
                hg('he lay with her', 's11-lay-with-her'),
                t('; (for she was purified from her uncleanness:) and she returned unto her house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-saw-woman',
          html:
            'The text is almost cinematically simple: David arose, walked on the roof, saw a woman washing. She was beautiful. This is not a chance encounter — Bathsheba is bathing in a visible place, but the king is in a position to see her from his private rooftop. What begins as a look becomes the seed of everything that follows. And the text makes the woman beautiful, not shameful. She is not blamed for being seen.',
        },
        {
          kind: 'commentary',
          id: 's11-uriah',
          html:
            'David inquires. He learns her name: Bathsheba, daughter of Eliam. He learns that she is the wife of Uriah. Uriah the Hittite — a foreigner, a convert, a soldier in David&apos;s own army. She is not available. She is bound by covenant. And David&apos;s response is to send messengers and take her. There is no seduction here, no courtship — only power. A king calls, and a woman must come.',
        },
        {
          kind: 'commentary',
          id: 's11-lay-with-her',
          html:
            'The text is restrained but explicit: "he lay with her." The text notes, in a parenthetical that protects Bathsheba&apos;s dignity, that she had just completed her period of purification, making intercourse permissible under the law. She could have been in no doubt about what was happening. And then she returned to her house. The verse gives us only this: the act, and the return. Bathsheba&apos;s inner experience is left to the reader to imagine.',
        },
        {
          kind: 'hebrew',
          id: 's11-chata',
          title: 'Chata — To Miss the Mark, To Sin',
          script: 'חָטָא',
          translit: '<strong>Chata</strong> · to sin; to miss the mark; to err',
          description:
            'The sin pattern is as old as the Garden: I-saw-I-took. Eve saw that the fruit was good, took, and ate. Achan saw, took, and hid. David saw, inquired, and took. The root word for sin in Hebrew is chata — literally, to miss the mark. An archer misses his target. So does a person who turns aside from the path set before them. David saw the mark (his calling), and shot elsewhere.',
        },
        {
          kind: 'carry',
          html:
            'Bathsheba did not initiate this encounter. A king in power called, and she came. The text does not blame her. She was the wife of another man; the violation was David&apos;s. But this chapter is addressed also to those who, like David, have power — to see, to take, to move others without their consent. The beauty you see is not yours to take. The person you desire is not your possession. The moment you inquire and discover a reason not to proceed, that is the moment to stop. David did not stop.',
        },
        {
          kind: 'reflection',
          id: 's11-saw',
          prompt:
            'When have you seen something beautiful and felt the impulse to take it, to possess it? What would it have meant to look, inquire, learn it was not yours, and turn away?',
        },
      ],
    },

    /* ─── 2 Samuel 11:5–13 — The Cover-Up: Bring Him Home ────────────────── */
    {
      ref: '2 Samuel 11:5–13',
      title: 'The Concealment Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 5,
              spans: [
                t('And the woman '),
                hg('conceived, and sent and told David', 's11-conceived'),
                t(', saying, I am with child.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And David sent to Joab, saying, Send me Uriah the Hittite. And Joab sent Uriah.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And when Uriah was come unto him, David demanded of him how Joab did, and how the people did, and how the war prospered.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And David said to Uriah, Go down to thy house, and '),
                hg('wash thy feet', 's11-wash-feet'),
                t('. And Uriah departed out of the king&apos;s house, and there followed him a mess of meat from the king.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But Uriah '),
                hg('slept at the door of the king&apos;s house with all the servants of his lord', 's11-uriah-slept'),
                t(', and went not down to his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-conceived',
          html:
            'Bathsheba is pregnant. She tells David. And now his sin compounds — no longer merely adultery, but conspiracy. David&apos;s immediate thought is not confession, not repentance, but cover-up. Bring Uriah home. Let him lie with his wife. Make it appear that the child is his.',
        },
        {
          kind: 'commentary',
          id: 's11-wash-feet',
          html:
            'The phrase "wash thy feet" is a euphemism for intimate relations. David is not being subtle. He is telling Uriah: go home and lie with your wife. Make the child appear to be yours. The king has given him leave to depart. Everything is set for the deception to work.',
        },
        {
          kind: 'commentary',
          id: 's11-uriah-slept',
          html:
            'But Uriah does not go home. He sleeps at the door of the king&apos;s house with the servants. This is a stunning rebuke — spoken in silence. Uriah will not take comfort while his brothers are in the field, under siege. The covenant of war binds him. His comrades are exposed, vulnerable. How can he lie in a bed while they lie in tents?',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 10,
              spans: [
                t('And when they had told David, Uriah went not down unto his house, David said unto Uriah, '),
                hg('Camest thou not from thy journey', 's11-journey'),
                t('? why then didst thou not go down unto thine house?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Uriah said unto David, The ark, and Israel, and Judah, abide in tents; my lord Joab, and the servants of my lord, are encamped in the open fields; shall I then go into mine house, to eat and to drink, and to lie with my wife? as thou livest, and as thy soul liveth, I will not do this thing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-journey',
          html:
            'David presses. Why did you not go home? You have traveled from the front. Rest. Refresh yourself. But Uriah&apos;s answer is a masterpiece of faithfulness. He speaks of the ark, Israel, Judah — all in tents. He speaks of Joab and the soldiers in the field. How can he, a soldier, a convert to the covenant, rest in comfort while his brothers suffer?',
        },
        {
          kind: 'hebrew',
          id: 's11-brit',
          title: 'Brit — Covenant',
          script: 'בְרִית',
          translit: '<strong>Brit</strong> · covenant; agreement; bond',
          description:
            'Uriah will not break the solidarity of the camp. He is bound by brit — covenant — not only to his wife, but to the Lord and to his brothers. A foreigner, a Hittite, demonstrates a covenant-mindedness that the Lord&apos;s anointed has abandoned. The foreign convert shames the king.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 12,
              spans: [
                t('And David said to Uriah, Tarry here today also, and tomorrow I will let thee depart. So Uriah abode in Jerusalem that day, and the morrow.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And when David had called him, he did eat and drink before him; and he made him drunk: and at even he went out to lie on his bed with the servants of his lord, but went not down to his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-drunk',
          html:
            'David tries again. He feeds Uriah, wines him, makes him drunk. Even inebriated, Uriah refuses to break covenant. He sleeps with the servants. The deception has failed. And now David must move to a darker plan.',
        },
        {
          kind: 'carry',
          html:
            'Uriah the foreigner stands as a mirror to David the king. David has power, resources, and the authority to issue commands. Uriah has only integrity — and it is enough to stand against a king. In your own life, have you ever had to stand against someone more powerful because of a covenant you had made? Did you find strength in it, even when it would have been easier to give in?',
        },
        {
          kind: 'reflection',
          id: 's11-uriah-stands',
          prompt:
            'Uriah refuses to comfort himself while his brothers suffer in battle. What is a time when you have chosen discomfort or sacrifice because others were suffering?',
        },
      ],
    },

    /* ─── 2 Samuel 11:14–27 — The Murder by Letter ───────────────────────── */
    {
      ref: '2 Samuel 11:14–27',
      title: 'The Final Step: Murder by Letter',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 14,
              spans: [
                t('And it came to pass in the morning, that David wrote a letter to Joab, and sent it by the hand of Uriah.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he wrote in the letter, saying, Set ye Uriah in the forefront of the hottest battle, and '),
                hg('retire ye from him, that he may be smitten, and die', 's11-smitten-die'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-smitten-die',
          html:
            'And now the final descent. David moves from adultery to conspiracy to murder. The plan is cold and calculated. Uriah himself will carry the letter that orders his own death. He will be placed in the forefront of the hottest battle. The soldiers will retreat, and he will fall. It will look like the fortune of war. No one will know.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 16,
              spans: [
                t('And it came to pass, when Joab observed the city, that he assigned Uriah unto a place where he knew that valiant men were.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the men of the city went out, and fought with Joab: and there fell some of the people of the servants of David; and '),
                hg('Uriah the Hittite died also', 's11-uriah-died'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-uriah-died',
          html:
            'The plan works. Uriah, the faithful convert, the man who would not lie with his wife, falls in the front lines. Other soldiers die too — collateral damage to cover David&apos;s crime. The man who stood with integrity is now dead, and only David knows the reason.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 18,
              spans: [
                t('Then Joab sent and told David all the things concerning the war;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And charged the messenger, saying, When thou hast made an end of telling the matters of the war unto the king,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And if so be that the king&apos;s wrath be kindled, and he say unto thee, Wherefore approached ye so nigh unto the city when ye did fight? knew ye not that they would shoot from the wall?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Who smote Abimelech the son of Jerubbesheth? did not a woman cast a piece of a millstone upon him from the wall, that he died in Thebez? why went ye nigh the wall? then say thou, Thy servant Uriah the Hittite is dead also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-messenger',
          html:
            'Joab, knowing what he has done, prepares his message carefully. He anticipates the king&apos;s response. And when it comes, Joab&apos;s messenger delivers the news as the finale: "Thy servant Uriah the Hittite is dead also." Not condemned, not named prominently — just added to the list of casualties. Just mentioned in passing. But David will know.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 22,
              spans: [
                t('So the messenger went, and came and shewed David all that Joab had sent him for.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the messenger said unto David, Surely the men prevailed against us, and came out unto us into the field, and we were upon them even unto the entering of the gate.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the shooters shot from off the wall upon thy servants; and some of the king&apos;s servants be dead; and thy servant Uriah the Hittite is dead also.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then David said unto the messenger, Thus shalt thou say unto Joab, Let not this thing displease thee, for the sword devoureth one as well as another: make thy battle more strong against the city, and overthrow it: and encourage thou him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-encourage-him',
          html:
            'David receives the news of the death with ease. "Let not this thing displease thee, for the sword devoureth one as well as another." It is a matter-of-fact response. Men die in war. Uriah is dead. So is everyone else. The crime has been committed. Now it is finished. Or so David thinks.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 26,
              spans: [
                t('And when the wife of Uriah heard that Uriah her husband was dead, she made lamentation for her husband.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And when the mourning was past, David sent and fetched her to his house, and she became his wife, and bare him a son. But the thing that David had done '),
                hp('displeased the Lord', 's11-displeased'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's11-displeased',
          html:
            'Bathsheba mourns her husband. And then, when the mourning is past, David takes her into his house. She becomes his wife. She bears him a son. Everything is now settled. The problem is solved. Except: "But the thing that David had done displeased the Lord." It is the final word of the chapter. Not a curse, not a dramatic pronouncement, but a simple, profound statement of God&apos;s displeasure. What man has hidden, God has seen. What appears to be concluded in heaven is just beginning.',
        },
        {
          kind: 'hebrew',
          id: 's11-ra',
          title: 'Ra — Evil, That Which Displeases',
          script: 'רַע',
          translit: '<strong>Ra</strong> · evil; badness; that which is displeasing to God',
          description:
            'The final word is ra — displeasing, evil, not-good. Not "The Lord was angry," but "The thing displeased the Lord." God&apos;s disapproval is quiet, restrained, final. What David thought was finished is only beginning. The Lord has seen.',
        },
        {
          kind: 'carry',
          html:
            'Sin often feels contained when we first commit it. We make a choice, we hide it, we move on. We live as though it is concluded. But the chapter ends not with David&apos;s satisfaction, but with heaven&apos;s sorrow. The Lord has seen what we have done. And that seeing changes everything — not immediately, perhaps, but it changes the trajectory of all that follows. There is no hidden thing that escapes God&apos;s attention. And more than that: there is no hidden sin that does not matter to Him.',
        },
        {
          kind: 'reflection',
          id: 's11-displeased',
          prompt:
            'The chapter ends not with David&apos;s success, but with the Lord&apos;s displeasure. Have you ever felt the weight of knowing that God sees what you have tried to hide? What happened next?',
        },
      ],
    },

    /* ─── Christ Connection and Final Word ─────────────────────────────────── */
    {
      ref: 'The King Who Never Abandoned His Post',
      title: 'Christ Connection',
      blocks: [
        {
          kind: 'christ',
          id: 's11-christ',
          title: 'Christ — The King Who Never Failed',
          html:
            'David abandoned his post. He tarried when he should have gone forth. He took what was not his to take. He covered up with conspiracy and murder. But Christ — the true King, the King from David&apos;s own line — never abandoned His post. When He could have used His power for Himself, He used it for others. When He could have hidden His struggle, He bore it openly. When He could have called down armies to defend Himself, He went to the cross. Jesus did what David did not do. And more: Jesus took upon Himself the punishment that David&apos;s sin deserved. The murder, the adultery, the conspiracy — all of it was placed on Christ at Calvary. David learned repentance. We are invited to receive forgiveness.',
        },
        {
          kind: 'carry',
          html:
            'This chapter may have brought you face to face with your own capacity for sin. You may see in David someone you have been, someone you fear becoming, someone you love who fell in this same way. The grace of this story is that it does not end in David&apos;s condemnation. Chapter 12 brings Nathan, and David&apos;s repentance. Psalm 51 gives voice to a man who has been shattered by his own sin and finds his way back to God. The door to that journey opens here — in the moment when we stop hiding, stop pretending that the Lord does not see, and allow ourselves to be seen.',
        },
      ],
    },
  ],
};
