import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 1 — Gospel of God
 *
 * Paul opens his letter to Rome with the announcement of the gospel—the good
 * news that God&apos;s righteousness is revealed through faith, and that the just
 * shall live by faith. But before declaring salvation, Paul first exposes the
 * human condition: the wrath of God against all ungodliness as men suppress
 * the truth in unrighteousness.
 */
export const ROMANS_1: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 1,

  intros: [
    'Paul addresses the church at Rome with the full authority of an apostle called to preach the gospel to all nations. He begins not with commands or questions, but with the announcement of a gospel that is the power of God unto salvation. This gospel is not new—it has been promised through the prophets in the holy scriptures. Its substance is Christ, the Son of God, risen in power and declared with authority. To those who believe, this gospel comes not as threat but as good news.',
    'Yet Paul knows that before men can be saved, they must understand their condition. In Romans 1, he turns his gaze upon humanity as it stands before God without Christ. The light of God&apos;s nature is visible in creation itself. But men have chosen a different path. They have seen the invisible things of God—His eternal power and Godhead—and yet they have suppressed that truth, preferring darkness. The wrath of God is not random vengeance. It is the necessary consequence of rebellion against the Author of all life.',
  ],

  sections: [
    /* ─── Romans 1:1–7 — The Gospel of God ────────────────────────────── */
    {
      ref: 'Romans 1:1–7',
      title: 'The Gospel of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, a servant of Jesus Christ, called to be an apostle, separated unto the gospel of God,'),
            plain(2, 'Which he had promised afore by his prophets in the holy scriptures,'),
            plain(3, 'Concerning his Son Jesus Christ our Lord, which was made of the seed of David according to the flesh;'),
            plain(4, 'And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead:'),
            plain(16, 'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-apostle',
          html:
            'Paul identifies himself first as a servant—a doulos, one bound to Christ in complete dependence. His authority as an apostle does not make him master. It makes him an instrument. He was "separated unto the gospel"—called before the foundation of the world to announce the good news. The gospel itself is not novel doctrine. It has been promised from the beginning through the prophets. It is the fulfillment of scripture.',
        },
        {
          kind: 'greek',
          id: 'rom1-euangelion',
          title: 'Euangelion — Gospel',
          script: 'εὐαγγέλιον',
          translit: '<strong>Euangelion</strong> · good news; glad tidings; gospel',
          description:
            'The Greek word euangelion originally meant a reward for good news or the proclamation of victory. In the New Testament, it is the announcement of God&apos;s saving action through Christ—the good news that through His death and resurrection, God has overcome sin and opened the way to eternal life. This is not opinion. This is declaration of what God has done.',
        },
        {
          kind: 'commentary',
          id: 'rom1-son-power',
          html:
            '"Declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead." The resurrection is the proof and the proclamation. Before the cross, Jesus was subject to all the limitations of mortal flesh. In the resurrection, His divine nature is declared with unmistakable authority. He is revealed as who He truly is—the Son of God, eternal and holy, the one through whom all things hold together.',
        },
        {
          kind: 'christ',
          id: 'rom1-christ-resurrection',
          title: 'Christ Connection — Power Declared',
          html:
            'Jesus Christ is declared the Son of God through His resurrection. This is not a metaphorical exaltation or a change in status. It is the vindication of His person, the proof of His divinity, and the preview of what awaits all who believe in Him. In His rising, He opens the way for our rising.',
        },
        {
          kind: 'carry',
          html:
            'Paul says he is not ashamed of the gospel. In Rome, the seat of power and sophistication, such a declaration was countercultural. To preach a Jew who was executed, who rose on the third day—this seemed madness to the wise. Yet Paul insists: this gospel is the power of God unto salvation. Not the power of human wisdom or political strength, but the power of God. What holds you back from sharing this good news?',
        },
        {
          kind: 'reflection',
          id: 'rom1-power',
          prompt: 'What does it mean to you that God&apos;s power is revealed not through violence or dominion, but through the resurrection of a crucified man? Where do you see that power at work?',
        },
      ],
    },

    /* ─── Romans 1:16–23 — Wrath Revealed, Truth Suppressed ────────────── */
    {
      ref: 'Romans 1:16–23',
      title: 'The Wrath Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(18, 'For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness;'),
            plain(19, 'Because that which may be known of God is manifest in them; for God hath shewed it unto them.'),
            plain(20, 'For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse:'),
            plain(21, 'Because when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened.'),
            plain(25, 'Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-wrath',
          html:
            'God&apos;s wrath is not arbitrary anger. It is His righteous opposition to all that degrades and destroys His creation. It is revealed against ungodliness—irreverence toward God—and unrighteousness—the violation of justice toward neighbor. This wrath is not hidden in shadow. It is revealed openly, worked out in the consequences of sin itself. Those who refuse to honor God enter into a spiral of corruption.',
        },
        {
          kind: 'greek',
          id: 'rom1-orge',
          title: 'Orge — Wrath',
          script: 'ὀργή',
          translit: '<strong>Orge</strong> · wrath; anger; righteous indignation',
          description:
            'In Greek, orge is not blind rage but a deliberate response to wrongdoing. God&apos;s orge is aroused against all that opposes His justice and love. It is the inevitable consequence of rejecting the source of all good. God does not rage like a petulant despot. He opposes sin because sin destroys the creatures He loves.',
        },
        {
          kind: 'commentary',
          id: 'rom1-creation',
          html:
            'Paul insists that no one can claim ignorance. The invisible things of God—His eternal power and divine nature—are clearly visible in the creation itself. The heavens declare His glory. The order of nature testifies to His wisdom. All men everywhere have access to this revelation. Yet they suppress it. They hold the truth in unrighteousness, refusing to let the light guide them.',
        },
        {
          kind: 'christ',
          id: 'rom1-christ-light',
          title: 'Christ Connection — The Truth Made Known',
          html:
            'The wrath revealed against those who suppress truth finds its answer in Christ. He is the Light of the world, the truth incarnate. In His coming, God ceases to speak merely through creation and speaks directly through a human face, a human heart, a human voice. The One whom creation conceals, the incarnation declares.',
        },
        {
          kind: 'carry',
          html:
            'Paul says men became "vain in their imaginations." They began to think like creatures rather than in the presence of the Creator. They forgot their smallness, their dependence, their status as made and not maker. This is the root of all sin—the refusal to acknowledge that we are not God, that we are dependent, that we are answerable. Where are you tempted to forget this?',
        },
        {
          kind: 'reflection',
          id: 'rom1-creator-creature',
          prompt: 'What does it mean to worship "the creature more than the Creator"? Where do you see this happening—and where are you tempted to fall into it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth. For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 1 · Study Guide',
  },

  hasHebrew: false,
};
