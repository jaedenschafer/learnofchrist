import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 31 — The Cedar of Lebanon
 *
 * The prophet turns from Jerusalem&apos;s fate to Pharaoh&apos;s. Pharaoh, he says, is like
 * a cedar of Lebanon — tall, beautiful, high above all other trees. Yet pride and
 * power bring a fall. God will cut down the cedar. Even the mighty nations will
 * tremble at its crash. The lesson is clear: earthly greatness, when it bears the
 * weight of human pride, is brittle before God.
 */
export const EZEKIEL_31: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 31,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Pharaoh sits on his throne, commanding armies, controlling the flow of the Nile. He is mighty. His name is known. He has made himself great. But Ezekiel compares him not to a king, but to a tree — a magnificent cedar of Lebanon that stood in the garden of God itself, so tall and strong that all other trees envied it. Yet height and beauty and strength are not armor against pride. Pride, the prophet warns, is the fatal flaw in all earthly power.',
    'God says to Pharaoh: I will bring you down. Not because you lacked courage or cunning, but because you forgot that all height comes from me. The cedars of Lebanon will fall with you. The strangers will inherit your greatness. And all who knew you will be astonished at the swiftness of your ruin. The message is as timeless as it is stark: human grandeur, unanchored to God, is a tree destined to fall.',
  ],

  sections: [
    {
      ref: 'Ezekiel 31:1–9',
      title: 'The Mighty Cedar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(1, 'And it came to pass in the eleventh year, in the third month, in the first day of the month, that the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, speak unto Pharaoh king of Egypt, and to his multitude; Whom art thou like in thy greatness?'),
            plain(3, 'Behold, the Assyrian was a cedar in Lebanon with fair branches and with a shadowing shroud, and of an high stature; and his top was among the thick boughs.'),
            plain(8, 'The cedars in the garden of God could not hide him: the fir trees were not like his boughs, and the chestnut trees were not like his branches; nor any tree in the garden of God was like unto him in his beauty.'),
            plain(9, 'I have made him fair by the multitude of his branches: so that all the trees of Eden, that were in the garden of God, envied him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel31-cedar',
          html: 'The prophet does not mock Pharaoh&apos;s power. He acknowledges it. Pharaoh is like a cedar of Lebanon — tall, stately, beautiful. The comparison is not meant to be diminishing. Rather, Ezekiel is saying: look at this height, this majesty, this dominion. And yet, from the perspective of eternity, even the greatest earthly power is like a tree. And trees fall[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'commentary',
          id: 'ezekiel31-garden',
          html: 'The garden of Eden — the primeval garden where humanity began, where God walked, where creation bloomed in its fullness — is invoked here. Even in that perfect place, Ezekiel imagines, the cedar of Lebanon would have stood preeminent. Yet the fact that the prophet must imagine it in Eden is the point: Pharaoh&apos;s greatness is not in the realm of God&apos;s creation and blessing. It is in the realm of earthly power, which is fleeting[res:ezekiel-revelation-intertextual].',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel31-erez',
          title: 'Erez — "Cedar" ',
          script: 'אֶרֶז',
          translit: '<strong>Erez</strong> · cedar; the tallest, strongest tree in the ancient Near East',
          description:
            'The cedar of Lebanon was not merely tall—it was iconic. Known for its strength and durability, it was used in temple construction, in royal architecture. To compare a ruler to a cedar is to acknowledge power and prestige. But it is also to put that power in a category—a tree among trees, living and dying like all creation.',
        },
        {
          kind: 'christ',
          id: 'ezekiel31-christ-humility',
          title: 'Christ Connection — Pride Humbled',
          html: 'Christ enters not as the mightiest cedar, but as a child born in poverty, a carpenter&apos;s son, one without a place to lay His head. When faced with His hour, He does not summon legions. Instead, He kneels and washes the feet of those who follow Him. The greatest King ever born did not cling to power. His power lay precisely in His willing descent. Where Pharaoh is brought low by pride, Christ made Himself low by choice—and in that descent, redeemed all who would follow.',
        },
        {
          kind: 'carry',
          html: 'The danger Ezekiel warns of is not ambition or excellence. It is not wrong to build, to lead, to tend a kingdom or a calling. The danger is forgetting where the ability comes from. When Pharaoh looked at his cedar-height, he did not see the hand of God in it. He saw only himself. That forgetting, that self-absorption, is the flaw that brings the fall.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel31-what-height',
          prompt: 'Where do you see "cedars of Lebanon" in your own life—achievements, positions, abilities you have cultivated? Can you trace them back to God&apos;s hand in your life, or do you sense a creeping assumption that you alone built them?',
        },
      ],
    },

    {
      ref: 'Ezekiel 31:10–18',
      title: 'The Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(10, 'Therefore thus saith the Lord God; Because thou hast lifted up thyself in height, and he hath shot up his top among the thick boughs, and his heart is lifted up in his height;'),
            plain(11, 'I have therefore delivered him into the hand of the mighty one of the heathen; he shall surely deal with him: I have driven him out for his wickedness.'),
            plain(12, 'And strangers, the terrible of the nations, have cut him off, and have left him: upon the mountains and in all the valleys his branches are fallen, and his boughs are broken by all the rivers of the land; and all the people of the earth are gone down from his shadow, and have forsaken him.'),
            plain(16, 'I made the nations to shake at the sound of his fall, when I cast him down to hell with them that descend into the pit: and all the trees of Eden, the choice and best of Lebanon, all that drink water, shall be comforted in the nether parts of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel31-lifted',
          html:
            'The repeated phrase "lifted up" is the hinge of judgment. Pharaoh has lifted himself up. His heart is lifted up. In Scripture, the lifting up of oneself is the signature sin—the refusal to bow before God, the insistence on one&apos;s own preeminence. It is the sin of Satan before his fall: "I will ascend above the heights of the clouds; I will make myself like the most High." And like Satan, like every human who makes themselves the center of their own world, Pharaoh will fall.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel31-strangers',
          html:
            'God does not do the cutting himself, in Ezekiel&apos;s vision. Instead, He delivers Pharaoh to "the mighty one of the heathen"—to historical forces, to the rise and fall of nations, to the very mechanisms of power that Pharaoh trusted. The fall comes not from invisible judgment, but from the turning of the wheel of earthly politics. Pharaoh, who believed himself secure in power, is delivered to the power of others. The cedar falls to the ax.',
        },
        {
          kind: 'carry',
          html:
            'What is being mourned here is not Pharaoh himself, but the loss he represents. Even the trees of Eden will be "comforted" in the underworld to know that such height was possible and that such height could fall. It is a comfort, in a strange way, to the exiled Israelites: you have been humbled, but so will Pharaoh. The lofty are brought low. No earthly power is eternal.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel31-fall-fear',
          prompt: 'Is your fear of your own failure rooted more in losing status and power, or in losing the ability to do good? How might you reorder your ambitions to fear the right thing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Because thou hast lifted up thyself in height...I have therefore delivered him into the hand of the mighty one of the heathen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 31 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-ezekiel',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezekiel',
      url: 'https://www.bibleodyssey.org/passages/main-articles/ezekiel/',
      description: 'Peer-reviewed SBL entry on the prophet Ezekiel and the Babylonian exile.',
    },
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/text/ezekiel-40/revelation-21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    }
  ],

  hasHebrew: true,
};
