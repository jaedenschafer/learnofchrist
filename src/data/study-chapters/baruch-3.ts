import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const BARUCH_3: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 3,
  intros: [
    'Baruch 3 raises the exile&apos;s meditation to its highest pitch. The people ask: where is wisdom? Merchants search for precious things. Philosophers debate. But where is the wisdom that truly sustains life? The answer: it is not for sale. It is given only to those who hold fast to God&apos;s law.',
    'In exile, separated from the temple and land, the people discover their true treasure was not stone or soil but God&apos;s Word. The law itself is the treasure—the instruction that teaches how to live in God&apos;s presence. By forsaking the law, they forsook everything. Yet if they return to it, they return to everything.',
  ],
  sections: [
    {
      ref: 'Baruch 3:1–12',
      title: 'The Lament for Wisdom',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(1, 'O Lord, I cry unto thee; hear me.'),
          plain(9, 'Hear, O Israel, the commandments of life: give ear to understand wisdom.'),
          plain(10, 'How happenest it, Israel, that thou art in thine enemies&apos; land, that thou art waxen old in a strange country,'),
          plain(12, 'Thou hast forsaken the fountain of wisdom.'),
        ] },
        { kind: 'commentary', id: 'bar3-fountain', html: 'Wisdom is portrayed not as achievement but as a fountain—a source of living water from God. To forsake the fountain is to leave the source of life. The people had access through the law, through commandments. They chose broken cisterns. Now, in exile, they are parched.' },
        { kind: 'hebrew', id: 'bar3-torah', title: 'Torah — Law; Teaching', script: 'תּוֹרָה', translit: '<strong>Torah</strong> · law; instruction; the way of God', description: 'Torah is not merely rules imposed from outside. It is teaching—guidance for living in covenant with God. To study Torah is to seek wisdom. To obey it is to walk in the way of life.' },
        { kind: 'christ', id: 'bar3-christ-word', title: 'Christ Connection — The Word Made Wisdom', html: 'The exiles lament the loss of wisdom. In the gospel, Jesus appears as the Logos—the Word of God, the embodiment of God&apos;s wisdom. He does not merely teach wisdom; He is wisdom. In Him, the fountain flows again, now opened to all who thirst.' },
        { kind: 'carry', html: 'What fountain are you drinking from? What source of life have you chosen? The exiles learned that the simple law of God—obey, trust, return—was wiser than all the philosophies of Babylon. Where do you seek wisdom?' },
        { kind: 'reflection', id: 'bar3-sources', prompt: 'What sources of wisdom do you trust? Are there fountains you&apos;ve been drinking from that are not the fountain of life?' },
      ],
    },
    {
      ref: 'Baruch 3:29–37',
      title: 'Wisdom Revealed in the Law',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(29, 'No man hath found the way thereof, nor any that understandeth the paths thereof.'),
          plain(32, 'But he that knoweth the ways of the Lord, and keepeth his commandments, and his law, shall live for ever.'),
          plain(37, 'This is our God, and there shall no other be accounted of in comparison of him.'),
        ] },
        { kind: 'commentary', id: 'bar3-ways', html: 'Wisdom is not hidden by divine caprice. It is revealed through the law and commandments. The way is not found by human invention. It is given. It is opened to all who humble themselves enough to learn and obey. This is the highest intelligence.' },
        { kind: 'greek', id: 'bar3-phronesis', title: 'Phronesis — Practical Wisdom', script: 'φρόνησις', translit: '<strong>Phronesis</strong> · practical wisdom; right judgment', description: 'Phronesis is not theoretical knowledge but wisdom that guides daily life. It is the ability to see what is right and do it. God&apos;s law is the source of phronesis—it teaches not just what to believe but how to live.' },
        { kind: 'christ', id: 'bar3-christ-live', title: 'Christ Connection — The Living Way', html: 'Jesus says: "I am the way, the truth, and the life." He does not merely reveal the way; He is the way. To know Him is to know wisdom. To follow Him is to live.' },
        { kind: 'carry', html: 'To keep God&apos;s commandments is not to lose freedom. It is to discover it. The exiles thought they could find a better way. They were wrong. Now they understand: the way of God is the only way that leads anywhere.' },
        { kind: 'reflection', id: 'bar3-commandment', prompt: 'How have you experienced God&apos;s commandments—as restriction or as freedom? What would change if you saw them as the way to life?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Blessed are we, O Israel: for things that are pleasing to God are made known unto us. But he that knoweth the ways of the Lord, and keepeth his law, shall live for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 3 · Study Guide',
  },
  hasHebrew: true,
};
