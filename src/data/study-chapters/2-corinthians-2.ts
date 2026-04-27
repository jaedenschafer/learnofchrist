import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 2 — Sweet Savour of Christ
 *
 * Paul addresses the aftermath of his severe letter to the Corinthians. Now he
 * deals with a man in disciplinary trouble and calls for forgiveness and comfort.
 * He then shifts to his own apostolic role: he and his team are the &quot;sweet savour
 * of Christ&quot; to some and a &quot;savour of death unto death&quot; to others. The gospel
 * divides. Not all will receive it.
 */
export const SECOND_CORINTHIANS_2: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 2,

  intros: [
    'Paul has written the Corinthians a harsh letter about the man living in sin. Now, having learned that the discipline has borne fruit—the man has repented—Paul calls the church to forgiveness and restoration. He does not wish to pile on judgment. Instead, he wants to see the man healed and restored to fellowship.',
    'The chapter concludes with a profound statement about the gospel&apos;s effect. It is a sweet savour of Christ to those who are being saved, but a savour of death to those who are perishing. The gospel is never neutral. It produces either life or death in those who hear it.',
  ],

  sections: [
    {
      ref: '2 Corinthians 2:1–11',
      title: 'Forgiveness and Comfort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'But I determined this with myself, that I would not come again to you in heaviness.'),
            plain(2, 'For if I make you sorry, who then is he that maketh me glad, but the same which is made sorry by me?'),
            plain(5, 'But if any have caused grief, he hath not grieved me alone, but in part all of you.'),
            plain(7, 'So that contrariwise ye ought rather to forgive him, and comfort him, lest perhaps such a one should be swallowed up with overmuch sorrow.'),
            plain(10, 'To whom ye forgive any thing, I forgive also: for if I forgave any thing, to whom I forgave it, for your sakes forgave I it in the person of Christ;'),
            plain(11, 'Lest Satan should get an advantage of us: for we are not ignorant of his devices.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-2-forgive',
          html:
            'The man who caused grief has been disciplined. Now Paul calls for forgiveness. Overmuch judgment will &quot;swallow him up with overmuch sorrow.&quot; Discipline is meant to restore, not to destroy. Once repentance appears, forgiveness must follow.',
        },
        {
          kind: 'greek',
          id: 'cor2-2-charizomai',
          title: 'Charizomai — To Give Graciously; To Forgive',
          script: 'χαρίζομαι',
          translit: '<strong>Charizomai</strong> · to forgive; to give graciously; to pass over',
          description:
            'To charizomai is to give freely what was not earned. Forgiveness is not paid out; it is given as a grace gift. Paul forgives as Christ has forgiven him.',
        },
        {
          kind: 'commentary',
          id: 'cor2-2-satan',
          html:
            'Paul ends with a warning: &quot;Lest Satan should get an advantage of us.&quot; Refusal to forgive opens the door to Satan. It keeps the church divided and weak. Forgiveness, by contrast, closes Satan&apos;s device and strengthens the body.',
        },
        {
          kind: 'christ',
          id: 'cor2-2-christ-forgive',
          title: 'Christ Connection — Forgiveness in the Person of Christ',
          html:
            'Paul forgives &quot;in the person of Christ.&quot; This is not his personal preference. This is his representation of Christ&apos;s forgiveness. The same forgiveness that Christ extends to us is what we extend to one another.',
        },
        {
          kind: 'carry',
          html:
            'Someone has wronged you. The urge is to punish, to ensure they suffer as you have suffered. But Paul calls you to a different path: forgive. Comfort them. Restore them. Do not become Satan&apos;s tool in their destruction.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-forgive-restore',
          prompt: 'Who do you need to forgive? What holds you back from forgiving and comforting them? How might forgiveness free both them and you?',
        },
      ],
    },

    {
      ref: '2 Corinthians 2:12–17',
      title: 'The Sweet Savour of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'Furthermore, when I came to Troas to preach Christ&apos;s gospel, and a door was opened unto me of the Lord,'),
            plain(13, 'I had no rest in my spirit, because I found not Titus: but taking my leave of them, I went into Macedonia.'),
            plain(14, 'Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in every place.'),
            plain(15, 'For we are unto God a sweet savour of Christ, in them that are saved, and in them that perish.'),
            plain(16, 'To the one we are the savour of death unto death; and to the other the savour of life unto life. And who is sufficient for these things?'),
            plain(17, 'For we are not as many, which corrupt the word of God: but as of sincerity, as of God, in the sight of God speak we in Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-2-triumph',
          html:
            'God &quot;always causeth us to triumph in Christ.&quot; Paul&apos;s apostolic work is a victory procession—the triumphal march of Christ through history. And the &quot;savour of his knowledge&quot; is released &quot;in every place.&quot; The gospel has a fragrance; it fills the air.',
        },
        {
          kind: 'greek',
          id: 'cor2-2-osme',
          title: 'Osme — Fragrance; Smell',
          script: 'ὀσμή',
          translit: '<strong>Osme</strong> · fragrance; smell; scent',
          description:
            'Paul shifts the metaphor from sight to smell. The gospel is not seen only; it is perceived through all senses. It is a fragrance that fills the world, encountered by all.',
        },
        {
          kind: 'commentary',
          id: 'cor2-2-death-life',
          html:
            'The remarkable claim: the same gospel is &quot;the savour of death unto death&quot; for some and &quot;the savour of life unto life&quot; for others. The gospel does not remain neutral. It works either salvation or judgment in the hearer.',
        },
        {
          kind: 'christ',
          id: 'cor2-2-christ-savour',
          title: 'Christ Connection — The Savour of Christ',
          html:
            'The gospel is the &quot;savour of Christ.&quot; It is His fragrance released into the world. Whether it is received as life or death depends on the hearer&apos;s response to Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are a bearer of the gospel, the fragrance of Christ in your world. Your words, your conduct, your choices—these release that fragrance. To those who receive it, you are a savour of life. To those who reject it, you become a savour of death. This is the weight and the privilege of the believer.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-sufficient',
          prompt: 'What does it mean to be the &quot;savour of Christ&quot; to others? How does knowing this shape the way you live and speak?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For we are unto God a sweet savour of Christ, in them that are saved, and in them that perish.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 2 · Study Guide',
  },

  hasHebrew: false,
};
