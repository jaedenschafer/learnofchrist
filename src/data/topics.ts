export interface Topic {
  id: string;
  name: string;
  description: string;
  keyVerse: string;
  keyVerseReference: string;
}

export const topics: Topic[] = [
  {
    id: 'faith',
    name: 'Faith',
    description: 'Trust in God and belief in His promises',
    keyVerse: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    keyVerseReference: 'Hebrews 11:1',
  },
  {
    id: 'hope',
    name: 'Hope',
    description: 'Confidence and expectation in God\'s future promises',
    keyVerse: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    keyVerseReference: 'Romans 15:13',
  },
  {
    id: 'love',
    name: 'Love',
    description: 'God\'s sacrificial love and our response to Him',
    keyVerse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    keyVerseReference: 'John 3:16',
  },
  {
    id: 'grace',
    name: 'Grace',
    description: 'God\'s unmerited favor and forgiveness',
    keyVerse: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.',
    keyVerseReference: 'Ephesians 2:8',
  },
  {
    id: 'forgiveness',
    name: 'Forgiveness',
    description: 'God\'s pardon and our forgiveness of others',
    keyVerse: 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.',
    keyVerseReference: 'Colossians 3:13',
  },
  {
    id: 'peace',
    name: 'Peace',
    description: 'Inner peace through trust in Christ',
    keyVerse: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives.',
    keyVerseReference: 'John 14:27',
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    description: 'Overcoming worry through faith and prayer',
    keyVerse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    keyVerseReference: 'Philippians 4:6',
  },
  {
    id: 'joy',
    name: 'Joy',
    description: 'Happiness rooted in God\'s presence',
    keyVerse: 'Rejoice in the Lord always. I will say it again: Rejoice!',
    keyVerseReference: 'Philippians 4:4',
  },
  {
    id: 'strength',
    name: 'Strength',
    description: 'God\'s strength in our weakness',
    keyVerse: 'I can do all this through him who gives me strength.',
    keyVerseReference: 'Philippians 4:13',
  },
  {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Understanding and application of God\'s truth',
    keyVerse: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    keyVerseReference: 'James 1:5',
  },
  {
    id: 'purpose',
    name: 'Purpose',
    description: 'Understanding God\'s plan for our lives',
    keyVerse: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    keyVerseReference: 'Ephesians 2:10',
  },
  {
    id: 'obedience',
    name: 'Obedience',
    description: 'Following God\'s commands with trust',
    keyVerse: 'If you love me, keep my commands.',
    keyVerseReference: 'John 14:15',
  },
  {
    id: 'sacrifice',
    name: 'Sacrifice',
    description: 'Jesus\' sacrifice for our sins',
    keyVerse: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him.',
    keyVerseReference: 'Isaiah 53:5',
  },
  {
    id: 'resurrection',
    name: 'Resurrection',
    description: 'Christ\'s victory over death and our hope',
    keyVerse: 'Jesus answered, "I am the resurrection and the life. The one who believes in me will live, even though they die."',
    keyVerseReference: 'John 11:25',
  },
  {
    id: 'redemption',
    name: 'Redemption',
    description: 'Being saved and restored through Christ',
    keyVerse: 'In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\'s grace.',
    keyVerseReference: 'Ephesians 1:7',
  },
];

export function getTopicById(id: string): Topic | undefined {
  return topics.find(topic => topic.id === id);
}

export function getAllTopics(): Topic[] {
  return topics;
}
