import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 19 — Elijah at Horeb: The Still Small Voice
 *
 * After the triumph at Mount Carmel — where Elijah called down fire from heaven
 * and the people turned from Baal — the prophet flees into the wilderness,
 * broken by despair and a queen's threat. In the darkness of his collapse,
 * God does not meet him with thunder or earthquake or fire. Instead, a gentle
 * voice speaks in the silence. And from that quiet word, the prophet is sent
 * to anoint three kings and call a successor.
 *
 * This is the chapter about the crash after the victory, about the prophet's
 * fatigue, about God's pastoral care of His weary servants, and about how
 * the Almighty speaks not in the noise of the world, but in the still small voice.
 */

export const KINGS_1_19: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 19,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 20 },
  intros: [
    'The prophet Elijah has just experienced one of the most dramatic moments in Scripture. At Mount Carmel, before the entire nation of Israel, he challenged the prophets of Baal to a contest: which god would send fire from heaven to consume the altar? For hours, the prophets of Baal called out, cutting themselves, crying aloud — and nothing answered. Then Elijah offered his sacrifice, and the fire of the Lord fell from heaven, consuming not only the offering, but the altar itself, the stones, the dust, and all the water in the trench. The people saw it, and they cried out: "The Lord, he is the God! The Lord, he is the God!" And Elijah, in that moment of vindication, commanded the people to seize the false prophets — and all 450 of them were put to the sword.',
    'It was a perfect victory. A moment of undeniable triumph. And yet, in the very next chapter, we find the prophet fleeing for his life, broken and alone, asking God to let him die.',
    'This is the most human moment in Elijah&apos;s story — the crash after the mountaintop, the despair of a man who has given everything and feels he has failed. And it is in this darkness that God speaks to him most gently.',
  ],

  sections: [
    /* ─── 1 Kings 19:1–3 — Jezebel's Threat; Elijah's Flight ────────────── */
    {
      ref: '1 Kings 19:1–3',
      title: 'The Threat and the Flight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hg('Ahab told Jezebel', 'flight-ahab'),
                t(' all that Elijah had done, and how he had slain all the prophets with the sword.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then Jezebel sent a messenger unto Elijah, saying, '),
                hg('So let the gods do to me', 'flight-oath'),
                t(', and more also, if I make not thy life as the life of one of them by tomorrow about this time.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And when he saw that, he arose, and went for his life, and came to Beer-sheba, which belongeth to Judah, and left his servant there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'flight-ahab',
          html:
            'Ahab reports to Jezebel what has happened. He does not boast of Elijah&apos;s victory as if it vindicated him — instead, he delivers news of catastrophe. All the prophets of Baal are dead. The false religion has been exposed and its servants destroyed. For a moment, you might think Ahab would be chastened, that the display of the Lord&apos;s power would turn him. Instead, he goes home and reports it all to his wife.',
        },
        {
          kind: 'commentary',
          id: 'flight-oath',
          html:
            'Jezebel responds with fury and an oath. This is not a calculated threat; this is a queen whose false gods have been shamed before all Israel. "So let the gods do to me, and more also" — she invokes her own gods in a curse, swearing that Elijah&apos;s life will be forfeit. By tomorrow at this time, she says, he will be as dead as the prophets he slew. And what does the great prophet do? He flees.',
        },
        {
          kind: 'commentary',
          id: 'flight-flesh',
          html:
            'In this moment, Elijah&apos;s faith becomes human-scale. He has just called down fire from heaven. He has just seen the whole nation turn from Baal. And now, hearing a threat from a woman — not from God, not from an army, but from Jezebel&apos;s mouth — he abandons his post and runs. He leaves his servant in Beer-sheba and goes into the wilderness alone, abandoning even his faithful companion in his flight.',
        },
        {
          kind: 'carry',
          html:
            'After the greatest victories, despair can strike fastest. The prophet who stood fearless before all Israel runs in terror from a single threat. What conquers our faith is often not the public trial, but the private word, not the grand battle but the personal threat. Do you recognize the pattern in your own heart — how quickly confidence can collapse, how a single voice can undo what seemed unshakeable?',
        },
        {
          kind: 'reflection',
          id: 'flight-reflection',
          prompt: 'When have you experienced a crash after a victory? What brought you down — external threat, exhaustion, or the weight of what you had just endured?',
        },
      ],
    },

    /* ─── 1 Kings 19:4–8 — The Angel's Bread ──────────────────────────── */
    {
      ref: '1 Kings 19:4–8',
      title: 'The Angel&apos;s Care',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 4,
              spans: [
                t('But he himself went a day&apos;s journey into the wilderness, and came and sat down under a juniper tree: and he requested for himself that he might '),
                hg('die', 'bread-die'),
                t('; and said, It is enough; now, O Lord, take away my life; for I am not better than my fathers.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And as he lay and slept under a juniper tree, behold, then an angel '),
                hg('touched him', 'bread-touch'),
                t(', and said unto him, Arise and eat.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he looked, and, behold, there was a cake baken on the coals, and a cruse of water at his head. And he did eat and drink, and laid him down again.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the angel of the Lord came again the second time, and touched him, and said, Arise and eat; because the '),
                hg('journey is too great for thee', 'bread-journey'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he arose, and did eat and drink, and went in the strength of that meat 40 days and 40 nights unto Horeb the mount of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bread-die',
          html:
            'Elijah sits beneath a juniper tree and asks God to let him die. "It is enough" — a phrase of utter exhaustion. "I am not better than my fathers," he says — not claiming he is worse, but that he has failed in some essential way. The prophet who moments ago commanded the sky, who watched fire fall from heaven, now sits alone and begs for death. This is the depth of spiritual despair.',
        },
        {
          kind: 'hebrew',
          id: 'bread-hebrew',
          title: 'דַּיָּה <em>Dayyah</em> — "It is Enough"',
          script: 'דַּיָּה',
          translit: '<strong>Dayyah</strong> · it is enough; sufficient; used in resignation and closure',
          description:
            'The word "dayyah" carries the weight of finality. It is the word a person speaks when they have come to the end of something — when endurance is exhausted, when they cannot go further. Elijah does not say "I am tired" or "I am afraid." He says "it is enough" — as though his very existence has become a burden too great to bear.',
        },
        {
          kind: 'commentary',
          id: 'bread-touch',
          html:
            'And then, in his sleep, an angel touches him. Not with a thunderous proclamation, not with a vision or a voice that wakes him with a start. A gentle touch. A simple gesture of care. The angel&apos;s message is not theological; it is practical: "Arise and eat." The first word of God&apos;s care for the broken prophet is not doctrine but bread.',
        },
        {
          kind: 'commentary',
          id: 'bread-journey',
          html:
            'The angel comes a second time with the same message, but now with reason: "because the journey is too great for thee." The Lord knows what lies ahead. The prophet cannot reach Horeb in his current state. He needs food, rest, strength. God does not rebuke Elijah for his despair; instead, He cares for his body, his needs, his weakness.',
        },
        {
          kind: 'hebrew',
          id: 'bread-horeb',
          title: 'חוֹרֵב <em>Horeb</em> — "The Mount of God"',
          script: 'חוֹרֵב',
          translit: '<strong>Horeb</strong> · another name for Mount Sinai; the place where Moses met God',
          description:
            'Elijah is being sent to Horeb — the same mountain where Moses stood, where God gave the Ten Commandments, where the whole covenant at Sinai was established. It is not a place of mere survival; it is a place of revelation. And Elijah, strengthened by the angel&apos;s bread, will walk 40 days and 40 nights to reach it.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s pastoral care is not always theology; sometimes it is bread. When you are broken, what you need first is not a lesson, but a touch. Not a sermon, but food. Not a command, but rest. The Almighty knows the shape of human weakness and meets us, first, in the body&apos;s need. What does your soul need before it can hear God? What breaking needs to be met with simple kindness before you can stand?',
        },
        {
          kind: 'reflection',
          id: 'bread-reflection',
          prompt: 'When you have been in despair, who has "touched" you with simple kindness? Who has offered you "bread" when you needed it most?',
        },
      ],
    },

    /* ─── 1 Kings 19:9–10 — "What Doest Thou Here, Elijah?" ───────────── */
    {
      ref: '1 Kings 19:9–10',
      title: 'The Question in the Cave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 9,
              spans: [
                t('And he came thither unto a cave, and lodged there; and, behold, the word of the Lord came to him, and he said unto him, '),
                hg('What doest thou here', 'cave-what'),
                t(', Elijah?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said, I have been very jealous for the Lord God of hosts: for the children of Israel have forsaken thy covenant, thrown down thine altars, slain thy prophets with the sword; and '),
                hg('I, even I only, am left', 'cave-alone'),
                t('; and they seek my life, to take it away.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cave-what',
          html:
            'Elijah has reached Horeb and entered a cave. And God&apos;s first words to him are not comfort, not vindication, but a question: "What doest thou here?" It is a question that asks for accounting, for honesty. Not "Why did you flee?" or "Why did you give up?" but simply "What are you doing here?" God invites the prophet to speak his pain.',
        },
        {
          kind: 'commentary',
          id: 'cave-alone',
          html:
            'Elijah&apos;s answer is a lament. He has been jealous for the Lord — faithful, devoted. The children of Israel have forsaken the covenant, thrown down the altars, killed the prophets. And as for him: "I, even I only, am left." This is the prophet&apos;s deepest lie. He believes he is alone. He believes he has failed. He believes that the work of the Lord rests on him, and him alone, and he is not enough.',
        },
        {
          kind: 'carry',
          html:
            'The false aloneness is often the deepest temptation of the faithful servant. You believe the work depends on you. You believe no one else is faithful. You believe you are the only one holding back the tide. And in that belief, you collapse. But the Lord&apos;s work does not rest on a single human being. There are always others. There is always a remnant. You are not as alone as your despair tells you.',
        },
        {
          kind: 'reflection',
          id: 'cave-reflection',
          prompt: 'When have you felt the weight of being "the only one left"? Who was God actually using that you could not see?',
        },
      ],
    },

    /* ─── 1 Kings 19:11–13 — The Still Small Voice ────────────────────── */
    {
      ref: '1 Kings 19:11–13',
      title: 'The Still Small Voice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 11,
              spans: [
                t('And he said, Go forth, and stand upon the mount before the Lord. And, behold, the Lord passed by, and a great and strong wind rent the mountains, and brake in pieces the rocks before the Lord; but the Lord was not in the wind: and after the wind an earthquake; but the Lord was not in the earthquake:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And after the earthquake a fire; but the Lord was not in the fire: and '),
                hp('after the fire a still small voice', 'voice-still'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it was so, when Elijah heard it, he wrapped his face in his mantle, and went out, and stood in the entering in of the cave. And there came a voice unto him, and said, What doest thou here, Elijah?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'voice-hebrew',
          title: 'קוֹל דְּמָמָה דַקָּה — <em>Qol Demamah Daqqah</em>',
          script: 'קוֹל דְּמָמָה דַקָּה',
          translit: '<strong>Qol demamah daqqah</strong> · a still small voice; a thin whisper; a tender sound',
          description:
            'This phrase is one of the most resonant in all of Scripture. Qol means "voice"; demamah suggests silence or calm; daqqah means thin, small, subtle. It is not a roar or a trumpet or a thunderbolt. It is the sound of absolute stillness — a voice so soft that you must be silent to hear it, so small that the world&apos;s noise drowns it out, so thin that strength and bravado blind you to it.',
        },
        {
          kind: 'commentary',
          id: 'voice-wind',
          html:
            'God passes by Elijah. But first, a mighty wind tears the mountains and breaks the rocks. The wind of divine power — the same kind of wind that drove back the Red Sea, that toppled the walls of Jericho. But the Lord is not in the wind. This is not a lesson about quietness over noise, as though God were choosing the smaller option. It is a revelation: the true voice of God is not the storm.',
        },
        {
          kind: 'commentary',
          id: 'voice-earthquake',
          html:
            'Then an earthquake. The earth itself trembles — creation shakes. But the Lord is not in the earthquake. Not in the cosmic upheaval. Not in the signs and wonders that Elijah has known and worked. Not in the visible, the dramatic, the unmistakable.',
        },
        {
          kind: 'commentary',
          id: 'voice-fire',
          html:
            'Then fire. The same fire that fell on the altar at Carmel. The same divine power that consumed the offering and the water in the trench. Fire — the sign of God&apos;s presence and judgment. But the Lord is not in the fire. Not even in the power that Elijah has wielded, the power that vindicated him.',
        },
        {
          kind: 'commentary',
          id: 'voice-still',
          html:
            'And after the fire — a still small voice. No thunder. No tremor. No flames. Only a whisper, so gentle that Elijah must wrap his face in his mantle to hear it, must come out of the cave to listen. The Lord speaks not in the language of the world&apos;s power, but in the language of intimacy. The God who moves mountains speaks first to the broken prophet in a voice meant for his ear alone.',
        },
        {
          kind: 'carry',
          html:
            'In a world of noise, drama, and clamor for attention, the voice of God is stillness. It does not shout. It does not compel. It asks you to be so quiet, so attentive, so emptied of your own agenda, that you can hear a whisper. What in your life is too loud for you to hear the still small voice? What must you stop doing, stop believing, stop demanding, so that you can listen?',
        },
        {
          kind: 'reflection',
          id: 'voice-reflection',
          prompt: 'When have you heard God speaking to you most clearly — and was it in the storm, the earthquake, the fire, or in stillness? What had to quiet in you first?',
        },
      ],
    },

    /* ─── 1 Kings 19:14–18 — 7,000 Not Bowed to Baal ──────────────────── */
    {
      ref: '1 Kings 19:14–18',
      title: 'The Truth: You Are Not Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 14,
              spans: [
                t('And he said, I have been very jealous for the Lord God of hosts: because the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the Lord said unto him, Go, return on thy way to the wilderness of Damascus: and when thou comest, anoint Hazael to be king over Syria:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Jehu the son of Nimshi shalt thou anoint to be king over Israel: and Elisha the son of Shaphat of Abelmeholah shalt thou anoint to be prophet in thy room.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('It shall come to pass, that him that escapeth the sword of Hazael shall Jehu slay: and him that escapeth from the sword of Jehu shall Elisha slay.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Yet I have left me '),
                hg('7,000 in Israel', 'remnant-seven'),
                t(', all the knees which have not bowed unto Baal, and every mouth which hath not kissed him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'remnant-lament',
          html:
            'Elijah repeats his lament — word for word, the same complaint. And this time, God does not comfort him with more food or rest. This time, God answers with truth. The prophet&apos;s despair is understandable, human, real. But it is not accurate.',
        },
        {
          kind: 'commentary',
          id: 'remnant-seven',
          html:
            'God says: "Yet I have left me 7,000 in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him." The number 7,000 is symbolic — the completeness of a remnant. And these 7,000 have never bowed. They have remained faithful. They are invisible in Israel&apos;s cities and houses, hidden from the prophet&apos;s view, but real. Present. Faithful.',
        },
        {
          kind: 'commentary',
          id: 'remnant-commission',
          html:
            'And then God gives Elijah his commission: anoint Hazael to be king over Syria, anoint Jehu to be king over Israel, anoint Elisha as your successor. The prophet is not finished. The work is not ending. Instead, it is multiplying. Elijah is being sent to enlarge the work, not to conclude it. He is given three successors — one king of a foreign nation, one king of Israel, and one prophet to carry on after him.',
        },
        {
          kind: 'carry',
          html:
            'The prophet believed he was alone, and God told him the truth: there are 7,000 you do not see. There are faithful people hidden in the spaces of the world, loyal in the dark, unmourned and unknown to you. And more: your work will not end with you. Others will carry it forward. Your fatigue does not mean failure. Your invisibility of the faithful does not mean the faithful are gone. Trust what you cannot see.',
        },
        {
          kind: 'reflection',
          id: 'remnant-reflection',
          prompt: 'When have you felt like the only one standing for something you believe in? What would it mean to trust that there are 7,000 you cannot see?',
        },
      ],
    },

    /* ─── 1 Kings 19:19–21 — Elisha Called from the Plow ────────────────── */
    {
      ref: '1 Kings 19:19–21',
      title: 'The Call of Elisha',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 19,
              spans: [
                t('So he departed thence, and found Elisha the son of Shaphat, who was plowing with 12 yoke of oxen before him, and he with the twelfth: and Elijah passed by him, and '),
                hg('cast his mantle upon him', 'call-mantle'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he left the oxen, and ran after Elijah, and said, Let me, I pray thee, kiss my father and my mother, and then I will follow thee. And he said unto him, Go back again: for what have I done to thee?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he returned back from him, and took a yoke of oxen, and slew them, and boiled their flesh with the instruments of the oxen, and gave unto the people, and they did eat. Then he arose, and went after Elijah, and ministered unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'call-plow',
          html:
            'Elijah finds Elisha in the field, plowing with 12 yoke of oxen — a wealthy farmer, well-established, with servants and livestock. This is not a poor man desperate for a better life. This is a man of substance. And he is working, his hands on the plow, his mind on the immediate task.',
        },
        {
          kind: 'hebrew',
          id: 'call-adderet',
          title: 'אַדֶּ֫רֶת <em>Adderet</em> — "Mantle" or "Cloak"',
          script: 'אַדֶּ֫רֶת',
          translit: '<strong>Adderet</strong> · garment; mantle; the sign of a prophet',
          description:
            'The mantle is Elijah&apos;s symbol of office — the mark of the prophet. When he casts it upon Elisha, he is not simply offering a garment; he is offering a calling. The mantle is the visible sign of an invisible commission. To receive the mantle is to accept the burden and the grace of being God&apos;s spokesman.',
        },
        {
          kind: 'commentary',
          id: 'call-mantle',
          html:
            'Elijah passes by Elisha in the field and casts his mantle upon him — a silent gesture, a wordless call. No explanation. No persuasion. Just the mantle falling on his shoulders. And Elisha understands. He leaves the oxen and runs after Elijah.',
        },
        {
          kind: 'commentary',
          id: 'call-farewell',
          html:
            'But Elisha asks: let me go back and kiss my father and mother goodbye. This is not rejection; it is honoring the past before entering the future. Elijah&apos;s response is cryptic: "Go back again: for what have I done to thee?" Not harsh, but a test. Are you truly ready to leave everything? Are you sure this is what you choose?',
        },
        {
          kind: 'commentary',
          id: 'call-oxen',
          html:
            'And Elisha returns to his fields. He takes a yoke of oxen and slaughters them — burning the plow and the instruments of his former labor, boiling the meat, and distributing it to the people. In one gesture, he severs himself from his old life. He burns the bridges behind him. The oxen he will no longer use, the plow he will no longer take up, the wealth he will no longer depend on — all given away, all left behind.',
        },
        {
          kind: 'christ',
          id: 'call-christ',
          title: 'Christ Connection — The Call to Radicalness',
          html:
            'When Jesus called His disciples, He said: "Let the dead bury their dead: but go thou and preach the kingdom of God" (Luke 9:60). He called them away from the security of boat and net, from family, from the life they had built. Elisha&apos;s burning of the plow is a symbol of that radical break — the willingness to sever yourself from all you have known, to trust entirely in the call of God. Christ calls not those with one foot in the old life and another in the new. He calls for the burning of the bridges, the complete relinquishment, the willingness to become a servant.',
        },
        {
          kind: 'carry',
          html:
            'What mantle has God cast upon you? And what old life have you not yet burned? What security are you still holding, what option are you still keeping open, what bridge are you still leaving unburned? The call of God is a call to wholeness, not to half-measures. Not to do it when it is convenient, but to do it now, completely, with everything you are.',
        },
        {
          kind: 'reflection',
          id: 'call-reflection',
          prompt: 'What would it mean for you to burn the plow? What would you have to release to fully follow the call you sense in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Kings 19',
    quote:
      'After the triumph comes the crash. In the depths of despair, God does not meet the prophet with thunder or fire, but with a still small voice — and the truth that he is not alone.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 19 · Study Guide',
  },

  hasHebrew: true,
};
