import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Baruch 5 — A Song of Return and Restoration
 *
 * One of the apocrypha&apos;s most lyrical chapters. Jerusalem is called to put off
 * mourning and put on the glory of God. Valleys are filled, mountains leveled, and
 * children gather from exile—the imagery echoing Isaiah 40 (the voice in the wilderness
 * preparing the way, every valley exalted, every mountain made low). This is a song
 * of return, of exile ending, of God&apos;s people reconstituted not by human power but
 * by God&apos;s word and promise.
 */
export const BARUCH_5: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 5,

  estimatedMinutes: { beginner: 5, intermediate: 8, deep: 11 },
  intros: [
    'Baruch 5 is a triumph song. Jerusalem, worn by exile and mourning, is summoned to rise and change her garments. She is to exchange mourning for glory—the glory that comes from God. Her scattered children will return from the east, gathered by God&apos;s word, and the terrain itself will be transformed: high hills cast down, valleys filled up, so that Israel may walk safely in the presence of God.',
    'The chapter is saturated with the imagery of Isaiah 40—the voice in the wilderness calling for preparation, the leveling of mountains and exalting of valleys, the promise of God&apos;s presence and restoration. But where Isaiah 40 announces the Messiah&apos;s coming, Baruch 5 speaks to the return of the exiled people, the rebuilding of Jerusalem, and the coming together of what was scattered. It is a chapter about homecoming, about the reversal of loss, about the earth itself being made right.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /jerusalem|exile|return/i,
    caption: 'The Whole Chapter at a Glance',
  },

  resources: [
    {
      id: 'sefaria-isa-54-66',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 54-66 — Restoration and Return',
      url: 'https://www.sefaria.org/Isaiah.54',
      description: 'Promises of restoration echoing Baruch 5 and addressing diaspora hope.',
    },
    {
      id: 'bible-odyssey-diaspora-theology',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Diaspora Theology in Deuterocanonical Writings',
      url: 'https://www.bibleodyssey.org/dictionary/diaspora/',
      description: 'Diaspora identity, hope, and community formation in exile literature.',
    },
    {
      id: 'sefaria-baruch-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Baruch 5 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Baruch.5',
      description: 'The Hebrew text of Baruch 5 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  bottomShare: {
    label: 'Share Baruch 5',
    quote:
      'Put off, O Jerusalem, the garment of mourning and affliction, and put on the comeliness of the glory that cometh from God for ever. Stand upon the height, and look about toward the east, and behold thy children gathered from the west unto the east by the word of the Holy One.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 5 · Study Guide',
  },

  sections: [
    /* ─── Baruch 5:1–3 — Put Off Mourning ────────────────────────────── */
    {
      ref: 'Baruch 5:1–3',
      title: 'Put Off the Garment of Mourning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Put off, O Jerusalem, the '),
                hy('garment of mourning', 'c-himation'),
                t(' and affliction, and put on the '),
                hp('comeliness of the glory that cometh from God', 'christ-glory'),
                t(' for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-himation',
          html:
            'The garment is not incidental—it is a visual sign of Jerusalem&apos;s condition. In biblical language, wearing sackcloth and mourning clothes is the outer expression of inner grief and displacement. To put off the garment of mourning is not to forget what was lost but to acknowledge that the exile is ending, that a new season is beginning. The garment of glory that replaces it is a garment of restoration, of dignity reclaimed, of a people remade. [res:sefaria-isa-54-66] [res:bible-odyssey-diaspora-theology]',
        },
        {
          kind: 'greek',
          id: 'greek-himation',
          title: 'Himation — &ldquo;Garment&rdquo;',
          script: 'ἱμάτιον',
          translit: '<strong>himation</strong> · outer garment, cloak; what one wears visibly to the world',
          description:
            'The garment is what the world sees. It announces your condition—grief or joy, bondage or freedom, shame or honor. To change the garment is to make a public declaration: the season is changing. The story is being rewritten.',
        },
        {
          kind: 'christ',
          id: 'christ-glory',
          title: 'Christ Connection — Clothed in Glory',
          html:
            'Paul writes: "As many of you as have been baptized into Christ have put on Christ" (Galatians 3:27). Just as Jerusalem puts off mourning and puts on the glory of God, believers put off the old self and are clothed in the righteousness of Christ. In Him, we are not merely restored—we are transformed, made new, adorned with a glory not our own. The glory of God, which once shone only in the temple, now shines in the faces of those who belong to Christ[res:sefaria-baruch-5].',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('For God will show thy '),
                hg('brightness unto every', 'c-brightness'),
                t(' country under heaven.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For thy name shall be called of God for ever, The peace of righteousness, and the glory of God&apos;s worship.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-brightness',
          html:
            'Jerusalem&apos;s brightness—her glory—will be visible to every country. The people who were carried away in defeat, hidden from sight, will be restored to visibility and honor. Her name will be synonymous with peace and righteousness, with the worship and presence of God. This is not a private restoration but a public and visible one.',
        },

        {
          kind: 'carry',
          html:
            'If you are in a season of mourning—loss, displacement, shame, exile from where you once belonged—this voice speaks to you: the garment you wear is not permanent. The comeliness of God&apos;s glory can replace it. Not overnight, but truly. Your name can be spoken again with honor. Your life can shine with His brightness. The first step is sometimes the hardest: to believe that God is calling you to change the garment you have worn so long.',
        },

        {
          kind: 'reflection',
          id: 'mourning',
          prompt:
            'What garment of mourning or shame have you worn long? What would it look like to put on the glory of God instead? What is the first sign it might be happening?',
        },
      ],
    },

    /* ─── Baruch 5:4–5 — Bearing and Glory ───────────────────────────── */
    {
      ref: 'Baruch 5:4–5',
      title: 'The Children Gathered from East to West',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('Arise, O Jerusalem, and '),
                hg('stand on high', 'c-stand-high'),
                t('; and behold toward the '),
                hy('east', 'greek-anatole'),
                t(', and see thy children gathered from the setting of the sun unto the rising thereof by the word of the Holy One, rejoicing in the remembrance of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stand-high',
          html:
            'Jerusalem is commanded to arise and stand on high. She is to take a position of elevation, visibility, and strength. This is not a timid invitation but an imperative. The city that lay in ruins or captivity is called to stand tall and watch what God is about to do.',
        },
        {
          kind: 'greek',
          id: 'greek-anatole',
          title: 'Anatole — &ldquo;East&rdquo; (Dawn, Rising)',
          script: 'ἀνατολή',
          translit: '<strong>anatole</strong> · east, dawn, sunrise; the direction of light breaking through darkness',
          description:
            'The east is not merely a compass direction. It is the source of light. To look toward the east is to look toward the dawn, toward the rising of light after night. The children gathered from west to east move from darkness toward light, from dispersion toward the source of unity.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('For they departed from thee on '),
                hg('foot', 'c-foot'),
                t(', and were led away of thine enemies: but God bringeth them unto thee exalted with glory, as children of the kingdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-foot',
          html:
            'They departed on foot—a journey of hardship and displacement. The memory of that departure is held lightly here, not erased but placed in the past tense. What matters is not how they left but how they return: "exalted with glory." Not diminished, not hidden, not shamefaced—exalted. And not merely as refugees or captives, but as "children of the kingdom," a phrase that recalls their identity and dignity as God&apos;s own people.',
        },

        {
          kind: 'christ',
          id: 'christ-gathering',
          title: 'Christ Connection — Gathered from East and West',
          html:
            'Jesus echoes this promise directly: "They shall come from the east, and from the west, and from the north, and from the south, and shall sit down in the kingdom of God" (Luke 13:29). The gathering of God&apos;s scattered children, whether from exile or from death, is the work of the Messiah. In the Gospels, this gathering is spiritual—people from every nation coming to the one table of God. In Christ, the return from exile is completed: all who trust in Him are brought home to God.',
        },

        {
          kind: 'carry',
          html:
            'If you have known exile—even the quiet kind, the internal kind, the kind where you felt far from home or far from God—know that you are not forgotten. God sees every step of the hard journey. And He is working to bring you back, exalted and restored, not as a defeated wanderer but as a child of the kingdom. The return may be slow. But the direction is set.',
        },

        {
          kind: 'reflection',
          id: 'gathering',
          prompt:
            'Where have you felt far from home, far from where you belong? What would it mean to you to be gathered back, not in shame but exalted? Who else do you know who needs to hear this promise?',
        },
      ],
    },

    /* ─── Baruch 5:6–7 — Hills Cast Down, Valleys Filled ──────────────── */
    {
      ref: 'Baruch 5:6–7',
      title: 'Every High Hill Cast Down, Every Valley Filled Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('For God hath appointed that '),
                hg('every high hill, and banks of long continuance, should be cast down', 'c-hills'),
                t(', and '),
                hg('valleys filled up', 'c-valleys'),
                t(', to make even the ground, that Israel may go safely in the glory of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hills',
          html:
            'This verse echoes Isaiah 40 almost word-for-word: "Every valley shall be exalted, and every mountain and hill shall be made low." But where Isaiah speaks of preparation for the Messiah&apos;s coming, Baruch speaks of the terrain itself being transformed for the journey home. The high hills and mountains—obstacles, impediments, places of danger—are cast down. The language is cosmic, suggesting that God is not merely moving His people but reshaping the world itself to make their path safe.',
        },
        {
          kind: 'commentary',
          id: 'c-valleys',
          html:
            'Valleys are filled up. In ancient travel, valleys were not just low places but treacherous places—places where armies could ambush, where water collected in dangerous pools, where the unwary could be trapped. To fill them up is to remove the hidden dangers, to make the terrain passable, to eliminate the hazards of the journey.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('Also the '),
                hy('woods and every sweetsmelling tree', 'c-woods'),
                t(' shall overshadow Israel by the commandment of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-woods',
          html:
            'The sweetsmelling trees and shade of the woods—comfort, rest, respite—will accompany the journey. This is not a bare survival march but a journey attended by beauty and provision. The trees provide both literal shade from the sun and symbolic protection, a sense of God&apos;s care surrounding the people on every side.',
        },

        {
          kind: 'carry',
          html:
            'The obstacles that seemed insurmountable—the hills too high, the valleys too treacherous, the journey too dangerous—are removed. Not by the people&apos;s effort alone, but by God&apos;s command. The sweetsmelling trees give shade. The terrain is made level. And the journey itself is transformed from a desperate flight into a walk in the light of God&apos;s glory. Whatever journey you face—back to faith, back to health, back to hope, back to home—know that God is reshaping the terrain itself to make your path safer.',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'hills-valleys',
          prompt:
            'What high hill or impossible obstacle stands between you and where you want to go? What valley threatens to trap you? What would change if you truly believed God could level one and fill the other?',
        },

        {
          kind: 'artwork',
          matchTitle: /mountain|valley|landscape|terrain/i,
          caption: 'Baruch 5:6–7 · The Transformed Landscape',
        },
      ],
    },

    /* ─── Baruch 5:8 — Israel May Go Safely ──────────────────────────── */
    {
      ref: 'Baruch 5:8',
      title: 'Israel May Go Safely in the Glory of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('For God shall lead Israel with '),
                hp('joy in the light of his glory', 'christ-light-glory'),
                t(' with the '),
                hg('mercy and righteousness', 'c-mercy-righteousness'),
                t(' that cometh from him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mercy-righteousness',
          html:
            'The journey is not merely protected—it is accompanied by God&apos;s mercy and righteousness. Mercy is God&apos;s compassion, His refusal to condemn despite what His people deserve. Righteousness is His justice, His faithfulness to covenant, His integrity. Together, they describe a God who is both tender and just, both forgiving and true. The people are led not in fear but in joy, in the light of God&apos;s very glory.',
        },

        {
          kind: 'christ',
          id: 'christ-light-glory',
          title: 'Christ Connection — The Light of His Glory',
          html:
            'Paul writes: "God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ" (2 Corinthians 4:6). The light of God&apos;s glory, which Isaiah promised and Baruch echoes, has a face in the New Testament—the face of Christ. When the Apostle John saw the risen Jesus, he fell as if dead. The light of God&apos;s glory, concentrated in one Man, was overwhelming. Yet He reached down and said: "Fear not" (Revelation 1:17). That same mercy and righteousness meet in Him. That same light leads us home.',
        },

        {
          kind: 'carry',
          html:
            'The promise is not that the obstacles disappear or that the path becomes easy. The promise is that you do not walk it alone. God leads. Joy attends the journey. Mercy surrounds you. Righteousness upholds you. The light of His glory is both guide and company. Whatever you must walk toward—forgiveness, healing, home, truth—you walk in this light, and not in darkness.',
        },

        {
          kind: 'reflection',
          id: 'safely',
          prompt:
            'What does it mean to you that God does not merely send you on a journey but leads you in the light of His glory? Where do you need to trust His mercy and righteousness today?',
        },
      ],
    },
  ],

  hasHebrew: false,
};
