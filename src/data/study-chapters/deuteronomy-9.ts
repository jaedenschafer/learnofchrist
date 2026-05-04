import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 9 — Inheritance is not earned. Moses stands before Israel at
 * the Jordan, reminding them that they are about to inherit land not because
 * of their righteousness, but because of God&apos;s oath to Abraham, Isaac,
 * and Jacob — and despite Israel&apos;s stiffnecked rebellion at every step.
 *
 * At Horeb, while Moses received the law, Israel made the golden calf. At
 * Taberah, Massah, Kibroth-hattaavah, Kadesh-Barnea — rebellion, rebellion,
 * rebellion. Yet Moses interceded, falling before the Lord 40 days and 40
 * nights, pleading not on the basis of Israel&apos;s merit but on the basis of
 * God&apos;s name and His oath. The Lord hearkened. Election precedes performance.
 * Mercy precedes obedience. This is the whole covenant story.
 */
export const DEUTERONOMY_9: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 9,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 22 },
  opener: {
    matchTitle: /The Golden Calf/i,
    caption: 'Deuteronomy 9',
  },
  intros: [
    'Israel stands at the Jordan, ready to cross over and dispossess nations greater and mightier than they are. Giants called Anakims hold fortified cities that reach to heaven. The natural response is fear. But Moses tells them something that will shape the whole story: you will inherit this land not because you deserve it, but because God promised it to your fathers, and because those nations have grown wicked and must be driven out.',
    'Yet Moses immediately adds a warning: do not tell yourself a lie in your heart. Do not say, "For my righteousness the Lord hath brought me in to possess this land." You are a stiffnecked people. Remember Horeb — when God&apos;s finger wrote the law, you made a golden calf and worshiped it. Remember every place: Taberah, Massah, Kibroth-hattaavah, Kadesh-Barnea. Rebellion at every step. The only reason you are still alive, the only reason God did not destroy you, is because Moses stood in the gap and prayed.',
    'Deuteronomy 9 is the Old Testament&apos;s clearest statement that inheritance is a gift, not a wage. Election comes first. Performance follows — if it follows at all. And in between, there is always someone interceding, pleading not on the basis of the people&apos;s worth but on the basis of God&apos;s character and His oath.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 9',
    quote:
      'Israel shall inherit the land, not for their righteousness, but because God sware it to Abraham, Isaac, and Jacob. They are a stiffnecked people. Yet Moses prayed 40 days and 40 nights: "Destroy not thy people. Remember thy servants. Look not unto their stubbornness." And the Lord hearkened.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 9 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 9',
      url: 'https://www.sefaria.org/Deuteronomy.9',
      description: 'Open-access source text and traditional Jewish commentary on election, grace, and Moses&apos; intercession for Israel.',
    },
    {
      id: 'election-grace-not-merit-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Election and Covenant Grace',
      url: 'https://www.bibleodyssey.org/dictionary/election/',
      description: 'Scholarly entry on the biblical concept of divine election preceding human performance and the gift of the covenant.',
    },
    {
      id: 'intercession-prayer-ancient-near-east',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Intercession in the Ancient Near East',
      url: 'https://www.bibleodyssey.org/dictionary/prayer/',
      description: 'Study of the power of intercession in covenant theology, especially the role of mediators standing between God and the people.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 9:1–3 — Crossing Jordan ──────────────────────────── */
    {
      ref: 'Deuteronomy 9:1–3',
      title: 'Giants and a Consuming Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('Hear, O Israel: Thou art to '),
                hg('pass over Jordan this day', 'c-jordan'),
                t(', to go in to possess nations greater and mightier than thyself, cities '),
                hy('great and walled up to heaven', 'hebrew-shamayim'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('A people great and tall, the children of '),
                hg('the Anakims', 'c-anakims'),
                t(', whom thou knowest, and of whom thou hast heard say, Who can stand before the children of Anak!'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Understand therefore this day, that '),
                hp('the LORD thy God is he which goeth over before thee', 'c-consuming'),
                t('; as a consuming fire he shall destroy them, and he shall bring them down before thy face: so shalt thou drive them out, and destroy them quickly, as the LORD hath said unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jordan',
          html:
            'Jordan is the boundary. On the other side, inheritance. The crossing is not a leisure journey — it is entry into what God has already sworn. Moses doesn&apos;t ask Israel if they are ready. He announces: you <em>are</em> to cross. The promise is not a hypothetical. It is a command wrapped in assurance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shamayim',
          title: 'Shamayim — &ldquo;heaven&rdquo;',
          script: 'שָׁמַיִם',
          translit: '<strong>shamayim</strong> · the heavens; the sky; height',
          description:
            'Cities walled up to heaven are cities that seem impregnable, untouchable, beyond human capacity to overcome. The rhetoric is: these enemies are too great. But the next verse says God goes before as a consuming fire. What is impossible for Israel is routine for the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-anakims',
          html:
            'The Anakims are giants — the word &ldquo;Anak&rdquo; means long-necked. They are the enemy in Israel&apos;s nightmares, the giants that made the first generation of Israelites say, "We are as grasshoppers in their sight." Goliath, centuries later, will be a descendant of Anak. The Anakims represent every enemy that looks too big to defeat.',
        },
        {
          kind: 'christ',
          id: 'c-consuming',
          title: 'Christ Connection — The Consuming Fire Goes Before',
          html:
            'Moses says God goes before Israel as a consuming fire. Hebrews describes Jesus as &ldquo;a consuming fire&rdquo; (Heb. 12:29). The Greek word for fire, <em>pur</em>, is also used when Jesus says, &ldquo;I am come to send fire on the earth&rdquo; (Luke 12:49). The judgment of enemies is not Israel&apos;s work — it is God&apos;s. And in the New Testament, that judgment-fire belongs to Jesus. He is the one who goes before, and His presence is devastating to every power that opposes Him.',
        },
        {
          kind: 'carry',
          html:
            'The giants in your path — the addiction you can&apos;t shake, the fear that keeps you small, the enemy that tells you you&apos;re too weak, the wall that looks impenetrable — are real. But Moses &apos;s point is simple: they are not your war. Your job is not to figure out how to scale the wall or defeat the giant. Your job is to step into what God has already promised and let Him do what He does. The Lord goes before. The consuming fire is His.',
        },
        {
          kind: 'reflection',
          id: 'deut9-giants',
          prompt:
            'What "Anak" — what enemy that seems too great, too tall, too walled-off — is standing between you and what God has promised you? What would change if you actually believed that God goes before you as a consuming fire?',
        },
      ],
    },

    /* ─── Deuteronomy 9:4–6 — Not for Your Righteousness ──────────────── */
    {
      ref: 'Deuteronomy 9:4–6',
      title: 'Not for Your Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 4,
              spans: [
                t('Speak not thou in thine heart, after that the LORD thy God hath cast them out from before thee, saying, '),
                hp('For my righteousness the LORD hath brought me in to possess this land', 'c-righteousness'),
                t(': but for '),
                hg('the wickedness of these nations', 'c-wickedness'),
                t(' the LORD doth drive them out from before thee.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Not for thy righteousness, nor for the uprightness of thine heart, dost thou go to possess their land: but for the wickedness of these nations the LORD thy God doth drive them out from before thee, and that he may '),
                hp('perform the word which the LORD sware unto thy fathers, Abraham, Isaac, and Jacob', 'c-oath'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Understand therefore, that the LORD thy God giveth thee not this good land to possess it for thy righteousness; for thou art a '),
                hy('stiffnecked people', 'hebrew-kesheh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-righteousness',
          html:
            'Moses uses the strongest warning he can muster: <em>speak not thou in thine heart.</em> Don&apos;t even let the thought begin. The moment you start to believe your victory is your own righteousness, you have fallen into the trap that ruins everything [res:election-grace-not-merit-bible-odyssey]. This is not a caution for humility&apos;s sake. It is a diagnosis of spiritual disaster. The moment you believe your inheritance is your wage, you stop receiving grace and start trying to earn what is already yours. The whole covenant collapses.',
        },
        {
          kind: 'commentary',
          id: 'c-wickedness',
          html:
            'God drives out nations not because Israel is good but because those nations are wicked. The Canaanites have defiled the land. Their cup is full. God is not rewarding Israel; He is judging evil. Israel is the instrument of that judgment, but the judgment belongs to God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kesheh',
          title: 'Kesheh-oref — &ldquo;stiffnecked&rdquo;',
          script: 'קְשֵׁה־עֹרֶף',
          translit: '<strong>kesheh-oref</strong> · stiff of neck; stubborn as an ox refusing the yoke',
          description:
            'An ox with a stiff neck refuses to be guided, refuses the yoke, refuses the path the farmer sets. Israel&apos;s stiffneckedness is not weakness — it is active rebellion, a refusal to submit to God&apos;s leading. And this is the people getting the inheritance.',
        },
        {
          kind: 'christ',
          id: 'c-oath',
          title: 'Christ Connection — The Oath That Holds',
          html:
            'Moses says the land is given to perform God&apos;s word that He sware to Abraham, Isaac, and Jacob [res:sefaria-deuteronomy-9]. Paul picks that up centuries later: &ldquo;Now to Abraham and his seed were the promises made… The covenant, that was confirmed before of God in Christ&rdquo; (Gal. 3:16, 17). The oath to the fathers is not a promise to their performance — it is a promise about the seed, about Christ. The land is given not because Israel deserves it, but because God is faithful to what He swore. And that faithfulness runs all the way forward to the cross.',
        },
        {
          kind: 'carry',
          html:
            'The lie whispers: you got what you earned. Your career, your relationships, your stability — you worked for it, you deserve it. And the moment you believe it, you stop feeling grateful and start feeling entitled. You start counting what you owe instead of counting what you&apos;ve been given. Deuteronomy says: stop. Whatever you possess is the land of someone&apos;s oath — spoken before you were born, kept by a God who doesn&apos;t keep promises because you&apos;re good enough, but because He is God.',
        },
        {
          kind: 'reflection',
          id: 'deut9-oath',
          prompt:
            'What part of your life have you claimed as something you earned or deserved? What would it mean to receive it instead as the fulfillment of an oath made long before you existed?',
        },
      ],
    },

    /* ─── Deuteronomy 9:7–8 — Remember Horeb ───────────────────────────── */
    {
      ref: 'Deuteronomy 9:7–8',
      title: 'Remember Horeb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('Remember, and forget not, how thou '),
                hg('provokedst the LORD thy God to wrath', 'c-provoked'),
                t(' in the wilderness: from the day that thou didst depart out of the land of Egypt, until ye came unto this place, ye have been rebellious against the LORD.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Also in Horeb ye '),
                hy('provoked the LORD to wrath', 'hebrew-ketseph'),
                t(', so that the LORD was angry with you to have destroyed you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-provoked',
          html:
            'Moses doesn&apos;t begin with Israel&apos;s assets or achievements. He begins with their rebellion. <em>Remember, and forget not.</em> The verb is doubled for emphasis. This is not a historical footnote — this is the foundation of the whole conversation. You are standing at the Jordan about to inherit because you were rebellious. That contradiction is the whole point of grace.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ketseph',
          title: 'Ketseph — &ldquo;wrath&rdquo;',
          script: 'קֶצֶף',
          translit: '<strong>ketseph</strong> · burning anger, wrath, indignation',
          description:
            'Not mild disappointment. Not a correction. <em>Ketseph</em> is the white-hot anger of a God whose covenant people have turned to idolatry. It is the anger you deserve. And you are alive because someone stood in the gap.',
        },
      ],
    },

    /* ─── Deuteronomy 9:9–21 — The Calf Destroyed ─────────────────────── */
    {
      ref: 'Deuteronomy 9:9–21',
      title: 'The Calf at Horeb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 9,
              spans: [
                t('When I was gone up into the mount to receive the tables of stone, even the '),
                hg('tables of the covenant', 'c-covenant-tablets'),
                t(' which the LORD made with you, then I abode in the mount forty days and forty nights, I neither ate bread nor drank water:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the LORD delivered unto me two tables of stone written with the finger of God; and on them was written according to all the words, which the LORD spake with you in the mount out of the midst of the fire in the day of the assembly.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And it came to pass at the end of forty days and forty nights, that the LORD gave me the two tables of stone, even the tables of the covenant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deuteronomy_9_v9-15',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 12,
              spans: [
                t('And the LORD said unto me, Arise, get thee down quickly from hence; for thy people which thou hast brought forth out of Egypt have corrupted themselves; they are turned aside quickly out of the way which I commanded them; they have made them a molten image.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Furthermore the LORD spake unto me, saying, I have seen this people, and, behold, it is a stiffnecked people:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Let me alone, that I may destroy them, and blot out their name from under heaven: and I will make of thee a nation mightier and greater than they.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('So I turned and came down from the mount, and the mount burned with fire: and the two tables of the covenant were in my two hands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant-tablets',
          html:
            'Moses is on the mountain for forty days and nights, receiving the covenant written by God&apos;s finger on tablets of stone. No food, no water. He is entirely focused on receiving the word. And while he is there, the people below are worshiping a calf. The contrast could not be starker: covenant above, idolatry below. Faithfulness on one side, rebellion on the other.',
        },
        {
          kind: 'commentary',
          id: 'deut9-law-received-calf-worship',
          html:
            'Moses descends from the mount carrying the covenant tablets, the mount burning with fire, his face shining with the presence of God. And what awaits him at the base? Idolatry. The law written in stone is about to meet the golden calf. The moment of law-giving collides with the moment of law-breaking.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 16,
              spans: [
                t('And I looked, and, behold, ye had sinned against the LORD your God, and had made you a molten calf: ye had turned aside quickly out of the way which the LORD had commanded you.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And I took the two tables, and cast them out of my two hands, and brake them before your eyes.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And I fell down before the LORD, as at the first, forty days and forty nights: I did neither eat bread, nor drink water, because of all your sins which ye sinned, in doing wickedly in the sight of the LORD, to provoke him to anger.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For I was afraid of the anger and hot displeasure, wherewith the LORD was wroth against you to destroy you. But the LORD hearkened unto me at that time also.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the LORD was very angry with Aaron also to have destroyed him: and I prayed for Aaron also at the same time.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And I took your sin, the calf which ye had made, and burnt it with fire, and stamped it, and ground it very small, even until it was as dust: and I cast the dust thereof into the brook that descended out of the mount.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-breaking-tablets',
          html:
            'When Moses comes down and sees the calf, he breaks the tablets. The covenant, offered to a people in open rebellion, is broken in their sight. It is a prophetic act: they have already broken covenant in their hearts. The tablets are a sign of what has already happened spiritually.',
        },
        {
          kind: 'commentary',
          id: 'c-intercession-fasting',
          html:
            'Moses tells them plainly: I fell down before the Lord forty days and forty nights. No bread, no water. I prayed because of your sins. He didn&apos;t pray for himself — he was the one who had been faithful. He prayed for them, for their sins, for their rebellion. This is the picture of intercession the whole Bible has been reaching for: someone standing so entirely on behalf of others that they fast, they suffer, they plead.',
        },
        {
          kind: 'carry',
          html:
            'There is a pattern worth seeing: sin below, someone praying above. Idolatry in the camp, intercession on the mountain. The moment you notice someone carrying weight in prayer for something you&apos;ve done — that is grace visibly at work. You do not have to stand alone before the wrath. Someone is standing in the gap. And in the gospel, that someone is Christ, praying not for forty days but eternally, making intercession for us always.',
        },
        {
          kind: 'reflection',
          id: 'deut9-calf',
          prompt:
            'What golden calf — what idol, what false god, what thing you&apos;ve chased instead of Him — were you worshiping when someone else was faithfully seeking God on your behalf? How does that shape the way you understand your own forgiveness?',
        },
      ],
    },

    /* ─── Deuteronomy 9:22–24 — The Catalog of Rebellion ──────────────── */
    {
      ref: 'Deuteronomy 9:22–24',
      title: 'The Long Pattern of Rebellion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And at Taberah, and at Massah, and at Kibroth-hattaavah, ye '),
                hg('provoked the LORD to wrath', 'c-taberah'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Likewise when the LORD sent you from Kadesh-barnea, saying, Go up and possess the land which I have given you; then ye rebelled against the commandment of the LORD your God, and ye believed him not, nor hearkened to his voice.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Ye have been rebellious against the LORD from the day that I knew you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-taberah',
          html:
            'Taberah: "burning place" — they complained and fire consumed the edges of the camp. Massah: "testing place" — they tested God, asking, "Is the Lord among us or not?" Kibroth-hattaavah: "graves of craving" — they complained about food and God sent quail until they were eating quail with their teeth, dying with the meat still in their mouths. Kadesh-barnea: they saw the land, heard the report of giants, and refused to enter. Not mistakes. Rebellions. The difference is active. A mistake is something that happens; rebellion is something you choose to do in the face of God&apos;s clear command.',
        },
        {
          kind: 'commentary',
          id: 'c-pattern',
          html:
            'Moses lists the rebellions because the pattern matters. It is not a one-time lapse. From the day they left Egypt, they have been turning away. And yet they are about to inherit the land. The inheritance is not a reward for faithfulness. It is grace extended to rebellion. Over and over. At every place, at every opportunity to trust, they refused. And yet God did not end them. Someone prayed.',
        },
        {
          kind: 'carry',
          html:
            'You can probably make your own list. The places where you were warned and did not listen. Where God said "go" and you said "wait." Where you tested Him, doubted Him, preferred your own way. The catalog of a life of half-turns and half-faith. If inheritance were based on the pattern of your obedience, you would not inherit. But Deuteronomy says: you are standing at the Jordan anyway. Someone has been standing in the gap.',
        },
        {
          kind: 'reflection',
          id: 'deut9-rebellion',
          prompt:
            'If Moses were listing the places where you have resisted God&apos;s clear command or doubted His leading, what places would he name? How has His patience held you longer than your own faithlessness should have allowed?',
        },
      ],
    },

    /* ─── Deuteronomy 9:25–29 — The Intercession That Saves ──────────── */
    {
      ref: 'Deuteronomy 9:25–29',
      title: 'Moses Pleads for the People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 25,
              spans: [
                t('Thus I fell down before the LORD forty days and forty nights, as I fell down at the first; because the LORD had said he would destroy you.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But I prayed unto the LORD, and said, O Lord GOD, destroy not thy people and thine inheritance, which thou hast redeemed through thy greatness, and which thou hast brought forth out of Egypt with a mighty hand.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Remember thy servants, Abraham, Isaac, and Jacob; look not unto the stubbornness of this people, nor to their wickedness, nor to their sin:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Lest the land whence thou broughtest us out say, Because the LORD was not able to bring them into the land which he promised them, and because he hated them, he hath brought them out to slay them in the wilderness.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Yet they are thy people and thine inheritance, which thou broughtest out by thy mighty power and by thy stretched out arm.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pray-for-them',
          html:
            'Notice what Moses does not do. He does not try to defend Israel&apos;s righteousness. He doesn&apos;t argue, "They aren&apos;t really that bad." He does not appeal to their merit. He appeals to God&apos;s name, God&apos;s oath, God&apos;s character [res:intercession-prayer-ancient-near-east]. <em>Destroy not thy people and thine inheritance.</em> They belong to you. You redeemed them. You brought them out with a mighty hand. Remember your servants — Abraham, Isaac, and Jacob. Look not unto their stubbornness, their wickedness, their sin. Look unto your own promise [res:election-grace-not-merit-bible-odyssey].',
        },
        {
          kind: 'commentary',
          id: 'c-whence-thou-broughtest',
          html:
            'Moses adds something stunning: <em>Lest the land whence thou broughtest us out say, Because the LORD was not able to bring them in.</em> He is concerned for God&apos;s reputation. If God allows Israel to be destroyed in the wilderness, Egypt will say God was too weak to fulfill His word. It is not a selfish prayer. It is a prayer grounded in God&apos;s honor. The nations need to know that God&apos;s word cannot be broken.',
        },
        {
          kind: 'christ',
          id: 'c-intercession-christ',
          title: 'Christ Connection — The Intercessor&apos;s Work',
          html:
            'Hebrews describes Jesus: "He is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Heb. 7:25). Moses made intercession for forty days. Christ makes intercession eternally. What Moses asked — that God would look not unto the stubbornness and sin of His people, but unto His own oath and character — is exactly what Christ&apos;s presence at the Father&apos;s right hand accomplishes. Christ doesn&apos;t defend our righteousness. He appeals to the Father&apos;s character, His oath, His greatness. And the Father listens.',
        },
        {
          kind: 'carry',
          html:
            'When shame tells you that you are too stubborn, too wicked, too sinful to be held by God&apos;s love, know that there is someone in the presence of the Father making intercession for you — not on the basis of your merit, but on the basis of God&apos;s oath, His greatness, His reputation. The Father will not let His name be dishonored by losing what He has redeemed and brought out with His mighty hand. You are held not by your own faithfulness but by His.',
        },
        {
          kind: 'reflection',
          id: 'deut9-intercession',
          prompt:
            'Who has ever prayed for you when you did not deserve it — when you were stubborn, wicked, sinful, and yet someone stood before God and asked Him to look not at that but at His own goodness? How does knowing that Christ is making that same intercession for you now change the way you see yourself?',
        },
      ],
    },

    /* ─── Deuteronomy 9:30 — The Lord Hearkened ───────────────────────── */
    {
      ref: 'Deuteronomy 9:30',
      title: 'The Lord Hearkened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 30,
              spans: [
                t('Howbeit the LORD hearkened unto me at that time also, and the LORD was not willing to destroy thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hearkened',
          html:
            'The Lord <em>hearkened.</em> He listened. He turned. The wrath was averted. Not because Israel repented — they didn&apos;t. Not because they were suddenly good — they weren&apos;t. But because Moses stood in the gap and prayed on the basis of God&apos;s name and God&apos;s oath, and God, being who He is, could not refuse. This is how the covenant works. Always has.',
        },
        {
          kind: 'christ',
          id: 'c-hearkened-christ',
          title: 'Christ Connection — Always Answered',
          html:
            'John says of Jesus: "And he that sent me is with me: the Father hath not left me alone; for I do always those things that please him" (John 8:29). Jesus&apos; intercession is never refused because His prayer is always the prayer of the one who <em>always</em> pleases the Father. The answer is built into the asking. Every time you wonder if your prayer will be heard, remember: Christ is praying for you in the presence of a Father who never refuses Him.',
        },
        {
          kind: 'carry',
          html:
            'When you stand before God and feel the weight of what you&apos;ve done, the first word is this: hearkened. The Lord listens. Not because you deserve a hearing, but because someone is interceding for you, and God is faithful to those who intercede in His name. You are heard.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'deut9-hearkened',
          prompt:
            'What would change in your faith if you really believed that God is always listening to the intercession made on your behalf — that you are not standing alone before His judgment, but that someone is speaking for you, and He has always, always hearkened?',
        },
      ],
    },
  ],
};
