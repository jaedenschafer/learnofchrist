import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 13 — Saul's Unlawful Sacrifice
 *
 * The kingdom is now established, but Saul is about to commit its first
 * fundamental sin—usurping the priestly office. After assembling 3,000 men
 * and his son Jonathan smites the Philistine garrison, the enemy masses for
 * counterattack: 30,000 chariots, 6,000 horsemen, and warriors like the sand
 * of the sea. As Israel waits in terror for Samuel to come and offer sacrifice,
 * the people scatter. Saul, forced by fear and impatience, takes the altar into
 * his own hands. "I forced myself therefore, and offered a burnt offering." The
 * moment Samuel arrives, he pronounces judgment: "Thou hast done foolishly: thou
 * hast not kept the commandment of the Lord thy God... But now thy kingdom shall
 * not continue." The true criterion for a king is not height or prowess, but the
 * heart. The passage then names the mysterious prophecy: "the Lord hath sought him
 * a man after his own heart"—David, the youngest son, not yet born into the
 * story. Christ alone is the true Priest-King, uniting the offices Saul tried to
 * seize through fear.
 */
export const SAMUEL_1_13: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 13,

  intros: [
    'Saul has been king for just two years. He has assembled 3,000 fighting men and sent his son Jonathan to strike at the Philistine garrison in Geba. The blow lands. The Philistines hear. And within moments, Israel faces not a single outpost but the full weight of the Philistine empire: 30,000 chariots, 6,000 horsemen, and foot soldiers like "the sand on the sea shore." The tribes of Israel, overwhelmed by the vastness of what is coming, scatter into caves and thickets and high places. They are gripped by fear. And so is Saul.',
    'Samuel has told Saul to wait seven days for the offering that will consecrate the battle. But the people are fleeing. The enemy is massing. The moment is slipping away. And Saul, faced with the choice between obedience to God&apos;s command and the demands of the moment, chooses the moment. He takes the altar into his own hands. "I forced myself therefore, and offered a burnt offering." In that single act—taking the priestly office that belongs to Samuel alone—Saul reveals his deepest flaw: he will obey God only insofar as God&apos;s command aligns with what Saul thinks best. When the two clash, Saul chooses himself. And in that choice, he loses the kingdom.',
  ],

  opener: {
    matchArtist: /tissot|james|rembrandt/i,
    matchTitle: /saul|sacrifice|philistine|battle/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 13',
    quote:
      'Saul, faced with enemy masses and the scattering of his people, forced himself to offer the burnt offering that only Samuel could offer. When Samuel arrived and saw what Saul had done, he said: "Thou hast done foolishly: thou hast not kept the commandment of the Lord thy God." And the kingdom that should have endured forever was taken from him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 13 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 13:1–2 — Saul's Reign Established ────────────────────────────── */
    {
      ref: '1 Samuel 13:1–2',
      title: 'The Kingdom Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Saul reigned one year; and when he had reigned two years over Israel,'),
            {
              number: 2,
              spans: [
                t('Saul chose him '),
                hg('three thousand men of Israel', 'saul-army'),
                t('; whereof two thousand were with Saul in Michmash and in the mount of Bethel, and a thousand were with '),
                hy('Jonathan', 'jonathan-geba'),
                t(' in Gibeah of Benjamin: and the rest of the people he sent every man to his tent.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-army',
          html:
            'Three thousand men is not a large standing army by the standards of the ancient Near East, but it is Israel&apos;s first conscription under a king. Saul is beginning to establish the infrastructure of monarchy—a military, a center of power, the machinery of rule.',
        },
        {
          kind: 'commentary',
          id: 'jonathan-geba',
          html:
            'Jonathan is Saul&apos;s son and an already legendary warrior. He will be the book&apos;s first portrait of true courage—not the courage born of impatience or fear, but of trust in God. Already, his name carries weight in Israel.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hy('Jonathan smote the garrison of the Philistines that was in Geba', 'jonathan-smote'),
                t(': and the Philistines heard of it. And Saul '),
                hg('blew the trumpet throughout all the land, saying, Let the Hebrews hear', 'saul-trumpet'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jonathan-smote',
          html:
            'A garrison is a military outpost—a constant reminder that Philistine power controls Israelite territory. Jonathan&apos;s strike is not authorized by Saul; it is a bold move by a bold young man. Yet it awakens something in Israel.',
        },
        {
          kind: 'commentary',
          id: 'saul-trumpet',
          html:
            'Saul proclaims the victory by trumpet—the ancient call to mobilization. He summons all Israel to come. The deed is done; now the kingdom must respond. Yet Saul does not know what his own call will summon.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('And all Israel heard say that Saul had smitten a garrison of the Philistines; and '),
                hg('Israel also was put in an abomination with the Philistines', 'saul-abomination'),
                t('. And the people were called together after Saul to Gilgal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-abomination',
          html:
            'The Hebrew is striking: "Israel was put in an abomination" or "became an abomination" to the Philistines. The blow Saul and Jonathan struck has done more than inspire Israel—it has incited the Philistine wrath and made Israel itself an enemy worth destroying utterly.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when a bold act of resistance awakens something in the people around us. Jonathan struck the Philistine garrison without waiting for permission. Saul saw it and called the people to gather. But awakening the people to resistance also awakens the enemy. Every act of courage triggers a response. Be ready for it.',
        },
        {
          kind: 'reflection',
          id: 'act-of-courage',
          prompt:
            'What act of courage or defiance have you seen awaken others? What happened when the enemy—whatever your enemy is—noticed and responded?',
        },
      ],
    },

    /* ─── 1 Samuel 13:5–8 — The Enemy Masses ──────────────────────────────────────── */
    {
      ref: '1 Samuel 13:5–8',
      title: 'The Philistines Mass in Overwhelming Force',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 5,
              spans: [
                t('And the Philistines '),
                hg('gathered themselves together to fight with Israel, thirty thousand chariots, and six thousand horsemen, and people as the sand which is on the sea shore in multitude', 'philistines-mass'),
                t(': and they came up, and pitched in Michmash, eastward from Beth-aven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'philistines-mass',
          html:
            'Thirty thousand chariots. The number is almost incomprehensible to an Israelite shepherd or farmer. Chariots are the Philistines&apos; overwhelming technological advantage—platforms of wood and iron, two horses, three men (driver, archer, shield-bearer), and the ability to strike from a distance. Six thousand horsemen. And foot soldiers without number—"as the sand which is on the sea shore." The message is clear: Israel has not merely struck an outpost. It has awakened something vast and terrible.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('When the men of Israel saw that they were in a '),
                hy('strait', 'saul-strait'),
                t(' (for the people were '),
                hg('distressed', 'israel-distress'),
                t('), then the people did hide themselves in caves, and in thickets, and in rocks, and in high places, and in pits.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-strait',
          html:
            'A "strait" is a narrow place—a place of confinement and no escape. Israel, facing the Philistine numbers, finds itself in a strait of a different kind: hemmed in by enemy forces on all sides, the only escape upward into the high places. The geographic language becomes emotional language.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-distress',
          title: 'Distress — The Pressure of Fear',
          script: 'צַר',
          translit: '<strong>Tzar</strong> · distress; a narrow place; pressure; adversity',
          description:
            'The same root runs through the chapter. Israel is tzar—in a strait, under pressure. Not just military pressure, but psychological. The vastness of the Philistine force produces a kind of spiritual suffocation. The people do what people do when they are suffocating: they hide.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 7,
              spans: [
                t('And some of the Hebrews went over Jordan into the land of Gad and Gilead. As for Saul, he was yet in Gilgal, and all the people followed him trembling.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he tarried seven days, according to the set time that Samuel had appointed: but Samuel came not to Gilgal; and the people were scattered from him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'israel-scattering',
          html:
            'The picture is one of dissolution. Israel came together at Saul&apos;s trumpet call. Now they scatter. Some flee east over the Jordan entirely. Others hide in caves. Those with Saul at Gilgal wait, trembling. Seven days, Samuel said. Saul waits. But the seventh day comes and Samuel does not appear. And as Saul watches, the army he gathered dissolves before his eyes.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you are waiting for something that matters—waiting for a leader, waiting for a sign, waiting for courage to come—and it does not come. The moment is slipping. The people who gathered are beginning to flee. Your own fear is rising. And you are alone. This is the moment when most of us compromise. This is when we reach for the power that does not belong to us. This is when we "force ourselves."',
        },
        {
          kind: 'reflection',
          id: 'moment-of-dissolution',
          prompt:
            'When have you been in a moment where everything you gathered was falling apart, and you felt pressure to act—to take control, to do something—even though it wasn&apos;t yours to do? What did you do?',
        },
      ],
    },

    /* ─── 1 Samuel 13:9–12 — Saul Takes the Altar ──────────────────────────────── */
    {
      ref: '1 Samuel 13:9–12',
      title: 'Saul Offers the Burnt Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 9,
              spans: [
                t('And Saul said, '),
                hg('Bring hither a burnt offering to me, and peace offerings', 'saul-offering'),
                t('. And he offered the burnt offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-offering',
          html:
            'Saul commands that the sacrificial animals be brought. The burnt offering belongs to the priests alone—to Samuel. It is the most sacred of offerings, the one that must be made by one who has been consecrated to the Lord. Saul, the king, reaches across a line that has been drawn for a thousand years. He takes the priesthood into his own hands.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 10,
              spans: [
                t('And it came to pass, that as soon as he had made an end of offering the burnt offering, behold, '),
                hp('Samuel came', 'samuel-arrives'),
                t('; and Saul went out to meet him, that he might salute him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'samuel-arrives',
          html:
            'The timing is exquisite. The moment Saul finishes offering—the moment he has completed the act that only Samuel has the right to complete—Samuel arrives. He comes exactly when he said he would come. Saul, in his impatience, has done the one thing that makes Samuel&apos;s arrival impossible to miss or excuse.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 11,
              spans: [
                t('And Samuel said, '),
                hg('What hast thou done', 'samuel-rebuke'),
                t('? And Saul said, Because I saw that the people were scattered from me, and that thou camest not within the days appointed, and that the Philistines gathered themselves together at Michmash;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore said I, The Philistines will come down now upon me to Gilgal, and I have not made supplication unto the Lord: '),
                hy('I forced myself therefore, and offered a burnt offering', 'saul-forced'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'samuel-rebuke',
          html:
            'Samuel does not elaborate. He does not explain the law or the reasons for the priesthood. He simply asks: "What hast thou done?" In that question lies an ocean of meaning. In doing this, Saul has done something that cannot be undone. A boundary has been crossed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-forced',
          title: 'I Forced Myself — The Language of Self-Override',
          script: 'אָנֻסְתִּי',
          translit: '<strong>Anusti</strong> · I forced myself; I compelled myself; I overrode my own will',
          description:
            'Saul uses a word that reveals his inner state. He did not slip into the act unconsciously. He did not stumble or fall. He "forced" himself. He overrode his own conscience to act. He knew it was not his place. He did it anyway. This is not a mistake. It is a choice.',
        },
        {
          kind: 'commentary',
          id: 'saul-justification',
          html:
            'Saul&apos;s reasoning is logical. The people are fleeing. The enemy is massing. Samuel is late. The moment is slipping. By worldly logic, Saul has acted rightly—he has taken control of a slipping situation. But the logic of God&apos;s kingdom is not the logic of worldly power. It is the logic of obedience. Saul was told to wait. He was told to wait even if the sky fell. And he was told by the prophet of the Lord, who hears God&apos;s voice. To override that for the logic of military expediency is to place his own judgment above God&apos;s word.',
        },
        {
          kind: 'christ',
          id: 'christ-priest-king',
          title: 'Christ Connection — The True Priest-King',
          html:
            'Saul tried to be both king and priest. The offices were separate in Israel for a reason—to prevent the corruption that comes when political power claims religious authority. Centuries later, Jesus will come and unite those offices in a way that shatters the old separation. He is King of Kings and High Priest forever, "after the order of Melchizedek" (Heb. 5:10; 7:17). But He unites them not through the seizure of power or the override of divine appointment. He unites them through the ultimate act of obedience—laying down His life, submitting to the Cross. Where Saul took the priesthood in impatience, Christ emptied Himself (Phil. 2:7) and became obedient unto death. Where Saul "forced" himself, Christ yielded Himself. The true Priest-King rules not through the taking of authority, but through the surrender of it.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a moment where the situation is slipping from your hands, where waiting feels impossible, where the logic of action screams at you to do something—anything—to regain control. You may know, even as you reach for power that is not yours, that you are crossing a line. The temptation will be to justify it: "The moment demanded it. I had no choice." But you did have a choice. You chose the moment over obedience. And that choice always costs more than you know.',
        },
        {
          kind: 'reflection',
          id: 'taking-power',
          prompt:
            'Have you ever "forced yourself" to take control of a situation that was not yours to control? What made you think you had to? What was the cost?',
        },
      ],
    },

    /* ─── 1 Samuel 13:13–14 — Samuel's Judgment ────────────────────────────────── */
    {
      ref: '1 Samuel 13:13–14',
      title: 'The Kingdom Taken Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('And Samuel said to Saul, '),
                hg('Thou hast done foolishly', 'saul-foolish'),
                t(': thou hast not kept the commandment of the Lord thy God, which he commanded thee: for now would the Lord have '),
                hy('established thy kingdom upon Israel for ever', 'kingdom-eternal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-foolish',
          html:
            'Samuel does not soften the word. "Thou hast done foolishly." Not "you made a tactical error" or "you miscalculated." Foolish. In Scripture, foolishness is not mere intellectual error; it is the refusal to fear the Lord, the elevation of human reasoning above divine word. Saul has acted as a fool.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-foolish',
          title: 'Acted Foolishly — סָכַל',
          script: 'סָכַל',
          translit: '<strong>Sakal</strong> · to act foolishly; to fail in understanding; to disregard wisdom',
          description:
            'The verb <em>sakal</em> means to lack understanding or to act without regard to what is true. It is the opposite of wisdom. Saul, in taking the priesthood, has shown that he lacks understanding of what the kingdom is for—not for his own power, but for God&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'kingdom-eternal',
          html:
            'This is the heart of the judgment. Samuel does not say "I will be angry with you" or "the Lord will punish you." He says something far more terrible: "For now would the Lord have established thy kingdom upon Israel for ever." The eternal kingdom Saul could have had is now gone. Had he waited, had he obeyed, had he been content to be a king who hears God&apos;s word through the prophet—his dynasty would have endured forever. Instead, his failure in a single moment has purchased a dynasty that will not last a generation.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('But now '),
                hg('thy kingdom shall not continue', 'kingdom-taken'),
                t(': the Lord hath '),
                hg('sought him a man after his own heart', 'david-heart'),
                t(', and the Lord hath commanded him to be '),
                hp('captain over his people, because thou hast not kept that which the Lord commanded thee', 'christ-heart'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'kingdom-taken',
          html:
            'The sentence is absolute. Not "your kingdom might fall" or "you may lose your throne." "Thy kingdom shall not continue." The dynasty that might have lasted forever is ended in a moment. Saul will reign. His son Jonathan will be his heir apparent. But the succession will break. The crown will not pass to Saul&apos;s offspring. It will go elsewhere.',
        },
        {
          kind: 'commentary',
          id: 'david-heart',
          html:
            'And now the prophecy: "The Lord hath sought him a man after his own heart." Not after Saul&apos;s height or Saul&apos;s strength—these were the things that made Saul king. The criterion for the kingdom is the heart. The Lord has already found such a man, though he is not yet standing before Israel. His name is not yet spoken in this chapter. But the reader, looking back, will understand: it is David, the youngest son of Jesse, tending sheep in Bethlehem while Saul sits in the palace.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-heart',
          title: 'A Man After His Own Heart — אִישׁ כִּלְבָבוֹ',
          script: 'אִישׁ כִּלְבָבוֹ',
          translit: '<strong>Ish kilvavo</strong> · a man according to His heart; a man whose heart aligns with God&apos;s heart',
          description:
            'The phrase is one of Scripture&apos;s great definitions of leadership. Not strength, not height, not military prowess, not cleverness. A heart that seeks God&apos;s will, that yields to God&apos;s word, that obeys even when the moment demands disobedience. This is what the Lord seeks in a king.',
        },
        {
          kind: 'christ',
          id: 'christ-perfect-heart',
          title: 'Christ Connection — The Heart Perfectly Aligned',
          html:
            'David, for all his greatness, was a man "after God&apos;s own heart" only in the sense that his heart sought God&apos;s heart, even when he failed. His psalms show a man wrestling, confessing, repenting. But Jesus Christ is not after God&apos;s heart—He is one with God&apos;s heart. "The Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many" (Matt. 20:28). Every moment of His ministry is an alignment with the Father&apos;s will: "Not my will, but thine, be done" (Luke 22:42). Where Saul "forced" himself to act, Jesus emptied Himself. Where Saul took power, Jesus relinquished it. Christ is the perfect fulfillment of what the Lord seeks in a king—a human heart perfectly yielded to the divine will.',
        },
        {
          kind: 'carry',
          html:
            'The Lord does not ask for success. He does not ask for victory in the moment or mastery of circumstance. He asks for a heart. Not a perfect heart—David was far from perfect—but a heart that seeks His heart, that yields to His word, that repents when it fails. If you are tempted to think that God is looking for the strong, the tall, the ones who seize control—hear this: He has set that aside. He is looking for a heart.',
        },
        {
          kind: 'reflection',
          id: 'heart-seeking',
          prompt:
            'What would it look like for your heart to seek God&apos;s heart more than anything else? Where are you still "forcing" yourself to control rather than choosing to yield?',
        },
      ],
    },

    /* ─── 1 Samuel 13:15–23 — Israel Disarmed and Powerless ──────────────────────── */
    {
      ref: '1 Samuel 13:15–23',
      title: 'Israel Disarmed and Without Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('And Samuel arose, and gat him up from Gilgal unto Gibeah of Benjamin. And Saul numbered the people that were present with him, about six hundred men.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Saul, and Jonathan his son, and the people that were present with him, abode in Gibeah of Benjamin: but the Philistines encamped in Michmash.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'six-hundred',
          html:
            'Samuel departs. The people have continued to scatter. Where Saul gathered 3,000 men at the beginning of the chapter, he now counts only 600. The army has been reduced by four-fifths. The Philistines remain massed. The disparity is grotesque.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 17,
              spans: [
                t('And the spoilers came out of the camp of the Philistines in three companies: one company turned unto the way that leadeth to Ophrah, unto the land of Shual:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And another company turned the way to Beth-horon: and another company turned to the way of the border that looketh to the valley of Zeboim toward the wilderness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spoilers',
          html:
            'The Philistines do not wait for a pitched battle. They send out raiding parties—"spoilers"—in three directions, to harry Israel, to destroy crops and livestock, to grind Israel&apos;s economy into dust. This is the logic of overwhelming force: you need not risk a pitched battle. You simply dominate the land until the enemy is so demoralized it falls.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 19,
              spans: [
                t('Now there was '),
                hg('no smith found throughout all the land of Israel', 'no-smith'),
                t(': for the Philistines said, Lest the Hebrews make them swords or spears:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But all the Israelites went down to the Philistines, to sharpen every man his share, and his coulter, and his axe, and his mattock.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-smith',
          html:
            'The Philistines have deliberately eliminated Israel&apos;s capacity to make weapons. No smith. No forge. No way to turn raw metal into a sword or spear. Israel is reduced to depending on the Philistines even for the maintenance of its agricultural tools. It is a brilliant strategy: you do not win by killing every enemy. You win by reducing them to complete dependence.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-smith',
          title: 'No Smith — אֵין חָרָשׁ',
          script: 'אֵין חָרָשׁ',
          translit: '<strong>Ein charash</strong> · no smith; no metalworker; no one skilled in the craft',
          description:
            'The smith was the master of the most advanced technology of the age—the ability to work metal into useful form. Without a smith, a nation has no weapons, no tools of war. Israel is technologically and militarily isolated.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 21,
              spans: [
                t('Yet they had a file for the mattocks, and for the coulters, and for the forks, and for the axes, and to sharpen the goads.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('So it came to pass in the day of battle, that there was neither sword nor spear found in the hand of any of the people that were with Saul and Jonathan: but with Saul and with Jonathan his son was there found.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the garrison of the Philistines went out to Michmash.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-weapons',
          html:
            'On the day of battle, the disparity is complete. The Philistines have chariots, horsemen, and soldiers "as the sand of the sea shore." Israel has 600 men, and almost none of them have sword or spear. Only Saul and Jonathan have weapons. The chapter ends not with Saul&apos;s triumph, but with Israel on the edge of annihilation, without sword, without spear, without hope. And it is Saul&apos;s own sin that has brought them to this precipice.',
        },
        {
          kind: 'carry',
          html:
            'When we take control—when we override obedience for the logic of the moment—we do not solve the problem. We multiply it. Saul forced himself to offer the sacrifice so Israel would be secure. Instead, he has lost the prophet. He has lost the army. He has lost the means of war. The chapter ends not with the victory he sought, but with Israel hemmed in by an overwhelming enemy, defenseless, because their king chose his judgment over God&apos;s word. Sometimes the worst thing that can happen to a people is to be led by someone who thinks they know better than God.',
        },
        {
          kind: 'reflection',
          id: 'obedience-cost',
          prompt:
            'What would it have cost Saul to wait? What did it cost him to not wait? Where in your own life is obedience the harder path than control?',
        },
      ],
    },
  ],
};
