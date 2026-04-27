import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_21: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 21,

  intros: [
    'Paul travels to Jerusalem where he is greeted warmly by the church. But Agabus, a prophet, comes and takes Paul&apos;s belt, binding his own feet and hands, saying: "Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle." The disciples beg Paul not to go up to Jerusalem. But Paul is resolved. "I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus." He cannot escape the fate that awaits him.',
  ],

  sections: [
    {
      ref: 'Acts 21:7–16',
      title: 'The Prophecy of Agabus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(11, 'And when he was come unto us, he took Paul&apos;s girdle, and bound his own hands and feet, and said, Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle, and shall deliver him into the hands of the Gentiles.'),
            plain(13, 'Then Paul answered, What mean ye to weep and to break mine heart? for I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-agabus',
          html: 'Agabus prophesies Paul&apos;s imprisonment and suffering. The disciples weep and beseech Paul not to go. But Paul is resolute. He cannot turn back. The Spirit calls him forward, even toward suffering.',
        },
        {
          kind: 'greek',
          id: 'acts21-theō',
          title: 'Theō — To Run Toward',
          script: 'θέω',
          translit: '<strong>Theō</strong> · to run; to hasten toward',
          description: 'Paul runs toward Jerusalem, toward suffering, with full knowledge of what awaits. His allegiance to Christ is stronger than his attachment to life.',
        },
        {
          kind: 'christ',
          id: 'acts21-christ-suffering',
          title: 'Christ Connection — Taking Up the Cross',
          html: 'Jesus warned His disciples they would face persecution. Paul accepts the call with open eyes. He has counted the cost and found that following Christ is worth it.',
        },
        {
          kind: 'carry',
          html: 'Paul arrives in Jerusalem. Though warned, he moves forward willingly. The disciples cease their weeping and say: "The will of the Lord be done." They accept his resolve.',
        },
        {
          kind: 'reflection',
          id: 'acts21-resolve-reflect',
          prompt: 'What resolve do you need to follow Jesus faithfully?',
        },
      ],
    },

    {
      ref: 'Acts 21:27–36',
      title: 'Paul Arrested',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(31, 'And as they went about to kill him, tidings came unto the chief captain of the band, that all Jerusalem was in an uproar.'),
            plain(33, 'Then the chief captain came near, and took him, and commanded him to be bound with two chains; and demanded who he was, and what he had done.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-arrest',
          html: 'Jews from Asia stir up a crowd against Paul. They drag him out of the temple, intending to kill him. But Roman soldiers intervene and arrest him. Paul is bound with chains as Agabus prophesied.',
        },
        {
          kind: 'greek',
          id: 'acts21-aira',
          title: 'Aira — Force; Violence',
          script: 'αἴρω',
          translit: '<strong>Aira</strong> · to lift up; to take; to use force',
          description: 'The crowd uses violence, but the Roman authority imposes order. Paul moves from one kind of captivity to another, but God is directing his steps.',
        },
        {
          kind: 'christ',
          id: 'acts21-christ-prisoner',
          title: 'Christ Connection — Prisoner for the Gospel',
          html: 'Paul is arrested and bound. Yet he is not bound by circumstances. His spirit remains free, devoted to Christ. Like the apostles before him, he is ready to be a prisoner for the gospel.',
        },
        {
          kind: 'carry',
          html: 'The plot against Paul is thwarted by Roman authority. But the arrest is certain. Paul&apos;s captivity begins. Yet in captivity, he will continue to testify to Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts21-captivity-reflect',
          prompt: 'How can faith sustain us when we face captivity or limitation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 21 · Study Guide',
  },

  hasHebrew: false,
};
