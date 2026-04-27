import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_20: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 20,

  intros: [
    "An angel descends with a great chain. The dragon — the old serpent — is bound for a thousand years. The faithful reign with Christ. After the thousand years Satan is loosed, and gathers Gog and Magog to a final assault. Fire from heaven devours them. The devil is cast into the lake of fire and brimstone forever.",
    "Then the last courtroom of all: the great white throne. Earth and heaven flee. The dead, small and great, stand before the throne. The books are opened. Another book is opened — the Book of Life. Whoever is not found written there is cast into the lake of fire. This is the second death.",
  ],

  sections: [
    {
      ref: 'Revelation 20:1–10',
      title: 'The Dragon Bound and Defeated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.'),
            plain(2, 'And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years,'),
            plain(4, 'And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God... and they lived and reigned with Christ a thousand years.'),
            plain(10, 'And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-dragon',
          html: 'Three names for the same enemy: the dragon, the old serpent, the Devil and Satan. He has been the same one since the garden — the deceiver. The thousand years are interpreted differently across Christian traditions; the unmistakable point is that his time is finite, his end is fixed, and his deception will not last forever.',
        },
        {
          kind: 'greek',
          id: 'rev20-katabaino',
          title: 'Katabainō — Come Down',
          script: 'καταβαίνω',
          translit: '<strong>katabainō</strong> · descend',
          description: 'The angel comes down from heaven with the chain. Heaven is not a passive watcher; it actively bears the keys and the chain to a defeated enemy.',
        },
        {
          kind: 'christ',
          id: 'rev20-christ-victor',
          title: 'Christ Connection — The Serpent Crushed',
          html: 'Genesis 3:15 promised the seed of the woman would crush the serpent&apos;s head. Hebrews 2:14 says Christ died &quot;that through death he might destroy him that had the power of death, that is, the devil.&quot; Revelation 20 is the public, final completion of what the cross secured.',
        },
        {
          kind: 'carry',
          html: 'Whatever lie has been whispered to you long enough that it sounds like your own voice — it has an expiration date. The dragon is bound. The dragon is judged. The dragon does not get the last word over your life.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-1',
          prompt: 'What lie of the deceiver has been loudest in your life lately? What changes when you say to yourself, &quot;This will not last forever&quot;?',
        },
      ],
    },

    {
      ref: 'Revelation 20:11–15',
      title: 'The Great White Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(11, 'And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them.'),
            plain(12, 'And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works.'),
            plain(14, 'And death and hell were cast into the lake of fire. This is the second death.'),
            plain(15, 'And whosoever was not found written in the book of life was cast into the lake of fire.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-throne',
          html: 'Two sets of books are opened. One records what we have done — the deeds, every word, every secret. The other holds names — the Book of Life. Salvation is not earned by accumulating right entries in the deed-book; it is sealed by having one&apos;s name in the Lamb&apos;s book. Yet the deeds are not nothing: they are the record of whether the name corresponds to a living trust.',
        },
        {
          kind: 'christ',
          id: 'rev20-christ-book',
          title: 'Christ Connection — The Lamb&apos;s Book of Life',
          html: 'Revelation 13:8 calls it &quot;the book of life of the Lamb slain from the foundation of the world.&quot; Names are written in it because of the Lamb&apos;s blood. To &quot;believe on him&quot; (John 3:16) is to be enrolled. Whoever calls on the name of the Lord shall be saved (Romans 10:13) — that calling is the recording of the name.',
        },
        {
          kind: 'carry',
          html: 'You can know your name is in the book of life. Not by examining your works in isolation, but by trusting the Lamb whose blood paid for the page on which it is written.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-2',
          prompt: 'If today were the great white throne day, on what would your hope rest? Are you trusting your record, or trusting the Lamb?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 20',
    quote: '&quot;And whosoever was not found written in the book of life was cast into the lake of fire.&quot; The Lamb&apos;s book is open. The Lamb&apos;s blood is the cost of the entry.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 20 · Study Guide',
  },
};
