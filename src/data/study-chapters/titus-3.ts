import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Titus 3 — Saved by Mercy, Not Works
 *
 * Paul brings his letter to Crete to a close. He reminds Titus that believers
 * were not saved by their own works but by God&apos;s mercy and the renewing of the
 * Holy Spirit. This truth is not merely doctrinal. It humbles believers, frees
 * them from self-righteousness, and calls them to maintain good works not as
 * condition of salvation but as fruit of gratitude. Divisive people are to be
 * rejected. Heretical teachers are to be avoided. The church is called to purity
 * and unity.
 */
export const TITUS_3: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 3,

  intros: [
    'Paul has left instructions throughout the letter. But now he reaches bedrock. Believers are not saved because they are good, not because they have earned God&apos;s favor. They are saved because God showed mercy. This doctrine must reshape the church&apos;s stance toward the world, toward the unbelieving, toward each other.',
    'The book closes with warnings about divisive people and stern words about heretical teachers. Yet the overall tone is redemptive. The gospel is grace. Those who have received that grace are to embody it—generous in spirit, generous in judgment, maintaining good works as evidence of the renewal that happened within them.',
  ],

  sections: [
    /* ─── Titus 3:1–7 — Not by Works, But by Grace ────────────────────── */
    {
      ref: 'Titus 3:1–7',
      title: 'Saved by Mercy and Renewal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Put them in mind to be subject to principalities and powers, to obey magistrates, to be ready to every good work,'),
            plain(2, 'To speak evil of no man, to be no brawlers, but gentle, shewing all meekness unto all men.'),
            plain(3, 'For we ourselves also were sometimes foolish, disobedient, deceived, serving divers lusts and pleasures, living in malice and envy, hateful, and hating one another.'),
            plain(4, 'But after that the kindness and love of God our Saviour toward man appeared,'),
            plain(5, 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;'),
            plain(7, 'That being justified by his grace, we should be made heirs according to the hope of eternal life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-obedience',
          html:
            'Paul begins with practical exhortation: obey magistrates, be ready for good works, refrain from evil speaking, be gentle. These are not added on to the gospel. They are the gospel working itself out. A believer in submission to Christ will also be subject to civil order, generous in good deeds, temperate in speech.',
        },
        {
          kind: 'greek',
          id: 'tit3-palingenesia',
          title: 'Palingenesia — Regeneration',
          script: 'παλιγγενεσία',
          translit: '<strong>Palingenesia</strong> · regeneration; rebirth; renewal',
          description:
            'The word suggests being born again, made new. This is not cosmetic change. It is fundamental transformation. An old self is washed away in baptism. A new self emerges, animated by the Holy Spirit. This radical renewal justifies the radical change in conduct.',
        },
        {
          kind: 'commentary',
          id: 'tit3-were-foolish',
          html:
            '"For we ourselves also were sometimes foolish, disobedient, deceived." Paul includes himself. This is humbling. Not "they were foolish but we were always wise." But "we too were once in darkness." This memory, held fresh, keeps a believer humble. You are not saved because you were inherently good. You are saved because God was merciful.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-kindness',
          title: 'Christ Connection — The Kindness That Saves',
          html:
            'Jesus is "the kindness and love of God our Saviour toward man." Kindness is not weakness. It is the attribute of a strong God who chooses grace over judgment, mercy over condemnation. This kindness appeared in the incarnation. It appears now in the gospel. It will appear finally in His coming.',
        },
        {
          kind: 'carry',
          html:
            'You were not saved by your works. This is freedom. It means your salvation does not rest on your performance. It means you cannot lose it through failure. But it also means you cannot boast. All glory belongs to God. How does this knowledge reshape your attitude toward those who are not yet believers? Toward those who are struggling in faith?',
        },
        {
          kind: 'reflection',
          id: 'tit3-mercy',
          prompt: 'How does remembering that you were saved by mercy rather than works change how you treat others? Where are you most tempted to judge instead of extend grace?',
        },
      ],
    },

    /* ─── Titus 3:8–15 — Good Works and Heresy ──────────────────────── */
    {
      ref: 'Titus 3:8–15',
      title: 'Maintain Good Works and Avoid Heresy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(8, 'This is a faithful saying, and these things I will that thou affirm constantly, that they which have believed in God might be careful to maintain good works. These things are good and profitable unto men.'),
            plain(9, 'But avoid foolish questions, and genealogies, and contentions, and strivings about the law; for they are unprofitable and vain.'),
            plain(10, 'A man that is an heretick after the first and second admonition reject;'),
            plain(11, 'Knowing that he that is such is subverted, and sinneth, being condemned of himself.'),
            plain(14, 'And let ours also learn to maintain good works for necessary uses, that they be not unfruitful.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-good-works',
          html:
            '"They which have believed in God might be careful to maintain good works." Paul does not contradict himself. Salvation is by grace, not works. But grace produces works. A person saved by mercy cannot remain indifferent to the needy. Good works are the inevitable fruit of a grateful heart.',
        },
        {
          kind: 'greek',
          id: 'tit3-hairetikos',
          title: 'Hairetikos — Heretic, Factious',
          script: 'αἱρετικός',
          translit: '<strong>Hairetikos</strong> · heretical; factious; causing division through opinion',
          description:
            'A heretic is not merely wrong. He is divisive. He uses false teaching to create factions. He leads people away from the gospel. After fair warning—admonition twice—such a person is to be rejected. This is not cruelty. It is protection of the flock.',
        },
        {
          kind: 'commentary',
          id: 'tit3-condemned-himself',
          html:
            '"Being condemned of himself." The heretic condemns himself. His own conscience, if he possessed a clear one, would convict him. But he persists. He is "subverted"—his judgment is corrupted. Titus is not to endlessly debate with such a person. That is futile. At some point, rejection becomes the only kind response.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-fruitfulness',
          title: 'Christ Connection — Bearing Fruit',
          html:
            'Jesus said, "By this shall all men know that ye are my disciples, if ye have love one to another." A believer\'s faithfulness is measured not just by doctrine but by fruitfulness—by whether the gospel produces love, generosity, good works. A person saved by Christ cannot remain indifferent to human suffering.',
        },
        {
          kind: 'carry',
          html:
            'Do you maintain good works? Not as a burden or to earn favor, but as the natural expression of a grateful heart? And do you guard against unprofitable controversies? It is easy to get caught in endless debates while neglecting mercy. Ask yourself: does this discussion lead to love, to fruitfulness, to the kingdom? If not, let it go.',
        },
        {
          kind: 'reflection',
          id: 'tit3-fruit',
          prompt: 'What good works are you being called to maintain right now? Where are you caught in unprofitable talk instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost. Maintain good works for necessary uses, that they be not unfruitful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 3 · Study Guide',
  },

  hasHebrew: false,
};
