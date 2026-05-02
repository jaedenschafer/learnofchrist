import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Romans 2 — God&apos;s Judgment Turns Inward
 *
 * Paul exposes the hypocrisy of the judge. You who condemn others do the
 * same things. No one is exempt from God&apos;s judgment—not the insider,
 * not the one with the law. God judges according to deeds. The law is a
 * mirror of God&apos;s character, not a ticket to exemption. True circumcision
 * is of the heart, in the spirit, not the flesh.
 */
export const ROMANS_2: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 2,

  intros: [
    'Paul has exposed the human condition. The Gentiles suppress the truth, exchange God&apos;s glory for idols, and spiral into depravity. Perhaps the reader has nodded in agreement—yes, they are guilty, they deserve judgment. But Paul will not let you hide there. He turns the spotlight inward, pointing it directly at the judge. Do you condemn these things? Then in condemning them, you condemn yourself, for you do the same things. There is no safe distance from the dock. The same God who judges the pagan judges the insider, the one who possesses the law.',
    'In Romans 2, God&apos;s judgment becomes unavoidable and real. Ethnicity does not shield you. Religious status does not shield you. Possession of scripture does not shield you. Possession of the covenant sign—circumcision—does not shield you. God judges according to deeds, according to what you actually do. The law itself is not information. It is a mirror of God&apos;s own character. And true obedience is not outward compliance. True obedience is circumcision of the heart—a will, a spirit, an inmost being oriented toward God.',
  ],

  sections: [
    /* ─── Romans 2:1–5 — The Judge Judges Himself ──────────────────────── */
    {
      ref: 'Romans 2:1–5',
      title: 'The Judge Judges Himself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1, t('Therefore '), hy('thou art inexcusable, O man', 'rom2-inexcusable'), t(', whosoever thou art that judgest: for wherein thou judgest another, thou '), hy('condemnest thyself', 'rom2-self-condemn'), t('; for thou that judgest doest the same things.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-inexcusable',
          html:
            'There it is. No wiggle room. When you judge another for a sin, you are implicitly claiming that you yourself do not commit it. But the moment you judge, you stand under the same judgment. Your accusation becomes a mirror. You cannot elevate yourself above the law by wielding the law as a weapon against others. The standard by which you measure falls upon you.',
        },
        {
          kind: 'commentary',
          id: 'rom2-self-condemn',
          html:
            'The mirror is inescapable. Your judgment of another becomes a judgment on yourself. The same measure you use will be used on you. This is the law of reciprocity woven into creation itself.',
        },
        {
          kind: 'greek',
          id: 'rom2-krima',
          title: 'Krima — &ldquo;Judgment&rdquo;',
          script: 'κρίμα',
          translit: '<strong>krima</strong> · a judgment; a decision rendered; a condemnation',
          description:
            'In verse 2, Paul writes: &ldquo;We know that the judgment of God is according to truth against them which commit such things.&rdquo; The judgment is not arbitrary. It is not harsh or vindictive. It is <em>according to truth</em>—aligned with reality itself, with what you actually do, not what you claim.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(2, t('But we are sure that the judgment of God is '), hy('according to truth', 'rom2-truth'), t(' against them which commit such things.')),
            verse(3, t('And thinkest thou this, O man, that judgest them which do such things, and doest the same, that thou shalt '), hy('escape the judgment of God', 'rom2-escape'), t('?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-truth',
          html:
            'Judgment according to truth means judgment according to what is actually so. Not according to appearance, not according to your reputation, not according to your pedigree. God looks at the heart and the deeds. He sees the gap between the persona and the reality. He renders judgment on what is true.',
        },
        {
          kind: 'commentary',
          id: 'rom2-escape',
          html:
            'There is no escape hatch. You cannot outsmart God&apos;s judgment. You cannot hide behind your knowledge of the law or your religious status. The judgment of God reaches everyone, and no one escapes it.',
        },
        {
          kind: 'carry',
          html:
            'Before you judge another person for a sin, ask yourself honestly: Am I guilty of this same thing? The answer is often yes. This does not mean you never speak truth to wrong. It means you speak it with humility, knowing that you too stand under the same judgment. The harshness with which you condemn often reveals the thing you most fear in yourself.',
        },
        {
          kind: 'reflection',
          id: 'rom2-judge-self',
          prompt:
            'Is there someone whose sin you have condemned or looked down upon while ignoring the same tendency in yourself? What would it look like to approach that situation with humility instead of judgment?',
        },
      ],
    },

    /* ─── Romans 2:4–6 — Goodness Leads to Repentance ──────────────────── */
    {
      ref: 'Romans 2:4–6',
      title: 'The Goodness of God Leads to Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(4, t('Or despisest thou '), hy('the riches of his goodness', 'rom2-chresto'), t(' and forbearance and longsuffering; not knowing that the goodness of God leadeth thee to repentance?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-chresto',
          html:
            'God does not run out of second chances. His patience is not weakness—it is strategy. Every delay of judgment is an invitation to turn around. Every day you wake up is a gift God is pressing into your hand, saying: come back. You have been given time because you are being given opportunity.',
        },
        {
          kind: 'greek',
          id: 'rom2-metanoia',
          title: 'Metanoia — &ldquo;Repentance&rdquo;',
          script: 'μετάνοια',
          translit: '<strong>metanoia</strong> · a changing of the mind; a turning around',
          description:
            'Repentance is not self-loathing. It is not beating yourself into submission. It is a change of direction—a reorientation of your will. It begins with seeing the goodness of God. When you encounter genuine kindness, something in you breaks open. You want to be different. That wanting is the gift of God&apos;s patience.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(5, t('But after thy hardness and impenitent heart treasurest up unto thyself wrath against the day of wrath and revelation of the righteous judgment of God;')),
            verse(6, t('Who will '), hy('render to every man according to his deeds', 'rom2-deeds'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-deeds',
          html:
            '&ldquo;God will render to every man according to his deeds.&rdquo; This is the principle announced throughout Scripture. Not according to intention alone. Not according to knowledge alone. But according to the sum of what you actually do, the choices you have made, the pattern your will has carved into the world. Judgment is real. It is not arbitrary. It follows the logic of creation itself.',
        },
        {
          kind: 'christ',
          id: 'rom2-christ-goodness',
          title: 'Christ Connection — The Goodness Incarnate',
          html:
            'Christ is the embodiment of God&apos;s goodness. Peter calls His patience a gift: "The Lord is not slack concerning his promise… but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance" (2 Pet. 3:9). Every day Christ delays His return is one more day sinners are invited to turn. The goodness you encounter in Christ—patient, humble, unmerited—is the power that changes a heart.',
        },
        {
          kind: 'carry',
          html:
            'Has God been patient with you? Has He given you more chances than you deserved? Then His patience was not weakness. It was mercy. It was an invitation. The fact that you are still here, still able to turn, is His goodness at work. What part of your life is He inviting you to turn away from right now?',
        },
      ],
    },

    /* ─── Romans 2:7–10 — Render According to Works ────────────────────── */
    {
      ref: 'Romans 2:7–10',
      title: 'Render According to Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(7, t('To them who by patient continuance in well doing seek for glory and honour and immortality, eternal life:')),
            verse(8, t('But unto them that are contentious, and do not obey the truth, but obey unrighteousness, indignation and wrath,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-continuance',
          html:
            'Notice the word: <em>continuance.</em> Not a single moment of goodness. Not a public performance. But a patient, consistent pattern of turning toward God. The life that seeks Him in small ways, day after day, without fanfare. That life receives eternal life. But the life that hardens against truth, that chooses the comfortable lie instead, that life receives wrath—not because God is angry, but because you have stepped out of step with Him.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(9, t('Tribulation and anguish, upon every soul of man that doeth evil, of the Jew first, and also of the Gentile;')),
            verse(10, t('But glory, honour, and peace, to every man that worketh good, to the Jew first, and also to the Gentile:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-order',
          html:
            'To the Jew first, then the Gentile. Paul repeats this order twice. Not because Jews are more valuable—but because they received the law first. They had greater light. The principle stands: greater knowledge brings greater accountability. But also: the order is the same for both. Both receive judgment according to their deeds. Both receive mercy according to their turning. There is no hierarchy, only different measures of light.',
        },
        {
          kind: 'carry',
          html:
            'You know more than you did yesterday. You have been given more light, more opportunity to choose well. That means you are accountable for more. There is no escaping it. The gift of knowledge is also the weight of knowledge. What will you do with what you know today?',
        },
        {
          kind: 'reflection',
          id: 'rom2-works',
          prompt:
            'What consistent pattern have you been building through small choices? Is it a pattern of turning toward God or away from Him? What one choice could you make differently this week?',
        },
      ],
    },

    /* ─── Romans 2:11 — No Respect of Persons ─────────────────────────── */
    {
      ref: 'Romans 2:11',
      title: 'No Respect of Persons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(11, t('For there is '), hy('no respect of persons with God', 'rom2-aprosopo'), t('.')),
          ],
        },
        {
          kind: 'greek',
          id: 'rom2-aprosopo',
          title: 'Aprosopolempto — &ldquo;No Respect of Persons&rdquo;',
          script: 'ἀπροσωπόλημπτος',
          translit: '<strong>aprosopolempto</strong> · impartial; showing no favoritism',
          description:
            'The word literally means &ldquo;not receiving the face.&rdquo; God does not judge you by your face—your appearance, your status, your membership in a tribe. He looks at the heart and the deeds. The powerful and the weak stand on equal ground. The insider and the outsider receive the same judgment. God sees what is truly there.',
        },
        {
          kind: 'commentary',
          id: 'rom2-aprosopo-thought',
          html:
            'Being born into Israel does not shield you. Claiming knowledge of the law does not shield you. Being circumcised does not shield you. These were meant to be signs of belonging to God. But belonging to God is not about the sign. It is about the will. It is about whose side you are on.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide behind your family&apos;s faith. You cannot lean on your church membership. You cannot shelter in your denomination. God does not accept the face—the persona, the reputation, the appearance. He accepts the heart. That is terrifying and freeing all at once.',
        },
        {
          kind: 'reflection',
          id: 'rom2-persons',
          prompt:
            'What group or status do you rely on to make yourself acceptable to God? What would change if you knew God saw your heart instead?',
        },
      ],
    },

    /* ─── Romans 2:12–16 — Hearers and Doers ───────────────────────────── */
    {
      ref: 'Romans 2:12–16',
      title: 'Hearing Is Not Doing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(12, t('For as many as have sinned without law shall also perish without law: and as many as have sinned in the law shall be judged by the law;')),
            verse(13, t('(For not the hearers of the law are just before God, but the '), hy('doers of the law', 'rom2-doers'), t(' shall be justified.)')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-doers',
          html:
            'Hearing the law does something in you. It convicts. It shows you the standard. But hearing is not obedience. Knowing what God requires is not the same as doing it. The law was never meant to be a spectator sport. It is not doctrine to admire. It is a way to live.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(14, t('For when the Gentiles, which have not the law, do by nature the things contained in the law, these, having not the law, are a law unto themselves:')),
            verse(15, t('Which shew the work of the law written in their hearts, their conscience also bearing witness, and their thoughts the mean while '), hy('accusing or else excusing one another', 'rom2-conscience'), t(')')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-conscience',
          html:
            'Paul makes a radical claim: a Gentile who has never read Scripture, who has never heard the law of God, can still do the things of the law. Why? Because the law is written on the human heart itself. Your conscience is not a voice outside you. It is the echo of God&apos;s law written into your nature. You know—in the core of your being—what goodness looks like.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(16, t('In the day when God shall judge the secrets of men by '), hp('Jesus Christ', 'rom2-christ-judge'), t(' according to my gospel.')),
          ],
        },
        {
          kind: 'christ',
          id: 'rom2-christ-judge',
          title: 'Christ Connection — Christ the Final Judge',
          html:
            'The judgment of God is rendered by Jesus Christ. This is the standard. "And hath given him authority to execute judgment also, because he is the Son of man" (John 5:27). In Acts 17:31, Paul declares: "He hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained." Christ is not only the one who receives sinners. He is also the one before whom all secrets are laid bare. He judges not to condemn but to reconcile, not to banish but to restore. In Him, judgment becomes mercy for those who turn.',
        },
        {
          kind: 'carry',
          html:
            'You know, in your conscience, when you are doing what is right. You know when you are avoiding a harder truth. You know when you are hiding. The law is not external. It is written in you. And when you stand before Jesus, your own conscience will either vindicate you or condemn you. What will it say?',
        },
        {
          kind: 'reflection',
          id: 'rom2-conscience-reflect',
          prompt:
            'What is your conscience telling you right now about something in your life? Are you listening to it or running from it?',
        },
      ],
    },

    /* ─── Romans 2:17–24 — Thou That Teachest Another ──────────────────── */
    {
      ref: 'Romans 2:17–24',
      title: 'Thou Therefore Which Teachest Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(17, t('Behold, thou art called a Jew, and restest in the law, and makest thy boast of God,')),
            verse(18, t('And knowest his will, and approvest the things that are more excellent, being instructed out of the law;')),
            verse(19, t('And art confident that thou thyself art a guide of the blind, a light of them which are in darkness,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-confident',
          html:
            'Paul is describing someone—perhaps a religious teacher—who possesses the law and knows God&apos;s will. This person is confident. They speak with authority. They have appointed themselves a guide to others. They know what is right. The picture is drawn with affection but also with irony. Paul is about to show them a mirror.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(20, t('An instructor of the foolish, a teacher of babes, which hast the form of knowledge and of the truth in the law;')),
            verse(21, t('Thou therefore which '), hy('teachest another, teachest thou not thyself', 'rom2-self-teach'), t('? thou that preachest a man should not steal, dost thou steal?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-self-teach',
          html:
            'The knife cuts deep. You teach others not to steal—and you steal. You teach others not to commit adultery—and you do. You teach others not to rob temples—and you rob temples. The gap between what you preach and what you do is not hidden. It is visible to everyone. You are a hypocrite in the original sense: an actor. You are playing a part.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(22, t('Thou that sayest a man should not commit adultery, dost thou commit adultery? thou that abhorrest idols, dost thou commit sacrilege?')),
            verse(23, t('Thou that makest thy boast of the law, through breaking the law dishonourest thou God?')),
            verse(24, t('For the name of God is '), hy('blasphemed among the Gentiles through you', 'rom2-blaspheme'), t(', as it is written.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-blaspheme',
          html:
            'Your hypocrisy is not a private matter. Your failure to live what you teach has a consequence: the name of God is blasphemed. People who are outside the faith look at you and conclude that your God is not trustworthy, because you—His supposed representative—are not trustworthy. Your life is a sermon. What are you preaching?',
        },
        {
          kind: 'carry',
          html:
            'Are you confident in what is right? Then live it. Do not demand of others what you do not demand of yourself. Do not preach what you do not practice. The world is not fooled by the gap between what you say and what you do. And God&apos;s name is at stake in it.',
        },
        {
          kind: 'reflection',
          id: 'rom2-teach-self',
          prompt:
            'What truth do you preach or believe strongly? Is your life a living proof of it, or are you preaching what you do not practice?',
        },
      ],
    },

    /* ─── Romans 2:25–29 — Circumcision of the Heart ────────────────────── */
    {
      ref: 'Romans 2:25–29',
      title: 'Circumcision of the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(25, t('For circumcision verily profiteth, if thou keep the law: but if thou be a breaker of the law, thy circumcision is made uncircumcision.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-circumcision',
          html:
            'Circumcision was the sign of the covenant, the mark of belonging to God&apos;s people. But a mark without obedience becomes worthless. What does it mean to be marked as God&apos;s if your heart is not God&apos;s? The law is not mere information. It is a mirror of God&apos;s character. The mark means nothing if the heart does not correspond to the law.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(26, t('Therefore if the uncircumcision keep the righteousness of the law, shall not his uncircumcision be counted for circumcision?')),
            verse(27, t('And shall not uncircumcision which is by nature, if it fulfil the law, judge thee, who by the letter and circumcision dost transgress the law?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-obey-law',
          html:
            'Here is the reversal: the outsider—the one without the mark, without the law, without the covenant—if he keeps the righteousness of the law, he will judge you who have the mark but break the law. His obedience outweighs your ceremony. His heart outweighs your sign.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(28, t('For he is not a Jew which is one outwardly; neither is that circumcision, which is outward in the flesh:')),
            verse(29, t('But he is a Jew which is one '), hy('inwardly', 'rom2-inwardly'), t('; and circumcision is that of the heart, '), hg('in the spirit, and not in the letter', 'rom2-spirit'), t('; whose praise is not of men, but of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-inwardly',
          html:
            'What makes you truly part of God&apos;s people is not external. It is not the mark on your body. It is the orientation of your heart. Being a true child of God means your whole inmost self is turned toward Him.',
        },
        {
          kind: 'commentary',
          id: 'rom2-spirit',
          html:
            '&ldquo;Circumcision is that of the heart, in the spirit, and not in the letter.&rdquo; The law is written on stone, written in letters. But God&apos;s true covenant is written on the heart itself. This is not written law that must be learned and memorized. This is the Spirit of God Himself inscribing the law upon the inmost being. When the law is written on your heart, the barrier between what God requires and what you desire is removed.',
        },
        {
          kind: 'christ',
          id: 'rom2-christ-covenant',
          title: 'Christ Connection — The Spirit Circumcises the Heart',
          html:
            'Christ is the one who performs the circumcision of the heart. He does not abolish the law. He fulfills it and internalizes it. Colossians 2:11 says: "In whom also ye are circumcised with the circumcision made without hands, in putting off the body of the sins of the flesh by the circumcision of Christ." In Him, Jeremiah&apos;s promise is fulfilled: "I will put my law in their inward parts, and write it in their hearts" (Jer. 31:33). Obedience becomes not a burden from outside but an overflow from within.',
        },
        {
          kind: 'carry',
          html:
            'Do you rely on external marks of faith? A church membership, a prayer said correctly, a rule followed, a ritual observed? These are not wrong. But they are nothing without the circumcision of the heart. Ask yourself: Is my faith an external conformity or an inward transformation? Is my obedience from habit and fear or from love and alignment with God?',
        },
        {
          kind: 'reflection',
          id: 'rom2-heart',
          prompt:
            'Where are you tempted to substitute external obedience or external marks for genuine inward transformation? What would it take to move from doing the right thing out of duty to loving the right thing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Thou that judgest doest the same things. Goodness of God leadeth thee to repentance. God will render to every man according to his deeds. There is no respect of persons with God. Circumcision is that of the heart, in the spirit, and not in the letter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 2 · Study Guide',
  },

  hasHebrew: false,
};
