import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Corinthians 16 — Practical Love, Travel, and the Cry Maranatha
 *
 * The long letter comes to a close, and Paul&apos;s final words are not doctrinal
 * polishing but real life: money for the poor in Jerusalem, travel logistics,
 * and names—so many names. Stephanas, Timothy, Aquila, Priscilla. And then,
 * suddenly, the first written "Maranatha"—Our Lord, come. The letter that
 * solved every Corinthian dispute ends not with certainty but longing.
 */
export const FIRST_CORINTHIANS_16: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 16,

  estimatedMinutes: { 5: 8, 10: 16, 15: 24 },
  intros: [
    'Paul has answered every question the Corinthians sent him. He has corrected divisions, clarified the resurrection, untangled the limits of Christian freedom. Now comes the practical finale: a collection for the poor saints at Jerusalem, a travel schedule, the names of people the Corinthians should honor, and a warning wrapped in Aramaic that echoes in every Christian heart: Maranatha—the Lord comes.',
    'The chapter holds a deep truth. After all the theology, Paul gives time to money and logistics and the real humans who carry the gospel. Love is not an idea discussed in the abstract. Love is Stephanas bringing his whole household to serve Christ. It is remembering that Aquila and Priscilla risked their necks. It is laying aside coins each Sunday, not from compulsion but from joy. The flesh-and-blood church—the hands, the names, the recurring presence of the same people—is where faith lives.',
    'And woven through it all: the constant horizon. Christ is coming. Not eventually, in a vague someday, but really. Soon. This is not presented as a sidelight. It is the air the Corinthian church breathes.',
  ],

  sections: [
    /* ─── 1 Corinthians 16:1–2 — The Collection ───────────────────────────── */
    {
      ref: '1 Corinthians 16:1–2',
      title: 'The Collection for the Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('Now concerning the collection for the saints, as I have given order to the churches of Galatia, even so do ye.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-collection-intro',
          html:
            'Jerusalem is hungry. The church there faces famine, persecution, poverty. Paul has been organizing relief from the Gentile churches—Galatia, Corinth, elsewhere. It is not charity as the world counts it. It is the body caring for its own. The wealthy Corinthians, prone to pride and division, are being schooled in love the only way that sticks: by reaching their hands into their purses for people they will never meet.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 2,
              spans: [
                t('Upon the '),
                hy('first day of the week', 'cor16-first-day'),
                t(' let every one of you lay by him in store, as God hath prospered him, that there be no gatherings when I come.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-first-day',
          html:
            'The first day of the week—Sunday, the day of resurrection. This is not a Levitical tithe. This is something new: a rhythm of giving rooted in the resurrection of Christ. Every time the Corinthians gather on the first day, each one sets aside according to blessing. Not in legal measure, but according to what God has given. The word "prospered" is crucial. God makes the gift possible; the Corinthian&apos;s duty is only the willing hand.',
        },
        {
          kind: 'greek',
          id: 'cor16-logia',
          title: 'Logia — Collection; Contribution',
          script: 'λογία',
          translit: '<strong>logia</strong> · a gathering; collection of money; contribution',
          description:
            'Logia comes from the root for "word" or "account." It is a collection taken in order, deliberately. Not a scattered offering, but a pooled common fund—the early church&apos;s way of making love visible and measurable across distance.',
        },
        {
          kind: 'christ',
          id: 'cor16-first-day-christ',
          title: 'Christ Connection — Resurrection Rhythm and Giving',
          html:
            'The Corinthians gather on the first day to remember the resurrection. Now Paul anchors giving to that same day. In Acts 20:7, the church breaks bread together on the first day. Giving, breaking bread, remembering the resurrection—all woven into one rhythm. The early church did not separate worship from care. They lived it as one.</em> The grace of the Lord Jesus Christ extends not just to my soul but to my neighbor&apos;s hunger. Giving is part of how the resurrection reshapes the body.',
        },
        {
          kind: 'carry',
          html:
            'Ask yourself: what does it mean to set aside something each week, specifically on the day you gather to remember resurrection? You are not paying a tax. You are casting your lot in with the body of Christ, spread across the world, many of whom you will never meet. Every coin says: you are my family.',
        },
        {
          kind: 'reflection',
          id: 'cor16-collection-reflect',
          prompt: 'If you were to "lay by in store" each week, not from duty but from joy, what amount would that be? What would it cost you? What would it say about what you actually believe the church is?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:3–4 — Accountability ─────────────────────────── */
    {
      ref: '1 Corinthians 16:3–4',
      title: 'Stewardship and Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 3,
              spans: [
                t('And when I come, whomsoever ye shall approve by your letters, them will I send to bring your liberality unto Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-stewardship',
          html:
            'Paul does not take the money himself. The Corinthians choose the carriers—men they know and trust, whom they will authorize by letter. This is wisdom. It prevents suspicion. It ensures that if the fund is ever lost or misdirected, it was not Paul&apos;s sole responsibility. More deeply, it invests the Corinthians themselves in the outcome. They do not simply give; they ensure the gift reaches its destination.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 4,
              spans: [
                t('And if it be meet that I go also, they shall go with me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-apostolic-accompaniment',
          html:
            'Paul keeps the door open to travel with the gift himself. The "liberality" is the overflowing gift—the verb suggests richness, generosity, even boasting. Whatever moves from Corinth to Jerusalem will be a witness: that the Gentile church loves the Jewish church. That distance and difference cannot divide the body.',
        },
        {
          kind: 'carry',
          html:
            'Generosity that hides is not necessarily virtue. Sometimes the gospel is best served when the gift is seen, when the giver is known, when the bridge it builds becomes visible. This does not mean giving for praise. It means: let your love for the distant body of Christ be real enough that others can point to it and believe.',
        },
        {
          kind: 'reflection',
          id: 'cor16-stewardship-reflect',
          prompt: 'Do you give in ways others can see and verify? Or do you prefer to stay invisible? What might both approaches be saying about your heart?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:5–7 — Travel Plans ────────────────────────────── */
    {
      ref: '1 Corinthians 16:5–7',
      title: 'A Visit on the Horizon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('Now I will come unto you, when I shall pass through Macedonia: for I do pass through Macedonia.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-travel-promise',
          html:
            'Paul promises a visit. He will come to Corinth after passing through Macedonia—the northern provinces. The road is concrete: real distance, real travel, real time. This is not a metaphor. The apostle will show up.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 6,
              spans: [
                t('And it may be that I will abide, yea, and winter with you, that ye may bring me on my journey whithersoever I go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-wintering',
          html:
            'Winter in the ancient Mediterranean meant the seas closed to shipping. To winter with the Corinthians is to stay the season—months, not days. Paul is not passing through. He is genuinely committing time to be present with a church that needed his correction. Love and discipline go hand in hand.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 7,
              spans: [
                t('For I will not see you now by the way; but I trust to tarry a while with you, if the Lord permit.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-lord-permit',
          html:
            'One phrase holds the entire passage open: "if the Lord permit." Paul&apos;s plans are subject to God&apos;s will. This is not weakness or hedging. It is apostolic honesty. The future belongs to God. Paul can make plans, can commit to roads and seasons, but always with the understanding that he walks under a authority higher than his own intent.',
        },
        {
          kind: 'carry',
          html:
            'When you commit to being present with others—to spending time, to being inconvenienced by season or distance—you are making a statement about what matters. But hold it all loosely. The future belongs to God. Your promises are made in submission to a will higher than your own.',
        },
        {
          kind: 'reflection',
          id: 'cor16-visit-reflect',
          prompt: 'Is there a relationship or community you are avoiding being present to? What would it cost you to commit to real, inconvenient time with them?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:8–9 — The Door and the Adversaries ───────────── */
    {
      ref: '1 Corinthians 16:8–9',
      title: 'The Open Door and Many Adversaries',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 8,
              spans: [
                t('But I will tarry at Ephesus until Pentecost.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-ephesus-timing',
          html:
            'Paul is in Ephesus when he writes this. Pentecost—the feast when Jews return to Jerusalem—is his target for moving on. He is not in a hurry. The work in Ephesus holds him.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 9,
              spans: [
                t('For a '),
                hy('great door and effectual', 'cor16-thura'),
                t(' is opened unto me, and '),
                hg('there are many adversaries', 'cor16-adversaries'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-door-open',
          html:
            'The door is a figure for opportunity. A great door, an effective door—meaning, the preaching bears fruit. Souls are being saved. The work is not barren. Yet in the same breath: many adversaries. The opposition is real, fierce, multiplied. This is Paul&apos;s normal. He does not expect the gospel to go unopposed.',
        },
        {
          kind: 'greek',
          id: 'cor16-thura',
          title: 'Thura — Door; Opportunity',
          script: 'θύρα',
          translit: '<strong>thura</strong> · door; entrance; opportunity; access',
          description:
            'A door in Scripture often signals a moment, an opening, a chance that comes from God. To be given a thura is to stand at a threshold. It demands decision—to go through or not. In Paul&apos;s hands it always means: here is where God&apos;s work is happening. This is where I must be.',
        },
        {
          kind: 'commentary',
          id: 'cor16-adversaries',
          html:
            'The adversaries are not abstract theological opponents. They are real people opposed to Paul, to the gospel, possibly to the very church he is shepherding. Paul&apos;s life is not a quiet theological study. It is a battlefield. Yet he does not flee or despair. The presence of enemies does not close the door. The door remains open because God holds it open.',
        },
        {
          kind: 'carry',
          html:
            'When God opens a door in your life—a chance to serve, to speak, to do something important—expect the adversaries to arrive at the same time. The promise is not: if you do kingdom work, everyone will celebrate you. The promise is: the door is open, the work is real, and I will be with you even though enemies gather. Your call is to stay at the threshold, not to run from it.',
        },
        {
          kind: 'reflection',
          id: 'cor16-door-reflect',
          prompt: 'Where do you see an open door in your own life? What adversaries are you facing there? Does their presence mean you should close the door, or does it confirm that God is asking you to stay?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:10–11 — Timothy Commended ────────────────────── */
    {
      ref: '1 Corinthians 16:10–11',
      title: 'Timothy: The Young Servant Honored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 10,
              spans: [
                t('Now if Timotheus come, see that he may be with you without fear; for he worketh the work of the Lord, as I also do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-timothy-intro',
          html:
            'Timothy is young. Somewhere in the Corinthian church, there were those who despised his youth, who questioned his authority, who were inclined to dismiss him. Paul writes these words knowing they will be read aloud: Timothy is not a junior or an assistant. He "worketh the work of the Lord, as I also do." He is not second-rank. He is a fellow laborer in the gospel.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 11,
              spans: [
                t('Let no man therefore despise him: but '),
                hg('conduct him forth in peace', 'cor16-timothy-send'),
                t(', that he may come unto me: for I look for him with the brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-timothy-send',
          html:
            'Paul asks the Corinthians to "conduct him forth in peace"—to send Timothy on with respect, with honor, with provision. Do not belittle him. Do not keep him. Let him go with a blessing. Paul wants Timothy back not because Timothy failed, but because Timothy succeeded. The apostle is gathering his team.',
        },
        {
          kind: 'carry',
          html:
            'Who in your life is younger, newer to faith, less established? Are you one who despises them, or do you conduct them forth in peace? A young believer can be crushed by disrespect or lifted by a word of apostolic backing. You may be the one whose honor can change someone&apos;s entire trajectory in faith.',
        },
        {
          kind: 'reflection',
          id: 'cor16-timothy-reflect',
          prompt: 'Are you inclined to dismiss the young or untested? What would it look like to actively honor and send forward someone whose gifts or maturity you are uncertain of?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:12 — Apollos ───────────────────────────────────── */
    {
      ref: '1 Corinthians 16:12',
      title: 'Apollos: Not Yet, But Later',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 12,
              spans: [
                t('As touching our brother Apollos, I greatly desired him to come unto you with the brethren: but his will was not at all to come at this time; but he will come when he shall have convenient time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-apollos-waiting',
          html:
            'Apollos, the eloquent preacher, will not come to Corinth now, though Paul desired it. The text is cryptic—was Apollos avoiding the division his name caused? Did he feel it was not yet the moment? We do not know. What we see is Paul&apos;s respect. Apollos has his own will, his own discernment. Paul does not force the issue. "He will come when he shall have convenient time." There is trust here, and patience, and a gentleness about God&apos;s timing that runs through the whole chapter.',
        },
        {
          kind: 'carry',
          html:
            'You cannot force the presence or the work of others. Sometimes a person needs to wait before returning to a place. Sometimes the convenient time is months or years away. Your role is to honor their discernment, to leave the door open, and to trust that God&apos;s timing is wiser than your own desire.',
        },
        {
          kind: 'reflection',
          id: 'cor16-apollos-reflect',
          prompt: 'Is there someone whose presence and work you deeply desire, but who is not yet ready to come? Can you genuinely release them to God&apos;s timing?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:13–14 — Watch Ye, Stand Fast, Be Strong ───────── */
    {
      ref: '1 Corinthians 16:13–14',
      title: 'Watch, Stand Fast, Quit Yourselves Like Men, Be Strong',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 13,
              spans: [
                t('Watch ye, '),
                hg('stand fast in the faith', 'cor16-stand-fast'),
                t(', '),
                hy('quit you like men', 'cor16-andrizō'),
                t(', be strong.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-watch-ye',
          html:
            'Four imperatives, stacked one on another. Watch—stay awake, stay alert, do not sleep through your own life. Stand fast in the faith—do not waver, do not yield to the pressure to conform to the world&apos;s values. Quit yourselves like men—this is military language, a call to courage. Be strong—strength is not native to flesh; it must be summoned, claimed, lived into.',
        },
        {
          kind: 'greek',
          id: 'cor16-andrizō',
          title: 'Andrizō — Play the Man; Be Courageous',
          script: 'ἀνδρίζω',
          translit: '<strong>andrizō</strong> · play the man; show courage; be brave; act manfully',
          description:
            'Andrizō is rooted in "aner"—man. To andrizō is to summon courage, to face what terrifies you, to do the hard thing because it must be done. Not in violence, but in witness. Not in aggression, but in steadfastness. The Corinthians are called to courageous faith.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 14,
              spans: [
                t('Let all your things be done with '),
                hp('charity', 'cor16-agape-closing'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-stand-fast',
          html:
            'Standing fast, watching, summoning courage, being strong—and then this. The final word is charity, agape. It is as if Paul is saying: do all of this, face every trial and temptation with courage and vigilance, but do it in love. Do not become hard. Do not become cynical. Let every action, every stand you take, be animated by love.',
        },
        {
          kind: 'christ',
          id: 'cor16-agape-closing',
          title: 'Christ Connection — Love as the Closing Word',
          html:
            'The entire letter—thirteen chapters of doctrine, correction, rebuke—comes to rest on a single word: love. The Greek is agape, the costly, self-giving love that Christ embodied on the cross. Jesus did not stand fast in his faith through intimidation or force. He stood by giving himself away. "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). The Corinthians are called to the same courage, the same willingness to be broken for others.',
        },
        {
          kind: 'carry',
          html:
            'Strength and love are not opposites. The strongest thing you can do is to love your enemy, to forgive your offender, to stand fast in faith not through aggression but through refusal to harden your heart. This takes more courage than any other stance you could take.',
        },
        {
          kind: 'reflection',
          id: 'cor16-strong-reflect',
          prompt: 'What does "quit yourself like a man" look like in your own life right now? And how do you keep that strength from becoming hardness?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:15–18 — The Household of Stephanas ──────────── */
    {
      ref: '1 Corinthians 16:15–18',
      title: 'Stephanas, Fortunatus, and Achaicus: The Firstfruits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 15,
              spans: [
                t('I beseech you, brethren, (ye know the house of Stephanas, that it is the '),
                hg('firstfruits of Achaia', 'cor16-stephanas-first'),
                t(', and that they have addicted themselves to the ministry of the saints:)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-stephanas-first',
          html:
            'Stephanas. His name means "crown." He is the firstfruits of Achaia—the first convert, the first household to believe in that whole region. He and his family have "addicted themselves" to ministry. Not reluctantly, not occasionally. They are devoted, habituated, addicted to serving the saints.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 16,
              spans: [
                t('That ye submit yourselves unto such, and to every one that helpeth with us, and laboureth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-submit-to-servants',
          html:
            'Paul asks the Corinthians to "submit yourselves unto such"—to recognize leadership not by title but by labor. Stephanas did not appoint himself. His authority comes from his willingness to serve. The Corinthians should submit to anyone who helps and labors with that same spirit.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 17,
              spans: [
                t('And I am glad of the coming of Stephanas and Fortunatus and Achaicus: for that which was lacking on your part they have supplied.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-glad-coming',
          html:
            'Stephanas, Fortunatus (the happy one), and Achaicus have traveled to Paul from Corinth. They have "supplied that which was lacking"—they have brought news, refreshment, fellowship. Paul is genuinely glad. These are not abstract brothers. They are particular people whose presence lightens the apostle&apos;s burden.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 18,
              spans: [
                t('For they have refreshed my spirit and yours: therefore acknowledge ye them that are such.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-refreshed',
          html:
            'The spirit—the inner person, the will, the sense of being carried and strengthened. Stephanas and his friends have done that for Paul. Paul is asking the Corinthians to return the honor: "acknowledge ye them that are such." See their labor. Name it. Let them know they are seen.',
        },
        {
          kind: 'carry',
          html:
            'Do you know the first believers in your region or circle? The ones who gave themselves without counting cost? Are you honoring them, or have you become too familiar to see what they have done? The apostle is asking you to lift your eyes and publicly acknowledge them.',
        },
        {
          kind: 'reflection',
          id: 'cor16-stephanas-reflect',
          prompt: 'Who in your faith community has been addicted to ministry, serving quietly without applause? How will you acknowledge and honor them this week?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:19–20 — Greetings from the Churches ──────────── */
    {
      ref: '1 Corinthians 16:19–20',
      title: 'The Churches of Asia Greet You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 19,
              spans: [
                t('The churches of Asia salute you. '),
                hg('Aquila and Priscilla', 'cor16-aquila-priscilla'),
                t(' salute you much in the Lord, with the church that is in their house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-aquila-priscilla',
          html:
            'The churches of Asia—meaning the network of congregations in the province of Asia (modern-day Turkey)—send their greetings. Then Paul singles out Aquila and Priscilla. This couple appears throughout the New Testament: tentmakers, teachers, lovers of the gospel who risked their necks for Paul&apos;s life. They host a church in their home. They greet the Corinthians "much in the Lord"—with genuine warmth and spiritual affection.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 20,
              spans: [
                t('All the brethren greet you. Greet ye one another with an holy kiss.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-holy-kiss',
          html:
            'All the brethren. Not just the leaders, the famous ones, the well-connected. All. The invisible church, the nameless servants, the new believers, the struggling ones—all send their greetings. And the Corinthians are told to greet each other with a holy kiss. The greeting in the ancient Near East was physical. It meant: you are family. You are known. You are not a stranger in this house.',
        },
        {
          kind: 'carry',
          html:
            'In a world of digital distance, the kiss of greeting—literal or metaphorical—is a revolutionary act. It says: I know you. I see you. You belong. Do not pass by a brother or sister without some sign of genuine recognition. Make them feel that they are part of the body, that their presence matters.',
        },
        {
          kind: 'reflection',
          id: 'cor16-greetings-reflect',
          prompt: 'How do you greet others in your faith community? Do they feel welcomed as family, or as strangers? What small thing could you change this week?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:21–22 — Warning and Benediction ───────────────── */
    {
      ref: '1 Corinthians 16:21–22',
      title: 'Maranatha: The Lord Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 21,
              spans: [
                t('The salutation of me Paul with mine own hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-own-hand',
          html:
            'Paul has dictated the letter to a scribe. Now he takes the pen himself. This is his signature, his personal seal. In an age without photographs or official documents, a handwritten closing was how you proved you wrote it. The Corinthians will know: this final word comes from Paul himself.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 22,
              spans: [
                t('If any man love not the Lord Jesus Christ, let him be '),
                hy('Anathema Maranatha', 'cor16-maranatha'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-warning',
          html:
            'The verse is stark. If you do not love Christ, you are anathema—accursed, set apart for judgment. This is not a gentle word. It is a warning. Paul has spent sixteen chapters solving problems in the Corinthian church. Now, at the end, he names the irreducible truth: love for Jesus Christ is not optional. It is the foundation. Without it, you are cut off.',
        },
        {
          kind: 'greek',
          id: 'cor16-maranatha',
          title: 'Maranatha — The Lord Comes',
          script: 'μαράνα θά',
          translit: '<strong>maranatha</strong> · maran atha; our Lord, come; the Lord comes',
          description:
            'Maranatha is Aramaic—the Aramaic Jesus and the earliest disciples spoke. It is preserved in the Greek text of Paul&apos;s letter, showing how ancient and precious this phrase was to the church. It is both prayer and proclamation: a plea for Jesus to come, and a statement that He will. The Corinthians prayed this word. We still do.',
        },
        {
          kind: 'commentary',
          id: 'cor16-maranatha-meaning',
          html:
            'Some scholars read the verse as: "If any man love not the Lord Jesus Christ, let him be accursed. The Lord comes." A warning followed by hope. Others read it as: "If any man love not the Lord, let him be accursed—let him be maranatha," meaning, let him be cut off when the Lord comes. Either way, the horizon is the same: Jesus is coming. Those who love Him will be vindicated. Those who reject Him will face judgment.',
        },
        {
          kind: 'christ',
          id: 'cor16-christ-returns',
          title: 'Christ Connection — The Earliest Prayer for Christ&apos;s Return',
          html:
            'Revelation 22:20 echoes the same prayer: "Even so, come, Lord Jesus." This is the ancient hope of the church, preserved in Aramaic in Paul&apos;s Greek letter. Christ has already come once. He rose from the dead. He ascended. And the church has been praying ever since: come again. The resurrection is not the end. It is the first fruit. The real harvest is still to come, and the world groans for it. "Maranatha"—Our Lord, come—is the prayer of every generation that has watched and waited.',
        },
        {
          kind: 'carry',
          html:
            'Do you pray "Maranatha"? Do you truly long for Christ&apos;s return, or do you live as though this world is all there is? The prayer is ancient, and it is urgent. Meantime, love Christ with all that you have. Let that love reshape your decisions, your generosity, your patience with others. The Lord is coming.',
        },
        {
          kind: 'reflection',
          id: 'cor16-maranatha-reflect',
          prompt: 'What would change in your life if you genuinely believed that Christ might return at any moment? Would your priorities shift? Your relationships? Your use of money and time?',
        },
      ],
    },

    /* ─── 1 Corinthians 16:23–24 — The Closing Grace ────────────────────── */
    {
      ref: '1 Corinthians 16:23–24',
      title: 'The Grace of Our Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 23,
              spans: [
                t('The grace of our Lord Jesus Christ be with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-closing-grace',
          html:
            'After sixteen chapters of correction, of rebuke, of hard doctrine and harder questions, Paul&apos;s final prayer is grace. Not judgment. Not a last exhortation. Grace. The unmerited, unearned favor of Jesus Christ. It is what holds the Corinthians. It is what holds all of us.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 24,
              spans: [
                t('My love be with you all in Christ Jesus. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-pauls-love',
          html:
            'Paul&apos;s love, now. Not just Christ&apos;s grace, but the apostle&apos;s love for the Corinthians. He has corrected them harshly. He has named their divisions and their pride. But underneath it all, Paul loves them. This final word is personal. It is a heart word. And it is tied to Christ: his love is "in Christ Jesus," rooted in the gospel, poured out through the channels of grace.',
        },
        {
          kind: 'carry',
          html:
            'You have been loved this way, have you not? Loved by people who corrected you because they cared. Loved even when you deserved rebuke. If so, you know how rare and precious that love is. Now, be that person for others. Correct without cruelty. Rebuke without rejection. Let your strongest words be rooted in your deepest love.',
        },
        {
          kind: 'reflection',
          id: 'cor16-closing-reflect',
          prompt: 'Has someone loved you well by correcting you with grace? How did that change you? Whom do you need to love that way now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The grace of our Lord Jesus Christ be with you. My love be with you all in Christ Jesus. Maranatha.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 16 · Study Guide',
  },

  hasHebrew: false,
};
