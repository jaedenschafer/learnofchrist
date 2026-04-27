import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 3 — The Lame Man at the Beautiful Gate
 *
 * Peter and John heal a man lame from birth at the gate of the temple.
 * The man leaps and praises God. Peter addresses the amazed crowd and calls
 * them to repent: "Times of refreshing shall come from the presence of the Lord."
 */
export const ACTS_3: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 3,

  intros: [
    'The apostles move freely in Jerusalem, entering the temple at the hour of prayer. At the gate called Beautiful sits a man, lame from his mother&apos;s womb, carried daily to beg alms. For forty years he has sat there, watching the faithful enter to worship, denied access to their holiness. Peter and John pass by, and Peter, filled with the Holy Ghost, commands the lame man to rise. "In the name of Jesus Christ of Nazareth, rise up and walk." The man leaps, stands, and enters the temple with them, walking, and leaping, and praising God.',
    'The healing draws crowds. And in that moment of wonder, Peter sees an opportunity. He does not claim power for himself or John. Instead, he points to Jesus, calling the people to faith in the one they crucified but whom God has raised.',
  ],

  sections: [
    {
      ref: 'Acts 3:1–16',
      title: 'The Lame Man Healed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(2, 'And a certain man lame from his mother&apos;s womb was carried daily: whom they laid at the gate of the temple which is called Beautiful, to ask alms of them that entered into the temple;'),
            plain(6, 'Then Peter said, Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk.'),
            plain(7, 'And he took him by the right hand, and lifted him up: and immediately his feet and ankle bones received strength.'),
            plain(8, 'And he leaping up stood, and walked, and entered with them into the temple, praising God.'),
            plain(12, 'And when Peter saw it, he answered unto the people, Ye men of Israel, why marvel ye at this? or why look ye so earnestly on us, as though by our own power or holiness we had made this man to walk?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-beggar',
          html:
            'The man lame from birth is a fixture at the temple gate. He is brought there daily, passed by daily, denied the ability to walk or serve. He has known only limitation. Peter does not pity him. He does not give him alms. He gives him something far greater: he releases him from his bondage through the power of the name of Jesus.',
        },
        {
          kind: 'greek',
          id: 'acts3-onoma',
          title: 'Onoma — Name',
          script: 'ὄνομα',
          translit: '<strong>Onoma</strong> · name; authority; reputation; person',
          description:
            'The name of Jesus is not merely a label. It is His person, His authority, His power. To act in the name of Jesus is to act with His authority, as His representatives. The healing is not Peter&apos;s work. It is the work of Jesus, accomplished through His apostles in His name.',
        },
        {
          kind: 'commentary',
          id: 'acts3-holiness',
          html:
            'Peter immediately corrects a dangerous misunderstanding. The crowds are amazed and look to Peter and John as though their own holiness or power has wrought this miracle. Peter denies this. It is not our power. It is the power of Jesus, whom ye denied and crucified, but whom God has raised. The focus must remain on Christ, not on the apostles.',
        },
        {
          kind: 'christ',
          id: 'acts3-christ-name',
          title: 'Christ Connection — The Power in Jesus&apos; Name',
          html:
            'The lame man walks in the name of Jesus. This is not magic. It is faith—the apostles&apos; faith in the resurrection and power of Jesus, and the beggar&apos;s willingness to rise and walk. Jesus, though absent in body, is present in power, working through His apostles to heal and restore.',
        },
        {
          kind: 'carry',
          html:
            'The man sat at the gate called Beautiful for forty years, waiting for alms. The apostles offered him something he had never imagined: the ability to stand, to walk, to enter the temple. What limitations have you accepted as permanent? What might Jesus be asking you to rise and walk into?',
        },
        {
          kind: 'reflection',
          id: 'acts3-healing-reflection',
          prompt: 'What spiritual or emotional lamenesses keep you from entering fully into God&apos;s presence? What would it mean to rise up and walk in the name of Jesus?',
        },
      ],
    },

    {
      ref: 'Acts 3:17–26',
      title: 'Times of Refreshing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord;'),
            plain(22, 'For Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear in all things whatsoever he shall say unto you.'),
            plain(25, 'Ye are the children of the prophets, and of the covenant which God made with our fathers, saying unto Abraham, And in thy seed shall all the kindreds of the earth be blessed.'),
            plain(26, 'Unto you first God, sending his Son Jesus, hath raised him up, and sent him to bless you, in turning away every one of you from his iniquities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-refreshing',
          html:
            '"Times of refreshing shall come from the presence of the Lord." Peter holds out hope even to those who have rejected and crucified Jesus. Repentance is possible. Sins can be blotted out. The presence of the Lord brings restoration, renewal, life. This is not condemnation, but an invitation to turn around and walk toward God.',
        },
        {
          kind: 'commentary',
          id: 'acts3-prophet',
          html:
            'Peter calls Jesus the prophet of whom Moses spoke—the one like unto Moses, who would speak God&apos;s words and lead God&apos;s people. Jesus is the fulfillment of Israel&apos;s deepest expectations. He is not a foreign god, but the continuation and completion of what God has always been doing with His people.',
        },
        {
          kind: 'christ',
          id: 'acts3-christ-prophet',
          title: 'Christ Connection — Jesus the Prophet',
          html:
            'Jesus is presented as the prophet God promised to raise up—the one like unto Moses. But more than that, He is God&apos;s Son, sent to bless Israel and all the kindreds of the earth by turning them away from their iniquities. The blessing promised to Abraham&apos;s seed has come to pass in Jesus.',
        },
        {
          kind: 'carry',
          html:
            'Peter calls the people to repent and turn to God, promising that when they do, times of refreshing will come. Refreshing does not come through effort or achievement. It comes from the presence of the Lord, when we turn toward Him in faith.',
        },
        {
          kind: 'reflection',
          id: 'acts3-repent-reflection',
          prompt: 'What would it mean to experience "times of refreshing" from God&apos;s presence in your life right now? What might you need to repent of and turn away from?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In the name of Jesus Christ of Nazareth rise up and walk. Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 3 · Study Guide',
  },

  hasHebrew: false,
};
