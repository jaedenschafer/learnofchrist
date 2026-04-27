import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 15 — Three Parables of Redemption
 *
 * Three parables of loss and recovery. A shepherd has a hundred sheep. One
 * goes astray. He leaves the ninety-nine and goes after the one until he finds
 * it. He brings it home, calls his friends and neighbours: "Rejoice with me."
 * A woman has ten coins. One is lost. She lights a lamp, sweeps the house,
 * seeks diligently until she finds it. She calls her friends: "Rejoice with me."
 * A father has two sons. The younger says: "Give me my inheritance." He takes
 * it and goes to a far country and wastes it in riotous living. Hunger and
 * desperation drive him home. His father sees him coming, runs to him, embraces
 * him, kills the fatted calf. "This my son was dead, and is alive again; he was
 * lost, and is found." These are the three great metaphors of salvation.
 */
export const LUKE_15: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 15,

  intros: [
    'The publicans and sinners draw near to Jesus to hear Him. The Pharisees and scribes murmur, saying: "This man receiveth sinners, and eateth with them." Jesus speaks parables. "What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine in the wilderness, and go after that which is lost, until he find it?" The shepherd finds the lost sheep. He comes home, calls his friends and neighbours: "Rejoice with me; for I have found my sheep which was lost."',
    'Jesus speaks another parable. "What woman having ten pieces of silver, if she lose one piece, doth not light a candle, and sweep the house, and seek diligently till she find it?" She finds the coin. She calls her friends and neighbours: "Rejoice with me; for I have found the piece which I had lost." Then Jesus speaks the parable of the prodigal son. A father has two sons. The younger asks for his inheritance early. He goes to a far country and wastes it all. Famine comes. He finds himself feeding swine, longing to eat their husks. He comes to himself. He returns.',
  ],

  sections: [
    {
      ref: 'Luke 15:1–32',
      title: 'Three Parables of the Lost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(4, 'What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine in the wilderness, and go after that which is lost, until he find it?'),
            plain(7, 'I say unto you, that likewise joy shall be in heaven over one sinner that repenteth, more than over ninety and nine just persons, which need no repentance.'),
            plain(8, 'Either what woman having ten pieces of silver, if she lose one piece, doth not light a candle, and sweep the house, and seek diligently till she find it?'),
            plain(11, 'And he said, A certain man had two sons:'),
            plain(20, 'And he arose, and came to his father. But when he was yet a great way off, his father saw him, and was moved with compassion, and ran, and fell on his neck, and kissed him.'),
            plain(24, 'For this my son was dead, and is alive again; he was lost, and is found. And they began to make merry.'),
            plain(31, 'And he said unto him, Son, thou art ever with me, and all that I have is thine.'),
            plain(32, 'But it was meet that we should make merry, and be glad: for this thy brother was dead, and is alive again; and was lost, and is found.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke15-lost-sheep',
          html:
            'The shepherd has a hundred sheep. One is lost. He does not calculate profit and loss. He does not think: "Ninety-nine are safe; that is enough." He leaves the ninety-nine and goes after the one. This is not prudent management. This is love. When he finds the sheep, he carries it home on his shoulders, rejoicing. He calls his friends: "Rejoice with me; for I have found my sheep which was lost." Jesus says: "Joy shall be in heaven over one sinner that repenteth."',
        },
        {
          kind: 'greek',
          id: 'luke15-apollumi',
          title: 'Apollumi — Lose; Perish; Destroy',
          script: 'ἀπόλλυμι',
          translit: '<strong>Apollumi</strong> · lose; perish; destroy; cause to be ruined',
          description:
            'The lost sheep has apollumi—it is lost, perished, gone. Yet the shepherd finds it and brings it back. What is lost can be found. What is perished can be restored.',
        },
        {
          kind: 'commentary',
          id: 'luke15-lost-coin',
          html:
            'A woman has ten coins. One is lost. She lights a lamp. She sweeps the house. She seeks diligently. These are simple actions, yet they show desperate intention. She wants that one coin. It is not about the money. It is about the wholeness of what was hers. When she finds it, she calls her friends: "Rejoice with me; for I have found the piece which I had lost." Joy over the found, over the restored, over wholeness recovered.',
        },
        {
          kind: 'commentary',
          id: 'luke15-prodigal',
          html:
            'The parable of the prodigal son is the culmination. A father has two sons. The younger demands his inheritance early. He goes to a far country and wastes it in riotous living. When money is gone, famine comes. He finds himself feeding swine. "And he would fain have filled his belly with the husks that the swine did eat." Hunger brings him to himself. "I will arise and go to my father, and will say unto him, Father, I have sinned against heaven, and before thee."',
        },
        {
          kind: 'commentary',
          id: 'luke15-father-runs',
          html:
            'While the son is yet a great way off, the father sees him. The father is watching, waiting, hoping. And the father runs to him. An elderly man runs. He embraces his son and kisses him. The son begins his confession: "Father, I have sinned against heaven, and in thy sight." But the father does not let him finish. He calls to the servants: "Bring forth the best robe... a ring... shoes... bring the fatted calf... let us eat, and be merry." The restoration is complete and immediate.',
        },
        {
          kind: 'christ',
          id: 'luke15-christ-redemption',
          title: 'Christ Connection — God&apos;s Seeking Love',
          html:
            'These three parables are about God&apos;s seeking love. God is the shepherd who leaves the ninety-nine to find the one. God is the woman who lights a lamp and sweeps. God is the father who runs to embrace his wayward son. The initiative is God&apos;s. The seeking is God&apos;s. Salvation is God finding what was lost.',
        },
        {
          kind: 'carry',
          html:
            'The older son is angry at the celebration. "All these years do I serve thee, neither transgressed I at any time thy commandment: and yet thou never gavest me a kid, that I might make merry with my friends. But as soon as this thy son was come... thou hast killed for him the fatted calf." The father says: "Son, thou art ever with me, and all that I have is thine. But it was meet that we should make merry... for this thy brother was dead, and is alive again."',
        },
        {
          kind: 'reflection',
          id: 'luke15-prodigal-reflect',
          prompt: 'Do you identify with the prodigal son, the elder son, or the waiting father? What does the father&apos;s running embrace tell you about God&apos;s love?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine? This my son was dead, and is alive again; he was lost, and is found.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 15 · Study Guide',
  },

  hasHebrew: false,
};
