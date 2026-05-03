import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 29 — Against Egypt, The Great Dragon
 *
 * Pharaoh is a great dragon lying in the midst of his rivers, saying "My river
 * is mine own, and I have made it for myself." But God will put hooks in his
 * jaws and drag him into the wilderness. His confidence in his own rivers, his
 * own power, his own creation—all will be stripped away. Egypt will be
 * desolate, impoverished, cast down to the lowest place. Yet even in judgment,
 * God promises restoration: "I will gather the Egyptians from the people whither
 * they were scattered." The judgment is not permanent. But it is thorough.
 * Power based on self-sufficiency and resistance to God cannot endure.
 */
export const EZEKIEL_29: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 29,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Ezekiel 29 turns to Egypt—the ancient superpower, refuge and temptation for those Judah wanted to ally with. Pharaoh is imaged as a great dragon (or crocodile, leviathan) lying in the midst of the Nile, claiming ownership: "My river is mine own." Egypt believes her power is rooted in the Nile—her own resources, her own creation. She looks to no god. She bows to no power. But God will show that even Pharaoh&apos;s greatest sources of strength are not his own.',
    'The judgment is fierce: God will put hooks in Pharaoh&apos;s jaws and drag him forth. Egypt will be abandoned, impoverished, scattered. But the prophecy also contains hope: Egypt will be restored. The judgment is not permanent extinction, but the breaking of pride so that restoration can come.',
  ],

  sections: [
    {
      ref: 'Ezekiel 29:1–9',
      title: 'Pharaoh, The Great Dragon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(3, 'Speak, and say, Thus saith the Lord God; Behold, I am against thee, Pharaoh king of Egypt, the great dragon that lieth in the midst of his rivers, which hath said, My river is mine own, and I have made it for myself.'),
            plain(4, 'But I will put hooks in thy jaws, and I will cause the fish of thy rivers to stick unto thy scales, and I will bring thee up out of the midst of thy rivers, and all the fish of thy rivers shall stick unto thy scales.'),
            plain(5, 'And I will leave thee thrown into the wilderness, thee and all the fish of thy rivers: thou shalt fall upon the open fields; thou shalt not be brought together, nor gathered: I have given thee for meat to the beasts of the field and to the fowls of the heavens.'),
            plain(7, 'And all the inhabitants of Egypt shall know that I am the Lord, because they have been a staff of reed to the house of Israel.'),
            plain(9, 'Therefore, behold, I am against thee, and against thy rivers, and I will make the land of Egypt utterly waste and desolate, from the tower of Syene even unto the border of Ethiopia.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek29-dragon',
          html:
            'Pharaoh claims: "My river is mine own, and I have made it for myself." Egypt&apos;s power rests on the Nile—its flooding, its fertility, its bounty. Pharaoh imagines this power is his own creation, his own possession. He has no need for God. The Nile will sustain him eternally. But God says: "I am against thee." What Pharaoh believes he owns and has made is actually in God&apos;s hands.',
        },
        {
          kind: 'commentary',
          id: 'ezek29-hooks',
          html:
            '"But I will put hooks in thy jaws, and I will cause the fish of thy rivers to stick unto thy scales, and I will bring thee up out of the midst of thy rivers." The great dragon will be dragged forth—humiliated, exposed, rendered powerless. He will be left in the wilderness, food for beasts and birds. Egypt will know—"all the inhabitants of Egypt shall know that I am the Lord"—that their power is not their own, that the river is not theirs, that Pharaoh is not god.',
        },
        {
          kind: 'hebrew',
          id: 'ezek29-dragon-tannin',
          title: 'Tannin — "Dragon" (Great Sea Creature)',
          script: 'תַּנִּין',
          translit: '<strong>Tannin</strong> · dragon, great sea creature, leviathan',
          description:
            'Tannin suggests a creature of power and chaos—something wild, resistant to control. Pharaoh, imaged as a tannin in the midst of his rivers, represents power that has not submitted to God&apos;s order. The hooks in his jaws will bring him into subjection.',
        },
        {
          kind: 'reflection',
          id: 'ezek29-rivers',
          prompt: 'What "rivers" do you claim as your own—sources of security you trust in besides God? What would it mean to let God humble you?',
        },
      ],
    },

    {
      ref: 'Ezekiel 29:10–16, 17–21',
      title: 'Desolation and Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(10, 'Therefore, behold, I am against thee, and against thy rivers, and I will make the land of Egypt utterly waste and desolate, from the tower of Syene even unto the border of Ethiopia.'),
            plain(12, 'And I will make the land of Egypt desolate in the midst of the countries that are desolate, and her cities among the cities that are laid waste shall be desolate forty years: and I will scatter the Egyptians among the nations, and will disperse them through the countries.'),
            plain(13, 'Yet thus saith the Lord God; At the end of forty years will I gather the Egyptians from the people whither they were scattered:'),
            plain(14, 'And I will bring again the captivity of Egypt, and will cause them to return into the land of Pathros, into the land of their habitation; and they shall be there a base kingdom.'),
            plain(15, 'It shall be the basest of the kingdoms; neither shall it lift itself up any more above the nations: for I will diminish them, that they shall no more rule over the nations.'),
            plain(19, 'Therefore thus saith the Lord God; Behold, I will give the land of Egypt unto Nebuchadrezzar king of Babylon; and he shall take her multitude, and take her spoil, and take her prey; and it shall be the wages for his army.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek29-forty',
          html:
            'The judgment lasts forty years—a generation. Egypt will be utterly desolate. Its people will be scattered among the nations. But then—"At the end of forty years will I gather the Egyptians from the people whither they were scattered"—God will gather them back. Egypt will be restored. But not as a great power. "It shall be the basest of the kingdoms; neither shall it lift itself up any more above the nations."',
        },
        {
          kind: 'commentary',
          id: 'ezek29-humbled',
          html:
            'Egypt&apos;s restoration is not a return to glory. It is a return to a humbled state. The dragon has been broken. Pharaoh will no longer claim "My river is mine own." Egypt will know that her power, if any remains, is from God, not from herself. This is the purpose of judgment: not to destroy permanently, but to break pride so that humility can take root.',
        },
        {
          kind: 'christ',
          id: 'ezek29-christ-leviathan',
          title: 'Christ Connection — Christ Over Leviathan',
          html:
            'Scripture speaks of Christ as Lord over Leviathan—the great sea creature, the symbol of chaos and untamed power (Psalm 104:26; Job 41). In the Cross, Christ subdues all powers that claim independence from God. Every Pharaoh, every dragon claiming "My river is mine own," is subject to His authority. The ultimate victory over pride and self-sufficiency is Christ&apos;s.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of Pharaohs—those who claim mastery over their own rivers, who build empires on the claim that they have made all this for themselves. But judgment comes. Yet judgment is not the final word. Restoration is promised. If we will humble ourselves, if we will let the hooks be placed and draw us away from our false security, we can be restored to a right relationship with God.',
        },
        {
          kind: 'reflection',
          id: 'ezek29-restore',
          prompt: 'What would restoration look like for you? What would it mean to return from exile—from the scattered place where pride has taken you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thus saith the Lord God; Behold, I am against thee, Pharaoh king of Egypt, the great dragon that lieth in the midst of his rivers, which hath said, My river is mine own.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 29 · Study Guide',
  },

  hasHebrew: true,
};
