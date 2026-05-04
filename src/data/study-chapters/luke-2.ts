import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 2 — The Birth and Manifestation
 *
 * It happens in a stable. A virgin bears a son. Shepherds receive the first
 * announcement. "Glory to God in the highest, and on earth peace, good will
 * toward men." A child is born who will be called "Saviour," "Christ," "Lord."
 * Wise men from the east bring treasures. Anna and Simeon, the old and faithful,
 * recognize the child as the promised consolation of Israel. And in the temple,
 * a boy of twelve tells the teachers: "Wist ye not that I must be about my
 * Father&apos;s business?" The birth of Jesus is not a private event. It is
 * announced to heaven and earth.
 */
export const LUKE_2: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /The Birth of Our/i,
    caption: 'Luke 2',
  },
  intros: [
    'Caesar Augustus decrees that the whole world should be taxed. Joseph and Mary travel to Bethlehem, the city of David. The time comes for Mary to give birth. And she gives birth to her firstborn son in a stable, because there is no room in the inn. She wraps Him in swaddling clothes and lays Him in a manger. This is the birth that the angels have announced, that the prophets have foretold, that every faithful Israelite has been waiting for.',
    'That same night, shepherds keep watch over their flocks in the fields. An angel of the Lord appears to them, and the glory of the Lord shines around them. Terror grips them. But the angel speaks: "Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people. For unto you is born this day in the city of David a Saviour, which is Christ the Lord."',
  ],

  sections: [
    {
      ref: 'Luke 2:1–20',
      title: 'The Nativity and the Announcement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And it came to pass in those days, that there went out a decree from Caesar Augustus, that all the world should be taxed.'),
            plain(4, 'And Joseph also went up from Galilee, out of the city of Nazareth, into Judaea, unto the city of David, which is called Bethlehem;'),
            plain(6, 'And so it was, that, while they were there, the days were accomplished that she should be delivered.'),
            plain(7, 'And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.'),
            plain(10, 'And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.'),
            plain(11, 'For unto you is born this day in the city of David a Saviour, which is Christ the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke2-caesar',
          html:
            'Luke places the birth in a specific historical moment: during the reign of Caesar Augustus, during the governorship of Quirinius[res:bible-odyssey-incarnation]. Jesus is not born in a legend or a myth. He is born in history, in a specific time and place. Yet how ordinary the announcement is—a decree for taxation brings Joseph and Mary to Bethlehem, the city where the Messiah was foretold to be born. God works through the ordinary machinery of history.',
        },
        {
          kind: 'commentary',
          id: 'luke2-manger',
          html:
            'The firstborn is wrapped in swaddling clothes and laid in a manger—an animal&apos;s feeding trough. This is the King of heaven. Yet Luke does not explain or apologize for the poverty of the birth. He states it simply: "There was no room for them in the inn." The eternal Word becomes flesh and enters the world in the condition of the poorest.',
        },
        {
          kind: 'greek',
          id: 'luke2-christos',
          title: 'Christos — Anointed; Messiah',
          script: 'Χριστός',
          translit: '<strong>Christos</strong> · anointed one; messiah; the chosen of God',
          description:
            'Christos is the Greek form of the Hebrew Mashiach—the anointed one. Kings were anointed with oil to set them apart for rule. The Messiah is the one anointed by God for redemption. Jesus is declared "Christ the Lord."',
        },
        {
          kind: 'commentary',
          id: 'luke2-shepherds',
          html:
            'Shepherds are the first to receive the announcement. Not kings, not priests, not the learned. Shepherds—ordinary, humble, watching their flocks by night. An angel breaks through the darkness: "Fear not." The shepherds&apos; first response is fear. The angel&apos;s first response is comfort. And then the proclamation: a Saviour is born. Christ the Lord. The news is "good tidings of great joy... to all people."',
        },
        {
          kind: 'christ',
          id: 'luke2-christ-nativity',
          title: 'Christ Connection — God Made Human',
          html:
            'Jesus is born as every human child is born. Yet He is announced as "a Saviour, which is Christ the Lord." The eternal becomes infant. The transcendent becomes vulnerable. The Lord of heaven enters the world in need, dependent, powerless by all earthly measure. This is the mystery of the Incarnation.',
        },
        {
          kind: 'carry',
          html:
            'The shepherds "came with haste" to Bethlehem and found Mary and Joseph and the babe. "And when they had seen it, they made known abroad the saying which was told them concerning this child." The shepherds become the first preachers of the gospel. They spread the word. Glory to God in the highest.',
        },
        {
          kind: 'reflection',
          id: 'luke2-shepherds-reflect',
          prompt: 'The shepherds were the first to hear and believe. What keeps us from recognizing Jesus in the humble and ordinary?',
        },
      ],
    },

    {
      ref: 'Luke 2:21–40',
      title: 'Presentation and Recognition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(22, 'And when the days of her purification according to the law of Moses were accomplished, they brought him to Jerusalem, to present him to the Lord;'),
            plain(25, 'And, behold, there was a man in Jerusalem, whose name was Simeon; and the same man was just and devout, waiting for the consolation of Israel: and the Holy Ghost was upon him.'),
            plain(28, 'Then took he him up in his arms, and blessed God, and said,'),
            plain(29, 'Lord, now lettest thou thy servant depart in peace, according to thy word:'),
            plain(30, 'For mine eyes have seen thy salvation,'),
            plain(36, 'And there was one Anna, a prophetess, of a great age, and she was a widow of about fourscore and four years, which departed not from the temple, but served God with fastings and prayers night and day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke2-presentation',
          html:
            'Joseph and Mary bring the child to Jerusalem for two purposes: to present Him to the Lord according to the law, and to offer the sacrifice appointed for the poor—two turtledoves or two young pigeons. Even in His presentation, Jesus&apos; parents follow the law of Moses, honoring the covenant of Israel. The child who will fulfill all righteousness begins by submitting to its requirements.',
        },
        {
          kind: 'commentary',
          id: 'luke2-simeon',
          html:
            'Simeon is old, devout, just. He has waited his whole life for "the consolation of Israel"—the promised Messiah[res:sefaria-simeon]. The Spirit reveals to him that he will not see death before he has seen the Lord&apos;s Christ. When Mary and Joseph bring the child, Simeon recognizes Him. "This child is set for the fall and rising again of many in Israel; and for a sign which shall be spoken against."',
        },
        {
          kind: 'greek',
          id: 'luke2-soterion',
          title: 'Soterion — Salvation; Deliverance',
          script: 'σωτήριον',
          translit: '<strong>Soterion</strong> · salvation; the saving power of God',
          description:
            '"Mine eyes have seen thy salvation." Simeon holds the infant Jesus in his arms and sees not merely a child, but God&apos;s saving power made manifest. Salvation is not an abstract doctrine. It is a person. It is this child.',
        },
        {
          kind: 'commentary',
          id: 'luke2-anna',
          html:
            'Anna, a prophetess of great age, has served God in the temple with fasting and prayer night and day for decades. When she sees the child, she too recognizes Him. She speaks to all who look for redemption in Jerusalem. The oldest and the youngest, the faithful and the waiting—all recognize the child as the Redeemer.',
        },
        {
          kind: 'christ',
          id: 'luke2-christ-redemption',
          title: 'Christ Connection — The Expected One',
          html:
            'Simeon and Anna waited their entire lives for this child. They did not see Him as incidental or secondary. They saw Him as the center of all history, the consolation of Israel, the light of the Gentiles, and the glory of the people Israel. Jesus is the fulfillment of every faithful waiting.',
        },
        {
          kind: 'reflection',
          id: 'luke2-faithful-waiting',
          prompt: 'What have you waited for with faithful expectation? How does the waiting of Simeon and Anna challenge your own patience?',
        },
      ],
    },

    {
      ref: 'Luke 2:41–52',
      title: 'The Boy in the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(41, 'Now his parents went to Jerusalem every year at the feast of the passover.'),
            plain(46, 'And it came to pass, that after three days they found him in the temple, sitting in the midst of the doctors, both hearing them, and asking them questions:'),
            plain(47, 'And all that heard him were astonished at his understanding and answers.'),
            plain(49, 'And he said unto them, How is it that ye sought me? wist ye not that I must be about my Father&apos;s business?'),
            plain(51, 'And he went down with them, and came to Nazareth, and was subject unto them:'),
            plain(52, 'And Jesus increased in wisdom and stature, and in favour with God and man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke2-temple',
          html:
            'When Jesus is twelve years old, Mary and Joseph take Him to Jerusalem for the Passover. On the return journey, they discover He is missing. For three days they search, grieving. They find Him in the temple, sitting among the teachers, both hearing them and asking questions. The doctors are astonished at His understanding. This is a child speaking with a wisdom that transcends learning.',
        },
        {
          kind: 'commentary',
          id: 'luke2-fathers-business',
          html:
            'Mary says to Him: "Son, why hast thou thus dealt with us? behold, thy father and I have sought thee sorrowing." Jesus responds: "How is it that ye sought me? wist ye not that I must be about my Father&apos;s business?"[res:intertextual-jesus-identity] He speaks of God as His Father. He distinguishes his ultimate allegiance from His earthly parents. Yet He returns with them and is subject to them. The perfect obedience and the larger calling are not in conflict.',
        },
        {
          kind: 'greek',
          id: 'luke2-sophia',
          title: 'Sophia — Wisdom',
          script: 'σοφία',
          translit: '<strong>Sophia</strong> · wisdom; understanding; skill',
          description:
            'Jesus "increased in wisdom." Wisdom in the biblical tradition is not mere information. It is the right understanding of God and His ways, the ability to discern truth from falsehood, to live rightly. Jesus&apos; wisdom grows alongside His body.',
        },
        {
          kind: 'christ',
          id: 'luke2-christ-boy',
          title: 'Christ Connection — The Son of God Revealed',
          html:
            'At twelve years old, Jesus speaks of His Father&apos;s business. He shows forth wisdom and understanding beyond His years. Yet He remains obedient to Mary and Joseph. Luke concludes: "Jesus increased in wisdom and stature, and in favour with God and man." He grows as every child grows. Yet He is conscious from this early age of His unique identity and purpose.',
        },
        {
          kind: 'reflection',
          id: 'luke2-jesus-reflect',
          prompt: 'When did you first sense a calling larger than your immediate circumstances? How did you balance obedience to those near you with faithfulness to that calling?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Glory to God in the highest, and on earth peace, good will toward men. Wist ye not that I must be about my Father&apos;s business?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 2 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-incarnation',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Incarnation',
      url: 'https://www.bibleodyssey.org/dictionary/incarnation/',
      description: 'Open-access entry on the doctrine of incarnation, examining how Jesus&apos; birth places the divine Word in human history and flesh.',
    },
    {
      id: 'sefaria-simeon',
      kind: 'study',
      source: 'Sefaria',
      label: 'Simeon & the Law of Purification (Leviticus 12)',
      url: 'https://www.sefaria.org/Leviticus.12?lang=bi',
      description: 'Torah law governing purification after childbirth, contextualizing Mary&apos;s presentation of Jesus in the temple and Simeon&apos;s recognition.',
    },
    {
      id: 'intertextual-jesus-identity',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jesus & "Father&apos;s Business" (OT ↔ NT)',
      url: 'https://intertextual.bible/text/malachi-3/luke-2.49',
      description: 'Intertextual links showing how Jesus&apos; early awareness of His divine identity fulfills Old Testament messianic expectation.',
    },
  ],

  hasHebrew: false,
};
