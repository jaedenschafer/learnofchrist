import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 4 — The Work of Bearing the Sacred Things.
 *
 * God counts the Levites of service age (30–50 years) and assigns them their
 * precise tasks in transporting the tabernacle. The Kohathites—who are responsible
 * for the holiest objects (ark, table, lampstand, altars)—must never touch or look
 * upon them uncovered, on pain of death. Aaron and his sons must wrap every sacred
 * item before Kohath may carry them on their shoulders. The Gershonites carry
 * curtains and coverings. The Merarites carry boards, bars, and pillars.
 *
 * Hebrew: avodah (service, work, labour).
 * Christ: Hebrews 9:11–12 — Christ enters the heavenly sanctuary as the true high priest.
 * Type: Every Levite knew his exact calling; every believer should know his giftings.
 * The careful, weighty work of carrying holy things on shoulders prefigures the
 * church carrying the gospel to the ends of the earth. The age 30 (when service began)
 * echoes Luke 3:23 — when Jesus began His public ministry.
 */
export const NUMBERS_4: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 4,

  estimatedMinutes: { 5: 7, 10: 10, 15: 13 },
  intros: [
    'Israel is about to leave Sinai and begin the journey to the Promised Land. But first, the tabernacle must move. Not a simple tent—it is the dwelling place of the Lord, filled with objects so holy that the wrong person touching them, or seeing them uncovered, will die. Numbers 4 is the operational manual for moving God\'s presence.',
    'The Levites are divided by labor. Three clans, three precise jobs. But the most dangerous work falls to Kohath: they must carry the holiest things, yet they cannot look at them. They must touch them, yet only after Aaron covers them completely. It is a portrait of trust so strict that one careless glance means death. And in that severe requirement lives a profound truth about holiness and the price of drawing near to God.',
  ],

  opener: {
    matchTitle: /carrying|bearing|transport|tabernacle/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Numbers 4:1–3 — The Service Age ───────────────────────────── */
    {
      ref: 'Numbers 4:1–3',
      title: 'The Age of Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1, t('And the Lord spake unto Moses and unto Aaron, saying,')),
            verse(2, t('Take the sum of the sons of Kohath from among the sons of Levi, after their families, by the house of their fathers;')),
            verse(3, t('From thirty years old and upward even until fifty years old, all that enter into the host, to do the work in the tabernacle of the congregation.')),
          ],
        },
        {
          kind: 'commentary',
          html: 'A precise window: 30 to 50. Not the young, not the old. These are men in their strength and maturity—old enough to understand the weight of the work, young enough to bear it. They are the prime years, the years of greatest effectiveness. And it is no coincidence that this is the very age range when our Lord began His public ministry.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-avodah',
          title: 'Avodah — "service, work, labour"',
          script: 'עֲבוֹדָה',
          translit: '<strong>avodah</strong> · service, work, labour, task, ministry',
          description: 'The work of the Levites is not optional or casual—it is avodah, the settled, solemn work of bearing the presence of God. It is as much a calling as any priest\'s work. Every Levite knows his labor; every believer should know his giftings.',
        },
        {
          kind: 'christ',
          id: 'christ-age-thirty',
          title: 'Christ Connection — Beginning at Thirty',
          html: 'Luke writes: &ldquo;Jesus himself began to be about thirty years of age&rdquo; (Luke 3:23). The Levites begin their service at thirty; Christ begins His public work at thirty. The parallel is not accidental. Jesus enters His ministry at the very age when the sons of Kohath step into their most dangerous work—bearing the presence of God, bearing the weight that brings life or death to all who encounter it.',
        },
        {
          kind: 'carry',
          html: 'God appoints seasons and limits. You have your service years, your time of greatest strength. But you are not called to carry the weight forever. The limit of 50 suggests that wisdom also includes knowing when to step back, to let the next generation carry forward. Your calling has an appointed time.',
        },
        {
          kind: 'reflection',
          id: 'reflection-age',
          prompt: 'If your years 30–50 are your prime service years, what has God called you to carry during this season of your life? And when you reach 50, will you have the grace to hand it to the next generation?',
        },
      ],
    },

    /* ─── Numbers 4:4–15 — The Kohathites and the Holiest Things ──── */
    {
      ref: 'Numbers 4:4–15',
      title: 'The Kohathites — Bearers of the Holy Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(4, t('This shall be the service of the sons of Kohath in the tabernacle of the congregation, about the most holy things:')),
            verse(5, t('And when the camp setteth forward, Aaron shall come, and his sons, and they shall take down the covering veil, and cover the ark of the covenant with it:')),
            verse(6, t('And shall put thereon the covering of badgers\' skins, and shall spread over it a cloth wholly of blue; and shall put in the staves thereof.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'most-holy-things',
          html: 'The Kohathites are responsible for the most holy things: the ark of the covenant, the table of shewbread, the golden lampstand, and the altars. These are not just furniture—they are the visible presence of the Lord among His people. Their care requires a preparation so meticulous that one careless moment becomes catastrophic.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(7, t('And upon the table of shewbread they shall spread a cloth of blue, and put thereon the dishes, and the spoons, and the bowls, and covers to cover withal: and the continual bread shall be thereon:')),
            verse(8, t('And they shall spread upon them a cloth of scarlet, and cover the same with a covering of badgers\' skins, and shall put in the staves thereof.')),
            verse(9, t('And they shall take a cloth of blue, and cover the candlestick of the light, and his lamps, and his tongs, and his snuffdishes, and all the oil vessels thereof, wherewith they minister unto it:')),
            verse(10, t('And they shall put it and all the vessels thereof within a covering of badgers\' skins, and shall put it upon a bar.')),
            verse(11, t('And upon the golden altar they shall spread a cloth of blue, and cover it with a covering of badgers\' skins, and shall put to the staves thereof:')),
            verse(12, t('And they shall take all the instruments of ministry, wherewith they minister in the sanctuary, and put them in a cloth of blue, and cover them with a covering of badgers\' skins, and shall put them on a bar:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'covering-process',
          html: 'Layer upon layer: the veil first, then badgers\' skins, then cloth of blue and scarlet. Nothing is exposed. Nothing is to be seen. The covering is so complete that no Kohathite need ever glimpse the uncovered ark or altar. This is not caution—it is a matter of life and death. The holiness must be hidden, sealed away, untouchable.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13, t('And they shall take away the ashes from the altar, and spread a purple cloth thereon:')),
            verse(14, t('And they shall put upon it all the vessels thereof, wherewith they minister about it, even the censers, the fleshhooks, and the shovels, and the basons, all the vessels of the altar; and they shall spread upon it a covering of badgers\' skins, and put to the staves of it:')),
          ],
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(15, t('And when Aaron and his sons have made an end of covering the sanctuary, and all the vessels of the sanctuary, as the camp is to set forward; after that, the sons of Kohath shall '), hp('come to bear it', 'bear-it'), t(': but they shall '), hp('not touch any holy thing, lest they die', 'death-touch'), t('. These things are the burden of the sons of Kohath in the tabernacle of the congregation.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bear-it',
          html: 'The word translated "bear" is the word for carrying on the shoulders. Not in a cart, not on a pole between two men—on their shoulders. It is intimate contact with the sacred, yet utterly protected by the covering. The Kohathites feel the weight, but never see what they carry. This is perfect trust.',
        },
        {
          kind: 'commentary',
          id: 'death-touch',
          html: 'The warning is absolute: do not touch any holy thing uncovered, or you will die. It is not a threat—it is a statement of fact. Holiness is not negotiable. The most dangerous work in Israel is to handle the presence of God. One careless reach toward an uncovered vessel means instant death. The Kohathites must have the discipline of monks and the faith of martyrs.',
        },
        {
          kind: 'carry',
          html: 'Not every believer bears the same weight. Some carry the very presence of God in their service—intercessors, worship leaders, those who stand in the gap. For them, the warning is as old as Kohath: respect the holiness. Do not presume. Trust that the covering is enough. Trust that Aaron has done his part in preparing what you carry. Your job is obedience, not understanding.',
        },
        {
          kind: 'reflection',
          id: 'reflection-kohath',
          prompt: 'If you are called to "bear" something sacred in your life—a pastoral role, a prophetic word, a prayer for the broken—what does it mean to carry it with the discipline of Kohath: full trust, no touching the uncovered thing, no looking to satisfy your curiosity?',
        },
      ],
    },

    /* ─── Numbers 4:24–26 — The Gershonites ──────────────────────── */
    {
      ref: 'Numbers 4:24–26',
      title: 'The Gershonites — Bearers of the Coverings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(24, t('This is the service of the families of the Gershonites, to serve, and for burdens:')),
            verse(25, t('And they shall bear the curtains of the tabernacle, and the tabernacle of the congregation, his covering, and the covering of the badgers\' skins that is above upon it, and the hanging for the door of the tabernacle of the congregation,')),
            verse(26, t('And the hangings of the court, and the curtain for the door of the court, which is by the tabernacle, and by the altar round about, and their cords, and all the instruments of their service, and all that is made for them: so shall they serve.')),
          ],
        },
        {
          kind: 'commentary',
          html: 'While Kohath handles the holiest vessels, Gershon carries the beautiful structural work: the curtains, the coverings, the hanging for the door. Not the presence itself, but the house that protects the presence. Without Gershon\'s work, there is no shelter. Without Kohath\'s work, there is no focus. Both callings are essential.',
        },
        {
          kind: 'carry',
          html: 'Every part of God\'s house is sacred work—not just the interior altar, but the outer walls. Not just the high priestly service, but the humble labor of holding the tent upright. Your calling may not be the most visible, but it is not less. The beauty and order that makes worship possible is itself an act of worship.',
        },
      ],
    },

    /* ─── Numbers 4:29–33 — The Merarites ──────────────────────── */
    {
      ref: 'Numbers 4:29–33',
      title: 'The Merarites — Bearers of the Framework',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(29, t('As for the sons of Merari, thou shalt number them after their families, by the house of their fathers;')),
            verse(30, t('From thirty years old and upward even unto fifty years old shalt thou number them, every one that entereth into the service, to do the work of the tabernacle of the congregation.')),
            verse(31, t('And this is the charge of their burden, according to all their service in the tabernacle of the congregation; the boards of the tabernacle, and the bars thereof, and the pillars thereof, and sockets thereof,')),
            verse(32, t('And the pillars of the court round about, and their sockets, and their pins, and their cords.')),
            verse(33, t('According to all that is to be done by them, so shall they serve under the hand of Ithamar the son of Aaron the priest.')),
          ],
        },
        {
          kind: 'commentary',
          html: 'Merari carries the load-bearing skeleton: boards, bars, pillars, sockets. The heavy, structural work. Without Merari, Kohath\'s sacred vessels have no framework, Gershon\'s coverings have no tent to hang on. The work is invisible—buried in the ground—but it is the foundation. Ithamar oversees them, ensuring the structure stands.',
        },
        {
          kind: 'carry',
          html: 'There is honor in the invisible work—the structural labor that holds everything else upright. You may never be seen; your name may never be announced. But the entire house of God rests on what you carry. That is not insignificance. That is the foundation of all ministry.',
        },
      ],
    },

    /* ─── Numbers 4:49 — Summary of Service ──────────────────────── */
    {
      ref: 'Numbers 4:49',
      title: 'Every Man to His Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(49, t('According to the commandment of the Lord they were numbered by the hand of Moses, every one according to his service, and according to his burden: thus were they numbered of him, as the Lord commanded Moses.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'numbered-for-service',
          html: 'Every Levite is numbered. Every one is assigned. No one is left guessing his work. The chapter ends as it began—with numbering, with precision, with the complete clarity that comes from God\'s direct command through Moses. In a kingdom where God Himself counts the hairs on your head, how can you doubt that He knows your calling?',
        },
        {
          kind: 'christ',
          id: 'christ-heavenly-sanctuary',
          title: 'Christ Connection — The Heavenly Sanctuary',
          html: 'Hebrews 9:11–12 tells us: &ldquo;But Christ being come an high priest of good things to come, by a greater and more perfect tabernacle, not made with hands… Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us.&rdquo; Christ is both the high priest who covers the holy things (like Aaron) and the bearer who carries them (like Kohath). He did what no mortal Levite could do—He drew near to the holiness itself and lived. His blood covers us; His work carries us into God\'s presence.',
        },
        {
          kind: 'carry',
          html: 'The careful, weighty work of Kohath carrying the holy things on their shoulders prefigures the church bearing witness to Christ to the ends of the earth. Every believer is numbered. Every believer is assigned. You know your giftings—your burden, your particular labor in the house of God. The question is not whether you have a place. The question is whether you will step into it with the faith and discipline of Kohath: carrying the sacred thing, trusting that it is covered, refusing to look beyond what you have been told, knowing that the weight you bear carries the presence of God to those who are waiting.',
        },
        {
          kind: 'reflection',
          id: 'reflection-final',
          prompt: 'Every Levite knew his job. Every one was counted, assigned, and sent to do his specific work. What is the particular thing—the "burden" in the language of Numbers 4—that God has given you to carry in the body of Christ? And are you willing to carry it with the discipline and trust of Kohath?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Kohathites carry the most holy things on their shoulders, yet they cannot touch or look upon them uncovered, on pain of death. Every Levite knows his exact calling; every believer should know his giftings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 4 · Study Guide',
  },

  hasHebrew: true,
};
