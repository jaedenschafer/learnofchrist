import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 9 — Praise for God&apos;s Judgment and Mercy
 *
 * David sings of God&apos;s judgment upon the nations. "The Lord also will be a
 * refuge for the oppressed, a refuge in times of trouble." While the wicked are
 * brought low, the righteous find shelter. God is both judge of injustice and
 * refuge for the afflicted. The psalm moves from celebration of judgment to
 * affirmation that those who seek God will never be abandoned.
 */
export const PSALMS_9: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 9,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 9',
  },
  intros: [
    'Psalm 9 celebrates God&apos;s judgment of the nations. David does not sing in detachment but from experience. He has seen God&apos;s judgment fall upon those who would destroy the righteous. He has experienced God&apos;s mercy as a shield against their hatred. The psalm opens with thanksgiving[res:sefaria-psalms-9]—"I will praise[res:bible-odyssey-thanksgiving-psalms] thee, O Lord, with my whole heart"—and moves into a double refrain: God judges the wicked and saves the oppressed.',
    'What makes this psalm remarkable is that it does not pit justice against mercy. Instead, it shows them as two faces of the same reality. God&apos;s judgment on the wicked is the same action by which He saves the oppressed. To break the power of those who oppress is to free those who suffer. The refuge the righteous find in God comes precisely because God is willing to judge.',
  ],

  sections: [
    {
      ref: 'Psalm 9:1–6',
      title: 'The Lord Who Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'I will praise thee, O Lord, with my whole heart; I will shew forth all thy marvellous works.'),
            plain(2, 'I will be glad and rejoice in thee: I will sing praise to thy name, O thou most High.'),
            plain(3, 'When mine enemies are turned back, they shall fall and perish at thy presence.'),
            plain(4, 'For thou hast maintained my right and my cause; thou satest in the throne of judgment.'),
            plain(5, 'Thou hast rebuked the heathen, thou hast destroyed the wicked, thou hast put out their name for ever and ever.'),
            plain(6, 'O thou enemy, destructions are come to a perpetual end: and thou hast destroyed cities; their memorial is perished with them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps9-praise',
          html:
            'David opens with wholehearted thanksgiving. "With my whole heart"—not half-hearted, not cautious, but full-throated praise. He will "shew forth all thy marvellous works." This is not private gratitude. It is proclamation. The marvellous works of God—His acts of judgment and salvation—deserve to be told and retold[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'ps9-enemies',
          html:
            'The enemies turn back. They fall and perish at God&apos;s presence. This is not because of David&apos;s strength but because of God&apos;s. David can celebrate without boasting because he knows the victory comes from the throne room of God, not from the sword of man.',
        },
        {
          kind: 'hebrew',
          id: 'ps9-mishpat',
          title: 'Mishpat — "Right" / "Judgment"',
          script: 'מִשְׁפָּט',
          translit: '<strong>Mishpat</strong> · judgment; justice; right; ordinance',
          description:
            'Mishpat is not merely the pronouncement of judgment. It is the vindication of what is right. God has "maintained" David&apos;s mishpat—He has established what is rightful, He has made clear who is in the right.',
        },
        {
          kind: 'commentary',
          id: 'ps9-rebuked',
          html:
            'God has rebuked the heathen and destroyed the wicked. He has blotted out their names. This is the opposite of what the wicked desired—they wanted their names remembered forever, their kingdoms eternal. Instead, their memory perishes with them. God&apos;s judgment is not merely the destruction of their power but the erasure of their legacy.',
        },
        {
          kind: 'carry',
          html:
            'When you are oppressed or falsely accused, it is easy to believe that the wicked will triumph forever. The power they wield seems permanent. But the psalm insists on a different reality: Their names will be put out forever. Their empires will fall. God&apos;s judgment is sure. You do not need to take revenge. You need only to entrust your cause to God.',
        },
      ],
    },

    {
      ref: 'Psalm 9:7–20',
      title: 'Refuge for the Oppressed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(7, 'But the Lord shall endure for ever: he hath prepared his throne for judgment.'),
            plain(8, 'And he shall judge the world in righteousness, and he shall minister judgment to the people in uprightness.'),
            plain(9, 'The Lord also will be a refuge for the oppressed, a refuge in times of trouble.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-9-78mid-1',
          html:
            'The psalmist stops praising and starts begging. Joy in remembrance turns to urgent prayer against enemies.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(10, 'And they that know thy name will put their trust in thee: for thou, Lord, hast not forsaken them that seek thee.'),
            plain(11, 'Sing praises to the Lord, which dwelleth in Zion: declare among the people his doings.'),
            plain(12, 'When he maketh inquisition for blood, he remembereth them: he forgetteth not the cry of the humble.'),
            plain(13, 'Have mercy upon me, O Lord; consider my trouble which I suffer of them that hate me, thou that liftest me up from the gates of death:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps9-mid-shift',
          html:
            'The psalm shifts from universal truth to personal prayer. God&apos;s judgment is eternal and trustworthy—that is the foundation. Now the psalmist speaks his own need: have mercy on me. From the cosmic vision, the camera zooms to the individual cry.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(14, 'That I may shew forth all thy praise in the gates of the daughter of Zion: I will rejoice in thy salvation.'),
            plain(15, 'The heathen are sunk down in the pit that they made: in the net which they hid is their own foot taken.'),
            plain(16, 'The Lord is known by the judgment which he executeth: the wicked is snared in the work of his own hands. Higgaion. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-9-78mid-2',
          html:
            'The psalmist stops praising and starts begging. Joy in remembrance turns to urgent prayer against enemies.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(17, 'The wicked shall be turned into hell, and all the nations that forget God.'),
            plain(18, 'For the needy shall not alway be forgotten: the expectation of the poor shall not perish for ever.'),
            plain(19, 'Arise, O Lord; let not man prevail: let the heathen be judged in thy sight.'),
            plain(20, 'Put them in fear, O Lord: that the nations may know themselves to be but men. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps9-endure',
          html:
            'While kingdoms fall, "the Lord shall endure for ever." While human judges are corruptible, God has prepared His throne for judgment—a judgment that will never be overturned. He will judge the world in righteousness and minister judgment in uprightness. The very qualities that earthly judges lack, the heavenly judge possesses perfectly.',
        },
        {
          kind: 'commentary',
          id: 'ps9-refuge',
          html:
            'Here is the heart of the psalm: "The Lord also will be a refuge for the oppressed, a refuge in times of trouble." God is not merely the judge who destroys the wicked. He is the refuge who saves the righteous. The same God who brings judgment on oppressors is the one who shelters the oppressed. These are not separate acts but one.',
        },
        {
          kind: 'commentary',
          id: 'ps9-know',
          html:
            '"They that know thy name will put their trust in thee." To know God&apos;s name is to know His character, His faithfulness, His justice. Those who know Him in this way will trust Him. And they will not be disappointed: "thou hast not forsaken them that seek thee." Seeking God leads to finding Him. Trust in Him proves justified.',
        },
        {
          kind: 'christ',
          id: 'ps9-christ-refuge',
          title: 'Christ Connection — The Refuge',
          html:
            'Christ is the refuge for the oppressed. When He came, He came for the broken, the sinful, the rejected. "Come unto me, all ye that are weary," He says. He offers shelter not from judgment—His judgment stands—but for those who have been crushed by sin and shame. In Him, the oppressed find both forgiveness and vindication.',
        },
        {
          kind: 'commentary',
          id: 'ps9-pit',
          html:
            'The psalm returns to the theme of poetic justice. The wicked dig a pit for others and fall into it. They lay a net for the righteous and are themselves snared. This is not merely wishful thinking. It is the structure of the universe: what you sow, you will reap. Evil contains within itself the seeds of its own undoing.',
        },
        {
          kind: 'commentary',
          id: 'ps9-forget',
          html:
            '"The needy shall not alway be forgotten." This is the assurance that closes the psalm. The wicked may think their oppression is permanent. The poor may despair. But the needy will not be forever forgotten. Their expectation—their hope—shall not perish. God sees them. God remembers them. God will act.',
        },
        {
          kind: 'reflection',
          id: 'ps9-blood',
          prompt: 'What is one way God has shown Himself as a refuge in your life? How has His remembrance of the oppressed and humble changed how you view justice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord also will be a refuge for the oppressed, a refuge in times of trouble.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 9 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 9 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.9',
      description: 'Acrostic psalm of thanksgiving for victory with Jewish commentary.',
    },

  ],

  hasHebrew: true,
};
