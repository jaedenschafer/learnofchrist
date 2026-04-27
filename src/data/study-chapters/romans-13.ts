import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 13 — Submission to Authority and the Law of Love
 *
 * "Let every soul be subject unto the higher powers." Authority is ordained
 * by God. "Owe no man any thing, but to love one another: for he that loveth
 * another hath fulfilled the law."
 */
export const ROMANS_13: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 13,

  intros: [
    'Paul addresses the Christian&apos;s relationship to civil authority. Submit to the powers that be, for they are ordained by God. This does not mean all authority is good or deserves uncritical obedience. It means that authority itself is part of God&apos;s design for order. Yet above all authority stands the law of love. Love your neighbor as yourself. This is the fulfillment of all law.',
    'Romans 13 presents a tension that will never be fully resolved in this age: obedience to authority and obedience to conscience, submission and freedom. The resolution lies not in a formula but in a principle: love. Love God. Love your neighbor. Let love guide your navigation of these tensions.',
  ],

  sections: [
    /* ─── Romans 13:1–10 — Submission and Love ───────────────────────────── */
    {
      ref: 'Romans 13:1–10',
      title: 'Authority and Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God.'),
            plain(3, 'For rulers are not a terror to good works, but to the evil. Wilt thou then not be afraid of the power? do that which is good, and thou shalt have praise of the same:'),
            plain(8, 'Owe no man any thing, but to love one another: for he that loveth another hath fulfilled the law.'),
            plain(9, 'For this, Thou shalt not commit adultery, Thou shalt not kill, Thou shalt not steal, Thou shalt not bear false witness, Thou shalt not covet; and if there be any other commandment, it is briefly comprehended in this saying, namely, Thou shalt love thy neighbour as thyself.'),
            plain(10, 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom13-authority',
          html:
            '"Let every soul be subject unto the higher powers. For there is no power but of God." Paul does not say authority is always righteous. He says it is ordained by God. This means it serves God&apos;s purposes, whether rulers know it or not. Submission is not to the ruler&apos;s will in all things but to the order God has established.',
        },
        {
          kind: 'greek',
          id: 'rom13-exousia',
          title: 'Exousia — Authority/Power',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; right to rule',
          description:
            'Exousia is delegated authority. A ruler holds power not by ultimate right but by delegation from God. This limits the ruler&apos;s claim. It also means Christians can appeal to a higher authority when earthly rulers contradict God.',
        },
        {
          kind: 'commentary',
          id: 'rom13-good-works',
          html:
            '"Rulers are not a terror to good works, but to the evil." The purpose of authority is to reward good and punish evil. When a ruler becomes a terror to the good, the divine purpose is perverted. Yet even then, the Christian&apos;s obligation is to do good and leave judgment to God.',
        },
        {
          kind: 'commentary',
          id: 'rom13-debt-love',
          html:
            '"Owe no man any thing, but to love one another." All other debts can be paid and discharged. But the debt of love is perpetual. You never finish loving. Love is the currency that never stops circulating.',
        },
        {
          kind: 'greek',
          id: 'rom13-opheilo',
          title: 'Opheilo — Owe',
          script: 'ὀφείλω',
          translit: '<strong>Opheilo</strong> · owe; be obligated; be indebted',
          description:
            'To owe someone is to be bound to them. Love creates this binding obligation. You are bound to love your neighbor not as a feeling but as a debt that demands payment in action.',
        },
        {
          kind: 'christ',
          id: 'rom13-christ-love-law',
          title: 'Christ Connection — Love as the Fulfillment',
          html:
            'Christ fulfilled the law through love. He did not abolish the commandments. He showed their intent: all of them are expressions of love toward God and neighbor. To love is to do what Christ did.',
        },
        {
          kind: 'carry',
          html:
            'You live under authority—civil, church, family. Submit not out of fear but out of respect for God&apos;s order. Yet never let submission to earthly authority supersede submission to God. And above all, let love be your guide. Love will tell you when to obey and when to respectfully dissent.',
        },
        {
          kind: 'reflection',
          id: 'rom13-authority',
          prompt: 'Where are you struggling with submission to authority—civil, church, or personal? How might love be the guiding principle that helps you navigate that struggle?',
        },
      ],
    },

    /* ─── Romans 13:11–14 — Awake and Clothe Yourself ────────────────────── */
    {
      ref: 'Romans 13:11–14',
      title: 'Awake and Put On Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(11, 'And that, knowing the time, that now it is high time to awake out of sleep: for now is our salvation nearer than when we believed.'),
            plain(12, 'The night is far spent, the day is at hand: let us therefore cast off the works of darkness, and let us put on the armour of light.'),
            plain(13, 'Let us walk honestly, as in the day; not in rioting and drunkenness, not in chambering and wantonness, not in strife and envying.'),
            plain(14, 'But put ye on the Lord Jesus Christ, and make not provision for the flesh, to fulfil the lusts thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom13-awake',
          html:
            '"Now it is high time to awake out of sleep." The Christian life is lived in an urgent time. Salvation is nearer than when first you believed. The night is passing. The day is coming. This is not cause for anxiety but for awakeness, for clarity about what matters.',
        },
        {
          kind: 'greek',
          id: 'rom13-nyx',
          title: 'Nyx — Night',
          script: 'νύξ',
          translit: '<strong>Nyx</strong> · night; darkness; the time before Christ&apos;s return',
          description:
            'Night is the time of confusion and safety for evil. Day is the time of clarity and judgment. To live as if the day has not yet come, despite its nearness, is to live in delusion.',
        },
        {
          kind: 'commentary',
          id: 'rom13-put-on-christ',
          html:
            '"Put ye on the Lord Jesus Christ, and make not provision for the flesh, to fulfil the lusts thereof." To put on Christ is to clothe yourself in His character, His righteousness, His way. It is to stop planning how to satisfy the flesh and start planning how to become like Him.',
        },
        {
          kind: 'greek',
          id: 'rom13-enduo',
          title: 'Enduo — Put On',
          script: 'ἐνδύω',
          translit: '<strong>Enduo</strong> · put on; clothe; dress in',
          description:
            'To enduo Christ is not metaphor. It is to align yourself with Him so completely that He becomes, in a sense, your covering, your identity, your visible self in the world.',
        },
        {
          kind: 'christ',
          id: 'rom13-christ-clothing',
          title: 'Christ Connection — Clothed in Righteousness',
          html:
            'Christ is your righteousness. When you put Him on, you are clothed not in your own attempts at goodness but in His completed work. This is your armor of light in the night of this world.',
        },
        {
          kind: 'carry',
          html:
            'Stop planning how to satisfy fleshly desires and start planning how to grow in Christ. Every choice is either moving you toward Him or away. Every moment of provision for the flesh is a moment not spent in putting on Christ. The night is far spent. Wake up.',
        },
        {
          kind: 'reflection',
          id: 'rom13-put-on',
          prompt: 'Where are you still "making provision for the flesh"? What would it look like to actually put on Christ in that area—to be clothed in His righteousness rather than your own agenda?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let every soul be subject unto the higher powers. Owe no man any thing, but to love one another: for he that loveth another hath fulfilled the law. Put ye on the Lord Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 13 · Study Guide',
  },

  hasHebrew: false,
};
