import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 19 — The Theophany at Sinai.
 *
 * Three months after the Exodus, Israel arrives at the foot of Mount Sinai.
 * God extends a covenant: "If ye will obey my voice indeed... ye shall be a
 * peculiar treasure unto me... a kingdom of priests, and an holy nation."
 * Israel agrees. Three days of consecration follow, then God descends in fire,
 * smoke, thunder, the trumpet voice. The mountain trembles. The people stand
 * frozen. This chapter is where God publicly, audibly binds Himself to a people
 * and calls them to be something the world has never seen before — not slaves,
 * not subjects, but priests.
 */
export const EXODUS_19: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 19,

  intros: [
    'Exodus opens with Israel in chains, crying out. The next chapters show God moving heaven and earth to answer — plagues, the death of the firstborn, the Red Sea swallowed behind them. Now, three months into the desert, they arrive at Sinai. Exhausted. Thirsty. Bewildered. And it is here, at the mountain, that God stops walking behind them and steps forward. He does not say, "You are mine." He says, "If you will obey my voice, you will become something new."',
    'The offer is breathtaking: a kingdom of priests. Not a king with priests under him, but a whole nation lifted into priesthood — every Israelite a mediator between the holy and the profane, accountable to God and responsible for the people. No one expected this. The ancient world had no language for it. By the end of the chapter, the mountain will shake so hard that Moses himself is terrified. But the terror is not of a tyrant. It is of encountering the living God, who speaks not in whispers but in thunder, and calls His people to something they cannot achieve alone.',
  ],

  opener: {
    matchTitle: /sinai|mount/i,
    matchArtist: /tissot|coelho|rembrandt/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Exodus 19',
    quote:
      'God called Israel at Sinai: "If ye will obey my voice indeed... ye shall be unto me a kingdom of priests, and an holy nation." The mountain trembled, fire covered it, and the trumpet sounded. The God who freed them now bound Himself to them — and bound them to each other and to His word.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 19 · Study Guide',
  },

  sections: [
    /* ─── Exodus 19:1–2 — The Journey Ends ───────────────────────────── */
    {
      ref: 'Exodus 19:1–2',
      title: 'The Journey Ends',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('In the third month, when the children of Israel were gone forth out of the land of Egypt, the same day came they into the '),
                hy('wilderness of Sinai', 'hebrew-sinai'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For they were departed from Rephidim, and were come to the '),
                hg('desert of Sinai', 'c-desert-arrived'),
                t(', and had pitched in the '),
                hg('wilderness', 'c-desert-arrived'),
                t('; and there Israel camped before the mount.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sinai',
          title: 'Sinai — &ldquo;the wilderness&rdquo;',
          script: 'סִינַי',
          translit: '<strong>Sinai</strong> · the mountain; also called Horeb (meaning &ldquo;desolation&rdquo;)',
          description:
            'The mountain itself is barely mentioned by name in the Torah; it is simply "the mount." But to the Israelites camped at its foot, it is the center of the earth — the place where heaven touches ground.',
        },
        {
          kind: 'commentary',
          id: 'c-desert-arrived',
          html:
            'Three months. Long enough for thirst to set in, for the newness of freedom to wear thin, for the people to wonder if Moses had lost his mind leading them into a wasteland. They have no city. They have no home yet. They have only the word that God would be with them and the cloud that moves ahead. Then the cloud stops. They pitch camp. And what comes next is not rest — it is a call.',
        },
        {
          kind: 'carry',
          html:
            'The desert can feel like a season you are stuck in, not a place you are being led to. When you are in it — between what you have lost and what you have not yet found — it is easy to doubt that anything waiting is worth the cost. But Sinai teaches a different way of seeing: the desert itself is the journey to the encounter. You do not arrive and then wait for God to show up. In the waiting is where God meets you.',
        },
        {
          kind: 'reflection',
          id: 'ex19-desert',
          prompt:
            'Where are you in a desert right now — in transition, uncertain, between endings and beginnings? What if that exact place is where God intends to reveal Himself to you?',
        },
      ],
    },

    /* ─── Exodus 19:3–6 — The Covenant Offer ──────────────────────────── */
    {
      ref: 'Exodus 19:3–6',
      title: 'A Kingdom of Priests',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 3,
              spans: [
                t('And Moses went up unto God: and the LORD called unto him out of the mountain, saying, Thus shalt thou say to the house of Jacob, and tell the children of Israel;'),
              ],
            },
            {
              number: 4,
              spans: [
                hp('Ye have seen what I did unto the Egyptians', 'c-eagles-wings'),
                t(', and how I bare you on eagles&apos; wings, and brought you unto myself.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Now therefore, if ye will '),
                hy('obey my voice indeed', 'hebrew-segullah'),
                t(', and keep my covenant, then ye shall be a '),
                hp('peculiar treasure unto me', 'christ-chosen'),
                t(' above all people: for all the earth is mine:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And ye shall be unto me a '),
                hp('kingdom of priests', 'christ-royal-priesthood'),
                t(', and an holy nation. These are the words which thou shalt speak unto the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eagles-wings',
          html:
            'The covenant begins not with demand but with reminder. "I carried you on eagles&apos; wings." God does not start by asking for obedience. He starts by saying: Remember what I have done. Remember how I protected you. The covenant at Sinai is not an employer handing a slave a contract to sign. It is a parent who has saved a child saying, "Now that I have proven my love, will you trust me?" All obedience in scripture that matters begins here: not fear of punishment, but response to love already given.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-segullah',
          title: 'Segullah — &ldquo;peculiar treasure&rdquo;',
          script: 'סְגֻלָּה',
          translit: '<strong>segullah</strong> · treasured possession, precious things set apart',
          description:
            'The word appears again in Deuteronomy 7:6, 14:2, and 26:18 — always of Israel. In the ancient world, a king might claim certain objects as his personal treasure, held separate from all other things. God claims Israel as His segullah: not because they are the richest or strongest, but because they are His chosen ones, and that is enough.',
        },
        {
          kind: 'commentary',
          id: 'c-kingdom-of-priests',
          html:
            'A kingdom is a political entity — a territory ruled together. A priesthood is a religious calling — people set apart to mediate between God and the profane world. No ancient nation understood these two things as the same. God is saying: You are not an empire like Egypt, with a Pharaoh towering above you. You are a people where every one of you stands in a priestly role, accountable to Me and responsible for one another. The weight of that is immense. But so is the honor.',
        },
        {
          kind: 'christ',
          id: 'christ-chosen',
          title: 'Christ Connection — Treasure and Priesthood',
          html:
            'Peter, writing to the Church centuries later, quotes this exact verse: "Ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people" (1 Peter 2:9). What God offered Israel at Sinai — to be His treasured possession, to live as a kingdom of priests — Christ gives to His people. We are not inheriting the old promise; we are receiving the same promise fulfilled. Every believer is a priest. The whole Church is a nation set apart. The treasure God saw in Israel, He sees in us.',
        },
        {
          kind: 'christ',
          id: 'christ-royal-priesthood',
          title: 'Christ Connection — The Price of Priesthood',
          html:
            'The call to priesthood is a call to bridge the gap between God and the world. The Old Testament priesthood mediated that gap through law and sacrifice. But Hebrews 10:11–14 shows that all those priests were temporary, standing daily to offer sacrifices that could never really take sin away. Christ, "after he had offered one sacrifice for sins for ever, sat down on the right hand of God." He is the final priest — the one whose sacrifice closed the gap. Those who are "in Him" are brought into His priesthood, clothed in His righteousness, no longer needing to earn access through law. The kingdom of priests Sinai promised is finally open to all who believe.',
        },
        {
          kind: 'carry',
          html:
            'If you are a believer, you are a priest. Not a pastor or minister — a priest. That means you are called to stand between God and a broken world: to intercede, to speak truth, to embody His character. It does not mean you have to be perfect or have all the answers. Priests in the Old Testament made mistakes, doubted, stumbled. But they showed up. They kept showing up. Who in your life needs a priest right now — someone who will intercede for them, speak God&apos;s truth to them, stand with them in their pain?',
        },
        {
          kind: 'reflection',
          id: 'ex19-priesthood',
          prompt:
            'What does it mean to you that you are part of a "kingdom of priests"? Who in your world needs someone to stand in a priestly role for them right now?',
        },
      ],
    },

    /* ─── Exodus 19:7–8 — Israel Agrees ──────────────────────────────── */
    {
      ref: 'Exodus 19:7–8',
      title: 'The People\'s Answer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 7,
              spans: [
                t('And Moses came and called for the elders of the people, and laid before them all these words which the LORD commanded him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And '),
                hp('all the people answered together, and said, All that the LORD hath spoken we will do', 'c-covenant-yes'),
                t('. And Moses returned the words of the people unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant-yes',
          html:
            'The consent is unanim. "All the people answered together." They did not argue. They did not haggle or ask for a better deal. They were exhausted, thirsty, afraid, and they said yes. Why? Because in those weeks in the wilderness, they had learned something the Egyptian slaves never knew: God keeps His word. He freed them. He fed them. He was with them. So when He asked for their covenant, they answered yes. They did not know yet what that yes would cost them. But they had seen His faithfulness, and that was enough.',
        },
        {
          kind: 'carry',
          html:
            'Covenant in scripture always follows encounter with God&apos;s goodness. God does not begin with law. He begins with love, with deliverance, with the demonstration of His character. Only then does He ask, "Will you commit?" If you are struggling to say yes to God&apos;s terms for your life, it might be because you have not yet seen His goodness clearly enough. Spend time remembering how He has carried you. Then the yes becomes easier.',
        },
        {
          kind: 'reflection',
          id: 'ex19-yes',
          prompt:
            'What is one area of your life where God is asking you to say yes — a commitment, a trust, a change? What would help you see His faithfulness clearly enough to say yes from the heart, not just from obligation?',
        },
      ],
    },

    /* ─── Exodus 19:9–13 — Three Days of Consecration ───────────────── */
    {
      ref: 'Exodus 19:9–13',
      title: 'Preparing to Meet God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 9,
              spans: [
                t('And the LORD said unto Moses, Lo, I come unto thee in the '),
                hg('thick cloud', 'c-cloud'),
                t(', that the people may hear when I speak with thee, and believe thee for ever. And Moses told the words of the people unto the LORD.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the LORD said unto Moses, Go unto the people, and sanctify them to day and to morrow, and let them wash their clothes,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And be ready against the third day: for on the third day the LORD will come down in the sight of all people upon mount Sinai.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou shalt set bounds unto the people round about, saying, Take heed to yourselves, that ye go not up into the mount, nor touch the border of it: whosoever toucheth the mount shall be surely put to death:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('There shall not an hand touch it, but he shall surely be stoned, or shot through; whether it be beast or man, it shall not live: when the trumpet soundeth long, they shall come up to the mount.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cloud',
          html:
            'God comes in a thick cloud. Not to hide Himself, but to mediate the encounter. A human being cannot see God and live (Exodus 33:20), but the cloud makes it possible for Israel to see His presence without perishing from the sight. The cloud is mercy — it protects the people by concealing what would destroy them. So also in the New Testament, Christ is called the "image of the invisible God" (Col. 1:15). He is the cloud, so to speak — the one in whom the fullness of God dwells in a form we can see and live.',
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'Three days of preparation. No ordinary business. They wash their clothes (a sign of ritual purification), they abstain from the marriage bed (a sign of setting apart what is holy), they are told not even to touch the mountain. This is not superstition. This is a people learning that approaching God requires holiness. The boundary around the mountain is a mercy: it keeps them from the presumption that access to God is casual. You cannot stumble into the presence of the Almighty as you would stumble into a friend&apos;s kitchen.',
        },
        {
          kind: 'carry',
          html:
            'In our age, we often speak of God as "approachable" and "personal," and those things are true — Christ opened a way to the Father that was closed before. But approach requires reverence. Knowing God is intimate; it is not informal. Three days of your week set apart just to prepare your heart — to confess, to think, to ready yourself spiritually — is not legalism. It is honoring the One you are about to meet.',
        },
        {
          kind: 'reflection',
          id: 'ex19-prepare',
          prompt:
            'What would it look like to "consecrate yourself" before drawing near to God in prayer? What would need to change in how you prepare to meet with Him?',
        },
      ],
    },

    /* ─── Exodus 19:14–19 — The Theophany ─────────────────────────────── */
    {
      ref: 'Exodus 19:14–19',
      title: 'God Descends in Fire and Thunder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 14,
              spans: [
                t('And Moses went down from the mount unto the people, and sanctified the people; and they washed their clothes.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he said unto the people, Be ready against the third day: come not at your wives.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And it came to pass on the third day in the morning, that there were '),
                hp('thunders and lightnings', 'c-thunders'),
                t(', and a thick cloud upon the mount, and the voice of the trumpet exceeding loud; so that all the people that was in the camp trembled.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Moses brought forth the people out of the camp to meet God; and they stood at the nether part of the mount.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And mount Sinai was altogether '),
                hg('on a smoke', 'c-smoke-fire'),
                t(', because the LORD descended upon it in fire: and the '),
                hy('smoke thereof ascended', 'hebrew-shofar'),
                t(' as the smoke of a furnace, and the whole mount quaked greatly.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And when the voice of the trumpet sounded long, and waxed louder and louder, Moses spake, and '),
                hp('God answered him by a voice', 'c-god-speaks'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thunders',
          html:
            'Thunder. Lightning. A sound like the loudest trumpet ever blown, growing louder and louder. Every sense Israel has is overwhelmed. This is not a still, small voice. This is the God of the cosmos announcing Himself. And the text does not soften it: "all the people that was in the camp trembled." They were afraid. It is good that they were afraid. Fear of the Lord is the beginning of wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shofar',
          title: 'Shofar — &ldquo;trumpet&rdquo;',
          script: 'שׁוֹפָר',
          translit: '<strong>shofar</strong> · a ram&apos;s horn; the blast that calls Israel to gather, to witness, to be reminded of covenant',
          description:
            'The shofar is blown on the Day of Judgment in the prophets, calling the dead to rise; it is blown at Sinai, calling a people to covenant. From the ancient world to the end of time, the shofar sounds when God breaks into history.',
        },
        {
          kind: 'commentary',
          id: 'c-smoke-fire',
          html:
            'Smoke and fire pour from the mountain as if it were a furnace burning from inside. The whole earth shakes. This is not poetry. This is Israel watching the boundary between the natural and the supernatural violently break. When God comes near, creation itself reacts. The mountain is not an inert pile of rock — it is the place where heaven touches earth, and the tremor runs through both worlds.',
        },
        {
          kind: 'christ',
          id: 'c-god-speaks',
          title: 'Christ Connection — The Trumpet and the King',
          html:
            'Hebrews 12:18–24 draws the contrast directly: "Ye are not come unto the mount that might be touched, and that burned with fire... but ye are come unto mount Sion, and unto the city of the living God... and to Jesus the mediator of the new covenant." Sinai was terrifying because it was holy and humanity was unholy. Christ is the mediator who stands between. In Him, the thunder becomes a call, not a threat. And the trumpet at Christ&apos;s return (1 Thess. 4:16, Rev. 11:15) will sound the same longing note — gathering His people home, calling the dead to rise, announcing that the final covenant is complete.',
        },
        {
          kind: 'carry',
          html:
            'When you read of God in all His thunder and fire, it is easy to pull back. But do not miss this: God came to the mountain. He came down. He closed the distance, not to destroy, but to bind Himself to a people. The terror of His holiness was not a wall keeping you away; it was the cost He was willing to pay to make relationship possible. In Christ, that cost has been fully paid. You are invited to come near — not in terror, but in trust.',
        },
        {
          kind: 'reflection',
          id: 'ex19-thunder',
          prompt:
            'What does it stir in you to know that God is holy — so holy that creation trembles in His presence? How does that holiness change the way you approach Him in prayer?',
        },
      ],
    },

    /* ─── Exodus 19:20–25 — The Boundary Holds ──────────────────────── */
    {
      ref: 'Exodus 19:20–25',
      title: 'The Boundary and the Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 20,
              spans: [
                t('And the LORD came down upon mount Sinai, on the top of the mount: and the LORD called Moses up to the top of the mount; and Moses went up.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the LORD said unto Moses, Go down, charge the people, lest they break through unto the LORD to gaze, and many of them perish.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And let the priests also, which come near to the LORD, sanctify themselves, lest the LORD break forth upon them.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Moses said unto the LORD, The people cannot come up to mount Sinai: for thou chargedst us, saying, Set bounds about the mount, and sanctify it.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the LORD said unto Moses, Away, get thee down, and thou shalt come up, thou, and Aaron with thee: but let not the priests and the people break through to come up unto the LORD, lest he break forth upon them.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('So Moses went down unto the people, and spake unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-boundary-holds',
          html:
            'The boundary exists not to punish the people but to protect them. If they "break through to gaze," many will perish. The holiness of God is not a threat; it is a reality. It kills what cannot bear it, the way the sun kills bacteria but blinds those who stare at it directly. The boundary is mercy. And notice: even Moses and Aaron, the leaders, even the priests who "come near to the Lord," must sanctify themselves. No one bypasses the boundary. Everyone is accountable to it. The covenant God offers is not one where some are above the law and some below. It is one where everyone — from the lowliest Israelite to the high priest — stands in the same covenant relationship.',
        },
        {
          kind: 'carry',
          html:
            'In a world that constantly tells you that boundaries are oppressive, that rules are there to limit your potential, that you should be able to do whatever you want — Exodus teaches a different way. Boundaries are medicine, not poison. They are what keep you alive. The question is never whether you have boundaries. The question is: will you set them yourself, or will you let God set them for you? The people who ignore the boundary and "break through" are not rebels; they are just hurting themselves. You honor God when you honor His boundaries, not because you fear punishment, but because you trust that His way actually keeps you alive.',
        },
        {
          kind: 'reflection',
          id: 'ex19-boundary',
          prompt:
            'Where is God setting a boundary in your life right now — something He is saying is not for you, or not yet, or not in that way? What would change if you trusted that boundary was for your protection, not your limitation?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
