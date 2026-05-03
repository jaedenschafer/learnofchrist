import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 1 — The Beginning of the Gospel
 *
 * "The beginning of the gospel of Jesus Christ, the Son of God." With these
 * words Mark launches the story of Jesus&apos; earthly ministry. Unlike Matthew
 * with genealogies or Luke with angelic announcement, Mark opens immediately
 * with John the Baptist preparing the way. Jesus arrives, is baptized, and
 * emerges into the wilderness. Tempted but resolute, He calls His first
 * disciples—fishermen who will learn to fish for men. The chapter closes not
 * with peaceful calm but with the collision of divine authority and human
 * illness. The kingdom of God is not announced gently. It is proclaimed. It is
 * demonstrated. It heals and restores.
 */
export const MARK_1: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 1,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 9 },
  intros: [
    'The gospel according to Mark begins at the moment John the Baptist appears in the wilderness, proclaiming a baptism of repentance for the forgiveness of sins. John is dressed in camel&apos;s hair and eats locusts and wild honey. He stands at the threshold between the old covenant and the new, calling Israel to prepare for one who comes after him—one whose shoes John is not worthy to stoop and unloose. Into this scene steps Jesus of Nazareth, from Galilee.',
    'Jesus is baptized by John in the Jordan. The heavens open. The Spirit descends like a dove. A voice from heaven speaks: "Thou art my beloved Son, in whom I am well pleased." This is the moment the entire biblical story has been moving toward—the arrival of the promised Messiah, the one through whom God will accomplish redemption. And yet what follows is not triumph but testing. The Spirit immediately drives Jesus into the wilderness to be tempted. The kingdom of God is not announced gently. It arrives with power and demand.',
  ],

  sections: [
    /* ─── Mark 1:1–13 — Baptism and Temptation ────────────────────────── */
    {
      ref: 'Mark 1:1–13',
      title: 'The Way Prepared, the King Arrives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The beginning of the gospel of Jesus Christ, the Son of God;'),
            plain(4, 'John did baptize in the wilderness, and preach the baptism of repentance for the remission of sins.'),
            plain(9, 'And it came to pass in those days, that Jesus came from Nazareth of Galilee, and was baptized of John in Jordan.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-1-78mid-1',
          html:
            'John baptizes in the wilderness; Jesus comes to be baptized. The forerunner's work yields to the one he announced; the messenger steps aside for the Message.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'And straightway coming up out of the water, he saw the heavens opened, and the Spirit like a dove descending upon him:'),
            plain(11, 'And there came a voice from heaven, saying, Thou art my beloved Son, in whom I am well pleased.'),
            plain(12, 'And immediately the Spirit driveth him into the wilderness.'),
            plain(13, 'And he was there in the wilderness forty days, tempted of Satan; and was with the wild beasts; and the angels ministered unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark1-beginning',
          html:
            'Mark opens not with genealogy or birth narrative, but with announcement: "The beginning of the gospel." The word gospel means good news. It is the proclamation that God has acted in history to save His people. That action centers on Jesus Christ. He is not a sage or teacher first. He is the Son of God—a title applied to kings and to the Messiah in the Old Testament tradition. From the very first word, Mark announces who this story is about.',
        },
        {
          kind: 'commentary',
          id: 'mark1-john',
          html:
            'John the Baptist stands in the tradition of the prophets—dressed in camel&apos;s hair, eating locusts and wild honey, calling Israel to repentance in the wilderness[res:bible-odyssey-john-baptist]. He announces that one comes after him who is mightier: "He shall baptize you with the Holy Ghost." John recognizes his own role as preparatory. He is the voice crying in the wilderness, the forerunner, the one who decreases so that the greater may increase.',
        },
        {
          kind: 'greek',
          id: 'mark1-euaggelion',
          title: 'Euaggelion — Gospel',
          script: 'εὐαγγέλιον',
          translit: '<strong>Euaggelion</strong> · good news; gospel; message of salvation',
          description:
            'The Greek word euaggelion[res:perseus-euaggelion] literally means "good news." In the Greco-Roman world it was used for announcements of military victory or imperial events. Mark appropriates this word to announce the ultimate good news: that Jesus Christ, the Son of God, has come to bring salvation. The gospel is not merely information. It is transformative news that demands a response.',
        },
        {
          kind: 'commentary',
          id: 'mark1-baptism',
          html:
            'Jesus comes to John and is baptized—identifying with Israel, with humanity, with the waters of judgment and renewal. This is the shocking moment: the sinless one being baptized with a baptism of repentance. As He comes up from the water, the heavens open and the Spirit descends "like a dove." This is the moment of divine commissioning. The voice from heaven speaks: "Thou art my beloved Son, in whom I am well pleased." Jesus is declared beloved, approved, chosen. And then, immediately, the Spirit drives Him into the wilderness.',
        },
        {
          kind: 'christ',
          id: 'mark1-christ-baptism',
          title: 'Christ Connection — Baptism into Death and Resurrection',
          html:
            'Jesus&apos; baptism in the Jordan points to a greater baptism still: the baptism of His death and resurrection. He will later ask His disciples, "Are ye able to drink of the cup that I drink of, and to be baptized with the baptism that I am baptized with?" His entire mission is a descent into the waters of human suffering and death, followed by an emergence into resurrection life. In baptism, we join Him in that descent and emergence.',
        },
        {
          kind: 'carry',
          html:
            'The wilderness temptation reveals a pattern: divine commissioning is followed by severe testing. Jesus is tempted but stands firm. The angels minister to Him. In your own life, seasons of clarity and calling are often followed by seasons of testing and doubt. The presence of temptation does not mean God has abandoned you. It means you are being proved, refined, strengthened for the work ahead.',
        },
        {
          kind: 'reflection',
          id: 'mark1-tempted',
          prompt: 'When you have felt most clearly called to something—in faith, in relationships, in work—how has that calling been tested? What kept you faithful in the wilderness?',
        },
      ],
    },

    /* ─── Mark 1:14–34 — Calling and Healing ───────────────────────────── */
    {
      ref: 'Mark 1:14–34',
      title: 'Kingdom Proclaimed and Demonstrated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(14, 'Now after that John was put in prison, Jesus came into Galilee, preaching the gospel of the kingdom of God,'),
            plain(15, 'And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.'),
            plain(16, 'Now as he walked by the sea of Galilee, he saw Simon and Andrew his brother casting a net into the sea: for they were fishers.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-1-78mid-2',
          html:
            'Jesus is baptized and the Spirit descends; He is driven into the wilderness for forty days. From blessing comes testing; from affirmation comes trial.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(17, 'And Jesus said unto them, Come ye after me, and I will make you to become fishers of men.'),
            plain(21, 'And they went into Capernaum; and straightway on the sabbath day he entered into the synagogue, and taught.'),
            plain(27, 'And they were all amazed, insomuch that they questioned among themselves, saying, What thing is this? what new doctrine is this? for with authority he commandeth even the unclean spirits, and they do obey him.'),
            plain(38, 'And he said unto them, Let us go into the next towns, that I may preach there also: for therefore came I forth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark1-gospel-now',
          html:
            'Jesus does not begin with a call to philosophical reflection or moral improvement. He begins with an announcement: "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel." The time—the appointed moment, the hour toward which all of history has been moving—is now. God&apos;s kingdom is not a future abstraction. It is present, arriving, breaking into the world. Repentance and faith are the only fitting responses.',
        },
        {
          kind: 'commentary',
          id: 'mark1-fishers',
          html:
            'Jesus calls Simon and Andrew not with a sermon but with a promise: "I will make you to become fishers of men." They are working men, skilled in their trade. Jesus takes that skill—their knowledge of water, nets, timing, harvest—and tells them it will apply to something far greater. They will draw people into the kingdom. The call is immediate and specific. They leave their nets and follow.',
        },
        {
          kind: 'greek',
          id: 'mark1-basileia',
          title: 'Basileia — Kingdom',
          script: 'βασιλεία',
          translit: '<strong>Basileia</strong> · kingdom; reign; rule; sovereignty',
          description:
            'The Greek word basileia refers not primarily to a place or territory, but to the reign or sovereignty of a king. The kingdom of God is God&apos;s active rule breaking into the present world. It is not a future reward for the righteous alone. It is God&apos;s authority manifest now, overturning illness, casting out demons, calling the lost to repentance.',
        },
        {
          kind: 'commentary',
          id: 'mark1-authority',
          html:
            'In the synagogue, Jesus teaches with authority. The crowds recognize something unprecedented—not the learned debate of the scribes, but a word that carries weight and power. When a demon-possessed man cries out, Jesus does not merely counsel the demon away. He rebukes it: "Hold thy peace, and come out of him." And it obeys. The word of Jesus is not mere advice. It is the word of one who exercises dominion over the spiritual forces that enslave humanity.',
        },
        {
          kind: 'christ',
          id: 'mark1-christ-kingdom',
          title: 'Christ Connection — The Kingdom Has Come',
          html:
            'Jesus announces that the kingdom of God is not something to wait for, but something that has arrived. He is that kingdom—His presence, His teaching, His power over sickness and demons, His call to repentance and faith. To follow Jesus is to enter the kingdom. The old powers are being displaced. The rule of God is being established on earth.',
        },
        {
          kind: 'carry',
          html:
            'The disciples in this passage show us what it means to be called: they left their nets immediately and followed. They did not negotiate the terms or ask for time to think. They recognized in Jesus a summons more real than their livelihood. In your own life, what nets do you need to leave? What summons is Jesus making to you?',
        },
        {
          kind: 'reflection',
          id: 'mark1-nets',
          prompt: 'What would it cost you to "leave your nets" and follow more fully? What would need to change in how you spend your time, your energy, your trust?',
        },
      ],
    },

    /* ─── Mark 1:35–45 — The Leper ────────────────────────────────────── */
    {
      ref: 'Mark 1:35–45',
      title: 'Touching the Untouchable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(40, 'And there came a leper to him, beseeching him, and kneeling down to him, and saying unto him, If thou wilt, thou canst make me clean.'),
            plain(41, 'And Jesus, moved with compassion, put forth his hand, and touched him, and saith unto him, I will; be thou clean.'),
            plain(42, 'And as soon as he had spoken, immediately the leprosy departed from him, and he was cleansed.'),
            plain(44, 'And he saith unto him, See thou say nothing to any man: but go thy way, show thyself to the priest, and offer for thy cleansing those things which Moses commanded, for a testimony unto them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark1-leper-unclean',
          html:
            'Leprosy in the ancient world was not merely a disease. It was a sentence of social death. The law required lepers to live apart, to cry out "Unclean, unclean" if anyone approached. They were cut off from family, from worship, from the community of the living. A leper begging Jesus to make him clean is not asking for medical care. He is asking for restoration, for the possibility of return, for acceptance into human society again.',
        },
        {
          kind: 'commentary',
          id: 'mark1-touched',
          html:
            'Jesus&apos; response is revolutionary. He could have spoken a word from a distance and healed the leper without touching him. But Mark tells us Jesus was "moved with compassion" and "put forth his hand, and touched him." Jesus touches the untouchable[res:sefaria-leprosy-laws]. He violates every law of cleanliness, every boundary of separation. By touching the leper, Jesus says: you are not beyond reach. You belong to the community of the human. You are clean. The leprosy departs immediately.',
        },
        {
          kind: 'greek',
          id: 'mark1-splanchnizomai',
          title: 'Splanchnizomai — Moved with Compassion',
          script: 'σπλαγχνίζομαι',
          translit: '<strong>Splanchnizomai</strong> · moved with compassion; tender mercy; bowels yearning',
          description:
            'The Greek word splanchnizomai refers to feeling something in one&apos;s innermost being. The splanchna are the bowels, the seat of compassion in ancient thought. To be splanchnizomai is to be moved, to feel the suffering of another person so deeply that you must act. This is how Jesus responds to human need.',
        },
        {
          kind: 'christ',
          id: 'mark1-christ-cleansing',
          title: 'Christ Connection — The True Cleansing',
          html:
            'Jesus&apos; healing of the leper foreshadows His ultimate work: cleansing all of humanity from the leprosy of sin, removing the barriers that separate us from God and from each other. His touch, His willingness to enter into human suffering, His declaration "I will; be thou clean"—these reveal a God who does not stand apart in judgment but draws near in mercy. The veil between holy and unholy is torn.',
        },
        {
          kind: 'carry',
          html:
            'Mark&apos;s first chapter ends with the kingdom of God breaking into the world in concrete, embodied ways. The gospel is proclaimed. The sick are healed. The untouchable are restored. The authority of Jesus is not theoretical. It is enacted, visible, transformative. This is what it means for the kingdom of God to arrive.',
        },
        {
          kind: 'reflection',
          id: 'mark1-untouchable',
          prompt: 'Who in your life feels untouchable—beyond acceptance, beyond restoration? What would it mean for you to be the one who reaches across that boundary?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The beginning of the gospel of Jesus Christ, the Son of God. The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 1 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-john-baptist',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'John the Baptist',
      url: 'https://www.bibleodyssey.org/dictionary/john-the-baptist/',
      description: 'Open-access SBL entry covering the wilderness preacher&apos;s historical context and role in first-century Judaism.',
    },
    {
      id: 'sefaria-leprosy-laws',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 13–14: Leprosy Laws',
      url: 'https://www.sefaria.org/Leviticus.13?lang=bi',
      description: 'Torah texts and Jewish law governing cleanliness, separation, and healing of skin diseases that frame Jesus&apos; boundary-breaking healing.',
    },
    {
      id: 'perseus-euaggelion',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'εὐαγγέλιον (euaggelion)',
      url: 'https://scaife.perseus.org/lexica/lsj/εὐαγγέλιον/',
      description: 'Greek lexicon entry defining euaggelion as imperial proclamation and good news, showing Markan subversion of Greco-Roman terminology.',
    },
  ],

  hasHebrew: false,
};
