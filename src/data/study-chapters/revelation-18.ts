import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 18 — Babylon the great is fallen, is fallen.
 *
 * One of Scripture&apos;s longest funeral dirges. The fall of the city that seduced
 * the nations, that drank the blood of saints, that built its throne on the bones
 * of the martyrs. Heaven rejoices. Earth weeps. A millstone is cast. And the voice
 * of harpers and musicians is heard in her no more.
 */
export const REVELATION_18: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 18,

  estimatedMinutes: { beginner: 9, intermediate: 13, deep: 17 },
  intros: [
    'Revelation 18 is one of Scripture&apos;s most haunting passages: a sustained, ancient-sounding funeral dirge over Babylon, the world-system that seduced nations with her wealth and dressed herself in lies. An angel descends "having great power; and the earth was lightened with his glory" to announce, simply and twice: the great city is fallen, fallen.',
    'But the chapter is not only judgment. It is also an escape route: "Come out of her, my people." Three distinct groups then mourn her — merchants lamenting their lost profit, shipmasters weeping over dead commerce, and the buyers of her goods. Heaven, in stark contrast, rejoices: what earth grieves over, heaven celebrates as justice long deferred, finally here. The fingerprints of Christ run through every verse: His call to separation, His redemption of souls, His vindication of martyrs, His promise that all human systems built on blood will one day be unmade.',
  ],

  opener: {
    matchTitle: /babylon/i,
    matchArtist: /dore/i,
    caption: 'The Fall of Babylon',
  },

  sections: [
    /* ─── Revelation 18:1–2 — "Babylon the great is fallen" ───────────── */
    {
      ref: 'Revelation 18:1–2',
      title: '&quot;Babylon the Great Is Fallen&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(1, t('After these things I saw another angel come down from heaven, having great power; and '), hy('the earth was lightened with his glory', 'rev18-lightened'), t('.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-lightened',
          html: 'The same verb used in Matthew 6:30 and Luke 12:28 of God&apos;s care for the lilies. The earth is not filled with fear or darkness at the angel&apos;s arrival — it is <em>lightened.</em> The advent of Babylon&apos;s judgment is announced as good news.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(2, t('And he cried mightily with a strong voice, saying, '), hp('Babylon the great is fallen, is fallen', 'rev18-pesein'), t(', and is become the habitation of devils, and the hold of every foul spirit, and a cage of every unclean and hateful bird.'), ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev18-pesein',
          title: 'Pesein — Fall',
          script: 'πέσειν',
          translit: '<strong>pesein</strong> · to fall, collapse, be brought down',
          description: 'The angel does not say "let her fall" (a future conditional) but announces her fall as accomplished fact. Babylon&apos;s doom is so certain that God speaks of it in the past tense, even before the millstone lands.',
        },
        {
          kind: 'christ',
          id: 'rev18-christ-fall',
          title: 'Christ Connection — The City on the Hill',
          html: 'Jesus taught that "a city that is set on a hill cannot be hid" (Matt. 5:14). He was speaking of His church, His people — "the light of the world," salt that has not lost its savor. Babylon is the anti-church: a city that gleams for a moment, built on the foundation of lies, that will collapse utterly. Christ builds one city that cannot fall; Babylon builds another. On that day, there is no ambiguity which was real.',
        },
        {
          kind: 'carry',
          html: 'Babylon — the system of power without mercy, wealth without conscience, beauty without truth — looks permanent until the moment it falls. The angel arrives to announce what God has already decided. You are not waiting for judgment on injustice; you are waiting for the announcement of judgment already rendered.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-fallen',
          prompt: 'What structure or power in your own life have you been fearing or opposing, that God may have already judged?',
        },
      ],
    },

    /* ─── Revelation 18:4–5 — "Come out of her, my people" ─────────────── */
    {
      ref: 'Revelation 18:4–5',
      title: '&quot;Come Out of Her, My People&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(4, t('And I heard another voice from heaven, saying, '), hp('Come out of her, my people', 'rev18-exelthō'), t(', that ye be not partakers of her sins, and that ye receive not of her plagues.'), ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev18-exelthō',
          title: 'Exelthō — Come Out',
          script: 'ἐξέλθω',
          translit: '<strong>exelthō</strong> · go out, depart, escape',
          description: 'The same root as Exodus — "the way out." It is the oldest word in Scripture for God&apos;s call to separation. Leave the place of judgment. Come out.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(5, t('For her sins have '), hg('reached unto heaven', 'rev18-sins-heaven'), t(', and God hath remembered her iniquities.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-sins-heaven',
          html: 'The phrase echoes Genesis 11:4, the Tower of Babel: "Let us build us a city... whose top may reach unto heaven." Every human system built in defiance of God — every empire that says "we will make ourselves safe, righteous, eternal without God" — eventually touches heaven. God notices.',
        },
        {
          kind: 'christ',
          id: 'rev18-christ-separation',
          title: 'Christ Connection — Separated Unto Him',
          html: '2 Corinthians 6:17 quotes Isaiah 52:11: "Come out from among them, and be ye separate, saith the Lord." Paul is saying the old call of the prophets is still the call of Christ. Jesus did not come to smooth over the line between the church and the world. He came to draw it, clearly. That separation is not cruelty — it is rescue.',
        },
        {
          kind: 'carry',
          html: 'Coming out of Babylon happens in ten thousand small moments, not one dramatic exit. It is the choice not to envy the merchant&apos;s house. The refusal to trade your conscience for comfort. The day you stop defending the indefensible because it was profitable. The moment you realize the city you thought would last forever was built on sand.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-come-out',
          prompt: 'What seductive lie of Babylon are you still believing? What would it cost you to come out?',
        },
      ],
    },

    /* ─── Revelation 18:7 — "Reward her as she rewarded you" ────────────── */
    {
      ref: 'Revelation 18:7',
      title: '&quot;Reward Her Even as She Rewarded You&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(7, t('How much she hath glorified herself, and lived deliciously, so much torment and sorrow give her: for she saith in her heart, I sit a queen, and am no widow, and shall see no sorrow.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-reward',
          html: 'The law of recompense is simple: as she measured, it shall be measured back. She glorified herself — so she receives torment in that same measure. She said in her heart "I shall see no sorrow" — so she receives sorrow for her boasting. God is not inventing a new punishment; He is giving her exactly what she loved: the fruits of her own ambition.',
        },
        {
          kind: 'carry',
          html: 'Babylon tells herself she is invulnerable, untouchable, eternal. That confidence is her trap. The God who sees knows that any system built on self-love, on the lie that it will never fall, is already fragile. Its strength was always borrowed.',
        },
      ],
    },

    /* ─── Revelation 18:9–11 — The merchants&apos; lament ─────────────────── */
    {
      ref: 'Revelation 18:9–10',
      title: 'The Merchants&apos; Lament (Part 1)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(9, t('And the '), hy('kings of the earth', 'rev18-kings'), t(' who have committed fornication and lived deliciously with her, shall bewail her, and lament for her, when they shall see the smoke of her burning,'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-kings',
          html: 'The kings weep first. They had the most to gain from Babylon&apos;s system — access to her wealth, the glamour of association, the appearance of power. Her fall takes their image with her.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(10, t('Standing afar off for the fear of her torment, saying, Alas, alas, that great city Babylon, that mighty city! for in one hour is thy judgment come.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-one-hour',
          html: 'The phrase "in one hour" appears five times in this chapter (verses 10, 17, 19, twice). It is not about literal time — it is about suddenness. The fall feels instantaneous. The city that looked permanent one moment is ash the next.',
        },
      ],
    },

    {
      ref: 'Revelation 18:11–13',
      title: 'The Merchants&apos; Lament (Part 2)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(11, t('And '), hp('the merchants of the earth shall weep and mourn over her', 'rev18-emporos'), t('; for no man buyeth their merchandise any more:'), ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev18-emporos',
          title: 'Emporos — Merchant',
          script: 'ἔμπορος',
          translit: '<strong>emporos</strong> · trader, merchant, one who traffics in goods',
          description: 'These are not lords or kings, but traders — the people whose entire existence depends on transaction, on the constant flow of money. When Babylon falls, their world ends.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(12, t('The merchandise of gold, and silver, and precious stones, and of pearls, and fine linen, and purple, and silk, and scarlet; and all thyine wood, and all manner vessels of ivory, and all manner vessels of most precious wood, and of brass, and iron, and marble;'), ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(13, t('And cinnamon, and odours, and ointments, and frankincense, and wine, and oil, and fine flour, and wheat, and beasts, and sheep, and horses, and chariots, and '), hp('slaves, and souls of men', 'rev18-christ-souls'), t('.'), ),
          ],
        },
        {
          kind: 'christ',
          id: 'rev18-christ-souls',
          title: 'Christ Connection — Redeemed, Not Merchandise',
          html: 'The souls of men listed as cargo alongside cinnamon and silk. This is Babylon&apos;s deepest blasphemy: reducing human beings to inventory. Christ&apos;s entire gospel is a counter-claim: "What is a man profited, if he shall gain the whole world, and lose his own soul?" (Matt. 16:26). Later, 1 Corinthians 6:20 cracks open the answer: "ye are bought with a price." Your soul is not merchandise. You were purchased — redeemed — by Christ&apos;s blood. Babylon thought you were for sale. He bought you home.',
        },
        {
          kind: 'carry',
          html: 'Babylon measures everything in price tags: your time, your body, your attention, your worth. She whispers that you exist to be consumed, that your value is what you can produce or cost or attract. Christ says otherwise. You are not inventory. You are beloved. You were never for sale.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-merchandise',
          prompt: 'Where in your life have you been treating yourself or others as merchandise? What would change if you believed, truly, that souls are not for sale?',
        },
        {
          kind: 'artwork',
          matchTitle: /market|commerce|merchant/i,
          caption: 'The Merchants of Babylon',
        },
      ],
    },

    /* ─── Revelation 18:14–17 — "In one hour so great riches is come to nought" */
    {
      ref: 'Revelation 18:14–17',
      title: '&quot;In One Hour So Great Riches Is Come to Nought&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(14, t('And the fruits that thy soul lusted after are departed from thee, and all things which were dainty and goodly are departed from thee, and thou shalt find them no more at all.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-fruits-departed',
          html: 'Babylon had lusted — the verb is strong. She desired these things as a person desires life. And in one hour they are gone. The dainty and goodly things. The fine things. The things she built a whole city to display. All gone.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(15, t('The merchants of these things, which were made rich by her, shall stand afar off for the fear of her torment, weeping and wailing,'), ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(16, t('And saying, Alas, alas, that great city, that was clothed in fine linen, and purple, and scarlet, and decked with gold, and precious stones, and pearls!'), ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(17, t('For in one hour so great riches is come to nought. And every shipmaster, and all the company in ships, and sailors, and as many as trade by sea, stood afar off,'), ),
          ],
        },
        {
          kind: 'carry',
          html: 'Wealth appears solid until the hour it collapses. The merchant who wept over his lost gold — he never saw it coming. The system he built his life around, that he was certain would endure, will be ash. And the saddest thing is not that he lost the gold. It is that he wasted a whole life loving something that was never real.',
        },
      ],
    },

    /* ─── Revelation 18:18–19 — The shipmasters&apos; lament ─────────────── */
    {
      ref: 'Revelation 18:18–19',
      title: 'The Shipmasters&apos; Lament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(18, t('And cried out as they saw the smoke of her burning, saying, What city is like unto this great city!'), ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(19, t('And they cast dust on their heads, and cried, weeping and wailing, saying, Alas, alas, that great city, wherein were made rich all that had ships in the sea by reason of her costliness! for in one hour is she made desolate.'), ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev18-erēmoō',
          title: 'Erēmoō — Made Desolate',
          script: 'ἐρημόω',
          translit: '<strong>erēmoō</strong> · make empty, make desolate, lay waste',
          description: 'She was full — full of merchants, ships, cargo, gold, the hum of transaction. And now she is empty. Abandoned. Silent. The same verb used of the judgment on Judah in Matthew 23:38.',
        },
        {
          kind: 'commentary',
          id: 'rev18-ships',
          html: 'The shipmasters are weeping not because they love the city, but because she made them rich. Her destruction is their ruin. The three groups that mourn Babylon — kings, merchants, shipmasters — all mourn for the same reason: she no longer serves their interests. They loved her only for what she could give them.',
        },
        {
          kind: 'carry',
          html: 'This is the tragedy of Babylon: no one truly loves her. Kings love her wealth. Merchants love her markets. Shipmasters love her profit. When she falls, no one grieves her; they grieve only what they lost. A city built by people who no one actually loves cannot last.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-empty',
          prompt: 'What in your life are you building love around that will leave you weeping when it falls? What would it mean to love something that will never disappear?',
        },
      ],
    },

    /* ─── Revelation 18:20 — "Rejoice over her, thou heaven" ───────────── */
    {
      ref: 'Revelation 18:20',
      title: '&quot;Rejoice Over Her, Thou Heaven&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(20, t('Rejoice over her, thou heaven, and ye '), hg('holy apostles and prophets', 'rev18-apostles'), t('; for God hath avenged you on her.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-apostles',
          html: 'Heaven rejoices. Not Earth. Not the merchants or kings. <em>Heaven</em> — the redeemed, the martyrs, the apostles and prophets who were killed for refusing Babylon&apos;s lies. God avenges the blood of His witnesses.',
        },
        {
          kind: 'christ',
          id: 'rev18-christ-avenged',
          title: 'Christ Connection — Vengeance and Vindication',
          html: 'Romans 12:19 says, "Vengeance is mine; I will repay, saith the Lord." Believers are told to let God avenge them. Revelation 18:20 shows the answer to that faith. The apostles and prophets who died waiting — they watch as God settles the account. Their patience was not wasted. Their blood was not forgotten. Jesus said, "Blessed are ye, when men shall revile you... and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad: for great is your reward in heaven" (Matt. 5:11–12). This verse is the fulfillment of that word.',
        },
        {
          kind: 'carry',
          html: 'If you have been faithful and suffered for it, if you have spoken truth and been silenced, if you have lost for refusing to worship at Babylon&apos;s altar — heaven is cheering. Not mocking your loss. Honoring your choice. And on the day when all accounts are settled, you will see that every tear you shed was counted, every cost you paid was noted, and every refusal to compromise was more precious than gold.',
        },
      ],
    },

    /* ─── Revelation 18:21 — The millstone cast into the sea ───────────── */
    {
      ref: 'Revelation 18:21',
      title: 'The Millstone Cast Into the Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(21, t('And a mighty angel took up a stone like a '), hy('great millstone', 'rev18-mylinos'), t(', and cast it into the sea, saying, Thus with violence shall that great city Babylon be thrown down, and shall be found no more at all.'), ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev18-mylinos',
          title: 'Mylinos — Millstone',
          script: 'μύλινος',
          translit: '<strong>mylinos</strong> · made of millstone, relating to a mill',
          description: 'A millstone is the heaviest ordinary object in the ancient world — what a man uses to grind grain. Jesus used it in Matthew 18:6 as an image of judgment: "whosoever shall offend one of these little ones… it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea." Here the city that offended the little ones is thrown down with a millstone.',
        },
        {
          kind: 'commentary',
          id: 'rev18-found-no-more',
          html: 'The violence of the image is not accidental. Babylon fell not to argument but to judgment. Not to persuasion but to the sovereign act of a God who cannot be refused. The city that seemed eternal will be found no more at all — not hidden, not in exile, not waiting for restoration. Gone.',
        },
        {
          kind: 'artwork',
          matchTitle: /stone|judgment|sea/i,
          caption: 'The Millstone Falls',
        },
      ],
    },

    /* ─── Revelation 18:22–23 — "Found no more at all" ──────────────────── */
    {
      ref: 'Revelation 18:22–23',
      title: '&quot;The Voice of Harpers Shall Be Heard No More&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(22, t('And the voice of harpers, and musicians, and of pipers, and trumpeters, shall be heard no more at all in thee; and no craftsman, of whatsoever craft he be, shall be found any more in thee; and the sound of a millstone shall be heard no more at all in thee;'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-silence',
          html: 'Babylon is emptied of life. The music stops. The work stops. The daily hum of a city — trade, craft, labor — ceases. Only silence where there was thunder. Only ash where there was glory.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(23, t('And the light of a candle shall shine no more at all in thee; and the voice of the bridegroom and of the bride shall be heard no more at all in thee: for thy merchants were the great men of the earth; for by thy '), hg('sorceries', 'rev18-sorceries'), t(' were all nations deceived.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-sorceries',
          html: 'Babylon used sorcery — <em>pharmakeia</em> in Greek, the root of "pharmacy." She drugged the nations with her lies. She made her deceptions look like truth, her injustice look like order, her emptiness look like fullness. And the nations believed her. Until the day when the spell broke.',
        },
        {
          kind: 'carry',
          html: 'The day when Babylon falls, the first thing that stops is the music. The celebration. The voices of bridegroom and bride. The joy that covered the tears. In that silence, you will finally hear the truth she has been drowning out: that her promises were lies, that her path led nowhere, that her god was not god at all.',
        },
      ],
    },

    /* ─── Revelation 18:24 — "In her was found the blood of prophets" ────── */
    {
      ref: 'Revelation 18:24',
      title: '&quot;In Her Was Found the Blood of Prophets and Saints&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(24, t('And in her was found '), hp('the blood of prophets, and of saints, and of all that were slain upon the earth', 'rev18-blood'), t('.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-blood',
          html: 'The final verdict: Babylon is guilty not just of idolatry or pride, but of murder. The blood of every prophet, every saint, everyone killed for refusing her lies — it all belongs to her account. She did not wielding the sword herself, but she created the hunger that made the sword swing. She bred the spiritual atmosphere where the godly had to die.',
        },
        {
          kind: 'christ',
          id: 'rev18-christ-blood-avenged',
          title: 'Christ Connection — The Blood Cries Out',
          html: 'Genesis 4:10 — the blood of Abel cries out from the ground. Revelation 6:10 — the souls of the slain cry out, "How long, O Lord, dost thou not judge and avenge our blood on them that dwell on the earth?" Revelation 18:24 is the answer. Christ bore His own blood silently at Calvary, forgiving those who killed Him. But the martyrs&apos; blood does not go unanswered. The system that devoured the saints will be devoured in turn. God is just. His justice does not sleep.',
        },
        {
          kind: 'carry',
          html: 'If you have suffered for righteousness, if you have bled or grieved for the truth, your blood is remembered. The same God who sees Babylon&apos;s violence sees you. And He does not settle accounts in a single transaction. Every drop counts. Every cost is noted. Every faithfulness will be honored when the city of lies comes down and the city of God is fully revealed.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-blood',
          prompt: 'What is Babylon asking you to be complicit in? How are you being called to shed your own blood — to refuse, to resist, to stand apart?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 18',
    quote: '&quot;Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues.&quot;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 18 · Study Guide',
  },
};
