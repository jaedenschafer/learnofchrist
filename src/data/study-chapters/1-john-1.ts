import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 John 1 — Light & Confession
 *
 * John speaks of that which he has seen and heard—the Word of life made manifest in
 * Christ. God is light, and in Him is no darkness at all. If we walk in light, we have
 * fellowship with Him and with one another. Yet no one is without sin. If we confess our
 * sins, He is faithful and just to forgive us our sins, and to cleanse us from all
 * unrighteousness.
 */
export const FIRST_JOHN_1: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 1,

  intros: [
    'John opens his epistle with a bold claim: he testifies to what he has seen and heard—the Word of life. Jesus Christ is not a phantom or spiritual idea. He was made manifest. He was physical. He could be touched, observed, heard. From this incarnate reality flows the whole gospel.',
    'John then pivots to the nature of God: God is light. In Him dwells no darkness. To walk in light is to walk with God, to have true fellowship. Yet this light also reveals. It exposes our sin. In response, believers are called to confession—not mere regret, but naming sin, turning from it, trusting in God&apos;s faithful forgiveness.',
  ],

  sections: [
    /* ─── 1 John 1:1–7 — The Word of Life ────────────────────────── */
    {
      ref: '1 John 1:1–7',
      title: 'What We Have Seen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, of the Word of life;'),
            plain(2, '(For the life was manifested, and we have seen it, and bear witness, and shew unto you that eternal life, which was with the Father, and was manifested unto us;)'),
            plain(3, 'That which we have seen and heard declare we unto you, that ye also may have fellowship with us: and truly our fellowship is with the Father, and with his Son Jesus Christ.'),
            plain(5, 'This then is the message which we have heard of him, and declare unto you, That God is light: and in him is no darkness at all.'),
            plain(6, 'If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth:'),
            plain(7, 'But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john1-witness',
          html:
            'John emphasizes the physicality of testimony. He has heard. He has seen with his own eyes. He has looked upon. He has touched. This is not abstract belief in an idea. It is testimony to a person—to Jesus Christ in bodily form. The Word of life was manifested, made visible, made tangible.',
        },
        {
          kind: 'greek',
          id: '1john1-logos',
          title: 'Logos — Word',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · word; reason; divine principle; the expression of thought',
          description:
            'John uses logos—a word rich with meaning in Greek philosophy and in Hebrew thought. The Word is not arbitrary sound but the expression of God&apos;s being and will. In Jesus, the Logos became flesh.',
        },
        {
          kind: 'commentary',
          id: '1john1-light',
          html:
            'God is light. This is John&apos;s fundamental statement about God&apos;s nature. Light reveals. Light exposes. Light illuminates. In God dwells no darkness—no hidden cruelty, no secret malice, no deception. To walk in light is to walk toward the truth about God and about ourselves.',
        },
        {
          kind: 'christ',
          id: '1john1-christ-light',
          title: 'Christ Connection — The Light of the World',
          html:
            'Jesus is the light of the world. When He speaks, He illuminates truth. When His followers walk in Him, they walk in light. His light reveals sin, yes, but also reveals the way of redemption. To be in Christ is to be in light.',
        },
        {
          kind: 'carry',
          html:
            'John presses the paradox: if we claim to have fellowship with God while walking in darkness—embracing lies, harboring hidden sin, refusing the truth—we lie and do not do the truth. Fellowship with God is not compatible with deliberate darkness. But if we walk in light, we have fellowship with Him and with each other, and His blood cleanses us from all sin.',
        },
        {
          kind: 'reflection',
          id: '1john1-light',
          prompt: 'What darkness in your life is God&apos;s light revealing? What would it mean to walk in the light with Him?',
        },
      ],
    },

    /* ─── 1 John 1:8–10 — Confession & Forgiveness ────────────────── */
    {
      ref: '1 John 1:8–10',
      title: 'Confess & Be Forgiven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'If we say that we have no sin, we deceive ourselves, and the truth is not in us.'),
            plain(9, 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.'),
            plain(10, 'If we say that he hath not sinned, we make him a liar, and his word is not in us.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john1-no-sin',
          html:
            'John addresses self-deception. Some claim to have no sin. This is not humility but delusion. Every human being sins. To deny this is to reject the verdict of Scripture and the witness of our own conscience. Worse, it is to make God a liar, for God declares that all have sinned.',
        },
        {
          kind: 'greek',
          id: '1john1-homologeo',
          title: 'Homologeo — To Confess',
          script: 'ὁμολογέω',
          translit: '<strong>Homologeo</strong> · to confess; to acknowledge; to agree with; to affirm',
          description:
            'Confession is not mere regret. It is acknowledging reality—agreeing with God about sin. It is naming it, owning it, turning from it. This is the prerequisite for forgiveness.',
        },
        {
          kind: 'commentary',
          id: '1john1-forgiveness',
          html:
            'The promise is absolute: if we confess our sins, God is faithful and just to forgive us. Not grudgingly, not conditionally, but faithfully and justly. He has made a covenant to forgive those who repent. He is bound by His own character to honor that promise. And He does not merely forgive; He cleanses us from all unrighteousness.',
        },
        {
          kind: 'christ',
          id: '1john1-christ-cleansing',
          title: 'Christ Connection — Cleansed by His Blood',
          html:
            'Christ&apos;s blood is the basis of our cleansing. He died for our sins. He rose and ascended. He now intercedes for us. When we confess, His blood applies to us—we are washed clean, made righteous, restored to fellowship with God.',
        },
        {
          kind: 'carry',
          html:
            'This is the gospel in miniature: recognition of sin, confession, and forgiveness. The way back to God is always open. There is no sin too great for God to forgive if the heart turns in repentance. But the path requires honesty. We cannot confess what we refuse to name. We cannot be forgiven if we deceive ourselves about our condition.',
        },
        {
          kind: 'reflection',
          id: '1john1-confess',
          prompt: 'Is there sin in your life you need to confess? What would it mean to agree with God about it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, of the Word of life. God is light: and in him is no darkness at all. If we confess our sins, he is faithful and just to forgive us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 1 · Study Guide',
  },

  hasHebrew: false,
};
