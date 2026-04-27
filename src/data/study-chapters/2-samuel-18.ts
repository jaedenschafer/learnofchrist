import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 18 — Absalom's Death & David's Lament
 *
 * The rebellion reaches its climax in the wood of Ephraim, where the forest
 * itself seems to conspire against the rebel son. Absalom, the beautiful, the
 * ambitious, the one who stole hearts and then tried to steal the kingdom,
 * dies not by the king's sword but by three darts through the heart while
 * hanging in an oak tree — a death without dignity, without victory, without
 * a legacy except the pillar he built in vain. But the chapter's heartbreak
 * is not Absalom's death. It is David's response: the cry of a father who
 * would rather have died than lost his rebel son. "Would God I had died for
 * thee, O Absalom, my son, my son!" In this moment of deepest grief, a
 * Christian reader sees the cross — the Father's yes to a prayer that cannot
 * otherwise be answered.
 */
export const SAMUEL_2_18: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 18,

  intros: [
    'The rebellion of Absalom reaches its reckoning in the wood of Ephraim, and the text does not shy away from the chaos and brutality of civil war. Twenty thousand men fall, not primarily by the sword but by the terrain itself — the wood "devoured more people than the sword." In this bloodshed, Absalom dies, not as a king or a martyr, but snagged in an oak tree, a mule beneath him, stripped of glory. Joab ends him with three darts.',
    'Yet the chapter does not end with a military report. It ends with a king weeping. David learns that his rebellion is over, his enemies are fled, his throne is secure — and none of it matters. All he hears is the one question that will break him: "Is the young man Absalom safe?" And when he learns that Absalom is dead, he makes for his chamber and weeps the cry that has echoed through every generation of parents who have lost a child: "Would God I had died for thee, O Absalom, my son, my son!" In that moment, the father&apos;s love transcends the son&apos;s rebellion. And a reader of the New Testament sees, in that cry, a father&apos;s willingness to die rather than lose the one he loves — the exact willingness that led God to give His Son to the cross.',
  ],

  opener: {
    matchArtist: /tissot|delacroix|poussin/i,
    matchTitle: /absalom|oak|battle.*ephraim|david.*weeping/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 18',
    quote:
      'Absalom dies in the wood of Ephraim, and David weeps: "Would God I had died for thee, O Absalom, my son, my son!" A father\'s love is revealed in the moment when all kingdoms fall and only grief remains.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 18 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 18:1–8 — David Sends Out His Army ──────────────────── */
    {
      ref: '2 Samuel 18:1–8',
      title: 'David Sends Out His Army',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('And David numbered the people that were with him, and set captains of thousands and captains of hundreds over them.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And David sent forth a third part of the people under the hand of Joab, and a third part under the hand of Abishai the son of Zeruiah, Joab\'s brother, and a third part under the hand of Ittai the Gittite. And the king said unto the people, I will surely go forth with you myself also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-numbered',
          html:
            'David takes command. He numbers his forces, divides them into three companies, and declares he will march with them. His people have given him their loyalty; he will not ask them to bleed without him. But the next lines reveal that the people know something David has forgotten: a kingdom cannot afford to lose its king.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 3,
              spans: [
                t('But the people said, Thou shalt not go forth: for if we flee away, they will not care for us; neither if half of us die, will they care for us: but now thou art worth ten thousand of us: therefore now it is better that thou succour us out of the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-worth-ten-thousand',
          html:
            'The people speak wisely: "Thou art worth ten thousand of us." If David falls, the kingdom falls. His soldiers understand what every soldier has always known — the commander is not equal to the troops. David himself is the symbol, the authority, the hope. He must stay safe so the kingdom survives. And David yields to their counsel.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 4,
              spans: [
                t('And the king said unto them, What seemeth you best I will do. And the king stood by the gate side, and all the people came out by hundreds and by thousands.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the king commanded Joab and Abishai and Ittai, saying, Deal gently for my sake with the young man, even with '),
                hp('Absalom', 'cmd-absalom'),
                t('. And all the people heard when the king gave all the captains charge concerning '),
                hg('Absalom', 'c-absalom-mercy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cmd-absalom',
          html:
            'David, still the king, still in command, does the only thing left to him: he asks for mercy. "Deal gently for my sake with the young man, even with Absalom." The whole army hears. The captains hear. David wants his soldiers to know: whatever the rebellion, whatever the cost, when you find Absalom — bring him to me alive. Let him live.',
        },
        {
          kind: 'commentary',
          id: 'c-absalom-mercy',
          html:
            'This command sets up the tragedy. David loves his son more than he loves his throne. He would rather have Absalom alive, even in captivity, even in shame, than victorious in death. But mercy cannot always be preserved when passion runs hot and blood is spilling.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 6,
              spans: [
                t('So the people went out into the field against Israel: and the battle was in the wood of '),
                hy('Ephraim', 'c-ephraim-wood'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Where the people of Israel were slain before the servants of David, and there was there a great slaughter that day of twenty thousand men.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For the battle was there scattered over the face of all the country: and the wood '),
                hg('devoured more people', 'c-wood-devoured'),
                t(' that day than the sword devoured.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-ephraim-wood',
          title: 'The Wood of Ephraim',
          script: 'יַעַר אֶפְרָיִם',
          translit: '<strong>Ya\'ar Ephraim</strong> · The forest of Ephraim',
          description:
            'A wild, thickly wooded region east of the Jordan. The terrain itself becomes an enemy here — dense growth, tangled branches, a place where an army cannot maneuver. When the kingdom is in revolt, even creation conspires against the rebel. The wood does not care which side wins; it simply swallows soldiers whole.',
        },
        {
          kind: 'commentary',
          id: 'c-wood-devoured',
          html:
            'A haunting detail: the wood "devoured more people that day than the sword." Not by strategic brilliance or martial valor, but by chaos and terrain, by the raw fact of being lost and tangled in wilderness — more men fall than in direct combat. When a kingdom tears itself apart, it is the land itself that reaps a bloody harvest.',
        },
      ],
    },

    /* ─── 2 Samuel 18:9–15 — Absalom in the Oak Tree ──────────────────── */
    {
      ref: '2 Samuel 18:9–15',
      title: 'Absalom Caught in the Oak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 9,
              spans: [
                t('And '),
                hy('Absalom', 'absalom-name'),
                t(' met the servants of David. And '),
                hy('Absalom', 'c-mule-rider'),
                t(' rode upon a mule: and the mule went under the thick boughs of a great oak, and his head caught hold of the oak, and he was taken up between the heaven and the earth; and the mule that was under him went away.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'absalom-name',
          title: 'Absalom — "Father of Peace"',
          script: 'אַבְשָׁלוֹם',
          translit: '<strong>Av-shalom</strong> · Father of peace; father of wholeness',
          description:
            'The name is bitter irony itself. Absalom means "father of peace," yet he has brought war. He sought to steal the throne and shatter the kingdom. And now, in his moment of capture, the name mocks him — he is the father of nothing but bloodshed, the bringer of anything but peace.',
        },
        {
          kind: 'commentary',
          id: 'c-mule-rider',
          html:
            'Absalom rode on a mule — a sign of nobility, a royal mount. Even in flight, he carried the mark of his pride. And then the forest intercepts him. The thick boughs of a great oak catch his head — whether his long, beautiful hair (which the text noted earlier) or simply his head itself — and he is trapped. The mule goes on; Absalom hangs suspended between heaven and earth, caught, defenseless, alone.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 10,
              spans: [
                t('And a certain man saw it, and told Joab, and said, Behold, I saw '),
                hg('Absalom', 'c-absalom-hanged'),
                t(' hanged in an oak.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-hanged',
          html:
            'A witness. Someone saw him trapped. In that moment, Absalom is utterly defenseless — not fighting, not planning, not charming. Just hanging. Waiting for whatever comes next.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 11,
              spans: [
                t('And Joab said unto the man that told him, And, behold, thou sawest him, and why didst thou not smite him there to the ground? and I would have given thee ten shekels of silver, and a girdle.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the man said unto Joab, Though I should receive a thousand shekels of silver in mine hand, yet would I not put forth mine hand against the king\'s son: for in our hearing the king charged thee, and Abishai, and Ittai, saying, Beware that none touch the young man '),
                hy('Absalom', 'c-absalom-protected-by-word'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Otherwise I should have wrought falsehood against mine own life: for there is no matter hid from the king, and thou thyself wouldst have set thyself against me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-protected-by-word',
          html:
            'This soldier — unnamed, unsung — remembers the king&apos;s charge. Joab offers him silver, tries to tempt him, threatens him with the logic of war: "He is the enemy; kill him and be rewarded." But the soldier says no. He heard David command: "Deal gently with Absalom." And he will not break faith with the king, not for silver, not for glory, not even for a direct order from Joab that might seem to countermand the king&apos;s mercy.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [
                t('Then said Joab, I may not tarry thus with thee. And he took three darts in his hand, and thrust them through the heart of '),
                hp('Absalom', 'c-joab-mercy-broken'),
                t(', while he was yet alive in the midst of the oak.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And ten young men that bare Joab\'s armour compassed about and smote '),
                hg('Absalom', 'c-absalom-final'),
                t(', and slew him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joab-mercy-broken',
          html:
            'Joab will not wait. He will not ask again. He takes three darts and drives them through the heart of a man hanging defenseless in an oak tree. Three darts — a business-like efficiency, the pragmatism of a general who sees a threat and eliminates it. But in doing so, Joab breaks the king&apos;s mercy. He chooses statecraft over love.',
        },
        {
          kind: 'commentary',
          id: 'c-absalom-final',
          html:
            'And then the ten young men circle the body and strike it down. Absalom is finished. No trial, no judgment, no word from the king. Just the cold logic of war: the threat is dead; move on.',
        },
      ],
    },

    /* ─── 2 Samuel 18:16–20 — The Messengers ──────────────────────────── */
    {
      ref: '2 Samuel 18:16–20',
      title: 'The News of Victory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 16,
              spans: [
                t('And Joab blew the trumpet, and the people returned from pursuing after Israel: for Joab held back the people.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they took Absalom, and cast him into a great pit in the wood, and laid a very great heap of stones upon him: and all Israel fled every one to his tent.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-burial-shame',
          html:
            'Absalom is thrown into a pit, his body buried under a great heap of stones — not the burial of a king, but the burial of a traitor. And Israel scatters. The rebellion is over. The kingdom is restored. But at what price?',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 18,
              spans: [
                t('Now Absalom in his lifetime had taken and reared up for himself a pillar in the king\'s dale: for he said, I have no son to keep my name in remembrance: and he called the pillar after his own name: and it is called unto this day '),
                hy('Absalom\'s place', 'c-monument'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-monument',
          title: 'Absalom\'s Pillar — The Monument to Futility',
          script: 'מַצֵּבָה',
          translit: '<strong>Matzevah</strong> · A pillar, a standing stone; a monument',
          description:
            'A monument raised to preserve a name. Absalom built it because he had no sons to carry his name forward. He wanted to be remembered. But what is he remembered for? For this — for a pillar that marks the place of his death, for a moment when a king wept instead of celebrating. Not the legacy he imagined.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 19,
              spans: [
                t('Then said Ahimaaz the son of Zadok, Let me now run, and bear the king tidings, how that the Lord hath avenged him of his enemies.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Joab said unto him, Thou shalt not bear tidings this day, but thou shalt bear tidings another day: but this day thou shalt bear no tidings, because the king\'s son is dead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-news-withheld',
          html:
            'Ahimaaz wants to bring the king news — victory! The enemies are defeated! But Joab stops him. "This day thou shalt bear no tidings, because the king\'s son is dead." Joab understands something Ahimaaz does not: the king does not want victory today. The king wants his son alive. All the triumph in the world cannot change that.',
        },
      ],
    },

    /* ─── 2 Samuel 18:21–32 — The King\'s One Question ──────────────────── */
    {
      ref: '2 Samuel 18:21–32',
      title: 'Is the Young Man Absalom Safe?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('Joab said to Cushi, Go tell the king what thou hast seen. And Cushi bowed himself unto Joab, and ran.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Then said Ahimaaz the son of Zadok yet again to Joab, But howsoever, let me, I pray thee, also run after Cushi. And Joab said, Wherefore wilt thou run, my son, seeing that thou hast no tidings ready?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But howsoever, said he, let me run. And Joab said unto him, Run. And Ahimaaz ran by the way of the plain, and overran Cushi.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-race-tidings',
          html:
            'Ahimaaz runs anyway. He overtakes Cushi. He wants to bring the news first. But he still does not know what news he is bringing — he has not seen Absalom, does not know the cost of this victory. He runs blind, thinking he brings good news.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 24,
              spans: [
                t('And David sat between the two gates: and the watchman went up to the roof over the gate unto the wall, lifted up his eyes, and looked, and behold a man running alone.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the watchman cried, and told the king. And the king said, If he be alone, there is tidings in his mouth. And he came apace, and drew near.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-waiting-king',
          html:
            'David is waiting. He is not celebrating. He is sitting between the two gates, listening. And when he sees a runner coming, he does not ask about the battle, about victory, about the numbers of the dead. He waits.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 26,
              spans: [
                t('And the watchman said, Methinketh the running of the foremost is like the running of Ahimaaz the son of Zadok. And the king said, He is a good man, and cometh with good tidings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-good-man',
          html:
            'David recognizes Ahimaaz by the way he runs. "He is a good man, and cometh with good tidings." David wants to believe. The runner is fast, eager — he must bring good news. It must be good.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 27,
              spans: [
                t('And Ahimaaz called, and said unto the king, All is well. And he fell down to the earth upon his face before the king, and said, Blessed be the Lord thy God, which hath delivered up the men that lifted up their hand against my lord the king.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the king said unto Ahimaaz, '),
                hp('Is the young man Absalom safe?', 'c-absalom-safe'),
                t(' And Ahimaaz answered, When Joab sent the king\'s servant, and me thy servant, I saw a great tumult, but I knew not what it was.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-safe',
          html:
            'Ahimaaz cries "All is well!" He speaks of blessing, of enemies delivered up. But David asks only one question: "Is the young man Absalom safe?" Not "Is the kingdom secure?" Not "Have our enemies been routed?" But "Is Absalom safe?" In that moment, David reveals what matters. Everything else is secondary. Only Absalom matters.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 29,
              spans: [
                t('And the king said, Turn aside, and stand here. And he turned aside, and stood still.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And, behold, Cushi came; and Cushi said, Tidings for my lord the king: for the Lord hath avenged thee this day of all them that rose up against thee.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the king said unto Cushi, '),
                hg('Is the young man Absalom safe?', 'c-repeat-question'),
                t(' And Cushi answered, The enemies of my lord the king, and all that rise against thee to do thee hurt, be as that young man is.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-repeat-question',
          html:
            'David asks again. "Is the young man Absalom safe?" This is his obsession now. Victory means nothing. Tidings of vengeance mean nothing. Cushi\'s answer — indirect, careful, but clear — tells him what he fears: Absalom is dead. "As that young man is" — dead. Like him. Dead.',
        },
      ],
    },

    /* ─── 2 Samuel 18:33 — David\'s Lament ─────────────────────────────── */
    {
      ref: '2 Samuel 18:33',
      title: 'The King\'s Unbearable Cry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 32,
              spans: [
                t('And the king said, Is it well with the child? And Cushi answered, The enemies of my lord the king, and all that rise against thee to do thee hurt, be as that young man is.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And the king was much moved, and went up to the chamber over the gate, and wept: and as he went, thus he said, O my son '),
                hp('Absalom', 'lament-absalom'),
                t(', my son, my son '),
                hp('Absalom', 'lament-absalom-2'),
                t('! would God I had died for thee, O '),
                hp('Absalom', 'lament-absalom-3'),
                t(', my son, my son!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lament-absalom',
          html:
            'The king is "much moved." The text does not record a victory celebration. It records a king ascending to a chamber, closing the door, and weeping with a cry that breaks from his body like blood: "O my son Absalom, my son, my son Absalom!" The repetition of the name, the address to a son now past hearing — this is not the measured grief of a statesman. This is the unbearable cry of a father.',
        },
        {
          kind: 'commentary',
          id: 'lament-absalom-2',
          html:
            'Notice what David does not say. He does not say "Why did you rebel?" He does not say "You brought this on yourself." He does not say "At least the kingdom is safe." He says only: "I wish I had died instead of you." A father\'s love — not conditioned on the son\'s obedience, not dependent on the son\'s worthiness. Simply: I would trade my life for yours. I would go into death if it meant you could live.',
        },
        {
          kind: 'commentary',
          id: 'lament-absalom-3',
          html:
            'This cry — "Would God I had died for thee" — cannot be separated from the New Testament. A Christian reader immediately thinks of John 3:16: "For God so loved the world, that he gave his only begotten Son." And then of Christ Himself, the Son who did lay down His life for rebels, for those who had lifted their hand against Him. David cries a prayer that cannot be answered in human terms. But God — the Father of all — answered it. He gave His Son to die in place of His rebellious children.',
        },
        {
          kind: 'christ',
          id: 'father-sacrifice',
          title: 'Christ Connection — The Father\'s Cry Answered on the Cross',
          html:
            'In David\'s cry — "Would God I had died for thee" — a Christian hears an echo of the Gethsemane prayer, and more: the prayer of every parent who has loved enough to wish they could step into their child\'s pain. David cannot save Absalom. He can only weep. But in the Gospel, this cry is answered. The Father does not remain in the chamber weeping. He sends His Son. And in sending Him to the cross, He does, in a profound sense, die for His children. Jesus bears the death that should be ours. The Father gives His Son. And in that gift, the cry that cannot be answered in any earthly frame is answered: the Father has given everything, has sacrificed the beloved, not to punish the rebellious but to restore them. "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God" (1 John 3:1).',
        },

        {
          kind: 'carry',
          html:
            'If you are a parent, you may have felt a version of David\'s cry — a moment when you would have taken your child\'s pain, their consequence, their judgment, into yourself if you could. If you are a child, you may have been on the receiving end of that love — someone loving you despite your rebellion, your foolishness, your betrayal. And if you are human, you have been loved by the God who did what David could not: He gave His Son. Not because we deserved it. Not because we had repented perfectly. But because He is a Father, and fathers love their children past all reason, past all justice. Past death itself.',
        },
        {
          kind: 'reflection',
          id: 'father-love',
          prompt:
            'Where have you seen a father\'s love refuse to condemn? Where have you felt, or given, love that transcended what was deserved? How does David\'s cry change when you see it answered in the cross?',
        },
      ],
    },
  ],
};
