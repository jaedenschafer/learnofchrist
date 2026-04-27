import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 2 — The Lord of the Sabbath
 *
 * A man paralyzed is let down through a roof. Jesus sees the faith of those who
 * brought him and forgives his sins. "Thy sins be forgiven thee." But the
 * scribes are scandalized. Only God can forgive sins. Then Jesus heals the man
 * and rises—walking. He calls Levi the tax collector, eats with sinners and
 * publicans. "I came not to call the righteous, but sinners to repentance." The
 * chapter crescendos with a question about the Sabbath: "The sabbath was made
 * for man, and not man for the sabbath." Jesus is not merely a healer. He is
 * the one who redefines the law itself, who calls the outcast, who forgives what
 * only God can forgive. In Him, the old order is transformed.
 */
export const MARK_2: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 2,

  intros: [
    'Mark 2 presents a series of confrontations between Jesus and the religious establishment. Each reveals a deeper truth about who Jesus is and what the kingdom of God means. A paralyzed man is brought before Him—not by the wealthy or the connected, but by friends who tear open a roof to access Jesus. Jesus looks at this scene and sees something the scribes cannot see: the faith that moved men to such extraordinary action. He forgives the man&apos;s sins. Immediately, the scribes whisper their objection. Only God can forgive sins. But Jesus answers them with a question and a demonstration.',
    'Throughout the chapter, the themes deepen. Jesus calls Levi, a tax collector—a man despised by the righteous as a traitor to Israel. He eats in Levi&apos;s house with other publicans and sinners. When questioned, Jesus responds: "They that are whole have no need of the physician; but they that are sick. I came not to call the righteous, but sinners to repentance." The chapter ends with the Sabbath controversy: men plucking grain on the Sabbath, and Jesus declaring that the Sabbath was made for humanity, not humanity for the Sabbath. The old law is being interpreted anew.',
  ],

  sections: [
    /* ─── Mark 2:1–12 — Forgiveness and Healing ───────────────────────── */
    {
      ref: 'Mark 2:1–12',
      title: 'The Authority to Forgive',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And again he entered into Capernaum after some days; and it was noised that he was in the house.'),
            plain(3, 'And they come unto him, bringing one sick of the palsy, which was borne of four.'),
            plain(5, 'When Jesus saw their faith, he said unto the sick of the palsy, Son, thy sins be forgiven thee.'),
            plain(6, 'But there were certain of the scribes sitting there, and reasoning in their hearts,'),
            plain(7, 'Why doth this man thus speak blasphemies? who can forgive sins but God only?'),
            plain(8, 'And immediately when Jesus perceived in his spirit that they so reasoned within themselves, he said unto them, Why reason ye these things in your hearts?'),
            plain(9, 'Whether is it easier to say to the sick of the palsy, Thy sins be forgiven thee; or to say, Arise, and take up thy bed, and walk?'),
            plain(10, 'But that ye may know that the Son of man hath power on earth to forgive sins, (he saith to the sick of the palsy,)'),
            plain(11, 'I say unto thee, Arise, and take up thy bed, and go thy way into thine house.'),
            plain(12, 'And immediately he arose, took up the bed, and went forth before them all; insomuch that they were all amazed, and glorified God, saying, We never saw it on this fashion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark2-faith-seen',
          html:
            'Mark tells us that Jesus saw their faith. Not the faith of the paralyzed man alone, but the faith of his friends—the faith that moved them to tear open a roof, to lower him down before Jesus. Faith is not solitary. It is carried by others, expressed through community, visible in action. Jesus responds not to the paralyzed man&apos;s words but to the faith of those who brought him.',
        },
        {
          kind: 'commentary',
          id: 'mark2-forgive',
          html:
            'Jesus says: "Thy sins be forgiven thee." The scribes are correct on one point: only God can forgive sins. This is not a matter of human authority or moral goodness. It is God&apos;s prerogative alone. By pronouncing forgiveness, Jesus is claiming a divine function. By healing the paralyzed man afterward, He proves that His claim is not empty. The two are inseparable: forgiveness is the restoration of the whole person, the removal of the barrier between God and humanity.',
        },
        {
          kind: 'greek',
          id: 'mark2-exousia',
          title: 'Exousia — Authority, Power',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; right to command',
          description:
            'Jesus says to the scribes: "That ye may know that the Son of man hath power on earth to forgive sins." The word exousia means both authority and the actual power to enact that authority. Jesus claims to have the authority to forgive—a claim that is either blasphemy or truth. By raising the paralyzed man, He proves the claim.',
        },
        {
          kind: 'commentary',
          id: 'mark2-son-of-man',
          html:
            'Jesus refers to Himself as "the Son of man"—a title from Daniel&apos;s vision of one who comes before the Ancient of Days and receives dominion and kingdom. It is a claim to eschatological authority, to the role of the one who will judge the nations and establish God&apos;s kingdom. In this humble setting, healing a paralyzed man in a house, Jesus asserts that this eschatological figure is present now.',
        },
        {
          kind: 'christ',
          id: 'mark2-christ-forgiver',
          title: 'Christ Connection — The Mediator Between God and Man',
          html:
            'Jesus&apos; power to forgive sins reveals His unique mediatorial role. He stands between God and humanity, able to speak God&apos;s word of absolution. This is not power He exercises from a distance. He draws near to the sick, the outcast, the broken and speaks the word that restores them. Forgiveness is not an idea. It is an enacted presence, a physical and spiritual healing.',
        },
        {
          kind: 'carry',
          html:
            'The paralyzed man is healed not only by his own faith, but by the faith of his community. His friends carry him, risk their safety, tear open a roof, and lower him before Jesus. We are healed by faith—our own and the faith of those who love us and bring us to Christ. Whom are you carrying to Jesus?',
        },
        {
          kind: 'reflection',
          id: 'mark2-carried',
          prompt: 'When have you felt carried by the faith of others? Who carries your burdens before God now?',
        },
      ],
    },

    /* ─── Mark 2:13–22 — Calling the Outcast ──────────────────────────── */
    {
      ref: 'Mark 2:13–22',
      title: 'The Physician and the Sick',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'And as he passed by, he saw Levi the son of Alphaeus sitting at the receipt of custom, and said unto him, Follow me. And he arose and followed him.'),
            plain(15, 'And it came to pass, that, as Jesus sat at meat in his house, many publicans and sinners sat also together with Jesus and his disciples: for there were many, and they followed him.'),
            plain(16, 'And when the scribes and Pharisees saw him eat with publicans and sinners, they said unto his disciples, How is it that he eateth and drinketh with publicans and sinners?'),
            plain(17, 'When Jesus heard it, he said unto them, They that are whole have no need of the physician; but they that are sick: I came not to call the righteous, but sinners to repentance.'),
            plain(21, 'No man also seweth a piece of new cloth on an old garment: else the new piece that filled it up taketh away from the old, and the rent is made worse.'),
            plain(22, 'And no man putteth new wine into old bottles: else the new wine doth burst the bottles, and the wine is spilled, and the bottles will be marred: but new wine must be put into new bottles.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark2-levi-called',
          html:
            'Levi is a tax collector—a man who works for Rome, collecting taxes from his own people. He is considered a traitor, a sinner, someone beyond the pale of respectable society. Jesus sees him at his post and says simply: "Follow me." Levi does not hesitate. He leaves his post and follows. The call is to the outcast, the despised, the one society has written off.',
        },
        {
          kind: 'commentary',
          id: 'mark2-eats-sinners',
          html:
            'Jesus eats in Levi&apos;s house with publicans and sinners. In the Jewish world, to eat with someone was to declare them acceptable, to include them in the community of the righteous. The Pharisees are scandalized. How can a teacher, a holy man, eat with such people? Jesus answers: "They that are whole have no need of the physician; but they that are sick. I came not to call the righteous, but sinners to repentance." He does not come to those who believe themselves whole, but to those who recognize their sickness.',
        },
        {
          kind: 'greek',
          id: 'mark2-telones',
          title: 'Telones — Tax Collectors',
          script: 'τελῶνες',
          translit: '<strong>Telones</strong> · tax collectors; publicans; those who collected taxes for occupying power',
          description:
            'Tax collectors in first-century Judea were not civil servants. They were often wealthy, working for Rome, profiting from their own people. They were despised and classed with sinners. The calling of Levi the tax collector is Jesus&apos; most radical statement yet: there is no one so far from God that He will not call them.',
        },
        {
          kind: 'commentary',
          id: 'mark2-new-wine',
          html:
            'Jesus speaks in metaphors: new cloth on old garment, new wine in old bottles. The kingdom He brings cannot be patched onto the old order. It cannot fit into the old containers. The old wineskins—the systems, the laws, the boundaries that defined righteousness—will burst. Something fundamentally new is arriving, and it will remake everything.',
        },
        {
          kind: 'christ',
          id: 'mark2-christ-physician',
          title: 'Christ Connection — Healing the Spiritually Ill',
          html:
            'Jesus comes as physician to those who acknowledge their sickness. The "righteous"—those who believe themselves whole—have no need of Him. But the tax collector, the sinner, the outcast who recognizes their separation from God—to them Jesus offers healing and restoration. His very willingness to eat with sinners declares their worth and possibility of redemption.',
        },
        {
          kind: 'carry',
          html:
            'The call of Levi teaches us that no one is beyond redemption. More, it teaches us that Jesus seeks out those the world has rejected. The new wine of the kingdom is not for the self-satisfied, but for those who hunger and thirst for righteousness, who know their own poverty and need.',
        },
        {
          kind: 'reflection',
          id: 'mark2-physician',
          prompt: 'Where do you feel sick—spiritually, relationally, morally? Can you acknowledge that sickness and invite Jesus in as the physician?',
        },
      ],
    },

    /* ─── Mark 2:23–28 — The Sabbath ──────────────────────────────────── */
    {
      ref: 'Mark 2:23–28',
      title: 'The Sabbath for Humanity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(23, 'And it came to pass, that he went through the corn fields on the sabbath day; and his disciples began, as they went, to pluck the ears of corn.'),
            plain(24, 'And the Pharisees said unto him, Behold, why do they on the sabbath day that which is not lawful?'),
            plain(27, 'And he said unto them, The sabbath was made for man, and not man for the sabbath:'),
            plain(28, 'Therefore the Son of man is Lord also of the sabbath.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark2-sabbath-law',
          html:
            'The law is clear: thou shalt not work on the Sabbath. Plucking grain is work. The Pharisees are correct in pointing out the violation. But Jesus does not deny the law. He reinterprets it. The Sabbath was made for man, not man for the Sabbath. The law was meant to serve human flourishing, not to constrain it. When the law becomes an instrument of oppression, when it prevents healing or feeding, it has been twisted from its purpose.',
        },
        {
          kind: 'commentary',
          id: 'mark2-lord-sabbath',
          html:
            'Jesus claims to be "Lord also of the sabbath." He does not merely reinterpret the law. He claims authority over it. He is the one to whom the Sabbath ultimately points. In Him, the true rest—not the cessation of work, but the reconciliation of humanity with God—is offered. To follow Jesus is to enter a deeper Sabbath, a true rest.',
        },
        {
          kind: 'greek',
          id: 'mark2-kyrios',
          title: 'Kyrios — Lord',
          script: 'κύριος',
          translit: '<strong>Kyrios</strong> · lord; master; owner; God',
          description:
            'The word kyrios can mean simply "master" or "sir," but in the Greek translation of the Hebrew Bible it is used for God. When Jesus claims to be kyrios of the Sabbath, He is claiming a divine prerogative—the authority to interpret and govern the law itself.',
        },
        {
          kind: 'christ',
          id: 'mark2-christ-rest',
          title: 'Christ Connection — The True Rest',
          html:
            'The Sabbath in the Old Testament pointed forward to God&apos;s rest, the cessation of toil and conflict. In Jesus, that rest is offered—not as the absence of work, but as the presence of reconciliation. To rest in Christ is to cease striving to earn God&apos;s favor, to enter into the completion of His work.',
        },
        {
          kind: 'carry',
          html:
            'Mark 2 ends with a fundamental reorientation. The law is not the enemy of human flourishing. But neither is it the final word. Jesus is. He stands above the law, not to destroy it but to fulfill it, to show its true purpose: the healing and restoration of human beings. Where have you made rules into gods? What laws have you permitted to harden into oppression?',
        },
        {
          kind: 'reflection',
          id: 'mark2-sabbath-rest',
          prompt: 'What does true rest mean for you? What would change if you believed the Sabbath was made for you, not you for the Sabbath?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The sabbath was made for man, and not man for the sabbath: therefore the Son of man is Lord also of the sabbath.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 2 · Study Guide',
  },

  hasHebrew: false,
};
