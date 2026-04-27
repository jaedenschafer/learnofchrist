import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 11 — Head Coverings and the Lord&apos;s Supper
 *
 * Paul addresses worship practices and, most importantly, the proper manner of
 * observing the Lord&apos;s Supper. He rebukes the Corinthians for divisions at the
 * table and for approaching the meal with the wrong spirit. The Supper is not a
 * social meal. It is a commemoration of Christ&apos;s death and a covenant meal.
 */
export const FIRST_CORINTHIANS_11: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 11,

  intros: [
    'The Lord&apos;s Supper is the central act of Christian worship, yet the Corinthians have turned it into a scandal. The wealthy eat and drink their fill while the poor go hungry. Some are getting drunk. The meal has become not a commemoration of Christ&apos;s sacrifice but an occasion for selfishness and division. Paul must restore the meaning and dignity of this sacred act.',
    'In the words of institution—&quot;This do in remembrance of me&quot;—Jesus established a meal of memory and covenant. To eat and drink in an unworthy manner, without discerning the body and blood of Christ, is to bring judgment upon yourself. Paul&apos;s correction is aimed at restoring both reverence and right community to the table.',
  ],

  sections: [
    {
      ref: '1 Corinthians 11:17–26',
      title: 'Divisions at the Supper; The Words of Institution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(17, 'Now in this that I declare unto you I praise you not, that ye come together not for the better, but for the worse.'),
            plain(20, 'When ye come together therefore into one place, this is not to eat the Lord&apos;s supper.'),
            plain(23, 'For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread:'),
            plain(24, 'And when he had given thanks, he brake it, and said, Take, eat: this is my body, which is broken for you: this do in remembrance of me.'),
            plain(25, 'After the same manner also he took the cup, when he had supped, saying, This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me.'),
            plain(26, 'For as often as ye eat this bread, and drink this cup, ye do shew the Lord&apos;s death till he come.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-1-divisions',
          html:
            'Paul cannot praise them. When they come together, it is &quot;not for the better, but for the worse.&quot; The divisions they bring are so severe that what they do &quot;is not to eat the Lord&apos;s supper.&quot; They have the form, but they have lost the substance.',
        },
        {
          kind: 'greek',
          id: 'cor11-1-kataggelo',
          title: 'Katengello — To Proclaim; To Declare',
          script: 'κατεγγέλλω',
          translit: '<strong>Katengello</strong> · to proclaim; to declare; to display',
          description:
            'Every time believers eat the bread and drink the cup, they &quot;katengello&quot;—proclaim, display—the Lord&apos;s death. The Supper is not a private ritual. It is a public declaration of faith.',
        },
        {
          kind: 'commentary',
          id: 'cor11-1-institution',
          html:
            'Paul preserves for us the words of institution as they were delivered to him by Christ. In the night He was betrayed, Jesus took bread, gave thanks, broke it, and said: &quot;This is my body, which is broken for you.&quot; Then the cup: &quot;This is the new testament in my blood.&quot; The Supper points always to the cross.',
        },
        {
          kind: 'christ',
          id: 'cor11-1-christ-supper',
          title: 'Christ Connection — Do This in Remembrance of Me',
          html:
            'Every element of the Supper points to Christ. The bread broken is His body offered for us. The wine poured is His blood shed for covenant. To partake is to acknowledge our complete dependence on His sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'When you come to the Lord&apos;s table, come with reverence. Remember what the meal commemorates—the death of Christ for your sins. Do not let selfishness, pride, or division mar the meaning of the meal. Examine your heart. Come worthy of the One you are remembering.',
        },
        {
          kind: 'reflection',
          id: 'cor11-1-remembrance',
          prompt: 'What does it mean to eat &quot;in remembrance&quot; of Christ? What are you truly commemorating when you partake?',
        },
      ],
    },

    {
      ref: '1 Corinthians 11:27–34',
      title: 'Eating and Drinking Unworthily',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(27, 'Wherefore whosoever shall eat this bread, and drink this cup of the Lord, unworthily, shall be guilty of the body and blood of the Lord.'),
            plain(28, 'But let a man examine himself, and so let him eat of that bread, and drink of that cup.'),
            plain(29, 'For he that eateth and drinketh unworthily, eateth and drinketh damnation to himself, not discerning the Lord&apos;s body.'),
            plain(30, 'For this cause many are weak and sickly among you, and many sleep.'),
            plain(31, 'For if we would judge ourselves, we should not be judged.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-2-unworthy',
          html:
            'Paul speaks with gravity: to eat and drink &quot;unworthily&quot; is to be &quot;guilty of the body and blood of the Lord.&quot; This does not mean one must be sinless to partake. It means one must approach with reverence, with self-examination, with an understanding of what the meal represents.',
        },
        {
          kind: 'greek',
          id: 'cor11-2-anapekritus',
          title: 'Anapekritus — Without Discernment; Unfit',
          script: 'ἀναπέκριτος',
          translit: '<strong>Anapekritus</strong> · without discernment; without distinguishing the value of something',
          description:
            'To eat unworthily is to fail to discern the Lord&apos;s body—to treat the Supper as though it were merely bread and wine, missing its profound significance.',
        },
        {
          kind: 'commentary',
          id: 'cor11-2-examine',
          html:
            '&quot;Let a man examine himself.&quot; Before partaking, Paul calls for introspection. Not perfectionism—not waiting until you are sinless—but honest assessment. Are you approaching the table with the right spirit? Are you honoring the death of Christ that the meal commemorates?',
        },
        {
          kind: 'christ',
          id: 'cor11-2-christ-body',
          title: 'Christ Connection — Discerning the Lord&apos;s Body',
          html:
            'The phrase &quot;discerning the Lord&apos;s body&quot; points both to the bread and to the church. To recognize Christ&apos;s body is to see His presence both in the bread and in the gathered community.',
        },
        {
          kind: 'carry',
          html:
            'Paul says: &quot;If we would judge ourselves, we should not be judged.&quot; Self-examination is not morbid. It is wise. It protects you from judgment. Before the Supper, pause. Confess any sin. Renew your commitment to Christ. Prepare your heart to meet Him at the table.',
        },
        {
          kind: 'reflection',
          id: 'cor11-2-examine-self',
          prompt: 'What does genuine self-examination look like for you before partaking of the Supper? What barriers might exist between you and wholehearted participation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For as often as ye eat this bread, and drink this cup, ye do shew the Lord&apos;s death till he come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 11 · Study Guide',
  },

  hasHebrew: false,
};
