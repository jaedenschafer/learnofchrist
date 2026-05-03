import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 79 — Defiled and Awaiting Restoration
 *
 * "O God, the heathen are come into thine inheritance; thy holy temple have
 * they defiled." This psalm arises from a time of catastrophic invasion. The
 * temple—God&apos;s dwelling place—has been desecrated. The people are helpless.
 * Yet even in helplessness, they cry out to God, trusting that He will not
 * allow His name to be dishonored forever.
 */
export const PSALMS_79: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 79,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 79 is a psalm of communal lament born from the worst kind of violation. The heathen have come into Israel&apos;s inheritance. The holy temple has been defiled. The dead bodies of God&apos;s servants have been left unburied. The nation has become a reproach to its neighbors. All that was sacred has been desecrated, all that was holy has been profaned.',
    'Yet in the midst of this catastrophe, the psalmist does not curse God or turn away. Instead, he cries out to God precisely on the grounds that God&apos;s own name is at stake. How long will the nations taunt God&apos;s people? How long will enemies blaspheme God&apos;s name? The prayer is not primarily for the relief of the people, though that is included. It is for the vindication of God&apos;s name, for the restoration of what has been defiled, for the assertion of God&apos;s sovereignty over the nations that have come into His inheritance.',
  ],

  sections: [
    {
      ref: 'Psalm 79:1–9',
      title: 'The Defilement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 79,
          lines: [
            plain(1, 'O God, the heathen are come into thine inheritance; thy holy temple have they defiled; they have laid Jerusalem on heaps.'),
            plain(2, 'The dead bodies of thy servants have they given to be meat unto the fowls of the heaven, the flesh of thy saints unto the beasts of the earth.'),
            plain(5, 'How long, Lord? wilt thou be angry for ever? shall thy jealousy burn like fire?'),
            plain(9, 'Help us, O God of our salvation, for the glory of thy name: and deliver us, and purge away our sins, for thy name&apos;s sake.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms79-inheritance',
          html:
            'The psalm opens with a statement of violation. "The heathen are come into thine inheritance." This is not merely military defeat. This is sacred violation. God&apos;s own inheritance, the land He promised to His people, has been occupied by those who do not know Him. His holy temple, the dwelling place of His name, has been desecrated. [res:sefaria-psalm-79]',
        },
        {
          kind: 'hebrew',
          id: 'psalms79-tumah',
          title: 'Tumah — "Defiled" (Made Unclean)',
          script: 'טָמַא',
          translit: '<strong>Tumah</strong> · defile, make unclean, pollute, profane',
          description:
            'The Hebrew word tumah refers to ritual and spiritual uncleanness. It is not merely physical damage. It is a violation of holiness itself, a corruption of what should be set apart for God.',
        },
        {
          kind: 'commentary',
          id: 'psalms79-unburied',
          html:
            'The psalmist then describes a horror: the dead bodies of God&apos;s servants have been left unburied, given to the beasts. This is not merely disrespect. In the ancient Near Eastern worldview, the inability to bury the dead meant they could not rest, their spirits could not find peace. This is desecration extended to the most intimate level.',
        },
        {
          kind: 'commentary',
          id: 'psalms79-howlong',
          html:
            '"How long, Lord? Wilt thou be angry for ever?" The psalmist asks not for comfort, but for an end to God&apos;s apparent absence. The waiting itself has become unbearable. Yet the question is asked not in hopelessness, but in faith—the presumption that God&apos;s anger, though real, is not eternal.',
        },
        {
          kind: 'christ',
          id: 'psalms79-christ-defiled',
          title: 'Christ Connection — The Defiled and Raised',
          html:
            'Christ&apos;s body was treated with the ultimate disrespect. He was crucified outside the city. His tomb was sealed by His enemies. And yet His body was not left to the birds and beasts. He was buried, and from that burial, He rose. His resurrection is the ultimate vindication, the reversal of every defilement. What was desecrated is made holy. [res:bible-odyssey-psalm-79]',
        },
        {
          kind: 'carry',
          html:
            'If you have experienced violation—if what was sacred to you has been desecrated, if you have been stripped of dignity—you can cry out as the psalmist cries out. God hears the cry against defilement. And He is a God who restores, who vindicates, who does not leave what is broken in the hands of the enemy forever.',
        },
        {
          kind: 'reflection',
          id: 'psalms79-violation',
          prompt: 'What sacred thing has been violated in your life? What would it mean to trust that God cares about that violation as much as you do?',
        },
      ],
    },

    {
      ref: 'Psalm 79:10–13',
      title: 'The Prayer for Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 79,
          lines: [
            plain(10, 'Wherefore should the heathen say, Where is their God? let him be known among the heathen in our sight by the revenging of the blood of thy servants that is shed.'),
            plain(11, 'Let the sighing of the prisoner come before thee; according to the greatness of thy power preserve thou those that are appointed to die;'),
            plain(12, 'And render unto our neighbours sevenfold into their bosom their reproach, wherewith they have reproached thee, O Lord.'),
            plain(13, 'So we thy people and sheep of thy pasture will give thee thanks for ever: we will shew forth thy praise to all generations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms79-where',
          html:
            '"Wherefore should the heathen say, Where is their God?" The psalmist appeals to God&apos;s own reputation. The nations are asking: where is this God who claims to protect His people? The prayer is that God would vindicate Himself, would show that He is indeed God, by avenging the blood of His servants.',
        },
        {
          kind: 'commentary',
          id: 'psalms79-appointed',
          html:
            'The psalmist then prays for those "appointed to die"—those who face execution, those whose death seems certain. He asks that God preserve them, that God show His power by saving those whom the enemy has condemned.',
        },
        {
          kind: 'commentary',
          id: 'psalms79-thanks',
          html:
            'The psalm ends with a promise: if God restores His people, they will give thanks forever. They will show forth His praise to all generations. The restoration is not sought for comfort alone. It is sought that God&apos;s name might be honored, that His people might have reason to praise Him, that future generations might know what God has done.',
        },
        {
          kind: 'christ',
          id: 'psalms79-christ-restore',
          title: 'Christ Connection — Restoration Through Christ',
          html:
            'The ultimate restoration comes not through military victory or political power, but through Christ. His death on the Cross, which seemed like the ultimate defeat, is the foundation of the Church&apos;s restoration. And the Church, restored through Christ, will indeed praise God forever. Every generation will know what God has done through His Son.',
        },
        {
          kind: 'carry',
          html:
            'When you pray for restoration, you are not asking for something outside God&apos;s nature. Restoration is what God does. He takes what has been broken and defiled and makes it holy again. Your role is to wait, to pray, to hold fast to God&apos;s name, and to trust that He will act according to His own nature and glory.',
        },
        {
          kind: 'reflection',
          id: 'psalms79-generations',
          prompt: 'If God were to restore you, what would you tell future generations about His faithfulness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O God, the heathen are come into thine inheritance...So we thy people and sheep of thy pasture will give thee thanks for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 79 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-79',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 79 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.79',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-79',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 79 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+79',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
