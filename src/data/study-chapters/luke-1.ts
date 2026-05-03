import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 1 — Preparation and Announcement
 *
 * Luke opens his gospel with a world held in expectation. An aged priest
 * enters the Holy Place. A young woman in Nazareth receives a visitor from
 * heaven. John will prepare the way. Jesus will be born the Son of the Most
 * High. Two births announced—two sons destined to alter history. Zacharias
 * loses his voice and finds prophecy. Mary receives a promise she does not
 * yet understand. "Hail, thou that art highly favoured; the Lord is with
 * thee." The kingdom is coming. The world does not yet know it.
 */
export const LUKE_1: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 1,

  estimatedMinutes: { 5: 2, 10: 5, 15: 7 },
  intros: [
    'In the days of Herod, king of Judaea, there was a certain priest named Zacharias, whose wife was Elisabeth. Both were righteous before God, yet childless and old. While Zacharias burns incense in the temple, an angel appears: Gabriel, the messenger of God. Fear grips him. But the angel speaks: "Thy prayer is heard; and thy wife Elisabeth shall bear thee a son, and thou shalt call his name John."',
    'Six months later, Gabriel visits a young virgin in Nazareth. Her name is Mary. The angel greets her with words that pierce eternity: "Hail, thou that art highly favoured; the Lord is with thee." Mary is troubled. The angel continues: "Thou shalt conceive in thy womb, and bring forth a son, and shalt call his name Jesus." She will bear the Son of God. Two promises, two births, one unfolding purpose.',
  ],

  sections: [
    {
      ref: 'Luke 1:5–25',
      title: 'The Priest and the Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'There was in the days of Herod, the king of Judaea, a certain priest named Zacharias, of the course of Abia: and his wife was of the daughters of Aaron, and her name was Elisabeth.'),
            plain(11, 'And there appeared unto him an angel of the Lord standing on the right side of the altar of incense.'),
            plain(13, 'But the angel said unto him, Fear not, Zacharias: for thy prayer is heard; and thy wife Elisabeth shall bear thee a son, and thou shalt call his name John.'),
            plain(17, 'And he shall go before him in the spirit and power of Elias, to turn the hearts of the fathers to the children, and the disobedient to the wisdom of the just; to make ready a people prepared for the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke1-zacharias',
          html:
            'Zacharias is righteous, a man of prayer, yet he and Elisabeth have no child. In the ancient world, infertility was a reproach. Yet God has heard his prayer—not for a son, but for redemption. The angel Gabriel appears in the temple, the most holy place, at the moment of incense offering—when prayers rise toward heaven. This is a moment of threshold, of intersection between earth and heaven.',
        },
        {
          kind: 'greek',
          id: 'luke1-aggelus',
          title: 'Aggelos — Angel',
          script: 'ἄγγελος',
          translit: '<strong>Aggelos</strong> · messenger; angel; one sent',
          description:
            'The Greek word aggelos literally means "messenger" or "one sent." Angels are not cosmic abstractions. They are God&apos;s emissaries, bearers of His word, appearing to announce turning points in history. Gabriel appears only when God&apos;s purposes move forward in time.',
        },
        {
          kind: 'christ',
          id: 'luke1-christ-john',
          title: 'Christ Connection — The Forerunner',
          html:
            'John is born to prepare the way for Jesus. He comes "in the spirit and power of Elias"—the spirit of prophecy, of calling Israel to repentance. Jesus will later say of John: "Among them that are born of women there is not a greater prophet than John the Baptist." Yet John himself will diminish as Jesus increases. This is the pattern of all forerunners.',
        },
        {
          kind: 'carry',
          html:
            'Zacharias doubts the angel&apos;s word. He asks: "Whereby shall I know this?" For his doubt, he is struck dumb—unable to speak until the promise comes to pass. Yet his doubt also becomes the sign. When John is born and Zacharias writes the child&apos;s name, his mouth is opened and he speaks the Magnificat of Zechariah. Sometimes God silences us not in punishment, but to prepare us to speak His truth.',
        },
        {
          kind: 'reflection',
          id: 'luke1-doubt',
          prompt: 'When has your doubt become a teaching? What promise have you had to wait for while silent?',
        },
      ],
    },

    {
      ref: 'Luke 1:26–56',
      title: 'The Annunciation and the Magnificat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(26, 'And in the sixth month the angel Gabriel was sent from God unto a city of Galilee, named Nazareth,'),
            plain(28, 'And the angel came in unto her, and said, Hail, thou that art highly favoured; the Lord is with thee: blessed art thou among women.'),
            plain(30, 'And the angel said unto her, Fear not, Mary: for thou hast found favour with God.'),
            plain(31, 'And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.'),
            plain(46, 'And Mary said, My soul doth magnify the Lord,'),
            plain(47, 'And my spirit hath rejoiced in God my Saviour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke1-mary',
          html:
            'Mary is a young woman, a virgin, living in Nazareth—a village so small it barely appears in history. Yet to her, the angel Gabriel comes with the greatest annunciation ever spoken: "Thou shalt conceive in thy womb, and bring forth a son." She will bear the Son of the Most High. His kingdom will have no end. Mary asks one question: "How shall this be, seeing I know not a man?" Not a refusal. A genuine desire to understand. The angel explains: the power of the Most High will overshadow her.',
        },
        {
          kind: 'greek',
          id: 'luke1-charis',
          title: 'Charis — Favor; Grace',
          script: 'χάρις',
          translit: '<strong>Charis</strong> · favor; grace; kindness shown without merit',
          description:
            'Mary "hath found favour with God." The Greek word charis encompasses both God&apos;s unmerited favor and the grace He bestows. Mary has done nothing to earn this. It is grace—the free gift of God to her, made known through the angel&apos;s greeting.',
        },
        {
          kind: 'commentary',
          id: 'luke1-magnificat',
          html:
            'Mary&apos;s response is not fear or confusion. It is the Magnificat—a hymn of praise that echoes the prayers of Hannah, the song of David, the hopes of Israel. "My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour." She praises God for seeing her lowliness, for doing great things, for remembering His mercy. She sees in her own calling the larger pattern: God has scattered the proud, brought down the mighty, exalted the humble, filled the hungry with good things.',
        },
        {
          kind: 'christ',
          id: 'luke1-christ-annunciation',
          title: 'Christ Connection — God Enters History',
          html:
            'The Annunciation is the moment when God becomes incarnate. The eternal Word becomes flesh. God enters history not through a display of power, but through the consent of a young woman. "Behold the handmaid of the Lord; be it unto me according to thy word." Jesus will not be announced to the whole world at once. He comes quietly, to a teenager, in a forgotten village, and her yes changes everything.',
        },
        {
          kind: 'carry',
          html:
            'Mary travels to Elisabeth&apos;s house, and when Elisabeth hears her greeting, the babe leaps in her womb. Elisabeth, filled with the Holy Ghost, cries out: "Blessed art thou among women, and blessed is the fruit of thy womb." The two pregnancies—John and Jesus—are intertwined from the beginning. We too are called to recognize the presence of God in others, to greet it with gladness.',
        },
        {
          kind: 'reflection',
          id: 'luke1-magnificat-reflect',
          prompt: 'What does it mean that God came to an ordinary young woman in an ordinary village? What does that say about where God enters the world?',
        },
      ],
    },

    {
      ref: 'Luke 1:57–80',
      title: 'Two Births, One Purpose',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(57, 'Now Elisabeth&apos;s full time came that she should be delivered; and she brought forth a son.'),
            plain(59, 'And it came to pass, that on the eighth day they came to circumcise the child; and they called him Zacharias, after the name of his father.'),
            plain(63, 'And he asked for a writing table, and wrote, saying, His name is John. And they marvelled all.'),
            plain(67, 'And his father Zacharias was filled with the Holy Ghost, and prophesied, saying,'),
            plain(68, 'Blessed be the Lord God of Israel; for he hath visited and redeemed his people,'),
            plain(76, 'And thou, child, shalt be called the prophet of the Highest: for thou shalt go before the face of the Lord to prepare his ways;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke1-john-birth',
          html:
            'John is born. The neighbors expect him to be named after his father. But Elisabeth speaks: "Not so; but he shall be called John." Zacharias, still unable to speak, writes on a tablet: "His name is John." At that moment, his mouth is opened. He begins to speak. The promise is fulfilled. And Zacharias becomes a prophet.',
        },
        {
          kind: 'commentary',
          id: 'luke1-benedictus',
          html:
            'Zacharias breaks into prophecy. "Blessed be the Lord God of Israel; for he hath visited and redeemed his people." He sees, in his son&apos;s birth, the larger redemption approaching. John will go before the face of the Lord to prepare His ways. John will give knowledge of salvation to His people. John will turn their feet into the way of peace. The old man who doubted speaks with the clarity of the Holy Spirit.',
        },
        {
          kind: 'greek',
          id: 'luke1-soteria',
          title: 'Soteria — Salvation',
          script: 'σωτηρία',
          translit: '<strong>Soteria</strong> · salvation; deliverance; preservation',
          description:
            'Salvation is not merely forgiveness of sins. It is the complete deliverance and restoration of a people. John will give knowledge of this salvation, showing the way to peace. Salvation enters through knowledge—through the light that John brings.',
        },
        {
          kind: 'christ',
          id: 'luke1-christ-two-births',
          title: 'Christ Connection — The Herald and the King',
          html:
            'John and Jesus are born six months apart, their births woven together by the hand of God. John comes to prepare; Jesus comes to redeem. John announces; Jesus accomplishes. The gospel of Luke presents both births as part of one unfolding purpose: the visitation and redemption of God&apos;s people.',
        },
        {
          kind: 'reflection',
          id: 'luke1-john-reflect',
          prompt: 'Who are the Johns in your life—those who point you toward Jesus? Whom do you serve by pointing others toward Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Hail, thou that art highly favoured; the Lord is with thee. Blessed art thou among women.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 1 · Study Guide',
  },

  hasHebrew: false,
};
