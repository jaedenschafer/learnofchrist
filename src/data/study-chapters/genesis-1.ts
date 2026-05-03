import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 1 — the gold-standard study guide. Every other chapter renders
 * with the same RichStudyGuide component and follows this shape.
 *
 * The text below was lifted verbatim from src/components/GenesisOneStudy.tsx
 * (the original hand-rolled JSX) so the rendered page is byte-identical.
 */
export const GENESIS_1: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 1,

  estimatedMinutes: { 5: 11, 10: 18, 15: 22 },
  intros: [
    'Genesis 1 tells how God brought the world into being over seven days. Days one through three form the spaces of creation — light, sky, land. Days four through six fill those spaces — sun and moon, fish and birds, animals and humans. Day seven, God rests. Each day follows the same pattern: God speaks, what He speaks comes to be, He calls it good.',
    'The chapter was written into a world full of other creation stories — Babylonian[res:enuma-elish-bm], Egyptian, Canaanite — with violent gods, cosmic battles, and humans made as slaves. Genesis answers them all[res:bibleodyssey-creation-stories]. One God. Creation by peaceful speech. Humans made in His image. And for the reader on this side of the cross, the fingerprints of Christ are already everywhere: the Word who speaks, the Light before the sun, the Image we are made after, the Rest we are invited into.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /creation/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Genesis 1',
    quote:
      'God created the world, light, sky, land, seas, plants, the sun, moon, stars, animals, and every living thing. He created men and women in His image, blessed them, and gave them responsibility to care for the earth and its creatures.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 1 · Study Guide',
  },

  resources: [
    {
      id: 'enuma-elish-bm',
      kind: 'museum',
      source: 'The British Museum',
      label: 'Enuma Elish, Tablet I (K.5419c)',
      url: 'https://www.britishmuseum.org/collection/object/W_K-5419-c',
      description:
        'The actual Neo-Assyrian clay tablet preserving the opening of the Babylonian creation epic — the very text Genesis 1 was written into and against. Tiamat is the chaos-sea goddess slain by Marduk; in Genesis, <em>tehom</em> is cognate with her name but demoted to mere dark water under God&apos;s Spirit.',
    },
    {
      id: 'bibleodyssey-creation-stories',
      kind: 'study',
      source: 'Bible Odyssey · Society of Biblical Literature',
      label: 'Creation Stories in the Bible',
      url: 'https://www.bibleodyssey.org/articles/creation-stories-in-the-bible/',
      description:
        'Open-access scholarly overview from the SBL placing Genesis 1 alongside Mesopotamian and Egyptian creation accounts, with attention to how the Genesis writer answers and reframes them.',
    },
    {
      id: 'sefaria-genesis-1',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 1 · Hebrew text + classical Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.1',
      description:
        'The Hebrew text of Genesis 1 with Rashi, Ibn Ezra, Ramban and other classical commentators side-by-side. Useful for tracing how Jewish tradition handled the <em>bara&apos;</em> vs <em>asah</em> distinction long before Christian readers ever did.',
    },
  ],

  sections: [
    /* ─── Genesis 1:1–2 — The Beginning ───────────────────────────────── */
    {
      ref: 'Genesis 1:1–2',
      title: 'The Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                hp('In the beginning', 'christ-word'),
                t(' God '),
                hy('created', 'c-bara'),
                t(' the heaven and the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bara',
          html:
            'God is not argued for — He is simply already there. Two Hebrew verbs run side by side through this chapter: <em>bara&apos;</em>[res:sefaria-genesis-1], a word whose subject is almost always God, and <em>asah</em>, &ldquo;to make, fashion, work.&rdquo; They trade places across the account — <em>bara&apos;</em> for humanity in verse 27, <em>asah</em> for the sun and stars in verse 16. Neither verb dictates <em>how</em> anything was made. <em>Bara&apos;</em> is used even where material clearly existed already, as in Genesis 5:2, which names the making of male and female humanity a <em>bara&apos;</em> act — yet Eve, we are told, was formed from Adam&apos;s side. Genesis is less interested in the mechanism than in the Maker.',
        },
        {
          kind: 'christ',
          id: 'christ-word',
          title: 'Christ Connection — The Word at Creation',
          html:
            'John opens his Gospel with the same three words Genesis opens with: <em>In the beginning</em>. &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God… All things were made by him&rdquo; (John 1:1, 3). Every time you read &ldquo;And God said&rdquo; in this chapter, John is telling you the one doing the speaking is Jesus. The Spirit of God is already hovering over the waters in verse 2. From Genesis 1:1, the God who creates is never working alone.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('And the earth was '),
                hy('without form, and void', 'c-tohu'),
                t('; and darkness was upon the face of '),
                hy('the deep', 'hebrew-tehom'),
                t('. And '),
                hp('the Spirit of God moved', 'c-spirit'),
                t(' upon the face of the waters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tohu',
          html:
            'The earth is described as <em>tohu wa-bohu</em> — &ldquo;wild and waste.&rdquo; Not evil, just unlivable. A shapeless, lifeless place, with the potential for life still locked inside it. This is the canvas God starts with.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tehom',
          title: 'Tehom — &ldquo;the deep&rdquo;',
          script: 'תְּהוֹם',
          translit: '<strong>tehom</strong> · the primeval chaos-waters',
          description:
            'Tehom is cognate with Tiamat[res:enuma-elish-bm], the chaos-sea goddess of Babylonian myth. In Genesis she is demoted to mere dark water. Nothing competes with God here.',
        },
        {
          kind: 'commentary',
          id: 'c-spirit',
          html:
            'Into that unfinished place, the Spirit of God is already <em>moving</em>. The Hebrew verb is used elsewhere of an eagle fluttering over its young (Deut. 32:11). God is tender over the chaos before He ever speaks.',
        },
        {
          kind: 'carry',
          html:
            'If anything in your life feels a little like <em>tohu wa-bohu</em> right now — shapeless, dim, not yet settled — the very first act of God in the Bible is to hover over a place exactly like that. The Spirit doesn&apos;t wait for the waters to calm. He is already moving, tender as an eagle over its young. Whatever part of your story still looks unformed is not outside His care; it is where He is most at home.',
        },
        {
          kind: 'reflection',
          id: 'beginning',
          prompt:
            "Where in your life does something look like tohu wa-bohu — unformed, dark, not yet livable? What would change if you actually believed God's Spirit is already moving over it?",
        },
      ],
    },

    /* ─── Day 1 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 1 · Genesis 1:3–5',
      title: 'Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('And God said, '),
                hp('Let there be light', 'christ-light'),
                t(': and there was light.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-light-before-sun',
          html:
            'Light appears before the sun, which does not arrive until day four. This is not a scientific oversight — it is a theological statement. Light is not first the product of a burning star; light is first a gift given directly by God. The sun will later be demoted to a lamp God made.',
        },
        {
          kind: 'christ',
          id: 'christ-light',
          title: 'Christ Connection — The True Light',
          html:
            '&ldquo;God is light, and in him is no darkness at all&rdquo; (1 John 1:5). The One who said <em>let there be light</em> on day one stepped into His own world and said, &ldquo;I am the light of the world&rdquo; (John 8:12). Paul draws the line directly: &ldquo;God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ&rdquo; (2 Cor. 4:6). The same voice, the same light — now with a face.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And God saw the light, that it was good: and God '),
                hy('divided the light from the darkness', 'c-havdil'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-havdil',
          html:
            'The Hebrew word for &ldquo;divided&rdquo; (<em>havdil</em>) is the priestly word for distinguishing the holy from the common. The first priestly act in the Bible is God&apos;s own — and every act of separation God makes through the rest of the chapter flows from this one.',
        },
        {
          kind: 'carry',
          html:
            'Before God ever fills a life, He very often begins with a line — <em>this is not that.</em> A priestly kind of separation, the text calls it. Looking back, you can almost always see them in your own story: a season when something quietly got named, a difference that finally became clear, a space that gently opened. Every such line has been His work. The ones you may be sensing now are probably His too.',
        },
        {
          kind: 'reflection',
          id: 'day-1',
          prompt:
            'What is the first line God may be asking you to draw this week — work hours from family hours, scrolling from presence, noise from silence? Name it.',
        },
        {
          kind: 'artwork',
          matchTitle: /separation of light/i,
          caption: 'Genesis 1:3–5 · Day One',
        },
      ],
    },

    /* ─── Day 2 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 2 · Genesis 1:6–8',
      title: 'The Expanse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('And God said, Let there be a '),
                hy('firmament', 'hebrew-raqia'),
                t(' in the midst of the waters, and let it divide the waters from the waters.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And God called the firmament Heaven. And the evening and the morning were the '),
                hg('second day', 'c-day2'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-day2',
          html:
            'Creation Day 2 is the only day without &ldquo;God saw that it was good.&rdquo; The separation begun here isn&apos;t finished until day three, when the land appears. A boundary by itself is never the goal — only what it makes room for.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-raqia',
          title: 'Raqia&apos; — &ldquo;firmament&rdquo;',
          script: 'רָקִיעַ',
          translit: '<strong>raqia&apos;</strong> · something hammered thin, like beaten metal',
          description:
            'Ancient Israelites pictured the sky as a solid dome holding back heavenly waters. Genesis works inside that picture — it is not teaching us astronomy; it is teaching us who made the sky.',
        },
        {
          kind: 'reflection',
          id: 'day-2',
          prompt: 'Where is God making room in your life right now? What do you sense He is making room for?',
        },
      ],
    },

    /* ─── Day 3 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 3 · Genesis 1:9–13',
      title: 'Dry Land and Green',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('And God said, Let the waters under the heaven be gathered together unto one place, and let '),
                hg('the dry land appear', 'c-dryland'),
                t(': and it was so.'),
              ],
            },
            {
              number: 10,
              spans: [t('And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dryland',
          html:
            'Dry land emerges out of the water. It becomes a pattern the Bible keeps returning to: Noah&apos;s ark coming to rest, Israel crossing the Red Sea, Israel crossing the Jordan. Salvation in Scripture almost always looks like dry ground appearing where there used to be only water.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('And God said, '),
                hg('Let the earth bring forth', 'c-bring-forth'),
                t(' grass, the herb yielding '),
                hp('seed', 'christ-seed'),
                t(', and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.'),
              ],
            },
            {
              number: 12,
              spans: [t('And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.')],
            },
            {
              number: 13,
              spans: [t('And the evening and the morning were the third day.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bring-forth',
          html:
            'God does not place plants on the earth Himself. He says, &ldquo;Let the earth bring forth,&rdquo; and grants the ground its own capacity to produce. From day three on, creation has a partner in its own fruitfulness. Plants arrive before the sun — life is rooted in God&apos;s word, not in sunlight.',
        },
        {
          kind: 'christ',
          id: 'christ-seed',
          title: 'Christ Connection — The Seed That Dies',
          html:
            'Three times in the Hebrew: seed, seed, seed. Jesus takes that image and makes it His own: &ldquo;Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit&rdquo; (John 12:24). The whole logic of day three — a seed holding life inside itself, buried in the ground, producing more than itself — is the logic of the cross and the empty tomb.',
        },
        {
          kind: 'carry',
          html:
            'Your spreadsheet, your sermon, your painting, your business, the meal you cooked tonight, the homework you helped with — none of these compete with God. They are echoes of day three: the ground bringing forth what He first planted in it. Ordinary work, done with a seed He gave you, <em>is</em> spiritual. Whatever small good thing came out of you today was already the earth obeying Him.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'day-3',
          prompt: 'What is actually bearing fruit in you right now? Where have you been too busy or too hard on yourself to notice it?',
        },
        {
          kind: 'artwork',
          matchTitle: /separation of the earth/i,
          caption: 'Genesis 1:9–10 · Day Three',
        },
      ],
    },

    /* ─── Day 4 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 4 · Genesis 1:14–19',
      title: 'Lights to Rule',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be '),
                hg('for signs, and for seasons, and for days, and years', 'c-rhythms'),
                t(':'),
              ],
            },
            {
              number: 15,
              spans: [t('And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rhythms',
          html:
            'God made a world of rhythms — morning and evening, summer and winter, planting and harvest. His creation moves in patterns, and His people are meant to live by them.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 16,
              spans: [
                t('And God made two great lights; '),
                hg('the greater light', 'c-lamps'),
                t(' to rule the day, and '),
                hg('the lesser light', 'c-lamps'),
                t(' to rule the night: '),
                hp('he made the stars also', 'christ-star'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [t('And God set them in the firmament of the heaven to give light upon the earth,')],
            },
            {
              number: 18,
              spans: [t('And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.')],
            },
            {
              number: 19,
              spans: [t('And the evening and the morning were the fourth day.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lamps',
          html:
            'Every culture around ancient Israel worshiped the sun and moon as gods. Genesis refuses to even name them. The sun is &ldquo;the greater light.&rdquo; The moon is &ldquo;the lesser light.&rdquo; The stars get one brief mention. What the nations worshiped, Genesis reduces to lamps. God alone is God.',
        },
        {
          kind: 'christ',
          id: 'christ-star',
          title: 'Christ Connection — Sun of Righteousness, Morning Star',
          html:
            'The final prophet of the Old Testament calls the coming Messiah &ldquo;the Sun of righteousness… with healing in his wings&rdquo; (Mal. 4:2). The final page of the New Testament has Jesus say, &ldquo;I am the root and the offspring of David, and the bright and morning star&rdquo; (Rev. 22:16). The sun and stars on day four are placeholders. The Light they point to eventually shows up in person — and when He does, the light of sun and stars becomes unnecessary: &ldquo;and the city had no need of the sun… for the Lamb is the light thereof&rdquo; (Rev. 21:23).',
        },
        {
          kind: 'carry',
          html:
            'Genesis demotes the sun and moon to lamps — and the things that keep taking over your life can be demoted too. The career that decides your mood. The phone that dictates where your attention goes. The person you can&apos;t imagine losing. The news cycle that pulls your whole day around. Pick one today and call it what Genesis calls the sun: a lamp. Useful, sometimes. Beautiful, sometimes. Not God. Jesus is the Light all of them were always pointing to — and only He belongs at the center of your sky.',
        },
        {
          kind: 'reflection',
          id: 'day-4',
          prompt:
            "What 'suns' have been quietly ruling your rhythms — career, approval, a screen, a relationship? What would it look like to demote them back to lamps, with God as the real light?",
        },
      ],
    },

    /* ─── Day 5 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 5 · Genesis 1:20–23',
      title: 'Fish and Birds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [t('And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.')],
            },
            {
              number: 21,
              spans: [
                t('And God created '),
                hg('great whales', 'c-seamonsters'),
                t(', and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seamonsters',
          html:
            'In the stories around Israel, sea monsters were terrifying rivals to the gods. Genesis calls them creatures — made by God, blessed by God, called good. The sea itself, which will be the Bible&apos;s ongoing symbol of chaos, is filled with things God delights in.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 22,
              spans: [
                t('And '),
                hg('God blessed them', 'c-blessing'),
                t(', saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.'),
              ],
            },
            {
              number: 23,
              spans: [t('And the evening and the morning were the fifth day.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing',
          html:
            'The first blessing in the Bible is spoken over a fish and a bird. Before humanity exists, God is blessing living things — not as a reward, but as the gift of life&apos;s capacity to keep going. There are exactly three blessings in the Genesis creation account: creatures, humans, and the seventh day. Blessing is not an afterthought in the Bible. It is the architecture of creation.',
        },
        {
          kind: 'carry',
          html:
            'The first blessing in the Bible is spoken over a bird and a fish. Before God even makes us, He is already delighting in small living things. A minute outside — a sparrow at the feeder, a tree leafing out, the face of someone you love — is a chance to simply agree with Him: &ldquo;it is good.&rdquo; No task, no program. Just the oldest kind of prayer there is.',
        },
        {
          kind: 'reflection',
          id: 'day-5',
          prompt: 'Where do you see blessing multiplying in your life beyond anything you could have produced on your own?',
        },
      ],
    },

    /* ─── Day 6 · Land Animals ────────────────────────────────────────── */
    {
      ref: 'Creation Day 6 · Genesis 1:24–25',
      title: 'Land Animals',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('And God said, Let the earth bring forth the living creature '),
                hg('after his kind', 'c-kinds'),
                t(', cattle, and creeping thing, and beast of the earth after his kind: and it was so.'),
              ],
            },
            {
              number: 25,
              spans: [t('And God made the beast of the earth after his kind, and cattle after his kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kinds',
          html:
            'God makes life in many kinds — each distinct, each specific, each good. Difference is not a problem in creation. It is a design.',
        },
      ],
    },

    /* ─── Day 6 · Image ───────────────────────────────────────────────── */
    {
      ref: 'Creation Day 6 · Genesis 1:26–28',
      title: 'Made in God&apos;s Image',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 26,
              spans: [
                t('And God said, '),
                hp('Let us make', 'c-letusmake'),
                t(' man in our '),
                hy('image', 'hebrew-tselem'),
                t(', after our '),
                hy('likeness', 'hebrew-tselem'),
                t(': and let them have '),
                hy('dominion', 'c-carved-image'),
                t(' over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-letusmake',
          html:
            'Notice the shift: &ldquo;Let <em>us</em> make.&rdquo; After five days of solo speech, God speaks in the plural for the first time. Readers across centuries have heard this &ldquo;us&rdquo; many ways — some hearing God addressing His heavenly court, some hearing Jesus already present with the Father, some simply noting the weight given to the moment humanity enters the story. Whatever the plural names, this climactic act comes out of relationship, not isolation.',
        },
        {
          kind: 'commentary',
          id: 'c-carved-image',
          html:
            'In the ancient world, a king would set up a carved image of himself in a distant province — a stone statue declaring <em>this land belongs to me.</em> Genesis uses exactly that word for human beings. Every person is a living statue God has set up in His world. The most revolutionary sentence in ancient literature is right here: not just the king, not just the priest, not just the elite — <em>every human</em> bears the image of God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tselem',
          title: 'Tselem — &ldquo;image&rdquo;',
          script: 'צֶלֶם',
          translit: '<strong>tselem</strong> · a carved statue; a royal representation',
          description:
            'The verb for dominion is <em>radah</em>, the royal word for how a king rules. Because humans are the image of a God who blesses, separates gently, and calls things good, we rule as He rules: by making space, filling it with life, and calling good what is good.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 27,
              spans: [
                t('So God created man in his own image, in the image of God created he him; '),
                hg('male and female', 'christ-image'),
                t(' created he them.'),
              ],
            },
            {
              number: 28,
              spans: [t('And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.')],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-image',
          title: 'Christ Connection — The True Image',
          html:
            'Genesis says humanity is the image of God. Paul goes further and says Jesus <em>is</em> &ldquo;the image of the invisible God&rdquo; (Col. 1:15), and that we are being &ldquo;conformed to the image of his Son&rdquo; (Rom. 8:29). The image was cracked in Eden; Christ is the unbroken Image — and salvation is not only forgiveness, it is being slowly restored to look like Him. Day six was always pointing at Jesus.',
        },
        {
          kind: 'carry',
          html:
            'Every face you pass today is a living image God set up in His world — the coworker, the cashier, the driver, the kid in aisle five, the face in the mirror. The revolutionary claim of Genesis 1 is that <em>every one of them</em> carries His image, not only the powerful or the holy. Whatever love and patience you&apos;ve ever shown one of them has been, quietly, a kind of worship.',
        },
        {
          kind: 'artwork',
          matchTitle: /adam/i,
          matchArtist: /bennett/i,
          caption: 'Genesis 1:26–28 · Made in His Image',
        },
      ],
    },

    /* ─── Day 6 · Very Good ───────────────────────────────────────────── */
    {
      ref: 'Creation Day 6 · Genesis 1:29–31',
      title: 'Very Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 29,
              spans: [
                t('And God said, Behold, '),
                hg('I have given you every herb', 'c-provision'),
                t(' bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.'),
              ],
            },
            {
              number: 30,
              spans: [t('And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-provision',
          html:
            'God provisions the world — every seed-bearing plant for humans, every green plant for animals. He takes responsibility for what He has made.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 31,
              spans: [
                t('And God saw every thing that he had made, and, behold, it was '),
                hy('very good', 'c-seven-goods'),
                t('. And the evening and the morning were the sixth day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven-goods',
          html:
            'Count the word &ldquo;good&rdquo; across Genesis 1 and you get seven — the Bible&apos;s number for completeness. For five days God calls His work &ldquo;good.&rdquo; On the sixth He looks at the whole thing and says something new: <em>very good.</em> The Bible begins with a Creator delighting in what He has made.',
        },
        {
          kind: 'carry',
          html:
            'Somewhere in your day there was a <em>good</em> — a conversation that landed, five minutes of sun on your face, a meal you didn&apos;t rush, the face of someone you love, a small kindness. God&apos;s rhythm in Genesis 1 is to name those things out loud before He rests. When you notice one, you are echoing the Creator who looked over what He made and delighted in it.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'day-6',
          prompt:
            "You were made in God's image. Think back over yesterday. What about how you spent it reflected Him? What obscured Him?",
        },
      ],
    },

    /* ─── Day 7 ───────────────────────────────────────────────────────── */
    {
      ref: 'Creation Day 7 · Genesis 2:1–3',
      title: 'Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [t('Thus the heavens and the earth were finished, and all the host of them.')],
            },
            {
              number: 2,
              spans: [
                t('And on the seventh day God ended his work which he had made; and '),
                hy('he rested', 'c-king-rests'),
                t(' on the seventh day from all his work which he had made.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-king-rests',
          html:
            'God is not tired; the work is simply done. In the ancient world, a king &ldquo;rested&rdquo; when his temple was finished — meaning he moved in and began to reign. Day seven is God taking His place in the world He has made. The whole creation is His temple; humans are the priests inside it; the seventh day is the throne room.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hg('God blessed the seventh day', 'c-sabbath-today'),
                t(', and '),
                hy('sanctified it', 'hebrew-kadosh'),
                t(': because that in it he had rested from all his work which God '),
                hp('created and made', 'christ-rest'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-holy-time',
          html:
            'The first thing the Bible calls <em>holy</em> is not a place, a person, or a ritual. It is a day. Time itself can be set apart for God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kadosh',
          title: 'Kadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>kadosh</strong> · set apart, consecrated',
          description:
            'In a world that consumes every moment with work, God sets apart one full day and says: this belongs to Me, and to you, together.',
        },
        {
          kind: 'commentary',
          id: 'c-sabbath-today',
          html:
            'What does a holy day look like right now, in a world of 24/7 notifications, weekend emails, and a calendar that never stops filling? Not a rule to enforce — a rhythm to receive. One day a week where you stop producing and start receiving. Phones in a drawer. A long meal with the people you love. A walk without a podcast. Worship with other believers. Saying out loud what the rest of the week is too busy to admit: <em>the world can turn without me, because God is the one holding it together.</em> The Sabbath is God&apos;s weekly way of teaching you that you are a human, not a machine, and that your worth is never your output.',
        },
        {
          kind: 'christ',
          id: 'christ-rest',
          title: 'Christ Connection — The True Rest',
          html:
            'God&apos;s rest on day seven is the one day in Genesis 1 that has no &ldquo;evening and morning.&rdquo; It is left open. Hebrews picks that up: &ldquo;There remaineth therefore a rest to the people of God&rdquo; (Heb. 4:9). Jesus steps into that open seventh day and says, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). Creation ends with an invitation — an unfinished day waiting for us to enter it through Him.',
        },
        {
          kind: 'carry',
          html:
            'Rest in Genesis is not collapse; it is a king taking his throne. The seventh day is left open in the text — no evening and morning, no closing phrase — as if waiting for you to step into it. Whatever shape rest takes in your week, time with God and with the people you love is not time subtracted from real life. It is the place where real life actually begins.',
        },
        {
          kind: 'reflection',
          id: 'day-7',
          prompt:
            "What would your week look like if one day a week truly belonged to God and to you together? Name the day. Name a start time. Name what you'll set down.",
        },
      ],
    },
  ],
};
