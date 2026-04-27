import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 6 — Sabbath and the Beatitudes
 *
 * On the Sabbath, the disciples pluck grain and eat. The Pharisees object.
 * Jesus says: "The Son of man is Lord also of the sabbath." On another
 * Sabbath, Jesus heals a man with a withered hand. The Pharisees are filled
 * with madness. Jesus calls the Twelve. And then He sits with them on a
 * level place and utters the Beatitudes: "Blessed be ye poor... Blessed are
 * ye that hunger... Blessed are ye that weep..." But also: "Woe unto you
 * that are rich... Woe unto you that are full... Woe unto you that laugh."
 * Love your enemies. Do good to those who despise you. Judge not. A good
 * tree bears good fruit. Build your house upon a rock.
 */
export const LUKE_6: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 6,

  intros: [
    'On the Sabbath, Jesus and His disciples walk through the grain fields. The disciples pluck heads of grain and eat. The Pharisees challenge them: "Why do ye that which is not lawful to do on the sabbath day?" Jesus answers: "The Son of man is Lord also of the sabbath." On another Sabbath, Jesus enters the synagogue and sees a man with a withered hand. The scribes and Pharisees watch to see if Jesus will heal on the Sabbath, looking for a reason to accuse Him. Jesus heals the man. The watchers are filled with madness.',
    'Jesus goes into a mountain to pray. All night He prays to God. When day comes, He calls His disciples and chooses twelve of them, whom He names apostles. Peter, Andrew, James, John, Philip, Bartholomew, Matthew, Thomas, James the son of Alphaeus, Simon called Zealotes, Judas the brother of James, and Judas Iscariot. He brings them down and stands on a level place. And He opens His mouth and teaches them.',
  ],

  sections: [
    {
      ref: 'Luke 6:1–19',
      title: 'Sabbath and Authority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(5, 'And Jesus said unto them, The Son of man is Lord also of the sabbath.'),
            plain(10, 'And looking round about upon them all, he said unto the man, Stretch forth thy hand. And he did so: and his hand was restored whole as the other.'),
            plain(12, 'And it came to pass in those days, that he went out into a mountain to pray, and continued all night in prayer to God.'),
            plain(13, 'And when it was day, he called unto him his disciples: and of them he chose twelve, whom also he named apostles;'),
            plain(17, 'And he came down with them, and stood in the plain, and the company of his disciples, and a great multitude of people out of all Judaea and Jerusalem, and from the sea coast of Tyre and Sidon, which came to hear him, and to be healed of their diseases;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke6-sabbath-lord',
          html:
            'The disciples hunger. They pluck grain on the Sabbath. The law forbids work on the Sabbath. But Jesus says: "The Son of man is Lord also of the sabbath." Jesus claims authority over the Sabbath itself. He is not abolishing the law. He is reinterpreting it. The Sabbath was made for man, not man for the Sabbath. Mercy supersedes ritual.',
        },
        {
          kind: 'greek',
          id: 'luke6-kurios',
          title: 'Kurios — Lord; Master; One with Authority',
          script: 'κύριος',
          translit: '<strong>Kurios</strong> · lord; master; one who rules',
          description:
            'Jesus declares Himself kurios of the Sabbath. He claims the authority of ownership, of rule. This is an assertion of His divinity. Only God can be lord of the Sabbath.',
        },
        {
          kind: 'commentary',
          id: 'luke6-withered',
          html:
            'The man with the withered hand stands before Jesus in the synagogue. Jesus does not ask for permission. He does not wait for the Sabbath to end. He commands the man: "Stretch forth thy hand." The man stretches it forth, and it is restored whole. The healing is immediate and complete. The Pharisees are filled with madness. But Jesus has demonstrated that healing is lawful on the Sabbath.',
        },
        {
          kind: 'commentary',
          id: 'luke6-choosing',
          html:
            'After these confrontations, Jesus goes into a mountain to pray. He prays all night. When day comes, He calls His disciples and chooses twelve. Prayer precedes choosing. The twelve will carry His message to the world. They will stumble and doubt. One will betray Him. Yet Jesus chooses them in prayer. He commits them to God&apos;s hands.',
        },
        {
          kind: 'christ',
          id: 'luke6-christ-twelve',
          title: 'Christ Connection — The Twelve Apostles',
          html:
            'Jesus chooses twelve—echoing the twelve tribes of Israel. These twelve will bear witness to the resurrection. They will receive the Spirit at Pentecost. They will carry the gospel to the ends of the earth. The choosing of the Twelve is the beginning of the apostolic church.',
        },
        {
          kind: 'carry',
          html:
            'Jesus comes down with the Twelve to a level place. A great multitude presses upon Him—people from Judaea, Jerusalem, the coastlands. They come to hear Him and to be healed. Jesus stands ready to teach and heal. The multitude stands ready to receive.',
        },
        {
          kind: 'reflection',
          id: 'luke6-sabbath-reflect',
          prompt: 'What rules or traditions have you kept that actually work against mercy and healing? What needs to change?',
        },
      ],
    },

    {
      ref: 'Luke 6:20–49',
      title: 'The Beatitudes and the Law of Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(20, 'And he lifted up his eyes on his disciples, and said, Blessed be ye poor: for yours is the kingdom of God.'),
            plain(21, 'Blessed are ye that hunger now: for ye shall be filled. Blessed are ye that weep now: for ye shall laugh.'),
            plain(27, 'But I say unto you which hear, Love your enemies, do good to them which hate you,'),
            plain(31, 'And as ye would that men should do to you, do ye also to them likewise.'),
            plain(38, 'Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom.'),
            plain(43, 'For a good tree bringeth not forth corrupt fruit; neither doth a corrupt tree bring forth good fruit.'),
            plain(47, 'Whosoever cometh to me, and heareth my sayings, and doeth them, I will shew you to whom he is like:'),
            plain(48, 'He is like a man which built an house, and digged deep, and laid the foundation on a rock: and when the flood arose, the stream beat vehemently upon that house, and could not shake it: for it was founded upon a rock.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke6-beatitudes',
          html:
            'Jesus lifts His eyes on His disciples and speaks. "Blessed be ye poor." Not "blessed are those who were born poor" or "blessed are those who endure poverty." But "blessed are ye poor"—you, standing before me now, if you are poor. Yours is the kingdom of God. To be poor is to depend on God. To hunger is to long for God&apos;s word. To weep is to know your need. These are blessed.',
        },
        {
          kind: 'greek',
          id: 'luke6-makarios',
          title: 'Makarios — Blessed; Happy; Favored',
          script: 'μακάριος',
          translit: '<strong>Makarios</strong> · blessed; happy; favored by God',
          description:
            'Makarios is not mere happiness. It is the deep blessedness that comes from God&apos;s favor. It is the happiness of the poor, the hungry, the weeping. It is paradoxical—the world calls these conditions miserable. Jesus calls them blessed.',
        },
        {
          kind: 'commentary',
          id: 'luke6-enemies',
          html:
            'Jesus goes further. "Love your enemies, do good to them which hate you, bless them that curse you, and pray for them which despitefully use you." This is not natural. This is not the law of retaliation—an eye for an eye. This is the law of love. This is the command that separates the kingdom of God from the kingdoms of this world.',
        },
        {
          kind: 'commentary',
          id: 'luke6-tree',
          html:
            'Jesus speaks in metaphors. A good tree brings forth good fruit. A corrupt tree brings forth corrupt fruit. You cannot gather figs of thistles or grapes of thorns. The heart determines the fruit. "Out of the abundance of the heart the mouth speaketh." The quality of the inner life determines the quality of action.',
        },
        {
          kind: 'christ',
          id: 'luke6-christ-teaching',
          title: 'Christ Connection — The Law of the Kingdom',
          html:
            'The Beatitudes and the law of love are not additions to the law of Moses. They are its fulfillment, its deepest meaning. Blessedness belongs to the poor, the hungry, the weeping. Love extends even to enemies. These are the laws of the kingdom of God. Jesus does not abolish the law. He shows its ultimate intention.',
        },
        {
          kind: 'reflection',
          id: 'luke6-love-enemies-reflect',
          prompt: 'Who are your enemies? What does it mean to love them? Can you imagine doing good to someone who despises you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Son of man is Lord also of the sabbath. Love your enemies, do good to them which hate you. A good tree bringeth forth good fruit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 6 · Study Guide',
  },

  hasHebrew: false,
};
