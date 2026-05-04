import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 74 — In the Ruins
 *
 * "O God, why hast thou cast us off for ever? why doth thine anger smoke
 * against the sheep of thy pasture?" This is a psalm of lament over the ruins
 * of the temple. The enemy has come and desecrated the sanctuary[res:sefaria-psalms-74]. And the
 * psalmist cries out, asking why God has permitted this devastation. Yet
 * beneath the lament lies a deeper faith: even in ruins, God is remembered.
 */
export const PSALMS_74: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 74,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 74',
  },
  intros: [
    'Psalm 74 arises from the desolation of catastrophe. The enemy has invaded God&apos;s sanctuary. The temple has been desecrated. "Thine enemies roar in the midst of thy congregations; they set up their ensigns for signs." The place that should be holy has been turned into a place of idolatry and violence.',
    'Yet in this desolation, the psalmist does not abandon hope. He cries out to God, reminding God of His power, of His nature, of His past deeds. "Arise, O God, plead thine own cause." The prayer is that God would act to vindicate His own name, to restore what has been desecrated, to prove that He is still the God of power and mercy.',
  ],

  sections: [
    {
      ref: 'Psalm 74:1–11',
      title: 'The Desecration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 74,
          lines: [
            plain(1, 'O God, why hast thou cast us off for ever? why doth thine anger smoke against the sheep of thy pasture?'),
            plain(3, 'Lift up thy feet unto the perpetual desolations; even all that the enemy hath destroyed in the sanctuary.'),
            plain(4, 'Thine enemies roar in the midst of thy congregations; they set up their ensigns for signs.'),
            plain(7, 'They have cast fire into thy sanctuary, they have defiled by casting down the dwelling place of thy name to the ground.'),
            plain(9, 'We see not our signs: there is no more any prophet: neither is there among us any that knoweth how long.'),
            plain(10, 'O God, how long shall the adversary reproach? shall the enemy blaspheme thy name for ever?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms74-cast',
          html: 'The psalm opens with an anguished question: "Why hast thou cast us off?" God&apos;s people feel abandoned. The enemy has destroyed what was sacred. And God seems silent. Yet the very fact that the psalmist cries out to God shows that he still believes God can answer[res:bibleodyssey-asaph].',
        },
        {
          kind: 'hebrew',
          id: 'psalms74-qaddesh',
          title: 'Qaddesh — "Sanctuary" (Holy Place)',
          script: 'קֹדֶשׁ',
          translit: '<strong>Qaddesh</strong> · sanctuary, holy place, holiness',
          description: 'The Hebrew word qaddesh refers to what is set apart for God, what is holy. The defilement of the sanctuary is not merely physical destruction. It is the violation of holiness itself.',
        },
        {
          kind: 'commentary',
          id: 'psalms74-defilement',
          html: 'The description is vivid: "They have cast fire into thy sanctuary...they have defiled by casting down the dwelling place of thy name to the ground." Not only has the building been destroyed. The very name of God has been cast down, defiled, blasphemed.',
        },
        {
          kind: 'commentary',
          id: 'psalms74-signs',
          html: 'And the spiritual consequence is profound: "We see not our signs: there is no more any prophet." When the sanctuary is destroyed, the people lose the visible signs of God&apos;s presence. There is no prophet to interpret the times. The people are left in darkness.',
        },
        {
          kind: 'christ',
          id: 'psalms74-christ-defiled',
          title: 'Christ Connection — The Defiled and Restored',
          html: 'Christ&apos;s body was treated with utter disrespect. Yet what seemed like defilement and destruction became the foundation of restoration. His resurrection transforms the place of His death from a place of shame into the source of salvation for all people.',
        },
        {
          kind: 'carry',
          html: 'If you have experienced defilement—if what was sacred to you has been violated, if you feel that God&apos;s name has been blasphemed through what has happened—you can cry out as this psalm cries out. God hears the cry against defilement. And God is a God of restoration.',
        },
        {
          kind: 'reflection',
          id: 'psalms74-defilement-lament',
          prompt: 'What sacred thing has been defiled in your experience? What would it mean to bring that grief to God and ask Him to restore what has been broken?',
        },
      ],
    },

    {
      ref: 'Psalm 74:12–23',
      title: 'Hope in Desolation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 74,
          lines: [
            plain(12, 'For God is my King of old, working salvation in the midst of the earth.'),
            plain(16, 'The day is thine, the night also is thine: thou hast prepared the light and the sun.'),
            plain(18, 'Remember this, that the enemy hath reproached, O Lord, and that the foolish people have blasphemed thy name.'),
            plain(20, 'Have respect unto the covenant: for the dark places of the earth are full of the habitations of cruelty.'),
            plain(22, 'Arise, O God, plead thine own cause: remember how the foolish man reproacheth thee daily.'),
            plain(23, 'Forget not the voice of thine enemies: the tumult of those that rise up against thee increaseth continually.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms74-king',
          html: 'The psalmist calls to mind who God is: "God is my King of old, working salvation in the midst of the earth." In the midst of desolation, the psalmist remembers that God is still King, that He is still working salvation. The desolation is real, but it is not final.',
        },
        {
          kind: 'commentary',
          id: 'psalms74-remember',
          html: 'The plea shifts: "Remember this, that the enemy hath reproached, O Lord...Remember how the foolish man reproacheth thee daily." The psalmist is asking God not to forget the blasphemy, not to ignore the reproach. God&apos;s reputation is at stake.',
        },
        {
          kind: 'commentary',
          id: 'psalms74-arise',
          html: 'And then the central prayer: "Arise, O God, plead thine own cause." Do not stand by while Your name is blasphemed. Do not allow the enemy to mock You forever. Take action. Vindicate Yourself.',
        },
        {
          kind: 'christ',
          id: 'psalms74-christ-arise',
          title: 'Christ Connection — God Arises',
          html: 'God did arise. God pleaded His own cause. Not through military force, but through Christ. In Christ&apos;s resurrection, God vindicated Himself against death, sin, and the powers of darkness. Every enemy is now subject to Him.',
        },
        {
          kind: 'carry',
          html: 'In the midst of desolation, you can remember that God is still God. You can cry out for Him to arise and vindicate Himself. And you can trust that even in the ruins, God&apos;s kingdom is at work. Restoration will come.',
        },
        {
          kind: 'reflection',
          id: 'psalms74-arise-vindicate',
          prompt: 'What situation in your life or in the world cries out for God to arise and plead His own cause? How will you trust that He will vindicate Himself?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O God, why hast thou cast us off for ever?...God is my King of old, working salvation...Arise, O God, plead thine own cause.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 74 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-74',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 74 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.74',
      description: 'Lament over temple destruction with Jewish commentary.',
    },
    {
      id: 'bible-odyssey-temple-destruction',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Temple Destruction & Renewal',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms grieving desecration[res:bible-odyssey-temple-destruction] of the sanctuary.',
    },
    {
      id: 'bibleodyssey-asaph',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Asaph and the Temple Singers',
      url: 'https://www.bibleodyssey.org/dictionary/asaph/',
      description: 'SBL entry on Asaph as appointed musician and the guild of singers responsible for these psalms.',
    },

  ],

  hasHebrew: true,
};
