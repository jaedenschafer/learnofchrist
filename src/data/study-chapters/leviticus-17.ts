import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 17 — the bloodline of the covenant.
 *
 * This chapter opens the Holiness Code (17–26) with a single, counterintuitive
 * law: all slaughter must happen at the tabernacle, not in the home. Why? Because
 * blood is life, and life belongs to God. The chapter answers the deepest theological
 * question in Scripture — why does blood matter? — and Jesus spends the New Testament
 * answering the flip side: what happens when we drink it?
 */
export const LEVITICUS_17: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 17,

  estimatedMinutes: { 5: 6, 10: 10, 15: 13 },
  intros: [
    'Leviticus 17 is where the Holiness Code begins — chapters 17 through 26, a ring-fenced section on how a people set apart for God actually live. It opens not with moral law or ceremonial detail, but with blood. One law: you cannot slaughter an animal at home. All animals must be brought to the tabernacle, to the priest, where the blood is caught and consecrated. No backyard butchering. No hunting on the side. The stakes are starkly theological: eat meat anywhere, and you are eating <em>nephesh</em> — the life force itself — without God&apos;s knowledge or permission.',
    'Behind the law lies a single, breath-stopping verse, verse 11: "the life of the flesh is in the blood... it is the blood that maketh an atonement for the soul." God Himself explains why blood matters. And then the whole New Testament is His answer to the consequence: what does a people do when God offers them the Blood that actually atones? When Jesus says, "Drink ye all of it" — He is calling them into the very thing Leviticus forbade, and inviting them into a covenant older than the law itself.',
  ],

  bottomShare: {
    label: 'Share Leviticus 17',
    quote:
      'The life of the flesh is in the blood — it is the blood that maketh atonement for the soul. Every time we eat the Bread and drink the Cup, we are entering into the Covenant, and tasting the Life that heals.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 17 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 17:1–7 — All Slaughter at the Altar ────────────────── */
    {
      ref: 'Leviticus 17:1–7',
      title: 'All Slaughter at the Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [t('And the LORD spake unto Moses, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Speak unto Aaron, and unto his sons, and unto all the children of Israel, and say unto them; This is the thing which the LORD hath commanded, saying,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('What man soever there be of the house of Israel, that killeth an ox, or lamb, or goat, '),
                hg('in the camp, or that killeth it out of the camp', 'c-tabernacle-law'),
                t(','),
              ],
            },
            {
              number: 4,
              spans: [
                t('And bringeth it not unto the door of the tabernacle of the congregation, to offer an offering unto the LORD before the tabernacle of the LORD; blood shall be imputed unto that man; he hath shed blood; and that man shall be cut off from among his people:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tabernacle-law',
          html:
            'The law is absolute and surprising. It does not say: "Bring every slaughter to the altar for a sacrifice." It says: you cannot kill an animal for meat <em>anywhere</em> unless the priest is there. No hunting trip. No home butchering. This is not about waste or hunting discipline — it is about presence. God must be known and acknowledged the moment life is taken.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 5,
              spans: [
                t('To the end that the children of Israel may bring their sacrifices, which they offer in the open field, even that they may bring them '),
                hy('unto the LORD', 'c-nephesh-life'),
                t(', unto the door of the tabernacle of the congregation, unto the priest, and offer them for peace offerings unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nephesh-life',
          html:
            'The goal is not centralization for its own sake. It is <em>knowledge</em>. God wants every act of taking life to be deliberate, witnessed, and offered. The Israelites are being trained into a theology: life is not cheap. It is not a resource to use when convenient. It is something you must bring before God.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 6,
              spans: [
                t('And the priest shall sprinkle the blood upon the altar of the LORD at the door of the tabernacle of the congregation, and burn the fat for a '),
                hy('sweet savour', 'hebrew-reyach'),
                t(' unto the LORD.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they shall no more offer their sacrifices unto '),
                hg('devils', 'c-seirim'),
                t(', after whom they have gone a whoring. This shall be a statute for ever unto them throughout their generations.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-reyach',
          title: 'Reyach — &ldquo;sweet savour&rdquo;',
          script: 'רֵיחַ',
          translit: '<strong>reyach</strong> · fragrance, smell, aroma',
          description:
            'The word appears throughout the sacrificial system: when God smells the burning fat, He knows His people have met Him at the altar. It is a sensory, intimate language — not God needing food, but God savoring the moment His people turn toward Him.',
        },
        {
          kind: 'commentary',
          id: 'c-seirim',
          html:
            'The word translated "devils" is <em>seirim</em> — goat-demons. Israel had been picking up Canaanite and Egyptian practices of dedicating sacrifices to goat-spirits and wilderness demons. The law is not theological abstraction; it is old habits being broken. God is weaning His people off pagan altar practices by making the tabernacle the only place life is offered.',
        },
        {
          kind: 'carry',
          html:
            'The law pushes an odd question to the surface: What am I learning when I eat? Every meal is an act of taking life — plants or animals or both — and in the rush of the day, it becomes almost invisible. Leviticus 17 asks you to slow down. To know that something died so you could live. That knowledge is not meant to produce guilt. It is meant to produce reverence — a quiet recognition that you are held by a chain of gifts, and that chain leads back to God.',
        },
        {
          kind: 'reflection',
          id: 'lev17-slaughter',
          prompt:
            'When was the last time you actually thought about where your food came from — that an animal died, that a seed was harvested? What would change if you did this once a week?',
        },
      ],
    },

    /* ─── Leviticus 17:8–9 — The Same Law for Strangers ────────────────── */
    {
      ref: 'Leviticus 17:8–9',
      title: 'The Law Holds for Strangers Too',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt say unto them, Whatsoever man there be of the house of Israel, or of the '),
                hg('strangers', 'c-ger'),
                t(' which sojourn among you, that offereth a burnt offering or sacrifice,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And bringeth it not unto the door of the tabernacle of the congregation, to offer it unto the LORD; even that man shall be cut off from among his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ger',
          html:
            'The Hebrew word <em>ger</em> means resident alien — someone living inside Israel but not born there. The law applies to both. "Both" is important. Israel is not inventing a pure bloodline. Anyone living in the covenant community lives by its center: all life is offered at the altar, to the God who made the altar. There is no second-class worship.',
        },
        {
          kind: 'carry',
          html:
            'The principle reaches forward to you. If you are in Christ, you are a stranger and sojourner in this world — not at home anywhere on earth, but invited into the household of God. And the same rule applies: every part of you, every gift, every resource, every decision — brought to the altar. Not to earn anything, but to stay tethered to the One who made the covenant.',
        },
      ],
    },

    /* ─── Leviticus 17:10–12 — The Prohibition on Eating Blood ─────────── */
    {
      ref: 'Leviticus 17:10–12',
      title: 'Do Not Eat Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 10,
              spans: [
                t('And whatsoever man there be of the house of Israel, or of the strangers that sojourn among you, that eateth '),
                hg('any manner of blood', 'c-blood-eating'),
                t('; I will even set my face against that soul that eateth blood, and will cut him off from among his people.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For the life of the flesh is in the '),
                hy('blood', 'c-blood-atonement'),
                t(': and I have given it to you upon the altar to make an atonement for your souls: for it is the '),
                hp('blood that maketh an atonement', 'christ-blood-atonement'),
                t(' for the soul.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore I said unto the children of Israel, No soul of you shall eat blood, neither shall any stranger that sojourneth among you eat blood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-eating',
          html:
            'Israel lived among peoples who ate blood — Philistines, Canaanites — sometimes in rituals to absorb animal strength, sometimes as routine. The law is not abstract piety. It is boundary-setting. Israel&apos;s neighbors make no distinction between eating meat and eating life. Israel makes a sharp one.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dam',
          title: 'Dam — &ldquo;blood&rdquo;',
          script: 'דָּם',
          translit: '<strong>dam</strong> · blood; also payment, price, covenant',
          description:
            'The Hebrew root carries theological weight. Blood is not waste product — it is ransom, it is covenant-price, it is the substance of life itself. When God pours it on the altar, He is receiving the most precious thing an animal has: its <em>nephesh</em>, its living essence.',
        },
        {
          kind: 'commentary',
          id: 'c-blood-atonement',
          html:
            'Verse 11 is the hinge of the chapter. God gives blood <em>on the altar</em> specifically <em>to make atonement</em>. This is why blood cannot be eaten casually, mixed into soup, used as medicine. Blood is God&apos;s tool for reconciliation. It is set apart. It is holy. To eat it is to misuse the very mechanism God gave to heal the breach between Himself and His people.',
        },
        {
          kind: 'christ',
          id: 'christ-blood-atonement',
          title: 'Christ Connection — The Blood That Heals',
          html:
            'Hebrews 9:22 quotes Leviticus 17:11 directly: "without shedding of blood is no remission." God set blood as the symbol of life, and then gave us the Blood that actually gives life. In John 6:53–56, Jesus turns the Levitical prohibition inside out: "Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you… Whose eateth my flesh, and drinketh my blood, dwelleth in me." The thing forbidden in Leviticus becomes the new covenant meal. And 1 John 1:7 names the work: "the blood of Jesus Christ his Son cleanseth us from all sin." Leviticus taught Israel to hunger for atonement. Jesus fed that hunger with Himself.',
        },
        {
          kind: 'carry',
          html:
            'Every time you remember the cross, every time you take the Bread and the Cup, you are tasting what Leviticus set Israel up to crave: blood that makes atonement. But the blood is not an animal&apos;s. It is His. And the result is not the priest standing at the altar <em>for</em> you — it is Christ standing <em>in</em> you, alive, at work, making you clean. The law said: don&apos;t eat blood. Grace says: eat this, and you will never die of hunger again.',
        },
        {
          kind: 'reflection',
          id: 'lev17-blood-atonement',
          prompt:
            'What would it change in you to believe, in your bones, that the blood of Christ cleanses you constantly — not just once, but from every sin, every failure, every moment? What would you stop carrying?',
        },
      ],
    },

    /* ─── Leviticus 17:13–14 — Blood of Game ──────────────────────────── */
    {
      ref: 'Leviticus 17:13–14',
      title: 'Even the Blood of Game',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 13,
              spans: [
                t('And whatsoever man there be of the children of Israel, or of the strangers that sojourn among you, which hunteth and catcheth any '),
                hy('beast or fowl', 'c-hunting'),
                t(' that may be eaten; he shall even pour out the blood thereof, and cover it with dust.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For it is the life of all flesh; the blood of it is for the life thereof: therefore I said unto the children of Israel, Ye shall eat the blood of no manner of flesh: for the life of all flesh is the blood thereof: whosoever eateth it shall be cut off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hunting',
          html:
            'This is stunning mercy wrapped in law. A hunter kills a deer in the wilderness — miles from the tabernacle. He cannot bring its blood to the altar. But the law still applies: he must spill the blood on the ground and cover it with dust. Even in the wild, even when no priest is watching, the blood must be treated as sacred. God is teaching Israel that His laws are not enforced by surveillance. They are written into how reality works. To treat blood casually is to treat life casually, and that breaks the covenant whether anyone sees you or not.',
        },
        {
          kind: 'carry',
          html:
            'You live a hidden life no one else sees. Scrolling in the dark. Words you say when alone. The small deceits that happen when no one&apos;s watching. Leviticus 17 says: the covenant you made with God covers all of it. The blood of Christ cleanses all of it. Not because anyone reports you. Because <em>you</em> know you are His, and His covenant includes the part of your life no one else will ever see.',
        },
        {
          kind: 'reflection',
          id: 'lev17-hidden-life',
          prompt:
            'Where do you live most unguarded — the hidden scrolls, the private words, the secret habits? Bring that part into the light of the covenant. What would repentance look like there?',
        },
      ],
    },

    /* ─── Leviticus 17:15–16 — Washing After Eating Carrion ────────────── */
    {
      ref: 'Leviticus 17:15–16',
      title: 'Clean and Unclean',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 15,
              spans: [
                t('And every soul that eateth that which died of itself, or that which was torn with beasts, whether it be one of your own country, or a stranger, he shall both '),
                hg('wash his clothes, and bathe himself', 'c-washing-unclean'),
                t(', and be unclean until the even: then shall he be clean.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But if he wash them not, nor bathe his flesh; then he shall bear his iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-washing-unclean',
          html:
            'If someone eats an animal that died naturally or was killed by a predator — not hunted, not slaughtered cleanly, but found dead or mauled — they become unclean. They must wash. They must wait until evening. This is not about hygiene (though carrion does carry real danger). It is theology. To eat death that came outside the covenant — death no one chose, death that was not offered — separates you from the sacred. Water and time and intention restore you.',
        },
        {
          kind: 'carry',
          html:
            'The metaphor carries forward. You pick up uncleanness not just from what you intentionally do, but from what you brush up against. Bitterness. Gossip heard and internalized. Time scrolling through cruelty. The broken rhythms of a broken culture. And the law is gentle: you wash. You wait. You come clean. The covenant does not say: "If you absorb the world&apos;s uncleanness, you are gone." It says: "Wash. Come back clean. I&apos;m waiting at the altar."',
        },
        {
          kind: 'reflection',
          id: 'lev17-carried-unclean',
          prompt:
            'What have you picked up from the world that doesn&apos;t belong to the covenant? What do you need to wash off, to confess, to let go of? What would a clean break look like?',
        },
      ],
    },
  ],
};
