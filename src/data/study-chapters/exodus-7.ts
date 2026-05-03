import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 7 — Moses as "God to Pharaoh." Aaron's rod becomes a serpent.
 * Pharaoh's heart hardens. The first plague: the Nile turns to blood.
 *
 * This chapter opens the confrontation between the God of Israel and the
 * powers of Egypt. Through it all, two truths stand: God is sovereign over
 * all earthly authority, and He moves deliberately, with intent to reveal
 * Himself.
 */
export const EXODUS_7: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 14 },
  intros: [
    'God has told Moses and Aaron to demand Pharaoh release Israel. Now, in Exodus 7, the confrontation begins. Moses will be placed over Pharaoh like a god — and Aaron will be his prophet, speaking on his behalf. Before the plagues come, Pharaoh is given a sign: Aaron&apos;s rod becomes a serpent and swallows the serpents of Egypt&apos;s own magicians. The God who made creation holds power over every counterfeit power in the world.',
    'But there is tension in this chapter that the Bible does not resolve. Pharaoh hardens his own heart — and God also hardens his heart. Both are true. Both are stated without apology, without one canceling the other. The reader is left to hold both without a system, both without neat resolution. And then the Nile — the lifeblood of Egypt, worshiped as a god — turns to blood. A god cannot bleed. Pharaoh can only watch.',
  ],

  sections: [
    /* ─── Exodus 7:1–7 — Moses Elevated, Aaron Commissioned ────────────── */
    {
      ref: 'Exodus 7:1–7',
      title: 'God Sets Moses Over Pharaoh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD said unto Moses, See, I have made thee a '),
                hp('god to Pharaoh', 'c-god-to-pharaoh'),
                t(': and Aaron thy brother shall be thy '),
                hy('prophet', 'hebrew-navi'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-to-pharaoh',
          html:
            'Moses is made a <em>god</em> to Pharaoh — not that Moses is divine, but that he stands in the place of absolute authority, speaking God&apos;s word with the weight of divinity. In the ancient Near East, a pharaoh was viewed as a god himself. Now God positions Moses above him. The one who stammers, who doubted his own adequacy in Exodus 3, is elevated to stand as the embodiment of God&apos;s power before the mightiest human authority of his age[res:plague-blood].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-navi',
          title: 'Navi — &ldquo;prophet&rdquo;',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · one who speaks forth, declares, proclaims',
          description:
            'Aaron becomes the &ldquo;mouth&rdquo; — the visible speaker through whom the invisible God&apos;s word is declared. The prophet is not a predictor of distant futures, but a present speaker of what God is doing now.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [
                t('Thou shalt speak all that I command thee: and Aaron thy brother shall '),
                hg('speak unto Pharaoh', 'c-aaron-role'),
                t(', that he send the children of Israel out of his land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aaron-role',
          html:
            'The word &ldquo;speak&rdquo; will dominate this chapter: God speaks to Moses, Moses passes it to Aaron, Aaron speaks to Pharaoh. The authority flows downward through a chain of speakers, each one accountable to carry the message faithfully. This is how God works in history — through human voices, human presence, human risk[res:nile-archaeology].',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('And I will '),
                hp('harden Pharaoh&apos;s heart', 'c-judgment-display'),
                t(', and multiply my signs and my wonders in the land of Egypt.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But Pharaoh shall not hearken unto you, that I may lay my hand upon Egypt, and bring forth my armies, and my people the children of Israel, out of the land of Egypt by great judgments.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the Egyptians shall know that I am the LORD, when I stretch forth my hand upon Egypt, and bring out the children of Israel from among them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judgment-display',
          html:
            'God announces His intention from the start: Pharaoh will not listen, his heart will be hardened, and through the judgment that follows, both Egypt and Israel will know who the LORD is. The purpose is not cruelty for its own sake, but revelation. God hardens Pharaoh&apos;s heart so that the full weight of His power can be displayed. A quick release might have left the question unanswered: Who is actually sovereign over the throne of Egypt?',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [t('And Moses and Aaron did as the LORD commanded them.')],
            },
            {
              number: 7,
              spans: [t('And Moses was fourscore years old, and Aaron fourscore and three years old, when they spake unto Pharaoh.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-old-age',
          html:
            'Moses is eighty years old, Aaron eighty-three. They are not young men stepping into a cause. They are men with a lifetime behind them, now called to speak with a power that comes not from their own strength but from God. Age itself becomes a kind of witness: this is not youthful ambition, but the word of the God who has kept His people for four hundred years.',
        },
        {
          kind: 'carry',
          html:
            'When God says "I have made you a god to Pharaoh," He is not flattering you. He is positioning you to speak His word into the highest human authority you will ever face. That authority might be your boss, your family system, your culture, your own fear. God&apos;s word through you has more weight than any of it. You don&apos;t need eloquence; you need faithfulness. You don&apos;t need to be young; you need to speak what you have been told.',
        },
        {
          kind: 'reflection',
          id: 'elevation',
          prompt:
            'Where in your life do you need to remember that God has placed you to speak His word into an authority structure, not beneath it? What would shift if you believed you stood as His representative there?',
        },
      ],
    },

    /* ─── Exodus 7:8–13 — The Sign of the Serpent ────────────────────── */
    {
      ref: 'Exodus 7:8–13',
      title: 'Aaron&apos;s Rod Becomes a Serpent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 8,
              spans: [
                t('And the LORD spake unto Moses and unto Aaron, saying, When Pharaoh shall speak unto you, saying, Shew a miracle for you: then thou shalt say unto Aaron, Take thy rod, and cast it before Pharaoh, and it shall become a '),
                hy('serpent', 'hebrew-tannin'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tannin',
          title: 'Tannin — &ldquo;serpent&rdquo;',
          script: 'תַּנִּין',
          translit: '<strong>tannin</strong> · sea-monster, chaos-creature, great serpent',
          description:
            'The same word used in Genesis 1:21 for the great sea creatures God blessed. Throughout Scripture, tannin refers to the chaos-forces God overcomes. Here, the rod becomes that very thing — and then swallows the chaos of Egypt&apos;s own magicians.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('Then said the LORD unto Moses and Aaron, If Pharaoh shall say unto you, Prove yourselves by a miracle; then thou shalt say unto Aaron, Cast down thy rod before Pharaoh, and it shall '),
                hp('become a serpent', 'c-cast-rod'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Moses and Aaron went in unto Pharaoh, and they did so as the LORD had commanded: and Aaron '),
                hg('cast down his rod', 'c-cast-rod'),
                t(' before Pharaoh, and before his servants, and it became a serpent.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cast-rod',
          html:
            'The rod is cast down before Pharaoh, before his whole court. This is not a private demonstration. The sign is public, witnessed, undeniable. And what happens is not sleight of hand or illusion — the Hebrew word makes clear it becomes a serpent in fact. God has given Aaron power over the very form that represents chaos and the occult in Egypt.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('Then Pharaoh also called the wise men and the sorcerers: now the magicians of Egypt, they also did in like manner with their '),
                hg('enchantments', 'c-enchant'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('For they cast down every man his rod, and they became serpents: but '),
                hp('Aaron&apos;s rod swallowed up their rods', 'christ-authority'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-enchant',
          html:
            'Pharaoh&apos;s magicians replicate the sign. The word is <em>lahitim</em> — their spells, their craft. But replication is not the same as authority. Egypt&apos;s magic has real power — the Bible does not deny that — but it is subordinate. The God of Israel does not compete; He overrides. The rods become serpents; Aaron&apos;s serpent consumes them all. There is hierarchy in the unseen world, and the hierarchy has already been decided.',
        },
        {
          kind: 'christ',
          id: 'christ-authority',
          title: 'Christ Connection — Authority Over Every Power',
          html:
            'Paul names Jesus as the one "who is the image of the invisible God… by him were all things created… And he is before all things, and by him all things consist… And, having made peace through the blood of his cross… whether they be thrones, or dominions, or principalities, or powers… all things were created by him, and for him" (Col. 1:15–16, 20). The rod swallowing the other rods is a picture of Christ&apos;s authority — not competing with the powers of the age, but rendering them subordinate, making them subject to Him through the cross (Col. 2:15).',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('And '),
                hg('he hardened Pharaoh&apos;s heart', 'c-harden-self'),
                t(', that he hearkened not unto them; as the LORD had said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-harden-self',
          html:
            'Pharaoh witnesses the sign — Moses and Aaron have done what God commanded, the serpent has swallowed the counterfeit serpents, the hierarchy of power is displayed. And Pharaoh&apos;s heart hardens. The text here uses the active voice: Pharaoh is the one who hardens his own heart. He closes himself to what he has just witnessed. This is his choice. Yet God announced in verse 3 that He would harden Pharaoh&apos;s heart. The Bible holds both true without resolution.',
        },
        {
          kind: 'carry',
          html:
            'You have seen signs in your own life — moments when God&apos;s authority became undeniable, when a prayer was answered in a way that made clear what was real. The choice that follows is always yours: will you let your heart remain open to what you&apos;ve seen, or will you harden against it? Pharaoh closes himself even to the clear display of power. What counterfeit have you been holding onto that God has shown you is subordinate to Him?',
        },
        {
          kind: 'reflection',
          id: 'serpent-sign',
          prompt:
            'When have you witnessed something that was unmistakably God&apos;s work? What was your instinct — to open your heart further, or to harden against it?',
        },
      ],
    },

    /* ─── Exodus 7:14–25 — The First Plague: Blood ────────────────────── */
    {
      ref: 'Exodus 7:14–25',
      title: 'The Nile Turns to Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD said unto Moses, Pharaoh&apos;s heart is hardened: he refuseth to let the people go.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Get thee unto Pharaoh in the morning; lo, he goeth out unto the water; and thou shalt stand by the river&apos;s brink against him, and the rod which was turned to a serpent shalt thou take in thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-morning',
          html:
            'God sends Moses to meet Pharaoh in the morning, at the water. Every phrase is chosen. The morning is the time of visibility, of clarity. The water is where Pharaoh goes for his daily rituals. And Moses will stand against him, rod in hand. The confrontation will be direct.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('And thou shalt say unto him, The LORD God of the Hebrews hath sent me unto thee, saying, Let my people go, that they may serve me in the wilderness: and, behold, hitherto thou wouldest not hear.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Thus saith the LORD, In this thou shalt know that I am the LORD: I will smite the waters which are in the river, and they shall be turned to '),
                hp('blood', 'christ-nile-blood'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-knowledge-lord',
          html:
            'God does not strike Pharaoh with plague for pride or vengeance. He strikes to establish one fact: <em>I am the LORD.</em> The plague is an argument. Every judgment that follows will be designed to answer the same question with increasing clarity. Pharaoh claims to be god; God will prove otherwise by striking the very waters Pharaoh depends on.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 18,
              spans: [
                t('And the fish that is in the river shall die; and the river shall '),
                hg('stink', 'c-stink'),
                t('; and the Egyptians shall '),
                hg('loathe to drink', 'c-loathe'),
                t(' of the water of the river.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stink',
          html:
            'Blood stinks. Fish die. The river, which was Egypt&apos;s lifeblood and the object of their worship (Hapi, the Nile god), becomes a thing of death and stench. This is not a natural disaster — it is a judgment authored by God, striking at the very source of Egypt&apos;s abundance and security.',
        },
        {
          kind: 'commentary',
          id: 'c-loathe',
          html:
            'The Egyptians will loathe to drink. The word suggests not just refusal but revulsion — a turning away from what they had depended on. When you realize what you trusted is false, it does not just disappoint. It becomes repulsive. Your whole foundation shifts.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 19,
              spans: [
                t('And the LORD spake unto Moses, Say unto Aaron, Take thy rod, and stretch out thine hand upon the waters of Egypt, upon their streams, upon their rivers, and upon their ponds, and upon all their pools of water, that they may become blood; and that there may be blood throughout all the land of Egypt, both in vessels of wood, and in vessels of stone.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-comprehensive',
          html:
            'The plague is comprehensive — not one river, but all waters. Every stream, every pond, every reservoir. Even water stored in wooden and stone vessels becomes blood. There is no escape. Egypt cannot work around this judgment. The source of all life has been struck.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('And Moses and Aaron did so, as the LORD commanded; and he lift up the rod, and smote the waters that were in the river, in the sight of Pharaoh, and in the sight of his servants; and all the waters that were in the river were turned to blood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-all-obedience',
          html:
            'Moses obeys. He does exactly what God has commanded. There is no hesitation, no negotiation. And the waters turn to blood in the sight of Pharaoh and his servants — publicly, witnessed, undeniable.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 21,
              spans: [
                t('And the fish that was in the river died; and the river stank, and the Egyptians could not drink of the water of the river; and there was blood throughout all the land of Egypt.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the magicians of Egypt did so with their enchantments: and Pharaoh&apos;s heart was hardened, and he hearkened not unto them; as the LORD had said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-magicians-copy',
          html:
            'The magicians replicate the plague. Egypt has water turned to blood everywhere, and the magicians produce more blood. This is not a victory for Egypt&apos;s magic — it is a defeat masquerading as a tie. While the magicians make blood where there is already blood, they cannot restore what has been taken away. They can mimic God&apos;s destructive power, but they cannot create, cannot provide, cannot sustain.',
        },
        {
          kind: 'christ',
          id: 'christ-nile-blood',
          title: 'Christ Connection — The Source of Life Struck',
          html:
            'The Nile is Egypt&apos;s god and Egypt&apos;s life. God strikes it and turns it to death. Jesus teaches: "Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit" (John 12:24). The Nile struck at the cross seemed to be a final judgment — the source of the world&apos;s redemption turned to blood, to death. But from that death came the resurrection that cleanses us more thoroughly than all Egypt&apos;s waters. The blood of Christ does what Egypt&apos;s blood could not: it makes us alive.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 23,
              spans: [
                t('And Pharaoh turned and went into his house, neither was his heart moved by this:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And all the Egyptians digged round about the river for water to drink; for they could not drink of the water of the river.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And seven days were fulfilled, after that the LORD had smitten the river.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-final-image',
          html:
            'Pharaoh sees the plague, sees his people digging desperately for water to survive, and turns back to his house — his heart unmoved. He will not yield. Yet the judgment has been given, and it will last seven days. The chapter closes with that image: Egypt suffering, Pharaoh refusing, and the God of Israel silently proving that He, not Pharaoh, holds the power of life and death.',
        },
        {
          kind: 'carry',
          html:
            'The Nile represents the thing you build your life on that is not God — a source of security, identity, or strength that you have trusted with your survival. When that thing is struck (and it will be struck if it is not God), the reflex is to dig around it, to find some workaround, some way to keep it going. Pharaoh digs around the stricken Nile. You dig around whatever you have depended on instead of God. The only real response is to let it go and ask God to be your water.',
        },
        {
          kind: 'reflection',
          id: 'nile-reflection',
          prompt:
            'What "Nile" have you been depending on to sustain your life — success, a relationship, a source of identity? What would it look like to stop digging around it and turn to God instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The LORD God of the Hebrews hath sent me unto thee, saying, Let my people go. In this thou shalt know that I am the LORD: I will smite the waters which are in the river, and they shall be turned to blood.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 7 · Study Guide',
  },


  resources: [
    {
      id: 'plague-blood',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Plague of Blood',
      url: 'https://www.bibleodyssey.org/dictionary/blood/',
      description: 'Commentary on the first plague and the Nile.',
    },
    {
      id: 'nile-archaeology',
      kind: 'archaeology',
      source: 'Met Museum',
      label: 'The Nile in Ancient Egypt',
      url: 'https://www.metmuseum.org/',
      description: 'Artifacts on the Nile&apos;s centrality to Egyptian life.',
    },
  ],

  hasHebrew: true,
};
