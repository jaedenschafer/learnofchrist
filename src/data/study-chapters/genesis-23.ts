import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 23 — Sarah dies at 127. Abraham, "stranger and sojourner,"
 * buys the cave of Machpelah from Ephron the Hittite as a burial plot.
 *
 * The patriarch who has been promised a land buys a grave-plot — and the
 * chapter is built around that quiet irony, which Hebrews 11 uses as a model
 * of faith looking past death. The first piece of the promised land Abraham
 * actually owns is a tomb.
 */
export const GENESIS_23: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 23,

  estimatedMinutes: { beginner: 5, intermediate: 8, deep: 11 },
  intros: [
    'Genesis 23 opens with an absence. Sarah is gone. She lived 127 years — long enough to see her son born when she was barren, long enough to watch her husband receive promises of nations as descendants. And now Abraham must bury her. The chapter moves slowly through the rituals of grief and negotiation, showing us what faith looks like in the shadow of death.',
    'The irony is sharp and quietly faithful. God has promised Abraham the land — Canaan flowing with milk and honey, theirs as an everlasting possession. Yet when Abraham needs ground to bury his wife, he cannot simply take it. He is, as he himself says, a "stranger and a sojourner" (v. 4) — a foreigner buying a grave in a land that is not yet his. The chapter\'s real story is about a man who has believed for so long in a promise that he can bury his wife [res:bibleodyssey-sarah-covenant-line] in faith, knowing death is not the end. Hebrews 11 will make this explicit: Abraham held the promise so firmly that he died still looking forward to a resurrection in the very land where he was now planting his dead.',
  ],

  bottomShare: {
    label: 'Share Genesis 23',
    quote:
      'A man who owned nothing but faith bought a grave. Abraham, called to inherit a land, buried his beloved in the only field he ever possessed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 23 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-23',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 23 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.23',
      description: 'Hebrew text with rabbinic commentary on Sarah&apos;s death, Abraham&apos;s faith, and the covenant promise.',
    },
    {
      id: 'iaa-hebron-cave-machpelah',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Hebron and the Cave of Machpelah',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Archaeological and historical records of ancient Hebron, the burial cave, and Abraham&apos;s connection to the land.',
    },
    {
      id: 'bibleodyssey-sarah-covenant-line',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Sarah and the Covenant Promise',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article on Sarah&apos;s role in the covenant, her death, and Abraham&apos;s faith in the resurrection.',
    },
  ],

  sections: [
    /* ─── Genesis 23:1–2 — Sarah Dies, Abraham Mourns ────────────────────── */
    {
      ref: 'Genesis 23:1–2',
      title: 'Sarah Dies, Abraham Mourns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [t('And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah.')],
            },
            {
              number: 2,
              spans: [
                t('And Sarah died in '),
                hg('Kirjath-arba', 'c-kirjath'),
                t('; the same is '),
                hg('Hebron', 'c-hebron'),
                t(' in the land of Canaan: and '),
                t('Abraham came to mourn for Sarah, and to weep for her'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kirjath',
          html:
            'Kirjath-arba means "the city of Arba." Later Hebron became one of the cities given to the Levites and, for David, the first capital of a united Israel. Abraham is not in some distant land, mourning in exile. He is mourning in the very center of what will one day be Israel[res:sefaria-genesis-23][res:iaa-hebron-cave-machpelah].',
        },
        {
          kind: 'commentary',
          id: 'c-hebron',
          html:
            'Hebron means "fellowship" or "association." It is the city where Abraham, Isaac, and Jacob will eventually be buried — the patriarchal cemetery, the family vault of the promise. The ground beneath Abraham&apos;s feet, though he does not yet own it, has been chosen.',
        },
        {
          kind: 'carry',
          html:
            'Abraham&apos;s grief is not hidden or rushed. The text lingers. He comes to mourn for her and to weep — not to make arrangements, not to organize, but first to feel the weight of what he has lost. A woman he loved for more than a century is gone. The Bible does not tell us faith means moving past grief quickly. It means grieving while still believing God is good.',
        },
        {
          kind: 'reflection',
          id: 'gen23-mourning',
          prompt:
            'Is there a loss in your own life that you are still grieving? What would change if you believed, like Abraham, that the one you lost is held by resurrection hope?',
        },
      ],
    },

    /* ─── Genesis 23:3–16 — The Negotiation with the Hittites ──────────────── */
    {
      ref: 'Genesis 23:3–16',
      title: 'The Negotiation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 3,
              spans: [
                t('And Abraham stood up from before his dead, and spake unto the sons of Heth, saying,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('I am a '),
                hy('stranger and a sojourner', 'hebrew-ger-toshav'),
                t(' with you: give me a possession of a buryingplace with you, that I may bury my dead out of my sight.'),
              ],
            },
            {
              number: 5,
              spans: [t('And the children of Heth answered Abraham, saying unto him,')],
            },
            {
              number: 6,
              spans: [
                t('Hear us, my lord: thou art a mighty prince among us: in the choice of our sepulchres bury thy dead; none of us shall withhold from thee his sepulchre, but that thou mayest bury thy dead.'),
              ],
            },
            {
              number: 7,
              spans: [t('And Abraham stood up, and bowed himself to the people of the land, even to the children of Heth.')],
            },
            {
              number: 8,
              spans: [
                t('And he communed with them, saying, If it be your mind that I should bury my dead out of my sight; hear me, and '),
                hg('intreat for me to Ephron the son of Zohar', 'c-ephron'),
                t(';'),
              ],
            },
            {
              number: 9,
              spans: [
                t('That he may give me the cave of Machpelah, which he hath, which is in the end of his field; for as much money as it is worth he shall give it me for a possession of a buryingplace amongst you.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Ephron dwelt among the children of Heth: and Ephron the Hittite answered Abraham in the audience of the children of Heth, even of all that went in at the gate of his city, saying,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Nay, my lord, hear me: the field give I thee, and the cave that is therein, I give it thee; in the presence of the sons of my people give I it thee: bury thy dead.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Abraham bowed down himself before the people of the land.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he spake unto Ephron in the audience of the people of the land, saying, But if thou wilt give it, I pray thee, '),
                hg('hear me', 'c-hear-me'),
                t(': I will give thee '),
                hy('money for the field', 'hebrew-kasaf'),
                t('; take it of me, and I will bury my dead there.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Ephron answered Abraham, saying unto him,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('My lord, hearken unto me: the land is worth four hundred shekels of silver; what is that betwixt me and thee? bury therefore thy dead.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Abraham hearkened unto Ephron; and '),
                hg('Abraham weighed to Ephron the silver', 'c-weighed'),
                t(' which he had named in the audience of the sons of Heth, four hundred shekels of silver, current money with the merchant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-ger-toshav',
          html:
            'Abraham&apos;s self-description is the hinge on which the entire negotiation turns. He has been in the land for years; God has appeared to him repeatedly; he has built altars and dug wells. Yet when it comes to actually owning even a burial plot, he must name himself as he truly is: a foreigner. This honest self-knowledge — that he is yet a sojourner, not an owner — frames the whole transaction.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ger-toshav-2',
          title: 'Ger v\'toshav — "stranger and sojourner"',
          script: 'גֵּר וְתוֹשָׁב',
          translit: '<strong>ger</strong> · stranger, alien; <strong>toshav</strong> · sojourner, resident',
          description:
            'The pair names a man who lives in a place but does not belong to it by right. He is not a slave; he has standing (Abraham will be called a "mighty prince" in v. 6). But he is not native, not owner. Hebrews 11 quotes this very phrase when describing the faith of Abraham, Isaac, and Jacob: they died "not having received the promises" but "confessed that they were strangers and pilgrims on the earth." The phrase becomes a model for all who die in faith.',
        },
        {
          kind: 'commentary',
          id: 'c-ephron',
          html:
            'The Hittites make an offer: choose any tomb you want, it&apos;s yours. Abraham refuses the gift. He wants Ephron&apos;s cave specifically. He will pay full price. In the world of ancient Near Eastern negotiation, this is how you seal a legal transaction — you move from gift-giving and courtesy to a hard currency exchange. Abraham is not accepting charity. He is making a permanent legal claim.',
        },
        {
          kind: 'commentary',
          id: 'c-hear-me',
          html:
            'Three times Abraham says "hear me" — and three times the text shows him bowing, humbling himself. He is not a man of the land, yet. He moves with courtesy, with grace. His grief does not make him entitled. His faith does not make him arrogant. He asks. He honors the locals. And he insists on paying the full price.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kasaf',
          title: 'Kasaf — "silver"',
          script: 'כֶּסֶף',
          translit: '<strong>kasaf</strong> · silver, money',
          description:
            'Silver is the negotiating currency throughout. Ephron says "the land is worth four hundred shekels," and Abraham—without haggling—pays exactly that. The transaction is witnessed, recorded, and sealed. This is ownership, not borrowing.',
        },
        {
          kind: 'commentary',
          id: 'c-weighed',
          html:
            'Abraham does not hand over a written contract or a purse. He "weighs" the silver—in front of witnesses. In an age before coined currency, precious metal was weighed on scales. This was how the ancients did business. Abraham is following the law of the land, honoring its customs, even as he asserts his right to own the ground.',
        },
        {
          kind: 'carry',
          html:
            'Abraham models something hard to hold at the same time: humility and faith. He does not demand. He does not feel entitled to the land God promised him. Yet he also does not leave it to chance. He negotiates. He pays full price. He witnesses the transaction carefully. Faith in the promise does not mean passivity in the present. It means moving through grief with intention and honor.',
        },
        {
          kind: 'reflection',
          id: 'gen23-negotiation',
          prompt:
            'What promises are you holding that have not yet come to pass? How can you honor both your long-term faith in God and the immediate, practical decisions in front of you today?',
        },
      ],
    },

    /* ─── Genesis 23:17–20 — The Field Becomes Abraham\'s ──────────────────── */
    {
      ref: 'Genesis 23:17–20',
      title: 'The Purchase is Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 17,
              spans: [
                t('And the field of Ephron, which was in '),
                hy('Machpelah', 'hebrew-machpelah'),
                t(', which was before Mamre, the field, and the cave which was therein, and all the trees that were in the field, that were in all the borders thereof round about, were made sure'),
              ],
            },
            {
              number: 18,
              spans: [
                t('unto Abraham for a possession in the sight of the children of Heth, before all that went in at the gate of his city.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And after this, '),
                hp('Abraham buried Sarah his wife in the cave of the field of Machpelah before Mamre', 'christ-resurrection'),
                t(': the same is Hebron in the land of Canaan.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the field, and the cave that is therein, were made sure unto Abraham for a possession of a buryingplace by the sons of Heth.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-machpelah',
          title: 'Machpelah — "the double"',
          script: 'מַכְפֵּלָה',
          translit: '<strong>machpelah</strong> · the double, the doubled',
          description:
            'The name may refer to the cave&apos;s structure—a double chamber. Or it may simply mean "the doubled place." Isaac and Jacob will also be buried here (49:29–32). The cave becomes the family tomb, the first real foothold of the patriarchs in the land of promise.',
        },
        {
          kind: 'commentary',
          id: 'c-before-mamre',
          html:
            'Mamre is the sacred place where God first appeared to Abraham (13:18), where he built an altar, where he entertained the three visitors (18:1). The cave is near that holy ground. Abraham is not burying his wife in a random place. He is placing her in the soil where God has already spoken.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection',
          title: 'Christ Connection — Death and Resurrection',
          html:
            'Hebrews 11:13 quotes Abraham&apos;s own words: "These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth" (Heb. 11:13). Abraham buys a grave because he knows death is not the end—that resurrection will return him to the land. Christ is "the firstfruits of them that slept" (1 Cor. 15:20). He rose from His own grave. Because He rose, Abraham&apos;s faith in a future resurrection was not foolish; it was the opening chord of the gospel.',
        },
        {
          kind: 'carry',
          html:
            'Abraham bought a grave. He made permanent arrangements to bury someone he loved deeply. There is no shame in that, no lack of faith. In fact, it is the opposite. Only a man who believes in resurrection can stand over a loved one&apos;s tomb without despair. You do not tend a grave in faith because you believe death is the end. You tend it because you believe it is not.',
        },
        {
          kind: 'reflection',
          id: 'gen23-grave',
          prompt:
            'Abraham bought a grave as an act of faith in the resurrection. What does it look like in your own life to hold grief and hope together—to mourn fully while believing in resurrection?',
        },
      ],
    },

    /* ─── Artwork hook ───────────────────────────────────────────────────────── */
    {
      ref: '',
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /abraham|sarah/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 23 · Abraham and Sarah in Hebron',
        },
      ],
    },
  ],
};
