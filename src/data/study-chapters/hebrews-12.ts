import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_12: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 12,

  intros: [
    'The author moves from the cloud of witnesses to the race set before you. You have spectators—all those who have run before you. They watch. They cheer. You are called to run with endurance, looking unto Jesus, the author and finisher of faith. And God is training you through discipline. This is not punishment. It is love. A father disciplines the child he loves.',
    'The chapter contains one of Scripture&apos;s most severe passages: "Without holiness no man shall see the Lord." Yet it is not meant to condemn. It is meant to purify. Seek holiness. Pursue peace. Without these, you cannot see God.',
  ],

  sections: [
    {
      ref: 'Hebrews 12:1–14',
      title: 'Looking Unto Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,'),
            plain(2, 'Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.'),
            plain(11, 'Now no chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are exercised thereby.'),
            plain(14, 'Follow peace with all men, and holiness, without which no man shall see the Lord:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb12-lay-aside-weight',
          html:
            '"Let us lay aside every weight, and the sin which doth so easily beset us." Not every weight is sin, but some are. Unnecessary baggage slows you. Sin entangles. Both must go if you are to run the race.',
        },
        {
          kind: 'greek',
          id: 'heb12-hypeninō',
          title: 'Hypeninō — Run with Patience',
          script: 'ὑπερ',
          translit: '<strong>Hypeninō</strong> · run steadily; persevere in running',
          description:
            'Running is not sprinting. It is steady, persevering movement toward a goal. The race requires patience—not passivity, but steady determination.',
        },
        {
          kind: 'commentary',
          id: 'heb12-joy-before-him',
          html:
            'Jesus endured the cross "for the joy that was set before him." He saw beyond the suffering to the victory. You too must look beyond present difficulty to the joy that awaits.',
        },
        {
          kind: 'christ',
          id: 'heb12-christ-author-finisher',
          title: 'Christ Connection — Your Race and His Victory',
          html:
            'Jesus is the author—the originator, the example, the standard-setter. He is the finisher—the one who completes your faith. Your race is run in His strength and toward Him as the goal.',
        },
        {
          kind: 'carry',
          html:
            'Discipline is evidence of love. God chastens you because He loves you. Do not despise it. It produces righteousness. Without holiness, you cannot see God. Pursue both—peace and holiness.',
        },
        {
          kind: 'reflection',
          id: 'heb12-race',
          prompt: 'What weights or entangling sins do you need to lay aside? How will you "look unto Jesus" in your race?',
        },
      ],
    },

    {
      ref: 'Hebrews 12:25–29',
      title: 'Mount Sion and Our God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(22, 'But ye are come unto mount Sion, and unto the city of the living God, the heavenly Jerusalem, and to an innumerable company of angels,'),
            plain(23, 'To the general assembly and church of the firstborn, which are written in heaven, and to God the Judge of all, and to the spirits of just men made perfect,'),
            plain(26, 'Whose voice then shook the earth: but now he hath promised, saying, Yet once more I shake not the earth only, but also heaven.'),
            plain(28, 'Wherefore we receiving a kingdom which cannot be moved, let us have grace, whereby we may serve God acceptably with reverence and godly fear.'),
            plain(29, 'For our God is a consuming fire.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb12-mount-sion',
          html:
            'You are not at Mount Sinai, under law and fear. You are at Mount Sion—the city of the living God. Yet the power is greater. What was shaken will be shaken again. What cannot be shaken will remain.',
        },
        {
          kind: 'greek',
          id: 'heb12-metathesis',
          title: 'Metathesis — Remove, Shake',
          script: 'μετάθεσις',
          translit: '<strong>Metathesis</strong> · removal; exchange; shaking',
          description:
            'All that can be shaken will be shaken and removed. Your faith must be built on what cannot be shaken—Christ, the kingdom of God, eternal realities.',
        },
        {
          kind: 'commentary',
          id: 'heb12-consuming-fire',
          html:
            '"Our God is a consuming fire." Do not domesticate God. He is not tame. He is fierce, pure, and intolerant of sin. Yet He is your God. You are in covenant with Him. Let this awaken reverence.',
        },
        {
          kind: 'christ',
          id: 'heb12-christ-king-unshakeable',
          title: 'Christ Connection — The Unshakeable Kingdom',
          html:
            'Christ rules an unshakeable kingdom. As the world shakes—governments fall, economies fail, certainties dissolve—His kingdom stands. You are part of it. You cannot be shaken.',
        },
        {
          kind: 'carry',
          html:
            'Reverence God. Fear Him in the good sense—with awe, respect, submission. Serve Him acceptably. Live as one who belongs to an unshakeable kingdom. Let this reframe your entire approach to life.',
        },
        {
          kind: 'reflection',
          id: 'heb12-fire',
          prompt: 'How does knowing your God is a consuming fire change your fear? How does belonging to an unshakeable kingdom change your confidence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross. Wherefore we receiving a kingdom which cannot be moved, let us have grace, whereby we may serve God acceptably.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 12 · Study Guide',
  },

  hasHebrew: false,
};
