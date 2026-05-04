import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 14 — The Fool and the Godly
 *
 * "The fool[res:sefaria-psalms-14] hath said in his heart, There is no God." The fool does not argue this
 * point. He does not reason toward it. He simply declares it as settled in his heart.
 * From this foundation of folly, all manner of corruption flows. "There is none that
 * doeth good, no, not one." Paul quotes this in Romans[res:intertextual-psalms-14-nt] 3 to show the universal need
 * for the gospel. David describes a world in moral free fall—until the Lord intervenes.
 */
export const PSALMS_14: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 14,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 14',
  },
  intros: [
    'Psalm 14 opens with a definition of folly: "The fool hath said in his heart, There is no God." This is not intellectual argument. This is settled conviction. The fool, in his heart—in the core of his being—has concluded that God does not exist. This conclusion is not the end of a reasoned journey. It is an assertion, a choice, a hardening of heart. And from this one assertion flow all the corruptions that follow.',
    'The psalm then paints a portrait of a world without God. Such a world is one of corruption, of men who have gone aside, of none who does good. Yet the psalm does not end in despair. God looks down. God sees. God will judge. The foundation of folly cannot stand against the God who sees all things.',
  ],

  sections: [
    {
      ref: 'Psalm 14:1–3',
      title: 'The Corruption of the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good.'),
            plain(2, 'The Lord looked down from heaven upon the children of men, to see if there were any that did understand, and seek God.'),
            plain(3, 'They are all gone aside, they are all together become filthy: there is none that doeth good, no, not one.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps14-fool',
          html:
            'The fool declares a fundamental negation: There is no God. This declaration is not the conclusion of doubt. It is an act of the will. He has said it in his heart—he has settled it, decided it, declared it as final. This is what folly looks like: not confused reasoning, but the deliberate shutting out of God.',
        },
        {
          kind: 'hebrew',
          id: 'ps14-nabal',
          title: 'Nabal — "Fool"',
          script: 'נָבָל',
          translit: '<strong>Nabal</strong> · fool; senseless; morally debased',
          description:
            'The Hebrew word nabal means more than intellectual stupidity. It means moral senselessness, a person who has abandoned wisdom[res:bible-odyssey-fool-psalms] and righteousness. The fool is not someone who lacks intelligence but someone who has chosen folly.',
        },
        {
          kind: 'commentary',
          id: 'ps14-corrupt',
          html:
            'And from this one declaration flows a cascade of corruption: "They are corrupt, they have done abominable works." The denial of God is not a neutral philosophical position. It has consequences. It leads to abominable works, to actions that are detestable. And the result? "There is none that doeth good." In a world without God, goodness disappears.',
        },
        {
          kind: 'commentary',
          id: 'ps14-understand',
          html:
            'God looks down from heaven to investigate: are there any who understand, any who seek God? The answer comes: all have gone aside. All have become filthy. There is none that does good, not one. This is not David expressing pessimism. This is David describing what happens when God is removed from consideration.',
        },
        {
          kind: 'carry',
          html:
            'When you abandon God—when you decide, either consciously or gradually, that God does not matter or does not exist—the consequence is not freedom. It is corruption. It is the descent into selfishness, exploitation, and the loss of any ground for goodness. True freedom comes not from rejecting God but from aligning yourself with Him.',
        },
      ],
    },

    {
      ref: 'Psalm 14:4–7',
      title: 'God Sees, God Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(4, 'Have all the workers of iniquity no knowledge? who eat up my people as they eat bread, and call not upon the Lord.'),
            plain(5, 'There were they in great fear: for God is in the generation of the righteous.'),
            plain(6, 'Ye have shamed the counsel of the poor, but the Lord is his refuge.'),
            plain(7, 'Oh that the salvation of Israel were come out of Zion! when the Lord bringeth back the captivity of his people, Jacob shall rejoice, and Israel shall be glad.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps14-workers',
          html:
            'The workers of iniquity act as though they have no knowledge. But David asks: "Have they no knowledge?" They devour the people of God as easily as eating bread. Yet they "call not upon the Lord." They are not afraid. They are not mindful of God. They act as though they are accountable to no one.',
        },
        {
          kind: 'commentary',
          id: 'ps14-great-fear',
          html:
            'Then a reversal: "There were they in great fear." Their confidence evaporates when they realize one fact: "God is in the generation of the righteous." God stands with those they thought were weak. God is present to those they thought they could exploit. Their immunity—real or imagined—disappears.',
        },
        {
          kind: 'christ',
          id: 'ps14-christ-gospel',
          title: 'Christ Connection — Universal Need for Gospel',
          html:
            'Paul quotes Psalm 14:1–3 in Romans 3:10–12 to demonstrate the universal human condition: all have sinned, none seeks after God. This quotation stands at the heart of the gospel message. From this diagnosis of universal corruption flows the necessity of Christ&apos;s redemption. We cannot save ourselves. We need a Savior.',
        },
        {
          kind: 'commentary',
          id: 'ps14-refuge',
          html:
            'David addresses those who have shamed the counsel of the poor. They have mocked the righteous. They have exploited the weak. But the poor have a refuge: the Lord Himself. What the righteous lack in earthly power, they possess in God.',
        },
        {
          kind: 'reflection',
          id: 'ps14-salvation',
          prompt: 'In what ways have you seen the "fool&apos;s" denial of God lead to corruption in the world? How does the good news of the gospel address this universal problem?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The fool hath said in his heart, There is no God. There is none that doeth good, no, not one.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 14 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 14 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.14',
      description: 'Wisdom psalm on human folly with Jewish exegesis.',
    },
    {
      id: 'intertextual-psalms-14-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 14 in Romans 3',
      url: 'https://intertextual.bible/text/psalm-14',
      description: 'Paul quotes Psalm 14 to show universal human sinfulness.',
    },
    {
      id: 'bible-odyssey-fool-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Fool in Wisdom Psalms',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Biblical concept of the fool who denies God.',
    },
  ],

  hasHebrew: true,
};
