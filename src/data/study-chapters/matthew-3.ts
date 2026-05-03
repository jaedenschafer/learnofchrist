import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 3 — John&apos;s Baptism and Jesus&apos; Commissioning
 *
 * John the Baptist emerges from the wilderness dressed in camel&apos;s hair,
 * proclaiming "Repent ye: for the kingdom of heaven is at hand." He baptizes
 * with water, calling Israel to turn from sin. But one comes after him who is
 * mightier: Jesus of Nazareth. Jesus comes to John and is baptized—identifying
 * with sinners, with repentance, with the people. As He comes up from the
 * water, the heavens open. The Spirit descends like a dove. A voice from
 * heaven speaks: "This is my beloved Son, in whom I am well pleased." Jesus is
 * declared, commissioned, affirmed. He is the Beloved Son.
 */
export const MATTHEW_3: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'In those days comes John the Baptist, emerging from the Judean wilderness with a call to radical repentance. He wears the prophet&apos;s garb—camel&apos;s hair and a leather girdle. He preaches a baptism of repentance for the forgiveness of sins. Crowds come out from Jerusalem and all Judea to be baptized in the Jordan. There is urgency in his preaching: the kingdom of heaven is at hand. The appointed time has come. The age is turning. Israel must turn also.',
    'But John knows his own role is preparatory. "He that cometh after me is mightier than I," he says. John&apos;s baptism is with water—an outward sign of inward repentance. But the one who comes will baptize "with the Holy Ghost, and with fire." He will bring not preparation but fulfillment. Not call but transformation. And then, unexpectedly, Jesus Himself comes to John to be baptized.',
  ],

  sections: [
    {
      ref: 'Matthew 3:1–12',
      title: 'John Preaches Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'In those days came John the Baptist, preaching in the wilderness of Judaea,'),
            plain(2, 'And saying, Repent ye: for the kingdom of heaven is at hand.'),
            plain(3, 'For this is he that was spoken of by the prophet Esaias, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.'),
            plain(4, 'And the same John had his raiment of camel&apos;s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.'),
            plain(7, 'But when he saw many of the Pharisees and Sadducees come to his baptism, he said unto them, O generation of vipers, who hath warned you to flee from the wrath to come?'),
            plain(8, 'Bring forth therefore fruits meet for repentance:'),
            plain(11, 'I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt3-john-prophet',
          html:
            'John the Baptist is a figure of the old covenant, speaking with prophetic authority. He stands in the tradition of Elijah and the prophets—dressed strangely, living ascetically, speaking truth without compromise[res:bibleodyssey-john-baptist]. His message is urgent: "Repent ye: for the kingdom of heaven is at hand." Repentance is not mere feeling of remorse. It is a turning around, a change of mind and direction. The kingdom of heaven requires this radical reorientation.',
        },
        {
          kind: 'commentary',
          id: 'matt3-generation-vipers',
          html:
            'John&apos;s words to the Pharisees and Sadducees are harsh: "O generation of vipers, who hath warned you to flee from the wrath to come?" The religious leaders come for baptism, but John sees through them. They want the appearance of righteousness without the reality of repentance. They want to be baptized without "bringing forth fruits meet for repentance." John insists that true repentance is visible, measurable, bearing fruit in changed behavior and character.',
        },
        {
          kind: 'greek',
          id: 'matt3-metanoia',
          title: 'Metanoia — Repentance',
          script: 'μετανοέω',
          translit: '<strong>Metanoia</strong> · repentance; change of mind; turning around; transformation',
          description:
            'The Greek word metanoia is more than regret. It is a fundamental change of direction, a complete reorientation of the mind and will. To repent is to turn from sin and toward God. John demands this radical turning. Jesus will later echo this call: "Repent ye, and believe the gospel." Metanoia is the gateway to the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'matt3-john-mightier',
          html:
            'John makes clear his own subordinate role: "He that cometh after me is mightier than I, whose shoes I am not worthy to bear." In the ancient world, a slave might unbind a master&apos;s sandals—the lowest service. John says he is not worthy even for that. The one coming after him is far greater. John brings water baptism; he brings a call to repentance. But the coming one will bring the Holy Spirit and fire—the fullness of God&apos;s transforming power.',
        },
        {
          kind: 'christ',
          id: 'matt3-christ-mightier',
          title: 'Christ Connection — The Beloved Son',
          html:
            'John&apos;s entire role is to point away from himself toward Jesus. John baptizes with water. Jesus will baptize with the Holy Spirit. John calls to repentance. Jesus brings the power to change. John is the forerunner, the voice in the wilderness. Jesus is the reality to which the voice points. All that John does is preparation for the one who is mightier, who brings God&apos;s Spirit and fire.',
        },
        {
          kind: 'carry',
          html:
            'John teaches us the virtue of knowing our place. He is mighty in his own right—crowds come to him, he speaks with prophetic authority. Yet he never loses sight of the fact that his role is preparatory. He knows he must "decrease" so that another may increase. Humility like this—knowing both our significance and our limitations—is rare and precious.',
        },
        {
          kind: 'reflection',
          id: 'matt3-decrease',
          prompt: 'John said "I must decrease, that he may increase." What areas of your life or identity do you need to decrease to make room for Christ?',
        },
      ],
    },

    {
      ref: 'Matthew 3:13–17',
      title: 'Jesus Is Baptized and Affirmed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him.'),
            plain(14, 'But John forbad him, saying, I have need to be baptized of thee, and comest thou to me?'),
            plain(15, 'And Jesus answering said unto him, Suffer it to be so now: for thus it becometh us to fulfil all righteousness. Then he suffered him.'),
            plain(16, 'And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him:'),
            plain(17, 'And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt3-jesus-baptized',
          html:
            'Jesus comes to John for baptism. John is shocked. He knows Jesus is the mightier one, the one for whom he has been preparing the way. Why would the sinless one seek a baptism of repentance? Jesus&apos; answer is profound: "Suffer it to be so now: for thus it becometh us to fulfil all righteousness." Jesus is not baptized because He has sinned. He is baptized in solidarity with sinners, in identification with Israel, in submission to the Father&apos;s will. He enters the waters as representative of humanity.',
        },
        {
          kind: 'commentary',
          id: 'matt3-heavens-opened',
          html:
            'As Jesus comes up from the water, something unprecedented happens. "The heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him." The Spirit descends visibly—not upon a king, not upon a priest, but upon the humble one who has just been baptized[res:israel-museum-qumran-baptism]. Matthew shows us that the Spirit is not earned or achieved. It is given, granted, poured out. Jesus experiences this outpouring as He submits to the will of the Father.',
        },
        {
          kind: 'commentary',
          id: 'matt3-beloved-son',
          html:
            'And then the voice from heaven: "This is my beloved Son, in whom I am well pleased." The Father speaks. Jesus is declared to be the Son—not adopted, not appointed, but Son. And He is beloved—the object of the Father&apos;s infinite affection and approval. The heavens themselves are witness. The Spirit is present. And the voice confirms what has been true from the beginning: this is the one in whom all the Father&apos;s favor rests.',
        },
        {
          kind: 'greek',
          id: 'matt3-agapetos',
          title: 'Agapetos — Beloved',
          script: 'ἀγαπητός',
          translit: '<strong>Agapetos</strong> · beloved; dearly loved; cherished; dear one',
          description:
            'The Greek word agapetos speaks of deep, sacrificial love—the love that gives itself for the other. When the Father calls Jesus "my beloved Son," He is expressing not sentimental affection but the profound reality of the covenant relationship between Father and Son. Jesus is the object of the Father&apos;s love, and through Jesus we are invited into that love.',
        },
        {
          kind: 'christ',
          id: 'matt3-christ-beloved',
          title: 'Christ Connection — The Father&apos;s Beloved',
          html:
            'At His baptism, Jesus is affirmed by the Father, anointed by the Spirit, and declared to be the Beloved Son. This is the reality underlying all that will follow: Jesus acts and speaks not in His own authority, but as the one sent by the Father, filled with the Spirit. Every miracle, every word, every encounter will be an expression of this foundational truth—that He is the Beloved, and that through Him we are invited to become beloved children of the Father.',
        },
        {
          kind: 'carry',
          html:
            'Matthew shows us Jesus entering the waters of baptism in identification with sinners, even though He Himself is sinless. This is the pattern of incarnational love: God does not stay apart in judgment. He enters into the human condition, He takes on human vulnerability, He stands in solidarity with the broken and the repentant. And in doing so, He opens a way for us to be cleansed and transformed.',
        },
        {
          kind: 'reflection',
          id: 'matt3-beloved',
          prompt: 'The voice from heaven calls Jesus "my beloved Son, in whom I am well pleased." Do you hear God speaking similar words of affection and approval over you? What would it mean to truly believe you are beloved?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Repent ye: for the kingdom of heaven is at hand. This is my beloved Son, in whom I am well pleased.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 3 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-john-baptist',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'John the Baptist',
      url: 'https://www.bibleodyssey.org/dictionary/john-the-baptist/',
      description: 'Historical and biblical overview of John&apos;s ministry, his preaching of repentance, and his role as forerunner to Jesus.',
    },
    {
      id: 'israel-museum-qumran-baptism',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Qumran and Wilderness Movements',
      url: 'https://www.imj.org.il/en',
      description: 'Artifacts and documentation of the Dead Sea community, related to first-century Jewish wilderness baptism movements.',
    },
    {
      id: 'sefaria-isaiah-40',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 40:3 — Voice in Wilderness',
      url: 'https://www.sefaria.org/Isaiah.40.3',
      description: 'Isaiah&apos;s prophecy that Matthew applies to John the Baptist: "The voice of one crying in the wilderness."',
    },
  ],

  hasHebrew: false,
};
