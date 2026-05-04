import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 13 — The Land That Remains; Eastern Inheritance
 *
 * Joshua is old and stricken in years. The Lord reminds him: "Thou art old and
 * stricken in years, and there remaineth yet very much land to be possessed."
 * Even after great victories, there is always more to possess. The chapter
 * then recaps the eastern inheritance of Reuben, Gad, and half-Manasseh under
 * Moses, with detailed borders and cities. Levi&apos;s inheritance is the Lord.
 *
 * Central themes: the incompleteness of conquest; God&apos;s promise to complete
 * what humans pause; the covenant honored across leaders; the most blessed
 * inheritance is God Himself, not land.
 */
export const JOSHUA_13: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 13,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 12 },
  intros: [
    'Joshua is old. The great conquests are behind him — Jericho, Ai, the southern and northern campaigns. Israel has taken much of Canaan. But there is more. The Lord says to Joshua: "Thou art old and stricken in years, and there remaineth yet very much land to be possessed." Even after miracles, after victories that seemed impossible, the promise is not yet fully realized. There is always more to possess.',
    'Joshua 13 pauses the narrative to look back — recalling the inheritance Moses gave the tribes east of Jordan (Reuben, Gad, and half-Manasseh) and their precise borders. It is a moment of quiet accounting, of names and cities, of God&apos;s faithfulness to an ancient promise. The detailed geography may seem dry, but it is actually a profound affirmation: God remembers. God honors what He has said, even when generations have changed and leaders have passed.',
  ],

  bottomShare: {
    label: 'Share Joshua 13',
    quote:
      'Even in victory, much land remains to be possessed. God&apos;s promise continues; His inheritance — the Lord Himself — is the most blessed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 13 · Study Guide',
  },

  sections: [
    /* ─── Joshua Old; The Charge to Divide ─────────────────────────────────── */
    {
      ref: 'Joshua 13:1–7',
      title: 'Joshua&apos;s Age and the Charge to Divide',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Joshua was '),
                hg('old and stricken in years', 'c-old-age'),
                t('; and the Lord said unto him, Thou art old and stricken in years, and '),
                hp('there remaineth yet very much land to be possessed', 'christ-inherit'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-old-age',
          html:
            'Joshua has lived long enough to see the major battles won. He has done what no other human general could do alone — he has brought Israel into their promised land. Yet at the height of his success, the text names his age and weakness. This is not shame. It is realism. No human leader, no matter how mighty, completes the full work of God[res:intertextual-better[res:intertextual-better-inheritance]-inheritance].',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 2,
              spans: [
                t('This is the land that yet remaineth: all the borders of the Philistines, and all Geshuri,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('From the south, all the land of the Canaanites, and Mearah that is beside the Sidonians, unto Aphek, to the borders of the Amorites:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the land of the Giblites, and all Lebanon toward the sunrising,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('From Baalgad under mount Hermon unto the entering into Hamath.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('All the inhabitants of the hill country from Lebanon unto Misrephothmaim, and all the Sidonians, '),
                hp('them will I drive out from before the children of Israel', 'christ-promise'),
                t(': only divide thou it by lot unto the Israelites for an inheritance, as I have commanded thee.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Now therefore divide this land for an inheritance unto the nine tribes, and the half tribe of Manasseh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-promise',
          html:
            '&ldquo;Them will <em>I</em> drive out,&rdquo; the Lord says. Joshua may be old, the human armies may rest, but God&apos;s promise does not depend on Joshua&apos;s strength. This is the pattern throughout Scripture: human effort paired with divine completion. Joshua&apos;s job is not to finish — it is to divide what God will finish, to live by faith in what God will do after him.',
        },
        {
          kind: 'christ',
          id: 'christ-inherit',
          title: 'Christ Connection — The Land That Remains',
          html:
            'In Joshua&apos;s day, the conquest was incomplete. In the New Testament, Paul writes of believers being &ldquo;raised up together&rdquo; with Christ and seated in heavenly places (Eph. 2:6), yet also &ldquo;continuing&rdquo; toward the goal (Phil. 3:12–14). Just as Joshua entered the land yet did not possess all of it, so the Christian life is one of entering Christ&apos;s rest (Heb. 4:9) while still pressing toward fullness. The land that remains is not a failure — it is an invitation to continued growth, to sanctification that continues until glory.',
        },
        {
          kind: 'carry',
          html:
            'You have known Jesus for a time now, and you have tasted His grace. But there remaineth yet very much land to be possessed. A depth in Scripture you have not yet found. A sin you thought you had put away, returning as invitation to deeper repentance. A relationship, a calling, a corner of your own heart not yet yielded to His rule. The incompleteness is not shame — it is the promise of more. God will continue what He has begun in you, if you let Him.',
        },
        {
          kind: 'reflection',
          id: 'much-land',
          prompt:
            'Where in your walk with God do you sense there is yet &ldquo;much land to be possessed&rdquo; — growth you haven&apos;t attempted, a truth you haven&apos;t applied, a surrender you haven&apos;t made?',
        },
      ],
    },

    /* ─── Reuben&apos;s Eastern Inheritance ─────────────────────────────────────── */
    {
      ref: 'Joshua 13:15–23',
      title: 'Reuben&apos;s Territory: From Aroer to Heshbon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('And Moses gave unto the tribe of the children of Reuben inheritance according to their families. And their coast was from Aroer, that is on the bank of the river Arnon, and the city that is in the midst of the river, and all the plain by Medeba;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Heshbon, and all his cities that are in the plain; Dibon, and Bamothbaal, and Bethbaalmeon,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Jahazah, and Kedemoth, and Mephaath, Kirjathaim, and Sibmah, and Zarethshahar in the mount of the valley,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Bethpeor, and Ashdothpisgah, and Bethjeshimoth,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And all the cities of the plain, and all the kingdom of Sihon king of the Amorites, which reigned in Heshbon, whom Moses smote with the princes of Midian, Evi, and Rekem, and Zur, and Hur, and Reba, which were dukes of Sihon, dwelling in the country.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Balaam also the son of Beor, the soothsayer, did the children of Israel slay with the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'reuben-inherit',
          html:
            'The inheritance of Reuben is detailed with precision — every city, every border, every landmark named. Moses promised it; Joshua&apos;s record affirms it. The covenant made under one leader holds under the next. What is remarkable is not just the size of the land but the specificity: God cares about names, boundaries, and the particular places where His people will live. Faith is not vague. It lives in the details.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nachalah',
          title: 'Nachalah — &ldquo;inheritance&rdquo;',
          script: 'נַחֲלָה',
          translit: '<strong>nachalah</strong> · what is handed down; a possession inherited',
          description:
            'The word carries the sense of something that comes to you not by your earning, but by your belonging to a family, a covenant, a lineage. Every mention of inheritance in Joshua echoes this: you have it because God said so, not because you conquered it alone.',
        },
        {
          kind: 'carry',
          html:
            'Your inheritance is not uncertain. God has named it. He will uphold it. The cities, the borders, the place you will stand — they are real, particular, and held in His hands. In the meantime, when you do not yet see the fullness of what He promised, remember Reuben: Moses spoke it, Joshua affirmed it, and the generations after entered it. Your own promised land may not look like you expected, but it is no less real for being delayed.',
        },
        {
          kind: 'reflection',
          id: 'reuben-inherit-ref',
          prompt: 'What has God named or promised for your life that you are still waiting to fully possess?',
        },
      ],
    },

    /* ─── Gad and Half-Manasseh ──────────────────────────────────────────────── */
    {
      ref: 'Joshua 13:24–32',
      title: 'Gad and Half-Manasseh: Inheritance East of the Jordan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 24,
              spans: [
                t('And Moses gave unto the tribe of Gad, even unto the children of Gad according to their families, their coast was Jazer, and all the cities of Gilead, and half the land of the children of Ammon, unto Aroer that is before Rabbah;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And from Heshbon unto Ramathmizpeh, and Betonim; and from Mahanaim unto the border of Debir;'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And in the valley, Betharam, and Bethnimrah, and Succoth, and Zaphon, the rest of the kingdom of Sihon king of the Amorites, with Jordan and his border, even unto the edge of the sea of Chinneroth on the other side Jordan eastward.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And unto the half tribe of Manasseh: even to the children of Manasseh by their families had Moses given possession from Mahanaim, all Bashan, all the kingdom of Og king of Bashan, and all the towns of Jair, which are in Bashan, threescore cities:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And half Gilead, and Ashtaroth, and Edrei, cities of the kingdom of Og in Bashan, were pertaining unto the children of Machir the son of Manasseh, even to the one half of the children of Machir by their families.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gad-manasseh',
          html:
            'Gad and half-Manasseh received their land east of the Jordan — not the land of Canaan proper, but the land promised under Moses. The writer takes care to record this, to affirm that they are fully part of Israel&apos;s inheritance even though they live on the far side of the river. Belonging to God&apos;s people is not determined by geography. It is determined by covenant.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 29,
              spans: [
                t('These are the inheritances which Moses distributed in the plains of Moab, on the other side Jordan, by Jericho, eastward.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'plains-moab',
          html:
            'The plains of Moab is where Israel camped after wandering forty years, where the old generation died and the new generation was born. It is where Moses gave his final words. And it is where the eastern tribes received their inheritance. The inheritance was not only for those who crossed into Canaan — it was also for those who stayed east of Jordan. God&apos;s promise is not narrower than His word.',
        },
        {
          kind: 'carry',
          html:
            'You may feel as if you are on the far side of the river from where God&apos;s promise seems to be. You are in a job that looks nothing like your calling. You are single while you long to be married. You are in a season that looks like exile, not home. Yet if you are in covenant with God, you are not less than those you see crossing the Jordan. Your inheritance is real. Your place in His people is not contingent on your geography or your circumstances. You belong.',
        },
      ],
    },

    /* ─── Levi&apos;s Inheritance Is the Lord ────────────────────────────────────── */
    {
      ref: 'Joshua 13:33',
      title: 'The Tribe of Levi: The Lord Is Their Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 33,
              spans: [
                t('But unto the tribe of Levi Moses gave '),
                hy('not any inheritance', 'hebrew-goral'),
                t(': '),
                hp('the Lord God of Israel is their inheritance', 'christ-inheritance'),
                t(' made by fire are their inheritance, as he said unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'levi-no-land',
          html:
            'Levi does not get cities or borders. Levi gets no parcel of land in Canaan. Instead, they are given the priesthood, the tabernacle, the direct work of serving God and the people. Their sustenance comes from the sacrifices and tithes. It is a dangerous choice, a dependent choice — they cannot own, they can only trust. Yet the text says this is not a loss. It is the most blessed inheritance of all. The Lord Himself is their inheritance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goral',
          title: 'Goral — &ldquo;lot&rdquo;; Chelek — &ldquo;portion&rdquo;',
          script: 'גּוֹרָל / חֵלֶק',
          translit: '<strong>goral</strong> · a lot cast to divide property / <strong>chelek</strong> · a portion, share',
          description:
            'The lots were cast (goral) to divide the land among the tribes. But Levi receives no goral, no lot in that casting. Instead, God becomes their chelek — their portion. The inheritance of Levi is not measured in acres but in intimacy with God.',
        },
        {
          kind: 'christ',
          id: 'christ-inheritance',
          title: 'Christ Connection — Our Inheritance Incorruptible',
          html:
            'Peter writes: &ldquo;To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you&rdquo; (1 Pet. 1:4). The inheritance Levi gave up — land, security, visible possession — pointed toward what the New Testament reveals: our true inheritance is not real estate, not wealth, not power. It is Christ Himself. &ldquo;Whom have I in heaven but thee? and there is none upon earth that I desire beside thee&rdquo; (Psalm 73:25). The Lord Himself is our inheritance.',
        },
        {
          kind: 'carry',
          html:
            'You came into the world with nothing and you will leave with nothing. Everything you own — your house, your job, your reputation, even your body — is temporary. But there is one inheritance that neither thief nor rust nor decay can touch: the Lord Himself. If you are His, you are rich beyond all measure, even if every earthly thing falls away. The Levites[res:sefaria-levites-inheritance-lord] lived by this. They chose intimacy with God over security in land, and they were blessed.',
        },
        {
          kind: 'reflection',
          id: 'levi-inherit',
          prompt:
            'What would it mean for you to live as if God Himself — not your circumstances, your possessions, or your success — is truly your greatest inheritance?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── The Promise Continues ────────────────────────────────────────────────── */
    {
      ref: 'Joshua 13:1, 33',
      title: 'The Promise That Does Not End',
      blocks: [
        {
          kind: 'commentary',
          id: 'promise-frame',
          html:
            'Joshua 13 opens with age and incompleteness: &ldquo;Thou art old and stricken in years, and there remaineth yet very much land to be possessed.&rdquo; It closes with the one tribe that owns no land: &ldquo;The Lord God of Israel is their inheritance.&rdquo; The chapter holds both truths at once. There is always more to possess. And the greatest possession is God Himself. The promise begins with land, but it is fulfilled in intimacy. Conquest, in the Bible, always points to something deeper: the human heart surrendered to God, the will aligned with His will, the self given up to find itself in Him.',
        },
        {
          kind: 'artwork',
          matchTitle: /joshua|inheritance|jordan/i,
          caption: 'Joshua 13 · The Promise That Continues',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-levites-inheritance-lord',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Levites: God as Their Inheritance',
      url: 'https://www.sefaria.org/Numbers.18?lang=bi',
      description: 'The unique status of the tribe of Levi, who receive God Himself as their inheritance rather than territorial possession.',
    },
    {
      id: 'intertextual-better-inheritance',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'From Land to Inheritance in Christ',
      url: 'https://intertextual.bible/search?q=inheritance+levites+lord+god+hebrews+better+country',
      description: 'The progression from earthly territorial inheritance to the spiritual inheritance offered by Christ in Hebrews and 1 Peter.',
    },
  ],
};
