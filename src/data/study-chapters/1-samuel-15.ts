import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 15 — Saul's Disobedience: "To Obey Is Better Than Sacrifice"
 *
 * Saul, the first king of Israel, stands at a crossroads. Samuel brings God's command:
 * utterly destroy Amalek and all that they have. But Saul does only half. He destroys
 * the Amalekites yet spares the best of the sheep and the king, Agag, alive. His
 * disobedience is dressed in piety — the spoil, he claims, is for sacrifice. And in
 * Samuel's answer to this excuse lies one of Scripture's most piercing words: "To obey
 * is better than sacrifice." Saul has chosen the appearance of devotion over the depth
 * of obedience. And for this, a kingdom is torn from his hand.
 */
export const SAMUEL_1_15: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 15,

  estimatedMinutes: { beginner: 8, intermediate: 17, deep: 20 },
  intros: [
    'The test comes for every person who has been given authority or called to lead: Will you obey God fully, or will you obey God halfway? Will you do what you are told, or will you do what you are told while keeping something back for yourself?',
    'Saul has reigned as Israel&apos;s king for more than a year. He has won victories. He is secure in power. And now the Lord sends Samuel to him with a command that admits no negotiation: "Utterly destroy all that they have; spare them not." The word for this kind of destruction is <em>cherem</em> — devoted destruction, a thing set apart wholly for the Lord, with nothing left for human use. But Saul, looking at the plunder — the best sheep, the fatlings, the king himself — sees opportunity instead of obedience. He does much of what the Lord asked. He does not do all. And in that gap between much and all, a kingdom begins to fall.',
  ],

  opener: {
    matchArtist: /tissot|doré|horace/i,
    matchTitle: /saul|amalek|agag/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 15',
    quote:
      'Saul received a clear command from the Lord: utterly destroy Amalek and all that they have. Instead, he obeyed in part and spared the best of the spoil for what he claimed was sacrifice. Samuel told him: "To obey is better than sacrifice, and to hearken than the fat of rams." For his disobedience, Saul was rejected as king.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 15 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 15:1–3 — The Command of Utter Destruction ────────────── */
    {
      ref: '1 Samuel 15:1–3',
      title: 'The Command: "Utterly Destroy All That They Have"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('Samuel also said unto Saul, The Lord sent me to anoint thee to be king over his people, over Israel: now therefore hearken thou unto the '),
                hg('voice of the words of the Lord', 'c-hearken'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hearken',
          html:
            'Samuel calls Saul back to first principles. "Hearken unto the voice of the words of the Lord" — not the voice of the people, not the voice of opportunity, but the voice of God. Samuel reminds Saul what made him king in the first place: it was not Saul&apos;s own strength or judgment. It was the anointing of the Lord. And an anointed king owes obedience.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 2,
              spans: [
                t('Thus saith the Lord of hosts, I remember that which Amalek did to Israel, how he '),
                hy('laid wait for him', 'c-amalek-wait'),
                t(' in the way, when he came up from Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amalek-wait',
          html:
            'Amalek is a people Israel knew from the wilderness wanderings. They attacked Israel without mercy — the old and the weak, those who could not defend themselves (Exodus 17:8–16). Now, after forty years in the wilderness and forty years of peace under the judges, the command comes: it is time to settle that ancient debt. The Lord does not forget. And the Lord does not forget mercy withheld.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 3,
              spans: [
                t('Now go and '),
                hy('smite Amalek', 'c-cherem'),
                t(', and '),
                hg('utterly destroy all that they have', 'c-cherem-meaning'),
                t(', and spare them not; but slay both man and woman, infant and suckling, ox and sheep, camel and ass.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-cherem',
          title: 'Cherem — Devoted Destruction',
          script: 'חֵרֶם',
          translit: '<strong>Cherem</strong> · devoted thing; utterly destroyed; set apart for the Lord',
          description:
            'Cherem is the strongest form of destruction in Hebrew — not mere killing, but the utter annihilation of a thing, set apart wholly to the Lord with nothing left for human use or profit. It was used when a city was taken in war and devoted to the Lord (Joshua 6:17–21). The command here is absolute: nothing and no one from Amalek is to be spared, nothing is to be taken for human use.',
        },
        {
          kind: 'commentary',
          id: 'c-cherem-meaning',
          html:
            'The words are plain and unambiguous: "utterly destroy." Not "defeat." Not "subdue." Not "take the best and let the rest live." Utterly destroy — everything. And Saul, to whom this command is given, is a king under covenant with the Lord. He does not have the liberty to negotiate, to modify, to do part of what he is told. He is told to obey.',
        },
      ],
    },

    /* ─── 1 Samuel 15:4–9 — The Partial Victory and Spared Spoil ───────── */
    {
      ref: '1 Samuel 15:4–9',
      title: 'The Destruction — and the Sparing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('And Saul gathered the people together, and numbered them in Telaim, two hundred thousand footmen, and ten thousand men of Judah.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Saul came to a city of the Amalekites, and laid wait in the valley.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gathering',
          html:
            'Saul musters the armies — two hundred thousand footmen and ten thousand men of Judah. He is thorough in his military preparations. He comes to the Amalekites with overwhelming force. So far, he does well.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 6,
              spans: [
                t('And Saul said unto the Kenites, Go, depart, get you down from among the Amalekites, lest I destroy you with them: for ye shewed kindness to all the children of Israel, when they came up out of Egypt. So the Kenites departed from among the Amalekites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kenites',
          html:
            'This is mercy shown rightly. The Kenites, a nomadic people, had shown kindness to Israel. Saul honors that debt. He calls to them to depart before he destroys Amalek. This is the kind of discernment a king should have — to distinguish between those who deserve judgment and those who have shown kindness. In this, Saul shows wisdom.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [
                t('And Saul smote the Amalekites from Havilah until thou comest to Shur, even before Egypt.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he took Agag the king of the Amalekites alive, and '),
                hg('utterly destroyed all the people', 'c-utterly-destroyed'),
                t(' with the edge of the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-utterly-destroyed',
          html:
            'Saul does most of what the Lord commanded. He sweeps across the land from Havilah to Shur — from east to west, the whole of Amalek&apos;s territory. The people are destroyed utterly. But notice: "He took Agag the king of the Amalekites alive." The first small crack in obedience. The king is spared.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 9,
              spans: [
                t('But Saul and the people spared Agag, and the best of the sheep, and of the oxen, and of the fatlings, and the lambs, and '),
                hg('all that was good', 'c-spared-good'),
                t(', and would not utterly destroy them: but every thing vile and refuse, that they destroyed utterly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spared-good',
          html:
            'And here is the full measure of the disobedience. Saul and the people spare not just Agag but the best of the flocks. The finest sheep, the best cattle, the finest lambs — all the good things — are spared. Only what is vile and refuse, what is of no value or use, is destroyed utterly. Saul has done most of the work. But he has done it with a reservation. He has kept something back.',
        },
        {
          kind: 'carry',
          html:
            'When we are given a command from God — through His word, through those who guide us, through the conviction of His Spirit — we often say: "I will do almost all of it. I will keep this one thing back. I will do the hard part; I will just keep the rewarding part." We destroy the vile and refuse and tell ourselves that is obedience. But obedience is not obedience when something is held back. Partial obedience is the same to God as disobedience. What is one thing God has asked of you where you have said, "I will do most of it"?',
        },
        {
          kind: 'reflection',
          id: 'partial-obedience',
          prompt:
            'Where in your life have you obeyed God in part but held something back? What makes it hard to obey fully, and what would it cost to do what you are told without reservation?',
        },
      ],
    },

    /* ─── 1 Samuel 15:10–15 — Samuel Learns of the Disobedience ────────── */
    {
      ref: '1 Samuel 15:10–15',
      title: '"The People Spared the Best" — Blame and Self-Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 10,
              spans: [
                t('Then came the word of the Lord unto Samuel, saying,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('It '),
                hg('repenteth me', 'c-repented'),
                t(' that I have set up Saul to be king: for he is turned back from following me, and hath not performed my commandments. And it grieved Samuel; and he '),
                hg('cried unto the Lord all night', 'c-cried-night'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-repented',
          html:
            'The word here is <em>nicham</em> — to repent, to feel regret, to grieve over something. God grieves that Saul has turned back. And the word is spoken not in anger but in sorrow. God anointed Saul. God saw his potential. And Saul has chosen a different path.',
        },
        {
          kind: 'hebrew',
          id: 'c-repent-hebrew',
          title: 'Nicham — Repented, Grieved',
          script: 'נִחַם',
          translit: '<strong>Nicham</strong> · to repent; to feel regret; to grieve',
          description:
            'This is the word used when God looks at what He has made and grieves over it. It is not the word for changing one&apos;s mind in the sense of lacking foresight. It is the word for the grief of watching something or someone you love turn away from the path you set for them.',
        },
        {
          kind: 'commentary',
          id: 'c-cried-night',
          html:
            'Samuel cries unto the Lord all night. He does not merely rebuke Saul. He grieves. Samuel loved Saul. He anointed him. He believed in him. And now Samuel must watch him fall. It is this grief that makes Samuel&apos;s words, when they come, carry such weight.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 12,
              spans: [
                t('And when Samuel rose early to meet Saul in the morning, it was told Samuel, saying, Saul came to Carmel, and, behold, he set him up a place, and is gone about, and passed on, and gone down to Gilgal.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Samuel came to Saul: and Saul said unto him, '),
                hg('Blessed be thou of the Lord', 'c-greeting'),
                t(': I have performed the commandment of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-greeting',
          html:
            'Saul greets Samuel with a blessing — a pious greeting — and announces: "I have performed the commandment of the Lord." He does not say: "I have tried." He does not say: "I have done most of it." He says: "I have performed." And this is the lie Saul is telling himself. He believes, or wants to believe, that what he has done is obedience.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 14,
              spans: [
                t('And Samuel said, What meaneth then this '),
                hy('bleating of the sheep', 'c-bleating'),
                t(' in mine ears, and the lowing of the oxen which I hear?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bleating',
          html:
            'Samuel hears what Saul cannot seem to hear: the bleating of sheep, the lowing of cattle. The animals Saul claimed to have destroyed are alive. The very sound of them is the sound of Saul&apos;s disobedience. And Samuel, with one question, calls it out.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 15,
              spans: [
                t('And Saul said, They have brought them from the Amalekites: for the people spared the best of the sheep and of the oxen, to sacrifice unto the Lord thy God; and the rest we have utterly destroyed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blame-excuse',
          html:
            'Saul does not say: "I spared them." He says: "They have brought them." "The people spared the best." He is passing the blame to those under him. But a king cannot hide behind his people&apos;s failures. And he cannot hide behind piety either. He dresses the disobedience in the language of sacrifice — "to sacrifice unto the Lord thy God" — as if the act of sparing the best animals somehow makes his disobedience into devotion. It does not.',
        },
      ],
    },

    /* ─── 1 Samuel 15:16–23 — Samuel's Answer: "To Obey Is Better Than Sacrifice" ─ */
    {
      ref: '1 Samuel 15:16–23',
      title: '"To Obey Is Better Than Sacrifice"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 16,
              spans: [
                t('Then Samuel said unto Saul, Stay, and I will tell thee what the Lord hath said to me this night. And he said unto him, Say on.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Samuel said, When thou wast little in thine own sight, wast thou not made the head of the tribes of Israel, and the Lord anointed thee king over Israel?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-little-sight',
          html:
            'Samuel reminds Saul of who he was. Saul, when he was "little in thine own sight" — humble, not yet grasping for power — was chosen by God and anointed king. The implication is clear: Saul has changed. He was once small in his own eyes. Now he is great. And it is this change — this growing in his own eyes, this growing in his own estimation — that has led him to think he can negotiate with God&apos;s command.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 18,
              spans: [
                t('And the Lord sent thee on a journey, and said, Go and utterly destroy the sinners the Amalekites, and fight against them until they be consumed.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Wherefore then didst thou not obey the voice of the Lord, but didst '),
                hg('fly upon the spoil', 'c-spoil'),
                t(', and didst evil in the sight of the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spoil',
          html:
            'The image is striking: Saul "flew upon the spoil" — he rushed at the plunder like a predator rushing at prey. His eyes saw the best sheep, the best cattle, and his will went after them. He did not see the command. He saw the opportunity. And that choice — to let the eye for profit override the ear for God — is what Samuel identifies as the core of Saul&apos;s sin.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 20,
              spans: [
                t('And Saul said unto Samuel, Yea, I have obeyed the voice of the Lord, and have gone the way which the Lord sent me, and have brought Agag the king of Amalek, and have utterly destroyed the Amalekites.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But the people took of the spoil, sheep and oxen, the chief of the things which should have been utterly destroyed, to sacrifice unto the Lord thy God in Gilgal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-defends',
          html:
            'Saul doubles down. He insists again: "I have obeyed." He redirects the blame: "the people took." And he wraps it all in piety: "to sacrifice unto the Lord thy God." This is the self-deception of a man who is losing ground, who knows in his heart that he has not obeyed, and is therefore clinging harder to the lie.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 22,
              spans: [
                t('And Samuel said, Hath the Lord as great delight in burnt offerings and sacrifices, as in '),
                t('obeying the voice of the Lord'),
                t('? '),
                t('Behold, to obey is better than sacrifice'),
                t(', and to hearken than the fat of rams.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'obey-better',
          title: 'Christ Connection — Obedience unto Death',
          html:
            'Seven centuries later, the prophet Hosea will echo Samuel&apos;s words: "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings" (Hosea 6:6). Jesus will quote this in Matthew 9:13. And then, when Jesus came, He embodied this principle in perfection. In the Garden of Gethsemane, Jesus could see the cost of what He was asked to do. He could have asked the Father to let the cup pass. But instead He said: "Not my will, but thine, be done" (Luke 22:42). And Paul writes of Him: "He humbled himself, and became obedient unto death, even the death of the cross" (Philippians 2:8). Christ is the obedient One — the One who did not hold back, who did not negotiate, who gave everything. And in Him, we see what Samuel was calling Saul to be, and what each of us is called to be: wholly obedient, not for the reward of it, but for the purity of the obedience itself.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 23,
              spans: [
                t('For '),
                hy('rebellion is as the sin of witchcraft', 'c-witchcraft'),
                t(', and '),
                hy('stubbornness is as iniquity and idolatry', 'c-stubbornness'),
                t('. Because thou hast rejected the word of the Lord, he hath also rejected thee from being king.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-witchcraft',
          title: 'Rebellion as Witchcraft',
          script: 'מְרִי',
          translit: '<strong>Meriy</strong> · rebellion; resistance',
          description:
            'To equate rebellion with witchcraft is to say that both are acts of covenant-breaking, both are attempts to wrest power from God and claim it for oneself. Witchcraft was seen as an attempt to control divine power without submission to God. Rebellion is the same — it is refusing to submit, insisting on one&apos;s own will.',
        },
        {
          kind: 'commentary',
          id: 'c-stubbornness',
          html:
            'Stubbornness — the refusal to bend, to listen, to obey — is equated with idolatry. Idolatry is the worship of oneself instead of God. Stubbornness is the same: it is the assertion of one&apos;s own will, one&apos;s own judgment, as more final than God&apos;s word. It is a kind of self-worship. And Samuel names it what it is.',
        },
      ],
    },

    /* ─── 1 Samuel 15:24–31 — The Rejection Sealed ───────────────────── */
    {
      ref: '1 Samuel 15:24–31',
      title: 'The Torn Mantle — A Kingdom Divided',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 24,
              spans: [
                t('Then Saul said unto Samuel, I have sinned: for I have transgressed the commandment of the Lord, and thy words: because I '),
                hg('feared the people', 'c-feared-people'),
                t(', and obeyed their voice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-feared-people',
          html:
            'Now Saul confesses. "I have sinned." But listen to the reason he gives: "I feared the people, and obeyed their voice." He is not saying: "I chose the spoil for myself." He is saying: "I yielded to the people. I could not resist them." He is still avoiding full responsibility. And the confession, though real in one sense, is incomplete. He names the people&apos;s will, not his own.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 25,
              spans: [
                t('Now therefore, I pray thee, pardon my sin, and turn again with me, that I may worship the Lord.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Samuel said unto Saul, I will not return with thee: for thou hast rejected the word of the Lord, and the Lord hath rejected thee from being king over Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rejection',
          html:
            'Samuel&apos;s answer is final. There is no negotiation. There is no forgiveness offered here, in this moment. Samuel will not return with Saul to worship. The door has closed. And Samuel speaks a judgment that cannot be undone: "The Lord hath rejected thee from being king."',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 27,
              spans: [
                t('And as Samuel turned about to go away, Saul laid hold upon the skirt of his mantle, and it rent.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Samuel said unto him, The Lord hath '),
                hg('rent the kingdom of Israel', 'c-rent-kingdom'),
                t(' from thee this day, and hath given it to a neighbour of thine, that is better than thou.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rent-kingdom',
          html:
            'The torn mantle is a sign-act — a prophecy acted out. Saul grasps Samuel&apos;s garment in desperation, and it tears. And Samuel, seeing the torn cloth in his hand, speaks: The kingdom is torn from Saul&apos;s hand. The physical sign matches the spiritual reality. What was held is now divided. What was promised is now revoked. And it is done.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 29,
              spans: [
                t('And also the '),
                hy('Strength of Israel', 'c-strength-israel'),
                t(' will not lie nor repent: for he is not a man, that he should repent.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-strength-israel',
          title: 'Strength of Israel — God&apos;s Permanence',
          script: 'נֵצַח יִשְׂרָאֵל',
          translit: '<strong>Netzach Yisrael</strong> · Strength/Eternity of Israel',
          description:
            'This title refers to God as the eternal, unchanging strength of Israel. The word <em>netzach</em> can mean both strength and eternity. The point is clear: God is not like a man, who repents, who changes His mind, who wavers. God&apos;s word stands. What He has said cannot be unsaid.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 30,
              spans: [
                t('Then he said, I have sinned: yet honour me now, I pray thee, before the elders of my people, and before Israel, and turn again with me, that I may worship the Lord thy God.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('So Samuel turned again after Saul; and Saul worshipped the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-final-plea',
          html:
            'Saul asks again for Samuel to turn back. And this time his plea is different: "honour me now, I pray thee, before the elders of my people." He is no longer asking for forgiveness in the spiritual sense. He is asking to be honored in front of the people. He wants the appearance of obedience and blessing, even though the reality has changed. And Samuel, with great sorrow, does turn back and worship with him. But the kingdom is not restored. The sentence stands.',
        },
        {
          kind: 'carry',
          html:
            'There comes a moment when a choice becomes irreversible. Saul had opportunity after opportunity to turn back fully, to acknowledge not just to Samuel but to himself what he had done. Instead, he clung to the appearance of obedience while the reality slipped away. By the time he asked for honor before the people, it was too late. The kingdom was torn from him. There is mercy in God, but there is also finality. If you are carrying a half-obedience, a thing you have held back, a lie you have told yourself about your own faithfulness — now is the time to acknowledge it fully, not for the appearance of it but for the reality of it.',
        },
        {
          kind: 'reflection',
          id: 'torn-mantle',
          prompt:
            'What is your torn mantle moment — the moment when you realized you could not go back, could not undo the choice you had made? What would it have meant to turn back fully before that moment?',
        },
      ],
    },

    /* ─── 1 Samuel 15:32–35 — The Death of Agag and the End of a Friendship ──── */
    {
      ref: '1 Samuel 15:32–35',
      title: 'The Price of Delay — Agag, and Samuel&apos;s Grief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 32,
              spans: [
                t('Then said Samuel, Bring ye hither to me Agag the king of the Amalekites. And Agag came unto him delicately: and Agag said, Surely the bitterness of death is past.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-agag-delicately',
          html:
            'Agag comes before Samuel "delicately" — perhaps fearing death, but hoping he might be spared. He has heard Saul spare him, and now he dares hope that he will live. "Surely the bitterness of death is past," he says — I am safe. But he is not safe. The command was never revoked. It was only delayed.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 33,
              spans: [
                t('And Samuel said, As thy sword hath made women childless, so shall thy mother be childless among women. And Samuel '),
                hg('hewed Agag in pieces', 'c-hewed'),
                t(' before the Lord in Gilgal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hewed',
          html:
            'Samuel executes the command that Saul refused to execute. He does it not in anger but in obedience. The command was to utterly destroy Amalek, and Samuel fulfills it. But Agag dies only because Saul delayed. The word that should have been executed at the beginning is executed at the end. The disobedience has made the cost higher.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 34,
              spans: [
                t('Then Samuel went to Ramah; and Saul went up to his house to Gibeah of Saul.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And '),
                hg('Samuel came no more to see Saul', 'c-no-more'),
                t(' until the day of his death: nevertheless '),
                hg('Samuel mourned for Saul', 'c-mourned'),
                t(': and the Lord repented that he had made Saul king over Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-more',
          html:
            'Samuel and Saul part ways. Samuel comes no more to see Saul until the day of his death. Not because Samuel is angry — though he could be — but because the relationship is broken. Saul has chosen disobedience, and a prophet cannot walk alongside a king who will not obey the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-mourned',
          html:
            'But Samuel mourns for Saul. This is the note the chapter ends on — not triumph, not anger, but grief. Samuel loved Saul. He believed in him. And he grieves that Saul turned away. The sorrow in this line is the sorrow of watching someone you believed in fail. It is the sorrow of a prophet who must deliver judgment to someone he loves.',
        },
        {
          kind: 'carry',
          html:
            'Saul lost a kingdom. Samuel lost a friend. Both of them faced the cost of Saul&apos;s disobedience. But notice: Samuel did not pretend the disobedience was obedience. Samuel did not honor what was less than full obedience. Samuel grieved, yes. Samuel mourned, yes. But Samuel did not compromise. And in his faithful grief, Samuel shows us that true love sometimes means standing firm, even when it costs a friendship. There may be someone in your life whom you must hold accountable, even when it grieves you to do so. True love does not excuse disobedience. True love calls it what it is.',
        },
        {
          kind: 'reflection',
          id: 'samuel-grief',
          prompt:
            'Is there someone you love who is walking away from obedience to God? What would it mean to grieve for them while still refusing to pretend their disobedience is obedience?',
        },
      ],
    },
  ],
};
