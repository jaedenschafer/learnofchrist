import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 22 — The Wedding Feast, Caesar&apos;s Coin, Resurrection
 *
 * The parable of the wedding feast: guests are invited but refuse. The servants
 * are mistreated. The king&apos;s armies destroy the rejecters. The gospel is sent
 * to all. A man without a wedding garment is cast out. Jesus is questioned about
 * taxes—"Give unto Caesar the things that are Caesar&apos;s; and unto God the
 * things that are God&apos;s." Sadducees pose a resurrection riddle. Jesus corrects
 * them. The greatest commandment: love God wholly, and love your neighbor as
 * yourself. Christ is both David&apos;s son and David&apos;s Lord.
 */
export const MATTHEW_22: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 22,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Jesus speaks in parables. The kingdom is like a king who prepares a wedding feast for his son. Guests are invited but refuse. Some are indifferent, occupied with their own concerns. Others actively mistreat the servants. The king is enraged. His armies destroy those who rejected the invitation and burn their city. Then the king sends his servants to invite all they find—bad and good alike. The feast is filled with guests.',
    'Religious authorities approach Jesus with loaded questions, seeking to trap Him. Should they pay taxes to Caesar? The Sadducees pose a riddle about the resurrection. Each time, Jesus answers with wisdom that silences them. Finally, a lawyer asks: What is the greatest commandment? Jesus answers: love the Lord your God with all your heart, and love your neighbor as yourself. On these two commandments hang all the law and the prophets.',
  ],

  sections: [
    /* ─── Matthew 22:1–22 — The Wedding Feast and Caesar&apos;s Penny ────────── */
    {
      ref: 'Matthew 22:1–22',
      title: 'The Feast and the Coin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(2, 'The kingdom of heaven is like unto a certain king, which made a marriage for his son,'),
            plain(3, 'And sent forth his servants to call them that were bidden to the wedding: and they would not come.'),
            plain(8, 'Then saith he to his servants, The wedding is ready, but they which were bidden were not worthy.'),
            plain(9, 'Go ye therefore into the highways, and as many as ye shall find, bid to the marriage.'),
            plain(15, 'Then said they unto him, Is it lawful to give tribute unto Caesar, or not?'),
            plain(19, 'Shew me the tribute money. And they brought unto him a penny.'),
            plain(21, 'He saith unto them, Render therefore unto Caesar the things which are Caesar&apos;s; and unto God the things that are God&apos;s.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt22-feast',
          html:
            'The parable of the wedding feast is a dark tale. A king invites guests to his son&apos;s wedding. They refuse. The king sends servants again. Some ignore the invitation. Others seize, mistreat, and kill the servants. The king is wrathful. His armies destroy the murderers and burn their city. Then the king says: "The wedding is ready, but they which were bidden were not worthy." The invitation extends beyond the chosen few to anyone found on the highways.',
        },
        {
          kind: 'commentary',
          id: 'matt22-garment',
          html:
            'One guest enters without a wedding garment—a requirement for participating in such a feast. When confronted, he is speechless. The king casts him out into "outer darkness; there shall be weeping and gnashing of teeth." The feast is open to all, but it demands appropriateness, readiness, respect. One cannot simply walk into grace unbothered.',
        },
        {
          kind: 'greek',
          id: 'matt22-gamos',
          title: 'Gamos — Wedding',
          script: 'γάμος',
          translit: '<strong>Gamos</strong> · wedding; marriage feast; the marriage celebration',
          description:
            'Gamos in biblical usage often refers to the wedding feast, the celebration of covenant union. The kingdom is the ultimate marriage—the union of Christ and the church, of God and His people.',
        },
        {
          kind: 'commentary',
          id: 'matt22-caesar',
          html:
            'Pharisees and Herodians approach Jesus with a trap: should they pay taxes to Caesar? To say no invites political trouble. To say yes seems to undermine Jewish loyalty. Jesus asks for a coin. "Whose image and superscription hath it?" Caesar&apos;s. "Render therefore unto Caesar the things which are Caesar&apos;s; and unto God the things that are God&apos;s." Jesus distinguishes two realms. Earthly authorities have their proper place. But ultimate allegiance belongs to God.',
        },
        {
          kind: 'christ',
          id: 'matt22-christ-lord',
          title: 'Christ Connection — Christ Above All Authority',
          html:
            'Jesus teaches that His kingdom operates in a different register than earthly politics. He does not contest Caesar&apos;s claim to tax his subjects. But He claims the whole heart for God. Political participation is possible, but spiritual allegiance cannot be divided.',
        },
        {
          kind: 'carry',
          html:
            'Where do you face conflicting loyalties—to God and to earthly powers or concerns? Jesus teaches that you can give what belongs to Caesar while offering what truly belongs to God: your whole self, your allegiance, your devotion.',
        },
        {
          kind: 'reflection',
          id: 'matt22-allegiance',
          prompt: 'What aspects of your life are you tempted to withhold from God&apos;s claim? How would fully offering them change your experience of faith?',
        },
      ],
    },

    /* ─── Matthew 22:23–46 — Resurrection and the Greatest Commandment ──── */
    {
      ref: 'Matthew 22:23–46',
      title: 'Love God, Love Neighbor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(37, 'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.'),
            plain(38, 'This is the first and great commandment.'),
            plain(39, 'And the second is like unto it, Thou shalt love thy neighbour as thyself.'),
            plain(40, 'On these two commandments hang all the law and the prophets.'),
            plain(42, 'Saying, What think ye of Christ? whose son is he? They say unto him, The son of David.'),
            plain(45, 'If David then call him Lord, how is he his son?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt22-commandments',
          html:
            'A lawyer asks Jesus: What is the greatest commandment? Jesus answers: love the Lord your God with all your heart, soul, and mind. This is the first and greatest. And the second is like it: love your neighbor as yourself. These two commandments capture the entire law and the prophets. All other commands flow from these. Righteousness is not a maze of rules but a lived expression of love toward God and others.',
        },
        {
          kind: 'commentary',
          id: 'matt22-neighbor',
          html:
            'To love your neighbor as yourself is radical. It means you cannot use others for your own ends. You cannot withhold compassion. You cannot hoard when others lack. Love your neighbor means treating others with the same care and concern you naturally extend to yourself. This is the measure of the kingdom.',
        },
        {
          kind: 'greek',
          id: 'matt22-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; affection; goodwill; the highest form of love',
          description:
            'Agape is not sentimentality or preference. It is a deliberate commitment to the good of another, a choosing of another&apos;s welfare. It is the love that flows from God and the love God demands from His people.',
        },
        {
          kind: 'commentary',
          id: 'matt22-christ',
          html:
            'Jesus then poses His own question: "What think ye of Christ? whose son is he?" They answer: "The son of David." Jesus responds: "If David then call him Lord, how is he his son?" Jesus is not merely David&apos;s descendant. He is David&apos;s Lord. David, in Psalm 110, speaks of his Lord. That Lord is Christ. The Messiah is greater than David himself.',
        },
        {
          kind: 'christ',
          id: 'matt22-christ-lord-david',
          title: 'Christ Connection — Christ, David&apos;s Lord',
          html:
            'Christ is David&apos;s son in His incarnate, human descent. Yet He is also David&apos;s Lord in His divine nature and eternal significance. He is both fully human and fully divine—the one who fulfills all covenant promises and stands as Lord over all.',
        },
        {
          kind: 'carry',
          html:
            'The greatest commandment is not a burdensome rule but an invitation to a way of being. Love God wholly—with heart, soul, mind. Love your neighbor as yourself. These two commitments reshape everything. Where does your love currently fall short of this standard?',
        },
        {
          kind: 'reflection',
          id: 'matt22-love',
          prompt: 'If you truly loved your neighbor as yourself, what would change? What neighbor is Jesus calling you to love more fully?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou shalt love the Lord thy God with all thy heart... and thy neighbour as thyself. On these two commandments hang all the law and the prophets.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 22 · Study Guide',
  },

  hasHebrew: false,
};
