import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 22 — David's Song of Deliverance
 *
 * Also recorded in Psalm 18, this is David's grand summary of God's faithfulness.
 * From the opening declaration of God as rock and fortress, to the theophany where
 * He bends the heavens and rides upon the cherub, to the closing affirmation of
 * covenant mercy — this song weaves together every motif of divine rescue and
 * kingly reward. It is David's testimony to a people that God keeps His word to
 * the anointed.
 */
export const SAMUEL_2_22: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 22,

  estimatedMinutes: { beginner: 10, intermediate: 19, deep: 25 },
  topicTags: ['kingship', 'repentance', 'leadership', 'covenant'],
  opener: {
    topical: true,
    caption: '2 Samuel 22',
  },
  intros: [
    'David has spent his life running, fighting, and trusting. He has been hunted by Saul, pursued by enemies, tested by fear and hunger and betrayal. And in 2 Samuel 22, he stops. He gathers the weight of his experience and sings. This is not a prayer; it is a testimony. It is the song of a man who has lived long enough to see that the God he trusted at twenty, at thirty, at fifty — this God kept His word.',
    'The text tells us that David "spake unto the Lord the words of this song in the day that the Lord had delivered him out of the hand of all his enemies." This is a song of commemoration. It mirrors Psalm 18 almost exactly, which means it was important enough for David to preserve in two places — as a song sung in the temple, and as a permanent word placed in his psalter. In this chapter, David does something profound: he takes the scattered mercies of his life and weaves them into a unified song of praise.',
    'The song moves from declaration (God is my rock and fortress) to remembrance (I called and He heard) to theophany (He came down and shook the earth) to vindication (He rewarded me according to my righteousness) to closing affirmation (mercy to His anointed, forever). It is the shape of a life made whole.',
  ],

  showKjvNote: true,

  sections: [
    /* ─── 2 Samuel 22:1–4 — The Rock and the Fortress ──────────────────── */
    {
      ref: '2 Samuel 22:1–4',
      title: 'The Rock and the Fortress',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('And David spake unto the Lord the words of this song in the day that the Lord had delivered him out of the hand of all his enemies, and out of the hand of Saul:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said, The Lord is my '),
                hy('rock', 's22-rock'),
                t(', and my '),
                hy('fortress', 's22-fortress'),
                t(', and my '),
                hy('deliverer', 's22-deliverer'),
                t(';'),
              ],
            },
            {
              number: 3,
              spans: [
                t('The God of my rock; in him will I trust: he is my '),
                t('shield'),
                t(', and the '),
                t('horn of my salvation'),
                t(', my high tower, and my refuge, my '),
                t('saviour'),
                t('; thou savest me from violence.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('I will call upon the Lord, who is worthy to be praised: so shall I be saved from mine enemies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-rock',
          html:
            'David opens with a fundamental claim: "The Lord is my rock." A rock does not move. A rock does not betray. A rock stands in the middle of the flood and remains. In a life marked by instability — exile, pursuit, uncertainty — David anchors his testimony to something immovable. This is the language of foundational trust, of a man who has learned that the only security is the security God provides.[res:sefaria-david-king][res:iaa-city-david][res:bible-odyssey-jerusalem]',
        },
        {
          kind: 'hebrew',
          id: 's22-tsur',
          title: 'Tsur — "Rock"',
          script: 'צוּר',
          translit: '<strong>Tsur</strong> · rock; strength; refuge',
          description:
            'The Hebrew tsur carries a double meaning — both the physical rock (unshakable, enduring) and the metaphorical rock that represents security and protection. Throughout Scripture, God is repeatedly called tsur, the rock upon which covenant people build their lives. David, having fled to literal rocks and caves as he hid from Saul, knows what a rock means in the body as well as the soul.',
        },
        {
          kind: 'commentary',
          id: 's22-fortress',
          html:
            'A fortress is not a shelter; it is a place of war, a stronghold from which one can defend and prevail. God as fortress means more than safety — it means the backing to stand against enemies, the strength to fight, the assurance of victory. David is not asking for a hiding place; he is declaring himself equipped for what comes.',
        },
        {
          kind: 'hebrew',
          id: 's22-metsudah',
          title: 'Metsudah — "Fortress"',
          script: 'מְצוּדָה',
          translit: '<strong>Metsudah</strong> · fortress; stronghold; a place of safety with military capacity',
          description:
            'A metsudah is more than walls — it is a position of strength from which a garrison can withstand siege and launch sorties. When David calls God his metsudah, he is saying: I am not merely safe; I am empowered. I can stand against the flood.',
        },
        {
          kind: 'commentary',
          id: 's22-deliverer',
          html:
            'The God who is rock is also the God who acts — who "delivers." Deliverer is a title of active intervention. God does not passively exist; He breaks chains, He leads out of captivity, He changes the circumstance itself. David&apos;s rock is not a static thing; it is a God who moves.',
        },
        {
          kind: 'christ',
          id: 's22-christ-rock',
          title: 'Christ Connection — The Living Rock',
          html:
            'Paul writes in 1 Corinthians 10:4 that "they did all drink the same spiritual drink: for they drank of that spiritual Rock that followed them: and that Rock was Christ." The rock that David clung to in his wilderness, the rock that sustained Israel in the desert — this rock is Christ. He is the foundation that does not move, the fortress that cannot be breached, the deliverer who brings us out. When we sing with David that the Lord is our rock, we are claiming the Christ who is our stability when all else fails.',
        },
        {
          kind: 'carry',
          html:
            'What in your life feels unstable — a relationship shaken, a circumstance changing, a certainty dissolving? David learned to rest not in the stability of his circumstances, but in the unchanging nature of God himself. Can you name one area where you need to transfer your trust from circumstance to the One who does not change?',
        },
        {
          kind: 'reflection',
          id: 's22-rock-fortress',
          prompt: 'When has God acted as a fortress for you — not just keeping you safe, but empowering you to stand against something difficult? What would it look like to trust Him that way now?',
        },
      ],
    },

    /* ─── 2 Samuel 22:5–12 — The Call from the Depths ────────────────────── */
    {
      ref: '2 Samuel 22:5–12',
      title: 'The Call from the Depths',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 5,
              spans: [
                t('When the '),
                hg('waves of death', 's22-waves'),
                t(' compassed me, the '),
                hg('floods of ungodly men', 's22-floods'),
                t(' made me afraid;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('The sorrows of hell compassed me about: the snares of death prevented me;'),
              ],
            },
            {
              number: 7,
              spans: [
                t('In my '),
                hg('distress', 's22-distress'),
                t(' I called upon the Lord, and cried to my God: and he did hear my voice out of his temple, and my cry did enter into his ears.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then the earth shook and trembled; the foundations of heaven moved and shook, because he was wroth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-22-78mid-1',
          html:
            'David sings of deliverance. The song shifts from what God did in the past to what he does always. Thanksgiving becomes theology.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 9,
              spans: [
                t('There went up a smoke out of his nostrils, and '),
                hg('fire out of his mouth', 's22-fire-mouth'),
                t(' devoured: coals were kindled by it.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('He bowed the heavens also, and came down: and darkness was under his feet.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he rode upon a cherub, and did fly: yea, he was seen upon the '),
                hy('wings of the wind', 's22-cherub-wings'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he made darkness pavilions round about him, dark waters, and thick clouds of the skies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-waves',
          html:
            'David does not minimize his experience. "The waves of death" — this is not gentle danger, but overwhelming, drowning peril. He is not describing a small threat, but something vast that surrounds him, that pulls him down. The imagery is of a man caught in a storm at sea, waves breaking over him, no shore in sight.',
        },
        {
          kind: 'commentary',
          id: 's22-floods',
          html:
            '"Floods of ungodly men" — the enemies are not merely powerful, they are actively hostile to God. They are the sons of Belial, described elsewhere in Scripture as enemies not just of David but of the covenant itself. David does not face them as a personal rival; he faces them as one anointed by God facing those who oppose His purposes.',
        },
        {
          kind: 'commentary',
          id: 's22-distress',
          html:
            'But David does not drown. "In my distress I called upon the Lord." This is the turning point of the song. The cry from the depths is heard. God "did hear my voice out of his temple." The call goes up from the waters, and it reaches the ears of the Most High. Deliverance is not that the waves stop; deliverance is that God hears and responds.',
        },
        {
          kind: 'commentary',
          id: 's22-fire-mouth',
          html:
            'Now the song shifts to theophany — the appearing of God. From the depths, David looks up, and he sees God rising. Fire issues from His nostrils. The heavens are rolled up. The earth trembles. This is the God of judgment, of power, of terrible majesty. And this God rises because a man called out from the waters. God moves on behalf of the anointed.',
        },
        {
          kind: 'hebrew',
          id: 's22-qarah',
          title: 'Qarah — "Called" or "Cried Out"',
          script: 'קָרָא',
          translit: '<strong>Qarah</strong> · to call; to cry out; to invoke',
          description:
            'Qarah is the verb of petition and invocation. It is how men call to their God in extremity, the cry that rises from the depths. Throughout the Psalms, qarah is the word that names the moment when a person ceases to rely on their own strength and calls upon the Lord. It is not a quiet prayer; it is a shout from the drowning.',
        },
        {
          kind: 'commentary',
          id: 's22-cherub-wings',
          html:
            'God does not walk to David; He flies. He "rode upon a cherub" — the same cherub that stands at the throne room of heaven, the same creature that guards the holiest place. God is seen "upon the wings of the wind" — He moves with the swiftness of the storm. He is not slow. He does not hesitate. When the anointed cries, heaven itself mobilizes.',
        },
        {
          kind: 'christ',
          id: 's22-christ-descent',
          title: 'Christ Connection — God Descends to the Drowning',
          html:
            'In the Gospels, the disciples are caught in a storm on the sea. They are drowning in darkness and terror. And Jesus approaches them, not walking on the shore but walking on the water — the very thing they fear. He says, "Be not afraid; it is I" (John 6:19–20). The God who rode upon the cherub in David&apos;s prayer comes to the disciples in storm. He comes not to condemn, but to say: I am here. This is the Christ who descends when the anointed cry.',
        },
        {
          kind: 'carry',
          html:
            'Do you wait for your circumstances to change before you believe God can help you? David teaches a different way: cry out from the midst of the waves. The distress is real. The danger is real. But the cry goes up to a God who bends the heavens and descends. Your circumstance does not wait until it is safe to call upon Him. You call from the depth itself.',
        },
        {
          kind: 'reflection',
          id: 's22-depths-call',
          prompt: 'When has God met you in your deepest moment of fear or doubt, not by changing your circumstance immediately, but by showing you that He heard your cry? How did that change what you believed about Him?',
        },
      ],
    },

    /* ─── 2 Samuel 22:13–20 — The Warrior God ─────────────────────────────── */
    {
      ref: '2 Samuel 22:13–20',
      title: 'The Warrior God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 13,
              spans: [
                t('Through the brightness before him were coals of fire kindled.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('The Lord thundered from heaven, and the most High uttered his voice.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he sent out arrows, and scattered them; lightning, and discomfited them.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the channels of the sea appeared, the foundations of the world were discovered, at the rebuking of the Lord, at the blast of the breath of his nostrils.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-22-78mid-2',
          html:
            'David sings of deliverance. The song shifts from what God did in the past to what he does always. Thanksgiving becomes theology.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 17,
              spans: [
                t('He sent from above, he took me, he drew me out of many '),
                hg('waters', 's22-many-waters'),
                t(';'),
              ],
            },
            {
              number: 18,
              spans: [
                t('He delivered me from my '),
                hg('strong enemy', 's22-strong-enemy'),
                t(', and from them that hated me: for they were too strong for me.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('They prevented me in the day of my calamity: but the Lord was my stay.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('He brought me forth also into a large place; he delivered me, because he '),
                hp('delighted in me', 's22-delighted'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-many-waters',
          html:
            'God descends and acts. He "sent from above, he took me, he drew me out of many waters." David uses the language of a rescuer reaching down into a flood and pulling someone to safety. This is not David swimming to shore; this is David being taken, being drawn out by hands stronger than the water. Rescue is God&apos;s action, not David&apos;s effort.',
        },
        {
          kind: 'commentary',
          id: 's22-strong-enemy',
          html:
            'David will not claim he defeated his enemy. Instead, he says God delivered him "from my strong enemy." The enemy was too strong for David. This is crucial: David is honest about his weakness. Saul was more powerful. The armies against him were vast. But God was stronger than the enemy. God prevailed where David could not.',
        },
        {
          kind: 'commentary',
          id: 's22-delighted',
          html:
            'The reason God acted is not that David earned it through merit alone (though righteousness follows). God acted "because he delighted in me." This is covenant language. God delights in His anointed. He is not distant, not indifferent. He is a God who takes joy in His people, who champions them, who will move heaven and earth because He delights in them.',
        },
        {
          kind: 'carry',
          html:
            'We live as though we must earn God&apos;s intervention — must be strong enough, righteous enough, worthy enough. But David reveals a different truth: God acts on those He delights in. The delighting comes first. You do not prove your worth to God; you are beloved. And a God who delights in you is not distant from your trouble; He is actively, passionately committed to your rescue.',
        },
        {
          kind: 'reflection',
          id: 's22-warrior-god',
          prompt: 'Do you believe God delights in you? What would change in how you face your struggles if you knew that deeply?',
        },
      ],
    },

    /* ─── 2 Samuel 22:21–28 — According to My Righteousness ───────────────── */
    {
      ref: '2 Samuel 22:21–28',
      title: 'According to My Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 21,
              spans: [
                t('The Lord rewarded me according to my '),
                hg('righteousness', 's22-righteousness'),
                t(': according to the cleanness of my hands hath he recompensed me.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('For I have kept the ways of the Lord, and have not wickedly departed from my God.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For all his judgments were before me: and I did not depart from his statutes.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('I was also upright before him, and I kept myself from mine iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-22-78mid-3',
          html:
            'David sings of deliverance. The song shifts from what God did in the past to what he does always. Thanksgiving becomes theology.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 25,
              spans: [
                t('Therefore the Lord hath recompensed me according to my righteousness, according to my cleanness in his eyesight.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('With the merciful thou wilt shew thyself merciful, and with the upright man thou wilt shew thyself upright;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('With the pure thou wilt shew thyself pure; and with the froward thou wilt shew thyself unsavoury.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the afflicted people thou wilt save: but thine eyes are upon the haughty, that thou mayest bring them down.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-righteousness',
          html:
            'Here David makes a bold claim: "The Lord rewarded me according to my righteousness." This is not David claiming sinlessness. But it is David saying that he sought to walk with God, that he kept God&apos;s ways when he could have broken them, that when he was hunted and feared, he did not lose his moral compass. This is the voice of a man who can look back at his path and see that he pursued faithfulness even when it cost him.',
        },
        {
          kind: 'commentary',
          id: 's22-hands-clean',
          html:
            '"According to the cleanness of my hands hath he recompensed me." David is not claiming his hands are spotless — he has killed many in battle. But he claims they are clean of the particular guilt that would disqualify him: he has not pursued Saul treacherously when he had the chance; he has not taken what was not his; he has not lived by betrayal. He has kept to his covenants.',
        },
        {
          kind: 'commentary',
          id: 's22-covenant-keeping',
          html:
            'In verses 26–27, David articulates a principle that governs God&apos;s dealing: "With the merciful thou wilt shew thyself merciful." God meets people where they stand. He does not love capriciously; He responds. He is not unjust; He sees the orientation of the heart and responds accordingly. "With the froward thou wilt shew thyself unsavoury" — to those who turn away from Him, He becomes unsavory. But to those who keep covenant, He keeps covenant.',
        },
        {
          kind: 'commentary',
          id: 's22-haughty',
          html:
            '"And the afflicted people thou wilt save: but thine eyes are upon the haughty, that thou mayest bring them down." God&apos;s eyes are not equally disposed toward all people. His gaze follows the afflicted with intent to save. His gaze follows the haughty with intent to humiliate. God is not impartial in the way the modern world means it; God is partial toward those who humble themselves before Him.',
        },
        {
          kind: 'christ',
          id: 's22-christ-righteousness',
          title: 'Christ Connection — The Perfect Cleanness',
          html:
            'David can sing of his own righteousness — limited, human, but real. But Christ is "the righteous one," the one whose hands are perfectly clean, whose heart never wavered from the Father&apos;s will. And the promise Paul makes is that this righteousness can be counted to us: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him" (2 Corinthians 5:21). We cannot claim David&apos;s righteousness as our own achievement; but we can claim Christ&apos;s. He is our cleanness before God.',
        },
        {
          kind: 'carry',
          html:
            'This passage is not saying your works earn God&apos;s favor — it is saying that God sees the direction of your heart. Are you seeking Him? Are you trying, in your stumbling way, to keep His ways? Then God meets you with mercy. The question is not: are you perfect? The question is: are you pursuing faithfulness? David teaches us to look back at our own path and ask: where have I been faithful? Where have I kept covenant even when it cost me?',
        },
        {
          kind: 'reflection',
          id: 's22-righteousness-reflection',
          prompt: 'When have you kept a covenant or chosen righteousness when it would have been easier to break it? What did you learn about God in that moment?',
        },
      ],
    },

    /* ─── 2 Samuel 22:29–37 — Lamp and Lamp-lighter ────────────────────── */
    {
      ref: '2 Samuel 22:29–37',
      title: 'My Lamp and My Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 29,
              spans: [
                t('For thou art my '),
                hp('lamp', 's22-lamp'),
                t(', O Lord: and the Lord will '),
                hp('lighten my darkness', 's22-lighten'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('For by thee I have run through a troop: and by my God have I leaped over a wall.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('As for God, his way is perfect: the word of the Lord is tried: he is a buckler to all them that trust in him.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('For who is God save the Lord? or who is a rock save our God?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-sam-22-refuge-might',
          html:
            'The shield holds firm; the Lord trains David&apos;s hands. Distress transforms into strength. The refuge proves real when the arrows fly.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 33,
              spans: [
                t('God is my strength and power: and he maketh my way perfect.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('He maketh my feet like the feet of hinds, and setteth me upon my high places.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('He teacheth my hands to war; so that a bow of steel is broken by mine arms.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Thou hast also given me the shield of thy salvation: and thy gentleness hath made me great.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Thou hast enlarged my steps under me; so that my feet did not slip.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-lamp',
          html:
            'This is one of the most crystalline images in Scripture. "Thou art my lamp, O Lord." David is in darkness — literal darkness in caves and deserts, but also metaphorical darkness: the darkness of uncertainty, of not knowing what God will do next, of being hunted and afraid. In that darkness, God is not absent. God is the lamp that dispels it. A lamp does not explain the darkness; it shines against it. God is the presence that makes visible what was hidden.',
        },
        {
          kind: 'hebrew',
          id: 's22-ner',
          title: 'Ner — "Lamp" or "Light"',
          script: 'נֵר',
          translit: '<strong>Ner</strong> · lamp; light; the thing that burns to illuminate darkness',
          description:
            'A ner is more intimate than a general light. It is the lamp that stands in a home, the light that allows you to see your way. It is not the distant sun; it is the fire kept burning in the house. When David calls God his ner, he is claiming not an abstract cosmic principle, but an intimate, present light that guides his steps.',
        },
        {
          kind: 'commentary',
          id: 's22-lighten',
          html:
            '"The Lord will lighten my darkness." The verb is continuous — not "lightened" (past), but "will lighten" (ongoing). This is not one rescue, but a sustained illumination. As long as David walks in darkness, God will keep the lamp burning. David will not be left in blindness.',
        },
        {
          kind: 'commentary',
          id: 's22-perfect-way',
          html:
            'From the image of the lamp, David moves to the perfecting of his way: "God is my strength and power: and he maketh my way perfect." The way is not perfect because David is perfect; it is perfect because God directs it. God "setteth me upon my high places" — He elevates David not to pride, but to the high vantage point where David can see what God is doing. He "teacheth my hands to war" — even the skills David possesses are taught to him by God.',
        },
        {
          kind: 'christ',
          id: 's22-christ-light',
          title: 'Christ Connection — The Light of the World',
          html:
            'In the opening of John&apos;s Gospel, we encounter a lamp-lighter far greater than David imagined: "In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not" (John 1:4–5). Jesus is the ner of the world — not a lamp held against darkness, but the light itself. And He comes to those who walk in darkness: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). When David sang that God was his lamp, he was singing of the Christ who would make Himself the brightness that dispels every darkness.',
        },
        {
          kind: 'carry',
          html:
            'You are walking in some kind of darkness right now — a future you cannot see, a decision you cannot make, an uncertainty that shadows your steps. This passage does not promise the darkness will disappear. It promises that God is the lamp in the darkness. He will lighten it. You do not need to understand the whole path; you need to see the next step in the light He provides.',
        },
        {
          kind: 'reflection',
          id: 's22-lamp-darkness',
          prompt: 'What darkness are you walking in right now? What would it mean to let God be your lamp in it — to trust the light He gives for the next step, even if you cannot see the whole path?',
        },
      ],
    },

    /* ─── 2 Samuel 22:47–51 — Mercy to His Anointed, Forever ──────────────── */
    {
      ref: '2 Samuel 22:47–51',
      title: 'Mercy to His Anointed Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 47,
              spans: [
                t('The Lord liveth; and blessed be my rock; and exalted be the God of the rock of my salvation.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('It is God that avengeth me, and that bringeth down the people under me,'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And that bringeth me forth from mine enemies: thou also hast lifted me up on high above them that rose up against me: thou hast delivered me from the violent man.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('Therefore I will give thanks unto thee, O Lord, among the '),
                hg('heathen', 's22-heathen'),
                t(', and I will sing praises unto thy name.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('He is the '),
                hp('tower of salvation for his king', 's22-tower-king'),
                t(': and sheweth '),
                hp('mercy to his anointed', 's22-mercy-anointed'),
                t(', unto David, and to his seed for evermore.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's22-heathen',
          html:
            'David closes his song by turning outward. He will not keep this to himself. "Therefore I will give thanks unto thee, O Lord, among the heathen, and I will sing praises unto thy name." David&apos;s song becomes a proclamation. It is not a private prayer of gratitude; it is a public testimony. The heathen — those outside the covenant — will hear what God has done for David. This is the voice of a king who understands that his deliverance is also a word to the world.',
        },
        {
          kind: 'commentary',
          id: 's22-tower-king',
          html:
            '"He is the tower of salvation for his king" — the image returns to fortification, to security. But now it is specified: God is the tower for His king. This is not universal; this is covenant language. God makes Himself a tower for the one anointed by His hand. The king has a particular security because he is the Lord&apos;s anointed.',
        },
        {
          kind: 'commentary',
          id: 's22-mercy-anointed',
          html:
            'And the final word is "mercy to his anointed, unto David, and to his seed for evermore." This is the Davidic Covenant sealed. God&apos;s mercy does not end with David; it extends to his seed forever. The covenant that anointed David is a permanent covenant. Future generations will inherit the promise that God makes Himself a tower for the anointed line.',
        },
        {
          kind: 'hebrew',
          id: 's22-chesed',
          title: 'Chesed — "Mercy" or "Covenant Loyalty"',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · mercy; lovingkindness; covenant loyalty; the steadfast commitment to those you have covenanted with',
          description:
            'Chesed is not merely mercy in the sense of forgiveness. It is the active, ongoing commitment to the covenant. When God shows chesed to His anointed, He is renewing His promise, maintaining His oath, keeping faith with the one He has chosen. It is the love that lasts when all reasons to love have passed away.',
        },
        {
          kind: 'christ',
          id: 's22-christ-covenant',
          title: 'Christ Connection — The Eternal Davidic Anointing',
          html:
            'The song closes by affirming that mercy will extend "unto David, and to his seed for evermore." But who is the seed of David that will reign eternally? The New Testament answers: Christ. "And the angel said unto her, Fear not, Mary: for thou hast found favour with God. And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS. He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:30–33). The mercy promised to David&apos;s seed finds its fulfillment in the Christ who sits on David&apos;s throne eternally. He is the King for whom God is the tower, the Anointed One to whom mercy extends forever.',
        },
        {
          kind: 'carry',
          html:
            'David closes by turning his testimony outward — he will proclaim what God has done, not to keep it to himself, but to let the world see. When God has been your lamp in darkness, when He has been your rock in a flooded place, the natural response is to sing about it. Not for your own comfort, but because the world needs to know that there is a God like this. Your testimony is not yours alone; it is a word to the world about the character of God.',
        },
        {
          kind: 'reflection',
          id: 's22-mercy-forever',
          prompt: 'What is the deepest deliverance God has worked in your life? How might you bear witness to it, not as a private comfort, but as a testimony to others about the faithfulness of God?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Samuel 22',
    quote:
      'David sings the song of a man who has lived long enough to see that God keeps His word. From the opening declaration of God as rock and fortress, to the theophany where He bends the heavens and rides upon the cherub, to the closing affirmation of covenant mercy — this is the testimony of a life lived in trust.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 22 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-david-king',
      kind: 'study',
      source: 'Sefaria',
      label: 'David as King of Israel',
      url: 'https://www.sefaria.org/2_Samuel.1',
      description: 'David&apos;s consolidation of power and establishment of monarchy over united Israel.',
    },
    {
      id: 'iaa-city-david',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'City of David Excavations',
      url: 'https://www.antiquities.org.il/',
      description: 'Continuous excavation revealing David-era structures and urban development in Jerusalem.',
    },
    {
      id: 'bible-odyssey-jerusalem',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Jerusalem Captured',
      url: 'https://www.bibleodyssey.org/dictionary/jerusalem/',
      description: 'David&apos;s capture of the Jebusite city and establishment as Israel&apos;s capital.',
    },
  ],
};
