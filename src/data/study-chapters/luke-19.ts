import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const LUKE_19: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 19,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Jesus comes to Jericho. A man named Zacchaeus, chief of the publicans and rich, is there. He is small of stature and cannot see over the crowd. He runs ahead and climbs a sycamore tree. Jesus passes beneath and looks up: "Zacchaeus, make haste, and come down; for to day I must abide at thy house." Zacchaeus comes down joyfully. The multitude murmurs: "He is gone to be guest with a man that is a sinner." But Zacchaeus stands and says: "Behold, Lord, the half of my goods I give to the poor; and if I have taken any thing from any man by false accusation, I restore him fourfold." Jesus says: "This day is salvation come to this house... For the Son of man is come to seek and to save that which was lost."',
    'Jesus speaks the parable of the pounds. A man of noble birth goes to a far country to receive a kingdom. He gives ten servants ten pounds and says: "Occupy till I come." Some servants gain more. One hides his pound in a napkin, afraid. The lord is angry: "Out of thine own mouth will I judge thee." Jesus comes to Jerusalem riding on a colt. The disciples praise Him: "Blessed be the King that cometh in the name of the Lord." He weeps over the city: "If thou hadst known... the things which belong unto thy peace!"',
  ],

  sections: [
    {
      ref: 'Luke 19:1–27',
      title: 'Zacchaeus and the Pounds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(5, 'And when Jesus came to the place, he looked up, and said unto him, Zacchaeus, make haste, and come down; for to day I must abide at thy house.'),
            plain(8, 'And Zacchaeus stood, and said unto the Lord; Behold, Lord, the half of my goods I give to the poor; and if I have taken any thing from any man by false accusation, I restore him fourfold.'),
            plain(9, 'And Jesus said unto him, This day is salvation come to this house, forasmuch as he also is a son of Abraham.'),
            plain(10, 'For the Son of man is come to seek and to save that which was lost.'),
            plain(13, 'And he said unto them, Occupy till I come.'),
            plain(25, 'And he said unto those that stood by, Take from him the pound, and give it to him that hath ten pounds.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke19-zacchaeus',
          html:
            'Zacchaeus is chief of the publicans, rich, but small of stature. He cannot see over the crowd, so he climbs a sycamore tree. Jesus looks up and calls him by name. Jesus invites Himself to Zacchaeus&apos;s house. The multitude murmurs. Yet Zacchaeus responds with generosity. He gives half his goods to the poor. He makes restitution fourfold to any he has wronged.',
        },
        {
          kind: 'greek',
          id: 'luke19-sōtēria',
          title: 'Sōtēria — Salvation; Deliverance; Wholeness',
          script: 'σωτηρία',
          translit: '<strong>Sōtēria</strong> · salvation; deliverance; healing; wholeness',
          description:
            'Salvation comes to Zacchaeus&apos;s house. Not just forgiveness of sins, but wholeness, restoration, reintegration. He becomes a son of Abraham again.',
        },
        {
          kind: 'commentary',
          id: 'luke19-seek-save',
          html:
            'Jesus says: "The Son of man is come to seek and to save that which was lost." This is the summary statement of Jesus&apos; entire mission. He seeks the lost. He saves them. Zacchaeus was lost—a traitor to his people, a collaborator. Yet Jesus seeks him out and saves him.',
        },
        {
          kind: 'commentary',
          id: 'luke19-pounds',
          html:
            'The parable of the pounds teaches faithful use of what is entrusted. Each servant is given the same amount. They are told to "Occupy till I come." Some gain more. One is afraid and hides his pound. The master is angry. "Out of thine own mouth will I judge thee." Fear paralyzes. Faith and courage are required to serve faithfully.',
        },
        {
          kind: 'christ',
          id: 'luke19-christ-seeking',
          title: 'Christ Connection — The Seeking Savior',
          html:
            'Jesus seeks Zacchaeus. Jesus comes to Jerusalem to seek and save the lost. The kingdom is established through seeking, finding, saving.',
        },
        {
          kind: 'reflection',
          id: 'luke19-zacchaeus-reflect',
          prompt: 'Do you believe Jesus is seeking you? What would a "Zacchaeus moment" look like for you?',
        },
      ],
    },

    {
      ref: 'Luke 19:28–48',
      title: 'The Triumphal Entry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(28, 'And when he had thus spoken, he went before, ascending up to Jerusalem.'),
            plain(37, 'And when he was come nigh, even now at the descent of the mount of Olives, the whole multitude of the disciples began to rejoice and praise God with a loud voice for all the mighty works that they had seen;'),
            plain(38, 'Saying, Blessed be the King that cometh in the name of the Lord: peace in heaven, and glory in the highest.'),
            plain(41, 'And when he was come near, he beheld the city, and wept over it,'),
            plain(42, 'Saying, If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace!'),
            plain(45, 'And he went into the temple, and began to cast out them that sold therein, and them that bought;'),
            plain(46, 'Saying unto them, It is written, My house is the house of prayer: but ye have made it a den of thieves.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke19-entry',
          html:
            'Jesus comes to Jerusalem riding on a colt. The disciples praise God: "Blessed be the King that cometh in the name of the Lord: peace in heaven, and glory in the highest." This is the triumphal entry. Yet it is a king without armies, riding on a borrowed colt, entering not to conquer but to die.',
        },
        {
          kind: 'commentary',
          id: 'luke19-weeps',
          html:
            'When Jesus comes near the city, He weeps. "If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace!" Jerusalem does not know Him. The city that killed the prophets does not recognize its Messiah. Jesus grieves.',
        },
        {
          kind: 'greek',
          id: 'luke19-eirēnē',
          title: 'Eirēnē — Peace; Wholeness; Shalom',
          script: 'εἰρήνη',
          translit: '<strong>Eirēnē</strong> · peace; wholeness; reconciliation',
          description:
            'Jesus offers peace to Jerusalem. But Jerusalem does not know what belongs to its peace. It rejects the one who brings wholeness.',
        },
        {
          kind: 'commentary',
          id: 'luke19-temple',
          html:
            'Jesus enters the temple and begins casting out those who sell. "My house is the house of prayer: but ye have made it a den of thieves." The temple is being desecrated. Jesus cleanses it. This act precipitates the final conflict.',
        },
        {
          kind: 'christ',
          id: 'luke19-christ-rejected',
          title: 'Christ Connection — The King Rejected',
          html:
            'Jesus enters Jerusalem as king. He is praised. Yet He is rejected. The city that should receive Him will crucify Him. His tears over Jerusalem reveal the pathos of this rejection.',
        },
        {
          kind: 'reflection',
          id: 'luke19-entry-reflect',
          prompt: 'Do you praise Jesus as King? What would it mean to truly receive Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Son of man is come to seek and to save that which was lost. If thou hadst known the things which belong unto thy peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 19 · Study Guide',
  },

  hasHebrew: false,
};
