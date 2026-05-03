import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 123 — Unto Thee Lift I Up Mine Eyes
 *
 * "Unto thee lift I up mine eyes, O thou that dwellest in the heavens."
 * A brief song of ascents expressing watchfulness and hope.
 * "As the eyes of servants look unto the hand of their master...so our eyes wait upon the Lord our God."
 * Christ connection: looking to Christ for guidance and salvation,
 * eyes fixed on Him as the source of all mercy and sustenance.
 */
export const PSALMS_123: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 123,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 123 is brief, but in its brevity lies a profound image of dependence and watchfulness. The psalmist lifts his eyes toward heaven where God dwells, and fixes his gaze there with the intensity of a servant watching the hand of his master. Every gesture of the master communicates a command, a need, a direction. The servant who is attentive does not miss the slightest movement. So the psalmist fixes his attention on God, waiting for the mercy that flows from Him alone.',
  ],

  sections: [
    {
      ref: 'Psalm 123:1–4',
      title: 'Waiting Upon the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 123,
          lines: [
            plain(1, 'Unto thee lift I up mine eyes, O thou that dwellest in the heavens.'),
            plain(2, 'Behold, as the eyes of servants look unto the hand of their master, and as the eyes of a maiden unto the hand of her mistress; so our eyes wait upon the Lord our God, until that he have mercy upon us.'),
            plain(3, 'Have mercy upon us, O Lord, have mercy upon us: for we are exceedingly filled with contempt.'),
            plain(4, 'Our soul is exceedingly filled with the scorning of those that are at ease, and with the contempt of the proud.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps123-lift',
          html:
            'The image is immediate and visceral. The psalmist lifts his eyes not to the earth or to the counsel of men, but to the heavens where God dwells. This is not merely a gesture of prayer, but a posture of worship—the body oriented toward heaven, the gaze fixed upward, the self extended toward the transcendent.',
        },
        {
          kind: 'commentary',
          id: 'ps123-watch',
          html:
            'The comparison to servants and maidens waiting on the hand of their master is not about servility or degradation. It is about attentiveness. A good servant is not anxious, not frantic, not demanding. He waits with full attention on the master&apos;s hand, knowing that every gesture communicates something. He is responsive, alive, watching. So the psalmist&apos;s eyes are fixed on the Lord, waiting not with anxiety but with the attentiveness of one who trusts the master&apos;s goodness.',
        },
        {
          kind: 'commentary',
          id: 'ps123-contempt',
          html:
            'Yet the psalm also names the reality: the psalmist is "exceedingly filled with contempt." Those at ease, those who are proud, those secure in their own power, scorn him. The contempt is overflowing, brimming. It would be easy to turn his gaze downward, to respond to the scorn with bitterness or self-pity. Instead, he fixes his gaze on mercy itself, on the Lord who holds mercy in His hand.',
        },
        {
          kind: 'christ',
          id: 'ps123-christ-gaze',
          title: 'Christ Connection — Looking to Christ',
          html:
            'Hebrews 12:2 calls Christians to run the race "looking unto Jesus the author and finisher of our faith." As the psalmist fixed his gaze on the hand of the Lord to catch every gesture of mercy, so believers are called to fix their gaze on Christ, the embodiment of God&apos;s mercy, the one from whose hand comes our sustenance and direction. Even in contempt, even in the face of those who scorn, the gaze that is fixed on Christ cannot be shaken.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 123 asks: where is your gaze fixed? Are you watching the faces of those around you, reading approval or contempt in their expressions? Or are you watching the hand of God, waiting for mercy? The psalm does not ask you to be blind to the contempt of others. It asks you to let contempt drive you not into bitterness, but into deeper attentiveness to the Lord.',
        },
        {
          kind: 'reflection',
          id: 'ps123-mercy',
          prompt:
            'Whose hand are you most attentive to? Where do you seek approval? How might fixing your gaze on the Lord&apos;s hand—waiting for mercy rather than for the approval of those around you—change the way you respond to contempt or criticism?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Unto thee lift I up mine eyes, O thou that dwellest in the heavens. As the eyes of servants look unto the hand of their master, so our eyes wait upon the Lord our God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 123 · Study Guide',
  },
};
