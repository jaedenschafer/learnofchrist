import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 8 — No Condemnation, Led by the Spirit
 *
 * "There is therefore now no condemnation to them which are in Christ Jesus."
 * Led by the Spirit. All things work together for good to them that love God.
 * "Who shall separate us from the love of Christ?" We are more than conquerors.
 */
export const ROMANS_8: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 8,

  intros: [
    'The answer to the cry of Romans 7 is the proclamation of Romans 8: "There is therefore now no condemnation to them which are in Christ Jesus." Not because the struggle has ceased, but because judgment has been removed. The law condemned us, but the Spirit of Christ liberates us. We are no longer slaves to the flesh. We are sons and daughters of God, led by His Spirit.',
    'Romans 8 is the hymn of triumph. Paul speaks of suffering, of groaning, of waiting in hope. Yet beneath it all runs a current of unshakeable confidence: God is for us. Nothing can separate us from the love of Christ. We are more than conquerors through Him. This is the freedom that grace offers—not freedom from struggle, but freedom in struggle, freedom from condemnation, freedom to become what we were made to be.',
  ],

  sections: [
    /* ─── Romans 8:1–17 — No Condemnation, Led by Spirit ────────────────── */
    {
      ref: 'Romans 8:1–17',
      title: 'The Spirit-Led Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.'),
            plain(5, 'For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit.'),
            plain(9, 'But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his.'),
            plain(14, 'For as many as are led by the Spirit of God, they are the sons of God.'),
            plain(15, 'For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.'),
            plain(17, 'And if children, then heirs; heirs of God, and joint-heirs with Christ;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-no-condemnation',
          html:
            '"There is therefore now no condemnation to them which are in Christ Jesus." This is not a feeling or a hope. It is a pronouncement. The judgment that rightly falls on the sinner has been transferred to Christ. To be in Christ is to be beyond the reach of condemnation.',
        },
        {
          kind: 'greek',
          id: 'rom8-katakrima',
          title: 'Katakrima — Condemnation',
          script: 'κατάκριμα',
          translit: '<strong>Katakrima</strong> · condemnation; adverse judgment; sentence',
          description:
            'Katakrima is the judicial sentence, the "guilty" verdict. But for those in Christ, that verdict has been set aside. Another stands in your place. Another bears the verdict. You walk free.',
        },
        {
          kind: 'commentary',
          id: 'rom8-spirit',
          html:
            '"If so be that the Spirit of God dwell in you." The presence of the Spirit is the marker of belonging to Christ. The Spirit is not something you must earn or become worthy of. The Spirit is given. He indwells you. He orients your will toward God.',
        },
        {
          kind: 'greek',
          id: 'rom8-pneuma',
          title: 'Pneuma — Spirit',
          script: 'πνεῦμα',
          translit: '<strong>Pneuma</strong> · spirit; breath; wind; the Holy Spirit',
          description:
            'The Spirit is the breath of God, His presence and power. To be led by the Spirit is to be guided by the very life-giving force that raised Christ from the dead. It is to be given a will that is truly free.',
        },
        {
          kind: 'commentary',
          id: 'rom8-adoption',
          html:
            '"Ye have received the Spirit of adoption, whereby we cry, Abba, Father." Adoption is not a biological relationship. It is a chosen relationship. God adopts you not because you were born to Him but because He willed to make you His own. And you can call Him Father—Abba, a word of intimate tenderness.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-heirs',
          title: 'Christ Connection — Joint-Heirs With Christ',
          html:
            'Because you are adopted as children of God, you inherit what Christ inherits. You are joint-heirs with Him. His sufferings become your sufferings, but so do His glorification and His reward.',
        },
        {
          kind: 'carry',
          html:
            'You are no longer a servant, trembling before God. You are a child, able to call Him Father. This changes everything. Your obedience is no longer driven by fear of condemnation. It flows from the relationship of child to parent, of one loved and adopted to One who loves.',
        },
        {
          kind: 'reflection',
          id: 'rom8-son-daughter',
          prompt: 'What does it mean to you to be an adopted child of God, with the right to call Him Father? How does this reshape your relationship with Him and with obedience?',
        },
      ],
    },

    /* ─── Romans 8:28–39 — All Things Work for Good; Unstoppable Love ────── */
    {
      ref: 'Romans 8:28–39',
      title: 'More Than Conquerors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(28, 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.'),
            plain(31, 'What shall we then say to these things? If God be for us, who can be against us?'),
            plain(35, 'Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?'),
            plain(37, 'Nay, in all these things we are more than conquerors through him that loved us.'),
            plain(38, 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-all-things',
          html:
            '"All things work together for good to them that love God." This does not mean all things are good. It means God is able to use all things—even suffering, even injustice—in service of the good. This is not a promise of easy circumstances. It is a promise of redemption working in all circumstances.',
        },
        {
          kind: 'greek',
          id: 'rom8-sunergeo',
          title: 'Sunergeo — Work Together',
          script: 'συνεργέω',
          translit: '<strong>Sunergeo</strong> · work together; co-work; combine toward a purpose',
          description:
            'The Greek word suggests that all the forces at work in your life—suffering, joy, loss, gain, even what seems like chance—are working together like workers on the same project. God is the master of the project. Nothing is random to Him.',
        },
        {
          kind: 'commentary',
          id: 'rom8-for-us',
          html:
            '"If God be for us, who can be against us?" This is the fundamental question. God is not neutral. He is not indifferent to your fate. He has taken your side. He is for you. The universe itself may rage, but the Lord of the universe stands with you.',
        },
        {
          kind: 'commentary',
          id: 'rom8-conquerors',
          html:
            '"Nay, in all these things we are more than conquerors through him that loved us." A conqueror wins. But "more than a conqueror" means you win and emerge strengthened, refined, deeper in love. The suffering becomes a means of transformation. You come through it not diminished but enlarged.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-love',
          title: 'Christ Connection — Love That Nothing Can Break',
          html:
            'The love of Christ is not abstract. It is proven in His willingness to die for you. That love is the ground upon which all confidence rests. No power—not death, not demons, not fate—can break His claim on you.',
        },
        {
          kind: 'carry',
          html:
            'When suffering comes—and it will—remember: you are not abandoned. All things work toward good. God is for you. Nothing can separate you from His love. This does not remove the pain. But it removes the fear that accompanies pain. You are held. You are known. You are loved.',
        },
        {
          kind: 'reflection',
          id: 'rom8-separated',
          prompt: 'What in your life makes you afraid you might be separated from God&apos;s love? How does Paul&apos;s confidence in the unstoppable nature of that love speak to your deepest fears?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There is therefore now no condemnation to them which are in Christ Jesus. If God be for us, who can be against us? We are more than conquerors through him that loved us. Nothing shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 8 · Study Guide',
  },

  hasHebrew: false,
};
