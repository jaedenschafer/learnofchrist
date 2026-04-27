import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 4 — Sanctification; The Coming of the Lord
 *
 * "For this is the will of God, even your sanctification." Paul shifts from
 * comfort to instruction. Believers are called to sanctification—to increasing
 * holiness in thought, word, and deed. And then the grand promise: "The Lord
 * himself shall descend from heaven with a shout, with the voice of the
 * archangel, and with the trump of God."
 */
export const FIRST_THESSALONIANS_4: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 4,

  intros: [
    'Sanctification is not escape from the world but transformation within it. Paul calls believers to sexual purity, to work with their own hands, and to refrain from idleness. Holiness is concrete. It touches how we use our bodies, our time, our energy.',
    'But Paul is not content with mere ethical instruction. He opens a vision: believers will not face the final judgment alone. Christ Himself will descend from heaven. The dead in Christ will rise first. Then the living will be caught up to meet Him in the air. This is the hope that makes holiness not burdensome but liberating.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 4',
    quote:
      'For this is the will of God, even your sanctification. The Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 4 · Study Guide',
  },

  sections: [
    {
      ref: '1 Thessalonians 4:1–12',
      title: 'Sanctification and Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('For this is the will of God, even your '),
                hp('sanctification', '1t4-sanctification'),
                t(', that ye should abstain from fornication:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('That every one of you should know how to possess his vessel in '),
                hg('sanctification and honour', '1t4-vessel'),
                t(';'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But as touching brotherly love ye need not that I write unto you: for ye yourselves are taught of God to '),
                hy('love one another', '1t4-love'),
                t(';'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And that ye '),
                hp('study to be quiet, and to do your own business, and to work with your own hands', '1t4-work'),
                t(', as we commanded you;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t4-sanctification',
          html:
            '"For this is the will of God, even your sanctification." Sanctification is not optional. It is the will of God. You are called not merely to believe but to be holy—to be set apart, separated from sin, devoted to God. This is the calling of every believer.',
        },
        {
          kind: 'commentary',
          id: '1t4-vessel',
          html:
            '"Every one of you should know how to possess his vessel in sanctification and honour." The body is a vessel. How you use it matters. Purity is not denial of the body; it is honoring the body as God\'s temple. Sanctification is material and physical, not merely spiritual.',
        },
        {
          kind: 'commentary',
          id: '1t4-love',
          html:
            '"Love one another." The Thessalonians have already been taught by God to love. Paul affirms this. Love is not something new to learn but something to deepen. Love is the foundation of sanctification.',
        },
        {
          kind: 'commentary',
          id: '1t4-work',
          html:
            '"Study to be quiet, and to do your own business, and to work with your own hands." Holiness touches work. Believers are to earn their own bread, not live off others, not be idle. Work is not curse but calling. Through work, we sustain ourselves and have something to share.',
        },
        {
          kind: 'greek',
          id: '1t4-hagiosyne',
          title: 'Hagiosyne — "Sanctification" or "Holiness"',
          script: 'ἁγιοσύνη',
          translit: '<strong>Hagiosyne</strong> · sanctification; holiness; separation unto God; moral purity',
          description:
            'Hagiosyne is the process and state of being made holy—separated from sin and dedicated to God. It is both a gift received and a discipline cultivated. Believers are holy by position in Christ; they are called to holiness by practice.',
        },
        {
          kind: 'christ',
          id: '1t4-christ-sanctify',
          title: 'Christ Connection — Christ Sanctifies',
          html:
            'Jesus prayed, "Sanctify them through thy truth: thy word is truth" (John 17:17). Believers are sanctified through faith in Christ and obedience to His word. Sanctification is His work within us, not our work for Him.',
        },
        {
          kind: 'carry',
          html:
            'You are called to sanctification. This means how you use your body matters. Your work matters. Your leisure matters. Your relationships matter. Everything is an opportunity to honor God or dishonor Him. Sanctification is not escape from daily life; it is the daily transformation of how you live.',
        },
        {
          kind: 'reflection',
          id: '1t4-holy-reflect',
          prompt: 'Where do you most struggle with sanctification? In purity, in work, in relationships? What would it mean to possess your vessel in honor?',
        },
      ],
    },

    {
      ref: '1 Thessalonians 4:13–18',
      title: 'The Coming of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For the Lord himself shall '),
                hp('descend from heaven with a shout, with the voice of the archangel, and with the trump of God', '1t4-descent'),
                t(': and the dead in Christ shall rise first:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then we which are alive and remain shall be '),
                hg('caught up together with them in the clouds, to meet the Lord in the air', '1t4-rapture'),
                t(': and so shall we ever be with the Lord.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Wherefore '),
                hy('comfort one another with these words', '1t4-comfort'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t4-descent',
          html:
            '"The Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God." This is not private or quiet. It is public, audible, undeniable. Christ comes not for secret rapture but for universal vindication.',
        },
        {
          kind: 'commentary',
          id: '1t4-rapture',
          html:
            '"Caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord." Believers will not face death as a final separation. Even those who sleep in death will rise. All believers—living and dead—will meet the Lord together. This is reunion, not abandonment.',
        },
        {
          kind: 'commentary',
          id: '1t4-comfort',
          html:
            '"Comfort one another with these words." This is the purpose of the teaching on Christ\'s return. It is comfort. Not speculation about timelines. Not anxiety about being left behind. But the deep assurance: Christ is coming. And when He comes, we will be with Him forever.',
        },
        {
          kind: 'greek',
          id: '1t4-harpazo',
          title: 'Harpazo — "Caught Up"',
          script: 'ἁρπάζω',
          translit: '<strong>Harpazo</strong> · to seize; to snatch away; to catch up with force',
          description:
            'Harpazo conveys sudden, forceful seizure—not for judgment but for rescue. Believers are caught up, snatched away from this age and translated into the presence of Christ. It speaks of sudden transformation.',
        },
        {
          kind: 'christ',
          id: '1t4-christ-return',
          title: 'Christ Connection — The Return of Christ',
          html:
            'The first coming of Christ was in weakness and humility. The second coming will be in power and glory. "Every eye shall see him" (Revelation 1:7). This is not mystical hope but historical promise. He will return.',
        },
        {
          kind: 'carry',
          html:
            'You live between the first and second coming of Christ. You are sanctified by His past redemption. You are sustained by His present intercession. You are kept by His promised return. When anxiety or sorrow tries to overwhelm you, remember: Christ is coming. Death is not the end. You will ever be with the Lord. Let this comfort you.',
        },
        {
          kind: 'reflection',
          id: '1t4-return-reflect',
          prompt: 'Does the hope of Christ\'s return comfort you? What would it mean to live differently if you truly believed He will return?',
        },
      ],
    },
  ],
};
