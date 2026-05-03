import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_5: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Amos 5 contains one of the most famous passages in the book: "But let judgment run down as waters, and righteousness as a mighty stream." God does not desire elaborate worship divorced from justice. He desires righteousness.',
    'The chapter begins with a dirge — a lament: "The virgin of Israel is fallen; she shall no more rise." But immediately Amos calls Israel to seek the Lord and live. Even in judgment, there is the invitation to repent. Seek the Lord and you shall live.',
  ],

  bottomShare: {
    label: 'Share Amos 5',
    quote:
      '"Let judgment run down as waters, and righteousness as a mighty stream." God desires justice and righteousness above all offerings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 5 · Study Guide',
  },

  sections: [
    {
      ref: 'Amos 5:1–9',
      title: 'The Lament and the Call to Seek',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Hear ye this word which I take up against you, even a lamentation, O house of Israel.'),
            plain(2, 'The virgin of Israel is fallen; she shall no more rise: she is forsaken upon her land; there is none to raise her up.'),
            plain(3, 'For thus saith the Lord God; The city that went out by a thousand shall leave an hundred, and that which went forth by an hundred shall leave ten, to the house of Israel.'),
            plain(4, 'For thus saith the Lord unto the house of Israel, Seek ye me, and ye shall live:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos5-seek-and-live',
          html:
            'The funeral dirge breaks open with an invitation — <em>seek ye me, and ye shall live</em>. Even in the announcement of judgment, mercy keeps a door cracked.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(5, 'But seek not Bethel, nor enter into Gilgal, and pass not to Beer-sheba: for Gilgal shall surely go into captivity, and Bethel shall come to nought.'),
            plain(6, 'Seek the Lord, and ye shall live; lest he break out like fire in the house of Joseph, and devour it, and there be none to quench it in Bethel.'),
            plain(7, 'Ye which turn judgment to wormwood, and leave off righteousness in the earth,'),
            plain(8, 'Seek him that maketh the seven stars and Orion, and turneth the shadow of death into the morning, and maketh the day dark with night: that calleth for the waters of the sea, and poureth them out upon the face of the earth: The Lord is his name:'),
            plain(9, 'That strengtheneth the spoiled against the strong, so that the spoiled shall come against the fortress.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos5-seek',
          html:
            'Amos opens with a dirge — the virgin of Israel has fallen. Yet immediately he calls: "Seek ye me, and ye shall live." Even in judgment, God invites Israel to seek Him. The condition is clear: seek God, not the false sanctuaries of Bethel or Gilgal. Seek the God who makes the stars, who turns night to day.',
        },
        {
          kind: 'carry',
          html:
            'To seek God is to live. This is the simple, radical truth. All that matters is whether you seek Him. Not your comfort, not your accomplishments, but seeking God. What would it look like for you to seek Him with all your heart today?',
        },
        {
          kind: 'reflection',
          id: 'amos5-seek-reflection',
          prompt: '"Seek ye me, and ye shall live." What does it mean for you to seek God? How will you prioritize seeking Him above everything else?',
        },
      ],
    },

    {
      ref: 'Amos 5:10–27',
      title: 'Justice and Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(10, 'They hate him that rebuketh in the gate, and they abhor him that speaketh uprightly.'),
            plain(11, 'Forasmuch therefore as your treading is upon the poor, and ye take from him burdens of wheat: ye have built houses of hewn stone, but ye shall not dwell in them; ye have planted pleasant vineyards, but ye shall not drink wine of them.'),
            plain(12, 'For I know your manifold transgressions and your mighty sins: they afflict the just, they take a bribe, and they turn aside the poor in the gate from their right.'),
            plain(13, 'Therefore the prudent shall keep silence in that time; for it is an evil time.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos-5-78mid-1',
          html:
            'The prophet pivots from naming the wound to naming the medicine — &quot;Seek good, and not evil, that ye may live.&quot;',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(14, 'Seek good, and not evil, that ye may live: and so the Lord, the God of hosts, shall be with you, as ye have spoken.'),
            plain(15, 'Hate the evil, and love the good, and establish judgment in the gate: it may be that the Lord God of hosts will be merciful unto the remnant of Joseph.'),
            {
              number: 16,
              spans: [
                t('Therefore the Lord, the God of hosts, the Lord, saith thus; Wailing shall be in all streets; and they shall say in all the highways, Alas! alas! and they shall call the husbandman to mourning, and such as are skilful of lamentation to wailing.'),
              ],
            },
            plain(17, 'And in all vineyards shall be wailing: for I will pass through thee, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos5-woe-unjust',
          html:
            'The pronouncement of woe falls on those who oppress the poor and pervert justice. They have built houses of hewn stone but will not dwell in them. They have planted vineyards but will not drink their wine. Instead, wailing will come. Judgment takes the form of loss and sorrow. What they sought to keep, they will lose.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(18, 'Woe unto you that desire the day of the Lord! to what end is it for you? the day of the Lord is darkness, and not light.'),
            plain(19, 'As if a man did flee from a lion, and a bear met him; or went into the house, and leaned his hand on the wall, and a serpent bit him.'),
            plain(20, 'Shall not the day of the Lord be darkness, and not light? even very dark, and no brightness in it?'),
            plain(21, 'I hate, I despise your feast days, and I will not smell in your solemn assemblies.'),
            plain(22, 'Though ye offer me burnt offerings and your meat offerings, I will not accept them: neither will I regard the peace offerings of your fat beasts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos5-justice-river',
          html:
            'Burnt offerings will not save them; only justice rolling down like waters will. God refuses worship that costs less than righteousness.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(23, 'Take thou away from me the noise of thy songs; for I will not hear the melody of thy viols.'),
            {
              number: 24,
              spans: [
                t('But let judgment '),
                hp('run down as waters', 'amos5-justice'),
                t(', and righteousness as a mighty stream.'),
              ],
            },
            plain(25, 'Have ye offered unto me sacrifices and offerings in the wilderness forty years, O house of Israel?'),
            plain(26, 'But ye have borne the tabernacle of your Moloch and Chiun your images, the star of your god, which ye made to yourselves.'),
            plain(27, 'Therefore will I cause you to go into captivity beyond Damascus, saith the Lord, whose name is The God of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos5-justice',
          html:
            'The famous passage: "Let judgment run down as waters, and righteousness as a mighty stream." God does not desire sacrifice divorced from justice. He hates the feast days and solemn assemblies of those who oppress the poor and take bribes. He will not accept burnt offerings from unjust hands. What He desires is righteousness like a mighty river — unstoppable, all-flowing, transforming.',
        },
        {
          kind: 'carry',
          html:
            'You cannot worship God while you oppress the poor. You cannot offer sacrifice while you pervert justice. Righteousness is not an option — it is essential. Where are you offering God worship while neglecting justice? Where are you comfortable with injustice?',
        },
        {
          kind: 'christ',
          id: 'amos5-christ',
          title: 'Christ Connection — Righteousness as a Mighty Stream',
          html:
            '"Let judgment run down as waters, and righteousness as a mighty stream." God will not accept worship divorced from justice. Yet Christ fulfills this in a way Israel could not imagine. He becomes righteousness itself. Paul says of Him: "To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus" (Rom. 3:26). Christ is both the righteous Judge and the one who takes the place of the unjust, pouring out a stream of mercy that overwhelms all judgment. Righteousness flowing like water is His life poured out for the helpless.',
        },
        {
          kind: 'reflection',
          id: 'amos5-justice-reflection',
          prompt: 'What does it mean for you to "let judgment run down as waters"? How will you pursue righteousness as a mighty stream?',
        },
      ],
    },

    {
      ref: 'Amos 5 · All',
      title: 'Seeking Justice',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos5-theme',
          html:
            'Amos 5 teaches that justice and righteousness are the core of what God desires. Not offerings alone, but lives that reflect justice. Not worship divorced from righteousness, but religion that flows out of a heart committed to what is right.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
