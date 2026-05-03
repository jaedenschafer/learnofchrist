import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Malachi 3 — The Coming of the Lord and the Tithe
 */
export const MALACHI_3: RichChapterContent = {
  bookSlug: 'malachi',
  bookName: 'Malachi',
  chapter: 3,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Malachi 3 opens with a promise: "Behold, I will send my messenger, and the Lord, whom ye seek, shall suddenly come to his temple." John the Baptist is the messenger; Christ is the Lord. But before His coming is a question about tithes and offerings: "Will a man rob God? Yet ye have robbed me. In tithes and offerings." The chapter calls Israel to return to faithful giving and to prepare for the Lord&apos;s coming. Stewardship and worship are inseparable.',
  ],

  sections: [
    {
      ref: 'Malachi 3:1–6',
      title: 'The Coming of the Messenger and the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Behold, I will send my messenger, and he shall prepare the way before me: and the Lord, whom ye seek, shall suddenly come to his temple, even the messenger of the covenant, whom ye delight in: behold, he shall come, saith the Lord of hosts.'),
            plain(2, 'But who may abide the day of his coming? and who shall stand when he appeareth? for he is like a refiner&apos;s fire, and like fullers&apos; soap:'),
            plain(3, 'And he shall sit as a refiner and purifier of silver: and he shall purify the sons of Levi, and purge them as gold and silver, that they may offer unto the Lord an offering in righteousness.'),
            plain(6, 'For I am the Lord, I change not; therefore ye sons of Jacob are not consumed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi3-coming',
          html: 'God promises to send a messenger who will prepare the way. John the Baptist fulfills this role. The Lord—Christ—will come to His temple. But His coming is not soft or weak. He is like a refiner&apos;s fire and fullers&apos; soap—purifying agents that burn away impurity. He will sit as a refiner, purifying the priests so that they offer acceptable sacrifices. Yet despite this judgment, God does not abandon His people. Because God does not change, Israel is not consumed.',
        },
        {
          kind: 'hebrew',
          id: 'malachi3-malach',
          title: 'Malach — "Messenger"',
          script: 'מלאך',
          translit: '<strong>Malach</strong> · messenger; angel; one sent on a mission',
          description: 'The messenger is sent to prepare the way. John the Baptist embodies this role, calling Israel to repentance and announcing the coming of the Lord.',
        },
        {
          kind: 'christ',
          id: 'malachi3-christ-temple',
          title: 'Christ Connection — Coming to His Temple',
          html: 'Christ came to the temple (John 2:14), cleansing it and declaring His ownership. He refines His people through the work of the Holy Spirit, purifying them so they become living temples. His coming is both judgment on impurity and grace offered to those who repent.',
        },
        {
          kind: 'carry',
          html: 'Christ&apos;s coming is not only a future event but a present reality in the hearts of those who receive Him. He refines you like gold in fire, burning away impurity and dross so that you become fit for God&apos;s temple. The refining is painful but necessary.',
        },
        {
          kind: 'reflection',
          id: 'malachi3-reflect-refine',
          prompt: 'What impurities do you feel Christ burning away in your life? How does it help to know that this refining is not rejection but preparation?',
        },
      ],
    },

    {
      ref: 'Malachi 3:7–12',
      title: 'The Tithe and the Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'Even from the days of your fathers ye are gone away from mine ordinances, and have not kept them. Return unto me, and I will return unto you, saith the Lord of hosts. But ye said, Wherein shall we return?'),
            plain(8, 'Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings.'),
            plain(9, 'Ye are cursed with a curse: for ye have robbed me, even this whole nation.'),
            plain(10, 'Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.'),
            plain(12, 'And all nations shall call you blessed: for ye shall be a delightsome land, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi3-tithe',
          html: 'Israel has robbed God by withholding tithes and offerings. God calls them to return to faithfulness in giving. The withholding of the tithe is not merely financial disobedience—it is a failure to acknowledge God&apos;s ownership and provision. Yet God does not simply condemn. He invites Israel to test Him: "Prove me...if I will not open...the windows of heaven, and pour you out a blessing." Faithfulness in giving opens the floodgates of blessing.',
        },
        {
          kind: 'hebrew',
          id: 'malachi3-maaser',
          title: 'Maaser — "Tithe"',
          script: 'מעשר',
          translit: '<strong>Maaser</strong> · tithe; one-tenth; offering to God',
          description: 'The tithe is not a tax but an offering acknowledging God&apos;s ownership of all things. To tithe is to say, "I belong to God, and all I have belongs to Him."',
        },
        {
          kind: 'christ',
          id: 'malachi3-christ-blessing',
          title: 'Christ Connection — Blessing Through Faithfulness',
          html: 'Christ teaches about giving and blessing. "Give, and it shall be given unto you," He says. Through His own sacrifice—His giving of Himself—blessing flows to all who believe. The principle of faithful giving and receiving blessing is fulfilled and magnified in Christ.',
        },
        {
          kind: 'carry',
          html: 'God invites you to test Him. Bring your tithes and offerings faithfully, not from fear or compulsion but as an act of worship and acknowledgment of His ownership. The blessing He promises is not merely financial but spiritual—a life overflowing with His grace.',
        },
        {
          kind: 'reflection',
          id: 'malachi3-reflect-tithe',
          prompt: 'How do you view your giving to God? Is it an obligation or an opportunity? What would it mean to "prove" God by faithful giving and see what blessing follows?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Will a man rob God?...Bring ye all the tithes into the storehouse...and pour you out a blessing, that there shall not be room enough to receive it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Malachi 3 · Study Guide',
  },

  hasHebrew: true,
};
