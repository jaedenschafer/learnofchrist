import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 15 — The Jerusalem Council
 *
 * A controversy arises: must Gentile believers undergo circumcision and keep the
 * law of Moses? Some teachers from Jerusalem insist on it; Paul and Barnabas
 * oppose. The church gathers in Jerusalem. Peter, James, and Paul testify to the
 * Spirit&apos;s work among Gentiles. The council decides: Gentiles are not required
 * to be circumcised, though they should abstain from certain practices out of
 * respect for Jewish believers. A new unity settles over the church.
 */
export const ACTS_15: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 15,

  intros: [
    'The issue that erupts at Antioch is no small matter. Some teachers from Jerusalem arrive with a doctrine: "Except ye be circumcised after the manner of Moses, ye cannot be saved." They are not merely advocating a cultural practice; they are insisting on a condition for salvation itself. If this doctrine is true, then faith in Christ is not enough. The law must still be kept.',
    'Paul and Barnabas resist. But the controversy does not stay local. It erupts into such disagreement that the church decides to send Paul, Barnabas, and others to Jerusalem to lay the matter before the apostles and elders. In that council, the church will wrestle with the deepest question: what is the relationship between faith in Christ and obedience to the law? The answer will reshape the entire character of the gospel.',
  ],

  sections: [
    {
      ref: 'Acts 15:1–21',
      title: 'The Dispute and the Council',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'And certain men which came down from Judaea taught the brethren, and said, Except ye be circumcised after the manner of Moses, ye cannot be saved.'),
            plain(7, 'And when there had been much disputing, Peter rose up, and said unto them, Men and brethren, ye know how that a good while ago God made choice among you, that the Gentiles by my mouth should hear the word of the gospel, and believe.'),
            plain(8, 'And God, which knoweth the hearts, bare them witness, giving them the Holy Ghost, even as he did unto us;'),
            plain(11, 'But we believe that through the grace of the Lord Jesus Christ we shall be saved, even as they.'),
            plain(19, 'Wherefore my sentence is, that we trouble not them, which from among the Gentiles are turned to God:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-circumcision-condition',
          html:
            'The teaching from Jerusalem places a condition on salvation: circumcision. This is not merely cultural or identity-based. It is a theological claim that grace is not sufficient, that faith in Christ must be paired with obedience to the law. Paul sees that this threatens the entire gospel.',
        },
        {
          kind: 'greek',
          id: 'acts15-diakrinon',
          title: 'Diakrinon — Disputing; Judging',
          script: 'διακρίνω',
          translit: '<strong>Diakrinon</strong> · to separate; to distinguish; to dispute; to judge',
          description:
            'There is much disputing—vigorous debate, not mere discussion. The council is divided on a question that matters: the very definition of who belongs in God&apos;s people. Peter rises and speaks from his own experience with Cornelius, cutting through the debate with the witness of the Spirit.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-sufficient',
          title: 'Christ Connection — Grace Sufficient for All',
          html:
            'Peter testifies that he, the circumcised leader, and the Gentiles are on equal footing before God. Both are saved through the grace of the Lord Jesus Christ, not through works of the law. James agrees, citing the testimony of the prophets. The council concludes that faith in Christ is the sole condition for salvation.',
        },
        {
          kind: 'carry',
          html:
            'We are prone to add conditions to grace. We believe faith in Christ is necessary, but we wonder if it is sufficient. We add moral perfection, spiritual maturity, correct doctrine, right practice. But the council at Jerusalem declares: grace through faith in Christ is enough. Everything else flows from that foundation, not as a condition but as a response.',
        },
        {
          kind: 'reflection',
          id: 'acts15-grace',
          prompt: 'What conditions do you tend to add to grace? What would it mean to trust that faith in Christ is genuinely sufficient for your salvation?',
        },
      ],
    },

    {
      ref: 'Acts 15:22–35',
      title: 'The Letter and the Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(28, 'For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things;'),
            plain(29, 'That ye abstain from meats offered to idols, and from blood, and from things strangled, and from fornication: from which if ye keep yourselves, ye shall do well. Fare ye well.'),
            plain(30, 'So when they were dismissed, they came to Antioch: and when they had gathered the multitude together, they delivered the letter:'),
            plain(31, 'Which when they had read, they rejoiced for the consolation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-burden',
          html:
            'The council does not remove all expectations. Gentile believers are asked to abstain from certain practices: meats offered to idols, blood, things strangled, and fornication. These are not conditions of salvation, but courtesies to their Jewish brothers who find these practices problematic. Grace and community responsibility are held together.',
        },
        {
          kind: 'greek',
          id: 'acts15-epanagkes',
          title: 'Epanagkes — Necessary; Burden',
          script: 'ἐπάναγκες',
          translit: '<strong>Epanagkes</strong> · necessary; binding; constraining burden',
          description:
            'The council calls these practices "necessary"—not for salvation, but for community harmony and respect. The burden is light, yet it acknowledges that love for others may require us to limit our own freedom. Grace does not erase community, but it is not enslaved by law.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-unifier',
          title: 'Christ Connection — The Spirit Unites Across Difference',
          html:
            'The council does not force Gentiles to become Jewish, nor does it erase Jewish identity. Instead, it creates space for both to coexist in Christ. The Spirit works through apostles and elders to discern how grace and community can be held together. This is the miracle: genuine unity amid real difference.',
        },
        {
          kind: 'carry',
          html:
            'When you encounter others in faith who practice things differently, who have different convictions, remember the Jerusalem Council. Unity does not require uniformity. Grace does not erase differences, but it makes space for them. Can you hold your convictions lightly enough to make room for others&apos; faith?',
        },
        {
          kind: 'reflection',
          id: 'acts15-unity',
          prompt: 'Where are you tempted to add rules or conditions that might divide the body of Christ? How might you cultivate grace toward those whose faith looks different from yours?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We believe that through the grace of the Lord Jesus Christ we shall be saved, even as they. For it seemed good to the Holy Ghost to lay upon you no greater burden than these necessary things.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 15 · Study Guide',
  },

  hasHebrew: false,
};
