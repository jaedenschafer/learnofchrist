import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 3 — The Closing: Prayer, Faithfulness, Work, Peace, and the
 * Salutation by Paul&apos;s Own Hand.
 *
 * Paul closes his second letter to Thessalonica with final exhortations. He asks
 * for prayer, assures them of the Lord&apos;s faithfulness and protection, addresses
 * the idleness spreading in the church, and ends with the benediction of peace
 * and grace — sealed in his own handwriting. The chapter moves from prayer for
 * the Lord&apos;s word to have free course, through the discipline of work, to the
 * final peace that comes from the presence of the Lord.
 */
export const SECOND_THESSALONIANS_3: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 3,

  estimatedMinutes: { beginner: 5, intermediate: 11, deep: 16 },
  intros: [
    'The second letter to the Thessalonians closes with Paul&apos;s final exhortation. He asks for their prayers, reassures them of God&apos;s faithfulness, and then addresses the problem of idleness in the church. Some have stopped working, either from the belief that Christ&apos;s return is imminent or from mere sloth. Paul&apos;s response is clear: work is not beneath believers. It is a command.',
    'Paul does not leave them in judgment alone. He reminds them that the Lord is faithful—He will establish and keep them from evil. He tells them to withdraw from those who walk disorderly, but not without hope of restoration. And he closes not with threats but with peace and grace, signed in his own hand. This is a pastor&apos;s closing: firm, yes, but deeply affectionate.',
  ],

  bottomShare: {
    label: 'Share 2 Thessalonians 3 — The Final Peace and Grace',
    quote:
      'The Lord of peace himself give you peace always by all means. The grace of our Lord Jesus Christ be with you all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 3 · Study Guide',
  },

  sections: [
    /* ─── 2 Thessalonians 3:1–2 — Pray for Us ───────────────────────────── */
    {
      ref: '2 Thessalonians 3:1–2',
      title: 'Pray for Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Finally, brethren, '),
                hp('pray for us', 'pray-for-us'),
                t(', that the '),
                hy('word of the Lord may have free course, and be glorified, even as it is with you', 'free-course'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pray-for-us',
          html:
            'Paul opens his closing with a request: pray for us. Not a boast or command, but an invitation into partnership. The apostle does not consider himself above the need for prayer. He knows his work depends on the prayers of the saints. In requesting prayer, he gives the Thessalonians a way to stand with him in the mission.',
        },
        {
          kind: 'greek',
          id: 'trechō-course',
          title: 'Trechō — "Have Free Course" or "Run"',
          script: 'τρέχω',
          translit: '<strong>trechō</strong> · to run, to race, to have free course; to advance unhindered',
          description:
            'Paul pictures the word of the Lord as a runner. For the gospel to "have free course" is for it to run unobstructed, to spread without hindrance. Prayer removes the obstacles that would slow the word&apos;s progress. When believers pray, they are removing barriers to the gospel.',
        },
        {
          kind: 'commentary',
          id: 'free-course',
          html:
            'The word of the Lord is not meant to be contained or whispered. It is meant to have free course—to run, to spread, to be glorified. Paul had preached in Thessalonica and the word had taken root. Now he asks them to pray that the same thing happen elsewhere, "even as it is with you." Their prayer multiplies the gospel.',
        },
        {
          kind: 'carry',
          html:
            'Your prayers are not peripheral to God&apos;s work; they are essential to it. When you pray for missionaries, for pastors, for the spread of the gospel, you are not just offering encouragement—you are actively removing the spiritual obstacles that hinder the word. Do not underestimate the power of your intercession.',
        },
        {
          kind: 'reflection',
          id: '3-1-prayer',
          prompt:
            'Whom do you know who is laboring to share the gospel? Spend time right now praying that the word would have free course through their ministry.',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:2 — Delivered from Wicked Men ────────────────── */
    {
      ref: '2 Thessalonians 3:2',
      title: 'Delivered from Unreasonable and Wicked Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('And that we may be '),
                hp('delivered from unreasonable and wicked men', 'wicked-men'),
                t(': for all men have not faith.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'wicked-men',
          html:
            'Paul names the cost of gospel work. There are those who oppose the gospel—not out of honest doubt but out of malice. "Unreasonable and wicked" men seek to hinder the word. Paul asks for prayer for protection from them. This is not retreat; it is realism. The gospel always faces opposition.',
        },
        {
          kind: 'commentary',
          id: 'faith-lacking',
          html:
            '"For all men have not faith." Not everyone believes. The statement is plain and offers no explanation for why—only the fact itself. Paul does not expect the Thessalonians to be surprised by opposition. Some people simply do not have faith, and their lack of faith will express itself in hostility to those who do.',
        },
        {
          kind: 'carry',
          html:
            'If you are trying to do good in the world and you meet resistance, you are not off track—you are on it. Opposition is not a sign of failure; it is a sign that the gospel is at work. When you pray for deliverance from wicked men, you are praying realistically, acknowledging the real cost of faithfulness.',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:3 — The Lord Is Faithful ────────────────────── */
    {
      ref: '2 Thessalonians 3:3',
      title: 'The Lord Is Faithful, Who Shall Establish You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('But the Lord is '),
                hp('faithful, who shall stablish you, and keep you from evil', 'lord-faithful'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-faithful',
          html:
            'After naming opposition, Paul turns to confidence. "But the Lord is faithful[res:intertextual-2thess-3-faithfulness]." This is the hinge. Against the unreasonable and wicked, there stands One who will not fail. He will stablish you—ground you, make you firm. And He will keep you from evil. Not from difficulty, but from evil itself. The Lord&apos;s faithfulness is the antidote to fear.',
        },
        {
          kind: 'greek',
          id: 'stērizō-establish',
          title: 'Stērizō — "Establish" or "Make Firm"',
          script: 'στηρίζω',
          translit: '<strong>stērizō</strong> · to establish, make firm, set fast; to strengthen; to fix in place',
          description:
            'To stablish is to set something on a firm foundation so it cannot be shaken. When the Lord stablishes you, He is making you immovable—not by removing the storms, but by fixing your roots so deep that the storms cannot topple you.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful',
          title: 'Christ Connection — Christ&apos;s Faithfulness to Keep His Own',
          html:
            '"My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father&apos;s hand" (John 10:28–29). The same faithfulness Paul speaks of here is the character of Christ. He does not merely keep you from outward evil; He keeps your soul. His faithfulness is the ground of all Christian confidence.',
        },
        {
          kind: 'carry',
          html:
            'Whatever opposition you face, whatever unreasonable voices rise against you, the Lord is faithful. He will not abandon you. He will establish you so firmly that no evil can pluck you from His hand. Rest in His faithfulness today.',
        },
        {
          kind: 'reflection',
          id: '3-3-faithful',
          prompt:
            'Where do you most need to experience the Lord&apos;s establishment and protection? What would it mean to trust His faithfulness instead of your own strength?',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:4–5 — Patient Waiting for Christ ─────────────── */
    {
      ref: '2 Thessalonians 3:4–5',
      title: 'Patient Waiting for Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('And we have confidence in the Lord touching you, that ye both do and will do the things which we command you.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the Lord '),
                hp('direct your hearts into the love of God, and into the patient waiting for Christ', 'patient-waiting'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'confidence-lord',
          html:
            'Paul expresses confidence: the Thessalonians will do what he commands. This confidence is not in the Thessalonians themselves but "in the Lord." He is confident because the Lord works in them. He is not placing the burden on their shoulders; he is pointing them to the One who will complete the work in them.',
        },
        {
          kind: 'commentary',
          id: 'patient-waiting',
          html:
            'Paul directs their hearts—not to activity, but to love for God and to patient waiting. The Greek word for "patient waiting" carries the sense of enduring hope, of standing firm while looking forward. The Thessalonians are troubled and anxious about the end times. Paul calls them to patient waiting. This is not impatience dressed as faith; it is active hope.',
        },
        {
          kind: 'greek',
          id: 'hypomonē-waiting',
          title: 'Hypomonē — "Patient Waiting" or "Endurance"',
          script: 'ὑπομονή',
          translit: '<strong>hypomonē</strong> · patient endurance, steadfast perseverance, patient waiting; the ability to remain under pressure',
          description:
            'Hypomonē is not passive resignation. It is active waiting—the muscle required to hold faith steady while you wait. It is the endurance that does not collapse under difficulty. When Paul calls them to patient waiting for Christ, he is calling them to strength, not weakness.',
        },
        {
          kind: 'carry',
          html:
            'If you are waiting for something—God&apos;s answer to prayer, His timing, His return—you do not wait passively. You wait actively, rooted in love for God, your heart directed toward Him. Let His love be the ground of your waiting. Let patience be the strength you live by.',
        },
        {
          kind: 'reflection',
          id: '3-5-waiting',
          prompt:
            'What are you waiting for God to do? How might you cultivate patient endurance rather than anxious striving?',
        },
        {
          kind: 'artwork',
          matchTitle: /waiting|return|hope/i,
          caption: '2 Thessalonians 3:4–5 · Patient Waiting',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:6 — Withdraw from Disorderly Walkers ────────── */
    {
      ref: '2 Thessalonians 3:6',
      title: 'Withdraw from Every Brother That Walketh Disorderly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('Now we command you, brethren, in the name of our Lord Jesus Christ, that ye '),
                hp('withdraw yourselves from every brother that walketh disorderly, and not after the tradition which he received of us', 'withdraw-disorderly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'withdraw-disorderly',
          html:
            'Church discipline is not a pleasant subject, but it is necessary. Those who reject the apostolic tradition and live in disorder cannot set the tone of the community. Paul commands withdrawal—not permanent exile, but separation meant to awaken conscience. The Thessalonians are to step back from those who will not obey.',
        },
        {
          kind: 'greek',
          id: 'ataktos-disorderly',
          title: 'Ataktos — "Disorderly" or "Out of Line"',
          script: 'ἄτακτος',
          translit: '<strong>ataktos</strong> · disorderly, unruly, undisciplined; stepping out of rank',
          description:
            'To walk disorderly is to step out of rank, to reject the structure and order of community. It is insubordination dressed as freedom. True freedom is found in alignment with the apostolic tradition, in working, in ordered community life.',
        },
        {
          kind: 'carry',
          html:
            'Withdrawal is not rejection. It is a corrective meant to awaken. If someone in your community is walking disorderly, your separation from them is an act of love—a call to return, to realign, to remember what they have been taught. Do not enable disorder by ignoring it.',
        },
        {
          kind: 'reflection',
          id: '3-6-discipline',
          prompt:
            'What does true community discipline look like? How can correction be an act of love rather than judgment?',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:7–9 — Wrought with Labour and Travail ───────── */
    {
      ref: '2 Thessalonians 3:7–9',
      title: 'We Wrought with Labour and Travail',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('For yourselves know how ye '),
                hg('ought to follow us', 'follow-us'),
                t(';'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Neither did we eat any man&apos;s bread for nought; but '),
                hp('wrought with labour and travail night and day', 'labour-travail'),
                t(', that we might not be '),
                hy('chargeable to any of you', 'not-burden'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'follow-us',
          html:
            'Paul does not ask the Thessalonians to do anything he has not done. His example precedes his command. He worked with his hands, supported himself, refused to be a burden. When he calls them to work, they know he works. His life is his best argument.',
        },
        {
          kind: 'commentary',
          id: 'labour-travail',
          html:
            'Paul is not ashamed of his labor. He speaks of it with dignity: he wrought with labour and travail, night and day[res:sefaria-paul-tentmaking-labor]. This is not beneath an apostle. Paul was trained in tentmaking, and he used this trade to provide for himself and his companions. Labor is not punishment; it is part of the structure of faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'not-burden',
          html:
            'Paul refused to be a burden to those he served. He could have claimed support as an apostle—and in other places, he defends the right of apostles to be supported. Here, however, he chose to work so that the gospel would not be hindered by questions of money or motive.',
        },
        {
          kind: 'carry',
          html:
            'Your work is an extension of your witness. How you work, whether you work with dignity or laziness, whether you support yourself or demand others support you—these things say something about your faith. Work is not below you. It is an opportunity to demonstrate faithfulness.',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:10–12 — If Any Would Not Work ───────────────── */
    {
      ref: '2 Thessalonians 3:10–12',
      title: 'If Any Would Not Work, Neither Should He Eat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('For even when we were with you, this we commanded you, That if any would not work, '),
                hp('neither should he eat', 'not-work-not-eat'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For we hear that there are some which walk among you '),
                hy('disorderly, working not at all, but are busybodies', 'busybodies'),
                t(';'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now them that are such we command and exhort by our Lord Jesus Christ, that with '),
                hg('quietness they work, and eat their own bread', 'quiet-work'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'not-work-not-eat',
          html:
            'This is a principle, not cruelty. Work is how humans participate in creation. To refuse work is to refuse the human vocation. Paul connects sustenance to labor—not to humiliate, but to restore the proper order. You eat what you have earned.',
        },
        {
          kind: 'commentary',
          id: 'busybodies',
          html:
            'The idle are not merely inactive. They are busybodies—meddlesome, gossipy, given to interference. Without the discipline of work, they turn their energy to disruption. Idleness breeds disorder. This is why Paul is firm: the problem is not just that some are lazy; it is that their laziness is corrupting the whole community.',
        },
        {
          kind: 'commentary',
          id: 'quiet-work',
          html:
            '"With quietness they work." Quietness here does not mean silence, but steadiness. Work without complaint, without drama, without self-attention. Eat what you have earned, carry your own weight, contribute to the community. Quietness is dignity.',
        },
        {
          kind: 'carry',
          html:
            'If you are struggling to work, work anyway—with quietness, with dignity, without complaint. If you are inclined to idleness or meddling, turn instead to your labor. Work roots you in reality, gives you purpose, and enables you to help others. Do not be weary in well doing.',
        },
        {
          kind: 'reflection',
          id: '3-10-work-ethic',
          prompt:
            'How does your work—however humble—participate in God&apos;s order? What would change if you saw your labor as a spiritual practice?',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:13 — Be Not Weary in Well Doing ─────────────── */
    {
      ref: '2 Thessalonians 3:13',
      title: 'Be Not Weary in Well Doing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('But ye, brethren, '),
                hp('be not weary in well doing', 'not-weary'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'not-weary',
          html:
            'After all the stern commands about idleness and discipline, Paul turns to the faithful majority with encouragement. Do not grow weary. You are doing well. Your labor is not in vain. Continue steadfastly. This is not just the exhortation of a pastor who has been hard on some; it is the reminder that faithfulness itself is the reward.',
        },
        {
          kind: 'carry',
          html:
            'You may be exhausted. Your work may feel endless and unappreciated. But you are not alone, and your labor is not wasted. The Lord sees. Continue in well-doing, not because you will be applauded, but because doing well is its own grace. Persist. Do not grow weary.',
        },
        {
          kind: 'reflection',
          id: '3-13-weariness',
          prompt:
            'Where are you tempted to grow weary? How can you sustain yourself in faithful work when no one is watching?',
        },
        {
          kind: 'artwork',
          matchTitle: /labor|work|rest|endurance/i,
          caption: '2 Thessalonians 3:13 · Steadfast in Well Doing',
        },
      ],
    },

    /* ─── 2 Thessalonians 3:16–18 — The Peace and Grace of Christ ────────── */
    {
      ref: '2 Thessalonians 3:16–18',
      title: 'The Lord of Peace Give You Peace; The Grace of Our Lord Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('Now the Lord of '),
                hp('peace himself give you peace always by all means', 'peace-itself'),
                t('. The Lord be with you all.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('The salutation of '),
                hg('Paul with mine own hand', 'pauls-hand'),
                t(', which is the token in every epistle: so I write.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The grace of our Lord Jesus Christ be '),
                hy('with you all', 'grace-closing'),
                t('. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'peace-itself',
          html:
            'The closing is peace. After all the stern commands about idleness and discipline, Paul gives the Thessalonians the deepest gift: the peace of the Lord Himself[res:bible-odyssey-peace-christ]. Not the peace of ease or escape, but the peace that comes from standing in the presence of God. "Always by all means"—in all seasons, through all circumstances, in all relationships, this peace is available.',
        },
        {
          kind: 'greek',
          id: 'eirene-peace',
          title: 'Eirene — "Peace"',
          script: 'εἰρήνη',
          translit: '<strong>eirene</strong> · peace, wholeness, harmony, reconciliation, well-being',
          description:
            'Biblical peace is not merely the absence of conflict. It is reconciliation with God, wholeness of soul, the settled assurance that God is sovereign and good. When Christ is the Lord of peace, His peace becomes the ground of life itself.',
        },
        {
          kind: 'christ',
          id: 'christ-peace',
          title: 'Christ Connection — Christ as the Peace of God',
          html:
            '"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you" (John 14:27). Jesus Himself is called "our peace" in Ephesians 2:14. The peace Paul speaks of is not an emotion or circumstance; it is a person—Christ Himself, dwelling in you and with you, always and by all means.',
        },
        {
          kind: 'commentary',
          id: 'pauls-hand',
          html:
            'Paul has dictated most of the letter, but he writes this closing in his own hand. It is his mark, his authentication, his personal seal. This closing salutation was standard in his letters—a practice that becomes, by its very consistency, a token. When the Thessalonians see Paul&apos;s handwriting, they know they are hearing from him directly. It is intimacy—the apostle&apos;s own hand writing their names.',
        },
        {
          kind: 'commentary',
          id: 'grace-closing',
          html:
            'The letter closes as it opened—with grace. Not judgment alone, but grace. Not law alone, but the unmerited favor of Christ. Grace to repent, grace to work, grace to endure, grace to wait. Grace to the end. This is why Paul can be so firm about commands: they are always held in grace.',
        },
        {
          kind: 'carry',
          html:
            'Let the peace of Christ settle your heart. You have been commanded; you have been exhorted; you have been shown the way. Now receive this peace: the presence of the Lord Himself, with you always, by all means, in all circumstances. And remember: you are held in the grace of Christ. This grace is the beginning and the end.',
        },
        {
          kind: 'reflection',
          id: '3-16-final',
          prompt:
            'As you close this study, what is the one thing Paul&apos;s final words speak to in your life right now? How will you carry his peace and grace into your week?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-2thess-3-faithfulness',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'God&apos;s Faithfulness in Opposition',
      url: 'https://www.intertextual.org/reader/2-Thessalonians-3?verse=3',
      description: 'Traces how God&apos;s faithfulness becomes the foundation of confidence and protection even when believers face opposition.',
    },
    {
      id: 'sefaria-paul-tentmaking-labor',
      kind: 'study',
      source: 'Sefaria',
      label: 'Paul&apos;s Tentmaking and Labor',
      url: 'https://www.sefaria.org/texts/Tanakh/Writings/Proverbs?lang=bi&p=Proverbs.22.29',
      description: 'Examines how Paul&apos;s willingness to support himself through labor became a model of humble dignity for all believers.',
    },
    {
      id: 'bible-odyssey-peace-christ',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'The Peace of Christ that Surpasses Understanding',
      url: 'https://www.bibleodyssey.org/passage/topic/peace-shalom',
      description: 'Surveys how Christ Himself is the peace of believers, available always and by all means in every circumstance.',
    },
  ],

};
