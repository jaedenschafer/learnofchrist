import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 1 — Nehemiah Hears of Jerusalem's Broken Walls
 *
 * Nehemiah son of Hachaliah serves as cupbearer to the Persian king, a position
 * of trust and access. Yet when he learns that Jerusalem's walls are broken down,
 * its gates burned with fire, he is overwhelmed by grief — not for a homeland he
 * has never seen, but for God's city. His response is not to act immediately, but
 * to sit, weep, mourn, fast, and pray. In this prayer of confession, Nehemiah
 * remembers the covenant promise: that even when scattered to the uttermost parts
 * of heaven, God&apos;s people can be gathered back. His words echo with a man
 * positioning himself to be an instrument of God&apos;s restoration — and his tears
 * foreshadow the work to come.
 */
export const NEHEMIAH_1: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 1,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 12 },
  intros: [
    'The book of Nehemiah opens in exile. Seventy years have passed since Jerusalem fell to Babylon. The temple has been rebuilt under Zerubbabel, the people have returned to their homeland — and yet the city itself remains broken. Its walls lie in ruins. Its gates have been burned. To the ancient mind, a city without walls is defenseless, shamed, forgotten by both neighbors and God.',
    'Nehemiah is far from home, serving in the palace of the Persian king as cupbearer — a position of extraordinary trust. A cupbearer tastes the king&apos;s food and drink, standing in the inner chamber where few are permitted. He is the king&apos;s intimate, his shadow. And when Nehemiah learns what has become of Jerusalem, he does not seize the moment to ask for leave or resources. Instead, he sits down, weeps, mourns certain days, fasts, and prays. His response is not action but lamentation — and his prayer becomes one of the most intimate confessions in Scripture, a man standing before God on behalf of his people.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 1',
    quote:
      'Nehemiah heard that Jerusalem&apos;s walls were broken and its gates burned with fire. Instead of despair, he wept and prayed — confessing the sins of his people and holding fast to God&apos;s covenant promise to gather even the scattered.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 1 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-city-david',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'City of David Excavations',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Ongoing archaeological investigation of Iron Age and Persian period Jerusalem.',
    },
  ],

  sections: [
    /* ─── Nehemiah 1:1–2 — The Messenger from Jerusalem ──────────────────── */
    {
      ref: 'Nehemiah 1:1–2',
      title: 'News from the Broken City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The words of Nehemiah the son of Hachaliah. And it came to pass in the month Chisleu, in the twentieth year, as I was in Shushan the palace,'),
            plain(2, 'That Hanani, one of my brethren, came, he and certain men of Judah; and I asked them concerning the Jews that had escaped, which were left of the captivity, and concerning Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-cupbearer',
          html:
            'Nehemiah is in Shushan, the palace of the king — likely Artaxerxes I or II, over a century after the initial exile. Nehemiah holds a position of rare access and honor. He is not in Jerusalem; he is serving the foreign king. Yet when men from Judah arrive, his first instinct is to ask about the Jews and about Jerusalem — the home he has likely never seen, the city his people have returned to but not yet restored. [res:iaa-city-david]',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-name',
          title: 'Nehemiah — "Yah Comforts"',
          script: 'נְחֶמְיָה',
          translit: '<strong>Nehemiah</strong> · He whom Yah comforts',
          description:
            'The name carries promise. In a moment of lamentation, the man whose name means "Yah comforts" will be the instrument through whom God comforts His broken people. The name itself is a seed: comfort will come.',
        },
        {
          kind: 'commentary',
          id: 'hanani-witness',
          html:
            'Hanani is Nehemiah&apos;s brother, a messenger bringing word from Jerusalem. In biblical narrative, messengers often trigger transformation. David received news of Saul&apos;s death through a messenger; the apostles received the resurrection through messengers. Hanani carries news that will change Nehemiah&apos;s entire life. [res:iaa-city-david]',
        },
      ],
    },

    /* ─── Nehemiah 1:3 — The Report of Affliction ──────────────────────── */
    {
      ref: 'Nehemiah 1:3',
      title: 'The Broken Wall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('And they said unto me, The remnant that are left of the captivity there in the province are in great '),
                hg('affliction and reproach', 'nehemiah-affliction'),
                t(': the '),
                hg('wall of Jerusalem also is broken down', 'nehemiah-wall'),
                t(', and the '),
                hg('gates thereof are burned with fire', 'nehemiah-gates'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-affliction',
          html:
            'The remnant — those who have returned from exile — are in affliction and reproach. The words suggest not merely hardship but shame. A people without a protected city is a people without standing, without the dignity that walls confer. In the ancient world, to be defenseless was to be despised. [res:iaa-city-david]',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-wall',
          html:
            'The wall is broken down. This is not a metaphor. Walls are identity. Walls are safety. Walls separate the holy from the profane, the contained from the chaos. A broken wall is a violated boundary — the city lies open to predators, to mockery, to the disorder of unguarded thresholds. [res:iaa-city-david]',
        },
        {
          kind: 'hebrew',
          id: 'chomah-wall',
          title: 'Chomah — "Wall"',
          script: 'חוֹמָה',
          translit: '<strong>Chomah</strong> · wall; bulwark; barrier',
          description:
            'The Hebrew word for wall carries the sense of protection and identity. A city with broken walls is incomplete, vulnerable, stripped of the boundary that declares: this place is ours, this place is defended, this place matters. The image is stark and physical.',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-gates',
          html:
            'The gates are burned. Gates are not merely functional; they are the places of judgment, of commerce, of entry and exit. Burned gates mean the ability to control passage is gone. The city is penetrated. The narrative tension builds: how can the people of God inhabit an undefended, open city? [res:iaa-city-david]',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we receive news that shifts our understanding of our circumstances. A person we thought was protected is in danger. A community we thought was secure is in crisis. When you hear such news, what is your first response — to find a solution, or to sit with the weight of it?',
        },
        {
          kind: 'reflection',
          id: 'affliction-news',
          prompt: 'Have you ever learned of someone&apos;s pain or need that was far removed from you? What stirred in you — indifference, distance, or unexpected grief?',
        },
      ],
    },

    /* ─── Nehemiah 1:4 — The Response: Lamentation and Prayer ─────────────── */
    {
      ref: 'Nehemiah 1:4',
      title: 'Sitting in Grief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And it came to pass, when I heard these words, that I '),
                hg('sat down and wept', 'nehemiah-sat-wept'),
                t(', and '),
                hg('mourned certain days, and fasted, and prayed', 'nehemiah-fasted-prayed'),
                t(' before the God of heaven:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-sat-wept',
          html:
            'Nehemiah does not rush. He sits down. He weeps. The verbs are spare and deliberate. He is not the cupbearer solving a logistical problem; he is a man whose heart has been undone by word of his people&apos;s shame. His weeping is not weakness but fidelity — he feels the breaking of Jerusalem as a breaking within himself. [res:iaa-city-david]',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-fasted-prayed',
          html:
            'Nehemiah fasts and prays. These are not separate acts; they are one sustained turning toward God. The fast is a physical emptying, an outward sign of an inward reorientation. He does not fast for penance alone, but as a way of making himself available to hear God&apos;s will. His prayer will be the deepest confession in the book.',
        },
        {
          kind: 'carry',
          html:
            'The world tells us to act quickly, to solve, to move forward. Nehemiah teaches a different pace: sit, weep, mourn, fast, pray. Sometimes the most important response is not to fix but to feel, not to speak but to wait. In our rushed lives, when was the last time you sat with something broken long enough to understand its weight?',
        },
        {
          kind: 'reflection',
          id: 'nehemiah-response',
          prompt: 'What does it mean to grieve for someone else&apos;s pain as if it were your own? When have you done this, or when have you wished someone would?',
        },
      ],
    },

    /* ─── Nehemiah 1:5–11 — The Prayer of Confession and Covenant Promise ─── */
    {
      ref: 'Nehemiah 1:5–11',
      title: 'The Prayer: Confession and Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 5,
              spans: [
                t('And said, I beseech thee, O Lord God of heaven, the '),
                hp('great and terrible God', 'nehemiah-great-terrible'),
                t(', that keepeth covenant and mercy for them that love him and observe his commandments:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-great-terrible',
          html:
            'Nehemiah addresses God as "great and terrible." The Hebrew word for terrible (yara) carries the sense of awesome, dreadful, worthy of reverence. God is not small, not manageable, not domesticated. And yet — immediately — Nehemiah names God as one who "keepeth covenant and mercy." Greatness and faithfulness together. Awe and intimacy held in one breath.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('Let thine ear now be attentive, and thine eyes open, that thou mayest hear the prayer of thy servant, which I pray before thee now, day and night, for the children of Israel thy servants, and confess the sins of the children of Israel, which '),
                hg('we have sinned against thee', 'nehemiah-confess-sins'),
                t(': '),
                hg('both I and my father&apos;s house have sinned', 'nehemiah-both-I'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-confess-sins',
          html:
            'Nehemiah prays "day and night" — continuous, persistent petition. But what is he petitioning for? He is confessing. He says "we have sinned against thee" — speaking not as an individual but as a member of a covenant people. The walls are broken not by accident but by consequence. The exile was judgment for covenant breaking. [res:iaa-city-david]',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-both-I',
          html:
            'Here is the deepest note: "Both I and my father&apos;s house have sinned." Nehemiah could stand apart from his people&apos;s sin. He serves the king; he is at a distance from the broken city. But he does not. He includes himself in the confession. He takes on the sin of his people as his own sin. This is intercession — standing in the gap. [res:iaa-city-david]',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('We have dealt very corruptly against thee, and have not kept the commandments, nor the statutes, nor the judgments, which thou commandedst thy servant Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-moses-covenant',
          html:
            'Nehemiah anchors the confession to Moses — to the covenant given at Sinai. The people have broken the commandments, the statutes, the judgments. This is not personal failure; it is covenantal unfaithfulness. Nehemiah is drawing the people back to the source of their obligation and their identity.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('Remember, I beseech thee, the word that thou commandedst thy servant Moses, saying, '),
                hp('If ye transgress, I will scatter you abroad among the nations', 'nehemiah-scatter'),
                t(': But if ye turn unto me, and keep my commandments, and do them; though there were of you cast out unto the uttermost part of the heaven, yet will I '),
                hp('gather them from thence', 'nehemiah-gather'),
                t(', and will bring them unto the place that I have chosen to set my name there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-scatter',
          html:
            'Nehemiah quotes the covenant promise from Deuteronomy 30 — the law of blessing and curse. Scatter if you transgress; gather if you return. The exile is not the final word. It is the conditional curse that Deuteronomy foretold. But the covenant also holds a promise: gathering is possible.',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-gather',
          html:
            '"Though there were of you cast out unto the uttermost part of the heaven, yet will I gather them from thence." This is the promise that grounds Nehemiah&apos;s prayer. No distance is too great. No exile is permanent. God&apos;s covenant promise is older and stronger than human failure.',
        },
        {
          kind: 'hebrew',
          id: 'qanah-gather',
          title: 'Kanah — "Gather" or "Assemble"',
          script: 'קנה',
          translit: '<strong>Kanah</strong> · to gather; to collect; to bring together',
          description:
            'The Hebrew verb carries the sense of bringing scattered things together, making one. After exile and scattering, gathering is the reversal of judgment. Nehemiah is invoking the promise that God will undo the breaking apart.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('Now these are thy servants and thy people, whom thou hast redeemed by thy great power, and by thy strong hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-redeemed',
          html:
            'Nehemiah reminds God of what He has already done: redeemed this people with great power and strong hand — the Exodus itself. He is not asking God to do something unprecedented. He is asking God to be faithful to His own pattern, His own history with this people.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('O Lord, I beseech thee, let now thine ear be attentive to the prayer of thy servant, and to the prayer of thy servants, who desire to fear thy name: and '),
                hp('prosper, I pray thee, thy servant this day', 'nehemiah-prosper'),
                t(', and grant him mercy in the sight of this man. For I was the king&apos;s cupbearer.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-prosper',
          html:
            'Now the prayer shifts. Nehemiah has confessed. He has remembered the covenant. And now he asks: prosper thy servant this day, and grant him mercy in the sight of this man. The "man" is the king. Nehemiah is not asking for the walls to rebuild themselves. He is asking to be positioned — to have favor with the king so that he might be an instrument of restoration. [res:iaa-city-david]',
        },
        {
          kind: 'hebrew',
          id: 'mashkeh-cupbearer',
          title: 'Mashkeh — "Cupbearer"',
          script: 'מַשְׁקֶה',
          translit: '<strong>Mashkeh</strong> · cupbearer; one who drinks before the king',
          description:
            'The word carries the sense of trust and access. A cupbearer is the closest attendant, the one who tastes what the king will drink, who stands in the inner chamber. Nehemiah&apos;s position is not accident; it is placement. And he now asks God to use that placement.',
        },
        {
          kind: 'carry',
          html:
            'God places His servants in strategic positions. Nehemiah did not choose to be in the palace of the Persian king. But his position becomes the hinge point of his prayer. When you look at your own position — where you are, whom you have access to, what doors are open to you — do you see it as placement, or as circumstance?',
        },
        {
          kind: 'reflection',
          id: 'cupbearer-position',
          prompt: 'Where has God placed you that you might become an instrument of His will? What opportunities or access do you have that you might not yet have recognized as a calling?',
        },
      ],
    },

    /* ─── Christ Connection ─────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'christ',
          id: 'christ-weeps-jerusalem',
          title: 'Christ Connection — The King Who Weeps for Broken Walls',
          html:
            'Nehemiah hears of broken walls and broken people, and he weeps. Centuries later, Jesus approaches Jerusalem — the city Nehemiah had never seen but loved from a distance. And Jesus weeps. "When he was come near, he beheld the city, and wept over it, saying, If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes" (Luke 19:41–42). Nehemiah wept for the city he would rebuild with stones and mortar. Jesus wept for the city that would reject Him. Both understood that the breaking of a city is the breaking of God&apos;s purpose. But there is a deeper connection: Jesus is Himself the great Cupbearer. At the table on the night He was betrayed, He took the cup and said, "This is my blood of the covenant" (Matthew 26:27–28). Like Nehemiah, the True Cupbearer stands in the presence of ultimate power, and He drinks the cup that is given to Him. And His blood, spilled out, becomes the drink that restores us to God. Furthermore, Ephesians 2:14 tells us that Christ "is our peace, who hath made both one, and hath broken down the middle wall of partition between us." The walls that divide are broken down by His cross. The true wall — the wall that kept us from God — was shattered so that we might be gathered.',
        },
      ],
    },
  ],
};
