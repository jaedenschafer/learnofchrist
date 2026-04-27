import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 15 — Resurrection
 *
 * The resurrection is not peripheral to the gospel. It is central. Paul recounts
 * the gospel: Christ died for our sins, was buried, rose on the third day, appeared
 * to witnesses. But some in Corinth deny the resurrection. Paul explains that if
 * Christ did not rise, faith is futile. But He did rise—the firstfruits of those who
 * have fallen asleep. Death is swallowed up in victory.
 */
export const FIRST_CORINTHIANS_15: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 15,

  intros: [
    'Some Corinthians have embraced Greek philosophy and concluded that the body is inherently evil, unworthy of resurrection. Only the soul matters, they believe. Paul vigorously corrects this error. The resurrection is not fantasy. It is history. Christ rose. And because He rose, His followers will rise too. Our salvation is not escape from the body but redemption of the body.',
    'This chapter contains the most thorough teaching on resurrection in Scripture. It moves from the historical fact—Christ&apos;s resurrection—to the theological meaning—death defeated, creation renewed, God victorious. It concludes with the cry of triumph: &quot;O death, where is thy sting? O grave, where is thy victory?&quot;',
  ],

  sections: [
    {
      ref: '1 Corinthians 15:1–11',
      title: 'The Gospel: Death, Burial, Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand;'),
            plain(3, 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures;'),
            plain(4, 'And that he was buried, and that he rose again the third day according to the scriptures:'),
            plain(5, 'And that he was seen of Cephas, then of the twelve:'),
            plain(8, 'And last of all he was seen of me also, as of one born out of due time.'),
            plain(11, 'Therefore whether it were I or they, so we preach, and so ye believed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-1-gospel',
          html:
            'Paul speaks of &quot;the gospel which I preached unto you.&quot; The gospel is not a philosophy. It is a historical proclamation rooted in events: Christ died, was buried, rose. These are not spiritual truths to be reinterpreted. They are facts that happened.',
        },
        {
          kind: 'greek',
          id: 'cor15-1-anastasis',
          title: 'Anastasis — Resurrection',
          script: 'ἀνάστασις',
          translit: '<strong>Anastasis</strong> · resurrection; standing up again; rising from the dead',
          description:
            'Anastasis is not metaphor but literal rising from the dead. Christ did not merely remain as a spiritual presence. He rose bodily, tangibly, so that He could be seen and touched.',
        },
        {
          kind: 'commentary',
          id: 'cor15-1-witnesses',
          html:
            'Paul recounts witnesses: Cephas, the twelve, over five hundred believers at once, James, all the apostles, and finally Paul himself. These are not visions or spiritual experiences. They are appearances—encounters with the risen Christ in bodily form.',
        },
        {
          kind: 'christ',
          id: 'cor15-1-christ-risen',
          title: 'Christ Connection — Christ Is Risen',
          html:
            'The core of the gospel: Christ died for our sins and rose from the dead. His resurrection is not the end of the story. It is the beginning—the vindication of His person, the defeat of death, the opening of the way to eternal life.',
        },
        {
          kind: 'carry',
          html:
            'Your faith rests on this foundation: Christ rose from the dead. Not as a metaphor. Not as a spiritual ideal. As a historical reality. This is not something to be ashamed of. It is the power of God. Stand on it. Preach it. Live as though it is true, because it is.',
        },
        {
          kind: 'reflection',
          id: 'cor15-1-risen',
          prompt: 'What does it mean to you personally that Christ rose from the dead? How does this reality transform your understanding of death, loss, and hope?',
        },
      ],
    },

    {
      ref: '1 Corinthians 15:50–58',
      title: 'Victory Over Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(50, 'Now this I say, brethren, that flesh and blood cannot inherit the kingdom of God; neither doth corruption inherit incorruption.'),
            plain(51, 'Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed,'),
            plain(52, 'In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.'),
            plain(54, 'So when this corruptible shall have put on incorruption, and this mortal shall have put on immortality, then shall be brought to pass the saying that is written, Death is swallowed up in victory.'),
            plain(55, 'O death, where is thy sting? O grave, where is thy victory?'),
            plain(57, 'But thanks be to God, which giveth us the victory through our Lord Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-2-mystery',
          html:
            'Paul calls the transformation of mortal to immortal a &quot;mystery.&quot; In a moment, in the twinkling of an eye, death is defeated. Not through human effort or achievement, but through the power of Christ&apos;s resurrection working out its full effect.',
        },
        {
          kind: 'greek',
          id: 'cor15-2-allasso',
          title: 'Allasso — To Change; To Transform',
          script: 'ἀλλάσσω',
          translit: '<strong>Allasso</strong> · to change; to exchange; to transform',
          description:
            'We shall be &quot;allasso&quot;—changed, transformed. Not annihilated, but transformed. The body that dies will be raised imperishable. The mortal will put on immortality.',
        },
        {
          kind: 'commentary',
          id: 'cor15-2-victory',
          html:
            '&quot;Death is swallowed up in victory. O death, where is thy sting?&quot; Paul borrows language from Hosea to express the triumph. Death is not merely defeated. It is consumed. It has no power anymore. The grave has no victory.',
        },
        {
          kind: 'christ',
          id: 'cor15-2-christ-victory',
          title: 'Christ Connection — Christ Gives Us Victory',
          html:
            'The victory is not ours. It is Christ&apos;s. &quot;Thanks be to God, which giveth us the victory through our Lord Jesus Christ.&quot; We triumph because He triumphed. We overcome because He overcame.',
        },
        {
          kind: 'carry',
          html:
            'Death is real. Grief is real. Loss is real. But death has been defeated. You need not fear it. You need not despair. Trust in the resurrection. Your body—your whole self—will be raised and transformed. This is your hope.',
        },
        {
          kind: 'reflection',
          id: 'cor15-2-sting',
          prompt: 'What does it mean to you that death has no sting, that the grave has no victory? How does this hope change the way you face suffering and death?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O death, where is thy sting? O grave, where is thy victory? But thanks be to God, which giveth us the victory through our Lord Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 15 · Study Guide',
  },

  hasHebrew: false,
};
