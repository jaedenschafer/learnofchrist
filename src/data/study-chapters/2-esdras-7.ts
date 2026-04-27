import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_7: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 7,

  intros: [
    'The angel Uriel speaks of the narrow gate and the way of salvation. Few find it; many walk the broad way toward destruction. Yet those who enter the narrow gate are few but certain—the elect whom God preserves.',
    'This chapter contrasts the abundance of those who perish with the precision of those who are saved. It calls readers to awaken from spiritual slumber and seek the way that leads to life.',
  ],

  sections: [
    {
      ref: '2 Esdras 7:1–14',
      title: 'The Narrow Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(2, 'And the Lord said unto me, Behold, the days come, when the mouth of hell shall be opened.'),
            plain(4, 'Many shall go in, but few shall come out.'),
            plain(5, 'And there is a strait gate set in the midst, and within it is written, This is the way to life.'),
            plain(8, 'They that enter therein are few, and they alone shall obtain salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-gate',
          html:
            'The gate is narrow—entrance requires surrendering pride, self-reliance, and false hopes. Many choose easier paths. But the narrow gate is set by God and marked: "This is the way to life." Those who pass through find salvation.',
        },
        {
          kind: 'hebrew',
          id: 'esdras7-derech',
          title: 'Derech—Way',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derech</strong> · way; path; journey',
          description: 'Life is a derech—a journey along a path. God marks the true derech. To walk it requires hearing, accepting, and following the divine direction.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-way',
          title: 'Christ Connection—The Way, the Truth, and the Life',
          html:
            'Jesus is the narrow gate and the way itself. To follow Him is to walk the path to life. His way is demanding but true—it leads not to destruction but to resurrection.',
        },
        {
          kind: 'carry',
          html:
            'You stand at a crossroads. The easy paths are crowded; the way to life is narrow. Yet it is marked. Will you turn from comfort and convention to follow the true way?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-choose',
          prompt: 'What makes the narrow way difficult for you? What would you have to surrender to enter it?',
        },
      ],
    },

    {
      ref: '2 Esdras 7:104–115',
      title: 'The Day of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(104, 'And the Lord said, I shall judge all things by truth, and every soul shall stand before my throne.'),
            plain(107, 'And the wicked shall confess their sins, and the righteous shall receive their reward.'),
            plain(110, 'For the judgment is upon all; none shall escape.'),
            plain(115, 'Therefore, prepare thyself, that thou mayest be among those that are saved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-judgment',
          html:
            'Judgment is universal and true. Every soul stands before God&apos;s throne. The wicked confess; the righteous receive. There is no hiding, no escape. The call is urgent: prepare now, while time remains.',
        },
        {
          kind: 'greek',
          id: 'esdras7-krisis',
          title: 'Krisis—Judgment',
          script: 'κρίσις',
          translit: '<strong>Krisis</strong> · judgment; decision; separation',
          description: 'Krisis is not mere condemnation but a separation—sorting wheat from chaff, the righteous from the wicked. It is both judgment and vindication.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-judge',
          title: 'Christ Connection—The Righteous Judge',
          html:
            'Jesus is the Judge who comes in righteousness. Those who have trusted in Him face not condemnation but vindication. His judgment is true because He is the Truth.',
        },
        {
          kind: 'carry',
          html:
            'Judgment is coming. Yet it is not meant to paralyze you but to awaken you. The call is to prepare—to live in truth, to walk the narrow way, to align yourself with righteousness.',
        },
        {
          kind: 'reflection',
          id: 'esdras7-prepare',
          prompt: 'What does it mean to "prepare" yourself for the day of judgment? What would change in how you live if you truly believed it was near?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There is a strait gate set in the midst, and within it is written, This is the way to life. They that enter therein are few, and they alone shall obtain salvation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 7 · Study Guide',
  },

  hasHebrew: true,
};
