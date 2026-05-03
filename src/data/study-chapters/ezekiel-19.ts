import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 19 — Lamentation for the Princes
 *
 * A dirge for Israel&apos;s kingly line. The prophet describes Jerusalem as a
 * lioness—strong, bearing cubs. She raises them to become young lions, fierce
 * hunters. But they are trapped—one in a pit, one taken in chains to Babylon.
 * The lioness cries out in her anguish. Israel&apos;s kings, called to be powerful
 * and protective, have been broken and led away. The lamentation is not mocking.
 * It is sorrow—the prophet mourning what should have been. Yet within this
 * mourning lies the shadow of the true Lion, the King who cannot be trapped
 * or chained, who will reign in majesty and justice.
 */
export const EZEKIEL_19: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 19,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Ezekiel 19 is a lamentation—a formal dirge sung over the dead or the dying. In this case, the prophet laments over Israel&apos;s kings. The image is tender and heartbreaking: a lioness (Jerusalem) raises her cubs (her princes and kings) to be mighty hunters, strong and fierce. But they do not fulfill their destiny. One is captured in a pit. Another is taken in chains to Babylon. The lioness cries out in anguish from her ruined home. This is the fate of what should have been leaders and protectors.',
    'The lamentation does not explain why this has happened—that explanation lies in the earlier chapters. Here, Ezekiel simply mourns the loss. But woven through the mourning is a thread of hope: there shall come a King—the Lion of Judah—who cannot be trapped, who will reign in the strength that no human king has ever known.',
  ],

  sections: [
    {
      ref: 'Ezekiel 19:1–9',
      title: 'The Lioness and Her Cubs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(2, 'Moreover take thou up a lamentation for the princes of Israel,'),
            plain(3, 'And say, What is thy mother? A lioness: she lay down among lions, she nourished her whelps among young lions.'),
            plain(4, 'And she brought up one of her whelps: it became a young lion, and it learned to catch the prey; it devoured men.'),
            plain(6, 'And he went up and down among the lions, he became a young lion: and learned to catch the prey, and devoured men.'),
            plain(7, 'And he knew their desolate palaces, and he laid waste their cities; and the land was desolate, and the fulness thereof, by the noise of his roaring.'),
            plain(8, 'Then the nations set against him on every side from the provinces, and spread their net over him: he was taken in their pit.'),
            plain(9, 'And they put him in ward in chains, and brought him to the king of Babylon: that his voice should no more be heard upon the mountains of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek19-lioness',
          html:
            'Jerusalem is a lioness—strong, fertile, capable of bearing and raising warriors. Her cubs are Israel&apos;s princes, her potential kings. She nourished them "among young lions"—in the rough school of power and conflict. And they learned to hunt, to devour, to roar and shake the land. This should be the mark of a strong kingdom: rulers who are fierce enough to protect their people.',
        },
        {
          kind: 'commentary',
          id: 'ezek19-trapped',
          html:
            'But then the reversal. "The nations set against him on every side...and spread their net over him." The mighty hunter is caught in a pit. His strength, which should have protected his people, avails nothing. He is taken in chains and brought to the king of Babylon. And in Babylon, "his voice should no more be heard upon the mountains of Israel." The roar of the young lion, which once shook the land, is silenced. Power is broken.',
        },
        {
          kind: 'hebrew',
          id: 'ezek19-lion',
          title: 'Aryeh — "Lion" (Strength, Kingship)',
          script: 'אָרְיֵה',
          translit: '<strong>Aryeh</strong> · lion; symbol of strength, majesty, kingship',
          description:
            'In Scripture, lions represent power, authority, and kingship. Judah is called a lion (Gen 49:9). The throne of David is the throne of a roaring lion. But a trapped lion, a chained lion, is a symbol of power overthrown—majesty brought low.',
        },
        {
          kind: 'reflection',
          id: 'ezek19-authority',
          prompt: 'What authority or power have you been given? Are you using it to protect and strengthen others, or are you using it for yourself?',
        },
      ],
    },

    {
      ref: 'Ezekiel 19:10–14',
      title: 'The Withered Vine, The Coming King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(10, 'Thy mother is like a vine in thy blood, planted by the waters: she was fruitful and full of branches by reason of many waters.'),
            plain(11, 'And she had strong rods for the sceptres of them that bare rule, and her stature was exalted among the thick branches; and she appeared in her height with the multitude of her branches.'),
            plain(12, 'But she was plucked up in fury, she was cast down to the ground, and the east wind dried up her fruit: her strong rods were broken and withered; the fire consumed them.'),
            plain(13, 'And now she is planted in the wilderness, in a dry and thirsty land.'),
            plain(14, 'And fire is gone out of a rod of her branches, which hath devoured her fruit, so that she hath no strong rod to be a sceptre to rule. This is a lamentation, and shall be for a lamentation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek19-vine-withered',
          html:
            'The image shifts from lioness to vine—both images of fertility and potential. Jerusalem was once fruitful, planted by great waters, growing strong with many branches. Her "strong rods" became scepters—symbols of rule. But God&apos;s fury came. The vine was plucked up, cast to the ground. The east wind dried her fruit. Her strong rods were broken. Fire consumed them. Now she is planted in the wilderness—a dry and thirsty land where nothing can flourish.',
        },
        {
          kind: 'commentary',
          id: 'ezek19-no-rod',
          html:
            '"She hath no strong rod to be a sceptre to rule." This is the final desolation—not just that kings have been broken, but that there is no king, no authority, no one to rule justly. The throne is empty. The rulership is gone. This is the depth of Ezekiel&apos;s lamentation: the people are left without a shepherd.',
        },
        {
          kind: 'christ',
          id: 'ezek19-christ-lion',
          title: 'Christ Connection — The Lion of Judah',
          html:
            'Revelation 5:5 calls Jesus "the Lion of the tribe of Judah, the Root of David." Unlike the broken young lions of Israel&apos;s line, this Lion cannot be trapped or chained. He is the Ruler promised to come when human kingship has failed. The prophet Jeremiah (23:5–6) prophesies of "a righteous Branch...and this is his name whereby he shall be called, The Lord Our Righteousness." Christ is the strong rod, the scepter that cannot be broken, the King who rules with justice and strength.',
        },
        {
          kind: 'carry',
          html:
            'Ezekiel&apos;s lamentation is not mere despair. It is the clearing away of false hope. The people cannot look to their human kings for salvation. The strong rods are broken. The vine is withered. But that very emptiness is the space where God can plant something new—not a king of this world&apos;s making, but a King from above, rooted in eternity, whose rule will never fail.',
        },
        {
          kind: 'reflection',
          id: 'ezek19-who-rules',
          prompt: 'Who or what are you looking to as your ultimate authority? What would it look like to place that trust entirely in Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thy mother is like a vine in thy blood, planted by the waters: she was fruitful and full of branches...But she was plucked up in fury, and cast down to the ground.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 19 · Study Guide',
  },

  hasHebrew: true,
};
