import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_53: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 53,

  intros: [
    'Psalm 53 is nearly identical to Psalm 14, yet with a subtle but significant difference. Where Psalm 14 opens "The Lord hath looked down from heaven," Psalm 53 opens simply with "The fool hath said in his heart, There is no God." The change marks a shift from the particular covenant God of Israel to the universal God recognized by all peoples. The psalm speaks to a universal human condition: the denial of God, the refusal to acknowledge His existence, His wisdom, His moral order.',
    'In one sense, this denial is madness—folly so profound that it warrants the name "fool." But in another sense, it is not mere intellectual error. It is moral rebellion. The fool who denies God does so not because he has reasoned himself into atheism, but because he wishes to live free from moral accountability. If there is no God, then there is no higher order, no judgment, no standard. And so the psalm describes what follows: corruption, abominable works, none that doeth good.',
  ],

  sections: [
    {
      ref: 'Psalm 53:1–3',
      title: 'The Universal Denial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(1, 'The fool hath said in his heart, There is no God. Corrupt are they, and have done abominable iniquity: there is none that doeth good.'),
            plain(2, 'God looked down from heaven upon the children of men, to see if there were any that did understand, that did seek God.'),
            plain(3, 'Every one of them is gone back: they are altogether become filthy; there is none that doeth good, no, not one.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms53-fool-heart',
          html: 'The fool does not merely think to himself, "God does not exist." He says it in his heart—he believes it; he has made it the foundation of his life. And what follows? Corruption. Abominable iniquity. Works that are vile and degrading. The denial of God is not presented as a theoretical position. It is presented as a moral sickness.',
        },
        {
          kind: 'hebrew',
          id: 'psalms53-nabal',
          title: 'Nabal — "Fool"',
          script: 'נָבָל',
          translit: '<strong>Nabal</strong> · fool; foolish; senseless',
          description: 'The Hebrew nabal does not mean merely one who lacks intelligence. It means one who is senseless, one who ignores reality, one who acts without regard for consequences. The nabal is guilty of willful ignorance.',
        },
        {
          kind: 'commentary',
          id: 'psalms53-god-looked-down',
          html: '"God looked down from heaven upon the children of men, to see if there were any that did understand, that did seek God." God does not merely exist in distant transcendence. He looks down. He observes. He searches for even one who understands, even one who seeks Him. But what does He find? All have turned away. All have become corrupt.',
        },
        {
          kind: 'christ',
          id: 'psalms53-christ-sought',
          title: 'Christ Connection — The One Who Seeks',
          html: 'God looked down to see if any sought Him. None did. But in Christ, God does more than look. God comes. God Himself enters human flesh, seeking not to judge immediately, but to restore. "The Son of man is come to seek and to save that which was lost" (Luke 19:10). Where all have gone back, Christ moves forward.',
        },
        {
          kind: 'carry',
          html: 'Psalm 53 confronts us with a hard truth: the denial of God is not mere intellectual error. It is moral blindness, a refusal to see the reality that surrounds us. Yet we need not remain in that denial. God seeks us. In Christ, He comes to restore.',
        },
        {
          kind: 'reflection',
          id: 'psalms53-understand-seek',
          prompt: 'What does it mean to truly understand God? To truly seek Him? How does seeking God reshape the way you live?',
        },
      ],
    },

    {
      ref: 'Psalm 53:4–6',
      title: 'The Workers of Iniquity Fail',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(4, 'Have the workers of iniquity no knowledge? who eat up my people as they eat bread: they have not called upon God.'),
            plain(5, 'There were they in great fear, where no fear was: for God hath scattered the bones of him that encampeth against thee: thou hast put them to shame, because God hath despised them.'),
            plain(6, 'Oh that the salvation of Israel were come out of Zion! When God bringeth back the captivity of his people, Jacob shall rejoice, and Israel shall be glad.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms53-no-knowledge',
          html: '"Have the workers of iniquity no knowledge?" The psalm shifts from the fool&apos;s denial to the workers of iniquity—those who use others, who "eat up my people as they eat bread." They have no knowledge because they have chosen not to know. They do not call upon God because they have determined He does not exist.',
        },
        {
          kind: 'commentary',
          id: 'psalms53-fear-where-no-fear',
          html: '"There were they in great fear, where no fear was." The workers of iniquity who thought themselves strong become afraid. "God hath scattered the bones of him that encampeth against thee." Their strength crumbles. Their plans dissolve. The enemy who seemed so formidable is exposed as fragile.',
        },
        {
          kind: 'commentary',
          id: 'psalms53-salvation-zion',
          html: 'The psalm concludes with a prayer: "Oh that the salvation of Israel were come out of Zion!" This is the confident hope of one who has seen God&apos;s faithfulness, who trusts that God will act, that He will bring His people back from captivity, that the day of rejoicing will come.',
        },
        {
          kind: 'carry',
          html: 'The psalm invites us to consider: Are we among those who deny God, who act as if He does not exist? Or are we among those who call upon God, who acknowledge His reality, who wait for His salvation? The fool says in his heart there is no God—and lives accordingly, in corruption and emptiness.',
        },
        {
          kind: 'reflection',
          id: 'psalms53-where-are-you',
          prompt: 'Are there areas of your life where you live as though God does not exist? How might you invite God&apos;s presence and guidance into those places?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The fool hath said in his heart, There is no God...God looked down from heaven upon the children of men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 53 · Study Guide',
  },

  hasHebrew: true,
};
