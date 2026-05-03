import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 44 — The Priests and the Closed Gate
 *
 * The east gate, through which God&apos;s glory entered, shall remain shut. No one will
 * pass through it. Only the prince may sit within it. The descendants of Zadok—the
 * faithful priesthood—will be chosen to serve. Others are excluded for their past
 * unfaithfulness. This chapter establishes the rules of the renewed sanctuary,
 * making clear that holiness is not merely restored, but newly defined.
 */
export const EZEKIEL_44: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 44,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'The gate through which God&apos;s glory entered will remain shut forever. This is a powerful symbol. What God has sanctified cannot be profaned by common traffic. The threshold of God&apos;s dwelling place is inviolable. And the priesthood of the renewed temple will be limited to the house of Zadok—those who remained faithful when others corrupted the sanctuary.',
    'This raises a difficult question: What of those who were unfaithful? What of the priests and leaders who failed? Ezekiel&apos;s answer is unsparing. They will not minister at the altar. They will not enter the holy place. They will perform only the service of the gates. Faithful service is rewarded. Unfaithfulness has consequences. Yet even in this judgment, there is mercy. The unfaithful are not destroyed. They are simply restricted from the closest approach to the holy. There is still a place for them in the renewed community.',
  ],

  sections: [
    {
      ref: 'Ezekiel 44:1–16',
      title: 'The Closed Gate and the Chosen Priests',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(1, 'Then he brought me back the way of the gate of the outward sanctuary which looketh toward the east; and it was shut.'),
            plain(2, 'Then said the Lord unto me; This gate shall be shut, it shall not be opened, and no man shall enter in by it; because the Lord, the God of Israel, hath entered in by it, therefore it shall be shut.'),
            plain(3, 'It is for the prince; the prince, he shall sit in it to eat bread before the Lord; he shall enter by the way of the porch of that gate, and shall go out by the way of the same.'),
            plain(9, 'And the Levites that are gone away far from me, when Israel went astray, which went astray away from me after their idols; they shall even bear their iniquity.'),
            plain(15, 'But the priests the Levites, the sons of Zadok, that kept the charge of my sanctuary when the children of Israel went astray from me, they shall come near to me to minister unto me, and they shall stand before me to offer unto me the fat and the blood, saith the Lord God:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel44-closed',
          html:
            'The gate is closed because God has entered through it. Its sanctification is permanent. It is not sealed out of judgment, but out of reverence. What the holy has touched remains holy. The boundary between the sacred and the common is marked by this closed gate.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel44-zadok',
          html:
            'Zadok is a priesthood known for faithfulness. In the days when many priests failed, Zadok remained true. Here, Zadok&apos;s lineage is honored. Faithfulness matters. The priests who remained true when others fell away are appointed to the closest service. Your faithfulness is seen and remembered by God.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel44-zadok-name',
          title: 'Zadok — "Righteous" ',
          script: 'צָדוֹק',
          translit: '<strong>Zadok</strong> · righteous; just; a figure symbolizing righteousness and faithful priesthood',
          description:
            'The name itself suggests righteousness. In a renewal, those whose lives have been marked by righteousness and faithfulness are chosen for leadership.',
        },
        {
          kind: 'christ',
          id: 'ezekiel44-christ-priest',
          title: 'Christ Connection — Christ the True Priest',
          html:
            'Christ is the ultimate priest—not from the line of Aaron, but from the order of Melchizedek, who was priest before the Aaronic priesthood. He is the true Zadok—the righteous and faithful priest. And His priesthood is not limited by lineage or by the restrictions of the old law. All who trust in Him become priests with Him, able to approach God directly.',
        },
        {
          kind: 'carry',
          html:
            'Faithfulness is being watched. Your constancy in difficult times, your refusal to compromise when others fall away—these are not forgotten. God sees the Zadoks among His people. Those who remain faithful will be honored in the renewal.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel44-faithful',
          prompt: 'When have you chosen faithfulness even when it cost you something? Can you trust that God sees and remembers your constancy?',
        },
      ],
    },

    {
      ref: 'Ezekiel 44:17–31',
      title: 'The Laws of the Priests',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(17, 'And it shall come to pass, that when they enter in at the gates of the inner court, they shall be clothed with linen garments; and no wool shall come upon them, whiles they minister in the gates of the inner court, and within.'),
            plain(23, 'And they shall teach my people the difference between the holy and profane, and cause them to discern between the unclean and the clean.'),
            plain(28, 'And it shall be unto them for an inheritance: I am their inheritance: and ye shall give them no possession in Israel: I am their portion.'),
            plain(31, 'The priests shall not eat of any thing that is dead of itself, or torn, whether it be fowl or beast.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel44-garments',
          html:
            'The linen garments mark the priests as set apart. They are not like other people. They have restrictions, rules, and requirements that flow from their calling. Yet these restrictions are not burdens—they are signs of honor and purpose.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel44-inheritance',
          html:
            'Most striking: "I am their inheritance." God Himself is the priests&apos; inheritance. They will have no land, no property, no material security like others. But they have God. And God is enough. This is the radical trust asked of those who serve the holy.',
        },
        {
          kind: 'carry',
          html:
            'If you have chosen to serve God, to teach others the difference between holy and profane, to minister at the altar—then understand: your inheritance is God. Not comfort, not wealth, not earthly security. But the presence, the provision, and the purpose of God.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel44-inheritance-god',
          prompt: 'Can you say truly that God is your inheritance? If everything else were stripped away, would His presence be enough?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The sons of Zadok...they shall come near to me to minister unto me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 44 · Study Guide',
  },

  hasHebrew: true,
};
