import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Galatians 1 — Removed unto Another Gospel
 *
 * Paul opens with astonishment and concern. The Galatians have been seduced
 * away from the gospel he taught them and are turning to &quot;another gospel.&quot;
 * Paul did not receive his message from man but directly from Christ. His
 * conversion was not gradual but dramatic—he was transformed from persecutor
 * to apostle in an instant.
 */
export const GALATIANS_1: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 1,

  intros: [
    'Paul writes Galatians with urgency and pastoral concern. The churches he planted have been influenced by false teachers who insist that faith in Christ is not enough—works of the law, especially circumcision, are also required. Paul is astounded. The gospel he preached was not human invention but divine revelation.',
    'The letter begins with Paul&apos;s own testimony. His conversion was not a gradual turn but a radical reversal—from persecutor of the church to apostle of Christ. This authenticates his message. He speaks from the authority of one who has encountered the risen Christ directly.',
  ],

  sections: [
    {
      ref: 'Galatians 1:1–10',
      title: 'Astonishment and Concern; One Gospel Only',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, an apostle, (not of men, neither by man, but by Jesus Christ, and God the Father, who raised him from the dead;)'),
            plain(4, 'Who gave himself for our sins, that he might deliver us from this present evil world, according to the will of God and our Father:'),
            plain(6, 'I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel:'),
            plain(8, 'But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed.'),
            plain(10, 'For do I now persuade men, or God? or do I seek to please men? for if I yet pleased men, I should not be the servant of Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-1-apostle',
          html:
            'Paul immediately establishes his authority. He is an apostle &quot;not of men, neither by man, but by Jesus Christ.&quot; His authority comes directly from the risen Christ, not from the Jerusalem church or any human institution.',
        },
        {
          kind: 'greek',
          id: 'gal-1-metathesis',
          title: 'Metathesis — Removal; Change; Defection',
          script: 'μετάθεσις',
          translit: '<strong>Metathesis</strong> · removal; change; transition; defection',
          description:
            'The Galatians have been &quot;removed&quot;—they are defecting from the gospel Paul taught them. The word suggests a complete change of position and allegiance.',
        },
        {
          kind: 'commentary',
          id: 'gal-1-marvel',
          html:
            '&quot;I marvel that ye are so soon removed from him that called you.&quot; Paul is genuinely astonished. The Galatians have abandoned the gospel with shocking speed. This is not a minor theological disagreement but a fundamental betrayal.',
        },
        {
          kind: 'christ',
          id: 'gal-1-christ-gave',
          title: 'Christ Connection — Christ Gave Himself',
          html:
            'Christ &quot;gave himself for our sins, that he might deliver us from this present evil world.&quot; This is the heart of the gospel: Christ&apos;s self-sacrifice accomplishes redemption. No additional works are needed.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is singular. Christ&apos;s work is sufficient. Any teacher who adds to this—who insists that faith plus works equals salvation—is proclaiming a false gospel, however well-intentioned. Paul&apos;s concern for the Galatians is your concern now: guard the gospel against distortion.',
        },
        {
          kind: 'reflection',
          id: 'gal-1-gospel',
          prompt: 'What does it mean to you that Christ &quot;gave himself for our sins&quot;? Are you tempted to add anything to faith in Christ for your salvation? What would that addition be?',
        },
      ],
    },

    {
      ref: 'Galatians 1:11–24',
      title: 'Paul&apos;s Conversion; From Persecutor to Apostle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ.'),
            plain(13, 'For ye have heard of my conversation in time past in the Jews&apos; religion, how that beyond measure I persecuted the church of God, and wasted it:'),
            plain(15, 'But when it pleased God, who separated me from my mother&apos;s womb, and called me by his grace,'),
            plain(16, 'To reveal his Son in me, that I might preach him among the heathen; immediately I conferred not with flesh and blood:'),
            plain(23, 'But they had heard only, That he which persecuted us in times past now preacheth the faith which once he destroyed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-1-revelation',
          html:
            'Paul&apos;s gospel is not learned but revealed. He did not receive it from the apostles in Jerusalem or through human tradition. It came directly from the risen Christ. This is the source of his authority.',
        },
        {
          kind: 'greek',
          id: 'gal-1-apokalypsis',
          title: 'Apokalypsis — Revelation; Unveiling; Disclosure',
          script: 'ἀποκάλυψις',
          translit: '<strong>Apokalypsis</strong> · revelation; unveiling; disclosure; manifestation',
          description:
            'Christ was revealed in Paul. Not gradually understood, but supernaturally unveiled. This revelation was complete and transformative.',
        },
        {
          kind: 'commentary',
          id: 'gal-1-persecutor',
          html:
            'Paul was not always an apostle. He was a fierce persecutor of the church, &quot;beyond measure.&quot; His conversion was not a slow drift but a dramatic reversal—from enemy to apostle. This is the power of Christ&apos;s intervention.',
        },
        {
          kind: 'christ',
          id: 'gal-1-christ-reveal',
          title: 'Christ Connection — Christ Revealed Within',
          html:
            'The revelation was personal: Christ was revealed &quot;in me.&quot; Not merely information about Christ, but the presence of Christ transforming Paul from within. This is the pattern of conversion.',
        },
        {
          kind: 'carry',
          html:
            'Your faith rests on the testimony of those who encountered the risen Christ directly. Paul&apos;s conversion proves the power of that encounter. What was he before? A persecutor. What did he become? An apostle. That transformation is not theoretical but historical, not human but divine.',
        },
        {
          kind: 'reflection',
          id: 'gal-1-conversion',
          prompt: 'Have you experienced a reversal in your own life—a moment when Christ changed your direction? How does Paul&apos;s radical conversion speak to your own journey?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Who gave himself for our sins, that he might deliver us from this present evil world, according to the will of God and our Father.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 1 · Study Guide',
  },

  hasHebrew: false,
};
