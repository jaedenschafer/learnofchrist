import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 5 — Day of the Lord; Pray Without Ceasing
 *
 * "For yourselves know perfectly that the day of the Lord so cometh as a thief
 * in the night." The return of Christ is certain but unknowable in timing. This
 * creates an eschatological tension: live as though He might return today, while
 * building and laboring as though there is much work to do. Pray without ceasing.
 * Quench not the Spirit. Test all things. Hold fast to that which is good.
 */
export const FIRST_THESSALONIANS_5: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 5,

  intros: [
    'The day of the Lord is unknown but not unknowable in principle. Those who belong to Christ are not in darkness; they are children of light. But the return of Christ should not paralyze believers into waiting passively. Instead, it should energize them to vigilance, prayer, and faithful work.',
    'This closing chapter of 1 Thessalonians is a collection of exhortations woven together: be sober, be vigilant, pray without ceasing, rejoice, give thanks, do not quench the Spirit, test all things. These are not disconnected commands. They form a pattern of life lived in light of Christ\'s return.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 5',
    quote:
      'The day of the Lord cometh as a thief in the night. Be sober and watchful. Pray without ceasing. Rejoice evermore. Quench not the Spirit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 5 · Study Guide',
  },

  sections: [
    {
      ref: '1 Thessalonians 5:1–11',
      title: 'Day of the Lord; Children of Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('For yourselves know perfectly that the '),
                hp('day of the Lord so cometh as a thief in the night', '1t5-thief'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But ye, brethren, are not in darkness, that that day should overtake you as a thief.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Ye are all the '),
                hg('children of light, and the children of the day', '1t5-light'),
                t(': we are not of the night, nor of darkness.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But let us, who are of the day, be '),
                hy('sober, putting on the breastplate of faith and love; and for an helmet, the hope of salvation', '1t5-armor'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t5-thief',
          html:
            '"The day of the Lord so cometh as a thief in the night." The return of Christ is sudden and unexpected. This creates an eschatological tension: believers are called to readiness while the timing remains hidden. This is not meant to produce fear but watchfulness.',
        },
        {
          kind: 'commentary',
          id: '1t5-light',
          html:
            '"Ye are all the children of light, and the children of the day." Identity precedes behavior. Believers are not trying to become children of light; they already are. This reality should govern how they live—with wisdom, sobriety, and moral clarity.',
        },
        {
          kind: 'commentary',
          id: '1t5-armor',
          html:
            '"Putting on the breastplate of faith and love; and for an helmet, the hope of salvation." Even here, the armor language appears. But it is not armor for offense; it is protection. Faith and love protect the heart. Hope protects the mind. These are the virtues that guard believers in darkness.',
        },
        {
          kind: 'greek',
          id: '1t5-nepho',
          title: 'Nepho — "Be Sober"',
          script: 'νήφω',
          translit: '<strong>Nepho</strong> · to be sober; to be clear-minded; to be spiritually alert; to abstain from intoxication',
          description:
            'To be sober is not merely physical temperance; it is spiritual clarity. It means thinking straight, seeing truth without distortion, maintaining vigilance. In light of Christ\'s return, sobriety is essential.',
        },
        {
          kind: 'christ',
          id: '1t5-christ-unexpected',
          title: 'Christ Connection — Christ\'s Return is Unexpected',
          html:
            'Jesus taught in parables about the unexpected return of the master—the wise and foolish virgins, the servants with talents. Believers are to live in readiness, not in speculative anxiety about timing. Christ alone knows the day and hour.',
        },
        {
          kind: 'carry',
          html:
            'You know that the day of the Lord comes like a thief. You cannot predict it. But you can prepare for it by living as a child of light. Be clear-minded. Guard your heart with faith and love. Guard your mind with hope. Do not become absorbed in the things of darkness. Live ready.',
        },
        {
          kind: 'reflection',
          id: '1t5-ready-reflect',
          prompt: 'If Christ were to return today, would you be ready? How does the hope of His return shape your daily choices?',
        },
      ],
    },

    {
      ref: '1 Thessalonians 5:12–28',
      title: 'Exhortations; Pray Without Ceasing; Hold Fast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t(
                  '​Rejoice evermore. ​'
                ),
              ],
            },
            {
              number: 17,
              spans: [
                t('​​Pray '),
                hp('without ceasing', '1t5-prayer'),
                t('. '),
              ],
            },
            {
              number: 18,
              spans: [
                t('​In every thing give '),
                hg('thanks: for this is the will of God in Christ Jesus concerning you', '1t5-thanks'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Quench not the '),
                hy('Spirit', '1t5-spirit'),
                t(';'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Prove all things; '),
                hp('hold fast that which is good', '1t5-good'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t5-prayer',
          html:
            '"Pray without ceasing." This does not mean hours on your knees. It means an ongoing conversation with God. Prayer is not isolated from work or life; it suffuses daily existence. The believer is always in communion with the Father.',
        },
        {
          kind: 'commentary',
          id: '1t5-thanks',
          html:
            '"In every thing give thanks: for this is the will of God in Christ Jesus concerning you." Gratitude is the will of God. Not just when circumstances are pleasant. In everything. This transforms suffering itself into an occasion for gratitude—gratitude that God is with you, that He has a purpose.',
        },
        {
          kind: 'commentary',
          id: '1t5-spirit',
          html:
            '"Quench not the Spirit." The Holy Spirit is active in the church, speaking through prophets, empowering works of justice and love. To quench the Spirit is to suppress, to silence, to demand control and order at the expense of the Spirit\'s moving.',
        },
        {
          kind: 'commentary',
          id: '1t5-good',
          html:
            '"Prove all things; hold fast that which is good." Believers are not to be passive recipients of any teaching. Test all things against Scripture. And when you discern what is good—what is true, just, pure—hold to it. Discernment requires both openness to the Spirit and rigorous adherence to truth.',
        },
        {
          kind: 'greek',
          id: '1t5-adialeiptos',
          title: 'Adialeiptos — "Without Ceasing"',
          script: 'ἀδιάλειπτος',
          translit: '<strong>Adialeiptos</strong> · without ceasing; without interruption; continuous; unbroken',
          description:
            'Prayer without ceasing is not a task to be completed. It is an attitude of the heart that continues throughout the day—in work, in rest, in joy, in sorrow. It is the constant communion of the believer with God.',
        },
        {
          kind: 'christ',
          id: '1t5-christ-spirit',
          title: 'Christ Connection — Christ Sends the Spirit',
          html:
            'Jesus promised that after His ascension, the Holy Spirit would come as His continuing presence in the world and in believers. To quench the Spirit is to resist Christ\'s own presence. To pray without ceasing is to remain in conscious dependence on the Spirit\'s power.',
        },
        {
          kind: 'carry',
          html:
            'You are called to a pattern of life: rejoice always. Pray without ceasing. Give thanks in every circumstance. Do not suppress the Spirit\'s work. Test all teachings against Scripture. Hold fast to that which is good. This is not a burden; it is the liberation of life lived in constant communion with God.',
        },
        {
          kind: 'reflection',
          id: '1t5-spirit-reflect',
          prompt: 'When do you most struggle to pray without ceasing? Where are you tempted to quench the Spirit? How can you cultivate a life of unceasing prayer and gratitude?',
        },
      ],
    },
  ],
};
