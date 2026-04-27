import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 11 — The Olive Tree and Israel&apos;s Future
 *
 * "God hath not cast away his people which he foreknew." A remnant remains.
 * The hardening is partial and temporary. Wild branches grafted in must not
 * boast. "All Israel shall be saved." The depth of God&apos;s wisdom is unsearchable.
 */
export const ROMANS_11: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 11,

  intros: [
    'Paul reassures both Jews and Gentiles. To the Jews: God has not forsaken you. A remnant of believers stands even now, chosen by grace. To the Gentiles: Do not boast against the branches that have been broken off. You are wild olive branches, grafted in by grace, not by merit. The tree is Israel&apos;s tree, and the nourishment comes from the roots—Abraham, Isaac, and Jacob.',
    'Romans 11 concludes with Paul&apos;s vision of Israel&apos;s future: all Israel shall be saved. Not by different means, not by a different gospel, but through the same grace that has always worked. The hardening of some serves to open the door to the Gentiles. And the Gentiles are brought in to provoke Israel to jealousy, that they too might believe.',
  ],

  sections: [
    /* ─── Romans 11:1–10 — The Remnant Remains ───────────────────────────── */
    {
      ref: 'Romans 11:1–10',
      title: 'A Remnant Chosen by Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'I say then, Hath God cast away his people? God forbid. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin.'),
            plain(5, 'Even so then at this present time also there is a remnant according to the election of grace.'),
            plain(6, 'And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then it is no more grace: otherwise work is no more work.'),
            plain(7, 'What then? Israel hath not obtained that which he seeketh for; but the election hath obtained it, and the rest were blinded.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-not-cast-away',
          html:
            '"God hath not cast away his people." Paul speaks from personal conviction. He himself is living proof—an Israelite, from the tribe of Benjamin, now a believer in Christ. If God had cast Israel away, Paul would not exist. The promise cannot be absolute rejection.',
        },
        {
          kind: 'greek',
          id: 'rom11-apotheo',
          title: 'Apotheo — Cast Away',
          script: 'ἀποθέω',
          translit: '<strong>Apotheo</strong> · cast away; thrust out; reject utterly',
          description:
            'Apotheo means total rejection, complete abandonment. Paul insists this has not happened. The covenant remains. The promise stands. There is a future for Israel.',
        },
        {
          kind: 'commentary',
          id: 'rom11-remnant',
          html:
            '"A remnant according to the election of grace." It has always been this way. Never all Israel, but always a remnant. A remnant was saved at the flood. A remnant returned from captivity. A remnant believes in Christ. This is the pattern of God&apos;s work.',
        },
        {
          kind: 'greek',
          id: 'rom11-leimma',
          title: 'Leimma — Remnant',
          script: 'λείμμα',
          translit: '<strong>Leimma</strong> · remnant; remainder; those left behind',
          description:
            'The remnant is not all, but it is genuine. It is the faithful few who preserve and continue the promises. In every generation, God has reserved to Himself those who have not bowed the knee to false gods.',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-remnant',
          title: 'Christ Connection — Christ as the Remnant',
          html:
            'Christ Himself is the faithful remnant, the One who stands for Israel, who bears the promises and fulfills them. In Him, the remnant becomes complete and universal.',
        },
        {
          kind: 'carry',
          html:
            'Even in judgment and hardening, God preserves a remnant. This is a pattern of mercy. It means God never allows the covenant to be utterly broken. For you personally, it means that even in seasons of hardness or unfaithfulness in the broader church, God preserves the faithful.',
        },
        {
          kind: 'reflection',
          id: 'rom11-faithful',
          prompt: 'Where do you see God preserving the faithful—a remnant committed to truth—in your own time? How does the reality of the remnant encourage you?',
        },
      ],
    },

    /* ─── Romans 11:25–36 — All Israel Shall Be Saved ────────────────────── */
    {
      ref: 'Romans 11:25–36',
      title: 'The Fullness of the Gentiles, the Salvation of Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(25, 'For I would not, brethren, that ye should be ignorant of this mystery; Lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in.'),
            plain(26, 'And so all Israel shall be saved: as it is written, There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob:'),
            plain(33, 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!'),
            plain(35, 'Or who hath first given to him, and it shall be recompensed unto him again?'),
            plain(36, 'For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom11-mystery',
          html:
            '"For I would not, brethren, that ye should be ignorant of this mystery." Paul reveals a mystery—something hidden but now disclosed. The hardening of Israel is not final. It is temporary and partial, serving to open the door to the Gentiles. And when the Gentiles have come in fully, then Israel&apos;s eyes will open.',
        },
        {
          kind: 'greek',
          id: 'rom11-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>Mysterion</strong> · mystery; secret; hidden thing now revealed',
          description:
            'A mysterion is not an unsolvable problem. It is a truth hidden in the past but revealed in the present. God&apos;s plan for both Jew and Gentile was always one plan, now made visible.',
        },
        {
          kind: 'commentary',
          id: 'rom11-all-israel',
          html:
            '"All Israel shall be saved." Paul does not say each individual will be saved. He says "all Israel"—the people as a whole, the nation, the covenant people. They will be saved not by a different way but by turning to the One they rejected.',
        },
        {
          kind: 'commentary',
          id: 'rom11-unsearchable',
          html:
            '"O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments." Paul does not claim to have solved all problems. He marvels. He admits the depths he cannot fathom. His response is not explanation but worship.',
        },
        {
          kind: 'christ',
          id: 'rom11-christ-deliverer',
          title: 'Christ Connection — The Deliverer from Sion',
          html:
            'Christ is the Deliverer who comes out of Sion, who turns ungodliness from Jacob. His coming is the hinge upon which both Jewish and Gentile salvation turns. He is the One through whom all nations are blessed.',
        },
        {
          kind: 'carry',
          html:
            'Paul ends with wonder, not certitude. The ways of God are unsearchable. Do not pretend to have mapped them all. Instead, join Paul in worship: "For of him, and through him, and to him, are all things: to whom be glory for ever." This is the response to mystery—not understanding, but trust and praise.',
        },
        {
          kind: 'reflection',
          id: 'rom11-wonder',
          prompt: 'What are the deepest questions about God&apos;s plan and purpose that you cannot answer? How might you respond to those questions with wonder and worship rather than anxiety?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God hath not cast away his people. A remnant according to the election of grace. All Israel shall be saved. O the depth of the riches both of the wisdom and knowledge of God! For of him, and through him, and to him, are all things.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 11 · Study Guide',
  },

  hasHebrew: false,
};
