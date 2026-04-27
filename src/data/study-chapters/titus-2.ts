import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Titus 2 — Sound Doctrine Produces Godly Living
 *
 * Paul turns from false teachers to the fruitful life produced by sound doctrine.
 * Older men are to be sober, faithful, patient. Older women are to be reverent,
 * not slanderers, sober, teachers of good things. Young women are to be chaste,
 * keepers of home, good, obedient. Young men are to be sober-minded. And all are
 * to be animated by the appearance of Christ and the hope of eternal glory.
 */
export const TITUS_2: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 2,

  intros: [
    'Paul paints a picture of a healthy church—not a monolith, but a community of different ages and roles, each living out the gospel in their particular calling. Older men are anchors of stability. Older women are mentors of wisdom. Young women are builders of homes. Young men are learning discipline. This is not hierarchy designed to dominate. It is order designed to flourish.',
    'The passage culminates in an eschatological hope: "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ." Every specific instruction is grounded in the expectation of His return. We live now in light of eternity. This reorients priorities. What seemed important becomes trivial. What seemed impossible becomes essential.',
  ],

  sections: [
    /* ─── Titus 2:1–10 — Sound Doctrine for Every Station ────────────── */
    {
      ref: 'Titus 2:1–10',
      title: 'Teach Things Which Become Sound Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'But speak thou the things which become sound doctrine:'),
            plain(2, 'That the aged men be sober, grave, temperate, sound in faith, in charity, in patience.'),
            plain(3, 'The aged women likewise, that they be in behaviour as becometh holiness, not false accusers, not given to much wine, teachers of good things;'),
            plain(4, 'That they may teach the young women to be sober, to love their husbands, to love their children,'),
            plain(6, 'Young men likewise exhort to be sober minded.'),
            plain(9, 'Exhort servants to be obedient unto their own masters, and to please them well in all things; not answering again;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-sound-doctrine',
          html:
            '"Speak thou the things which become sound doctrine." What makes doctrine sound? It is not primarily intellectual rigor, though that matters. It is fruit. Sound doctrine produces sobriety, faith, love, patience, holiness. It bears witness to itself through the lives of those who believe it.',
        },
        {
          kind: 'greek',
          id: 'tit2-semnos',
          title: 'Semnos — Grave, Dignified',
          script: 'σεμνός',
          translit: '<strong>Semnos</strong> · grave; dignified; worthy of respect; serious',
          description:
            'An aged man who is semnos carries weight. He is not merely old. He is dignified—his long experience and tested faith command respect. This is not earned through status but through character. A semnos elder is someone the young naturally look to.',
        },
        {
          kind: 'commentary',
          id: 'tit2-generation-teaching',
          html:
            'Note the pattern: older women "teach the young women." This is not top-down institutional instruction. It is relational transmission. A mother in faith teaches a younger sister. The gospel is passed hand to hand, heart to heart. Titus is to oversee this, but not to replace it.',
        },
        {
          kind: 'christ',
          id: 'tit2-christ-appearance',
          title: 'Christ Connection — Waiting for His Appearing',
          html:
            'All these instructions—to aged men and women, to young women and men, to servants—are framed by eschatological expectation. We live now, but we are not ultimately at home. We are waiting. This transforms how we live. The pressures that seem overwhelming today lose their grip when we remember He is coming.',
        },
        {
          kind: 'carry',
          html:
            'What station are you in? Are you aged or young? Are you building a home or single? Are you in leadership or serving? Paul has a word for each. Your particular calling is not incidental. It is the arena where your faith is tested and proven. What would change if you saw your role as designed for this season of God&apos;s plan?',
        },
        {
          kind: 'reflection',
          id: 'tit2-station',
          prompt: 'What is your particular station in life right now? How can you live it more fully in light of Christ&apos;s coming?',
        },
      ],
    },

    /* ─── Titus 2:11–15 — The Appearing and Our Hope ────────────────── */
    {
      ref: 'Titus 2:11–15',
      title: 'Looking for That Blessed Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(11, 'For the grace of God that bringeth salvation hath appeared to all men,'),
            plain(12, 'Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world;'),
            plain(13, 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;'),
            plain(14, 'Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.'),
            plain(15, 'These things speak, and exhort, and rebuke with all authority. Let no man despise thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-grace-appeared',
          html:
            '"The grace of God that bringeth salvation hath appeared to all men." Not because all have experienced it, but because it has been offered to all. The gospel is universal in scope. Christ did not die for a select few. His grace is extended to every human being. To reject it is to choose away from a gift offered.',
        },
        {
          kind: 'greek',
          id: 'tit2-soterios',
          title: 'Soterios — Salvation, Savior',
          script: 'σωτήριος',
          translit: '<strong>Soterios</strong> · bringing salvation; saving; deliverance',
          description:
            'Salvation is not escape from the world. It is deliverance from sin, reconciliation with God, transformation. The grace that brings it has appeared—been made visible, incarnate, historical, undeniable. In Christ, salvation is no longer abstract. It is personal and real.',
        },
        {
          kind: 'commentary',
          id: 'tit2-blessed-hope',
          html:
            '"Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ." In the ancient world, "appearing" (epiphaneia) was used of an imperial visit. Paul reframes history. The real appearing—the real imperial visit—is Christ&apos;s return. Everything else is preliminary.',
        },
        {
          kind: 'christ',
          id: 'tit2-christ-redemption',
          title: 'Christ Connection — Redeemed to Himself',
          html:
            'Jesus "gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works." Redemption is not freedom to do as you please. It is freedom to serve the One who bought you. You are no longer yours. You are His. And that is the greatest freedom.',
        },
        {
          kind: 'carry',
          html:
            'This present world makes demands. Ungodliness whispers its seductions. Worldly lusts promise satisfaction. But you are redeemed. Purified. Called to be peculiar—set apart for God. Live soberly, righteously, godly. Not because you are earning approval, but because you belong to Him. And He is coming.',
        },
        {
          kind: 'reflection',
          id: 'tit2-blessed-hope',
          prompt: 'What does it mean for you to live "looking for that blessed hope"? How would your life differ if you truly lived as if He could come today?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ; Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 2 · Study Guide',
  },

  hasHebrew: false,
};
