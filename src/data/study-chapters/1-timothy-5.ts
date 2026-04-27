import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 5 — Care for Widows and Elders
 *
 * Paul gives Timothy pastoral instruction on the care of widows—those most
 * vulnerable in the ancient world. He establishes criteria for who the church
 * formally supports. He also addresses honor due to elders, those who lead
 * and labor in the word. The principle is clear: the church cares for its own,
 * and those who give themselves to ministry deserve sustenance.
 */
export const FIRST_TIMOTHY_5: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 5,

  intros: [
    'In the ancient world, widows had few protections. No welfare systems, no pension. They depended on family or charity. The early church made care of widows a defining practice—an outward sign of inward gospel transformation. Yet Paul brings practical wisdom. Not every request for aid is legitimate. The church must be shrewd about its generosity, making sure resources reach those truly in need.',
    'Paul also elevates the role of elders—those who govern the church and teach. They are worthy of honor and support. Yet standards matter. Not every elder deserves the same wage. Those who labor in preaching and doctrine deserve double honor. This is not about rank. It is about right ordering of a community that values what God values.',
  ],

  sections: [
    /* ─── 1 Timothy 5:1–16 — The Care of Widows ──────────────────────── */
    {
      ref: '1 Timothy 5:1–16',
      title: 'Care for Widows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(3, 'Honour widows that are widows indeed.'),
            plain(4, 'But if any widow have children or nephews, let them learn first to shew piety at home, and to requite their parents: for that is good and acceptable before God.'),
            plain(8, 'But if any provide not for his own, and specially for those of his own house, he hath denied the faith, and is worse than an infidel.'),
            plain(9, 'Let not a widow be taken into the number under threescore years old, having been the wife of one man,'),
            plain(10, 'Well reported of for good works; if she have brought up children, if she have lodged strangers, if she have washed the saints&apos; feet, if she have relieved the afflicted, if she have diligently followed every good work.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-honor-widows',
          html:
            '"Honour widows that are widows indeed." The phrase "widows indeed" distinguishes those truly destitute from those who have other means. Paul is not calling for undiscerning charity but for wisdom in pastoral care. The church&apos;s resources are finite. They must serve those with genuine need, especially those whose husbands&apos; death has left them vulnerable.',
        },
        {
          kind: 'greek',
          id: 'tim5-time',
          title: 'Time — Honour, Respect',
          script: 'τιμή',
          translit: '<strong>Time</strong> · honour; respect; value; dignity',
          description:
            'Time is not sentimental. It is recognition of worth. A widow is honored not because she is pitied but because her long faithfulness, her sufferings, and her service have earned respect. She is seen for who she has become through her trials.',
        },
        {
          kind: 'commentary',
          id: 'tim5-family-first',
          html:
            'Paul establishes a principle: family responsibility comes before church aid. "If any widow have children or nephews, let them learn first to shew piety at home." This is not coldness but proper order. A son who neglects his widowed mother to give offerings to the church has inverted his obligations. Love begins with those closest.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-compassion',
          title: 'Christ Connection — Preferential Care for the Vulnerable',
          html:
            'Jesus in His ministry showed special concern for those society overlooked—the widow, the foreigner, the sick, the poor. He healed on the Sabbath when the law said rest. He touched lepers. A church that follows Him will mirror His compassion, especially toward the defenseless.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s instruction applies beyond widows. It is a call to look after the most vulnerable in your community. But it is also a call to order your own household first. Do your parents or elders feel your care? Do your children know you place family bonds above external duty? This is where Christian love is tested first.',
        },
        {
          kind: 'reflection',
          id: 'tim5-vulnerable',
          prompt: 'Who is vulnerable or overlooked in your circle? What would it look like to "honour" them as Paul describes?',
        },
      ],
    },

    /* ─── 1 Timothy 5:17–25 — Honor Due to Elders ──────────────────── */
    {
      ref: '1 Timothy 5:17–25',
      title: 'Elders Worthy of Double Honour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(17, 'Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine.'),
            plain(18, 'For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn. And, The labourer is worthy of his reward.'),
            plain(19, 'Against an elder receive not an accusation, but before two or three witnesses.'),
            plain(20, 'Them that sin rebuke before all, that others also may fear.'),
            plain(24, 'Some men&apos;s sins are open beforehand, going before to judgment; and some men they follow after.'),
            plain(25, 'Likewise also the good works of some are manifest beforehand; and they that are otherwise cannot be hid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-elders-honour',
          html:
            'Double honor here likely refers to both respect and material support. An elder who rules well deserves both. But special honor is reserved for those "who labour in the word and doctrine"—those who preach and teach. They give themselves to helping the flock understand God&apos;s truth. This labor is worthy of sustenance.',
        },
        {
          kind: 'greek',
          id: 'tim5-kopiao',
          title: 'Kopiao — Labour, Toil',
          script: 'κοπιάω',
          translit: '<strong>Kopiao</strong> · to labour; to toil; to work hard',
          description:
            'This is not easy work. Kopiao implies sweat, exhaustion, effort. Teaching the word, caring for souls, resisting false doctrine—it is wearying. Paul insists that those who do such work should not be forced to support themselves through other labor. They deserve to be sustained by those they serve.',
        },
        {
          kind: 'commentary',
          id: 'tim5-accusation',
          html:
            'Yet Paul protects elders from baseless accusation while protecting the church from corrupt leaders. An accusation against an elder requires two or three witnesses. This prevents slander. But when an elder does sin, he is rebuked publicly so that others fear falling into the same trap. There is no cover-up. There is also no mob justice.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-servant-lord',
          title: 'Christ Connection — The Laborer in the Harvest',
          html:
            'Jesus said, "The labourer is worthy of his reward." He spoke of apostles sent into the harvest. Those who proclaim His gospel, who feed His flock, who hold fast to sound doctrine in the face of opposition—they follow in His footsteps. The church that sustains such workers honors Jesus Himself.',
        },
        {
          kind: 'carry',
          html:
            'Do you support those who teach you? Do you honor them—not just in words but in material care? Conversely, if you are entrusted with teaching, do you labor with integrity? Do you hold yourself to a higher standard? Character is not hidden. Over time, your works—good or ill—become apparent. Build your life so that the truth about you is honorable.',
        },
        {
          kind: 'reflection',
          id: 'tim5-labor',
          prompt: 'Who labors in serving or teaching you? How might you honor them more fully this week?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine. For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 5 · Study Guide',
  },

  hasHebrew: false,
};
