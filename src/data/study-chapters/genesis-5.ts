import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 5 — the genealogy from Adam to Noah.
 *
 * A chapter about death that is interrupted once — by one man who simply
 * did not die. Enoch "walked with God and was not." The refrain "and he died"
 * runs through these verses like a drumbeat, the weight of mortality written
 * across a thousand years. Then Enoch walks, and the refrain breaks. Then it
 * resumes with Methuselah, the oldest man in Scripture, who dies in the year
 * of the flood. And then comes Noah, whose name — "rest" — carries a promise
 * that breaks the tone: his father says, "this same shall comfort us concerning
 * our work and toil of our hands, because of the ground which the LORD hath
 * cursed."
 */
export const GENESIS_5: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 12 },
  intros: [
    'Genesis 5 is a genealogy — a long list of names, years, descendants, and deaths. It reads like an inventory of mortality, each life a measured span from birth to the moment the refrain returns: &ldquo;and he died.&rdquo; Adam lived nine hundred and thirty years. Seth lived nine hundred and twelve. The chapter could read as an exercise in futility, a reminder that all flesh returns to dust. But Genesis will not allow that reading to stand.',
    'In the middle of the list, one man does not die. Enoch walked with God, and &ldquo;he was not; for God took him.&rdquo; The chapter has been beating a rhythm for twelve verses, and then it stops. Later, one more name breaks the pattern: Noah, born to Lamech, whose father says at his birth, &ldquo;This same shall comfort us concerning our work and toil of our hands, because of the ground which the LORD hath cursed.&rdquo; In a genealogy where every name ends in death, these two are the text&apos;s way of pointing to what it has been waiting for all along — a world not cursed forever, and a God whose love does not end when life does.',
  ],

  bottomShare: {
    label: 'Share Genesis 5',
    quote:
      'In the long genealogy from Adam to Noah, one man walked with God and did not die. Enoch was taken. And Noah\'s birth carried a promise — "this same shall comfort us" — of a world restored.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 5 · Study Guide',
  },

  sections: [
    /* ─── Genesis 5:1–20 — The Long Refrain of Death ───────────────────── */
    {
      ref: 'Genesis 5:1–20',
      title: 'The Long Refrain of Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('This is the book of the generations of Adam. In the day that God created man, in the '),
                hy('likeness of God', 'hebrew-demut'),
                t(' made he him;'),
            ],
            },
            {
              number: 2,
              spans: [
                t('Male and female created he them; and blessed them, and called their name '),
                hg('Adam', 'c-named-adam'),
                t(', in the day when they were created.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Adam lived an hundred and thirty years, and begat a son '),
                hg('in his own likeness', 'c-likeness-broken'),
                t(', after his image; and called his name Seth:'),
              ],
            },
            {
              number: 4,
              spans: [t('And the days of Adam after he begat Seth were eight hundred years: and he begat sons and daughters.')],
            },
            {
              number: 5,
              spans: [
                t('And all the days that Adam lived were nine hundred and thirty years: and '),
                hg('he died', 'c-died'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Seth lived an hundred and five years, and begat Enos:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Seth lived after he begat Enos eight hundred and seven years: and begat sons and daughters:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And all the days of Seth were nine hundred and twelve years: and he died.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Enos lived ninety years, and begat Cainan:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Enos lived after he begat Cainan eight hundred and fifteen years: and begat sons and daughters:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And all the days of Enos were nine hundred and five years: and he died.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Cainan lived seventy years, and begat Mahalaleel:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Cainan lived after he begat Mahalaleel eight hundred and forty years: and begat sons and daughters:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And all the days of Cainan were nine hundred and ten years: and he died.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Mahalaleel lived sixty and five years, and begat Jared:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Mahalaleel lived after he begat Jared eight hundred and thirty years: and begat sons and daughters:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And all the days of Mahalaleel were eight hundred ninety and five years: and he died.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Jared lived an hundred sixty and two years, and he begat Enoch:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Jared lived after he begat Enoch eight hundred years: and begat sons and daughters:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And all the days of Jared were nine hundred sixty and two years: and he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen5-split-1',
          html:
            'From Adam through Mahalalel, four generations fall in one rhythm: born, lived after begetting, and died. Each lived 800+ years yet each man fell to the same refrain. The pattern is set and seems unbreakable. Then comes Jared, and with him the first hint of escape—he begets Enoch, the one who will not die.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('And Mahalaleel lived sixty and five years, and begat Jared:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Mahalaleel lived after he begat Jared eight hundred and thirty years: and begat sons and daughters:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And all the days of Mahalaleel were eight hundred ninety and five years: and he died.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Jared lived an hundred sixty and two years, and he begat Enoch:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Jared lived after he begat Enoch eight hundred years: and begat sons and daughters:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And all the days of Jared were nine hundred sixty and two years: and he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-named-adam',
          html:
            'The opening line frames the genealogy not as a ledger but as a memorial. &ldquo;This is the book of the generations of Adam&rdquo; — the same language will open the accounts of Noah, Shem, and the sons of Israel. These are the lines God is tracing through history, not the lines a historian might choose. And the first act of memory is to recall: Adam and Eve were made in God&apos;s image, and they were called one name, Adam.',
        },
        {
          kind: 'commentary',
          id: 'c-likeness-broken',
          html:
            'Adam begets Seth in his own likeness and image. But Seth is not made in God&apos;s image the way Adam was — Seth is made in Adam&apos;s image, once removed. The text is keeping a careful record. Something has changed. The image-bearer can make image-bearers, but the direct likeness to God, that has been stepped back one generation. It is the first quiet accounting of the cost of the Fall.',
        },
        {
          kind: 'commentary',
          id: 'c-died',
          html:
            'From Adam onward, the refrain beats like a drum: &ldquo;and he died.&rdquo; Over a dozen verses it comes again and again — the common fate, the inheritance of mortality. Paul will later write, &ldquo;Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned&rdquo; (Rom. 5:12). The genealogy of Genesis 5 is the genealogy of death itself, written across a thousand years.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-demut',
          title: 'Demut — &ldquo;likeness&rdquo;',
          script: 'דְּמוּת',
          translit: '<strong>demut</strong> · likeness, form, representation',
          description:
            'The chapter repeats the language of Genesis 1:27 — made in God&apos;s image, <em>tselem</em>, and in His <em>demut</em>, His likeness. But as the genealogy continues, the commentary is tracking something: the direct image-bearer creates an image-bearer in his own image. The passage from God to Adam to Seth is a dimming, one step further from the source.',
        },
        {
          kind: 'carry',
          html:
            'You live in a lineage of mortality. Every ancestor you had lived and died. Your own life is numbered in years. The person you will become in ten years is a different person from the one you are right now, and you are dying toward that change whether you notice or not. But the genealogy doesn&apos;t read as hopeless — it reads as honest. The writer of Genesis knew what he was counting when he repeated "and he died." He was not unaware. He was watching for what would interrupt the pattern.',
        },
        {
          kind: 'reflection',
          id: 'gen5-mortality',
          prompt:
            'Where in your week do you feel the weight of time passing — that things decay, bodies age, seasons turn? Instead of running from it, what if you let yourself feel it, and ask what it is pointing you toward?',
        },
      ],
    },

    /* ─── Genesis 5:21–24 — Enoch Walked with God ──────────────────────── */
    {
      ref: 'Genesis 5:21–24',
      title: 'The Exception: Enoch Walked with God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 21,
              spans: [
                t('And Enoch lived sixty and five years, and begat Methuselah:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Enoch '),
                hy('walked with God', 'hebrew-halak-elohim'),
                t(' after he begat Methuselah three hundred years: and '),
                hg('begat sons and daughters', 'c-enoch-fruitful'),
                t(':'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And all the days of Enoch were three hundred sixty and five years:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Enoch '),
                hp('walked with God: and he was not', 'christ-enoch-taken'),
                t('; for God took him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-enoch-fruitful',
          html:
            'Before the refrain of death arrives, Enoch is reported as fruitful — he begets Methuselah and sons and daughters. He lives a full, generative life, not a shortened one. He is not taken because his life was empty. He is taken while still in the midst of bearing fruit.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-halak-elohim',
          title: 'Halak et-ha-elohim — &ldquo;walked with God&rdquo;',
          script: 'הִתְהַלֵּךְ אֶת־הָאֱלֹהִים',
          translit: '<strong>halak et-ha-elohim</strong> · to walk with, to live in the presence of',
          description:
            'The verb is <em>halak</em>, to walk, paired with the preposition <em>et</em> (with). It is more than obedience; it is companionship. Three people in Scripture walk with God — Enoch here, Noah after him, and later Abraham ("walk before me," Gen. 17:1). It is the language of covenant friendship. Enoch did not simply obey God from a distance. He walked with Him as a friend walks with a friend.',
        },
        {
          kind: 'commentary',
          id: 'c-enoch-not',
          html:
            'The chapter has beaten out its refrain a dozen times. But Enoch does not die. Instead, the text says, &ldquo;he was not; for God took him.&rdquo; It is the single interruption in the rhythm, the one moment where the pattern breaks. In a genealogy about mortality, Enoch is the exception that proves the rule — and proves it backwards. He proves that death is not inevitable. It is the consequence of something, not the fabric of existence itself.',
        },
        {
          kind: 'christ',
          id: 'christ-enoch-taken',
          title: 'Christ Connection — Enoch the Translated Prophet',
          html:
            'Hebrews says of Enoch: &ldquo;by faith Enoch was translated that he should not see death… for before his translation he had this testimony, that he pleased God&rdquo; (Heb. 11:5). Later, Jude tells us Enoch was a prophet: &ldquo;And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints&rdquo; (Jude 14). A man who walked with God and was not — and the Spirit tells us he prophesied of a day when the Lord would come. Enoch did not stay. He was a sign of another coming.',
        },
        {
          kind: 'carry',
          html:
            'Enoch walked with God while still fully alive — working, bearing children, building a life — and God simply did not let him go through death. What the rest of the genealogy counts as inevitable, God counted as optional for the one who walked with Him. The intimacy you have with God right now is not a luxury. It is the only thing that determines whether death has the final say in your story.',
        },
        {
          kind: 'reflection',
          id: 'gen5-enoch',
          prompt:
            'What would change about your Tuesday if you really believed that God is close enough to walk with, not just pray to? What is keeping you from walking?',
        },
        {
          kind: 'artwork',
          matchTitle: /enoch/i,
          caption: 'Genesis 5:21–24 · Enoch Walked',
        },
      ],
    },

    /* ─── Genesis 5:25–32 — Methuselah, Noah, and Rest ──────────────────── */
    {
      ref: 'Genesis 5:25–32',
      title: 'Methuselah, Noah, and the Promise of Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 25,
              spans: [
                t('And Methuselah lived an hundred eighty and seven years, and begat Lamech:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Methuselah lived after he begat Lamech seven hundred eighty and two years: and begat sons and daughters:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And all the days of Methuselah were nine hundred sixty and nine years: and '),
                hg('he died', 'c-methuselah-died'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Lamech lived an hundred eighty and two years, and begat a son:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And he called his name '),
                hy('Noah', 'hebrew-noah'),
                t(', saying, This same shall '),
                hp('comfort us concerning our work and toil of our hands', 'christ-rest-comfort'),
                t(', because of the ground which the LORD hath cursed:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Lamech lived after he begat Noah five hundred ninety and five years: and begat sons and daughters:'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And all the days of Lamech were seven hundred seventy and seven years: and he died.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Noah was five hundred years old: and Noah begat Shem, Ham, and Japheth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-methuselah-died',
          html:
            'Methuselah lived nine hundred and sixty-nine years — longer than any human in Scripture. He outlived his own son Lamech and lived long enough to see his great-grandson Noah reach five hundred years old. And then Methuselah died. He died in the very year of the flood (according to the chronology of Genesis). The oldest man in history could not escape mortality. But his death is where the promise begins.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-noah',
          title: 'Noah — &ldquo;rest&rdquo;',
          script: 'נֹחַ',
          translit: '<strong>Noah</strong> · rest, comfort, relief',
          description:
            'Lamech names his son with a prayer in his name. <em>Noah</em> means &ldquo;rest,&rdquo; from the verb <em>nuach</em>, to rest. But Lamech says, &ldquo;This same shall <em>yenachamenu</em> — comfort us, console us&rdquo; — a wordplay, a father hoping his son&apos;s very name will be a sign of what God will do. The Hebrew leaves the wordplay untranslatable in English, but the idea is: &ldquo;He will be Noah. He will comfort us.&rdquo;',
        },
        {
          kind: 'commentary',
          id: 'c-cursed-ground',
          html:
            'Lamech speaks as if he knows something the rest of the genealogy does not. &ldquo;Because of the ground which the LORD hath cursed&rdquo; — a reference back to Genesis 3, where God cursed the ground because of Adam&apos;s sin, and promised that "in the sweat of thy face shalt thou eat bread." Lamech is saying: we are dying under a curse. And then he looks at his baby and says: this child will comfort us. The genealogy of death is interrupted by a father&apos;s hope that his son will undo what his ancestors did.',
        },
        {
          kind: 'christ',
          id: 'christ-rest-comfort',
          title: 'Christ Connection — The True Rest',
          html:
            'Noah will bring rest, his name promises. But the rest he brings is temporary — after the flood, the curse returns (Gen. 8:21). Yet something larger is moving through the text. In Hebrews 4, Paul writes: &ldquo;There remaineth therefore a rest to the people of God... [Christ] being entered into his rest&rdquo; (Heb. 4:9-10). Jesus&apos; name in Matthew 1:21 means &ldquo;the LORD saves&rdquo; — but His work, over and over in the Gospels, is to say, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). Noah foreshadowed the rest; Christ brings the real thing.',
        },
        {
          kind: 'carry',
          html:
            'The world you live in still carries the curse — work is still hard, toil is real, ground is stubborn, bodies get tired. But you are also living in the genealogy that runs from Enoch through Noah toward the One who walks with you and whose name is your rest. Whatever comes in your week — the job that exhausts you, the task that never ends, the weariness that settles in — you carry the same name Lamech gave his son. You are living toward <em>Noach</em>, the comfort of God. It is not coming somewhere else. It is coming through the One whose name is written over everything.',
        },
        {
          kind: 'reflection',
          id: 'gen5-rest',
          prompt:
            'Where is the cursed ground most obvious in your week — where does your toil feel most heavy? What if that exact place is where God has been training you to recognize rest when it comes?',
        },
        {
          kind: 'artwork',
          matchTitle: /noah/i,
          caption: 'Genesis 5:28–29 · Noah, the Promise of Rest',
        },
        {
          kind: 'artwork',
          matchTitle: /methuselah/i,
          caption: 'Genesis 5:25–27 · Methuselah',
        },
      ],
    },
  ],
};
