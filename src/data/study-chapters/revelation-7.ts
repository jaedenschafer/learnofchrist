import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 7 — The 144,000 Sealed and the Great Multitude
 *
 * Before the seventh seal opens, a pause. An angel seals 144,000—twelve thousand
 * from each tribe of Israel. Then John sees a vast multitude in white robes,
 * standing before the throne, crying "Salvation to our God."
 */
export const REVELATION_7: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 7,

  intros: [
    'The scroll has not yet fully opened. Before the final seal, there is a pause. God&apos;s mercy is not forgotten. Even in the midst of judgment, God seals His own. The 144,000 represent the completeness of God&apos;s people—protected from the wrath that is to come.',
    'Then John sees a multitude beyond counting. They stand in white robes before the throne. They have come out of great tribulation. They have washed their robes in the blood of the Lamb. Their victory is secure.',
  ],

  sections: [
    {
      ref: 'Revelation 7:1–8',
      title: 'The 144,000 Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'And after these things I saw four angels standing on the four corners of the earth, holding the four winds of the earth, that the wind should not blow on the earth, nor on the sea, nor on any tree.'),
            plain(2, 'And I saw another angel ascending from the east, having the seal of the living God: and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea,'),
            plain(3, 'Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads.'),
            plain(4, 'And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-seal',
          html:
            'The four winds are held back. God is about to pour out judgment, but first, His servants are sealed with the seal of the living God—marked as His own. The 144,000 represents the fullness of God&apos;s people, twelve thousand from each of the twelve tribes. This is God&apos;s people preserved.',
        },
        {
          kind: 'greek',
          id: 'rev7-sphragis',
          title: 'Sphragis — Seal',
          script: 'σφραγίς',
          translit: '<strong>Sphragis</strong> · seal; mark of ownership; authentication',
          description:
            'A seal marks ownership. It authenticates. To be sealed with God&apos;s seal is to be marked as His possession, protected by His authority. In ancient times, a sealed document could not be opened by anyone else.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-seal',
          title: 'Christ Connection — Sealed in Christ',
          html:
            'Paul writes in Ephesians 1:13: "In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that Holy Spirit of promise." To believe in Christ is to be sealed.',
        },
        {
          kind: 'carry',
          html:
            'You are marked. You belong to God. The winds of judgment may blow, but you are sealed in the foreheads—marked as His own where all can see. Your security is not in this world. It is in God&apos;s seal.',
        },
        {
          kind: 'reflection',
          id: 'rev7-sealed',
          prompt: 'What does it mean to be sealed by God? How does that security shape how you live in the midst of a world that presses in?',
        },
      ],
    },

    {
      ref: 'Revelation 7:9–17',
      title: 'The Great Multitude in White Robes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(9, 'After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb, clothed with white robes, and palms in their hands;'),
            plain(10, 'And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb.'),
            plain(13, 'And one of the elders answered, saying unto me, What are these which are arrayed in white robes? and whence came they?'),
            plain(14, 'And I said unto him, Sir, thou knowest. And he said to me, These are they which came out of great tribulation, and have washed their robes, and made them white in the blood of the Lamb.'),
            plain(15, 'Therefore are they before the throne of God, and serve him day and night in his temple: and he that sitteth on the throne shall dwell with them.'),
            plain(17, 'For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-multitude',
          html:
            'A multitude beyond numbering stands before the throne. They are not Israel alone, but "of all nations, and kindreds, and people, and tongues." They have come through great tribulation. Their robes are white—not by their own righteousness, but because they have washed them in the blood of the Lamb. They have been made clean by His sacrifice.',
        },
        {
          kind: 'greek',
          id: 'rev7-plethus',
          title: 'Plethus — Multitude',
          script: 'πλῆθος',
          translit: '<strong>Plethus</strong> · multitude; great number; fullness',
          description:
            'A plethus is not just many, but a multitude so great that it cannot be numbered. It represents the fullness of God&apos;s purpose—the inclusion of all nations in His redemption.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-redeemed',
          title: 'Christ Connection — Redeemed by His Blood',
          html:
            'The multitude is not saved by their own works, but by the blood of the Lamb. Christ&apos;s sacrifice is the cleansing power. His blood makes them white. Their salvation is not earned but given.',
        },
        {
          kind: 'carry',
          html:
            'You are part of a multitude. Your suffering is temporary. Your whiteness is secured. The Lamb will lead you to living fountains. God will wipe away every tear. This is not sentimental fantasy. This is the promise to those who believe.',
        },
        {
          kind: 'reflection',
          id: 'rev7-multitude-tears',
          prompt: 'What does it mean that all tears will be wiped away? How does that vision sustain you in present suffering?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 7 · Study Guide',
  },

  hasHebrew: false,
};
