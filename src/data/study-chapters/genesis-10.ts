import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 10 - the Table of Nations.
 *
 * After the Flood, Noah's three sons repopulate the earth. The chapter
 * names seventy nations descended from Japheth, Ham, and Shem - a genealogy
 * that is not mere record-keeping but a statement about God's care for every
 * people. Nimrod, "mighty hunter before the LORD," and the Canaanite cities
 * (seedbed of chapter 11's Babel) take stage. The chapter closes with Eber
 * and the line leading to Abram. The Bible insists: every nation is named.
 * Every line matters to God.
 */
export const GENESIS_10: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 10,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Genesis 10 is genealogy - page after page of names, mostly Hebrew ears unfamiliar to modern readers. But do not skim it. This chapter is Genesis answering a question: after the Flood wiped the earth clean, how did humanity branch into the nations we know? The answer: through three sons of Noah. Seventy peoples descended from them. Seventy different languages, lands, and identities - all named, all descended, all held in God\'s knowledge.',
    'This is remarkable. In the ancient world, genealogies were power documents. A king might list his conquests or his priests, his treasures or his cities. Genesis lists nations. It says: your people matters to God. Your land is in His book. You are not too small, too distant, too obscure for Him to know and name. The chapter even slows down for characters like Nimrod, the mighty hunter, and the cities of the Canaanites - the very peoples Abraham will later enter into conflict with. Genesis knows them first as Shem\'s cousins, descended from the same Flood-survivor, bearers of the same divine image. Before judgment comes knowledge. Before conquest comes kinship.',
  ],

  sections: [
    /* ─── Genesis 10:1-5 - Japheth: The Seafaring North ─────────────── */
    {
      ref: 'Genesis 10:1-5',
      title: 'Japheth: The Seafaring North',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the '),
                hy('generations of the sons of Noah', 'hebrew-toledot'),
                t(': '),
                hg('Shem, Ham, and Japheth', 'c-three-sons'),
                t(': and unto them were sons born after the flood.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('The sons of Japheth; '),
                hg('Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras', 'c-japheth-list'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('By these were the isles of the Gentiles divided in their lands; every one after his tongue, after their families, in their nations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-sons',
          html:
            'The order is Shem, Ham, Japheth - but Japheth appears first in the genealogies. He spreads to the isles, the maritime peoples: Javan (the Greeks), Tubal and Meshech (the north), Madai (the Medes). Later Ezekiel will summon them by name as nations in Israel\'s future. Here they are newborn, already blessed with land and sea[res:sefaria-genesis-10][res:bibleodyssey-table-of-nations].',
        },
        {
          kind: 'commentary',
          id: 'c-japheth-list',
          html:
            'The sons of Japheth traced largely to the coastlands and the north - the seafaring Mediterranean world. Javan becomes Ionia, the Greeks. This is the ancestor of the culture that will later meet and wrestle with Hebrew thought. But here at the start, all peoples are simply listed side by side. There is no hierarchy, no conquest, no conflict. Only names and land[res:pennmuseum-ancient-near-east].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-toledot',
          title: 'Toledot - "generations"',
          script: 'תּוֹלְדוֹת',
          translit: '<strong>toledot</strong> · generations, family lines, descendants',
          description:
            'The word <em>toledot</em> is the book-marker of Genesis. It appears at Genesis 2:4, 5:1, 10:1, 11:10, 11:27, and more. Each time it says: here is a new family line, a new branch. Genesis is not one story; it is a genealogy branching out - and God cares about every twig.',
        },
        {
          kind: 'carry',
          html:
            'You live in a nation someone traced back to Japheth\'s line. So do Christians in a hundred other countries. The Bible knows your people by name before you are born, before you take a breath. Your language, your land, your customs - they are not accidents in God\'s story. They are part of the branching He watched. That sense you have that you belong somewhere, to something - that you are not a rootless wanderer but a person with place and people - that sense is biblical. Genesis plants it in chapter 10 before the first empire ever rises.',
        },
        {
          kind: 'reflection',
          id: 'gen10-japheth',
          prompt:
            'What nation, people, or land do you call home? How would it change your prayer if you believed God named your people before the world was divided?',
        },
      ],
    },

    /* ─── Genesis 10:6-20 - Ham: The Canaanite South & Nimrod ─────────── */
    {
      ref: 'Genesis 10:6-20',
      title: 'Ham: Cush, Mizraim, Put, and Canaan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 6,
              spans: [
                t('And the sons of Ham; '),
                hg('Cush, and Mizraim, and Put, and Canaan', 'c-ham-list'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the sons of Cush; '),
                hg('Seba, and Havilah, and Sabtah, and Raamah, and Sabtechah', 'c-cush-list'),
                t(': and the sons of Raamah; Sheba, and Dedan.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Cush begat '),
                hp('Nimrod', 'christ-nations'),
                t(': he began to be a mighty one in the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-10-78mid-1',
          html: 'The sons of Noah scatter across the map, and then--Nimrod. The first builder of kingdoms, he breaks the quiet of genealogy with ambition.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 9,
              spans: [
                t('He was a '),
                hy('mighty hunter before the Lord', 'hebrew-nimrod'),
                t(': wherefore it is said, Even as Nimrod the mighty hunter before the Lord.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the beginning of his kingdom was '),
                hg('Babel, and Erech, and Accad, and Calneh, in the land of Shinar', 'c-babel-cities'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Out of that land went forth Asshur, and builded Nineveh, and the city Rehoboth, and Calah,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Resen between Nineveh and Calah: the same is a great city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen10-nimrod-end',
          html:
            'Nimrod&apos;s empire spans from Babel to the great cities of Assyria. The text catalogs his dominion-Nineveh, Rehoboth, Calah, Resen-a dynasty built on conquest and power. But now the focus shifts. The next verses move south from Mesopotamia to Egypt and the Canaanite coastal lands. Each branch of Ham&apos;s line shaped a different corner of the world Israel will enter.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('And Mizraim begat Ludim, and Anamim, and Lehabim, and Naphtuhim,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Pathrusim, and Casluhim, (out of whom came the Philistines,) and Caphtorim.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Canaan begat Sidon his firstborn, and '),
                hg('Heth', 'c-canaan-peoples'),
                t(','),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the Jebusite, and the Amorite, and the Girgasite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-10-78mid-2',
          html: 'From Babel and Nineveh, the eye shifts westward--to Egypt, Sidon, Canaan. Empire gives way to tribal identity.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 17,
              spans: [
                t('And the Hivite, and the Arkite, and the Sinite,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Arvadite, and the Zemarite, and the Hamathite: and afterward were the families of the Canaanites spread abroad.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the border of the Canaanites was from Sidon, as thou comest to Gerar, unto Gaza; as thou goest, unto Sodom, and Gomorrah, and Admah, and Zeboim, even unto Lasha.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('These are the sons of Ham, after their families, by their tongues, in their countries, and in their nations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ham-list',
          html:
            'Ham&apos;s sons map to the ancient world as it stood: Cush (Ethiopia, Nubia), Mizraim (Egypt - the name itself is Hebrew for Egypt), Put (Libya, North Africa), and Canaan. These were the peoples Israel would most directly encounter - Egypt as a place of both refuge and slavery, the Canaanites as the inhabitants of the Promised Land.',
        },
        {
          kind: 'commentary',
          id: 'c-babel-cities',
          html:
            'Babel, Erech, Accad, Calneh - the seeds of the great cities of Mesopotamia. In just one more chapter, Babel becomes the site of confusion, the tower reaching to heaven. But here Babel is simply where Nimrod\'s kingdom begins. The text does not yet condemn it. That judgment comes in chapter 11. Here it only names the place and the man.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nimrod',
          title: 'Nimrod - "mighty hunter"',
          script: 'נִמְרֹד',
          translit: '<strong>nimrod</strong> · possibly from the root meaning "to rebel"',
          description:
            'Even Nimrod\'s name is contested among scholars. Some trace it to the verb "we shall rebel" - suggesting that rebellion, not just might, marks his line. He is called <em>gibbor</em>, a mighty one, and his hunting is explicitly "before the LORD" - as if God is watching this ambition unfold. Nimrod will birth the impulse that Babel tries to realize: human power reaching skyward.',
        },
        {
          kind: 'commentary',
          id: 'c-cush-list',
          html:
            'Cush\'s line spreads to Arabia and East Africa. Sheba, from Raamah\'s sons, will later send a queen to test Solomon\'s wisdom (1 Kings 10). Havilah is mentioned in Genesis 2 as a place where gold is found. The Bible maps the world by its peoples and its riches, and everything is held in God\'s knowledge.',
        },
        {
          kind: 'commentary',
          id: 'c-canaan-peoples',
          html:
            'The Canaanite peoples are listed by family: Sidon, Heth (the Hittites), Jebusites, Amorites, Girgasites, Hivites, Arkites, Sinites, Arvadites, Zemarites, Hamathites. Each name will appear again in later biblical history - sometimes as neighbors, sometimes as obstacles, often as peoples Israel will marry into. But in Genesis 10, they are simply Shem&apos;s cousins, named and held in the same divine account.',
        },
        {
          kind: 'christ',
          id: 'christ-nations',
          title: 'Christ Connection - Every Nation Known',
          html:
            'Luke 10 echoes Genesis 10. Jesus appoints <em>seventy</em> disciples to go before Him "to every place he himself would come." The number mirrors the Table of Nations. Jesus is saying: I am sending My witnesses to <em>all the peoples Genesis named</em>. Acts 17:26 grounds it in this very chapter: "God hath made of one blood all nations of men for to dwell on all the face of the earth." And Revelation 7:9 shows the harvest: "a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, standing before the throne... and before the Lamb." Genesis 10 is not just history. It is the mission statement of the Church written backward in time.',
        },
        {
          kind: 'carry',
          html:
            'You know the name of someone from a nation different from your own. Invite them to coffee. Listen to their story - where they come from, how they understand God, what they hope for. The Bible says that person&apos;s nation was known by name before the foundations of the world. Their people matter. Their voice matters. The Gospel does not reach "the world" in abstraction; it reaches <em>nations</em>, <em>peoples</em>, real families with names and faces. You can be part of that reaching.',
        },
        {
          kind: 'reflection',
          id: 'gen10-ham',
          prompt:
            'Genesis 10 names the Canaanites - the very peoples Israel will struggle with for centuries. How does knowing they were Shem&apos;s cousins, named at creation, change how you read those later conflicts?',
        },
        {
          kind: 'artwork',
          matchTitle: /nimrod|hunter/i,
          caption: 'Genesis 10:8-9 · Nimrod, Mighty Hunter',
        },
      ],
    },

    /* ─── Genesis 10:21-32 - Shem: The Semitic Line to Eber & Abram ──── */
    {
      ref: 'Genesis 10:21-32',
      title: 'Shem: The Line Toward Abraham',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 21,
              spans: [
                t('Unto Shem also, the father of all the children of '),
                hy('Eber', 'hebrew-eber'),
                t(', the brother of Japheth the elder, even to him were children born.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('The sons of Shem; '),
                hg('Elam, and Asshur, and Arphaxad, and Lud, and Aram', 'c-shem-list'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the sons of Aram; Uz, and Hul, and Gether, and Mash.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Arphaxad begat Salah; and Salah begat '),
                hg('Eber', 'c-eber-semite'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And unto Eber were born two sons: the name of one was '),
                hg('Peleg', 'c-peleg'),
                t('; for in his days was the earth divided; and his brother\'s name was Joktan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen10-shem-pivot',
          html:
            'Two brothers, two destinies. Peleg&apos;s line will narrow toward Abraham; Joktan&apos;s will fan out across Arabia. The text does not yet privilege one over the other - it just names them and turns the camera to Joktan&apos;s sons. The promised line is hidden inside an ordinary genealogy, the way it always is.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 26,
              spans: [
                t('And Joktan begat Almodad, and Sheleph, and Hazarmaveth, and Jerah,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Hadoram, and Uzal, and Diklah,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Obal, and Abimael, and Sheba,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-10-78mid-3',
          html: 'Now we turn to Shem, and the view narrows. From Shem will come Abraham, Isaac, Jacob--the line that changes everything.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 29,
              spans: [
                t('And Ophir, and Havilah, and Jobab: all these were the sons of Joktan.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And their dwelling was from Mesha, as thou goest unto Sephar a mount of the east.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('These are the sons of Shem, after their families, by their tongues, in their lands, after their nations.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('These are the families of the sons of Noah, after their generations, in their nations: and by these were the nations divided in the earth after the flood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shem-list',
          html:
            'Shem\'s line runs through Arphaxad, Salah, and Eber - and through Eber the line will trace to Abraham, Isaac, Jacob, and eventually to every Israelite and the Messiah Himself. But here at the start, Shem\'s sons are simply named: Elam (ancient Iran), Asshur (Assyria), Lud (Lydia), Aram (Syria, the Arameans who would speak Jesus\'s language centuries later). Each is a nation God knows.',
        },
        {
          kind: 'commentary',
          id: 'c-peleg',
          html:
            'Peleg means "division" - and the text notes that in his days "was the earth divided." Most scholars read this as a reference to the events of chapter 11, when God confused languages at Babel. But the text itself leaves it open. It could mean continental drift, could mean the division of languages, could mean something else entirely. The Bible says the earth was divided. When, how, and into what - that remains a question every reader must wrestle with.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eber',
          title: 'Eber - "one from beyond"',
          script: 'עֵבֶר',
          translit: '<strong>eber</strong> · beyond, across, the far side',
          description:
            'Eber is the ancestor whose name becomes "Hebrew" - <em>ivrit</em> in modern Hebrew, <em>Ebrites</em> in ancient text. To be Hebrew is to be "from beyond" - beyond the Euphrates, beyond the familiar, on the far side of exile and wandering. The name holds the destiny: a people perpetually displaced, always returning, always moving from promise to promise.',
        },
        {
          kind: 'commentary',
          id: 'c-eber-semite',
          html:
            'Eber\'s line splits between Peleg (whose line leads through Salah to Abraham) and Joktan (whose sons inhabit Arabia). The "sons of Eber" embraces them both - the Hebrews through Abraham and the Arabian peoples through Joktan. All are cousins. All are named. The schism comes later; here they are simply born of one ancestor, one grandfather, one Flood.',
        },
        {
          kind: 'christ',
          id: 'christ-eber',
          title: 'Christ Connection - From One Blood',
          html:
            'Acts 17:26 quotes Genesis 10 directly: "God hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation; that they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us." Every nation, every border, every time and place - all orchestrated. All within God\'s sight. And all ordained so that <em>they might seek and find Him.</em> The Table of Nations is not a genealogy divorced from salvation history. It is the stage on which salvation unfolds.',
        },
        {
          kind: 'carry',
          html:
            'In the coming months or years, watch for the moment when someone from a nation or people you knew nothing about suddenly appears in your life - a coincidence, a stranger, an unlikely friendship. Don\'t dismiss it as mere chance. Genesis 10 says God set the boundaries of every nation and "determined the times before appointed." That person\'s presence in your story is intentional. They may be there to teach you something, to broaden your heart, to be part of God\'s reaching across the divisions humans create. See them as Genesis saw them: named, known, placed by God.',
        },
        {
          kind: 'reflection',
          id: 'gen10-shem',
          prompt:
            'You are descended from one of the seventy nations of Genesis 10. Where in your own line can you trace God\'s hand - a border crossed, a family preserved, a stranger who became family? What does that tell you about God\'s care for your people?',
        },
        {
          kind: 'artwork',
          matchTitle: /babel|tower|confusion/i,
          caption: 'Genesis 10-11 · The Tower Built and Confused',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 10',
    quote:
      'From the three sons of Noah descended seventy nations - each named, each known to God, each given a place and a tongue. Before judgment came in chapter 11, the Bible named them all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-10',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 10 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.10',
      description: 'Hebrew text with rabbinic commentary on the Table of Nations.',
    },
    {
      id: 'bibleodyssey-table-of-nations',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Table of Nations',
      url: 'https://www.bibleodyssey.org/articles/table-of-nations/',
      description: 'SBL overview of the genealogical structure and its historical context.',
    },
    {
      id: 'pennmuseum-ancient-near-east',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Ancient Near Eastern Civilizations',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Museum resources on the ancient nations and peoples named in Genesis 10.',
    },
  ],
};
