import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 5 — The Song[res:bibleodyssey-song-deborah] of Deborah
 *
 * The oldest Hebrew poem in the Bible. A victory[res:sefaria-victory-song-ancient] song celebrating Deborah&apos;s
 * leadership and the tribal mustering against Sisera&apos;s Canaanite forces. The text
 * moves from cosmic theophany (God marching from Sinai) to the paralysis of Israel,
 * the tribal roll-call, the stars fighting from heaven, Jael&apos;s heroic deed, and
 * finally the pathos of Sisera&apos;s mother — a stunning act of empathy in the midst
 * of war.
 */
export const JUDGES_5: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 5,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 19 },
  intros: [
    'Judges 5 is one of the oldest poems in the Bible — some scholars date its composition to the 12th century BC, earlier than almost anything else in Hebrew Scripture. It is a victory song that Deborah and Barak sang after their battle against Sisera, the Canaanite general whose iron chariots had terrorized Israel for twenty years.',
    'The poem begins not with earthly drums but with a memory of Sinai — God himself marching out, the earth trembling, the heavens dropping rain. The battlefield victory becomes a sign of God&apos;s ancient power still at work. Then comes a tribal roll-call: who came to fight, and who stayed home. Then the battle itself — not decided by chariots or strength, but by heavenly hosts, by a timely flood, by one woman&apos;s courage. The poem closes with one of the most arresting moments in Hebrew poetry: Sisera&apos;s mother waiting at the window, not knowing her son is dead.',
    'War in this chapter is shown in full color: the glory of those who rose up, the shame of those who refused, the horror of the mother waiting. But underneath every earthly battle runs a cosmic war — the heavens fighting against the earth&apos;s enemies, God&apos;s purposes marching forward through human courage and even human hesitation.',
  ],

  opener: {
    matchTitle: /deborah|sisera|war|battle/i,
    caption: 'Judges 5 · The Song of Deborah',
  },

  sections: [
    /* ─── Judges 5:1–5 — The Song Begins: Sinai Remembered ──────────────────── */
    {
      ref: 'Judges 5:1–5',
      title: 'God Marching from Sinai',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Then sang '),
                hg('Deborah and Barak', 'j5-deborah'),
                t(' the son of Abinoam on that day, saying, '),
              ],
            },
            {
              number: 2,
              spans: [
                hp('Praise ye the Lord for the avenging of Israel', 'j5-avenging'),
                t(', when the people willingly offered themselves.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Hear, O ye kings; give ear, O ye princes; I, even I, will sing unto the Lord; I will sing praise to the Lord God of Israel.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Lord, when thou wentest out of Seir, when thou marchedst out of the field of Edom, '),
                hg('the earth trembled', 'j5-trembled'),
                t(', and the heavens dropped, the clouds also dropped water.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('The mountains melted from before the Lord, even that Sinai from before the Lord God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-deborah',
          html:
            'Deborah[res:intertextual-miriam-deborah-songs] sings the victory — not Barak alone. Throughout Judges 4 and 5, it is clear that Deborah is the leader, the prophetess, the one who knows God&apos;s mind. Barak refuses to go to battle unless she goes with him. Her song proclaims what she has lived: that a woman can stand at the front of God&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'j5-avenging',
          html:
            'The word <em>avenging</em> here is not revenge in the modern sense — the settling of a personal score. It is <em>mishpat</em>, justice, the vindication of the oppressed. Israel had been enslaved to Canaan&apos;s iron chariots; the victory frees them. The song begins by naming who God actually is in His oldest self-revelation: the God who hears His people&apos;s cry and acts.',
        },
        {
          kind: 'commentary',
          id: 'j5-trembled',
          html:
            'The poet does not start with the battle. She starts with Sinai — the moment God first marched out to rescue Israel at the exodus. The earth trembling, the heavens dropping rain, the mountains melting — these are not mere poetic ornament. They are the signature of God himself entering history. Every earthly victory echoes that cosmic moment.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shir',
          title: 'Shir — &ldquo;song&rdquo;',
          script: 'שִׁיר',
          translit: '<strong>shir</strong> · a poem or song, often celebrating God&apos;s mighty acts',
          description:
            'This chapter is the only extended <em>shir</em> in Judges. Elsewhere in the Bible, <em>shir</em> marks the moments God&apos;s people remember their deliverance — Moses singing after the Red Sea, David singing after the cave, the Psalms. Song is how faith survives: you sing the story and the story becomes who you are.',
        },
        {
          kind: 'carry',
          html:
            'You have moments in your story where God moved — a door that opened, a fear that lifted, a word that came at exactly the right hour, a person who showed up. Deborah and Barak&apos;s first act was not to build an altar. It was to sing. To say out loud what God had done. If there&apos;s a deliverance in your past that you rarely speak of, that moment is asking to be sung. Not for others to hear, but so you don&apos;t forget.',
        },
        {
          kind: 'reflection',
          id: 'j5-opening',
          prompt:
            'What is one act of God in your past that you seldom speak of out loud? What would it mean to remember it now, in detail, with gratitude?',
        },
      ],
    },

    /* ─── Judges 5:6–8 — The State of Israel Before Deliverance ───────────────── */
    {
      ref: 'Judges 5:6–8',
      title: 'When the Highways Were Unsafe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('In the days of '),
                hy('Shamgar the son of Anath', 'j5-shamgar'),
                t(', in the days of Jael, the highways were unoccupied, and the travellers walked through byways.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('The inhabitants of the villages ceased, they ceased in Israel, until that '),
                hp('I Deborah arose', 'j5-mother'),
                t(', that I arose a mother in Israel.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('They chose new gods; then was war in the gates: was there a shield or spear seen among forty thousand in Israel?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-shamgar',
          html:
            'Shamgar is mentioned only here and in Judges 3:31, where he killed 600 Philistines with an ox goad. Yet even his small victory could not break the cycle of oppression. The point is: this is what Israel was living in. No safe roads. No open villages. Economic collapse. Spiritual paralysis.',
        },
        {
          kind: 'commentary',
          id: 'j5-mother',
          html:
            'Deborah calls herself <em>a mother in Israel</em> — a title of leadership and care, not dominance. She is the one who sees her people&apos;s danger and rises to protect them. The feminine imagery here is crucial: the leader who sees what her people need and acts from that seeing.',
        },
        {
          kind: 'commentary',
          id: 'j5-idolatry',
          html:
            'Israel had turned to other gods — the Canaanite fertility deities that promised easy answers. And with that spiritual drift came military defeat. The connection is not magical; it is moral. A people divided in their loyalty, uncertain of their God, cannot stand against determined enemies. Spiritual paralysis produces practical paralysis.',
        },
        {
          kind: 'carry',
          html:
            'When a part of your life feels unsafe — a workplace where you&apos;re walking on eggshells, a relationship where you&apos;ve stopped being honest, a faith that has drifted toward things that don&apos;t deliver — the first thing that usually happens is not a crisis but a paralysis. You stop speaking. You stop showing up fully. The roads of your own life become highways you don&apos;t travel. That may be exactly where a quiet courage is asking to be born in you.',
        },
        {
          kind: 'reflection',
          id: 'j5-paralysis',
          prompt:
            'Where do you sense a paralysis in your own life — a compromise you&apos;ve made, a path you&apos;ve stopped walking because it feels unsafe? What would it take for a Deborah-kind of courage to show up there?',
        },
      ],
    },

    /* ─── Judges 5:9–18 — The Tribal Roll-Call ───────────────────────────────── */
    {
      ref: 'Judges 5:9–18',
      title: 'Who Came and Who Stayed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('My heart is toward the '),
                hg('governors of Israel', 'j5-governors'),
                t(', that offered themselves willingly among the people. Bless ye the Lord.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('They that are delivered from the noise of archers in the places of drawing water, there shall they rehearse the righteous acts of the Lord, even the righteous acts toward the inhabitants of his villages in Israel: then shall the people of the Lord go down to the gates.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Out of Ephraim was there a root of them against Amalek; after thee, Benjamin, among thy people; out of Machir came down governors, and out of Zebulun they that handle the pen of the writer.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-5-78mid-1',
          html:
            'Deborah[res:intertextual-miriam-deborah-songs] sings the victory after the battle. Poetry follows action. What the prose told, the song celebrates—with emotion, with names, with the people&apos;s own voice.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('And the princes of Issachar were with Deborah; even Issachar, and also Barak: he was sent on foot into the valley.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Why abodest thou among the sheepfolds, to hear the bleatings of the flocks? For the divisions of Reuben there were great '),
                hy('thoughts of heart', 'j5-reuben'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Gilead abode beyond Jordan: and why did Dan remain in ships? Asher continued on the sea shore, and abode in his breaches.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Zebulun and Naphtali were a people that '),
                hp('jeoparded their lives unto the death', 'j5-jeopardy'),
                t(' in the high places of the field.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-governors',
          html:
            'The word <em>governors</em> here means leaders or nobles — the ones who could have stayed safe but chose to come. Deborah honors them not because they won, but because they risked. The blessing falls on those who see a call and answer it, even when the outcome is unclear.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-emeq',
          title: 'Emeq — &ldquo;valley&rdquo;',
          script: 'עֵמֶק',
          translit: '<strong>emeq</strong> · a valley, a low place; metaphorically, a place of humbling',
          description:
            'Barak is &ldquo;sent on foot into the valley&rdquo; — not on a horse, not in a position of command, but on foot in the low place. Yet this is where the victory happens. The valley is never where you want to be, but it is often where God does His most decisive work.',
        },
        {
          kind: 'commentary',
          id: 'j5-reuben',
          html:
            'Reuben had <em>great thoughts of heart</em> — a phrase that means they deliberated, searched, debated with themselves. But thinking is not acting. The poem is not unkind about it, but it is clear: in the moment when Israel needed to move, Reuben sat in the sheepfolds, listening to the bleating of flocks. Spiritual paralysis often dresses itself up as deep thought.',
        },
        {
          kind: 'commentary',
          id: 'j5-jeopardy',
          html:
            'Zebulun and Naphtali came from the north, where the battle would be fiercest. They <em>jeoparded</em> — literally, put in danger — their very lives. The poem saves its highest praise for those who acted, not from safety, but from willingness to risk everything.',
        },
        {
          kind: 'carry',
          html:
            'Some calls require you to leave the sheepfolds. Some require you to risk something you can&apos;t take back. The ones who came are remembered; the ones who stayed debating are not. This isn&apos;t cruelty — it&apos;s the way of history. The questions you&apos;re chewing over right now may have a deadline you haven&apos;t named yet. Deborah&apos;s song suggests that at some point, thought must give way to action.',
        },
        {
          kind: 'reflection',
          id: 'j5-tribal',
          prompt:
            'Where are you in the tribal roll-call of your own life? Are you among those coming, those deliberating, or those staying on the sidelines? What would moving from one position to another require?',
        },
      ],
    },

    /* ─── Judges 5:19–23 — The Battle and the Curse ───────────────────────────── */
    {
      ref: 'Judges 5:19–23',
      title: 'The Stars Fight from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 19,
              spans: [
                t('The kings came and fought, then fought the kings of Canaan in Taanach by the waters of Megiddo; they took no gain of money.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('They fought from heaven; '),
                hp('the stars in their courses fought against Sisera', 'j5-stars'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('The '),
                hy('river of Kishon', 'j5-kishon'),
                t(' swept them away, that ancient river, the river Kishon. O my soul, thou hast trodden down strength.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Then were the horse hooves broken by the prancings, the prancings of their mighty ones.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Curse ye Meroz, said the angel of the Lord, curse ye bitterly the inhabitants thereof; because they came not to the help of the Lord, to the help of the Lord against the mighty.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-stars',
          html:
            'The poem moves from earthly battle to cosmic war. <em>The stars in their courses fought against Sisera</em> — this is not just metaphor. It is claiming that heavenly powers, earthly weather, and human courage are all converging toward one end. The battle was not won by superior strategy or strength. It was won because heaven and earth moved together.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kokab',
          title: 'Kokab — &ldquo;star&rdquo;',
          script: 'כּוֹכָב',
          translit: '<strong>kokab</strong> · a star; metaphorically, a sign or portent in heaven',
          description:
            'The heavens declare God&apos;s purposes. In Genesis, the stars are lamps God hung for light. In Judges, they are warriors. The cosmos is not neutral; it is enrolled in God&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'j5-kishon',
          html:
            'The river Kishon likely rose in a sudden flood — perhaps triggered by the rain the poem mentions earlier. Sisera&apos;s iron chariots, so terrifying on dry ground, became useless in mud. What looked like an overwhelming advantage dissolved in water. The ancient historian Josephus corroborates this, noting that the chariots sank in the mire.',
        },
        {
          kind: 'commentary',
          id: 'j5-meroz',
          html:
            'Meroz is a town that refused to come to Israel&apos;s aid. The curse is severe — the only place in the poem where the poet pronounces judgment. The logic is stark: in God&apos;s war, neutrality is itself opposition. You cannot stand on the sidelines and claim innocence. The stakes are too high.',
        },
        {
          kind: 'carry',
          html:
            'Most of your life is spent on small, invisible decisions: whether to speak or stay silent, whether to move or stay comfortable, whether to side with the one being wronged or keep peace with the powerful. These seem like private choices. But Deborah&apos;s song says there is a cosmic dimension to them. You are not just choosing for yourself; you are taking a side in a much larger story. The question is not whether you want to be involved. The question is which side you&apos;re on.',
        },
        {
          kind: 'reflection',
          id: 'j5-battle',
          prompt:
            'Where are you sensing a tension between comfort and courage, between neutrality and taking a side? What would it look like to actively choose the side of the vulnerable?',
        },
      ],
    },

    /* ─── Judges 5:24–27 — Jael: The Blessed Woman ───────────────────────────── */
    {
      ref: 'Judges 5:24–27',
      title: 'The Woman Who Drove the Nail',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 24,
              spans: [
                hp('Blessed above women shall Jael the wife of Heber the Kenite be', 'j5-jael'),
                t(', blessed shall she be above women in the tent.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('He asked water, and she gave him milk; she brought forth butter in a lordly dish.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('She put her hand to the nail, and her right hand to the workmen&apos;s hammer; and with the hammer she smote Sisera, she '),
                hg('smote off his head', 'j5-head'),
                t(', when she had pierced and stricken through his temples.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('At her feet he bowed, he fell, he lay down: at her feet he bowed, he fell: where he bowed, there he fell down dead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-jael',
          html:
            'Jael is blessed <em>above women</em> — the highest praise in the song. Yet she was not a military leader, not even an Israelite. She was a woman of the tent. Sisera, fleeing the battle, came to her in desperation, and she killed him — giving the victory its final punctuation. The poem lifts her up as a woman of courage, of quick thinking, of deadly resolve.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-em',
          title: 'Em — &ldquo;mother&rdquo;',
          script: 'אֵם',
          translit: '<strong>em</strong> · a mother; metaphorically, a source or originator',
          description:
            'Deborah called herself <em>a mother in Israel</em>; at the poem&apos;s close we will meet Sisera&apos;s mother. The two mothers frame the song — one who gives life and security to her people, one who will lose a son to that same victory. The word carries weight in both directions.',
        },
        {
          kind: 'commentary',
          id: 'j5-head',
          html:
            'The detail of the hammer and nail is specific and unglamorous. This is not a glorious duel. It is an act of calculated violence in a tent — Jael offers hospitality and then kills her guest. The Bible does not soften it. She is blessed for it anyway, because the victim was an oppressor and the act ended a reign of terror.',
        },
        {
          kind: 'carry',
          html:
            'Jael had access, opportunity, and courage — and she used all three. She was not waiting for permission or for the perfect circumstances. She saw what needed to be done and did it, even though it was not her war, not her people. Most of the time, the thing that needs doing is not done by heroes. It is done by ordinary people who are present and willing. The call on your life may be exactly that small and exactly that large.',
        },
        {
          kind: 'reflection',
          id: 'j5-jael-2',
          prompt:
            'What small, ordinary act is available to you right now that could make a difference for someone in danger or in need? What keeps you from doing it?',
        },
        {
          kind: 'artwork',
          matchTitle: /jael|sisera/i,
          caption: 'Judges 5:24–27 · Jael&apos;s Courage',
        },
      ],
    },

    /* ─── Judges 5:28–30 — The Mother at the Window ───────────────────────────── */
    {
      ref: 'Judges 5:28–30',
      title: 'The Mother Waiting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 28,
              spans: [
                t('The mother of Sisera looked out at a window, and cried through the lattice, '),
                hy('Why is his chariot so long in coming', 'j5-window'),
                t('? why tarry the wheels of his chariots?'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Her wise ladies answered her, yea, she returned answer to herself, Have they not sped? have they not divided the prey; to every man a damsel or two; to Sisera a prey of divers colours, a '),
                hg('prey of divers colours of needlework', 'j5-needlework'),
                t(', of divers colours of needlework on both sides, meet for the necks of them that take the spoil?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('(This verse does not exist in most translations; Judges 5:30 in the KJV continues from verse 29)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-window',
          html:
            'This is one of the most arresting moments in Hebrew poetry. The poet, having just celebrated Jael&apos;s courage and Israel&apos;s victory, turns to the mother of the enemy and shows her full humanity. She is waiting, hoping, afraid. Every delay of the chariot wheels brings dread. The poem does not make her evil or contemptible. It makes her human — and that is more powerful.',
        },
        {
          kind: 'commentary',
          id: 'j5-needlework',
          html:
            'The mother and her wise ladies are already dividing the spoils in their minds — the colored needlework that was part of the plunder of war. It is such a vivid, ordinary detail. She was not sitting in darkness mourning. She was sitting in lamplight, gossiping with her friends about the goods they would share. And then her son does not come home.',
        },
        {
          kind: 'carry',
          html:
            'This is the hardest verse in Judges 5 to carry into your day — because it asks you to see the human cost on the other side of every victory, every stand you take, every boundary you draw. The oppressor has a mother. The person you had to let go has people who love them. The enemy has a face. This poem does not ask you to stop fighting for justice. It asks you to fight with your eyes open, knowing that others will grieve what you celebrate. That awareness, that sorrow even in victory, is what keeps you from becoming like the thing you fight against.',
        },
        {
          kind: 'reflection',
          id: 'j5-mother-2',
          prompt:
            'Is there a decision or stand you&apos;ve taken where you haven&apos;t fully faced the human cost on the other side? What would change if you let yourself see it now?',
        },
      ],
    },

    /* ─── Judges 5:31 — The Closing ────────────────────────────────────────────── */
    {
      ref: 'Judges 5:31',
      title: 'So Let All Thine Enemies Perish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 31,
              spans: [
                t('So let all thine enemies perish, O Lord: but let them that '),
                hp('love him be as the sun when he goeth forth in his might', 'j5-sun'),
                t('. And the land had rest forty years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j5-rest',
          html:
            'The song ends not with vengeance but with a vision: those who love God shining like the sun in its strength. Forty years of rest follow. In the Old Testament, forty years often marks a full generation — the time it takes for the old to pass away and something new to take root. This victory is not just military. It is spiritual. The land itself has breath again.',
        },
        {
          kind: 'christ',
          id: 'j5-sun',
          title: 'Christ Connection — The Righteous Shining',
          html:
            'Jesus quotes these very words: &ldquo;Then shall the righteous shine forth as the sun in the kingdom of their Father&rdquo; (Matt. 13:43). The promise in Deborah&apos;s ancient song — that those who love God will shine like the sun — is fulfilled in the kingdom Jesus inaugurates. Every person who turns toward Him is being transformed into that radiant image.',
        },
        {
          kind: 'carry',
          html:
            'This is what faithfulness looks like from the other side — not in the moment of struggle, but in the resting place after. Your faithfulness, the stand you take, the courage you muster, the mother&apos;s heart you carry into a hard world — these things are not just for this moment. They are shaping you into something that will shine. The sun in its strength does not apologize for its light. Neither should you for the good you bring.',
        },
        {
          kind: 'reflection',
          id: 'j5-closing',
          prompt:
            'What would it mean for you to shine like the sun in its strength — not brightly in order to impress, but faithfully, in your actual day, for those around you to see?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'So let all thine enemies perish, O Lord: but let them that love him be as the sun when he goeth forth in his might.',
    snippet: 'From the Song of Deborah — a chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 5:31 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-song-deborah',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'The Song of Deborah: Victory in Verse',
      url: 'https://www.bibleodyssey.org/passages/main-passage/judges-5',
      description: 'The poetic account of Deborah&apos;s victory, celebrating the triumph over Sisera and the tribal response to the call to war.',
    },
    {
      id: 'sefaria-victory-song-ancient',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ancient Victory Songs and Deborah&apos;s Psalm',
      url: 'https://www.sefaria.org/Judges.5?lang=bi',
      description: 'The Song of Deborah as an ancient victory hymn, celebrating God&apos;s power and the courage of those who responded to the call.',
    },
    {
      id: 'intertextual-miriam-deborah-songs',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Victory Songs: Miriam to Deborah',
      url: 'https://intertextual.bible/search?q=miriam+song+victory+deborah+women+praise',
      description: 'The pattern of women leading in song and worship, from Miriam&apos;s song at the Red Sea to Deborah&apos;s celebration of victory.',
    },
  ],

  hasHebrew: true,
};
