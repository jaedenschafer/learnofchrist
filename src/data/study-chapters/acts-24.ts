import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 24 — Paul Before Felix: The Free Man and the Bound Governor
 *
 * Tertullus, a paid orator, brings charges against Paul before the Roman governor
 * Felix: Paul is a pestilent fellow, a ringleader of the sect of the Nazarenes.
 * Paul defends himself. He says he serves the God of his fathers "after the way which
 * they call heresy." He exercises himself to have a conscience void of offence. But
 * then the trial shifts. Felix, with his wife Drusilla, calls Paul to hear concerning
 * faith in Christ. As Paul reasons of righteousness, temperance, and judgment to come,
 * Felix trembles. He postpones, postpones, postpones — two years of waiting, until
 * Festus arrives. Paul remains in chains, but the chains are on the wrong man.
 */
export const ACTS_24: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 24,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'A polished orator named Tertullus stands before the Roman governor Felix and accuses Paul of being a pestilent agitator, a ringleader of the heretical sect of the Nazarenes. The charge is professional, eloquent, dangerous. Paul is not famous. Paul has no political power. He is simply a man who has encountered the risen Christ and cannot stop talking about it. Yet in this chapter, the irony becomes unmistakable: the man who stands in chains is the truly free one. The man who sits in the governor&apos;s seat, Felix, with all his authority and wealth, is the imprisoned one — caught between conscience and cowardice.',
    'When Paul defends himself, he does not deny the charges. He denies the frame. He serves the God of his fathers "after the way which they call heresy," he says — naming himself with the very word his enemies use against him. He has committed no crime, broken no law. But then Felix does something unexpected. He calls Paul back. With his wife Drusilla present, Felix wants to hear more about faith in Christ. As Paul speaks of righteousness and temperance and the judgment to come, Felix trembles. The governor who can condemn men trembles at words about a future he cannot control. And that is the pivot of the chapter: the moment when the person on trial becomes the judge, and the person on the bench becomes the defendant.',
    'But Felix does not repent. He postpones. He delays. He waits for a bribe that never comes. Two years pass. Paul sits in a cell, but his spirit is free. Felix sits in his palace, but his soul is trapped by the very fear Paul&apos;s words awakened. When Festus arrives to take Felix&apos;s place, Felix leaves Paul in chains — not as a final judgment, but as an unfinished business he can no longer bear to face.',
  ],

  sections: [
    /* ─── Acts 24:1–9 — The Charge ──────────────────────────────────────────── */
    {
      ref: 'Acts 24:1–9',
      title: 'Tertullus the Orator',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              1,
              t('And after five days Ananias the high priest descended with the elders, and with a certain orator named '),
              hg('Tertullus', 'acts24-tertullus'),
              t('; who informed the governor against Paul.'),
            ),
            verse(
              2,
              t('And when he was called forth, Tertullus began to accuse him, saying, '),
              hg('Seeing that by thee we enjoy great quietness, and that very worthy deeds are done unto this nation by thy providence', 'acts24-flattery'),
              t(','),
            ),
            verse(
              3,
              t('We accept it always and in all places, most noble Felix, with all thankfulness.'),
            ),
            verse(
              4,
              t('Notwithstanding, that I be not further tedious unto thee, I pray thee that thou wouldest hear us of thy clemency a few words.'),
            ),
            verse(
              5,
              t('For we have found this man a '),
              hg('pestilent fellow, and a mover of sedition among all the Jews throughout the world, and a ringleader of the sect of the Nazarenes', 'acts24-the-charge'),
              t(':'),
            ),
            verse(
              6,
              t('Who also hath gone about to profane the temple: whom we took, and '),
              hg('would have judged according to our law', 'acts24-their-law'),
              t('.'),
            ),
            verse(
              7,
              t('But the chief captain Lysias came upon us, and with great violence took him away out of our hands,'),
            ),
            verse(
              8,
              t('Commanding his accusers to come unto thee: by examining of whom thyself mayest take knowledge of all these things, whereof we accuse him.'),
            ),
            verse(
              9,
              t('And the Jews also assented, saying that these things were so.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts24-tertullus',
          html:
            'Tertullus is a professional speaker hired to present the Jewish council&apos;s case to Felix. He is not a believer; he does not care about the real charge. He is skilled at making whatever case he is paid to make. His appearance here signals that the Jewish leaders are taking Paul seriously enough to employ costly rhetoric.',
        },
        {
          kind: 'commentary',
          id: 'acts24-flattery',
          html:
            'Notice where Tertullus begins — not with Paul, but with Felix. He flatters the governor, tells him how well the province runs, how thankful the Jews are for his clemency. This is the classical orator&apos;s opening move: establish rapport with the judge before you make your case. It is cynical and effective.',
        },
        {
          kind: 'commentary',
          id: 'acts24-the-charge',
          html:
            'The three accusations are stacked: Paul is a troublemaker, he stirs up sedition among Jews everywhere, he leads the heretical sect of the Nazarenes. Tertullus uses words calculated to frighten a Roman governor. A man who causes unrest throughout the empire is a threat to Rome. Sectarian religious activity is suspect. The charge is not "Paul believes something," but "Paul is an agitator and a threat to order."',
        },
        {
          kind: 'greek',
          id: 'acts24-hairesis',
          title: 'Hairesis — &ldquo;Sect&rdquo; or &ldquo;Heresy&rdquo;',
          script: 'αἵρεσις',
          translit: '<strong>hairesis</strong> · a choosing, a sect, a party, a heretical doctrine',
          description:
            'The word literally means "a choice." In Greek philosophy it referred to a philosophical school or the act of choosing a path. In this context, it is weaponized — a "sect" of dangerous people who have chosen to follow a false or seditious teaching.',
        },
        {
          kind: 'commentary',
          id: 'acts24-their-law',
          html:
            'The phrase "would have judged according to our law" reveals what has actually happened. The Jewish council wanted to condemn Paul according to Jewish law, but Roman law has intervened. The commander Lysias stopped them. The council is appealing to a Roman governor to do what Jewish authority could not accomplish.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age when accusations come fast and professional. It is easy to be swayed by polished language, especially when the speaker flatters the listener first. Paul will soon speak. He will not open with flattery. He will speak truth and let Felix decide whether he wants to hear it.',
        },
        {
          kind: 'reflection',
          id: 'acts24-flattery-reflection',
          prompt:
            'When you hear professional accusations — against a person, a movement, or an idea — can you hear the rhetorical strategy underneath? What would it cost you to demand to hear the other side before you decide?',
        },
      ],
    },

    /* ─── Acts 24:10–16 — Paul&apos;s Defense ──────────────────────────────────── */
    {
      ref: 'Acts 24:10–16',
      title: 'After the Way Which They Call Heresy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              10,
              t('Then Paul, after that the governor had beckoned unto him to speak, answered, '),
              hg('Forasmuch as I know that thou hast been of many years a judge unto this nation, I do the more cheerfully make my defence', 'acts24-paul-opening'),
              t(':'),
            ),
            verse(
              11,
              t('Because that thou mayest understand, that there are yet but twelve days since I went up to Jerusalem for to worship.'),
            ),
            verse(
              12,
              t('And they neither found me in the temple disputing with any man, neither raising up the people in the synagogues, nor in the city:'),
            ),
            verse(
              13,
              t('Neither can they prove the things whereof they now accuse me.'),
            ),
            verse(
              14,
              t('But this I confess unto thee, that '),
              hp('after the way which they call heresy, so worship I the God of my fathers, believing all things which are written in the law and in the prophets', 'acts24-the-way'),
              t(':'),
            ),
            verse(
              15,
              t('And have hope toward God, which they themselves also allow, that there shall be a resurrection of the dead, both of the just and unjust.'),
            ),
            verse(
              16,
              t('And in this respect '),
              hg('I exercise myself, to have always a conscience void of offence toward God, and toward men', 'acts24-conscience'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts24-paul-opening',
          html:
            'Paul begins where Tertullus began — with respect for the judge. But Paul&apos;s respect is not flattery. It is genuine acknowledgment that Felix has years of experience discerning truth. Paul appeals to Felix&apos;s wisdom and judgment, not to his vanity.',
        },
        {
          kind: 'commentary',
          id: 'acts24-the-way',
          html:
            'This is one of the most striking moments in Acts. Paul names his faith with the very word his enemies use against him. They call it "heresy" — a strange sect, a dangerous deviation. Paul says yes, that is what I am. But he redefines it: this "way" worships the God of Abraham, Isaac, and Jacob. It believes everything the law and prophets say. It is not a new religion; it is the continuation of Israel&apos;s faith, now opened to see that Jesus is the fulfillment the prophets promised. The word "heresy" loses its sting when Paul owns it and transforms it.',
        },
        {
          kind: 'greek',
          id: 'acts24-politeia',
          title: 'Politeia — &ldquo;Way&rdquo; or &ldquo;Citizenship&rdquo;',
          script: 'πολιτεία',
          translit: '<strong>politeia</strong> · a way of life, a course of conduct, citizenship',
          description:
            'The word carries the sense of how one lives — the conduct and orientation that defines you. For Paul, the Way is not a list of doctrines but a whole form of life lived toward God and toward others.',
        },
        {
          kind: 'commentary',
          id: 'acts24-conscience',
          html:
            'Paul exercises himself — he practices, he trains, he disciplines himself — to have a conscience void of offence. This is not passive. It is active work. A conscience void of offence is not perfection; it is a commitment to live with awareness, to check yourself against your own measure of right and wrong, to keep your conscience clear before God and before the people around you.',
        },
        {
          kind: 'greek',
          id: 'acts24-syneidesis',
          title: 'Syneidesis — &ldquo;Conscience&rdquo;',
          script: 'συνείδησις',
          translit: '<strong>syneidesis</strong> · conscience; an awareness that passes judgment on one&apos;s conduct',
          description:
            'Conscience is the inner judge. It is that still, small voice that tells you whether you have betrayed yourself or kept faith. Paul has trained his conscience by his faith. His goal is to keep it clear, uncompromised, at peace before God.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not defend himself by attacking his accusers. He simply states the truth about his own life and faith. He claims no innocence he has not earned and no purity he does not practice. He walks in a way that lets him sleep at night. What would change if you measured your own conduct not against others&apos; accusations but against your own conscience before God?',
        },
        {
          kind: 'reflection',
          id: 'acts24-conscience-reflection',
          prompt:
            'When you lie in bed at night, does your conscience accuse you, or does it confirm you? What would you need to change to keep your conscience clear?',
        },
      ],
    },

    /* ─── Acts 24:17–21 — Hope of Resurrection ─────────────────────────────── */
    {
      ref: 'Acts 24:17–21',
      title: 'Hope of Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              17,
              t('Now after many years I came to bring alms to my nation, and offerings.'),
            ),
            verse(
              18,
              t('Whereupon certain Jews from Asia found me purified in the temple, neither with multitude, nor with tumult.'),
            ),
            verse(
              19,
              t('Who ought to be here before thee, and object, if they have ought against me.'),
            ),
            verse(
              20,
              t('Or else let these same here say, if they have found any evil doing in me, while I stood before the council;'),
            ),
            verse(
              21,
              t('Except it be for this one voice, that I cried standing among them, '),
              hp('Touching the resurrection of the dead I am called in question by you this day', 'acts24-resurrection-paul'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts24-resurrection-paul',
          html:
            'Paul brings the charge down to its real center. The conflict between Paul and the Jewish council is not really about sedition or temple violation. It is about the resurrection of the dead. The Sadducees deny resurrection. Paul affirms it. This is what divides them. It is a theological disagreement, not a crime. And for that, Paul is imprisoned.',
        },
        {
          kind: 'christ',
          id: 'acts24-resurrection-connection',
          title: 'Christ Connection — The Resurrection Divides',
          html:
            'The resurrection of Jesus is not incidental to the apostolic message. It is the center. Paul says openly that his faith rests on resurrection — the future resurrection of the dead, like Christ&apos;s own resurrection from the dead. "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live" (John 11:25). The Pharisees and many in Israel believed in a coming resurrection. The Sadducees rejected it entirely. To preach Jesus is to preach resurrection. This is what makes the gospel so divisive.',
        },
        {
          kind: 'carry',
          html:
            'You cannot separate Paul&apos;s hope from his hardship. He suffers not because he is a troublemaker, but because his hope — resurrection, the future, the renewal of all things — has made him a witness. What if your own hope, however costly it becomes to claim it, is the truest thing about your life?',
        },
        {
          kind: 'reflection',
          id: 'acts24-hope-reflection',
          prompt:
            'If someone asked what you are actually hoping for in your life, what would you say? Does your hope shape how you live right now?',
        },
      ],
    },

    /* ─── Acts 24:22–25 — Felix and Drusilla ────────────────────────────────── */
    {
      ref: 'Acts 24:22–25',
      title: 'Felix Trembles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              22,
              t('And when Felix heard these things, having more perfect knowledge of that way, he '),
              hg('deferred them, and said, When Lysias the chief captain shall come down, I will know the uttermost of your matter', 'acts24-deferred'),
              t('.'),
            ),
            verse(
              23,
              t('And he commanded a centurion to keep Paul, and to let him have liberty, and that he should forbid none of his acquaintance to minister or come unto him.'),
            ),
            verse(
              24,
              t('And after certain days, when Felix came with his wife Drusilla, which was a Jewess, he sent for Paul, and heard him concerning the '),
              hp('faith in Christ', 'acts24-faith-christ'),
              t('.'),
            ),
            verse(
              25,
              t('And as he reasoned of righteousness, temperance, and '),
              hg('judgment to come, Felix trembled, and answered, Go thy way for this time; when I have a convenient season, I will call for thee', 'acts24-trembled'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts24-deferred',
          html:
            'Felix does not condemn Paul, but he does not release him either. He defers. This is the posture of a man who senses Paul is not guilty but is not willing to face the consequences of saying so. To release Paul would mean admitting that the Jewish council brought false charges. To condemn him would be unjust. So Felix does what the powerful often do: he delays.',
        },
        {
          kind: 'commentary',
          id: 'acts24-faith-christ',
          html:
            'Something shifts in this verse. Felix, with his wife Drusilla, asks to hear about faith in Christ. This is not the council. This is not an official proceeding. This is two people, seemingly curious, wanting to hear Paul explain what he actually believes. The private hearing becomes a moment of vulnerability.',
        },
        {
          kind: 'commentary',
          id: 'acts24-trembled',
          html:
            'Paul does not soften his message for a governor. He speaks of righteousness — right living, justice, moral order. He speaks of temperance — self-control, the mastery of passion and appetite. And he speaks of judgment to come — a reckoning, a day when all will be answered for. As Paul speaks, Felix trembles. Not from fear of Paul, but from fear of judgment. The governor feels the weight of his own conscience. He sees, perhaps for the first time, that his wealth and power do not exempt him from the reckoning. He is mortal. He will answer. And he is not ready.',
        },
        {
          kind: 'greek',
          id: 'acts24-egkrateia',
          title: 'Egkrateia — &ldquo;Temperance&rdquo; or &ldquo;Self-Control&rdquo;',
          script: 'ἐγκράτεια',
          translit: '<strong>egkrateia</strong> · self-control, temperance, mastery of the appetites',
          description:
            'This word refers to the power to master your own impulses. It is not asceticism or denial for its own sake. It is the freedom that comes from governing yourself rather than being enslaved to appetite, anger, or fear.',
        },
        {
          kind: 'christ',
          id: 'acts24-judge-connection',
          title: 'Christ Connection — The Judge of All the Earth',
          html:
            'Paul speaks of judgment to come. Jesus taught this same warning: "the Father judgeth no man, but hath committed all judgment unto the Son... the hour is coming, in the which all that are in the graves shall hear his voice" (John 5:22, 28). That judgment is not punishment for punishment&apos;s sake. It is the reckoning by the One who knows all, judges all, and loves all. Felix trembles not because he is guilty in some courtroom sense, but because he senses he is answerable to something larger than himself.',
        },
        {
          kind: 'carry',
          html:
            'Felix had power. He had wealth. He had the authority to release Paul or condemn him. And yet when he heard Paul speak of righteousness and judgment, he trembled. What is it in your life that you sense you cannot control — a future account, a reckoning you cannot buy your way out of, a judge you cannot bribe or flatter? That trembling, when it comes, may be the beginning of wisdom.',
        },
        {
          kind: 'reflection',
          id: 'acts24-trembling-reflection',
          prompt:
            'When have you felt a trembling — a moment when you sensed something larger than yourself, a judgment or reckoning you could not escape? What did that do to you?',
        },
      ],
    },

    /* ─── Acts 24:26–27 — Two Years ──────────────────────────────────────────── */
    {
      ref: 'Acts 24:26–27',
      title: 'Postponement and the Passing Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              26,
              t('He hoped also that money should have been given him of Paul, that he might loose him: wherefore he sent for him the oftener, and '),
              hg('communed with him', 'acts24-communed'),
              t('.'),
            ),
            verse(
              27,
              t('But after two years Porcius Festus came into Felix&apos;s room: and Felix, willing to shew the Jews a pleasure, '),
              hg('left Paul bound', 'acts24-left-bound'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts24-communed',
          html:
            'Felix calls Paul again and again. But not out of genuine spiritual hunger. He hopes for money — a bribe to release Paul. This is the posture of a man at war with himself. He is drawn to what Paul says. His conscience has been stirred. But he will not repent, will not renounce his power or his love of money, will not make the hard choices. So he postpones. He delays. He "communes" with Paul to feel the stirring of conscience without ever following it. How many of us do the same?',
        },
        {
          kind: 'commentary',
          id: 'acts24-left-bound',
          html:
            'Two years pass. Paul remains in prison. Felix, newly aware that his soul is in question, cannot face it. When Festus arrives to replace him, Felix chooses the easier path: he leaves Paul in chains. To release him would mean admitting something to himself. To face Festus with a decision would mean stepping into the light. So he leaves the matter unresolved. He walks away from the question he trembled at.',
        },
        {
          kind: 'carry',
          html:
            'There are decisions we know we must make but do not make. There are questions we have felt stir in us but we silence. There are moments of trembling we walk away from, hoping that postponement is the same as being excused. Felix had two years. Two years to think, to pray, to choose. What choice are you avoiding? What question are you postponing? The years slip by quickly.',
        },
        {
          kind: 'reflection',
          id: 'acts24-postponement-reflection',
          prompt:
            'What conviction or decision have you postponed? What would it cost you to face it, rather than waiting for a "convenient season" that may never come?',
        },
      ],
    },

    /* ─── Divider ────────────────────────────────────────────────────────── */
    {
      ref: '',
      title: '',
      blocks: [
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Closing Reflection ─────────────────────────────────────────────────── */
    {
      ref: '',
      title: 'The Free Man and the Bound Governor',
      blocks: [
        {
          kind: 'commentary',
          html:
            'Acts 24 ends with Paul in chains, but with liberty in his spirit. It ends with Felix free to go, but bound by his own fear and love of money. The irony is complete. The wrongfully imprisoned apostle is the truly free one. The governor with absolute power is the prisoner. Paul has been willing to lose everything — reputation, comfort, liberty — for the sake of Christ. Felix cannot even lose the hope of a bribe. What we are willing to lose is what we are free from. What we cannot bear to lose is what imprisons us.',
        },
        {
          kind: 'artwork',
          matchTitle: /paul.*trial|felix.*governor|roman.*court/i,
          caption: 'Acts 24 · Paul Before Felix',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I exercise myself, to have always a conscience void of offence toward God, and toward men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 24 · Study Guide',
  },

  hasHebrew: false,
};
