import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 16 — Greetings; Closing Benediction
 *
 * Paul commends Phebe, the deacon of the church at Cenchrea. Greets the
 * churches. Warns against those who cause divisions. "The God of peace shall
 * bruise Satan under your feet shortly. The grace of our Lord Jesus Christ
 * be with you. Amen."
 */
export const ROMANS_16: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 16,

  intros: [
    'Paul closes his great letter with greetings, commendations, and final warnings. Phebe, a deacon of the church at Cenchrea, carries this letter. Paul urges the Roman church to receive her and help her however she needs. He greets the faithful workers—Priscilla and Aquila, Epenetus, Andronicus and Junia, and many others. These are not abstract names. They are the living body of Christ, known by Paul, serving in various cities.',
    'The letter concludes with a warning against those who cause divisions through contrary doctrine. They use smooth words to deceive the innocent. Then Paul offers the final word: grace. The grace of Jesus Christ will be with them, will sustain them, will give them victory. Satan will be crushed under their feet—not through their power but through God&apos;s.',
  ],

  sections: [
    /* ─── Romans 16:1–16 — Phebe, Greetings, and Commendations ──────────── */
    {
      ref: 'Romans 16:1–16',
      title: 'The Body of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'I commend unto you Phebe our sister, which is a servant of the church which is at Cenchrea:'),
            plain(3, 'Greet Priscilla and Aquila my helpers in Christ Jesus:'),
            plain(6, 'Greet Mary, who bestowed much labour on us.'),
            plain(12, 'Salute Tryphena and Tryphosa, who labour in the Lord. Salute the beloved Persis, which laboured much in the Lord.'),
            plain(13, 'Salute Rufus chosen in the Lord, and his mother and mine.'),
            plain(15, 'Salute Philologus, and Julia, Nereus, and his sister, and Olympas, and all the saints which are with them.'),
            plain(16, 'Salute one another with an holy kiss. The churches of Christ salute you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-phebe',
          html:
            'Paul commends Phebe as a deacon and a faithful worker of the church. In the early church, deacons were servants who cared for practical needs. Phebe served her church with distinction and is now being sent on business. Paul asks the Roman church to receive and assist her.',
        },
        {
          kind: 'greek',
          id: 'rom16-diakonos',
          title: 'Diakonos — Deacon/Servant',
          script: 'διάκονος',
          translit: '<strong>Diakonos</strong> · deacon; servant; minister',
          description:
            'A diakonos is one who serves, especially those in need. In the early church, deacons cared for widows, the poor, and the sick. Phebe held an honored position of service.',
        },
        {
          kind: 'commentary',
          id: 'rom16-priscilla-aquila',
          html:
            'Priscilla and Aquila are Paul&apos;s helpers. They have risked their own necks for Paul&apos;s life. They are teachers—Apollos learned from them. They are the pattern of faithful partnership in the gospel, serving not in prominence but in genuine labor.',
        },
        {
          kind: 'commentary',
          id: 'rom16-many-workers',
          html:
            'Paul greets many by name: Mary, Tryphena, Tryphosa, Persis, Andronicus, Junia, and others. Some are slaves (Rufus is noted as "chosen in the Lord"). Some are women. Some are prominent, some obscure. All are workers. All are beloved. The body of Christ includes the celebrated and the forgotten.',
        },
        {
          kind: 'christ',
          id: 'rom16-christ-body',
          title: 'Christ Connection — The Living Body',
          html:
            'These greetings are not mere courtesy. They reveal that Christ&apos;s body is living, working, made up of real people—men and women, slaves and free, known and unknown. Each labors according to their calling. Each is precious.',
        },
        {
          kind: 'carry',
          html:
            'Do you see yourself in Paul&apos;s greetings? Are you one of the workers, one of the beloved, one of the faithful? The gospel is not an abstract system. It is the communion of saints, the fellowship of workers, the kingdom made visible in the service of ordinary people. You belong to this community.',
        },
        {
          kind: 'reflection',
          id: 'rom16-community',
          prompt: 'Who in your church community are the hidden workers—those who serve faithfully but receive little recognition? How might you honor them as Paul does here?',
        },
      ],
    },

    /* ─── Romans 16:17–27 — Warnings and Benediction ───────────────────────── */
    {
      ref: 'Romans 16:17–27',
      title: 'Guard and Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(17, 'Now I beseech you, brethren, mark them which cause divisions and offences contrary to the doctrine which ye have learned; and avoid them.'),
            plain(18, 'For they that are such serve not our Lord Jesus Christ, but their own belly; and by good words and fair speeches deceive the hearts of the simple.'),
            plain(25, 'Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began,'),
            plain(26, 'But now is made manifest, and by the scriptures of the prophets, according to the commandment of the everlasting God, made known to all nations for the obedience of faith:'),
            plain(27, 'To God only wise, be glory through Jesus Christ for ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-divisions',
          html:
            'Paul warns the church to mark and avoid those who cause divisions. These are not merely erring believers. They are those who serve their own appetites while using fair words to deceive. The warning is pastoral: guard yourselves against those who would seduce you from the truth.',
        },
        {
          kind: 'greek',
          id: 'rom16-schisma',
          title: 'Schisma — Division',
          script: 'σχίσμα',
          translit: '<strong>Schisma</strong> · division; breach; split; schism',
          description:
            'A schisma is not a disagreement over disputable matters. It is a deliberate attempt to tear apart the fabric of the church, driven by personal ambition and desire.',
        },
        {
          kind: 'commentary',
          id: 'rom16-mystery-revealed',
          html:
            'Paul closes by returning to the central theme: the mystery revealed. The gospel, which was hidden since the world began, is now made known. Christ is that mystery. His death and resurrection, His salvation for all nations—this was hidden, and now it is revealed, to be believed and obeyed by all peoples.',
        },
        {
          kind: 'greek',
          id: 'rom16-mysterion-apokalupto',
          title: 'Mysterion — Mystery Revealed',
          script: 'μυστήριον ἀποκαλύπτω',
          translit: 'The mystery is apokalyptō (revealed)',
          description:
            'The mystery is not left hidden. It is apokalyptō—uncovered, made visible, revealed for belief. God&apos;s plan for salvation through Christ is not reserved for the few. It is made known to all nations, calling all to the obedience of faith.',
        },
        {
          kind: 'christ',
          id: 'rom16-christ-mystery',
          title: 'Christ Connection — The Mystery Incarnate',
          html:
            'Christ is the mystery. In Him, the promises are fulfilled. In His death and resurrection, the plan of God is completed. The gospel is the proclamation of Christ—the revelation of what was hidden.',
        },
        {
          kind: 'carry',
          html:
            'You have been given knowledge of the mystery. The gospel has been revealed to you. This is not a secret to keep but a truth to proclaim, to live, to obey. Stand firm in the doctrine you have learned. Avoid those who would lead you astray. Trust in God who is able to establish you.',
        },
        {
          kind: 'reflection',
          id: 'rom16-mystery-obedience',
          prompt: 'What does it mean to you that the mystery—God&apos;s plan of salvation in Christ—has been revealed? How is the obedience of faith your response to this revelation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began, but now is made manifest. To God only wise, be glory through Jesus Christ for ever. Amen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 16 · Study Guide',
  },

  hasHebrew: false,
};
