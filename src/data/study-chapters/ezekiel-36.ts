import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 36 — Renewal and Restoration
 *
 * After the scattering and desolation, God promises restoration. He will sprinkle
 * clean water upon Israel and wash away their filthiness. He will give them a new
 * heart and a new spirit. This is regeneration—the work of the Holy Spirit making
 * people new from within. The promise points forward to John 3, where Christ speaks
 * of being born again of water and Spirit.
 */
export const EZEKIEL_36: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 36,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Israel has been scattered. Her cities are ruins. Her people are exiles. The land itself is desolate. But God&apos;s love for His people does not depend on their circumstance. He will not leave them as they are. In a passage of extraordinary tenderness, God speaks to the mountains of Israel and says: I will make you green again. The desolate places will be rebuilt. The barren land will be tilled. The ruins will become cities.',
    'But the physical restoration is only the outer layer of the promise. The true renewal happens inside. "A new heart also will I give you, and a new spirit will I put within you." This is the deepest transformation—not merely restored circumstances, but transformed hearts. The people will remember their sins and loathe themselves. And in that loathing, they will understand how much they have been forgiven. This is the beginning of true repentance.',
  ],

  sections: [
    {
      ref: 'Ezekiel 36:1–15',
      title: 'The Land Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(1, 'Also, thou son of man, prophesy unto the mountains of Israel, and say, Ye mountains of Israel, hear the word of the Lord:'),
            plain(8, 'But ye, O mountains of Israel, ye shall shoot forth your branches, and yield your fruit to my people of Israel; for they are at hand to come.'),
            plain(9, 'For, behold, I am for you, and I will turn unto you, and ye shall be tilled and sown:'),
            plain(10, 'And I will multiply men upon you, all the house of Israel, even all of it: and the cities shall be inhabited, and the wastes shall be builded:'),
            plain(11, 'And I will multiply upon you man and beast; and they shall increase and bring forth fruit: and I will settle you after your old estates, and will do better unto you than at your beginnings: and ye shall know that I am the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel36-mountains',
          html:
            'The prophet speaks to the mountains themselves—not to the people, but to the land. This is poetic and profound. The mountains have witnessed the desolation. They have seen the cities emptied, the vines torn up, the people driven away. But now God commands the mountains to bear fruit again. The land itself will become a witness to God&apos;s restoration.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel36-multiply',
          html:
            'The promise is not merely return; it is multiplication. "I will multiply upon you man and beast." What was broken will not merely be repaired—it will be greater than before. "I will do better unto you than at your beginnings." God is not just undoing the damage. He is moving the people forward into something better than what they lost.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel36-tahom',
          title: 'Tahom — "Wastes" ',
          script: 'תָּהוֹם',
          translit: '<strong>Tahom</strong> · waste; desolation; the deep',
          description:
            'This word can refer to desolation or the primordial deep. There is a sense in which exile is a return to chaos, to the void. But God will rebuild from that void, just as He brought order out of chaos at creation.',
        },
        {
          kind: 'christ',
          id: 'ezekiel36-christ-new',
          title: 'Christ Connection — New Creation',
          html:
            'In 2 Corinthians 5:17, Paul writes: "If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." Christ does not merely repair what is broken in us. He makes us new. We are not restored to our former state; we are transformed. This is what regeneration means—not rehabilitation, but resurrection into a new life.',
        },
        {
          kind: 'carry',
          html:
            'Whatever desolation you carry—broken relationships, failed attempts, wasted years—God is not interested in merely undoing the damage. He wants to make you new and to do better by you than at your beginning. This requires faith. It requires release of what you thought your life would be. It requires trust that God&apos;s restoration is better than what you lost.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel36-what-restore',
          prompt: 'What has been desolate in your life? What would God need to do to convince you that His restoration is better than what was lost?',
        },
      ],
    },

    {
      ref: 'Ezekiel 36:24–32',
      title: 'A New Heart and Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(24, 'For I will take you from among the heathen, and gather you out of all countries, and will bring you into your own land.'),
            plain(25, 'Then will I sprinkle clean water upon you, and ye shall be clean: from all your filthiness, and from all your idols, will I cleanse you.'),
            plain(26, 'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.'),
            plain(27, 'And I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them.'),
            plain(31, 'Then shall ye remember your own evil ways, and your doings that were not good, and shall loathe yourselves in your own sight for your iniquities and for your abominations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel36-clean-water',
          html:
            'The image of sprinkled clean water recalls baptism, though the concept as such does not yet exist in Ezekiel&apos;s time. Yet the idea is the same: cleansing from the outside in, the removal of uncleanness. But this is only the first step. True cleansing requires a change of heart.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel36-heart',
          html:
            'The stony heart is hardened against God. It does not feel, does not respond, does not break. God removes this stone and replaces it with a heart of flesh—living, sensitive, capable of repentance and love. This is not something the people do for themselves. It is something God does in them.',
        },
        {
          kind: 'carry',
          html:
            'The order matters: first cleansing, then a new heart, then the Spirit within causing you to walk in God&apos;s statutes. The transformations are not simultaneous. They are sequential. First you are washed. Then your heart is changed. Then the Spirit empowers you to walk in the way.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel36-loathe-transform',
          prompt: 'What would it take for you to loathe your own iniquities—not to minimize them or excuse them, but to truly see them as separating you from God? And what would that recognition make possible?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A new heart also will I give you, and a new spirit will I put within you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 36 · Study Guide',
  },

  hasHebrew: true,
};
