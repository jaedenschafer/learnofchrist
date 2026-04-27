import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 9 — Seventy Weeks and the Messiah
 *
 * Daniel prays a prayer of confession for his people. Gabriel appears and reveals
 * the prophecy of the seventy weeks—seventy times seven years are determined upon
 * the people. After sixty-two weeks, Messiah shall be cut off, but not for himself.
 * He shall confirm the covenant for one week, and in the midst of the week, He shall
 * cause the sacrifice and oblation to cease. This prophecy points directly to Christ&apos;s
 * death and its atoning significance.
 */
export const DANIEL_9: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 9,

  intros: [
    'In the first year of Darius the Mede, Daniel understands from the books of Jeremiah the prophet that the desolations of Jerusalem would be seventy years. He is moved to make supplication before God. He confesses the sins of his people—their transgressions, their iniquities, their unfaithfulness. He remembers God&apos;s law and His mercies. And he cries out not for himself, but for his people and the city of God: "O my God, incline thine ear, and hear; open thine eyes, and behold our desolations...for we do not present our supplications before thee for our righteousnesses, but for thy great mercies."',
    'While Daniel is speaking, Gabriel, whom he had seen in the vision, touches him about the time of the evening oblation. Gabriel says to him, "I am now come forth to give thee skill and understanding." And he reveals to Daniel a prophecy of astonishing precision: "Seventy weeks are determined upon thy people and upon thy holy city, to finish the transgression, and to make an end of sins, and to make reconciliation for iniquity, and to bring in everlasting righteousness." And most remarkably: "After threescore and two weeks shall Messiah be cut off, but not for himself."',
  ],

  sections: [
    {
      ref: 'Daniel 9:20–27',
      title: 'The Seventy Weeks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(20, 'And whiles I was speaking, and praying, and confessing my sin and the sin of my people Israel, and presenting my supplication before the Lord my God for the holy mountain of my God;'),
            plain(21, 'Yea, whiles I was yet speaking in prayer, even the man Gabriel, whom I had seen in the vision at the beginning, being caused to fly swiftly, touched me about the time of the evening oblation.'),
            plain(24, 'Seventy weeks are determined upon thy people and upon thy holy city, to finish the transgression, and to make an end of sins, and to make reconciliation for iniquity, and to bring in everlasting righteousness, and to seal up the vision and prophecy, and to anoint the most Holy.'),
            plain(25, 'Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto the Messiah the Prince shall be seven weeks, and threescore and two weeks: the street shall be built again, and the wall, even in troublous times.'),
            plain(26, 'And after threescore and two weeks shall Messiah be cut off, but not for himself: and the people of the prince that shall come shall destroy the city and the sanctuary; and the end thereof shall be with a flood: and unto the end of the war desolations are determined.'),
            plain(27, 'And he shall confirm the covenant with many for one week: and in the midst of the week he shall cause the sacrifice and the oblation to cease: and for the overspreading of abominations he shall make it desolate, even until the consummation, and that determined shall be poured upon the desolate.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel9-weeks',
          html:
            'Seventy weeks—490 years—are determined upon the people and the city. The prophecy is structured precisely: seven weeks to rebuild Jerusalem, then sixty-two weeks to the coming of Messiah. The math points to a timeline. And the purpose is explicit: to finish transgression, to make an end of sins, to make reconciliation for iniquity, to bring in everlasting righteousness. These words describe the work of atonement—the taking away of sin, the reconciliation of humanity to God. Only one event in history accomplishes this: Christ&apos;s death and resurrection.',
        },
        {
          kind: 'hebrew',
          id: 'daniel9-karath',
          title: 'Karath — "Cut Off" (Covenant/Death)',
          script: 'כָּרַת',
          translit: '<strong>Karath</strong> · to cut; to cut off; to sever; to make a covenant',
          description:
            'The word carries a double meaning. It can mean to cut off life—to kill, to execute. It can also mean to cut a covenant—to establish a binding agreement. When the prophecy says Messiah shall be "cut off," it means both: His life is cut off, and in His cutting off, a new covenant is cut with many. His death is not merely an ending. It is the making of a covenant—the New Testament in His blood.',
        },
        {
          kind: 'commentary',
          id: 'daniel9-not-for-himself',
          html:
            '"But not for himself." This is the crucial phrase. The Messiah does not die for His own sin. He has no sin. He dies for the sins of others—He dies "for many." His death is vicarious. It is substitutional. He bears what others deserve. He takes the weight of transgression upon Himself. And in doing so, He makes reconciliation for iniquity.',
        },
        {
          kind: 'commentary',
          id: 'daniel9-covenant',
          html:
            '"He shall confirm the covenant with many for one week: and in the midst of the week he shall cause the sacrifice and the oblation to cease." The Messiah establishes a covenant, and in the midst of the week—in the midst of His ministry, at His death—the old sacrifices become unnecessary. He is the Lamb of God. His blood shed once for all ends the need for repeated offerings. The old covenant gives way to the new.',
        },
      ],
    },

    {
      ref: 'Daniel 9:23',
      title: 'Skill and Understanding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(23, 'At the beginning of thy supplications the commandment came forth, and I am come to shew thee; for thou art greatly beloved: therefore understand the matter, and consider the vision.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel9-beloved',
          html:
            'Gabriel says to Daniel: "Thou art greatly beloved." This is said to a man in exile, far from home, under the rule of pagan kings. Yet God has not forgotten him. God has not ceased to care for him. Daniel&apos;s faithful prayer, his confession of sin, his intercession for his people—all of this reaches God and is heard. And Gabriel is sent in response, not merely to satisfy Daniel&apos;s curiosity, but to show him that God&apos;s plan encompasses all the centuries ahead. The desolations are temporary. The exile will end. And more than that—Messiah will come.',
        },
        {
          kind: 'christ',
          id: 'daniel9-christ-atonement',
          title: 'Christ Connection — The Atoning Messiah',
          html:
            'Daniel 9:26 is quoted by Christians as the clearest messianic prophecy in the Old Testament. "After threescore and two weeks shall Messiah be cut off, but not for himself." This prophecy, spoken 600 years before Christ&apos;s birth, describes His death with precision. He is cut off—executed. But not for Himself—He dies vicariously, bearing sin. And verse 27: "In the midst of the week he shall cause the sacrifice and the oblation to cease." Christ&apos;s death abolishes the need for temple sacrifice. He is the final sacrifice. His blood is shed once, and once for all. Every sacrifice before Him pointed forward. Every believer after Him looks back to His one perfect offering.',
        },
        {
          kind: 'carry',
          html:
            'Daniel prayed a prayer of confession and intercession. He did not merely confess his own sin, but the sin of his people. He did not merely pray for himself, but for the city of God. And in response, Gabriel brought a word not of judgment, but of grace. He revealed the coming of Messiah, whose death would make atonement for all iniquity. The lesson is this: Our prayers matter. Our faithfulness is seen by God. Our intercession for others is heard. And though judgment may come, grace comes first. God sends His Messiah not to condemn, but to reconcile.',
        },
        {
          kind: 'reflection',
          id: 'daniel9-prayer',
          prompt: 'What does it mean to you that Christ "was cut off, but not for himself"? How does understanding His death as an atoning sacrifice—given for you—change the way you respond to His love and His call?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'After threescore and two weeks shall Messiah be cut off, but not for himself...In the midst of the week he shall cause the sacrifice and the oblation to cease.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 9 · Study Guide',
  },

  hasHebrew: true,
};
