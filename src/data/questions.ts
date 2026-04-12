export interface Question {
  id: string;
  question: string;
  excerpt: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 'who-is-jesus',
    question: 'Who is Jesus Christ?',
    excerpt: 'Jesus is the Son of God, the Savior of the world, and the fulfillment of Old Testament prophecy.',
    category: 'Identity',
  },
  {
    id: 'why-did-jesus-die',
    question: 'Why did Jesus die on the cross?',
    excerpt: 'Jesus died to pay the penalty for our sins and provide the way to eternal life through His sacrifice.',
    category: 'Salvation',
  },
  {
    id: 'what-is-salvation',
    question: 'What is salvation?',
    excerpt: 'Salvation is the deliverance from sin and its consequences through faith in Jesus Christ.',
    category: 'Salvation',
  },
  {
    id: 'how-to-follow-jesus',
    question: 'How do I follow Jesus?',
    excerpt: 'Following Jesus means believing in Him, repenting of sin, and living according to His teachings.',
    category: 'Discipleship',
  },
  {
    id: 'is-jesus-the-only-way',
    question: 'Is Jesus the only way to God?',
    excerpt: 'Jesus said, "I am the way and the truth and the life. No one comes to the Father except through me."',
    category: 'Theology',
  },
  {
    id: 'what-is-grace',
    question: 'What is God\'s grace?',
    excerpt: 'Grace is God\'s unmerited favor—His kindness toward us that we cannot earn or deserve.',
    category: 'Theology',
  },
  {
    id: 'how-to-pray',
    question: 'How should I pray?',
    excerpt: 'Prayer is honest communication with God. Jesus taught His disciples to pray with sincerity and faith.',
    category: 'Practice',
  },
  {
    id: 'what-about-suffering',
    question: 'Why is there suffering in the world?',
    excerpt: 'Suffering exists because of sin\'s consequences, but God can work through our suffering for good.',
    category: 'Theology',
  },
  {
    id: 'what-is-sin',
    question: 'What is sin?',
    excerpt: 'Sin is rebellion against God and separation from His righteousness; all humans are sinners.',
    category: 'Theology',
  },
  {
    id: 'how-to-live-as-christian',
    question: 'How should a Christian live?',
    excerpt: 'Christians are called to live in obedience to Christ, showing love, kindness, and holiness.',
    category: 'Discipleship',
  },
  {
    id: 'what-is-faith',
    question: 'What is faith?',
    excerpt: 'Faith is belief in and trust of God\'s character, promises, and the person of Jesus Christ.',
    category: 'Theology',
  },
  {
    id: 'is-jesus-coming-back',
    question: 'Will Jesus return?',
    excerpt: 'Yes, Jesus promised to return for His followers and establish His kingdom in its fullness.',
    category: 'End Times',
  },
];

export function getQuestionById(id: string): Question | undefined {
  return questions.find(q => q.id === id);
}

export function getAllQuestions(): Question[] {
  return questions;
}

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter(q => q.category === category);
}
