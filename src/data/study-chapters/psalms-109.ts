import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 109 — The Imprecatory Lament
 *
 * "Hold not thy peace, O God of my praise." This is an imprecatory psalm—a prayer
 * that calls down judgment on enemies. The psalmist has been attacked, betrayed,
 * slandered. He responds with a prayer that his enemies be paid back according to
 * their deeds. Yet even within the imprecation, the psalmist appeals to God&apos;s
 * mercy for himself: "But do thou for me, O Lord." This is a psalm for those who
 * have been wronged and feel the weight of injustice.
 */
export const PSALMS_109: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 109,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  opener: {
    matchTitle: /Harley Psalter Psalm/i,
    caption: 'Psalms 109',
  },
  intros: [
    'Psalm 109 is difficult for modern readers because it is explicitly imprecatory—it asks God to bring judgment on enemies. The psalmist describes betrayal and slander in raw terms, then says: "Let his days be few; and let another take his office." Peter quotes this verse in Acts 1:20 as applying to Judas, the betrayer of Jesus. In Peter&apos;s reading, the psalm is not merely a cry for personal vengeance but a prophecy of judgment on the one who would betray the Messiah. The psalm teaches us that when we have been truly wronged, we may bring our anger and desire for justice to God, rather than taking revenge ourselves.',
    'This is not a prayer for revenge in the modern sense. It is a prayer that entrusts justice to God. The psalmist does not say, "I will destroy my enemies." He says, "O God, bring them to justice." It is a way of surrendering the need for personal vengeance to God&apos;s judgment.',
  ],

  sections: [
    {
      ref: 'Psalm 109:1–31',
      title: 'Betrayal and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 109,
          lines: [
            plain(1, 'Hold not thy peace, O God of my praise;'),
            plain(2, 'For the mouth of the wicked and the mouth of the deceitful are opened against me: they have spoken against me with a lying tongue.'),
            plain(3, 'They compassed me about also with words of hatred; and fought against me without a cause.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-109-78mid-1',
          html:
            'Accusation of the wicked gives way to imprecation and prayer for judgment. The enemy is named; God is called. [res:sefaria-psalm-109]',
        },
        {
          kind: 'scripture',
          chapter: 109,
          lines: [
            plain(4, 'For my love they are my adversaries: but I give myself unto prayer.'),
            plain(5, 'And they have rewarded me evil for good, and hatred for my love.'),
            plain(6, 'Set thou a wicked man over him: and let Satan stand at his right hand.'),
            plain(8, 'Let his days be few; and let another take his office.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps109-imprecation-to-mercy',
          html:
            'The imprecations—the curses upon the enemy—have been pronounced. The enemy has fought without cause, rewarded good with evil, hatred with love. Now the perspective shifts from imprecation to the psalmist&apos;s own appeal for mercy. The curses on the wicked are balanced by a turn toward God&apos;s grace for the sufferer.',
        },
        {
          kind: 'scripture',
          chapter: 109,
          lines: [
            plain(17, 'As he loved cursing, so let it come unto him: as he delighted not in blessing, so let it be far from him.'),
            plain(26, 'Help me, O Lord my God: O save me according to thy mercy;'),
            plain(27, 'That they may know that this is thy hand; that thou, Lord, hast done it.'),
            plain(28, 'Let them curse, but bless thou: when they arise, let them be ashamed; but let thy servant rejoice.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps109-hold-peace',
          html:
            '"Hold not thy peace, O God of my praise." The psalmist is saying: do not be silent about this injustice. Speak. Act. The complaint that follows is specific: he has been attacked with lying tongues, slandered, fought against without cause. He gave love and received hatred in return. These are not small things. These are profound betrayals.',
        },
        {
          kind: 'commentary',
          id: 'ps109-reward-evil',
          html:
            '"They have rewarded me evil for good, and hatred for my love." This is the cry of someone who has done nothing to deserve the attack. He has treated his attackers with kindness, yet they return only malice. The imprecations that follow—the curses pronounced on his enemy—are the psalmist&apos;s way of saying: this injustice must be addressed.',
        },
        {
          kind: 'hebrew',
          id: 'ps109-alel',
          title: 'Alel — "Cursing" (To Pronounce Judgment)',
          script: 'אָלַל',
          translit: '<strong>Alel</strong> · cursed; uttered imprecation; pronounced judgment',
          description:
            'The Hebrew word for cursing in this context means to pronounce judgment or imprecation. The psalmist is not wishing harm for its own sake but is invoking God&apos;s justice. The curse is a way of appealing to God: "This person has done great evil and deserves judgment."',
        },
        {
          kind: 'commentary',
          id: 'ps109-but-thou',
          html:
            'The crucial turn comes in verse 26: "But do thou for me, O Lord." The psalmist moves from imprecating his enemies to appealing for God&apos;s mercy for himself. He does not ask God to destroy his enemies out of vengeance but to act so that "they may know that this is thy hand; that thou, Lord, hast done it." The goal is not personal vindication but the recognition of God&apos;s justice.',
        },
        {
          kind: 'commentary',
          id: 'ps109-they-curse-thou-bless',
          html:
            '"Let them curse, but bless thou." This is the final prayer: while enemies speak evil, God will speak good. While enemies work against the psalmist, God will work for him. The psalmist entrusts his vindication entirely to God. He will not take revenge. He will not slander in return. He will endure the curse and wait for God&apos;s blessing.',
        },
        {
          kind: 'christ',
          id: 'ps109-christ-betrayal',
          title: 'Christ Connection — The Betrayed One',
          html:
            'Peter applies Psalm 109:8 to Judas: "His office let another take." Jesus was betrayed, slandered, attacked without cause. He was the innocent one rewarded with hatred for His love. Yet Jesus did not curse His enemies. He prayed for them: "Father, forgive them; for they know not what they do." In this, Jesus transcends the psalmist&apos;s prayer. Rather than asking God to curse His betrayer, He asks God to forgive. This is the transformation grace makes possible. [res:bible-odyssey-psalm-109]',
        },
        {
          kind: 'carry',
          html:
            'The psalm gives us permission to bring our anger about injustice to God. We need not pretend that betrayal does not hurt, that slander does not wound. We can say to God: this is wrong, and I ask that you bring justice. Yet the psalm teaches us also to surrender our need for personal vengeance. We entrust judgment to God and ask that He bless us even as others curse.',
        },
        {
          kind: 'reflection',
          id: 'ps109-betrayal-vindication',
          prompt: 'When have you been wronged or betrayed? Did you seek revenge, or did you entrust your case to God? What would it look like to truly surrender the need for vindication? [res:intertextual-psalm-109-acts-1-judas]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They have rewarded me evil for good, and hatred for my love. But do thou for me, O Lord, according to thy mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 109 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-109',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 109 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.109',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-109',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 109 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+109',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'intertextual-psalm-109-acts-1-judas',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 109 in Acts 1:20 (Judas replacement)',
      url: 'https://intertextual.bible/text/psalm-109/acts-1.20',
      description: 'New Testament connection showing how this Psalm is quoted or referenced.',
    },
  ],

  hasHebrew: true,
};
