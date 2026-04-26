import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 19 — Sodom and Gomorrah.
 *
 * A chapter that refuses to flinch about human evil and divine judgment.
 * It begins with hospitality received and ends in a cave — the photographic
 * negative of Abraham's Mamre. The destruction is total. Lot's wife looks
 * back. And even in the rubble, God's hand is visible on those being pulled
 * to safety.
 */
export const GENESIS_19: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 19,

  intros: [
    'Genesis 19 is a chapter that refuses to flinch. It names evil as evil — not as a philosophical abstraction, but as a mob at a door. It shows divine judgment as total and swift. And it follows one man, Lot, as he is physically dragged to safety by angels because he cannot save himself. The chapter is dark. But inside the darkness, there is one trembling fact: grace that does not depend on the courage of the rescued.',
    'Two chapters earlier, Abraham made a costly case to God that Sodom might be spared — a conversation every reader knows will fail. Now we see why. The men of Sodom come to Lot to abuse his guests. The city will not repent. The visitors are not guests — they are targets. And Lot, who once chose Sodom because it looked "like the garden of the Lord" (Gen 13:10), finds himself alone, mocked by his own family, forced out by hands not his own. The protection Abraham sought could not exist in a place that wanted darkness more than light.',
  ],

  sections: [
    /* ─── Genesis 19:1–3 — Lot Welcomes the Visitors ────────────────────── */
    {
      ref: 'Genesis 19:1–3',
      title: 'Lot Welcomes the Visitors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('And there came two '),
                hp('angels', 'christ-angels-grace'),
                t(' to '),
                hy('Sodom', 'hebrew-sodom-evil'),
                t(' at even; and Lot sat in the gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said, Behold now, my lords, turn in, I pray you, into your servant\'s house, and tarry all night, and wash your feet: and ye shall rise up early, and go on your ways. And they said, '),
                hg('Nay', 'c-nay-first-refuse'),
                t('; but we will abide in the street all night.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he pressed upon them greatly; and they turned unto him, and entered into his house; and he made them a '),
                hg('feast', 'c-feast-hospitality'),
                t(', and did bake unleavened bread, and they did eat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nay-first-refuse',
          html:
            'The visitors at first refuse the shelter Lot offers. They will stay in the street. This is no accident — they are testing what the city will do. Will Lot take them in? Will anyone? Will there be even one act of hospitality in a place known for its refusal of it? Lot passes the test that Sodom itself has failed.',
        },
        {
          kind: 'commentary',
          id: 'c-feast-hospitality',
          html:
            'Lot\'s hospitality stands in stark contrast to what is coming. He sets a feast. He bakes bread. He makes room in his home for strangers. This is the posture Abraham taught — the open door, the generous table. Lot will soon be mocked for it. The men of his own city will rage against him for it. And it will be the very act that marks him as righteous, as worth saving.',
        },
        {
          kind: 'christ',
          id: 'christ-angels-grace',
          title: 'Christ Connection — Grace that Grasps',
          html:
            'Two strangers arrive at Lot\'s door, and he sees them and acts — not because he knows who they are, but because his conscience knows what he should do. Years later, Paul will write: "Be not forgetful to entertain strangers: for thereby some have entertained angels unawares" (Heb. 13:2). The two who arrive in Sodom that night are not there to reward goodness or punish badness. They are sent on a mission of mercy. And Lot, despite being surrounded by evil, has not lost the reflex to show grace to those who need it. That reflex will save his life.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that often feels like Sodom — full of voices that want to corrupt, indifferent to strangers, suspicious of kindness. One thing that marks you as different is the small, quiet acts of hospitality you give: the meal you make, the door you open, the welcome you extend to someone nobody else is welcoming. That habit — that reflex — is itself a form of witness. It says: I still believe in the God who opens doors. Keep practicing it, even when the world around you does not.',
        },
        {
          kind: 'reflection',
          id: 'gen19-hospitality',
          prompt:
            'Where is one place in your life right now where you can practice Lot\'s simple reflex — opening a door, making a meal, making someone feel welcomed? Who is the stranger at your gate this week?',
        },
      ],
    },

    /* ─── Genesis 19:4–11 — The Men of Sodom Surround the House ─────────── */
    {
      ref: 'Genesis 19:4–11',
      title: 'The Men of Sodom Surround the House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 4,
              spans: [
                t('But before they lay down, the men of the city, even the men of '),
                hy('Sodom', 'hebrew-sodom-evil'),
                t(', '),
                hg('compassed the house round, both old and young, all the people from every quarter', 'c-sodom-unity-in-evil'),
                t(';'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they called unto Lot, and said unto him, Where are the men which came in to thee this night? '),
                hg('bring them out unto us, that we may know them', 'c-know-abuse'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Lot went out at the door unto them, and shut to the door after him,'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And said, I pray you, brethren, do not so wickedly.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Behold now, I have two daughters which have not known man: let me, I pray you, bring them out unto you, and do ye to them as is good in your eyes: only unto these men do nothing; for therefore came they under the shadow of my roof.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And they said, Stand back. And they said again, This one fellow came in to sojourn, and he will needs be a judge: now will we deal worse with thee, than with them: and they pressed sore upon the man, even Lot, and came near to break the door.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But the men put forth their hand, and pulled Lot into the house to them, and shut to the door.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they '),
                hg('smote the men that were at the door of the house with blindness', 'c-blindness'),
                t(', both small and great: so that they wearied themselves to find the door.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sodom-evil',
          title: 'Sodom — "the Sodomites"',
          script: 'סְדוֹם',
          translit: '<strong>Sodom</strong> · derived from Hebrew root meaning "burning" or "scorching"',
          description:
            'Sodom is not unnamed evil; it is a place. The text gives it a name so we will remember: a city that became a synonym for a specific kind of defiance. Centuries later, Ezekiel will name what Sodom\'s sin actually was: "Pride, fulness of bread, and abundance of idleness was in her and in her daughters, neither did she strengthen the hand of the poor and needy" (Ezek. 16:49–50).',
        },
        {
          kind: 'commentary',
          id: 'c-sodom-unity-in-evil',
          html:
            'Note the unity of the mob. <em>All the people from every quarter</em> — young and old, rich and poor, everybody. This is not a few bad actors; this is a city whose moral center has gone rotten. There is no one to say no. There is no minority standing apart. The entire social order has aligned itself toward violence, and it moves as one.',
        },
        {
          kind: 'commentary',
          id: 'c-know-abuse',
          html:
            'The text uses "know" but the meaning is unmistakable: they want to abuse the visitors sexually, by force, in a mob. Don\'t soften the text. It names the sin exactly. And it names something else: the crowd\'s appetite is not subtle temptation. It is naked force, public violation, the will of the many overriding the will of the few.',
        },
        {
          kind: 'commentary',
          id: 'c-blindness',
          html:
            'The angels strike the mob with blindness. Not death. Not fire. Not yet. Blindness. They cannot find the door. The stroke that falls is surgical — it neutralizes the threat without destroying it. And it gives Lot the margin of seconds he needs to move. Grace is often that specific.',
        },
        {
          kind: 'christ',
          id: 'christ-mob-grace',
          title: 'Christ Connection — Judgment and Mercy in One Act',
          html:
            'The blindness the angels inflict is not punishment — not yet. It is the hinge that opens escape. Later, Jesus will speak of this chapter directly: "Remember Lot\'s wife" (Luke 17:32). But earlier, in that same passage, he warns: "The Son of Man is revealed" as judgment (Luke 17:30). Peter calls Lot "righteous" — not perfect, but saved: "The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment to be punished" (2 Pet. 2:9). Lot is not rescued because he earned it. He is rescued because the One sending the angels has decided mercy, for this man and this moment, while judgment falls on the city.',
        },
        {
          kind: 'carry',
          html:
            'When you find yourself in a circumstance where evil is strong and unified, and your voice against it seems small and useless — remember that the angels did not ask Lot to be brave. They struck the mob blind. They did the heavy work. Your job was simply to stay in the light long enough for rescue to arrive. Sometimes the call to stand for righteousness is not a call to be a hero. It is a call to not move. To not compromise. To let God handle the mob.',
        },
        {
          kind: 'reflection',
          id: 'gen19-evil-community',
          prompt:
            'Where do you see a community united in something wrong — not just individuals, but a whole system moving together toward harm? How does Lot\'s small stance — saying "I pray you, do not so wickedly" — speak to your own position?',
        },
      ],
    },

    /* ─── Genesis 19:12–22 — Haste, Get Thee Out ────────────────────────── */
    {
      ref: 'Genesis 19:12–22',
      title: 'Haste, Get Thee Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 12,
              spans: [
                t('And the men said unto Lot, Hast thou here any besides? son in law, and thy sons, and thy daughters, and whatsoever thou hast in the city, '),
                hg('bring them out of this place', 'c-bring-out'),
                t(';'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For we will destroy this place, because the cry of them is waxen great before the face of the LORD; and the LORD hath sent us to destroy it.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Lot went out, and spake unto his sons in law, which married his daughters, and said, '),
                hg('Up, get you out of this place', 'c-sons-in-law'),
                t('; for the LORD will destroy this city. But he seemed as one that mocked unto his sons in law.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And when the morning arose, then the angels hastened Lot, saying, Arise, take thy wife, and thy two daughters, which are here; lest thou be consumed in the iniquity of the city.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And while he lingered, the men '),
                hg('laid hold upon his hand, and upon the hand of his wife, and upon the hands of his two daughters', 'c-grasped-hand'),
                t('; the LORD being merciful unto him: and they brought him forth, and set him without the city.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And it came to pass, when they had brought them forth abroad, that he said, Escape for thy life; look not behind thee, neither stay thou in all the plain; escape to the mountain, lest thou be consumed.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Lot said unto them, Oh, not so, my Lord:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Behold now, thy servant hath found grace in thy sight, and thou hast magnified thy mercy which thou hast shewed unto me in saving my life; and I cannot escape to the mountain, lest some evil take me, and I die:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Behold now, this city is near to flee unto, and it is a little one: Oh, let me escape thither, (is it not a little one?) and my soul shall live.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he said unto him, See, I have accepted thee concerning this thing also, that I will not overthrow this city, for the which thou hast spoken.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Haste thee, escape thither; for I cannot do any thing till thou be come thither. Therefore the name of the city was called '),
                hy('Zoar', 'hebrew-zoar'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bring-out',
          html:
            'The angels make the scope of judgment clear: the entire city will be destroyed. But they also name the exception. Lot is to gather anyone who belongs to him and leave. This is the pattern of grace: not that judgment does not fall, but that mercy reaches into the place of judgment and pulls out those who are marked.',
        },
        {
          kind: 'commentary',
          id: 'c-sons-in-law',
          html:
            'Lot goes to his sons-in-law and warns them. And they laugh. They think he is joking. This detail is crucial. Lot did warn them. He opened his mouth. They chose to ignore it. The text will not let us say that Lot alone was saved while others were destroyed without his having spoken. He spoke. They mocked. They stayed. Sometimes the cost of salvation is that you have to watch people you love reject the way out.',
        },
        {
          kind: 'commentary',
          id: 'c-grasped-hand',
          html:
            'Here is the pivot on which the chapter turns: <em>the men laid hold upon his hand, and upon the hand of his wife, and upon the hands of his two daughters.</em> Lot does not have the strength to flee. He hesitates. He lingers. The angels reach down and grasp him. Grace is not always a choice offered. Sometimes it is a hand laid hold of you, pulling you toward life when you are too afraid or too confused or too weak to move on your own.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zoar',
          title: 'Zoar — "small, little"',
          script: 'צוֹעַר',
          translit: '<strong>Zoar</strong> · a small city; the name means "littleness"',
          description:
            'Zoar\'s name is its salvation. Lot asks for shelter in a "little" city, and the city\'s own name says what it is. God allows it. The smallest refuge, for the one who cannot reach the mountain. Sometimes we are saved not by strength but by permission to be small.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a season where you cannot do what you are being called to do on your own. You may be weak. You may be lingering when you should be moving. The angels do not shame Lot for his fear. They do not lecture him about his hesitation. They reach down and grasp his hand. And they pull. If you are listening for a voice right now, it may be the sound of hands, grasping. Not letting go. Moving toward life.',
        },
        {
          kind: 'reflection',
          id: 'gen19-grasped',
          prompt:
            'Where in your life are you lingering — afraid to move, unsure of the way, too weak to flee? What would it mean to feel God\'s hand grasped around yours, pulling you toward safety?',
        },
      ],
    },

    /* ─── Genesis 19:23–29 — Fire and Brimstone ────────────────────────── */
    {
      ref: 'Genesis 19:23–29',
      title: 'Fire and Brimstone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 23,
              spans: [
                t('The sun was risen upon the earth when Lot entered into Zoar.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Then the LORD rained upon Sodom and upon Gomorrah '),
                hy('brimstone and fire', 'hebrew-gophrit'),
                t(' from the LORD out of heaven;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he overthrew those cities, and all the plain, and all the inhabitants of the cities, and that which grew upon the ground.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But '),
                hp('his wife', 'christ-wife-looking-back'),
                t(' looked back from behind him, and she became a '),
                hy('pillar of salt', 'hebrew-melach'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Abraham gat up early in the morning to the place where he stood before the LORD:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he looked toward Sodom and Gomorrah, and toward all the land of the plain, and beheld, and, lo, the smoke of the country went up as the smoke of a furnace.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And it came to pass, when God destroyed the cities of the plain, that God remembered Abraham, and sent Lot out of the midst of the overthrow, when he overthrew the cities in the which Lot dwelt.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gophrit',
          title: 'Gophrit — "brimstone, sulfur"',
          script: 'גָּפְרִית',
          translit: '<strong>gophrit</strong> · brimstone, sulfur; a burning, choking destruction',
          description:
            'The word itself is burned into memory by the sound: <em>gophrit</em>. Burning sulfur. Not an earthquake. Not a flood. A rain of fire from heaven — the image Jesus himself will echo when He speaks of judgment to come.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-melach',
          title: 'Netziv melach — "pillar of salt"',
          script: 'נְצִיב מֶלַח',
          translit: '<strong>netziv melach</strong> · pillar of salt; a monument to the cost of looking back',
          description:
            'Not mentioned in the command, this detail becomes the haunting image of disobedience. The wife does not die in the flames. She dies turning toward the very thing she was told to flee from. Salt. A preservative. A pillar. A memorial.',
        },
        {
          kind: 'commentary',
          id: 'c-fire-total',
          html:
            'The destruction is absolute. "He overthrew those cities, and all the plain, and all the inhabitants of the cities, and that which grew upon the ground." Nothing grows. No one remains. The judgment is not partial or gradual. It is final.',
        },
        {
          kind: 'christ',
          id: 'christ-wife-looking-back',
          title: 'Christ Connection — Remember Lot\'s Wife',
          html:
            'Jesus speaks this chapter\'s final word: "Remember Lot\'s wife" (Luke 17:32). He does not explain it. He leaves the warning stark. And Peter, writing to persecuted churches, names Lot as "righteous" — not sinless, but saved — while his wife perishes for looking back. The point is surgical: judgment has come. The way out has been made. Do not return to what you are fleeing from. Do not let your heart pull your feet backward. Christ\'s warning haunts every chapter of this Bible: when I call you out of darkness, do not look back.',
        },
        {
          kind: 'carry',
          html:
            'You may be in the middle of a painful escape — from a relationship, a habit, a place, a way of living that nearly destroyed you. The angels have grasped your hand. You are moving toward Zoar. And you will feel, almost certainly, the pull to look back. To wonder if it was really that bad. To wish you could have saved someone. To think maybe you could go back just once. Do not. The instruction is not unkind. It is kind. When the judges of history look back on your life, they will not ask why you did not tarry. They will ask why you were brave enough to look forward.',
        },
        {
          kind: 'reflection',
          id: 'gen19-look-back',
          prompt:
            'Is there something in your past you need to stop looking back at? What would it cost you to keep your eyes forward, toward the life you are being called into?',
        },
        {
          kind: 'artwork',
          matchTitle: /destruction.*sodom|sodom.*destroyed|fire.*brimstone/i,
          caption: 'Genesis 19:23–29 · The Destruction of Sodom',
        },
      ],
    },

    /* ─── Genesis 19:30–38 — Lot in the Cave ───────────────────────────── */
    {
      ref: 'Genesis 19:30–38',
      title: 'Lot in the Cave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 30,
              spans: [
                t('And Lot went up out of Zoar, and dwelt in the mountain, and his two daughters with him; for he feared to dwell in Zoar: and he dwelt in a cave, he and his two daughters.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the firstborn said unto the younger, Our father is old, and there is not a man in the earth to come in unto us after the manner of all the earth:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Come, let us make our father drink wine, and we will lie with him, that we may preserve seed of our father.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And they made their father drink wine that night: and the firstborn went in, and lay with her father; and he perceived not when she lay down, nor when she arose.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And it came to pass on the morrow, that the firstborn said unto the younger, Behold, I lay yesternight with my father: let us make him drink wine this night also; and go thou in, and lie with him, that we may preserve seed of our father.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And they made their father drink wine that night also: and the younger arose, and lay with him; and he perceived not when she lay down, nor when she arose.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Thus were both the daughters of Lot with child by their father.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And the firstborn bare a son, and called his name '),
                hy('Moab', 'hebrew-moab'),
                t(': the same is the father of the Moabites unto this day.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And the younger, she also bare a son, and called his name Ben-ammi: the same is the father of the '),
                hy('Ammonites', 'hebrew-ammon'),
                t(' unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cave-refuge',
          html:
            'Lot flees Zoar and retreats to a cave. He is afraid. He has lost everything — his wife is gone, turned to salt. His daughters are all he has left. And he ends not in a city, not in a household, but in a cave. The man who once chose Sodom for its plenty now lives underground. The fall is complete. And the text will not turn away from what follows.',
        },
        {
          kind: 'commentary',
          id: 'c-incest-text',
          html:
            'The daughters deceive their father. They believe the world has ended — there are no more men, the future is gone, the line will die. So they decide to preserve it by deception, by incest. The text reports this without commendation. It does not say "they did well." It does not say "they sinned." It reports. And the readers of ancient Israel will need to think carefully about what a desperate person does when they believe all is lost, and what a compromised conscience permits.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-moab',
          title: 'Moav — "from my father"',
          script: 'מוֹאָב',
          translit: '<strong>Moav</strong> · the etymological play on "from my father" (me-av)',
          description:
            'Moab becomes a nation. For centuries, Moab and Israel are enemies. Yet Moab also becomes the home of Ruth, the Moabitess, who will become the great-grandmother of King David — and through David, Christ enters the line of mercy. Even incest cannot close off redemption.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ammon',
          title: 'Ammon — "son of my people"',
          script: 'עַמּוֹן',
          translit: '<strong>Ammon</strong> · "people-son," likewise begetting a nation that opposes Israel',
          description:
            'Ammon, too, becomes a enduring enemy of Israel. Yet the text records the origin: from despair, from deception, from a man and women who believed the future was finished. The reader must hold two truths at once: the deed was wrong, and the Lord did not end the story there.',
        },
        {
          kind: 'christ',
          id: 'christ-moab-ruth',
          title: 'Christ Connection — Redemption Runs Through Moab',
          html:
            'Two nations spring from Lot\'s incest. Both will oppose Israel. Both will be enemies. And yet — Ruth will be born a Moabitess. "The LORD hath been witness between me and thee" (Ruth 4:10). She will marry Boaz. She will become the grandmother of Jesse, the mother of kings. And through her line, Christ will come. Peter will say of Lot: "The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment" (2 Pet. 2:9). That is the view of Genesis 19. Not that the chapter is without moral weight. But that even in its darkest hours, God\'s mercy does not foreclose the future. The children of incest become the ancestors of kings. The nation that began in despair becomes the womb of redemption.',
        },
        {
          kind: 'carry',
          html:
            'You have probably done things you regret. Choices made in fear. Desperation. Times when you compromised more than you thought you would. The end of Genesis 19 is here to tell you: that is not the end of your story. Ruth\'s birth as a Moabitess did not disqualify her from the line of mercy. Your worst chapter is not your final one. God can reach into the cave, into the aftermath, into the deception and the mess, and pull forward a future you did not think was possible.',
        },
        {
          kind: 'reflection',
          id: 'gen19-redemption-ahead',
          prompt:
            'Is there a choice or season in your past that you believe disqualified you from a good future? What would change if you believed that God\'s mercy can still write a story after that chapter?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 19',
    quote:
      'Two angels arrive to rescue a man from a burning city. He hesitates. They grasp his hand and pull him out. His wife looks back. She becomes a pillar of salt. And in the cave that follows, God\'s mercy reaches even into incest and despair — because the line of redemption cannot be stopped.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 19 · Study Guide',
  },

  hasHebrew: true,
};
