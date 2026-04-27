import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_10: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 10,

  intros: [
    'The author has argued for Christ&apos;s supremacy over the entire old system. Now he brings it to a climax. The Law was a shadow. It could never perfect. But Christ—one offering for sins forever. He sat down. His work is finished. Therefore, Christians are called to draw near with a true heart, to hold fast their profession, to spur one another toward love and good works, and not to forsake the assembling of themselves together.',
    'The chapter ends with both promise and warning: encouragement for perseverance, and stern words for those who shrink back. The stakes are high. The invitation is urgent.',
  ],

  sections: [
    {
      ref: 'Hebrews 10:1–25',
      title: 'One Offering for Sins, Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'For the law having a shadow of good things to come, and not the very image of the things, can never with those sacrifices which they offered year by year continually make the comers thereunto perfect.'),
            plain(10, 'By the which will we are sanctified through the offering of the body of Jesus Christ once for all.'),
            plain(12, 'But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God;'),
            plain(14, 'For by one offering he hath perfected for ever them that are sanctified.'),
            plain(19, 'Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus,'),
            plain(22, 'Let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience, and our bodies washed with pure water.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-shadow-image',
          html:
            'The Law is shadow. Christ is substance. Shadows are real—they point to something. But they are not the thing itself. To mistake shadow for substance is to miss the reality.',
        },
        {
          kind: 'greek',
          id: 'heb10-teleioō-telelos',
          title: 'Teleioō — Perfect, Make Perfect',
          script: 'τελειόω',
          translit: '<strong>Teleioō</strong> · to perfect; to complete; to make mature',
          description:
            'Christ "hath perfected for ever them that are sanctified." Perfection here is not sinlessness but completeness—you lack nothing that redemption requires. You are complete in Him.',
        },
        {
          kind: 'commentary',
          id: 'heb10-boldness',
          html:
            '"Having therefore, brethren, boldness to enter into the holiest." You do not slink in. You do not apologize. You come boldly. Not because you are sinless, but because Christ&apos;s blood covers you.',
        },
        {
          kind: 'christ',
          id: 'heb10-christ-way-perfected',
          title: 'Christ Connection — The Way Into God&apos;s Presence',
          html:
            'Jesus is the way. Through His blood, your conscience is cleansed. Through His body, you are washed. You are fit to draw near. You have access. You have permission. You have invitation.',
        },
        {
          kind: 'carry',
          html:
            'Draw near. Assemble with God&apos;s people. Stir up one another to love and good works. Do not neglect gathering together. Community is not optional. It is part of how the gospel works.',
        },
        {
          kind: 'reflection',
          id: 'heb10-draw-near',
          prompt: 'What keeps you from drawing near to God with boldness? What conscience-wounds need Christ&apos;s blood to heal them?',
        },
      ],
    },

    {
      ref: 'Hebrews 10:26–39',
      title: 'Not of Them Who Draw Back',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(26, 'For if we sin wilfully after that we have received the knowledge of the truth, there remaineth no more sacrifice for sins,'),
            plain(35, 'Cast not away therefore your confidence, which hath great recompence of reward.'),
            plain(36, 'For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.'),
            plain(37, 'For yet a little while, and he that shall come will come, and will not tarry.'),
            plain(39, 'But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-willful-sin',
          html:
            'Willful sin after knowledge is grave. It is not the struggle of a believer fighting temptation. It is deliberate rejection of what you know to be true. If you reject Christ, there is no backup plan.',
        },
        {
          kind: 'greek',
          id: 'heb10-hupomone',
          title: 'Hupomone — Patience, Endurance',
          script: 'ὑπομονή',
          translit: '<strong>Hupomone</strong> · patience; steadfastness; endurance under pressure',
          description:
            'Not passive waiting. Active endurance. You need patience to do God&apos;s will and then receive the promise. The race is not short. Endurance is required.',
        },
        {
          kind: 'commentary',
          id: 'heb10-not-draw-back',
          html:
            '"We are not of them who draw back unto perdition; but of them that believe to the saving of the soul." The author speaks with confidence. His readers are believers. They will not shrink back. They are those who preserve their souls through faith.',
        },
        {
          kind: 'christ',
          id: 'heb10-christ-coming-quick',
          title: 'Christ Connection — He Will Not Tarry',
          html:
            'The promise is sure. He is coming. Not slowly, not hesitantly. He will come with purpose. For those who believe, this is comfort. Hold fast your confidence. The reward is great.',
        },
        {
          kind: 'carry',
          html:
            'Do not draw back. Do not lose confidence. You have received knowledge of the truth. Act on it. Endure. The promise is sure. Christ is coming. Hold fast.',
        },
        {
          kind: 'reflection',
          id: 'heb10-hold-fast',
          prompt: 'Where are you tempted to draw back from faith? What would it mean to hold fast your confidence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For by one offering he hath perfected for ever them that are sanctified. Let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 10 · Study Guide',
  },

  hasHebrew: false,
};
