import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nahum 2 — The Siege of Nineveh
 *
 * Vivid description of the siege and siege warfare against Nineveh.
 * The mighty city falls. God's judgment is executed.
 */
export const NAHUM_2: RichChapterContent = {
  bookSlug: 'nahum',
  bookName: 'Nahum',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Nahum paints a vivid picture of the siege of Nineveh. The attackers come with shield and sword. The gates are broken open. The city that thought itself impregnable falls. The great ones are scattered. The spoil is taken. It is a portrayal of the complete destruction of the mighty city—not as distant prophecy, but as a scene the reader can almost see unfolding.',
    'The devastation is swift and thorough. God has set His face against Nineveh, and no wall, no army, no device can stand against Him. The city that thought its strength could protect it learns that only God is strong.',
  ],

  sections: [
    {
      ref: 'Nahum 2:1–10',
      title: 'The Siege and the Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'He that dasheth in pieces is come up before thy face: keep the munition, watch the way, make thy loins strong, fortify thy power mightily.'),
            plain(2, 'For the Lord hath turned away the excellency of Jacob, as the excellency of Israel: for the emptiers have emptied them out, and marred their vine branches.'),
            plain(3, 'The shield of his mighty men is made red, the valiant men are in scarlet: the chariots shall be with flaming torches in the day of his preparation, and the fir trees shall be terribly shaken.'),
            plain(4, 'The chariots shall rage in the streets, they shall justle one against another in the broad ways: they shall seem like torches, they shall run like the lightnings.'),
            plain(5, 'He shall recount his worthy ones: they shall stumble in their walk; they shall make haste to the wall thereof, and the defence shall be prepared.'),
            plain(6, 'The gates of the rivers shall be opened, and the palace shall be dissolved.'),
            plain(7, 'And Huzzab shall be led away captive, she shall be brought up, and her maids shall lead her as with the voice of doves, tabering upon their breasts.'),
            plain(8, 'But Nineveh is of old like a pool of water: yet they shall flee away. Stand, stand, shall they cry; but none shall look back.'),
            plain(9, 'Take ye the spoil of silver, take the spoil of gold: for there is none end of the store and glory out of all the pleasant furniture.'),
            plain(10, 'She is empty, and void, and waste: and the heart melteth, and the knees smite together, and much pain is in all loins, and the faces of them all gather blackness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum2-shield',
          html:
            'The shields of Nineveh&apos;s mighty men are red—red with the blood they have spilled. The chariots move in the streets like flaming torches. This is not a clean military engagement. This is the violent destruction of a violent city, reaping what it has sown.',
        },
        {
          kind: 'hebrew',
          id: 'nahum2-piru',
          title: 'Piru — "Scattered"',
          script: 'פִּרוּ',
          translit: '<strong>Piru</strong> · scattered; dispersed; broken',
          description:
            'The great ones are scattered—not just defeated, but dispersed. The unity and structure of the city is broken. Individuals flee in all directions, and none of the walls or defenses can contain them.',
        },
        {
          kind: 'christ',
          id: 'nahum2-christ-enemies-fall',
          title: 'Christ Connection — God&apos;s Enemies Fall',
          html:
            'In Revelation 16-18, the fall of Babylon (depicted as similar to Nineveh) is described in vivid language of destruction. Christ&apos;s enemies and the enemies of His people will fall. God&apos;s judgment is sure and complete.',
        },
        {
          kind: 'carry',
          html:
            'The vivid imagery of Nineveh&apos;s fall is meant to convey a truth: those who make violence and oppression their way of life will not escape judgment. Their strength will not save them. Their walls will not protect them.',
        },
        {
          kind: 'reflection',
          id: 'nahum2-walls',
          prompt: 'What walls do you trust in for protection? What do you fear might be taken from you?',
        },
      ],
    },

    {
      ref: 'Nahum 2:11–13',
      title: 'The Destruction Complete',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(11, 'Where is the dwelling of the lions, and the feedingplace of the young lions, where the lion, even the old lion, walked, and the lion&apos;s whelp, and none made them afraid?'),
            plain(12, 'The lion did tear in pieces enough for his whelps, and strangled for his lionesses, and filled his holes with prey, and his dens with ravin.'),
            plain(13, 'Behold, I am against thee, saith the Lord of hosts, and I will burn her chariots in the smoke, and the sword shall devour thy young lions: and I will cut off thy prey from the earth, and the voice of thy messengers shall no more be heard.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nahum2-lions',
          html:
            'Nineveh is called a city of lions—savage beasts that tear prey, that fill their dens with the spoil of their violence. The image is clear: Nineveh is a predatory city, living by violence and prey. And the Lord will silence her roar.',
        },
        {
          kind: 'commentary',
          id: 'nahum2-prey',
          html:
            '"I will cut off thy prey from the earth"—the feeding time of the lion is over. Nineveh can no longer hunt and consume the nations around her. She will starve for want of prey, because there will be no more nations for her to devour.',
        },
        {
          kind: 'christ',
          id: 'nahum2-christ-judge',
          title: 'Christ Connection — Christ the Judge of All',
          html:
            '"I am against thee," God says through Nahum. In Matthew 25, Christ separates the sheep from the goats, saying to those who have devoured the vulnerable, "Depart from me." He is against those who prey on the innocent.',
        },
        {
          kind: 'carry',
          html:
            'The fall of Nineveh is final. The voice of her messengers will be heard no more. The reign of the predatory city ends. And with it, the oppression and fear she caused ends too. God restores silence and peace.',
        },
        {
          kind: 'reflection',
          id: 'nahum2-silence',
          prompt: 'What voices do you need silenced in your own life—the voices of accusation, fear, or oppression?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The gates of the rivers shall be opened, and the palace shall be dissolved...She is empty, and void, and waste.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nahum 2 · Study Guide',
  },

  hasHebrew: true,
};
