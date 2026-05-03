import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 4 — The Three Impossible Questions
 *
 * Ezra, in anguish, asks God to explain His ways. The angel Uriel appears and
 * answers not with doctrine but with three riddles: Weigh me the fire. Measure
 * me the wind. Call back yesterday. These questions are impossible because they
 * reveal the limits of human reason. Uriel then teaches that the ages are
 * hastening to their end, evil is contained for a season, and all returns to
 * the Highest. The chapter is a masterclass in humility—not ignorance, but
 * the honest acknowledgment that the finite cannot contain the infinite.
 */
export const SECOND_ESDRAS_4: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 4,

  estimatedMinutes: { 5: 7, 10: 12, 15: 16 },
  intros: [
    'Ezra cries out to God: Why is the world full of evil? Why does Your justice seem hidden? Why do the wicked prosper while the righteous suffer? His questions are not idle—they are the anguished prayers of a faithful man in exile, watching injustice flourish. And instead of dismissing him, God sends the angel Uriel to meet him where he stands.',
    'But Uriel does not answer in the language of doctrine. He answers in riddles—impossible questions that reorient Ezra&apos;s whole inquiry. Can you weigh fire? Can you measure wind? Can you call back a day that is past? If you cannot understand even earthly things, how will you understand the ways of God? This is not cruelty but clarity: the problem is not God&apos;s justice, but the limits of human sight. What Uriel teaches, through paradox and image, is that faith is not the right to understand everything—faith is the willingness to trust what you cannot measure.',
  ],

  opener: {
    matchTitle: /uriel|angel|fire|wind/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Esdras 4',
    quote:
      'How canst thou weigh the fire? Or how canst thou measure the wind? Or how canst thou call again the day that is past? Even so can no man upon earth understand my ways. The ages are running out. The end is fixed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 4 · Study Guide',
  },

  sections: [
    /* ─── The Angel Uriel ──────────────────────────────────────────────── */
    {
      ref: '2 Esdras 4:1–2',
      title: 'The Angel Uriel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('the angel that was sent unto me, whose name was Uriel', 'c-uriel-name'),
                t(', gave me an answer,'),
              ],
            },
            {
              number: 2,
              spans: [t('And said, Thy heart is troubled and thy word is grievous.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-uriel-name',
          html:
            'Uriel—in Hebrew, <em>אוּרִיאֵל</em>, meaning "God is my light" or "God is my flame." The name is not accidental. Uriel comes as a bearer of light, a messenger of illumination, though not the kind Ezra expects. In Jewish and Christian tradition, Uriel stands at the gate of Eden, warns Noah of the flood, and interprets mysteries. Here, Uriel comes to answer Ezra&apos;s deepest questions not with comfortable answers but with the <em>light</em> of a hard truth: some things exceed your grasp.',
        },
        {
          kind: 'commentary',
          id: 'c-troubled-grievous',
          html:
            'Notice Uriel&apos;s first words: <em>thy heart is troubled and thy word is grievous.</em> Uriel does not dismiss Ezra&apos;s pain or call his questions presumptuous. He names them. He acknowledges them. But he also sees them clearly: Ezra&apos;s questions arise from a mind that is trying to solve what cannot be solved—at least not at the level at which Ezra is asking.',
        },
        {
          kind: 'greek',
          id: 'c-angelos-messenger',
          title: 'Angelos—Messenger',
          script: 'ἄγγελος',
          translit: '<strong>angelos</strong> · messenger; one sent to bring a word',
          description:
            'An angel is not a solution-bringer in the way Ezra hopes. Uriel is sent to bring a <em>word</em>, a reorientation, a truth about the nature of things—not to solve the unsolvable.',
        },
        {
          kind: 'christ',
          id: 'c-word-made-flesh',
          title: 'Christ Connection—The Word Became Flesh',
          html:
            'Uriel comes as a messenger bearing divine light and truth. But in the New Testament, Christ is <em>the</em> Word—not sent to explain God from a distance, but to <em>embody</em> God&apos;s answer in person. Where Uriel says, "You cannot measure the wind," John will say, "The Word was made flesh, and dwelt among us" (John 1:14). The infinite became finite not so we could dissect it, but so we could know it, love it, walk with it.',
        },
        {
          kind: 'carry',
          html:
            'When your heart is troubled and your questions feel unanswerable, God does not ignore you. He sends a messenger—someone who sees your pain and says, "I understand where you stand. Now let me show you what you&apos;re missing." The answer you receive may not be the answer you asked for. It may be better.',
        },
        {
          kind: 'reflection',
          id: 'r-uriel',
          prompt: 'What is a question that has troubled your heart? What would it mean if the answer is not "information you can grasp" but "trust you can give"?',
        },
      ],
    },

    /* ─── Weigh me a weight of fire ─────────────────────────────────── */
    {
      ref: '2 Esdras 4:5',
      title: '"Weigh Me a Weight of Fire"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('How canst thou '),
                hy('weigh the fire', 'c-weigh-fire'),
                t('? Or how canst thou measure the wind? Or how canst thou '),
                hy('call again the day that is past', 'c-weigh-fire'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-weigh-fire',
          html:
            'Fire has weight—a mass, a substance—yet you cannot place it on a scale. The moment you try to weigh it, it escapes. Wind moves, carries force, shapes the world, yet has no measure. And yesterday, real and irrevocable, cannot be summoned back. These are not metaphors for things that don&apos;t exist. They are images of things that exist but elude the tools of human measurement. Uriel is teaching that reality is not limited to what can be quantified, controlled, or reverse-engineered. Some truths can only be <em>trusted</em>, not calculated.',
        },
        {
          kind: 'commentary',
          id: 'c-fire-spirit-breath',
          html:
            'Fire is associated throughout Scripture with God&apos;s presence and power—the burning bush, Pentecost, the refiner&apos;s fire. Wind is the image of Spirit (the Hebrew <em>ruach</em> means wind, breath, spirit). To ask Ezra to weigh fire and measure wind is to ask him to measure God Himself. It is not a puzzle with a clever answer. It is a boundary marker. Here is where human knowledge ends. Here is where trust begins.',
        },
        {
          kind: 'carry',
          html:
            'You have things you need to understand, problems you need to solve, questions that demand answers. That instinct is good—it is how you learn, work, plan, build. But God&apos;s ways are not in that category. They are like fire and wind: you can feel them, respond to them, live in relation to them, but you cannot quantify them into submission. The moment you stop trying to weigh the fire, it warms you.',
        },
        {
          kind: 'reflection',
          id: 'r-fire',
          prompt: 'Is there an area of your life where you&apos;ve been trying to calculate or control something that can only be trusted? What would it mean to stop and let the warmth reach you?',
        },
      ],
    },

    /* ─── Measure me the blast of the wind ──────────────────────────── */
    {
      ref: '2 Esdras 4:5b–7',
      title: '"Measure Me the Blast of the Wind"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('And I said, Behold, O Lord, I am altogether unable: for I am not able to understand the things that thou hast conceived in thy heart.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('How can thy servant be able to understand thy way? especially seeing that his corruption faileth, and his soul is but frail?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unable-frail',
          html:
            'Ezra hears the riddles and capitulates immediately. He recognizes his own condition: corruption, frailty. The body decays. The mind, trapped in a decaying body, cannot ascend to the heights of God&apos;s understanding. This is not false modesty—it is clear-eyed recognition of what it means to be human. Ezra is not spiritually weak or faithless; he is <em>honest about the architecture of existence</em>. You are made of corruptible matter. Your thoughts are bounded by your brain. Your lifespan is brief. In that condition, what makes you think you can comprehend the eternal?',
        },
        {
          kind: 'greek',
          id: 'c-metron-measure',
          title: 'Metron—Measure',
          script: 'μέτρον',
          translit: '<strong>metron</strong> · measure; standard; capacity; the full measure of something',
          description:
            'A metron is not just a tool; it is a <em>standard of evaluation</em>. When Uriel asks Ezra to measure the wind, he is asking Ezra to apply a standard where no standard fits. The human intellect has a metron—a capacity. God&apos;s counsel exceeds it.',
        },
        {
          kind: 'christ',
          id: 'c-emptying',
          title: 'Christ Connection—The One Who Measures All',
          html:
            'Jesus, though fully God, emptied Himself and entered human limitation (Phil. 2:7). But notice: He did not thereby accept the <em>necessity</em> of human frailty as the final word. Instead, He lived in perfect union of the divine and the human—showing that there is a way through limitation that is not denial of it. "In him dwelleth all the fulness of the Godhead bodily" (Col. 2:9). And in Him, the infinite is not diminished but <em>known</em>.',
        },
        {
          kind: 'carry',
          html:
            'Your frailty is real. You will not understand everything. And you do not have to. What matters is not whether you can comprehend God&apos;s counsel but whether you will entrust yourself to it. The person who admits "I cannot measure this" is often the one who finally begins to rest.',
        },
        {
          kind: 'reflection',
          id: 'r-wind',
          prompt: 'Where have you been exhausted trying to measure something that cannot be measured? What would shift if you accepted your own limitations?',
        },
      ],
    },

    /* ─── Human Reason Has Limits ──────────────────────────────────── */
    {
      ref: '2 Esdras 4:8–11',
      title: 'Human Reason Has Limits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('And he said unto me, Even so are the things wherein thou art now ignorant as much out of '),
                hg('the reach of understanding', 'c-beyond-reach'),
                t(' as the deep is out of the reach of man to come unto.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beyond-reach',
          html:
            'Uriel draws an analogy: the things Ezra wants to understand are as far from his reach as the depths of the ocean are beyond a swimmer&apos;s capacity. You can sail a boat on the sea. You can know the shoreline. But the deepest parts of the ocean remain unknowable to you—not because they are hidden or malicious, but because you are built for a different realm. The deep is real. It is not a problem to be solved. It is a boundary to be accepted.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('For as the seed of evil is sown in the heart of Adam from the beginning, and how much wickedness hath it brought forth unto this time? and how much shall it yet bring forth until the time of harvest come?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seed-evil',
          html:
            'Here Uriel addresses one of Ezra&apos;s deepest questions: Why is there so much evil? Where does it come from? Uriel answers: it is woven into the fabric from the beginning—sown in the heart of Adam. This is not God creating evil, but acknowledging that Adam&apos;s choice to disobey, to take the fruit, to place his own will above God&apos;s, introduced a principle of rebellion into creation. And that seed grows, bears fruit, multiplies. But notice: it is <em>contained</em>. There is a harvest time coming. Evil is not eternal. Its dominion is measured.',
        },
        {
          kind: 'greek',
          id: 'c-aion-age',
          title: 'Aion—Age',
          script: 'αἰών',
          translit: '<strong>aion</strong> · age; era; a period of time with its own character',
          description:
            'The present age is characterized by the reign of that evil seed. But <em>aion</em> means it is not the only age. Other ages have existed or will exist. The present age has a boundary.',
        },
        {
          kind: 'christ',
          id: 'c-seed-word',
          title: 'Christ Connection—The Seed of the Woman',
          html:
            'In Genesis 3:15, after Adam&apos;s fall, God promises a "seed of the woman" who will bruise the serpent&apos;s head. That seed is Christ. Where evil&apos;s seed grows and multiplies through the disobedience of Adam, God&apos;s seed—Jesus—enters the world and introduces <em>a different principle</em>: obedience unto death, resurrection, victory. "As in Adam all die, even so in Christ shall all be made alive" (1 Cor. 15:22). The seed of evil is real. But Christ is the counter-seed, the one in whom the ages change.',
        },
        {
          kind: 'carry',
          html:
            'Evil is real in your life and in the world. It is not an illusion or a mistake. But it is not ultimate. It is a seed growing in a measured time, and its harvest is known to God. Your task is not to understand why evil exists—that question may exceed you. Your task is to trust that it is contained, that it is ending, and that the final word belongs not to darkness but to the one who is the Light.',
        },
      ],
    },

    /* ─── The Ages Are Running Out ──────────────────────────────────── */
    {
      ref: '2 Esdras 4:26–27',
      title: '"The Ages Are Running Out"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 26,
              spans: [
                t('Behold, I go, O Lord, and as thou hast commanded me I will reprove the people which is present: but for them that shall be born hereafter, who shall warn them? for thou hast not sent prophets unto them.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Thus '),
                hg('saith the Highest', 'c-highest-time'),
                t(': When the signs which I have told thee shall come to pass; that the city that now is seen shall be hid, and the land that is desolate shall be seen;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-highest-time',
          html:
            'Uriel now pivots from Ezra&apos;s questions to a revelation about time itself. The Highest—God—is speaking of the <em>end of the age</em>. This is not poetry or distant hope. This is urgent. The age in which you live is hastening toward its close. New cities will fall. Hidden lands will be revealed. The order you see now will not last.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 30,
              spans: [
                t('And it shall be, that whosoever remaineth after all that I have foretold unto thee, the same shall be saved, and shall see my salvation in my land, and within my borders: for I have sanctified them for myself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saved-land',
          html:
            'This is the balance: the age is ending, but not in meaningless destruction. Those who endure, who hold to faith when the world shifts, will see God&apos;s salvation. They will possess the land God has sanctified. Evil runs its course. Judgment comes. But for the faithful, the end of the age is not oblivion—it is homecoming.',
        },
        {
          kind: 'greek',
          id: 'c-semeion-sign',
          title: 'Semeion—Sign',
          script: 'σημεῖον',
          translit: '<strong>semeion</strong> · sign; mark; portent that points to something beyond itself',
          description:
            'A sign is not an accident. It is a deliberate marker, placed by God, to wake the sleeping and to orient the faithful toward what is coming. When you see the signs Uriel describes, you are meant to recognize them.',
        },
        {
          kind: 'christ',
          id: 'c-kingdom-end',
          title: 'Christ Connection—The End of the Age and the Kingdom',
          html:
            'Jesus spoke of "the end of the age" (Matt. 24:3) with similar urgency and paradox: terrible things will happen, but those who endure will inherit the kingdom. "He that shall endure unto the end, the same shall be saved" (Matt. 24:13). The end of the age is not the end of God&apos;s purposes—it is their <em>culmination</em>. And it is guaranteed because Christ has already risen, already broken the back of the age to come.',
        },
        {
          kind: 'carry',
          html:
            'You live in an age that is ending. The world you see now will not last. This is not a call to despair or withdrawal but to urgency and clarity. What you build for permanence in a temporary world will perish. What you build for God—love, faithfulness, conversion, the kingdom—will endure. The signs are visible if you know how to see them.',
        },
        {
          kind: 'reflection',
          id: 'r-age',
          prompt: 'What in your life are you building for permanence, and what are you building for God&apos;s kingdom? How would that list change if you truly believed this age is running out?',
        },
      ],
    },

    /* ─── The End Is Fixed ──────────────────────────────────────────── */
    {
      ref: '2 Esdras 4:35–37',
      title: 'The End Is Fixed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 35,
              spans: [
                t('Therefore be not over much in thy understanding of the things wherein thou art ignorant.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('For thou hast '),
                hp('received the seal of the vision of the Highest', 'c-seal-vision'),
                t(': '),
              ],
            },
            {
              number: 37,
              spans: [
                t('The Highest shall show thee visions of the high things which thou canst not understand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seal-vision',
          html:
            'This is the turning point of the vision. Ezra has been devastated by his own ignorance—he cannot measure the wind, cannot weigh fire, cannot understand evil. But now Uriel tells him something that reframes everything: you have been <em>sealed</em>. You have received a mark, a guarantee, a sign that you belong to God. This seal is not given because you have figured everything out. It is given despite your ignorance. The seal is God&apos;s way of saying: I see you. I know you. You are Mine.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 39,
              spans: [
                t('For the measure of this world is two-fold: when the measure cometh, then appeareth the fire of my love, and the deep waters of my mercy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-two-fold-measure',
          html:
            'Here is the deepest mystery: God speaks of a "two-fold measure"—a rhythm, a balance, a structure to time itself. <em>When the measure cometh</em>—when the allotted time arrives—then God&apos;s true nature is revealed: fire of love, waters of mercy. All the darkness Ezra sees now is permitted <em>within</em> a greater measure, a schedule, a plan that ends not in chaos but in the revelation of God&apos;s burning love.',
        },
        {
          kind: 'greek',
          id: 'c-telos-end',
          title: 'Telos—End; Purpose',
          script: 'τέλος',
          translit: '<strong>telos</strong> · end; completion; purpose achieved',
          description:
            'The end is not mere cessation. It is the <em>telos</em>—the fulfillment of purpose, the moment when all the scattered pieces resolve into their intended whole. This is not something Ezra can calculate. But it is fixed. It is coming.',
        },
        {
          kind: 'christ',
          id: 'c-apocalypse-love',
          title: 'Christ Connection—Fire and Water; Love Revealed',
          html:
            'John sees the same paradox at the end of all things: "Behold, I make all things new" (Rev. 21:5). And then: "The Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes" (Rev. 7:17). Fire and water—not destruction and chaos, but the burning love of the Lamb and the waters of God&apos;s mercy made plain to every eye. The end was always meant to reveal not God&apos;s judgment but His heart.',
        },
        {
          kind: 'carry',
          html:
            'You have been sealed. Not because you understand. Not because you have passed a test. But because God has claimed you. The measure is fixed, the schedule is set, and when it comes to completion, you will see—not darkness, but the fire of His love and the depth of His mercy. Until then, your task is not to figure it out. Your task is to trust the seal.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'r-end',
          prompt:
            'What would it mean to stop trying to understand God&apos;s ways and simply receive the seal of His vision—to live as one marked as His own, even in the dark?',
        },
        {
          kind: 'artwork',
          matchTitle: /angel|uriel|fire|vision/i,
          caption: '2 Esdras 4 · The Three Impossible Questions',
        },
      ],
    },
  ],

  hasHebrew: true,
};
