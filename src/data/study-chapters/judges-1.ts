import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 1 — Incomplete Conquest
 *
 * The generation after Joshua begins well but settles for less than God promised.
 * A chapter of partial victories, iron chariots, compromised tribes, and the
 * shadow of what faithlessness will cost. The pattern is: did not drive out,
 * became tributaries, dwelt among them. The danger of slow assimilation.
 */
export const JUDGES_1: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 1,

  intros: [
    'Joshua is dead. Israel has inherited a land not yet fully claimed. The children of Judah ask the Lord who will lead them into battle against the remaining Canaanites, and the Lord answers: Judah shall go first. What follows is a story of victories, yes — but also of a people who begin to make compromises that will haunt them for generations. Iron chariots they couldn&apos;t defeat. Canaanites they couldn&apos;t drive out. And slowly, almost imperceptibly, a generation&apos;s faith becomes the next generation&apos;s failure.',
    'Judges 1 is Joshua&apos;s story played in reverse. Where Joshua&apos;s conquest account rings with the victories God won through His people, Judges 1 echoes with absences — the cities NOT taken, the peoples NOT driven out, the tributes PAID instead of faith KEPT. The chapter refuses to hide the reality: obedience in the first generation is not guaranteed in the second. The land remains half-conquered, and Israel is about to learn what compromise costs.',
  ],

  bottomShare: {
    label: 'Share Judges 1',
    quote:
      'After Joshua&apos;s death, Israel asked the Lord who would lead them next. But when victory grew difficult, they chose compromise instead of faith — and a half-conquered land became a trap.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 1 · Study Guide',
  },

  sections: [
    /* ─── Judges 1:1–3 — Judah Goes First ────────────────────────────── */
    {
      ref: 'Judges 1:1–3',
      title: 'Judah Goes First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now after the death of Joshua it came to pass, that the children of Israel asked the Lord, saying, '),
                hp('Who shall go up for us against the Canaanites first', 'christ-lord-guides'),
                t(', to fight against them?'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the Lord said, '),
                hg('Judah shall go up', 'judah-chosen'),
                t(': behold, I have delivered the land into his hand.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And '),
                hy('Judah', 'hebrew-judah'),
                t(' called Simeon his brother to go with him. And they smote of the Canaanites and the Perizzites ten thousand men at Bezek.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-chosen',
          html:
            'Joshua is dead, yet Israel knows to ask the Lord who should lead. The answer comes clearly: Judah. This is the first generation after Joshua, and they still seek God&apos;s face before they act. Judah calls his brother Simeon — an echo of the solidarity that helped them conquer at the beginning. They fight together and defeat ten thousand Canaanites and Perizzites at Bezek. The victory is real. But it is not the whole story.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-judah',
          title: 'Yehudah — "Judah"',
          script: 'יְהוּדָה',
          translit: '<strong>yehudah</strong> · he who praises the Lord',
          description:
            'Judah&apos;s name means "praised by the Lord" or "praise the Lord." The tribe that is called to lead first begins with God&apos;s name in their name. Yet by the end of Judges 1, even Judah&apos;s victories will be shadowed by what they could not do.',
        },
        {
          kind: 'carry',
          html:
            'When you start a hard thing, the first question matters most: "What does God want me to do?" If you ask that, and you ask it with the people He&apos;s given you to stand with, the battle often begins well. But beginning well is not the same as finishing well. How you honor the first victories — whether you let them make you confident in yourself or faithful to the God who gave them — shapes everything that comes next.',
        },
        {
          kind: 'reflection',
          id: 'judah-first',
          prompt: 'What is the hardest thing God is calling you to right now? Are you asking Him about it, or are you going in on your own strength?',
        },
      ],
    },

    /* ─── Judges 1:4–7 — Adoni-Bezek&apos;s Reciprocal Judgment ────────── */
    {
      ref: 'Judges 1:4–7',
      title: 'The Measure of a Man&apos;s Own Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And they found '),
                hg('Adoni-bezek', 'adoni-bezek-id'),
                t(' in Bezek: and they fought against him, and smote the Canaanites and the Perizzites.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But Adoni-bezek fled; and they pursued after him, and caught him, and '),
                hy('cut off his thumbs and his great toes', 'hebrew-severing'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Adoni-bezek said, '),
                hp('Threescore and ten kings, having their thumbs and their great toes cut off, gathered their meat under my table', 'christ-judgment-mercy'),
                t(': as I have done, so God hath requited me. And they brought him to Jerusalem; and there he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'adoni-bezek-id',
          html:
            'Adoni-bezek — "lord of Bezek" — is caught in battle. The Israelites cut off his thumbs and great toes, the same mutilation he had inflicted on seventy kings he had conquered. His own confession reveals the judgment: he knows exactly what he did, and he recognizes what he is receiving. He lived by the lex talionis, the law of retaliation, and now he sees that law applied to himself. There is a dark kind of honesty in his words.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-severing',
          title: 'Qatsats — "cut off"',
          script: 'קָצַץ',
          translit: '<strong>qatsats</strong> · to sever, amputate, cut down',
          description:
            'The mutilation of hands and feet was a standard practice among ancient Near Eastern kings to incapacitate prisoners and mark them as conquered. Adoni-bezek&apos;s own history catches up to him.',
        },
        {
          kind: 'christ',
          id: 'christ-judgment-mercy',
          title: 'Christ Connection — Judgment and Mercy',
          html:
            'Adoni-bezek&apos;s words echo something profound: he sees his suffering as justice, not injustice. He admits the reciprocity. The Bible teaches throughout that God judges by what we have done — yet the Gospel reveals something Adoni-bezek never saw: mercy that transcends the lex talionis. Jesus, facing the cross, teaches His disciples: "Blessed are the merciful: for they shall obtain mercy" (Matt. 5:7). Where judgment demands an eye for an eye, Christ teaches us to break that cycle.',
        },
        {
          kind: 'carry',
          html:
            'Every cruelty we commit sets in motion a kind of judgment. Not always visible. Not always swift. But the universe seems to bend toward balancing what was unbalanced. The mercy is that we can interrupt that cycle — not by ignoring what we&apos;ve done, but by turning, confessing, and asking God to change the trajectory. Adoni-bezek could not. But you can.',
        },
        {
          kind: 'reflection',
          id: 'adoni-bezek',
          prompt: 'Is there a way you&apos;ve treated others that you now know will come back around? What would it look like to break that cycle through confession and change?',
        },
      ],
    },

    /* ─── Judges 1:8–13 — Caleb and Achsah Revisited ──────────────────── */
    {
      ref: 'Judges 1:8–13',
      title: 'Caleb&apos;s Inheritance Echoed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('Now the children of Judah had fought against Jerusalem, and had taken it, and smitten it with the edge of the sword, and set the city on fire.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And afterward the children of Judah went down to fight against the Canaanites, that dwelt in the '),
                hy('mountain, and in the south', 'hebrew-region'),
                t(', and in the valley.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Judah went against the Canaanites that dwelt in Hebron: (now the name of Hebron before was Kirjath-arba:) and they slew Sheshai, and Ahiman, and Talmai.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And from thence he went against the inhabitants of Debir: and the name of Debir before was Kirjath-sepher:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Caleb said, He that smiteth Kirjath-sepher, and taketh it, '),
                hg('I will give him Achsah my daughter to wife', 'caleb-promise'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And '),
                hy('Othniel', 'hebrew-othniel'),
                t(' the son of Kenaz, Caleb&apos;s younger brother, took it: and he gave him Achsah his daughter to wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-promise',
          html:
            'This story is a memory, a repetition from Joshua 15. Caleb promises his daughter Achsah as a reward to whoever takes Debir (Kirjath-sepher). Othniel, Caleb&apos;s own younger brother, takes the city and wins the bride. The inclusion here is deliberate: Judges 1 is reminding the reader of victories already won, already accomplished. Caleb was the faithful spy who believed God forty years earlier; his inheritance is secured. But the recounting of this old victory at the start of Judges suggests the author is looking backward, not forward. The great deeds are behind them.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-othniel',
          title: 'Othniel — "God is His Strength"',
          script: 'עׇתְנִיאֵל',
          translit: '<strong>othniel</strong> · God is my strength',
          description:
            'Othniel&apos;s name means "God is His strength" or "God is my strength." He is the faithful brother, the one who takes the city and claims his prize. Later in Judges, Othniel will be called as a judge to save Israel in their distress. But here he is young, strong, and victorious — a portrait of what the generation of conquest looked like.',
        },
        {
          kind: 'carry',
          html:
            'Faithfulness often looks modest in the moment — showing up, taking on the hard task, trusting that God will honor His promises. Othniel did what Caleb asked, the city fell, and he won the woman he would marry. The spiritual strength Othniel&apos;s name proclaims came through simple obedience and courage. It is never wasted.',
        },
        {
          kind: 'reflection',
          id: 'othniel-faith',
          prompt: 'Who in your life embodies faithful strength the way Othniel did? What can you learn from watching them?',
        },
      ],
    },

    /* ─── Judges 1:14–21 — Strong in the Mountain, Weak in the Valley ──── */
    {
      ref: 'Judges 1:14–21',
      title: 'The Iron Chariots They Could Not Defeat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And it came to pass, when she came to him, that she moved him to ask of her father a field: and she lighted off her ass; and Caleb said unto her, What wilt thou?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And she said unto him, Give me a blessing; for thou hast given me a south land; give me also springs of water. And Caleb gave her the upper springs and the nether springs.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the children of the Kenites, Moses&apos; father-in-law, went up out of the city of palm trees with the children of Judah into the wilderness of Judah, which lieth in the south of Arad; and they went and dwelt among the people.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Judah went with Simeon his brother, and they smote the Canaanites that dwelt in Zephath, and utterly destroyed it. And the name of the city was called Hormah.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Also Judah took Gaza with the coast thereof, and Askelon with the coast thereof, and Ekron with the coast thereof.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the Lord was with Judah; and he drave out the inhabitants of the mountain; '),
                hy('but could not drive out the inhabitants of the valley, because they had chariots of iron', 'hebrew-iron-chariots'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-iron-chariots',
          html:
            'This is the crucial verse. Judah is victorious in the highlands — the mountain regions where chariots are useless and faith alone will suffice. But in the lowlands, in the valleys where the Canaanite iron chariots can maneuver freely, Judah falters. The excuse is offered: <em>they had chariots of iron</em>. But the real problem is not the enemy&apos;s strength. It is Israel&apos;s faith. The same God who delivered the land into Judah&apos;s hand in verse 2 is present now. Yet when the terrain becomes difficult and the enemy has superior technology, the first generation&apos;s children look at the obstacle instead of looking at their God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-iron-chariots',
          title: 'Rekev Barzel — "chariots of iron"',
          script: 'רֶכֶב בַּרְזֶל',
          translit: '<strong>rekev barzel</strong> · iron chariot, war machine',
          description:
            'The iron chariot was the cutting-edge military technology of the ancient world. Chariots allowed warriors to strike with speed and force across open ground. But they were useless in the mountains. The Canaanites had adapted to the terrain — Judah had not adapted their faith.',
        },
        {
          kind: 'christ',
          id: 'christ-conquest-complete',
          title: 'Christ Connection — Complete Conquest',
          html:
            'In the New Testament, Paul writes about the armor of God and the weapons of our warfare: "The weapons of our warfare are not carnal, but mighty through God" (2 Cor. 10:4). Every "iron chariot" believers face — addiction, fear, temptation, doubt — is conquered not by matching the enemy&apos;s strength but by faith. Christ did what Israel could not: He completed the conquest. In Him, there are no valleys left unconquered, no enemies that cannot be overcome. The limitation is never His power; it is always our faith.',
        },
        {
          kind: 'carry',
          html:
            'There is likely a valley in your life right now — a place where the obstacle looks too big, the enemy too well-armed, the terrain too difficult. You look at it the way Judah looked at the plains, and you think: I can&apos;t do this. But the God who drove out the mountain dwellers has not changed. What feels like an iron chariot to you is nothing to Him. The boundary is your faith, not His power.',
        },
        {
          kind: 'reflection',
          id: 'valley-faith',
          prompt: 'What "iron chariot" have you been staring at, convinced you cannot overcome it? What would change if you believed God more than you believe in that obstacle?',
        },
      ],
    },

    /* ─── Judges 1:21–35 — The Long Refrain of Failure ────────────────── */
    {
      ref: 'Judges 1:21–35',
      title: 'The Pattern That Became a Trap',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 21,
              spans: [
                t('But the children of Benjamin '),
                hg('did not drive out the Jebusites', 'jebusites-dwell'),
                t(' that inhabited Jerusalem; but the Jebusites dwell with the children of Benjamin in Jerusalem unto this day.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the house of Joseph, they also went up against Bethel: and the Lord was with them.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the house of Joseph sent to descry Bethel. (Now the name of the city before was Luz.)'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the spies saw a man come forth out of the city, and they said unto him, Shew us, we pray thee, the entrance into the city, and we will shew thee mercy.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And when he shewed them the entrance into the city, they smote the city with the edge of the sword; but they let go the man and all his kindred.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the man went into the land of the Hittites, and built a city, and called the name thereof Luz: which is the name thereof unto this day.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Neither did Manasseh drive out the inhabitants of Beth-shean and her towns, nor Taanach and her towns, nor the inhabitants of Dor and her towns, nor the inhabitants of Ibleam and her towns, nor the inhabitants of Megiddo and her towns: but the Canaanites would dwell in that land.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And it came to pass, when Israel was strong, that they put the Canaanites to '),
                hy('tribute', 'hebrew-tribute'),
                t(', and '),
                hg('did not utterly drive them out', 'compromise-trap'),
                t('.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Neither did Ephraim drive out the Canaanites that dwelt in Gezer; but the Canaanites dwelt in Gezer among them.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Neither did Zebulun drive out the inhabitants of Kitron, nor the inhabitants of Nahalol; but the Canaanites dwelt among them, and became tributaries.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Neither did Asher drive out the inhabitants of Accho, nor the inhabitants of Zidon, nor of Ahlab, nor of Achzib, nor of Helbah, nor of Aphik, nor of Rehob:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('But the Asherites dwelt among the Canaanites, the inhabitants of the land: for they did not drive them out.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Neither did Naphtali drive out the inhabitants of Beth-shemesh, nor the inhabitants of Beth-anath; but he dwelt among the Canaanites, the inhabitants of the land: nevertheless the inhabitants of Beth-shemesh and of Beth-anath became tributaries unto them.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the Amorites forced the children of Dan into the mountain: for they would not suffer them to come down to the valley:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('But the Amorites would dwell in the mount Heres in Aijalon, and in Shaalbim: yet the hand of the house of Joseph prevailed, so that they became tributaries.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'compromise-trap',
          html:
            'The refrain is relentless. Tribe after tribe: did not drive out. Became tributaries. Dwelt among them. This is not accidental. This is the way compromise works. It does not announce itself as surrender. It begins as a practical decision. <em>The Canaanites seem to have resources we could use; maybe we can work something out.</em> Tribute flows. Trade begins. Marriages happen. A generation later, no one remembers why the boundary ever mattered.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tribute',
          title: 'Mas — "tribute"',
          script: 'מַס',
          translit: '<strong>mas</strong> · tribute, forced labor, tax exacted by conquest',
          description:
            'The Israelites thought they were clever — let the Canaanites stay, but extract tribute, force them to work. What they did not see was that you cannot separate a people you live among from their gods, their practices, their slow influence on your own children. Compromise that seems practical is often the most costly.',
        },
        {
          kind: 'commentary',
          id: 'jebusites-dwell',
          html:
            'Notice the editorial note: the Jebusites dwell with Benjamin "unto this day" — the author is writing after the conquest, looking back at the failure that persisted. The Jebusites were not driven out at the time of conquest. They remained. And centuries later, when David became king, he had to deal with that unfinished business (2 Samuel 5:6–8). Compromise does not disappear; it compounds.',
        },
        {
          kind: 'christ',
          id: 'christ-partial-obedience',
          title: 'Christ Connection — The Danger of Partial Obedience',
          html:
            'Paul writes: "A little leaven leaveneth the whole lump" (Gal. 5:9). One command disobeyed. One boundary crossed. One compromise accepted. That is how kingdoms fall. Jesus taught His disciples the same truth: you cannot serve two masters; no one can put his hand to the plow and look back (Luke 9:62). The victory Christ won at the cross is total and complete. There is no "tribute" to be paid to sin, no arrangement where evil gets a small corner of your heart. Total surrender is the only path to total freedom.',
        },
        {
          kind: 'carry',
          html:
            'Look at your own life: where have you made a compromise that looked practical at the time? Agreed to keep in touch with someone whose influence was slowly undermining you? Stayed in a situation that you told yourself was "not that bad"? Left one sin unconquered, thinking you could manage it? The pattern from Judges is clear: the enemies you do not fully drive out will slowly take over the land you thought was yours. Total obedience feels harder in the moment. Partial obedience feels wise. But it is the slow road to losing everything.',
        },
        {
          kind: 'reflection',
          id: 'compromise-cost',
          prompt: 'Where are you accepting tribute instead of demanding complete victory? What would you need to do to take that territory back?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Judges 1:26–35 — The Man of Bethel, The Grace That Survives ──── */
    {
      ref: 'Judges 1:24–26',
      title: 'The Man at the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('And the spies saw a man come forth out of the city, and they said unto him, '),
                hg('Shew us, we pray thee, the entrance into the city, and we will shew thee mercy', 'covenant-speech'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And when he shewed them the entrance into the city, they smote the city with the edge of the sword; but '),
                hp('they let go the man and all his kindred', 'christ-grace-survives'),
                t('.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the man went into the land of the Hittites, and built a city, and called the name thereof Luz: which is the name thereof unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-speech',
          html:
            'In the midst of conquest, an unnamed man at Bethel shows kindness to the spies of Israel. They promise him mercy if he shows them the way into the city. He does. The city falls. And Israel keeps their covenant with this foreigner. His life, and his family&apos;s lives, are spared. He then rebuilds the city of Luz in another land — a small echo of what Israel is doing, a man rebuilding on new soil because of an act of grace.',
        },
        {
          kind: 'christ',
          id: 'christ-grace-survives',
          title: 'Christ Connection — Rahab&apos;s Sister',
          html:
            'This story mirrors Rahab the harlot, who hid the Israelite spies and received mercy in return (Joshua 2). In both cases, a foreigner shows kindness to God&apos;s people and is saved. Paul teaches: "As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith" (Gal. 6:10). And further: "Therefore if thine enemy hunger, feed him; if he thirst, give him drink" (Rom. 12:20). The man at Bethel showed kindness without knowing God, yet God&apos;s people recognized it as worthy of mercy. Grace is always looking for a reason to spare.',
        },
        {
          kind: 'carry',
          html:
            'Kindness shown to strangers is never lost. It may not change the whole story — the city of Bethel still fell — but it changed one man&apos;s story. He walked out alive, with his family, able to start over. In a week where you may feel small, or your goodness may seem to accomplish little in the face of large forces, remember: you do not know whose future you are changing with a single act of genuine mercy.',
        },
        {
          kind: 'reflection',
          id: 'bethel-man',
          prompt: 'Think of a time someone showed you mercy or kindness when they had no obligation to. How did that change your life? Now, who can you show that same kind of mercy to?',
        },
      ],
    },
  ],
};
