import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Acts 2 — Pentecost: The Spirit Comes in Power
 *
 * The promise is fulfilled. Ten days after the ascension, on the feast of
 * Pentecost, the 120 believers gathered in Jerusalem are filled with the Holy
 * Ghost. Cloven tongues of fire rest upon each one. They speak in languages
 * they have not learned. The sound draws crowds from every nation under heaven.
 * Peter, who denied his Lord, now stands and testifies with authority.
 * Three thousand believe and are baptized in a single day. The church is born.
 */
export const ACTS_2: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 2,

  intros: [
    'The disciples have waited. For forty days after the resurrection, Jesus appeared and vanished, appeared and vanished, teaching them about the kingdom of God. Then He told them to wait in Jerusalem. "Ye shall be baptized with the Holy Ghost not many days hence," He said. So they waited. About one hundred twenty believers gathered in the upper room—Mary, the mother of Jesus, His brothers, the apostles. They prayed. They waited. And then it came.',
    'Pentecost was a feast day, when Jerusalem filled with pilgrims from every nation under heaven. The roar of the wind, the sight of fire, the sound of disciples speaking in languages they had never learned—it was undeniable. And in that noise and fire, Peter found his voice. The man who had been silent and afraid became a prophet. His words cut through the crowd. Three thousand souls, pierced to the heart, asked what they must do. The Spirit, once poured out upon a few, now poured out upon all.',
    'What unfolds is the birth of the church—not as an institution, but as a living community bound by the Spirit, by water and fire, by the breaking of bread, by the apostles&apos; teaching, by prayer. By the end of Acts 2, the earliest followers of Jesus have begun to show us what it looks like to have received the Spirit and to be bearing witness to the resurrection of Christ.',
  ],

  sections: [
    /* ─── Acts 2:1–4 — The Sound from Heaven ──────────────────────────── */
    {
      ref: 'Acts 2:1–4',
      title: 'The Sound from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And when the day of Pentecost was fully come, they were all with one accord in one place.'),
            verse(2,
              t('And suddenly there came a sound from heaven as of a '),
              hg('rushing mighty wind', 'acts2-wind'),
              t(', and it filled all the house where they were sitting.')
            ),
            verse(3,
              t('And there appeared unto them '),
              hg('cloven tongues like as of fire', 'acts2-fire'),
              t(', and it sat upon each of them.')
            ),
            verse(4,
              t('And they were all filled with the '),
              hy('Holy Ghost', 'acts2-pneuma'),
              t(', and began to speak with '),
              hy('other tongues', 'acts2-glossa'),
              t(', as the Spirit gave them utterance.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-wind',
          html:
            'The Spirit comes not privately, not silently. The wind is <em>rushing</em>, <em>mighty</em>—a word that fills <em>all the house.</em> This is the sound of power. It echoes Genesis 1:2, where the Spirit of God moves over the face of the waters. It recalls Ezekiel&apos;s valley of dry bones, where the wind of God gives life. The disciples are not startled by a whisper. They are surrounded by a sound so real, so loud, that people in the streets will ask, "What meaneth this?"',
        },
        {
          kind: 'commentary',
          id: 'acts2-fire',
          html:
            'Fire, too, is not a private sign. Cloven tongues—split, divided—rest upon <em>each</em> of them. Not fire consuming, but fire that touches and rests. This recalls the pillar of fire that led Israel through the wilderness. The burning bush where God spoke to Moses. The presence of God manifesting in flame. Pentecost makes visible what is otherwise invisible: the Spirit filling the house and filling each believer.',
        },
        {
          kind: 'greek',
          id: 'acts2-pneuma',
          title: 'Pneuma — Holy Spirit',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit; breath; wind',
          description:
            'The same word for the rushing wind (pneuma) is used for the Holy Spirit filling them. Spirit and wind are one. The breath of God, breathed into them. Not a power <em>at</em> them, but a power <em>in</em> them, filling them as completely as wind fills a house.',
        },
        {
          kind: 'greek',
          id: 'acts2-glossa',
          title: 'Glossa — Tongues',
          script: 'γλῶσσα',
          translit: '<strong>glossa</strong> · tongue; language; speech',
          description:
            'They speak in <em>glossai</em>—languages. Not ecstatic utterance alone, but intelligible speech in languages they have not learned. In a few verses we will hear men from fifteen different regions say, "We do hear them speak in our tongues the wonderful works of God." The Spirit breaks the barrier that sin created at Babel. The scattered languages are gathered back into unified witness.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-gift',
          title: 'Christ Connection — The Promised Gift',
          html:
            'Jesus promised this. "Tarry ye in the city of Jerusalem, until ye be endued with power from on high" (Luke 24:49). Peter will later explain: "Being by the right hand of God exalted, and having received of the Father the promise of the Holy Ghost, he hath shed forth this, which ye now see and hear" (Acts 2:33). The risen Christ is already at work, pouring out His Spirit upon the disciples. Pentecost is not a new story. It is the risen Christ keeping His word.',
        },
        {
          kind: 'carry',
          html:
            'The disciples did nothing to deserve this. They were not powerful or eloquent. They were frightened. Yet they had obeyed the command to wait. And the moment they were ready to be filled, the Spirit came. You do not need to create the conditions. You need to be present, with others who believe, waiting and willing. The power is not your responsibility. Your only responsibility is to receive it.',
        },
        {
          kind: 'reflection',
          id: 'acts2-waiting',
          prompt: 'What are you waiting for God to do in your life? What would it look like to truly wait—to gather with believers, to pray, to be ready to receive?',
        },
      ],
    },

    /* ─── Acts 2:5–13 — The Crowd Gathers ──────────────────────────────── */
    {
      ref: 'Acts 2:5–13',
      title: 'The Crowd Gathers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(5,
              t('And there were dwelling at Jerusalem '),
              hg('Jews, devout men, out of every nation under heaven', 'acts2-nations'),
              t('.')
            ),
            plain(6, 'Now when this was noised abroad, the multitude came together, and were confounded, because that every man heard them speak in his own language.'),
            verse(7,
              t('And they were all '),
              hg('amazed and marvelled', 'acts2-astonish'),
              t(', saying one to another, Behold, are not all these which speak Galilaeans?')
            ),
            verse(8,
              t('And how hear we every man in our own tongue, wherein we were born?')
            ),
            verse(11,
              t('We do hear them speak in our tongues the '),
              hp('wonderful works of God', 'acts2-christ-power'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-nations',
          html:
            'The list is overwhelming. Parthians, Medes, Elamites, Mesopotamians, Judeans, Cappadocians, Pontus, Asia, Phrygia, Pamphylia, Egypt, Libya, Rome, Crete, Arabia. These are not travelers passing through. They are Jewish pilgrims, devout believers gathered for a feast. They represent the entire reach of the diaspora—the scattered people of God, dwelling in every corner of the known world. And suddenly, they all hear in their own language. The Spirit breaks every barrier at once.',
        },
        {
          kind: 'commentary',
          id: 'acts2-astonish',
          html:
            'They are amazed. They marvel. This is not the response of people watching a parlor trick. This is the response of people encountering the impossible. Galilean fishermen—uneducated, unlettered—speaking with the fluency of native speakers in languages they have never studied. The only explanation is power. Not human power. Divine power.',
        },
        {
          kind: 'commentary',
          id: 'acts2-christ-power',
          html:
            'What they speak are "the wonderful works of God"—the same Greek phrase used of the mighty deeds Jesus performed. Now the disciples speak of those works. They testify to resurrection. They proclaim the risen Christ. And they do it not in the language of Jerusalem, but in the language of the listener&apos;s own home. The Spirit makes the gospel not a foreign thing imposed from outside, but a homecoming word in a voice each person knows.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit speaks the language of your heart. Not in foreign jargon, but in the words and images you understand. Not in the accent of the powerful, but in the voice of your own people. This is the Spirit&apos;s way—He does not impose. He translates. He makes the word yours.',
        },
        {
          kind: 'reflection',
          id: 'acts2-language',
          prompt: 'In what language does God most clearly speak to you—the language of your profession, your family, your story? How might He be calling you to translate His work for others?',
        },
        {
          kind: 'artwork',
          matchTitle: /pentecost/i,
          matchArtist: /tissot/i,
          caption: 'Acts 2:1–13 · The Crowd Gathers',
        },
      ],
    },

    /* ─── Acts 2:14–21 — Peter Stands Up ──────────────────────────────── */
    {
      ref: 'Acts 2:14–21',
      title: 'Peter Stands Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(14,
              t('But Peter, standing up with the eleven, '),
              hg('lifted up his voice', 'acts2-peter-voice'),
              t(', and said unto them, Ye men of Judaea, and all ye that dwell at Jerusalem, be this known unto you, and hearken to my words:')
            ),
            verse(15,
              t('For these are not drunken, as ye suppose, seeing it is but the third hour of the day.')
            ),
            verse(16,
              t('But this is that which was spoken by the prophet '),
              hy('Joel', 'acts2-joel'),
              t(':')
            ),
            verse(17,
              t('And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams;')
            ),
            verse(20,
              t('The sun shall be turned into darkness, and the moon into blood, '),
              hg('before that great and notable day of the Lord come', 'acts2-last-days'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-peter-voice',
          html:
            'This is the same Peter who, a few weeks before, denied he even knew Jesus. Three times he said, "I know not the man." Now he stands and <em>lifts up his voice</em>. Not in fear. Not in hiding. In boldness. The Spirit does not make him unafraid; it makes him sure. He knows himself to be a witness to the resurrection. That certainty is louder than any threat.',
        },
        {
          kind: 'commentary',
          id: 'acts2-joel',
          html:
            'Peter quotes Joel 2:28. Joel had promised that in the last days, God would pour out His Spirit on all flesh—sons and daughters, servants and handmaids, young and old. Everyone. Not just priests. Not just prophets. Everyone. Peter is saying: you are in the last days. You are living in the day the prophet saw. What you are witnessing is not madness. It is Scripture being fulfilled.',
        },
        {
          kind: 'commentary',
          id: 'acts2-last-days',
          html:
            'The last days have come. Not in the distant future. Now. This moment. This is the day the prophets saw. It is a day of signs and wonders, a day of the Spirit poured out on all flesh, a day of judgment and mercy. It is the day before the day of the Lord. To live in the last days is to live in urgency, in clarity, in the pouring out of God&apos;s power.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-judgment',
          title: 'Christ Connection — The Lord of the Last Days',
          html:
            'Peter speaks of "that great and notable day of the Lord"—but first, before that day comes, the Spirit is poured out. Paul will say the same: "The day of the Lord so cometh as a thief in the night" (1 Thess. 5:2). But before that judgment, there is a window of mercy. The Spirit is offered now, to all who call upon the name of the Lord. Jesus, risen and exalted, is the one pouring out the Spirit and hastening the day.',
        },
        {
          kind: 'carry',
          html:
            'Peter spoke in a voice of authority—not because he had been trained in rhetoric, but because he had seen the resurrection. What truth have you seen that gives you authority to speak? Not the authority of position, but the authority of a witness who has encountered the risen Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts2-witness',
          prompt: 'Peter stood up knowing he might be arrested. What truth would you be willing to speak even if it cost you? What is your witness?',
        },
      ],
    },

    /* ─── Acts 2:22–36 — Jesus Exalted ────────────────────────────────── */
    {
      ref: 'Acts 2:22–36',
      title: 'Jesus Exalted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(22,
              t('Ye men of Israel, hear these words; '),
              hg('Jesus of Nazareth, a man approved of God among you by miracles and wonders and signs, which God did by him in the midst of you', 'acts2-jesus-approved'),
              t(', as ye yourselves also know;')
            ),
            verse(23,
              t('Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:')
            ),
            verse(24,
              t('Whom God hath '),
              hg('raised up', 'acts2-resurrection'),
              t(', having loosed the pains of death: because it was not possible that he should be holden of it.')
            ),
            verse(33,
              t('Therefore being by the right hand of God '),
              hg('exalted', 'acts2-exalted'),
              t(', and having received of the Father the promise of the Holy Ghost, he hath shed forth this, which ye now see and hear.')
            ),
            verse(36,
              t('Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both '),
              hp('Lord and Christ', 'acts2-christ-lord'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-jesus-approved',
          html:
            'Peter begins with what they cannot deny: they saw the miracles. They saw Jesus of Nazareth doing deeds that only God could do. This is not a claim about resurrection they cannot verify. This is a claim about what happened before their eyes. But then he pivots. They approved Him with their own eyes—and then they <em>crucified</em> Him. The same people. The same nation. The contradiction is wrenching.',
        },
        {
          kind: 'commentary',
          id: 'acts2-resurrection',
          html:
            'But God raised Him. The pains of death could not hold Him. This is the crux of Peter&apos;s sermon. Death, which seemed to be the end, was not the end. God&apos;s power broke through. The stone was rolled away. The grave could not contain Him. If there is any power greater than death, Jesus rose from it. And if Jesus rose from it, He is the Lord.',
        },
        {
          kind: 'commentary',
          id: 'acts2-exalted',
          html:
            'Exalted to the right hand of God. This is the Ascension spoken in one phrase. Jesus is not merely alive; He is <em>at the right hand of God</em>—the place of power and authority. And from that position, He has poured out the Spirit you are witnessing. The disciples are not performing these wonders. The risen Christ is performing them through His followers. He is still present. Still acting. Still ruling.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-lord',
          title: 'Christ Connection — Lord and Messiah',
          html:
            'This is the proclamation: Jesus is <em>Lord</em> and <em>Christ</em> (Messiah). He is not only Messiah—the one promised to Israel. He is Lord—the one who stands at God&apos;s right hand, the one to whom all authority has been given. The response of the listeners confirms it: they are cut to the heart. They feel the weight of what Peter has said. The one they crucified is the risen Lord. And His Spirit is being poured out now.',
        },
        {
          kind: 'carry',
          html:
            'The disciples did not hide the crucifixion. Peter threw it in their face—<em>whom ye have crucified</em>. Yet he did not throw it as a weapon of guilt, but as the hinge upon which salvation turns. Your sin is real. Your nation rejected Him. And <em>God raised Him up.</em> That same power that raises the dead can raise you.',
        },
        {
          kind: 'reflection',
          id: 'acts2-exaltation',
          prompt: 'What changes in your life when you truly believe that Jesus, whom you crucified by your sin, has risen and is exalted at the right hand of God?',
        },
        {
          kind: 'artwork',
          matchTitle: /resurrection|ascension/i,
          caption: 'Acts 2:22–36 · The Risen and Exalted Lord',
        },
      ],
    },

    /* ─── Acts 2:37–39 — Cut to the Heart ──────────────────────────────── */
    {
      ref: 'Acts 2:37–39',
      title: 'Cut to the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(37,
              t('Now when they heard this, they were '),
              hy('pricked in their heart', 'acts2-katanysso'),
              t(', and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do?')
            ),
            verse(38,
              t('Then Peter said unto them, '),
              hg('Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins', 'acts2-repent-baptize'),
              t(', and ye shall receive the gift of the Holy Ghost.')
            ),
            verse(39,
              t('For the promise is unto you, and to your children, and to all that are afar off, even as many as the Lord our God shall call.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-katanysso',
          html:
            'They are pricked in their hearts. Not merely sad. Not merely moved. Pricked—as if by a piercing blade. They suddenly understand what they have done. They crucified the Messiah. They rejected the Lord. The weight of that truth cuts through their denial and their excuses. Yet in that moment of terrible clarity, Peter offers a way out.',
        },
        {
          kind: 'greek',
          id: 'acts2-metanoia',
          title: 'Metanoia — Repentance',
          script: 'μετανοέω',
          translit: '<strong>metanoia</strong> · repentance; change of mind; turning around',
          description:
            'The word for repentance in Greek is literally a turning around—to change your mind so completely that you change your direction. You were walking toward death. Repentance is walking back, then walking toward life. It is not feeling sorry. It is a complete reversal, a new trajectory.',
        },
        {
          kind: 'commentary',
          id: 'acts2-repent-baptize',
          html:
            'The path forward is specific. Repent—turn around. Believe in the name of Jesus Christ. Be baptized. The remission of sins—forgiveness—is offered to all who do these things. And the gift of the Holy Ghost will follow. This is not a future hope far off. This is an immediate offer. Today, you can be baptized. Today, you can receive the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts2-promise-all',
          html:
            'The promise is not only to those in Jerusalem. It extends to children, to the distant regions, to all whom the Lord calls. This is the universalization of grace. The Spirit is poured out upon all flesh—not just the elect, not just the faithful of Israel, but all who call upon the name of the Lord. Repentance and baptism are the door, open to everyone.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-mercy',
          title: 'Christ Connection — Mercy Follows Judgment',
          html:
            'The word of judgment—"you have crucified"—is immediately followed by the word of mercy—"repent and be baptized." Jesus embodied this pattern in His teaching: judgment on sin, mercy for the sinner. The cross is both—Jesus bearing the judgment of sin and extending mercy through the resurrection. Peter&apos;s sermon mirrors it perfectly: you killed Him, and now you can be saved by His name.',
        },
        {
          kind: 'carry',
          html:
            'The moment you understand the weight of what you have done—the ways you have rejected Christ, denied Him by your choices, crucified Him afresh by your sin—that moment does not end in despair. It ends in an open door. Repent. Be baptized. Receive the Spirit. The same voice that names your sin offers you forgiveness.',
        },
        {
          kind: 'reflection',
          id: 'acts2-repentance-reflection',
          prompt: 'Where are you being pricked in your heart? What sin is being named? And what would it mean to turn around today and be baptized into the name of Jesus Christ?',
        },
      ],
    },

    /* ─── Acts 2:40–41 — Three Thousand Baptized ──────────────────────── */
    {
      ref: 'Acts 2:40–41',
      title: 'Three Thousand Baptized',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(40,
              t('And with many other words did he testify and exhort them, saying, '),
              hg('Save yourselves from this untoward generation', 'acts2-save'),
              t('.')
            ),
            verse(41,
              t('Then they that gladly received his word were baptized: and '),
              hp('the same day there were added unto them about three thousand souls', 'acts2-three-thousand'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-save',
          html:
            'Peter calls them to save themselves—to step out from the generation that is walking toward judgment. This is not fatalism or passivity. This is a call to action, to choice, to decision. The generation that rejected Christ is walking toward condemnation. But you can step out. You can repent. You can be saved.',
        },
        {
          kind: 'commentary',
          id: 'acts2-three-thousand',
          html:
            'Three thousand. Not a handful of converts. Not a small cadre of believers. Three thousand souls baptized in a single day. The church does not grow through centuries of slow persuasion. It grows through the word of God, spoken with power, received with faith. In a single day, the followers of Jesus are multiplied from one hundred twenty to over three thousand. The Spirit is moving.',
        },
        {
          kind: 'carry',
          html:
            'The harvest is sudden. When the gospel is preached in power, conviction falls on many at once. You are part of that ongoing harvest. The same Spirit who came at Pentecost still calls people out of the dying generation and into the life of Christ. You are standing in that river of conversion.',
        },
        {
          kind: 'reflection',
          id: 'acts2-harvest',
          prompt: 'What does it mean to be part of a movement of three thousand, three million, a living community of the baptized and Spirit-filled? What is your role in that ongoing harvest?',
        },
        {
          kind: 'artwork',
          matchTitle: /baptism|water/i,
          caption: 'Acts 2:40–41 · The Three Thousand Baptized',
        },
      ],
    },

    /* ─── Acts 2:42–47 — Community Life ──────────────────────────────── */
    {
      ref: 'Acts 2:42–47',
      title: 'Community Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(42,
              t('And they continued stedfastly in the apostles&apos; '),
              hg('doctrine and fellowship, and in breaking of bread, and in prayers', 'acts2-four-pillars'),
              t('.')
            ),
            verse(44,
              t('And all that believed were together, and had '),
              hg('all things common', 'acts2-common'),
              t(';')
            ),
            verse(45,
              t('And sold their possessions and goods, and parted them to all men, as every man had need.')
            ),
            verse(46,
              t('And they, continuing daily with one accord in the temple, and '),
              hg('breaking bread from house to house', 'acts2-breaking-bread'),
              t(', did eat their meat with gladness and singleness of heart,')
            ),
            verse(47,
              t('Praising God, and having '),
              hy('favour with all the people', 'acts2-koinonia'),
              t('. And the Lord added to the church daily such as should be saved.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts2-four-pillars',
          html:
            'The early church is held up by four pillars: doctrine, fellowship, breaking of bread, and prayers. Not one of these stands alone. They teach the apostles&apos; doctrine—the living memory of Jesus&apos; words and acts. They are in fellowship—koinonia, sharing life together. They break bread—the Lord&apos;s Supper, remembering His sacrifice. They pray. These four practices wove them together into a community so strong that it could not be broken by persecution or fear.',
        },
        {
          kind: 'commentary',
          id: 'acts2-common',
          html:
            'They have all things common. Not because they were commanded to do so, but because the Spirit made it possible for them to do so. Those who owned lands sold them. Those who had goods shared them. Need was the measure. This is not communism imposed. It is love made visible. The new birth gives people the freedom to let go.',
        },
        {
          kind: 'greek',
          id: 'acts2-koinonia',
          title: 'Koinonia — Fellowship',
          script: 'κοινωνία',
          translit: '<strong>koinonia</strong> · fellowship; communion; partnership; having things in common',
          description:
            'Fellowship is not small talk or casual friendliness. It is a deep sharing of life—possessions, meals, burdens, joy, prayer. The believers are in koinonia with one another because they are all in koinonia with Christ. Sharing life flows from the shared experience of salvation.',
        },
        {
          kind: 'commentary',
          id: 'acts2-breaking-bread',
          html:
            'Breaking bread from house to house—not just in the temple, but in homes. This is the Lord&apos;s Supper as a living, daily practice, not a quarterly ceremony. They remember the body and blood of Christ as they share ordinary meals together. Every meal becomes sacred. Every gathering becomes worship.',
        },
        {
          kind: 'christ',
          id: 'acts2-christ-community',
          title: 'Christ Connection — The Body Manifests',
          html:
            'Paul will later explain what is happening here: believers are the body of Christ (1 Cor. 12:12–27). Each member has different gifts. Each member is vital. The fellowship of the Spirit is not metaphorical—it is the literal indwelling of the risen Christ in the community. When they break bread, they are re-membering His body, and in doing so, they become His body. The same Jesus who was crucified is present in their shared life.',
        },
        {
          kind: 'carry',
          html:
            'You are not meant to follow Jesus alone. The early church shows us: the faith is lived in community, in shared meals, in shared resources, in daily prayer with others who believe. Who are the people God has called you to live in koinonia with? What would it mean to truly have life in common with them—to share your goods, your burdens, your joy, your faith?',
        },
        {
          kind: 'reflection',
          id: 'acts2-community-reflection',
          prompt: 'If your faith community truly lived out Acts 2—sharing all things, breaking bread daily, continuing in doctrine and prayer—how would it transform your church, your neighborhood, your city?',
        },
        {
          kind: 'artwork',
          matchTitle: /fellowship|community|meal/i,
          caption: 'Acts 2:42–47 · The Community Life of the Early Church',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 2',
    quote: 'And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance. And the same day there were added unto them about three thousand souls.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 2 · Study Guide',
  },

  hasHebrew: false,
};
