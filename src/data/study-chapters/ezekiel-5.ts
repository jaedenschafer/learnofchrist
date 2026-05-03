import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 5 — The Razor of Judgment
 *
 * God commands Ezekiel to take a sharp razor and shave his head and beard. Then
 * he divides the hair into thirds: one third burned in fire, one third scattered
 * to the wind, one third struck with a sword. Each third represents a portion of
 * Jerusalem — destroyed, scattered, slain. The judgment is proportionate and
 * terrible. And yet God has not utterly destroyed. A small number are saved.
 */
export const EZEKIEL_5: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Ezekiel&apos;s sign-acts continue to become more extreme. First the tile and siege works. Then 430 days of lying on his side. Now God commands him to take a razor — a tool associated with shame in ancient Israel — and shave his head and beard completely. In the presence of the exiles, he is stripped of these marks of dignity. Then he divides the shorn hair into three equal parts and acts out the fates of Jerusalem: one portion burned, one scattered to the wind, one struck with a sword. The symbolism is relentless. Jerusalem will be consumed by fire. Its people will be scattered to exile. Its armies will be struck down. This is the judgment Ezekiel is forced to embody, strand by strand.',
  ],

  sections: [
    {
      ref: 'Ezekiel 5:1–4',
      title: 'The Razor Divides',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'And thou, son of man, take thee a sharp knife, take thee a barber&apos;s razor, and cause it to pass upon thine head and upon thy beard: then take thee balances to weigh, and divide the hair.'),
            plain(2, 'Thou shalt burn with fire a third part in the midst of the city, when the days of the siege are fulfilled: and thou shalt take a third part, and smite about it with a knife: and a third part thou shalt scatter in the wind; and I will draw out a sword after them.'),
            plain(3, 'Thou shalt also take thereof a few in number, and bind them in thy skirts.'),
            plain(4, 'Then take of them again, and cast them into the midst of the fire, and burn them in the fire; for thereof shall a fire come forth into all the house of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk5-razor-judgment',
          html: 'The razor divides with mathematical precision. One third, one third, one third. Each portion of Ezekiel&apos;s hair is assigned a mode of destruction: fire, wind, sword. This is not chaos. This is judgment administered with proportion and clarity. God is not raging arbitrarily. He is acting according to the measure of Jerusalem&apos;s unfaithfulness. Yet even in the midst of this total judgment, a remnant is saved. A few hairs are bound in Ezekiel&apos;s skirts — and from these, paradoxically, another fire emerges. Not destruction but new beginning[res:gog-magog-bibleodyssey].',
        },
        {
          kind: 'carry',
          html: 'We live in a God-ordered universe where actions have consequences, where choices matter, where justice is real. But the God who judges is also the God who preserves a remnant. The fire that falls on Jerusalem is not the final word. From the ashes of judgment, God will build again.',
        },
        {
          kind: 'reflection',
          id: 'ezk5-judgment-grace',
          prompt: 'Where do you see both God&apos;s judgment and God&apos;s grace at work in your own life? How does it change your understanding of God to know that judgment itself can be an act of love?',
        },
      ],
    },

    {
      ref: 'Ezekiel 5:5–9',
      title: 'Jerusalem in the Center',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(5, 'Thus saith the Lord God; This is Jerusalem: I have set it in the midst of the nations and countries that are round about her.'),
            plain(6, 'And she hath changed my judgments into wickedness more than the nations, and my statutes more than the countries that are round about her: for they have refused my judgments and my statutes, they would not walk in them.'),
            plain(7, 'Therefore thus saith the Lord God; Because ye have multiplied more than the nations that are round about you, and have not walked in my statutes, neither have kept my judgments, neither have done according to the judgments of the nations that are round about you;'),
            plain(8, 'Therefore thus saith the Lord God; Behold, I, even I, am against thee, and will execute judgments in the midst of thee in the sight of the nations.'),
            plain(9, 'And I will do in thee that which I have not done, and whereunto I will not do any more the like, because of all thine abominations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk5-privileged-accountable',
          html: 'Jerusalem is placed at the center of the nations not as a privilege to be exploited but as a responsibility to be lived. The city that has been given God&apos;s law, God&apos;s temple, God&apos;s covenant — it is precisely this city that has fallen deeper into wickedness than the nations around it. The greater the privilege, the greater the accountability. Jerusalem was meant to be a light to the nations. Instead, it has become a cautionary tale. The judgment is proportionate to the privilege abandoned[res:tyre-archaeology].',
        },
        {
          kind: 'christ',
          id: 'ezk5-christ-center-judgment',
          title: 'Christ Connection — The Center Made New',
          html: 'Christ comes to a Jerusalem still set at the center of God&apos;s purposes. He comes not to destroy that centering but to redeem it. The temple He speaks of is not the stone structure but His own body — the true center around which all nations will gather. Where Ezekiel saw Jerusalem split into thirds for judgment, the New Testament sees all believers gathered into one body in Christ, the Center who holds all things together.',
        },
        {
          kind: 'carry',
          html:
            'We too are placed in positions of privilege — of opportunity, of knowledge, of resources. Our accountability is not less than Jerusalem&apos;s but greater. To whom much is given, much is required. The judgment of God falls first on those who have received most.',
        },
        {
          kind: 'reflection',
          id: 'ezk5-privilege-responsibility',
          prompt: 'What privileges has God given you — resources, knowledge, position, opportunity? How are you stewarding them? Where might God be calling you to greater faithfulness in proportion to what you have been given?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"Behold, I, even I, am against thee." — Ezekiel 5:8',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 5 · Study Guide',
  },  resources: [
    {
      id: 'gog-magog-bibleodyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gog and Magog',
      url: 'https://www.bibleodyssey.org/dictionary/gog/',
      description: 'SBL entry on the mysterious Gog figure in Ezekiel and Revelation.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: false,
};
