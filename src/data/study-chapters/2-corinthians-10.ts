import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 10 — Casting Down Imaginations
 *
 * Paul addresses false apostles who have come to Corinth and undermined his
 * authority. He responds with both gentleness and firmness. The weapons of
 * spiritual warfare are not carnal but mighty through God. Paul must &quot;cast down
 * imaginations&quot;—refute false philosophies—and bring every thought into
 * captivity to the obedience of Christ.
 */
export const SECOND_CORINTHIANS_10: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 10,

  intros: [
    'The Corinthians have been influenced by false apostles who question Paul&apos;s authority and disparage his appearance and speech. Paul responds. He is humble and meek in person, but formidable in spiritual power. He does not fight with carnal weapons—rhetoric, intimidation, political maneuvering—but with spiritual weapons: truth, prayer, the power of the gospel.',
    'This chapter defines spiritual warfare and the weapons available to believers. Not swords and spears, but truth. Not deception and sophistry, but the clarity of Christ. The battle is for the mind—for thoughts, imaginations, philosophical positions. The victory comes by bringing every thought into obedience to Christ.',
  ],

  sections: [
    {
      ref: '2 Corinthians 10:1–6',
      title: 'Spiritual Weapons; Casting Down Imaginations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Now I Paul myself beseech you by the meekness and gentleness of Christ, who in appearance am lowly among you, but being absent am bold toward you:'),
            plain(4, 'For the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds;'),
            plain(5, 'Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;'),
            plain(6, 'And having in a readiness to revenge all disobedience, when your obedience is fulfilled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-10-weapons',
          html:
            '&quot;The weapons of our warfare are not carnal, but mighty through God.&quot; Paul does not fight with the world&apos;s weapons—power, rhetoric, intimidation. His weapons are spiritual: truth, prayer, the clarity of the gospel.',
        },
        {
          kind: 'greek',
          id: 'cor2-10-logismos',
          title: 'Logismos — Imagination; Reasoning; Thought',
          script: 'λογισμός',
          translit: '<strong>Logismos</strong> · imagination; thought; reasoning; calculation',
          description:
            'Paul must cast down logismos—false imaginings and reasonings that stand against God. These are not merely personal thoughts, but philosophical systems and ideologies that shape culture.',
        },
        {
          kind: 'commentary',
          id: 'cor2-10-strongholds',
          html:
            'The &quot;strong holds&quot; are false ideas, philosophies, systems of thought that fortify themselves against God. Paul&apos;s task is to demolish them, not by argument alone, but by the power of truth.',
        },
        {
          kind: 'christ',
          id: 'cor2-10-christ-obedience',
          title: 'Christ Connection — Every Thought Captive to Christ',
          html:
            'The goal is to bring &quot;every thought to the obedience of Christ.&quot; Not autonomy of thought, but alignment with Christ. The mind is renewed when it submits to His lordship.',
        },
        {
          kind: 'carry',
          html:
            'You are in a spiritual battle. Ideas matter. Philosophies matter. What you believe shapes how you live. Do not simply accept the culture&apos;s imaginations. Test them against Christ. Bring every thought into obedience to Him.',
        },
        {
          kind: 'reflection',
          id: 'cor2-10-imaginations',
          prompt: 'What &quot;imaginations&quot;—false ideas or philosophies—have captured your thinking? How can you bring those thoughts into captivity to Christ?',
        },
      ],
    },

    {
      ref: '2 Corinthians 10:7–18',
      title: 'Boasting in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(7, 'Do ye look on things after the outward appearance? If any man trust to himself that he is Christ&apos;s, let him of himself think this again, that, as he is Christ&apos;s, even so are we Christ&apos;s.'),
            plain(12, 'For we dare not make ourselves of the number, or compare ourselves with some that commend themselves: but they measuring themselves by themselves, and comparing themselves among themselves, are not wise.'),
            plain(15, 'Not boasting of things without our measure, that is, of other men&apos;s labours; but having hope, when your faith is increased, that we shall be enlarged by you according to our rule abundantly,'),
            plain(17, 'But he that glorieth, let him glory in the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-10-appearance',
          html:
            'The false apostles boast of outward appearance and self-commendation. Paul refuses to judge by such standards. The question is not &quot;How impressive do I look?&quot; but &quot;Do I belong to Christ?&quot;',
        },
        {
          kind: 'greek',
          id: 'cor2-10-doxa',
          title: 'Doxa — Glory; Opinion; Appearance',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; opinion; what appears; reputation',
          description:
            'The false apostles seek doxa—human glory and opinion. Paul seeks to glory in the Lord. The contrast defines authentic ministry.',
        },
        {
          kind: 'commentary',
          id: 'cor2-10-compare',
          html:
            '&quot;They measuring themselves by themselves, and comparing themselves among themselves, are not wise.&quot; This is the trap of self-commendation. When you compare yourself to those below you, you always look good. Real measurement is against the standard of Christ.',
        },
        {
          kind: 'christ',
          id: 'cor2-10-glory-lord',
          title: 'Christ Connection — Glory Only in the Lord',
          html:
            'Paul&apos;s boast is in the Lord. Not in his achievements, his appearance, his rhetorical skill. In Christ alone. This is the pattern for all believers.',
        },
        {
          kind: 'carry',
          html:
            'You are tempted to compare yourself with others and boast in your accomplishments. Paul calls you to a different standard: boast in the Lord. Let your only glory be His grace working through you.',
        },
        {
          kind: 'reflection',
          id: 'cor2-10-measure',
          prompt: 'What do you boast in? Your accomplishments? Your appearance? Your abilities? How would it change if you boasted only in the Lord?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But he that glorieth, let him glory in the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 10 · Study Guide',
  },

  hasHebrew: false,
};
