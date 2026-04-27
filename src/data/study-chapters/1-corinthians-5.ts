import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 5 — Discipline and Purity
 *
 * Paul addresses a grave moral failure in the church: a man is living with his
 * stepmother, and the church has taken no action. Paul calls for discipline—the
 * removal of the man from the community—not out of harshness but out of love,
 * to preserve the church&apos;s witness and to call the man to repentance.
 */
export const FIRST_CORINTHIANS_5: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 5,

  intros: [
    'The Corinthian church has become tolerant—permissive, even boastful—of a moral failure that should grieve them. A man is living in a sexual relationship that violates even pagan standards of decency. Yet the church has done nothing. Paul sees this not as broadmindedness but as spiritual blindness. Tolerance of sin within the church body corrupts the whole.',
    'Discipline is not cruelty. It is love. Paul calls the church to remove the offender, not to destroy him, but to awaken him to his condition and to protect the integrity of the church. Just as a little leaven spreads through the whole lump of dough, so too a tolerated sin corrupts the whole body.',
  ],

  sections: [
    {
      ref: '1 Corinthians 5:1–8',
      title: 'Purge the Old Leaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'It is reported commonly that there is fornication among you, and such fornication as is not so much as named among the Gentiles, that one should have his father&apos;s wife.'),
            plain(2, 'And ye are puffed up, and have not rather mourned, that he that hath done this deed might be taken away from among you.'),
            plain(6, 'Your glorying is not good. Know ye not that a little leaven leaveneth the whole lump?'),
            plain(7, 'Purge out therefore the old leaven, that ye may be a new lump, as ye are unleavened. For even Christ our passover is sacrificed for us:'),
            plain(8, 'Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-1-mourning',
          html:
            'Paul is astounded. The church is &quot;puffed up&quot;—proud or indifferent—about a sin of such magnitude that even pagan society would condemn it. A man has taken his father&apos;s wife—a violation of the most basic family bonds. Yet the church has not &quot;mourned.&quot; There is no grief, no sense of spiritual crisis. Paul&apos;s rebuke is severe because the problem is severe.',
        },
        {
          kind: 'greek',
          id: 'cor5-1-zyme',
          title: 'Zyme — Leaven',
          script: 'ζύμη',
          translit: '<strong>Zyme</strong> · leaven; yeast; a small thing that corrupts the whole',
          description:
            'Leaven is a small amount of fermenting dough that, when mixed into a larger mass, causes the whole to rise. It is Paul&apos;s image for how sin spreads. One member living in unrepentant sin does not affect only himself. It gradually corrupts the culture and witness of the whole church.',
        },
        {
          kind: 'commentary',
          id: 'cor5-1-passover',
          html:
            'Paul connects the call to purity with the Passover. At Passover, Israel was to remove all leaven from their homes—a physical representation of putting away sin. Christ is the Passover lamb, sacrificed for us. Now the church, bought by His blood, must put away the leaven of malice and wickedness. Sanctification follows from His sacrifice.',
        },
        {
          kind: 'christ',
          id: 'cor5-1-christ-passover',
          title: 'Christ Connection — Christ Our Passover',
          html:
            'Christ is the Passover lamb sacrificed for us. His blood cleanses us from sin. But this demands a response: we must keep the feast in &quot;sincerity and truth,&quot; living in the reality of what Christ has purchased for us.',
        },
        {
          kind: 'carry',
          html:
            'The church cannot be indifferent to sin within its body. Nor should it be harsh or cruel. But it must act. It must call members to account, must call for repentance, must be willing to remove the leaven so that the witness remains pure. This is love, not judgment.',
        },
        {
          kind: 'reflection',
          id: 'cor5-1-leaven',
          prompt: 'What &quot;leaven&quot; have you seen corrupt a community? How does tolerance of sin differ from grace and forgiveness?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:9–13',
      title: 'Separation and Discipline',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(9, 'I wrote unto you in an epistle not to company with fornicators;'),
            plain(10, 'Yet not altogether with the fornicators of this world, or with the covetous, or extortioners, or with idolaters; for then must ye needs go out of the world:'),
            plain(11, 'But now I have written unto you not to keep company, if any man that is called a brother be a fornicator, or covetous, or an idolater, or a railer, or a drunkard, or an extortioner; with such an one no not to eat.'),
            plain(12, 'For what have I to do to judge them also that are without? do not ye judge them that are within?'),
            plain(13, 'But them that are without God judgeth. Therefore put away from among yourselves that wicked person.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-2-separation',
          html:
            'Paul clarifies: discipline of the offender does not mean withdrawal from the world. Christians cannot avoid contact with unbelievers who live in sin—they would have to leave the world. Rather, the church is to withdraw fellowship from those who claim to be Christians yet persist in grave sin. The distinction is crucial: external separation from the world&apos;s sin, but church discipline of internal sin.',
        },
        {
          kind: 'greek',
          id: 'cor5-2-koinoneo',
          title: 'Koinoneo — To Share; Fellowship',
          script: 'κοινωνέω',
          translit: '<strong>Koinoneo</strong> · to share; to have fellowship; communion',
          description:
            'To withdraw koinonia—communion, fellowship—from someone is not to wish him destroyed. It is to refuse the intimacy of shared life until he repents. It is meant to awaken him to his condition.',
        },
        {
          kind: 'commentary',
          id: 'cor5-2-judge',
          html:
            'Paul asks: &quot;What have I to do to judge them also that are without?&quot; The church is not called to judge the world. The world&apos;s judgment belongs to God. But the church is called to judge those &quot;within&quot;—those who bear the name of Christ and yet live in contradiction to Him.',
        },
        {
          kind: 'christ',
          id: 'cor5-2-christ-purity',
          title: 'Christ Connection — Sanctified in Christ',
          html:
            'The church is sanctified—made holy—in Christ. This holiness is not merely positional. It must become real in the way the church lives together. Discipline is one expression of that growing holiness.',
        },
        {
          kind: 'carry',
          html:
            'If you are part of a Christian community, you share responsibility for its purity. This does not mean judging those outside, nor does it mean judging harshly those inside who stumble. But it means taking sin seriously when it persists and becomes public. Love sometimes requires the difficult act of confrontation and discipline.',
        },
        {
          kind: 'reflection',
          id: 'cor5-2-discipline',
          prompt: 'How do you balance grace with accountability in Christian community? When is discipline an act of love?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Therefore put away from among yourselves that wicked person.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 5 · Study Guide',
  },

  hasHebrew: false,
};
