import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 1 — Faith, Love, Hope; You Turned to God from Idols
 *
 * "Remembering without ceasing your work of faith, and labour of love, and
 * patience of hope in our Lord Jesus Christ, in the sight of God and our Father."
 * Paul opens with gratitude for the Thessalonian church. They have believed.
 * They have turned from idols. They are waiting for the Son of God to come from
 * heaven. This is the shape of faith: from idolatry to the living God.
 */
export const FIRST_THESSALONIANS_1: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 1,

  estimatedMinutes: { 5: 5, 10: 9, 15: 11 },
  intros: [
    'Paul addresses a young church born in difficulty. He had been driven out of Thessalonica by opposition, yet the church remained, and grew. This opening chapter is Paul&apos;s thanksgiving for their steadfastness. They have faith. They have love. They have hope. And they have done something remarkable: they have turned to God from idols.',
    'The Thessalonians became believers in the midst of a pagan world. They rejected the gods of their ancestors. They rejected the spiritual comfort of idolatry. And they chose instead to wait for Jesus Christ—a figure they had never seen, in a kingdom that was not yet visible. This is the shape of conversion. Not an intellectual shift alone, but a complete reorientation: from false gods to the true God, from waiting for nothing to waiting for Him.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 1',
    quote:
      'Your faith, love, and hope are remembered. You turned to God from idols, serving the living and true God, waiting for His Son from heaven who will deliver us from the wrath to come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 1 · Study Guide',
  },

  sections: [
    /* ─── 1:1–2 — Greeting & Thanksgiving ────────────────────────────────── */
    {
      ref: '1 Thessalonians 1:1–2',
      title: 'The Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, and Silvanus, and Timotheus, unto the church of the '),
              hy('Thessalonians', '1t1-ekklesia'),
              t(' which is in God the Father and in the Lord Jesus Christ: Grace be unto you, and peace, from God our Father, and the Lord Jesus Christ.')
            ),
            verse(2, t('We give thanks to God always for you all, making mention of you in our prayers;')),
          ],
        },
        {
          kind: 'greek',
          id: '1t1-ekklesia',
          title: 'Ekklēsia — "Church"',
          script: 'ἐκκλησία',
          translit: '<strong>ekklēsia</strong> · the called-out assembly; those gathered by invitation',
          description:
            'The church is not a building. It is the assembly of people who have been called out from the world and gathered together in Christ. In Thessalonica, this meant former pagans, now standing together as one body.',
        },
        {
          kind: 'commentary',
          id: '1t1-greeting',
          html:
            'Paul begins as he always does: with grace and peace. Grace is God&apos;s unmerited favor. Peace is the result of reconciliation. Together they name the entire work of Christ—forgiveness and wholeness offered freely to those who were, by nature, His enemies.',
        },
        {
          kind: 'carry',
          html:
            'Notice what Paul does not say: he does not scold them for being young in the faith. He does not warn them. He does not command. His first word is thanksgiving. His first act is to remember them before God in prayer. When you meet a believer today—whether they are strong or struggling—what would change if your first move was to give thanks for them?',
        },
      ],
    },

    /* ─── 1:3–5 — The Christological Triad: Faith, Love, Hope ────────────── */
    {
      ref: '1 Thessalonians 1:3–5',
      title: 'Work, Labor, Patience—Faith, Love, Hope in Action',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('Remembering without ceasing your '),
              hp('work of faith, and labour of love, and patience of hope', '1t1-virtues'),
              t(' in our Lord Jesus Christ, in the sight of God and our Father;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1t1-virtues',
          html:
            'This verse names the three greatest virtues—faith, love, and hope—not as feelings, but as works. <em>Work of faith</em>: belief that produces action. <em>Labour of love</em>: love that costs you something. <em>Patience of hope</em>: the steady endurance that comes from knowing God&apos;s promise is real even when you cannot yet see it. These three are not separate; they are woven together in the life of every disciple.',
        },
        {
          kind: 'christ',
          id: '1t1-triad',
          title: 'Christ Connection — The Work of Every Disciple',
          html:
            'Paul writes to the Corinthians: "And now abideth faith, hope, charity, these three; but the greatest of these is charity" (1 Cor. 13:13). These are not the virtues of the spiritually exceptional. They are the baseline architecture of every life hidden in Christ. Your work—whatever you do—is meant to be rooted in faith. Your love—for family, for neighbor, for the stranger—is meant to cost you something. Your hope—in God&apos;s future, in Christ&apos;s return—is meant to make you patient when everything around you says to give up.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('Knowing, brethren beloved, your '),
              hg('election of God', '1t1-election'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1t1-election',
          html:
            'Paul grounds their faith not in their own strength, but in God&apos;s choice. "Your election of God"—you were chosen. Selected. Called. This is not flattery; it is the gospel. God loved you before you loved Him. He chose you before you chose Him. This is what makes faith work: knowing that your faith is a response to a love that got there first.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('For our gospel came not unto you in word only, but also in power, and in the Holy Ghost, and in much assurance; as ye know what manner of men we were among you for your sake.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1t1-power',
          html:
            'The gospel did not arrive as mere doctrine or philosophy. It came with power—the power to transform human lives, to break the grip of idolatry, to create community out of chaos. The Thessalonians did not believe in Christ because Paul was eloquent. They believed because they saw the Holy Spirit at work in their midst.',
        },
        {
          kind: 'carry',
          html:
            'You were chosen. Not because you were good enough or strong enough or worthy enough. Because God loved you before you loved Him. This is the foundation of faith: not your effort, but His prior choice. As you move through your day, let that sink in. Whatever you do today—your work, your love, your patience—is a response to a choosing that was made before time began.',
        },
        {
          kind: 'reflection',
          id: '1t1-faith-reflect',
          prompt:
            'Where is your faith working today? Where is your love costing you something? Where is hope asking you to be patient?',
        },
      ],
    },

    /* ─── 1:6–7 — Followers; Examples to All Who Believe ──────────────────── */
    {
      ref: '1 Thessalonians 1:6–7',
      title: 'Becoming an Example',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              6,
              t('And ye became '),
              hy('followers of us, and of the Lord', '1t1-mimetes'),
              t(', having received the word in much affliction, with joy of the Holy Ghost;')
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1t1-mimetes',
          title: 'Mimētēs — "Followers"',
          script: 'μιμητής',
          translit: '<strong>mimētēs</strong> · imitator; one who copies a pattern',
          description:
            'The Thessalonians imitated Paul&apos;s faith—and through Paul&apos;s example, they imitated Christ. We grow in faith not in isolation, but by watching and learning from those who walk ahead of us. And as you grow, you become an example for others behind you.',
        },
        {
          kind: 'commentary',
          id: '1t1-affliction',
          html:
            'Their conversion did not happen in comfort. They "received the word in much affliction." Opposition came quickly—from family, from neighbors, from the broader pagan community. Yet they received it with joy. This is extraordinary. Most of us would expect suffering to sour joy. But Paul says their joy was real, rooted not in ease but in the Holy Spirit.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              7,
              t('So that ye were '),
              hy('ensamples to all that believe', '1t1-typos'),
              t(' in Macedonia and Achaia.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1t1-typos',
          title: 'Typos — "Example"',
          script: 'τύπος',
          translit: '<strong>typos</strong> · a pattern; a model; an imprint',
          description:
            'The Thessalonians became a <em>typos</em>—a living pattern that other believers could look at and say, "That is what faith looks like." Faithfulness has a face. It has a story. The Thessalonians became that story for their region.',
        },
        {
          kind: 'carry',
          html:
            'Someone is watching how you live. Not to judge you, but to learn from you. When you choose joy in the midst of hard circumstances, someone sees it. When you keep showing up even when it costs you something, someone notices. You are a <em>typos</em>—a living pattern. Not because you are perfect, but because you are faithful. What pattern are you setting today?',
        },
        {
          kind: 'reflection',
          id: '1t1-example-reflect',
          prompt:
            'Whose faith do you imitate? And whose faith are you setting a pattern for?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul/i,
          matchArtist: /tissot/i,
          caption: '1 Thessalonians 1:6–7 · Following the Example',
        },
      ],
    },

    /* ─── 1:8–9 — The Gospel Sounding Out ────────────────────────────────── */
    {
      ref: '1 Thessalonians 1:8–9',
      title: 'The Word Spreading',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('For from you '),
              hy('sounded out the word of the Lord', '1t1-echeo'),
              t(' not only in Macedonia and Achaia, but also in every place your faith to God-ward is spread abroad; so that we need not to speak any thing.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1t1-echeo',
          title: 'Echēō — "Sounded Out"',
          script: 'ἐχέω',
          translit: '<strong>echēō</strong> · to echo; to resound; to reverberate',
          description:
            'The word of the Lord did not whisper from Thessalonica. It echoed. It resounded. What happened in one city became news across the region. The faith of the Thessalonians was not hidden; it was loud enough for everyone to hear.',
        },
        {
          kind: 'commentary',
          id: '1t1-need-not-speak',
          html:
            'Paul says, "We need not to speak any thing." What an extraordinary statement. Paul, the apostle, the missionary—he says their faith is doing the speaking for him. The most powerful evangelism is not argument or eloquence. It is a changed life, lived visibly, that echoes what God has done.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('For they themselves shew of us what manner of entering in we had unto you, and how ye '),
              hp('turned to God from idols to serve the living and true God', '1t1-turned'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1t1-turned',
          html:
            'This is the shape of conversion. Not gradual drift, but a turning. A reorientation. Away from idols—the false gods, the false securities, the false promises. Toward God—the living God, the true God, the God who is actually there. This turning had a visible effect. People saw it. People talked about it.',
        },
        {
          kind: 'carry',
          html:
            'Your faith does not belong to you alone. It echoes. Someone hears the way you talk about God. Someone sees how you respond when plans fall apart. Someone watches you choose the harder right over the easier wrong. And they hear, in your silence, what God has done. You don&apos;t need a sermon to evangelize. You need a life that has visibly turned from idolatry to the living God.',
        },
      ],
    },

    /* ─── 1:9–10 — Waiting for the Son ────────────────────────────────────── */
    {
      ref: '1 Thessalonians 1:9–10',
      title: 'Waiting for His Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('And to '),
              hy('wait for his Son from heaven', '1t1-anamenō'),
              t(', whom he raised from the dead, even Jesus, which '),
              hp('delivered us from the wrath to come', '1t1-wrath'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1t1-anamenō',
          title: 'Anamenō — "Wait For"',
          script: 'ἀναμένω',
          translit: '<strong>anamenō</strong> · to wait for; to expect; to anticipate',
          description:
            'The Thessalonians were not just Christians. They were waiters. They waited for Christ&apos;s return the way you wait for someone you love, knowing they promised to come back. This was not speculation about the future. It was the center of their hope.',
        },
        {
          kind: 'commentary',
          id: '1t1-raised',
          html:
            'Jesus was "raised from the dead." This is the fact on which everything else hangs. He died. He rose. Death could not hold Him. If death could not hold Christ, death cannot hold His promise. If Christ rose, He will return.',
        },
        {
          kind: 'commentary',
          id: '1t1-wrath',
          html:
            'Jesus "delivered us from the wrath to come." This is the heart of the gospel. God&apos;s wrath is His holy response to sin—not cruelty, but the inevitable consequence of rebellion meeting holiness. Christ took that wrath on Himself, bearing it in our place. For those who believe in Him, there is no wrath left. There is only grace.',
        },
        {
          kind: 'christ',
          id: '1t1-christ-deliverer',
          title: 'Christ Connection — Jesus as Deliverer',
          html:
            'Paul writes later: "For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ, who died for us, that, whether we wake or sleep, we should live together with him" (1 Thess. 5:9–10). Jesus is not just a teacher or a prophet. He is the Deliverer. He took the wrath that was meant for us. Romans spells this out: "For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men… But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Rom. 1:18; 5:8).',
        },
        {
          kind: 'carry',
          html:
            'The Thessalonians turned to God from idols for a reason: they had heard that a Man rose from the dead, that He was coming back, and that He had paid a price to deliver them from judgment. This is not theory. This is not moralism. This is the announcement that God Himself stepped into history to buy you back. You are waiting. Even if you do not know you are waiting. And what you are waiting for—the return of Christ, the redemption of all things—is what gives every small act of faith, love, and hope its meaning.',
        },
        {
          kind: 'reflection',
          id: '1t1-wait-reflect',
          prompt:
            'What would change in your faith today if you actually believed Christ is coming back? What would you stop doing? What would you start?',
        },
        {
          kind: 'artwork',
          matchTitle: /resurrection/i,
          caption: '1 Thessalonians 1:9–10 · The Return of Christ',
        },
      ],
    },

    /* ─── 1:1–10 — The Whole Chapter at a Glance ───────────────────────── */
    {
      ref: '1 Thessalonians 1 · Conversion: From Idols to Waiting',
      title: 'The Shape of Faith',
      blocks: [
        {
          kind: 'commentary',
          id: '1t1-summary',
          html:
            'A young church, newly born in a hostile environment, receives a letter. Paul does not scold. He does not warn first. He thanks. He names three virtues—faith, love, hope—not as spiritual abstractions, but as work, labor, and patient endurance. He grounds their conversion not in their strength but in God&apos;s choice. Their faith, lived visibly, echoes across their region. And at the center of everything is a single fact: they have turned from idols to the living God, and they are waiting for His Son to come from heaven.',
        },
        {
          kind: 'carry',
          html:
            'This is the shape of faith. Not a moment of belief and then stasis. A turning—away from false gods (security, status, approval, comfort) and toward the true God. A waiting—for Christ&apos;s return, for the redemption of all things, for the moment when every broken thing is made whole. And in between the turning and the waiting: work, labor, patience. You show up. You love at cost. You endure.',
        },
      ],
    },
  ],
};
