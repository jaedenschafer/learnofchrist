import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 14 — Tongues and Prophecy
 *
 * Paul continues teaching about spiritual gifts, distinguishing between tongues
 * and prophecy. While both are valid gifts, prophecy is greater because it builds
 * up the church. Tongues, without interpretation, edify only the speaker. Paul
 * establishes a principle: gifts are meant to serve the body, not to elevate
 * the individual.
 */
export const FIRST_CORINTHIANS_14: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 14,

  intros: [
    'The Corinthians are enamored with speaking in tongues. It is ecstatic, immediate, powerful. But Paul gently redirects them. Prophecy—the speaking forth of God&apos;s word in intelligible language—is greater because it serves the body. A tongue without interpretation is like music without words. It may move the heart, but it does not instruct the mind or edify the community.',
    'Paul does not forbid tongues. He affirms them as a gift from the Spirit. But he insists on order and on the primacy of prophecy. His concern is not to limit the Spirit, but to ensure that the church&apos;s gatherings are comprehensible, edifying, and marked by good order rather than chaos.',
  ],

  sections: [
    {
      ref: '1 Corinthians 14:1–19',
      title: 'Prophecy Greater Than Tongues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Follow after charity, and desire spiritual gifts, but rather that ye may prophesy.'),
            plain(3, 'But he that prophesieth speaketh unto men to edification, and exhortation, and comfort.'),
            plain(4, 'He that speaketh in an unknown tongue edifieth himself; but he that prophesieth edifieth the church.'),
            plain(5, 'I would that ye all spake with tongues, but rather that ye prophesied: for greater is he that prophesieth than he that speaketh with tongues, except he interpret, that the church may receive edifying.'),
            plain(15, 'What is it then? I will pray with the spirit, and I will pray with the understanding also: I will sing with the spirit, and I will sing with the understanding also.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-1-desire',
          html:
            'Paul is not forbidding the desire for spiritual gifts. Rather, he redirects it: seek prophecy above all. Prophecy is the gift that edifies others. A tongue, without interpretation, edifies only the speaker. This is a key distinction: gifts are for the body, not the self.',
        },
        {
          kind: 'greek',
          id: 'cor14-1-propheteia',
          title: 'Propheteia — Prophecy',
          script: 'προφητεία',
          translit: '<strong>Propheteia</strong> · prophecy; speaking God&apos;s word; forth-telling',
          description:
            'Propheteia is not merely foretelling the future. It is speaking God&apos;s word to the present situation—words of edification, exhortation, and comfort. It requires both divine enablement and rational intelligibility.',
        },
        {
          kind: 'commentary',
          id: 'cor14-1-understanding',
          html:
            'Paul concludes by emphasizing the need for understanding: &quot;I will pray with the spirit, and I will pray with the understanding also.&quot; Even worship and prayer must engage the whole person—both spirit and mind. Ecstasy without understanding can drift into confusion or deception.',
        },
        {
          kind: 'christ',
          id: 'cor14-1-christ-prophet',
          title: 'Christ Connection — Christ the True Prophet',
          html:
            'Christ is the ultimate prophet—He speaks God&apos;s word with perfect clarity and with perfect purpose. His words edify, exhort, and comfort those who hear. Christian prophecy is merely a faint echo of Christ&apos;s prophetic voice.',
        },
        {
          kind: 'carry',
          html:
            'Whatever spiritual experience you have, test it by whether it edifies others. Does it build up the body? Does it bring clarity about God&apos;s will? Does it lead others closer to Christ? If not, something is amiss. Seek gifts that serve the community.',
        },
        {
          kind: 'reflection',
          id: 'cor14-1-edify',
          prompt: 'What spiritual experiences have you had? Do they edify you alone, or do they build up the body? What would it look like to seek gifts that serve others?',
        },
      ],
    },

    {
      ref: '1 Corinthians 14:26–40',
      title: 'Order in the Church',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(26, 'How is it then, brethren? when ye come together, every one of you hath a psalm, hath a doctrine, hath a tongue, hath a revelation, hath an interpretation. Let all things be done unto edifying.'),
            plain(29, 'Let the prophets speak two or three, and let the other judge.'),
            plain(32, 'And the spirits of the prophets are subject to the prophets.'),
            plain(33, 'For God is not the author of confusion, but of peace, as in all churches of the saints.'),
            plain(40, 'Let all things be done decently and in order.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-2-order',
          html:
            'The Corinthian gatherings were chaotic—everyone speaking at once, everyone wanting to prophesy or speak in tongues. Paul establishes simple rules: two or three prophets speak; others judge. All things are to be done for edification. The underlying principle: God is not the author of confusion but of peace.',
        },
        {
          kind: 'greek',
          id: 'cor14-2-hype',
          title: 'Hype — Subjection',
          script: 'ὑποτάσσω',
          translit: '<strong>Hype</strong> · subjection; subordination; being subject to',
          description:
            'Paul makes the striking claim: &quot;The spirits of the prophets are subject to the prophets.&quot; Even the Spirit-enabled prophet can control himself, can choose when to speak and when to be silent. The gift does not override the person&apos;s own will.',
        },
        {
          kind: 'commentary',
          id: 'cor14-2-order-peace',
          html:
            '&quot;God is not the author of confusion, but of peace.&quot; This verse applies to church order, but it applies to all Christian life. Wherever God is working, there is order, peace, clarity. Confusion and chaos should signal that something other than God&apos;s Spirit is at work.',
        },
        {
          kind: 'christ',
          id: 'cor14-2-christ-peace',
          title: 'Christ Connection — Christ Is Our Peace',
          html:
            'Christ is our peace—not merely inner tranquility, but the reordering of chaos into cosmos. Where Christ reigns, there is order. Where the Spirit works, there is clarity and peace.',
        },
        {
          kind: 'carry',
          html:
            'Let all that you do in the church be done decently and in order. This is not to quench the Spirit. This is to give the Spirit room to work. Chaos is not the sign of the Spirit&apos;s presence. Order, clarity, peace, and the building up of the body are.',
        },
        {
          kind: 'reflection',
          id: 'cor14-2-decently',
          prompt: 'Where in your church community is there confusion rather than order? How can you contribute to the restoration of peace and clarity?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let all things be done unto edifying. For God is not the author of confusion, but of peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 14 · Study Guide',
  },

  hasHebrew: false,
};
