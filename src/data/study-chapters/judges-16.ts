import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 16 — Samson&apos;s fall and death. A tragic narrative of a man
 * whose strength was legendary but whose self-knowledge was catastrophic.
 * From Gaza harlot to Delilah&apos;s betrayal, the chapter traces sin&apos;s
 * slow erosion: truth told piece by piece, God&apos;s presence lost without
 * realization, and finally, a prayer from the rubble that God hears.
 */
export const JUDGES_16: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 16,

  estimatedMinutes: { 5: 10, 10: 17, 15: 22 },
  intros: [
    'Samson has defeated Philistines with the jawbone of a donkey, carried away the gates of Gaza, and left a trail of burned crops and burnt temples behind him. But chapter 16 shows what every reader has sensed since chapter 13: a man with superhuman strength and deeply subhuman judgment. He goes in unto a harlot in Gaza, telling himself he is invincible. He falls in love with Delilah and tells himself he can hold back the truth. He tells the truth to Delilah and tells himself God will wake him as before. Each time, he is catastrophically, publicly wrong.',
    'This chapter is the story of slow erosion. Not the sudden collapse of an evil deed—the grinding loss of God&apos;s presence by degrees, accompanied by the shattering confidence that we ourselves are still strong. Samson is a warning and a mirror. But the chapter ends not with his failure but with his prayer, and with the fact that God heard it. Even spectacular failure is not the final word.',
  ],

  sections: [
    /* ─── Judges 16:1–3 — Gaza and the Gates Carried Away ────────────── */
    {
      ref: 'Judges 16:1–3',
      title: 'Gaza and the Gates Carried Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('Then went Samson to '),
                hy('Gaza', 'judges-gaza'),
                t(', and saw there a harlot, and '),
                hg('went in unto her', 'j16-harlot'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-harlot',
          html:
            'The chapter opens not with Samson in battle, but in a place he should never be. A harlot in Gaza—enemy territory. No prelude, no rationalization, no resistance. The narrative moves fast, as if Samson himself moved through this decision without pausing. We will see that pattern repeat with Delilah.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 2,
              spans: [
                t('And it was told the Gazites, '),
                hp('Samson is come hither', 'j16-trapped'),
                t('. And they '),
                hg('compassed him in', 'j16-wait'),
                t(', and laid wait for him all night in the gate of the city: and were quiet all the night, saying, In the morning, when it is day, we shall kill him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-wait',
          html:
            'The Gazites trap him inside the walled city. The gate is shut. It is night. For anyone else, it would be the end of the story. But Samson is not anyone else—and part of the chapter&apos;s sadness is that he has learned to rely on that fact, to forget that his strength is not his own.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 3,
              spans: [
                t('And Samson lay till midnight; and at midnight he arose, and '),
                hg('took the doors of the gate of the city, and the two posts', 'j16-gates'),
                t(', and '),
                hy('went away with them, bar and all', 'hebrew-daleth'),
                t(', and put them upon his shoulders, and carried them up to the top of an hill that is before Hebron.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-gates',
          html:
            'Samson simply removes the gates and carries them away. The feat is breathtaking and terrible. He walks out of the trap as if it were a joke, leaving a city with broken walls. But notice the trajectory: he uses his strength to escape sin, not to confront it, not to repent, but to walk away and continue. This is the beginning of the end.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-daleth',
          title: 'Daleth — &ldquo;door&rdquo;',
          script: 'דֶלֶת',
          translit: '<strong>daleth</strong> · a door or gate; a barrier',
          description:
            'Samson carries the very barrier meant to trap him. The text is almost mocking: he turns the weapon against his enemy. He does not see that he is walking further into captivity with every step.',
        },
        {
          kind: 'carry',
          html:
            'When you find yourself caught in a sin and able to escape it through sheer willpower—through talent, money, looks, intelligence, charisma—you face a peculiar danger. You can get away from the trap and still be trapped. You walk out of Gaza carrying the gates. You tell yourself you are strong. And the next place you go, you find another harlot, another Delilah. The ability to escape a consequence is not the same as facing what put you there.',
        },
        {
          kind: 'reflection',
          id: 'gaza-reflection',
          prompt: 'When have you used your talent or ability to escape the consequences of a choice, rather than to face it? What did you tell yourself about your strength at that moment?',
        },
      ],
    },

    /* ─── Judges 16:4–5 — Delilah&apos;s Bargain ──────────────────────── */
    {
      ref: 'Judges 16:4–5',
      title: 'Delilah&apos;s Bargain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 4,
              spans: [
                t('And it came to pass afterward, that he loved a woman in the valley of '),
                hy('Sorek', 'j16-sorek'),
                t(', whose name was '),
                hy('Delilah', 'hebrew-delilah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-love-delilah',
          html:
            'Samson &ldquo;loved&rdquo; Delilah. The word suggests real attachment, not mere lust. This is what makes the chapter bite: not that Samson slept with an enemy, but that he loved her. He made himself vulnerable to her in a way Gaza never required.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-delilah',
          title: 'Delilah — &ldquo;the flirtatious one&rdquo;',
          script: 'דְּלִילָה',
          translit: '<strong>delilah</strong> · possibly from <strong>dal</strong>, &ldquo;weak&rdquo; or &ldquo;poor&rdquo;; or from a root meaning &ldquo;to flirt&rdquo;',
          description:
            'Her name itself is ambiguous. &ldquo;Flirtatious.&rdquo; &ldquo;The weak one.&rdquo; A name that tells you how he saw her, not who she was.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('And the lords of the Philistines came up unto her, and said unto her, Entice him, and see wherein his great strength lieth, and '),
                hp('by what means we may prevail against him', 'j16-bargain'),
                t(', that we may bind him to afflict him: and we will give thee every one of us eleven hundred pieces of silver.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-bargain',
          html:
            'The lords come to Delilah with a price: 1,100 pieces of silver. They know what Samson cannot see: that the one he loves is negotiable. That his strength is worthless against the hidden economy of betrayal. They do not ask her to kill him. They ask her to trap him. And she agrees.',
        },
        {
          kind: 'carry',
          html:
            'Love told half the truth is the most dangerous lie we tell. Samson loved Delilah. Delilah took his money and his information. The Philistines loved Delilah less than the opportunity. The lesson is not &ldquo;never love.&rdquo; It is: watch the places where you tell yourself that love means not asking hard questions, not protecting yourself, not insisting on truth. The closest people to you are the most dangerous when their allegiance is elsewhere.',
        },
        {
          kind: 'reflection',
          id: 'delilah-reflection',
          prompt: 'Have you ever been on either end of a Delilah betrayal—loving someone who was negotiable, or being the one with a hidden price? What did love cost?',
        },
      ],
    },

    /* ─── Judges 16:6–14 — The Three Deceptions ──────────────────────── */
    {
      ref: 'Judges 16:6–14',
      title: 'The Three Deceptions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 6,
              spans: [
                t('And Delilah said unto Samson, Tell me, I pray thee, wherein thy great strength lieth, and wherewith thou mightest be bound to afflict thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-tell-me',
          html:
            'Notice the language: &ldquo;wherewith thou mightest be bound to afflict thee.&rdquo; Delilah speaks as though the question is purely theoretical—to harm you, yes, but if you tell me. It is the language of intimacy wrapped around a knife. She has learned to ask about his destruction using the tone of pillow talk.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 7,
              spans: [
                t('And Samson said unto her, If they bind me with '),
                hg('seven green withs that were never dried', 'j16-withs'),
                t(', then shall I be weak, and be as another man.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then the lords of the Philistines brought up to her seven green withs which had not been dried, and she bound him with them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Now there were men lying in wait, abiding with her in the chamber. And she said unto him, The Philistines be upon thee, Samson. And he brake the withs, as a thread of tow is broken when it toucheth the fire: and his strength was not known.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-withs',
          html:
            'Samson&apos;s first lie is confident: &ldquo;green withs.&rdquo; He is testing. He tells her a lie, hoping to stumble her, to prove she loves him—and she does not even hesitate. She simply does it, and when he breaks the withs, Samson knows he has been tested. But does he leave? No. He stays.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 10,
              spans: [
                t('And Delilah said unto Samson, Behold, thou hast mocked me, and told me lies: now tell me, I pray thee, wherewith thou mightest be bound.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he said unto her, If they bind me fast with '),
                hg('new ropes that never were occupied', 'j16-ropes'),
                t(', then shall I be weak, and be as another man.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Delilah therefore took new ropes, and bound him therewith, and said unto him, The Philistines be upon thee, Samson. And he brake them off his arms like a thread.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-ropes',
          html:
            'Second lie. Same pattern. She accuses him—&ldquo;thou hast mocked me&rdquo;—using the language of hurt to pull another confession. And Samson, moved by her accusation, tells another lie. He is not testing anymore. He is performing fidelity to the test itself.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 13,
              spans: [
                t('And Delilah said unto Samson, Hitherto thou hast mocked me, and told me lies: tell me wherewith thou mightest be bound. And he said unto her, If thou weavest the seven locks of my head with the web, and fastenest it with the pin of the beam, then shall I be weak as another man.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And she fastened it with the pin of the beam, and said unto him, The Philistines be upon thee, Samson. And he awaked out of his sleep, and went away with the pin of the beam and the web.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-web',
          html:
            'Third lie. Now Samson goes even further—he suggests she weave his hair into the loom itself. He is almost playing with her, almost enjoying the test. And when he breaks free again, he walks away &ldquo;with the pin of the beam and the web&rdquo;—literally dragging the evidence of her setup with him. He cannot ignore it anymore. But he still does not leave.',
        },
        {
          kind: 'carry',
          html:
            'Three times Delilah says, &ldquo;thou hast mocked me.&rdquo; Three times Samson tells another lie to prove his love. The pattern is: I test you, you fail, I accuse you, you prove yourself by testing again. It is the rhythm of codependence. At what point is it no longer love and simply habit? When does loyalty to testing become betrayal of yourself?',
        },
        {
          kind: 'reflection',
          id: 'deception-reflection',
          prompt: 'Where in your life are you repeating a test that someone is failing to pass, hoping they will change the answer next time?',
        },
      ],
    },

    /* ─── Judges 16:15–17 — The Secret Revealed ──────────────────────── */
    {
      ref: 'Judges 16:15–17',
      title: 'The Secret Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 15,
              spans: [
                t('And she said unto him, '),
                hp('How canst thou say, I love thee, when thine heart is not with me', 'j16-love-language'),
                t('? thou hast mocked me these three times, and hast not told me wherein thy great strength lieth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-love-language',
          html:
            'This is the cruelest moment in the chapter. Delilah uses the language of relationship to demand destruction. &ldquo;If you loved me, you would tell me the truth.&rdquo; She has learned exactly how to wound him. She appeals to something deeper than suspicion—she appeals to love itself, and makes truth-telling to her feel like the proof of love.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 16,
              spans: [
                t('And it came to pass, when she pressed him daily with her words, and urged him, so that his soul was '),
                hy('vexed unto death', 'j16-vexed'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-vexed',
          html:
            'The relentless pressure. &ldquo;Daily.&rdquo; &ldquo;Urged him.&rdquo; His soul was &ldquo;vexed unto death.&rdquo; Not threatened unto death—<em>vexed</em>. Worn down. Made sick. She has weaponized time itself. This is how erosion happens: not by one decisive blow, but by the same knife at the same spot, day after day.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 17,
              spans: [
                t('That he told her all his heart, and said unto her, There hath not come a razor upon mine head; for I have been a '),
                hy('Nazarite unto God from my mother&apos;s womb', 'hebrew-nazir'),
                t(': '),
                hp('if I be shaven, then my strength will go from me, and I shall become weak, and be like any other man', 'j16-secret'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-secret',
          html:
            'The real truth at last. Not withs, not ropes, not woven hair—his vow. His consecration. The unbroken covenant he has had with God since before his birth. He does not say the strength comes from the hair—he says if the hair is shaven, the strength will go. The strength is conditional on the vow. The moment he tells her this, everything is over. He has named the thing that made him holy, and named it to an enemy.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nazir',
          title: 'Nazir — &ldquo;Nazarite&rdquo;',
          script: 'נָזִיר',
          translit: '<strong>nazir</strong> · from <strong>nazar</strong>, &ldquo;to separate, to dedicate&rdquo;',
          description:
            'A Nazarite is set apart for God. The vow is ancient: no strong drink, no razor, no contact with the dead. Samson was a Nazarite from the womb. His strength was never his own. It was the strength of a man whose life belonged entirely to God.',
        },
        {
          kind: 'carry',
          html:
            'There is something sacred in each of us that is not for sale, not for anyone, not even for love. If you find yourself explaining that sacred thing—your boundaries, your values, your core vow—to someone who has proven they want to use it against you, you have already told them the secret. The only power left is to stop the conversation. To say, &ldquo;I told you the truth, and you chose betrayal. I choose not to watch.&rdquo;',
        },
        {
          kind: 'reflection',
          id: 'secret-reflection',
          prompt: 'What is the sacred boundary in you that you keep explaining and re-explaining to someone who has not earned it? What would it take for you to stop talking and start protecting?',
        },
      ],
    },

    /* ─── Judges 16:18–20 — &ldquo;He Wist Not the Lord Was Departed&rdquo; */
    {
      ref: 'Judges 16:18–20',
      title: '&ldquo;He Wist Not the Lord Was Departed&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 18,
              spans: [
                t('And when Delilah saw that he had told her all his heart, she sent and called for the lords of the Philistines, saying, Come up this once: for he hath shewed me all his heart. Then the lords of the Philistines came up unto her, and brought money in their hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-brought-money',
          html:
            'She calls them. She collects. She has what she was promised. The transaction is complete. Samson is asset stripping his own soul for someone who has already calculated his price.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 19,
              spans: [
                t('And she made him sleep upon her knees; and she called for a man, and she caused him to shave off the seven locks of his head; and she began to afflict him, and '),
                hg('his strength went from him', 'j16-strength-gone'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-strength-gone',
          html:
            'He sleeps on her knees—a picture of utter trust, utter vulnerability. And while he sleeps, she orders his head shaved. The loss is physical and real. His strength goes.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 20,
              spans: [
                t('And she said, The Philistines be upon thee, Samson. And he awoke out of his sleep, and said, I will go out as at other times before, and '),
                hy('shake myself', 'j16-shake'),
                t('. '),
                hp('And he wist not that the Lord was departed from him', 'j16-lord-departed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-lord-departed',
          html:
            'Perhaps the most chilling sentence in the Old Testament. &ldquo;He wist not that the Lord was departed from him.&rdquo; Samson woke without his strength. And he does not know why. He does not know that the vow is broken. He does not know that God is gone. He thought he could shake himself as before. He could not. And the worst part: he did not realize what had happened. The strength of self-confidence outlasted the substance of God&apos;s empowering. We can lose God&apos;s presence and not realize it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shake',
          title: 'Naa — &ldquo;to shake, to move&rdquo;',
          script: 'נוּעַ',
          translit: '<strong>naa</strong> · to shake, to stir oneself, to rouse as from sleep',
          description:
            'The word he used before the battles when the Spirit came upon him and he moved in God&apos;s power. Now he wakes and thinks to shake himself as before. The motion is the same. The power is gone.',
        },
        {
          kind: 'carry',
          html:
            'This is the warning that terrifies every believer who reads it carefully. You can do the same motions tomorrow that worked today, and not realize the power is gone. You can speak words that used to come alive, and find they are now just words. You can walk into a situation confident in strength that left in the night while you slept. The only antidote is not confidence. It is attentiveness. Regular, painful honesty about whether you are walking with God or walking alone and <em>thinking</em> you are not.',
        },
        {
          kind: 'reflection',
          id: 'departed-reflection',
          prompt: 'Where in your life might you be moving as if God is with you, but without checking whether He actually is? What would it take to wake up to that?',
        },
      ],
    },

    /* ─── Judges 16:21–27 — Captured, Blinded, Grinding ──────────────── */
    {
      ref: 'Judges 16:21–27',
      title: 'Captured, Blinded, Grinding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 21,
              spans: [
                t('But the Philistines '),
                hg('took him, and put out his eyes', 'j16-blinded'),
                t(', and brought him down to Gaza, and bound him with fetters of brass; and '),
                hp('he did grind in the prison house', 'j16-grinding'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-blinded',
          html:
            'The man who saw a harlot and went in unto her loses his eyes. The irony is not subtle. And he is brought back to Gaza—the place he escaped at the beginning by carrying away the gates. Now he comes back in fetters. The full circle.',
        },
        {
          kind: 'commentary',
          id: 'j16-grinding',
          html:
            'He grinds in the prison house. Not a story, not a trial, not a moment of redemption—just work. The day-to-day, repetitive, humiliating work of a prisoner. This is where the chapter sits for a moment: in the rubble of a life.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 22,
              spans: [
                t('Howbeit '),
                hy('the hair of his head began to grow again', 'j16-hair-grows'),
                t(' after he was shaven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-hair-grows',
          html:
            'A single sentence. No fanfare. The hair grows. God does not entirely withdraw His mercy. The vow can be renewed. The condition for strength can be re-established. In the prison, in the dark, grinding grain, Samson&apos;s hair is growing. This is mercy in its quietest form: not rescue, just restoration of possibility.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 23,
              spans: [
                t('Then the lords of the Philistines gathered them together for to offer a great sacrifice unto Dagon their god, and to '),
                hg('rejoice', 'j16-dagon'),
                t(': for they said, Our god hath delivered Samson our enemy into our hand.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And when the people saw him, they praised their god: for they said, Our god hath delivered into our hands our enemy, and the destroyer of our country, which slew many of us.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And it came to pass, when their hearts were merry, that they said, Call for Samson, that he may make us sport. And they called for Samson out of the prison house; and he made them sport: and they set him between the pillars.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-dagon',
          html:
            'The Philistines gather to celebrate. They have captured Samson. They have taken away his strength, his eyes, his freedom. And now they want him to perform. To &ldquo;make them sport.&rdquo; This is the depth: not only is he captured, he is exhibited. Made into entertainment for the people he fought. The blind man grinding grain is now made to dance.',
        },
        {
          kind: 'carry',
          html:
            'There are people in your life who have seen you at your lowest and wanted to celebrate it. Who would not mind if your defeat became a permanent story. The gift of humiliation is that eventually you stop caring what the crowd thinks. You stop performing for people who gathered to watch you fail. And sometimes, in the very worst moment, when you have nothing left to lose, you finally find God again.',
        },
        {
          kind: 'reflection',
          id: 'prison-reflection',
          prompt: 'Who are the &ldquo;Philistines&rdquo; in your life—people whose joy comes from your shame? What would it cost you to stop performing for them?',
        },
      ],
    },

    /* ─── Judges 16:28–31 — &ldquo;Let Me Die with the Philistines&rdquo; */
    {
      ref: 'Judges 16:28–31',
      title: '&ldquo;Let Me Die with the Philistines&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 26,
              spans: [
                t('And Samson said unto the lad that held him by the hand, Suffer me that I may feel the pillars whereupon the house standeth, that I may lean upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-feel-pillars',
          html:
            'He asks to feel the pillars. To a blind man, touch is the only remaining sense. He is not planning anything yet. He is simply asking permission to know the shape of the thing that holds the house.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 27,
              spans: [
                t('Now the house was full of men and women; and all the lords of the Philistines were there; and there were upon the roof about three thousand men and women, that beheld while Samson made sport.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-three-thousand',
          html:
            'Three thousand. Gathered. Celebrating. Watching him. This is the full weight of the moment: the blindness, the chains, the laughter, the stone pillars, and the knowledge that his life has become a joke to everyone he has ever fought.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 28,
              spans: [
                t('And Samson called unto the Lord, and said, '),
                hp('O Lord God, remember me, I pray thee, and strengthen me, I pray thee, only this once', 'j16-prayer'),
                t(', O God, that I may be at once avenged of the Philistines for my two eyes.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-prayer',
          html:
            '&ldquo;Remember me.&rdquo; This is the prayer of a broken man. Not &ldquo;Make me strong&rdquo; or &ldquo;Save my life.&rdquo; Just &ldquo;Remember me.&rdquo; And then: &ldquo;Strengthen me, only this once.&rdquo; He knows he is asking for something he has no right to. He knows he squandered the strength once. And he prays for it anyway.',
        },
        {
          kind: 'christ',
          id: 'j16-christ',
          title: 'Christ Connection — The Better Samson',
          html:
            'Samson prays a prayer from the rubble and God hears it. His final act kills more Philistines than his life did—but it is an act of judgment on himself as much as on them. He is not the image of sacrifice. He is the image of a man who has exhausted his strength and now uses it one more time, not from faith but from despair. Christ is the better Samson: &ldquo;Out of the abundance of the heart the mouth speaketh&rdquo; (Matt. 12:34). Where Samson spoke lies, Christ spoke truth. Where Samson fled to enemies, Christ walked toward them. Where Samson died taking his enemies with him, Christ died to save them. &ldquo;For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life&rdquo; (John 3:16). Samson&apos;s death was revenge. Christ&apos;s was redemption.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 29,
              spans: [
                t('And Samson took hold of the two middle pillars upon which the house stood, and of one with his right hand, and of the other with his left.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Samson said, '),
                hg('Let me die with the Philistines', 'j16-die-with'),
                t('. And he bowed himself with all his might; and the house fell upon the lords, and upon all the people that were therein.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('So the dead which he slew at his death were more than they which he slew in his life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-die-with',
          html:
            '&ldquo;Let me die with the Philistines.&rdquo; A grim conclusion. Not redemption, not sacrifice, but pulling the temple down on himself and them together. More died in his death than in his life—a tragic glory that echoes the cross, but inverted. Christ&apos;s death brought more to life than His ministry ever could. Samson&apos;s brought more to death than he ever had.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 32,
              spans: [
                t('Then his brethren and all the house of his father came down, and took him, and brought him up, and buried him between Zorah and Eshtaol in the buryingplace of Manoah his father. And he judged Israel twenty years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j16-buried',
          html:
            'His brothers come for him. They bury him. The life that became a spectacle is given the dignity of a grave. And a simple epitaph: &ldquo;He judged Israel twenty years.&rdquo; Not &ldquo;He was strong.&rdquo; Not &ldquo;He won.&rdquo; Just that he led, for two decades, a people who needed leading. The last word on Samson is not his death. It is his rule.',
        },
        {
          kind: 'carry',
          html:
            'Hebrews 11:32 includes Samson in the roll call of the faithful: &ldquo;Samson...obtained a good report through faith&rdquo; (Heb. 11:39). Samson—the liar, the betrayed, the captured, the blinded. Included. His whole life was disqualifying. But his prayer at the end—&ldquo;Remember me&rdquo;—was enough. God does not erase what happened. But He does not leave you in the rubble either. The question is not whether you will be perfect. The question is whether you will pray.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'prayer-reflection',
          prompt: 'What is the prayer you need to pray from the rubble of something you broke? What would it look like to ask God to remember you even when you have forgotten yourself?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 16',
    quote:
      '&ldquo;He wist not that the Lord was departed from him.&rdquo; We can lose God&apos;s presence without realizing it. But the hair of his head began to grow again after he was shaven—and God does not entirely withdraw His mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 16 · Study Guide',
  },
};
