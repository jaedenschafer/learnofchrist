import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 4 — The Sin Offering (chatat)
 *
 * The law of the sin offering for unintentional sins (*bishgagah*).
 * Victims vary by status: high priest (bull), congregation (bull),
 * ruler (male goat), common person (female goat or lamb).
 * Blood ritual escalates with gravity; the bull&apos;s body is burned
 * outside the camp — fulfilled in Christ, who "suffered without the gate"
 * (Heb. 13:11-13). 35 verses.
 */
export const LEVITICUS_4: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 4,

  intros: [
    'Leviticus 4 is where the sin offering appears. Unlike the burnt offering (which was already about devotion), the sin offering is about guilt — the unintended breach that still separates you from God. The Hebrew word is <em>chatat</em>, from the verb "to sin" or "to miss the mark." The offering&apos;s purpose is specific: to bring a person or the whole congregation back to right standing when they have sinned without knowing it.',
    'What makes Leviticus 4 unusual is how clearly it scales. A high priest who sins needs a bull; the congregation needs a bull; a ruler needs a male goat; an ordinary person needs a female goat or lamb. The penalty is not the same for all. The text expects that spiritual leadership carries greater weight, and the offering reflects that. The blood is applied in different ways depending on the person&apos;s role — more gravity means a deeper cleansing ritual, drawing closer to the Holy of Holies itself.',
    'For the reader on this side of the cross, Leviticus 4 points directly to Christ in the flesh. Hebrews tells us that Jesus was that sin offering, taken outside the city gate to be burned, just as the bull&apos;s body was taken outside the camp. Here is where the animal system gives way to the Lamb who takes away the sins of the world.',
  ],

  sections: [
    /* ─── Leviticus 4:1–2 — The Law Stated ───────────────────────────── */
    {
      ref: 'Leviticus 4:1–2',
      title: 'The Law of the Sin Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
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
                t('Speak unto the children of Israel, saying, '),
                hg('If a soul shall sin through ignorance', 'lev4-ignorance'),
                t(' against any of the commandments of the Lord concerning things which ought not to be done, and shall do against any of them:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev4-ignorance',
          html:
            'The key word is <em>bishgagah</em> — "in error" or "through ignorance." This is not wilful transgression. The sin is real — you broke God&apos;s law — but you didn&apos;t know you were doing it. The offering system has a category for this. Hebrews 10:26 will later draw a hard line: if you sin deliberately, there is no offering. But ignorant sin has a path back to God.',
        },
        {
          kind: 'hebrew',
          id: 'h-chatat',
          title: 'Chatat — "sin offering"',
          script: 'חַטָּאת',
          translit: '<strong>chatat</strong> · from the root meaning to miss the mark, to sin',
          description:
            'The same word used for the verb "to sin." The offering doesn&apos;t change the fact of sin; it changes your standing. In 2 Corinthians 5:21, Paul uses the Greek equivalent: Christ was made "<em>hamartia</em>" — sin — so we could become the righteousness of God.',
        },
        {
          kind: 'carry',
          html:
            'We tend to divide sins into "big" and "little," but God divides them differently: deliberate and accidental. An accidental sin is still a real barrier between you and God. You didn&apos;t mean it — but the wall is there. The relief here is that the path back doesn&apos;t require perfection; it requires acknowledgement. The first step is noticing you missed the mark.',
        },
        {
          kind: 'reflection',
          id: 'lev4-a',
          prompt: 'When was the last time you broke God&apos;s law without knowing you were doing it? How did you find out? What did that feel like?',
        },
      ],
    },

    /* ─── Leviticus 4:3–12 — The High Priest ─────────────────────────── */
    {
      ref: 'Leviticus 4:3–12',
      title: 'If the High Priest Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('If the '),
                hy('priest that is anointed', 'h-priest-role'),
                t(' do sin according to the sin of the people; then let him bring for his sin, which he hath sinned, a young bullock without blemish unto the Lord for a sin offering.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he shall bring the bullock unto the door of the tabernacle of the congregation before the Lord; and shall lay his hand upon the bullock&apos;s head, and kill the bullock before the Lord.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And '),
                hg('the priest that is anointed', 'c-priest-blood'),
                t(' shall take of the bullock&apos;s blood, and bring it to the tabernacle of the congregation:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the priest shall dip his finger in the blood, and sprinkle of the blood '),
                hg('seven times before the Lord', 'c-blood-seven'),
                t(', before the vail of the sanctuary.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the priest shall put some of the blood upon '),
                hg('the horns of the altar of sweet incense', 'c-altar-horns'),
                t(' before the Lord, which is in the tabernacle of the congregation; and shall pour all the blood of the bullock at the bottom of the altar of the burnt offering, which is at the door of the tabernacle of the congregation.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he shall take off from it all the fat of the bullock for the sin offering; the fat that covereth the inwards, and all the fat that is upon the inwards,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the two kidneys, and the fat that is upon them, which is by the flanks, and the caul above the liver, with the kidneys, it shall he take away,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('As it was taken off from the bullock of the sacrifice of peace offerings: and the priest shall burn them upon the altar of the burnt offering.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the '),
                hg('skin of the bullock, and all his flesh', 'c-skin-flesh'),
                t(', with his head, and with his legs, and his inwards, and his dung,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Even the whole bullock shall he carry forth '),
                hp('without the camp', 'christ-without-gate'),
                t(' unto a clean place, where the ashes are poured out, and burn it on the wood with fire: where the ashes are poured out shall it be burnt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'h-priest-role',
          html:
            'The priest who is anointed — this is the high priest. His sin is called "the sin of the people" because his office means he bears the people&apos;s transgressions as part of his calling. When he fails, it is a failure on behalf of all Israel. That is why he needs the largest victim: a young bull. The cost scales with the weight of the office.',
        },
        {
          kind: 'commentary',
          id: 'c-priest-blood',
          html:
            'The blood is applied with the priest&apos;s own finger. There is intimacy in that action — a hand soaked in blood, bringing it near to the holy place. The priest is not distant from the offering; he is involved in it.',
        },
        {
          kind: 'commentary',
          id: 'c-blood-seven',
          html:
            'Seven is the number of completion in the Hebrew Bible. Seven sprinkling actions before the vail mean the ritual is complete, thorough, finished. Nothing is half-done. The blood reaches into the inner spaces of the sanctuary.',
        },
        {
          kind: 'commentary',
          id: 'c-altar-horns',
          html:
            'The horns of the altar are where a person could seek refuge in the ancient Near East. Blood on the horns means you are claiming the altar&apos;s protection. The inwards and fat are burned on the altar of burnt offering — the good parts are offered; the body itself leaves the camp.',
        },
        {
          kind: 'commentary',
          id: 'c-skin-flesh',
          html:
            'Unlike other offerings where the priest gets a portion to eat, the high priest&apos;s sin offering leaves no remainder for the sanctuary staff. Nothing is kept or consumed. The entire animal is taken outside and burned to ash.',
        },
        {
          kind: 'christ',
          id: 'christ-without-gate',
          title: 'Christ Connection — Suffered Without the Gate',
          html:
            'Hebrews 13:11–13 makes the connection explicit: "The bodies of those beasts, whose blood is brought into the sanctuary by the high priest for sin, are burned without the camp. Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate." Christ did not die inside Jerusalem&apos;s walls but outside them — the sin offering itself, taken beyond the boundary, burned. He was made sin for us (2 Cor. 5:21) so that we could be made right. He is both the priest who offers and the victim offered.',
        },
        {
          kind: 'carry',
          html:
            'The leadership carries weight. If you teach, preach, or shepherd others — if you bear their spiritual lives as part of your office — your own sin doesn&apos;t only affect you. It affects them. This is not meant to crush you with guilt, but to remind you that integrity at the front matters. The good news is that the way back is just as clear: not hiding it, but bringing it to God in full acknowledgement, letting the whole thing be covered — not edited, not minimized, but fully acknowledged and fully covered.',
        },
        {
          kind: 'reflection',
          id: 'lev4-b',
          prompt: 'If you hold any kind of leadership or spiritual influence, how does it change the weight of your own integrity? What does that cost you, and what does it cost those who follow?',
        },
      ],
    },

    /* ─── Leviticus 4:13–21 — The Whole Congregation ──────────────────── */
    {
      ref: 'Leviticus 4:13–21',
      title: 'If the Whole Congregation Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('And if the whole congregation of Israel sin through ignorance, and the thing be hid from the eyes of the assembly, and they have done somewhat against any of the commandments of the Lord concerning things which should not be done, and are guilty;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('When the sin, which they have sinned against it, is known, then the congregation shall offer a young bullock for the sin, and bring him before the tabernacle of the congregation.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the elders of the congregation shall lay their hands upon the head of the bullock before the Lord: and by the bullock shall be killed before the Lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the priest that is anointed shall bring of the bullock&apos;s blood to the tabernacle of the congregation:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the priest shall dip his finger in some of the blood, and sprinkle it seven times before the Lord, even before the vail.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he shall put some of the blood upon the horns of the altar which is before the Lord, that is in the tabernacle of the congregation, and shall pour out all the blood at the bottom of the altar of the burnt offering, which is at the door of the tabernacle of the congregation.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he shall take all his fat from him, and burn it upon the altar.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Thus shall he do with the bullock; as he did with the bullock for a sin offering, so shall he do with this: and the priest shall make an atonement for them, and it shall be forgiven them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he shall carry forth the bullock without the camp, and burn it as he burned the first bullock: it is a sin offering for the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev4-congregation-sin',
          html:
            'A whole nation can walk into sin without realizing it. The text says it is "hid from the eyes of the assembly" — no one in the congregation realized what was happening. Once they recognize it, they bring the same victim as the high priest did: a young bull. The people&apos;s offering is as weighty as the priest&apos;s. Their sin, too, leaves the camp completely. There is no eating from this offering, no partial absolution.',
        },
        {
          kind: 'carry',
          html:
            'Collective sin is real. A culture, a church, a family can drift into patterns no one individual planned. You inherit certain blindnesses. The grace here is that once the congregation knows, they can respond together. There is something steadying about acknowledging it corporately, about elders laying hands on the victim together, about confessing that this was our error. The path back is available at the community level too.',
        },
        {
          kind: 'reflection',
          id: 'lev4-c',
          prompt: 'What is one blindness your community might be living in right now — something you&apos;ve all accepted that isn&apos;t actually God&apos;s way? What would it cost to name it together?',
        },
      ],
    },

    /* ─── Leviticus 4:22–26 — A Ruler ────────────────────────────────── */
    {
      ref: 'Leviticus 4:22–26',
      title: 'If a Ruler Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 22,
              spans: [
                t('When a '),
                hy('ruler', 'h-ruler'),
                t(' shall sin, and do somewhat through ignorance against any of the commandments of the Lord his God concerning things which should not be done, and is guilty;'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Or if his sin, wherein he hath sinned, come to his knowledge; he shall bring his offering, a kid of the goats, a male without blemish:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he shall lay his hand upon the head of the goat, and kill it in the place where they kill the burnt offering before the Lord: it is a sin offering.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the priest shall take of the blood of the sin offering with his finger, and put it upon the horns of the altar of burnt offering, and shall pour out his blood at the bottom of the altar of burnt offering.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he shall burn all his fat upon the altar, as the fat of the sacrifice of peace offerings: and the priest shall make an atonement for him as concerning his sin, and it shall be forgiven him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'h-ruler',
          html:
            'A "ruler" is someone with regional or local power — not the high priest, not the whole nation, but someone with authority over others. For his sin, the offering is smaller: a male goat, not a bull. The blood ritual is also less deep — applied to the altar horns but not carried into the sanctuary proper. Yet the principle is clear: greater responsibility means greater cost. Even a leader who is not the high priest faces a heavier reckoning than a commoner.',
        },
        {
          kind: 'carry',
          html:
            'If you hold any power — a position, a paycheck that depends on decisions you make, people who listen to you — your negligence carries consequence others&apos; doesn&apos;t. A ruler&apos;s accidental sin affects his subjects. The offering acknowledges this weight. But it also says: you can come back. You don&apos;t stay outside. The path is open.',
        },
        {
          kind: 'reflection',
          id: 'lev4-d',
          prompt: 'Where do you have authority that you sometimes take for granted? What would it mean to take seriously the people who are affected by your choices?',
        },
      ],
    },

    /* ─── Leviticus 4:27–35 — A Common Person ────────────────────────── */
    {
      ref: 'Leviticus 4:27–35',
      title: 'If a Common Person Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 27,
              spans: [
                t('And if any one of the common people sin through ignorance, while he doeth somewhat against any of the commandments of the Lord concerning things which ought not to be done, and be guilty;'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Or if his sin, which he hath sinned, come to his knowledge: then he shall bring his offering, a kid of the goats, a female without blemish, for his sin which he hath sinned.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And he shall lay his hand upon the head of the sin offering, and slay the sin offering in the place of the burnt offering.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the priest shall take of the blood thereof with his finger, and put it upon the horns of the altar of burnt offering, and shall pour out all the blood thereof at the bottom of the altar.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he shall take away all the fat thereof, as the fat is taken away from off the sacrifice of peace offerings; and the priest shall burn it upon the altar for a sweet savour unto the Lord; and the priest shall make an atonement for him, and it shall be forgiven him.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And if he bring a lamb for a sin offering, he shall bring it a female without blemish.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And he shall lay his hand upon the head of the sin offering, and slay it for a sin offering in the place where they kill the burnt offering.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the priest shall take of the blood of the sin offering with his finger, and put it upon the horns of the altar of burnt offering, and shall pour out all the blood thereof at the bottom of the altar:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And he shall take away all the fat thereof, as the fat of the lamb is taken away from the sacrifice of peace offerings; and the priest shall burn it upon the altar, according to the offerings made by fire unto the Lord: and the priest shall make an atonement for him as concerning his sin that he hath sinned, and it shall be forgiven him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev4-common',
          html:
            'For a common person, the victim is smallest: a female goat or a lamb. Not a bull. Not even a male goat like the ruler brings. The grading is deliberate. It reflects the reality that some sins cost more than others depending on who commits them. A priest&apos;s failure corrupts the whole sanctuary system. A ruler&apos;s failure leads others astray. But an ordinary person&apos;s accidental sin is still sin — still a barrier between them and God. And still it is forgiven. The smallest offering is enough.',
        },
        {
          kind: 'carry',
          html:
            'You might think: since my sin is smaller, maybe I don&apos;t need to bring it to God. The text says differently. Even the most ordinary mistake — the one no one else will ever know about — breaks your standing. You alone might be the only person who is aware. But the offering system says: bring it anyway. Don&apos;t minimize it. Don&apos;t pretend the barrier isn&apos;t there. Your ordinary sin matters. And the grace to cover it is already available to you.',
        },
        {
          kind: 'reflection',
          id: 'lev4-e',
          prompt: 'What ordinary, hidden sin have you been carrying? The one you think is too small to bring to God? What would change if you did?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /sacrifice|offering|altar/i,
          matchArtist: /tissot/i,
          caption: 'Leviticus 4 · The Sin Offering System',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 4',
    quote:
      'The sin offering covers unintended sin. From the high priest to the common person, God provides a way back when you have broken His law without knowing it. The offering scales by status and responsibility, but the path to forgiveness is open to all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 4 · Study Guide',
  },

  hasHebrew: true,
};
