import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 21 — Job: "Why Do the Wicked Prosper?"
 *
 * Job refutes Zophar directly: the wicked do NOT perish swiftly. They live long,
 * become old, grow mighty in power. Their houses are safe. Their children dance
 * before them. They spend their days in wealth and comfort. And they go down
 * to the grave peacefully, "in a moment." The doctrine that the wicked always
 * suffer in this life is false. Job can see it. It is observable. The wicked
 * often prosper their entire lives, while the righteous languish. This is the
 * great scandal of the world—the apparent absence of God&apos;s justice in the
 * present age. But Job does not curse God. He simply states what he sees, and
 * he waits for a judge who sees all things truly.
 */
export const JOB_21: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 21,

  estimatedMinutes: { 5: 3, 10: 7, 15: 10 },
  intros: [
    'Job has heard Zophar&apos;s confident assertion that the wicked prosper only briefly, then are destroyed. But Job can look around and see that this is simply not true. The wicked live long lives. They become old. They grow mighty in power. Their children are secure. Their houses are full of pleasure. "They spend their days in wealth," and when death comes, it comes gently. "In a moment go down to the grave." There is no terror, no judgment, no visible punishment for their wickedness. Zophar&apos;s doctrine does not match reality.',
    'Job does not use this observation to curse God or to declare Him unjust. Rather, he does something more profound: he challenges the simplistic theology that equates present suffering with present guilt, and present prosperity with present righteousness. Job is arguing that we need a larger vision of justice—one that acknowledges both the prosperity of the wicked and the suffering of the righteous in this age, while trusting that ultimately God sees all things, judges all things, and will make all things right in the age to come. This requires faith in a justice beyond this world.',
  ],

  bottomShare: {
    quote:
      '"Wherefore do the wicked live, become old, yea, are mighty in power? Their houses are safe from fear, neither is the rod of God upon them. They spend their days in wealth." Job confronts the theological paradox: the wicked often prosper.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 21 · Study Guide',
  },

  sections: [
    /* ─── Job 21:1–6 — Job Asks to Be Heard ──────────────────────────── */
    {
      ref: 'Job 21:1–6',
      title: 'Hear Me, and Be Astonied',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'But Job answered and said,'),
            plain(2, 'Hear diligently my speech: and let this be your consolations.'),
            plain(3, 'Suffer me that I may speak; and after that I have spoken, mock on.'),
            {
              number: 4,
              spans: [
                t('As for me, is my complaint to man? and if it were so, why should not my spirit be troubled? '),
              ],
            },
            {
              number: 5,
              spans: [
                t('Mark me, and '),
                hg('be astonied', 'job21-astonied'),
                t(', and lay your hand upon your mouth.'),
              ],
            },
            plain(6, 'Even when I remember I am afraid, and trembling taketh hold on my flesh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job21-astonied',
          html:
            'Job asks his friends to be "astonied"—to be amazed, shocked, disturbed. He wants them to abandon their casual confidence and face a reality that troubles them. He is asking them to witness to what he is about to say, and he expects it to shake their certainties. This is a bold request: be amazed at what I am about to tell you.',
        },
        {
          kind: 'hebrew',
          id: 'job21-shamem',
          title: 'Shamem — "To Be Astonished" (Horror and Dismay)',
          script: 'שָׁמַם',
          translit: '<strong>Shamem</strong> · to be astonished, desolate, appalled; to be struck silent',
          description:
            'To be shamem is to be so shocked that you cannot speak, cannot respond. Job is inviting his friends to stand in silence before what he is about to reveal. Not to argue, not to defend their doctrine, but simply to listen and be disturbed.',
        },
        {
          kind: 'carry',
          html:
            'Job is asking his friends to set aside their theological certainty and simply listen. This is the beginning of wisdom: the willingness to be astonished, to have your assumptions challenged, to sit with mystery without immediately reaching for an explanation. Before we can hear truth, we must first admit that we might be wrong.',
        },
        {
          kind: 'reflection',
          id: 'job21-listen',
          prompt: 'Can you listen to a perspective that challenges your deepest beliefs? Can you be astonied, shocked into silence, before you respond?',
        },
      ],
    },

    /* ─── Job 21:7–16 — The Wicked Prosper ────────────────────────────── */
    {
      ref: 'Job 21:7–16',
      title: 'The Wicked Live in Prosperity and Comfort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('Wherefore do '),
                hg('the wicked live, become old, yea, are mighty in power?', 'job21-wicked-prosper'),
                t(' '),
              ],
            },
            plain(8, 'Their seed is established in their sight with them, and their offspring before their eyes.'),
            plain(9, 'Their houses are safe from fear, neither is the rod of God upon them.'),
            plain(10, 'Their bull gendereth, and faileth not; their cow calveth, and casteth not her calf.'),
            plain(11, 'They send forth their little ones like a flock, and their children dance.'),
            plain(12, 'They take the timbrel and harp, and rejoice at the sound of the organ.'),
            {
              number: 13,
              spans: [
                t('They spend their days in '),
                hg('wealth', 'job21-wealth'),
                t(', and in a moment go down to the grave.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Therefore they say unto God, '),
                hg('Depart from us; for we desire not the knowledge of thy ways', 'job21-depart'),
                t('.'),
              ],
            },
            plain(15, 'What is the Almighty, that we should serve him? and what profit should we have, if we pray unto him?'),
            {
              number: 16,
              spans: [
                t('Lo, their good is '),
                hg('not in their hand', 'job21-not-hand'),
                t(': the counsel of the wicked is far from me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job21-wicked-prosper',
          html:
            'This is the fundamental question of theodicy: Why do the wicked prosper? It is an observation, not a complaint. Job can see them. They are everywhere. They live long lives, grow old, accumulate power and wealth. This contradicts directly the doctrine of Zophar and Bildad, who claimed the wicked are cut off swiftly. But the facts show otherwise.',
        },
        {
          kind: 'commentary',
          id: 'job21-wealth',
          html:
            '"They spend their days in wealth, and in a moment go down to the grave." The wicked are not only prosperous. They are prosperous their entire lives. They go to the grave peacefully, without terror, without judgment, without the visible hand of God striking them down. This serenity in death is particularly galling to the doctrine of immediate divine justice. The wicked do not face judgment. They die content.',
        },
        {
          kind: 'hebrew',
          id: 'job21-hon',
          title: 'Hon — "Wealth" (Pleasant Abundance)',
          script: 'הוֹן',
          translit: '<strong>Hon</strong> · wealth, riches, substance; pleasant abundance',
          description:
            'The wicked spend their days in hon—not just in having enough, but in pleasant abundance, in the satisfaction of desire. The word carries the sense of comfort and ease. They are not struggling. They are not in want. They are satisfied.',
        },
        {
          kind: 'commentary',
          id: 'job21-depart',
          html:
            'And here is the spiritual tragedy: in their prosperity, the wicked reject God. They say "Depart from us; for we desire not the knowledge of thy ways." They have no use for God. They have everything they want. Why would they seek God? This is the corruption that prosperity can bring—the belief that one is sufficient unto oneself, that God is irrelevant, that prayer is pointless.',
        },
        {
          kind: 'commentary',
          id: 'job21-not-hand',
          html:
            'Job ends this section with a cryptic remark: "Lo, their good is not in their hand: the counsel of the wicked is far from me." Job may be saying that the wicked do not understand the source of their prosperity (it comes from God, not from their own wisdom), or he may be saying that he wants nothing to do with their understanding, their counsel, their ways. Either way, Job refuses to follow the path of the wicked, even though they prosper.',
        },
        {
          kind: 'carry',
          html:
            'Job observes a terrible truth: prosperity can separate a person from God. The wicked, having everything they want, see no need for faith. They despise the knowledge of God. They reject prayer. They live only for pleasure. And they die in that state, without judgment, without terror, without visible punishment. This is the scandal of the present age—the prosperity of the ungodly, and the apparent indifference of heaven.',
        },
        {
          kind: 'reflection',
          id: 'job21-prosperity',
          prompt: 'Have you ever seen the wicked prosper while the righteous suffered? How do you make sense of this? Does God care about justice in this world?',
        },
      ],
    },

    /* ─── Job 21:17–26 — The Judgment Deferred ────────────────────────── */
    {
      ref: 'Job 21:17–26',
      title: 'A Justice Beyond This Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 17,
              spans: [
                t('How oft is the candel of the wicked put out! and how oft cometh their destruction upon them! God distributeth sorrows in his anger. '),
              ],
            },
            plain(18, 'They are as stubble before the wind, and as chaff that the storm carrieth away.'),
            plain(19, 'God layeth up his iniquity for his children: he rewardeth him, and he shall know it.'),
            plain(20, 'His eyes shall see his destruction, and he shall drink of the wrath of the Almighty.'),
            plain(21, 'For what pleasure hath he in his house after him, when the number of his months is cut off in the midst?'),
            plain(22, 'Shall any teach God knowledge? seeing he judgeth those that are high.'),
            plain(23, 'One dieth in his full strength, being wholly at ease and quiet:'),
            plain(24, 'His breasts are full of milk, and his bones are moistened with marrow.'),
            plain(25, 'And another dieth in the bitterness of his soul, and never eateth with pleasure.'),
            plain(26, 'They shall lie down alike in the dust, and the worms shall cover them.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Job acknowledges that sometimes the wicked are destroyed, sometimes their light is put out. But he is careful not to make a law of it. "How oft is the candel of the wicked put out"—sometimes, but not always. Job is insisting on nuance, on the observation that the doctrine is not absolute.',
        },
        {
          kind: 'hebrew',
          id: 'job21-goral',
          title: 'Goral — "Lot" (What Falls to One&apos;s Portion)',
          script: 'גּוֹרָל',
          translit: '<strong>Goral</strong> · lot, portion, what falls by chance; divine allotment',
          description:
            'Job speaks of how God "layeth up his iniquity for his children." The word is goral—the portion or lot that falls to one. Job is saying that sometimes judgment is deferred—it falls not on the wicked man himself, but on his children. The sin of the father becomes the inheritance of the son.',
        },
        {
          kind: 'commentary',
          html:
            'Job observes a reality that troubles simple theology: some men die in full strength, at ease, their bones moistened with marrow. And others die in bitterness, never having eaten with pleasure. Yet both "shall lie down alike in the dust." Death comes for all, regardless of whether they lived justly or wickedly. In the grave, there is no distinction. Both are covered by worms.',
        },
        {
          kind: 'carry',
          html:
            'This is Job&apos;s profound insight: we cannot read the divine verdict from present circumstances. Some wicked men prosper their whole lives and die at peace. Some righteous men suffer and die in bitterness. But this does not mean there is no justice. It means the justice we seek is not fully visible in this life. There must be a judgment beyond death, a resurrection, a final reckoning where all will be made clear.',
        },
        {
          kind: 'reflection',
          id: 'job21-dust',
          prompt: 'If both the wicked and the righteous lie down in the dust, how is justice served? What must be true about the afterlife for God to be truly just?',
        },
      ],
    },

    /* ─── Job 21:27–34 — Confronting the Friends ────────────────────── */
    {
      ref: 'Job 21:27–34',
      title: 'The Comfort That Fails',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(27, 'Behold, I know your thoughts, and the devices which ye wrongfully imagine against me.'),
            plain(28, 'For ye say, Where is the house of the prince? and where are the tabernacles of the wicked?'),
            plain(29, 'Have ye not asked them that go by the way? and do ye not know their tokens,'),
            plain(30, 'That the wicked is reserved to the day of destruction? they shall be brought forth to the day of wrath.'),
            plain(31, 'Who shall declare his way to his face? and who shall repay him what he hath done?'),
            plain(32, 'Yet shall he be carried to the grave, and shall remain in the tomb.'),
            plain(33, 'The clods of the valley shall be sweet unto him, and every man shall draw after him, as there are innumerable before him.'),
            {
              number: 34,
              spans: [
                t('How then comfort ye me in vain, seeing in your answers there remaineth '),
                hg('falsehood?', 'job21-falsehood'),
                t(' '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job21-falsehood',
          html:
            'Job delivers his final word to his friends: "How then comfort ye me in vain, seeing in your answers there remaineth falsehood?" You have tried to comfort me, Job says, but your comfort is false because it is built on a lie. The doctrine you defend—that the wicked are punished swiftly, that suffering is a sign of guilt—is not true. Your words do not comfort. They only condemn. They only add to my burden.',
        },
        {
          kind: 'hebrew',
          id: 'job21-shekar',
          title: 'Shekar — "Falsehood" (What Is Not True)',
          script: 'שֶׁקֶר',
          translit: '<strong>Shekar</strong> · lie, falsehood, deception; what is not true',
          description:
            'Job says his friends speak shekar—falsehood. Their comfort is built on a false understanding of reality. A lie told kindly is still a lie. A false doctrine proclaimed with confidence is still false. Job refuses to accept the comfort of the friends because it is purchased at the cost of truth.',
        },
        {
          kind: 'christ',
          id: 'job21-christ',
          title: 'Christ Connection — The Judge Yet to Come',
          html:
            'Job is right that present circumstances do not reveal the final judgment of God. Christ teaches the same: "No one can serve two masters... You cannot serve both God and money" (Matthew 6:24), and yet we see the wealthy and the wicked prosper, sometimes for their whole lives. But Christ promises that a day of judgment is coming (Matthew 25:31–46), when all will be revealed, when the righteous will be vindicated, and when the wicked will face the consequences of their deeds. "God layeth up his iniquity for his children," Job says—and in the Gospel, we see that God lays up the sins of all humanity upon Christ, who bears them away. The final judgment belongs to God, not to us. Our task is to wait, to trust, and to live righteously even when the righteous suffer.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that false comfort is worse than no comfort at all. A friend who speaks truth, even harsh truth, is better than a friend who offers pleasant lies. And a faith that can accommodate the prosperity of the wicked and the suffering of the righteous—a faith that trusts in a justice beyond this world—is more mature than a faith that demands all accounts be settled in the present life.',
        },
        {
          kind: 'reflection',
          id: 'job21-false-comfort',
          prompt: 'Have you ever received comfort based on falsehood? What would true comfort look like in the face of inexplicable suffering?',
        },
      ],
    },
  ],
};
