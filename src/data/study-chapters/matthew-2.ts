import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 2 — The Wise Men, Flight to Egypt, and Return
 *
 * After Jesus&apos; birth in Bethlehem, wise men from the East follow a star,
 * seeking the newborn King of the Jews. Herod hears of it and is deeply
 * troubled, seeing a threat to his throne. He plots to destroy the child. An
 * angel warns Joseph to flee to Egypt—fulfilling the prophecy "Out of Egypt
 * have I called my son." Herod slaughters the innocent children of Bethlehem
 * in a rage. "Rachel weeping for her children" echoes across the land. Yet
 * Jesus is hidden, protected, preserved. The nations seek Him, and He is
 * hidden in exile, the King without a kingdom, the Savior hunted by those who
 * reject salvation.
 */
export const MATTHEW_2: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 2,

  estimatedMinutes: { beginner: 3, intermediate: 6, deep: 9 },
  intros: [
    'Jesus is born in Bethlehem of Judea during the reign of King Herod. From the East come wise men, astrologers or seekers of truth, who have seen a star—perhaps a conjunction of planets, perhaps something stranger—and have followed it believing it announces a great king. They ask openly: "Where is he that is born King of the Jews?" The question ignites fear in Jerusalem. Herod, the aging puppet-king of Rome, feels his throne threatened. An infant child becomes a rival, a danger.',
    'The wise men represent the beginning of what Matthew will show throughout his gospel: that Jesus attracts devotion from the most unlikely sources. They come bearing gifts—gold, frankincense, and myrrh—gifts fit for a king. Yet they find Him not in a palace but in a house, resting with His mother. They kneel and worship. And then, warned in dreams that Herod seeks the child&apos;s life, they depart to their own country.',
  ],

  sections: [
    {
      ref: 'Matthew 2:1–12',
      title: 'The Wise Men Seek the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem,'),
            plain(2, 'Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.'),
            plain(3, 'When Herod the king had heard these things, he was troubled, and all Jerusalem with him.'),
            plain(4, 'And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-2-78mid-1',
          html:
            'Herod hears the question and is troubled; the priests answer with knowledge but no faith. One group acts in anger, the other in indifference.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(5, 'And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet,'),
            plain(6, 'And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.'),
            plain(10, 'When they had heard the king, they departed; and, lo, the star which they saw in the east, went before them, till it came and stood over where the young child was.'),
            plain(11, 'And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt2-wise-men',
          html:
            'The wise men are outsiders—Gentiles from distant lands—yet they are the first to recognize Jesus as King. They have no access to Israel&apos;s scriptures, no covenant heritage, no reason to believe. And yet a star draws them[res:bibleodyssey-magi]. Matthew uses this to show us that the kingship of Jesus is not a parochial Jewish claim. It is universal. Kings will come from afar to honor Him. The nations will eventually bow[res:bibleodyssey-herod].',
        },
        {
          kind: 'commentary',
          id: 'matt2-herod-troubled',
          html:
            'Herod is troubled—and with good reason. He has built his power through cunning and ruthlessness. He knows that a messianic claim could unsettle his reign. So he gathers the chief priests and scribes and asks them where the Messiah is to be born. They answer correctly: Bethlehem. Yet they do nothing with this knowledge. They do not go to worship the child. They are content in their positions, their rituals, their understanding of Scripture. Unlike the wise men from afar, they do not seek the one who fulfills what they supposedly know.',
        },
        {
          kind: 'greek',
          id: 'matt2-magoi',
          title: 'Magoi — Wise Men',
          script: 'μάγοι',
          translit: '<strong>Magoi</strong> · wise men; magi; astrologers; seekers of divine wisdom',
          description:
            'The Greek word magoi refers to the priestly caste of the Persians, skilled in astrology and interpretation of signs. In Jewish thought they were sometimes viewed with suspicion as practitioners of foreign magic. Yet Matthew presents them as seekers of truth, guided by the star, and as the first to worship the newborn King. God guides those who seek Him, no matter how far they must travel.',
        },
        {
          kind: 'christ',
          id: 'matt2-christ-sought',
          title: 'Christ Connection — Christ Called from Egypt',
          html:
            'Jesus is born as King, yet He is immediately hunted. The wise men kneel and worship, but a king—Herod—sees Him as a threat and plots His death. This is the pattern of Jesus&apos; life: He comes bringing the kingdom of God, yet the powers of this world resist and reject Him. He is worthy of worship, yet He will be rejected. He is the true King, yet the rulers of the age plot against Him.',
        },
        {
          kind: 'carry',
          html:
            'The wise men teach us what true worship looks like. They traveled far, they spent treasure, they humbled themselves before a child. And they did this not because they understood everything, but because they saw a sign and followed it. Worship often begins not with complete certainty, but with a willingness to seek and to follow wherever truth leads.',
        },
        {
          kind: 'reflection',
          id: 'matt2-gifts',
          prompt: 'The wise men brought gifts—gold, frankincense, and myrrh. If you were to bring gifts to Jesus, what would they represent about what you offer or what you seek from Him?',
        },
      ],
    },

    {
      ref: 'Matthew 2:13–18',
      title: 'Flight to Egypt and the Slaughter of Innocents',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(13, 'And when they were departed, behold, the angel of the Lord appeareth to Joseph in a dream, saying, Arise, and take the young child and his mother, and flee into Egypt: and be thou there until I bring thee word: for Herod will seek the young child to destroy him.'),
            plain(14, 'When he arose, he took the young child and his mother by night, and departed into Egypt:'),
            plain(15, 'And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.'),
            plain(16, 'Then Herod, when he saw that he was mocked of the wise men, was exceeding wroth, and sent forth, and slew all the children that were in Bethlehem, and in all the coasts thereof, from two years old and under, according to the time which he had diligently inquired of the wise men.'),
            plain(17, 'Then was fulfilled that which was spoken by Jeremy the prophet, saying,'),
            plain(18, 'In Rama was there a voice heard, lamentation, and weeping, and great mourning, Rachel weeping for her children, and would not be comforted, because they are not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt2-flight',
          html:
            'The angel warns Joseph again, this time to flee with the child and Mary. Herod, discovering that the wise men have not returned to him, becomes "exceeding wroth"—consumed with rage. In his fury he orders the slaughter of all male children in Bethlehem and the surrounding region, two years old and under. It is an act of desperate, murderous power—a king fighting against a prophecy, against the purposes of God, against a child who has done him no wrong.',
        },
        {
          kind: 'commentary',
          id: 'matt2-egypt',
          html:
            'Jesus is hidden in Egypt—the ancient enemy of Israel, the place of bondage from which the Lord once delivered His people. Now the deliverer Himself must flee there for safety. Matthew sees this as fulfilling the prophecy "Out of Egypt have I called my son."[res:bibleodyssey-egypt-archaeology] The pattern of Israel&apos;s redemption is recapitulated in Jesus. He will be called out of Egypt just as Israel was, called to His own land, called to His destiny.',
        },
        {
          kind: 'commentary',
          id: 'matt2-slaughter',
          html:
            'The Slaughter of the Innocents is one of the darkest passages in the nativity story. Innocent children die because of Herod&apos;s fear and murderous rage. Matthew quotes Jeremiah: "Rachel weeping for her children, and would not be comforted." Rachel was the mother of Joseph and Benjamin, buried on the road to Bethlehem. In Matthew&apos;s reading, she weeps again as the children of her land are slain. Yet even this tragedy is held within the purposes of God. Jesus is preserved. The child through whom redemption comes survives the wrath of the king.',
        },
        {
          kind: 'greek',
          id: 'matt2-phonos',
          title: 'Phonos — Slaughter',
          script: 'φόνος',
          translit: '<strong>Phonos</strong> · murder; slaughter; bloodshed; violent death',
          description:
            'The Greek word phonos points to violent, unlawful killing. Herod&apos;s order is not justice or war, but murder on a massive scale. The innocent die. Yet even in this darkness, God&apos;s purposes are not thwarted. Jesus, the one who came to bring life, is preserved to accomplish His mission of redemption.',
        },
        {
          kind: 'christ',
          id: 'matt2-christ-preserved',
          title: 'Christ Connection — The King Preserved',
          html:
            'Jesus is born into a hostile world. Herod seeks to destroy Him. Innocent children die in His place. Jesus escapes to Egypt, hidden from the wrath of kings. This is the truth of His incarnation: the Son of God enters a world that does not recognize Him, that actively opposes Him. Yet He is preserved. God watches over Him, protects Him, and will call Him back to His people.',
        },
        {
          kind: 'carry',
          html:
            'Matthew reminds us that the coming of Christ into the world does not solve all problems or prevent all suffering. Innocent children still die. Mothers still weep. The present age remains broken and fallen. Yet through it all, God&apos;s purpose stands. He is accomplishing redemption even in the darkness. We are invited to trust that redemption, even when we cannot see how it will be accomplished.',
        },
        {
          kind: 'reflection',
          id: 'matt2-rachel',
          prompt: 'Think of a time when you suffered or witnessed suffering that seemed unjust or senseless. How do you reconcile such suffering with faith in a good and powerful God?',
        },
      ],
    },

    {
      ref: 'Matthew 2:19–23',
      title: 'The Return from Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'But when Herod was dead, behold, an angel of the Lord appeareth in a dream to Joseph in Egypt,'),
            plain(20, 'Saying, Arise, and take the young child and his mother, and go into the land of Israel: for they are dead which sought the young child&apos;s life.'),
            plain(21, 'And he arose, and took the young child and his mother, and came into the land of Israel.'),
            plain(22, 'But when he heard that Archelaus did reign in Judaea in the room of his father Herod, he was afraid to go thither: notwithstanding, being warned of God in a dream, he turned aside into the parts of Galilee;'),
            plain(23, 'And he came and dwelt in a city called Nazareth: that it might be fulfilled which was spoken by the prophets, He shall be called a Nazarene.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt2-return',
          html:
            'Herod dies, and the angel calls Joseph to return to the land of Israel. Jesus is brought back, even as Israel was brought out of Egypt long ago. But Joseph learns that Herod&apos;s son now reigns and fears for the child&apos;s safety. So he is directed instead to Galilee, to the small village of Nazareth. Jesus will grow up not in Jerusalem, not in the great city, but in an obscure Galilean village. Matthew sees this too as prophetic—"He shall be called a Nazarene"—a despised outsider from the hills.',
        },
        {
          kind: 'commentary',
          id: 'matt2-nazareth',
          html:
            'Nazareth was a small, seemingly insignificant village in Galilee. To come from Nazareth was to come from nowhere, at least in the eyes of Jerusalem&apos;s religious establishment. Yet Matthew shows us that this too is part of the pattern. Jesus will be despised and rejected, associated with the margins and the humble places. He will be called a Nazarene—and later, the disciples will be known as "Nazarenes," associated with Him who comes from that humble village.',
        },
        {
          kind: 'christ',
          id: 'matt2-christ-humble-origins',
          title: 'Christ Connection — From Nowhere to Everywhere',
          html:
            'Jesus is born as King but fleesinto exile. He survives the slaughter of innocents. He returns to an obscure village. He is called a Nazarene—a name of mockery and disdain. Yet He is the Savior of the world. Matthew teaches us that greatness in God&apos;s kingdom is not measured by earthly power, position, or prestige. It is measured by faithfulness, humility, and willingness to be rejected by the world.',
        },
        {
          kind: 'carry',
          html:
            'Joseph shows us the quiet faith of a father who listens to God and acts. Three times he is warned in dreams, and three times he obeys—fleeing to Egypt, returning at the angel&apos;s word, going to Nazareth instead of Judea. He provides protection for the child. He prepares the human home in which the Son of God will grow. His faithfulness is hidden and unhonored, yet it is essential to God&apos;s plan.',
        },
        {
          kind: 'reflection',
          id: 'matt2-humble-path',
          prompt: 'Jesus came not with earthly power but in humility and seeming weakness. How does this challenge or reshape your own understanding of greatness, success, or influence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Out of Egypt have I called my son. Rachel weeping for her children, and would not be comforted, because they are not.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 2 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-magi',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Magi and Persian Astronomy',
      url: 'https://www.bibleodyssey.org/dictionary/magi/',
      description: 'Scholarly entry on the wise men, their origins, astronomical knowledge, and role in Matthew&apos;s nativity account.',
    },
    {
      id: 'bibleodyssey-egypt-archaeology',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Bethlehem Archaeology',
      url: 'https://www.bibleodyssey.org/dictionary/bethlehem/',
      description: 'Archaeological evidence for Bethlehem as a settlement in the first century and its significance in Matthew&apos;s gospel.',
    },
    {
      id: 'bibleodyssey-herod',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Herod the Great',
      url: 'https://www.bibleodyssey.org/dictionary/herod-the-great/',
      description: 'Historical and biblical context for King Herod, his reign, and the threat he posed to the newborn Jesus.',
    },
  ],

  hasHebrew: false,
};
