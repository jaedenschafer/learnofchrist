import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 5 — Ananias and Sapphira, Apostolic Signs, Gamaliel's Counsel
 *
 * A couple sells their possessions but withholds part of the price. Both fall
 * dead. The apostles perform many signs. The council imprisons them, but an
 * angel frees them. Gamaliel urges restraint, and the apostles are released—
 * and rejoice that they are counted worthy to suffer for Christ&apos;s name.
 */
export const ACTS_5: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 5,

  estimatedMinutes: { beginner: 5, intermediate: 13, deep: 18 },
  opener: {
    matchTitle: /The Death of Ananias/i,
    caption: 'Acts 5',
  },
  intros: [
    'Acts 4 ended with the church giving all they had to the apostles, as need arose. It was a stunning witness to faith. But the very next chapter shows what happens when pretense slips in. Ananias and Sapphira sell their land and agree together to lie—to bring part of the price but claim they are giving all of it. They want the honor of complete sacrifice without the cost. Peter confronts them with a startling word: they have not lied to the apostles, they have lied to the Holy Ghost. Both fall dead. The judgment is swift. The silence in the church must have been total.',
    'Yet the apostles do not hide. They continue in Solomon&apos;s Porch, performing signs and wonders. The sick are laid in the streets. Peter&apos;s shadow passes over them and they are healed. The city fills with those seeking the apostles, and the Sanhedrin—jealous, afraid, losing control—has them all arrested. But an angel releases them from the prison. When dragged before the council the next day, Gamaliel rises. A doctor of the law, respected by all the people, he speaks a word of wisdom: if this is of men, it will fail; if it is of God, you cannot stop it. The apostles are beaten and released. And then comes the final, impossible thing: they rejoice. They are counting it joy to suffer shame for the name of Jesus.',
  ],

  sections: [
    /* ─── Acts 5:1–11 — The Severity of Pretense ──────────────────────── */
    {
      ref: 'Acts 5:1–11',
      title: 'The Severity of Pretense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'But a certain man named Ananias, with Sapphira his wife, sold a possession,'),
            plain(2, 'And kept back part of the price, his wife also being privy to it, and brought a certain part, and laid it at the apostles&apos; feet.'),
            plain(3, 'But Peter said, Ananias, why hath Satan filled thine heart to lie to the Holy Ghost, and to keep back part of the price of the land?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-notrequired',
          html:
            'Peter makes clear what Ananias and Sapphira may have misunderstood: the sale was not required. &ldquo;Whiles it remained, was it not thine own? and after it was sold, was it not in thine own power?&rdquo; (5:4). No one was forcing sacrifice. No law demanded it. The sin is not the withholding of money—it is the lie. They have seen the honor given to those who gave freely, and they have agreed together to pretend they gave all while keeping part back. They want the appearance of radical faith without its cost.',
        },
        {
          kind: 'greek',
          id: 'acts5-nosphizo',
          title: 'Nosphizo — Embezzle; Keep Back',
          script: 'νοσφίζομαι',
          translit: '<strong>nosphizo</strong> · embezzle; misappropriate; keep back what belongs to another',
          description:
            'The word carries a sense of guilty concealment—hiding something that should have been offered. In the LXX it describes the sin of Achan, who took forbidden things from Jericho and hid them among his possessions. The parallel is exact: a private taking from a corporate act of faith.',
        },
        {
          kind: 'commentary',
          id: 'acts5-lying',
          html:
            'Peter&apos;s accusation cuts straight to the heart: they have not lied to men; they have lied to the Holy Ghost[res:bibleodyssey-lying]. This is not about defrauding the church of money. It is about attempting to deceive the one who knows all hearts. &ldquo;Thou hast not lied unto men, but unto God&rdquo; (5:4). In the presence of the Spirit, pretense is not clever. It is the deepest foolishness.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'Whiles it remained, was it not thine own? and after it was sold, was it not in thine own power? why hast thou conceived this thing in thine heart? thou hast not lied unto men, but unto God.'),
            plain(5, 'And Ananias hearing these words fell down, and gave up the ghost: and great fear came on all them that heard these things.'),
            plain(6, 'And the young men arose, wound him up, and carried him out, and buried him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-judgment',
          html:
            'Ananias falls dead. No trial, no argument, no second chance. Within hours, Sapphira—not knowing what has happened—comes in and lies the same lie. She too falls dead. The judgment is stunning, and it seems harsh [res:sefaria-exodus-judgment]. But the apostles knew what was at stake. In the presence of the Holy Ghost, the integrity of the community matters absolutely. A lie that goes unnamed and unchallenged will spread. Truth-telling is not a courtesy; it is foundational to the church&apos;s life.',
        },
        {
          kind: 'christ',
          id: 'acts5-lying-to-god',
          title: 'Christ Connection — Lying to the Holy Spirit',
          html:
            'The Spirit dwells in the church as the very presence and power of the risen Christ. To lie to the Spirit is to lie to God. This echoes Jesus&apos;s words to the Pharisees: &ldquo;that which cometh out of the mouth cometh forth from the heart; and they defile the man. For out of the heart proceed evil thoughts, murders, adulteries, fornications&rdquo; (Matt. 15:18–19). But it also echoes the promise: the Spirit will guide the church into all truth (John 16:13). Where the Spirit is, truth-telling is not optional—it is the very atmosphere believers breathe.',
        },
        {
          kind: 'carry',
          html:
            'Ananias and Sapphira wanted the honor of sacrifice without its cost. Where in your own heart have you wanted the credit for a gift you were not fully willing to give? A sacrifice you told people about but did not fully make? A commitment you announced but did not keep? The judgment here is not on you—Christ bore that. But the lesson is written in blood: the presence of the Holy Spirit makes pretense impossible. You cannot hide in His presence. And you do not have to.',
        },
        {
          kind: 'reflection',
          id: 'acts5-pretense',
          prompt: 'Where are you tempted to want the appearance of faith without its cost? What would it mean to step into full honesty before God?',
        },
      ],
    },

    /* ─── Acts 5:12–16 — Many Signs; Peter&apos;s Shadow ──────────────────── */
    {
      ref: 'Acts 5:12–16',
      title: 'Many Signs and Wonders; The Shadow of Peter',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(12, 'And by the hands of the apostles were many signs and wonders wrought among the people; (and they were all with one accord in Solomon&apos;s porch.)'),
            plain(13, 'And of the rest durst no man join himself to them: but the people magnified them.'),
            plain(14, 'And believers were the more added to the Lord, multitudes both of men and women;)'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-signs-continue',
          html:
            'The severity of Ananias and Sapphira&apos;s judgment does not cause the apostles to hide or retreat. They continue in Solomon&apos;s Porch—the same place where they have been teaching openly. The signs and wonders multiply [res:cambridge-apostolic-signs-wonders]. The sick are brought out into the streets. Multitudes are added to the Lord. But there is a notable line: &ldquo;of the rest durst no man join himself to them.&rdquo; Some fear has entered. Not all of Jerusalem is rushing forward. But those who do believe are increasing, and they are serious.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(15, 'Insomuch that they brought forth the sick into the streets, and laid them on beds and couches, that at the least the shadow of Peter passing by might overshadow them.'),
            plain(16, 'There came also a multitude out of the cities round about unto Jerusalem, bringing sick folks, and them which were vexed with unclean spirits: and they were healed every one.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-shadow-peter',
          html:
            'The sick are laid in the streets and wait for Peter&apos;s shadow to pass over them. This detail is striking. Not Peter&apos;s touch, not even his prayer—his shadow. The image suggests that healing has become so abundant that it flows from Peter&apos;s very presence[res:bibleodyssey-prison]. But it also carries an echo: in the OT, the shadow of God is a shelter, a refuge (Ps. 91:1, &ldquo;He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty&rdquo;). The sick in Jerusalem are crowding to stand in the shadow of the apostles [res:theoi-healing-miracles-context] as they once crowded to stand under the shelter of God.',
        },
        {
          kind: 'greek',
          id: 'acts5-skia',
          title: 'Skia — Shadow',
          script: 'σκιά',
          translit: '<strong>skia</strong> · shadow; shade; a reflection or image of something real',
          description:
            'The shadow is not the thing itself—it is what the thing casts. Yet in Acts 5, the shadow carries power. This is a paradox the New Testament repeats: Christ is the substance; what we see now is shadow (Heb. 10:1). Yet the shadow of the apostles heals. Faith grasps the reality through what it sees.',
        },
        {
          kind: 'carry',
          html:
            'You may feel like you are living in a shadow—a shadow of what you once were, or what you hoped to be, or what someone else is. Acts 5 invites you to look at that shadow differently. These people were not disappointed to wait in the shadow of Peter. They came, they hoped, they were healed. The substance is Christ. But His power still flows, even through shadows, into real suffering. What shadow are you standing in today? What might change if you brought your deepest need and asked?',
        },
        {
          kind: 'reflection',
          id: 'acts5-shadow',
          prompt: 'Where do you see God&apos;s power touching you now—not in direct revelation, but in shadows and reflections? Where do you need to stop waiting and step forward?',
        },
        {
          kind: 'artwork',
          matchTitle: /heal/i,
          matchArtist: /tissot/i,
          caption: 'Acts 5:15–16 · Peter&apos;s Shadow',
        },
      ],
    },

    /* ─── Acts 5:17–25 — Jealousy and Imprisonment ────────────────────── */
    {
      ref: 'Acts 5:17–25',
      title: 'The Council Jealous; Arrested and Freed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(17, 'Then the high priest rose up, and all they that were with him, (which is the sect of the Sadducees,) and were filled with indignation,'),
            plain(18, 'And laid their hands on the apostles, and put them in the common prison.'),
            plain(19, 'But the angel of the Lord by night opened the prison doors, and brought them forth, and said,'),
            plain(20, 'Go, stand and speak in the temple to the people all the words of this life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-indignation',
          html:
            'The high priest and the Sadducees are &ldquo;filled with indignation.&rdquo; Not doctrinal objection or theological concern—pure jealousy. The apostles have become too influential. The crowds listen to them, not to the established religious leaders. The Sanhedrin sees itself losing control. They have tried warnings; now they try force. The apostles are thrown into the common prison, a jail for ordinary criminals.',
        },
        {
          kind: 'commentary',
          id: 'acts5-angel-opens',
          html:
            'In the night, an angel opens the prison doors[res:bibleodyssey-prison]. The apostles are not told to escape or hide. They are given a charge: &ldquo;Go, stand and speak in the temple to the people all the words of this life.&rdquo; This is not rescue for its own sake. It is a calling back to their post. The apostles are told to return—to the very place, at the very time, when they will face the council again.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(21, 'And when they heard that, they entered into the temple early in the morning, and taught. But the high priest came, and they that were with him, and called the council together, and all the senate of the children of Israel: and sent to the prison to have them brought.'),
            plain(22, 'But when the officers came, and opened the prison, they found them not in the prison. Then came the captain of the temple, and the chief priests, doubted of them whereunto this would grow.'),
            plain(23, 'Then came one and told them, Saying, Behold, the men whom ye put in prison are standing in the temple, and teaching the people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-boldness',
          html:
            'The apostles obey immediately. They return to the temple at dawn—the place of their arrest, in the sight of the Sanhedrin. It is not bravado or recklessness. It is obedience to a calling. When told to wait inside, they go outside. When imprisoned, they teach in the temple. The power at work in them is not fear-driven; it is calling-driven. They go because they have been told to go.',
        },
        {
          kind: 'carry',
          html:
            'When you are afraid—when the powers that be would prefer you silent—what do you do? The apostles were in prison. They were bound, confined, helpless. The ordinary response would have been to hide. Instead, they went back to the temple. They returned to the place of danger, because they had been called. What calling do you have that requires you to walk back into a place of fear? What would change if you trusted that the same God who opened the prison doors is with you?',
        },
        {
          kind: 'reflection',
          id: 'acts5-calling',
          prompt: 'What calling pulls you to do something dangerous or difficult? How does obedience differ from courage—and which one do you need right now?',
        },
      ],
    },

    /* ─── Acts 5:26–32 — Before the Council ───────────────────────────── */
    {
      ref: 'Acts 5:26–32',
      title: 'Before the Council: Obedience to God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(26, 'Then went the captain with the officers, and brought them without violence: for they feared the people, lest they should have been stoned.'),
            plain(27, 'And when they had brought them, they set them before the council: and the high priest asked them,'),
            plain(28, 'Saying, Did not we straitly command you that ye should not teach in this name? and, behold, ye have filled Jerusalem with your doctrine, and intend to bring this man&apos;s blood upon us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-fear',
          html:
            'The authorities cannot arrest the apostles with force. The people are on their side. So the apostles are brought without violence. And now the high priest[res:bibleodyssey-sanhedrin] poses the question that has been at the center since Acts began: the ban on teaching in the name of Jesus. The apostles have disobeyed a direct command. The high priest is right. And Peter&apos;s answer is simple and absolute.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(29, 'Then Peter and the other apostles answered and said, We ought to obey God rather than men.'),
            plain(30, 'The God of our fathers raised up Jesus, whom ye slew and hanged on a tree.'),
            plain(31, 'Him hath God exalted with his right hand to be a Prince and a Saviour, for to give repentance to Israel, and forgiveness of sins.'),
            plain(32, 'And we are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-obey-god',
          html:
            'Peter does not argue. He does not negotiate. &ldquo;We ought to obey God rather than men.&rdquo; This is the bedrock principle. When a human law contradicts the will of God, the believer&apos;s loyalty is not divided. It is absolute. It goes to the God who is higher. The apostles are not being disobedient to authority—they are being obedient to a higher Authority. They are not proud or defiant. They are simply bound by a loyalty that cannot be broken.',
        },
        {
          kind: 'greek',
          id: 'acts5-peitharchos',
          title: 'Peitharchos — Obedient; One who Obeys Authority',
          script: 'πειθαρχέω',
          translit: '<strong>peitharchos</strong> · obey; submit to authority; be persuaded to obey',
          description:
            'The apostles are not disobeying authority in general. They are obeying a higher authority. The Greek word carries a sense of being persuaded by a power greater than oneself. The apostles have been persuaded by the risen Christ. No earthly council can override that.',
        },
        {
          kind: 'commentary',
          id: 'acts5-exalted',
          html:
            'Peter&apos;s summary is stark: You killed Him. God raised Him. He is exalted at God&apos;s right hand as Prince and Saviour. He offers repentance and forgiveness. The apostles are His witnesses. And the Holy Ghost testifies to all of this—in the power of signs, in the boldness of the apostles, in the conviction that grips those who hear. The apostles are not alone. They are caught up in a work of God that moves through them but does not depend on them.',
        },
        {
          kind: 'carry',
          html:
            'Peter and the apostles stood before people with more power, more authority, more resources than they had. The natural response would have been to compromise, negotiate, find a middle way. Instead, Peter spoke an absolute: We obey God rather than men. There will be times in your life when that choice comes—not as dramatically perhaps, but as clearly. The lie you are pressured to tell. The loyalty you are asked to compromise. The word you are told to swallow. In those moments, Peter&apos;s word stands: your highest obedience belongs to the God who is higher.',
        },
        {
          kind: 'reflection',
          id: 'acts5-obedience',
          prompt: 'Where are you caught between obedience to human authority and obedience to God? What would it mean to choose the higher loyalty?',
        },
      ],
    },

    /* ─── Acts 5:33–39 — Gamaliel&apos;s Counsel ────────────────────────── */
    {
      ref: 'Acts 5:33–39',
      title: 'Gamaliel&apos;s Counsel: A Word of Caution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(33, 'When they heard that, they were cut to the heart, and took counsel to slay them.'),
            plain(34, 'Then stood there up one in the council, a Pharisee, named Gamaliel, a doctor of the law, had in reputation among all the people, and commanded to put the apostles forth a little space;'),
            plain(35, 'And said unto them, Ye men of Israel, take heed to yourselves what ye intend to do as touching these men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts-5-78mid-1',
          html:
            'Ananias and Sapphira fall dead for lying to the Holy Spirit; fear grips the whole church. From deception comes judgment; from judgment comes holiness.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(36, 'For before these days rose up Theudas, boasting himself to be somebody; to whom a number of men, about four hundred, joined themselves: which was slain; and all, as many as obeyed him, were scattered, and brought to nought.'),
            plain(37, 'After this man rose up Judas of Galilee in the days of the taxing, and drew away much people after him: he also perished; and all, even as many as were persuaded by him, were scattered.'),
            plain(38, 'And now I say unto you, Refrain from these men, and let them alone: for if this counsel or this work be of men, it will come to nought:'),
            plain(39, 'But if it be of God, ye cannot overthrow it; lest haply ye be found even to fight against God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-gamaliel',
          html:
            'The council is cut to the heart—not convicted by the gospel, but enraged by the apostles&apos; defiance. They want to put them to death. But then Gamaliel rises[res:sefaria-gamaliel]. He is a Pharisee, not a Sadducee. He is a doctor of the law, respected by all the people. And he speaks a word that, for all his unbelief, is profoundly wise: &ldquo;Refrain from these men, and let them alone.&rdquo; If their work is merely human, it will fail of its own accord. History is full of movements that flared and died. Theudas rose up with four hundred followers; he was slain, and his movement scattered. Judas of Galilee drew multitudes; he perished, and they scattered too. The test, Gamaliel says, is time. Some movements are of men; some are of God. You cannot always tell immediately. But you can watch.',
        },
        {
          kind: 'greek',
          id: 'acts5-boule',
          title: 'Boule — Counsel; Plan; Intention',
          script: 'βουλή',
          translit: '<strong>boule</strong> · counsel; deliberation; plan; the result of deliberation; the will of a person or a body',
          description:
            'Gamaliel asks: Is this the boule—the deliberate, purposed plan—of men, or of God? It is the question beneath every conflict. What is really happening here? Whose will is ultimately at work? The apostles knew: God&apos;s. Gamaliel offered a principle: Time will tell.',
        },
        {
          kind: 'christ',
          id: 'acts5-resurrection-witness',
          title: 'Christ Connection — Raised and Cannot Be Stopped',
          html:
            'Gamaliel unknowingly testifies to the truth. The apostles cannot be stopped because their Lord cannot be stopped. &ldquo;Jesus answered, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight&rdquo; (John 18:36). The kingdom Christ is building does not depend on political power or military might. It depends on the resurrection. And death could not hold it then; no earthly authority can hold it now. Gamaliel&apos;s counsel is wise precisely because it acknowledges a reality the council cannot see: some things are beyond human power to stop.',
        },
        {
          kind: 'carry',
          html:
            'The apostles and their work were opposed by the highest authority their world knew. The high priest, the Sanhedrin, the political powers—all aligned against them. Yet Gamaliel saw something the rage in the council could not: if this is truly of God, you cannot stop it. Where in your life do you face opposition to something you believe God has called you to? Where would it change things to step back and ask: Is this truly God&apos;s work? If so, no opposition will ultimately prevail. If not, even your effort will come to nothing. The test is not your effort. The test is whether God is in it.',
        },
        {
          kind: 'reflection',
          id: 'acts5-gamaliel-2',
          prompt: 'What work or calling in your life faces opposition? How might you trust that if it is of God, no opposition will ultimately prevail?',
        },
      ],
    },

    /* ─── Acts 5:40–42 — Beaten and Rejoicing ────────────────────────── */
    {
      ref: 'Acts 5:40–42',
      title: 'Beaten and Rejoicing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(40, 'And to him they agreed: and when they had called the apostles, and beaten them, they commanded that they should not speak in the name of Jesus, and let them go.'),
            plain(41, 'And they departed from the presence of the council, rejoicing that they were counted worthy to suffer shame for his name.'),
            plain(42, 'And daily in the temple, and in every house, they ceased not to teach and preach Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts5-beaten',
          html:
            'Gamaliel&apos;s wisdom prevails. The apostles are not killed. But they are beaten—publicly, officially beaten by the Sanhedrin. This is not a gentle correction. Beatings in the Jewish context of the day were brutal and humiliating. Yet the apostles do not emerge from this with anger, bitterness, or shame. They emerge rejoicing.',
        },
        {
          kind: 'commentary',
          id: 'acts5-worthy',
          html:
            'The apostles &ldquo;rejoiced that they were counted worthy to suffer shame for his name.&rdquo; This is not masochism or a martyr complex. It is the recognition of something profound: suffering for the gospel, far from being a defeat, is an honor. It is being included in the suffering of Christ. It demonstrates that faith is not a transaction—give this, get that. It is a relationship. Love is willing to suffer for its object. The apostles have learned to count such suffering joy.',
        },
        {
          kind: 'greek',
          id: 'acts5-chairo',
          title: 'Chairo — Rejoice; Be Glad; Hail',
          script: 'χαίρω',
          translit: '<strong>chairo</strong> · rejoice; be glad; welcome with joy; hail',
          description:
            'The apostles &ldquo;chairo-ed&rdquo;—they rejoiced, they were glad, they welcomed with joy the opportunity to suffer for Christ&apos;s name. It is the same verb Jesus uses when the Magi come to Him (Matt. 2:10, &ldquo;they rejoiced with exceeding great joy&rdquo;). Joy and gladness are the apostles&apos; natural response to persecution.',
        },
        {
          kind: 'commentary',
          id: 'acts5-cease-not',
          html:
            'And they &ldquo;ceased not to teach and preach Jesus Christ.&rdquo; The command to be silent has not worked. The imprisonment has not worked. The beating has not worked. The apostles simply continue. Daily in the temple, from house to house, they teach and preach. The authority of the Sanhedrin has been thoroughly undermined. The real power lies elsewhere.',
        },
        {
          kind: 'christ',
          id: 'acts5-worthy-suffer',
          title: 'Christ Connection — Counted Worthy to Suffer',
          html:
            'Jesus prepared the apostles for this moment. &ldquo;If the world hate you, ye know that it hated me before it hated you&rdquo; (John 15:18). &ldquo;Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad&rdquo; (Matt. 5:11–12). The apostles are not suffering because they have failed. They are suffering because they have succeeded in witnessing to the resurrection. And they are counted worthy. The measure of faith is not freedom from opposition. It is willingness to bear opposition for the sake of Christ. In that willingness, the apostles are most like Him.',
        },
        {
          kind: 'carry',
          html:
            'You may face opposition for your faith. It may not be beatings; it may be mockery, exclusion, loss of status, or simple loneliness. The world does not hate Christians because they have been weak or unclear. It hates them because they testify to something that turns the values of the world upside down. When opposition comes—and it comes—the apostles teach you where to look. They look not at the loss, but at what they are being included in. They are suffering for Christ&apos;s name. They are being made like Him. They count that joy. It is the most countercultural response possible. And it is true.',
        },
        {
          kind: 'reflection',
          id: 'acts5-suffering',
          prompt: 'How do you understand suffering for Christ&apos;s sake? If you were beaten today for your faith, would you be able to rejoice? What would need to change in you?',
        },
        {
          kind: 'artwork',
          matchTitle: /apostle|prisoner|bond/i,
          matchArtist: /tissot/i,
          caption: 'Acts 5:40–42 · Beaten and Rejoicing',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 5',
    quote:
      'And they departed from the presence of the council, rejoicing that they were counted worthy to suffer shame for his name. And daily in the temple, and in every house, they ceased not to teach and preach Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 5 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-lying',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Deception and Lying',
      url: 'https://www.bibleodyssey.org/dictionary/lying/',
      description: 'SBL entry on deception in Scripture, covering Ananias and Sapphira and the gravity of lying to the Holy Spirit.',
    },
    {
      id: 'bibleodyssey-sanhedrin',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Sanhedrin',
      url: 'https://www.bibleodyssey.org/dictionary/sanhedrin/',
      description: 'The Jewish council before which the apostles stood — its structure, authority, and role in Acts.',
    },
    {
      id: 'bibleodyssey-prison',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Prison and Miraculous Deliverance',
      url: 'https://www.bibleodyssey.org/dictionary/prison/',
      description: 'Biblical imprisonment and angelic intervention — the apostles freed from the common prison in Jerusalem.',
    },
    {
      id: 'sefaria-gamaliel',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Rabbinic Sanhedrin Tradition',
      url: 'https://sefaria.org/Sanhedrin?lang=bi',
      description: 'Mishnaic and Talmudic texts on the Sanhedrin, providing context for Gamaliel and apostolic judgment.',
    },
    {
      id: 'cambridge-apostolic-signs-wonders',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Apostolic Signs and Wonders',
      url: 'https://www.cambridge.org/core',
      description: 'Scholarly exploration of the signs and wonders performed by the apostles, their theological significance, and impact on early witness.',
    },
    {
      id: 'theoi-healing-miracles-context',
      kind: 'archive',
      source: 'Theoi',
      label: 'Greco-Roman Healing and Miracles',
      url: 'https://www.theoi.com',
      description: 'Ancient sources on miraculous healing practices, shadows, and divine intervention in Greco-Roman contexts paralleling apostolic signs.',
    },
    {
      id: 'sefaria-exodus-judgment',
      kind: 'study',
      source: 'Sefaria',
      label: 'Judgment and Divine Consequence',
      url: 'https://sefaria.org/Exodus?lang=bi',
      description: 'Torah and rabbinic texts exploring divine judgment and consequences for sin against God and the community.',
    },
  ],

  hasHebrew: false,
};
