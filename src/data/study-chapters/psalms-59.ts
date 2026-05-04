import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_59: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 59,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Michal Watching David from/i,
    caption: 'Psalms 59',
  },
  intros: [
    'Saul&apos;s jealousy of David had become pathological. He posted men outside David&apos;s house to capture him when he left. But David&apos;s wife Michal, daughter of Saul, helped him escape through a window. She then put a teraphim (an idol or image) in the bed, covered it with a garment, and told Saul&apos;s men that David was sick. By the time they discovered the deception, David was gone.',
    'Psalm 59 is David&apos;s prayer when Saul&apos;s watchers hunted him. And the remarkable thing about this prayer is its tone. David does not panic. He does not despair. Instead, he views his pursuers with almost amused detachment. "Thou, O Lord, shalt laugh at them; thou shalt have all the heathen in derision." God laughs at the schemes of men. God holds the nations in derision. What seems to David&apos;s enemies[res:sefaria-psalms-59] like a serious threat is to God a matter of light mockery.',
  ],

  sections: [
    {
      ref: 'Psalm 59:1–7',
      title: 'Hunted but Safe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 59,
          lines: [
            plain(1, 'Deliver me from mine enemies, O my God: defend me from them that rise up against me.'),
            plain(2, 'Deliver me from the workers of iniquity, and save me from bloody men.'),
            plain(3, 'For, lo, they lie in wait for my soul: the mighty are gathered against me; not for my transgression, nor for my sin, O Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-59-78mid-1',
          html:
            'Urgent petition for rescue from enemies shifts to confidence in deliverance and vow of praise. Prayer moves toward promise[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'scripture',
          chapter: 59,
          lines: [
            plain(4, 'They run and prepare themselves without my fault: awake to help me, and behold.'),
            plain(5, 'Thou therefore, O Lord God of hosts, the God of Israel, awake to punish all the heathen: be not merciful to any wicked transgressors. Selah.'),
            plain(6, 'They return at evening: they make a noise like a dog, and go round about the city.'),
            plain(7, 'Behold, they belch out with their mouth: swords are in their lips: for who, say they, doth hear?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms59-no-fault',
          html: '"For, lo, they lie in wait for my soul: the mighty are gathered against me; not for my transgression, nor for my sin, O Lord." David makes clear: this persecution is not punishment for wrongdoing. Saul has no just cause. His jealousy is baseless. His rage is unjust.',
        },
        {
          kind: 'hebrew',
          id: 'psalms59-yalom',
          title: 'Yalom — "Lie in wait"',
          script: 'יָלַן',
          translit: '<strong>Yalom</strong> · to stay; to lodge; to wait; to ambush',
          description: 'The Hebrew yalom conveys the idea of lying in wait, of remaining hidden and ready to ambush. The wicked gather in the night[res:bible-odyssey-night-guard], waiting for their prey.',
        },
        {
          kind: 'commentary',
          id: 'psalms59-like-dog',
          html: '"They return at evening: they make a noise like a dog, and go round about the city." David&apos;s enemies are like scavenging dogs, circling the city at nightfall. Their noise is meant to intimidate. But the image also diminishes them: they are dogs, not warriors.',
        },
        {
          kind: 'commentary',
          id: 'psalms59-belch-out',
          html: '"Behold, they belch out with their mouth: swords are in their lips: for who, say they, doth hear?" They speak violence. Their lips are weapons. And they think no one hears—no one sees. They act as if they can do whatever they wish, answer to no one, face no judgment. But they are mistaken.',
        },
        {
          kind: 'christ',
          id: 'psalms59-christ-sovereignty',
          title: 'Christ Connection — God Laughs',
          html: 'In Psalm 2, the psalmist speaks of the nations raging against God&apos;s anointed, plotting and scheming, utterly unaware that "He that sitteth in the heavens shall laugh: the Lord shall have them in derision." Christ came to an earth hostile to His message. The powers of darkness conspired against Him. Yet His resurrection and ascension revealed what was true all along: His Father&apos;s sovereignty was unshakeable.',
        },
        {
          kind: 'carry',
          html: 'Psalm 59 offers the believer a profound perspective on opposition and persecution. The attacks may be real, the danger may be genuine, but they are ultimately insignificant. God sees them. God laughs at them. God will overcome them.',
        },
        {
          kind: 'reflection',
          id: 'psalms59-mighty-gathered',
          prompt: 'What enemies or opposition do you face? How does the image of God laughing at human schemes change your perspective on them?',
        },
      ],
    },

    {
      ref: 'Psalm 59:8–17',
      title: 'Strength in God Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 59,
          lines: [
            plain(8, 'But thou, O Lord, shalt laugh at them: thou shalt have all the heathen in derision.'),
            plain(9, 'Because of his strength will I wait upon thee: for God is my defence.'),
            plain(10, 'The God of my mercy shall prevent me: God shall let me see my desire upon mine enemies.'),
            plain(16, 'But I will sing of thy power; yea, I will sing aloud of thy mercy in the morning: for thou hast been my defence and refuge in the day of my trouble.'),
            plain(17, 'Unto thee, O my strength, will I sing: for God is my defence, and the God of my mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms59-god-laugh',
          html: '"But thou, O Lord, shalt laugh at them: thou shalt have all the heathen in derision." This is David&apos;s inversion of the fear he might naturally feel. His enemies laugh at him, threaten him, hunt him. But God laughs at them. God views them with derision.',
        },
        {
          kind: 'commentary',
          id: 'psalms59-wait-upon',
          html: '"Because of his strength will I wait upon thee: for God is my defence." David will wait. Not passively, but actively. He waits upon God&apos;s strength. He does not rush to his own defense or raise his own hand. He waits for God to act.',
        },
        {
          kind: 'commentary',
          id: 'psalms59-prevent-mercy',
          html: '"The God of my mercy shall prevent me: God shall let me see my desire upon mine enemies." God will go before David. God will show him the defeat of his enemies. Not so that David may gloat, but so that he may see God&apos;s righteousness vindicated.',
        },
        {
          kind: 'commentary',
          id: 'psalms59-sing-power',
          html: '"I will sing of thy power; yea, I will sing aloud of thy mercy in the morning: for thou hast been my defence and refuge in the day of my trouble." In the morning—after the dark night of being hunted—David will sing. His song will be of God&apos;s power and mercy.',
        },
        {
          kind: 'carry',
          html: 'Psalm 59 teaches that our strength is not in our own hands, but in God&apos;s. We are safe not because our enemies are weak, but because God is strong. We can wait calmly, even when hunted, because we have entrusted ourselves to God&apos;s protection.',
        },
        {
          kind: 'reflection',
          id: 'psalms59-sing-morning',
          prompt: 'What dark night are you currently in? Can you imagine singing in the morning about God&apos;s power and mercy?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But thou, O Lord, shalt laugh at them: thou shalt have all the heathen in derision.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 59 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-59',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 59 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.59',
      description: 'Prayer against enemies with medieval Jewish exegesis.',
    },
    {
      id: 'bible-odyssey-night-guard',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Night Vigilance & Prayer',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms of night watch and protection from nocturnal threats.',
    },
    {
      id: 'bibleodyssey-psalter-laments',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Laments in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/laments/',
      description: 'SBL essay on the lament-psalm form and its function in giving voice to grief, complaint, and trust.',
    },

  ],

  hasHebrew: true,
};
