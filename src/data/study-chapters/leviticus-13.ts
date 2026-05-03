import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 13 — diagnosis of tzaraat (skin affliction).
 *
 * The priest examines, declares clean or unclean, isolates for seven days.
 * The afflicted person must dwell alone outside the camp, tearing clothes
 * and crying "Unclean, unclean!" A chapter about separation, loneliness,
 * and the mercy of the Only One who can touch the untouchable.
 */
export const LEVITICUS_13: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 13,

  estimatedMinutes: { 5: 12, 10: 16, 15: 20 },
  intros: [
    'Leviticus 13 is a careful manual. For fifty-nine verses, Moses lays out exactly how a priest is to examine a suspected skin affliction — what marks require watching, what marks demand immediate separation, what the quarantine looks like. There is no guessing. There is no fear-based panic. A priest looks, waits, examines again. Seven days. The rhythm is merciful, not cruel.',
    'But the chapter also tells you what happens when the affliction cannot be healed: the person must tear their clothes, let their hair go unkempt, cover their upper lip, and cry out in the streets, "Unclean, unclean!" They dwell alone, outside the camp. They are separated from worship, from the tabernacle, from the people they love. The law is medical hygiene layered over something deeper — a picture of what it means to be broken and cast outside.',
    'For someone on this side of the cross, the chapter reads like a setup. Someone afflicted. Someone crying "unclean." Someone dwelling alone outside. And then Matthew 8 arrives, and a leper kneels before Jesus and says, "Lord, if thou wilt, thou canst make me clean." And Jesus puts forth His hand and touches him.',
  ],

  opener: {
    matchTitle: /codex amiatinus.*leviticus 13/i,
    caption: 'The Whole Chapter at a Glance — Codex Amiatinus',
  },

  bottomShare: {
    label: 'Share Leviticus 13',
    quote:
      'The priest examines the afflicted person with care. If the mark is unclean, the person is separated and cries "Unclean, unclean!" until the affliction is healed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 13 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 13:1–8 — Swelling, Scab, or Bright Spot ─────────────── */
    {
      ref: 'Leviticus 13:1–8',
      title: 'The Examination',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses and Aaron, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('When a man shall have in the skin of his flesh a '),
                hy('rising, a scab, or a bright spot', 'lev13-marks'),
                t(', and it be in the skin of his flesh like the '),
                hy('plague of leprosy', 'hebrew-tzaraat'),
                t('; then he shall be brought unto Aaron the priest, or unto one of his sons the priests:'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tzaraat',
          title: 'Tzaraat — &ldquo;skin affliction&rdquo;',
          script: 'צָרַעַת',
          translit: '<strong>tzaraat</strong> · a skin condition; broadly, an affliction',
          description:
            'The word translated "leprosy" in older English. It covers a range of skin conditions — not just Hansen&apos;s disease, but psoriasis, fungal infection, eczema. The priest determines what is unclean, not the condition itself.',
        },
        {
          kind: 'commentary',
          id: 'lev13-marks',
          html:
            'Three kinds of marks warrant the priest&apos;s examination: a <em>rising</em> (a swollen bump), a <em>scab</em> (a hardened crust), or a <em>bright spot</em> (unusual paleness in the skin). Each can signal affliction. The priest does not touch yet. He looks, notes, and watches.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 3,
              spans: [
                t('And the priest shall look on the plague in the skin of the flesh: and when the hair in the plague is turned white, and the appearance of the plague be deeper than the skin of his flesh, it is a plague of leprosy: and the priest shall look on him, and '),
                hg('pronounce him unclean', 'lev13-declare'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-declare',
          html:
            'The word is <em>declare</em>, not <em>condemn</em>. The priest speaks what is. He does not wish it or judge it; he names it. The mark has turned the hair white, sunk deeper than the skin — these are the signs that separate the afflicted from the clean.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('If the bright spot be white in the skin of his flesh, and the appearance thereof be not deeper than the skin, and the hair thereof be not turned white; then the priest shall '),
                hg('shut up him that hath the plague', 'lev13-isolate'),
                t(' seven days:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-isolate',
          html:
            'If the mark is not deep, not white in the hair — if it might be harmless — the priest does not declare unclean immediately. Instead, he isolates the person for seven days. The Bible builds in time. Waiting is a gift.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 5,
              spans: [
                t('And the priest shall look on him the seventh day: and, behold, if the plague in his sight be at a stay, and the plague spread not in the skin; then the priest shall shut him up seven days more:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the priest shall look on him again the seventh day: and, behold, if the plague be somewhat dark, and the plague spread not in the skin, the priest shall '),
                hp('pronounce him clean', 'lev13-clean'),
                t(': it is but a scab: and he shall wash his clothes, and be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'lev13-clean',
          title: 'Christ Connection — Cleanness Flows from Him',
          html:
            'In Matthew 8, a leper comes to Jesus and says, &ldquo;Lord, if thou wilt, thou canst make me clean.&rdquo; Under the Levitical law, anyone who touches a leper becomes unclean. But Jesus &ldquo;put forth his hand, and touched him, saying, I will; be thou clean.&rdquo; And the man was cleansed immediately. Cleanness did not come from separation or waiting seven days. It came from the touch of the One who cannot be made unclean. Jesus is the priest who declares people clean, and His touch is power, not contamination.',
        },

        {
          kind: 'carry',
          html:
            'When something in your life looks like affliction — shame you can&apos;t shake, failure you can&apos;t move past, loneliness that feels permanent — Leviticus 13 says the priest waits. Seven days. He looks again. He does not rush to declare you unclean forever. But also, no amount of waiting and looking will make you clean. You need the One who can touch the untouchable. Every mark you carry that you cannot heal, He can.',
        },

        {
          kind: 'reflection',
          id: 'lev13-exam',
          prompt:
            'What affliction in you — shame, failure, loneliness — have you been waiting to heal on your own? What would it mean to let Him touch it?',
        },
      ],
    },

    /* ─── Leviticus 13:9–17 — When Affliction Breaks Out ──────────────── */
    {
      ref: 'Leviticus 13:9–17',
      title: 'When the Plague Breaks Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 9,
              spans: [
                t('When the plague of leprosy is in a man, then he shall be brought unto the priest;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the priest shall see him: and, behold, if the rising be white in the skin, and it have turned the hair white, and there be quick raw flesh in the rising;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('It is an old leprosy in the skin of his flesh, and the priest shall '),
                hy('pronounce him unclean', 'lev13-unclean-mark'),
                t(', and shall not shut him up: for he is unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-unclean-mark',
          html:
            'The sign of &ldquo;quick raw flesh&rdquo; — living, exposed tissue — is the sign that waiting ends. This is not a mark to monitor. This is a mark to name. The priest does not shut the person up in isolation to watch it. The person is unclean. The declaration is final.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 12,
              spans: [
                t('And if a leprosy break out abroad in the skin, and the leprosy cover all the skin of him that hath the plague from his head even to his feet, wheresoever the priest looketh;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Then the priest shall consider: and, behold, if the leprosy have covered all his flesh, he shall pronounce him clean that hath the plague: it is all turned white: he is clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-paradox',
          html:
            'An unexpected mercy: if the affliction spreads to cover the entire body, the person is declared clean. Not because they are healed — the entire body shows the mark — but because the affliction has become total. There is no mixture. There is no hidden infection underneath. The law recognizes a paradox: sometimes the worst is cleaner than the half-hidden.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('But when raw flesh appeareth in him, he shall be unclean.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the priest shall see the raw flesh, and pronounce him to be unclean: for the raw flesh is unclean: it is a leprosy.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Or if the raw flesh turn again, and be changed unto white, he shall come unto the priest;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the priest shall see him: and, behold, if the plague be turned into white; then the priest shall pronounce him clean that hath the plague: he is clean.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The priest watches for healing. If the raw flesh closes, if the wound turns white and begins to seal — these are signs of restoration. The law is not interested in punishment for punishment&apos;s sake. It is interested in healing. It is interested in what is actually happening in the body. You are watched over the same way.',
        },

        {
          kind: 'reflection',
          id: 'lev13-breaking',
          prompt:
            'Where are you experiencing something breaking open — something you&apos;ve been holding together? Is it a sign of judgment or the beginning of real healing?',
        },
      ],
    },

    /* ─── Leviticus 13:18–28 — Healing and New Infection ────────────── */
    {
      ref: 'Leviticus 13:18–28',
      title: 'When an Old Sore Heals',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 18,
              spans: [
                t('The flesh also, in which, even in the skin thereof, was a '),
                hg('boil', 'lev13-boil'),
                t(', and is healed,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And in the place of the boil there be a white rising, or a bright spot, somewhat reddish, and it be shewed to the priest;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-boil',
          html:
            'A boil is an old wound. It was infected. It was painful. But it seems to have healed. And yet at the place where the boil was, a new mark appears — white, bright, reddish. The body is trying to seal itself. But the priest watches to ensure it is truly clean.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 20,
              spans: [
                t('And if, when the priest seeth it, behold, it appear lower than the skin, and the hair thereof be turned white; the priest shall pronounce him unclean: it is a plague of leprosy broken out of the boil.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But if the priest look on it, and, behold, there be no white hairs therein, and it be not lower than the skin, but rather dark; then the priest shall shut him up seven days:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-waiting-again',
          html:
            'Again, the priest waits. Not every scar is an infection. Not every healed wound that changes color is a sign of new affliction. Seven days of waiting does not mean seven days of condemnation. It means seven days of mercy.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 22,
              spans: [
                t('And if it spread much abroad in the skin, then the priest shall pronounce him unclean: it is a plague.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But if the bright spot stay in his place, and spread not, it is a burning of the boil; and the priest shall pronounce him clean.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'You have old wounds. Every person does. A failure you keep thinking about. A betrayal that left a scar. A shame you thought you&apos;d moved past. And sometimes the scar changes color. Sometimes it itches. Sometimes you think the infection is back. The law says: wait. Look again. See if it is spreading or if it is staying still. See if the body is actually healing. Most of the time, it is.',
        },

        {
          kind: 'reflection',
          id: 'lev13-scar',
          prompt:
            'What old wound in you is healing? What makes you doubt that the healing is real?',
        },
      ],
    },

    /* ─── Leviticus 13:29–37 — On Head or Beard ─────────────────────── */
    {
      ref: 'Leviticus 13:29–37',
      title: 'On the Head or Beard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 29,
              spans: [
                t('If a man or woman have a plague upon the head or the beard;'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Then the priest shall see the plague: and, behold, if it be in sight deeper than the skin; and there be in it a yellow thin hair; then the priest shall pronounce him unclean: it is a dry scall, even a leprosy upon the head or beard.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-head',
          html:
            'The head and beard are visible. There is no hiding a scall on the head. If the mark is there, it is announced to the world. The yellow hair is a sign that the affliction has reached the root. The priest looks and speaks.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 31,
              spans: [
                t('And if the priest look on the plague of the scall, and, behold, it be not in sight deeper than the skin, and that there is no black hair in it; then the priest shall shut up him that hath the plague of the scall seven days:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And in the seventh day the priest shall look on the plague: and, behold, if the scall spread not, and there be in it no yellow hair, and the scall be not in sight deeper than the skin;'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Then he shall be shaven, but the scall shall he not shave; and the priest shall shut up him that hath the scall seven days more:'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And in the seventh day the priest shall look on the scall: and, behold, if the scall be not spread in the skin, nor be in sight deeper than the skin; then the priest shall pronounce him clean: and he shall wash his clothes, and be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-shaving',
          html:
            'A practical detail: the person is shaved, but not the affected spot. This allows the priest to see if the condition is spreading. Every day of waiting, every examination, every bit of attention is an act of care. The law does not rush to isolate. It stops to look.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 35,
              spans: [
                t('But if the scall spread much in the skin after his cleansing;'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Then the priest shall look on him: and, behold, if the scall be spread in the skin, the priest shall not seek for yellow hair; he is unclean.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('But if the scall be in his sight at a stay, and that there is black hair grown up therein; the scall is healed, he is clean: and the priest shall pronounce him clean.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'Some afflictions are public. Everyone sees them. And yet the law does not shame you for them. It watches, waits, and looks for signs of healing. Black hair growing back is a victory. The priest sees it and says so.',
        },

        {
          kind: 'reflection',
          id: 'lev13-visible',
          prompt:
            'What affliction in you is public — something everyone can see? What would it mean to trust that someone is watching for signs of healing, not just signs of judgment?',
        },
      ],
    },

    /* ─── Leviticus 13:38–44 — Bright Spots and Baldness ───────────── */
    {
      ref: 'Leviticus 13:38–44',
      title: 'Bright Spots and Bald Heads',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 38,
              spans: [
                t('If a man also or a woman have in the skin of their flesh bright spots, even white bright spots;'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Then the priest shall look: and, behold, if the bright spots in the skin of their flesh be darkish white; it is a freckled spot that groweth in the skin; he is clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-freckle',
          html:
            'Not every mark is an affliction. Some marks are simply marks. The text calls them &ldquo;freckled spots that grow in the skin&rdquo; — normal variation, not disease. The priest knows the difference, and so does the law.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 40,
              spans: [
                t('And the man whose hair is fallen off his head, he is bald; yet is he clean.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And he that hath his hair fallen off from the part of his head toward his face, he is forehead bald: yet is he clean.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('But if there be in the bald head, or bald forehead, a white reddish sore; it is a leprosy sprung up in his bald head, or his bald forehead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-baldness',
          html:
            'Baldness is not affliction. A man can be completely bald and completely clean. Only if a white reddish sore appears in the bald spot — only then is it a mark of disease. The law is precise. It does not condemn what is simply the way a body ages or changes.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 43,
              spans: [
                t('Then the priest shall look upon it: and, behold, if the rising of the sore be white reddish in his bald head, or in his bald forehead, as the leprosy appeareth in the skin of the flesh;'),
              ],
            },
            {
              number: 44,
              spans: [
                t('He is a leprous man, he is unclean: the priest shall pronounce him utterly unclean; his plague is in his head.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'You carry marks that are not afflictions. Gray hair, wrinkles, scars from healing — these are not signs that something is wrong with you. The law is specific about what is unclean. Everything else is simply the living, aging, changing self that you are. Do not confuse the two.',
        },

        {
          kind: 'reflection',
          id: 'lev13-marks-self',
          prompt:
            'What marks on you have you been treating as afflictions when they are just the marks of being human?',
        },
      ],
    },

    /* ─── Leviticus 13:45–46 — The Unclean Person ──────────────────── */
    {
      ref: 'Leviticus 13:45–46',
      title: 'Alone, Outside the Camp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 45,
              spans: [
                t('And the leper in whom the plague is, his clothes shall be rent, and his head bare, and he shall '),
                hy('put a covering upon his upper lip', 'lev13-cover'),
                t(', and shall cry, Unclean, unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-cover',
          html:
            'The person must openly announce their condition. Torn clothes. Uncovered head. A covering over the mouth — not to silence them, but to mark them as unclean to any who come near. The person themselves must speak the truth about themselves. &ldquo;Unclean, unclean!&rdquo; They do not hide. They declare.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 46,
              spans: [
                t('All the days wherein the plague shall be in him he shall be defiled; he is unclean: he shall '),
                hp('dwell alone', 'lev13-alone'),
                t('; without the camp shall his habitation be.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'lev13-alone',
          title: 'Christ Connection — The One Outside',
          html:
            'The leper dwells alone, outside the camp — outside worship, outside the people of God. Hebrews 13:12 says of Jesus: &ldquo;Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate.&rdquo; Jesus is the One who went outside the camp. He became the unclean so the unclean could come home. Every person ever told they do not belong is looking at the face of the One who walked outside to meet them.',
        },
        {
          kind: 'carry',
          html:
            'Isolation is the deepest part of affliction. Not the mark itself — the loneliness. The separation. The feeling of being outside, beyond reach, beyond love. But the deepest part of the gospel is this: the One who cannot be made unclean is the One who comes outside the gate. He walks where you are alone. His touch is not contaminated. His presence does not depend on your being healed first. He came to where you are.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'lev13-outside',
          prompt:
            'Where do you feel you are dwelling outside the camp — alone, not belonging, beyond reach? What would it mean to encounter Him there?',
        },
        {
          kind: 'artwork',
          matchTitle: /codex amiatinus.*leviticus 14/i,
          caption: 'Leviticus 13:45–46 · Alone, Outside the Camp — The Law of Restoration',
        },
      ],
    },

    /* ─── Leviticus 13:47–59 — Garment Affected by Plague ────────────── */
    {
      ref: 'Leviticus 13:47–59',
      title: 'The Affliction Spreads to Cloth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 47,
              spans: [
                t('The garment also that the plague of leprosy is in, whether it be a woollen garment, or a linen garment;'),
              ],
            },
            {
              number: 48,
              spans: [
                t('Whether it be in the warp, or woof; of linen, or of woollen; whether in a skin, or in any thing made of skin;'),
              ],
            },
            {
              number: 49,
              spans: [
                t('If the plague be greenish or reddish in the garment, or in the skin, either in the warp, or in the woof, or in any thing of skin; it is a plague of leprosy, and shall be shewed unto the priest:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-fabric',
          html:
            'The affliction can travel beyond the body. It can infect cloth, leather, anything it touches. The contagion is real. But notice: even here, the priest examines. He decides what is defiling and what is not.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 50,
              spans: [
                t('And the priest shall look upon the plague, and shut up it that hath the plague seven days:'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And he shall look on the plague on the seventh day: if the plague be spread in the garment, either in the warp, or in the woof, or in a skin, whatsoever be the use of the skin, the plague is a fretting leprosy; it is unclean.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('Therefore he shall burn that garment, whether warp or woof, in woollen or in linen, or any thing of skin, wherein the plague is: for it is a fretting leprosy; it shall be burnt in the fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev13-burn',
          html:
            'Some afflictions cannot be washed away or treated. They must be burned. The garment is removed and destroyed. It sounds harsh. But sometimes the merciful thing is to let something go entirely rather than try to keep something broken that contaminates everything it touches.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 53,
              spans: [
                t('And if the priest shall look, and, behold, the plague be not spread in the garment, either in the warp, or in the woof, or in any thing of skin;'),
              ],
            },
            {
              number: 54,
              spans: [
                t('Then the priest shall command that they wash the thing wherein the plague is, and he shall shut it up seven days more:'),
              ],
            },
            {
              number: 55,
              spans: [
                t('And the priest shall look on the plague, after that it hath been washed: and, behold, if the plague have not changed his colour, though the plague be not spread; it is unclean; thou shalt burn it in the fire; it is fret inward, whether it be bare within or without.'),
              ],
            },
            {
              number: 56,
              spans: [
                t('And if the priest look, and, behold, the plague be somewhat dark after the washing of it; then he shall rend it out of the garment, or out of the skin, or out of the warp, or out of the woof:'),
              ],
            },
            {
              number: 57,
              spans: [
                t('And if it appear still in the garment, either in the warp, or in the woof, or in any thing of skin; it is a spreading plague: thou shalt burn that wherein the plague is with fire.'),
              ],
            },
            {
              number: 58,
              spans: [
                t('And the garment, either warp, or woof, or whatsoever thing of skin it be, which thou shalt wash, if the plague be departed from them, then it shall be washed the second time, and shall be clean.'),
              ],
            },
            {
              number: 59,
              spans: [
                t('This is the law of the plague of leprosy in a garment of woollen or linen, either in the warp, or woof, or in any thing of skin, to pronounce it clean, or to pronounce it unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'Some things in your life are contaminated. Not you — the things. A relationship that has become toxic. A habit that keeps dragging you down. A place where the infection has spread through everything. The law says: wash it once. Watch it. If the stain remains after you have tried to clean it, the mercy is to let it burn. Do not keep carrying something that contaminates everything else you touch. The merciful thing is sometimes to set it down.',
        },

        {
          kind: 'reflection',
          id: 'lev13-cloth',
          prompt:
            'Is there something in your life that has been contaminated — a relationship, a habit, a place — that you have been trying to wash and keep? What would it mean to let it go?',
        },
      ],
    },
  ],
};
