import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 9 — Job Responds: God's Power and the Absence of a Mediator
 *
 * Job answers Bildad with a profound meditation on God's awesome power. Yes, he
 * says, I know that God is mighty. I know that God moves mountains and shakes the
 * earth. But the problem is not God's power—it is that there is no one between
 * God and man, no daysman who can lay his hand upon both. God is so overwhelming
 * in His majesty that even if Job were righteous, he could not contend with Him.
 * "If I called, and he had answered me; yet would I not believe that he had hearkened
 * unto my voice." Job is cut off from God by the sheer magnitude of the divine
 * presence. There is no mediator. No one stands in the gap.
 */
export const JOB_9: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 9,

  estimatedMinutes: { beginner: 2, intermediate: 7, deep: 9 },
  intros: [
    'Job has heard Bildad&apos;s certainty, and he responds not with anger but with anguish. "How should man be just with God?" he asks. It is the central question of his entire ordeal. Not "Have I sinned?" but "How can any human being stand righteous before God?" The question is not about Job&apos;s particular guilt or innocence. It is about the fundamental impossibility of a creature matching itself against the Creator.',
    'Job then utters a hymn to God&apos;s power—a song of the divine majesty that staggers the imagination. God moves mountains. God shakes the earth. God commanded the sun not to rise. God stretches the heavens alone. God treads upon the waves of the sea. God made the Bear, Orion, and the Pleiades. This God is infinite, omnipotent, beyond measure. And facing this infinite power, Job feels utterly small, utterly helpless. He cannot contend with God. He cannot argue his case. There is no daysman, no one who can stand between God and Job and lay a hand upon them both. Job is alone, and God is unfathomably far away.',
  ],

  bottomShare: {
    quote:
      '"How should man be just with God?" Job faces the infinite power of God and finds himself helpless, without an advocate, without a mediator to bridge the chasm between earth and heaven.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 9 · Study Guide',
  },

  sections: [
    {
      ref: 'Job 9:1–12',
      title: 'The Almighty&apos;s Overwhelming Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Then Job answered and said,'),
            plain(2, 'I know it is so of a truth: but how should man be just with God?'),
            plain(3, 'If he will contend with him, he cannot answer him one of a thousand.'),
            plain(4, 'He is wise in heart, and mighty in strength: who hath hardened himself against him, and hath prospered?'),
            plain(5, 'Which removeth the mountains, and they know not: which overturneth them in his anger.'),
            plain(6, 'Which shaketh the earth out of her place, and the pillars thereof tremble.'),
            plain(7, 'Which commandeth the sun, and it riseth not; and sealeth up the stars.'),
            plain(8, 'Which alone spreadeth out the heavens, and treadeth upon the waves of the sea.'),
            plain(9, 'Which maketh Arcturus, Orion, and Pleiades, and the chambers of the south.'),
            plain(10, 'Which doeth great things past finding out; yea, and wonders without number.'),
            plain(11, 'Lo, he goeth by me, and I see him not: he passeth on also, but I perceive him not.'),
            plain(12, 'Behold, he taketh away, who can hinder him? who will say unto him, What doest thou?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-just-with-god',
          html:
            '"How should man be just with God?" This is the crisis. It is not a question of innocence or guilt in any legal sense. It is the question of how a finite being can stand in any kind of rightful relation to the infinite. Job acknowledges Bildad&apos;s premise—God is just—but he has glimpsed something Bildad has not: the disparity is so great that the very category of justice seems to fail.',
        },
        {
          kind: 'commentary',
          id: 'job-contend',
          html:
            '"If he will contend with him, he cannot answer him one of a thousand." If God were to bring a case against a man, the man could not defend himself against even one of a thousand of God&apos;s arguments. The arithmetic is hopeless. No human intellect can match God&apos;s. No human righteousness can satisfy His demands.',
        },
        {
          kind: 'hebrew',
          id: 'job-tsadik',
          title: 'Tsadik — "Just" or "Righteous"',
          script: 'צַדִּיק',
          translit: '<strong>Tsadik</strong> · just, righteous, one who is in right relationship',
          description:
            'Job uses the language of justice and righteousness, but his point is that the categories themselves are inadequate. What does it mean to be "just" before an infinite God? The righteous person might be blameless before other humans, but before the infinite, all human righteousness looks like nothing.',
        },
        {
          kind: 'commentary',
          id: 'job-mountains',
          html:
            'Job catalogs God&apos;s deeds. God moves mountains without anyone even noticing. God overturns them in anger. God shakes the earth so that its pillars tremble. These are not metaphors in Job&apos;s mouth—they are descriptions of divine action on a cosmic scale. God is not a personage among personages. God is the one who governs the structure of reality itself.',
        },
        {
          kind: 'commentary',
          id: 'job-sun-rises',
          html:
            '"Which commandeth the sun, and it riseth not"—the power to command the sun not to rise. This is not the power of a strong king or a wise ruler. This is the power that governs the fundamentals of existence. God can silence the stars. The very laws of nature are in God&apos;s hand.',
        },
        {
          kind: 'commentary',
          id: 'job-treadeth-waves',
          html:
            '"Treadeth upon the waves of the sea"—a direct statement that God walks on water, that the chaos and wildness of the sea is beneath His feet. This is a hymn of praise, but it is a hymn that leaves Job feeling not exalted but terrified.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s hymn to God&apos;s power is genuine praise, but it is praise wrung from the heart of despair. Job is not denying God&apos;s greatness. He is overwhelmed by it. The God he worships is so vast that Job cannot reach Him, cannot speak to Him, cannot even be sure that God hears him when he cries out.',
        },
        {
          kind: 'reflection',
          id: 'job-vast',
          prompt:
            'When you think about God, do you feel the vastness and power that Job describes? Does that vastness bring you comfort or fear, or both?',
        },
      ],
    },

    {
      ref: 'Job 9:13–21',
      title: 'The Helplessness of Human Argument',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(13, 'If God will not withdraw his anger, the proud helpers do stoop under him.'),
            plain(14, 'How much less shall I answer him, and choose out my words to reason with him?'),
            plain(15, 'Whom, though I were righteous, yet would I not answer: but I would make supplication to my judge.'),
            plain(16, 'If I had called, and he had answered me; yet would I not believe that he had hearkened unto my voice.'),
            plain(17, 'For he breaketh me with a tempest, and multiplieth my wounds without cause.'),
            plain(18, 'He will not suffer me to take my breath, but filleth me with bitterness.'),
            plain(19, 'If I speak of strength, lo, he is strong: and if of judgment, who shall set me a time to plead?'),
            plain(20, 'If I justify myself, my own mouth shall condemn me: if I say, I am perfect, it shall also prove me perverse.'),
            plain(21, 'Though I were perfect, yet would I not know my soul: I would despise my life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-proud-helpers',
          html:
            '"The proud helpers do stoop under him"—even those who would help Job face God stoop beneath the divine anger. There is no ally strong enough to help. There is no one whose strength is sufficient.',
        },
        {
          kind: 'commentary',
          id: 'job-supplication-judge',
          html:
            '"Yet would I not answer: but I would make supplication to my judge"—even if Job were righteous, he would not be able to argue his case. He would only be able to plead, to beseech, to throw himself on the mercy of the court. This is what it means to be human facing God.',
        },
        {
          kind: 'commentary',
          id: 'job-wouldnot-believe',
          html:
            'This is one of the most poignant moments in the book: "If I had called, and he had answered me; yet would I not believe that he had hearkened unto my voice." Job is expressing complete estrangement from God. Even if God responded, Job would doubt that the response was real, would fear that his cry had never been heard at all. The silence has lasted so long that Job can no longer imagine being heard.',
        },
        {
          kind: 'commentary',
          id: 'job-tempest-wounds',
          html:
            '"For he breaketh me with a tempest, and multiplieth my wounds without cause"—God is not merely distant. God is active in causing Job&apos;s suffering. God multiplies wounds "without cause"—without reason that Job can see, without justice that Job can perceive.',
        },
        {
          kind: 'carry',
          html:
            'Job is trapped in a paradox. He knows he is innocent of the sins Bildad accuses him of. But even his innocence cannot help him. If he says "I am perfect," his own words will make him look like a liar. Every defense becomes an offense.',
        },
        {
          kind: 'reflection',
          id: 'job-trapped',
          prompt:
            'Have you ever felt that defending yourself made things worse? That speaking the truth of your innocence seemed to make others more suspicious?',
        },
      ],
    },

    {
      ref: 'Job 9:22–35',
      title: 'The Absence of a Daysman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(22, 'This is one thing, therefore I said it, He destroyeth the perfect and the wicked.'),
            plain(23, 'If the scourge slay suddenly, he laugheth at the trial of the innocent.'),
            plain(24, 'The earth is given into the hand of the wicked: he covereth the faces of the judges thereof; if not, where, and who is he?'),
            plain(25, 'Now my days are swifter than a post: they flee away, they see no good.'),
            plain(26, 'They are passed away as the swift ships: as the eagle that hasteth to the prey.'),
            plain(27, 'If I say, I will forget my complaint, I will leave off my heaviness, and comfort myself:'),
            plain(28, 'I am afraid of all my sorrows, for I know thou wilt not hold me innocent.'),
            plain(29, 'If I be wicked, why then labour I in vain?'),
            plain(30, 'If I wash myself with snow water, and make my hands never so clean;'),
            plain(31, 'Yet shalt thou plunge me in the ditch, and mine own clothes shall abhor me.'),
            plain(32, 'For he is not a man, as I am, that I should answer him, and we should come together in judgment.'),
            plain(33, 'Neither is there any daysman betwixt us, that might lay his hand upon us both.'),
            plain(34, 'Let him take his rod away from me, and let not his fear terrify me:'),
            plain(35, 'Then would I speak, and not fear him; but it is not so with me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-destroyeth-both',
          html:
            '"He destroyeth the perfect and the wicked." Job has moved beyond Bildad&apos;s neat categories. God, in Job&apos;s perception, does not distinguish between the innocent and the guilty. Both are destroyed in the same way. If this is so, then what hope can there be in righteousness? What benefit comes from seeking to be just?',
        },
        {
          kind: 'hebrew',
          id: 'job-tam',
          title: 'Tam — "Perfect" (Complete, Whole)',
          script: 'תָּם',
          translit: '<strong>Tam</strong> · perfect, whole, complete, without blemish',
          description:
            'The word tam suggests not merely moral perfection but wholeness, integrity. Job uses it to describe himself—and yet, he says, even the tam, the whole and complete person, is destroyed indiscriminately by God.',
        },
        {
          kind: 'commentary',
          id: 'job-earth-wicked',
          html:
            '"The earth is given into the hand of the wicked"—this is Job&apos;s observation of the world. The righteous do not rule. The wicked prosper. The judges are blindfolded, their faces covered. If not this, Job asks, then "where, and who is he?"—where is God? Who is governing this world?',
        },
        {
          kind: 'commentary',
          id: 'job-days-swift',
          html:
            '"My days are swifter than a post"—Job&apos;s life is passing with terrible speed. There is no time for restoration, no time for vindication. He is running out of days.',
        },
        {
          kind: 'commentary',
          id: 'job-daysman',
          html:
            'This is the heart of the chapter: "Neither is there any daysman betwixt us, that might lay his hand upon us both." A daysman is an umpire, an arbiter, someone who stands between two parties and judges between them. Job needs someone who is both human enough to understand him and divine enough to understand God. He needs someone who can speak the language of both. But no such being exists. There is no mediator. Job stands alone.',
        },
        {
          kind: 'commentary',
          id: 'job-snow-water',
          html:
            '"If I wash myself with snow water, and make my hands never so clean; yet shalt thou plunge me in the ditch, and mine own clothes shall abhor me"—even perfect cleansing, even the most careful and thorough washing, will not help. God can plunge Job back into the mire immediately. Nothing Job does can secure his safety or his righteousness before God.',
        },
        {
          kind: 'christ',
          id: 'job-christ-mediator',
          title: 'Christ Connection — The Mediator (Daysman)',
          html:
            'Job cries out for a daysman, a mediator who can stand between God and man and lay his hand on both. Later, Paul will write: "For there is one God, and one mediator between God and men, the man Christ Jesus; who gave himself a ransom for all" (1 Timothy 2:5–6). Christ is the daysman Job longed for. He is fully human—he knows human sorrow, human temptation, human limitation. He is fully divine—He can speak the language of God, can plead the case of man before the throne. Christ is the bridge. Through Him, the gap that Job felt so acutely is closed.',
        },
        {
          kind: 'carry',
          html:
            'Job has reached a depth of despair. He cannot defend himself. God cannot be argued with. He cannot convince God of his innocence. He cannot even be sure that God hears him. And there is no one to help, no one to mediate between him and the vast indifference of the divine. This is loneliness at its most profound.',
        },
        {
          kind: 'reflection',
          id: 'job-daysman-need',
          prompt:
            'Have you ever felt utterly alone before God, unable to speak, unable to explain, needing someone to stand with you? What would it mean to have such a mediator?',
        },
      ],
    },
  ],
};
