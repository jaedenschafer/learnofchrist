import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 15 — laws on bodily discharges (male emissions, female menstruation,
 * abnormal discharges). What makes one unclean, how long, what to wash, when to
 * offer two birds.
 */
export const LEVITICUS_15: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 15,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  intros: [
    'Leviticus 15 walks through the laws of bodily discharges. Male emissions, menstruation, abnormal discharge—what makes a person temporarily unclean, how long the uncleanness lasts, what washing is required, what offerings bring cleansing. The language is direct and clinical. There is no squeamishness in Scripture about the reality of the body.',
    'These laws are not about shame. They are about boundaries. Even normal bodily function—the kind that happens to every human—reminds Israel that this is a fallen world that needs cleansing before it can come near God. The pattern is consistent: isolation, washing, waiting, offering. The body matters. Cleanliness matters. And Christ will later overturn the direction of it all: instead of cleanness flowing outward from the holy, cleanness will flow inward from Him.',
  ],

  tapHint: 'Tap any highlighted phrase to jump to its explanation.',

  sections: [
    /* ─── Leviticus 15:1–15 — Male Discharge ────────────────────────────── */
    {
      ref: 'Leviticus 15:1–15',
      title: 'Male Discharge: Duration and Cleansing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [t('And the LORD spake unto Moses and to Aaron, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When any man hath a '),
                hy('running issue', 'lev15-zav'),
                t(' out of his flesh, because of his issue he is '),
                hg('unclean', 'lev15-unclean-def'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And this shall be his uncleanness in his issue: whether his flesh run with his issue, or his flesh be stopped from his issue, it is his uncleanness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-unclean-def',
          html:
            'Uncleanness is not sin. It is not a moral failing. It is a state of separation. The body in its natural processes—discharge, menstruation—places a boundary between a person and the holy place. This is not punishment; it is recognition of how the world actually works. Fallen bodies need cleansing before they approach holiness.',
        },
        {
          kind: 'hebrew',
          id: 'lev15-zav',
          title: 'Zav — &ldquo;discharger&rdquo;',
          script: 'זָב',
          translit: '<strong>zav</strong> · one who flows, one who has an issue',
          description:
            'The word zav appears throughout this chapter. It is a generic term for anyone with a discharge. It is not degrading; it is simply descriptive. He is the one from whom something flows.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('Every bed whereon he lieth that hath the issue is unclean: and every thing whereon he sitteth shall be unclean.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And whosoever toucheth his bed shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And whosoever sitteth on any thing whereon he sat that hath the issue shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-spread',
          html:
            'The uncleanness spreads through contact. Not through infection—the laws are not about hygiene—but through ritual transfer. If you touch what the discharger has touched, you become unclean until evening. The pattern is always the same: wash, wait, and be clean when the sun sets.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [t('And if he that hath the issue spit upon him that is clean, then he shall wash his clothes, and bathe himself in water, and be unclean until the even.')],
            },
            {
              number: 8,
              spans: [t('And if he that hath the issue spit upon him that is clean, then he shall wash his clothes, and bathe himself in water, and be unclean until the even.')],
            },
            {
              number: 9,
              spans: [
                t('And what saddle soever he rideth upon that hath the issue shall be unclean.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And whosoever toucheth any thing that was under him shall be unclean until the even: and he that beareth any of those things shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 11,
              spans: [
                t('And whomsoever he toucheth that hath the issue, and hath not rinsed his hands in water: he shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the vessel of earth, that he toucheth which hath the issue, shall be broken: and every vessel of wood shall be rinsed in water.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 13,
              spans: [
                t('And when he that hath an issue is cleansed of his issue; then he shall number to himself '),
                hg('seven days', 'lev15-seven'),
                t(' for his cleansing, and wash his clothes, and bathe his flesh in running water, and shall be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-seven',
          html:
            'Seven days—the biblical number of completion. The discharge must stop. Then the counting begins. Not immediately clean; not after one day. Seven days of careful washing, running water, waiting. The body itself is part of the cleansing.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 14,
              spans: [
                t('And on the eighth day he shall take to him two turtledoves, or two young pigeons, and come before the LORD unto the door of the tabernacle of the congregation, and give them unto the priest:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the priest shall offer them, the one for a sin offering, and the other for a burnt offering; and the priest shall make an atonement for him before the LORD for his issue.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-offering',
          html:
            'The offering is not for sin—the discharge itself is not sinful. But the requirement shows that cleansing is not merely external. Washing is part of it. Waiting is part of it. But the whole person must be brought again to God. The priest makes atonement. The person is restored to the congregation.',
        },
        {
          kind: 'carry',
          html:
            'You live in a body that functions in ways you can&apos;t always control. The Bible does not hide from that. It does not shame it. It simply names it: this is how fallen bodies work. And this is what cleansing looks like—not instant, not effortless, but real. Washing. Waiting. Time. And finally, restoration.',
        },
        {
          kind: 'reflection',
          id: 'male-discharge',
          prompt:
            'What part of your embodied life have you felt shame about that Scripture simply names as ordinary? What would change if you believed your body&apos;s reality doesn&apos;t disqualify you from coming near God?',
        },
      ],
    },

    /* ─── Leviticus 15:16–18 — Normal Male Emission ────────────────────── */
    {
      ref: 'Leviticus 15:16–18',
      title: 'Male Emission: Cleansing Required',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 16,
              spans: [
                t('And if any man&apos;s seed of copulation go out from him, then he shall wash all his flesh in water, and be unclean until the even.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And every garment, and every skin, whereon is the seed of copulation, shall be washed with water, and be unclean until the even.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The woman also with whom man shall lie with seed of copulation, they shall both bathe themselves in water, and be unclean until the even.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-emission',
          html:
            'This is not about marital relations being shameful. It is about the fact that the body, in its natural function, requires cleansing. The man washes. The woman washes. Both are unclean until evening. This is not punishment for intimacy. It is the acknowledgment that even the most natural human acts place us in need of cleansing before approaching holiness.',
        },
        {
          kind: 'carry',
          html:
            'The Bible treats your body&apos;s natural functions matter-of-factly. Not with disgust. Not with shame. With directness. You wash. You wait. And you are clean again by evening. Your embodied life is not an obstacle to faith. It is part of it.',
        },
      ],
    },

    /* ─── Leviticus 15:19–30 — Female Menstruation ──────────────────────── */
    {
      ref: 'Leviticus 15:19–30',
      title: 'Female Menstruation: Uncleanness and Cleansing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 19,
              spans: [
                t('And if a woman have an issue, and her issue in her flesh be blood, she shall be '),
                hy('put apart', 'lev15-niddah'),
                t(' seven days: and whosoever toucheth her shall be unclean until the even.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev15-niddah',
          title: 'Niddah — &ldquo;menstruating woman&rdquo;',
          script: 'נִדָּה',
          translit: '<strong>niddah</strong> · set apart, separated',
          description:
            'The woman is not contaminated; she is set apart. The root means separation. She is in a state of separation from the community&apos;s approach to the holy place for this season of her cycle. This is about her body&apos;s work, not her worth.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 20,
              spans: [
                t('And every thing that she lieth upon in her separation shall be unclean: every thing also that she sitteth upon shall be unclean.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And whosoever toucheth her bed shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And whosoever toucheth any thing that she sat upon shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And if it be on her bed, or on any thing whereon she sitteth, when he toucheth it, he shall be unclean until the even.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And if any man lie with her at all, and her flowers be upon him, he shall be unclean seven days; and all the bed whereon he lieth shall be unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-menstrual',
          html:
            'The menstrual cycle is named directly here. Not hidden. Not euphemized. It is a natural part of female embodiment, and the law accounts for it. The period is seven days. The uncleanness spreads to what she touches, just as with the male discharge. But notice: she is not herself unclean in her person. She is in a state of separation that requires specific cleansing practices.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 25,
              spans: [
                t('And if a woman have an issue of her blood many days out of the time of her separation, or if it run beyond the time of her separation; all the days of the issue of her uncleanness shall be as the days of her separation: she shall be unclean.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Every bed whereon she lieth all the days of her issue shall be unto her as the bed of her separation: and whatsoever she sitteth upon shall be unclean, as the uncleanness of her separation.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And whosoever toucheth those things shall be unclean, and shall wash his clothes, and bathe himself in water, and be unclean until the even.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-abnormal',
          html:
            'If menstruation is unusually heavy or prolonged, the woman is unclean for all of it. Not seven days, but for the duration. Again, this is not a judgment on her. It is a recognition of her body&apos;s work and its effect on ritual approach to the holy.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 28,
              spans: [
                t('But if she be cleansed of her issue, then she shall number to herself '),
                hg('seven days', 'lev15-seven-fem'),
                t(', and after that she shall be clean.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And on the eighth day she shall take unto her two turtles, or two young pigeons, and bring them unto the priest, to the door of the tabernacle of the congregation:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the priest shall offer the one for a sin offering, and the other for a burnt offering; and the priest shall make an atonement for her before the LORD for the issue of her uncleanness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-seven-fem',
          html:
            'Same pattern as the male discharge: seven days after the flow stops, washing, and on the eighth day, an offering brought to the priest. The cycle is complete when she comes before God again. Her uncleanness is not permanent. It is seasonal. It is normal. And it passes.',
        },
        {
          kind: 'carry',
          html:
            'If you menstruate, you know your body is powerful and inconvenient by turns. Leviticus does not pretend otherwise. It does not minimize it. It does not treat you as broken. It simply says: this is your body&apos;s work. Here is how you care for yourself and your community during this season. And then you are clean again. There is no shame in the rhythm of your own flesh.',
        },
        {
          kind: 'reflection',
          id: 'menstruation',
          prompt:
            'What lies have you believed about your body&apos;s cycles? What would it mean to see them as simply part of how God made you?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Leviticus 15:31–33 — Summary and Christ Connection ──────────── */
    {
      ref: 'Leviticus 15:31–33',
      title: 'The Purpose of Cleanness: Protecting the Holy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 31,
              spans: [
                t('Thus shall ye separate the children of Israel from their uncleanness; that they '),
                hp('die not in their uncleanness', 'christ-cleanness'),
                t(', when they defile my tabernacle that is among them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-death',
          html:
            'The stakes are real. To approach God&apos;s tabernacle in uncleanness is not a small matter. It is death. This is not arbitrary severity. It is the recognition that holiness and uncleanness cannot occupy the same space. The purpose of the law is not to make people ashamed; it is to keep them alive—by teaching them the boundaries between the fallen body and the utterly holy God.',
        },
        {
          kind: 'christ',
          id: 'christ-cleanness',
          title: 'Christ Connection — Cleanness Flows the Wrong Way',
          html:
            'In Mark 5:25–34, a woman with a 12-year flow of blood touches Jesus&apos;s garment in a crowd[res:intertextual-mark-5-leviticus-15]. Under Leviticus 15, she has made everyone around her unclean. She is a walking tabernacle violation. But something reverses. Jesus says, &ldquo;Daughter, thy faith hath made thee whole.&rdquo; Instead of her uncleanness spreading to Him, His cleanness flows into her. The woman who should have been avoided becomes &ldquo;daughter.&rdquo; Jesus does not enforce the boundary between clean and unclean. He erases it—not by ignoring it, but by absorbing it into Himself[res:bibleodyssey-niddah]. The direction of cleansing changes. It flows inward.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 32,
              spans: [
                t('This is the law of him that hath an issue, and of him whose seed goeth from him, and is defiled therewith;'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And of her that is sick of her flowers, and of him that hath an issue, of the man, and of the woman, and of him that lieth with a woman that is unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev15-law-summarized',
          html:
            'Leviticus 15 closes by listing everyone the law has addressed[res:sefaria-leviticus-15]. The male with discharge. The male with emission. The female with menstruation. The female with abnormal flow. Their partners. The law assumes all bodies, in all their normal function, require cleansing. No one is exempt. No one is clean by default. Everyone needs washing, waiting, and the path back to the holy through an offering brought by a priest.',
        },
        {
          kind: 'carry',
          html:
            'Your body—as it works, as it bleeds, as it functions in all its ordinary ways—is not an obstacle to faith. It is part of being human. And in Christ, no bodily state separates you from God. You do not have to become disembodied to approach Him. He came in a body. He was touched by the woman with the issue of blood. He rises in flesh. What you are—embodied, limited, mortal, sometimes unclean—is not what He rejects. It is what He comes for.',
        },
        {
          kind: 'reflection',
          id: 'law-whole',
          prompt:
            'Where have you felt your body separates you from God? How does the story of Jesus and the bleeding woman rewrite that story?',
        },
        {
          kind: 'artwork',
          matchTitle: /woman.*blood|issue|hem/i,
          caption: 'Leviticus 15 · Uncleanness and Cleansing',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 15',
    quote:
      'The Bible does not hide from the body. It names menstruation, emission, discharge—the ordinary work of embodied life. None of it separates you from God&apos;s love. Christ came in flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 15 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-15',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 15 — Bodily Discharges',
      url: 'https://www.sefaria.org/Leviticus.15',
      description: 'Comprehensive rabbinic commentary on menstruation, male emissions, and the laws of ritual purity related to the body[res:sefaria-leviticus-15].',
    },
    {
      id: 'intertextual-mark-5-leviticus-15',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Leviticus 15 ↔ Mark 5:25–34',
      url: 'https://intertextual.bible/search?q=Leviticus+15+Mark+5+25',
      description: 'Side-by-side comparison of the woman with the 12-year issue of blood and how Jesus reverses the flow of uncleanness to cleanness[res:intertextual-mark-5-leviticus-15].',
    },
  ],

  hasHebrew: true,
};
