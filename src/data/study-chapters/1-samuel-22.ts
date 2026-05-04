import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Samuel 22 — The Cave of Adullam; The Priests of Nob Slain
 *
 * David flees into the wilderness and gathers to himself everyone broken by
 * circumstance: the distressed, the indebted, the discontented. In the cave
 * of Adullam, a kingdom takes shape — not from the strong, but from the
 * marginalized. Meanwhile, Saul, gripped by paranoia and abandonment, pursues
 * David with escalating violence. A false accusation and a betrayer&apos;s eagerness
 * lead to the slaughter of 85 priests at Nob. David, forced to witness the
 * consequence of his own lie, takes refuge in his words: "I have occasioned
 * the death of all the persons of thy father&apos;s house." He confesses, and
 * Abiathar, the one survivor, finds shelter with him. Here is where Christ
 * gathers: not the confident, but the trembling refugees of broken houses.
 */
export const SAMUEL_1_22: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 22,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 15 },
  topicTags: ['kingship', 'leadership', 'calling', 'providence'],
  opener: {
    topical: true,
    caption: '1 Samuel 22',
  },
  intros: [
    'In 1 Samuel 22, David&apos;s flight deepens. He is no longer hiding alone in caves — he is gathering people. Everyone in distress, everyone crushed by debt, everyone discontented with Saul&apos;s rule, comes to him. In the cave of Adullam, a kingdom begins to form, not from the proud, but from the broken.',
    'But Saul, meanwhile, is consumed by a different kind of gathering. Wracked by paranoia, he calls his servants around him and speaks from the wound of his own rejection. He believes everyone has turned against him. And when he hears of David&apos;s presence at Nob, he strikes — not at David himself, but at the priests who showed David hospitality. The slaughter is total: 85 priests in one day, their families, their flocks, their city. All because Saul cannot bear to be forgotten.',
    'By the end of this chapter, David and Saul have become mirror images: one gathering the broken to shelter them, the other destroying the innocent to ease his own fear. Christ would later say, "Come unto me, all ye that labour and are heavy laden" (Matt. 11:28). The cave of Adullam teaches the pattern: the kingdom of God gathers those the world has cast out.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 22',
    quote:
      'David fled to the cave of Adullam, and everyone in distress, in debt, discontented gathered to him. He became their captain. But Saul, gripped by paranoia, struck down the priests of Nob. David owned the cost: "I have occasioned the death of all the persons of thy father&apos;s house."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 22 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],

  sections: [
    /* ─── 1 Samuel 22:1–2 — The Cave of Adullam ────────────────────────── */
    {
      ref: '1 Samuel 22:1–2',
      title: 'The Cave of Adullam',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'David therefore departed thence, and escaped to the cave Adullam: and when his brethren and all his father&apos;s house heard it, they went down thither to him.'),
            {
              number: 2,
              spans: [
                t('And '),
                hg('every one that was in distress, and every one that was in debt, and every one that was discontented', 'c-adullam-gathering'),
                t(', gathered themselves unto him; and he became a captain over them: and there were with him about four hundred men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-adullam-gathering',
          html:
            'The cave of Adullam becomes a gathering place for the broken. Not the mighty. Not those with power or standing. But those in distress — those crushed by circumstance. Those in debt — those trapped by obligation and unable to escape. Those discontented — those whose lives under Saul&apos;s rule have left them restless and angry. These people come to David, and he becomes their <em>captain</em>. He leads not because he is stronger, but because he hears them. About 400 men.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },
        {
          kind: 'hebrew',
          id: 'h-adullam',
          title: 'Adullam — The Cave of Refuge',
          script: 'עֲדֻלָּם',
          translit: '<strong>Adullam</strong> · A fortress, a refuge, a strong place',
          description:
            'Adullam means "refuge" or "fortress" — a cave in the wilderness south of Jerusalem, a place of hiding, of gathering, of protection. The name itself suggests shelter. This is where David will collect those whom society has rejected.',
        },
      ],
    },

    /* ─── 1 Samuel 22:3–5 — Gad and the Move to Judah ────────────────────── */
    {
      ref: '1 Samuel 22:3–5',
      title: 'The Prophet Gad Joins David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                t('And David went thence to Mizpeh of Moab: and he said unto the king of Moab, Let my father and my mother, I pray thee, come forth, and be with you, till I know what God will do for me.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he brought them before the king of Moab: and they dwelt with him all the while David was in the hold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moab-refuge',
          html:
            'David seeks refuge with the king of Moab for his family. He cannot protect them in Israel, so he entrusts them to a foreign king. It is an act of desperation, but also an act of love — he is securing a place for them to live while his own fate hangs in the balance. "Till I know what God will do for me" — David is waiting, uncertain, but still trusting that God will act.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 5,
              spans: [
                t('And '),
                hy('the prophet Gad', 'h-gad'),
                t(' said unto David, Abide not in the hold; depart, and get thee into the land of Judah. Then David departed, and came into the forest of Hareth.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'h-gad',
          title: 'Gad — The Seer',
          script: 'גָּד',
          translit: '<strong>Gad</strong> · Fortune; the prophet who becomes David&apos;s spiritual advisor',
          description:
            'This is the first appearance of Gad the prophet in David&apos;s life. He will become one of David&apos;s closest spiritual counselors, a seer who helps David discern God&apos;s will. Here, Gad commands David to leave the hold and go into Judah. David obeys — the first of many times he will listen to this prophet&apos;s voice.',
        },
        {
          kind: 'commentary',
          id: 'c-gad-word',
          html:
            'Gad speaks God&apos;s word to David: do not stay in the cave. Move into the land of Judah. The command is puzzling — to move from hiding into the territory where Saul hunts him most fiercely. But David trusts. He leaves Moab, his parents secured, and enters the forest of Hareth. This is the first time we see David listening to prophetic counsel. It will not be the last.',
        },
      ],
    },

    /* ─── 1 Samuel 22:6–8 — Saul&apos;s Paranoia and Self-Pity ──────────────── */
    {
      ref: '1 Samuel 22:6–8',
      title: 'Saul&apos;s Fear and Abandonment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 6,
              spans: [
                t('When Saul heard that David was discovered, and the men that were with him, (now Saul abode in Gibeah under a tree in Ramah, having his spear in his hand, and all his servants standing about him;)'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then Saul said unto his servants that stood about him, Hear now, ye Benjamites; will the son of Jesse give every one of you fields and vineyards, and make you all captains of thousands, and captains of hundreds;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('That all of you have conspired against me, and '),
                hp('there is none that sheweth me that my son hath made a league with the son of Jesse', 'c-saul-rejection'),
                t(', and there is none of you that is sorry for me, or sheweth unto me that my son hath stirred up my servant against me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-rejection',
          html:
            'Saul sits under a tree, spear in hand, surrounded by his servants, and gives voice to his wound: "There is none that sheweth me that my son hath made a league with the son of Jesse, and there is none of you that is sorry for me." Saul is no longer afraid of David&apos;s power. He is terrified of his own abandonment. His son Jonathan loves David more than he loves him. His servants are, in his mind, already defecting. No one is sorry for him. No one stands with him. The king sits surrounded by soldiers and feels utterly alone.',
        },
        {
          kind: 'commentary',
          id: 'c-saul-bribe',
          html:
            'Saul tries to bind his servants to him with promises: "Will the son of Jesse give every one of you fields and vineyards?" He is bribing them to stay, even as he accuses them of having already left. This is the logic of a man who has lost his spiritual footing. He cannot command loyalty through righteousness or spiritual authority, so he offers bribes. And still he feels the ground giving way beneath him.',
        },
      ],
    },

    /* ─── 1 Samuel 22:9–13 — Doeg Betrays David ───────────────────────── */
    {
      ref: '1 Samuel 22:9–13',
      title: 'Doeg the Edomite Betrays David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 9,
              spans: [
                t('Then answered '),
                hy('Doeg the Edomite', 'h-doeg'),
                t(', which was set over the servants of Saul, and said, I saw the son of Jesse coming to Nob, to Ahimelech the son of Ahitub.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he inquired of the Lord for him, and gave him victuals, and gave him the sword of Goliath the Philistine.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'h-doeg',
          title: 'Doeg — The Eager Betrayer',
          script: 'דּוֹאֵג',
          translit: '<strong>Doeg</strong> · An Edomite foreigner, set over Saul&apos;s servants',
          description:
            'Doeg is an Edomite — a foreigner in Saul&apos;s household — and he is "set over" the servants, a position of authority. He witnesses David at Nob and cannot wait to report it to Saul. His betrayal is quick and eager, a servant&apos;s zeal to please the king.',
        },
        {
          kind: 'commentary',
          id: 'c-doeg-witness',
          html:
            'Doeg saw David. He saw the priest Ahimelech inquire of the Lord for him. He saw the giving of food and the giving of Goliath&apos;s sword — the very sword David used to slay the giant that Saul feared. Doeg sees all of this and runs to tell Saul. He offers his eyes, his memory, his accusations — all the ammunition Saul needs to turn on the priests.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 11,
              spans: [
                t('Then the king sent to call Ahimelech the priest, the son of Ahitub, and all his father&apos;s house, the priests that were in Nob: and they came all of them to the king.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Saul said, Hear now, thou son of Ahitub. And he answered, Here I am, my lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Saul said unto him, Why have ye conspired against me, thou and the son of Jesse, in that thou hast given him bread, and a sword, and hast inquired of God for him, that he should rise against me, to lie in wait, as at this day?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-accuses',
          html:
            'Saul summons Ahimelech and all the priests of Nob. The accusation is total: "Why have ye conspired against me?" Give him food? That is conspiracy. Give him a sword? That is conspiracy. Inquire of God for him? That is conspiracy. Saul has moved beyond reason. He sees in every act of mercy toward David a betrayal of himself. The priests are guilty because they showed David hospitality.',
        },
      ],
    },

    /* ─── 1 Samuel 22:14–15 — Ahimelech&apos;s Defense ────────────────────────── */
    {
      ref: '1 Samuel 22:14–15',
      title: 'The Priest&apos;s Innocence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 14,
              spans: [
                t('Then Ahimelech answered the king, and said, And who is so faithful among all thy servants as David, which is the king&apos;s son in law, and goeth at thy bidding, and is honourable in thine house?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Did I then begin to inquire of God for him? be it far from me: let not the king impute any thing unto thy servant, nor to all the house of my father: for thy servant knew nothing of all this, less or more.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ahimelech-defense',
          html:
            'Ahimelech defends himself with truth. He reminds Saul: David is your son-in-law. David goes at your bidding. David is honored in your house. Why would showing him hospitality be conspiracy? Ahimelech claims innocence — he did not know that David was fleeing, did not know of any enmity between David and Saul. He showed a man of rank and honor the courtesy a priest should show. That is all.',
        },
        {
          kind: 'commentary',
          id: 'c-priest-integrity',
          html:
            'There is no subterfuge in Ahimelech&apos;s answer. He speaks plainly. He does not deny what he did — he gave food, he gave the sword, he inquired of God. But he challenges the interpretation: these were not acts of conspiracy, but of hospitality to a man in the king&apos;s service. Yet Saul, gripped by his own paranoia, cannot hear truth. He can only hear betrayal.',
        },
      ],
    },

    /* ─── 1 Samuel 22:16–19 — The Slaughter ───────────────────────────── */
    {
      ref: '1 Samuel 22:16–19',
      title: 'The Slaughter of the Priests',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 16,
              spans: [
                t('And the king said, Thou shalt surely die, Ahimelech, thou, and all thy father&apos;s house.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the king said unto the footmen that stood about him, Turn ye, and slay the priests of the Lord; because their hand also is with David, and because they knew when he fled, and did not shew it to me. But the servants of the king would not put forth their hand to fall upon the priests of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-death-sentence',
          html:
            'Saul pronounces a death sentence not on Ahimelech alone, but on all his father&apos;s house. And then he orders his footmen, his servants, to execute it. Kill the priests. But something remarkable happens: "The servants of the king would not put forth their hand to fall upon the priests of the Lord." Saul&apos;s own servants refuse. They will not murder the priests. Even in the darkness of Saul&apos;s paranoia, there is moral resistance.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 18,
              spans: [
                t('Then the king said to '),
                hy('Doeg', 'h-doeg-slayer'),
                t(', Turn thou, and fall upon the priests. And '),
                hg('Doeg the Edomite turned, and he fell upon the priests, and slew on that day fourscore and five persons that did wear a linen ephod', 'c-slaughter-scale'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Nob, the city of the priests, smote he with the edge of the sword, both men and women, children and sucklings, and oxen, and asses, and sheep, with the edge of the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'h-doeg-slayer',
          title: 'Doeg — From Betrayer to Executioner',
          script: 'דּוֹאֵג',
          translit: '<strong>Doeg</strong> · The one who speaks it, then does it',
          description:
            'The same Doeg who spoke the accusation now carries out the execution. His tongue led to the sword. The betrayer becomes the killer.',
        },
        {
          kind: 'commentary',
          id: 'c-slaughter-scale',
          html:
            'Eighty-five priests die in a single day. Not soldiers. Not men in battle. Priests — men who wore the linen ephod, men consecrated to the Lord. And not only the priests: Nob itself, the city of the priests, is destroyed. Men, women, children, animals — all slain with the edge of the sword. The text draws the picture with terrible care: "both men and women, children and sucklings, and oxen, and asses, and sheep." Everything living in that city, killed.',
        },
        {
          kind: 'carry',
          html:
            'This is the cost of Saul&apos;s paranoia. This is what happens when a man who has lost his spiritual footing looks around and sees enemies everywhere. He sees a priest&apos;s hospitality as conspiracy. He sees his servants&apos; loyalty as doubt. And he acts from that wound. When Saul commands the murder, even his own servants refuse — but Doeg, the foreigner, the opportunist, is willing. One eager hand is enough. Eighty-five priests die. A city is destroyed. All because a king could not bear to be uncertain about his place.',
        },
      ],
    },

    /* ─── 1 Samuel 22:20–23 — Abiathar Escapes; David&apos;s Confession ──────── */
    {
      ref: '1 Samuel 22:20–23',
      title: 'Abiathar Escapes; David Owns the Cost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 20,
              spans: [
                t('And one of the sons of Ahimelech the son of Ahitub, named '),
                hg('Abiathar', 'h-abiathar'),
                t(', escaped, and fled after David.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'h-abiathar',
          title: 'Abiathar — "Father of Abundance"',
          script: 'אֶבְיָתָר',
          translit: '<strong>Abiathar</strong> · Father of abundance; the sole survivor',
          description:
            'The name Abiathar means "father of abundance" or "my father is great." He will become the high priest in David&apos;s service, and his line will continue. He is the sole survivor of the Nob massacre. The name carries a quiet irony: from a family now orphaned, a man whose father and brothers are dead, he will go on to serve the Lord&apos;s anointed.',
        },
        {
          kind: 'commentary',
          id: 'c-sole-survivor',
          html:
            'One of Ahimelech&apos;s sons escapes. His father is dead. Eighty-four priests are dead. The entire city of Nob is slain. But Abiathar runs — not toward safety, but toward David. He runs to the man whose deception at Nob set this catastrophe in motion. He runs toward the one who, unwittingly, caused his father&apos;s death.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 21,
              spans: [
                t('And Abiathar told David that Saul had slain the Lord&apos;s priests.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And David said to Abiathar, I knew it that day, when Doeg the Edomite was there, that he would surely tell Saul: '),
                hp('I have occasioned the death of all the persons of thy father&apos;s house', 'c-david-confession'),
                t('. Abide thou with me, fear not: for he that seeketh my life seeketh thy life: but with me thou shalt be in safeguard.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-gathering-broken',
          title: 'Christ Connection — "With Me Thou Shalt Be in Safeguard"',
          html:
            'Jesus says: "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls" (Matt. 11:28–29). Abiathar comes to David as a man shattered. Everyone he loves is dead. His world is destroyed. And David says to him: "Fear not. With me thou shalt be in safeguard." David becomes the shelter, the refuge — the one who gathers those the violence of others has broken. And in David&apos;s protection, Abiathar serves the rest of his life. The pattern is clear: the king who gathers the broken is a shadow of the King who came to gather all who labor under grief and sin.',
        },
        {
          kind: 'commentary',
          id: 'c-david-confession',
          html:
            'David does not look away. When Abiathar tells him that the priests of Nob are slain — all 85 of them, all for sheltering him — David owns it. "I have occasioned the death of all the persons of thy father&apos;s house." He does not justify. He does not explain. He says: I did this. My lie at Nob, my presence there, set this in motion. It is my fault. And then, having owned the cost, he welcomes Abiathar. He offers him shelter and safety. With me thou shalt be in safeguard — the safeguard David could not give Ahimelech, he now gives to the son.',
        },
        {
          kind: 'reflection',
          id: 'confession-cost',
          prompt:
            'Where have your choices or words set a chain of consequences in motion — consequences you could not have foreseen, but for which you are responsible? What would it look like to own that cost as David did, without defense, and then to act with mercy?',
        },
        {
          kind: 'carry',
          html:
            'David says something very specific to Abiathar: "For he that seeketh my life seeketh thy life." In other words: you are no longer separate from me. Your fate is bound to mine. If Saul comes for me, he will come for you. But with me, you are safe. This is the nature of the gathering in the cave of Adullam. It is not a refuge that offers security by hiding. It is a refuge that offers security by binding: you are with me now, and what I face, you face — but I will not let you face it alone. It is a costly shelter, a difficult shelter, but it is real.',
        },
      ],
    },
  ],
};
