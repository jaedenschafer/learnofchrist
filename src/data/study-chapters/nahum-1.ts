import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nahum 1 — The Vengeance of the Lord
 *
 * "The Lord is good, a strong hold in the day of trouble." God will destroy
 * Nineveh, the bloody city. But He is a refuge for those who know Him.
 */
export const NAHUM_1: RichChapterContent = {
  bookSlug: 'nahum',
  bookName: 'Nahum',
  chapter: 1,

  estimatedMinutes: { 5: 2, 10: 3, 15: 4 },
  intros: [
    'Nahum brings a word about Nineveh—the same city that repented at Jonah&apos;s preaching. But time has passed, and Nineveh has returned to her wickedness. She is called a bloody city, a city of lies and prey. Against her, God rises. His judgment is not arbitrary cruelty but divine justice against those who have made violence and exploitation their way of life.',
    'Yet the book opens with a profound paradox: "The Lord is good, a strong hold in the day of trouble." The God who judges Nineveh is good. The God who will destroy her is a refuge for those who turn to Him. The distinction is clear: those who flee to God for safety will find it. Those who oppose Him will find only judgment.',
  ],

  sections: [
    {
      ref: 'Nahum 1:1–8',
      title: 'God the Avenger and Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The burden of Nineveh. The book of the vision of Nahum the Elkoshite.'),
            plain(2, 'God is jealous, and the Lord revengeth; the Lord revengeth, and is furious; the Lord will take vengeance on his adversaries, and he reserveth wrath for his enemies.'),
            plain(3, 'The Lord is slow to anger, and great in power, and will not at all acquit the wicked: the Lord hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet.'),
            plain(4, 'He rebuketh the sea, and maketh it dry, and drieth up all the rivers: Bashan languisheth, and Carmel, and the flower of Lebanon languisheth.'),
            plain(5, 'The mountains quake at him, and the hills are dissolved: and the earth is burned at his presence, yea, the world, and all that dwell therein.'),
            plain(6, 'Who can stand before his indignation? and who can abide in the fierceness of his anger? his fury is poured out like fire, and the rocks are thrown down by him.'),
            plain(7, 'The Lord is good, a strong hold in the day of trouble; and he knoweth them that trust in him.'),
            plain(8, 'But with an overrunning flood he will make an utter end of the place thereof, and darkness shall pursue his enemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum1-jealous',
          html:
            'God is jealous—the word conveys that He will not tolerate the worship or allegiance of His people being given to idols, or their peace being disrupted by tyrants. He is furious at those who oppress His people. This is not irrational anger but divine justice, rooted in His care for the vulnerable.',
        },
        {
          kind: 'hebrew',
          id: 'nahum1-kana',
          title: 'Kana — "Jealous"',
          script: 'קַנָּא',
          translit: '<strong>Kana</strong> · jealous; zealous; passionate',
          description:
            'The Hebrew word "kana" conveys both jealousy and zeal—a passionate concern for what belongs to Him and a refusal to allow it to be violated. God is zealously protective of His people.',
        },
        {
          kind: 'christ',
          id: 'nahum1-christ-refuge',
          title: 'Christ Connection — Refuge in Christ',
          html:
            '"The Lord is good, a strong hold in the day of trouble; and he knoweth them that trust in him." In John 10, Christ says, "I am the door: by me if any man enter in, he shall be saved." He is the refuge, the protection against judgment. Those who trust in Him find safety. Those who oppose Him face His judgment.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s judgment on the wicked is not separate from His goodness toward those who trust Him. The same God who destroys the violent city is the refuge of those who flee to Him. We cannot claim His protection while refusing His authority.',
        },
        {
          kind: 'reflection',
          id: 'nahum1-refuge',
          prompt:
            'Do you experience God as a strong hold in the day of trouble? What does it mean to trust in Him?',
        },
      ],
    },

    {
      ref: 'Nahum 1:9–15',
      title: 'The Fall of Nineveh Is Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(9, 'What do ye imagine against the Lord? he will make an utter end: affliction shall not rise up the second time.'),
            plain(10, 'For while they be folden together as thorns, and as drunken men, they shall be devoured as stubble fully dry.'),
            plain(11, 'There is one come out of thee, that imagineth evil against the Lord, an ungodly counsellor.'),
            plain(12, 'Thus saith the Lord; Though they be quiet, and likewise many, yet thus shall they be cut down: when he shall pass through. Though I have afflicted thee, I will afflict thee no more.'),
            plain(13, 'For now will I break his yoke from off thee, and will burst thy bonds in sunder.'),
            plain(14, 'And the Lord hath given commandment concerning thee, that no more of thy name be sown: out of the house of thy gods will I cut off the graven image and the molten image: I will make thy grave; for thou art vile.'),
            plain(15, 'Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee; he is utterly cut off.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum1-utter-end',
          html:
            'God makes clear: "He will make an utter end: affliction shall not rise up the second time." Nineveh&apos;s judgment is final. The oppression that Judah has suffered will not be repeated. The enemies will be destroyed so completely that not even the memory of them will remain.',
        },
        {
          kind: 'commentary',
          id: 'nahum1-yoke',
          html:
            'For Judah, there is a word of liberation: "I will break his yoke from off thee, and will burst thy bonds in sunder." The oppression that has bound them will be broken. The tyrant who has held them captive will be removed. This is liberation through divine judgment.',
        },
        {
          kind: 'christ',
          id: 'nahum1-christ-good-tidings',
          title: 'Christ Connection — The Good News of Christ',
          html:
            '"Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace!" In Romans 10:15, Paul quotes this verse in reference to those who preach the gospel of Christ. Christ is the ultimate bearer of good tidings, the One who brings true peace through His victory over death and evil.',
        },
        {
          kind: 'carry',
          html:
            'When God judges evil, it is good news for those oppressed by it. The fall of the tyrant is the liberation of the captive. We can rejoice in God&apos;s judgment of evil because it means freedom for His people.',
        },
        {
          kind: 'reflection',
          id: 'nahum1-freedom',
          prompt:
            'From what oppression or bondage do you need God&apos;s liberating judgment? How would your life change if that burden were truly lifted?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is good, a strong hold in the day of trouble...the wicked shall no more pass through thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nahum 1 · Study Guide',
  },

  hasHebrew: true,
};
