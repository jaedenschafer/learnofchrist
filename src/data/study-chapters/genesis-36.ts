import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 36 — Esau's genealogy: the generations of Edom.
 *
 * Esau prospers. He gets his kingdom before Israel gets hers. He settles the
 * land called after him, Edom. Chieftains organize his people, then kings.
 * The chapter is a list of names — Esau's wives, his sons, the dukes that
 * came of them, the kings that reigned before any king reigned over Israel.
 *
 * It is easy to pass over genealogies as mere inventory. But the text keeps
 * a careful record: Esau's line flourishes, has its own kingdom, its own
 * rulers. And yet — Edom's destiny, according to Obadiah and Malachi, is to
 * vanish, while Jacob's line continues toward Christ. Every name in Genesis
 * matters to God. The genealogies foreshadow a day when Christ will number
 * the very hairs of every head.
 */
export const GENESIS_36: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 36,

  estimatedMinutes: { beginner: 6, intermediate: 8, deep: 11 },
  intros: [
    'Genesis 36 is a genealogy — a detailed list of Esau&apos;s descendants, organized by wives, sons, dukes, and kings. Genealogies can feel like inventory. But this one tells a quiet story: Esau, rejected from the line of promise, nevertheless prospers. He builds a nation. He settles a land. Kings rise from his line before any king rules Israel.',
    'The chapter is saying: rejection from God&apos;s covenant line is not poverty. Edom becomes real, rooted, fruitful. [res:bibleodyssey-jacob-israel] And yet the text frames these names with a careful thoroughness — listing them all, remembering them all — as if no name, however far from the promise, is invisible to God. That attention foreshadows the Christ who came to know every person&apos;s face, every person&apos;s need.',
  ],

  bottomShare: {
    label: 'Share Genesis 36',
    quote:
      'These are the generations of Esau, who is Edom. Though he was not in the line of promise, his descendants flourished — dukes and kings arose from his seed. And God knew them all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 36 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-36',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 36 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.36',
      description: 'Rabbinic and academic commentaries on the genealogy of Esau and the Edomite kingdom.',
    },
    {
      id: 'iaa-israel-sites',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Canaanite and Patriarchal Sites',
      url: 'https://www.antiquities.org.il/Article/ArticleFull/1',
      description: 'Archaeological records of settlements and family structures in Iron Age Canaan.',
    },
    {
      id: 'bibleodyssey-jacob-israel',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Jacob &amp; Israel: Deception, Wrestling, &amp; Divine Naming',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/Jacob-Israel',
      description: 'Theological exploration of Jacob&apos;s role in covenant continuation and God&apos;s sovereign choice.',
    },
  ],

  sections: [
    /* ─── Genesis 36:1–8 — Esau Takes Seir ────────────────────────────────── */
    {
      ref: 'Genesis 36:1–8',
      title: 'Esau Takes Seir',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the generations of Esau, who is '),
                hy('Edom', 'hebrew-edom'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [t('Esau took his wives of the daughters of Canaan; Adah the daughter of Elon the Hittite, and Aholibamah the daughter of Anah the daughter of Zibeon the Hivite;')],
            },
            {
              number: 3,
              spans: [t('And Bashemath Ishmael&apos;s daughter, sister of Nebajoth.')],
            },
            {
              number: 4,
              spans: [
                t('And Adah bare to Esau '),
                hg('Eliphaz', 'c-eliphaz'),
                t('; and Bashemath bare Reuel;'),
              ],
            },
            {
              number: 5,
              spans: [t('And Aholibamah bare Jeush, and Jaalam, and Korah: these are the sons of Esau, which were born unto him in the land of Canaan.')],
            },
            {
              number: 6,
              spans: [
                t('And Esau took his wives, and his sons, and his daughters, and all the persons of his house, and his cattle, and all his beasts, and all his substance, which he had got in the land of Canaan; and went into the land of '),
                hy('Seir', 'hebrew-seir'),
                t(', from the face of his brother Jacob.'),
              ],
            },
            {
              number: 7,
              spans: [t('For their riches were more than that they might dwell together; and the land wherein they were strangers could not bear them because of their cattle.')],
            },
            {
              number: 8,
              spans: [
                t('Thus dwelt Esau in mount '),
                hg('Seir', 'c-settlement'),
                t(': Esau is Edom.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-edom',
          title: 'Edom — &ldquo;red&rdquo;',
          script: 'אֱדוֹם',
          translit: '<strong>Edom</strong> · red, reddish',
          description:
            'The name recalls Genesis 25:30, where Esau sells his birthright for red lentil stew — "give me, I pray thee, of that red pottage." Edom, red, echoes that moment of exchange, of choosing the visible and immediate over the unseen promise. The geography carries the memory of the choice.',
        },
        {
          kind: 'commentary',
          id: 'c-eliphaz',
          html:
            'Eliphaz, Reuel, Jeush, Jaalam, Korah — Esau&apos;s sons. The text names them as methodically as it will name the dukes and kings who come after them. None of these names are in the covenant line, but all are remembered. [res:sefaria-genesis-36] God does not forget people because they are outside His promise.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-seir',
          title: 'Seir — &ldquo;hairy&rdquo;',
          script: 'שֵׂעִיר',
          translit: '<strong>Seir</strong> · hairy, rough',
          description:
            'The mountain where Esau settles. The name echoes Genesis 27:11: Esau himself is the hairy man, and he settles in the hairy mountain. Esau&apos;s geography matches his nature — he does not run from what he is. He settles where his name belongs.',
        },
        {
          kind: 'commentary',
          id: 'c-settlement',
          html:
            'Esau leaves Canaan not in disgrace but in prosperity. His wealth was too great to share the land with Jacob. This is not humiliation. It is saturation. He takes his whole household, every animal, all his substance, and settles Seir. [res:iaa-israel-sites] What looks like rejection from the outside reads like blessing from the inside — land, family, cattle, security. The chapter will not let you pity Esau.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where some prosper outside the covenant, and some suffer inside it. Esau flourished. Jacob wrestled with God and limped away. The text is honest about this: faithfulness does not guarantee earthly comfort, and unfaithfulness does not guarantee ruin. What matters is which line you are in at the end. Because one line runs toward Christ, and one does not.',
        },
        {
          kind: 'reflection',
          id: 'gen36-settlement',
          prompt:
            'Where in your life do you see people thriving outside the faith, and believers struggling? What does that teach you about what the promise actually is?',
        },
      ],
    },

    /* ─── Genesis 36:9–30 — The Dukes of Edom ─────────────────────────────── */
    {
      ref: 'Genesis 36:9–30',
      title: 'The Dukes of Edom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 9,
              spans: [
                t('And these are the generations of Esau the father of the '),
                hy('Edomites', 'c-dukes-intro'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [t('The sons of Eliphaz the firstborn son of Esau; duke Teman, duke Omar, duke Zepho, duke Kenaz,')],
            },
            {
              number: 11,
              spans: [t('Duke Korah, duke Gatam, and duke Amalek: these are the dukes that came of Eliphaz in the land of Edom; these were the sons of Adah.')],
            },
            {
              number: 12,
              spans: [t('And Reuel the son of Esau had sons; duke Nahath, duke Zerah, duke Shammah, duke Mizzah: these are the dukes that came of Reuel in the land of Edom; these are the sons of Bashemath Esau&apos;s wife.')],
            },
            {
              number: 13,
              spans: [t('And the sons of Aholibamah, Esau&apos;s wife; duke Jeush, duke Jaalam, duke Korah: these were the dukes that came of Aholibamah the daughter of Anah, Esau&apos;s wife.')],
            },
            {
              number: 14,
              spans: [t('These were the dukes of the sons of Esau: the sons of Eliphaz the firstborn son of Esau; duke Teman, duke Omar, duke Zepho, duke Kenaz, duke Korah, duke Gatam, duke Amalek.')],
            },
            {
              number: 15,
              spans: [t('These are the dukes that came of Reuel; duke Nahath, duke Zerah, duke Shammah, duke Mizzah.')],
            },
            {
              number: 16,
              spans: [t('These are the dukes that came of Esau&apos;s wife Aholibamah; duke Jeush, duke Jaalam, duke Korah.')],
            },
            {
              number: 17,
              spans: [t('These are the dukes of Edom according to their habitations in the land of their possession: he is Esau the father of the Edomites.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen36-split-1',
          html:
            'Esau&apos;s line is organized: seven dukes from Eliphaz, four from Reuel, three from Aholibamah. Each chieftain rules his territory. Edom is becoming a nation. Yet the text does not stop there. It will also list the Horites—the people already living in Seir when Esau arrived—their chiefs and families woven into the same narrative. God remembers all the names.',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 18,
              spans: [t('And these are the sons of Seir the Horite, who inhabited the land; Lotan, and Shobal, and Zibeon, and Anah,')],
            },
            {
              number: 19,
              spans: [t('And Dishon, and Ezer, and Dishan: these are the dukes of the Horites, the children of Seir in the land of Edom.')],
            },
            {
              number: 20,
              spans: [t('And Lotan&apos;s sons; Hori and Hemam; and Lotan&apos;s sister was Timna.')],
            },
            {
              number: 21,
              spans: [t('And the children of Shobal were; Alvan, and Manahath, and Ebal, Shepho, and Onam.')],
            },
            {
              number: 22,
              spans: [t('And the children of Zibeon; both Ajah, and Anah: this was that Anah that found the mules in the wilderness, as he fed the asses of Zibeon his father.')],
            },
            {
              number: 23,
              spans: [t('And the children of Anah; Dishon, and Aholibamah the daughter of Anah.')],
            },
            {
              number: 24,
              spans: [t('And the children of Dishon; Hemdan, and Eshban, and Ithran, and Cheran.')],
            },
            {
              number: 25,
              spans: [t('The children of Ezer; Bilhan, and Zaavan, and Akan.')],
            },
            {
              number: 26,
              spans: [t('The children of Dishan; Uz, and Aran.')],
            },
            {
              number: 27,
              spans: [t('These are the dukes of the Horites; duke Lotan, duke Shobal, duke Zibeon, duke Anah,')],
            },
            {
              number: 28,
              spans: [t('Duke Dishon, duke Ezer, duke Dishan: these are the dukes of the Horites, according to their dukes in the land of Seir.')],
            },
            {
              number: 29,
              spans: [t('And these are the children of Dishon; Hemdan, and Eshban, and Ithran, and Cheran.')],
            },
            {
              number: 30,
              spans: [
                t('The children of Ezer; Bilhan, and Zaavan, and Akan. The children of Dishan; Uz, and Aran.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dukes-intro',
          html:
            'The text now begins to organize Esau&apos;s line by <em>alluph</em> — a chief, a duke, a local ruler. Not yet a kingdom with a central king, but a clan system with recognized leaders. Esau&apos;s people are becoming a political structure. And the list, while dense with unfamiliar names, is deliberately thorough. &ldquo;These are the dukes of Edom according to their habitations in the land of their possession.&rdquo; Every chief is named. Every dwelling place is remembered.',
        },
        {
          kind: 'reflection',
          id: 'gen36-dukes',
          prompt:
            'Read these names as if you were hearing them for the first time: Teman, Omar, Zepho, Kenaz, Korah, Gatam, Amalek. What does it mean that a text takes the time to name all of them, one by one, even though they never appear in the story again?',
        },
      ],
    },

    /* ─── Genesis 36:31–39 — Kings of Edom Before Israel ────────────────── */
    {
      ref: 'Genesis 36:31–39',
      title: 'Kings of Edom Before Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 31,
              spans: [
                t('And these are the '),
                hp('kings that reigned in the land of Edom, before there reigned any king over the children of Israel', 'christ-edom-kings'),
                t(':'),
              ],
            },
            {
              number: 32,
              spans: [t('And Bela the son of Beor reigned in Edom: and the name of his city was Dinhabah.')],
            },
            {
              number: 33,
              spans: [t('And Bela died, and Jobab the son of Zerah of Bozrah reigned in his stead.')],
            },
            {
              number: 34,
              spans: [t('And Jobab died, and Husham of the land of Temani reigned in his stead.')],
            },
            {
              number: 35,
              spans: [t('And Husham died, and Hadad the son of Bedad, who smote Midian in the field of Moab, reigned in his stead: and the name of his city was Avith.')],
            },
            {
              number: 36,
              spans: [t('And Hadad died, and Samlah of Masrekah reigned in his stead.')],
            },
            {
              number: 37,
              spans: [t('And Samlah died, and Saul of Rehoboth by the river reigned in his stead.')],
            },
            {
              number: 38,
              spans: [t('And Saul died, and Baalhanan the son of Acbor reigned in his stead.')],
            },
            {
              number: 39,
              spans: [t('And Baalhanan the son of Acbor died, and Hadar reigned in his stead: and the name of his city was Pau; and his wife&apos;s name was Mehetabel, the daughter of Matred, the daughter of Mezahab.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kings-timeline',
          html:
            'Edom had kings before Israel did. This is a fact the text cannot hide — and does not try to. Esau&apos;s people moved from dukes to a succession of crowned rulers, while Jacob&apos;s descendants were still wandering the desert, still taking judges and prophets instead of kings. For centuries, Edom looked like the stronger nation. Edom looked like the one God favored with visible, earthly power.',
        },
        {
          kind: 'christ',
          id: 'christ-edom-kings',
          title: 'Christ Connection — The Throne Delayed',
          html:
            'Edom got her kings first. Israel waited. And when Israel finally received a king, it was David — and from David&apos;s line came the King of all nations. &ldquo;Behold, a king shall reign in righteousness&rdquo; (Isa. 32:1). &ldquo;His name shall be called... The mighty God... Of the increase of his government and peace there shall be no end, upon the throne of David&rdquo; (Isa. 9:6-7). Edom&apos;s kings reigned and died. Israel&apos;s King reigns forever. The apparent delay was always the shape of promise.',
        },
        {
          kind: 'carry',
          html:
            'The world does not always crown God&apos;s people first. Sometimes the nations that reject the promise seem to flourish more visibly, rule more obviously, look more powerful on the map. But the throne you are waiting for — the kingdom you are part of — is built on a foundation that outlasts every earthly crown. Do not measure your inheritance by the calendars of the world.',
        },
      ],
    },

    /* ─── Genesis 36:40–43 — The Dukes by Their Dwellings ────────────────── */
    {
      ref: 'Genesis 36:40–43',
      title: 'The Dukes by Their Dwellings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 40,
              spans: [
                t('And these are the '),
                hg('dukes that came of Esau, according to their families, after their places, by their names', 'c-dukes-dwelling'),
                t(': duke Timnah, duke Alvah, duke Jetheth,'),
              ],
            },
            {
              number: 41,
              spans: [t('Duke Aholibamah, duke Elah, duke Pinon,')],
            },
            {
              number: 42,
              spans: [t('Duke Kenaz, duke Teman, duke Mibzar,')],
            },
            {
              number: 43,
              spans: [t('Duke Magdiel, duke Iram: these be the dukes of Edom, according to their habitations in the land of their possession: he is Esau the father of the Edomites.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dukes-dwelling',
          html:
            'The chapter ends the way it began — with a list. But this time the list is organized not by genealogy alone, but by <em>place</em>. &ldquo;According to their families, after their places, by their names.&rdquo; Hebrew lists often follow this pattern: they anchor people to the ground they occupy. The text is saying: these names belong to these places. These people are rooted. They are not homeless or fugitive. They have settlements, lands, dwellings of their own. The narrative might forget Edom, but the land remembers.',
        },
        {
          kind: 'reflection',
          id: 'gen36-names',
          prompt:
            'Why do you think a text inspired by God would take the time to name every single duke, every dwelling place, every city, when none of these people ever appear in the rest of Scripture? What does it tell us about how God sees people — even the ones outside the covenant?',
        },
      ],
    },
  ],
};
