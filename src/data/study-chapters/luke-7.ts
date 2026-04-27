import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 7 — Faith and Transformation
 *
 * A centurion sends elders to Jesus asking Him to heal his servant. Jesus
 * marvels: "I have not found so great faith, no, not in Israel." At Nain,
 * Jesus meets a widow whose only son is dead. "Weep not," He says. He touches
 * the coffin. "Young man, I say unto thee, Arise." The dead is raised. John
 * the Baptist sends disciples asking: "Art thou he that should come?" Jesus
 * answers by pointing to the works: the blind see, the dead are raised, the
 * poor hear the gospel. At a Pharisee&apos;s house, a sinful woman anoints
 * His feet with tears and ointment. Simon is scandalized. Jesus says: "Her
 * sins, which are many, are forgiven; for she loved much."
 */
export const LUKE_7: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 7,

  intros: [
    'A centurion, a commander of Roman soldiers, hears of Jesus. His beloved servant is sick and close to death. He sends elders of the Jews to Jesus, asking Him to come and heal the servant. Jesus sets out. When He is not far from the house, the centurion sends friends to say: "Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof." The centurion understands authority. "For I also am a man set under authority, having under me soldiers... and I say unto one, Go, and he goeth."',
    'Jesus hears this and marvels. He says to those following Him: "I say unto you, I have not found so great faith, no, not in Israel." The faith of a pagan soldier exceeds the faith of those in Israel. The friends return to the house and find the servant whole. Meanwhile, Jesus comes to the city of Nain. A widow meets Him, carrying her only son to the grave. Jesus is moved with compassion. "Weep not," He says. He touches the bier. The young man sits up and speaks.',
  ],

  sections: [
    {
      ref: 'Luke 7:1–35',
      title: 'The Centurion and John&apos;s Question',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(6, 'Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof:'),
            plain(7, 'Wherefore neither thought I myself worthy to come unto thee: but say in a word, and my servant shall be healed.'),
            plain(9, 'When Jesus heard these things, he marvelled at him, and turned him about, and said unto the people that followed him, I say unto you, I have not found so great faith, no, not in Israel.'),
            plain(11, 'And it came to pass the day after, that he went into a city called Nain; and many of his disciples went with him, and much people.'),
            plain(14, 'And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise.'),
            plain(16, 'And there came a fear on all: and they glorified God, saying, That a great prophet is risen up among us; and, That God hath visited his people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke7-centurion',
          html:
            'The centurion understands authority. He commands soldiers. He knows that a word carries power. When Jesus commands, the heavens and earth obey. The centurion asks not for Jesus to come to his house, but merely to speak the word. This understanding—that distance does not limit the word of the one who speaks with authority—is faith. Jesus marvels. He has found greater faith in a pagan soldier than in all Israel.',
        },
        {
          kind: 'greek',
          id: 'luke7-pistis',
          title: 'Pistis — Faith; Trust; Conviction',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; belief; conviction',
          description:
            'The centurion&apos;s faith is not mere intellectual assent. It is trust—confidence that Jesus has the authority and power to heal from a distance. It is conviction that the word is enough.',
        },
        {
          kind: 'commentary',
          id: 'luke7-nain',
          html:
            'Jesus enters the city of Nain. A procession is coming out—a young man being carried to his grave. His mother is a widow. Her only son is dead. The future is closed. There is only grief. Jesus meets her. "Weep not." Then He does something that shocks everyone: He touches the coffin. In Jewish law, touching the dead makes one unclean. But Jesus reaches beyond the law into compassion. The young man sits up. "And he began to speak." Jesus gives him back to his mother.',
        },
        {
          kind: 'commentary',
          id: 'luke7-john',
          html:
            'John the Baptist, imprisoned by Herod, sends two of his disciples to Jesus with a question: "Art thou he that should come, or look we for another?" Has God really sent you? Are you the one we have been waiting for? Jesus does not argue. He points to the signs: "Go your way, and tell John what things ye have seen and heard; how that the blind see, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised, to the poor the gospel is preached."',
        },
        {
          kind: 'christ',
          id: 'luke7-christ-signs',
          title: 'Christ Connection — The Works Bear Witness',
          html:
            'Jesus does not demand belief. He invites investigation. Look at the works. The blind receive sight. The dead are raised. The poor hear good news. These are the signs of the Messiah, as Isaiah prophesied. The works themselves bear witness to who Jesus is.',
        },
        {
          kind: 'carry',
          html:
            'Jesus speaks of John: "What went ye out into the wilderness for to see? A reed shaken with the wind? But what went ye out for to see? A man clothed in soft raiment? Behold, they which are gorgeously apparelled, and live delicately, are in kings&apos; courts." John is no reed, no courtier. John is a prophet. More than a prophet. He is the forerunner, the messenger sent before Jesus&apos; face.',
        },
        {
          kind: 'reflection',
          id: 'luke7-john-faith-reflect',
          prompt: 'When you doubt whether Jesus is who He claimed to be, what signs do you look for? What would strengthen your faith?',
        },
      ],
    },

    {
      ref: 'Luke 7:36–50',
      title: 'The Sinful Woman&apos;s Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(36, 'And one of the Pharisees desired him that he would eat with him. And he went into the Pharisee&apos;s house, and sat down to meat.'),
            plain(38, 'And, behold, a woman in the city, which was a sinner, when she knew that Jesus sat at meat in the Pharisee&apos;s house, brought an alabaster box of ointment,'),
            plain(39, 'And stood at his feet behind him weeping, and began to wash his feet with tears, and did wipe them with the hairs of her head, and kissed his feet, and anointed them with the ointment.'),
            plain(40, 'Now when the Pharisee which had bidden him saw it, he spake within himself, saying, This man, if he were a prophet, would have known who and what manner of woman this is that toucheth him: for she is a sinner.'),
            plain(47, 'Wherefore I say unto thee, Her sins, which are many, are forgiven; for she loved much: but to whom little is forgiven, the same loveth little.'),
            plain(50, 'And he said to the woman, Thy faith hath saved thee; go in peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke7-sinner',
          html:
            'A woman "which was a sinner" learns that Jesus is eating at the Pharisee&apos;s house. She comes with an alabaster box of ointment. She stands at Jesus&apos; feet weeping. She washes His feet with her tears. She dries them with her hair. She kisses them. She anoints them with ointment. Every action is an act of repentance, of love, of devotion. She does not speak. She acts. Her tears, her touch, her ointment say what words cannot.',
        },
        {
          kind: 'greek',
          id: 'luke7-agapē',
          title: 'Agapē — Love; Divine Love; Self-giving',
          script: 'ἀγάπη',
          translit: '<strong>Agapē</strong> · love; self-giving love; divine love',
          description:
            'The woman&apos;s love is agapē—not mere sentiment, but action, sacrifice, self-giving. She pours out the costly ointment. She bathes His feet with tears. Her love is expressed in what she does.',
        },
        {
          kind: 'commentary',
          id: 'luke7-pharisee',
          html:
            'The Pharisee is scandalized. If Jesus were a prophet, He would know what manner of woman this is—that she is a sinner. Her touch would defile Him. But Simon misunderstands holiness. Holiness is not separation from sinners. Holiness is the power to save sinners. Jesus says to Simon: "I have somewhat to say unto thee." He tells a parable of two debtors—one owing much, one little. Both are forgiven. Who loves more? Simon answers: "He, I suppose, to whom he forgave most." Exactly.',
        },
        {
          kind: 'commentary',
          id: 'luke7-forgiveness',
          html:
            'Jesus turns to the woman. "Her sins, which are many, are forgiven; for she loved much." Her love is the evidence and expression of her faith. She has not earned forgiveness by her acts. She has already been forgiven. Her acts of love are the response to that forgiveness. "Thy faith hath saved thee; go in peace." She goes restored, whole, forgiven, at peace.',
        },
        {
          kind: 'christ',
          id: 'luke7-christ-forgiveness',
          title: 'Christ Connection — Grace and Love',
          html:
            'The woman&apos;s story reveals the heart of the gospel. Forgiveness does not come because we love much. Love comes because we are forgiven much. We love because He first loved us. The one who understands the depth of her need, the magnitude of her forgiveness, loves most.',
        },
        {
          kind: 'reflection',
          id: 'luke7-woman-reflect',
          prompt: 'Do you identify more with Simon or with the sinful woman? What would it mean for you to wash Jesus&apos; feet with tears?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have not found so great faith, no, not in Israel. Young man, I say unto thee, Arise. Her sins, which are many, are forgiven; for she loved much.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 7 · Study Guide',
  },

  hasHebrew: false,
};
