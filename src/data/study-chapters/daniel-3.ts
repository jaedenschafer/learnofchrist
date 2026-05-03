import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 3 — The Furnace of Fire
 *
 * Nebuchadnezzar sets up a golden image and commands all people to fall down
 * and worship it. Shadrach, Meshach, and Abednego refuse. They are thrown into
 * the fiery furnace, heated seven times hotter than usual. Yet they walk in the
 * midst of the fire unburned. And the king sees "four men loose, walking in the
 * midst of the fire...and the form of the fourth is like the Son of God." They
 * emerge without so much as the smell of fire upon them.
 */
export const DANIEL_3: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Nebuchadnezzar makes a golden image, ninety feet high and nine feet wide, and sets it in the plain of Dura. He gathers princes, governors, captains, judges, treasurers, counselors, and sheriffs—all the rulers of the provinces—to the dedication. And he makes a decree: whoever does not fall down and worship the golden image shall be cast into the fiery furnace.',
    'Certain Chaldeans come before the king and accuse the Jews—Shadrach, Meshach, and Abednego. They have not regarded the king&apos;s commandment. They serve not the king&apos;s gods, nor do they worship the golden image. Nebuchadnezzar summons them. He offers them one more chance: fall down and worship, or be cast into the furnace. Their answer is neither defiant nor fearful. It is the answer of men who have already laid down their lives before God. "Our God whom we serve is able to deliver us...But if not, be it known unto thee, O king, that we will not serve thy gods."',
  ],

  sections: [
    {
      ref: 'Daniel 3:14–23',
      title: 'The Three and the Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(14, 'Nebuchadnezzar spake and said unto them, Is it true, O Shadrach, Meshach, and Abednego, do not ye serve my gods, nor worship the golden image which I have set up?'),
            plain(15, 'Now if ye be ready that at what time ye hear the sound of the cornet, flute, harp, sackbut, psaltery, and dulcimer, and all kinds of musick, ye fall down and worship the image which I have made; well: but if ye worship not, ye shall be cast the same hour into the midst of a burning fiery furnace; and who is that God that shall deliver you out of my hands?'),
            plain(16, 'Shadrach, Meshach, and Abednego, answered and said to the king, O Nebuchadnezzar, we are not careful to answer thee in this matter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-furnace-faith',
          html: '<p>The three men face the fire—but King Nebuchadnezzar sees a fourth figure walking with them. God&apos;s presence is real in the heat.</p>[res:bibleodyssey-apocalyptic]',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(17, 'If it be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of thine hand, O king.'),
            plain(18, 'But if not, be it known unto thee, O king, that we will not serve thy gods, nor worship the golden image which thou hast set up.'),
            plain(20, 'And he commanded the most mighty men that were in his army to bind Shadrach, Meshach, and Abednego, and to cast them into the burning fiery furnace.'),
            plain(23, 'And these three men, Shadrach, Meshach, and Abednego, fell down bound into the midst of the burning fiery furnace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel3-careless',
          html: '"We are not careful to answer thee in this matter." They are not anxious. They are not defensive. They have already made their choice before the question was asked. They know what they will do and what will happen to them. The fire is fierce. The furnace is heated seven times hotter than usual. The soldiers who cast them in are burned to death. But Shadrach, Meshach, and Abednego do not hesitate. They fall down bound into the fire, and their faith is absolute: God is able to deliver them. But more importantly—if God does not deliver them, they will not worship the golden image. Their faithfulness is not contingent on God&apos;s protection. It is rooted in the God they have chosen to serve, no matter what[res:ishtar-gate].',
        },
        {
          kind: 'hebrew',
          id: 'daniel3-natzal',
          title: 'Natzal — "Deliver" (Rescue)',
          script: 'נָצַל',
          translit: '<strong>Natzal</strong> · to rescue; to deliver; to snatch away from danger',
          description:
            'The word carries the image of snatching from the very mouth of peril, of pulling someone to safety in the midst of danger. When the three men say "our God is able to deliver us," they are not merely expressing hope. They are asserting that God has the power to intervene, to reach into the fire and pull them out. But the deeper truth is that faith in God&apos;s deliverance does not depend on receiving it. They will honor God even if He allows them to burn.',
        },
        {
          kind: 'commentary',
          id: 'daniel3-song',
          html: 'Ancient tradition holds that in the furnace, the three men began to sing a song of praise. Though their voices could be heard by no one in that hour, they sang. They praised God in the midst of flames hot enough to slay the soldiers who cast them in. This is the deepest kind of faithfulness—not the faithfulness that expects reward, but the faithfulness that praises God even when every circumstance suggests abandonment. It is the song of those who have given everything, who have nothing left to lose, and who have found that in that naked place, they possess everything.',
        },
      ],
    },

    {
      ref: 'Daniel 3:24–30',
      title: 'The Fourth in the Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(24, 'Then Nebuchadnezzar the king was astonied, and rose up in haste, and spake, and said unto his counsellers, Did not we cast three men bound into the midst of the fire? They answered and said unto the king, True, O king.'),
            plain(25, 'He answered and said, Lo, I see four men loose, walking in the midst of the fire, and they have no hurt; and the form of the fourth is like the Son of God.'),
            plain(26, 'Then Nebuchadnezzar came near to the mouth of the furnace of the fire: he spake, and said, Shadrach, Meshach, and Abednego, ye servants of the most high God, come forth, and come hither. Then Shadrach, Meshach, and Abednego, came forth of the midst of the fire.'),
            plain(27, 'And the princes, governors, and captains, and the king&apos;s counsellers, being gathered together, saw these men, upon whose bodies the fire had no power, nor was an hair of their head singed, neither were their coats changed, nor the smell of fire had passed on them.'),
            plain(28, 'Then Nebuchadnezzar spake, and said, Blessed be the God of Shadrach, Meshach, and Abednego, who hath sent his angel, and delivered his servants that trusted in him, and have changed the king&apos;s word, and yielded their bodies, that they might not serve nor worship any god, except their own God.'),
            plain(29, 'Therefore I make a decree, That every people, nation, and language, which speak any thing amiss against the God of Shadrach, Meshach, and Abednego, shall be cut in pieces, and their houses shall be made a dunghill: because there is no other God that can deliver after this sort.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel3-fourth',
          html: 'The king looks into the furnace and sees not three men, but four. And the form of the fourth is like the Son of God. In that fire, where all earthly power would seem to have its final say, God walks among His people. The fire does not consume them. The bonds do not hold them. They walk loose, unharmed, protected by a presence no human can account for. This is no escape from the fire. This is deliverance in the fire. God does not remove them from the trial. He stands with them in it.',
        },
        {
          kind: 'commentary',
          id: 'daniel3-trust',
          html:
            'Notice what the king observes: they "trusted in him." This is the heart of the story. Not their cleverness. Not their power. Not their status or influence. They trusted God. They yielded their bodies, refusing to bend the knee to any god but the true God. And because they trusted, God delivered them. The furnace becomes the stage upon which God&apos;s faithfulness is revealed to the entire empire. The very instrument meant to destroy them becomes the instrument of their vindication.',
        },
        {
          kind: 'christ',
          id: 'daniel3-christ-furnace',
          title: 'Christ Connection — The Grave and Resurrection',
          html:
            'The fourth figure in the fire foreshadows Christ. He walks through death itself—the ultimate fire, the ultimate furnace—unburned, unbound, alive. When we follow Christ into baptism, we die with Him in the water, and rise with Him in resurrection. We walk through the fire of suffering, persecution, temptation, and death, yet Christ walks with us. We emerge not destroyed, but refined. "Beloved, think it not strange concerning the fiery trial which is to try you...but rejoice, inasmuch as ye are partakers of Christ&apos;s sufferings" (1 Peter 4:12–13).',
        },
        {
          kind: 'carry',
          html:
            'The three men faced a choice that felt absolute: bow to the image or die. But they found that in choosing to honor God even unto death, they discovered something deeper. God showed Himself mighty in the fire. He was not distant. He was not silent. He was there, walking with them, protecting them, vindicating their faith. When we face trials, temptations, and the pressure to compromise our faith, the question is not "Will I escape this?" It is "Will I trust God in this?" And we discover that whether He delivers us from the trial or carries us through it, He is faithful.',
        },
        {
          kind: 'reflection',
          id: 'daniel3-furnace',
          prompt: 'What fire are you facing—where you feel pressure to compromise your faith? What would trusting God look like, even if deliverance does not come in the way you expect?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If it be so, our God whom we serve is able to deliver us from the burning fiery furnace...But if not, be it known unto thee, O king, that we will not serve thy gods.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 3 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-apocalyptic',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apocalyptic Literature',
      url: 'https://www.bibleodyssey.org/dictionary/apocalypse/',
      description: 'SBL entry on the apocalyptic genre exemplified by Daniel.',
    },
    {
      id: 'ishtar-gate',
      kind: 'museum',
      source: 'British Museum / Berlin Museum',
      label: 'Ishtar Gate of Babylon',
      url: 'https://www.britishmuseum.org/collection/search?q=ishtar+gate',
      description: 'Reconstructed gate from ancient Babylon, showing the city&apos;s magnificence in Daniel&apos;s era.',
    }
  ],

  hasHebrew: true,
};
