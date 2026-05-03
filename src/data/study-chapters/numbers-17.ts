import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 17 — Aaron's Rod That Budded
 *
 * After Korah's rebellion, God settles the question of priesthood once for all.
 * Each tribe brings a rod with the leader's name. They're laid up in the tabernacle
 * overnight. Aaron's rod alone has budded, blossomed, and yielded almonds.
 *
 * The dead rod that produces life is one of the OT's clearest resurrection pictures.
 * Christ: Heb 9:4 lists Aaron's rod among the contents of the ark. Rom 1:4 declares
 * Jesus "the Son of God with power... by the resurrection from the dead."
 * The almond was the first tree to bloom in spring — resurrection imagery.
 *
 * 13 verses. Hebrew: matteh (rod, staff); shaqed (almond — also "watchful," word play
 * with God's "watching"). A short but rich chapter: the dead-rod-bearing-fruit.
 */
export const NUMBERS_17: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 17,

  estimatedMinutes: { beginner: 5, intermediate: 7, deep: 9 },
  intros: [
    'Korah\'s rebellion has just ended — the ground opens and swallows the rebels whole. Fourteen thousand more Israelites die from plague. The people are terrified. They cry out to Moses and Aaron: "Behold, we die, we perish, we all perish... shall we be consumed with dying?" The priesthood itself is under question. Who has the authority from God to lead? Who speaks for Him?',
    'God settles it in a way no argument could. Twelve rods — one from each tribe leader — are laid in the tabernacle overnight. In the morning, one rod alone has not only sprouted but budded, blossomed, and borne fruit. Aaron\'s rod. Dead wood made to produce life. The text is sparse, almost quiet after the violence of rebellion, but what it shows is unmistakable: death giving way to life, God\'s choice made visible, and a token kept in the ark itself — a permanent sign.',
  ],

  sections: [
    /* ─── The Test ─────────────────────────────────────────────────────────── */
    {
      ref: 'Numbers 17:1–5',
      title: 'The Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [t('And the Lord spake unto Moses, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and take of them a '),
                hy('rod', 'hebrew-matteh'),
                t(' for each father of the house of their fathers, of all their princes according to the house of their fathers twelve rods: write thou every man\'s name upon his rod.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And thou shalt write Aaron\'s name upon the rod of Levi: for one rod shall be for the head of the house of their fathers.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And thou shalt lay them up in the tabernacle of the congregation before the '),
                hy('testimony', 'c-ark-location'),
                t(', where I will meet with you.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it shall come to pass, that the man\'s rod, whom I shall choose, shall '),
                t('blossom'),
                t(': and I will make to cease from me the murmurings of the children of Israel, whereby they murmur against you.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-matteh',
          title: 'Matteh — "rod, staff"',
          script: 'מַטֶּה',
          translit: '<strong>matteh</strong> · a rod, staff, or stick',
          description:
            'The same word used for Moses\'s staff, which turned to a serpent and parted the sea. A matteh in Scripture often represents authority and judgment. Here it becomes a sign of life.',
        },
        {
          kind: 'commentary',
          id: 'c-ark-location',
          html:
            'The rods are laid "before the testimony" — before the ark of the covenant where the tablets of the law sit. This is the holy of holies, the place God\'s presence dwells. Whatever happens overnight happens in God\'s presence, watched by His holiness.',
        },
        {
          kind: 'commentary',
          id: 'c-murmuring',
          html:
            'The Israelites have been murmuring — grumbling that Moses and Aaron took too much authority upon themselves. God will answer not with a voice or a sign in the sky, but with something growing. With <em>life.</em> Life itself will be the argument.',
        },
      ],
    },

    /* ─── The Morning ──────────────────────────────────────────────────────── */
    {
      ref: 'Numbers 17:6–8',
      title: 'The Morning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 6,
              spans: [
                t('And Moses spake unto the children of Israel: and all the princes thereof gave him one rod apiece, for each prince one rod, according to their fathers\' houses, even twelve rods: and the rod of Aaron was among their rods.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Moses laid up the rods before the Lord in the tabernacle of witness.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And it came to pass, that on the morrow Moses went into the tabernacle of witness; and, behold, the '),
                hg('rod of Aaron', 'c-aaron-rod'),
                t(' for the house of Levi was '),
                hp('budded', 'c-budded-blossomed'),
                t(', and brought forth '),
                hg('buds, and bloomed blossoms, and yielded almonds', 'c-fruit-stages'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aaron-rod',
          html:
            'Only Aaron\'s rod. Not budding quietly and waiting. Not just sprouted. But budded, bloomed, and already bearing fruit — all three stages visible at once. The progression of growth compressed into a single overwhelming statement.',
        },
        {
          kind: 'christ',
          id: 'c-budded-blossomed',
          title: 'Christ Connection — The Dead Rod That Bears Fruit',
          html:
            'Hebrews 9:4 lists the contents of the ark of the covenant: "the golden pot that had manna, and Aaron\'s rod that budded." The rod itself — dead wood, inert, powerless — becomes the sign. In Romans 1:4, Paul says Jesus was "declared to be the Son of God with power... by the resurrection from the dead." The dead rod bearing fruit is the resurrection compressed into an image. Christ\'s body in the tomb, lifeless. Then life — budding, blooming, fruit — all at once, all undeniable. The whole logic of the cross lives in this single image.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shaqed',
          title: 'Shaqed — "almond"; "watchful"',
          script: 'שָׁקֵד',
          translit: '<strong>shaqed</strong> · almond (tree or nut); also "watchful, awake"',
          description:
            'The almond tree is the first to bloom in Palestinian spring — the first visible sign of resurrection after winter. The Hebrew word contains a wordplay with God\'s word to Jeremiah: "I am watching (shaqed) over my word to perform it" (Jer. 1:12). The rod does not just grow; it testifies to a God who is watching, who keeps His word, who makes dead things live.',
        },
        {
          kind: 'commentary',
          id: 'c-fruit-stages',
          html:
            'All three stages are visible: <em>buds, blooms, and almonds.</em> It is not just the budding that matters, though that is already miraculous. The progression all the way to fruit — to what can be eaten, what can be planted again, what can bear more life — that is what silences the murmuring.',
        },
      ],
    },

    /* ─── The Token ────────────────────────────────────────────────────────── */
    {
      ref: 'Numbers 17:9–11',
      title: 'The Token',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 9,
              spans: [
                t('And Moses brought out all the rods from before the Lord unto all the children of Israel: and they looked, and took every man his rod.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the Lord said unto Moses, Bring Aaron\'s rod again before the '),
                hy('testimony', 'c-kept-in-ark'),
                t(', to be kept for a '),
                hg('token against the rebels', 'c-token-meaning'),
                t('; and thou shalt quite take away his murmurings from me, that they die not.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Moses did so: as the Lord commanded him, so did he.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kept-in-ark',
          html:
            'The rod stays "before the testimony" — in the ark itself, where it will be kept for all time. Not hidden. Not dismissed as a one-time wonder. But kept where the law sits, where God\'s presence dwells, accessible to the whole nation. Every generation that opens the ark will see it: dead wood that bore fruit.',
        },
        {
          kind: 'commentary',
          id: 'c-token-meaning',
          html:
            'A "token" is a sign, a permanent evidence, a thing that witnesses to something. The rod witnesses to God\'s choice, His power, His victory over rebellion. It witnesses to anyone who has ever doubted whether God truly has authority, whether His choices stand, whether His word is real.',
        },
        {
          kind: 'carry',
          html:
            'The rod is kept "against the rebels." That sounds like a weapon, but it is not. It is kept to silence murmuring. The rebels need not be destroyed again; they need to see what God can do. A dead rod coming to life is a stronger answer to doubt than ten thousand arguments. If anything in your life feels like rebellion—a small voice that God\'s choice is not good, that His way is not the way—this rod says otherwise. Your doubts do not escape His attention. He meets them not with punishment but with a gift: evidence that He can make dead things live.',
        },
        {
          kind: 'reflection',
          id: 'token',
          prompt:
            'Where are you still murmuring? What would it mean to believe that God\'s choice—either to use you or not to use you—is already bearing fruit in ways you haven\'t seen yet?',
        },
      ],
    },

    /* ─── The Terror ───────────────────────────────────────────────────────── */
    {
      ref: 'Numbers 17:12–13',
      title: 'The Terror',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('And the children of Israel spake unto Moses, saying, Behold, we die, we perish, we '),
                hg('all perish', 'c-despair'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Whosoever cometh any thing near unto the tabernacle of the Lord shall die: '),
                hp('shall we be consumed with dying', 'c-question'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-despair',
          html:
            'The people see the budded rod and they are terrified. Not comforted. Not reassured. Terrified. They recognize that they are standing in the presence of absolute power. A God who can make the dead live, who has just killed thousands, who keeps such a rod in the holy of holies—this is not a God you can bargain with or manage. You are either chosen or consumed.',
        },
        {
          kind: 'commentary',
          id: 'c-question',
          html:
            'Their question echoes through the ages. "Shall we be consumed with dying?" It is the oldest human cry: that God\'s power, not tempered by mercy, becomes terrifying. That authority without care becomes tyranny. But they do not know yet—the rod is not a judgment kept to condemn them. It is kept to show them that the God whose authority they fear is also the God who makes dead things live. The same power that can destroy can resurrect.',
        },
        {
          kind: 'christ',
          id: 'c-question-2',
          title: 'Christ Connection — The Fear That Becomes Love',
          html:
            'Jesus says to John in Revelation: "Fear not; I am the first and the last… I am alive for evermore, and have the keys of hell and of death" (Rev. 1:17–18). The same Jesus who holds all power, who can destroy or resurrect, invites us not to a place of terror but into the rest of His presence. Like Aaron\'s rod, the cross looks at first like death—the instrument of the cruelest execution. But it is the dead wood that bears all the fruit of resurrection. The God who can consume is revealed as the God who chooses to save. The power that terrifies is the power that loves.',
        },
        {
          kind: 'carry',
          html:
            'If God\'s presence makes you afraid—if you have sensed the weight of His power and felt small—you are standing where Israel stands at the end of this chapter. The rod cannot be un-seen. You know now that He is real, and His power is real, and you are accountable. But Aaron\'s rod also shows you something else: that the God whose power you fear is capable of making the dead live, of bearing fruit from what is lifeless, of continuing what should have ended. Fear and awe are the beginning of wisdom. They are not the end of the story.',
        },
        {
          kind: 'reflection',
          id: 'terror',
          prompt:
            'When you stand before the reality of God—truly aware of His power and His otherness—what happens inside you? Is there room in your fear for the trust that He is making life, not just executing judgment?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 17',
    quote:
      'Twelve dead rods lay before the Lord overnight. By morning Aaron\'s alone had budded, blossomed, and yielded almonds — a sign that resurrection life belongs to the One God chooses, and that the priest He vindicates is the only mediator between His holiness and a trembling people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 17 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-numbers-17',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 17',
      url: 'https://www.sefaria.org/Numbers.17',
      description: 'Text and commentary on the staffs of the twelve tribes and the almond rod of Aaron as a sign of chosen priesthood.',
    },
    {
      id: 'sefaria-almond-rod',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Almond (Shaked)',
      url: 'https://www.sefaria.org/dictionary/category/bible/hebrew-words',
      description: 'Etymology of shaked (almond); the word relates to "watching" and "hastening," connecting Aaron&apos;s rod to God&apos;s watchfulness.',
    },
    {
      id: 'hebrews-9-aaron-rod',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 17 ↔ Hebrews 9:4',
      url: 'https://intertextual.bible/text/numbers-17/hebrews-9.4',
      description: 'How Hebrews references Aaron&apos;s rod in the Most Holy Place as witness to the enduring high priesthood in Christ.',
    },
  ],

  hasHebrew: true,
};
