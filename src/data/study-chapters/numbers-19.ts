import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 19 — The ritual of the red heifer. A red heifer without spot or
 * blemish, that has never borne a yoke, is brought outside the camp. Eleazar
 * the priest slays it. The priest dips his finger in the blood and sprinkles it
 * toward the tabernacle seven times. The whole heifer is burned — flesh, skin,
 * organs — along with cedar wood, hyssop, and scarlet thread. The ashes are
 * gathered and mixed with running water to make the "water of separation"
 * (me niddah), used to cleanse anyone who has touched a corpse or been in a
 * tent with a dead body. The mystery: the ritual that purifies the unclean
 * defiles the priest who handles it. This is the paradox of substitution.
 *
 * In Jewish tradition, the red heifer is the ultimate mystery — Rashi says King
 * Solomon understood all of Scripture but confessed this alone baffled him. The
 * ritual involves color (red), materials (cedar, hyssop, scarlet), numbers
 * (seven sprinklings), and the reversal of priestly purity (handler defiled,
 * unclean purified). All of these thread directly into the cross.
 *
 * Hebrews 9:13–14 cites this: "If the blood of bulls and of goats, and the
 * ashes of an heifer sprinkling the unclean, sanctifieth to the purifying of
 * the flesh: How much more shall the blood of Christ… purge your conscience."
 * Christ is the red heifer. He was slain outside the gate. He became sin for us
 * who knew no sin. The cedar, hyssop, and scarlet of Psalm 51 ("though your
 * sins be as scarlet, they shall be as white as snow") appear at the cross too.
 * The defiling of the priest is the mystery of substitution — Christ made
 * himself unclean by bearing our sin.
 *
 * 22 verses. Minimum 2 Christ connections.
 */
export const NUMBERS_19: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 19,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  topicTags: ['provision', 'protection', 'leadership', 'doubt'],
  opener: {
    topical: true,
    caption: 'Numbers 19',
  },
  intros: [
    'Israel has been wandering in the wilderness for nearly forty years. Death is everywhere — in the camp, along the journey, in tents where the people sleep. And the law is clear: anyone who touches a dead body becomes unclean for seven days. If you touch a corpse, you cannot approach the tabernacle, cannot eat the holy offerings, cannot gather with the congregation until you are purified. The question has become urgent: how do you cleanse a whole nation of death?',
    'God answers with a ritual unlike anything else in Scripture. A red heifer is brought outside the camp — not a sacrifice (it is not eaten, not offered on the altar), but a purification offering. The priest slays it and burns it completely — flesh, skin, organs, everything — mixed with cedar wood, hyssop, and scarlet thread. The ashes are gathered and mixed with running water. This "water of separation" becomes the vehicle of cleansing. Touch the ashes-water and you are clean again. You can return to the camp, approach the tabernacle, rejoin the congregation.',
    'But there is a paradox buried in the ritual: the priest who burns the heifer becomes unclean. The very ritual that purifies the people defiles the one who performs it. The handler of death becomes contaminated by handling the purification from death. This is the deepest mystery in the law — and it points directly to the cross. Christ, the one who cleanses us from sin, had to become sin Himself. He bore our uncleanness so that we could become clean.',
  ],

  bottomShare: {
    label: 'Share Numbers 19',
    quote:
      'God commanded the Israelites to burn a red heifer without blemish outside the camp, mixing its ashes with water to create water of separation. Anyone who touched a dead body was sprinkled with this water and became clean. Yet the priest who burned the heifer became unclean himself — the same ritual that purified others defiled him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 19 · Study Guide',
  },

  sections: [
    /* ─── Numbers 19:1–10 — The Ritual of the Red Heifer ──────────────────── */
    {
      ref: 'Numbers 19:1–10',
      title: 'The Red Heifer and the Water of Separation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(1,
              t('And the Lord spake unto Moses and unto Aaron, saying,')
            ),
            verse(2,
              t('This is the ordinance of the law which the Lord hath commanded, saying, Speak unto the children of Israel, that they bring thee a '),
              hy('red heifer without spot', 'heifer-red'),
              t(', wherein is no blemish, and upon which never came yoke:')
            ),
            verse(3,
              t('And ye shall give her unto Eleazar the priest, that he may bring her forth without the camp, and one shall slay her before his face:')
            ),
            verse(4,
              t('And Eleazar the priest shall take of her blood with his finger, and sprinkle of her blood directly before the tabernacle of the congregation seven times:')
            ),
            verse(5,
              t('And one shall burn the heifer in his sight; her skin, and her flesh, and her blood, with her dung, shall he burn:')
            ),
            verse(6,
              t('And the priest shall take cedar wood, and hyssop, and scarlet, and cast it into the midst of the burning of the heifer.')
            ),
            verse(7,
              t('Then the priest shall wash his clothes, and he shall bathe his flesh in water, and afterward he shall come into the camp, and the priest shall be unclean until the even.')
            ),
            verse(8,
              t('And he that burneth her shall wash his clothes in water, and bathe his flesh in water, and shall be unclean until the even.')
            ),
            verse(9,
              t('And a man that is clean shall gather up the ashes of the heifer, and lay them up without the camp in a clean place, and it shall be kept for the congregation of the children of Israel for a '),
              hy('water of separation', 'me-niddah'),
              t(': it is a purification for sin.')
            ),
            verse(10,
              t('And he that gathereth the ashes of the heifer shall wash his clothes, and be unclean until the even: and it shall be unto the children of Israel, and unto the stranger that sojourneth among them, '),
              hp('for a statute for ever', 'statute-forever-christ'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'heifer-red',
          title: 'Parah Adumah — "red heifer"',
          script: 'פָּרָה אֲדֻמָּה',
          translit: '<strong>parah adumah</strong> · a heifer (young cow), red in color; one of the most mysterious rituals in Jewish law',
          description:
            'The red heifer is the ultimate mystery in Jewish tradition. The Talmud says it was required to be perfectly red — even two black or white hairs disqualified it. It could never have borne a yoke, signifying it was not bound to human service. Rashi, the greatest Jewish commentator, said Solomon understood all of Scripture, but this ritual alone confounded him. It makes sense only in light of the cross.',
        },
        {
          kind: 'commentary',
          id: 'heifer-outside-camp',
          html:
            'The heifer is brought outside the camp. It is not sacrificed on the altar of the tabernacle. It is slain in the open air, its entire body burned completely. This outsider status — executed beyond the boundary of the holy community — will echo at Golgotha. [res:sefaria-numbers-19]',
        },
        {
          kind: 'commentary',
          id: 'cedar-hyssop-scarlet',
          html:
            'Cedar, hyssop, and scarlet are burned with the heifer. These three items appear together at the red heifer and nowhere else in the Law — but they appear together at the cross. David cried out, "Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow… then shall I hear joy and gladness" (Psalm 51:7–8). The hyssop branch was used to apply Christ&apos;s blood at the cross (John 19:29). Scarlet is the color of sin in Isaiah 1:18: "though your sins be as scarlet, they shall be as white as snow." The cedar speaks of the tree, the cross itself. Every material burned with the heifer appears at the place where sin is finally cleansed.',
        },
        {
          kind: 'hebrew',
          id: 'me-niddah',
          title: 'Me Niddah — "water of separation; water of uncleanness"',
          script: 'מֵי נִדָּה',
          translit: '<strong>me niddah</strong> · water of separation; often translated "water of uncleanness," though it is used for cleansing',
          description:
            'Niddah normally means uncleanness or impurity. Yet this water made from ashes is used to cleanse the unclean. The paradox is embedded in the name: the water that represents uncleanness is itself the instrument of cleansing. This is the mystery of vicarious atonement — the bearer of sin cleanses others.',
        },
        {
          kind: 'commentary',
          id: 'priest-defiled',
          html:
            'The priest who burns the heifer becomes unclean. He must wash his clothes and bathe his flesh. Even the priest who gathers the ashes becomes unclean until evening. The one who handles the ritual of purification is defiled by it. This is not accidental. The text repeats it: both the one who burns the heifer and the one who gathers its ashes are unclean. The bearer of the purification becomes the bearer of uncleanness. [res:hebrews-9-red-heifer]',
        },
        {
          kind: 'christ',
          id: 'statute-forever-christ',
          title: 'Christ Connection — The One Made Unclean for Our Cleansing',
          html:
            'In 2 Corinthians 5:21, Paul writes: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him." Christ is the red heifer who is burned outside the camp. He bore our sin — took it into Himself — so that we could be made clean. The priest in Numbers 19 is a type of Christ: the one who performs the ritual of purification becomes the bearer of uncleanness. Christ&apos;s work is not a transaction at a distance; it is a substitution. He took what was ours — our death, our uncleanness, our sin — so that what is His could become ours — His righteousness, His life, His cleanness.',
        },
        {
          kind: 'carry',
          html:
            'The work of cleansing others from sin has never been a clean job. Christ stepped into the mess of our uncleanness and became unclean Himself. He is not standing at a distance, offering you a purification you have to work out on your own. He has already entered into your death, your shame, your uncleanness, and transformed it. The water of separation — the ashes of what has died — is now the instrument of your cleansing. You can return to the camp. You can approach the tabernacle. You can rejoin the congregation because He bore the uncleanness alone.',
        },
        {
          kind: 'reflection',
          id: 'reflection-unclean',
          prompt: 'What part of yourself feels most unclean, most separated from the holy, most unable to approach God? What would change if you truly believed Christ bore that uncleanness for you?',
        },
      ],
    },

    /* ─── Numbers 19:11–13 — The Cleansing of the Unclean ───────────────── */
    {
      ref: 'Numbers 19:11–13',
      title: 'Touching Death, Becoming Unclean',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(11,
              t('He that '),
              hy('toucheth the dead body', 'touch-body-unclean'),
              t(' of any man shall be unclean seven days.')
            ),
            verse(12,
              t('He shall purify himself with it on the third day, and on the seventh day he shall be clean: but if he purify not himself the third day, then the seventh day he shall not be clean.')
            ),
            verse(13,
              t('Whosoever '),
              hg('toucheth the dead body', 'touch-body-defiled'),
              t(' of any man that is dead, and '),
              hg('purifieth not himself', 'not-purify'),
              t(', defileth the tabernacle of the Lord; and that soul shall be cut off from Israel: because the water of separation was not sprinkled upon him, he shall be unclean; his uncleanness is yet upon him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'touch-body-unclean',
          html:
            'Death is contagious in the Law. To touch a dead body is to become unclean for seven days. This is not moral failure; it is ritual fact. The wilderness generation cannot escape death — it surrounds them. But the Law provides a way to be restored to the community even after touching what kills. [res:bible-odyssey-red-heifer]',
        },
        {
          kind: 'commentary',
          id: 'touch-body-defiled',
          html:
            'The unclean person who refuses to be sprinkled with the water of separation defiles the tabernacle itself. Uncleanness is contagious. If you remain unclean and approach the holy place, your uncleanness spreads to the tabernacle. The solution is not to hide the unclean or exclude them forever. It is to provide the means of cleansing and require that they use it.',
        },
        {
          kind: 'commentary',
          id: 'not-purify',
          html:
            '"That soul shall be cut off from Israel" — the refusal to be purified carries a harsh consequence. This is not arbitrary. The nation cannot function if people remain unclean and still try to worship at the tabernacle. The boundary is firm: you either accept the cleansing, or you are cut off from the congregation.',
        },
        {
          kind: 'carry',
          html:
            'The Law does not shame you for becoming unclean through touching death. It shames you for refusing the cleansing that has been provided. In your own life, the question is not whether you have ever touched something that has defiled you — we all have. The question is whether you will receive the cleansing that has been offered. Refusing the water of separation is not noble; it is separation from the community, from worship, from the presence of God.',
        },
        {
          kind: 'reflection',
          id: 'reflection-refuse-cleansing',
          prompt: 'Is there any cleansing you have been offered that you have refused? Why?',
        },
      ],
    },

    /* ─── Numbers 19:14–22 — The Spread of Uncleanness ──────────────────── */
    {
      ref: 'Numbers 19:14–22',
      title: 'The Shadow of Death in the Tent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(14,
              t('This is the law, when a man dieth in a tent: all that come into the tent, and all that is in the tent, shall be unclean seven days.')
            ),
            verse(15,
              t('And every open vessel, which hath no covering bound upon it, is unclean.')
            ),
            verse(16,
              t('And whosoever toucheth one that is slain with a sword in the open fields, or a dead body, or a bone of a man, or a grave, shall be unclean seven days.')
            ),
            verse(17,
              t('And for an unclean person they shall take of the ashes of the burnt purification for sin, and running water shall be put thereto in a vessel:')
            ),
            verse(18,
              t('And a clean person shall take hyssop, and dip it in the water, and sprinkle it upon the tent, and upon all the vessels, and upon the persons that were there, and upon him that touched a bone, or one slain, or one dead, or a grave:')
            ),
            verse(19,
              t('And the clean person shall sprinkle upon the unclean on the third day, and on the seventh day: and on the seventh day he shall purify himself, and wash his clothes, and bathe himself in water, and shall be clean at even.')
            ),
            verse(20,
              t('But the man that shall be unclean, and shall not purify himself, that soul shall be cut off from among the congregation, because he hath defiled the sanctuary of the Lord: the water of separation hath not been sprinkled upon him; he is unclean.')
            ),
            verse(21,
              t('And it shall be a perpetual statute unto them, that he that sprinkling the water of separation shall wash his clothes; and he that toucheth the water of separation shall be unclean until even.')
            ),
            verse(22,
              t('And whatsoever the unclean person toucheth shall be unclean; and the soul that toucheth it shall be unclean until even.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'death-in-tent',
          html:
            'Death in the tent contaminates everything inside it — the air, the vessels, the people. It is a picture of how sin works. It spreads without asking permission. It contaminates the whole tent just by being there. This is not about blame; it is about how uncleanness functions in the world.',
        },
        {
          kind: 'commentary',
          id: 'open-vessel',
          html:
            'An open vessel becomes unclean just by being in a tent with a dead body. A covered vessel remains clean. The Law makes space for the unintentional — if your vessel is covered, you are protected. But the default is: everything is touched.',
        },
        {
          kind: 'hebrew',
          id: 'hyssop-sprinkle',
          title: 'Hyssop — the herb of cleansing',
          script: 'אֵזוֹב',
          translit: '<strong>ezov</strong> · hyssop, a small herb with a woody stem; used for sprinkling in purification rituals',
          description:
            'Hyssop was used to sprinkle the blood on the doorposts at the exodus (Exodus 12:22). It appears at the red heifer. It was used at the cross. It is a small plant with humble origins, yet it is the tool of divine cleansing. The smallest, simplest herb carries the greatest power to restore.',
        },
        {
          kind: 'commentary',
          id: 'clean-sprinkles',
          html:
            'A clean person sprinkles the water of separation on the third day and the seventh day. This repetition drives the point: cleansing is not instantaneous. You are sprinkled again on day three; you must wait until evening of day seven. You are engaged in a process, not in a magic ritual. The unclean must be patient, cooperative, and receptive.',
        },
        {
          kind: 'christ',
          id: 'christ-hyssop-cross',
          title: 'Christ Connection — The Hyssop at the Cross',
          html:
            'At the cross, a hyssop branch appears. John records: "Now there was set a vessel full of vinegar: and they filled a sponge with vinegar, and put it upon hyssop, and put it to his mouth" (John 19:29). The hyssop that cleansed at the exodus and at the red heifer cleanses finally at Golgotha. Jesus is not standing aside offering you the water of separation from a distance. He drank the bitter drink on the hyssop. He entered fully into the uncleanness, drank it, bore it, so that you could be sprinkled clean.',
        },
        {
          kind: 'carry',
          html:
            'The cleansing happens over seven days. You do not wake up on day one and feel completely clean. You are sprinkled on day three and again on day seven. It is a process of gradually receiving what the water of separation offers. In your own life, allow for the process. The unclean are not cast out; they are invited into a rhythm of restoration. You will be sprinkled again. You will have another seven days to let the water do its work. Do not demand that you be fully restored in a moment.',
        },
        {
          kind: 'reflection',
          id: 'reflection-process',
          prompt: 'Where are you in the seven-day rhythm of cleansing? Are you at day one, day three, or day seven? What would it look like to trust the process?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-19',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 19',
      url: 'https://www.sefaria.org/Numbers.19',
      description: 'Full text and commentary on the red heifer ritual and the law of ritual purification through the water of separation.',
    },
    {
      id: 'hebrews-9-red-heifer',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 19 ↔ Hebrews 9:13–14',
      url: 'https://intertextual.bible/search?q=Numbers+19+Hebrews+9+13',
      description: 'Hebrews applies the red heifer ashes to show how Christ&apos;s blood purifies the conscience from dead works.',
    },
  ],
};
