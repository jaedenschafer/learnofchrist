import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 32 — The Lament for Pharaoh
 *
 * Ezekiel sings a dirge over Pharaoh and Egypt. The mighty king is dragged down
 * to Sheol, the place of the dead, where kings and nations lie in rows of stone.
 * The lesson is inescapable: death equalizes all. Rich and poor, powerful and
 * weak, all descend to the grave. And at the end of time, all nations will face
 * Christ&apos;s judgment.
 */
export const EZEKIEL_32: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 32,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'In this chapter, Ezekiel is commanded to sing a lament—a song of mourning and doom—over Pharaoh and the nation of Egypt. The imagery is stark. Pharaoh is not a man anymore, but a great dragon in the sea, thrashing and muddy the waters with his feet. He spreads his net and all the creatures are trapped. But this power, this dominion, will be taken from him. His corpse will be left unburied, a feast for the birds and beasts. The shame that comes to him is total.',
    'Yet beneath the personal judgment on Pharaoh lies a universal truth. When Pharaoh descends to Sheol, he will find he is not alone. All the mighty kings and nations before him are already there, lying in rows. Death has not honored their greatness. It has leveled them all. And here Ezekiel hints at a final reckoning: when all nations are gathered, they will face the God of Israel and recognize His power at last.',
  ],

  sections: [
    {
      ref: 'Ezekiel 32:1–16',
      title: 'The Dragon Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(1, 'And it came to pass in the twelfth year, in the twelfth month, in the first day of the month, that the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, take up a lamentation for Pharaoh king of Egypt, and say unto him, Thou art like a young lion of the nations, and thou art as a whale in the seas: and thou camest forth with thy rivers, and troubledst the waters with thy feet, and fouledst their rivers.'),
            plain(3, 'Thus saith the Lord God; I will therefore spread out my net over thee with a company of many people; and they shall bring thee up in my net.'),
            plain(4, 'Then will I leave thee upon the land, I will cast thee forth upon the open field, and will cause all the fowls of the heaven to settle upon thee, and I will fill the beasts of the whole earth with thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel32-dragon',
          html:
            'Pharaoh is a dragon, a leviathan of the sea—a creature of chaos and ancient power. He muddies the waters with his feet, claiming dominion over all he touches. His very presence is a disturbance to creation. But God will catch him in a net, drag him from the sea, and leave him for the carrion birds. The imagery is deliberately degrading. The mighty are made monstrous and then destroyed, their bodies left to rot unhonored.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel32-net',
          html:
            'The net is not thrown by God alone, but by "a company of many people." Here we see how judgment works in history. God does not always strike directly. He allows human powers to rise against their enemies, allows the turning of the political wheel, and in that turning, His judgment is enacted. Pharaoh will be caught not by miracle, but by the machinery of history itself—the very machinery he thought he could control.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel32-qinah',
          title: 'Qinah — "Lament" ',
          script: 'קִינָה',
          translit: '<strong>Qinah</strong> · a song of mourning; dirge; elegy for the dead',
          description:
            'This is not a celebration of Pharaoh&apos;s death. It is a formal lament—the same word used for funeral songs over the fallen. Even in judgment, there is a kind of solemnity, a recognition that a life—however prideful, however destructive—has ended. The qinah acknowledges both the reality of loss and the justice of God.',
        },
        {
          kind: 'christ',
          id: 'ezekiel32-christ-final',
          title: 'Christ Connection — All Nations Face Judgment',
          html:
            'In Matthew 25, Christ sits in judgment over all the nations, separating them as a shepherd separates sheep from goats. The criterion is simple: how did you treat the hungry, the stranger, the prisoner, the sick? Christ is the judge before whom even emperors must stand. Like Pharaoh, every nation, every ruler, every heart will one day answer. But unlike Pharaoh, those who have lived toward Christ and His kingdom will hear "Come, ye blessed of my Father."',
        },
        {
          kind: 'carry',
          html:
            'The temptation to believe that earthly power is permanent is ever-present. We live under rulers. We see empires rise. We assume they will stand forever. But Egypt is gone. Pharaoh is dust. His riches, his armies, his dominion—all of it returned to nothing. This is not a counsel to despair, but to perspective. Where is your trust? In what will not last, or in what cannot fall?',
        },
        {
          kind: 'reflection',
          id: 'ezekiel32-where-trust',
          prompt: 'Where do you place your security and hope? What would it mean for you to trust less in earthly powers and more in God&apos;s ultimate authority over all nations?',
        },
      ],
    },

    {
      ref: 'Ezekiel 32:17–32',
      title: 'Sheol and the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(17, 'It came to pass also that the word of the Lord came unto me, saying,'),
            plain(18, 'Son of man, wail for the multitude of Egypt, and cast them down, even her, and the daughters of the famous nations, unto the nether parts of the earth, with them that go down into the pit.'),
            plain(21, 'The strong among the mighty shall speak to him out of the midst of hell with them that help him: they are gone down, they lie uncircumcised, slain by the sword.'),
            plain(31, 'Pharaoh shall see them, and shall be comforted over all his multitude, even Pharaoh and all his army slain by the sword, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel32-sheol',
          html:
            'Sheol in biblical thinking is the place of the dead—not heaven or hell in the Christian sense, but the grave, the place where all souls go. Ezekiel&apos;s vision populates it with the great kingdoms of history: Assyria, Elam, Sidon, Egypt. All of them are there, lying in rows of stone, uncircumcised (a sign of shame and separation from Israel&apos;s covenant), slain by the sword.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel32-comforted',
          html:
            'The word "comforted" here is grim. Pharaoh, descending to Sheol and seeing all the mighty nations before him, will be "comforted" in the sense that he will understand his fall is not unique. All the great are brought low. All the proud are brought to silence. It is a dark comfort—the comfort of knowing you are not alone in your ruin.',
        },
        {
          kind: 'carry',
          html:
            'The fundamental message is one of equalization. Death makes no distinction. The mighty and the weak, the rich and the poor, the conqueror and the slave—all descend to the same grave. This is not meant to be paralyzing, but clarifying. It teaches us what matters. Not wealth that can be taken away. Not power that death will strip. But righteousness, faithfulness, the building of what lasts beyond us.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel32-what-lasts',
          prompt: 'If you knew that all earthly status and power would be stripped away, what about your life would still matter? What have you built that is not subject to time and decay?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Pharaoh shall see them, and shall be comforted over all his multitude, even Pharaoh and all his army slain by the sword.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 32 · Study Guide',
  },

  hasHebrew: true,
};
