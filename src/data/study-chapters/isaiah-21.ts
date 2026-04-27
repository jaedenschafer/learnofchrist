import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 21 — Burden of the Desert of the Sea: Babylon Falls
 *
 * The oracle against Babylon declares that the great power will fall. "Babylon is
 * fallen, is fallen." The vision overwhelms the prophet, and he cries out in
 * distress at what he sees. Yet this oracle is more than a word of judgment
 * against an earthly city. It points beyond itself to the final overthrow of
 * the powers of darkness and the establishment of Christ&apos;s eternal kingdom.
 */
export const ISAIAH_21: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 21,

  intros: [
    "Babylon was the greatest power of its time—a civilization of walls and splendor, renowned for its magic and divination, its confidence in its own permanence. Yet Isaiah announces its fall with a clarity that shakes him. The prophet is so overwhelmed by the vision of Babylon's judgment that he cries out in anguish and fear. His loins are filled with pain; his knees smite together. He cannot bear what he is seeing.",
    'The chapter reveals that judgment on the kingdoms of this world is not a celebration but a sobering reality. The prophet grieves the ruin that must come. Yet the oracle, echoed in Revelation 18, ultimately points beyond Babylon to the overthrow of all earthly powers that oppose God and the establishment of His kingdom that will never fall.',
  ],

  sections: [
    {
      ref: 'Isaiah 21:1–10',
      title: 'Babylon&apos;s Fall: Vision and Distress',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'The burden of the desert of the sea. As whirlwinds in the south pass through; so it cometh from the desert, from a terrible land.'),
            plain(2, 'A grievous vision is declared unto me; the treacherous dealer dealeth treacherously, and the spoiler spoileth. Go up, O Elam: besiege, O Media; all the sighing have I made to cease.'),
            plain(3, 'Therefore are my loins filled with pain: pangs have taken hold upon me, as the pangs of a woman that travaileth: I was bowed down at the hearing of it; I was dismayed at the seeing of it.'),
            plain(4, 'My heart panted, my fearfulness affrighted me: the night of my pleasure hath he turned into fear unto me.'),
            plain(5, 'Prepare the table, watch in the tower, eat, drink: arise, ye princes, and anoint the shield.'),
            plain(6, 'For thus hath the Lord said unto me, Go, set a watchman, let him declare what he seeth.'),
            plain(7, 'And he saw a chariot with a couple of horsemen, a chariot of asses, and a chariot of camels; and he hearkened diligently with much heed:'),
            plain(8, 'And he cried, A lion: My lord, I stand continually upon the watch tower in the daytime, and I am set in my ward the whole night:'),
            plain(9, 'And, behold, here cometh a chariot of men, with a couple of horsemen. And he answered and said, Babylon is fallen, is fallen; and all the graven images of her gods he hath broken unto the ground.'),
            plain(10, 'O my threshing, and the corn of my floor: that which I have heard of the Lord of hosts, the God of Israel, have I declared unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah21-whirlwind',
          html:
            'Babylon is called "the desert of the sea"—a mysterious, apt description of a city in the desert built on conquered peoples and stolen wealth. The oracle comes like a whirlwind from the south, swift and terrible. It is "a grievous vision," declaring treachery and spoiling. The prophet is asked to set up a watchman to observe the vision unfolding.',
        },
        {
          kind: 'commentary',
          id: 'isaiah21-distress',
          html:
            '"Therefore are my loins filled with pain: pangs have taken hold upon me, as the pangs of a woman that travaileth." The prophet is not detached from what he sees. He experiences it in his body—the horror, the anguish of the vision. His heart panted; fear affrighted him. "The night of my pleasure hath he turned into fear unto me." Even the comfort of night becomes a place of distress. The vision unmans him.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah21-fallen',
          title: 'Naphal — "Fallen" (Collapse; Ruin)',
          script: 'נָפַל',
          translit: '<strong>Naphal</strong> · to fall; to collapse; to be overthrown',
          description:
            'The verb is repeated with force: "Babylon is fallen, is fallen." The repetition suggests the certainty and the weight of the collapse. Naphal is not a gentle decline. It is a falling, a collapse, a coming to ruin. What was standing is now down. What was exalted is now brought low.',
        },
        {
          kind: 'commentary',
          id: 'isaiah21-watchman',
          html:
            'The passage shifts perspective. The Lord commands the prophet to set a watchman. The watchman sees a chariot approaching—possibly representing the armies of destruction, possibly the news arriving that Babylon has fallen. When the watchman cries out, his message is clear: "Babylon is fallen, is fallen; and all the graven images of her gods he hath broken unto the ground." What Babylon trusted in—her gods, her idols, her power—is shattered.',
        },
        {
          kind: 'christ',
          id: 'isaiah21-christ-babylon',
          title: 'Christ Connection — Babylon the Great Falls',
          html:
            'In Revelation 18, John sees the fall of Babylon and cries out: "Babylon the great is fallen, is fallen." The oracle of Isaiah 21 prefigures the final judgment on all earthly powers that oppose God. Christ is the One upon whose throne the eternal kingdom rests—a kingdom not built on conquest and idolatry, but on truth and justice. The fall of Babylon, repeated from Isaiah to Revelation, celebrates the triumph of Christ&apos;s kingdom over all earthly powers.',
        },
        {
          kind: 'carry',
          html:
            'The prophet&apos;s distress reminds us that judgment, though just, is not cause for gloating. The ruin of even our enemies should be met with sobriety, not celebration. We are called to witness the justice of God with reverence rather than triumph.',
        },
        {
          kind: 'reflection',
          id: 'isaiah21-judgment',
          prompt: 'When you witness or contemplate the judgment of God against evil powers and systems, what is your response? Are you moved to sober witness, as the prophet was, or to something else?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Babylon is fallen, is fallen; and all the graven images of her gods he hath broken unto the ground.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 21 · Study Guide',
  },

  hasHebrew: true,
};
