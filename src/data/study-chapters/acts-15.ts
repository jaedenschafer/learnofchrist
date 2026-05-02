import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Acts 15 — The Jerusalem Council; the Gospel of Grace Alone
 *
 * Men from Judea insist that Gentiles must be circumcised to be saved. The
 * apostles and elders gather in Jerusalem to settle the question. Peter rises
 * and recalls his vision at Cornelius's house. Paul and Barnabas testify of
 * signs and wonders. James weighs the evidence and cites the prophet Amos—
 * the tabernacle of David, fallen down, will be rebuilt. The council writes
 * a letter: "It seemed good to the Holy Ghost, and to us." No greater burden
 * than these necessary things. The gospel of grace is liberated. Paul and
 * Barnabas disagree over John Mark and part ways. Silas joins Paul. The
 * message spreads.
 */
export const ACTS_15: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 15,

  intros: [
    'The gospel faces its first major theological crisis. Word has reached Jerusalem that Gentiles are believing, but men arrive from Judea insisting that Gentiles must be circumcised and keep the law of Moses to be saved. It is not a matter of keeping the law themselves—it is a matter of belonging. To them, the boundary is absolute. You cannot be saved unless you first become Jewish. The apostles gather. Peter, Paul, James speak. The question the church must answer is ancient and urgent: Is salvation available through grace alone, or must it be earned by obedience to the law?',
    'The stakes are not abstract. They are about whether the gospel is for all people or only for the Jews. They are about whether Christ&apos;s death is enough, or whether human effort and ethnic identity still matter for salvation. They are about whether God has broken down the wall or merely opened a gate that still requires a password. The answer the council gives will echo through two thousand years: "It seemed good to the Holy Ghost, and to us." The law is not abolished. But it is not the path to life. Only grace is.',
  ],

  sections: [
    /* ─── Acts 15:1–5 — The Men from Judea ──────────────────────────────── */
    {
      ref: 'Acts 15:1–5',
      title: 'The Men from Judea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              1,
              t('And certain men which came down from Judaea taught the brethren, and said, '),
              hg('Except ye be circumcised after the manner of Moses, ye cannot be saved', 'acts15-circumcision-required')
            ),
            verse(
              2,
              t('When therefore Paul and Barnabas had no small '),
              hy('dissension and disputation with them', 'acts15-zeteō'),
              t(', they determined that Paul and Barnabas, and certain other of them, should go up to Jerusalem unto the apostles and elders about this question.')
            ),
            verse(
              3,
              t('And being brought on their way by the church, they passed through Phenice and Samaria, '),
              hg('declaring the conversion of the Gentiles', 'acts15-declaring')
            ),
            verse(
              4,
              t('and they caused great joy unto all the brethren.')
            ),
            verse(
              5,
              t('But there rose up certain of the sect of the Pharisees which believed, saying, '),
              hg('That it was needful to circumcise them, and to command them to keep the law of Moses', 'acts15-pharisee-position')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-circumcision-required',
          html:
            'This is not a small dispute. The teachers from Judea are not wrong about the law—circumcision was God&apos;s covenant sign. But they have made it a barrier to salvation itself. The question is not whether the law is true, but whether keeping it is required to be saved. This is the gospel&apos;s first crisis.',
        },
        {
          kind: 'greek',
          id: 'acts15-zeteō',
          title: 'Zēteō — Disputation; Inquiry; Seeking',
          script: 'ζητέω',
          translit: '<strong>zēteō</strong> · to seek, to question, to argue',
          description:
            'The word suggests a vigorous back-and-forth. Paul and Barnabas do not simply ignore the false teaching—they contend for the truth. Gentleness is not the same as passivity.',
        },
        {
          kind: 'commentary',
          id: 'acts15-declaring',
          html:
            'As they travel to Jerusalem, Paul and Barnabas are not defensive about the Gentile conversions. They are proclaiming them. The Gentile believers are evidence of God&apos;s work, not a problem to be solved.',
        },
        {
          kind: 'commentary',
          id: 'acts15-pharisee-position',
          html:
            'Even among the believers, some Pharisees still hold to the old boundary. They believe in Jesus, but they cannot yet imagine salvation without the law. Their position is not unprincipled—it is rooted in centuries of covenant practice. But it will be overruled by what God has already done.',
        },
        {
          kind: 'carry',
          html:
            'The modern church faces similar questions: What does it actually cost to follow Jesus? What is required, and what is simply cultural? Where are you insisting on boundaries God has already crossed? Where are you holding new believers to standards God never asked for? The Pharisees in this room loved God and the law. But they were about to discover that their certainty was incomplete.',
        },
        {
          kind: 'reflection',
          id: 'acts15-boundaries',
          prompt: 'What rule or boundary have you inherited as "required" that might actually just be cultural? How can you tell the difference?',
        },
      ],
    },

    /* ─── Acts 15:6–11 — Peter Rises and Speaks ─────────────────────────── */
    {
      ref: 'Acts 15:6–11',
      title: 'Peter Recalls Cornelius',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              6,
              t('And the apostles and elders came together for to consider of this matter.')
            ),
            verse(
              7,
              t('And when there had been much '),
              hg('disputing', 'acts15-disputing'),
              t(', Peter rose up, and said unto them, Men and brethren, ye know how that '),
              hg('a good while ago God made choice among you', 'acts15-peter-choice'),
              t(', that the Gentiles by my mouth should hear the word of the gospel, and believe.')
            ),
            verse(
              8,
              t('And God, which knoweth the hearts, bare them '),
              hp('witness, giving them the Holy Ghost, even as he did unto us', 'acts15-holy-ghost')
            ),
            verse(
              9,
              t('And put no difference between us and them, '),
              hg('purifying their hearts by faith', 'acts15-purifying')
            ),
            verse(
              10,
              t('Now therefore '),
              hg('why tempt ye God, to put a yoke upon the necks of the disciples', 'acts15-yoke'),
              t(', which neither our fathers nor we were able to bear?')
            ),
            verse(
              11,
              t('But we believe that through the '),
              hp('grace of the Lord Jesus Christ we shall be saved, even as they', 'acts15-christ-grace')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-disputing',
          html:
            'For some time, the apostles and elders argue. There is real disagreement. But then Peter stands—and his testimony carries the weight of having been sent to Cornelius, the first Gentile household the gospel reached. He speaks from experience, not theory.',
        },
        {
          kind: 'commentary',
          id: 'acts15-peter-choice',
          html:
            'Peter reminds them: God chose him long ago to preach to the Gentiles. This was not Paul&apos;s idea or Barnabas&apos;s innovation. This was God&apos;s plan from the beginning. He names the vision at Cornelius&apos;s house—see Acts 11 for the full account.',
        },
        {
          kind: 'commentary',
          id: 'acts15-holy-ghost',
          html:
            'God gave the Holy Spirit to Cornelius and his household in the same way He gave it at Pentecost. There was no difference in the gift. God&apos;s approval was visible and undeniable. The evidence is not an argument; it is a fact.',
        },
        {
          kind: 'greek',
          id: 'acts15-charis',
          title: 'Charis — Grace; Unmerited Favor',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; kindness that cannot be earned',
          description:
            'Grace is God&apos;s free gift. It cannot be purchased by circumcision, by law-keeping, by ethnic identity, by anything. The gospel is built entirely on grace, not on human effort. The law shows us the standard; grace saves us from inability to keep it.',
        },
        {
          kind: 'commentary',
          id: 'acts15-purifying',
          html:
            'Peter makes a crucial claim: God purifies hearts by faith, not by the law. Circumcision and the law are external marks. Faith is internal. God cares about the heart.',
        },
        {
          kind: 'commentary',
          id: 'acts15-yoke',
          html:
            'A yoke is a tool that joins two oxen together so they can pull a plow. Peter is saying: Why would you bind the disciples to something that enslaves them? The law, without grace, is a burden no one can bear. And Jesus came not with a new, harder yoke—He came to lift it entirely.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-grace',
          title: 'Christ Connection — Salvation by Grace Through Faith Alone',
          html:
            'Jesus entered the world saying He came not to abolish the law but to fulfill it (Matt. 5:17). He kept what we could not. The resurrection proved His work was complete. At Pentecost, Peter preached repentance and faith—not circumcision and law-keeping. Here at the council, he affirms it again: "through the grace of the Lord Jesus Christ we shall be saved, even as they." What Christ accomplished is enough. We are saved not by adding to His work but by trusting in His work entirely (Eph. 2:8–9).',
        },
        {
          kind: 'carry',
          html:
            'If you are carrying a spiritual yoke—a sense that you must earn God&apos;s favor by keeping rules, by being good enough, by never failing—Peter&apos;s word is for you. Your hearts were purified by faith. Not by perfect obedience. Not by ethnic identity or social standing or moral achievement. By faith in Christ. The burden you are carrying is not from Him.',
        },
        {
          kind: 'reflection',
          id: 'acts15-yoke-reflect',
          prompt: 'Where are you trying to earn what God has offered as a gift? What would it mean to believe that grace is truly unmerited?',
        },
      ],
    },

    /* ─── Acts 15:12 — Paul and Barnabas Testify ──────────────────────────── */
    {
      ref: 'Acts 15:12',
      title: 'The Signs and Wonders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              12,
              t('Then all the multitude kept silence, and gave audience to Barnabas and Paul, declaring what '),
              hg('miracles and wonders God had wrought among the Gentiles by them', 'acts15-wonders')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-wonders',
          html:
            'After Peter speaks, the room goes quiet. Then Paul and Barnabas stand and testify. They tell of the signs and wonders God did among the Gentiles. Not through the law. Not through circumcision. Through the preaching of Christ and the work of the Holy Spirit. The evidence speaks for itself.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the strongest argument is simply the work God has already done. You do not have to convince anyone that the Spirit is alive. You point to where He is already moving. You testify to what you have seen Him do. The council listens to miracles and wonders in silence. What miracles in your own life are witnesses to the gospel?',
        },
        {
          kind: 'reflection',
          id: 'acts15-wonders-reflect',
          prompt: 'What sign of God&apos;s work have you witnessed that you rarely talk about? Why keep it silent?',
        },
      ],
    },

    /* ─── Acts 15:13–21 — James and the Tabernacle of David ──────────────── */
    {
      ref: 'Acts 15:13–21',
      title: 'The Rebuilt Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              13,
              t('And after they had held their peace, James answered, saying, Men and brethren, hearken unto me:')
            ),
            verse(
              14,
              t('Simeon hath declared how God at the first did visit the Gentiles, to take out of them a people for his name.')
            ),
            verse(
              15,
              t('And to this agree the words of the prophets; as it is written,')
            ),
            verse(
              16,
              t('After this I will return, and will build again '),
              hy('the tabernacle of David', 'acts15-davidic-tent'),
              t(', which is fallen down; and I will build again the ruins thereof, and I will set it up:')
            ),
            verse(
              17,
              t('That the residue of men might seek after the Lord, and all the Gentiles, upon whom my name is called, saith the Lord, who doeth all these things.')
            ),
            verse(
              18,
              t('Known unto God are all his works from the beginning of the world.')
            ),
            verse(
              19,
              t('Wherefore my sentence is, that we trouble not them, which from among the Gentiles are turned to God:')
            ),
            verse(
              20,
              t('But that we write unto them, that they '),
              hg('abstain from pollutions of idols, and from fornication, and from things strangled, and from blood', 'acts15-necessary')
            ),
            verse(
              21,
              t('For Moses of old time hath in every city them that preach him, being read in the synagogues every sabbath day.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-davidic-tent',
          html:
            'James cites Amos 9:11–12. The tabernacle of David—not the temple, but David&apos;s tent where the ark once dwelt—had fallen. It was a temporary structure, now in ruins. But Amos prophesies that God will rebuild it, and when He does, all nations will seek the Lord. James is saying: This is the moment. God is rebuilding the tent of David. The Gentiles are streaming in. The prophecy is happening now.',
        },
        {
          kind: 'greek',
          id: 'acts15-episkeptomai',
          title: 'Episkeptomai — Visited; Looked Upon; Cared For',
          script: 'ἐπισκέπτομαι',
          translit: '<strong>episkeptomai</strong> · to visit, to look upon with care and attention',
          description:
            'God has visited the Gentiles. He has turned His attention toward them, cared for them, brought them into His people. The verb suggests intentional, personal care—not accidental or incidental.',
        },
        {
          kind: 'commentary',
          id: 'acts15-necessary',
          html:
            'James is careful here. He is not saying: Keep the whole law. He is saying: A few things matter for fellowship and conscience. Avoid idolatry, sexual immorality, and the consumption of food offered to idols or prepared in ways that violate conscience. These are about practical living together—not about salvation. Salvation is still by grace. But living as a community requires some basic boundaries.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-davidic',
          title: 'Christ Connection — The Seed of David Rebuilding All Nations',
          html:
            'Jesus is repeatedly called "the son of David" (Matt. 1:1, 9:27, 12:23, etc.). He is the Messiah, the one who will reign on David&apos;s throne. But Amos speaks of rebuilding the fallen tent—a picture of restoration, gathering, and unity. Jesus came not only as a king but as one who would unite Jew and Gentile into one body (Eph. 2:14–16). The tabernacle that fell is being rebuilt, and now it has room for all nations who call on His name.',
        },
        {
          kind: 'carry',
          html:
            'What has fallen in your own life? A relationship, a dream, a sense of calling, a hope? James is quoting a prophet who says: God rebuilds fallen things. Not for the sake of nostalgia, but to make them bigger than they were before. The fallen tent of David becomes a place where all nations gather. What fell in you may be falling so God can rebuild it larger and truer.',
        },
        {
          kind: 'reflection',
          id: 'acts15-rebuilt',
          prompt: 'What has fallen that you thought was finished? What if God is not leaving it fallen, but planning to rebuild it for more people than before?',
        },
      ],
    },

    /* ─── Acts 15:22–29 — The Apostolic Letter ──────────────────────────── */
    {
      ref: 'Acts 15:22–29',
      title: 'The Letter from Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              22,
              t('Then pleased it the apostles and elders, with the whole church, to send chosen men of their own company to Antioch with Paul and Barnabas; namely, Judas surnamed Barsabas, and Silas, chief men among the brethren:')
            ),
            verse(
              23,
              t('And they wrote letters by them after this manner; The apostles and the elders and the brethren send greeting unto the brethren which are of the Gentiles in Antioch and Syria and Cilicia:')
            ),
            verse(
              24,
              t('Forasmuch as we have heard, that certain which went out from us have troubled you with words, subverting your souls, saying, Ye must be circumcised, and keep the law: to whom we gave no such commandment:')
            ),
            verse(
              25,
              t('It seemed good unto us, being assembled together, to send unto you men well beloved, with Paul and Barnabas;')
            ),
            verse(
              26,
              t('Men that have hazarded their lives for the name of our Lord Jesus Christ.')
            ),
            verse(
              27,
              t('We have sent therefore Judas and Silas, who shall also tell you the same things by mouth.')
            ),
            verse(
              28,
              t('For '),
              hp('it seemed good to the Holy Ghost, and to us', 'acts15-holy-ghost-us'),
              t(', to lay upon you no greater burden than these necessary things;')
            ),
            verse(
              29,
              t('That ye abstain from meats offered to idols, and from blood, and from things strangled, and from fornication: from which if ye keep yourselves, ye shall do well. Fare ye well.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-decision',
          html:
            'The council has made a decision. It is not a decision to soften the law or to ignore Moses. It is a decision to liberate the gospel from the law as a requirement for salvation. The letter is clear: no one gave commandment for what certain teachers demanded. The decision reflects the will of both the apostles and the Holy Spirit.',
        },
        {
          kind: 'greek',
          id: 'acts15-dokeo',
          title: 'Dokeō — It Seemed Good; It Seemed Right',
          script: 'δοκέω',
          translit: '<strong>dokeō</strong> · to seem good, to appear right, to decide together',
          description:
            'The verb suggests consensus, not decree. They have come to agreement. Apostolic authority is exercised not through unilateral proclamation but through discernment and the Spirit&apos;s leading. The will of the assembly matters.',
        },
        {
          kind: 'commentary',
          id: 'acts15-holy-ghost-us',
          html:
            'The council affirms that the decision comes not from the apostles alone, but from the Holy Ghost and the apostles together. Authority is exercised through discernment. The decision is not an arbitrary ruling—it reflects the will of God. This phrase will echo through the centuries whenever the church seeks to understand what the Spirit is saying.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-burden',
          title: 'Christ Connection — The Yoke That Is Easy',
          html:
            'Jesus said, "Take my yoke upon you… for my yoke is easy, and my burden is light" (Matt. 11:29–30). The law, without grace, is a burden no one can bear (Peter&apos;s language from verse 10). But Christ&apos;s way is not the removal of all expectation—it is expectation rooted in love, not in fear. The council&apos;s decision echoes Jesus: "no greater burden than these necessary things." Grace does not mean no standards; it means standards rooted in gospel freedom, not in religious slavery.',
        },
        {
          kind: 'carry',
          html:
            'The Gentile churches receive this letter, and they are set free. Free from the burden of becoming Jewish. Free from the weight of earning salvation. Free from a law that condemns. But not free to do whatever they want. Free to live as part of a new family, with new expectations—not because they are required, but because they matter for fellowship and conscience. What burdens have you been carrying that this letter is written to release?',
        },
        {
          kind: 'reflection',
          id: 'acts15-burden-reflect',
          prompt: 'Where are you still carrying a burden you were never meant to carry? What would it mean to believe it was not required?',
        },
      ],
    },

    /* ─── Acts 15:30–35 — The Letter Received ───────────────────────────── */
    {
      ref: 'Acts 15:30–35',
      title: 'Joy in Antioch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              30,
              t('So when they were dismissed, they came to Antioch: and when they had gathered the multitude together, they delivered the epistle:')
            ),
            verse(
              31,
              t('Which when they had read, they rejoiced for the '),
              hg('consolation', 'acts15-consolation')
            ),
            verse(
              32,
              t('And Judas and Silas, being prophets also themselves, exhorted the brethren with many words, and confirmed them.')
            ),
            verse(
              33,
              t('And after they had tarried there a space, they were let go in peace from the brethren unto the apostles.')
            ),
            verse(
              34,
              t('Notwithstanding it pleased Silas to abide there still.')
            ),
            verse(
              35,
              t('Paul also and Barnabas continued in Antioch, teaching and preaching the word of the Lord, with many others.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-consolation',
          html:
            'The letter is read aloud, and the church rejoices. The Greek word is paraklesis—not just comfort, but encouragement, exhortation. It is the same root as "Paraclete," the Comforter Jesus promised. The letter itself is paracletic. It exhorts them forward.',
        },
        {
          kind: 'carry',
          html:
            'Notice what the church does: they gather, they listen, they rejoice. The gospel is liberated in the place where it matters most—in the actual lives of actual believers. Antioch receives the letter, and the gospel spreads from there. A letter from Jerusalem, carried by messengers, becomes the foundation for mission. What message of freedom from God are you carrying to those around you?',
        },
        {
          kind: 'reflection',
          id: 'acts15-antioch-reflect',
          prompt: 'When you hear the gospel of grace, do you rejoice? What would it look like to share that joy with someone who is still carrying a burden?',
        },
      ],
    },

    /* ─── Acts 15:36–41 — Paul and Barnabas Part ───────────────────────── */
    {
      ref: 'Acts 15:36–41',
      title: 'Sharp Contention and Separation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(
              36,
              t('And some days after Paul said unto Barnabas, Let us go again and visit our brethren in every city where we have preached the word of the Lord, and see how they do.')
            ),
            verse(
              37,
              t('And Barnabas determined to take with them John, whose surname was Mark.')
            ),
            verse(
              38,
              t('But Paul thought not good to take him with them, who departed from them at Pamphylia, and went not with them to the work.')
            ),
            verse(
              39,
              t('And the '),
              hy('contention was so sharp', 'acts15-paroxysmos'),
              t(' between them, that they departed asunder one from the other: and so Barnabas took Mark, and sailed unto Cyprus;')
            ),
            verse(
              40,
              t('And Paul chose Silas, and departed, being recommended by the brethren unto the grace of God.')
            ),
            verse(
              41,
              t('And he went through Syria and Cilicia, confirming the churches.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-disagreement',
          html:
            'Just as the council has resolved the greatest theological question of the age, a personal disagreement tears apart the missionary team. Paul and Barnabas have been partners since Antioch. They have been sent by the church, appointed by the Spirit, risked their lives together. Now they cannot agree on whether John Mark should join the next journey. Mark had abandoned them once (Acts 13:13). Paul is not willing to take that risk again. Barnabas, whose name means "Son of Encouragement," wants to give Mark another chance.',
        },
        {
          kind: 'greek',
          id: 'acts15-paroxysmos',
          title: 'Paroxysmos — Sharp Contention; Hot Disagreement',
          script: 'παροξυσμός',
          translit: '<strong>paroxysmos</strong> · irritation, sharp disagreement, heated dispute',
          description:
            'The disagreement is genuine and sharp. This is not a theological dispute—it is a relational one. Both men are earnest. Both are right about some things and blind to others. The result is that they part ways, and the gospel spreads through two missionary teams instead of one.',
        },
        {
          kind: 'commentary',
          id: 'acts15-separation',
          html:
            'Paul and Barnabas go different directions. But notice: there is no condemnation of either man. Barnabas takes Mark to Cyprus. Mark later becomes known as Peter&apos;s companion and writes the Gospel of Mark. Paul takes Silas and becomes one of the greatest missionaries in church history. What looked like failure becomes multiplication. God uses human conflict to accomplish His purposes.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-conflict',
          title: 'Christ Connection — Mission Continues Through Human Failure',
          html:
            'Jesus did not choose twelve apostles who always agreed. Peter denied Him. James and John argued about who would sit on His right hand. The disciples fell asleep when He asked them to watch. When Jesus rose, He did not restore them to office only when they had resolved all their relational conflicts—He commissioned them while they were still fumbling and recovering. The gospel moves not through perfect teams but through flawed servants who stay committed to the mission despite disagreement. Barnabas&apos;s grace to Mark, vindicated later, and Paul&apos;s missional focus both had value. Neither man was simply right or simply wrong.',
        },
        {
          kind: 'carry',
          html:
            'You will disagree with people you love. You will both be right about something and blind to something else. The question is not whether you will ever clash—you will. The question is whether you will remain committed to the larger mission even when you part ways. Paul and Barnabas did. And because they did, the gospel reached places it would not have reached if they had stayed together. Your disagreement might be part of God&apos;s plan, not a failure of His.',
        },
        {
          kind: 'reflection',
          id: 'acts15-conflict-reflect',
          prompt: 'Is there someone you disagree with who you still want to serve Christ alongside? Or someone from whom you need to part ways but do so recommending them to God&apos;s grace?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 15',
    quote:
      'It seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things. Salvation is by grace, not by human effort or ethnic identity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 15 · Study Guide',
  },

  hasHebrew: false,
};
