import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 2 — Pentecost: The Spirit Comes in Power
 *
 * The promise is fulfilled. Cloven tongues of fire rest upon each of the
 * one hundred twenty believers. They speak in other languages as the Spirit
 * gives them utterance. Peter rises and addresses the crowd with boldness.
 * Three thousand souls are baptized in a single day. The church is born.
 */
export const ACTS_2: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 2,

  intros: [
    'The Spirit comes not as a whisper, not as a private experience, but with visible and audible power. Cloven tongues of fire fill the house. The disciples are filled with the Holy Ghost and begin to speak in languages they have not learned. The sound draws a crowd from every nation under heaven. Peter, who denied his Lord at the crucifixion, now stands among the apostles and testifies with authority: "Let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ." The response is immediate and overwhelming. Three thousand believe and are baptized in a single day.',
    'This is the moment the disciples have been waiting for. The promise is fulfilled. The power has come. And in that power, the gospel spreads like fire.',
  ],

  sections: [
    {
      ref: 'Acts 2:1–21',
      title: 'Pentecost: Fire and Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(2, 'And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.'),
            plain(3, 'And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.'),
            plain(4, 'And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.'),
            plain(12, 'And they were all amazed, and were in doubt, saying one to another, What meaneth this?'),
            plain(14, 'But Peter, standing up with the eleven, lifted up his voice, and said unto them, Ye men of Judaea, and all ye that dwell at Jerusalem, be this known unto you, and hearken to my words:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-wind-fire',
          html:
            'The Spirit comes with signs that echo the Old Testament—the rushing mighty wind recalls the Spirit hovering over the waters in Genesis. The cloven tongues of fire recall the presence of God manifesting in flame. This is not a private experience confined to the upper room. The sound draws crowds. What is hidden from sight—the work of the Spirit—becomes visible in signs and wonders.',
        },
        {
          kind: 'greek',
          id: 'acts2-heterais',
          title: 'Heterais Glossais — Other Tongues',
          script: 'ἑτέραις γλώσσαις',
          translit: '<strong>Heterais glossais</strong> · other languages; foreign languages',
          description:
            'The disciples speak in languages they have not learned. This is not ecstatic utterance alone, but intelligible speech. Men from Parthia, Media, Elam, Mesopotamia, Judaea, Cappadocia, Asia, Phrygia, Pamphylia, Egypt, Libya, Rome—each hears in their own language the mighty works of God. The Spirit enables communication across all barriers.',
        },
        {
          kind: 'commentary',
          id: 'acts2-peter-bold',
          html:
            'Peter, the same man who thrice denied knowing Jesus, now stands with the eleven and proclaims the gospel openly. This is the work of the Holy Ghost. The Spirit does not make Peter unafraid—fear is not mentioned. Rather, the Spirit fills him with power, and in that power, boldness becomes natural. He knows himself to be a witness, and no threat can silence that witness.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-pentecost',
          title: 'Christ Connection — The Spirit and the Risen Christ',
          html:
            'Peter&apos;s sermon makes clear: the Holy Ghost is the gift of the risen Christ. Jesus, exalted to the right hand of God, has poured out the Spirit upon all flesh. This is not a return to the Old Testament. This is something new—the universal outpouring of God&apos;s Spirit, enabling all believers to witness and work miracles.',
        },
        {
          kind: 'carry',
          html:
            'The disciples receive the promise. The Spirit fills them, and immediately they are witnesses. You need not wait for perfect circumstances or perfect words. The Spirit equips you, as He equipped Peter, to speak truth in your own language, to your own people, in your own time.',
        },
        {
          kind: 'reflection',
          id: 'acts2-spirit-filling',
          prompt: 'What would it mean for the Holy Spirit to fill you as He filled the disciples at Pentecost? How does the Spirit equip you to witness?',
        },
      ],
    },

    {
      ref: 'Acts 2:22–47',
      title: 'Baptism and Fellowship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(37, 'Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do?'),
            plain(38, 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.'),
            plain(41, 'Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls.'),
            plain(42, 'And they continued stedfastly in the apostles&apos; doctrine and fellowship, and in breaking of bread, and in prayers.'),
            plain(44, 'And all that believed were together, and had all things common;'),
            plain(47, 'Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-repentance',
          html:
            'The hearts of the listeners are pricked. They understand the gravity of what they have done—they have rejected and crucified the Messiah. Yet Peter&apos;s word is not condemnation. It is an invitation: repent, and be baptized. There is a way forward, a way of forgiveness and restoration. The Holy Ghost is offered to all who believe.',
        },
        {
          kind: 'commentary',
          id: 'acts2-community',
          html:
            'Three thousand are baptized in a single day. The church grows not through centuries of slow persuasion, but through a single word, a single moment of power. And these new believers do not scatter. They gather. They learn from the apostles. They share meals together. They pray. They hold all things in common. The Spirit creates not just individual believers, but a community bound by faith and fellowship.',
        },
        {
          kind: 'greek',
          id: 'acts2-koinonia',
          title: 'Koinonia — Fellowship',
          script: 'κοινωνία',
          translit: '<strong>Koinonia</strong> · fellowship; communion; sharing; partnership',
          description:
            'The early church is not a collection of isolated believers. It is a koinonia—a deep sharing of life, resources, worship, and mission. This fellowship is not a luxury or an option. It flows from the shared experience of the Spirit and becomes the context in which faith grows and matures.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-church',
          title: 'Christ Connection — The Body of Christ Gathered',
          html:
            'In this gathering—this koinonia—we see the body of Christ taking form. They break bread together, recalling the Last Supper, the body of Christ given and broken. They are individually baptized into the name of Jesus, united with His death and resurrection. Corporately, they become the body through which Christ continues His work in the world.',
        },
        {
          kind: 'carry',
          html:
            'The believers in Jerusalem had joy, favor, and growth because they were together. They did not hoard their faith or their possessions. They shared everything. How might your faith community be transformed if you truly shared your lives—your resources, your time, your burdens—with one another?',
        },
        {
          kind: 'reflection',
          id: 'acts2-fellowship-reflection',
          prompt: 'What does it mean to you to be part of a faith community that shares life together? How does Christian fellowship strengthen your faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance. Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 2 · Study Guide',
  },

  hasHebrew: false,
};
