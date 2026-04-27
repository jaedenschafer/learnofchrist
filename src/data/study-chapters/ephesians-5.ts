import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 5 — Walk in Love; Christ&apos;s Love for the Church
 *
 * "Husbands, love your wives, even as Christ also loved the church, and gave
 * himself for it." Ephesians 5 extends Paul&apos;s practical ethics. Believers
 * are to walk in love, to live as "children of light," and in every
 * relationship—marriage, family, work—to reflect Christ&apos;s character. The
 * standard is not negotiable: Christ&apos;s self-giving love.
 */
export const EPHESIANS_5: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 5,

  intros: [
    'Ephesians 5 opens with a simple command: "Be followers of God, as dear children." And what is the content of following God? "Walk in love." All that follows—teaching about relationships, marriage, family—flows from this foundation: that believers are people who have learned to love as Christ has loved them.',
    'The chapter moves from general principles of love and light to specific relationships. Marriage is presented not as a legal contract, but as a covenant image of Christ&apos;s relationship with the church. Christ "gave himself for" the church, making her "not having spot, or wrinkle, or any such thing; but that she should be holy and without blemish." This is the measure by which all love is understood.',
  ],

  bottomShare: {
    label: 'Share Ephesians 5',
    quote:
      'Walk in love as Christ loved you. Husbands love your wives as Christ loved the church, giving himself for her. All relationships reflect Christ&apos;s self-giving love.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 5 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 5:1–20 — Be Imitators of God; Walk as Children of Light ── */
    {
      ref: 'Ephesians 5:1–20',
      title: 'Imitators of God; Children of Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Be ye therefore '),
                hp('followers of God, as dear children', 'e5-followers'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And '),
                hp('walk in love', 'e5-love'),
                t(', as Christ also loved us, and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.'),
              ],
            },
            plain(8, 'For ye were sometimes darkness: but now are ye light in the Lord: walk as children of light:'),
            {
              number: 9,
              spans: [
                t('(For the fruit of the Spirit is in all goodness and righteousness and '),
                hg('truth', 'e5-truth'),
                t(')'),
              ],
            },
            plain(10, 'Proving what is acceptable unto the Lord.'),
            plain(11, 'And have no fellowship with the unfruitful works of darkness, but rather reprove them.'),
            {
              number: 17,
              spans: [
                t('Wherefore be ye not unwise, but understanding what the '),
                hy('will of the Lord', 'e5-will'),
                t(' is.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-followers',
          html:
            '"Be ye therefore followers of God, as dear children." This is not imitation in the sense of fake mimicry. It is the imitation of children who are learning from their father. You are called to learn God&apos;s way by living in intimate relationship with Him.',
        },
        {
          kind: 'commentary',
          id: 'e5-love',
          html:
            '"Walk in love, as Christ also loved us, and hath given himself for us." This is the measure: Christ&apos;s self-giving love. Not sentimental affection. Not romantic love. But the willingness to lay down your life. This is the love believers are called to walk in.',
        },
        {
          kind: 'commentary',
          id: 'e5-truth',
          html:
            'The fruit of the Spirit includes "truth." Truth is not mere doctrinal accuracy. It is living in alignment with reality, with what is actually true. To walk in light is to live truthfully.',
        },
        {
          kind: 'commentary',
          id: 'e5-will',
          html:
            '"Understanding what the will of the Lord is." God&apos;s will is not cryptic or hidden from those who seek it. Paul suggests that understanding God&apos;s will is possible through prayer, reflection, and seeking wisdom in community.',
        },
        {
          kind: 'greek',
          id: 'e5-aletheia',
          title: 'Aletheia — "Truth"',
          script: 'ἀλήθεια',
          translit: '<strong>Aletheia</strong> · truth; reality; that which is unhidden; authenticity',
          description:
            'Greek "aletheia" is that which is unhidden, unveiled. To walk in truth is to live in the light—nothing hidden, everything open and authentic. This is the life of a believer whose love is genuine.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-light',
          title: 'Christ Connection — The Light of the World',
          html:
            'Jesus said, "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). When Paul tells believers to walk as children of light, he means to follow Christ, the source of light. To imitate God is to follow Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are called to imitate God as dear children imitate their father. Not perfectly, but genuinely. And the pattern is love—the self-giving love of Christ. This love is not feeling. It is commitment. It is showing up, laying down your preferences, giving yourself away. Where is Christ calling you to love like that?',
        },
        {
          kind: 'reflection',
          id: 'e5-light-reflect',
          prompt: 'You are a child of light, called to walk as Christ walked. What does that look like in your life today?',
        },
      ],
    },

    /* ─── Ephesians 5:21–33 — Christ and the Church; Marriage as Covenant ──── */
    {
      ref: 'Ephesians 5:21–33',
      title: 'The Marriage Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(21, 'Submitting yourselves one to another in the fear of God.'),
            {
              number: 25,
              spans: [
                t('Husbands, '),
                hp('love your wives, even as Christ also loved the church', 'e5-husbands'),
                t(', and gave himself for it;'),
              ],
            },
            {
              number: 26,
              spans: [
                t('That he might sanctify and cleanse it with the washing of water by the word,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('That he might present it to himself a glorious church, '),
                hg('not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish', 'e5-holy'),
                t('.'),
              ],
            },
            plain(28, 'So ought men to love their wives as their own bodies. He that loveth his wife loveth himself.'),
            plain(29, 'For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church:'),
            {
              number: 32,
              spans: [
                t('This is a great mystery: but I speak concerning Christ and the '),
                hy('church', 'e5-mystery'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-husbands',
          html:
            '"Husbands, love your wives, even as Christ also loved the church, and gave himself for it." This is not sentimental instruction. It is radical. The measure of a husband&apos;s love is not the world&apos;s standard. It is Christ&apos;s love—the willingness to die for the beloved. This reframes marriage entirely.',
        },
        {
          kind: 'commentary',
          id: 'e5-holy',
          html:
            'Christ&apos;s purpose for the church is that she be "holy and without blemish." Not perfect in an abstract sense, but whole—set apart for God, liberated from the shame of sin. Christ&apos;s love is not passively accepting. It is transformative.',
        },
        {
          kind: 'commentary',
          id: 'e5-mystery',
          html:
            '"This is a great mystery: but I speak concerning Christ and the church." Marriage is a sign of a deeper reality: Christ&apos;s covenant union with the church. The two are made one flesh—body, soul, will. This mysterious union is what all faithful marriage echoes.',
        },
        {
          kind: 'greek',
          id: 'e5-hagiazao',
          title: 'Hagiazao — "Sanctify"',
          script: 'ἁγιάζω',
          translit: '<strong>Hagiazao</strong> · to sanctify; to make holy; to set apart',
          description:
            'To sanctify is to set apart for God, to make holy. Christ&apos;s love of the church is not merely protective but transformative—it makes the beloved holy.',
        },
        {
          kind: 'carry',
          html:
            'If you are married, your marriage is a sign to the world of Christ&apos;s love for the church. This is not mere symbolism. It is a calling. You are invited to love as Christ loved—with self-giving, transformative love. If you are not married, Paul&apos;s teaching still applies: all your relationships should reflect Christ&apos;s love.',
        },
        {
          kind: 'reflection',
          id: 'e5-marriage-reflect',
          prompt: 'Marriage is a covenant that reflects Christ&apos;s love for the church. What would it look like for your most intimate relationships to be shaped by that kind of love?',
        },
      ],
    },
  ],
};
