import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 10 — Israel&apos;s Wilderness: A Warning
 *
 * Paul recounts Israel&apos;s journey through the wilderness as a warning to the
 * Corinthians. Israel was baptized in the cloud and the sea, ate spiritual food,
 * drank spiritual drink. Yet most of them perished in the wilderness because of
 * idolatry and immorality. The lesson: privilege does not guarantee persistence.
 */
export const FIRST_CORINTHIANS_10: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 10,

  intros: [
    'The Corinthians are confident in their standing. They have been baptized. They partake of the Lord&apos;s Supper. They have the Holy Spirit. But confidence can become complacency. Paul turns to Israel&apos;s history to remind them: the church has been given even greater privileges than Israel, yet the same dangers lurk. Idolatry, sexual immorality, complaining against God—these brought down Israel in the wilderness. They can bring down the church too.',
    'Paul&apos;s purpose is not to terrify but to awaken. He wants the Corinthians to stand firm, to resist temptation, to remain faithful. The way of escape is always available to those who call upon God. But the way of disobedience leads to judgment, as surely for the church as it did for Israel.',
  ],

  sections: [
    {
      ref: '1 Corinthians 10:1–13',
      title: 'Israel&apos;s Pattern and Our Escape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Moreover, brethren, I would not that ye should be ignorant, how that all our fathers were under the cloud, and all passed through the sea;'),
            plain(2, 'And were all baptized unto Moses in the cloud and in the sea;'),
            plain(3, 'And did all eat the same spiritual meat;'),
            plain(4, 'And did all drink the same spiritual drink: for they drank of that spiritual Rock that followed them: and that Rock was Christ.'),
            plain(11, 'Now all these things happened unto them for ensamples: but they are written for our admonition, upon whom the ends of the world are come.'),
            plain(13, 'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-1-baptized',
          html:
            'Paul describes Israel&apos;s privileges: they were baptized in the cloud and the sea—signifying God&apos;s salvation and protection. They ate spiritual food—the manna from heaven. They drank spiritual drink from a rock. Most strikingly, &quot;that Rock was Christ.&quot; Even in the Old Testament, Christ was present, sustaining His people.',
        },
        {
          kind: 'greek',
          id: 'cor10-1-petra',
          title: 'Petra — Rock',
          script: 'πέτρα',
          translit: '<strong>Petra</strong> · rock; stone; foundation',
          description:
            'The petra from which Israel drank was not merely a rock. It was Christ Himself, the rock of salvation. This identification points forward to the New Testament truth that Christ is the foundation of all God&apos;s work.',
        },
        {
          kind: 'commentary',
          id: 'cor10-1-ensamples',
          html:
            '&quot;All these things happened unto them for ensamples.&quot; Israel&apos;s history is not merely narrative. It is instruction. Their failure is meant to teach the church. Their disobedience, their judgment—these are written &quot;for our admonition.&quot;',
        },
        {
          kind: 'christ',
          id: 'cor10-1-christ-rock',
          title: 'Christ Connection — Christ Is Our Rock',
          html:
            'Christ, the rock that followed Israel, is also the rock upon which the church is built. The same Christ who sustained Israel in the wilderness sustains the church. We partake of the same Christ through baptism and the Lord&apos;s Supper.',
        },
        {
          kind: 'carry',
          html:
            'When temptation comes, know that it is &quot;common to man.&quot; You are not facing anything unprecedented. God is faithful. He will not let you be tempted beyond your capacity. He provides a way of escape. But you must take it. You must choose obedience.',
        },
        {
          kind: 'reflection',
          id: 'cor10-1-escape',
          prompt: 'What temptation are you currently facing? Where is God showing you &quot;a way to escape&quot;? Are you taking it?',
        },
      ],
    },

    {
      ref: '1 Corinthians 10:14–33',
      title: 'Separation from Idolatry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(14, 'Wherefore, my dearly beloved, flee from idolatry.'),
            plain(16, 'The cup of blessing which we bless, is it not the communion of the blood of Christ? The bread which we break, is it not the communion of the body of Christ?'),
            plain(17, 'For we being many are one bread, and one body: for we are all partakers of that one bread.'),
            plain(23, 'All things are lawful for me, but all things are not expedient: all things are lawful for me, but all things edify not.'),
            plain(31, 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-2-flee',
          html:
            '&quot;Flee from idolatry.&quot; This is not a gentle suggestion. It is an urgent command. The issue is not mere consumption of meat. It is loyalty. To participate in idolatrous feasts, even nominally, is to make a statement about your allegiance.',
        },
        {
          kind: 'greek',
          id: 'cor10-2-koinonia',
          title: 'Koinonia — Communion; Participation',
          script: 'κοινωνία',
          translit: '<strong>Koinonia</strong> · communion; fellowship; sharing in',
          description:
            'When you partake of the Lord&apos;s Supper, you enter into koinonia—true communion—with Christ. His blood, His body, are not merely symbols. They are the reality of your covenant with Him. To then participate in idolatrous worship violates that exclusive covenant.',
        },
        {
          kind: 'commentary',
          id: 'cor10-2-one-bread',
          html:
            'All believers, though many, are one bread and one body. This is the foundation of community. It is also the basis for calling one another away from idolatry. You cannot be in true communion with Christ and simultaneously participate in false worship.',
        },
        {
          kind: 'christ',
          id: 'cor10-2-christ-communion',
          title: 'Christ Connection — One Body in Christ',
          html:
            'The Lord&apos;s Supper is not a private experience. It is corporate. You are united not just to Christ but to every other believer. Your choices affect the whole body.',
        },
        {
          kind: 'carry',
          html:
            'Everything you do—eating, drinking, any action—should be done to the glory of God. This is the standard. Not &quot;Is it legal?&quot; but &quot;Does it glorify God? Does it build up the body?&quot; Let that standard guide your choices.',
        },
        {
          kind: 'reflection',
          id: 'cor10-2-glory',
          prompt: 'Where in your life are you compromising your allegiance to Christ through small choices? What would it mean to do &quot;all to the glory of God&quot;?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 10 · Study Guide',
  },

  hasHebrew: false,
};
