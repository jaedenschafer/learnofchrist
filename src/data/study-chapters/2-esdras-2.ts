import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_2: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 2,

  intros: [
    'In this continuation of Ezra&apos;s vision, God promises a Saviour to come. Gentiles are called to enter the kingdom, leaving behind their idolatries. Those who answer the call are granted a revelation of glory—crowned figures carrying palms of victory.',
    'The chapter envisions an eschatological gathering where the Gentiles are no longer outside but invited in. They are armed with faith in the coming salvation, transformed from wanderers into inheritors of God&apos;s promise.',
  ],

  sections: [
    {
      ref: '2 Esdras 2:1–8',
      title: 'The Coming Saviour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And the Lord said, Go and speak in the ears of my people the words of my prophecy which thou hast written.'),
            plain(4, 'Behold, a man is coming forth from the east, his name is Jesus, and he shall call the Gentiles, and they shall leave their idols.'),
            plain(7, 'And he shall give unto them everlasting tabernacles, which they shall not lose by any error.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras2-saviour',
          html:
            'The vision explicitly names Jesus coming from the east. He calls the Gentiles away from idolatry into truth. The promise is not temporary blessing but "everlasting tabernacles"—a permanent dwelling place with God.',
        },
        {
          kind: 'hebrew',
          id: 'esdras2-mishkan',
          title: 'Mishkan—Tabernacle',
          script: 'מִשְׁכָּן',
          translit: '<strong>Mishkan</strong> · dwelling place; tabernacle',
          description: 'The mishkan is God&apos;s dwelling among His people. Unlike earthly tents, the everlasting tabernacle promised through Jesus is imperishable.',
        },
        {
          kind: 'christ',
          id: 'esdras2-christ-called',
          title: 'Christ Connection—The One Who Calls',
          html:
            'Jesus comes as One who calls—not by force but by invitation. He calls the Gentiles, drawing them from empty worship into relationship with the living God. His call is efficacious; it transforms.',
        },
        {
          kind: 'carry',
          html:
            'The Gentiles are invited in not as afterthoughts but as essential to God&apos;s purpose. They leave behind their idols—their false dependencies—to inherit an everlasting home. What idols does your heart still cling to?',
        },
        {
          kind: 'reflection',
          id: 'esdras2-called',
          prompt: 'How have you experienced Jesus&apos; call? What idols or false hopes has His call asked you to leave behind?',
        },
      ],
    },

    {
      ref: '2 Esdras 2:31–40',
      title: 'The Crowned Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(31, 'And he said unto me, Stand thou upon thy feet, and hear the voice.'),
            plain(35, 'Behold, a great multitude and mighty, crowned with palms, worshipping before the Lord.'),
            plain(37, 'And the Lord said unto me, These are they that have put off the mortal clothing, and put on the immortal, and have confessed the name of God.'),
            plain(40, 'Rejoice, O thou righteous one, and be glad for the glory of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras2-multitude',
          html:
            'Ezra sees a vision of the end: a multitude from every nation, clothed in immortality, crowned with victory, worshipping before God. They have confessed His name—owned His authority, sworn allegiance to Him. The mortal clothing is exchanged for eternal glory.',
        },
        {
          kind: 'greek',
          id: 'esdras2-athanasia',
          title: 'Athanasia—Immortality',
          script: 'ἀθανασία',
          translit: '<strong>Athanasia</strong> · immortality; deathlessness',
          description: 'Athanasia is not mere continuation but the transformation from corruptible to incorruptible nature. It is life beyond decay, the ultimate gift of Christ to the redeemed.',
        },
        {
          kind: 'christ',
          id: 'esdras2-christ-victory',
          title: 'Christ Connection—Victory Through His Name',
          html:
            'Those who confess His name are crowned with palms—the symbol of victory. Their triumph is not military but spiritual. They have overcome death itself through faith in the One whose name they confess.',
        },
        {
          kind: 'carry',
          html:
            'The vision promises that those who confess God&apos;s name will be crowned in glory. This is not flattery or delusion—it is the inheritance of the faithful. You are invited to join that multitude, to exchange the mortal for the immortal.',
        },
        {
          kind: 'reflection',
          id: 'esdras2-rejoice',
          prompt: 'If you could see yourself crowned and glorified before God, clothed in immortality, what would that mean about who you truly are?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, a great multitude and mighty, crowned with palms, worshipping before the Lord. These are they that have put off the mortal clothing, and put on the immortal, and have confessed the name of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 2 · Study Guide',
  },

  hasHebrew: true,
};
