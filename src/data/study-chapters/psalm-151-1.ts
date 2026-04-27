import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALM_151_1: RichChapterContent = {
  bookSlug: 'psalm-151',
  bookName: 'Psalm 151',
  chapter: 1,

  intros: [
    "A short autobiographical psalm preserved in the Septuagint and Dead Sea Scrolls. The shepherd-king David remembers two moments — being chosen youngest among his brothers and slaying Goliath. Two memories that shape every later psalm: God&apos;s choosing of the small one, and God&apos;s deliverance through the despised weapon.",
    "Whether or not one counts this psalm as canonical, it preserves the heartbeat of the entire Psalter: God lifts the lowly and silences the mighty. David sings here as the boy he once was — and as the king he became when God chose him.",
  ],

  sections: [
    {
      ref: 'Psalm 151:1–4',
      title: 'I Was the Smallest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'I was small among my brethren, and the youngest in my father&apos;s house: I tended my father&apos;s sheep.'),
            plain(2, 'My hands made an instrument of music; my fingers tuned a harp.'),
            plain(3, 'And who shall tell my Lord? The Lord himself, he himself heareth.'),
            plain(4, 'He sent his angel and took me from my father&apos;s sheep, and anointed me with the oil of his anointing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-small',
          html: 'David begins with the smallness — not boasting, but remembering. He was the youngest. He kept the sheep. He tuned a harp. The hands that would later hold a kingdom first held a stringed instrument and a shepherd&apos;s rod. God&apos;s pattern of choosing the smallest is so consistent in Scripture that David sings it as his own life.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-mashach',
          title: 'Mashach — Anointed',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to anoint, to consecrate by oil',
          description: 'The same root that gives us Mashiach — Messiah. David is anointed; the title becomes destiny; the destiny ultimately points beyond David to Christ, the True Anointed One.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-chosen',
          title: 'Christ Connection — The Stone the Builders Rejected',
          html: 'Christ is the True Smallest — born in a stable, raised in despised Nazareth, mocked as the carpenter&apos;s son. Yet He is the One the Father anoints. As Psalm 151 points beyond David to a Greater David, every overlooked person who is chosen by God walks the same road Christ walked.',
        },
        {
          kind: 'carry',
          html: 'God still sees those whom families and societies overlook. He still anoints from the field, not the throne room. If you have been counted small, you are in the right company for what God does.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-small',
          prompt: 'Where do you feel smallest right now? What might God be choosing in that very place?',
        },
      ],
    },

    {
      ref: 'Psalm 151:5–7',
      title: 'I Faced the Giant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'My brethren were tall and beautiful, but the Lord took no pleasure in them.'),
            plain(6, 'I went out to meet the Philistine, and he cursed me by his idols.'),
            plain(7, 'But I drew his own sword from him; I beheaded him, and removed reproach from the children of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-goliath',
          html: 'David did not defeat Goliath with Goliath&apos;s weapons. He took the giant&apos;s own sword. The reproach Goliath had cast on Israel became the very blade God used to remove that reproach. The cursing tongue is silenced; the cursing weapon is turned.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-cross',
          title: 'Christ Connection — Defeated by His Own Weapon',
          html: 'Hebrews 2:14 says Christ &quot;through death destroyed him that had the power of death, that is, the devil.&quot; The enemy&apos;s great weapon was death; Christ took it from his hand and turned it. Like David with Goliath&apos;s sword, Christ at the cross drew out the very weapon of the adversary and used it to remove our reproach forever.',
        },
        {
          kind: 'carry',
          html: 'The enemy&apos;s weapons are not finally his. In the hand of the Lord, they are turned. Whatever curse you have lived under, look for the moment God draws the sword out of its sheath against the very one who held it.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-sword',
          prompt: 'What weapon has the enemy used most often against you? Where might God be turning that very thing into deliverance?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Psalm 151',
    quote: '&quot;I was small among my brethren... but the Lord took no pleasure in them. I went out to meet the Philistine, and he cursed me by his idols. But I drew his own sword from him; I beheaded him, and removed reproach from the children of Israel.&quot;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 151 · Study Guide',
  },
};
