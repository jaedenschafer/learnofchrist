import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 10 — The Word of Faith
 *
 * "If thou shalt confess with thy mouth the Lord Jesus, and shalt believe
 * in thine heart that God hath raised him from the dead, thou shalt be saved."
 * Faith comes by hearing. How shall they believe without a preacher?
 */
export const ROMANS_10: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 10,

  intros: [
    'Paul turns from God&apos;s purpose to human response. The gospel is simple: confess Jesus as Lord, believe in His resurrection. That is the word of faith. But this faith must be proclaimed. It comes by hearing. How shall men hear without a preacher? How shall preachers go without being sent? The chain is unbroken: sent preacher, hearing word, faith awakened, salvation gained.',
    'Yet Israel has not obeyed. They have not rejected God&apos;s message. They have rejected God&apos;s messenger. They had zeal for God, but not according to knowledge. They sought to establish their own righteousness rather than submit to the righteousness of God. The problem is not with God&apos;s word. It is with the human will that refuses to hear.',
  ],

  sections: [
    /* ─── Romans 10:1–13 — Confess and Believe ───────────────────────────── */
    {
      ref: 'Romans 10:1–13',
      title: 'The Word of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(4, 'For Christ is the end of the law for righteousness to every one that believeth.'),
            plain(8, 'But what saith it? The word is nigh thee, even in thy mouth, and in thy heart: that is, the word of faith, which we preach;'),
            plain(9, 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.'),
            plain(10, 'For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.'),
            plain(13, 'For whosoever shall call upon the name of the Lord shall be saved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-end-law',
          html:
            '"Christ is the end of the law for righteousness to every one that believeth." The law was a teacher, leading to Christ. Now that Christ has come, the goal is reached. Righteousness no longer comes through obedience to the law but through faith in the One the law pointed to.',
        },
        {
          kind: 'greek',
          id: 'rom10-telos',
          title: 'Telos — End/Goal',
          script: 'τέλος',
          translit: '<strong>Telos</strong> · end; completion; goal; purpose',
          description:
            'Telos means the end toward which something is directed. Christ is the fulfillment, the completion, the goal of the law. To reach Christ is to reach what the law was always meant to lead to.',
        },
        {
          kind: 'commentary',
          id: 'rom10-heart-mouth',
          html:
            '"With the heart man believeth unto righteousness; and with the mouth confession is made unto salvation." Belief is not merely intellectual. It engages the whole person—the heart, the innermost will. And confession is not external hypocrisy. It is the outward expression of inward faith.',
        },
        {
          kind: 'greek',
          id: 'rom10-homologeo',
          title: 'Homologeo — Confess',
          script: 'ὁμολογέω',
          translit: '<strong>Homologeo</strong> · confess; agree; speak the same as',
          description:
            'Homologeo means to say the same thing as, to agree with. When you confess Jesus as Lord, you are saying the same thing God says about Him. You are aligning your mouth and heart with God&apos;s truth.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-resurrection',
          title: 'Christ Connection — Risen and Confessed',
          html:
            'The center of faith is the resurrection. It is not a metaphor. It is a fact. God raised Jesus from the dead. This is the claim upon which everything hangs. To believe it is to enter salvation.',
        },
        {
          kind: 'carry',
          html:
            'Belief is not a secret thing. It seeks expression. When you confess Jesus as Lord, you align yourself publicly with Him. This confession is not arbitrary. It is the natural overflow of what you truly believe in your heart. What would it mean to confess openly what you have come to believe?',
        },
        {
          kind: 'reflection',
          id: 'rom10-confess',
          prompt: 'What does it mean to confess Jesus as Lord with your mouth and in your heart? Where are you tempted to believe privately but refuse to confess publicly?',
        },
      ],
    },

    /* ─── Romans 10:14–21 — Faith Comes by Hearing ─────────────────────── */
    {
      ref: 'Romans 10:14–21',
      title: 'How Shall They Hear?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(14, 'How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?'),
            plain(15, 'And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!'),
            plain(17, 'So then faith cometh by hearing, and hearing by the word of God.'),
            plain(20, 'But Esaias is very bold, and saith, I was found of them that sought me not; I was made manifest unto them that asked not for me.'),
            plain(21, 'But to Israel he saith, All day long I have stretched forth my hands unto a disobedient and gainsaying people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-beautiful-feet',
          html:
            '"How beautiful are the feet of them that preach the gospel of peace." Even the physical act of a preacher coming becomes a sign of God&apos;s care. Someone has to go. Someone has to speak. The word must be proclaimed. Beauty lies in the willingness to carry the message.',
        },
        {
          kind: 'greek',
          id: 'rom10-keryx',
          title: 'Keryx — Preacher',
          script: 'κῆρυξ',
          translit: '<strong>Keryx</strong> · herald; preacher; one who announces',
          description:
            'A keryx is not a philosopher or a speculator. A keryx is a herald, one authorized to announce the king&apos;s proclamation. A preacher of the gospel is God&apos;s herald, announcing what God has done.',
        },
        {
          kind: 'commentary',
          id: 'rom10-faith-hearing',
          html:
            '"Faith cometh by hearing, and hearing by the word of God." Faith is not generated from within ourselves. It comes through the word spoken. To hear the gospel is to be placed in a position where faith becomes possible. God speaks, and His speaking creates the possibility of response.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-proclaimed',
          title: 'Christ Connection — The Word Preached',
          html:
            'Christ is known through preaching, through the proclamation of what God has done. He is not discovered by solitary speculation. He is revealed through the word of God spoken and heard.',
        },
        {
          kind: 'carry',
          html:
            'You cannot believe what you do not hear. Faith requires that someone has spoken. This speaks to the importance of sharing the gospel. But it also means you are not responsible for belief or unbelief. You are responsible for speaking faithfully. God&apos;s word will accomplish what He intends.',
        },
        {
          kind: 'reflection',
          id: 'rom10-speak',
          prompt: 'How has someone&apos;s preaching or testimony of Christ brought you to faith? And who is God calling you to speak to about the gospel?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. Faith cometh by hearing, and hearing by the word of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 10 · Study Guide',
  },

  hasHebrew: false,
};
