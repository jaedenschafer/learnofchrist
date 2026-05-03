import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 135 — Praise the Lord and His Mighty Acts
 *
 * "Praise ye the Lord. Praise ye the name of the Lord." The psalm opens with
 * a simple call: praise. And what provokes this praise? The Lord&apos;s power:
 * "Whatsoever the Lord pleased, that did he in heaven, and in earth." While
 * idols are deaf, blind, and dumb—made of silver and gold by human hands—the
 * living God acts. He displays His power in creation, in the exodus, in the
 * conquest of Canaan. The contrast is stark: dead matter fashioned by mortals,
 * versus the God who moves heaven and earth by His will.
 */
export const PSALMS_135: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 135,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 135 is a song of praise built on contrast. It opens with a command: "Praise ye the Lord." But this is not praise directed to a vague deity. It is praise of "the Lord," the God who bears a name, who reveals Himself through history. The psalmist then turns to the reason for this praise: the Lord&apos;s mighty acts. In heaven and on earth, whatsoever He pleased, He has done. And the psalm uses this truth as a hammer to shatter the illusion of idolatry. The idols of the nations cannot speak, cannot see, cannot hear, cannot act. They are the work of human hands, fashioned from wood and stone, silver and gold. But the God of Israel is alive, present, and active.',
  ],

  sections: [
    {
      ref: 'Psalm 135:1–7',
      title: 'The Lord Who Acts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 135,
          lines: [
            plain(1, 'Praise ye the Lord. Praise ye the name of the Lord; praise him, O ye servants of the Lord.'),
            plain(2, 'Ye that stand in the house of the Lord, in the courts of the house of our God,'),
            plain(3, 'Praise the Lord; for the Lord is good: sing praises unto his name; for it is pleasant.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-135-78mid-1',
          html:
            'Call to praise the Lord opens into recital of His mighty deeds and call to trust Him. Exhortation becomes narrative. [res:sefaria-psalm-135]',
        },
        {
          kind: 'scripture',
          chapter: 135,
          lines: [
            plain(4, 'For the Lord hath chosen Jacob unto himself, and Israel for his peculiar treasure.'),
            plain(5, 'For I know that the Lord is great, and that our Lord is above all gods.'),
            plain(6, 'Whatsoever the Lord pleased, that did he in heaven, and in earth, in the seas, and all deep places.'),
            plain(7, 'He causeth the vapours to ascend from the ends of the earth; he maketh lightnings for the rain; he bringeth the wind out of his treasuries.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm135-praise-name',
          html:
            'The opening command rings through the psalm: "Praise ye the Lord. Praise ye the name of the Lord." The repetition is not for emphasis alone. The first invocation calls for praise of the Lord Himself. The second calls for praise of His name—the revelation of who He is, how He makes Himself known to His people. To praise the Lord&apos;s name is to acknowledge what He has revealed about Himself in history, in covenant, in His mighty deeds.',
        },
        {
          kind: 'hebrew',
          id: 'psalm135-halelu',
          title: 'Halelu — "Praise" (Imperative)',
          script: 'הַלְלוּ',
          translit: '<strong>Halelu</strong> · imperative "praise" (from <em>hallal</em>, to praise, to shine)',
          description:
            'The word hallal means not merely to applaud, but to shine forth, to make prominent, to celebrate loudly. To hallel the Lord is to make His praises known, to let His character and deeds shine. This is why praise in the psalms often recounts the Lord&apos;s mighty acts—the purpose of praise is to illuminate who He is.',
        },
        {
          kind: 'commentary',
          id: 'psalm135-whatsoever-pleased',
          html:
            'Then comes the hammer: "Whatsoever the Lord pleased, that did he in heaven, and in earth, in the seas, and all deep places." This statement is breathtaking in its sweep. The Lord is not merely powerful. He is sovereign. What He wills, He accomplishes. The spheres of His rule extend from the heavens above to the depths below, from the dry land to the seas. Nothing escapes His dominion or resists His will. He is above all gods—not because there are other gods who rival Him, but because He alone possesses this kind of absolute creative and sustaining power.',
        },
        {
          kind: 'commentary',
          id: 'psalm135-sustains',
          html:
            'The psalm then gives examples of this power: He causes vapors to ascend from the ends of the earth—the very mechanisms of weather and life itself obey Him. He makes lightning for the rain. He brings wind from His treasuries. These are not magical gestures. They are the natural world functioning under the hand of its Creator. The orderliness of creation itself testifies to the will and power of God.',
        },
        {
          kind: 'christ',
          id: 'psalm135-christ-sovereign',
          title: 'Christ Connection — The Sovereign Word',
          html:
            'In Colossians 1:16–17, Paul writes of Christ: "All things were created by him, and for him: And he is before all things, and by him all things consist." The sovereignty the psalmist praises—the power to order creation, to make the heavens and earth obey His will—is the work of Christ. He is the Word through whom all things were made, and in whom all things hold together. To praise God&apos;s sovereignty over creation is ultimately to praise Christ. [res:bible-odyssey-psalm-135]',
        },
      ],
    },

    {
      ref: 'Psalm 135:8–18',
      title: 'Idols vs. the Living God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 135,
          lines: [
            plain(8, 'He smote the firstborn of Egypt, both of man and beast.'),
            plain(9, 'Who sent tokens and wonders into the midst of thee, O Egypt, upon Pharaoh, and upon all his servants.'),
            plain(10, 'Who smote great nations, and slew mighty kings;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-135-78mid-2',
          html:
            'Call to praise the Lord opens into recital of His mighty deeds and call to trust Him. Exhortation becomes narrative.',
        },
        {
          kind: 'scripture',
          chapter: 135,
          lines: [
            plain(11, 'Sihon king of the Amorites, and Og king of Bashan, and all the kingdoms of Canaan:'),
            plain(12, 'And gave their land for an heritage, an heritage unto Israel his people.'),
            plain(13, 'Thy name, O Lord, endureth for ever; and thy memorial, O Lord, throughout all generations.'),
            plain(14, 'For the Lord will judge his people, and he will repent himself concerning his servants.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm135-history-to-idols',
          html:
            'The Lord&apos;s mighty works in history are recounted: Egypt smitten, nations conquered, Canaan given as inheritance. His name endures forever, His memorial lives in every generation. Now the focus shifts from God&apos;s eternal power revealed in history to the contrast with the false gods of the nations—lifeless, helpless, a testimony to human folly.',
        },
        {
          kind: 'scripture',
          chapter: 135,
          lines: [
            plain(15, 'The idols of the heathen are but silver and gold, the work of men&apos;s hands.'),
            plain(16, 'They have mouths, but they speak not; eyes have they, but they see not;'),
            plain(17, 'They have ears, but they hear not; neither is there any breath in their mouths.'),
            plain(18, 'They that make them are like unto them: so is every one that trusteth in them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm135-history',
          html:
            'Now the psalm recalls the Lord&apos;s mighty works in Israel&apos;s history. He smote the firstborn of Egypt—a reference to the tenth plague, the exodus itself. He sent tokens and wonders into the midst of Egypt. He smote great nations and slew mighty kings, including Sihon and Og, the rulers who opposed Israel&apos;s entry into Canaan. And He gave their land to Israel as an inheritance. This is not abstract theology. This is history proclaimed, the mighty deeds of God that secure the survival and inheritance of His people.',
        },
        {
          kind: 'commentary',
          id: 'psalm135-memorial',
          html:
            '"Thy name, O Lord, endureth for ever; and thy memorial, O Lord, throughout all generations." The Lord&apos;s name—His character, His deeds—does not fade. It is not forgotten. Each generation receives it, proclaims it, and passes it on. His memory is living, active, transformative. This stands in starkest contrast to what follows.',
        },
        {
          kind: 'commentary',
          id: 'psalm135-idols',
          html:
            'Then comes the assault on idolatry: "The idols of the heathen are but silver and gold, the work of men&apos;s hands." These gods are not divine. They are artifacts. They are made of material, fashioned by human labor. And what can they do? They have mouths, but they cannot speak. They have eyes, but they cannot see. They have ears, but they cannot hear. There is no breath in them. They are dead things, made by dead hands, worshipped by those who have become spiritually dead themselves: "They that make them are like unto them: so is every one that trusteth in them."',
        },
        {
          kind: 'carry',
          html:
            'Psalm 135 poses a choice: whom will you trust? The living God who acts in history, or the dead idols of your own making? What today takes the place of the silver and gold idols of ancient nations? What do you make with your hands and then bow before? What voice do you listen to that cannot speak? What guidance do you follow from something that cannot see? The psalm&apos;s challenge is not ancient. It is immediate.',
        },
        {
          kind: 'reflection',
          id: 'psalm135-idols-today',
          prompt: 'What idols of silver and gold have you fashioned with your own hands—through your work, your ambitions, your creations? What do you trust that cannot speak, hear, or see? How might you return to trusting in the living God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Praise ye the Lord. Praise ye the name of the Lord...For the Lord is good: sing praises unto his name; for it is pleasant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 135 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-135',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 135 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.135',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-135',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 135 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+135',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
