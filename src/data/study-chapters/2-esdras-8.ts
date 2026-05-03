import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Esdras 8 — Ezra&apos;s Great Intercessory Prayer
 *
 * Ezra stands before God and offers a prolonged prayer of intercession for sinners.
 * He wrestles with the paradox: how can a perfect God show mercy to an imperfect people?
 * How can justice and mercy coexist? Yet God responds with a stunning promise—a remnant
 * shall be preserved. The chapter culminates in the comparison of silver tested by fire
 * and gold made precious by its rarity: so the righteous are precious because few.
 *
 * This is the prayer of one who knows that judgment is real, yet dares to plead for
 * the love that stands behind it.
 */
export const SECOND_ESDRAS_8: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 8,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 15 },
  intros: [
    'Ezra stands in the tradition of the great intercessors. Abraham pleaded for Sodom. Moses shattered the tables and argued with God for a nation that had betrayed Him. Now Ezra, centuries later, takes up the same posture: he will not rest until he has asked God for mercy on behalf of a sinful people.',
    'The chapter teaches that intercession is not about changing God&apos;s nature but about alignment with it. Ezra&apos;s plea is not answered with soft reassurance but with truth. Justice is real. Many will perish. Yet mercy is equally real. A remnant will be preserved—not because they deserve it, but because God&apos;s mercy is sure and His covenant will not fail.',
  ],

  sections: [
    /* ─── 2 Esdras 8:1–2 — Ezra&apos;s Great Intercessory Prayer ──────────── */
    {
      ref: '2 Esdras 8:1–2',
      title: 'Ezra&apos;s Great Intercessory Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And Ezra said, '),
                hp('O Lord, I beseech thee, have mercy upon thy people', 'ezdras-mercy'),
                t(': for the sinful do cry unto thee for help.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezdras-mercy',
          html:
            'Ezra speaks not for the righteous but for the sinful—those who cry out and have no hope in themselves. He positions himself as an intercessor, standing in the gap between a perfect God and an imperfect people. This is the posture of the prophets: to plead the case of those who cannot plead their own. [res:sefaria-2-esdras-8-vision] [res:bible-odyssey-theodicy]',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 2,
              spans: [
                t('And if thou hearken not unto the voice of thy servant in this thing, in what shall the people differ from the beasts of the field?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezdras-beasts',
          html:
            'Without mercy, without hope, humanity is no better than beasts—driven only by survival and appetite. Ezra&apos;s argument is bold: mercy is not a luxury or a weakness. It is what makes us human. It is what makes the covenant real.',
        },
        {
          kind: 'hebrew',
          id: 'rachamim',
          title: 'Rachamim — "Mercy"',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercy; compassion; womb-love; tender affection',
          description:
            'Rachamim is not abstract compassion but the feeling of a mother for her child. It comes from the Hebrew word rechem, meaning womb. When God shows rachamim, He acts from the most intimate, protective part of His nature. This is what Ezra is asking for: not leniency, but the love that a parent has for a child.',
        },
        {
          kind: 'carry',
          html:
            'Bring your true self before God. Not your best self, your cleaned-up self, your pretend self. Bring the part of you that cries out and knows it has no hope in itself. The intercessor&apos;s prayer—for yourself and for others—always begins with honesty about need.',
        },
        {
          kind: 'reflection',
          id: 'mercy-plea',
          prompt:
            'When have you felt like the sinful in this passage—crying out for help? What does it mean to ask God not for what you deserve, but for mercy?',
        },
      ],
    },

    /* ─── 2 Esdras 8:4–6 — "Do Not Look Upon the Sins of Thy People" ──── */
    {
      ref: '2 Esdras 8:4–6',
      title: 'Do Not Look Upon the Sins of Thy People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 4,
              spans: [
                t('And Ezra said, '),
                hp('O Lord, do not look upon the sins of thy people', 'look-sins'),
                t(', but on them which serve thee in truth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'look-sins',
          html:
            'This is the pivotal plea of the entire prayer. Ezra is not asking God to excuse sin or pretend it does not exist. He is asking God to look <em>past</em> the sin to the faith that lives beneath it. He is asking God to see not the worst but the true—the ones who serve in truth, even if they also stumble.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('Consider '),
                hg('not the wickedness of them that dwell upon the earth', 'not-wickedness'),
                t(', but the glory of them that serve thee faithfully.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'not-wickedness',
          html:
            'Ezra asks God to shift His gaze—not to ignore the wicked, but to center it on the faithful. A good parent knows to notice not only the broken dish but also the child&apos;s faithfulness over years. Ezra is asking God to remember the whole story, not only the failure.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 6,
              spans: [
                t('Consider not the multitude of those that have sinned, but the strength of thy servants whom thou hast set apart unto thyself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'servants-set-apart',
          html:
            'Not the number of sinners, but the faithfulness of the few. This is Ezra&apos;s plea in miniature: shift the weight. Let the ones who have given themselves to God carry weight in your judgment. Let their faithfulness count.',
        },
        {
          kind: 'greek',
          id: 'pistis',
          title: 'Pistis — "Faith" or "Faithfulness"',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; faithfulness; the quality of one who keeps faith',
          description:
            'Pistis is not mere belief but the ongoing commitment of one who serves. To have pistis is to be reliable, trustworthy, steadfast. Ezra is asking God to notice the ones who keep faith, even when everything else fails.',
        },
        {
          kind: 'carry',
          html:
            'You may feel surrounded by failure—in the world, in the Church, in yourself. But God sees the faithful ones. He knows their names. He has not forgotten their faithfulness, even on the days when they feel like failures too. If you are trying to serve Him, you are one of the ones He is looking at.',
        },
        {
          kind: 'reflection',
          id: 'faithful-ones',
          prompt:
            'Who are the faithful ones God has placed in your life? Whose faithfulness have you noticed when they felt like they were failing?',
        },
      ],
    },

    /* ─── 2 Esdras 8:22–25 — The Angel&apos;s Response — Mercy and Justice ──── */
    {
      ref: '2 Esdras 8:22–25',
      title: 'The Angel&apos;s Response — Mercy and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 22,
              spans: [
                t('And the angel said unto me, '),
                hp('Thy prayer is heard before the throne of God', 'prayer-heard'),
                t(', and thy petition is accepted.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prayer-heard',
          html:
            'God does hear. The angel does not dismiss Ezra&apos;s prayer or delay its answer. It is <em>already</em> before the throne. This is the assurance every intercessor needs: your plea is heard. Your words matter. They have reached into the throne room.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 23,
              spans: [
                t('But know that '),
                hg('the Most High regardeth the justice of His judgments', 'justice-real'),
                t(', and mercy rejoiceth over judgment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'justice-real',
          html:
            'The angel does not soften God&apos;s nature or pretend justice does not matter. God&apos;s justice is real and stands firm. But mercy does not cancel justice—it stands above it, rejoicing over it. This is not contradiction but fulfillment. Justice requires that sin have consequence. Mercy offers that the consequence does not have the final word.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 24,
              spans: [
                t('For the Lord hath made '),
                hg('mercy and justice to be as two pillars of the earth', 'pillars'),
                t(': both stand firm, and neither falleth.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('When the day of judgment cometh, '),
                t('mercy shall be shown unto them that have believed'),
                t(', and justice shall be executed upon them that have despised His law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pillars',
          html:
            'God is not torn between justice and mercy as though they were competing forces. They are the two pillars that hold up the whole creation. Both are His. Both are real. And at judgment, both will be fully expressed: mercy for those who have believed, justice for those who have despised His law.',
        },
        {
          kind: 'christ',
          id: 'christ-intercessor',
          title: 'Christ Connection — The Great Intercessor',
          html:
            'Ezra pleads, but Christ <em>is</em> the intercessor. Jesus stands before God and offers the prayer Ezra cannot: "Father, forgive them" (Luke 23:34). He does not ask for mercy but provides it—His own body and blood a covenant of grace. Hebrews writes, "He is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Heb. 7:25). The plea Ezra makes in words, Jesus makes in flesh.',
        },
        {
          kind: 'carry',
          html:
            'God is not confused about your sin. He does not need you to minimize it or explain it away. He sees it fully. And He sees you fully too—your faith, your struggle, your reaching toward Him. Mercy and justice are not enemies in His heart. They are both true. And both work in your favor when you trust Him.',
        },
        {
          kind: 'reflection',
          id: 'mercy-justice',
          prompt:
            'How has God shown you both justice (the reality that sin has consequences) and mercy (that those consequences do not have the final word) in your own story?',
        },
      ],
    },

    /* ─── 2 Esdras 8:41–44 — The Silver and Gold Comparison ─────────────── */
    {
      ref: '2 Esdras 8:41–44',
      title: 'The Silver and Gold Comparison',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 41,
              spans: [
                t('And the Lord said, '),
                hp('As silver is tried in the fire and gold in the furnace', 'silver-tried'),
                t(', so are the wicked tried in their wickedness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'silver-tried',
          html:
            'This is one of the most luminous images in all of Scripture. The wicked are not destroyed by their wickedness; they are <em>tested</em> by it. The same fire that refines precious metal also reveals its purity. Wickedness, when it touches a person, acts as a crucible—showing whether they will hold fast to truth or give way to corruption.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 42,
              spans: [
                t('But as gold is more precious because it is rare, so '),
                hg('the righteous are precious', 'righteous-precious'),
                t(' because they are '),
                hg('few', 'few-righteous'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'righteous-precious',
          html:
            'The scarcity of the righteous does not diminish their value—it increases it. Gold is not worth less because it is rare. It is worth more. A heart that chooses truth when lies are easier, that chooses faithfulness when abandonment is possible, that chooses God when the world offers everything else—such a heart is rarer and therefore more precious than any metal.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 43,
              spans: [
                t('The few righteous shall inherit the world to come, and shall dwell in the house of the Lord forever.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('For the covenant is made with them that keep faith, and judgment shall be upon them that have broken it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'few-righteous',
          html:
            'It does not matter how few they are. The promise is sure. The covenant stands. The ones who keep faith—who hold on when holding seems impossible—will inherit not just redemption but a home. They will dwell in the house of the Lord forever. They are not lost in the crowd. They are counted. They are known. They are precious.',
        },
        {
          kind: 'artwork',
          matchTitle: /gold|furnace|fire/i,
          matchArtist: /rembrandt|tissot|watts/i,
          caption: '2 Esdras 8:41–44 · The Refining of Gold',
        },
        {
          kind: 'carry',
          html:
            'You may feel like one of the few. And perhaps you are. Perhaps your faithfulness stands out because so much around you is not faithful. That does not make you small or invisible. It makes you precious. Gold in the furnace does not become less valuable because the furnace is hot. It becomes pure.',
        },
        {
          kind: 'reflection',
          id: 'precious-few',
          prompt:
            'In what ways has your faithfulness been tested by fire? How has that testing refined you, rather than destroyed you?',
        },
      ],
    },

    /* ─── 2 Esdras 8:47–50 — The Few Who Are Precious ──────────────────── */
    {
      ref: '2 Esdras 8:47–50',
      title: 'The Few Who Are Precious',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 47,
              spans: [
                t('Rejoice therefore, thou and all them like thee that '),
                hg('believe on the ways of the Most High', 'believe-ways'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'believe-ways',
          html:
            'The angel turns from warning to blessing. Those who believe—not merely in God&apos;s existence, but in <em>His ways</em>, His wisdom, His direction—are commanded to rejoice. Not someday, when all is settled. Now. In the middle of the struggle, while the perishing are still perishing, the faithful are told: rejoice.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 48,
              spans: [
                t('And the Lord shall bring many to be saved: but '),
                hg('they also that are counted among them that are lost shall not perish', 'not-perish'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'not-perish',
          html:
            'This is a stunning promise hidden in subtle language. Even those who seem lost, who are numbered among the perishing, who have every mark of being beyond hope—even they may not perish. God sees through the surface, through the failure, through the seeming lostness. A heart that genuinely turns toward Him is not lost, no matter how lost it appears.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 49,
              spans: [
                t('Now therefore saith the Lord, '),
                hp('I am come to entreat thy prayer', 'lord-comes'),
                t('; yea, I shall show thee secrets and hidden things which thou hast not known.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('For thou hast '),
                hg('wearied thyself greatly, but thou hast not wearied the Lord', 'not-wearied'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-comes',
          html:
            'The Lord comes not to silence Ezra but to honor him. His intercession, his weary pleading, has drawn the attention of the throne. God shows Himself present to the one who wears himself out in prayer for others. This is not distant deity. This is intimate communion.',
        },
        {
          kind: 'commentary',
          id: 'not-wearied',
          html:
            'Here is grace in a single line: your weariness in prayer has not wearied God. He does not grow tired of your pleading. He does not dismiss your struggle to hold onto faith. You may feel exhausted. He is not. And His strength holds the whole thing up.',
        },
        {
          kind: 'christ',
          id: 'christ-remnant',
          title: 'Christ Connection — The Bride of Christ',
          html:
            'Ezra pleads for a remnant, and God promises it. The New Testament reveals that this remnant is the Church—the redeemed people bought by Christ&apos;s blood. John, in Revelation, speaks of the bride of Christ adorned and precious, made spotless through the blood of the Lamb (Rev. 19:7–8). Every person who clings to faith in Christ is part of that remnant. You are the few who are precious. You are part of the unfailing covenant.',
        },
        {
          kind: 'carry',
          html:
            'If you are weary in prayer, if you are tired from trying to hold on to faith when the world seems bent on faithlessness, hear this: you have not wearied God. He sees your effort. He honors your faithfulness. The few who are precious are known by name and number. You are one of them.',
        },
        {
          kind: 'reflection',
          id: 'wearied-prayer',
          prompt:
            'When has your faithfulness felt like a burden, as though God must be growing impatient? How would it change your prayer if you believed He is not wearied by your pleading?',
        },
      ],
    },

    /* ─── 2 Esdras 8:61–62 — "Trouble Not Thyself for the Perishing" ────── */
    {
      ref: '2 Esdras 8:61–62',
      title: '"Trouble Not Thyself for the Perishing"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 61,
              spans: [
                t('And the Lord said unto me, '),
                hp('Trouble not thyself for them that have sinned, neither afflict thyself for the wicked', 'trouble-not'),
                t(': for the Lord hath not left the world, but is mindful of every soul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'trouble-not',
          html:
            'This is perhaps the hardest word in the chapter. Do not trouble yourself for the perishing. Not because God is cruel, but because God is fully present to them. They are not forgotten. They are not outside His gaze. And your intercession for them, though precious, does not rescue you from the necessity of choosing your own way.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 62,
              spans: [
                t('But now come, and '),
                hg('let us depart', 'let-depart'),
                t(', and I shall show unto thee that which thou hast desired to see and to know.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'let-depart',
          html:
            'The angel calls Ezra away from the weight of the world and into revelation. He has interceded. He has pleaded. Now he will see. The movement is from prayer to vision, from asking to knowing. This is the pattern of every genuine intercessor: prayer opens the door to revelation.',
        },
        {
          kind: 'greek',
          id: 'aperchomai',
          title: 'Aperchomai — "Depart" or "Go Away"',
          script: 'ἀπέρχομαι',
          translit: '<strong>Aperchomai</strong> · depart; go away; to take leave of',
          description:
            'The angel calls Ezra to a new journey. To aperchomai is not to flee or abandon, but to answer a call to something new. Ezra must depart from one place of standing and move toward another—from intercession to vision, from burden to revelation.',
        },
        {
          kind: 'carry',
          html:
            'You may carry the weight of the world&apos;s suffering. You may lie awake at night for the perishing. But God calls you toward something more: the vision of His justice, His mercy, His purpose that cannot fail. You are not called to fix everything. You are called to see Him, to know Him, to stand in His presence and let your burden be transformed into worship.',
        },
        {
          kind: 'reflection',
          id: 'burden-vision',
          prompt:
            'What burden have you been carrying for others that God might be calling you to release? What vision or revelation might be waiting for you if you stop trying to save the world and simply say yes to Him?',
        },
        {
          kind: 'artwork',
          matchTitle: /vision|revelation|cloud|light/i,
          matchArtist: /rembrandt|blake|caravaggio/i,
          caption: '2 Esdras 8:61–62 · From Prayer to Vision',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-2-esdras-8-vision',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Esdras 8 — Visionary Dialogue',
      url: 'https://www.sefaria.org/II_Esdras.8',
      description: 'Ezra&apos;s dialogues on theodicy and divine justice (vision 6).',
    },
    {
      id: 'bible-odyssey-theodicy',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Theodicy in Late Judaism',
      url: 'https://www.bibleodyssey.org/dictionary/evil/',
      description: 'Problem of evil and divine justice in postexilic Jewish thought.',
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 8',
    quote:
      'Do not look upon the sins of thy people, but on them which serve thee in truth. As silver is tried in the fire and gold in the furnace, so are the wicked tried in their wickedness. But as gold is more precious because it is rare, so the righteous are precious because they are few.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 8 · Study Guide',
  },

  hasHebrew: true,
};
