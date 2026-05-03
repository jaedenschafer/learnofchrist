import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Galatians 2 — I Am Crucified with Christ
 *
 * Paul recounts his meeting with the Jerusalem apostles—not a subordinate
 * visit, but a defense of the gospel of liberty in Christ. He names the false
 * brethren who crept in to spy out freedom. The apostles affirm his calling.
 * Then at Antioch, Peter's hypocrisy reveals a deeper question: what does it
 * mean to walk "uprightly according to the truth of the gospel"? Paul answers
 * with the most concentrated declaration in all scripture: "I am crucified with
 * Christ: nevertheless I live; yet not I, but Christ liveth in me." The old
 * identity is dead. What remains is not the self, but Christ living within.
 * Salvation is not by works of the law, but by faith in the Son of God who
 * loved us and gave Himself for us.
 */
export const GALATIANS_2: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 2,

  estimatedMinutes: { 5: 8, 10: 17, 15: 25 },
  intros: [
    'Paul faced the Jerusalem church at a moment of crisis. False brethren had crept in unaware, demanding that Gentiles become Jewish to be fully Christian. Paul did not waver. He went up to Jerusalem not as a subordinate seeking permission, but as a defender of the gospel. The apostles recognized his calling. The gospel to the Gentiles is valid. Gentile believers do not need the law.',
    'But the chapter does not end in Jerusalem. It moves to Antioch, where the real test comes. Peter, who had eaten with Gentiles, withdraws when the circumcision party arrives. His hypocrisy reveals how easily even the leaders can compromise the gospel. Paul responds not with anger, but with the most profound statement of Christian identity ever written: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me." The old self is dead. The Christian lives from a new source—Christ Himself.',
  ],

  opener: {
    matchArtist: /rembrandt|caravaggio/i,
    matchTitle: /confrontation|peter|paul|antioch/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Galatians 2:1–3 — Up to Jerusalem with Titus ──────────────────── */
    {
      ref: 'Galatians 2:1–3',
      title: 'Up to Jerusalem with Titus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('Then '),
              hp('fourteen years after', 'gal2-fourteen'),
              t(' I went up again to Jerusalem with Barnabas, and took Titus with me also;')
            ),
            verse(
              2,
              t('And I went up by revelation, and communicated unto them that '),
              hy('gospel which I preach among the Gentiles', 'gal2-gospel-gentiles'),
              t(', but privately to them which were of reputation; lest by any means I should run, or had run, in vain:')
            ),
            verse(
              3,
              t('But '),
              hg('neither was Titus, who was with me, being a Greek, compelled to be circumcised', 'gal2-titus-greek')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-fourteen',
          html:
            'Fourteen years have passed since Paul&apos;s first visit to Jerusalem (Galatians 1:18). He did not rush back to defend himself. He lived by revelation, moved by the Spirit, not by urgency or panic. This is the patience of a man at peace with his calling.',
        },
        {
          kind: 'commentary',
          id: 'gal2-gospel-gentiles',
          html:
            'Paul does not come to Jerusalem asking permission to preach to Gentiles. He comes to <em>communicate</em>—to share, to explain, to make known—the gospel he has been preaching. He goes "privately" to the men of reputation, not in a council or trial, but in conversation. He trusts the gospel to speak for itself.',
        },
        {
          kind: 'greek',
          id: 'gal2-eleutheria-setup',
          title: 'Anathema — "Liberty" in Theological Gravity',
          script: 'ἀνάθεμα',
          translit: '<strong>anathema</strong> · a thing devoted; something accursed',
          description:
            'Paul will use this word in verse 3. False teachers who pervert the gospel are under a curse—not by Paul&apos;s judgment, but by God&apos;s. The gospel is not negotiable. It is not a matter of opinion where we can agree to disagree.',
        },
        {
          kind: 'commentary',
          id: 'gal2-titus-greek',
          html:
            'Titus is Greek, uncircumcised, a Gentile believer. Paul brings him to Jerusalem deliberately. This is not provocation—it is evidence. Titus stands as living proof that a man can believe in Jesus, can be filled with the Spirit, can be a co-worker in the gospel, without ever being circumcised. The apostles did not demand it. Gentile liberty was affirmed.',
        },
        {
          kind: 'carry',
          html:
            'You are not incomplete. You do not need an additional credential, an additional ritual, an additional step to be fully accepted by God. Your faith in Christ is sufficient. Whatever background you come from, whatever community shaped you before you knew Jesus, you are fully welcome in the kingdom. Your past does not disqualify you. Your ethnicity does not bar you. Your lack of a particular cultural practice does not make you a second-class Christian.',
        },
        {
          kind: 'reflection',
          id: 'gal2-titus-prompt',
          prompt: 'What "requirement" have you felt—spoken or unspoken—that you thought you needed to meet to be truly accepted in the church? How might Paul&apos;s defense of Titus apply to your own story?',
        },
      ],
    },

    /* ─── Galatians 2:4–5 — Liberty Preserved ─────────────────────────────── */
    {
      ref: 'Galatians 2:4–5',
      title: 'Liberty Preserved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              4,
              t('And that '),
              hg('because of false brethren unawares brought in', 'gal2-false-brethren'),
              t(', who came in privily to spy out our '),
              hy('liberty which we have in Christ Jesus', 'gal2-liberty'),
              t(', that they might bring us into bondage:')
            ),
            verse(
              5,
              t('To whom we gave place by subjection, no, not for an hour; that the truth of the gospel might continue with you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-false-brethren',
          html:
            'Paul names them plainly: false brethren. Not sincere seekers with a different interpretation, but deceivers who crept in "unawares." They came in under cover, like spies. Their intent was to undermine the gospel of liberty and drag believers back into the old system—circumcision, dietary laws, the works of the flesh parading as the works of the law.',
        },
        {
          kind: 'commentary',
          id: 'gal2-liberty',
          html:
            'This is the theological heart of Galatians. The false brethren came in to spy out the "liberty which we have in Christ Jesus." Liberty means freedom from the tyranny of trying to prove yourself worthy. Freedom from the burden of the law. Freedom to live as a child of God, accepted not by works but by grace through faith.',
        },
        {
          kind: 'greek',
          id: 'gal2-eleutheria',
          title: 'Eleutheria — "Liberty"; Freedom; Emancipation',
          script: 'ἐλευθερία',
          translit: '<strong>eleutheria</strong> · liberty; freedom; emancipation',
          description:
            'This is the theological heart of Galatians. Not license to sin, but freedom from the burden of proving your worth through works. Freedom from the endless weight of trying to be good enough for God. Freedom to live as a child of God, not a slave to rules.',
        },
        {
          kind: 'commentary',
          id: 'gal2-no-place',
          html:
            '"To whom we gave place by subjection, no, not for an hour." This is a powerful statement of conviction. Paul is saying: I did not budge. Not for a moment. Not for the sake of unity, not for the sake of peace, not for any reason. The truth of the gospel is at stake. Liberty cannot be surrendered.',
        },
        {
          kind: 'christ',
          id: 'gal2-christ-liberty',
          title: 'Christ Connection — Liberty in Christ Jesus',
          html:
            'Liberty belongs to those who are in Christ. This is not a human right, and it is not rebellion. It is the inheritance of the redeemed. Christ paid for it with His blood. He broke the chains of law and death. Those who trust in Him are free—not from consequences, but from condemnation; not from discipline, but from doubt; not from growth, but from the endless anxiety of being never enough.',
        },
        {
          kind: 'reflection',
          id: 'gal2-liberty-prompt',
          prompt: 'Where in your own life do you still feel the weight of having to earn approval? What rules or standards do you measure yourself against that Christ has already set you free from?',
        },
      ],
    },

    /* ─── Galatians 2:6–10 — The Right Hands of Fellowship ─────────────────── */
    {
      ref: 'Galatians 2:6–10',
      title: 'The Right Hands of Fellowship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              6,
              t('But of those who seemed to be somewhat (whatsoever they were, it maketh no matter to me: God accepteth no man&apos;s person:) for they who seemed to be somewhat in conference added nothing to me:')
            ),
            verse(
              7,
              t('But contrariwise, when they saw that the gospel of the '),
              hg('uncircumcision was committed unto me', 'gal2-uncircumcision'),
              t(', as the gospel of the circumcision was unto Peter;')
            ),
            verse(
              8,
              t('(For he that wrought effectually in Peter to the apostleship of the circumcision, the same was mighty in me toward the Gentiles;)')
            ),
            verse(
              9,
              t('And '),
              hp('James, Cephas, and John, who seemed to be pillars', 'gal2-pillars'),
              t(', perceiving the grace that was given unto me, '),
              hy('gave to me and Barnabas the right hands of fellowship', 'gal2-right-hands'),
              t('; that we should go unto the Gentiles, and they unto the circumcision.')
            ),
            verse(
              10,
              t('Only they would that we should remember the poor; the same which I also was forward to do.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-uncircumcision',
          html:
            'Paul speaks of "the gospel of the uncircumcision"—the gospel as it is preached to Gentiles, without the demand for circumcision. This is not a different gospel; it is the same gospel, freed from the false addition of the law. Peter has "the gospel of the circumcision"—the same good news, but as it meets the Jewish believers. Both are true. Both are valid. There is one gospel, one Spirit, one Lord—but the law is not required for any.',
        },
        {
          kind: 'greek',
          id: 'gal2-anastrepho',
          title: 'Anastrepho — "To Conduct Oneself"; "To Walk"; Manner of Life',
          script: 'ἀναστρέφω',
          translit: '<strong>anastrepho</strong> · to conduct oneself; to walk; to live; manner of life',
          description:
            'Later in this chapter, Paul will ask Peter: "If thou, being a Jew, livest after the manner of Gentiles, and not as do the Jews, why compellest thou the Gentiles to live as do the Jews?" The verb "to live" (anastrepho) is the conduct of your whole life. Peter&apos;s actions contradict his profession.',
        },
        {
          kind: 'commentary',
          id: 'gal2-pillars',
          html:
            '"James, Cephas, and John, who seemed to be pillars." Paul refers to the leaders of the Jerusalem church with respect, but also with precision. He does not say they <em>were</em> pillars—he says they "seemed to be." This is not sarcasm. It is theological accuracy. What matters is not their status or reputation, but what they actually do. And what they do is recognize Paul&apos;s calling and affirm it.',
        },
        {
          kind: 'commentary',
          id: 'gal2-right-hands',
          html:
            'The "right hand of fellowship"—this is a gesture of recognition, of solidarity, of blessing. The Jerusalem apostles did not merely tolerate Paul&apos;s mission to the Gentiles. They affirmed it. They gave him the hand of partnership. The gospel is one. The mission is undivided. Both the circumcised and uncircumcised belong to the same family of God.',
        },
        {
          kind: 'carry',
          html:
            'You do not need the approval of religious authorities to know you are called. You do not need credentials or status to be recognized as a child of God. But when legitimate leaders do recognize your calling—when they extend the hand of fellowship—receive it with gratitude. And extend the same hand to others. The church is one body, even when we come from different backgrounds, even when we follow Jesus differently than our neighbors do.',
        },
        {
          kind: 'reflection',
          id: 'gal2-fellowship-prompt',
          prompt: 'Who has extended the "right hand of fellowship" to you? And to whom might you extend that hand of recognition and blessing?',
        },
      ],
    },

    /* ─── Galatians 2:11–13 — Withstood Peter to the Face ──────────────────── */
    {
      ref: 'Galatians 2:11–13',
      title: 'Withstood Peter to the Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              t('But '),
              hp('when Peter was come to Antioch, I withstood him to the face', 'gal2-withstand'),
              t(', because he was to be blamed.')
            ),
            verse(
              12,
              t('For before that certain came from James, he did eat with the Gentiles: but when they were come, he withdrew and separated himself, '),
              hy('fearing them which were of the circumcision', 'gal2-fear')
            ),
            verse(
              13,
              t('And the other Jews dissembled likewise with him; insomuch that Barnabas also was carried away with their dissimulation.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-withstand',
          html:
            'The word is <em>antistēmi</em>—to stand against, to resist, to oppose. Paul did not argue with Peter privately. He confronted him openly, "to the face." This is not lack of respect for Peter&apos;s position. It is a higher loyalty to truth. When gospel truth is compromised—even by leaders—it must be called out. Gentleness in confrontation is possible. Silence in the face of hypocrisy is not.',
        },
        {
          kind: 'greek',
          id: 'gal2-hypokrisis',
          title: 'Hypokrisis — "Hypocrisy"; "Acting Under a Mask"',
          script: 'ὑπόκρισις',
          translit: '<strong>hypokrisis</strong> · hypocrisy; acting under a mask; dissimulation',
          description:
            'The word literally means "acting" or "mask-wearing"—pretending to be something you are not. Peter ate with Gentiles, fully convinced the law was not required. But when the circumcision party arrived, he put on a mask. He acted as if the law mattered after all. This is hypocrisy—not in the modern sense of mere inconsistency, but in the deep sense of dishonest pretense.',
        },
        {
          kind: 'commentary',
          id: 'gal2-fear',
          html:
            'Peter was afraid. Not afraid of God, not afraid of truth, but afraid of people. He feared "those who were of the circumcision." His fear drove him to deny what he knew—that Gentiles were fully accepted in Christ—and to withdraw from fellowship with them. Fear is a powerful force. It can make even apostles compromise the gospel.',
        },
        {
          kind: 'commentary',
          id: 'gal2-contagion',
          html:
            'The hypocrisy spreads. "The other Jews dissembled likewise with him; insomuch that Barnabas also was carried away." This is the danger of compromise at the top. When leaders waver, others follow. When an apostle gives way to fear, the whole assembly slides into hypocrisy. Gospel truth is fragile when those who guard it lose courage.',
        },
        {
          kind: 'christ',
          id: 'gal2-christ-courage',
          title: 'Christ Connection — Bold Witness Against Fear',
          html:
            'Peter himself had once denied Jesus out of fear. Now, at Antioch, he is doing it again—denying the full acceptance of Gentile believers out of fear of people. Jesus told Peter: "To this rock I will build my church, and the gates of Hades will not overcome it." That rock was not Peter&apos;s strength or consistency. It was Christ. When Peter leaned on himself, he stumbled. When Paul appealed to the gospel itself—to Christ—he stood firm. The call of the Christian life is not to become a perfect person, but to let Christ become your courage.',
        },
        {
          kind: 'reflection',
          id: 'gal2-fear-prompt',
          prompt: 'Where do you feel pressure to mask your true convictions? What would it look like to "withstand" that pressure—not with hostility, but with honest courage?',
        },
      ],
    },

    /* ─── Galatians 2:14 — Walking Uprightly ──────────────────────────────── */
    {
      ref: 'Galatians 2:14',
      title: 'Walking Uprightly According to the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('But when I saw that they walked not uprightly according to the truth of the gospel, I said unto Peter before them all, '),
              hg('If thou, being a Jew, livest after the manner of Gentiles, and not as do the Jews, why compellest thou the Gentiles to live as do the Jews?', 'gal2-logic')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-logic',
          html:
            'Paul&apos;s accusation is precise. Peter&apos;s behavior is illogical and dishonest. Peter himself—a Jew—has been living like a Gentile, eating unclean foods, abandoning the dietary laws that separated the Jewish people for centuries. He did this because he recognized that in Christ, the old boundary is gone. Yet now he demands that Gentiles live like Jews. This is not principle. This is performance. This is fear masquerading as conviction.',
        },
        {
          kind: 'greek',
          id: 'gal2-orthopodia',
          title: 'Orthopodeō — "To Walk Uprightly"; Straight Path',
          script: 'ὀρθοποδέω',
          translit: '<strong>orthopodeō</strong> · to walk straight; to walk uprightly; to conduct oneself in truth',
          description:
            'The verb literally means "to walk with straight feet." When you know the truth and act according to it, you walk straight. When you know the truth and hide it out of fear, you walk crooked. Peter was walking crooked. Paul calls him to walk straight.',
        },
        {
          kind: 'commentary',
          id: 'gal2-truth-gospel',
          html:
            '"According to the truth of the gospel"—this is the standard. Not tradition. Not reputation. Not the judgment of others. Not personal preference. The truth of the gospel. The good news that Christ has finished the work. The gospel that says you are accepted by faith, not by works. The gospel that says Gentiles are fully welcome without the law. Any action, any compromise, any silence that contradicts this is not uprightness. It is betrayal.',
        },
        {
          kind: 'carry',
          html:
            'You know the difference between straight and crooked. You know when you are living according to what you truly believe and when you are putting on a mask to please others. The cost of uprightness is real—it may mean standing alone, facing criticism, losing approval. But the cost of hypocrisy is higher. It fractures your soul. It makes you a teacher of falsehood to those who watch you. It betrays the gospel. Walk straight. The foundation is not your reputation or your reputation—it is Christ.',
        },
        {
          kind: 'reflection',
          id: 'gal2-uprightly-prompt',
          prompt: 'What is one area where you know you are not walking "uprightly according to the truth"? What would it take to change course?',
        },
      ],
    },

    /* ─── Galatians 2:15–16 — Justified by Faith of Jesus Christ ──────────── */
    {
      ref: 'Galatians 2:15–16',
      title: 'Justified by Faith of Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              15,
              t('We who are Jews by nature, and not sinners of the Gentiles, knowing that a man is not justified by the works of the law, but by the '),
              hy('faith of Jesus Christ', 'gal2-faith-jesus'),
              t(', even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified.')
            ),
            verse(
              16,
              t('For by the works of the law shall no flesh be justified.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-faith-jesus',
          html:
            'The phrase is crucial: "faith of Jesus Christ"—not merely faith <em>in</em> Jesus (though that is part of it), but the faith that belongs to Jesus, the faithfulness of Jesus to the Father, the reliability of His promise. When you trust in Him, you are trusting in a righteousness that is not your own, a completion that you did not earn. You step into His faithfulness.',
        },
        {
          kind: 'greek',
          id: 'gal2-dikaioo',
          title: 'Dikaioō — "To Justify"; To Declare Righteous; To Acquit',
          script: 'δικαιόω',
          translit: '<strong>dikaioō</strong> · to justify; to declare righteous; to vindicate; to acquit',
          description:
            'The verb does not mean "to make someone righteous." It means to declare them righteous, to acquit them, to pronounce them innocent before the law. You are not justified by becoming good. You are justified by being declared good in Christ.',
        },
        {
          kind: 'commentary',
          id: 'gal2-works-repeated',
          html:
            'Paul repeats the phrase three times in this section: "not justified by the works of the law" (verse 15 twice, verse 16). This is not accidental. He is driving a stake into the ground. Works of the law do not justify. Full stop. Not because works are evil—the law is holy and good. But because works do not have the power to acquit you before God. Only faith. Only Christ. Only grace.',
        },
        {
          kind: 'christ',
          id: 'gal2-christ-justifier',
          title: 'Christ Connection — Christ as Your Righteousness',
          html:
            'Christ is not merely your example, and He is not merely your teacher. He is your righteousness. When the Father looks at you, He does not see your record. He sees the record of Christ. Your guilt has been transferred to the cross. His righteousness has been imputed to you. This is not a legal fiction or an arbitrary decree. This is the truth of substitution. Christ took what was yours—death, condemnation, separation—and gave you what was His—life, acquittal, nearness to God.',
        },
        {
          kind: 'reflection',
          id: 'gal2-faith-prompt',
          prompt: 'What works have you been trying to do to earn God&apos;s approval? What would it mean to let that go and trust in Christ&apos;s righteousness alone?',
        },
      ],
    },

    /* ─── Galatians 2:20–21 — I Am Crucified with Christ ──────────────────── */
    {
      ref: 'Galatians 2:20–21',
      title: '"I Am Crucified with Christ"—The Most Concentrated Verse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              20,
              hy('I am crucified with Christ', 'gal2-co-crucified'),
              t(': nevertheless I live; yet not I, but '),
              hp('Christ liveth in me', 'gal2-christ-lives'),
              t(': and the life which I now live in the flesh I live by the '),
              hg('faith of the Son of God, who loved me, and gave himself for me', 'gal2-love-gave')
            ),
            verse(
              21,
              t('I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-co-crucified',
          html:
            'The verb is <em>systauroō</em>—"co-crucified," "crucified together." This is not metaphorical. You are baptized into Christ&apos;s death. Your old self—the one that tried to earn approval, that measured itself by rules, that boasted in the flesh—has been executed. It is gone. Not suppressed. Not controlled. Dead. Finished. The grave is not your destination. It is your past.',
        },
        {
          kind: 'greek',
          id: 'gal2-systauroō',
          title: 'Systauroō — "Co-Crucified"; Crucified Together',
          script: 'συσταυρόω',
          translit: '<strong>systauroō</strong> · to crucify with; to crucify together',
          description:
            'The <em>syn-</em> prefix means "with." Your crucifixion with Christ is not separate from His crucifixion. You died His death. You were there at the cross—not in time, but in the covenant. When He was sentenced, you were sentenced. When He died, you died. This is the deepest truth the apostles teach: you are united to Christ in His death and resurrection.',
        },
        {
          kind: 'commentary',
          id: 'gal2-paradox',
          html:
            'Now the paradox: "Nevertheless I live; yet not I, but Christ liveth in me." The self has died, yet the self still exists. But who is the "I" that lives now? It is not the old self. It is Christ. You do not cease to exist. You are transformed. Your individuality remains. But your center shifts. You are no longer the source of your own life. Christ is. You become a vessel, a dwelling place, a temple for His life.',
        },
        {
          kind: 'commentary',
          id: 'gal2-christ-lives',
          html:
            '"Christ liveth in me"—present tense. Not a hope for the future. Not a mystery beyond reach. But the actual current reality of Christian existence. This is Galatians&apos; central claim. You are not trying to become good. Christ is living His life through you. You are not struggling toward perfection. The Spirit of Christ is transforming you from within. This is the gospel.',
        },
        {
          kind: 'commentary',
          id: 'gal2-love-gave',
          html:
            '"The faith of the Son of God, who loved me, and gave himself for me." Notice the personal pronouns. Not just "the world." Not just "humanity." But <em>me</em>. <em>For me</em>. Christ did not love humanity in the abstract. He loved you. He loved <em>you</em>. So completely that He gave Himself. This is not distant theology. This is intimate knowledge. This is the gospel at its warmest: Christ loved me, so completely that He emptied Himself on the cross. For me.',
        },
        {
          kind: 'christ',
          id: 'gal2-christ-supreme',
          title: 'Christ Connection — Christ as Your Life',
          html:
            'The New Testament does not teach that you are saved and then left to manage the Christian life on your own. It teaches that "Christ liveth in me." Colossians says it plainly: "Christ in you, the hope of glory." Philippians says: "For me to live is Christ." Ephesians says: "The eyes of your heart enlightened… you may know… the exceeding greatness of his power to us-ward who believe" (Ephesians 1:18–19). Christ is not a savior at the periphery of your life. He is the center. He is the substance. He is the very source from which you live. To know this, to believe it, to live from it—this is transformation.',
        },
        {
          kind: 'commentary',
          id: 'gal2-frustrate',
          html:
            '"I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain." To frustrate the grace of God is to treat it as void, to set it aside, to say it does not matter. To go back to the law after grace is to declare Christ&apos;s death unnecessary. If the law could justify, then Christ died for nothing. If the law could make us righteous, then the cross is waste. But we know the law cannot justify. We have proven it in ourselves. Only Christ justifies. Only grace saves. To return to the law is to insult the blood that bought us.',
        },
        {
          kind: 'carry',
          html:
            'You may still feel the weight of the old self—the one that measures itself by performance, that seeks approval, that fears judgment. That self is dead. Let it stay dead. Do not resurrect it through anxiety. Do not rebuild it through performance. The Christian life is not you trying harder, achieving more, becoming better. The Christian life is Christ living through you—His power, His love, His courage, His wisdom flowing through your ordinary moments. You do not live by your own resources. You live by faith in the Son of God who loved you and gave Himself for you. That faith is enough. That grace is enough. You are enough, in Him.',
        },
        {
          kind: 'reflection',
          id: 'gal2-crucified-prompt',
          prompt: 'What does it mean for the old you to be "crucified"? What aspects of the old self—the one that relied on works, on achievement, on other people&apos;s approval—do you most struggle to release? How might Christ actually live more fully through you if you did?',
        },
      ],
    },

    /* ─── Galatians 2:21 — I Do Not Frustrate the Grace ──────────────────── */
    {
      ref: 'Galatians 2:21',
      title: 'I Do Not Frustrate the Grace of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              21,
              t('I do not '),
              hg('frustrate the grace of God', 'gal2-frustrate-grace'),
              t(': for if righteousness come by the law, then '),
              hp('Christ is dead in vain', 'gal2-christ-vain')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal2-frustrate-grace',
          html:
            'The word is <em>athetēō</em>—to nullify, to void, to treat as if it had no effect. Grace is not a small thing you can set aside and still be Christian. Grace is the central truth. To frustrate grace is to nullify the cross, to render it powerless, to treat God&apos;s gift as if it never happened. Paul will not do it. Neither will he allow the Galatians to do it.',
        },
        {
          kind: 'greek',
          id: 'gal2-charis',
          title: 'Charis — "Grace"; Favor; Unmerited Kindness',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; unmerited kindness; the power of God&apos;s goodness',
          description:
            'Grace is not sentimentality. Grace is not mere forgiveness. Grace is the <em>power</em> of God&apos;s goodness working in you, transforming you, making you new. To frustrate grace is to refuse this power. It is to say: I do not want your help. I will manage the Christian life myself.',
        },
        {
          kind: 'commentary',
          id: 'gal2-christ-vain',
          html:
            'If righteousness could come by the law—if keeping rules could make you acceptable to God—then Christ&apos;s death was unnecessary. It did not accomplish what was needed. It was vain. Empty. Wasted. But we know it was not vain. We know the law cannot justify. We have learned this through our own failure and through the Spirit&apos;s transformation. Christ died for a reason. He died because we could not save ourselves. He died to accomplish what the law could never do.',
        },
        {
          kind: 'christ',
          id: 'gal2-christ-necessity',
          title: 'Christ Connection — The Cross as Necessity and Victory',
          html:
            'The cross was not Plan B. It was not a backup plan in case humans failed to keep the law. The cross was always God&apos;s intention. God made the world knowing that He Himself would enter it, would die for it, would rise from death and reconcile all things to Himself. Christ&apos;s death is the center of all history. To return to the law after the cross is to misunderstand what the cross accomplished. Christ did not merely forgive your sins so you could start over with a clean slate. He dealt with sin itself. He broke its power. He opened a new way—not through the law, but through faith, through the Spirit, through union with Him.',
        },
        {
          kind: 'reflection',
          id: 'gal2-grace-prompt',
          prompt: 'In what ways do you "frustrate the grace of God" by trying to earn what has already been given? How might you surrender your need to prove yourself and instead rest in grace?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 2 · Study Guide',
    label: 'Share Galatians 2',
  },

  hasHebrew: false,
};
