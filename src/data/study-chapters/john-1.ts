import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 1 — The Word Made Flesh
 *
 * "In the beginning was the Word, and the Word was with God, and the Word
 * was God." John does not open with genealogy or birth narrative. He opens
 * with the cosmic proclamation that Jesus is the eternal Word—the logic,
 * the reason, the divine utterance through whom all things came into being.
 * This Word became flesh and dwelt among us. And in that descent into
 * humanity lies the revelation of the Father&apos;s glory.
 */
export const JOHN_1: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 1,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 10 },
  intros: [
    'The gospel according to John opens not with the birth of Jesus, but with the nature of the Word. In the beginning, before creation, before time itself, the Word existed with God and as God. This Word is not a concept or a message. It is a Person—eternal, divine, active in all creation. "All things were made by him; and without him was not any thing made that was made." The light shines in darkness, and the darkness comprehends it not.',
    'John the Baptist appears as a witness to this Word made flesh. "Behold the Lamb of God, which taketh away the sin of the world." In the Jordan, the heavens open, the Spirit descends, and a voice bears witness: this is the Son of God. From the Baptist and his disciples, word spreads. Men come and follow. They call Jesus "Master," "Rabbi," "King of Israel." But Jesus speaks of something greater still: the angels ascending and descending upon the Son of man. The threshold between heaven and earth is collapsing.',
  ],

  sections: [
    /* ─── John 1:1–18 — The Word Made Flesh ────────────────────────────── */
    {
      ref: 'John 1:1–18',
      title: 'The Word Made Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'In the beginning was the Word, and the Word was with God, and the Word was God.'),
            plain(3, 'All things were made by him; and without him was not any thing made that was made.'),
            plain(4, 'In him was life; and the life was the light of men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-1-78mid-1',
          html:
            'John pivots from sign to meaning, from discourse to response. The next verses press the same truth from a deeper angle.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'And the light shineth in darkness; and the darkness comprehended it not.'),
            plain(14, 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.'),
            plain(16, 'And of his fulness have all we received, and grace for grace.'),
            plain(18, 'No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john1-word-beginning',
          html:
            'John begins where Genesis begins—"In the beginning[res:sefaria-genesis-creation]." But John looks deeper. Before creation, before light and darkness, before time itself, the Word was. Not as a creature, not as an emanation, but as a presence in the very heart of God. "The Word was with God" and "the Word was God." This is the paradox that anchors all of John&apos;s gospel: Jesus is both with God and is God. They are not one in confusion. They are one in nature, in purpose, in eternity.',
        },
        {
          kind: 'greek',
          id: 'john1-logos',
          title: 'Logos — Word',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · word; reason; divine utterance; logic',
          description:
            'The Greek word logos carries layers of meaning. It is the word spoken, the truth revealed, the rational principle underlying all reality. In the Jewish tradition, the Word of God is the creative utterance: "Let there be light." In Greek philosophy, the Logos is the eternal reason that orders the cosmos. John brings these worlds together: the Word is Jesus Christ, through whom God spoke creation into being, and in whom the eternal reason of the Father is revealed.',
        },
        {
          kind: 'commentary',
          id: 'john1-creation',
          html:
            '"All things were made by him; and without him was not any thing made that was made." Every star, every atom, every creature owes its existence to the Word. This is not metaphor. John is making a cosmic claim: Jesus Christ is the agent of creation, the one through whom all being flows. To know Jesus is to touch the very ground of existence.',
        },
        {
          kind: 'commentary',
          id: 'john1-light',
          html:
            '"In him was life; and the life was the light of men." The Word is not only the author of physical existence. He is the source of life itself—that animate principle that makes creation more than mere matter. And that life manifests as light, as truth, as revelation. The light shines in darkness. But the darkness does not receive it. The world does not recognize the one who created it.',
        },
        {
          kind: 'christ',
          id: 'john1-christ-word',
          title: 'Christ Connection — The Word Among Us',
          html:
            '"And the Word was made flesh, and dwelt among us." The infinite becomes finite. The eternal enters time. The unseen God is now visible, touchable, present. This is not the Word diminished or compromised. John insists: "we beheld his glory, the glory as of the only begotten of the Father." In the face of Jesus, God&apos;s glory is revealed. In His words and deeds, the Father is declared.',
        },
        {
          kind: 'carry',
          html:
            'John opens his gospel by locating Jesus not in Bethlehem or Nazareth, but in eternity. If you have felt far from God, obscured by doubt or distance, remember: the Word who spoke the stars into being once dwelt on earth in human flesh. He is not distant. He is the very light that shines in darkness. That darkness does not have the final word.',
        },
        {
          kind: 'reflection',
          id: 'john1-light-darkness',
          prompt: 'Where do you sense the light shining in your own darkness? How does the incarnation of Christ—God becoming flesh—change the way you understand His presence in your life?',
        },
      ],
    },

    /* ─── John 1:19–42 — The Testimony of John and First Disciples ────── */
    {
      ref: 'John 1:19–42',
      title: 'The Lamb of God and the First Followers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(19, 'And this is the record of John, when the Jews sent priests and Levites from Jerusalem to ask him, Who art thou?'),
            plain(23, 'He said, I am the voice of one crying in the wilderness, Make straight the way of the Lord, as said the prophet Esaias.'),
            plain(29, 'The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world.'),
            plain(35, 'Again the next day after John stood, and two of his disciples;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-1-78mid-2',
          html:
            'John pivots from sign to meaning, from discourse to response. The next verses press the same truth from a deeper angle.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(37, 'And the two disciples heard him speak, and they followed Jesus.'),
            plain(40, 'One of the two which heard John speak, and followed him, was Andrew, Simon Peter&apos;s brother.'),
            plain(41, 'He first findeth his own brother Simon, and saith unto him, We have found the Messias, which is, being interpreted, the Christ.'),
            plain(42, 'And he brought him to Jesus. And when Jesus beheld him, he said, Thou art Simon the son of Jona: thou shalt be called Cephas, which is by interpretation, A stone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john1-baptist-witness',
          html:
            'John the Baptist is not presented as the Messiah, but as the witness to the Messiah. When Jerusalem sends priests to interrogate him, he responds with humility: "I am not the Christ... I am the voice of one crying in the wilderness." His entire ministry is instrumental—to prepare the way, to point beyond himself. He knows his role and does not exceed it. This is the pattern of faithful witness.',
        },
        {
          kind: 'commentary',
          id: 'john1-lamb',
          html:
            '"Behold the Lamb of God, which taketh away the sin of the world[res:sefaria-atonement-lamb]." In these words, John recalls the Passover lamb of Exodus, whose blood protected Israel from death. But more than that, John proclaims that Jesus will bear the sins of the world. He will absorb, carry, and remove the weight of human rebellion. Not through power or punishment, but through the willing sacrifice of the Lamb.',
        },
        {
          kind: 'greek',
          id: 'john1-amnos',
          title: 'Amnos — Lamb',
          script: 'ἀμνός',
          translit: '<strong>Amnos</strong> · lamb; innocent victim; paschal lamb',
          description:
            'The word amnos evokes the innocent lamb led to slaughter, silent and without defense. It recalls the lambs of the Temple sacrifices, the Passover lamb that saved Israel, and the suffering servant of Isaiah who is led as a lamb to the slaughter. John applies this image to Jesus, announcing that He is the definitive sacrifice—the one whose blood atones for all sin.',
        },
        {
          kind: 'commentary',
          id: 'john1-disciples',
          html:
            'The disciples come to Jesus not through elaborate theological arguments, but through simple witness. Andrew hears John&apos;s testimony, follows Jesus, and immediately goes to find his brother Simon. "We have found the Messias," he says. The knowledge comes not from institution or proof, but from encounter and invitation. Simon is brought before Jesus, and Jesus names him anew: Cephas, the stone. His identity is remade in the presence of Christ.',
        },
        {
          kind: 'christ',
          id: 'john1-christ-lamb',
          title: 'Christ Connection — The Lamb Lifted Up',
          html:
            'Jesus is the Lamb who takes away the sin of the world. This is not merely ceremonial language. It is the proclamation that in His person, God enters the human condition and bears its weight—all the darkness, all the separation, all the rebellion that sin brings. His sacrifice is not distant or theoretical. It is the very ground upon which reconciliation becomes possible.',
        },
        {
          kind: 'carry',
          html:
            'Notice how the disciples are called: not by force, not by argument, but through testimony and invitation. Andrew hears, follows, and brings his brother. This is how the gospel spreads—not by coercion, but by witness. Someone encounters the truth and cannot help but share it. How might you be a witness like Andrew, bringing those you love into the presence of Christ?',
        },
        {
          kind: 'reflection',
          id: 'john1-witness',
          prompt: 'Who has been a witness to Christ in your life? And who might be looking to you to help them encounter Jesus?',
        },
      ],
    },

    /* ─── John 1:43–51 — Philip, Nathanael, and the Open Heaven ────────── */
    {
      ref: 'John 1:43–51',
      title: 'Come and See',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(43, 'The day following Jesus would go forth into Galilee, and findeth Philip: and saith unto him, Follow me.'),
            plain(45, 'Philip findeth Nathanael, and saith unto him, We have found him, of whom Moses in the law, and the prophets, did write, Jesus of Nazareth, the son of Joseph.'),
            plain(46, 'And Nathanael said unto him, Can there any good thing come out of Nazareth? Philip saith unto him, Come and see.'),
            plain(47, 'Jesus saw Nathanael coming to him, and saith of him, Behold an Israelite indeed, in whom is no guile!'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-1-78mid-3',
          html:
            'John pivots from sign to meaning, from discourse to response. The next verses press the same truth from a deeper angle.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(48, 'Nathanael saith unto him, Whence knowest thou me? Jesus answered and said unto him, Before that Philip called thee, when thou wast under the fig tree, I saw thee.'),
            plain(49, 'Nathanael answered and saith unto him, Rabbi, thou art the Son of God; thou art the King of Israel.'),
            plain(50, 'Jesus answered and said unto him, Because I said unto thee, I saw thee under the fig tree, believest thou? thou shalt see greater things than these.'),
            plain(51, 'And he saith unto him, Verily, verily, I say unto you, Hereafter ye shall see heaven open, and the angels of God ascending and descending upon the Son of man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john1-philip',
          html:
            'Philip is called directly: "Follow me." And Philip, like Andrew, immediately goes to find another. He tells Nathanael they have found the one promised by Moses and the prophets. But Nathanael is skeptical. "Can there any good thing come out of Nazareth?" He judges by what he already knows, dismissing the unknown. Philip does not argue. He simply says: "Come and see." This is the invitation to encounter, not debate.',
        },
        {
          kind: 'commentary',
          id: 'john1-fig-tree',
          html:
            'Jesus reveals that He saw Nathanael when Philip called him—a detail known only to God. Before any external sign or wonder, Jesus demonstrates that He knows the hearts of people, their hidden places, their solitude. He sees Nathanael under the fig tree, a place of rest and contemplation. This penetrating knowledge awakens faith. Nathanael confesses: "Thou art the Son of God; thou art the King of Israel."',
        },
        {
          kind: 'greek',
          id: 'john1-dolos',
          title: 'Dolos — Guile',
          script: 'δόλος',
          translit: '<strong>Dolos</strong> · guile; deceit; fraud; craftiness',
          description:
            'When Jesus says Nathanael is "an Israelite indeed, in whom is no guile," He is praising authentic faith over false pretense. Dolos is the kind of cunning that hides motive and distorts truth. Nathanael is contrasted with this—he comes without disguise, with genuine seeking. He believes not because of conjuring tricks, but because he has been truly seen.',
        },
        {
          kind: 'commentary',
          id: 'john1-greater-things',
          html:
            'Jesus does not rebuke Nathanael&apos;s faith as small or incomplete. Rather, He opens a vision: "thou shalt see greater things than these." The knowledge that Jesus is the Son of God is the foundation. But beyond that lies the unfolding revelation of His glory—the breaking open of heaven, the vision of angels ascending and descending upon Him. This recalls Jacob&apos;s ladder[res:sefaria-jacob-ladder] (Genesis 28:12), the place where heaven and earth meet. Jesus is that meeting place.',
        },
        {
          kind: 'christ',
          id: 'john1-christ-jacob',
          title: 'Christ Connection — The Ladder Between Heaven and Earth',
          html:
            'Jesus connects Himself to Jacob&apos;s vision of angels ascending and descending on a ladder. In Christ, the barrier between the visible and invisible, the human and the divine, is broken down. He is the one through whom heaven and earth meet. All that the prophets longed to see—the full unveiling of God&apos;s presence—is now made manifest in human flesh.',
        },
        {
          kind: 'carry',
          html:
            'Nathanael came ready to dismiss. He had already made a judgment: nothing good comes out of Nazareth. But he was willing to look. When he encountered Jesus, his preconceptions crumbled. What assumptions about God or faith might you be ready to release in order to "come and see"?',
        },
        {
          kind: 'reflection',
          id: 'john1-see',
          prompt: 'What prejudgments or doubts might be keeping you from really seeing Jesus? What would it mean for you to simply "come and see"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In the beginning was the Word, and the Word was with God, and the Word was God. And the Word was made flesh, and dwelt among us. Behold the Lamb of God, which taketh away the sin of the world.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-creation',
      kind: 'study',
      source: 'Sefaria',
      label: 'Creation in Genesis and Jewish Cosmology',
      url: 'https://www.sefaria.org/search?q=genesis%20creation%20beginning%20word%20dabar&tab=text',
      description: 'Sefaria texts on creation theology, the Word of God as creative force, and the beginning of all things.',
    },
    {
      id: 'sefaria-atonement-lamb',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Passover Lamb and Atonement in Jewish Theology',
      url: 'https://www.sefaria.org/search?q=passover%20lamb%20sacrifice%20atonement%20sin&tab=text',
      description: 'Sefaria texts on the Passover, sacrificial theology, and the meaning of the lamb in redemption.',
    },
    {
      id: 'sefaria-jacob-ladder',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jacob&apos;s Ladder and the Vision of Heaven in Jewish Tradition',
      url: 'https://www.sefaria.org/search?q=jacob%20ladder%20heaven%20earth%20angels%20sulam&tab=text',
      description: 'Sefaria texts on Jacob&apos;s vision at Bethel, the connection between heaven and earth, and mystical ascent.',
    },
  ],

  hasHebrew: false,
};
