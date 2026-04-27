import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 11 — Paul&apos;s Sufferings
 *
 * Paul catalogs his sufferings for Christ: beaten, imprisoned, shipwrecked,
 * in peril from false brothers. He is zealous for the Corinthians with a godly
 * jealousy. He fears they will be seduced away from Christ by false teachers.
 * His sufferings are proof not of failure but of authentic apostleship.
 */
export const SECOND_CORINTHIANS_11: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 11,

  intros: [
    'The false apostles boast of their credentials, their comfort, their status. Paul responds with a list of his sufferings. This is not weakness in Paul&apos;s view—it is strength. His scars are his resume. He has suffered for the gospel. And he would suffer again to protect the Corinthians from deception.',
    'Paul&apos;s jealousy for the Corinthians is not possessiveness but pastoral love. He fears they will be seduced by false teachers, charmed by false gospels. He is willing to sacrifice his reputation, his comfort, his peace to guard them from error.',
  ],

  sections: [
    {
      ref: '2 Corinthians 11:21–33',
      title: 'Boasting in Weaknesses and Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(23, 'Are they ministers of Christ? (I speak as a fool) I am more; in labours more abundant, in stripes above measure, in prisons more frequent, in deaths oft.'),
            plain(24, 'Of the Jews five times received I forty stripes save one.'),
            plain(25, 'Thrice was I beaten with rods, once was I stoned, thrice I suffered shipwreck, a night and a day I have been in the deep;'),
            plain(26, 'In journeyings often, in perils of waters, in perils of robbers, in perils by mine own countrymen, in perils by the heathen, in perils in the city, in perils in the wilderness, in perils in the sea, in perils among false brethren;'),
            plain(30, 'If I must needs glory, I will glory of the things which concern mine infirmities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-11-sufferings',
          html:
            'Paul catalogs his credentials in suffering: beatings, imprisonments, shipwrecks, constant danger. The false apostles boast of comfort and status. Paul boasts of scars. His sufferings are the mark of authentic apostleship.',
        },
        {
          kind: 'greek',
          id: 'cor2-11-astheneia',
          title: 'Astheneia — Weakness; Infirmity',
          script: 'ἀσθένεια',
          translit: '<strong>Astheneia</strong> · weakness; infirmity; sickness; inability',
          description:
            'Paul concludes: &quot;I will glory of the things which concern mine infirmities.&quot; This is the reversal of worldly values. Paul boasts not of strength but of weakness—because in weakness, God&apos;s strength becomes visible.',
        },
        {
          kind: 'commentary',
          id: 'cor2-11-perils',
          html:
            'The list of perils is almost overwhelming. From his own people, from enemies, from the elements, from false brethren. And yet Paul continues. His sufferings are not evidence of failure but of faithfulness.',
        },
        {
          kind: 'christ',
          id: 'cor2-11-christ-suffer',
          title: 'Christ Connection — Suffering with Christ',
          html:
            'Paul suffers as Christ suffered. Not for personal glory, but for the gospel. His suffering is a participation in Christ&apos;s sufferings, a share in carrying the cross.',
        },
        {
          kind: 'carry',
          html:
            'When you encounter difficulty, difficulty, persecution, you may wonder if you are on the right path. Paul suggests the opposite: suffering may be evidence that you are faithful. What matter is not comfort, but faithfulness to Christ.',
        },
        {
          kind: 'reflection',
          id: 'cor2-11-faithful',
          prompt: 'What price have you paid for your faith? What would you be willing to suffer for Christ? How does Paul&apos;s example challenge you?',
        },
      ],
    },

    {
      ref: '2 Corinthians 11:1–15',
      title: 'Jealousy for the Corinthians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(2, 'For I am jealous over you with godly jealousy: for I have espoused you to one husband, that I may present you as a chaste virgin to Christ.'),
            plain(3, 'But I fear, lest by any means, as the serpent beguiled Eve through his subtilty, so your minds should be corrupted from the simplicity that is in Christ.'),
            plain(4, 'For if he that cometh preacheth another Jesus, whom we have not preached, or if ye receive another spirit, which ye have not received, or another gospel, which ye have not accepted, ye might well bear with him.'),
            plain(14, 'And no marvel; for Satan himself is transformed into an angel of light.'),
            plain(15, 'Therefore it is no great thing if his ministers also be transformed as the ministers of righteousness; whose end shall be according to their works.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-11-jealousy',
          html:
            'Paul is &quot;jealous over you with godly jealousy.&quot; He has &quot;espoused you to one husband&quot;—Christ. His concern is that they remain faithful to this covenant, not seduced away by false teachers.',
        },
        {
          kind: 'greek',
          id: 'cor2-11-parthenos',
          title: 'Parthenos — Virgin; Pure Maiden',
          script: 'παρθένος',
          translit: '<strong>Parthenos</strong> · virgin; unmarried maiden; pure and chaste',
          description:
            'Paul wants to present the Corinthians as a &quot;chaste virgin&quot; to Christ. The metaphor suggests purity, undivided devotion, faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'cor2-11-serpent',
          html:
            '&quot;As the serpent beguiled Eve through his subtilty.&quot; False teachers are subtle. They do not deny Christ outright. They present &quot;another Jesus,&quot; &quot;another gospel.&quot; The deception is all the more dangerous for being partial.',
        },
        {
          kind: 'christ',
          id: 'cor2-11-christ-fidelity',
          title: 'Christ Connection — Fidelity to Christ',
          html:
            'The Corinthians are betrothed to Christ. Their loyalty belongs to Him alone. Any competing loyalty—to false teachers, false gospels, false christs—is a violation of this covenant.',
        },
        {
          kind: 'carry',
          html:
            'You are betrothed to Christ. Be wary of any teacher, any movement, any idea that would draw your allegiance away from Him. Remain faithful to the gospel you were taught. Guard your heart against subtle seduction.',
        },
        {
          kind: 'reflection',
          id: 'cor2-11-faithful-one',
          prompt: 'How are you maintaining faithfulness to Christ in a world of competing claims and messages? Where are you most vulnerable to seduction?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I am jealous over you with godly jealousy: for I have espoused you to one husband, that I may present you as a chaste virgin to Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 11 · Study Guide',
  },

  hasHebrew: false,
};
