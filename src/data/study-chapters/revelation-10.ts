import { hp, hy, hg, t, type RichChapterContent } from './types';

export const REVELATION_10: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 10,

  estimatedMinutes: { beginner: 8, intermediate: 10, deep: 15 },
  intros: [
    'Revelation 10 is an interlude — a pause in the trumpet sequence between the sixth and seventh trumpets. John\'s vision turns inward. A mighty angel comes down from heaven carrying a little book, and the prophet is commanded to take it and eat it. The experience will be bittersweet: honey on the tongue, but burning in the belly. By the end of the chapter, the prophet is sent out again to prophesy before many peoples, nations, tongues, and kings. This is John at a turning point — fed by God\'s word, made alive by it, and set back into the work of witness.',
  ],

  opener: {
    matchArtist: /^$/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Revelation 10',
    quote:
      'A mighty angel comes down from heaven with a little book open. The prophet is told to take it and eat it. It is sweet as honey in his mouth, but bitter in his belly. He is commanded to prophesy again before many peoples, nations, tongues, and kings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 10 · Study Guide',
  },

  sections: [
    /* ─── Revelation 10:1 — Another Mighty Angel ─────────────────────────── */
    {
      ref: 'Revelation 10:1',
      title: 'Another Mighty Angel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('And I saw '),
                hp('another mighty angel come down from heaven', 'c-angel-vision'),
                t(', clothed with a cloud: and a rainbow was upon his head, and '),
                hg('his face was as it were the sun', 'c-face-sun'),
                t(', and his feet as pillars of fire:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-angel-vision',
          html:
            'This is not the first mighty angel John has seen. Revelation 5:2 introduces &ldquo;a strong angel,&rdquo; and 7:2 speaks of &ldquo;another angel.&rdquo; The word &ldquo;another&rdquo; (Greek <em>allos</em>) means &ldquo;another of the same kind.&rdquo; This messenger comes from heaven itself, clothed in the imagery of God\'s majesty — cloud, rainbow, sun, fire. The descriptions pile up, each one layering the sense of divine authority and presence.',
        },
        {
          kind: 'christ',
          id: 'c-face-sun',
          title: 'Christ Connection — The Face Like the Sun',
          html:
            'John opened Revelation 1:16 with the risen Christ: &ldquo;his countenance was as the sun shineth in his strength.&rdquo; This angel\'s face reflects that same glory. The angel is not Christ, but carries the light of Christ\'s presence. The feet as pillars of fire echo Revelation 1:15 — the Son of Man stands with feet like burning bronze. The angel bears the stamp of the One who sent him. What you see in heaven\'s messengers is always an overflow of Christ\'s own majesty.',
        },

        {
          kind: 'greek',
          id: 'greek-ischus',
          title: 'Ischys — &ldquo;mighty&rdquo;',
          script: 'ἰσχύς',
          translit: '<strong>ischy&#305;s</strong> · strength, force, power',
          description:
            'The angel is not weak or decorative — this is raw divine power made visible. The word appears throughout Revelation when the stakes matter and the messenger brings weight. This is not a casual errand.',
        },

        {
          kind: 'carry',
          html:
            'The angel comes clothed with power, circled with a rainbow (the sign of covenant, Gen. 9:13), with the face of the sun and feet of fire. Every detail says the same thing: <em>what I bring is from God.</em> When difficult truth comes to you — about yourself, about the world, about what you need to change — and it comes with that kind of weight, it is not meant to frighten you away. It is meant to tell you the message is real and the messenger is trustworthy.',
        },

        {
          kind: 'reflection',
          id: 'angel-vision',
          prompt:
            'When has a hard word come to you with a kind of weight and authority that made you know it was true? What made you trust it?',
        },
      ],
    },

    /* ─── Revelation 10:2 — The Little Book in His Hand ──────────────────── */
    {
      ref: 'Revelation 10:2',
      title: 'The Little Book in His Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 2,
              spans: [
                t('And he had in his hand a '),
                hy('little book open', 'greek-biblaridion'),
                t('; and he set his '),
                hg('right foot upon the sea, and his left foot on the earth,', 'c-stance'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-biblaridion',
          title: 'Biblarídion — &ldquo;little book&rdquo;',
          script: 'βιβλαρίδιον',
          translit: '<strong>biblar&#299;dion</strong> · a small scroll or tablet',
          description:
            'The diminutive form matters. This is not the great Book of Life or the sealed scroll of Revelation 5. It is small — portable, manageable, meant to be held and consumed. Yet it comes from heaven, held in the hand of divine authority.',
        },
        {
          kind: 'commentary',
          id: 'c-stance',
          html:
            'The angel plants one foot on the sea and one on the earth — a posture of dominion over all creation, as if claiming both territories at once. The sea in Revelation symbolizes chaos and the gentile nations; the earth represents the settled, the known. The angel\'s stance says: what I bring covers everything.',
        },
        {
          kind: 'carry',
          html:
            'The book is small enough to eat, small enough to hold in one hand — but it comes from heaven, from a being who straddles sea and earth. God does not give you a message so vast you cannot take it in, and He does not give you a message so small it doesn\'t matter. The proportion is exact: the word is sized for a human soul, and it changes everything.',
        },
      ],
    },

    /* ─── Revelation 10:3–4 — Seven Thunders Sealed ────────────────────────── */
    {
      ref: 'Revelation 10:3–4',
      title: 'Seven Thunders Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('And cried with a '),
                hg('loud voice, as when a lion roareth', 'c-voice'),
                t(': and when he had cried, seven thunders uttered their voices.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-voice',
          html:
            'The angel does not whisper. His voice is that of a roaring lion — the sound of majesty and judgment. The seven thunders respond, speaking their own voices. Seven is the number of completion and perfection in Revelation. These thunders speak with full authority.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the seven thunders had uttered their voices, '),
                hp('I was about to write', 'c-seal-mystery'),
                t(': and I heard a '),
                hg('voice from heaven saying unto me, Seal up those things which the seven thunders uttered, and write them not.', 'c-seal-mystery'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-brontē',
          title: 'Bront&#275; — &ldquo;thunder&rdquo;',
          script: 'βροντή',
          translit: '<strong>bront&#275;</strong> · the roar of thunder, divine voice',
          description:
            'In Scripture, thunder often signals God\'s voice. Job 37:4–5 asks: &ldquo;God thundereth marvellously with his voice.&rdquo; The seven thunders speak what the text does not reveal. Some mysteries are not for you to know.',
        },
        {
          kind: 'commentary',
          id: 'c-seal-mystery',
          html:
            'John the prophet is stopped mid-sentence — hand reaching for the scroll to write, and a voice from heaven says: don\'t. Write not those things. There is a knowing that goes beyond words, a revelation too deep for the page. The most important things God shows us are sometimes the hardest to explain.',
        },
        {
          kind: 'carry',
          html:
            'The seven thunders roar, the prophet\'s hand moves to record them, and then the command: <em>seal it up. Do not write.</em> In your own life, God may show you something you immediately want to tell everyone, explain, defend, or frame just right. The voice that sealed the seven thunders also whispers sometimes: not yet. Not all. Let this one stay sacred between you and Me. There is a kind of faithfulness that protects mystery by not speaking it into the marketplace.',
        },

        {
          kind: 'reflection',
          id: 'seven-thunders',
          prompt:
            'What is something God has shown you that you\'ve kept quiet about — not from shame, but from a sense that it wasn\'t yet time to speak?',
        },
      ],
    },

    /* ─── Revelation 10:5–7 — The Angel Swears ─────────────────────────────── */
    {
      ref: 'Revelation 10:5–7',
      title: 'The Angel Swears: "Time No Longer"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 5,
              spans: [
                t('And the angel which I saw stand upon the sea and upon the earth '),
                hg('lifted up his hand to heaven,', 'c-oath'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And sware by him that liveth for ever and ever, who created heaven, and the things that therein are, and the earth, and the things that therein are, and the sea, and the things which are therein, that there should be '),
                hp('time no longer', 'c-time-no-more'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-chronos',
          title: 'Chr&#243;nos — &ldquo;time&rdquo;',
          script: 'χρόνος',
          translit: '<strong>chr&#243;nos</strong> · measured time, the passing of years',
          description:
            'Not <em>kairos</em> (the right moment) but <em>chronos</em> (duration, sequence). The angel swears that the age of waiting, the long stretch of history, will end. The delay is almost over.',
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'The gesture — hand lifted to heaven — is the oath-taker\'s ancient posture. The angel swears by God Himself, the One who lives forever, the Creator of all things. This is not a casual promise. This is a covenant word.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 7,
              spans: [
                t('But in the days of the voice of the seventh angel, when he shall begin to sound, '),
                hp('the mystery of God should be finished', 'c-mystery-finished'),
                t(', as he hath declared to his servants the prophets.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-mysterion',
          title: 'Myst&#275;rion — &ldquo;mystery&rdquo;',
          script: 'μυστήριον',
          translit: '<strong>myst&#275;rion</strong> · a hidden thing revealed, a secret made plain',
          description:
            'In the New Testament, &ldquo;mystery&rdquo; is not unsolvable but rather something once hidden that is now being disclosed. Paul calls the gospel the &ldquo;mystery of Christ&rdquo; — God\'s plan to save both Jews and Gentiles through faith in Jesus.',
        },
        {
          kind: 'christ',
          id: 'c-mystery-finished',
          title: 'Christ Connection — The Mystery Centered in Christ',
          html:
            'Paul writes in Ephesians 3:9 that the gospel is &ldquo;the mystery which from the beginning of the world hath been hid in God.&rdquo; In Colossians 1:26–27, he says that mystery &ldquo;hath been hid for ages and from generations… Christ in you, the hope of glory.&rdquo; The mystery of God is not abstract theology — it is God\'s plan to reconcile all things to Himself through Christ. When the seventh trumpet sounds, that revelation will be complete.',
        },
        {
          kind: 'commentary',
          id: 'c-time-no-more',
          html:
            'Not that time will stop — but that the era of waiting, of prophecy, of &ldquo;not yet,&rdquo; will give way to the fulfillment. The mystery that the prophets have been proclaiming will be fully revealed. The work of redemption through Christ will be done.',
        },
        {
          kind: 'carry',
          html:
            'The angel swears by the eternal God that time is running out — not time in the clock sense, but the age of waiting. You live in that thin place: the mystery has been shown to you through Christ, yet the world still doesn\'t know. You have seen the secret; others are still waiting. Revelation 10 is God\'s word to the faithful witness: hold steady. The delay will not last forever. The seventh trumpet will sound.',
        },

        {
          kind: 'reflection',
          id: 'time-no-longer',
          prompt:
            'What have you been waiting for? What promise or mystery have you been holding onto that feels like it\'s taking too long?',
        },
      ],
    },

    /* ─── Revelation 10:8–9 — Take It, and Eat It Up ─────────────────────── */
    {
      ref: 'Revelation 10:8–9',
      title: 'Take It, and Eat It Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('And the voice which I heard from heaven spake unto me again, and said, '),
                hg('Go and take the little book which is open', 'c-take-book'),
                t(' in the hand of the angel which standeth upon the sea and upon the earth.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And I went unto the angel, and said unto him, Give me the little book. And he said unto me, '),
                hp('Take it, and eat it up', 'c-eat-word'),
                t('; and it shall make thy belly bitter, but it shall be in thy mouth sweet as honey.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-take-book',
          html:
            'John does not hesitate — he goes to the angel and asks for the book directly. The passage moves with the simple clarity of obedience: a command comes, and the prophet responds. There is no negotiation, no doubt. This is what faithful trust looks like.',
        },
        {
          kind: 'christ',
          id: 'c-eat-word',
          title: 'Christ Connection — Eating God\'s Word',
          html:
            'This echoes Ezekiel 3:1–3, where the prophet is told to eat a scroll. &ldquo;So I opened my mouth, and he caused me to eat that roll… it was in my mouth as honey for sweetness.&rdquo; Ezekiel\'s scroll contained lamentation and woe. John\'s will too. But the pattern is the same: God fills His messengers with His word so they can speak it. Christ, the Word made flesh (John 1:14), is the ultimate fulfilment of this — God\'s message living and breathing inside a human body, speaking from within us when we trust Him.',
        },
        {
          kind: 'greek',
          id: 'greek-glykus',
          title: 'Glyk&#250;s — &ldquo;sweet&rdquo;',
          script: 'γλυκύς',
          translit: '<strong>glyk&#250;s</strong> · pleasant to taste, delightful',
          description:
            'The word captures what honey tastes like on the tongue — immediate pleasure, comfort, the taste of something good. God\'s word on first encounter is honey. But the belly tells a different story.',
        },
        {
          kind: 'carry',
          html:
            'The angel tells John up front: this will be sweet at first, then bitter. God does not hide the cost. When you take in God\'s word — truly take it in, let it work on you — it starts sweet. The comfort of His presence, the relief of knowing you\'re not alone, the clarity of His promises. But as it moves through you, as you begin to live it out, the bitterness comes: the change required, the old things you must release, the hard truths you must face about yourself. Good Scripture always tastes like honey first. The bitterness comes later, and it is worth it.',
        },
      ],
    },

    /* ─── Revelation 10:10 — Sweet as Honey, Bitter in the Belly ────────────── */
    {
      ref: 'Revelation 10:10',
      title: 'Sweet as Honey, Bitter in the Belly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 10,
              spans: [
                t('And I took the little book out of the angel\'s hand, and ate it up; and it was in my mouth '),
                hy('sweet as honey', 'greek-pikros'),
                t(': and as soon as I had eaten it, my belly was '),
                hg('bitter', 'greek-pikros'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-pikros',
          title: 'Pikr&#243;s — &ldquo;bitter&rdquo;',
          script: 'πικρός',
          translit: '<strong>pikr&#243;s</strong> · sharp, acrid, painful to the taste',
          description:
            'The contrast is visceral. Not a gradual shift but a sudden pivot — from sweet in the mouth to bitter in the belly. The word &ldquo;as soon as&rdquo; (Greek <em>kai hote</em>) marks the moment the sweetness turns. This is not a small discomfort. This is real pain.',
        },
        {
          kind: 'commentary',
          id: 'c-bitter-witness',
          html:
            'The bitterness is the cost of witness. To speak God\'s word to a world that does not want to hear it is to taste sorrow. To see what God is doing and then to watch others reject it, resist it, ridicule it — that is what makes the belly bitter. John the Revelator knows this. He is writing to Christians who are being persecuted. The message he brings them is sweet with hope, but it carries the bitterness of suffering with it.',
        },
        {
          kind: 'carry',
          html:
            'You have probably experienced this yourself: the moment you hear or know something true, it feels good. Clarity, relief, the warmth of reality breaking through. But then the working-out of it in your actual life — the conversations you have to have, the changes you have to make, the grief that comes from finally being honest — that tastes bitter. Don\'t mistake the bitterness for poison. The angel warned you. It is supposed to hurt. That is how you know it is real.',
        },

        {
          kind: 'reflection',
          id: 'sweet-bitter',
          prompt:
            'When has God\'s truth tasted sweet at first and then bitter in the working out of it? What came on the other side of that bitterness?',
        },
      ],
    },

    /* ─── Revelation 10:11 — Thou Must Prophesy Again ───────────────────── */
    {
      ref: 'Revelation 10:11',
      title: '"Thou Must Prophesy Again Before Many Peoples and Nations"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 11,
              spans: [
                t('And he said unto me, '),
                hp('Thou must prophesy again before many peoples, and nations, and tongues, and kings', 'c-prophesy-again'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prophesy-again',
          html:
            'The taste is still bitter in John\'s belly, and the command comes: go. Prophesy. Not &ldquo;if you feel able&rdquo; or &ldquo;when the bitterness fades.&rdquo; The word is must. This is not an invitation. This is the work.',
        },
        {
          kind: 'carry',
          html:
            'You have eaten God\'s word. It is now part of you — sweet and bitter both. The command that comes to John comes to every believer who has taken in God\'s truth: <em>go tell them.</em> Not a career. Not a role you apply for. A mandate from heaven. You speak to the peoples and nations and tongues around you — your neighbor, your coworker, your child, the stranger. The word God has put in you is not meant to stay there. It is meant to come out, spoken, lived, incarnated in your witness.',
        },

        {
          kind: 'reflection',
          id: 'prophesy-again',
          prompt:
            'What has God put into you that He might be asking you to speak? Who are the &quot;peoples and nations&quot; He has put around you?',
        },

        {
          kind: 'divider',
        },

        {
          kind: 'christ',
          id: 'c-christ-fullness',
          title: 'Christ Connection — Filled with the Word',
          html:
            'Jesus told His disciples before the resurrection: &ldquo;It is expedient for you that I go away… I have yet many things to say unto you, but ye cannot bear them now&rdquo; (John 16:7, 12). The Spirit was to come and guide them into all truth. John the Revelator is experiencing that fulfillment. He eats God\'s word — which, for the New Testament reader, centers in Christ, the Word made flesh — and becomes the carrier of it. This is what a believer is: a person who has consumed God\'s word and is sent to speak it.',
        },
      ],
    },
  ],
};
