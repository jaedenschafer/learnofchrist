import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 15 — The Seven Angels with the Seven Last Plagues
 *
 * John sees the sea of glass mingled with fire. Those who overcome the beast
 * stand upon it, harps in hand, singing the song of Moses and the Lamb. Then
 * seven angels emerge from the temple, each given a bowl of God&apos;s wrath—the
 * last plagues before the end.
 */
export const REVELATION_15: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 15,

  intros: [
    'Before the final judgment is poured out, a vision of victory. The sea of glass—where God sits in judgment—is surrounded by those who have triumphed over the beast. They sing the song of Moses—the anthem of liberation—and the song of the Lamb—the anthem of redemption through Christ&apos;s sacrifice.',
    'Then the final seven angels receive the final seven bowls. These are not warnings or partial judgments. These are the last plagues, the full outpouring of God&apos;s wrath before the consummation.',
  ],

  sections: [
    {
      ref: 'Revelation 15:1–8',
      title: 'The Victors and the Seven Last Plagues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'And I saw another sign in heaven, great and marvellous, seven angels having the seven last plagues; for in them is filled up the wrath of God.'),
            plain(2, 'And I saw as it were a sea of glass mingled with fire: and them that had gotten the victory over the beast, and over his image, and over his mark, and over the number of his name, stand on the sea of glass, having the harps of God.'),
            plain(3, 'And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.'),
            plain(4, 'Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy: for all nations shall come and worship before thee; for thy judgments are made manifest.'),
            plain(8, 'And the temple was filled with smoke from the glory of God, and from his power; and no man was able to enter into the temple, till the seven plagues of the seven angels were fulfilled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev15-victors',
          html:
            'Those who have overcome the beast stand on the sea of glass, victorious. They hold harps—the instruments of worship. They sing a song of liberation (Moses) and redemption (the Lamb). Their victory is complete. They will not be touched by the plagues to come. The temple is filled with smoke—the presence of God, glorious and awesome—and no one can enter until the plagues are completed.',
        },
        {
          kind: 'greek',
          id: 'rev15-nike',
          title: 'Nike — Victory',
          script: 'νίκη',
          translit: '<strong>Nike</strong> · victory; triumph; conquest',
          description:
            'Nike is victory, the triumph of will and purpose. Those who have nike over the beast are more than conquerors. They have been victorious not by their own strength, but through Christ.',
        },
        {
          kind: 'christ',
          id: 'rev15-christ-lamb-song',
          title: 'Christ Connection — Song of the Lamb',
          html:
            'The song of the Lamb celebrates Christ&apos;s redemptive work. The Lamb was slain, and through His blood, victory is won. The two songs—of Moses (God&apos;s deliverance from Egypt) and of the Lamb (God&apos;s deliverance through Christ)—blend into one anthem of God&apos;s faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'To overcome the beast requires all your faithfulness, all your resistance, all your hope in Christ. Yet if you overcome, you stand with the victors on the sea of glass. You sing the songs of triumph. You are secure from the wrath to come.',
        },
        {
          kind: 'reflection',
          id: 'rev15-overcome',
          prompt: 'What would it mean for you to gain the victory over the beast? How do you sing the song of the Lamb?',
        },
      ],
    },

    {
      ref: 'Revelation 15',
      title: 'The Preparation of Judgment',
      blocks: [
        {
          kind: 'commentary',
          id: 'rev15-bowls',
          html:
            'Seven angels are given seven golden bowls filled with the wrath of God. These are not trumpets that sound warnings. These are bowls poured out. The distinction is clear: the trumpets called to repentance. The bowls are the final judgment. Those who have not repented by this point will face the full measure of God&apos;s wrath.',
        },
        {
          kind: 'greek',
          id: 'rev15-phiale',
          title: 'Phiale — Bowl',
          script: 'φιάλη',
          translit: '<strong>Phiale</strong> · bowl; cup; vessel for pouring',
          description:
            'A bowl is wider than a cup, holding more. The bowl of wrath is the full measure of judgment, poured out completely. There is no holding back, no mercy extended.',
        },
        {
          kind: 'christ',
          id: 'rev15-christ-judge-just',
          title: 'Christ Connection — Judge of All the Earth',
          html:
            'Christ is the Judge of all the earth. His judgments are just and true. The wrath of God is not arbitrary but the necessary consequence of rebellion. Those who have loved darkness will receive darkness. Those who have refused light will be left in blindness.',
        },
        {
          kind: 'carry',
          html:
            'The time for mercy is not eternal. There is an hour when the bowls are poured, when judgment comes, when the opportunity for repentance has passed. Repent now. Do not wait for the bowls to be poured.',
        },
        {
          kind: 'reflection',
          id: 'rev15-wrath',
          prompt: 'How do you understand God&apos;s wrath? What is the difference between a warning (the trumpets) and final judgment (the bowls)?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 15 · Study Guide',
  },

  hasHebrew: false,
};
