import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const LUKE_20: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 20,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'In the temple, the chief priests and scribes challenge Jesus: "By what authority doest thou these things? and who gave thee this authority?" Jesus answers their question with a question about John&apos;s baptism. They cannot answer. Jesus speaks the parable of the wicked husbandmen. A man plants a vineyard, lets it out to husbandmen, and goes away. When harvest comes, he sends a servant to collect. The husbandmen beat the servant. He sends another—same treatment. He sends a third—they wound him. Finally, he sends his son: "It may be they will reverence him." But they say: "This is the heir: come, let us kill him." Jesus asks: "What therefore shall the lord of the vineyard do unto them?"',
    'The Sadducees, who say there is no resurrection, ask Jesus a trick question about a woman who marries seven brothers in succession. If there is resurrection, whose wife will she be? Jesus answers: "The children of this world marry, and are given in marriage: but they which shall be accounted worthy to obtain that world... neither marry, nor are given in marriage." Those in the resurrection are like angels, immortal, incorruptible.',
  ],

  sections: [
    {
      ref: 'Luke 20:1–26',
      title: 'Authority and the Vineyard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(2, 'And spake unto him, saying, Tell us, by what authority doest thou these things? or who is he that gave thee this authority?'),
            plain(9, 'Then began he to speak to the people this parable; A certain man planted a vineyard, and let it forth to husbandmen, and went into a far country for a long time.'),
            plain(15, 'So they cast him out of the vineyard, and killed him. What therefore shall the lord of the vineyard do unto them?'),
            plain(17, 'And he beheld them, and said, What is this then that is written, The stone which the builders rejected, the same is made the head of the corner?'),
            plain(22, 'And when they heard it, they said, God forbid.'),
            plain(25, 'And he said unto them, Render therefore unto Caesar the things which be Caesar&apos;s, and unto God the things which be God&apos;s.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke20-authority',
          html:
            'The chief priests challenge Jesus&apos; authority. Jesus turns the question back: "I will also ask you one thing... The baptism of John, was it of heaven, or of men?" They cannot answer without condemning themselves. Jesus&apos; authority comes from heaven. It does not need their approval.',
        },
        {
          kind: 'greek',
          id: 'luke20-exousia',
          title: 'Exousia — Authority; Power; Right',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; jurisdiction; right to rule',
          description:
            'Jesus&apos; exousia comes from God. He needs no human sanction. His authority is absolute and divine.',
        },
        {
          kind: 'commentary',
          id: 'luke20-vineyard',
          html:
            'A man plants a vineyard, lets it to husbandmen, and goes away. When servants come to collect the fruit, the husbandmen beat them. The owner sends his son. They kill him, thinking they will inherit. But the lord of the vineyard will destroy them. "The stone which the builders rejected, the same is made the head of the corner." Jesus, rejected by the builders, becomes the cornerstone.',
        },
        {
          kind: 'commentary',
          id: 'luke20-caesar',
          html:
            'When asked whether to pay taxes to Caesar, Jesus asks for a coin. "Whose image and superscription hath it?" They answer: "Caesar&apos;s." Jesus says: "Render therefore unto Caesar the things which be Caesar&apos;s, and unto God the things which be God&apos;s." There is a distinction. But nothing is outside God&apos;s sovereignty.',
        },
        {
          kind: 'christ',
          id: 'luke20-christ-stone',
          title: 'Christ Connection — The Rejected Stone',
          html:
            'Jesus is the cornerstone rejected by the builders. This is the central image—the stone the builders rejected becomes the head of the corner. The rejected becomes the foundation.',
        },
        {
          kind: 'carry',
          html:
            'Render to God the things that are God&apos;s. You know the part of yourself you&apos;ve been keeping back—the part you tell yourself is yours alone. Your shame. Your talent. Your time. Your anger. Your whole self. This week, identify one thing and consciously place it in His hands. Not to earn His favor, but to stop pretending it was ever yours to hold.',
        },
        {
          kind: 'reflection',
          id: 'luke20-authority-reflect',
          prompt: 'Do you recognize Jesus&apos; authority in your life? What would it mean to render to God what is God&apos;s?',
        },
      ],
    },

    {
      ref: 'Luke 20:27–47',
      title: 'Resurrection and Warning Against the Scribes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(34, 'And Jesus answering said unto them, The children of this world marry, and are given in marriage:'),
            plain(35, 'But they which shall be accounted worthy to obtain that world, and the resurrection from the dead, neither marry, nor are given in marriage:'),
            plain(36, 'Neither can they die any more: for they are equal unto the angels; and are the children of God, being the children of the resurrection.'),
            plain(37, 'Now that the dead are raised, even Moses shewed at the bush, when he calleth the Lord the God of Abraham, and the God of Isaac, and the God of Jacob.'),
            plain(46, 'Beware of the scribes, which desire to walk in long robes, and love greetings in the markets, and the highest seats in the synagogues, and the chief rooms at feasts;'),
            plain(47, 'Which devour widows&apos; houses, and for a shew make long prayers: the same shall receive greater damnation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke20-resurrection',
          html:
            'Jesus teaches about resurrection. Those accounted worthy to obtain that world do not marry. They "can die no more; for they are equal unto the angels." Immortality and incorruptibility characterize the resurrection life. Moses himself proves resurrection by calling God "the God of Abraham... Isaac... and Jacob." God is not God of the dead, but of the living.',
        },
        {
          kind: 'greek',
          id: 'luke20-angnosis',
          title: 'Axióō — Judge Worthy; Deem Worthy',
          script: 'ἀξιόω',
          translit: '<strong>Axióō</strong> · judge worthy; deem worthy; be worthy of',
          description:
            'To be accounted worthy of resurrection is not automatic. There is a judgment about who is worthy. Faithfulness determines worthiness.',
        },
        {
          kind: 'commentary',
          id: 'luke20-scribes-warning',
          html:
            'Jesus warns against the scribes. They desire honor—long robes, greetings in the marketplaces, high seats in synagogues, chief rooms at feasts. Yet they "devour widows&apos; houses." They prey on the vulnerable for profit while maintaining an appearance of piety. "The same shall receive greater damnation."',
        },
        {
          kind: 'christ',
          id: 'luke20-christ-warning',
          title: 'Christ Connection — True Righteousness',
          html:
            'Jesus warns against making a show of righteousness while exploiting the vulnerable. True righteousness is hidden, humble, just. It does not seek honor but practices justice.',
        },
        {
          kind: 'reflection',
          id: 'luke20-scribes-reflect',
          prompt: 'Do you seek honor and recognition? What does Jesus teach about true greatness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Render unto Caesar the things which be Caesar&apos;s, and unto God the things which be God&apos;s. The stone the builders rejected, the same is made the head of the corner.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 20 · Study Guide',
  },

  hasHebrew: false,
};
