import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 14 — Invitations and True Cost
 *
 * Jesus enters the house of a chief Pharisee on the Sabbath. A man with
 * dropsy stands before Him. Jesus heals him. Then He speaks of choosing the
 * lowest seat, for "whosoever exalteth himself shall be abased; and he that
 * humbleth himself shall be exalted." The master of the house has invited the
 * rich, the powerful, the established. Jesus says: "When thou makest a feast,
 * call the poor, the maimed, the lame, the blind." A certain man makes a great
 * supper and invites many. All make excuses. One has bought land. One has
 * bought oxen. One has married a wife. So the servant says: "Go out quickly
 * into the streets and lanes of the city, and bring in hither the poor, and
 * the maimed, and the halt, and the blind." To follow Jesus costs everything.
 * But it is worth everything.
 */
export const LUKE_14: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 14,

  estimatedMinutes: { 5: 1, 10: 4, 15: 6 },
  intros: [
    'Jesus enters the house of a chief Pharisee on the Sabbath to eat bread. A man with dropsy stands before Him. The Pharisees watch to see if Jesus will heal on the Sabbath. Jesus asks them: "Is it lawful to heal on the sabbath day?" They hold their peace. Jesus touches the man and heals him. "And said unto them, Which of you shall have an ass or an ox fallen into a pit, and will not straightway pull him out on the sabbath day?" They cannot answer.',
    'Jesus speaks of the social arrangements at table. He notices how the guests choose the chief seats. He says: "Whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted." Then He turns to the master of the house and rebukes the guest list. You have invited the rich, the powerful, your friends. But you should invite the poor, the maimed, the lame, the blind. "For they cannot recompense thee: for thou shalt be recompensed at the resurrection of the just."',
  ],

  sections: [
    {
      ref: 'Luke 14:1–24',
      title: 'Humility and Invitation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(11, 'For whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted.'),
            plain(12, 'Then said he also to him that bade him, When thou makest a feast, call not thy friends, nor thy brethren, neither thy kinsmen, nor thy rich neighbours; lest they also bid thee again, and a recompense be made thee.'),
            plain(13, 'But when thou makest a feast, call the poor, the maimed, the halt, the blind:'),
            plain(14, 'And thou shalt be blessed; for they cannot recompense thee: for thou shalt be recompensed at the resurrection of the just.'),
            plain(16, 'Then said Jesus unto him, A certain man made a great supper, and bade many:'),
            plain(23, 'And the lord said unto the servant, Go out into the highways and hedges, and compel them to come in, that my house may be filled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke14-humility',
          html:
            'Jesus teaches a law of reversal: the exalted will be abased; the humble will be exalted. This overturns human expectation. In the world, self-promotion leads to advancement. In the kingdom of God, humility leads to exaltation. Jesus teaches this not through abstract doctrine but through observation—the guests choosing the chief seats.',
        },
        {
          kind: 'greek',
          id: 'luke14-tapeinoō',
          title: 'Tapeinoō — Humble; Abase; Make Low',
          script: 'ταπεινόω',
          translit: '<strong>Tapeinoō</strong> · humble; abase; make low; bring low',
          description:
            'Tapeinoō is not mere modesty. It is a real lowering, a bringing low. To humble oneself is to genuinely diminish oneself, to place oneself beneath others. The paradox is that this lowering leads to exaltation.',
        },
        {
          kind: 'commentary',
          id: 'luke14-feast',
          html:
            'Jesus tells the host: "When thou makest a feast, call not thy friends, nor thy brethren, neither thy kinsmen, nor thy rich neighbours." Call the poor, the maimed, the halt, the blind. Do not invite those who can repay you. Invite those who cannot. This is a new economics—not transaction, but grace.',
        },
        {
          kind: 'commentary',
          id: 'luke14-parable-supper',
          html:
            'A man makes a great supper and invites many. All make excuses. "I have bought a piece of ground, and I must needs go and see it." "I have bought five yoke of oxen, and I go to prove them." "I have married a wife, and therefore I cannot come." The servants report back. The master is angry. He tells the servants to go into the streets and lanes and bring in the poor, the maimed, the blind. "Compel them to come in, that my house may be filled."',
        },
        {
          kind: 'christ',
          id: 'luke14-christ-invitation',
          title: 'Christ Connection — The Great Invitation',
          html:
            'The parable of the great supper is the gospel. God has prepared a feast. He invites all. But those who are comfortable—who have land, oxen, wives—make excuses. Then the invitation goes to the poor, the outsider, those without excuse or defense. The kingdom is open to all. But especially to those who know they have nothing.',
        },
        {
          kind: 'carry',
          html:
            'This parable teaches that the gospel goes to those the world marginalizes. The poor, the maimed, the halt, the blind—those society overlooks—are invited to God&apos;s feast. The transformation of who gets invited, who gets valued, is central to the gospel.',
        },
        {
          kind: 'reflection',
          id: 'luke14-invitation-reflect',
          prompt: 'Jesus invites the poor, the broken, the outcast. Do you welcome them as He does? Whom do you naturally exclude?',
        },
      ],
    },

    {
      ref: 'Luke 14:25–35',
      title: 'The Cost of Discipleship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(26, 'If any man come to me, and hate not his father, and mother, and wife, and children, and brethren, and sisters, yea, and his own life also, he cannot be my disciple.'),
            plain(27, 'And whosoever doth not bear his cross, and come after me, cannot be my disciple.'),
            plain(28, 'For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?'),
            plain(33, 'So likewise, whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple.'),
            plain(34, 'Salt is good: but if the salt have lost his savour, wherewith shall it be seasoned? It is neither fit for the land, nor yet for the dunghill; but men cast it out.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke14-hate-not',
          html:
            'Jesus says: "If any man come to me, and hate not his father, and mother, and wife, and children, and brethren, and sisters, yea, and his own life also, he cannot be my disciple." This is shocking. Jesus does not command literal hatred. But He commands a reordering of loves. Love for Jesus must supersede all other loves. This is not sentiment. It is commitment.',
        },
        {
          kind: 'greek',
          id: 'luke14-miseo',
          title: 'Miseō — Hate; Love Less',
          script: 'μισέω',
          translit: '<strong>Miseō</strong> · hate; love less; prefer less',
          description:
            'In context, "hate" means to love less, to prefer less. To follow Jesus, all other attachments must be secondary. This is radical reordering.',
        },
        {
          kind: 'commentary',
          id: 'luke14-tower',
          html:
            'Jesus tells a parable: "Which of you, intending to build a tower, sitteth not down first, and counteth the cost?" A builder does not begin without counting. He wants to finish. If he cannot complete it, all who see it will mock him. So the would-be disciple must count the cost. Can you give up all? Can you bear the cross? Can you follow through?',
        },
        {
          kind: 'commentary',
          id: 'luke14-forsake-all',
          html:
            'Jesus states the requirement plainly: "Whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple." This is absolute. You must forsake all. Not metaphorically. Actually. Give it up. Let it go. Otherwise, you cannot be His disciple.',
        },
        {
          kind: 'greek',
          id: 'luke14-apotassomai',
          title: 'Apotassomai — Renounce; Forsake; Say Goodbye',
          script: 'ἀποτάσσομαι',
          translit: '<strong>Apotassomai</strong> · renounce; forsake; say goodbye; break off',
          description:
            'To apotassomai is to break off, to say goodbye definitively. Following Jesus requires this kind of decisive break with all that competes with His claim.',
        },
        {
          kind: 'christ',
          id: 'luke14-christ-costly',
          title: 'Christ Connection — The Cost of Following',
          html:
            'Luke presents discipleship as costly. It is not a bargain or an upgrade. It is surrender. You give up everything. You take up a cross. You follow. This is the true cost. Yet paradoxically, it is also the greatest gain. "He that findeth his life shall lose it: and he that loseth his life for my sake shall find it."',
        },
        {
          kind: 'reflection',
          id: 'luke14-cost-reflect',
          prompt: 'Have you counted the cost of following Jesus? What would you need to forsake to follow Him fully?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whosoever exalteth himself shall be abased. Call the poor, the maimed, the halt, the blind. Whosoever forsaketh not all that he hath, cannot be my disciple.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 14 · Study Guide',
  },

  hasHebrew: false,
};
