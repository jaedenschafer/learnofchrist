import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 12 — James Killed, Peter Imprisoned, Herod Struck
 *
 * King Herod rises to oppress the church, killing James the apostle and
 * imprisoning Peter. The church prays without ceasing. An angel releases Peter
 * from his chains and prison. Meanwhile, Herod, in his pride, accepts divine
 * worship and is struck down by God&apos;s judgment—eaten by worms. Yet the word
 * of God continues to grow and multiply. The chapter is bookended by two power
 * displays: earthly tyranny that ends in worms, and heavenly deliverance that
 * ends with the gospel advancing.
 */
export const ACTS_12: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 12,

  intros: [
    'Acts 12 opens with a king and closes with a kingdom. Herod Agrippa I, the political power of Jerusalem, moves against the church with violence. He kills James, the brother of John—the first apostle to give his life for the name of Christ. Then he arrests Peter, planning the same fate. But the night before Peter&apos;s execution, something happens that no earthly power can stop: a prayer-answering God breaks the chains and walks Peter past the guards as though they are shadows.',
    'The chapter does not end with Peter&apos;s escape, though. It ends with Herod sitting in his royal robes, accepting worship as a god, and being struck down by an angel. He is eaten by worms. His body, like his authority, decays. And then comes the one sentence that holds the whole chapter together: &ldquo;But the word of God grew and multiplied.&rdquo; Persecution arrests James. Imprisonment releases Peter. Royal pride judges itself. But the word—the gospel itself—cannot be touched. It keeps growing.',
    'Two kinds of power are on display here. One rises up with a sword and falls with worms. The other is made flesh in prayer and faith, and it multiplies.',
  ],

  sections: [
    /* ─── Acts 12:1–3 — Herod Kills James ──────────────────────────────── */
    {
      ref: 'Acts 12:1–3',
      title: 'Herod Rises Up; James the First Martyr',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Now about that time Herod the king stretched forth his hands to vex the church.'),
            plain(2, 'And he killed James the brother of John with the sword.'),
            plain(3, 'And because he saw it pleased the Jews, he proceeded further to take Peter also. (Then were the days of unleavened bread.)'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-vex',
          html:
            'Herod &ldquo;stretched forth his hands to vex the church.&rdquo; The verb means to mistreat, to harass, to afflict. This is not passive tolerance. This is active persecution. Herod sees that killing an apostle &ldquo;pleased the Jews&rdquo;—or rather, pleased those in power who saw the church as a threat to their authority. A king learns quickly what buys favor: blood.',
        },
        {
          kind: 'commentary',
          id: 'acts12-james-sword',
          html:
            'James—&ldquo;the brother of John&rdquo;—is the first of the Twelve to die for the faith. Not by age or accident, but by the sword, because of his name. The Gospels show James as one of the &ldquo;sons of thunder&rdquo; (Mark 3:17), quick-tempered and zealous. Now his zeal has cost him his life. But his death does not silence the church. It only deepens the courage that will follow.',
        },
        {
          kind: 'greek',
          id: 'acts12-ekteinō',
          title: 'Ekteinō — Stretch Forth; Extend the Hand',
          script: 'ἐκτείνω',
          translit: '<strong>ekteinō</strong> · stretch out; extend; spread; reach toward',
          description:
            'The verb carries a sense of reaching out, of wielding power at a distance. Herod stretches forth his hand—he extends his authority to touch the church. It is the same verb used of Pilate stretching forth his hand to release Barabbas. Power reaches out to strike.',
        },
        {
          kind: 'carry',
          html:
            'When persecution comes—and it comes in many forms—your first response might be fear. But Acts shows you something else: persecution cannot touch the real life of the church. It can take one apostle, but it cannot take the faith of the Twelve. It can cage a man, but it cannot cage the prayer that rises for him. Where in your own life do you face opposition for your faith? The apostles teach you that such opposition, far from being a sign that you are abandoned, is a sign that you are following the One who was opposed.',
        },
        {
          kind: 'reflection',
          id: 'acts12-persecution',
          prompt: 'What kind of opposition have you faced for your faith? How does James&apos;s death change the way you think about that opposition?',
        },
        {
          kind: 'artwork',
          matchTitle: /james|martyr|sword|kill/i,
          caption: 'Acts 12:1–2 · James the First Apostle Martyr',
        },
      ],
    },

    /* ─── Acts 12:4–6 — Peter Arrested at Passover ─────────────────────── */
    {
      ref: 'Acts 12:4–6',
      title: 'Peter Arrested at Passover; Guards and Chains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(4, 'And when he had apprehended him, he put him in prison, and delivered him to four quaternions of soldiers to keep him: intending after Easter to bring him forth to the people.'),
            plain(5, 'Peter therefore was kept in prison: but prayer was made without ceasing of the church unto God for him.'),
            plain(6, 'And when Herod would have brought him forth, the same night Peter was sleeping between two soldiers, bound with two chains: and the keepers also before the door kept the prison.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-passover-timing',
          html:
            'Peter is arrested during the days of unleavened bread—Passover. This is not accidental. The festival commemorates Israel&apos;s deliverance from Egypt, when the angel of the Lord passed over the homes of the faithful. Now, in a locked prison, at the very festival that celebrates liberation, another deliverance is about to unfold. The timing is the first hint of what God is about to do.',
        },
        {
          kind: 'commentary',
          id: 'acts12-security',
          html:
            'Herod is taking no chances with Peter. Four quaternions of soldiers—sixteen men total—guard him. Peter is bound with two chains. But Herod has forgotten something: he can bind a man, but he cannot bind prayer. He can post guards, but he cannot guard against God.',
        },
        {
          kind: 'greek',
          id: 'acts12-proseuchē',
          title: 'Proseuchē — Prayer; Earnest Supplication',
          script: 'προσευχή',
          translit: '<strong>proseuchē</strong> · prayer; a place of prayer; earnest petition; intercession',
          description:
            'The church prays &ldquo;without ceasing.&rdquo; Not once, not occasionally, but continuously. In Greek culture, proseuchē often referred to a sacred place—a prayer meeting house. Here, the whole church has become a place of prayer. The entire community is lifted into intercession for Peter&apos;s life.',
        },
        {
          kind: 'commentary',
          id: 'acts12-prayer-without-ceasing',
          html:
            'The church does not panic. It does not run. It does not compromise. It prays. The same prayer that answered at Pentecost, that turned Saul into Paul, that healed the lame beggar at the temple gate—that prayer is now made for Peter. And the body of Christ is united in one request: Lord, deliver our brother.',
        },
        {
          kind: 'carry',
          html:
            'You have prayed for something and felt the answer was slow in coming, or perhaps has not come at all. Acts 12 teaches you that prayer is not powerless. The church&apos;s intercession for Peter was not a sentimental gesture. It was the cry of the body of Christ, and God heard it. What are you praying for without ceasing? What answer are you waiting for that may arrive, as Peter&apos;s did, in a way you did not expect?',
        },
        {
          kind: 'reflection',
          id: 'acts12-corporate-prayer',
          prompt: 'When have you been part of a church or community praying without ceasing for someone? What happened?',
        },
      ],
    },

    /* ─── Acts 12:7–10 — The Angel and the Chains ──────────────────────── */
    {
      ref: 'Acts 12:7–10',
      title: 'The Angel Comes; Chains Fall; Peter Walks Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(7, 'And, behold, the angel of the Lord came upon him, and a light shined in the prison: and he smote Peter on the side, and raised him up, saying, Arise up quickly. And his chains fell off from his hands.'),
            plain(8, 'And the angel said unto him, Gird thyself, and bind on thy sandals. And so he did. And he saith unto him, Cast about thee thy garment, and follow me.'),
            plain(9, 'And he went out, and followed him; and wist not that it was true which was done by the angel; but thought he saw a vision.'),
            plain(10, 'When they were past the first and the second ward, they came unto the iron gate that leadeth unto the city; which opened to them of his own accord: and they went out, and passed on through one street; and forthwith the angel departed from him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-angel-appears',
          html:
            'In the darkness of the prison, light appears. An angel is there. Peter is sleeping between two guards, chained to both of them. But the angel smites him on the side—not to harm him, but to wake him. &ldquo;Arise up quickly.&rdquo; And in that moment, the chains fall off. Two Roman soldiers, two chains, a locked prison—and none of it can hold him now.',
        },
        {
          kind: 'greek',
          id: 'acts12-angelos',
          title: 'Angelos — Messenger; Angel; One Sent',
          script: 'ἄγγελος',
          translit: '<strong>angelos</strong> · messenger; angel; one sent on a mission from God',
          description:
            'An angelos is not a mythological creature or a spiritual abstraction. It is a messenger sent on God&apos;s business. This angel has one task: to bring Peter out. And it does so with practical, step-by-step instructions: Rise. Gird yourself. Bind your sandals. Cast about your garment. Follow. God&apos;s deliverance comes with direction.',
        },
        {
          kind: 'commentary',
          id: 'acts12-orderly-escape',
          html:
            'The escape is not chaotic or miraculous in the sense of being magical. Peter dresses. He follows. They walk past the first guard, past the second. They come to the iron gate—the outer barrier of the prison. It opens of its own accord. Then the angel leaves him. Peter is on his own now, free in the city, but unsure if what has happened is real or a vision.',
        },
        {
          kind: 'greek',
          id: 'acts12-desmos',
          title: 'Desmos — Bond; Chain; Imprisonment',
          script: 'δεσμός',
          translit: '<strong>desmos</strong> · chain; bond; imprisonment; anything binding or confining',
          description:
            'Peter&apos;s chains fall off. But the deeper truth is that the bond of fear falls off as well. He walks past guards as if they are not there. Physical chains have released; spiritual freedom follows.',
        },
        {
          kind: 'christ',
          id: 'acts12-passover-freed',
          title: 'Christ Connection — Passover Deliverance Echoed',
          html:
            'Peter&apos;s release at Passover is a deliberate echo of Christ&apos;s own Passover deliverance from death. As the angel freed Peter from his chains, so the resurrection freed Jesus from the grave. Both happen at the festival that celebrates liberation. Both involve light breaking into darkness. Both happen while guards stand watch—unable to prevent what God is doing. Peter&apos;s release is a living parable of the Easter resurrection: the chains fall, the guards cannot stop it, the prisoner walks free. And like the disciples fleeing the tomb, Peter wonders at first whether it is real.',
          },
        {
          kind: 'carry',
          html:
            'Peter walks past two sleeping soldiers, through an iron gate that opens of its own accord, into the city. He is free but does not yet believe it. How many times have you been freed from something—fear, shame, a false belief about yourself—but continued walking as if you were still bound? The angel had released him. The chains had fallen. The gate had opened. But Peter needed to see the reality: &ldquo;Now I know of a surety, that the Lord hath sent his angel.&rdquo; What chains are you still wearing that Christ has already broken?',
        },
        {
          kind: 'reflection',
          id: 'acts12-freedom',
          prompt: 'What prison—literal or spiritual—have you been released from? How did you know it was real?',
        },
        {
          kind: 'artwork',
          matchTitle: /prison|peter|angel|chain|release/i,
          matchArtist: /tissot|mctaggart/i,
          caption: 'Acts 12:7–10 · The Angel Frees Peter',
        },
      ],
    },

    /* ─── Acts 12:11–16 — "I Know of a Surety"; Rhoda&apos;s Joy ────────────── */
    {
      ref: 'Acts 12:11–16',
      title: '&ldquo;I Know of a Surety&rdquo;; Rhoda at the Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(11, 'And when Peter was come to himself, he said, Now I know of a surety, that the Lord hath sent his angel, and hath delivered me out of the hand of Herod, and from all the expectation of the people of the Jews.'),
            plain(12, 'And when he had considered the thing, he came to the house of Mary the mother of John, whose surname was Mark; where many were gathered together praying.'),
            plain(13, 'And as Peter knocked at the door of the gate, a damsel came to hearken, named Rhoda.'),
            plain(14, 'And when she knew Peter&apos;s voice, she was so glad, that for joy she opened not the gate, but ran in, and told them that Peter stood before the gate.'),
            plain(15, 'And they said unto her, Thou art mad. But she constantly affirmed that it was even so. Then said they, It is his angel.'),
            plain(16, 'But Peter continued knocking: and when they had opened unto him, they saw him, and were amazed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-surety',
          html:
            'Peter walks through the city in the pre-dawn darkness, and as he walks, the reality settles on him: &ldquo;Now I know of a surety, that the Lord hath sent his angel, and hath delivered me.&rdquo; He is no longer wondering if it is a vision. He understands: God has acted. The Lord has sent His messenger. The deliverance is real.',
        },
        {
          kind: 'commentary',
          id: 'acts12-marys-house',
          html:
            'Peter comes to the house of Mary, the mother of John Mark, the very person who will later write the Gospel account we call Mark. The church is gathered in this house, praying without ceasing for Peter&apos;s release. They are in the middle of urgent prayer when the answer stands at their door.',
        },
        {
          kind: 'commentary',
          id: 'acts12-rhoda-joy',
          html:
            'A servant girl named Rhoda hears Peter&apos;s voice at the gate. She is so glad—so filled with joy—that she forgets to open the gate. Instead, she runs inside to tell the others. For joy, she leaves Peter outside. It is a perfect picture of the human tendency to let emotion override sense. But it is also the picture of spontaneous, unreasoning joy. Rhoda does not calculate or verify. She hears Peter&apos;s voice and her heart knows: he is alive, he is free, he is here.',
        },
        {
          kind: 'greek',
          id: 'acts12-chara',
          title: 'Chara — Joy; Gladness; Delight',
          script: 'χαρά',
          translit: '<strong>chara</strong> · joy; gladness; exultation; the emotion of deep delight',
          description:
            'Rhoda is filled with chara—with joy so complete it overflows her normal sense. The church is praying; the answer arrives; and Rhoda&apos;s joy is so genuine it cascades through her whole being. Joy is the Christian&apos;s natural response when God acts.',
        },
        {
          kind: 'commentary',
          id: 'acts12-disbelief',
          html:
            'The church does not believe her. &ldquo;Thou art mad,&rdquo; they say. Even as they are praying for Peter&apos;s release, they cannot believe that he has been released. Even as they cry out for deliverance, they assume it will not come. This is not weakness—it is the measure of how impossible Peter&apos;s situation seemed. The only thing Herod can do with Peter is execute him. Yet here he is, knocking at the door, alive.',
        },
        {
          kind: 'carry',
          html:
            'The church prays, but the church does not believe the prayer is answered. You know this feeling. You pray. You pray earnestly, urgently, without ceasing. And then the answer comes, and you do not recognize it. The job offer arrives and you think it is not good enough. The person you love comes back and you think it is a mistake. The test comes back clear and you think the lab made an error. Acts 12 teaches you something critical: if you are praying for something, you must also be ready to recognize the answer when it comes. You must train your heart to believe that God listens. That He acts. That the knocking at your door may be the very thing you have been crying out for.',
        },
        {
          kind: 'reflection',
          id: 'acts12-belief',
          prompt: 'When have you prayed for something and then failed to recognize the answer when it came? What would it mean to pray with both urgency and faith in the answer?',
        },
      ],
    },

    /* ─── Acts 12:17 — "Tell These Things unto James and the Brethren" ──── */
    {
      ref: 'Acts 12:17',
      title: '&ldquo;Tell These Things unto James&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(17, 'But he, beckoning unto them with the hand to hold their peace, declared unto them how the Lord had brought him out of the prison. And he said, Go shew these things unto James, and to the brethren. And he departed, and went into another place.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-james-brother',
          html:
            'Peter&apos;s first act after his release is to tell the church what has happened. And his first instruction is to tell James. But which James? Not the James who was killed by Herod&apos;s sword—that James is already dead. This is James, the brother of Jesus, who has become a leader of the Jerusalem church and will preside over the church council in chapter 15. Peter is saying: Tell the leaders. Tell the mother church. Let Jerusalem know that what Herod meant for death, God has turned into deliverance.',
        },
        {
          kind: 'commentary',
          id: 'acts12-apostolic-flight',
          html:
            'Peter then &ldquo;departed, and went into another place.&rdquo; This is not flight motivated by cowardice. This is strategic withdrawal. With Herod actively hunting the apostles, Peter leaves Jerusalem to protect both himself and the church. His departure allows the Jerusalem church to continue without being a target. Sometimes following Jesus means staying. Sometimes it means going. Peter knows the difference.',
        },
        {
          kind: 'christ',
          id: 'acts12-jesus-brother-james',
          title: 'Christ Connection — James, the Brother Who Became Leader',
          html:
            'James, the brother of Jesus, did not believe in Jesus during His ministry (John 7:5). Yet after the resurrection, James became a pillar of the Jerusalem church (Gal. 2:9) and eventually led it. Peter&apos;s instruction to tell James shows how the resurrection transformed not only the apostles but the family of Jesus itself. Christ appeared to James (1 Cor. 15:7), and James&apos;s faith became unshakable. He would eventually be martyred for that faith, leaving his own legacy of faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'Peter obeys the call to witness. He tells what God has done. And then he does the harder thing: he leaves. He does not linger for thanksgiving. He does not take credit for surviving. He passes the word to the church and moves on. What God has done in your life is not meant to be hidden. Tell someone. Tell the leaders. Tell those who need to hear it. And then—let it go. Do not cling to the victory. Let others carry the word forward.',
        },
        {
          kind: 'reflection',
          id: 'acts12-witness',
          prompt: 'What has God done in your life that you need to tell others about? Who are the &ldquo;Jameses&rdquo; in your church or community who need to hear it?',
        },
      ],
    },

    /* ─── Acts 12:18–19 — The Soldiers Executed ──────────────────────────── */
    {
      ref: 'Acts 12:18–19',
      title: 'Herod&apos;s Rage; The Soldiers Executed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(18, 'Now as soon as it was day, there was no small stir among the soldiers, what was become of Peter.'),
            plain(19, 'And when Herod had sought for him, and found him not, he examined the keepers, and commanded that they should be put to death. And he went down from Judaea to Caesarea, and there abode.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-soldiers-fate',
          html:
            'When morning comes and Peter is found missing, Herod is enraged. He does not accept responsibility. He does not reconsider his persecution. Instead, he executes the soldiers who guarded Peter. Sixteen men paid with their lives for what a miracle accomplished. This is the face of power that does not yield to God: it simply crushes anyone in its path. Herod cannot punish God, so he punishes men.',
        },
        {
          kind: 'commentary',
          id: 'acts12-herod-moves',
          html:
            'After this display of rage, Herod leaves Jerusalem for Caesarea. He does not abandon his throne or his position. He simply moves. But his moving to Caesarea is the last journey he will make. What he does not know is that his judgment is about to begin.',
        },
        {
          kind: 'carry',
          html:
            'The soldiers who died were not apostles. They do not appear again in Scripture. They are named only by their office—the keepers, the guards. Yet they died because they were in the way of a tyrant&apos;s shame. This is the human cost of power that refuses to submit to God. How many unnamed people suffer because those in power cannot admit wrong? What would change if Herod had simply said: &ldquo;God has freed him. I cannot stop God&rdquo;? The path of resistance leads to destruction. The path of surrender leads to life.',
        },
        {
          kind: 'reflection',
          id: 'acts12-power',
          prompt: 'Where do you see human power being exercised against God&apos;s will? How does Herod&apos;s example warn you about the danger of resisting God?',
        },
      ],
    },

    /* ─── Acts 12:20–23 — Herod at Caesarea; Eaten of Worms ───────────── */
    {
      ref: 'Acts 12:20–23',
      title: 'Herod&apos;s Pride; Eaten of Worms; God&apos;s Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(20, 'And Herod was highly displeased with them of Tyre and Sidon: but they came with one accord to him, and, having made Blastus the king&apos;s chamberlain their friend, desired peace, because their country was nourished by the king&apos;s country.'),
            plain(21, 'And upon a set day Herod, arrayed in all his royal apparel, sat upon his throne, and made an oration unto them.'),
            plain(22, 'And the people gave a shout, saying, It is the voice of a god, and not of a man.'),
            plain(23, 'And immediately the angel of the Lord smote him, because he gave not God the glory: and he was eaten of worms, and gave up the ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-herod-oration',
          html:
            'Herod sits in his royal apparel on his throne. He is making an oration to the delegates from Tyre and Sidon. The people cry out: &ldquo;It is the voice of a god, and not of a man.&rdquo; In that moment, Herod could have done what Peter did in Caesarea Philippi—reject the claim, redirect the worship to God. Instead, Herod accepts it. He lets the worship intended for God stay with himself. And in that moment of pride, divine judgment falls.',
        },
        {
          kind: 'greek',
          id: 'acts12-doxa',
          title: 'Doxa — Glory; Honor; Splendor',
          script: 'δόξα',
          translit: '<strong>doxa</strong> · glory; honor; splendor; the recognition of excellence; praise and honor due to God alone',
          description:
            'Herod takes the doxa—the honor, the glory—that belongs to God alone. He does not say, &ldquo;That glory is God&apos;s.&rdquo; He accepts it as his own. The judgment follows immediately. To take God&apos;s glory is to become an enemy of God.',
        },
        {
          kind: 'commentary',
          id: 'acts12-angel-smites',
          html:
            'An angel of the Lord smites him. The same word used of the angel who woke Peter and raised him up (verse 7) is used here of the angel who strikes Herod down. Both are acts of divine power. But one is deliverance; one is judgment. Herod is eaten by worms—not by enemies, not by disease, but by the degradation of his own body. His flesh decays while he is still alive, and he dies. The contrast could not be sharper: Peter&apos;s chains fall; Herod&apos;s flesh eats itself.',
        },
        {
          kind: 'carry',
          html:
            'Herod accepted the worship that Peter rejected. Herod took the glory that belonged to God. The difference was not the circumstances—it was the heart. Where are you tempted to accept honor that belongs only to God? A success you want to claim as entirely your own. An ability you want to own rather than acknowledge as a gift. A reputation you want to guard rather than point back to the One who made you. The path of pride leads to worms. The path of humility leads to freedom.',
        },
        {
          kind: 'reflection',
          id: 'acts12-herod-glory',
          prompt: 'When are you most tempted to take credit for what God has done? What would it mean to redirect that glory back to Him?',
        },
        {
          kind: 'artwork',
          matchTitle: /herod|throne|royal|death|worm/i,
          matchArtist: /tissot|mctaggart|constantine/i,
          caption: 'Acts 12:21–23 · Herod&apos;s Judgment',
        },
      ],
    },

    /* ─── Acts 12:24–25 — The Word of God Grows and Multiplies ────────── */
    {
      ref: 'Acts 12:24–25',
      title: 'The Word Grows and Multiplies; The Gospel Advances',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(24, 'But the word of God grew and multiplied.'),
            plain(25, 'And Barnabas and Saul returned from Jerusalem, when they had fulfilled their ministry, and took with them John, whose surname was Mark.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-word-grows',
          html:
            'The chapter opens with Herod stretching forth his hand to vex the church. It closes with the word of God growing and multiplying. It is a single sentence that holds the whole narrative together. James has been killed. Peter has been imprisoned. Herod has murdered innocent soldiers in his rage. And yet, in the midst of all this opposition, the gospel advances. The word cannot be contained.',
        },
        {
          kind: 'greek',
          id: 'acts12-auxanō',
          title: 'Auxanō — Grow; Increase; Spread',
          script: 'αὐξάνω',
          translit: '<strong>auxanō</strong> · grow; increase; become greater; flourish; multiply',
          description:
            'The word of God &ldquo;grows and multiplies.&rdquo; The same verb Jesus uses for the kingdom of God, which grows like a mustard seed planted in a field (Mark 4:30–32). No one plants it consciously. No one controls its growth. But it grows, and it spreads, until it becomes large enough to shelter the birds of the air. Persecution does not stop it. Imprisonment cannot contain it. Pride cannot defeat it. It simply grows.',
        },
        {
          kind: 'greek',
          id: 'acts12-plēthynō',
          title: 'Plēthynō — Multiply; Increase in Number',
          script: 'πληθύνω',
          translit: '<strong>plēthynō</strong> · multiply; increase; become more numerous; spread abundantly',
          description:
            'The word is &ldquo;plēthyno-ed&rdquo;—it multiplied. Not passively, but actively. The gospel spreads from mouth to mouth, from city to city, from Jew to Gentile. The very forces meant to stop it accelerate its spread. Peter&apos;s imprisonment becomes a catalyst for the gospel&apos;s advance.',
        },
        {
          kind: 'christ',
          id: 'acts12-gospel-unstoppable',
          title: 'Christ Connection — The Gospel Cannot Be Contained',
          html:
            'Jesus told the disciples: &ldquo;Go ye into all the world, and preach the gospel to every creature&rdquo; (Mark 16:15). No human power—king, council, sword, or prison—can stop that commission. When Peter is arrested, the gospel advances. When James is killed, the gospel spreads. When Herod sits in his royal apparel accepting worship, the gospel multiplies. The message is unambiguous: the gospel does not depend on human conditions. It grows because it is true. It multiplies because it is the power of God unto salvation (Rom. 1:16).',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where persecution still comes. Where the gospel is still opposed. Where voices still rise to silence the truth. But Acts 12 teaches you something that cannot be broken: the word grows and multiplies. Not because of our effort, though effort matters. But because it is God&apos;s word, and God&apos;s word accomplishes what He sends it to do (Isa. 55:11). Your task is not to defend the gospel from all opposition. Your task is to plant it, to speak it, to live it. The growing is God&apos;s work. The multiplying is His power.',
        },
        {
          kind: 'reflection',
          id: 'acts12-gospel-growth',
          prompt: 'What opposition to the gospel do you see in your world? How does the truth that &ldquo;the word of God grew and multiplied&rdquo; change the way you approach your own witness?',
        },
        {
          kind: 'artwork',
          matchTitle: /grow|multiply|seed|gospel|word|spread|fields/i,
          caption: 'Acts 12:24 · The Word of God Grew and Multiplied',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 12',
    quote:
      'But the word of God grew and multiplied. A king&apos;s sword kills one apostle; a king&apos;s pride kills a king. But the gospel cannot be touched.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 12 · Study Guide',
  },

  hasHebrew: false,
};
