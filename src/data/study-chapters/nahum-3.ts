import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nahum 3 — Woe to Bloody Nineveh
 *
 * Nahum pronounces woe on the bloody city. Nineveh is likened to No-Amon,
 * the great Egyptian city, which also fell. There is no remedy for her plague.
 */
export const NAHUM_3: RichChapterContent = {
  bookSlug: 'nahum',
  bookName: 'Nahum',
  chapter: 3,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'The final chapter of Nahum opens with condemnation of the "bloody city." Nineveh is full of lies and prey. She makes profit from the exploitation of others. She is a harlot city, using seduction and violence to entrap others. And Nahum declares that no remedy exists for her plague. Her wound is incurable.',
    'To convince Nineveh that her fall is certain and irreversible, Nahum points to the example of No-Amon—the great Egyptian city. No-Amon was strong, was full of people, was surrounded by allies. Yet she fell. If the mighty No-Amon could fall, how much more will Nineveh? The lesson is clear: no city, no empire, no power is permanent. All fall before God&apos;s judgment.',
  ],

  sections: [
    {
      ref: 'Nahum 3:1–7',
      title: 'The Bloody City Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Woe to the bloody city! it is all full of lies and robbery; the prey departeth not;'),
            plain(2, 'The noise of a whip, and the noise of the rattling of the wheels, and of the pransing horses, and of the jumping chariots.'),
            plain(3, 'The horseman lifteth up both the bright sword and the glittering spear: and there is a multitude of slain, and a great number of carcases; and there is none end of their corpses; they stumble upon their corpses:'),
            plain(4, 'Because of the multitude of the whoredoms of the wellfavoured harlot, the mistress of witchcrafts, that selleth nations through her whoredoms, and families through her witchcrafts.'),
            plain(5, 'Behold, I am against thee, saith the Lord of hosts; and I will discover thy skirts upon thy face, and I will shew the nations thy nakedness, and the kingdoms thy shame.'),
            plain(6, 'And I will cast abominable filth upon thee, and make thee vile, and will set thee as a gazingstock.'),
            plain(7, 'And it shall come to pass, that all they that look upon thee shall flee from thee, and say, Nineveh is laid waste: who will bemoan her? whence shall I seek comforters for thee?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum3-bloody',
          html:
            'The description is relentless. The city is full of lies and robbery. Bodies heap upon bodies. The whip cracks and horses prance—this is the sound of violence made routine, of oppression as normal practice. The multitude of the slain is not just unfortunate collateral damage. It is the inevitable result of how the city has chosen to live.',
        },
        {
          kind: 'hebrew',
          id: 'nahum3-zenut',
          title: 'Zenut — "Whoredoms"',
          script: 'זְנוּת',
          translit: '<strong>Zenut</strong> · whoredoms; harlotry; infidelity',
          description:
            'Nineveh is compared to a harlot who sells nations through her alliances and witchcrafts. The infidelity is not sexual but political and spiritual—a turning away from the covenant, a selling of allegiances to the highest bidder.',
        },
        {
          kind: 'christ',
          id: 'nahum3-christ-just-judgment',
          title: 'Christ Connection — God&apos;s Just Judgment',
          html:
            'In Revelation 17-18, a harlot city (symbolically Babylon) is judged and destroyed by God. The judgment is described in similarly harsh language. Christ is the Judge who will make all wickedness known and will shame those who have operated in secrecy.',
        },
        {
          kind: 'carry',
          html:
            'The exposure of Nineveh&apos;s wickedness is not mere humiliation. It is a necessary part of justice. Hidden evil cannot be remedied. Only when exposed, condemned, and removed can healing begin.',
        },
        {
          kind: 'reflection',
          id: 'nahum3-exposed',
          prompt: 'Are there hidden things in your life that need to be exposed and addressed? What would it take to bring them into the light?',
        },
      ],
    },

    {
      ref: 'Nahum 3:8–19',
      title: 'No-Amon and the Certainty of Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(8, 'Art thou better than populous No-amon, that was situate among the rivers, that had the waters round about it, whose rampart was the sea, and her wall was from the sea?'),
            plain(9, 'Ethiopia and Egypt were her strength, and it was infinite; Put and Lubim were thy helpers.'),
            plain(10, 'Yet was she carried away, she went into captivity: her young children also were dashed in pieces at the top of every street: and they cast lots for her honourable men, and all her great men were bound in chains.'),
            plain(11, 'Thou also shalt be drunken: thou shalt be hid, thou also shalt seek strength because of the enemy.'),
            plain(12, 'All thy strong holds shall be like fig trees with the firstripe figs: if they be shaken, they shall even fall into the mouth of the eater.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum3-unshakeable',
          html: 'Nineveh thinks her strongholds are unshakeable. But they are like fig trees with early-ripe fruit — when shaken, they fall into the mouth of the eater. All her fortifications will crumble. All her defenses will fail. This is what judgment on a city looks like in the biblical imagination.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'Behold, thy people in the midst of thee are women: the gates of thy land shall be set wide open unto thine enemies: the fire shall devour thy bars.'),
            plain(14, 'Draw thee waters for the siege, fortify thy strong holds: go into clay, and tread the morter, make strong the brick kiln.'),
            plain(15, 'There shall the fire devour thee; the sword shall cut thee off, it shall eat thee up like the cankerworm: make thyself many as the cankerworm, make thyself many as the locusts.'),
            plain(16, 'Thou hast multiplied thy merchants above the stars of heaven: the cankerworm spoileth, and flieth away.'),
            plain(17, 'Thy crowned are as the locusts, and thy captains as the great grasshoppers, which camp in the hedges in the cold day, but when the sun ariseth they flee away, and their place is not known where they are.'),
            plain(18, 'Thy shepherds slumber, O king of Assyria: thy nobles shall dwell in the dust: thy people is scattered upon the mountains, and no man gathereth them.'),
            plain(19, 'There is no healing of thy bruise; thy wound is grievous: all that hear the bruit of thee shall clap the hands over thee: for upon whom hath not thy malice passed continually?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum3-gates-open',
          html:
            'Nineveh&apos;s gates will be set wide open to her enemies. Fire will devour her bars. The symbols of strength and security will be consumed. The merchant city, wealthy and proud, will be conquered and burned. The finality is absolute.',
        },
        {
          kind: 'commentary',
          id: 'nahum3-healing',
          html:
            '"There is no healing of thy bruise; thy wound is grievous." The judgment is final. There is no remedy. No amount of fortification, no number of merchants, no military strength will change the outcome. The wound is incurable because God Himself is against Nineveh.',
        },
        {
          kind: 'christ',
          id: 'nahum3-christ-just',
          title: 'Christ Connection — God&apos;s Justice Is Complete',
          html:
            'The finality of judgment is part of God&apos;s justice. In Matthew 25, Jesus says to those on His left hand, "Depart from me, ye cursed, into everlasting fire." There is a point of no return, a judgment that cannot be reversed.',
        },
        {
          kind: 'carry',
          html:
            'All nations that have been built on violence and exploitation will eventually fall. There is no permanent kingdom except God&apos;s. All other powers rise and fall. This should humble us and remind us to build our lives on God, not on earthly power or wealth.',
        },
        {
          kind: 'reflection',
          id: 'nahum3-permanent',
          prompt: 'What are you building your life on? Is it something that will fall, or something rooted in God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Woe to the bloody city! it is all full of lies and robbery...There is no healing of thy bruise; thy wound is grievous.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nahum 3 · Study Guide',
  },

  hasHebrew: true,
};
