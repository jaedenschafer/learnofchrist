import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 4 — Before the Sanhedrin
 *
 * Peter and John are arrested by the Sanhedrin. Peter testifies boldly before
 * the council. "Neither is there salvation in any other: for there is none other
 * name under heaven given among men, whereby we must be saved." The church grows.
 * Believers hold all things in common.
 */
export const ACTS_4: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 4,

  intros: [
    'Peter and John, having healed the lame man and spoken boldly to the crowds about Jesus, are arrested and brought before the Sanhedrin—the same council that condemned Jesus to death. But Peter is not intimidated. Filled with the Holy Ghost, he declares that in the name of Jesus, the lame man is made whole. The council perceives them as unlearned, common men, and yet they recognize that they have been with Jesus.',
    'Rather than flee or recant, Peter and John insist they cannot help but speak the things they have seen and heard. The council releases them, but the gospel continues to spread. More thousands believe. The new believers share all things in common, and grace rests upon them all.',
  ],

  sections: [
    {
      ref: 'Acts 4:1–22',
      title: 'Peter Before the Sanhedrin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(11, 'This is the stone which was set at nought of you builders, which is become the head of the corner.'),
            plain(12, 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.'),
            plain(13, 'Now when they saw the boldness of Peter and John, and perceived that they were unlearned and ignorant men, they marvelled; and they took knowledge of them, that they had been with Jesus.'),
            plain(19, 'But Peter and John answered and said unto them, Whether it be right in the sight of God to hearken unto you more than unto God, judge ye.'),
            plain(20, 'For we cannot but speak the things which we have seen and heard.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-cornerstone',
          html:
            'Peter cites Psalm 118:22: the stone the builders rejected has become the head of the corner. Jesus, rejected by the councils of Israel, is the cornerstone of salvation. There is no other name, no other way. This is not arrogance. It is witness to what God has done.',
        },
        {
          kind: 'greek',
          id: 'acts4-parrhesia',
          title: 'Parrhesia — Boldness',
          script: 'παρρησία',
          translit: '<strong>Parrhesia</strong> · boldness; frankness; freedom of speech',
          description:
            'Parrhesia is not aggression or rudeness. It is the confidence that comes from knowing the truth and having nothing to hide. Peter speaks with parrhesia before the Sanhedrin because he has seen the risen Lord and knows that what he testifies is true. No fear, no calculation of consequence, can silence that testimony.',
        },
        {
          kind: 'commentary',
          id: 'acts4-unlearned',
          html:
            'The council takes knowledge of Peter and John that they have been with Jesus. They are unlearned in the schools of the rabbis, yet their authority and power are unmistakable. It is not education or credential that makes them credible. It is their intimacy with Jesus and the power of the Holy Ghost working through them.',
        },
        {
          kind: 'christ',
          id: 'acts4-christ-salvation',
          title: 'Christ Connection — Salvation in Christ Alone',
          html:
            'Jesus is the sole source of salvation. This is not one option among many. It is the exclusive claim of the gospel. There is no salvation in the law, in the temple, in any other name. Only in the name of Jesus Christ is salvation found. Peter&apos;s word to the council is a word to every generation.',
        },
        {
          kind: 'carry',
          html:
            'Peter and John refuse to obey the command to cease speaking about Jesus. They appeal to a higher authority. Their conscience is bound by what they have seen and heard. Where are you called to obey God rather than the pressures of those around you?',
        },
        {
          kind: 'reflection',
          id: 'acts4-obedience-reflection',
          prompt: 'What would it mean for you to choose obedience to God over obedience to authority or social pressure? Where are you called to speak, even when it costs you?',
        },
      ],
    },

    {
      ref: 'Acts 4:23–37',
      title: 'Believers United in Prayer and Possessions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(32, 'And the multitude of them that believed were of one heart and of one soul: neither said any of them that ought of the things which he possessed was his own; but they had all things common.'),
            plain(33, 'And with great power gave the apostles witness of the resurrection of the Lord Jesus: and great grace was upon them all.'),
            plain(34, 'Neither was there any among them that lacked: for as many as were possessors of lands or houses sold them, and brought the prices of the things that were sold,'),
            plain(37, 'Having land, sold it, and brought the money, and laid it at the apostles&apos; feet: and distribution was made unto every man according as he had need.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-community',
          html:
            'The believers have one heart and one soul. This is not enforced communism. It is the spontaneous response of people who have encountered the risen Christ and recognize the radical reorientation required. They no longer cling to possessions as their security. Their security is in the Lord.',
        },
        {
          kind: 'commentary',
          id: 'acts4-witness',
          html:
            'The apostles give witness to the resurrection with great power. And great grace rests upon them all—not just spiritual grace, but practical grace. No one lacks. This is not natural. It is the work of the Holy Ghost, creating a community where need is recognized and met, where sharing is the default.',
        },
        {
          kind: 'christ',
          id: 'acts4-christ-community',
          title: 'Christ Connection — Living as the Resurrection Community',
          html:
            'The believers live out the implications of Christ&apos;s resurrection. If Christ is alive, if salvation is real, then the old securities—land, money, possessions—lose their grip. The community becomes the locus of belonging and care, not the individual hoard.',
        },
        {
          kind: 'carry',
          html:
            'The early church did not require poverty. But they required that possessions not become the ultimate concern. They held their resources loosely, ready to share when need arose. This kind of generosity cannot be legislated. It flows from the reorientation of the heart that comes through encounter with the risen Lord.',
        },
        {
          kind: 'reflection',
          id: 'acts4-sharing-reflection',
          prompt: 'What does it mean for you to see your possessions as gifts to be shared rather than treasures to be hoarded? How might your community be transformed if believers truly lived in such generosity?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved. And the multitude of them that believed were of one heart and of one soul.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 4 · Study Guide',
  },

  hasHebrew: false,
};
