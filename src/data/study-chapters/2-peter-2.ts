import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Peter 2 — False Teachers & Their Judgment
 *
 * Peter warns of false teachers who will arise—denying the Lord who bought them,
 * introducing destructive heresies, leading many astray through lasciviousness.
 * They promise freedom but are slaves to corruption. Yet God does not leave sin
 * unjudged. The righteous are delivered from temptation; the unjust are reserved
 * for punishment. Their judgment lingers not, and their damnation slumbers not.
 */
export const SECOND_PETER_2: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 2,

  intros: [
    'Peter turns from encouragement to warning. False prophets arose in Israel, and false teachers will arise in the church. They do not openly deny Christ, but they subtly distort the gospel. They promise freedom but enslave people to lust. They accumulate wealth through deception. They deny the Lord who purchased them with His blood.',
    'Yet God is not indifferent to such corruption. Peter recalls how God judged Sodom and Gomorrah, saved Noah and his family from the flood, and knows how to deliver the righteous while reserving the unjust for punishment. The judgment may seem to tarry, but it will surely come. There is both comfort and terror in this: comfort for the faithful, terror for those who persist in denying Christ.',
  ],

  sections: [
    /* ─── 2 Peter 2:1–16 — False Teachers ──────────────────────────── */
    {
      ref: '2 Peter 2:1–16',
      title: 'Destructive Heresies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction.'),
            plain(2, 'And many shall follow their pernicious ways; by reason of whom the way of truth shall be evil spoken of.'),
            plain(3, 'And through covetousness shall they with feigned words make merchandise of you: whose judgment now of a long time lingereth not, and their damnation slumbereth not.'),
            plain(12, 'But these, as natural brute beasts, made to be taken and destroyed, speak evil of the things that they understand not; and shall utterly perish in their own corruption;'),
            plain(14, 'Having eyes full of adultery, and that cannot cease from sin; beguiling unstable souls: an heart they have exercised with covetous practices; cursed children:'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet2-false-teachers',
          html:
            'Peter warns that false teachers will arise within the church. They do not openly attack Christ, but they deny Him in practice—by denying the power of His death and resurrection, by encouraging abandonment of moral constraint, by teaching that grace frees us from accountability. Such teaching brings swift destruction. It appears profitable for a time, but it leads to ruin.',
        },
        {
          kind: 'greek',
          id: '2pet2-hairesis',
          title: 'Hairesis — Heresy',
          script: 'αἵρεσις',
          translit: '<strong>Hairesis</strong> · heresy; a sect; a party; a division; a false doctrine',
          description:
            'A heresy is not merely wrong opinion but a teaching that divides the body, that seduces believers away from truth, that contradicts the essential gospel. It is destructive—it damages both the individuals who embrace it and the community of faith.',
        },
        {
          kind: 'commentary',
          id: '2pet2-judgment',
          html:
            'Peter says the judgment of false teachers "lingers not." This means God&apos;s judgment is not delayed or uncertain. It is swift and sure. Some may appear to prosper for a time, but God sees. He knows. His judgment will come. The false teacher who gains wealth through deception cannot ultimately escape God&apos;s accounting.',
        },
        {
          kind: 'christ',
          id: '2pet2-christ-bought',
          title: 'Christ Connection — Purchased by His Blood',
          html:
            'Peter speaks of the Lord "that bought them." This refers to Christ&apos;s redemptive work. His blood was shed as the price of our freedom. Those who deny Him deny the One who purchased their salvation. This is the gravity of the false teacher&apos;s sin—to reject the One who loved them unto death.',
        },
        {
          kind: 'carry',
          html:
            'Peter describes the false teachers graphically: natural brute beasts, made to be taken and destroyed. They speak evil of things they do not understand. They are driven by appetites—sexual desire, greed—that they will not master. They entice unstable souls. This is pastoral warning: protect yourself. Do not be drawn in by smooth words and false promises.',
        },
        {
          kind: 'reflection',
          id: '2pet2-discernment',
          prompt: 'How do you recognize false teaching? What anchors your faith against deception?',
        },
      ],
    },

    /* ─── 2 Peter 2:17–22 — Corruption & Judgment ────────────────────── */
    {
      ref: '2 Peter 2:17–22',
      title: 'The Wages of Corruption',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(17, 'These are wells without water, clouds that are carried with a tempest; to whom the mist of darkness is reserved for ever.'),
            plain(19, 'While they promise them liberty, they themselves are the servants of corruption: for of whom a man is overcome, of the same is he brought in bondage.'),
            plain(20, 'For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning.'),
            plain(21, 'For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them.'),
            plain(22, 'But it is happened unto them according to the true proverb, The dog is turned to his own vomit again; and the sow that was washed to her wallowing in the mire.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet2-wells',
          html:
            'Peter uses vivid imagery: wells without water—they promise refreshment but deliver nothing. Clouds carried with a tempest—they seem substantial but are empty and chaotic. The darkness reserved for them is eternal. These are not simply wrong teachers; they are agents of spiritual destruction.',
        },
        {
          kind: 'greek',
          id: '2pet2-douleuo',
          title: 'Douleuo — To Serve',
          script: 'δουλεύω',
          translit: '<strong>Douleuo</strong> · to serve; to be enslaved to; to be subject to',
          description:
            'Peter emphasizes bondage. The false teachers promise freedom—freedom from moral constraint, from judgment, from accountability—but they themselves are slaves. They are enslaved to their passions, to greed, to the corruption they embrace.',
        },
        {
          kind: 'commentary',
          id: '2pet2-worse',
          html:
            'The terrible possibility is this: those who have known the way of righteousness and turn back are in a worse condition than if they had never known it. Knowledge brings responsibility. Rejection of known truth is more serious than rejection of unknown truth. This is not to say there is no forgiveness for apostasy, but to acknowledge the gravity of deliberately turning away.',
        },
        {
          kind: 'christ',
          id: '2pet2-christ-way',
          title: 'Christ Connection — The Way of Righteousness',
          html:
            'Jesus is the way of righteousness. He teaches it. He embodies it. He makes it possible through His grace. To know Christ and to turn back is to reject the One who is the source of all light and truth. This is why Peter speaks with such gravity.',
        },
        {
          kind: 'carry',
          html:
            'Peter ends with a proverb: "The dog is turned to his own vomit again; and the sow that was washed to her wallowing in the mire." This crude image emphasizes the degradation of apostasy. Outward reformation without inward transformation is temporary. When the external constraints are removed, the inner nature expresses itself. True change must be internal, wrought by the Spirit.',
        },
        {
          kind: 'reflection',
          id: '2pet2-turning-back',
          prompt: 'What would it mean to turn away from the gospel after knowing it? What anchors you to faith in Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There shall be false teachers among you, even denying the Lord that bought them. Their judgment lingers not, and their damnation slumbers not. While they promise liberty, they themselves are servants of corruption.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 2 · Study Guide',
  },

  hasHebrew: false,
};
