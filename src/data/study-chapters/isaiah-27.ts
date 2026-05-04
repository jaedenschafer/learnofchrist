import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 27 — The Vineyard Song; Leviathan Slain
 *
 * Isaiah 27 returns to the image of God&apos;s vineyard—His people—and announces
 * that the Lord Himself will keep it with watchful care, that He will water it
 * moment by moment, lest any hurt it. The chapter also speaks of Leviathan,
 * the great serpent or dragon, which the Lord will slay. This dragon symbolizes
 * the cosmic chaos that opposes God&apos;s order, and its defeat represents the
 * ultimate victory of Christ over all that would threaten His kingdom.
 */
export const ISAIAH_27: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 27,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /The Destruction of Leviathan/i,
    caption: 'Isaiah 27',
  },
  intros: [
    'Isaiah 27 weaves together images of vineyard and dragon, vineyard-keeping and cosmic warfare. The Lord sings of His vineyard—His people—and promises to guard it with unceasing vigilance. He will water it, keep watch over it, ensure that nothing harms it. This is tenderness, care, and protection. Yet the chapter also speaks of a great dragon, Leviathan, which the Lord will punish with His sword—a vision of divine power overthrowing cosmic opposition.',
    'The chapter speaks simultaneously of intimate care for the vulnerable and of divine warfare against powers of darkness. Christ fulfills both roles: He is the tender gardener who feeds and cares for His people, and He is the warrior who defeats every enemy that would harm them. In Christ, protection and victory are unified.',
  ],

  sections: [
    {
      ref: 'Isaiah 27:1–13',
      title: 'The Vineyard Kept; Leviathan Slain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(1, 'In that day the Lord with his sore and great and strong sword shall punish leviathan the piercing serpent, even leviathan that crooked serpent; and he shall slay the dragon that is in the sea.'),
            plain(2, 'In that day sing ye unto her, A vineyard of red wine.'),
            plain(3, 'I the Lord do keep it; I will water it every moment: lest any hurt it, I will keep it night and day.'),
            plain(4, 'Fury is not in me: by what occasion soever it is that thou contendest with me, I will take the branches thereof, and cast fire upon them.'),
            plain(5, 'Or let him take hold of my strength, that he may make peace with me; and he shall make peace with me.'),
            plain(6, 'He shall cause them that come of Jacob to take root: Israel shall blossom and bud, and fill the face of the world with fruit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah27-restoration-to-refining',
          html:
            'From cosmic warfare to intimate vineyard-keeping: the Lord defeats Leviathan with His sword, yet sings of the vineyard with tender care, watering it every moment and keeping watch night and day. Israel will take root and blossom. Yet the turning point comes: after the restoration, comes the question of God&apos;s judgment and how Israel has been refined.[res:sefaria-isaiah-27]',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(7, 'Hath he smitten him, as he smote those that smote him? or is he slain according to the slaughter of them that are slain by him?'),
            plain(8, 'In measure, when it shooteth forth, thou wilt debate with it: he stayeth his rough wind in the day of the east wind.'),
            plain(9, 'By this therefore shall the iniquity of Jacob be purged; and this is all the fruit to take away his sin; when he maketh all the stones of the altar as chalkstones that are beaten in sunder, the groves and images shall not stand up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-vineyard-kept',
          html:
            '<p>In that day, the Lord will keep His vineyard; no more thorns. From brokenness comes a new bloom.</p>',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(10, 'Yet the defenced city shall be desolate, and the habitation forsaken, and left like a wilderness: there shall the calf feed, and there shall he lie down, and consume the branches thereof.'),
            plain(11, 'When the boughs thereof are withered, they shall be broken off: the women come, and set them on fire: for it is a people of no understanding: therefore he that made them will not have mercy upon them, and he that formed them will shew them no favour.'),
            plain(12, 'And it shall come to pass in that day, that the Lord shall beat off from the channel of the river unto the stream of Egypt, and ye shall be gathered one by one, O ye children of Israel.'),
            plain(13, 'And it shall come to pass in that day, that the great trumpet shall be blown, and they shall come which were ready to perish in the land of Assyria, and the outcasts in the land of Egypt, and shall worship the Lord in the holy mount at Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah27-leviathan',
          html:
            '"In that day the Lord with his sore and great and strong sword shall punish leviathan the piercing serpent." Leviathan appears in the Psalms and the book of Job as a great sea creature, a symbol of chaos and rebellion against God. Here, the Lord uses His sword against it. This is cosmic warfare—not a skirmish between nations, but a conflict between the forces of order (represented by God and His kingdom) and the forces of chaos (represented by Leviathan)[res:sefaria-isaiah-27-v1][res:bibleodyssey-isaiah-overview-27].',
        },
        {
          kind: 'commentary',
          id: 'isaiah27-vineyard',
          html:
            '"In that day sing ye unto her, A vineyard of red wine. I the Lord do keep it; I will water it every moment: lest any hurt it, I will keep it night and day." The same Lord who wields the sword against Leviathan is the tender gardener who watches the vineyard. "Every moment"—there is no letup, no rest in His vigilance. The Lord is both warrior and caretaker.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah27-keep',
          title: 'Shamar — "Keep" (Guard; Watch Over)',
          script: 'שָׁמַר',
          translit: '<strong>Shamar</strong> · to keep; to guard; to watch over; to preserve',
          description:
            'The word conveys active, continuous protection. God does not merely allow the vineyard to grow; He actively watches over it, guards it, preserves it. Shamar is used throughout Scripture to describe God&apos;s faithful keeping of His people and His covenant.',
        },
        {
          kind: 'commentary',
          id: 'isaiah27-peace',
          html:
            '"Let him take hold of my strength, that he may make peace with me; and he shall make peace with me." The Lord offers peace to those who grasp His strength, who rely upon Him. This is not peace after victory alone. It is peace born of reconciliation—the enemy made friends through surrender to God&apos;s strength.',
        },
        {
          kind: 'commentary',
          id: 'isaiah27-gathering',
          html:
            'The passage concludes with the gathering of Israel: "Ye shall be gathered one by one, O ye children of Israel." And the great trumpet will be blown—a sign of the gathering and the calling home. "They shall come which were ready to perish in the land of Assyria, and the outcasts in the land of Egypt, and shall worship the Lord in the holy mount at Jerusalem."',
        },
        {
          kind: 'christ',
          id: 'isaiah27-christ-vineyard',
          title: 'Christ Connection — The Gardener and the Warrior',
          html:
            'In John 15, Christ says: "I am the true vine, and my Father is the husbandman. Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit." Christ is both the vineyard and its keeper—the one who tends it and the one who protects it. In Revelation 19, He is revealed as the Warrior: "And the armies which were in heaven followed him upon white horses, clothed in fine linen, white and clean. And out of his mouth goeth a sharp sword, that with it he should smite the nations." The same Christ tends the vineyard with water and care, and overthrows Leviathan with a sword.',
        },
        {
          kind: 'carry',
          html:
            'The juxtaposition of vineyard and dragon—tender care and cosmic warfare—invites us to recognize that God&apos;s protection of His people extends to both the intimate and the ultimate. He cares for the vulnerable details of our lives and also wages cosmic battle against the powers that would destroy us.',
        },
        {
          kind: 'reflection',
          id: 'isaiah27-protected',
          prompt: 'Do you experience God as the tender keeper of the vineyard or as the warrior against Leviathan? Or both? What areas of your life feel like they need tender watering? What areas feel like they need divine protection against great powers?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I the Lord do keep it; I will water it every moment: lest any hurt it, I will keep it night and day.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 27 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-27',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 27',
      url: 'https://www.sefaria.org/Isaiah.27',
      description: 'Sefaria open-access source text and translations for Isaiah 27.',
    },
    {
      id: 'sefaria-isaiah-27-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 27 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.27',
      description: 'The Hebrew text of Isaiah 27 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-isaiah-overview-27',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/isaiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Isaiah.',
    },

  ],

  hasHebrew: true,
};
