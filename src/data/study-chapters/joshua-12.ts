import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 12 — A Roll-Call of Kings[res:sefaria-kings-list-geography]
 *
 * This chapter lists two groups of kings Israel defeated: those east of Jordan
 * (under Moses) and those west of Jordan (under Joshua). It&apos;s a catalog of
 * victory—31 kings of Canaan, each one a stronghold that fell to the Lord&apos;s power.
 * The repetition ("one... one... one") echoes through the chapter like a drum,
 * reminding us that behind every victory was the same God, working through different leaders.
 */
export const JOSHUA_12: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 12,

  estimatedMinutes: { beginner: 4, intermediate: 9, deep: 13 },
  opener: {
    matchTitle: /The Conquest of the/i,
    caption: 'Joshua 12',
  },
  intros: [
    'Joshua 12 is a victory roll-call. The chapter divides neatly into two halves: kings east of the Jordan River (defeated under Moses) and kings west of the Jordan (defeated under Joshua). It&apos;s less narrative and more bookkeeping—but don&apos;t mistake a list for mere record-keeping. Each name on this list was a fortified power, a god-king ruling over a walled city. Each represents a human stronghold that could not stand against the Lord.',
    'The structure matters: the eastern victories belonged to the generation before Joshua—under Moses, the people defeated Sihon and Og, and received their inheritance on the east side of the Jordan. Now Joshua crosses over and defeats 31 more kings on the west side. Same God. Different leaders. One unstoppable pattern. For the first-time reader, this chapter might seem repetitive. But read it aloud, and you hear the drumbeat of conquest[res:bibleodyssey-conquest-complete], the weight of prayer answered, and the ache of territories reclaimed.',
  ],

  sections: [
    /* ─── Eastern Kings under Moses ───────────────────────────────────── */
    {
      ref: 'Joshua 12:1–6',
      title: 'The Kings of the East (Moses&apos; Victories)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the kings of the land, which the children of Israel smote, and '),
                hp('possessed their land on the other side Jordan', 'jordan-east'),
                t(' toward the rising of the sun; from the river Arnon unto mount Hermon, and all the plain on the east:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jordan-east',
          html:
            'The phrase &ldquo;on the other side Jordan&rdquo; marks territory already settled under Moses—not by Joshua, but in the generation before him. This list honors the work of the previous era. The boundary stretches from the Arnon River (south) to Mount Hermon (north)—the Transjordanian territory promised to Reuben, Gad, and half of Manasseh.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                hy('Sihon', 'sihon-king'),
                t(' king of the Amorites, who dwelt in Heshbon, and ruled from '),
                hy('Aroer', 'aroer-city'),
                t(', which is upon the bank of the river Arnon, and from the middle of the river, and from half Gilead, even unto the river Jabbok, which is the border of the children of Ammon;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'sihon-king',
          title: 'Sihon — A Kingdom Opposed',
          script: 'סִיחוֹן',
          translit: '<strong>Sihon</strong> · Amorite king, dwelt in Heshbon',
          description:
            'Sihon&apos;s name appears in Numbers 21 as the king who refused Israel passage through his land. When Moses tried to negotiate, Sihon marched out to fight—and was defeated. His kingdom became Israel&apos;s first Transjordanian foothold.',
        },
        {
          kind: 'commentary',
          id: 'aroer-city',
          html:
            'Aroer marks the southern boundary of Sihon&apos;s conquered territory. Archaeological traces of Aroer still exist in modern-day Jordan. This list anchors Bible history in actual geography, in actual cities that stood and fell.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('And from the plain to the '),
                hy('sea of Chinneroth', 'chinneroth-sea'),
                t(' on the east, and unto the sea of the plain, even the '),
                hy('salt sea', 'salt-sea'),
                t(' on the east, the way to Beth-jeshimoth; and from the south, under '),
                t('Ashdoth-pisgah'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'chinneroth-sea',
          title: 'Chinneroth — The Sea of Galilee',
          script: 'כִּנְּרוֹת',
          translit: '<strong>Chinneroth</strong> · the northern sea, later called the Sea of Galilee',
          description:
            'The same body of water where Jesus would later calm a storm and walk on water. In Joshua&apos;s day, it marked the western edge of Sihon&apos;s territory.',
        },
        {
          kind: 'commentary',
          id: 'salt-sea',
          html:
            'The Salt Sea is the Dead Sea—the lowest point on earth. Its boundaries mark the eastern and southern edges of Israel&apos;s conquest. Every boundary in this list is rooted in geography, not theory.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And '),
                hy('Og king of Bashan', 'og-king'),
                t(', of the remnant of the '),
                hy('Rephaim', 'rephaim-giants'),
                t(', that dwelt at Ashtaroth and at Edrei,'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'og-king',
          title: 'Og — The Giant King',
          script: 'עוֹג',
          translit: '<strong>Og</strong> · king of Bashan, last of the giants',
          description:
            'Og is mentioned in Deuteronomy 3:11 as a giant whose iron bedstead was nine cubits long—roughly 13 feet. Despite his height, he too fell to Israel&apos;s God.',
        },
        {
          kind: 'hebrew',
          id: 'rephaim-giants',
          title: 'Rephaim — &ldquo;The Giants&rdquo;',
          script: 'רְפָאִים',
          translit: '<strong>Rephaim</strong> · giants, the primeval tall ones',
          description:
            'The Rephaim were legendary giants inhabiting Canaan before Israel&apos;s conquest. Og is called &ldquo;the remnant&rdquo; of them—the last survivor of a race of titans. Even giants die; no stronghold stands forever against God.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('And reigned in mount Hermon, and in Salcah, and in all Bashan, unto the border of the Geshurites and the Maachathites, and half Gilead, the border of Sihon king of Heshbon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'og-territory',
          html:
            'Og&apos;s kingdom sprawled across Bashan—the volcanic plateau northeast of the Sea of Galilee. The text lists his territory by its boundaries, naming real places: Mount Hermon to the north, Salcah to the east, Gilead to the west. This wasn&apos;t symbolic land; it was real, defensible, wealthy terrain. And it fell.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('Them did Moses the servant of the Lord and the children of Israel smite: and '),
                hp('Moses gave it for a possession unto the Reubenites, and the Gadites, and the half tribe of Manasseh', 'moses-inheritance'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-inheritance',
          html:
            'Note the structure: Moses defeated the kings <em>and</em> distributed the land to the tribes. The conquering and the inheriting happened together under his leadership. This pattern will repeat with Joshua on the west side of the Jordan—but the author wants us to know that the work of Moses was complete, the promises to the eastern tribes were kept, and God worked through Moses&apos; hand to deliver what He had sworn.',
        },
        {
          kind: 'carry',
          html:
            'If you&apos;ve ever felt like the odds against you were insurmountable—an enemy too big, a giant in your path—remember that Og existed. He was real, he was tall, he was powerful, and he fell. The God who spoke through Moses speaks the same words over your impossible thing. The hand that lowered Og can lower what opposes you.',
        },
        {
          kind: 'reflection',
          id: 'east-kings',
          prompt:
            'What "Og" stands in your way right now—a fear, an addiction, a stronghold that seems unconquerable? What would it mean for you to believe that the God who defeated a literal giant is ready to work through your own faith?',
        },
      ],
    },

    /* ─── Western Kings under Joshua (Part 1) ───────────────────────────────────── */
    {
      ref: 'Joshua 12:7–24',
      title: 'The Kings of the West (Joshua&apos;s Victories)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('And these are the kings of the land which Joshua and the children of Israel smote on this side Jordan on the west, from '),
                hy('Baal-gad', 'baal-gad'),
                t(' in the valley of Lebanon even unto the '),
                hy('mount Halak', 'halak-mount'),
                t(', that goeth up to Seir; which Joshua gave unto the tribes of Israel for a possession according to their divisions;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'baal-gad',
          title: 'Baal-gad — The Northern Boundary',
          script: 'בַּעַל גָּד',
          translit: '<strong>Baal-gad</strong> · northern outpost of Canaanite worship',
          description:
            'Baal-gad sat at the foot of Mount Hermon, marking the northernmost boundary of Joshua&apos;s conquest. From north to south, from the valleys of Lebanon to the wilderness of Edom, Israel&apos;s victory swept the entire west bank.',
        },
        {
          kind: 'commentary',
          id: 'halak-mount',
          html:
            'Mount Halak (meaning &ldquo;the smooth mountain&rdquo;) marks the southern boundary. The geography is precise: north to south, the entire Canaanite heartland. Every king on the list below sat somewhere within these lines.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('In the mountains, and in the valleys, and in the plains, and in the springs, and in the wilderness, and in the south country; the '),
                hg('Hittites, the Amorites, and the Canaanites', 'canaanite-peoples'),
                t(', the Perizzites, the Hivites, and the Jebusites:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'canaanite-peoples',
          html:
            'These six people-groups aren&apos;t random—they represent the tapestry of cultures that inhabited Canaan. Each had their own gods, their own cities, their own ways of life. All of them fell. The text catalogs the <em>types</em> of kingdoms defeated before listing the <em>individual kings</em>.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                hg('The king of Jericho, one; the king of Ai, beside Bethel, one; the king of Jerusalem, one; the king of Hebron, one;', 'kings-list-1'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                hg('The king of Jarmuth, one; the king of Lachish, one; the king of Eglon, one; the king of Gezer, one;', 'kings-list-2'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('The king of Debir, one; the king of Geder, one; the king of Hormah, one; the king of Arad, one;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('The king of Libnah, one; the king of Adullam, one; the king of Makkedah, one; the king of Bethel, one;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('The king of Tappuah, one; the king of Hepher, one; the king of Aphek, one; the king of Lasharon, one;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('The king of Madon, one; the king of Hazor, one; the king of Shimron-meron, one; the king of Achshaph, one;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('The king of Taanach, one; the king of Megiddo, one; the king of Kedesh, one; the king of Jokneam of Carmel, one;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 16,
              spans: [
                t('The king of Dor in the coast of Dor, one; the king of the nations of Gilgal, one; the king of Tirzah, one:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'kings-list-1',
          html:
            'The list opens with Jericho—the first city Joshua conquered when he crossed the Jordan. Every city named here has been verified by archaeology: Hazor, Lachish, Megiddo. These weren&apos;t mythical places. They were fortified cities with walls, armies, storehouses, temples. They were power centers. And they fell, one by one.',
        },
        {
          kind: 'commentary',
          id: 'kings-list-2',
          html:
            'Notice Bethel appears twice in the list (verse 9, "the king of Ai, beside Bethel," and verse 12, "the king of Bethel")—first as a landmark, then as a kingdom in its own right. The location mattered enough to the writer to mark it twice. God&apos;s conquest of Bethel was deliberate and thorough.',
        },
        {
          kind: 'christ',
          id: 'christ-strongholds[res:intertextual-strongholds-torn-down]',
          title: 'Christ Connection — The Pulling Down of Strongholds',
          html:
            'Paul draws a direct line from Joshua&apos;s conquest to spiritual warfare: "The weapons of our warfare are not carnal, but mighty through God to the pulling down of strongholds&rdquo; (2 Corinthians 10:4). Every king in this list represents a stronghold—a fortress of fear, pride, idolatry, or power that seemed immovable until God moved against it. In the New Testament, the strongholds are different (lies, addictions, rebellion), but the pattern is identical: they fall to God&apos;s power working through His people&apos;s faith. Nothing you face is stronger than the God who defeated thirty-one kings.',
        },
        {
          kind: 'carry',
          html:
            'Make a list of the strongholds you&apos;ve watched God dismantle in your own life. Each one is a king defeated. Each one proves that the hand that conquered Canaan is still conquering—in your marriage, your mind, your work, your family. The God of Joshua 12 is the God of your own story.',
        },
        {
          kind: 'reflection',
          id: 'west-kings',
          prompt:
            'If your life were a map of conquered strongholds, which three victories would you mark first? And which one is God still working on right now?',
        },
      ],
    },

    /* ─── Thirty and One — The Cumulative Power ───────────────────────────────────── */
    {
      ref: 'Joshua 12:24',
      title: '"Thirty and One" — The Count of Victory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 24,
              spans: [
                hp('All the kings thirty and one.', 'thirty-one-kings'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'thirty-one-kings',
          html:
            'The simplicity of this closing is deceptive. "Thirty and one" is not a casual count—it&apos;s a theological statement. Thirty-one individual kings, each with his own city, his own army, his own gods. Thirty-one strongholds that believed themselves unshakeable. And all of them fell. The repetition of "one... one... one" through the list isn&apos;t padding; it&apos;s percussion. Like a drumbeat of God&apos;s unstoppable momentum.',
        },
        {
          kind: 'hebrew',
          id: 'melech-echad',
          title: 'Melech Echad — &ldquo;One King&rdquo;',
          script: 'מֶלֶךְ אֶחָד',
          translit: '<strong>melech echad</strong> · king, one (repeated)',
          description:
            'The Hebrew phrase "melech echad" is used 31 times in this list. The repetition is deliberate, almost hypnotic—one king falls, then another, then another. No king was unique in his strength; all were equal before the God of Israel.',
        },
        {
          kind: 'commentary',
          id: 'cumulative-power',
          html:
            'When you add them all together, you&apos;re looking at the entire military, economic, and spiritual power structure of Canaan. Every government. Every city. Every priesthood. Every idol shrine. All of it was defeated. The reader isn&apos;t meant to mourn the loss of Canaanite culture—the text is clear that these societies practiced child sacrifice and temple prostitution—but to stand in awe of the completeness of God&apos;s work. Nothing was left standing that could resist His purpose.',
        },
        {
          kind: 'reflection',
          id: 'thirty-one',
          prompt:
            'When you look at the thirty-one kings—an exhaustive catalog of what fell—what does that tell you about the totality of God&apos;s work? Is there any enemy, any stronghold, that escapes His sight?',
        },
      ],
    },

    /* ─── The Meaning of the List ───────────────────────────────────────── */
    {
      ref: 'Joshua 12 (whole)',
      title: 'More Than a Ledger — What the List Means',
      blocks: [
        {
          kind: 'commentary',
          id: 'list-meaning',
          html:
            'Joshua 12 might seem like dry bookkeeping, but it&apos;s actually one of the Bible&apos;s most powerful images of God&apos;s faithfulness. Every king listed here represents a promise kept. Forty years earlier, God told Israel they would inherit the land of Canaan. That promise seemed impossible: the land was fortified, the kings were numerous, the giants were real. And yet, here is the list. Sixty-three years after leaving Egypt, Israel could look at this roll-call and say, "He did it. Every single one."',
        },
        {
          kind: 'commentary',
          id: 'work-through-leaders',
          html:
            'Notice that this list honors both Moses and Joshua. The eastern kings fell under Moses; the western kings under Joshua. Different leaders, different eras, different terrain. But the same God working through human faithfulness. God doesn&apos;t do His work alone—He partners with people. When you see a victory in your own life, recognize it as the partnership of God&apos;s power and your own obedience.',
        },
        {
          kind: 'carry',
          html:
            'At some point, you should write your own version of Joshua 12. Not as a literal battle roll-call, but as a list of the strongholds God has dismantled in your life. Write the names. Write the boundaries. Write the date. Then read the list. Let it sink in: the God of Joshua 12 is the God of your story. He keeps His word. He completes what He starts. He doesn&apos;t leave any enemy standing.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'final-reflection',
          prompt:
            'If Joshua 12 were written about your life, what would the closing line be? "All the [strongholds]... thirty and one"? What does that number change about how you see God&apos;s work in you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 12',
    quote:
      'Thirty-one kings fell to Israel&apos;s God. Each one a stronghold. Each one defeated. The weapons of our warfare are mighty through God to the pulling down of strongholds.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-kings-list-geography',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Kings of Canaan: Geography and Chronology',
      url: 'https://www.sefaria.org/Joshua.12',
      description: 'Historical and geographical mapping of the 31 kings defeated during the conquest, their territories, and their place in Canaanite politics.',
    },
    {
      id: 'intertextual-strongholds-torn-down',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Pulling Down Strongholds (Joshua to 2 Corinthians)',
      url: 'https://intertextual.bible/search?q=strongholds+weapons+warfare+2+corinthians+10',
      description: 'The metaphor of strongholds runs from Joshua&apos;s military conquest to Paul&apos;s spiritual warfare, showing the continuity of God&apos;s pattern.',
    },
  ],
};
