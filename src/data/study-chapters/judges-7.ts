import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 7 — The Three Hundred[res:bibleodyssey-midianites[res:intertextual-small-army-faith]-defeat] Men
 * God deliberately reduces Gideon&apos;s army to 300 so victory is attributed
 * to God&apos;s power, not human strength. A chapter about faith, obedience,
 * and the power of God to use the weak and the few against the many.
 */
export const JUDGES_7: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 7,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 17 },
  opener: {
    matchTitle: /Gideon/i,
    caption: 'Judges 7',
  },
  intros: [
    'Judges 7 tells one of Scripture&apos;s most striking military stories—not because Gideon wins through strength, but because he wins by becoming weaker. The Midianites have invaded Israel, and God calls Gideon to save his people. But when the army gathers, God does something unexpected: He tells Gideon to send the soldiers home. Twice. By the time the battle begins, Gideon commands only 300 men against an enemy as countless as grasshoppers.',
    'The text is clear about why. God says: "The people that are with thee are too many... lest Israel vaunt themselves against me." God will not share His glory with human strength. He will save Israel, but through the weak and the few—so that when the dust settles, no one will be confused about who won. This is the logic of the cross, written out centuries before the cross comes.',
  ],

  sections: [
    /* ─── Judges 7:1–3 — The Army Too Large ───────────────────────────── */
    {
      ref: 'Judges 7:1–3',
      title: 'The Army Too Large',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Jerubbaal, which is Gideon, and all the people that were with him, rose up early, and '),
                hg('pitched beside the well of Harod', 'j7-location'),
                t(': and the host of the Midianites were on the north side of them, by the hill of Moreh, in the valley.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-location',
          html:
            'The two armies face each other. Gideon has assembled a force to fight the Midianites, Amalekites, and Kedemites—marauding peoples who have oppressed Israel for seven years. The stage is set for a military engagement. But God is not interested in a fair fight.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [
                t('And the Lord said unto Gideon, '),
                hp('The people that are with thee are too many', 'christ-weakness'),
                t(' for me to give the Midianites into their hands, lest Israel vaunt themselves against me, saying, Mine own hand hath saved me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-weakness',
          html:
            'God reveals His strategy. It is not about military advantage; it is about glory. If Gideon wins with 32,000 men, Israel will credit Gideon&apos;s strength. If he wins with 300, only God can be given the credit. Paul echoes this logic centuries later: "Not many of you were wise by man&apos;s standards... God hath chosen the weak things of the world to confound the things which are mighty... that no flesh should glory in his presence" (1 Corinthians 1:26–29).',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('Now therefore go to, proclaim in the ears of the people, saying, Whosoever is fearful and afraid, let him return and depart early from mount Gilead. And there returned of the people twenty and two thousand; and there remained ten thousand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-fearful',
          html:
            'Gideon invokes Deuteronomy 20:8, the law that allows fearful soldiers to leave the battle. Two-thirds of his army departs. What looks like weakness—losing soldiers—is actually obedience. God does not want reluctant fighters. He wants people who believe enough to step forward when others step back.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-pachad',
          title: 'Pachad — &ldquo;afraid&rdquo;',
          script: 'פָּחַד',
          translit: '<strong>pachad</strong> · to tremble, to be afraid, to dread',
          description:
            'The same root appears in the Psalms: &ldquo;Praise his name... let the fear [pachad] of him be upon all the earth&rdquo; (Psalm 89:7). Fear of the enemy and fear of God are opposites. One paralyzes; the other steadies.',
        },

        {
          kind: 'carry',
          html:
            'God is not interested in your reluctant obedience. He does not want you to follow Him because you have no other option or because everyone else is doing it. If you are going to move forward in faith—in your marriage, your work, your healing, your obedience—He asks you to move because you actually believe. Not because you are brave. Not because you are sure. But because you trust enough to let the fearful ones leave and step forward anyway.',
        },

        {
          kind: 'reflection',
          id: 'j7-fearful-refl',
          prompt:
            'Where is God inviting you to step forward when others are stepping back? What would it mean to obey only because you trust Him, not because you feel brave?',
        },
      ],
    },

    /* ─── Judges 7:4–8 — The Lapping Test ─────────────────────────────── */
    {
      ref: 'Judges 7:4–8',
      title: 'The Lapping Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('And the Lord said unto Gideon, The people are yet too many; bring them down unto the water, and I will try them for thee there: and it shall be, that of whom I say unto thee, This shall go with thee, the same shall go with thee; and of whomsoever I say unto thee, This shall not go with thee, the same shall not go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-second-test',
          html:
            'God is not satisfied. There are still 10,000 men. So He institutes a test at the water. The reason for the test is never explained in Scripture—theologians have debated whether the lapping soldiers show alertness or merely dog-like opportunism. The silence is intentional. The point is not the nature of the test but the principle: <em>God chooses, not Gideon.</em>',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 5,
              spans: [
                t('So he brought down the people unto the water: and the Lord said unto Gideon, '),
                hy('Every one that lappeth of the water with his tongue, as a dog lappeth', 'hebrew-lappeth'),
                t(', him shalt thou set by himself; likewise every one that boweth down upon his knees to drink.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lappeth',
          title: 'Lappeth — &ldquo;to drink by lapping&rdquo;',
          script: 'לקק',
          translit: '<strong>laqaq</strong> · to lap, as an animal laps water',
          description:
            'The verb compares the soldiers to dogs—a humbling image. Yet the 300 who lap are chosen. God uses the image of a dog to teach that weakness and humility are His criteria for selecting those who will fight His battles.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('And the number of them that lapped, putting their hand to their mouth, were three hundred men: but all the rest of the people bowed down upon their knees to drink water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-three-hundred',
          html:
            'The number drops from 10,000 to 300. That is 97 percent of the army eliminated. By any military logic, this is disaster. By God&apos;s logic, it is perfection. He has what He needs: few enough that no one will mistake the victory for human effort, yet enough bodies to testify that a real battle took place.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('And the Lord said unto Gideon, By the three hundred men that lapped will I save you, and deliver the Midianites into thine hand: and let all the other people go every man unto his place.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('So the people took victuals in their hand, and their trumpets[res:sefaria-trumpets-judges]: and he sent all the rest of Israel every man unto his tent; and retained those three hundred men: and the host of Midian was beneath him in the valley.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-provision',
          html:
            'God takes responsibility for the victory: <em>"By the three hundred men will I save you."</em> Notice what Gideon keeps for the battle: victuals (food), trumpets, and the three hundred men. Conspicuously absent: swords. God will fight with sound and light, not steel.',
        },

        {
          kind: 'carry',
          html:
            'If your life feels too small for what God is calling you to do, take heart. You are probably exactly the size He needs. A small platform, a quiet voice, limited resources, one faithful choice repeated day after day—these are the terms on which God works. He does not choose the biggest or the brightest; He chooses the weak and the few so that when the dust settles, no one will be confused about who did the saving.',
        },

        {
          kind: 'reflection',
          id: 'j7-lapping-refl',
          prompt:
            'Where do you feel too weak or too few for what God has called you to? What would change if you believed that God had chosen you precisely because of your smallness, not in spite of it?',
        },
      ],
    },

    /* ─── Judges 7:9–15 — The Barley-Cake Dream ──────────────────────── */
    {
      ref: 'Judges 7:9–15',
      title: 'Gideon Overhears the Barley-Cake Dream',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('And it came to pass the same night, that the Lord said unto him, Arise, get thee down unto the host; for I have delivered it into thine hand.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But if thou fear to go down, go thou with Phurah thy servant down to the host.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-fear-acknowledged',
          html:
            'God reads Gideon&apos;s heart. Gideon is afraid. Instead of commanding obedience without compassion, God offers a way: "If you are afraid, I will let you overhear the enemy&apos;s dream so your faith can be strengthened." God does not punish fear; He meets it with mercy that deepens faith.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('Then went he down with Phurah his servant unto the outside of the armed men that were in the host.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the Midianites and the Amalekites and all the children of the east lay along in the valley '),
                hg('like grasshoppers for multitude', 'j7-grasshoppers'),
                t('; and their camels were without number, as the sand by the sea side for multitude.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-grasshoppers',
          html:
            'The enemy is beyond counting. Their camels equal the sand of the sea. In human terms, Gideon&apos;s 300 are not an army—they are a handful of dust against a hurricane. The text is setting up a contrast: the more numerous and more armed the enemy, the clearer the evidence will be that God, not Gideon, has won.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('And when Gideon was come, behold, a man told a dream unto his fellow, and said, Behold, I dreamed a dream, and, lo, a cake of barley bread tumbled into the host of Midian, and came unto a tent, and smote it that it fell, and overturned it, that the tent lay along.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-barley',
          html:
            'A barley cake is the poor man&apos;s bread. In ancient eyes, barley was the food of slaves and commoners, not warriors. Yet it destroys a tent of the mighty Midianites. The dream is God&apos;s own commentary: the despised will overcome the powerful. Gideon, hearing this, will understand.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And his fellow answered and said, This is nothing else save the sword of Gideon the son of Joash, a man of Israel: for into his hand hath God delivered Midian, and all the host.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-dream-interpret',
          html:
            'The Midianite does the interpretation for Gideon. The barley cake is Gideon&apos;s sword. God has already delivered Midian into Gideon&apos;s hand. The enemy soldier has confessed his own defeat before the battle begins. Faith, the text teaches, sometimes comes through the enemy&apos;s own mouth.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 15,
              spans: [
                t('And it was so, when Gideon heard the telling of the dream, and the interpretation thereof, that he worshipped, and returned unto the host of Israel, and said, Arise; for the Lord hath delivered into your hand the host of Midian.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-worship',
          html:
            'Gideon worships. His fear is not gone—it has been transformed by faith. He returns to his men not with certainty about his own strength, but with certainty about God&apos;s word. That is enough.',
        },

        {
          kind: 'carry',
          html:
            'When you are most afraid, God sometimes lets you overhear evidence of His faithfulness. A word spoken to you. A verse that lands perfectly. A friend&apos;s story of deliverance that mirrors your own doubt. These are mercies, not accidents. They are God saying, "I see your fear. Let me strengthen your faith." When you receive such a gift, the response is worship—not certainty that you can do it, but certainty that God has already done it.',
        },

        {
          kind: 'reflection',
          id: 'j7-dream-refl',
          prompt:
            'What &ldquo;barley-cake dream&rdquo; has God given you lately—evidence of His faithfulness hidden in plain sight? How has it shifted your fear?',
        },
      ],
    },

    /* ─── Judges 7:16–18 — The Trumpets, Pitchers, and Lamps ──────────── */
    {
      ref: 'Judges 7:16–18',
      title: 'The Trumpets, Pitchers, and Lamps',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('And he divided the three hundred men into three companies, and he put a trumpet in every man&apos;s hand, with empty pitchers, and '),
                hy('lamps within the pitchers', 'hebrew-lamps'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-weapons',
          html:
            'Gideon&apos;s arsenal is bizarre. Trumpets for noise. Empty pitchers. Lamps hidden inside. No swords, no spears, no armor. This is not a military strategy; it is theology made visible. God will fight. Gideon&apos;s men will provide the signal—sound and light—and the Lord will provide the victory.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-lamps',
          title: 'Lappid — &ldquo;lamp&rdquo;',
          script: 'לַפִּיד',
          translit: '<strong>lappid</strong> · a torch, a lamp, a burning light',
          description:
            'The lamp is hidden. The pitch-black night hides the army and the light both. When the pitchers break, light will suddenly flood the darkness—a picture of God&apos;s power breaking forth from what looked empty.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 17,
              spans: [
                t('And he said unto them, Look on me, and do likewise: and, behold, when I come to the outside of the camp, it shall be that, as I do, so shall ye do.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('When I blow with a trumpet, I and all that are with me, then blow ye the trumpets also on every side of all the camp, and say, '),
                hp('"The sword of the Lord, and of Gideon."', 'christ-sword'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-cry',
          html:
            'Notice the order: "The sword of the Lord, and of Gideon." The Lord comes first. Gideon is named, but secondary. The soldiers are to shout this in the dark, breaking the silence with light, noise, and a declaration of who is actually fighting this battle. Strategy gives way to witness.',
        },

        {
          kind: 'christ',
          id: 'christ-sword',
          title: 'Christ Connection — Treasure in Earthen Vessels',
          html:
            'The hidden lamps inside empty pitchers echo Paul&apos;s imagery: "We have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us" (2 Corinthians 4:7). Your weakness, your smallness, your "broken pitcher" is the very container God uses to release His light into the world. Christ is the Light breaking from the inside of what looks hollow and powerless. The darker the night, the brighter the lamp. The more empty the vessel, the more radiant the treasure.',
        },

        {
          kind: 'carry',
          html:
            'You do not have to be impressive. You do not have to be strong. You do not have to arrive at the battle fully armed. God breaks into the darkness through what looks defeated—through your small faith, your trembling voice, your ordinary life. Like Gideon&apos;s men sounding a trumpet in the dark, your job is to obey, to break the silence with what little you have, and to point to the Light that is not yours but flows through you. The rest is God&apos;s work.',
        },

        {
          kind: 'reflection',
          id: 'j7-lamps-refl',
          prompt:
            'What &ldquo;empty pitcher&rdquo; in your life might God be using to release His light? Where are you being asked to break the silence with a trumpet, even though you feel powerless?',
        },
      ],
    },

    /* ─── Judges 7:19–25 — "The Sword of the Lord and of Gideon" ────────── */
    {
      ref: 'Judges 7:19–25',
      title: '"The Sword of the Lord, and of Gideon"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 19,
              spans: [
                t('So Gideon, and the hundred men that were with him, came unto the outside of the camp in the beginning of the middle watch; and they had but newly set the watch: and they blew the trumpets, and brake the pitchers that were in their hands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-timing',
          html:
            'The timing is crucial. Gideon attacks when the watch has just changed—when alertness is lowest and confusion highest. In that moment of vulnerability, light and noise explode. The Midianites, expecting a siege or a conventional ambush, find themselves disoriented, panicked, and—God turns them on each other.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('And the three companies blew the trumpets, and brake the pitchers, and held the lamps in their left hands, and the trumpets in their right hands to blow withal: and they cried, "'),
                hg('The sword of the Lord, and of Gideon."', 'j7-shout'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-shout',
          html:
            'Three hundred men surrounding a camp of thousands. No swords drawn. Only light, noise, and a testimony to God&apos;s kingship. The battlefield is transformed. What Gideon&apos;s soldiers cannot do—kill an uncountable enemy—God does.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 21,
              spans: [
                t('And they stood every man in his place round about the camp: and all the host ran, and cried, and fled.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the three hundred blew the trumpets, and the Lord set every man&apos;s sword against his fellow, even throughout all the host: and the host fled before the children of Israel unto the wilderness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-victory',
          html:
            'The victory is God&apos;s alone. The Midianites, panicked and confused, turn on each other in the darkness. Gideon&apos;s three hundred watch as the enemy destroys itself. Not a single Israelite sword is drawn. The only weapons that matter—sound, light, and the Lord&apos;s intervention—are the ones that belonged to God all along.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 23,
              spans: [
                t('And the men of Israel gathered themselves together out of Naphtali, and out of Asher, and out of Manasseh, and pursued after the Midianites.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Gideon sent messengers throughout all mount Ephraim, saying, Come down against the Midianites, and take before them the waters unto Beth-barah and Jordan. Then all the men of Ephraim gathered themselves together, and took the waters unto Beth-barah and Jordan.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they took two princes of the Midianites, Oreb and Zeeb; and they slew Oreb upon the rock Oreb, and Zeeb at the wine press of Zeeb, and pursued Midian, and brought the heads of Oreb and Zeeb to Gideon on the other side of Jordan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j7-completion',
          html:
            'The victory is complete. Other tribes of Israel, seeing the Midianites routed, join the pursuit. Two princes of Midian—Oreb and Zeeb—are killed. Their names mean Raven and Wolf; these are the predators God has defeated. The remnant of Israel is safe. All of this flows from three hundred men, three hundred trumpets, three hundred pitchers, three hundred lamps, and a God who needed no sword.',
        },

        {
          kind: 'carry',
          html:
            'The victory is not yours to manufacture. Your job is to show up, to sound the trumpet, to let the light shine, and to call out the name of God. The rest—the confusion, the enemy turned against itself, the complete and total defeat of what threatens you—that is God&apos;s work. You will see defeats that confound your enemies. You will see deliverances that had no natural explanation. You will watch God fight battles you never raised a sword to fight. All you have to do is obey, testify, and trust.',
        },

        {
          kind: 'reflection',
          id: 'j7-victory-refl',
          prompt:
            'What battles in your life is God calling you to trust Him to fight? Where are you being asked to sound the trumpet and testify instead of to manipulate or control?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 7',
    quote:
      'By three hundred men[res:bibleodyssey-midianites-defeat] that lapped the Lord saved Gideon, and delivered Midian into his hand. With trumpets and pitchers and lamps, God defeated the enemy, and every man&apos;s sword was set against his fellow.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 7 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-midianites-defeat',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Midianites Defeated by Gideon',
      url: 'https://www.bibleodyssey.org/passages/main-stories/gideon',
      description: 'The strategy and divine victory at the spring of Harod against overwhelming numbers.',
    },
    {
      id: 'sefaria-trumpets-judges',
      kind: 'study',
      source: 'Sefaria',
      label: 'Trumpets and Divine Warfare',
      url: 'https://www.sefaria.org/Judges.7',
      description: 'Ancient Near Eastern military practices and the Lord&apos;s role in battle victory.',
    },
    {
      id: 'intertextual-small-army-faith',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Small Army, Great Faith',
      url: 'https://intertextual.org/Judges/7',
      description: 'Thematic echoes of David&apos;s battles and God working through unlikely circumstances.',
    },
  ]
};