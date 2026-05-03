import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 4 — Testing in the Wilderness and the Call of Disciples
 *
 * Immediately after His baptism, Jesus is led into the wilderness to be tempted
 * by Satan. For forty days He fasts, and the tempter comes with three assaults:
 * the appeal to bodily hunger ("Man shall not live by bread alone"), the appeal
 * to power through presumption ("Cast thyself down"), and the appeal to worldly
 * dominion ("All these things will I give thee"). Jesus refuses each temptation,
 * standing firm in Scripture and in trust of the Father. He then returns to
 * Galilee and begins calling disciples: "Repent: for the kingdom of heaven is at
 * hand." He is the True Israel, who passes the test that Israel failed.
 */
export const MATTHEW_4: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Immediately after His baptism and anointing, Jesus is led into the wilderness by the Spirit to be tempted. The wilderness is a place of testing—it was where Israel wandered for forty years, being tested to see whether they would trust God. Jesus too will spend forty days in the wilderness, fasting, and He will face temptation. But unlike Israel, which failed the test and grumbled, Jesus will stand firm. Every assault of the tempter will be met with the word of God.',
    'The temptations are not trivial. They appeal to the deepest human hungers: for bread, for security, for power and dominion. They speak to the very real challenges Jesus will face in His ministry: physical need, the need to prove Himself, the offer of power without the cross. Yet Jesus refuses each one. He chooses the way of dependence on the Father, the way of faith, the way of the cross over the way of the kingdoms of the world.',
  ],

  sections: [
    {
      ref: 'Matthew 4:1–11',
      title: 'The Temptation in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil.'),
            plain(2, 'And when he had fasted forty days and forty nights, he was afterward an hungred.'),
            plain(3, 'And when the tempter came to him, he said, If thou be the Son of God, command that these stones be made bread.'),
            plain(4, 'But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.'),
            plain(5, 'Then the devil taketh him up into the holy city, and setteth him on a pinnacle of the temple,'),
            plain(6, 'And saith unto him, If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee: and in their hands they shall bear thee up, lest at any time thou dash thy foot against a stone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt4-bread-to-temple',
          html:
            'The first temptation appeals to hunger and survival. Jesus responds by affirming that life depends not on bread but on obedience to God&apos;s word. The second temptation is more subtle—a kind of vindication through the spectacular. Jesus is set on the temple pinnacle and offered angelic rescue if He will only jump. From hunger to pride, from bodily need to the desire for proof. Jesus refuses with the same weapon: Scripture.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(7, 'Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God.'),
            plain(8, 'Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them;'),
            plain(9, 'And saith unto him, All these things will I give thee, if thou wilt fall down and worship me.'),
            plain(10, 'Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.'),
            plain(11, 'Then the devil leaveth him, and, behold, angels came and ministered unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt4-temptation-bread',
          html:
            'The first temptation appeals to hunger—bodily need, survival. "If thou be the Son of God, command that these stones be made bread." The tempter insinuates doubt: "If thou be the Son." But it also offers a solution: use divine power for personal need. Jesus refuses. Not because hunger is shameful or bodies don&apos;t matter, but because dependence on the Father is more fundamental than the satisfaction of appetite. "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."[res:sefaria-deuteronomy-8-3] Survival depends not on food alone, but on obedience and trust[res:sefaria-psalms-91].',
        },
        {
          kind: 'commentary',
          id: 'matt4-temptation-temple',
          html:
            'The second temptation is more subtle. Jesus is set on the pinnacle of the temple and offered a kind of vindication: "Cast thyself down," and the angels will catch you. Prove yourself. Make the spectacular gesture that will make everyone believe. The tempter even quotes Scripture: "He shall give his angels charge concerning thee." But Jesus refuses. "Thou shalt not tempt the Lord thy God." To demand a sign, to force God&apos;s hand through spectacular action, is itself a form of rebellion. Faith does not require public vindication[res:bibleodyssey-temptation].',
        },
        {
          kind: 'commentary',
          id: 'matt4-temptation-kingdoms',
          html:
            'The third temptation is the most direct: all the kingdoms of the world and their glory, offered in exchange for worship of Satan. This is the temptation to power—to accomplish the mission through worldly dominion rather than through the cross. The tempter offers Jesus a shortcut, a bypass around the suffering that lies ahead. Jesus refuses absolutely: "Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve." The kingdom of God is not built through worship of false powers, no matter how much authority they promise.',
        },
        {
          kind: 'greek',
          id: 'matt4-apeirazos',
          title: 'Apeirazos — Tempted',
          script: 'ἀπειράζω',
          translit: '<strong>Apeirazos</strong> · tempt; test; try; attempt to entice into sin',
          description:
            'The Greek word apeirazos means both "to test" and "to entice toward evil." Jesus is tested, but not tempted to sin—He cannot be tempted to sin. Rather, He is tested to prove the reality of His trust and obedience. The testing reveals what is real in Him: His dependence on the Father, His faithfulness to Scripture, His refusal of all allegiances except to God.',
        },
        {
          kind: 'christ',
          id: 'matt4-christ-true-israel',
          title: 'Christ Connection — The True Israel',
          html:
            'Matthew shows us Jesus recapitulating the experience of Israel in the wilderness. Israel spent forty years being tested; Jesus spends forty days. Israel failed the test—complained about bread, tested God&apos;s patience, was tempted by other gods. Jesus passes every test. He is the True Israel, the one who succeeds where the old Israel failed. Through His faithfulness, the way is opened for us to enter into covenant.',
        },
        {
          kind: 'carry',
          html:
            'The temptations of Jesus reveal the true nature of temptation. It often comes dressed in reasonable language: "Feed yourself" (survival is legitimate). "Prove yourself" (validation is natural). "Seize power" (accomplishing good through dominion seems practical). Yet each temptation asks us to rely on ourselves rather than God, to seek security apart from Him, to worship what is not God. Jesus&apos; refusal teaches us where our trust must lie.',
        },
        {
          kind: 'reflection',
          id: 'matt4-tempted',
          prompt: 'When you face temptation, which of the three—hunger/need, the desire to prove yourself, or the pursuit of power and security—calls to you most strongly? How would it change things if you met that temptation with Scripture?',
        },
      ],
    },

    {
      ref: 'Matthew 4:12–25',
      title: 'The Ministry Begins: Calling Disciples',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(12, 'Now when Jesus had heard that John was cast into prison, he departed into Galilee;'),
            plain(15, 'The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles;'),
            plain(16, 'The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.'),
            plain(17, 'From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.'),
            plain(18, 'And Jesus, walking by the sea of Galilee, saw two brethren, Simon called Peter, and Andrew his brother, casting a net into the sea: for they were fishers.'),
            plain(19, 'And he saith unto them, Come ye after me, and I will make you fishers of men.'),
            plain(20, 'And they straightway left their nets, and followed him.'),
            plain(21, 'And going on from thence, he saw other two brethren, James the son of Zebedee, and John his brother, in a ship with Zebedee their father, mending their nets; and he called them.'),
            plain(22, 'And they immediately left the ship and their father, and followed him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt4-galilee-light',
          html:
            'Jesus goes to Galilee, that region of darkness and shadows inhabited by Gentiles. Matthew quotes Isaiah: "The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up." The light is not coming to the religious center, to Jerusalem, to the temple. It comes to the margins, to Galilee, to those the establishment might despise. The kingdom of God has its own geography of grace.',
        },
        {
          kind: 'commentary',
          id: 'matt4-repent-kingdom',
          html:
            'Jesus&apos; message is the same as John&apos;s: "Repent: for the kingdom of heaven is at hand." But now it is not merely proclamation. Jesus is present. The kingdom is not a future hope but an active, present reality. Repentance means turning from everything else toward this one and this kingdom. It requires a complete reorientation of allegiance and trust.',
        },
        {
          kind: 'commentary',
          id: 'matt4-fishers-men',
          html:
            'Jesus walks by the sea and sees Simon and Andrew casting nets. Without preamble, without interviews or credentials, He calls: "Come ye after me, and I will make you fishers of men." They leave their nets immediately. He does the same with James and John, who are mending nets with their father. They "immediately left the ship and their father, and followed him." The call is absolute. It interrupts livelihood, family, all security. And they follow because they recognize in Jesus something that demands total allegiance.',
        },
        {
          kind: 'greek',
          id: 'matt4-halieus',
          title: 'Halieus — Fishers',
          script: 'ἁλιεύς',
          translit: '<strong>Halieus</strong> · fisherman; one who casts nets; one who gathers',
          description:
            'Jesus takes the disciples&apos; own vocation—fishing for fish—and reorients it toward a higher calling. They will be fishers of men, gathering people into the kingdom rather than fish into baskets. Their skills in reading the water, timing the catch, working with nets—all of this will apply to the harvest of souls.',
        },
        {
          kind: 'christ',
          id: 'matt4-christ-calls',
          title: 'Christ Connection — The Call to Follow',
          html:
            'Jesus&apos; ministry begins not with pronouncements or institutional structures, but with the simple, radical call: "Follow me." Those called are ordinary men—fishermen, tax collectors, the dispossessed. They are not trained in the law or the temple, not elite in any worldly sense. But they are the ones through whom Jesus will build His kingdom. The call is still the same today: leave what binds you, turn from what you trust, and follow the one who is risen.',
        },
        {
          kind: 'carry',
          html:
            'The disciples teach us about the cost of discipleship. They left their nets, their boats, their families, their livelihood. They followed without promise of wealth or ease. They chose the hardness of the cross-bearing life over the security of the fishing trade. Yet in doing so, they gained something infinitely greater: participation in the work of the kingdom, fellowship with the Son of God, and a purpose that would outlast their earthly lives.',
        },
        {
          kind: 'reflection',
          id: 'matt4-nets',
          prompt: 'What "nets" do you cling to—security, status, reputation, comfort—that might be calling you away from a deeper following of Jesus? What would it mean for you to leave those nets?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Man shall not live by bread alone. Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 4 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-8-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 8:3 — Man Shall Not Live by Bread',
      url: 'https://www.sefaria.org/Deuteronomy.8.3',
      description: 'The verse Jesus quotes to resist the first temptation, emphasizing trust in God&apos;s word over physical provision.',
    },
    {
      id: 'sefaria-psalms-91',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 91 — Angels Bearing Up',
      url: 'https://www.sefaria.org/Psalms.91',
      description: 'The psalm the tempter misquotes at the second temptation, with its true context of God&apos;s protection for the faithful.',
    },
    {
      id: 'bibleodyssey-temptation',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Temptation of Jesus',
      url: 'https://www.bibleodyssey.org/dictionary/temptation-of-jesus/',
      description: 'Scholarly analysis of the three temptations and their significance for understanding Jesus&apos; mission and identity.',
    },
  ],

  hasHebrew: false,
};
