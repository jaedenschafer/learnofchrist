import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const LUKE_18: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 18,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  opener: {
    matchTitle: /The Parable of the/i,
    caption: 'Luke 18',
  },
  intros: [
    'Jesus speaks a parable of an importunate widow and an unjust judge. The widow keeps coming to the judge: "Avenge me of mine adversary." The judge, who fears not God nor regards man, finally says: "Yet because this widow troubleth me, I will avenge her." Jesus asks: "And shall not God avenge his own elect, which cry day and night unto him, though he bear long with them?" Persistence in prayer is rewarded. A Pharisee and a publican go into the temple. The Pharisee prays: "I thank thee that I am not as other men... I fast twice in the week, I give tithes." The publican stands afar off, will not lift his eyes, beats his breast: "God be merciful to me a sinner." Jesus says: "I tell you, this man went down to his house justified rather than the other."',
    'Jesus says: "Suffer little children to come unto me, and forbid them not: for of such is the kingdom of God." A certain ruler asks: "Good Master, what shall I do to inherit eternal life?" Jesus says: "Thou knowest the commandments." The ruler says: "All these have I kept from my youth up." Jesus says: "Yet lackest thou one thing: sell all that thou hast, and distribute unto the poor, and thou shalt have treasure in heaven: and come, follow me." The ruler is sorrowful. He cannot surrender his riches.',
  ],

  sections: [
    {
      ref: 'Luke 18:1–17',
      title: 'Prayer and Humility',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(1, 'And he spake a parable unto them to this end, that men ought always to pray, and not to faint;'),
            plain(7, 'And shall not God avenge his own elect, which cry day and night unto him, though he bear long with them?'),
            plain(13, 'And the publican, standing afar off, would not lift up so much as his eyes unto heaven, but smote upon his breast, saying, God be merciful to me a sinner.'),
            plain(14, 'I tell you, this man went down to his house justified rather than the other: for every one that exalteth himself shall be abased; and he that humbleth himself shall be exalted.'),
            plain(16, 'Suffer little children to come unto me, and forbid them not: for of such is the kingdom of God.'),
            plain(17, 'Whosoever shall not receive the kingdom of God as a little child shall in no wise enter therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke18-widow',
          html:
            'An importunate widow keeps petitioning an unjust judge. She seeks justice against her adversary. The judge has no fear of God, no regard for man. But the widow persists. Finally, he relents: "Because this widow troubleth me, I will avenge her." Jesus draws the conclusion: if an unjust judge responds to persistence, how much more will the just God respond to those who cry day and night[res:sefaria-persistent-prayer]?',
        },
        {
          kind: 'greek',
          id: 'luke18-ekdikeoō',
          title: 'Ekdikeoō — Avenge; Defend; Execute Justice',
          script: 'ἐκδικέω',
          translit: '<strong>Ekdikeoō</strong> · avenge; defend; execute justice',
          description:
            'The widow seeks vindication, justice. God is the ultimate judge who will ekdikeoō—defend His elect, execute justice on their behalf.',
        },
        {
          kind: 'commentary',
          id: 'luke18-pharisee-publican',
          html:
            'A Pharisee thanks God he is not like sinners. He boasts of his righteousness. A publican stands afar off, ashamed, beating his breast: "God be merciful to me a sinner." Jesus says the publican goes home justified, not the Pharisee[res:sefaria-justification]. Self-righteousness closes the door to grace. Humility opens it.',
        },
        {
          kind: 'commentary',
          id: 'luke18-children',
          html:
            'Jesus says: "Suffer little children to come unto me... for of such is the kingdom of God." The kingdom is received as a child receives—without pretense, without earning, with simple trust. To enter the kingdom, we must become as little children.',
        },
        {
          kind: 'christ',
          id: 'luke18-christ-justified',
          title: 'Christ Connection — Grace Over Works',
          html:
            'Jesus teaches that justification comes not from boasting in our works but from acknowledging our need. "God be merciful to me a sinner." This is the prayer that justifies.',
        },
        {
          kind: 'reflection',
          id: 'luke18-pharisee-reflect',
          prompt: 'Are you more like the Pharisee or the publican in your approach to God? What would it mean to truly humble yourself?',
        },
      ],
    },

    {
      ref: 'Luke 18:18–43',
      title: 'The Cost of Discipleship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(18, 'And a certain ruler asked him, saying, Good Master, what shall I do to inherit eternal life?'),
            plain(22, 'Yet lackest thou one thing: sell all that thou hast, and distribute unto the poor, and thou shalt have treasure in heaven: and come, follow me.'),
            plain(24, 'And when Jesus saw that he was very sorrowful, he said, How hardly shall they that have riches enter into the kingdom of God!'),
            plain(29, 'And he said unto them, Verily I say unto you, There is no man that hath left house, or parents, or brethren, or wife, or children, for the kingdom of God&apos;s sake,'),
            plain(30, 'Who shall not receive manifold more in this time, and in the world to come life everlasting.'),
            plain(42, 'And Jesus said unto him, Receive thy sight: thy faith hath made thee whole.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke18-ruler',
          html:
            'A ruler asks what he must do to inherit eternal life. Jesus says: "Thou knowest the commandments." The ruler claims he has kept them all from youth up. But Jesus identifies what is lacking. His wealth. Jesus calls him to sell all and give to the poor, then follow. The ruler is sorrowful. He cannot do it.',
        },
        {
          kind: 'commentary',
          id: 'luke18-riches',
          html:
            'Jesus observes: "How hardly shall they that have riches enter into the kingdom of God! For it is easier for a camel to go through a needle&apos;s eye, than for a rich man to enter into the kingdom of God." Riches are a barrier[res:bible-odyssey-wealth]. They create security, trust, reliance on themselves rather than on God.',
        },
        {
          kind: 'greek',
          id: 'luke18-duskolōs',
          title: 'Duskolōs — Hardly; With Difficulty; Scarcely',
          script: 'δύσκολος',
          translit: '<strong>Duskolōs</strong> · hardly; with difficulty; scarcely; with pain',
          description:
            'It is not impossible for the rich to enter the kingdom. But it is difficult. Their wealth must be surrendered. Their trust must be transferred from things to God.',
        },
        {
          kind: 'commentary',
          id: 'luke18-bartimaeus',
          html:
            'Blind Bartimaeus sits by the way begging. He hears Jesus is passing and cries: "Jesus, thou son of David, have mercy on me." Jesus says: "Receive thy sight: thy faith hath made thee whole." The blind man receives his sight and follows Jesus. Where the ruler could not follow because of riches, the blind beggar follows because he has been healed.',
        },
        {
          kind: 'christ',
          id: 'luke18-christ-faith',
          title: 'Christ Connection — Faith Over Possessions',
          html:
            'The chapter contrasts the rich ruler and Bartimaeus. One has wealth but cannot follow. One has nothing but faith, and follows. Jesus values faith above all.',
        },
        {
          kind: 'carry',
          html:
            'There is one thing. You know what it is. Not money necessarily, but the thing you&apos;ve told yourself you cannot live without. The relationship. The plan. The control. The comfort. This week, look at it. Not to feel guilty—to test the claim. Is He asking? And if He did, would you? The rich ruler couldn&apos;t. Bartimaeus had nothing to lose and gained his sight. Follow what you see.',
        },
        {
          kind: 'reflection',
          id: 'luke18-cost-reflect',
          prompt: 'What would it mean for you to sell all and follow Jesus? What possesses you that would prevent you from following?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God be merciful to me a sinner. Of such is the kingdom of God. Thy faith hath made thee whole.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 18 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-persistent-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Prayer and Persistence in Jewish Tradition',
      url: 'https://www.sefaria.org/search?q=prayer%20persistence%20importunate&tab=text',
      description: 'Sefaria texts on prayer, persistence, and the widow&apos;s plea in Jewish interpretation.',
    },
    {
      id: 'sefaria-justification',
      kind: 'study',
      source: 'Sefaria',
      label: 'Justification and Humility in Jewish Thought',
      url: 'https://www.sefaria.org/search?q=justification%20humility%20pride&tab=text',
      description: 'Sefaria texts on righteousness, humility, and the contrast between pride and lowliness.',
    },
    {
      id: 'bible-odyssey-wealth',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Wealth and the Kingdom in Scripture',
      url: 'https://www.bibleodyssey.org/dictionary/wealth/',
      description: 'Open-access entry on biblical attitudes toward riches and their relation to discipleship.',
    },
  ],

  hasHebrew: false,
};
