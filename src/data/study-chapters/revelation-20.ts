import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

export const REVELATION_20: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 20,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 14 },
  opener: {
    matchTitle: /Last Judgment/i,
    caption: 'Revelation 20',
  },
  intros: [
    'An angel descends with a great chain. The dragon — the old serpent, the devil, Satan — is bound for a thousand years and cast into the bottomless pit. The faithful who died for their witness to Jesus live and reign with Christ. This is the first resurrection. For a thousand years they rule with Him as priests of God and of Christ.',
    'After the thousand years, Satan is loosed for a little season. He gathers Gog and Magog for one final assault. Fire from heaven devours them. The devil is cast into the lake of fire and brimstone forever. Then the last courtroom: the great white throne. The dead are judged. The Book of Life is opened. Whoever is not found written in it is cast into the lake of fire — the second death.',
  ],

  sections: [
    {
      ref: 'Revelation 20:1–3',
      title: 'The Dragon Bound a Thousand Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-angel-descend',
          html:
            'Heaven does not watch passively. The angel comes with both key and chain — equipped with both authority and instrument. The bottomless pit becomes a prison. This is the cosmic reversal: the one who was loosed to deceive is now locked away[res:sefaria-daniel-12-resurrection][res:sefaria-isaiah-2-all-nations].',
        },
        {
          kind: 'greek',
          id: 'rev20-chilia-ete',
          title: 'Chilia etē — &ldquo;Thousand Years&rdquo;',
          script: 'χίλια ἔτη',
          translit: '<strong>chilia etē</strong> · a thousand years',
          description:
            'The thousand years appears six times in Revelation 20:2–7. Christian history has debated what it means — premillennial, postmillennial, amillennial — but the verse leaves John&apos;s point unmistakable: the dragon&apos;s binding is real, limited in time, and secure.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 2,
              spans: [
                t('And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-three-names',
          html:
            'Four names for one enemy: the dragon, the old serpent, the Devil, Satan. He was there in Genesis 3, deceiving in the garden. He has not changed. But his future is fixed. The binding is not a removal from all activity; it is a restraint on his ability to &ldquo;deceive the nations.&rdquo;',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 3,
              spans: [
                t('And cast him into the bottomless pit, and shut him up, and set a seal upon him, that he should deceive the nations no more, till the thousand years should be fulfilled: and after that he must be loosed a little season.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The deceptions whispered to you — that you are too broken, that God has forgotten, that this darkness is permanent — have an expiration date. The one who speaks them is bound. He does not get to set the terms of your story. You do[res:bibleodyssey-book-of-life].',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-1',
          prompt:
            'What lie has shaped the longest shadow in your thinking? What changes when you say aloud, &quot;This will not last forever&quot;?',
        },
      ],
    },

    {
      ref: 'Revelation 20:4–6',
      title: 'Thrones, the First Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 4,
              spans: [
                t('And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-thrones',
          html:
            'John sees thrones. Not crowds, not armies — those who &ldquo;sat upon them.&rdquo; Judgment is given to them. These are the faithful, specifically those who &ldquo;were beheaded for the witness of Jesus.&rdquo; They did not compromise. They did not receive the mark. And now they do not simply rest — they <em>reign with Christ</em>.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 5,
              spans: [
                t('But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rev20-anastasis-prote',
          title: 'Anastasis prōtē — &ldquo;First Resurrection&rdquo;',
          script: 'ἀνάστασις πρώτη',
          translit: '<strong>anastasis prōtē</strong> · rising again, the first rising',
          description:
            'Anastasis is used throughout Scripture for resurrection to life. John identifies this one as <em>first</em>. The implication settles the question: there is a second one. For those marked by trust in Christ, it comes now. For the rest, it comes later.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 6,
              spans: [
                t('Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-blessed-holy',
          html:
            'Two words: <em>blessed</em> and <em>holy</em>. To have part in the first resurrection is to be blessed — marked with God&apos;s delight. The second death — the lake of fire — cannot touch them. They become what Exodus promised but Revelation fulfills: priests of God and of Christ.',
        },
        {
          kind: 'christ',
          id: 'rev20-christ-reign',
          title: 'Christ Connection — Living and Reigning with Christ',
          html:
            'Paul tells Timothy, &quot;If we suffer, we shall also reign with him&quot; (2 Tim. 2:12). The cross is not the end of Christ&apos;s reign; it is its inauguration. To call Him Lord <em>now</em> — in a world where evil still speaks, where death still takes, where the dragon still lies — is to already participate in His victory. Suffering with Christ is how we come to reign with Him.',
        },
        {
          kind: 'carry',
          html:
            'You are invited into the reign of Christ <em>now</em>, not only at the end of the age. This does not mean the world bends to your will. It means you stand in a reality larger than what you see — the kingdom that is already here and not yet fully visible. Your faithfulness in a world of lies, your trust in a season of loss, your refusal to worship what glitters — these are not small things. They are the way you reign.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-2',
          prompt:
            'Where is Christ calling you to stand with Him <em>now</em> — even if the wider world does not yet see Him as victorious? What would it mean to reign with Him in that place?',
        },
      ],
    },

    {
      ref: 'Revelation 20:7–9',
      title: 'Satan Loosed, Gog and Magog Gathered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 7,
              spans: [
                t('And when the thousand years are expired, Satan shall be loosed out of his prison,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-loosed-season',
          html:
            'The thousand years end. The binding ends. Satan is loosed &ldquo;for a little season.&rdquo; Not forever — just as the binding was limited, so is this final loosing. He has one last chapter to write, and John names it with terrible clarity.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 8,
              spans: [
                t('And shall go out to deceive the nations which are in the four quarters of the earth, Gog and Magog, to gather them together to battle: the number of whom is as the sand of the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-gog-magog',
          html:
            'Gog and Magog come from Ezekiel 38—39, where they represent the ultimate assault on God&apos;s people. John sees them gathered for war. &quot;As the sand of the sea&quot; — a number without limit, an army without count. The deception is complete. The rebellion is total. And it will be met with something that cannot be defeated.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 9,
              spans: [
                t('And they went up on the breadth of the earth, and compassed about the camp of the saints about, and the beloved city: and fire came down from God out of heaven, and devoured them.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The camp of the saints is surrounded. The beloved city is under siege. And God needs only one thing — fire from heaven. Your current circumstances, your current opposition, your current fear — all of these exist in a cosmic narrative you are invited to trust even when you cannot see the end.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-3',
          prompt:
            'Where do you feel surrounded right now — by circumstances, by voices, by the weight of the world? How would it change things if you genuinely believed the end of that siege is already written?',
        },
      ],
    },

    {
      ref: 'Revelation 20:10',
      title: 'The Devil into the Lake of Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 10,
              spans: [
                t('And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-devil-lake',
          html:
            'The deceiver is cast into the lake of fire. He joins the beast and the false prophet — his own instruments of deception, now all together in their final place. They are tormented &ldquo;day and night for ever and ever.&rdquo; This is not annihilation. It is eternal separation from the light, from life, from God. This is what the deceiver chose.',
        },
        {
          kind: 'christ',
          id: 'rev20-christ-victor',
          title: 'Christ Connection — The Serpent Crushed',
          html:
            'Genesis 3:15 prophesied that the seed of the woman would crush the serpent&apos;s head. Revelation 20:10 is the public, final completion of what the cross secured. Hebrews 2:14 says Christ died &quot;that through death he might destroy him that had the power of death, that is, the devil.&quot; What was accomplished at Calvary is now made visible for all creation to see.',
        },
        {
          kind: 'carry',
          html:
            'Whatever the deceiver has whispered to you — about your value, about God&apos;s love, about your future — is being spoken from a place already judged and already bound. You are not fighting an enemy with an uncertain fate. You are walking with the One who has already won.',
        },
      ],
    },

    {
      ref: 'Revelation 20:11–13',
      title: 'The Great White Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 11,
              spans: [
                t('And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-white-throne',
          html:
            'John sees a throne unlike any other: white — the color of holiness, of judgment beyond appeal, of truth that cannot be hidden. The one seated on it is God. And creation itself recoils. The earth and heaven flee. There is no place to hide. There is nowhere left to run.',
        },
        {
          kind: 'greek',
          id: 'rev20-thronos-leukos',
          title: 'Thronos leukos — &ldquo;White Throne&rdquo;',
          script: 'θρόνος λευκός',
          translit: '<strong>thronos leukos</strong> · throne of whiteness, of holiness',
          description:
            'White appears throughout Revelation as the color of victory and judgment. This throne is the one from which all other judgments flow — the final court, before which all creation must stand.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 12,
              spans: [
                t('And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev20-books-opened',
          html:
            'Small and great — the whole human family — stand before the throne. Two sets of books appear. One records deeds: every word, every action, every secret. The other holds names. Salvation is not earned by a spotless record in the deed-books; it is secured by having one&apos;s name in the Lamb&apos;s book. Yet the deeds matter — they are the visible shape of what faith looks like.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 13,
              spans: [
                t('And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'You are known. Your works are written down. And the question is not whether you have been perfect — no one has. The question is whether your name is written in the Lamb&apos;s book. That book was not written on the day of judgment. It was written before the foundation of the world, in the blood of Christ. If you have called on His name, your name is already there.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-4',
          prompt:
            'Imagine standing before that white throne. On what would your hope rest — your deeds, or the Lamb&apos;s blood? Which one feels safer to you right now?',
        },
      ],
    },

    {
      ref: 'Revelation 20:14–15',
      title: 'The Book of Life, the Second Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('And death and hell were cast into the lake of fire. This is the second death.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rev20-deuteros-thanatos',
          title: 'Deuteros thanatos — &ldquo;Second Death&rdquo;',
          script: 'δεύτερος θάνατος',
          translit: '<strong>deuteros thanatos</strong> · the second death',
          description:
            'The first death is physical — the separation of soul from body. The second death is final — eternal separation from God. Paul writes, &quot;The wages of sin is death; but the gift of God is eternal life through Jesus Christ&quot; (Rom. 6:23). To refuse that gift is to choose the second death.',
        },
        {
          kind: 'commentary',
          id: 'rev20-death-hell-cast',
          html:
            'Death and hell — hades, the realm of the dead — are cast into the lake of fire. They themselves are judged and destroyed. There is no longer a cycle of death and afterlife in separation from God. There is only the lake of fire for those who refuse the Lamb&apos;s book.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 15,
              spans: [
                t('And whosoever was not found written in the book of life was cast into the lake of fire.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'rev20-biblion-zoes',
          title: 'Biblion zōēs — &ldquo;Book of Life&rdquo;',
          script: 'βιβλίον ζωῆς',
          translit: '<strong>biblion zōēs</strong> · book of life',
          description:
            'Revelation 13:8 calls it &quot;the book of life of the Lamb slain from the foundation of the world.&quot; Names are written in it because of the Lamb&apos;s sacrifice, not because of human effort or worthiness. To believe on Him is to be enrolled.',
        },
        {
          kind: 'christ',
          id: 'rev20-christ-book-life',
          title: 'Christ Connection — The Lamb&apos;s Book of Life',
          html:
            'Your name is not on God&apos;s radar <em>now</em>; it was written in the Lamb&apos;s book before time began. You were not an afterthought. You were not a surprise. John 3:16 says, &quot;Whosoever believeth in him should not perish, but have everlasting life.&quot; Believing is the act of saying yes to what was written before you drew your first breath.',
        },
        {
          kind: 'carry',
          html:
            'You can know your name is in the book of life. Not by examining your moral record — it will never be perfect. But by trusting the Lamb whose blood paid for every page. If you have turned to Christ, called on His name, believed in His resurrection — your name is already written. The second death has no claim on you.',
        },
        {
          kind: 'reflection',
          id: 'rev20-ref-5',
          prompt:
            'If the great white throne judgment were today, would you know for certain your name was in the book of life? If not, what is keeping you from calling on the name of Jesus right now?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 20',
    quote:
      '&quot;And whosoever was not found written in the book of life was cast into the lake of fire.&quot; The Lamb&apos;s book is open. The Lamb&apos;s blood is the cost of the entry.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 20 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-daniel-12-resurrection',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 12 — Many Shall Awake',
      url: 'https://www.sefaria.org/Daniel.12',
      description: 'OT foundation for the resurrection of the just and the unjust at the great white throne.',
    },
    {
      id: 'sefaria-isaiah-2-all-nations',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 2:2–4 — Universal Peace',
      url: 'https://www.sefaria.org/Isaiah.2.2',
      description: 'Eschatological vision of the kingdom established and all nations coming to the mountain.',
    },
  ],


};
