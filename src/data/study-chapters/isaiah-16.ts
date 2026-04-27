import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 16 — Burden of Moab: Mercy and the Davidic Throne
 *
 * The oracle concerning Moab continues into chapter 16, where the prophet
 * focuses on a startling promise: mercy shall establish the throne of David,
 * and judgment itself will be tempered by truth. In the midst of national
 * ruin, God offers refuge to fugitives. The passage turns from judgment to
 * grace, from devastation to the possibility of clemency for those who seek it.
 */
export const ISAIAH_16: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 16,

  intros: [
    "Isaiah 16 shifts the tone of Moab's burden from pure judgment to a more complex promise of mercy. Where chapter 15 depicted ruin spreading across the land like floodwaters, chapter 16 opens with a call for the fugitives of Moab to find shelter in Judah. The prophet describes a people stripped of their pride, their strength, and their security. Yet in this moment of absolute need, a promise emerges: God's mercy will establish the throne of David, and righteousness will govern its judgment.",
    'This is not a message of comfort for Moab alone. The elevation of David&apos;s throne as a seat of mercy and truth speaks to the longing of every generation for a ruler who will judge with compassion rather than only with power. It is a word that echoes through time toward the One who would sit upon David&apos;s throne and extend forgiveness to all nations.',
  ],

  sections: [
    {
      ref: 'Isaiah 16:1–5',
      title: 'Mercy Established on the Throne of David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'Send ye the lamb to the ruler of the land from Sela to the wilderness, unto the mount of the daughter of Zion.'),
            plain(2, 'For it shall be, that, as a wandering bird cast out of the nest, so the daughters of Moab shall be at the fords of Arnon.'),
            plain(3, 'Take counsel, execute judgment; make thy shadow as the night in the midst of the noonday; hide the outcasts; betray not him that wandereth.'),
            plain(4, 'Let mine outcasts dwell with thee, Moab; be thou a covert to them from the face of the spoiler: for the extortioner is at an end, the spoiler ceaseth, the oppressors are consumed out of the land.'),
            plain(5, 'And in mercy shall the throne be established: and he shall sit upon it in truth in the tabernacle of David, judging, and seeking judgment, and hasting righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah16-lamb',
          html:
            'The oracle opens with an instruction: send the lamb to the ruler of the land. In the context of Moab&apos;s devastation, this is a plea for refuge, a formal petition. The lamb is a tribute, yes, but more importantly it is a sign of submission and a request for protection. The fords of Arnon mark the boundary of Moab. The wandering bird "cast out of the nest" becomes an image for Moab&apos;s daughters, fleeing their homeland, seeking any shelter.',
        },
        {
          kind: 'commentary',
          id: 'isaiah16-counsel',
          html:
            '"Take counsel, execute judgment; make thy shadow as the night in the midst of the noonday." These are instructions to Judah&apos;s leadership: act wisely, judge justly, provide shelter as substantial and protective as darkness provides from the heat of noon. "Hide the outcasts; betray not him that wandereth." This is a radical command for a nation that might easily turn away the destitute. Instead, the prophet calls for protection—not charity given in passing, but refuge and covenant.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah16-mercy',
          title: 'Chesed — "Mercy" (Covenant Love)',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · mercy; kindness; covenant-love; loyalty',
          description:
            'Chesed is not sentimental pity. It is covenant-love—the steadfast, loyal commitment of one bound by oath to another. When the prophet says the throne will be established "in mercy," he means it will be grounded not in the whim of the ruler but in the enduring commitment to protect the weak and punish the wicked. This is justice anchored to love.',
        },
        {
          kind: 'christ',
          id: 'isaiah16-christ-david',
          title: 'Christ Connection — The True Davidic Throne',
          html:
            'Isaiah 16:5 speaks of mercy establishing David&apos;s throne—a throne where judgment and righteousness are not separate but one. In Luke 1:32–33, the angel Gabriel announces to Mary that her son will be given "the throne of his father David" and will "reign over the house of Jacob forever." Christ is that King whose justice is inseparable from mercy, whose judgment flows from love. To sit on David&apos;s throne in truth is to rule as Christ rules—seeking judgment, hasting righteousness, protecting the outcasts, and establishing His kingdom not by force but by the persuasive power of His own redemptive love.',
        },
        {
          kind: 'carry',
          html:
            'The promise that mercy establishes the throne invites us to consider what kind of authority we recognize and what we do with the influence we have. Do we use it to "hide the outcasts" and refuse to "betray him that wandereth," or do we turn away? Isaiah suggests that true power lies not in the ability to condemn but in the courage to shelter those who have nowhere else to turn.',
        },
        {
          kind: 'reflection',
          id: 'isaiah16-refuge',
          prompt: 'When you are undone, cast out, or wandering, where do you seek refuge? What does it mean to you that mercy—not severity—establishes the throne that judges the world?',
        },
      ],
    },

    {
      ref: 'Isaiah 16:6–14',
      title: 'The Ruin of Pride, the Longing for Stability',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(6, 'We have heard of the pride of Moab; he is very proud: even of his haughtiness, and his pride, and his wrath: but his lies shall not be so.'),
            plain(7, 'Therefore shall Moab howl for Moab, every one shall howl: for the foundations of Kir-hareseth shall ye mourn; surely they are stricken.'),
            plain(8, 'For the fields of Heshbon languish, and the vine of Sibmah: the lords of the heathen have broken down the principal plants thereof, they are come even unto Jazer, they wandered through the wilderness: her branches are stretched out, they are gone over the sea.'),
            plain(9, 'Therefore I will bewail with the weeping of Jazer the vine of Sibmah: I will water thee with my tears, O Heshbon, and Elealeh: for the shouting for thy summer fruits and for thy harvest is fallen.'),
            plain(10, 'And gladness is taken away, and joy out of the plentiful field; and in the vineyards there shall be no singing, neither shall there be shouting: the treaders shall tread out no wine in their presses; I have made their vintage shouting to cease.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah16-pride',
          html:
            'Moab&apos;s pride is not merely arrogance—it is a refusal to see reality as it is. "His lies shall not be so." The prophet speaks as though Moab believes itself invulnerable, safe in its self-sufficiency and ancient strength. But lies cannot defend against the sword. Pride cannot fortify against judgment. The passage moves from the offer of mercy in verses 1–5 to the inexorable ruin that befalls those who reject it.',
        },
        {
          kind: 'commentary',
          id: 'isaiah16-mourning',
          html:
            'The enumeration of Moab&apos;s losses—Kir-hareseth, Heshbon, Sibmah, Jazer—names not merely places but the abundance of vineyards and fields, the summer fruits and harvest that will be stripped away. This is not economic collapse alone. It is the removal of joy, the silencing of songs. Where there was celebration over the vintage, there will be silence. The treaders will not tread out wine in the presses. The "shouting to cease" means the cessation of joy itself.',
        },
        {
          kind: 'commentary',
          id: 'isaiah16-ruin',
          html:
            'What makes this passage so poignant is not merely the description of ruin but the grief the prophet himself expresses: "I will bewail with the weeping of Jazer." The speaker—and through him, perhaps the very heart of God—grieves the waste of Moab&apos;s destruction. This is not the gloating of an enemy but the sorrow of one who sees a nation unmake itself through pride.',
        },
        {
          kind: 'carry',
          html:
            'The contrast between verses 1–5 and verses 6–14 poses a stark choice: Moab could have accepted refuge, could have asked for mercy, could have lived. Instead, relying on pride and the deception that it propagates, Moab faces ruin. The passage asks every generation: what will you do with the offer of mercy? Will you humble yourself, or will you trust in lies about your own strength?',
        },
        {
          kind: 'reflection',
          id: 'isaiah16-lies',
          prompt: 'What lies do you tell yourself about your own strength or security? What would it cost you to accept refuge, to ask for help, to humble yourself before God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And in mercy shall the throne be established: and he shall sit upon it in truth in the tabernacle of David, judging, and seeking judgment, and hasting righteousness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 16 · Study Guide',
  },

  hasHebrew: true,
};
