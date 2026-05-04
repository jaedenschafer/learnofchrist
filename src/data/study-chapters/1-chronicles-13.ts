import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 13 — The Ark on a New Cart
 *
 * David brings all Israel together to retrieve the ark of God from Kirjath-jearim,
 * where it has rested since the days of Saul. The people consent, and they set out
 * in celebration — but they carry the ark on a new cart, after the manner of the
 * Philistines. When the oxen stumble at Chidon, Uzza reaches out to steady the ark,
 * and the anger of the Lord is kindled against him. He dies before God. The lesson
 * is sharp: doing God's work in God's way is not optional. After the breach, David
 * leaves the ark with Obed-edom the Gittite, where it rests for three months and
 * brings blessing to his household.
 */
export const CHRONICLES_1_13: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 13,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 13',
  },
  intros: [
    'The kingdom is united under David. He has conquered his enemies, established his throne, and now his thoughts turn to the spiritual center of Israel — the ark of God, the symbol of the Lord&apos;s presence among His people. For years, since the days of Saul, the ark has remained in Kirjath-jearim, untouched, waiting. David calls together all of Israel — the captains of thousands and hundreds, every leader of the people — and proposes a journey: "Let us bring again the ark of our God to us."',
    'The people agree. It seems right. It seems good. And the procession begins with celebration — David and all Israel, playing before God with singing, harps, psalteries, timbrels, cymbals, and trumpets. But beneath the joy lies a critical error: the ark travels on a new cart, not on the poles that the Law prescribed for the priests to carry it. It is the method of the Philistines, not the method of the Lord. And when the oxen stumble at the threshing floor of Chidon, when Uzza reaches out to prevent the ark from falling, the anger of the Lord is kindled. One man dies. The celebration stops. David is afraid. And in this moment, we learn that good intentions and careful planning are not enough — we must do God&apos;s work in God&apos;s way.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 13',
    quote:
      'Doing God&apos;s work in God&apos;s way is not an ornament on obedience — it is the heart of obedience. When we cut corners or improvise methods, even with the best intentions, we invite consequences. The ark moved when the Law was followed; it brought blessing to the house of Obed-edom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 13 · Study Guide',
  },

  resources: [
    {
      id: 'israel-museum-ark',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'The Ark of the Covenant',
      url: 'https://www.imj.org.il/',
      description: 'Israel Museum collections and exhibits on Temple and Ark archaeology.',
    },
    {
      id: 'sefaria-1-chronicles-13',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 13 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.13',
      description: 'The Hebrew text of 1 Chronicles 13 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-1-chronicles-overview-13',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '1 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/1-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 1 Chronicles.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 13:1–5 — The Consultation and Decision ──────────────── */
    {
      ref: '1 Chronicles 13:1–5',
      title: 'David Consults the People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And David '),
                hg('consulted with the captains', 'c13-consulted'),
                t(' of thousands and hundreds, and with every leader:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And David said unto all the congregation of Israel, If it seem good unto you, and that it be of the Lord our God, let us send abroad unto our brethren every where, that are left in all the land of Israel, and with them also to the priests and Levites which are in their cities and suburbs, that they may gather themselves unto us:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And let us bring again the ark of our God to us: for we enquired not at it in the days of Saul.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And all the congregation said that they would do so: for the thing was right in the eyes of all the people.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('So David gathered all Israel together, from Shihor of Egypt even unto the entering of Hemath, to bring the ark of God from Kirjath-jearim.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c13-consulted',
          html:
            'David begins not with a unilateral decision, but with consultation. He calls together the leaders of Israel — the captains of thousands, the captains of hundreds, every leader of the people. This is a model of wise governance: the king proposes, the people confirm. "If it seem good unto you, and that it be of the Lord our God" — notice the dual appeal: both to the people&apos;s judgment and to the will of the Lord. This is the language of covenant leadership. [res:israel-museum-ark]',
        },
        {
          kind: 'commentary',
          id: 'c13-left-in-land',
          html:
            'David seeks to gather "every where, that are left in all the land of Israel" — a sweeping, national mobilization. He also calls on "the priests and Levites which are in their cities" to join the procession. The ark is not a private treasure. It belongs to all Israel. The spiritual center of the nation must be recovered. [res:israel-museum-ark]',
        },
        {
          kind: 'commentary',
          id: 'c13-enquired-not',
          html:
            'This detail is crucial: "we enquired not at it in the days of Saul." The ark has been neglected, untended, during Saul&apos;s reign. There is a theology of neglect implicit in this line — when we do not seek the Lord&apos;s presence, we do not cultivate it. David&apos;s determination to restore the ark is a decision to restore the center of Israel&apos;s spiritual life. [res:israel-museum-ark]',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we consult widely and everyone agrees that a course is right. The consensus is clear. Everyone feels it in their heart. But consent of the people is not the same as obedience to God&apos;s way. David will learn this hard lesson. The chapter shows us that even when leaders and people together say "this seems right," we must still ask: Are we doing this in the manner God prescribed, or are we improvising?',
        },
        {
          kind: 'reflection',
          id: 'consulted-congregation',
          prompt: 'Has there been a time when you consulted with others, received their full agreement, and proceeded — only to discover later that you were missing something important? What was the missing ingredient?',
        },
      ],
    },

    /* ─── 1 Chronicles 13:6–8 — The New Cart Procession ──────────────────────── */
    {
      ref: '1 Chronicles 13:6–8',
      title: 'They Carried the Ark in a New Cart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('And David went up, and all Israel, to Baalah, that is, to Kirjath-jearim, which belonged to Judah, to bring up thence the ark of God the Lord, that dwelleth between the cherubims, whose name is called on it.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they '),
                hg('carried the ark of God in a new cart', 'c13-new-cart'),
                t(' out of the house of Abinadab: and Uzza and Ahio drave the cart.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And David and all Israel played before God with all their might, with singing, and with harps, and psalteries, and timbrels, and cymbals, and trumpets.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c13-new-cart',
          html:
            'Here is the critical error. The ark is placed on a new cart — a Philistine method of transport (see 1 Samuel 6, where the Philistines sent the ark back on a cart after it had been taken and plagued them). But the Law of God was explicit: the ark must be carried on poles by the Levites. Numbers 4 and 7 prescribe this clearly. A new cart is smooth, convenient, modern — but it is not God&apos;s way. The phrase "new cart" stands out precisely because it is not the proper vessel. David has consulted the people. Everyone is happy. Everyone is playing music and singing. But the ark is being transported in violation of God&apos;s command. [res:israel-museum-ark]',
        },
        {
          kind: 'hebrew',
          id: 'c13-aron',
          title: 'Aron — "The Ark"',
          script: 'אָרוֹן',
          translit: '<strong>Aron</strong> · chest; coffer; ark; the sacred container',
          description:
            'The word aron refers to the sacred chest, the most holy object in Israel — the dwelling place of the divine presence. Inside the ark lay the tablets of the covenant, manna, and Aaron&apos;s staff. It was not merely a relic or a religious symbol. It was the visible sign of God&apos;s presence with His people. To handle the ark wrongly was to treat God Himself wrongly.',
        },
        {
          kind: 'hebrew',
          id: 'c13-uzza',
          title: 'Uzza — "Strength"',
          script: 'עֻזָּה',
          translit: '<strong>Uzza</strong> · strength; might; the Lord is my strength',
          description:
            'The name Uzza means "strength" or "might." His father Abinadab had kept the ark in his house for decades. Uzza and Ahio had grown up in the presence of this holy thing. But knowing the ark and respecting it are not the same thing. A name meaning "strength" will soon become a test of how much strength avails against the holiness of God.',
        },
        {
          kind: 'carry',
          html:
            'The procession is joyful. The music is real. The intention to honor God is genuine. But the method violates God&apos;s prescription. This is a sobering lesson: we can be sincere, enthusiastic, well-intentioned, and still be in direct violation of God&apos;s command. The question is not "Do I mean well?" but "Am I doing it God&apos;s way?" These can be at odds[res:sefaria-1-chronicles-13][res:bibleodyssey-1-chronicles-overview-13].',
        },
        {
          kind: 'reflection',
          id: 'new-cart',
          prompt: 'When have you chosen a method that seemed practical and modern, only to discover later that it conflicted with a principle you were meant to follow? How did you respond?',
        },
      ],
    },

    /* ─── 1 Chronicles 13:9–12 — Uzza Struck Dead ──────────────────────────── */
    {
      ref: '1 Chronicles 13:9–12',
      title: 'The Anger of the Lord Kindled Against Uzza',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 9,
              spans: [
                t('And when they came unto the threshingfloor of '),
                hy('Chidon', 'c13-chidon'),
                t(', Uzza put forth his hand to hold the ark; for the oxen stumbled.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the '),
                hp('anger of the Lord was kindled against Uzza', 'c13-anger-kindled'),
                t('; and he smote him, because he put his hand to the ark: and there he died before God.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And David was displeased, because the Lord had made a '),
                hg('breach upon Uzza', 'c13-breach'),
                t(': and the name of that place was called Perez-uzza to that day.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And David was afraid of God that day, saying, How shall I bring the ark of God home to me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c13-chidon',
          html:
            'Chidon (also called Nacon in 2 Samuel 6) is a threshing floor. The oxen, perhaps startled or tired, stumble. The cart lurches. For a moment, the ark seems in danger of falling. And this moment — this human moment of instinct to protect something precious — becomes a test of whether the Law will be upheld even when chaos threatens. [res:israel-museum-ark]',
        },
        {
          kind: 'commentary',
          id: 'c13-anger-kindled',
          html:
            'Uzza&apos;s hand reaches out to steady the ark. His motive is to save it from falling. He is trying to prevent a disaster. But the Law forbade anyone except the Levites to touch the ark — and Uzza is not a Levite, he is the driver of the cart. The anger of the Lord "is kindled" — the Hebrew suggests a sudden ignition of holy wrath. Uzza dies. Not slowly, not with warning, but immediately. The narrative is stark: "there he died before God." [res:israel-museum-ark]',
        },
        {
          kind: 'commentary',
          id: 'c13-breach',
          html:
            'David calls the place where this happened Perez-uzza — "the breach of Uzza," or "Uzza&apos;s breach." A breach has been made. God&apos;s law has been violated, and the consequence is swift and absolute. David is not angry at God — he is afraid. The text says "David was displeased," which may seem to contradict this, but in the Hebrew context, David&apos;s displeasure is mixed with terror. He has seen God&apos;s holiness in a way that no celebration could prepare him for.',
        },
        {
          kind: 'christ',
          id: 'c13-holiness-connection',
          title: 'Christ Connection — The Holiness That No One Can Violate',
          html:
            'Jesus spoke to a woman at the well: "But the true worshippers will worship the Father in spirit and truth; for the Father is seeking such people to worship him" (John 4:24). The ark was a physical symbol of God&apos;s presence, and it carried the weight of sacred law. Jesus is the true Ark — the presence of God in human form. But His holiness cannot be violated with impunity either. When Ananias and Sapphira lied to the Holy Spirit in Acts 5, they fell dead. When Herod accepted worship as a god in Acts 12, the Lord struck him down. The holiness of God is not negotiable. We cannot approach Him on our own terms, with our own methods, and expect blessing. We approach Him as He commands, or not at all.',
        },
        {
          kind: 'carry',
          html:
            'This is a hard story. A man with the best of intentions dies because the method was wrong. We want to believe that sincerity covers all sins, that good intention is the measure of obedience. But Scripture teaches otherwise. God&apos;s way is God&apos;s way — not because it is arbitrary, but because holiness is real, and approaches to holiness must be according to the pattern He has given. This is not cruelty. It is the boundary that keeps us safe.',
        },
        {
          kind: 'reflection',
          id: 'uzza-died',
          prompt: 'Uzza&apos;s death seems harsh for an act of instinctive protection. What does this story teach about the difference between good intention and obedience to God&apos;s command? Where in your own life do you see these two principles in tension?',
        },
      ],
    },

    /* ─── 1 Chronicles 13:13–14 — The Ark at Obed-edom's House ─────────────── */
    {
      ref: '1 Chronicles 13:13–14',
      title: 'The Ark Rests With Obed-edom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('So David brought not the ark home to himself to the city of David, but carried it aside into the house of Obed-edom the '),
                hy('Gittite', 'c13-gittite'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the ark of God remained with the family of Obed-edom in his house '),
                hg('three months', 'c13-three-months'),
                t('. And the Lord blessed the house of Obed-edom, and all that he had.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c13-gittite',
          html:
            'Obed-edom the Gittite — a man from Gath, a foreigner, a non-Israelite. Yet his house becomes the resting place for the ark. There is a gentleness in this detail. The ark is not hidden away or locked up. It is placed in a home where it remains visible, honored, kept. And Obed-edom, though foreign, becomes the caretaker of Israel&apos;s greatest treasure. [res:israel-museum-ark]',
        },
        {
          kind: 'commentary',
          id: 'c13-three-months',
          html:
            'Three months. The ark remains with Obed-edom for a season. During this time, David has gone back to being afraid. The breach of Uzza has chastened him. He no longer rushes to bring the ark to Jerusalem. He waits. He learns. And in the waiting, something remarkable happens: the Lord blesses the house of Obed-edom. "All that he had" is blessed. His household prospers under the presence of the ark — not in spite of the ark&apos;s holiness, but because of it. For those who approach God&apos;s presence according to His way, the blessing is abundant. [res:israel-museum-ark]',
        },
        {
          kind: 'hebrew',
          id: 'c13-peretz',
          title: 'Peretz — "Breach"',
          script: 'פֶּ֫רֶץ',
          translit: '<strong>Peretz</strong> · breach; gap; breaking forth; rupture',
          description:
            'The name given to the place — Perez-uzza — combines Uzza&apos;s name with "peretz," breach. A breach is a rupture in a wall, a place where the boundary has been violated. The Lord has made a breach in the procession. The assumption that everything will go smoothly, that the new cart will serve, that no consequence will follow the violation — all of this is broken. The breach remains a memorial.',
        },
        {
          kind: 'carry',
          html:
            'Obed-edom becomes the unexpected bearer of blessing. He shelters the ark in his home. He honors it. He does not try to use it or move it or improve upon it — he simply keeps it. And in doing so, his entire household is blessed. Sometimes the deepest blessing comes not from grand action, but from simple faithfulness to what God has entrusted to us. Obed-edom teaches us that being a guardian of something sacred is itself a high calling.',
        },
        {
          kind: 'reflection',
          id: 'obed-edom-blessed',
          prompt: 'Obed-edom, a foreigner, receives blessing by providing a faithful home for the ark. What does this teach about who receives God&apos;s blessing? When have you experienced blessing for honoring something sacred, even if you did not initiate the effort?',
        },
      ],
    },
  ],
};
