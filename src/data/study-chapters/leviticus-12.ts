import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 12 — Purification after childbirth.
 *
 * 7 days unclean + 33 days separation for a son (40 days total).
 * 14 days unclean + 66 days separation for a daughter (80 days total).
 *
 * The Mary connection: Luke 2:22–24. Mary brought two turtledoves,
 * the offering of the poor. The Son of God born into a family that
 * cannot afford a lamb. Mary obeys Leviticus 12 to the letter — and
 * the offering she brings is for the unblemished Lamb she carries.
 */
export const LEVITICUS_12: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 12,

  intros: [
    'Leviticus 12 names the period a woman observes after giving birth. The law is blunt and specific — seven days and forty for a son, fourteen and eighty for a daughter. Why the difference? The text does not explain. But childbirth itself is honored. The body that bleeds for new life enters a kind of priesthood.',
    'For eight centuries this law shaped Jewish life. Then Mary, carrying the Promise inside her, obeys it exactly. She enters the temple with her infant son, and brings the offering allowed for the poor — two birds instead of a lamb. The shadows meet the substance. The unblemished Lamb she is offering for has arrived in her arms.',
  ],

  sections: [
    /* ─── Leviticus 12:1–5 — Seven Days and Forty ─────────────────────── */
    {
      ref: 'Leviticus 12:1–5',
      title: 'Unclean and Separated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, saying, If a woman have '),
                hg('conceived seed, and born a man child', 'lev12-conception'),
                t(': then she shall be unclean seven days; according to the days of the separation for her infirmity shall she be unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev12-conception',
          html:
            'The law begins with conception — the act of conceiving life is named as the beginning. A woman is "unclean" not because motherhood is shameful, but because she is in a state of sacred separation. Childbirth itself is an act as profound as priesthood; the body that carries and delivers new life is set apart.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('And in the eighth day the flesh of his foreskin shall be circumcised.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And she shall then continue in '),
                hy('the blood of her purifying', 'hebrew-yoledet'),
                t(' thirty and three days; she shall touch no hallowed thing, nor come into the sanctuary, until the days of her purifying be fulfilled.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yoledet',
          title: 'Yoledet — &ldquo;the woman who has given birth&rdquo;',
          script: 'יֹלֶדֶת',
          translit: '<strong>yoledet</strong> · she who has borne, the mother',
          description:
            'The text calls her by what she has done — not by shame, but by recognition of the profound act her body has performed. She is in the blood of her purifying, a liminal space between one status and the next.',
        },
        {
          kind: 'commentary',
          id: 'lev12-thirty-three',
          html:
            'Forty days total for a son: seven unclean, then thirty-three more in "the blood of her purifying." The number forty echoes throughout Scripture — Noah&apos;s rain, Israel&apos;s wilderness, Christ&apos;s temptation and resurrection appearances. Forty is the number of transformation, of crossing from one state to another.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('But if she bear a maid child, then she shall be unclean two weeks, as in her separation: and she shall continue in the blood of her purifying threescore and six days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev12-daughter',
          html:
            'Eighty days for a daughter: fourteen unclean, then sixty-six more. Why? The text offers no rationale. Perhaps later sages knew. But the law stands as given — the bearing of a daughter requires a longer period of separation. Whatever the original reason, the effect is clear: motherhood itself is honored by the setting apart of time and body.',
        },
        {
          kind: 'carry',
          html:
            'If you have borne children, you know that your body does not simply return to its previous state. You carry the mark of it — in your belly, in your breasts, in the way you love. Leviticus honors that. It says: you have done something sacred. You need time. You need space apart to remember what it means. The world will want your productivity back by Thursday. But your body knows something the world has forgotten — that bringing life into the world is priestly work.',
        },
        {
          kind: 'reflection',
          id: 'bearing',
          prompt: 'What has your body done that the world has not yet named? What would it mean to honor that work the way Leviticus does — with time, with separation, with witness?',
        },
      ],
    },

    /* ─── Leviticus 12:6–8 — The Offering ──────────────────────────────── */
    {
      ref: 'Leviticus 12:6–8',
      title: 'The Offering for Purification',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('And when the days of her purifying are fulfilled, for a son, or for a daughter, she shall bring a '),
                hp('lamb of the first year for a burnt offering', 'christ-lamb'),
                t(', and a young pigeon, or a turtledove, for a sin offering, unto the door of the tabernacle of the congregation, unto the priest:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev12-lamb-pigeon',
          html:
            'The offering is specific: a lamb for the burnt offering (complete devotion), and a bird — pigeon or turtledove — for the sin offering. The whole of her is presented before God. Whatever guilt or separation the body carries, it is lifted by sacrifice.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('Who shall offer it before the LORD, and make an atonement for her; and she shall be cleansed from the issue of her blood. This is the law for her that hath born a male or a female.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev12-atonement',
          html:
            'The priest receives her. The sacrifice is made. She is declared clean. The law speaks not of shame but of restoration — the woman is brought back, her body honored, her work acknowledged before God.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('And if she be not able to bring a lamb, then she shall bring two turtles, or two young pigeons; the one for the burnt offering, and the other for a sin offering: and the priest shall make an atonement for her, and she shall be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev12-poor-offering',
          html:
            'The law makes provision. Not every woman has a lamb. For those without means, two birds suffice. A turtledove. A young pigeon. The offering is not diminished in God&apos;s eyes because it is small. What matters is that she comes, that she is received, that she is declared whole.',
        },
        {
          kind: 'christ',
          id: 'christ-lamb',
          title: 'Christ Connection — The Lamb and the Offering Mother',
          html:
            'Luke 2:22–24 records Mary&apos;s obedience. Forty days after Jesus was born, she came to Jerusalem to present Him and to offer the sacrifice of purification. She brought two turtledoves — the offering of the poor. The Son of God was born into a family without resources for a lamb. And Mary brought her baby and her birds into the temple, "that a sword will pierce your own soul too" (Luke 2:35). What Mary did not know yet was that she was presenting the unblemished Lamb. Every lamb that had ever been offered was a shadow of the One she carried. She herself was the woman bringing the Lamb to the altar — not knowing that His blood would do for her what no sacrifice could ever fully do.',
        },
        {
          kind: 'carry',
          html:
            'Mary could not afford the full offering. She brought what she had — two small birds. That is not a sideline in her story; it is the heart of it. She was poor, as the law made room for poor. She obeyed exactly as the law commanded. And her obedience brought her to the exact place where she would meet Simeon, who would speak the sword that pierces her soul. God did not ask her to be wealthy or to have resources. He asked her to come, to be honest about what she had, to obey. What He asked you to bring is not your wealth or your perfection. It is your willingness to come before Him exactly as you are.',
        },
        {
          kind: 'reflection',
          id: 'offering',
          prompt: 'What do you have to bring before God today? Not what you wish you had. What you actually hold in your hand. What does obedience look like for you with what you have?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 12',
    quote:
      'After giving birth, a woman enters a period of purification and separation. The law honors her body and the work it has done. At the end, she brings an offering before God and is made whole.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 12 · Study Guide',
  },

  hasHebrew: true,
};
