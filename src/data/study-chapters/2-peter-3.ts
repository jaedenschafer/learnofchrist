import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Peter 3 — The Day of the Lord
 *
 * Peter writes to beloved readers, stirring up their pure mind by way of remembrance.
 * Scoffers will come saying, "Where is the promise of his coming?" They forget that
 * in the Lord&apos;s reckoning, a day is a thousand years. The day of the Lord will come
 * as a thief. The heavens will pass away with a great noise, and the elements will
 * melt with fervent heat. But we look for new heavens and a new earth. Meanwhile, grow
 * in grace and knowledge of our Lord and Saviour Jesus Christ.
 */
export const SECOND_PETER_3: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 3,

  intros: [
    'Peter closes his epistle with an eschatological vision. Some will mock the promise of Christ&apos;s return, claiming it has failed or will never happen. But Peter insists: God operates on a different timescale. A thousand years are as a day in His reckoning. His apparent delay is not weakness or indifference. It is patience. He is giving all time to repent.',
    'When He comes, it will be sudden and transformative. The heavens will be unmade. The earth will be burned up. Yet this is not pointless destruction. It is preparation for new creation—new heavens and new earth wherein dwells righteousness. This hope should shape how believers live now, in eager anticipation of that day.',
  ],

  sections: [
    /* ─── 2 Peter 3:1–12 — The Day of the Lord ────────────────────── */
    {
      ref: '2 Peter 3:1–12',
      title: 'The Coming Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(2, 'That ye may be mindful of the words which were spoken before by the holy prophets, and of the commandment of us the apostles of the Lord and Saviour:'),
            plain(3, 'Knowing this first, that there shall come in the last days scoffers, walking after their own lusts;'),
            plain(4, 'And saying, Where is the promise of his coming? for since the fathers fell asleep, all things continue as they were from the beginning of the creation.'),
            plain(8, 'But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.'),
            plain(9, 'The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.'),
            plain(10, 'But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet3-scoffers',
          html:
            'Peter acknowledges that scoffers will come. They will mock the promise of Christ&apos;s return. They will point to the delay—centuries have passed, and the world continues as it always has. Where is this promised coming? Such scoffing comes from those who walk after their own lusts, who find the promise of judgment uncomfortable.',
        },
        {
          kind: 'greek',
          id: '2pet3-empaiktai',
          title: 'Empaiktai — Scoffers',
          script: 'ἐμπαῖκται',
          translit: '<strong>Empaiktai</strong> · mockers; scoffers; those who ridicule',
          description:
            'Scoffers do not argue rationally. They mock. They ridicule. This is a way of dismissing claims without engaging them seriously. Peter does not defend against scoffing; he simply acknowledges it will occur.',
        },
        {
          kind: 'commentary',
          id: '2pet3-timescale',
          html:
            'Peter offers a crucial insight: with God, a thousand years are as a day. The apparent delay is not a failure. God operates on an eternal timescale. His patience is not weakness but mercy—giving all time to repent before judgment comes. He is longsuffering, not willing that any should perish. The delay serves a purpose: the extension of mercy.',
        },
        {
          kind: 'christ',
          id: '2pet3-christ-thief',
          title: 'Christ Connection — He Comes as a Thief',
          html:
            'Christ will come unexpectedly, like a thief in the night. No one will predict the hour. But for believers who are watchful, His coming is not surprise but fulfillment of promise. And when He comes, all the works of the world will be burned up. Only what is eternal will remain.',
        },
        {
          kind: 'carry',
          html:
            'The imagery is cosmic and transformative. The heavens—the visible sky—will pass away with a great noise. The elements will melt with heat. The earth and all human works built upon it will be burned up. This is not metaphor but real transformation. Yet it is not annihilation of all value. It is preparation for what is to come.',
        },
        {
          kind: 'reflection',
          id: '2pet3-coming',
          prompt: 'How does the promise of Christ&apos;s return shape the way you live now? What matters eternally, and what is temporary?',
        },
      ],
    },

    /* ─── 2 Peter 3:13–18 — New Creation & Growth ────────────────────── */
    {
      ref: '2 Peter 3:13–18',
      title: 'New Heavens & New Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.'),
            plain(14, 'Wherefore, beloved, seeing that ye look for such things, be diligent that ye may be found of him in peace, without spot, and blameless.'),
            plain(15, 'And account that the longsuffering of our Lord is salvation; as our beloved brother Paul also wrote unto you;'),
            plain(17, 'Ye therefore, beloved, knowing these things before, beware lest ye also, being led away with the error of the wicked, fall from your own stedfastness.'),
            plain(18, 'But grow in grace and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet3-new-earth',
          html:
            'Peter speaks of hope: new heavens and new earth wherein dwelleth righteousness. This is not escape from creation but transformation of it. God&apos;s purposes are not to destroy but to redeem. The created order will be renewed, and righteousness—right relationship, justice, peace—will be established fully. This is the Christian&apos;s ultimate hope.',
        },
        {
          kind: 'greek',
          id: '2pet3-dikaiosyne',
          title: 'Dikaiosyne — Righteousness',
          script: 'δικαιοσύνη',
          translit: '<strong>Dikaiosyne</strong> · righteousness; justice; right relationship with God and others',
          description:
            'Righteousness is not punishment but restoration—the establishment of right order. In the new creation, righteousness dwells. Justice is fulfilled. Suffering is ended. God&apos;s purposes are complete.',
        },
        {
          kind: 'commentary',
          id: '2pet3-diligent',
          html:
            'Knowing these things, believers are to be diligent. Be found of Him in peace, without spot, blameless. This is not about earning salvation through works, but about living in such a way that when He comes, you are not ashamed. Your life reflects His character. Your conduct is governed by the knowledge of what is coming.',
        },
        {
          kind: 'christ',
          id: '2pet3-christ-knowledge',
          title: 'Christ Connection — Growing in Him',
          html:
            'Peter closes with an exhortation to grow in grace and in the knowledge of Jesus Christ. This is not intellectual knowledge alone, but intimate acquaintance—knowing Him, walking with Him, being transformed by Him. As we grow, we become more like Him, more prepared for the day when we shall see Him face to face.',
        },
        {
          kind: 'carry',
          html:
            'The final word is doxology: "To him be glory both now and for ever." All glory belongs to Christ. He is before all things. He upholds all things. He will consummate all things. Our response is worship, thanksgiving, obedience, and growth in His grace. This is the Christian life: to grow in grace and knowledge until He comes.',
        },
        {
          kind: 'reflection',
          id: '2pet3-growth',
          prompt: 'In what areas of your faith do you most need to grow? How might you grow in grace and knowledge of Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We look for new heavens and a new earth, wherein dwelleth righteousness. The Lord is not slack concerning his promise, but is longsuffering. Grow in grace and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 3 · Study Guide',
  },

  hasHebrew: false,
};
