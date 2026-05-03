import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 22 — Burden of the Valley of Vision: The Key of David
 *
 * The oracle against Jerusalem speaks of its coming siege and the replacement of
 * corrupt leadership. Shebna, the steward, will be removed from office, and Eliakim
 * will be raised in his place. Upon Eliakim the key of the house of David will be
 * laid—a symbol of authority and trust. This oracle, quoted in Revelation 3:7,
 * speaks ultimately of Christ&apos;s authority and the access He gives to God&apos;s kingdom.
 */
export const ISAIAH_22: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 22,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Isaiah 22 turns judgment inward, toward Jerusalem itself. The "valley of vision" is not a place of sight but of blindness—the people see without perceiving, trust in false securities, and ignore the signs of coming judgment. Yet amidst the oracle of judgment lies a word of restoration: the corrupt steward Shebna will be cast down, and Eliakim will be raised to carry the key of the house of David—a symbol of authority given by God that speaks ultimately of Christ&apos;s eternal reign.',
    'The passage demonstrates both judgment and grace working together. Judgment falls on corruption, but it is not the final word. Authority is transferred to one who will be faithful. This pattern—judgment of the false, elevation of the true—is repeated throughout Scripture and reaches its fullness in Christ.',
  ],

  sections: [
    {
      ref: 'Isaiah 22:1–13',
      title: 'Judgment on Jerusalem: The Valley of Vision Blind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'The burden of the valley of vision. What aileth thee now, that thou art wholly gone up to the housetops?'),
            plain(2, 'Thou that art full of stirs, a tumultuous city, a joyous city: thy slain men are not slain with the sword, nor dead in battle.'),
            plain(3, 'All thy rulers are fled together, they are bound by the archers: all that are found in thee are bound together, which have fled from far.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-valley-shout',
          html:
            '<p>In the valley of vision, Jerusalem parties while enemies circle. Joy before ruin ends in wailing.[res:sefaria-isaiah-22]</p>',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(4, 'Therefore said I, Look away from me; I will weep bitterly, labour not to comfort me, because of the spoiling of the daughter of my people.'),
            plain(5, 'For it is a day of trouble, and of treading down, and of perplexity by the Lord God of hosts in the valley of vision, breaking down the walls, and of crying to the mountains.'),
            plain(6, 'And Elam bare the quiver with chariots of men and horsemen, and Kir uncovered the shield.'),
            plain(7, 'And it shall come to pass, that thy choicest valleys shall be full of chariots, and the horsemen shall set themselves in array at the gate.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah22-siege-blindness',
          html:
            'The panic is palpable: the ruler fled, the city exposed, enemies approaching. Yet the blindness is spiritual. They see the siege but not the Maker. They plan defense but forget Deliverer. Isaiah pivots from describing the siege to describing the people&apos;s failure to look to God.[res:british-museum-babylon-tyre]',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(8, 'And he discovered the covering of Judah, and thou didst look in that day to the armour of the house of the forest.'),
            plain(9, 'And ye have seen the breaches of the city of David, that they are many: and ye gathered together the waters of the lower pool.'),
            plain(10, 'And ye numbered the houses of Jerusalem, and the houses ye broke down to fortify the wall.'),
            plain(11, 'Ye made also a ditch between the two walls for the water of the old pool: but ye have not looked unto the maker thereof, neither had respect unto him that fashioned it long ago.'),
            plain(12, 'And in that day did the Lord God of hosts call to weeping, and to mourning, and to baldness, and to girding with sackcloth:'),
            plain(13, 'And behold joy and gladness, slaying oxen, and killing sheep, eating flesh, and drinking wine: let us eat and drink; for to morrow we shall die.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah22-vision',
          html:
            'The "valley of vision" is paradoxical—a place that should be a place of sight is instead a place of blindness. Jerusalem, the city of God, has gone up to the housetops in panic, its rulers fled, bound by archers, captured. The city that should trust in God trusts instead in walls and water supplies, in military preparations and fortifications[res:sefaria-isaiah-22-v1].',
        },
        {
          kind: 'commentary',
          id: 'isaiah22-grief',
          html:
            '"Therefore said I, Look away from me; I will weep bitterly." The prophet grieves not because Jerusalem faces siege, but because it faces siege while trusting in everything except God. The people look to the armor of the forest (the temple), count their provisions, break down houses to fortify walls. They do everything except turn to their Maker.',
        },
        {
          kind: 'commentary',
          id: 'isaiah22-feast',
          html:
            'The climax of this section is the people&apos;s response to the call to repentance: instead of mourning and seeking God, they feast. "Let us eat and drink; for to morrow we shall die." It is a despairing hedonism—if judgment is coming, they reason, why not enjoy what remains? Yet this is precisely the opposite of what repentance requires.',
        },
        {
          kind: 'carry',
          html:
            'The passage warns against the blindness of misplaced trust. We too can see signs of judgment—warnings from Scripture, from conscience, from circumstance—and respond not with repentance but with distraction. We too can feast while the walls crumble.',
        },
      ],
    },

    {
      ref: 'Isaiah 22:14–25',
      title: 'Shebna Removed; Eliakim and the Key of David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(14, 'And it was revealed in mine ears by the Lord of hosts, The iniquity shall not be purged from you till ye die, saith the Lord God of hosts.'),
            plain(15, 'Thus saith the Lord God of hosts, Go, get thee unto this treasurer, even unto Shebna, which is over the house, and say unto him,'),
            plain(16, 'What hast thou here? and whom hast thou here, that thou hast hewed thee out a sepulchre here, as he that heweth him out a sepulchre on high, and that graveth an habitation for himself in a rock?'),
            plain(17, 'Behold, the Lord will carry thee away with a mighty captivity, and will surely cover thee.'),
            plain(18, 'He will surely violently turn and toss thee like a ball into a large country: there shalt thou die, and there the chariots of thy glory shall be the shame of thy lord&apos;s house.'),
            plain(19, 'And I will drive thee from thy station, and from thy state shall he pull thee down.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah22-shebna-removed',
          html:
            'Shebna is driven from his station. The judgment is complete. Yet the narrative does not end in dismissal alone. The door has barely closed on one steward when another is called. Judgment of the corrupt is always simultaneous with elevation of the faithful. God never leaves His people without a leader. The transition is swift. The new begins as the old ends.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(20, 'And it shall come to pass in that day, that I will call my servant Eliakim the son of Hilkiah:'),
            plain(21, 'And I will clothe him with thy robe, and strengthen him with thy girdle, and I will commit thy government into his hand: and he shall be a father to the inhabitants of Jerusalem, and to the house of Judah.'),
            plain(22, 'And the key of the house of David will I lay upon his shoulder; so he shall open, and none shall shut; and he shall shut, and none shall open.'),
            plain(23, 'And I will fasten him as a nail in a sure place; and he shall be for a glorious throne to his father&apos;s house.'),
            plain(24, 'And they shall hang upon him all the glory of his father&apos;s house, the offspring and the issue, every small vessel, from the vessels of cups, even to all the vessels of flagons.'),
            plain(25, 'In that day, saith the Lord of hosts, shall the nail that is fastened in the sure place be removed, and be cut down, and fall; and the burden that was upon it shall be cut off: for the Lord hath spoken it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah22-shebna',
          html:
            'Shebna the treasurer, who serves over the house, is singled out for judgment. He has carved himself a sepulcher in the rock—not content with a humble grave, he has ensured for himself an ostentatious tomb befitting his inflated sense of importance. He has confused his position with his worth, his authority with his permanence. The Lord will carry him away, will toss him like a ball into a large country, and he will die in exile.',
        },
        {
          kind: 'commentary',
          id: 'isaiah22-eliakim',
          html:
            'Yet the narrative does not end with dismissal. Instead, the Lord calls His servant Eliakim. He is clothed with Shebna&apos;s robe, strengthened with his girdle. He is given Shebna&apos;s government. But there is a crucial difference: Eliakim will be "a father to the inhabitants of Jerusalem, and to the house of Judah." His authority will be exercised not in self-aggrandizement but in care.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah22-key',
          title: 'Maftiyach — "Key" (Authority; Access)',
          script: 'מַפְתִּיַּח',
          translit: '<strong>Maftiyach</strong> · key; that which opens; symbol of authority',
          description:
            'A key is not merely an object. It represents access and authority. To hold the key is to decide who enters and who remains outside. When the key of the house of David is laid upon Eliakim&apos;s shoulder, it is a symbol that authority over God&apos;s house and people is placed upon him. He opens what was closed; he closes what was open. His authority is absolute yet accountable to God.',
        },
        {
          kind: 'christ',
          id: 'isaiah22-christ-key',
          title: 'Christ Connection — The Key to the Kingdom',
          html:
            'In Revelation 3:7, the risen Christ says: "These things saith he that is holy, he that is true, he that hath the key of David, he that openeth and no man shutteth; and shutteth, and no man openeth." Christ is the true fulfillment of Eliakim, the one who holds the key of David&apos;s house—the authority to grant access to God&apos;s kingdom. In Matthew 16:19, Christ gives the keys of the kingdom to Peter, and in Matthew 18:18, He grants the authority to bind and loose to His disciples. The key of David—absolute authority to open and close—belongs to Christ alone.',
        },
        {
          kind: 'carry',
          html:
            'The removal of Shebna and the elevation of Eliakim teach us about the nature of true authority. Authority is not something to be accumulated for self-aggrandizement. It is something to be received as a stewardship—a trust to care for others and to exercise power on behalf of the One who truly rules.',
        },
        {
          kind: 'reflection',
          id: 'isaiah22-authority',
          prompt: 'What authority or influence do you exercise in your own life—in family, work, or community? Are you exercising it like Shebna, for self-glory, or like Eliakim, as a stewardship to serve others and God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And the key of the house of David will I lay upon his shoulder; so he shall open, and none shall shut; and he shall shut, and none shall open.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 22 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-22',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 22',
      url: 'https://www.sefaria.org/Isaiah.22',
      description: 'Sefaria open-access source text and translations for Isaiah 22.',
    },
    {
      id: 'british-museum-babylon-tyre',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'Babylon & Tyre: Imperial Power',
      url: 'https://www.britishmuseum.org/',
      description: 'Archaeological and textual evidence of the nations Isaiah prophesies against.',
    },
    {
      id: 'sefaria-isaiah-22-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 22 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.22',
      description: 'The Hebrew text of Isaiah 22 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
