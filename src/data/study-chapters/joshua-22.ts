import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 22 — The Eastern Tribes' Altar and the Unity of God's People
 *
 * Joshua 22 is a chapter about belonging and misunderstanding resolved through
 * investigation rather than judgment. The eastern tribes build a witness altar
 * at the Jordan, nearly sparking civil war — until Phinehas asks first.
 */
export const JOSHUA_22: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 22,

  intros: [
    'Joshua 22 is a story about the power of physical memory and the fragility of unity across separation. After years of conquest, Joshua releases the eastern tribes — Reuben, Gad, and half of Manasseh — to return to their lands east of the Jordan. But before they depart, Joshua reinforces one crucial command: do not forget the Lord your God.',
    'When the eastern tribes build an altar at the Jordan border, the rest of Israel sees only rebellion. But the altar is not meant for sacrifice; it is meant to be a witness — a sign stone that the eastern tribes belong to the God of Israel, even though the Jordan divides their land. What could have ended in bloodshed ends in peace, because the western tribes chose to investigate before condemning.',
    'For a reader on this side of the cross, Joshua 22 whispers a truth Jesus would make plain: the body of Christ is one across every boundary — geography, time, circumstance. No river, no distance, no separation can sever what God has called together.',
  ],

  sections: [
    /* ─── Joshua 22:1–8 — Blessing and Charge ───────────────────────────── */
    {
      ref: 'Joshua 22:1–8',
      title: 'The Eastern Tribes Blessed and Sent Home',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Joshua called the Reubenites, and the Gadites, and the half tribe of Manasseh, And said unto them, '),
                hp('Ye have kept all that Moses the servant of the Lord commanded you', 'obedience-past'),
                t(', and have obeyed my voice in all that I commanded you:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Ye have not left your brethren these many days unto this day, but have '),
                hg('kept the charge of the commandment of the Lord your God', 'covenant-keeping'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'obedience-past',
          html:
            'Joshua opens not with accusation but with affirmation. The eastern tribes have been faithful — they fought beside the western tribes for years without complaint or divided loyalty. This praise is not ceremonial; it is earned. Joshua is not releasing them as second-class partners; he is honoring their covenant-keeping. The word "kept" (Hebrew <em>shamar</em>) will echo through the chapter.',
        },
        {
          kind: 'commentary',
          id: 'covenant-keeping',
          html:
            'The eastern tribes have kept the <em>mishmereth</em> — the charge, the responsibility, the guarding — of God&apos;s commandment. This was the same word used in Genesis 2:15 when Adam was told to "keep" the garden. Responsibility and faithfulness are woven together. That this fidelity is what Joshua emphasizes first will matter enormously when the misunderstanding unfolds.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                hp('Now the Lord your God hath given rest unto your brethren', 'rest-promise'),
                t(', as he promised them: therefore now return ye, and get you unto the land of your possession, which Moses the servant of the Lord gave you on this side Jordan.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('So Joshua blessed them, and sent them away: and they went unto their tents.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'obedience-christ',
          title: 'Christ Connection — Faithful Unto the End',
          html:
            'The eastern tribes were asked to stay and fight while their own land waited. They could have abandoned the western tribes at any point; instead they kept covenant. Jesus says to His disciples, "Lo, I am with you alway, even unto the end of the world" (Matthew 28:20). Christ&apos;s faithfulness is not temporary; it is covenantal. The body of Christ is held together not by proximity but by mutual commitment to the Lord — a commitment that does not waver across time, culture, or distance.',
        },
        {
          kind: 'carry',
          html:
            'Faithfulness in a long commitment costs something — the eastern tribes sacrificed years of rest in their own land. Where in your own walk is God asking you to keep covenant with your brothers and sisters, even when it means deferring something you want? Who are the believers you have stood beside, and what would it mean to keep standing beside them, even across distance?',
        },
        {
          kind: 'reflection',
          id: 'faithfulness-r',
          prompt:
            'The eastern tribes "obeyed" Joshua and kept the covenant without complaint. What would change in your relationships if you cultivated the kind of faithfulness that never keeps score?',
        },
      ],
    },

    /* ─── Joshua 22:4–9 — Division and the Jordan ───────────────────────── */
    {
      ref: 'Joshua 22:4–9',
      title: 'The Promise of Rest and the Jordan Boundary',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 4,
              spans: [
                t('But '),
                hg('take diligent heed to do the commandment and the law', 'final-charge'),
                t(', which Moses the servant of the Lord charged you, to love the Lord your God, and to walk in all his ways, and to keep his commandments, and to cleave unto him, and to serve him with all your heart and with all your soul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'final-charge',
          html:
            'Before releasing them, Joshua gives them a final charge — not a threat, but a covenant reminder. He echoes Moses, echoes Deuteronomy, echoes the Shema. The pattern is <em>love, walk, keep, cleave, serve</em> — concentric circles of devotion. Joshua knows that the Jordan is about to become a physical dividing line. He is trying to ensure it does not become a spiritual one.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 8,
              spans: [
                t('And Joshua said unto them, '),
                hg('Return with much riches unto your tents', 'riches'),
                t(', and with very much cattle, with silver, and with gold, and with brass, and with iron, and with very much raiment: '),
                hp('divide the spoil of your enemies with your brethren', 'generosity'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('So the children of Reuben and the children of Gad and the half tribe of Manasseh returned, and departed from the children of Israel out of Shiloh, which is in the land of Canaan, to go unto the land of Gilead, to the land of their possession, whereof they were possessed, according to the word of the Lord by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'riches',
          html:
            'The eastern tribes leave not in poverty but in abundance — gold, silver, cattle, raiment. This is not mere compensation; it is an affirmation of their partnership. They are not lesser partners returning empty-handed. Joshua ensures that the whole congregation knows they depart blessed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yarden',
          title: 'Yarden — &ldquo;the Jordan&rdquo;',
          script: 'הַיַּרְדֵּן',
          translit: '<strong>yarden</strong> · the Jordan river, boundary-waters',
          description:
            'The Jordan has been Israel&apos;s eastern frontier for forty years — uncrossable, separating the Promised Land from the wilderness. Now it will separate not enemies from the chosen, but chosen from chosen. The river itself becomes the question: Can unity survive geography?',
        },
        {
          kind: 'carry',
          html:
            'There are Jordans in every life — distances that separate you from people you love. A different state, a different season, a difference in circumstance. Joshua 22 is asking: Will the Jordan divide your covenant, or will it sharpen your commitment to remember that you belong to the same God? What does it look like to build a witness to that unity across the distance?',
        },
      ],
    },

    /* ─── Joshua 22:10–14 — The Alarm at Shiloh ──────────────────────────── */
    {
      ref: 'Joshua 22:10–14',
      title: 'The Western Tribes&apos; Alarm and Investigation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('And when they came unto the borders of Jordan, that are in the land of Canaan, the children of Reuben and the children of Gad and the half tribe of Manasseh '),
                hy('built there an altar by Jordan', 'altar-built'),
                t(', a great altar to see to.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'altar-built',
          html:
            'The moment the eastern tribes reach the Jordan, they build an altar. It is intentionally prominent — "a great altar to see to." They want it visible, witnessed, remembered. Yet the same action that was meant to cement unity will nearly destroy it.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 11,
              spans: [
                t('And the children of Israel heard say, '),
                hg('Behold, the children of Reuben and the children of Gad and the half tribe of Manasseh have built an altar over against the land of Canaan', 'report'),
                t(', in the borders of Jordan, at the passage of the children of Israel.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And when the children of Israel heard it, the whole congregation of the children of Israel gathered themselves together at Shiloh, '),
                hp('to go up to war against them', 'war-assumption'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'report',
          html:
            'The news travels fast. "Built an altar over against the land of Canaan" — positioned as if in defiance, at the border. The narrative moves quickly from fact to fear. The phrase "the passage of the children of Israel" suggests a strategic location, feeding the interpretation that this is a challenge.',
        },
        {
          kind: 'commentary',
          id: 'war-assumption',
          html:
            'The western tribes assume the worst immediately. They do not ask; they gather for war. This is not malice — it is zealousness for God&apos;s law. In their memory is the sin at Peor, when a single tribe&apos;s idolatry brought plague on the entire nation. To them, the altar at Jordan looks like history about to repeat. The assumption is reasonable; the process will be the problem.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 13,
              spans: [
                t('And the children of Israel sent unto the children of Reuben, and to the children of Gad, and to the half tribe of Manasseh, into the land of Gilead, '),
                hg('Phinehas the son of Eleazar the priest, and with him ten princes', 'phinehas-embassy'),
                t('; of each chief house a prince throughout all the tribes of Israel; and each one was an head of the house of their fathers among the thousands of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phinehas-embassy',
          html:
            'Before the war begins, something better happens. Phinehas is sent — the same priest who, in Numbers 25, stopped a plague by taking decisive action against idolatry. He is zealous for the Lord, but he is also wise. He brings one prince from each of the ten western tribes — a delegation representing the whole congregation, not just its anger.',
        },
        {
          kind: 'reflection',
          id: 'assumption-r',
          prompt:
            'The congregation gathered for war before asking questions. When have you assumed the worst about someone&apos;s motives? What would change if you followed Phinehas&apos; example and investigated first?',
        },
      ],
    },

    /* ─── Joshua 22:15–20 — The Accusation ──────────────────────────────── */
    {
      ref: 'Joshua 22:15–20',
      title: '"What Trespass Is This?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 15,
              spans: [
                t('Thus saith the whole congregation of the Lord, '),
                hp('What trespass is this that ye have committed against the God of Israel', 'accusation'),
                t(', to turn away this day from following the Lord, in that ye have builded you an altar, that ye might rebel this day against the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'accusation',
          html:
            'Even in the accusation, the tone is almost mournful. "What trespass" — the word <em>ma&apos;al</em> means to act treacherously, to betray a covenant. Phinehas speaks as if the heart has already broken. Yet he does not pronounce judgment; he asks the question and waits for the answer. The investigation is real, not a formality.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 16,
              spans: [
                t('Is the iniquity of Peor too little for us, from which we are not cleansed until this day, although there was a plague in the congregation of the Lord, But that ye must turn away this day from following the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'peor-echo',
          html:
            'Phinehas invokes Numbers 25 — the sin at Peor, where Israelite men engaged in idolatry with Moabite women, and God sent a plague that killed 24,000. That sin is still fresh in memory, still unhealed. "Are we not cleansed until this day" — the wound is ongoing. And now, to them, the altar looks like the wound opening again.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-peor',
          title: 'Peor — &ldquo;the sin at Peor&rdquo;',
          script: 'פְּעוֹר',
          translit: '<strong>Peor</strong> · site of Israel&apos;s idolatry; a haunting memory',
          description:
            'In Numbers 25, Israel was seduced into idolatry at Peor. The memory is corporate trauma — the congregation nearly destroyed by one tribe&apos;s unfaithfulness. Phinehas recalls it not to condemn but to show what is at stake if the eastern altar is indeed a compromise with idolatry.',
        },
        {
          kind: 'reflection',
          id: 'peor-r',
          prompt:
            'Phinehas remembered a past failure and feared history would repeat. Has a past wound made you quicker to judge? How can you honor past pain without letting it blind you to the present?',
        },
      ],
    },

    /* ─── Joshua 22:21–29 — The Eastern Tribes' Answer ───────────────────── */
    {
      ref: 'Joshua 22:21–29',
      title: '&ldquo;Ed&rdquo; &mdash; A Witness Between Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 21,
              spans: [
                t('Then the children of Reuben and the children of Gad and the half tribe of Manasseh answered, and said unto the heads of the thousands of Israel,'),
              ],
            },
            {
              number: 22,
              spans: [
                t('The Lord God of gods, the Lord God of gods, he knoweth, and Israel he shall know; if it be in rebellion, or if in transgression against the Lord, (save us not this day,) That we have built us an altar to turn from following the Lord, or if to offer thereon burnt offering or meat offering, or if to offer peace offerings thereon, '),
                hy('let the Lord himself require it', 'oath'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'oath',
          html:
            'The eastern tribes answer with an oath of terrible consequence. "The Lord God of gods, the Lord God of gods" — the repetition is emphatic, almost desperate. They invoke divine judgment on themselves if they are lying. The triple invocation echoes the Shema&apos;s insistence: the Lord is one, and He alone knows the heart. This is not a casual explanation; it is a covenant vow.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 24,
              spans: [
                t('And if we have not rather done it for '),
                hg('fear of this thing', 'future-fear'),
                t(', saying, In time to come your children might speak unto our children, saying, '),
                hg('What have ye to do with the Lord God of Israel?', 'severed'),
                t(''),
              ],
            },
            {
              number: 25,
              spans: [
                t('For the Lord hath made Jordan a border between us and you, ye children of Reuben and children of Gad; '),
                hp('ye have no part in the Lord', 'exclusion-fear'),
                t('. Thus shall your children make our children cease from fearing the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'future-fear',
          html:
            'The eastern tribes reveal their true motive: not rebellion, but preservation. They fear that in a generation or two, the Jordan will become more than a geographical boundary. It will become a spiritual boundary. Their children will be strangers. The gesture is not pride but anxiety about being forgotten.',
        },
        {
          kind: 'commentary',
          id: 'severed',
          html:
            'The phrase "What have ye to do with the Lord God of Israel?" is the cry of the excluded, the strangers left outside. The eastern tribes are saying: our children will hear this question and will have no answer. They will feel severed from the covenant. To prevent that rupture, we build this altar now.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 26,
              spans: [
                t('Therefore we said, Let us now prepare to build us an altar, not for burnt offering, nor for sacrifice: But that it may be a '),
                hy('witness between us, and you, and our generations after us', 'ed'),
                t(', that we may do the service of the Lord before him with our burnt offerings, and with our sacrifices, and with our peace offerings; that your children may not say to our children in time to come, Ye have no part in the Lord.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Therefore said we, It shall be when they should so say to us or to our generations in time to come, that we may say again, Behold the '),
                hy('pattern of the altar of the Lord', 'mizbeach-pattern'),
                t(', which our fathers made, not for burnt offerings, nor for sacrifices; but it is a witness between us and you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ed',
          html:
            'The altar is not for sacrifice; it is for memory. A witness stone. In verse 34, they will name it "Ed" — the Hebrew word for witness. The altar is a physical document, a sign, a message in stone to future generations: "We belonged. We served. We kept covenant. The Jordan divides our land, but not our God."',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ed',
          title: 'Ed — &ldquo;a witness&rdquo;',
          script: 'עֵד',
          translit: '<strong>ed</strong> · a witness; something that testifies; a standing reminder',
          description:
            'The eastern tribes name their altar "Ed" — a witness that they too belong to the covenant. Not a monument to themselves, but a sign that future generations can point to and say: we are part of God&apos;s people.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mizbeach',
          title: 'Mizbeach — &ldquo;altar&rdquo;',
          script: 'מִזְבֵּחַ',
          translit: '<strong>mizbeach</strong> · altar; a place of sacrifice and covenant-keeping',
          description:
            'The altar <em>mirrors</em> the one at Shiloh — not a rival altar, but a copy, a testimony. The eastern tribes are not claiming a separate priesthood or a separate God. They are saying: our God is your God. We see the same pattern. We serve the same Lord.',
        },
        {
          kind: 'christ',
          id: 'christ-witness',
          title: 'Christ Connection — One Body Across Every Jordan',
          html:
            'Paul writes to the Corinthians about the body of Christ: "Whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it" (1 Corinthians 12:26). The eastern tribes build their witness altar because they refuse to accept that the Jordan will sever them from that body. Jesus tells His disciples, "I am with you alway, even unto the end of the world" (Matthew 28:20). His presence is not bound by geography. Neither is His covenant. The body of Christ is one — east of Jordan, west of Jordan, across centuries, across continents.',
        },
        {
          kind: 'carry',
          html:
            'The eastern tribes built their witness not in rebellion but in fear — fear that they would be forgotten, that the distance would become permanent. Is there someone across a distance from you whom you are afraid of losing connection with? What would it look like to build a "witness" — a visible, deliberate act of covenant-keeping that says, "The distance doesn&apos;t change this"?',
        },
        {
          kind: 'reflection',
          id: 'witness-r',
          prompt:
            'The eastern tribes feared their children would be cut off from God&apos;s people. What inheritance of covenant are you building for the next generation? What witness are you leaving?',
        },
      ],
    },

    /* ─── Joshua 22:30–34 — Peace Through Understanding ────────────────── */
    {
      ref: 'Joshua 22:30–34',
      title: 'Phinehas Understands; Peace Is Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 30,
              spans: [
                t('And when Phinehas the priest, and the princes of the congregation and heads of the thousands of Israel which were with him, heard the words that the children of Reuben and the children of Gad and the children of Manasseh spake, it '),
                hg('pleased them', 'pleased'),
                t('.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Phinehas the son of Eleazar the priest said unto them, '),
                hp('This day we perceive that the Lord is among us', 'perceive-lord'),
                t(', because ye have not committed this trespass against the Lord: now ye have delivered the children of Israel out of the hand of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pleased',
          html:
            'The word "pleased" (Hebrew <em>yatab</em>) means it was good in their sight. The misunderstanding dissolves the moment the truth is spoken and heard. This is not a grudging acceptance but a genuine reversal. Phinehas and the delegation were wrong, and now they know it.',
        },
        {
          kind: 'commentary',
          id: 'perceive-lord',
          html:
            'Phinehas shifts from accusation to affirmation. "This day we perceive" — they see with new eyes. The eastern tribes have not betrayed God; they have honored Him. They have kept covenant. In Phinehas&apos;s eyes, their faithfulness shines.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 34,
              spans: [
                t('And the children of Reuben and the children of Gad called the altar '),
                hy('Ed', 'ed-name'),
                t(': for it shall be a witness between us that the Lord is God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ed-name',
          html:
            'The conflict ends not in defeat but in naming. The altar is called "Ed" — a witness. It stands not as a monument to the eastern tribes&apos; fear, but as a permanent sign of their belonging. Future generations will see it and remember: we are one people, east and west of Jordan. We serve one God.',
        },
        {
          kind: 'carry',
          html:
            'Phinehas asked the question instead of making accusations. He listened without prejudging. He allowed his mind to be changed. In your own relationships, where do you need to slow down, ask first, and be willing to see a different truth than the one fear painted first?',
        },
        {
          kind: 'reflection',
          id: 'resolution-r',
          prompt:
            'War was averted because one man was willing to investigate instead of assume. How does that challenge the way you respond to conflict? What would change if "ask first" was your default?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 22',
    quote:
      'The eastern tribes built a witness altar at Jordan so that their children would never forget they belonged to God&apos;s people, even across distance. One God holds one people together.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 22 · Study Guide',
  },

  hasHebrew: true,
};
