import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 2 — Judgment According to Deeds
 *
 * Paul turns the lens back upon the judge. You who condemn others—do you
 * do the same? Jew and Gentile are both accountable to God. Possession of
 * the law does not save; obedience does. True circumcision is that of the
 * heart, in the spirit, not the letter.
 */
export const ROMANS_2: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 2,

  intros: [
    'Paul has exposed the human condition. Now he turns his judgment inward. Perhaps the reader has nodded in agreement—yes, the Gentiles suppress the truth, they exchange God&apos;s glory for idols, they fall into depravity. But Paul does not allow this. He points the finger at the one who judges. Do you condemn these things? Then in condemning them, you condemn yourself, for you do the same things. The same God who judges the Gentile judges the Jew, the insider, the one who possesses the law.',
    'In Romans 2, God&apos;s judgment becomes personal and unavoidable. There is no hiding place in possession of scripture, in the rite of circumcision, in ethnic identity, in religious status. God judges according to deeds. The law is not mere information. It is a mirror of God&apos;s character. And true obedience is obedience of the heart—the circumcision of the spirit, not the flesh.',
  ],

  sections: [
    /* ─── Romans 2:1–11 — No Partiality with God ───────────────────────── */
    {
      ref: 'Romans 2:1–11',
      title: 'God&apos;s Impartial Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Therefore thou art inexcusable, O man, whosoever thou art that judgest: for wherein thou judgest another, thou condemnest thyself; for thou that judgest doest the same things.'),
            plain(3, 'And thinkest thou this, O man, that judgest them which do such things, and doest the same, that thou shalt escape the judgment of God?'),
            plain(5, 'But after thy hardness and impenitent heart treasurest up unto thyself wrath against the day of wrath and revelation of the righteous judgment of God;'),
            plain(6, 'Who will render to every man according to his deeds:'),
            plain(10, 'But glory, honour, and peace, to every man that worketh good, to the Jew first, and also to the Gentile:'),
            plain(11, 'For there is no respect of persons with God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-judge-self',
          html:
            'Paul exposes hypocrisy with surgical precision. When you judge another person for a sin, you are implicitly claiming that you yourself do not do it. But the moment you judge, you stand under the same judgment. You cannot elevate yourself above the law by wielding the law as a weapon against others. The standard by which you measure falls upon you.',
        },
        {
          kind: 'greek',
          id: 'rom2-aprosopolemtos',
          title: 'Aprosopalemptos — No Respect of Persons',
          script: 'ἀπροσωπόλημπτος',
          translit: '<strong>Aprosopalemptos</strong> · impartial; showing no favoritism',
          description:
            'God judges not according to appearance, status, or membership. He looks at the heart and the deeds. Neither being born into Israel nor claiming knowledge of the law shields anyone from this judgment. God sees what is truly there—the hidden intent, the weight of habit, the trajectory of the will.',
        },
        {
          kind: 'commentary',
          id: 'rom2-deeds',
          html:
            '"God will render to every man according to his deeds." This is the principle announced throughout scripture. Not according to intention alone, not according to knowledge alone, but according to the sum of what one actually does, the choices one has made, the pattern of the will. Judgment is real. It is not arbitrary. It follows the logic of creation itself.',
        },
        {
          kind: 'christ',
          id: 'rom2-christ-judge',
          title: 'Christ Connection — The Judge and the Judged',
          html:
            'Christ is the one who judges according to deeds—the one before whom all secrets are laid bare. Yet He is also the one who receives the penitent. He judges not to condemn but to reconcile, not to banish but to restore. In Him, judgment becomes mercy for those who turn.',
        },
        {
          kind: 'carry',
          html:
            'Before you judge another, ask yourself: Am I guilty of this same thing? The answer is often yes. This does not mean we never speak truth to wrong. It means we speak it with humility, knowing that we too stand under judgment. What judgment are you harboring against another that might be a mirror of your own hidden heart?',
        },
        {
          kind: 'reflection',
          id: 'rom2-humility',
          prompt: 'Is there someone whose sin you have judged while ignoring the same sin in yourself? What would it look like to approach that situation with humility instead of judgment?',
        },
      ],
    },

    /* ─── Romans 2:25–29 — Circumcision of the Heart ────────────────────── */
    {
      ref: 'Romans 2:25–29',
      title: 'Circumcision of the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(25, 'For circumcision verily profiteth, if thou keep the law: but if thou be a breaker of the law, thy circumcision is made uncircumcision.'),
            plain(27, 'And shall not uncircumcision which is by nature, if it fulfil the law, judge thee, who by the letter and circumcision dost transgress the law?'),
            plain(28, 'For he is not a Jew which is one outwardly; neither is that circumcision, which is outward in the flesh:'),
            plain(29, 'But he is a Jew which is one inwardly; and circumcision is that of the heart, in the spirit, and not in the letter; whose praise is not of men, but of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom2-mark',
          html:
            'Circumcision was the sign of the covenant, the mark of belonging to God&apos;s people. But a mark without obedience becomes worthless. What does it mean to be marked as God&apos;s if the heart is not God&apos;s? Paul is not dismissing external signs. He is insisting that external signs mean nothing without internal transformation. A man with the mark but without the heart is no true Jew.',
        },
        {
          kind: 'greek',
          id: 'rom2-kardia',
          title: 'Kardia — Heart',
          script: 'καρδία',
          translit: '<strong>Kardia</strong> · heart; center of desires, will, and conscience',
          description:
            'In Hebrew and Greek thought, the heart is not primarily the seat of emotion. It is the center of will, moral choice, and inner orientation. The heart is where we truly believe, truly decide, truly belong. Circumcision of the heart means that the innermost will is oriented toward God.',
        },
        {
          kind: 'commentary',
          id: 'rom2-spirit',
          html:
            '"Circumcision is that of the heart, in the spirit, and not in the letter." The law is written on stone, written in letters. But God&apos;s true covenant is written on the heart itself. This is not written law that must be learned and memorized. This is the Spirit of God Himself inscribing the law upon the inmost being. The barrier between law and obedience is removed.',
        },
        {
          kind: 'christ',
          id: 'rom2-christ-covenant',
          title: 'Christ Connection — The New Covenant',
          html:
            'Christ is the one who circumcises the heart. He does not abolish the law. He fulfills it and internalizes it. In Him, the promise made to Jeremiah is fulfilled: God writes His law upon the heart itself, making obedience not a burden from outside but an overflow from within.',
        },
        {
          kind: 'carry',
          html:
            'Do you rely on external marks of faith? A church membership, a prayer said correctly, a rule followed? These are not wrong. But they are nothing without the circumcision of the heart. Ask yourself: Is my faith an external conformity or an inward transformation? Is my obedience from habit or from love?',
        },
        {
          kind: 'reflection',
          id: 'rom2-heart',
          prompt: 'Where are you tempted to substitute external obedience for genuine inward transformation? What would it take to move from doing the right thing to loving the right thing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou that judgest doest the same things. God will render to every man according to his deeds. He is a Jew which is one inwardly; and circumcision is that of the heart, in the spirit, and not in the letter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 2 · Study Guide',
  },

  hasHebrew: false,
};
