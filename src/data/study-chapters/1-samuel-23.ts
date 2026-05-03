import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 23 — David Delivers Keilah; Hides in Ziph
 *
 * David receives word that the Philistines are plundering Keilah. He inquires
 * of the Lord, receives the command to go, and delivers the city. But Saul
 * learns David is trapped inside a walled town and moves to besiege him. David
 * inquires again through the ephod: the men of Keilah will betray him. He flees
 * into the wilderness of Ziph, where Jonathan finds him — his last recorded
 * meeting with David — and strengthens his hand in God. The Ziphites betray
 * David's location to Saul. But as Saul closes in, a Philistine invasion
 * forces him to abandon the pursuit. God delivers David through an unexpected
 * providence, and the place is called Sela-hammahlekoth — the rock of escape.
 */
export const SAMUEL_1_23: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 23,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 20 },
  intros: [
    'David has been hunted by Saul for months, living in caves and strongholds. In this chapter, he faces an impossible choice: he can help the people of Keilah who are suffering under Philistine attack, or he can stay hidden. He chooses to deliver them — and immediately discovers that the very people he saves will sell him to his enemy. Twice he inquires of God, each time learning not just what will happen, but what would have happened if he had stayed. And then, in the wilderness, his friend Jonathan appears one last time, not with an army, but with words: "Fear not, the hand of Saul my father shall not find thee." God delivers David not through his own strength, but through an unexpected turn of events — a Philistine attack that interrupts Saul&apos;s pursuit. The rock of escape becomes a monument to providence.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 23',
    quote:
      'David delivered Keilah from the Philistines, but the city would have betrayed him to Saul. Fleeing into the wilderness, his friend Jonathan strengthened his hand in God. When Saul came to capture him, a Philistine invasion drew the king away, and God delivered David through an unexpected mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 23 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 23:1–5 — The Philistines Attack Keilah; David Inquires ── */
    {
      ref: '1 Samuel 23:1–5',
      title: 'The Deliverance of Keilah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('Then they told David, saying, Behold, the '),
                hy('Philistines', 'c-philistines-keilah'),
                t(' fight against Keilah, and they rob the threshingfloors.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Therefore David '),
                hp('inquired of the Lord', 'c-inquire-first'),
                t(', saying, Shall I go and smite these Philistines? And the Lord said unto David, Go, and smite the Philistines, and save Keilah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philistines-keilah',
          html:
            'Keilah is a town south of the wilderness where David is hiding. It is under attack, its people suffering loss. David is a fugitive, a man hunted, with no obligation to help. But the first movement is not toward self-preservation. It is toward those in need.',
        },
        {
          kind: 'commentary',
          id: 'c-inquire-first',
          html:
            'David&apos;s pattern is becoming clear: before he acts, he asks. He does not charge ahead on instinct. He does not calculate risk alone. He brings the question to the Lord, and waits for the answer. "Shall I go?" The Lord answers: "Go, and smite the Philistines, and save Keilah."',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 3,
              spans: [
                t('And David&apos;s men said unto him, Behold, we be afraid here in Judah: how much more then if we come to Keilah against the armies of the Philistines?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then David '),
                hp('inquired of the Lord', 'c-inquire-second'),
                t(' yet again. And the Lord answered him and said, Arise, go down to Keilah; for I will deliver the Philistines into thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inquire-second',
          html:
            'David&apos;s men are afraid. They are already in hiding, already afraid in Judah — how much more in open battle against the Philistines? Their fear is reasonable. But David does not dismiss it or override it. He brings it to the Lord. And the Lord&apos;s answer is not just "go" — it is "I will deliver the Philistines into thine hand." A promise of deliverance, not mere permission.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 5,
              spans: [
                t('So David and his men went to Keilah, and fought with the Philistines, and brought away their cattle, and smote them with a great slaughter; and saved the inhabitants of Keilah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saved-keilah',
          html:
            'David keeps his word. He goes. He fights. He wins. And he "saved the inhabitants of Keilah." The word is <em>malat</em> in Hebrew — to slip away, to escape, to be delivered. David delivers Keilah from the Philistines. He is their savior, their rescuer, in this moment.',
        },

        {
          kind: 'carry',
          html:
            'You may be in a place where your own safety is uncertain, where your own survival is not guaranteed, and you encounter someone else in need. The first instinct is to protect yourself. The second is to ask God. David did both — he brought his fear and his men&apos;s fear directly to God, and then he acted. You do not have to wait until your own house is fully in order before you help someone else. Sometimes the helping itself becomes the deliverance — for them and for you.',
        },

        {
          kind: 'reflection',
          id: 'keilah-deliverance',
          prompt:
            'When have you felt called to help someone in danger even when your own situation was not secure? What did it cost you? What did it teach you about God&apos;s promises?',
        },
      ],
    },

    /* ─── 1 Samuel 23:6–13 — Saul Learns David is in Keilah; David Flees ─── */
    {
      ref: '1 Samuel 23:6–13',
      title: 'The Betrayal Question: Will Keilah Betray Me?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 6,
              spans: [
                t('And it came to pass, when Abiathar the son of Ahimelech fled to David to Keilah, that he came down with an '),
                hy('ephod', 'c-ephod'),
                t(' in his hand.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Saul heard that David was come to Keilah. And Saul said, God hath delivered him into mine hand; for he is shut in, by entering into a town that hath gates and bars.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-ephod',
          title: 'Ephod — the Means of Inquiry',
          script: 'אֵפוֹד',
          translit: '<strong>Ephod</strong> · A priestly garment with Urim and Thummim for divining God&apos;s will',
          description:
            'The ephod was a garment worn by the high priest, attached to which were the Urim and Thummim — perhaps stone-like objects used to cast lots and determine God&apos;s will. When Abiathar fled, he brought the ephod. So David now has a means of inquiring of God directly. This is not guesswork. This is a way to hear God&apos;s answer.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 8,
              spans: [
                t('And Saul called all the people together to war, to go down to Keilah, to besiege David and his men.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And David knew that Saul secretly practised mischief against him; and he said to Abiathar the priest, Bring hither the ephod.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Then said David, O '),
                hy('Lord God of Israel', 'c-god-israel'),
                t(', thy servant hath certainly heard that Saul seeketh to come to Keilah, to destroy the city for my sake. Will the men of Keilah deliver me up into his hand? will Saul come down, as thy servant hath heard? O '),
                hp('Lord God of Israel', 'c-god-israel-deliver'),
                t(', I beseech thee, tell thy servant. And the Lord said, '),
                hy('He will come down', 'c-he-come-down'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-israel',
          html:
            'David calls upon the "Lord God of Israel" — a name that invokes the covenant God who has guided Israel from the beginning. David is not asking for comfort. He is asking for the truth. What he needs to know is not whether things will work out, but what is coming.',
        },
        {
          kind: 'commentary',
          id: 'c-god-israel-deliver',
          html:
            'David asks two questions: "Will the men of Keilah deliver me up into his hand? will Saul come down?" The Lord answers the second: "He will come down." So Saul is coming. The first question — about betrayal — receives an answer in the next verse.',
        },
        {
          kind: 'commentary',
          id: 'c-he-come-down',
          html:
            'God knows what will happen. Not what might happen, but what will happen. Saul will come down. The future is not hidden from the Lord.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 11,
              spans: [
                t('Then said David, Will the men of Keilah deliver me and my men into the hand of Saul? And the Lord said, '),
                hy('They will deliver thee up', 'c-betrayal-answer'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-betrayal-answer',
          html:
            'The answer is clear and terrible. The men of Keilah — the very people David just saved, the city he delivered from the Philistines — will deliver him to Saul. Not out of malice, but out of fear. Saul is more powerful than gratitude. Saul is more feared than the loyalty owed to one who just saved their lives. This is the reward of righteousness in a fallen world.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 12,
              spans: [
                t('Then David and his men, which were about six hundred, arose and departed out of Keilah, and went whithersoever they could go. And it was told Saul that David was escaped out of Keilah; and he forbare to go forth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-escape-keilah',
          html:
            'David does not debate. He does not ask a third time. The answer is given: they will betray him. So he leaves with his six hundred men and departs into the wilderness. The text tells us this matters enough to Saul that when he hears David has escaped, he abandons the pursuit. His enemy has slipped through his grasp.',
        },

        {
          kind: 'carry',
          html:
            'You may have walked into a situation where you did the right thing, paid a real cost to help someone, and then discovered that those same people would not stand with you when it mattered. This is not unique to David. It happens in families, in churches, in communities. The grief of it is real. And the question that David models is this: Do I need to know the future before I act? David did. He asked God. And when he learned the truth, he did not stay and demand loyalty. He left. He protected himself by knowing what was coming. You, too, can ask God what you need to know before you stay in a situation that will harm you.',
        },

        {
          kind: 'reflection',
          id: 'keilah-betrayal',
          prompt:
            'Has there been a time when you helped someone and then faced betrayal or rejection from them? How did you know when it was time to leave? How could David&apos;s example of inquiry before action shape how you respond in similar situations?',
        },
      ],
    },

    /* ─── 1 Samuel 23:14–18 — Jonathan Strengthens David&apos;s Hand in God ─── */
    {
      ref: '1 Samuel 23:14–18',
      title: 'Jonathan Strengthens His Hand in God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 14,
              spans: [
                t('And David abode in the wilderness in strong holds, and remained in a mountain in the wilderness of '),
                hy('Ziph', 'c-ziph'),
                t('. And Saul sought him every day, but God delivered him not into his hand.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And David saw that Saul was come out to seek his life: and David was in the wilderness of Ziph in a wood.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-ziph',
          title: 'Ziph — The Wilderness Stronghold',
          script: 'זִיף',
          translit: '<strong>Ziph</strong> · A region of wilderness in Judah with strong caves and rocky terrain',
          description:
            'Ziph was not a city but a wilderness region south of Hebron, rocky and broken, full of hiding places. It is in this desolate place that David will be found by his friend Jonathan — perhaps the last time they will meet.',
        },
        {
          kind: 'commentary',
          id: 'c-ziph-safety',
          html:
            'David is in the wilderness, in strongholds, on a mountain. He is as hidden as a man can be. Yet the text says: "Saul sought him every day, but God delivered him not into his hand." God is not holding Saul back by force. He is simply not delivering David. The outcome depends on what comes next.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 16,
              spans: [
                t('And Jonathan Saul&apos;s son arose, and '),
                hp('went to David into the wood', 'c-jonathan-visit'),
                t(', and '),
                hy('strengthened his hand in God', 'c-strengthen'),
                t(':'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he said unto him, Fear not: for the hand of Saul my father shall not find thee; and thou shalt be king over Israel, and I shall be next unto thee; and that also Saul my father knoweth.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they two made a covenant before the Lord: and David abode in the wood, and Jonathan went to his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-visit',
          html:
            'Jonathan comes. He goes into the wood where David is hiding. This is dangerous for Jonathan — his father is pursuing David, and Jonathan is Saul&apos;s son. But he comes. The Bible does not explain why. It simply says he arose and went.',
        },
        {
          kind: 'hebrew',
          id: 'c-strengthen',
          title: 'Chazak — To Strengthen, To Embolden',
          script: 'חָזַק',
          translit: '<strong>Chazak</strong> · To strengthen, make firm, encourage; root of "hazak" (strong)',
          description:
            'The Hebrew verb is <em>chazak</em> — David&apos;s hand is strengthened, made firm. It does not mean Jonathan gives David weapons or military aid. It means Jonathan strengthens David&apos;s hand "in God" — in David&apos;s trust, his hope, his faith. This is spiritual strengthening, not material.',
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-words',
          html:
            'Jonathan speaks truth: "Fear not: for the hand of Saul my father shall not find thee; and thou shalt be king over Israel, and I shall be next unto thee." Jonathan already knows David will be king. He has accepted this. He is not afraid of it. He sees his role as the one who stands beside the king, "next unto thee." And he says his father knows it too.',
        },
        {
          kind: 'christ',
          id: 'jonathan-strengthen',
          title: 'Christ Connection — The Friend Who Strengthens',
          html:
            'Jonathan comes into the wilderness not with an army but with a word: "Fear not." He strengthens David&apos;s hand in God — not with force, but with presence and truth. The Letter to the Hebrews will later exhort: "Let us consider one another to provoke unto love and to good works; Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching" (Heb. 10:24–25). The picture is clear: a friend who appears in your wilderness, not to solve your problem, but to remind you that God is with you. This is the ministry of presence. And it is one of the most Christlike acts one person can do for another. Jonathan does it for David. And it is enough.',
        },
        {
          kind: 'carry',
          html:
            'There is a season in many lives when you are alone in the wilderness — hunted, uncertain, afraid. And sometimes the help that matters most is not a solution but a presence. Someone who believes in you when you cannot quite believe in yourself. Someone who speaks your name and your future with the same kind of certainty that Jonathan spoke David&apos;s: "Thou shalt be king over Israel." If you have a friend like Jonathan, you know how much that costs them and how much it heals you. And if you are called to be Jonathan to someone else — to go into their wilderness and strengthen their hand in God — do not underestimate how much that act matters. It may not move mountains. But it may move a heart.',
        },
        {
          kind: 'reflection',
          id: 'jonathan-presence',
          prompt:
            'Who is a Jonathan in your life — someone who has strengthened your hand in God simply by believing in you and speaking truth? And who might be waiting for you to be their Jonathan?',
        },
      ],
    },

    /* ─── 1 Samuel 23:19–23 — The Ziphites Betray David&apos;s Location ─────── */
    {
      ref: '1 Samuel 23:19–23',
      title: 'Betrayal by Your Own People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 19,
              spans: [
                t('Then came up the '),
                hy('Ziphites', 'c-ziphites'),
                t(' to Saul to Gibeah, saying, Doth not David hide himself with us in strong holds in the wood, in the hill of Hachilah, which is on the south of Jeshimon?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Now therefore, O king, come down according to all the desire of thy soul to come down; and our part shall be to deliver him into the king&apos;s hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ziphites',
          html:
            'The Ziphites are from the region of Ziph where David is hiding. They are not foreign enemies. They are David&apos;s own people — men of Judah, the very territory David is trying to protect. Yet they go to Saul and offer to deliver David into his hand. Not because Saul asks them, but because they volunteer. They do not need to be persuaded. They come to the king and make an offer: we know where he is, and we will deliver him.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 21,
              spans: [
                t('And Saul said, Blessed be ye of the Lord; for ye have compassion on me.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Go, I pray you, prepare yet, and know and see his place where his haunt is, and who hath seen him there: for it is told me that he dealeth very subtilly. See therefore, and take knowledge of all the lurking places where he hideth himself, and come ye again to me with the certainty, and I will go with you.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the Ziphites went out before Saul: but David and his men were in the wilderness of Maon, on the right side of Jeshimon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ziphite-betrayal',
          html:
            'Saul asks the Ziphites to spy — to find out exactly where David is hiding, to learn all his escape routes. And they comply. They become his scouts, his eyes in the wilderness. David has to move. He is no longer safe even in the strongholds of his own region. He moves to the wilderness of Maon.',
        },

        {
          kind: 'carry',
          html:
            'Betrayal from an enemy can be expected. Betrayal from your own people is a different kind of wound. The Ziphites lived in the same region as David. They had no special reason to hate him. But they had every reason to fear Saul. So they chose fear over loyalty, fear over kinship, fear over gratitude. This is what fallen human nature does when power and fear are in the room. If you find yourself in a season where people you thought of as your own have chosen fear and made a deal with your enemy, you are not alone. And the pattern in David&apos;s life suggests that God is not absent from that betrayal. He simply redirects. David moves to Maon. And something unexpected happens next.',
        },

        {
          kind: 'reflection',
          id: 'ziphite-betrayal',
          prompt:
            'Have you ever experienced betrayal from someone you thought of as part of your own community or family? What did it teach you about where your trust should rest?',
        },
      ],
    },

    /* ─── 1 Samuel 23:24–28 — The Rock of Escape; Saul Turns Away ───────── */
    {
      ref: '1 Samuel 23:24–28',
      title: 'Sela-hammahlekoth: The Rock of Escape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 24,
              spans: [
                t('And they told David: and he came down into a rock, and '),
                hg('abode in the wilderness of Maon', 'c-rock-maon'),
                t('. And when Saul heard that, he pursued after David in the wilderness of Maon.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Saul went on this side of the mountain, and David and his men on that side of the mountain: and David made haste to get away for fear of Saul; for Saul and his men '),
                hg('compassed David and his men round about to take them', 'c-surrounded'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rock-maon',
          html:
            'David comes down into a rock — a stronghold, a cave, a place of refuge. Saul hears of it and pursues. The distance is closing. Saul moves on one side of the mountain, David on the other, but they are closing in on each other. David "made haste to get away for fear of Saul." He is running now, not hiding. Time is running out.',
        },
        {
          kind: 'commentary',
          id: 'c-surrounded',
          html:
            'Saul and his men are surrounding David and his men "round about to take them." This is the moment. Saul has David trapped. On one side of the mountain is Saul with his armies. On the other side is David. They are closing in. And then something unexpected happens.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 26,
              spans: [
                t('But a '),
                hy('messenger', 'c-messenger'),
                t(' came to Saul, saying, Haste thee, and come; for the Philistines have invaded the land.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Wherefore Saul returned from pursuing after David, and went against the Philistines: therefore they called that place '),
                hy('Sela-hammahlekoth', 'c-sela'),
                t(', because of the escape.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-sela',
          title: 'Sela-hammahlekoth — The Rock of Escape',
          script: 'סֶ֫לַע הַמַּחְלְקוֹת',
          translit: '<strong>Sela-hammahlekoth</strong> · Rock (sela) of divisions or escapes (mahlekoth)',
          description:
            'The place is named for what happens there: an escape. The word "sela" means rock or cliff; "hammahlekoth" comes from a root meaning to divide or separate. So it is the rock where David and Saul&apos;s armies are divided — separated from each other by an unexpected turn of events. A memorial to providence, not human strength.',
        },
        {
          kind: 'commentary',
          id: 'c-messenger',
          html:
            'A messenger arrives with urgent news: the Philistines have invaded the land. It is not a small raiding party. It is an invasion. And it arrives at the precise moment when Saul has David surrounded. The timing is not coincidental. It is the hand of God, orchestrating events. Saul must choose: continue pursuing his enemy, or turn to defend his kingdom. He turns.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 28,
              spans: [
                t('And David went up from thence, and dwelt in strong holds at '),
                hy('Engedi', 'c-engedi'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-engedi',
          title: 'Engedi — Springs in the Wilderness',
          script: 'עֵין־גְּדִי',
          translit: '<strong>En-gedi</strong> · Spring (en) of the wild goat (gedi); a fertile oasis by the Dead Sea',
          description:
            'Engedi is a place of water and shelter in a desolate land. David will hide there. But first, he has been delivered by something beyond his control — not by his own strength, not by his friend&apos;s courage, not by his choice, but by an enemy invasion that interrupts his enemy&apos;s pursuit. This is what providence looks like.',
        },
        {
          kind: 'christ',
          id: 'providential-escape',
          title: 'Christ Connection — The God of Unexpected Deliverance',
          html:
            'David has been hunted, betrayed, cornered. And at the moment when capture seems certain, everything changes. Not because David fought harder, but because God orchestrated events beyond David&apos;s sight and knowledge. Jesus will face a similar moment: "They said unto him, Where is he? He said, I know not. They led him unto the Pharisees. And it was the sabbath day when Jesus made the clay, and opened his eyes. Then again the Pharisees also asked him how he had received his sight. He said unto them, He put clay upon mine eyes, and I washed, and do see" (John 9:12–15). Jesus is not always a visible rescuer. Sometimes He works through the hidden turns of history, through events that seem unrelated, through the ordinary unfolding of circumstance. The Philistine invasion was not divine intervention in the sense of a visible miracle. It was divine providence — the quiet orchestration of history toward mercy. This is how God often works: not with thunder, but with timing.',
        },

        {
          kind: 'carry',
          html:
            'You may be in a situation where you are running out of time, where all your resources are spent, where escape seems impossible. And you have done everything right: you have asked God, you have trusted your friends, you have moved when you knew to move. But the situation is still closing in. And then something happens that you did not plan for. An unexpected turn. A phone call. An opening you did not create. An enemy of your enemy becomes your unintended deliverer. That is Sela-hammahlekoth. That is the rock of escape. It is not the absence of trouble. It is the hidden hand that turns trouble toward your deliverance.',
        },

        {
          kind: 'reflection',
          id: 'unexpected-escape',
          prompt:
            'Think of a time when you were rescued or delivered from a difficult situation in a way you did not expect or plan for. How did you recognize God&apos;s hand in that unexpected turn of events?',
        },
      ],
    },
  ],
};
