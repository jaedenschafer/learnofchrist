import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 5 — Preparations for the Temple
 *
 * Solomon has inherited David's throne and God's promise: a son will build the
 * house of the Lord. In this chapter, Solomon acts. He reaches across borders
 * to Hiram, king of Tyre, the same Hiram who had been David's friend. Together,
 * they forge a partnership that will provide cedar, fir, and labor for the most
 * magnificent structure the ancient world has known. But before the temple rises,
 * we see something deeper: the nations coming together, the work of peace yielding
 * the work of building, and the vast coordinated effort that transforms a vision
 * into stone and timber.
 */
export const KINGS_1_5: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 5,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 12 },
  opener: {
    matchTitle: /Cedars Are Cut Down/i,
    caption: '1 Kings 5',
  },
  intros: [
    'The promise made to David in 2 Samuel 7 is now coming to pass. Solomon has consolidated his throne, and he looks toward the work his father could not finish. "Thou knowest," Solomon reminds Hiram, "that David my father could not build an house unto the name of the Lord his God for the wars which were about him on every side, until the Lord put them under the soles of his feet." But now — now the Lord has given Solomon rest. The wars are over. The sword is sheathed. And in this peace, the true work can begin.',
    'Solomon turns to Hiram of Tyre, the same king who had been his father&apos;s friend. Hiram is renowned for his wisdom, his craftsmen, and the cedar of Lebanon — the finest timber in the ancient world. Together, king and craftsman, Israelite and Tyrian, will gather the resources to build. This chapter shows us the partnership of peace: how the gathering of nations, the coordination of labor, and the provision of gifts forge not merely a building, but a testimony to the power of covenant.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 5',
    quote:
      'In peace, the work of the Lord could begin. Solomon and Hiram, bound by covenant, brought forth cedar and labor. The temple rose not through conquest, but through partnership.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-solomon-reign',
      kind: 'study',
      source: 'Sefaria',
      label: 'Solomon&apos;s Reign and Temple',
      url: 'https://www.sefaria.org/1_Kings.1',
      description: 'Solomon&apos;s ascension to the throne and his building of the first temple.',
    },
    {
      id: 'israel-museum-solomonic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Solomonic Period Artifacts',
      url: 'https://www.imj.org.il/',
      description: 'Museum collection of objects from Solomon&apos;s era revealing 10th-century Iron Age culture.',
    },
    {
      id: 'iaa-solomon-period',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of the Solomonic Period',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for urban centers and building projects attributed to Solomon.',
    },
  ],

  sections: [
    /* ─── 1 Kings 5:1–12 — Hiram's Friendship Passes to Solomon ───────── */
    {
      ref: '1 Kings 5:1–12',
      title: 'The Covenant of Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And Hiram king of Tyre sent his servants unto Solomon; for he had heard that they had anointed him king in the room of his father: for Hiram was ever a '),
                hg('lover of David', 'hiram-david'),
                t('.'),
              ],
            },
            plain(2, 'And Solomon sent to Hiram, saying,'),
            {
              number: 3,
              spans: [
                t('Thou knowest how that David my father could not build an house unto the name of the Lord his God for the '),
                hg('wars which were about him', 's5-wars'),
                t(' on every side, until the Lord put them under the soles of his feet.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But now the Lord my God hath given me '),
                hg('rest', 's5-rest'),
                t(' on every side, so that there is neither adversary nor evil occurrent.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And, behold, I purpose to build an house unto the name of the Lord my God, as the Lord spake unto David my father, saying, Thy son, whom I will set upon thy throne in thy room, he shall '),
                t('build an house unto my name'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hiram-david',
          html:
            'Hiram had been David&apos;s friend — a generational bond. David was a man of war; Hiram was a man of trade and craftsmanship. Yet they saw in each other worth and covenant. When David dies and Solomon inherits the throne, Hiram comes first among the foreign kings to honor him. This is the nature of covenant: it passes down. It survives death. Generational friendship becomes the foundation for the work to come.[res:sefaria-solomon-reign][res:israel-museum-solomonic][res:iaa-solomon-period]',
        },
        {
          kind: 'commentary',
          id: 's5-wars',
          html:
            'David had wanted to build the temple. The text says so explicitly in 2 Samuel 7. But David was a warrior, and the Lord told him he could not. His hands were stained with blood. His wars, though righteous, were necessary — they cleared the way for peace. A generation of battle had to come before a generation of building could begin.',
        },
        {
          kind: 'commentary',
          id: 's5-rest',
          html:
            '"Rest" — the Hebrew word is menuchah, a cessation of struggle, a stillness. The Lord has given Solomon menuchah. There is no adversary (no enemy), no evil occurrence (no misfortune). The nation can finally turn from defending itself to building something beautiful for God.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('Now therefore command thou that they '),
                hy('hew me cedar trees', 's5-cedar'),
                t(' out of Lebanon; my servants shall be with thy servants: and unto thee will I give '),
                hg('hire for thy servants', 's5-hire'),
                t(' according to all that thou shalt appoint: for thou knowest that there is not among us any that can skill to hew timber like unto the Sidonians.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 's5-cedar-word',
          title: 'Erez — "Cedar"',
          script: 'אֶ֫רֶז',
          translit: '<strong>Erez</strong> · cedar tree',
          description:
            'Cedar appears throughout Scripture as the wood of royalty, of holiness, of permanence. The cedars of Lebanon were famous in the ancient world — fragrant, strong, resistant to decay. They symbolized strength and endurance. For the temple, nothing else would suffice.',
        },
        {
          kind: 'commentary',
          id: 's5-cedar',
          html:
            'Solomon does not command — he requests. He acknowledges that Tyrian craftsmen have the skill Israel lacks. This is humility, not weakness. It is the humility of a king who knows that a great work requires alliance, requires the gifts of others. The cedars of Lebanon must come from the land of the Sidonians, and only Hiram can provide them.',
        },
        {
          kind: 'commentary',
          id: 's5-hire',
          html:
            'Solomon promises "hire" — payment for the labor. This is not theft or conquest. It is covenant. The nations meet not as enemies but as partners, exchanging goods and labor, each bringing what they have to the work of the Lord.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('And it came to pass, when Hiram heard the words of Solomon, that he rejoiced greatly, and said, Blessed be the Lord this day, which hath given unto David a '),
                hg('wise son', 's5-wise-son'),
                t(' over this great people.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Hiram sent to Solomon, saying, I have considered the things which thou sentest to me for: and I will do all thy desire concerning timber of cedar, and concerning timber of fir.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('My servants shall bring them down from Lebanon unto the sea: and I will convey them by sea in floats unto the place that thou shalt appoint me, and will cause them to be discharged there, and thou shalt receive them: and thou shalt accomplish my desire, in giving '),
                hg('food for my household', 's5-food-covenant'),
                t('.'),
              ],
            },
            plain(10, 'So Hiram gave Solomon cedar trees and fir trees according to all his desire.'),
            {
              number: 11,
              spans: [
                t('And Solomon gave Hiram twenty thousand measures of wheat for the food of his household, and twenty measures of pure oil: thus gave Solomon to Hiram year by year.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the Lord gave Solomon wisdom, as he promised him: and there was '),
                hp('peace between Hiram and Solomon', 's5-peace-covenant'),
                t('; and they two made a league together.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's5-wise-son',
          html:
            'Hiram blesses Solomon — and in blessing him, blesses David&apos;s memory. "Blessed be the Lord, which hath given unto David a wise son." Solomon has inherited not only the throne but the trust of the nations. David spent his life in war; Solomon inherits the fruit of that labor: the opportunity to build in peace.',
        },
        {
          kind: 'commentary',
          id: 's5-food-covenant',
          html:
            'The exchange is precise and reciprocal. Hiram will provide timber in exchange for food — wheat and oil to feed his household. This is not mere commerce; it is the language of covenant. One king cares for the household of another. It is relationship, not transaction.',
        },
        {
          kind: 'hebrew',
          id: 's5-bayit',
          title: 'Bayit — "House" or "Temple"',
          script: 'בַּ֫יִת',
          translit: '<strong>Bayit</strong> · house; temple; household; dwelling',
          description:
            'The word "bayit" is layered in meaning. It can mean a physical house, a dynasty, a household, a nation. When Solomon says he will build "a house for the name of the Lord," he is building something that encompasses all these meanings — a dwelling for God, a monument to His name, the spiritual center of the nation.',
        },
        {
          kind: 'commentary',
          id: 's5-peace-covenant',
          html:
            'The phrase "peace between Hiram and Solomon" marks a covenant sealed. The Hebrew word is shalom — not merely the absence of war, but completeness, wholeness, harmony. This peace is the condition in which the temple can be built. Peace makes building possible.',
        },
        {
          kind: 'carry',
          html:
            'What partnership or relationship in your life has made something beautiful possible? Solomon did not build the temple alone. He needed Hiram. He needed to humble himself before the craftsmanship of others, to offer payment, to covenant with a foreigner. Sometimes our greatest works come through alliance, through the willingness to be strengthened by what others have to give. Who are the Hirams in your life — those whose gifts have made your work possible?',
        },
        {
          kind: 'reflection',
          id: 'covenant-peace',
          prompt: 'Solomon inherited peace from David&apos;s wars. Are there conflicts or battles in your own life (emotional, relational, spiritual) that have had to come first before you could do the work you truly want to do? How has struggle made building possible?',
        },
      ],
    },

    /* ─── 1 Kings 5:13–18 — The Labor Force ──────────────────────────── */
    {
      ref: '1 Kings 5:13–18',
      title: 'A Nation Gathered to Build',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('And king Solomon '),
                hg('raised a levy', 's5-levy'),
                t(' out of all Israel; and the levy was thirty thousand men.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he sent them to Lebanon, ten thousand a month by courses: a month they were in Lebanon, and two months at home: and Adoniram was over the levy.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Solomon had seventy thousand that bare burdens, and eighty thousand hewers in the mountains;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Beside the chief of Solomon&apos;s officers which were over the work, three thousand and three hundred, which ruled over the people that wrought in the work.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the king commanded, and they brought '),
                hg('great stones, costly stones', 's5-stones'),
                t(', hewed stones, to lay the foundation of the house.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Solomon&apos;s builders and Hiram&apos;s builders and the stonesquarers did hew them: they prepared timber and stones to '),
                hp('build the house', 's5-build-house'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's5-levy',
          html:
            'A levy is a gathering of the nation&apos;s people for a shared work. Solomon raises thirty thousand men, rotating them in shifts: a month in Lebanon cutting cedars, two months at home. This is not slavery — it is corvée labor, a form of national service. Every able-bodied man of Israel contributes to the work of the house of the Lord. The entire nation is mobilized for the building.',
        },
        {
          kind: 'commentary',
          id: 's5-stones',
          html:
            'The text emphasizes the "great stones, costly stones, hewed stones." These are not rough boulders. They are precisely hewn, shaped, fitted. The foundation is laid with care. The temple will stand on the work of countless hands, each stone in its place, supporting the weight of the whole.',
        },
        {
          kind: 'hebrew',
          id: 's5-chatsav',
          title: 'Chatsav — "To Hew" or "To Cut"',
          script: 'חָצַב',
          translit: '<strong>Chatsav</strong> · to hew; to cut stone',
          description:
            'The verb chatsav speaks of deliberate, skillful action — cutting stone from the earth, shaping it for a purpose. It is the work of the stonecutter, the artisan. The Hebrew word suggests precision and craft, not rough labor.',
        },
        {
          kind: 'commentary',
          id: 's5-build-house',
          html:
            'Notice how the verse ends: "they prepared timber and stones to build the house." Solomon&apos;s builders and Hiram&apos;s builders work side by side. Israelites and Tyrians, cutting and fitting. The work transcends nationality. It is a human work, a gathering of all peoples to build for the Lord.',
        },
        {
          kind: 'carry',
          html:
            'The temple was not built by one person. It took thirty thousand men rotating through Lebanon, seventy thousand burden-bearers, eighty thousand hewers in the mountains, and thirty-three hundred officers overseeing the work. That is over a hundred thousand people, all coordinated toward a single vision. What great work in your own life or community requires this kind of sustained, coordinated effort? How can you invite others into the building?',
        },
        {
          kind: 'reflection',
          id: 'labor-gathered',
          prompt: 'Solomon mobilized an entire nation for the building. In what area of your life do you need to ask others to help? What prevents you from gathering people around your vision?',
        },
      ],
    },

    /* ─── Christ Connection ──────────────────────────────────────────── */
    {
      ref: 'John 2:19 · 1 Peter 2:5 · Isaiah 60',
      blocks: [
        {
          kind: 'christ',
          id: 's5-temple-christ',
          title: 'Christ Connection — The Temple He Builds',
          html:
            'Jesus said to the merchants in the temple, "Destroy this temple, and in three days I will raise it up" (John 2:19). The disciples were confused — the building of Solomon&apos;s temple had taken years. But Jesus was speaking of His own body as the temple, the dwelling place of God. He is the Temple that cannot be destroyed, the place where heaven and earth meet. And in His resurrection, He raises up a new temple, not made of stone and cedar, but of flesh and spirit. Peter picks up this thread: "Ye also, as lively stones, are built up a spiritual house" (1 Peter 2:5). We, the redeemed, are the living stones of Christ&apos;s temple. Just as Solomon gathered the nations to build one house for the Lord, so Christ gathers people from every nation, every tongue, every background, to build a house not made with hands — the church, the body of Christ. And when Isaiah speaks of the gathering of nations to the house of God — "The Gentiles shall come to thy light, and kings to the brightness of thy rising" (Isaiah 60:3) — he is prophesying the day when all peoples, like Hiram bringing his cedars, will bring their gifts to the Lord.',
        },
      ],
    },

    /* ─── Closing Reflection ─────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'reflection',
          id: 's5-closing',
          prompt: 'In this chapter, David&apos;s wars made way for Solomon&apos;s building. Peace made the work possible. What conflict in your own life has had to be resolved before you could create, build, or serve? And what work waits for the peace that is coming?',
        },
      ],
    },
  ],
};
