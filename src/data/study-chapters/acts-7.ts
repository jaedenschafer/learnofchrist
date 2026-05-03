import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Acts 7 — Stephen's Defense: A Sweep of Israel's History and the Stoning
 *
 * Acts 7 is the longest chapter in Acts. Stephen stands before the council
 * not as a defendant but as a prophet. He rehearses Israel's history—from Abraham
 * called out of Ur to Solomon's temple—to show a haunting pattern: God sends His
 * messengers, and the people resist. The council itself is resisting the Holy Spirit.
 * In his vision at the end, Stephen sees the Son of Man standing at God&apos;s right hand,
 * the only time in the New Testament (outside the Gospels) that Jesus is described standing
 * rather than sitting. Stephen&apos;s death follows—and with it, the first Christian martyr
 * modeled on Christ, extending forgiveness even as the stones fall.
 */
export const ACTS_7: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 7,

  estimatedMinutes: { 5: 10, 10: 16, 15: 22 },
  intros: [
    'Stephen has been arrested on false charges. Brought before the Sanhedrin, he refuses to mount a conventional legal defense. Instead, he gives a sermon—a sweeping recitation of Israel&apos;s history from Abraham to Solomon—that reveals what his accusers are really doing: resisting the Holy Spirit, just as their ancestors resisted God&apos;s prophets and messengers.',
    'The sermon carries a double weight. On one level, it is historical—a summary of Israel&apos;s past that would have been familiar to any Jewish audience. On another level, it is prophetic rebuke. The council hears in it an indictment, and their fury rises. They drag Stephen outside the city and stone him. A young man named Saul stands guard over the witnesses&apos; clothes, approving of his death. But Stephen dies seeing the heavens opened and the Son of Man standing at God&apos;s right hand, and he forgives his killers.',
    'This is the beginning of persecution. This is the first martyr. And this is where the man who will become Paul stands witness—though he does not yet understand what he is witnessing.',
  ],

  sections: [
    /* ─── Acts 7:1–8 — The God of Glory in Mesopotamia ─────────────────── */
    {
      ref: 'Acts 7:1–8',
      title: 'The God of Glory in Mesopotamia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            { number: 1, spans: [t('Then said the high priest, Are these things so?')] },
            {
              number: 2,
              spans: [
                t('And he said, Men, brethren, and fathers, hearken; The '),
                hy('God of glory', 'acts7-greek-doxa'),
                t(' appeared unto our father Abraham, when he was in Mesopotamia, before he dwelt in Charran;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And said unto him, '),
                hg('Get thee out of thy country, and from thy kindred, and come into the land which I shall shew thee', 'acts7-call-abraham'),
                t('.'),
              ],
            },
            { number: 8, spans: [t('And he gave him the covenant of circumcision: and so Abraham begat Isaac, and circumcised him the eighth day; and Isaac begat Jacob; and Jacob begat the twelve patriarchs.')] },
          ],
        },
        {
          kind: 'greek',
          id: 'acts7-greek-doxa',
          title: 'Doxa — Glory',
          script: 'δόξα',
          translit: '<strong>doxa</strong> · glory, radiance, the visible manifestation of God',
          description: 'The God who appears to Abraham in Ur is not distant or abstract. He is the God of glory—the God whose presence is seen and felt. This is the God who calls out a man with nothing but a promise and expects him to follow.',
        },
        {
          kind: 'commentary',
          id: 'acts7-call-abraham',
          html: 'Abraham receives a call with no map, no guarantee, no proof. He is told to leave everything—his country, his family, his security—and go to a land he has never seen. This is the story of God&apos;s covenant people in miniature: called, summoned, asked to trust a voice they have heard but a future they cannot see. The pattern begins here.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-call',
          title: 'Christ Connection — Called Out and Rejected',
          html: 'Abraham is called and follows. But the history Stephen is about to unfold shows a pattern where those called by God are often rejected by those around them. Jesus too is called, anointed, and rejected by the very people He comes to save. &ldquo;He came unto his own, and his own received him not&rdquo; (John 1:11). The tragedy that begins with Abraham&apos;s call finds its fulfillment in Christ&apos;s rejection.',
        },
        {
          kind: 'carry',
          html: 'If God is calling you to something—a change in direction, a risk of faith, a break from what has always been secure—you are in the line of Abraham. The call is not loud or obvious. It is not safe. But it comes from the God of glory, and that is enough.',
        },
        {
          kind: 'reflection',
          id: 'acts7-call-reflection',
          prompt: 'What would it look like for you to respond to a call from God the way Abraham did—without knowing where it leads?',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham|covenant/i,
          caption: 'Acts 7:1–8 · The God of Glory in Mesopotamia',
        },
      ],
    },

    /* ─── Acts 7:9–19 — Joseph Rejected Then Exalted ───────────────────── */
    {
      ref: 'Acts 7:9–19',
      title: 'Joseph Rejected Then Exalted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('And the patriarchs, '),
                hg('moved with envy, sold Joseph into Egypt', 'acts7-joseph-envy'),
                t(': but God was with him,'),
              ],
            },
            { number: 10, spans: [t('And delivered him out of all his afflictions, and gave him favour and wisdom in the sight of Pharaoh king of Egypt; and he made him governor over Egypt and all his house.')] },
            { number: 11, spans: [t('Now there came a dearth over all the land of Egypt and Chanaan, and great affliction: and our fathers found no sustenance.')] },
            { number: 12, spans: [t('But when Jacob heard that there was corn in Egypt, he sent out our fathers first.')] },
            {
              number: 17,
              spans: [
                t('But when the time of the promise drew nigh, which God had sworn to Abraham, the people '),
                hg('grew and multiplied in Egypt', 'acts7-growth'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-joseph-envy',
          html: 'Joseph is sold into slavery by his own brothers—moved by envy, by the simple fact that he is favored. Yet God does not abandon him in Egypt. This is the pattern Stephen wants to highlight: rejection does not separate the chosen from God. God is with Joseph in the pit, in Potiphar&apos;s house, in prison, and finally in the palace. The brothers tried to bury him. God raised him up.',
        },
        {
          kind: 'commentary',
          id: 'acts7-growth',
          html: 'From the sons of Jacob, now in Egypt, a nation grows. The promise God made to Abraham—that his descendants would be as countless as stars—is being fulfilled, even in exile. This growth is the work of God, not the ambition of men. The people multiply because God keeps His covenant, not because they have earned it.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-joseph',
          title: 'Christ Connection — Rejected Brother, Exalted Savior',
          html: 'Joseph is betrayed by his brothers, cast into a pit, and brought low. Yet he is exalted to Pharaoh&apos;s right hand and becomes the savior of his family in their famine. Jesus is betrayed, handed over to death, and brought to the grave. He is raised and exalted to God&apos;s right hand, and becomes the savior of all who come to Him. &ldquo;Ye thought evil against me; but God meant it unto good&rdquo; (Genesis 50:20) is the pattern Stephen is naming.',
        },
        {
          kind: 'carry',
          html: 'Joseph&apos;s brothers rejected him because they envied what they saw in him. If you have been rejected, overlooked, or cast out, it may not be because something is wrong with you. It may be because God has seen something in you that others fear. Joseph was exalted not despite his rejection but often through it.',
        },
        {
          kind: 'reflection',
          id: 'acts7-joseph-reflection',
          prompt: 'How does Joseph&apos;s story of being rejected and then exalted change how you think about your own seasons of rejection?',
        },
      ],
    },

    /* ─── Acts 7:20–36 — Moses Thrust Away Then Sent ──────────────────── */
    {
      ref: 'Acts 7:20–36',
      title: 'Moses Thrust Away Then Sent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('In which time Moses was born, and was exceeding fair, and nourished up in his father&apos;s house three months:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And when he was cast out, Pharaoh&apos;s daughter took him up, and nourished him for her own son.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For he supposed his brethren would have understood how that God by his hand would deliver them: but they understood not.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Then fled Moses at this saying, and was a stranger in the land of Madian, where he begat two sons.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And when forty years were expired, '),
                hy('there appeared to him in the wilderness of mount Sina an angel of the Lord in a flame of fire in a bush', 'acts7-greek-theophany'),
                t(';'),
              ],
            },
            {
              number: 35,
              spans: [
                t('This Moses whom they refused, saying, Who made thee a ruler and a judge? the same did God send to be a ruler and a deliverer by the hand of the angel which appeared to him in the bush.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-moses-rejected',
          html: 'Stephen traces a second pattern: Moses, like Joseph, is rejected by his own people. He attempts to deliver them, and they respond with suspicion. &ldquo;Who made thee a ruler and a judge?&rdquo; they ask. Wounded, Moses flees to the wilderness for forty years. But in the wilderness, God appears to him. In exile, he is called.',
        },
        {
          kind: 'greek',
          id: 'acts7-greek-theophany',
          title: 'Theophany — God in the Bush',
          script: 'θεοφάνεια',
          translit: '<strong>theophania</strong> · a manifestation or appearance of God',
          description: 'God does not send a message from heaven. He appears—in fire, in a bush, in person. The appearance is visual and undeniable. This is how God calls those He means to send. The fire marks the place as holy, the bush as set apart.',
        },
        {
          kind: 'commentary',
          id: 'acts7-burning-bush',
          html: 'The burning bush does not consume itself. This is a sign of God&apos;s presence: He enters into the creation, sets a thing on fire, and it is not destroyed but transfigured. So too will Moses be set on fire—called, commissioned, transformed—and sent back to deliver the very people who rejected him.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-moses',
          title: 'Christ Connection — Rejected Deliverer, Raised Redeemer',
          html: 'Moses is rejected, exiled, and called from the wilderness. Jesus is rejected, executed, and raised from the dead. Both are sent to deliver their people. &ldquo;A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear&rdquo; (Acts 7:37, quoting Deuteronomy 18:15). Stephen is saying: the prophet you rejected, the one you killed—He is the one like Moses that God said He would raise up.',
        },
        {
          kind: 'carry',
          html: 'If you have been rejected, exiled, or cast out, your exile is not the end of your calling. God appears in the wilderness. He meets us where we are abandoned and, from that very place of emptiness, sends us forward with a purpose larger than ourselves.',
        },
        {
          kind: 'reflection',
          id: 'acts7-moses-reflection',
          prompt: 'What is the wilderness in your life—the place where you have been rejected or set apart? What might God be calling you to do from that place?',
        },
      ],
    },

    /* ─── Acts 7:37–43 — The Wilderness Tabernacle ────────────────────── */
    {
      ref: 'Acts 7:37–43',
      title: 'The Wilderness Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 38,
              spans: [
                t('This is he, that was in the church in the wilderness with the angel which spake to him in the mount Sina, and with our fathers: who received the lively '),
                hg('oracles of God', 'acts7-oracles'),
                t(' to give unto us:'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Whom our fathers would not obey, but '),
                hg('thrust him from them, and in their hearts turned back again into Egypt', 'acts7-heart-turned'),
                t(';'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And they made a calf in those days, and offered sacrifice unto the idol, and rejoiced in the works of their own hands.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Yea, ye took up the tabernacle of Moloch, and the star of your god Remphan, figures which ye made to worship them: and I will carry you away beyond Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-oracles',
          html: 'Moses receives from God &ldquo;the lively oracles&rdquo;—the living words, the words that give life. Not stone tablets alone, but a whole system of instruction, covenant, law, and worship. These are the foundations of Israel&apos;s faith. Yet the people reject them.',
        },
        {
          kind: 'commentary',
          id: 'acts7-heart-turned',
          html: 'The fathers do not just physically turn away from Moses in the wilderness. Their hearts turn. They long for Egypt—for slavery, for the known, for the gods they could see and touch. The calf they make is not a new god. It is a visible, tangible form of the old gods they had left behind. They want a god they can control, not a God who demands covenant faithfulness.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-oracles',
          title: 'Christ Connection — Rejected Word, Living Incarnation',
          html: 'Moses carries God&apos;s living oracles, and the people reject them. Jesus is &ldquo;the Word made flesh&rdquo; (John 1:14)—not written on tablets, but living, speaking, present. Yet He too is rejected. The pattern holds. The people turn away from the one who brings them the very words that give life.',
        },
        {
          kind: 'carry',
          html: 'When you find yourself wishing God would be different—more controllable, more visible, more like the idols your friends worship—remember Israel in the wilderness. The calf looked safer than the cloud. But the cloud led to the Promised Land. The calf led nowhere.',
        },
        {
          kind: 'reflection',
          id: 'acts7-idols-reflection',
          prompt: 'What are the calves in your own heart—the things you turn toward instead of trusting the God you cannot see?',
        },
      ],
    },

    /* ─── Acts 7:44–50 — Solomon&apos;s House and Dwellings Not Made by Hands ── */
    {
      ref: 'Acts 7:44–50',
      title: 'Solomon&apos;s House and the God Who Cannot Be Contained',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 44,
              spans: [
                t('Our fathers had the tabernacle of witness in the wilderness, as he had appointed, speaking unto Moses, that he should make it according to the fashion that he had seen.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('Which also our fathers that came after brought in with Jesus into the possession of the Gentiles, whom God drave out before the face of our fathers, unto the days of David;'),
              ],
            },
            {
              number: 46,
              spans: [
                t('Who found favour before God, and desired to find a tabernacle for the God of Jacob.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('But '),
                hg('Solomon built him an house', 'acts7-solomon-house'),
                t('.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('Howbeit the most High dwelleth not in temples made with hands; as saith the prophet, '),
                hy('Heaven is my throne, and earth is my footstool', 'acts7-throne-footstool'),
                t(': what house will ye build me? saith the Lord: or what is the place of my rest?'),
              ],
            },
            {
              number: 50,
              spans: [
                t('Hath not my hand made all these things?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-solomon-house',
          html: 'The arc of the tabernacle to the temple is meant to show progress, stability, permanence. A tent moves; a house stands. David dreams of building God a house, and Solomon does. It is magnificent—cedar and gold, stone and labor. But Stephen pauses here and lets the silence do the work. God Himself breaks in: this house cannot contain me.',
        },
        {
          kind: 'greek',
          id: 'acts7-greek-katoikeo',
          title: 'Katoikeo — Dwell, Inhabit',
          script: 'κατοικέω',
          translit: '<strong>katoikeo</strong> · to dwell, reside, settle in a place',
          description: 'The word means to settle, to be at home. Stephen is implying that God does not settle, does not stay put in one building, no matter how beautiful. God is not bound to a location. His presence cannot be cordoned off.',
        },
        {
          kind: 'commentary',
          id: 'acts7-throne-footstool',
          html: 'God&apos;s throne is heaven itself. The entire earth is His footstool. How, then, could a building made by human hands contain Him? The rhetoric is devastating. Stephen is not attacking the temple. He is expanding the vision of what God is. God cannot be localized, institutionalized, or controlled by a place—even a holy place. The most High dwells not in buildings but in hearts, in the Spirit-filled gathering of believers.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-tabernacle',
          title: 'Christ Connection — The Temple Made Without Hands',
          html: 'Jesus says of His body: &ldquo;Destroy this temple, and in three days I will raise it up&rdquo; (John 2:19). His body is the dwelling place of God—not made with hands, but incarnate. And after His resurrection, His body the church becomes the temple. &ldquo;Know ye not that ye are the temple of the Holy Ghost?&rdquo; (1 Corinthians 6:19). Stephen is preparing his audience for this revelation: God does not dwell in buildings but in believers.',
        },
        {
          kind: 'carry',
          html: 'You are not seeking God in a location. You do not find Him by traveling to a particular place or building. He dwells in the Spirit, and the Spirit dwells in those who believe. You, as a follower of Jesus, are the dwelling place of God. That is your honor and your calling.',
        },
        {
          kind: 'reflection',
          id: 'acts7-dwelling-reflection',
          prompt: 'If God&apos;s throne is heaven and the whole earth is His footstool, where do you seek Him? What would change if you believed He dwells in your heart?',
        },
      ],
    },

    /* ─── Acts 7:51–53 — "Ye Stiffnecked": The Pattern Laid Bare ───────── */
    {
      ref: 'Acts 7:51–53',
      title: 'The Stiffnecked Resistance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 51,
              spans: [
                t('Ye '),
                hy('stiffnecked', 'acts7-sklerotrachelos'),
                t(' and uncircumcised in heart and ears, ye do always '),
                hg('resist the Holy Ghost', 'acts7-resist-spirit'),
                t(': as your fathers did, so do ye.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('Which of the prophets have not your fathers persecuted? and they have slain them which shewed before of the coming of the Just One; of whom ye have been now the betrayers and murderers:'),
              ],
            },
            {
              number: 53,
              spans: [
                t('Who have received the law by the disposition of angels, and have not kept it.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'acts7-sklerotrachelos',
          title: 'Sklerotrachelos — Stiffnecked',
          script: 'σκληροτράχηλος',
          translit: '<strong>sklerotrachelos</strong> · stiff-necked, stubborn, unmovable',
          description: 'A neck so rigid it cannot turn, bend, or yield. The word combines <em>skleros</em> (hard, harsh) and <em>trachelos</em> (neck). The image is of animals that refuse the yoke, people locked in position, incapable of turning toward what they are being called to face.',
        },
        {
          kind: 'commentary',
          id: 'acts7-resist-spirit',
          html: 'Stephen does not accuse them of disbelief. He accuses them of resistance—of actively resisting the Holy Spirit. This is not passive disagreement. It is opposition to the very presence of God working in the world. And it is not new. The council&apos;s fathers did the same. They killed the prophets who came to warn them, who came to bring them back. Now, faced with the risen Jesus witnessed by a Spirit-filled young man, they resist again.',
        },
        {
          kind: 'commentary',
          id: 'acts7-killed-prophets',
          html: 'The prophets were killed because they spoke truth the people did not want to hear. And now the council faces the ultimate truth—that the one they killed, Jesus, is the Messiah they were supposed to recognize. In rejecting His witness through Stephen, they are continuing a centuries-long pattern of killing the messengers God sends.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-prophets',
          title: 'Christ Connection — The Prophet Rejected and Vindicated',
          html: 'Jesus is &ldquo;the Just One&rdquo; the prophets foretold. He is killed by the very people who claimed to guard the covenant. But His resurrection—witnessed by Stephen and the early church—vindicates Him. Like the prophets before Him, Jesus is rejected. But unlike them, He is raised and seated at God&apos;s right hand. In rejecting Jesus, the council is resisting the culmination of everything God has been doing through the prophets.',
        },
        {
          kind: 'carry',
          html: 'When truth confronts you, you have a choice: to turn and hear it, or to stiffen your neck against it. The stiffening happens gradually, in small refusals. It becomes harder each time. If the Spirit is speaking to you, even through words that wound or challenge, the only way forward is not to harden but to soften, to turn, to listen.',
        },
        {
          kind: 'reflection',
          id: 'acts7-resistance-reflection',
          prompt: 'Where are you resisting the Holy Spirit? What would it cost to soften instead of stiffen?',
        },
      ],
    },

    /* ─── Acts 7:54–56 — The Son of Man Standing ──────────────────────── */
    {
      ref: 'Acts 7:54–56',
      title: 'The Son of Man Standing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 54,
              spans: [
                t('When they heard these things, they were cut to the heart, and they gnashed on him with their teeth.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('But he, being full of the '),
                hy('Holy Ghost', 'acts7-greek-pneuma'),
                t(', looked up stedfastly into heaven, and saw the '),
                hp('glory of God, and Jesus standing on the right hand of God', 'acts7-standing-christ'),
                t(';'),
              ],
            },
            {
              number: 56,
              spans: [
                t('And said, Behold, I see the heavens opened, and the '),
                hp('Son of man standing on the right hand of God', 'acts7-standing-christ'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-heavens-opened',
          html: 'As the council rages, the heavens split open for Stephen. This is the inverse of the temple: not a building on earth that tries to reach heaven, but heaven itself breaking through to earth, opening to show a man the glory that no synagogue, no temple, no human institution can contain. In his moment of abandonment, Stephen is not alone. The heavens open.',
        },
        {
          kind: 'greek',
          id: 'acts7-greek-pneuma',
          title: 'Pneuma — Spirit',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit, breath, the vital principle; the Holy Spirit',
          description: 'The same word describes breath, wind, spirit, and the Holy Spirit. It is what animates, what moves, what cannot be grasped but whose effects are visible. Stephen is full of it—overflowing with the presence and power of God.',
        },
        {
          kind: 'commentary',
          id: 'acts7-standing-not-sitting',
          html: 'Jesus stands. Throughout the Gospels and Paul&apos;s letters, Jesus is seated at the right hand of God—enthroned, at rest in His victory. Here, alone in the New Testament outside the Gospels, He stands. The posture is significant. He stands to receive Stephen. He stands as a witness, as one who will testify. He stands in honor of the faithful martyr, the first one to die for His name.',
        },
        {
          kind: 'christ',
          id: 'acts7-standing-christ',
          title: 'Christ Connection — The Standing Witness',
          html: 'Jesus does not sit distant and unmoved. He stands. Stephen is faithful unto death, and the Son of Man rises to meet him. This is the only time in the New Testament (outside the Gospels) that Jesus is shown standing rather than sitting at God&apos;s right hand. The detail is a gift: Christ honors those who honor Him. When we are faithful in the face of hostility, Jesus stands with us.',
        },
        {
          kind: 'carry',
          html: 'When everything and everyone around you is closing in, the heavens may open. You may not see it with your eyes, but if you are full of the Spirit, you will see it in your spirit. Jesus stands for you. He rises to meet your faithfulness. You are not forgotten. You are not alone.',
        },
        {
          kind: 'reflection',
          id: 'acts7-standing-reflection',
          prompt: 'What does it mean to you that Jesus rises to stand for Stephen? If you were facing hostility or death for faith, what comfort would that image bring?',
        },
        {
          kind: 'artwork',
          matchTitle: /stephen|vision|heaven/i,
          caption: 'Acts 7:54–56 · The Son of Man Standing',
        },
      ],
    },

    /* ─── Acts 7:57–60 — Stephen&apos;s Death and Forgiveness ───────────────── */
    {
      ref: 'Acts 7:57–60',
      title: 'Stephen&apos;s Death and Forgiveness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 57,
              spans: [
                t('Then they cried out with a loud voice, and stopped their ears, and ran upon him with one accord,'),
              ],
            },
            {
              number: 58,
              spans: [
                t('And cast him out of the city, and stoned him: and the witnesses laid down their clothes at a young man&apos;s feet, whose name was Saul.'),
              ],
            },
            {
              number: 59,
              spans: [
                t('And they stoned Stephen, calling upon God, and saying, '),
                hp('Lord Jesus, receive my spirit', 'acts7-receive-spirit'),
                t(';'),
              ],
            },
            {
              number: 60,
              spans: [
                t('And he kneeled down, and cried with a loud voice, '),
                hp('Lord, lay not this sin to their charge', 'acts7-forgive-killers'),
                t('. And when he had said this, he fell asleep.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-stoning-saul',
          html: 'The council closes its ears. Literally—they stop their ears so they cannot hear another word. Then they drag Stephen outside the walls and stone him. And at the center of the scene stands a young man named Saul, guarding the cloaks of those who kill him. In this moment, a future apostle stands as an accomplice to the first Christian martyr. The irony cuts deep. The grace cuts deeper.',
        },
        {
          kind: 'commentary',
          id: 'acts7-receive-spirit',
          html: 'Stephen dies the way Jesus died, with words that echo the cross. On the cross, Jesus says, &ldquo;Father, into thy hands I commend my spirit&rdquo; (Luke 23:46). Stephen, with his last breath, says to Jesus, &ldquo;Receive my spirit.&rdquo; The same prayer, directed to the risen Jesus. In death, Stephen honors the one the council killed.',
        },
        {
          kind: 'greek',
          id: 'acts7-greek-paradidomi',
          title: 'Paradidomi — Hand Over, Entrust',
          script: 'παραδίδωμι',
          translit: '<strong>paradidomi</strong> · to hand over, entrust, deliver, betray',
          description: 'The same word is used of Jesus being handed over to death. But here Stephen <em>hands over</em> his spirit to Jesus—an act of trust and surrender. It is the same word with an inverse meaning: not handed over to enemies, but handed over to the one who loves him.',
        },
        {
          kind: 'commentary',
          id: 'acts7-forgive-killers',
          html: 'And then the final word: &ldquo;Lord, lay not this sin to their charge.&rdquo; Stephen asks forgiveness for his killers while the stones are still falling. This is not resignation. This is not a plea that they be unpunished. This is Stephen, full of the Holy Ghost, extending grace to those who extend murder. He does what his Lord did: forgives them, even as they kill him.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-martyr',
          title: 'Christ Connection — The Martyr&apos;s Mercy',
          html: 'Stephen dies speaking the language of the cross. &ldquo;Lord, lay not this sin to their charge&rdquo; echoes Jesus: &ldquo;Father, forgive them; for they know not what they do&rdquo; (Luke 23:34). Stephen becomes the first Christian martyr—and his death is patterned on Christ&apos;s death, complete with forgiveness. He is not a victim of circumstance but a witness. Martyr and witness are the same word in Greek—<em>martys</em>. Stephen witnesses to Jesus by dying as Jesus died.',
        },
        {
          kind: 'carry',
          html: 'Stephen falls asleep—not because death is nothing, but because he does not fear it. He has seen the heavens open. He has seen Jesus standing for him. He has entrusted his spirit to the one who loves him. His last act is to forgive those who kill him. This is the shape of Christian faithfulness. This is what it looks like to die to self and to live for Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts7-forgiveness-reflection',
          prompt: 'Stephen forgives those who stone him. Is there anyone you need to forgive—perhaps someone who has deeply wounded you? What would forgiveness look like?',
        },
        {
          kind: 'artwork',
          matchTitle: /stephen|martyr|stoning/i,
          caption: 'Acts 7:57–60 · Stephen&apos;s Death and Forgiveness',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, lay not this sin to their charge.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 7 · Study Guide',
  },

  hasHebrew: false,
};
