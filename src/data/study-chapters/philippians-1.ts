import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 1 — Living Is Christ; Dying Is Gain
 *
 * "For to me to live is Christ, and to die is gain." Philippians is written
 * from prison. Yet it is perhaps the most joyful of Paul&apos;s letters. He
 * has found a perspective that renders his circumstances almost irrelevant.
 * Christ is so central that whether he lives or dies matters less than the
 * fact of Christ. This is not escapism. It is the deepest realism.
 */
export const PHILIPPIANS_1: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 1,

  intros: [
    'Paul writes to the Philippians from prison in Rome, awaiting trial. The charge is uncertain. Death is possible. Yet he opens with joy: "I rejoice, yea, and will rejoice." This is not denial. This is perspective. Persecution and imprisonment cannot touch what matters most.',
    'Philippians 1 reveals that Paul&apos;s chief concern is not his own safety or comfort. It is the advance of the gospel. Whether he lives or dies, whether he is released or condemned, the gospel moves forward. And for a believer, this knowledge—that Christ is greater than circumstance—is the foundation of indestructible joy.',
  ],

  bottomShare: {
    label: 'Share Philippians 1',
    quote:
      'To live is Christ, and to die is gain. Paul finds joy in prison because his life is centered on Christ. Whether circumstances favor him or oppose him, Christ remains supreme.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 1 · Study Guide',
  },

  sections: [
    /* ─── Philippians 1:1–11 — Joy and Partnership in the Gospel ───────────── */
    {
      ref: 'Philippians 1:1–11',
      title: 'Rejoicing with Thanksgiving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(3, 'I thank my God upon every remembrance of you,'),
            {
              number: 4,
              spans: [
                t('Always in every prayer of mine for you all making request with '),
                hp('joy', 'p1-joy'),
                t(','),
              ],
            },
            plain(6, 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:'),
            {
              number: 7,
              spans: [
                t('Even as it is meet for me to think this of you all, because I have you in my '),
                hg('heart', 'p1-heart'),
                t('; inasmuch as both in my bonds, and in the defence and confirmation of the gospel, ye all are partakers of my grace.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And this I pray, that your '),
                hy('love may abound yet more and more', 'p1-abound'),
                t(' in knowledge and in all judgment;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-joy',
          html:
            'Paul thanks God for the Philippians "with joy." This is not happiness conditioned on pleasant circumstances. It is deep gladness rooted in gratitude. The Philippian church has been faithful, and their faithfulness brings joy to Paul&apos;s heart.',
        },
        {
          kind: 'commentary',
          id: 'p1-heart',
          html:
            '"Ye all are partakers of my grace." Paul does not see the Philippians as distant, abstract recipients of his ministry. They are in his heart. They share his burden, his calling, his hope. This is intimate partnership.',
        },
        {
          kind: 'commentary',
          id: 'p1-abound',
          html:
            '"Your love may abound yet more and more in knowledge and in all judgment." Paul does not ask for emotional effusiveness. He asks that love be paired with knowledge and discernment. Growing love requires growing understanding.',
        },
        {
          kind: 'greek',
          id: 'p1-chara',
          title: 'Chara — "Joy"',
          script: 'χαρά',
          translit: '<strong>Chara</strong> · joy; gladness; delight; rejoicing',
          description:
            'Joy in Scripture is not mere happiness. It is a deep gladness that persists even in hardship. It comes from confidence in God, from gratitude, from the knowledge that ultimately all is well.',
        },
        {
          kind: 'christ',
          id: 'p1-christ-work',
          title: 'Christ Connection — The Perfecter of the Good Work',
          html:
            'God has begun a good work in believers, and God will complete it. This confidence is rooted in Christ, who is the one through whom all things are completed (Colossians 1:16–20). The work begun at conversion will be perfected at the resurrection.',
        },
        {
          kind: 'carry',
          html:
            'You are in Paul&apos;s heart. Not as an abstract member of a congregation, but as a genuine partner in the gospel. Paul can rejoice in your presence and in his memory of you, even from a prison cell. This tells you something: the connection between believers is real, it is deep, and it transcends circumstance.',
        },
        {
          kind: 'reflection',
          id: 'p1-joy-reflect',
          prompt: 'Paul rejoices with joy from prison. What circumstances are you facing? Can you find joy in them if Christ remains your center?',
        },
      ],
    },

    /* ─── Philippians 1:12–30 — To Live Is Christ; To Die Is Gain ───────────── */
    {
      ref: 'Philippians 1:12–30',
      title: 'Christ Central; Death Defeated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'But I would ye should understand, brethren, that the things which happened unto me have fallen out rather for the furtherance of the gospel;'),
            {
              number: 19,
              spans: [
                t('For I know that this shall turn to my salvation through your prayer, and the supply of the Spirit of Jesus Christ,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('For '),
                hp('to me to live is Christ, and to die is gain', 'p1-christ-gain'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For I am in a strait betwixt two, having a desire to depart, and to be with '),
                hg('Christ', 'p1-depart'),
                t('; which is far better:'),
              ],
            },
            plain(24, 'Nevertheless to abide in the flesh is more needful for you.'),
            {
              number: 25,
              spans: [
                t('And having this confidence, I know that I shall abide and continue with you all for your furtherance and joy of faith;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Only let your '),
                hy('conversation be as it becometh the gospel of Christ', 'p1-conversation'),
                t(': that whether I come and see you, or else be absent, I may hear of your affairs, that ye stand fast in one spirit, with one mind striving together for the faith of the gospel;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-christ-gain',
          html:
            '"For to me to live is Christ, and to die is gain." This is the pivot of the letter. Paul has so centered his life on Christ that his personal death is not a loss but a gain. To die is to be with Christ—and that is better. But to live is Christ—meaning his whole existence is about Christ&apos;s work.',
        },
        {
          kind: 'commentary',
          id: 'p1-depart',
          html:
            '"To depart, and to be with Christ; which is far better." Paul does not fear death. He understands it as a transition, not an annihilation. To be with Christ is his hope. Yet he stays, serving the Philippians, because their growth in faith matters more than his comfort.',
        },
        {
          kind: 'commentary',
          id: 'p1-conversation',
          html:
            '"Let your conversation be as it becometh the gospel of Christ." The Greek word means not just speech, but conduct, manner of life. Believers are to live in a way that is worthy of the gospel—that reflects the good news of Christ.',
        },
        {
          kind: 'greek',
          id: 'p1-kerdos',
          title: 'Kerdos — "Gain" or "Profit"',
          script: 'κέρδος',
          translit: '<strong>Kerdos</strong> · gain; profit; advantage; benefit',
          description:
            'Typically, gain means material profit or advantage. But Paul redefines it: the greatest gain is to be with Christ. Everything else—life, reputation, comfort—is relativized by this central truth.',
        },
        {
          kind: 'carry',
          html:
            'What would it mean for your life to be recentered so completely on Christ that death is not a loss but a gain? This is not morbidity. It is freedom. When Christ becomes so central that your comfort, your safety, your reputation matter less than His purpose, you become unstoppable.',
        },
        {
          kind: 'reflection',
          id: 'p1-live-reflect',
          prompt: 'To live is Christ. Does this describe your life? What would it look like to make Christ this central?',
        },
      ],
    },
  ],
};
