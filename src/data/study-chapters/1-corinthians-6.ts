import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 6 — Your Body Is for the Lord
 *
 * Paul addresses two issues: believers suing one another in secular courts, and
 * the sexual immorality of visiting prostitutes. Both misunderstand the nature
 * of the body. The body is not incidental to faith. It is the temple of the Holy
 * Spirit, purchased with a price. How we use our bodies matters eternally.
 */
export const FIRST_CORINTHIANS_6: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 6,

  intros: [
    'The Corinthian church reveals a troubling disconnect: they can speak in tongues and prophesy, yet they take one another to pagan courts to settle disputes. They can boast of spiritual gifts, yet they visit prostitutes, treating their bodies as instruments of sin. Paul cuts through the pretense. You cannot claim to belong to Christ while disregarding what the body is and what it is for.',
    'The radical claim underlying this chapter is that the body matters. In Greek philosophy, the body was considered a prison for the soul, essentially neutral or even hostile to spiritual growth. Paul reverses this. The body is the dwelling place of the Holy Spirit, purchased by the blood of Christ. Your body is not your own. It belongs to God. What you do with it matters eternally.',
  ],

  sections: [
    {
      ref: '1 Corinthians 6:1–8',
      title: 'Lawsuits Among Believers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Dare any of you, having a matter against another, go to law before the unjust, and not before the saints?'),
            plain(2, 'Do ye not know that the saints shall judge the world? and if the world shall be judged by you, are ye not competent to judge the smallest matters?'),
            plain(4, 'If then ye have judgments of things pertaining to this life, set them to judge who are least esteemed in the church.'),
            plain(6, 'But brother goeth to law with brother, and that before the unbelievers.'),
            plain(7, 'Now therefore there is utterly a fault among you, because ye go to law one with another. Why do ye not rather take wrong? why do ye not rather suffer yourselves to be defrauded?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-1-lawsuits',
          html:
            'Paul is astonished that believers bring lawsuits against each other before unbelieving judges. This dishonors the church before the watching world. More deeply, it shows a failure to understand the church&apos;s own nature and calling. The saints are meant to judge the world, not to submit to its judgment.',
        },
        {
          kind: 'greek',
          id: 'cor6-1-adikos',
          title: 'Adikos — Unjust',
          script: 'ἄδικος',
          translit: '<strong>Adikos</strong> · unjust; unrighteous; not aligned with God&apos;s justice',
          description:
            'An &quot;unjust&quot; judge is one who does not judge by God&apos;s standards. The pagan courts operated from a different framework entirely. For believers to submit their disputes to these courts was to accept a foreign standard of justice.',
        },
        {
          kind: 'commentary',
          id: 'cor6-1-suffering',
          html:
            'Paul suggests something radical: &quot;Why do ye not rather take wrong? why do ye not rather suffer yourselves to be defrauded?&quot; To be wronged, to suffer loss—these are not the worst outcomes. The worst outcome is to damage the church&apos;s witness by pursuing your own vindication at the expense of unity.',
        },
        {
          kind: 'christ',
          id: 'cor6-1-christ-judge',
          title: 'Christ Connection — Christ Suffered Wrong',
          html:
            'Christ was wronged, unjustly condemned, defrauded of His rights. Yet He entrusted His cause to the Father. Believers are called to a similar relinquishment—to trust God rather than fight for their own vindication.',
        },
        {
          kind: 'carry',
          html:
            'When wronged, your instinct is to fight, to prove yourself right, to seek justice. Paul calls you to a higher path: let the wrong go. Absorb the loss. Preserve the unity of the church. This is not weakness. This is strength—the strength of trust in God.',
        },
        {
          kind: 'reflection',
          id: 'cor6-1-suffering-wrong',
          prompt: 'When have you been wronged? What would it mean in that situation to &quot;take wrong&quot; for the sake of Christ?',
        },
      ],
    },

    {
      ref: '1 Corinthians 6:12–20',
      title: 'The Body and the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(12, 'All things are lawful unto me, but all things are not expedient: all things are lawful for me, but I will not be brought under the power of any.'),
            plain(13, 'Meats for the belly, and the belly for meats: but God shall destroy both it and them. Now the body is not for fornication, but for the Lord; and the Lord for the body.'),
            plain(15, 'Know ye not that your bodies are the members of Christ? shall I then take the members of Christ, and make them the members of an harlot? God forbid.'),
            plain(19, 'What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?'),
            plain(20, 'For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God&apos;s.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-2-temple',
          html:
            'Paul drives home an extraordinary truth: &quot;Your body is the temple of the Holy Ghost.&quot; The temple was the place where God&apos;s presence dwelled. That role now belongs to each believer&apos;s body. This is not metaphor. It is reality with enormous implications for how you live.',
        },
        {
          kind: 'greek',
          id: 'cor6-2-naos',
          title: 'Naos — Temple Sanctuary',
          script: 'ναός',
          translit: '<strong>Naos</strong> · temple; sanctuary; the innermost holy place',
          description:
            'The naos was the inner sanctuary of the temple, where God&apos;s presence was most concentrated. To say that your body is a naos is to claim the highest honor and the gravest responsibility.',
        },
        {
          kind: 'commentary',
          id: 'cor6-2-price',
          html:
            'Paul adds: &quot;Ye are bought with a price.&quot; Your body does not belong to you. You have been purchased. The price was Christ&apos;s blood. This ownership is absolute. You are not your own. You are His.',
        },
        {
          kind: 'christ',
          id: 'cor6-2-christ-body',
          title: 'Christ Connection — Members of Christ',
          html:
            'To join your body to a prostitute is to join &quot;the members of Christ&quot; to her. Your identity is bound up with Christ&apos;s. What you do with your body, you do in His presence and with His body. This is both privilege and responsibility.',
        },
        {
          kind: 'carry',
          html:
            'Every choice about your body is a choice about whose you are and what you stand for. To eat poorly, to abuse yourself through excess, to use your body for sexual sin—these are not neutral choices. They are desecrations of a temple. Your body is holy. Act accordingly.',
        },
        {
          kind: 'reflection',
          id: 'cor6-2-glorify-body',
          prompt: 'What does it mean to &quot;glorify God in your body&quot;? How might that change the way you think about physical health, sexuality, and the choices you make?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 6 · Study Guide',
  },

  hasHebrew: false,
};
