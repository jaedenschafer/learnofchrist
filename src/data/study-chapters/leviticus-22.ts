import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 22 — Rules for who eats holy things, the perfection of sacrifices,
 * and the first appearance of the Hebrew word *tamim* (without blemish/perfect/whole).
 * The chapter points to Christ as the One who alone is truly tamim — 1 Pet 1:19.
 */
export const LEVITICUS_22: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 22,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 13 },
  intros: [
    'Leviticus 22 is about boundaries and perfection. Who is clean enough to eat the holy food? What kind of animal can be offered to God? The chapter answers these questions with meticulous care — not because God is a micromanager, but because holiness is real, and approaching it carelessly costs a life.',
    'The word *tamim* runs through the chapter like a thread — "without blemish," "whole," "perfect." Every sacrifice must be *tamim*. No broken bones, no running sores, no flaws. This perfectionism isn&apos;t neurotic; it&apos;s a standing advertisement for the One who would come without flaw. Peter calls Jesus "a lamb without blemish and without spot" — using the very language Leviticus uses for sacrifices. The Old Testament temple worship points forward to the One who would be perfectly fit to die for the world.',
  ],

  sections: [
    /* ─── Leviticus 22:1–9 — Priests Must Be Clean ───────────────────────── */
    {
      ref: 'Leviticus 22:1–9',
      title: 'Priests Must Be Clean',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto Aaron and to his sons, that they '),
                hp('separate themselves', 'lev22-separate'),
                t(' from '),
                hy('the holy things', 'lev22-holy-things'),
                t(' of the children of Israel, and that they profane not my holy name: I am the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev22-separate',
          html:
            'The priests are given an immediate instruction: separate yourselves. Not physically removed, but set apart — held to a different standard. They handle holy things, so their own bodies and behavior must be holy. This is the burden of access. Anyone who comes close to what is sacred must keep themselves clean.',
        },
        {
          kind: 'commentary',
          id: 'lev22-holy-things',
          html:
            'The "holy things" are the portions of the sacrifices that belong to the priests and their families — the breast, the thigh, the grain offerings. These are food, but they are not ordinary food. They have been set apart. To eat them while unclean is to treat sacred things as common.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                t('Say unto them, Whosoever he be of all your seed among your generations, that goeth unto the '),
                hg('holy things', 'lev22-unclean-approach'),
                t(', which the children of Israel hallow unto the Lord, '),
                hg('having his uncleanness upon him', 'lev22-unclean-approach'),
                t(', that soul shall be cut off from my presence: I am the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev22-unclean-approach',
          html:
            'Unclean people cannot eat holy food. The boundary is absolute. Uncleanness is not a moral failing here — it can come from touching a dead body, or a discharge, or dozens of other ritual states — but it is still a barrier. You cannot approach God&apos;s table while you carry uncleanness. The message is clear: holiness requires preparation.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 4,
              spans: [
                t('What man soever of the seed of Aaron is a leper, or hath a '),
                hy('running issue', 'lev22-zavah'),
                t('; he shall not eat of the holy things, until he be clean. And whoso toucheth any thing that is unclean by the dead, or a man whose seed goeth from him;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Or whosoever toucheth any creeping thing whereby he may be made unclean, or a man of whom he may take uncleanness, whatsoever uncleanness he hath;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('The soul which hath touched any such shall be unclean until even, and shall not eat of the holy things, unless he wash his flesh with water.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And when the sun is down, he shall be clean: and shall afterward eat of the holy things; because it is his food.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('That which dieth of itself, or is torn with beasts, he shall not eat to defile himself therewith: I am the Lord.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('They shall therefore keep mine ordinance, lest they bear sin for it, and die therefore, if they profane it: I the Lord do sanctify them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev22-zavah',
          title: 'Zavah — "running issue" or "discharge"',
          script: 'זָב',
          translit: '<strong>zavah</strong> · to flow, to discharge',
          description:
            'A ritual condition, not always a disease. Leprosy, bodily fluids, contact with death — all render a person unclean. The pattern is consistent: uncleanness separates from holiness.',
        },
        {
          kind: 'carry',
          html:
            'Holiness is contagious, but so is uncleanness. Before we point fingers at this chapter&apos;s strictness, we might ask: what would our own lives look like if we took boundaries this seriously? Not to separate from people, but to separate from the things that corrupt our hearts — the thoughts we dwell on, the media we absorb, the habits we rationalize. The priest in Leviticus couldn&apos;t eat holy food while carrying uncleanness. We can&apos;t draw near to God while we do either.',
        },
        {
          kind: 'reflection',
          id: 'lev22-clean',
          prompt:
            'What "uncleanness" — a habit, a thought pattern, a relationship — has kept you from drawing near to God? What would it take to wash and become clean?',
        },
      ],
    },

    /* ─── Leviticus 22:10–16 — Who May Eat the Holy Food ──────────────────── */
    {
      ref: 'Leviticus 22:10–16',
      title: 'Who May Eat the Holy Food',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('There shall no '),
                hg('stranger eat of the holy thing', 'lev22-stranger'),
                t(': a sojourner of the priest, or an hired servant, shall not eat of the holy thing.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But if the priest buy any soul with his money, he shall eat of it, and he that is born in his house: they shall eat of his meat.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('If the priest&apos;s daughter also be married unto a stranger, she may not eat of an offering of the holy things.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But if the priest&apos;s daughter be a widow, or divorced, and have no child, and is returned unto her father&apos;s house as in her youth, she shall eat of her father&apos;s meat: but there shall no stranger eat thereof.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And if a man eat of the holy thing unwittingly, then he shall put the fifth part thereof unto it, and shall give it unto the priest with the holy thing.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they shall not profane the '),
                hy('holy things', 'lev22-profane-holy'),
                t(' of the children of Israel, which they offer unto the Lord;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Or suffer them to bear the iniquity of trespass, when they eat their holy things: for I the Lord do sanctify them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev22-stranger',
          html:
            'A stranger cannot eat the holy food — only family, servants born in the house, or purchased slaves. The table of the Lord has an inside and an outside. Belonging is real, and it comes with access. The priest&apos;s family sits at a table others do not.',
        },
        {
          kind: 'commentary',
          id: 'lev22-profane-holy',
          html:
            'To profane something holy is to treat it as common. Eating the holy food while unclean, or eating it outside the priestly family, profanes it. The word carries weight — it is not a technical violation but a real desecration of what God has set apart.',
        },
        {
          kind: 'carry',
          html:
            'There is something the modern mind resists here: the idea that some things and some people are set apart, and that belonging matters. In a democracy, this feels exclusive. But Scripture teaches membership, family, covenant boundaries. You are either in or out; you either belong or you do not. The hard truth is that covenant grace is not universal access for everyone at any moment. It is particular, intimate, costly. Only those inside the family eat at the family table.',
        },
        {
          kind: 'reflection',
          id: 'lev22-belong',
          prompt:
            'In what way do you belong to God&apos;s family? What does it mean to you that the table is open to you?',
        },
      ],
    },

    /* ─── Leviticus 22:17–25 — Sacrifices Must Be Without Blemish ────────── */
    {
      ref: 'Leviticus 22:17–25',
      title: 'Sacrifices Must Be Without Blemish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 17,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Speak unto Aaron, and to his sons, and unto all the children of Israel, and say unto them, Whatsoever he be of the house of Israel, or of the strangers in Israel, that will offer his oblation for all his vows, and for all his freewill offerings, which they will offer unto the Lord for a burnt offering;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Ye shall offer at your own will a male without blemish, of the beeves, of the sheep, or of the goats.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But whatsoever hath a blemish, that shall ye not offer: for it shall not be acceptable for you.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And whosoever offereth a sacrifice of peace offerings unto the Lord to accomplish his vow, or a freewill offering in beeves or sheep, it shall be '),
                hy('perfect to be accepted', 'lev22-tamim'),
                t('; there shall be no blemish therein.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Blind, or broken, or maimed, or having a wen, or scurvy, or scabbed, ye shall not offer these unto the Lord, nor make an offering by fire of them upon the altar unto the Lord.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Either a bullock or a lamb that hath any thing superfluous or lacking in his parts, that mayest thou offer for a freewill offering; but for a vow it shall not be accepted.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Ye shall not offer unto the Lord that which is bruised, or crushed, or broken, or cut; neither shall ye make any offering thereof in your land.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Neither from a stranger&apos;s hand shall ye offer the bread of your God of any of these; because their corruption is in them, and blemishes be in them: they shall not be accepted for you.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev22-tamim',
          title: 'Tamim — "perfect," "without blemish," "whole"',
          script: 'תָּמִים',
          translit: '<strong>tamim</strong> · complete, without flaw, fit for offering',
          description:
            'This is the key word of the chapter. Tamim appears over and over — the sacrificial animal must be tamim. No flaw, no broken bone, no running sore. Nothing less than perfection.',
        },
        {
          kind: 'christ',
          id: 'lev22-christ-tamim',
          title: 'Christ Connection — The Lamb Without Blemish',
          html:
            'Peter writes of Christ: "As of a lamb without blemish and without spot" (1 Pet 1:19). He is using the exact language of Leviticus 22. The Old Testament sacrificial system pointed to one who would actually be tamim — perfect, without flaw, fit to die for the world. "He was led as a sheep to the slaughter… yet he opened not his mouth" (Isa. 53:7). The Lamb without blemish came, and the sacrifices ended.',
        },
        {
          kind: 'carry',
          html:
            'Leviticus 22 is not about us being perfect enough for God — that would crush anyone in this broken world. It&apos;s about Christ being perfect enough for us. Every blemish-free lamb in the temple was a wordless prayer: "God, send us the One without flaw. We can&apos;t do this ourselves." And He came. Now the impossible standard has been met by the One who could meet it. Your acceptance before God depends on His perfection, not yours.',
        },
        {
          kind: 'reflection',
          id: 'lev22-perfection',
          prompt:
            'Where have you been trying to make yourself "perfect enough" for God? What would it feel like to rest in the fact that He is already satisfied with Christ&apos;s perfection on your behalf?',
        },
      ],
    },

    /* ─── Leviticus 22:26–33 — The Timing of Offerings ───────────────────── */
    {
      ref: 'Leviticus 22:26–33',
      title: 'The Timing of Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 26,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('When a bullock, or a sheep, or a goat, is brought forth, it shall be '),
                hg('seven days under the dam', 'lev22-seven-days'),
                t('; and from the eighth day and thenceforth it shall be accepted for an offering made by fire unto the Lord.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And whether it be cow or ewe, ye shall not kill it and her young both in one day.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And when ye will offer a sacrifice of thanksgiving unto the Lord, offer it at your own will.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('On the same day it shall be eaten; ye shall leave none of it until the morrow: I am the Lord.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Therefore shall ye keep my commandments, and do them: I am the Lord.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Neither shall ye profane my holy name; but I will be hallowed among the children of Israel: I am the Lord which hallow you,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('That brought you out of the land of Egypt, to be your God: I am the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev22-seven-days',
          html:
            'An animal cannot be offered until the eighth day of its life[res:sefaria-leviticus-22]. Seven days belong to the mother; the eighth day marks the child as ready for covenant. This pattern echoes through Scripture: circumcision on the eighth day, Jesus rising on the eighth day (the day after the seventh-day Sabbath). The eighth day is always about new beginning, covenant entry, resurrection.',
        },
        {
          kind: 'commentary',
          id: 'lev22-vow-freewill',
          html:
            'Notice the distinction in verses 23 and 29: a vow must be perfect (tamim), but a freewill offering may have a slight flaw[res:bibleodyssey-sacrifice-purity]. This is unexpected grace. If you make a vow to God, you must deliver a flawless animal — you made the promise, and God holds you to it. But if you offer freely, out of love with no vow attached, God accepts something less than perfect. Vows require rigor. Freewill requires freedom.',
        },
        {
          kind: 'carry',
          html:
            'Two truths meet in this chapter. First: boundaries matter. Not everyone can eat at every table. The holy must be treated as holy. Second: there is a surprising grace. The freewill offering — the one given without obligation — can be slightly imperfect and still be accepted. God is not actually looking for your perfection; He is looking for your love. The vow you make, you keep with rigor. But the gift you give freely, you give as you are — imperfect, but real.',
        },
        {
          kind: 'reflection',
          id: 'lev22-vow-gift',
          prompt:
            'What is one vow or commitment you&apos;ve made to God? And what is one thing you&apos;d like to offer Him freely, as a gift of love, without performance pressure?',
        },
        {
          kind: 'artwork',
          matchTitle: /lamb|sheep|sacrifice/i,
          caption: 'Leviticus 22:17–25 · Animals Without Blemish',
        },
      ],
    },

    /* ─── Closing Reflection ─────────────────────────────────────────────── */
    {
      title: 'The Pattern and the Fulfillment',
      blocks: [
        {
          kind: 'commentary',
          html:
            'Leviticus 22 is meticulous, demanding, and oddly tender all at once. It is meticulous because holiness is real. It is demanding because approaching God must cost us something — a perfect animal, a ritually clean body, a willingness to separate. But it is tender because every "without blemish" is a prayer. Every perfect lamb is a hope. Every boundary is a message: God is holy, and you cannot fake your way into His presence. You need someone who is truly, perfectly fit to stand for you.',
        },
        {
          kind: 'commentary',
          html:
            'And then Jesus came[res:intertextual-1-peter-1-leviticus-22]. Not as a rule-keeper who would impose more boundaries, but as the One who fulfilled them all. The Lamb without blemish. The One who needed no washing, no separation from uncleanness. The One who was tamim — complete, whole, perfect. He came, He died, He rose. And now the old boundaries have moved. You do not approach God through a priest anymore; you come through Jesus. Your perfection is not yours — it is His. And you are welcome at the table.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 22',
    quote:
      'All sacrifices must be without blemish, whole and perfect. The animal cannot have any flaw. On the eighth day of life, when it is ready for covenant, it must be tamim — fit to stand before God. Christ is the Lamb without blemish.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 22 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-22',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 22 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.22',
      description: 'Annotated text with rabbinic commentary on ritual cleanness and sacrificial perfection.',
    },
    {
      id: 'bibleodyssey-sacrifice-purity',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Sacrifice and Ritual Purity in the Temple',
      url: 'https://www.bibleodyssey.org',
      description: 'Overview of cleanliness requirements, sacrificial standards, and temple procedures.',
    },
    {
      id: 'intertextual-1-peter-1-leviticus-22',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Lamb Without Blemish — 1 Peter 1:19',
      url: 'https://intertextalbible.com',
      description: 'Jesus as the perfect, unblemished sacrifice fulfilling the Old Testament tamim language.',
    },
  ],

  hasHebrew: true,
};
