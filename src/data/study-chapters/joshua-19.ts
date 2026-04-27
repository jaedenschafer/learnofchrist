import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 19 — The Remaining Tribes and Joshua&apos;s Inheritance
 *
 * Six more tribal allotments complete the land division: Simeon (nested
 * in Judah), Zebulun, Issachar, Asher, Naphtali, and Dan. Finally,
 * Joshua receives his own portion last — a profound image of servant
 * leadership. The chapter closes with all the land divided, the work
 * of parceling out Israel&apos;s inheritance complete in the presence of
 * the Lord at Shiloh.
 */
export const JOSHUA_19: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 19,

  intros: [
    'Joshua 19 records the final phase of land distribution. After nine and a half tribes received their inheritances, six more remain: Simeon, Zebulun, Issachar, Asher, Naphtali, and Dan. Each got a portion cast by lot, before the Lord, at Shiloh. The geographies are specific and sometimes difficult to map — city lists, border descriptions — yet they reveal a profound truth: every tribe received a place of its own. None was overlooked. None was less-than.',
    'Interwoven through these tribal boundaries is the story of where Christ would live and minister. Zebulun and Naphtali together form Galilee, the region of Jesus&apos; earthly ministry — the very territory Isaiah spoke of centuries before: "the people which sat in darkness saw great light" (Matthew 4:13–16). The land itself was already pointing forward. God did not merely carve up geography; He prepared a stage for redemption.',
    'And then Joshua. After everyone else has claimed their inheritance, Joshua receives his portion last. He asks for it, and the Lord grants it — Timnath-serah, a city he builds with his own hands and lives in. A commander who provides for his army before himself. A leader who receives after ensuring everyone else is settled. His example foreshadows the One who would come as a servant, who came not to be served but to serve, and who emptied Himself so that all others could be filled.',
  ],

  bottomShare: {
    label: 'Share Joshua 19',
    quote:
      'Every tribe received its inheritance by lot before the Lord. Joshua, the leader, received his portion last. The land was divided. The work was finished. The people dwelt in their places.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 19 · Study Guide',
  },

  sections: [
    /* ─── Joshua 19:1–9 — Simeon, Scattered in Judah ────────────────────── */
    {
      ref: 'Joshua 19:1–9',
      title: 'Simeon, Scattered in Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('And the second lot came forth to '),
                hy('Simeon', 'hebrew-simeon'),
                t(', even for the children of Simeon according to their families: and their inheritance was within the inheritance of the children of Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-simeon-within',
          html:
            'Simeon gets no contiguous territory. Instead, their cities sit inside Judah&apos;s boundaries — Beersheba, Sheba, Moladah, and a dozen others scattered throughout. This is not a punishment on the page, but it is Jacob&apos;s ancient prophecy working itself out in geography. Centuries earlier, Jacob blessed his sons and said of Simeon: "I will divide them in Jacob, and scatter them in Israel" (Genesis 49:7). Now the blessing unfolds. Simeon is scattered — and absorbed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-simeon',
          title: 'Simeon — "hearing" or "hearkening"',
          script: 'שִׁמְעוֹן',
          translit: '<strong>Simeon</strong> · from the verb <em>shama&apos;</em>, to hear',
          description:
            'Simeon was Levi&apos;s brother in violence (Genesis 34) and remained troubled in Jacob&apos;s eyes. Yet he is not abandoned. He is woven into Judah&apos;s inheritance, his people dwelling among the tribe that would produce the Messiah.',
        },
        {
          kind: 'christ',
          id: 'christ-simeon',
          title: 'Christ Connection — The Scattered Made Family',
          html:
            'Simeon&apos;s scattering into Judah prefigures a deeper truth: in Christ, the scattered and the lost are brought home. Paul wrote that Christ "hath broken down the middle wall of partition between us" (Ephesians 2:14) — breaking the barriers that kept peoples apart. Simeon was scattered as judgment, but received as family. That is the arc of redemption: the outcast is welcomed in.',
        },
        {
          kind: 'carry',
          html:
            'If you are feeling scattered right now — your hopes fragmented, your plans dispersed, your sense of belonging broken — the story of Simeon whispers something: you are not being abandoned into chaos. You are being woven into a larger inheritance. The very circumstances that look like division may be how God incorporates you deeper into His family. Your scattering, like Simeon&apos;s, may be exactly where you come home.',
        },
        {
          kind: 'reflection',
          id: 'simeon',
          prompt:
            'Where have you felt scattered or displaced? What if that very place is where you&apos;re being woven into God&apos;s larger family?',
        },
      ],
    },

    /* ─── Joshua 19:10–16 — Zebulun and the Future Galilee ───────────────── */
    {
      ref: 'Joshua 19:10–16',
      title: '"The Land of Zabulon" — Galilee Promised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 10,
              spans: [
                t('And the third lot came up for the children of '),
                hy('Zebulun', 'hebrew-zebulun'),
                t(' according to their families: and the border of their inheritance was unto Sarid:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And their border went up toward the sea, and Maralah; and reached to Dabbesheth, and reached to the river that is before Jokneam;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And turned from Sarid eastward toward the sunrising unto the border of Chisloth-tabor; and then goeth out to Daberath, and goeth up to Japhia,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And from thence passeth on along on the east to Gittah-hepher, to Ittah-kazin, and goeth out to Remmonah: and the border turneth to Hanathon: and the outgoings thereof are in the valley of Jiphthah-el:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Kattath also, and Nahallal, and Shimron, and Idalah, and Bethlehem: twelve cities with their villages.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('This is the inheritance of the children of Zebulun according to their families, these cities with their villages.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-zebulun-location',
          html:
            'Zebulun&apos;s territory is in the northern interior of Canaan, a productive land between the sea and the hills. Buried in that list of cities is Nazareth — though the text does not yet name it as such. It is simply one settlement among many. Four hundred years later, a boy would grow up there, unknown to the world, until the Spirit descended and His ministry began.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zebulun',
          title: 'Zebulun — "dwelling" or "elevation"',
          script: 'זְבוּלוּן',
          translit: '<strong>Zebulun</strong> · from the root <em>zabal</em>, to dwell',
          description:
            'Zebulun&apos;s territory became the heart of Galilee — the region of Christ&apos;s ministry. Isaiah 9 prophesied centuries before: "The people which sat in darkness have seen a great light." That light would walk these very roads, teach in these hills, break bread with Zebulun&apos;s distant descendants.',
        },
        {
          kind: 'christ',
          id: 'christ-galilee',
          title: 'Christ Connection — Light of the Gentiles',
          html:
            'Matthew quotes Isaiah directly when Jesus begins His ministry in Zebulun: "The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles; The people which sat in darkness saw great light" (Matthew 4:13–16, quoting Isaiah 9:1–2). The land division in Joshua 19 was not random. It was preparation. God gave Zebulun its borders so that centuries later, when the Light of the world arrived, He would have a stage prepared. The land itself was already waiting for its Messiah.',
        },
        {
          kind: 'carry',
          html:
            'Nazareth was a nothing village. Zebulun was a quiet tribe. The people there sat in spiritual darkness for generations — waiting, without knowing what they waited for. And then the Light came. Your small corner, your unseen faithfulness, your quiet neighborhood — it is not too ordinary for God to work in. The greatest turning point in human history arrived not in a capital but in Galilee. In a border village. In the place God gave Zebulun.',
        },
        {
          kind: 'reflection',
          id: 'zebulun',
          prompt:
            'What small, ordinary place have you written off as "too quiet" or "not important enough"? What if that&apos;s exactly where God is preparing something?',
        },
      ],
    },

    /* ─── Joshua 19:17–23 — Issachar, the Cup-Bearer Land ────────────────── */
    {
      ref: 'Joshua 19:17–23',
      title: 'Issachar: Fertile Lowlands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 17,
              spans: [
                t('And the fourth lot came out to Issachar, for the children of Issachar according to their families.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And their border was toward Jezreel, and Chesulloth, and Shunem,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Hapharaim, and Shihon, and Anaharath,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Rabbith, and Kishion, and Abez,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Remeth, and En-gannim, and En-haddah, and Beth-pazzez;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the coast reacheth to Tabor, and Shahazimah, and Beth-shemesh; and the outgoings of their border were at Jordan: '),
                hg('sixteen cities', 'c-issachar-cities'),
                t(' with their villages.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-issachar-cities',
          html:
            'Issachar receives sixteen cities in one of Canaan&apos;s richest valleys. The list is long and specific — not because the reader in Moses&apos; day needed to navigate there, but because God remembered every name. Every city, every boundary, every corner of Issachar&apos;s inheritance mattered. The granular detail of these lists is a form of remembrance: you are seen, your land is known, your portion is not forgotten.',
        },
        {
          kind: 'carry',
          html:
            'The sheer specificity of these boundary lists — Jezreel, Shunem, Beth-pazzez, all their villages — suggests a God who pays attention to small places and small peoples. The teenager in Issachar, the widow in En-gannim, the merchant in Kishion: all lived in lands the Lord knew by name. And that same attention falls on you. Your address. Your neighborhood. Your day. The specific, detailed geography of your life is not too ordinary for God to notice.',
        },
        {
          kind: 'reflection',
          id: 'issachar',
          prompt:
            'God remembered every city in Issachar by name. What specific corner of your life have you assumed is too small or too ordinary for Him to notice?',
        },
      ],
    },

    /* ─── Joshua 19:24–31 — Asher and Naphtali, Northern Power ────────────── */
    {
      ref: 'Joshua 19:24–39',
      title: 'Asher and Naphtali: The Northern Territories',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 24,
              spans: [
                t('And the fifth lot came out for the tribe of the children of '),
                hy('Asher', 'hebrew-asher'),
                t(' according to their families.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And their border was Helkath, and Hali, and Beten, and Achshaph,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Alammelech, and Amad, and Misheal; and reacheth to Carmel westward, and to Shihor-libnath;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And turneth toward the sunrising to Beth-dagon, and reacheth to Zebulun, and to the valley of Jiphthah-el toward the north side of Bethemek, and Neiel, and goeth out to Cabul on the left hand,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Hebron, and Rehob, and Hammon, and Kanah, even unto great Zidon;'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And then the coast turneth to Ramah, and to the fenced city Tyre; and the coast turneth to Hosah; and the outgoings thereof are at the sea from the coast to Achzib:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Ummah also, and Aphek, and Rehob: twenty and two cities with their villages.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('This is the inheritance of the tribe of the children of Asher according to their families, these cities with their villages.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 32,
              spans: [
                t('The sixth lot came out to the children of Naphtali, even for the children of Naphtali according to their families.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And their coast was from Heleph, from Allon to Zaanannim, and Adami, Nekeb, and Jabneel, unto Lakum; and the outgoings thereof were at Jordan:'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And then the coast turneth westward to Aznoth-tabor, and goeth out from thence to Hukkok, and reacheth to Zebulun on the south side, and Asher on the west side, and to Judah upon Jordan toward the sunrising.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the fenced cities are Ziddim, Zer, and Hammath, Rakkath, and '),
                hy('Chinnereth', 'hebrew-galilee'),
                t(','),
              ],
            },
            {
              number: 36,
              spans: [
                t('And Adamah, and Ramah, and Hazor,'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And Kedesh, and Edrei, and En-hazor,'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And Iron, and Migdal-el, Horem, and Beth-anath, and Beth-shemesh; nineteen cities with their villages.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('This is the inheritance of the tribe of the children of Naphtali according to their families, these cities with their villages.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-asher-naphtali',
          html:
            'Asher receives the western coastal region — twenty-two cities including Tyre, a major port. Naphtali receives nineteen cities in the north, including Hazor and Chinnereth, the Hebrew name for the Sea of Galilee. Together, these two tribes hold the northern territories where much of Christ&apos;s ministry would unfold. The sea where He would still the storm. The shores where He would call fishermen. The hills where He would teach. The land was ready.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-galilee',
          title: 'Chinnereth — The Sea of Galilee',
          script: 'כִּנְּרֶת',
          translit: '<strong>Chinnereth</strong> · from <em>kinnor</em>, a harp-shaped body of water',
          description:
            'Naphtali&apos;s territory included the freshwater sea that would become central to Christ&apos;s ministry. Here He called disciples, taught from boats, fed thousands, and walked on water. The land itself was a sign, waiting.',
        },
        {
          kind: 'christ',
          id: 'christ-naphtali',
          title: 'Christ Connection — Ministry to the Gentiles',
          html:
            'Naphtali was called "Galilee of the Gentiles" — a region mixed with non-Israelite populations. Jesus made this His center of operation. Matthew emphasizes it: "He left Nazareth, and came and dwelt in Capernaum... that it might be fulfilled which was spoken by Esaias the prophet" (Matthew 4:13–14). The land given to Naphtali in Joshua 19 became the stage for Christ&apos;s first and greatest public ministry. Every miracle, every parable, every call to discipleship — they happened in the territories that were portioned out here.',
        },
        {
          kind: 'carry',
          html:
            'The regions where you live, work, raise children, serve — they are not separate from God&apos;s purposes. They are the stage. Christ did not perform His ministry in a temple in Jerusalem alone. He walked the shorelines of Naphtali, the fields of Zebulun, the villages Asher touched. Your neighborhood has the same dignity. Your ordinary geography is holy ground.',
        },
        {
          kind: 'reflection',
          id: 'galilee',
          prompt:
            'Christ chose Galilee — a border region, a mixed population, a place the religious elite overlooked. What does it say about Him that He centered His ministry there? Where might He be working now, in the places you overlooked?',
        },
      ],
    },

    /* ─── Joshua 19:40–48 — Dan Struggles, Then Migrates ─────────────────── */
    {
      ref: 'Joshua 19:40–48',
      title: 'Dan: The Tribe That Migrated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 40,
              spans: [
                t('And the seventh lot came out for the tribe of the children of '),
                hy('Dan', 'hebrew-dan'),
                t(' according to their families.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And the coast of their inheritance was Zorah, and Eshtaol, and Ir-shemesh,'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And Shaalabbin, and Ajalon, and Jethlah,'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And Elon, and Thimnathah, and Ekron,'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And Eltekeh, and Gibbethon, and Baalath,'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And Jehud, and Bene-berak, and Gath-rimmon,'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And Me-jarkon, and Rakkon, with the border before Japho.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And the coast of the children of Dan was too little for them: therefore the children of Dan '),
                hg('went up to fight against Leshem', 'c-dan-migration'),
                t(', and took it, and smote it with the edge of the sword, and possessed it, and dwelt therein, and called Leshem, Dan, after the name of Dan their father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dan-migration',
          html:
            'Dan received a territory on the coastal plain — good land, but hemmed in by pressure from the Philistines and limited in size. Rather than accept the constraints, Dan migrated north to Leshem (later called Laish) and conquered it, renaming it Dan. It was enterprising and bold — but also a sign of trouble. Dan would not settle for what God gave them. This restlessness would follow Dan through Israel&apos;s history, eventually leading to idolatry and separation.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dan',
          title: 'Dan — "judge" or "He judges"',
          script: 'דָּן',
          translit: '<strong>Dan</strong> · from <em>din</em>, to judge',
          description:
            'Dan began with a promise: Jacob said, "Dan shall judge his people" (Genesis 49:16). Yet Dan&apos;s history became one of restlessness, idolatry, and ultimately exile. Even names can be prophecy — and Dan would come to embody the tension between divine calling and human resistance.',
        },
        {
          kind: 'christ',
          id: 'christ-dan',
          title: 'Christ Connection — The Tribe Absent from Revelation',
          html:
            'In Revelation 7, when the 144,000 are sealed — twelve thousand from each tribe — Dan is noticeably absent. In Dan&apos;s place appears Manasseh. It is a striking omission that echoes Dan&apos;s own pattern: a tribe given good promises, yet choosing autonomy and idolatry over covenant faithfulness. In contrast, Jesus represents perfect covenant obedience — the One who did not resist God&apos;s will but surrendered to it completely. He is the judge Dan was meant to be, but never fully became.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we find ourselves like Dan: given a good inheritance, but chafing at its boundaries. We look around and think others have bigger things, richer land, more freedom. So we gird ourselves and take what we think we need. But that restlessness rarely leads to blessing. It leads to further separation. The people and places God puts us in are not constraints — they are inheritances. The question is whether we will receive them as gifts, or spend our energy fighting them.',
        },
        {
          kind: 'reflection',
          id: 'dan',
          prompt:
            'Where are you like Dan — looking at someone else&apos;s inheritance and chafing at your own? What would it take to receive what God actually gave you?',
        },
      ],
    },

    /* ─── Joshua 19:49–51 — Joshua's Portion: Servant Leadership ─────────── */
    {
      ref: 'Joshua 19:49–51',
      title: 'Joshua Receives His Inheritance Last',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 49,
              spans: [
                t('When they had made an end of dividing the land for inheritance by their coasts, the children of Israel gave '),
                hp('an inheritance to Joshua', 'christ-joshua-last'),
                t(' the son of Nun among them:'),
              ],
            },
            {
              number: 50,
              spans: [
                t('According to the commandment of the Lord they gave him the city which he asked, even Timnath-serah in the mount of Ephraim: and he built the city, and dwelt therein.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('These are the inheritances, which Eleazar the priest, and Joshua the son of Nun, and the heads of the fathers of the tribes of the children of Israel, divided for an inheritance by lot in Shiloh before the Lord, at the door of the tabernacle of the congregation. So they made an end of dividing the country.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joshua-last',
          html:
            'Joshua does not take his inheritance first. He waits until every tribe — all nine and a half of them — has received their portion. Only then does he ask. "According to the commandment of the Lord they gave him the city which he asked" — a quiet phrase marking his reward. He chose Timnath-serah, a hill-country city, and built it with his own hands. A leader who provides for others before himself. A commander who waited.',
        },
        {
          kind: 'commentary',
          id: 'c-shiloh-worship',
          html:
            'The entire division happened "in Shiloh before the Lord, at the door of the tabernacle of the congregation." This was not a random bureaucratic process. It was an act of worship. Every decision, every boundary, every name was cast before God. The parceling out of an entire land was an act of discernment in the Lord&apos;s presence. Governance done before God is governance done rightly.',
        },
        {
          kind: 'christ',
          id: 'christ-joshua-last',
          title: 'Christ Connection — The Servant Who Comes Last',
          html:
            'Jesus made himself last. "Though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (2 Corinthians 8:9). He washed the disciples&apos; feet. He took the cross. He gave everything and received nothing — except the joy of those He saved. Joshua&apos;s humility in receiving his portion last is a shadow of Christ&apos;s total self-emptying. The greatest among you shall be your servant; the first shall be last. Joshua lived it before Jesus taught it.',
        },
        {
          kind: 'carry',
          html:
            'In a world that teaches you to grab first, secure yours, advance yourself, Joshua offers a counterimage: a leader who ensured everyone else was settled before he settled himself. Not from weakness, but from strength. Not from lack, but from trust that the Lord would provide. That same strength and trust are available to you today. Ask yourself: where are you grabbing before others are secure? Where could you wait?',
        },
        {
          kind: 'reflection',
          id: 'joshua-last',
          prompt:
            'Joshua waited until everyone else had their inheritance. In what area of your life are you being called to wait, to serve, to come last?',
        },
      ],
    },

    /* ─── Closing: The Work Complete at Shiloh ───────────────────────────── */
    {
      ref: 'Joshua 19:51',
      title: 'The Division Complete at Shiloh',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-complete',
          html:
            'They made an end of dividing the country. The work that began in Joshua 13 is finished. From Judah in the south to Dan in the north (before the migration), from the Jordan to the sea, the land has been apportioned. Tribes have received their inheritances. Joshua has received his. And all of it happened before the Lord, in His presence, under His eye. The land God promised to Abraham — "I will give unto thy seed all these lands" (Genesis 12:7) — has been delivered. The conquest is complete. The inheritance is distributed.',
        },
        {
          kind: 'commentary',
          id: 'c-body-many-members',
          html:
            'What emerges from all these tribal lists is a picture Paul would later describe: "For as the body is one, and hath many members... now are they many members, yet but one body" (1 Corinthians 12:12, 20). Each tribe is unique. Each territory is different. Judah, Simeon, Zebulun, Issachar, Asher, Naphtali, Dan — they are not interchangeable. They are one people, one inheritance, but no two portions are the same. The body of Christ works the same way. Not all apostles, not all prophets, not all teachers. But all necessary. All seen. All valued.',
        },
        {
          kind: 'carry',
          html:
            'Your place in God&apos;s plan is not generic. It is particular. The specific geography of your life, the particular people you are called to, the unique gifts you carry — they are as specific as Joshua was about Issachar&apos;s sixteen cities. You are not an interchangeable part. You are a tribe. You have an inheritance. And it matters.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'completion',
          prompt:
            'What inheritance has God given you? And are you at peace with it, or still fighting to claim something else?',
        },
      ],
    },
  ],
};
