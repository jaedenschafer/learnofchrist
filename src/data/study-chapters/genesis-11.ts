import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 11 — the Tower of Babel and the narrowing toward Abram.
 *
 * The chapter closes the prehistory. Unified humanity attempts to build a tower
 * to heaven and make a name for themselves. God scatters them by language.
 * Then a genealogy from Shem to Terah and Abram, ending with the pivot: Terah
 * begins the journey to Canaan.
 */
export const GENESIS_11: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 11,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Genesis 11 closes the prehistory. Two chapters ago, humanity was scattered by the flood — only Noah and his sons remained. Now they are gathered again, speaking one language, moving as one. And in their unity, they dream an audacious dream: a tower whose top reaches into heaven, a name for themselves that cannot be forgotten.',
    'The chapter has two halves. The first nine verses are a judgment story: God sees the pride, comes down, scatters the people by breaking their language. The next twenty-three verses are a genealogy, not a punishment. A quiet narrowing. From the line of Shem, God picks one family. From that family, one man. From that man, a whole new story will begin.',
    'This is where the Bible begins to narrow. The first eleven chapters span creation, the Fall, the flood, and the reshaping of humanity itself. After Genesis 11, the lens tightens. Everything to come — three thousand years of history — will move toward one family, one nation, one king, one redemptive moment. Genesis 11 is the hinge.',
  ],

  sections: [
    /* ─── Genesis 11:1–4 — The Tower and the City ──────────────────────── */
    {
      ref: 'Genesis 11:1–4',
      title: 'The Tower and the City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And the whole earth was of '),
                hg('one language, and of one speech', 'c-one-language'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [t('And it came to pass, as they journeyed from the east, that they found a plain in the land of Shinar; and they dwelt there.')],
            },
            {
              number: 3,
              spans: [
                t('And they said one to another, Go to, '),
                hg('let us make brick, and burn them thoroughly', 'c-make-brick'),
                t('. And they had brick for stone, and slime had they for morter.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they said, Go to, '),
                hg('let us build us a city and a tower, whose top may reach unto heaven; and let us make us a ', 'c-scatter-fear'),
                hy('name', 'hebrew-shem'),
                t(', lest we be scattered abroad upon the face of the whole earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-one-language',
          html:
            'One language. One speech. The text emphasizes unity. After the flood splintered the world by family and ethnic line, humanity is reassembled, speaking in unison. But unity without wisdom is not a blessing. They move toward a common purpose, but that purpose is not obedience to God — it is self-made permanence[res:sefaria-genesis-11][res:britishmuseum-ziggurat].',
        },
        {
          kind: 'commentary',
          id: 'c-make-brick',
          html:
            'The work is practical, even impressive. Baked brick and bitumen mortar — real technique, real engineering. This is not a fantasy tower. This is what humans can do when they organize labor and resources. The problem is not the craft; it is the heart. They build not to glorify God, but to glorify themselves[res:bibleodyssey-babel-tongues].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shem',
          title: 'Shem — &ldquo;name&rdquo;',
          script: 'שֵׁם',
          translit: '<strong>shem</strong> · a name, reputation, renown',
          description:
            'The word is both a common noun (<em>shem</em>, a name) and the proper name of one of Noah&apos;s sons. The tower-builders want to <em>make us a shem</em> — secure a name, immortalize themselves. But the chapter will then follow the line of <em>Shem</em> himself, and in that line, God will do what the builders could not: establish a <em>name</em> that truly endures. The wordplay is deliberate.',
        },
        {
          kind: 'commentary',
          id: 'c-scatter-fear',
          html:
            'They are driven by fear: <em>lest we be scattered abroad.</em> The flood is still in living memory. Noah&apos;s sons spread out across the earth (Genesis 10), and now the post-flood generation clings together, building a monument that will anchor them. But they are building against God&apos;s command. Genesis 9:1 says &ldquo;Be fruitful, and multiply, and replenish the earth.&rdquo; Spreading across the earth is obedience. Gathering in defiance is pride.',
        },
        {
          kind: 'carry',
          html:
            'When you sense that your security depends on your reputation — on making a <em>name</em> for yourself that will not be forgotten — you are building a tower. The ambition itself is not wicked. But when it is not rooted in obedience to God, it becomes a form of idolatry. Your name matters only because God knows it. Everything you build to secure yourself will eventually scatter. The only enduring <em>name</em> is the one God gives.',
        },
        {
          kind: 'reflection',
          id: 'gen11-name',
          prompt: 'What are you building to secure your name? What would it look like to lay that tower down and trust that God knows who you are?',
        },
      ],
    },

    /* ─── Genesis 11:5–9 — God Comes Down ──────────────────────────────── */
    {
      ref: 'Genesis 11:5–9',
      title: 'God Comes Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 5,
              spans: [
                t('And the LORD came down to see the city and the tower, which the children of men '),
                hg('builded', 'c-came-down'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the LORD said, Behold, the people is one, and they have all one language; and this they begin to do: and now '),
                hg('nothing will be restrained from them, which they have imagined to do', 'c-restrained'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Go to, let us go down, and there confound their language, that they may not understand one another&apos;s speech.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('So the LORD '),
                hy('scattered them abroad', 'hebrew-balal'),
                t(' from thence upon the face of all the earth: and they left off to build the city.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Therefore is the name of it called '),
                hy('Babel', 'hebrew-babel'),
                t('; because the LORD did there confound the language of all the earth: and from thence did the LORD scatter them abroad upon the face of all the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-came-down',
          html:
            'God comes down. The same verb used of the Spirit hovering over the chaos in Genesis 1:2. God doesn&apos;t speak from a distance; He descends to see, to assess, to act. And the irony is sharp: the humans build a tower <em>whose top may reach unto heaven</em>, yet God must come <em>down</em> to see it. A building that reaches toward heaven is so small God has to stoop.',
        },
        {
          kind: 'commentary',
          id: 'c-restrained',
          html:
            'God recognizes the danger: unified, speaking one language, the humans can accomplish anything they imagine. This is not praise. This is a warning. A people with no internal friction, no diversity of voice or tongue, becomes a people capable of any atrocity. God does not stop the tower to punish small ambitions; He stops it to prevent the centralized evil that unified pride can commit.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-balal',
          title: 'Balal — &ldquo;to confound&rdquo;',
          script: 'בָּלַל',
          translit: '<strong>balal</strong> · to confuse, to jumble, to scatter the sense of',
          description:
            'Babel (<em>Bavel</em>) comes from this root. The Babylonians called their city <em>Bab-el</em>, &ldquo;the gate of god.&rdquo; But Genesis turns the sound into a verb of judgment. <em>Balal</em> — to confuse, to jumble. The same syllables the Babylonians heard as divine grandeur, Genesis hears as divine judgment. Power and pride sound grand until God speaks.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-babel',
          title: 'Babel — &ldquo;confusion&rdquo;',
          script: 'בָּבֶל',
          translit: '<strong>Babel</strong> · confusion (wordplay on <em>balal</em>, to confuse)',
          description:
            'The city name becomes a monument to judgment rather than achievement. What the builders meant as a gate to heaven becomes forever marked as a place of confusion. The wordplay is intentional: the same city the pagans celebrate as <em>Bab-el</em> is recorded in scripture as the place where <em>balal</em> happened — where God confused the languages and scattered the proud.',
        },
        {
          kind: 'christ',
          id: 'christ-babel-pentecost',
          title: 'Christ Connection — Babel Reversed',
          html:
            'Babel is the judgment of linguistic division. God scatters. But on the day of Pentecost, two thousand years into the future, the same God reverses the judgment. Believers from every nation hear the gospel <em>in their own tongue</em>: &ldquo;How hear we every man in our own language wherein we were born?&rdquo; (Acts 2:8). Where Babel scatters and confuses, Pentecost gathers and clarifies. And how does it happen? God sends His Spirit (Acts 2:4) — the same Spirit hovering over the chaos at creation. Christ does not build a higher tower. He rebuilds the broken unity, not by crushing diversity, but by making every voice hear the gospel in its own language. Where Babel says &ldquo;Let us make a name for ourselves,&rdquo; Pentecost says &ldquo;Let every nation call on the name of Jesus.&rdquo;',
        },
        {
          kind: 'carry',
          html:
            'God does not punish the people of Babel by destroying them. He scatters them. Breaking their unity — their ability to act as one — is itself the mercy. It stops them before their unified pride commits atrocities that echoes through history. Fragmentation, difference, the difficulty of understanding one another — these are sometimes not curses, but gifts. They slow us down. They require us to listen. They prevent any single voice from monopolizing power.',
        },
        {
          kind: 'reflection',
          id: 'gen11-unity',
          prompt: 'Where in your world do you see unified pride attempting to make a name for itself? And where do you see diversity and different voices actually slowing down harm?',
        },
      ],
    },

    /* ─── Genesis 11:10–26 — The Line of Shem ────────────────────────── */
    {
      ref: 'Genesis 11:10–26',
      title: 'The Line Narrows: Shem to Terah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 10,
              spans: [t('These are the generations of Shem: Shem was an hundred years old, and begat Arphaxad two years after the flood:')],
            },
            {
              number: 11,
              spans: [t('And Shem lived after he begat Arphaxad five hundred years, and begat sons and daughters.')],
            },
            {
              number: 12,
              spans: [t('And Arphaxad lived five and thirty years, and begat Salah:')],
            },
            {
              number: 13,
              spans: [t('And Arphaxad lived after he begat Salah four hundred and three years, and begat sons and daughters.')],
            },
            {
              number: 14,
              spans: [t('And Salah lived thirty years, and begat Eber:')],
            },
            {
              number: 15,
              spans: [t('And Salah lived after he begat Eber four hundred and three years, and begat sons and daughters.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen11-eber-bridge',
          html:
            'Eber emerges as the turning point. From Shem through Arphaxad and Salah comes Eber, whose name means "the other side"—the one who stands at the threshold. The generations before him lived hundreds of years, but now lifespans are shortening. What matters is not the length of any single life, but the unbroken link: each father begets a son who will carry the promise forward.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 16,
              spans: [t('And Eber lived four and thirty years, and begat Peleg:')],
            },
            {
              number: 17,
              spans: [t('And Eber lived after he begat Peleg four hundred and thirty years, and begat sons and daughters.')],
            },
            {
              number: 18,
              spans: [t('And Peleg lived thirty years, and begat Reu:')],
            },
            {
              number: 19,
              spans: [t('And Peleg lived after he begat Reu two hundred and nine years, and begat sons and daughters.')],
            },
            {
              number: 20,
              spans: [t('And Reu lived two and thirty years, and begat Serug:')],
            },
            {
              number: 21,
              spans: [t('And Reu lived after he begat Serug two hundred and seven years, and begat sons and daughters.')],
            },
            {
              number: 22,
              spans: [t('And Serug lived thirty years, and begat Nahor:')],
            },
            {
              number: 23,
              spans: [t('And Serug lived after he begat Nahor two hundred years, and begat sons and daughters.')],
            },
            {
              number: 24,
              spans: [t('And Nahor lived nine and twenty years, and begat Terah:')],
            },
            {
              number: 25,
              spans: [t('And Nahor lived after he begat Terah an hundred and nineteen years, and begat sons and daughters.')],
            },
            {
              number: 26,
              spans: [t('And Terah lived seventy years, and begat Abram, Nahor, and Haran.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen11-split-1',
          html:
            'After Babel, from Shem to Salah—five generations of faithful descent. Then comes Eber, whose name means "the other side." He lived to see the language divide heal into a single family, a single line. Eber is the bridge between the scattered languages and the covenant to come.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 16,
              spans: [t('And Eber lived four and thirty years, and begat Peleg:')],
            },
            {
              number: 17,
              spans: [t('And Eber lived after he begat Peleg four hundred and thirty years, and begat sons and daughters.')],
            },
            {
              number: 18,
              spans: [t('And Peleg lived thirty years, and begat Reu:')],
            },
            {
              number: 19,
              spans: [t('And Peleg lived after he begat Reu two hundred and nine years, and begat sons and daughters.')],
            },
            {
              number: 20,
              spans: [t('And Reu lived two and thirty years, and begat Serug:')],
            },
            {
              number: 21,
              spans: [t('And Reu lived after he begat Serug two hundred and seven years, and begat sons and daughters.')],
            },
            {
              number: 22,
              spans: [t('And Serug lived thirty years, and begat Nahor:')],
            },
            {
              number: 23,
              spans: [t('And Serug lived after he begat Nahor two hundred years, and begat sons and daughters.')],
            },
            {
              number: 24,
              spans: [t('And Nahor lived nine and twenty years, and begat Terah:')],
            },
            {
              number: 25,
              spans: [t('And Nahor lived after he begat Terah an hundred and nineteen years, and begat sons and daughters.')],
            },
            {
              number: 26,
              spans: [t('And Terah lived seventy years, and begat Abram, Nahor, and Haran.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen11-genealogy',
          html:
            'After Babel scatters humanity, the text zooms in. From all the nations of the earth, we follow <em>one line</em>. Shem. Then Arphaxad. Then Salah. Then the narrowing continues, generation by generation, each grandfather handing the promise down to his son. Each begat and lived and died — the same pattern through Genesis 5, a rhythm like a heartbeat. But behind the genealogy is a purpose. God is not done with humanity. He will start again, with one man, in one place, for one covenant.',
        },
        {
          kind: 'commentary',
          id: 'gen11-generations',
          html:
            'Notice the lifespans are shortening. Shem lived 600 years. Arphaxad, 438. Nahor, 148. The ancient patriarchs are living fewer years now, but the covenant-line is living on. What matters is not how long any one man lives, but whether he begets, whether he passes the line forward. This is the longest echo of creation: to be fruitful, to multiply, to hand the story to the next generation.',
        },
        {
          kind: 'carry',
          html:
            'You are a link in a chain. Not the beginning, not the end, but one generation standing between the promises God made to your ancestors and the future your children will inhabit. The genealogy can feel dry — just names and ages — until you recognize it as a love story. Every single name here is someone who received the promise from the past and passed it to the future. Whatever you do to faithfully hand the story forward, to teach the next generation what God has done, is the same work as Shem, Arphaxad, and Terah.',
        },
        {
          kind: 'reflection',
          id: 'gen11-chain',
          prompt: 'What did you receive from those who came before you? What will you pass on to the generation after?',
        },
      ],
    },

    /* ─── Genesis 11:27–32 — Terah Leaves Ur ─────────────────────────── */
    {
      ref: 'Genesis 11:27–32',
      title: 'Terah Begins the Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 27,
              spans: [
                t('Now these are the generations of Terah: Terah begat '),
                hg('Abram, Nahor, and Haran', 'c-three-sons'),
                t('; and Haran begat Lot.'),
              ],
            },
            {
              number: 28,
              spans: [t('And Haran died before his father Terah in the land of his nativity, in Ur of the Chaldees.')],
            },
            {
              number: 29,
              spans: [
                t('And Abram and Nahor took them wives: the name of Abram&apos;s wife was Sarai; and the name of Nahor&apos;s wife, Milcah, the daughter of Haran.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But Sarai was barren; she had no child.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Terah took Abram his son, and Lot the son of Haran his son&apos;s son, and Sarai his daughter in law, his son Abram&apos;s wife; and they went forth with them '),
                hp('from Ur of the Chaldees, to go into the land of Canaan', 'christ-promise-land'),
                t('; and they came unto Haran, and dwelt there.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the days of Terah were two hundred and five years: and Terah died in Haran.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-sons',
          html:
            'Three sons: Abram, Nahor, Haran. Haran will be dead before Terah. Nahor will settle in the land of his birth. But Abram — the youngest, the unlikely one — will become the carrier of the promise. This pattern echoes through scripture: Isaac over Ishmael, Jacob over Esau, Judah over the firstborn. God does not choose based on birth order. He chooses based on covenant purpose.',
        },
        {
          kind: 'commentary',
          id: 'gen11-barren',
          html:
            'Sarai is barren. This detail is crucial. The promise God is about to make to Abram will require a son. But the woman God has chosen to be the mother cannot conceive. This is not accidental. God is about to ask Abram to believe the impossible. The child will come, but not through human effort or timing. It will be God&apos;s gift, God&apos;s miracle, God&apos;s word made flesh.',
        },
        {
          kind: 'commentary',
          id: 'gen11-ur',
          html:
            'Ur of the Chaldees. One of the great cities of the ancient world. Terah makes a decision that will reshape history: he leaves. He takes Abram, Sarai, Lot, and turns toward Canaan — a land he has never seen, with no promise yet spoken, no covenant yet signed. This is not a man following God&apos;s explicit command (that comes in Genesis 12). This is a man beginning to move. Genesis 12:1 will tell Abram to <em>go</em>; Genesis 11:31 shows Terah already going. Sometimes faith begins before the word is fully spoken.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-land',
          title: 'Christ Connection — The Promised Land Journey',
          html:
            'Abram leaves the city of man — Ur, with its towers and temples — to go toward a land he has never seen. This is the first step of the pilgrimage that will define the rest of scripture. Hebrews 11:10 reflects on this moment: Abram <em>looked for a city which hath foundations, whose builder and maker is God</em>. He left a city built by human hands to seek a city built by God. Revelation ends the same way: the holy city, the New Jerusalem, comes down from God, not built by human ambition but given as a gift. The entire arc of scripture is the story of humanity learning to leave the cities they build and enter the city God builds.',
        },
        {
          kind: 'carry',
          html:
            'Terah took the first step without a complete promise. He left without knowing the destination. This is how faith often begins: not with a grand vision, but with a single act of obedience, a turning of the feet toward a land you have never seen. If you are waiting for perfect clarity before you move, you may never move. Sometimes you leave Ur first, and the promise comes to you on the road.',
        },
        {
          kind: 'reflection',
          id: 'gen11-leave',
          prompt: 'What are you being asked to leave? What land — what future with God — are you being called to move toward, even without seeing the whole path?',
        },
        {
          kind: 'artwork',
          matchTitle: /babel|tower|babylon/i,
          caption: 'Genesis 11:1–9 · God Comes Down',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 11',
    quote:
      'Humanity unified in pride builds a tower to heaven. God scatters them by language. Then the line narrows: Shem to Abram, Ur to Canaan, the ancient world to the beginning of covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 11 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-11',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 11 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.11',
      description: 'Hebrew text with rabbinic commentary on Babel and the patrilineal line.',
    },
    {
      id: 'britishmuseum-ziggurat',
      kind: 'museum',
      source: 'British Museum',
      label: 'Mesopotamian Ziggurats and Babel',
      url: 'https://www.britishmuseum.org/collection/search?object=ziggurat',
      description: 'Artifacts and context on the ziggurat towers of ancient Mesopotamia that informed the Babel account.',
    },
    {
      id: 'bibleodyssey-babel-tongues',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Tower of Babel',
      url: 'https://www.bibleodyssey.org/dictionary/tower-babel/',
      description: 'SBL entry on Babel and the scattering of languages in ancient Near Eastern context.',
    },
  ],
};
