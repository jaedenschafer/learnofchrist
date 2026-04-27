import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 14 — At Lystra and Derbe
 *
 * Paul and Barnabas continue their journey, preaching in synagogues and to
 * Gentiles. At Lystra, Paul heals a crippled man, and the crowds believe he and
 * Barnabas are gods—Zeus and Hermes. The apostles barely restrain the people.
 * Later, Jews from other cities incite the crowd; Paul is stoned and left for
 * dead. Yet he recovers and continues preaching. The pattern repeats: power and
 * faith, followed by opposition and suffering.
 */
export const ACTS_14: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 14,

  intros: [
    'In Lystra, Paul encounters a man crippled from birth. The man has never walked. Paul perceives that he has faith to be healed, and he cries out, "Stand upright on thy feet." The man leaps and walks. The crowd, seeing this miracle, believes Paul and Barnabas are gods come down to earth. They prepare to sacrifice oxen to them.',
    'But the apostles refuse the worship due to God alone. And then, as suddenly as the crowd turned to adoration, it turns to violence. Jews from neighboring cities arrive and persuade the crowd. Paul is stoned and dragged outside the city, left as a corpse. The disciples gather around him, and he rises and continues preaching. Faithfulness to Christ brings both signs of God&apos;s power and the hostility of those opposed to His truth.',
  ],

  sections: [
    {
      ref: 'Acts 14:1–18',
      title: 'The Miracle and the Misunderstanding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(8, 'And there sat a certain man at Lystra, impotent in his feet, being a cripple from his mother&apos;s womb, who never had walked:'),
            plain(9, 'The same heard Paul speak: who stedfastly beholding him, and perceiving that he had faith to be healed,'),
            plain(10, 'Said with a loud voice, Stand upright on thy feet. And he leaped and walked.'),
            plain(11, 'And when the people saw what Paul had done, they lifted up their voices, saying in the speech of Lycaonia, The gods are come down to us in the likeness of men.'),
            plain(14, 'Which when the apostles, Barnabas and Paul, heard of, they rent their clothes, and ran in among the people, crying out,'),
            plain(15, 'And saying, Sirs, why do ye these things? We also are men of like passions with you, and preach unto you that ye should turn from these vanities unto the living God, which made heaven, and earth, and the sea, and all things that are therein:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-faith-to-be-healed',
          html:
            'Paul perceives faith in the crippled man—not words, but an inner conviction that healing is possible. And Paul acts on that perception. "Stand upright on thy feet." The command is an affirmation of the man&apos;s faith and a call to his participation in his own healing. The man leaps up and walks.',
        },
        {
          kind: 'greek',
          id: 'acts14-pisteuo',
          title: 'Pisteuo — Faith; To Believe',
          script: 'πιστεύω',
          translit: '<strong>Pisteuo</strong> · to believe; to have faith; to put confidence in',
          description:
            'Paul perceives that the man "had faith to be healed." This is not belief about Jesus or correct doctrine, but a deeper trust: openness to God&apos;s power, willingness to receive healing. Faith in this moment is the removal of the barrier between desire and possibility.',
        },
        {
          kind: 'commentary',
          id: 'acts14-gods-descended',
          html:
            'The people of Lystra interpret the miracle through their own religious understanding. They know stories of gods descending to earth in human form. They have a framework for the miraculous, but it is a framework that makes them miss the truth. They name Paul "Mercurius" and Barnabas "Jupiter." The apostles must correct the misinterpretation before the worship can continue.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-not-gods',
          title: 'Christ Connection — The Creator, Not the Created',
          html:
            'Paul redirects the worship to the "living God which made heaven, and earth, and the sea, and all things that are therein." The miracle is not a sign of Paul&apos;s divinity, but of the power of the God Paul serves. Christ&apos;s apostles are servants and witnesses, never recipients of worship.',
        },
        {
          kind: 'carry',
          html:
            'We are tempted to worship the wrong things: leaders, achievements, our own competence. But all power, all healing, all grace flows from God alone. When you see God at work, be careful not to stop at the instrument and forget the source. The miracle points beyond itself to the Creator.',
        },
        {
          kind: 'reflection',
          id: 'acts14-worship',
          prompt: 'What do you tend to worship instead of God? How might Paul and Barnabas&apos; refusal to accept worship teach you about the proper ordering of your allegiances?',
        },
      ],
    },

    {
      ref: 'Acts 14:19–28',
      title: 'Persecution and Perseverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(19, 'And there came thither certain Jews from Antioch and Iconium, who persuaded the multitudes: and they stoned Paul, and drew him out of the city, supposing he was dead.'),
            plain(20, 'Howbeit, as the disciples stood round about him, he rose up, and came into the city: and the next day he departed with Barnabas for Derbe.'),
            plain(21, 'And when they had preached the gospel to that city, and had taught many, they returned again to Lystra, and to Iconium, and to Antioch,'),
            plain(22, 'Confirming the souls of the disciples, and exhorting them to continue in the faith, and that we must through much tribulation enter into the kingdom of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-stoning',
          html:
            'The crowd turns on Paul with violence. He is stoned and left outside the city for dead. In a moment, the adulation has become assault. Paul&apos;s body is bruised, broken. Yet he does not flee in fear. He rises and enters the city again. The next day, he departs with Barnabas to Derbe, continuing the mission.',
        },
        {
          kind: 'greek',
          id: 'acts14-thlipsis',
          title: 'Thlipsis — Tribulation; Pressure',
          script: 'θλίψις',
          translit: '<strong>Thlipsis</strong> · tribulation; affliction; pressure; distress; constraint',
          description:
            'Paul tells his converts that tribulation is not a sign of failure or abandonment by God. It is part of the path to the kingdom. The word thlipsis carries the sense of pressure, of being squeezed. But pressure, paradoxically, can forge strength and purity in faith.',
        },
        {
          kind: 'commentary',
          id: 'acts14-confirm',
          html:
            'Paul and Barnabas retrace their steps through the cities where they have preached, returning even to Lystra where Paul was stoned. They are not fleeing but consolidating. They strengthen and encourage the young believers, reminding them that suffering is part of their inheritance as followers of Christ.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-sufferer',
          title: 'Christ Connection — Suffering as the Pattern',
          html:
            'Paul learned from Christ Himself that faithfulness leads through suffering. Jesus was rejected, beaten, crucified. His apostles are not exempt from this pattern. They suffer not as punishment, but as participants in Christ&apos;s redemptive work. And in the suffering, the gospel spreads and believers are deepened.',
        },
        {
          kind: 'carry',
          html:
            'We are taught to expect comfort and success as signs of God&apos;s blessing. But Paul shows us a different vision: suffering is part of the path to the kingdom. Not all suffering is redemptive, but the willingness to endure suffering for the sake of Christ opens us to a depth of faith that comfort cannot produce.',
        },
        {
          kind: 'reflection',
          id: 'acts14-suffering',
          prompt: 'How does Paul&apos;s teaching that "we must through much tribulation enter into the kingdom of God" challenge your expectations of faith? Where is suffering deepening your faith rather than destroying it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Stand upright on thy feet. And he leaped and walked. We also are men of like passions with you, and preach unto you that ye should turn from these vanities unto the living God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 14 · Study Guide',
  },

  hasHebrew: false,
};
