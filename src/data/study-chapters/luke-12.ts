import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 12 — Warning Against Hypocrisy and Anxiety
 *
 * Jesus warns His disciples: "Beware ye of the leaven of the Pharisees, which
 * is hypocrisy." He teaches them to speak truth openly. "There is nothing
 * covered, that shall not be revealed; neither hid, that shall not be known."
 * A rich man thinks to build greater barns. "Thou fool, this night thy soul
 * shall be required of thee." Jesus teaches against anxiety: "Take no thought
 * for your life, what ye shall eat; neither for the body, what ye shall put on.
 * Consider the ravens: for they neither sow nor reap... yet God feedeth them."
 * Instead: "Seek ye the kingdom of God; and all these things shall be added
 * unto you." Watchfulness is required. "Be ye therefore ready: for the Son of
 * man cometh at an hour when ye think not."
 */
export const LUKE_12: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  intros: [
    'Jesus says to His disciples: "Beware ye of the leaven of the Pharisees, which is hypocrisy." Hypocrisy is a hidden thing, invisible on the surface. But it will be revealed. "For there is nothing covered, that shall not be revealed; neither hid, that shall not be known. Therefore whatsoever ye have spoken in darkness shall be heard in the light; and that which ye have spoken in the ear in closets shall be proclaimed upon the housetops." All hidden things will come into the light. All secret words will be made known.',
    'A man in the crowd says: "Master, speak to my brother, that he divide the inheritance with me." Jesus says: "Take heed, and beware of covetousness: for a man&apos;s life consisteth not in the abundance of the things which he possesseth." He speaks a parable of a rich man who thinks to build greater barns to hold his abundance. But God says to him: "Thou fool, this night thy soul shall be required of thee: then whose shall those things be which thou hast provided?" The man has gathered riches but is not rich toward God.',
  ],

  sections: [
    {
      ref: 'Luke 12:1–34',
      title: 'Hypocrisy Revealed and Anxiety Rebuked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(2, 'For there is nothing covered, that shall not be revealed; neither hid, that shall not be known.'),
            plain(3, 'Therefore whatsoever ye have spoken in darkness shall be heard in the light; and that which ye have spoken in the ear in closets shall be proclaimed upon the housetops.'),
            plain(16, 'And he spake a parable unto them, saying, The ground of a certain rich man brought forth plentifully:'),
            plain(19, 'And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease, eat, drink, and be merry.'),
            plain(20, 'But God said unto him, Thou fool, this night thy soul shall be required of thee: then whose shall those things be which thou hast provided?'),
            plain(22, 'And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on.'),
            plain(24, 'Consider the ravens: for they neither sow nor reap; which neither have storehouse nor barn; and God feedeth them: how much more are ye better than the fowls?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke12-hypocrisy',
          html:
            'Jesus warns against hypocrisy—the leaven that spreads invisibly through the dough. Hypocrisy is hidden corruption. But all hidden things will be revealed. "There is nothing covered, that shall not be revealed." The disciples are told to speak openly what Jesus has taught them in darkness. Fear does not silence the gospel. Truth will come into the light.',
        },
        {
          kind: 'greek',
          id: 'luke12-zymē',
          title: 'Zymē — Leaven; Yeast',
          script: 'ζύμη',
          translit: '<strong>Zymē</strong> · leaven; yeast; pervasive corrupting influence',
          description:
            'Leaven spreads invisibly through dough. Hypocrisy spreads invisibly through a community. A little hypocrisy corrupts the whole. Jesus calls His disciples to avoid it.',
        },
        {
          kind: 'commentary',
          id: 'luke12-rich-fool',
          html:
            'A rich man harvests abundantly. He congratulates himself: "Soul, thou hast much goods laid up for many years; take thine ease, eat, drink, and be merry." But God says: "Thou fool, this night thy soul shall be required of thee." All his barns, all his goods, will pass to someone else. He has accumulated wealth but impoverished his soul. He is not "rich toward God."',
        },
        {
          kind: 'commentary',
          id: 'luke12-anxiety',
          html:
            'Jesus teaches against anxiety about provisions. "Take no thought for your life, what ye shall eat." The ravens do not sow or reap, yet God feeds them. The lilies of the field toil not, yet Solomon in all his glory is not arrayed like one of these. If God clothes the grass that is cast into the oven, how much more will He clothe you, O ye of little faith?',
        },
        {
          kind: 'greek',
          id: 'luke12-merinnao',
          title: 'Merimnaō — Be Anxious; Take Thought',
          script: 'μεριμνάω',
          translit: '<strong>Merimnaō</strong> · be anxious; worry; take thought; be concerned',
          description:
            'Jesus commands: "Take no thought." Do not merimnaō—do not be divided in mind, anxious, worried. Instead, seek the kingdom. Trust God&apos;s provision.',
        },
        {
          kind: 'commentary',
          id: 'luke12-kingdom-first',
          html:
            'Jesus states the principle: "Seek ye the kingdom of God; and all these things shall be added unto you." Put the kingdom first. Pursue righteousness, obedience, relationship with God. The material provisions will follow. This is not prosperity theology. It is trust that God will not let His children starve.',
        },
        {
          kind: 'christ',
          id: 'luke12-christ-provision',
          title: 'Christ Connection — Trust in the Father',
          html:
            'Jesus teaches that the heavenly Father knows what we need. He cares for the ravens and the lilies. He cares infinitely more for His children. To follow Jesus is to live without anxiety, trusting that God will provide.',
        },
        {
          kind: 'reflection',
          id: 'luke12-anxiety-reflect',
          prompt: 'What are you anxious about? Can you name the things you worry over? What would it mean to seek the kingdom first and trust that all else will be added?',
        },
      ],
    },

    {
      ref: 'Luke 12:35–59',
      title: 'Watchfulness and Ready Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(35, 'Let your loins be girded about, and your lights burning;'),
            plain(36, 'And ye yourselves like unto men that wait for their lord, when he will return from the wedding; that when he cometh and knocketh, they may open unto him immediately.'),
            plain(40, 'Be ye therefore ready: for the Son of man cometh at an hour when ye think not.'),
            plain(42, 'And the Lord said, Who then is that faithful and wise steward, whom his lord shall make ruler over his household, to give them their portion of meat in due season?'),
            plain(46, 'The lord of that servant will come in a day when he looketh not for him, and at an hour when he is not aware, and will cut him in sunder, and will appoint him his portion with the unbelievers.'),
            plain(48, 'But he that knew not, and did commit things worthy of stripes, shall be beaten with few stripes. For unto whomsoever much is given, of him shall be much required: and to whom men have committed much, of him they will ask the more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke12-watchfulness',
          html:
            'Jesus teaches watchfulness. "Let your loins be girded about, and your lights burning." This is readiness—girded for action, watching with light. The disciples are servants waiting for their master. When He comes and knocks, they must be ready to open immediately. Spiritual readiness is required. The Son of man will come at an unexpected hour.',
        },
        {
          kind: 'commentary',
          id: 'luke12-faithful-steward',
          html:
            'Jesus asks: "Who then is that faithful and wise steward?" A steward is given authority and responsibility. He is to feed those under his care. The faithful steward does his duty faithfully, knowing his master will return. But an unfaithful servant says: "My master delayeth his coming." He eats, drinks, beats the servants. When the master returns, He will cut him in sunder.',
        },
        {
          kind: 'greek',
          id: 'luke12-oikonomos',
          title: 'Oikonomos — Steward; House Manager',
          script: 'οἰκονόμος',
          translit: '<strong>Oikonomos</strong> · steward; manager of a household; one entrusted with responsibility',
          description:
            'A steward does not own the household. He manages it for the owner. So are we stewards of God&apos;s gifts. We are responsible for how we use what is entrusted to us. Faithfulness is required.',
        },
        {
          kind: 'commentary',
          id: 'luke12-accountability',
          html:
            'Jesus teaches graduated accountability: "For unto whomsoever much is given, of him shall be much required." Those who have received much knowledge, much grace, much authority will be held accountable for how they have used these gifts. Those who have received little will be judged with less severity. Yet all are judged.',
        },
        {
          kind: 'christ',
          id: 'luke12-christ-return',
          title: 'Christ Connection — Readiness for the Return',
          html:
            'The teaching of watchfulness looks to Christ&apos;s return. The master is coming. The servants must be ready. This is not a doctrine meant to paralyze or obsess. It is a call to faithfulness—to live in readiness, serving faithfully, knowing that accountability will come.',
        },
        {
          kind: 'carry',
          html:
            'The next time you check your bank balance for the third time in an hour, that&apos;s the moment. Not a sin, but a tell. Your hand reaches for the phone when anxiety rises. The carry is to notice it—to put the phone down and say one sentence instead: Father, I trust you. Not tomorrow, not when the numbers look better. Now. At 3 AM. At the register. In the moment your mind reaches for reassurance, reach for Him instead.',
        },
        {
          kind: 'reflection',
          id: 'luke12-stewardship-reflect',
          prompt: 'What has been entrusted to you? How are you stewarding it? If Jesus came today, would He find you faithful?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Beware of the leaven of the Pharisees. Seek ye the kingdom of God, and all these things shall be added unto you. Be ye therefore ready.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 12 · Study Guide',
  },

  hasHebrew: false,
};
