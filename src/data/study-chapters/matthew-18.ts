import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 18 — Forgiveness and Humility
 *
 * "Except ye be converted, and become as little children, ye cannot enter into the
 * kingdom of heaven." Jesus teaches radical humility. The lost sheep is sought out.
 * Where two or three gather in His name, He is present. Forgiveness is boundless:
 * "Seventy times seven." The parable of the unforgiving servant—a king forgives
 * an enormous debt, yet the servant refuses mercy to his fellow debtor. Forgiveness
 * that flows from grace must flow through us to others.
 */
export const MATTHEW_18: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 18,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The disciples argue about who is greatest in the kingdom of heaven. Jesus responds by calling a child to stand among them: "Except ye be converted, and become as little children, ye cannot enter into the kingdom of heaven." Greatness in God&apos;s kingdom is measured not by status but by humility, by becoming small, dependent, and open. Jesus places a child in the center—the child, whom the world considers insignificant, becomes the model of the kingdom.',
    'Through parables and teachings, Jesus instructs His disciples about care for the lost, the power of united prayer, and—most crucially—forgiveness. The kingdom is not about judgment and exclusion but about seeking the lost sheep, about binding and loosing, about forgiving again and again. Forgiveness is not a transaction; it is the fruit of having been forgiven ourselves.',
  ],

  sections: [
    /* ─── Matthew 18:1–14 — Humility and the Lost Sheep ──────────────────── */
    {
      ref: 'Matthew 18:1–14',
      title: 'The Kingdom of the Small',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(3, 'And said, Verily I say unto you, Except ye be converted, and become as little children, ye cannot enter into the kingdom of heaven.'),
            plain(4, 'Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.'),
            plain(6, 'And whoso shall receive one of these little children in my name receiveth me.'),
            plain(10, 'Take heed that ye despise not one of these little ones; for I say unto you, That in heaven their angels do always behold the face of my Father which is in heaven.'),
            plain(12, 'How think ye? if a man have an hundred sheep, and one of them be gone astray, doth he not leave the ninety and nine, and goeth into the mountains, and seeketh that which is gone astray?'),
            plain(14, 'Even so it is not the will of your Father which is in heaven that one of these little ones should perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt18-children',
          html:
            'Jesus centers a child in the conversation about greatness. In the ancient world, children had no status, no legal standing, no power. Yet Jesus says: this is the model. To enter the kingdom, you must be converted—turned around, transformed—to become like a child. Not naive, but dependent. Not powerless in the kingdom sense, but freed from the weight of status and pride.',
        },
        {
          kind: 'commentary',
          id: 'matt18-shepherd',
          html:
            'The parable of the lost sheep reveals God&apos;s heart. A shepherd with 100 sheep leaves the 99 to seek one that has strayed. The 99 are safe; the 1 is lost. The shepherd does not calculate profit and loss. He goes after the lost. This is the kingdom ethic: the lost is precious. The scattered one matters infinitely.',
        },
        {
          kind: 'greek',
          id: 'matt18-tapeinos',
          title: 'Tapeinos — Humble; Lowly',
          script: 'ταπεινός',
          translit: '<strong>Tapeinos</strong> · humble; lowly; low in position or rank',
          description:
            'Tapeinos means literally low, lowly, of humble station. To be tapeinos is to accept a position of littleness in the world&apos;s eyes. Yet Jesus teaches that such lowliness is the doorway to true greatness in God&apos;s kingdom.',
        },
        {
          kind: 'christ',
          id: 'matt18-christ-shepherd',
          title: 'Christ Connection — Christ the Shepherd',
          html:
            'Jesus is the good shepherd who leaves all to seek the one lost sheep. He humbles Himself, becoming incarnate, entering human weakness and suffering. His kingdom is built not on power over others but on vulnerability, on the willingness to suffer for the lost.',
        },
        {
          kind: 'carry',
          html:
            'Whom do you consider beneath notice or not worth your effort? Jesus reverses the scale of value. The lost, the small, the forgotten—these are His concern. They are also meant to be ours.',
        },
        {
          kind: 'reflection',
          id: 'matt18-humble',
          prompt: 'What would change in your life if you truly embraced the humility of a little child? What pride would you need to release?',
        },
      ],
    },

    /* ─── Matthew 18:15–35 — Forgiveness and the Unforgiving Servant ─────── */
    {
      ref: 'Matthew 18:15–35',
      title: 'Seventy Times Seven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(19, 'Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.'),
            plain(20, 'For where two or three are gathered together in my name, there am I in the midst of them.'),
            plain(21, 'Then came Peter to him, and said, Lord, how oft shall my brother sin against me, and I forgive him? till seven times?'),
            plain(22, 'Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.'),
            plain(27, 'Then the lord of that servant was moved with compassion, and loosed him, and forgave him all the debt.'),
            plain(35, 'So likewise shall my heavenly Father do also unto you, if ye from your hearts forgive not every one his brother their trespasses.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt18-unity',
          html:
            'Jesus establishes a principle: where two or three gather in His name, He is present among them. This is the power of the gathered church—not numbers, but the presence of Christ. And that presence comes with the power to bind and loose, to declare what is bound in heaven and on earth. United prayer, rooted in His presence, becomes a force of transformation.',
        },
        {
          kind: 'commentary',
          id: 'matt18-seventy',
          html:
            'Peter asks the reasonable question: how many times should I forgive? Seven times seems generous. Jesus responds: not seven, but seventy times seven—490 times. The number is not literal; it is infinity. It is the dissolution of the calculus of revenge. Each time you forgive, you begin again. There is no quota, no limit where you can say, "Now I am done forgiving."',
        },
        {
          kind: 'greek',
          id: 'matt18-harpazō',
          title: 'Opheilon — Debt',
          script: 'ὀφειλή',
          translit: '<strong>Opheilon</strong> · debt; obligation; what is owed',
          description:
            'Debt in the parable is both financial and spiritual. We owe a debt to God that we cannot pay. We also accumulate relational debts when we wound others. Forgiveness releases both kinds of debt.',
        },
        {
          kind: 'commentary',
          id: 'matt18-unforgiving',
          html:
            'The parable of the unforgiving servant is devastating. A king forgives a servant an impossible debt—10,000 talents. Yet that same servant, going out, finds a fellow servant who owes him 100 denarii—a pittance by comparison. Instead of extending the mercy he received, the servant refuses and has the debtor imprisoned. When the king hears, he is angry. He revokes the forgiveness and delivers the servant to torment. The principle is absolute: those who refuse to forgive have not truly received forgiveness themselves.',
        },
        {
          kind: 'christ',
          id: 'matt18-christ-forgiveness',
          title: 'Christ Connection — Christ the Forgiver',
          html:
            'Christ absorbs the infinite debt we owe to God. His death and resurrection are the means by which our debt is canceled. Receiving such forgiveness obligates us to forgive others. To receive grace and then withhold it is to reject the grace altogether.',
        },
        {
          kind: 'carry',
          html:
            'Who do you refuse to forgive? What debt do you hold against them? Christ offers an astounding reversal: you have been forgiven immeasurably. From that foundation, you can extend forgiveness without limit.',
        },
        {
          kind: 'reflection',
          id: 'matt18-forgive',
          prompt: 'Where do you find it hardest to forgive? What would forgiveness require of you? How might accepting your own forgiveness free you to forgive others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Where two or three are gathered together in my name, there am I in the midst of them... Seventy times seven.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 18 · Study Guide',
  },

  hasHebrew: false,
};
