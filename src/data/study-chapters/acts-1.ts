import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 1 — The Ascension and the Promise of Power
 *
 * Jesus appears to His disciples for forty days after His resurrection,
 * speaking of the kingdom of God. Then, in the presence of many witnesses,
 * He is taken up into heaven. Before He goes, He leaves them with a promise:
 * "Ye shall receive power, after that the Holy Ghost is come upon you."
 */
export const ACTS_1: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 1,

  intros: [
    'The Book of Acts opens not with doctrine, but with a promise. Jesus has risen. For forty days He walks among His disciples, teaching them about the kingdom of God. They are amazed, confused, hopeful. But before His final departure, they ask a deeply human question: "Lord, wilt thou at this time restore again the kingdom to Israel?" They are still thinking of kingdoms as earthly domains, as political powers. Jesus redirects them: "It is not for you to know the times or the seasons... but ye shall receive power, after that the Holy Ghost is come upon you."',
    'The disciples gather to choose a replacement for Judas. Matthias is selected by lot. The stage is set. One hundred twenty believers wait in Jerusalem, obedient to the command to tarry until the promise is fulfilled.',
  ],

  sections: [
    {
      ref: 'Acts 1:1–11',
      title: 'The Promise of Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(3, 'To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the kingdom of God:'),
            plain(4, 'And, being assembled together with them, commanded them that they should not depart from Jerusalem, but wait for the promise of the Father, which, saith he, ye have heard of me.'),
            plain(8, 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.'),
            plain(9, 'And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.'),
            plain(11, 'Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-forty-days',
          html:
            'For forty days after the resurrection, Jesus appears to His disciples, teaching them about the kingdom of God. This is not a distant, abstract instruction. These are appearances, physical presences, conversations. They are not merely learning doctrine—they are being remade by the sight of the risen Lord. And in all that teaching, the central theme remains: the kingdom is not about earthly authority or political restoration, but about the in-breaking of God&apos;s rule through the Holy Spirit.',
        },
        {
          kind: 'greek',
          id: 'acts1-dunamis',
          title: 'Dunamis — Power',
          script: 'δύναμις',
          translit: '<strong>Dunamis</strong> · power; ability; strength; mighty work',
          description:
            'The word dunamis refers not to power as force or coercion, but to power as divine enablement—the capacity to perform mighty works. This is the power to witness, to heal, to overcome. It is not the disciples&apos; own strength or cleverness. It comes through the Holy Ghost, making them vessels of God&apos;s action in the world.',
        },
        {
          kind: 'commentary',
          id: 'acts1-witnesses',
          html:
            '"And ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." The mission is defined at the very beginning. The gospel will not remain in Jerusalem. It will spread outward, to the familiar and to the foreign, to the ends of the earth. This is not a geographical accident. It is the deliberate expansion of the kingdom.',
        },
        {
          kind: 'christ',
          id: 'acts1-christ-ascension',
          title: 'Christ Connection — The Ascension and the Promise',
          html:
            'Jesus ascends to the Father not as a defeat, but as the completion of His earthly work and the beginning of His heavenly ministry. He does not leave His disciples as orphans. He leaves them with a promise: the Holy Ghost will come, not as a consolation prize, but as the empowering presence of God Himself. Through the Spirit, Jesus&apos; work continues.',
        },
        {
          kind: 'carry',
          html:
            'The disciples stand gazing up into heaven, and the angels ask: why stand ye gazing? The direction of their hope is being redirected—not upward into the sky, but outward into the world. The promise of power is not for private spiritual experience, but for witness. Where is God asking you to be a witness to His kingdom?',
        },
        {
          kind: 'reflection',
          id: 'acts1-witness-power',
          prompt: 'What does it mean to receive power to witness? Where in your life are you called to be a witness to what Jesus has done?',
        },
      ],
    },

    {
      ref: 'Acts 1:12–26',
      title: 'Matthias Chosen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(15, 'And in those days Peter stood up in the midst of the brethren, and said, (the number of names together were about an hundred and twenty,)'),
            plain(20, 'For it is written in the book of Psalms, Let his habitation be desolate, and let no man dwell therein: and his bishoprick let another take.'),
            plain(21, 'Wherefore of these men which have companied with us all the time that the Lord Jesus went in and out among us,'),
            plain(23, 'And they appointed two, Joseph called Barsabas, who was surnamed Justus, and Matthias.'),
            plain(24, 'And they prayed, and said, Thou, Lord, which knowest the hearts of all men, shew whether of these two thou hast chosen,'),
            plain(26, 'And the lot fell upon Matthias; and he was numbered with the eleven apostles.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-choosing',
          html:
            'Before Pentecost, before the Spirit falls, the apostles choose a replacement for Judas. The criterion is clear: the replacement must have been with Jesus from the beginning, throughout His ministry. This is not a democratic vote for popularity. It is a careful discernment of who has true standing to testify to what they have seen and heard.',
        },
        {
          kind: 'commentary',
          id: 'acts1-lot',
          html:
            'The lot falls on Matthias. The disciples do not announce their preference and defer to his humility. They do not hold a lengthy debate. They pray, asking God to reveal His choice, and then they cast lots. This is an ancient way of seeking God&apos;s will, letting chance reveal the hidden judgment of the Lord. Matthias is numbered with the eleven, fully apostolic, fully authoritative.',
        },
        {
          kind: 'christ',
          id: 'acts1-christ-twelve',
          title: 'Christ Connection — The Apostolic Foundation',
          html:
            'The twelve apostles are the witnesses who have seen the risen Lord. They are the foundation of the church&apos;s testimony. By choosing Matthias, the apostles are affirming that there are witnesses—not just the eleven, but others who have equally seen and believed. This plurality of witness will become the strength of the early church.',
        },
        {
          kind: 'carry',
          html:
            'Matthias is restored to the company of the apostles, his faithfulness affirmed. There is no resentment, no jockeying for position. The disciples are united, waiting for the promise. They have faced loss and betrayal, and they move forward in obedience and faith.',
        },
        {
          kind: 'reflection',
          id: 'acts1-choosing-reflection',
          prompt: 'When have you sensed God choosing you for a particular role or work? How do you discern God&apos;s will when facing a decision?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 1 · Study Guide',
  },

  hasHebrew: false,
};
