import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 17 — The Tender Twig
 *
 * A parable of two eagles and a vine. The great eagle—Nebuchadnezzar—brings
 * a tender twig from the cedar of Lebanon. It becomes a spreading vine, but
 * then another great eagle calls to it, and the vine stretches its roots and
 * branches toward this new master. God asks: "Shall it prosper? Shall he not
 * pull up the roots thereof, and cut off the fruit thereof?" The vine trusts
 * in divided loyalty. Then God speaks of a tender twig from the high cedar—a
 * shoot that He Himself will plant on the mountain of Israel. This is the
 * Branch, Christ, the One who will not fail. Where the first vine sought
 * security through shifting alliances, the Branch trusts only in God.
 */
export const EZEKIEL_17: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 17,

  estimatedMinutes: { 5: 1, 10: 3, 15: 5 },
  intros: [
    'Ezekiel 17 begins with a riddle—a parable of two eagles and a vine. On the surface it addresses Judah&apos;s political entanglements: they have made treaties with Babylon, only to look toward Egypt for deliverance. But the parable runs deeper. It describes a condition of spiritual infidelity—seeking salvation through human alliances rather than through God. The vine is not rooted deeply enough. It stretches its branches toward every power that promises security, and in doing so, it loses itself.',
    'The parable then pivots. God Himself will take a tender twig from the high cedar of Lebanon and plant it on Israel&apos;s mountain. This shall be the Branch—not dependent on the favor of great powers, but rooted in God&apos;s own faithfulness. Here is the Christ-figure: the One who will not divide His loyalty, whose trust is single and fixed.',
  ],

  sections: [
    {
      ref: 'Ezekiel 17:1–10',
      title: 'The Vine and the Eagles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(3, 'Thus saith the Lord God; A great eagle with great wings, long-winged, full of feathers, which had divers colours, came unto Lebanon, and took the highest branch of the cedar:'),
            plain(4, 'He cropped off the top of his young twigs, and carried it into a land of traffick; he set it in a city of merchants.'),
            plain(5, 'He took also of the seed of the land, and planted it in a fruitful field; he placed it by great waters, and set it as a willow tree.'),
            plain(7, 'There was also another great eagle with great wings and many feathers: and, behold, this vine did bend her roots toward him, and shot forth her branches toward him, that he might water it by the furrows of his plantation.'),
            plain(10, 'Yea, behold, being planted, shall it prosper? shall he not pull up the roots thereof, and cut off the fruit thereof, that it may wither? all the leaves of his spring shall wither, without great power or many people to lift it up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek17-transplant',
          html:
            'The first eagle is Nebuchadnezzar of Babylon. He takes a cutting from the great cedar of Lebanon—Judah—and plants it in foreign soil. The vine grows, but in exile. It is far from its native mountain. It spreads its branches and sends out roots, reaching for security and water. This is the condition of displacement, of vulnerability, of seeking to survive in an alien land.',
        },
        {
          kind: 'commentary',
          id: 'ezek17-divided',
          html:
            '"There was also another great eagle"—Egypt. And here the parable turns bitter. The vine, already displaced and uncertain, turns its roots and branches toward yet another power. It cannot settle. It cannot trust. It seeks security by offering loyalty to whichever eagle will give it water. This is unfaithfulness dressed as pragmatism. But God sees it: a vine that bends toward every wind will not prosper.',
        },
        {
          kind: 'hebrew',
          id: 'ezek17-tendril',
          title: 'Netzer — "Tender Twig" (Branch)',
          script: 'נֵצֶר',
          translit: '<strong>Netzer</strong> · a tender twig, a shoot, a branch; also "to watch, to guard"',
          description:
            'Netzer means a young shoot—something fresh, fragile, full of potential. Isaiah 11:1 uses this word for the Branch that shall grow out of Jesse. The word carries the sense of something protected, guarded, watched over by God Himself. Not the result of human effort or political maneuvering, but of divine planting and care.',
        },
        {
          kind: 'reflection',
          id: 'ezek17-loyalty',
          prompt: 'Where do you seek security or comfort besides God? In relationships, in work, in status? What would single loyalty to God cost you?',
        },
      ],
    },

    {
      ref: 'Ezekiel 17:11–24',
      title: 'The Tender Twig of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(12, 'Say now to the rebellious house, Know ye not what these things mean? tell them, Behold, the king of Babylon is come to Jerusalem, and hath taken the king thereof, and the princes thereof, and led them with him into Babylon;'),
            plain(15, 'But he rebelled against him in sending his ambassadors into Egypt, that they might give him horses and much people. Shall he prosper? shall he escape that doeth such things? or shall he break the covenant, and be delivered?'),
            plain(22, 'Thus saith the Lord God; I will also take of the highest branch of the high cedar, and will set it; I will crop off from the top of his young twigs a tender one, and will plant it upon an high mountain and eminent:'),
            plain(23, 'In the mountain of the height of Israel will I plant it: and it shall bring forth boughs, and bear fruit, and be a goodly cedar: and under it shall dwell all fowl of every wing; in the shadow of the branches thereof shall they dwell.'),
            plain(24, 'And all the trees of the field shall know that I the Lord have brought low the high tree, have exalted the low tree, have dried up the green tree, and have made the dry tree to flourish: I the Lord have spoken it, and have done it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek17-interpret',
          html:
            'Judah&apos;s king has broken his covenant with Babylon to seek alliance with Egypt. He thought to gain freedom through divided loyalty. But God will not suffer covenant-breaking. The vine will wither. Nor will Egypt deliver. Human power is always finally insufficient. The king "rebelled against him in sending his ambassadors into Egypt...Shall he escape that doeth such things? Or shall he break the covenant, and be delivered?" The answer is no.',
        },
        {
          kind: 'commentary',
          id: 'ezek17-plant',
          html:
            'But even as judgment falls, God speaks of another planting, another twig, taken from the heights of Israel itself. Not by the hand of Babylon or Egypt. By the hand of God. "I will also take of the highest branch of the high cedar, and will set it...I will plant it upon an high mountain and eminent." This shoot will be different. It will not seek security through political alliance. It will be rooted in God&apos;s mountain, drawing strength from the source that cannot fail.',
        },
        {
          kind: 'christ',
          id: 'ezek17-christ-branch',
          title: 'Christ Connection — The Branch of Jesse',
          html:
            'Isaiah 11:1 uses identical language: "There shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of his roots." In the New Testament, Christ is repeatedly called "the Branch"—ho klados in Greek, referencing the same tender twig that Ezekiel describes. Christ is the One planted not by human power or politics, but by God Himself. He is rooted not in exile, not in displacement, but in the eternal throne of God. His faithfulness does not waver toward different masters. His trust is singular. His fruit is eternal.',
        },
        {
          kind: 'carry',
          html:
            'Judah&apos;s mistake was to trust in political leverage—seeking now Babylon, now Egypt. We repeat the error: seeking security in the world&apos;s offers, the world&apos;s power, the world&apos;s approval. Only the Branch planted by God Himself, rooted in His mountain, bringing forth fruit in His season—only that will endure. What you trust in will either wither or flourish. Choose the source that does not fail.',
        },
        {
          kind: 'reflection',
          id: 'ezek17-rooted',
          prompt: 'Imagine your life as a tree. What is it rooted in? What waters and nourishes you? Is it a source that can fail, or one that is eternal?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will take of the highest branch of the high cedar, and will set it: I will crop off from the top of his young twigs a tender one, and will plant it upon an high mountain.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 17 · Study Guide',
  },

  hasHebrew: true,
};
