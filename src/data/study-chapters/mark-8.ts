import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 8 — The Way of the Cross
 *
 * Jesus feeds four thousand with seven loaves and a few fishes. The Pharisees
 * seek a sign. Jesus refuses: they are a faithless generation. Peter confesses:
 * "Thou art the Christ." Jesus begins to teach that He must suffer, be rejected,
 * be killed, and rise again. Peter rebukes Him. Jesus rebukes Peter: "Get thee
 * behind me, Satan." Then Jesus calls the disciples and all: "Whosoever will come
 * after me, let him deny himself, and take up his cross, and follow me. For
 * whosoever will save his life shall lose it; but whosoever shall lose his life
 * for my sake and the gospel&apos;s shall save it." The chapter pivots. Peter&apos;s
 * confession is met with the teaching of the cross. To follow Jesus is to embrace
 * a way of sacrifice and faith that leads through death to life.
 */
export const MARK_8: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 8,

  estimatedMinutes: { 5: 2, 10: 5, 15: 6 },
  intros: [
    'Mark 8 opens with a second feeding miracle, this time of four thousand. Jesus is moved with compassion for the crowds, noting they have been with Him three days and have nothing to eat. He takes seven loaves and gives thanks, breaks them, and distributes them. All eat and are satisfied. Then the Pharisees come and demand a sign from heaven. Jesus sighs deeply: "Why doth this generation seek after a sign?" No sign will be given to this faithless generation.',
    'Then comes the great turning point of Mark&apos;s gospel. Jesus is with His disciples, and He asks: "Whom do men say that I am?" After they recount various opinions, He asks: "But whom say ye that I am?" Peter answers: "Thou art the Christ." This is the confession upon which the church will be built. Yet immediately Jesus begins to teach them that the Son of Man must suffer, be rejected, killed, and rise again. Peter rebukes Him. Jesus responds with a harsh rebuke of his own: "Get thee behind me, Satan." Then He teaches the central paradox of the gospel: to follow is to deny yourself, take up your cross, and lose your life to save it.',
  ],

  sections: [
    /* ─── Mark 8:1–21 — Two Feedings, One Truth ───────────────────────── */
    {
      ref: 'Mark 8:1–21',
      title: 'Bread and Blindness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'In those days the multitude being very great, and having nothing to eat, Jesus called his disciples unto him, and saith unto them,'),
            plain(2, 'I have compassion on the multitude, because they have now been with me three days, and have nothing to eat:'),
            plain(11, 'And the Pharisees came forth, and began to question with him, seeking of him a sign from heaven, tempting him.'),
            plain(12, 'And he sighed deeply in his spirit, and saith, Why doth this generation seek after a sign? verily I say unto you, There shall no sign be given unto this generation.'),
            plain(15, 'And he charged them, saying, Take heed, beware of the leaven of the Pharisees, and of the leaven of Herod.'),
            plain(22, 'And he cometh to Bethsaida; and they bring a blind man unto him, and besought him to touch him.'),
            plain(25, 'After that he put his hands again upon his eyes, and made him look up: and he was restored, and saw every man clearly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark8-second-feeding',
          html:
            'The second feeding is not the repetition of the first. It is a parallel that deepens the teaching. Jesus is moved with compassion on the crowd that has been with Him three days. He asks the disciples how many loaves they have. Seven loaves and a few fishes. He gives thanks, breaks the loaves, and distributes them. All eat and are satisfied. The theme is the same: Jesus&apos; compassion, His power to sustain, His provision for those who follow.',
        },
        {
          kind: 'commentary',
          id: 'mark8-no-sign',
          html:
            'The Pharisees come seeking a sign from heaven—a cosmic proof that will compel belief. Jesus refuses with evident exasperation: "Why doth this generation seek after a sign?" He has already performed many miracles. Yet the Pharisees seek a sign they can use to judge Him according to their criteria. Jesus will not be manipulated into such proof. "There shall no sign be given unto this generation."',
        },
        {
          kind: 'greek',
          id: 'mark8-anastenazo',
          title: 'Anastenazo — Sigh Deeply',
          script: 'ἀναστενάζω',
          translit: '<strong>Anastenazo</strong> · sigh deeply; groan; express distress or weariness',
          description:
            'Jesus sighs deeply in His spirit. This is not a casual exhalation but a profound expression of grief and exhaustion before the hardness of hearts that refuse to see.',
        },
        {
          kind: 'commentary',
          id: 'mark8-blind-healed',
          html:
            'At Bethsaida, a blind man is brought to Jesus. Mark describes the healing in stages: Jesus spits on his eyes, lays hands on him, asks if he sees. The man reports he sees people as trees walking. Jesus lays His hands on his eyes again. Then the man sees clearly. This two-stage healing is unique in Mark—it illustrates the disciples&apos; own journey from partial sight to full understanding.',
        },
        {
          kind: 'christ',
          id: 'mark8-christ-provision',
          title: 'Christ Connection — The Bread of the Kingdom',
          html:
            'The two feedings, separated by rejection and faithlessness, frame Jesus as the provider of bread—not merely physical sustenance but spiritual sustenance. He feeds both multitude and individual. He is the bread by which we live.',
        },
        {
          kind: 'carry',
          html:
            'The disciples are warned to "beware of the leaven of the Pharisees, and of the leaven of Herod." Leaven represents a corrupting influence that spreads. The disciples themselves struggle with understanding. They worry they have no bread. Jesus asks: "Do ye not yet understand?" Blindness, dullness of heart, inability to perceive—these are the real dangers.',
        },
        {
          kind: 'reflection',
          id: 'mark8-see-clearly',
          prompt: 'What blindnesses do you carry? What would it take for you to see Jesus and His kingdom clearly?',
        },
      ],
    },

    /* ─── Mark 8:22–38 — Peter's Confession and the Way of the Cross ──── */
    {
      ref: 'Mark 8:22–38',
      title: 'The Christ and the Cost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(29, 'And he saith unto them, But whom say ye that I am? And Peter answereth and saith unto him, Thou art the Christ.'),
            plain(31, 'And he began to teach them, that the Son of man must suffer many things, and be rejected of the elders, and of the chief priests, and scribes, and be killed, and after three days rise again.'),
            plain(32, 'And he spake that saying openly. And Peter took him, and began to rebuke him.'),
            plain(33, 'But when he had turned about and looked on his disciples, he said unto Peter, Get thee behind me, Satan: for thou savourest not the things that be of God, but the things that be of men.'),
            plain(34, 'And when he had called the people unto him with his disciples also, he said unto them, Whosoever will come after me, let him deny himself, and take up his cross, and follow me.'),
            plain(35, 'For whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel&apos;s shall save it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark8-who-am-i',
          html:
            'Jesus asks His disciples: "Whom say ye that I am?" Peter answers: "Thou art the Christ." The Greek word is Christos—the anointed one, the Messiah. Peter confesses the fundamental truth of the gospel. Yet his understanding is incomplete. He does not yet understand what it means for the Messiah to suffer and die.',
        },
        {
          kind: 'commentary',
          id: 'mark8-must-suffer',
          html:
            'Immediately after Peter&apos;s confession, Jesus begins to teach them plainly that "the Son of man must suffer many things, and be rejected of the elders, and of the chief priests, and scribes, and be killed, and after three days rise again." The word "must" is significant. This is not contingent. This is necessary. This is the path the Messiah must walk. This is how redemption is accomplished.',
        },
        {
          kind: 'greek',
          id: 'mark8-dei',
          title: 'Dei — Must, It is necessary',
          script: 'δεῖ',
          translit: '<strong>Dei</strong> · it is necessary; it is fitting; it must be',
          description:
            'The word dei expresses divine necessity. The suffering and death of Jesus are not tragic accidents but necessary fulfillments of God&apos;s purpose. They are woven into the fabric of redemption.',
        },
        {
          kind: 'commentary',
          id: 'mark8-rebuke-peter',
          html:
            'Peter rebukes Jesus. This is extraordinary—the disciple correcting the master. Peter cannot accept the necessity of the cross. Jesus turns on him harshly: "Get thee behind me, Satan: for thou savourest not the things that be of God, but the things that be of men." Peter is thinking humanly—about honor, power, vindication. Jesus is thinking divinely—about sacrifice, redemption, the will of God.',
        },
        {
          kind: 'commentary',
          id: 'mark8-take-up-cross',
          html:
            'Jesus calls the crowds and disciples and teaches the fundamental principle of discipleship: "Whosoever will come after me, let him deny himself, and take up his cross, and follow me." Denying oneself means relinquishing the claim to run one&apos;s own life. Taking up the cross means embracing suffering, isolation, the way of death. But this is the way to life: "Whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel&apos;s shall save it."',
        },
        {
          kind: 'christ',
          id: 'mark8-christ-messiah',
          title: 'Christ Connection — The Suffering Messiah',
          html:
            'Jesus redefines what it means to be the Christ. Not a king who will overthrow Rome through military might, but a servant who will lay down His life as a ransom for many. The cross is not a defeat of the Messiah&apos;s mission. It is the means by which the mission is accomplished.',
        },
        {
          kind: 'carry',
          html:
            'The teaching on taking up one&apos;s cross is not metaphorical. It is an invitation to die—to die to self, to ambition, to the hope of vindication in this world. But paradoxically, it is the way to true life. Those who cling to their lives lose them. Those who lose their lives find them.',
        },
        {
          kind: 'reflection',
          id: 'mark8-cross-deny',
          prompt: 'What would it mean for you to deny yourself and take up your cross? What would you have to surrender to follow Jesus fully?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whosoever will come after me, let him deny himself, and take up his cross, and follow me. For whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel&apos;s shall save it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 8 · Study Guide',
  },

  hasHebrew: false,
};
