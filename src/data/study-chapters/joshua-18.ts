import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 18 — Shiloh, the Land Surveyed, Casting Lots, Benjamin's Territory
 *
 * Seven tribes remain uninherited after years of conquest. Joshua challenges
 * them: "How long are ye slack?" The men survey and describe the land in seven
 * parts. Joshua casts lots before the Lord. Benjamin draws first — a small,
 * strategic territory between Judah and Joseph, including Jerusalem barely at
 * its border. Doctrinal anchors: Shiloh as tabernacle-home for 400 years and
 * messianic place; Benjamin the tribe of Saul and Paul; casting lots as God's
 * fair distribution; the call to possess what is already given.
 */

export const JOSHUA_18: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 18,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 15 },
  intros: [
    'Joshua 18 marks a turning point. The land has been militarily subdued; the congregation has gathered at Shiloh to set up the tabernacle. Yet seven of the twelve tribes still have no inheritance. Joshua confronts them directly: "How long are ye slack to go to possess the land, which the Lord God of your fathers hath given you?" They are not entitled to hesitate. The victory is already won.',
    'What follows is orderly and practical — surveyors are commissioned to map the land, they report back, and Joshua casts lots before the Lord. Benjamin draws first. His territory is small but strategic: squeezed between the powerhouses of Judah and Joseph, it includes Jericho to the east and, barely on its southern border, Jerusalem itself. That small tribe will later give Israel its first king (Saul) and, centuries on, produce the apostle Paul. The chapter teaches that God honors both the timid and the bold, and that strategic smallness can carry enormous weight.',
  ],

  bottomShare: {
    label: 'Share Joshua 18',
    quote:
      'Joshua cast lots for the seven remaining tribes before the Lord in Shiloh. Benjamin&apos;s lot came up first. Their territory lay between Judah and Joseph, and included the city of Jerusalem.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 18 · Study Guide',
  },

  sections: [
    /* ─── Joshua 18:1 — Shiloh and the Tabernacle ──────────────────────────── */
    {
      ref: 'Joshua 18:1',
      title: 'Shiloh and the Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('And the whole congregation of the children of Israel assembled together at '),
                t('Shiloh'),
                t(', and '),
                hg('set up the tabernacle of the congregation there', 'c-tabernacle'),
                t('. And '),
                hg('the land was subdued', 'c-subdued'),
                t(' before them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tabernacle',
          html:
            'For nearly four hundred years, Shiloh will be the home of the Levitical priesthood, the ark, and the whole apparatus of Israel&apos;s worship. First and Second Samuel open with Hannah coming to Shiloh to pray. By 1 Samuel 4, the ark is captured and the tabernacle falls silent. But in this moment, the tabernacle is settled, the congregation is gathered, and the nation has a center.',
        },
        {
          kind: 'commentary',
          id: 'c-subdued',
          html:
            'The military conquest is complete. The text does not say the land is completely occupied — only that it is militarily subdued. What comes next is not more warfare, but the harder, slower work of claiming what has been won. Many of the victories of faith in Scripture are followed by a long season of quiet possession.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shiloh',
          title: 'Shiloh — &ldquo;place of rest&rdquo;',
          script: 'שִׁילֹה',
          translit: '<strong>Shiloh</strong> · likely connected to &ldquo;quietness&rdquo; or &ldquo;rest&rdquo;',
          description:
            'Genesis 49:10 associates Shiloh with the coming Messiah: "the sceptre shall not depart from Judah… until Shiloh come." Shiloh becomes the place where Israel gathers to wait for Him — a foreshadowing of the rest Christ brings. The tabernacle itself points toward the Messiah who will eventually gather all tribes around Himself.',
        },
        {
          kind: 'carry',
          html:
            'You have fought battles, claimed victories, seen God move — and yet there may be places in your inheritance that still feel unclaimed, unoccupied, left unfinished. The land was militarily subdued; the people still had to enter it. What part of what God has given you are you still hesitating to possess? A calling you have not stepped into. A freedom you haven&apos;t fully believed is yours. A healing you know He has given but you haven&apos;t yet lived inside.',
        },
        {
          kind: 'reflection',
          id: 'shiloh-gathering',
          prompt:
            'Where is God calling you to gather your whole self — your focus, your will, your faith — around what He has already given you?',
        },
      ],
    },

    /* ─── Joshua 18:2–7 — "How Long Are Ye Slack?" ──────────────────────────── */
    {
      ref: 'Joshua 18:2–7',
      title: '"How Long Are Ye Slack?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 2,
              spans: [
                t('And there remained among the children of Israel '),
                hg('seven tribes', 'c-seven'),
                t(', which had not yet received their inheritance.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Joshua said unto the children of Israel, '),
                t('How long are ye slack'),
                t(' to go to possess the land, which the Lord God of your fathers hath given you?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven',
          html:
            'Of the twelve tribes, only Judah, Benjamin, and the half-tribes of Manasseh and Joseph have fully received their lots. Seven have lingered at Shiloh. Joshua &apos;s question is pointed: Why are you waiting? The land is already yours. You are not asking permission; you are hesitating to claim what has been promised.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 4,
              spans: [
                t('Give out from among you three men for each tribe: and '),
                hg('I will send them, and they shall rise, and go through the land', 'survey-mandate'),
                t(', and describe it according to the inheritance of them; and they shall come again to me.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they shall divide it into seven parts: Judah shall abide in their coast on the south, and the house of Joseph shall abide in their coasts on the north.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Ye shall therefore describe the land into seven parts, and bring the description hither to me, that I may cast lots for you here before the Lord our God.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But the Levites have no part among you; for the priesthood of the Lord is their inheritance: and Gad, and Reuben, and half the tribe of Manasseh, have received their inheritances on the east side of Jordan, which Moses the servant of the Lord gave them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'survey-mandate',
          html:
            'Joshua&apos;s solution is not to divide the land himself, but to commission the tribes to survey it first. Reconnaissance and faith work together. The surveyors must go, describe, and return with knowledge. Then Joshua will cast lots. The delay is not laziness on Joshua&apos;s part; he is teaching them to do the work of possession themselves.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-raphah',
          title: 'Raphah — &ldquo;slack&rdquo;',
          script: 'רָפַה',
          translit: '<strong>raphah</strong> · to become weak, slack, or lazy',
          description:
            'Joshua does not shame them in anger — his challenge is rhetorical and pastoral. He is saying, in effect: You have proved yourselves in war. You know God&apos;s faithfulness. Why weaken now? The same word used of the weakening resolve of the fearful.',
        },
        {
          kind: 'carry',
          html:
            'Many believers live below their inheritance simply because they do not take possession. The land was given; the tribes were entitled; yet they hesitated. What part of your salvation, your calling, your freedom in Christ have you received intellectually but not claimed practically? What does it look like to stop being slack and to actually survey the territory — to begin to inhabit what God has already given you?',
        },
        {
          kind: 'reflection',
          id: 'slack-challenge',
          prompt:
            'Where have you known God&apos;s promise intellectually but hesitated to actually live it? What one step could you take this week to move from slack to possession?',
        },
      ],
    },

    /* ─── Joshua 18:8–10 — The Survey and the Casting of Lots ─────────────── */
    {
      ref: 'Joshua 18:8–10',
      title: 'The Survey and the Casting of Lots',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 8,
              spans: [
                t('And '),
                hg('the men arose', 'c-obedience'),
                t(', and went; and Joshua charged them that went to describe the land, saying, Go and walk through the land, and describe it, and come again to me, that I may here cast lots for you before the Lord in Shiloh.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And '),
                hg('the men went and passed through the land', 'c-survey-work'),
                t(', and described it by cities into seven parts in a book, and came again to Joshua to the host at Shiloh.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And '),
                hp('Joshua cast lots for them in Shiloh', 'casting-lots-theme'),
                t(' before the Lord: and there '),
                t('Joshua divided the land'),
                t(' unto the children of Israel according to their divisions.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-obedience',
          html:
            'The tribes obey immediately. What begins with hesitation ends with action. Joshua charges them to walk the land and describe it — not to conquer it again, but to know it. Understanding precedes possession.',
        },
        {
          kind: 'commentary',
          id: 'c-survey-work',
          html:
            'The surveyors did their work thoroughly and systematically. They walked through the territory, noted the cities, and brought back a written record divided into seven parts — one for each remaining tribe. This is the grunt work of inheritance: not mystical, but practical and orderly.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goral',
          title: 'Goral — &ldquo;lot&rdquo;',
          script: 'גּוֹרָל',
          translit: '<strong>goral</strong> · a small stone or object cast to determine God&apos;s will',
          description:
            'The Bible treats casting lots as a way of discovering God&apos;s will. Proverbs 16:33 says: "The lot is cast into the lap; but the whole disposing thereof is of the Lord." It is not chance; it is mystery and sovereignty working together.',
        },
        {
          kind: 'christ',
          id: 'casting-lots-theme',
          title: 'Christ Connection — Fair Distribution and Divine Will',
          html:
            'Joshua casts lots before the Lord to ensure that each tribe receives according to what God has chosen, not what the powerful demand. This preshadows the Apostolic Church in Acts 1:26, where disciples cast lots to choose Matthias to replace Judas. But the deepest connection: Christ Himself is the One who unites all the tribes. In Matthew 24:31, Christ gathers His elect "from the four winds, from one end of heaven to the other." The division of the land foreshadows the redemption in which Christ gathers all believers — from every nation, tribe, and tongue — into one family. Where Joshua divided by lot, Christ will gather by love.',
        },
        {
          kind: 'carry',
          html:
            'The lots were cast before the Lord — not in secret, not for personal gain. When you make decisions or take steps toward your own inheritance, are you inviting God to cast the lot? Are you seeking His will openly, before others, not in hidden corners? The tribes received what God determined, not what they schemed to get. There is a freedom in accepting what comes when you have truly given the choice to God.',
        },
        {
          kind: 'reflection',
          id: 'casting-lots',
          prompt:
            'What decision or choice are you facing right now where you are trying to engineer the outcome instead of casting the lot before the Lord?',
        },
      ],
    },

    /* ─── Joshua 18:11–14 — Benjamin&apos;s Borders ──────────────────────────── */
    {
      ref: 'Joshua 18:11–14',
      title: 'Benjamin&apos;s Borders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hp('the lot of the tribe of Benjamin', 'benjamin-strategic'),
                t(' came up first. And the coast of their lot was between the children of Judah and the children of Joseph.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And their north border was from Jordan; and the border went up to the side of Jericho on the north, and went up through the mountains westward; and the goings out thereof were at the wilderness of Beth-aven;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the border went over from thence toward Luz, to the side of Luz, which is Bethel, southward; and the border descended to Ataroth-adar, near the hill that lieth on the south side of the nether Beth-horon.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the border was drawn thence, and compassed the corner of the sea southward, from the hill that lieth before Beth-horon southward; and the goings out thereof were at Kirjath-jearim, a city of the children of Judah: this was the west quarter.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'benjamin-strategic',
          html:
            'Benjamin draws first — a significant honor in the casting of lots. His territory is small but sits in a crucial geopolitical position: between the enormous tribes of Judah to the south and Joseph to the north. It includes Jericho, the gateway city, and reaches westward to include the hill country around Jerusalem. Benjamin is not the largest tribe, but he is sandwiched between two titans, and his border touches the place that will become the capital of Israel.',
        },
        {
          kind: 'carry',
          html:
            'Benjamin received a small but strategic territory — not commanding the extremes, but standing at the hinge point between two great powers. There is no shame in a small inheritance if it holds a strategic weight. Sometimes God places you not at the center of the stage but at the intersection where your influence outweighs your size. Benjamin&apos;s terrain was small; Benjamin&apos;s impact on Israel&apos;s history was enormous. Do not measure the worth of your assignment by its square footage.',
        },
        {
          kind: 'reflection',
          id: 'benjamin-territory',
          prompt:
            'Are you measuring your calling by size, or by significance? What intersection or hinge point has God placed you at, even if it feels small?',
        },
      ],
    },

    /* ─── Joshua 18:15–20 — The Borders Completed ──────────────────────────── */
    {
      ref: 'Joshua 18:15–20',
      title: 'Benjamin&apos;s Full Territory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 15,
              spans: [
                t('And the south quarter was from the end of Kirjath-jearim, and the border went out on the west, and went out to the well of waters of Nephtoah:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the border came down to the end of the mountain that lieth before the valley of the son of Hinnom, and which is in the valley of the giants on the north, and descended to the valley of Hinnom, to the side of Jebusi on the south, and descended to En-rogel;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And was drawn from the north, and went forth to En-shemesh, and went forth toward Geliloth, which is over against the going up of Adummim, and descended to the stone of Bohan the son of Reuben,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And passed along toward the side over against Arabah northward, and went down unto Arabah:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the border passed along to the side of Beth-hoglah northward: and the outgoings of the border were at the north bay of the salt sea at the east end of Jordan: this was the '),
                hg('east coast', 'c-complete-border'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Jordan was the border of it on the east side. This was the inheritance of the children of Benjamin, by the coasts thereof round about.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-complete-border',
          html:
            'The description is exhaustive and precise. Benjamin&apos;s territory is bounded on the east by the Jordan, on the south by the valley of Hinnom (the traditional southern border of Jerusalem), on the north by the lands of Joseph. The text mentions Jebusi — the Jebusite settlement that will become Jerusalem. For generations, Jerusalem will sit on Benjamin&apos;s southern edge, only barely within his border. When King David later captures it and makes it his capital, he will be claiming a city that technically belonged to Benjamin, though the Jebusites held it. That small, strategic territory holds the future.',
        },
        {
          kind: 'carry',
          html:
            'The borders are drawn carefully, surveyed thoroughly, recorded in detail. No corner is left ambiguous. Whatever inheritance you have been given, God knows its bounds. He knows what is yours to steward and what is not. The temptation is always to claim more than you have been given, or to shrink from what you have. Draw the line. Know your boundary. Tend it faithfully.',
        },
      ],
    },

    /* ─── Joshua 18:21–28 — Benjamin&apos;s Cities and Legacy ──────────────────── */
    {
      ref: 'Joshua 18:21–28',
      title: 'Benjamin&apos;s Cities and Legacy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('Now the cities of the tribe of Benjamin according to their families were, Jericho, and '),
                hg('Beth-hoglah', 'c-cities'),
                t(', and the valley of Keziz,'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Beth-arabah, and Zemaraim, and Bethel,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Avim, and Parah, and Ophrah,'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Chephar-haammonai, and Ophni, and Gaba; twelve cities with their villages:'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Gibeon, and Ramah, and Beeroth,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Mizpeh, and Chephirah, and Mozah,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Rekem, and Irpeel, and Taralah,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Zelah, Eleph, and Jebusi, which is Jerusalem, Gibeath, and Kirjath; fourteen cities with their villages. This was the inheritance of the children of Benjamin according to their families.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cities',
          html:
            'Benjamin received 26 cities in all. Among them: Jericho, the first city conquered; Bethel, where Abraham once built an altar; Gibeon, site of a crucial peace treaty; and Jerusalem, barely mentioned here at the very end, as a city the Jebusites still held. Yet from Benjamin came Saul, Israel&apos;s first king (1 Samuel 9:1–2), and centuries later, Saul of Tarsus, who became the Apostle Paul. Benjamin seemed small; Benjamin&apos;s offspring changed history. "Of the tribe of Benjamin," Paul wrote, "an Hebrew of the Hebrews" (Philippians 3:5).',
        },
        {
          kind: 'christ',
          id: 'benjamin-legacy',
          title: 'Christ Connection — From Small Territory to Eternal Significance',
          html:
            'Genesis 49:27 describes Benjamin as a fierce warrior: "Benjamin shall ravin as a wolf… he shall divide the spoil." Benjamin was "the wolf" — small but fierce. Yet the two most pivotal figures in Israel&apos;s history came from Benjamin: Saul, who united the kingdom, and Paul, who carried the gospel to the Gentiles. Neither their tribe&apos;s size nor their personal inadequacies limited God&apos;s purpose. Paul himself wrote, "When I am weak, then am I strong" (2 Corinthians 12:10). The small territory of Benjamin, with Jerusalem barely at its border, became the stage for Israel&apos;s most significant moments. Where Christ was born in Bethlehem (Judah) and will reign from Jerusalem (Benjamin&apos;s territory), the two southern tribes frame the redemptive narrative.',
        },
        {
          kind: 'carry',
          html:
            'Benjamin received a small lot; Benjamin produced a king and an apostle. Do not despise the smallness of your assignment or your sense of your own capacity. God delights in working through the weak, the overlooked, the ones who seemed least likely to matter. Your tribe may be small; your territory may be tight. But if it is held by someone who has truly given the lot to the Lord, there is no telling what God will do through it.',
        },
        {
          kind: 'reflection',
          id: 'benjamin-legacy-2',
          prompt:
            'Where in your life do you see smallness — your resources, your reach, your sense of yourself — that God might be waiting to make fierce and significant?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
