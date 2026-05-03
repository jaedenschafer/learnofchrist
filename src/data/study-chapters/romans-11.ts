import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 11 — The Olive Tree and Israel&apos;s Future
 *
 * Paul closes his long meditation on Israel&apos;s place in God&apos;s covenant.
 * God has not cast away His people. A remnant stands. The hardening is partial
 * and temporary, serving God&apos;s larger purpose. Wild branches grafted in must
 * not boast. "All Israel shall be saved." The chapter ends in doxology—the
 * depth of God&apos;s riches, wisdom, and knowledge is beyond searching out.
 */
export const ROMANS_11: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 11,

  estimatedMinutes: { 5: 7, 10: 13, 15: 17 },
  intros: [
    'Romans 11 is Paul&apos;s answer to a question that haunts his whole argument: Has God cast away Israel? The answer is no. God has not abandoned the covenant people. A remnant of Jews believe even now, chosen by grace alone. The hardening that fell on Israel is not final—it is partial and temporary, designed to open the door to the Gentiles. And the grafting in of wild olive branches (the nations) is itself meant to provoke Israel to jealousy, that they too might come back to faith.',
    'The olive tree is the chapter&apos;s controlling image. The roots are Abraham, Isaac, and Jacob—the patriarchs whose promise has never been revoked. Natural branches (ethnic Israel) have been broken off; wild branches (the nations) have been grafted in. But Paul warns the Gentiles sternly: do not boast against the broken branches. You stand by faith alone, not by superiority. And the natural branches can be grafted back in again. Israel&apos;s future is not closed.',
    'Romans 11 ends in doxology. Paul does not try to solve every question or map every detail of God&apos;s plan. Instead, he stands in wonder before the depth of God&apos;s wisdom and knowledge, the unsearchability of His judgments, and the totality of His sovereignty: "Of him, and through him, and to him, are all things."',
  ],

  sections: [
    /* ─── Romans 11:1–3 — Has God Cast Away His People? ─────────────────── */
    {
      ref: 'Romans 11:1–3',
      title: 'Has God Cast Away His People?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('I say then, '),
                hg('Hath God cast away his people?', 'rom11-not-cast'),
                t(' '),
                hp('God forbid', 'rom11-christ-mercy'),
                t('. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-not-cast',
          html:
            'Paul asks the question directly and answers it immediately: <em>God forbid</em>. The very existence of Paul—an Israelite, now a believer—is proof that God has not rejected His people. If total rejection were true, Paul himself would not exist as evidence against it. The covenant is not broken.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('God hath not cast away his '),
                hy('people which he foreknew', 'rom11-foreknew'),
                t('. Wot ye not what the scripture saith of Elias? how he maketh intercession to God against Israel, saying,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Lord, they have killed thy prophets, and digged down thine altars; and I am left alone, and they seek my life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-foreknew',
          html:
            '"Which he foreknew"—God&apos;s knowledge of His people is not new. It reaches back to the beginning. Israel was not an accident or an afterthought. God chose them, made covenant with them, and that choice has never been revoked. Even in a season of great apostasy (the time of Elijah), when the faithful seemed almost extinct, God knew His people and held them.',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-mercy',
          title: 'Christ Connection — God&apos;s Unchanging Covenant',
          html:
            'In Christ, God&apos;s covenant love is made full and final. "Jesus Christ is the same yesterday, and to day, and for ever" (Heb. 13:8). Just as God did not forsake Israel in the time of Elijah, so now in Christ He upholds the covenant people. The Gentile branches are grafted into a tree whose roots are Christ Himself (Col. 1:15–17), the Living One who is the substance of all covenant promise.',
        },
        {
          kind: 'carry',
          html:
            'When you are tempted to think that God has abandoned His purpose—in the world, in the church, or in your own heart—remember Paul&apos;s insistence: <em>God forbid.</em> God&apos;s foreknowledge of you reaches back before you were born. His covenant stands. His faithfulness does not depend on how many others are faithful or how dark the season looks.',
        },
        {
          kind: 'reflection',
          id: 'rom11-faith',
          prompt: 'What is one promise of God you need to believe again, even though circumstances suggest He might have abandoned it?',
        },
      ],
    },

    /* ─── Romans 11:4–10 — The Remnant According to Grace ────────────────── */
    {
      ref: 'Romans 11:4–10',
      title: 'The Remnant According to Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('But what saith the answer of God unto him? '),
                hy('I have reserved to myself seven thousand men', 'rom11-seven-thousand'),
                t(', who have not bowed the knee to the image of Baal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-seven-thousand',
          html:
            'Even in Israel&apos;s darkest hour—when Elijah thought he alone remained faithful—God had reserved seven thousand. The number is not primarily statistical; it is theological. God always preserves a remnant for Himself. Always. This is the pattern of Scripture. In the flood, eight souls. In the captivity, a return. And now in the age of hardening, there are believers in Christ who will not compromise.',
        },
        {
          kind: 'greek',
          id: 'rom11-leimma',
          title: 'Leimma — Remnant',
          script: 'λείμμα',
          translit: '<strong>leimma</strong> · remainder; those left behind; what is left',
          description:
            'A remnant is not the whole, but it is real. It carries the promise forward. It is God&apos;s way of saying: <em>This covenant is not finished. This people is not abandoned. I have kept faith.</em> The remnant is always smaller than the whole, but it is enough.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 5,
              spans: [
                t('Even so then at this present time also there is a '),
                hg('remnant according to the election of grace', 'rom11-election-grace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-election-grace',
          html:
            'Paul brings the promise into the present tense: <em>There is a remnant</em>, right now, in his own time. Not all Israel has rejected Christ, though many have. Some Jewish believers stand firm, and they stand by one means alone—the election of grace. They did not earn it. Grace chose them.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 6,
              spans: [
                t('And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then it is no more grace: otherwise work is no more work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-grace-not-works',
          html:
            'Grace and works are mutually exclusive in the mechanism of salvation. You cannot say: "God chose me partly by grace and partly because I was good." That contradicts grace. It makes God a debtor. If God chose the remnant—Jewish believers—it was by grace alone, and that same grace is what holds them. This is not a merely Jewish question. It is the hinge of all Paul&apos;s theology.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 7,
              spans: [
                t('What then? Israel hath not obtained that which he seeketh for; but the election hath obtained it, and the rest were '),
                hg('blinded', 'rom11-blinded'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-blinded',
          html:
            'There is a division within Israel: those chosen by grace obtain faith and sight; the rest are blinded. The blinding is not eternally fixed—this is crucial. It is a temporary hardening that serves God&apos;s larger purpose. Paul will return to this. But in the present moment, there is a hardening on the majority, that the Gentiles might be brought in.',
        },
        {
          kind: 'carry',
          html:
            'You belong to the church only by grace. Not because you were smarter than others, or more faithful, or worthier. Grace is the sole ground. This means you have nothing to boast of—and everything to be grateful for. Whatever the remnant of faithful believers does, it does because grace is what holds them up.',
        },
        {
          kind: 'reflection',
          id: 'rom11-grace-alone',
          prompt: 'What part of your faith do you most easily credit to your own effort or goodness? How does Paul&apos;s insistence on grace alone challenge that?',
        },
      ],
    },

    /* ─── Romans 11:11–24 — The Olive Tree ────────────────────────────────── */
    {
      ref: 'Romans 11:11–24',
      title: 'The Olive Tree and the Grafted Branches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 11,
              spans: [
                t('I say then, Have they stumbled that they should fall? God forbid: but rather through their fall salvation is come unto the Gentiles, for to provoke them to jealousy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-stumble',
          html:
            'The stumbling of the Jewish people is real—many have rejected Christ. But it is not a fall into the abyss. It has a purpose. Their hardening opened the door to the nations. This is not to say the hardening is good, only that God has made it serve His larger mercy: the gospel goes to all peoples.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 17,
              spans: [
                t('And if some of the branches be broken off, and thou, being a wild olive tree, wert '),
                hy('grafted in among them', 'rom11-egkentrizō'),
                t(', and with them partakest of the root and fatness of the olive tree;'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rom11-egkentrizō',
          title: 'Egkentrizō — Graft In',
          script: 'ἐγκεντρίζω',
          translit: '<strong>egkentrizō</strong> · to graft in; to insert',
          description:
            'The wild branches (the Gentiles) are not naturally part of the tree. They are grafted in artificially, by the skill and choice of the gardener. This grafting is an act of grace, not nature. It is not your birthright; it is a gift.',
        },
        {
          kind: 'commentary',
          id: 'rom11-wild-olive',
          html:
            'The image is clear: you (the Gentile church) are wild olive branches, grafted into a cultivated tree whose roots are the patriarchs. You benefit from a covenant you did not make. You feed on the nourishment of promises that reached back to Abraham. Your whole life as a believer rests on a root that is not your own.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 18,
              spans: [
                t('Boast not against the branches. But if thou boast, thou bearest not the root, but the root thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-boast-not',
          html:
            '"Boast not against the branches." Paul is speaking directly to Gentile believers. Do not look down on the Jewish people from whom Christ came, from whom the patriarchs came, from whom the whole covenant came. Superiority is not only wrong; it is theologically incoherent. You do not hold up the root. The root holds you up.',
        },
        {
          kind: 'greek',
          id: 'rom11-piōn',
          title: 'Piōn — Richness; Fatness',
          script: 'πίων',
          translit: '<strong>piōn</strong> · rich; fat; the best part',
          description:
            'The Gentile believers partake of the fatness—the best, most nourishing part—of the olive tree. The root is rich. The covenant is not drained; it is full of life. And yet it is not a richness the Gentiles earned or naturally belong to.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 19,
              spans: [
                t('Thou wilt say then, The branches were broken off, that I might be grafted in.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Well; because of unbelief they were broken off, and thou standest by '),
                hg('faith', 'rom11-faith-alone'),
                t(': be not highminded, but fear:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-faith-alone',
          html:
            'You stand by faith—one thing alone. Not by ethnic privilege, not by moral superiority, not by what you have done. By faith. The same faith that was offered to Israel. The same means of access. You have no standing that is not pure grace, received through trust.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 23,
              spans: [
                t('And they also, if they abide not still in unbelief, shall be '),
                hy('grafted in', 'rom11-grafted-again'),
                t(': for God is able to graft them in again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-grafted-again',
          html:
            'The broken-off branches can be grafted back in again. This is the open ending of Israel&apos;s story. Paul does not say it will happen automatically or easily. He says it is possible, because God is able. The natural branches have not been permanently discarded. The tree still has roots that run deep. And God is patient.',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-olive-tree',
          title: 'Christ Connection — The Root That Holds All Branches',
          html:
            'The patriarchs—Abraham, Isaac, and Jacob—point to Christ. Paul writes in Galatians: "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ" (Gal. 3:16). The root of the tree is not merely historical; it is personal. It is Christ Himself, the true Seed of Abraham, in whom both Jew and Gentile find their place.',
        },
        {
          kind: 'carry',
          html:
            'You stand by faith, not by merit or birthright. This cuts two ways. It means you have nothing to boast of—your place in God&apos;s purpose is pure gift. But it also means your confidence is not in yourself but in the One who has grafted you in. You are not holding yourself up; you are being held. That is both humbling and liberating.',
        },
        {
          kind: 'reflection',
          id: 'rom11-grafted',
          prompt: 'In what ways do you subtly take credit for your faith or your place in God&apos;s family, as if you earned it? How might Paul&apos;s image of grafting in reframe that?',
        },
      ],
    },

    /* ─── Romans 11:25–32 — All Israel Shall Be Saved ──────────────────────── */
    {
      ref: 'Romans 11:25–32',
      title: 'The Mystery: All Israel Shall Be Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 25,
              spans: [
                t('For I would not, brethren, that ye should be ignorant of this '),
                hy('mystery', 'rom11-mysterion'),
                t('; Lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rom11-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>mysterion</strong> · mystery; secret; hidden thing now revealed',
          description:
            'A mystery is not an unsolvable riddle. It is a truth that was hidden in the past but is now revealed. The salvation of the Gentiles alongside Israel was always God&apos;s plan, but it was veiled until Christ came. Now it is open.',
        },
        {
          kind: 'commentary',
          id: 'rom11-blindness-in-part',
          html:
            'Paul emphasizes two qualifications: the hardening is <em>in part</em> (not total) and it is <em>temporary</em> ("until the fulness of the Gentiles be come in"). Neither is an absolute hardening nor an eternal one. The word of God stands. Israel will see again.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 26,
              spans: [
                t('And so '),
                hp('all Israel shall be saved', 'rom11-christ-all-israel'),
                t(': as it is written, There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-all-israel-saved',
          html:
            '"All Israel shall be saved." This is one of the most debated sentences in Scripture. Paul is not saying every individual Israelite will be saved, nor that Israel will be saved by a different gospel than the Gentiles. He is saying that Israel as a people, as a covenant people, will be saved. The hardening is not final. The story is not over. And they will be saved through faith in Christ, just as the Gentiles are.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 27,
              spans: [
                t('For this is my covenant unto them, when I shall take away their sins.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('As concerning the gospel, they are enemies for your sakes: but as touching the election, they are beloved for the fathers&apos; sakes.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-enemies-beloved',
          html:
            'The Jewish people are simultaneously enemies (with respect to the gospel, they have rejected it) and beloved (with respect to the election, they are still chosen because of the patriarchs). This both/and is crucial. Paul does not minimize their rejection of Christ. But he also does not withdraw the election. God&apos;s choice of Abraham stands.',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-all-israel',
          title: 'Christ Connection — Christ the Deliverer of Israel',
          html:
            'Paul quotes Isaiah: "There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob." This is Christ. He is the One who delivers Israel. And He does it not by conquering them militarily but by turning their hearts from ungodliness—from rejection of Him—to faith. His return or His final revelation will be the moment when Israel&apos;s eyes open (see Rom. 11:26 as interpreted in light of Zech. 12:10 and Rev. 1:7).',
        },
        {
          kind: 'carry',
          html:
            'You live in the time of the hardening. You also live in the time when "the fulness of the Gentiles" is coming in. This is your era. The gospel is open to you. Do not assume it will always be this way. Do not take for granted the privilege you have been grafted into. Do not boast against the branches that have been broken off. Pray for Israel&apos;s salvation.',
        },
        {
          kind: 'reflection',
          id: 'rom11-israel-prayer',
          prompt: 'How does knowing that Israel&apos;s salvation is part of God&apos;s plan change the way you pray for the Jewish people or think about Israel&apos;s role in God&apos;s purposes?',
        },
      ],
    },

    /* ─── Romans 11:33–36 — The Doxology ─────────────────────────────────── */
    {
      ref: 'Romans 11:33–36',
      title: 'The Depth of God&apos;s Wisdom and Knowledge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 33,
              spans: [
                t('O the '),
                hy('depth of the riches both of the wisdom and knowledge of God', 'rom11-bathos'),
                t('! how '),
                hg('unsearchable are his judgments', 'rom11-depths'),
                t(', and his ways past finding out!'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rom11-bathos',
          title: 'Bathos — Depth',
          script: 'βάθος',
          translit: '<strong>bathos</strong> · depth; profound thing; bottomlessness',
          description:
            'Paul uses a word that suggests something so deep you cannot see the bottom, cannot plumb it, cannot fully comprehend it. The riches of God—what He knows, what He has planned—are beyond human measurement or understanding.',
        },
        {
          kind: 'commentary',
          id: 'rom11-depths',
          html:
            'After eleven chapters of argument, after tracing the covenant from Abraham through Christ and into the future salvation of Israel, Paul does not conclude with neat certainty. He concludes with wonder. His judgments are unsearchable. His ways are past finding out. This is not defeatism; it is proper reverence before a reality too vast to be grasped.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 34,
              spans: [
                t('For who hath known the mind of the Lord? or who hath been his counsellor?'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Or who hath first given to him, and it shall be recompensed unto him again?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-his-counselor',
          html:
            'These rhetorical questions are taken from Isaiah. They all have the same answer: no one. No one knows the mind of the Lord. No one advises God. No one has given to God in such a way that God owes them anything in return. God is God. He is not dependent on creatures for knowledge, counsel, or sustenance. And yet this absolute God—this God who needs nothing—has bound Himself in covenant to a people, and He keeps that covenant.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 36,
              spans: [
                t('For '),
                hp('of him, and through him, and to him, are all things', 'rom11-christ-all-things'),
                t(': to whom be glory for ever. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-of-him-through-him',
          html:
            'All things originate from God. All things are sustained through Him. All things move toward Him as their end. This is not mere metaphysics; it is the ground of Paul&apos;s confidence. Israel&apos;s fate, the Gentiles&apos; future, your own story—all of it is moving toward His purposes. That is why Paul ends not in argument but in doxology: "to whom be glory for ever. Amen."',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-all-things',
          title: 'Christ Connection — All Things Through Christ',
          html:
            'Paul writes in Colossians: "All things were created by him, and for him" (Col. 1:16). In Romans 11:36, Paul echoes this: all things are <em>of</em> Him and <em>through</em> Him and <em>to</em> Him. Christ is the origin, the sustenance, and the end of all creation. The olive tree—with its natural branches, grafted wild branches, the whole complex mystery of Israel and the nations—exists in and through and for Christ. His purposes hold it together.',
        },
        {
          kind: 'carry',
          html:
            'Do not pretend to understand all of God&apos;s purposes. Do not map out His timeline or claim certainty about details He has left mysterious. Instead, do what Paul does: stand in wonder before the depth of His riches and wisdom. Trust that all things—even the hardening of Israel, even your own grafting in, even the future salvation of all Israel—are moving toward Him. That is enough to live on.',
        },
        {
          kind: 'reflection',
          id: 'rom11-wonder',
          prompt: 'What is one mystery in God&apos;s plans or purposes that you have been trying to solve or control? How might Paul&apos;s doxology invite you to release that and simply worship instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God hath not cast away his people. A remnant according to the election of grace. All Israel shall be saved. O the depth of the riches both of the wisdom and knowledge of God! For of him, and through him, and to him, are all things: to whom be glory for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 11 · Study Guide',
  },

  hasHebrew: false,
};
