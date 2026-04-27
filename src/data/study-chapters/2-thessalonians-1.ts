import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 1 — Comfort in Tribulation; Just Judgment
 *
 * "When the Lord Jesus shall be revealed from heaven with his mighty angels,
 * in flaming fire taking vengeance on them that know not God, and that obey
 * not the gospel of our Lord Jesus Christ." The Thessalonians face persecution.
 * Paul comes not with sympathy alone but with the promise of divine justice.
 * Those who afflict believers will themselves be afflicted. Those who believe
 * will find rest when Christ returns.
 */
export const SECOND_THESSALONIANS_1: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 1,

  intros: [
    'The Thessalonians continue to face opposition. But the spirit of this letter is not defeat. Paul opens by thanking God for their faith, their love, and their patience in affliction. Then he unveils a cosmic reversal: when Christ returns in judgment, those who now afflict believers will receive affliction themselves.',
    'This is not vindictiveness. It is the promise of justice. God is not indifferent to persecution. He will vindicate His people. And this hope is meant to comfort the afflicted and to warn those who oppose the gospel. In the coming judgment, all accounts will be settled justly.',
  ],

  bottomShare: {
    label: 'Share 2 Thessalonians 1',
    quote:
      'God is righteous to recompense tribulation to them that trouble you. We are bound to thank God for you, seeing your faith groweth exceedingly, and the charity of every one of you all toward each other aboundeth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 1 · Study Guide',
  },

  sections: [
    {
      ref: '2 Thessalonians 1:1–12',
      title: 'Persecution and Divine Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('We are bound to thank God always for you, brethren, as it is meet, because that your '),
                hp('faith groweth exceedingly, and the charity of every one of you all toward each other aboundeth', '2t1-growth'),
                t(';'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Seeing it is a righteous thing with God to '),
                hg('recompense tribulation to them that trouble you', '2t1-justice'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And to you who are troubled '),
                hy('rest with us, when the Lord Jesus shall be revealed from heaven with his mighty angels', '2t1-rest'),
                t(', in flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('When he shall come to be '),
                hp('glorified in his saints, and to be admired in all them that believe', '2t1-glorified'),
                t(', (because our testimony among you was believed,) in that day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-growth',
          html:
            '"Your faith groweth exceedingly, and the charity of every one of you all toward each other aboundeth." Paul observes their growth. Despite persecution, not despite but because of it, their faith strengthens and their mutual love deepens. Persecution does not destroy the church; it purifies and strengthens it.',
        },
        {
          kind: 'commentary',
          id: '2t1-justice',
          html:
            '"It is a righteous thing with God to recompense tribulation to them that trouble you." God is just. The persecutors will face judgment. This is not Paul\'s opinion but the character of God. Justice will ultimately prevail. Wrongs will be redressed.',
        },
        {
          kind: 'commentary',
          id: '2t1-rest',
          html:
            '"Rest with us, when the Lord Jesus shall be revealed from heaven." To the afflicted, Paul promises rest—not before Christ\'s return but as part of it. When Christ is revealed, the struggle ends. The afflicted find relief. The wicked face judgment.',
        },
        {
          kind: 'commentary',
          id: '2t1-glorified',
          html:
            '"Glorified in his saints, and to be admired in all them that believe." Christ\'s glory will be revealed in His people. Those who suffered for His name will share in His vindication. Their faithfulness will be vindicated before all creation.',
        },
        {
          kind: 'greek',
          id: '2t1-antapodidomi',
          title: 'Antapodidomi — "Recompense" or "Repay"',
          script: 'ἀνταποδίδωμι',
          translit: '<strong>Antapodidomi</strong> · to repay; to recompense; to give back in return; to render justice',
          description:
            'This word means to repay in kind—recompense proportional to deeds. God will repay those who afflict His people with corresponding affliction. It is divine justice, not divine malice.',
        },
        {
          kind: 'christ',
          id: '2t1-christ-judgment',
          title: 'Christ Connection — Christ the Judge',
          html:
            'Jesus said, "When the Son of man shall sit in the throne of his glory, ye also shall sit upon twelve thrones, judging the twelve tribes of Israel" (Matthew 19:28). Christ returns as judge, to vindicate the faithful and to judge the faithless. His coming is comfort to believers and warning to others.',
        },
        {
          kind: 'carry',
          html:
            'If you face opposition for your faith, know that it is not hidden from God. He sees. He will vindicate. The persecutors will face just recompense. You will find rest. This is not about revenge; it is about justice. Trust God\'s righteous judgment, and let this hope sustain you.',
        },
        {
          kind: 'reflection',
          id: '2t1-judgment-reflect',
          prompt: 'Does the promise of divine justice comfort or trouble you? How does it change your response to those who oppose you or your faith?',
        },
      ],
    },
  ],
};
