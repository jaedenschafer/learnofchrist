import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 127 — Except the Lord Build the House
 *
 * "Except the Lord build the house, they labour in vain that build it:
 * except the Lord keep the city, the watchman waketh but in vain."
 * A song of ascents celebrating God as the builder and foundation of all work.
 * "Children are an heritage of the Lord."
 * Christ connection: Christ the Builder; the foundation upon which all
 * that endures is built; the source of fruitfulness.
 */
export const PSALMS_127: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 127,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Psalm 127 is a humbling song that cuts against the grain of human effort and pride. It declares a truth that those who rely on their own strength find difficult to accept: without the Lord, all effort is ultimately vain. The builders labor. The watchmen keep vigil. The workers exhaust themselves. But if the Lord does not build, if He does not keep, if He does not establish—all labor comes to nothing. This is not an invitation to idleness. Rather, it is an invitation to recognize that human effort, however diligent, however brilliant, is fruitless without God&apos;s foundation and blessing. Children are a heritage of the Lord, not the achievement of human fertility. Fruitfulness flows from Him.',
  ],

  sections: [
    {
      ref: 'Psalm 127:1–5',
      title: 'The Lord Our Builder and Keeper',
      blocks: [
        {
          kind: 'scripture',
          chapter: 127,
          lines: [
            plain(1, 'Except the Lord build the house, they labour in vain that build it: except the Lord keep the city, the watchman waketh but in vain.'),
            plain(2, 'It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep.'),
            plain(3, 'Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.'),
            plain(4, 'As arrows are in the hand of a mighty man; so are children of the youth.'),
            plain(5, 'Happy is the man that hath his quiver full of them: they shall not be ashamed, but they shall speak with the enemies in the gate.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps127-vanity',
          html:
            'The word "vain" appears twice in the opening—vain labor, vain watchfulness. Not merely ineffective, but hollow, empty, leading nowhere. The builder who thinks his strength and skill are sufficient will ultimately find his work hollow. The watchman who trusts in his own vigilance will tire and his effort will accomplish nothing lasting. The only labor that is not vain is labor undertaken in the faith that the Lord is the true builder.',
        },
        {
          kind: 'commentary',
          id: 'ps127-sleep',
          html:
            '"It is vain for you to rise up early, to sit up late, to eat the bread of sorrows." The psalmist describes the life of those who think their salvation lies in their own effort—endless work, sleeplessness, anxiety, the bread of sorrows eaten in place of rest. They do not trust. They strain. They wear themselves thin. But God gives sleep, rest, peace to His beloved. Not as a reward for their effort, but as a gift. As grace.',
        },
        {
          kind: 'commentary',
          id: 'ps127-heritage',
          html:
            '"Lo, children are an heritage of the Lord." The psalmist shifts from building a house to bearing children. Just as the physical house is not achieved by the builder&apos;s strength alone, so children are not achieved by parental effort alone. They are a gift, a heritage, a reward from the Lord. The fruit of the womb is His reward, not our achievement. This reframes parenthood from a matter of will and planning to a matter of trusting in God&apos;s blessing.',
        },
        {
          kind: 'commentary',
          id: 'ps127-arrows',
          html:
            '"As arrows are in the hand of a mighty man; so are children of the youth." The image is of a warrior with a full quiver of arrows—equipped, armed, ready. Children are described this way. They are not a burden, but a strength, a capacity for action, a means of speaking against enemies in the gate. The man with many children is not diminished but enlarged, strengthened, enabled to defend his honor and his household.',
        },
        {
          kind: 'christ',
          id: 'ps127-christ-builder',
          title: 'Christ Connection — The Builder',
          html:
            'Matthew 7:24–25 records Jesus teaching about the wise man who builds upon the rock. In Matthew 16:18, Jesus declares: "Thou art Peter, and upon this rock I will build my church." Christ is the builder. All that He builds will endure. All that is built without reference to Him, for all the human effort and ingenuity expended, will ultimately collapse. Only what is built on Christ, upon the true foundation, will stand.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 127 invites you to examine where you are trusting. In your own effort? In your own watchfulness? In your own ability to manage and control? Or in the Lord as the true builder and keeper of all you hold dear? The psalm does not ask you to be idle. It asks you to work with the faith that your work matters only as God blesses it, establishes it, keeps it. Rest in that knowledge.',
        },
        {
          kind: 'reflection',
          id: 'ps127-builder',
          prompt:
            'In what area of your life are you trying to build what only the Lord can build? What would it look like to trust that the Lord is the builder while you participate faithfully in the work? How might shifting from striving to resting change the quality of your work?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Except the Lord build the house, they labour in vain that build it. Children are an heritage of the Lord: and the fruit of the womb is his reward.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 127 · Study Guide',
  },
};
