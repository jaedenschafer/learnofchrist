import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 5 — Ananias and Sapphira, Apostolic Signs, Gamaliel's Counsel
 *
 * A couple sells their possessions but withholds part of the price. Both fall
 * dead. The apostles perform many signs. The council imprisons them, but an
 * angel frees them. Gamaliel urges restraint, and the apostles are released.
 */
export const ACTS_5: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 5,

  intros: [
    'The integrity of the apostolic community is guarded by the Spirit. Ananias and Sapphira, seeing the honor given to those who sold their possessions and laid the price at the apostles&apos; feet, agree to sell their land. But they conspire to keep back part of the price while pretending to give all. Peter confronts them. The judgment is swift and terrible: both fall dead. The community trembles. A line is drawn between authentic faith and pretense.',
    'Yet the apostles continue to perform signs and wonders. Solomon&apos;s Porch fills with believers. The Sanhedrin, jealous and afraid, imprisons the apostles, but an angel releases them. When dragged before the council again, Gamaliel, a doctor of the law held in honor, urges restraint. "Refrain from these men," he says, "and let them alone: for if this counsel or this work be of men, it will come to nought." The apostles are beaten and released, rejoicing that they are counted worthy to suffer.',
  ],

  sections: [
    {
      ref: 'Acts 5:1–16',
      title: 'Ananias and Sapphira; Signs and Wonders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(3, 'But Peter said, Ananias, why hath Satan filled thine heart to lie to the Holy Ghost, and to keep back part of the price of the land?'),
            plain(5, 'And Ananias hearing these words fell down, and gave up the ghost: and great fear came on all them that heard these things.'),
            plain(12, 'And by the hands of the apostles were many signs and wonders wrought among the people; (and they were all with one accord in Solomon&apos;s porch.)'),
            plain(15, 'Insomuch that they brought forth the sick into the streets, and laid them on beds and couches, that at the least the shadow of Peter passing by might overshadow some of them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-lie',
          html:
            'Ananias and Sapphira were not required to sell. Peter makes this plain: "Whiles it remained, was it not thine own?" The sin is not the withholding of money, but the lie—the pretense of giving all while keeping back part. They have agreed to deceive the Holy Ghost. The judgment is a judgment on hypocrisy and deception within the community of faith.',
        },
        {
          kind: 'greek',
          id: 'acts5-pseudomai',
          title: 'Pseudomai — Lie',
          script: 'ψεύδομαι',
          translit: '<strong>Pseudomai</strong> · lie; deceive; speak falsely',
          description:
            'To lie to the Holy Ghost is to attempt to deceive the one who knows all hearts. It is the deepest kind of foolishness. The Spirit dwells in the community, and pretense cannot survive that presence. Truth-telling is not a courtesy. It is a necessity for the life of the church.',
        },
        {
          kind: 'commentary',
          id: 'acts5-signs',
          html:
            'The signs continue. The sick are brought, hoping that even Peter&apos;s shadow might heal them. The apostles do not perform signs to draw attention to themselves, but the signs multiply as the gospel spreads. Power flows from the apostles not because of their own holiness or strength, but because of the presence and work of the Holy Ghost.',
        },
        {
          kind: 'christ',
          id: 'acts5-christ-power',
          title: 'Christ Connection — The Power of the Risen Christ',
          html:
            'The signs and wonders testify to the risen and ascended Christ working through His apostles. He heals the sick, casts out demons, works miracles—all through the agency of His chosen witnesses. The apostles are not the source of power. They are the conduit through which Christ continues His work.',
        },
        {
          kind: 'carry',
          html:
            'The severity toward Ananias and Sapphira may seem harsh. But the community knew the stakes. The presence of the Holy Ghost required truth. Where have you compromised truth in your faith community? What would it mean to recommit to authenticity?',
        },
        {
          kind: 'reflection',
          id: 'acts5-truth-reflection',
          prompt: 'What does it mean to be fully honest before God and your faith community? What are you tempted to hide or pretend about?',
        },
      ],
    },

    {
      ref: 'Acts 5:17–42',
      title: 'Imprisonment, Escape, and Gamaliel&apos;s Counsel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(29, 'Then Peter and the other apostles answered and said, We ought to obey God rather than men.'),
            plain(32, 'And we are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him.'),
            plain(34, 'Then stood there up one in the council, a Pharisee, named Gamaliel, a doctor of the law, had in reputation among all the people, and commanded to put the apostles forth a little space;'),
            plain(38, 'Refrain from these men, and let them alone: for if this counsel or this work be of men, it will come to nought:'),
            plain(41, 'And they departed from the presence of the council, rejoicing that they were counted worthy to suffer shame for his name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-obedience',
          html:
            'The apostles are commanded not to speak in the name of Jesus. Peter and the others respond simply: we must obey God rather than men. This is not rebellion. It is the binding of conscience to a higher authority. When earthly laws contradict the will of God, the believer&apos;s loyalty rests with God.',
        },
        {
          kind: 'commentary',
          id: 'acts5-gamaliel',
          html:
            'Gamaliel, a Pharisee and doctor of the law, rises in the council with a word of caution. If this work is merely human, it will fail of its own accord. But if it is of God, you cannot stop it. This is wisdom. It acknowledges that some things lie beyond human power to control. The test of any movement is whether it endures and bears fruit.',
        },
        {
          kind: 'greek',
          id: 'acts5-hikanoi',
          title: 'Hikanoi — Worthy',
          script: 'ἱκανοί',
          translit: '<strong>Hikanoi</strong> · worthy; sufficient; fitting',
          description:
            'The apostles rejoice that they are "counted worthy to suffer shame" for Christ&apos;s name. This is not masochism. It is the recognition that suffering for the gospel, far from being a defeat, is the highest honor a believer can receive. It demonstrates that faith is not a transaction, but a relationship.',
        },
        {
          kind: 'christ',
          id: 'acts5-christ-witness',
          title: 'Christ Connection — Witnesses and the Holy Ghost',
          html:
            'The apostles declare themselves witnesses of Jesus and His resurrection. But they do not stand alone. The Holy Ghost also bears witness—in the power of healings, in the boldness of the apostles, in the conviction that comes to those who hear. Christ witnesses to Himself through the Spirit and through His people.',
        },
        {
          kind: 'carry',
          html:
            'The apostles counted suffering for Christ&apos;s name a joy, not a burden. This is the measure of faith—not freedom from opposition, but the willingness to bear opposition for the sake of Christ. What would it mean for you to count such suffering joy?',
        },
        {
          kind: 'reflection',
          id: 'acts5-suffering-reflection',
          prompt: 'How do you understand suffering for Christ&apos;s sake? What does it mean to count such suffering worthy and joyful?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We ought to obey God rather than men. And we are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 5 · Study Guide',
  },

  hasHebrew: false,
};
