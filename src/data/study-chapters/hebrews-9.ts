import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 9 — The tabernacle was always a shadow pointing to Christ.
 *
 * The chapter opens with a detailed description of the tabernacle—the candlestick,
 * the table of shewbread, the holiest of holies. But it is not a museum tour.
 * The author is showing you a pattern. Verse by verse, he will show you how
 * Christ fulfills what the tabernacle only foreshadowed. The High Priest entered
 * the Holy of Holies once a year with the blood of animals. Christ entered heaven
 * once with His own blood. The old way was repeated endlessly—a sign that it
 * was never final. Christ's way was accomplished once—a sign that it is eternal.
 * Without shedding of blood there is no remission of sin. Christ shed His blood.
 * Your sin is remitted. The way into the holiest of all is now made manifest.
 */
export const HEBREWS_9: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 9,

  intros: [
    'Hebrews 9 walks you through the tabernacle piece by piece—the candlestick, the table with its shewbread, the altar of incense, the ark of the covenant with the mercy seat and the cherubim. For readers unfamiliar with Exodus, this is your guided tour. But for all readers, this is a lesson in shadows and substance. Every object in that sanctuary pointed to something in Christ. Every priestly action foreshadowed what He would do once and for all.',
    'The key is the contrast between repetition and completion. The old system repeated every year because it never finished anything. The High Priest had to come back. The offerings had to come again. The way into God&apos;s presence was never finally opened. But Christ came once. He offered Himself once. He entered heaven once. And it was done. Not &quot;to be continued.&quot; Not &quot;to be repeated.&quot; Finished. The old covenant made you a participant in an endless cycle. The new covenant makes you a participant in Christ&apos;s eternal rest.',
    'For a Christian reader, Hebrews 9 is a map of the cross and everything it secured. When you see the blood sprinkled on the mercy seat, you see Christ&apos;s blood. When you read that the way into the holiest was not open under the old covenant, you realize that Christ opened it. When you hear that without shedding of blood there is no remission, you know His blood remitted yours. The tabernacle was not a building. It was a prophecy. And Christ is its fulfillment.',
  ],

  sections: [
    /* ─── Hebrews 9:1 — The First Covenant Had Ordinances ─────────────────── */
    {
      ref: 'Hebrews 9:1',
      title: 'Ordinances of Divine Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(1,
              t('Then verily the first covenant had also '),
              hy('ordinances of divine service', 'dikaiomata-ordinances'),
              t(', and a '),
              hy('worldly sanctuary', 'kosmikos-worldly'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'dikaiomata-ordinances',
          title: 'Dikaiomata — &ldquo;ordinances&rdquo;',
          script: 'δικαιώματα',
          translit: '<strong>dikaiomata</strong> · righteous decrees; regulations of justice and worship',
          description:
            'These are not arbitrary rules. They are God&apos;s righteous ordinances—ways of worship and service that reflect His holiness. Every regulation was designed to teach something about God and to prepare the worshiper to meet Him.',
        },
        {
          kind: 'greek',
          id: 'kosmikos-worldly',
          title: 'Kosmikos — &ldquo;worldly&rdquo;',
          script: 'κοσμικός',
          translit: '<strong>kosmikos</strong> · belonging to this world; material; earthly',
          description:
            'The sanctuary was made with hands—physical materials, earthly construction. But the point is not that the physical is inferior. The point is that this earthly sanctuary is a copy of a heavenly reality. It is temporary, pointing to what is eternal.',
        },
        {
          kind: 'commentary',
          id: 'first-covenant-ordinances',
          html:
            'The first covenant had a complete system of worship. Ordinances—regulations for how the priests would serve, how the people would approach God, how sin would be dealt with. These ordinances were not random. They were a curriculum. Each one taught something about God&apos;s character and what sin costs.',
        },
        {
          kind: 'reflection',
          id: 'reflect-ordinances',
          prompt:
            'When you read the word "ordinance," what comes to mind? Does it sound like a burden or a gift? What changes when you see these ancient rules as a teacher preparing you to understand Christ?',
        },
      ],
    },

    /* ─── Hebrews 9:2–7 — The Tabernacle Described ───────────────────────── */
    {
      ref: 'Hebrews 9:2–3',
      title: 'The First Tabernacle—Candlestick, Table, Shewbread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(2,
              t('For there was a tabernacle made; the first, wherein was the '),
              hy('candlestick', 'menorah-lamp'),
              t(', and the '),
              hy('table', 'table-of-shewbread'),
              t(', and the '),
              hy('shewbread', 'lechem-panim'),
              t('; which is called the Sanctuary.'),
            ),
            verse(3,
              t('And after the second veil was the tabernacle which is called the '),
              hy('Holiest of all', 'ta-hagia-ton-hagion'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'menorah-lamp',
          title: 'Lukhnos — &ldquo;candlestick&rdquo;',
          script: 'λύχνος',
          translit: '<strong>lukhnos</strong> · a lamp; a light-bearer',
          description:
            'The seven-branched lampstand stood on the north side of the sanctuary, burning constantly. It was the only source of light in the holy place—no windows, no natural sun. The lamps had to burn for the priest to see his work.',
        },
        {
          kind: 'greek',
          id: 'table-of-shewbread',
          title: 'Trapeza — &ldquo;table&rdquo;',
          script: 'τράπεζα',
          translit: '<strong>trapeza</strong> · a table; a place of covenant meals',
          description:
            'The table held twelve loaves of bread—one for each tribe of Israel. It was called the table of the presence, the table where God and His people met in covenant fellowship. The bread was bread of God&apos;s presence, sustenance provided by His hand.',
        },
        {
          kind: 'greek',
          id: 'lechem-panim',
          title: 'Artoi Tēs Propostheseos — &ldquo;shewbread&rdquo;',
          script: 'ἄρτοι τῆς προθέσεως',
          translit: '<strong>artoi tēs propostheseos</strong> · bread of the setting forth; bread of the presence',
          description:
            'Twelve loaves, set out fresh every Sabbath, in the presence of God. The old loaves were eaten by the priests as a sign that God sustains His servants. The new loaves took their place—a cycle of provision that never stopped.',
        },
        {
          kind: 'greek',
          id: 'ta-hagia-ton-hagion',
          title: 'Ta Hagia Tōn Hagiōn — &ldquo;the Holiest of All&rdquo;',
          script: 'τὰ ἅγια τῶν ἁγίων',
          translit: '<strong>ta hagia tōn hagiōn</strong> · the holy place of the holy places; the holy of holies',
          description:
            'This is the inner sanctum—the most holy place in all of Israel. Only the High Priest could enter, and only once a year, on the Day of Atonement. It was not a place to visit casually. It was the dwelling place of God Himself.',
        },
        {
          kind: 'commentary',
          id: 'tabernacle-structure',
          html:
            'Picture the layout: You enter the outer court. Beyond that, the holy place—where the priest works. The lampstand on the north side gives light. The table on the south side holds bread. Straight ahead, the altar of incense. And beyond the veil, invisible from where you stand, the holy of holies. In that inner room, the ark of the covenant. Above the ark, the mercy seat. That is where God dwells. That is where His presence is concentrated. For the common Israelite, that inner room is unreachable. For the priest, it is reachable only once a year, and only by the High Priest, and only with blood.',
        },
        {
          kind: 'carry',
          html:
            'The structure of the tabernacle is teaching you something about the distance between earth and heaven, between human sin and God&apos;s holiness. You cannot just walk in. There are veils. There are barriers. Not because God does not want to be found, but because His holiness is real, and sin is real, and a way between them had to be made. The barriers were not arbitrary. They were a picture. And the picture was pointing to the One who would tear the veil.',
        },
      ],
    },

    /* ─── Hebrews 9:4–5 — The Ark and Its Furnishings ─────────────────────── */
    {
      ref: 'Hebrews 9:4–5',
      title: 'The Ark of the Covenant—Gold, Mercy Seat, Cherubim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(4,
              t('Which had the '),
              hy('golden censer', 'thumiaterion-censer'),
              t(', and the '),
              hy('ark of the covenant', 'kibotos-ark'),
              t(' overlaid round about with gold, wherein was the '),
              hy('golden pot that had manna', 'contents-of-ark'),
              t(', and '),
              hy('Aaron&apos;s rod that budded', 'contents-of-ark'),
              t(', and the '),
              hy('tables of the covenant', 'contents-of-ark'),
              t(';'),
            ),
            verse(5,
              t('And over it the '),
              hy('cherubims of glory', 'kerubim-glory'),
              t(' '),
              hp('shadowing the mercyseat', 'hilastērion-seat'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'thumiaterion-censer',
          title: 'Thumiaterion — &ldquo;golden censer&rdquo;',
          script: 'θυμιατήριον',
          translit: '<strong>thumiaterion</strong> · a censer; a vessel for burning incense',
          description:
            'The golden censer held burning incense—the prayers of the saints rising up. Incense is aromatic wood or resin that burns and produces a sweet-smelling smoke. When burned in the sanctuary, it symbolized prayers ascending to heaven. The High Priest would swing the censer in the holy place, and the smoke would rise toward the veil.',
        },
        {
          kind: 'greek',
          id: 'kibotos-ark',
          title: 'Kibōtos — &ldquo;ark of the covenant&rdquo;',
          script: 'κιβωτός',
          translit: '<strong>kibōtos</strong> · an ark; a box; a vessel',
          description:
            'The ark is a wooden chest, overlaid inside and out with pure gold. It is the most holy object in the sanctuary. It holds the testimony—the two stone tablets with the Ten Commandments written by the finger of God. Above it sits the mercy seat. The pattern is profound: the broken law beneath, mercy above, covering it.',
        },
        {
          kind: 'commentary',
          id: 'contents-of-ark',
          html:
            'Inside the ark are three things. The golden pot of manna—God&apos;s provision in the wilderness, the bread that fell from heaven. Aaron&apos;s rod that budded—a sign of God&apos;s power and authority, the choice of Aaron to be the priestly line. And the tables of the covenant—the law itself, written in God&apos;s own hand. All three are memories. Memories of God&apos;s faithfulness, of His choice, of His will. The ark is a treasure chest of covenant history.',
        },
        {
          kind: 'greek',
          id: 'kerubim-glory',
          title: 'Kerubim Doxēs — &ldquo;cherubims of glory&rdquo;',
          script: 'χερουβὶμ δόξης',
          translit: '<strong>kerubim doxēs</strong> · mighty angelic beings of glory; guardians of the throne of God',
          description:
            'Two cherubim, made of gold, with their faces turned inward toward the mercy seat. They are not terrifying here. They are attending. They watch over the place of atonement with reverence. They are the throne-guards, standing watch over the mercy seat where God dwells.',
        },
        {
          kind: 'greek',
          id: 'hilastērion-seat',
          title: 'Hilastērion — &ldquo;mercy seat&rdquo;',
          script: 'ἱλαστήριον',
          translit: '<strong>hilastērion</strong> · mercy seat; the seat of atonement and propitiation',
          description:
            'This is not a throne of judgment. The word itself means "to make atonement, to cover." The mercy seat is the place where God and sinful people meet. It is made of gold—pure, imperishable. On the Day of Atonement, the High Priest sprinkles the blood of the sacrifice on it. That blood covers the breaking of the law beneath. That is mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-mercy-seat',
          title: 'Christ Connection — Jesus, the True Mercy Seat',
          html:
            'Paul writes: &ldquo;Whom God hath set forth to be a propitiation through faith in his blood&rdquo; (Rom. 3:25). The word is <em>hilastērion</em>—mercy seat. Jesus is the mercy seat made flesh. He is the place where God meets sinners. He is the blood that covers the breaking of the law. When you approach God through Christ, you are approaching the mercy seat. The law is not ignored. It is satisfied. The blood covers it. You are welcome.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that loves to shame you. Your failures, your weaknesses, your past—they are brought up again and again. But the mercy seat teaches you something different. Above the law, above your breaking of it, is mercy. And that mercy is not abstract. It has a seat. It has a place. It has a name—Jesus. When you come to Him, you come to the place where the law does not condemn you. The blood covers it.',
        },
        {
          kind: 'reflection',
          id: 'reflect-mercy-seat',
          prompt:
            'What law have you broken that still echoes in your mind? How does the image of blood covering it—not erasing it, but covering it with mercy—speak to you?',
        },
        {
          kind: 'artwork',
          matchTitle: /ark.*covenant|mercy.*seat|cherub/i,
          caption: 'Hebrews 9:4–5 · The Ark of the Covenant',
        },
      ],
    },

    /* ─── Hebrews 9:6–7 — The Priests and the High Priest ──────────────────── */
    {
      ref: 'Hebrews 9:6–7',
      title: 'The High Priest Alone, Once Every Year, Not Without Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(6,
              t('Now when these things were thus ordained, the priests '),
              hg('went always into the first tabernacle', 'leiturgia-priests'),
              t(', accomplishing the '),
              hg('services of God', 'leiturgia-priests'),
              t('.'),
            ),
            verse(7,
              t('But into the second went the high priest '),
              hy('alone', 'monos-alone'),
              t(' '),
              hy('once every year', 'hapax-per-etos'),
              t(', '),
              hp('not without blood', 'ou-choris-aimatos'),
              t(', which he offered for himself, and for the '),
              hy('errors of the people', 'agnoema-errors'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'leiturgia-priests',
          title: 'Leitourgia — &ldquo;services of God&rdquo;',
          script: 'λειτουργία',
          translit: '<strong>leitourgia</strong> · sacred service; priestly ministry; liturgy',
          description:
            'The word comes from "public service"—work performed for the community. The priests&apos; service is not a private devotion. It is corporate worship. Every day, the priests enter the outer sanctum to tend the lamps, replace the bread, offer incense. The work is endless. It must be done again and again.',
        },
        {
          kind: 'greek',
          id: 'monos-alone',
          title: 'Monos — &ldquo;alone&rdquo;',
          script: 'μόνος',
          translit: '<strong>monos</strong> · sole; only; without others; exclusively',
          description:
            'Only the High Priest could enter the holy of holies. Not the common priest, not the king, not the whole nation. One man. One time. One entrance into the innermost presence of God. And that one man had to be ritually clean, had to enter only at the appointed time, and had to bring blood.',
        },
        {
          kind: 'greek',
          id: 'hapax-per-etos',
          title: 'Hapax Per Etos — &ldquo;once every year&rdquo;',
          script: 'ἅπαξ περ ἐνιαυτόν',
          translit: '<strong>hapax per etos</strong> · once in the year; once annually; only one time per year',
          description:
            'Not daily. Not monthly. Once. In the whole year, the High Priest entered the holy of holies one time. On the Day of Atonement. That is how restricted access was. That is how holy the place was. And that one entrance had to cover the sins of the whole nation for the whole year.',
        },
        {
          kind: 'greek',
          id: 'ou-choris-aimatos',
          title: 'Ou Choris Aimatos — &ldquo;not without blood&rdquo;',
          script: 'οὐ χωρὶς αἵματος',
          translit: '<strong>ou choris aimatos</strong> · not separately from blood; never apart from blood; blood is required',
          description:
            'He could not enter empty-handed. He could not enter with good intentions. He could not enter because he was good or holy. He had to enter with blood—the blood of a sacrificed animal. Blood was the price of access. Blood was the covering for sin. Without it, entrance was impossible.',
        },
        {
          kind: 'greek',
          id: 'agnoema-errors',
          title: 'Agnoema — &ldquo;errors of the people&rdquo;',
          script: 'ἀγνόημα',
          translit: '<strong>agnoema</strong> · errors; unknowing sins; ignorance; mistakes',
          description:
            'Not just deliberate sins. Not just willful rebellion. The High Priest offered for <em>agnoema</em>—the sins people committed without even knowing, the mistakes, the oversights, the times they fell short without even realizing it. Mercy covers more than the sin you are aware of.',
        },
        {
          kind: 'commentary',
          id: 'repetition-system',
          html:
            'Notice the rhythm. Once a year. Every year. Once a year, every year, forever. The system is designed to repeat. The High Priest goes in. He sprinkles the blood. He comes out. And the whole nation waits. One year passes. And he has to do it again. Again, and again, and again. The old system never finishes anything. It begins the same cycle all over. It is a picture of incompleteness. A sign that something better was coming.',
        },
        {
          kind: 'carry',
          html:
            'Imagine living in a system where access to God happens once a year. Imagine needing to wait 365 days for the chance to know your sins are forgiven. Imagine depending on one man, one day, one ceremony. That was Israel&apos;s life. That was the old way. But Christ came. And He did not wait for a Day of Atonement. He became the Day of Atonement. His blood was shed once. His entrance into heaven was once. And it covers you now, today, not next year.',
        },
        {
          kind: 'reflection',
          id: 'reflect-once-yearly',
          prompt:
            'What would change about your faith if you had to wait a whole year to know your sins were forgiven? How does the fact that Christ&apos;s work is "once and for all" change how you approach God today?',
        },
      ],
    },

    /* ─── Hebrews 9:8–10 — The Way Was Not Yet Made Manifest ───────────────── */
    {
      ref: 'Hebrews 9:8–10',
      title: 'The Way Into the Holiest Was Not Yet Made Manifest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(8,
              t('The Holy Ghost this signifying, that '),
              hp('the way into the holiest of all was not yet made manifest', 'hodos-opened'),
              t(', while as the first tabernacle was yet standing:'),
            ),
            verse(9,
              t('Which was a figure for the time then present, in which were offered both gifts and sacrifices, that could not make him that did the service perfect, as pertaining to the conscience;'),
            ),
            verse(10,
              t('Which stood only in '),
              hg('meats and drinks', 'brosis-eating'),
              t(', and divers '),
              hg('washings', 'baptismos-washing'),
              t(', and carnal ordinances, imposed on them until the time of reformation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'holy-ghost-signifying',
          html:
            'The Holy Spirit designed the tabernacle system. Every detail was intentional. And what was it signifying? That the way was not open. That access was restricted. That something was still missing. The tabernacle itself was a prophecy written in gold and blood. It was saying: This is as far as you can go. Beyond this veil, God dwells. But you cannot enter. Not yet. Someone else will have to make the way.',
        },
        {
          kind: 'greek',
          id: 'hodos-opened',
          title: 'Hodos — &ldquo;way&rdquo;',
          script: 'ὁδός',
          translit: '<strong>hodos</strong> · a way; a road; a path of access',
          description:
            'The way into God&apos;s presence. Not just a path—a way of approach, a manner of entry, a means of access. As long as the tabernacle stood, that way was blocked. The veil hung. The barrier remained. Access was impossible for ordinary people. And even for the High Priest, it was impossible without blood.',
        },
        {
          kind: 'commentary',
          id: 'figure-for-the-time',
          html:
            'The tabernacle was a <em>figure</em> for that time—a model, a representation, a shadow. It was not the reality. It was a picture of reality. And the picture was saying: The reality is better. The reality is open. The reality involves direct access, not barriers. The reality is Christ.',
        },
        {
          kind: 'greek',
          id: 'brosis-eating',
          title: 'Brōsis — &ldquo;meats&rdquo;',
          script: 'βρῶσις',
          translit: '<strong>brōsis</strong> · eating; meat; food; that which is eaten',
          description:
            'The old system regulated what you could eat. Clean animals and unclean. On certain days, certain foods. The regulations were about distinctions, about boundaries, about what separated the clean from the common. But they could never touch the conscience. You could follow the rules and still feel guilty.',
        },
        {
          kind: 'greek',
          id: 'baptismos-washing',
          title: 'Baptismos — &ldquo;washings&rdquo;',
          script: 'βαπτισμός',
          translit: '<strong>baptismos</strong> · washings; ablutions; ritual purifications',
          description:
            'Constant washing. The priests had to wash before entering the sanctuary. The people had to wash before certain acts. Purification rituals, again and again. But water cannot cleanse guilt. Only blood can. The washings were pointing to the need for something water could not provide.',
        },
        {
          kind: 'commentary',
          id: 'carnal-ordinances',
          html:
            'The old system was <em>carnal</em>—fleshly, bodily, external. Rules about what you eat, how many times you wash, which garments you wear. They operated on the body, not the conscience. They could regulate behavior but not transform the heart. And that is the point. The old way was designed to make you aware that you needed something deeper, something that could address the guilt inside, not just the externals.',
        },
        {
          kind: 'carry',
          html:
            'You know what it is to follow external rules while feeling guilty inside. To manage your behavior while your conscience is troubled. To do all the right things on the outside while feeling wrong on the inside. That was the old system. It was never meant to fix the problem permanently. It was meant to be a sign pointing to the One who would. Christ does not just regulate your behavior. He transforms your conscience. He does not just make you look clean. He makes you clean.',
        },
        {
          kind: 'reflection',
          id: 'reflect-conscience',
          prompt:
            'What external rules or rituals are you still clinging to in an attempt to ease your conscience? How would you live differently if you believed that Christ has truly cleansed you from the inside out?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Hebrews 9:11–14 — Christ as High Priest of Better Things to Come ───── */
    {
      ref: 'Hebrews 9:11–12',
      title: 'Christ Being Come an High Priest of Good Things to Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(11,
              t('But '),
              hp('Christ being come an high priest of good things to come', 'christ-high-priest'),
              t(', by a '),
              hy('greater and more perfect tabernacle', 'megale-teleia-tabernacle'),
              t(', '),
              hy('not made with hands', 'oikodomētos-handmade'),
              t(', that is to say, not of this building;'),
            ),
            verse(12,
              t('Neither by the blood of goats and calves, but by '),
              hp('his own blood', 'idios-aima-blood'),
              t(' he entered in '),
              hy('once', 'hapax-once'),
              t(' into the '),
              hy('holy place', 'ta-hagia-sanctuary'),
              t(', having obtained '),
              hp('eternal redemption', 'aiōnios-lytrōsis-eternal'),
              t(' for us.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'christ-high-priest',
          title: 'Christos Archiereūs — &ldquo;Christ High Priest&rdquo;',
          script: 'Χριστὸς ἀρχιερεύς',
          translit: '<strong>christos archiereūs</strong> · Christ the high priest; the ultimate priest',
          description:
            'He is not just a priest like others. He is the High Priest. The one who enters the most holy place. The one whose sacrifice is accepted. And He does not belong to the line of Aaron. He belongs to the order of Melchizedek—an order that came before Aaron, an order that is eternal.',
        },
        {
          kind: 'greek',
          id: 'megale-teleia-tabernacle',
          title: 'Megálē Kaì Teleíā Skēnē — &ldquo;greater and more perfect tabernacle&rdquo;',
          script: 'μεγάλη καὶ τελεία σκηνή',
          translit: '<strong>megálē kaì teleíā skēnē</strong> · a greater and more perfect tent; the true sanctuary',
          description:
            'The earthly tabernacle was a <em>copy</em>. Christ is the <em>original</em>. The earthly one was made of acacia wood and gold leaf. The real one is Christ Himself. He is the true sanctuary, the place where God dwells.',
        },
        {
          kind: 'greek',
          id: 'oikodomētos-handmade',
          title: 'Ou Cheirŏpoiētos — &ldquo;not made with hands&rdquo;',
          script: 'οὐ χειροποίητος',
          translit: '<strong>ou cheirŏpoiētos</strong> · not made by hand; not constructed; eternal and uncreated',
          description:
            'Nothing that is made with hands can last forever. Nothing built by human effort can be perfect. But Christ is eternal. He was not made. He is the Maker. His priesthood does not depend on human construction. It depends on who He is.',
        },
        {
          kind: 'greek',
          id: 'idios-aima-blood',
          title: 'Idios Aima — &ldquo;his own blood&rdquo;',
          script: 'ἴδιος αἷμα',
          translit: '<strong>idios aima</strong> · his own blood; not that of another; the blood of the High Priest himself',
          description:
            'The old High Priest brought the blood of goats and calves—animals. Their blood. Not his own. He was the intermediary. But Christ is both High Priest and sacrifice. He does not bring another&apos;s blood. He offers His own. He holds nothing back.',
        },
        {
          kind: 'greek',
          id: 'hapax-once',
          title: 'Hapax — &ldquo;once&rdquo;',
          script: 'ἅπαξ',
          translit: '<strong>hapax</strong> · once; one time; once and for all; never to be repeated',
          description:
            'This is the key word of Hebrews 9. Not yearly. Not repeatedly. Once. One sacrifice. One offering. One entrance. And it is eternal in its effect. It does not expire. It does not need renewal. Once, and it is finished.',
        },
        {
          kind: 'greek',
          id: 'ta-hagia-sanctuary',
          title: 'Ta Hagia — &ldquo;the holy place&rdquo;',
          script: 'τὰ ἅγια',
          translit: '<strong>ta hagia</strong> · the holy places; the sanctuaries; heaven itself',
          description:
            'He entered heaven—the true holy place. Not the earthly copy. Not the tabernacle. But the reality that the tabernacle was foreshadowing. He stood in the presence of God the Father and offered His blood.',
        },
        {
          kind: 'greek',
          id: 'aiōnios-lytrōsis-eternal',
          title: 'Aiōnios Lytrōsis — &ldquo;eternal redemption&rdquo;',
          script: 'αἰώνιος λύτρωσις',
          translit: '<strong>aiōnios lytrōsis</strong> · eternal redemption; forever-lasting ransom; redemption that does not expire',
          description:
            'His sacrifice did not redeem you for a year. Or a lifetime. For eternity. You are redeemed forever. The price He paid covers all your sin—past, present, future. Nothing can undo it. Nothing can add to the charge against you. You are eternally redeemed.',
        },
        {
          kind: 'christ',
          id: 'christ-entered-heaven',
          title: 'Christ Connection — Entered Once, Appeared for Us',
          html:
            'Christ did what the High Priest could only do once a year. He entered the true sanctuary—heaven itself. He stood before the Father. And He did not do it with borrowed blood. He offered Himself. In one moment, in one offering, He obtained eternal redemption for everyone who believes. The work is complete. Your redemption is secure.',
        },
        {
          kind: 'carry',
          html:
            'You do not need an intermediary now. You do not need to wait once a year. You do not need to wonder if your sins are covered. Christ entered once. His blood was shed once. Your redemption is obtained. It is eternal. The way into God&apos;s presence is now open to you—not through a priest, not through ritual, not through good behavior. Through the blood of Christ, shed once, eternally effective.',
        },
        {
          kind: 'reflection',
          id: 'reflect-eternal-redemption',
          prompt:
            'What does it mean to you that your redemption is eternal? How would your daily life change if you truly believed that your sins—all of them, forever—are already covered?',
        },
      ],
    },

    /* ─── Hebrews 9:13–14 — How Much More Shall the Blood of Christ ──────────── */
    {
      ref: 'Hebrews 9:13–14',
      title: 'How Much More Shall the Blood of Christ Purge Your Conscience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(13,
              t('For if the blood of bulls and of goats, and the ashes of an heifer sprinkling the unclean, '),
              hg('sanctifieth to the purifying of the flesh', 'hagiazō-flesh'),
              t(':'),
            ),
            verse(14,
              t('How much more shall the blood of Christ, who through the '),
              hy('eternal Spirit', 'aiōnios-pneuma'),
              t(' offered himself without spot to God, '),
              hp('purge your conscience', 'katharizō-syneidesis'),
              t(' from dead works to serve the living God?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bulls-goats-ashes',
          html:
            'The old system used animal blood. Bulls, goats, and the ashes of a heifer. These were real sacrifices, costly sacrifices. But they could only purify the flesh—the external, the physical. They could not touch the conscience. You could be externally clean and still feel guilty. The system acknowledged the need but could not meet it.',
        },
        {
          kind: 'greek',
          id: 'hagiazō-flesh',
          title: 'Hagiazo — &ldquo;sanctifieth&rdquo;',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazo</strong> · to make holy; to set apart; to sanctify',
          description:
            'The blood sanctified—it set people apart as clean, fit to participate in worship. But it was only surface-level. Only the flesh. The conscience—the deep internal sense of guilt or innocence—remained untouched by animal blood.',
        },
        {
          kind: 'greek',
          id: 'aiōnios-pneuma',
          title: 'Aiōnios Pneuma — &ldquo;eternal Spirit&rdquo;',
          script: 'αἰώνιος πνεῦμα',
          translit: '<strong>aiōnios pneuma</strong> · eternal Spirit; the immortal Spirit; the Holy Spirit who is everlasting',
          description:
            'Christ offered Himself not by human effort, not by human blood, but <em>through the eternal Spirit</em>. The Spirit who was present at creation, who will be present forever, who is beyond time. Christ&apos;s sacrifice was offered in the power of eternal reality.',
        },
        {
          kind: 'greek',
          id: 'katharizō-syneidesis',
          title: 'Katharizō Syneidēsin — &ldquo;purge your conscience&rdquo;',
          script: 'καθαρίζω συνείδησις',
          translit: '<strong>katharizō syneidēsin</strong> · to cleanse conscience; to purify the inner witness; to remove guilt from your innermost knowledge',
          description:
            'Not just external washing. Not just ritual cleansing. <em>Your conscience</em>. The part of you that knows right from wrong, that feels guilt, that witnesses against you or for you. Christ&apos;s blood purges that. It does not suppress guilt. It removes the grounds for it.',
        },
        {
          kind: 'commentary',
          id: 'dead-works',
          html:
            'Dead works—works done without life, without faith, without the Spirit. Works done to earn something, to pay something, to prove something. Works that are spiritually dead because they are born from fear or pride, not from faith. When your conscience is purged, you are free from the need to do dead works. You can serve God from faith, not fear.',
        },
        {
          kind: 'carry',
          html:
            'You have probably spent hours, days, perhaps years doing dead works. Trying to prove yourself. Trying to earn forgiveness. Trying to be good enough. Trying to balance the scales. Your conscience has been hammering at you: "Not yet. Not good enough. Do more. Try harder." But Christ&apos;s blood purges that. It cleanses the accuser inside you. It says: You are clean. You are free. You can stop. You can rest. You can serve God out of love now, not out of fear.',
        },
        {
          kind: 'reflection',
          id: 'reflect-conscience-purged',
          prompt:
            'What dead works are you still doing? What would it feel like to have your conscience truly purged of guilt? What would you do if you were not trying to earn God&apos;s forgiveness?',
        },
      ],
    },

    /* ─── Hebrews 9:15 — Mediator of the New Testament ──────────────────────── */
    {
      ref: 'Hebrews 9:15',
      title: 'Mediator of the New Testament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(15,
              t('And for this cause he is the '),
              hy('mediator of the new testament', 'mesitēs-diatheke'),
              t(', that by means of death, for the redemption of transgressions that were under the first testament, they which are called might receive the promise of eternal inheritance.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mesitēs-diatheke',
          title: 'Mesitēs Diathekēs — &ldquo;mediator of the new testament&rdquo;',
          script: 'μεσίτης διαθήκης',
          translit: '<strong>mesitēs diathekēs</strong> · mediator of the covenant; the one who stands between two parties to bring them together',
          description:
            'A mediator stands between two parties. Christ stands between you and God. He is the bridge. He speaks for you. He represents you before the Father. And He does this as the mediator of a new covenant—not the old one with its endless repetition, but a new one, sealed by His own blood, valid forever.',
        },
        {
          kind: 'commentary',
          id: 'death-redemption',
          html:
            'His death redeems the transgressions under the first covenant. The believers who lived before Christ—Abraham, Moses, David, the prophets—their sins could not be taken away by animal blood alone. But Christ&apos;s blood reaches backward in time. It covers the sins of the old covenant. It makes the old covenant saints righteous. They looked forward to Him. He looked backward to them. His one sacrifice covers them all.',
        },
        {
          kind: 'christ',
          id: 'christ-mediator-new-covenant',
          title: 'Christ Connection — The New Covenant Sealed in Blood',
          html:
            'At the Last Supper, Jesus took the cup and said, &ldquo;This is my blood of the new testament, which is shed for many for the remission of sins&rdquo; (Matt. 26:28). A covenant requires blood. The old covenant was sealed with the blood of animals at Mount Sinai. The new covenant is sealed with the blood of Christ. And in the power of that new covenant, all your transgressions are redeemed—past, present, and future. You inherit the promise. You inherit eternal life.',
        },
        {
          kind: 'carry',
          html:
            'You are not under a contract anymore. You are under a covenant. Not something you have to maintain by good behavior. Something Christ maintains by His blood. He is the mediator. He stands for you. He speaks for you. And because He does, you receive the promise—not that you might earn it someday, but that you have it now. You are an heir. You inherit.',
        },
        {
          kind: 'reflection',
          id: 'reflect-mediator',
          prompt:
            'How does it change things to know that Christ is actively mediating for you right now? That He stands between you and God, speaking on your behalf?',
        },
      ],
    },

    /* ─── Hebrews 9:16–22 — Where a Testament Is, There Must Be Death ────────── */
    {
      ref: 'Hebrews 9:16–17',
      title: 'Where a Testament Is, There Must Be Death of the Testator',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(16,
              t('For where a testament is, there must also of necessity be the death of the '),
              hy('testator', 'diathemenon-testator'),
              t('.'),
            ),
            verse(17,
              t('For a testament is of force after men are dead: otherwise it is of no strength at all while the testator liveth.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'diathemenon-testator',
          title: 'Diathemenon — &ldquo;testator&rdquo;',
          script: 'διατιθέμενος',
          translit: '<strong>diathemenon</strong> · one who makes a covenant; the testator; the one who wills something to others',
          description:
            'A testator is the one who writes a will. And a will only becomes effective upon the testator&apos;s death. Until then, it is not binding. But once the testator dies, the will is sealed. What is written is fixed. It cannot be changed.',
        },
        {
          kind: 'commentary',
          id: 'testament-and-death',
          html:
            'The author is making a wordplay on <em>diatheke</em>—which means both covenant and testament (or will). In Greek law, a will requires the death of the one who writes it. But Christ&apos;s covenant requires His death in a redemptive sense—His death is what seals the covenant, what makes it effective, what gives it power. He died, and His will—His covenant promise to give you eternal inheritance—became irrevocable.',
        },
        {
          kind: 'carry',
          html:
            'A covenant made while the testator is alive can be changed, revoked, or nullified. But a covenant sealed by death is fixed forever. Christ died. The covenant is sealed. Your inheritance is secured. Nothing and no one can revoke it. God has written your name into His will. And the Testator is dead, so the will is binding.',
        },
        {
          kind: 'reflection',
          id: 'reflect-testament-death',
          prompt:
            'What does it mean to you that Christ&apos;s death sealed a covenant for you? That your inheritance is not conditional or temporary, but fixed and eternal?',
        },
      ],
    },

    /* ─── Hebrews 9:18–22 — Without Shedding of Blood Is No Remission ────────── */
    {
      ref: 'Hebrews 9:18–22',
      title: 'Without Shedding of Blood Is No Remission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(18,
              t('Whereupon neither the first testament was dedicated without blood.'),
            ),
            verse(19,
              t('For when Moses had spoken every precept to all the people according to the law, he took the blood of calves and of goats, with water, and scarlet wool, and hyssop, and sprinkled both the book, and all the people,'),
            ),
            verse(20,
              t('Saying, This is the blood of the testament which God hath enjoined unto you.'),
            ),
            verse(21,
              t('Moreover he sprinkled with blood both the tabernacle, and all the vessels of the ministry.'),
            ),
            verse(22,
              t('And almost all things are by the law purged with blood; and '),
              hp('without shedding of blood is no remission', 'aparesis-remission'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'first-testament-blood',
          html:
            'When Moses sealed the first covenant at Mount Sinai, he took blood—the blood of animals—and sprinkled it on the people and on the book of the law. He said, "This is the blood of the covenant." Blood sealed the deal. Blood made the covenant binding. Blood was the price of entry into a relationship with God.',
        },
        {
          kind: 'greek',
          id: 'aparesis-remission',
          title: 'Aparesis — &ldquo;remission&rdquo;',
          script: 'ἄφεσις',
          translit: '<strong>aparesis</strong> · remission; forgiveness; cancellation; letting go',
          description:
            'Remission is not pretending the sin did not happen. It is the release of the debt. The letting go of the charge. The cancellation of the penalty. And in the Old Testament economy, remission required blood. There was no getting around it. No other currency could pay the price.',
        },
        {
          kind: 'commentary',
          id: 'scarlet-hyssop',
          html:
            'Moses used scarlet wool and hyssop—the same materials that would be used in the purification ritual for leprosy. Scarlet, the color of blood. Hyssop, a plant used to apply blood or medicine. Everything was pointing to blood. Everything was saying: Blood is the price. Blood is the purifier. Blood is the way.',
        },
        {
          kind: 'christ',
          id: 'christ-one-blood',
          title: 'Christ Connection — Eternal Remission Through One Blood',
          html:
            'The old system spilled the blood of countless animals across centuries. Goats and bulls and heifers, again and again, every year, forever. But those sacrifices could never take away sin permanently. They could never grant full remission. They only postponed the problem. But Christ shed His blood once. And that one shedding obtained eternal remission. His blood does what animal blood could never do. It covers not just the flesh, but the conscience. It does not just defer judgment. It removes it. Permanently.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that tries to offer you remission without blood. Therapy without cost. Forgiveness without restitution. Understanding without consequence. But the Bible says something different. Remission requires blood. And the only blood that can remit is the blood of the sinless. Christ shed that blood. Your remission is bought. You are free.',
        },
        {
          kind: 'reflection',
          id: 'reflect-no-remission',
          prompt:
            'What does it cost to remit sin? Why does the Bible insist that blood is required? How does Christ&apos;s blood change that requirement for you?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Hebrews 9:23–24 — Christ Entered Heaven Itself ──────────────────────── */
    {
      ref: 'Hebrews 9:23–24',
      title: 'Christ Entered Heaven Itself, Now to Appear in the Presence of God for Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(23,
              t('It was therefore necessary that the patterns of things in the heavens should be purified with these; but the heavenly things themselves with better sacrifices than these.'),
            ),
            verse(24,
              t('For '),
              hp('Christ is not entered into the holy places made with hands', 'ouk-cheirŏpoiētos-hagia'),
              t(', which are the figures of the true; but into '),
              hp('heaven itself', 'autos-ouranos'),
              t(', now to '),
              hp('appear in the presence of God for us', 'prosōpon-theos-hmin'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'patterns-heavenly',
          html:
            'The earthly tabernacle was a pattern of heavenly reality. It had to be purified with animal blood because it was a copy. But the heavenly things themselves—the real sanctuary, the true dwelling place of God—required better sacrifice. Not goats. Not calves. But Christ.',
        },
        {
          kind: 'greek',
          id: 'ouk-cheirŏpoiētos-hagia',
          title: 'Ou Cheirŏpoiētos Hagia — &ldquo;holy places made with hands&rdquo;',
          script: 'οὐ χειροποίητος ἅγια',
          translit: '<strong>ou cheirŏpoiētos hagia</strong> · not hand-made holy places; not constructed sanctuaries',
          description:
            'The tabernacle was hand-made. Built by Bezalel and the craftsmen of Israel. Impressive, yes. Holy, yes. But made with human hands, therefore temporary. Dependent on materials. Subject to decay. The true sanctuary—heaven—is not made with hands. It is eternal.',
        },
        {
          kind: 'greek',
          id: 'autos-ouranos',
          title: 'Autos Ouranos — &ldquo;heaven itself&rdquo;',
          script: 'αὐτὸς ὁ οὐράνιος',
          translit: '<strong>autos ouranos</strong> · heaven itself; the very heavens; the real thing, not a copy',
          description:
            'Not a representation. Not a model. <em>Heaven itself</em>. The throne room of God. The place where God dwells. The reality that the tabernacle was foreshadowing. Christ entered there. He stood in the presence of the Father.',
        },
        {
          kind: 'greek',
          id: 'prosōpon-theos-hmin',
          title: 'Prosōpon Theou Humin — &ldquo;appear in the presence of God for us&rdquo;',
          script: 'πρόσωπον τοῦ θεοῦ ὑπὲρ ἡμῶν',
          translit: '<strong>prosōpon theou humin</strong> · in the presence of God on our behalf; in God&apos;s face as our representative',
          description:
            'He does not appear for Himself. He appears <em>for you</em>. As your mediator. As your advocate. Standing in your place, representing you before the Father, interceding for you. He is at the right hand of God this very moment, appearing for you.',
        },
        {
          kind: 'christ',
          id: 'christ-now-appears',
          title: 'Christ Connection — Constant Intercession',
          html:
            'Christ is not dead. He is risen. He is sitting at the right hand of the Father. And He is <em>now</em> appearing in the presence of God for you. Not praying that God will love you—God loves you. Not praying that you might be forgiven—you are forgiven. But interceding on your behalf, representing you, maintaining your case before the Father. He is your lawyer in heaven. And He never loses.',
        },
        {
          kind: 'carry',
          html:
            'You do not face God alone. You face Him with your Advocate at your side. Christ stands in your place, speaking for you, representing you. He has already gone where you cannot go. He has already done what you cannot do. And He is there, right now, appearing for you. That is not a metaphor. That is happening.',
        },
        {
          kind: 'reflection',
          id: 'reflect-appear-for-us',
          prompt:
            'How does it change things to know that Christ is right now, at this very moment, appearing in the presence of God on your behalf? What would you do differently if you truly believed that?',
        },
      ],
    },

    /* ─── Hebrews 9:25–26 — Offered Once in the End of the World ────────────── */
    {
      ref: 'Hebrews 9:25–26',
      title: 'Once Offered to Put Away Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(25,
              t('Nor yet that he should offer himself often, as the high priest entereth into the holy place every year with blood of others;'),
            ),
            verse(26,
              t('For then must he often have suffered since the foundation of the world: but now '),
              hy('once', 'hapax-sunteleia'),
              t(' in the '),
              hy('end of the world', 'sunteleia-ages'),
              t(' hath he '),
              hp('appeared to put away sin', 'atheteō-sin'),
              t(' by the sacrifice of himself.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'hapax-sunteleia',
          title: 'Hapax—&ldquo;once&rdquo;',
          script: 'ἅπαξ',
          translit: '<strong>hapax</strong> · once; one single time; never to be repeated',
          description:
            'The most important word in Hebrews 9. Not repeatedly. Not seasonally. Not every year or every generation. Once. The sacrifice of Christ is singular, unrepeatable, sufficient for all time.',
        },
        {
          kind: 'greek',
          id: 'sunteleia-ages',
          title: 'Sunteleia Tōn Aiōnōn — &ldquo;end of the world&rdquo;',
          script: 'συντέλεια τῶν αἰώνων',
          translit: '<strong>sunteleia tōn aiōnōn</strong> · the consummation of the ages; the fulfillment of all history',
          description:
            'Not just the end of time, but the moment when all of history reaches its purpose. When God&apos;s plan moves from preparation to fulfillment. When the old covenant gives way to the new. When the shadow yields to the reality. That moment came when Christ was crucified and rose again.',
        },
        {
          kind: 'greek',
          id: 'atheteō-sin',
          title: 'Atheteō — &ldquo;put away sin&rdquo;',
          script: 'ἀθετέω',
          translit: '<strong>atheteō</strong> · to set aside; to abolish; to annul; to do away with',
          description:
            'Not to cover or postpone, but to eliminate. To annul. To render no longer binding. Christ did not just cover sin. He put it away. He abolished it. For all who believe.',
        },
        {
          kind: 'commentary',
          id: 'not-repeat-suffering',
          html:
            'The logic is simple: If Christ had to suffer repeatedly, He would have to exist throughout history, suffering again and again. But He appeared once, at one moment in history, and that one appearance was enough. One death. One resurrection. One sacrifice. Sufficient for all time, all people, all sin.',
        },
        {
          kind: 'christ',
          id: 'christ-final-offering',
          title: 'Christ Connection — The Sufficient Sacrifice',
          html:
            'In Hebrews 10:10, the author writes, &ldquo;By the which will we are sanctified through the offering of the body of Jesus Christ once for all.&rdquo; That word—<em>once for all</em>—means you do not need to keep offering. You do not need to keep waiting. You do not need to keep hoping. It is done. Your sin is put away. Your conscience is purged. Your redemption is eternal.',
        },
        {
          kind: 'carry',
          html:
            'Some of you have spent years waiting for God to forgive you. Doing penance. Doing good works. Waiting for the next big spiritual experience. Waiting for the day you feel clean enough. Stop waiting. He appeared once. He put away sin. Your sin. His one sacrifice is enough.',
        },
        {
          kind: 'reflection',
          id: 'reflect-once-for-all',
          prompt:
            'What are you still waiting for God to forgive? What would change if you truly believed that He already has—once, finally, forever?',
        },
      ],
    },

    /* ─── Hebrews 9:27–28 — Appointed Once to Die, Appear the Second Time ───── */
    {
      ref: 'Hebrews 9:27–28',
      title: 'Shall Appear the Second Time Without Sin Unto Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(27,
              t('And as it is appointed unto men once to die, but after this the judgment:'),
            ),
            verse(28,
              t('So '),
              hp('Christ was once offered to bear the sins of many', 'apax-pherō-hamartias'),
              t('; and unto them that '),
              hp('look for him shall he appear', 'apekdechomenoi-phaino'),
              t(' the second time '),
              hy('without sin', 'choris-hamartias'),
              t(' unto '),
              hy('salvation', 'sōtēria-redemption'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'appointed-once-die',
          html:
            'Every human is appointed to die once. Death is universal. And after death comes judgment—God&apos;s assessment, God&apos;s reckoning. That is the pattern. You die. Then you face God. There is no second chance to live differently. No opportunity to clean up your life. One life, one death, one judgment. That is the weight of human existence.',
        },
        {
          kind: 'greek',
          id: 'apax-pherō-hamartias',
          title: 'Apax Pherō Hamartias — &ldquo;once offered to bear the sins&rdquo;',
          script: 'ἅπαξ ἐνεγκεῖν ἁμαρτίας',
          translit: '<strong>apax pherō hamartias</strong> · once offered to carry away sins; once presented to bear the weight of sin',
          description:
            'He did not just cover sin. He <em>bore</em> it. He carried it. He took it on Himself. The weight of human sin—all of it—He bore it once. And by bearing it, He removed it.',
        },
        {
          kind: 'greek',
          id: 'apekdechomenoi-phaino',
          title: 'Apekdechomenoi Phanēsetai — &ldquo;look for him shall he appear&rdquo;',
          script: 'ἀπεκδεχόμενοι φανήσεται',
          translit: '<strong>apekdechomenoi phanēsetai</strong> · expecting him he will be seen; those who wait for him will see him appear',
          description:
            'This is active waiting. Not passive hoping. But earnest expectation. Believers are watching for His return. And He will appear. Not in hiding. Not in private. But manifestly, visibly, to all who have been waiting for Him.',
        },
        {
          kind: 'greek',
          id: 'choris-hamartias',
          title: 'Choris Hamartias — &ldquo;without sin&rdquo;',
          script: 'χωρὶς ἁμαρτίας',
          translit: '<strong>choris hamartias</strong> · apart from sin; without sin; sin-free',
          description:
            'The first time, He came bearing your sin. The second time, He comes without it. Without the burden of atonement. Without the work of redemption. As a King, not as a Lamb. As a Judge who has already decided in your favor, not as a Servant who has to plead your case.',
        },
        {
          kind: 'greek',
          id: 'sōtēria-redemption',
          title: 'Sōtēria — &ldquo;salvation&rdquo;',
          script: 'σωτηρία',
          translit: '<strong>sōtēria</strong> · salvation; wholeness; deliverance; the completion of redemption',
          description:
            'Not just forgiveness. Not just the remission of sin. But salvation—the full restoration, the healing, the wholeness, the final deliverance. The day you see Him face to face, when all the work is complete, when you are finally home.',
        },
        {
          kind: 'christ',
          id: 'christ-second-coming',
          title: 'Christ Connection — The Parousia—His Coming for You',
          html:
            'This is the promise of the parousia, the return of Christ. He will come. Not in sorrow. Not to judge believers, but to take them home. To those who have been looking for Him, who have been waiting, who have been believing while they cannot see Him—He will appear. And at that moment, your salvation is complete. Your redemption is consummated. You are not just forgiven. You are home.',
        },
        {
          kind: 'carry',
          html:
            'You are not meant to live as if this world is all there is. You are meant to live as someone who is waiting. Watching. Expecting. He said He would come again, and He will. Not because you have been good enough, but because He loves you. Because He paid the price. Because He is coming to receive you unto Himself. That changes everything about how you live today.',
        },
        {
          kind: 'reflection',
          id: 'reflect-second-coming',
          prompt:
            'What would change about your life if you truly believed that Christ is coming again—not to condemn you, but to take you home? How would that hope reshape your choices this week?',
        },
        {
          kind: 'artwork',
          matchTitle: /ascension|heaven|return|parousia|coming/i,
          caption: 'Hebrews 9:27–28 · The Second Coming',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Hebrews 9',
    quote:
      'Christ being come an High Priest of good things to come, by a greater and more perfect tabernacle, not made with hands, neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 9 · Study Guide',
  },

  hasHebrew: false,
};
