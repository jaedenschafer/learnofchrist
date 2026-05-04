import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 3 — The Word of God and John&apos;s Ministry
 *
 * John the Baptist comes preaching in the wilderness—the same John born to
 * Zacharias, now a man grown. He proclaims a baptism of repentance for the
 * forgiveness of sins. "Every valley shall be filled, and every mountain and
 * hill shall be brought low." The word of God comes upon John. And he speaks
 * truth to power, rebukes Herod, baptizes the people. Jesus comes from Galilee
 * and is baptized with all the people. The heavens open. The Spirit descends.
 * A voice from heaven speaks. And Luke traces Jesus&apos; lineage back through
 * Joseph to Adam. The genealogy reveals the universality of salvation.
 */
export const LUKE_3: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 3,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  topicTags: ['compassion', 'mission', 'witness', 'humility'],
  opener: {
    topical: true,
    caption: 'Luke 3',
  },
  intros: [
    'In the fifteenth year of the reign of Tiberius Caesar, when Pontius Pilate is governor of Judaea, when Herod is tetrarch of Galilee, when Philip is tetrarch of Ituraea and of the region of Trachonitis, and Lysanias is tetrarch of Abilene—in this precise historical moment, the word of God comes upon John, the son of Zacharias, in the wilderness. John comes proclaiming a baptism of repentance for the forgiveness of sins, fulfilling the prophecy of Isaiah: "The voice of one crying in the wilderness."',
    'John preaches to soldiers, to tax collectors, to all who come. His message is clear: repent. Produce fruit worthy of repentance. Do not presume upon your lineage. God can raise up children to Abraham from these very stones. The axe is laid to the root of the tree. Every tree that does not bear good fruit will be cut down and cast into the fire. John prepares the people. The one who comes after him will baptize with the Holy Spirit and with fire.',
  ],

  sections: [
    {
      ref: 'Luke 3:1–22',
      title: 'John&apos;s Ministry and Jesus&apos; Baptism',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(2, 'The word of God came unto John the son of Zacharias in the wilderness.'),
            plain(3, 'And he came into all the country about Jordan, preaching the baptism of repentance for the remission of sins;'),
            plain(4, 'As it is written in the book of the words of Esaias the prophet, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke-3-78mid-1',
          html:
            'John baptizes the crowds and calls them to repentance; Jesus also comes to be baptized. The forerunner and the Messiah are both in the waters.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'Then said he to the multitude that came forth to be baptized of him, O generation of vipers, who hath warned you to flee from the wrath to come?'),
            plain(16, 'John answered, saying unto them all, I indeed baptize you with water; but one mightier than I cometh, the latchet of whose shoes I am not worthy to unloose: he shall baptize you with the Holy Ghost and with fire:'),
            plain(21, 'Now when all the people were baptized, it came to pass, that Jesus also being baptized, and praying, the heaven was opened,'),
            plain(22, 'And the Holy Ghost descended in a bodily shape like a dove upon him: and a voice came from heaven, which said, Thou art my beloved Son; in thee I am well pleased.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke3-word',
          html:
            'Luke dates John&apos;s ministry with imperial precision, then states simply: "The word of God came unto John."[res:bible-odyssey-prophecy] John is not self-appointed. He is called. The word—the creative, living word of God—comes upon him as it came upon the prophets of old. John becomes a vessel of God&apos;s speech.',
        },
        {
          kind: 'commentary',
          id: 'luke3-repentance',
          html:
            'John calls the multitudes to repentance. He does not offer easy comfort. He names them "O generation of vipers." He warns of the wrath to come. He demands fruit worthy of repentance. To the soldiers: "Do violence to no man." To the tax collectors: "Exact no more than that which is appointed you." To all: "Do to men as ye would they should do to you." Repentance is not feeling sorry. It is turning—changing direction, bearing fruit in keeping with the change.',
        },
        {
          kind: 'greek',
          id: 'luke3-metanoia',
          title: 'Metanoia — Repentance; Turning',
          script: 'μετάνοια',
          translit: '<strong>Metanoia</strong> · repentance; change of mind; turning around',
          description:
            'Metanoia literally means a complete turning around, a change of direction. It is not mere remorse. It is transformation of the will, the direction of life. John calls the people to metanoia—to turn from the old path and walk a new one.',
        },
        {
          kind: 'commentary',
          id: 'luke3-jesus-baptized',
          html:
            'When all the people are baptized, Jesus comes and is baptized[res:sefaria-baptism]. He stands with humanity in the waters of repentance. He identifies with the people He came to save. And as He prays, the heavens open. The Spirit descends in bodily form like a dove. A voice from heaven declares: "Thou art my beloved Son; in thee I am well pleased." The moment of commissioning—the public beginning of Jesus&apos; ministry.',
        },
        {
          kind: 'christ',
          id: 'luke3-christ-baptism',
          title: 'Christ Connection — Identification with Humanity',
          html:
            'Jesus comes to John for baptism not because He needs repentance, but because He comes to fulfill all righteousness, to stand with humanity before God. In His baptism, Jesus begins the work He came to do: to take upon Himself the burden of the world, to walk with the people, to bring them home to God.',
        },
        {
          kind: 'carry',
          html:
            'John&apos;s role is complete in these verses. He has baptized the people. He has pointed to the one who comes after him. He has given testimony: "I am not the Christ." His purpose is fulfilled. From this point, he decreases as Jesus increases. This is the pattern of the faithful servant.',
        },
        {
          kind: 'reflection',
          id: 'luke3-repentance-reflect',
          prompt: 'What fruit are you bearing that shows your repentance? How are you turning in a new direction?',
        },
      ],
    },

    {
      ref: 'Luke 3:23–38',
      title: 'The Genealogy: From Jesus to Adam',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(23, 'And Jesus himself began to be about thirty years of age, being (as was supposed) the son of Joseph, which was the son of Heli,'),
            plain(31, 'Which was the son of David, which was the son of Jesse, which was the son of Obed, which was the son of Booz, which was the son of Salmon, which was the son of Naasson,'),
            plain(34, 'Which was the son of Jacob, which was the son of Isaac, which was the son of Abraham, which was the son of Thara, which was the son of Nachor,'),
            plain(37, 'Which was the son of Methuselah, which was the son of Enoch, which was the son of Jared, which was the son of Mahalaleel, which was the son of Cainan,'),
            plain(38, 'Which was the son of Enos, which was the son of Seth, which was the son of Adam, which was the son of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke3-genealogy-jesus',
          html:
            'Luke traces Jesus&apos; lineage through Joseph. Whether this represents biological descent or legal descent, the genealogy places Jesus within the line of David and within the covenant people of Israel. He is the son of David, of Abraham, heir to the promises made to the patriarchs.',
        },
        {
          kind: 'commentary',
          id: 'luke3-genealogy-adam',
          html:
            'But Luke does not stop with Abraham. He continues backward through the patriarchs, through Noah and the flood, back to Enoch, to Methuselah, to the ancient ages. And finally, he reaches Adam. "Which was the son of Adam, which was the son of God."[res:intertextual-adam-christ] This is Luke&apos;s distinctive move: he traces humanity back to its origin, back to the one human created directly by God. Jesus is the second Adam, the Son of God. He stands in solidarity not just with Israel, but with all humanity.',
        },
        {
          kind: 'greek',
          id: 'luke3-genos',
          title: 'Genos — Lineage; Generation; Kind',
          script: 'γένος',
          translit: '<strong>Genos</strong> · lineage; family; generation; race',
          description:
            'The genealogy demonstrates Jesus&apos; genos—His lineage, His place in the unbroken chain of human history. Yet the chain itself points beyond Israel to all humanity, to Adam, to the divine origin of the human race.',
        },
        {
          kind: 'christ',
          id: 'luke3-christ-adam',
          title: 'Christ Connection — The Second Adam',
          html:
            'Luke&apos;s genealogy ends with Adam as the son of God. Jesus is presented as the true fulfillment of what Adam was meant to be—the image of God, the representative of humanity before God. Where Adam fell, Jesus stands firm. Where Adam disobeyed, Jesus obeys perfectly. Jesus is the new humanity, the restoration of what was lost.',
        },
        {
          kind: 'reflection',
          id: 'luke3-genealogy-reflect',
          prompt: 'What does it mean that Jesus&apos; genealogy connects Him to all of humanity, back to Adam? How does this universalize the gospel?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The word of God came unto John. Every valley shall be filled, and every mountain and hill shall be brought low. Thou art my beloved Son; in thee I am well pleased.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 3 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-prophecy',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Prophecy & the Prophetic Office',
      url: 'https://www.bibleodyssey.org/dictionary/prophecy/',
      description: 'Open-access entry on biblical prophecy and how God&apos;s word comes upon the prophets, examining John&apos;s prophetic role and calling.',
    },
    {
      id: 'intertextual-adam-christ',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Adam & Christ Typology (OT ↔ NT)',
      url: 'https://intertextual.bible/text/genesis-1/luke-3.38',
      description: 'Intertextual links showing how Jesus as the second Adam reverses Adam&apos;s fall and restores humanity&apos;s original relationship with God.',
    },
    {
      id: 'sefaria-baptism',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ritual Purification & Repentance (Leviticus 15)',
      url: 'https://www.sefaria.org/Leviticus.15?lang=bi',
      description: 'Jewish purification laws contextualizing John&apos;s baptism of repentance and Jesus&apos; identification with humanity&apos;s redemption.',
    },
  ],

  hasHebrew: false,
};
