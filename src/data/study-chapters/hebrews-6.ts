import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_6: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 6,

  intros: [
    'The author warns against apostasy—those who have tasted the heavenly gift, become partakers of the Spirit, tasted the good word of God and the powers of the world to come, only to fall away. Such a fall is severe. Yet the passage also offers hope: God is not unjust to forget your work and love. The anchor of the soul—hope—is secure because it is fastened to Christ within the veil.',
    'The passage emphasizes the unchanging nature of God&apos;s promise. He swore an oath. This oath cannot be altered. Your hope is built not on your performance but on God&apos;s unalterable commitment.',
  ],

  sections: [
    {
      ref: 'Hebrews 6:1–8',
      title: 'Apostasy and Its Danger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God,'),
            plain(4, 'For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost,'),
            plain(5, 'And have tasted the good word of God, and the powers of the world to come,'),
            plain(6, 'If they shall fall away, to renew them again unto repentance; seeing they crucify to themselves the Son of God afresh, and put him to an open shame.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb6-fall-away',
          html:
            'The author is not describing momentary doubt or struggle. He is describing deliberate apostasy—a turning away from what has been clearly revealed. One who has been enlightened—who has seen and known the truth—and then refuses it has made a final break.',
        },
        {
          kind: 'greek',
          id: 'heb6-geuomai',
          title: 'Geuomai — Taste',
          script: 'γεύομαι',
          translit: '<strong>Geuomai</strong> · to taste; to experience; to partake of',
          description:
            'To taste is to experience directly. These people have not merely heard about the gospel. They have tasted it. They have experienced the Spirit&apos;s work. They have known God&apos;s power. Their fall is therefore inexcusable.',
        },
        {
          kind: 'commentary',
          id: 'heb6-crucify-afresh',
          html:
            '"They crucify to themselves the Son of God afresh, and put him to an open shame." This is the gravity of apostasy. To turn away from Christ is, in effect, to join those who crucified Him. It is a public denial of His work, a trampling of His blood.',
        },
        {
          kind: 'christ',
          id: 'heb6-christ-shame',
          title: 'Christ Connection — His Shame and Our Shame',
          html:
            'To put Christ to open shame is to join the crowd that mocked Him at Calvary. Yet His shame purchased your redemption. His willingness to be shamed was the price of your freedom. To reject this is to reject the very foundation of salvation.',
        },
        {
          kind: 'carry',
          html:
            'Taste and see that the Lord is good. Do not harden your heart against what you have tasted. Do not turn away from the Spirit&apos;s work in your life. Hold fast to what you have known.',
        },
        {
          kind: 'reflection',
          id: 'heb6-taste-see',
          prompt: 'What have you tasted of God&apos;s goodness? What are you tempted to reject? Hold it close.',
        },
      ],
    },

    {
      ref: 'Hebrews 6:9–20',
      title: 'The Anchor of the Soul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(9, 'But, beloved, we are persuaded better things of you, and things that accompany salvation, though we thus speak.'),
            plain(10, 'For God is not unrighteous to forget your work and labour of love, which ye have shewed toward his name, in that ye have ministered to the saints, and do minister.'),
            plain(11, 'And we desire that every one of you do shew the same diligence to the full assurance of hope unto the end;'),
            plain(18, 'That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us:'),
            plain(19, 'Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb6-beloved',
          html:
            'After the severe warning, the author softens. "But, beloved, we are persuaded better things of you." He trusts his readers. He knows they are not apostates. They are struggling believers whom he loves.',
        },
        {
          kind: 'greek',
          id: 'heb6-agkura',
          title: 'Agkura — Anchor',
          script: 'ἄγκυρα',
          translit: '<strong>Agkura</strong> · anchor; that which holds fast; steadying force',
          description:
            'An anchor holds a ship in place when waves threaten. Hope is such an anchor for the soul—it stabilizes, steadies, prevents drifting into despair. And this hope is "sure and stedfast," not because of your constancy, but because it is fixed to Christ.',
        },
        {
          kind: 'commentary',
          id: 'heb6-within-veil',
          html:
            '"Which entereth into that within the veil." Your hope reaches beyond the visible world, into the very sanctuary of God where Christ sits. It is not a fragile hope dependent on circumstances. It is rooted in the unshakable reality of Christ&apos;s presence in heaven.',
        },
        {
          kind: 'christ',
          id: 'heb6-christ-anchor',
          title: 'Christ Connection — Our Forerunner',
          html:
            'Jesus has gone before you—He entered within the veil. He is your forerunner. Your hope follows Him. You are tethered to Him. Nothing can break that anchor. Storms may come. Doubts may arise. But your anchor is sure.',
        },
        {
          kind: 'carry',
          html:
            'When life is turbulent, when you are drifting, remember: your hope has an anchor. It reaches into heaven. It is fastened to Christ. Be diligent. Be faithful. But not because salvation depends on your effort. Because you are secure in Christ, you can run the race without fear.',
        },
        {
          kind: 'reflection',
          id: 'heb6-anchor',
          prompt: 'What storm is threatening your faith? How does the anchor of hope in Christ steady you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil; Where the forerunner is for us entered, even Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 6 · Study Guide',
  },

  hasHebrew: false,
};
