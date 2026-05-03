import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 24 — the covenant ratified with blood. Blood on the altar and the people;
 * the meal on the mountain; Moses ascends into the cloud for 40 days.
 */
export const EXODUS_24: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 24,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 14 },
  intros: [
    'Exodus 24 is where the covenant becomes real. For three chapters God has been speaking the law from Mount Sinai—the Ten Commandments, the case laws, the rules for altars and holy days. Now the people stand at the foot of the mountain and hear all of it read aloud. "All the words which the LORD hath said will we do," they answer. It is a commitment written not in stone yet, but in breath, in witness, in the presence of each other.',
    'Then Moses does something that will echo through two thousand years of Christian history: he takes the blood of young bulls, pours half on an altar, and sprinkles the other half on the people. "Behold the blood of the covenant," he says. The language is so specific, so careful, that when Jesus sits down at His last meal with His disciples and holds up a cup of wine, He uses nearly the same words: "This is my blood of the new testament." The meal on the mountain—where Moses, Aaron, and the seventy elders eat in the presence of God—foreshadows the table Jesus sets.',
    'Finally, Moses leaves the people behind and climbs higher into the cloud, where the LORD will write the Ten Commandments on two stone tablets. He will be there forty days and forty nights. The pattern echoes everywhere: Jesus in the wilderness forty days; the Risen Jesus appearing for forty days after the resurrection. In each case, a solitary figure enters hiddenness with God and returns carrying something meant to transform the covenant people.',
  ],

  tapHint: 'Tap any highlighted phrase to read deeper commentary.',

  sections: [
    /* ─── Exodus 24:1–2 — The Summons ───────────────────────────────────── */
    {
      ref: 'Exodus 24:1–2',
      title: 'The Summons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('And he said unto Moses, '),
                hp('Come up unto the LORD', 'ex24-come'),
                t(', thou, and Aaron, Nadab, and Abihu, and seventy of the elders of Israel; and worship ye afar off.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Moses alone shall '),
                hy('come near', 'ex24-near'),
                t(' the LORD: but they shall not come nigh; neither shall the people go up with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-come',
          html:
            'Moses is the mediator—the one who stands in the middle. He brings others as far as they can go, but he alone continues higher. The pattern is deliberate: three named men (Nadab and Abihu will reappear later, fatally), plus seventy elders. Jesus will later send out seventy (or seventy-two) disciples; He will have three closest companions; the pattern of the few within the many holds.',
        },
        {
          kind: 'commentary',
          id: 'ex24-near',
          html:
            'There is a distance even in worship. The people worship from afar off; only Moses draws near. Holiness is not a feeling or a moment of personal emotion—it is a relationship with God that has boundaries, hierarchies, gradations. You do not walk into the presence of fire as if it were a living room.',
        },
      ],
    },

    /* ─── Exodus 24:3–8 — The Covenant Sealed ──────────────────────────── */
    {
      ref: 'Exodus 24:3–8',
      title: 'The Covenant Sealed in Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 3,
              spans: [
                t('And Moses came and '),
                hg('told the people all the words of the LORD', 'ex24-words'),
                t(', and all the judgments: and all the people answered with one voice, and said, All the words which the LORD hath said will we do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-words',
          html:
            'Moses is the messenger. The people hear the law not firsthand from God—they hear it through Moses. And they commit with a unified voice: "All the words...will we do." It is not a shout of enthusiasm. It is a covenant oath, sworn in front of witnesses, knowing the weight of what they are saying.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 4,
              spans: [
                t('And Moses wrote '),
                hg('all the words of the LORD', 'ex24-written'),
                t(', and rose up early in the morning, and builded an altar under the hill, and twelve pillars, according to the twelve tribes of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-written',
          html:
            'The law is written. It is not forgotten. And Moses builds an altar with twelve pillars—one for each tribe. Every tribe witnesses this. Every tribe is represented at this moment of covenant-binding.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 5,
              spans: [
                t('And he sent '),
                hy('young men of the children of Israel', 'ex24-young'),
                t(', which '),
                hy('offered burnt offerings', 'ex24-offering'),
                t(', and sacrificed peace offerings of bullocks unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-young',
          html:
            'Young men—not priests yet. The priesthood is not yet formally established. But someone must perform this sacrificial work, and in this moment, the people themselves are still standing close enough to the sacred to do it.',
        },
        {
          kind: 'commentary',
          id: 'ex24-offering',
          html:
            'Burnt offerings and peace offerings work together. The burnt offering is total surrender—the whole animal goes to God in smoke. The peace offering is different: the animal is shared, eaten by the people. The covenant moment combines both: complete gift to God, and shared meal among the people.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-olah',
          title: 'Olah — "burnt offering"',
          script: 'עוֹלָה',
          translit: '<strong>olah</strong> · something that goes up in smoke; a complete offering',
          description:
            'The burnt offering is the most complete surrender—the entire animal goes to God in smoke. Nothing is kept back. In this moment, before the covenant is ratified with blood, the people are already saying: all of me, fully given.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 6,
              spans: [
                t('And Moses took '),
                hg('half of the blood', 'ex24-blood'),
                t(', and put it in basons; and half of the blood he sprinkled on the altar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-blood',
          html:
            'Half the blood goes on the altar—on God&apos;s side. Half is held in basins, waiting. The covenant is being built in two acts, like a bridge spanning from God to the people.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 7,
              spans: [
                t('And he took '),
                hg('the book of the covenant', 'ex24-book'),
                t(', and '),
                hg('read in the audience of the people', 'ex24-audience'),
                t(': and they said, All that the LORD hath said will we do, and be obedient.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-book',
          html:
            'The law is read aloud, witnessed, known. No one can later claim ignorance. The people hear the words of their commitment read in full.',
        },
        {
          kind: 'commentary',
          id: 'ex24-audience',
          html:
            'This is public covenant-making. Not private. Not one person deciding for themselves. The whole people stands and listens and speaks their answer together.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 8,
              spans: [
                t('And Moses took '),
                hp('the blood', 'ex24-blood-people'),
                t(', and '),
                hp('sprinkled it on the people', 'ex24-blood-people'),
                t(', and said, '),
                hp('Behold the blood of the covenant', 'ex24-blood-people'),
                t(', which the LORD hath made with you concerning all these words.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'ex24-blood-people',
          title: 'Christ Connection — This Is My Blood',
          html:
            'Thirteen centuries later, Jesus sits at His last supper with His disciples. He holds up a cup and says, "This is my blood of the new testament"—the new covenant. The language is nearly identical to Exodus 24:8. Matthew records it: "this is my blood of the covenant, which is shed for many for the remission of sins" (Matt. 26:28). Hebrews 9:18–22 makes the connection explicit: "Whereupon neither the first testament was dedicated without blood… without shedding of blood is no remission." The covenant meal on Sinai, where the people eat in God&apos;s presence after the blood is sprinkled, foreshadows the meal Jesus institutes—where His followers eat in His presence, united by blood, forever.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever made a promise you meant to keep—a marriage vow, a commitment to a child, a word given to a friend—you know that words alone can be fragile. Exodus shows us why blood was needed. The covenant was not a nice idea Moses pitched to an eager people. It was a binding, binding to the point of death. When Jesus later takes that pattern and applies it to Himself—"My blood of the covenant"—He is saying: the deepest promises I make are backed by everything I am, even my life. If you have promised anything in His name, you are standing in that same tradition now.',
        },
        {
          kind: 'reflection',
          id: 'ex24-blood-ref',
          prompt:
            'When you think about covenant—about promises meant to hold through everything—what is one commitment you&apos;ve made that the blood-language of this chapter brings to mind?',
        },
      ],
    },

    /* ─── Exodus 24:9–11 — The Meal on the Mountain ──────────────────────── */
    {
      ref: 'Exodus 24:9–11',
      title: 'The Meal in His Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 9,
              spans: [
                t('Then went up '),
                hy('Moses, and Aaron, Nadab, and Abihu', 'ex24-leaders'),
                t(', and '),
                hy('seventy of the elders of Israel', 'ex24-seventy'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they '),
                hg('saw the God of Israel', 'ex24-see'),
                t(': and there was under his feet as it were a paved work of a sapphire stone, and as it were the body of heaven in his clearness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-leaders',
          html:
            'Moses brings the three named leaders and the seventy elders. Thirteen men—plus Moses makes fourteen. In the Gospels, Jesus will later be crucified with twelve disciples, a pattern of twelve within the structure of covenant leadership.',
        },
        {
          kind: 'commentary',
          id: 'ex24-seventy',
          html:
            'The seventy elders foreshadow the Sanhedrin—the council of seventy that would later govern Israel. And they also foreshadow the seventy disciples Jesus sends out in Luke 10, walking ahead of Him into every place He was about to go.',
        },
        {
          kind: 'commentary',
          id: 'ex24-see',
          html:
            'They "see" God. Not in a trance or vision. They ascend the mountain and look. The text is careful with its language: there is no description of God&apos;s face or form. Only that beneath His feet is something like a pavement of sapphire—the very stone of heaven, clear and pure. The inaccessible God becomes, for this moment, visible.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 11,
              spans: [
                t('And upon the nobles of the children of Israel he laid not his hand: also they '),
                hg('beheld God', 'ex24-behold'),
                t(', and did '),
                hg('eat and drink', 'ex24-eat'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-behold',
          html:
            'They "beheld God"—the word is intentional. Not a fleeting glance. A sustained looking. And God did not strike them. The judgment does not fall. Instead, something else happens.',
        },
        {
          kind: 'commentary',
          id: 'ex24-eat',
          html:
            'They eat and drink. In God&apos;s presence. After the covenant is sealed in blood, the people do not leave. They stay. They feast. This is the oldest pattern of communion: the meal that binds the covenant and seals it with sustenance. Every Passover meal that follows echoes this. Every Eucharistic meal in the Church flows from this.',
        },
        {
          kind: 'carry',
          html:
            'Most of us have known a meal that mattered. Not for the food, but for who was at the table. A table that held a promise, or sealed a forgiveness, or marked the turning of something in a relationship. Exodus 24 shows us that God invented that kind of meal. To know Him is not to fear and flee. It is to sit down together in His presence and eat.',
        },
        {
          kind: 'reflection',
          id: 'ex24-meal-ref',
          prompt:
            'What does it stir in you to know that the covenant relationship with God includes not fear alone, but a meal? What would eating and drinking in His presence actually feel like to you?',
        },
      ],
    },

    /* ─── Exodus 24:12–14 — Moses Ascends ──────────────────────────────── */
    {
      ref: 'Exodus 24:12–14',
      title: 'The Ascent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 12,
              spans: [
                t('And the LORD said unto Moses, '),
                hg('Come up to me into the mount', 'ex24-mount'),
                t(', and be there: and I will give thee '),
                hg('tables of stone', 'ex24-stone'),
                t(', and a law, and commandments which I have written; that thou mayest teach them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-mount',
          html:
            'Moses is called higher still. Not to the foot of the mountain. Not even to the level where the seventy elders gathered. But into the cloud itself, into the presence of God in a way that even the leaders cannot follow.',
        },
        {
          kind: 'commentary',
          id: 'ex24-stone',
          html:
            'The law is to be written on stone. Not on parchment. Not on something perishable. On stone that will last. The covenant is permanent. It will outlive every generation that reads it.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 13,
              spans: [
                t('And Moses rose up, and his minister '),
                hy('Joshua', 'ex24-joshua'),
                t(': and Moses went up into the mount of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-joshua',
          html:
            'Joshua goes with him—the one who will later lead Israel into the Promised Land. The younger generation goes with the older to receive what will shape their future.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 14,
              spans: [
                t('And he said unto the elders, '),
                hg('Tarry ye here for us', 'ex24-wait'),
                t(', until we come again unto you: and, behold, Aaron and Hur are with you: if any man have a matter, let him come unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-wait',
          html:
            'The elders remain below, waiting. They have seen God and eaten, but now they must wait while Moses receives the tablets. Aaron and Hur stay with them—the human leaders in this interval. It is a pattern: some are called up. Others hold the space below. Both roles matter in covenant community.',
        },
      ],
    },

    /* ─── Exodus 24:15–18 — Forty Days in the Cloud ────────────────────── */
    {
      ref: 'Exodus 24:15–18',
      title: 'The Forty Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 15,
              spans: [
                t('And Moses went up into the mount, and '),
                hy('a cloud covered the mount', 'ex24-cloud'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the glory of the LORD '),
                hy('abode upon mount Sinai', 'ex24-glory'),
                t(', and the cloud covered it six days: and the seventh day he called unto Moses out of the midst of the cloud.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-cloud',
          html:
            'A cloud covers the mountain. The same cloud that led Israel through the wilderness, that filled the tabernacle when it was completed. The presence of God is visible as cloud, but also hidden—a concealment that is itself a form of revelation.',
        },
        {
          kind: 'commentary',
          id: 'ex24-glory',
          html:
            'The glory of God "abode"—it rested, settled, took residence on the mountain. For six days the cloud covers Sinai, and on the seventh day God speaks to Moses from within it. Even in the cloud, even in concealment, God is present and speaking.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kavod',
          title: 'Kavod — "glory"',
          script: 'כָּבוֹד',
          translit: '<strong>kavod</strong> · weight, heaviness; the visible presence of God',
          description:
            'Kavod literally means weight or burden. God&apos;s presence is not light or easy—it is weighty. To encounter His glory is to feel the press and weight of reality itself, the substance of the sacred pressing in.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 17,
              spans: [
                t('And the sight of the glory of the LORD was like '),
                hg('devouring fire', 'ex24-fire'),
                t(' on the top of the mount in the eyes of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex24-fire',
          html:
            'From below, looking up, the cloud glows with fire. The consuming power of the holy. The people watch and wait while Moses ascends into it.',
        },

        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 18,
              spans: [
                t('And '),
                hp('Moses went into the midst of the cloud', 'ex24-cloud-deep'),
                t(', and '),
                hp('was in the mount forty days and forty nights', 'ex24-cloud-deep'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'ex24-cloud-deep',
          title: 'Christ Connection — Forty Days in the Wilderness',
          html:
            'Forty days and forty nights. The number appears again in the New Testament. Jesus is led into the wilderness where He fasts for forty days and forty nights, tested by Satan (Matt. 4:1–2). Moses ascends into the cloud to receive the law written on stone. Jesus enters hiddenness and emerges tempted, then returns to begin His ministry. The pattern holds: solitude with God in the wilderness or cloud, a trial or stripping away, and a return carrying something meant to transform the covenant people. Both figures are alone with God; both emerge with their calling clarified.',
        },
        {
          kind: 'carry',
          html:
            'You will not spend forty days on a mountain. But there are seasons in most lives when you have to step away from the constant noise and presence of other people and sit alone with God. Not a vacation. Not a retreat with activities and company. A real wilderness. A real silence. A real waiting. Moses received stone tablets. You receive clarity about who you are and who He is. The fact that you must eventually come down and live among other people does not diminish the mountain. It is why you went.',
        },
        {
          kind: 'reflection',
          id: 'ex24-cloud-ref',
          prompt:
            'If you knew you would have to descend from a mountain and face hard things, would you still climb it? What would you hope to carry back down with you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The people answered with one voice: "All the words which the LORD hath said will we do." Then Moses sprinkled blood on them, saying, "Behold the blood of the covenant." And they saw God, and ate and drank in His presence.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 24 · Study Guide',
  },

  hasHebrew: true,
};
