import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 13 — Love Chapter
 *
 * The greatest chapter on love in Scripture. Paul interrupts his teaching on
 * spiritual gifts to make a staggering claim: all the gifts in the world—prophecy,
 * knowledge, faith, even martyrdom—without love are nothing, sounding brass,
 * a clanging cymbal. Love is the greatest thing. Love never fails.
 */
export const FIRST_CORINTHIANS_13: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 13,

  intros: [
    'The Corinthian church has been fascinated by gifts. Paul has affirmed that gifts are real and valuable. But now he pivots: there is something greater than any gift. There is love. The church that is expert in prophecy but without love is merely noise. The believer who has the faith to move mountains but without love is nothing. Love is the measure of all things. Love is the goal toward which all gifts should aim.',
    'This chapter stands at the center of the Epistles as a jewel—a psalm of love that has been read at countless weddings and funerals. Yet its context is not romantic love but the love that holds Christian community together: patient, kind, never envious, never boasting, never failing. This is the love that the Corinthians must learn.',
  ],

  sections: [
    {
      ref: '1 Corinthians 13:1–3',
      title: 'Without Love, All Is Nothing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.'),
            plain(2, 'And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.'),
            plain(3, 'And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-1-tongues',
          html:
            'Paul imagines the highest achievements. Speaking with the tongues of men and angels—the most spectacular gift the Corinthians coveted. Yet without love, it is mere noise, &quot;sounding brass, or a tinkling cymbal.&quot; Sound without substance. Noise without meaning.',
        },
        {
          kind: 'greek',
          id: 'cor13-1-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; self-giving love; God&apos;s love',
          description:
            'Agape is not sentimental attachment or romantic love. It is the self-giving love of God—the love that serves, sacrifices, persists. It is the love that motivated Christ to die for His enemies.',
        },
        {
          kind: 'commentary',
          id: 'cor13-1-faith',
          html:
            'Paul piles on the achievements: prophecy, knowledge, faith that can move mountains, even the ultimate sacrifice—giving one&apos;s body to be burned. Yet without love, all is worthless. &quot;I am nothing.&quot; &quot;It profiteth me nothing.&quot; The verdict is absolute.',
        },
        {
          kind: 'christ',
          id: 'cor13-1-christ-love',
          title: 'Christ Connection — Christ Is Love Incarnate',
          html:
            'Christ embodied this love. He spoke truth but with compassion. He demonstrated faith, knowledge, power. Yet it was His love—His willingness to suffer and die—that redeemed the world.',
        },
        {
          kind: 'carry',
          html:
            'Whatever gifts you exercise, whatever achievements you accumulate, let them be motivated by love. If you teach, teach from love. If you serve, serve from love. If you give, give from love. Without love, all else is hollow.',
        },
        {
          kind: 'reflection',
          id: 'cor13-1-gift-love',
          prompt: 'What gifts or achievements are you proud of? Are they motivated by love, or by something else? What would change if love were your primary motivation?',
        },
      ],
    },

    {
      ref: '1 Corinthians 13:4–13',
      title: 'The Character and Endurance of Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(4, 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,'),
            plain(5, 'Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;'),
            plain(6, 'Rejoiceth not in iniquity, but rejoiceth with the truth;'),
            plain(7, 'Beareth all things, believeth all things, hopeth all things, endureth all things.'),
            plain(8, 'Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away.'),
            plain(13, 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-2-character',
          html:
            'Paul catalogues the character of love. It is patient—suffereth long. It is kind. It does not envy, does not boast, is not puffed up. It does not behave unseemly, does not seek its own, is not easily provoked. This is a portrait not of sentiment but of radical unselfishness.',
        },
        {
          kind: 'greek',
          id: 'cor13-2-makrothumia',
          title: 'Makrothumia — Patience; Long-Suffering',
          script: 'μακροθυμία',
          translit: '<strong>Makrothumia</strong> · patience; long-suffering; perseverance',
          description:
            'Love is makrothumia—it suffers long, bears with others, does not rush to judgment. This is not weakness but the strength required to truly love.',
        },
        {
          kind: 'commentary',
          id: 'cor13-2-never-fails',
          html:
            '&quot;Charity never faileth.&quot; Prophecies will fail, tongues will cease, knowledge will vanish away. But love endures. When everything else has passed away, love remains. This is why love is greater than the gifts. Love is eternal.',
        },
        {
          kind: 'christ',
          id: 'cor13-2-christ-endure',
          title: 'Christ Connection — Love That Endures All Things',
          html:
            'Christ &quot;beareth all things, believeth all things, hopeth all things, endureth all things.&quot; He endured the cross, despised the shame, because of love. His love is the model for our love.',
        },
        {
          kind: 'carry',
          html:
            'Let these verses remake your heart. Ask the Spirit to cultivate in you a love that is patient, kind, humble, selfless. This is the love the church needs. This is the love the world needs. This is the only love that endures.',
        },
        {
          kind: 'reflection',
          id: 'cor13-2-endure-all',
          prompt: 'Which characteristic of love is most difficult for you? What would it look like to cultivate that characteristic in your relationships?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 13 · Study Guide',
  },

  hasHebrew: false,
};
