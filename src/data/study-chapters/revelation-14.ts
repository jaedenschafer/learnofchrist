import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 14 — The Lamb on Mount Zion and the Harvest
 *
 * The Lamb stands on Mount Zion with the 144,000—those who have not defiled
 * themselves with women, who follow the Lamb wherever He goes. Three angels
 * proclaim the eternal gospel, the fall of Babylon, and the doom of those who
 * bear the mark. Then the harvest comes: the Son of Man gathers the wheat.
 */
export const REVELATION_14: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 14,

  intros: [
    'The vision shifts from darkness to light. The Lamb stands on Mount Zion—the holy mountain of God&apos;s kingdom. With Him stand the 144,000—the redeemed, the faithful, the overcomers. They are marked with His name, sealed in holiness.',
    'Three angels fly through the heavens, proclaiming the everlasting gospel, the fall of Babylon, and the final judgment. The time of harvest has come. The Son of Man holds a sharp sickle. The grain is ripe. The gathering begins.',
  ],

  sections: [
    {
      ref: 'Revelation 14:1–7',
      title: 'The Lamb and the 144,000 on Mount Zion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'And I looked, and, lo, a Lamb stood on the mount Sion, and with him an hundred forty and four thousand, having his Father&apos;s name written in their foreheads.'),
            plain(3, 'And they sung as it were a new song before the throne, and before the four beasts, and the elders: and no man could learn that song but the hundred and forty and four thousand which were redeemed from the earth.'),
            plain(4, 'These are they which were not defiled with women; for they are virgins. These are they which follow the Lamb whithersoever he goeth. These were redeemed from among men, being the firstfruits unto God and to the Lamb.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-zion',
          html:
            'Mount Zion is the holy mountain, the seat of God&apos;s kingdom. The Lamb stands there with the redeemed. These 144,000 have not defiled themselves—they have remained faithful to Christ alone. They sing a new song that no one else can learn. They have been redeemed from among men as the firstfruits of the harvest.',
        },
        {
          kind: 'greek',
          id: 'rev14-aparche',
          title: 'Aparche — Firstfruits',
          script: 'ἀπαρχή',
          translit: '<strong>Aparche</strong> · firstfruits; first portion of the harvest',
          description:
            'The firstfruits belonged to God. They were consecrated to Him. The redeemed are God&apos;s firstfruits—the first and finest of His harvest.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-mount-zion',
          title: 'Christ Connection — The Lamb on Zion',
          html:
            'The Lamb stands on Mount Zion. This is not a promise far off, but a reality already present in God&apos;s mind. Christ is on Zion. The redeemed are with Him. This is their destination and their security.',
        },
        {
          kind: 'carry',
          html:
            'You are called to follow the Lamb wherever He goes. To be redeemed means to be separate—set apart unto God. The new song is sung only by those who have been redeemed. It is a song of belonging, of being chosen, of eternal security.',
        },
        {
          kind: 'reflection',
          id: 'rev14-follow-lamb',
          prompt: 'What does it mean to follow the Lamb wherever He goes? What price must you be willing to pay?',
        },
      ],
    },

    {
      ref: 'Revelation 14:14–20',
      title: 'The Harvest and the Vintage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(14, 'And I looked, and behold a white cloud: and upon the cloud one sat like unto the Son of man, having on his head a golden crown, and in his hand a sharp sickle.'),
            plain(15, 'And another angel came out of the temple, crying with a loud voice to him that sat on the cloud, Thrust in thy sickle, and reap: for the time is come for thee to reap; for the harvest of the earth is ripe.'),
            plain(16, 'And he that sat on the cloud thrust in his sickle on the earth; and the earth was reaped.'),
            plain(19, 'And the angel thrust in his sickle into the earth, and gathered the vine of the earth, and cast it into the great winepress of the wrath of God.'),
            plain(20, 'And the winepress was trodden without the city, and blood came out of the winepress, even unto the horse bridles, by the space of a thousand and six hundred furlongs.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-harvest',
          html:
            'The Son of Man holds a sharp sickle. The harvest is ripe. He thrusts in His sickle, and the earth is reaped. Then another angel gathers the vintage—the grapes for judgment. They are cast into the winepress of God&apos;s wrath. The image is stark: grapes are crushed, their blood flows as wine. This is the judgment of the wicked.',
        },
        {
          kind: 'greek',
          id: 'rev14-therizo',
          title: 'Therizo — To Reap',
          script: 'θερίζω',
          translit: '<strong>Therizo</strong> · to reap; to harvest; to gather the crop',
          description:
            'The harvest is the gathering in of what has been sown. "Whatsoever a man soweth, that shall he also reap" (Galatians 6:7). The reaping is judgment and vindication combined.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-harvest',
          title: 'Christ Connection — The Reaper',
          html:
            'Christ is the Reaper. He gathers His own (the wheat) and judges the wicked (the grapes for destruction). As Matthew 13:30 says: "Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn."',
        },
        {
          kind: 'carry',
          html:
            'The harvest is near. Christ holds the sickle. You will be reaped—gathered into His barn or cast into the winepress of judgment, depending on your allegiance. Choose to be wheat, not tares. Choose to follow the Lamb.',
        },
        {
          kind: 'reflection',
          id: 'rev14-harvest',
          prompt: 'As the harvest approaches, what fruit does your life bear? Will you be gathered as wheat or cast into the winepress?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 14 · Study Guide',
  },

  hasHebrew: false,
};
