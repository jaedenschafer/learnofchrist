import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 13 — Samson&apos;s Birth Announced
 *
 * The angel&apos;s appearance to Manoah&apos;s wife, the mystery of the divine name,
 * and the birth of Israel&apos;s deliverer — a chapter full of Christophany echoes.
 */
export const JUDGES_13: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 13,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 14 },
  intros: [
    'The children of Israel have done evil again. The Lord has delivered them into the hand of the Philistines for forty years. Into this darkness comes a stillness — a woman of Zorah, barren and voiceless in her culture, kneels in her field. An angel appears to her with a message no one would expect: she will bear a son.',
    'What follows is the Bible&apos;s most intricate visitation narrative. An angel comes twice to a family that doesn&apos;t understand who is visiting them. The angel&apos;s name is hidden. The mystery of what is about to unfold — a Nazarite child, set apart from the womb, to begin the deliverance of Israel — hangs in the questions Manoah asks and the questions left deliberately unanswered.',
    'This is the story of how God often works: not through strength, but through the opened womb; not through clarity, but through mystery; not through a king&apos;s decree, but through a word spoken to a woman no one was listening to.',
  ],

  sections: [
    /* ─── Judges 13:1 — Israel Under the Philistines ───────────────────── */
    {
      ref: 'Judges 13:1',
      title: 'Forty Years in Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And the children of Israel did evil again in the sight of the Lord: and the Lord delivered them into the hand of the '),
                hg('Philistines forty years', 'j13-forty'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-forty',
          html:
            'Forty years — the Bible&apos;s number for testing, trial, and wandering. Israel has spiraled into the same cycle again and again in Judges: sin, judgment, cry for help. This time, in the midst of that failure, a child will be born. The darkness has not stopped God&apos;s work; it has simply hidden it.',
        },
        {
          kind: 'carry',
          html:
            'When you find yourself in a stretch that feels like it&apos;s stretching forever — a grief that won&apos;t lift, a struggle with the same sin year after year, a valley you thought was temporary — the story of Israel under the Philistines says something quiet: this is when God often begins something new. Not when you have your act together. In the middle of it.',
        },
        {
          kind: 'reflection',
          id: 'j13-intro',
          prompt:
            'Where in your own story do you find yourself in a "forty years" — a long season of wrestling, struggle, or waiting? What might God be beginning underneath that you can&apos;t see yet?',
        },
      ],
    },

    /* ─── Judges 13:2–7 — The Angel&apos;s First Appearance ────────────────── */
    {
      ref: 'Judges 13:2–7',
      title: 'An Angel Appears to a Barren Woman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 2,
              spans: [
                t('And there was a certain man of Zorah, of the tribe of Dan, named Manoah; and his wife was '),
                hg('barren', 'j13-barren'),
                t(', and bare not.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the angel of the Lord appeared unto her, and said unto her, Behold now, thou art barren, and '),
                hp('bearest not: but thou shalt conceive, and bear a son', 'j13-promise'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-barren',
          html:
            'Barrenness in Scripture is never merely biological. It is the place where God shows up. Sarah was barren. Rebekah was barren. Rachel was barren. Hannah was barren. Elizabeth was barren. In each case, the child born from an opened womb becomes God&apos;s answer to something far bigger than one family&apos;s sorrow. An angel does not come to announce ordinary births.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('Now therefore beware, I pray thee, and '),
                hy('drink not wine nor strong drink', 'j13-nazarite-command'),
                t(', and eat not any unclean thing:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For, lo, thou shalt conceive, and '),
                hg('bear a son; and no razor shall come on his head', 'j13-nazarite-mark'),
                t(': for the child shall be a '),
                hy('Nazarite unto God from the womb', 'j13-nazarite'),
                t(': and '),
                hp('he shall begin to deliver Israel', 'j13-begin'),
                t(' out of the hand of the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-nazarite',
          html:
            'The Nazarite vow was made willingly by adults who wished to dedicate themselves entirely to God for a time. But this child receives it from conception, before he could choose it. From the womb to the grave, set apart. The mother — who cannot vote, cannot own property, cannot speak publicly in her culture — receives from God the instruction to shape the man who will free her nation.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nazir',
          title: 'Nazir — "Nazarite" / "separated one"',
          script: 'נָזִיר',
          translit: '<strong>nazir</strong> · the separated, the consecrated',
          description:
            'A Nazarite is one who takes a vow of abstinence and consecration — no wine, no cutting of hair, no contact with the dead. The hair left uncut becomes a sign of the vow visible to everyone. Samson is a walking proclamation.',
        },
        {
          kind: 'commentary',
          id: 'j13-begin',
          html:
            'The angel says he will <em>begin</em> to deliver Israel. Not complete it. Not finish it. Begin it. This is important. Samson will weaken the Philistines, but he will not break them entirely. The greater deliverance will come under David. The greatest deliverance, from sin itself, will come through One even greater.',
        },
        {
          kind: 'christ',
          id: 'j13-christ-begin',
          title: 'Christ Connection — The One Who Completes',
          html:
            'Samson begins the deliverance; Christ completes it. &ldquo;But he, because he continueth ever, hath an unchangeable priesthood; wherefore he is able also to save them to the uttermost that come unto God by him&rdquo; (Heb. 7:24–25). In Christ we see the Nazarite vow perfected — set apart from birth, consecrated entirely to God&apos;s purpose, visibly marked, delivering His people fully and finally.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself at the beginning of something — a marriage barely started, a calling just emerging, a healing that&apos;s started but not finished, a habit beginning to break. The promise to Manoah&apos;s wife says: begin is not failure. In God&apos;s story, begin is often where He marks what&apos;s going to matter most.',
        },
        {
          kind: 'reflection',
          id: 'j13-promise',
          prompt:
            'What might God be asking you to set apart right now — time, a habit, an attention — so that something new can grow from that dedication?',
        },
      ],
    },

    /* ─── Judges 13:8–14 — Manoah&apos;s Prayer and the Second Visitation ─── */
    {
      ref: 'Judges 13:8–14',
      title: 'The Mystery of the Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 8,
              spans: [
                t('Then Manoah intreated the Lord, and said, O my Lord, let the man of God which thou didst send come again unto us, and teach us what we shall do unto the child that shall be born.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-manoah-prayer',
          html:
            'Manoah does not understand that he has encountered God Himself. He calls the angel "the man of God" — an honest man, trying to hold what he cannot fully grasp. His prayer is urgent: teach us what we shall do. He understands something has changed; he doesn&apos;t understand what or who.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 9,
              spans: [
                t('And God hearkened to the voice of Manoah; and the angel of God came again unto the woman as she sat in the field: but Manoah her husband was not with her.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the woman made haste, and ran, and shewed her husband, and said unto him, Behold, the man that appeared unto me at the first is come again.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 11,
              spans: [
                t('And Manoah arose, and went after his wife, and came to the man, and said unto him, Art thou the man that spakest unto the woman? And he said, I am.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Manoah said, Now let thy words come to pass. How shall we order the child, and how shall we do unto him?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-pattern',
          html:
            'Notice the pattern: the woman sees clearly and remembers what was said. The man questions and asks for clarification. Throughout Judges, it is often the women who see truly. Manoah&apos;s wife has not forgotten a single detail. She knows exactly what was promised.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('And the angel of the Lord said unto Manoah, Of all that I said unto the woman let her beware. She may not eat of any thing that cometh of the vine, neither let her drink wine or strong drink, nor eat any unclean thing: all that I commanded her let her observe.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Manoah said, I pray thee, let us detain thee, until we shall have made ready a kid for thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-detain',
          html:
            'Manoah tries to bind the angel to him — a common gesture of hospitality and honor in the ancient world. He wants to keep this being, to feed him, to understand him. The angel refuses food. Only the Lord receives the offering.',
        },
        {
          kind: 'carry',
          html:
            'When you encounter something in Scripture that stops you, the response of Manoah is as honest as it comes: Lord, I don&apos;t fully understand. Help me. Teach me what to do with this. The asking itself, without needing to have figured it all out first, is the beginning of obedience.',
        },
        {
          kind: 'reflection',
          id: 'j13-mystery',
          prompt:
            'Where might God be asking you to obey something you don&apos;t fully understand yet? What would it look like to say yes to the mystery?',
        },
      ],
    },

    /* ─── Judges 13:15–22 — The Angel&apos;s Name is "Wonderful" ────────────── */
    {
      ref: 'Judges 13:15–22',
      title: 'The Name That Is Secret',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('And the angel of the Lord said unto Manoah, Though thou detain me, I will not eat of thy bread: and if thou wilt offer a burnt offering, thou must offer it unto the Lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('(For Manoah knew not that he was an angel of the Lord.)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-knew-not',
          html:
            'The text pauses — parenthetically, almost in a whisper — to remind us: Manoah still does not understand. He is speaking with God and does not know it. How many times does this happen in our own lives? Someone comes through a stranger&apos;s voice, a question asked at the right moment, a conversation that shifts everything — and we only understand later that God was in it.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 17,
              spans: [
                t('And Manoah said unto the angel, What is thy name, that when thy sayings come to pass we may do thee honour?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the angel of the Lord said unto him, '),
                hy('Why askest thou thus after my name, seeing it is secret?', 'j13-pele'),
                t(' (or wonderful)'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pele',
          title: 'Pele — "secret" or "wonderful"',
          script: 'פֶּלֶא',
          translit: '<strong>pele</strong> · wonderful, extraordinary, incomprehensible',
          description:
            'The angel&apos;s name is not given directly — it is called <em>pele</em>, a word that means both hidden and wonderful. The same word appears in Isaiah 9:6: "his name shall be called Wonderful" — a prophecy Christians have understood as pointing to the Messiah.',
        },
        {
          kind: 'christ',
          id: 'j13-wonderful',
          title: 'Christ Connection — "His Name Shall Be Called Wonderful"',
          html:
            'In Isaiah 9:6, the prophet writes of the coming Child: "his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace." That same Hebrew word — <em>pele</em> — appears in the angel&apos;s answer to Manoah. The angel&apos;s name is secret because it is wonderful beyond naming. The figure standing before Manoah is a Christophany — the Son of God walking among His people, visible but not recognized, offering deliverance but veiled in mystery.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 19,
              spans: [
                t('So Manoah took a kid with a meat offering, and offered it upon a rock unto the Lord: and the angel did '),
                hg('wondrously', 'j13-wondrously'),
                t('. And Manoah and his wife looked on.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For it came to pass, when the flame went up toward heaven from off the altar, that the angel of the Lord ascended in the flame of the altar.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Manoah and his wife looked on, and fell on their faces to the ground.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-wondrously',
          html:
            'The angel "did wondrously" — ascending in the flame itself, receiving the worship meant for God. This is no human messenger. This is a divine visitation. In the moments when Manoah and his wife finally see who they are in the presence of, they fall on their faces.',
        },
        {
          kind: 'commentary',
          id: 'j13-death-fear',
          html:
            'Manoah&apos;s first thought is that they will die. To see God is to die — this is ancient Israel&apos;s understanding. But notice what his wife says next.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 22,
              spans: [
                t('And Manoah said unto his wife, We shall surely die, because we have seen God.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 23,
              spans: [
                t('But his wife said unto him, If the Lord were pleased to kill us, he would not have received a burnt offering and a meat offering at our hands, neither would he have shewed us all these things, nor would have told us such things as these.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j13-wife-wisdom',
          html:
            'Manoah is afraid; his wife is wise. She sees the logic that Manoah has missed: if the Lord meant us harm, He would not have accepted our offering. He would not have revealed His plan. He would not have spoken tenderly to us as He has. The fear that says "we have seen God and will surely die" meets the faith that says "we have seen God and lived — and He has given us a purpose."',
        },
        {
          kind: 'carry',
          html:
            'Fear often comes first — the sense that standing before holiness will destroy us. Manoah&apos;s wife teaches us to look at the evidence: Has He accepted what I bring? Has He explained His will? Has He spoken to me gently? If the answer is yes, then the fear was never the final word. The promise is.',
        },
        {
          kind: 'reflection',
          id: 'j13-faith',
          prompt:
            'Where might you be stuck in Manoah&apos;s fear, when the evidence — the acceptance, the explanation, the gentleness — might be inviting you into Manoah&apos;s wife&apos;s faith?',
        },
      ],
    },

    /* ─── Judges 13:24–25 — The Spirit Begins to Move ──────────────────── */
    {
      ref: 'Judges 13:24–25',
      title: 'A Child Born; The Spirit Moves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 24,
              spans: [
                t('And the woman bare a son, and called his name '),
                hy('Samson', 'j13-samson'),
                t(': and the child grew, and the Lord blessed him.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And '),
                hg('the Spirit of the Lord began to move him', 'j13-spirit-move'),
                t(' at times in the camp of Dan between Zorah and Eshtaol.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-samson',
          title: 'Shimshon — "Samson"',
          script: 'שִׁמְשׁוֹן',
          translit: '<strong>shimshon</strong> · from <strong>shemesh</strong>, the sun; "sun-like"',
          description:
            'The name itself is a promise. A sun-like child, born in darkness, set apart for a purpose, meant to break through and bring light to Israel&apos;s captivity.',
        },
        {
          kind: 'commentary',
          id: 'j13-spirit-move',
          html:
            'The Spirit of the Lord begins to move him — the same verb used in Genesis 1:2, where the Spirit of God "moved" upon the face of the waters over chaos. The Spirit moves in Samson at times, not constantly. This is no magical power that never leaves him. It is an anointing that comes and goes, unpredictable, dependent on his faithfulness or his failure.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit is moving in you. Not constantly — sometimes you feel it like a wind, sometimes it is silent. But He is there, and He is working. Your impulse to pray when you didn&apos;t plan to. Your sudden clarity about something that has been clouded. Your unexpected strength in a moment that should have broken you. "The Spirit of the Lord began to move him." That beginning is already here.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'j13-spirit',
          prompt:
            'When have you felt the Spirit moving in you? What would change if you trusted that movement right now, even when you can&apos;t see the full deliverance He is working toward?',
        },
        {
          kind: 'artwork',
          matchTitle: /angel.*manoah/i,
          caption: 'Judges 13 · The Angel Appears',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 13',
    quote:
      'An angel appeared to a barren woman and announced that she would bear a son set apart to God from the womb, who would begin to deliver Israel from the hand of the Philistines. The angel&apos;s name was secret and wonderful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 13 · Study Guide',
  },
};
