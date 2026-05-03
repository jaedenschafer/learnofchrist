import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 1 — Genealogies from Adam to Esau
 *
 * Chronicles opens not with dramatic narrative but with names — a sweeping
 * genealogy running from Adam through Noah, the nations descended from Noah's
 * sons, the line of Shem narrowing toward Abraham, and finally the sons of
 * Abraham and Isaac down to Israel and Esau. Why open a book with genealogies?
 * Because the Chronicler, writing to a post-exilic community asking "Who are we?
 * Whose are we?" answers: You are the children of covenant. Every name in this
 * genealogy is a name God remembers. The line of promise runs through you.
 * Genealogies are theology in names.
 */
export const CHRONICLES_1_1: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 1,

  estimatedMinutes: { beginner: 4, intermediate: 11, deep: 16 },
  intros: [
    'The book of Chronicles begins where the story of humanity begins: with a name. Adam. Not a story of his temptation and fall — that came before — but his place in the great chain of generations that stretches from the first human to the present moment. The Chronicler is writing to a people who have returned from exile, a people who have lost everything — temple, kingdom, security. And the first thing the Chronicler says to them is: Look at your genealogy. You have a name. You are part of a line.',
    'From Adam, the genealogy narrows like a river flowing toward the sea. Through the great antediluvian patriarchs — Enosh, Kenan, Mahalaleel, Jered, Henoch, Methuselah, Lamech — to Noah. Then through Noah\'s sons — Shem, Ham, Japheth — the world peoples itself. From Shem, the line continues through the patriarchs of the covenant: Arphaxad, Eber, Peleg, Reu, Serug, Nahor, Terah, Abraham. From Abraham, Isaac, and from Isaac, Israel. The genealogy traces not just history but promise — the narrowing of God\'s covenant purpose through the generations.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 1',
    quote:
      'Every name in this genealogy is a name God remembers. The line of promise runs through the generations—from Adam to Noah, through Shem to Abraham, through Isaac to Israel. Genealogies are theology in names.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 1 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 1:1–3 — From Adam Through Noah ──────────────────── */
    {
      ref: '1 Chronicles 1:1–3',
      title: 'The Patriarchs Before the Flood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Adam, Sheth, Enosh,'),
            plain(2, 'Kenan, Mahalaleel, Jered,'),
            plain(3, 'Henoch, Methuselah, Lamech, Noah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'adam-line',
          html:
            'The genealogy opens with the line from Adam — not Adam the story, but Adam the name in a chain. Notice what the Chronicler does not include: no creation account, no temptation, no fall. The Chronicler is not interested in theology of origins for its own sake. The Chronicler is interested in continuity — the line that runs from the beginning of humanity to the present day. By listing Adam first, the text says: You are human. You belong to the human race, created in God&apos;s image.',
        },
        {
          kind: 'hebrew',
          id: 'adam-meaning',
          title: 'Adam — "Man" and "Red Earth"',
          script: 'אָדָם',
          translit: '<strong>Adam</strong> · man; mankind; formed from red earth',
          description:
            'The Hebrew word "Adam" carries a double meaning: it can mean "man" (the individual) or "mankind" (the species). It is also related to "adamah," the red earth. Adam is the human one, formed from earth. In this genealogy, Adam stands at the head of all humanity — both the first individual and the representative of the whole race that comes after him. Every person in this genealogy descends from the "red earth."',
        },
        {
          kind: 'commentary',
          id: 'antediluvians',
          html:
            'The antediluvian patriarchs — Enosh, Kenan, Mahalaleel, Jered, Henoch, Methuselah, Lamech — live in a different age, before the flood. The genealogy does not linger on them. It simply names them, preserving their memory in the record. Two stand out: Henoch, who "walked with God and was not, for God took him" (mentioned without genealogical detail here, but more fully in Genesis 5); and Methuselah, the longest-lived human. These are not merely historical figures — they are witnesses to a world that existed before the judgment of the flood.',
        },
        {
          kind: 'commentary',
          id: 'noah-figure',
          html:
            'Noah appears as the tenth generation from Adam, the man through whom God&apos;s purposes continue after the judgment of the flood. The Chronicler will name Noah&apos;s sons — Shem, Ham, Japheth — and through them, the genealogy opens outward to the whole world. Noah is not the end of history; he is a hinge on which history turns.',
        },
        {
          kind: 'carry',
          html:
            'Names are powerful. They carry memory. When the Chronicler lists these names — Adam, Enosh, Kenan — the genealogy is saying: These people mattered. God knew their names. They are not lost in the fog of time. If you trace your own lineage, you can ask: What names came before me? What faiths were kept by those who came before? What promises were passed down through the generations?',
        },
        {
          kind: 'reflection',
          id: 'adam-through-noah',
          prompt: 'When you think about the generations before you — your parents, grandparents, and ancestors further back — what do you know about their faith or character? What did they pass on to you?',
        },
      ],
    },

    /* ─── 1 Chronicles 1:4–27 — The Table of Nations Through Shem ───────── */
    {
      ref: '1 Chronicles 1:4–27',
      title: 'Noah\'s Sons and the Peoples of the Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'The sons of Noah; Shem, Ham, and Japheth.'),
            plain(5, 'The sons of Japheth; Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras.'),
            plain(6, 'And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah.'),
            plain(7, 'And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim.'),
            plain(8, 'The sons of Ham; Cush, and Mizraim, Put, and Canaan.'),
            plain(9, 'And the sons of Cush; Seba, and Havilah, and Sabta, and Raamah, and Sabteca. And the sons of Raamah; Sheba, and Dedan.'),
            plain(10, 'And Cush begat Nimrod: he began to be mighty upon the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'table-of-nations',
          html:
            'After Noah, the genealogy branches into three directions — the sons of Japheth (the Indo-European peoples of the Mediterranean and north), the sons of Ham (the African and Middle Eastern peoples), and the sons of Shem (from whom the line of Abraham will emerge). This is the "Table of Nations" — an ancient way of mapping out the known world as it was understood in the time of the biblical writers. Every nation known to Israel is here, descended from one of Noah\'s three sons.',
        },
        {
          kind: 'commentary',
          id: 'nimrod-mighty',
          html:
            'Nimrod appears as the first mighty man — "he began to be mighty upon the earth." He is remembered as a great hunter and builder. But the genealogy does not glorify him. He is simply named, noted, and the genealogy continues. In the ancient Near Eastern understanding, Nimrod represents human power and ambition before the covenant line narrows toward Abraham.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(11, 'And Mizraim begat Ludim, and Anamim, and Lehabim, and Naphtuhim,'),
            plain(12, 'And Pathrusim, and Casluhim, (of whom came the Philistines,) and Caphtorim.'),
            plain(13, 'And Canaan begat Sidon his firstborn, and Heth,'),
            plain(14, 'The Jebusites also, and the Amorites, and the Girgashites,'),
            plain(15, 'And the Hivites, and the Arkites, and the Sinites,'),
            plain(16, 'And the Arvadites, and the Zemarites, and the Hamathites.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-1-split-1',
          html:
            'The sons of Canaan listed here — Sidon, Heth, the Jebusites, Amorites, Girgashites, Hivites, Arkites, Sinites, Arvadites, Zemarites, Hamathites — are the very peoples that Israel will encounter in the conquest. They are named in the genealogy because they matter. God knows every nation.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(17, 'The sons of Shem; Elam, and Asshur, and Arphaxad, and Lud, and Aram, and Uz, and Hul, and Gether, and Meshech.'),
            plain(18, 'And Arphaxad begat Shelah, and Shelah begat Eber.'),
            plain(19, 'And unto Eber were born two sons: the name of the one was Peleg; for in his days the earth was divided: and his brother&apos;s name was Joktan.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-1-split-2',
          html:
            'From Shem, the genealogy narrows. Shem to Arphaxad to Eber — and with Eber, we find the root of "Hebrew." His son Peleg means "division," and in his time the earth was divided, likely at Babel. But the covenant line does not break; it continues through Peleg.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(20, 'And Joktan begat Almodad, and Sheleph, and Hazarmaveth, and Jerah,'),
            plain(21, 'Hadoram also, and Uzal, and Diklah,'),
            plain(22, 'And Ebal, and Abimael, and Sheba,'),
            plain(23, 'And Ophir, and Havilah, and Jobab. All these were the sons of Joktan.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'canaan-peoples',
          html:
            'The sons of Canaan listed here — Sidon, Heth, the Jebusites, Amorites, and others — are the very peoples that Israel will encounter and displace in the conquest. The genealogy knows the names of the peoples God\'s people will face. They are not strangers; they are part of the human family descended from Noah. And yet they are also the peoples who will stand against Israel — a tension the genealogy holds without resolving.',
        },
        {
          kind: 'commentary',
          id: 'shem-line-continues',
          html:
            'From Shem, the genealogy now begins its narrowing. Shem&apos;s line goes through Arphaxad to Eber. With Eber, something crucial happens: he is the ancestor of the "Hebrews" — the name Israel will come to be called. Eber&apos;s son is Peleg, and in his days "the earth was divided" — a reference (scholars believe) to the scattering of humanity at Babel, or simply to the diversification of peoples. But the genealogy continues the covenant line through Peleg.',
        },
        {
          kind: 'hebrew',
          id: 'peleg-division',
          title: 'Peleg — "Division"',
          script: 'פֶּלֶג',
          translit: '<strong>Peleg</strong> · division; the earth was divided in his days',
          description:
            'The name "Peleg" means "division" — and the text notes that in his days "the earth was divided." This may refer to the scattering at Babel, or to a more general understanding that humanity diversified into separate nations and languages. In any case, Peleg\'s name marks a turning point: before him, the genealogy follows all humanity; from him, the genealogy will narrow almost exclusively to the line of the covenant.',
        },
        {
          kind: 'carry',
          html:
            'The genealogy remembers all the nations. It does not minimize them. But it narrows. God\'s purpose for the world works through a specific line — not because the other nations matter less, but because God works through particularity. The covenant line is narrow, but its purpose is for the whole world. In your own life, you may feel like you are a small part of a very large world. But the genealogy says: Every name is remembered. Your particular place in God\'s family matters.',
        },
        {
          kind: 'reflection',
          id: 'nations-covenant',
          prompt: 'The genealogy names all the nations descended from Noah, but then follows one line—the covenant line. How does God work through particularity (choosing one people, one family) to serve the whole world?',
        },
      ],
    },

    /* ─── 1 Chronicles 1:24–27 — The Line of Promise Narrows ──────────── */
    {
      ref: '1 Chronicles 1:24–27',
      title: 'From Shem to Abraham — The Line of Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(24, 'Shem, Arphaxad, Shelah,'),
            plain(25, 'Eber, Peleg, Reu,'),
            plain(26, 'Serug, Nahor, Terah,'),
            plain(27, 'Abram; the same is Abraham.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-narrowing',
          html:
            'Now the genealogy reaches its pivot point: Abraham. From Adam to Noah, from Noah through the nations, from Shem through Eber and Peleg — and now Abraham stands at the end of this long genealogical line. The Chronicler names the patriarchs of the covenant: Shem (the ancestor from whom the line descends), Arphaxad, Shelah, Eber, Peleg, Reu, Serug, Nahor, Terah, and finally Abraham. This is the line of promise — narrower than the nations, more focused. Abraham is not the beginning; he is the culmination of ten generations of covenant descent.',
        },
        {
          kind: 'hebrew',
          id: 'abraham-name',
          title: 'Abraham — "Father of a Multitude"',
          script: 'אַבְרָהָם',
          translit: '<strong>Abraham</strong> · father of a multitude; exalted father',
          description:
            'The text notes that "Abram" (the name he began with) "is Abraham" — the name God gave him. The name change itself is significant. "Abram" means "exalted father," but "Abraham" means "father of a multitude." God renamed him to reflect the promise: not one son, but offspring as numerous as the stars. In the genealogy, Abraham stands as the one whose name embodies God\'s promise to his descendants.',
        },
        {
          kind: 'commentary',
          id: 'terah-last-before',
          html:
            'Terah, Abraham\'s father, is named just before Abraham. Terah was the one who left Ur of the Chaldees to go toward Canaan — but it was Abraham who actually made the journey, who left everything to follow God\'s call. The genealogy acknowledges both: Terah set the direction, but Abraham was the one who stepped out in faith.',
        },
        {
          kind: 'carry',
          html:
            'The genealogy teaches us something profound about the nature of covenant and calling. God does not simply appear and demand faith from Abraham in a vacuum. Abraham stands at the end of a long line of generations. He is part of a family, part of a history, part of a people who have been walking toward this moment since Adam. When Abraham receives the call to leave everything and follow God, he is not alone. He is the culmination of ten generations of covenant. And yet, he is also the one who must choose. Every generation must choose to continue the covenant, or it ends. Abraham is where the genealogy focuses all its light.',
        },
        {
          kind: 'reflection',
          id: 'covenant-line',
          prompt: 'Abraham was called out of his comfort to follow God. But he was also part of a long genealogical line. How do both things matter—the particular call on your own life, and the larger story you are part of?',
        },
      ],
    },

    /* ─── 1 Chronicles 1:28–37 — Abraham's Sons and Grandsons ──────────── */
    {
      ref: '1 Chronicles 1:28–37',
      title: 'Abraham\'s Sons and the Covenant Line Splits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(28, 'The sons of Abraham; Isaac, and Ishmael.'),
            plain(29, 'These are their generations: The firstborn of Ishmael, Nebaioth; then Kedar, and Adbeel, and Mibsam,'),
            plain(30, 'Mishma, and Dumah, Massa, Hadad, and Tema,'),
            plain(31, 'Jetur, Naphish, and Kedemah. These are the sons of Ishmael.'),
            plain(32, 'Now the sons of Keturah, Abraham\'s concubine: she bare Zimran, and Jokshan, and Medan, and Midian, and Ishbak, and Shuah. And the sons of Jokshan; Sheba, and Dedan.'),
            plain(33, 'And the sons of Midian; Ephah, and Epher, and Hanoch, and Abida, and Eldaah. All these are the sons of Keturah.'),
            plain(34, 'And Abraham begat Isaac. The sons of Isaac; Esau and Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'abraham-two-lines',
          html:
            'Abraham has multiple sons — Ishmael by Hagar, six sons by Keturah, and Isaac by Sarah. The genealogy names them all with careful honor. Ishmael receives an entire tribal genealogy (twelve sons, the princes of Ishmael). The sons of Keturah are remembered. But then, abruptly, the genealogy turns: "And Abraham begat Isaac. The sons of Isaac; Esau and Israel." The covenant line flows through Isaac, not through Ishmael or Keturah\'s sons. God remembers all of Abraham\'s children — but the promise is focused through Isaac.',
        },
        {
          kind: 'commentary',
          id: 'ishmael-honor',
          html:
            'That Ishmael receives such careful genealogical treatment is theologically significant. God did not abandon Ishmael. He gave him twelve sons and made him the ancestor of a great people. Genesis 21:13 records God\'s promise: "I will make him fruitful also, and will multiply him exceedingly." Here in Chronicles, that promise is honored — Ishmael\'s genealogy is complete and dignified. He is not erased. He is simply not the line of the covenant promise.',
        },
        {
          kind: 'commentary',
          id: 'keturah-sons',
          html:
            'Similarly, Keturah\'s sons — the peoples of Arabia (Midian and others) — are remembered and named. Later in the biblical narrative, Midian will be both ally and adversary to Israel. But they have their genealogy, their honor. The genealogy says: God remembers all these peoples. They come from Abraham. But the covenant story follows one specific line.',
        },
        {
          kind: 'greek',
          id: 'election-meaning',
          title: 'Eklegomai — "Called Out" or "Chosen"',
          script: 'ἐκλέγομαι',
          translit: '<strong>Eklegomai</strong> · to choose out; to select; to call out',
          description:
            'In the New Testament, this Greek word (related to the English "elect") describes God\'s act of choosing or calling out a people. The genealogy illustrates this election — not as a statement that some people matter more than others, but as a theological fact that God works through particular lines to accomplish particular purposes. Isaac is chosen, not because Ishmael is less worthy, but because the covenant story flows through Isaac\'s line. Election is God\'s intentional choice of means to accomplish His purposes.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that celebrates equality and inclusivity — and that is good. But the genealogy teaches something deeper: God honors all His creation, even as He works through particularity. Ishmael is not erased; he is remembered and blessed. But Isaac is chosen for a specific covenant role. In your own life, you may not always understand why God calls you to something specific, or why He calls others to something different. The genealogy teaches us to trust the wisdom of the One who chooses, while honoring all of humanity as coming from God.',
        },
        {
          kind: 'reflection',
          id: 'election-and-honor',
          prompt: 'The genealogy honors Ishmael and Keturah\'s sons even though the covenant line flows through Isaac. How can we honor God\'s choice while respecting the dignity and worth of all people?',
        },
      ],
    },

    /* ─── 1 Chronicles 1:38–54 — Esau and the Edomite Kings ───────────── */
    {
      ref: '1 Chronicles 1:38–54',
      title: 'Esau\'s Line and the Kings of Edom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(38, 'And the sons of Isaac; Esau and Israel.'),
            plain(39, 'The sons of Esau; Eliphaz, Reuel, and Jeush, and Jaalam, and Korah.'),
            plain(40, 'The sons of Eliphaz; Teman, and Omar, Zephi, and Gatam, Kenaz, and Timna, and Amalek.'),
            plain(41, 'The sons of Reuel; Nahath, Zerah, Shammah, and Mizzah.'),
            plain(42, 'And the sons of Seir; Lotan, and Shobal, and Zibeon, and Anah, and Dishon, and Ezer, and Dishan.'),
            plain(43, 'And the sons of Lotan; Hori, and Homam: and Timna was Lotan\'s sister.'),
            plain(44, 'The sons of Shobal; Alvan, and Manahath, and Ebal, Shephi, and Onam. And the sons of Zibeon; Aiah, and Anah.'),
            plain(45, 'The sons of Anah; Dishon. And the sons of Dishon; Hamran, and Eshban, and Ithran, and Cheran.'),
            plain(46, 'The sons of Ezer; Bilhan, and Zaavan, and Akan. The sons of Dishan; Uz, and Aran.'),
            plain(47, 'Now these are the kings that reigned in the land of Edom, before any king reigned over Israel; Bela the son of Beor: and the name of his city was Dinhabah.'),
            plain(48, 'And when Bela was dead, Jobab the son of Zerah of Bozrah reigned in his stead.'),
            plain(49, 'And when Jobab was dead, Husham of the land of the Temanites reigned in his stead.'),
            plain(50, 'And when Husham was dead, Hadad the son of Bedad, which smote Midian in the field of Moab, reigned in his stead: and the name of his city was Avith.'),
            plain(51, 'And when Hadad was dead, Samlah of Masrekah reigned in his stead.'),
            plain(52, 'And when Samlah was dead, Shaul of Rehoboth by the river reigned in his stead.'),
            plain(53, 'And when Shaul was dead, Baal-hanan the son of Achbor reigned in his stead.'),
            plain(54, 'And when Baal-hanan was dead, Hadad reigned in his stead: and the name of his city was Pai; and his wife\'s name was Mehetabel, the daughter of Matred, the daughter of Mezahab.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esau-genealogy',
          html:
            'The genealogy of Esau takes up more space than one might expect. Esau, the twin brother of Jacob (Israel), did not receive the blessing or the birthright. He sold his birthright for a bowl of lentils and married outside the covenant family. Yet the Chronicler does not dismiss him. Esau\'s sons are named. His grandsons are named. The peoples descended from him — the Edomites — have their genealogy preserved in Scripture.',
        },
        {
          kind: 'hebrew',
          id: 'edom-red',
          title: 'Edom — "Red"',
          script: 'אֱדוֹם',
          translit: '<strong>Edom</strong> · red; the red one',
          description:
            'Esau is called "Edom" — "the red one" — because he sold his birthright for red lentils. The name is a perpetual reminder of the choice he made. Yet "Edom" also becomes the name of his descendants and their land, south of the Dead Sea. The Edomites are Israel\'s nearest neighbors, often allied with them, sometimes at war with them. But they have their genealogy. They have their story.',
        },
        {
          kind: 'commentary',
          id: 'edomite-kings',
          html:
            'The text notes that kings reigned in Edom "before any king reigned over Israel." This is a remarkable statement. Edom had established monarchy, stable succession, and organized government while Israel was still wandering and settling. Edom was not the chosen line, but Edom was not abandoned by God. Edom had its own history, its own achievements. The genealogy honors Edom\'s kings not because they are part of the covenant line, but because they are part of the human family that God created and sustains.',
        },
        {
          kind: 'commentary',
          id: 'seir-peoples',
          html:
            'The genealogy also includes the sons of Seir — the original inhabitants of the land that Esau (Edom) took as his inheritance. These are indigenous peoples, and their genealogy is preserved. The text does not erase them; it remembers them. Even as conquest narratives dominate later biblical history, the genealogy says: These people mattered. God knew their names.',
        },
        {
          kind: 'christ',
          id: 'christ-genealogy',
          title: 'Christ Connection — The Last Adam and the Genealogy of Promise',
          html:
            'Matthew and Luke both open the New Testament with genealogies of Jesus. Matthew traces Jesus backward from Abraham through David to Jesus—the narrowing we see in 1 Chronicles, but taken one step further. Jesus is "the son of David, the son of Abraham" (Matthew 1:1). He is the culmination of the genealogy. But more profoundly, Paul describes Jesus as "the Last Adam" (1 Corinthians 15:45). Just as Adam was the first of humanity, Jesus is the Last Adam—the one through whom God\'s intention for humanity is perfected and completed. Every genealogy in Scripture is a genealogy pointing toward Jesus. Every name in the line is a name on the road to Christ. And in Christ, the narrowing genealogy opens outward again—the promise given to Abraham ("In you all the nations of the earth shall be blessed") finds its fulfillment when the gospel is proclaimed to all peoples.',
        },
        {
          kind: 'carry',
          html:
            'The Chronicler\'s willingness to name Esau\'s line at length tells us something important. Not everyone follows the same path. Not everyone receives the same calling. But no one is outside God\'s memory or care. Esau will never be king over Israel. His line will never carry the covenant forward. But his children are remembered. His genealogy is recorded. His descendants had their own kingdoms, their own stories. The genealogy teaches us that God\'s purpose is narrow—focused, particular, intentional—but God\'s love is boundless. All humanity descends from Adam. All the nations descend from Noah. And in the end, the Gospel—the good news of Christ—is for all peoples, not just the narrow covenant line.',
        },
        {
          kind: 'reflection',
          id: 'esau-dignity',
          prompt: 'Esau did not receive the blessing, yet his genealogy is carefully preserved. What does it mean that God honors those who are not part of the "main story" or the primary calling? How does that shape your understanding of God\'s care?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
