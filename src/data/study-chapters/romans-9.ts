import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 9 — God&apos;s Sovereign Mercy
 *
 * Paul&apos;s heart breaks for his kinsmen according to the flesh. Yet God&apos;s
 * promise is not voided. God has mercy on whom He will have mercy. The clay
 * does not question the potter. All these realities—God&apos;s sovereignty, His
 * selection, His purposes—stand as Paul presents them, without resolution
 * into a single theological frame.
 */
export const ROMANS_9: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 9,

  intros: [
    'Paul now turns to the question that has haunted Israel: If the gospel is for all, what of God&apos;s promise to Abraham? If faith justifies, why does birth to Israel matter at all? Paul grieves for his people. He would gladly be accursed if it meant their salvation. Yet he also insists: God&apos;s word has not failed.',
    'Romans 9 is dense with paradox. God chose Jacob over Esau before either was born. God raises up Pharaoh to display His power. The potter shapes the clay according to His will. Yet within these statements stands another truth: God has always worked through a remnant, and His purpose stands. Paul does not resolve these tensions. He trusts them both to be true.',
  ],

  sections: [
    /* ─── Romans 9:1–13 — God&apos;s Sovereign Choice ─────────────────────────── */
    {
      ref: 'Romans 9:1–13',
      title: 'The Potter and the Clay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'I say the truth in Christ, I lie not, my conscience also bearing me witness in the Holy Ghost,'),
            plain(2, 'That I have great heaviness and continual sorrow in my heart for my brethren, my kinsmen according to the flesh:'),
            plain(3, 'For I could wish that myself were accursed from Christ for my brethren, kinsmen according to the flesh:'),
            plain(6, 'Not as though the word of God hath taken none effect: for they are not all Israel, which are of Israel:'),
            plain(11, 'For the children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth;'),
            plain(14, 'What shall we say then? Is there unrighteousness with God? God forbid.'),
            plain(15, 'For he saith to Moses, I will have mercy on whom I will have mercy, and I will have compassion on whom I will have compassion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-love-sorrow',
          html:
            'Paul speaks with a broken heart. His love for his people is so profound that he could wish himself accursed if it meant their salvation. This is not abstract theology. This is the cry of a man torn between his knowledge of God&apos;s righteousness and his anguish for those who have rejected the gospel.',
        },
        {
          kind: 'greek',
          id: 'rom9-achos',
          title: 'Achos — Sorrow/Grief',
          script: 'ἄχος',
          translit: '<strong>Achos</strong> · sorrow; grief; anguish',
          description:
            'Achos is deep, consuming sorrow. It is not mere disappointment. It is the kind of grief that would lead someone to offer their own life if it could change things. Paul carries this for Israel.',
        },
        {
          kind: 'commentary',
          id: 'rom9-election',
          html:
            '"The children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth." Paul points to the choice of Jacob over Esau, made before either was born. This is not based on foreseen merit. This is the choice of God alone. Paul does not explain it. He presents it.',
        },
        {
          kind: 'greek',
          id: 'rom9-eklegomai',
          title: 'Eklegomai — Choose/Elect',
          script: 'ἐκλέγομαι',
          translit: '<strong>Eklegomai</strong> · choose; select; elect',
          description:
            'Eklegomai means to choose out, to select. When God elects, He chooses. The basis of that choice is His own will and purpose, not the merit of the chosen.',
        },
        {
          kind: 'christ',
          id: 'rom9-christ-mercy',
          title: 'Christ Connection — Mercy Through Grace',
          html:
            'Christ is the revelation of God&apos;s mercy. In Him, the purposes of God come to fulfillment, yet in a way that opens mercy to all who believe—Jew and Gentile alike. His life, death, and resurrection are the ultimate expression of God&apos;s sovereign will working toward redemption.',
        },
        {
          kind: 'carry',
          html:
            'Do not mistake God&apos;s sovereignty for indifference. Paul grieves precisely because he trusts God&apos;s character. He knows God is righteous. He does not understand why Israel is hardened, but he trusts the One who permits it. Hold both truths: God is sovereign, and God is merciful.',
        },
        {
          kind: 'reflection',
          id: 'rom9-mystery',
          prompt: 'How do you hold the tension between God&apos;s sovereignty and human responsibility? Where do you feel the mystery of that tension most keenly?',
        },
      ],
    },

    /* ─── Romans 9:19–33 — The Potter and the Vessels ─────────────────────── */
    {
      ref: 'Romans 9:19–33',
      title: 'The Vessels of Wrath and Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(21, 'Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?'),
            plain(22, 'What if God, willing to shew his wrath, and to make his power known, endured with much longsuffering the vessels of wrath fitted to destruction;'),
            plain(23, 'And that he might make known the riches of his glory on the vessels of mercy, which he had afore prepared unto glory,'),
            plain(30, 'Even us, whom he hath called, not of the Jews only, but also of the Gentiles?'),
            plain(33, 'As it is written, Behold, I lay in Sion a stumblingstone and rock of offence: and whosoever believeth on him shall not be ashamed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-potter',
          html:
            '"Hath not the potter power over the clay?" Paul appeals to Isaiah&apos;s metaphor. The potter shapes the clay according to his purpose. The vessels do not question their maker. Yet Paul does not say the vessels are passive. He says God endures them with longsuffering. There is a patience, a forbearance. God is not capricious.',
        },
        {
          kind: 'greek',
          id: 'rom9-skeuos',
          title: 'Skeuos — Vessel',
          script: 'σκεῦος',
          translit: '<strong>Skeuos</strong> · vessel; instrument; container',
          description:
            'A vessel is shaped for a purpose. The metaphor does not remove personhood. It speaks to the purpose and design of God. Each vessel has a role in the potter&apos;s workshop.',
        },
        {
          kind: 'commentary',
          id: 'rom9-stone',
          html:
            '"Behold, I lay in Sion a stumblingstone and rock of offence." Jesus Himself is this stone. To some, He is the foundation stone, precious and chosen. To others, He is an offense, a stumbling block. The same stone produces different responses based on how it is approached.',
        },
        {
          kind: 'christ',
          id: 'rom9-christ-stone',
          title: 'Christ Connection — The Stone Rejected and Chosen',
          html:
            'Christ is the stumbling stone for those who reject Him, the precious cornerstone for those who believe. He is the manifestation of God&apos;s sovereign purpose. His fate—rejection by some, reception by others—mirrors the ancient pattern Paul describes.',
        },
        {
          kind: 'carry',
          html:
            'Your confusion about God&apos;s purposes does not negate His righteousness. God may do things we do not understand. But He is never unrighteous. He does not delight in destruction. He endures with longsuffering. Trust that His purposes are good, even when you cannot see the pattern.',
        },
        {
          kind: 'reflection',
          id: 'rom9-potter-purpose',
          prompt: 'As a vessel in God&apos;s hand, what purpose do you sense He might have for you? What does it mean to trust His shaping, even when it feels confining?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I could wish that myself were accursed from Christ for my brethren. Not of works, but of him that calleth. Hath not the potter power over the clay? Whosoever believeth on him shall not be ashamed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 9 · Study Guide',
  },

  hasHebrew: false,
};
