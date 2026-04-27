import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 1 — The Genealogy and Birth of Jesus
 *
 * Matthew opens by tracing the lineage of Jesus from Abraham through David to
 * Joseph, establishing Him as the promised king of Israel. The genealogy is no
 * mere historical record—it is proclamation. Within it are four women: Tamar,
 * Rahab, Ruth, and Bathsheba, each a reminder that God works through broken
 * and unlikely vessels. Joseph learns that his betrothed, Mary, carries a child
 * conceived by the Holy Spirit. "Thou shalt call his name JESUS: for he shall
 * save his people from their sins." The angel&apos;s word to Joseph is the
 * gospel in miniature: the arrival of the Savior, the presence of God with us.
 */
export const MATTHEW_1: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 1,

  intros: [
    'The Gospel of Matthew begins not with a scene or story, but with genealogy. "The book of the generation of Jesus Christ, the son of David, the son of Abraham." Matthew is telling us who Jesus is by showing us where He comes from. He is the descendant of Abraham, the father of believers. He is the son of David, the king of Israel. The messianic promise that has echoed through centuries of Israel&apos;s history finds its fulfillment in this child.',
    'Within the genealogy is a secret that Matthew wants us to notice. Four women are named: Tamar, who bore Judah&apos;s child through cunning; Rahab, a harlot who believed in the God of Israel; Ruth, a foreigner who claimed a place in God&apos;s people; and Bathsheba, whose son was born from David&apos;s sin. God does not work through the righteous alone. He works through the broken, the outsiders, the daughters of scandal. And He is working through them toward a purpose that is pure.',
  ],

  sections: [
    {
      ref: 'Matthew 1:1–17',
      title: 'The Genealogy of Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The book of the generation of Jesus Christ, the son of David, the son of Abraham.'),
            plain(3, 'And Judas begat Phares and Zara of Thamar; and Phares begat Esrom; and Esrom begat Aram;'),
            plain(5, 'And Salmon begat Booz of Rachab; and Booz begat Obed of Ruth; and Obed begat Jesse;'),
            plain(6, 'And Jesse begat David the king; and David the king begat Solomon of her that had been the wife of Urias;'),
            plain(16, 'And Jacob begat Joseph the husband of Mary, of whom was born Jesus, who is called Christ.'),
            plain(17, 'So all the generations from Abraham to David are fourteen generations; and from David until the carrying away into Babylon are fourteen generations; and from the carrying away into Babylon unto Christ are fourteen generations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt1-genealogy',
          html:
            'Matthew presents Jesus as the heir of two great promises: the covenant with Abraham and the covenant with David. Abraham was promised that through his descendants all the nations of the earth would be blessed. David was promised an eternal throne, a king whose reign would not end. Jesus is the fulfillment of both. But notice how Matthew structures the genealogy: fourteen generations, fourteen generations, fourteen generations. The pattern is intentional. Matthew is showing us that Jesus&apos; arrival is not accident. It is the climax of a plan woven through history.',
        },
        {
          kind: 'commentary',
          id: 'matt1-women',
          html:
            'Four women appear in the genealogy—an unusual thing in ancient genealogies, which typically name men. Tamar, who disguised herself as a harlot to bear Judah&apos;s heir. Rahab, the prostitute of Jericho who hid the Israelite spies. Ruth, the Moabite outsider who claimed Boaz and became David&apos;s grandmother. Bathsheba, taken by David and made a widow, whose son became a great king. Each woman was outside the boundaries—by birth, by circumstance, by apparent shame. Yet God worked through them. Jesus comes not through the purely righteous, but through the redeemed and the included.',
        },
        {
          kind: 'hebrew',
          id: 'matt1-yeshua',
          title: 'Yeshua — Jesus',
          script: 'יְשׁוּעָה',
          translit: '<strong>Yeshua</strong> · salvation; he saves; Joshua',
          description:
            'The name Jesus comes from the Hebrew Yeshua (Joshua), which means "YHWH saves" or "the Lord is salvation." The angel instructs Joseph: "Thou shalt call his name JESUS: for he shall save his people from their sins." The name itself is the promise. This child is not merely a good man or a wise teacher. He is God&apos;s instrument of salvation for His people.',
        },
        {
          kind: 'christ',
          id: 'matt1-christ-savior',
          title: 'Christ Connection — Christ Saves',
          html:
            'The genealogy of Matthew is not about names and dates. It is about promise and fulfillment. Jesus is born not into a vacuum, but into a lineage that carries centuries of longing and expectation. He is the son of Abraham, heir to the promise that through this line all nations will be blessed. He is the son of David, the eternal King whose throne shall not be taken from Him. And He comes to "save his people from their sins"—the ultimate purpose toward which the entire story has been moving.',
        },
        {
          kind: 'carry',
          html:
            'Matthew reminds us that God works through broken vessels and unlikely heirs. The women named in the genealogy—Tamar, Rahab, Ruth, Bathsheba—were not considered respectable by the standards of their time. Yet God included them in the line of the Messiah. Whatever shame or failure you carry, you are not outside God&apos;s purpose. You are not too broken to be part of His story.',
        },
        {
          kind: 'reflection',
          id: 'matt1-heritage',
          prompt: 'How does knowing that Jesus descended from broken, outsider women change the way you think about your own struggles or failures? What inheritance does that give you?',
        },
      ],
    },

    {
      ref: 'Matthew 1:18–25',
      title: 'The Birth of Jesus and Joseph&apos;s Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(18, 'Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost.'),
            plain(19, 'Then Joseph her husband, being a just man, and not willing to make her a publick example, was minded to put her away privily.'),
            plain(20, 'But while he thought on these things, behold, the angel of the Lord appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost.'),
            plain(21, 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.'),
            plain(22, 'Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying,'),
            plain(23, 'Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel; which being interpreted is, God with us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt1-mary-joseph',
          html:
            'Joseph faces an impossible situation. His betrothed is with child—not his child. By the law of Israel, he has grounds to divorce her publicly, to protect his name. But "being a just man," he chooses a quiet dissolution instead. He is about to do this when the angel appears to him in a dream. "Fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost." Joseph is being asked to receive a child who is not biologically his, to give his name and protection to a son whose true Father is God.',
        },
        {
          kind: 'commentary',
          id: 'matt1-immanuel',
          html:
            'The angel draws on Isaiah 7:14: "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel; which being interpreted is, God with us." The name is proclamation: God is with us. Not God distant or transcendent alone, but God present, entering into human life, taking on human flesh, walking the same earth that we walk. This is the scandal and the wonder of the Incarnation. God does not remain in heaven. God comes near.',
        },
        {
          kind: 'greek',
          id: 'matt1-parthenos',
          title: 'Parthenos — Virgin',
          script: 'παρθένος',
          translit: '<strong>Parthenos</strong> · virgin; young woman; maiden',
          description:
            'Matthew uses the Greek word parthenos (virgin) to render the Hebrew almah of Isaiah 7:14. The Greek word emphasizes virginity—a literal virginity that affirms the miraculous conception. Jesus is born of a virgin, not through normal human generation. His birth is a sign of God&apos;s direct action in history, of the impossible becoming real.',
        },
        {
          kind: 'christ',
          id: 'matt1-christ-emmanuel',
          title: 'Christ Connection — God With Us',
          html:
            'Matthew&apos;s opening chapter closes with the name Emmanuel—God with us. This is who Jesus is and why He came. He is not a distant teacher or a moral exemplar. He is God in human form, present with His people, saving them from their sins. Every chapter of Matthew from this point forward will flesh out what it means that God has drawn near, that the kingdom of heaven has come, that we are no longer alone.',
        },
        {
          kind: 'carry',
          html:
            'Joseph shows us what it looks like to accept the divine interruption. His plans for a quiet life, a respectable marriage, a normal future—all of that is overturned by the angel&apos;s word. And yet he says yes. He takes Mary as his wife. He gives his name to the Son of God. His yes to God&apos;s will, made in the dark of a dream, sets the stage for all that follows.',
        },
        {
          kind: 'reflection',
          id: 'matt1-emmanuel',
          prompt: 'What does it mean to you, personally, that God is "Emmanuel"—God with us? In what way do you need to experience God&apos;s presence right now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou shalt call his name JESUS: for he shall save his people from their sins. ... God with us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 1 · Study Guide',
  },

  hasHebrew: true,
};
