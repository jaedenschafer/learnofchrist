import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 6 — Dead to Sin, Alive in Christ
 *
 * If grace abounds, are we free to sin? No. Those baptized into Christ are
 * baptized into His death. We are dead to sin and alive to God. The wages
 * of sin is death; but the gift of God is eternal life through Jesus Christ.
 */
export const ROMANS_6: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 6,

  intros: [
    'A question looms: If grace abounds and sin abounds much more under grace, should we not continue in sin that grace may abound? It is a perversion of Paul&apos;s message, yet a natural objection. Paul meets it with a profound truth: those who are in Christ are no longer bound to sin. Through baptism, you have died with Him. You have been buried with Him. You have been raised with Him. You are a new creation, no longer enslaved.',
    'Romans 6 is the charter of Christian freedom. Not freedom to sin, but freedom from sin. Those who belong to Christ are no longer slaves to the flesh, to fear, to appetite, to death. They are alive to God. The old master—sin—no longer has authority. A new master—righteousness—now claims their allegiance.',
  ],

  sections: [
    /* ─── Romans 6:1–14 — Dead to Sin, Alive to God ────────────────────── */
    {
      ref: 'Romans 6:1–14',
      title: 'Baptism Into Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(3, 'Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death?'),
            plain(4, 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.'),
            plain(6, 'Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin.'),
            plain(9, 'Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.'),
            plain(11, 'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord.'),
            plain(23, 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-baptized',
          html:
            'Baptism into Christ is not external water alone. It is a plunging into His death and burial and resurrection. The waters close over you as the grave closed over Him. You die—your old self, your slavery to sin, your hopelessness. But like Him, you are raised. You emerge transformed.',
        },
        {
          kind: 'greek',
          id: 'rom6-thanatos',
          title: 'Thanatos — Death',
          script: 'θάνατος',
          translit: '<strong>Thanatos</strong> · death; the realm of death; separation from God',
          description:
            'For Paul, death is not merely the cessation of life. It is the wages of sin, the separation from God, the ultimate consequence of rebellion. To be baptized into Christ&apos;s death is to die to that separateness, to be reconciled.',
        },
        {
          kind: 'commentary',
          id: 'rom6-newness',
          html:
            '"Even so we also should walk in newness of life." To reckon yourself dead to sin is not merely an intellectual exercise. It is a claim upon a new way of living. You are alive to God. Your will is no longer enslaved to appetite and habit. You can now choose obedience—choose it not from compulsion but from a new allegiance.',
        },
        {
          kind: 'greek',
          id: 'rom6-kainos',
          title: 'Kainos — Newness',
          script: 'καινός',
          translit: '<strong>Kainos</strong> · new; freshly made; unprecedented; not worn out',
          description:
            'Kainos is not merely the passage of time (chronos) but newness in kind, something qualitatively different. To walk in newness of life is to walk in a way previously impossible—a way of righteousness available only through identification with Christ.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-raised',
          title: 'Christ Connection — Risen and Alive',
          html:
            'Christ was raised from the dead and will die no more. Death has no dominion over Him. Those baptized into Him share this status. You are no longer subject to sin&apos;s dominion. You are raised and alive in Him.',
        },
        {
          kind: 'carry',
          html:
            'Paul says to "reckon yourselves dead indeed unto sin." This is a reckoning—an act of faith and will. You may not feel dead to sin. Sin may still cry out for your allegiance. But if you are baptized into Christ, the truth is already established. Your task is to believe it and live from it.',
        },
        {
          kind: 'reflection',
          id: 'rom6-dead-alive',
          prompt: 'Where do you still feel enslaved to sin? What would it mean to reckon yourself dead to that sin and alive to God, even before your feelings catch up?',
        },
      ],
    },

    /* ─── Romans 6:15–23 — Servants of Righteousness ────────────────────── */
    {
      ref: 'Romans 6:15–23',
      title: 'The Freedom of Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(15, 'What then? shall we sin, because we are not under the law, but under grace? God forbid.'),
            plain(16, 'Know ye not, that to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey; whether of sin unto death, or of obedience unto righteousness?'),
            plain(18, 'Being then made free from sin, ye became the servants of righteousness.'),
            plain(22, 'But now being made free from sin, and become servants to God, ye have your fruit unto holiness, and the end everlasting life.'),
            plain(23, 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-servants',
          html:
            '"To whom ye yield yourselves servants to obey, his servants ye are." Paul presents a stark choice: every human being serves someone. You are either enslaved to sin or enlisted to righteousness. There is no neutral ground. The question is not whether you will serve but whom.',
        },
        {
          kind: 'greek',
          id: 'rom6-doulos',
          title: 'Doulos — Servant/Slave',
          script: 'δοῦλος',
          translit: '<strong>Doulos</strong> · servant; slave; one completely under another&apos;s authority',
          description:
            'A doulos is not a hireling who can walk away. It is one whose will is bound to another&apos;s. To be a doulos of righteousness is to yield your whole self—not reluctantly but willingly—to obedience that leads to life.',
        },
        {
          kind: 'commentary',
          id: 'rom6-wages',
          html:
            '"The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord." A wage is earned by work. Sin earns death. But life is not earned. It is a gift—the free gift of God. This verse encapsulates the entire gospel: the consequence of sin is certain and just. But grace intervenes, offering not what is earned but what is given.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-wages',
          title: 'Christ Connection — Life Freely Given',
          html:
            'Jesus Christ bore the wages of sin—death itself. He did not earn eternal life through His goodness. He received it as the gift of the Father and now offers it to all who believe. Life eternal is His to give.',
        },
        {
          kind: 'carry',
          html:
            'Do not mistake freedom for slavery. To be free from sin does not mean freedom to do anything. It means freedom from the compulsion to sin, and alignment with a new master—righteousness. This is true freedom, because righteousness leads to life. Obey righteousness and reap holiness and eternal life.',
        },
        {
          kind: 'reflection',
          id: 'rom6-obedience-life',
          prompt: 'Where in your life are you being called to shift your allegiance—to stop serving sin and start serving righteousness? What would it take to make that shift real?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We are baptized into Jesus Christ, baptized into his death. Our old man is crucified with him. The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 6 · Study Guide',
  },

  hasHebrew: false,
};
