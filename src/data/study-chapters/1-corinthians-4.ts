import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 4 — Stewards of the Mysteries of God
 *
 * Paul reframes the apostolic role. Apostles are not masters or judges of the
 * church. They are stewards—servants entrusted with God&apos;s mysteries. A steward
 * is accountable not to those he serves, but to the master who owns the household.
 * Paul&apos;s aim is faithfulness, not reputation. The chapter is fatherly correction
 * wrapped around the cross-shape of true ministry: exposure, weakness, folly,
 * and the willingness to be the world&apos;s refuse—so that others may live.
 */
export const FIRST_CORINTHIANS_4: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 4,

  intros: [
    'The Corinthians have begun to judge their leaders—to rank Paul and Apollos and Cephas, to praise one above another. Paul radically reframes the conversation. He cares nothing for their judgment. He submits to one judgment alone: that of Christ. A steward&apos;s faithfulness is not measured by the approval of those he serves. It is measured by the approval of the one who owns everything.',
    'This chapter liberates the church from the tyranny of human opinion. It also humbles the leaders. Apostles are not celebrities or lords. They are stewards, entrusted with something infinitely greater than themselves—the mysteries of God—and accountable to a Master whose standards are infinitely higher than man&apos;s. Yet Paul himself is a living contradiction to the Corinthians&apos; ideals: hungry, thirsty, naked, beaten, homeless. And he has become the world&apos;s garbage so they could be fed with the gospel.',
  ],

  sections: [
    /* ─── 1 Corinthians 4:1–2 — Stewards and Faithfulness ───────────────── */
    {
      ref: '1 Corinthians 4:1–2',
      title: 'Stewards of the Mysteries',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Let a man so account of us, as of the '),
                hg('ministers of Christ', 'cor4-1-ministers'),
                t(', and '),
                hy('stewards of the mysteries of God', 'cor4-1-oikonomos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-1-ministers',
          html:
            'The word Paul uses for &quot;ministers&quot; is <em>diakonos</em>—not priests or leaders in the sense of earthly power, but servants. Yet these servants hold something sacred: <em>ta mysteria tou theou</em>, the mysteries of God. These are not secrets kept hidden. They are the open marvels of salvation—the cross, the resurrection, the calling of the Gentiles, the indwelling of the Spirit. God has entrusted these to Paul and the other apostles.',
        },
        {
          kind: 'greek',
          id: 'cor4-1-oikonomos',
          title: 'Oikonomos — Steward',
          script: 'οἰκονόμος',
          translit: '<strong>oikonomos</strong> · steward; household manager; one entrusted with another&apos;s goods',
          description:
            'An oikonomos has real responsibility—he manages the household well or poorly. But he owns nothing. He is not the master. If he is fired, the household continues. The owner remains. So too with the apostle: his work matters, but he is not indispensable. The gospel does not depend on him.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('Moreover it is required in stewards, that a man be found '),
                hg('faithful', 'cor4-2-faithful'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-2-faithful',
          html:
            'The one thing a steward must be is <em>pistos</em>—faithful, trustworthy, reliable. Not eloquent. Not impressive. Not successful by the world&apos;s measure. Faithful. A steward who feeds the household is faithful. A steward who squanders the master&apos;s goods is unfaithful. It matters nothing what the servants in the household think of him. What matters is whether he has kept faith with his Master.',
        },
        {
          kind: 'carry',
          html:
            'If you serve others—in your home, your work, your church—you serve as a steward. The people you serve are not your judges. Your Master is. Your job is not to win their praise but to be faithful to the task you were given. Let that reframe how you listen to criticism, how you resist flattery.',
        },
        {
          kind: 'reflection',
          id: 'cor4-1-faithful',
          prompt: 'In what area of your life are you called to be a steward? Whose judgment matters most to you—the people you serve, or the Master who entrusted the work to you?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:3–4 — The Lord Alone Judges ──────────────────── */
    {
      ref: '1 Corinthians 4:3–4',
      title: 'It Is a Small Thing to Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('But with me it is a very small thing that I should be judged of you, or of '),
                hy('man&apos;s judgment', 'cor4-3-judgment'),
                t(': yea, I judge not mine own self.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-3-judgment',
          html:
            'Paul is not being arrogant. He is describing freedom. The Corinthians have divided into factions—some praising Paul, some Apollos, some Cephas. They rank their leaders, criticize, compare, judge. Paul steps out of that game entirely. Their judgment is a &quot;very small thing.&quot; This is radical. But it rests on something deeper: he does not even judge <em>himself</em>.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('For I know nothing by myself; yet am I not hereby justified: but he that '),
                hp('judgeth me is the Lord', 'cor4-4-judge-christ'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-4-self-knowledge',
          html:
            'Paul does not have complete knowledge of his own heart. He may be blind to his own failures. His intentions may be mixed. But ignorance of his own motives does not justify him. <em>He is not justified by his own self-assessment.</em> The Lord alone judges. The Lord sees what Paul cannot see about himself.',
        },
        {
          kind: 'christ',
          id: 'cor4-4-judge-christ',
          title: 'Christ Connection — The Judge Who Sees All',
          html:
            'Christ alone has authority to judge because Christ alone knows the hearts. &quot;He knows all things&quot; (1 John 21:17). The apostles will sit on thrones judging the twelve tribes of Israel (Matt 19:28), but Christ is the final judge. In Hebrews 4:12–13, the Word of God is described as able to &quot;judge the thoughts and intents of the heart&quot; and all things are &quot;naked and opened unto the eyes of him with whom we have to do.&quot; Nothing remains hidden from Him.',
        },
        {
          kind: 'carry',
          html:
            'You cannot fully know yourself. Your judgments of yourself are incomplete, perhaps blind. Neither can you fully know the hearts of others. What you can do is walk in honesty with God and leave judgment to Him. The relief here is real: you don&apos;t have to figure yourself out. He already has.',
        },
        {
          kind: 'reflection',
          id: 'cor4-4-heart',
          prompt: 'What part of your own heart or motives do you find hardest to be honest about? How does it change things to know that Christ sees what you cannot?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:5 — The Lord Will Judge and Reveal ──────────── */
    {
      ref: '1 Corinthians 4:5',
      title: 'The Day of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('Therefore judge nothing before the time, until the Lord come, who both will '),
                hg('bring to light the hidden things of darkness', 'cor4-5-reveal'),
                t(', and will make manifest the counsels of the hearts: and then shall every man have praise of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-5-reveal',
          html:
            'Paul draws the consequence. Do not judge yet. The full truth is not visible now. Some things are hidden in darkness. Some motives are concealed even from the one who holds them. But the Lord will come, and He will flood everything with light. What was hidden will be revealed. What the heart truly intended will be made known. <em>Then</em>, when all is visible, will come the true judgment—not the petty rankings the Corinthians are making now, but the judgment that reflects reality.',
        },
        {
          kind: 'commentary',
          id: 'cor4-5-praise',
          html:
            'And here is Paul&apos;s hope: when that day comes, &quot;every man have praise of God.&quot; Not from other people. From God. Praise from the Lord who sees truly, who knows the heart, who has watched the faithful work done in secret, the kindness shown when no one was watching, the hard choices made at cost. That praise is what matters.',
        },
        {
          kind: 'carry',
          html:
            'You are not responsible for the final verdict on yourself or others. Your job is faithfulness. Leave judgment to the Lord. This both convicts and comforts: the hidden things will be revealed, and if you&apos;ve walked in integrity, you have nothing to fear. If you&apos;ve cut corners, the exposure will sting. But the truth will finally be known.',
        },
        {
          kind: 'reflection',
          id: 'cor4-5-hidden',
          prompt: 'What hidden things in your heart would you most fear or most hope to have revealed? What does it change to believe that the Lord sees them all now?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:6–8 — What Hast Thou That Thou Didst Not Receive? */
    {
      ref: '1 Corinthians 4:6–8',
      title: 'Gifts Received, Not Earned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('Now, brethren, I have in a figure transferred these things to myself and to Apollos for your sakes; that ye might learn in us not to think of men above that which is written; that no one of you be puffed up for one against another. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-6-puffed',
          html:
            'Paul steps back. He has been using himself and Apollos as examples. His point is not about them personally but about a spiritual danger: inflation, pride, the puffing up that comes when believers begin to rate themselves against Scripture&apos;s standard. The Corinthians are being puffed up by their own spiritual gifts—wisdom, knowledge, eloquence—as though these were achievements of their own making.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('For who maketh thee to '),
                hy('differ from another', 'cor4-7-differ'),
                t('? and what hast thou that thou '),
                hg('didst not receive', 'cor4-7-receive'),
                t('? now if thou didst receive it, why dost thou glory, as if thou hadst not received it?'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor4-7-differ',
          title: 'Diapherō — To Differ; To Distinguish',
          script: 'διαφέρω',
          translit: '<strong>diapherō</strong> · to differ; to distinguish; to carry apart',
          description:
            'What is it that sets one person apart from another? For the Corinthians, the difference was spiritual gifts—wisdom, eloquence, revelation. But Paul is asking: who made you different? The answer is God alone. Your gifts are not your own invention. They are God&apos;s deposit in you.',
        },
        {
          kind: 'commentary',
          id: 'cor4-7-receive',
          html:
            'This is the killer question in the New Testament. &quot;What hast thou that thou didst not receive?&quot; Every good thing is a gift. Your intelligence: received. Your appearance: received. Your opportunities: received. Your capacity to understand Scripture, to speak well, to lead others: all received. If everything is received, then pride is nonsense. You cannot glory in what you did not make.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('Now ye are full, now ye are rich, '),
                hg('ye have reigned as kings without us', 'cor4-8-reigned'),
                t(': and I would to God ye did reign, that we also might reign with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-8-reigned',
          html:
            'Paul is being sarcastic now, but with real sorrow underneath. The Corinthians have become full, rich, satisfied—and they have done it without the apostles. They think they have &quot;reigned as kings.&quot; They feel they have arrived spiritually. But Paul knows the truth: they are not full. They are empty. They are confusing the gifts of the Spirit with the fruit of the Spirit. Paul&apos;s longing is real: &quot;I would to God ye did reign, that we also might reign with you.&quot; He wants them to see the danger they are in.',
        },
        {
          kind: 'carry',
          html:
            'Whatever you have that is good has been given to you. Not earned. Not achieved. Given. This means you have nothing to boast about. It also means you are radically free from the comparison trap. Someone else&apos;s gifts do not diminish yours. You are not competing. You are all receiving from the same Source.',
        },
        {
          kind: 'reflection',
          id: 'cor4-7-gift',
          prompt: 'What gift or ability do you most tend to take credit for? What would change if you truly saw it as something received rather than something earned?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:9–13 — The Apostles&apos; Condition as Spectacle ───── */
    {
      ref: '1 Corinthians 4:9–13',
      title: 'Spectacle to Angels and Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('For I think that God hath set forth us the apostles last, as it were appointed to '),
                hy('death', 'cor4-9-death'),
                t(': for we are made a '),
                hg('spectacle unto the world, and to angels, and to men', 'cor4-9-spectacle'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-9-death',
          html:
            'Paul uses a Roman image: the condemned criminals led last into the arena to fight wild beasts. The crowd watches, knowing they will likely die. This is how Paul sees the apostles&apos; calling: they are set forth as men appointed to death, visible in their weakness and vulnerability. Yet Paul does not resent this. He sees it as the very shape of faithful ministry.',
        },
        {
          kind: 'greek',
          id: 'cor4-9-spectacle',
          title: 'Theatron — Theater; Spectacle',
          script: 'θέατρον',
          translit: '<strong>theatron</strong> · theater; spectacle; public show',
          description:
            'The apostles are a theatron—a spectacle for all to watch. Not a comfortable position. Exposed to judgment, to ridicule, to danger. Yet in this very exposure, Christ&apos;s power becomes visible through their weakness. They are not hidden. They are on display.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('We are '),
                hg('fools for Christ&apos;s sake', 'cor4-10-fools'),
                t(', but ye are wise in Christ; we are weak, but ye are strong; ye are honourable, but we are despised.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-10-fools',
          html:
            'Paul draws a sharp contrast. The apostles are &quot;fools for Christ&apos;s sake&quot; while the Corinthians are &quot;wise in Christ.&quot; The apostles are weak, the Corinthians strong. The apostles despised, the Corinthians honored. Paul is not complaining. He is saying: the gospel has cost us everything. We have given up reputation, comfort, safety. The Corinthians are reaping the benefits of our weakness. Yet some of them treat us as though we are less important than their preferred leaders.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('Even unto this present hour we both hunger, and thirst, and are naked, and are buffeted, and have no certain dwellingplace; '),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('And labour, working with our own hands: being reviled we bless; being persecuted we suffer it; '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-11-hunger',
          html:
            'Paul lists the specifics: hunger, thirst, nakedness, beatings, homelessness. He labors with his own hands (making tents) while also preaching and planting churches. And when reviled, he blesses. When persecuted, he endures. This is the life of the apostle. This is what faithfulness looks like in practice. The Corinthians are comfortable. Paul is at the edge of survival. Yet he does not ask for pity. He simply tells the truth.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('Being defamed, we intreat: we are made as the '),
                hg('filth of the world', 'cor4-13-filth'),
                t(', and are the '),
                hy('offscouring of all things', 'cor4-13-offscouring'),
                t(' unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-13-filth',
          html:
            'The apostles are treated as garbage. &quot;Filth of the world.&quot; This is what the Corinthians need to understand: Paul is not speaking from a position of privilege or comfort. He is speaking from the position of the world&apos;s refuse. Yet he does not return evil for evil. When defamed, he entreats (makes intercession). He blesses those who curse him. He embodies the cross.',
        },
        {
          kind: 'greek',
          id: 'cor4-13-offscouring',
          title: 'Peripsēma — Offscouring; Scrapings',
          script: 'περίψημα',
          translit: '<strong>peripsēma</strong> · offscouring; sweepings; that which is scraped off and discarded',
          description:
            'The word literally means what is wiped off and thrown away. In some ancient texts it was used as a term for scapegoats or for the lowest human refuse. Paul is saying: we are that. We are the dirt the world scrapes off its shoes. And we bear it for the gospel.',
        },
        {
          kind: 'christ',
          id: 'cor4-9-spectacle-christ',
          title: 'Christ Connection — The Exposed One',
          html:
            'The apostles&apos; condition echoes Christ&apos;s own exposure on the cross. In Hebrews 12:2, Jesus is described as enduring the cross, &quot;despising the shame.&quot; Like Him, the apostles are made a spectacle. Like Him, they are scorned and rejected. Paul would later write, &quot;Always bearing about in the body the dying of the Lord Jesus, that the life also of Jesus might be made manifest in our body&quot; (2 Corinthians 4:10). The apostles&apos; weakness displays Christ&apos;s power.',
        },
        {
          kind: 'carry',
          html:
            'If you follow Christ, expect to be treated by the world as garbage sometimes. Not always. But sometimes. The cross is foolishness to those who are perishing. When you stand for truth, for justice, for Christ, the world may despise you. But your weakness is where Christ&apos;s strength appears. Your exposure is where His mercy is seen.',
        },
        {
          kind: 'reflection',
          id: 'cor4-9-spectacle-reflect',
          prompt: 'In what area of your faith do you fear being exposed or despised by the world? How does Paul&apos;s example of faithfulness through disgrace challenge you?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:14–17 — A Father&apos;s Warning ──────────────── */
    {
      ref: '1 Corinthians 4:14–17',
      title: 'My Beloved Sons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('I write not these things to shame you, but as my '),
                hg('beloved sons I warn you', 'cor4-14-warn'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-14-warn',
          html:
            'Paul shifts tone. He is not writing to humiliate the Corinthians. He is writing as a father. He calls them &quot;beloved sons.&quot; The correction he has given—about judges, about gifts, about the apostles&apos; suffering—is not shame-making but loving instruction. A father warns his sons not to shame them but to protect them from danger they do not yet see.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('For though ye have ten thousand instructors in Christ, yet have ye not many fathers: for in Christ Jesus I have '),
                hy('begotten you through the gospel', 'cor4-15-gennaō'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-15-fathers',
          html:
            'A father is not the same as an instructor. An instructor transfers information. A father shapes a soul. Pedagoues—tutors—are many. But fathers are rare. Paul is claiming the role of father to the Corinthian church. He brought them to birth in the gospel. He carried them in travail until Christ was formed in them. This relationship cannot be replaced by admiring another leader.',
        },
        {
          kind: 'greek',
          id: 'cor4-15-gennaō',
          title: 'Gennáō — To Beget; To Give Birth',
          script: 'γεννάω',
          translit: '<strong>gennáō</strong> · to beget; to father; to bring into existence',
          description:
            'Paul uses the language of childbirth. Through the gospel, he has fathered them. They owe him not admiration but the filial affection children naturally give a father. The gospel is the means, but Paul is willing to name himself as instrument of that fathering.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('Wherefore I beseech you, '),
                hg('be ye followers of me', 'cor4-16-followers'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-16-followers',
          html:
            'This is not arrogance. It is the natural plea of a father to his children: follow me, not in pride, but in the way I have followed Christ. Paul is not saying &quot;Agree with me.&quot; He is saying &quot;Watch how I live and walk that way yourself.&quot; This is the deepest kind of discipleship—imitation born from love.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 17,
              spans: [
                t('For this cause have I sent unto you Timotheus, who is my beloved son, and faithful in the Lord; who shall bring you into remembrance of my ways which be in Christ, as I teach every where in every church.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-17-timothy',
          html:
            'Paul sends Timothy as his proxy, his representative. Timothy himself is Paul&apos;s &quot;beloved son,&quot; and he will remind the Corinthians of Paul&apos;s ways. The ways are consistent: the same gospel Paul teaches in Corinth he teaches in every church. He is not a man of shifting principles or hidden agendas. His life is transparent because it is shaped entirely by Christ.',
        },
        {
          kind: 'christ',
          id: 'cor4-14-father-christ',
          title: 'Christ Connection — The Spiritual Father',
          html:
            'Christ Himself forms His followers through the gospel, as Paul forms the Corinthians. In John 1:12–13, believers are born not of flesh but of the Spirit. Christ says, &quot;Feed my sheep&quot; (John 21:17)—a father&apos;s charge. Paul is not usurping Christ&apos;s role but participating in it. A spiritual father carries the same posture toward his disciples that Christ does: protection, formation, warning against danger, deep love.',
        },
        {
          kind: 'carry',
          html:
            'You have many instructors and sources of information. But a true spiritual parent is rare and precious. If you have one—someone who knows you, cares for your soul, has modeled faithfulness in Christ—honor that relationship. And if you are becoming that kind of parent to others, know that your life, more than your words, is the gift you give them.',
        },
        {
          kind: 'reflection',
          id: 'cor4-14-parent',
          prompt: 'Who has been a spiritual parent to you? What did that person show you about Jesus through the way they lived? How might God be calling you to be that for someone else?',
        },
      ],
    },

    /* ─── 1 Corinthians 4:18–21 — With a Rod, or in Love? ──────────────── */
    {
      ref: '1 Corinthians 4:18–21',
      title: 'The Rod or the Spirit of Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('Now some are puffed up, as though I were not coming to you. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-18-puffed',
          html:
            'Some in Corinth are brazen in their boasting, thinking Paul will not come to confront them. They are using his absence as permission to continue their pride and factionalism.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('But I will come to you shortly, if the Lord will, and will know, not the speech of them which are puffed up, but the '),
                hg('power', 'cor4-19-power'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-19-power',
          html:
            'Paul promises to come soon. And when he arrives, he will not measure people by their eloquence or their words. He will measure them by their power—their capacity to manifest Christ, their ability to do what the Spirit of God enables. Words without power are empty. Power without love is cruelty. But Paul is looking for the real thing: the Spirit working through obedience and faith.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 20,
              spans: [
                t('For the kingdom of God is not in '),
                hg('word, but in power', 'cor4-20-kingdom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-20-kingdom',
          html:
            'This is a fundamental statement of what the gospel is. The kingdom of God is not established by eloquence, by impressive talk, by clever arguments. It is established by <em>power</em>—the power of the Spirit changing hearts, converting sinners, healing the sick, casting out demons, raising the dead. The Corinthians are impressed by words. Paul asks: where is the power? Where is the evidence of God at work?',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('What will ye? shall I come unto you with a '),
                hg('rod', 'cor4-21-rod'),
                t(', or in love, and in the spirit of meekness?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-21-rod',
          html:
            'Paul gives them a choice. When he comes, will he need to discipline them, to use the rod of correction? Or will he find them already reconciled, already humbled, already walking in the love and meekness of Christ? The choice is theirs. A father would much rather come in love. But if necessary, he will come with discipline. The tone of his visit depends on whether they heed this letter.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the people we lead or love will test us. They will wonder if we will actually follow through. Paul is clear: he will. But his preference is always for reconciliation and love over discipline. If you are in a position of any leadership or responsibility, carry that same posture: come in love as far as possible, but be willing to correct if necessary. And be clear about it, so those you lead take your words seriously.',
        },
        {
          kind: 'reflection',
          id: 'cor4-21-rod',
          prompt: 'When someone you love or respect sets a boundary with you, how do you respond? Would you rather be corrected in love or left to your own pride?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Moreover it is required in stewards, that a man be found faithful. Therefore judge nothing before the time, until the Lord come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 4 · Study Guide',
  },

  hasHebrew: false,
};
