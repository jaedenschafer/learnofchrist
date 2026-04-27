import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 4 — Abraham&apos;s Faith Counted for Righteousness
 *
 * How did Abraham become righteous? Not through works or the law—the law
 * came 430 years later. He was made righteous through faith, before
 * circumcision, because he believed God. He is the father of all that
 * believe, Jew and Gentile alike.
 */
export const ROMANS_4: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 4,

  intros: [
    'Paul now grounds his theology in Israel&apos;s own ancestor. Abraham believed God, and it was counted unto him for righteousness. This was not a payment earned. It was a declaration based on faith. Moreover, this happened before Abraham was circumcised, before the law was given, before any external mark or work. Abraham stands as the pattern of all who believe.',
    'The promise to Abraham was not that he would follow a law. It was that he would inherit the earth, that his seed would be as numerous as the stars. This promise rested entirely on God&apos;s word and Abraham&apos;s willingness to believe it even when it seemed humanly impossible. Abraham became the father of many nations—not through descent alone, but through faith. All who believe, whether born to Israel or not, are children of Abraham.',
  ],

  sections: [
    /* ─── Romans 4:1–12 — Faith Credited Before the Law ──────────────────── */
    {
      ref: 'Romans 4:1–12',
      title: 'Faith Reckoned as Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(3, 'For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness.'),
            plain(5, 'But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness.'),
            plain(9, 'Cometh this blessedness then upon the circumcised only, or upon the uncircumcised also? for we say that faith was reckoned to Abraham for righteousness.'),
            plain(10, 'How was it then reckoned? when he was in circumcision, or in uncircumcision? Not in circumcision, but in uncircumcision.'),
            plain(11, 'And he received the sign of circumcision, a seal of the righteousness of the faith which he had yet being uncircumcised: that he might be the father of all them that believe, though they be not circumcised; that righteousness might be imputed unto them also:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-abraham',
          html:
            'Paul goes back to Genesis to show that Abraham&apos;s righteousness rested not on circumcision or any work of the law, but on faith alone. Abraham believed God&apos;s promise when it seemed impossible. He was old; Sarah was barren. Yet he "believed against hope that he might become the father of many nations." That faith—that willingness to stake everything on God&apos;s word—was what made him righteous.',
        },
        {
          kind: 'greek',
          id: 'rom4-logizomai',
          title: 'Logizomai — Reckon/Count',
          script: 'λογίζομαι',
          translit: '<strong>Logizomai</strong> · reckon; count; regard; credit',
          description:
            'Logizomai is a financial term. It means to place something to an account, to credit. God does not make Abraham righteous through a transformation of his character. He reckons—credits—righteousness to him on the basis of his faith. This is not earned. It is credited, as if it were already fully paid.',
        },
        {
          kind: 'commentary',
          id: 'rom4-ungodly',
          html:
            '"To him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness." Notice the phrase "justifieth the ungodly." God does not wait until we are righteous to declare us righteous. He justifies the ungodly—those who are, in fact, still trapped in sin. The faith that reaches toward Him in that condition is the faith that is credited.',
        },
        {
          kind: 'christ',
          id: 'rom4-christ-faith',
          title: 'Christ Connection — The One Who Justifies',
          html:
            'Christ is the one who justifies the ungodly. He does not make us acceptable through a process of self-improvement. He declares us accepted, on the basis of our faith in Him. This is what Abraham experienced in shadow. In Christ, it becomes clear: God justifies not the righteous but the believing.',
        },
        {
          kind: 'carry',
          html:
            'Do you believe that you must clean yourself up before you can approach God? That you must earn your way into His favor? Abraham teaches otherwise. He came to God as he was—faithless until faith was given, helpless until hope was awakened. What would change if you simply believed God&apos;s word about who you are, even before you feel like it is true?',
        },
        {
          kind: 'reflection',
          id: 'rom4-believe',
          prompt: 'Where is God calling you to believe despite circumstance? What would it mean to rest your identity on His word rather than on your performance?',
        },
      ],
    },

    /* ─── Romans 4:17–25 — The Promise and the Resurrection ────────────── */
    {
      ref: 'Romans 4:17–25',
      title: 'Belief in the Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(17, '(As it is written, I have made thee a father of many nations,) before him whom he believed, even God, who quickeneth the dead, and calleth those things which be not as though they were:'),
            plain(18, 'Who against hope believed in hope, that he might become the father of many nations, according to that which was spoken, So shall thy seed be.'),
            plain(21, 'And being fully persuaded that, what he had promised, he was able also to perform.'),
            plain(24, 'Now it was not written for his sake alone, that it was imputed to him;'),
            plain(25, 'But for us also, to whom it shall be imputed, if we believe on him that raised up Jesus our Lord from the dead;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-dead-faith',
          html:
            'Abraham believed in God "who quickeneth the dead"—who makes the dead live. This is the character of God. He does not work with what exists. He calls things that do not exist into being. And when Abraham believed, he was believing in this God. His faith was not in circumstances. It was in the power and faithfulness of the God who makes dead things live.',
        },
        {
          kind: 'greek',
          id: 'rom4-zoopoieo',
          title: 'Zoopoieo — Quicken/Make Alive',
          script: 'ζωοποιέω',
          translit: '<strong>Zoopoieo</strong> · quicken; make alive; give life',
          description:
            'This is the same verb Paul will use to describe what God does in Christ—raising Him from the dead and raising us with Him. Abraham believed in the power that would, centuries later, raise Christ. This is the connection: faith in God&apos;s power over death.',
        },
        {
          kind: 'commentary',
          id: 'rom4-promise',
          html:
            'The promise to Abraham was that his seed would be as numerous as the stars—uncountable, beyond measure. But Abraham and Sarah were past the age of bearing children. Yet Abraham believed not what his body told him but what God promised. "Being fully persuaded that, what he had promised, he was able also to perform."',
        },
        {
          kind: 'christ',
          id: 'rom4-christ-resurrection',
          title: 'Christ Connection — Our Faith Is in the Resurrection',
          html:
            'Paul makes explicit what was implicit in Abraham: our faith is in God who raised Jesus from the dead. What Abraham believed in shadow, we believe in reality. The One who raised Christ is the One who justifies all who believe. Our faith rests on the resurrection—the ultimate proof that God has power over death itself.',
        },
        {
          kind: 'carry',
          html:
            'Abraham believed against all visible evidence. No child. No nation. Yet he was persuaded that God was able to perform His promise. What is God asking you to believe in against the evidence of circumstances? What would persuasion look like—not feeling good about it, but being fully convinced that God is able?',
        },
        {
          kind: 'reflection',
          id: 'rom4-resurrection-faith',
          prompt: 'How does your faith rest on the resurrection of Christ? What changes if you see His rising as the proof of everything God has promised?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Abraham believed God, and it was counted unto him for righteousness. Faith was reckoned to Abraham for righteousness. Who against hope believed in hope, that he might become the father of many nations.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 4 · Study Guide',
  },

  hasHebrew: false,
};
