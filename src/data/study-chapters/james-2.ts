import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * James 2 — Faith Without Works Is Dead
 *
 * James confronts a subtle lie: that faith and behavior are separable. He addresses
 * favoritism in the church, exposing how we honor the rich while neglecting the poor,
 * breaking the royal law to love our neighbor as ourselves. Faith alone, without the
 * works of love and justice, is dead—a corpse without breath.
 */
export const JAMES_2: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 2,

  intros: [
    'James turns his attention to a problem he has observed in the church: favoritism. Believers gather, and some are treated with honor because of their wealth or status, while others are dismissed or neglected. This is not incidental rudeness. It is a violation of the foundational law of Christ—to love your neighbor as yourself. When we honor the rich at the expense of the poor, we break covenant with the God who exalts the humble.',
    'James then moves into a fuller argument about faith itself. How can we claim to have faith in Christ—who emptied himself, who identified with the powerless, who taught that it is more blessed to give than to receive—while our actions deny that faith? This raises the deepest question: What is faith? Is it assent to doctrine, or is it a living trust that transforms how we live? James&apos; answer is unambiguous: faith without works is dead.',
  ],

  sections: [
    /* ─── James 2:1–13 — The Royal Law ──────────────────────────────────── */
    {
      ref: 'James 2:1–13',
      title: 'Showing No Partiality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'My brethren, have not the faith of our Lord Jesus Christ, the Lord of glory, with respect of persons.'),
            plain(2, 'For if there come unto your assembly a man with a gold ring, in goodly apparel, and there come in also a poor man in vile raiment;'),
            plain(3, 'And ye have respect to him that weareth the gay clothing, and say unto him, Sit thou here in a good place; and say to the poor, Stand thou there, or sit here under my footstool:'),
            plain(5, 'Hearken, my beloved brethren, Hath not God chosen the poor of this world rich in faith, and heirs of the kingdom which he hath promised to them that love him?'),
            plain(8, 'If ye fulfil the royal law according to the scripture, Thou shalt love thy neighbour as thyself, ye do well:'),
            plain(10, 'For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-partiality',
          html:
            'James begins with a stunning claim: to show favoritism is incompatible with faith in Christ, the Lord of glory. The word for "respect of persons" carries the sense of judging by external appearance. We make our estimate of another&apos;s worth based on wealth or status rather than on the image of God stamped on every soul. This is not merely unkind. It is unfaithful to Christ.',
        },
        {
          kind: 'greek',
          id: 'jam2-prosopolepsia',
          title: 'Prosopolepsia — Respect of Persons',
          script: 'προσωποληψία',
          translit: '<strong>Prosopolepsia</strong> · favoritism; partiality; judging by appearance',
          description:
            'The Greek word comes from prosopon (face/appearance) and lambano (to receive/accept). It means to accept someone based on their external appearance or status. It is the opposite of impartial judgment, which sees the true worth of every human being.',
        },
        {
          kind: 'commentary',
          id: 'jam2-royal-law',
          html:
            'James identifies the "royal law"—the law of the kingdom—as love of neighbor. This is not a new law. It is drawn from Leviticus 19:18, the heart of Old Testament ethics. To love your neighbor as yourself is to see in every person the same claim to dignity and kindness you claim for yourself. The poor are not less worthy of honor than the rich. In God&apos;s eyes, they are heirs of the kingdom.',
        },
        {
          kind: 'christ',
          id: 'jam2-christ-poor',
          title: 'Christ Connection — He Identified With the Poor',
          html:
            'Jesus came not in wealth and worldly honor, but in humility. He lived among the poor, ate with sinners, washed the feet of his disciples. He taught that when we welcome the least among us, we welcome him. Our treatment of the poor is our treatment of Christ.',
        },
        {
          kind: 'carry',
          html:
            'James makes a provocative claim: if you break the law at one point, you are guilty of all. This sounds harsh, but his point is subtle. The law is a unified whole, rooted in love. To violate it in one place—to show favoritism—is to reveal that you have not truly grasped the entire law&apos;s foundation. You cannot honor love while dishonoring those the law says to love.',
        },
        {
          kind: 'reflection',
          id: 'jam2-favoritism',
          prompt: 'Where are you tempted to show favoritism? Who might you be overlooking because they lack status or wealth?',
        },
      ],
    },

    /* ─── James 2:14–26 — Faith Without Works ──────────────────────────────── */
    {
      ref: 'James 2:14–26',
      title: 'Living Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him?'),
            plain(15, 'If a brother or sister be naked, and destitute of daily food;'),
            plain(16, 'And one of you say unto them, Depart in peace, be ye warmed and filled; notwithstanding ye give them not those things which are needful to the body; what doth it profit?'),
            plain(19, 'Thou believest that there is one God; thou doest well: but the devils also believe, and tremble.'),
            plain(26, 'For as the body without the spirit is dead, so faith without works is dead also.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-profit',
          html:
            'James poses the central question: If a Christian sees a neighbor in need—cold, hungry, lacking the essentials—and does nothing, saying merely "Go in peace, be warmed and fed," what profit is that faith? It costs nothing. It changes nothing. It leaves the neighbor as they were. Faith that does not move us to action is not really faith. It is mere words, a profession without power.',
        },
        {
          kind: 'greek',
          id: 'jam2-pistis',
          title: 'Pistis — Faith',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; belief; conviction that produces action',
          description:
            'Faith in the New Testament is not intellectual assent to propositions. It is a trust that issues in obedience, a conviction that transforms life. A faith that does not change how we treat others is not pistis but mere opinion.',
        },
        {
          kind: 'commentary',
          id: 'jam2-devils-believe',
          html:
            'James writes one of the most arresting lines in Scripture: even the demons believe there is one God, and they tremble. This is not faith. It is acknowledgment of fact without transformation. True faith—the faith that pleases God and saves the soul—is faith that works. It is faith that takes shape in love, in action, in the concrete service of others.',
        },
        {
          kind: 'christ',
          id: 'jam2-christ-incarnation',
          title: 'Christ Connection — God Made Flesh',
          html:
            'The incarnation is God&apos;s decisive answer to the question of faith and works. God did not merely speak about love. He came in human flesh, walked among us, touched the sick, fed the hungry, washed feet, died for us. Faith is not a disembodied belief but a trust that reshapes how we live, how we love, how we serve.',
        },
        {
          kind: 'carry',
          html:
            'The image is unforgettable: a body without spirit is dead. It may look like a body. It may retain its form. But it has no life, no agency, no power. Similarly, faith without works may look like faith. It may sound right. But it is a corpse—no life, no power, no salvation in it.',
        },
        {
          kind: 'reflection',
          id: 'jam2-works',
          prompt: 'What work is your faith calling you to do? What action would demonstrate that your faith is alive?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Have not the faith of our Lord Jesus Christ, the Lord of glory, with respect of persons. Love thy neighbour as thyself. Faith without works is dead.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 2 · Study Guide',
  },

  hasHebrew: false,
};
