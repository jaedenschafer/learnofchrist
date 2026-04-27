import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 12 — Spiritual Gifts and One Body
 *
 * The Corinthians have become fascinated by spiritual gifts, especially the more
 * spectacular ones like speaking in tongues. Paul teaches a corrective lesson: gifts
 * are meant to build up the body, not to elevate the gifted one. All gifts come from
 * the same Spirit, and all are needed. The body is one, but it has many members, each
 * with a vital role.
 */
export const FIRST_CORINTHIANS_12: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 12,

  intros: [
    'The Corinthian church is fractured by competition over spiritual gifts. Some boast of glossolalia—speaking in tongues. Others emphasize prophecy. The church has lost sight of the purpose of gifts: not personal status, but the strengthening of the whole body. Paul redirects their focus from the gift to the Giver, and from individual glory to corporate good.',
    'Paul employs the metaphor of the body—a body is one, but it has many members, each different, each necessary. The eye cannot say to the hand, &quot;I don&apos;t need you.&quot; Nor can the head say to the feet the same. Every member is essential. When one suffers, all suffer. When one rejoices, all rejoice. This is the vision Paul holds before the fractured Corinthian church.',
  ],

  sections: [
    {
      ref: '1 Corinthians 12:1–11',
      title: 'Different Gifts, Same Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Now concerning spiritual gifts, brethren, I would not have you ignorant.'),
            plain(4, 'Now there are diversities of gifts, but the same Spirit.'),
            plain(5, 'And there are differences of administrations, but the same Lord.'),
            plain(6, 'And there are diversities of operations, but it is the same God which worketh all in all.'),
            plain(7, 'But the manifestation of the Spirit is given to every man to profit withal.'),
            plain(11, 'But all these worketh that one and the selfsame Spirit, dividing to every man severally as he will.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-1-diversity',
          html:
            'Paul establishes the foundation: &quot;There are diversities of gifts, but the same Spirit.&quot; Diversity is not a problem to be solved. It is a feature of God&apos;s design. Different gifts, different administrations, different operations—all flowing from the same Spirit, the same Lord, the same God.',
        },
        {
          kind: 'greek',
          id: 'cor12-1-charismata',
          title: 'Charismata — Gifts of Grace',
          script: 'χαρίσματα',
          translit: '<strong>Charismata</strong> · gifts; grace gifts; gifts of grace',
          description:
            'Each charisma is a grace gift—given freely by God, not earned or deserved. The Corinthians&apos; error is to treat gifts as badges of honor or proof of status. They are tools for building up the body.',
        },
        {
          kind: 'commentary',
          id: 'cor12-1-profit',
          html:
            '&quot;The manifestation of the Spirit is given to every man to profit withal.&quot; The purpose of a gift is not to make the recipient impressive. It is to &quot;profit&quot;—to benefit, to build up. If a gift serves only the ego of the gifted one, it has missed its purpose.',
        },
        {
          kind: 'christ',
          id: 'cor12-1-christ-same-spirit',
          title: 'Christ Connection — One Spirit, Many Gifts',
          html:
            'The Spirit distributes gifts as He wills. No one can boast that they have earned or deserve their gift. All gifts flow from Christ&apos;s ascension and His designation of the Spirit to empower the church.',
        },
        {
          kind: 'carry',
          html:
            'You have been given gifts—perhaps not the ones you wanted, but the ones the Spirit determined. Rather than comparing your gifts to others&apos;, ask: how can I use what I have been given to build up the body? What are my gifts meant to accomplish in service to others?',
        },
        {
          kind: 'reflection',
          id: 'cor12-1-gifts',
          prompt: 'What gifts has the Spirit given you? Are you using them to build up the body, or have you made them occasions for pride?',
        },
      ],
    },

    {
      ref: '1 Corinthians 12:12–31',
      title: 'One Body with Many Members',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(12, 'For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ.'),
            plain(15, 'If the foot shall say, Because I am not the hand, I am not of the body; is it therefore not of the body?'),
            plain(21, 'And the eye cannot say unto the hand, I have no need of thee: nor again the head to the feet, I have no need of you.'),
            plain(24, 'But God hath tempered the body together, having given more abundant honour to that part which lacked:'),
            plain(25, 'That there should be no schism in the body; but that the members should have the same care one for another.'),
            plain(27, 'Now ye are the body of Christ, and members in particular.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-2-body',
          html:
            'The church is not a collection of individuals. It is a body—one organism with many parts. No part can function in isolation. No part can declare itself unnecessary to the whole. The hand needs the foot. The eye needs the ear. All are interdependent.',
        },
        {
          kind: 'greek',
          id: 'cor12-2-soma',
          title: 'Soma — Body',
          script: 'σῶμα',
          translit: '<strong>Soma</strong> · body; physical form; church as a body',
          description:
            'The church is Christ&apos;s soma—His body. This is not metaphor but reality. The church is not an abstract idea. It is an organism animated by Christ&apos;s Spirit, with each member playing a vital role.',
        },
        {
          kind: 'commentary',
          id: 'cor12-2-honor',
          html:
            'God has &quot;tempered the body together, having given more abundant honour to that part which lacked.&quot; The parts we consider less honorable—the feet, the intestines—God clothes with special care. This reversal of human values is essential to Paul&apos;s vision: the seemingly insignificant are precious to God.',
        },
        {
          kind: 'christ',
          id: 'cor12-2-christ-body-members',
          title: 'Christ Connection — Members of Christ&apos;s Body',
          html:
            'The astounding claim: &quot;Ye are the body of Christ, and members in particular.&quot; Your identity, individually and corporately, is bound up with Christ. You are not an independent agent. You are a part of His body.',
        },
        {
          kind: 'carry',
          html:
            'Your role in the church may not be visible or impressive. You may not have the gift of prophecy or teaching. But you are necessary. Your faithfulness, your service, your presence—these matter. The body needs you exactly as you are.',
        },
        {
          kind: 'reflection',
          id: 'cor12-2-body-care',
          prompt: 'Do you view yourself as part of a body, or as an independent agent? How would your choices change if you truly believed you are a member of Christ&apos;s body?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Now ye are the body of Christ, and members in particular.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 12 · Study Guide',
  },

  hasHebrew: false,
};
