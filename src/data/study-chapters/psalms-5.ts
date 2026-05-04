import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 5 — The House of the Lord
 *
 * Give ear to my words, O Lord, consider my meditation. Hearken unto the voice
 * of my cry, my King, and my God. My voice shalt thou hear in the morning[res:sefaria-psalms-5]. But
 * as for me, I will come into thy house in the multitude of thy mercy. This is
 * the psalmist&apos;s morning prayer, his meditation offered to the Lord at dawn.
 * It is a prayer of approach—a journey toward the house of God, drawn by mercy,
 * seeking to worship in the fear of the Lord and the favor of His blessing.
 */
export const PSALMS_5: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 7, deep: 8 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 5',
  },
  intros: [
    'Psalm 5 is titled "A Meditation of David, which he prayed unto the Lord," and it is given as a morning prayer. The psalmist wakes and his first words are directed heavenward—"Give ear to my words, O Lord, consider my meditation." It is not a cry of distress, though there is urgency in the prayer. Rather, it is the voice of one who has learned that the first place to turn with both joy and struggle is to God. And the psalmist speaks to God as "my King, and my God"—both king and God, both sovereign and intimate.',
    'The movement of the psalm is one of orientation. The psalmist begins by crying out for God to hear. Then he affirms that his voice will be heard in the morning—that God listens for the prayers of the righteous. Then he makes his way—into God&apos;s house, drawn by the multitude of God&apos;s mercy, worshiping in fear and favor. And he concludes with the certainty that the righteous will be blessed, that the Lord will compass them with favor "as with a shield." The psalm is a journey inward—from the outer cry to the inner sanctuary, from fear to favor, from petition to assurance.',
  ],

  sections: [
    /* ─── Psalm 5:1–6 — The Morning Cry ────────────────────────────────────── */
    {
      ref: 'Psalm 5:1–6',
      title: 'Hear My Morning Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Give ear to my words, O Lord, consider my meditation.'),
            plain(2, 'Hearken unto the voice of my cry, my King, and my God: for unto thee will I pray.'),
            plain(3, 'My voice shalt thou hear in the morning, O Lord; in the morning will I direct my prayer unto thee, and will look up.'),
            plain(4, 'For thou art not a God that hath pleasure in wickedness: neither shall evil dwell with thee.'),
            plain(5, 'The foolish shall not stand in thy sight: thou hatest all workers of iniquity.'),
            plain(6, 'Thou shalt destroy them that speak leasing: the Lord will abhor the bloody and deceitful man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms5-give-ear',
          html:
            '"Give ear to my words, O Lord, consider my meditation." The psalmist asks God to listen not just to words, but to what lies beneath the words—the meditation, the contemplation, the yearning of the heart. It is a request for deep hearing, for the kind of attention that reads what is spoken and what is left unsaid.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-my-king',
          html:
            '"Hearken unto the voice of my cry, my King, and my God." Note the intimacy of the address. My King—God is not a distant ruler, but my King, related to me through that covenant relationship. My God—God is not God in general, but my God, who knows me by name and hears my voice. To pray with this language is to plant yourself in a specific relationship, not merely to appeal to cosmic power.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-morning',
          html:
            '"My voice shalt thou hear in the morning, O Lord; in the morning will I direct my prayer unto thee, and will look up." This is the practice of the psalmist: each morning, as the sun rises, he directs his prayer toward heaven and looks up. He does not assume that God is indifferent. He acts on the conviction that God listens in the morning, that the first words of his day will be heard.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-not-wicked',
          html:
            '"For thou art not a God that hath pleasure in wickedness: neither shall evil dwell with thee." The psalmist affirms something essential: God is not compromised by evil. God does not negotiate with it, does not find pleasure in it, does not allow it to dwell in His house. This is what it means to approach a holy God. The approach requires that we understand whom we are approaching—not a God who winks at sin, but one who cannot bear it.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-foolish',
          html:
            '"The foolish shall not stand in thy sight: thou hatest all workers of iniquity." The foolish—those who have rejected God&apos;s wisdom, who imagine they can hide their deeds, who presume upon God&apos;s mercy without repentance. Such shall not stand before God. And the workers of iniquity—those who practice evil deliberately, making it their business—God hates. Not with the destructive hatred of vindictiveness, but with the necessary opposition of holiness to corruption.',
        },
      ],
    },

    /* ─── Psalm 5:7–12 — In God's House ────────────────────────────────────── */
    {
      ref: 'Psalm 5:7–12',
      title: 'Mercy, Fear, and Favor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(7, 'But as for me, I will come into thy house in the multitude of thy mercy: and in thy fear will I worship toward thy holy temple[res:bible-odyssey-morning-psalms].'),
            plain(8, 'Lead me, O Lord, in thy righteousness because of mine enemies; make thy way straight before me.'),
            plain(9, 'For there is no faithfulness in their mouth; their inward part is very wickedness; their throat is an open sepulchre; they flatter with their tongue.'),
            plain(10, 'Destroy them, O God; let them fall by their own counsels; cast them out in the multitude of their transgressions; for they have rebelled against thee.'),
            plain(11, 'But let all those that put their trust in thee rejoice: let them ever shout for joy, because thou defendest them: let them also that love thy name be joyful in thee.'),
            plain(12, 'For thou, Lord, wilt bless the righteous; with favour wilt thou compass him as with a shield.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms5-multitude-mercy',
          html:
            '"But as for me, I will come into thy house in the multitude of thy mercy." The word "but" is pivotal. The foolish will not stand. The workers of iniquity are hated. And yet—the psalmist will come. He will enter God&apos;s house. And he will come not on the basis of his own righteousness, but on the basis of God&apos;s mercy. The entrance to God&apos;s house is not earned through perfection. It is given through mercy.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-fear-worship',
          html:
            '"And in thy fear will I worship toward thy holy temple." In God&apos;s house, the psalmist will worship in fear—not in terror, but in reverent awe. Worship is the appropriate response to the holy. To enter the house of God and not to fear would be to misunderstand entirely what it means to stand before the throne of the Almighty. The temple is holy. Therefore, fear is the threshold.',
        },
        {
          kind: 'hebrew',
          id: 'psalms5-yirah',
          title: 'Yirah — "Fear" (Reverent Awe)',
          script: 'יִרְאָה',
          translit: '<strong>Yirah</strong> · fear; awe; reverence; the beginning of wisdom',
          description:
            'The Hebrew word yirah carries layers of meaning. It is fear, but not mere terror. It is the respectful awe one feels before something (or someone) vastly greater than oneself. In the book of Psalms, yirah is often linked with wisdom—"the fear of the Lord is the beginning of wisdom." It is the kind of fear that leads to obedience, not from coercion, but from recognition of reality.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-enemies',
          html:
            '"Lead me, O Lord, in thy righteousness because of mine enemies; make thy way straight before me." The psalmist asks God to lead him in righteousness—specifically because of his enemies. There are those who oppose him, who watch for his stumble. And so he needs God&apos;s righteousness to guide him. This is spiritual warfare: the way to defeat your enemies is not to become like them, but to walk more carefully in God&apos;s righteous path.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-flattery',
          html:
            '"For there is no faithfulness in their mouth; their inward part is very wickedness; their throat is an open sepulchre; they flatter with their tongue." The portrait of the psalmist&apos;s enemies is vivid and dark. They are not honest opponents. They are deceivers. Their mouths are filled with flattery—words designed to seduce, to manipulate, to lead astray. And beneath the surface lies wickedness.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-destroy',
          html:
            '"Destroy them, O God; let them fall by their own counsels." The psalmist asks God to act against his enemies. And notice the mechanism: they will fall by their own counsels. Their own plans will be their undoing. God need not intervene with force. He need only allow their own scheming to come to fruition. This is the justice of God—letting consequences follow from choices.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-rejoice',
          html:
            '"But let all those that put their trust in thee rejoice." Again the "but"—the turning from judgment on the wicked to blessing on the righteous. Those who trust in God will rejoice. They will shout for joy. Not because evil has been destroyed, but because God defends them. He protects them. He stands between them and their enemies.',
        },
        {
          kind: 'commentary',
          id: 'psalms5-bless-favour',
          html:
            '"For thou, Lord, wilt bless the righteous; with favour wilt thou compass him as with a shield." The psalm concludes with this image: God&apos;s favor surrounding the righteous like a shield. A shield is not a weapon of offense. It is a protection—something that stands between you and harm. God&apos;s favor is such a shield. It does not prevent all difficulty. But it stands between you and the ultimate harm—the loss of God&apos;s presence.',
        },
        {
          kind: 'christ',
          id: 'psalms5-christ-door',
          title: 'Christ Connection — I Am the Door',
          html:
            'In John 10:9, Jesus says: "I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture." The psalmist speaks of entering God&apos;s house "in the multitude of thy mercy." Jesus is that way. He is the door through which we enter the house of God. We enter not through our own righteousness, but through His mercy. We stand not on the basis of our own perfection, but on the basis of His sacrifice. And like the psalmist, once inside that house, we are protected by the favor of God, surrounded as with a shield.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 5 teaches that every morning offers a new opportunity to turn toward God, to cry out to Him, to seek His guidance. The enemies—whether external opposition or internal doubt—cannot prevent your approach. God hears the morning prayer.[res:intertextual-psalms-5-nt] And as you enter His house, drawn by His mercy, you find yourself surrounded by His favor, protected as with a shield, blessed with the blessing that only the righteous can know.',
        },
        {
          kind: 'reflection',
          id: 'psalms5-morning-prayer',
          prompt: 'What would it mean to make Psalm 5 your morning practice—to give ear to God with your words before anything else in your day? How would this reorient your whole day?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Give ear to my words, O Lord. But as for me, I will come into thy house in the multitude of thy mercy...with favour wilt thou compass him as with a shield.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 5 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.5',
      description: 'Morning prayer for guidance with classical Jewish interpretation.',
    },
    {
      id: 'intertextual-psalms-5-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 5 in the NT',
      url: 'https://intertextual.bible/search?q=Psalm+5',
      description: 'Traces NT echoes of morning prayer and approaching God\'s house.',
    },
  ],

  hasHebrew: true,
};
