import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 14 — Iconium, Lystra, Derbe, and the Journey Back
 *
 * Paul and Barnabas preach at Iconium. The city divides. Signs and wonders multiply.
 * Threatened with stoning, they flee to Lystra and Derbe. At Lystra, Paul heals a man
 * lame from birth. The crowd mistakes them for gods—Mercury and Jupiter. Paul tears his
 * clothes: &ldquo;We also are men of like passions with you.&rdquo; Yet the same city
 * stones him. Left for dead, he rises. They travel to Derbe, then make the dangerous
 * journey back through every city, ordaining elders, strengthening the disciples,
 * reminding them that &ldquo;we must through much tribulation enter into the kingdom
 * of God.&rdquo; Back at Antioch, they rehearse all that God had done.
 */
export const ACTS_14: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 14,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 22 },
  intros: [
    'Acts 14 is Paul and Barnabas on the road. They are not hiding. They move openly through Iconium, Lystra, and Derbe, speaking boldly in the synagogues and public squares. Miracles follow them—the blind see, the lame walk, the demon-possessed are freed. But so does opposition. In Iconium the city divides. In Lystra the crowd nearly apotheosizes them before the same crowd stones Paul nearly to death. This is the pattern of the early gospel: power and witness, followed immediately by hatred and violence. Yet the apostles do not stop. They return. They strengthen. They ordain. They move toward the very places that tried to kill them.',
    'The punchline of the chapter comes near the end: &ldquo;We must through much tribulation enter into the kingdom of God.&rdquo; This is not a promise of ease. This is not a prosperity gospel. It is a statement of fact. The gospel spreads not through comfort but through the willingness of the apostles—and the believers they raise up—to walk through tribulation with Jesus, to let His Spirit strengthen them when their bodies are broken, to keep speaking and moving and ordaining and praying even in the face of death. By the chapter&apos;s end, when they return to Antioch and &ldquo;rehearsed all that God had done,&rdquo; the point is clear: God&apos;s work does not depend on a smooth road. It depends on apostles willing to take a hard one.',
  ],

  sections: [
    /* ─── Acts 14:1–7 — Iconium: Division ────────────────────────────────── */
    {
      ref: 'Acts 14:1–7',
      title: 'Iconium: The City Divides',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              1,
              t('And it came to pass in Iconium, that they went both together into the synagogue of the Jews, and '),
              hg('spake so that a great multitude both of the Jews and also of the Greeks believed', 'acts14-iconium-believe'),
              t('.')
            ),
            verse(
              2,
              t('But the '),
              hy('unbelieving Jews', 'acts14-apitheo'),
              t(' stirred up the Gentiles, and made their minds evil affected against the brethren.')
            ),
            verse(
              3,
              t('Long time therefore abode they speaking boldly in the Lord, which gave testimony unto the word of his grace, and '),
              hg('granted signs and wonders to be done by their hands', 'acts14-semeion'),
              t('.')
            ),
            verse(
              4,
              t('But the multitude of the city was divided: and part held with the Jews, and part with the apostles.')
            ),
            verse(
              5,
              t('And when there was an assault made both of the Gentiles, and also of the Jews with their rulers, to '),
              hg('use them despitefully, and to stone them', 'acts14-stone-intent'),
              t(',')
            ),
            verse(
              6,
              t('They were aware of it, and fled unto Lystra and Derbe, cities of Lycaonia[res:ascsa-lystra-lycaonia], and unto the region that lieth round about:')
            ),
            verse(
              7,
              t('And there they preached the gospel.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-iconium-believe',
          html:
            'In Iconium[res:bibleodyssey-iconium] they speak, and believers multiply. The response is immediate and real. Greeks and Jews both turn to Christ. This is not tentative faith—Luke says they &ldquo;believed.&rdquo; There is no apology for boldness. The apostles did not tone down the message to avoid offense. They spoke plainly of grace and the resurrection. And the Spirit moved.',
        },
        {
          kind: 'commentary',
          id: 'acts14-apitheo',
          html:
            'But not everyone. The unbelieving Jews—those who refuse the testimony—stir up opposition. Notice the word: they make the Gentiles&apos; minds &ldquo;evil affected.&rdquo; Unbelief is contagious. One refusal kindles others. What begins as one group&apos;s &ldquo;no&rdquo; becomes a city&apos;s hostility. This is the power of narrative in opposition: whoever controls the story controls the crowd.',
        },
        {
          kind: 'greek',
          id: 'acts14-apitheo',
          title: 'Apeitheo — To Disbelieve; To Refuse to Obey',
          script: 'ἀπειθέω',
          translit: '<strong>apeitheo</strong> · to disobey; to refuse to believe; to be stubborn against truth',
          description:
            'The prefix <em>apo</em> means &ldquo;away from.&rdquo; <em>Apeitheo</em> is to turn away from faith, to make an active choice against the testimony. It is not passive ignorance but active resistance.',
        },
        {
          kind: 'commentary',
          id: 'acts14-semeion',
          html:
            'Paul and Barnabas do not retreat into private prayer. They stay in Iconium and speak boldly. And the Lord gives them signs and wonders. The word <em>semeion</em> means a sign—something that points beyond itself, that shows God&apos;s hand at work. Miracles are not the endpoint; they are the signal. They are God saying: <em>This message is from me.</em>',
        },
        {
          kind: 'greek',
          id: 'acts14-semeion',
          title: 'Semeion — Sign; Miracle; Token',
          script: 'σημεῖον',
          translit: '<strong>semeion</strong> · a sign; a token; a miracle that points to divine power',
          description:
            'A sign is not mere spectacle. It is an evidence. It points to a meaning beyond itself. When Paul heals the lame, the miracle is a sign that God&apos;s kingdom is at work. The power validates the message.',
        },
        {
          kind: 'commentary',
          id: 'acts14-stone-intent',
          html:
            'The opposition escalates. It is not just debate now; it is violence. The rulers—the civic leadership—join the effort to stone them. At this moment, Paul and Barnabas make a crucial decision: they do not stand and resist. They flee. Martyrdom has its time. But so does prudence. They escape to Lystra and Derbe.',
        },
        {
          kind: 'carry',
          html:
            'Paul and Barnabas speak boldly, and signs follow. Yet opposition comes. The point is not that boldness guarantees safety. The point is that boldness—speaking the truth plainly, depending on God&apos;s power rather than human approval—is the standard. You may face division. You may anger the powerful. You may have to run. But the standard does not change. Speak what you have seen and heard.',
        },
        {
          kind: 'reflection',
          id: 'acts14-iconium-reflect',
          prompt: 'When have you faced the temptation to soften your faith or your witness because opposition came? What would boldness look like for you this week?',
        },
      ],
    },

    /* ─── Acts 14:8–10 — The Lame Man at Lystra ───────────────────────────── */
    {
      ref: 'Acts 14:8–10',
      title: 'The Lame Man at Lystra',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              8,
              t('And there sat a certain man at Lystra, '),
              hy('impotent in his feet', 'acts14-dynamai'),
              t(', being a cripple from his mother&apos;s womb, who never had walked:')
            ),
            verse(
              9,
              t('The same heard Paul speak: who stedfastly beholding him, and perceiving that he had '),
              hg('faith to be healed', 'acts14-faith-heal'),
              t(',')
            ),
            verse(
              10,
              t('Said with a loud voice, '),
              hp('Stand upright on thy feet', 'acts14-christ-stand'),
              t('. And he leaped and walked.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-dynamai',
          html:
            'The man is <em>dynamai</em>—without power, impotent. He is a cripple from his mother&apos;s womb. This is not a recent illness. This is his entire life. He has sat. He has not walked. He has not stood. The condition seems permanent. It has the weight of nature, of destiny. Forty years in Acts 3 with the Beautiful Gate. A lifetime here with this man at Lystra[res:bibleodyssey-lystra]. Both designed to show us what impossible looks like to human judgment.',
        },
        {
          kind: 'commentary',
          id: 'acts14-faith-heal',
          html:
            'Paul perceives something in the man—faith. Not faith that the healing will happen, necessarily, but faith that it <em>can</em>. Paul sees something in his posture, his attention, his openness. The man has heard Paul speak about Jesus. Something in that word has unlocked a possibility in him. He has believed. And Paul, seeing the faith, acts on it. The healing is not the man&apos;s faith alone, nor Paul&apos;s power alone. It is the meeting.',
        },
        {
          kind: 'greek',
          id: 'acts14-dynamai',
          title: 'Dynamai — To Lack Power; To Be Impotent',
          script: 'δύναμαι',
          translit: '<strong>dynamai</strong> · to be able; to have power. Here in the negative: to be without power, impotent',
          description:
            'The noun <em>dynamis</em> (power, strength) becomes a verb in the negative: he lacks the <em>dynamis</em> to stand. Yet Paul, who has <em>dynamis</em> from the Spirit, speaks. And the power transfers.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-stand',
          title: 'Christ Connection — Rise and Walk',
          html:
            'This healing echoes the healing in Acts 3—another lame man, another command to rise. But it also echoes Christ&apos;s own call: &ldquo;Take up thy bed and walk&rdquo; (Mark 2:9). Jesus stood the powerless upright. He still does. Now Paul, filled with the Spirit of Jesus, speaks the same word. It is as though the risen Christ is speaking through the apostle&apos;s mouth. &ldquo;I am with you alway&rdquo; (Matt. 28:20)—even in Lystra, even through an ordinary man, Jesus is still healing.',
        },
        {
          kind: 'carry',
          html:
            'The man at Lystra did not heal himself. He heard a word. He believed. And the power was given. You do not have to pull yourself up by your bootstraps. You do not have to generate your own strength. But you do have to hear the word and believe it. You have to let the command of Christ reach you. &ldquo;Stand upright.&rdquo; Will you?',
        },
        {
          kind: 'reflection',
          id: 'acts14-stand-reflect',
          prompt: 'In what area of your life have you felt powerless, like the man at Lystra? What would it mean to hear Christ&apos;s command to stand upright?',
        },
      ],
    },

    /* ─── Acts 14:11–15 — The Gods Descend ────────────────────────────────── */
    {
      ref: 'Acts 14:11–15',
      title: 'The Gods Have Come Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              11,
              t('And when the people saw what Paul had done, they lifted up their voices, saying in the speech of Lycaonia, The '),
              hg('gods are come down to us in the likeness of men', 'acts14-gods'),
              t('.')
            ),
            verse(
              12,
              t('And they called Barnabas, Jupiter; and Paul, Mercurius, because he was the chief speaker.')
            ),
            verse(
              13,
              t('Then the priest of Jupiter, which was before their city, brought oxen and garlands unto the gates, and would have done sacrifice with the people.')
            ),
            verse(
              14,
              t('Which when the apostles, Barnabas and Paul, heard of, they '),
              hy('rent their clothes', 'acts14-diorrhegnumi'),
              t(', and ran in among the people, crying out,')
            ),
            verse(
              15,
              t('And saying, Sirs, '),
              hp('why do ye these things? We also are men of like passions with you', 'acts14-pathos'),
              t(', and preach unto you that ye should turn from these vanities unto the living God, which made heaven, and earth, and the sea, and all things that are therein:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-gods',
          html:
            'The crowd sees a miracle and draws a conclusion: the gods have come down. This is not primitive ignorance. This is how their world works. Divine power means divinity. A man healed means a god has walked. The logic is flawless within their framework. But Paul and Barnabas operate within a different framework entirely. They do not accept the crowd&apos;s interpretation. What the crowd sees as proof that they are gods, Paul sees as proof that they must immediately speak.',
        },
        {
          kind: 'commentary',
          id: 'acts14-gods-rome',
          html:
            'Jupiter and Mercury. The king of gods and the messenger god. Paul is Mercury because he speaks. Barnabas is Jupiter because he is silent and majestic. The crowd has named them according to their theology, their stories, their longings. And they are about to sacrifice to them. The priest is bringing oxen. The garlands are ready. The machinery of worship is turning toward human beings. This echoes the Anatolian myth of Baucis and Philemon[res:theoi-baucis-philemon], where gods arrive disguised as mortals, testing mortal hospitality.',
        },
        {
          kind: 'greek',
          id: 'acts14-diorrhegnumi',
          title: 'Diorhegnumi — To Tear Apart; To Rend',
          script: 'διορρήγνυμι',
          translit: '<strong>diorhegnumi</strong> · to tear apart; to rend; to tear in pieces',
          description:
            'It is a violent gesture. Paul and Barnabas do not merely remove their garments; they tear them. This is the sign of profound distress, the language of grief and lamentation. They are horrified. Not angry at the people, but anguished at what is about to happen—the deflection of worship to the wrong target.',
        },
        {
          kind: 'carry',
          html:
            'Notice what distressed them: not the honor, not the oxen, not the veneration. The distress was the worship being directed to the wrong place. If your deepest concern is not your own credibility or comfort but the integrity of who receives glory and worship, that is a sign your heart is aligned with God&apos;s. Paul tears his clothes not for himself but for the truth.',
        },
        {
          kind: 'reflection',
          id: 'acts14-worship-reflect',
          prompt: 'What do you worship without meaning to? Where do you pour energy and praise that ought to go to God alone?',
        },
        {
          kind: 'artwork',
          matchTitle: /mercury|jupiter|lystra|gods/i,
          caption: 'Acts 14:11–15 · The Gods Come Down',
        },
      ],
    },

    /* ─── Acts 14:15–18 — Men of Like Passions ───────────────────────────── */
    {
      ref: 'Acts 14:15–18',
      title: 'We Also Are Men of Like Passions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              16,
              t('Who in times past suffered all nations to walk in their own ways.')
            ),
            verse(
              17,
              t('Nevertheless he left not himself without witness, in that he did good, and gave us rain from heaven, and fruitful seasons, filling our hearts with food and gladness.')
            ),
            verse(
              18,
              t('And with these sayings scarce restrained they the people, that they had not done sacrifice unto them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-pathos',
          html:
            '&ldquo;We also are men of like passions with you.&rdquo; The Greek word is <em>pathos</em>—feeling, passion, emotion, humanity. Paul is saying: we are human. We feel. We suffer. We hunger. We die. You cannot worship us. We are not the answer to your need. But there is an answer. There is a God who did not leave Himself without witness. God has spoken. Now listen.',
        },
        {
          kind: 'greek',
          id: 'acts14-pathos',
          title: 'Pathos — Feeling; Passion; Suffering; Emotion',
          script: 'πάθος',
          translit: '<strong>pathos</strong> · feeling; passion; emotion; what is felt or suffered',
          description:
            'In the singular, <em>pathos</em> often means suffering or affliction. But here, &ldquo;of like passions,&rdquo; it means shared human emotion and vulnerability. Paul is claiming human solidarity. I am not your god. I suffer what you suffer. But there is one who does not.',
        },
        {
          kind: 'commentary',
          id: 'acts14-witness',
          html:
            'God did not abandon the nations who walked their own way. He left Himself a witness: the created world. Rain. Seasons. Crops. The human heart filled with food and gladness. Every living person has evidence of God&apos;s care in the simple fact of their existence. Paul points them from the false gods to the God who has been feeding them their whole lives. The answer is not Mercury and Jupiter. The answer is present in every harvest, every rain, every meal.',
        },
        {
          kind: 'commentary',
          id: 'acts14-scarce-restrain',
          html:
            'Even with all this, the crowd scarce refrains from sacrifice. The liturgy of false worship is powerful. The habit is deep. The priest is ready. The oxen are led. Paul has to speak with intensity and clarity to turn their direction even slightly. This is the power of idolatry: it is almost unstoppable once it begins. Better to never begin than to try to stop it.',
        },
        {
          kind: 'carry',
          html:
            'When you are tempted to make a god out of someone, remember: they are of like passions with you. They will fail. They will suffer. They will die. No human can carry the weight of divinity. The God who feeds you, who sends rain, who fills your heart with gladness—that is the only God who can bear that weight. Redirect what you pour into human idols toward the living God.',
        },
        {
          kind: 'reflection',
          id: 'acts14-pathos-reflect',
          prompt: 'Who or what have you been tempted to worship or revere as more than human? What would it look like to remember their humanity and redirect your worship?',
        },
      ],
    },

    /* ─── Acts 14:19–22 — Stoned and Raised ───────────────────────────────── */
    {
      ref: 'Acts 14:19–22',
      title: 'Stoned and Left for Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              19,
              t('And there came thither certain Jews from Antioch and Iconium, who persuaded the people, and, having stoned Paul, '),
              hg('drew him out of the city, supposing he was dead', 'acts14-nekros'),
              t('.')
            ),
            verse(
              20,
              t('Howbeit, as the disciples stood round about him, he rose up, and came into the city: and the next day he departed with Barnabas unto Derbe.')
            ),
            verse(
              21,
              t('And when they had preached the gospel to that city, and had taught many, they returned again to Lystra, and to Iconium, and Antioch,')
            ),
            verse(
              22,
              t('Confirming the souls of the disciples, and exhorting them to continue in the faith, and that '),
              hy('we must through much tribulation enter into the kingdom of God', 'acts14-thlipsis'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-nekros',
          html:
            'The opposition that began in Iconium has followed Paul. The unbelieving Jews persuade the crowd. The crowd stones. Paul falls. They drag his body outside the city wall as if to bury it there. They suppose him dead. The apostles who have gathered do not flee. They stand around him. And Paul rises.',
        },
        {
          kind: 'commentary',
          id: 'acts14-rise',
          html:
            'How? Luke does not explain. Paul had been stoned. He had been left for dead. Now he rises and walks back into the city. He is marked—his scars must be visible—but he moves. The next day he leaves for Derbe. This is not a resurrection like Christ&apos;s. This is a resurrection of a different kind: a man who should be dead, walking. It is a sign of something deeper than physical recovery. It is the Spirit of Christ working in him, restoring him, driving him forward.',
        },
        {
          kind: 'commentary',
          id: 'acts14-return',
          html:
            'Then comes the remarkable choice: Paul does not stay in safe Derbe. After preaching there, he does the unthinkable. He returns to Lystra, to Iconium, to Antioch—the very cities that have tried to kill him. Not to hide. Not to flee again. But to strengthen the disciples, to ordain leaders, to consolidate the work. This is courage of a different order. This is the willingness to face the knife twice.',
        },
        {
          kind: 'greek',
          id: 'acts14-thlipsis',
          title: 'Thlipsis — Tribulation; Pressure; Affliction',
          script: 'θλῖψις',
          translit: '<strong>thlipsis</strong> · pressure; affliction; tribulation; distress',
          description:
            'The Greek word suggests not just sadness but pressure—the weight of external force. <em>Thlipsis</em> is what is done to you by a hostile world. It is persecution, opposition, hardship. The kingdom is not entered through comfort. It is entered through the gauntlet.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-tribulation',
          title: 'Christ Connection — Through Tribulation to the Kingdom',
          html:
            'Jesus told His disciples: &ldquo;In the world ye shall have tribulation: but be of good cheer; I have overcome the world&rdquo; (John 16:33). He also said: &ldquo;And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me&rdquo; (Luke 9:23). The tribulation is not punishment. It is the price of following Jesus into a hostile world. But the promise is not an easy road. The promise is that the one who walked this road first, who was beaten and crucified and raised, walks it with you.',
        },
        {
          kind: 'carry',
          html:
            'You are not promised safety if you follow Jesus. You are promised that tribulation will not be the end of your story. Paul was stoned and left for dead. By any sane standard, that was the end. But it was not. The Spirit raised him. Not in some distant heaven, but here, on the very road where he was attacked. That same Spirit is at work in your tribulation. The pressure does not prove you have lost the way. It may prove you are on it.',
        },
        {
          kind: 'reflection',
          id: 'acts14-tribulation-reflect',
          prompt: 'What tribulation are you walking through right now? What would it look like to trust that this is not the end of the story, but part of the entry into God&apos;s kingdom?',
        },
      ],
    },

    /* ─── Acts 14:21–25 — Ordaining Elders ───────────────────────────────── */
    {
      ref: 'Acts 14:23–25',
      title: 'Ordaining Elders and Commending to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              23,
              t('And when they had '),
              hy('ordained them elders in every church', 'acts14-cheirotoneō'),
              t(', by prayer and fasting, they commended them to the Lord, on whom they believed.')
            ),
            verse(
              24,
              t('And after they had passed throughout Pisidia, they came to Pamphylia.')
            ),
            verse(
              25,
              t('And when they had preached the word in Perga, they went down into Attalia:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-elders',
          html:
            'Paul and Barnabas do not build on themselves. They ordain elders in every church. They establish leadership. The work will not depend on traveling apostles who blow through town. The churches will have shepherds, local leaders who know the people, who have proven themselves, who can tend the flock long-term. This is apostolic wisdom: do not leave churches orphaned. Leave them led.',
        },
        {
          kind: 'greek',
          id: 'acts14-cheirotoneō',
          title: 'Cheirotoneō — To Appoint; To Ordain; To Choose by Raising the Hand',
          script: 'χειροτονέω',
          translit: '<strong>cheirotoneō</strong> · to appoint by a show of hands; to ordain; to designate by vote',
          description:
            'The root is literally &ldquo;hand-stretch.&rdquo; In democratic Athens, you voted by raising your hand. Here it means to choose and commission publicly. The elders are chosen and set apart by prayer and fasting, with the apostles&apos; hands over them in blessing.',
        },
        {
          kind: 'commentary',
          id: 'acts14-commend',
          html:
            'Notice the method: prayer and fasting. This is not bureaucratic appointment. This is spiritual consecration. They fast—they deny themselves food, they clear space for prayer—and they commend the elders to the Lord. They place the responsibility on God. These leaders are not Paul&apos;s or Barnabas&apos;s. They are the Lord&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'acts14-journey-end',
          html:
            'The journey loops back. They came up through Asia Minor preaching. Now they are on the return leg, heading back to the coast, to Antioch, to home. But they are not hurrying. They pause. They teach. They ordain. The return is as deliberate as the advance. This is the shape of faithful work: go with the gospel, establish the believers, ordain the leaders, trust them to the Lord, return.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not try to be everything to every church. He raises up others. He prays with fasting—he makes space for the Spirit to move. Then he lets go. He commends them to the Lord. Your work is not yours to carry forever. Your job is to establish others who can carry it after you. That requires the wisdom to see potential leaders, the humility to develop them, and the faith to release them to God.',
        },
        {
          kind: 'reflection',
          id: 'acts14-elders-reflect',
          prompt: 'Who in your sphere of influence needs to be developed into a leader? What is your role in their growth? When will you have to let them go?',
        },
      ],
    },

    /* ─── Acts 14:26–28 — Rehearsing All That God Had Done ────────────────── */
    {
      ref: 'Acts 14:26–28',
      title: 'Back to Antioch and the Report',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              26,
              t('And thence sailed to Antioch, from whence they had been recommended to the grace of the Lord for the work which they fulfilled.')
            ),
            verse(
              27,
              t('And when they were come, and had gathered the church together, they '),
              hg('rehearsed all that God had done with them', 'acts14-exegeomai'),
              t(', and how he had opened the '),
              hp('door of faith unto the Gentiles', 'acts14-thyra-faith'),
              t('.')
            ),
            verse(
              28,
              t('And there they abode long time with the disciples.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-antioch-return',
          html:
            'They return to where they started. This is significant. The work began at Antioch. They were sent from there. They return there. Not to stay forever, but to report. To gather the church. To tell them what God did. In a world with no email, no printing press, no mass media, the report was everything. Word of mouth. Testimony. Face to face. Paul and Barnabas are the living witnesses, and they are present in the gathered assembly.',
        },
        {
          kind: 'commentary',
          id: 'acts14-exegeomai',
          html:
            'They &ldquo;rehearsed all that God had done.&rdquo; The word is <em>exegeomai</em>—to unfold, to explain, to narrate. Not just "here is what happened," but the story of it, the meaning, the arc from opposition to conversion to ordination to triumph. The church hears not just the facts but the theological meaning. They see the pattern of God&apos;s work.',
        },
        {
          kind: 'greek',
          id: 'acts14-exegeomai',
          title: 'Exegeomai — To Lead Out; To Recount; To Explain in Detail',
          script: 'ἐξηγέομαι',
          translit: '<strong>exegeomai</strong> · to lead out; to recount fully; to explain; to narrate in detail',
          description:
            'The word comes from <em>ex</em> (out) and <em>hegeomai</em> (to lead). To <em>exegeomai</em> is to lead out the full meaning of events. It is not bare recitation. It is interpretation, testimony, the telling of a story that shows God&apos;s hand.',
        },
        {
          kind: 'commentary',
          id: 'acts14-thyra-faith',
          html:
            'The punchline: God had opened the door of faith unto the Gentiles. Not just to Jews, not just to the circumcised, but to the uncircumcised nations. A door—access, opportunity, an opening for nations that were thought to be outside the covenant. The mission is global. The gospel knows no ethnic boundary. This is what they saw on the road through Galatia. This is what they report back.',
        },
        {
          kind: 'commentary',
          id: 'acts14-remain',
          html:
            'And they remained long time with the disciples. After the journey, after the hardship, after the stoning, Paul and Barnabas do not disappear. They stay. They pastor. They teach. They let the fruit of their labor grow in their presence. This is the final word: not the excitement of new conquest, but the patient work of long-term presence. They abode long time.',
        },
        {
          kind: 'carry',
          html:
            'When God opens a door, when He gives you access, when He expands your sphere—the response is not to disappear into the next project. The response is to return. To gather the people who sent you. To tell them what God did. To let them celebrate. To stay long enough that your presence helps them process what God has begun. Your testimony of what God has done is more valuable than the next frontier.',
        },
        {
          kind: 'reflection',
          id: 'acts14-report-reflect',
          prompt: 'What has God done in your life or work recently that needs to be rehearsed—told fully, with its meaning, to the people who care about you?',
        },
        {
          kind: 'artwork',
          matchTitle: /antioch|missionary|return/i,
          caption: 'Acts 14:26–28 · Back to Antioch',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And how he had opened the door of faith unto the Gentiles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 14 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-lystra',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Lystra',
      url: 'https://www.bibleodyssey.org/dictionary/lystra/',
      description: 'Open-access SBL entry on Lystra in Lycaonia, where Paul healed the cripple and was mistaken for Mercury, with archaeological context.',
    },
    {
      id: 'theoi-baucis-philemon',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Ovid, Metamorphoses 8 — Baucis & Philemon',
      url: 'https://www.theoi.com/Text/OvidMetamorphoses8.html',
      description: "Ovid's account of the Baucis and Philemon myth — the Anatolian tale of gods arriving in mortal form, echoed in the Lystra crowd's belief.",
    },
    {
      id: 'bibleodyssey-iconium',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Iconium',
      url: 'https://www.bibleodyssey.org/dictionary/iconium/',
      description: "Open-access SBL entry on Iconium (modern Konya), a major city on Paul's first missionary journey through Galatia.",
    },
    {
      id: 'ascsa-lystra-lycaonia',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Lystra and Lycaonian Archaeology',
      url: 'https://agora.ascsa.net/',
      description: 'American School of Classical Studies archaeological resources and excavation data on Asia Minor sites including Lystra in Lycaonia.',
    },
  ],

  hasHebrew: false,
};
